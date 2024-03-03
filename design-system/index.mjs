import { jsx as U, jsxs as ye, Fragment as pr } from "react/jsx-runtime";
import * as R from "react";
import Ye, { useRef as hr, useDebugValue as wt, useContext as lt, createElement as mr } from "react";
import "react-dom";
function vr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Je = { exports: {} }, M = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function gr() {
  if (St)
    return M;
  St = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function x(l) {
    if (typeof l == "object" && l !== null) {
      var T = l.$$typeof;
      switch (T) {
        case e:
          switch (l = l.type, l) {
            case t:
            case o:
            case n:
            case f:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case i:
                case d:
                case A:
                case v:
                case a:
                  return l;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  return M.ContextConsumer = i, M.ContextProvider = a, M.Element = e, M.ForwardRef = d, M.Fragment = t, M.Lazy = A, M.Memo = v, M.Portal = r, M.Profiler = o, M.StrictMode = n, M.Suspense = f, M.SuspenseList = m, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(l) {
    return x(l) === i;
  }, M.isContextProvider = function(l) {
    return x(l) === a;
  }, M.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, M.isForwardRef = function(l) {
    return x(l) === d;
  }, M.isFragment = function(l) {
    return x(l) === t;
  }, M.isLazy = function(l) {
    return x(l) === A;
  }, M.isMemo = function(l) {
    return x(l) === v;
  }, M.isPortal = function(l) {
    return x(l) === r;
  }, M.isProfiler = function(l) {
    return x(l) === o;
  }, M.isStrictMode = function(l) {
    return x(l) === n;
  }, M.isSuspense = function(l) {
    return x(l) === f;
  }, M.isSuspenseList = function(l) {
    return x(l) === m;
  }, M.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === t || l === o || l === n || l === f || l === m || l === k || typeof l == "object" && l !== null && (l.$$typeof === A || l.$$typeof === v || l.$$typeof === a || l.$$typeof === i || l.$$typeof === d || l.$$typeof === S || l.getModuleId !== void 0);
  }, M.typeOf = x, M;
}
var F = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function yr() {
  return Et || (Et = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), S = !1, x = !1, l = !1, T = !1, E = !1, _;
    _ = Symbol.for("react.module.reference");
    function b(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === t || g === o || E || g === n || g === f || g === m || T || g === k || S || x || l || typeof g == "object" && g !== null && (g.$$typeof === A || g.$$typeof === v || g.$$typeof === a || g.$$typeof === i || g.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === _ || g.getModuleId !== void 0));
    }
    function u(g) {
      if (typeof g == "object" && g !== null) {
        var O = g.$$typeof;
        switch (O) {
          case e:
            var W = g.type;
            switch (W) {
              case t:
              case o:
              case n:
              case f:
              case m:
                return W;
              default:
                var L = W && W.$$typeof;
                switch (L) {
                  case c:
                  case i:
                  case d:
                  case A:
                  case v:
                  case a:
                    return L;
                  default:
                    return O;
                }
            }
          case r:
            return O;
        }
      }
    }
    var B = i, ne = a, X = e, ee = d, te = t, se = A, Z = v, re = r, ie = o, q = n, de = f, oe = m, K = !1, ue = !1;
    function ce(g) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(g) {
      return ue || (ue = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(g) {
      return u(g) === i;
    }
    function y(g) {
      return u(g) === a;
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }
    function P(g) {
      return u(g) === d;
    }
    function s(g) {
      return u(g) === t;
    }
    function $(g) {
      return u(g) === A;
    }
    function h(g) {
      return u(g) === v;
    }
    function z(g) {
      return u(g) === r;
    }
    function D(g) {
      return u(g) === o;
    }
    function I(g) {
      return u(g) === n;
    }
    function p(g) {
      return u(g) === f;
    }
    function Y(g) {
      return u(g) === m;
    }
    F.ContextConsumer = B, F.ContextProvider = ne, F.Element = X, F.ForwardRef = ee, F.Fragment = te, F.Lazy = se, F.Memo = Z, F.Portal = re, F.Profiler = ie, F.StrictMode = q, F.Suspense = de, F.SuspenseList = oe, F.isAsyncMode = ce, F.isConcurrentMode = fe, F.isContextConsumer = C, F.isContextProvider = y, F.isElement = w, F.isForwardRef = P, F.isFragment = s, F.isLazy = $, F.isMemo = h, F.isPortal = z, F.isProfiler = D, F.isStrictMode = I, F.isSuspense = p, F.isSuspenseList = Y, F.isValidElementType = b, F.typeOf = u;
  }()), F;
}
process.env.NODE_ENV === "production" ? Je.exports = gr() : Je.exports = yr();
var ut = Je.exports;
function br(e) {
  function r(C, y, w, P, s) {
    for (var $ = 0, h = 0, z = 0, D = 0, I, p, Y = 0, g = 0, O, W = O = I = 0, L = 0, J = 0, _e = 0, Q = 0, ke = w.length, Ae = ke - 1, le, N = "", G = "", Ge = "", He = "", me; L < ke; ) {
      if (p = w.charCodeAt(L), L === Ae && h + D + z + $ !== 0 && (h !== 0 && (p = h === 47 ? 10 : 47), D = z = $ = 0, ke++, Ae++), h + D + z + $ === 0) {
        if (L === Ae && (0 < J && (N = N.replace(A, "")), 0 < N.trim().length)) {
          switch (p) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              N += w.charAt(L);
          }
          p = 59;
        }
        switch (p) {
          case 123:
            for (N = N.trim(), I = N.charCodeAt(0), O = 1, Q = ++L; L < ke; ) {
              switch (p = w.charCodeAt(L)) {
                case 123:
                  O++;
                  break;
                case 125:
                  O--;
                  break;
                case 47:
                  switch (p = w.charCodeAt(L + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (W = L + 1; W < Ae; ++W)
                          switch (w.charCodeAt(W)) {
                            case 47:
                              if (p === 42 && w.charCodeAt(W - 1) === 42 && L + 2 !== W) {
                                L = W + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (p === 47) {
                                L = W + 1;
                                break e;
                              }
                          }
                        L = W;
                      }
                  }
                  break;
                case 91:
                  p++;
                case 40:
                  p++;
                case 34:
                case 39:
                  for (; L++ < Ae && w.charCodeAt(L) !== p; )
                    ;
              }
              if (O === 0)
                break;
              L++;
            }
            switch (O = w.substring(Q, L), I === 0 && (I = (N = N.replace(v, "").trim()).charCodeAt(0)), I) {
              case 64:
                switch (0 < J && (N = N.replace(A, "")), p = N.charCodeAt(1), p) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    J = y;
                    break;
                  default:
                    J = de;
                }
                if (O = r(y, J, O, p, s + 1), Q = O.length, 0 < K && (J = t(de, N, _e), me = c(3, O, J, y, re, Z, Q, p, s, P), N = J.join(""), me !== void 0 && (Q = (O = me.trim()).length) === 0 && (p = 0, O = "")), 0 < Q)
                  switch (p) {
                    case 115:
                      N = N.replace(B, i);
                    case 100:
                    case 109:
                    case 45:
                      O = N + "{" + O + "}";
                      break;
                    case 107:
                      N = N.replace(E, "$1 $2"), O = N + "{" + O + "}", O = q === 1 || q === 2 && a("@" + O, 3) ? "@-webkit-" + O + "@" + O : "@" + O;
                      break;
                    default:
                      O = N + O, P === 112 && (O = (G += O, ""));
                  }
                else
                  O = "";
                break;
              default:
                O = r(y, t(y, N, _e), O, P, s + 1);
            }
            Ge += O, O = _e = J = W = I = 0, N = "", p = w.charCodeAt(++L);
            break;
          case 125:
          case 59:
            if (N = (0 < J ? N.replace(A, "") : N).trim(), 1 < (Q = N.length))
              switch (W === 0 && (I = N.charCodeAt(0), I === 45 || 96 < I && 123 > I) && (Q = (N = N.replace(" ", ":")).length), 0 < K && (me = c(1, N, y, C, re, Z, G.length, P, s, P)) !== void 0 && (Q = (N = me.trim()).length) === 0 && (N = "\0\0"), I = N.charCodeAt(0), p = N.charCodeAt(1), I) {
                case 0:
                  break;
                case 64:
                  if (p === 105 || p === 99) {
                    He += N + w.charAt(L);
                    break;
                  }
                default:
                  N.charCodeAt(Q - 1) !== 58 && (G += o(N, I, p, N.charCodeAt(2)));
              }
            _e = J = W = I = 0, N = "", p = w.charCodeAt(++L);
        }
      }
      switch (p) {
        case 13:
        case 10:
          h === 47 ? h = 0 : 1 + I === 0 && P !== 107 && 0 < N.length && (J = 1, N += "\0"), 0 < K * ce && c(0, N, y, C, re, Z, G.length, P, s, P), Z = 1, re++;
          break;
        case 59:
        case 125:
          if (h + D + z + $ === 0) {
            Z++;
            break;
          }
        default:
          switch (Z++, le = w.charAt(L), p) {
            case 9:
            case 32:
              if (D + $ + h === 0)
                switch (Y) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    le = "";
                    break;
                  default:
                    p !== 32 && (le = " ");
                }
              break;
            case 0:
              le = "\\0";
              break;
            case 12:
              le = "\\f";
              break;
            case 11:
              le = "\\v";
              break;
            case 38:
              D + h + $ === 0 && (J = _e = 1, le = "\f" + le);
              break;
            case 108:
              if (D + h + $ + ie === 0 && 0 < W)
                switch (L - W) {
                  case 2:
                    Y === 112 && w.charCodeAt(L - 3) === 58 && (ie = Y);
                  case 8:
                    g === 111 && (ie = g);
                }
              break;
            case 58:
              D + h + $ === 0 && (W = L);
              break;
            case 44:
              h + z + D + $ === 0 && (J = 1, le += "\r");
              break;
            case 34:
            case 39:
              h === 0 && (D = D === p ? 0 : D === 0 ? p : D);
              break;
            case 91:
              D + h + z === 0 && $++;
              break;
            case 93:
              D + h + z === 0 && $--;
              break;
            case 41:
              D + h + $ === 0 && z--;
              break;
            case 40:
              if (D + h + $ === 0) {
                if (I === 0)
                  switch (2 * Y + 3 * g) {
                    case 533:
                      break;
                    default:
                      I = 1;
                  }
                z++;
              }
              break;
            case 64:
              h + z + D + $ + W + O === 0 && (O = 1);
              break;
            case 42:
            case 47:
              if (!(0 < D + $ + z))
                switch (h) {
                  case 0:
                    switch (2 * p + 3 * w.charCodeAt(L + 1)) {
                      case 235:
                        h = 47;
                        break;
                      case 220:
                        Q = L, h = 42;
                    }
                    break;
                  case 42:
                    p === 47 && Y === 42 && Q + 2 !== L && (w.charCodeAt(Q + 2) === 33 && (G += w.substring(Q, L + 1)), le = "", h = 0);
                }
          }
          h === 0 && (N += le);
      }
      g = Y, Y = p, L++;
    }
    if (Q = G.length, 0 < Q) {
      if (J = y, 0 < K && (me = c(2, G, J, C, re, Z, Q, P, s, P), me !== void 0 && (G = me).length === 0))
        return He + G + Ge;
      if (G = J.join(",") + "{" + G + "}", q * ie !== 0) {
        switch (q !== 2 || a(G, 2) || (ie = 0), ie) {
          case 111:
            G = G.replace(b, ":-moz-$1") + G;
            break;
          case 112:
            G = G.replace(_, "::-webkit-input-$1") + G.replace(_, "::-moz-$1") + G.replace(_, ":-ms-input-$1") + G;
        }
        ie = 0;
      }
    }
    return He + G + Ge;
  }
  function t(C, y, w) {
    var P = y.trim().split(l);
    y = P;
    var s = P.length, $ = C.length;
    switch ($) {
      case 0:
      case 1:
        var h = 0;
        for (C = $ === 0 ? "" : C[0] + " "; h < s; ++h)
          y[h] = n(C, y[h], w).trim();
        break;
      default:
        var z = h = 0;
        for (y = []; h < s; ++h)
          for (var D = 0; D < $; ++D)
            y[z++] = n(C[D] + " ", P[h], w).trim();
    }
    return y;
  }
  function n(C, y, w) {
    var P = y.charCodeAt(0);
    switch (33 > P && (P = (y = y.trim()).charCodeAt(0)), P) {
      case 38:
        return y.replace(T, "$1" + C.trim());
      case 58:
        return C.trim() + y.replace(T, "$1" + C.trim());
      default:
        if (0 < 1 * w && 0 < y.indexOf("\f"))
          return y.replace(T, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + y;
  }
  function o(C, y, w, P) {
    var s = C + ";", $ = 2 * y + 3 * w + 4 * P;
    if ($ === 944) {
      C = s.indexOf(":", 9) + 1;
      var h = s.substring(C, s.length - 1).trim();
      return h = s.substring(0, C).trim() + h + ";", q === 1 || q === 2 && a(h, 1) ? "-webkit-" + h + h : h;
    }
    if (q === 0 || q === 2 && !a(s, 1))
      return s;
    switch ($) {
      case 1015:
        return s.charCodeAt(10) === 97 ? "-webkit-" + s + s : s;
      case 951:
        return s.charCodeAt(3) === 116 ? "-webkit-" + s + s : s;
      case 963:
        return s.charCodeAt(5) === 110 ? "-webkit-" + s + s : s;
      case 1009:
        if (s.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + s + s;
      case 978:
        return "-webkit-" + s + "-moz-" + s + s;
      case 1019:
      case 983:
        return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
      case 883:
        if (s.charCodeAt(8) === 45)
          return "-webkit-" + s + s;
        if (0 < s.indexOf("image-set(", 11))
          return s.replace(se, "$1-webkit-$2") + s;
        break;
      case 932:
        if (s.charCodeAt(4) === 45)
          switch (s.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
            case 115:
              return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
            case 98:
              return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s;
          }
        return "-webkit-" + s + "-ms-" + s + s;
      case 964:
        return "-webkit-" + s + "-ms-flex-" + s + s;
      case 1023:
        if (s.charCodeAt(8) !== 99)
          break;
        return h = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + h + "-webkit-" + s + "-ms-flex-pack" + h + s;
      case 1005:
        return S.test(s) ? s.replace(k, ":-webkit-") + s.replace(k, ":-moz-") + s : s;
      case 1e3:
        switch (h = s.substring(13).trim(), y = h.indexOf("-") + 1, h.charCodeAt(0) + h.charCodeAt(y)) {
          case 226:
            h = s.replace(u, "tb");
            break;
          case 232:
            h = s.replace(u, "tb-rl");
            break;
          case 220:
            h = s.replace(u, "lr");
            break;
          default:
            return s;
        }
        return "-webkit-" + s + "-ms-" + h + s;
      case 1017:
        if (s.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (y = (s = C).length - 10, h = (s.charCodeAt(y) === 33 ? s.substring(0, y) : s).substring(C.indexOf(":", 7) + 1).trim(), $ = h.charCodeAt(0) + (h.charCodeAt(7) | 0)) {
          case 203:
            if (111 > h.charCodeAt(8))
              break;
          case 115:
            s = s.replace(h, "-webkit-" + h) + ";" + s;
            break;
          case 207:
          case 102:
            s = s.replace(h, "-webkit-" + (102 < $ ? "inline-" : "") + "box") + ";" + s.replace(h, "-webkit-" + h) + ";" + s.replace(h, "-ms-" + h + "box") + ";" + s;
        }
        return s + ";";
      case 938:
        if (s.charCodeAt(5) === 45)
          switch (s.charCodeAt(6)) {
            case 105:
              return h = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + h + "-ms-flex-" + h + s;
            case 115:
              return "-webkit-" + s + "-ms-flex-item-" + s.replace(X, "") + s;
            default:
              return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(X, "") + s;
          }
        break;
      case 973:
      case 989:
        if (s.charCodeAt(3) !== 45 || s.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (te.test(C) === !0)
          return (h = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(C.replace("stretch", "fill-available"), y, w, P).replace(":fill-available", ":stretch") : s.replace(h, "-webkit-" + h) + s.replace(h, "-moz-" + h.replace("fill-", "")) + s;
        break;
      case 962:
        if (s = "-webkit-" + s + (s.charCodeAt(5) === 102 ? "-ms-" + s : "") + s, w + P === 211 && s.charCodeAt(13) === 105 && 0 < s.indexOf("transform", 10))
          return s.substring(0, s.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + s;
    }
    return s;
  }
  function a(C, y) {
    var w = C.indexOf(y === 1 ? ":" : "{"), P = C.substring(0, y !== 3 ? w : 10);
    return w = C.substring(w + 1, C.length - 1), ue(y !== 2 ? P : P.replace(ee, "$1"), w, y);
  }
  function i(C, y) {
    var w = o(y, y.charCodeAt(0), y.charCodeAt(1), y.charCodeAt(2));
    return w !== y + ";" ? w.replace(ne, " or ($1)").substring(4) : "(" + y + ")";
  }
  function c(C, y, w, P, s, $, h, z, D, I) {
    for (var p = 0, Y = y, g; p < K; ++p)
      switch (g = oe[p].call(m, C, Y, w, P, s, $, h, z, D, I)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Y = g;
      }
    if (Y !== y)
      return Y;
  }
  function d(C) {
    switch (C) {
      case void 0:
      case null:
        K = oe.length = 0;
        break;
      default:
        if (typeof C == "function")
          oe[K++] = C;
        else if (typeof C == "object")
          for (var y = 0, w = C.length; y < w; ++y)
            d(C[y]);
        else
          ce = !!C | 0;
    }
    return d;
  }
  function f(C) {
    return C = C.prefix, C !== void 0 && (ue = null, C ? typeof C != "function" ? q = 1 : (q = 2, ue = C) : q = 0), f;
  }
  function m(C, y) {
    var w = C;
    if (33 > w.charCodeAt(0) && (w = w.trim()), fe = w, w = [fe], 0 < K) {
      var P = c(-1, y, w, w, re, Z, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (y = P);
    }
    var s = r(de, w, y, 0, 0);
    return 0 < K && (P = c(-2, s, w, w, re, Z, s.length, 0, 0, 0), P !== void 0 && (s = P)), fe = "", ie = 0, Z = re = 1, s;
  }
  var v = /^\0+/g, A = /[\0\r\f]/g, k = /: */g, S = /zoo|gra/, x = /([,: ])(transform)/g, l = /,\r+?/g, T = /([\t\r\n ])*\f?&/g, E = /@(k\w+)\s*(\S*)\s*/, _ = /::(place)/g, b = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, B = /\(\s*(.*)\s*\)/g, ne = /([\s\S]*?);/g, X = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, te = /stretch|:\s*\w+\-(?:conte|avail)/, se = /([^-])(image-set\()/, Z = 1, re = 1, ie = 0, q = 1, de = [], oe = [], K = 0, ue = null, ce = 0, fe = "";
  return m.use = d, m.set = f, e !== void 0 && f(e), m;
}
var wr = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Sr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Er = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ct = /* @__PURE__ */ Sr(
  function(e) {
    return Er.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qe = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function Cr() {
  if (xt)
    return V;
  xt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function _(u) {
    if (typeof u == "object" && u !== null) {
      var B = u.$$typeof;
      switch (B) {
        case r:
          switch (u = u.type, u) {
            case d:
            case f:
            case n:
            case a:
            case o:
            case v:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case c:
                case m:
                case S:
                case k:
                case i:
                  return u;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  function b(u) {
    return _(u) === f;
  }
  return V.AsyncMode = d, V.ConcurrentMode = f, V.ContextConsumer = c, V.ContextProvider = i, V.Element = r, V.ForwardRef = m, V.Fragment = n, V.Lazy = S, V.Memo = k, V.Portal = t, V.Profiler = a, V.StrictMode = o, V.Suspense = v, V.isAsyncMode = function(u) {
    return b(u) || _(u) === d;
  }, V.isConcurrentMode = b, V.isContextConsumer = function(u) {
    return _(u) === c;
  }, V.isContextProvider = function(u) {
    return _(u) === i;
  }, V.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, V.isForwardRef = function(u) {
    return _(u) === m;
  }, V.isFragment = function(u) {
    return _(u) === n;
  }, V.isLazy = function(u) {
    return _(u) === S;
  }, V.isMemo = function(u) {
    return _(u) === k;
  }, V.isPortal = function(u) {
    return _(u) === t;
  }, V.isProfiler = function(u) {
    return _(u) === a;
  }, V.isStrictMode = function(u) {
    return _(u) === o;
  }, V.isSuspense = function(u) {
    return _(u) === v;
  }, V.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === n || u === f || u === a || u === o || u === v || u === A || typeof u == "object" && u !== null && (u.$$typeof === S || u.$$typeof === k || u.$$typeof === i || u.$$typeof === c || u.$$typeof === m || u.$$typeof === l || u.$$typeof === T || u.$$typeof === E || u.$$typeof === x);
  }, V.typeOf = _, V;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function xr() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function _(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === f || p === a || p === o || p === v || p === A || typeof p == "object" && p !== null && (p.$$typeof === S || p.$$typeof === k || p.$$typeof === i || p.$$typeof === c || p.$$typeof === m || p.$$typeof === l || p.$$typeof === T || p.$$typeof === E || p.$$typeof === x);
    }
    function b(p) {
      if (typeof p == "object" && p !== null) {
        var Y = p.$$typeof;
        switch (Y) {
          case r:
            var g = p.type;
            switch (g) {
              case d:
              case f:
              case n:
              case a:
              case o:
              case v:
                return g;
              default:
                var O = g && g.$$typeof;
                switch (O) {
                  case c:
                  case m:
                  case S:
                  case k:
                  case i:
                    return O;
                  default:
                    return Y;
                }
            }
          case t:
            return Y;
        }
      }
    }
    var u = d, B = f, ne = c, X = i, ee = r, te = m, se = n, Z = S, re = k, ie = t, q = a, de = o, oe = v, K = !1;
    function ue(p) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ce(p) || b(p) === d;
    }
    function ce(p) {
      return b(p) === f;
    }
    function fe(p) {
      return b(p) === c;
    }
    function C(p) {
      return b(p) === i;
    }
    function y(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function w(p) {
      return b(p) === m;
    }
    function P(p) {
      return b(p) === n;
    }
    function s(p) {
      return b(p) === S;
    }
    function $(p) {
      return b(p) === k;
    }
    function h(p) {
      return b(p) === t;
    }
    function z(p) {
      return b(p) === a;
    }
    function D(p) {
      return b(p) === o;
    }
    function I(p) {
      return b(p) === v;
    }
    j.AsyncMode = u, j.ConcurrentMode = B, j.ContextConsumer = ne, j.ContextProvider = X, j.Element = ee, j.ForwardRef = te, j.Fragment = se, j.Lazy = Z, j.Memo = re, j.Portal = ie, j.Profiler = q, j.StrictMode = de, j.Suspense = oe, j.isAsyncMode = ue, j.isConcurrentMode = ce, j.isContextConsumer = fe, j.isContextProvider = C, j.isElement = y, j.isForwardRef = w, j.isFragment = P, j.isLazy = s, j.isMemo = $, j.isPortal = h, j.isProfiler = z, j.isStrictMode = D, j.isSuspense = I, j.isValidElementType = _, j.typeOf = b;
  }()), j;
}
process.env.NODE_ENV === "production" ? Qe.exports = Cr() : Qe.exports = xr();
var _r = Qe.exports, dt = _r, Ar = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Rr = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Pr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, jt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ft = {};
ft[dt.ForwardRef] = Pr;
ft[dt.Memo] = jt;
function At(e) {
  return dt.isMemo(e) ? jt : ft[e.$$typeof] || Ar;
}
var Nr = Object.defineProperty, Tr = Object.getOwnPropertyNames, Rt = Object.getOwnPropertySymbols, Or = Object.getOwnPropertyDescriptor, kr = Object.getPrototypeOf, Pt = Object.prototype;
function zt(e, r, t) {
  if (typeof r != "string") {
    if (Pt) {
      var n = kr(r);
      n && n !== Pt && zt(e, n, t);
    }
    var o = Tr(r);
    Rt && (o = o.concat(Rt(r)));
    for (var a = At(e), i = At(r), c = 0; c < o.length; ++c) {
      var d = o[c];
      if (!Rr[d] && !(t && t[d]) && !(i && i[d]) && !(a && a[d])) {
        var f = Or(r, d);
        try {
          Nr(e, d, f);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ir = zt;
const $r = /* @__PURE__ */ vr(Ir);
function pe() {
  return (pe = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Nt = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, et = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ut.typeOf(e);
}, je = Object.freeze([]), ve = Object.freeze({});
function Pe(e) {
  return typeof e == "function";
}
function tt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function pt(e) {
  return e && typeof e.styledComponentId == "string";
}
var we = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ht = typeof window < "u" && "HTMLElement" in window, Dr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Lr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Mr() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function xe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Mr.apply(void 0, [Lr[e]].concat(t)).trim());
}
var Fr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        (i <<= 1) < 0 && xe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(t + 1), f = 0, m = n.length; f < m; f++)
      this.tag.insertRule(d, n[f]) && (this.groupSizes[t]++, d++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, c = a; c < i; c++)
      n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Re = 1, Ie = function(e) {
  if (Me.has(e))
    return Me.get(e);
  for (; ze.has(Re); )
    Re++;
  var r = Re++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && xe(16, "" + r), Me.set(e, r), ze.set(r, e), r;
}, Vr = function(e) {
  return ze.get(e);
}, jr = function(e, r) {
  r >= Re && (Re = r + 1), Me.set(e, r), ze.set(r, e);
}, zr = "style[" + we + '][data-styled-version="5.3.6"]', Ur = new RegExp("^" + we + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Yr = function(e, r, t) {
  for (var n, o = t.split(","), a = 0, i = o.length; a < i; a++)
    (n = o[a]) && e.registerName(r, n);
}, Br = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, a = t.length; o < a; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(Ur);
      if (c) {
        var d = 0 | parseInt(c[1], 10), f = c[2];
        d !== 0 && (jr(f, d), Yr(e, f, c[3]), e.getTag().insertRules(d, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, Wr = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ut = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(c) {
    for (var d = c.childNodes, f = d.length; f >= 0; f--) {
      var m = d[f];
      if (m && m.nodeType === 1 && m.hasAttribute(we))
        return m;
    }
  }(t), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(we, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var i = Wr();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, a), n;
}, Gr = function() {
  function e(t) {
    var n = this.element = Ut(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var a = document.styleSheets, i = 0, c = a.length; i < c; i++) {
        var d = a[i];
        if (d.ownerNode === o)
          return d;
      }
      xe(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Hr = function() {
  function e(t) {
    var n = this.element = Ut(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), a = this.nodes[t];
      return this.element.insertBefore(o, a || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Xr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Tt = ht, qr = { isServer: !ht, useCSSOMInjection: !Dr }, Yt = function() {
  function e(t, n, o) {
    t === void 0 && (t = ve), n === void 0 && (n = {}), this.options = pe({}, qr, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && ht && Tt && (Tt = !1, function(a) {
      for (var i = document.querySelectorAll(zr), c = 0, d = i.length; c < d; c++) {
        var f = i[c];
        f && f.getAttribute(we) !== "active" && (Br(a, f), f.parentNode && f.parentNode.removeChild(f));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ie(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(pe({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, a = n.useCSSOMInjection, i = n.target, t = o ? new Xr(i) : a ? new Gr(i) : new Hr(i), new Fr(t)));
    var t, n, o, a, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ie(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(Ie(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ie(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, a = "", i = 0; i < o; i++) {
        var c = Vr(i);
        if (c !== void 0) {
          var d = t.names.get(c), f = n.getGroup(i);
          if (d && f && d.size) {
            var m = we + ".g" + i + '[id="' + c + '"]', v = "";
            d !== void 0 && d.forEach(function(A) {
              A.length > 0 && (v += A + ",");
            }), a += "" + f + m + '{content:"' + v + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), Kr = /(a)(d)/gi, Ot = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function rt(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Ot(r % 52) + t;
  return (Ot(r % 52) + t).replace(Kr, "$1-$2");
}
var ge = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Bt = function(e) {
  return ge(5381, e);
};
function Zr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Pe(t) && !pt(t))
      return !1;
  }
  return !0;
}
var Jr = Bt("5.3.6"), Qr = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Zr(r), this.componentId = t, this.baseHash = ge(Jr, t), this.baseStyle = n, Yt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        a.push(this.staticRulesId);
      else {
        var i = Se(this.rules, r, t, n).join(""), c = rt(ge(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var d = n(i, "." + c, void 0, o);
          t.insertRules(o, c, d);
        }
        a.push(c), this.staticRulesId = c;
      }
    else {
      for (var f = this.rules.length, m = ge(this.baseHash, n.hash), v = "", A = 0; A < f; A++) {
        var k = this.rules[A];
        if (typeof k == "string")
          v += k, process.env.NODE_ENV !== "production" && (m = ge(m, k + A));
        else if (k) {
          var S = Se(k, r, t, n), x = Array.isArray(S) ? S.join("") : S;
          m = ge(m, x + A), v += x;
        }
      }
      if (v) {
        var l = rt(m >>> 0);
        if (!t.hasNameForId(o, l)) {
          var T = n(v, "." + l, void 0, o);
          t.insertRules(o, l, T);
        }
        a.push(l);
      }
    }
    return a.join(" ");
  }, e;
}(), en = /^\s*\/\/.*$/gm, tn = [":", "[", ".", "#"];
function rn(e) {
  var r, t, n, o, a = e === void 0 ? ve : e, i = a.options, c = i === void 0 ? ve : i, d = a.plugins, f = d === void 0 ? je : d, m = new br(c), v = [], A = /* @__PURE__ */ function(x) {
    function l(T) {
      if (T)
        try {
          x(T + "}");
        } catch {
        }
    }
    return function(T, E, _, b, u, B, ne, X, ee, te) {
      switch (T) {
        case 1:
          if (ee === 0 && E.charCodeAt(0) === 64)
            return x(E + ";"), "";
          break;
        case 2:
          if (X === 0)
            return E + "/*|*/";
          break;
        case 3:
          switch (X) {
            case 102:
            case 112:
              return x(_[0] + E), "";
            default:
              return E + (te === 0 ? "/*|*/" : "");
          }
        case -2:
          E.split("/*|*/}").forEach(l);
      }
    };
  }(function(x) {
    v.push(x);
  }), k = function(x, l, T) {
    return l === 0 && tn.indexOf(T[t.length]) !== -1 || T.match(o) ? x : "." + r;
  };
  function S(x, l, T, E) {
    E === void 0 && (E = "&");
    var _ = x.replace(en, ""), b = l && T ? T + " " + l + " { " + _ + " }" : _;
    return r = E, t = l, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), m(T || !l ? "" : l, b);
  }
  return m.use([].concat(f, [function(x, l, T) {
    x === 2 && T.length && T[0].lastIndexOf(t) > 0 && (T[0] = T[0].replace(n, k));
  }, A, function(x) {
    if (x === -2) {
      var l = v;
      return v = [], l;
    }
  }])), S.hash = f.length ? f.reduce(function(x, l) {
    return l.name || xe(15), ge(x, l.name);
  }, 5381).toString() : "", S;
}
var Wt = Ye.createContext();
Wt.Consumer;
var Gt = Ye.createContext(), nn = (Gt.Consumer, new Yt()), nt = rn();
function on() {
  return lt(Wt) || nn;
}
function an() {
  return lt(Gt) || nt;
}
var Ht = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = nt);
      var i = n.name + a.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, a(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return xe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = nt), this.name + r.hash;
  }, e;
}(), sn = /([A-Z])/, cn = /([A-Z])/g, ln = /^ms-/, un = function(e) {
  return "-" + e.toLowerCase();
};
function kt(e) {
  return sn.test(e) ? e.replace(cn, un).replace(ln, "-ms-") : e;
}
var It = function(e) {
  return e == null || e === !1 || e === "";
};
function Se(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, a = [], i = 0, c = e.length; i < c; i += 1)
      (o = Se(e[i], r, t, n)) !== "" && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (It(e))
    return "";
  if (pt(e))
    return "." + e.styledComponentId;
  if (Pe(e)) {
    if (typeof (f = e) != "function" || f.prototype && f.prototype.isReactComponent || !r)
      return e;
    var d = e(r);
    return process.env.NODE_ENV !== "production" && ut.isElement(d) && console.warn(tt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Se(d, r, t, n);
  }
  var f;
  return e instanceof Ht ? t ? (e.inject(t, n), e.getName(n)) : e : et(e) ? function m(v, A) {
    var k, S, x = [];
    for (var l in v)
      v.hasOwnProperty(l) && !It(v[l]) && (Array.isArray(v[l]) && v[l].isCss || Pe(v[l]) ? x.push(kt(l) + ":", v[l], ";") : et(v[l]) ? x.push.apply(x, m(v[l], l)) : x.push(kt(l) + ": " + (k = l, (S = v[l]) == null || typeof S == "boolean" || S === "" ? "" : typeof S != "number" || S === 0 || k in wr ? String(S).trim() : S + "px") + ";"));
    return A ? [A + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var $t = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Xt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return Pe(e) || et(e) ? $t(Se(Nt(je, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : $t(Se(Nt(e, t)));
}
var Dt = /invalid hook call/i, $e = /* @__PURE__ */ new Set(), dn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(a) {
        if (Dt.test(a))
          o = !1, $e.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          n.apply(void 0, [a].concat(c));
        }
      }, hr(), o && !$e.has(t) && (console.warn(t), $e.add(t));
    } catch (a) {
      Dt.test(a.message) && $e.delete(t);
    } finally {
      console.error = n;
    }
  }
}, fn = function(e, r, t) {
  return t === void 0 && (t = ve), e.theme !== t.theme && e.theme || r || t.theme;
}, pn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, hn = /(^-|-$)/g;
function Xe(e) {
  return e.replace(pn, "-").replace(hn, "");
}
var qt = function(e) {
  return rt(Bt(e) >>> 0);
};
function De(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ot = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, mn = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function vn(e, r, t) {
  var n = e[t];
  ot(r) && ot(n) ? Kt(n, r) : e[t] = r;
}
function Kt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, a = t; o < a.length; o++) {
    var i = a[o];
    if (ot(i))
      for (var c in i)
        mn(c) && vn(e, i[c], c);
  }
  return e;
}
var Zt = Ye.createContext();
Zt.Consumer;
var qe = {};
function Jt(e, r, t) {
  var n = pt(e), o = !De(e), a = r.attrs, i = a === void 0 ? je : a, c = r.componentId, d = c === void 0 ? function(E, _) {
    var b = typeof E != "string" ? "sc" : Xe(E);
    qe[b] = (qe[b] || 0) + 1;
    var u = b + "-" + qt("5.3.6" + b + qe[b]);
    return _ ? _ + "-" + u : u;
  }(r.displayName, r.parentComponentId) : c, f = r.displayName, m = f === void 0 ? function(E) {
    return De(E) ? "styled." + E : "Styled(" + tt(E) + ")";
  }(e) : f, v = r.displayName && r.componentId ? Xe(r.displayName) + "-" + r.componentId : r.componentId || d, A = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, k = r.shouldForwardProp;
  n && e.shouldForwardProp && (k = r.shouldForwardProp ? function(E, _, b) {
    return e.shouldForwardProp(E, _, b) && r.shouldForwardProp(E, _, b);
  } : e.shouldForwardProp);
  var S, x = new Qr(t, v, n ? e.componentStyle : void 0), l = x.isStatic && i.length === 0, T = function(E, _) {
    return function(b, u, B, ne) {
      var X = b.attrs, ee = b.componentStyle, te = b.defaultProps, se = b.foldedComponentIds, Z = b.shouldForwardProp, re = b.styledComponentId, ie = b.target;
      process.env.NODE_ENV !== "production" && wt(re);
      var q = function(P, s, $) {
        P === void 0 && (P = ve);
        var h = pe({}, s, { theme: P }), z = {};
        return $.forEach(function(D) {
          var I, p, Y, g = D;
          for (I in Pe(g) && (g = g(h)), g)
            h[I] = z[I] = I === "className" ? (p = z[I], Y = g[I], p && Y ? p + " " + Y : p || Y) : g[I];
        }), [h, z];
      }(fn(u, lt(Zt), te) || ve, u, X), de = q[0], oe = q[1], K = function(P, s, $, h) {
        var z = on(), D = an(), I = s ? P.generateAndInjectStyles(ve, z, D) : P.generateAndInjectStyles($, z, D);
        return process.env.NODE_ENV !== "production" && wt(I), process.env.NODE_ENV !== "production" && !s && h && h(I), I;
      }(ee, ne, de, process.env.NODE_ENV !== "production" ? b.warnTooManyClasses : void 0), ue = B, ce = oe.$as || u.$as || oe.as || u.as || ie, fe = De(ce), C = oe !== u ? pe({}, u, {}, oe) : u, y = {};
      for (var w in C)
        w[0] !== "$" && w !== "as" && (w === "forwardedAs" ? y.as = C[w] : (Z ? Z(w, Ct, ce) : !fe || Ct(w)) && (y[w] = C[w]));
      return u.style && oe.style !== u.style && (y.style = pe({}, u.style, {}, oe.style)), y.className = Array.prototype.concat(se, re, K !== re ? K : null, u.className, oe.className).filter(Boolean).join(" "), y.ref = ue, mr(ce, y);
    }(S, E, _, l);
  };
  return T.displayName = m, (S = Ye.forwardRef(T)).attrs = A, S.componentStyle = x, S.displayName = m, S.shouldForwardProp = k, S.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : je, S.styledComponentId = v, S.target = n ? e.target : e, S.withComponent = function(E) {
    var _ = r.componentId, b = function(B, ne) {
      if (B == null)
        return {};
      var X, ee, te = {}, se = Object.keys(B);
      for (ee = 0; ee < se.length; ee++)
        X = se[ee], ne.indexOf(X) >= 0 || (te[X] = B[X]);
      return te;
    }(r, ["componentId"]), u = _ && _ + "-" + (De(E) ? E : Xe(tt(E)));
    return Jt(E, pe({}, b, { attrs: A, componentId: u }), t);
  }, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? Kt({}, e.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (dn(m, v), S.warnTooManyClasses = /* @__PURE__ */ function(E, _) {
    var b = {}, u = !1;
    return function(B) {
      if (!u && (b[B] = !0, Object.keys(b).length >= 200)) {
        var ne = _ ? ' with the id of "' + _ + '"' : "";
        console.warn("Over 200 classes were generated for component " + E + ne + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, b = {};
      }
    };
  }(m, v)), S.toString = function() {
    return "." + S.styledComponentId;
  }, o && $r(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), S;
}
var ae = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = ve), !ut.isValidElementType(n))
      return xe(1, String(n));
    var a = function() {
      return t(n, o, Xt.apply(void 0, arguments));
    };
    return a.withConfig = function(i) {
      return r(t, n, pe({}, o, {}, i));
    }, a.attrs = function(i) {
      return r(t, n, pe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, a;
  }(Jt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ae[e] = ae(e);
});
function Qt(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = Xt.apply(void 0, [e].concat(t)).join(""), a = qt(o);
  return new Ht(a, o);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const gn = ae((e) => /* @__PURE__ */ U(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 12 12",
    ...e,
    children: /* @__PURE__ */ U(
      "path",
      {
        fill: "currentColor",
        d: "M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"
      }
    )
  }
))``, yn = Qt`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`, bn = Qt`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`, mo = ae.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`, vo = ae(
  ({ className: e, children: r, addToPracticePlan: t }) => /* @__PURE__ */ U("li", { className: e, children: /* @__PURE__ */ U("button", { onClick: t, children: r }) })
)`
  list-style: none;

  --border-radius: 16px;
  & > button {
    padding: 16px 32px;
    background-color: var(--secondary);
    color: white;
    border: none;
    width: 100%;
    cursor: pointer;
  }

  &:first-of-type > button {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  &:last-of-type > button {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  &:first-of-type:last-of-type > button {
    border-radius: var(--border-radius);
  }

  &:not(&:last-of-type, &:hover) > button {
    border-bottom: 2px solid var(--primary);
  }

  &:hover > button {
    border-bottom: 2px solid var(--highlight);
  }
`, wn = (e, r) => {
  var d;
  const { top: t, bottom: n, left: o, right: a } = e.current.getBoundingClientRect(), i = r.clientX, c = r.clientY;
  (i < o || i > a || c < t || c > n) && ((d = e.current) == null || d.close());
}, Sn = ae.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, go = ae(
  ({ children: e, className: r, passedRef: t, title: n }) => /* @__PURE__ */ ye(
    "dialog",
    {
      ref: t,
      onClick: (a) => wn(t, a),
      className: r,
      children: [
        /* @__PURE__ */ ye(Sn, { children: [
          n,
          /* @__PURE__ */ U(gn, { onClick: () => {
            t.current.close();
          } })
        ] }),
        e
      ]
    }
  )
)`
  --animation-timing: 0.4s;
  --panel-width: 300px;

  will-change: transform;
  transform-origin: right center;
  box-shadow: -16px 0px 16px -16px hsl(from var(--primary) h s calc(l * 0.1));

  border: none;
  inset: unset;

  min-height: 100%;
  width: var(--panel-width);

  position: fixed;
  top: 0;
  right: calc(-1 * var(--panel-width));
  padding: 0;

  background-color: var(--primary);

  &[open] {
    animation: ${bn} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${yn} var(--animation-timing) ease-out forwards;
    }
  }
`, yo = ae(({ text: e, onClick: r, className: t, Icon: n }) => /* @__PURE__ */ ye(
  "button",
  {
    className: t,
    onClick: r,
    children: [
      /* @__PURE__ */ U("span", { children: e }),
      !!n && /* @__PURE__ */ U("div", { children: /* @__PURE__ */ U(n, {}) })
    ]
  }
))`
  --button-color: ${({ $level: e }) => e === "caution" ? "var(--caution)" : "var(--affirmative)"};

  padding-inline: 32px;
  padding-block: 8px;
  background-color: var(--button-color);
  display: grid;
  gap: clamp(2px, 2vw, 16px);
  grid-auto-flow: column;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  position: relative;

  &:hover,
  &:hover > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.8));
  }

  &:active,
  &:active > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.7));
  }

  & > div {
    border-radius: 50%;
    width: 30px;
    aspect-ratio: 1/1;
    border-top: 2px solid white;
    border-left: 2px solid white;
    display: grid;
    place-items: center;
    transform: translate(0%, -35%);
    position: absolute;
    right: 0;
    background-color: var(--button-color);
  }
`, bo = ae(
  ({ tabs: e, currentTab: r, setCurrentTab: t, className: n }) => /* @__PURE__ */ U("div", { className: n, children: e.map((o) => /* @__PURE__ */ U(
    "div",
    {
      onClick: () => t(o),
      "aria-selected": r === o,
      children: o
    },
    o
  )) })
)`
  grid-area: nav;
  display: flex;
  gap: 1px;
  background-color: var(--primary);
  border-bottom: 1px groove var(--secondary);
  color: white;

  & > div[aria-selected='true'] {
    border-bottom: 2px solid var(--highlight);
    cursor: not-allowed;
  }

  & > div {
    cursor: pointer;
    padding: 16px 32px;
    text-transform: capitalize;
  }
`;
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, at.apply(this, arguments);
}
var Lt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Lt || (Lt = {}));
function H(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function Ne(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function it(e) {
  let {
    pathname: r = "/",
    search: t = "",
    hash: n = ""
  } = e;
  return t && t !== "?" && (r += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (r += n.charAt(0) === "#" ? n : "#" + n), r;
}
function er(e) {
  let r = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && (r.hash = e.substr(t), e = e.substr(0, t));
    let n = e.indexOf("?");
    n >= 0 && (r.search = e.substr(n), e = e.substr(0, n)), e && (r.pathname = e);
  }
  return r;
}
var Mt;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Mt || (Mt = {}));
function Ft(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [t, n] = En(e.path, e.caseSensitive, e.end), o = r.match(t);
  if (!o)
    return null;
  let a = o[0], i = a.replace(/(.)\/+$/, "$1"), c = o.slice(1);
  return {
    params: n.reduce((f, m, v) => {
      let {
        paramName: A,
        isOptional: k
      } = m;
      if (A === "*") {
        let x = c[v] || "";
        i = a.slice(0, a.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const S = c[v];
      return k && !S ? f[A] = void 0 : f[A] = (S || "").replace(/%2F/g, "/"), f;
    }, {}),
    pathname: a,
    pathnameBase: i,
    pattern: e
  };
}
function En(e, r, t) {
  r === void 0 && (r = !1), t === void 0 && (t = !0), Ne(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, c, d) => (n.push({
    paramName: c,
    isOptional: d != null
  }), d ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : t ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), n];
}
function Ee(e, r) {
  if (r === "/")
    return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let t = r.endsWith("/") ? r.length - 1 : r.length, n = e.charAt(t);
  return n && n !== "/" ? null : e.slice(t) || "/";
}
function Cn(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: t,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? er(e) : e;
  return {
    pathname: t ? t.startsWith("/") ? t : xn(t, r) : r,
    search: An(n),
    hash: Rn(o)
  };
}
function xn(e, r) {
  let t = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? t.length > 1 && t.pop() : o !== "." && t.push(o);
  }), t.length > 1 ? t.join("/") : "/";
}
function Ke(e, r, t, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function _n(e) {
  return e.filter((r, t) => t === 0 || r.route.path && r.route.path.length > 0);
}
function tr(e, r) {
  let t = _n(e);
  return r ? t.map((n, o) => o === e.length - 1 ? n.pathname : n.pathnameBase) : t.map((n) => n.pathnameBase);
}
function rr(e, r, t, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = er(e) : (o = at({}, e), H(!o.pathname || !o.pathname.includes("?"), Ke("?", "pathname", "search", o)), H(!o.pathname || !o.pathname.includes("#"), Ke("#", "pathname", "hash", o)), H(!o.search || !o.search.includes("#"), Ke("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "", i = a ? "/" : o.pathname, c;
  if (i == null)
    c = t;
  else {
    let v = r.length - 1;
    if (!n && i.startsWith("..")) {
      let A = i.split("/");
      for (; A[0] === ".."; )
        A.shift(), v -= 1;
      o.pathname = A.join("/");
    }
    c = v >= 0 ? r[v] : "/";
  }
  let d = Cn(o, c), f = i && i !== "/" && i.endsWith("/"), m = (a || i === ".") && t.endsWith("/");
  return !d.pathname.endsWith("/") && (f || m) && (d.pathname += "/"), d;
}
const mt = (e) => e.join("/").replace(/\/\/+/g, "/"), An = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Rn = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, nr = ["post", "put", "patch", "delete"];
new Set(nr);
const Pn = ["get", ...nr];
new Set(Pn);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, st.apply(this, arguments);
}
const Be = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Be.displayName = "DataRouter");
const or = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (or.displayName = "DataRouterState");
const Nn = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Nn.displayName = "Await");
const he = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (he.displayName = "Navigation");
const vt = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (vt.displayName = "Location");
const be = /* @__PURE__ */ R.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (be.displayName = "Route");
const Tn = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Tn.displayName = "RouteError");
function On(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r;
  gt() || (process.env.NODE_ENV !== "production" ? H(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : H(!1));
  let {
    basename: n,
    navigator: o
  } = R.useContext(he), {
    hash: a,
    pathname: i,
    search: c
  } = Oe(e, {
    relative: t
  }), d = i;
  return n !== "/" && (d = i === "/" ? n : mt([n, i])), o.createHref({
    pathname: d,
    search: c,
    hash: a
  });
}
function gt() {
  return R.useContext(vt) != null;
}
function Te() {
  return gt() || (process.env.NODE_ENV !== "production" ? H(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : H(!1)), R.useContext(vt).location;
}
const ar = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ir(e) {
  R.useContext(he).static || R.useLayoutEffect(e);
}
function kn() {
  let {
    isDataRoute: e
  } = R.useContext(be);
  return e ? Vn() : In();
}
function In() {
  gt() || (process.env.NODE_ENV !== "production" ? H(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : H(!1));
  let e = R.useContext(Be), {
    basename: r,
    future: t,
    navigator: n
  } = R.useContext(he), {
    matches: o
  } = R.useContext(be), {
    pathname: a
  } = Te(), i = JSON.stringify(tr(o, t.v7_relativeSplatPath)), c = R.useRef(!1);
  return ir(() => {
    c.current = !0;
  }), R.useCallback(function(f, m) {
    if (m === void 0 && (m = {}), process.env.NODE_ENV !== "production" && Ne(c.current, ar), !c.current)
      return;
    if (typeof f == "number") {
      n.go(f);
      return;
    }
    let v = rr(f, JSON.parse(i), a, m.relative === "path");
    e == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : mt([r, v.pathname])), (m.replace ? n.replace : n.push)(v, m.state, m);
  }, [r, n, i, a, e]);
}
const $n = /* @__PURE__ */ R.createContext(null);
function Dn(e) {
  let r = R.useContext(be).outlet;
  return r && /* @__PURE__ */ R.createElement($n.Provider, {
    value: e
  }, r);
}
function Oe(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r, {
    future: n
  } = R.useContext(he), {
    matches: o
  } = R.useContext(be), {
    pathname: a
  } = Te(), i = JSON.stringify(tr(o, n.v7_relativeSplatPath));
  return R.useMemo(() => rr(e, JSON.parse(i), a, t === "path"), [e, i, a, t]);
}
var sr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(sr || {}), yt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(yt || {});
function cr(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ln(e) {
  let r = R.useContext(Be);
  return r || (process.env.NODE_ENV !== "production" ? H(!1, cr(e)) : H(!1)), r;
}
function Mn(e) {
  let r = R.useContext(be);
  return r || (process.env.NODE_ENV !== "production" ? H(!1, cr(e)) : H(!1)), r;
}
function lr(e) {
  let r = Mn(e), t = r.matches[r.matches.length - 1];
  return t.route.id || (process.env.NODE_ENV !== "production" ? H(!1, e + ' can only be used on routes that contain a unique "id"') : H(!1)), t.route.id;
}
function Fn() {
  return lr(yt.UseRouteId);
}
function Vn() {
  let {
    router: e
  } = Ln(sr.UseNavigateStable), r = lr(yt.UseNavigateStable), t = R.useRef(!1);
  return ir(() => {
    t.current = !0;
  }), R.useCallback(function(o, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && Ne(t.current, ar), t.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, st({
      fromRouteId: r
    }, a)));
  }, [e, r]);
}
function jn(e) {
  return Dn(e.context);
}
new Promise(() => {
});
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ce() {
  return Ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ce.apply(this, arguments);
}
function bt(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
const Fe = "get", Ve = "application/x-www-form-urlencoded";
function We(e) {
  return e != null && typeof e.tagName == "string";
}
function zn(e) {
  return We(e) && e.tagName.toLowerCase() === "button";
}
function Un(e) {
  return We(e) && e.tagName.toLowerCase() === "form";
}
function Yn(e) {
  return We(e) && e.tagName.toLowerCase() === "input";
}
function Bn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wn(e, r) {
  return e.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Bn(e);
}
let Le = null;
function Gn() {
  if (Le === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Le = !1;
    } catch {
      Le = !0;
    }
  return Le;
}
const Hn = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ze(e) {
  return e != null && !Hn.has(e) ? (process.env.NODE_ENV !== "production" && Ne(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Ve + '"')), null) : e;
}
function Xn(e, r) {
  let t, n, o, a, i;
  if (Un(e)) {
    let c = e.getAttribute("action");
    n = c ? Ee(c, r) : null, t = e.getAttribute("method") || Fe, o = Ze(e.getAttribute("enctype")) || Ve, a = new FormData(e);
  } else if (zn(e) || Yn(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let d = e.getAttribute("formaction") || c.getAttribute("action");
    if (n = d ? Ee(d, r) : null, t = e.getAttribute("formmethod") || c.getAttribute("method") || Fe, o = Ze(e.getAttribute("formenctype")) || Ze(c.getAttribute("enctype")) || Ve, a = new FormData(c, e), !Gn()) {
      let {
        name: f,
        type: m,
        value: v
      } = e;
      if (m === "image") {
        let A = f ? f + "." : "";
        a.append(A + "x", "0"), a.append(A + "y", "0");
      } else
        f && a.append(f, v);
    }
  } else {
    if (We(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    t = Fe, n = null, o = Ve, i = e;
  }
  return a && o === "text/plain" && (i = a, a = void 0), {
    action: n,
    method: t.toLowerCase(),
    encType: o,
    formData: a,
    body: i
  };
}
const qn = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Kn = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Zn = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Jn = "6";
try {
  window.__reactRouterVersion = Jn;
} catch {
}
const ur = /* @__PURE__ */ R.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (ur.displayName = "ViewTransition");
const Qn = /* @__PURE__ */ R.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Qn.displayName = "Fetchers");
process.env.NODE_ENV;
const eo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", to = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, dr = /* @__PURE__ */ R.forwardRef(function(r, t) {
  let {
    onClick: n,
    relative: o,
    reloadDocument: a,
    replace: i,
    state: c,
    target: d,
    to: f,
    preventScrollReset: m,
    unstable_viewTransition: v
  } = r, A = bt(r, qn), {
    basename: k
  } = R.useContext(he), S, x = !1;
  if (typeof f == "string" && to.test(f) && (S = f, eo))
    try {
      let _ = new URL(window.location.href), b = f.startsWith("//") ? new URL(_.protocol + f) : new URL(f), u = Ee(b.pathname, k);
      b.origin === _.origin && u != null ? f = u + b.search + b.hash : x = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Ne(!1, '<Link to="' + f + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let l = On(f, {
    relative: o
  }), T = oo(f, {
    replace: i,
    state: c,
    target: d,
    preventScrollReset: m,
    relative: o,
    unstable_viewTransition: v
  });
  function E(_) {
    n && n(_), _.defaultPrevented || T(_);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ R.createElement("a", Ce({}, A, {
      href: S || l,
      onClick: x || a ? n : E,
      ref: t,
      target: d
    }))
  );
});
process.env.NODE_ENV !== "production" && (dr.displayName = "Link");
const ct = /* @__PURE__ */ R.forwardRef(function(r, t) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: i = !1,
    style: c,
    to: d,
    unstable_viewTransition: f,
    children: m
  } = r, v = bt(r, Kn), A = Oe(d, {
    relative: v.relative
  }), k = Te(), S = R.useContext(or), {
    navigator: x,
    basename: l
  } = R.useContext(he), T = S != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  uo(A) && f === !0, E = x.encodeLocation ? x.encodeLocation(A).pathname : A.pathname, _ = k.pathname, b = S && S.navigation && S.navigation.location ? S.navigation.location.pathname : null;
  o || (_ = _.toLowerCase(), b = b ? b.toLowerCase() : null, E = E.toLowerCase()), b && l && (b = Ee(b, l) || b);
  const u = E !== "/" && E.endsWith("/") ? E.length - 1 : E.length;
  let B = _ === E || !i && _.startsWith(E) && _.charAt(u) === "/", ne = b != null && (b === E || !i && b.startsWith(E) && b.charAt(E.length) === "/"), X = {
    isActive: B,
    isPending: ne,
    isTransitioning: T
  }, ee = B ? n : void 0, te;
  typeof a == "function" ? te = a(X) : te = [a, B ? "active" : null, ne ? "pending" : null, T ? "transitioning" : null].filter(Boolean).join(" ");
  let se = typeof c == "function" ? c(X) : c;
  return /* @__PURE__ */ R.createElement(dr, Ce({}, v, {
    "aria-current": ee,
    className: te,
    ref: t,
    style: se,
    to: d,
    unstable_viewTransition: f
  }), typeof m == "function" ? m(X) : m);
});
process.env.NODE_ENV !== "production" && (ct.displayName = "NavLink");
const ro = /* @__PURE__ */ R.forwardRef((e, r) => {
  let {
    fetcherKey: t,
    navigate: n,
    reloadDocument: o,
    replace: a,
    state: i,
    method: c = Fe,
    action: d,
    onSubmit: f,
    relative: m,
    preventScrollReset: v,
    unstable_viewTransition: A
  } = e, k = bt(e, Zn), S = co(), x = lo(d, {
    relative: m
  }), l = c.toLowerCase() === "get" ? "get" : "post", T = (E) => {
    if (f && f(E), E.defaultPrevented)
      return;
    E.preventDefault();
    let _ = E.nativeEvent.submitter, b = (_ == null ? void 0 : _.getAttribute("formmethod")) || c;
    S(_ || E.currentTarget, {
      fetcherKey: t,
      method: b,
      navigate: n,
      replace: a,
      state: i,
      relative: m,
      preventScrollReset: v,
      unstable_viewTransition: A
    });
  };
  return /* @__PURE__ */ R.createElement("form", Ce({
    ref: r,
    method: l,
    action: x,
    onSubmit: o ? f : T
  }, k));
});
process.env.NODE_ENV !== "production" && (ro.displayName = "Form");
process.env.NODE_ENV;
var Ue;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Ue || (Ue = {}));
var Vt;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Vt || (Vt = {}));
function no(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fr(e) {
  let r = R.useContext(Be);
  return r || (process.env.NODE_ENV !== "production" ? H(!1, no(e)) : H(!1)), r;
}
function oo(e, r) {
  let {
    target: t,
    replace: n,
    state: o,
    preventScrollReset: a,
    relative: i,
    unstable_viewTransition: c
  } = r === void 0 ? {} : r, d = kn(), f = Te(), m = Oe(e, {
    relative: i
  });
  return R.useCallback((v) => {
    if (Wn(v, t)) {
      v.preventDefault();
      let A = n !== void 0 ? n : it(f) === it(m);
      d(e, {
        replace: A,
        state: o,
        preventScrollReset: a,
        relative: i,
        unstable_viewTransition: c
      });
    }
  }, [f, d, m, n, o, t, e, a, i, c]);
}
function ao() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let io = 0, so = () => "__" + String(++io) + "__";
function co() {
  let {
    router: e
  } = fr(Ue.UseSubmit), {
    basename: r
  } = R.useContext(he), t = Fn();
  return R.useCallback(function(n, o) {
    o === void 0 && (o = {}), ao();
    let {
      action: a,
      method: i,
      encType: c,
      formData: d,
      body: f
    } = Xn(n, r);
    if (o.navigate === !1) {
      let m = o.fetcherKey || so();
      e.fetch(m, t, o.action || a, {
        preventScrollReset: o.preventScrollReset,
        formData: d,
        body: f,
        formMethod: o.method || i,
        formEncType: o.encType || c,
        unstable_flushSync: o.unstable_flushSync
      });
    } else
      e.navigate(o.action || a, {
        preventScrollReset: o.preventScrollReset,
        formData: d,
        body: f,
        formMethod: o.method || i,
        formEncType: o.encType || c,
        replace: o.replace,
        state: o.state,
        fromRouteId: t,
        unstable_flushSync: o.unstable_flushSync,
        unstable_viewTransition: o.unstable_viewTransition
      });
  }, [e, r, t]);
}
function lo(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r, {
    basename: n
  } = R.useContext(he), o = R.useContext(be);
  o || (process.env.NODE_ENV !== "production" ? H(!1, "useFormAction must be used inside a RouteContext") : H(!1));
  let [a] = o.matches.slice(-1), i = Ce({}, Oe(e || ".", {
    relative: t
  })), c = Te();
  if (e == null) {
    i.search = c.search;
    let d = new URLSearchParams(i.search);
    d.has("index") && d.get("index") === "" && (d.delete("index"), i.search = d.toString() ? "?" + d.toString() : "");
  }
  return (!e || e === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : mt([n, i.pathname])), it(i);
}
function uo(e, r) {
  r === void 0 && (r = {});
  let t = R.useContext(ur);
  t == null && (process.env.NODE_ENV !== "production" ? H(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : H(!1));
  let {
    basename: n
  } = fr(Ue.useViewTransitionState), o = Oe(e, {
    relative: r.relative
  });
  if (!t.isTransitioning)
    return !1;
  let a = Ee(t.currentLocation.pathname, n) || t.currentLocation.pathname, i = Ee(t.nextLocation.pathname, n) || t.nextLocation.pathname;
  return Ft(o.pathname, i) != null || Ft(o.pathname, a) != null;
}
const wo = ae(({ className: e }) => /* @__PURE__ */ ye(pr, { children: [
  /* @__PURE__ */ U("nav", { className: e, children: /* @__PURE__ */ ye("ul", { children: [
    /* @__PURE__ */ U("li", { children: /* @__PURE__ */ U(ct, { to: "/practice_plans", children: "Practice Plans" }) }),
    /* @__PURE__ */ U("li", { children: /* @__PURE__ */ U(ct, { to: "/create", children: "Create" }) })
  ] }) }),
  /* @__PURE__ */ U(jn, {})
] }))`
  border-bottom: 1px groove var(--secondary);
  background-color: var(--primary);
  padding: 16px;

  & a {
    color: white;
  }

  & > ul {
    list-style: none;
    display: flex;
    gap: 32px;
    padding: 0;
    margin: 0;
  }
`, So = ae(({ className: e, children: r, title: t, ...n }) => /* @__PURE__ */ ye(
  "details",
  {
    className: e,
    ...n,
    children: [
      /* @__PURE__ */ U("summary", { children: t }),
      r
    ]
  }
))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`, Eo = ae(({ className: e }) => /* @__PURE__ */ ye(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    className: e,
    children: [
      /* @__PURE__ */ U(
        "path",
        {
          fill: "currentColor",
          d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"
        }
      ),
      /* @__PURE__ */ U(
        "path",
        {
          fill: "currentColor",
          d: "M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"
        }
      )
    ]
  }
))``, Co = ae(({ className: e }) => /* @__PURE__ */ U(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    className: e,
    children: /* @__PURE__ */ U(
      "path",
      {
        fill: "currentColor",
        d: "M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"
      }
    )
  }
))``, xo = ae(({ className: e = "" }) => /* @__PURE__ */ U(
  "svg",
  {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ U(
      "path",
      {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",
        className: e
      }
    )
  }
))``, _o = ae(({ className: e }) => /* @__PURE__ */ U(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    className: e,
    children: /* @__PURE__ */ U(
      "path",
      {
        fillRule: "evenodd",
        d: "M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",
        fill: "currentColor"
      }
    )
  }
))``;
export {
  yo as Button,
  gn as CloseIcon,
  Eo as CopyIcon,
  So as Details,
  _o as EditIcon,
  wo as NavBar,
  go as Panel,
  vo as PanelItem,
  mo as PanelList,
  Co as SaveIcon,
  bo as Tabs,
  xo as TrashIcon
};
