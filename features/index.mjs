import { jsxs as zt, jsx as O, Fragment as Au } from "react/jsx-runtime";
import * as M from "react";
import Ai, { useRef as Su, useDebugValue as ja, useContext as To, createElement as nf, useState as un, useLayoutEffect as rf, Fragment as sf, useEffect as Ru } from "react";
import "react-dom";
function of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ns = { exports: {} }, J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function af() {
  if (qa)
    return J;
  qa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var D = f.$$typeof;
      switch (D) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case u:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case o:
                case c:
                case d:
                case h:
                case s:
                  return f;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return J.ContextConsumer = o, J.ContextProvider = s, J.Element = e, J.ForwardRef = c, J.Fragment = n, J.Lazy = d, J.Memo = h, J.Portal = t, J.Profiler = i, J.StrictMode = r, J.Suspense = u, J.SuspenseList = l, J.isAsyncMode = function() {
    return !1;
  }, J.isConcurrentMode = function() {
    return !1;
  }, J.isContextConsumer = function(f) {
    return E(f) === o;
  }, J.isContextProvider = function(f) {
    return E(f) === s;
  }, J.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, J.isForwardRef = function(f) {
    return E(f) === c;
  }, J.isFragment = function(f) {
    return E(f) === n;
  }, J.isLazy = function(f) {
    return E(f) === d;
  }, J.isMemo = function(f) {
    return E(f) === h;
  }, J.isPortal = function(f) {
    return E(f) === t;
  }, J.isProfiler = function(f) {
    return E(f) === i;
  }, J.isStrictMode = function(f) {
    return E(f) === r;
  }, J.isSuspense = function(f) {
    return E(f) === u;
  }, J.isSuspenseList = function(f) {
    return E(f) === l;
  }, J.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === u || f === l || f === p || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === s || f.$$typeof === o || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
  }, J.typeOf = E, J;
}
var Z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function cf() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = !1, E = !1, f = !1, D = !1, T = !1, I;
    I = Symbol.for("react.module.reference");
    function S(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === i || T || b === r || b === u || b === l || D || b === p || y || E || f || typeof b == "object" && b !== null && (b.$$typeof === d || b.$$typeof === h || b.$$typeof === s || b.$$typeof === o || b.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === I || b.getModuleId !== void 0));
    }
    function g(b) {
      if (typeof b == "object" && b !== null) {
        var q = b.$$typeof;
        switch (q) {
          case e:
            var ft = b.type;
            switch (ft) {
              case n:
              case i:
              case r:
              case u:
              case l:
                return ft;
              default:
                var Q = ft && ft.$$typeof;
                switch (Q) {
                  case a:
                  case o:
                  case c:
                  case d:
                  case h:
                  case s:
                    return Q;
                  default:
                    return q;
                }
            }
          case t:
            return q;
        }
      }
    }
    var nt = o, gt = s, dt = e, Tt = c, Et = n, Zt = d, bt = h, Mt = t, Wt = i, It = r, ge = u, qt = l, At = !1, oe = !1;
    function ee(b) {
      return At || (At = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ye(b) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(b) {
      return g(b) === o;
    }
    function P(b) {
      return g(b) === s;
    }
    function x(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function F(b) {
      return g(b) === c;
    }
    function m(b) {
      return g(b) === n;
    }
    function W(b) {
      return g(b) === d;
    }
    function A(b) {
      return g(b) === h;
    }
    function it(b) {
      return g(b) === t;
    }
    function H(b) {
      return g(b) === i;
    }
    function G(b) {
      return g(b) === r;
    }
    function w(b) {
      return g(b) === u;
    }
    function ut(b) {
      return g(b) === l;
    }
    Z.ContextConsumer = nt, Z.ContextProvider = gt, Z.Element = dt, Z.ForwardRef = Tt, Z.Fragment = Et, Z.Lazy = Zt, Z.Memo = bt, Z.Portal = Mt, Z.Profiler = Wt, Z.StrictMode = It, Z.Suspense = ge, Z.SuspenseList = qt, Z.isAsyncMode = ee, Z.isConcurrentMode = ye, Z.isContextConsumer = N, Z.isContextProvider = P, Z.isElement = x, Z.isForwardRef = F, Z.isFragment = m, Z.isLazy = W, Z.isMemo = A, Z.isPortal = it, Z.isProfiler = H, Z.isStrictMode = G, Z.isSuspense = w, Z.isSuspenseList = ut, Z.isValidElementType = S, Z.typeOf = g;
  }()), Z;
}
process.env.NODE_ENV === "production" ? Ns.exports = af() : Ns.exports = cf();
var Io = Ns.exports;
function uf(e) {
  function t(N, P, x, F, m) {
    for (var W = 0, A = 0, it = 0, H = 0, G, w, ut = 0, b = 0, q, ft = q = G = 0, Q = 0, Pt = 0, kn = 0, Vt = 0, kr = x.length, On = kr - 1, ne, U = "", pt = "", as = "", cs = "", Se; Q < kr; ) {
      if (w = x.charCodeAt(Q), Q === On && A + H + it + W !== 0 && (A !== 0 && (w = A === 47 ? 10 : 47), H = it = W = 0, kr++, On++), A + H + it + W === 0) {
        if (Q === On && (0 < Pt && (U = U.replace(d, "")), 0 < U.trim().length)) {
          switch (w) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += x.charAt(Q);
          }
          w = 59;
        }
        switch (w) {
          case 123:
            for (U = U.trim(), G = U.charCodeAt(0), q = 1, Vt = ++Q; Q < kr; ) {
              switch (w = x.charCodeAt(Q)) {
                case 123:
                  q++;
                  break;
                case 125:
                  q--;
                  break;
                case 47:
                  switch (w = x.charCodeAt(Q + 1)) {
                    case 42:
                    case 47:
                      t: {
                        for (ft = Q + 1; ft < On; ++ft)
                          switch (x.charCodeAt(ft)) {
                            case 47:
                              if (w === 42 && x.charCodeAt(ft - 1) === 42 && Q + 2 !== ft) {
                                Q = ft + 1;
                                break t;
                              }
                              break;
                            case 10:
                              if (w === 47) {
                                Q = ft + 1;
                                break t;
                              }
                          }
                        Q = ft;
                      }
                  }
                  break;
                case 91:
                  w++;
                case 40:
                  w++;
                case 34:
                case 39:
                  for (; Q++ < On && x.charCodeAt(Q) !== w; )
                    ;
              }
              if (q === 0)
                break;
              Q++;
            }
            switch (q = x.substring(Vt, Q), G === 0 && (G = (U = U.replace(h, "").trim()).charCodeAt(0)), G) {
              case 64:
                switch (0 < Pt && (U = U.replace(d, "")), w = U.charCodeAt(1), w) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Pt = P;
                    break;
                  default:
                    Pt = ge;
                }
                if (q = t(P, Pt, q, w, m + 1), Vt = q.length, 0 < At && (Pt = n(ge, U, kn), Se = a(3, q, Pt, P, Mt, bt, Vt, w, m, F), U = Pt.join(""), Se !== void 0 && (Vt = (q = Se.trim()).length) === 0 && (w = 0, q = "")), 0 < Vt)
                  switch (w) {
                    case 115:
                      U = U.replace(nt, o);
                    case 100:
                    case 109:
                    case 45:
                      q = U + "{" + q + "}";
                      break;
                    case 107:
                      U = U.replace(T, "$1 $2"), q = U + "{" + q + "}", q = It === 1 || It === 2 && s("@" + q, 3) ? "@-webkit-" + q + "@" + q : "@" + q;
                      break;
                    default:
                      q = U + q, F === 112 && (q = (pt += q, ""));
                  }
                else
                  q = "";
                break;
              default:
                q = t(P, n(P, U, kn), q, F, m + 1);
            }
            as += q, q = kn = Pt = ft = G = 0, U = "", w = x.charCodeAt(++Q);
            break;
          case 125:
          case 59:
            if (U = (0 < Pt ? U.replace(d, "") : U).trim(), 1 < (Vt = U.length))
              switch (ft === 0 && (G = U.charCodeAt(0), G === 45 || 96 < G && 123 > G) && (Vt = (U = U.replace(" ", ":")).length), 0 < At && (Se = a(1, U, P, N, Mt, bt, pt.length, F, m, F)) !== void 0 && (Vt = (U = Se.trim()).length) === 0 && (U = "\0\0"), G = U.charCodeAt(0), w = U.charCodeAt(1), G) {
                case 0:
                  break;
                case 64:
                  if (w === 105 || w === 99) {
                    cs += U + x.charAt(Q);
                    break;
                  }
                default:
                  U.charCodeAt(Vt - 1) !== 58 && (pt += i(U, G, w, U.charCodeAt(2)));
              }
            kn = Pt = ft = G = 0, U = "", w = x.charCodeAt(++Q);
        }
      }
      switch (w) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + G === 0 && F !== 107 && 0 < U.length && (Pt = 1, U += "\0"), 0 < At * ee && a(0, U, P, N, Mt, bt, pt.length, F, m, F), bt = 1, Mt++;
          break;
        case 59:
        case 125:
          if (A + H + it + W === 0) {
            bt++;
            break;
          }
        default:
          switch (bt++, ne = x.charAt(Q), w) {
            case 9:
            case 32:
              if (H + W + A === 0)
                switch (ut) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ne = "";
                    break;
                  default:
                    w !== 32 && (ne = " ");
                }
              break;
            case 0:
              ne = "\\0";
              break;
            case 12:
              ne = "\\f";
              break;
            case 11:
              ne = "\\v";
              break;
            case 38:
              H + A + W === 0 && (Pt = kn = 1, ne = "\f" + ne);
              break;
            case 108:
              if (H + A + W + Wt === 0 && 0 < ft)
                switch (Q - ft) {
                  case 2:
                    ut === 112 && x.charCodeAt(Q - 3) === 58 && (Wt = ut);
                  case 8:
                    b === 111 && (Wt = b);
                }
              break;
            case 58:
              H + A + W === 0 && (ft = Q);
              break;
            case 44:
              A + it + H + W === 0 && (Pt = 1, ne += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (H = H === w ? 0 : H === 0 ? w : H);
              break;
            case 91:
              H + A + it === 0 && W++;
              break;
            case 93:
              H + A + it === 0 && W--;
              break;
            case 41:
              H + A + W === 0 && it--;
              break;
            case 40:
              if (H + A + W === 0) {
                if (G === 0)
                  switch (2 * ut + 3 * b) {
                    case 533:
                      break;
                    default:
                      G = 1;
                  }
                it++;
              }
              break;
            case 64:
              A + it + H + W + ft + q === 0 && (q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + W + it))
                switch (A) {
                  case 0:
                    switch (2 * w + 3 * x.charCodeAt(Q + 1)) {
                      case 235:
                        A = 47;
                        break;
                      case 220:
                        Vt = Q, A = 42;
                    }
                    break;
                  case 42:
                    w === 47 && ut === 42 && Vt + 2 !== Q && (x.charCodeAt(Vt + 2) === 33 && (pt += x.substring(Vt, Q + 1)), ne = "", A = 0);
                }
          }
          A === 0 && (U += ne);
      }
      b = ut, ut = w, Q++;
    }
    if (Vt = pt.length, 0 < Vt) {
      if (Pt = P, 0 < At && (Se = a(2, pt, Pt, N, Mt, bt, Vt, F, m, F), Se !== void 0 && (pt = Se).length === 0))
        return cs + pt + as;
      if (pt = Pt.join(",") + "{" + pt + "}", It * Wt !== 0) {
        switch (It !== 2 || s(pt, 2) || (Wt = 0), Wt) {
          case 111:
            pt = pt.replace(S, ":-moz-$1") + pt;
            break;
          case 112:
            pt = pt.replace(I, "::-webkit-input-$1") + pt.replace(I, "::-moz-$1") + pt.replace(I, ":-ms-input-$1") + pt;
        }
        Wt = 0;
      }
    }
    return cs + pt + as;
  }
  function n(N, P, x) {
    var F = P.trim().split(f);
    P = F;
    var m = F.length, W = N.length;
    switch (W) {
      case 0:
      case 1:
        var A = 0;
        for (N = W === 0 ? "" : N[0] + " "; A < m; ++A)
          P[A] = r(N, P[A], x).trim();
        break;
      default:
        var it = A = 0;
        for (P = []; A < m; ++A)
          for (var H = 0; H < W; ++H)
            P[it++] = r(N[H] + " ", F[A], x).trim();
    }
    return P;
  }
  function r(N, P, x) {
    var F = P.charCodeAt(0);
    switch (33 > F && (F = (P = P.trim()).charCodeAt(0)), F) {
      case 38:
        return P.replace(D, "$1" + N.trim());
      case 58:
        return N.trim() + P.replace(D, "$1" + N.trim());
      default:
        if (0 < 1 * x && 0 < P.indexOf("\f"))
          return P.replace(D, (N.charCodeAt(0) === 58 ? "" : "$1") + N.trim());
    }
    return N + P;
  }
  function i(N, P, x, F) {
    var m = N + ";", W = 2 * P + 3 * x + 4 * F;
    if (W === 944) {
      N = m.indexOf(":", 9) + 1;
      var A = m.substring(N, m.length - 1).trim();
      return A = m.substring(0, N).trim() + A + ";", It === 1 || It === 2 && s(A, 1) ? "-webkit-" + A + A : A;
    }
    if (It === 0 || It === 2 && !s(m, 1))
      return m;
    switch (W) {
      case 1015:
        return m.charCodeAt(10) === 97 ? "-webkit-" + m + m : m;
      case 951:
        return m.charCodeAt(3) === 116 ? "-webkit-" + m + m : m;
      case 963:
        return m.charCodeAt(5) === 110 ? "-webkit-" + m + m : m;
      case 1009:
        if (m.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + m + m;
      case 978:
        return "-webkit-" + m + "-moz-" + m + m;
      case 1019:
      case 983:
        return "-webkit-" + m + "-moz-" + m + "-ms-" + m + m;
      case 883:
        if (m.charCodeAt(8) === 45)
          return "-webkit-" + m + m;
        if (0 < m.indexOf("image-set(", 11))
          return m.replace(Zt, "$1-webkit-$2") + m;
        break;
      case 932:
        if (m.charCodeAt(4) === 45)
          switch (m.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + m.replace("-grow", "") + "-webkit-" + m + "-ms-" + m.replace("grow", "positive") + m;
            case 115:
              return "-webkit-" + m + "-ms-" + m.replace("shrink", "negative") + m;
            case 98:
              return "-webkit-" + m + "-ms-" + m.replace("basis", "preferred-size") + m;
          }
        return "-webkit-" + m + "-ms-" + m + m;
      case 964:
        return "-webkit-" + m + "-ms-flex-" + m + m;
      case 1023:
        if (m.charCodeAt(8) !== 99)
          break;
        return A = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + m + "-ms-flex-pack" + A + m;
      case 1005:
        return y.test(m) ? m.replace(p, ":-webkit-") + m.replace(p, ":-moz-") + m : m;
      case 1e3:
        switch (A = m.substring(13).trim(), P = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(P)) {
          case 226:
            A = m.replace(g, "tb");
            break;
          case 232:
            A = m.replace(g, "tb-rl");
            break;
          case 220:
            A = m.replace(g, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + A + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (P = (m = N).length - 10, A = (m.charCodeAt(P) === 33 ? m.substring(0, P) : m).substring(N.indexOf(":", 7) + 1).trim(), W = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8))
              break;
          case 115:
            m = m.replace(A, "-webkit-" + A) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(A, "-webkit-" + (102 < W ? "inline-" : "") + "box") + ";" + m.replace(A, "-webkit-" + A) + ";" + m.replace(A, "-ms-" + A + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45)
          switch (m.charCodeAt(6)) {
            case 105:
              return A = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + A + "-ms-flex-" + A + m;
            case 115:
              return "-webkit-" + m + "-ms-flex-item-" + m.replace(dt, "") + m;
            default:
              return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(dt, "") + m;
          }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (Et.test(N) === !0)
          return (A = N.substring(N.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(N.replace("stretch", "fill-available"), P, x, F).replace(":fill-available", ":stretch") : m.replace(A, "-webkit-" + A) + m.replace(A, "-moz-" + A.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, x + F === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10))
          return m.substring(0, m.indexOf(";", 27) + 1).replace(E, "$1-webkit-$2") + m;
    }
    return m;
  }
  function s(N, P) {
    var x = N.indexOf(P === 1 ? ":" : "{"), F = N.substring(0, P !== 3 ? x : 10);
    return x = N.substring(x + 1, N.length - 1), oe(P !== 2 ? F : F.replace(Tt, "$1"), x, P);
  }
  function o(N, P) {
    var x = i(P, P.charCodeAt(0), P.charCodeAt(1), P.charCodeAt(2));
    return x !== P + ";" ? x.replace(gt, " or ($1)").substring(4) : "(" + P + ")";
  }
  function a(N, P, x, F, m, W, A, it, H, G) {
    for (var w = 0, ut = P, b; w < At; ++w)
      switch (b = qt[w].call(l, N, ut, x, F, m, W, A, it, H, G)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ut = b;
      }
    if (ut !== P)
      return ut;
  }
  function c(N) {
    switch (N) {
      case void 0:
      case null:
        At = qt.length = 0;
        break;
      default:
        if (typeof N == "function")
          qt[At++] = N;
        else if (typeof N == "object")
          for (var P = 0, x = N.length; P < x; ++P)
            c(N[P]);
        else
          ee = !!N | 0;
    }
    return c;
  }
  function u(N) {
    return N = N.prefix, N !== void 0 && (oe = null, N ? typeof N != "function" ? It = 1 : (It = 2, oe = N) : It = 0), u;
  }
  function l(N, P) {
    var x = N;
    if (33 > x.charCodeAt(0) && (x = x.trim()), ye = x, x = [ye], 0 < At) {
      var F = a(-1, P, x, x, Mt, bt, 0, 0, 0, 0);
      F !== void 0 && typeof F == "string" && (P = F);
    }
    var m = t(ge, x, P, 0, 0);
    return 0 < At && (F = a(-2, m, x, x, Mt, bt, m.length, 0, 0, 0), F !== void 0 && (m = F)), ye = "", Wt = 0, bt = Mt = 1, m;
  }
  var h = /^\0+/g, d = /[\0\r\f]/g, p = /: */g, y = /zoo|gra/, E = /([,: ])(transform)/g, f = /,\r+?/g, D = /([\t\r\n ])*\f?&/g, T = /@(k\w+)\s*(\S*)\s*/, I = /::(place)/g, S = /:(read-only)/g, g = /[svh]\w+-[tblr]{2}/, nt = /\(\s*(.*)\s*\)/g, gt = /([\s\S]*?);/g, dt = /-self|flex-/g, Tt = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Et = /stretch|:\s*\w+\-(?:conte|avail)/, Zt = /([^-])(image-set\()/, bt = 1, Mt = 1, Wt = 0, It = 1, ge = [], qt = [], At = 0, oe = null, ee = 0, ye = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
var lf = {
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
function hf(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var df = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ga = /* @__PURE__ */ hf(
  function(e) {
    return df.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ks = { exports: {} }, tt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function ff() {
  if (Wa)
    return tt;
  Wa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function I(g) {
    if (typeof g == "object" && g !== null) {
      var nt = g.$$typeof;
      switch (nt) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case l:
                case y:
                case p:
                case o:
                  return g;
                default:
                  return nt;
              }
          }
        case n:
          return nt;
      }
    }
  }
  function S(g) {
    return I(g) === u;
  }
  return tt.AsyncMode = c, tt.ConcurrentMode = u, tt.ContextConsumer = a, tt.ContextProvider = o, tt.Element = t, tt.ForwardRef = l, tt.Fragment = r, tt.Lazy = y, tt.Memo = p, tt.Portal = n, tt.Profiler = s, tt.StrictMode = i, tt.Suspense = h, tt.isAsyncMode = function(g) {
    return S(g) || I(g) === c;
  }, tt.isConcurrentMode = S, tt.isContextConsumer = function(g) {
    return I(g) === a;
  }, tt.isContextProvider = function(g) {
    return I(g) === o;
  }, tt.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, tt.isForwardRef = function(g) {
    return I(g) === l;
  }, tt.isFragment = function(g) {
    return I(g) === r;
  }, tt.isLazy = function(g) {
    return I(g) === y;
  }, tt.isMemo = function(g) {
    return I(g) === p;
  }, tt.isPortal = function(g) {
    return I(g) === n;
  }, tt.isProfiler = function(g) {
    return I(g) === s;
  }, tt.isStrictMode = function(g) {
    return I(g) === i;
  }, tt.isSuspense = function(g) {
    return I(g) === h;
  }, tt.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === s || g === i || g === h || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === p || g.$$typeof === o || g.$$typeof === a || g.$$typeof === l || g.$$typeof === f || g.$$typeof === D || g.$$typeof === T || g.$$typeof === E);
  }, tt.typeOf = I, tt;
}
var et = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function pf() {
  return Ha || (Ha = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, E = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function I(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === u || w === s || w === i || w === h || w === d || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === p || w.$$typeof === o || w.$$typeof === a || w.$$typeof === l || w.$$typeof === f || w.$$typeof === D || w.$$typeof === T || w.$$typeof === E);
    }
    function S(w) {
      if (typeof w == "object" && w !== null) {
        var ut = w.$$typeof;
        switch (ut) {
          case t:
            var b = w.type;
            switch (b) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case h:
                return b;
              default:
                var q = b && b.$$typeof;
                switch (q) {
                  case a:
                  case l:
                  case y:
                  case p:
                  case o:
                    return q;
                  default:
                    return ut;
                }
            }
          case n:
            return ut;
        }
      }
    }
    var g = c, nt = u, gt = a, dt = o, Tt = t, Et = l, Zt = r, bt = y, Mt = p, Wt = n, It = s, ge = i, qt = h, At = !1;
    function oe(w) {
      return At || (At = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(w) || S(w) === c;
    }
    function ee(w) {
      return S(w) === u;
    }
    function ye(w) {
      return S(w) === a;
    }
    function N(w) {
      return S(w) === o;
    }
    function P(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function x(w) {
      return S(w) === l;
    }
    function F(w) {
      return S(w) === r;
    }
    function m(w) {
      return S(w) === y;
    }
    function W(w) {
      return S(w) === p;
    }
    function A(w) {
      return S(w) === n;
    }
    function it(w) {
      return S(w) === s;
    }
    function H(w) {
      return S(w) === i;
    }
    function G(w) {
      return S(w) === h;
    }
    et.AsyncMode = g, et.ConcurrentMode = nt, et.ContextConsumer = gt, et.ContextProvider = dt, et.Element = Tt, et.ForwardRef = Et, et.Fragment = Zt, et.Lazy = bt, et.Memo = Mt, et.Portal = Wt, et.Profiler = It, et.StrictMode = ge, et.Suspense = qt, et.isAsyncMode = oe, et.isConcurrentMode = ee, et.isContextConsumer = ye, et.isContextProvider = N, et.isElement = P, et.isForwardRef = x, et.isFragment = F, et.isLazy = m, et.isMemo = W, et.isPortal = A, et.isProfiler = it, et.isStrictMode = H, et.isSuspense = G, et.isValidElementType = I, et.typeOf = S;
  }()), et;
}
process.env.NODE_ENV === "production" ? ks.exports = ff() : ks.exports = pf();
var mf = ks.exports, Ao = mf, gf = {
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
}, yf = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _f = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Cu = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, So = {};
So[Ao.ForwardRef] = _f;
So[Ao.Memo] = Cu;
function Ka(e) {
  return Ao.isMemo(e) ? Cu : So[e.$$typeof] || gf;
}
var vf = Object.defineProperty, Ef = Object.getOwnPropertyNames, Qa = Object.getOwnPropertySymbols, wf = Object.getOwnPropertyDescriptor, Tf = Object.getPrototypeOf, Ya = Object.prototype;
function bu(e, t, n) {
  if (typeof t != "string") {
    if (Ya) {
      var r = Tf(t);
      r && r !== Ya && bu(e, r, n);
    }
    var i = Ef(t);
    Qa && (i = i.concat(Qa(t)));
    for (var s = Ka(e), o = Ka(t), a = 0; a < i.length; ++a) {
      var c = i[a];
      if (!yf[c] && !(n && n[c]) && !(o && o[c]) && !(s && s[c])) {
        var u = wf(t, c);
        try {
          vf(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var If = bu;
const Af = /* @__PURE__ */ of(If);
function _e() {
  return (_e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Xa = function(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, Os = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Io.typeOf(e);
}, ei = Object.freeze([]), Ce = Object.freeze({});
function Xn(e) {
  return typeof e == "function";
}
function Ms(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ro(e) {
  return e && typeof e.styledComponentId == "string";
}
var pn = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Co = typeof window < "u" && "HTMLElement" in window, Sf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Rf = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Cf() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Cn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(Cf.apply(void 0, [Rf[e]].concat(n)).trim());
}
var bf = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, i = 0; i < n; i++)
      r += this.groupSizes[i];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, o = s; n >= o; )
        (o <<= 1) < 0 && Cn(16, "" + n);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(i), this.length = o;
      for (var a = s; a < o; a++)
        this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(n + 1), u = 0, l = r.length; u < l; u++)
      this.tag.insertRule(c, r[u]) && (this.groupSizes[n]++, c++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], i = this.indexOfGroup(n), s = i + r;
      this.groupSizes[n] = 0;
      for (var o = i; o < s; o++)
        this.tag.deleteRule(i);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0)
      return r;
    for (var i = this.groupSizes[n], s = this.indexOfGroup(n), o = s + i, a = s; a < o; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), Kr = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), qn = 1, Or = function(e) {
  if (Kr.has(e))
    return Kr.get(e);
  for (; ni.has(qn); )
    qn++;
  var t = qn++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Cn(16, "" + t), Kr.set(e, t), ni.set(t, e), t;
}, Pf = function(e) {
  return ni.get(e);
}, Vf = function(e, t) {
  t >= qn && (qn = t + 1), Kr.set(e, t), ni.set(t, e);
}, Df = "style[" + pn + '][data-styled-version="5.3.6"]', xf = new RegExp("^" + pn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Nf = function(e, t, n) {
  for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
    (r = i[s]) && e.registerName(t, r);
}, kf = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], i = 0, s = n.length; i < s; i++) {
    var o = n[i].trim();
    if (o) {
      var a = o.match(xf);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (Vf(u, c), Nf(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else
        r.push(o);
    }
  }
}, Of = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Pu = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), i = function(a) {
    for (var c = a.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(pn))
        return l;
    }
  }(n), s = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(pn, "active"), r.setAttribute("data-styled-version", "5.3.6");
  var o = Of();
  return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
}, Mf = function() {
  function e(n) {
    var r = this.element = Pu(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var s = document.styleSheets, o = 0, a = s.length; o < a; o++) {
        var c = s[o];
        if (c.ownerNode === i)
          return c;
      }
      Cn(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Lf = function() {
  function e(n) {
    var r = this.element = Pu(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var i = document.createTextNode(r), s = this.nodes[n];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), Ff = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Ja = Co, $f = { isServer: !Co, useCSSOMInjection: !Sf }, Vu = function() {
  function e(n, r, i) {
    n === void 0 && (n = Ce), r === void 0 && (r = {}), this.options = _e({}, $f, {}, n), this.gs = r, this.names = new Map(i), this.server = !!n.isServer, !this.server && Co && Ja && (Ja = !1, function(s) {
      for (var o = document.querySelectorAll(Df), a = 0, c = o.length; a < c; a++) {
        var u = o[a];
        u && u.getAttribute(pn) !== "active" && (kf(s, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Or(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(_e({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (i = (r = this.options).isServer, s = r.useCSSOMInjection, o = r.target, n = i ? new Ff(o) : s ? new Mf(o) : new Lf(o), new bf(n)));
    var n, r, i, s, o;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Or(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(r), this.names.set(n, i);
    }
  }, t.insertRules = function(n, r, i) {
    this.registerName(n, r), this.getTag().insertRules(Or(n), i);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Or(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), i = r.length, s = "", o = 0; o < i; o++) {
        var a = Pf(o);
        if (a !== void 0) {
          var c = n.names.get(a), u = r.getGroup(o);
          if (c && u && c.size) {
            var l = pn + ".g" + o + '[id="' + a + '"]', h = "";
            c !== void 0 && c.forEach(function(d) {
              d.length > 0 && (h += d + ",");
            }), s += "" + u + l + '{content:"' + h + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Uf = /(a)(d)/gi, Za = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ls(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Za(t % 52) + n;
  return (Za(t % 52) + n).replace(Uf, "$1-$2");
}
var Be = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Du = function(e) {
  return Be(5381, e);
};
function Bf(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Xn(n) && !Ro(n))
      return !1;
  }
  return !0;
}
var jf = Du("5.3.6"), qf = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Bf(t), this.componentId = n, this.baseHash = Be(jf, n), this.baseStyle = r, Vu.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var o = mn(this.rules, t, n, r).join(""), a = Ls(Be(this.baseHash, o) >>> 0);
        if (!n.hasNameForId(i, a)) {
          var c = r(o, "." + a, void 0, i);
          n.insertRules(i, a, c);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var u = this.rules.length, l = Be(this.baseHash, r.hash), h = "", d = 0; d < u; d++) {
        var p = this.rules[d];
        if (typeof p == "string")
          h += p, process.env.NODE_ENV !== "production" && (l = Be(l, p + d));
        else if (p) {
          var y = mn(p, t, n, r), E = Array.isArray(y) ? y.join("") : y;
          l = Be(l, E + d), h += E;
        }
      }
      if (h) {
        var f = Ls(l >>> 0);
        if (!n.hasNameForId(i, f)) {
          var D = r(h, "." + f, void 0, i);
          n.insertRules(i, f, D);
        }
        s.push(f);
      }
    }
    return s.join(" ");
  }, e;
}(), zf = /^\s*\/\/.*$/gm, Gf = [":", "[", ".", "#"];
function Wf(e) {
  var t, n, r, i, s = e === void 0 ? Ce : e, o = s.options, a = o === void 0 ? Ce : o, c = s.plugins, u = c === void 0 ? ei : c, l = new uf(a), h = [], d = /* @__PURE__ */ function(E) {
    function f(D) {
      if (D)
        try {
          E(D + "}");
        } catch {
        }
    }
    return function(D, T, I, S, g, nt, gt, dt, Tt, Et) {
      switch (D) {
        case 1:
          if (Tt === 0 && T.charCodeAt(0) === 64)
            return E(T + ";"), "";
          break;
        case 2:
          if (dt === 0)
            return T + "/*|*/";
          break;
        case 3:
          switch (dt) {
            case 102:
            case 112:
              return E(I[0] + T), "";
            default:
              return T + (Et === 0 ? "/*|*/" : "");
          }
        case -2:
          T.split("/*|*/}").forEach(f);
      }
    };
  }(function(E) {
    h.push(E);
  }), p = function(E, f, D) {
    return f === 0 && Gf.indexOf(D[n.length]) !== -1 || D.match(i) ? E : "." + t;
  };
  function y(E, f, D, T) {
    T === void 0 && (T = "&");
    var I = E.replace(zf, ""), S = f && D ? D + " " + f + " { " + I + " }" : I;
    return t = T, n = f, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), l(D || !f ? "" : f, S);
  }
  return l.use([].concat(u, [function(E, f, D) {
    E === 2 && D.length && D[0].lastIndexOf(n) > 0 && (D[0] = D[0].replace(r, p));
  }, d, function(E) {
    if (E === -2) {
      var f = h;
      return h = [], f;
    }
  }])), y.hash = u.length ? u.reduce(function(E, f) {
    return f.name || Cn(15), Be(E, f.name);
  }, 5381).toString() : "", y;
}
var xu = Ai.createContext();
xu.Consumer;
var Nu = Ai.createContext(), Hf = (Nu.Consumer, new Vu()), Fs = Wf();
function Kf() {
  return To(xu) || Hf;
}
function Qf() {
  return To(Nu) || Fs;
}
var ku = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(i, s) {
      s === void 0 && (s = Fs);
      var o = r.name + s.hash;
      i.hasNameForId(r.id, o) || i.insertRules(r.id, o, s(r.rules, o, "@keyframes"));
    }, this.toString = function() {
      return Cn(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fs), this.name + t.hash;
  }, e;
}(), Yf = /([A-Z])/, Xf = /([A-Z])/g, Jf = /^ms-/, Zf = function(e) {
  return "-" + e.toLowerCase();
};
function tc(e) {
  return Yf.test(e) ? e.replace(Xf, Zf).replace(Jf, "-ms-") : e;
}
var ec = function(e) {
  return e == null || e === !1 || e === "";
};
function mn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, s = [], o = 0, a = e.length; o < a; o += 1)
      (i = mn(e[o], t, n, r)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (ec(e))
    return "";
  if (Ro(e))
    return "." + e.styledComponentId;
  if (Xn(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && Io.isElement(c) && console.warn(Ms(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), mn(c, t, n, r);
  }
  var u;
  return e instanceof ku ? n ? (e.inject(n, r), e.getName(r)) : e : Os(e) ? function l(h, d) {
    var p, y, E = [];
    for (var f in h)
      h.hasOwnProperty(f) && !ec(h[f]) && (Array.isArray(h[f]) && h[f].isCss || Xn(h[f]) ? E.push(tc(f) + ":", h[f], ";") : Os(h[f]) ? E.push.apply(E, l(h[f], f)) : E.push(tc(f) + ": " + (p = f, (y = h[f]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || p in lf ? String(y).trim() : y + "px") + ";"));
    return d ? [d + " {"].concat(E, ["}"]) : E;
  }(e) : e.toString();
}
var nc = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ou(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return Xn(e) || Os(e) ? nc(mn(Xa(ei, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : nc(mn(Xa(e, n)));
}
var rc = /invalid hook call/i, Mr = /* @__PURE__ */ new Set(), tp = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        if (rc.test(s))
          i = !1, Mr.delete(n);
        else {
          for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
            a[c - 1] = arguments[c];
          r.apply(void 0, [s].concat(a));
        }
      }, Su(), i && !Mr.has(n) && (console.warn(n), Mr.add(n));
    } catch (s) {
      rc.test(s.message) && Mr.delete(n);
    } finally {
      console.error = r;
    }
  }
}, ep = function(e, t, n) {
  return n === void 0 && (n = Ce), e.theme !== n.theme && e.theme || t || n.theme;
}, np = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, rp = /(^-|-$)/g;
function us(e) {
  return e.replace(np, "-").replace(rp, "");
}
var Mu = function(e) {
  return Ls(Du(e) >>> 0);
};
function Lr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $s = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ip = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function sp(e, t, n) {
  var r = e[n];
  $s(t) && $s(r) ? Lu(r, t) : e[n] = t;
}
function Lu(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var i = 0, s = n; i < s.length; i++) {
    var o = s[i];
    if ($s(o))
      for (var a in o)
        ip(a) && sp(e, o[a], a);
  }
  return e;
}
var Fu = Ai.createContext();
Fu.Consumer;
var ls = {};
function $u(e, t, n) {
  var r = Ro(e), i = !Lr(e), s = t.attrs, o = s === void 0 ? ei : s, a = t.componentId, c = a === void 0 ? function(T, I) {
    var S = typeof T != "string" ? "sc" : us(T);
    ls[S] = (ls[S] || 0) + 1;
    var g = S + "-" + Mu("5.3.6" + S + ls[S]);
    return I ? I + "-" + g : g;
  }(t.displayName, t.parentComponentId) : a, u = t.displayName, l = u === void 0 ? function(T) {
    return Lr(T) ? "styled." + T : "Styled(" + Ms(T) + ")";
  }(e) : u, h = t.displayName && t.componentId ? us(t.displayName) + "-" + t.componentId : t.componentId || c, d = r && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o, p = t.shouldForwardProp;
  r && e.shouldForwardProp && (p = t.shouldForwardProp ? function(T, I, S) {
    return e.shouldForwardProp(T, I, S) && t.shouldForwardProp(T, I, S);
  } : e.shouldForwardProp);
  var y, E = new qf(n, h, r ? e.componentStyle : void 0), f = E.isStatic && o.length === 0, D = function(T, I) {
    return function(S, g, nt, gt) {
      var dt = S.attrs, Tt = S.componentStyle, Et = S.defaultProps, Zt = S.foldedComponentIds, bt = S.shouldForwardProp, Mt = S.styledComponentId, Wt = S.target;
      process.env.NODE_ENV !== "production" && ja(Mt);
      var It = function(F, m, W) {
        F === void 0 && (F = Ce);
        var A = _e({}, m, { theme: F }), it = {};
        return W.forEach(function(H) {
          var G, w, ut, b = H;
          for (G in Xn(b) && (b = b(A)), b)
            A[G] = it[G] = G === "className" ? (w = it[G], ut = b[G], w && ut ? w + " " + ut : w || ut) : b[G];
        }), [A, it];
      }(ep(g, To(Fu), Et) || Ce, g, dt), ge = It[0], qt = It[1], At = function(F, m, W, A) {
        var it = Kf(), H = Qf(), G = m ? F.generateAndInjectStyles(Ce, it, H) : F.generateAndInjectStyles(W, it, H);
        return process.env.NODE_ENV !== "production" && ja(G), process.env.NODE_ENV !== "production" && !m && A && A(G), G;
      }(Tt, gt, ge, process.env.NODE_ENV !== "production" ? S.warnTooManyClasses : void 0), oe = nt, ee = qt.$as || g.$as || qt.as || g.as || Wt, ye = Lr(ee), N = qt !== g ? _e({}, g, {}, qt) : g, P = {};
      for (var x in N)
        x[0] !== "$" && x !== "as" && (x === "forwardedAs" ? P.as = N[x] : (bt ? bt(x, Ga, ee) : !ye || Ga(x)) && (P[x] = N[x]));
      return g.style && qt.style !== g.style && (P.style = _e({}, g.style, {}, qt.style)), P.className = Array.prototype.concat(Zt, Mt, At !== Mt ? At : null, g.className, qt.className).filter(Boolean).join(" "), P.ref = oe, nf(ee, P);
    }(y, T, I, f);
  };
  return D.displayName = l, (y = Ai.forwardRef(D)).attrs = d, y.componentStyle = E, y.displayName = l, y.shouldForwardProp = p, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ei, y.styledComponentId = h, y.target = r ? e.target : e, y.withComponent = function(T) {
    var I = t.componentId, S = function(nt, gt) {
      if (nt == null)
        return {};
      var dt, Tt, Et = {}, Zt = Object.keys(nt);
      for (Tt = 0; Tt < Zt.length; Tt++)
        dt = Zt[Tt], gt.indexOf(dt) >= 0 || (Et[dt] = nt[dt]);
      return Et;
    }(t, ["componentId"]), g = I && I + "-" + (Lr(T) ? T : us(Ms(T)));
    return $u(T, _e({}, S, { attrs: d, componentId: g }), n);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? Lu({}, e.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (tp(l, h), y.warnTooManyClasses = /* @__PURE__ */ function(T, I) {
    var S = {}, g = !1;
    return function(nt) {
      if (!g && (S[nt] = !0, Object.keys(S).length >= 200)) {
        var gt = I ? ' with the id of "' + I + '"' : "";
        console.warn("Over 200 classes were generated for component " + T + gt + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, S = {};
      }
    };
  }(l, h)), y.toString = function() {
    return "." + y.styledComponentId;
  }, i && Af(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var ot = function(e) {
  return function t(n, r, i) {
    if (i === void 0 && (i = Ce), !Io.isValidElementType(r))
      return Cn(1, String(r));
    var s = function() {
      return n(r, i, Ou.apply(void 0, arguments));
    };
    return s.withConfig = function(o) {
      return t(n, r, _e({}, i, {}, o));
    }, s.attrs = function(o) {
      return t(n, r, _e({}, i, { attrs: Array.prototype.concat(i.attrs, o).filter(Boolean) }));
    }, s;
  }($u, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ot[e] = ot(e);
});
function Uu(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = Ou.apply(void 0, [e].concat(n)).join(""), s = Mu(i);
  return new ku(s, i);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const op = ot(
  ({ className: e, text: t, x: n, y: r, r: i, onClick: s, index: o }) => /* @__PURE__ */ zt(
    "g",
    {
      onClick: s,
      className: e,
      children: [
        /* @__PURE__ */ O(
          "circle",
          {
            r: i + 5,
            cy: r,
            cx: n
          }
        ),
        /* @__PURE__ */ O(
          "circle",
          {
            className: e,
            r: i,
            cy: r,
            cx: n
          }
        ),
        /* @__PURE__ */ O(
          "text",
          {
            x: n,
            y: r,
            dominantBaseline: "middle",
            textAnchor: "middle",
            children: t
          }
        )
      ]
    }
  )
)`
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
`, Bu = ot((e) => /* @__PURE__ */ O(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 12 12",
    ...e,
    children: /* @__PURE__ */ O(
      "path",
      {
        fill: "currentColor",
        d: "M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"
      }
    )
  }
))``, ap = Uu`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`, cp = Uu`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`, up = ot.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`, lp = ot(
  ({ className: e, children: t, addToPracticePlan: n }) => /* @__PURE__ */ O("li", { className: e, children: /* @__PURE__ */ O("button", { onClick: n, children: t }) })
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
`, hp = (e, t) => {
  var c;
  const { top: n, bottom: r, left: i, right: s } = e.current.getBoundingClientRect(), o = t.clientX, a = t.clientY;
  (o < i || o > s || a < n || a > r) && ((c = e.current) == null || c.close());
}, dp = ot.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`, fp = ot(
  ({ children: e, className: t, passedRef: n, title: r }) => /* @__PURE__ */ zt(
    "dialog",
    {
      ref: n,
      onClick: (s) => hp(n, s),
      className: t,
      children: [
        /* @__PURE__ */ zt(dp, { children: [
          r,
          /* @__PURE__ */ O(Bu, { onClick: () => {
            n.current.close();
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
    animation: ${cp} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${ap} var(--animation-timing) ease-out forwards;
    }
  }
`, hs = ot(({ text: e, onClick: t, className: n, Icon: r }) => /* @__PURE__ */ zt(
  "button",
  {
    className: n,
    onClick: t,
    children: [
      /* @__PURE__ */ O("span", { children: e }),
      !!r && /* @__PURE__ */ O("div", { children: /* @__PURE__ */ O(r, {}) })
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
`, pp = ot(
  ({ tabs: e, currentTab: t, setCurrentTab: n, className: r }) => /* @__PURE__ */ O("div", { className: r, children: e.map((i) => /* @__PURE__ */ O(
    "div",
    {
      onClick: () => n(i),
      "aria-selected": t === i,
      children: i
    },
    i
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
function Us() {
  return Us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Us.apply(this, arguments);
}
var ic;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ic || (ic = {}));
function mt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function fr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Bs(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function ju(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var sc;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(sc || (sc = {}));
function oc(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = mp(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i)
    return null;
  let s = i[0], o = s.replace(/(.)\/+$/, "$1"), a = i.slice(1);
  return {
    params: r.reduce((u, l, h) => {
      let {
        paramName: d,
        isOptional: p
      } = l;
      if (d === "*") {
        let E = a[h] || "";
        o = s.slice(0, s.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[h];
      return p && !y ? u[d] = void 0 : u[d] = (y || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e
  };
}
function mp(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), fr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, c) => (r.push({
    paramName: a,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function gn(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function gp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? ju(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : yp(n, t) : t,
    search: vp(r),
    hash: Ep(i)
  };
}
function yp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function ds(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function _p(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function qu(e, t) {
  let n = _p(e);
  return t ? n.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function zu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = ju(e) : (i = Us({}, e), mt(!i.pathname || !i.pathname.includes("?"), ds("?", "pathname", "search", i)), mt(!i.pathname || !i.pathname.includes("#"), ds("#", "pathname", "hash", i)), mt(!i.search || !i.search.includes("#"), ds("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
  if (o == null)
    a = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; )
        d.shift(), h -= 1;
      i.pathname = d.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let c = gp(i, a), u = o && o !== "/" && o.endsWith("/"), l = (s || o === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || l) && (c.pathname += "/"), c;
}
const bo = (e) => e.join("/").replace(/\/\/+/g, "/"), vp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ep = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Gu = ["post", "put", "patch", "delete"];
new Set(Gu);
const wp = ["get", ...Gu];
new Set(wp);
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
function js() {
  return js = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, js.apply(this, arguments);
}
const Si = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Si.displayName = "DataRouter");
const Wu = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Wu.displayName = "DataRouterState");
const Tp = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Tp.displayName = "Await");
const Ae = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Ae.displayName = "Navigation");
const Po = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Po.displayName = "Location");
const Oe = /* @__PURE__ */ M.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Oe.displayName = "Route");
const Ip = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Ip.displayName = "RouteError");
function Ap(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Vo() || (process.env.NODE_ENV !== "production" ? mt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : mt(!1));
  let {
    basename: r,
    navigator: i
  } = M.useContext(Ae), {
    hash: s,
    pathname: o,
    search: a
  } = mr(e, {
    relative: n
  }), c = o;
  return r !== "/" && (c = o === "/" ? r : bo([r, o])), i.createHref({
    pathname: c,
    search: a,
    hash: s
  });
}
function Vo() {
  return M.useContext(Po) != null;
}
function pr() {
  return Vo() || (process.env.NODE_ENV !== "production" ? mt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : mt(!1)), M.useContext(Po).location;
}
const Hu = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ku(e) {
  M.useContext(Ae).static || M.useLayoutEffect(e);
}
function Qu() {
  let {
    isDataRoute: e
  } = M.useContext(Oe);
  return e ? xp() : Sp();
}
function Sp() {
  Vo() || (process.env.NODE_ENV !== "production" ? mt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : mt(!1));
  let e = M.useContext(Si), {
    basename: t,
    future: n,
    navigator: r
  } = M.useContext(Ae), {
    matches: i
  } = M.useContext(Oe), {
    pathname: s
  } = pr(), o = JSON.stringify(qu(i, n.v7_relativeSplatPath)), a = M.useRef(!1);
  return Ku(() => {
    a.current = !0;
  }), M.useCallback(function(u, l) {
    if (l === void 0 && (l = {}), process.env.NODE_ENV !== "production" && fr(a.current, Hu), !a.current)
      return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let h = zu(u, JSON.parse(o), s, l.relative === "path");
    e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : bo([t, h.pathname])), (l.replace ? r.replace : r.push)(h, l.state, l);
  }, [t, r, o, s, e]);
}
const Rp = /* @__PURE__ */ M.createContext(null);
function Cp(e) {
  let t = M.useContext(Oe).outlet;
  return t && /* @__PURE__ */ M.createElement(Rp.Provider, {
    value: e
  }, t);
}
function bp() {
  let {
    matches: e
  } = M.useContext(Oe), t = e[e.length - 1];
  return t ? t.params : {};
}
function mr(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = M.useContext(Ae), {
    matches: i
  } = M.useContext(Oe), {
    pathname: s
  } = pr(), o = JSON.stringify(qu(i, r.v7_relativeSplatPath));
  return M.useMemo(() => zu(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
var Yu = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Yu || {}), Do = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Do || {});
function Xu(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Pp(e) {
  let t = M.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? mt(!1, Xu(e)) : mt(!1)), t;
}
function Vp(e) {
  let t = M.useContext(Oe);
  return t || (process.env.NODE_ENV !== "production" ? mt(!1, Xu(e)) : mt(!1)), t;
}
function Ju(e) {
  let t = Vp(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? mt(!1, e + ' can only be used on routes that contain a unique "id"') : mt(!1)), n.route.id;
}
function Dp() {
  return Ju(Do.UseRouteId);
}
function xp() {
  let {
    router: e
  } = Pp(Yu.UseNavigateStable), t = Ju(Do.UseNavigateStable), n = M.useRef(!1);
  return Ku(() => {
    n.current = !0;
  }), M.useCallback(function(i, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && fr(n.current, Hu), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, js({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
function Np(e) {
  return Cp(e.context);
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
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yn.apply(this, arguments);
}
function xo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Qr = "get", Yr = "application/x-www-form-urlencoded";
function Ri(e) {
  return e != null && typeof e.tagName == "string";
}
function kp(e) {
  return Ri(e) && e.tagName.toLowerCase() === "button";
}
function Op(e) {
  return Ri(e) && e.tagName.toLowerCase() === "form";
}
function Mp(e) {
  return Ri(e) && e.tagName.toLowerCase() === "input";
}
function Lp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Fp(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Lp(e);
}
let Fr = null;
function $p() {
  if (Fr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Fr = !1;
    } catch {
      Fr = !0;
    }
  return Fr;
}
const Up = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function fs(e) {
  return e != null && !Up.has(e) ? (process.env.NODE_ENV !== "production" && fr(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Yr + '"')), null) : e;
}
function Bp(e, t) {
  let n, r, i, s, o;
  if (Op(e)) {
    let a = e.getAttribute("action");
    r = a ? gn(a, t) : null, n = e.getAttribute("method") || Qr, i = fs(e.getAttribute("enctype")) || Yr, s = new FormData(e);
  } else if (kp(e) || Mp(e) && (e.type === "submit" || e.type === "image")) {
    let a = e.form;
    if (a == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || a.getAttribute("action");
    if (r = c ? gn(c, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || Qr, i = fs(e.getAttribute("formenctype")) || fs(a.getAttribute("enctype")) || Yr, s = new FormData(a, e), !$p()) {
      let {
        name: u,
        type: l,
        value: h
      } = e;
      if (l === "image") {
        let d = u ? u + "." : "";
        s.append(d + "x", "0"), s.append(d + "y", "0");
      } else
        u && s.append(u, h);
    }
  } else {
    if (Ri(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Qr, r = null, i = Yr, o = e;
  }
  return s && i === "text/plain" && (o = s, s = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: s,
    body: o
  };
}
const jp = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], qp = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], zp = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Gp = "6";
try {
  window.__reactRouterVersion = Gp;
} catch {
}
const Zu = /* @__PURE__ */ M.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Zu.displayName = "ViewTransition");
const Wp = /* @__PURE__ */ M.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Wp.displayName = "Fetchers");
process.env.NODE_ENV;
const Hp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Kp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tl = /* @__PURE__ */ M.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: s,
    replace: o,
    state: a,
    target: c,
    to: u,
    preventScrollReset: l,
    unstable_viewTransition: h
  } = t, d = xo(t, jp), {
    basename: p
  } = M.useContext(Ae), y, E = !1;
  if (typeof u == "string" && Kp.test(u) && (y = u, Hp))
    try {
      let I = new URL(window.location.href), S = u.startsWith("//") ? new URL(I.protocol + u) : new URL(u), g = gn(S.pathname, p);
      S.origin === I.origin && g != null ? u = g + S.search + S.hash : E = !0;
    } catch {
      process.env.NODE_ENV !== "production" && fr(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let f = Ap(u, {
    relative: i
  }), D = Xp(u, {
    replace: o,
    state: a,
    target: c,
    preventScrollReset: l,
    relative: i,
    unstable_viewTransition: h
  });
  function T(I) {
    r && r(I), I.defaultPrevented || D(I);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ M.createElement("a", yn({}, d, {
      href: y || f,
      onClick: E || s ? r : T,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (tl.displayName = "Link");
const qs = /* @__PURE__ */ M.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: s = "",
    end: o = !1,
    style: a,
    to: c,
    unstable_viewTransition: u,
    children: l
  } = t, h = xo(t, qp), d = mr(c, {
    relative: h.relative
  }), p = pr(), y = M.useContext(Wu), {
    navigator: E,
    basename: f
  } = M.useContext(Ae), D = y != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  rm(d) && u === !0, T = E.encodeLocation ? E.encodeLocation(d).pathname : d.pathname, I = p.pathname, S = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
  i || (I = I.toLowerCase(), S = S ? S.toLowerCase() : null, T = T.toLowerCase()), S && f && (S = gn(S, f) || S);
  const g = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
  let nt = I === T || !o && I.startsWith(T) && I.charAt(g) === "/", gt = S != null && (S === T || !o && S.startsWith(T) && S.charAt(T.length) === "/"), dt = {
    isActive: nt,
    isPending: gt,
    isTransitioning: D
  }, Tt = nt ? r : void 0, Et;
  typeof s == "function" ? Et = s(dt) : Et = [s, nt ? "active" : null, gt ? "pending" : null, D ? "transitioning" : null].filter(Boolean).join(" ");
  let Zt = typeof a == "function" ? a(dt) : a;
  return /* @__PURE__ */ M.createElement(tl, yn({}, h, {
    "aria-current": Tt,
    className: Et,
    ref: n,
    style: Zt,
    to: c,
    unstable_viewTransition: u
  }), typeof l == "function" ? l(dt) : l);
});
process.env.NODE_ENV !== "production" && (qs.displayName = "NavLink");
const Qp = /* @__PURE__ */ M.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: i,
    replace: s,
    state: o,
    method: a = Qr,
    action: c,
    onSubmit: u,
    relative: l,
    preventScrollReset: h,
    unstable_viewTransition: d
  } = e, p = xo(e, zp), y = em(), E = nm(c, {
    relative: l
  }), f = a.toLowerCase() === "get" ? "get" : "post", D = (T) => {
    if (u && u(T), T.defaultPrevented)
      return;
    T.preventDefault();
    let I = T.nativeEvent.submitter, S = (I == null ? void 0 : I.getAttribute("formmethod")) || a;
    y(I || T.currentTarget, {
      fetcherKey: n,
      method: S,
      navigate: r,
      replace: s,
      state: o,
      relative: l,
      preventScrollReset: h,
      unstable_viewTransition: d
    });
  };
  return /* @__PURE__ */ M.createElement("form", yn({
    ref: t,
    method: f,
    action: E,
    onSubmit: i ? u : D
  }, p));
});
process.env.NODE_ENV !== "production" && (Qp.displayName = "Form");
process.env.NODE_ENV;
var ri;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ri || (ri = {}));
var ac;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(ac || (ac = {}));
function Yp(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function el(e) {
  let t = M.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? mt(!1, Yp(e)) : mt(!1)), t;
}
function Xp(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: o,
    unstable_viewTransition: a
  } = t === void 0 ? {} : t, c = Qu(), u = pr(), l = mr(e, {
    relative: o
  });
  return M.useCallback((h) => {
    if (Fp(h, n)) {
      h.preventDefault();
      let d = r !== void 0 ? r : Bs(u) === Bs(l);
      c(e, {
        replace: d,
        state: i,
        preventScrollReset: s,
        relative: o,
        unstable_viewTransition: a
      });
    }
  }, [u, c, l, r, i, n, e, s, o, a]);
}
function Jp() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Zp = 0, tm = () => "__" + String(++Zp) + "__";
function em() {
  let {
    router: e
  } = el(ri.UseSubmit), {
    basename: t
  } = M.useContext(Ae), n = Dp();
  return M.useCallback(function(r, i) {
    i === void 0 && (i = {}), Jp();
    let {
      action: s,
      method: o,
      encType: a,
      formData: c,
      body: u
    } = Bp(r, t);
    if (i.navigate === !1) {
      let l = i.fetcherKey || tm();
      e.fetch(l, n, i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: c,
        body: u,
        formMethod: i.method || o,
        formEncType: i.encType || a,
        unstable_flushSync: i.unstable_flushSync
      });
    } else
      e.navigate(i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: c,
        body: u,
        formMethod: i.method || o,
        formEncType: i.encType || a,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
        unstable_flushSync: i.unstable_flushSync,
        unstable_viewTransition: i.unstable_viewTransition
      });
  }, [e, t, n]);
}
function nm(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = M.useContext(Ae), i = M.useContext(Oe);
  i || (process.env.NODE_ENV !== "production" ? mt(!1, "useFormAction must be used inside a RouteContext") : mt(!1));
  let [s] = i.matches.slice(-1), o = yn({}, mr(e || ".", {
    relative: n
  })), a = pr();
  if (e == null) {
    o.search = a.search;
    let c = new URLSearchParams(o.search);
    c.has("index") && c.get("index") === "" && (c.delete("index"), o.search = c.toString() ? "?" + c.toString() : "");
  }
  return (!e || e === ".") && s.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : bo([r, o.pathname])), Bs(o);
}
function rm(e, t) {
  t === void 0 && (t = {});
  let n = M.useContext(Zu);
  n == null && (process.env.NODE_ENV !== "production" ? mt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : mt(!1));
  let {
    basename: r
  } = el(ri.useViewTransitionState), i = mr(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let s = gn(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = gn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return oc(i.pathname, o) != null || oc(i.pathname, s) != null;
}
ot(({ className: e }) => /* @__PURE__ */ zt(Au, { children: [
  /* @__PURE__ */ O("nav", { className: e, children: /* @__PURE__ */ zt("ul", { children: [
    /* @__PURE__ */ O("li", { children: /* @__PURE__ */ O(qs, { to: "/practice_plans", children: "Practice Plans" }) }),
    /* @__PURE__ */ O("li", { children: /* @__PURE__ */ O(qs, { to: "/create", children: "Create" }) })
  ] }) }),
  /* @__PURE__ */ O(Np, {})
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
`;
const im = ot(({ className: e, children: t, title: n, ...r }) => /* @__PURE__ */ zt(
  "details",
  {
    className: e,
    ...r,
    children: [
      /* @__PURE__ */ O("summary", { children: n }),
      t
    ]
  }
))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`, sm = ot(({ className: e }) => /* @__PURE__ */ zt(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    className: e,
    children: [
      /* @__PURE__ */ O(
        "path",
        {
          fill: "currentColor",
          d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"
        }
      ),
      /* @__PURE__ */ O(
        "path",
        {
          fill: "currentColor",
          d: "M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"
        }
      )
    ]
  }
))``, om = ot(({ className: e }) => /* @__PURE__ */ O(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    className: e,
    children: /* @__PURE__ */ O(
      "path",
      {
        fill: "currentColor",
        d: "M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"
      }
    )
  }
))``, am = ot(({ className: e = "" }) => /* @__PURE__ */ O(
  "svg",
  {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ O(
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
))``;
ot(({ className: e }) => /* @__PURE__ */ O(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    className: e,
    children: /* @__PURE__ */ O(
      "path",
      {
        fillRule: "evenodd",
        d: "M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",
        fill: "currentColor"
      }
    )
  }
))``;
const cm = ot.line`
  stroke: var(--orange);
`, um = ot(
  ({
    className: e,
    content: t,
    showPanel: n,
    addToPracticePlan: r,
    area: i,
    moves: s,
    setPanelTitle: o = () => {
    }
  }) => {
    const u = (l) => {
      const h = "50%", d = "25%", p = "75%";
      return l % 3 === 1 || l === 0 ? h : l % 6 === 2 || l % 6 === 3 ? d : p;
    };
    return /* @__PURE__ */ O(
      "svg",
      {
        height: Math.max(110 * (t.length + 2), window.innerHeight - 52),
        width: "100%",
        className: e,
        children: t.map((l, h) => /* @__PURE__ */ zt("g", { children: [
          /* @__PURE__ */ O(
            cm,
            {
              x1: u(h),
              y1: 70 + h * 110,
              x2: u(h + 1),
              y2: 70 + (h + 1) * 110
            }
          ),
          /* @__PURE__ */ O(
            op,
            {
              index: h,
              r: 50,
              y: 70 + h * 110,
              x: u(h),
              onClick: () => {
                o(l), n(() => /* @__PURE__ */ O(Au, { children: s.filter((d) => d.area === i && d.position === l).map((d) => /* @__PURE__ */ O(
                  lp,
                  {
                    addToPracticePlan: () => r(d.id),
                    children: d.name
                  },
                  `${i}-${l}-${d.name}`
                )) }));
              },
              text: l
            },
            `${h}-svgRect`
          )
        ] }, l))
      }
    );
  }
)`
  background-color: var(--primary);
`;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nl = function(e) {
  const t = [];
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
  }
  return t;
}, lm = function(e) {
  const t = [];
  let n = 0, r = 0;
  for (; n < e.length; ) {
    const i = e[n++];
    if (i < 128)
      t[r++] = String.fromCharCode(i);
    else if (i > 191 && i < 224) {
      const s = e[n++];
      t[r++] = String.fromCharCode((i & 31) << 6 | s & 63);
    } else if (i > 239 && i < 365) {
      const s = e[n++], o = e[n++], a = e[n++], c = ((i & 7) << 18 | (s & 63) << 12 | (o & 63) << 6 | a & 63) - 65536;
      t[r++] = String.fromCharCode(55296 + (c >> 10)), t[r++] = String.fromCharCode(56320 + (c & 1023));
    } else {
      const s = e[n++], o = e[n++];
      t[r++] = String.fromCharCode((i & 15) << 12 | (s & 63) << 6 | o & 63);
    }
  }
  return t.join("");
}, rl = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(e, t) {
    if (!Array.isArray(e))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let i = 0; i < e.length; i += 3) {
      const s = e[i], o = i + 1 < e.length, a = o ? e[i + 1] : 0, c = i + 2 < e.length, u = c ? e[i + 2] : 0, l = s >> 2, h = (s & 3) << 4 | a >> 4;
      let d = (a & 15) << 2 | u >> 6, p = u & 63;
      c || (p = 64, o || (d = 64)), r.push(n[l], n[h], n[d], n[p]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(e, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(nl(e), t);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(e, t) {
    return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : lm(this.decodeStringToByteArray(e, t));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(e, t) {
    this.init_();
    const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let i = 0; i < e.length; ) {
      const s = n[e.charAt(i++)], a = i < e.length ? n[e.charAt(i)] : 0;
      ++i;
      const u = i < e.length ? n[e.charAt(i)] : 64;
      ++i;
      const h = i < e.length ? n[e.charAt(i)] : 64;
      if (++i, s == null || a == null || u == null || h == null)
        throw new hm();
      const d = s << 2 | a >> 4;
      if (r.push(d), u !== 64) {
        const p = a << 4 & 240 | u >> 2;
        if (r.push(p), h !== 64) {
          const y = u << 6 & 192 | h;
          r.push(y);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let e = 0; e < this.ENCODED_VALS.length; e++)
        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
    }
  }
};
class hm extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const dm = function(e) {
  const t = nl(e);
  return rl.encodeByteArray(t, !0);
}, ii = function(e) {
  return dm(e).replace(/\./g, "");
}, fm = function(e) {
  try {
    return rl.decodeString(e, !0);
  } catch (t) {
    console.error("base64Decode failed: ", t);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pm() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mm = () => pm().__FIREBASE_DEFAULTS__, gm = () => {
  if (typeof process > "u" || typeof process.env > "u")
    return;
  const e = process.env.__FIREBASE_DEFAULTS__;
  if (e)
    return JSON.parse(e);
}, ym = () => {
  if (typeof document > "u")
    return;
  let e;
  try {
    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const t = e && fm(e[1]);
  return t && JSON.parse(t);
}, No = () => {
  try {
    return mm() || gm() || ym();
  } catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
}, _m = (e) => {
  var t, n;
  return (n = (t = No()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0 ? void 0 : n[e];
}, vm = (e) => {
  const t = _m(e);
  if (!t)
    return;
  const n = t.lastIndexOf(":");
  if (n <= 0 || n + 1 === t.length)
    throw new Error(`Invalid host ${t} with no separate hostname and port!`);
  const r = parseInt(t.substring(n + 1), 10);
  return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
}, il = () => {
  var e;
  return (e = No()) === null || e === void 0 ? void 0 : e.config;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Em {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((t, n) => {
      this.resolve = t, this.reject = n;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r), typeof t == "function" && (this.promise.catch(() => {
      }), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wm(e, t) {
  if (e.uid)
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  const n = {
    alg: "none",
    type: "JWT"
  }, r = t || "demo-project", i = e.iat || 0, s = e.sub || e.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: s,
    user_id: s,
    firebase: {
      sign_in_provider: "custom",
      identities: {}
    }
  }, e);
  return [
    ii(JSON.stringify(n)),
    ii(JSON.stringify(o)),
    ""
  ].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function si() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Tm() {
  var e;
  const t = (e = No()) === null || e === void 0 ? void 0 : e.forceEnvironment;
  if (t === "node")
    return !0;
  if (t === "browser")
    return !1;
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch {
    return !1;
  }
}
function Im() {
  const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function Am() {
  return !Tm() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
}
function ko() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function sl() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", i = self.indexedDB.open(r);
      i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }, i.onupgradeneeded = () => {
        n = !1;
      }, i.onerror = () => {
        var s;
        t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
      };
    } catch (n) {
      t(n);
    }
  });
}
function Sm() {
  return !(typeof navigator > "u" || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rm = "FirebaseError";
class Me extends Error {
  constructor(t, n, r) {
    super(n), this.code = t, this.customData = r, this.name = Rm, Object.setPrototypeOf(this, Me.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ci.prototype.create);
  }
}
class Ci {
  constructor(t, n, r) {
    this.service = t, this.serviceName = n, this.errors = r;
  }
  create(t, ...n) {
    const r = n[0] || {}, i = `${this.service}/${t}`, s = this.errors[t], o = s ? Cm(s, r) : "Error", a = `${this.serviceName}: ${o} (${i}).`;
    return new Me(i, a, r);
  }
}
function Cm(e, t) {
  return e.replace(bm, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const bm = /\{\$([^}]+)}/g;
function oi(e, t) {
  if (e === t)
    return !0;
  const n = Object.keys(e), r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i))
      return !1;
    const s = e[i], o = t[i];
    if (cc(s) && cc(o)) {
      if (!oi(s, o))
        return !1;
    } else if (s !== o)
      return !1;
  }
  for (const i of r)
    if (!n.includes(i))
      return !1;
  return !0;
}
function cc(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pm = 1e3, Vm = 2, Dm = 4 * 60 * 60 * 1e3, xm = 0.5;
function uc(e, t = Pm, n = Vm) {
  const r = t * Math.pow(n, e), i = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    xm * r * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2
  );
  return Math.min(Dm, r + i);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e) {
  return e && e._delegate ? e._delegate : e;
}
class we {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(t, n, r) {
    this.name = t, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(t) {
    return this.instantiationMode = t, this;
  }
  setMultipleInstances(t) {
    return this.multipleInstances = t, this;
  }
  setServiceProps(t) {
    return this.serviceProps = t, this;
  }
  setInstanceCreatedCallback(t) {
    return this.onInstanceCreated = t, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ue = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nm {
  constructor(t, n) {
    this.name = t, this.container = n, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new Em();
      if (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: n
          });
          i && r.resolve(i);
        } catch {
        }
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier), i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (s) {
        if (i)
          return null;
        throw s;
      }
    else {
      if (i)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = t, !!this.shouldAutoInitialize()) {
      if (Om(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ue });
        } catch {
        }
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: i
          });
          r.resolve(s);
        } catch {
        }
      }
    }
  }
  clearInstance(t = Ue) {
    this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Ue) {
    return this.instances.has(t);
  }
  getOptions(t = Ue) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t, r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n), s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return o && t(o, i), () => {
      s.delete(t);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: km(t),
      options: n
    }), this.instances.set(t, r), this.instancesOptions.set(t, n), this.invokeOnInitCallbacks(r, t), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(t = Ue) {
    return this.component ? this.component.multipleInstances ? t : Ue : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function km(e) {
  return e === Ue ? void 0 : e;
}
function Om(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mm {
  constructor(t) {
    this.name = t, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(t) {
    if (this.providers.has(t))
      return this.providers.get(t);
    const n = new Nm(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Y;
(function(e) {
  e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";
})(Y || (Y = {}));
const Lm = {
  debug: Y.DEBUG,
  verbose: Y.VERBOSE,
  info: Y.INFO,
  warn: Y.WARN,
  error: Y.ERROR,
  silent: Y.SILENT
}, Fm = Y.INFO, $m = {
  [Y.DEBUG]: "log",
  [Y.VERBOSE]: "log",
  [Y.INFO]: "info",
  [Y.WARN]: "warn",
  [Y.ERROR]: "error"
}, Um = (e, t, ...n) => {
  if (t < e.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), i = $m[t];
  if (i)
    console[i](`[${r}]  ${e.name}:`, ...n);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
};
class Oo {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(t) {
    this.name = t, this._logLevel = Fm, this._logHandler = Um, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Y))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Lm[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.DEBUG, ...t), this._logHandler(this, Y.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.VERBOSE, ...t), this._logHandler(this, Y.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.INFO, ...t), this._logHandler(this, Y.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.WARN, ...t), this._logHandler(this, Y.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Y.ERROR, ...t), this._logHandler(this, Y.ERROR, ...t);
  }
}
const Bm = (e, t) => t.some((n) => e instanceof n);
let lc, hc;
function jm() {
  return lc || (lc = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function qm() {
  return hc || (hc = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const ol = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap();
function zm(e) {
  const t = new Promise((n, r) => {
    const i = () => {
      e.removeEventListener("success", s), e.removeEventListener("error", o);
    }, s = () => {
      n(be(e.result)), i();
    }, o = () => {
      r(e.error), i();
    };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return t.then((n) => {
    n instanceof IDBCursor && ol.set(n, e);
  }).catch(() => {
  }), Mo.set(t, e), t;
}
function Gm(e) {
  if (zs.has(e))
    return;
  const t = new Promise((n, r) => {
    const i = () => {
      e.removeEventListener("complete", s), e.removeEventListener("error", o), e.removeEventListener("abort", o);
    }, s = () => {
      n(), i();
    }, o = () => {
      r(e.error || new DOMException("AbortError", "AbortError")), i();
    };
    e.addEventListener("complete", s), e.addEventListener("error", o), e.addEventListener("abort", o);
  });
  zs.set(e, t);
}
let Gs = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done")
        return zs.get(e);
      if (t === "objectStoreNames")
        return e.objectStoreNames || al.get(e);
      if (t === "store")
        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return be(e[t]);
  },
  set(e, t, n) {
    return e[t] = n, !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  }
};
function Wm(e) {
  Gs = e(Gs);
}
function Hm(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
    const r = e.call(ms(this), t, ...n);
    return al.set(r, t.sort ? t.sort() : [t]), be(r);
  } : qm().includes(e) ? function(...t) {
    return e.apply(ms(this), t), be(ol.get(this));
  } : function(...t) {
    return be(e.apply(ms(this), t));
  };
}
function Km(e) {
  return typeof e == "function" ? Hm(e) : (e instanceof IDBTransaction && Gm(e), Bm(e, jm()) ? new Proxy(e, Gs) : e);
}
function be(e) {
  if (e instanceof IDBRequest)
    return zm(e);
  if (ps.has(e))
    return ps.get(e);
  const t = Km(e);
  return t !== e && (ps.set(e, t), Mo.set(t, e)), t;
}
const ms = (e) => Mo.get(e);
function cl(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t), a = be(o);
  return r && o.addEventListener("upgradeneeded", (c) => {
    r(be(o.result), c.oldVersion, c.newVersion, be(o.transaction), c);
  }), n && o.addEventListener("blocked", (c) => n(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    c.oldVersion,
    c.newVersion,
    c
  )), a.then((c) => {
    s && c.addEventListener("close", () => s()), i && c.addEventListener("versionchange", (u) => i(u.oldVersion, u.newVersion, u));
  }).catch(() => {
  }), a;
}
const Qm = ["get", "getKey", "getAll", "getAllKeys", "count"], Ym = ["put", "add", "delete", "clear"], gs = /* @__PURE__ */ new Map();
function dc(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
    return;
  if (gs.get(t))
    return gs.get(t);
  const n = t.replace(/FromIndex$/, ""), r = t !== n, i = Ym.includes(n);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Qm.includes(n))
  )
    return;
  const s = async function(o, ...a) {
    const c = this.transaction(o, i ? "readwrite" : "readonly");
    let u = c.store;
    return r && (u = u.index(a.shift())), (await Promise.all([
      u[n](...a),
      i && c.done
    ]))[0];
  };
  return gs.set(t, s), s;
}
Wm((e) => ({
  ...e,
  get: (t, n, r) => dc(t, n) || e.get(t, n, r),
  has: (t, n) => !!dc(t, n) || e.has(t, n)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xm {
  constructor(t) {
    this.container = t;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((n) => {
      if (Jm(n)) {
        const r = n.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((n) => n).join(" ");
  }
}
function Jm(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Ws = "@firebase/app", fc = "0.9.27";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe = new Oo("@firebase/app"), Zm = "@firebase/app-compat", tg = "@firebase/analytics-compat", eg = "@firebase/analytics", ng = "@firebase/app-check-compat", rg = "@firebase/app-check", ig = "@firebase/auth", sg = "@firebase/auth-compat", og = "@firebase/database", ag = "@firebase/database-compat", cg = "@firebase/functions", ug = "@firebase/functions-compat", lg = "@firebase/installations", hg = "@firebase/installations-compat", dg = "@firebase/messaging", fg = "@firebase/messaging-compat", pg = "@firebase/performance", mg = "@firebase/performance-compat", gg = "@firebase/remote-config", yg = "@firebase/remote-config-compat", _g = "@firebase/storage", vg = "@firebase/storage-compat", Eg = "@firebase/firestore", wg = "@firebase/firestore-compat", Tg = "firebase", Ig = "10.8.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hs = "[DEFAULT]", Ag = {
  [Ws]: "fire-core",
  [Zm]: "fire-core-compat",
  [eg]: "fire-analytics",
  [tg]: "fire-analytics-compat",
  [rg]: "fire-app-check",
  [ng]: "fire-app-check-compat",
  [ig]: "fire-auth",
  [sg]: "fire-auth-compat",
  [og]: "fire-rtdb",
  [ag]: "fire-rtdb-compat",
  [cg]: "fire-fn",
  [ug]: "fire-fn-compat",
  [lg]: "fire-iid",
  [hg]: "fire-iid-compat",
  [dg]: "fire-fcm",
  [fg]: "fire-fcm-compat",
  [pg]: "fire-perf",
  [mg]: "fire-perf-compat",
  [gg]: "fire-rc",
  [yg]: "fire-rc-compat",
  [_g]: "fire-gcs",
  [vg]: "fire-gcs-compat",
  [Eg]: "fire-fst",
  [wg]: "fire-fst-compat",
  "fire-js": "fire-js",
  [Tg]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ai = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new Map();
function Sg(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
function De(e) {
  const t = e.name;
  if (Ks.has(t))
    return Qe.debug(`There were multiple attempts to register component ${t}.`), !1;
  Ks.set(t, e);
  for (const n of ai.values())
    Sg(n, e);
  return !0;
}
function gr(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rg = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
}, Pe = new Ci("app", "Firebase", Rg);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cg {
  constructor(t, n, r) {
    this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new we(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = t;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw Pe.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bg = Ig;
function ul(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Hs, automaticDataCollectionEnabled: !1 }, t), i = r.name;
  if (typeof i != "string" || !i)
    throw Pe.create("bad-app-name", {
      appName: String(i)
    });
  if (n || (n = il()), !n)
    throw Pe.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const s = ai.get(i);
  if (s) {
    if (oi(n, s.options) && oi(r, s.config))
      return s;
    throw Pe.create("duplicate-app", { appName: i });
  }
  const o = new Mm(i);
  for (const c of Ks.values())
    o.addComponent(c);
  const a = new Cg(n, r, o);
  return ai.set(i, a), a;
}
function ll(e = Hs) {
  const t = ai.get(e);
  if (!t && e === Hs && il())
    return ul();
  if (!t)
    throw Pe.create("no-app", { appName: e });
  return t;
}
function le(e, t, n) {
  var r;
  let i = (r = Ag[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//), o = t.match(/\s|\//);
  if (s || o) {
    const a = [
      `Unable to register library "${i}" with version "${t}":`
    ];
    s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && a.push("and"), o && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`), Qe.warn(a.join(" "));
    return;
  }
  De(new we(
    `${i}-version`,
    () => ({ library: i, version: t }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pg = "firebase-heartbeat-database", Vg = 1, Jn = "firebase-heartbeat-store";
let ys = null;
function hl() {
  return ys || (ys = cl(Pg, Vg, {
    upgrade: (e, t) => {
      switch (t) {
        case 0:
          try {
            e.createObjectStore(Jn);
          } catch (n) {
            console.warn(n);
          }
      }
    }
  }).catch((e) => {
    throw Pe.create("idb-open", {
      originalErrorMessage: e.message
    });
  })), ys;
}
async function Dg(e) {
  try {
    const n = (await hl()).transaction(Jn), r = await n.objectStore(Jn).get(dl(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Me)
      Qe.warn(t.message);
    else {
      const n = Pe.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      Qe.warn(n.message);
    }
  }
}
async function pc(e, t) {
  try {
    const r = (await hl()).transaction(Jn, "readwrite");
    await r.objectStore(Jn).put(t, dl(e)), await r.done;
  } catch (n) {
    if (n instanceof Me)
      Qe.warn(n.message);
    else {
      const r = Pe.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message
      });
      Qe.warn(r.message);
    }
  }
}
function dl(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xg = 1024, Ng = 30 * 24 * 60 * 60 * 1e3;
class kg {
  constructor(t) {
    this.container = t, this._heartbeatsCache = null;
    const n = this.container.getProvider("app").getImmediate();
    this._storage = new Mg(n), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var t, n;
    const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), s = mc();
    if (!(((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null)) && !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((o) => o.date === s)))
      return this._heartbeatsCache.heartbeats.push({ date: s, agent: i }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((o) => {
        const a = new Date(o.date).valueOf();
        return Date.now() - a <= Ng;
      }), this._storage.overwrite(this._heartbeatsCache);
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var t;
    if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
      return "";
    const n = mc(), { heartbeatsToSend: r, unsentEntries: i } = Og(this._heartbeatsCache.heartbeats), s = ii(JSON.stringify({ version: 2, heartbeats: r }));
    return this._heartbeatsCache.lastSentHeartbeatDate = n, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), s;
  }
}
function mc() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function Og(e, t = xg) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if (s.dates.push(i.date), gc(n) > t) {
        s.dates.pop();
        break;
      }
    } else if (n.push({
      agent: i.agent,
      dates: [i.date]
    }), gc(n) > t) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: r
  };
}
class Mg {
  constructor(t) {
    this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return ko() ? sl().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Dg(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pc(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pc(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [
          ...i.heartbeats,
          ...t.heartbeats
        ]
      });
    } else
      return;
  }
}
function gc(e) {
  return ii(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: e })
  ).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lg(e) {
  De(new we(
    "platform-logger",
    (t) => new Xm(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), De(new we(
    "heartbeat",
    (t) => new kg(t),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), le(Ws, fc, e), le(Ws, fc, "esm2017"), le("fire-js", "");
}
Lg("");
var Fg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, C, Lo = Lo || {}, $ = Fg || self;
function bi(e) {
  var t = typeof e;
  return t = t != "object" ? t : e ? Array.isArray(e) ? "array" : t : "null", t == "array" || t == "object" && typeof e.length == "number";
}
function yr(e) {
  var t = typeof e;
  return t == "object" && e != null || t == "function";
}
function $g(e) {
  return Object.prototype.hasOwnProperty.call(e, _s) && e[_s] || (e[_s] = ++Ug);
}
var _s = "closure_uid_" + (1e9 * Math.random() >>> 0), Ug = 0;
function Bg(e, t, n) {
  return e.call.apply(e.bind, arguments);
}
function jg(e, t, n) {
  if (!e)
    throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function() {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), e.apply(t, i);
    };
  }
  return function() {
    return e.apply(t, arguments);
  };
}
function Ut(e, t, n) {
  return Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ut = Bg : Ut = jg, Ut.apply(null, arguments);
}
function $r(e, t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function() {
    var r = n.slice();
    return r.push.apply(r, arguments), e.apply(this, r);
  };
}
function Ct(e, t) {
  function n() {
  }
  n.prototype = t.prototype, e.$ = t.prototype, e.prototype = new n(), e.prototype.constructor = e, e.ac = function(r, i, s) {
    for (var o = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
      o[a - 2] = arguments[a];
    return t.prototype[i].apply(r, o);
  };
}
function Le() {
  this.s = this.s, this.o = this.o;
}
var qg = 0;
Le.prototype.s = !1;
Le.prototype.sa = function() {
  !this.s && (this.s = !0, this.N(), qg != 0) && $g(this);
};
Le.prototype.N = function() {
  if (this.o)
    for (; this.o.length; )
      this.o.shift()();
};
const fl = Array.prototype.indexOf ? function(e, t) {
  return Array.prototype.indexOf.call(e, t, void 0);
} : function(e, t) {
  if (typeof e == "string")
    return typeof t != "string" || t.length != 1 ? -1 : e.indexOf(t, 0);
  for (let n = 0; n < e.length; n++)
    if (n in e && e[n] === t)
      return n;
  return -1;
};
function Fo(e) {
  const t = e.length;
  if (0 < t) {
    const n = Array(t);
    for (let r = 0; r < t; r++)
      n[r] = e[r];
    return n;
  }
  return [];
}
function yc(e, t) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (bi(r)) {
      const i = e.length || 0, s = r.length || 0;
      e.length = i + s;
      for (let o = 0; o < s; o++)
        e[i + o] = r[o];
    } else
      e.push(r);
  }
}
function Bt(e, t) {
  this.type = e, this.g = this.target = t, this.defaultPrevented = !1;
}
Bt.prototype.h = function() {
  this.defaultPrevented = !0;
};
var zg = function() {
  if (!$.addEventListener || !Object.defineProperty)
    return !1;
  var e = !1, t = Object.defineProperty({}, "passive", { get: function() {
    e = !0;
  } });
  try {
    const n = () => {
    };
    $.addEventListener("test", n, t), $.removeEventListener("test", n, t);
  } catch {
  }
  return e;
}();
function Zn(e) {
  return /^[\s\xa0]*$/.test(e);
}
function Pi() {
  var e = $.navigator;
  return e && (e = e.userAgent) ? e : "";
}
function ae(e) {
  return Pi().indexOf(e) != -1;
}
function $o(e) {
  return $o[" "](e), e;
}
$o[" "] = function() {
};
function Gg(e, t) {
  var n = Ly;
  return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e);
}
var Wg = ae("Opera"), _n = ae("Trident") || ae("MSIE"), pl = ae("Edge"), Qs = pl || _n, ml = ae("Gecko") && !(Pi().toLowerCase().indexOf("webkit") != -1 && !ae("Edge")) && !(ae("Trident") || ae("MSIE")) && !ae("Edge"), Hg = Pi().toLowerCase().indexOf("webkit") != -1 && !ae("Edge");
function gl() {
  var e = $.document;
  return e ? e.documentMode : void 0;
}
var Ys;
t: {
  var vs = "", Es = function() {
    var e = Pi();
    if (ml)
      return /rv:([^\);]+)(\)|;)/.exec(e);
    if (pl)
      return /Edge\/([\d\.]+)/.exec(e);
    if (_n)
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
    if (Hg)
      return /WebKit\/(\S+)/.exec(e);
    if (Wg)
      return /(?:Version)[ \/]?(\S+)/.exec(e);
  }();
  if (Es && (vs = Es ? Es[1] : ""), _n) {
    var ws = gl();
    if (ws != null && ws > parseFloat(vs)) {
      Ys = String(ws);
      break t;
    }
  }
  Ys = vs;
}
var Xs;
if ($.document && _n) {
  var _c = gl();
  Xs = _c || parseInt(Ys, 10) || void 0;
} else
  Xs = void 0;
var Kg = Xs;
function tr(e, t) {
  if (Bt.call(this, e ? e.type : ""), this.relatedTarget = this.g = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.state = null, this.pointerId = 0, this.pointerType = "", this.i = null, e) {
    var n = this.type = e.type, r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
    if (this.target = e.target || e.srcElement, this.g = t, t = e.relatedTarget) {
      if (ml) {
        t: {
          try {
            $o(t.nodeName);
            var i = !0;
            break t;
          } catch {
          }
          i = !1;
        }
        i || (t = null);
      }
    } else
      n == "mouseover" ? t = e.fromElement : n == "mouseout" && (t = e.toElement);
    this.relatedTarget = t, r ? (this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX, this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX, this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0), this.button = e.button, this.key = e.key || "", this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.pointerId = e.pointerId || 0, this.pointerType = typeof e.pointerType == "string" ? e.pointerType : Qg[e.pointerType] || "", this.state = e.state, this.i = e, e.defaultPrevented && tr.$.h.call(this);
  }
}
Ct(tr, Bt);
var Qg = { 2: "touch", 3: "pen", 4: "mouse" };
tr.prototype.h = function() {
  tr.$.h.call(this);
  var e = this.i;
  e.preventDefault ? e.preventDefault() : e.returnValue = !1;
};
var _r = "closure_listenable_" + (1e6 * Math.random() | 0), Yg = 0;
function Xg(e, t, n, r, i) {
  this.listener = e, this.proxy = null, this.src = t, this.type = n, this.capture = !!r, this.la = i, this.key = ++Yg, this.fa = this.ia = !1;
}
function Vi(e) {
  e.fa = !0, e.listener = null, e.proxy = null, e.src = null, e.la = null;
}
function Uo(e, t, n) {
  for (const r in e)
    t.call(n, e[r], r, e);
}
function Jg(e, t) {
  for (const n in e)
    t.call(void 0, e[n], n, e);
}
function yl(e) {
  const t = {};
  for (const n in e)
    t[n] = e[n];
  return t;
}
const vc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function _l(e, t) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r)
      e[n] = r[n];
    for (let s = 0; s < vc.length; s++)
      n = vc[s], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
}
function Di(e) {
  this.src = e, this.g = {}, this.h = 0;
}
Di.prototype.add = function(e, t, n, r, i) {
  var s = e.toString();
  e = this.g[s], e || (e = this.g[s] = [], this.h++);
  var o = Zs(e, t, r, i);
  return -1 < o ? (t = e[o], n || (t.ia = !1)) : (t = new Xg(t, this.src, s, !!r, i), t.ia = n, e.push(t)), t;
};
function Js(e, t) {
  var n = t.type;
  if (n in e.g) {
    var r = e.g[n], i = fl(r, t), s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1), s && (Vi(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
  }
}
function Zs(e, t, n, r) {
  for (var i = 0; i < e.length; ++i) {
    var s = e[i];
    if (!s.fa && s.listener == t && s.capture == !!n && s.la == r)
      return i;
  }
  return -1;
}
var Bo = "closure_lm_" + (1e6 * Math.random() | 0), Ts = {};
function vl(e, t, n, r, i) {
  if (r && r.once)
    return wl(e, t, n, r, i);
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++)
      vl(e, t[s], n, r, i);
    return null;
  }
  return n = zo(n), e && e[_r] ? e.O(t, n, yr(r) ? !!r.capture : !!r, i) : El(e, t, n, !1, r, i);
}
function El(e, t, n, r, i, s) {
  if (!t)
    throw Error("Invalid event type");
  var o = yr(i) ? !!i.capture : !!i, a = qo(e);
  if (a || (e[Bo] = a = new Di(e)), n = a.add(t, n, r, o, s), n.proxy)
    return n;
  if (r = Zg(), n.proxy = r, r.src = e, r.listener = n, e.addEventListener)
    zg || (i = o), i === void 0 && (i = !1), e.addEventListener(t.toString(), r, i);
  else if (e.attachEvent)
    e.attachEvent(Il(t.toString()), r);
  else if (e.addListener && e.removeListener)
    e.addListener(r);
  else
    throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function Zg() {
  function e(n) {
    return t.call(e.src, e.listener, n);
  }
  const t = ty;
  return e;
}
function wl(e, t, n, r, i) {
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++)
      wl(e, t[s], n, r, i);
    return null;
  }
  return n = zo(n), e && e[_r] ? e.P(t, n, yr(r) ? !!r.capture : !!r, i) : El(e, t, n, !0, r, i);
}
function Tl(e, t, n, r, i) {
  if (Array.isArray(t))
    for (var s = 0; s < t.length; s++)
      Tl(e, t[s], n, r, i);
  else
    r = yr(r) ? !!r.capture : !!r, n = zo(n), e && e[_r] ? (e = e.i, t = String(t).toString(), t in e.g && (s = e.g[t], n = Zs(s, n, r, i), -1 < n && (Vi(s[n]), Array.prototype.splice.call(s, n, 1), s.length == 0 && (delete e.g[t], e.h--)))) : e && (e = qo(e)) && (t = e.g[t.toString()], e = -1, t && (e = Zs(t, n, r, i)), (n = -1 < e ? t[e] : null) && jo(n));
}
function jo(e) {
  if (typeof e != "number" && e && !e.fa) {
    var t = e.src;
    if (t && t[_r])
      Js(t.i, e);
    else {
      var n = e.type, r = e.proxy;
      t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(Il(n), r) : t.addListener && t.removeListener && t.removeListener(r), (n = qo(t)) ? (Js(n, e), n.h == 0 && (n.src = null, t[Bo] = null)) : Vi(e);
    }
  }
}
function Il(e) {
  return e in Ts ? Ts[e] : Ts[e] = "on" + e;
}
function ty(e, t) {
  if (e.fa)
    e = !0;
  else {
    t = new tr(t, this);
    var n = e.listener, r = e.la || e.src;
    e.ia && jo(e), e = n.call(r, t);
  }
  return e;
}
function qo(e) {
  return e = e[Bo], e instanceof Di ? e : null;
}
var Is = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
function zo(e) {
  return typeof e == "function" ? e : (e[Is] || (e[Is] = function(t) {
    return e.handleEvent(t);
  }), e[Is]);
}
function Rt() {
  Le.call(this), this.i = new Di(this), this.S = this, this.J = null;
}
Ct(Rt, Le);
Rt.prototype[_r] = !0;
Rt.prototype.removeEventListener = function(e, t, n, r) {
  Tl(this, e, t, n, r);
};
function kt(e, t) {
  var n, r = e.J;
  if (r)
    for (n = []; r; r = r.J)
      n.push(r);
  if (e = e.S, r = t.type || t, typeof t == "string")
    t = new Bt(t, e);
  else if (t instanceof Bt)
    t.target = t.target || e;
  else {
    var i = t;
    t = new Bt(r, e), _l(t, i);
  }
  if (i = !0, n)
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = t.g = n[s];
      i = Ur(o, r, !0, t) && i;
    }
  if (o = t.g = e, i = Ur(o, r, !0, t) && i, i = Ur(o, r, !1, t) && i, n)
    for (s = 0; s < n.length; s++)
      o = t.g = n[s], i = Ur(o, r, !1, t) && i;
}
Rt.prototype.N = function() {
  if (Rt.$.N.call(this), this.i) {
    var e = this.i, t;
    for (t in e.g) {
      for (var n = e.g[t], r = 0; r < n.length; r++)
        Vi(n[r]);
      delete e.g[t], e.h--;
    }
  }
  this.J = null;
};
Rt.prototype.O = function(e, t, n, r) {
  return this.i.add(String(e), t, !1, n, r);
};
Rt.prototype.P = function(e, t, n, r) {
  return this.i.add(String(e), t, !0, n, r);
};
function Ur(e, t, n, r) {
  if (t = e.i.g[String(t)], !t)
    return !0;
  t = t.concat();
  for (var i = !0, s = 0; s < t.length; ++s) {
    var o = t[s];
    if (o && !o.fa && o.capture == n) {
      var a = o.listener, c = o.la || o.src;
      o.ia && Js(e.i, o), i = a.call(c, r) !== !1 && i;
    }
  }
  return i && !r.defaultPrevented;
}
var Go = $.JSON.stringify;
class ey {
  constructor(t, n) {
    this.i = t, this.j = n, this.h = 0, this.g = null;
  }
  get() {
    let t;
    return 0 < this.h ? (this.h--, t = this.g, this.g = t.next, t.next = null) : t = this.i(), t;
  }
}
function ny() {
  var e = Wo;
  let t = null;
  return e.g && (t = e.g, e.g = e.g.next, e.g || (e.h = null), t.next = null), t;
}
class ry {
  constructor() {
    this.h = this.g = null;
  }
  add(t, n) {
    const r = Al.get();
    r.set(t, n), this.h ? this.h.next = r : this.g = r, this.h = r;
  }
}
var Al = new ey(() => new iy(), (e) => e.reset());
class iy {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(t, n) {
    this.h = t, this.g = n, this.next = null;
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function sy(e) {
  var t = 1;
  e = e.split(":");
  const n = [];
  for (; 0 < t && e.length; )
    n.push(e.shift()), t--;
  return e.length && n.push(e.join(":")), n;
}
function oy(e) {
  $.setTimeout(() => {
    throw e;
  }, 0);
}
let er, nr = !1, Wo = new ry(), Sl = () => {
  const e = $.Promise.resolve(void 0);
  er = () => {
    e.then(ay);
  };
};
var ay = () => {
  for (var e; e = ny(); ) {
    try {
      e.h.call(e.g);
    } catch (n) {
      oy(n);
    }
    var t = Al;
    t.j(e), 100 > t.h && (t.h++, e.next = t.g, t.g = e);
  }
  nr = !1;
};
function xi(e, t) {
  Rt.call(this), this.h = e || 1, this.g = t || $, this.j = Ut(this.qb, this), this.l = Date.now();
}
Ct(xi, Rt);
C = xi.prototype;
C.ga = !1;
C.T = null;
C.qb = function() {
  if (this.ga) {
    var e = Date.now() - this.l;
    0 < e && e < 0.8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - e) : (this.T && (this.g.clearTimeout(this.T), this.T = null), kt(this, "tick"), this.ga && (Ho(this), this.start()));
  }
};
C.start = function() {
  this.ga = !0, this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now());
};
function Ho(e) {
  e.ga = !1, e.T && (e.g.clearTimeout(e.T), e.T = null);
}
C.N = function() {
  xi.$.N.call(this), Ho(this), delete this.g;
};
function Ko(e, t, n) {
  if (typeof e == "function")
    n && (e = Ut(e, n));
  else if (e && typeof e.handleEvent == "function")
    e = Ut(e.handleEvent, e);
  else
    throw Error("Invalid listener argument");
  return 2147483647 < Number(t) ? -1 : $.setTimeout(e, t || 0);
}
function Rl(e) {
  e.g = Ko(() => {
    e.g = null, e.i && (e.i = !1, Rl(e));
  }, e.j);
  const t = e.h;
  e.h = null, e.m.apply(null, t);
}
class cy extends Le {
  constructor(t, n) {
    super(), this.m = t, this.j = n, this.h = null, this.i = !1, this.g = null;
  }
  l(t) {
    this.h = arguments, this.g ? this.i = !0 : Rl(this);
  }
  N() {
    super.N(), this.g && ($.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
  }
}
function rr(e) {
  Le.call(this), this.h = e, this.g = {};
}
Ct(rr, Le);
var Ec = [];
function Cl(e, t, n, r) {
  Array.isArray(n) || (n && (Ec[0] = n.toString()), n = Ec);
  for (var i = 0; i < n.length; i++) {
    var s = vl(t, n[i], r || e.handleEvent, !1, e.h || e);
    if (!s)
      break;
    e.g[s.key] = s;
  }
}
function bl(e) {
  Uo(e.g, function(t, n) {
    this.g.hasOwnProperty(n) && jo(t);
  }, e), e.g = {};
}
rr.prototype.N = function() {
  rr.$.N.call(this), bl(this);
};
rr.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Ni() {
  this.g = !0;
}
Ni.prototype.Ea = function() {
  this.g = !1;
};
function uy(e, t, n, r, i, s) {
  e.info(function() {
    if (e.g)
      if (s)
        for (var o = "", a = s.split("&"), c = 0; c < a.length; c++) {
          var u = a[c].split("=");
          if (1 < u.length) {
            var l = u[0];
            u = u[1];
            var h = l.split("_");
            o = 2 <= h.length && h[1] == "type" ? o + (l + "=" + u + "&") : o + (l + "=redacted&");
          }
        }
      else
        o = null;
    else
      o = s;
    return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + `
` + n + `
` + o;
  });
}
function ly(e, t, n, r, i, s, o) {
  e.info(function() {
    return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + `
` + n + `
` + s + " " + o;
  });
}
function ln(e, t, n, r) {
  e.info(function() {
    return "XMLHTTP TEXT (" + t + "): " + dy(e, n) + (r ? " " + r : "");
  });
}
function hy(e, t) {
  e.info(function() {
    return "TIMEOUT: " + t;
  });
}
Ni.prototype.info = function() {
};
function dy(e, t) {
  if (!e.g)
    return t;
  if (!t)
    return null;
  try {
    var n = JSON.parse(t);
    if (n) {
      for (e = 0; e < n.length; e++)
        if (Array.isArray(n[e])) {
          var r = n[e];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++)
                  i[o] = "";
            }
          }
        }
    }
    return Go(n);
  } catch {
    return t;
  }
}
var en = {}, wc = null;
function ki() {
  return wc = wc || new Rt();
}
en.Ta = "serverreachability";
function Pl(e) {
  Bt.call(this, en.Ta, e);
}
Ct(Pl, Bt);
function ir(e) {
  const t = ki();
  kt(t, new Pl(t));
}
en.STAT_EVENT = "statevent";
function Vl(e, t) {
  Bt.call(this, en.STAT_EVENT, e), this.stat = t;
}
Ct(Vl, Bt);
function Gt(e) {
  const t = ki();
  kt(t, new Vl(t, e));
}
en.Ua = "timingevent";
function Dl(e, t) {
  Bt.call(this, en.Ua, e), this.size = t;
}
Ct(Dl, Bt);
function vr(e, t) {
  if (typeof e != "function")
    throw Error("Fn must not be null and must be a function");
  return $.setTimeout(function() {
    e();
  }, t);
}
var Oi = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 }, xl = { wb: "complete", Sb: "success", Ra: "error", Qa: "abort", Kb: "ready", Lb: "readystatechange", TIMEOUT: "timeout", Gb: "incrementaldata", Jb: "progress", zb: "downloadprogress", $b: "uploadprogress" };
function Qo() {
}
Qo.prototype.h = null;
function Tc(e) {
  return e.h || (e.h = e.i());
}
function Nl() {
}
var Er = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function Yo() {
  Bt.call(this, "d");
}
Ct(Yo, Bt);
function Xo() {
  Bt.call(this, "c");
}
Ct(Xo, Bt);
var to;
function Mi() {
}
Ct(Mi, Qo);
Mi.prototype.g = function() {
  return new XMLHttpRequest();
};
Mi.prototype.i = function() {
  return {};
};
to = new Mi();
function wr(e, t, n, r) {
  this.l = e, this.j = t, this.m = n, this.W = r || 1, this.U = new rr(this), this.P = fy, e = Qs ? 125 : void 0, this.V = new xi(e), this.I = null, this.i = !1, this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null, this.F = [], this.g = null, this.o = 0, this.s = this.v = null, this.ca = -1, this.J = !1, this.O = 0, this.M = null, this.ba = this.K = this.aa = this.S = !1, this.h = new kl();
}
function kl() {
  this.i = null, this.g = "", this.h = !1;
}
var fy = 45e3, Ol = {}, eo = {};
C = wr.prototype;
C.setTimeout = function(e) {
  this.P = e;
};
function no(e, t, n) {
  e.L = 1, e.A = Fi(Te(t)), e.u = n, e.S = !0, Ml(e, null);
}
function Ml(e, t) {
  e.G = Date.now(), Tr(e), e.B = Te(e.A);
  var n = e.B, r = e.W;
  Array.isArray(r) || (r = [String(r)]), zl(n.i, "t", r), e.o = 0, n = e.l.J, e.h = new kl(), e.g = hh(e.l, n ? t : null, !e.u), 0 < e.O && (e.M = new cy(Ut(e.Pa, e, e.g), e.O)), Cl(e.U, e.g, "readystatechange", e.nb), t = e.I ? yl(e.I) : {}, e.u ? (e.v || (e.v = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", e.g.ha(e.B, e.v, e.u, t)) : (e.v = "GET", e.g.ha(e.B, e.v, null, t)), ir(), uy(e.j, e.v, e.B, e.m, e.W, e.u);
}
C.nb = function(e) {
  e = e.target;
  const t = this.M;
  t && ce(e) == 3 ? t.l() : this.Pa(e);
};
C.Pa = function(e) {
  try {
    if (e == this.g)
      t: {
        const l = ce(this.g);
        var t = this.g.Ia();
        const h = this.g.da();
        if (!(3 > l) && (l != 3 || Qs || this.g && (this.h.h || this.g.ja() || Rc(this.g)))) {
          this.J || l != 4 || t == 7 || (t == 8 || 0 >= h ? ir(3) : ir(2)), Li(this);
          var n = this.g.da();
          this.ca = n;
          e:
            if (Ll(this)) {
              var r = Rc(this.g);
              e = "";
              var i = r.length, s = ce(this.g) == 4;
              if (!this.h.i) {
                if (typeof TextDecoder > "u") {
                  qe(this), zn(this);
                  var o = "";
                  break e;
                }
                this.h.i = new $.TextDecoder();
              }
              for (t = 0; t < i; t++)
                this.h.h = !0, e += this.h.i.decode(r[t], { stream: s && t == i - 1 });
              r.length = 0, this.h.g += e, this.o = 0, o = this.h.g;
            } else
              o = this.g.ja();
          if (this.i = n == 200, ly(this.j, this.v, this.B, this.m, this.W, l, n), this.i) {
            if (this.aa && !this.K) {
              e: {
                if (this.g) {
                  var a, c = this.g;
                  if ((a = c.g ? c.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !Zn(a)) {
                    var u = a;
                    break e;
                  }
                }
                u = null;
              }
              if (n = u)
                ln(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"), this.K = !0, ro(this, n);
              else {
                this.i = !1, this.s = 3, Gt(12), qe(this), zn(this);
                break t;
              }
            }
            this.S ? (Fl(this, l, o), Qs && this.i && l == 3 && (Cl(this.U, this.V, "tick", this.mb), this.V.start())) : (ln(this.j, this.m, o, null), ro(this, o)), l == 4 && qe(this), this.i && !this.J && (l == 4 ? ah(this.l, this) : (this.i = !1, Tr(this)));
          } else
            ky(this.g), n == 400 && 0 < o.indexOf("Unknown SID") ? (this.s = 3, Gt(12)) : (this.s = 0, Gt(13)), qe(this), zn(this);
        }
      }
  } catch {
  } finally {
  }
};
function Ll(e) {
  return e.g ? e.v == "GET" && e.L != 2 && e.l.Ha : !1;
}
function Fl(e, t, n) {
  let r = !0, i;
  for (; !e.J && e.o < n.length; )
    if (i = py(e, n), i == eo) {
      t == 4 && (e.s = 4, Gt(14), r = !1), ln(e.j, e.m, null, "[Incomplete Response]");
      break;
    } else if (i == Ol) {
      e.s = 4, Gt(15), ln(e.j, e.m, n, "[Invalid Chunk]"), r = !1;
      break;
    } else
      ln(e.j, e.m, i, null), ro(e, i);
  Ll(e) && e.o != 0 && (e.h.g = e.h.g.slice(e.o), e.o = 0), t != 4 || n.length != 0 || e.h.h || (e.s = 1, Gt(16), r = !1), e.i = e.i && r, r ? 0 < n.length && !e.ba && (e.ba = !0, t = e.l, t.g == e && t.ca && !t.M && (t.l.info("Great, no buffering proxy detected. Bytes received: " + n.length), ra(t), t.M = !0, Gt(11))) : (ln(
    e.j,
    e.m,
    n,
    "[Invalid Chunked Response]"
  ), qe(e), zn(e));
}
C.mb = function() {
  if (this.g) {
    var e = ce(this.g), t = this.g.ja();
    this.o < t.length && (Li(this), Fl(this, e, t), this.i && e != 4 && Tr(this));
  }
};
function py(e, t) {
  var n = e.o, r = t.indexOf(`
`, n);
  return r == -1 ? eo : (n = Number(t.substring(n, r)), isNaN(n) ? Ol : (r += 1, r + n > t.length ? eo : (t = t.slice(r, r + n), e.o = r + n, t)));
}
C.cancel = function() {
  this.J = !0, qe(this);
};
function Tr(e) {
  e.Y = Date.now() + e.P, $l(e, e.P);
}
function $l(e, t) {
  if (e.C != null)
    throw Error("WatchDog timer not null");
  e.C = vr(Ut(e.lb, e), t);
}
function Li(e) {
  e.C && ($.clearTimeout(e.C), e.C = null);
}
C.lb = function() {
  this.C = null;
  const e = Date.now();
  0 <= e - this.Y ? (hy(this.j, this.B), this.L != 2 && (ir(), Gt(17)), qe(this), this.s = 2, zn(this)) : $l(this, this.Y - e);
};
function zn(e) {
  e.l.H == 0 || e.J || ah(e.l, e);
}
function qe(e) {
  Li(e);
  var t = e.M;
  t && typeof t.sa == "function" && t.sa(), e.M = null, Ho(e.V), bl(e.U), e.g && (t = e.g, e.g = null, t.abort(), t.sa());
}
function ro(e, t) {
  try {
    var n = e.l;
    if (n.H != 0 && (n.g == e || io(n.i, e))) {
      if (!e.K && io(n.i, e) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(t);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            t:
              if (!n.u) {
                if (n.g)
                  if (n.g.G + 3e3 < e.G)
                    li(n), ji(n);
                  else
                    break t;
                na(n), Gt(18);
              }
          } else
            n.Fa = i[1], 0 < n.Fa - n.V && 37500 > i[2] && n.G && n.A == 0 && !n.v && (n.v = vr(Ut(n.ib, n), 6e3));
          if (1 >= Hl(n.i) && n.oa) {
            try {
              n.oa();
            } catch {
            }
            n.oa = void 0;
          }
        } else
          ze(n, 11);
      } else if ((e.K || n.g == e) && li(n), !Zn(t))
        for (i = n.Ja.g.parse(t), t = 0; t < i.length; t++) {
          let u = i[t];
          if (n.V = u[0], u = u[1], n.H == 2)
            if (u[0] == "c") {
              n.K = u[1], n.pa = u[2];
              const l = u[3];
              l != null && (n.ra = l, n.l.info("VER=" + n.ra));
              const h = u[4];
              h != null && (n.Ga = h, n.l.info("SVER=" + n.Ga));
              const d = u[5];
              d != null && typeof d == "number" && 0 < d && (r = 1.5 * d, n.L = r, n.l.info("backChannelRequestTimeoutMs_=" + r)), r = n;
              const p = e.g;
              if (p) {
                const y = p.g ? p.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (y) {
                  var s = r.i;
                  s.g || y.indexOf("spdy") == -1 && y.indexOf("quic") == -1 && y.indexOf("h2") == -1 || (s.j = s.l, s.g = /* @__PURE__ */ new Set(), s.h && (Jo(s, s.h), s.h = null));
                }
                if (r.F) {
                  const E = p.g ? p.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  E && (r.Da = E, at(r.I, r.F, E));
                }
              }
              n.H = 3, n.h && n.h.Ba(), n.ca && (n.S = Date.now() - e.G, n.l.info("Handshake RTT: " + n.S + "ms")), r = n;
              var o = e;
              if (r.wa = lh(r, r.J ? r.pa : null, r.Y), o.K) {
                Kl(r.i, o);
                var a = o, c = r.L;
                c && a.setTimeout(c), a.C && (Li(a), Tr(a)), r.g = o;
              } else
                sh(r);
              0 < n.j.length && qi(n);
            } else
              u[0] != "stop" && u[0] != "close" || ze(n, 7);
          else
            n.H == 3 && (u[0] == "stop" || u[0] == "close" ? u[0] == "stop" ? ze(n, 7) : ea(n) : u[0] != "noop" && n.h && n.h.Aa(u), n.A = 0);
        }
    }
    ir(4);
  } catch {
  }
}
function my(e) {
  if (e.Z && typeof e.Z == "function")
    return e.Z();
  if (typeof Map < "u" && e instanceof Map || typeof Set < "u" && e instanceof Set)
    return Array.from(e.values());
  if (typeof e == "string")
    return e.split("");
  if (bi(e)) {
    for (var t = [], n = e.length, r = 0; r < n; r++)
      t.push(e[r]);
    return t;
  }
  t = [], n = 0;
  for (r in e)
    t[n++] = e[r];
  return t;
}
function gy(e) {
  if (e.ta && typeof e.ta == "function")
    return e.ta();
  if (!e.Z || typeof e.Z != "function") {
    if (typeof Map < "u" && e instanceof Map)
      return Array.from(e.keys());
    if (!(typeof Set < "u" && e instanceof Set)) {
      if (bi(e) || typeof e == "string") {
        var t = [];
        e = e.length;
        for (var n = 0; n < e; n++)
          t.push(n);
        return t;
      }
      t = [], n = 0;
      for (const r in e)
        t[n++] = r;
      return t;
    }
  }
}
function Ul(e, t) {
  if (e.forEach && typeof e.forEach == "function")
    e.forEach(t, void 0);
  else if (bi(e) || typeof e == "string")
    Array.prototype.forEach.call(e, t, void 0);
  else
    for (var n = gy(e), r = my(e), i = r.length, s = 0; s < i; s++)
      t.call(void 0, r[s], n && n[s], e);
}
var Bl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function yy(e, t) {
  if (e) {
    e = e.split("&");
    for (var n = 0; n < e.length; n++) {
      var r = e[n].indexOf("="), i = null;
      if (0 <= r) {
        var s = e[n].substring(0, r);
        i = e[n].substring(r + 1);
      } else
        s = e[n];
      t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function Ke(e) {
  if (this.g = this.s = this.j = "", this.m = null, this.o = this.l = "", this.h = !1, e instanceof Ke) {
    this.h = e.h, ci(this, e.j), this.s = e.s, this.g = e.g, ui(this, e.m), this.l = e.l;
    var t = e.i, n = new sr();
    n.i = t.i, t.g && (n.g = new Map(t.g), n.h = t.h), Ic(this, n), this.o = e.o;
  } else
    e && (t = String(e).match(Bl)) ? (this.h = !1, ci(this, t[1] || "", !0), this.s = $n(t[2] || ""), this.g = $n(t[3] || "", !0), ui(this, t[4]), this.l = $n(t[5] || "", !0), Ic(this, t[6] || "", !0), this.o = $n(t[7] || "")) : (this.h = !1, this.i = new sr(null, this.h));
}
Ke.prototype.toString = function() {
  var e = [], t = this.j;
  t && e.push(Un(t, Ac, !0), ":");
  var n = this.g;
  return (n || t == "file") && (e.push("//"), (t = this.s) && e.push(Un(t, Ac, !0), "@"), e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n = this.m, n != null && e.push(":", String(n))), (n = this.l) && (this.g && n.charAt(0) != "/" && e.push("/"), e.push(Un(n, n.charAt(0) == "/" ? Ey : vy, !0))), (n = this.i.toString()) && e.push("?", n), (n = this.o) && e.push("#", Un(n, Ty)), e.join("");
};
function Te(e) {
  return new Ke(e);
}
function ci(e, t, n) {
  e.j = n ? $n(t, !0) : t, e.j && (e.j = e.j.replace(/:$/, ""));
}
function ui(e, t) {
  if (t) {
    if (t = Number(t), isNaN(t) || 0 > t)
      throw Error("Bad port number " + t);
    e.m = t;
  } else
    e.m = null;
}
function Ic(e, t, n) {
  t instanceof sr ? (e.i = t, Iy(e.i, e.h)) : (n || (t = Un(t, wy)), e.i = new sr(t, e.h));
}
function at(e, t, n) {
  e.i.set(t, n);
}
function Fi(e) {
  return at(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), e;
}
function $n(e, t) {
  return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : "";
}
function Un(e, t, n) {
  return typeof e == "string" ? (e = encodeURI(e).replace(t, _y), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e) : null;
}
function _y(e) {
  return e = e.charCodeAt(0), "%" + (e >> 4 & 15).toString(16) + (e & 15).toString(16);
}
var Ac = /[#\/\?@]/g, vy = /[#\?:]/g, Ey = /[#\?]/g, wy = /[#\?@]/g, Ty = /#/g;
function sr(e, t) {
  this.h = this.g = null, this.i = e || null, this.j = !!t;
}
function Fe(e) {
  e.g || (e.g = /* @__PURE__ */ new Map(), e.h = 0, e.i && yy(e.i, function(t, n) {
    e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
  }));
}
C = sr.prototype;
C.add = function(e, t) {
  Fe(this), this.i = null, e = bn(this, e);
  var n = this.g.get(e);
  return n || this.g.set(e, n = []), n.push(t), this.h += 1, this;
};
function jl(e, t) {
  Fe(e), t = bn(e, t), e.g.has(t) && (e.i = null, e.h -= e.g.get(t).length, e.g.delete(t));
}
function ql(e, t) {
  return Fe(e), t = bn(e, t), e.g.has(t);
}
C.forEach = function(e, t) {
  Fe(this), this.g.forEach(function(n, r) {
    n.forEach(function(i) {
      e.call(t, i, r, this);
    }, this);
  }, this);
};
C.ta = function() {
  Fe(this);
  const e = Array.from(this.g.values()), t = Array.from(this.g.keys()), n = [];
  for (let r = 0; r < t.length; r++) {
    const i = e[r];
    for (let s = 0; s < i.length; s++)
      n.push(t[r]);
  }
  return n;
};
C.Z = function(e) {
  Fe(this);
  let t = [];
  if (typeof e == "string")
    ql(this, e) && (t = t.concat(this.g.get(bn(this, e))));
  else {
    e = Array.from(this.g.values());
    for (let n = 0; n < e.length; n++)
      t = t.concat(e[n]);
  }
  return t;
};
C.set = function(e, t) {
  return Fe(this), this.i = null, e = bn(this, e), ql(this, e) && (this.h -= this.g.get(e).length), this.g.set(e, [t]), this.h += 1, this;
};
C.get = function(e, t) {
  return e ? (e = this.Z(e), 0 < e.length ? String(e[0]) : t) : t;
};
function zl(e, t, n) {
  jl(e, t), 0 < n.length && (e.i = null, e.g.set(bn(e, t), Fo(n)), e.h += n.length);
}
C.toString = function() {
  if (this.i)
    return this.i;
  if (!this.g)
    return "";
  const e = [], t = Array.from(this.g.keys());
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    const s = encodeURIComponent(String(r)), o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), e.push(i);
    }
  }
  return this.i = e.join("&");
};
function bn(e, t) {
  return t = String(t), e.j && (t = t.toLowerCase()), t;
}
function Iy(e, t) {
  t && !e.j && (Fe(e), e.i = null, e.g.forEach(function(n, r) {
    var i = r.toLowerCase();
    r != i && (jl(this, r), zl(this, i, n));
  }, e)), e.j = t;
}
var Ay = class {
  constructor(e, t) {
    this.g = e, this.map = t;
  }
};
function Gl(e) {
  this.l = e || Sy, $.PerformanceNavigationTiming ? (e = $.performance.getEntriesByType("navigation"), e = 0 < e.length && (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")) : e = !!($.g && $.g.Ka && $.g.Ka() && $.g.Ka().dc), this.j = e ? this.l : 1, this.g = null, 1 < this.j && (this.g = /* @__PURE__ */ new Set()), this.h = null, this.i = [];
}
var Sy = 10;
function Wl(e) {
  return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
}
function Hl(e) {
  return e.h ? 1 : e.g ? e.g.size : 0;
}
function io(e, t) {
  return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
}
function Jo(e, t) {
  e.g ? e.g.add(t) : e.h = t;
}
function Kl(e, t) {
  e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t);
}
Gl.prototype.cancel = function() {
  if (this.i = Ql(this), this.h)
    this.h.cancel(), this.h = null;
  else if (this.g && this.g.size !== 0) {
    for (const e of this.g.values())
      e.cancel();
    this.g.clear();
  }
};
function Ql(e) {
  if (e.h != null)
    return e.i.concat(e.h.F);
  if (e.g != null && e.g.size !== 0) {
    let t = e.i;
    for (const n of e.g.values())
      t = t.concat(n.F);
    return t;
  }
  return Fo(e.i);
}
var Ry = class {
  stringify(e) {
    return $.JSON.stringify(e, void 0);
  }
  parse(e) {
    return $.JSON.parse(e, void 0);
  }
};
function Cy() {
  this.g = new Ry();
}
function by(e, t, n) {
  const r = n || "";
  try {
    Ul(e, function(i, s) {
      let o = i;
      yr(i) && (o = Go(i)), t.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw t.push(r + "type=" + encodeURIComponent("_badmap")), i;
  }
}
function Py(e, t) {
  const n = new Ni();
  if ($.Image) {
    const r = new Image();
    r.onload = $r(Br, n, r, "TestLoadImage: loaded", !0, t), r.onerror = $r(Br, n, r, "TestLoadImage: error", !1, t), r.onabort = $r(Br, n, r, "TestLoadImage: abort", !1, t), r.ontimeout = $r(Br, n, r, "TestLoadImage: timeout", !1, t), $.setTimeout(function() {
      r.ontimeout && r.ontimeout();
    }, 1e4), r.src = e;
  } else
    t(!1);
}
function Br(e, t, n, r, i) {
  try {
    t.onload = null, t.onerror = null, t.onabort = null, t.ontimeout = null, i(r);
  } catch {
  }
}
function $i(e) {
  this.l = e.ec || null, this.j = e.ob || !1;
}
Ct($i, Qo);
$i.prototype.g = function() {
  return new Ui(this.l, this.j);
};
$i.prototype.i = /* @__PURE__ */ function(e) {
  return function() {
    return e;
  };
}({});
function Ui(e, t) {
  Rt.call(this), this.F = e, this.u = t, this.m = void 0, this.readyState = Zo, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.v = new Headers(), this.h = null, this.C = "GET", this.B = "", this.g = !1, this.A = this.j = this.l = null;
}
Ct(Ui, Rt);
var Zo = 0;
C = Ui.prototype;
C.open = function(e, t) {
  if (this.readyState != Zo)
    throw this.abort(), Error("Error reopening a connection");
  this.C = e, this.B = t, this.readyState = 1, or(this);
};
C.send = function(e) {
  if (this.readyState != 1)
    throw this.abort(), Error("need to call open() first. ");
  this.g = !0;
  const t = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  e && (t.body = e), (this.F || $).fetch(new Request(this.B, t)).then(this.$a.bind(this), this.ka.bind(this));
};
C.abort = function() {
  this.response = this.responseText = "", this.v = new Headers(), this.status = 0, this.j && this.j.cancel("Request was aborted.").catch(() => {
  }), 1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1, Ir(this)), this.readyState = Zo;
};
C.$a = function(e) {
  if (this.g && (this.l = e, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = e.headers, this.readyState = 2, or(this)), this.g && (this.readyState = 3, or(this), this.g)))
    if (this.responseType === "arraybuffer")
      e.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof $.ReadableStream < "u" && "body" in e) {
      if (this.j = e.body.getReader(), this.u) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else
        this.response = this.responseText = "", this.A = new TextDecoder();
      Yl(this);
    } else
      e.text().then(this.Za.bind(this), this.ka.bind(this));
};
function Yl(e) {
  e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e));
}
C.Xa = function(e) {
  if (this.g) {
    if (this.u && e.value)
      this.response.push(e.value);
    else if (!this.u) {
      var t = e.value ? e.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !e.done })) && (this.response = this.responseText += t);
    }
    e.done ? Ir(this) : or(this), this.readyState == 3 && Yl(this);
  }
};
C.Za = function(e) {
  this.g && (this.response = this.responseText = e, Ir(this));
};
C.Ya = function(e) {
  this.g && (this.response = e, Ir(this));
};
C.ka = function() {
  this.g && Ir(this);
};
function Ir(e) {
  e.readyState = 4, e.l = null, e.j = null, e.A = null, or(e);
}
C.setRequestHeader = function(e, t) {
  this.v.append(e, t);
};
C.getResponseHeader = function(e) {
  return this.h && this.h.get(e.toLowerCase()) || "";
};
C.getAllResponseHeaders = function() {
  if (!this.h)
    return "";
  const e = [], t = this.h.entries();
  for (var n = t.next(); !n.done; )
    n = n.value, e.push(n[0] + ": " + n[1]), n = t.next();
  return e.join(`\r
`);
};
function or(e) {
  e.onreadystatechange && e.onreadystatechange.call(e);
}
Object.defineProperty(Ui.prototype, "withCredentials", { get: function() {
  return this.m === "include";
}, set: function(e) {
  this.m = e ? "include" : "same-origin";
} });
var Vy = $.JSON.parse;
function ht(e) {
  Rt.call(this), this.headers = /* @__PURE__ */ new Map(), this.u = e || null, this.h = !1, this.C = this.g = null, this.I = "", this.m = 0, this.j = "", this.l = this.G = this.v = this.F = !1, this.B = 0, this.A = null, this.K = Xl, this.L = this.M = !1;
}
Ct(ht, Rt);
var Xl = "", Dy = /^https?$/i, xy = ["POST", "PUT"];
C = ht.prototype;
C.Oa = function(e) {
  this.M = e;
};
C.ha = function(e, t, n, r) {
  if (this.g)
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + e);
  t = t ? t.toUpperCase() : "GET", this.I = e, this.j = "", this.m = 0, this.F = !1, this.h = !0, this.g = this.u ? this.u.g() : to.g(), this.C = this.u ? Tc(this.u) : Tc(to), this.g.onreadystatechange = Ut(this.La, this);
  try {
    this.G = !0, this.g.open(t, String(e), !0), this.G = !1;
  } catch (s) {
    Sc(this, s);
    return;
  }
  if (e = n || "", n = new Map(this.headers), r)
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r)
        n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys())
        n.set(s, r.get(s));
    else
      throw Error("Unknown input type for opt_headers: " + String(r));
  r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type"), i = $.FormData && e instanceof $.FormData, !(0 <= fl(xy, t)) || r || i || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n)
    this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K), "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
  try {
    th(this), 0 < this.B && ((this.L = Ny(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = Ut(this.ua, this)) : this.A = Ko(this.ua, this.B, this)), this.v = !0, this.g.send(e), this.v = !1;
  } catch (s) {
    Sc(this, s);
  }
};
function Ny(e) {
  return _n && typeof e.timeout == "number" && e.ontimeout !== void 0;
}
C.ua = function() {
  typeof Lo < "u" && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, kt(this, "timeout"), this.abort(8));
};
function Sc(e, t) {
  e.h = !1, e.g && (e.l = !0, e.g.abort(), e.l = !1), e.j = t, e.m = 5, Jl(e), Bi(e);
}
function Jl(e) {
  e.F || (e.F = !0, kt(e, "complete"), kt(e, "error"));
}
C.abort = function(e) {
  this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.m = e || 7, kt(this, "complete"), kt(this, "abort"), Bi(this));
};
C.N = function() {
  this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Bi(this, !0)), ht.$.N.call(this);
};
C.La = function() {
  this.s || (this.G || this.v || this.l ? Zl(this) : this.kb());
};
C.kb = function() {
  Zl(this);
};
function Zl(e) {
  if (e.h && typeof Lo < "u" && (!e.C[1] || ce(e) != 4 || e.da() != 2)) {
    if (e.v && ce(e) == 4)
      Ko(e.La, 0, e);
    else if (kt(e, "readystatechange"), ce(e) == 4) {
      e.h = !1;
      try {
        const o = e.da();
        t:
          switch (o) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var t = !0;
              break t;
            default:
              t = !1;
          }
        var n;
        if (!(n = t)) {
          var r;
          if (r = o === 0) {
            var i = String(e.I).match(Bl)[1] || null;
            !i && $.self && $.self.location && (i = $.self.location.protocol.slice(0, -1)), r = !Dy.test(i ? i.toLowerCase() : "");
          }
          n = r;
        }
        if (n)
          kt(e, "complete"), kt(e, "success");
        else {
          e.m = 6;
          try {
            var s = 2 < ce(e) ? e.g.statusText : "";
          } catch {
            s = "";
          }
          e.j = s + " [" + e.da() + "]", Jl(e);
        }
      } finally {
        Bi(e);
      }
    }
  }
}
function Bi(e, t) {
  if (e.g) {
    th(e);
    const n = e.g, r = e.C[0] ? () => {
    } : null;
    e.g = null, e.C = null, t || kt(e, "ready");
    try {
      n.onreadystatechange = r;
    } catch {
    }
  }
}
function th(e) {
  e.g && e.L && (e.g.ontimeout = null), e.A && ($.clearTimeout(e.A), e.A = null);
}
C.isActive = function() {
  return !!this.g;
};
function ce(e) {
  return e.g ? e.g.readyState : 0;
}
C.da = function() {
  try {
    return 2 < ce(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
C.ja = function() {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
C.Wa = function(e) {
  if (this.g) {
    var t = this.g.responseText;
    return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), Vy(t);
  }
};
function Rc(e) {
  try {
    if (!e.g)
      return null;
    if ("response" in e.g)
      return e.g.response;
    switch (e.K) {
      case Xl:
      case "text":
        return e.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in e.g)
          return e.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function ky(e) {
  const t = {};
  e = (e.g && 2 <= ce(e) && e.g.getAllResponseHeaders() || "").split(`\r
`);
  for (let r = 0; r < e.length; r++) {
    if (Zn(e[r]))
      continue;
    var n = sy(e[r]);
    const i = n[0];
    if (n = n[1], typeof n != "string")
      continue;
    n = n.trim();
    const s = t[i] || [];
    t[i] = s, s.push(n);
  }
  Jg(t, function(r) {
    return r.join(", ");
  });
}
C.Ia = function() {
  return this.m;
};
C.Sa = function() {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function eh(e) {
  let t = "";
  return Uo(e, function(n, r) {
    t += r, t += ":", t += n, t += `\r
`;
  }), t;
}
function ta(e, t, n) {
  t: {
    for (r in n) {
      var r = !1;
      break t;
    }
    r = !0;
  }
  r || (n = eh(n), typeof e == "string" ? n != null && encodeURIComponent(String(n)) : at(e, t, n));
}
function Mn(e, t, n) {
  return n && n.internalChannelParams && n.internalChannelParams[e] || t;
}
function nh(e) {
  this.Ga = 0, this.j = [], this.l = new Ni(), this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null, this.fb = this.W = 0, this.cb = Mn("failFast", !1, e), this.G = this.v = this.u = this.m = this.h = null, this.aa = !0, this.Fa = this.V = -1, this.ba = this.A = this.C = 0, this.ab = Mn("baseRetryDelayMs", 5e3, e), this.hb = Mn("retryDelaySeedMs", 1e4, e), this.eb = Mn("forwardChannelMaxRetries", 2, e), this.xa = Mn("forwardChannelRequestTimeoutMs", 2e4, e), this.va = e && e.xmlHttpFactory || void 0, this.Ha = e && e.useFetchStreams || !1, this.L = void 0, this.J = e && e.supportsCrossDomainXhr || !1, this.K = "", this.i = new Gl(e && e.concurrentRequestLimit), this.Ja = new Cy(), this.P = e && e.fastHandshake || !1, this.O = e && e.encodeInitMessageHeaders || !1, this.P && this.O && (this.O = !1), this.bb = e && e.bc || !1, e && e.Ea && this.l.Ea(), e && e.forceLongPolling && (this.aa = !1), this.ca = !this.P && this.aa && e && e.detectBufferingProxy || !1, this.qa = void 0, e && e.longPollingTimeout && 0 < e.longPollingTimeout && (this.qa = e.longPollingTimeout), this.oa = void 0, this.S = 0, this.M = !1, this.ma = this.B = null;
}
C = nh.prototype;
C.ra = 8;
C.H = 1;
function ea(e) {
  if (rh(e), e.H == 3) {
    var t = e.W++, n = Te(e.I);
    if (at(n, "SID", e.K), at(n, "RID", t), at(n, "TYPE", "terminate"), Ar(e, n), t = new wr(e, e.l, t), t.L = 2, t.A = Fi(Te(n)), n = !1, $.navigator && $.navigator.sendBeacon)
      try {
        n = $.navigator.sendBeacon(t.A.toString(), "");
      } catch {
      }
    !n && $.Image && (new Image().src = t.A, n = !0), n || (t.g = hh(t.l, null), t.g.ha(t.A)), t.G = Date.now(), Tr(t);
  }
  uh(e);
}
function ji(e) {
  e.g && (ra(e), e.g.cancel(), e.g = null);
}
function rh(e) {
  ji(e), e.u && ($.clearTimeout(e.u), e.u = null), li(e), e.i.cancel(), e.m && (typeof e.m == "number" && $.clearTimeout(e.m), e.m = null);
}
function qi(e) {
  if (!Wl(e.i) && !e.m) {
    e.m = !0;
    var t = e.Na;
    er || Sl(), nr || (er(), nr = !0), Wo.add(t, e), e.C = 0;
  }
}
function Oy(e, t) {
  return Hl(e.i) >= e.i.j - (e.m ? 1 : 0) ? !1 : e.m ? (e.j = t.F.concat(e.j), !0) : e.H == 1 || e.H == 2 || e.C >= (e.cb ? 0 : e.eb) ? !1 : (e.m = vr(Ut(e.Na, e, t), ch(e, e.C)), e.C++, !0);
}
C.Na = function(e) {
  if (this.m)
    if (this.m = null, this.H == 1) {
      if (!e) {
        this.W = Math.floor(1e5 * Math.random()), e = this.W++;
        const i = new wr(this, this.l, e);
        let s = this.s;
        if (this.U && (s ? (s = yl(s), _l(s, this.U)) : s = this.U), this.o !== null || this.O || (i.I = s, s = null), this.P)
          t: {
            for (var t = 0, n = 0; n < this.j.length; n++) {
              e: {
                var r = this.j[n];
                if ("__data__" in r.map && (r = r.map.__data__, typeof r == "string")) {
                  r = r.length;
                  break e;
                }
                r = void 0;
              }
              if (r === void 0)
                break;
              if (t += r, 4096 < t) {
                t = n;
                break t;
              }
              if (t === 4096 || n === this.j.length - 1) {
                t = n + 1;
                break t;
              }
            }
            t = 1e3;
          }
        else
          t = 1e3;
        t = ih(this, i, t), n = Te(this.I), at(n, "RID", e), at(n, "CVER", 22), this.F && at(n, "X-HTTP-Session-Id", this.F), Ar(this, n), s && (this.O ? t = "headers=" + encodeURIComponent(String(eh(s))) + "&" + t : this.o && ta(n, this.o, s)), Jo(this.i, i), this.bb && at(n, "TYPE", "init"), this.P ? (at(n, "$req", t), at(n, "SID", "null"), i.aa = !0, no(i, n, null)) : no(i, n, t), this.H = 2;
      }
    } else
      this.H == 3 && (e ? Cc(this, e) : this.j.length == 0 || Wl(this.i) || Cc(this));
};
function Cc(e, t) {
  var n;
  t ? n = t.m : n = e.W++;
  const r = Te(e.I);
  at(r, "SID", e.K), at(r, "RID", n), at(r, "AID", e.V), Ar(e, r), e.o && e.s && ta(r, e.o, e.s), n = new wr(e, e.l, n, e.C + 1), e.o === null && (n.I = e.s), t && (e.j = t.F.concat(e.j)), t = ih(e, n, 1e3), n.setTimeout(Math.round(0.5 * e.xa) + Math.round(0.5 * e.xa * Math.random())), Jo(e.i, n), no(n, r, t);
}
function Ar(e, t) {
  e.na && Uo(e.na, function(n, r) {
    at(t, r, n);
  }), e.h && Ul({}, function(n, r) {
    at(t, r, n);
  });
}
function ih(e, t, n) {
  n = Math.min(e.j.length, n);
  var r = e.h ? Ut(e.h.Va, e.h, e) : null;
  t: {
    var i = e.j;
    let s = -1;
    for (; ; ) {
      const o = ["count=" + n];
      s == -1 ? 0 < n ? (s = i[0].g, o.push("ofs=" + s)) : s = 0 : o.push("ofs=" + s);
      let a = !0;
      for (let c = 0; c < n; c++) {
        let u = i[c].g;
        const l = i[c].map;
        if (u -= s, 0 > u)
          s = Math.max(0, i[c].g - 100), a = !1;
        else
          try {
            by(l, o, "req" + u + "_");
          } catch {
            r && r(l);
          }
      }
      if (a) {
        r = o.join("&");
        break t;
      }
    }
  }
  return e = e.j.splice(0, n), t.F = e, r;
}
function sh(e) {
  if (!e.g && !e.u) {
    e.ba = 1;
    var t = e.Ma;
    er || Sl(), nr || (er(), nr = !0), Wo.add(t, e), e.A = 0;
  }
}
function na(e) {
  return e.g || e.u || 3 <= e.A ? !1 : (e.ba++, e.u = vr(Ut(e.Ma, e), ch(e, e.A)), e.A++, !0);
}
C.Ma = function() {
  if (this.u = null, oh(this), this.ca && !(this.M || this.g == null || 0 >= this.S)) {
    var e = 2 * this.S;
    this.l.info("BP detection timer enabled: " + e), this.B = vr(Ut(this.jb, this), e);
  }
};
C.jb = function() {
  this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = !1, this.M = !0, Gt(10), ji(this), oh(this));
};
function ra(e) {
  e.B != null && ($.clearTimeout(e.B), e.B = null);
}
function oh(e) {
  e.g = new wr(e, e.l, "rpc", e.ba), e.o === null && (e.g.I = e.s), e.g.O = 0;
  var t = Te(e.wa);
  at(t, "RID", "rpc"), at(t, "SID", e.K), at(t, "AID", e.V), at(t, "CI", e.G ? "0" : "1"), !e.G && e.qa && at(t, "TO", e.qa), at(t, "TYPE", "xmlhttp"), Ar(e, t), e.o && e.s && ta(t, e.o, e.s), e.L && e.g.setTimeout(e.L);
  var n = e.g;
  e = e.pa, n.L = 1, n.A = Fi(Te(t)), n.u = null, n.S = !0, Ml(n, e);
}
C.ib = function() {
  this.v != null && (this.v = null, ji(this), na(this), Gt(19));
};
function li(e) {
  e.v != null && ($.clearTimeout(e.v), e.v = null);
}
function ah(e, t) {
  var n = null;
  if (e.g == t) {
    li(e), ra(e), e.g = null;
    var r = 2;
  } else if (io(e.i, t))
    n = t.F, Kl(e.i, t), r = 1;
  else
    return;
  if (e.H != 0) {
    if (t.i)
      if (r == 1) {
        n = t.u ? t.u.length : 0, t = Date.now() - t.G;
        var i = e.C;
        r = ki(), kt(r, new Dl(r, n)), qi(e);
      } else
        sh(e);
    else if (i = t.s, i == 3 || i == 0 && 0 < t.ca || !(r == 1 && Oy(e, t) || r == 2 && na(e)))
      switch (n && 0 < n.length && (t = e.i, t.i = t.i.concat(n)), i) {
        case 1:
          ze(e, 5);
          break;
        case 4:
          ze(e, 10);
          break;
        case 3:
          ze(e, 6);
          break;
        default:
          ze(e, 2);
      }
  }
}
function ch(e, t) {
  let n = e.ab + Math.floor(Math.random() * e.hb);
  return e.isActive() || (n *= 2), n * t;
}
function ze(e, t) {
  if (e.l.info("Error code " + t), t == 2) {
    var n = null;
    e.h && (n = null);
    var r = Ut(e.pb, e);
    n || (n = new Ke("//www.google.com/images/cleardot.gif"), $.location && $.location.protocol == "http" || ci(n, "https"), Fi(n)), Py(n.toString(), r);
  } else
    Gt(2);
  e.H = 0, e.h && e.h.za(t), uh(e), rh(e);
}
C.pb = function(e) {
  e ? (this.l.info("Successfully pinged google.com"), Gt(2)) : (this.l.info("Failed to ping google.com"), Gt(1));
};
function uh(e) {
  if (e.H = 0, e.ma = [], e.h) {
    const t = Ql(e.i);
    (t.length != 0 || e.j.length != 0) && (yc(e.ma, t), yc(e.ma, e.j), e.i.i.length = 0, Fo(e.j), e.j.length = 0), e.h.ya();
  }
}
function lh(e, t, n) {
  var r = n instanceof Ke ? Te(n) : new Ke(n);
  if (r.g != "")
    t && (r.g = t + "." + r.g), ui(r, r.m);
  else {
    var i = $.location;
    r = i.protocol, t = t ? t + "." + i.hostname : i.hostname, i = +i.port;
    var s = new Ke(null);
    r && ci(s, r), t && (s.g = t), i && ui(s, i), n && (s.l = n), r = s;
  }
  return n = e.F, t = e.Da, n && t && at(r, n, t), at(r, "VER", e.ra), Ar(e, r), r;
}
function hh(e, t, n) {
  if (t && !e.J)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return t = e.Ha && !e.va ? new ht(new $i({ ob: n })) : new ht(e.va), t.Oa(e.J), t;
}
C.isActive = function() {
  return !!this.h && this.h.isActive(this);
};
function dh() {
}
C = dh.prototype;
C.Ba = function() {
};
C.Aa = function() {
};
C.za = function() {
};
C.ya = function() {
};
C.isActive = function() {
  return !0;
};
C.Va = function() {
};
function hi() {
  if (_n && !(10 <= Number(Kg)))
    throw Error("Environmental error: no available transport.");
}
hi.prototype.g = function(e, t) {
  return new Jt(e, t);
};
function Jt(e, t) {
  Rt.call(this), this.g = new nh(t), this.l = e, this.h = t && t.messageUrlParams || null, e = t && t.messageHeaders || null, t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = { "X-Client-Protocol": "webchannel" }), this.g.s = e, e = t && t.initMessageHeaders || null, t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = { "X-WebChannel-Content-Type": t.messageContentType }), t && t.Ca && (e ? e["X-WebChannel-Client-Profile"] = t.Ca : e = { "X-WebChannel-Client-Profile": t.Ca }), this.g.U = e, (e = t && t.cc) && !Zn(e) && (this.g.o = e), this.A = t && t.supportsCrossDomainXhr || !1, this.v = t && t.sendRawJson || !1, (t = t && t.httpSessionIdParam) && !Zn(t) && (this.g.F = t, e = this.h, e !== null && t in e && (e = this.h, t in e && delete e[t])), this.j = new Pn(this);
}
Ct(Jt, Rt);
Jt.prototype.m = function() {
  this.g.h = this.j, this.A && (this.g.J = !0);
  var e = this.g, t = this.l, n = this.h || void 0;
  Gt(0), e.Y = t, e.na = n || {}, e.G = e.aa, e.I = lh(e, null, e.Y), qi(e);
};
Jt.prototype.close = function() {
  ea(this.g);
};
Jt.prototype.u = function(e) {
  var t = this.g;
  if (typeof e == "string") {
    var n = {};
    n.__data__ = e, e = n;
  } else
    this.v && (n = {}, n.__data__ = Go(e), e = n);
  t.j.push(new Ay(t.fb++, e)), t.H == 3 && qi(t);
};
Jt.prototype.N = function() {
  this.g.h = null, delete this.j, ea(this.g), delete this.g, Jt.$.N.call(this);
};
function fh(e) {
  Yo.call(this), e.__headers__ && (this.headers = e.__headers__, this.statusCode = e.__status__, delete e.__headers__, delete e.__status__);
  var t = e.__sm__;
  if (t) {
    t: {
      for (const n in t) {
        e = n;
        break t;
      }
      e = void 0;
    }
    (this.i = e) && (e = this.i, t = t !== null && e in t ? t[e] : void 0), this.data = t;
  } else
    this.data = e;
}
Ct(fh, Yo);
function ph() {
  Xo.call(this), this.status = 1;
}
Ct(ph, Xo);
function Pn(e) {
  this.g = e;
}
Ct(Pn, dh);
Pn.prototype.Ba = function() {
  kt(this.g, "a");
};
Pn.prototype.Aa = function(e) {
  kt(this.g, new fh(e));
};
Pn.prototype.za = function(e) {
  kt(this.g, new ph());
};
Pn.prototype.ya = function() {
  kt(this.g, "b");
};
function My() {
  this.blockSize = -1;
}
function ie() {
  this.blockSize = -1, this.blockSize = 64, this.g = Array(4), this.m = Array(this.blockSize), this.i = this.h = 0, this.reset();
}
Ct(ie, My);
ie.prototype.reset = function() {
  this.g[0] = 1732584193, this.g[1] = 4023233417, this.g[2] = 2562383102, this.g[3] = 271733878, this.i = this.h = 0;
};
function As(e, t, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof t == "string")
    for (var i = 0; 16 > i; ++i)
      r[i] = t.charCodeAt(n++) | t.charCodeAt(n++) << 8 | t.charCodeAt(n++) << 16 | t.charCodeAt(n++) << 24;
  else
    for (i = 0; 16 > i; ++i)
      r[i] = t[n++] | t[n++] << 8 | t[n++] << 16 | t[n++] << 24;
  t = e.g[0], n = e.g[1], i = e.g[2];
  var s = e.g[3], o = t + (s ^ n & (i ^ s)) + r[0] + 3614090360 & 4294967295;
  t = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ t & (n ^ i)) + r[1] + 3905402710 & 4294967295, s = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (t ^ n)) + r[2] + 606105819 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (s ^ t)) + r[3] + 3250441966 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (s ^ n & (i ^ s)) + r[4] + 4118548399 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ t & (n ^ i)) + r[5] + 1200080426 & 4294967295, s = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (t ^ n)) + r[6] + 2821735955 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (s ^ t)) + r[7] + 4249261313 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (s ^ n & (i ^ s)) + r[8] + 1770035416 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ t & (n ^ i)) + r[9] + 2336552879 & 4294967295, s = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (t ^ n)) + r[10] + 4294925233 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (s ^ t)) + r[11] + 2304563134 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (s ^ n & (i ^ s)) + r[12] + 1804603682 & 4294967295, t = n + (o << 7 & 4294967295 | o >>> 25), o = s + (i ^ t & (n ^ i)) + r[13] + 4254626195 & 4294967295, s = t + (o << 12 & 4294967295 | o >>> 20), o = i + (n ^ s & (t ^ n)) + r[14] + 2792965006 & 4294967295, i = s + (o << 17 & 4294967295 | o >>> 15), o = n + (t ^ i & (s ^ t)) + r[15] + 1236535329 & 4294967295, n = i + (o << 22 & 4294967295 | o >>> 10), o = t + (i ^ s & (n ^ i)) + r[1] + 4129170786 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (t ^ n)) + r[6] + 3225465664 & 4294967295, s = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (s ^ t)) + r[11] + 643717713 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ t & (i ^ s)) + r[0] + 3921069994 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ s & (n ^ i)) + r[5] + 3593408605 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (t ^ n)) + r[10] + 38016083 & 4294967295, s = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (s ^ t)) + r[15] + 3634488961 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ t & (i ^ s)) + r[4] + 3889429448 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ s & (n ^ i)) + r[9] + 568446438 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (t ^ n)) + r[14] + 3275163606 & 4294967295, s = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (s ^ t)) + r[3] + 4107603335 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ t & (i ^ s)) + r[8] + 1163531501 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (i ^ s & (n ^ i)) + r[13] + 2850285829 & 4294967295, t = n + (o << 5 & 4294967295 | o >>> 27), o = s + (n ^ i & (t ^ n)) + r[2] + 4243563512 & 4294967295, s = t + (o << 9 & 4294967295 | o >>> 23), o = i + (t ^ n & (s ^ t)) + r[7] + 1735328473 & 4294967295, i = s + (o << 14 & 4294967295 | o >>> 18), o = n + (s ^ t & (i ^ s)) + r[12] + 2368359562 & 4294967295, n = i + (o << 20 & 4294967295 | o >>> 12), o = t + (n ^ i ^ s) + r[5] + 4294588738 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = s + (t ^ n ^ i) + r[8] + 2272392833 & 4294967295, s = t + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ t ^ n) + r[11] + 1839030562 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ t) + r[14] + 4259657740 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ s) + r[1] + 2763975236 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = s + (t ^ n ^ i) + r[4] + 1272893353 & 4294967295, s = t + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ t ^ n) + r[7] + 4139469664 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ t) + r[10] + 3200236656 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ s) + r[13] + 681279174 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = s + (t ^ n ^ i) + r[0] + 3936430074 & 4294967295, s = t + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ t ^ n) + r[3] + 3572445317 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ t) + r[6] + 76029189 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (n ^ i ^ s) + r[9] + 3654602809 & 4294967295, t = n + (o << 4 & 4294967295 | o >>> 28), o = s + (t ^ n ^ i) + r[12] + 3873151461 & 4294967295, s = t + (o << 11 & 4294967295 | o >>> 21), o = i + (s ^ t ^ n) + r[15] + 530742520 & 4294967295, i = s + (o << 16 & 4294967295 | o >>> 16), o = n + (i ^ s ^ t) + r[2] + 3299628645 & 4294967295, n = i + (o << 23 & 4294967295 | o >>> 9), o = t + (i ^ (n | ~s)) + r[0] + 4096336452 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (t | ~i)) + r[7] + 1126891415 & 4294967295, s = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (s | ~n)) + r[14] + 2878612391 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~t)) + r[5] + 4237533241 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~s)) + r[12] + 1700485571 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (t | ~i)) + r[3] + 2399980690 & 4294967295, s = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (s | ~n)) + r[10] + 4293915773 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~t)) + r[1] + 2240044497 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~s)) + r[8] + 1873313359 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (t | ~i)) + r[15] + 4264355552 & 4294967295, s = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (s | ~n)) + r[6] + 2734768916 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~t)) + r[13] + 1309151649 & 4294967295, n = i + (o << 21 & 4294967295 | o >>> 11), o = t + (i ^ (n | ~s)) + r[4] + 4149444226 & 4294967295, t = n + (o << 6 & 4294967295 | o >>> 26), o = s + (n ^ (t | ~i)) + r[11] + 3174756917 & 4294967295, s = t + (o << 10 & 4294967295 | o >>> 22), o = i + (t ^ (s | ~n)) + r[2] + 718787259 & 4294967295, i = s + (o << 15 & 4294967295 | o >>> 17), o = n + (s ^ (i | ~t)) + r[9] + 3951481745 & 4294967295, e.g[0] = e.g[0] + t & 4294967295, e.g[1] = e.g[1] + (i + (o << 21 & 4294967295 | o >>> 11)) & 4294967295, e.g[2] = e.g[2] + i & 4294967295, e.g[3] = e.g[3] + s & 4294967295;
}
ie.prototype.j = function(e, t) {
  t === void 0 && (t = e.length);
  for (var n = t - this.blockSize, r = this.m, i = this.h, s = 0; s < t; ) {
    if (i == 0)
      for (; s <= n; )
        As(this, e, s), s += this.blockSize;
    if (typeof e == "string") {
      for (; s < t; )
        if (r[i++] = e.charCodeAt(s++), i == this.blockSize) {
          As(this, r), i = 0;
          break;
        }
    } else
      for (; s < t; )
        if (r[i++] = e[s++], i == this.blockSize) {
          As(this, r), i = 0;
          break;
        }
  }
  this.h = i, this.i += t;
};
ie.prototype.l = function() {
  var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  e[0] = 128;
  for (var t = 1; t < e.length - 8; ++t)
    e[t] = 0;
  var n = 8 * this.i;
  for (t = e.length - 8; t < e.length; ++t)
    e[t] = n & 255, n /= 256;
  for (this.j(e), e = Array(16), t = n = 0; 4 > t; ++t)
    for (var r = 0; 32 > r; r += 8)
      e[n++] = this.g[t] >>> r & 255;
  return e;
};
function rt(e, t) {
  this.h = t;
  for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
    var s = e[i] | 0;
    r && s == t || (n[i] = s, r = !1);
  }
  this.g = n;
}
var Ly = {};
function ia(e) {
  return -128 <= e && 128 > e ? Gg(e, function(t) {
    return new rt([t | 0], 0 > t ? -1 : 0);
  }) : new rt([e | 0], 0 > e ? -1 : 0);
}
function ue(e) {
  if (isNaN(e) || !isFinite(e))
    return hn;
  if (0 > e)
    return xt(ue(-e));
  for (var t = [], n = 1, r = 0; e >= n; r++)
    t[r] = e / n | 0, n *= so;
  return new rt(t, 0);
}
function mh(e, t) {
  if (e.length == 0)
    throw Error("number format error: empty string");
  if (t = t || 10, 2 > t || 36 < t)
    throw Error("radix out of range: " + t);
  if (e.charAt(0) == "-")
    return xt(mh(e.substring(1), t));
  if (0 <= e.indexOf("-"))
    throw Error('number format error: interior "-" character');
  for (var n = ue(Math.pow(t, 8)), r = hn, i = 0; i < e.length; i += 8) {
    var s = Math.min(8, e.length - i), o = parseInt(e.substring(i, i + s), t);
    8 > s ? (s = ue(Math.pow(t, s)), r = r.R(s).add(ue(o))) : (r = r.R(n), r = r.add(ue(o)));
  }
  return r;
}
var so = 4294967296, hn = ia(0), oo = ia(1), bc = ia(16777216);
C = rt.prototype;
C.ea = function() {
  if (te(this))
    return -xt(this).ea();
  for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    e += (0 <= r ? r : so + r) * t, t *= so;
  }
  return e;
};
C.toString = function(e) {
  if (e = e || 10, 2 > e || 36 < e)
    throw Error("radix out of range: " + e);
  if (ve(this))
    return "0";
  if (te(this))
    return "-" + xt(this).toString(e);
  for (var t = ue(Math.pow(e, 6)), n = this, r = ""; ; ) {
    var i = fi(n, t).g;
    n = di(n, i.R(t));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(e);
    if (n = i, ve(n))
      return s + r;
    for (; 6 > s.length; )
      s = "0" + s;
    r = s + r;
  }
};
C.D = function(e) {
  return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
};
function ve(e) {
  if (e.h != 0)
    return !1;
  for (var t = 0; t < e.g.length; t++)
    if (e.g[t] != 0)
      return !1;
  return !0;
}
function te(e) {
  return e.h == -1;
}
C.X = function(e) {
  return e = di(this, e), te(e) ? -1 : ve(e) ? 0 : 1;
};
function xt(e) {
  for (var t = e.g.length, n = [], r = 0; r < t; r++)
    n[r] = ~e.g[r];
  return new rt(n, ~e.h).add(oo);
}
C.abs = function() {
  return te(this) ? xt(this) : this;
};
C.add = function(e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0, i = 0; i <= t; i++) {
    var s = r + (this.D(i) & 65535) + (e.D(i) & 65535), o = (s >>> 16) + (this.D(i) >>> 16) + (e.D(i) >>> 16);
    r = o >>> 16, s &= 65535, o &= 65535, n[i] = o << 16 | s;
  }
  return new rt(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function di(e, t) {
  return e.add(xt(t));
}
C.R = function(e) {
  if (ve(this) || ve(e))
    return hn;
  if (te(this))
    return te(e) ? xt(this).R(xt(e)) : xt(xt(this).R(e));
  if (te(e))
    return xt(this.R(xt(e)));
  if (0 > this.X(bc) && 0 > e.X(bc))
    return ue(this.ea() * e.ea());
  for (var t = this.g.length + e.g.length, n = [], r = 0; r < 2 * t; r++)
    n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < e.g.length; i++) {
      var s = this.D(r) >>> 16, o = this.D(r) & 65535, a = e.D(i) >>> 16, c = e.D(i) & 65535;
      n[2 * r + 2 * i] += o * c, jr(n, 2 * r + 2 * i), n[2 * r + 2 * i + 1] += s * c, jr(n, 2 * r + 2 * i + 1), n[2 * r + 2 * i + 1] += o * a, jr(n, 2 * r + 2 * i + 1), n[2 * r + 2 * i + 2] += s * a, jr(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < t; r++)
    n[r] = n[2 * r + 1] << 16 | n[2 * r];
  for (r = t; r < 2 * t; r++)
    n[r] = 0;
  return new rt(n, 0);
};
function jr(e, t) {
  for (; (e[t] & 65535) != e[t]; )
    e[t + 1] += e[t] >>> 16, e[t] &= 65535, t++;
}
function Ln(e, t) {
  this.g = e, this.h = t;
}
function fi(e, t) {
  if (ve(t))
    throw Error("division by zero");
  if (ve(e))
    return new Ln(hn, hn);
  if (te(e))
    return t = fi(xt(e), t), new Ln(xt(t.g), xt(t.h));
  if (te(t))
    return t = fi(e, xt(t)), new Ln(xt(t.g), t.h);
  if (30 < e.g.length) {
    if (te(e) || te(t))
      throw Error("slowDivide_ only works with positive integers.");
    for (var n = oo, r = t; 0 >= r.X(e); )
      n = Pc(n), r = Pc(r);
    var i = sn(n, 1), s = sn(r, 1);
    for (r = sn(r, 2), n = sn(n, 2); !ve(r); ) {
      var o = s.add(r);
      0 >= o.X(e) && (i = i.add(n), s = o), r = sn(r, 1), n = sn(n, 1);
    }
    return t = di(e, i.R(t)), new Ln(i, t);
  }
  for (i = hn; 0 <= e.X(t); ) {
    for (n = Math.max(1, Math.floor(e.ea() / t.ea())), r = Math.ceil(Math.log(n) / Math.LN2), r = 48 >= r ? 1 : Math.pow(2, r - 48), s = ue(n), o = s.R(t); te(o) || 0 < o.X(e); )
      n -= r, s = ue(n), o = s.R(t);
    ve(s) && (s = oo), i = i.add(s), e = di(e, o);
  }
  return new Ln(i, e);
}
C.gb = function(e) {
  return fi(this, e).h;
};
C.and = function(e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) & e.D(r);
  return new rt(n, this.h & e.h);
};
C.or = function(e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) | e.D(r);
  return new rt(n, this.h | e.h);
};
C.xor = function(e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++)
    n[r] = this.D(r) ^ e.D(r);
  return new rt(n, this.h ^ e.h);
};
function Pc(e) {
  for (var t = e.g.length + 1, n = [], r = 0; r < t; r++)
    n[r] = e.D(r) << 1 | e.D(r - 1) >>> 31;
  return new rt(n, e.h);
}
function sn(e, t) {
  var n = t >> 5;
  t %= 32;
  for (var r = e.g.length - n, i = [], s = 0; s < r; s++)
    i[s] = 0 < t ? e.D(s + n) >>> t | e.D(s + n + 1) << 32 - t : e.D(s + n);
  return new rt(i, e.h);
}
hi.prototype.createWebChannel = hi.prototype.g;
Jt.prototype.send = Jt.prototype.u;
Jt.prototype.open = Jt.prototype.m;
Jt.prototype.close = Jt.prototype.close;
Oi.NO_ERROR = 0;
Oi.TIMEOUT = 8;
Oi.HTTP_ERROR = 6;
xl.COMPLETE = "complete";
Nl.EventType = Er;
Er.OPEN = "a";
Er.CLOSE = "b";
Er.ERROR = "c";
Er.MESSAGE = "d";
Rt.prototype.listen = Rt.prototype.O;
ht.prototype.listenOnce = ht.prototype.P;
ht.prototype.getLastError = ht.prototype.Sa;
ht.prototype.getLastErrorCode = ht.prototype.Ia;
ht.prototype.getStatus = ht.prototype.da;
ht.prototype.getResponseJson = ht.prototype.Wa;
ht.prototype.getResponseText = ht.prototype.ja;
ht.prototype.send = ht.prototype.ha;
ht.prototype.setWithCredentials = ht.prototype.Oa;
ie.prototype.digest = ie.prototype.l;
ie.prototype.reset = ie.prototype.reset;
ie.prototype.update = ie.prototype.j;
rt.prototype.add = rt.prototype.add;
rt.prototype.multiply = rt.prototype.R;
rt.prototype.modulo = rt.prototype.gb;
rt.prototype.compare = rt.prototype.X;
rt.prototype.toNumber = rt.prototype.ea;
rt.prototype.toString = rt.prototype.toString;
rt.prototype.getBits = rt.prototype.D;
rt.fromNumber = ue;
rt.fromString = mh;
var Fy = function() {
  return new hi();
}, $y = function() {
  return ki();
}, Ss = Oi, Uy = xl, By = en, Vc = { xb: 0, Ab: 1, Bb: 2, Ub: 3, Zb: 4, Wb: 5, Xb: 6, Vb: 7, Tb: 8, Yb: 9, PROXY: 10, NOPROXY: 11, Rb: 12, Nb: 13, Ob: 14, Mb: 15, Pb: 16, Qb: 17, tb: 18, sb: 19, ub: 20 }, qr = Nl, jy = ht, qy = ie, dn = rt;
const Dc = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
Ft.UNAUTHENTICATED = new Ft(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Ft.GOOGLE_CREDENTIALS = new Ft("google-credentials-uid"), Ft.FIRST_PARTY = new Ft("first-party-uid"), Ft.MOCK_USER = new Ft("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vn = "10.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ye = new Oo("@firebase/firestore");
function Fn() {
  return Ye.logLevel;
}
function R(e, ...t) {
  if (Ye.logLevel <= Y.DEBUG) {
    const n = t.map(sa);
    Ye.debug(`Firestore (${Vn}): ${e}`, ...n);
  }
}
function pe(e, ...t) {
  if (Ye.logLevel <= Y.ERROR) {
    const n = t.map(sa);
    Ye.error(`Firestore (${Vn}): ${e}`, ...n);
  }
}
function vn(e, ...t) {
  if (Ye.logLevel <= Y.WARN) {
    const n = t.map(sa);
    Ye.warn(`Firestore (${Vn}): ${e}`, ...n);
  }
}
function sa(e) {
  if (typeof e == "string")
    return e;
  try {
    /**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
    return function(n) {
      return JSON.stringify(n);
    }(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e = "Unexpected state") {
  const t = `FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: ` + e;
  throw pe(t), new Error(t);
}
function st(e, t) {
  e || L();
}
function j(e, t) {
  return e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _ = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
class V extends Me {
  /** @hideconstructor */
  constructor(t, n) {
    super(t, n), this.code = t, this.message = n, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee {
  constructor() {
    this.promise = new Promise((t, n) => {
      this.resolve = t, this.reject = n;
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh {
  constructor(t, n) {
    this.user = n, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class zy {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(t, n) {
    t.enqueueRetryable(() => n(Ft.UNAUTHENTICATED));
  }
  shutdown() {
  }
}
class Gy {
  constructor(t) {
    this.token = t, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(t, n) {
    this.changeListener = n, // Fire with initial user.
    t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Wy {
  constructor(t) {
    this.t = t, /** Tracks the current User. */
    this.currentUser = Ft.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = !1, this.auth = null;
  }
  start(t, n) {
    let r = this.i;
    const i = (c) => this.i !== r ? (r = this.i, n(c)) : Promise.resolve();
    let s = new Ee();
    this.o = () => {
      this.i++, this.currentUser = this.u(), s.resolve(), s = new Ee(), t.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
      const c = s;
      t.enqueueRetryable(async () => {
        await c.promise, await i(this.currentUser);
      });
    }, a = (c) => {
      R("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = c, this.auth.addAuthTokenListener(this.o), o();
    };
    this.t.onInit((c) => a(c)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const c = this.t.getImmediate({
          optional: !0
        });
        c ? a(c) : (
          // If auth is still not available, proceed with `null` user
          (R("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), s = new Ee())
        );
      }
    }, 0), o();
  }
  getToken() {
    const t = this.i, n = this.forceRefresh;
    return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((r) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== t ? (R("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : r ? (st(typeof r.accessToken == "string"), new gh(r.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const t = this.auth && this.auth.getUid();
    return st(t === null || typeof t == "string"), new Ft(t);
  }
}
class Hy {
  constructor(t, n, r) {
    this.l = t, this.h = n, this.P = r, this.type = "FirstParty", this.user = Ft.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return t && this.I.set("Authorization", t), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
}
class Ky {
  constructor(t, n, r) {
    this.l = t, this.h = n, this.P = r;
  }
  getToken() {
    return Promise.resolve(new Hy(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(Ft.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
}
class Qy {
  constructor(t) {
    this.value = t, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class Yy {
  constructor(t) {
    this.A = t, this.forceRefresh = !1, this.appCheck = null, this.R = null;
  }
  start(t, n) {
    const r = (s) => {
      s.error != null && R("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);
      const o = s.token !== this.R;
      return this.R = s.token, R("FirebaseAppCheckTokenProvider", `Received ${o ? "new" : "existing"} token.`), o ? n(s.token) : Promise.resolve();
    };
    this.o = (s) => {
      t.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      R("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = s, this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const s = this.A.getImmediate({
          optional: !0
        });
        s ? i(s) : (
          // If AppCheck is still not available, proceed without it.
          R("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return this.forceRefresh = !1, this.appCheck ? this.appCheck.getToken(t).then((n) => n ? (st(typeof n.token == "string"), this.R = n.token, new Qy(n.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xy(e) {
  const t = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof self < "u" && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function")
    t.getRandomValues(n);
  else
    for (let r = 0; r < e; r++)
      n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yh {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = Xy(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += t.charAt(i[s] % t.length));
    }
    return r;
  }
}
function X(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function En(e, t, n) {
  return e.length === t.length && e.every((r, i) => n(r, t[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(t, n) {
    if (this.seconds = t, this.nanoseconds = n, n < 0)
      throw new V(_.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
    if (n >= 1e9)
      throw new V(_.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + n);
    if (t < -62135596800)
      throw new V(_.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new V(_.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return wt.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(t) {
    return wt.fromMillis(t.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(t) {
    const n = Math.floor(t / 1e3), r = Math.floor(1e6 * (t - 1e3 * n));
    return new wt(n, r);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds ? X(this.nanoseconds, t.nanoseconds) : X(this.seconds, t.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const t = this.seconds - -62135596800;
    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new B(t);
  }
  static min() {
    return new B(new wt(0, 0));
  }
  static max() {
    return new B(new wt(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar {
  constructor(t, n, r) {
    n === void 0 ? n = 0 : n > t.length && L(), r === void 0 ? r = t.length - n : r > t.length - n && L(), this.segments = t, this.offset = n, this.len = r;
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return ar.comparator(this, t) === 0;
  }
  child(t) {
    const n = this.segments.slice(this.offset, this.limit());
    return t instanceof ar ? t.forEach((r) => {
      n.push(r);
    }) : n.push(t), this.construct(n);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return t = t === void 0 ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length)
      return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n))
        return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length)
      return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== t.get(n))
        return !1;
    return !0;
  }
  forEach(t) {
    for (let n = this.offset, r = this.limit(); n < r; n++)
      t(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, n) {
    const r = Math.min(t.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = t.get(i), o = n.get(i);
      if (s < o)
        return -1;
      if (s > o)
        return 1;
    }
    return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
  }
}
class ct extends ar {
  construct(t, n, r) {
    return new ct(t, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...t) {
    const n = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0)
        throw new V(_.INVALID_ARGUMENT, `Invalid segment (${r}). Paths must not contain // in them.`);
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new ct(n);
  }
  static emptyPath() {
    return new ct([]);
  }
}
const Jy = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Nt extends ar {
  construct(t, n, r) {
    return new Nt(t, n, r);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(t) {
    return Jy.test(t);
  }
  canonicalString() {
    return this.toArray().map((t) => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), Nt.isValidIdentifier(t) || (t = "`" + t + "`"), t)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new Nt(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(t) {
    const n = [];
    let r = "", i = 0;
    const s = () => {
      if (r.length === 0)
        throw new V(_.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      n.push(r), r = "";
    };
    let o = !1;
    for (; i < t.length; ) {
      const a = t[i];
      if (a === "\\") {
        if (i + 1 === t.length)
          throw new V(_.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        const c = t[i + 1];
        if (c !== "\\" && c !== "." && c !== "`")
          throw new V(_.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r += c, i += 2;
      } else
        a === "`" ? (o = !o, i++) : a !== "." || o ? (r += a, i++) : (s(), i++);
    }
    if (s(), o)
      throw new V(_.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new Nt(n);
  }
  static emptyPath() {
    return new Nt([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new k(ct.fromString(t));
  }
  static fromName(t) {
    return new k(ct.fromString(t).popFirst(5));
  }
  static empty() {
    return new k(ct.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && ct.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, n) {
    return ct.comparator(t.path, n.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(t) {
    return new k(new ct(t.slice()));
  }
}
function Zy(e, t) {
  const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1, i = B.fromTimestamp(r === 1e9 ? new wt(n + 1, 0) : new wt(n, r));
  return new xe(i, k.empty(), t);
}
function t_(e) {
  return new xe(e.readTime, e.key, -1);
}
class xe {
  constructor(t, n, r) {
    this.readTime = t, this.documentKey = n, this.largestBatchId = r;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new xe(B.min(), k.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new xe(B.max(), k.empty(), -1);
  }
}
function e_(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return n !== 0 ? n : (n = k.comparator(e.documentKey, t.documentKey), n !== 0 ? n : X(e.largestBatchId, t.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n_ = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class r_ {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Sr(e) {
  if (e.code !== _.FAILED_PRECONDITION || e.message !== n_)
    throw e;
  R("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v {
  constructor(t) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, t((n) => {
      this.isDone = !0, this.result = n, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(n);
    }, (n) => {
      this.isDone = !0, this.error = n, this.catchCallback && this.catchCallback(n);
    });
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, n) {
    return this.callbackAttached && L(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(t, this.result) : new v((r, i) => {
      this.nextCallback = (s) => {
        this.wrapSuccess(t, s).next(r, i);
      }, this.catchCallback = (s) => {
        this.wrapFailure(n, s).next(r, i);
      };
    });
  }
  toPromise() {
    return new Promise((t, n) => {
      this.next(t, n);
    });
  }
  wrapUserFunction(t) {
    try {
      const n = t();
      return n instanceof v ? n : v.resolve(n);
    } catch (n) {
      return v.reject(n);
    }
  }
  wrapSuccess(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : v.resolve(n);
  }
  wrapFailure(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : v.reject(n);
  }
  static resolve(t) {
    return new v((n, r) => {
      n(t);
    });
  }
  static reject(t) {
    return new v((n, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new v((n, r) => {
      let i = 0, s = 0, o = !1;
      t.forEach((a) => {
        ++i, a.next(() => {
          ++s, o && s === i && n();
        }, (c) => r(c));
      }), o = !0, s === i && n();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(t) {
    let n = v.resolve(!1);
    for (const r of t)
      n = n.next((i) => i ? v.resolve(i) : r());
    return n;
  }
  static forEach(t, n) {
    const r = [];
    return t.forEach((i, s) => {
      r.push(n.call(this, i, s));
    }), this.waitFor(r);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(t, n) {
    return new v((r, i) => {
      const s = t.length, o = new Array(s);
      let a = 0;
      for (let c = 0; c < s; c++) {
        const u = c;
        n(t[u]).next((l) => {
          o[u] = l, ++a, a === s && r(o);
        }, (l) => i(l));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(t, n) {
    return new v((r, i) => {
      const s = () => {
        t() === !0 ? n().next(() => {
          s();
        }, i) : r();
      };
      s();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa {
  constructor(t, n) {
    this.action = t, this.transaction = n, this.aborted = !1, /**
     * A `Promise` that resolves with the result of the IndexedDb transaction.
     */
    this.V = new Ee(), this.transaction.oncomplete = () => {
      this.V.resolve();
    }, this.transaction.onabort = () => {
      n.error ? this.V.reject(new Gn(t, n.error)) : this.V.resolve();
    }, this.transaction.onerror = (r) => {
      const i = aa(r.target.error);
      this.V.reject(new Gn(t, i));
    };
  }
  static open(t, n, r, i) {
    try {
      return new oa(n, t.transaction(i, r));
    } catch (s) {
      throw new Gn(n, s);
    }
  }
  get m() {
    return this.V.promise;
  }
  abort(t) {
    t && this.V.reject(t), this.aborted || (R("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
  }
  g() {
    const t = this.transaction;
    this.aborted || typeof t.commit != "function" || t.commit();
  }
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  store(t) {
    const n = this.transaction.objectStore(t);
    return new s_(n);
  }
}
class Ge {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  constructor(t, n, r) {
    this.name = t, this.version = n, this.p = r, Ge.S(si()) === 12.2 && pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */
  static delete(t) {
    return R("SimpleDb", "Removing database:", t), je(window.indexedDB.deleteDatabase(t)).toPromise();
  }
  /** Returns true if IndexedDB is available in the current environment. */
  static D() {
    if (!ko())
      return !1;
    if (Ge.C())
      return !0;
    const t = si(), n = Ge.S(t), r = 0 < n && n < 10, i = Ge.v(t), s = 0 < i && i < 4.5;
    return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || s);
  }
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  static C() {
    var t;
    return typeof process < "u" && ((t = process.__PRIVATE_env) === null || t === void 0 ? void 0 : t.F) === "YES";
  }
  /** Helper to get a typed SimpleDbStore from a transaction. */
  static M(t, n) {
    return t.store(n);
  }
  // visible for testing
  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  static S(t) {
    const n = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), r = n ? n[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  // visible for testing
  /** Parse User Agent to determine Android version. Returns -1 if not found. */
  static v(t) {
    const n = t.match(/Android ([\d.]+)/i), r = n ? n[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  async O(t) {
    return this.db || (R("SimpleDb", "Opening database:", this.name), this.db = await new Promise((n, r) => {
      const i = indexedDB.open(this.name, this.version);
      i.onsuccess = (s) => {
        const o = s.target.result;
        n(o);
      }, i.onblocked = () => {
        r(new Gn(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
      }, i.onerror = (s) => {
        const o = s.target.error;
        o.name === "VersionError" ? r(new V(_.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : o.name === "InvalidStateError" ? r(new V(_.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + o)) : r(new Gn(t, o));
      }, i.onupgradeneeded = (s) => {
        R("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', s.oldVersion);
        const o = s.target.result;
        this.p.N(o, i.transaction, s.oldVersion, this.version).next(() => {
          R("SimpleDb", "Database upgrade to version " + this.version + " complete");
        });
      };
    })), this.B && (this.db.onversionchange = (n) => this.B(n)), this.db;
  }
  L(t) {
    this.B = t, this.db && (this.db.onversionchange = (n) => t(n));
  }
  async runTransaction(t, n, r, i) {
    const s = n === "readonly";
    let o = 0;
    for (; ; ) {
      ++o;
      try {
        this.db = await this.O(t);
        const a = oa.open(this.db, t, s ? "readonly" : "readwrite", r), c = i(a).next((u) => (a.g(), u)).catch((u) => (
          // Abort the transaction if there was an error.
          (a.abort(u), v.reject(u))
        )).toPromise();
        return c.catch(() => {
        }), // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
        // fire), but still return the original transactionFnResult back to the
        // caller.
        await a.m, c;
      } catch (a) {
        const c = a, u = c.name !== "FirebaseError" && o < 3;
        if (R("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", u), this.close(), !u)
          return Promise.reject(c);
      }
    }
  }
  close() {
    this.db && this.db.close(), this.db = void 0;
  }
}
class i_ {
  constructor(t) {
    this.k = t, this.q = !1, this.K = null;
  }
  get isDone() {
    return this.q;
  }
  get $() {
    return this.K;
  }
  set cursor(t) {
    this.k = t;
  }
  /**
   * This function can be called to stop iteration at any point.
   */
  done() {
    this.q = !0;
  }
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  U(t) {
    this.K = t;
  }
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  delete() {
    return je(this.k.delete());
  }
}
class Gn extends V {
  constructor(t, n) {
    super(_.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${n}`), this.name = "IndexedDbTransactionError";
  }
}
function Rr(e) {
  return e.name === "IndexedDbTransactionError";
}
class s_ {
  constructor(t) {
    this.store = t;
  }
  put(t, n) {
    let r;
    return n !== void 0 ? (R("SimpleDb", "PUT", this.store.name, t, n), r = this.store.put(n, t)) : (R("SimpleDb", "PUT", this.store.name, "<auto-key>", t), r = this.store.put(t)), je(r);
  }
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value - The object to write.
   * @returns The key of the value to add.
   */
  add(t) {
    return R("SimpleDb", "ADD", this.store.name, t, t), je(this.store.add(t));
  }
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @returns The object with the specified key or null if no object exists.
   */
  get(t) {
    return je(this.store.get(t)).next((n) => (
      // Normalize nonexistence to null.
      (n === void 0 && (n = null), R("SimpleDb", "GET", this.store.name, t, n), n)
    ));
  }
  delete(t) {
    return R("SimpleDb", "DELETE", this.store.name, t), je(this.store.delete(t));
  }
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  count() {
    return R("SimpleDb", "COUNT", this.store.name), je(this.store.count());
  }
  W(t, n) {
    const r = this.options(t, n), i = r.index ? this.store.index(r.index) : this.store;
    if (typeof i.getAll == "function") {
      const s = i.getAll(r.range);
      return new v((o, a) => {
        s.onerror = (c) => {
          a(c.target.error);
        }, s.onsuccess = (c) => {
          o(c.target.result);
        };
      });
    }
    {
      const s = this.cursor(r), o = [];
      return this.G(s, (a, c) => {
        o.push(c);
      }).next(() => o);
    }
  }
  /**
   * Loads the first `count` elements from the provided index range. Loads all
   * elements if no limit is provided.
   */
  j(t, n) {
    const r = this.store.getAll(t, n === null ? void 0 : n);
    return new v((i, s) => {
      r.onerror = (o) => {
        s(o.target.error);
      }, r.onsuccess = (o) => {
        i(o.target.result);
      };
    });
  }
  H(t, n) {
    R("SimpleDb", "DELETE ALL", this.store.name);
    const r = this.options(t, n);
    r.J = !1;
    const i = this.cursor(r);
    return this.G(i, (s, o, a) => a.delete());
  }
  Y(t, n) {
    let r;
    n ? r = t : (r = {}, n = t);
    const i = this.cursor(r);
    return this.G(i, n);
  }
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  Z(t) {
    const n = this.cursor({});
    return new v((r, i) => {
      n.onerror = (s) => {
        const o = aa(s.target.error);
        i(o);
      }, n.onsuccess = (s) => {
        const o = s.target.result;
        o ? t(o.primaryKey, o.value).next((a) => {
          a ? o.continue() : r();
        }) : r();
      };
    });
  }
  G(t, n) {
    const r = [];
    return new v((i, s) => {
      t.onerror = (o) => {
        s(o.target.error);
      }, t.onsuccess = (o) => {
        const a = o.target.result;
        if (!a)
          return void i();
        const c = new i_(a), u = n(a.primaryKey, a.value, c);
        if (u instanceof v) {
          const l = u.catch((h) => (c.done(), v.reject(h)));
          r.push(l);
        }
        c.isDone ? i() : c.$ === null ? a.continue() : a.continue(c.$);
      };
    }).next(() => v.waitFor(r));
  }
  options(t, n) {
    let r;
    return t !== void 0 && (typeof t == "string" ? r = t : n = t), {
      index: r,
      range: n
    };
  }
  cursor(t) {
    let n = "next";
    if (t.reverse && (n = "prev"), t.index) {
      const r = this.store.index(t.index);
      return t.J ? r.openKeyCursor(t.range, n) : r.openCursor(t.range, n);
    }
    return this.store.openCursor(t.range, n);
  }
}
function je(e) {
  return new v((t, n) => {
    e.onsuccess = (r) => {
      const i = r.target.result;
      t(i);
    }, e.onerror = (r) => {
      const i = aa(r.target.error);
      n(i);
    };
  });
}
let xc = !1;
function aa(e) {
  const t = Ge.S(si());
  if (t >= 12.2 && t < 13) {
    const n = "An internal error was encountered in the Indexed Database server";
    if (e.message.indexOf(n) >= 0) {
      const r = new V("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
      return xc || (xc = !0, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(() => {
        throw r;
      }, 0)), r;
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca {
  constructor(t, n) {
    this.previousValue = t, n && (n.sequenceNumberHandler = (r) => this.se(r), this.oe = (r) => n.writeSequenceNumber(r));
  }
  se(t) {
    return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
  }
  next() {
    const t = ++this.previousValue;
    return this.oe && this.oe(t), t;
  }
}
ca._e = -1;
function zi(e) {
  return e == null;
}
function pi(e) {
  return e === 0 && 1 / e == -1 / 0;
}
function o_(e) {
  return typeof e == "number" && Number.isInteger(e) && !pi(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nc(e) {
  let t = 0;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function nn(e, t) {
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function _h(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t))
      return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt {
  constructor(t, n) {
    this.comparator = t, this.root = n || Dt.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(t, n) {
    return new lt(this.comparator, this.root.insert(t, n, this.comparator).copy(null, null, Dt.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(t) {
    return new lt(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Dt.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(t) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(t, n.key);
      if (r === 0)
        return n.value;
      r < 0 ? n = n.left : r > 0 && (n = n.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(t) {
    let n = 0, r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(t, r.key);
      if (i === 0)
        return n + r.left.size;
      i < 0 ? r = r.left : (
        // Count all nodes left of the node plus the node itself
        (n += r.left.size + 1, r = r.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((n, r) => (t(n, r), !1));
  }
  toString() {
    const t = [];
    return this.inorderTraversal((n, r) => (t.push(`${n}:${r}`), !1)), `{${t.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new zr(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new zr(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new zr(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new zr(this.root, t, this.comparator, !0);
  }
}
class zr {
  constructor(t, n, r, i) {
    this.isReverse = i, this.nodeStack = [];
    let s = 1;
    for (; !t.isEmpty(); )
      if (s = n ? r(t.key, n) : 1, // flip the comparison if we're going in reverse
      n && i && (s *= -1), s < 0)
        t = this.isReverse ? t.left : t.right;
      else {
        if (s === 0) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const n = {
      key: t.key,
      value: t.value
    };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); )
        this.nodeStack.push(t), t = t.right;
    else
      for (t = t.right; !t.isEmpty(); )
        this.nodeStack.push(t), t = t.left;
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0)
      return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }
}
class Dt {
  constructor(t, n, r, i, s) {
    this.key = t, this.value = n, this.color = r ?? Dt.RED, this.left = i ?? Dt.EMPTY, this.right = s ?? Dt.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(t, n, r, i, s) {
    return new Dt(t ?? this.key, n ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
  }
  isEmpty() {
    return !1;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(t) {
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(t) {
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(t, n, r) {
    let i = this;
    const s = r(t, i.key);
    return i = s < 0 ? i.copy(null, null, null, i.left.insert(t, n, r), null) : s === 0 ? i.copy(null, n, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, n, r)), i.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return Dt.EMPTY;
    let t = this;
    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), t.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(t, n) {
    let r, i = this;
    if (n(t, i.key) < 0)
      i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(t, n), null);
    else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), n(t, i.key) === 0) {
        if (i.right.isEmpty())
          return Dt.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
      }
      i = i.copy(null, null, null, null, i.right.remove(t, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let t = this;
    return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t;
  }
  moveRedRight() {
    let t = this.colorFlip();
    return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
  }
  rotateLeft() {
    const t = this.copy(null, null, Dt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, Dt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null), n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, n);
  }
  // For testing.
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed() || this.right.isRed())
      throw L();
    const t = this.left.check();
    if (t !== this.right.check())
      throw L();
    return t + (this.isRed() ? 0 : 1);
  }
}
Dt.EMPTY = null, Dt.RED = !0, Dt.BLACK = !1;
Dt.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw L();
  }
  get value() {
    throw L();
  }
  get color() {
    throw L();
  }
  get left() {
    throw L();
  }
  get right() {
    throw L();
  }
  // Returns a copy of the current node.
  copy(t, n, r, i, s) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(t, n, r) {
    return new Dt(t, n);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(t, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  // For testing.
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot {
  constructor(t) {
    this.comparator = t, this.data = new lt(this.comparator);
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(t) {
    this.data.inorderTraversal((n, r) => (t(n), !1));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(t, n) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, t[1]) >= 0)
        return;
      n(i.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(t, n) {
    let r;
    for (r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator(); r.hasNext(); )
      if (!t(r.getNext().key))
        return;
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(t) {
    const n = this.data.getIteratorFrom(t);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new kc(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new kc(this.data.getIteratorFrom(t));
  }
  /** Inserts or updates an element */
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  /** Deletes an element */
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let n = this;
    return n.size < t.size && (n = t, t = this), t.forEach((r) => {
      n = n.add(r);
    }), n;
  }
  isEqual(t) {
    if (!(t instanceof Ot) || this.size !== t.size)
      return !1;
    const n = this.data.getIterator(), r = t.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key, s = r.getNext().key;
      if (this.comparator(i, s) !== 0)
        return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return this.forEach((n) => {
      t.push(n);
    }), t;
  }
  toString() {
    const t = [];
    return this.forEach((n) => t.push(n)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const n = new Ot(this.comparator);
    return n.data = t, n;
  }
}
class kc {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt {
  constructor(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(Nt.comparator);
  }
  static empty() {
    return new Qt([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(t) {
    let n = new Ot(Nt.comparator);
    for (const r of this.fields)
      n = n.add(r);
    for (const r of t)
      n = n.add(r);
    return new Qt(n.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(t) {
    for (const n of this.fields)
      if (n.isPrefixOf(t))
        return !0;
    return !1;
  }
  isEqual(t) {
    return En(this.fields, t.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vh extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const n = function(i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException ? new vh("Invalid base64 string: " + s) : s;
      }
    }(t);
    return new jt(n);
  }
  static fromUint8Array(t) {
    const n = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function(i) {
        let s = "";
        for (let o = 0; o < i.length; ++o)
          s += String.fromCharCode(i[o]);
        return s;
      }(t)
    );
    return new jt(n);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () => t < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(t++),
        done: !1
      } : {
        value: void 0,
        done: !0
      }
    };
  }
  toBase64() {
    return function(n) {
      return btoa(n);
    }(this.binaryString);
  }
  toUint8Array() {
    return function(n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++)
        r[i] = n.charCodeAt(i);
      return r;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return X(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
jt.EMPTY_BYTE_STRING = new jt("");
const a_ = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Ne(e) {
  if (st(!!e), typeof e == "string") {
    let t = 0;
    const n = a_.exec(e);
    if (st(!!n), n[1]) {
      let i = n[1];
      i = (i + "000000000").substr(0, 9), t = Number(i);
    }
    const r = new Date(e);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: _t(e.seconds),
    nanos: _t(e.nanos)
  };
}
function _t(e) {
  return typeof e == "number" ? e : typeof e == "string" ? Number(e) : 0;
}
function Xe(e) {
  return typeof e == "string" ? jt.fromBase64String(e) : jt.fromUint8Array(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ua(e) {
  var t, n;
  return ((n = (((t = e == null ? void 0 : e.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}).__type__) === null || n === void 0 ? void 0 : n.stringValue) === "server_timestamp";
}
function la(e) {
  const t = e.mapValue.fields.__previous_value__;
  return ua(t) ? la(t) : t;
}
function cr(e) {
  const t = Ne(e.mapValue.fields.__local_write_time__.timestampValue);
  return new wt(t.seconds, t.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c_ {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions Options that configure long-polling.
   * @param useFetchStreams Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(t, n, r, i, s, o, a, c, u) {
    this.databaseId = t, this.appId = n, this.persistenceKey = r, this.host = i, this.ssl = s, this.forceLongPolling = o, this.autoDetectLongPolling = a, this.longPollingOptions = c, this.useFetchStreams = u;
  }
}
class ur {
  constructor(t, n) {
    this.projectId = t, this.database = n || "(default)";
  }
  static empty() {
    return new ur("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return t instanceof ur && t.projectId === this.projectId && t.database === this.database;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gr = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
function Je(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? ua(e) ? 4 : u_(e) ? 9007199254740991 : 10 : L();
}
function me(e, t) {
  if (e === t)
    return !0;
  const n = Je(e);
  if (n !== Je(t))
    return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return cr(e).isEqual(cr(t));
    case 3:
      return function(i, s) {
        if (typeof i.timestampValue == "string" && typeof s.timestampValue == "string" && i.timestampValue.length === s.timestampValue.length)
          return i.timestampValue === s.timestampValue;
        const o = Ne(i.timestampValue), a = Ne(s.timestampValue);
        return o.seconds === a.seconds && o.nanos === a.nanos;
      }(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return function(i, s) {
        return Xe(i.bytesValue).isEqual(Xe(s.bytesValue));
      }(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return function(i, s) {
        return _t(i.geoPointValue.latitude) === _t(s.geoPointValue.latitude) && _t(i.geoPointValue.longitude) === _t(s.geoPointValue.longitude);
      }(e, t);
    case 2:
      return function(i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return _t(i.integerValue) === _t(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const o = _t(i.doubleValue), a = _t(s.doubleValue);
          return o === a ? pi(o) === pi(a) : isNaN(o) && isNaN(a);
        }
        return !1;
      }(e, t);
    case 9:
      return En(e.arrayValue.values || [], t.arrayValue.values || [], me);
    case 10:
      return function(i, s) {
        const o = i.mapValue.fields || {}, a = s.mapValue.fields || {};
        if (Nc(o) !== Nc(a))
          return !1;
        for (const c in o)
          if (o.hasOwnProperty(c) && (a[c] === void 0 || !me(o[c], a[c])))
            return !1;
        return !0;
      }(e, t);
    default:
      return L();
  }
}
function lr(e, t) {
  return (e.values || []).find((n) => me(n, t)) !== void 0;
}
function wn(e, t) {
  if (e === t)
    return 0;
  const n = Je(e), r = Je(t);
  if (n !== r)
    return X(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return X(e.booleanValue, t.booleanValue);
    case 2:
      return function(s, o) {
        const a = _t(s.integerValue || s.doubleValue), c = _t(o.integerValue || o.doubleValue);
        return a < c ? -1 : a > c ? 1 : a === c ? 0 : (
          // one or both are NaN.
          isNaN(a) ? isNaN(c) ? 0 : -1 : 1
        );
      }(e, t);
    case 3:
      return Oc(e.timestampValue, t.timestampValue);
    case 4:
      return Oc(cr(e), cr(t));
    case 5:
      return X(e.stringValue, t.stringValue);
    case 6:
      return function(s, o) {
        const a = Xe(s), c = Xe(o);
        return a.compareTo(c);
      }(e.bytesValue, t.bytesValue);
    case 7:
      return function(s, o) {
        const a = s.split("/"), c = o.split("/");
        for (let u = 0; u < a.length && u < c.length; u++) {
          const l = X(a[u], c[u]);
          if (l !== 0)
            return l;
        }
        return X(a.length, c.length);
      }(e.referenceValue, t.referenceValue);
    case 8:
      return function(s, o) {
        const a = X(_t(s.latitude), _t(o.latitude));
        return a !== 0 ? a : X(_t(s.longitude), _t(o.longitude));
      }(e.geoPointValue, t.geoPointValue);
    case 9:
      return function(s, o) {
        const a = s.values || [], c = o.values || [];
        for (let u = 0; u < a.length && u < c.length; ++u) {
          const l = wn(a[u], c[u]);
          if (l)
            return l;
        }
        return X(a.length, c.length);
      }(e.arrayValue, t.arrayValue);
    case 10:
      return function(s, o) {
        if (s === Gr.mapValue && o === Gr.mapValue)
          return 0;
        if (s === Gr.mapValue)
          return 1;
        if (o === Gr.mapValue)
          return -1;
        const a = s.fields || {}, c = Object.keys(a), u = o.fields || {}, l = Object.keys(u);
        c.sort(), l.sort();
        for (let h = 0; h < c.length && h < l.length; ++h) {
          const d = X(c[h], l[h]);
          if (d !== 0)
            return d;
          const p = wn(a[c[h]], u[l[h]]);
          if (p !== 0)
            return p;
        }
        return X(c.length, l.length);
      }(e.mapValue, t.mapValue);
    default:
      throw L();
  }
}
function Oc(e, t) {
  if (typeof e == "string" && typeof t == "string" && e.length === t.length)
    return X(e, t);
  const n = Ne(e), r = Ne(t), i = X(n.seconds, r.seconds);
  return i !== 0 ? i : X(n.nanos, r.nanos);
}
function Tn(e) {
  return ao(e);
}
function ao(e) {
  return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(n) {
    const r = Ne(n);
    return `time(${r.seconds},${r.nanos})`;
  }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function(n) {
    return Xe(n).toBase64();
  }(e.bytesValue) : "referenceValue" in e ? function(n) {
    return k.fromName(n).toString();
  }(e.referenceValue) : "geoPointValue" in e ? function(n) {
    return `geo(${n.latitude},${n.longitude})`;
  }(e.geoPointValue) : "arrayValue" in e ? function(n) {
    let r = "[", i = !0;
    for (const s of n.values || [])
      i ? i = !1 : r += ",", r += ao(s);
    return r + "]";
  }(e.arrayValue) : "mapValue" in e ? function(n) {
    const r = Object.keys(n.fields || {}).sort();
    let i = "{", s = !0;
    for (const o of r)
      s ? s = !1 : i += ",", i += `${o}:${ao(n.fields[o])}`;
    return i + "}";
  }(e.mapValue) : L();
}
function Mc(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
  };
}
function co(e) {
  return !!e && "integerValue" in e;
}
function ha(e) {
  return !!e && "arrayValue" in e;
}
function Lc(e) {
  return !!e && "nullValue" in e;
}
function Fc(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function Xr(e) {
  return !!e && "mapValue" in e;
}
function Wn(e) {
  if (e.geoPointValue)
    return {
      geoPointValue: Object.assign({}, e.geoPointValue)
    };
  if (e.timestampValue && typeof e.timestampValue == "object")
    return {
      timestampValue: Object.assign({}, e.timestampValue)
    };
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return nn(e.mapValue.fields, (n, r) => t.mapValue.fields[n] = Wn(r)), t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
      t.arrayValue.values[n] = Wn(e.arrayValue.values[n]);
    return t;
  }
  return Object.assign({}, e);
}
function u_(e) {
  return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new Ht({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(t) {
    if (t.isEmpty())
      return this.value;
    {
      let n = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (n = (n.mapValue.fields || {})[t.get(r)], !Xr(n))
          return null;
      return n = (n.mapValue.fields || {})[t.lastSegment()], n || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(t, n) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Wn(n);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(t) {
    let n = Nt.emptyPath(), r = {}, i = [];
    t.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const c = this.getFieldsMap(n);
        this.applyChanges(c, r, i), r = {}, i = [], n = a.popLast();
      }
      o ? r[a.lastSegment()] = Wn(o) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(t) {
    const n = this.field(t.popLast());
    Xr(n) && n.mapValue.fields && delete n.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return me(this.value, t.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(t) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = {
      fields: {}
    });
    for (let r = 0; r < t.length; ++r) {
      let i = n.mapValue.fields[t.get(r)];
      Xr(i) && i.mapValue.fields || (i = {
        mapValue: {
          fields: {}
        }
      }, n.mapValue.fields[t.get(r)] = i), n = i;
    }
    return n.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(t, n, r) {
    nn(n, (i, s) => t[i] = s);
    for (const i of r)
      delete t[i];
  }
  clone() {
    return new Ht(Wn(this.value));
  }
}
function Eh(e) {
  const t = [];
  return nn(e.fields, (n, r) => {
    const i = new Nt([n]);
    if (Xr(r)) {
      const s = Eh(r.mapValue).fields;
      if (s.length === 0)
        t.push(i);
      else
        for (const o of s)
          t.push(i.child(o));
    } else
      t.push(i);
  }), new Qt(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t {
  constructor(t, n, r, i, s, o, a) {
    this.key = t, this.documentType = n, this.version = r, this.readTime = i, this.createTime = s, this.data = o, this.documentState = a;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(t) {
    return new $t(
      t,
      0,
      /* version */
      B.min(),
      /* readTime */
      B.min(),
      /* createTime */
      B.min(),
      Ht.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(t, n, r, i) {
    return new $t(
      t,
      1,
      /* version */
      n,
      /* readTime */
      B.min(),
      /* createTime */
      r,
      i,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(t, n) {
    return new $t(
      t,
      2,
      /* version */
      n,
      /* readTime */
      B.min(),
      /* createTime */
      B.min(),
      Ht.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(t, n) {
    return new $t(
      t,
      3,
      /* version */
      n,
      /* readTime */
      B.min(),
      /* createTime */
      B.min(),
      Ht.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(t, n) {
    return !this.createTime.isEqual(B.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = t), this.version = t, this.documentType = 1, this.data = n, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(t) {
    return this.version = t, this.documentType = 2, this.data = Ht.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(t) {
    return this.version = t, this.documentType = 3, this.data = Ht.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = B.min(), this;
  }
  setReadTime(t) {
    return this.readTime = t, this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return t instanceof $t && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
  }
  mutableCopy() {
    return new $t(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mi {
  constructor(t, n) {
    this.position = t, this.inclusive = n;
  }
}
function $c(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s = t[i], o = e.position[i];
    if (s.field.isKeyField() ? r = k.comparator(k.fromName(o.referenceValue), n.key) : r = wn(o, n.data.field(s.field)), s.dir === "desc" && (r *= -1), r !== 0)
      break;
  }
  return r;
}
function Uc(e, t) {
  if (e === null)
    return t === null;
  if (t === null || e.inclusive !== t.inclusive || e.position.length !== t.position.length)
    return !1;
  for (let n = 0; n < e.position.length; n++)
    if (!me(e.position[n], t.position[n]))
      return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi {
  constructor(t, n = "asc") {
    this.field = t, this.dir = n;
  }
}
function l_(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wh {
}
class vt extends wh {
  constructor(t, n, r) {
    super(), this.field = t, this.op = n, this.value = r;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, n, r) {
    return t.isKeyField() ? n === "in" || n === "not-in" ? this.createKeyFieldInFilter(t, n, r) : new d_(t, n, r) : n === "array-contains" ? new m_(t, r) : n === "in" ? new g_(t, r) : n === "not-in" ? new y_(t, r) : n === "array-contains-any" ? new __(t, r) : new vt(t, n, r);
  }
  static createKeyFieldInFilter(t, n, r) {
    return n === "in" ? new f_(t, r) : new p_(t, r);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return this.op === "!=" ? n !== null && this.matchesComparison(wn(n, this.value)) : n !== null && Je(this.value) === Je(n) && this.matchesComparison(wn(n, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return L();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class se extends wh {
  constructor(t, n) {
    super(), this.filters = t, this.op = n, this.ue = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(t, n) {
    return new se(t, n);
  }
  matches(t) {
    return Th(this) ? this.filters.find((n) => !n.matches(t)) === void 0 : this.filters.find((n) => n.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return this.ue !== null || (this.ue = this.filters.reduce((t, n) => t.concat(n.getFlattenedFilters()), [])), this.ue;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Th(e) {
  return e.op === "and";
}
function Ih(e) {
  return h_(e) && Th(e);
}
function h_(e) {
  for (const t of e.filters)
    if (t instanceof se)
      return !1;
  return !0;
}
function uo(e) {
  if (e instanceof vt)
    return e.field.canonicalString() + e.op.toString() + Tn(e.value);
  if (Ih(e))
    return e.filters.map((t) => uo(t)).join(",");
  {
    const t = e.filters.map((n) => uo(n)).join(",");
    return `${e.op}(${t})`;
  }
}
function Ah(e, t) {
  return e instanceof vt ? function(r, i) {
    return i instanceof vt && r.op === i.op && r.field.isEqual(i.field) && me(r.value, i.value);
  }(e, t) : e instanceof se ? function(r, i) {
    return i instanceof se && r.op === i.op && r.filters.length === i.filters.length ? r.filters.reduce((s, o, a) => s && Ah(o, i.filters[a]), !0) : !1;
  }(e, t) : void L();
}
function Sh(e) {
  return e instanceof vt ? function(n) {
    return `${n.field.canonicalString()} ${n.op} ${Tn(n.value)}`;
  }(e) : e instanceof se ? function(n) {
    return n.op.toString() + " {" + n.getFilters().map(Sh).join(" ,") + "}";
  }(e) : "Filter";
}
class d_ extends vt {
  constructor(t, n, r) {
    super(t, n, r), this.key = k.fromName(r.referenceValue);
  }
  matches(t) {
    const n = k.comparator(t.key, this.key);
    return this.matchesComparison(n);
  }
}
class f_ extends vt {
  constructor(t, n) {
    super(t, "in", n), this.keys = Rh("in", n);
  }
  matches(t) {
    return this.keys.some((n) => n.isEqual(t.key));
  }
}
class p_ extends vt {
  constructor(t, n) {
    super(t, "not-in", n), this.keys = Rh("not-in", n);
  }
  matches(t) {
    return !this.keys.some((n) => n.isEqual(t.key));
  }
}
function Rh(e, t) {
  var n;
  return (((n = t.arrayValue) === null || n === void 0 ? void 0 : n.values) || []).map((r) => k.fromName(r.referenceValue));
}
class m_ extends vt {
  constructor(t, n) {
    super(t, "array-contains", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return ha(n) && lr(n.arrayValue, this.value);
  }
}
class g_ extends vt {
  constructor(t, n) {
    super(t, "in", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return n !== null && lr(this.value.arrayValue, n);
  }
}
class y_ extends vt {
  constructor(t, n) {
    super(t, "not-in", n);
  }
  matches(t) {
    if (lr(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return !1;
    const n = t.data.field(this.field);
    return n !== null && !lr(this.value.arrayValue, n);
  }
}
class __ extends vt {
  constructor(t, n) {
    super(t, "array-contains-any", n);
  }
  matches(t) {
    const n = t.data.field(this.field);
    return !(!ha(n) || !n.arrayValue.values) && n.arrayValue.values.some((r) => lr(this.value.arrayValue, r));
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v_ {
  constructor(t, n = null, r = [], i = [], s = null, o = null, a = null) {
    this.path = t, this.collectionGroup = n, this.orderBy = r, this.filters = i, this.limit = s, this.startAt = o, this.endAt = a, this.ce = null;
  }
}
function Bc(e, t = null, n = [], r = [], i = null, s = null, o = null) {
  return new v_(e, t, n, r, i, s, o);
}
function da(e) {
  const t = j(e);
  if (t.ce === null) {
    let n = t.path.canonicalString();
    t.collectionGroup !== null && (n += "|cg:" + t.collectionGroup), n += "|f:", n += t.filters.map((r) => uo(r)).join(","), n += "|ob:", n += t.orderBy.map((r) => function(s) {
      return s.field.canonicalString() + s.dir;
    }(r)).join(","), zi(t.limit) || (n += "|l:", n += t.limit), t.startAt && (n += "|lb:", n += t.startAt.inclusive ? "b:" : "a:", n += t.startAt.position.map((r) => Tn(r)).join(",")), t.endAt && (n += "|ub:", n += t.endAt.inclusive ? "a:" : "b:", n += t.endAt.position.map((r) => Tn(r)).join(",")), t.ce = n;
  }
  return t.ce;
}
function fa(e, t) {
  if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length)
    return !1;
  for (let n = 0; n < e.orderBy.length; n++)
    if (!l_(e.orderBy[n], t.orderBy[n]))
      return !1;
  if (e.filters.length !== t.filters.length)
    return !1;
  for (let n = 0; n < e.filters.length; n++)
    if (!Ah(e.filters[n], t.filters[n]))
      return !1;
  return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!Uc(e.startAt, t.startAt) && Uc(e.endAt, t.endAt);
}
function lo(e) {
  return k.isDocumentKey(e.path) && e.collectionGroup === null && e.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cr {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(t, n = null, r = [], i = [], s = null, o = "F", a = null, c = null) {
    this.path = t, this.collectionGroup = n, this.explicitOrderBy = r, this.filters = i, this.limit = s, this.limitType = o, this.startAt = a, this.endAt = c, this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.he = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.Pe = null, this.startAt, this.endAt;
  }
}
function E_(e, t, n, r, i, s, o, a) {
  return new Cr(e, t, n, r, i, s, o, a);
}
function Ch(e) {
  return new Cr(e);
}
function jc(e) {
  return e.filters.length === 0 && e.limit === null && e.startAt == null && e.endAt == null && (e.explicitOrderBy.length === 0 || e.explicitOrderBy.length === 1 && e.explicitOrderBy[0].field.isKeyField());
}
function bh(e) {
  return e.collectionGroup !== null;
}
function Hn(e) {
  const t = j(e);
  if (t.le === null) {
    t.le = [];
    const n = /* @__PURE__ */ new Set();
    for (const s of t.explicitOrderBy)
      t.le.push(s), n.add(s.field.canonicalString());
    const r = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
    (function(o) {
      let a = new Ot(Nt.comparator);
      return o.filters.forEach((c) => {
        c.getFlattenedFilters().forEach((u) => {
          u.isInequality() && (a = a.add(u.field));
        });
      }), a;
    })(t).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || t.le.push(new gi(s, r));
    }), // Add the document key field to the last if it is not explicitly ordered.
    n.has(Nt.keyField().canonicalString()) || t.le.push(new gi(Nt.keyField(), r));
  }
  return t.le;
}
function he(e) {
  const t = j(e);
  return t.he || (t.he = w_(t, Hn(e))), t.he;
}
function w_(e, t) {
  if (e.limitType === "F")
    return Bc(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
  {
    t = t.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new gi(i.field, s);
    });
    const n = e.endAt ? new mi(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new mi(e.startAt.position, e.startAt.inclusive) : null;
    return Bc(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function ho(e, t) {
  const n = e.filters.concat([t]);
  return new Cr(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function fo(e, t, n) {
  return new Cr(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function Gi(e, t) {
  return fa(he(e), he(t)) && e.limitType === t.limitType;
}
function Ph(e) {
  return `${da(he(e))}|lt:${e.limitType}`;
}
function on(e) {
  return `Query(target=${function(n) {
    let r = n.path.canonicalString();
    return n.collectionGroup !== null && (r += " collectionGroup=" + n.collectionGroup), n.filters.length > 0 && (r += `, filters: [${n.filters.map((i) => Sh(i)).join(", ")}]`), zi(n.limit) || (r += ", limit: " + n.limit), n.orderBy.length > 0 && (r += `, orderBy: [${n.orderBy.map((i) => function(o) {
      return `${o.field.canonicalString()} (${o.dir})`;
    }(i)).join(", ")}]`), n.startAt && (r += ", startAt: ", r += n.startAt.inclusive ? "b:" : "a:", r += n.startAt.position.map((i) => Tn(i)).join(",")), n.endAt && (r += ", endAt: ", r += n.endAt.inclusive ? "a:" : "b:", r += n.endAt.position.map((i) => Tn(i)).join(",")), `Target(${r})`;
  }(he(e))}; limitType=${e.limitType})`;
}
function Wi(e, t) {
  return t.isFoundDocument() && function(r, i) {
    const s = i.key.path;
    return r.collectionGroup !== null ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s) : k.isDocumentKey(r.path) ? r.path.isEqual(s) : r.path.isImmediateParentOf(s);
  }(e, t) && function(r, i) {
    for (const s of Hn(r))
      if (!s.field.isKeyField() && i.data.field(s.field) === null)
        return !1;
    return !0;
  }(e, t) && function(r, i) {
    for (const s of r.filters)
      if (!s.matches(i))
        return !1;
    return !0;
  }(e, t) && function(r, i) {
    return !(r.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function(o, a, c) {
      const u = $c(o, a, c);
      return o.inclusive ? u <= 0 : u < 0;
    }(r.startAt, Hn(r), i) || r.endAt && !function(o, a, c) {
      const u = $c(o, a, c);
      return o.inclusive ? u >= 0 : u > 0;
    }(r.endAt, Hn(r), i));
  }(e, t);
}
function T_(e) {
  return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
}
function Vh(e) {
  return (t, n) => {
    let r = !1;
    for (const i of Hn(e)) {
      const s = I_(i, t, n);
      if (s !== 0)
        return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function I_(e, t, n) {
  const r = e.field.isKeyField() ? k.comparator(t.key, n.key) : function(s, o, a) {
    const c = o.data.field(s), u = a.data.field(s);
    return c !== null && u !== null ? wn(c, u) : L();
  }(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return L();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn {
  constructor(t, n) {
    this.mapKeyFn = t, this.equalsFn = n, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(t) {
    const n = this.mapKeyFn(t), r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r)
        if (this.equalsFn(i, t))
          return s;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  /** Put this key and value in the map. */
  set(t, n) {
    const r = this.mapKeyFn(t), i = this.inner[r];
    if (i === void 0)
      return this.inner[r] = [[t, n]], void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], t))
        return void (i[s] = [t, n]);
    i.push([t, n]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(t) {
    const n = this.mapKeyFn(t), r = this.inner[n];
    if (r === void 0)
      return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], t))
        return r.length === 1 ? delete this.inner[n] : r.splice(i, 1), this.innerSize--, !0;
    return !1;
  }
  forEach(t) {
    nn(this.inner, (n, r) => {
      for (const [i, s] of r)
        t(i, s);
    });
  }
  isEmpty() {
    return _h(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A_ = new lt(k.comparator);
function Ie() {
  return A_;
}
const Dh = new lt(k.comparator);
function Bn(...e) {
  let t = Dh;
  for (const n of e)
    t = t.insert(n.key, n);
  return t;
}
function xh(e) {
  let t = Dh;
  return e.forEach((n, r) => t = t.insert(n, r.overlayedDocument)), t;
}
function We() {
  return Kn();
}
function Nh() {
  return Kn();
}
function Kn() {
  return new Dn((e) => e.toString(), (e, t) => e.isEqual(t));
}
const S_ = new lt(k.comparator), R_ = new Ot(k.comparator);
function z(...e) {
  let t = R_;
  for (const n of e)
    t = t.add(n);
  return t;
}
const C_ = new Ot(X);
function b_() {
  return C_;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kh(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t))
      return {
        doubleValue: "NaN"
      };
    if (t === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (t === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: pi(t) ? "-0" : t
  };
}
function Oh(e) {
  return {
    integerValue: "" + e
  };
}
function P_(e, t) {
  return o_(t) ? Oh(t) : kh(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi {
  constructor() {
    this._ = void 0;
  }
}
function V_(e, t, n) {
  return e instanceof yi ? function(i, s) {
    const o = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: i.seconds,
            nanos: i.nanoseconds
          }
        }
      }
    };
    return s && ua(s) && (s = la(s)), s && (o.fields.__previous_value__ = s), {
      mapValue: o
    };
  }(n, t) : e instanceof hr ? Lh(e, t) : e instanceof dr ? Fh(e, t) : function(i, s) {
    const o = Mh(i, s), a = qc(o) + qc(i.Ie);
    return co(o) && co(i.Ie) ? Oh(a) : kh(i.serializer, a);
  }(e, t);
}
function D_(e, t, n) {
  return e instanceof hr ? Lh(e, t) : e instanceof dr ? Fh(e, t) : n;
}
function Mh(e, t) {
  return e instanceof _i ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function(r) {
      return co(r) || function(s) {
        return !!s && "doubleValue" in s;
      }(r);
    }(t) ? t : {
      integerValue: 0
    }
  ) : null;
}
class yi extends Hi {
}
class hr extends Hi {
  constructor(t) {
    super(), this.elements = t;
  }
}
function Lh(e, t) {
  const n = $h(t);
  for (const r of e.elements)
    n.some((i) => me(i, r)) || n.push(r);
  return {
    arrayValue: {
      values: n
    }
  };
}
class dr extends Hi {
  constructor(t) {
    super(), this.elements = t;
  }
}
function Fh(e, t) {
  let n = $h(t);
  for (const r of e.elements)
    n = n.filter((i) => !me(i, r));
  return {
    arrayValue: {
      values: n
    }
  };
}
class _i extends Hi {
  constructor(t, n) {
    super(), this.serializer = t, this.Ie = n;
  }
}
function qc(e) {
  return _t(e.integerValue || e.doubleValue);
}
function $h(e) {
  return ha(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function x_(e, t) {
  return e.field.isEqual(t.field) && function(r, i) {
    return r instanceof hr && i instanceof hr || r instanceof dr && i instanceof dr ? En(r.elements, i.elements, me) : r instanceof _i && i instanceof _i ? me(r.Ie, i.Ie) : r instanceof yi && i instanceof yi;
  }(e.transform, t.transform);
}
class N_ {
  constructor(t, n) {
    this.version = t, this.transformResults = n;
  }
}
class de {
  constructor(t, n) {
    this.updateTime = t, this.exists = n;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new de();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(t) {
    return new de(void 0, t);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(t) {
    return new de(t);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }
}
function Jr(e, t) {
  return e.updateTime !== void 0 ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : e.exists === void 0 || e.exists === t.isFoundDocument();
}
class Ki {
}
function Uh(e, t) {
  if (!e.hasLocalMutations || t && t.fields.length === 0)
    return null;
  if (t === null)
    return e.isNoDocument() ? new jh(e.key, de.none()) : new br(e.key, e.data, de.none());
  {
    const n = e.data, r = Ht.empty();
    let i = new Ot(Nt.comparator);
    for (let s of t.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && (s = s.popLast(), o = n.field(s)), o === null ? r.delete(s) : r.set(s, o), i = i.add(s);
      }
    return new $e(e.key, r, new Qt(i.toArray()), de.none());
  }
}
function k_(e, t, n) {
  e instanceof br ? function(i, s, o) {
    const a = i.value.clone(), c = Gc(i.fieldTransforms, s, o.transformResults);
    a.setAll(c), s.convertToFoundDocument(o.version, a).setHasCommittedMutations();
  }(e, t, n) : e instanceof $e ? function(i, s, o) {
    if (!Jr(i.precondition, s))
      return void s.convertToUnknownDocument(o.version);
    const a = Gc(i.fieldTransforms, s, o.transformResults), c = s.data;
    c.setAll(Bh(i)), c.setAll(a), s.convertToFoundDocument(o.version, c).setHasCommittedMutations();
  }(e, t, n) : function(i, s, o) {
    s.convertToNoDocument(o.version).setHasCommittedMutations();
  }(0, t, n);
}
function Qn(e, t, n, r) {
  return e instanceof br ? function(s, o, a, c) {
    if (!Jr(s.precondition, o))
      return a;
    const u = s.value.clone(), l = Wc(s.fieldTransforms, c, o);
    return u.setAll(l), o.convertToFoundDocument(o.version, u).setHasLocalMutations(), null;
  }(e, t, n, r) : e instanceof $e ? function(s, o, a, c) {
    if (!Jr(s.precondition, o))
      return a;
    const u = Wc(s.fieldTransforms, c, o), l = o.data;
    return l.setAll(Bh(s)), l.setAll(u), o.convertToFoundDocument(o.version, l).setHasLocalMutations(), a === null ? null : a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((h) => h.field));
  }(e, t, n, r) : function(s, o, a) {
    return Jr(s.precondition, o) ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null) : a;
  }(e, t, n);
}
function O_(e, t) {
  let n = null;
  for (const r of e.fieldTransforms) {
    const i = t.data.field(r.field), s = Mh(r.transform, i || null);
    s != null && (n === null && (n = Ht.empty()), n.set(r.field, s));
  }
  return n || null;
}
function zc(e, t) {
  return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function(r, i) {
    return r === void 0 && i === void 0 || !(!r || !i) && En(r, i, (s, o) => x_(s, o));
  }(e.fieldTransforms, t.fieldTransforms) && (e.type === 0 ? e.value.isEqual(t.value) : e.type !== 1 || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
class br extends Ki {
  constructor(t, n, r, i = []) {
    super(), this.key = t, this.value = n, this.precondition = r, this.fieldTransforms = i, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
}
class $e extends Ki {
  constructor(t, n, r, i, s = []) {
    super(), this.key = t, this.data = n, this.fieldMask = r, this.precondition = i, this.fieldTransforms = s, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Bh(e) {
  const t = /* @__PURE__ */ new Map();
  return e.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const r = e.data.field(n);
      t.set(n, r);
    }
  }), t;
}
function Gc(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  st(e.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = e[i], o = s.transform, a = t.data.field(s.field);
    r.set(s.field, D_(o, a, n[i]));
  }
  return r;
}
function Wc(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of e) {
    const s = i.transform, o = n.data.field(i.field);
    r.set(i.field, V_(s, o, t));
  }
  return r;
}
class jh extends Ki {
  constructor(t, n) {
    super(), this.key = t, this.precondition = n, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
class M_ extends Ki {
  constructor(t, n) {
    super(), this.key = t, this.precondition = n, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L_ {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(t, n, r, i) {
    this.batchId = t, this.localWriteTime = n, this.baseMutations = r, this.mutations = i;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(t, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(t.key) && k_(s, t, r[i]);
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(t, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (n = Qn(r, t, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (n = Qn(r, t, n, this.localWriteTime));
    return n;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(t, n) {
    const r = Nh();
    return this.mutations.forEach((i) => {
      const s = t.get(i.key), o = s.overlayedDocument;
      let a = this.applyToLocalView(o, s.mutatedFields);
      a = n.has(i.key) ? null : a;
      const c = Uh(o, a);
      c !== null && r.set(i.key, c), o.isValidDocument() || o.convertToNoDocument(B.min());
    }), r;
  }
  keys() {
    return this.mutations.reduce((t, n) => t.add(n.key), z());
  }
  isEqual(t) {
    return this.batchId === t.batchId && En(this.mutations, t.mutations, (n, r) => zc(n, r)) && En(this.baseMutations, t.baseMutations, (n, r) => zc(n, r));
  }
}
class pa {
  constructor(t, n, r, i) {
    this.batch = t, this.commitVersion = n, this.mutationResults = r, this.docVersions = i;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(t, n, r) {
    st(t.mutations.length === r.length);
    let i = /* @__PURE__ */ function() {
      return S_;
    }();
    const s = t.mutations;
    for (let o = 0; o < s.length; o++)
      i = i.insert(s[o].key, r[o].version);
    return new pa(t, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F_ {
  constructor(t, n) {
    this.largestBatchId = t, this.mutation = n;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $_ {
  constructor(t, n) {
    this.count = t, this.unchangedNames = n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt, K;
function U_(e) {
  switch (e) {
    default:
      return L();
    case _.CANCELLED:
    case _.UNKNOWN:
    case _.DEADLINE_EXCEEDED:
    case _.RESOURCE_EXHAUSTED:
    case _.INTERNAL:
    case _.UNAVAILABLE:
    case _.UNAUTHENTICATED:
      return !1;
    case _.INVALID_ARGUMENT:
    case _.NOT_FOUND:
    case _.ALREADY_EXISTS:
    case _.PERMISSION_DENIED:
    case _.FAILED_PRECONDITION:
    case _.ABORTED:
    case _.OUT_OF_RANGE:
    case _.UNIMPLEMENTED:
    case _.DATA_LOSS:
      return !0;
  }
}
function qh(e) {
  if (e === void 0)
    return pe("GRPC error has no .code"), _.UNKNOWN;
  switch (e) {
    case yt.OK:
      return _.OK;
    case yt.CANCELLED:
      return _.CANCELLED;
    case yt.UNKNOWN:
      return _.UNKNOWN;
    case yt.DEADLINE_EXCEEDED:
      return _.DEADLINE_EXCEEDED;
    case yt.RESOURCE_EXHAUSTED:
      return _.RESOURCE_EXHAUSTED;
    case yt.INTERNAL:
      return _.INTERNAL;
    case yt.UNAVAILABLE:
      return _.UNAVAILABLE;
    case yt.UNAUTHENTICATED:
      return _.UNAUTHENTICATED;
    case yt.INVALID_ARGUMENT:
      return _.INVALID_ARGUMENT;
    case yt.NOT_FOUND:
      return _.NOT_FOUND;
    case yt.ALREADY_EXISTS:
      return _.ALREADY_EXISTS;
    case yt.PERMISSION_DENIED:
      return _.PERMISSION_DENIED;
    case yt.FAILED_PRECONDITION:
      return _.FAILED_PRECONDITION;
    case yt.ABORTED:
      return _.ABORTED;
    case yt.OUT_OF_RANGE:
      return _.OUT_OF_RANGE;
    case yt.UNIMPLEMENTED:
      return _.UNIMPLEMENTED;
    case yt.DATA_LOSS:
      return _.DATA_LOSS;
    default:
      return L();
  }
}
(K = yt || (yt = {}))[K.OK = 0] = "OK", K[K.CANCELLED = 1] = "CANCELLED", K[K.UNKNOWN = 2] = "UNKNOWN", K[K.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", K[K.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", K[K.NOT_FOUND = 5] = "NOT_FOUND", K[K.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", K[K.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", K[K.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", K[K.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", K[K.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", K[K.ABORTED = 10] = "ABORTED", K[K.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", K[K.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", K[K.INTERNAL = 13] = "INTERNAL", K[K.UNAVAILABLE = 14] = "UNAVAILABLE", K[K.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B_() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const j_ = new dn([4294967295, 4294967295], 0);
function Hc(e) {
  const t = B_().encode(e), n = new qy();
  return n.update(t), new Uint8Array(n.digest());
}
function Kc(e) {
  const t = new DataView(e.buffer), n = t.getUint32(
    0,
    /* littleEndian= */
    !0
  ), r = t.getUint32(
    4,
    /* littleEndian= */
    !0
  ), i = t.getUint32(
    8,
    /* littleEndian= */
    !0
  ), s = t.getUint32(
    12,
    /* littleEndian= */
    !0
  );
  return [new dn([n, r], 0), new dn([i, s], 0)];
}
class ma {
  constructor(t, n, r) {
    if (this.bitmap = t, this.padding = n, this.hashCount = r, n < 0 || n >= 8)
      throw new jn(`Invalid padding: ${n}`);
    if (r < 0)
      throw new jn(`Invalid hash count: ${r}`);
    if (t.length > 0 && this.hashCount === 0)
      throw new jn(`Invalid hash count: ${r}`);
    if (t.length === 0 && n !== 0)
      throw new jn(`Invalid padding when bitmap length is 0: ${n}`);
    this.Te = 8 * t.length - n, // Set the bit count in Integer to avoid repetition in mightContain().
    this.Ee = dn.fromNumber(this.Te);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  de(t, n, r) {
    let i = t.add(n.multiply(dn.fromNumber(r)));
    return i.compare(j_) === 1 && (i = new dn([i.getBits(0), i.getBits(1)], 0)), i.modulo(this.Ee).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  Ae(t) {
    return (this.bitmap[Math.floor(t / 8)] & 1 << t % 8) != 0;
  }
  mightContain(t) {
    if (this.Te === 0)
      return !1;
    const n = Hc(t), [r, i] = Kc(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s);
      if (!this.Ae(o))
        return !1;
    }
    return !0;
  }
  /** Create bloom filter for testing purposes only. */
  static create(t, n, r) {
    const i = t % 8 == 0 ? 0 : 8 - t % 8, s = new Uint8Array(Math.ceil(t / 8)), o = new ma(s, i, n);
    return r.forEach((a) => o.insert(a)), o;
  }
  insert(t) {
    if (this.Te === 0)
      return;
    const n = Hc(t), [r, i] = Kc(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.de(r, i, s);
      this.Re(o);
    }
  }
  Re(t) {
    const n = Math.floor(t / 8), r = t % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class jn extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi {
  constructor(t, n, r, i, s) {
    this.snapshotVersion = t, this.targetChanges = n, this.targetMismatches = r, this.documentUpdates = i, this.resolvedLimboDocuments = s;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(t, n, r) {
    const i = /* @__PURE__ */ new Map();
    return i.set(t, Pr.createSynthesizedTargetChangeForCurrentChange(t, n, r)), new Qi(B.min(), i, new lt(X), Ie(), z());
  }
}
class Pr {
  constructor(t, n, r, i, s) {
    this.resumeToken = t, this.current = n, this.addedDocuments = r, this.modifiedDocuments = i, this.removedDocuments = s;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(t, n, r) {
    return new Pr(r, n, z(), z(), z());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr {
  constructor(t, n, r, i) {
    this.Ve = t, this.removedTargetIds = n, this.key = r, this.me = i;
  }
}
class zh {
  constructor(t, n) {
    this.targetId = t, this.fe = n;
  }
}
class Gh {
  constructor(t, n, r = jt.EMPTY_BYTE_STRING, i = null) {
    this.state = t, this.targetIds = n, this.resumeToken = r, this.cause = i;
  }
}
class Qc {
  constructor() {
    this.ge = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.pe = Xc(), /** See public getters for explanations of these fields. */
    this.ye = jt.EMPTY_BYTE_STRING, this.we = !1, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.Se = !0;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.we;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.ye;
  }
  /** Whether this target has pending target adds or target removes. */
  get be() {
    return this.ge !== 0;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get De() {
    return this.Se;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  Ce(t) {
    t.approximateByteSize() > 0 && (this.Se = !0, this.ye = t);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  ve() {
    let t = z(), n = z(), r = z();
    return this.pe.forEach((i, s) => {
      switch (s) {
        case 0:
          t = t.add(i);
          break;
        case 2:
          n = n.add(i);
          break;
        case 1:
          r = r.add(i);
          break;
        default:
          L();
      }
    }), new Pr(this.ye, this.we, t, n, r);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  Fe() {
    this.Se = !1, this.pe = Xc();
  }
  Me(t, n) {
    this.Se = !0, this.pe = this.pe.insert(t, n);
  }
  xe(t) {
    this.Se = !0, this.pe = this.pe.remove(t);
  }
  Oe() {
    this.ge += 1;
  }
  Ne() {
    this.ge -= 1, st(this.ge >= 0);
  }
  Be() {
    this.Se = !0, this.we = !0;
  }
}
class q_ {
  constructor(t) {
    this.Le = t, /** The internal state of all tracked targets. */
    this.ke = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.qe = Ie(), /** A mapping of document keys to their set of target IDs. */
    this.Qe = Yc(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Ke = new lt(X);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  $e(t) {
    for (const n of t.Ve)
      t.me && t.me.isFoundDocument() ? this.Ue(n, t.me) : this.We(n, t.key, t.me);
    for (const n of t.removedTargetIds)
      this.We(n, t.key, t.me);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  Ge(t) {
    this.forEachTarget(t, (n) => {
      const r = this.ze(n);
      switch (t.state) {
        case 0:
          this.je(n) && r.Ce(t.resumeToken);
          break;
        case 1:
          r.Ne(), r.be || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.Fe(), r.Ce(t.resumeToken);
          break;
        case 2:
          r.Ne(), r.be || this.removeTarget(n);
          break;
        case 3:
          this.je(n) && (r.Be(), r.Ce(t.resumeToken));
          break;
        case 4:
          this.je(n) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.He(n), r.Ce(t.resumeToken));
          break;
        default:
          L();
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(t, n) {
    t.targetIds.length > 0 ? t.targetIds.forEach(n) : this.ke.forEach((r, i) => {
      this.je(i) && n(i);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  Je(t) {
    const n = t.targetId, r = t.fe.count, i = this.Ye(n);
    if (i) {
      const s = i.target;
      if (lo(s))
        if (r === 0) {
          const o = new k(s.path);
          this.We(n, o, $t.newNoDocument(o, B.min()));
        } else
          st(r === 1);
      else {
        const o = this.Ze(n);
        if (o !== r) {
          const a = this.Xe(t), c = a ? this.et(a, t, o) : 1;
          if (c !== 0) {
            this.He(n);
            const u = c === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Ke = this.Ke.insert(n, u);
          }
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  Xe(t) {
    const n = t.fe.unchangedNames;
    if (!n || !n.bits)
      return null;
    const { bits: { bitmap: r = "", padding: i = 0 }, hashCount: s = 0 } = n;
    let o, a;
    try {
      o = Xe(r).toUint8Array();
    } catch (c) {
      if (c instanceof vh)
        return vn("Decoding the base64 bloom filter in existence filter failed (" + c.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw c;
    }
    try {
      a = new ma(o, i, s);
    } catch (c) {
      return vn(c instanceof jn ? "BloomFilter error: " : "Applying bloom filter failed: ", c), null;
    }
    return a.Te === 0 ? null : a;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  et(t, n, r) {
    return n.fe.count === r - this.rt(t, n.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  rt(t, n) {
    const r = this.Le.getRemoteKeysForTarget(n);
    let i = 0;
    return r.forEach((s) => {
      const o = this.Le.nt(), a = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
      t.mightContain(a) || (this.We(
        n,
        s,
        /*updatedDocument=*/
        null
      ), i++);
    }), i;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  it(t) {
    const n = /* @__PURE__ */ new Map();
    this.ke.forEach((s, o) => {
      const a = this.Ye(o);
      if (a) {
        if (s.current && lo(a.target)) {
          const c = new k(a.target.path);
          this.qe.get(c) !== null || this.st(o, c) || this.We(o, c, $t.newNoDocument(c, t));
        }
        s.De && (n.set(o, s.ve()), s.Fe());
      }
    });
    let r = z();
    this.Qe.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((c) => {
        const u = this.Ye(c);
        return !u || u.purpose === "TargetPurposeLimboResolution" || (a = !1, !1);
      }), a && (r = r.add(s));
    }), this.qe.forEach((s, o) => o.setReadTime(t));
    const i = new Qi(t, n, this.Ke, this.qe, r);
    return this.qe = Ie(), this.Qe = Yc(), this.Ke = new lt(X), i;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  Ue(t, n) {
    if (!this.je(t))
      return;
    const r = this.st(t, n.key) ? 2 : 0;
    this.ze(t).Me(n.key, r), this.qe = this.qe.insert(n.key, n), this.Qe = this.Qe.insert(n.key, this.ot(n.key).add(t));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  We(t, n, r) {
    if (!this.je(t))
      return;
    const i = this.ze(t);
    this.st(t, n) ? i.Me(
      n,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      i.xe(n)
    ), this.Qe = this.Qe.insert(n, this.ot(n).delete(t)), r && (this.qe = this.qe.insert(n, r));
  }
  removeTarget(t) {
    this.ke.delete(t);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  Ze(t) {
    const n = this.ze(t).ve();
    return this.Le.getRemoteKeysForTarget(t).size + n.addedDocuments.size - n.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  Oe(t) {
    this.ze(t).Oe();
  }
  ze(t) {
    let n = this.ke.get(t);
    return n || (n = new Qc(), this.ke.set(t, n)), n;
  }
  ot(t) {
    let n = this.Qe.get(t);
    return n || (n = new Ot(X), this.Qe = this.Qe.insert(t, n)), n;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  je(t) {
    const n = this.Ye(t) !== null;
    return n || R("WatchChangeAggregator", "Detected inactive target", t), n;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  Ye(t) {
    const n = this.ke.get(t);
    return n && n.be ? null : this.Le._t(t);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  He(t) {
    this.ke.set(t, new Qc()), this.Le.getRemoteKeysForTarget(t).forEach((n) => {
      this.We(
        t,
        n,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  st(t, n) {
    return this.Le.getRemoteKeysForTarget(t).has(n);
  }
}
function Yc() {
  return new lt(k.comparator);
}
function Xc() {
  return new lt(k.comparator);
}
const z_ = {
  asc: "ASCENDING",
  desc: "DESCENDING"
}, G_ = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, W_ = {
  and: "AND",
  or: "OR"
};
class H_ {
  constructor(t, n) {
    this.databaseId = t, this.useProto3Json = n;
  }
}
function po(e, t) {
  return e.useProto3Json || zi(t) ? t : {
    value: t
  };
}
function vi(e, t) {
  return e.useProto3Json ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : {
    seconds: "" + t.seconds,
    nanos: t.nanoseconds
  };
}
function Wh(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function K_(e, t) {
  return vi(e, t.toTimestamp());
}
function fe(e) {
  return st(!!e), B.fromTimestamp(function(n) {
    const r = Ne(n);
    return new wt(r.seconds, r.nanos);
  }(e));
}
function ga(e, t) {
  return mo(e, t).canonicalString();
}
function mo(e, t) {
  const n = function(i) {
    return new ct(["projects", i.projectId, "databases", i.database]);
  }(e).child("documents");
  return t === void 0 ? n : n.child(t);
}
function Hh(e) {
  const t = ct.fromString(e);
  return st(Jh(t)), t;
}
function go(e, t) {
  return ga(e.databaseId, t.path);
}
function Rs(e, t) {
  const n = Hh(t);
  if (n.get(1) !== e.databaseId.projectId)
    throw new V(_.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
  if (n.get(3) !== e.databaseId.database)
    throw new V(_.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
  return new k(Qh(n));
}
function Kh(e, t) {
  return ga(e.databaseId, t);
}
function Q_(e) {
  const t = Hh(e);
  return t.length === 4 ? ct.emptyPath() : Qh(t);
}
function yo(e) {
  return new ct(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString();
}
function Qh(e) {
  return st(e.length > 4 && e.get(4) === "documents"), e.popFirst(5);
}
function Jc(e, t, n) {
  return {
    name: go(e, t),
    fields: n.value.mapValue.fields
  };
}
function Y_(e, t) {
  let n;
  if ("targetChange" in t) {
    t.targetChange;
    const r = function(u) {
      return u === "NO_CHANGE" ? 0 : u === "ADD" ? 1 : u === "REMOVE" ? 2 : u === "CURRENT" ? 3 : u === "RESET" ? 4 : L();
    }(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], s = function(u, l) {
      return u.useProto3Json ? (st(l === void 0 || typeof l == "string"), jt.fromBase64String(l || "")) : (st(l === void 0 || l instanceof Uint8Array), jt.fromUint8Array(l || new Uint8Array()));
    }(e, t.targetChange.resumeToken), o = t.targetChange.cause, a = o && function(u) {
      const l = u.code === void 0 ? _.UNKNOWN : qh(u.code);
      return new V(l, u.message || "");
    }(o);
    n = new Gh(r, i, s, a || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Rs(e, r.document.name), s = fe(r.document.updateTime), o = r.document.createTime ? fe(r.document.createTime) : B.min(), a = new Ht({
      mapValue: {
        fields: r.document.fields
      }
    }), c = $t.newFoundDocument(i, s, o, a), u = r.targetIds || [], l = r.removedTargetIds || [];
    n = new Zr(u, l, c.key, c);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const i = Rs(e, r.document), s = r.readTime ? fe(r.readTime) : B.min(), o = $t.newNoDocument(i, s), a = r.removedTargetIds || [];
    n = new Zr([], a, o.key, o);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const i = Rs(e, r.document), s = r.removedTargetIds || [];
    n = new Zr([], s, i, null);
  } else {
    if (!("filter" in t))
      return L();
    {
      t.filter;
      const r = t.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r, o = new $_(i, s), a = r.targetId;
      n = new zh(a, o);
    }
  }
  return n;
}
function X_(e, t) {
  let n;
  if (t instanceof br)
    n = {
      update: Jc(e, t.key, t.value)
    };
  else if (t instanceof jh)
    n = {
      delete: go(e, t.key)
    };
  else if (t instanceof $e)
    n = {
      update: Jc(e, t.key, t.data),
      updateMask: ov(t.fieldMask)
    };
  else {
    if (!(t instanceof M_))
      return L();
    n = {
      verify: go(e, t.key)
    };
  }
  return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((r) => function(s, o) {
    const a = o.transform;
    if (a instanceof yi)
      return {
        fieldPath: o.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
    if (a instanceof hr)
      return {
        fieldPath: o.field.canonicalString(),
        appendMissingElements: {
          values: a.elements
        }
      };
    if (a instanceof dr)
      return {
        fieldPath: o.field.canonicalString(),
        removeAllFromArray: {
          values: a.elements
        }
      };
    if (a instanceof _i)
      return {
        fieldPath: o.field.canonicalString(),
        increment: a.Ie
      };
    throw L();
  }(0, r))), t.precondition.isNone || (n.currentDocument = function(i, s) {
    return s.updateTime !== void 0 ? {
      updateTime: K_(i, s.updateTime)
    } : s.exists !== void 0 ? {
      exists: s.exists
    } : L();
  }(e, t.precondition)), n;
}
function J_(e, t) {
  return e && e.length > 0 ? (st(t !== void 0), e.map((n) => function(i, s) {
    let o = i.updateTime ? fe(i.updateTime) : fe(s);
    return o.isEqual(B.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (o = fe(s)), new N_(o, i.transformResults || []);
  }(n, t))) : [];
}
function Z_(e, t) {
  return {
    documents: [Kh(e, t.path)]
  };
}
function tv(e, t) {
  const n = {
    structuredQuery: {}
  }, r = t.path;
  let i;
  t.collectionGroup !== null ? (i = r, n.structuredQuery.from = [{
    collectionId: t.collectionGroup,
    allDescendants: !0
  }]) : (i = r.popLast(), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), n.parent = Kh(e, i);
  const s = function(u) {
    if (u.length !== 0)
      return Xh(se.create(
        u,
        "and"
        /* CompositeOperator.AND */
      ));
  }(t.filters);
  s && (n.structuredQuery.where = s);
  const o = function(u) {
    if (u.length !== 0)
      return u.map((l) => (
        // visible for testing
        function(d) {
          return {
            field: an(d.field),
            direction: rv(d.dir)
          };
        }(l)
      ));
  }(t.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const a = po(e, t.limit);
  return a !== null && (n.structuredQuery.limit = a), t.startAt && (n.structuredQuery.startAt = function(u) {
    return {
      before: u.inclusive,
      values: u.position
    };
  }(t.startAt)), t.endAt && (n.structuredQuery.endAt = function(u) {
    return {
      before: !u.inclusive,
      values: u.position
    };
  }(t.endAt)), {
    ut: n,
    parent: i
  };
}
function ev(e) {
  let t = Q_(e.parent);
  const n = e.structuredQuery, r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    st(r === 1);
    const l = n.from[0];
    l.allDescendants ? i = l.collectionId : t = t.child(l.collectionId);
  }
  let s = [];
  n.where && (s = function(h) {
    const d = Yh(h);
    return d instanceof se && Ih(d) ? d.getFilters() : [d];
  }(n.where));
  let o = [];
  n.orderBy && (o = function(h) {
    return h.map((d) => function(y) {
      return new gi(
        cn(y.field),
        // visible for testing
        function(f) {
          switch (f) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(y.direction)
      );
    }(d));
  }(n.orderBy));
  let a = null;
  n.limit && (a = function(h) {
    let d;
    return d = typeof h == "object" ? h.value : h, zi(d) ? null : d;
  }(n.limit));
  let c = null;
  n.startAt && (c = function(h) {
    const d = !!h.before, p = h.values || [];
    return new mi(p, d);
  }(n.startAt));
  let u = null;
  return n.endAt && (u = function(h) {
    const d = !h.before, p = h.values || [];
    return new mi(p, d);
  }(n.endAt)), E_(t, i, o, s, a, "F", c, u);
}
function nv(e, t) {
  const n = function(i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return L();
    }
  }(t.purpose);
  return n == null ? null : {
    "goog-listen-tags": n
  };
}
function Yh(e) {
  return e.unaryFilter !== void 0 ? function(n) {
    switch (n.unaryFilter.op) {
      case "IS_NAN":
        const r = cn(n.unaryFilter.field);
        return vt.create(r, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const i = cn(n.unaryFilter.field);
        return vt.create(i, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const s = cn(n.unaryFilter.field);
        return vt.create(s, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const o = cn(n.unaryFilter.field);
        return vt.create(o, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return L();
    }
  }(e) : e.fieldFilter !== void 0 ? function(n) {
    return vt.create(cn(n.fieldFilter.field), function(i) {
      switch (i) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return L();
      }
    }(n.fieldFilter.op), n.fieldFilter.value);
  }(e) : e.compositeFilter !== void 0 ? function(n) {
    return se.create(n.compositeFilter.filters.map((r) => Yh(r)), function(i) {
      switch (i) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return L();
      }
    }(n.compositeFilter.op));
  }(e) : L();
}
function rv(e) {
  return z_[e];
}
function iv(e) {
  return G_[e];
}
function sv(e) {
  return W_[e];
}
function an(e) {
  return {
    fieldPath: e.canonicalString()
  };
}
function cn(e) {
  return Nt.fromServerFormat(e.fieldPath);
}
function Xh(e) {
  return e instanceof vt ? function(n) {
    if (n.op === "==") {
      if (Fc(n.value))
        return {
          unaryFilter: {
            field: an(n.field),
            op: "IS_NAN"
          }
        };
      if (Lc(n.value))
        return {
          unaryFilter: {
            field: an(n.field),
            op: "IS_NULL"
          }
        };
    } else if (n.op === "!=") {
      if (Fc(n.value))
        return {
          unaryFilter: {
            field: an(n.field),
            op: "IS_NOT_NAN"
          }
        };
      if (Lc(n.value))
        return {
          unaryFilter: {
            field: an(n.field),
            op: "IS_NOT_NULL"
          }
        };
    }
    return {
      fieldFilter: {
        field: an(n.field),
        op: iv(n.op),
        value: n.value
      }
    };
  }(e) : e instanceof se ? function(n) {
    const r = n.getFilters().map((i) => Xh(i));
    return r.length === 1 ? r[0] : {
      compositeFilter: {
        op: sv(n.op),
        filters: r
      }
    };
  }(e) : L();
}
function ov(e) {
  const t = [];
  return e.fields.forEach((n) => t.push(n.canonicalString())), {
    fieldPaths: t
  };
}
function Jh(e) {
  return e.length >= 4 && e.get(0) === "projects" && e.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re {
  constructor(t, n, r, i, s = B.min(), o = B.min(), a = jt.EMPTY_BYTE_STRING, c = null) {
    this.target = t, this.targetId = n, this.purpose = r, this.sequenceNumber = i, this.snapshotVersion = s, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = a, this.expectedCount = c;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(t) {
    return new Re(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(t, n) {
    return new Re(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      t,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(t) {
    return new Re(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, t);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(t) {
    return new Re(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken, this.expectedCount);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class av {
  constructor(t) {
    this.ct = t;
  }
}
function cv(e) {
  const t = ev({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  return e.limitType === "LAST" ? fo(
    t,
    t.limit,
    "L"
    /* LimitType.Last */
  ) : t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uv {
  constructor() {
    this._n = new lv();
  }
  addToCollectionParentIndex(t, n) {
    return this._n.add(n), v.resolve();
  }
  getCollectionParents(t, n) {
    return v.resolve(this._n.getEntries(n));
  }
  addFieldIndex(t, n) {
    return v.resolve();
  }
  deleteFieldIndex(t, n) {
    return v.resolve();
  }
  deleteAllFieldIndexes(t) {
    return v.resolve();
  }
  createTargetIndexes(t, n) {
    return v.resolve();
  }
  getDocumentsMatchingTarget(t, n) {
    return v.resolve(null);
  }
  getIndexType(t, n) {
    return v.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(t, n) {
    return v.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return v.resolve(null);
  }
  getMinOffset(t, n) {
    return v.resolve(xe.min());
  }
  getMinOffsetFromCollectionGroup(t, n) {
    return v.resolve(xe.min());
  }
  updateCollectionGroup(t, n, r) {
    return v.resolve();
  }
  updateIndexEntries(t, n) {
    return v.resolve();
  }
}
class lv {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(t) {
    const n = t.lastSegment(), r = t.popLast(), i = this.index[n] || new Ot(ct.comparator), s = !i.has(r);
    return this.index[n] = i.add(r), s;
  }
  has(t) {
    const n = t.lastSegment(), r = t.popLast(), i = this.index[n];
    return i && i.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new Ot(ct.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In {
  constructor(t) {
    this.On = t;
  }
  next() {
    return this.On += 2, this.On;
  }
  static Nn() {
    return new In(0);
  }
  static Bn() {
    return new In(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hv {
  constructor() {
    this.changes = new Dn((t) => t.toString(), (t, n) => t.isEqual(n)), this.changesApplied = !1;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(t, n) {
    this.assertNotApplied(), this.changes.set(t, $t.newInvalidDocument(t).setReadTime(n));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(t, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? v.resolve(r) : this.getFromCache(t, n);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(t, n) {
    return this.getAllFromCache(t, n);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(t) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dv {
  constructor(t, n) {
    this.overlayedDocument = t, this.mutatedFields = n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fv {
  constructor(t, n, r, i) {
    this.remoteDocumentCache = t, this.mutationQueue = n, this.documentOverlayCache = r, this.indexManager = i;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(t, n) {
    let r = null;
    return this.documentOverlayCache.getOverlay(t, n).next((i) => (r = i, this.remoteDocumentCache.getEntry(t, n))).next((i) => (r !== null && Qn(r.mutation, i, Qt.empty(), wt.now()), i));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(t, n) {
    return this.remoteDocumentCache.getEntries(t, n).next((r) => this.getLocalViewOfDocuments(t, r, z()).next(() => r));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(t, n, r = z()) {
    const i = We();
    return this.populateOverlays(t, i, n).next(() => this.computeViews(t, n, i, r).next((s) => {
      let o = Bn();
      return s.forEach((a, c) => {
        o = o.insert(a, c.overlayedDocument);
      }), o;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(t, n) {
    const r = We();
    return this.populateOverlays(t, r, n).next(() => this.computeViews(t, n, r, z()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(t, n, r) {
    const i = [];
    return r.forEach((s) => {
      n.has(s) || i.push(s);
    }), this.documentOverlayCache.getOverlays(t, i).next((s) => {
      s.forEach((o, a) => {
        n.set(o, a);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(t, n, r, i) {
    let s = Ie();
    const o = Kn(), a = function() {
      return Kn();
    }();
    return n.forEach((c, u) => {
      const l = r.get(u.key);
      i.has(u.key) && (l === void 0 || l.mutation instanceof $e) ? s = s.insert(u.key, u) : l !== void 0 ? (o.set(u.key, l.mutation.getFieldMask()), Qn(l.mutation, u, l.mutation.getFieldMask(), wt.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        o.set(u.key, Qt.empty())
      );
    }), this.recalculateAndSaveOverlays(t, s).next((c) => (c.forEach((u, l) => o.set(u, l)), n.forEach((u, l) => {
      var h;
      return a.set(u, new dv(l, (h = o.get(u)) !== null && h !== void 0 ? h : null));
    }), a));
  }
  recalculateAndSaveOverlays(t, n) {
    const r = Kn();
    let i = new lt((o, a) => o - a), s = z();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, n).next((o) => {
      for (const a of o)
        a.keys().forEach((c) => {
          const u = n.get(c);
          if (u === null)
            return;
          let l = r.get(c) || Qt.empty();
          l = a.applyToLocalView(u, l), r.set(c, l);
          const h = (i.get(a.batchId) || z()).add(c);
          i = i.insert(a.batchId, h);
        });
    }).next(() => {
      const o = [], a = i.getReverseIterator();
      for (; a.hasNext(); ) {
        const c = a.getNext(), u = c.key, l = c.value, h = Nh();
        l.forEach((d) => {
          if (!s.has(d)) {
            const p = Uh(n.get(d), r.get(d));
            p !== null && h.set(d, p), s = s.add(d);
          }
        }), o.push(this.documentOverlayCache.saveOverlays(t, u, h));
      }
      return v.waitFor(o);
    }).next(() => r);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(t, n) {
    return this.remoteDocumentCache.getEntries(t, n).next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(t, n, r, i) {
    return function(o) {
      return k.isDocumentKey(o.path) && o.collectionGroup === null && o.filters.length === 0;
    }(n) ? this.getDocumentsMatchingDocumentQuery(t, n.path) : bh(n) ? this.getDocumentsMatchingCollectionGroupQuery(t, n, r, i) : this.getDocumentsMatchingCollectionQuery(t, n, r, i);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(t, n, r, i) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(t, n, r, i).next((s) => {
      const o = i - s.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t, n, r.largestBatchId, i - s.size) : v.resolve(We());
      let a = -1, c = s;
      return o.next((u) => v.forEach(u, (l, h) => (a < h.largestBatchId && (a = h.largestBatchId), s.get(l) ? v.resolve() : this.remoteDocumentCache.getEntry(t, l).next((d) => {
        c = c.insert(l, d);
      }))).next(() => this.populateOverlays(t, u, s)).next(() => this.computeViews(t, c, u, z())).next((l) => ({
        batchId: a,
        changes: xh(l)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(t, n) {
    return this.getDocument(t, new k(n)).next((r) => {
      let i = Bn();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, n, r, i) {
    const s = n.collectionGroup;
    let o = Bn();
    return this.indexManager.getCollectionParents(t, s).next((a) => v.forEach(a, (c) => {
      const u = function(h, d) {
        return new Cr(
          d,
          /*collectionGroup=*/
          null,
          h.explicitOrderBy.slice(),
          h.filters.slice(),
          h.limit,
          h.limitType,
          h.startAt,
          h.endAt
        );
      }(n, c.child(s));
      return this.getDocumentsMatchingCollectionQuery(t, u, r, i).next((l) => {
        l.forEach((h, d) => {
          o = o.insert(h, d);
        });
      });
    }).next(() => o));
  }
  getDocumentsMatchingCollectionQuery(t, n, r, i) {
    let s;
    return this.documentOverlayCache.getOverlaysForCollection(t, n.path, r.largestBatchId).next((o) => (s = o, this.remoteDocumentCache.getDocumentsMatchingQuery(t, n, r, s, i))).next((o) => {
      s.forEach((c, u) => {
        const l = u.getKey();
        o.get(l) === null && (o = o.insert(l, $t.newInvalidDocument(l)));
      });
      let a = Bn();
      return o.forEach((c, u) => {
        const l = s.get(c);
        l !== void 0 && Qn(l.mutation, u, Qt.empty(), wt.now()), // Finally, insert the documents that still match the query
        Wi(n, u) && (a = a.insert(c, u));
      }), a;
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pv {
  constructor(t) {
    this.serializer = t, this.cr = /* @__PURE__ */ new Map(), this.lr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(t, n) {
    return v.resolve(this.cr.get(n));
  }
  saveBundleMetadata(t, n) {
    return this.cr.set(
      n.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function(i) {
        return {
          id: i.id,
          version: i.version,
          createTime: fe(i.createTime)
        };
      }(n)
    ), v.resolve();
  }
  getNamedQuery(t, n) {
    return v.resolve(this.lr.get(n));
  }
  saveNamedQuery(t, n) {
    return this.lr.set(n.name, function(i) {
      return {
        name: i.name,
        query: cv(i.bundledQuery),
        readTime: fe(i.readTime)
      };
    }(n)), v.resolve();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mv {
  constructor() {
    this.overlays = new lt(k.comparator), this.hr = /* @__PURE__ */ new Map();
  }
  getOverlay(t, n) {
    return v.resolve(this.overlays.get(n));
  }
  getOverlays(t, n) {
    const r = We();
    return v.forEach(n, (i) => this.getOverlay(t, i).next((s) => {
      s !== null && r.set(i, s);
    })).next(() => r);
  }
  saveOverlays(t, n, r) {
    return r.forEach((i, s) => {
      this.ht(t, n, s);
    }), v.resolve();
  }
  removeOverlaysForBatchId(t, n, r) {
    const i = this.hr.get(r);
    return i !== void 0 && (i.forEach((s) => this.overlays = this.overlays.remove(s)), this.hr.delete(r)), v.resolve();
  }
  getOverlaysForCollection(t, n, r) {
    const i = We(), s = n.length + 1, o = new k(n.child("")), a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const c = a.getNext().value, u = c.getKey();
      if (!n.isPrefixOf(u.path))
        break;
      u.path.length === s && c.largestBatchId > r && i.set(c.getKey(), c);
    }
    return v.resolve(i);
  }
  getOverlaysForCollectionGroup(t, n, r, i) {
    let s = new lt((u, l) => u - l);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let l = s.get(u.largestBatchId);
        l === null && (l = We(), s = s.insert(u.largestBatchId, l)), l.set(u.getKey(), u);
      }
    }
    const a = We(), c = s.getIterator();
    for (; c.hasNext() && (c.getNext().value.forEach((u, l) => a.set(u, l)), !(a.size() >= i)); )
      ;
    return v.resolve(a);
  }
  ht(t, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.hr.get(i.largestBatchId).delete(r.key);
      this.hr.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new F_(n, r));
    let s = this.hr.get(n);
    s === void 0 && (s = z(), this.hr.set(n, s)), this.hr.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya {
  constructor() {
    this.Pr = new Ot(St.Ir), // A set of outstanding references to a document sorted by target id.
    this.Tr = new Ot(St.Er);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Pr.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(t, n) {
    const r = new St(t, n);
    this.Pr = this.Pr.add(r), this.Tr = this.Tr.add(r);
  }
  /** Add references to the given document keys for the given ID. */
  dr(t, n) {
    t.forEach((r) => this.addReference(r, n));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(t, n) {
    this.Ar(new St(t, n));
  }
  Rr(t, n) {
    t.forEach((r) => this.removeReference(r, n));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  Vr(t) {
    const n = new k(new ct([])), r = new St(n, t), i = new St(n, t + 1), s = [];
    return this.Tr.forEachInRange([r, i], (o) => {
      this.Ar(o), s.push(o.key);
    }), s;
  }
  mr() {
    this.Pr.forEach((t) => this.Ar(t));
  }
  Ar(t) {
    this.Pr = this.Pr.delete(t), this.Tr = this.Tr.delete(t);
  }
  gr(t) {
    const n = new k(new ct([])), r = new St(n, t), i = new St(n, t + 1);
    let s = z();
    return this.Tr.forEachInRange([r, i], (o) => {
      s = s.add(o.key);
    }), s;
  }
  containsKey(t) {
    const n = new St(t, 0), r = this.Pr.firstAfterOrEqual(n);
    return r !== null && t.isEqual(r.key);
  }
}
class St {
  constructor(t, n) {
    this.key = t, this.pr = n;
  }
  /** Compare by key then by ID */
  static Ir(t, n) {
    return k.comparator(t.key, n.key) || X(t.pr, n.pr);
  }
  /** Compare by ID then by key */
  static Er(t, n) {
    return X(t.pr, n.pr) || k.comparator(t.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gv {
  constructor(t, n) {
    this.indexManager = t, this.referenceDelegate = n, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.yr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.wr = new Ot(St.Ir);
  }
  checkEmpty(t) {
    return v.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, n, r, i) {
    const s = this.yr;
    this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const o = new L_(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      this.wr = this.wr.add(new St(a.key, s)), this.indexManager.addToCollectionParentIndex(t, a.key.path.popLast());
    return v.resolve(o);
  }
  lookupMutationBatch(t, n) {
    return v.resolve(this.Sr(n));
  }
  getNextMutationBatchAfterBatchId(t, n) {
    const r = n + 1, i = this.br(r), s = i < 0 ? 0 : i;
    return v.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return v.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1);
  }
  getAllMutationBatches(t) {
    return v.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, n) {
    const r = new St(n, 0), i = new St(n, Number.POSITIVE_INFINITY), s = [];
    return this.wr.forEachInRange([r, i], (o) => {
      const a = this.Sr(o.pr);
      s.push(a);
    }), v.resolve(s);
  }
  getAllMutationBatchesAffectingDocumentKeys(t, n) {
    let r = new Ot(X);
    return n.forEach((i) => {
      const s = new St(i, 0), o = new St(i, Number.POSITIVE_INFINITY);
      this.wr.forEachInRange([s, o], (a) => {
        r = r.add(a.pr);
      });
    }), v.resolve(this.Dr(r));
  }
  getAllMutationBatchesAffectingQuery(t, n) {
    const r = n.path, i = r.length + 1;
    let s = r;
    k.isDocumentKey(s) || (s = s.child(""));
    const o = new St(new k(s), 0);
    let a = new Ot(X);
    return this.wr.forEachWhile((c) => {
      const u = c.key.path;
      return !!r.isPrefixOf(u) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (u.length === i && (a = a.add(c.pr)), !0);
    }, o), v.resolve(this.Dr(a));
  }
  Dr(t) {
    const n = [];
    return t.forEach((r) => {
      const i = this.Sr(r);
      i !== null && n.push(i);
    }), n;
  }
  removeMutationBatch(t, n) {
    st(this.Cr(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.wr;
    return v.forEach(n.mutations, (i) => {
      const s = new St(i.key, n.batchId);
      return r = r.delete(s), this.referenceDelegate.markPotentiallyOrphaned(t, i.key);
    }).next(() => {
      this.wr = r;
    });
  }
  Mn(t) {
  }
  containsKey(t, n) {
    const r = new St(n, 0), i = this.wr.firstAfterOrEqual(r);
    return v.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, v.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  Cr(t, n) {
    return this.br(t);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been remvoed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  br(t) {
    return this.mutationQueue.length === 0 ? 0 : t - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficent.
   */
  Sr(t) {
    const n = this.br(t);
    return n < 0 || n >= this.mutationQueue.length ? null : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yv {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(t) {
    this.vr = t, /** Underlying cache of documents and their read times. */
    this.docs = function() {
      return new lt(k.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(t, n) {
    const r = n.key, i = this.docs.get(r), s = i ? i.size : 0, o = this.vr(n);
    return this.docs = this.docs.insert(r, {
      document: n.mutableCopy(),
      size: o
    }), this.size += o - s, this.indexManager.addToCollectionParentIndex(t, r.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(t) {
    const n = this.docs.get(t);
    n && (this.docs = this.docs.remove(t), this.size -= n.size);
  }
  getEntry(t, n) {
    const r = this.docs.get(n);
    return v.resolve(r ? r.document.mutableCopy() : $t.newInvalidDocument(n));
  }
  getEntries(t, n) {
    let r = Ie();
    return n.forEach((i) => {
      const s = this.docs.get(i);
      r = r.insert(i, s ? s.document.mutableCopy() : $t.newInvalidDocument(i));
    }), v.resolve(r);
  }
  getDocumentsMatchingQuery(t, n, r, i) {
    let s = Ie();
    const o = n.path, a = new k(o.child("")), c = this.docs.getIteratorFrom(a);
    for (; c.hasNext(); ) {
      const { key: u, value: { document: l } } = c.getNext();
      if (!o.isPrefixOf(u.path))
        break;
      u.path.length > o.length + 1 || e_(t_(l), r) <= 0 || (i.has(l.key) || Wi(n, l)) && (s = s.insert(l.key, l.mutableCopy()));
    }
    return v.resolve(s);
  }
  getAllFromCollectionGroup(t, n, r, i) {
    L();
  }
  Fr(t, n) {
    return v.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(t) {
    return new _v(this);
  }
  getSize(t) {
    return v.resolve(this.size);
  }
}
class _v extends hv {
  constructor(t) {
    super(), this.ar = t;
  }
  applyChanges(t) {
    const n = [];
    return this.changes.forEach((r, i) => {
      i.isValidDocument() ? n.push(this.ar.addEntry(t, i)) : this.ar.removeEntry(r);
    }), v.waitFor(n);
  }
  getFromCache(t, n) {
    return this.ar.getEntry(t, n);
  }
  getAllFromCache(t, n) {
    return this.ar.getEntries(t, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vv {
  constructor(t) {
    this.persistence = t, /**
     * Maps a target to the data about that target
     */
    this.Mr = new Dn((n) => da(n), fa), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = B.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Or = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Nr = new ya(), this.targetCount = 0, this.Br = In.Nn();
  }
  forEachTarget(t, n) {
    return this.Mr.forEach((r, i) => n(i)), v.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return v.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return v.resolve(this.Or);
  }
  allocateTargetId(t) {
    return this.highestTargetId = this.Br.next(), v.resolve(this.highestTargetId);
  }
  setTargetsMetadata(t, n, r) {
    return r && (this.lastRemoteSnapshotVersion = r), n > this.Or && (this.Or = n), v.resolve();
  }
  qn(t) {
    this.Mr.set(t.target, t);
    const n = t.targetId;
    n > this.highestTargetId && (this.Br = new In(n), this.highestTargetId = n), t.sequenceNumber > this.Or && (this.Or = t.sequenceNumber);
  }
  addTargetData(t, n) {
    return this.qn(n), this.targetCount += 1, v.resolve();
  }
  updateTargetData(t, n) {
    return this.qn(n), v.resolve();
  }
  removeTargetData(t, n) {
    return this.Mr.delete(n.target), this.Nr.Vr(n.targetId), this.targetCount -= 1, v.resolve();
  }
  removeTargets(t, n, r) {
    let i = 0;
    const s = [];
    return this.Mr.forEach((o, a) => {
      a.sequenceNumber <= n && r.get(a.targetId) === null && (this.Mr.delete(o), s.push(this.removeMatchingKeysForTargetId(t, a.targetId)), i++);
    }), v.waitFor(s).next(() => i);
  }
  getTargetCount(t) {
    return v.resolve(this.targetCount);
  }
  getTargetData(t, n) {
    const r = this.Mr.get(n) || null;
    return v.resolve(r);
  }
  addMatchingKeys(t, n, r) {
    return this.Nr.dr(n, r), v.resolve();
  }
  removeMatchingKeys(t, n, r) {
    this.Nr.Rr(n, r);
    const i = this.persistence.referenceDelegate, s = [];
    return i && n.forEach((o) => {
      s.push(i.markPotentiallyOrphaned(t, o));
    }), v.waitFor(s);
  }
  removeMatchingKeysForTargetId(t, n) {
    return this.Nr.Vr(n), v.resolve();
  }
  getMatchingKeysForTargetId(t, n) {
    const r = this.Nr.gr(n);
    return v.resolve(r);
  }
  containsKey(t, n) {
    return v.resolve(this.Nr.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ev {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(t, n) {
    this.Lr = {}, this.overlays = {}, this.kr = new ca(0), this.qr = !1, this.qr = !0, this.referenceDelegate = t(this), this.Qr = new vv(this), this.indexManager = new uv(), this.remoteDocumentCache = function(i) {
      return new yv(i);
    }((r) => this.referenceDelegate.Kr(r)), this.serializer = new av(n), this.$r = new pv(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.qr = !1, Promise.resolve();
  }
  get started() {
    return this.qr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let n = this.overlays[t.toKey()];
    return n || (n = new mv(), this.overlays[t.toKey()] = n), n;
  }
  getMutationQueue(t, n) {
    let r = this.Lr[t.toKey()];
    return r || (r = new gv(n, this.referenceDelegate), this.Lr[t.toKey()] = r), r;
  }
  getTargetCache() {
    return this.Qr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.$r;
  }
  runTransaction(t, n, r) {
    R("MemoryPersistence", "Starting transaction:", t);
    const i = new wv(this.kr.next());
    return this.referenceDelegate.Ur(), r(i).next((s) => this.referenceDelegate.Wr(i).next(() => s)).toPromise().then((s) => (i.raiseOnCommittedEvent(), s));
  }
  Gr(t, n) {
    return v.or(Object.values(this.Lr).map((r) => () => r.containsKey(t, n)));
  }
}
class wv extends r_ {
  constructor(t) {
    super(), this.currentSequenceNumber = t;
  }
}
class _a {
  constructor(t) {
    this.persistence = t, /** Tracks all documents that are active in Query views. */
    this.zr = new ya(), /** The list of documents that are potentially GCed after each transaction. */
    this.jr = null;
  }
  static Hr(t) {
    return new _a(t);
  }
  get Jr() {
    if (this.jr)
      return this.jr;
    throw L();
  }
  addReference(t, n, r) {
    return this.zr.addReference(r, n), this.Jr.delete(r.toString()), v.resolve();
  }
  removeReference(t, n, r) {
    return this.zr.removeReference(r, n), this.Jr.add(r.toString()), v.resolve();
  }
  markPotentiallyOrphaned(t, n) {
    return this.Jr.add(n.toString()), v.resolve();
  }
  removeTarget(t, n) {
    this.zr.Vr(n.targetId).forEach((i) => this.Jr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(t, n.targetId).next((i) => {
      i.forEach((s) => this.Jr.add(s.toString()));
    }).next(() => r.removeTargetData(t, n));
  }
  Ur() {
    this.jr = /* @__PURE__ */ new Set();
  }
  Wr(t) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return v.forEach(this.Jr, (r) => {
      const i = k.fromPath(r);
      return this.Yr(t, i).next((s) => {
        s || n.removeEntry(i, B.min());
      });
    }).next(() => (this.jr = null, n.apply(t)));
  }
  updateLimboDocument(t, n) {
    return this.Yr(t, n).next((r) => {
      r ? this.Jr.delete(n.toString()) : this.Jr.add(n.toString());
    });
  }
  Kr(t) {
    return 0;
  }
  Yr(t, n) {
    return v.or([() => v.resolve(this.zr.containsKey(n)), () => this.persistence.getTargetCache().containsKey(t, n), () => this.persistence.Gr(t, n)]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va {
  constructor(t, n, r, i) {
    this.targetId = t, this.fromCache = n, this.qi = r, this.Qi = i;
  }
  static Ki(t, n) {
    let r = z(), i = z();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new va(t, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tv {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iv {
  constructor() {
    this.$i = !1, this.Ui = !1, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.Wi = 100, this.Gi = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function() {
      return Am() ? 8 : Ge.v(si()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(t, n) {
    this.zi = t, this.indexManager = n, this.$i = !0;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(t, n, r, i) {
    const s = {
      result: null
    };
    return this.ji(t, n).next((o) => {
      s.result = o;
    }).next(() => {
      if (!s.result)
        return this.Hi(t, n, i, r).next((o) => {
          s.result = o;
        });
    }).next(() => {
      if (s.result)
        return;
      const o = new Tv();
      return this.Ji(t, n, o).next((a) => {
        if (s.result = a, this.Ui)
          return this.Yi(t, n, o, a.size);
      });
    }).next(() => s.result);
  }
  Yi(t, n, r, i) {
    return r.documentReadCount < this.Wi ? (Fn() <= Y.DEBUG && R("QueryEngine", "SDK will not create cache indexes for query:", on(n), "since it only creates cache indexes for collection contains", "more than or equal to", this.Wi, "documents"), v.resolve()) : (Fn() <= Y.DEBUG && R("QueryEngine", "Query:", on(n), "scans", r.documentReadCount, "local documents and returns", i, "documents as results."), r.documentReadCount > this.Gi * i ? (Fn() <= Y.DEBUG && R("QueryEngine", "The SDK decides to create cache indexes for query:", on(n), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(t, he(n))) : v.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  ji(t, n) {
    if (jc(n))
      return v.resolve(null);
    let r = he(n);
    return this.indexManager.getIndexType(t, r).next((i) => i === 0 ? null : (n.limit !== null && i === 1 && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (n = fo(
      n,
      null,
      "F"
      /* LimitType.First */
    ), r = he(n)), this.indexManager.getDocumentsMatchingTarget(t, r).next((s) => {
      const o = z(...s);
      return this.zi.getDocuments(t, o).next((a) => this.indexManager.getMinOffset(t, r).next((c) => {
        const u = this.Zi(n, a);
        return this.Xi(n, u, o, c.readTime) ? this.ji(t, fo(
          n,
          null,
          "F"
          /* LimitType.First */
        )) : this.es(t, u, n, c);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Hi(t, n, r, i) {
    return jc(n) || i.isEqual(B.min()) ? v.resolve(null) : this.zi.getDocuments(t, r).next((s) => {
      const o = this.Zi(n, s);
      return this.Xi(n, o, r, i) ? v.resolve(null) : (Fn() <= Y.DEBUG && R("QueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), on(n)), this.es(t, o, n, Zy(i, -1)).next((a) => a));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  Zi(t, n) {
    let r = new Ot(Vh(t));
    return n.forEach((i, s) => {
      Wi(t, s) && (r = r.add(s));
    }), r;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  Xi(t, n, r, i) {
    if (t.limit === null)
      return !1;
    if (r.size !== n.size)
      return !0;
    const s = t.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Ji(t, n, r) {
    return Fn() <= Y.DEBUG && R("QueryEngine", "Using full collection scan to execute query:", on(n)), this.zi.getDocumentsMatchingQuery(t, n, xe.min(), r);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  es(t, n, r, i) {
    return this.zi.getDocumentsMatchingQuery(t, r, i).next((s) => (
      // Merge with existing results
      (n.forEach((o) => {
        s = s.insert(o.key, o);
      }), s)
    ));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Av {
  constructor(t, n, r, i) {
    this.persistence = t, this.ts = n, this.serializer = i, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.ns = new lt(X), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.rs = new Dn((s) => da(s), fa), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.ss = /* @__PURE__ */ new Map(), this.os = t.getRemoteDocumentCache(), this.Qr = t.getTargetCache(), this.$r = t.getBundleCache(), this._s(r);
  }
  _s(t) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t), this.indexManager = this.persistence.getIndexManager(t), this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager), this.localDocuments = new fv(this.os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.os.setIndexManager(this.indexManager), this.ts.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (n) => t.collect(n, this.ns));
  }
}
function Sv(e, t, n, r) {
  return new Av(e, t, n, r);
}
async function Zh(e, t) {
  const n = j(e);
  return await n.persistence.runTransaction("Handle user change", "readonly", (r) => {
    let i;
    return n.mutationQueue.getAllMutationBatches(r).next((s) => (i = s, n._s(t), n.mutationQueue.getAllMutationBatches(r))).next((s) => {
      const o = [], a = [];
      let c = z();
      for (const u of i) {
        o.push(u.batchId);
        for (const l of u.mutations)
          c = c.add(l.key);
      }
      for (const u of s) {
        a.push(u.batchId);
        for (const l of u.mutations)
          c = c.add(l.key);
      }
      return n.localDocuments.getDocuments(r, c).next((u) => ({
        us: u,
        removedBatchIds: o,
        addedBatchIds: a
      }));
    });
  });
}
function Rv(e, t) {
  const n = j(e);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (r) => {
    const i = t.batch.keys(), s = n.os.newChangeBuffer({
      trackRemovals: !0
    });
    return function(a, c, u, l) {
      const h = u.batch, d = h.keys();
      let p = v.resolve();
      return d.forEach((y) => {
        p = p.next(() => l.getEntry(c, y)).next((E) => {
          const f = u.docVersions.get(y);
          st(f !== null), E.version.compareTo(f) < 0 && (h.applyToRemoteDocument(E, u), E.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (E.setReadTime(u.commitVersion), l.addEntry(E)));
        });
      }), p.next(() => a.mutationQueue.removeMutationBatch(c, h));
    }(n, r, t, s).next(() => s.apply(r)).next(() => n.mutationQueue.performConsistencyCheck(r)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(r, i, t.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r, function(a) {
      let c = z();
      for (let u = 0; u < a.mutationResults.length; ++u)
        a.mutationResults[u].transformResults.length > 0 && (c = c.add(a.batch.mutations[u].key));
      return c;
    }(t))).next(() => n.localDocuments.getDocuments(r, i));
  });
}
function td(e) {
  const t = j(e);
  return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (n) => t.Qr.getLastRemoteSnapshotVersion(n));
}
function Cv(e, t) {
  const n = j(e), r = t.snapshotVersion;
  let i = n.ns;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (s) => {
    const o = n.os.newChangeBuffer({
      trackRemovals: !0
    });
    i = n.ns;
    const a = [];
    t.targetChanges.forEach((l, h) => {
      const d = i.get(h);
      if (!d)
        return;
      a.push(n.Qr.removeMatchingKeys(s, l.removedDocuments, h).next(() => n.Qr.addMatchingKeys(s, l.addedDocuments, h)));
      let p = d.withSequenceNumber(s.currentSequenceNumber);
      t.targetMismatches.get(h) !== null ? p = p.withResumeToken(jt.EMPTY_BYTE_STRING, B.min()).withLastLimboFreeSnapshotVersion(B.min()) : l.resumeToken.approximateByteSize() > 0 && (p = p.withResumeToken(l.resumeToken, r)), i = i.insert(h, p), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      function(E, f, D) {
        return E.resumeToken.approximateByteSize() === 0 || f.snapshotVersion.toMicroseconds() - E.snapshotVersion.toMicroseconds() >= 3e8 ? !0 : D.addedDocuments.size + D.modifiedDocuments.size + D.removedDocuments.size > 0;
      }(d, p, l) && a.push(n.Qr.updateTargetData(s, p));
    });
    let c = Ie(), u = z();
    if (t.documentUpdates.forEach((l) => {
      t.resolvedLimboDocuments.has(l) && a.push(n.persistence.referenceDelegate.updateLimboDocument(s, l));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    a.push(bv(s, o, t.documentUpdates).next((l) => {
      c = l.cs, u = l.ls;
    })), !r.isEqual(B.min())) {
      const l = n.Qr.getLastRemoteSnapshotVersion(s).next((h) => n.Qr.setTargetsMetadata(s, s.currentSequenceNumber, r));
      a.push(l);
    }
    return v.waitFor(a).next(() => o.apply(s)).next(() => n.localDocuments.getLocalViewOfDocuments(s, c, u)).next(() => c);
  }).then((s) => (n.ns = i, s));
}
function bv(e, t, n) {
  let r = z(), i = z();
  return n.forEach((s) => r = r.add(s)), t.getEntries(e, r).next((s) => {
    let o = Ie();
    return n.forEach((a, c) => {
      const u = s.get(a);
      c.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      c.isNoDocument() && c.version.isEqual(B.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (t.removeEntry(a, c.readTime), o = o.insert(a, c))
      ) : !u.isValidDocument() || c.version.compareTo(u.version) > 0 || c.version.compareTo(u.version) === 0 && u.hasPendingWrites ? (t.addEntry(c), o = o.insert(a, c)) : R("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", u.version, " Watch version:", c.version);
    }), {
      cs: o,
      ls: i
    };
  });
}
function Pv(e, t) {
  const n = j(e);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (r) => (t === void 0 && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(r, t)));
}
function Vv(e, t) {
  const n = j(e);
  return n.persistence.runTransaction("Allocate target", "readwrite", (r) => {
    let i;
    return n.Qr.getTargetData(r, t).next((s) => s ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (i = s, v.resolve(i))
    ) : n.Qr.allocateTargetId(r).next((o) => (i = new Re(t, o, "TargetPurposeListen", r.currentSequenceNumber), n.Qr.addTargetData(r, i).next(() => i))));
  }).then((r) => {
    const i = n.ns.get(r.targetId);
    return (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) && (n.ns = n.ns.insert(r.targetId, r), n.rs.set(t, r.targetId)), r;
  });
}
async function _o(e, t, n) {
  const r = j(e), i = r.ns.get(t), s = n ? "readwrite" : "readwrite-primary";
  try {
    n || await r.persistence.runTransaction("Release target", s, (o) => r.persistence.referenceDelegate.removeTarget(o, i));
  } catch (o) {
    if (!Rr(o))
      throw o;
    R("LocalStore", `Failed to update sequence numbers for target ${t}: ${o}`);
  }
  r.ns = r.ns.remove(t), r.rs.delete(i.target);
}
function Zc(e, t, n) {
  const r = j(e);
  let i = B.min(), s = z();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (o) => function(c, u, l) {
      const h = j(c), d = h.rs.get(l);
      return d !== void 0 ? v.resolve(h.ns.get(d)) : h.Qr.getTargetData(u, l);
    }(r, o, he(t)).next((a) => {
      if (a)
        return i = a.lastLimboFreeSnapshotVersion, r.Qr.getMatchingKeysForTargetId(o, a.targetId).next((c) => {
          s = c;
        });
    }).next(() => r.ts.getDocumentsMatchingQuery(o, t, n ? i : B.min(), n ? s : z())).next((a) => (Dv(r, T_(t), a), {
      documents: a,
      hs: s
    }))
  );
}
function Dv(e, t, n) {
  let r = e.ss.get(t) || B.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }), e.ss.set(t, r);
}
class tu {
  constructor() {
    this.activeTargetIds = b_();
  }
  As(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  Rs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  ds() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t);
  }
}
class xv {
  constructor() {
    this.no = new tu(), this.ro = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(t) {
  }
  updateMutationState(t, n, r) {
  }
  addLocalQueryTarget(t) {
    return this.no.As(t), this.ro[t] || "not-current";
  }
  updateQueryState(t, n, r) {
    this.ro[t] = n;
  }
  removeLocalQueryTarget(t) {
    this.no.Rs(t);
  }
  isLocalQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.ro[t];
  }
  getAllActiveQueryTargets() {
    return this.no.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  start() {
    return this.no = new tu(), Promise.resolve();
  }
  handleUserChange(t, n, r) {
  }
  setOnlineState(t) {
  }
  shutdown() {
  }
  writeSequenceNumber(t) {
  }
  notifyBundleLoaded(t) {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nv {
  io(t) {
  }
  shutdown() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu {
  constructor() {
    this.so = () => this.oo(), this._o = () => this.ao(), this.uo = [], this.co();
  }
  io(t) {
    this.uo.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.so), window.removeEventListener("offline", this._o);
  }
  co() {
    window.addEventListener("online", this.so), window.addEventListener("offline", this._o);
  }
  oo() {
    R("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.uo)
      t(
        0
        /* NetworkStatus.AVAILABLE */
      );
  }
  ao() {
    R("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.uo)
      t(
        1
        /* NetworkStatus.UNAVAILABLE */
      );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wr = null;
function Cs() {
  return Wr === null ? Wr = function() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : Wr++, "0x" + Wr.toString(16);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kv = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ov {
  constructor(t) {
    this.lo = t.lo, this.ho = t.ho;
  }
  Po(t) {
    this.Io = t;
  }
  To(t) {
    this.Eo = t;
  }
  onMessage(t) {
    this.Ao = t;
  }
  close() {
    this.ho();
  }
  send(t) {
    this.lo(t);
  }
  Ro() {
    this.Io();
  }
  Vo(t) {
    this.Eo(t);
  }
  mo(t) {
    this.Ao(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt = "WebChannelConnection";
class Mv extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
  constructor(n) {
    this.databaseInfo = n, this.databaseId = n.databaseId;
    const r = n.ssl ? "https" : "http", i = encodeURIComponent(this.databaseId.projectId), s = encodeURIComponent(this.databaseId.database);
    this.fo = r + "://" + n.host, this.po = `projects/${i}/databases/${s}`, this.yo = this.databaseId.database === "(default)" ? `project_id=${i}` : `project_id=${i}&database_id=${s}`;
  }
  get wo() {
    return !1;
  }
  So(n, r, i, s, o) {
    const a = Cs(), c = this.bo(n, r.toUriEncodedString());
    R("RestConnection", `Sending RPC '${n}' ${a}:`, c, i);
    const u = {
      "google-cloud-resource-prefix": this.po,
      "x-goog-request-params": this.yo
    };
    return this.Do(u, s, o), this.Co(n, c, u, i).then((l) => (R("RestConnection", `Received RPC '${n}' ${a}: `, l), l), (l) => {
      throw vn("RestConnection", `RPC '${n}' ${a} failed with error: `, l, "url: ", c, "request:", i), l;
    });
  }
  vo(n, r, i, s, o, a) {
    return this.So(n, r, i, s, o);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  Do(n, r, i) {
    n["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function() {
      return "gl-js/ fire/" + Vn;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    n["Content-Type"] = "text/plain", this.databaseInfo.appId && (n["X-Firebase-GMPID"] = this.databaseInfo.appId), r && r.headers.forEach((s, o) => n[o] = s), i && i.headers.forEach((s, o) => n[o] = s);
  }
  bo(n, r) {
    const i = kv[n];
    return `${this.fo}/v1/${r}:${i}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(t) {
    super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling, this.useFetchStreams = t.useFetchStreams, this.longPollingOptions = t.longPollingOptions;
  }
  Co(t, n, r, i) {
    const s = Cs();
    return new Promise((o, a) => {
      const c = new jy();
      c.setWithCredentials(!0), c.listenOnce(Uy.COMPLETE, () => {
        try {
          switch (c.getLastErrorCode()) {
            case Ss.NO_ERROR:
              const l = c.getResponseJson();
              R(Lt, `XHR for RPC '${t}' ${s} received:`, JSON.stringify(l)), o(l);
              break;
            case Ss.TIMEOUT:
              R(Lt, `RPC '${t}' ${s} timed out`), a(new V(_.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case Ss.HTTP_ERROR:
              const h = c.getStatus();
              if (R(Lt, `RPC '${t}' ${s} failed with status:`, h, "response text:", c.getResponseText()), h > 0) {
                let d = c.getResponseJson();
                Array.isArray(d) && (d = d[0]);
                const p = d == null ? void 0 : d.error;
                if (p && p.status && p.message) {
                  const y = function(f) {
                    const D = f.toLowerCase().replace(/_/g, "-");
                    return Object.values(_).indexOf(D) >= 0 ? D : _.UNKNOWN;
                  }(p.status);
                  a(new V(y, p.message));
                } else
                  a(new V(_.UNKNOWN, "Server responded with status " + c.getStatus()));
              } else
                a(new V(_.UNAVAILABLE, "Connection failed."));
              break;
            default:
              L();
          }
        } finally {
          R(Lt, `RPC '${t}' ${s} completed.`);
        }
      });
      const u = JSON.stringify(i);
      R(Lt, `RPC '${t}' ${s} sending request:`, i), c.send(n, "POST", u, r, 15);
    });
  }
  Fo(t, n, r) {
    const i = Cs(), s = [this.fo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], o = Fy(), a = $y(), c = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, u = this.longPollingOptions.timeoutSeconds;
    u !== void 0 && (c.longPollingTimeout = Math.round(1e3 * u)), this.useFetchStreams && (c.useFetchStreams = !0), this.Do(c.initMessageHeaders, n, r), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    c.encodeInitMessageHeaders = !0;
    const l = s.join("");
    R(Lt, `Creating RPC '${t}' stream ${i}: ${l}`, c);
    const h = o.createWebChannel(l, c);
    let d = !1, p = !1;
    const y = new Ov({
      lo: (f) => {
        p ? R(Lt, `Not sending because RPC '${t}' stream ${i} is closed:`, f) : (d || (R(Lt, `Opening RPC '${t}' stream ${i} transport.`), h.open(), d = !0), R(Lt, `RPC '${t}' stream ${i} sending:`, f), h.send(f));
      },
      ho: () => h.close()
    }), E = (f, D, T) => {
      f.listen(D, (I) => {
        try {
          T(I);
        } catch (S) {
          setTimeout(() => {
            throw S;
          }, 0);
        }
      });
    };
    return E(h, qr.EventType.OPEN, () => {
      p || R(Lt, `RPC '${t}' stream ${i} transport opened.`);
    }), E(h, qr.EventType.CLOSE, () => {
      p || (p = !0, R(Lt, `RPC '${t}' stream ${i} transport closed`), y.Vo());
    }), E(h, qr.EventType.ERROR, (f) => {
      p || (p = !0, vn(Lt, `RPC '${t}' stream ${i} transport errored:`, f), y.Vo(new V(_.UNAVAILABLE, "The operation could not be completed")));
    }), E(h, qr.EventType.MESSAGE, (f) => {
      var D;
      if (!p) {
        const T = f.data[0];
        st(!!T);
        const I = T, S = I.error || ((D = I[0]) === null || D === void 0 ? void 0 : D.error);
        if (S) {
          R(Lt, `RPC '${t}' stream ${i} received error:`, S);
          const g = S.status;
          let nt = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function(Tt) {
              const Et = yt[Tt];
              if (Et !== void 0)
                return qh(Et);
            }(g)
          ), gt = S.message;
          nt === void 0 && (nt = _.INTERNAL, gt = "Unknown error status: " + g + " with message " + S.message), // Mark closed so no further events are propagated
          p = !0, y.Vo(new V(nt, gt)), h.close();
        } else
          R(Lt, `RPC '${t}' stream ${i} received:`, T), y.mo(T);
      }
    }), E(a, By.STAT_EVENT, (f) => {
      f.stat === Vc.PROXY ? R(Lt, `RPC '${t}' stream ${i} detected buffering proxy`) : f.stat === Vc.NOPROXY && R(Lt, `RPC '${t}' stream ${i} detected no buffering proxy`);
    }), setTimeout(() => {
      y.Ro();
    }, 0), y;
  }
}
function bs() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(e) {
  return new H_(
    e,
    /* useProto3Json= */
    !0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ed {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    this.oi = t, this.timerId = n, this.Mo = r, this.xo = i, this.Oo = s, this.No = 0, this.Bo = null, /** The last backoff attempt, as epoch milliseconds. */
    this.Lo = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.No = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  ko() {
    this.No = this.Oo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  qo(t) {
    this.cancel();
    const n = Math.floor(this.No + this.Qo()), r = Math.max(0, Date.now() - this.Lo), i = Math.max(0, n - r);
    i > 0 && R("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`), this.Bo = this.oi.enqueueAfterDelay(this.timerId, i, () => (this.Lo = Date.now(), t())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.No *= this.xo, this.No < this.Mo && (this.No = this.Mo), this.No > this.Oo && (this.No = this.Oo);
  }
  Ko() {
    this.Bo !== null && (this.Bo.skipDelay(), this.Bo = null);
  }
  cancel() {
    this.Bo !== null && (this.Bo.cancel(), this.Bo = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  Qo() {
    return (Math.random() - 0.5) * this.No;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nd {
  constructor(t, n, r, i, s, o, a, c) {
    this.oi = t, this.$o = r, this.Uo = i, this.connection = s, this.authCredentialsProvider = o, this.appCheckCredentialsProvider = a, this.listener = c, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.Wo = 0, this.Go = null, this.zo = null, this.stream = null, this.jo = new ed(t, n);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  Ho() {
    return this.state === 1 || this.state === 5 || this.Jo();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  Jo() {
    return this.state === 2 || this.state === 3;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.state !== 4 ? this.auth() : this.Yo();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  async stop() {
    this.Ho() && await this.close(
      0
      /* PersistentStreamState.Initial */
    );
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  Zo() {
    this.state = 0, this.jo.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  Xo() {
    this.Jo() && this.Go === null && (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
  }
  /** Sends a message to the underlying stream. */
  t_(t) {
    this.n_(), this.stream.send(t);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  async e_() {
    if (this.Jo())
      return this.close(
        0
        /* PersistentStreamState.Initial */
      );
  }
  /** Marks the stream as active again. */
  n_() {
    this.Go && (this.Go.cancel(), this.Go = null);
  }
  /** Cancels the health check delayed operation. */
  r_() {
    this.zo && (this.zo.cancel(), this.zo = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  async close(t, n) {
    this.n_(), this.r_(), this.jo.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
    // underlying stream), guaranteeing they won't execute.
    this.Wo++, t !== 4 ? (
      // If this is an intentional close ensure we don't delay our next connection attempt.
      this.jo.reset()
    ) : n && n.code === _.RESOURCE_EXHAUSTED ? (
      // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
      (pe(n.toString()), pe("Using maximum backoff delay to prevent overloading the backend."), this.jo.ko())
    ) : n && n.code === _.UNAUTHENTICATED && this.state !== 3 && // "unauthenticated" error means the token was rejected. This should rarely
    // happen since both Auth and AppCheck ensure a sufficient TTL when we
    // request a token. If a user manually resets their system clock this can
    // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
    // before we received the first message and we need to invalidate the token
    // to ensure that we fetch a new token.
    (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
    this.stream !== null && (this.i_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
    // inhibit backoff or otherwise manipulate the state in its non-started state.
    this.state = t, // Notify the listener that the stream closed.
    await this.listener.To(n);
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  i_() {
  }
  auth() {
    this.state = 1;
    const t = this.s_(this.Wo), n = this.Wo;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([r, i]) => {
      this.Wo === n && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.o_(r, i);
    }, (r) => {
      t(() => {
        const i = new V(_.UNKNOWN, "Fetching auth token failed: " + r.message);
        return this.__(i);
      });
    });
  }
  o_(t, n) {
    const r = this.s_(this.Wo);
    this.stream = this.a_(t, n), this.stream.Po(() => {
      r(() => (this.state = 2, this.zo = this.oi.enqueueAfterDelay(this.Uo, 1e4, () => (this.Jo() && (this.state = 3), Promise.resolve())), this.listener.Po()));
    }), this.stream.To((i) => {
      r(() => this.__(i));
    }), this.stream.onMessage((i) => {
      r(() => this.onMessage(i));
    });
  }
  Yo() {
    this.state = 5, this.jo.qo(async () => {
      this.state = 0, this.start();
    });
  }
  // Visible for tests
  __(t) {
    return R("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(4, t);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  s_(t) {
    return (n) => {
      this.oi.enqueueAndForget(() => this.Wo === t ? n() : (R("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
}
class Lv extends nd {
  constructor(t, n, r, i, s, o) {
    super(t, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", n, r, i, o), this.serializer = s;
  }
  a_(t, n) {
    return this.connection.Fo("Listen", t, n);
  }
  onMessage(t) {
    this.jo.reset();
    const n = Y_(this.serializer, t), r = function(s) {
      if (!("targetChange" in s))
        return B.min();
      const o = s.targetChange;
      return o.targetIds && o.targetIds.length ? B.min() : o.readTime ? fe(o.readTime) : B.min();
    }(t);
    return this.listener.u_(n, r);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  c_(t) {
    const n = {};
    n.database = yo(this.serializer), n.addTarget = function(s, o) {
      let a;
      const c = o.target;
      if (a = lo(c) ? {
        documents: Z_(s, c)
      } : {
        query: tv(s, c).ut
      }, a.targetId = o.targetId, o.resumeToken.approximateByteSize() > 0) {
        a.resumeToken = Wh(s, o.resumeToken);
        const u = po(s, o.expectedCount);
        u !== null && (a.expectedCount = u);
      } else if (o.snapshotVersion.compareTo(B.min()) > 0) {
        a.readTime = vi(s, o.snapshotVersion.toTimestamp());
        const u = po(s, o.expectedCount);
        u !== null && (a.expectedCount = u);
      }
      return a;
    }(this.serializer, t);
    const r = nv(this.serializer, t);
    r && (n.labels = r), this.t_(n);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  l_(t) {
    const n = {};
    n.database = yo(this.serializer), n.removeTarget = t, this.t_(n);
  }
}
class Fv extends nd {
  constructor(t, n, r, i, s, o) {
    super(t, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", n, r, i, o), this.serializer = s, this.h_ = !1;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get P_() {
    return this.h_;
  }
  // Override of PersistentStream.start
  start() {
    this.h_ = !1, this.lastStreamToken = void 0, super.start();
  }
  i_() {
    this.h_ && this.I_([]);
  }
  a_(t, n) {
    return this.connection.Fo("Write", t, n);
  }
  onMessage(t) {
    if (
      // Always capture the last stream token.
      st(!!t.streamToken), this.lastStreamToken = t.streamToken, this.h_
    ) {
      this.jo.reset();
      const n = J_(t.writeResults, t.commitTime), r = fe(t.commitTime);
      return this.listener.T_(r, n);
    }
    return st(!t.writeResults || t.writeResults.length === 0), this.h_ = !0, this.listener.E_();
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  d_() {
    const t = {};
    t.database = yo(this.serializer), this.t_(t);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  I_(t) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: t.map((r) => X_(this.serializer, r))
    };
    this.t_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $v extends class {
} {
  constructor(t, n, r, i) {
    super(), this.authCredentials = t, this.appCheckCredentials = n, this.connection = r, this.serializer = i, this.A_ = !1;
  }
  R_() {
    if (this.A_)
      throw new V(_.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  So(t, n, r, i) {
    return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.So(t, mo(n, r), i, s, o)).catch((s) => {
      throw s.name === "FirebaseError" ? (s.code === _.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), s) : new V(_.UNKNOWN, s.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  vo(t, n, r, i, s) {
    return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([o, a]) => this.connection.vo(t, mo(n, r), i, o, a, s)).catch((o) => {
      throw o.name === "FirebaseError" ? (o.code === _.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), o) : new V(_.UNKNOWN, o.toString());
    });
  }
  terminate() {
    this.A_ = !0, this.connection.terminate();
  }
}
class Uv {
  constructor(t, n) {
    this.asyncQueue = t, this.onlineStateHandler = n, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.m_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.f_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.g_ = !0;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  p_() {
    this.m_ === 0 && (this.y_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.f_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.f_ = null, this.w_("Backend didn't respond within 10 seconds."), this.y_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  S_(t) {
    this.state === "Online" ? this.y_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.m_++, this.m_ >= 1 && (this.b_(), this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`), this.y_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(t) {
    this.b_(), this.m_ = 0, t === "Online" && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.g_ = !1), this.y_(t);
  }
  y_(t) {
    t !== this.state && (this.state = t, this.onlineStateHandler(t));
  }
  w_(t) {
    const n = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.g_ ? (pe(n), this.g_ = !1) : R("OnlineStateTracker", n);
  }
  b_() {
    this.f_ !== null && (this.f_.cancel(), this.f_ = null);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bv {
  constructor(t, n, r, i, s) {
    this.localStore = t, this.datastore = n, this.asyncQueue = r, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.D_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.C_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.v_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.F_ = [], this.M_ = s, this.M_.io((o) => {
      r.enqueueAndForget(async () => {
        rn(this) && (R("RemoteStore", "Restarting streams for network reachability change."), await async function(c) {
          const u = j(c);
          u.v_.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await Vr(u), u.x_.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), u.v_.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await Xi(u);
        }(this));
      });
    }), this.x_ = new Uv(r, i);
  }
}
async function Xi(e) {
  if (rn(e))
    for (const t of e.F_)
      await t(
        /* enabled= */
        !0
      );
}
async function Vr(e) {
  for (const t of e.F_)
    await t(
      /* enabled= */
      !1
    );
}
function rd(e, t) {
  const n = j(e);
  n.C_.has(t.targetId) || // Mark this as something the client is currently listening for.
  (n.C_.set(t.targetId, t), Ta(n) ? (
    // The listen will be sent in onWatchStreamOpen
    wa(n)
  ) : xn(n).Jo() && Ea(n, t));
}
function id(e, t) {
  const n = j(e), r = xn(n);
  n.C_.delete(t), r.Jo() && sd(n, t), n.C_.size === 0 && (r.Jo() ? r.Xo() : rn(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.x_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function Ea(e, t) {
  if (e.O_.Oe(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(B.min()) > 0) {
    const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(n);
  }
  xn(e).c_(t);
}
function sd(e, t) {
  e.O_.Oe(t), xn(e).l_(t);
}
function wa(e) {
  e.O_ = new q_({
    getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
    _t: (t) => e.C_.get(t) || null,
    nt: () => e.datastore.serializer.databaseId
  }), xn(e).start(), e.x_.p_();
}
function Ta(e) {
  return rn(e) && !xn(e).Ho() && e.C_.size > 0;
}
function rn(e) {
  return j(e).v_.size === 0;
}
function od(e) {
  e.O_ = void 0;
}
async function jv(e) {
  e.C_.forEach((t, n) => {
    Ea(e, t);
  });
}
async function qv(e, t) {
  od(e), // If we still need the watch stream, retry the connection.
  Ta(e) ? (e.x_.S_(t), wa(e)) : (
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    e.x_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )
  );
}
async function zv(e, t, n) {
  if (
    // Mark the client as online since we got a message from the server
    e.x_.set(
      "Online"
      /* OnlineState.Online */
    ), t instanceof Gh && t.state === 2 && t.cause
  )
    try {
      await /** Handles an error on a target */
      async function(i, s) {
        const o = s.cause;
        for (const a of s.targetIds)
          i.C_.has(a) && (await i.remoteSyncer.rejectListen(a, o), i.C_.delete(a), i.O_.removeTarget(a));
      }(e, t);
    } catch (r) {
      R("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), await Ei(e, r);
    }
  else if (t instanceof Zr ? e.O_.$e(t) : t instanceof zh ? e.O_.Je(t) : e.O_.Ge(t), !n.isEqual(B.min()))
    try {
      const r = await td(e.localStore);
      n.compareTo(r) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      await /**
      * Takes a batch of changes from the Datastore, repackages them as a
      * RemoteEvent, and passes that on to the listener, which is typically the
      * SyncEngine.
      */
      function(s, o) {
        const a = s.O_.it(o);
        return a.targetChanges.forEach((c, u) => {
          if (c.resumeToken.approximateByteSize() > 0) {
            const l = s.C_.get(u);
            l && s.C_.set(u, l.withResumeToken(c.resumeToken, o));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        a.targetMismatches.forEach((c, u) => {
          const l = s.C_.get(c);
          if (!l)
            return;
          s.C_.set(c, l.withResumeToken(jt.EMPTY_BYTE_STRING, l.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
          // deliberately don't send a resume token so that we get a full update.
          sd(s, c);
          const h = new Re(l.target, c, u, l.sequenceNumber);
          Ea(s, h);
        }), s.remoteSyncer.applyRemoteEvent(a);
      }(e, n);
    } catch (r) {
      R("RemoteStore", "Failed to raise snapshot:", r), await Ei(e, r);
    }
}
async function Ei(e, t, n) {
  if (!Rr(t))
    throw t;
  e.v_.add(
    1
    /* OfflineCause.IndexedDbFailed */
  ), // Disable network and raise offline snapshots
  await Vr(e), e.x_.set(
    "Offline"
    /* OnlineState.Offline */
  ), n || // Use a simple read operation to determine if IndexedDB recovered.
  // Ideally, we would expose a health check directly on SimpleDb, but
  // RemoteStore only has access to persistence through LocalStore.
  (n = () => td(e.localStore)), // Probe IndexedDB periodically and re-enable network
  e.asyncQueue.enqueueRetryable(async () => {
    R("RemoteStore", "Retrying IndexedDB access"), await n(), e.v_.delete(
      1
      /* OfflineCause.IndexedDbFailed */
    ), await Xi(e);
  });
}
function ad(e, t) {
  return t().catch((n) => Ei(e, n, t));
}
async function Ji(e) {
  const t = j(e), n = ke(t);
  let r = t.D_.length > 0 ? t.D_[t.D_.length - 1].batchId : -1;
  for (; Gv(t); )
    try {
      const i = await Pv(t.localStore, r);
      if (i === null) {
        t.D_.length === 0 && n.Xo();
        break;
      }
      r = i.batchId, Wv(t, i);
    } catch (i) {
      await Ei(t, i);
    }
  cd(t) && ud(t);
}
function Gv(e) {
  return rn(e) && e.D_.length < 10;
}
function Wv(e, t) {
  e.D_.push(t);
  const n = ke(e);
  n.Jo() && n.P_ && n.I_(t.mutations);
}
function cd(e) {
  return rn(e) && !ke(e).Ho() && e.D_.length > 0;
}
function ud(e) {
  ke(e).start();
}
async function Hv(e) {
  ke(e).d_();
}
async function Kv(e) {
  const t = ke(e);
  for (const n of e.D_)
    t.I_(n.mutations);
}
async function Qv(e, t, n) {
  const r = e.D_.shift(), i = pa.from(r, t, n);
  await ad(e, () => e.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
  // slot has freed up.
  await Ji(e);
}
async function Yv(e, t) {
  t && ke(e).P_ && // This error affects the actual write.
  await async function(r, i) {
    if (function(o) {
      return U_(o) && o !== _.ABORTED;
    }(i.code)) {
      const s = r.D_.shift();
      ke(r).Zo(), await ad(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)), // It's possible that with the completion of this mutation
      // another slot has freed up.
      await Ji(r);
    }
  }(e, t), // The write stream might have been started by refilling the write
  // pipeline for failed writes
  cd(e) && ud(e);
}
async function nu(e, t) {
  const n = j(e);
  n.asyncQueue.verifyOperationInProgress(), R("RemoteStore", "RemoteStore received new credentials");
  const r = rn(n);
  n.v_.add(
    3
    /* OfflineCause.CredentialChange */
  ), await Vr(n), r && // Don't set the network status to Unknown if we are offline.
  n.x_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ), await n.remoteSyncer.handleCredentialChange(t), n.v_.delete(
    3
    /* OfflineCause.CredentialChange */
  ), await Xi(n);
}
async function Xv(e, t) {
  const n = j(e);
  t ? (n.v_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await Xi(n)) : t || (n.v_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await Vr(n), n.x_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function xn(e) {
  return e.N_ || // Create stream (but note that it is not started yet).
  (e.N_ = function(n, r, i) {
    const s = j(n);
    return s.R_(), new Lv(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(e.datastore, e.asyncQueue, {
    Po: jv.bind(null, e),
    To: qv.bind(null, e),
    u_: zv.bind(null, e)
  }), e.F_.push(async (t) => {
    t ? (e.N_.Zo(), Ta(e) ? wa(e) : e.x_.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (await e.N_.stop(), od(e));
  })), e.N_;
}
function ke(e) {
  return e.B_ || // Create stream (but note that it is not started yet).
  (e.B_ = function(n, r, i) {
    const s = j(n);
    return s.R_(), new Fv(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i);
  }(e.datastore, e.asyncQueue, {
    Po: Hv.bind(null, e),
    To: Yv.bind(null, e),
    E_: Kv.bind(null, e),
    T_: Qv.bind(null, e)
  }), e.F_.push(async (t) => {
    t ? (e.B_.Zo(), // This will start the write stream if necessary.
    await Ji(e)) : (await e.B_.stop(), e.D_.length > 0 && (R("RemoteStore", `Stopping write stream with ${e.D_.length} pending writes`), e.D_ = []));
  })), e.B_;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia {
  constructor(t, n, r, i, s) {
    this.asyncQueue = t, this.timerId = n, this.targetTimeMs = r, this.op = i, this.removalCallback = s, this.deferred = new Ee(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((o) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t, n, r, i, s) {
    const o = Date.now() + r, a = new Ia(t, n, o, i, s);
    return a.start(r), a;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t) {
    this.timerHandle !== null && (this.clearTimeout(), this.deferred.reject(new V(_.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => this.timerHandle !== null ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t))) : Promise.resolve());
  }
  clearTimeout() {
    this.timerHandle !== null && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
}
function Aa(e, t) {
  if (pe("AsyncQueue", `${t}: ${e}`), Rr(e))
    return new V(_.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn {
  /** The default ordering is by key if the comparator is omitted */
  constructor(t) {
    this.comparator = t ? (n, r) => t(n, r) || k.comparator(n.key, r.key) : (n, r) => k.comparator(n.key, r.key), this.keyedMap = Bn(), this.sortedSet = new lt(this.comparator);
  }
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(t) {
    return new fn(t.comparator);
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(t) {
    const n = this.keyedMap.get(t);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(t) {
    this.sortedSet.inorderTraversal((n, r) => (t(n), !1));
  }
  /** Inserts or updates a document with the same key */
  add(t) {
    const n = this.delete(t.key);
    return n.copy(n.keyedMap.insert(t.key, t), n.sortedSet.insert(t, null));
  }
  /** Deletes a document with a given key */
  delete(t) {
    const n = this.get(t);
    return n ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(n)) : this;
  }
  isEqual(t) {
    if (!(t instanceof fn) || this.size !== t.size)
      return !1;
    const n = this.sortedSet.getIterator(), r = t.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key, s = r.getNext().key;
      if (!i.isEqual(s))
        return !1;
    }
    return !0;
  }
  toString() {
    const t = [];
    return this.forEach((n) => {
      t.push(n.toString());
    }), t.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + t.join(`  
`) + `
)`;
  }
  copy(t, n) {
    const r = new fn();
    return r.comparator = this.comparator, r.keyedMap = t, r.sortedSet = n, r;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru {
  constructor() {
    this.L_ = new lt(k.comparator);
  }
  track(t) {
    const n = t.doc.key, r = this.L_.get(n);
    r ? (
      // Merge the new change with the existing change.
      t.type !== 0 && r.type === 3 ? this.L_ = this.L_.insert(n, t) : t.type === 3 && r.type !== 1 ? this.L_ = this.L_.insert(n, {
        type: r.type,
        doc: t.doc
      }) : t.type === 2 && r.type === 2 ? this.L_ = this.L_.insert(n, {
        type: 2,
        doc: t.doc
      }) : t.type === 2 && r.type === 0 ? this.L_ = this.L_.insert(n, {
        type: 0,
        doc: t.doc
      }) : t.type === 1 && r.type === 0 ? this.L_ = this.L_.remove(n) : t.type === 1 && r.type === 2 ? this.L_ = this.L_.insert(n, {
        type: 1,
        doc: r.doc
      }) : t.type === 0 && r.type === 1 ? this.L_ = this.L_.insert(n, {
        type: 2,
        doc: t.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        L()
      )
    ) : this.L_ = this.L_.insert(n, t);
  }
  k_() {
    const t = [];
    return this.L_.inorderTraversal((n, r) => {
      t.push(r);
    }), t;
  }
}
class An {
  constructor(t, n, r, i, s, o, a, c, u) {
    this.query = t, this.docs = n, this.oldDocs = r, this.docChanges = i, this.mutatedKeys = s, this.fromCache = o, this.syncStateChanged = a, this.excludesMetadataChanges = c, this.hasCachedResults = u;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(t, n, r, i, s) {
    const o = [];
    return n.forEach((a) => {
      o.push({
        type: 0,
        doc: a
      });
    }), new An(
      t,
      n,
      fn.emptySet(n),
      o,
      r,
      i,
      /* syncStateChanged= */
      !0,
      /* excludesMetadataChanges= */
      !1,
      s
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (!(this.fromCache === t.fromCache && this.hasCachedResults === t.hasCachedResults && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && Gi(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs)))
      return !1;
    const n = this.docChanges, r = t.docChanges;
    if (n.length !== r.length)
      return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc))
        return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jv {
  constructor() {
    this.q_ = void 0, this.Q_ = [];
  }
}
class Zv {
  constructor() {
    this.queries = new Dn((t) => Ph(t), Gi), this.onlineState = "Unknown", this.K_ = /* @__PURE__ */ new Set();
  }
}
async function tE(e, t) {
  const n = j(e), r = t.query;
  let i = !1, s = n.queries.get(r);
  if (s || (i = !0, s = new Jv()), i)
    try {
      s.q_ = await n.onListen(r);
    } catch (o) {
      const a = Aa(o, `Initialization of query '${on(t.query)}' failed`);
      return void t.onError(a);
    }
  n.queries.set(r, s), s.Q_.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
  t.U_(n.onlineState), s.q_ && t.W_(s.q_) && Sa(n);
}
async function eE(e, t) {
  const n = j(e), r = t.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.Q_.indexOf(t);
    o >= 0 && (s.Q_.splice(o, 1), i = s.Q_.length === 0);
  }
  if (i)
    return n.queries.delete(r), n.onUnlisten(r);
}
function nE(e, t) {
  const n = j(e);
  let r = !1;
  for (const i of t) {
    const s = i.query, o = n.queries.get(s);
    if (o) {
      for (const a of o.Q_)
        a.W_(i) && (r = !0);
      o.q_ = i;
    }
  }
  r && Sa(n);
}
function rE(e, t, n) {
  const r = j(e), i = r.queries.get(t);
  if (i)
    for (const s of i.Q_)
      s.onError(n);
  r.queries.delete(t);
}
function Sa(e) {
  e.K_.forEach((t) => {
    t.next();
  });
}
class iE {
  constructor(t, n, r) {
    this.query = t, this.G_ = n, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.z_ = !1, this.j_ = null, this.onlineState = "Unknown", this.options = r || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  W_(t) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of t.docChanges)
        i.type !== 3 && r.push(i);
      t = new An(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        /* excludesMetadataChanges= */
        !0,
        t.hasCachedResults
      );
    }
    let n = !1;
    return this.z_ ? this.H_(t) && (this.G_.next(t), n = !0) : this.J_(t, this.onlineState) && (this.Y_(t), n = !0), this.j_ = t, n;
  }
  onError(t) {
    this.G_.error(t);
  }
  /** Returns whether a snapshot was raised. */
  U_(t) {
    this.onlineState = t;
    let n = !1;
    return this.j_ && !this.z_ && this.J_(this.j_, t) && (this.Y_(this.j_), n = !0), n;
  }
  J_(t, n) {
    if (!t.fromCache)
      return !0;
    const r = n !== "Offline";
    return (!this.options.Z_ || !r) && (!t.docs.isEmpty() || t.hasCachedResults || n === "Offline");
  }
  H_(t) {
    if (t.docChanges.length > 0)
      return !0;
    const n = this.j_ && this.j_.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.syncStateChanged && !n) && this.options.includeMetadataChanges === !0;
  }
  Y_(t) {
    t = An.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults), this.z_ = !0, this.G_.next(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ld {
  constructor(t) {
    this.key = t;
  }
}
class hd {
  constructor(t) {
    this.key = t;
  }
}
class sE {
  constructor(t, n) {
    this.query = t, this.oa = n, this._a = null, this.hasCachedResults = !1, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = !1, /** Documents in the view but not in the remote target */
    this.aa = z(), /** Document Keys that have local changes */
    this.mutatedKeys = z(), this.ua = Vh(t), this.ca = new fn(this.ua);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get la() {
    return this.oa;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  ha(t, n) {
    const r = n ? n.Pa : new ru(), i = n ? n.ca : this.ca;
    let s = n ? n.mutatedKeys : this.mutatedKeys, o = i, a = !1;
    const c = this.query.limitType === "F" && i.size === this.query.limit ? i.last() : null, u = this.query.limitType === "L" && i.size === this.query.limit ? i.first() : null;
    if (t.inorderTraversal((l, h) => {
      const d = i.get(l), p = Wi(this.query, h) ? h : null, y = !!d && this.mutatedKeys.has(d.key), E = !!p && (p.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(p.key) && p.hasCommittedMutations);
      let f = !1;
      d && p ? d.data.isEqual(p.data) ? y !== E && (r.track({
        type: 3,
        doc: p
      }), f = !0) : this.Ia(d, p) || (r.track({
        type: 2,
        doc: p
      }), f = !0, (c && this.ua(p, c) > 0 || u && this.ua(p, u) < 0) && // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      (a = !0)) : !d && p ? (r.track({
        type: 0,
        doc: p
      }), f = !0) : d && !p && (r.track({
        type: 1,
        doc: d
      }), f = !0, (c || u) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (a = !0)), f && (p ? (o = o.add(p), s = E ? s.add(l) : s.delete(l)) : (o = o.delete(l), s = s.delete(l)));
    }), this.query.limit !== null)
      for (; o.size > this.query.limit; ) {
        const l = this.query.limitType === "F" ? o.last() : o.first();
        o = o.delete(l.key), s = s.delete(l.key), r.track({
          type: 1,
          doc: l
        });
      }
    return {
      ca: o,
      Pa: r,
      Xi: a,
      mutatedKeys: s
    };
  }
  Ia(t, n) {
    return t.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(t, n, r, i) {
    const s = this.ca;
    this.ca = t.ca, this.mutatedKeys = t.mutatedKeys;
    const o = t.Pa.k_();
    o.sort((l, h) => function(p, y) {
      const E = (f) => {
        switch (f) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return L();
        }
      };
      return E(p) - E(y);
    }(l.type, h.type) || this.ua(l.doc, h.doc)), this.Ta(r), i = i != null && i;
    const a = n && !i ? this.Ea() : [], c = this.aa.size === 0 && this.current && !i ? 1 : 0, u = c !== this._a;
    return this._a = c, o.length !== 0 || u ? {
      snapshot: new An(
        this.query,
        t.ca,
        s,
        o,
        t.mutatedKeys,
        c === 0,
        u,
        /* excludesMetadataChanges= */
        !1,
        !!r && r.resumeToken.approximateByteSize() > 0
      ),
      da: a
    } : {
      da: a
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  U_(t) {
    return this.current && t === "Offline" ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = !1, this.applyChanges(
        {
          ca: this.ca,
          Pa: new ru(),
          mutatedKeys: this.mutatedKeys,
          Xi: !1
        },
        /* limboResolutionEnabled= */
        !1
      ))
    ) : {
      da: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  Aa(t) {
    return !this.oa.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.ca.has(t) && !this.ca.get(t).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  Ta(t) {
    t && (t.addedDocuments.forEach((n) => this.oa = this.oa.add(n)), t.modifiedDocuments.forEach((n) => {
    }), t.removedDocuments.forEach((n) => this.oa = this.oa.delete(n)), this.current = t.current);
  }
  Ea() {
    if (!this.current)
      return [];
    const t = this.aa;
    this.aa = z(), this.ca.forEach((r) => {
      this.Aa(r.key) && (this.aa = this.aa.add(r.key));
    });
    const n = [];
    return t.forEach((r) => {
      this.aa.has(r) || n.push(new hd(r));
    }), this.aa.forEach((r) => {
      t.has(r) || n.push(new ld(r));
    }), n;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  Ra(t) {
    this.oa = t.hs, this.aa = z();
    const n = this.ha(t.documents);
    return this.applyChanges(
      n,
      /* limboResolutionEnabled= */
      !0
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  Va() {
    return An.fromInitialDocuments(this.query, this.ca, this.mutatedKeys, this._a === 0, this.hasCachedResults);
  }
}
class oE {
  constructor(t, n, r) {
    this.query = t, this.targetId = n, this.view = r;
  }
}
class aE {
  constructor(t) {
    this.key = t, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.ma = !1;
  }
}
class cE {
  constructor(t, n, r, i, s, o) {
    this.localStore = t, this.remoteStore = n, this.eventManager = r, this.sharedClientState = i, this.currentUser = s, this.maxConcurrentLimboResolutions = o, this.fa = {}, this.ga = new Dn((a) => Ph(a), Gi), this.pa = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.ya = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.wa = new lt(k.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Sa = /* @__PURE__ */ new Map(), this.ba = new ya(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.Da = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Ca = /* @__PURE__ */ new Map(), this.va = In.Bn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Fa = void 0;
  }
  get isPrimaryClient() {
    return this.Fa === !0;
  }
}
async function uE(e, t) {
  const n = vE(e);
  let r, i;
  const s = n.ga.get(t);
  if (s)
    r = s.targetId, n.sharedClientState.addLocalQueryTarget(r), i = s.view.Va();
  else {
    const o = await Vv(n.localStore, he(t)), a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    r = o.targetId, i = await lE(n, t, r, a === "current", o.resumeToken), n.isPrimaryClient && rd(n.remoteStore, o);
  }
  return i;
}
async function lE(e, t, n, r, i) {
  e.Ma = (h, d, p) => async function(E, f, D, T) {
    let I = f.view.ha(D);
    I.Xi && // The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (I = await Zc(
      E.localStore,
      f.query,
      /* usePreviousResults= */
      !1
    ).then(({ documents: gt }) => f.view.ha(gt, I)));
    const S = T && T.targetChanges.get(f.targetId), g = T && T.targetMismatches.get(f.targetId) != null, nt = f.view.applyChanges(
      I,
      /* limboResolutionEnabled= */
      E.isPrimaryClient,
      S,
      g
    );
    return su(E, f.targetId, nt.da), nt.snapshot;
  }(e, h, d, p);
  const s = await Zc(
    e.localStore,
    t,
    /* usePreviousResults= */
    !0
  ), o = new sE(t, s.hs), a = o.ha(s.documents), c = Pr.createSynthesizedTargetChangeForCurrentChange(n, r && e.onlineState !== "Offline", i), u = o.applyChanges(
    a,
    /* limboResolutionEnabled= */
    e.isPrimaryClient,
    c
  );
  su(e, n, u.da);
  const l = new oE(t, n, o);
  return e.ga.set(t, l), e.pa.has(n) ? e.pa.get(n).push(t) : e.pa.set(n, [t]), u.snapshot;
}
async function hE(e, t) {
  const n = j(e), r = n.ga.get(t), i = n.pa.get(r.targetId);
  if (i.length > 1)
    return n.pa.set(r.targetId, i.filter((s) => !Gi(s, t))), void n.ga.delete(t);
  n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) || await _o(
    n.localStore,
    r.targetId,
    /*keepPersistedTargetData=*/
    !1
  ).then(() => {
    n.sharedClientState.clearQueryState(r.targetId), id(n.remoteStore, r.targetId), vo(n, r.targetId);
  }).catch(Sr)) : (vo(n, r.targetId), await _o(
    n.localStore,
    r.targetId,
    /*keepPersistedTargetData=*/
    !0
  ));
}
async function dE(e, t, n) {
  const r = EE(e);
  try {
    const i = await function(o, a) {
      const c = j(o), u = wt.now(), l = a.reduce((p, y) => p.add(y.key), z());
      let h, d;
      return c.persistence.runTransaction("Locally write mutations", "readwrite", (p) => {
        let y = Ie(), E = z();
        return c.os.getEntries(p, l).next((f) => {
          y = f, y.forEach((D, T) => {
            T.isValidDocument() || (E = E.add(D));
          });
        }).next(() => c.localDocuments.getOverlayedDocuments(p, y)).next((f) => {
          h = f;
          const D = [];
          for (const T of a) {
            const I = O_(T, h.get(T.key).overlayedDocument);
            I != null && // NOTE: The base state should only be applied if there's some
            // existing document to override, so use a Precondition of
            // exists=true
            D.push(new $e(T.key, I, Eh(I.value.mapValue), de.exists(!0)));
          }
          return c.mutationQueue.addMutationBatch(p, u, D, a);
        }).next((f) => {
          d = f;
          const D = f.applyToLocalDocumentSet(h, E);
          return c.documentOverlayCache.saveOverlays(p, f.batchId, D);
        });
      }).then(() => ({
        batchId: d.batchId,
        changes: xh(h)
      }));
    }(r.localStore, t);
    r.sharedClientState.addPendingMutation(i.batchId), function(o, a, c) {
      let u = o.Da[o.currentUser.toKey()];
      u || (u = new lt(X)), u = u.insert(a, c), o.Da[o.currentUser.toKey()] = u;
    }(r, i.batchId, n), await Dr(r, i.changes), await Ji(r.remoteStore);
  } catch (i) {
    const s = Aa(i, "Failed to persist write");
    n.reject(s);
  }
}
async function dd(e, t) {
  const n = j(e);
  try {
    const r = await Cv(n.localStore, t);
    t.targetChanges.forEach((i, s) => {
      const o = n.Sa.get(s);
      o && // Since this is a limbo resolution lookup, it's for a single document
      // and it could be added, modified, or removed, but not a combination.
      (st(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1), i.addedDocuments.size > 0 ? o.ma = !0 : i.modifiedDocuments.size > 0 ? st(o.ma) : i.removedDocuments.size > 0 && (st(o.ma), o.ma = !1));
    }), await Dr(n, r, t);
  } catch (r) {
    await Sr(r);
  }
}
function iu(e, t, n) {
  const r = j(e);
  if (r.isPrimaryClient && n === 0 || !r.isPrimaryClient && n === 1) {
    const i = [];
    r.ga.forEach((s, o) => {
      const a = o.view.U_(t);
      a.snapshot && i.push(a.snapshot);
    }), function(o, a) {
      const c = j(o);
      c.onlineState = a;
      let u = !1;
      c.queries.forEach((l, h) => {
        for (const d of h.Q_)
          d.U_(a) && (u = !0);
      }), u && Sa(c);
    }(r.eventManager, t), i.length && r.fa.u_(i), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function fE(e, t, n) {
  const r = j(e);
  r.sharedClientState.updateQueryState(t, "rejected", n);
  const i = r.Sa.get(t), s = i && i.key;
  if (s) {
    let o = new lt(k.comparator);
    o = o.insert(s, $t.newNoDocument(s, B.min()));
    const a = z().add(s), c = new Qi(
      B.min(),
      /* targetChanges= */
      /* @__PURE__ */ new Map(),
      /* targetMismatches= */
      new lt(X),
      o,
      a
    );
    await dd(r, c), // Since this query failed, we won't want to manually unlisten to it.
    // We only remove it from bookkeeping after we successfully applied the
    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
    // this query when the RemoteStore restarts the Watch stream, which should
    // re-trigger the target failure.
    r.wa = r.wa.remove(s), r.Sa.delete(t), Ra(r);
  } else
    await _o(
      r.localStore,
      t,
      /* keepPersistedTargetData */
      !1
    ).then(() => vo(r, t, n)).catch(Sr);
}
async function pE(e, t) {
  const n = j(e), r = t.batch.batchId;
  try {
    const i = await Rv(n.localStore, t);
    pd(
      n,
      r,
      /*error=*/
      null
    ), fd(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), await Dr(n, i);
  } catch (i) {
    await Sr(i);
  }
}
async function mE(e, t, n) {
  const r = j(e);
  try {
    const i = await function(o, a) {
      const c = j(o);
      return c.persistence.runTransaction("Reject batch", "readwrite-primary", (u) => {
        let l;
        return c.mutationQueue.lookupMutationBatch(u, a).next((h) => (st(h !== null), l = h.keys(), c.mutationQueue.removeMutationBatch(u, h))).next(() => c.mutationQueue.performConsistencyCheck(u)).next(() => c.documentOverlayCache.removeOverlaysForBatchId(u, l, a)).next(() => c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u, l)).next(() => c.localDocuments.getDocuments(u, l));
      });
    }(r.localStore, t);
    pd(r, t, n), fd(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), await Dr(r, i);
  } catch (i) {
    await Sr(i);
  }
}
function fd(e, t) {
  (e.Ca.get(t) || []).forEach((n) => {
    n.resolve();
  }), e.Ca.delete(t);
}
function pd(e, t, n) {
  const r = j(e);
  let i = r.Da[r.currentUser.toKey()];
  if (i) {
    const s = i.get(t);
    s && (n ? s.reject(n) : s.resolve(), i = i.remove(t)), r.Da[r.currentUser.toKey()] = i;
  }
}
function vo(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (const r of e.pa.get(t))
    e.ga.delete(r), n && e.fa.xa(r, n);
  e.pa.delete(t), e.isPrimaryClient && e.ba.Vr(t).forEach((r) => {
    e.ba.containsKey(r) || // We removed the last reference for this key
    md(e, r);
  });
}
function md(e, t) {
  e.ya.delete(t.path.canonicalString());
  const n = e.wa.get(t);
  n !== null && (id(e.remoteStore, n), e.wa = e.wa.remove(t), e.Sa.delete(n), Ra(e));
}
function su(e, t, n) {
  for (const r of n)
    r instanceof ld ? (e.ba.addReference(r.key, t), gE(e, r)) : r instanceof hd ? (R("SyncEngine", "Document no longer in limbo: " + r.key), e.ba.removeReference(r.key, t), e.ba.containsKey(r.key) || // We removed the last reference for this key
    md(e, r.key)) : L();
}
function gE(e, t) {
  const n = t.key, r = n.path.canonicalString();
  e.wa.get(n) || e.ya.has(r) || (R("SyncEngine", "New document in limbo: " + n), e.ya.add(r), Ra(e));
}
function Ra(e) {
  for (; e.ya.size > 0 && e.wa.size < e.maxConcurrentLimboResolutions; ) {
    const t = e.ya.values().next().value;
    e.ya.delete(t);
    const n = new k(ct.fromString(t)), r = e.va.next();
    e.Sa.set(r, new aE(n)), e.wa = e.wa.insert(n, r), rd(e.remoteStore, new Re(he(Ch(n.path)), r, "TargetPurposeLimboResolution", ca._e));
  }
}
async function Dr(e, t, n) {
  const r = j(e), i = [], s = [], o = [];
  r.ga.isEmpty() || (r.ga.forEach((a, c) => {
    o.push(r.Ma(c, t, n).then((u) => {
      if (
        // If there are changes, or we are handling a global snapshot, notify
        // secondary clients to update query state.
        (u || n) && r.isPrimaryClient && r.sharedClientState.updateQueryState(c.targetId, u != null && u.fromCache ? "not-current" : "current"), u
      ) {
        i.push(u);
        const l = va.Ki(c.targetId, u);
        s.push(l);
      }
    }));
  }), await Promise.all(o), r.fa.u_(i), await async function(c, u) {
    const l = j(c);
    try {
      await l.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (h) => v.forEach(u, (d) => v.forEach(d.qi, (p) => l.persistence.referenceDelegate.addReference(h, d.targetId, p)).next(() => v.forEach(d.Qi, (p) => l.persistence.referenceDelegate.removeReference(h, d.targetId, p)))));
    } catch (h) {
      if (!Rr(h))
        throw h;
      R("LocalStore", "Failed to update sequence numbers: " + h);
    }
    for (const h of u) {
      const d = h.targetId;
      if (!h.fromCache) {
        const p = l.ns.get(d), y = p.snapshotVersion, E = p.withLastLimboFreeSnapshotVersion(y);
        l.ns = l.ns.insert(d, E);
      }
    }
  }(r.localStore, s));
}
async function yE(e, t) {
  const n = j(e);
  if (!n.currentUser.isEqual(t)) {
    R("SyncEngine", "User change. New user:", t.toKey());
    const r = await Zh(n.localStore, t);
    n.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
    function(s, o) {
      s.Ca.forEach((a) => {
        a.forEach((c) => {
          c.reject(new V(_.CANCELLED, o));
        });
      }), s.Ca.clear();
    }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    n.sharedClientState.handleUserChange(t, r.removedBatchIds, r.addedBatchIds), await Dr(n, r.us);
  }
}
function _E(e, t) {
  const n = j(e), r = n.Sa.get(t);
  if (r && r.ma)
    return z().add(r.key);
  {
    let i = z();
    const s = n.pa.get(t);
    if (!s)
      return i;
    for (const o of s) {
      const a = n.ga.get(o);
      i = i.unionWith(a.view.la);
    }
    return i;
  }
}
function vE(e) {
  const t = j(e);
  return t.remoteStore.remoteSyncer.applyRemoteEvent = dd.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = _E.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = fE.bind(null, t), t.fa.u_ = nE.bind(null, t.eventManager), t.fa.xa = rE.bind(null, t.eventManager), t;
}
function EE(e) {
  const t = j(e);
  return t.remoteStore.remoteSyncer.applySuccessfulWrite = pE.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = mE.bind(null, t), t;
}
class ou {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(t) {
    this.serializer = Yi(t.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(t), this.persistence = this.createPersistence(t), await this.persistence.start(), this.localStore = this.createLocalStore(t), this.gcScheduler = this.createGarbageCollectionScheduler(t, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(t, this.localStore);
  }
  createGarbageCollectionScheduler(t, n) {
    return null;
  }
  createIndexBackfillerScheduler(t, n) {
    return null;
  }
  createLocalStore(t) {
    return Sv(this.persistence, new Iv(), t.initialUser, this.serializer);
  }
  createPersistence(t) {
    return new Ev(_a.Hr, this.serializer);
  }
  createSharedClientState(t) {
    return new xv();
  }
  async terminate() {
    var t, n;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(), (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
}
class wE {
  async initialize(t, n) {
    this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(n), this.remoteStore = this.createRemoteStore(n), this.eventManager = this.createEventManager(n), this.syncEngine = this.createSyncEngine(
      n,
      /* startAsPrimary=*/
      !t.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (r) => iu(
      this.syncEngine,
      r,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = yE.bind(null, this.syncEngine), await Xv(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return function() {
      return new Zv();
    }();
  }
  createDatastore(t) {
    const n = Yi(t.databaseInfo.databaseId), r = function(s) {
      return new Mv(s);
    }(t.databaseInfo);
    return function(s, o, a, c) {
      return new $v(s, o, a, c);
    }(t.authCredentials, t.appCheckCredentials, r, n);
  }
  createRemoteStore(t) {
    return function(r, i, s, o, a) {
      return new Bv(r, i, s, o, a);
    }(this.localStore, this.datastore, t.asyncQueue, (n) => iu(
      this.syncEngine,
      n,
      0
      /* OnlineStateSource.RemoteStore */
    ), function() {
      return eu.D() ? new eu() : new Nv();
    }());
  }
  createSyncEngine(t, n) {
    return function(i, s, o, a, c, u, l) {
      const h = new cE(i, s, o, a, c, u);
      return l && (h.Fa = !0), h;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, n);
  }
  async terminate() {
    var t;
    await async function(r) {
      const i = j(r);
      R("RemoteStore", "RemoteStore shutting down."), i.v_.add(
        5
        /* OfflineCause.Shutdown */
      ), await Vr(i), i.M_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      i.x_.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore), (t = this.datastore) === null || t === void 0 || t.terminate();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TE {
  constructor(t) {
    this.observer = t, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = !1;
  }
  next(t) {
    this.observer.next && this.Ba(this.observer.next, t);
  }
  error(t) {
    this.observer.error ? this.Ba(this.observer.error, t) : pe("Uncaught Error in snapshot listener:", t.toString());
  }
  La() {
    this.muted = !0;
  }
  Ba(t, n) {
    this.muted || setTimeout(() => {
      this.muted || t(n);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IE {
  constructor(t, n, r, i) {
    this.authCredentials = t, this.appCheckCredentials = n, this.asyncQueue = r, this.databaseInfo = i, this.user = Ft.UNAUTHENTICATED, this.clientId = yh.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(r, async (s) => {
      R("FirestoreClient", "Received user=", s.uid), await this.authCredentialListener(s), this.user = s;
    }), this.appCheckCredentials.start(r, (s) => (R("FirestoreClient", "Received new app check token=", s), this.appCheckCredentialListener(s, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  /**
   * Checks that the client has not been terminated. Ensures that other methods on //
   * this class cannot be called after the client is terminated. //
   */
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new V(_.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new Ee();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
      try {
        this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), t.resolve();
      } catch (n) {
        const r = Aa(n, "Failed to shutdown persistence");
        t.reject(r);
      }
    }), t.promise;
  }
}
async function Ps(e, t) {
  e.asyncQueue.verifyOperationInProgress(), R("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = e.configuration;
  await t.initialize(n);
  let r = n.initialUser;
  e.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Zh(t.localStore, i), r = i);
  }), // When a user calls clearPersistence() in one client, all other clients
  // need to be terminated to allow the delete to succeed.
  t.persistence.setDatabaseDeletedListener(() => e.terminate()), e._offlineComponents = t;
}
async function au(e, t) {
  e.asyncQueue.verifyOperationInProgress();
  const n = await SE(e);
  R("FirestoreClient", "Initializing OnlineComponentProvider"), await t.initialize(n, e.configuration), // The CredentialChangeListener of the online component provider takes
  // precedence over the offline component provider.
  e.setCredentialChangeListener((r) => nu(t.remoteStore, r)), e.setAppCheckTokenChangeListener((r, i) => nu(t.remoteStore, i)), e._onlineComponents = t;
}
function AE(e) {
  return e.name === "FirebaseError" ? e.code === _.FAILED_PRECONDITION || e.code === _.UNIMPLEMENTED : !(typeof DOMException < "u" && e instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
  // or an aborted error depending on whether the error happened during
  // schema migration.
  e.code === 22 || e.code === 20 || // Firefox Private Browsing mode disables IndexedDb and returns
  // INVALID_STATE for any usage.
  e.code === 11;
}
async function SE(e) {
  if (!e._offlineComponents)
    if (e._uninitializedComponentsProvider) {
      R("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await Ps(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (!AE(n))
          throw n;
        vn("Error using user provided cache. Falling back to memory cache: " + n), await Ps(e, new ou());
      }
    } else
      R("FirestoreClient", "Using default OfflineComponentProvider"), await Ps(e, new ou());
  return e._offlineComponents;
}
async function gd(e) {
  return e._onlineComponents || (e._uninitializedComponentsProvider ? (R("FirestoreClient", "Using user provided OnlineComponentProvider"), await au(e, e._uninitializedComponentsProvider._online)) : (R("FirestoreClient", "Using default OnlineComponentProvider"), await au(e, new wE()))), e._onlineComponents;
}
function RE(e) {
  return gd(e).then((t) => t.syncEngine);
}
async function CE(e) {
  const t = await gd(e), n = t.eventManager;
  return n.onListen = uE.bind(null, t.syncEngine), n.onUnlisten = hE.bind(null, t.syncEngine), n;
}
function bE(e, t, n = {}) {
  const r = new Ee();
  return e.asyncQueue.enqueueAndForget(async () => function(s, o, a, c, u) {
    const l = new TE({
      next: (d) => {
        o.enqueueAndForget(() => eE(s, h)), d.fromCache && c.source === "server" ? u.reject(new V(_.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : u.resolve(d);
      },
      error: (d) => u.reject(d)
    }), h = new iE(a, l, {
      includeMetadataChanges: !0,
      Z_: !0
    });
    return tE(s, h);
  }(await CE(e), e.asyncQueue, t, n, r)), r.promise;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yd(e) {
  const t = {};
  return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cu = /* @__PURE__ */ new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _d(e, t, n) {
  if (!n)
    throw new V(_.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function PE(e, t, n, r) {
  if (t === !0 && r === !0)
    throw new V(_.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function uu(e) {
  if (!k.isDocumentKey(e))
    throw new V(_.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
function lu(e) {
  if (k.isDocumentKey(e))
    throw new V(_.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function Zi(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "string")
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean")
    return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array)
      return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        function(r) {
          return r.constructor ? r.constructor.name : null;
        }(e)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : L();
}
function Sn(e, t) {
  if ("_delegate" in e && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e = e._delegate), !(e instanceof t)) {
    if (t.name === e.constructor.name)
      throw new V(_.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = Zi(e);
      throw new V(_.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new V(_.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else
      this.host = t.host, this.ssl = (n = t.ssl) === null || n === void 0 || n;
    if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, this.localCache = t.localCache, t.cacheSizeBytes === void 0)
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new V(_.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    PE("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : t.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = yd((r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}), function(s) {
      if (s.timeoutSeconds !== void 0) {
        if (isNaN(s.timeoutSeconds))
          throw new V(_.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
        if (s.timeoutSeconds < 5)
          throw new V(_.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);
        if (s.timeoutSeconds > 30)
          throw new V(_.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!t.useFetchStreams;
  }
  isEqual(t) {
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && function(r, i) {
      return r.timeoutSeconds === i.timeoutSeconds;
    }(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams;
  }
}
class ts {
  /** @hideconstructor */
  constructor(t, n, r, i) {
    this._authCredentials = t, this._appCheckCredentials = n, this._databaseId = r, this._app = i, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new hu({}), this._settingsFrozen = !1;
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app)
      throw new V(_.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new V(_.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new hu(t), t.credentials !== void 0 && (this._authCredentials = function(r) {
      if (!r)
        return new zy();
      switch (r.type) {
        case "firstParty":
          return new Ky(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
        case "provider":
          return r.client;
        default:
          throw new V(_.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = !0, this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function(n) {
      const r = cu.get(n);
      r && (R("ComponentProvider", "Removing Datastore"), cu.delete(n), r.terminate());
    }(this), Promise.resolve();
  }
}
function VE(e, t, n, r = {}) {
  var i;
  const s = (e = Sn(e, ts))._getSettings(), o = `${t}:${n}`;
  if (s.host !== "firestore.googleapis.com" && s.host !== o && vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, s), {
    host: o,
    ssl: !1
  })), r.mockUserToken) {
    let a, c;
    if (typeof r.mockUserToken == "string")
      a = r.mockUserToken, c = Ft.MOCK_USER;
    else {
      a = wm(r.mockUserToken, (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const u = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!u)
        throw new V(_.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      c = new Ft(u);
    }
    e._authCredentials = new Gy(new gh(a, c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(t, n, r) {
    this.converter = n, this._query = r, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t;
  }
  withConverter(t) {
    return new Nn(this.firestore, t, this._query);
  }
}
class Yt {
  /** @hideconstructor */
  constructor(t, n, r) {
    this.converter = n, this._key = r, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new Ve(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new Yt(this.firestore, t, this._key);
  }
}
class Ve extends Nn {
  /** @hideconstructor */
  constructor(t, n, r) {
    super(t, n, Ch(r)), this._path = r, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new Yt(
      this.firestore,
      /* converter= */
      null,
      new k(t)
    );
  }
  withConverter(t) {
    return new Ve(this.firestore, t, this._path);
  }
}
function Ca(e, t, ...n) {
  if (e = re(e), _d("collection", "path", t), e instanceof ts) {
    const r = ct.fromString(t, ...n);
    return lu(r), new Ve(
      e,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(e instanceof Yt || e instanceof Ve))
      throw new V(_.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ct.fromString(t, ...n));
    return lu(r), new Ve(
      e.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function vd(e, t, ...n) {
  if (e = re(e), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  arguments.length === 1 && (t = yh.newId()), _d("doc", "path", t), e instanceof ts) {
    const r = ct.fromString(t, ...n);
    return uu(r), new Yt(
      e,
      /* converter= */
      null,
      new k(r)
    );
  }
  {
    if (!(e instanceof Yt || e instanceof Ve))
      throw new V(_.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ct.fromString(t, ...n));
    return uu(r), new Yt(e.firestore, e instanceof Ve ? e.converter : null, new k(r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DE {
  constructor() {
    this.Xa = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.eu = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.tu = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.nu = [], // visible for testing
    this.ru = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.iu = !1, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.su = !1, // List of TimerIds to fast-forward delays for.
    this.ou = [], // Backoff timer used to schedule retries for retryable operations
    this.jo = new ed(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this._u = () => {
      const n = bs();
      n && R("AsyncQueue", "Visibility state changed to " + n.visibilityState), this.jo.Ko();
    };
    const t = bs();
    t && typeof t.addEventListener == "function" && t.addEventListener("visibilitychange", this._u);
  }
  get isShuttingDown() {
    return this.tu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.au(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.uu(t);
  }
  enterRestrictedMode(t) {
    if (!this.tu) {
      this.tu = !0, this.su = t || !1;
      const n = bs();
      n && typeof n.removeEventListener == "function" && n.removeEventListener("visibilitychange", this._u);
    }
  }
  enqueue(t) {
    if (this.au(), this.tu)
      return new Promise(() => {
      });
    const n = new Ee();
    return this.uu(() => this.tu && this.su ? Promise.resolve() : (t().then(n.resolve, n.reject), n.promise)).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.eu.push(t), this.cu()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async cu() {
    if (this.eu.length !== 0) {
      try {
        await this.eu[0](), this.eu.shift(), this.jo.reset();
      } catch (t) {
        if (!Rr(t))
          throw t;
        R("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.eu.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.jo.qo(() => this.cu());
    }
  }
  uu(t) {
    const n = this.Xa.then(() => (this.iu = !0, t().catch((r) => {
      this.ru = r, this.iu = !1;
      const i = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function(o) {
          let a = o.message || "";
          return o.stack && (a = o.stack.includes(o.message) ? o.stack : o.message + `
` + o.stack), a;
        }(r)
      );
      throw pe("INTERNAL UNHANDLED ERROR: ", i), r;
    }).then((r) => (this.iu = !1, r))));
    return this.Xa = n, n;
  }
  enqueueAfterDelay(t, n, r) {
    this.au(), // Fast-forward delays for timerIds that have been overriden.
    this.ou.indexOf(t) > -1 && (n = 0);
    const i = Ia.createAndSchedule(this, t, n, r, (s) => this.lu(s));
    return this.nu.push(i), i;
  }
  au() {
    this.ru && L();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async hu() {
    let t;
    do
      t = this.Xa, await t;
    while (t !== this.Xa);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  Pu(t) {
    for (const n of this.nu)
      if (n.timerId === t)
        return !0;
    return !1;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  Iu(t) {
    return this.hu().then(() => {
      this.nu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.nu)
        if (n.skipDelay(), t !== "all" && n.timerId === t)
          break;
      return this.hu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  Tu(t) {
    this.ou.push(t);
  }
  /** Called once a DelayedOperation is run or canceled. */
  lu(t) {
    const n = this.nu.indexOf(t);
    this.nu.splice(n, 1);
  }
}
class es extends ts {
  /** @hideconstructor */
  constructor(t, n, r, i) {
    super(t, n, r, i), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = function() {
      return new DE();
    }(), this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]";
  }
  _terminate() {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    wd(this), this._firestoreClient.terminate();
  }
}
function xE(e, t) {
  const n = typeof e == "object" ? e : ll(), r = typeof e == "string" ? e : t || "(default)", i = gr(n, "firestore").getImmediate({
    identifier: r
  });
  if (!i._initialized) {
    const s = vm("firestore");
    s && VE(i, ...s);
  }
  return i;
}
function Ed(e) {
  return e._firestoreClient || wd(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient;
}
function wd(e) {
  var t, n, r;
  const i = e._freezeSettings(), s = function(a, c, u, l) {
    return new c_(a, c, u, l.host, l.ssl, l.experimentalForceLongPolling, l.experimentalAutoDetectLongPolling, yd(l.experimentalLongPollingOptions), l.useFetchStreams);
  }(e._databaseId, ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "", e._persistenceKey, i);
  e._firestoreClient = new IE(e._authCredentials, e._appCheckCredentials, e._queue, s), !((n = i.localCache) === null || n === void 0) && n._offlineComponentProvider && (!((r = i.localCache) === null || r === void 0) && r._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
    _offlineKind: i.localCache.kind,
    _offline: i.localCache._offlineComponentProvider,
    _online: i.localCache._onlineComponentProvider
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn {
  /** @hideconstructor */
  constructor(t) {
    this._byteString = t;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(t) {
    try {
      return new Rn(jt.fromBase64String(t));
    } catch (n) {
      throw new V(_.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + n);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(t) {
    return new Rn(jt.fromUint8Array(t));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...t) {
    for (let n = 0; n < t.length; ++n)
      if (t[n].length === 0)
        throw new V(_.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new Nt(t);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
function NE() {
  return new xr("__name__");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(t) {
    this._methodName = t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(t, n) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new V(_.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(n) || n < -180 || n > 180)
      throw new V(_.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + n);
    this._lat = t, this._long = n;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  /** Returns a JSON-serializable representation of this GeoPoint. */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(t) {
    return X(this._lat, t._lat) || X(this._long, t._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kE = /^__.*__$/;
class OE {
  constructor(t, n, r) {
    this.data = t, this.fieldMask = n, this.fieldTransforms = r;
  }
  toMutation(t, n) {
    return this.fieldMask !== null ? new $e(t, this.data, this.fieldMask, n, this.fieldTransforms) : new br(t, this.data, n, this.fieldTransforms);
  }
}
class Td {
  constructor(t, n, r) {
    this.data = t, this.fieldMask = n, this.fieldTransforms = r;
  }
  toMutation(t, n) {
    return new $e(t, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function Id(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw L();
  }
}
class Va {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(t, n, r, i, s, o) {
    this.settings = t, this.databaseId = n, this.serializer = r, this.ignoreUndefinedProperties = i, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    s === void 0 && this.Eu(), this.fieldTransforms = s || [], this.fieldMask = o || [];
  }
  get path() {
    return this.settings.path;
  }
  get du() {
    return this.settings.du;
  }
  /** Returns a new context with the specified settings overwritten. */
  Au(t) {
    return new Va(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  Ru(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t), i = this.Au({
      path: r,
      Vu: !1
    });
    return i.mu(t), i;
  }
  fu(t) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(t), i = this.Au({
      path: r,
      Vu: !1
    });
    return i.Eu(), i;
  }
  gu(t) {
    return this.Au({
      path: void 0,
      Vu: !0
    });
  }
  pu(t) {
    return wi(t, this.settings.methodName, this.settings.yu || !1, this.path, this.settings.wu);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(t) {
    return this.fieldMask.find((n) => t.isPrefixOf(n)) !== void 0 || this.fieldTransforms.find((n) => t.isPrefixOf(n.field)) !== void 0;
  }
  Eu() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++)
        this.mu(this.path.get(t));
  }
  mu(t) {
    if (t.length === 0)
      throw this.pu("Document fields must not be empty");
    if (Id(this.du) && kE.test(t))
      throw this.pu('Document fields cannot begin and end with "__"');
  }
}
class ME {
  constructor(t, n, r) {
    this.databaseId = t, this.ignoreUndefinedProperties = n, this.serializer = r || Yi(t);
  }
  /** Creates a new top-level parse context. */
  Su(t, n, r, i = !1) {
    return new Va({
      du: t,
      methodName: n,
      wu: r,
      path: Nt.emptyPath(),
      Vu: !1,
      yu: i
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
}
function Da(e) {
  const t = e._freezeSettings(), n = Yi(e._databaseId);
  return new ME(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function LE(e, t, n, r, i, s = {}) {
  const o = e.Su(s.merge || s.mergeFields ? 2 : 0, t, n, i);
  xa("Data must be an object, but it was:", o, r);
  const a = Ad(r, o);
  let c, u;
  if (s.merge)
    c = new Qt(o.fieldMask), u = o.fieldTransforms;
  else if (s.mergeFields) {
    const l = [];
    for (const h of s.mergeFields) {
      const d = Eo(t, h, n);
      if (!o.contains(d))
        throw new V(_.INVALID_ARGUMENT, `Field '${d}' is specified in your field mask but missing from your input data.`);
      Rd(l, d) || l.push(d);
    }
    c = new Qt(l), u = o.fieldTransforms.filter((h) => c.covers(h.field));
  } else
    c = null, u = o.fieldTransforms;
  return new OE(new Ht(a), c, u);
}
class ns extends ba {
  _toFieldTransform(t) {
    if (t.du !== 2)
      throw t.du === 1 ? t.pu(`${this._methodName}() can only appear at the top level of your update data`) : t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return t.fieldMask.push(t.path), null;
  }
  isEqual(t) {
    return t instanceof ns;
  }
}
function FE(e, t, n, r) {
  const i = e.Su(1, t, n);
  xa("Data must be an object, but it was:", i, r);
  const s = [], o = Ht.empty();
  nn(r, (c, u) => {
    const l = Na(t, c, n);
    u = re(u);
    const h = i.fu(l);
    if (u instanceof ns)
      s.push(l);
    else {
      const d = Nr(u, h);
      d != null && (s.push(l), o.set(l, d));
    }
  });
  const a = new Qt(s);
  return new Td(o, a, i.fieldTransforms);
}
function $E(e, t, n, r, i, s) {
  const o = e.Su(1, t, n), a = [Eo(t, r, n)], c = [i];
  if (s.length % 2 != 0)
    throw new V(_.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let d = 0; d < s.length; d += 2)
    a.push(Eo(t, s[d])), c.push(s[d + 1]);
  const u = [], l = Ht.empty();
  for (let d = a.length - 1; d >= 0; --d)
    if (!Rd(u, a[d])) {
      const p = a[d];
      let y = c[d];
      y = re(y);
      const E = o.fu(p);
      if (y instanceof ns)
        u.push(p);
      else {
        const f = Nr(y, E);
        f != null && (u.push(p), l.set(p, f));
      }
    }
  const h = new Qt(u);
  return new Td(l, h, o.fieldTransforms);
}
function UE(e, t, n, r = !1) {
  return Nr(n, e.Su(r ? 4 : 3, t));
}
function Nr(e, t) {
  if (Sd(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    e = re(e)
  ))
    return xa("Unsupported field value:", t, e), Ad(e, t);
  if (e instanceof ba)
    return function(r, i) {
      if (!Id(i.du))
        throw i.pu(`${r._methodName}() can only be used with update() and set()`);
      if (!i.path)
        throw i.pu(`${r._methodName}() is not currently supported inside arrays`);
      const s = r._toFieldTransform(i);
      s && i.fieldTransforms.push(s);
    }(e, t), null;
  if (e === void 0 && t.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    t.path && t.fieldMask.push(t.path), e instanceof Array
  ) {
    if (t.settings.Vu && t.du !== 4)
      throw t.pu("Nested arrays are not supported");
    return function(r, i) {
      const s = [];
      let o = 0;
      for (const a of r) {
        let c = Nr(a, i.gu(o));
        c == null && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (c = {
          nullValue: "NULL_VALUE"
        }), s.push(c), o++;
      }
      return {
        arrayValue: {
          values: s
        }
      };
    }(e, t);
  }
  return function(r, i) {
    if ((r = re(r)) === null)
      return {
        nullValue: "NULL_VALUE"
      };
    if (typeof r == "number")
      return P_(i.serializer, r);
    if (typeof r == "boolean")
      return {
        booleanValue: r
      };
    if (typeof r == "string")
      return {
        stringValue: r
      };
    if (r instanceof Date) {
      const s = wt.fromDate(r);
      return {
        timestampValue: vi(i.serializer, s)
      };
    }
    if (r instanceof wt) {
      const s = new wt(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return {
        timestampValue: vi(i.serializer, s)
      };
    }
    if (r instanceof Pa)
      return {
        geoPointValue: {
          latitude: r.latitude,
          longitude: r.longitude
        }
      };
    if (r instanceof Rn)
      return {
        bytesValue: Wh(i.serializer, r._byteString)
      };
    if (r instanceof Yt) {
      const s = i.databaseId, o = r.firestore._databaseId;
      if (!o.isEqual(s))
        throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);
      return {
        referenceValue: ga(r.firestore._databaseId || i.databaseId, r._key.path)
      };
    }
    throw i.pu(`Unsupported field value: ${Zi(r)}`);
  }(e, t);
}
function Ad(e, t) {
  const n = {};
  return _h(e) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    t.path && t.path.length > 0 && t.fieldMask.push(t.path)
  ) : nn(e, (r, i) => {
    const s = Nr(i, t.Ru(r));
    s != null && (n[r] = s);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function Sd(e) {
  return !(typeof e != "object" || e === null || e instanceof Array || e instanceof Date || e instanceof wt || e instanceof Pa || e instanceof Rn || e instanceof Yt || e instanceof ba);
}
function xa(e, t, n) {
  if (!Sd(n) || !function(i) {
    return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null);
  }(n)) {
    const r = Zi(n);
    throw r === "an object" ? t.pu(e + " a custom object") : t.pu(e + " " + r);
  }
}
function Eo(e, t, n) {
  if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    (t = re(t)) instanceof xr
  )
    return t._internalPath;
  if (typeof t == "string")
    return Na(e, t);
  throw wi(
    "Field path arguments must be of type string or ",
    e,
    /* hasConverter= */
    !1,
    /* path= */
    void 0,
    n
  );
}
const BE = new RegExp("[~\\*/\\[\\]]");
function Na(e, t, n) {
  if (t.search(BE) >= 0)
    throw wi(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      n
    );
  try {
    return new xr(...t.split("."))._internalPath;
  } catch {
    throw wi(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      /* hasConverter= */
      !1,
      /* path= */
      void 0,
      n
    );
  }
}
function wi(e, t, n, r, i) {
  const s = r && !r.isEmpty(), o = i !== void 0;
  let a = `Function ${t}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), a += ". ";
  let c = "";
  return (s || o) && (c += " (found", s && (c += ` in field ${r}`), o && (c += ` in document ${i}`), c += ")"), new V(_.INVALID_ARGUMENT, a + e + c);
}
function Rd(e, t) {
  return e.some((n) => n.isEqual(t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t, n, r, i, s) {
    this._firestore = t, this._userDataWriter = n, this._key = r, this._document = i, this._converter = s;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new Yt(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return this._document !== null;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new jE(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t) {
    if (this._document) {
      const n = this._document.data.field(ka("DocumentSnapshot.get", t));
      if (n !== null)
        return this._userDataWriter.convertValue(n);
    }
  }
}
class jE extends Cd {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
}
function ka(e, t) {
  return typeof t == "string" ? Na(e, t) : t instanceof xr ? t._internalPath : t._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qE(e) {
  if (e.limitType === "L" && e.explicitOrderBy.length === 0)
    throw new V(_.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
class Oa {
}
class zE extends Oa {
}
function GE(e, t, ...n) {
  let r = [];
  t instanceof Oa && r.push(t), r = r.concat(n), function(s) {
    const o = s.filter((c) => c instanceof Ma).length, a = s.filter((c) => c instanceof rs).length;
    if (o > 1 || o > 0 && a > 0)
      throw new V(_.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  }(r);
  for (const i of r)
    e = i._apply(e);
  return e;
}
class rs extends zE {
  /**
   * @internal
   */
  constructor(t, n, r) {
    super(), this._field = t, this._op = n, this._value = r, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t, n, r) {
    return new rs(t, n, r);
  }
  _apply(t) {
    const n = this._parse(t);
    return bd(t._query, n), new Nn(t.firestore, t.converter, ho(t._query, n));
  }
  _parse(t) {
    const n = Da(t.firestore);
    return function(s, o, a, c, u, l, h) {
      let d;
      if (u.isKeyField()) {
        if (l === "array-contains" || l === "array-contains-any")
          throw new V(_.INVALID_ARGUMENT, `Invalid Query. You can't perform '${l}' queries on documentId().`);
        if (l === "in" || l === "not-in") {
          fu(h, l);
          const p = [];
          for (const y of h)
            p.push(du(c, s, y));
          d = {
            arrayValue: {
              values: p
            }
          };
        } else
          d = du(c, s, h);
      } else
        l !== "in" && l !== "not-in" && l !== "array-contains-any" || fu(h, l), d = UE(
          a,
          o,
          h,
          /* allowArrays= */
          l === "in" || l === "not-in"
        );
      return vt.create(u, l, d);
    }(t._query, "where", n, t.firestore._databaseId, this._field, this._op, this._value);
  }
}
function WE(e, t, n) {
  const r = t, i = ka("where", e);
  return rs._create(i, r, n);
}
class Ma extends Oa {
  /**
   * @internal
   */
  constructor(t, n) {
    super(), this.type = t, this._queryConstraints = n;
  }
  static _create(t, n) {
    return new Ma(t, n);
  }
  _parse(t) {
    const n = this._queryConstraints.map((r) => r._parse(t)).filter((r) => r.getFilters().length > 0);
    return n.length === 1 ? n[0] : se.create(n, this._getOperator());
  }
  _apply(t) {
    const n = this._parse(t);
    return n.getFilters().length === 0 ? t : (function(i, s) {
      let o = i;
      const a = s.getFlattenedFilters();
      for (const c of a)
        bd(o, c), o = ho(o, c);
    }(t._query, n), new Nn(t.firestore, t.converter, ho(t._query, n)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
function du(e, t, n) {
  if (typeof (n = re(n)) == "string") {
    if (n === "")
      throw new V(_.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!bh(t) && n.indexOf("/") !== -1)
      throw new V(_.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const r = t.path.child(ct.fromString(n));
    if (!k.isDocumentKey(r))
      throw new V(_.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return Mc(e, new k(r));
  }
  if (n instanceof Yt)
    return Mc(e, n._key);
  throw new V(_.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zi(n)}.`);
}
function fu(e, t) {
  if (!Array.isArray(e) || e.length === 0)
    throw new V(_.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
function bd(e, t) {
  const n = function(i, s) {
    for (const o of i)
      for (const a of o.getFlattenedFilters())
        if (s.indexOf(a.op) >= 0)
          return a.op;
    return null;
  }(e.filters, function(i) {
    switch (i) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  }(t.op));
  if (n !== null)
    throw n === t.op ? new V(_.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new V(_.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`);
}
class HE {
  convertValue(t, n = "none") {
    switch (Je(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return _t(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, n);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(Xe(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, n);
      case 10:
        return this.convertObject(t.mapValue, n);
      default:
        throw L();
    }
  }
  convertObject(t, n) {
    return this.convertObjectMap(t.fields, n);
  }
  /**
   * @internal
   */
  convertObjectMap(t, n = "none") {
    const r = {};
    return nn(t, (i, s) => {
      r[i] = this.convertValue(s, n);
    }), r;
  }
  convertGeoPoint(t) {
    return new Pa(_t(t.latitude), _t(t.longitude));
  }
  convertArray(t, n) {
    return (t.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(t, n) {
    switch (n) {
      case "previous":
        const r = la(t);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(cr(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const n = Ne(t);
    return new wt(n.seconds, n.nanos);
  }
  convertDocumentKey(t, n) {
    const r = ct.fromString(t);
    st(Jh(r));
    const i = new ur(r.get(1), r.get(3)), s = new k(r.popFirst(5));
    return i.isEqual(n) || // TODO(b/64130202): Somehow support foreign references.
    pe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), s;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function KE(e, t, n) {
  let r;
  return r = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr {
  /** @hideconstructor */
  constructor(t, n) {
    this.hasPendingWrites = t, this.fromCache = n;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }
}
class QE extends Cd {
  /** @hideconstructor protected */
  constructor(t, n, r, i, s, o) {
    super(t, n, r, i, o), this._firestore = t, this._firestoreImpl = t, this.metadata = s;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new ti(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(n, t);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t, n = {}) {
    if (this._document) {
      const r = this._document.data.field(ka("DocumentSnapshot.get", t));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class ti extends QE {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(t = {}) {
    return super.data(t);
  }
}
class YE {
  /** @hideconstructor */
  constructor(t, n, r, i) {
    this._firestore = t, this._userDataWriter = n, this._snapshot = i, this.metadata = new Hr(i.hasPendingWrites, i.fromCache), this.query = r;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const t = [];
    return this.forEach((n) => t.push(n)), t;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return this.size === 0;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t, n) {
    this._snapshot.docs.forEach((r) => {
      t.call(n, new ti(this._firestore, this._userDataWriter, r.key, r, new Hr(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(t = {}) {
    const n = !!t.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new V(_.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === n || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    function(i, s) {
      if (i._snapshot.oldDocs.isEmpty()) {
        let o = 0;
        return i._snapshot.docChanges.map((a) => {
          const c = new ti(i._firestore, i._userDataWriter, a.doc.key, a.doc, new Hr(i._snapshot.mutatedKeys.has(a.doc.key), i._snapshot.fromCache), i.query.converter);
          return a.doc, {
            type: "added",
            doc: c,
            oldIndex: -1,
            newIndex: o++
          };
        });
      }
      {
        let o = i._snapshot.oldDocs;
        return i._snapshot.docChanges.filter((a) => s || a.type !== 3).map((a) => {
          const c = new ti(i._firestore, i._userDataWriter, a.doc.key, a.doc, new Hr(i._snapshot.mutatedKeys.has(a.doc.key), i._snapshot.fromCache), i.query.converter);
          let u = -1, l = -1;
          return a.type !== 0 && (u = o.indexOf(a.doc.key), o = o.delete(a.doc.key)), a.type !== 1 && (o = o.add(a.doc), l = o.indexOf(a.doc.key)), {
            type: XE(a.type),
            doc: c,
            oldIndex: u,
            newIndex: l
          };
        });
      }
    }(this, n), this._cachedChangesIncludeMetadataChanges = n), this._cachedChanges;
  }
}
function XE(e) {
  switch (e) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return L();
  }
}
class JE extends HE {
  constructor(t) {
    super(), this.firestore = t;
  }
  convertBytes(t) {
    return new Rn(t);
  }
  convertReference(t) {
    const n = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Yt(
      this.firestore,
      /* converter= */
      null,
      n
    );
  }
}
function Pd(e) {
  e = Sn(e, Nn);
  const t = Sn(e.firestore, es), n = Ed(t), r = new JE(t);
  return qE(e._query), bE(n, e._query).then((i) => new YE(t, r, e, i));
}
function ZE(e, t, n, ...r) {
  e = Sn(e, Yt);
  const i = Sn(e.firestore, es), s = Da(i);
  let o;
  return o = typeof // For Compat types, we have to "extract" the underlying types before
  // performing validation.
  (t = re(t)) == "string" || t instanceof xr ? $E(s, "updateDoc", e._key, t, n, r) : FE(s, "updateDoc", e._key, t), Vd(i, [o.toMutation(e._key, de.exists(!0))]);
}
function tw(e, t) {
  const n = Sn(e.firestore, es), r = vd(e), i = KE(e.converter, t);
  return Vd(n, [LE(Da(e.firestore), "addDoc", r._key, i, e.converter !== null, {}).toMutation(r._key, de.exists(!1))]).then(() => r);
}
function Vd(e, t) {
  return function(r, i) {
    const s = new Ee();
    return r.asyncQueue.enqueueAndForget(async () => dE(await RE(r), i, s)), s.promise;
  }(Ed(e), t);
}
(function(t, n = !0) {
  (function(i) {
    Vn = i;
  })(bg), De(new we("firestore", (r, { instanceIdentifier: i, options: s }) => {
    const o = r.getProvider("app").getImmediate(), a = new es(new Wy(r.getProvider("auth-internal")), new Yy(r.getProvider("app-check-internal")), function(u, l) {
      if (!Object.prototype.hasOwnProperty.apply(u.options, ["projectId"]))
        throw new V(_.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new ur(u.options.projectId, l);
    }(o, i), o);
    return s = Object.assign({
      useFetchStreams: n
    }, s), a._setSettings(s), a;
  }, "PUBLIC").setMultipleInstances(!0)), le(Dc, "4.4.2", t), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
  le(Dc, "4.4.2", "esm2017");
})();
var ew = "firebase", nw = "10.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
le(ew, nw, "app");
const Dd = "@firebase/installations", La = "0.6.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xd = 1e4, Nd = `w:${La}`, kd = "FIS_v2", rw = "https://firebaseinstallations.googleapis.com/v1", iw = 60 * 60 * 1e3, sw = "installations", ow = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const aw = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
}, Ze = new Ci(sw, ow, aw);
function Od(e) {
  return e instanceof Me && e.code.includes(
    "request-failed"
    /* ErrorCode.REQUEST_FAILED */
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Md({ projectId: e }) {
  return `${rw}/projects/${e}/installations`;
}
function Ld(e) {
  return {
    token: e.token,
    requestStatus: 2,
    expiresIn: uw(e.expiresIn),
    creationTime: Date.now()
  };
}
async function Fd(e, t) {
  const r = (await t.json()).error;
  return Ze.create("request-failed", {
    requestName: e,
    serverCode: r.code,
    serverMessage: r.message,
    serverStatus: r.status
  });
}
function $d({ apiKey: e }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": e
  });
}
function cw(e, { refreshToken: t }) {
  const n = $d(e);
  return n.append("Authorization", lw(t)), n;
}
async function Ud(e) {
  const t = await e();
  return t.status >= 500 && t.status < 600 ? e() : t;
}
function uw(e) {
  return Number(e.replace("s", "000"));
}
function lw(e) {
  return `${kd} ${e}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hw({ appConfig: e, heartbeatServiceProvider: t }, { fid: n }) {
  const r = Md(e), i = $d(e), s = t.getImmediate({
    optional: !0
  });
  if (s) {
    const u = await s.getHeartbeatsHeader();
    u && i.append("x-firebase-client", u);
  }
  const o = {
    fid: n,
    authVersion: kd,
    appId: e.appId,
    sdkVersion: Nd
  }, a = {
    method: "POST",
    headers: i,
    body: JSON.stringify(o)
  }, c = await Ud(() => fetch(r, a));
  if (c.ok) {
    const u = await c.json();
    return {
      fid: u.fid || n,
      registrationStatus: 2,
      refreshToken: u.refreshToken,
      authToken: Ld(u.authToken)
    };
  } else
    throw await Fd("Create Installation", c);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bd(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dw(e) {
  return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fw = /^[cdef][\w-]{21}$/, wo = "";
function pw() {
  try {
    const e = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
    const n = mw(e);
    return fw.test(n) ? n : wo;
  } catch {
    return wo;
  }
}
function mw(e) {
  return dw(e).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function is(e) {
  return `${e.appName}!${e.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jd = /* @__PURE__ */ new Map();
function qd(e, t) {
  const n = is(e);
  zd(n, t), gw(n, t);
}
function zd(e, t) {
  const n = jd.get(e);
  if (n)
    for (const r of n)
      r(t);
}
function gw(e, t) {
  const n = yw();
  n && n.postMessage({ key: e, fid: t }), _w();
}
let He = null;
function yw() {
  return !He && "BroadcastChannel" in self && (He = new BroadcastChannel("[Firebase] FID Change"), He.onmessage = (e) => {
    zd(e.data.key, e.data.fid);
  }), He;
}
function _w() {
  jd.size === 0 && He && (He.close(), He = null);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vw = "firebase-installations-database", Ew = 1, tn = "firebase-installations-store";
let Vs = null;
function Fa() {
  return Vs || (Vs = cl(vw, Ew, {
    upgrade: (e, t) => {
      switch (t) {
        case 0:
          e.createObjectStore(tn);
      }
    }
  })), Vs;
}
async function Ti(e, t) {
  const n = is(e), i = (await Fa()).transaction(tn, "readwrite"), s = i.objectStore(tn), o = await s.get(n);
  return await s.put(t, n), await i.done, (!o || o.fid !== t.fid) && qd(e, t.fid), t;
}
async function Gd(e) {
  const t = is(e), r = (await Fa()).transaction(tn, "readwrite");
  await r.objectStore(tn).delete(t), await r.done;
}
async function ss(e, t) {
  const n = is(e), i = (await Fa()).transaction(tn, "readwrite"), s = i.objectStore(tn), o = await s.get(n), a = t(o);
  return a === void 0 ? await s.delete(n) : await s.put(a, n), await i.done, a && (!o || o.fid !== a.fid) && qd(e, a.fid), a;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $a(e) {
  let t;
  const n = await ss(e.appConfig, (r) => {
    const i = ww(r), s = Tw(e, i);
    return t = s.registrationPromise, s.installationEntry;
  });
  return n.fid === wo ? { installationEntry: await t } : {
    installationEntry: n,
    registrationPromise: t
  };
}
function ww(e) {
  const t = e || {
    fid: pw(),
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  };
  return Wd(t);
}
function Tw(e, t) {
  if (t.registrationStatus === 0) {
    if (!navigator.onLine) {
      const i = Promise.reject(Ze.create(
        "app-offline"
        /* ErrorCode.APP_OFFLINE */
      ));
      return {
        installationEntry: t,
        registrationPromise: i
      };
    }
    const n = {
      fid: t.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    }, r = Iw(e, n);
    return { installationEntry: n, registrationPromise: r };
  } else
    return t.registrationStatus === 1 ? {
      installationEntry: t,
      registrationPromise: Aw(e)
    } : { installationEntry: t };
}
async function Iw(e, t) {
  try {
    const n = await hw(e, t);
    return Ti(e.appConfig, n);
  } catch (n) {
    throw Od(n) && n.customData.serverCode === 409 ? await Gd(e.appConfig) : await Ti(e.appConfig, {
      fid: t.fid,
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    }), n;
  }
}
async function Aw(e) {
  let t = await pu(e.appConfig);
  for (; t.registrationStatus === 1; )
    await Bd(100), t = await pu(e.appConfig);
  if (t.registrationStatus === 0) {
    const { installationEntry: n, registrationPromise: r } = await $a(e);
    return r || n;
  }
  return t;
}
function pu(e) {
  return ss(e, (t) => {
    if (!t)
      throw Ze.create(
        "installation-not-found"
        /* ErrorCode.INSTALLATION_NOT_FOUND */
      );
    return Wd(t);
  });
}
function Wd(e) {
  return Sw(e) ? {
    fid: e.fid,
    registrationStatus: 0
    /* RequestStatus.NOT_STARTED */
  } : e;
}
function Sw(e) {
  return e.registrationStatus === 1 && e.registrationTime + xd < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rw({ appConfig: e, heartbeatServiceProvider: t }, n) {
  const r = Cw(e, n), i = cw(e, n), s = t.getImmediate({
    optional: !0
  });
  if (s) {
    const u = await s.getHeartbeatsHeader();
    u && i.append("x-firebase-client", u);
  }
  const o = {
    installation: {
      sdkVersion: Nd,
      appId: e.appId
    }
  }, a = {
    method: "POST",
    headers: i,
    body: JSON.stringify(o)
  }, c = await Ud(() => fetch(r, a));
  if (c.ok) {
    const u = await c.json();
    return Ld(u);
  } else
    throw await Fd("Generate Auth Token", c);
}
function Cw(e, { fid: t }) {
  return `${Md(e)}/${t}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ua(e, t = !1) {
  let n;
  const r = await ss(e.appConfig, (s) => {
    if (!Hd(s))
      throw Ze.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const o = s.authToken;
    if (!t && Vw(o))
      return s;
    if (o.requestStatus === 1)
      return n = bw(e, t), s;
    {
      if (!navigator.onLine)
        throw Ze.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        );
      const a = xw(s);
      return n = Pw(e, a), a;
    }
  });
  return n ? await n : r.authToken;
}
async function bw(e, t) {
  let n = await mu(e.appConfig);
  for (; n.authToken.requestStatus === 1; )
    await Bd(100), n = await mu(e.appConfig);
  const r = n.authToken;
  return r.requestStatus === 0 ? Ua(e, t) : r;
}
function mu(e) {
  return ss(e, (t) => {
    if (!Hd(t))
      throw Ze.create(
        "not-registered"
        /* ErrorCode.NOT_REGISTERED */
      );
    const n = t.authToken;
    return Nw(n) ? Object.assign(Object.assign({}, t), { authToken: {
      requestStatus: 0
      /* RequestStatus.NOT_STARTED */
    } }) : t;
  });
}
async function Pw(e, t) {
  try {
    const n = await Rw(e, t), r = Object.assign(Object.assign({}, t), { authToken: n });
    return await Ti(e.appConfig, r), n;
  } catch (n) {
    if (Od(n) && (n.customData.serverCode === 401 || n.customData.serverCode === 404))
      await Gd(e.appConfig);
    else {
      const r = Object.assign(Object.assign({}, t), { authToken: {
        requestStatus: 0
        /* RequestStatus.NOT_STARTED */
      } });
      await Ti(e.appConfig, r);
    }
    throw n;
  }
}
function Hd(e) {
  return e !== void 0 && e.registrationStatus === 2;
}
function Vw(e) {
  return e.requestStatus === 2 && !Dw(e);
}
function Dw(e) {
  const t = Date.now();
  return t < e.creationTime || e.creationTime + e.expiresIn < t + iw;
}
function xw(e) {
  const t = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, e), { authToken: t });
}
function Nw(e) {
  return e.requestStatus === 1 && e.requestTime + xd < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kw(e) {
  const t = e, { installationEntry: n, registrationPromise: r } = await $a(t);
  return r ? r.catch(console.error) : Ua(t).catch(console.error), n.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ow(e, t = !1) {
  const n = e;
  return await Mw(n), (await Ua(n, t)).token;
}
async function Mw(e) {
  const { registrationPromise: t } = await $a(e);
  t && await t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lw(e) {
  if (!e || !e.options)
    throw Ds("App Configuration");
  if (!e.name)
    throw Ds("App Name");
  const t = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const n of t)
    if (!e.options[n])
      throw Ds(n);
  return {
    appName: e.name,
    projectId: e.options.projectId,
    apiKey: e.options.apiKey,
    appId: e.options.appId
  };
}
function Ds(e) {
  return Ze.create("missing-app-config-values", {
    valueName: e
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kd = "installations", Fw = "installations-internal", $w = (e) => {
  const t = e.getProvider("app").getImmediate(), n = Lw(t), r = gr(t, "heartbeat");
  return {
    app: t,
    appConfig: n,
    heartbeatServiceProvider: r,
    _delete: () => Promise.resolve()
  };
}, Uw = (e) => {
  const t = e.getProvider("app").getImmediate(), n = gr(t, Kd).getImmediate();
  return {
    getId: () => kw(n),
    getToken: (i) => Ow(n, i)
  };
};
function Bw() {
  De(new we(
    Kd,
    $w,
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), De(new we(
    Fw,
    Uw,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
}
Bw();
le(Dd, La);
le(Dd, La, "esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii = "analytics", jw = "firebase_id", qw = "origin", zw = 60 * 1e3, Gw = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig", Ba = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt = new Oo("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ww = {
  "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
  "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  "no-client-id": 'The "client_id" field is empty.',
  "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
}, Xt = new Ci("analytics", "Analytics", Ww);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hw(e) {
  if (!e.startsWith(Ba)) {
    const t = Xt.create("invalid-gtag-resource", {
      gtagURL: e
    });
    return Kt.warn(t.message), "";
  }
  return e;
}
function Qd(e) {
  return Promise.all(e.map((t) => t.catch((n) => n)));
}
function Kw(e, t) {
  let n;
  return window.trustedTypes && (n = window.trustedTypes.createPolicy(e, t)), n;
}
function Qw(e, t) {
  const n = Kw("firebase-js-sdk-policy", {
    createScriptURL: Hw
  }), r = document.createElement("script"), i = `${Ba}?l=${e}&id=${t}`;
  r.src = n ? n == null ? void 0 : n.createScriptURL(i) : i, r.async = !0, document.head.appendChild(r);
}
function Yw(e) {
  let t = [];
  return Array.isArray(window[e]) ? t = window[e] : window[e] = t, t;
}
async function Xw(e, t, n, r, i, s) {
  const o = r[i];
  try {
    if (o)
      await t[o];
    else {
      const c = (await Qd(n)).find((u) => u.measurementId === i);
      c && await t[c.appId];
    }
  } catch (a) {
    Kt.error(a);
  }
  e("config", i, s);
}
async function Jw(e, t, n, r, i) {
  try {
    let s = [];
    if (i && i.send_to) {
      let o = i.send_to;
      Array.isArray(o) || (o = [o]);
      const a = await Qd(n);
      for (const c of o) {
        const u = a.find((h) => h.measurementId === c), l = u && t[u.appId];
        if (l)
          s.push(l);
        else {
          s = [];
          break;
        }
      }
    }
    s.length === 0 && (s = Object.values(t)), await Promise.all(s), e("event", r, i || {});
  } catch (s) {
    Kt.error(s);
  }
}
function Zw(e, t, n, r) {
  async function i(s, ...o) {
    try {
      if (s === "event") {
        const [a, c] = o;
        await Jw(e, t, n, a, c);
      } else if (s === "config") {
        const [a, c] = o;
        await Xw(e, t, n, r, a, c);
      } else if (s === "consent") {
        const [a] = o;
        e("consent", "update", a);
      } else if (s === "get") {
        const [a, c, u] = o;
        e("get", a, c, u);
      } else if (s === "set") {
        const [a] = o;
        e("set", a);
      } else
        e(s, ...o);
    } catch (a) {
      Kt.error(a);
    }
  }
  return i;
}
function t0(e, t, n, r, i) {
  let s = function(...o) {
    window[r].push(arguments);
  };
  return window[i] && typeof window[i] == "function" && (s = window[i]), window[i] = Zw(s, e, t, n), {
    gtagCore: s,
    wrappedGtag: window[i]
  };
}
function e0(e) {
  const t = window.document.getElementsByTagName("script");
  for (const n of Object.values(t))
    if (n.src && n.src.includes(Ba) && n.src.includes(e))
      return n;
  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const n0 = 30, r0 = 1e3;
class i0 {
  constructor(t = {}, n = r0) {
    this.throttleMetadata = t, this.intervalMillis = n;
  }
  getThrottleMetadata(t) {
    return this.throttleMetadata[t];
  }
  setThrottleMetadata(t, n) {
    this.throttleMetadata[t] = n;
  }
  deleteThrottleMetadata(t) {
    delete this.throttleMetadata[t];
  }
}
const Yd = new i0();
function s0(e) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": e
  });
}
async function o0(e) {
  var t;
  const { appId: n, apiKey: r } = e, i = {
    method: "GET",
    headers: s0(r)
  }, s = Gw.replace("{app-id}", n), o = await fetch(s, i);
  if (o.status !== 200 && o.status !== 304) {
    let a = "";
    try {
      const c = await o.json();
      !((t = c.error) === null || t === void 0) && t.message && (a = c.error.message);
    } catch {
    }
    throw Xt.create("config-fetch-failed", {
      httpStatus: o.status,
      responseMessage: a
    });
  }
  return o.json();
}
async function a0(e, t = Yd, n) {
  const { appId: r, apiKey: i, measurementId: s } = e.options;
  if (!r)
    throw Xt.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!i) {
    if (s)
      return {
        measurementId: s,
        appId: r
      };
    throw Xt.create(
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    );
  }
  const o = t.getThrottleMetadata(r) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  }, a = new l0();
  return setTimeout(async () => {
    a.abort();
  }, n !== void 0 ? n : zw), Xd({ appId: r, apiKey: i, measurementId: s }, o, a, t);
}
async function Xd(e, { throttleEndTimeMillis: t, backoffCount: n }, r, i = Yd) {
  var s;
  const { appId: o, measurementId: a } = e;
  try {
    await c0(r, t);
  } catch (c) {
    if (a)
      return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c == null ? void 0 : c.message}]`), { appId: o, measurementId: a };
    throw c;
  }
  try {
    const c = await o0(e);
    return i.deleteThrottleMetadata(o), c;
  } catch (c) {
    const u = c;
    if (!u0(u)) {
      if (i.deleteThrottleMetadata(o), a)
        return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u == null ? void 0 : u.message}]`), { appId: o, measurementId: a };
      throw c;
    }
    const l = Number((s = u == null ? void 0 : u.customData) === null || s === void 0 ? void 0 : s.httpStatus) === 503 ? uc(n, i.intervalMillis, n0) : uc(n, i.intervalMillis), h = {
      throttleEndTimeMillis: Date.now() + l,
      backoffCount: n + 1
    };
    return i.setThrottleMetadata(o, h), Kt.debug(`Calling attemptFetch again in ${l} millis`), Xd(e, h, r, i);
  }
}
function c0(e, t) {
  return new Promise((n, r) => {
    const i = Math.max(t - Date.now(), 0), s = setTimeout(n, i);
    e.addEventListener(() => {
      clearTimeout(s), r(Xt.create("fetch-throttle", {
        throttleEndTimeMillis: t
      }));
    });
  });
}
function u0(e) {
  if (!(e instanceof Me) || !e.customData)
    return !1;
  const t = Number(e.customData.httpStatus);
  return t === 429 || t === 500 || t === 503 || t === 504;
}
class l0 {
  constructor() {
    this.listeners = [];
  }
  addEventListener(t) {
    this.listeners.push(t);
  }
  abort() {
    this.listeners.forEach((t) => t());
  }
}
async function h0(e, t, n, r, i) {
  if (i && i.global) {
    e("event", n, r);
    return;
  } else {
    const s = await t, o = Object.assign(Object.assign({}, r), { send_to: s });
    e("event", n, o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function d0() {
  if (ko())
    try {
      await sl();
    } catch (e) {
      return Kt.warn(Xt.create("indexeddb-unavailable", {
        errorInfo: e == null ? void 0 : e.toString()
      }).message), !1;
    }
  else
    return Kt.warn(Xt.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message), !1;
  return !0;
}
async function f0(e, t, n, r, i, s, o) {
  var a;
  const c = a0(e);
  c.then((p) => {
    n[p.measurementId] = p.appId, e.options.measurementId && p.measurementId !== e.options.measurementId && Kt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
  }).catch((p) => Kt.error(p)), t.push(c);
  const u = d0().then((p) => {
    if (p)
      return r.getId();
  }), [l, h] = await Promise.all([
    c,
    u
  ]);
  e0(s) || Qw(s, l.measurementId), i("js", /* @__PURE__ */ new Date());
  const d = (a = o == null ? void 0 : o.config) !== null && a !== void 0 ? a : {};
  return d[qw] = "firebase", d.update = !0, h != null && (d[jw] = h), i("config", l.measurementId, d), l.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p0 {
  constructor(t) {
    this.app = t;
  }
  _delete() {
    return delete Yn[this.app.options.appId], Promise.resolve();
  }
}
let Yn = {}, gu = [];
const yu = {};
let xs = "dataLayer", m0 = "gtag", _u, Jd, vu = !1;
function g0() {
  const e = [];
  if (Im() && e.push("This is a browser extension environment."), Sm() || e.push("Cookies are not available."), e.length > 0) {
    const t = e.map((r, i) => `(${i + 1}) ${r}`).join(" "), n = Xt.create("invalid-analytics-context", {
      errorInfo: t
    });
    Kt.warn(n.message);
  }
}
function y0(e, t, n) {
  g0();
  const r = e.options.appId;
  if (!r)
    throw Xt.create(
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    );
  if (!e.options.apiKey)
    if (e.options.measurementId)
      Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    else
      throw Xt.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
  if (Yn[r] != null)
    throw Xt.create("already-exists", {
      id: r
    });
  if (!vu) {
    Yw(xs);
    const { wrappedGtag: s, gtagCore: o } = t0(Yn, gu, yu, xs, m0);
    Jd = s, _u = o, vu = !0;
  }
  return Yn[r] = f0(e, gu, yu, t, _u, xs, n), new p0(e);
}
function _0(e = ll()) {
  e = re(e);
  const t = gr(e, Ii);
  return t.isInitialized() ? t.getImmediate() : v0(e);
}
function v0(e, t = {}) {
  const n = gr(e, Ii);
  if (n.isInitialized()) {
    const i = n.getImmediate();
    if (oi(t, n.getOptions()))
      return i;
    throw Xt.create(
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    );
  }
  return n.initialize({ options: t });
}
function E0(e, t, n, r) {
  e = re(e), h0(Jd, Yn[e.app.options.appId], t, n, r).catch((i) => Kt.error(i));
}
const Eu = "@firebase/analytics", wu = "0.10.1";
function w0() {
  De(new we(
    Ii,
    (t, { options: n }) => {
      const r = t.getProvider("app").getImmediate(), i = t.getProvider("installations-internal").getImmediate();
      return y0(r, i, n);
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  )), De(new we(
    "analytics-internal",
    e,
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), le(Eu, wu), le(Eu, wu, "esm2017");
  function e(t) {
    try {
      const n = t.getProvider(Ii).getImmediate();
      return {
        logEvent: (r, i, s) => E0(n, r, i, s)
      };
    } catch (n) {
      throw Xt.create("interop-component-reg-failed", {
        reason: n
      });
    }
  }
}
w0();
const T0 = {
  apiKey: "AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",
  authDomain: "technique-map.firebaseapp.com",
  projectId: "technique-map",
  storageBucket: "technique-map.appspot.com",
  messagingSenderId: "357714563975",
  appId: "1:357714563975:web:1674edff97e77706077922",
  measurementId: "G-YC5QN1TVNC"
}, Zd = ul(T0);
_0(Zd);
const os = xE(Zd), tf = (e, t) => t.map((n) => e.find((r) => r.id === n)), ef = (e) => e.reduce(
  (t, n) => {
    var r;
    return {
      ...t,
      [n == null ? void 0 : n.area]: [
        ...(t[n == null ? void 0 : n.area] ?? []).filter(
          (i) => i.name !== (n == null ? void 0 : n.position)
        ),
        {
          name: n == null ? void 0 : n.position,
          moves: [
            ...((r = (t[n == null ? void 0 : n.area] ?? []).find(
              (i) => i.name === (n == null ? void 0 : n.position)
            )) == null ? void 0 : r.moves) ?? [],
            { name: n == null ? void 0 : n.name, id: n == null ? void 0 : n.id }
          ]
        }
      ]
    };
  },
  { neutral: [], top: [], bottom: [] }
), Tu = (e) => e.reduce(
  (t, n) => {
    const r = t.findIndex((i) => i.name === n.area);
    return t[r].positions.add(n.position), t;
  },
  [
    { name: "neutral", positions: /* @__PURE__ */ new Set() },
    { name: "top", positions: /* @__PURE__ */ new Set() },
    { name: "bottom", positions: /* @__PURE__ */ new Set() }
  ]
), I0 = (e, t) => window.navigator.clipboard.writeText(
  JSON.stringify(
    ef(tf(e, t))
  )
), A0 = async (e, t) => {
  await tw(Ca(os, "practice_plan"), e).then((n) => {
    t(`/practice_plans/${n.id}`);
  });
}, S0 = async (e, t, n) => {
  const r = vd(os, "practice_plan", e);
  await ZE(r, t), n(`/practice_plans/${e}`);
}, R0 = ot(({ className: e }) => /* @__PURE__ */ O(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    className: e,
    children: /* @__PURE__ */ O(
      "path",
      {
        fillRule: "evenodd",
        d: "M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",
        fill: "currentColor"
      }
    )
  }
))``, C0 = ot.div`
  height: 100%;
  overflow: scroll;
`, b0 = ot.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`, Iu = ot(
  ({
    className: e,
    moves: t,
    practicePlan: n,
    removeFromPracticePlan: r,
    clearPracticePlan: i,
    currentPracticePlanId: s
  }) => {
    const o = Qu(), [a, c] = un(
      window.innerWidth > 850
    ), u = () => {
      window.innerWidth > 850 && c(!0);
    };
    return rf(() => (window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    }), []), /* @__PURE__ */ zt(
      "aside",
      {
        className: e,
        style: {
          /* @ts-ignore:next-line */
          "--transform": a ? "translateX(0%)" : "translateX(-100%)"
        },
        children: [
          /* @__PURE__ */ O(
            "button",
            {
              "aria-label": "show practice plan",
              onClick: () => {
                c((h) => !h);
              },
              children: /* @__PURE__ */ O(R0, {})
            }
          ),
          /* @__PURE__ */ zt(C0, { children: [
            /* @__PURE__ */ O("h1", { children: "Practice Plan" }),
            Object.entries(
              ef(tf(t, n.moves))
            ).map(([h, d]) => /* @__PURE__ */ zt(sf, { children: [
              /* @__PURE__ */ O("h2", { children: h }),
              d.map((p) => /* @__PURE__ */ O(
                im,
                {
                  title: p.name,
                  children: p.moves.map(({ name: y, id: E }) => /* @__PURE__ */ zt(V0, { children: [
                    y,
                    /* @__PURE__ */ O(D0, { onClick: () => r(E), children: /* @__PURE__ */ O(Bu, {}) })
                  ] }, `${p.name}=${y}`))
                },
                p.name
              ))
            ] }, h)),
            /* @__PURE__ */ zt(b0, { children: [
              !s && /* @__PURE__ */ O(
                hs,
                {
                  onClick: i,
                  text: "Clear Practice Plan",
                  Icon: P0,
                  $level: "caution"
                }
              ),
              /* @__PURE__ */ O(
                hs,
                {
                  onClick: () => I0(t, n.moves),
                  text: "Copy Practice Plan",
                  Icon: sm
                }
              ),
              /* @__PURE__ */ O(
                hs,
                {
                  onClick: () => s ? S0(
                    s,
                    n,
                    o
                  ) : A0(n, o),
                  text: s ? "Update Practice Plan" : "Save Practice Plan",
                  Icon: om
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
)`
  background-color: var(--primary);
  color: white;
  padding: clamp(8px, 3vw, 32px);
  box-shadow: 16px 0px 16px -16px hsl(from var(--primary) h s calc(l * 0.1));
  transition: transform 300ms;
  transform: var(--transform);
  display: flex;
  flex-direction: column;

  & > button[aria-label='show practice plan'] {
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 32px;
    position: fixed;
    right: 0;
    top: 154px;
    background-color: var(--secondary);
    color: white;
    border: none;
    box-shadow: 2px 0px 16px hsl(from var(--primary) h s calc(l * 0.6));
    cursor: pointer;
    transform: translateX(90%);
    @media screen and (width >= 850px) {
      display: none;
    }
  }
`, P0 = ot(am)`
  stroke: white;
`, V0 = ot.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`, D0 = ot.button`
  border-radius: 5000px 50px 5000px 5000px;
  background: linear-gradient(var(--secondary), var(--tertiary));
  padding: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(2px 2px 2px hsl(from var(--primary) h s 10%));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`, x0 = (e) => {
  const t = {
    date: /* @__PURE__ */ new Date(),
    // TODO: update this so a user can select a date
    moves: []
  }, [n, r] = un(
    t
  );
  return Ru(() => {
    if (e) {
      const i = GE(
        Ca(os, "practice_plan"),
        WE(NE(), "==", e)
      );
      Pd(i).then((o) => {
        const a = o.docs.map((u) => ({
          ...u.data(),
          id: u.id
        })), [c] = a;
        r(c);
      });
    } else
      r(t);
  }, [e]), [n, r];
}, $0 = ot(({ className: e }) => {
  const [t, n] = un(""), [r, i] = un("neutral"), [s, o] = un([]), a = Su(), [c, u] = un("");
  let { id: l } = bp();
  const [h, d] = x0(
    l
  ), p = () => Pd(Ca(os, "moves")).then((T) => {
    const I = T.docs.map((S) => ({
      ...S.data(),
      id: S.id
    }));
    o(I);
  });
  Ru(() => {
    p();
  }, []);
  const y = (T) => {
    var I;
    n(T), (I = a.current) == null || I.showModal();
  };
  return /* @__PURE__ */ zt("main", { className: e, children: [
    /* @__PURE__ */ O(
      Iu,
      {
        moves: s,
        practicePlan: h,
        clearPracticePlan: () => {
          d({
            date: /* @__PURE__ */ new Date(),
            moves: []
          });
        },
        removeFromPracticePlan: (T) => {
          d((I) => ({
            ...I,
            moves: [...I.moves].filter((S) => S !== T)
          }));
        },
        currentPracticePlanId: l
      }
    ),
    /* @__PURE__ */ O(
      um,
      {
        setPanelTitle: u,
        addToPracticePlan: (T) => {
          d((I) => ({
            ...I,
            moves: [...I.moves, T]
          }));
        },
        content: [
          ...Tu(s).find(
            (T) => T.name === r
          ).positions
        ],
        showPanel: y,
        area: r,
        moves: s
      }
    ),
    /* @__PURE__ */ O(
      fp,
      {
        passedRef: a,
        title: c,
        children: /* @__PURE__ */ O(up, { children: t })
      }
    ),
    /* @__PURE__ */ O(
      pp,
      {
        tabs: Tu(s).map((T) => T.name),
        currentTab: r,
        setCurrentTab: i
      }
    )
  ] });
})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${Iu} {
    grid-area: plan;
    position: sticky;
    top: 0;
    height: 100vh;
    box-sizing: border-box;

    @media screen and (width <= 850px) {
      position: fixed;
      left: 0;
      width: 75vw;
    }
  }
`;
export {
  um as ContentMap,
  $0 as Map,
  ef as aggregateMovesByPosition,
  tf as findMoves
};
