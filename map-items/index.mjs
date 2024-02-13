import { jsx as Z, jsxs as lt, Fragment as _t } from "react/jsx-runtime";
import Pe, { useRef as ut, useDebugValue as We, useContext as Ye, createElement as xt, forwardRef as Rt } from "react";
const Ir = ({ className: e = "" }) => /* @__PURE__ */ Z(
  "svg",
  {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ Z(
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
);
function Tt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ie = { exports: {} }, D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Pt() {
  if (Xe)
    return D;
  Xe = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function E(i) {
    if (typeof i == "object" && i !== null) {
      var O = i.$$typeof;
      switch (O) {
        case e:
          switch (i = i.type, i) {
            case t:
            case a:
            case n:
            case v:
            case S:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case f:
                case l:
                case h:
                case P:
                case b:
                case c:
                  return i;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  return D.ContextConsumer = l, D.ContextProvider = c, D.Element = e, D.ForwardRef = h, D.Fragment = t, D.Lazy = P, D.Memo = b, D.Portal = r, D.Profiler = a, D.StrictMode = n, D.Suspense = v, D.SuspenseList = S, D.isAsyncMode = function() {
    return !1;
  }, D.isConcurrentMode = function() {
    return !1;
  }, D.isContextConsumer = function(i) {
    return E(i) === l;
  }, D.isContextProvider = function(i) {
    return E(i) === c;
  }, D.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }, D.isForwardRef = function(i) {
    return E(i) === h;
  }, D.isFragment = function(i) {
    return E(i) === t;
  }, D.isLazy = function(i) {
    return E(i) === P;
  }, D.isMemo = function(i) {
    return E(i) === b;
  }, D.isPortal = function(i) {
    return E(i) === r;
  }, D.isProfiler = function(i) {
    return E(i) === a;
  }, D.isStrictMode = function(i) {
    return E(i) === n;
  }, D.isSuspense = function(i) {
    return E(i) === v;
  }, D.isSuspenseList = function(i) {
    return E(i) === S;
  }, D.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === t || i === a || i === n || i === v || i === S || i === _ || typeof i == "object" && i !== null && (i.$$typeof === P || i.$$typeof === b || i.$$typeof === c || i.$$typeof === l || i.$$typeof === h || i.$$typeof === w || i.getModuleId !== void 0);
  }, D.typeOf = E, D;
}
var L = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function kt() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), w = !1, E = !1, i = !1, O = !1, R = !1, T;
    T = Symbol.for("react.module.reference");
    function C(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === t || p === a || R || p === n || p === v || p === S || O || p === _ || w || E || i || typeof p == "object" && p !== null && (p.$$typeof === P || p.$$typeof === b || p.$$typeof === c || p.$$typeof === l || p.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === T || p.getModuleId !== void 0));
    }
    function s(p) {
      if (typeof p == "object" && p !== null) {
        var k = p.$$typeof;
        switch (k) {
          case e:
            var V = p.type;
            switch (V) {
              case t:
              case a:
              case n:
              case v:
              case S:
                return V;
              default:
                var M = V && V.$$typeof;
                switch (M) {
                  case f:
                  case l:
                  case h:
                  case P:
                  case b:
                  case c:
                    return M;
                  default:
                    return k;
                }
            }
          case r:
            return k;
        }
      }
    }
    var U = l, re = c, K = e, ee = h, ne = t, ie = P, W = b, Q = r, te = a, G = n, ce = v, J = S, H = !1, se = !1;
    function oe(p) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function le(p) {
      return se || (se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function g(p) {
      return s(p) === l;
    }
    function m(p) {
      return s(p) === c;
    }
    function y(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function A(p) {
      return s(p) === h;
    }
    function o(p) {
      return s(p) === t;
    }
    function $(p) {
      return s(p) === P;
    }
    function d(p) {
      return s(p) === b;
    }
    function z(p) {
      return s(p) === r;
    }
    function I(p) {
      return s(p) === a;
    }
    function N(p) {
      return s(p) === n;
    }
    function u(p) {
      return s(p) === v;
    }
    function Y(p) {
      return s(p) === S;
    }
    L.ContextConsumer = U, L.ContextProvider = re, L.Element = K, L.ForwardRef = ee, L.Fragment = ne, L.Lazy = ie, L.Memo = W, L.Portal = Q, L.Profiler = te, L.StrictMode = G, L.Suspense = ce, L.SuspenseList = J, L.isAsyncMode = oe, L.isConcurrentMode = le, L.isContextConsumer = g, L.isContextProvider = m, L.isElement = y, L.isForwardRef = A, L.isFragment = o, L.isLazy = $, L.isMemo = d, L.isPortal = z, L.isProfiler = I, L.isStrictMode = N, L.isSuspense = u, L.isSuspenseList = Y, L.isValidElementType = C, L.typeOf = s;
  }()), L;
}
process.env.NODE_ENV === "production" ? Ie.exports = Pt() : Ie.exports = kt();
var Ve = Ie.exports;
function Ot(e) {
  function r(g, m, y, A, o) {
    for (var $ = 0, d = 0, z = 0, I = 0, N, u, Y = 0, p = 0, k, V = k = N = 0, M = 0, X = 0, ge = 0, q = 0, Ee = y.length, be = Ee - 1, ae, x = "", B = "", ke = "", Oe = "", fe; M < Ee; ) {
      if (u = y.charCodeAt(M), M === be && d + I + z + $ !== 0 && (d !== 0 && (u = d === 47 ? 10 : 47), I = z = $ = 0, Ee++, be++), d + I + z + $ === 0) {
        if (M === be && (0 < X && (x = x.replace(P, "")), 0 < x.trim().length)) {
          switch (u) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              x += y.charAt(M);
          }
          u = 59;
        }
        switch (u) {
          case 123:
            for (x = x.trim(), N = x.charCodeAt(0), k = 1, q = ++M; M < Ee; ) {
              switch (u = y.charCodeAt(M)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (u = y.charCodeAt(M + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (V = M + 1; V < be; ++V)
                          switch (y.charCodeAt(V)) {
                            case 47:
                              if (u === 42 && y.charCodeAt(V - 1) === 42 && M + 2 !== V) {
                                M = V + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (u === 47) {
                                M = V + 1;
                                break e;
                              }
                          }
                        M = V;
                      }
                  }
                  break;
                case 91:
                  u++;
                case 40:
                  u++;
                case 34:
                case 39:
                  for (; M++ < be && y.charCodeAt(M) !== u; )
                    ;
              }
              if (k === 0)
                break;
              M++;
            }
            switch (k = y.substring(q, M), N === 0 && (N = (x = x.replace(b, "").trim()).charCodeAt(0)), N) {
              case 64:
                switch (0 < X && (x = x.replace(P, "")), u = x.charCodeAt(1), u) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    X = m;
                    break;
                  default:
                    X = ce;
                }
                if (k = r(m, X, k, u, o + 1), q = k.length, 0 < H && (X = t(ce, x, ge), fe = f(3, k, X, m, Q, W, q, u, o, A), x = X.join(""), fe !== void 0 && (q = (k = fe.trim()).length) === 0 && (u = 0, k = "")), 0 < q)
                  switch (u) {
                    case 115:
                      x = x.replace(U, l);
                    case 100:
                    case 109:
                    case 45:
                      k = x + "{" + k + "}";
                      break;
                    case 107:
                      x = x.replace(R, "$1 $2"), k = x + "{" + k + "}", k = G === 1 || G === 2 && c("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                      break;
                    default:
                      k = x + k, A === 112 && (k = (B += k, ""));
                  }
                else
                  k = "";
                break;
              default:
                k = r(m, t(m, x, ge), k, A, o + 1);
            }
            ke += k, k = ge = X = V = N = 0, x = "", u = y.charCodeAt(++M);
            break;
          case 125:
          case 59:
            if (x = (0 < X ? x.replace(P, "") : x).trim(), 1 < (q = x.length))
              switch (V === 0 && (N = x.charCodeAt(0), N === 45 || 96 < N && 123 > N) && (q = (x = x.replace(" ", ":")).length), 0 < H && (fe = f(1, x, m, g, Q, W, B.length, A, o, A)) !== void 0 && (q = (x = fe.trim()).length) === 0 && (x = "\0\0"), N = x.charCodeAt(0), u = x.charCodeAt(1), N) {
                case 0:
                  break;
                case 64:
                  if (u === 105 || u === 99) {
                    Oe += x + y.charAt(M);
                    break;
                  }
                default:
                  x.charCodeAt(q - 1) !== 58 && (B += a(x, N, u, x.charCodeAt(2)));
              }
            ge = X = V = N = 0, x = "", u = y.charCodeAt(++M);
        }
      }
      switch (u) {
        case 13:
        case 10:
          d === 47 ? d = 0 : 1 + N === 0 && A !== 107 && 0 < x.length && (X = 1, x += "\0"), 0 < H * oe && f(0, x, m, g, Q, W, B.length, A, o, A), W = 1, Q++;
          break;
        case 59:
        case 125:
          if (d + I + z + $ === 0) {
            W++;
            break;
          }
        default:
          switch (W++, ae = y.charAt(M), u) {
            case 9:
            case 32:
              if (I + $ + d === 0)
                switch (Y) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ae = "";
                    break;
                  default:
                    u !== 32 && (ae = " ");
                }
              break;
            case 0:
              ae = "\\0";
              break;
            case 12:
              ae = "\\f";
              break;
            case 11:
              ae = "\\v";
              break;
            case 38:
              I + d + $ === 0 && (X = ge = 1, ae = "\f" + ae);
              break;
            case 108:
              if (I + d + $ + te === 0 && 0 < V)
                switch (M - V) {
                  case 2:
                    Y === 112 && y.charCodeAt(M - 3) === 58 && (te = Y);
                  case 8:
                    p === 111 && (te = p);
                }
              break;
            case 58:
              I + d + $ === 0 && (V = M);
              break;
            case 44:
              d + z + I + $ === 0 && (X = 1, ae += "\r");
              break;
            case 34:
            case 39:
              d === 0 && (I = I === u ? 0 : I === 0 ? u : I);
              break;
            case 91:
              I + d + z === 0 && $++;
              break;
            case 93:
              I + d + z === 0 && $--;
              break;
            case 41:
              I + d + $ === 0 && z--;
              break;
            case 40:
              if (I + d + $ === 0) {
                if (N === 0)
                  switch (2 * Y + 3 * p) {
                    case 533:
                      break;
                    default:
                      N = 1;
                  }
                z++;
              }
              break;
            case 64:
              d + z + I + $ + V + k === 0 && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < I + $ + z))
                switch (d) {
                  case 0:
                    switch (2 * u + 3 * y.charCodeAt(M + 1)) {
                      case 235:
                        d = 47;
                        break;
                      case 220:
                        q = M, d = 42;
                    }
                    break;
                  case 42:
                    u === 47 && Y === 42 && q + 2 !== M && (y.charCodeAt(q + 2) === 33 && (B += y.substring(q, M + 1)), ae = "", d = 0);
                }
          }
          d === 0 && (x += ae);
      }
      p = Y, Y = u, M++;
    }
    if (q = B.length, 0 < q) {
      if (X = m, 0 < H && (fe = f(2, B, X, g, Q, W, q, A, o, A), fe !== void 0 && (B = fe).length === 0))
        return Oe + B + ke;
      if (B = X.join(",") + "{" + B + "}", G * te !== 0) {
        switch (G !== 2 || c(B, 2) || (te = 0), te) {
          case 111:
            B = B.replace(C, ":-moz-$1") + B;
            break;
          case 112:
            B = B.replace(T, "::-webkit-input-$1") + B.replace(T, "::-moz-$1") + B.replace(T, ":-ms-input-$1") + B;
        }
        te = 0;
      }
    }
    return Oe + B + ke;
  }
  function t(g, m, y) {
    var A = m.trim().split(i);
    m = A;
    var o = A.length, $ = g.length;
    switch ($) {
      case 0:
      case 1:
        var d = 0;
        for (g = $ === 0 ? "" : g[0] + " "; d < o; ++d)
          m[d] = n(g, m[d], y).trim();
        break;
      default:
        var z = d = 0;
        for (m = []; d < o; ++d)
          for (var I = 0; I < $; ++I)
            m[z++] = n(g[I] + " ", A[d], y).trim();
    }
    return m;
  }
  function n(g, m, y) {
    var A = m.charCodeAt(0);
    switch (33 > A && (A = (m = m.trim()).charCodeAt(0)), A) {
      case 38:
        return m.replace(O, "$1" + g.trim());
      case 58:
        return g.trim() + m.replace(O, "$1" + g.trim());
      default:
        if (0 < 1 * y && 0 < m.indexOf("\f"))
          return m.replace(O, (g.charCodeAt(0) === 58 ? "" : "$1") + g.trim());
    }
    return g + m;
  }
  function a(g, m, y, A) {
    var o = g + ";", $ = 2 * m + 3 * y + 4 * A;
    if ($ === 944) {
      g = o.indexOf(":", 9) + 1;
      var d = o.substring(g, o.length - 1).trim();
      return d = o.substring(0, g).trim() + d + ";", G === 1 || G === 2 && c(d, 1) ? "-webkit-" + d + d : d;
    }
    if (G === 0 || G === 2 && !c(o, 1))
      return o;
    switch ($) {
      case 1015:
        return o.charCodeAt(10) === 97 ? "-webkit-" + o + o : o;
      case 951:
        return o.charCodeAt(3) === 116 ? "-webkit-" + o + o : o;
      case 963:
        return o.charCodeAt(5) === 110 ? "-webkit-" + o + o : o;
      case 1009:
        if (o.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + o + o;
      case 978:
        return "-webkit-" + o + "-moz-" + o + o;
      case 1019:
      case 983:
        return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
      case 883:
        if (o.charCodeAt(8) === 45)
          return "-webkit-" + o + o;
        if (0 < o.indexOf("image-set(", 11))
          return o.replace(ie, "$1-webkit-$2") + o;
        break;
      case 932:
        if (o.charCodeAt(4) === 45)
          switch (o.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + o.replace("-grow", "") + "-webkit-" + o + "-ms-" + o.replace("grow", "positive") + o;
            case 115:
              return "-webkit-" + o + "-ms-" + o.replace("shrink", "negative") + o;
            case 98:
              return "-webkit-" + o + "-ms-" + o.replace("basis", "preferred-size") + o;
          }
        return "-webkit-" + o + "-ms-" + o + o;
      case 964:
        return "-webkit-" + o + "-ms-flex-" + o + o;
      case 1023:
        if (o.charCodeAt(8) !== 99)
          break;
        return d = o.substring(o.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + d + "-webkit-" + o + "-ms-flex-pack" + d + o;
      case 1005:
        return w.test(o) ? o.replace(_, ":-webkit-") + o.replace(_, ":-moz-") + o : o;
      case 1e3:
        switch (d = o.substring(13).trim(), m = d.indexOf("-") + 1, d.charCodeAt(0) + d.charCodeAt(m)) {
          case 226:
            d = o.replace(s, "tb");
            break;
          case 232:
            d = o.replace(s, "tb-rl");
            break;
          case 220:
            d = o.replace(s, "lr");
            break;
          default:
            return o;
        }
        return "-webkit-" + o + "-ms-" + d + o;
      case 1017:
        if (o.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (m = (o = g).length - 10, d = (o.charCodeAt(m) === 33 ? o.substring(0, m) : o).substring(g.indexOf(":", 7) + 1).trim(), $ = d.charCodeAt(0) + (d.charCodeAt(7) | 0)) {
          case 203:
            if (111 > d.charCodeAt(8))
              break;
          case 115:
            o = o.replace(d, "-webkit-" + d) + ";" + o;
            break;
          case 207:
          case 102:
            o = o.replace(d, "-webkit-" + (102 < $ ? "inline-" : "") + "box") + ";" + o.replace(d, "-webkit-" + d) + ";" + o.replace(d, "-ms-" + d + "box") + ";" + o;
        }
        return o + ";";
      case 938:
        if (o.charCodeAt(5) === 45)
          switch (o.charCodeAt(6)) {
            case 105:
              return d = o.replace("-items", ""), "-webkit-" + o + "-webkit-box-" + d + "-ms-flex-" + d + o;
            case 115:
              return "-webkit-" + o + "-ms-flex-item-" + o.replace(K, "") + o;
            default:
              return "-webkit-" + o + "-ms-flex-line-pack" + o.replace("align-content", "").replace(K, "") + o;
          }
        break;
      case 973:
      case 989:
        if (o.charCodeAt(3) !== 45 || o.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ne.test(g) === !0)
          return (d = g.substring(g.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(g.replace("stretch", "fill-available"), m, y, A).replace(":fill-available", ":stretch") : o.replace(d, "-webkit-" + d) + o.replace(d, "-moz-" + d.replace("fill-", "")) + o;
        break;
      case 962:
        if (o = "-webkit-" + o + (o.charCodeAt(5) === 102 ? "-ms-" + o : "") + o, y + A === 211 && o.charCodeAt(13) === 105 && 0 < o.indexOf("transform", 10))
          return o.substring(0, o.indexOf(";", 27) + 1).replace(E, "$1-webkit-$2") + o;
    }
    return o;
  }
  function c(g, m) {
    var y = g.indexOf(m === 1 ? ":" : "{"), A = g.substring(0, m !== 3 ? y : 10);
    return y = g.substring(y + 1, g.length - 1), se(m !== 2 ? A : A.replace(ee, "$1"), y, m);
  }
  function l(g, m) {
    var y = a(m, m.charCodeAt(0), m.charCodeAt(1), m.charCodeAt(2));
    return y !== m + ";" ? y.replace(re, " or ($1)").substring(4) : "(" + m + ")";
  }
  function f(g, m, y, A, o, $, d, z, I, N) {
    for (var u = 0, Y = m, p; u < H; ++u)
      switch (p = J[u].call(S, g, Y, y, A, o, $, d, z, I, N)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Y = p;
      }
    if (Y !== m)
      return Y;
  }
  function h(g) {
    switch (g) {
      case void 0:
      case null:
        H = J.length = 0;
        break;
      default:
        if (typeof g == "function")
          J[H++] = g;
        else if (typeof g == "object")
          for (var m = 0, y = g.length; m < y; ++m)
            h(g[m]);
        else
          oe = !!g | 0;
    }
    return h;
  }
  function v(g) {
    return g = g.prefix, g !== void 0 && (se = null, g ? typeof g != "function" ? G = 1 : (G = 2, se = g) : G = 0), v;
  }
  function S(g, m) {
    var y = g;
    if (33 > y.charCodeAt(0) && (y = y.trim()), le = y, y = [le], 0 < H) {
      var A = f(-1, m, y, y, Q, W, 0, 0, 0, 0);
      A !== void 0 && typeof A == "string" && (m = A);
    }
    var o = r(ce, y, m, 0, 0);
    return 0 < H && (A = f(-2, o, y, y, Q, W, o.length, 0, 0, 0), A !== void 0 && (o = A)), le = "", te = 0, W = Q = 1, o;
  }
  var b = /^\0+/g, P = /[\0\r\f]/g, _ = /: */g, w = /zoo|gra/, E = /([,: ])(transform)/g, i = /,\r+?/g, O = /([\t\r\n ])*\f?&/g, R = /@(k\w+)\s*(\S*)\s*/, T = /::(place)/g, C = /:(read-only)/g, s = /[svh]\w+-[tblr]{2}/, U = /\(\s*(.*)\s*\)/g, re = /([\s\S]*?);/g, K = /-self|flex-/g, ee = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ne = /stretch|:\s*\w+\-(?:conte|avail)/, ie = /([^-])(image-set\()/, W = 1, Q = 1, te = 0, G = 1, ce = [], J = [], H = 0, se = null, oe = 0, le = "";
  return S.use = h, S.set = v, e !== void 0 && v(e), S;
}
var Nt = {
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
function $t(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var It = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ze = /* @__PURE__ */ $t(
  function(e) {
    return It.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Me = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Mt() {
  if (Ke)
    return F;
  Ke = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, i = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function T(s) {
    if (typeof s == "object" && s !== null) {
      var U = s.$$typeof;
      switch (U) {
        case r:
          switch (s = s.type, s) {
            case h:
            case v:
            case n:
            case c:
            case a:
            case b:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case f:
                case S:
                case w:
                case _:
                case l:
                  return s;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function C(s) {
    return T(s) === v;
  }
  return F.AsyncMode = h, F.ConcurrentMode = v, F.ContextConsumer = f, F.ContextProvider = l, F.Element = r, F.ForwardRef = S, F.Fragment = n, F.Lazy = w, F.Memo = _, F.Portal = t, F.Profiler = c, F.StrictMode = a, F.Suspense = b, F.isAsyncMode = function(s) {
    return C(s) || T(s) === h;
  }, F.isConcurrentMode = C, F.isContextConsumer = function(s) {
    return T(s) === f;
  }, F.isContextProvider = function(s) {
    return T(s) === l;
  }, F.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === r;
  }, F.isForwardRef = function(s) {
    return T(s) === S;
  }, F.isFragment = function(s) {
    return T(s) === n;
  }, F.isLazy = function(s) {
    return T(s) === w;
  }, F.isMemo = function(s) {
    return T(s) === _;
  }, F.isPortal = function(s) {
    return T(s) === t;
  }, F.isProfiler = function(s) {
    return T(s) === c;
  }, F.isStrictMode = function(s) {
    return T(s) === a;
  }, F.isSuspense = function(s) {
    return T(s) === b;
  }, F.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === v || s === c || s === a || s === b || s === P || typeof s == "object" && s !== null && (s.$$typeof === w || s.$$typeof === _ || s.$$typeof === l || s.$$typeof === f || s.$$typeof === S || s.$$typeof === i || s.$$typeof === O || s.$$typeof === R || s.$$typeof === E);
  }, F.typeOf = T, F;
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
var Qe;
function Dt() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, c = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, P = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, i = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function T(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === v || u === c || u === a || u === b || u === P || typeof u == "object" && u !== null && (u.$$typeof === w || u.$$typeof === _ || u.$$typeof === l || u.$$typeof === f || u.$$typeof === S || u.$$typeof === i || u.$$typeof === O || u.$$typeof === R || u.$$typeof === E);
    }
    function C(u) {
      if (typeof u == "object" && u !== null) {
        var Y = u.$$typeof;
        switch (Y) {
          case r:
            var p = u.type;
            switch (p) {
              case h:
              case v:
              case n:
              case c:
              case a:
              case b:
                return p;
              default:
                var k = p && p.$$typeof;
                switch (k) {
                  case f:
                  case S:
                  case w:
                  case _:
                  case l:
                    return k;
                  default:
                    return Y;
                }
            }
          case t:
            return Y;
        }
      }
    }
    var s = h, U = v, re = f, K = l, ee = r, ne = S, ie = n, W = w, Q = _, te = t, G = c, ce = a, J = b, H = !1;
    function se(u) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), oe(u) || C(u) === h;
    }
    function oe(u) {
      return C(u) === v;
    }
    function le(u) {
      return C(u) === f;
    }
    function g(u) {
      return C(u) === l;
    }
    function m(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function y(u) {
      return C(u) === S;
    }
    function A(u) {
      return C(u) === n;
    }
    function o(u) {
      return C(u) === w;
    }
    function $(u) {
      return C(u) === _;
    }
    function d(u) {
      return C(u) === t;
    }
    function z(u) {
      return C(u) === c;
    }
    function I(u) {
      return C(u) === a;
    }
    function N(u) {
      return C(u) === b;
    }
    j.AsyncMode = s, j.ConcurrentMode = U, j.ContextConsumer = re, j.ContextProvider = K, j.Element = ee, j.ForwardRef = ne, j.Fragment = ie, j.Lazy = W, j.Memo = Q, j.Portal = te, j.Profiler = G, j.StrictMode = ce, j.Suspense = J, j.isAsyncMode = se, j.isConcurrentMode = oe, j.isContextConsumer = le, j.isContextProvider = g, j.isElement = m, j.isForwardRef = y, j.isFragment = A, j.isLazy = o, j.isMemo = $, j.isPortal = d, j.isProfiler = z, j.isStrictMode = I, j.isSuspense = N, j.isValidElementType = T, j.typeOf = C;
  }()), j;
}
process.env.NODE_ENV === "production" ? Me.exports = Mt() : Me.exports = Dt();
var Lt = Me.exports, Be = Lt, Ft = {
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
}, jt = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, zt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ue = {};
Ue[Be.ForwardRef] = zt;
Ue[Be.Memo] = dt;
function Je(e) {
  return Be.isMemo(e) ? dt : Ue[e.$$typeof] || Ft;
}
var Yt = Object.defineProperty, Vt = Object.getOwnPropertyNames, et = Object.getOwnPropertySymbols, Bt = Object.getOwnPropertyDescriptor, Ut = Object.getPrototypeOf, tt = Object.prototype;
function ft(e, r, t) {
  if (typeof r != "string") {
    if (tt) {
      var n = Ut(r);
      n && n !== tt && ft(e, n, t);
    }
    var a = Vt(r);
    et && (a = a.concat(et(r)));
    for (var c = Je(e), l = Je(r), f = 0; f < a.length; ++f) {
      var h = a[f];
      if (!jt[h] && !(t && t[h]) && !(l && l[h]) && !(c && c[h])) {
        var v = Bt(r, h);
        try {
          Yt(e, h, v);
        } catch {
        }
      }
    }
  }
  return e;
}
var Gt = ft;
const Ht = /* @__PURE__ */ Tt(Gt);
function ue() {
  return (ue = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var rt = function(e, r) {
  for (var t = [e[0]], n = 0, a = r.length; n < a; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, De = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ve.typeOf(e);
}, Re = Object.freeze([]), pe = Object.freeze({});
function we(e) {
  return typeof e == "function";
}
function Le(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ge(e) {
  return e && typeof e.styledComponentId == "string";
}
var me = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", He = typeof window < "u" && "HTMLElement" in window, Wt = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Xt = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function qt() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function ye(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(qt.apply(void 0, [Xt[e]].concat(t)).trim());
}
var Zt = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, a = 0; a < t; a++)
      n += this.groupSizes[a];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, c = a.length, l = c; t >= l; )
        (l <<= 1) < 0 && ye(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var f = c; f < l; f++)
        this.groupSizes[f] = 0;
    }
    for (var h = this.indexOfGroup(t + 1), v = 0, S = n.length; v < S; v++)
      this.tag.insertRule(h, n[v]) && (this.groupSizes[t]++, h++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], a = this.indexOfGroup(t), c = a + n;
      this.groupSizes[t] = 0;
      for (var l = a; l < c; l++)
        this.tag.deleteRule(a);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var a = this.groupSizes[t], c = this.indexOfGroup(t), l = c + a, f = c; f < l; f++)
      n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), xe = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Se = 1, Ce = function(e) {
  if (xe.has(e))
    return xe.get(e);
  for (; Te.has(Se); )
    Se++;
  var r = Se++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && ye(16, "" + r), xe.set(e, r), Te.set(r, e), r;
}, Kt = function(e) {
  return Te.get(e);
}, Qt = function(e, r) {
  r >= Se && (Se = r + 1), xe.set(e, r), Te.set(r, e);
}, Jt = "style[" + me + '][data-styled-version="5.3.6"]', er = new RegExp("^" + me + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), tr = function(e, r, t) {
  for (var n, a = t.split(","), c = 0, l = a.length; c < l; c++)
    (n = a[c]) && e.registerName(r, n);
}, rr = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], a = 0, c = t.length; a < c; a++) {
    var l = t[a].trim();
    if (l) {
      var f = l.match(er);
      if (f) {
        var h = 0 | parseInt(f[1], 10), v = f[2];
        h !== 0 && (Qt(v, h), tr(e, v, f[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else
        n.push(l);
    }
  }
}, nr = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, pt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), a = function(f) {
    for (var h = f.childNodes, v = h.length; v >= 0; v--) {
      var S = h[v];
      if (S && S.nodeType === 1 && S.hasAttribute(me))
        return S;
    }
  }(t), c = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(me, "active"), n.setAttribute("data-styled-version", "5.3.6");
  var l = nr();
  return l && n.setAttribute("nonce", l), t.insertBefore(n, c), n;
}, or = function() {
  function e(t) {
    var n = this.element = pt(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var c = document.styleSheets, l = 0, f = c.length; l < f; l++) {
        var h = c[l];
        if (h.ownerNode === a)
          return h;
      }
      ye(17);
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
}(), ar = function() {
  function e(t) {
    var n = this.element = pt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(n), c = this.nodes[t];
      return this.element.insertBefore(a, c || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), ir = function() {
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
}(), nt = He, sr = { isServer: !He, useCSSOMInjection: !Wt }, ht = function() {
  function e(t, n, a) {
    t === void 0 && (t = pe), n === void 0 && (n = {}), this.options = ue({}, sr, {}, t), this.gs = n, this.names = new Map(a), this.server = !!t.isServer, !this.server && He && nt && (nt = !1, function(c) {
      for (var l = document.querySelectorAll(Jt), f = 0, h = l.length; f < h; f++) {
        var v = l[f];
        v && v.getAttribute(me) !== "active" && (rr(c, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ce(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(ue({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, c = n.useCSSOMInjection, l = n.target, t = a ? new ir(l) : c ? new or(l) : new ar(l), new Zt(t)));
    var t, n, a, c, l;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (Ce(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(t, a);
    }
  }, r.insertRules = function(t, n, a) {
    this.registerName(t, n), this.getTag().insertRules(Ce(t), a);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(Ce(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), a = n.length, c = "", l = 0; l < a; l++) {
        var f = Kt(l);
        if (f !== void 0) {
          var h = t.names.get(f), v = n.getGroup(l);
          if (h && v && h.size) {
            var S = me + ".g" + l + '[id="' + f + '"]', b = "";
            h !== void 0 && h.forEach(function(P) {
              P.length > 0 && (b += P + ",");
            }), c += "" + v + S + '{content:"' + b + `"}/*!sc*/
`;
          }
        }
      }
      return c;
    }(this);
  }, e;
}(), cr = /(a)(d)/gi, ot = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Fe(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = ot(r % 52) + t;
  return (ot(r % 52) + t).replace(cr, "$1-$2");
}
var he = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, mt = function(e) {
  return he(5381, e);
};
function lr(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (we(t) && !Ge(t))
      return !1;
  }
  return !0;
}
var ur = mt("5.3.6"), dr = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && lr(r), this.componentId = t, this.baseHash = he(ur, t), this.baseStyle = n, ht.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var a = this.componentId, c = [];
    if (this.baseStyle && c.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(a, this.staticRulesId))
        c.push(this.staticRulesId);
      else {
        var l = ve(this.rules, r, t, n).join(""), f = Fe(he(this.baseHash, l) >>> 0);
        if (!t.hasNameForId(a, f)) {
          var h = n(l, "." + f, void 0, a);
          t.insertRules(a, f, h);
        }
        c.push(f), this.staticRulesId = f;
      }
    else {
      for (var v = this.rules.length, S = he(this.baseHash, n.hash), b = "", P = 0; P < v; P++) {
        var _ = this.rules[P];
        if (typeof _ == "string")
          b += _, process.env.NODE_ENV !== "production" && (S = he(S, _ + P));
        else if (_) {
          var w = ve(_, r, t, n), E = Array.isArray(w) ? w.join("") : w;
          S = he(S, E + P), b += E;
        }
      }
      if (b) {
        var i = Fe(S >>> 0);
        if (!t.hasNameForId(a, i)) {
          var O = n(b, "." + i, void 0, a);
          t.insertRules(a, i, O);
        }
        c.push(i);
      }
    }
    return c.join(" ");
  }, e;
}(), fr = /^\s*\/\/.*$/gm, pr = [":", "[", ".", "#"];
function hr(e) {
  var r, t, n, a, c = e === void 0 ? pe : e, l = c.options, f = l === void 0 ? pe : l, h = c.plugins, v = h === void 0 ? Re : h, S = new Ot(f), b = [], P = /* @__PURE__ */ function(E) {
    function i(O) {
      if (O)
        try {
          E(O + "}");
        } catch {
        }
    }
    return function(O, R, T, C, s, U, re, K, ee, ne) {
      switch (O) {
        case 1:
          if (ee === 0 && R.charCodeAt(0) === 64)
            return E(R + ";"), "";
          break;
        case 2:
          if (K === 0)
            return R + "/*|*/";
          break;
        case 3:
          switch (K) {
            case 102:
            case 112:
              return E(T[0] + R), "";
            default:
              return R + (ne === 0 ? "/*|*/" : "");
          }
        case -2:
          R.split("/*|*/}").forEach(i);
      }
    };
  }(function(E) {
    b.push(E);
  }), _ = function(E, i, O) {
    return i === 0 && pr.indexOf(O[t.length]) !== -1 || O.match(a) ? E : "." + r;
  };
  function w(E, i, O, R) {
    R === void 0 && (R = "&");
    var T = E.replace(fr, ""), C = i && O ? O + " " + i + " { " + T + " }" : T;
    return r = R, t = i, n = new RegExp("\\" + t + "\\b", "g"), a = new RegExp("(\\" + t + "\\b){2,}"), S(O || !i ? "" : i, C);
  }
  return S.use([].concat(v, [function(E, i, O) {
    E === 2 && O.length && O[0].lastIndexOf(t) > 0 && (O[0] = O[0].replace(n, _));
  }, P, function(E) {
    if (E === -2) {
      var i = b;
      return b = [], i;
    }
  }])), w.hash = v.length ? v.reduce(function(E, i) {
    return i.name || ye(15), he(E, i.name);
  }, 5381).toString() : "", w;
}
var vt = Pe.createContext();
vt.Consumer;
var yt = Pe.createContext(), mr = (yt.Consumer, new ht()), je = hr();
function vr() {
  return Ye(vt) || mr;
}
function yr() {
  return Ye(yt) || je;
}
var gt = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(a, c) {
      c === void 0 && (c = je);
      var l = n.name + c.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, c(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return ye(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = je), this.name + r.hash;
  }, e;
}(), gr = /([A-Z])/, br = /([A-Z])/g, Sr = /^ms-/, wr = function(e) {
  return "-" + e.toLowerCase();
};
function at(e) {
  return gr.test(e) ? e.replace(br, wr).replace(Sr, "-ms-") : e;
}
var it = function(e) {
  return e == null || e === !1 || e === "";
};
function ve(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var a, c = [], l = 0, f = e.length; l < f; l += 1)
      (a = ve(e[l], r, t, n)) !== "" && (Array.isArray(a) ? c.push.apply(c, a) : c.push(a));
    return c;
  }
  if (it(e))
    return "";
  if (Ge(e))
    return "." + e.styledComponentId;
  if (we(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r)
      return e;
    var h = e(r);
    return process.env.NODE_ENV !== "production" && Ve.isElement(h) && console.warn(Le(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ve(h, r, t, n);
  }
  var v;
  return e instanceof gt ? t ? (e.inject(t, n), e.getName(n)) : e : De(e) ? function S(b, P) {
    var _, w, E = [];
    for (var i in b)
      b.hasOwnProperty(i) && !it(b[i]) && (Array.isArray(b[i]) && b[i].isCss || we(b[i]) ? E.push(at(i) + ":", b[i], ";") : De(b[i]) ? E.push.apply(E, S(b[i], i)) : E.push(at(i) + ": " + (_ = i, (w = b[i]) == null || typeof w == "boolean" || w === "" ? "" : typeof w != "number" || w === 0 || _ in Nt ? String(w).trim() : w + "px") + ";"));
    return P ? [P + " {"].concat(E, ["}"]) : E;
  }(e) : e.toString();
}
var st = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function bt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return we(e) || De(e) ? st(ve(rt(Re, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : st(ve(rt(e, t)));
}
var ct = /invalid hook call/i, Ae = /* @__PURE__ */ new Set(), Er = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var a = !0;
      console.error = function(c) {
        if (ct.test(c))
          a = !1, Ae.delete(t);
        else {
          for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
            f[h - 1] = arguments[h];
          n.apply(void 0, [c].concat(f));
        }
      }, ut(), a && !Ae.has(t) && (console.warn(t), Ae.add(t));
    } catch (c) {
      ct.test(c.message) && Ae.delete(t);
    } finally {
      console.error = n;
    }
  }
}, Cr = function(e, r, t) {
  return t === void 0 && (t = pe), e.theme !== t.theme && e.theme || r || t.theme;
}, Ar = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, _r = /(^-|-$)/g;
function Ne(e) {
  return e.replace(Ar, "-").replace(_r, "");
}
var St = function(e) {
  return Fe(mt(e) >>> 0);
};
function _e(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ze = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, xr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Rr(e, r, t) {
  var n = e[t];
  ze(r) && ze(n) ? wt(n, r) : e[t] = r;
}
function wt(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var a = 0, c = t; a < c.length; a++) {
    var l = c[a];
    if (ze(l))
      for (var f in l)
        xr(f) && Rr(e, l[f], f);
  }
  return e;
}
var Et = Pe.createContext();
Et.Consumer;
var $e = {};
function Ct(e, r, t) {
  var n = Ge(e), a = !_e(e), c = r.attrs, l = c === void 0 ? Re : c, f = r.componentId, h = f === void 0 ? function(R, T) {
    var C = typeof R != "string" ? "sc" : Ne(R);
    $e[C] = ($e[C] || 0) + 1;
    var s = C + "-" + St("5.3.6" + C + $e[C]);
    return T ? T + "-" + s : s;
  }(r.displayName, r.parentComponentId) : f, v = r.displayName, S = v === void 0 ? function(R) {
    return _e(R) ? "styled." + R : "Styled(" + Le(R) + ")";
  }(e) : v, b = r.displayName && r.componentId ? Ne(r.displayName) + "-" + r.componentId : r.componentId || h, P = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, _ = r.shouldForwardProp;
  n && e.shouldForwardProp && (_ = r.shouldForwardProp ? function(R, T, C) {
    return e.shouldForwardProp(R, T, C) && r.shouldForwardProp(R, T, C);
  } : e.shouldForwardProp);
  var w, E = new dr(t, b, n ? e.componentStyle : void 0), i = E.isStatic && l.length === 0, O = function(R, T) {
    return function(C, s, U, re) {
      var K = C.attrs, ee = C.componentStyle, ne = C.defaultProps, ie = C.foldedComponentIds, W = C.shouldForwardProp, Q = C.styledComponentId, te = C.target;
      process.env.NODE_ENV !== "production" && We(Q);
      var G = function(A, o, $) {
        A === void 0 && (A = pe);
        var d = ue({}, o, { theme: A }), z = {};
        return $.forEach(function(I) {
          var N, u, Y, p = I;
          for (N in we(p) && (p = p(d)), p)
            d[N] = z[N] = N === "className" ? (u = z[N], Y = p[N], u && Y ? u + " " + Y : u || Y) : p[N];
        }), [d, z];
      }(Cr(s, Ye(Et), ne) || pe, s, K), ce = G[0], J = G[1], H = function(A, o, $, d) {
        var z = vr(), I = yr(), N = o ? A.generateAndInjectStyles(pe, z, I) : A.generateAndInjectStyles($, z, I);
        return process.env.NODE_ENV !== "production" && We(N), process.env.NODE_ENV !== "production" && !o && d && d(N), N;
      }(ee, re, ce, process.env.NODE_ENV !== "production" ? C.warnTooManyClasses : void 0), se = U, oe = J.$as || s.$as || J.as || s.as || te, le = _e(oe), g = J !== s ? ue({}, s, {}, J) : s, m = {};
      for (var y in g)
        y[0] !== "$" && y !== "as" && (y === "forwardedAs" ? m.as = g[y] : (W ? W(y, Ze, oe) : !le || Ze(y)) && (m[y] = g[y]));
      return s.style && J.style !== s.style && (m.style = ue({}, s.style, {}, J.style)), m.className = Array.prototype.concat(ie, Q, H !== Q ? H : null, s.className, J.className).filter(Boolean).join(" "), m.ref = se, xt(oe, m);
    }(w, R, T, i);
  };
  return O.displayName = S, (w = Pe.forwardRef(O)).attrs = P, w.componentStyle = E, w.displayName = S, w.shouldForwardProp = _, w.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Re, w.styledComponentId = b, w.target = n ? e.target : e, w.withComponent = function(R) {
    var T = r.componentId, C = function(U, re) {
      if (U == null)
        return {};
      var K, ee, ne = {}, ie = Object.keys(U);
      for (ee = 0; ee < ie.length; ee++)
        K = ie[ee], re.indexOf(K) >= 0 || (ne[K] = U[K]);
      return ne;
    }(r, ["componentId"]), s = T && T + "-" + (_e(R) ? R : Ne(Le(R)));
    return Ct(R, ue({}, C, { attrs: P, componentId: s }), t);
  }, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = n ? wt({}, e.defaultProps, R) : R;
  } }), process.env.NODE_ENV !== "production" && (Er(S, b), w.warnTooManyClasses = /* @__PURE__ */ function(R, T) {
    var C = {}, s = !1;
    return function(U) {
      if (!s && (C[U] = !0, Object.keys(C).length >= 200)) {
        var re = T ? ' with the id of "' + T + '"' : "";
        console.warn("Over 200 classes were generated for component " + R + re + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), s = !0, C = {};
      }
    };
  }(S, b)), w.toString = function() {
    return "." + w.styledComponentId;
  }, a && Ht(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), w;
}
var de = function(e) {
  return function r(t, n, a) {
    if (a === void 0 && (a = pe), !Ve.isValidElementType(n))
      return ye(1, String(n));
    var c = function() {
      return t(n, a, bt.apply(void 0, arguments));
    };
    return c.withConfig = function(l) {
      return r(t, n, ue({}, a, {}, l));
    }, c.attrs = function(l) {
      return r(t, n, ue({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, c;
  }(Ct, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  de[e] = de(e);
});
function At(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var a = bt.apply(void 0, [e].concat(t)).join(""), c = St(a);
  return new gt(c, a);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const Tr = de(({
  className: e,
  text: r,
  x: t,
  y: n,
  r: a,
  onClick: c,
  index: l
}) => /* @__PURE__ */ lt("g", { onClick: c, className: e, children: [
  /* @__PURE__ */ Z(
    "circle",
    {
      r: a + 5,
      cy: n + a,
      cx: t + a
    },
    l
  ),
  /* @__PURE__ */ Z(
    "circle",
    {
      className: e,
      r: a,
      cy: n + a,
      cx: t + a
    },
    l
  ),
  /* @__PURE__ */ Z(
    "text",
    {
      x: t + a,
      y: n + a,
      dominantBaseline: "middle",
      textAnchor: "middle",
      children: r
    }
  )
] }))`
  & > circle {
    fill: var(--orange);
    stroke-width: 2px;

    &:last-of-type {
      stroke: white;
    }

    &:first-of-type {
      stroke: transparent;
      filter: blur(2px);
    }
  }

  & > text {
    fill: white;
  }


`, Pr = At`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`, kr = At`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`;
de.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`;
const Or = de(
  ({ className: e, children: r, addToPracticePlan: t }) => /* @__PURE__ */ Z("li", { className: e, children: /* @__PURE__ */ Z("button", { onClick: t, children: r }) })
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
`;
de(Rt(({ children: e, className: r }, t) => {
  const n = t || ut(), a = (c) => (l) => {
    var _;
    const { top: f, bottom: h, left: v, right: S } = c.current.getBoundingClientRect(), b = l.clientX, P = l.clientY;
    (b < v || b > S || P < f || P > h) && ((_ = c.current) == null || _.close());
  };
  return /* @__PURE__ */ Z(
    "dialog",
    {
      ref: n,
      onClick: (c) => a(n)(c),
      className: r,
      children: e
    }
  );
}))`
  --animation-timing: 0.4s;
  --panel-width: 300px;

  will-change: transform;
  transform-origin: right center;

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
    animation: ${kr} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${Pr} var(--animation-timing) ease-out forwards;
    }
  }
`;
de(({ text: e, onClick: r, className: t, Icon: n }) => /* @__PURE__ */ lt(
  "button",
  {
    className: t,
    onClick: r,
    children: [
      /* @__PURE__ */ Z("span", { children: e }),
      !!n && /* @__PURE__ */ Z("div", { children: /* @__PURE__ */ Z(n, {}) })
    ]
  }
))`
  padding-inline-start: 32px;
  background-color: var(--caution);
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  align-items: center;
  padding-inline-end: 0px;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  color: white;

  &:hover,
  &:hover > div {
    background-color: hsl(from var(--caution) h s calc(l * 0.8));
  }

  &:active,
  &:active > div {
    background-color: hsl(from var(--caution) h s calc(l * 0.7));
  }

  & > div {
    border-radius: 50%;
    width: 30px;
    aspect-ratio: 1/1;
    border-top: 2px solid white;
    border-left: 2px solid white;
    display: grid;
    place-items: center;
    transform: translate(5%, -53%);
    background-color: var(--caution);
  }
`;
de(
  ({ tabs: e, currentTab: r, setCurrentTab: t, className: n }) => /* @__PURE__ */ Z("div", { className: n, children: e.map((a) => /* @__PURE__ */ Z(
    "div",
    {
      onClick: () => t(a),
      "aria-selected": r === a,
      children: a
    },
    a
  )) })
)`
  grid-area: nav;
  display: flex;
  gap: 1px;
  background-color: var(--primary);
  border-bottom: 1px groove var(--secondary);
  color: white;

  & > div[aria-selected='true'] {
    border-bottom: none;
    cursor: not-allowed;
  }

  & > div {
    cursor: pointer;
    border-radius: 3px;
    padding: 16px 32px;
    text-transform: capitalize;
  }
`;
const Mr = de(({
  className: e,
  content: r,
  showPanel: t,
  addToPracticePlan: n,
  area: a
}) => {
  const f = window.innerWidth - 300, h = 50, v = 2 * h, S = 50, b = f - 100, P = (_) => {
    const w = 0.5 * b - 0.5 * v + 50, E = 50, i = b + 50 - (v + 50);
    return _ % 3 === 1 || _ === 0 ? w : _ % 6 === 2 || _ % 6 === 3 ? E : i;
  };
  return /* @__PURE__ */ Z(
    "svg",
    {
      height: 110 * (r.length + 2),
      width: f,
      className: e,
      children: r.map((_, w) => /* @__PURE__ */ Z(
        Tr,
        {
          index: w,
          r: h,
          y: S + w * 110,
          x: P(w),
          onClick: () => t(() => /* @__PURE__ */ Z(_t, { children: _ == null ? void 0 : _.moves.map(({ name: E }) => /* @__PURE__ */ Z(
            Or,
            {
              addToPracticePlan: () => n({
                position: _.name,
                move: E,
                area: a
              }),
              children: E
            }
          )) })),
          text: _.name
        },
        w
      ))
    }
  );
})`
  background-color: var(--primary);
`;
export {
  Mr as ContentMap,
  Ir as TrashIcon
};
