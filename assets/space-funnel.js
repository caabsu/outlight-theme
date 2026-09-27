function Bd(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Sf = { exports: {} }, L = {};
var Td;
function Ph() {
  if (Td) return L;
  Td = 1;
  var d = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), h = /* @__PURE__ */ Symbol.for("react.strict_mode"), ct = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), A = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), ot = Symbol.iterator;
  function Ot(r) {
    return r === null || typeof r != "object" ? null : (r = ot && r[ot] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Yt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, J = Object.assign, al = {};
  function jt(r, T, O) {
    this.props = r, this.context = T, this.refs = al, this.updater = O || Yt;
  }
  jt.prototype.isReactComponent = {}, jt.prototype.setState = function(r, T) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, T, "setState");
  }, jt.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function El() {
  }
  El.prototype = jt.prototype;
  function At(r, T, O) {
    this.props = r, this.context = T, this.refs = al, this.updater = O || Yt;
  }
  var xt = At.prototype = new El();
  xt.constructor = At, J(xt, jt.prototype), xt.isPureReactComponent = !0;
  var It = Array.isArray;
  function Lt() {
  }
  var W = { H: null, A: null, T: null, S: null }, Zt = Object.prototype.hasOwnProperty;
  function Pt(r, T, O) {
    var H = O.ref;
    return {
      $$typeof: d,
      type: r,
      key: T,
      ref: H !== void 0 ? H : null,
      props: O
    };
  }
  function Ql(r, T) {
    return Pt(r.type, T, r.props);
  }
  function Wt(r) {
    return typeof r == "object" && r !== null && r.$$typeof === d;
  }
  function Dt(r) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(O) {
      return T[O];
    });
  }
  var bl = /\/+/g;
  function Ut(r, T) {
    return typeof r == "object" && r !== null && r.key != null ? Dt("" + r.key) : T.toString(36);
  }
  function Tl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(Lt, Lt) : (r.status = "pending", r.then(
          function(T) {
            r.status === "pending" && (r.status = "fulfilled", r.value = T);
          },
          function(T) {
            r.status === "pending" && (r.status = "rejected", r.reason = T);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function E(r, T, O, H, Q) {
    var k = typeof r;
    (k === "undefined" || k === "boolean") && (r = null);
    var at = !1;
    if (r === null) at = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case d:
            case _:
              at = !0;
              break;
            case w:
              return at = r._init, E(
                at(r._payload),
                T,
                O,
                H,
                Q
              );
          }
      }
    if (at)
      return Q = Q(r), at = H === "" ? "." + Ut(r, 0) : H, It(Q) ? (O = "", at != null && (O = at.replace(bl, "$&/") + "/"), E(Q, T, O, "", function(tl) {
        return tl;
      })) : Q != null && (Wt(Q) && (Q = Ql(
        Q,
        O + (Q.key == null || r && r.key === Q.key ? "" : ("" + Q.key).replace(
          bl,
          "$&/"
        ) + "/") + at
      )), T.push(Q)), 1;
    at = 0;
    var _t = H === "" ? "." : H + ":";
    if (It(r))
      for (var pt = 0; pt < r.length; pt++)
        H = r[pt], k = _t + Ut(H, pt), at += E(
          H,
          T,
          O,
          k,
          Q
        );
    else if (pt = Ot(r), typeof pt == "function")
      for (r = pt.call(r), pt = 0; !(H = r.next()).done; )
        H = H.value, k = _t + Ut(H, pt++), at += E(
          H,
          T,
          O,
          k,
          Q
        );
    else if (k === "object") {
      if (typeof r.then == "function")
        return E(
          Tl(r),
          T,
          O,
          H,
          Q
        );
      throw T = String(r), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return at;
  }
  function D(r, T, O) {
    if (r == null) return r;
    var H = [], Q = 0;
    return E(r, H, "", "", function(k) {
      return T.call(O, k, Q++);
    }), H;
  }
  function x(r) {
    if (r._status === -1) {
      var T = r._result;
      T = T(), T.then(
        function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = O);
        },
        function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = O);
        }
      ), r._status === -1 && (r._status = 0, r._result = T);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var rt = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  }, et = {
    map: D,
    forEach: function(r, T, O) {
      D(
        r,
        function() {
          T.apply(this, arguments);
        },
        O
      );
    },
    count: function(r) {
      var T = 0;
      return D(r, function() {
        T++;
      }), T;
    },
    toArray: function(r) {
      return D(r, function(T) {
        return T;
      }) || [];
    },
    only: function(r) {
      if (!Wt(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  };
  return L.Activity = C, L.Children = et, L.Component = jt, L.Fragment = M, L.Profiler = ct, L.PureComponent = At, L.StrictMode = h, L.Suspense = U, L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, L.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return W.H.useMemoCache(r);
    }
  }, L.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, L.cacheSignal = function() {
    return null;
  }, L.cloneElement = function(r, T, O) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var H = J({}, r.props), Q = r.key;
    if (T != null)
      for (k in T.key !== void 0 && (Q = "" + T.key), T)
        !Zt.call(T, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && T.ref === void 0 || (H[k] = T[k]);
    var k = arguments.length - 2;
    if (k === 1) H.children = O;
    else if (1 < k) {
      for (var at = Array(k), _t = 0; _t < k; _t++)
        at[_t] = arguments[_t + 2];
      H.children = at;
    }
    return Pt(r.type, Q, H);
  }, L.createContext = function(r) {
    return r = {
      $$typeof: j,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: Z,
      _context: r
    }, r;
  }, L.createElement = function(r, T, O) {
    var H, Q = {}, k = null;
    if (T != null)
      for (H in T.key !== void 0 && (k = "" + T.key), T)
        Zt.call(T, H) && H !== "key" && H !== "__self" && H !== "__source" && (Q[H] = T[H]);
    var at = arguments.length - 2;
    if (at === 1) Q.children = O;
    else if (1 < at) {
      for (var _t = Array(at), pt = 0; pt < at; pt++)
        _t[pt] = arguments[pt + 2];
      Q.children = _t;
    }
    if (r && r.defaultProps)
      for (H in at = r.defaultProps, at)
        Q[H] === void 0 && (Q[H] = at[H]);
    return Pt(r, k, Q);
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(r) {
    return { $$typeof: X, render: r };
  }, L.isValidElement = Wt, L.lazy = function(r) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: r },
      _init: x
    };
  }, L.memo = function(r, T) {
    return {
      $$typeof: A,
      type: r,
      compare: T === void 0 ? null : T
    };
  }, L.startTransition = function(r) {
    var T = W.T, O = {};
    W.T = O;
    try {
      var H = r(), Q = W.S;
      Q !== null && Q(O, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Lt, rt);
    } catch (k) {
      rt(k);
    } finally {
      T !== null && O.types !== null && (T.types = O.types), W.T = T;
    }
  }, L.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, L.use = function(r) {
    return W.H.use(r);
  }, L.useActionState = function(r, T, O) {
    return W.H.useActionState(r, T, O);
  }, L.useCallback = function(r, T) {
    return W.H.useCallback(r, T);
  }, L.useContext = function(r) {
    return W.H.useContext(r);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(r, T) {
    return W.H.useDeferredValue(r, T);
  }, L.useEffect = function(r, T) {
    return W.H.useEffect(r, T);
  }, L.useEffectEvent = function(r) {
    return W.H.useEffectEvent(r);
  }, L.useId = function() {
    return W.H.useId();
  }, L.useImperativeHandle = function(r, T, O) {
    return W.H.useImperativeHandle(r, T, O);
  }, L.useInsertionEffect = function(r, T) {
    return W.H.useInsertionEffect(r, T);
  }, L.useLayoutEffect = function(r, T) {
    return W.H.useLayoutEffect(r, T);
  }, L.useMemo = function(r, T) {
    return W.H.useMemo(r, T);
  }, L.useOptimistic = function(r, T) {
    return W.H.useOptimistic(r, T);
  }, L.useReducer = function(r, T, O) {
    return W.H.useReducer(r, T, O);
  }, L.useRef = function(r) {
    return W.H.useRef(r);
  }, L.useState = function(r) {
    return W.H.useState(r);
  }, L.useSyncExternalStore = function(r, T, O) {
    return W.H.useSyncExternalStore(
      r,
      T,
      O
    );
  }, L.useTransition = function() {
    return W.H.useTransition();
  }, L.version = "19.2.4", L;
}
var zd;
function Af() {
  return zd || (zd = 1, Sf.exports = Ph()), Sf.exports;
}
var nt = Af();
const s = /* @__PURE__ */ Bd(nt);
var Ef = { exports: {} }, Yu = {}, bf = { exports: {} }, Tf = {};
var Ad;
function ty() {
  return Ad || (Ad = 1, (function(d) {
    function _(E, D) {
      var x = E.length;
      E.push(D);
      t: for (; 0 < x; ) {
        var rt = x - 1 >>> 1, et = E[rt];
        if (0 < ct(et, D))
          E[rt] = D, E[x] = et, x = rt;
        else break t;
      }
    }
    function M(E) {
      return E.length === 0 ? null : E[0];
    }
    function h(E) {
      if (E.length === 0) return null;
      var D = E[0], x = E.pop();
      if (x !== D) {
        E[0] = x;
        t: for (var rt = 0, et = E.length, r = et >>> 1; rt < r; ) {
          var T = 2 * (rt + 1) - 1, O = E[T], H = T + 1, Q = E[H];
          if (0 > ct(O, x))
            H < et && 0 > ct(Q, O) ? (E[rt] = Q, E[H] = x, rt = H) : (E[rt] = O, E[T] = x, rt = T);
          else if (H < et && 0 > ct(Q, x))
            E[rt] = Q, E[H] = x, rt = H;
          else break t;
        }
      }
      return D;
    }
    function ct(E, D) {
      var x = E.sortIndex - D.sortIndex;
      return x !== 0 ? x : E.id - D.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Z = performance;
      d.unstable_now = function() {
        return Z.now();
      };
    } else {
      var j = Date, X = j.now();
      d.unstable_now = function() {
        return j.now() - X;
      };
    }
    var U = [], A = [], w = 1, C = null, ot = 3, Ot = !1, Yt = !1, J = !1, al = !1, jt = typeof setTimeout == "function" ? setTimeout : null, El = typeof clearTimeout == "function" ? clearTimeout : null, At = typeof setImmediate < "u" ? setImmediate : null;
    function xt(E) {
      for (var D = M(A); D !== null; ) {
        if (D.callback === null) h(A);
        else if (D.startTime <= E)
          h(A), D.sortIndex = D.expirationTime, _(U, D);
        else break;
        D = M(A);
      }
    }
    function It(E) {
      if (J = !1, xt(E), !Yt)
        if (M(U) !== null)
          Yt = !0, Lt || (Lt = !0, Dt());
        else {
          var D = M(A);
          D !== null && Tl(It, D.startTime - E);
        }
    }
    var Lt = !1, W = -1, Zt = 5, Pt = -1;
    function Ql() {
      return al ? !0 : !(d.unstable_now() - Pt < Zt);
    }
    function Wt() {
      if (al = !1, Lt) {
        var E = d.unstable_now();
        Pt = E;
        var D = !0;
        try {
          t: {
            Yt = !1, J && (J = !1, El(W), W = -1), Ot = !0;
            var x = ot;
            try {
              l: {
                for (xt(E), C = M(U); C !== null && !(C.expirationTime > E && Ql()); ) {
                  var rt = C.callback;
                  if (typeof rt == "function") {
                    C.callback = null, ot = C.priorityLevel;
                    var et = rt(
                      C.expirationTime <= E
                    );
                    if (E = d.unstable_now(), typeof et == "function") {
                      C.callback = et, xt(E), D = !0;
                      break l;
                    }
                    C === M(U) && h(U), xt(E);
                  } else h(U);
                  C = M(U);
                }
                if (C !== null) D = !0;
                else {
                  var r = M(A);
                  r !== null && Tl(
                    It,
                    r.startTime - E
                  ), D = !1;
                }
              }
              break t;
            } finally {
              C = null, ot = x, Ot = !1;
            }
            D = void 0;
          }
        } finally {
          D ? Dt() : Lt = !1;
        }
      }
    }
    var Dt;
    if (typeof At == "function")
      Dt = function() {
        At(Wt);
      };
    else if (typeof MessageChannel < "u") {
      var bl = new MessageChannel(), Ut = bl.port2;
      bl.port1.onmessage = Wt, Dt = function() {
        Ut.postMessage(null);
      };
    } else
      Dt = function() {
        jt(Wt, 0);
      };
    function Tl(E, D) {
      W = jt(function() {
        E(d.unstable_now());
      }, D);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, d.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < E ? Math.floor(1e3 / E) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return ot;
    }, d.unstable_next = function(E) {
      switch (ot) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = ot;
      }
      var x = ot;
      ot = D;
      try {
        return E();
      } finally {
        ot = x;
      }
    }, d.unstable_requestPaint = function() {
      al = !0;
    }, d.unstable_runWithPriority = function(E, D) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var x = ot;
      ot = E;
      try {
        return D();
      } finally {
        ot = x;
      }
    }, d.unstable_scheduleCallback = function(E, D, x) {
      var rt = d.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? rt + x : rt) : x = rt, E) {
        case 1:
          var et = -1;
          break;
        case 2:
          et = 250;
          break;
        case 5:
          et = 1073741823;
          break;
        case 4:
          et = 1e4;
          break;
        default:
          et = 5e3;
      }
      return et = x + et, E = {
        id: w++,
        callback: D,
        priorityLevel: E,
        startTime: x,
        expirationTime: et,
        sortIndex: -1
      }, x > rt ? (E.sortIndex = x, _(A, E), M(U) === null && E === M(A) && (J ? (El(W), W = -1) : J = !0, Tl(It, x - rt))) : (E.sortIndex = et, _(U, E), Yt || Ot || (Yt = !0, Lt || (Lt = !0, Dt()))), E;
    }, d.unstable_shouldYield = Ql, d.unstable_wrapCallback = function(E) {
      var D = ot;
      return function() {
        var x = ot;
        ot = D;
        try {
          return E.apply(this, arguments);
        } finally {
          ot = x;
        }
      };
    };
  })(Tf)), Tf;
}
var _d;
function ly() {
  return _d || (_d = 1, bf.exports = ty()), bf.exports;
}
var zf = { exports: {} }, $t = {};
var Nd;
function ey() {
  if (Nd) return $t;
  Nd = 1;
  var d = Af();
  function _(U) {
    var A = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        A += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + U + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function M() {
  }
  var h = {
    d: {
      f: M,
      r: function() {
        throw Error(_(522));
      },
      D: M,
      C: M,
      L: M,
      m: M,
      X: M,
      S: M,
      M
    },
    p: 0,
    findDOMNode: null
  }, ct = /* @__PURE__ */ Symbol.for("react.portal");
  function Z(U, A, w) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ct,
      key: C == null ? null : "" + C,
      children: U,
      containerInfo: A,
      implementation: w
    };
  }
  var j = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(U, A) {
    if (U === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, $t.createPortal = function(U, A) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(_(299));
    return Z(U, A, null, w);
  }, $t.flushSync = function(U) {
    var A = j.T, w = h.p;
    try {
      if (j.T = null, h.p = 2, U) return U();
    } finally {
      j.T = A, h.p = w, h.d.f();
    }
  }, $t.preconnect = function(U, A) {
    typeof U == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, h.d.C(U, A));
  }, $t.prefetchDNS = function(U) {
    typeof U == "string" && h.d.D(U);
  }, $t.preinit = function(U, A) {
    if (typeof U == "string" && A && typeof A.as == "string") {
      var w = A.as, C = X(w, A.crossOrigin), ot = typeof A.integrity == "string" ? A.integrity : void 0, Ot = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      w === "style" ? h.d.S(
        U,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: C,
          integrity: ot,
          fetchPriority: Ot
        }
      ) : w === "script" && h.d.X(U, {
        crossOrigin: C,
        integrity: ot,
        fetchPriority: Ot,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, $t.preinitModule = function(U, A) {
    if (typeof U == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var w = X(
            A.as,
            A.crossOrigin
          );
          h.d.M(U, {
            crossOrigin: w,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && h.d.M(U);
  }, $t.preload = function(U, A) {
    if (typeof U == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var w = A.as, C = X(w, A.crossOrigin);
      h.d.L(U, w, {
        crossOrigin: C,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, $t.preloadModule = function(U, A) {
    if (typeof U == "string")
      if (A) {
        var w = X(A.as, A.crossOrigin);
        h.d.m(U, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: w,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else h.d.m(U);
  }, $t.requestFormReset = function(U) {
    h.d.r(U);
  }, $t.unstable_batchedUpdates = function(U, A) {
    return U(A);
  }, $t.useFormState = function(U, A, w) {
    return j.H.useFormState(U, A, w);
  }, $t.useFormStatus = function() {
    return j.H.useHostTransitionStatus();
  }, $t.version = "19.2.4", $t;
}
var Md;
function ay() {
  if (Md) return zf.exports;
  Md = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (_) {
        console.error(_);
      }
  }
  return d(), zf.exports = ey(), zf.exports;
}
var Od;
function uy() {
  if (Od) return Yu;
  Od = 1;
  var d = ly(), _ = Af(), M = ay();
  function h(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ct(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Z(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function j(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function X(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function U(t) {
    if (Z(t) !== t)
      throw Error(h(188));
  }
  function A(t) {
    var l = t.alternate;
    if (!l) {
      if (l = Z(t), l === null) throw Error(h(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return U(u), t;
          if (n === a) return U(u), l;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === e) {
            c = !0, e = u, a = n;
            break;
          }
          if (i === a) {
            c = !0, a = u, e = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === e) {
              c = !0, e = n, a = u;
              break;
            }
            if (i === a) {
              c = !0, a = n, e = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(h(189));
        }
      }
      if (e.alternate !== a) throw Error(h(190));
    }
    if (e.tag !== 3) throw Error(h(188));
    return e.stateNode.current === e ? t : l;
  }
  function w(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = w(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var C = Object.assign, ot = /* @__PURE__ */ Symbol.for("react.element"), Ot = /* @__PURE__ */ Symbol.for("react.transitional.element"), Yt = /* @__PURE__ */ Symbol.for("react.portal"), J = /* @__PURE__ */ Symbol.for("react.fragment"), al = /* @__PURE__ */ Symbol.for("react.strict_mode"), jt = /* @__PURE__ */ Symbol.for("react.profiler"), El = /* @__PURE__ */ Symbol.for("react.consumer"), At = /* @__PURE__ */ Symbol.for("react.context"), xt = /* @__PURE__ */ Symbol.for("react.forward_ref"), It = /* @__PURE__ */ Symbol.for("react.suspense"), Lt = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), Zt = /* @__PURE__ */ Symbol.for("react.lazy"), Pt = /* @__PURE__ */ Symbol.for("react.activity"), Ql = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Wt = Symbol.iterator;
  function Dt(t) {
    return t === null || typeof t != "object" ? null : (t = Wt && t[Wt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var bl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case J:
        return "Fragment";
      case jt:
        return "Profiler";
      case al:
        return "StrictMode";
      case It:
        return "Suspense";
      case Lt:
        return "SuspenseList";
      case Pt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Yt:
          return "Portal";
        case At:
          return t.displayName || "Context";
        case El:
          return (t._context.displayName || "Context") + ".Consumer";
        case xt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return l = t.displayName || null, l !== null ? l : Ut(t.type) || "Memo";
        case Zt:
          l = t._payload, t = t._init;
          try {
            return Ut(t(l));
          } catch {
          }
      }
    return null;
  }
  var Tl = Array.isArray, E = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rt = [], et = -1;
  function r(t) {
    return { current: t };
  }
  function T(t) {
    0 > et || (t.current = rt[et], rt[et] = null, et--);
  }
  function O(t, l) {
    et++, rt[et] = t.current, t.current = l;
  }
  var H = r(null), Q = r(null), k = r(null), at = r(null);
  function _t(t, l) {
    switch (O(k, l), O(Q, t), O(H, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? wr(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = wr(l), t = Kr(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    T(H), O(H, t);
  }
  function pt() {
    T(H), T(Q), T(k);
  }
  function tl(t) {
    t.memoizedState !== null && O(at, t);
    var l = H.current, e = Kr(l, t.type);
    l !== e && (O(Q, t), O(H, e));
  }
  function We(t) {
    Q.current === t && (T(H), T(Q)), at.current === t && (T(at), Hu._currentValue = x);
  }
  var $e, La;
  function Ll(t) {
    if ($e === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        $e = l && l[1] || "", La = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $e + t + La;
  }
  var Fe = !1;
  function Ie(t, l) {
    if (!t || Fe) return "";
    Fe = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
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
                } catch (p) {
                  var g = p;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (p) {
                  g = p;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                g = p;
              }
              (z = t()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (p) {
            if (p && g && typeof p.stack == "string")
              return [p.stack, g.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var f = c.split(`
`), v = i.split(`
`);
        for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < v.length && !v[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === f.length || u === v.length)
          for (a = f.length - 1, u = v.length - 1; 1 <= a && 0 <= u && f[a] !== v[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (f[a] !== v[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || f[a] !== v[u]) {
                  var S = `
` + f[a].replace(" at new ", " at ");
                  return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), S;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Fe = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Ll(e) : "";
  }
  function ec(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(t.type);
      case 16:
        return Ll("Lazy");
      case 13:
        return t.child !== l && l !== null ? Ll("Suspense Fallback") : Ll("Suspense");
      case 19:
        return Ll("SuspenseList");
      case 0:
      case 15:
        return Ie(t.type, !1);
      case 11:
        return Ie(t.type.render, !1);
      case 1:
        return Ie(t.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function Za(t) {
    try {
      var l = "", e = null;
      do
        l += ec(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Pe = Object.prototype.hasOwnProperty, ta = d.unstable_scheduleCallback, la = d.unstable_cancelCallback, ac = d.unstable_shouldYield, uc = d.unstable_requestPaint, ll = d.unstable_now, nc = d.unstable_getCurrentPriorityLevel, ju = d.unstable_ImmediatePriority, Va = d.unstable_UserBlockingPriority, N = d.unstable_NormalPriority, q = d.unstable_LowPriority, $ = d.unstable_IdlePriority, ut = d.log, ea = d.unstable_setDisableYieldValue, rl = null, Ct = null;
  function Yl(t) {
    if (typeof ut == "function" && ea(t), Ct && typeof Ct.setStrictMode == "function")
      try {
        Ct.setStrictMode(rl, t);
      } catch {
      }
  }
  var dl = Math.clz32 ? Math.clz32 : Gd, jd = Math.log, xd = Math.LN2;
  function Gd(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (jd(t) / xd | 0) | 0;
  }
  var xu = 256, Gu = 262144, Xu = 4194304;
  function Ce(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Qu(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? u = Ce(a) : (c &= i, c !== 0 ? u = Ce(c) : e || (e = i & ~t, e !== 0 && (u = Ce(e))))) : (i = a & ~n, i !== 0 ? u = Ce(i) : c !== 0 ? u = Ce(c) : e || (e = a & ~t, e !== 0 && (u = Ce(e)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : u;
  }
  function wa(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Xd(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function _f() {
    var t = Xu;
    return Xu <<= 1, (Xu & 62914560) === 0 && (Xu = 4194304), t;
  }
  function cc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ka(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Qd(t, l, e, a, u, n) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var i = t.entanglements, f = t.expirationTimes, v = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var S = 31 - dl(e), z = 1 << S;
      i[S] = 0, f[S] = -1;
      var g = v[S];
      if (g !== null)
        for (v[S] = null, S = 0; S < g.length; S++) {
          var p = g[S];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~z;
    }
    a !== 0 && Nf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function Nf(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var a = 31 - dl(l);
    t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
  }
  function Mf(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var a = 31 - dl(e), u = 1 << a;
      u & l | t[a] & l && (t[a] |= l), e &= ~u;
    }
  }
  function Of(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : ic(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function ic(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function fc(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Df() {
    var t = D.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : yd(t.type));
  }
  function Uf(t, l) {
    var e = D.p;
    try {
      return D.p = t, l();
    } finally {
      D.p = e;
    }
  }
  var ie = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + ie, ul = "__reactProps$" + ie, aa = "__reactContainer$" + ie, sc = "__reactEvents$" + ie, Ld = "__reactListeners$" + ie, Zd = "__reactHandles$" + ie, Cf = "__reactResources$" + ie, Ja = "__reactMarker$" + ie;
  function oc(t) {
    delete t[Vt], delete t[ul], delete t[sc], delete t[Ld], delete t[Zd];
  }
  function ua(t) {
    var l = t[Vt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[aa] || e[Vt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Pr(t); t !== null; ) {
            if (e = t[Vt]) return e;
            t = Pr(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function na(t) {
    if (t = t[Vt] || t[aa]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function ka(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(h(33));
  }
  function ca(t) {
    var l = t[Cf];
    return l || (l = t[Cf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Xt(t) {
    t[Ja] = !0;
  }
  var Hf = /* @__PURE__ */ new Set(), Rf = {};
  function He(t, l) {
    ia(t, l), ia(t + "Capture", l);
  }
  function ia(t, l) {
    for (Rf[t] = l, t = 0; t < l.length; t++)
      Hf.add(l[t]);
  }
  var Vd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Bf = {}, qf = {};
  function wd(t) {
    return Pe.call(qf, t) ? !0 : Pe.call(Bf, t) ? !1 : Vd.test(t) ? qf[t] = !0 : (Bf[t] = !0, !1);
  }
  function Lu(t, l, e) {
    if (wd(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Zu(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Zl(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function zl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Yf(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Kd(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          e = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(c) {
          e = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function rc(t) {
    if (!t._valueTracker) {
      var l = Yf(t) ? "checked" : "value";
      t._valueTracker = Kd(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function jf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), a = "";
    return t && (a = Yf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1;
  }
  function Vu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Jd = /[\n"\\]/g;
  function Al(t) {
    return t.replace(
      Jd,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function dc(t, l, e, a, u, n, c, i) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + zl(l)) : t.value !== "" + zl(l) && (t.value = "" + zl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? mc(t, c, zl(l)) : e != null ? mc(t, c, zl(e)) : a != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.name = "" + zl(i) : t.removeAttribute("name");
  }
  function xf(t, l, e, a, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        rc(t);
        return;
      }
      e = e != null ? "" + zl(e) : "", l = l != null ? "" + zl(l) : e, i || l === t.value || (t.value = l), t.defaultValue = l;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = i ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), rc(t);
  }
  function mc(t, l, e) {
    l === "number" && Vu(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function fa(t, l, e, a) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < e.length; u++)
        l["$" + e[u]] = !0;
      for (e = 0; e < t.length; e++)
        u = l.hasOwnProperty("$" + t[e].value), t[e].selected !== u && (t[e].selected = u), u && a && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + zl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Gf(t, l, e) {
    if (l != null && (l = "" + zl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + zl(e) : "";
  }
  function Xf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(h(92));
        if (Tl(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), l = e;
    }
    e = zl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), rc(t);
  }
  function sa(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var kd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || kd.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function Lf(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(h(62));
    if (t = t.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in l)
        a = l[u], l.hasOwnProperty(u) && e[u] !== a && Qf(t, u, a);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && Qf(t, n, l[n]);
  }
  function hc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Wd = /* @__PURE__ */ new Map([
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
  ]), $d = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wu(t) {
    return $d.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Vl() {
  }
  var yc = null;
  function vc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oa = null, ra = null;
  function Zf(t) {
    var l = na(t);
    if (l && (t = l.stateNode)) {
      var e = t[ul] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (dc(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Al(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var u = a[ul] || null;
                if (!u) throw Error(h(90));
                dc(
                  a,
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
            for (l = 0; l < e.length; l++)
              a = e[l], a.form === t.form && jf(a);
          }
          break t;
        case "textarea":
          Gf(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && fa(t, !!e.multiple, l, !1);
      }
    }
  }
  var gc = !1;
  function Vf(t, l, e) {
    if (gc) return t(l, e);
    gc = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (gc = !1, (oa !== null || ra !== null) && (Rn(), oa && (l = oa, t = ra, ra = oa = null, Zf(l), t)))
        for (l = 0; l < t.length; l++) Zf(t[l]);
    }
  }
  function Wa(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[ul] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        h(231, l, typeof e)
      );
    return e;
  }
  var wl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pc = !1;
  if (wl)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          pc = !0;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      pc = !1;
    }
  var fe = null, Sc = null, Ku = null;
  function wf() {
    if (Ku) return Ku;
    var t, l = Sc, e = l.length, a, u = "value" in fe ? fe.value : fe.textContent, n = u.length;
    for (t = 0; t < e && l[t] === u[t]; t++) ;
    var c = e - t;
    for (a = 1; a <= c && l[e - a] === u[n - a]; a++) ;
    return Ku = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ju(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ku() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function nl(t) {
    function l(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in t)
        t.hasOwnProperty(i) && (e = t[i], this[i] = e ? e(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? ku : Kf, this.isPropagationStopped = Kf, this;
    }
    return C(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = ku);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = ku);
      },
      persist: function() {
      },
      isPersistent: ku
    }), l;
  }
  var Re = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wu = nl(Re), Fa = C({}, Re, { view: 0, detail: 0 }), Fd = nl(Fa), Ec, bc, Ia, $u = C({}, Fa, {
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
    getModifierState: zc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ia && (Ia && t.type === "mousemove" ? (Ec = t.screenX - Ia.screenX, bc = t.screenY - Ia.screenY) : bc = Ec = 0, Ia = t), Ec);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : bc;
    }
  }), Jf = nl($u), Id = C({}, $u, { dataTransfer: 0 }), Pd = nl(Id), tm = C({}, Fa, { relatedTarget: 0 }), Tc = nl(tm), lm = C({}, Re, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), em = nl(lm), am = C({}, Re, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), um = nl(am), nm = C({}, Re, { data: 0 }), kf = nl(nm), cm = {
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
  }, im = {
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
  }, fm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = fm[t]) ? !!l[t] : !1;
  }
  function zc() {
    return sm;
  }
  var om = C({}, Fa, {
    key: function(t) {
      if (t.key) {
        var l = cm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? im[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zc,
    charCode: function(t) {
      return t.type === "keypress" ? Ju(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), rm = nl(om), dm = C({}, $u, {
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
  }), Wf = nl(dm), mm = C({}, Fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zc
  }), hm = nl(mm), ym = C({}, Re, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = nl(ym), gm = C({}, $u, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pm = nl(gm), Sm = C({}, Re, {
    newState: 0,
    oldState: 0
  }), Em = nl(Sm), bm = [9, 13, 27, 32], Ac = wl && "CompositionEvent" in window, Pa = null;
  wl && "documentMode" in document && (Pa = document.documentMode);
  var Tm = wl && "TextEvent" in window && !Pa, $f = wl && (!Ac || Pa && 8 < Pa && 11 >= Pa), Ff = " ", If = !1;
  function Pf(t, l) {
    switch (t) {
      case "keyup":
        return bm.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ts(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var da = !1;
  function zm(t, l) {
    switch (t) {
      case "compositionend":
        return ts(l);
      case "keypress":
        return l.which !== 32 ? null : (If = !0, Ff);
      case "textInput":
        return t = l.data, t === Ff && If ? null : t;
      default:
        return null;
    }
  }
  function Am(t, l) {
    if (da)
      return t === "compositionend" || !Ac && Pf(t, l) ? (t = wf(), Ku = Sc = fe = null, da = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return $f && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var _m = {
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
  function ls(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!_m[t.type] : l === "textarea";
  }
  function es(t, l, e, a) {
    oa ? ra ? ra.push(a) : ra = [a] : oa = a, l = Xn(l, "onChange"), 0 < l.length && (e = new Wu(
      "onChange",
      "change",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }));
  }
  var tu = null, lu = null;
  function Nm(t) {
    Gr(t, 0);
  }
  function Fu(t) {
    var l = ka(t);
    if (jf(l)) return t;
  }
  function as(t, l) {
    if (t === "change") return l;
  }
  var us = !1;
  if (wl) {
    var _c;
    if (wl) {
      var Nc = "oninput" in document;
      if (!Nc) {
        var ns = document.createElement("div");
        ns.setAttribute("oninput", "return;"), Nc = typeof ns.oninput == "function";
      }
      _c = Nc;
    } else _c = !1;
    us = _c && (!document.documentMode || 9 < document.documentMode);
  }
  function cs() {
    tu && (tu.detachEvent("onpropertychange", is), lu = tu = null);
  }
  function is(t) {
    if (t.propertyName === "value" && Fu(lu)) {
      var l = [];
      es(
        l,
        lu,
        t,
        vc(t)
      ), Vf(Nm, l);
    }
  }
  function Mm(t, l, e) {
    t === "focusin" ? (cs(), tu = l, lu = e, tu.attachEvent("onpropertychange", is)) : t === "focusout" && cs();
  }
  function Om(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Fu(lu);
  }
  function Dm(t, l) {
    if (t === "click") return Fu(l);
  }
  function Um(t, l) {
    if (t === "input" || t === "change")
      return Fu(l);
  }
  function Cm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ml = typeof Object.is == "function" ? Object.is : Cm;
  function eu(t, l) {
    if (ml(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Pe.call(l, u) || !ml(t[u], l[u]))
        return !1;
    }
    return !0;
  }
  function fs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ss(t, l) {
    var e = fs(t);
    t = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = t + e.textContent.length, t <= l && a >= l)
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = fs(e);
    }
  }
  function os(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? os(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function rs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Vu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Vu(t.document);
    }
    return l;
  }
  function Mc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Hm = wl && "documentMode" in document && 11 >= document.documentMode, ma = null, Oc = null, au = null, Dc = !1;
  function ds(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Dc || ma == null || ma !== Vu(a) || (a = ma, "selectionStart" in a && Mc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), au && eu(au, a) || (au = a, a = Xn(Oc, "onSelect"), 0 < a.length && (l = new Wu(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: a }), l.target = ma)));
  }
  function Be(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ha = {
    animationend: Be("Animation", "AnimationEnd"),
    animationiteration: Be("Animation", "AnimationIteration"),
    animationstart: Be("Animation", "AnimationStart"),
    transitionrun: Be("Transition", "TransitionRun"),
    transitionstart: Be("Transition", "TransitionStart"),
    transitioncancel: Be("Transition", "TransitionCancel"),
    transitionend: Be("Transition", "TransitionEnd")
  }, Uc = {}, ms = {};
  wl && (ms = document.createElement("div").style, "AnimationEvent" in window || (delete ha.animationend.animation, delete ha.animationiteration.animation, delete ha.animationstart.animation), "TransitionEvent" in window || delete ha.transitionend.transition);
  function qe(t) {
    if (Uc[t]) return Uc[t];
    if (!ha[t]) return t;
    var l = ha[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in ms)
        return Uc[t] = l[e];
    return t;
  }
  var hs = qe("animationend"), ys = qe("animationiteration"), vs = qe("animationstart"), Rm = qe("transitionrun"), Bm = qe("transitionstart"), qm = qe("transitioncancel"), gs = qe("transitionend"), ps = /* @__PURE__ */ new Map(), Cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Cc.push("scrollEnd");
  function Rl(t, l) {
    ps.set(t, l), He(l, [t]);
  }
  var Iu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, _l = [], ya = 0, Hc = 0;
  function Pu() {
    for (var t = ya, l = Hc = ya = 0; l < t; ) {
      var e = _l[l];
      _l[l++] = null;
      var a = _l[l];
      _l[l++] = null;
      var u = _l[l];
      _l[l++] = null;
      var n = _l[l];
      if (_l[l++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && Ss(e, u, n);
    }
  }
  function tn(t, l, e, a) {
    _l[ya++] = t, _l[ya++] = l, _l[ya++] = e, _l[ya++] = a, Hc |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Rc(t, l, e, a) {
    return tn(t, l, e, a), ln(t);
  }
  function Ye(t, l) {
    return tn(t, null, null, l), ln(t);
  }
  function Ss(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = t.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - dl(e), t = n.hiddenUpdates, a = t[u], a === null ? t[u] = [l] : a.push(l), l.lane = e | 536870912), n) : null;
  }
  function ln(t) {
    if (50 < _u)
      throw _u = 0, Li = null, Error(h(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var va = {};
  function Ym(t, l, e, a) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function hl(t, l, e, a) {
    return new Ym(t, l, e, a);
  }
  function Bc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Kl(t, l) {
    var e = t.alternate;
    return e === null ? (e = hl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Es(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function en(t, l, e, a, u, n) {
    var c = 0;
    if (a = t, typeof t == "function") Bc(t) && (c = 1);
    else if (typeof t == "string")
      c = Qh(
        t,
        e,
        H.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Pt:
          return t = hl(31, e, l, u), t.elementType = Pt, t.lanes = n, t;
        case J:
          return je(e.children, u, n, l);
        case al:
          c = 8, u |= 24;
          break;
        case jt:
          return t = hl(12, e, l, u | 2), t.elementType = jt, t.lanes = n, t;
        case It:
          return t = hl(13, e, l, u), t.elementType = It, t.lanes = n, t;
        case Lt:
          return t = hl(19, e, l, u), t.elementType = Lt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case At:
                c = 10;
                break t;
              case El:
                c = 9;
                break t;
              case xt:
                c = 11;
                break t;
              case W:
                c = 14;
                break t;
              case Zt:
                c = 16, a = null;
                break t;
            }
          c = 29, e = Error(
            h(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return l = hl(c, e, l, u), l.elementType = t, l.type = a, l.lanes = n, l;
  }
  function je(t, l, e, a) {
    return t = hl(7, t, a, l), t.lanes = e, t;
  }
  function qc(t, l, e) {
    return t = hl(6, t, null, l), t.lanes = e, t;
  }
  function bs(t) {
    var l = hl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Yc(t, l, e) {
    return l = hl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Ts = /* @__PURE__ */ new WeakMap();
  function Nl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ts.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: Za(l)
      }, Ts.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: Za(l)
    };
  }
  var ga = [], pa = 0, an = null, uu = 0, Ml = [], Ol = 0, se = null, jl = 1, xl = "";
  function Jl(t, l) {
    ga[pa++] = uu, ga[pa++] = an, an = t, uu = l;
  }
  function zs(t, l, e) {
    Ml[Ol++] = jl, Ml[Ol++] = xl, Ml[Ol++] = se, se = t;
    var a = jl;
    t = xl;
    var u = 32 - dl(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - dl(l) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, jl = 1 << 32 - dl(l) + u | e << u | a, xl = n + t;
    } else
      jl = 1 << n | e << u | a, xl = t;
  }
  function jc(t) {
    t.return !== null && (Jl(t, 1), zs(t, 1, 0));
  }
  function xc(t) {
    for (; t === an; )
      an = ga[--pa], ga[pa] = null, uu = ga[--pa], ga[pa] = null;
    for (; t === se; )
      se = Ml[--Ol], Ml[Ol] = null, xl = Ml[--Ol], Ml[Ol] = null, jl = Ml[--Ol], Ml[Ol] = null;
  }
  function As(t, l) {
    Ml[Ol++] = jl, Ml[Ol++] = xl, Ml[Ol++] = se, jl = l.id, xl = l.overflow, se = t;
  }
  var wt = null, St = null, lt = !1, oe = null, Dl = !1, Gc = Error(h(519));
  function re(t) {
    var l = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw nu(Nl(l, t)), Gc;
  }
  function _s(t) {
    var l = t.stateNode, e = t.type, a = t.memoizedProps;
    switch (l[Vt] = t, l[ul] = a, e) {
      case "dialog":
        I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Mu.length; e++)
          I(Mu[e], l);
        break;
      case "source":
        I("error", l);
        break;
      case "img":
      case "image":
      case "link":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "input":
        I("invalid", l), xf(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        I("invalid", l);
        break;
      case "textarea":
        I("invalid", l), Xf(l, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || Zr(l.textContent, e) ? (a.popover != null && (I("beforetoggle", l), I("toggle", l)), a.onScroll != null && I("scroll", l), a.onScrollEnd != null && I("scrollend", l), a.onClick != null && (l.onclick = Vl), l = !0) : l = !1, l || re(t, !0);
  }
  function Ns(t) {
    for (wt = t.return; wt; )
      switch (wt.tag) {
        case 5:
        case 31:
        case 13:
          Dl = !1;
          return;
        case 27:
        case 3:
          Dl = !0;
          return;
        default:
          wt = wt.return;
      }
  }
  function Sa(t) {
    if (t !== wt) return !1;
    if (!lt) return Ns(t), lt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || af(t.type, t.memoizedProps)), e = !e), e && St && re(t), Ns(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(317));
      St = Ir(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(317));
      St = Ir(t);
    } else
      l === 27 ? (l = St, _e(t.type) ? (t = sf, sf = null, St = t) : St = l) : St = wt ? Cl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function xe() {
    St = wt = null, lt = !1;
  }
  function Xc() {
    var t = oe;
    return t !== null && (sl === null ? sl = t : sl.push.apply(
      sl,
      t
    ), oe = null), t;
  }
  function nu(t) {
    oe === null ? oe = [t] : oe.push(t);
  }
  var Qc = r(null), Ge = null, kl = null;
  function de(t, l, e) {
    O(Qc, l._currentValue), l._currentValue = e;
  }
  function Wl(t) {
    t._currentValue = Qc.current, T(Qc);
  }
  function Lc(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Zc(t, l, e, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < l.length; f++)
            if (i.context === l[f]) {
              n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Lc(
                n.return,
                e,
                t
              ), a || (c = null);
              break t;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(h(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Lc(c, e, t), c = null;
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
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
  function Ea(t, l, e, a) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(h(387));
        if (c = c.memoizedProps, c !== null) {
          var i = u.type;
          ml(u.pendingProps.value, c.value) || (t !== null ? t.push(i) : t = [i]);
        }
      } else if (u === at.current) {
        if (c = u.alternate, c === null) throw Error(h(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Hu) : t = [Hu]);
      }
      u = u.return;
    }
    t !== null && Zc(
      l,
      t,
      e,
      a
    ), l.flags |= 262144;
  }
  function un(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ml(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Xe(t) {
    Ge = t, kl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Kt(t) {
    return Ms(Ge, t);
  }
  function nn(t, l) {
    return Ge === null && Xe(t), Ms(t, l);
  }
  function Ms(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, kl === null) {
      if (t === null) throw Error(h(308));
      kl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else kl = kl.next = l;
    return e;
  }
  var jm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, xm = d.unstable_scheduleCallback, Gm = d.unstable_NormalPriority, Ht = {
    $$typeof: At,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Vc() {
    return {
      controller: new jm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function cu(t) {
    t.refCount--, t.refCount === 0 && xm(Gm, function() {
      t.controller.abort();
    });
  }
  var iu = null, wc = 0, ba = 0, Ta = null;
  function Xm(t, l) {
    if (iu === null) {
      var e = iu = [];
      wc = 0, ba = ki(), Ta = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return wc++, l.then(Os, Os), l;
  }
  function Os() {
    if (--wc === 0 && iu !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var t = iu;
      iu = null, ba = 0, Ta = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Qm(t, l) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = l;
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var Ds = E.S;
  E.S = function(t, l) {
    mr = ll(), typeof l == "object" && l !== null && typeof l.then == "function" && Xm(t, l), Ds !== null && Ds(t, l);
  };
  var Qe = r(null);
  function Kc() {
    var t = Qe.current;
    return t !== null ? t : gt.pooledCache;
  }
  function cn(t, l) {
    l === null ? O(Qe, Qe.current) : O(Qe, l.pool);
  }
  function Us() {
    var t = Kc();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var za = Error(h(460)), Jc = Error(h(474)), fn = Error(h(542)), sn = { then: function() {
  } };
  function Cs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Hs(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Vl, Vl), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Bs(t), t;
      default:
        if (typeof l.status == "string") l.then(Vl, Vl);
        else {
          if (t = gt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(h(482));
          t = l, t.status = "pending", t.then(
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (l.status === "pending") {
                var u = l;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Bs(t), t;
        }
        throw Ze = l, za;
    }
  }
  function Le(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ze = e, za) : e;
    }
  }
  var Ze = null;
  function Rs() {
    if (Ze === null) throw Error(h(459));
    var t = Ze;
    return Ze = null, t;
  }
  function Bs(t) {
    if (t === za || t === fn)
      throw Error(h(483));
  }
  var Aa = null, fu = 0;
  function on(t) {
    var l = fu;
    return fu += 1, Aa === null && (Aa = []), Hs(Aa, t, l);
  }
  function su(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function rn(t, l) {
    throw l.$$typeof === ot ? Error(h(525)) : (t = Object.prototype.toString.call(l), Error(
      h(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function qs(t) {
    function l(m, o) {
      if (t) {
        var y = m.deletions;
        y === null ? (m.deletions = [o], m.flags |= 16) : y.push(o);
      }
    }
    function e(m, o) {
      if (!t) return null;
      for (; o !== null; )
        l(m, o), o = o.sibling;
      return null;
    }
    function a(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function u(m, o) {
      return m = Kl(m, o), m.index = 0, m.sibling = null, m;
    }
    function n(m, o, y) {
      return m.index = y, t ? (y = m.alternate, y !== null ? (y = y.index, y < o ? (m.flags |= 67108866, o) : y) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function c(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function i(m, o, y, b) {
      return o === null || o.tag !== 6 ? (o = qc(y, m.mode, b), o.return = m, o) : (o = u(o, y), o.return = m, o);
    }
    function f(m, o, y, b) {
      var Y = y.type;
      return Y === J ? S(
        m,
        o,
        y.props.children,
        b,
        y.key
      ) : o !== null && (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Zt && Le(Y) === o.type) ? (o = u(o, y.props), su(o, y), o.return = m, o) : (o = en(
        y.type,
        y.key,
        y.props,
        null,
        m.mode,
        b
      ), su(o, y), o.return = m, o);
    }
    function v(m, o, y, b) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = Yc(y, m.mode, b), o.return = m, o) : (o = u(o, y.children || []), o.return = m, o);
    }
    function S(m, o, y, b, Y) {
      return o === null || o.tag !== 7 ? (o = je(
        y,
        m.mode,
        b,
        Y
      ), o.return = m, o) : (o = u(o, y), o.return = m, o);
    }
    function z(m, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = qc(
          "" + o,
          m.mode,
          y
        ), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ot:
            return y = en(
              o.type,
              o.key,
              o.props,
              null,
              m.mode,
              y
            ), su(y, o), y.return = m, y;
          case Yt:
            return o = Yc(
              o,
              m.mode,
              y
            ), o.return = m, o;
          case Zt:
            return o = Le(o), z(m, o, y);
        }
        if (Tl(o) || Dt(o))
          return o = je(
            o,
            m.mode,
            y,
            null
          ), o.return = m, o;
        if (typeof o.then == "function")
          return z(m, on(o), y);
        if (o.$$typeof === At)
          return z(
            m,
            nn(m, o),
            y
          );
        rn(m, o);
      }
      return null;
    }
    function g(m, o, y, b) {
      var Y = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return Y !== null ? null : i(m, o, "" + y, b);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ot:
            return y.key === Y ? f(m, o, y, b) : null;
          case Yt:
            return y.key === Y ? v(m, o, y, b) : null;
          case Zt:
            return y = Le(y), g(m, o, y, b);
        }
        if (Tl(y) || Dt(y))
          return Y !== null ? null : S(m, o, y, b, null);
        if (typeof y.then == "function")
          return g(
            m,
            o,
            on(y),
            b
          );
        if (y.$$typeof === At)
          return g(
            m,
            o,
            nn(m, y),
            b
          );
        rn(m, y);
      }
      return null;
    }
    function p(m, o, y, b, Y) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return m = m.get(y) || null, i(o, m, "" + b, Y);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ot:
            return m = m.get(
              b.key === null ? y : b.key
            ) || null, f(o, m, b, Y);
          case Yt:
            return m = m.get(
              b.key === null ? y : b.key
            ) || null, v(o, m, b, Y);
          case Zt:
            return b = Le(b), p(
              m,
              o,
              y,
              b,
              Y
            );
        }
        if (Tl(b) || Dt(b))
          return m = m.get(y) || null, S(o, m, b, Y, null);
        if (typeof b.then == "function")
          return p(
            m,
            o,
            y,
            on(b),
            Y
          );
        if (b.$$typeof === At)
          return p(
            m,
            o,
            y,
            nn(o, b),
            Y
          );
        rn(o, b);
      }
      return null;
    }
    function R(m, o, y, b) {
      for (var Y = null, it = null, B = o, K = o = 0, tt = null; B !== null && K < y.length; K++) {
        B.index > K ? (tt = B, B = null) : tt = B.sibling;
        var ft = g(
          m,
          B,
          y[K],
          b
        );
        if (ft === null) {
          B === null && (B = tt);
          break;
        }
        t && B && ft.alternate === null && l(m, B), o = n(ft, o, K), it === null ? Y = ft : it.sibling = ft, it = ft, B = tt;
      }
      if (K === y.length)
        return e(m, B), lt && Jl(m, K), Y;
      if (B === null) {
        for (; K < y.length; K++)
          B = z(m, y[K], b), B !== null && (o = n(
            B,
            o,
            K
          ), it === null ? Y = B : it.sibling = B, it = B);
        return lt && Jl(m, K), Y;
      }
      for (B = a(B); K < y.length; K++)
        tt = p(
          B,
          m,
          K,
          y[K],
          b
        ), tt !== null && (t && tt.alternate !== null && B.delete(
          tt.key === null ? K : tt.key
        ), o = n(
          tt,
          o,
          K
        ), it === null ? Y = tt : it.sibling = tt, it = tt);
      return t && B.forEach(function(Ue) {
        return l(m, Ue);
      }), lt && Jl(m, K), Y;
    }
    function G(m, o, y, b) {
      if (y == null) throw Error(h(151));
      for (var Y = null, it = null, B = o, K = o = 0, tt = null, ft = y.next(); B !== null && !ft.done; K++, ft = y.next()) {
        B.index > K ? (tt = B, B = null) : tt = B.sibling;
        var Ue = g(m, B, ft.value, b);
        if (Ue === null) {
          B === null && (B = tt);
          break;
        }
        t && B && Ue.alternate === null && l(m, B), o = n(Ue, o, K), it === null ? Y = Ue : it.sibling = Ue, it = Ue, B = tt;
      }
      if (ft.done)
        return e(m, B), lt && Jl(m, K), Y;
      if (B === null) {
        for (; !ft.done; K++, ft = y.next())
          ft = z(m, ft.value, b), ft !== null && (o = n(ft, o, K), it === null ? Y = ft : it.sibling = ft, it = ft);
        return lt && Jl(m, K), Y;
      }
      for (B = a(B); !ft.done; K++, ft = y.next())
        ft = p(B, m, K, ft.value, b), ft !== null && (t && ft.alternate !== null && B.delete(ft.key === null ? K : ft.key), o = n(ft, o, K), it === null ? Y = ft : it.sibling = ft, it = ft);
      return t && B.forEach(function(Ih) {
        return l(m, Ih);
      }), lt && Jl(m, K), Y;
    }
    function vt(m, o, y, b) {
      if (typeof y == "object" && y !== null && y.type === J && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ot:
            t: {
              for (var Y = y.key; o !== null; ) {
                if (o.key === Y) {
                  if (Y = y.type, Y === J) {
                    if (o.tag === 7) {
                      e(
                        m,
                        o.sibling
                      ), b = u(
                        o,
                        y.props.children
                      ), b.return = m, m = b;
                      break t;
                    }
                  } else if (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Zt && Le(Y) === o.type) {
                    e(
                      m,
                      o.sibling
                    ), b = u(o, y.props), su(b, y), b.return = m, m = b;
                    break t;
                  }
                  e(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              y.type === J ? (b = je(
                y.props.children,
                m.mode,
                b,
                y.key
              ), b.return = m, m = b) : (b = en(
                y.type,
                y.key,
                y.props,
                null,
                m.mode,
                b
              ), su(b, y), b.return = m, m = b);
            }
            return c(m);
          case Yt:
            t: {
              for (Y = y.key; o !== null; ) {
                if (o.key === Y)
                  if (o.tag === 4 && o.stateNode.containerInfo === y.containerInfo && o.stateNode.implementation === y.implementation) {
                    e(
                      m,
                      o.sibling
                    ), b = u(o, y.children || []), b.return = m, m = b;
                    break t;
                  } else {
                    e(m, o);
                    break;
                  }
                else l(m, o);
                o = o.sibling;
              }
              b = Yc(y, m.mode, b), b.return = m, m = b;
            }
            return c(m);
          case Zt:
            return y = Le(y), vt(
              m,
              o,
              y,
              b
            );
        }
        if (Tl(y))
          return R(
            m,
            o,
            y,
            b
          );
        if (Dt(y)) {
          if (Y = Dt(y), typeof Y != "function") throw Error(h(150));
          return y = Y.call(y), G(
            m,
            o,
            y,
            b
          );
        }
        if (typeof y.then == "function")
          return vt(
            m,
            o,
            on(y),
            b
          );
        if (y.$$typeof === At)
          return vt(
            m,
            o,
            nn(m, y),
            b
          );
        rn(m, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (e(m, o.sibling), b = u(o, y), b.return = m, m = b) : (e(m, o), b = qc(y, m.mode, b), b.return = m, m = b), c(m)) : e(m, o);
    }
    return function(m, o, y, b) {
      try {
        fu = 0;
        var Y = vt(
          m,
          o,
          y,
          b
        );
        return Aa = null, Y;
      } catch (B) {
        if (B === za || B === fn) throw B;
        var it = hl(29, B, null, m.mode);
        return it.lanes = b, it.return = m, it;
      }
    };
  }
  var Ve = qs(!0), Ys = qs(!1), me = !1;
  function kc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function he(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ye(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (st & 2) !== 0) {
      var u = a.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l, l = ln(t), Ss(t, null, e), l;
    }
    return tn(t, a, l, e), ln(t);
  }
  function ou(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Mf(t, e);
    }
  }
  function $c(t, l) {
    var e = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Fc = !1;
  function ru() {
    if (Fc) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function du(t, l, e, a) {
    Fc = !1;
    var u = t.updateQueue;
    me = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i, v = f.next;
      f.next = null, c === null ? n = v : c.next = v, c = f;
      var S = t.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== c && (i === null ? S.firstBaseUpdate = v : i.next = v, S.lastBaseUpdate = f));
    }
    if (n !== null) {
      var z = u.baseState;
      c = 0, S = v = f = null, i = n;
      do {
        var g = i.lane & -536870913, p = g !== i.lane;
        if (p ? (P & g) === g : (a & g) === g) {
          g !== 0 && g === ba && (Fc = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          t: {
            var R = t, G = i;
            g = l;
            var vt = e;
            switch (G.tag) {
              case 1:
                if (R = G.payload, typeof R == "function") {
                  z = R.call(vt, z, g);
                  break t;
                }
                z = R;
                break t;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = G.payload, g = typeof R == "function" ? R.call(vt, z, g) : R, g == null) break t;
                z = C({}, z, g);
                break t;
              case 2:
                me = !0;
            }
          }
          g = i.callback, g !== null && (t.flags |= 64, p && (t.flags |= 8192), p = u.callbacks, p === null ? u.callbacks = [g] : p.push(g));
        } else
          p = {
            lane: g,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (v = S = p, f = z) : S = S.next = p, c |= g;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null)
            break;
          p = i, i = p.next, p.next = null, u.lastBaseUpdate = p, u.shared.pending = null;
        }
      } while (!0);
      S === null && (f = z), u.baseState = f, u.firstBaseUpdate = v, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), Ee |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function js(t, l) {
    if (typeof t != "function")
      throw Error(h(191, t));
    t.call(l);
  }
  function xs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        js(e[t], l);
  }
  var _a = r(null), dn = r(0);
  function Gs(t, l) {
    t = ue, O(dn, t), O(_a, l), ue = t | l.baseLanes;
  }
  function Ic() {
    O(dn, ue), O(_a, _a.current);
  }
  function Pc() {
    ue = dn.current, T(_a), T(dn);
  }
  var yl = r(null), Ul = null;
  function ve(t) {
    var l = t.alternate;
    O(Nt, Nt.current & 1), O(yl, t), Ul === null && (l === null || _a.current !== null || l.memoizedState !== null) && (Ul = t);
  }
  function ti(t) {
    O(Nt, Nt.current), O(yl, t), Ul === null && (Ul = t);
  }
  function Xs(t) {
    t.tag === 22 ? (O(Nt, Nt.current), O(yl, t), Ul === null && (Ul = t)) : ge();
  }
  function ge() {
    O(Nt, Nt.current), O(yl, yl.current);
  }
  function vl(t) {
    T(yl), Ul === t && (Ul = null), T(Nt);
  }
  var Nt = r(0);
  function mn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || cf(e) || ff(e)))
          return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var $l = 0, V = null, ht = null, Rt = null, hn = !1, Na = !1, we = !1, yn = 0, mu = 0, Ma = null, Lm = 0;
  function Tt() {
    throw Error(h(321));
  }
  function li(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ml(t[e], l[e])) return !1;
    return !0;
  }
  function ei(t, l, e, a, u, n) {
    return $l = n, V = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, E.H = t === null || t.memoizedState === null ? Ao : gi, we = !1, n = e(a, u), we = !1, Na && (n = Ls(
      l,
      e,
      a,
      u
    )), Qs(t), n;
  }
  function Qs(t) {
    E.H = vu;
    var l = ht !== null && ht.next !== null;
    if ($l = 0, Rt = ht = V = null, hn = !1, mu = 0, Ma = null, l) throw Error(h(300));
    t === null || Bt || (t = t.dependencies, t !== null && un(t) && (Bt = !0));
  }
  function Ls(t, l, e, a) {
    V = t;
    var u = 0;
    do {
      if (Na && (Ma = null), mu = 0, Na = !1, 25 <= u) throw Error(h(301));
      if (u += 1, Rt = ht = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = _o, n = l(e, a);
    } while (Na);
    return n;
  }
  function Zm() {
    var t = E.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? hu(l) : l, t = t.useState()[0], (ht !== null ? ht.memoizedState : null) !== t && (V.flags |= 1024), l;
  }
  function ai() {
    var t = yn !== 0;
    return yn = 0, t;
  }
  function ui(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function ni(t) {
    if (hn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      hn = !1;
    }
    $l = 0, Rt = ht = V = null, Na = !1, mu = yn = 0, Ma = null;
  }
  function el() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Rt === null ? V.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
  }
  function Mt() {
    if (ht === null) {
      var t = V.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var l = Rt === null ? V.memoizedState : Rt.next;
    if (l !== null)
      Rt = l, ht = t;
    else {
      if (t === null)
        throw V.alternate === null ? Error(h(467)) : Error(h(310));
      ht = t, t = {
        memoizedState: ht.memoizedState,
        baseState: ht.baseState,
        baseQueue: ht.baseQueue,
        queue: ht.queue,
        next: null
      }, Rt === null ? V.memoizedState = Rt = t : Rt = Rt.next = t;
    }
    return Rt;
  }
  function vn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hu(t) {
    var l = mu;
    return mu += 1, Ma === null && (Ma = []), t = Hs(Ma, t, l), l = V, (Rt === null ? l.memoizedState : Rt.next) === null && (l = l.alternate, E.H = l === null || l.memoizedState === null ? Ao : gi), t;
  }
  function gn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return hu(t);
      if (t.$$typeof === At) return Kt(t);
    }
    throw Error(h(438, String(t)));
  }
  function ci(t) {
    var l = null, e = V.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = vn(), V.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
        e[a] = Ql;
    return l.index++, e;
  }
  function Fl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function pn(t) {
    var l = Mt();
    return ii(l, ht, t);
  }
  function ii(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = e;
    var u = t.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      l.baseQueue = u = n, a.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var i = c = null, f = null, v = l, S = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? (P & z) === z : ($l & z) === z) {
          var g = v.revertLane;
          if (g === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), z === ba && (S = !0);
          else if (($l & g) === g) {
            v = v.next, g === ba && (S = !0);
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
            }, f === null ? (i = f = z, c = n) : f = f.next = z, V.lanes |= g, Ee |= g;
          z = v.action, we && e(n, z), n = v.hasEagerState ? v.eagerState : e(n, z);
        } else
          g = {
            lane: z,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, f === null ? (i = f = g, c = n) : f = f.next = g, V.lanes |= z, Ee |= z;
        v = v.next;
      } while (v !== null && v !== l);
      if (f === null ? c = n : f.next = i, !ml(n, t.memoizedState) && (Bt = !0, S && (e = Ta, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = c, t.baseQueue = f, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function fi(t) {
    var l = Mt(), e = l.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch, u = e.pending, n = l.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = t(n, c.action), c = c.next;
      while (c !== u);
      ml(n, l.memoizedState) || (Bt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function Zs(t, l, e) {
    var a = V, u = Mt(), n = lt;
    if (n) {
      if (e === void 0) throw Error(h(407));
      e = e();
    } else e = l();
    var c = !ml(
      (ht || u).memoizedState,
      e
    );
    if (c && (u.memoizedState = e, Bt = !0), u = u.queue, ri(Ks.bind(null, a, u, t), [
      t
    ]), u.getSnapshot !== l || c || Rt !== null && Rt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        ws.bind(
          null,
          a,
          u,
          e,
          l
        ),
        null
      ), gt === null) throw Error(h(349));
      n || ($l & 127) !== 0 || Vs(a, l, e);
    }
    return e;
  }
  function Vs(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = V.updateQueue, l === null ? (l = vn(), V.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function ws(t, l, e, a) {
    l.value = e, l.getSnapshot = a, Js(l) && ks(t);
  }
  function Ks(t, l, e) {
    return e(function() {
      Js(l) && ks(t);
    });
  }
  function Js(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ml(t, e);
    } catch {
      return !0;
    }
  }
  function ks(t) {
    var l = Ye(t, 2);
    l !== null && ol(l, t, 2);
  }
  function si(t) {
    var l = el();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), we) {
        Yl(!0);
        try {
          e();
        } finally {
          Yl(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fl,
      lastRenderedState: t
    }, l;
  }
  function Ws(t, l, e, a) {
    return t.baseState = e, ii(
      t,
      ht,
      typeof a == "function" ? a : Fl
    );
  }
  function Vm(t, l, e, a, u) {
    if (bn(t)) throw Error(h(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
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
      E.T !== null ? e(!0) : n.isTransition = !1, a(n), e = l.pending, e === null ? (n.next = l.pending = n, $s(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function $s(t, l) {
    var e = l.action, a = l.payload, u = t.state;
    if (l.isTransition) {
      var n = E.T, c = {};
      E.T = c;
      try {
        var i = e(u, a), f = E.S;
        f !== null && f(c, i), Fs(t, l, i);
      } catch (v) {
        oi(t, l, v);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), E.T = n;
      }
    } else
      try {
        n = e(u, a), Fs(t, l, n);
      } catch (v) {
        oi(t, l, v);
      }
  }
  function Fs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        Is(t, l, a);
      },
      function(a) {
        return oi(t, l, a);
      }
    ) : Is(t, l, e);
  }
  function Is(t, l, e) {
    l.status = "fulfilled", l.value = e, Ps(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, $s(t, e)));
  }
  function oi(t, l, e) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        l.status = "rejected", l.reason = e, Ps(l), l = l.next;
      while (l !== a);
    }
    t.action = null;
  }
  function Ps(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function to(t, l) {
    return l;
  }
  function lo(t, l) {
    if (lt) {
      var e = gt.formState;
      if (e !== null) {
        t: {
          var a = V;
          if (lt) {
            if (St) {
              l: {
                for (var u = St, n = Dl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = Cl(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                St = Cl(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            re(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return e = el(), e.memoizedState = e.baseState = l, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: to,
      lastRenderedState: l
    }, e.queue = a, e = bo.bind(
      null,
      V,
      a
    ), a.dispatch = e, a = si(!1), n = vi.bind(
      null,
      V,
      !1,
      a.queue
    ), a = el(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, e = Vm.bind(
      null,
      V,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = t, [l, e, !1];
  }
  function eo(t) {
    var l = Mt();
    return ao(l, ht, t);
  }
  function ao(t, l, e) {
    if (l = ii(
      t,
      l,
      to
    )[0], t = pn(Fl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var a = hu(l);
      } catch (c) {
        throw c === za ? fn : c;
      }
    else a = l;
    l = Mt();
    var u = l.queue, n = u.dispatch;
    return e !== l.memoizedState && (V.flags |= 2048, Oa(
      9,
      { destroy: void 0 },
      wm.bind(null, u, e),
      null
    )), [a, n, t];
  }
  function wm(t, l) {
    t.action = l;
  }
  function uo(t) {
    var l = Mt(), e = ht;
    if (e !== null)
      return ao(l, e, t);
    Mt(), l = l.memoizedState, e = Mt();
    var a = e.queue.dispatch;
    return e.memoizedState = t, [l, a, !1];
  }
  function Oa(t, l, e, a) {
    return t = { tag: t, create: e, deps: a, inst: l, next: null }, l = V.updateQueue, l === null && (l = vn(), V.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
  }
  function no() {
    return Mt().memoizedState;
  }
  function Sn(t, l, e, a) {
    var u = el();
    V.flags |= t, u.memoizedState = Oa(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function En(t, l, e, a) {
    var u = Mt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ht !== null && a !== null && li(a, ht.memoizedState.deps) ? u.memoizedState = Oa(l, n, e, a) : (V.flags |= t, u.memoizedState = Oa(
      1 | l,
      n,
      e,
      a
    ));
  }
  function co(t, l) {
    Sn(8390656, 8, t, l);
  }
  function ri(t, l) {
    En(2048, 8, t, l);
  }
  function Km(t) {
    V.flags |= 4;
    var l = V.updateQueue;
    if (l === null)
      l = vn(), V.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function io(t) {
    var l = Mt().memoizedState;
    return Km({ ref: l, nextImpl: t }), function() {
      if ((st & 2) !== 0) throw Error(h(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function fo(t, l) {
    return En(4, 2, t, l);
  }
  function so(t, l) {
    return En(4, 4, t, l);
  }
  function oo(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function ro(t, l, e) {
    e = e != null ? e.concat([t]) : null, En(4, 4, oo.bind(null, l, t), e);
  }
  function di() {
  }
  function mo(t, l) {
    var e = Mt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && li(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t);
  }
  function ho(t, l) {
    var e = Mt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && li(l, a[1]))
      return a[0];
    if (a = t(), we) {
      Yl(!0);
      try {
        t();
      } finally {
        Yl(!1);
      }
    }
    return e.memoizedState = [a, l], a;
  }
  function mi(t, l, e) {
    return e === void 0 || ($l & 1073741824) !== 0 && (P & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = yr(), V.lanes |= t, Ee |= t, e);
  }
  function yo(t, l, e, a) {
    return ml(e, l) ? e : _a.current !== null ? (t = mi(t, e, a), ml(t, l) || (Bt = !0), t) : ($l & 42) === 0 || ($l & 1073741824) !== 0 && (P & 261930) === 0 ? (Bt = !0, t.memoizedState = e) : (t = yr(), V.lanes |= t, Ee |= t, l);
  }
  function vo(t, l, e, a, u) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var c = E.T, i = {};
    E.T = i, vi(t, !1, l, e);
    try {
      var f = u(), v = E.S;
      if (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = Qm(
          f,
          a
        );
        yu(
          t,
          l,
          S,
          Sl(t)
        );
      } else
        yu(
          t,
          l,
          a,
          Sl(t)
        );
    } catch (z) {
      yu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: z },
        Sl()
      );
    } finally {
      D.p = n, c !== null && i.types !== null && (c.types = i.types), E.T = c;
    }
  }
  function Jm() {
  }
  function hi(t, l, e, a) {
    if (t.tag !== 5) throw Error(h(476));
    var u = go(t).queue;
    vo(
      t,
      u,
      l,
      x,
      e === null ? Jm : function() {
        return po(t), e(a);
      }
    );
  }
  function go(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: x,
      baseState: x,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fl,
        lastRenderedState: x
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fl,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function po(t) {
    var l = go(t);
    l.next === null && (l = t.alternate.memoizedState), yu(
      t,
      l.next.queue,
      {},
      Sl()
    );
  }
  function yi() {
    return Kt(Hu);
  }
  function So() {
    return Mt().memoizedState;
  }
  function Eo() {
    return Mt().memoizedState;
  }
  function km(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Sl();
          t = he(e);
          var a = ye(l, t, e);
          a !== null && (ol(a, l, e), ou(a, l, e)), l = { cache: Vc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Wm(t, l, e) {
    var a = Sl();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bn(t) ? To(l, e) : (e = Rc(t, l, e, a), e !== null && (ol(e, t, a), zo(e, l, a)));
  }
  function bo(t, l, e) {
    var a = Sl();
    yu(t, l, e, a);
  }
  function yu(t, l, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bn(t)) To(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var c = l.lastRenderedState, i = n(c, e);
          if (u.hasEagerState = !0, u.eagerState = i, ml(i, c))
            return tn(t, l, u, 0), gt === null && Pu(), !1;
        } catch {
        }
      if (e = Rc(t, l, u, a), e !== null)
        return ol(e, t, a), zo(e, l, a), !0;
    }
    return !1;
  }
  function vi(t, l, e, a) {
    if (a = {
      lane: 2,
      revertLane: ki(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bn(t)) {
      if (l) throw Error(h(479));
    } else
      l = Rc(
        t,
        e,
        a,
        2
      ), l !== null && ol(l, t, 2);
  }
  function bn(t) {
    var l = t.alternate;
    return t === V || l !== null && l === V;
  }
  function To(t, l) {
    Na = hn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function zo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      a &= t.pendingLanes, e |= a, l.lanes = e, Mf(t, e);
    }
  }
  var vu = {
    readContext: Kt,
    use: gn,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useLayoutEffect: Tt,
    useInsertionEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    useHostTransitionStatus: Tt,
    useFormState: Tt,
    useActionState: Tt,
    useOptimistic: Tt,
    useMemoCache: Tt,
    useCacheRefresh: Tt
  };
  vu.useEffectEvent = Tt;
  var Ao = {
    readContext: Kt,
    use: gn,
    useCallback: function(t, l) {
      return el().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Kt,
    useEffect: co,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Sn(
        4194308,
        4,
        oo.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Sn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Sn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = el();
      l = l === void 0 ? null : l;
      var a = t();
      if (we) {
        Yl(!0);
        try {
          t();
        } finally {
          Yl(!1);
        }
      }
      return e.memoizedState = [a, l], a;
    },
    useReducer: function(t, l, e) {
      var a = el();
      if (e !== void 0) {
        var u = e(l);
        if (we) {
          Yl(!0);
          try {
            e(l);
          } finally {
            Yl(!1);
          }
        }
      } else u = l;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = Wm.bind(
        null,
        V,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var l = el();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = si(t);
      var l = t.queue, e = bo.bind(null, V, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: di,
    useDeferredValue: function(t, l) {
      var e = el();
      return mi(e, t, l);
    },
    useTransition: function() {
      var t = si(!1);
      return t = vo.bind(
        null,
        V,
        t.queue,
        !0,
        !1
      ), el().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var a = V, u = el();
      if (lt) {
        if (e === void 0)
          throw Error(h(407));
        e = e();
      } else {
        if (e = l(), gt === null)
          throw Error(h(349));
        (P & 127) !== 0 || Vs(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return u.queue = n, co(Ks.bind(null, a, n, t), [
        t
      ]), a.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        ws.bind(
          null,
          a,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = el(), l = gt.identifierPrefix;
      if (lt) {
        var e = xl, a = jl;
        e = (a & ~(1 << 32 - dl(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = yn++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Lm++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: yi,
    useFormState: lo,
    useActionState: lo,
    useOptimistic: function(t) {
      var l = el();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = vi.bind(
        null,
        V,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: ci,
    useCacheRefresh: function() {
      return el().memoizedState = km.bind(
        null,
        V
      );
    },
    useEffectEvent: function(t) {
      var l = el(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((st & 2) !== 0)
          throw Error(h(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, gi = {
    readContext: Kt,
    use: gn,
    useCallback: mo,
    useContext: Kt,
    useEffect: ri,
    useImperativeHandle: ro,
    useInsertionEffect: fo,
    useLayoutEffect: so,
    useMemo: ho,
    useReducer: pn,
    useRef: no,
    useState: function() {
      return pn(Fl);
    },
    useDebugValue: di,
    useDeferredValue: function(t, l) {
      var e = Mt();
      return yo(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = pn(Fl)[0], l = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : hu(t),
        l
      ];
    },
    useSyncExternalStore: Zs,
    useId: So,
    useHostTransitionStatus: yi,
    useFormState: eo,
    useActionState: eo,
    useOptimistic: function(t, l) {
      var e = Mt();
      return Ws(e, ht, t, l);
    },
    useMemoCache: ci,
    useCacheRefresh: Eo
  };
  gi.useEffectEvent = io;
  var _o = {
    readContext: Kt,
    use: gn,
    useCallback: mo,
    useContext: Kt,
    useEffect: ri,
    useImperativeHandle: ro,
    useInsertionEffect: fo,
    useLayoutEffect: so,
    useMemo: ho,
    useReducer: fi,
    useRef: no,
    useState: function() {
      return fi(Fl);
    },
    useDebugValue: di,
    useDeferredValue: function(t, l) {
      var e = Mt();
      return ht === null ? mi(e, t, l) : yo(
        e,
        ht.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = fi(Fl)[0], l = Mt().memoizedState;
      return [
        typeof t == "boolean" ? t : hu(t),
        l
      ];
    },
    useSyncExternalStore: Zs,
    useId: So,
    useHostTransitionStatus: yi,
    useFormState: uo,
    useActionState: uo,
    useOptimistic: function(t, l) {
      var e = Mt();
      return ht !== null ? Ws(e, ht, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: ci,
    useCacheRefresh: Eo
  };
  _o.useEffectEvent = io;
  function pi(t, l, e, a) {
    l = t.memoizedState, e = e(a, l), e = e == null ? l : C({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Si = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var a = Sl(), u = he(a);
      u.payload = l, e != null && (u.callback = e), l = ye(t, u, a), l !== null && (ol(l, t, a), ou(l, t, a));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var a = Sl(), u = he(a);
      u.tag = 1, u.payload = l, e != null && (u.callback = e), l = ye(t, u, a), l !== null && (ol(l, t, a), ou(l, t, a));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Sl(), a = he(e);
      a.tag = 2, l != null && (a.callback = l), l = ye(t, a, e), l !== null && (ol(l, t, e), ou(l, t, e));
    }
  };
  function No(t, l, e, a, u, n, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, n, c) : l.prototype && l.prototype.isPureReactComponent ? !eu(e, a) || !eu(u, n) : !0;
  }
  function Mo(t, l, e, a) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Si.enqueueReplaceState(l, l.state, null);
  }
  function Ke(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l)
        a !== "ref" && (e[a] = l[a]);
    }
    if (t = t.defaultProps) {
      e === l && (e = C({}, e));
      for (var u in t)
        e[u] === void 0 && (e[u] = t[u]);
    }
    return e;
  }
  function Oo(t) {
    Iu(t);
  }
  function Do(t) {
    console.error(t);
  }
  function Uo(t) {
    Iu(t);
  }
  function Tn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Co(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Ei(t, l, e) {
    return e = he(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Tn(t, l);
    }, e;
  }
  function Ho(t) {
    return t = he(t), t.tag = 3, t;
  }
  function Ro(t, l, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        Co(l, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      Co(l, e, a), typeof u != "function" && (be === null ? be = /* @__PURE__ */ new Set([this]) : be.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function $m(t, l, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (l = e.alternate, l !== null && Ea(
        l,
        e,
        u,
        !0
      ), e = yl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Ul === null ? Bn() : e.alternate === null && zt === 0 && (zt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === sn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), wi(t, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === sn ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), wi(t, a, u)), !1;
        }
        throw Error(h(435, e.tag));
      }
      return wi(t, a, u), Bn(), !1;
    }
    if (lt)
      return l = yl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, a !== Gc && (t = Error(h(422), { cause: a }), nu(Nl(t, e)))) : (a !== Gc && (l = Error(h(423), {
        cause: a
      }), nu(
        Nl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = Nl(a, e), u = Ei(
        t.stateNode,
        a,
        u
      ), $c(t, u), zt !== 4 && (zt = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = Nl(n, e), Au === null ? Au = [n] : Au.push(n), zt !== 4 && (zt = 2), l === null) return !0;
    a = Nl(a, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = u & -u, e.lanes |= t, t = Ei(e.stateNode, a, t), $c(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (be === null || !be.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Ho(u), Ro(
              u,
              t,
              e,
              a
            ), $c(e, u), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var bi = Error(h(461)), Bt = !1;
  function Jt(t, l, e, a) {
    l.child = t === null ? Ys(l, null, e, a) : Ve(
      l,
      t.child,
      e,
      a
    );
  }
  function Bo(t, l, e, a, u) {
    e = e.render;
    var n = l.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a)
        i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return Xe(l), a = ei(
      t,
      l,
      e,
      c,
      n,
      u
    ), i = ai(), t !== null && !Bt ? (ui(t, l, u), Il(t, l, u)) : (lt && i && jc(l), l.flags |= 1, Jt(t, l, a, u), l.child);
  }
  function qo(t, l, e, a, u) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Bc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Yo(
        t,
        l,
        n,
        a,
        u
      )) : (t = en(
        e.type,
        null,
        a,
        l,
        l.mode,
        u
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Di(t, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : eu, e(c, a) && t.ref === l.ref)
        return Il(t, l, u);
    }
    return l.flags |= 1, t = Kl(n, a), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Yo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (eu(n, a) && t.ref === l.ref)
        if (Bt = !1, l.pendingProps = a = n, Di(t, u))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else
          return l.lanes = t.lanes, Il(t, l, u);
    }
    return Ti(
      t,
      l,
      e,
      a,
      u
    );
  }
  function jo(t, l, e, a) {
    var u = a.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, l.child = null;
        return xo(
          t,
          l,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && cn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? Gs(l, n) : Ic(), Xs(l);
      else
        return a = l.lanes = 536870912, xo(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (cn(l, n.cachePool), Gs(l, n), ge(), l.memoizedState = null) : (t !== null && cn(l, null), Ic(), ge());
    return Jt(t, l, u, e), l.child;
  }
  function gu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function xo(t, l, e, a, u) {
    var n = Kc();
    return n = n === null ? null : { parent: Ht._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && cn(l, null), Ic(), Xs(l), t !== null && Ea(t, l, a, !0), l.childLanes = u, null;
  }
  function zn(t, l) {
    return l = _n(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Go(t, l, e) {
    return Ve(l, t.child, null, e), t = zn(l, l.pendingProps), t.flags |= 2, vl(l), l.memoizedState = null, t;
  }
  function Fm(t, l, e) {
    var a = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (lt) {
        if (a.mode === "hidden")
          return t = zn(l, a), l.lanes = 536870912, gu(null, t);
        if (ti(l), (t = St) ? (t = Fr(
          t,
          Dl
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: se !== null ? { id: jl, overflow: xl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = bs(t), e.return = l, l.child = e, wt = l, St = null)) : t = null, t === null) throw re(l);
        return l.lanes = 536870912, null;
      }
      return zn(l, a);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (ti(l), u)
        if (l.flags & 256)
          l.flags &= -257, l = Go(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(h(558));
      else if (Bt || Ea(t, l, e, !1), u = (e & t.childLanes) !== 0, Bt || u) {
        if (a = gt, a !== null && (c = Of(a, e), c !== 0 && c !== n.retryLane))
          throw n.retryLane = c, Ye(t, c), ol(a, t, c), bi;
        Bn(), l = Go(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, St = Cl(c.nextSibling), wt = l, lt = !0, oe = null, Dl = !1, t !== null && As(l, t), l = zn(l, a), l.flags |= 4096;
      return l;
    }
    return t = Kl(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function An(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(h(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Ti(t, l, e, a, u) {
    return Xe(l), e = ei(
      t,
      l,
      e,
      a,
      void 0,
      u
    ), a = ai(), t !== null && !Bt ? (ui(t, l, u), Il(t, l, u)) : (lt && a && jc(l), l.flags |= 1, Jt(t, l, e, u), l.child);
  }
  function Xo(t, l, e, a, u, n) {
    return Xe(l), l.updateQueue = null, e = Ls(
      l,
      a,
      e,
      u
    ), Qs(t), a = ai(), t !== null && !Bt ? (ui(t, l, n), Il(t, l, n)) : (lt && a && jc(l), l.flags |= 1, Jt(t, l, e, n), l.child);
  }
  function Qo(t, l, e, a, u) {
    if (Xe(l), l.stateNode === null) {
      var n = va, c = e.contextType;
      typeof c == "object" && c !== null && (n = Kt(c)), n = new e(a, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Si, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = a, n.state = l.memoizedState, n.refs = {}, kc(l), c = e.contextType, n.context = typeof c == "object" && c !== null ? Kt(c) : va, n.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (pi(
        l,
        e,
        c,
        a
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && Si.enqueueReplaceState(n, n.state, null), du(l, a, n, u), ru(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !0;
    } else if (t === null) {
      n = l.stateNode;
      var i = l.memoizedProps, f = Ke(e, i);
      n.props = f;
      var v = n.context, S = e.contextType;
      c = va, typeof S == "object" && S !== null && (c = Kt(S));
      var z = e.getDerivedStateFromProps;
      S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = l.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && Mo(
        l,
        n,
        a,
        c
      ), me = !1;
      var g = l.memoizedState;
      n.state = g, du(l, a, n, u), ru(), v = l.memoizedState, i || g !== v || me ? (typeof z == "function" && (pi(
        l,
        e,
        z,
        a
      ), v = l.memoizedState), (f = me || No(
        l,
        e,
        f,
        a,
        g,
        v,
        c
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = v), n.props = a, n.state = v, n.context = c, a = f) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), a = !1);
    } else {
      n = l.stateNode, Wc(t, l), c = l.memoizedProps, S = Ke(e, c), n.props = S, z = l.pendingProps, g = n.context, v = e.contextType, f = va, typeof v == "object" && v !== null && (f = Kt(v)), i = e.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== z || g !== f) && Mo(
        l,
        n,
        a,
        f
      ), me = !1, g = l.memoizedState, n.state = g, du(l, a, n, u), ru();
      var p = l.memoizedState;
      c !== z || g !== p || me || t !== null && t.dependencies !== null && un(t.dependencies) ? (typeof i == "function" && (pi(
        l,
        e,
        i,
        a
      ), p = l.memoizedState), (S = me || No(
        l,
        e,
        S,
        a,
        g,
        p,
        f
      ) || t !== null && t.dependencies !== null && un(t.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, p, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        p,
        f
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = p), n.props = a, n.state = p, n.context = f, a = S) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), a = !1);
    }
    return n = a, An(t, l), a = (l.flags & 128) !== 0, n || a ? (n = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && a ? (l.child = Ve(
      l,
      t.child,
      null,
      u
    ), l.child = Ve(
      l,
      null,
      e,
      u
    )) : Jt(t, l, e, u), l.memoizedState = n.state, t = l.child) : t = Il(
      t,
      l,
      u
    ), t;
  }
  function Lo(t, l, e, a) {
    return xe(), l.flags |= 256, Jt(t, l, e, a), l.child;
  }
  var zi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ai(t) {
    return { baseLanes: t, cachePool: Us() };
  }
  function _i(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= pl), t;
  }
  function Zo(t, l, e) {
    var a = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, c;
    if ((c = n) || (c = t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0), c && (u = !0, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (lt) {
        if (u ? ve(l) : ge(), (t = St) ? (t = Fr(
          t,
          Dl
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: se !== null ? { id: jl, overflow: xl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = bs(t), e.return = l, l.child = e, wt = l, St = null)) : t = null, t === null) throw re(l);
        return ff(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var i = a.children;
      return a = a.fallback, u ? (ge(), u = l.mode, i = _n(
        { mode: "hidden", children: i },
        u
      ), a = je(
        a,
        u,
        e,
        null
      ), i.return = l, a.return = l, i.sibling = a, l.child = i, a = l.child, a.memoizedState = Ai(e), a.childLanes = _i(
        t,
        c,
        e
      ), l.memoizedState = zi, gu(null, a)) : (ve(l), Ni(l, i));
    }
    var f = t.memoizedState;
    if (f !== null && (i = f.dehydrated, i !== null)) {
      if (n)
        l.flags & 256 ? (ve(l), l.flags &= -257, l = Mi(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (ge(), l.child = t.child, l.flags |= 128, l = null) : (ge(), i = a.fallback, u = l.mode, a = _n(
          { mode: "visible", children: a.children },
          u
        ), i = je(
          i,
          u,
          e,
          null
        ), i.flags |= 2, a.return = l, i.return = l, a.sibling = i, l.child = a, Ve(
          l,
          t.child,
          null,
          e
        ), a = l.child, a.memoizedState = Ai(e), a.childLanes = _i(
          t,
          c,
          e
        ), l.memoizedState = zi, l = gu(null, a));
      else if (ve(l), ff(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
        c = v, a = Error(h(419)), a.stack = "", a.digest = c, nu({ value: a, source: null, stack: null }), l = Mi(
          t,
          l,
          e
        );
      } else if (Bt || Ea(t, l, e, !1), c = (e & t.childLanes) !== 0, Bt || c) {
        if (c = gt, c !== null && (a = Of(c, e), a !== 0 && a !== f.retryLane))
          throw f.retryLane = a, Ye(t, a), ol(c, t, a), bi;
        cf(i) || Bn(), l = Mi(
          t,
          l,
          e
        );
      } else
        cf(i) ? (l.flags |= 192, l.child = t.child, l = null) : (t = f.treeContext, St = Cl(
          i.nextSibling
        ), wt = l, lt = !0, oe = null, Dl = !1, t !== null && As(l, t), l = Ni(
          l,
          a.children
        ), l.flags |= 4096);
      return l;
    }
    return u ? (ge(), i = a.fallback, u = l.mode, f = t.child, v = f.sibling, a = Kl(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? i = Kl(
      v,
      i
    ) : (i = je(
      i,
      u,
      e,
      null
    ), i.flags |= 2), i.return = l, a.return = l, a.sibling = i, l.child = a, gu(null, a), a = l.child, i = t.child.memoizedState, i === null ? i = Ai(e) : (u = i.cachePool, u !== null ? (f = Ht._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Us(), i = {
      baseLanes: i.baseLanes | e,
      cachePool: u
    }), a.memoizedState = i, a.childLanes = _i(
      t,
      c,
      e
    ), l.memoizedState = zi, gu(t.child, a)) : (ve(l), e = t.child, t = e.sibling, e = Kl(e, {
      mode: "visible",
      children: a.children
    }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Ni(t, l) {
    return l = _n(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function _n(t, l) {
    return t = hl(22, t, null, l), t.lanes = 0, t;
  }
  function Mi(t, l, e) {
    return Ve(l, t.child, null, e), t = Ni(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Vo(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l), Lc(t.return, l, e);
  }
  function Oi(t, l, e, a, u, n) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
  }
  function wo(t, l, e) {
    var a = l.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var c = Nt.current, i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, O(Nt, c), Jt(t, l, a, e), a = lt ? uu : 0, !i && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Vo(t, e, l);
        else if (t.tag === 19)
          Vo(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (e = l.child, u = null; e !== null; )
          t = e.alternate, t !== null && mn(t) === null && (u = e), e = e.sibling;
        e = u, e === null ? (u = l.child, l.child = null) : (u = e.sibling, e.sibling = null), Oi(
          l,
          !1,
          u,
          e,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && mn(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = e, e = u, u = t;
        }
        Oi(
          l,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        Oi(
          l,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Il(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), Ee |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Ea(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(h(153));
    if (l.child !== null) {
      for (t = l.child, e = Kl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Kl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Di(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && un(t)));
  }
  function Im(t, l, e) {
    switch (l.tag) {
      case 3:
        _t(l, l.stateNode.containerInfo), de(l, Ht, t.memoizedState.cache), xe();
        break;
      case 27:
      case 5:
        tl(l);
        break;
      case 4:
        _t(l, l.stateNode.containerInfo);
        break;
      case 10:
        de(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, ti(l), null;
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ve(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Zo(t, l, e) : (ve(l), t = Il(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        ve(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (e & l.childLanes) !== 0, a || (Ea(
          t,
          l,
          e,
          !1
        ), a = (e & l.childLanes) !== 0), u) {
          if (a)
            return wo(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(Nt, Nt.current), a) break;
        return null;
      case 22:
        return l.lanes = 0, jo(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        de(l, Ht, t.memoizedState.cache);
    }
    return Il(t, l, e);
  }
  function Ko(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Bt = !0;
      else {
        if (!Di(t, e) && (l.flags & 128) === 0)
          return Bt = !1, Im(
            t,
            l,
            e
          );
        Bt = (t.flags & 131072) !== 0;
      }
    else
      Bt = !1, lt && (l.flags & 1048576) !== 0 && zs(l, uu, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (t = Le(l.elementType), l.type = t, typeof t == "function")
            Bc(t) ? (a = Ke(t, a), l.tag = 1, l = Qo(
              null,
              l,
              t,
              a,
              e
            )) : (l.tag = 0, l = Ti(
              null,
              l,
              t,
              a,
              e
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === xt) {
                l.tag = 11, l = Bo(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              } else if (u === W) {
                l.tag = 14, l = qo(
                  null,
                  l,
                  t,
                  a,
                  e
                );
                break t;
              }
            }
            throw l = Ut(t) || t, Error(h(306, l, ""));
          }
        }
        return l;
      case 0:
        return Ti(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return a = l.type, u = Ke(
          a,
          l.pendingProps
        ), Qo(
          t,
          l,
          a,
          u,
          e
        );
      case 3:
        t: {
          if (_t(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(h(387));
          a = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, Wc(t, l), du(l, a, null, e);
          var c = l.memoizedState;
          if (a = c.cache, de(l, Ht, a), a !== n.cache && Zc(
            l,
            [Ht],
            e,
            !0
          ), ru(), a = c.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = Lo(
                t,
                l,
                a,
                e
              );
              break t;
            } else if (a !== u) {
              u = Nl(
                Error(h(424)),
                l
              ), nu(u), l = Lo(
                t,
                l,
                a,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, St = Cl(t.firstChild), wt = l, lt = !0, oe = null, Dl = !0, e = Ys(
                l,
                null,
                a,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (xe(), a === u) {
              l = Il(
                t,
                l,
                e
              );
              break t;
            }
            Jt(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return An(t, l), t === null ? (e = ad(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : lt || (e = l.type, t = l.pendingProps, a = Qn(
          k.current
        ).createElement(e), a[Vt] = l, a[ul] = t, kt(a, e, t), Xt(a), l.stateNode = a) : l.memoizedState = ad(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return tl(l), t === null && lt && (a = l.stateNode = td(
          l.type,
          l.pendingProps,
          k.current
        ), wt = l, Dl = !0, u = St, _e(l.type) ? (sf = u, St = Cl(a.firstChild)) : St = u), Jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), An(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && lt && ((u = a = St) && (a = Oh(
          a,
          l.type,
          l.pendingProps,
          Dl
        ), a !== null ? (l.stateNode = a, wt = l, St = Cl(a.firstChild), Dl = !1, u = !0) : u = !1), u || re(l)), tl(l), u = l.type, n = l.pendingProps, c = t !== null ? t.memoizedProps : null, a = n.children, af(u, n) ? a = null : c !== null && af(u, c) && (l.flags |= 32), l.memoizedState !== null && (u = ei(
          t,
          l,
          Zm,
          null,
          null,
          e
        ), Hu._currentValue = u), An(t, l), Jt(t, l, a, e), l.child;
      case 6:
        return t === null && lt && ((t = e = St) && (e = Dh(
          e,
          l.pendingProps,
          Dl
        ), e !== null ? (l.stateNode = e, wt = l, St = null, t = !0) : t = !1), t || re(l)), null;
      case 13:
        return Zo(t, l, e);
      case 4:
        return _t(
          l,
          l.stateNode.containerInfo
        ), a = l.pendingProps, t === null ? l.child = Ve(
          l,
          null,
          a,
          e
        ) : Jt(t, l, a, e), l.child;
      case 11:
        return Bo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Jt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return a = l.pendingProps, de(l, l.type, a.value), Jt(t, l, a.children, e), l.child;
      case 9:
        return u = l.type._context, a = l.pendingProps.children, Xe(l), u = Kt(u), a = a(u), l.flags |= 1, Jt(t, l, a, e), l.child;
      case 14:
        return qo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return Yo(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return wo(t, l, e);
      case 31:
        return Fm(t, l, e);
      case 22:
        return jo(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Xe(l), a = Kt(Ht), t === null ? (u = Kc(), u === null && (u = gt, n = Vc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), l.memoizedState = { parent: a, cache: u }, kc(l), de(l, Ht, u)) : ((t.lanes & e) !== 0 && (Wc(t, l), du(l, null, null, e), ru()), u = t.memoizedState, n = l.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), de(l, Ht, a)) : (a = n.cache, de(l, Ht, a), a !== u.cache && Zc(
          l,
          [Ht],
          e,
          !0
        ))), Jt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(h(156, l.tag));
  }
  function Pl(t) {
    t.flags |= 4;
  }
  function Ui(t, l, e, a, u) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Sr()) t.flags |= 8192;
        else
          throw Ze = sn, Jc;
    } else t.flags &= -16777217;
  }
  function Jo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !fd(l))
      if (Sr()) t.flags |= 8192;
      else
        throw Ze = sn, Jc;
  }
  function Nn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? _f() : 536870912, t.lanes |= l, Ha |= l);
  }
  function pu(t, l) {
    if (!lt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Et(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
    if (l)
      for (var u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = e, l;
  }
  function Pm(t, l, e) {
    var a = l.pendingProps;
    switch (xc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(l), null;
      case 1:
        return Et(l), null;
      case 3:
        return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Wl(Ht), pt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Sa(l) ? Pl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Xc())), Et(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (Pl(l), n !== null ? (Et(l), Jo(l, n)) : (Et(l), Ui(
          l,
          u,
          null,
          a,
          e
        ))) : n ? n !== t.memoizedState ? (Pl(l), Et(l), Jo(l, n)) : (Et(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pl(l), Et(l), Ui(
          l,
          u,
          t,
          a,
          e
        )), null;
      case 27:
        if (We(l), e = k.current, u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Pl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(h(166));
            return Et(l), null;
          }
          t = H.current, Sa(l) ? _s(l) : (t = td(u, a, e), l.stateNode = t, Pl(l));
        }
        return Et(l), null;
      case 5:
        if (We(l), u = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== a && Pl(l);
        else {
          if (!a) {
            if (l.stateNode === null)
              throw Error(h(166));
            return Et(l), null;
          }
          if (n = H.current, Sa(l))
            _s(l);
          else {
            var c = Qn(
              k.current
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
                    n = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            n[Vt] = l, n[ul] = a;
            t: for (c = l.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === l) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === l)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            l.stateNode = n;
            t: switch (kt(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Pl(l);
          }
        }
        return Et(l), Ui(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== a && Pl(l);
        else {
          if (typeof a != "string" && l.stateNode === null)
            throw Error(h(166));
          if (t = k.current, Sa(l)) {
            if (t = l.stateNode, e = l.memoizedProps, a = null, u = wt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[Vt] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Zr(t.nodeValue, e)), t || re(l, !0);
          } else
            t = Qn(t).createTextNode(
              a
            ), t[Vt] = l, l.stateNode = t;
        }
        return Et(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Sa(l), e !== null) {
            if (t === null) {
              if (!a) throw Error(h(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(h(557));
              t[Vt] = l;
            } else
              xe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), t = !1;
          } else
            e = Xc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(h(558));
        }
        return Et(l), null;
      case 13:
        if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = Sa(l), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(h(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(h(317));
              u[Vt] = l;
            } else
              xe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Et(l), u = !1;
          } else
            u = Xc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (vl(l), l) : (vl(l), null);
        }
        return vl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Nn(l, l.updateQueue), Et(l), null);
      case 4:
        return pt(), t === null && Ii(l.stateNode.containerInfo), Et(l), null;
      case 10:
        return Wl(l.type), Et(l), null;
      case 19:
        if (T(Nt), a = l.memoizedState, a === null) return Et(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) pu(a, !1);
          else {
            if (zt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = mn(t), n !== null) {
                  for (l.flags |= 128, pu(a, !1), t = n.updateQueue, l.updateQueue = t, Nn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Es(e, t), e = e.sibling;
                  return O(
                    Nt,
                    Nt.current & 1 | 2
                  ), lt && Jl(l, a.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ll() > Cn && (l.flags |= 128, u = !0, pu(a, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = mn(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, Nn(l, t), pu(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !lt)
                return Et(l), null;
            } else
              2 * ll() - a.renderingStartTime > Cn && e !== 536870912 && (l.flags |= 128, u = !0, pu(a, !1), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ll(), t.sibling = null, e = Nt.current, O(
          Nt,
          u ? e & 1 | 2 : e & 1
        ), lt && Jl(l, a.treeForkCount), t) : (Et(l), null);
      case 22:
      case 23:
        return vl(l), Pc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Et(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Et(l), e = l.updateQueue, e !== null && Nn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && T(Qe), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Wl(Ht), Et(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, l.tag));
  }
  function th(t, l) {
    switch (xc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Wl(Ht), pt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return We(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (vl(l), l.alternate === null)
            throw Error(h(340));
          xe();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (vl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(h(340));
          xe();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return T(Nt), null;
      case 4:
        return pt(), null;
      case 10:
        return Wl(l.type), null;
      case 22:
      case 23:
        return vl(l), Pc(), t !== null && T(Qe), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Wl(Ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ko(t, l) {
    switch (xc(l), l.tag) {
      case 3:
        Wl(Ht), pt();
        break;
      case 26:
      case 27:
      case 5:
        We(l);
        break;
      case 4:
        pt();
        break;
      case 31:
        l.memoizedState !== null && vl(l);
        break;
      case 13:
        vl(l);
        break;
      case 19:
        T(Nt);
        break;
      case 10:
        Wl(l.type);
        break;
      case 22:
      case 23:
        vl(l), Pc(), t !== null && T(Qe);
        break;
      case 24:
        Wl(Ht);
    }
  }
  function Su(t, l) {
    try {
      var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (i) {
      mt(l, l.return, i);
    }
  }
  function pe(t, l, e) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = l;
              var f = e, v = i;
              try {
                v();
              } catch (S) {
                mt(
                  u,
                  f,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      mt(l, l.return, S);
    }
  }
  function Wo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        xs(l, e);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function $o(t, l, e) {
    e.props = Ke(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      mt(t, l, a);
    }
  }
  function Eu(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
      }
    } catch (u) {
      mt(t, l, u);
    }
  }
  function Gl(t, l) {
    var e = t.ref, a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          mt(t, l, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          mt(t, l, u);
        }
      else e.current = null;
  }
  function Fo(t) {
    var l = t.type, e = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  function Ci(t, l, e) {
    try {
      var a = t.stateNode;
      Th(a, t.type, e, l), a[ul] = l;
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  function Io(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && _e(t.type) || t.tag === 4;
  }
  function Hi(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Io(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && _e(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ri(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Vl));
    else if (a !== 4 && (a === 27 && _e(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Ri(t, l, e), t = t.sibling; t !== null; )
        Ri(t, l, e), t = t.sibling;
  }
  function Mn(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (a !== 4 && (a === 27 && _e(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Mn(t, l, e), t = t.sibling; t !== null; )
        Mn(t, l, e), t = t.sibling;
  }
  function Po(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var a = t.type, u = l.attributes; u.length; )
        l.removeAttributeNode(u[0]);
      kt(l, a, e), l[Vt] = t, l[ul] = e;
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  var te = !1, qt = !1, Bi = !1, tr = typeof WeakSet == "function" ? WeakSet : Set, Qt = null;
  function lh(t, l) {
    if (t = t.containerInfo, lf = kn, t = rs(t), Mc(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var c = 0, i = -1, f = -1, v = 0, S = 0, z = t, g = null;
            l: for (; ; ) {
              for (var p; z !== e || u !== 0 && z.nodeType !== 3 || (i = c + u), z !== n || a !== 0 && z.nodeType !== 3 || (f = c + a), z.nodeType === 3 && (c += z.nodeValue.length), (p = z.firstChild) !== null; )
                g = z, z = p;
              for (; ; ) {
                if (z === t) break l;
                if (g === e && ++v === u && (i = c), g === n && ++S === a && (f = c), (p = z.nextSibling) !== null) break;
                z = g, g = z.parentNode;
              }
              z = p;
            }
            e = i === -1 || f === -1 ? null : { start: i, end: f };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (ef = { focusedElem: t, selectionRange: e }, kn = !1, Qt = l; Qt !== null; )
      if (l = Qt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = l, Qt = t;
      else
        for (; Qt !== null; ) {
          switch (l = Qt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (e = 0; e < t.length; e++)
                  u = t[e], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                try {
                  var R = Ke(
                    e.type,
                    u
                  );
                  t = a.getSnapshotBeforeUpdate(
                    R,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (G) {
                  mt(
                    e,
                    e.return,
                    G
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  nf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nf(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(h(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Qt = t;
            break;
          }
          Qt = l.return;
        }
  }
  function lr(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ee(t, e), a & 4 && Su(5, e);
        break;
      case 1:
        if (ee(t, e), a & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (c) {
              mt(e, e.return, c);
            }
          else {
            var u = Ke(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              mt(
                e,
                e.return,
                c
              );
            }
          }
        a & 64 && Wo(e), a & 512 && Eu(e, e.return);
        break;
      case 3:
        if (ee(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            xs(t, l);
          } catch (c) {
            mt(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Po(e);
      case 26:
      case 5:
        ee(t, e), l === null && a & 4 && Fo(e), a & 512 && Eu(e, e.return);
        break;
      case 12:
        ee(t, e);
        break;
      case 31:
        ee(t, e), a & 4 && ur(t, e);
        break;
      case 13:
        ee(t, e), a & 4 && nr(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = oh.bind(
          null,
          e
        ), Uh(t, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || te, !a) {
          l = l !== null && l.memoizedState !== null || qt, u = te;
          var n = qt;
          te = a, (qt = l) && !n ? ae(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ee(t, e), te = u, qt = n;
        }
        break;
      case 30:
        break;
      default:
        ee(t, e);
    }
  }
  function er(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, er(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && oc(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var bt = null, cl = !1;
  function le(t, l, e) {
    for (e = e.child; e !== null; )
      ar(t, l, e), e = e.sibling;
  }
  function ar(t, l, e) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(rl, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        qt || Gl(e, l), le(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        qt || Gl(e, l);
        var a = bt, u = cl;
        _e(e.type) && (bt = e.stateNode, cl = !1), le(
          t,
          l,
          e
        ), Du(e.stateNode), bt = a, cl = u;
        break;
      case 5:
        qt || Gl(e, l);
      case 6:
        if (a = bt, u = cl, bt = null, le(
          t,
          l,
          e
        ), bt = a, cl = u, bt !== null)
          if (cl)
            try {
              (bt.nodeType === 9 ? bt.body : bt.nodeName === "HTML" ? bt.ownerDocument.body : bt).removeChild(e.stateNode);
            } catch (n) {
              mt(
                e,
                l,
                n
              );
            }
          else
            try {
              bt.removeChild(e.stateNode);
            } catch (n) {
              mt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        bt !== null && (cl ? (t = bt, Wr(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Xa(t)) : Wr(bt, e.stateNode));
        break;
      case 4:
        a = bt, u = cl, bt = e.stateNode.containerInfo, cl = !0, le(
          t,
          l,
          e
        ), bt = a, cl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        pe(2, e, l), qt || pe(4, e, l), le(
          t,
          l,
          e
        );
        break;
      case 1:
        qt || (Gl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && $o(
          e,
          l,
          a
        )), le(
          t,
          l,
          e
        );
        break;
      case 21:
        le(
          t,
          l,
          e
        );
        break;
      case 22:
        qt = (a = qt) || e.memoizedState !== null, le(
          t,
          l,
          e
        ), qt = a;
        break;
      default:
        le(
          t,
          l,
          e
        );
    }
  }
  function ur(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Xa(t);
      } catch (e) {
        mt(l, l.return, e);
      }
    }
  }
  function nr(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Xa(t);
      } catch (e) {
        mt(l, l.return, e);
      }
  }
  function eh(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new tr()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new tr()), l;
      default:
        throw Error(h(435, t.tag));
    }
  }
  function On(t, l) {
    var e = eh(t);
    l.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = rh.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function il(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a], n = t, c = l, i = c;
        t: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (_e(i.type)) {
                bt = i.stateNode, cl = !1;
                break t;
              }
              break;
            case 5:
              bt = i.stateNode, cl = !1;
              break t;
            case 3:
            case 4:
              bt = i.stateNode.containerInfo, cl = !0;
              break t;
          }
          i = i.return;
        }
        if (bt === null) throw Error(h(160));
        ar(n, c, u), bt = null, cl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        cr(l, t), l = l.sibling;
  }
  var Bl = null;
  function cr(t, l) {
    var e = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        il(l, t), fl(t), a & 4 && (pe(3, t, t.return), Su(3, t), pe(5, t, t.return));
        break;
      case 1:
        il(l, t), fl(t), a & 512 && (qt || e === null || Gl(e, e.return)), a & 64 && te && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var u = Bl;
        if (il(l, t), fl(t), a & 512 && (qt || e === null || Gl(e, e.return)), a & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (a = t.memoizedState, e === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, e = t.memoizedProps, u = u.ownerDocument || u;
                  l: switch (a) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ja] || n[Vt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), kt(n, a, e), n[Vt] = t, Xt(n), a = n;
                      break t;
                    case "link":
                      var c = cd(
                        "link",
                        "href",
                        u
                      ).get(a + (e.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), kt(n, a, e), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (c = cd(
                        "meta",
                        "content",
                        u
                      ).get(a + (e.content || ""))) {
                        for (i = 0; i < c.length; i++)
                          if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            c.splice(i, 1);
                            break l;
                          }
                      }
                      n = u.createElement(a), kt(n, a, e), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[Vt] = t, Xt(n), a = n;
                }
                t.stateNode = a;
              } else
                id(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = nd(
                u,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? id(
              u,
              t.type,
              t.stateNode
            ) : nd(
              u,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Ci(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        il(l, t), fl(t), a & 512 && (qt || e === null || Gl(e, e.return)), e !== null && a & 4 && Ci(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (il(l, t), fl(t), a & 512 && (qt || e === null || Gl(e, e.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            sa(u, "");
          } catch (R) {
            mt(t, t.return, R);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Ci(
          t,
          u,
          e !== null ? e.memoizedProps : u
        )), a & 1024 && (Bi = !0);
        break;
      case 6:
        if (il(l, t), fl(t), a & 4) {
          if (t.stateNode === null)
            throw Error(h(162));
          a = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = a;
          } catch (R) {
            mt(t, t.return, R);
          }
        }
        break;
      case 3:
        if (Vn = null, u = Bl, Bl = Ln(l.containerInfo), il(l, t), Bl = u, fl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Xa(l.containerInfo);
          } catch (R) {
            mt(t, t.return, R);
          }
        Bi && (Bi = !1, ir(t));
        break;
      case 4:
        a = Bl, Bl = Ln(
          t.stateNode.containerInfo
        ), il(l, t), fl(t), Bl = a;
        break;
      case 12:
        il(l, t), fl(t);
        break;
      case 31:
        il(l, t), fl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 13:
        il(l, t), fl(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Un = ll()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var f = e !== null && e.memoizedState !== null, v = te, S = qt;
        if (te = v || u, qt = S || f, il(l, t), qt = S, te = v, fl(t), a & 8192)
          t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (e === null || f || te || qt || Je(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                f = e = l;
                try {
                  if (n = f.stateNode, u)
                    c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = f.stateNode;
                    var z = f.memoizedProps.style, g = z != null && z.hasOwnProperty("display") ? z.display : null;
                    i.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (R) {
                  mt(f, f.return, R);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                f = l;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (R) {
                  mt(f, f.return, R);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                f = l;
                try {
                  var p = f.stateNode;
                  u ? $r(p, !0) : $r(f.stateNode, !1);
                } catch (R) {
                  mt(f, f.return, R);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, On(t, e))));
        break;
      case 19:
        il(l, t), fl(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, On(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        il(l, t), fl(t);
    }
  }
  function fl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Io(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(h(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode, n = Hi(t);
            Mn(t, n, u);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (sa(c, ""), e.flags &= -33);
            var i = Hi(t);
            Mn(t, i, c);
            break;
          case 3:
          case 4:
            var f = e.stateNode.containerInfo, v = Hi(t);
            Ri(
              t,
              v,
              f
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        mt(t, t.return, S);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function ir(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        ir(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function ee(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        lr(t, l.alternate, l), l = l.sibling;
  }
  function Je(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pe(4, l, l.return), Je(l);
          break;
        case 1:
          Gl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && $o(
            l,
            l.return,
            e
          ), Je(l);
          break;
        case 27:
          Du(l.stateNode);
        case 26:
        case 5:
          Gl(l, l.return), Je(l);
          break;
        case 22:
          l.memoizedState === null && Je(l);
          break;
        case 30:
          Je(l);
          break;
        default:
          Je(l);
      }
      t = t.sibling;
    }
  }
  function ae(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate, u = t, n = l, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ae(
            u,
            n,
            e
          ), Su(4, n);
          break;
        case 1:
          if (ae(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (v) {
              mt(a, a.return, v);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var i = a.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  js(f[u], i);
            } catch (v) {
              mt(a, a.return, v);
            }
          }
          e && c & 64 && Wo(n), Eu(n, n.return);
          break;
        case 27:
          Po(n);
        case 26:
        case 5:
          ae(
            u,
            n,
            e
          ), e && a === null && c & 4 && Fo(n), Eu(n, n.return);
          break;
        case 12:
          ae(
            u,
            n,
            e
          );
          break;
        case 31:
          ae(
            u,
            n,
            e
          ), e && c & 4 && ur(u, n);
          break;
        case 13:
          ae(
            u,
            n,
            e
          ), e && c & 4 && nr(u, n);
          break;
        case 22:
          n.memoizedState === null && ae(
            u,
            n,
            e
          ), Eu(n, n.return);
          break;
        case 30:
          break;
        default:
          ae(
            u,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function qi(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && cu(e));
  }
  function Yi(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && cu(t));
  }
  function ql(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        fr(
          t,
          l,
          e,
          a
        ), l = l.sibling;
  }
  function fr(t, l, e, a) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && Su(9, l);
        break;
      case 1:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 3:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && cu(t)));
        break;
      case 12:
        if (u & 2048) {
          ql(
            t,
            l,
            e,
            a
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, c = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              c,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (f) {
            mt(l, l.return, f);
          }
        } else
          ql(
            t,
            l,
            e,
            a
          );
        break;
      case 31:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 13:
        ql(
          t,
          l,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, c = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : bu(t, l) : n._visibility & 2 ? ql(
          t,
          l,
          e,
          a
        ) : (n._visibility |= 2, Da(
          t,
          l,
          e,
          a,
          (l.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && qi(c, l);
        break;
      case 24:
        ql(
          t,
          l,
          e,
          a
        ), u & 2048 && Yi(l.alternate, l);
        break;
      default:
        ql(
          t,
          l,
          e,
          a
        );
    }
  }
  function Da(t, l, e, a, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, c = l, i = e, f = a, v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Da(
            n,
            c,
            i,
            f,
            u
          ), Su(8, c);
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          c.memoizedState !== null ? S._visibility & 2 ? Da(
            n,
            c,
            i,
            f,
            u
          ) : bu(
            n,
            c
          ) : (S._visibility |= 2, Da(
            n,
            c,
            i,
            f,
            u
          )), u && v & 2048 && qi(
            c.alternate,
            c
          );
          break;
        case 24:
          Da(
            n,
            c,
            i,
            f,
            u
          ), u && v & 2048 && Yi(c.alternate, c);
          break;
        default:
          Da(
            n,
            c,
            i,
            f,
            u
          );
      }
      l = l.sibling;
    }
  }
  function bu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, a = l, u = a.flags;
        switch (a.tag) {
          case 22:
            bu(e, a), u & 2048 && qi(
              a.alternate,
              a
            );
            break;
          case 24:
            bu(e, a), u & 2048 && Yi(a.alternate, a);
            break;
          default:
            bu(e, a);
        }
        l = l.sibling;
      }
  }
  var Tu = 8192;
  function Ua(t, l, e) {
    if (t.subtreeFlags & Tu)
      for (t = t.child; t !== null; )
        sr(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function sr(t, l, e) {
    switch (t.tag) {
      case 26:
        Ua(
          t,
          l,
          e
        ), t.flags & Tu && t.memoizedState !== null && Lh(
          e,
          Bl,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ua(
          t,
          l,
          e
        );
        break;
      case 3:
      case 4:
        var a = Bl;
        Bl = Ln(t.stateNode.containerInfo), Ua(
          t,
          l,
          e
        ), Bl = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Tu, Tu = 16777216, Ua(
          t,
          l,
          e
        ), Tu = a) : Ua(
          t,
          l,
          e
        ));
        break;
      default:
        Ua(
          t,
          l,
          e
        );
    }
  }
  function or(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function zu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, dr(
            a,
            t
          );
        }
      or(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        rr(t), t = t.sibling;
  }
  function rr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zu(t), t.flags & 2048 && pe(9, t, t.return);
        break;
      case 3:
        zu(t);
        break;
      case 12:
        zu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Dn(t)) : zu(t);
        break;
      default:
        zu(t);
    }
  }
  function Dn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          Qt = a, dr(
            a,
            t
          );
        }
      or(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          pe(8, l, l.return), Dn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Dn(l));
          break;
        default:
          Dn(l);
      }
      t = t.sibling;
    }
  }
  function dr(t, l) {
    for (; Qt !== null; ) {
      var e = Qt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          pe(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cu(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Qt = a;
      else
        t: for (e = t; Qt !== null; ) {
          a = Qt;
          var u = a.sibling, n = a.return;
          if (er(a), a === e) {
            Qt = null;
            break t;
          }
          if (u !== null) {
            u.return = n, Qt = u;
            break t;
          }
          Qt = n;
        }
    }
  }
  var ah = {
    getCacheForType: function(t) {
      var l = Kt(Ht), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return Kt(Ht).controller.signal;
    }
  }, uh = typeof WeakMap == "function" ? WeakMap : Map, st = 0, gt = null, F = null, P = 0, dt = 0, gl = null, Se = !1, Ca = !1, ji = !1, ue = 0, zt = 0, Ee = 0, ke = 0, xi = 0, pl = 0, Ha = 0, Au = null, sl = null, Gi = !1, Un = 0, mr = 0, Cn = 1 / 0, Hn = null, be = null, Gt = 0, Te = null, Ra = null, ne = 0, Xi = 0, Qi = null, hr = null, _u = 0, Li = null;
  function Sl() {
    return (st & 2) !== 0 && P !== 0 ? P & -P : E.T !== null ? ki() : Df();
  }
  function yr() {
    if (pl === 0)
      if ((P & 536870912) === 0 || lt) {
        var t = Gu;
        Gu <<= 1, (Gu & 3932160) === 0 && (Gu = 262144), pl = t;
      } else pl = 536870912;
    return t = yl.current, t !== null && (t.flags |= 32), pl;
  }
  function ol(t, l, e) {
    (t === gt && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null) && (Ba(t, 0), ze(
      t,
      P,
      pl,
      !1
    )), Ka(t, e), ((st & 2) === 0 || t !== gt) && (t === gt && ((st & 2) === 0 && (ke |= e), zt === 4 && ze(
      t,
      P,
      pl,
      !1
    )), Xl(t));
  }
  function vr(t, l, e) {
    if ((st & 6) !== 0) throw Error(h(327));
    var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || wa(t, l), u = a ? ih(t, l) : Vi(t, l, !0), n = a;
    do {
      if (u === 0) {
        Ca && !a && ze(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !nh(e)) {
          u = Vi(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            t: {
              var i = t;
              u = Au;
              var f = i.current.memoizedState.isDehydrated;
              if (f && (Ba(i, c).flags |= 256), c = Vi(
                i,
                c,
                !1
              ), c !== 2) {
                if (ji && !f) {
                  i.errorRecoveryDisabledLanes |= n, ke |= n, u = 4;
                  break t;
                }
                n = sl, sl = u, n !== null && (sl === null ? sl = n : sl.push.apply(
                  sl,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ba(t, 0), ze(t, l, 0, !0);
          break;
        }
        t: {
          switch (a = t, n = u, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ze(
                a,
                l,
                pl,
                !Se
              );
              break t;
            case 2:
              sl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((l & 62914560) === l && (u = Un + 300 - ll(), 10 < u)) {
            if (ze(
              a,
              l,
              pl,
              !Se
            ), Qu(a, 0, !0) !== 0) break t;
            ne = l, a.timeoutHandle = Jr(
              gr.bind(
                null,
                a,
                e,
                sl,
                Hn,
                Gi,
                l,
                pl,
                ke,
                Ha,
                Se,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          gr(
            a,
            e,
            sl,
            Hn,
            Gi,
            l,
            pl,
            ke,
            Ha,
            Se,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Xl(t);
  }
  function gr(t, l, e, a, u, n, c, i, f, v, S, z, g, p) {
    if (t.timeoutHandle = -1, z = l.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Vl
      }, sr(
        l,
        n,
        z
      );
      var R = (n & 62914560) === n ? Un - ll() : (n & 4194048) === n ? mr - ll() : 0;
      if (R = Zh(
        z,
        R
      ), R !== null) {
        ne = n, t.cancelPendingCommit = R(
          _r.bind(
            null,
            t,
            l,
            n,
            e,
            a,
            u,
            c,
            i,
            f,
            S,
            z,
            null,
            g,
            p
          )
        ), ze(t, n, c, !v);
        return;
      }
    }
    _r(
      t,
      l,
      n,
      e,
      a,
      u,
      c,
      i,
      f
    );
  }
  function nh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!ml(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ze(t, l, e, a) {
    l &= ~xi, l &= ~ke, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - dl(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && Nf(t, e, l);
  }
  function Rn() {
    return (st & 6) === 0 ? (Nu(0), !1) : !0;
  }
  function Zi() {
    if (F !== null) {
      if (dt === 0)
        var t = F.return;
      else
        t = F, kl = Ge = null, ni(t), Aa = null, fu = 0, t = F;
      for (; t !== null; )
        ko(t.alternate, t), t = t.return;
      F = null;
    }
  }
  function Ba(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, _h(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ne = 0, Zi(), gt = t, F = e = Kl(t.current, null), P = l, dt = 0, gl = null, Se = !1, Ca = wa(t, l), ji = !1, Ha = pl = xi = ke = Ee = zt = 0, sl = Au = null, Gi = !1, (l & 8) !== 0 && (l |= l & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - dl(a), n = 1 << u;
        l |= t[u], a &= ~n;
      }
    return ue = l, Pu(), e;
  }
  function pr(t, l) {
    V = null, E.H = vu, l === za || l === fn ? (l = Rs(), dt = 3) : l === Jc ? (l = Rs(), dt = 4) : dt = l === bi ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, gl = l, F === null && (zt = 1, Tn(
      t,
      Nl(l, t.current)
    ));
  }
  function Sr() {
    var t = yl.current;
    return t === null ? !0 : (P & 4194048) === P ? Ul === null : (P & 62914560) === P || (P & 536870912) !== 0 ? t === Ul : !1;
  }
  function Er() {
    var t = E.H;
    return E.H = vu, t === null ? vu : t;
  }
  function br() {
    var t = E.A;
    return E.A = ah, t;
  }
  function Bn() {
    zt = 4, Se || (P & 4194048) !== P && yl.current !== null || (Ca = !0), (Ee & 134217727) === 0 && (ke & 134217727) === 0 || gt === null || ze(
      gt,
      P,
      pl,
      !1
    );
  }
  function Vi(t, l, e) {
    var a = st;
    st |= 2;
    var u = Er(), n = br();
    (gt !== t || P !== l) && (Hn = null, Ba(t, l)), l = !1;
    var c = zt;
    t: do
      try {
        if (dt !== 0 && F !== null) {
          var i = F, f = gl;
          switch (dt) {
            case 8:
              Zi(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              yl.current === null && (l = !0);
              var v = dt;
              if (dt = 0, gl = null, qa(t, i, f, v), e && Ca) {
                c = 0;
                break t;
              }
              break;
            default:
              v = dt, dt = 0, gl = null, qa(t, i, f, v);
          }
        }
        ch(), c = zt;
        break;
      } catch (S) {
        pr(t, S);
      }
    while (!0);
    return l && t.shellSuspendCounter++, kl = Ge = null, st = a, E.H = u, E.A = n, F === null && (gt = null, P = 0, Pu()), c;
  }
  function ch() {
    for (; F !== null; ) Tr(F);
  }
  function ih(t, l) {
    var e = st;
    st |= 2;
    var a = Er(), u = br();
    gt !== t || P !== l ? (Hn = null, Cn = ll() + 500, Ba(t, l)) : Ca = wa(
      t,
      l
    );
    t: do
      try {
        if (dt !== 0 && F !== null) {
          l = F;
          var n = gl;
          l: switch (dt) {
            case 1:
              dt = 0, gl = null, qa(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Cs(n)) {
                dt = 0, gl = null, zr(l);
                break;
              }
              l = function() {
                dt !== 2 && dt !== 9 || gt !== t || (dt = 7), Xl(t);
              }, n.then(l, l);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              Cs(n) ? (dt = 0, gl = null, zr(l)) : (dt = 0, gl = null, qa(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (F.tag) {
                case 26:
                  c = F.memoizedState;
                case 5:
                case 27:
                  var i = F;
                  if (c ? fd(c) : i.stateNode.complete) {
                    dt = 0, gl = null;
                    var f = i.sibling;
                    if (f !== null) F = f;
                    else {
                      var v = i.return;
                      v !== null ? (F = v, qn(v)) : F = null;
                    }
                    break l;
                  }
              }
              dt = 0, gl = null, qa(t, l, n, 5);
              break;
            case 6:
              dt = 0, gl = null, qa(t, l, n, 6);
              break;
            case 8:
              Zi(), zt = 6;
              break t;
            default:
              throw Error(h(462));
          }
        }
        fh();
        break;
      } catch (S) {
        pr(t, S);
      }
    while (!0);
    return kl = Ge = null, E.H = a, E.A = u, st = e, F !== null ? 0 : (gt = null, P = 0, Pu(), zt);
  }
  function fh() {
    for (; F !== null && !ac(); )
      Tr(F);
  }
  function Tr(t) {
    var l = Ko(t.alternate, t, ue);
    t.memoizedProps = t.pendingProps, l === null ? qn(t) : F = l;
  }
  function zr(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Xo(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          P
        );
        break;
      case 11:
        l = Xo(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          P
        );
        break;
      case 5:
        ni(l);
      default:
        ko(e, l), l = F = Es(l, ue), l = Ko(e, l, ue);
    }
    t.memoizedProps = t.pendingProps, l === null ? qn(t) : F = l;
  }
  function qa(t, l, e, a) {
    kl = Ge = null, ni(l), Aa = null, fu = 0;
    var u = l.return;
    try {
      if ($m(
        t,
        u,
        l,
        e,
        P
      )) {
        zt = 1, Tn(
          t,
          Nl(e, t.current)
        ), F = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw F = u, n;
      zt = 1, Tn(
        t,
        Nl(e, t.current)
      ), F = null;
      return;
    }
    l.flags & 32768 ? (lt || a === 1 ? t = !0 : Ca || (P & 536870912) !== 0 ? t = !1 : (Se = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ar(l, t)) : qn(l);
  }
  function qn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Ar(
          l,
          Se
        );
        return;
      }
      t = l.return;
      var e = Pm(
        l.alternate,
        l,
        ue
      );
      if (e !== null) {
        F = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        F = l;
        return;
      }
      F = l = t;
    } while (l !== null);
    zt === 0 && (zt = 5);
  }
  function Ar(t, l) {
    do {
      var e = th(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, F = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        F = t;
        return;
      }
      F = t = e;
    } while (t !== null);
    zt = 6, F = null;
  }
  function _r(t, l, e, a, u, n, c, i, f) {
    t.cancelPendingCommit = null;
    do
      Yn();
    while (Gt !== 0);
    if ((st & 6) !== 0) throw Error(h(327));
    if (l !== null) {
      if (l === t.current) throw Error(h(177));
      if (n = l.lanes | l.childLanes, n |= Hc, Qd(
        t,
        e,
        n,
        c,
        i,
        f
      ), t === gt && (F = gt = null, P = 0), Ra = l, Te = t, ne = e, Xi = n, Qi = u, hr = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, dh(N, function() {
        return Ur(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null, u = D.p, D.p = 2, c = st, st |= 4;
        try {
          lh(t, l, e);
        } finally {
          st = c, D.p = u, E.T = a;
        }
      }
      Gt = 1, Nr(), Mr(), Or();
    }
  }
  function Nr() {
    if (Gt === 1) {
      Gt = 0;
      var t = Te, l = Ra, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = E.T, E.T = null;
        var a = D.p;
        D.p = 2;
        var u = st;
        st |= 4;
        try {
          cr(l, t);
          var n = ef, c = rs(t.containerInfo), i = n.focusedElem, f = n.selectionRange;
          if (c !== i && i && i.ownerDocument && os(
            i.ownerDocument.documentElement,
            i
          )) {
            if (f !== null && Mc(i)) {
              var v = f.start, S = f.end;
              if (S === void 0 && (S = v), "selectionStart" in i)
                i.selectionStart = v, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, g = z && z.defaultView || window;
                if (g.getSelection) {
                  var p = g.getSelection(), R = i.textContent.length, G = Math.min(f.start, R), vt = f.end === void 0 ? G : Math.min(f.end, R);
                  !p.extend && G > vt && (c = vt, vt = G, G = c);
                  var m = ss(
                    i,
                    G
                  ), o = ss(
                    i,
                    vt
                  );
                  if (m && o && (p.rangeCount !== 1 || p.anchorNode !== m.node || p.anchorOffset !== m.offset || p.focusNode !== o.node || p.focusOffset !== o.offset)) {
                    var y = z.createRange();
                    y.setStart(m.node, m.offset), p.removeAllRanges(), G > vt ? (p.addRange(y), p.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), p.addRange(y));
                  }
                }
              }
            }
            for (z = [], p = i; p = p.parentNode; )
              p.nodeType === 1 && z.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < z.length; i++) {
              var b = z[i];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          kn = !!lf, ef = lf = null;
        } finally {
          st = u, D.p = a, E.T = e;
        }
      }
      t.current = l, Gt = 2;
    }
  }
  function Mr() {
    if (Gt === 2) {
      Gt = 0;
      var t = Te, l = Ra, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = E.T, E.T = null;
        var a = D.p;
        D.p = 2;
        var u = st;
        st |= 4;
        try {
          lr(t, l.alternate, l);
        } finally {
          st = u, D.p = a, E.T = e;
        }
      }
      Gt = 3;
    }
  }
  function Or() {
    if (Gt === 4 || Gt === 3) {
      Gt = 0, uc();
      var t = Te, l = Ra, e = ne, a = hr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Gt = 5 : (Gt = 0, Ra = Te = null, Dr(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (be = null), fc(e), l = l.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function")
        try {
          Ct.onCommitFiberRoot(
            rl,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        l = E.T, u = D.p, D.p = 2, E.T = null;
        try {
          for (var n = t.onRecoverableError, c = 0; c < a.length; c++) {
            var i = a[c];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          E.T = l, D.p = u;
        }
      }
      (ne & 3) !== 0 && Yn(), Xl(t), u = t.pendingLanes, (e & 261930) !== 0 && (u & 42) !== 0 ? t === Li ? _u++ : (_u = 0, Li = t) : _u = 0, Nu(0);
    }
  }
  function Dr(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, cu(l)));
  }
  function Yn() {
    return Nr(), Mr(), Or(), Ur();
  }
  function Ur() {
    if (Gt !== 5) return !1;
    var t = Te, l = Xi;
    Xi = 0;
    var e = fc(ne), a = E.T, u = D.p;
    try {
      D.p = 32 > e ? 32 : e, E.T = null, e = Qi, Qi = null;
      var n = Te, c = ne;
      if (Gt = 0, Ra = Te = null, ne = 0, (st & 6) !== 0) throw Error(h(331));
      var i = st;
      if (st |= 4, rr(n.current), fr(
        n,
        n.current,
        c,
        e
      ), st = i, Nu(0, !1), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        try {
          Ct.onPostCommitFiberRoot(rl, n);
        } catch {
        }
      return !0;
    } finally {
      D.p = u, E.T = a, Dr(t, l);
    }
  }
  function Cr(t, l, e) {
    l = Nl(e, l), l = Ei(t.stateNode, l, 2), t = ye(t, l, 2), t !== null && (Ka(t, 2), Xl(t));
  }
  function mt(t, l, e) {
    if (t.tag === 3)
      Cr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Cr(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (be === null || !be.has(a))) {
            t = Nl(e, t), e = Ho(2), a = ye(l, e, 2), a !== null && (Ro(
              e,
              a,
              l,
              t
            ), Ka(a, 2), Xl(a));
            break;
          }
        }
        l = l.return;
      }
  }
  function wi(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new uh();
      var u = /* @__PURE__ */ new Set();
      a.set(l, u);
    } else
      u = a.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(l, u));
    u.has(e) || (ji = !0, u.add(e), t = sh.bind(null, t, l, e), l.then(t, t));
  }
  function sh(t, l, e) {
    var a = t.pingCache;
    a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, gt === t && (P & e) === e && (zt === 4 || zt === 3 && (P & 62914560) === P && 300 > ll() - Un ? (st & 2) === 0 && Ba(t, 0) : xi |= e, Ha === P && (Ha = 0)), Xl(t);
  }
  function Hr(t, l) {
    l === 0 && (l = _f()), t = Ye(t, l), t !== null && (Ka(t, l), Xl(t));
  }
  function oh(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Hr(t, e);
  }
  function rh(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(l), Hr(t, e);
  }
  function dh(t, l) {
    return ta(t, l);
  }
  var jn = null, Ya = null, Ki = !1, xn = !1, Ji = !1, Ae = 0;
  function Xl(t) {
    t !== Ya && t.next === null && (Ya === null ? jn = Ya = t : Ya = Ya.next = t), xn = !0, Ki || (Ki = !0, hh());
  }
  function Nu(t, l) {
    if (!Ji && xn) {
      Ji = !0;
      do
        for (var e = !1, a = jn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - dl(42 | t) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Yr(a, n));
          } else
            n = P, n = Qu(
              a,
              a === gt ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || wa(a, n) || (e = !0, Yr(a, n));
          a = a.next;
        }
      while (e);
      Ji = !1;
    }
  }
  function mh() {
    Rr();
  }
  function Rr() {
    xn = Ki = !1;
    var t = 0;
    Ae !== 0 && Ah() && (t = Ae);
    for (var l = ll(), e = null, a = jn; a !== null; ) {
      var u = a.next, n = Br(a, l);
      n === 0 ? (a.next = null, e === null ? jn = u : e.next = u, u === null && (Ya = e)) : (e = a, (t !== 0 || (n & 3) !== 0) && (xn = !0)), a = u;
    }
    Gt !== 0 && Gt !== 5 || Nu(t), Ae !== 0 && (Ae = 0);
  }
  function Br(t, l) {
    for (var e = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - dl(n), i = 1 << c, f = u[c];
      f === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = Xd(i, l)) : f <= l && (t.expiredLanes |= i), n &= ~i;
    }
    if (l = gt, e = P, e = Qu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, e === 0 || t === l && (dt === 2 || dt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && la(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || wa(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (a !== null && la(a), fc(e)) {
        case 2:
        case 8:
          e = Va;
          break;
        case 32:
          e = N;
          break;
        case 268435456:
          e = $;
          break;
        default:
          e = N;
      }
      return a = qr.bind(null, t), e = ta(e, a), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return a !== null && a !== null && la(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function qr(t, l) {
    if (Gt !== 0 && Gt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Yn() && t.callbackNode !== e)
      return null;
    var a = P;
    return a = Qu(
      t,
      t === gt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (vr(t, a, l), Br(t, ll()), t.callbackNode != null && t.callbackNode === e ? qr.bind(null, t) : null);
  }
  function Yr(t, l) {
    if (Yn()) return null;
    vr(t, l, !0);
  }
  function hh() {
    Nh(function() {
      (st & 6) !== 0 ? ta(
        ju,
        mh
      ) : Rr();
    });
  }
  function ki() {
    if (Ae === 0) {
      var t = ba;
      t === 0 && (t = xu, xu <<= 1, (xu & 261888) === 0 && (xu = 256)), Ae = t;
    }
    return Ae;
  }
  function jr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : wu("" + t);
  }
  function xr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function yh(t, l, e, a, u) {
    if (l === "submit" && e && e.stateNode === u) {
      var n = jr(
        (u[ul] || null).action
      ), c = a.submitter;
      c && (l = (l = c[ul] || null) ? jr(l.formAction) : c.getAttribute("formAction"), l !== null && (n = l, c = null));
      var i = new Wu(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ae !== 0) {
                  var f = c ? xr(u, c) : new FormData(u);
                  hi(
                    e,
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
                typeof n == "function" && (i.preventDefault(), f = c ? xr(u, c) : new FormData(u), hi(
                  e,
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
  for (var Wi = 0; Wi < Cc.length; Wi++) {
    var $i = Cc[Wi], vh = $i.toLowerCase(), gh = $i[0].toUpperCase() + $i.slice(1);
    Rl(
      vh,
      "on" + gh
    );
  }
  Rl(hs, "onAnimationEnd"), Rl(ys, "onAnimationIteration"), Rl(vs, "onAnimationStart"), Rl("dblclick", "onDoubleClick"), Rl("focusin", "onFocus"), Rl("focusout", "onBlur"), Rl(Rm, "onTransitionRun"), Rl(Bm, "onTransitionStart"), Rl(qm, "onTransitionCancel"), Rl(gs, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), He(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), He(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), He("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), He(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), He(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ph = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu)
  );
  function Gr(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e], u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c], f = i.instance, v = i.currentTarget;
            if (i = i.listener, f !== n && u.isPropagationStopped())
              break t;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (S) {
              Iu(S);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (i = a[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== n && u.isPropagationStopped())
              break t;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (S) {
              Iu(S);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function I(t, l) {
    var e = l[sc];
    e === void 0 && (e = l[sc] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    e.has(a) || (Xr(l, t, 2, !1), e.add(a));
  }
  function Fi(t, l, e) {
    var a = 0;
    l && (a |= 4), Xr(
      e,
      t,
      a,
      l
    );
  }
  var Gn = "_reactListening" + Math.random().toString(36).slice(2);
  function Ii(t) {
    if (!t[Gn]) {
      t[Gn] = !0, Hf.forEach(function(e) {
        e !== "selectionchange" && (ph.has(e) || Fi(e, !1, t), Fi(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Gn] || (l[Gn] = !0, Fi("selectionchange", !1, l));
    }
  }
  function Xr(t, l, e, a) {
    switch (yd(l)) {
      case 2:
        var u = Kh;
        break;
      case 8:
        u = Jh;
        break;
      default:
        u = hf;
    }
    e = u.bind(
      null,
      l,
      e,
      t
    ), u = void 0, !pc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, e, !0) : u !== void 0 ? t.addEventListener(l, e, {
      passive: u
    }) : t.addEventListener(l, e, !1);
  }
  function Pi(t, l, e, a, u) {
    var n = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (c = ua(i), c === null) return;
            if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              a = n = c;
              continue t;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    Vf(function() {
      var v = n, S = vc(e), z = [];
      t: {
        var g = ps.get(t);
        if (g !== void 0) {
          var p = Wu, R = t;
          switch (t) {
            case "keypress":
              if (Ju(e) === 0) break t;
            case "keydown":
            case "keyup":
              p = rm;
              break;
            case "focusin":
              R = "focus", p = Tc;
              break;
            case "focusout":
              R = "blur", p = Tc;
              break;
            case "beforeblur":
            case "afterblur":
              p = Tc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Pd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = hm;
              break;
            case hs:
            case ys:
            case vs:
              p = em;
              break;
            case gs:
              p = vm;
              break;
            case "scroll":
            case "scrollend":
              p = Fd;
              break;
            case "wheel":
              p = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Wf;
              break;
            case "toggle":
            case "beforetoggle":
              p = Em;
          }
          var G = (l & 4) !== 0, vt = !G && (t === "scroll" || t === "scrollend"), m = G ? g !== null ? g + "Capture" : null : g;
          G = [];
          for (var o = v, y; o !== null; ) {
            var b = o;
            if (y = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || y === null || m === null || (b = Wa(o, m), b != null && G.push(
              Ou(o, b, y)
            )), vt) break;
            o = o.return;
          }
          0 < G.length && (g = new p(
            g,
            R,
            null,
            e,
            S
          ), z.push({ event: g, listeners: G }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", g && e !== yc && (R = e.relatedTarget || e.fromElement) && (ua(R) || R[aa]))
            break t;
          if ((p || g) && (g = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, p ? (R = e.relatedTarget || e.toElement, p = v, R = R ? ua(R) : null, R !== null && (vt = Z(R), G = R.tag, R !== vt || G !== 5 && G !== 27 && G !== 6) && (R = null)) : (p = null, R = v), p !== R)) {
            if (G = Jf, b = "onMouseLeave", m = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (G = Wf, b = "onPointerLeave", m = "onPointerEnter", o = "pointer"), vt = p == null ? g : ka(p), y = R == null ? g : ka(R), g = new G(
              b,
              o + "leave",
              p,
              e,
              S
            ), g.target = vt, g.relatedTarget = y, b = null, ua(S) === v && (G = new G(
              m,
              o + "enter",
              R,
              e,
              S
            ), G.target = y, G.relatedTarget = vt, b = G), vt = b, p && R)
              l: {
                for (G = Sh, m = p, o = R, y = 0, b = m; b; b = G(b))
                  y++;
                b = 0;
                for (var Y = o; Y; Y = G(Y))
                  b++;
                for (; 0 < y - b; )
                  m = G(m), y--;
                for (; 0 < b - y; )
                  o = G(o), b--;
                for (; y--; ) {
                  if (m === o || o !== null && m === o.alternate) {
                    G = m;
                    break l;
                  }
                  m = G(m), o = G(o);
                }
                G = null;
              }
            else G = null;
            p !== null && Qr(
              z,
              g,
              p,
              G,
              !1
            ), R !== null && vt !== null && Qr(
              z,
              vt,
              R,
              G,
              !0
            );
          }
        }
        t: {
          if (g = v ? ka(v) : window, p = g.nodeName && g.nodeName.toLowerCase(), p === "select" || p === "input" && g.type === "file")
            var it = as;
          else if (ls(g))
            if (us)
              it = Um;
            else {
              it = Om;
              var B = Mm;
            }
          else
            p = g.nodeName, !p || p.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? v && hc(v.elementType) && (it = as) : it = Dm;
          if (it && (it = it(t, v))) {
            es(
              z,
              it,
              e,
              S
            );
            break t;
          }
          B && B(t, g, v), t === "focusout" && v && g.type === "number" && v.memoizedProps.value != null && mc(g, "number", g.value);
        }
        switch (B = v ? ka(v) : window, t) {
          case "focusin":
            (ls(B) || B.contentEditable === "true") && (ma = B, Oc = v, au = null);
            break;
          case "focusout":
            au = Oc = ma = null;
            break;
          case "mousedown":
            Dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Dc = !1, ds(z, e, S);
            break;
          case "selectionchange":
            if (Hm) break;
          case "keydown":
          case "keyup":
            ds(z, e, S);
        }
        var K;
        if (Ac)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          da ? Pf(t, e) && (tt = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (tt = "onCompositionStart");
        tt && ($f && e.locale !== "ko" && (da || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && da && (K = wf()) : (fe = S, Sc = "value" in fe ? fe.value : fe.textContent, da = !0)), B = Xn(v, tt), 0 < B.length && (tt = new kf(
          tt,
          t,
          null,
          e,
          S
        ), z.push({ event: tt, listeners: B }), K ? tt.data = K : (K = ts(e), K !== null && (tt.data = K)))), (K = Tm ? zm(t, e) : Am(t, e)) && (tt = Xn(v, "onBeforeInput"), 0 < tt.length && (B = new kf(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), z.push({
          event: B,
          listeners: tt
        }), B.data = K)), yh(
          z,
          t,
          v,
          e,
          S
        );
      }
      Gr(z, l);
    });
  }
  function Ou(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Xn(t, l) {
    for (var e = l + "Capture", a = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Wa(t, e), u != null && a.unshift(
        Ou(t, u, n)
      ), u = Wa(t, l), u != null && a.push(
        Ou(t, u, n)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Sh(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qr(t, l, e, a, u) {
    for (var n = l._reactName, c = []; e !== null && e !== a; ) {
      var i = e, f = i.alternate, v = i.stateNode;
      if (i = i.tag, f !== null && f === a) break;
      i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, u ? (v = Wa(e, n), v != null && c.unshift(
        Ou(e, v, f)
      )) : u || (v = Wa(e, n), v != null && c.push(
        Ou(e, v, f)
      ))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var Eh = /\r\n?/g, bh = /\u0000|\uFFFD/g;
  function Lr(t) {
    return (typeof t == "string" ? t : "" + t).replace(Eh, `
`).replace(bh, "");
  }
  function Zr(t, l) {
    return l = Lr(l), Lr(t) === l;
  }
  function yt(t, l, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string" ? l === "body" || l === "textarea" && a === "" || sa(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && sa(t, "" + a);
        break;
      case "className":
        Zu(t, "class", a);
        break;
      case "tabIndex":
        Zu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zu(t, e, a);
        break;
      case "style":
        Lf(t, a, n);
        break;
      case "data":
        if (l !== "object") {
          Zu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = wu("" + a), t.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && yt(t, l, "name", u.name, u, null), yt(
            t,
            l,
            "formEncType",
            u.formEncType,
            u,
            null
          ), yt(
            t,
            l,
            "formMethod",
            u.formMethod,
            u,
            null
          ), yt(
            t,
            l,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (yt(t, l, "encType", u.encType, u, null), yt(t, l, "method", u.method, u, null), yt(t, l, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        a = wu("" + a), t.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (t.onclick = Vl);
        break;
      case "onScroll":
        a != null && I("scroll", t);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(h(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = wu("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
        break;
      case "popover":
        I("beforetoggle", t), I("toggle", t), Lu(t, "popover", a);
        break;
      case "xlinkActuate":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Zl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Zl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Lu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Wd.get(e) || e, Lu(t, e, a));
    }
  }
  function tf(t, l, e, a, u, n) {
    switch (e) {
      case "style":
        Lf(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(h(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? sa(t, a) : (typeof a == "number" || typeof a == "bigint") && sa(t, "" + a);
        break;
      case "onScroll":
        a != null && I("scroll", t);
        break;
      case "onScrollEnd":
        a != null && I("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Vl);
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
        if (!Rf.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), l = e.slice(2, u ? e.length - 7 : void 0), n = t[ul] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof a == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, u);
              break t;
            }
            e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Lu(t, e, a);
          }
    }
  }
  function kt(t, l, e) {
    switch (l) {
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
        I("error", t), I("load", t);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, l));
                default:
                  yt(t, l, n, c, e, null);
              }
          }
        u && yt(t, l, "srcSet", e.srcSet, e, null), a && yt(t, l, "src", e.src, e, null);
        return;
      case "input":
        I("invalid", t);
        var i = n = c = u = null, f = null, v = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var S = e[a];
            if (S != null)
              switch (a) {
                case "name":
                  u = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  v = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(h(137, l));
                  break;
                default:
                  yt(t, l, a, S, e, null);
              }
          }
        xf(
          t,
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
        I("invalid", t), a = c = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (i = e[u], i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                a = i;
              default:
                yt(t, l, u, i, e, null);
            }
        l = n, e = c, t.multiple = !!a, l != null ? fa(t, !!a, l, !1) : e != null && fa(t, !!a, e, !0);
        return;
      case "textarea":
        I("invalid", t), n = u = a = null;
        for (c in e)
          if (e.hasOwnProperty(c) && (i = e[c], i != null))
            switch (c) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(h(91));
                break;
              default:
                yt(t, l, c, i, e, null);
            }
        Xf(t, a, u, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) && (a = e[f], a != null) && (f === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : yt(t, l, f, a, e, null));
        return;
      case "dialog":
        I("beforetoggle", t), I("toggle", t), I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mu.length; a++)
          I(Mu[a], t);
        break;
      case "image":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", t), I("load", t);
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
        for (v in e)
          if (e.hasOwnProperty(v) && (a = e[v], a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, l));
              default:
                yt(t, l, v, a, e, null);
            }
        return;
      default:
        if (hc(l)) {
          for (S in e)
            e.hasOwnProperty(S) && (a = e[S], a !== void 0 && tf(
              t,
              l,
              S,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && (a = e[i], a != null && yt(t, l, i, a, e, null));
  }
  function Th(t, l, e, a) {
    switch (l) {
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
        var u = null, n = null, c = null, i = null, f = null, v = null, S = null;
        for (p in e) {
          var z = e[p];
          if (e.hasOwnProperty(p) && z != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                a.hasOwnProperty(p) || yt(t, l, p, null, a, z);
            }
        }
        for (var g in a) {
          var p = a[g];
          if (z = e[g], a.hasOwnProperty(g) && (p != null || z != null))
            switch (g) {
              case "type":
                n = p;
                break;
              case "name":
                u = p;
                break;
              case "checked":
                v = p;
                break;
              case "defaultChecked":
                S = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(h(137, l));
                break;
              default:
                p !== z && yt(
                  t,
                  l,
                  g,
                  p,
                  a,
                  z
                );
            }
        }
        dc(
          t,
          c,
          i,
          f,
          v,
          S,
          n,
          u
        );
        return;
      case "select":
        p = c = i = g = null;
        for (n in e)
          if (f = e[n], e.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = f;
              default:
                a.hasOwnProperty(n) || yt(
                  t,
                  l,
                  n,
                  null,
                  a,
                  f
                );
            }
        for (u in a)
          if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && yt(
                  t,
                  l,
                  u,
                  n,
                  a,
                  f
                );
            }
        l = i, e = c, a = p, g != null ? fa(t, !!e, g, !1) : !!a != !!e && (l != null ? fa(t, !!e, l, !0) : fa(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = g = null;
        for (i in e)
          if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, l, i, null, a, u);
            }
        for (c in a)
          if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                p = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(h(91));
                break;
              default:
                u !== n && yt(t, l, c, u, a, n);
            }
        Gf(t, g, p);
        return;
      case "option":
        for (var R in e)
          g = e[R], e.hasOwnProperty(R) && g != null && !a.hasOwnProperty(R) && (R === "selected" ? t.selected = !1 : yt(
            t,
            l,
            R,
            null,
            a,
            g
          ));
        for (f in a)
          g = a[f], p = e[f], a.hasOwnProperty(f) && g !== p && (g != null || p != null) && (f === "selected" ? t.selected = g && typeof g != "function" && typeof g != "symbol" : yt(
            t,
            l,
            f,
            g,
            a,
            p
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
        for (var G in e)
          g = e[G], e.hasOwnProperty(G) && g != null && !a.hasOwnProperty(G) && yt(t, l, G, null, a, g);
        for (v in a)
          if (g = a[v], p = e[v], a.hasOwnProperty(v) && g !== p && (g != null || p != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(h(137, l));
                break;
              default:
                yt(
                  t,
                  l,
                  v,
                  g,
                  a,
                  p
                );
            }
        return;
      default:
        if (hc(l)) {
          for (var vt in e)
            g = e[vt], e.hasOwnProperty(vt) && g !== void 0 && !a.hasOwnProperty(vt) && tf(
              t,
              l,
              vt,
              void 0,
              a,
              g
            );
          for (S in a)
            g = a[S], p = e[S], !a.hasOwnProperty(S) || g === p || g === void 0 && p === void 0 || tf(
              t,
              l,
              S,
              g,
              a,
              p
            );
          return;
        }
    }
    for (var m in e)
      g = e[m], e.hasOwnProperty(m) && g != null && !a.hasOwnProperty(m) && yt(t, l, m, null, a, g);
    for (z in a)
      g = a[z], p = e[z], !a.hasOwnProperty(z) || g === p || g == null && p == null || yt(t, l, z, g, a, p);
  }
  function Vr(t) {
    switch (t) {
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
  function zh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && Vr(c)) {
          for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
            var f = e[a], v = f.startTime;
            if (v > i) break;
            var S = f.transferSize, z = f.initiatorType;
            S && Vr(z) && (f = f.responseEnd, c += S * (f < i ? 1 : (i - v) / (f - v)));
          }
          if (--a, l += 8 * (n + c) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var lf = null, ef = null;
  function Qn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function wr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Kr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function af(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var uf = null;
  function Ah() {
    var t = window.event;
    return t && t.type === "popstate" ? t === uf ? !1 : (uf = t, !0) : (uf = null, !1);
  }
  var Jr = typeof setTimeout == "function" ? setTimeout : void 0, _h = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = typeof Promise == "function" ? Promise : void 0, Nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof kr < "u" ? function(t) {
    return kr.resolve(null).then(t).catch(Mh);
  } : Jr;
  function Mh(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function _e(t) {
    return t === "head";
  }
  function Wr(t, l) {
    var e = l, a = 0;
    do {
      var u = e.nextSibling;
      if (t.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(u), Xa(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Du(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, Du(e);
          for (var n = e.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[Ja] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
          }
        } else
          e === "body" && Du(t.ownerDocument.body);
      e = u;
    } while (e);
    Xa(l);
  }
  function $r(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = a;
    } while (e);
  }
  function nf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nf(e), oc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Oh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ja])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = Cl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Dh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Fr(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Cl(t.nextSibling), t === null)) return null;
    return t;
  }
  function cf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ff(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Uh(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var a = function() {
        l(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Cl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var sf = null;
  function Ir(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return Cl(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Pr(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function td(t, l, e) {
    switch (l = Qn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(h(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(h(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(h(454));
        return t;
      default:
        throw Error(h(451));
    }
  }
  function Du(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    oc(t);
  }
  var Hl = /* @__PURE__ */ new Map(), ld = /* @__PURE__ */ new Set();
  function Ln(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ce = D.d;
  D.d = {
    f: Ch,
    r: Hh,
    D: Rh,
    C: Bh,
    L: qh,
    m: Yh,
    X: xh,
    S: jh,
    M: Gh
  };
  function Ch() {
    var t = ce.f(), l = Rn();
    return t || l;
  }
  function Hh(t) {
    var l = na(t);
    l !== null && l.tag === 5 && l.type === "form" ? po(l) : ce.r(t);
  }
  var ja = typeof document > "u" ? null : document;
  function ed(t, l, e) {
    var a = ja;
    if (a && typeof l == "string" && l) {
      var u = Al(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), ld.has(u) || (ld.add(u), t = { rel: t, crossOrigin: e, href: l }, a.querySelector(u) === null && (l = a.createElement("link"), kt(l, "link", t), Xt(l), a.head.appendChild(l)));
    }
  }
  function Rh(t) {
    ce.D(t), ed("dns-prefetch", t, null);
  }
  function Bh(t, l) {
    ce.C(t, l), ed("preconnect", t, l);
  }
  function qh(t, l, e) {
    ce.L(t, l, e);
    var a = ja;
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + Al(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Al(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Al(
        e.imageSizes
      ) + '"]')) : u += '[href="' + Al(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = xa(t);
          break;
        case "script":
          n = Ga(t);
      }
      Hl.has(n) || (t = C(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Hl.set(n, t), a.querySelector(u) !== null || l === "style" && a.querySelector(Uu(n)) || l === "script" && a.querySelector(Cu(n)) || (l = a.createElement("link"), kt(l, "link", t), Xt(l), a.head.appendChild(l)));
    }
  }
  function Yh(t, l) {
    ce.m(t, l);
    var e = ja;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + Al(a) + '"][href="' + Al(t) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ga(t);
      }
      if (!Hl.has(n) && (t = C({ rel: "modulepreload", href: t }, l), Hl.set(n, t), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Cu(n)))
              return;
        }
        a = e.createElement("link"), kt(a, "link", t), Xt(a), e.head.appendChild(a);
      }
    }
  }
  function jh(t, l, e) {
    ce.S(t, l, e);
    var a = ja;
    if (a && t) {
      var u = ca(a).hoistableStyles, n = xa(t);
      l = l || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = a.querySelector(
          Uu(n)
        ))
          i.loading = 5;
        else {
          t = C(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Hl.get(n)) && of(t, e);
          var f = c = a.createElement("link");
          Xt(f), kt(f, "link", t), f._p = new Promise(function(v, S) {
            f.onload = v, f.onerror = S;
          }), f.addEventListener("load", function() {
            i.loading |= 1;
          }), f.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Zn(c, l, a);
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
  function xh(t, l) {
    ce.X(t, l);
    var e = ja;
    if (e && t) {
      var a = ca(e).hoistableScripts, u = Ga(t), n = a.get(u);
      n || (n = e.querySelector(Cu(u)), n || (t = C({ src: t, async: !0 }, l), (l = Hl.get(u)) && rf(t, l), n = e.createElement("script"), Xt(n), kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Gh(t, l) {
    ce.M(t, l);
    var e = ja;
    if (e && t) {
      var a = ca(e).hoistableScripts, u = Ga(t), n = a.get(u);
      n || (n = e.querySelector(Cu(u)), n || (t = C({ src: t, async: !0, type: "module" }, l), (l = Hl.get(u)) && rf(t, l), n = e.createElement("script"), Xt(n), kt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function ad(t, l, e, a) {
    var u = (u = k.current) ? Ln(u) : null;
    if (!u) throw Error(h(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = xa(e.href), e = ca(
          u
        ).hoistableStyles, a = e.get(l), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = xa(e.href);
          var n = ca(
            u
          ).hoistableStyles, c = n.get(t);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, c), (n = u.querySelector(
            Uu(t)
          )) && !n._p && (c.instance = n, c.state.loading = 5), Hl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Hl.set(t, e), n || Xh(
            u,
            t,
            e,
            c.state
          ))), l && a === null)
            throw Error(h(528, ""));
          return c;
        }
        if (l && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ga(e), e = ca(
          u
        ).hoistableScripts, a = e.get(l), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, t));
    }
  }
  function xa(t) {
    return 'href="' + Al(t) + '"';
  }
  function Uu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ud(t) {
    return C({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Xh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
      return a.loading |= 1;
    }), l.addEventListener("error", function() {
      return a.loading |= 2;
    }), kt(l, "link", e), Xt(l), t.head.appendChild(l));
  }
  function Ga(t) {
    return '[src="' + Al(t) + '"]';
  }
  function Cu(t) {
    return "script[async]" + t;
  }
  function nd(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Al(e.href) + '"]'
          );
          if (a)
            return l.instance = a, Xt(a), a;
          var u = C({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Xt(a), kt(a, "style", u), Zn(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          u = xa(e.href);
          var n = t.querySelector(
            Uu(u)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Xt(n), n;
          a = ud(e), (u = Hl.get(u)) && of(a, u), n = (t.ownerDocument || t).createElement("link"), Xt(n);
          var c = n;
          return c._p = new Promise(function(i, f) {
            c.onload = i, c.onerror = f;
          }), kt(n, "link", a), l.state.loading |= 4, Zn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Ga(e.src), (u = t.querySelector(
            Cu(n)
          )) ? (l.instance = u, Xt(u), u) : (a = e, (u = Hl.get(n)) && (a = C({}, e), rf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Xt(u), kt(u, "link", a), t.head.appendChild(u), l.instance = u);
        case "void":
          return null;
        default:
          throw Error(h(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Zn(a, e.precedence, t));
    return l.instance;
  }
  function Zn(t, l, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var i = a[c];
      if (i.dataset.precedence === l) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function of(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function rf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Vn = null;
  function cd(t, l, e) {
    if (Vn === null) {
      var a = /* @__PURE__ */ new Map(), u = Vn = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Vn, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(t)) return a;
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[Ja] || n[Vt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var i = a.get(c);
        i ? i.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function id(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Qh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function fd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lh(t, l, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = xa(a.href), n = l.querySelector(
          Uu(u)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = wn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, Xt(n);
          return;
        }
        n = l.ownerDocument || l, a = ud(a), (u = Hl.get(u)) && of(a, u), n = n.createElement("link"), Xt(n);
        var c = n;
        c._p = new Promise(function(i, f) {
          c.onload = i, c.onerror = f;
        }), kt(n, "link", a), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = wn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var df = 0;
  function Zh(t, l) {
    return t.stylesheets && t.count === 0 && Jn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (t.stylesheets && Jn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && df === 0 && (df = 62500 * zh());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Jn(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > df ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function wn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Kn = null;
  function Jn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Kn = /* @__PURE__ */ new Map(), l.forEach(Vh, t), Kn = null, wn.call(t));
  }
  function Vh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Kn.get(t);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Kn.set(t, e);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = l.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = wn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Hu = {
    $$typeof: At,
    Provider: null,
    Consumer: null,
    _currentValue: x,
    _currentValue2: x,
    _threadCount: 0
  };
  function wh(t, l, e, a, u, n, c, i, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = cc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cc(0), this.hiddenUpdates = cc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function sd(t, l, e, a, u, n, c, i, f, v, S, z) {
    return t = new wh(
      t,
      l,
      e,
      c,
      f,
      v,
      S,
      z,
      i
    ), l = 1, n === !0 && (l |= 24), n = hl(3, null, null, l), t.current = n, n.stateNode = t, l = Vc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: l
    }, kc(n), t;
  }
  function od(t) {
    return t ? (t = va, t) : va;
  }
  function rd(t, l, e, a, u, n) {
    u = od(u), a.context === null ? a.context = u : a.pendingContext = u, a = he(l), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = ye(t, a, l), e !== null && (ol(e, t, l), ou(e, t, l));
  }
  function dd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function mf(t, l) {
    dd(t, l), (t = t.alternate) && dd(t, l);
  }
  function md(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Ye(t, 67108864);
      l !== null && ol(l, t, 67108864), mf(t, 67108864);
    }
  }
  function hd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Sl();
      l = ic(l);
      var e = Ye(t, l);
      e !== null && ol(e, t, l), mf(t, l);
    }
  }
  var kn = !0;
  function Kh(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = D.p;
    try {
      D.p = 2, hf(t, l, e, a);
    } finally {
      D.p = n, E.T = u;
    }
  }
  function Jh(t, l, e, a) {
    var u = E.T;
    E.T = null;
    var n = D.p;
    try {
      D.p = 8, hf(t, l, e, a);
    } finally {
      D.p = n, E.T = u;
    }
  }
  function hf(t, l, e, a) {
    if (kn) {
      var u = yf(a);
      if (u === null)
        Pi(
          t,
          l,
          a,
          Wn,
          e
        ), vd(t, a);
      else if (Wh(
        u,
        t,
        l,
        e,
        a
      ))
        a.stopPropagation();
      else if (vd(t, a), l & 4 && -1 < kh.indexOf(t)) {
        for (; u !== null; ) {
          var n = na(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = Ce(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << 31 - dl(c);
                      i.entanglements[1] |= f, c &= ~f;
                    }
                    Xl(n), (st & 6) === 0 && (Cn = ll() + 500, Nu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Ye(n, 2), i !== null && ol(i, n, 2), Rn(), mf(n, 2);
            }
          if (n = yf(a), n === null && Pi(
            t,
            l,
            a,
            Wn,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        Pi(
          t,
          l,
          a,
          null,
          e
        );
    }
  }
  function yf(t) {
    return t = vc(t), vf(t);
  }
  var Wn = null;
  function vf(t) {
    if (Wn = null, t = ua(t), t !== null) {
      var l = Z(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = j(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = X(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Wn = t, null;
  }
  function yd(t) {
    switch (t) {
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
        switch (nc()) {
          case ju:
            return 2;
          case Va:
            return 8;
          case N:
          case q:
            return 32;
          case $:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gf = !1, Ne = null, Me = null, Oe = null, Ru = /* @__PURE__ */ new Map(), Bu = /* @__PURE__ */ new Map(), De = [], kh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ne = null;
        break;
      case "dragenter":
      case "dragleave":
        Me = null;
        break;
      case "mouseover":
      case "mouseout":
        Oe = null;
        break;
      case "pointerover":
      case "pointerout":
        Ru.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bu.delete(l.pointerId);
    }
  }
  function qu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = na(l), l !== null && md(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function Wh(t, l, e, a, u) {
    switch (l) {
      case "focusin":
        return Ne = qu(
          Ne,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return Me = qu(
          Me,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Oe = qu(
          Oe,
          t,
          l,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ru.set(
          n,
          qu(
            Ru.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, Bu.set(
          n,
          qu(
            Bu.get(n) || null,
            t,
            l,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function gd(t) {
    var l = ua(t.target);
    if (l !== null) {
      var e = Z(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = j(e), l !== null) {
            t.blockedOn = l, Uf(t.priority, function() {
              hd(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = X(e), l !== null) {
            t.blockedOn = l, Uf(t.priority, function() {
              hd(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function $n(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = yf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        yc = a, e.target.dispatchEvent(a), yc = null;
      } else
        return l = na(e), l !== null && md(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function pd(t, l, e) {
    $n(t) && e.delete(l);
  }
  function $h() {
    gf = !1, Ne !== null && $n(Ne) && (Ne = null), Me !== null && $n(Me) && (Me = null), Oe !== null && $n(Oe) && (Oe = null), Ru.forEach(pd), Bu.forEach(pd);
  }
  function Fn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, gf || (gf = !0, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      $h
    )));
  }
  var In = null;
  function Sd(t) {
    In !== t && (In = t, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      function() {
        In === t && (In = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], u = t[l + 2];
          if (typeof a != "function") {
            if (vf(a || e) === null)
              continue;
            break;
          }
          var n = na(e);
          n !== null && (t.splice(l, 3), l -= 3, hi(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Xa(t) {
    function l(f) {
      return Fn(f, t);
    }
    Ne !== null && Fn(Ne, t), Me !== null && Fn(Me, t), Oe !== null && Fn(Oe, t), Ru.forEach(l), Bu.forEach(l);
    for (var e = 0; e < De.length; e++) {
      var a = De[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < De.length && (e = De[0], e.blockedOn === null); )
      gd(e), e.blockedOn === null && De.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[ul] || null;
        if (typeof n == "function")
          c || Sd(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[ul] || null)
              i = c.formAction;
            else if (vf(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), Sd(e);
        }
      }
  }
  function Ed() {
    function t(n) {
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
    function l() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  Pn.prototype.render = pf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(h(409));
    var e = l.current, a = Sl();
    rd(e, a, t, l, null, null);
  }, Pn.prototype.unmount = pf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      rd(t.current, 2, null, t, null, null), Rn(), l[aa] = null;
    }
  };
  function Pn(t) {
    this._internalRoot = t;
  }
  Pn.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Df();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < De.length && l !== 0 && l < De[e].priority; e++) ;
      De.splice(e, 0, t), e === 0 && gd(t);
    }
  };
  var bd = _.version;
  if (bd !== "19.2.4")
    throw Error(
      h(
        527,
        bd,
        "19.2.4"
      )
    );
  D.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(h(188)) : (t = Object.keys(t).join(","), Error(h(268, t)));
    return t = A(l), t = t !== null ? w(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Fh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tc.isDisabled && tc.supportsFiber)
      try {
        rl = tc.inject(
          Fh
        ), Ct = tc;
      } catch {
      }
  }
  return Yu.createRoot = function(t, l) {
    if (!ct(t)) throw Error(h(299));
    var e = !1, a = "", u = Oo, n = Do, c = Uo;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = sd(
      t,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      c,
      Ed
    ), t[aa] = l.current, Ii(t), new pf(l);
  }, Yu.hydrateRoot = function(t, l, e) {
    if (!ct(t)) throw Error(h(299));
    var a = !1, u = "", n = Oo, c = Do, i = Uo, f = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), l = sd(
      t,
      1,
      !0,
      l,
      e ?? null,
      a,
      u,
      f,
      n,
      c,
      i,
      Ed
    ), l.context = od(null), e = l.current, a = Sl(), a = ic(a), u = he(a), u.callback = null, ye(e, u, a), e = a, l.current.lanes = e, Ka(l, e), Xl(l), t[aa] = l.current, Ii(t), new Pn(l);
  }, Yu.version = "19.2.4", Yu;
}
var Dd;
function ny() {
  if (Dd) return Ef.exports;
  Dd = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (_) {
        console.error(_);
      }
  }
  return d(), Ef.exports = uy(), Ef.exports;
}
var cy = ny();
const iy = /* @__PURE__ */ Bd(cy), Ud = "sf_session_id";
function fy() {
  try {
    let d = sessionStorage.getItem(Ud);
    return d || (d = crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`, sessionStorage.setItem(Ud, d)), d;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}
function sy(d) {
  const _ = (d?.apiBaseUrl || "").trim().replace(/\/+$/, "");
  if (_) return _;
  const M = (d?.proxyBase || "/apps/space-funnel").replace(/\/+$/, "");
  return `${M.endsWith("/api") ? M.slice(0, -4) : M}/api`;
}
function oy() {
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
function ry() {
  try {
    const d = {};
    if (typeof window.Shopify < "u" && (d.shop = window.Shopify.shop || null, d.shopCurrency = window.Shopify.currency?.active || null, d.shopLocale = window.Shopify.locale || null, d.shopThemeId = window.Shopify.theme?.id || null, d.shopThemeName = window.Shopify.theme?.name || null, d.shopCountry = window.Shopify.country || null), typeof window.__st < "u" && (d.customerId = window.__st.cid || null, d.shopId = window.__st.sid || null), typeof window.ShopifyAnalytics < "u") {
      const h = window.ShopifyAnalytics.meta || {};
      h.page && (d.pageType = h.page.pageType || null, d.resourceType = h.page.resourceType || null, d.resourceId = h.page.resourceId || null), h.product && (d.shopifyProductId = h.product.id || null, d.shopifyProductType = h.product.type || null, d.shopifyProductVendor = h.product.vendor || null);
    }
    const _ = document.querySelector('meta[name="shopify-customer-id"]');
    _ && !d.customerId && (d.customerId = _.content || null);
    const M = document.cookie.match(/(?:^|;\s*)cart=([^;]+)/);
    return M && (d.cartToken = M[1]), d;
  } catch {
    return {};
  }
}
function dy(d, _) {
  if (typeof navigator < "u" && navigator.sendBeacon) {
    const M = new Blob([_], { type: "text/plain" });
    if (navigator.sendBeacon(d, M)) return;
  }
  try {
    fetch(d, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: _,
      keepalive: !0
    }).catch(() => {
    });
  } catch {
  }
}
function my(d, _) {
  const M = sy(d), h = fy(), ct = _, Z = oy(), j = ry(), X = Date.now();
  function U(A, w) {
    try {
      const C = JSON.stringify({
        sessionId: h,
        eventName: A,
        tool: ct,
        properties: {
          ...w,
          _page: Z.pagePath,
          _pageUrl: Z.pageUrl,
          _isMobile: Z.isMobile,
          _viewport: `${Z.viewportWidth}x${Z.viewportHeight}`,
          _elapsed: Date.now() - X,
          // Shopify context on every event
          _shop: j.shop || null,
          _customerId: j.customerId || null,
          _shopCurrency: j.shopCurrency || null,
          _pageType: j.pageType || null,
          _resourceType: j.resourceType || null,
          _resourceId: j.resourceId || null
        }
      });
      dy(`${M}/analytics/event`, C);
    } catch {
    }
  }
  try {
    U("widget_loaded", {
      pageTitle: Z.pageTitle,
      referrer: Z.referrer,
      screenWidth: Z.screenWidth,
      screenHeight: Z.screenHeight,
      language: Z.language,
      // Full Shopify context on widget_loaded
      shopifyShop: j.shop,
      shopifyCustomerId: j.customerId,
      shopifyCurrency: j.shopCurrency,
      shopifyLocale: j.shopLocale,
      shopifyTheme: j.shopThemeName,
      shopifyThemeId: j.shopThemeId,
      shopifyCountry: j.shopCountry,
      shopifyPageType: j.pageType,
      shopifyResourceType: j.resourceType,
      shopifyResourceId: j.resourceId,
      shopifyProductId: j.shopifyProductId,
      shopifyProductType: j.shopifyProductType,
      shopifyProductVendor: j.shopifyProductVendor
    });
  } catch {
  }
  return Object.freeze({ track: U, sessionId: h, startTime: X });
}
function Ft(d) {
  return d == null ? "" : String(d).trim();
}
const hy = /\bfloor\b/i, yy = /\b(desk|table)\b/i, vy = /\b(wall|sconce)\b/i, gy = /\b(pendant|hanging|chandelier|ceiling)\b/i;
function Cd(d) {
  const _ = (d ?? "").trim();
  return _ ? hy.test(_) ? "floor_lamp" : yy.test(_) ? "desk_lamp" : vy.test(_) ? "wall_light" : gy.test(_) ? "pendant" : /\b(lamp|light|lighting|fixture|lantern)\b/i.test(_) ? "other_light" : null : null;
}
function qd(d, _) {
  return Cd(d) || Cd(_);
}
function py(d) {
  const _ = [], M = Ft(d?.title ?? d?.name ?? d?.handle ?? d?.id ?? "Product");
  d?.category || qd(d?.productType, M);
  const h = Ft(d?.featuredImage), ct = Ft(d?.variantId);
  return Ft(d?.id) || _.push(`${M}: missing product id.`), Ft(d?.handle) || _.push(`${M}: missing product handle.`), h || _.push(`${M}: missing featured image.`), ct || _.push(`${M}: missing variant id.`), _;
}
function Sy(d, _) {
  const M = Ft(d?.title) || Ft(d?.name) || Ft(d?.handle) || Ft(d?.id), h = d?.category || qd(d?.productType, M) || "other_light", ct = Number(d?.price);
  return {
    id: Ft(d?.id),
    handle: Ft(d?.handle),
    url: Ft(d?.url),
    title: M,
    name: M,
    price: Number.isFinite(ct) ? ct : 0,
    variantId: Ft(d?.variantId),
    featuredImage: Ft(d?.featuredImage),
    productType: Ft(d?.productType),
    variants: Array.isArray(d?.variants) ? d.variants : [],
    category: h,
    listIndex: _
  };
}
function Ey(d = []) {
  const _ = [], M = /* @__PURE__ */ new Map(), h = [];
  for (const [ct, Z] of d.entries()) {
    const j = py(Z), X = Sy(Z, ct);
    if (j.length > 0) {
      h.push({
        id: X.id || Ft(Z?.id),
        title: X.title,
        issues: j
      });
      continue;
    }
    M.has(X.id) || (_.push(X), M.set(X.id, X));
  }
  return {
    products: _,
    productMap: M,
    invalidProducts: h,
    issues: h.flatMap((ct) => ct.issues)
  };
}
function Yd(d) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(d || 0);
}
function by(d) {
  const _ = (d?.apiBaseUrl || "").trim().replace(/\/+$/, "");
  if (_) return _;
  const M = (d?.proxyBase || "/apps/space-funnel").replace(/\/+$/, "");
  return `${M.endsWith("/api") ? M.slice(0, -4) : M}/api`;
}
function lc(d) {
  return new Promise((_, M) => {
    const h = new FileReader();
    h.onload = () => _(h.result), h.onerror = () => M(new Error("Read failed")), h.readAsDataURL(d);
  });
}
async function Ty(d) {
  if (typeof window > "u" || typeof window.createImageBitmap != "function") return lc(d);
  const _ = await window.createImageBitmap(d), M = Math.min(1, 1600 / Math.max(_.width, _.height)), h = Math.max(1, Math.round(_.width * M)), ct = Math.max(1, Math.round(_.height * M)), Z = document.createElement("canvas");
  Z.width = h, Z.height = ct;
  const j = Z.getContext("2d");
  if (!j) return lc(d);
  j.drawImage(_, 0, 0, h, ct), _.close();
  const X = await new Promise((U) => Z.toBlob(U, "image/jpeg", 0.82));
  return lc(X || d);
}
function zy(d) {
  const _ = /* @__PURE__ */ new Set();
  return (d?.placements ?? []).filter((M) => M.variantId).filter((M) => _.has(M.variantId) ? !1 : (_.add(M.variantId), !0)).map((M) => ({ id: M.variantId, quantity: 1 }));
}
const Qa = ["intro", "age", "space", "upload", "prefs", "loading", "results"], Ay = [
  { value: "living", label: "Living Room", emoji: "🛋️" },
  { value: "bedroom", label: "Bedroom", emoji: "🛏️" },
  { value: "office", label: "Home Office", emoji: "💻" },
  { value: "dining", label: "Dining Room", emoji: "🍽️" },
  { value: "kitchen", label: "Kitchen", emoji: "🍳" },
  { value: "bathroom", label: "Bathroom", emoji: "🛁" },
  { value: "exterior", label: "Home Exterior", emoji: "🏡" },
  { value: "commercial", label: "Office / Commercial", emoji: "🏢" }
], _y = { living: "living room", bedroom: "bedroom", office: "home office", dining: "dining room", kitchen: "kitchen", bathroom: "bathroom", exterior: "home exterior", commercial: "office space" };
function Ny({ placement: d, variants: _, onAddToCart: M, tracker: h }) {
  const [ct, Z] = nt.useState(!1), [j, X] = nt.useState(!1), [U, A] = nt.useState(d.variantId), w = _?.find((J) => String(J.id) === String(U)), C = w?.price ?? d.price, ot = _ && _.length > 1, Ot = d.assets?.heroUrl ? d.assets.heroUrl.startsWith("//") ? `https:${d.assets.heroUrl}` : d.assets.heroUrl : null;
  async function Yt() {
    Z(!0);
    const J = await M(U, d);
    Z(!1), J && X(!0);
  }
  return /* @__PURE__ */ s.createElement("article", { className: "sf-product-card" }, /* @__PURE__ */ s.createElement("div", { className: "sf-product-img" }, Ot ? /* @__PURE__ */ s.createElement("img", { src: Ot, alt: d.productName, loading: "lazy" }) : /* @__PURE__ */ s.createElement("div", { className: "sf-product-placeholder" })), /* @__PURE__ */ s.createElement("div", { className: "sf-product-body" }, /* @__PURE__ */ s.createElement("span", { className: "sf-product-cat" }, d.category.replace("_", " ")), /* @__PURE__ */ s.createElement("h3", null, d.productName), /* @__PURE__ */ s.createElement("span", { className: "sf-product-price" }, Yd(C)), /* @__PURE__ */ s.createElement("span", { className: "sf-promo" }, "Fall Sale: 30% off automatically at checkout"), ot && /* @__PURE__ */ s.createElement("select", { className: "sf-variant-select", value: U, onChange: (J) => {
    A(J.target.value), X(!1), h && h.track("variant_selected", { productId: d.productId, variantId: J.target.value });
  } }, _.map((J) => /* @__PURE__ */ s.createElement("option", { key: J.id, value: J.id, disabled: !J.available }, J.title, J.available ? "" : " — Sold out"))), /* @__PURE__ */ s.createElement("button", { className: `sf-atc-btn ${j ? "added" : ""}`, onClick: Yt, disabled: ct || j || !U || w && !w.available }, j ? "Added ✓" : ct ? "Adding…" : w && !w.available ? "Sold Out" : "Add to Cart"), d.productUrl && /* @__PURE__ */ s.createElement(
    "a",
    {
      href: d.productUrl,
      target: "_blank",
      rel: "noopener",
      className: "sf-view-link",
      onClick: () => h?.track("product_details_opened", { productId: d.productId, productName: d.productName, category: d.category })
    },
    "View Details"
  )));
}
function My({ config: d }) {
  const _ = nt.useMemo(() => my(d, "space_funnel"), [d]), M = nt.useRef(null), h = nt.useRef([]), ct = nt.useRef(null), Z = nt.useRef(null), j = nt.useMemo(() => {
    try {
      const N = sessionStorage.getItem("sf_results");
      return N ? JSON.parse(N) : null;
    } catch {
      return null;
    }
  }, []), [X, U] = nt.useState(j ? "results" : "intro"), [A, w] = nt.useState(j?.answers || {}), [C, ot] = nt.useState(j?.photoUrl || ""), [Ot, Yt] = nt.useState(j?.photoName || ""), [J, al] = nt.useState(j?.reviewPlan || null), [jt, El] = nt.useState(j?.renderedImageUrl || ""), [At, xt] = nt.useState(""), [It, Lt] = nt.useState(j?.usedProductIds || []), [W, Zt] = nt.useState(!1), [Pt, Ql] = nt.useState(/* @__PURE__ */ new Set()), [Wt, Dt] = nt.useState("a"), [bl, Ut] = nt.useState(0), [Tl, E] = nt.useState([]), [D, x] = nt.useState([]), [rt, et] = nt.useState(0), r = nt.useMemo(() => by(d), [d]), T = d?.sampleRoomUrl || null, O = nt.useMemo(() => (d?.allowedProducts ?? []).find((N) => N.showcaseBefore && N.showcaseAfter), [d]), H = O?.showcaseBefore || d?.showcaseBefore || null, Q = O?.showcaseAfter || d?.showcaseAfter || null, k = H ? H.startsWith("//") ? `https:${H}` : H : null, at = Q ? Q.startsWith("//") ? `https:${Q}` : Q : null, _t = nt.useMemo(() => Ey(d?.allowedProducts ?? []), [d]), pt = nt.useMemo(() => J?.placements?.reduce((N, q) => N + (q.price ?? 0), 0) ?? 0, [J]), tl = Qa.indexOf(X), We = (tl + 1) / Qa.length * 100, $e = tl > 0 && tl < 5, La = 2 * Math.PI * 54;
  nt.useEffect(() => () => h.current.forEach(clearTimeout), []), nt.useEffect(() => {
    const N = Date.now(), q = ct.current, $ = q ? Qa.indexOf(q.step) : -1;
    q && q.step !== X && _.track("step_transition", {
      fromStep: q.step,
      fromStepIndex: $,
      toStep: X,
      toStepIndex: tl,
      direction: tl >= $ ? "forward" : "backward",
      durationMs: Math.max(0, N - q.startedAt)
    }), _.track("step_viewed", {
      step: X,
      stepIndex: tl,
      restoredSession: !!j && X === "results"
    }), ct.current = {
      step: X,
      startedAt: N
    };
  }, [j, X, tl, _]), nt.useEffect(() => {
    const N = () => {
      const q = ct.current || { step: X, startedAt: Date.now() };
      _.track("session_exit", {
        step: q.step,
        stepIndex: Qa.indexOf(q.step),
        stepElapsedMs: Math.max(0, Date.now() - q.startedAt),
        totalElapsedMs: Math.max(0, Date.now() - _.startTime),
        completed: q.step === "results"
      });
    };
    return window.addEventListener("pagehide", N), () => window.removeEventListener("pagehide", N);
  }, [_]), nt.useEffect(() => {
    if (W && X === "loading") {
      Ut(100), et(100);
      const N = setTimeout(() => {
        _.track("results_viewed", {
          productCount: J?.placements?.length,
          totalPrice: pt,
          pipelineDurationMs: Z.current ? Date.now() - Z.current : null
        });
        try {
          sessionStorage.setItem("sf_results", JSON.stringify({
            answers: A,
            photoUrl: C,
            photoName: Ot,
            reviewPlan: J,
            renderedImageUrl: jt,
            usedProductIds: It
          }));
        } catch {
        }
        U("results");
      }, 1200);
      return () => clearTimeout(N);
    }
  }, [W, X, J, pt, _, A, C, Ot, jt, It]);
  function Ll() {
    $e && (_.track("navigation_clicked", { action: "back", fromStep: X, toStep: Qa[tl - 1] }), U(Qa[tl - 1]));
  }
  function Fe(N, q, $) {
    w((ut) => ({ ...ut, [N]: q })), _.track("quiz_answer", { key: N, value: q }), setTimeout(() => U($), 400);
  }
  async function Ie(N) {
    const q = N.target.files?.[0];
    if (q) {
      try {
        const $ = await Ty(q);
        ot($), Yt(q.name), _.track("photo_upload", {
          source: "file",
          fileType: q.type || "unknown",
          fileSizeKb: Math.round((q.size || 0) / 1024)
        });
      } catch {
        xt("Could not process image.");
      }
      N.target.value = "";
    }
  }
  function ec() {
    T && (ot(T), Yt("Sample room"), _.track("photo_upload", { source: "sample" }));
  }
  async function Za(N, q = []) {
    Zt(!1), al(null), El(""), xt(""), Z.current = Date.now();
    try {
      const $ = await fetch(`${r}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Session-Id": _.sessionId },
        body: JSON.stringify({ imageDataUrl: N, moodId: "warm", allowedProducts: _t.products, excludedProductIds: q })
      }), ut = await $.json();
      if (!$.ok) throw new Error(ut.error || "Review failed.");
      _.track("review_complete", {
        roomId: ut.reviewPlan.roomId,
        productCount: ut.reviewPlan.placements.length,
        pipelineDurationMs: Date.now() - Z.current
      }), ut.reviewPlan.placements.forEach((Ct) => _.track("product_recommended", { productId: Ct.productId, productName: Ct.productName, category: Ct.category, price: Ct.price })), al(ut.reviewPlan);
      const ea = await fetch(`${r}/render`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Session-Id": _.sessionId },
        body: JSON.stringify({ imageDataUrl: N, reviewPlan: ut.reviewPlan, allowedProducts: _t.products })
      }), rl = await ea.json();
      if (!ea.ok) throw new Error(rl.error || "Render failed.");
      al(rl.reviewPlan), El(rl.imageDataUrl), _.track("render_complete", {
        roomId: ut.reviewPlan.roomId,
        pipelineDurationMs: Date.now() - Z.current
      }), Lt((Ct) => [.../* @__PURE__ */ new Set([...Ct, ...rl.reviewPlan.placements.map((Yl) => Yl.productId)])]), Zt(!0);
    } catch ($) {
      const ut = $ instanceof Error ? $.message : "Something went wrong.";
      _.track("funnel_error", {
        stage: "pipeline",
        message: ut,
        step: X,
        pipelineDurationMs: Z.current ? Date.now() - Z.current : null
      }), xt(ut), U("upload");
    }
  }
  function Pe() {
    h.current.forEach(clearTimeout), h.current = [];
    const N = (q, $) => {
      const ut = setTimeout(q, $);
      h.current.push(ut);
    };
    N(() => Ut(20), 300), N(() => Ut(35), 3e3), N(() => {
      Dt("b"), Ut(50);
    }, 6e3), N(() => Ut(65), 9e3), N(() => {
      Dt("c"), Ut(75);
    }, 12e3), N(() => Ut(85), 16e3), N(() => {
      Dt("d"), Ut(90), et(90);
      let q = 90;
      const $ = setInterval(() => {
        q++, q >= 99 && (clearInterval($), q = 99), et(q);
      }, 500);
      h.current.push($);
    }, 2e4);
  }
  function ta() {
    _.track("pipeline_started", {
      age: A.age || null,
      requestedSpace: A.space || null,
      selectedProductCount: _t.products.length - Pt.size,
      excludedProductCount: Pt.size,
      photoSource: Ot === "Sample room" ? "sample" : "file"
    }), U("loading"), Dt("a"), Ut(0), E([]), x([]), et(0), Za(C, [...Pt]), Pe();
  }
  async function la() {
    if (typeof window.refreshCart == "function")
      try {
        await window.refreshCart();
      } catch {
      }
    if (typeof window.openCartDrawer == "function") {
      window.openCartDrawer();
      return;
    }
    document.dispatchEvent(new CustomEvent("cart:open"));
  }
  async function ac(N, q) {
    try {
      const $ = await fetch("/cart/add.js", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ items: [{ id: N, quantity: 1 }] }) }), ut = await $.json();
      if (!$.ok) throw new Error(ut.description || "Could not add to cart.");
      return _.track("add_single_to_cart", {
        action: "single",
        variantId: N,
        productId: q?.productId,
        productName: q?.productName,
        category: q?.category,
        revenue: q?.price
      }), await la(), !0;
    } catch ($) {
      return xt($.message), !1;
    }
  }
  async function uc() {
    const N = zy(J);
    if (N.length)
      try {
        const q = await fetch("/cart/add.js", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ items: N }) });
        if (!q.ok) {
          const $ = await q.json();
          throw new Error($.description || "Could not add to cart.");
        }
        _.track("add_all_to_cart", {
          action: "bundle",
          itemCount: N.length,
          revenue: pt
        }), await la();
      } catch (q) {
        xt(q.message);
      }
  }
  function ll() {
    _.track("start_over");
    try {
      sessionStorage.removeItem("sf_results");
    } catch {
    }
    U("intro"), w({}), ot(""), al(null), El(""), xt(""), Lt([]), Ql(/* @__PURE__ */ new Set());
  }
  function nc() {
    _.track("try_different", {
      previousProductCount: J?.placements?.length ?? 0,
      excludedProductCount: It.length
    }), U("loading"), Dt("a"), Ut(0), E([]), x([]), et(0), Za(C, It), Pe();
  }
  function ju(N) {
    Ql((q) => {
      const $ = new Set(q), ut = $.has(N);
      return ut ? $.delete(N) : $.add(N), _.track("product_filter_toggled", {
        productId: N,
        included: ut,
        excludedProductCount: $.size
      }), $;
    });
  }
  const Va = _y[A.space] || "space";
  return /* @__PURE__ */ s.createElement("main", { className: "app-shell" }, X !== "intro" && /* @__PURE__ */ s.createElement("div", { className: "sf-progress" }, /* @__PURE__ */ s.createElement("div", { className: "sf-progress-fill", style: { width: `${We}%` } })), $e && /* @__PURE__ */ s.createElement("button", { className: "sf-back", onClick: Ll }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M10 3L5 8l5 5" })), "Back"), X === "intro" && /* @__PURE__ */ s.createElement("section", { className: "sf-step sf-step-intro" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner" }, /* @__PURE__ */ s.createElement("h2", { className: "sf-title sf-title-hero" }, "Reimagine your room", /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("span", { className: "sf-title-accent" }, "with the perfect light")), /* @__PURE__ */ s.createElement("p", { className: "sf-sub sf-sub-hero" }, "Upload a photo. See the transformation in 60 seconds."), k && at && /* @__PURE__ */ s.createElement("div", { className: "sf-showcase" }, /* @__PURE__ */ s.createElement("div", { className: "sf-showcase-grid" }, /* @__PURE__ */ s.createElement("div", { className: "sf-showcase-card" }, /* @__PURE__ */ s.createElement("span", { className: "sf-showcase-label" }, "Before"), /* @__PURE__ */ s.createElement("img", { src: k, alt: "Room before lighting", loading: "eager" })), /* @__PURE__ */ s.createElement("div", { className: "sf-showcase-card" }, /* @__PURE__ */ s.createElement("span", { className: "sf-showcase-label" }, "After"), /* @__PURE__ */ s.createElement("img", { src: at, alt: "Room after lighting" })))), /* @__PURE__ */ s.createElement("button", { className: "sf-cta-hero", onClick: () => {
    _.track("cta_clicked", { location: "intro_hero", targetStep: "age" }), U("age");
  } }, "Try It Now", /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M6 3l5 5-5 5" }))), /* @__PURE__ */ s.createElement("div", { className: "sf-trust-bar" }, /* @__PURE__ */ s.createElement("span", { className: "sf-trust-item" }, /* @__PURE__ */ s.createElement("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "var(--gold)", stroke: "none" }, /* @__PURE__ */ s.createElement("path", { d: "M7 1l1.76 3.57L13 5.25 9.97 8.1l.72 4.15L7 10.4l-3.69 1.85.72-4.15L1 5.25l4.24-.68z" })), "2,400+ homeowners"), /* @__PURE__ */ s.createElement("span", { className: "sf-trust-sep" }), /* @__PURE__ */ s.createElement("span", { className: "sf-trust-item" }, /* @__PURE__ */ s.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5" }), /* @__PURE__ */ s.createElement("path", { d: "M4 5V3.5a2 2 0 014 0V5" })), "Private"), /* @__PURE__ */ s.createElement("span", { className: "sf-trust-sep" }), /* @__PURE__ */ s.createElement("span", { className: "sf-trust-item" }, /* @__PURE__ */ s.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("circle", { cx: "6", cy: "6", r: "5" }), /* @__PURE__ */ s.createElement("path", { d: "M4 6l1.5 1.5L8 5" })), "Free")))), X === "age" && /* @__PURE__ */ s.createElement("section", { className: "sf-step" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner" }, /* @__PURE__ */ s.createElement("span", { className: "sf-eye" }, "STEP 1 OF 3"), /* @__PURE__ */ s.createElement("h2", { className: "sf-title" }, "How does your lighting feel right now?"), /* @__PURE__ */ s.createElement("p", { className: "sf-sub" }, "No wrong answers — this helps us understand your space."), /* @__PURE__ */ s.createElement("div", { className: "sf-grid sf-grid-2" }, [
    { value: "too_dark", emoji: "🌑", label: "Too dark", desc: "Feels dim or gloomy" },
    { value: "too_harsh", emoji: "🔆", label: "Too harsh", desc: "Bright but not cozy" },
    { value: "boring", emoji: "😐", label: "It's fine, just bland", desc: "Works but has no character" },
    { value: "not_sure", emoji: "🤷", label: "Not sure yet", desc: "Show me what's possible" }
  ].map((N) => /* @__PURE__ */ s.createElement("button", { key: N.value, className: `sf-card sf-card-feeling ${A.feeling === N.value ? "selected" : ""}`, onClick: () => Fe("feeling", N.value, "space") }, /* @__PURE__ */ s.createElement("span", { className: "sf-card-check" }, "✓"), /* @__PURE__ */ s.createElement("span", { className: "sf-card-emoji" }, N.emoji), /* @__PURE__ */ s.createElement("span", { className: "sf-card-label" }, N.label), /* @__PURE__ */ s.createElement("span", { className: "sf-card-desc" }, N.desc)))))), X === "space" && /* @__PURE__ */ s.createElement("section", { className: "sf-step" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner" }, /* @__PURE__ */ s.createElement("span", { className: "sf-eye" }, "STEP 2 OF 3"), /* @__PURE__ */ s.createElement("h2", { className: "sf-title" }, "What space are we transforming?"), /* @__PURE__ */ s.createElement("p", { className: "sf-sub" }, "Pick your room and we'll show you exactly how it looks with the right lights."), /* @__PURE__ */ s.createElement("div", { className: "sf-grid sf-grid-4" }, Ay.map((N) => /* @__PURE__ */ s.createElement("button", { key: N.value, className: `sf-card sf-card-space ${A.space === N.value ? "selected" : ""}`, onClick: () => Fe("space", N.value, "upload") }, /* @__PURE__ */ s.createElement("span", { className: "sf-card-check" }, "✓"), /* @__PURE__ */ s.createElement("span", { className: "sf-card-emoji" }, N.emoji), /* @__PURE__ */ s.createElement("span", { className: "sf-card-label" }, N.label)))))), X === "upload" && /* @__PURE__ */ s.createElement("section", { className: "sf-step" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner" }, /* @__PURE__ */ s.createElement("span", { className: "sf-eye" }, "STEP 3 OF 3"), /* @__PURE__ */ s.createElement("h2", { className: "sf-title" }, "Show us your space"), /* @__PURE__ */ s.createElement("p", { className: "sf-sub" }, "Take a quick photo or choose one from your library."), C ? /* @__PURE__ */ s.createElement(
    "div",
    {
      className: "sf-upload-zone has-preview",
      onDragOver: (N) => {
        N.preventDefault(), N.currentTarget.classList.add("dragover");
      },
      onDragLeave: (N) => N.currentTarget.classList.remove("dragover"),
      onDrop: (N) => {
        if (N.preventDefault(), N.currentTarget.classList.remove("dragover"), N.dataTransfer.files[0]) {
          const q = new DataTransfer();
          q.items.add(N.dataTransfer.files[0]), M.current.files = q.files, M.current.dispatchEvent(new Event("change", { bubbles: !0 }));
        }
      }
    },
    /* @__PURE__ */ s.createElement("input", { ref: M, type: "file", accept: "image/*", onChange: Ie, style: { display: "none" } }),
    /* @__PURE__ */ s.createElement("img", { src: C, alt: "Your room", className: "sf-preview-img" })
  ) : /* @__PURE__ */ s.createElement("div", { className: "sf-upload-options" }, /* @__PURE__ */ s.createElement("input", { ref: M, type: "file", accept: "image/*", onChange: Ie, style: { display: "none" } }), /* @__PURE__ */ s.createElement("button", { className: "sf-upload-btn sf-upload-btn-primary", onClick: () => {
    M.current.removeAttribute("capture"), M.current.click();
  } }, /* @__PURE__ */ s.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ s.createElement("rect", { x: "2", y: "4", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ s.createElement("circle", { cx: "11", cy: "11", r: "3.5" }), /* @__PURE__ */ s.createElement("path", { d: "M7 4V3a1 1 0 011-1h6a1 1 0 011 1v1" })), /* @__PURE__ */ s.createElement("span", null, "Choose Photo")), /* @__PURE__ */ s.createElement("button", { className: "sf-upload-btn sf-upload-btn-secondary", onClick: () => {
    M.current.setAttribute("capture", "environment"), M.current.click();
  } }, /* @__PURE__ */ s.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ s.createElement("rect", { x: "3", y: "2", width: "16", height: "18", rx: "2" }), /* @__PURE__ */ s.createElement("circle", { cx: "11", cy: "10", r: "3" }), /* @__PURE__ */ s.createElement("path", { d: "M8 18h6" })), /* @__PURE__ */ s.createElement("span", null, "Take Photo"))), C && /* @__PURE__ */ s.createElement("button", { className: "sf-upload-change", onClick: () => {
    M.current.removeAttribute("capture"), M.current.click();
  } }, "Change photo"), /* @__PURE__ */ s.createElement("div", { className: "sf-upload-actions" }, !C && T && /* @__PURE__ */ s.createElement("button", { className: "sf-sample-link", onClick: ec }, "or try with a sample room"), /* @__PURE__ */ s.createElement("span", { className: "sf-privacy" }, /* @__PURE__ */ s.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("rect", { x: "2", y: "5", width: "8", height: "6", rx: "1.5" }), /* @__PURE__ */ s.createElement("path", { d: "M4 5V3.5a2 2 0 014 0V5" })), "Your photo stays private and is never stored")), At && /* @__PURE__ */ s.createElement("p", { className: "sf-error" }, At), /* @__PURE__ */ s.createElement("button", { className: `sf-continue ${C ? "enabled" : ""}`, onClick: () => {
    C && (_.track("cta_clicked", { location: "upload_continue", targetStep: "prefs" }), U("prefs"));
  }, disabled: !C }, "Continue ", /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M6 3l5 5-5 5" }))))), X === "prefs" && /* @__PURE__ */ s.createElement("section", { className: "sf-step" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner" }, /* @__PURE__ */ s.createElement("span", { className: "sf-eye" }, "ONE MORE STEP"), /* @__PURE__ */ s.createElement("h2", { className: "sf-title" }, "Ready to see your space transformed?"), /* @__PURE__ */ s.createElement("p", { className: "sf-sub" }, "We'll select the perfect products for your room. Or scroll down to hand-pick your favorites."), /* @__PURE__ */ s.createElement("button", { className: "sf-auto-pick", onClick: ta }, /* @__PURE__ */ s.createElement("span", { className: "sf-auto-dot" }, /* @__PURE__ */ s.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M4 9l3.5 3.5L14 5" }))), /* @__PURE__ */ s.createElement("span", { className: "sf-auto-text" }, /* @__PURE__ */ s.createElement("strong", null, "Pick the best match for me"), /* @__PURE__ */ s.createElement("span", null, "Recommended based on your room and layout")), /* @__PURE__ */ s.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M7 5l5 5-5 5" }))), /* @__PURE__ */ s.createElement("div", { className: "sf-browse-divider" }, "or hand-pick products"), ["floor_lamp", "desk_lamp", "wall_light", "pendant", "other_light"].map((N) => {
    const q = _t.products.filter((ut) => ut.category === N);
    if (!q.length) return null;
    const $ = N === "floor_lamp" ? "Floor Lamps" : N === "desk_lamp" ? "Table & Desk Lamps" : N === "wall_light" ? "Wall Lights" : N === "pendant" ? "Pendants" : "Other";
    return /* @__PURE__ */ s.createElement("div", { key: N, className: "sf-cat-section" }, /* @__PURE__ */ s.createElement("div", { className: "sf-cat-label" }, $), /* @__PURE__ */ s.createElement("div", { className: "sf-cat-scroll" }, q.map((ut) => {
      const ea = !Pt.has(ut.id), rl = ut.featuredImage ? ut.featuredImage.startsWith("//") ? `https:${ut.featuredImage}` : ut.featuredImage : null;
      return /* @__PURE__ */ s.createElement("button", { key: ut.id, className: `sf-thumb ${ea ? "included" : ""}`, onClick: () => ju(ut.id) }, /* @__PURE__ */ s.createElement("div", { className: "sf-thumb-img-wrap" }, rl ? /* @__PURE__ */ s.createElement("img", { className: "sf-thumb-img", src: rl, alt: ut.name, loading: "lazy" }) : /* @__PURE__ */ s.createElement("div", { className: "sf-thumb-img sf-thumb-placeholder" }), /* @__PURE__ */ s.createElement("span", { className: "sf-thumb-check" })), /* @__PURE__ */ s.createElement("span", { className: "sf-thumb-name" }, ut.name));
    })));
  }), /* @__PURE__ */ s.createElement("button", { className: "sf-continue enabled", onClick: ta }, "Continue ", /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M6 3l5 5-5 5" }))))), X === "loading" && /* @__PURE__ */ s.createElement("section", { className: "sf-step sf-step-loading" }, /* @__PURE__ */ s.createElement("div", { className: "sf-load-wrap" }, /* @__PURE__ */ s.createElement("div", { className: "sf-load-img" }, C ? /* @__PURE__ */ s.createElement("img", { src: C, alt: "Your room" }) : /* @__PURE__ */ s.createElement("div", { className: "sf-loading-placeholder" }), /* @__PURE__ */ s.createElement("div", { className: `sf-scan-line ${Wt !== "d" ? "active" : ""}` }), /* @__PURE__ */ s.createElement("div", { className: "sf-load-overlay" })), /* @__PURE__ */ s.createElement("div", { className: "sf-load-center" }, /* @__PURE__ */ s.createElement("div", { className: "sf-load-bottom" }, /* @__PURE__ */ s.createElement("span", { className: "sf-load-pct" }, /* @__PURE__ */ s.createElement("strong", null, bl, "%"), " complete"), /* @__PURE__ */ s.createElement("div", { className: "sf-load-bar" }, /* @__PURE__ */ s.createElement("div", { className: "sf-loading-fill", style: { width: `${bl}%` } }))), Wt === "a" && /* @__PURE__ */ s.createElement("div", { className: "sf-load-msg", key: "a" }, /* @__PURE__ */ s.createElement("h2", null, "Analyzing your ", Va), /* @__PURE__ */ s.createElement("p", null, "Mapping layout, light sources, and furniture placement")), Wt === "b" && /* @__PURE__ */ s.createElement("div", { className: "sf-load-msg", key: "b" }, /* @__PURE__ */ s.createElement("h2", null, "Selecting the perfect fixtures"), /* @__PURE__ */ s.createElement("p", null, "Matching products to your room's style and proportions")), Wt === "c" && /* @__PURE__ */ s.createElement("div", { className: "sf-load-msg", key: "c" }, /* @__PURE__ */ s.createElement("h2", null, "Rendering your preview"), /* @__PURE__ */ s.createElement("p", null, "Placing each light for maximum impact")), Wt === "d" && /* @__PURE__ */ s.createElement("div", { className: "sf-load-msg", key: "d" }, /* @__PURE__ */ s.createElement("div", { className: "sf-ready-circle" }, /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 120 120", width: "90", height: "90" }, /* @__PURE__ */ s.createElement("circle", { cx: "60", cy: "60", r: "54", fill: "none", stroke: "rgba(255,255,255,.15)", strokeWidth: "3" }), /* @__PURE__ */ s.createElement(
    "circle",
    {
      cx: "60",
      cy: "60",
      r: "54",
      fill: "none",
      stroke: "var(--gold)",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeDasharray: La,
      strokeDashoffset: La * (1 - bl / 100),
      style: { transform: "rotate(-90deg)", transformOrigin: "center", transition: "stroke-dashoffset .6s ease" }
    }
  )), /* @__PURE__ */ s.createElement("span", { className: "sf-ready-pct" }, bl, "%")), /* @__PURE__ */ s.createElement("h2", null, "Almost ready"))))), X === "results" && J && /* @__PURE__ */ s.createElement("section", { className: "sf-step sf-step-results" }, /* @__PURE__ */ s.createElement("div", { className: "sf-inner sf-inner-wide" }, /* @__PURE__ */ s.createElement("div", { className: "sf-reveal" }, /* @__PURE__ */ s.createElement("div", { className: "sf-reveal-after" }, /* @__PURE__ */ s.createElement("img", { src: jt, alt: "Your room with new lighting" }), /* @__PURE__ */ s.createElement("span", { className: "sf-reveal-badge" }, "Your room, reimagined"), /* @__PURE__ */ s.createElement("div", { className: "sf-reveal-actions" }, /* @__PURE__ */ s.createElement("button", { className: "sf-reveal-action", title: "Download image", onClick: () => {
    _.track("download_image", { productCount: J?.placements?.length ?? 0 });
    const N = document.createElement("a");
    N.href = jt, N.download = "my-room-reimagined.jpg", N.click();
  } }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M8 2v9M4.5 7.5L8 11l3.5-3.5" }), /* @__PURE__ */ s.createElement("path", { d: "M2 12v2h12v-2" }))), /* @__PURE__ */ s.createElement("button", { className: "sf-reveal-action", title: "Share image", onClick: async () => {
    if (_.track("share_image", { productCount: J?.placements?.length ?? 0, nativeShareSupported: !!navigator.share }), navigator.share)
      try {
        const N = await fetch(jt).then((q) => q.blob());
        await navigator.share({ files: [new File([N], "my-room-reimagined.jpg", { type: N.type })], title: "My room, reimagined" });
      } catch {
      }
    else
      navigator.clipboard?.writeText(window.location.href);
  } }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ s.createElement("circle", { cx: "12", cy: "3.5", r: "2" }), /* @__PURE__ */ s.createElement("circle", { cx: "4", cy: "8", r: "2" }), /* @__PURE__ */ s.createElement("circle", { cx: "12", cy: "12.5", r: "2" }), /* @__PURE__ */ s.createElement("path", { d: "M5.8 9l4.4 2.5M5.8 7l4.4-2.5" }))))), /* @__PURE__ */ s.createElement("div", { className: "sf-reveal-before" }, /* @__PURE__ */ s.createElement("img", { src: C, alt: "Original room" }), /* @__PURE__ */ s.createElement("span", { className: "sf-comp-label" }, "Before"))), /* @__PURE__ */ s.createElement("div", { className: "sf-products-section" }, /* @__PURE__ */ s.createElement("h3", null, "Your personalized lighting plan"), /* @__PURE__ */ s.createElement("p", { className: "sf-products-sub" }, "Selected for your ", Va, " based on layout and natural light."), /* @__PURE__ */ s.createElement("div", { className: "sf-product-grid" }, J.placements.map((N) => {
    const q = _t.products.find(($) => String($.id) === String(N.productId));
    return /* @__PURE__ */ s.createElement(Ny, { key: N.slotId, placement: N, variants: q?.variants, onAddToCart: ac, tracker: _ });
  }))), /* @__PURE__ */ s.createElement("div", { className: "sf-reassurance" }, /* @__PURE__ */ s.createElement("div", { className: "sf-reassurance-item" }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "var(--gold)", strokeWidth: "1.3", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M2 8.5l4 4L14 4" })), "Free shipping"), /* @__PURE__ */ s.createElement("div", { className: "sf-reassurance-item" }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "var(--gold)", strokeWidth: "1.3", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("path", { d: "M8 1v6l3 3" }), /* @__PURE__ */ s.createElement("circle", { cx: "8", cy: "8", r: "7" })), "30-day returns"), /* @__PURE__ */ s.createElement("div", { className: "sf-reassurance-item" }, /* @__PURE__ */ s.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "var(--gold)", strokeWidth: "1.3", strokeLinecap: "round" }, /* @__PURE__ */ s.createElement("rect", { x: "2", y: "6", width: "12", height: "8", rx: "1.5" }), /* @__PURE__ */ s.createElement("path", { d: "M5 6V4a3 3 0 016 0v2" })), "Secure checkout")), /* @__PURE__ */ s.createElement("div", { className: "sf-bundle" }, /* @__PURE__ */ s.createElement("div", { className: "sf-bundle-info" }, /* @__PURE__ */ s.createElement("span", { className: "sf-bundle-label" }, "Complete set"), /* @__PURE__ */ s.createElement("span", { className: "sf-bundle-price" }, Yd(pt))), /* @__PURE__ */ s.createElement("button", { className: "sf-bundle-cta", onClick: uc }, "Add All to Cart")), At && /* @__PURE__ */ s.createElement("p", { className: "sf-error" }, At), /* @__PURE__ */ s.createElement("div", { className: "sf-results-actions" }, /* @__PURE__ */ s.createElement("button", { className: "sf-secondary", onClick: nc }, "Try Different Products"), /* @__PURE__ */ s.createElement("button", { className: "sf-text-link", onClick: ll }, "Start over")))));
}
function Oy(d) {
  const _ = (M) => new URL(M, d).toString();
  return {
    proxyBase: "/api",
    pageHandle: "space-funnel-preview",
    copy: {
      eyebrow: "Shopify page preview",
      title: "See your room with Shopify-ready light.",
      lede: "This local preview mirrors the Shopify page contract: curated products are inlined into the page and sent to the proxy on review/render.",
      ctaLabel: "Preview The Funnel",
      ctaMicrocopy: "Local preview with sample Shopify-style products."
    },
    allowedProducts: [
      {
        id: "shopify-floor-1",
        handle: "reed-floor-lamp",
        title: "Reed Floor Lamp",
        url: "/products/reed-floor-lamp",
        price: 248,
        variantId: "1001",
        productType: "Floor Lamp",
        featuredImage: _("/page-fixed.png")
      },
      {
        id: "shopify-desk-1",
        handle: "sora-desk-lamp",
        title: "Sora Desk Lamp",
        url: "/products/sora-desk-lamp",
        price: 118,
        variantId: "1002",
        productType: "Desk Lamp",
        featuredImage: _("/page-fixed-3.png")
      },
      {
        id: "shopify-desk-2",
        handle: "mira-desk-lamp",
        title: "Mira Desk Lamp",
        url: "/products/mira-desk-lamp",
        price: 138,
        variantId: "1003",
        productType: "Table Lamp",
        featuredImage: _("/page-fixed-2.png")
      },
      {
        id: "shopify-desk-3",
        handle: "luma-desk-lamp",
        title: "Luma Desk Lamp",
        url: "/products/luma-desk-lamp",
        price: 128,
        variantId: "1004",
        productType: "Desk Lamp",
        featuredImage: _("/page.png")
      }
    ],
    sampleRoomUrl: _("/page-fixed.png")
  };
}
function Hd(d, _) {
  iy.createRoot(d).render(
    /* @__PURE__ */ s.createElement(s.StrictMode, null, /* @__PURE__ */ s.createElement(My, { config: _ }))
  );
}
function Dy(d) {
  const _ = document.getElementById(d);
  if (!_?.textContent)
    return null;
  try {
    return JSON.parse(_.textContent);
  } catch {
    return null;
  }
}
const Rd = [...document.querySelectorAll("[data-space-funnel-root]")];
if (Rd.length > 0)
  Rd.forEach((d) => {
    const _ = Dy(d.dataset.configId) || window.SpaceFunnelConfig;
    _ && Hd(d, _);
  });
else {
  const d = document.getElementById("root");
  d && Hd(d, Oy(window.location.origin));
}
