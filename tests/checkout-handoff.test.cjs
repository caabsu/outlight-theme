const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const source = fs.readFileSync(process.env.CHECKOUT_HANDOFF_SOURCE || path.join(__dirname, '../assets/outlight-checkout.js'), 'utf8');
const AVEN = 54551175757897, FIRA = 54543739977801;
const line = (variant_id = AVEN, quantity = 1, extra = {}) => ({variant_id, quantity, properties: {}, ...extra});
const cart = (items = [line()], extra = {}) => ({items, currency: 'USD', total_price: 32820, attributes: {}, discount_codes: [], ...extra});

function harness(bag = cart(), responses = []) {
  const listeners = {}, submissions = [], dialogs = [], requests = [];
  function element(tag) {
    return {tag, children: [], dataset: {}, events: {}, append(...children) {this.children.push(...children);}, appendChild(child) {this.children.push(child);}, setAttribute() {}, addEventListener(name, callback) {this.events[name] = callback;}, close() {}, remove() {}, showModal() {dialogs.push(this);}, submit() {submissions.push({action: this.action, fields: Object.fromEntries(this.children.map(child => [child.name, child.value]))});}};
  }
  const context = {
    window: {OutlightCheckout: {enabled: true, origin: 'https://checkout.outlight.us'}, Shopify: {routes: {root: '/'}, customerPrivacy: {analyticsProcessingAllowed: () => false, marketingAllowed: () => false}}, location: {origin: 'https://outlight.us'}, addEventListener: (name, callback) => listeners[name] = callback},
    location: {search: ''}, document: {addEventListener: (name, callback) => listeners[name] = callback, createElement: element, getElementById: () => null, body: {appendChild() {}}},
    localStorage: {getItem: () => null, setItem() {}, removeItem() {}}, AbortSignal, URL, URLSearchParams, HTMLFormElement: class {},
    fetch: async (url, options) => {
      requests.push({url, options});
      const response = responses.shift();
      if (response instanceof Error) throw response;
      if (typeof response === 'function') return response();
      return response || {ok: true, json: async () => bag};
    },
  };
  vm.runInNewContext(source, context);
  const click = () => listeners.click({target: {closest: () => ({closest: () => null})}, button: 0, preventDefault() {}, stopImmediatePropagation() {}});
  const flush = () => new Promise(resolve => setImmediate(resolve));
  return {listeners, submissions, dialogs, requests, click, flush};
}

test('ordinary, multi-product and discount-split carts keep the secure card route and original cart intact', async () => {
  for (const [items, expected] of [
    [[line(AVEN, 2)], `${AVEN}:2`],
    [[line(AVEN), line(AVEN), line(FIRA)], `${AVEN}:2,${FIRA}:1`],
    [[line(AVEN, 5), line(AVEN, 5)], `${AVEN}:10`],
  ]) {
    const bag = cart(items), original = JSON.stringify(bag), h = harness(bag);
    h.click(); await h.flush();
    assert.equal(h.submissions.length, 1);
    assert.equal(h.submissions[0].action, 'https://checkout.outlight.us/start');
    assert.equal(h.submissions[0].fields.items, expected);
    assert.equal(JSON.stringify(bag), original);
    assert.equal(h.dialogs.length, 0);
  }
});

test('unsafe quantities and unsupported cart features retain the safe recovery without dropping data', async () => {
  const bags = [
    cart([line(AVEN, 6), line(AVEN, 5)]), cart([line(AVEN, 1.5)]), cart([line(AVEN, 0)]), cart([line(AVEN, 11)]),
    cart([line(AVEN, 1, {properties: {engraving: 'Keep me'}})]), cart([line(AVEN, 1, {gift_card: true})]),
    cart([line(AVEN, 1, {selling_plan_allocation: {selling_plan: {id: 1}}})]), cart([line('invalid')]),
    cart([], {}), cart(Array.from({length: 21}, (_, i) => line(AVEN + i))),
    cart([line()], {currency: 'EUR'}), cart([line()], {note: 'Keep this note'}),
    cart([line()], {attributes: {custom: 'Keep me'}}), cart([line()], {total_price: 250001}),
  ];
  for (const bag of bags) {
    const original = JSON.stringify(bag), h = harness(bag);
    h.click(); await h.flush();
    assert.equal(h.submissions.length, 0);
    assert.equal(h.dialogs.length, 1);
    assert.ok(!h.dialogs[0].children.some(child => child.dataset.nativeCheckout));
    assert.equal(JSON.stringify(bag), original);
  }
});

test('line, cart and applied codes are normalized and deduplicated; automatic discounts are excluded', async () => {
  const allocations = [{discount_application: {type: 'discount_code', title: ' line25 '}}, {discount_application: {type: 'automatic', title: 'Clearance'}}];
  const h = harness(cart([line(AVEN, 1, {line_level_discount_allocations: allocations}), line(FIRA, 1, {line_level_discount_allocations: allocations})], {
    discount_codes: [{code: ' cart10 ', applicable: true}, {code: 'invalid', applicable: false}],
    cart_level_discount_applications: [{type: 'discount_code', title: 'CART10'}, {type: 'automatic', title: 'Automatic sale'}],
  }));
  h.click(); await h.flush();
  assert.equal(h.submissions[0].fields.coupon, 'CART10,LINE25');
  assert.deepEqual(JSON.parse(h.submissions[0].fields.context).privacy, {analytics: false, marketing: false});
  const native = harness(cart([line(AVEN, 1, {properties: {custom: 'yes'}, line_level_discount_allocations: allocations})]));
  native.click(); await native.flush();
  assert.ok(!native.dialogs[0].children.some(child => child.dataset.nativeCheckout));
});

test('one transient network, HTTP or JSON failure retries only the cart read', async () => {
  for (const failed of [new Error('network'), {ok: false}, {ok: true, json: async () => {throw new SyntaxError('invalid JSON');}}]) {
    const h = harness(cart(), [failed]);
    h.click(); await h.flush();
    assert.equal(h.requests.length, 2);
    assert.equal(h.submissions.length, 1);
    assert.equal(h.dialogs.length, 0);
    assert.ok(h.requests.every(request => request.url === '/cart.js' && request.options.cache === 'no-store' && !request.options.method));
  }
});

test('persistent cart failure stops after two reads, saves the bag and permits a deliberate retry', async () => {
  const h = harness(cart(), [new Error('offline'), new Error('offline')]);
  h.click(); await h.flush();
  assert.equal(h.requests.length, 2);
  assert.equal(h.submissions.length, 0);
  assert.match(h.dialogs[0].children[1].textContent, /bag is saved/i);
  const retry = h.dialogs[0].children.find(child => child.textContent === 'Try secure checkout again');
  retry.events.click(); await h.flush();
  assert.equal(h.requests.length, 3);
  assert.equal(h.submissions.length, 1);
});

test('repeated clicks submit once; a cached Back restoration unlocks the next checkout', async () => {
  const h = harness();
  h.click(); h.click(); await h.flush();
  assert.equal(h.requests.length, 1); assert.equal(h.submissions.length, 1);
  h.listeners.pageshow({persisted: false}); h.click(); await h.flush();
  assert.equal(h.submissions.length, 1);
  h.listeners.pageshow({persisted: true}); h.click(); await h.flush();
  assert.equal(h.submissions.length, 2); assert.equal(h.requests.length, 2);
});
