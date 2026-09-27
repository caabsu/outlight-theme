function Am(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
var ff = { exports: {} }, G = {};
var vm;
function w0() {
  if (vm) return G;
  vm = 1;
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), m = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ul = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), cl = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), sl = Symbol.iterator;
  function kl(o) {
    return o === null || typeof o != "object" ? null : (o = sl && o[sl] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var Cl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Vl = Object.assign, nt = {};
  function Ll(o, S, _) {
    this.props = o, this.context = S, this.refs = nt, this.updater = _ || Cl;
  }
  Ll.prototype.isReactComponent = {}, Ll.prototype.setState = function(o, S) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, S, "setState");
  }, Ll.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function Mt() {
  }
  Mt.prototype = Ll.prototype;
  function Al(o, S, _) {
    this.props = o, this.context = S, this.refs = nt, this.updater = _ || Cl;
  }
  var ql = Al.prototype = new Mt();
  ql.constructor = Al, Vl(ql, Ll.prototype), ql.isPureReactComponent = !0;
  var wl = Array.isArray;
  function Nl() {
  }
  var K = { H: null, A: null, T: null, S: null }, Wl = Object.prototype.hasOwnProperty;
  function Ot(o, S, _) {
    var D = _.ref;
    return {
      $$typeof: g,
      type: o,
      key: S,
      ref: D !== void 0 ? D : null,
      props: _
    };
  }
  function Da(o, S) {
    return Ot(o.type, S, o.props);
  }
  function Dt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === g;
  }
  function Yl(o) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(_) {
      return S[_];
    });
  }
  var Yt = /\/+/g;
  function Q(o, S) {
    return typeof o == "object" && o !== null && o.key != null ? Yl("" + o.key) : S.toString(36);
  }
  function Fl(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Nl, Nl) : (o.status = "pending", o.then(
          function(S) {
            o.status === "pending" && (o.status = "fulfilled", o.value = S);
          },
          function(S) {
            o.status === "pending" && (o.status = "rejected", o.reason = S);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, S, _, D, Y) {
    var V = typeof o;
    (V === "undefined" || V === "boolean") && (o = null);
    var P = !1;
    if (o === null) P = !0;
    else
      switch (V) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case g:
            case M:
              P = !0;
              break;
            case F:
              return P = o._init, b(
                P(o._payload),
                S,
                _,
                D,
                Y
              );
          }
      }
    if (P)
      return Y = Y(o), P = D === "" ? "." + Q(o, 0) : D, wl(Y) ? (_ = "", P != null && (_ = P.replace(Yt, "$&/") + "/"), b(Y, S, _, "", function(aa) {
        return aa;
      })) : Y != null && (Dt(Y) && (Y = Da(
        Y,
        _ + (Y.key == null || o && o.key === Y.key ? "" : ("" + Y.key).replace(
          Yt,
          "$&/"
        ) + "/") + P
      )), S.push(Y)), 1;
    P = 0;
    var Gl = D === "" ? "." : D + ":";
    if (wl(o))
      for (var Sl = 0; Sl < o.length; Sl++)
        D = o[Sl], V = Gl + Q(D, Sl), P += b(
          D,
          S,
          _,
          V,
          Y
        );
    else if (Sl = kl(o), typeof Sl == "function")
      for (o = Sl.call(o), Sl = 0; !(D = o.next()).done; )
        D = D.value, V = Gl + Q(D, Sl++), P += b(
          D,
          S,
          _,
          V,
          Y
        );
    else if (V === "object") {
      if (typeof o.then == "function")
        return b(
          Fl(o),
          S,
          _,
          D,
          Y
        );
      throw S = String(o), Error(
        "Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function A(o, S, _) {
    if (o == null) return o;
    var D = [], Y = 0;
    return b(o, D, "", "", function(V) {
      return S.call(_, V, Y++);
    }), D;
  }
  function B(o) {
    if (o._status === -1) {
      var S = o._result;
      S = S(), S.then(
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = _);
        },
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = _);
        }
      ), o._status === -1 && (o._status = 0, o._result = S);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var el = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var S = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(S)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, nl = {
    map: A,
    forEach: function(o, S, _) {
      A(
        o,
        function() {
          S.apply(this, arguments);
        },
        _
      );
    },
    count: function(o) {
      var S = 0;
      return A(o, function() {
        S++;
      }), S;
    },
    toArray: function(o) {
      return A(o, function(S) {
        return S;
      }) || [];
    },
    only: function(o) {
      if (!Dt(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return G.Activity = C, G.Children = nl, G.Component = Ll, G.Fragment = X, G.Profiler = Ul, G.PureComponent = Al, G.StrictMode = m, G.Suspense = N, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, G.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return K.H.useMemoCache(o);
    }
  }, G.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, G.cacheSignal = function() {
    return null;
  }, G.cloneElement = function(o, S, _) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var D = Vl({}, o.props), Y = o.key;
    if (S != null)
      for (V in S.key !== void 0 && (Y = "" + S.key), S)
        !Wl.call(S, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && S.ref === void 0 || (D[V] = S[V]);
    var V = arguments.length - 2;
    if (V === 1) D.children = _;
    else if (1 < V) {
      for (var P = Array(V), Gl = 0; Gl < V; Gl++)
        P[Gl] = arguments[Gl + 2];
      D.children = P;
    }
    return Ot(o.type, Y, D);
  }, G.createContext = function(o) {
    return o = {
      $$typeof: x,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: W,
      _context: o
    }, o;
  }, G.createElement = function(o, S, _) {
    var D, Y = {}, V = null;
    if (S != null)
      for (D in S.key !== void 0 && (V = "" + S.key), S)
        Wl.call(S, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = S[D]);
    var P = arguments.length - 2;
    if (P === 1) Y.children = _;
    else if (1 < P) {
      for (var Gl = Array(P), Sl = 0; Sl < P; Sl++)
        Gl[Sl] = arguments[Sl + 2];
      Y.children = Gl;
    }
    if (o && o.defaultProps)
      for (D in P = o.defaultProps, P)
        Y[D] === void 0 && (Y[D] = P[D]);
    return Ot(o, V, Y);
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(o) {
    return { $$typeof: cl, render: o };
  }, G.isValidElement = Dt, G.lazy = function(o) {
    return {
      $$typeof: F,
      _payload: { _status: -1, _result: o },
      _init: B
    };
  }, G.memo = function(o, S) {
    return {
      $$typeof: T,
      type: o,
      compare: S === void 0 ? null : S
    };
  }, G.startTransition = function(o) {
    var S = K.T, _ = {};
    K.T = _;
    try {
      var D = o(), Y = K.S;
      Y !== null && Y(_, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Nl, el);
    } catch (V) {
      el(V);
    } finally {
      S !== null && _.types !== null && (S.types = _.types), K.T = S;
    }
  }, G.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, G.use = function(o) {
    return K.H.use(o);
  }, G.useActionState = function(o, S, _) {
    return K.H.useActionState(o, S, _);
  }, G.useCallback = function(o, S) {
    return K.H.useCallback(o, S);
  }, G.useContext = function(o) {
    return K.H.useContext(o);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(o, S) {
    return K.H.useDeferredValue(o, S);
  }, G.useEffect = function(o, S) {
    return K.H.useEffect(o, S);
  }, G.useEffectEvent = function(o) {
    return K.H.useEffectEvent(o);
  }, G.useId = function() {
    return K.H.useId();
  }, G.useImperativeHandle = function(o, S, _) {
    return K.H.useImperativeHandle(o, S, _);
  }, G.useInsertionEffect = function(o, S) {
    return K.H.useInsertionEffect(o, S);
  }, G.useLayoutEffect = function(o, S) {
    return K.H.useLayoutEffect(o, S);
  }, G.useMemo = function(o, S) {
    return K.H.useMemo(o, S);
  }, G.useOptimistic = function(o, S) {
    return K.H.useOptimistic(o, S);
  }, G.useReducer = function(o, S, _) {
    return K.H.useReducer(o, S, _);
  }, G.useRef = function(o) {
    return K.H.useRef(o);
  }, G.useState = function(o) {
    return K.H.useState(o);
  }, G.useSyncExternalStore = function(o, S, _) {
    return K.H.useSyncExternalStore(
      o,
      S,
      _
    );
  }, G.useTransition = function() {
    return K.H.useTransition();
  }, G.version = "19.2.4", G;
}
var hm;
function yf() {
  return hm || (hm = 1, ff.exports = w0()), ff.exports;
}
var rl = yf();
const O = /* @__PURE__ */ Am(rl);
var sf = { exports: {} }, Mu = {}, of = { exports: {} }, df = {};
var rm;
function W0() {
  return rm || (rm = 1, (function(g) {
    function M(b, A) {
      var B = b.length;
      b.push(A);
      l: for (; 0 < B; ) {
        var el = B - 1 >>> 1, nl = b[el];
        if (0 < Ul(nl, A))
          b[el] = A, b[B] = nl, B = el;
        else break l;
      }
    }
    function X(b) {
      return b.length === 0 ? null : b[0];
    }
    function m(b) {
      if (b.length === 0) return null;
      var A = b[0], B = b.pop();
      if (B !== A) {
        b[0] = B;
        l: for (var el = 0, nl = b.length, o = nl >>> 1; el < o; ) {
          var S = 2 * (el + 1) - 1, _ = b[S], D = S + 1, Y = b[D];
          if (0 > Ul(_, B))
            D < nl && 0 > Ul(Y, _) ? (b[el] = Y, b[D] = B, el = D) : (b[el] = _, b[S] = B, el = S);
          else if (D < nl && 0 > Ul(Y, B))
            b[el] = Y, b[D] = B, el = D;
          else break l;
        }
      }
      return A;
    }
    function Ul(b, A) {
      var B = b.sortIndex - A.sortIndex;
      return B !== 0 ? B : b.id - A.id;
    }
    if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var W = performance;
      g.unstable_now = function() {
        return W.now();
      };
    } else {
      var x = Date, cl = x.now();
      g.unstable_now = function() {
        return x.now() - cl;
      };
    }
    var N = [], T = [], F = 1, C = null, sl = 3, kl = !1, Cl = !1, Vl = !1, nt = !1, Ll = typeof setTimeout == "function" ? setTimeout : null, Mt = typeof clearTimeout == "function" ? clearTimeout : null, Al = typeof setImmediate < "u" ? setImmediate : null;
    function ql(b) {
      for (var A = X(T); A !== null; ) {
        if (A.callback === null) m(T);
        else if (A.startTime <= b)
          m(T), A.sortIndex = A.expirationTime, M(N, A);
        else break;
        A = X(T);
      }
    }
    function wl(b) {
      if (Vl = !1, ql(b), !Cl)
        if (X(N) !== null)
          Cl = !0, Nl || (Nl = !0, Yl());
        else {
          var A = X(T);
          A !== null && Fl(wl, A.startTime - b);
        }
    }
    var Nl = !1, K = -1, Wl = 5, Ot = -1;
    function Da() {
      return nt ? !0 : !(g.unstable_now() - Ot < Wl);
    }
    function Dt() {
      if (nt = !1, Nl) {
        var b = g.unstable_now();
        Ot = b;
        var A = !0;
        try {
          l: {
            Cl = !1, Vl && (Vl = !1, Mt(K), K = -1), kl = !0;
            var B = sl;
            try {
              t: {
                for (ql(b), C = X(N); C !== null && !(C.expirationTime > b && Da()); ) {
                  var el = C.callback;
                  if (typeof el == "function") {
                    C.callback = null, sl = C.priorityLevel;
                    var nl = el(
                      C.expirationTime <= b
                    );
                    if (b = g.unstable_now(), typeof nl == "function") {
                      C.callback = nl, ql(b), A = !0;
                      break t;
                    }
                    C === X(N) && m(N), ql(b);
                  } else m(N);
                  C = X(N);
                }
                if (C !== null) A = !0;
                else {
                  var o = X(T);
                  o !== null && Fl(
                    wl,
                    o.startTime - b
                  ), A = !1;
                }
              }
              break l;
            } finally {
              C = null, sl = B, kl = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Yl() : Nl = !1;
        }
      }
    }
    var Yl;
    if (typeof Al == "function")
      Yl = function() {
        Al(Dt);
      };
    else if (typeof MessageChannel < "u") {
      var Yt = new MessageChannel(), Q = Yt.port2;
      Yt.port1.onmessage = Dt, Yl = function() {
        Q.postMessage(null);
      };
    } else
      Yl = function() {
        Ll(Dt, 0);
      };
    function Fl(b, A) {
      K = Ll(function() {
        b(g.unstable_now());
      }, A);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, g.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Wl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, g.unstable_next = function(b) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = sl;
      }
      var B = sl;
      sl = A;
      try {
        return b();
      } finally {
        sl = B;
      }
    }, g.unstable_requestPaint = function() {
      nt = !0;
    }, g.unstable_runWithPriority = function(b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var B = sl;
      sl = b;
      try {
        return A();
      } finally {
        sl = B;
      }
    }, g.unstable_scheduleCallback = function(b, A, B) {
      var el = g.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? el + B : el) : B = el, b) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = B + nl, b = {
        id: F++,
        callback: A,
        priorityLevel: b,
        startTime: B,
        expirationTime: nl,
        sortIndex: -1
      }, B > el ? (b.sortIndex = B, M(T, b), X(N) === null && b === X(T) && (Vl ? (Mt(K), K = -1) : Vl = !0, Fl(wl, B - el))) : (b.sortIndex = nl, M(N, b), Cl || kl || (Cl = !0, Nl || (Nl = !0, Yl()))), b;
    }, g.unstable_shouldYield = Da, g.unstable_wrapCallback = function(b) {
      var A = sl;
      return function() {
        var B = sl;
        sl = A;
        try {
          return b.apply(this, arguments);
        } finally {
          sl = B;
        }
      };
    };
  })(df)), df;
}
var gm;
function $0() {
  return gm || (gm = 1, of.exports = W0()), of.exports;
}
var mf = { exports: {} }, Jl = {};
var Sm;
function k0() {
  if (Sm) return Jl;
  Sm = 1;
  var g = yf();
  function M(N) {
    var T = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var F = 2; F < arguments.length; F++)
        T += "&args[]=" + encodeURIComponent(arguments[F]);
    }
    return "Minified React error #" + N + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function X() {
  }
  var m = {
    d: {
      f: X,
      r: function() {
        throw Error(M(522));
      },
      D: X,
      C: X,
      L: X,
      m: X,
      X,
      S: X,
      M: X
    },
    p: 0,
    findDOMNode: null
  }, Ul = /* @__PURE__ */ Symbol.for("react.portal");
  function W(N, T, F) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ul,
      key: C == null ? null : "" + C,
      children: N,
      containerInfo: T,
      implementation: F
    };
  }
  var x = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function cl(N, T) {
    if (N === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, Jl.createPortal = function(N, T) {
    var F = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(M(299));
    return W(N, T, null, F);
  }, Jl.flushSync = function(N) {
    var T = x.T, F = m.p;
    try {
      if (x.T = null, m.p = 2, N) return N();
    } finally {
      x.T = T, m.p = F, m.d.f();
    }
  }, Jl.preconnect = function(N, T) {
    typeof N == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, m.d.C(N, T));
  }, Jl.prefetchDNS = function(N) {
    typeof N == "string" && m.d.D(N);
  }, Jl.preinit = function(N, T) {
    if (typeof N == "string" && T && typeof T.as == "string") {
      var F = T.as, C = cl(F, T.crossOrigin), sl = typeof T.integrity == "string" ? T.integrity : void 0, kl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      F === "style" ? m.d.S(
        N,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: C,
          integrity: sl,
          fetchPriority: kl
        }
      ) : F === "script" && m.d.X(N, {
        crossOrigin: C,
        integrity: sl,
        fetchPriority: kl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, Jl.preinitModule = function(N, T) {
    if (typeof N == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var F = cl(
            T.as,
            T.crossOrigin
          );
          m.d.M(N, {
            crossOrigin: F,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0
          });
        }
      } else T == null && m.d.M(N);
  }, Jl.preload = function(N, T) {
    if (typeof N == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var F = T.as, C = cl(F, T.crossOrigin);
      m.d.L(N, F, {
        crossOrigin: C,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, Jl.preloadModule = function(N, T) {
    if (typeof N == "string")
      if (T) {
        var F = cl(T.as, T.crossOrigin);
        m.d.m(N, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: F,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0
        });
      } else m.d.m(N);
  }, Jl.requestFormReset = function(N) {
    m.d.r(N);
  }, Jl.unstable_batchedUpdates = function(N, T) {
    return N(T);
  }, Jl.useFormState = function(N, T, F) {
    return x.H.useFormState(N, T, F);
  }, Jl.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Jl.version = "19.2.4", Jl;
}
var pm;
function F0() {
  if (pm) return mf.exports;
  pm = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (M) {
        console.error(M);
      }
  }
  return g(), mf.exports = k0(), mf.exports;
}
var bm;
function I0() {
  if (bm) return Mu;
  bm = 1;
  var g = $0(), M = yf(), X = F0();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ul(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function W(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function x(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function cl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (W(l) !== l)
      throw Error(m(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = W(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return N(u), l;
          if (n === e) return N(u), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === a) {
            c = !0, a = u, e = n;
            break;
          }
          if (i === e) {
            c = !0, e = u, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              c = !0, a = n, e = u;
              break;
            }
            if (i === e) {
              c = !0, e = n, a = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(m(189));
        }
      }
      if (a.alternate !== e) throw Error(m(190));
    }
    if (a.tag !== 3) throw Error(m(188));
    return a.stateNode.current === a ? l : t;
  }
  function F(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = F(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign, sl = /* @__PURE__ */ Symbol.for("react.element"), kl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Cl = /* @__PURE__ */ Symbol.for("react.portal"), Vl = /* @__PURE__ */ Symbol.for("react.fragment"), nt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ll = /* @__PURE__ */ Symbol.for("react.profiler"), Mt = /* @__PURE__ */ Symbol.for("react.consumer"), Al = /* @__PURE__ */ Symbol.for("react.context"), ql = /* @__PURE__ */ Symbol.for("react.forward_ref"), wl = /* @__PURE__ */ Symbol.for("react.suspense"), Nl = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), Wl = /* @__PURE__ */ Symbol.for("react.lazy"), Ot = /* @__PURE__ */ Symbol.for("react.activity"), Da = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Dt = Symbol.iterator;
  function Yl(l) {
    return l === null || typeof l != "object" ? null : (l = Dt && l[Dt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Yt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Q(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Yt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Vl:
        return "Fragment";
      case Ll:
        return "Profiler";
      case nt:
        return "StrictMode";
      case wl:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Cl:
          return "Portal";
        case Al:
          return l.displayName || "Context";
        case Mt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ql:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case K:
          return t = l.displayName || null, t !== null ? t : Q(l.type) || "Memo";
        case Wl:
          t = l._payload, l = l._init;
          try {
            return Q(l(t));
          } catch {
          }
      }
    return null;
  }
  var Fl = Array.isArray, b = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, el = [], nl = -1;
  function o(l) {
    return { current: l };
  }
  function S(l) {
    0 > nl || (l.current = el[nl], el[nl] = null, nl--);
  }
  function _(l, t) {
    nl++, el[nl] = l.current, l.current = t;
  }
  var D = o(null), Y = o(null), V = o(null), P = o(null);
  function Gl(l, t) {
    switch (_(V, t), _(Y, l), _(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Gd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Gd(t), l = Xd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    S(D), _(D, l);
  }
  function Sl() {
    S(D), S(Y), S(V);
  }
  function aa(l) {
    l.memoizedState !== null && _(P, l);
    var t = D.current, a = Xd(t, l.type);
    t !== a && (_(Y, l), _(D, a));
  }
  function Ua(l) {
    Y.current === l && (S(D), S(Y)), P.current === l && (S(P), zu._currentValue = B);
  }
  var Re, Du;
  function Gt(l) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Re = t && t[1] || "", Du = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + l + Du;
  }
  var L = !1;
  function ll(l, t) {
    if (!l || L) return "";
    L = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (r) {
                  h = r;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string")
              return [r.stack, h.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var f = c.split(`
`), v = i.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < v.length && !v[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === v.length)
          for (e = f.length - 1, u = v.length - 1; 1 <= e && 0 <= u && f[e] !== v[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== v[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== v[u]) {
                  var p = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p;
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      L = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Gt(a) : "";
  }
  function pl(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Gt(l.type);
      case 16:
        return Gt("Lazy");
      case 13:
        return l.child !== t && t !== null ? Gt("Suspense Fallback") : Gt("Suspense");
      case 19:
        return Gt("SuspenseList");
      case 0:
      case 15:
        return ll(l.type, !1);
      case 11:
        return ll(l.type.render, !1);
      case 1:
        return ll(l.type, !0);
      case 31:
        return Gt("Activity");
      default:
        return "";
    }
  }
  function Kl(l) {
    try {
      var t = "", a = null;
      do
        t += pl(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Na = Object.prototype.hasOwnProperty, wn = g.unstable_scheduleCallback, Wn = g.unstable_cancelCallback, _m = g.unstable_shouldYield, Mm = g.unstable_requestPaint, ct = g.unstable_now, Om = g.unstable_getCurrentPriorityLevel, vf = g.unstable_ImmediatePriority, hf = g.unstable_UserBlockingPriority, Uu = g.unstable_NormalPriority, Dm = g.unstable_LowPriority, rf = g.unstable_IdlePriority, Um = g.log, Nm = g.unstable_setDisableYieldValue, Be = null, it = null;
  function ea(l) {
    if (typeof Um == "function" && Nm(l), it && typeof it.setStrictMode == "function")
      try {
        it.setStrictMode(Be, l);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : Rm, Hm = Math.log, Cm = Math.LN2;
  function Rm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Hm(l) / Cm | 0) | 0;
  }
  var Nu = 256, Hu = 262144, Cu = 4194304;
  function Ha(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ru(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~n, e !== 0 ? u = Ha(e) : (c &= i, c !== 0 ? u = Ha(c) : a || (a = i & ~l, a !== 0 && (u = Ha(a))))) : (i = e & ~n, i !== 0 ? u = Ha(i) : c !== 0 ? u = Ha(c) : a || (a = e & ~l, a !== 0 && (u = Ha(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function qe(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gf() {
    var l = Cu;
    return Cu <<= 1, (Cu & 62914560) === 0 && (Cu = 4194304), l;
  }
  function $n(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ye(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function qm(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, f = l.expirationTimes, v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var p = 31 - ft(a), z = 1 << p;
      i[p] = 0, f[p] = -1;
      var h = v[p];
      if (h !== null)
        for (v[p] = null, p = 0; p < h.length; p++) {
          var r = h[p];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~z;
    }
    e !== 0 && Sf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function Sf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - ft(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function pf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - ft(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function bf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : kn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function kn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Fn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ef() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : im(l.type));
  }
  function zf(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var ua = Math.random().toString(36).slice(2), Xl = "__reactFiber$" + ua, Il = "__reactProps$" + ua, $a = "__reactContainer$" + ua, In = "__reactEvents$" + ua, Ym = "__reactListeners$" + ua, Gm = "__reactHandles$" + ua, Tf = "__reactResources$" + ua, Ge = "__reactMarker$" + ua;
  function Pn(l) {
    delete l[Xl], delete l[Il], delete l[In], delete l[Ym], delete l[Gm];
  }
  function ka(l) {
    var t = l[Xl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[$a] || a[Xl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Kd(l); l !== null; ) {
            if (a = l[Xl]) return a;
            l = Kd(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Fa(l) {
    if (l = l[Xl] || l[$a]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Xe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Ia(l) {
    var t = l[Tf];
    return t || (t = l[Tf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Rl(l) {
    l[Ge] = !0;
  }
  var Af = /* @__PURE__ */ new Set(), _f = {};
  function Ca(l, t) {
    Pa(l, t), Pa(l + "Capture", t);
  }
  function Pa(l, t) {
    for (_f[l] = t, l = 0; l < t.length; l++)
      Af.add(t[l]);
  }
  var Xm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mf = {}, Of = {};
  function Qm(l) {
    return Na.call(Of, l) ? !0 : Na.call(Mf, l) ? !1 : Xm.test(l) ? Of[l] = !0 : (Mf[l] = !0, !1);
  }
  function Bu(l, t, a) {
    if (Qm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function qu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Xt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function rt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Df(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function jm(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          a = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function lc(l) {
    if (!l._valueTracker) {
      var t = Df(l) ? "checked" : "value";
      l._valueTracker = jm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Uf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), e = "";
    return l && (e = Df(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Yu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function gt(l) {
    return l.replace(
      Zm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tc(l, t, a, e, u, n, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + rt(t)) : l.value !== "" + rt(t) && (l.value = "" + rt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? ac(l, c, rt(t)) : a != null ? ac(l, c, rt(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + rt(i) : l.removeAttribute("name");
  }
  function Nf(l, t, a, e, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        lc(l);
        return;
      }
      a = a != null ? "" + rt(a) : "", t = t != null ? "" + rt(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), lc(l);
  }
  function ac(l, t, a) {
    t === "number" && Yu(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function le(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + rt(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hf(l, t, a) {
    if (t != null && (t = "" + rt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + rt(a) : "";
  }
  function Cf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(m(92));
        if (Fl(e)) {
          if (1 < e.length) throw Error(m(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = rt(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), lc(l);
  }
  function te(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var xm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || xm.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Bf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && Rf(l, u, e);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Rf(l, n, t[n]);
  }
  function ec(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gu(l) {
    return Lm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Qt() {
  }
  var uc = null;
  function nc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ae = null, ee = null;
  function qf(l) {
    var t = Fa(l);
    if (t && (l = t.stateNode)) {
      var a = l[Il] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (tc(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + gt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Il] || null;
                if (!u) throw Error(m(90));
                tc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              e = a[t], e.form === l.form && Uf(e);
          }
          break l;
        case "textarea":
          Hf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && le(l, !!a.multiple, t, !1);
      }
    }
  }
  var cc = !1;
  function Yf(l, t, a) {
    if (cc) return l(t, a);
    cc = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (cc = !1, (ae !== null || ee !== null) && (_n(), ae && (t = ae, l = ee, ee = ae = null, qf(t), l)))
        for (t = 0; t < l.length; t++) qf(l[t]);
    }
  }
  function Qe(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Il] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        m(231, t, typeof a)
      );
    return a;
  }
  var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ic = !1;
  if (jt)
    try {
      var je = {};
      Object.defineProperty(je, "passive", {
        get: function() {
          ic = !0;
        }
      }), window.addEventListener("test", je, je), window.removeEventListener("test", je, je);
    } catch {
      ic = !1;
    }
  var na = null, fc = null, Xu = null;
  function Gf() {
    if (Xu) return Xu;
    var l, t = fc, a = t.length, e, u = "value" in na ? na.value : na.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++) ;
    return Xu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Qu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ju() {
    return !0;
  }
  function Xf() {
    return !1;
  }
  function Pl(l) {
    function t(a, e, u, n, c) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? ju : Xf, this.isPropagationStopped = Xf, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ju);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ju);
      },
      persist: function() {
      },
      isPersistent: ju
    }), t;
  }
  var Ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zu = Pl(Ra), Ze = C({}, Ra, { view: 0, detail: 0 }), Km = Pl(Ze), sc, oc, xe, xu = C({}, Ze, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== xe && (xe && l.type === "mousemove" ? (sc = l.screenX - xe.screenX, oc = l.screenY - xe.screenY) : oc = sc = 0, xe = l), sc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : oc;
    }
  }), Qf = Pl(xu), Jm = C({}, xu, { dataTransfer: 0 }), wm = Pl(Jm), Wm = C({}, Ze, { relatedTarget: 0 }), dc = Pl(Wm), $m = C({}, Ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), km = Pl($m), Fm = C({}, Ra, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Im = Pl(Fm), Pm = C({}, Ra, { data: 0 }), jf = Pl(Pm), ly = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ty = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ay = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ey(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ay[l]) ? !!t[l] : !1;
  }
  function mc() {
    return ey;
  }
  var uy = C({}, Ze, {
    key: function(l) {
      if (l.key) {
        var t = ly[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Qu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ty[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mc,
    charCode: function(l) {
      return l.type === "keypress" ? Qu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Qu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ny = Pl(uy), cy = C({}, xu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Zf = Pl(cy), iy = C({}, Ze, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mc
  }), fy = Pl(iy), sy = C({}, Ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), oy = Pl(sy), dy = C({}, xu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), my = Pl(dy), yy = C({}, Ra, {
    newState: 0,
    oldState: 0
  }), vy = Pl(yy), hy = [9, 13, 27, 32], yc = jt && "CompositionEvent" in window, Ve = null;
  jt && "documentMode" in document && (Ve = document.documentMode);
  var ry = jt && "TextEvent" in window && !Ve, xf = jt && (!yc || Ve && 8 < Ve && 11 >= Ve), Vf = " ", Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return hy.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ue = !1;
  function gy(l, t) {
    switch (l) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : (Lf = !0, Vf);
      case "textInput":
        return l = t.data, l === Vf && Lf ? null : l;
      default:
        return null;
    }
  }
  function Sy(l, t) {
    if (ue)
      return l === "compositionend" || !yc && Kf(l, t) ? (l = Gf(), Xu = fc = na = null, ue = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var py = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!py[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    ae ? ee ? ee.push(e) : ee = [e] : ae = e, t = Cn(t, "onChange"), 0 < t.length && (a = new Zu(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var Le = null, Ke = null;
  function by(l) {
    Hd(l, 0);
  }
  function Vu(l) {
    var t = Xe(l);
    if (Uf(t)) return l;
  }
  function $f(l, t) {
    if (l === "change") return t;
  }
  var kf = !1;
  if (jt) {
    var vc;
    if (jt) {
      var hc = "oninput" in document;
      if (!hc) {
        var Ff = document.createElement("div");
        Ff.setAttribute("oninput", "return;"), hc = typeof Ff.oninput == "function";
      }
      vc = hc;
    } else vc = !1;
    kf = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    Le && (Le.detachEvent("onpropertychange", Pf), Ke = Le = null);
  }
  function Pf(l) {
    if (l.propertyName === "value" && Vu(Ke)) {
      var t = [];
      Wf(
        t,
        Ke,
        l,
        nc(l)
      ), Yf(by, t);
    }
  }
  function Ey(l, t, a) {
    l === "focusin" ? (If(), Le = t, Ke = a, Le.attachEvent("onpropertychange", Pf)) : l === "focusout" && If();
  }
  function zy(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Vu(Ke);
  }
  function Ty(l, t) {
    if (l === "click") return Vu(t);
  }
  function Ay(l, t) {
    if (l === "input" || l === "change")
      return Vu(t);
  }
  function _y(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var st = typeof Object.is == "function" ? Object.is : _y;
  function Je(l, t) {
    if (st(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Na.call(t, u) || !st(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var a = ls(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t)
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ls(a);
    }
  }
  function as(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function es(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Yu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Yu(l.document);
    }
    return t;
  }
  function rc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var My = jt && "documentMode" in document && 11 >= document.documentMode, ne = null, gc = null, we = null, Sc = !1;
  function us(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sc || ne == null || ne !== Yu(e) || (e = ne, "selectionStart" in e && rc(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), we && Je(we, e) || (we = e, e = Cn(gc, "onSelect"), 0 < e.length && (t = new Zu(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }), t.target = ne)));
  }
  function Ba(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var ce = {
    animationend: Ba("Animation", "AnimationEnd"),
    animationiteration: Ba("Animation", "AnimationIteration"),
    animationstart: Ba("Animation", "AnimationStart"),
    transitionrun: Ba("Transition", "TransitionRun"),
    transitionstart: Ba("Transition", "TransitionStart"),
    transitioncancel: Ba("Transition", "TransitionCancel"),
    transitionend: Ba("Transition", "TransitionEnd")
  }, pc = {}, ns = {};
  jt && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete ce.animationend.animation, delete ce.animationiteration.animation, delete ce.animationstart.animation), "TransitionEvent" in window || delete ce.transitionend.transition);
  function qa(l) {
    if (pc[l]) return pc[l];
    if (!ce[l]) return l;
    var t = ce[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ns)
        return pc[l] = t[a];
    return l;
  }
  var cs = qa("animationend"), is = qa("animationiteration"), fs = qa("animationstart"), Oy = qa("transitionrun"), Dy = qa("transitionstart"), Uy = qa("transitioncancel"), ss = qa("transitionend"), os = /* @__PURE__ */ new Map(), bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bc.push("scrollEnd");
  function Ut(l, t) {
    os.set(l, t), Ca(t, [l]);
  }
  var Lu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, St = [], ie = 0, Ec = 0;
  function Ku() {
    for (var l = ie, t = Ec = ie = 0; t < l; ) {
      var a = St[t];
      St[t++] = null;
      var e = St[t];
      St[t++] = null;
      var u = St[t];
      St[t++] = null;
      var n = St[t];
      if (St[t++] = null, e !== null && u !== null) {
        var c = e.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), e.pending = u;
      }
      n !== 0 && ds(a, u, n);
    }
  }
  function Ju(l, t, a, e) {
    St[ie++] = l, St[ie++] = t, St[ie++] = a, St[ie++] = e, Ec |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function zc(l, t, a, e) {
    return Ju(l, t, a, e), wu(l);
  }
  function Ya(l, t) {
    return Ju(l, null, null, t), wu(l);
  }
  function ds(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - ft(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function wu(l) {
    if (50 < hu)
      throw hu = 0, Hi = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var fe = {};
  function Ny(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(l, t, a, e) {
    return new Ny(l, t, a, e);
  }
  function Tc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Zt(l, t) {
    var a = l.alternate;
    return a === null ? (a = ot(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ms(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Wu(l, t, a, e, u, n) {
    var c = 0;
    if (e = l, typeof l == "function") Tc(l) && (c = 1);
    else if (typeof l == "string")
      c = q0(
        l,
        a,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Ot:
          return l = ot(31, a, t, u), l.elementType = Ot, l.lanes = n, l;
        case Vl:
          return Ga(a.children, u, n, t);
        case nt:
          c = 8, u |= 24;
          break;
        case Ll:
          return l = ot(12, a, t, u | 2), l.elementType = Ll, l.lanes = n, l;
        case wl:
          return l = ot(13, a, t, u), l.elementType = wl, l.lanes = n, l;
        case Nl:
          return l = ot(19, a, t, u), l.elementType = Nl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Al:
                c = 10;
                break l;
              case Mt:
                c = 9;
                break l;
              case ql:
                c = 11;
                break l;
              case K:
                c = 14;
                break l;
              case Wl:
                c = 16, e = null;
                break l;
            }
          c = 29, a = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = ot(c, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ga(l, t, a, e) {
    return l = ot(7, l, e, t), l.lanes = a, l;
  }
  function Ac(l, t, a) {
    return l = ot(6, l, null, t), l.lanes = a, l;
  }
  function ys(l) {
    var t = ot(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _c(l, t, a) {
    return t = ot(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var vs = /* @__PURE__ */ new WeakMap();
  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = vs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: Kl(t)
      }, vs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Kl(t)
    };
  }
  var se = [], oe = 0, $u = null, We = 0, bt = [], Et = 0, ca = null, Ct = 1, Rt = "";
  function xt(l, t) {
    se[oe++] = We, se[oe++] = $u, $u = l, We = t;
  }
  function hs(l, t, a) {
    bt[Et++] = Ct, bt[Et++] = Rt, bt[Et++] = ca, ca = l;
    var e = Ct;
    l = Rt;
    var u = 32 - ft(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - ft(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (e & (1 << c) - 1).toString(32), e >>= c, u -= c, Ct = 1 << 32 - ft(t) + u | a << u | e, Rt = n + l;
    } else
      Ct = 1 << n | a << u | e, Rt = l;
  }
  function Mc(l) {
    l.return !== null && (xt(l, 1), hs(l, 1, 0));
  }
  function Oc(l) {
    for (; l === $u; )
      $u = se[--oe], se[oe] = null, We = se[--oe], se[oe] = null;
    for (; l === ca; )
      ca = bt[--Et], bt[Et] = null, Rt = bt[--Et], bt[Et] = null, Ct = bt[--Et], bt[Et] = null;
  }
  function rs(l, t) {
    bt[Et++] = Ct, bt[Et++] = Rt, bt[Et++] = ca, Ct = t.id, Rt = t.overflow, ca = l;
  }
  var Ql = null, vl = null, I = !1, ia = null, zt = !1, Dc = Error(m(519));
  function fa(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $e(pt(t, l)), Dc;
  }
  function gs(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[Xl] = l, t[Il] = e, a) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gu.length; a++)
          w(gu[a], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), Nf(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), Cf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || qd(t.textContent, a) ? (e.popover != null && (w("beforetoggle", t), w("toggle", t)), e.onScroll != null && w("scroll", t), e.onScrollEnd != null && w("scrollend", t), e.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || fa(l, !0);
  }
  function Ss(l) {
    for (Ql = l.return; Ql; )
      switch (Ql.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          Ql = Ql.return;
      }
  }
  function de(l) {
    if (l !== Ql) return !1;
    if (!I) return Ss(l), I = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Ji(l.type, l.memoizedProps)), a = !a), a && vl && fa(l), Ss(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      vl = Ld(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      vl = Ld(l);
    } else
      t === 27 ? (t = vl, za(l.type) ? (l = Fi, Fi = null, vl = l) : vl = t) : vl = Ql ? At(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Xa() {
    vl = Ql = null, I = !1;
  }
  function Uc() {
    var l = ia;
    return l !== null && (et === null ? et = l : et.push.apply(
      et,
      l
    ), ia = null), l;
  }
  function $e(l) {
    ia === null ? ia = [l] : ia.push(l);
  }
  var Nc = o(null), Qa = null, Vt = null;
  function sa(l, t, a) {
    _(Nc, t._currentValue), t._currentValue = a;
  }
  function Lt(l) {
    l._currentValue = Nc.current, S(Nc);
  }
  function Hc(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Cc(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), Hc(
                n.return,
                a,
                l
              ), e || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(m(341));
        c.lanes |= a, n = c.alternate, n !== null && (n.lanes |= a), Hc(c, a, l), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function me(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(m(387));
        if (c = c.memoizedProps, c !== null) {
          var i = u.type;
          st(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (u === P.current) {
        if (c = u.alternate, c === null) throw Error(m(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(zu) : l = [zu]);
      }
      u = u.return;
    }
    l !== null && Cc(
      t,
      l,
      a,
      e
    ), t.flags |= 262144;
  }
  function ku(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!st(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ja(l) {
    Qa = l, Vt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function jl(l) {
    return ps(Qa, l);
  }
  function Fu(l, t) {
    return Qa === null && ja(l), ps(l, t);
  }
  function ps(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Vt === null) {
      if (l === null) throw Error(m(308));
      Vt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Vt = Vt.next = t;
    return a;
  }
  var Hy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Cy = g.unstable_scheduleCallback, Ry = g.unstable_NormalPriority, _l = {
    $$typeof: Al,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rc() {
    return {
      controller: new Hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ke(l) {
    l.refCount--, l.refCount === 0 && Cy(Ry, function() {
      l.controller.abort();
    });
  }
  var Fe = null, Bc = 0, ye = 0, ve = null;
  function By(l, t) {
    if (Fe === null) {
      var a = Fe = [];
      Bc = 0, ye = Gi(), ve = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return Bc++, t.then(bs, bs), t;
  }
  function bs() {
    if (--Bc === 0 && Fe !== null) {
      ve !== null && (ve.status = "fulfilled");
      var l = Fe;
      Fe = null, ye = 0, ve = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function qy(l, t) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), e;
  }
  var Es = b.S;
  b.S = function(l, t) {
    nd = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && By(l, t), Es !== null && Es(l, t);
  };
  var Za = o(null);
  function qc() {
    var l = Za.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Iu(l, t) {
    t === null ? _(Za, Za.current) : _(Za, t.pool);
  }
  function zs() {
    var l = qc();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var he = Error(m(460)), Yc = Error(m(474)), Pu = Error(m(542)), ln = { then: function() {
  } };
  function Ts(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function As(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Qt, Qt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ms(l), l;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ms(l), l;
        }
        throw Va = t, he;
    }
  }
  function xa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Va = a, he) : a;
    }
  }
  var Va = null;
  function _s() {
    if (Va === null) throw Error(m(459));
    var l = Va;
    return Va = null, l;
  }
  function Ms(l) {
    if (l === he || l === Pu)
      throw Error(m(483));
  }
  var re = null, Ie = 0;
  function tn(l) {
    var t = Ie;
    return Ie += 1, re === null && (re = []), As(re, l, t);
  }
  function Pe(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function an(l, t) {
    throw t.$$typeof === sl ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Os(l) {
    function t(d, s) {
      if (l) {
        var y = d.deletions;
        y === null ? (d.deletions = [s], d.flags |= 16) : y.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function e(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function u(d, s) {
      return d = Zt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, y) {
      return d.index = y, l ? (y = d.alternate, y !== null ? (y = y.index, y < s ? (d.flags |= 67108866, s) : y) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, s, y, E) {
      return s === null || s.tag !== 6 ? (s = Ac(y, d.mode, E), s.return = d, s) : (s = u(s, y), s.return = d, s);
    }
    function f(d, s, y, E) {
      var R = y.type;
      return R === Vl ? p(
        d,
        s,
        y.props.children,
        E,
        y.key
      ) : s !== null && (s.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Wl && xa(R) === s.type) ? (s = u(s, y.props), Pe(s, y), s.return = d, s) : (s = Wu(
        y.type,
        y.key,
        y.props,
        null,
        d.mode,
        E
      ), Pe(s, y), s.return = d, s);
    }
    function v(d, s, y, E) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? (s = _c(y, d.mode, E), s.return = d, s) : (s = u(s, y.children || []), s.return = d, s);
    }
    function p(d, s, y, E, R) {
      return s === null || s.tag !== 7 ? (s = Ga(
        y,
        d.mode,
        E,
        R
      ), s.return = d, s) : (s = u(s, y), s.return = d, s);
    }
    function z(d, s, y) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ac(
          "" + s,
          d.mode,
          y
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case kl:
            return y = Wu(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              y
            ), Pe(y, s), y.return = d, y;
          case Cl:
            return s = _c(
              s,
              d.mode,
              y
            ), s.return = d, s;
          case Wl:
            return s = xa(s), z(d, s, y);
        }
        if (Fl(s) || Yl(s))
          return s = Ga(
            s,
            d.mode,
            y,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return z(d, tn(s), y);
        if (s.$$typeof === Al)
          return z(
            d,
            Fu(d, s),
            y
          );
        an(d, s);
      }
      return null;
    }
    function h(d, s, y, E) {
      var R = s !== null ? s.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return R !== null ? null : i(d, s, "" + y, E);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case kl:
            return y.key === R ? f(d, s, y, E) : null;
          case Cl:
            return y.key === R ? v(d, s, y, E) : null;
          case Wl:
            return y = xa(y), h(d, s, y, E);
        }
        if (Fl(y) || Yl(y))
          return R !== null ? null : p(d, s, y, E, null);
        if (typeof y.then == "function")
          return h(
            d,
            s,
            tn(y),
            E
          );
        if (y.$$typeof === Al)
          return h(
            d,
            s,
            Fu(d, y),
            E
          );
        an(d, y);
      }
      return null;
    }
    function r(d, s, y, E, R) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return d = d.get(y) || null, i(s, d, "" + E, R);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case kl:
            return d = d.get(
              E.key === null ? y : E.key
            ) || null, f(s, d, E, R);
          case Cl:
            return d = d.get(
              E.key === null ? y : E.key
            ) || null, v(s, d, E, R);
          case Wl:
            return E = xa(E), r(
              d,
              s,
              y,
              E,
              R
            );
        }
        if (Fl(E) || Yl(E))
          return d = d.get(y) || null, p(s, d, E, R, null);
        if (typeof E.then == "function")
          return r(
            d,
            s,
            y,
            tn(E),
            R
          );
        if (E.$$typeof === Al)
          return r(
            d,
            s,
            y,
            Fu(s, E),
            R
          );
        an(s, E);
      }
      return null;
    }
    function U(d, s, y, E) {
      for (var R = null, tl = null, H = s, Z = s = 0, k = null; H !== null && Z < y.length; Z++) {
        H.index > Z ? (k = H, H = null) : k = H.sibling;
        var al = h(
          d,
          H,
          y[Z],
          E
        );
        if (al === null) {
          H === null && (H = k);
          break;
        }
        l && H && al.alternate === null && t(d, H), s = n(al, s, Z), tl === null ? R = al : tl.sibling = al, tl = al, H = k;
      }
      if (Z === y.length)
        return a(d, H), I && xt(d, Z), R;
      if (H === null) {
        for (; Z < y.length; Z++)
          H = z(d, y[Z], E), H !== null && (s = n(
            H,
            s,
            Z
          ), tl === null ? R = H : tl.sibling = H, tl = H);
        return I && xt(d, Z), R;
      }
      for (H = e(H); Z < y.length; Z++)
        k = r(
          H,
          d,
          Z,
          y[Z],
          E
        ), k !== null && (l && k.alternate !== null && H.delete(
          k.key === null ? Z : k.key
        ), s = n(
          k,
          s,
          Z
        ), tl === null ? R = k : tl.sibling = k, tl = k);
      return l && H.forEach(function(Oa) {
        return t(d, Oa);
      }), I && xt(d, Z), R;
    }
    function q(d, s, y, E) {
      if (y == null) throw Error(m(151));
      for (var R = null, tl = null, H = s, Z = s = 0, k = null, al = y.next(); H !== null && !al.done; Z++, al = y.next()) {
        H.index > Z ? (k = H, H = null) : k = H.sibling;
        var Oa = h(d, H, al.value, E);
        if (Oa === null) {
          H === null && (H = k);
          break;
        }
        l && H && Oa.alternate === null && t(d, H), s = n(Oa, s, Z), tl === null ? R = Oa : tl.sibling = Oa, tl = Oa, H = k;
      }
      if (al.done)
        return a(d, H), I && xt(d, Z), R;
      if (H === null) {
        for (; !al.done; Z++, al = y.next())
          al = z(d, al.value, E), al !== null && (s = n(al, s, Z), tl === null ? R = al : tl.sibling = al, tl = al);
        return I && xt(d, Z), R;
      }
      for (H = e(H); !al.done; Z++, al = y.next())
        al = r(H, d, Z, al.value, E), al !== null && (l && al.alternate !== null && H.delete(al.key === null ? Z : al.key), s = n(al, s, Z), tl === null ? R = al : tl.sibling = al, tl = al);
      return l && H.forEach(function(J0) {
        return t(d, J0);
      }), I && xt(d, Z), R;
    }
    function ml(d, s, y, E) {
      if (typeof y == "object" && y !== null && y.type === Vl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case kl:
            l: {
              for (var R = y.key; s !== null; ) {
                if (s.key === R) {
                  if (R = y.type, R === Vl) {
                    if (s.tag === 7) {
                      a(
                        d,
                        s.sibling
                      ), E = u(
                        s,
                        y.props.children
                      ), E.return = d, d = E;
                      break l;
                    }
                  } else if (s.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Wl && xa(R) === s.type) {
                    a(
                      d,
                      s.sibling
                    ), E = u(s, y.props), Pe(E, y), E.return = d, d = E;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              y.type === Vl ? (E = Ga(
                y.props.children,
                d.mode,
                E,
                y.key
              ), E.return = d, d = E) : (E = Wu(
                y.type,
                y.key,
                y.props,
                null,
                d.mode,
                E
              ), Pe(E, y), E.return = d, d = E);
            }
            return c(d);
          case Cl:
            l: {
              for (R = y.key; s !== null; ) {
                if (s.key === R)
                  if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                    a(
                      d,
                      s.sibling
                    ), E = u(s, y.children || []), E.return = d, d = E;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              E = _c(y, d.mode, E), E.return = d, d = E;
            }
            return c(d);
          case Wl:
            return y = xa(y), ml(
              d,
              s,
              y,
              E
            );
        }
        if (Fl(y))
          return U(
            d,
            s,
            y,
            E
          );
        if (Yl(y)) {
          if (R = Yl(y), typeof R != "function") throw Error(m(150));
          return y = R.call(y), q(
            d,
            s,
            y,
            E
          );
        }
        if (typeof y.then == "function")
          return ml(
            d,
            s,
            tn(y),
            E
          );
        if (y.$$typeof === Al)
          return ml(
            d,
            s,
            Fu(d, y),
            E
          );
        an(d, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, s !== null && s.tag === 6 ? (a(d, s.sibling), E = u(s, y), E.return = d, d = E) : (a(d, s), E = Ac(y, d.mode, E), E.return = d, d = E), c(d)) : a(d, s);
    }
    return function(d, s, y, E) {
      try {
        Ie = 0;
        var R = ml(
          d,
          s,
          y,
          E
        );
        return re = null, R;
      } catch (H) {
        if (H === he || H === Pu) throw H;
        var tl = ot(29, H, null, d.mode);
        return tl.lanes = E, tl.return = d, tl;
      }
    };
  }
  var La = Os(!0), Ds = Os(!1), oa = !1;
  function Gc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Xc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function da(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (ul & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = wu(l), ds(l, null, a), t;
    }
    return Ju(l, e, t, a), wu(l);
  }
  function lu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, pf(l, a);
    }
  }
  function Qc(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var jc = !1;
  function tu() {
    if (jc) {
      var l = ve;
      if (l !== null) throw l;
    }
  }
  function au(l, t, a, e) {
    jc = !1;
    var u = l.updateQueue;
    oa = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i, v = f.next;
      f.next = null, c === null ? n = v : c.next = v, c = f;
      var p = l.alternate;
      p !== null && (p = p.updateQueue, i = p.lastBaseUpdate, i !== c && (i === null ? p.firstBaseUpdate = v : i.next = v, p.lastBaseUpdate = f));
    }
    if (n !== null) {
      var z = u.baseState;
      c = 0, p = v = f = null, i = n;
      do {
        var h = i.lane & -536870913, r = h !== i.lane;
        if (r ? ($ & h) === h : (e & h) === h) {
          h !== 0 && h === ye && (jc = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var U = l, q = i;
            h = t;
            var ml = a;
            switch (q.tag) {
              case 1:
                if (U = q.payload, typeof U == "function") {
                  z = U.call(ml, z, h);
                  break l;
                }
                z = U;
                break l;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = q.payload, h = typeof U == "function" ? U.call(ml, z, h) : U, h == null) break l;
                z = C({}, z, h);
                break l;
              case 2:
                oa = !0;
            }
          }
          h = i.callback, h !== null && (l.flags |= 64, r && (l.flags |= 8192), r = u.callbacks, r === null ? u.callbacks = [h] : r.push(h));
        } else
          r = {
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, p === null ? (v = p = r, f = z) : p = p.next = r, c |= h;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null)
            break;
          r = i, i = r.next, r.next = null, u.lastBaseUpdate = r, u.shared.pending = null;
        }
      } while (!0);
      p === null && (f = z), u.baseState = f, u.firstBaseUpdate = v, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), ga |= c, l.lanes = c, l.memoizedState = z;
    }
  }
  function Us(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function Ns(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Us(a[l], t);
  }
  var ge = o(null), en = o(0);
  function Hs(l, t) {
    l = Pt, _(en, l), _(ge, t), Pt = l | t.baseLanes;
  }
  function Zc() {
    _(en, Pt), _(ge, ge.current);
  }
  function xc() {
    Pt = en.current, S(ge), S(en);
  }
  var dt = o(null), Tt = null;
  function ya(l) {
    var t = l.alternate;
    _(zl, zl.current & 1), _(dt, l), Tt === null && (t === null || ge.current !== null || t.memoizedState !== null) && (Tt = l);
  }
  function Vc(l) {
    _(zl, zl.current), _(dt, l), Tt === null && (Tt = l);
  }
  function Cs(l) {
    l.tag === 22 ? (_(zl, zl.current), _(dt, l), Tt === null && (Tt = l)) : va();
  }
  function va() {
    _(zl, zl.current), _(dt, dt.current);
  }
  function mt(l) {
    S(dt), Tt === l && (Tt = null), S(zl);
  }
  var zl = o(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || $i(a) || ki(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Kt = 0, j = null, ol = null, Ml = null, nn = !1, Se = !1, Ka = !1, cn = 0, eu = 0, pe = null, Yy = 0;
  function bl() {
    throw Error(m(321));
  }
  function Lc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!st(l[a], t[a])) return !1;
    return !0;
  }
  function Kc(l, t, a, e, u, n) {
    return Kt = n, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? ro : ci, Ka = !1, n = a(e, u), Ka = !1, Se && (n = Bs(
      t,
      a,
      e,
      u
    )), Rs(l), n;
  }
  function Rs(l) {
    b.H = cu;
    var t = ol !== null && ol.next !== null;
    if (Kt = 0, Ml = ol = j = null, nn = !1, eu = 0, pe = null, t) throw Error(m(300));
    l === null || Ol || (l = l.dependencies, l !== null && ku(l) && (Ol = !0));
  }
  function Bs(l, t, a, e) {
    j = l;
    var u = 0;
    do {
      if (Se && (pe = null), eu = 0, Se = !1, 25 <= u) throw Error(m(301));
      if (u += 1, Ml = ol = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = go, n = t(a, e);
    } while (Se);
    return n;
  }
  function Gy() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? uu(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (j.flags |= 1024), t;
  }
  function Jc() {
    var l = cn !== 0;
    return cn = 0, l;
  }
  function wc(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Wc(l) {
    if (nn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      nn = !1;
    }
    Kt = 0, Ml = ol = j = null, Se = !1, eu = cn = 0, pe = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ml === null ? j.memoizedState = Ml = l : Ml = Ml.next = l, Ml;
  }
  function Tl() {
    if (ol === null) {
      var l = j.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ol.next;
    var t = Ml === null ? j.memoizedState : Ml.next;
    if (t !== null)
      Ml = t, ol = l;
    else {
      if (l === null)
        throw j.alternate === null ? Error(m(467)) : Error(m(310));
      ol = l, l = {
        memoizedState: ol.memoizedState,
        baseState: ol.baseState,
        baseQueue: ol.baseQueue,
        queue: ol.queue,
        next: null
      }, Ml === null ? j.memoizedState = Ml = l : Ml = Ml.next = l;
    }
    return Ml;
  }
  function fn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(l) {
    var t = eu;
    return eu += 1, pe === null && (pe = []), l = As(pe, l, t), t = j, (Ml === null ? t.memoizedState : Ml.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? ro : ci), l;
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return uu(l);
      if (l.$$typeof === Al) return jl(l);
    }
    throw Error(m(438, String(l)));
  }
  function $c(l) {
    var t = null, a = j.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = j.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = fn(), j.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = Da;
    return t.index++, a;
  }
  function Jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function on(l) {
    var t = Tl();
    return kc(t, ol, l);
  }
  function kc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(m(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var i = c = null, f = null, v = t, p = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? ($ & z) === z : (Kt & z) === z) {
          var h = v.revertLane;
          if (h === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), z === ye && (p = !0);
          else if ((Kt & h) === h) {
            v = v.next, h === ye && (p = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, f === null ? (i = f = z, c = n) : f = f.next = z, j.lanes |= h, ga |= h;
          z = v.action, Ka && a(n, z), n = v.hasEagerState ? v.eagerState : a(n, z);
        } else
          h = {
            lane: z,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, f === null ? (i = f = h, c = n) : f = f.next = h, j.lanes |= z, ga |= z;
        v = v.next;
      } while (v !== null && v !== t);
      if (f === null ? c = n : f.next = i, !st(n, l.memoizedState) && (Ol = !0, p && (a = ve, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = c, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Fc(l) {
    var t = Tl(), a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      st(n, t.memoizedState) || (Ol = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function qs(l, t, a) {
    var e = j, u = Tl(), n = I;
    if (n) {
      if (a === void 0) throw Error(m(407));
      a = a();
    } else a = t();
    var c = !st(
      (ol || u).memoizedState,
      a
    );
    if (c && (u.memoizedState = a, Ol = !0), u = u.queue, li(Xs.bind(null, e, u, l), [
      l
    ]), u.getSnapshot !== t || c || Ml !== null && Ml.memoizedState.tag & 1) {
      if (e.flags |= 2048, be(
        9,
        { destroy: void 0 },
        Gs.bind(
          null,
          e,
          u,
          a,
          t
        ),
        null
      ), yl === null) throw Error(m(349));
      n || (Kt & 127) !== 0 || Ys(e, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = j.updateQueue, t === null ? (t = fn(), j.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function Gs(l, t, a, e) {
    t.value = a, t.getSnapshot = e, Qs(t) && js(l);
  }
  function Xs(l, t, a) {
    return a(function() {
      Qs(t) && js(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !st(l, a);
    } catch {
      return !0;
    }
  }
  function js(l) {
    var t = Ya(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Ic(l) {
    var t = $l();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ka) {
        ea(!0);
        try {
          a();
        } finally {
          ea(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jt,
      lastRenderedState: l
    }, t;
  }
  function Zs(l, t, a, e) {
    return l.baseState = a, kc(
      l,
      ol,
      typeof e == "function" ? e : Jt
    );
  }
  function Xy(l, t, a, e, u) {
    if (yn(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          n.listeners.push(c);
        }
      };
      b.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, xs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function xs(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = b.T, c = {};
      b.T = c;
      try {
        var i = a(u, e), f = b.S;
        f !== null && f(c, i), Vs(l, t, i);
      } catch (v) {
        Pc(l, t, v);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), b.T = n;
      }
    } else
      try {
        n = a(u, e), Vs(l, t, n);
      } catch (v) {
        Pc(l, t, v);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        Ls(l, t, e);
      },
      function(e) {
        return Pc(l, t, e);
      }
    ) : Ls(l, t, a);
  }
  function Ls(l, t, a) {
    t.status = "fulfilled", t.value = a, Ks(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, xs(l, a)));
  }
  function Pc(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, Ks(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if (I) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var e = j;
          if (I) {
            if (vl) {
              t: {
                for (var u = vl, n = zt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = At(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                vl = At(
                  u.nextSibling
                ), e = u.data === "F!";
                break l;
              }
            }
            fa(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return a = $l(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: t
    }, a.queue = e, a = yo.bind(
      null,
      j,
      e
    ), e.dispatch = a, e = Ic(!1), n = ni.bind(
      null,
      j,
      !1,
      e.queue
    ), e = $l(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = Xy.bind(
      null,
      j,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function Ws(l) {
    var t = Tl();
    return $s(t, ol, l);
  }
  function $s(l, t, a) {
    if (t = kc(
      l,
      t,
      Js
    )[0], l = on(Jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = uu(t);
      } catch (c) {
        throw c === he ? Pu : c;
      }
    else e = t;
    t = Tl();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (j.flags |= 2048, be(
      9,
      { destroy: void 0 },
      Qy.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function Qy(l, t) {
    l.action = t;
  }
  function ks(l) {
    var t = Tl(), a = ol;
    if (a !== null)
      return $s(t, a, l);
    Tl(), t = t.memoizedState, a = Tl();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function be(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = j.updateQueue, t === null && (t = fn(), j.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Fs() {
    return Tl().memoizedState;
  }
  function dn(l, t, a, e) {
    var u = $l();
    j.flags |= l, u.memoizedState = be(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function mn(l, t, a, e) {
    var u = Tl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ol !== null && e !== null && Lc(e, ol.memoizedState.deps) ? u.memoizedState = be(t, n, a, e) : (j.flags |= l, u.memoizedState = be(
      1 | t,
      n,
      a,
      e
    ));
  }
  function Is(l, t) {
    dn(8390656, 8, l, t);
  }
  function li(l, t) {
    mn(2048, 8, l, t);
  }
  function jy(l) {
    j.flags |= 4;
    var t = j.updateQueue;
    if (t === null)
      t = fn(), j.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function Ps(l) {
    var t = Tl().memoizedState;
    return jy({ ref: t, nextImpl: l }), function() {
      if ((ul & 2) !== 0) throw Error(m(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function lo(l, t) {
    return mn(4, 2, l, t);
  }
  function to(l, t) {
    return mn(4, 4, l, t);
  }
  function ao(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function eo(l, t, a) {
    a = a != null ? a.concat([l]) : null, mn(4, 4, ao.bind(null, t, l), a);
  }
  function ti() {
  }
  function uo(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Lc(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function no(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Lc(t, e[1]))
      return e[0];
    if (e = l(), Ka) {
      ea(!0);
      try {
        l();
      } finally {
        ea(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function ai(l, t, a) {
    return a === void 0 || (Kt & 1073741824) !== 0 && ($ & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = id(), j.lanes |= l, ga |= l, a);
  }
  function co(l, t, a, e) {
    return st(a, t) ? a : ge.current !== null ? (l = ai(l, a, e), st(l, t) || (Ol = !0), l) : (Kt & 42) === 0 || (Kt & 1073741824) !== 0 && ($ & 261930) === 0 ? (Ol = !0, l.memoizedState = a) : (l = id(), j.lanes |= l, ga |= l, t);
  }
  function io(l, t, a, e, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var c = b.T, i = {};
    b.T = i, ni(l, !1, t, a);
    try {
      var f = u(), v = b.S;
      if (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var p = qy(
          f,
          e
        );
        nu(
          l,
          t,
          p,
          ht(l)
        );
      } else
        nu(
          l,
          t,
          e,
          ht(l)
        );
    } catch (z) {
      nu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        ht()
      );
    } finally {
      A.p = n, c !== null && i.types !== null && (c.types = i.types), b.T = c;
    }
  }
  function Zy() {
  }
  function ei(l, t, a, e) {
    if (l.tag !== 5) throw Error(m(476));
    var u = fo(l).queue;
    io(
      l,
      u,
      t,
      B,
      a === null ? Zy : function() {
        return so(l), a(e);
      }
    );
  }
  function fo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: B
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function so(l) {
    var t = fo(l);
    t.next === null && (t = l.alternate.memoizedState), nu(
      l,
      t.next.queue,
      {},
      ht()
    );
  }
  function ui() {
    return jl(zu);
  }
  function oo() {
    return Tl().memoizedState;
  }
  function mo() {
    return Tl().memoizedState;
  }
  function xy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ht();
          l = da(a);
          var e = ma(t, l, a);
          e !== null && (ut(e, t, a), lu(e, t, a)), t = { cache: Rc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vy(l, t, a) {
    var e = ht();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yn(l) ? vo(t, a) : (a = zc(l, t, a, e), a !== null && (ut(a, l, e), ho(a, t, e)));
  }
  function yo(l, t, a) {
    var e = ht();
    nu(l, t, a, e);
  }
  function nu(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yn(l)) vo(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, i = n(c, a);
          if (u.hasEagerState = !0, u.eagerState = i, st(i, c))
            return Ju(l, t, u, 0), yl === null && Ku(), !1;
        } catch {
        }
      if (a = zc(l, t, u, e), a !== null)
        return ut(a, l, e), ho(a, t, e), !0;
    }
    return !1;
  }
  function ni(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Gi(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yn(l)) {
      if (t) throw Error(m(479));
    } else
      t = zc(
        l,
        a,
        e,
        2
      ), t !== null && ut(t, l, 2);
  }
  function yn(l) {
    var t = l.alternate;
    return l === j || t !== null && t === j;
  }
  function vo(l, t) {
    Se = nn = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function ho(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, pf(l, a);
    }
  }
  var cu = {
    readContext: jl,
    use: sn,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl
  };
  cu.useEffectEvent = bl;
  var ro = {
    readContext: jl,
    use: sn,
    useCallback: function(l, t) {
      return $l().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: jl,
    useEffect: Is,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, dn(
        4194308,
        4,
        ao.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return dn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      dn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = $l();
      t = t === void 0 ? null : t;
      var e = l();
      if (Ka) {
        ea(!0);
        try {
          l();
        } finally {
          ea(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = $l();
      if (a !== void 0) {
        var u = a(t);
        if (Ka) {
          ea(!0);
          try {
            a(t);
          } finally {
            ea(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = Vy.bind(
        null,
        j,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = $l();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ic(l);
      var t = l.queue, a = yo.bind(null, j, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: ti,
    useDeferredValue: function(l, t) {
      var a = $l();
      return ai(a, l, t);
    },
    useTransition: function() {
      var l = Ic(!1);
      return l = io.bind(
        null,
        j,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = j, u = $l();
      if (I) {
        if (a === void 0)
          throw Error(m(407));
        a = a();
      } else {
        if (a = t(), yl === null)
          throw Error(m(349));
        ($ & 127) !== 0 || Ys(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, Is(Xs.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, be(
        9,
        { destroy: void 0 },
        Gs.bind(
          null,
          e,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = $l(), t = yl.identifierPrefix;
      if (I) {
        var a = Rt, e = Ct;
        a = (e & ~(1 << 32 - ft(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = cn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Yy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ui,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function(l) {
      var t = $l();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ni.bind(
        null,
        j,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: $c,
    useCacheRefresh: function() {
      return $l().memoizedState = xy.bind(
        null,
        j
      );
    },
    useEffectEvent: function(l) {
      var t = $l(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((ul & 2) !== 0)
          throw Error(m(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ci = {
    readContext: jl,
    use: sn,
    useCallback: uo,
    useContext: jl,
    useEffect: li,
    useImperativeHandle: eo,
    useInsertionEffect: lo,
    useLayoutEffect: to,
    useMemo: no,
    useReducer: on,
    useRef: Fs,
    useState: function() {
      return on(Jt);
    },
    useDebugValue: ti,
    useDeferredValue: function(l, t) {
      var a = Tl();
      return co(
        a,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = on(Jt)[0], t = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: qs,
    useId: oo,
    useHostTransitionStatus: ui,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l, t) {
      var a = Tl();
      return Zs(a, ol, l, t);
    },
    useMemoCache: $c,
    useCacheRefresh: mo
  };
  ci.useEffectEvent = Ps;
  var go = {
    readContext: jl,
    use: sn,
    useCallback: uo,
    useContext: jl,
    useEffect: li,
    useImperativeHandle: eo,
    useInsertionEffect: lo,
    useLayoutEffect: to,
    useMemo: no,
    useReducer: Fc,
    useRef: Fs,
    useState: function() {
      return Fc(Jt);
    },
    useDebugValue: ti,
    useDeferredValue: function(l, t) {
      var a = Tl();
      return ol === null ? ai(a, l, t) : co(
        a,
        ol.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fc(Jt)[0], t = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : uu(l),
        t
      ];
    },
    useSyncExternalStore: qs,
    useId: oo,
    useHostTransitionStatus: ui,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(l, t) {
      var a = Tl();
      return ol !== null ? Zs(a, ol, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: $c,
    useCacheRefresh: mo
  };
  go.useEffectEvent = Ps;
  function ii(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var fi = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = ht(), u = da(e);
      u.payload = t, a != null && (u.callback = a), t = ma(l, u, e), t !== null && (ut(t, l, e), lu(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = ht(), u = da(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ma(l, u, e), t !== null && (ut(t, l, e), lu(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ht(), e = da(a);
      e.tag = 2, t != null && (e.callback = t), t = ma(l, e, a), t !== null && (ut(t, l, a), lu(t, l, a));
    }
  };
  function So(l, t, a, e, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Je(a, e) || !Je(u, n) : !0;
  }
  function po(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && fi.enqueueReplaceState(t, t.state, null);
  }
  function Ja(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = C({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function bo(l) {
    Lu(l);
  }
  function Eo(l) {
    console.error(l);
  }
  function zo(l) {
    Lu(l);
  }
  function vn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function To(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function si(l, t, a) {
    return a = da(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      vn(l, t);
    }, a;
  }
  function Ao(l) {
    return l = da(l), l.tag = 3, l;
  }
  function _o(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        To(t, a, e);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      To(t, a, e), typeof u != "function" && (Sa === null ? Sa = /* @__PURE__ */ new Set([this]) : Sa.add(this));
      var i = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Ly(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && me(
        t,
        a,
        u,
        !0
      ), a = dt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Tt === null ? Mn() : a.alternate === null && El === 0 && (El = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === ln ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), Bi(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === ln ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), Bi(l, e, u)), !1;
        }
        throw Error(m(435, a.tag));
      }
      return Bi(l, e, u), Mn(), !1;
    }
    if (I)
      return t = dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Dc && (l = Error(m(422), { cause: e }), $e(pt(l, a)))) : (e !== Dc && (t = Error(m(423), {
        cause: e
      }), $e(
        pt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = pt(e, a), u = si(
        l.stateNode,
        e,
        u
      ), Qc(l, u), El !== 4 && (El = 2)), !1;
    var n = Error(m(520), { cause: e });
    if (n = pt(n, a), vu === null ? vu = [n] : vu.push(n), El !== 4 && (El = 2), t === null) return !0;
    e = pt(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = si(a.stateNode, e, l), Qc(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Sa === null || !Sa.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = Ao(u), _o(
              u,
              l,
              a,
              e
            ), Qc(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var oi = Error(m(461)), Ol = !1;
  function Zl(l, t, a, e) {
    t.child = l === null ? Ds(t, null, a, e) : La(
      t,
      l.child,
      a,
      e
    );
  }
  function Mo(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e)
        i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return ja(t), e = Kc(
      l,
      t,
      a,
      c,
      n,
      u
    ), i = Jc(), l !== null && !Ol ? (wc(l, t, u), wt(l, t, u)) : (I && i && Mc(t), t.flags |= 1, Zl(l, t, e, u), t.child);
  }
  function Oo(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Tc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Do(
        l,
        t,
        n,
        e,
        u
      )) : (l = Wu(
        a.type,
        null,
        e,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Si(l, u)) {
      var c = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Je, a(c, e) && l.ref === t.ref)
        return wt(l, t, u);
    }
    return t.flags |= 1, l = Zt(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Do(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Je(n, e) && l.ref === t.ref)
        if (Ol = !1, t.pendingProps = e = n, Si(l, u))
          (l.flags & 131072) !== 0 && (Ol = !0);
        else
          return t.lanes = l.lanes, wt(l, t, u);
    }
    return di(
      l,
      t,
      a,
      e,
      u
    );
  }
  function Uo(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; )
            u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return No(
          l,
          t,
          n,
          a,
          e
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Iu(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Hs(t, n) : Zc(), Cs(t);
      else
        return e = t.lanes = 536870912, No(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (Iu(t, n.cachePool), Hs(t, n), va(), t.memoizedState = null) : (l !== null && Iu(t, null), Zc(), va());
    return Zl(l, t, u, a), t.child;
  }
  function iu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function No(l, t, a, e, u) {
    var n = qc();
    return n = n === null ? null : { parent: _l._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Iu(t, null), Zc(), Cs(t), l !== null && me(l, t, e, !0), t.childLanes = u, null;
  }
  function hn(l, t) {
    return t = gn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ho(l, t, a) {
    return La(t, l.child, null, a), l = hn(t, t.pendingProps), l.flags |= 2, mt(t), t.memoizedState = null, l;
  }
  function Ky(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (I) {
        if (e.mode === "hidden")
          return l = hn(t, e), t.lanes = 536870912, iu(null, l);
        if (Vc(t), (l = vl) ? (l = Vd(
          l,
          zt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ca !== null ? { id: Ct, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(l), a.return = t, t.child = a, Ql = t, vl = null)) : l = null, l === null) throw fa(t);
        return t.lanes = 536870912, null;
      }
      return hn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Vc(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Ho(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(m(558));
      else if (Ol || me(l, t, a, !1), u = (a & l.childLanes) !== 0, Ol || u) {
        if (e = yl, e !== null && (c = bf(e, a), c !== 0 && c !== n.retryLane))
          throw n.retryLane = c, Ya(l, c), ut(e, l, c), oi;
        Mn(), t = Ho(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, vl = At(c.nextSibling), Ql = t, I = !0, ia = null, zt = !1, l !== null && rs(t, l), t = hn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Zt(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function rn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(m(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function di(l, t, a, e, u) {
    return ja(t), a = Kc(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = Jc(), l !== null && !Ol ? (wc(l, t, u), wt(l, t, u)) : (I && e && Mc(t), t.flags |= 1, Zl(l, t, a, u), t.child);
  }
  function Co(l, t, a, e, u, n) {
    return ja(t), t.updateQueue = null, a = Bs(
      t,
      e,
      a,
      u
    ), Rs(l), e = Jc(), l !== null && !Ol ? (wc(l, t, n), wt(l, t, n)) : (I && e && Mc(t), t.flags |= 1, Zl(l, t, a, n), t.child);
  }
  function Ro(l, t, a, e, u) {
    if (ja(t), t.stateNode === null) {
      var n = fe, c = a.contextType;
      typeof c == "object" && c !== null && (n = jl(c)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Gc(t), c = a.contextType, n.context = typeof c == "object" && c !== null ? jl(c) : fe, n.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (ii(
        t,
        a,
        c,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && fi.enqueueReplaceState(n, n.state, null), au(t, e, n, u), tu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, f = Ja(a, i);
      n.props = f;
      var v = n.context, p = a.contextType;
      c = fe, typeof p == "object" && p !== null && (c = jl(p));
      var z = a.getDerivedStateFromProps;
      p = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && po(
        t,
        n,
        e,
        c
      ), oa = !1;
      var h = t.memoizedState;
      n.state = h, au(t, e, n, u), tu(), v = t.memoizedState, i || h !== v || oa ? (typeof z == "function" && (ii(
        t,
        a,
        z,
        e
      ), v = t.memoizedState), (f = oa || So(
        t,
        a,
        f,
        e,
        h,
        v,
        c
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = v), n.props = e, n.state = v, n.context = c, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Xc(l, t), c = t.memoizedProps, p = Ja(a, c), n.props = p, z = t.pendingProps, h = n.context, v = a.contextType, f = fe, typeof v == "object" && v !== null && (f = jl(v)), i = a.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== z || h !== f) && po(
        t,
        n,
        e,
        f
      ), oa = !1, h = t.memoizedState, n.state = h, au(t, e, n, u), tu();
      var r = t.memoizedState;
      c !== z || h !== r || oa || l !== null && l.dependencies !== null && ku(l.dependencies) ? (typeof i == "function" && (ii(
        t,
        a,
        i,
        e
      ), r = t.memoizedState), (p = oa || So(
        t,
        a,
        p,
        e,
        h,
        r,
        f
      ) || l !== null && l.dependencies !== null && ku(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, r, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        r,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = r), n.props = e, n.state = r, n.context = f, e = p) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, rn(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = La(
      t,
      l.child,
      null,
      u
    ), t.child = La(
      t,
      null,
      a,
      u
    )) : Zl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = wt(
      l,
      t,
      u
    ), l;
  }
  function Bo(l, t, a, e) {
    return Xa(), t.flags |= 256, Zl(l, t, a, e), t.child;
  }
  var mi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yi(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function vi(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= vt), l;
  }
  function qo(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (I) {
        if (u ? ya(t) : va(), (l = vl) ? (l = Vd(
          l,
          zt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: ca !== null ? { id: Ct, overflow: Rt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(l), a.return = t, t.child = a, Ql = t, vl = null)) : l = null, l === null) throw fa(t);
        return ki(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = e.children;
      return e = e.fallback, u ? (va(), u = t.mode, i = gn(
        { mode: "hidden", children: i },
        u
      ), e = Ga(
        e,
        u,
        a,
        null
      ), i.return = t, e.return = t, i.sibling = e, t.child = i, e = t.child, e.memoizedState = yi(a), e.childLanes = vi(
        l,
        c,
        a
      ), t.memoizedState = mi, iu(null, e)) : (ya(t), hi(t, i));
    }
    var f = l.memoizedState;
    if (f !== null && (i = f.dehydrated, i !== null)) {
      if (n)
        t.flags & 256 ? (ya(t), t.flags &= -257, t = ri(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (va(), t.child = l.child, t.flags |= 128, t = null) : (va(), i = e.fallback, u = t.mode, e = gn(
          { mode: "visible", children: e.children },
          u
        ), i = Ga(
          i,
          u,
          a,
          null
        ), i.flags |= 2, e.return = t, i.return = t, e.sibling = i, t.child = e, La(
          t,
          l.child,
          null,
          a
        ), e = t.child, e.memoizedState = yi(a), e.childLanes = vi(
          l,
          c,
          a
        ), t.memoizedState = mi, t = iu(null, e));
      else if (ya(t), ki(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
        c = v, e = Error(m(419)), e.stack = "", e.digest = c, $e({ value: e, source: null, stack: null }), t = ri(
          l,
          t,
          a
        );
      } else if (Ol || me(l, t, a, !1), c = (a & l.childLanes) !== 0, Ol || c) {
        if (c = yl, c !== null && (e = bf(c, a), e !== 0 && e !== f.retryLane))
          throw f.retryLane = e, Ya(l, e), ut(c, l, e), oi;
        $i(i) || Mn(), t = ri(
          l,
          t,
          a
        );
      } else
        $i(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, vl = At(
          i.nextSibling
        ), Ql = t, I = !0, ia = null, zt = !1, l !== null && rs(t, l), t = hi(
          t,
          e.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (va(), i = e.fallback, u = t.mode, f = l.child, v = f.sibling, e = Zt(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? i = Zt(
      v,
      i
    ) : (i = Ga(
      i,
      u,
      a,
      null
    ), i.flags |= 2), i.return = t, e.return = t, e.sibling = i, t.child = e, iu(null, e), e = t.child, i = l.child.memoizedState, i === null ? i = yi(a) : (u = i.cachePool, u !== null ? (f = _l._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = zs(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: u
    }), e.memoizedState = i, e.childLanes = vi(
      l,
      c,
      a
    ), t.memoizedState = mi, iu(l.child, e)) : (ya(t), a = l.child, l = a.sibling, a = Zt(a, {
      mode: "visible",
      children: e.children
    }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function hi(l, t) {
    return t = gn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function gn(l, t) {
    return l = ot(22, l, null, t), l.lanes = 0, l;
  }
  function ri(l, t, a) {
    return La(t, l.child, null, a), l = hi(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Yo(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Hc(l.return, t, a);
  }
  function gi(l, t, a, e, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = e, c.tail = a, c.tailMode = u, c.treeForkCount = n);
  }
  function Go(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var c = zl.current, i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, _(zl, c), Zl(l, t, e, a), e = I ? We : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Yo(l, a, t);
        else if (l.tag === 19)
          Yo(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          l = a.alternate, l !== null && un(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), gi(
          t,
          !1,
          u,
          a,
          n,
          e
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && un(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        gi(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        gi(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ga |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (me(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, a = Zt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Zt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Si(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ku(l)));
  }
  function Jy(l, t, a) {
    switch (t.tag) {
      case 3:
        Gl(t, t.stateNode.containerInfo), sa(t, _l, l.memoizedState.cache), Xa();
        break;
      case 27:
      case 5:
        aa(t);
        break;
      case 4:
        Gl(t, t.stateNode.containerInfo);
        break;
      case 10:
        sa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Vc(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? qo(l, t, a) : (ya(t), l = wt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        ya(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (me(
          l,
          t,
          a,
          !1
        ), e = (a & t.childLanes) !== 0), u) {
          if (e)
            return Go(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), _(zl, zl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, Uo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        sa(t, _l, l.memoizedState.cache);
    }
    return wt(l, t, a);
  }
  function Xo(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ol = !0;
      else {
        if (!Si(l, a) && (t.flags & 128) === 0)
          return Ol = !1, Jy(
            l,
            t,
            a
          );
        Ol = (l.flags & 131072) !== 0;
      }
    else
      Ol = !1, I && (t.flags & 1048576) !== 0 && hs(t, We, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = xa(t.elementType), t.type = l, typeof l == "function")
            Tc(l) ? (e = Ja(l, e), t.tag = 1, t = Ro(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = di(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === ql) {
                t.tag = 11, t = Mo(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === K) {
                t.tag = 14, t = Oo(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              }
            }
            throw t = Q(l) || l, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return di(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return e = t.type, u = Ja(
          e,
          t.pendingProps
        ), Ro(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (Gl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Xc(l, t), au(t, e, null, a);
          var c = t.memoizedState;
          if (e = c.cache, sa(t, _l, e), e !== n.cache && Cc(
            t,
            [_l],
            a,
            !0
          ), tu(), e = c.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Bo(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = pt(
                Error(m(424)),
                t
              ), $e(u), t = Bo(
                l,
                t,
                e,
                a
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = At(l.firstChild), Ql = t, I = !0, ia = null, zt = !0, a = Ds(
                t,
                null,
                e,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Xa(), e === u) {
              t = wt(
                l,
                t,
                a
              );
              break l;
            }
            Zl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return rn(l, t), l === null ? (a = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, e = Rn(
          V.current
        ).createElement(a), e[Xl] = t, e[Il] = l, xl(e, a, l), Rl(e), t.stateNode = e) : t.memoizedState = $d(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return aa(t), l === null && I && (e = t.stateNode = Jd(
          t.type,
          t.pendingProps,
          V.current
        ), Ql = t, zt = !0, u = vl, za(t.type) ? (Fi = u, vl = At(e.firstChild)) : vl = u), Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), rn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && I && ((u = e = vl) && (e = z0(
          e,
          t.type,
          t.pendingProps,
          zt
        ), e !== null ? (t.stateNode = e, Ql = t, vl = At(e.firstChild), zt = !1, u = !0) : u = !1), u || fa(t)), aa(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, e = n.children, Ji(u, n) ? e = null : c !== null && Ji(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = Kc(
          l,
          t,
          Gy,
          null,
          null,
          a
        ), zu._currentValue = u), rn(l, t), Zl(l, t, e, a), t.child;
      case 6:
        return l === null && I && ((l = a = vl) && (a = T0(
          a,
          t.pendingProps,
          zt
        ), a !== null ? (t.stateNode = a, Ql = t, vl = null, l = !0) : l = !1), l || fa(t)), null;
      case 13:
        return qo(l, t, a);
      case 4:
        return Gl(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = La(
          t,
          null,
          e,
          a
        ) : Zl(l, t, e, a), t.child;
      case 11:
        return Mo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Zl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e = t.pendingProps, sa(t, t.type, e.value), Zl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, ja(t), u = jl(u), e = e(u), t.flags |= 1, Zl(l, t, e, a), t.child;
      case 14:
        return Oo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Do(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Go(l, t, a);
      case 31:
        return Ky(l, t, a);
      case 22:
        return Uo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ja(t), e = jl(_l), l === null ? (u = qc(), u === null && (u = yl, n = Rc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Gc(t), sa(t, _l, u)) : ((l.lanes & a) !== 0 && (Xc(l, t), au(t, null, null, a), tu()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), sa(t, _l, e)) : (e = n.cache, sa(t, _l, e), e !== u.cache && Cc(
          t,
          [_l],
          a,
          !0
        ))), Zl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Wt(l) {
    l.flags |= 4;
  }
  function pi(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dd()) l.flags |= 8192;
        else
          throw Va = ln, Yc;
    } else l.flags &= -16777217;
  }
  function Qo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !lm(t))
      if (dd()) l.flags |= 8192;
      else
        throw Va = ln, Yc;
  }
  function Sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gf() : 536870912, l.lanes |= t, Ae |= t);
  }
  function fu(l, t) {
    if (!I)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
      }
  }
  function hl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function wy(l, t, a) {
    var e = t.pendingProps;
    switch (Oc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return hl(t), null;
      case 1:
        return hl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Lt(_l), Sl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (de(t) ? Wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uc())), hl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Wt(t), n !== null ? (hl(t), Qo(t, n)) : (hl(t), pi(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? (Wt(t), hl(t), Qo(t, n)) : (hl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Wt(t), hl(t), pi(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (Ua(t), a = V.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Wt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(m(166));
            return hl(t), null;
          }
          l = D.current, de(t) ? gs(t) : (l = Jd(u, e, a), t.stateNode = l, Wt(t));
        }
        return hl(t), null;
      case 5:
        if (Ua(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Wt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(m(166));
            return hl(t), null;
          }
          if (n = D.current, de(t))
            gs(t);
          else {
            var c = Rn(
              V.current
            );
            switch (n) {
              case 1:
                n = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof e.is == "string" ? c.createElement("select", {
                      is: e.is
                    }) : c.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? c.createElement(u, { is: e.is }) : c.createElement(u);
                }
            }
            n[Xl] = t, n[Il] = e;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = n;
            l: switch (xl(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Wt(t);
          }
        }
        return hl(t), pi(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && Wt(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = V.current, de(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Ql, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[Xl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || qd(l.nodeValue, a)), l || fa(t, !0);
          } else
            l = Rn(l).createTextNode(
              e
            ), l[Xl] = t, t.stateNode = l;
        }
        return hl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = de(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(557));
              l[Xl] = t;
            } else
              Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            hl(t), l = !1;
          } else
            a = Uc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (mt(t), t) : (mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(m(558));
        }
        return hl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = de(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(m(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[Xl] = t;
            } else
              Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            hl(t), u = !1;
          } else
            u = Uc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (mt(t), t) : (mt(t), null);
        }
        return mt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), Sn(t, t.updateQueue), hl(t), null);
      case 4:
        return Sl(), l === null && Zi(t.stateNode.containerInfo), hl(t), null;
      case 10:
        return Lt(t.type), hl(t), null;
      case 19:
        if (S(zl), e = t.memoizedState, e === null) return hl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) fu(e, !1);
          else {
            if (El !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = un(l), n !== null) {
                  for (t.flags |= 128, fu(e, !1), l = n.updateQueue, t.updateQueue = l, Sn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ms(a, l), a = a.sibling;
                  return _(
                    zl,
                    zl.current & 1 | 2
                  ), I && xt(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && ct() > Tn && (t.flags |= 128, u = !0, fu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = un(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, Sn(t, l), fu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I)
                return hl(t), null;
            } else
              2 * ct() - e.renderingStartTime > Tn && a !== 536870912 && (t.flags |= 128, u = !0, fu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = ct(), l.sibling = null, a = zl.current, _(
          zl,
          u ? a & 1 | 2 : a & 1
        ), I && xt(t, e.treeForkCount), l) : (hl(t), null);
      case 22:
      case 23:
        return mt(t), xc(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), a = t.updateQueue, a !== null && Sn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && S(Za), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Lt(_l), hl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Wy(l, t) {
    switch (Oc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Lt(_l), Sl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ua(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (mt(t), t.alternate === null)
            throw Error(m(340));
          Xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (mt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return S(zl), null;
      case 4:
        return Sl(), null;
      case 10:
        return Lt(t.type), null;
      case 22:
      case 23:
        return mt(t), xc(), l !== null && S(Za), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Lt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jo(l, t) {
    switch (Oc(t), t.tag) {
      case 3:
        Lt(_l), Sl();
        break;
      case 26:
      case 27:
      case 5:
        Ua(t);
        break;
      case 4:
        Sl();
        break;
      case 31:
        t.memoizedState !== null && mt(t);
        break;
      case 13:
        mt(t);
        break;
      case 19:
        S(zl);
        break;
      case 10:
        Lt(t.type);
        break;
      case 22:
      case 23:
        mt(t), xc(), l !== null && S(Za);
        break;
      case 24:
        Lt(_l);
    }
  }
  function su(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, c = a.inst;
            e = n(), c.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (i) {
      fl(t, t.return, i);
    }
  }
  function ha(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = t;
              var f = a, v = i;
              try {
                v();
              } catch (p) {
                fl(
                  u,
                  f,
                  p
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (p) {
      fl(t, t.return, p);
    }
  }
  function Zo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ns(t, a);
      } catch (e) {
        fl(l, l.return, e);
      }
    }
  }
  function xo(l, t, a) {
    a.props = Ja(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      fl(l, t, e);
    }
  }
  function ou(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      fl(l, t, u);
    }
  }
  function Bt(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          fl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          fl(l, t, u);
        }
      else a.current = null;
  }
  function Vo(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      fl(l, l.return, u);
    }
  }
  function bi(l, t, a) {
    try {
      var e = l.stateNode;
      r0(e, l.type, a, t), e[Il] = t;
    } catch (u) {
      fl(l, l.return, u);
    }
  }
  function Lo(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && za(l.type) || l.tag === 4;
  }
  function Ei(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Lo(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && za(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zi(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Qt));
    else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (zi(l, t, a), l = l.sibling; l !== null; )
        zi(l, t, a), l = l.sibling;
  }
  function pn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (pn(l, t, a), l = l.sibling; l !== null; )
        pn(l, t, a), l = l.sibling;
  }
  function Ko(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      xl(t, e, a), t[Xl] = l, t[Il] = a;
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var $t = !1, Dl = !1, Ti = !1, Jo = typeof WeakSet == "function" ? WeakSet : Set, Bl = null;
  function $y(l, t) {
    if (l = l.containerInfo, Li = jn, l = es(l), rc(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset, n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, i = -1, f = -1, v = 0, p = 0, z = l, h = null;
            t: for (; ; ) {
              for (var r; z !== a || u !== 0 && z.nodeType !== 3 || (i = c + u), z !== n || e !== 0 && z.nodeType !== 3 || (f = c + e), z.nodeType === 3 && (c += z.nodeValue.length), (r = z.firstChild) !== null; )
                h = z, z = r;
              for (; ; ) {
                if (z === l) break t;
                if (h === a && ++v === u && (i = c), h === n && ++p === e && (f = c), (r = z.nextSibling) !== null) break;
                z = h, h = z.parentNode;
              }
              z = r;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ki = { focusedElem: l, selectionRange: a }, jn = !1, Bl = t; Bl !== null; )
      if (t = Bl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Bl = l;
      else
        for (; Bl !== null; ) {
          switch (t = Bl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  u = l[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
                try {
                  var U = Ja(
                    a.type,
                    u
                  );
                  l = e.getSnapshotBeforeUpdate(
                    U,
                    n
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  fl(
                    a,
                    a.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Wi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wi(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Bl = l;
            break;
          }
          Bl = t.return;
        }
  }
  function wo(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ft(l, a), e & 4 && su(5, a);
        break;
      case 1:
        if (Ft(l, a), e & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              fl(a, a.return, c);
            }
          else {
            var u = Ja(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              fl(
                a,
                a.return,
                c
              );
            }
          }
        e & 64 && Zo(a), e & 512 && ou(a, a.return);
        break;
      case 3:
        if (Ft(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ns(l, t);
          } catch (c) {
            fl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Ko(a);
      case 26:
      case 5:
        Ft(l, a), t === null && e & 4 && Vo(a), e & 512 && ou(a, a.return);
        break;
      case 12:
        Ft(l, a);
        break;
      case 31:
        Ft(l, a), e & 4 && ko(l, a);
        break;
      case 13:
        Ft(l, a), e & 4 && Fo(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = u0.bind(
          null,
          a
        ), A0(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || $t, !e) {
          t = t !== null && t.memoizedState !== null || Dl, u = $t;
          var n = Dl;
          $t = e, (Dl = t) && !n ? It(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ft(l, a), $t = u, Dl = n;
        }
        break;
      case 30:
        break;
      default:
        Ft(l, a);
    }
  }
  function Wo(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Wo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Pn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, lt = !1;
  function kt(l, t, a) {
    for (a = a.child; a !== null; )
      $o(l, t, a), a = a.sibling;
  }
  function $o(l, t, a) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(Be, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Dl || Bt(a, t), kt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Dl || Bt(a, t);
        var e = gl, u = lt;
        za(a.type) && (gl = a.stateNode, lt = !1), kt(
          l,
          t,
          a
        ), pu(a.stateNode), gl = e, lt = u;
        break;
      case 5:
        Dl || Bt(a, t);
      case 6:
        if (e = gl, u = lt, gl = null, kt(
          l,
          t,
          a
        ), gl = e, lt = u, gl !== null)
          if (lt)
            try {
              (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
          else
            try {
              gl.removeChild(a.stateNode);
            } catch (n) {
              fl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        gl !== null && (lt ? (l = gl, Zd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Ce(l)) : Zd(gl, a.stateNode));
        break;
      case 4:
        e = gl, u = lt, gl = a.stateNode.containerInfo, lt = !0, kt(
          l,
          t,
          a
        ), gl = e, lt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ha(2, a, t), Dl || ha(4, a, t), kt(
          l,
          t,
          a
        );
        break;
      case 1:
        Dl || (Bt(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && xo(
          a,
          t,
          e
        )), kt(
          l,
          t,
          a
        );
        break;
      case 21:
        kt(
          l,
          t,
          a
        );
        break;
      case 22:
        Dl = (e = Dl) || a.memoizedState !== null, kt(
          l,
          t,
          a
        ), Dl = e;
        break;
      default:
        kt(
          l,
          t,
          a
        );
    }
  }
  function ko(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ce(l);
      } catch (a) {
        fl(t, t.return, a);
      }
    }
  }
  function Fo(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ce(l);
      } catch (a) {
        fl(t, t.return, a);
      }
  }
  function ky(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jo()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jo()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function bn(l, t) {
    var a = ky(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = n0.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function tt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e], n = l, c = t, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (za(i.type)) {
                gl = i.stateNode, lt = !1;
                break l;
              }
              break;
            case 5:
              gl = i.stateNode, lt = !1;
              break l;
            case 3:
            case 4:
              gl = i.stateNode.containerInfo, lt = !0;
              break l;
          }
          i = i.return;
        }
        if (gl === null) throw Error(m(160));
        $o(n, c, u), gl = null, lt = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Io(t, l), t = t.sibling;
  }
  var Nt = null;
  function Io(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tt(t, l), at(l), e & 4 && (ha(3, l, l.return), su(3, l), ha(5, l, l.return));
        break;
      case 1:
        tt(t, l), at(l), e & 512 && (Dl || a === null || Bt(a, a.return)), e & 64 && $t && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = Nt;
        if (tt(t, l), at(l), e & 512 && (Dl || a === null || Bt(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (e) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ge] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), xl(n, e, a), n[Xl] = l, Rl(n), e = n;
                      break l;
                    case "link":
                      var c = Id(
                        "link",
                        "href",
                        u
                      ).get(e + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (n = c[i], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), xl(n, e, a), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = Id(
                        "meta",
                        "content",
                        u
                      ).get(e + (a.content || ""))) {
                        for (i = 0; i < c.length; i++)
                          if (n = c[i], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), xl(n, e, a), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, e));
                  }
                  n[Xl] = l, Rl(n), e = n;
                }
                l.stateNode = e;
              } else
                Pd(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fd(
                u,
                e,
                l.memoizedProps
              );
          else
            n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? Pd(
              u,
              l.type,
              l.stateNode
            ) : Fd(
              u,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && bi(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        tt(t, l), at(l), e & 512 && (Dl || a === null || Bt(a, a.return)), a !== null && e & 4 && bi(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (tt(t, l), at(l), e & 512 && (Dl || a === null || Bt(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            te(u, "");
          } catch (U) {
            fl(l, l.return, U);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, bi(
          l,
          u,
          a !== null ? a.memoizedProps : u
        )), e & 1024 && (Ti = !0);
        break;
      case 6:
        if (tt(t, l), at(l), e & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (U) {
            fl(l, l.return, U);
          }
        }
        break;
      case 3:
        if (Yn = null, u = Nt, Nt = Bn(t.containerInfo), tt(t, l), Nt = u, at(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ce(t.containerInfo);
          } catch (U) {
            fl(l, l.return, U);
          }
        Ti && (Ti = !1, Po(l));
        break;
      case 4:
        e = Nt, Nt = Bn(
          l.stateNode.containerInfo
        ), tt(t, l), at(l), Nt = e;
        break;
      case 12:
        tt(t, l), at(l);
        break;
      case 31:
        tt(t, l), at(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, bn(l, e)));
        break;
      case 13:
        tt(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (zn = ct()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, bn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, v = $t, p = Dl;
        if ($t = v || u, Dl = p || f, tt(t, l), Dl = p, $t = v, at(l), e & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || $t || Dl || wa(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, u)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = f.stateNode;
                    var z = f.memoizedProps.style, h = z != null && z.hasOwnProperty("display") ? z.display : null;
                    i.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (U) {
                  fl(f, f.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (U) {
                  fl(f, f.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var r = f.stateNode;
                  u ? xd(r, !0) : xd(f.stateNode, !1);
                } catch (U) {
                  fl(f, f.return, U);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, bn(l, a))));
        break;
      case 19:
        tt(t, l), at(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, bn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tt(t, l), at(l);
    }
  }
  function at(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Lo(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(m(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = Ei(l);
            pn(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (te(c, ""), a.flags &= -33);
            var i = Ei(l);
            pn(l, i, c);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, v = Ei(l);
            zi(
              l,
              v,
              f
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (p) {
        fl(l, l.return, p);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Po(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Po(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Ft(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wo(l, t.alternate, t), t = t.sibling;
  }
  function wa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ha(4, t, t.return), wa(t);
          break;
        case 1:
          Bt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xo(
            t,
            t.return,
            a
          ), wa(t);
          break;
        case 27:
          pu(t.stateNode);
        case 26:
        case 5:
          Bt(t, t.return), wa(t);
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      l = l.sibling;
    }
  }
  function It(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(
            u,
            n,
            a
          ), su(4, n);
          break;
        case 1:
          if (It(
            u,
            n,
            a
          ), e = n, u = e.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (v) {
              fl(e, e.return, v);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var i = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Us(f[u], i);
            } catch (v) {
              fl(e, e.return, v);
            }
          }
          a && c & 64 && Zo(n), ou(n, n.return);
          break;
        case 27:
          Ko(n);
        case 26:
        case 5:
          It(
            u,
            n,
            a
          ), a && e === null && c & 4 && Vo(n), ou(n, n.return);
          break;
        case 12:
          It(
            u,
            n,
            a
          );
          break;
        case 31:
          It(
            u,
            n,
            a
          ), a && c & 4 && ko(u, n);
          break;
        case 13:
          It(
            u,
            n,
            a
          ), a && c & 4 && Fo(u, n);
          break;
        case 22:
          n.memoizedState === null && It(
            u,
            n,
            a
          ), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          It(
            u,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ai(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && ke(a));
  }
  function _i(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ke(l));
  }
  function Ht(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ld(
          l,
          t,
          a,
          e
        ), t = t.sibling;
  }
  function ld(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          l,
          t,
          a,
          e
        ), u & 2048 && su(9, t);
        break;
      case 1:
        Ht(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        Ht(
          l,
          t,
          a,
          e
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ke(l)));
        break;
      case 12:
        if (u & 2048) {
          Ht(
            l,
            t,
            a,
            e
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, c = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              c,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            fl(t, t.return, f);
          }
        } else
          Ht(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        Ht(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        Ht(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ht(
          l,
          t,
          a,
          e
        ) : du(l, t) : n._visibility & 2 ? Ht(
          l,
          t,
          a,
          e
        ) : (n._visibility |= 2, Ee(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ai(c, t);
        break;
      case 24:
        Ht(
          l,
          t,
          a,
          e
        ), u & 2048 && _i(t.alternate, t);
        break;
      default:
        Ht(
          l,
          t,
          a,
          e
        );
    }
  }
  function Ee(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, c = t, i = a, f = e, v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ee(
            n,
            c,
            i,
            f,
            u
          ), su(8, c);
          break;
        case 23:
          break;
        case 22:
          var p = c.stateNode;
          c.memoizedState !== null ? p._visibility & 2 ? Ee(
            n,
            c,
            i,
            f,
            u
          ) : du(
            n,
            c
          ) : (p._visibility |= 2, Ee(
            n,
            c,
            i,
            f,
            u
          )), u && v & 2048 && Ai(
            c.alternate,
            c
          );
          break;
        case 24:
          Ee(
            n,
            c,
            i,
            f,
            u
          ), u && v & 2048 && _i(c.alternate, c);
          break;
        default:
          Ee(
            n,
            c,
            i,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function du(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, e = t, u = e.flags;
        switch (e.tag) {
          case 22:
            du(a, e), u & 2048 && Ai(
              e.alternate,
              e
            );
            break;
          case 24:
            du(a, e), u & 2048 && _i(e.alternate, e);
            break;
          default:
            du(a, e);
        }
        t = t.sibling;
      }
  }
  var mu = 8192;
  function ze(l, t, a) {
    if (l.subtreeFlags & mu)
      for (l = l.child; l !== null; )
        td(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function td(l, t, a) {
    switch (l.tag) {
      case 26:
        ze(
          l,
          t,
          a
        ), l.flags & mu && l.memoizedState !== null && Y0(
          a,
          Nt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ze(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var e = Nt;
        Nt = Bn(l.stateNode.containerInfo), ze(
          l,
          t,
          a
        ), Nt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = mu, mu = 16777216, ze(
          l,
          t,
          a
        ), mu = e) : ze(
          l,
          t,
          a
        ));
        break;
      default:
        ze(
          l,
          t,
          a
        );
    }
  }
  function ad(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function yu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Bl = e, ud(
            e,
            l
          );
        }
      ad(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ed(l), l = l.sibling;
  }
  function ed(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yu(l), l.flags & 2048 && ha(9, l, l.return);
        break;
      case 3:
        yu(l);
        break;
      case 12:
        yu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, En(l)) : yu(l);
        break;
      default:
        yu(l);
    }
  }
  function En(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Bl = e, ud(
            e,
            l
          );
        }
      ad(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, t, t.return), En(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, En(t));
          break;
        default:
          En(t);
      }
      l = l.sibling;
    }
  }
  function ud(l, t) {
    for (; Bl !== null; ) {
      var a = Bl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          ke(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Bl = e;
      else
        l: for (a = l; Bl !== null; ) {
          e = Bl;
          var u = e.sibling, n = e.return;
          if (Wo(e), e === a) {
            Bl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Bl = u;
            break l;
          }
          Bl = n;
        }
    }
  }
  var Fy = {
    getCacheForType: function(l) {
      var t = jl(_l), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return jl(_l).controller.signal;
    }
  }, Iy = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, yl = null, J = null, $ = 0, il = 0, yt = null, ra = !1, Te = !1, Mi = !1, Pt = 0, El = 0, ga = 0, Wa = 0, Oi = 0, vt = 0, Ae = 0, vu = null, et = null, Di = !1, zn = 0, nd = 0, Tn = 1 / 0, An = null, Sa = null, Hl = 0, pa = null, _e = null, la = 0, Ui = 0, Ni = null, cd = null, hu = 0, Hi = null;
  function ht() {
    return (ul & 2) !== 0 && $ !== 0 ? $ & -$ : b.T !== null ? Gi() : Ef();
  }
  function id() {
    if (vt === 0)
      if (($ & 536870912) === 0 || I) {
        var l = Hu;
        Hu <<= 1, (Hu & 3932160) === 0 && (Hu = 262144), vt = l;
      } else vt = 536870912;
    return l = dt.current, l !== null && (l.flags |= 32), vt;
  }
  function ut(l, t, a) {
    (l === yl && (il === 2 || il === 9) || l.cancelPendingCommit !== null) && (Me(l, 0), ba(
      l,
      $,
      vt,
      !1
    )), Ye(l, a), ((ul & 2) === 0 || l !== yl) && (l === yl && ((ul & 2) === 0 && (Wa |= a), El === 4 && ba(
      l,
      $,
      vt,
      !1
    )), qt(l));
  }
  function fd(l, t, a) {
    if ((ul & 6) !== 0) throw Error(m(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || qe(l, t), u = e ? t0(l, t) : Ri(l, t, !0), n = e;
    do {
      if (u === 0) {
        Te && !e && ba(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !Py(a)) {
          u = Ri(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              u = vu;
              var f = i.current.memoizedState.isDehydrated;
              if (f && (Me(i, c).flags |= 256), c = Ri(
                i,
                c,
                !1
              ), c !== 2) {
                if (Mi && !f) {
                  i.errorRecoveryDisabledLanes |= n, Wa |= n, u = 4;
                  break l;
                }
                n = et, et = u, n !== null && (et === null ? et = n : et.push.apply(
                  et,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Me(l, 0), ba(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ba(
                e,
                t,
                vt,
                !ra
              );
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (u = zn + 300 - ct(), 10 < u)) {
            if (ba(
              e,
              t,
              vt,
              !ra
            ), Ru(e, 0, !0) !== 0) break l;
            la = t, e.timeoutHandle = Qd(
              sd.bind(
                null,
                e,
                a,
                et,
                An,
                Di,
                t,
                vt,
                Wa,
                Ae,
                ra,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          sd(
            e,
            a,
            et,
            An,
            Di,
            t,
            vt,
            Wa,
            Ae,
            ra,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qt(l);
  }
  function sd(l, t, a, e, u, n, c, i, f, v, p, z, h, r) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, td(
        t,
        n,
        z
      );
      var U = (n & 62914560) === n ? zn - ct() : (n & 4194048) === n ? nd - ct() : 0;
      if (U = G0(
        z,
        U
      ), U !== null) {
        la = n, l.cancelPendingCommit = U(
          gd.bind(
            null,
            l,
            t,
            n,
            a,
            e,
            u,
            c,
            i,
            f,
            p,
            z,
            null,
            h,
            r
          )
        ), ba(l, n, c, !v);
        return;
      }
    }
    gd(
      l,
      t,
      n,
      a,
      e,
      u,
      c,
      i,
      f
    );
  }
  function Py(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!st(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ba(l, t, a, e) {
    t &= ~Oi, t &= ~Wa, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - ft(u), c = 1 << n;
      e[n] = -1, u &= ~c;
    }
    a !== 0 && Sf(l, a, t);
  }
  function _n() {
    return (ul & 6) === 0 ? (ru(0), !1) : !0;
  }
  function Ci() {
    if (J !== null) {
      if (il === 0)
        var l = J.return;
      else
        l = J, Vt = Qa = null, Wc(l), re = null, Ie = 0, l = J;
      for (; l !== null; )
        jo(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function Me(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, p0(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), la = 0, Ci(), yl = l, J = a = Zt(l.current, null), $ = t, il = 0, yt = null, ra = !1, Te = qe(l, t), Mi = !1, Ae = vt = Oi = Wa = ga = El = 0, et = vu = null, Di = !1, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - ft(e), n = 1 << u;
        t |= l[u], e &= ~n;
      }
    return Pt = t, Ku(), a;
  }
  function od(l, t) {
    j = null, b.H = cu, t === he || t === Pu ? (t = _s(), il = 3) : t === Yc ? (t = _s(), il = 4) : il = t === oi ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, yt = t, J === null && (El = 1, vn(
      l,
      pt(t, l.current)
    ));
  }
  function dd() {
    var l = dt.current;
    return l === null ? !0 : ($ & 4194048) === $ ? Tt === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? l === Tt : !1;
  }
  function md() {
    var l = b.H;
    return b.H = cu, l === null ? cu : l;
  }
  function yd() {
    var l = b.A;
    return b.A = Fy, l;
  }
  function Mn() {
    El = 4, ra || ($ & 4194048) !== $ && dt.current !== null || (Te = !0), (ga & 134217727) === 0 && (Wa & 134217727) === 0 || yl === null || ba(
      yl,
      $,
      vt,
      !1
    );
  }
  function Ri(l, t, a) {
    var e = ul;
    ul |= 2;
    var u = md(), n = yd();
    (yl !== l || $ !== t) && (An = null, Me(l, t)), t = !1;
    var c = El;
    l: do
      try {
        if (il !== 0 && J !== null) {
          var i = J, f = yt;
          switch (il) {
            case 8:
              Ci(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var v = il;
              if (il = 0, yt = null, Oe(l, i, f, v), a && Te) {
                c = 0;
                break l;
              }
              break;
            default:
              v = il, il = 0, yt = null, Oe(l, i, f, v);
          }
        }
        l0(), c = El;
        break;
      } catch (p) {
        od(l, p);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Vt = Qa = null, ul = e, b.H = u, b.A = n, J === null && (yl = null, $ = 0, Ku()), c;
  }
  function l0() {
    for (; J !== null; ) vd(J);
  }
  function t0(l, t) {
    var a = ul;
    ul |= 2;
    var e = md(), u = yd();
    yl !== l || $ !== t ? (An = null, Tn = ct() + 500, Me(l, t)) : Te = qe(
      l,
      t
    );
    l: do
      try {
        if (il !== 0 && J !== null) {
          t = J;
          var n = yt;
          t: switch (il) {
            case 1:
              il = 0, yt = null, Oe(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ts(n)) {
                il = 0, yt = null, hd(t);
                break;
              }
              t = function() {
                il !== 2 && il !== 9 || yl !== l || (il = 7), qt(l);
              }, n.then(t, t);
              break l;
            case 3:
              il = 7;
              break l;
            case 4:
              il = 5;
              break l;
            case 7:
              Ts(n) ? (il = 0, yt = null, hd(t)) : (il = 0, yt = null, Oe(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var i = J;
                  if (c ? lm(c) : i.stateNode.complete) {
                    il = 0, yt = null;
                    var f = i.sibling;
                    if (f !== null) J = f;
                    else {
                      var v = i.return;
                      v !== null ? (J = v, On(v)) : J = null;
                    }
                    break t;
                  }
              }
              il = 0, yt = null, Oe(l, t, n, 5);
              break;
            case 6:
              il = 0, yt = null, Oe(l, t, n, 6);
              break;
            case 8:
              Ci(), El = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        a0();
        break;
      } catch (p) {
        od(l, p);
      }
    while (!0);
    return Vt = Qa = null, b.H = e, b.A = u, ul = a, J !== null ? 0 : (yl = null, $ = 0, Ku(), El);
  }
  function a0() {
    for (; J !== null && !_m(); )
      vd(J);
  }
  function vd(l) {
    var t = Xo(l.alternate, l, Pt);
    l.memoizedProps = l.pendingProps, t === null ? On(l) : J = t;
  }
  function hd(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Co(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          $
        );
        break;
      case 11:
        t = Co(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          $
        );
        break;
      case 5:
        Wc(t);
      default:
        jo(a, t), t = J = ms(t, Pt), t = Xo(a, t, Pt);
    }
    l.memoizedProps = l.pendingProps, t === null ? On(l) : J = t;
  }
  function Oe(l, t, a, e) {
    Vt = Qa = null, Wc(t), re = null, Ie = 0;
    var u = t.return;
    try {
      if (Ly(
        l,
        u,
        t,
        a,
        $
      )) {
        El = 1, vn(
          l,
          pt(a, l.current)
        ), J = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw J = u, n;
      El = 1, vn(
        l,
        pt(a, l.current)
      ), J = null;
      return;
    }
    t.flags & 32768 ? (I || e === 1 ? l = !0 : Te || ($ & 536870912) !== 0 ? l = !1 : (ra = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = dt.current, e !== null && e.tag === 13 && (e.flags |= 16384))), rd(t, l)) : On(t);
  }
  function On(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        rd(
          t,
          ra
        );
        return;
      }
      l = t.return;
      var a = wy(
        t.alternate,
        t,
        Pt
      );
      if (a !== null) {
        J = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    El === 0 && (El = 5);
  }
  function rd(l, t) {
    do {
      var a = Wy(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, J = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = a;
    } while (l !== null);
    El = 6, J = null;
  }
  function gd(l, t, a, e, u, n, c, i, f) {
    l.cancelPendingCommit = null;
    do
      Dn();
    while (Hl !== 0);
    if ((ul & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= Ec, qm(
        l,
        a,
        n,
        c,
        i,
        f
      ), l === yl && (J = yl = null, $ = 0), _e = t, pa = l, la = a, Ui = n, Ni = u, cd = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, c0(Uu, function() {
        return zd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = b.T, b.T = null, u = A.p, A.p = 2, c = ul, ul |= 4;
        try {
          $y(l, t, a);
        } finally {
          ul = c, A.p = u, b.T = e;
        }
      }
      Hl = 1, Sd(), pd(), bd();
    }
  }
  function Sd() {
    if (Hl === 1) {
      Hl = 0;
      var l = pa, t = _e, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null;
        var e = A.p;
        A.p = 2;
        var u = ul;
        ul |= 4;
        try {
          Io(t, l);
          var n = Ki, c = es(l.containerInfo), i = n.focusedElem, f = n.selectionRange;
          if (c !== i && i && i.ownerDocument && as(
            i.ownerDocument.documentElement,
            i
          )) {
            if (f !== null && rc(i)) {
              var v = f.start, p = f.end;
              if (p === void 0 && (p = v), "selectionStart" in i)
                i.selectionStart = v, i.selectionEnd = Math.min(
                  p,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, h = z && z.defaultView || window;
                if (h.getSelection) {
                  var r = h.getSelection(), U = i.textContent.length, q = Math.min(f.start, U), ml = f.end === void 0 ? q : Math.min(f.end, U);
                  !r.extend && q > ml && (c = ml, ml = q, q = c);
                  var d = ts(
                    i,
                    q
                  ), s = ts(
                    i,
                    ml
                  );
                  if (d && s && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                    var y = z.createRange();
                    y.setStart(d.node, d.offset), r.removeAllRanges(), q > ml ? (r.addRange(y), r.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), r.addRange(y));
                  }
                }
              }
            }
            for (z = [], r = i; r = r.parentNode; )
              r.nodeType === 1 && z.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < z.length; i++) {
              var E = z[i];
              E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
            }
          }
          jn = !!Li, Ki = Li = null;
        } finally {
          ul = u, A.p = e, b.T = a;
        }
      }
      l.current = t, Hl = 2;
    }
  }
  function pd() {
    if (Hl === 2) {
      Hl = 0;
      var l = pa, t = _e, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = b.T, b.T = null;
        var e = A.p;
        A.p = 2;
        var u = ul;
        ul |= 4;
        try {
          wo(l, t.alternate, t);
        } finally {
          ul = u, A.p = e, b.T = a;
        }
      }
      Hl = 3;
    }
  }
  function bd() {
    if (Hl === 4 || Hl === 3) {
      Hl = 0, Mm();
      var l = pa, t = _e, a = la, e = cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Hl = 5 : (Hl = 0, _e = pa = null, Ed(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Sa = null), Fn(a), t = t.stateNode, it && typeof it.onCommitFiberRoot == "function")
        try {
          it.onCommitFiberRoot(
            Be,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        t = b.T, u = A.p, A.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          b.T = t, A.p = u;
        }
      }
      (la & 3) !== 0 && Dn(), qt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Hi ? hu++ : (hu = 0, Hi = l) : hu = 0, ru(0);
    }
  }
  function Ed(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ke(t)));
  }
  function Dn() {
    return Sd(), pd(), bd(), zd();
  }
  function zd() {
    if (Hl !== 5) return !1;
    var l = pa, t = Ui;
    Ui = 0;
    var a = Fn(la), e = b.T, u = A.p;
    try {
      A.p = 32 > a ? 32 : a, b.T = null, a = Ni, Ni = null;
      var n = pa, c = la;
      if (Hl = 0, _e = pa = null, la = 0, (ul & 6) !== 0) throw Error(m(331));
      var i = ul;
      if (ul |= 4, ed(n.current), ld(
        n,
        n.current,
        c,
        a
      ), ul = i, ru(0, !1), it && typeof it.onPostCommitFiberRoot == "function")
        try {
          it.onPostCommitFiberRoot(Be, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = u, b.T = e, Ed(l, t);
    }
  }
  function Td(l, t, a) {
    t = pt(a, t), t = si(l.stateNode, t, 2), l = ma(l, t, 2), l !== null && (Ye(l, 2), qt(l));
  }
  function fl(l, t, a) {
    if (l.tag === 3)
      Td(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Td(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (Sa === null || !Sa.has(e))) {
            l = pt(a, l), a = Ao(2), e = ma(t, a, 2), e !== null && (_o(
              a,
              e,
              t,
              l
            ), Ye(e, 2), qt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bi(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Iy();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Mi = !0, u.add(a), l = e0.bind(null, l, t, a), t.then(l, l));
  }
  function e0(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && ($ & a) === a && (El === 4 || El === 3 && ($ & 62914560) === $ && 300 > ct() - zn ? (ul & 2) === 0 && Me(l, 0) : Oi |= a, Ae === $ && (Ae = 0)), qt(l);
  }
  function Ad(l, t) {
    t === 0 && (t = gf()), l = Ya(l, t), l !== null && (Ye(l, t), qt(l));
  }
  function u0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Ad(l, a);
  }
  function n0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    e !== null && e.delete(t), Ad(l, a);
  }
  function c0(l, t) {
    return wn(l, t);
  }
  var Un = null, De = null, qi = !1, Nn = !1, Yi = !1, Ea = 0;
  function qt(l) {
    l !== De && l.next === null && (De === null ? Un = De = l : De = De.next = l), Nn = !0, qi || (qi = !0, f0());
  }
  function ru(l, t) {
    if (!Yi && Nn) {
      Yi = !0;
      do
        for (var a = !1, e = Un; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes, i = e.pingedLanes;
              n = (1 << 31 - ft(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Dd(e, n));
          } else
            n = $, n = Ru(
              e,
              e === yl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || qe(e, n) || (a = !0, Dd(e, n));
          e = e.next;
        }
      while (a);
      Yi = !1;
    }
  }
  function i0() {
    _d();
  }
  function _d() {
    Nn = qi = !1;
    var l = 0;
    Ea !== 0 && S0() && (l = Ea);
    for (var t = ct(), a = null, e = Un; e !== null; ) {
      var u = e.next, n = Md(e, t);
      n === 0 ? (e.next = null, a === null ? Un = u : a.next = u, u === null && (De = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (Nn = !0)), e = u;
    }
    Hl !== 0 && Hl !== 5 || ru(l), Ea !== 0 && (Ea = 0);
  }
  function Md(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - ft(n), i = 1 << c, f = u[c];
      f === -1 ? ((i & a) === 0 || (i & e) !== 0) && (u[c] = Bm(i, t)) : f <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = yl, a = $, a = Ru(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (il === 2 || il === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Wn(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || qe(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Wn(e), Fn(a)) {
        case 2:
        case 8:
          a = hf;
          break;
        case 32:
          a = Uu;
          break;
        case 268435456:
          a = rf;
          break;
        default:
          a = Uu;
      }
      return e = Od.bind(null, l), a = wn(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Wn(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Od(l, t) {
    if (Hl !== 0 && Hl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Dn() && l.callbackNode !== a)
      return null;
    var e = $;
    return e = Ru(
      l,
      l === yl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (fd(l, e, t), Md(l, ct()), l.callbackNode != null && l.callbackNode === a ? Od.bind(null, l) : null);
  }
  function Dd(l, t) {
    if (Dn()) return null;
    fd(l, t, !0);
  }
  function f0() {
    b0(function() {
      (ul & 6) !== 0 ? wn(
        vf,
        i0
      ) : _d();
    });
  }
  function Gi() {
    if (Ea === 0) {
      var l = ye;
      l === 0 && (l = Nu, Nu <<= 1, (Nu & 261888) === 0 && (Nu = 256)), Ea = l;
    }
    return Ea;
  }
  function Ud(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Gu("" + l);
  }
  function Nd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function s0(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Ud(
        (u[Il] || null).action
      ), c = e.submitter;
      c && (t = (t = c[Il] || null) ? Ud(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var i = new Zu(
        "action",
        "action",
        null,
        e,
        u
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (Ea !== 0) {
                  var f = c ? Nd(u, c) : new FormData(u);
                  ei(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), f = c ? Nd(u, c) : new FormData(u), ei(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Xi = 0; Xi < bc.length; Xi++) {
    var Qi = bc[Xi], o0 = Qi.toLowerCase(), d0 = Qi[0].toUpperCase() + Qi.slice(1);
    Ut(
      o0,
      "on" + d0
    );
  }
  Ut(cs, "onAnimationEnd"), Ut(is, "onAnimationIteration"), Ut(fs, "onAnimationStart"), Ut("dblclick", "onDoubleClick"), Ut("focusin", "onFocus"), Ut("focusout", "onBlur"), Ut(Oy, "onTransitionRun"), Ut(Dy, "onTransitionStart"), Ut(Uy, "onTransitionCancel"), Ut(ss, "onTransitionEnd"), Pa("onMouseEnter", ["mouseout", "mouseover"]), Pa("onMouseLeave", ["mouseout", "mouseover"]), Pa("onPointerEnter", ["pointerout", "pointerover"]), Pa("onPointerLeave", ["pointerout", "pointerover"]), Ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), m0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu)
  );
  function Hd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c], f = i.instance, v = i.currentTarget;
            if (i = i.listener, f !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (p) {
              Lu(p);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (c = 0; c < e.length; c++) {
            if (i = e[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (p) {
              Lu(p);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function w(l, t) {
    var a = t[In];
    a === void 0 && (a = t[In] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Cd(t, l, 2, !1), a.add(e));
  }
  function ji(l, t, a) {
    var e = 0;
    t && (e |= 4), Cd(
      a,
      l,
      e,
      t
    );
  }
  var Hn = "_reactListening" + Math.random().toString(36).slice(2);
  function Zi(l) {
    if (!l[Hn]) {
      l[Hn] = !0, Af.forEach(function(a) {
        a !== "selectionchange" && (m0.has(a) || ji(a, !1, l), ji(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hn] || (t[Hn] = !0, ji("selectionchange", !1, t));
    }
  }
  function Cd(l, t, a, e) {
    switch (im(t)) {
      case 2:
        var u = j0;
        break;
      case 8:
        u = Z0;
        break;
      default:
        u = af;
    }
    a = u.bind(
      null,
      t,
      a,
      l
    ), u = void 0, !ic || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
      passive: u
    }) : l.addEventListener(t, a, !1);
  }
  function xi(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var i = e.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (c = ka(i), c === null) return;
            if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              e = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Yf(function() {
      var v = n, p = nc(a), z = [];
      l: {
        var h = os.get(l);
        if (h !== void 0) {
          var r = Zu, U = l;
          switch (l) {
            case "keypress":
              if (Qu(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = ny;
              break;
            case "focusin":
              U = "focus", r = dc;
              break;
            case "focusout":
              U = "blur", r = dc;
              break;
            case "beforeblur":
            case "afterblur":
              r = dc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = fy;
              break;
            case cs:
            case is:
            case fs:
              r = km;
              break;
            case ss:
              r = oy;
              break;
            case "scroll":
            case "scrollend":
              r = Km;
              break;
            case "wheel":
              r = my;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Zf;
              break;
            case "toggle":
            case "beforetoggle":
              r = vy;
          }
          var q = (t & 4) !== 0, ml = !q && (l === "scroll" || l === "scrollend"), d = q ? h !== null ? h + "Capture" : null : h;
          q = [];
          for (var s = v, y; s !== null; ) {
            var E = s;
            if (y = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || y === null || d === null || (E = Qe(s, d), E != null && q.push(
              Su(s, E, y)
            )), ml) break;
            s = s.return;
          }
          0 < q.length && (h = new r(
            h,
            U,
            null,
            a,
            p
          ), z.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && a !== uc && (U = a.relatedTarget || a.fromElement) && (ka(U) || U[$a]))
            break l;
          if ((r || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (U = a.relatedTarget || a.toElement, r = v, U = U ? ka(U) : null, U !== null && (ml = W(U), q = U.tag, U !== ml || q !== 5 && q !== 27 && q !== 6) && (U = null)) : (r = null, U = v), r !== U)) {
            if (q = Qf, E = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (q = Zf, E = "onPointerLeave", d = "onPointerEnter", s = "pointer"), ml = r == null ? h : Xe(r), y = U == null ? h : Xe(U), h = new q(
              E,
              s + "leave",
              r,
              a,
              p
            ), h.target = ml, h.relatedTarget = y, E = null, ka(p) === v && (q = new q(
              d,
              s + "enter",
              U,
              a,
              p
            ), q.target = y, q.relatedTarget = ml, E = q), ml = E, r && U)
              t: {
                for (q = y0, d = r, s = U, y = 0, E = d; E; E = q(E))
                  y++;
                E = 0;
                for (var R = s; R; R = q(R))
                  E++;
                for (; 0 < y - E; )
                  d = q(d), y--;
                for (; 0 < E - y; )
                  s = q(s), E--;
                for (; y--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    q = d;
                    break t;
                  }
                  d = q(d), s = q(s);
                }
                q = null;
              }
            else q = null;
            r !== null && Rd(
              z,
              h,
              r,
              q,
              !1
            ), U !== null && ml !== null && Rd(
              z,
              ml,
              U,
              q,
              !0
            );
          }
        }
        l: {
          if (h = v ? Xe(v) : window, r = h.nodeName && h.nodeName.toLowerCase(), r === "select" || r === "input" && h.type === "file")
            var tl = $f;
          else if (wf(h))
            if (kf)
              tl = Ay;
            else {
              tl = zy;
              var H = Ey;
            }
          else
            r = h.nodeName, !r || r.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && ec(v.elementType) && (tl = $f) : tl = Ty;
          if (tl && (tl = tl(l, v))) {
            Wf(
              z,
              tl,
              a,
              p
            );
            break l;
          }
          H && H(l, h, v), l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && ac(h, "number", h.value);
        }
        switch (H = v ? Xe(v) : window, l) {
          case "focusin":
            (wf(H) || H.contentEditable === "true") && (ne = H, gc = v, we = null);
            break;
          case "focusout":
            we = gc = ne = null;
            break;
          case "mousedown":
            Sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sc = !1, us(z, a, p);
            break;
          case "selectionchange":
            if (My) break;
          case "keydown":
          case "keyup":
            us(z, a, p);
        }
        var Z;
        if (yc)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          ue ? Kf(l, a) && (k = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");
        k && (xf && a.locale !== "ko" && (ue || k !== "onCompositionStart" ? k === "onCompositionEnd" && ue && (Z = Gf()) : (na = p, fc = "value" in na ? na.value : na.textContent, ue = !0)), H = Cn(v, k), 0 < H.length && (k = new jf(
          k,
          l,
          null,
          a,
          p
        ), z.push({ event: k, listeners: H }), Z ? k.data = Z : (Z = Jf(a), Z !== null && (k.data = Z)))), (Z = ry ? gy(l, a) : Sy(l, a)) && (k = Cn(v, "onBeforeInput"), 0 < k.length && (H = new jf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          p
        ), z.push({
          event: H,
          listeners: k
        }), H.data = Z)), s0(
          z,
          l,
          v,
          a,
          p
        );
      }
      Hd(z, t);
    });
  }
  function Su(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Cn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Qe(l, a), u != null && e.unshift(
        Su(l, u, n)
      ), u = Qe(l, t), u != null && e.push(
        Su(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function y0(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rd(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var i = a, f = i.alternate, v = i.stateNode;
      if (i = i.tag, f !== null && f === e) break;
      i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, u ? (v = Qe(a, n), v != null && c.unshift(
        Su(a, v, f)
      )) : u || (v = Qe(a, n), v != null && c.push(
        Su(a, v, f)
      ))), a = a.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var v0 = /\r\n?/g, h0 = /\u0000|\uFFFD/g;
  function Bd(l) {
    return (typeof l == "string" ? l : "" + l).replace(v0, `
`).replace(h0, "");
  }
  function qd(l, t) {
    return t = Bd(t), Bd(l) === t;
  }
  function dl(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || te(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && te(l, "" + e);
        break;
      case "className":
        qu(l, "class", e);
        break;
      case "tabIndex":
        qu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qu(l, a, e);
        break;
      case "style":
        Bf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          qu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Gu("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && dl(l, t, "name", u.name, u, null), dl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), dl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), dl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (dl(l, t, "encType", u.encType, u, null), dl(l, t, "method", u.method, u, null), dl(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Gu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Qt);
        break;
      case "onScroll":
        e != null && w("scroll", l);
        break;
      case "onScrollEnd":
        e != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(m(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Gu("" + e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        w("beforetoggle", l), w("toggle", l), Bu(l, "popover", e);
        break;
      case "xlinkActuate":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        Xt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        Xt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        Bu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Vm.get(a) || a, Bu(l, a, e));
    }
  }
  function Vi(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Bf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(m(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(m(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? te(l, e) : (typeof e == "number" || typeof e == "bigint") && te(l, "" + e);
        break;
      case "onScroll":
        e != null && w("scroll", l);
        break;
      case "onScrollEnd":
        e != null && w("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_f.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Il] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Bu(l, a, e);
          }
    }
  }
  function xl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        w("error", l), w("load", l);
        var e = !1, u = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  dl(l, t, n, c, a, null);
              }
          }
        u && dl(l, t, "srcSet", a.srcSet, a, null), e && dl(l, t, "src", a.src, a, null);
        return;
      case "input":
        w("invalid", l);
        var i = n = c = u = null, f = null, v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var p = a[e];
            if (p != null)
              switch (e) {
                case "name":
                  u = p;
                  break;
                case "type":
                  c = p;
                  break;
                case "checked":
                  f = p;
                  break;
                case "defaultChecked":
                  v = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  i = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(m(137, t));
                  break;
                default:
                  dl(l, t, e, p, a, null);
              }
          }
        Nf(
          l,
          n,
          i,
          f,
          v,
          c,
          u,
          !1
        );
        return;
      case "select":
        w("invalid", l), e = c = n = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (i = a[u], i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                e = i;
              default:
                dl(l, t, u, i, a, null);
            }
        t = n, a = c, l.multiple = !!e, t != null ? le(l, !!e, t, !1) : a != null && le(l, !!e, a, !0);
        return;
      case "textarea":
        w("invalid", l), n = u = e = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (i = a[c], i != null))
            switch (c) {
              case "value":
                e = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(m(91));
                break;
              default:
                dl(l, t, c, i, a, null);
            }
        Cf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) && (e = a[f], e != null) && (f === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : dl(l, t, f, e, a, null));
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < gu.length; e++)
          w(gu[e], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && (e = a[v], e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                dl(l, t, v, e, a, null);
            }
        return;
      default:
        if (ec(t)) {
          for (p in a)
            a.hasOwnProperty(p) && (e = a[p], e !== void 0 && Vi(
              l,
              t,
              p,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && (e = a[i], e != null && dl(l, t, i, e, a, null));
  }
  function r0(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, c = null, i = null, f = null, v = null, p = null;
        for (r in a) {
          var z = a[r];
          if (a.hasOwnProperty(r) && z != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                e.hasOwnProperty(r) || dl(l, t, r, null, e, z);
            }
        }
        for (var h in e) {
          var r = e[h];
          if (z = a[h], e.hasOwnProperty(h) && (r != null || z != null))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                u = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                p = r;
                break;
              case "value":
                c = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(m(137, t));
                break;
              default:
                r !== z && dl(
                  l,
                  t,
                  h,
                  r,
                  e,
                  z
                );
            }
        }
        tc(
          l,
          c,
          i,
          f,
          v,
          p,
          n,
          u
        );
        return;
      case "select":
        r = c = i = h = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = f;
              default:
                e.hasOwnProperty(n) || dl(
                  l,
                  t,
                  n,
                  null,
                  e,
                  f
                );
            }
        for (u in e)
          if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && dl(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = i, a = c, e = r, h != null ? le(l, !!a, h, !1) : !!e != !!a && (t != null ? le(l, !!a, t, !0) : le(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        r = h = null;
        for (i in a)
          if (u = a[i], a.hasOwnProperty(i) && u != null && !e.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                dl(l, t, i, null, e, u);
            }
        for (c in e)
          if (u = e[c], n = a[c], e.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(m(91));
                break;
              default:
                u !== n && dl(l, t, c, u, e, n);
            }
        Hf(l, h, r);
        return;
      case "option":
        for (var U in a)
          h = a[U], a.hasOwnProperty(U) && h != null && !e.hasOwnProperty(U) && (U === "selected" ? l.selected = !1 : dl(
            l,
            t,
            U,
            null,
            e,
            h
          ));
        for (f in e)
          h = e[f], r = a[f], e.hasOwnProperty(f) && h !== r && (h != null || r != null) && (f === "selected" ? l.selected = h && typeof h != "function" && typeof h != "symbol" : dl(
            l,
            t,
            f,
            h,
            e,
            r
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          h = a[q], a.hasOwnProperty(q) && h != null && !e.hasOwnProperty(q) && dl(l, t, q, null, e, h);
        for (v in e)
          if (h = e[v], r = a[v], e.hasOwnProperty(v) && h !== r && (h != null || r != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                dl(
                  l,
                  t,
                  v,
                  h,
                  e,
                  r
                );
            }
        return;
      default:
        if (ec(t)) {
          for (var ml in a)
            h = a[ml], a.hasOwnProperty(ml) && h !== void 0 && !e.hasOwnProperty(ml) && Vi(
              l,
              t,
              ml,
              void 0,
              e,
              h
            );
          for (p in e)
            h = e[p], r = a[p], !e.hasOwnProperty(p) || h === r || h === void 0 && r === void 0 || Vi(
              l,
              t,
              p,
              h,
              e,
              r
            );
          return;
        }
    }
    for (var d in a)
      h = a[d], a.hasOwnProperty(d) && h != null && !e.hasOwnProperty(d) && dl(l, t, d, null, e, h);
    for (z in e)
      h = e[z], r = a[z], !e.hasOwnProperty(z) || h === r || h == null && r == null || dl(l, t, z, h, e, r);
  }
  function Yd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function g0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && Yd(c)) {
          for (c = 0, i = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], v = f.startTime;
            if (v > i) break;
            var p = f.transferSize, z = f.initiatorType;
            p && Yd(z) && (f = f.responseEnd, c += p * (f < i ? 1 : (i - v) / (f - v)));
          }
          if (--e, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Li = null, Ki = null;
  function Rn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ji(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var wi = null;
  function S0() {
    var l = window.event;
    return l && l.type === "popstate" ? l === wi ? !1 : (wi = l, !0) : (wi = null, !1);
  }
  var Qd = typeof setTimeout == "function" ? setTimeout : void 0, p0 = typeof clearTimeout == "function" ? clearTimeout : void 0, jd = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jd < "u" ? function(l) {
    return jd.resolve(null).then(l).catch(E0);
  } : Qd;
  function E0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function za(l) {
    return l === "head";
  }
  function Zd(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (e === 0) {
            l.removeChild(u), Ce(t);
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          e++;
        else if (a === "html")
          pu(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, pu(a);
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[Ge] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = c;
          }
        } else
          a === "body" && pu(l.ownerDocument.body);
      a = u;
    } while (a);
    Ce(t);
  }
  function xd(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function Wi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wi(a), Pn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function z0(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[Ge])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function T0(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function $i(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ki(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function A0(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Fi = null;
  function Ld(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return At(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Kd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jd(l, t, a) {
    switch (t = Rn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function pu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Pn(l);
  }
  var _t = /* @__PURE__ */ new Map(), wd = /* @__PURE__ */ new Set();
  function Bn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ta = A.d;
  A.d = {
    f: _0,
    r: M0,
    D: O0,
    C: D0,
    L: U0,
    m: N0,
    X: C0,
    S: H0,
    M: R0
  };
  function _0() {
    var l = ta.f(), t = _n();
    return l || t;
  }
  function M0(l) {
    var t = Fa(l);
    t !== null && t.tag === 5 && t.type === "form" ? so(t) : ta.r(l);
  }
  var Ue = typeof document > "u" ? null : document;
  function Wd(l, t, a) {
    var e = Ue;
    if (e && typeof t == "string" && t) {
      var u = gt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), wd.has(u) || (wd.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), xl(t, "link", l), Rl(t), e.head.appendChild(t)));
    }
  }
  function O0(l) {
    ta.D(l), Wd("dns-prefetch", l, null);
  }
  function D0(l, t) {
    ta.C(l, t), Wd("preconnect", l, t);
  }
  function U0(l, t, a) {
    ta.L(l, t, a);
    var e = Ue;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + gt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + gt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + gt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ne(l);
          break;
        case "script":
          n = He(l);
      }
      _t.has(n) || (l = C(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), _t.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(bu(n)) || t === "script" && e.querySelector(Eu(n)) || (t = e.createElement("link"), xl(t, "link", l), Rl(t), e.head.appendChild(t)));
    }
  }
  function N0(l, t) {
    ta.m(l, t);
    var a = Ue;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + gt(e) + '"][href="' + gt(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = He(l);
      }
      if (!_t.has(n) && (l = C({ rel: "modulepreload", href: l }, t), _t.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Eu(n)))
              return;
        }
        e = a.createElement("link"), xl(e, "link", l), Rl(e), a.head.appendChild(e);
      }
    }
  }
  function H0(l, t, a) {
    ta.S(l, t, a);
    var e = Ue;
    if (e && l) {
      var u = Ia(e).hoistableStyles, n = Ne(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = e.querySelector(
          bu(n)
        ))
          i.loading = 5;
        else {
          l = C(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = _t.get(n)) && Ii(l, a);
          var f = c = e.createElement("link");
          Rl(f), xl(f, "link", l), f._p = new Promise(function(v, p) {
            f.onload = v, f.onerror = p;
          }), f.addEventListener("load", function() {
            i.loading |= 1;
          }), f.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, qn(c, t, e);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: i
        }, u.set(n, c);
      }
    }
  }
  function C0(l, t) {
    ta.X(l, t);
    var a = Ue;
    if (a && l) {
      var e = Ia(a).hoistableScripts, u = He(l), n = e.get(u);
      n || (n = a.querySelector(Eu(u)), n || (l = C({ src: l, async: !0 }, t), (t = _t.get(u)) && Pi(l, t), n = a.createElement("script"), Rl(n), xl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function R0(l, t) {
    ta.M(l, t);
    var a = Ue;
    if (a && l) {
      var e = Ia(a).hoistableScripts, u = He(l), n = e.get(u);
      n || (n = a.querySelector(Eu(u)), n || (l = C({ src: l, async: !0, type: "module" }, t), (t = _t.get(u)) && Pi(l, t), n = a.createElement("script"), Rl(n), xl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function $d(l, t, a, e) {
    var u = (u = V.current) ? Bn(u) : null;
    if (!u) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ne(a.href), a = Ia(
          u
        ).hoistableStyles, e = a.get(t), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Ne(a.href);
          var n = Ia(
            u
          ).hoistableStyles, c = n.get(l);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = u.querySelector(
            bu(l)
          )) && !n._p && (c.instance = n, c.state.loading = 5), _t.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, _t.set(l, a), n || B0(
            u,
            l,
            a,
            c.state
          ))), t && e === null)
            throw Error(m(528, ""));
          return c;
        }
        if (t && e !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = He(a), a = Ia(
          u
        ).hoistableScripts, e = a.get(t), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Ne(l) {
    return 'href="' + gt(l) + '"';
  }
  function bu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function kd(l) {
    return C({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function B0(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), xl(t, "link", a), Rl(t), l.head.appendChild(t));
  }
  function He(l) {
    return '[src="' + gt(l) + '"]';
  }
  function Eu(l) {
    return "script[async]" + l;
  }
  function Fd(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + gt(a.href) + '"]'
          );
          if (e)
            return t.instance = e, Rl(e), e;
          var u = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Rl(e), xl(e, "style", u), qn(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = Ne(a.href);
          var n = l.querySelector(
            bu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Rl(n), n;
          e = kd(a), (u = _t.get(u)) && Ii(e, u), n = (l.ownerDocument || l).createElement("link"), Rl(n);
          var c = n;
          return c._p = new Promise(function(i, f) {
            c.onload = i, c.onerror = f;
          }), xl(n, "link", e), t.state.loading |= 4, qn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = He(a.src), (u = l.querySelector(
            Eu(n)
          )) ? (t.instance = u, Rl(u), u) : (e = a, (u = _t.get(n)) && (e = C({}, a), Pi(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Rl(u), xl(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, qn(e, a.precedence, l));
    return t.instance;
  }
  function qn(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, c = 0; c < e.length; c++) {
      var i = e[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Ii(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Pi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Yn = null;
  function Id(l, t, a) {
    if (Yn === null) {
      var e = /* @__PURE__ */ new Map(), u = Yn = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else
      u = Yn, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ge] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function Pd(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function q0(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function lm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Y0(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ne(e.href), n = t.querySelector(
          bu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Gn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Rl(n);
          return;
        }
        n = t.ownerDocument || t, e = kd(e), (u = _t.get(u)) && Ii(e, u), n = n.createElement("link"), Rl(n);
        var c = n;
        c._p = new Promise(function(i, f) {
          c.onload = i, c.onerror = f;
        }), xl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Gn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var lf = 0;
  function G0(l, t) {
    return l.stylesheets && l.count === 0 && Qn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Qn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && lf === 0 && (lf = 62500 * g0());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Qn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > lf ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Gn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Xn = null;
  function Qn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Xn = /* @__PURE__ */ new Map(), t.forEach(X0, l), Xn = null, Gn.call(l));
  }
  function X0(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Xn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Xn.set(l, a);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), e = c);
        }
        e && a.set(null, e);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = a.get(c) || e, n === e && a.set(null, u), a.set(c, u), this.count++, e = Gn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var zu = {
    $$typeof: Al,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function Q0(l, t, a, e, u, n, c, i, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $n(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $n(0), this.hiddenUpdates = $n(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tm(l, t, a, e, u, n, c, i, f, v, p, z) {
    return l = new Q0(
      l,
      t,
      a,
      c,
      f,
      v,
      p,
      z,
      i
    ), t = 1, n === !0 && (t |= 24), n = ot(3, null, null, t), l.current = n, n.stateNode = l, t = Rc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Gc(n), l;
  }
  function am(l) {
    return l ? (l = fe, l) : fe;
  }
  function em(l, t, a, e, u, n) {
    u = am(u), e.context === null ? e.context = u : e.pendingContext = u, e = da(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ma(l, e, t), a !== null && (ut(a, l, t), lu(a, l, t));
  }
  function um(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function tf(l, t) {
    um(l, t), (l = l.alternate) && um(l, t);
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ya(l, 67108864);
      t !== null && ut(t, l, 67108864), tf(l, 67108864);
    }
  }
  function cm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = kn(t);
      var a = Ya(l, t);
      a !== null && ut(a, l, t), tf(l, t);
    }
  }
  var jn = !0;
  function j0(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 2, af(l, t, a, e);
    } finally {
      A.p = n, b.T = u;
    }
  }
  function Z0(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 8, af(l, t, a, e);
    } finally {
      A.p = n, b.T = u;
    }
  }
  function af(l, t, a, e) {
    if (jn) {
      var u = ef(e);
      if (u === null)
        xi(
          l,
          t,
          e,
          Zn,
          a
        ), fm(l, e);
      else if (V0(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (fm(l, e), t & 4 && -1 < x0.indexOf(l)) {
        for (; u !== null; ) {
          var n = Fa(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = Ha(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << 31 - ft(c);
                      i.entanglements[1] |= f, c &= ~f;
                    }
                    qt(n), (ul & 6) === 0 && (Tn = ct() + 500, ru(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Ya(n, 2), i !== null && ut(i, n, 2), _n(), tf(n, 2);
            }
          if (n = ef(e), n === null && xi(
            l,
            t,
            e,
            Zn,
            a
          ), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else
        xi(
          l,
          t,
          e,
          null,
          a
        );
    }
  }
  function ef(l) {
    return l = nc(l), uf(l);
  }
  var Zn = null;
  function uf(l) {
    if (Zn = null, l = ka(l), l !== null) {
      var t = W(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = x(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = cl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Zn = l, null;
  }
  function im(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Om()) {
          case vf:
            return 2;
          case hf:
            return 8;
          case Uu:
          case Dm:
            return 32;
          case rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nf = !1, Ta = null, Aa = null, _a = null, Tu = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), Ma = [], x0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ta = null;
        break;
      case "dragenter":
      case "dragleave":
        Aa = null;
        break;
      case "mouseover":
      case "mouseout":
        _a = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Au.delete(t.pointerId);
    }
  }
  function _u(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Fa(t), t !== null && nm(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function V0(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return Ta = _u(
          Ta,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return Aa = _u(
          Aa,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return _a = _u(
          _a,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Tu.set(
          n,
          _u(
            Tu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Au.set(
          n,
          _u(
            Au.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
    }
    return !1;
  }
  function sm(l) {
    var t = ka(l.target);
    if (t !== null) {
      var a = W(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = x(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              cm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = cl(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              cm(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ef(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        uc = e, a.target.dispatchEvent(e), uc = null;
      } else
        return t = Fa(a), t !== null && nm(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function om(l, t, a) {
    xn(l) && a.delete(t);
  }
  function L0() {
    nf = !1, Ta !== null && xn(Ta) && (Ta = null), Aa !== null && xn(Aa) && (Aa = null), _a !== null && xn(_a) && (_a = null), Tu.forEach(om), Au.forEach(om);
  }
  function Vn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, nf || (nf = !0, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      L0
    )));
  }
  var Ln = null;
  function dm(l) {
    Ln !== l && (Ln = l, g.unstable_scheduleCallback(
      g.unstable_NormalPriority,
      function() {
        Ln === l && (Ln = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], e = l[t + 1], u = l[t + 2];
          if (typeof e != "function") {
            if (uf(e || a) === null)
              continue;
            break;
          }
          var n = Fa(a);
          n !== null && (l.splice(t, 3), t -= 3, ei(
            n,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: e
            },
            e,
            u
          ));
        }
      }
    ));
  }
  function Ce(l) {
    function t(f) {
      return Vn(f, l);
    }
    Ta !== null && Vn(Ta, l), Aa !== null && Vn(Aa, l), _a !== null && Vn(_a, l), Tu.forEach(t), Au.forEach(t);
    for (var a = 0; a < Ma.length; a++) {
      var e = Ma[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ma.length && (a = Ma[0], a.blockedOn === null); )
      sm(a), a.blockedOn === null && Ma.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], c = u[Il] || null;
        if (typeof n == "function")
          c || dm(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[Il] || null)
              i = c.formAction;
            else if (uf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? a[e + 1] = i : (a.splice(e, 3), e -= 3), dm(a);
        }
      }
  }
  function mm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(c) {
            return u = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function cf(l) {
    this._internalRoot = l;
  }
  Kn.prototype.render = cf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var a = t.current, e = ht();
    em(a, e, l, t, null, null);
  }, Kn.prototype.unmount = cf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      em(l.current, 2, null, l, null, null), _n(), t[$a] = null;
    }
  };
  function Kn(l) {
    this._internalRoot = l;
  }
  Kn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ef();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ma.length && t !== 0 && t < Ma[a].priority; a++) ;
      Ma.splice(a, 0, l), a === 0 && sm(l);
    }
  };
  var ym = M.version;
  if (ym !== "19.2.4")
    throw Error(
      m(
        527,
        ym,
        "19.2.4"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = T(t), l = l !== null ? F(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var K0 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        Be = Jn.inject(
          K0
        ), it = Jn;
      } catch {
      }
  }
  return Mu.createRoot = function(l, t) {
    if (!Ul(l)) throw Error(m(299));
    var a = !1, e = "", u = bo, n = Eo, c = zo;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = tm(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      null,
      u,
      n,
      c,
      mm
    ), l[$a] = t.current, Zi(l), new cf(t);
  }, Mu.hydrateRoot = function(l, t, a) {
    if (!Ul(l)) throw Error(m(299));
    var e = !1, u = "", n = bo, c = Eo, i = zo, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = tm(
      l,
      1,
      !0,
      t,
      a ?? null,
      e,
      u,
      f,
      n,
      c,
      i,
      mm
    ), t.context = am(null), a = t.current, e = ht(), e = kn(e), u = da(e), u.callback = null, ma(a, u, e), a = e, t.current.lanes = a, Ye(t, a), qt(t), l[$a] = t.current, Zi(l), new Kn(t);
  }, Mu.version = "19.2.4", Mu;
}
var Em;
function P0() {
  if (Em) return sf.exports;
  Em = 1;
  function g() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (M) {
        console.error(M);
      }
  }
  return g(), sf.exports = I0(), sf.exports;
}
var lv = P0();
const tv = /* @__PURE__ */ Am(lv), zm = "sf_session_id";
function av() {
  try {
    let g = sessionStorage.getItem(zm);
    return g || (g = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`, sessionStorage.setItem(zm, g)), g;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}
function ev(g) {
  const M = (g?.apiBaseUrl || "").trim().replace(/\/+$/, "");
  if (M) return M;
  const X = (g?.proxyBase || "/apps/space-funnel").replace(/\/+$/, "");
  return `${X.endsWith("/api") ? X.slice(0, -4) : X}/api`;
}
function uv() {
  try {
    return {
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer || null,
      screenWidth: window.screen?.width,
      screenHeight: window.screen?.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      isMobile: window.innerWidth < 768,
      language: navigator.language,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch {
    return { timestamp: (/* @__PURE__ */ new Date()).toISOString() };
  }
}
function nv() {
  try {
    const g = {};
    if (typeof window.Shopify < "u" && (g.shop = window.Shopify.shop || null, g.shopCurrency = window.Shopify.currency?.active || null, g.shopLocale = window.Shopify.locale || null, g.shopThemeId = window.Shopify.theme?.id || null, g.shopThemeName = window.Shopify.theme?.name || null, g.shopCountry = window.Shopify.country || null), typeof window.__st < "u" && (g.customerId = window.__st.cid || null, g.shopId = window.__st.sid || null), typeof window.ShopifyAnalytics < "u") {
      const m = window.ShopifyAnalytics.meta || {};
      m.page && (g.pageType = m.page.pageType || null, g.resourceType = m.page.resourceType || null, g.resourceId = m.page.resourceId || null), m.product && (g.shopifyProductId = m.product.id || null, g.shopifyProductType = m.product.type || null, g.shopifyProductVendor = m.product.vendor || null);
    }
    const M = document.querySelector('meta[name="shopify-customer-id"]');
    M && !g.customerId && (g.customerId = M.content || null);
    const X = document.cookie.match(/(?:^|;\s*)cart=([^;]+)/);
    return X && (g.cartToken = X[1]), g;
  } catch {
    return {};
  }
}
function cv(g, M) {
  if (typeof navigator < "u" && navigator.sendBeacon) {
    const X = new Blob([M], { type: "text/plain" });
    if (navigator.sendBeacon(g, X)) return;
  }
  try {
    fetch(g, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: M,
      keepalive: !0
    }).catch(() => {
    });
  } catch {
  }
}
function iv(g, M) {
  const X = ev(g), m = av(), Ul = M, W = uv(), x = nv(), cl = Date.now();
  function N(T, F) {
    try {
      const C = JSON.stringify({
        sessionId: m,
        eventName: T,
        tool: Ul,
        properties: {
          ...F,
          _page: W.pagePath,
          _pageUrl: W.pageUrl,
          _isMobile: W.isMobile,
          _viewport: `${W.viewportWidth}x${W.viewportHeight}`,
          _elapsed: Date.now() - cl,
          // Shopify context on every event
          _shop: x.shop || null,
          _customerId: x.customerId || null,
          _shopCurrency: x.shopCurrency || null,
          _pageType: x.pageType || null,
          _resourceType: x.resourceType || null,
          _resourceId: x.resourceId || null
        }
      });
      cv(`${X}/analytics/event`, C);
    } catch {
    }
  }
  try {
    N("widget_loaded", {
      pageTitle: W.pageTitle,
      referrer: W.referrer,
      screenWidth: W.screenWidth,
      screenHeight: W.screenHeight,
      language: W.language,
      // Full Shopify context on widget_loaded
      shopifyShop: x.shop,
      shopifyCustomerId: x.customerId,
      shopifyCurrency: x.shopCurrency,
      shopifyLocale: x.shopLocale,
      shopifyTheme: x.shopThemeName,
      shopifyThemeId: x.shopThemeId,
      shopifyCountry: x.shopCountry,
      shopifyPageType: x.pageType,
      shopifyResourceType: x.resourceType,
      shopifyResourceId: x.resourceId,
      shopifyProductId: x.shopifyProductId,
      shopifyProductType: x.shopifyProductType,
      shopifyProductVendor: x.shopifyProductVendor
    });
  } catch {
  }
  return Object.freeze({ track: N, sessionId: m, startTime: cl });
}
const Tm = [
  "Analyzing your space...",
  "Finding the best placement...",
  "Generating your preview...",
  "Adding realistic lighting...",
  "Final touches..."
];
function fv(g) {
  const M = (g || "/apps/space-funnel").replace(/\/+$/, "");
  return M.endsWith("/api") ? M.slice(0, -4) : M;
}
function sv(g) {
  const M = (g?.apiBaseUrl || "").trim().replace(/\/+$/, "");
  return M || `${fv(g?.proxyBase)}/api`;
}
function Ou(g) {
  return new Promise((M, X) => {
    const m = new FileReader();
    m.onload = () => M(m.result), m.onerror = () => X(new Error("Could not read image.")), m.readAsDataURL(g);
  });
}
async function ov(g) {
  if (typeof window > "u" || typeof document > "u" || typeof window.createImageBitmap != "function") return Ou(g);
  const M = await window.createImageBitmap(g), X = Math.min(1, 1600 / Math.max(M.width, M.height)), m = Math.max(1, Math.round(M.width * X)), Ul = Math.max(1, Math.round(M.height * X)), W = document.createElement("canvas");
  W.width = m, W.height = Ul;
  const x = W.getContext("2d");
  if (!x) return Ou(g);
  x.drawImage(M, 0, 0, m, Ul);
  const cl = await new Promise((N) => W.toBlob(N, "image/jpeg", 0.82));
  return M.close(), Ou(cl || g);
}
function dv({ config: g }) {
  const M = rl.useMemo(() => iv(g, "product_visualizer"), [g]), X = rl.useRef(null), m = rl.useRef(null), Ul = rl.useRef(null), W = rl.useRef(null), x = rl.useRef(null), [cl, N] = rl.useState("upload"), [T, F] = rl.useState(""), [C, sl] = rl.useState(""), [kl, Cl] = rl.useState(null), [Vl, nt] = rl.useState(1), [Ll, Mt] = rl.useState(""), [Al, ql] = rl.useState(0), [wl, Nl] = rl.useState(""), [K, Wl] = rl.useState(g?.product?.variantId || ""), [Ot, Da] = rl.useState(!1), [Dt, Yl] = rl.useState(!1), Yt = rl.useMemo(() => sv(g), [g]), Q = g?.product, Fl = Q?.variants || [];
  Fl.length > 1, Fl.find((L) => String(L.id) === String(K))?.price ?? Q?.price;
  const A = /\boutdoor\b/i.test(Q?.productType ?? ""), B = /\b(wall|sconce)\b/i.test(Q?.productType ?? ""), el = /\b(pendant|hanging|chandelier|ceiling)\b/i.test(Q?.productType ?? ""), nl = rl.useMemo(() => {
    const L = Q?.title || "this light";
    return A ? {
      eyebrow: "Try it on your space",
      title: `See ${L} on your home.`,
      lede: `Upload a photo of your exterior and we'll show you exactly how ${L} looks — in under a minute.`,
      ctaLabel: "Upload a Photo",
      ctaMicrocopy: "Free. No account needed. Your photo is never stored."
    } : B ? {
      eyebrow: "Try it on your wall",
      title: `See ${L} in your space.`,
      lede: `Upload a photo and we'll show you exactly how ${L} looks — in under a minute.`,
      ctaLabel: "Upload a Photo",
      ctaMicrocopy: "Free. No account needed. Your photo is never stored."
    } : el ? {
      eyebrow: "Try it in your space",
      title: `See ${L} in your space.`,
      lede: `Upload a photo and we'll show you exactly how ${L} looks hanging in your space — in under a minute.`,
      ctaLabel: "Upload a Photo",
      ctaMicrocopy: "Free. No account needed. Your photo is never stored."
    } : {
      eyebrow: "Try it in your space",
      title: `See ${L} in your space.`,
      lede: `Upload a photo and we'll show you exactly how ${L} looks — in under a minute.`,
      ctaLabel: "Upload a Photo",
      ctaMicrocopy: "Free. No account needed. Your photo is never stored."
    };
  }, [A, B, el]), o = rl.useMemo(() => {
    const L = g?.copy ?? {}, ll = { ...nl };
    for (const [pl, Kl] of Object.entries(L))
      Kl && typeof Kl == "string" && Kl.trim() && (/^See this lamp|^Try it in your|^Upload a (room )?photo and we/.test(Kl) || (ll[pl] = Kl));
    return ll;
  }, [g, nl]), S = rl.useMemo(() => ({
    productId: Q?.id,
    productName: Q?.title,
    productHandle: Q?.handle,
    productType: Q?.productType,
    productPrice: Q?.price,
    variantCount: Q?.variants?.length || 0
  }), [Q]);
  Q?.featuredImage && (Q.featuredImage.startsWith("//") ? `${Q.featuredImage}` : Q.featuredImage);
  const _ = g?.showcaseBefore ? g.showcaseBefore.startsWith("//") ? `https:${g.showcaseBefore}` : g.showcaseBefore : null, D = g?.showcaseAfter ? g.showcaseAfter.startsWith("//") ? `https:${g.showcaseAfter}` : g.showcaseAfter : null;
  rl.useEffect(() => () => {
    W.current && window.clearInterval(W.current);
  }, []), rl.useEffect(() => {
    const L = Date.now(), ll = x.current, pl = ll ? ["upload", "processing", "result"].indexOf(ll.step) : -1, Kl = ["upload", "processing", "result"].indexOf(cl);
    ll && ll.step !== cl && M.track("step_transition", {
      fromStep: ll.step,
      fromStepIndex: pl,
      toStep: cl,
      toStepIndex: Kl,
      direction: Kl >= pl ? "forward" : "backward",
      durationMs: Math.max(0, L - ll.startedAt),
      ...S
    }), M.track("step_viewed", {
      step: cl,
      stepIndex: Kl,
      ...S
    }), x.current = {
      step: cl,
      startedAt: L
    };
  }, [S, cl, M]), rl.useEffect(() => {
    const L = () => {
      const ll = x.current || { step: cl, startedAt: Date.now() };
      M.track("session_exit", {
        step: ll.step,
        stepIndex: ["upload", "processing", "result"].indexOf(ll.step),
        totalElapsedMs: Math.max(0, Date.now() - M.startTime),
        stepElapsedMs: Math.max(0, Date.now() - ll.startedAt),
        completed: ll.step === "result",
        ...S
      });
    };
    return window.addEventListener("pagehide", L), () => window.removeEventListener("pagehide", L);
  }, [S, cl, M]);
  function Y() {
    W.current && window.clearInterval(W.current);
    let L = 0;
    ql(0), W.current = window.setInterval(() => {
      L = Math.min(L + Math.random() * 2.2 + 0.3, 92), ql(Math.round(L));
    }, 1e3);
  }
  function V() {
    W.current && (window.clearInterval(W.current), W.current = null);
  }
  async function P(L) {
    if (Q) {
      X.current = Date.now(), M.track("photo_upload", { ...S, source: "file" }), F(L), sl(""), Cl(null), nt(1), Mt(""), Nl(""), Yl(!1), N("processing"), Y();
      try {
        const ll = await fetch(`${Yt}/visualize`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Session-Id": M.sessionId },
          body: JSON.stringify({ imageDataUrl: L, product: Q })
        }), pl = await ll.json();
        if (!ll.ok) throw new Error(pl.error || "Visualization failed.");
        const Kl = Date.now() - (X.current || Date.now()), Na = pl.placementCount || 1;
        V(), sl(pl.imageDataUrl), Cl(pl.placement), nt(Na), Mt(pl.sceneSummary || ""), ql(100), N("result"), M.track("review_complete", {
          ...S,
          roomId: pl.roomId,
          productCount: Na,
          reviewDurationMs: Kl
        }), M.track("product_recommended", {
          ...S,
          productId: Q.id,
          productName: Q.title || Q.name,
          category: Q.category || Q.productType,
          price: Q.price,
          variantId: Q.variantId || Q.variants?.[0]?.id
        }), M.track("render_complete", { ...S, roomId: pl.roomId, pipelineDurationMs: Kl }), M.track("results_viewed", { ...S, pipelineDurationMs: Kl });
      } catch (ll) {
        V();
        const pl = ll instanceof Error ? ll.message : "Something went wrong.";
        M.track("api_error", { ...S, message: pl }), Nl(pl), N("upload");
      }
    }
  }
  function Gl() {
    M.track("cta_clicked", { location: "visualizer_camera", ...S }), m.current?.click();
  }
  function Sl() {
    M.track("cta_clicked", { location: "visualizer_gallery", ...S }), Ul.current?.click();
  }
  async function aa(L) {
    const ll = L.target.files?.[0];
    if (ll)
      try {
        M.track("file_selected", {
          fileType: ll.type || "unknown",
          fileSizeKb: Math.round((ll.size || 0) / 1024),
          ...S
        });
        const pl = await ov(ll);
        await P(pl);
      } catch (pl) {
        Nl(pl instanceof Error ? pl.message : "Could not prepare image.");
      } finally {
        L.target.value = "";
      }
  }
  function Ua() {
    if (!C) return;
    M.track("download_image", { ...S });
    const L = document.createElement("a");
    L.href = C, L.download = `outlight-${Q?.handle || "design"}-${Date.now()}.jpg`, L.click();
  }
  async function Re() {
    if (C) {
      if (M.track("share_image", { ...S }), navigator.share)
        try {
          const L = await (await fetch(C)).blob(), ll = new File([L], "outlight-design.jpg", { type: L.type });
          if (navigator.canShare?.({ files: [ll] })) {
            await navigator.share({ title: `${Q?.title} in my space`, files: [ll] });
            return;
          }
        } catch {
        }
      Ua();
    }
  }
  function Du() {
    M.track("start_over", { ...S }), N("upload"), F(""), sl(""), Cl(null), nt(1), Nl(""), ql(0), Yl(!1);
  }
  const Gt = Math.min(Math.floor(Al / 20), Tm.length - 1);
  return Q ? /* @__PURE__ */ O.createElement("div", { className: "pv-shell" }, /* @__PURE__ */ O.createElement("div", { className: "pv-frame" }, cl === "upload" ? /* @__PURE__ */ O.createElement("div", { className: "pv-panel pv-upload" }, /* @__PURE__ */ O.createElement("h2", { className: "pv-title" }, o.title), /* @__PURE__ */ O.createElement("p", { className: "pv-lede" }, o.lede), /* @__PURE__ */ O.createElement("div", { className: "pv-upload-actions" }, /* @__PURE__ */ O.createElement("input", { ref: m, className: "sr-only", type: "file", accept: "image/*", capture: "environment", onChange: aa }), /* @__PURE__ */ O.createElement("input", { ref: Ul, className: "sr-only", type: "file", accept: "image/*", onChange: aa }), /* @__PURE__ */ O.createElement("button", { className: "pv-upload-btn pv-btn-desktop", onClick: Gl }, /* @__PURE__ */ O.createElement("span", { className: "pv-upload-btn-icon" }, /* @__PURE__ */ O.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" }, /* @__PURE__ */ O.createElement("path", { d: "M11 14V4m0 0L7.5 7.5M11 4l3.5 3.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M3 14v3a2 2 0 002 2h12a2 2 0 002-2v-3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ O.createElement("span", { className: "pv-upload-btn-text" }, o.ctaLabel)), /* @__PURE__ */ O.createElement("button", { className: "pv-upload-btn pv-btn-mobile", onClick: Sl }, /* @__PURE__ */ O.createElement("span", { className: "pv-upload-btn-icon" }, /* @__PURE__ */ O.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none" }, /* @__PURE__ */ O.createElement("path", { d: "M11 14V4m0 0L7.5 7.5M11 4l3.5 3.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ O.createElement("path", { d: "M3 14v3a2 2 0 002 2h12a2 2 0 002-2v-3", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ O.createElement("span", { className: "pv-upload-btn-text" }, "Upload a Photo")), /* @__PURE__ */ O.createElement("p", { className: "pv-micro" }, o.ctaMicrocopy)), _ && D ? /* @__PURE__ */ O.createElement("div", { className: "pv-showcase" }, /* @__PURE__ */ O.createElement("div", { className: "pv-showcase-grid" }, /* @__PURE__ */ O.createElement("div", { className: "pv-showcase-card" }, /* @__PURE__ */ O.createElement("span", { className: "pv-showcase-label" }, "Before"), /* @__PURE__ */ O.createElement("div", { className: "pv-showcase-stage" }, /* @__PURE__ */ O.createElement("img", { src: _, alt: "Space before", loading: "eager" }))), /* @__PURE__ */ O.createElement("div", { className: "pv-showcase-card" }, /* @__PURE__ */ O.createElement("span", { className: "pv-showcase-label" }, "After"), /* @__PURE__ */ O.createElement("div", { className: "pv-showcase-stage" }, /* @__PURE__ */ O.createElement("img", { src: D, alt: `Space with ${Q.title}` }))))) : null, wl ? /* @__PURE__ */ O.createElement("p", { className: "pv-error" }, wl) : null) : null, cl === "processing" ? /* @__PURE__ */ O.createElement("div", { className: "pv-panel pv-processing" }, /* @__PURE__ */ O.createElement("div", { className: "pv-processing-image", style: { "--preview": `url("${T}")` } }, /* @__PURE__ */ O.createElement("div", { className: "pv-scan-line" })), /* @__PURE__ */ O.createElement("div", { className: "pv-processing-info" }, /* @__PURE__ */ O.createElement("span", { className: "pv-eyebrow" }, "Designing your space"), /* @__PURE__ */ O.createElement("h2", { className: "pv-title" }, Tm[Gt]), /* @__PURE__ */ O.createElement("div", { className: "pv-progress-track" }, /* @__PURE__ */ O.createElement("div", { className: "pv-progress-fill", style: { width: `${Al}%` } })), /* @__PURE__ */ O.createElement("span", { className: "pv-progress-label" }, Al, "%"))) : null, cl === "result" ? /* @__PURE__ */ O.createElement("div", { className: "pv-panel pv-result" }, /* @__PURE__ */ O.createElement("div", { className: "pv-result-header" }, /* @__PURE__ */ O.createElement("span", { className: "pv-eyebrow" }, "Your space with ", Q.title), Ll ? /* @__PURE__ */ O.createElement("p", { className: "pv-lede" }, Ll) : null), /* @__PURE__ */ O.createElement("div", { className: "pv-ba-grid" }, /* @__PURE__ */ O.createElement("div", { className: "pv-ba-img" }, /* @__PURE__ */ O.createElement("span", { className: "pv-ba-badge" }, "Before"), /* @__PURE__ */ O.createElement("div", { className: "pv-ba-stage" }, /* @__PURE__ */ O.createElement("img", { src: T, alt: "Original space" }))), /* @__PURE__ */ O.createElement("div", { className: "pv-ba-img" }, /* @__PURE__ */ O.createElement("span", { className: "pv-ba-badge" }, "After"), /* @__PURE__ */ O.createElement("div", { className: "pv-ba-stage" }, /* @__PURE__ */ O.createElement("img", { src: C, alt: `Space with ${Q.title}` })))), /* @__PURE__ */ O.createElement("div", { className: "pv-image-actions" }, /* @__PURE__ */ O.createElement("button", { className: "pv-icon-btn", onClick: Ua }, /* @__PURE__ */ O.createElement("svg", { width: "16", height: "16", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ O.createElement("path", { d: "M9 2v10m0 0l-3.5-3.5M9 12l3.5-3.5M3 15h12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })), "Save"), /* @__PURE__ */ O.createElement("button", { className: "pv-icon-btn", onClick: Re }, /* @__PURE__ */ O.createElement("svg", { width: "16", height: "16", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ O.createElement("circle", { cx: "13.5", cy: "3.5", r: "2", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ O.createElement("circle", { cx: "4.5", cy: "9", r: "2", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ O.createElement("circle", { cx: "13.5", cy: "14.5", r: "2", stroke: "currentColor", strokeWidth: "1.5" }), /* @__PURE__ */ O.createElement("path", { d: "M6.3 10.1l5.4 3.3M6.3 7.9l5.4-3.3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })), "Share")), wl ? /* @__PURE__ */ O.createElement("p", { className: "pv-error" }, wl) : null, /* @__PURE__ */ O.createElement("div", { className: "pv-restart" }, /* @__PURE__ */ O.createElement("button", { className: "pv-text-link", onClick: Du }, "Try a different photo"))) : null)) : null;
}
function mv(g, M) {
  tv.createRoot(g).render(
    /* @__PURE__ */ O.createElement(O.StrictMode, null, /* @__PURE__ */ O.createElement(dv, { config: M }))
  );
}
function yv(g) {
  const M = document.getElementById(g);
  if (!M?.textContent) return null;
  try {
    return JSON.parse(M.textContent);
  } catch {
    return null;
  }
}
const vv = [...document.querySelectorAll("[data-product-visualizer-root]")];
vv.forEach((g) => {
  const M = yv(g.dataset.configId);
  M && mv(g, M);
});
