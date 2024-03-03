"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const x=require("react/jsx-runtime"),lt=require("react");require("react-dom");function Yd(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const M=Yd(lt);function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ds={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua;function Jd(){if(Ua)return J;Ua=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function E(f){if(typeof f=="object"&&f!==null){var V=f.$$typeof;switch(V){case e:switch(f=f.type,f){case n:case i:case r:case u:case l:return f;default:switch(f=f&&f.$$typeof,f){case a:case o:case c:case d:case h:case s:return f;default:return V}}case t:return V}}}return J.ContextConsumer=o,J.ContextProvider=s,J.Element=e,J.ForwardRef=c,J.Fragment=n,J.Lazy=d,J.Memo=h,J.Portal=t,J.Profiler=i,J.StrictMode=r,J.Suspense=u,J.SuspenseList=l,J.isAsyncMode=function(){return!1},J.isConcurrentMode=function(){return!1},J.isContextConsumer=function(f){return E(f)===o},J.isContextProvider=function(f){return E(f)===s},J.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===e},J.isForwardRef=function(f){return E(f)===c},J.isFragment=function(f){return E(f)===n},J.isLazy=function(f){return E(f)===d},J.isMemo=function(f){return E(f)===h},J.isPortal=function(f){return E(f)===t},J.isProfiler=function(f){return E(f)===i},J.isStrictMode=function(f){return E(f)===r},J.isSuspense=function(f){return E(f)===u},J.isSuspenseList=function(f){return E(f)===l},J.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===i||f===r||f===u||f===l||f===p||typeof f=="object"&&f!==null&&(f.$$typeof===d||f.$$typeof===h||f.$$typeof===s||f.$$typeof===o||f.$$typeof===c||f.$$typeof===y||f.getModuleId!==void 0)},J.typeOf=E,J}var Z={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba;function Zd(){return Ba||(Ba=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),o=Symbol.for("react.context"),a=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.for("react.offscreen"),y=!1,E=!1,f=!1,V=!1,T=!1,I;I=Symbol.for("react.module.reference");function S(b){return!!(typeof b=="string"||typeof b=="function"||b===n||b===i||T||b===r||b===u||b===l||V||b===p||y||E||f||typeof b=="object"&&b!==null&&(b.$$typeof===d||b.$$typeof===h||b.$$typeof===s||b.$$typeof===o||b.$$typeof===c||b.$$typeof===I||b.getModuleId!==void 0))}function g(b){if(typeof b=="object"&&b!==null){var q=b.$$typeof;switch(q){case e:var pt=b.type;switch(pt){case n:case i:case r:case u:case l:return pt;default:var Q=pt&&pt.$$typeof;switch(Q){case a:case o:case c:case d:case h:case s:return Q;default:return q}}case t:return q}}}var nt=o,yt=s,ft=e,It=c,wt=n,Zt=d,Pt=h,Lt=t,Wt=i,At=r,ge=u,zt=l,St=!1,oe=!1;function ee(b){return St||(St=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function ye(b){return oe||(oe=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function k(b){return g(b)===o}function P(b){return g(b)===s}function N(b){return typeof b=="object"&&b!==null&&b.$$typeof===e}function F(b){return g(b)===c}function m(b){return g(b)===n}function W(b){return g(b)===d}function A(b){return g(b)===h}function it(b){return g(b)===t}function H(b){return g(b)===i}function G(b){return g(b)===r}function w(b){return g(b)===u}function ut(b){return g(b)===l}Z.ContextConsumer=nt,Z.ContextProvider=yt,Z.Element=ft,Z.ForwardRef=It,Z.Fragment=wt,Z.Lazy=Zt,Z.Memo=Pt,Z.Portal=Lt,Z.Profiler=Wt,Z.StrictMode=At,Z.Suspense=ge,Z.SuspenseList=zt,Z.isAsyncMode=ee,Z.isConcurrentMode=ye,Z.isContextConsumer=k,Z.isContextProvider=P,Z.isElement=N,Z.isForwardRef=F,Z.isFragment=m,Z.isLazy=W,Z.isMemo=A,Z.isPortal=it,Z.isProfiler=H,Z.isStrictMode=G,Z.isSuspense=w,Z.isSuspenseList=ut,Z.isValidElementType=S,Z.typeOf=g}()),Z}process.env.NODE_ENV==="production"?Ds.exports=Jd():Ds.exports=Zd();var Eo=Ds.exports;function tf(e){function t(k,P,N,F,m){for(var W=0,A=0,it=0,H=0,G,w,ut=0,b=0,q,pt=q=G=0,Q=0,xt=0,Nn=0,Dt=0,Nr=N.length,kn=Nr-1,ne,j="",mt="",ss="",os="",Se;Q<Nr;){if(w=N.charCodeAt(Q),Q===kn&&A+H+it+W!==0&&(A!==0&&(w=A===47?10:47),H=it=W=0,Nr++,kn++),A+H+it+W===0){if(Q===kn&&(0<xt&&(j=j.replace(d,"")),0<j.trim().length)){switch(w){case 32:case 9:case 59:case 13:case 10:break;default:j+=N.charAt(Q)}w=59}switch(w){case 123:for(j=j.trim(),G=j.charCodeAt(0),q=1,Dt=++Q;Q<Nr;){switch(w=N.charCodeAt(Q)){case 123:q++;break;case 125:q--;break;case 47:switch(w=N.charCodeAt(Q+1)){case 42:case 47:t:{for(pt=Q+1;pt<kn;++pt)switch(N.charCodeAt(pt)){case 47:if(w===42&&N.charCodeAt(pt-1)===42&&Q+2!==pt){Q=pt+1;break t}break;case 10:if(w===47){Q=pt+1;break t}}Q=pt}}break;case 91:w++;case 40:w++;case 34:case 39:for(;Q++<kn&&N.charCodeAt(Q)!==w;);}if(q===0)break;Q++}switch(q=N.substring(Dt,Q),G===0&&(G=(j=j.replace(h,"").trim()).charCodeAt(0)),G){case 64:switch(0<xt&&(j=j.replace(d,"")),w=j.charCodeAt(1),w){case 100:case 109:case 115:case 45:xt=P;break;default:xt=ge}if(q=t(P,xt,q,w,m+1),Dt=q.length,0<St&&(xt=n(ge,j,Nn),Se=a(3,q,xt,P,Lt,Pt,Dt,w,m,F),j=xt.join(""),Se!==void 0&&(Dt=(q=Se.trim()).length)===0&&(w=0,q="")),0<Dt)switch(w){case 115:j=j.replace(nt,o);case 100:case 109:case 45:q=j+"{"+q+"}";break;case 107:j=j.replace(T,"$1 $2"),q=j+"{"+q+"}",q=At===1||At===2&&s("@"+q,3)?"@-webkit-"+q+"@"+q:"@"+q;break;default:q=j+q,F===112&&(q=(mt+=q,""))}else q="";break;default:q=t(P,n(P,j,Nn),q,F,m+1)}ss+=q,q=Nn=xt=pt=G=0,j="",w=N.charCodeAt(++Q);break;case 125:case 59:if(j=(0<xt?j.replace(d,""):j).trim(),1<(Dt=j.length))switch(pt===0&&(G=j.charCodeAt(0),G===45||96<G&&123>G)&&(Dt=(j=j.replace(" ",":")).length),0<St&&(Se=a(1,j,P,k,Lt,Pt,mt.length,F,m,F))!==void 0&&(Dt=(j=Se.trim()).length)===0&&(j="\0\0"),G=j.charCodeAt(0),w=j.charCodeAt(1),G){case 0:break;case 64:if(w===105||w===99){os+=j+N.charAt(Q);break}default:j.charCodeAt(Dt-1)!==58&&(mt+=i(j,G,w,j.charCodeAt(2)))}Nn=xt=pt=G=0,j="",w=N.charCodeAt(++Q)}}switch(w){case 13:case 10:A===47?A=0:1+G===0&&F!==107&&0<j.length&&(xt=1,j+="\0"),0<St*ee&&a(0,j,P,k,Lt,Pt,mt.length,F,m,F),Pt=1,Lt++;break;case 59:case 125:if(A+H+it+W===0){Pt++;break}default:switch(Pt++,ne=N.charAt(Q),w){case 9:case 32:if(H+W+A===0)switch(ut){case 44:case 58:case 9:case 32:ne="";break;default:w!==32&&(ne=" ")}break;case 0:ne="\\0";break;case 12:ne="\\f";break;case 11:ne="\\v";break;case 38:H+A+W===0&&(xt=Nn=1,ne="\f"+ne);break;case 108:if(H+A+W+Wt===0&&0<pt)switch(Q-pt){case 2:ut===112&&N.charCodeAt(Q-3)===58&&(Wt=ut);case 8:b===111&&(Wt=b)}break;case 58:H+A+W===0&&(pt=Q);break;case 44:A+it+H+W===0&&(xt=1,ne+="\r");break;case 34:case 39:A===0&&(H=H===w?0:H===0?w:H);break;case 91:H+A+it===0&&W++;break;case 93:H+A+it===0&&W--;break;case 41:H+A+W===0&&it--;break;case 40:if(H+A+W===0){if(G===0)switch(2*ut+3*b){case 533:break;default:G=1}it++}break;case 64:A+it+H+W+pt+q===0&&(q=1);break;case 42:case 47:if(!(0<H+W+it))switch(A){case 0:switch(2*w+3*N.charCodeAt(Q+1)){case 235:A=47;break;case 220:Dt=Q,A=42}break;case 42:w===47&&ut===42&&Dt+2!==Q&&(N.charCodeAt(Dt+2)===33&&(mt+=N.substring(Dt,Q+1)),ne="",A=0)}}A===0&&(j+=ne)}b=ut,ut=w,Q++}if(Dt=mt.length,0<Dt){if(xt=P,0<St&&(Se=a(2,mt,xt,k,Lt,Pt,Dt,F,m,F),Se!==void 0&&(mt=Se).length===0))return os+mt+ss;if(mt=xt.join(",")+"{"+mt+"}",At*Wt!==0){switch(At!==2||s(mt,2)||(Wt=0),Wt){case 111:mt=mt.replace(S,":-moz-$1")+mt;break;case 112:mt=mt.replace(I,"::-webkit-input-$1")+mt.replace(I,"::-moz-$1")+mt.replace(I,":-ms-input-$1")+mt}Wt=0}}return os+mt+ss}function n(k,P,N){var F=P.trim().split(f);P=F;var m=F.length,W=k.length;switch(W){case 0:case 1:var A=0;for(k=W===0?"":k[0]+" ";A<m;++A)P[A]=r(k,P[A],N).trim();break;default:var it=A=0;for(P=[];A<m;++A)for(var H=0;H<W;++H)P[it++]=r(k[H]+" ",F[A],N).trim()}return P}function r(k,P,N){var F=P.charCodeAt(0);switch(33>F&&(F=(P=P.trim()).charCodeAt(0)),F){case 38:return P.replace(V,"$1"+k.trim());case 58:return k.trim()+P.replace(V,"$1"+k.trim());default:if(0<1*N&&0<P.indexOf("\f"))return P.replace(V,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+P}function i(k,P,N,F){var m=k+";",W=2*P+3*N+4*F;if(W===944){k=m.indexOf(":",9)+1;var A=m.substring(k,m.length-1).trim();return A=m.substring(0,k).trim()+A+";",At===1||At===2&&s(A,1)?"-webkit-"+A+A:A}if(At===0||At===2&&!s(m,1))return m;switch(W){case 1015:return m.charCodeAt(10)===97?"-webkit-"+m+m:m;case 951:return m.charCodeAt(3)===116?"-webkit-"+m+m:m;case 963:return m.charCodeAt(5)===110?"-webkit-"+m+m:m;case 1009:if(m.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+m+m;case 978:return"-webkit-"+m+"-moz-"+m+m;case 1019:case 983:return"-webkit-"+m+"-moz-"+m+"-ms-"+m+m;case 883:if(m.charCodeAt(8)===45)return"-webkit-"+m+m;if(0<m.indexOf("image-set(",11))return m.replace(Zt,"$1-webkit-$2")+m;break;case 932:if(m.charCodeAt(4)===45)switch(m.charCodeAt(5)){case 103:return"-webkit-box-"+m.replace("-grow","")+"-webkit-"+m+"-ms-"+m.replace("grow","positive")+m;case 115:return"-webkit-"+m+"-ms-"+m.replace("shrink","negative")+m;case 98:return"-webkit-"+m+"-ms-"+m.replace("basis","preferred-size")+m}return"-webkit-"+m+"-ms-"+m+m;case 964:return"-webkit-"+m+"-ms-flex-"+m+m;case 1023:if(m.charCodeAt(8)!==99)break;return A=m.substring(m.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+m+"-ms-flex-pack"+A+m;case 1005:return y.test(m)?m.replace(p,":-webkit-")+m.replace(p,":-moz-")+m:m;case 1e3:switch(A=m.substring(13).trim(),P=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(P)){case 226:A=m.replace(g,"tb");break;case 232:A=m.replace(g,"tb-rl");break;case 220:A=m.replace(g,"lr");break;default:return m}return"-webkit-"+m+"-ms-"+A+m;case 1017:if(m.indexOf("sticky",9)===-1)break;case 975:switch(P=(m=k).length-10,A=(m.charCodeAt(P)===33?m.substring(0,P):m).substring(k.indexOf(":",7)+1).trim(),W=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:m=m.replace(A,"-webkit-"+A)+";"+m;break;case 207:case 102:m=m.replace(A,"-webkit-"+(102<W?"inline-":"")+"box")+";"+m.replace(A,"-webkit-"+A)+";"+m.replace(A,"-ms-"+A+"box")+";"+m}return m+";";case 938:if(m.charCodeAt(5)===45)switch(m.charCodeAt(6)){case 105:return A=m.replace("-items",""),"-webkit-"+m+"-webkit-box-"+A+"-ms-flex-"+A+m;case 115:return"-webkit-"+m+"-ms-flex-item-"+m.replace(ft,"")+m;default:return"-webkit-"+m+"-ms-flex-line-pack"+m.replace("align-content","").replace(ft,"")+m}break;case 973:case 989:if(m.charCodeAt(3)!==45||m.charCodeAt(4)===122)break;case 931:case 953:if(wt.test(k)===!0)return(A=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?i(k.replace("stretch","fill-available"),P,N,F).replace(":fill-available",":stretch"):m.replace(A,"-webkit-"+A)+m.replace(A,"-moz-"+A.replace("fill-",""))+m;break;case 962:if(m="-webkit-"+m+(m.charCodeAt(5)===102?"-ms-"+m:"")+m,N+F===211&&m.charCodeAt(13)===105&&0<m.indexOf("transform",10))return m.substring(0,m.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+m}return m}function s(k,P){var N=k.indexOf(P===1?":":"{"),F=k.substring(0,P!==3?N:10);return N=k.substring(N+1,k.length-1),oe(P!==2?F:F.replace(It,"$1"),N,P)}function o(k,P){var N=i(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return N!==P+";"?N.replace(yt," or ($1)").substring(4):"("+P+")"}function a(k,P,N,F,m,W,A,it,H,G){for(var w=0,ut=P,b;w<St;++w)switch(b=zt[w].call(l,k,ut,N,F,m,W,A,it,H,G)){case void 0:case!1:case!0:case null:break;default:ut=b}if(ut!==P)return ut}function c(k){switch(k){case void 0:case null:St=zt.length=0;break;default:if(typeof k=="function")zt[St++]=k;else if(typeof k=="object")for(var P=0,N=k.length;P<N;++P)c(k[P]);else ee=!!k|0}return c}function u(k){return k=k.prefix,k!==void 0&&(oe=null,k?typeof k!="function"?At=1:(At=2,oe=k):At=0),u}function l(k,P){var N=k;if(33>N.charCodeAt(0)&&(N=N.trim()),ye=N,N=[ye],0<St){var F=a(-1,P,N,N,Lt,Pt,0,0,0,0);F!==void 0&&typeof F=="string"&&(P=F)}var m=t(ge,N,P,0,0);return 0<St&&(F=a(-2,m,N,N,Lt,Pt,m.length,0,0,0),F!==void 0&&(m=F)),ye="",Wt=0,Pt=Lt=1,m}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,y=/zoo|gra/,E=/([,: ])(transform)/g,f=/,\r+?/g,V=/([\t\r\n ])*\f?&/g,T=/@(k\w+)\s*(\S*)\s*/,I=/::(place)/g,S=/:(read-only)/g,g=/[svh]\w+-[tblr]{2}/,nt=/\(\s*(.*)\s*\)/g,yt=/([\s\S]*?);/g,ft=/-self|flex-/g,It=/[^]*?(:[rp][el]a[\w-]+)[^]*/,wt=/stretch|:\s*\w+\-(?:conte|avail)/,Zt=/([^-])(image-set\()/,Pt=1,Lt=1,Wt=0,At=1,ge=[],zt=[],St=0,oe=null,ee=0,ye="";return l.use=c,l.set=u,e!==void 0&&u(e),l}var ef={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function nf(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var rf=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qa=nf(function(e){return rf.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Vs={exports:{}},tt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za;function sf(){if(za)return tt;za=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,V=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function I(g){if(typeof g=="object"&&g!==null){var nt=g.$$typeof;switch(nt){case t:switch(g=g.type,g){case c:case u:case r:case s:case i:case h:return g;default:switch(g=g&&g.$$typeof,g){case a:case l:case y:case p:case o:return g;default:return nt}}case n:return nt}}}function S(g){return I(g)===u}return tt.AsyncMode=c,tt.ConcurrentMode=u,tt.ContextConsumer=a,tt.ContextProvider=o,tt.Element=t,tt.ForwardRef=l,tt.Fragment=r,tt.Lazy=y,tt.Memo=p,tt.Portal=n,tt.Profiler=s,tt.StrictMode=i,tt.Suspense=h,tt.isAsyncMode=function(g){return S(g)||I(g)===c},tt.isConcurrentMode=S,tt.isContextConsumer=function(g){return I(g)===a},tt.isContextProvider=function(g){return I(g)===o},tt.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===t},tt.isForwardRef=function(g){return I(g)===l},tt.isFragment=function(g){return I(g)===r},tt.isLazy=function(g){return I(g)===y},tt.isMemo=function(g){return I(g)===p},tt.isPortal=function(g){return I(g)===n},tt.isProfiler=function(g){return I(g)===s},tt.isStrictMode=function(g){return I(g)===i},tt.isSuspense=function(g){return I(g)===h},tt.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===r||g===u||g===s||g===i||g===h||g===d||typeof g=="object"&&g!==null&&(g.$$typeof===y||g.$$typeof===p||g.$$typeof===o||g.$$typeof===a||g.$$typeof===l||g.$$typeof===f||g.$$typeof===V||g.$$typeof===T||g.$$typeof===E)},tt.typeOf=I,tt}var et={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga;function of(){return Ga||(Ga=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,E=e?Symbol.for("react.block"):60121,f=e?Symbol.for("react.fundamental"):60117,V=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function I(w){return typeof w=="string"||typeof w=="function"||w===r||w===u||w===s||w===i||w===h||w===d||typeof w=="object"&&w!==null&&(w.$$typeof===y||w.$$typeof===p||w.$$typeof===o||w.$$typeof===a||w.$$typeof===l||w.$$typeof===f||w.$$typeof===V||w.$$typeof===T||w.$$typeof===E)}function S(w){if(typeof w=="object"&&w!==null){var ut=w.$$typeof;switch(ut){case t:var b=w.type;switch(b){case c:case u:case r:case s:case i:case h:return b;default:var q=b&&b.$$typeof;switch(q){case a:case l:case y:case p:case o:return q;default:return ut}}case n:return ut}}}var g=c,nt=u,yt=a,ft=o,It=t,wt=l,Zt=r,Pt=y,Lt=p,Wt=n,At=s,ge=i,zt=h,St=!1;function oe(w){return St||(St=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ee(w)||S(w)===c}function ee(w){return S(w)===u}function ye(w){return S(w)===a}function k(w){return S(w)===o}function P(w){return typeof w=="object"&&w!==null&&w.$$typeof===t}function N(w){return S(w)===l}function F(w){return S(w)===r}function m(w){return S(w)===y}function W(w){return S(w)===p}function A(w){return S(w)===n}function it(w){return S(w)===s}function H(w){return S(w)===i}function G(w){return S(w)===h}et.AsyncMode=g,et.ConcurrentMode=nt,et.ContextConsumer=yt,et.ContextProvider=ft,et.Element=It,et.ForwardRef=wt,et.Fragment=Zt,et.Lazy=Pt,et.Memo=Lt,et.Portal=Wt,et.Profiler=At,et.StrictMode=ge,et.Suspense=zt,et.isAsyncMode=oe,et.isConcurrentMode=ee,et.isContextConsumer=ye,et.isContextProvider=k,et.isElement=P,et.isForwardRef=N,et.isFragment=F,et.isLazy=m,et.isMemo=W,et.isPortal=A,et.isProfiler=it,et.isStrictMode=H,et.isSuspense=G,et.isValidElementType=I,et.typeOf=S}()),et}process.env.NODE_ENV==="production"?Vs.exports=sf():Vs.exports=of();var af=Vs.exports,wo=af,cf={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uf={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lf={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},To={};To[wo.ForwardRef]=lf;To[wo.Memo]=Tu;function Wa(e){return wo.isMemo(e)?Tu:To[e.$$typeof]||cf}var hf=Object.defineProperty,df=Object.getOwnPropertyNames,Ha=Object.getOwnPropertySymbols,ff=Object.getOwnPropertyDescriptor,pf=Object.getPrototypeOf,Ka=Object.prototype;function Iu(e,t,n){if(typeof t!="string"){if(Ka){var r=pf(t);r&&r!==Ka&&Iu(e,r,n)}var i=df(t);Ha&&(i=i.concat(Ha(t)));for(var s=Wa(e),o=Wa(t),a=0;a<i.length;++a){var c=i[a];if(!uf[c]&&!(n&&n[c])&&!(o&&o[c])&&!(s&&s[c])){var u=ff(t,c);try{hf(e,c,u)}catch{}}}}return e}var mf=Iu;const gf=Xd(mf);function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Qa=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ns=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Eo.typeOf(e)},ti=Object.freeze([]),Ce=Object.freeze({});function Yn(e){return typeof e=="function"}function ks(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Io(e){return e&&typeof e.styledComponentId=="string"}var fn=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Ao=typeof window<"u"&&"HTMLElement"in window,yf=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),_f=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`}:{};function vf(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach(function(i){e=e.replace(/%[a-z]/,i)}),e}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(vf.apply(void 0,[_f[e]].concat(n)).trim())}var Ef=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Rn(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(n+1),u=0,l=r.length;u<l;u++)this.tag.insertRule(c,r[u])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Hr=new Map,ei=new Map,Bn=1,kr=function(e){if(Hr.has(e))return Hr.get(e);for(;ei.has(Bn);)Bn++;var t=Bn++;return process.env.NODE_ENV!=="production"&&((0|t)<0||t>1<<30)&&Rn(16,""+t),Hr.set(e,t),ei.set(t,e),t},wf=function(e){return ei.get(e)},Tf=function(e,t){t>=Bn&&(Bn=t+1),Hr.set(e,t),ei.set(t,e)},If="style["+fn+'][data-styled-version="5.3.6"]',Af=new RegExp("^"+fn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Sf=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Rf=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(Af);if(a){var c=0|parseInt(a[1],10),u=a[2];c!==0&&(Tf(u,c),Sf(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Cf=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Au=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var c=a.childNodes,u=c.length;u>=0;u--){var l=c[u];if(l&&l.nodeType===1&&l.hasAttribute(fn))return l}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(fn,"active"),r.setAttribute("data-styled-version","5.3.6");var o=Cf();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},bf=function(){function e(n){var r=this.element=Au(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var c=s[o];if(c.ownerNode===i)return c}Rn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Pf=function(){function e(n){var r=this.element=Au(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),xf=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ya=Ao,Df={isServer:!Ao,useCSSOMInjection:!yf},Su=function(){function e(n,r,i){n===void 0&&(n=Ce),r===void 0&&(r={}),this.options=_e({},Df,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ao&&Ya&&(Ya=!1,function(s){for(var o=document.querySelectorAll(If),a=0,c=o.length;a<c;a++){var u=o[a];u&&u.getAttribute(fn)!=="active"&&(Rf(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return kr(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(_e({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new xf(o):s?new bf(o):new Pf(o),new Ef(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(kr(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(kr(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(kr(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=wf(o);if(a!==void 0){var c=n.names.get(a),u=r.getGroup(o);if(c&&u&&c.size){var l=fn+".g"+o+'[id="'+a+'"]',h="";c!==void 0&&c.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+l+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},e}(),Vf=/(a)(d)/gi,Xa=function(e){return String.fromCharCode(e+(e>25?39:97))};function Os(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xa(t%52)+n;return(Xa(t%52)+n).replace(Vf,"$1-$2")}var Ue=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ru=function(e){return Ue(5381,e)};function Nf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yn(n)&&!Io(n))return!1}return!0}var kf=Ru("5.3.6"),Of=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(r===void 0||r.isStatic)&&Nf(t),this.componentId=n,this.baseHash=Ue(kf,n),this.baseStyle=r,Su.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=pn(this.rules,t,n,r).join(""),a=Os(Ue(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var c=r(o,"."+a,void 0,i);n.insertRules(i,a,c)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,l=Ue(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p,process.env.NODE_ENV!=="production"&&(l=Ue(l,p+d));else if(p){var y=pn(p,t,n,r),E=Array.isArray(y)?y.join(""):y;l=Ue(l,E+d),h+=E}}if(h){var f=Os(l>>>0);if(!n.hasNameForId(i,f)){var V=r(h,"."+f,void 0,i);n.insertRules(i,f,V)}s.push(f)}}return s.join(" ")},e}(),Mf=/^\s*\/\/.*$/gm,Lf=[":","[",".","#"];function Ff(e){var t,n,r,i,s=e===void 0?Ce:e,o=s.options,a=o===void 0?Ce:o,c=s.plugins,u=c===void 0?ti:c,l=new tf(a),h=[],d=function(E){function f(V){if(V)try{E(V+"}")}catch{}}return function(V,T,I,S,g,nt,yt,ft,It,wt){switch(V){case 1:if(It===0&&T.charCodeAt(0)===64)return E(T+";"),"";break;case 2:if(ft===0)return T+"/*|*/";break;case 3:switch(ft){case 102:case 112:return E(I[0]+T),"";default:return T+(wt===0?"/*|*/":"")}case-2:T.split("/*|*/}").forEach(f)}}}(function(E){h.push(E)}),p=function(E,f,V){return f===0&&Lf.indexOf(V[n.length])!==-1||V.match(i)?E:"."+t};function y(E,f,V,T){T===void 0&&(T="&");var I=E.replace(Mf,""),S=f&&V?V+" "+f+" { "+I+" }":I;return t=T,n=f,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),l(V||!f?"":f,S)}return l.use([].concat(u,[function(E,f,V){E===2&&V.length&&V[0].lastIndexOf(n)>0&&(V[0]=V[0].replace(r,p))},d,function(E){if(E===-2){var f=h;return h=[],f}}])),y.hash=u.length?u.reduce(function(E,f){return f.name||Rn(15),Ue(E,f.name)},5381).toString():"",y}var Cu=lt.createContext();Cu.Consumer;var bu=lt.createContext(),$f=(bu.Consumer,new Su),Ms=Ff();function jf(){return lt.useContext(Cu)||$f}function Uf(){return lt.useContext(bu)||Ms}var Pu=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ms);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Rn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ms),this.name+t.hash},e}(),Bf=/([A-Z])/,qf=/([A-Z])/g,zf=/^ms-/,Gf=function(e){return"-"+e.toLowerCase()};function Ja(e){return Bf.test(e)?e.replace(qf,Gf).replace(zf,"-ms-"):e}var Za=function(e){return e==null||e===!1||e===""};function pn(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=pn(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Za(e))return"";if(Io(e))return"."+e.styledComponentId;if(Yn(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var c=e(t);return process.env.NODE_ENV!=="production"&&Eo.isElement(c)&&console.warn(ks(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),pn(c,t,n,r)}var u;return e instanceof Pu?n?(e.inject(n,r),e.getName(r)):e:Ns(e)?function l(h,d){var p,y,E=[];for(var f in h)h.hasOwnProperty(f)&&!Za(h[f])&&(Array.isArray(h[f])&&h[f].isCss||Yn(h[f])?E.push(Ja(f)+":",h[f],";"):Ns(h[f])?E.push.apply(E,l(h[f],f)):E.push(Ja(f)+": "+(p=f,(y=h[f])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||p in ef?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(E,["}"]):E}(e):e.toString()}var tc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xu(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Yn(e)||Ns(e)?tc(pn(Qa(ti,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:tc(pn(Qa(e,n)))}var ec=/invalid hook call/i,Or=new Set,Wf=function(e,t){if(process.env.NODE_ENV!=="production"){var n="The component "+e+(t?' with the id of "'+t+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,r=console.error;try{var i=!0;console.error=function(s){if(ec.test(s))i=!1,Or.delete(n);else{for(var o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];r.apply(void 0,[s].concat(a))}},lt.useRef(),i&&!Or.has(n)&&(console.warn(n),Or.add(n))}catch(s){ec.test(s.message)&&Or.delete(n)}finally{console.error=r}}},Hf=function(e,t,n){return n===void 0&&(n=Ce),e.theme!==n.theme&&e.theme||t||n.theme},Kf=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qf=/(^-|-$)/g;function as(e){return e.replace(Kf,"-").replace(Qf,"")}var Du=function(e){return Os(Ru(e)>>>0)};function Mr(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var Ls=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Yf=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Xf(e,t,n){var r=e[n];Ls(t)&&Ls(r)?Vu(r,t):e[n]=t}function Vu(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Ls(o))for(var a in o)Yf(a)&&Xf(e,o[a],a)}return e}var Nu=lt.createContext();Nu.Consumer;var cs={};function ku(e,t,n){var r=Io(e),i=!Mr(e),s=t.attrs,o=s===void 0?ti:s,a=t.componentId,c=a===void 0?function(T,I){var S=typeof T!="string"?"sc":as(T);cs[S]=(cs[S]||0)+1;var g=S+"-"+Du("5.3.6"+S+cs[S]);return I?I+"-"+g:g}(t.displayName,t.parentComponentId):a,u=t.displayName,l=u===void 0?function(T){return Mr(T)?"styled."+T:"Styled("+ks(T)+")"}(e):u,h=t.displayName&&t.componentId?as(t.displayName)+"-"+t.componentId:t.componentId||c,d=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(T,I,S){return e.shouldForwardProp(T,I,S)&&t.shouldForwardProp(T,I,S)}:e.shouldForwardProp);var y,E=new Of(n,h,r?e.componentStyle:void 0),f=E.isStatic&&o.length===0,V=function(T,I){return function(S,g,nt,yt){var ft=S.attrs,It=S.componentStyle,wt=S.defaultProps,Zt=S.foldedComponentIds,Pt=S.shouldForwardProp,Lt=S.styledComponentId,Wt=S.target;process.env.NODE_ENV!=="production"&&lt.useDebugValue(Lt);var At=function(F,m,W){F===void 0&&(F=Ce);var A=_e({},m,{theme:F}),it={};return W.forEach(function(H){var G,w,ut,b=H;for(G in Yn(b)&&(b=b(A)),b)A[G]=it[G]=G==="className"?(w=it[G],ut=b[G],w&&ut?w+" "+ut:w||ut):b[G]}),[A,it]}(Hf(g,lt.useContext(Nu),wt)||Ce,g,ft),ge=At[0],zt=At[1],St=function(F,m,W,A){var it=jf(),H=Uf(),G=m?F.generateAndInjectStyles(Ce,it,H):F.generateAndInjectStyles(W,it,H);return process.env.NODE_ENV!=="production"&&lt.useDebugValue(G),process.env.NODE_ENV!=="production"&&!m&&A&&A(G),G}(It,yt,ge,process.env.NODE_ENV!=="production"?S.warnTooManyClasses:void 0),oe=nt,ee=zt.$as||g.$as||zt.as||g.as||Wt,ye=Mr(ee),k=zt!==g?_e({},g,{},zt):g,P={};for(var N in k)N[0]!=="$"&&N!=="as"&&(N==="forwardedAs"?P.as=k[N]:(Pt?Pt(N,qa,ee):!ye||qa(N))&&(P[N]=k[N]));return g.style&&zt.style!==g.style&&(P.style=_e({},g.style,{},zt.style)),P.className=Array.prototype.concat(Zt,Lt,St!==Lt?St:null,g.className,zt.className).filter(Boolean).join(" "),P.ref=oe,lt.createElement(ee,P)}(y,T,I,f)};return V.displayName=l,(y=lt.forwardRef(V)).attrs=d,y.componentStyle=E,y.displayName=l,y.shouldForwardProp=p,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ti,y.styledComponentId=h,y.target=r?e.target:e,y.withComponent=function(T){var I=t.componentId,S=function(nt,yt){if(nt==null)return{};var ft,It,wt={},Zt=Object.keys(nt);for(It=0;It<Zt.length;It++)ft=Zt[It],yt.indexOf(ft)>=0||(wt[ft]=nt[ft]);return wt}(t,["componentId"]),g=I&&I+"-"+(Mr(T)?T:as(ks(T)));return ku(T,_e({},S,{attrs:d,componentId:g}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=r?Vu({},e.defaultProps,T):T}}),process.env.NODE_ENV!=="production"&&(Wf(l,h),y.warnTooManyClasses=function(T,I){var S={},g=!1;return function(nt){if(!g&&(S[nt]=!0,Object.keys(S).length>=200)){var yt=I?' with the id of "'+I+'"':"";console.warn("Over 200 classes were generated for component "+T+yt+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),g=!0,S={}}}}(l,h)),y.toString=function(){return"."+y.styledComponentId},i&&gf(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var ot=function(e){return function t(n,r,i){if(i===void 0&&(i=Ce),!Eo.isValidElementType(r))return Rn(1,String(r));var s=function(){return n(r,i,xu.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,_e({},i,{},o))},s.attrs=function(o){return t(n,r,_e({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(ku,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ot[e]=ot(e)});function Ou(e){process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xu.apply(void 0,[e].concat(n)).join(""),s=Du(i);return new Pu(s,i)}process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const Jf=ot(({className:e,text:t,x:n,y:r,r:i,onClick:s,index:o})=>x.jsxs("g",{onClick:s,className:e,children:[x.jsx("circle",{r:i+5,cy:r,cx:n}),x.jsx("circle",{className:e,r:i,cy:r,cx:n}),x.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:t})]}))`
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
`,Mu=ot(e=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...e,children:x.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,Zf=Ou`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`,tp=Ou`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`,ep=ot.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`,np=ot(({className:e,children:t,addToPracticePlan:n})=>x.jsx("li",{className:e,children:x.jsx("button",{onClick:n,children:t})}))`
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
`,rp=(e,t)=>{var c;const{top:n,bottom:r,left:i,right:s}=e.current.getBoundingClientRect(),o=t.clientX,a=t.clientY;(o<i||o>s||a<n||a>r)&&((c=e.current)==null||c.close())},ip=ot.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,sp=ot(({children:e,className:t,passedRef:n,title:r})=>{const i=()=>{n.current.close()};return x.jsxs("dialog",{ref:n,onClick:s=>rp(n,s),className:t,children:[x.jsxs(ip,{children:[r,x.jsx(Mu,{onClick:i})]}),e]})})`
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
    animation: ${tp} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${Zf} var(--animation-timing) ease-out forwards;
    }
  }
`,us=ot(({text:e,onClick:t,className:n,Icon:r})=>x.jsxs("button",{className:n,onClick:t,children:[x.jsx("span",{children:e}),!!r&&x.jsx("div",{children:x.jsx(r,{})})]}))`
  --button-color: ${({$level:e})=>e==="caution"?"var(--caution)":"var(--affirmative)"};

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
`,op=ot(({tabs:e,currentTab:t,setCurrentTab:n,className:r})=>x.jsx("div",{className:r,children:e.map(i=>x.jsx("div",{onClick:()=>n(i),"aria-selected":t===i,children:i},i))}))`
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
`;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}var nc;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nc||(nc={}));function gt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $s(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lu(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function ic(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ap(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,l,h)=>{let{paramName:d,isOptional:p}=l;if(d==="*"){let E=a[h]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function ap(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function mn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Lu(e):e;return{pathname:n?n.startsWith("/")?n:up(n,t):t,search:hp(r),hash:dp(i)}}function up(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ls(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fu(e,t){let n=lp(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $u(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Lu(e):(i=Fs({},e),gt(!i.pathname||!i.pathname.includes("?"),ls("?","pathname","search",i)),gt(!i.pathname||!i.pathname.includes("#"),ls("#","pathname","hash",i)),gt(!i.search||!i.search.includes("#"),ls("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?t[h]:"/"}let c=cp(i,a),u=o&&o!=="/"&&o.endsWith("/"),l=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||l)&&(c.pathname+="/"),c}const So=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ju=["post","put","patch","delete"];new Set(ju);const fp=["get",...ju];new Set(fp);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},js.apply(this,arguments)}const Ii=M.createContext(null);process.env.NODE_ENV!=="production"&&(Ii.displayName="DataRouter");const Uu=M.createContext(null);process.env.NODE_ENV!=="production"&&(Uu.displayName="DataRouterState");const pp=M.createContext(null);process.env.NODE_ENV!=="production"&&(pp.displayName="Await");const Ae=M.createContext(null);process.env.NODE_ENV!=="production"&&(Ae.displayName="Navigation");const Ro=M.createContext(null);process.env.NODE_ENV!=="production"&&(Ro.displayName="Location");const Oe=M.createContext({outlet:null,matches:[],isDataRoute:!1});process.env.NODE_ENV!=="production"&&(Oe.displayName="Route");const mp=M.createContext(null);process.env.NODE_ENV!=="production"&&(mp.displayName="RouteError");function gp(e,t){let{relative:n}=t===void 0?{}:t;Co()||(process.env.NODE_ENV!=="production"?gt(!1,"useHref() may be used only in the context of a <Router> component."):gt(!1));let{basename:r,navigator:i}=M.useContext(Ae),{hash:s,pathname:o,search:a}=pr(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:So([r,o])),i.createHref({pathname:c,search:a,hash:s})}function Co(){return M.useContext(Ro)!=null}function fr(){return Co()||(process.env.NODE_ENV!=="production"?gt(!1,"useLocation() may be used only in the context of a <Router> component."):gt(!1)),M.useContext(Ro).location}const Bu="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qu(e){M.useContext(Ae).static||M.useLayoutEffect(e)}function zu(){let{isDataRoute:e}=M.useContext(Oe);return e?Ap():yp()}function yp(){Co()||(process.env.NODE_ENV!=="production"?gt(!1,"useNavigate() may be used only in the context of a <Router> component."):gt(!1));let e=M.useContext(Ii),{basename:t,future:n,navigator:r}=M.useContext(Ae),{matches:i}=M.useContext(Oe),{pathname:s}=fr(),o=JSON.stringify(Fu(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return qu(()=>{a.current=!0}),M.useCallback(function(u,l){if(l===void 0&&(l={}),process.env.NODE_ENV!=="production"&&dr(a.current,Bu),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=$u(u,JSON.parse(o),s,l.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:So([t,h.pathname])),(l.replace?r.replace:r.push)(h,l.state,l)},[t,r,o,s,e])}const _p=M.createContext(null);function vp(e){let t=M.useContext(Oe).outlet;return t&&M.createElement(_p.Provider,{value:e},t)}function Ep(){let{matches:e}=M.useContext(Oe),t=e[e.length-1];return t?t.params:{}}function pr(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=M.useContext(Ae),{matches:i}=M.useContext(Oe),{pathname:s}=fr(),o=JSON.stringify(Fu(i,r.v7_relativeSplatPath));return M.useMemo(()=>$u(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}var Gu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gu||{}),bo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bo||{});function Wu(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function wp(e){let t=M.useContext(Ii);return t||(process.env.NODE_ENV!=="production"?gt(!1,Wu(e)):gt(!1)),t}function Tp(e){let t=M.useContext(Oe);return t||(process.env.NODE_ENV!=="production"?gt(!1,Wu(e)):gt(!1)),t}function Hu(e){let t=Tp(e),n=t.matches[t.matches.length-1];return n.route.id||(process.env.NODE_ENV!=="production"?gt(!1,e+' can only be used on routes that contain a unique "id"'):gt(!1)),n.route.id}function Ip(){return Hu(bo.UseRouteId)}function Ap(){let{router:e}=wp(Gu.UseNavigateStable),t=Hu(bo.UseNavigateStable),n=M.useRef(!1);return qu(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),process.env.NODE_ENV!=="production"&&dr(n.current,Bu),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,js({fromRouteId:t},s)))},[e,t])}function Sp(e){return vp(e.context)}new Promise(()=>{});/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gn.apply(this,arguments)}function Po(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Kr="get",Qr="application/x-www-form-urlencoded";function Ai(e){return e!=null&&typeof e.tagName=="string"}function Rp(e){return Ai(e)&&e.tagName.toLowerCase()==="button"}function Cp(e){return Ai(e)&&e.tagName.toLowerCase()==="form"}function bp(e){return Ai(e)&&e.tagName.toLowerCase()==="input"}function Pp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xp(e,t){return e.button===0&&(!t||t==="_self")&&!Pp(e)}let Lr=null;function Dp(){if(Lr===null)try{new FormData(document.createElement("form"),0),Lr=!1}catch{Lr=!0}return Lr}const Vp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hs(e){return e!=null&&!Vp.has(e)?(process.env.NODE_ENV!=="production"&&dr(!1,'"'+e+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` '+('and will default to "'+Qr+'"')),null):e}function Np(e,t){let n,r,i,s,o;if(Cp(e)){let a=e.getAttribute("action");r=a?mn(a,t):null,n=e.getAttribute("method")||Kr,i=hs(e.getAttribute("enctype"))||Qr,s=new FormData(e)}else if(Rp(e)||bp(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||a.getAttribute("action");if(r=c?mn(c,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Kr,i=hs(e.getAttribute("formenctype"))||hs(a.getAttribute("enctype"))||Qr,s=new FormData(a,e),!Dp()){let{name:u,type:l,value:h}=e;if(l==="image"){let d=u?u+".":"";s.append(d+"x","0"),s.append(d+"y","0")}else u&&s.append(u,h)}}else{if(Ai(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Kr,r=null,i=Qr,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}const kp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Op=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Mp=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"],Lp="6";try{window.__reactRouterVersion=Lp}catch{}const Ku=M.createContext({isTransitioning:!1});process.env.NODE_ENV!=="production"&&(Ku.displayName="ViewTransition");const Fp=M.createContext(new Map);process.env.NODE_ENV!=="production"&&(Fp.displayName="Fetchers");process.env.NODE_ENV;const $p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qu=M.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:l,unstable_viewTransition:h}=t,d=Po(t,kp),{basename:p}=M.useContext(Ae),y,E=!1;if(typeof u=="string"&&jp.test(u)&&(y=u,$p))try{let I=new URL(window.location.href),S=u.startsWith("//")?new URL(I.protocol+u):new URL(u),g=mn(S.pathname,p);S.origin===I.origin&&g!=null?u=g+S.search+S.hash:E=!0}catch{process.env.NODE_ENV!=="production"&&dr(!1,'<Link to="'+u+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let f=gp(u,{relative:i}),V=qp(u,{replace:o,state:a,target:c,preventScrollReset:l,relative:i,unstable_viewTransition:h});function T(I){r&&r(I),I.defaultPrevented||V(I)}return M.createElement("a",gn({},d,{href:y||f,onClick:E||s?r:T,ref:n,target:c}))});process.env.NODE_ENV!=="production"&&(Qu.displayName="Link");const Us=M.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:c,unstable_viewTransition:u,children:l}=t,h=Po(t,Op),d=pr(c,{relative:h.relative}),p=fr(),y=M.useContext(Uu),{navigator:E,basename:f}=M.useContext(Ae),V=y!=null&&Qp(d)&&u===!0,T=E.encodeLocation?E.encodeLocation(d).pathname:d.pathname,I=p.pathname,S=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(I=I.toLowerCase(),S=S?S.toLowerCase():null,T=T.toLowerCase()),S&&f&&(S=mn(S,f)||S);const g=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let nt=I===T||!o&&I.startsWith(T)&&I.charAt(g)==="/",yt=S!=null&&(S===T||!o&&S.startsWith(T)&&S.charAt(T.length)==="/"),ft={isActive:nt,isPending:yt,isTransitioning:V},It=nt?r:void 0,wt;typeof s=="function"?wt=s(ft):wt=[s,nt?"active":null,yt?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let Zt=typeof a=="function"?a(ft):a;return M.createElement(Qu,gn({},h,{"aria-current":It,className:wt,ref:n,style:Zt,to:c,unstable_viewTransition:u}),typeof l=="function"?l(ft):l)});process.env.NODE_ENV!=="production"&&(Us.displayName="NavLink");const Up=M.forwardRef((e,t)=>{let{fetcherKey:n,navigate:r,reloadDocument:i,replace:s,state:o,method:a=Kr,action:c,onSubmit:u,relative:l,preventScrollReset:h,unstable_viewTransition:d}=e,p=Po(e,Mp),y=Hp(),E=Kp(c,{relative:l}),f=a.toLowerCase()==="get"?"get":"post",V=T=>{if(u&&u(T),T.defaultPrevented)return;T.preventDefault();let I=T.nativeEvent.submitter,S=(I==null?void 0:I.getAttribute("formmethod"))||a;y(I||T.currentTarget,{fetcherKey:n,method:S,navigate:r,replace:s,state:o,relative:l,preventScrollReset:h,unstable_viewTransition:d})};return M.createElement("form",gn({ref:t,method:f,action:E,onSubmit:i?u:V},p))});process.env.NODE_ENV!=="production"&&(Up.displayName="Form");process.env.NODE_ENV;var ni;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ni||(ni={}));var sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sc||(sc={}));function Bp(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function Yu(e){let t=M.useContext(Ii);return t||(process.env.NODE_ENV!=="production"?gt(!1,Bp(e)):gt(!1)),t}function qp(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,c=zu(),u=fr(),l=pr(e,{relative:o});return M.useCallback(h=>{if(xp(h,n)){h.preventDefault();let d=r!==void 0?r:$s(u)===$s(l);c(e,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,c,l,r,i,n,e,s,o,a])}function zp(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let Gp=0,Wp=()=>"__"+String(++Gp)+"__";function Hp(){let{router:e}=Yu(ni.UseSubmit),{basename:t}=M.useContext(Ae),n=Ip();return M.useCallback(function(r,i){i===void 0&&(i={}),zp();let{action:s,method:o,encType:a,formData:c,body:u}=Np(r,t);if(i.navigate===!1){let l=i.fetcherKey||Wp();e.fetch(l,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||o,formEncType:i.encType||a,unstable_flushSync:i.unstable_flushSync})}else e.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,unstable_flushSync:i.unstable_flushSync,unstable_viewTransition:i.unstable_viewTransition})},[e,t,n])}function Kp(e,t){let{relative:n}=t===void 0?{}:t,{basename:r}=M.useContext(Ae),i=M.useContext(Oe);i||(process.env.NODE_ENV!=="production"?gt(!1,"useFormAction must be used inside a RouteContext"):gt(!1));let[s]=i.matches.slice(-1),o=gn({},pr(e||".",{relative:n})),a=fr();if(e==null){o.search=a.search;let c=new URLSearchParams(o.search);c.has("index")&&c.get("index")===""&&(c.delete("index"),o.search=c.toString()?"?"+c.toString():"")}return(!e||e===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:So([r,o.pathname])),$s(o)}function Qp(e,t){t===void 0&&(t={});let n=M.useContext(Ku);n==null&&(process.env.NODE_ENV!=="production"?gt(!1,"`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"):gt(!1));let{basename:r}=Yu(ni.useViewTransitionState),i=pr(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=mn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ic(i.pathname,o)!=null||ic(i.pathname,s)!=null}ot(({className:e})=>x.jsxs(x.Fragment,{children:[x.jsx("nav",{className:e,children:x.jsxs("ul",{children:[x.jsx("li",{children:x.jsx(Us,{to:"/practice_plans",children:"Practice Plans"})}),x.jsx("li",{children:x.jsx(Us,{to:"/create",children:"Create"})})]})}),x.jsx(Sp,{})]}))`
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
`;const Yp=ot(({className:e,children:t,title:n,...r})=>x.jsxs("details",{className:e,...r,children:[x.jsx("summary",{children:n}),t]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,Xp=ot(({className:e})=>x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:e,children:[x.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),x.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,Jp=ot(({className:e})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:e,children:x.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,Zp=ot(({className:e=""})=>x.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:x.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:e})}))``;ot(({className:e})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:e,children:x.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``;const tm=ot.line`
  stroke: var(--orange);
`,Xu=ot(({className:e,content:t,showPanel:n,addToPracticePlan:r,area:i,moves:s,setPanelTitle:o=()=>{}})=>{const u=l=>{const h="50%",d="25%",p="75%";return l%3===1||l===0?h:l%6===2||l%6===3?d:p};return x.jsx("svg",{height:Math.max(110*(t.length+2),window.innerHeight-52),width:"100%",className:e,children:t.map((l,h)=>x.jsxs("g",{children:[x.jsx(tm,{x1:u(h),y1:70+h*110,x2:u(h+1),y2:70+(h+1)*110}),x.jsx(Jf,{index:h,r:50,y:70+h*110,x:u(h),onClick:()=>{o(l),n(()=>x.jsx(x.Fragment,{children:s.filter(d=>d.area===i&&d.position===l).map(d=>x.jsx(np,{addToPracticePlan:()=>r(d.id),children:d.name},`${i}-${l}-${d.name}`))}))},text:l},`${h}-svgRect`)]},l))})})`
  background-color: var(--primary);
`;/**
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
 *//**
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
 */const Ju=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},em=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ju(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):em(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new nm;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rm=function(e){const t=Ju(e);return Zu.encodeByteArray(t,!0)},ri=function(e){return rm(e).replace(/\./g,"")},im=function(e){try{return Zu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const om=()=>sm().__FIREBASE_DEFAULTS__,am=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&im(e[1]);return t&&JSON.parse(t)},xo=()=>{try{return om()||am()||cm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},um=e=>{var t,n;return(n=(t=xo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lm=e=>{const t=um(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},tl=()=>{var e;return(e=xo())===null||e===void 0?void 0:e.config};/**
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
 */class hm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function dm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ri(JSON.stringify(n)),ri(JSON.stringify(o)),""].join(".")}/**
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
 */function ii(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fm(){var e;const t=(e=xo())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function mm(){return!fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Do(){try{return typeof indexedDB=="object"}catch{return!1}}function el(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function gm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ym="FirebaseError";class Me extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ym,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?_m(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Me(i,a,r)}}function _m(e,t){return e.replace(vm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const vm=/\{\$([^}]+)}/g;function si(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(oc(s)&&oc(o)){if(!si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function oc(e){return e!==null&&typeof e=="object"}/**
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
 */const Em=1e3,wm=2,Tm=4*60*60*1e3,Im=.5;function ac(e,t=Em,n=wm){const r=t*Math.pow(n,e),i=Math.round(Im*r*(Math.random()-.5)*2);return Math.min(Tm,r+i)}/**
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
 */function re(e){return e&&e._delegate?e._delegate:e}class we{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class Am{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new hm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Rm(t))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=je){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=je){return this.instances.has(t)}getOptions(t=je){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=je){return this.component?this.component.multipleInstances?t:je:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(e){return e===je?void 0:e}function Rm(e){return e.instantiationMode==="EAGER"}/**
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
 */class Cm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Am(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const bm={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Pm=Y.INFO,xm={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Dm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=xm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vo{constructor(t){this.name=t,this._logLevel=Pm,this._logHandler=Dm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Vm=(e,t)=>t.some(n=>e instanceof n);let cc,uc;function Nm(){return cc||(cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function km(){return uc||(uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,Bs=new WeakMap,rl=new WeakMap,ds=new WeakMap,No=new WeakMap;function Om(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(be(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&nl.set(n,e)}).catch(()=>{}),No.set(t,e),t}function Mm(e){if(Bs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Bs.set(e,t)}let qs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lm(e){qs=e(qs)}function Fm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fs(this),t,...n);return rl.set(r,t.sort?t.sort():[t]),be(r)}:km().includes(e)?function(...t){return e.apply(fs(this),t),be(nl.get(this))}:function(...t){return be(e.apply(fs(this),t))}}function $m(e){return typeof e=="function"?Fm(e):(e instanceof IDBTransaction&&Mm(e),Vm(e,Nm())?new Proxy(e,qs):e)}function be(e){if(e instanceof IDBRequest)return Om(e);if(ds.has(e))return ds.get(e);const t=$m(e);return t!==e&&(ds.set(e,t),No.set(t,e)),t}const fs=e=>No.get(e);function il(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=be(o);return r&&o.addEventListener("upgradeneeded",c=>{r(be(o.result),c.oldVersion,c.newVersion,be(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jm=["get","getKey","getAll","getAllKeys","count"],Um=["put","add","delete","clear"],ps=new Map;function lc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Um.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jm.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return ps.set(t,s),s}Lm(e=>({...e,get:(t,n,r)=>lc(t,n)||e.get(t,n,r),has:(t,n)=>!!lc(t,n)||e.has(t,n)}));/**
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
 */class Bm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zs="@firebase/app",hc="0.9.27";/**
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
 */const Qe=new Vo("@firebase/app"),zm="@firebase/app-compat",Gm="@firebase/analytics-compat",Wm="@firebase/analytics",Hm="@firebase/app-check-compat",Km="@firebase/app-check",Qm="@firebase/auth",Ym="@firebase/auth-compat",Xm="@firebase/database",Jm="@firebase/database-compat",Zm="@firebase/functions",tg="@firebase/functions-compat",eg="@firebase/installations",ng="@firebase/installations-compat",rg="@firebase/messaging",ig="@firebase/messaging-compat",sg="@firebase/performance",og="@firebase/performance-compat",ag="@firebase/remote-config",cg="@firebase/remote-config-compat",ug="@firebase/storage",lg="@firebase/storage-compat",hg="@firebase/firestore",dg="@firebase/firestore-compat",fg="firebase",pg="10.8.0";/**
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
 */const Gs="[DEFAULT]",mg={[zs]:"fire-core",[zm]:"fire-core-compat",[Wm]:"fire-analytics",[Gm]:"fire-analytics-compat",[Km]:"fire-app-check",[Hm]:"fire-app-check-compat",[Qm]:"fire-auth",[Ym]:"fire-auth-compat",[Xm]:"fire-rtdb",[Jm]:"fire-rtdb-compat",[Zm]:"fire-fn",[tg]:"fire-fn-compat",[eg]:"fire-iid",[ng]:"fire-iid-compat",[rg]:"fire-fcm",[ig]:"fire-fcm-compat",[sg]:"fire-perf",[og]:"fire-perf-compat",[ag]:"fire-rc",[cg]:"fire-rc-compat",[ug]:"fire-gcs",[lg]:"fire-gcs-compat",[hg]:"fire-fst",[dg]:"fire-fst-compat","fire-js":"fire-js",[fg]:"fire-js-all"};/**
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
 */const oi=new Map,Ws=new Map;function gg(e,t){try{e.container.addComponent(t)}catch(n){Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function De(e){const t=e.name;if(Ws.has(t))return Qe.debug(`There were multiple attempts to register component ${t}.`),!1;Ws.set(t,e);for(const n of oi.values())gg(n,e);return!0}function mr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const yg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new Si("app","Firebase",yg);/**
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
 */class _g{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
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
 */const vg=pg;function sl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pe.create("bad-app-name",{appName:String(i)});if(n||(n=tl()),!n)throw Pe.create("no-options");const s=oi.get(i);if(s){if(si(n,s.options)&&si(r,s.config))return s;throw Pe.create("duplicate-app",{appName:i})}const o=new Cm(i);for(const c of Ws.values())o.addComponent(c);const a=new _g(n,r,o);return oi.set(i,a),a}function ol(e=Gs){const t=oi.get(e);if(!t&&e===Gs&&tl())return sl();if(!t)throw Pe.create("no-app",{appName:e});return t}function le(e,t,n){var r;let i=(r=mg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qe.warn(a.join(" "));return}De(new we(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Eg="firebase-heartbeat-database",wg=1,Xn="firebase-heartbeat-store";let ms=null;function al(){return ms||(ms=il(Eg,wg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Xn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pe.create("idb-open",{originalErrorMessage:e.message})})),ms}async function Tg(e){try{const n=(await al()).transaction(Xn),r=await n.objectStore(Xn).get(cl(e));return await n.done,r}catch(t){if(t instanceof Me)Qe.warn(t.message);else{const n=Pe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(n.message)}}}async function dc(e,t){try{const r=(await al()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(t,cl(e)),await r.done}catch(n){if(n instanceof Me)Qe.warn(n.message);else{const r=Pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qe.warn(r.message)}}}function cl(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ig=1024,Ag=30*24*60*60*1e3;class Sg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ag}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fc(),{heartbeatsToSend:r,unsentEntries:i}=Rg(this._heartbeatsCache.heartbeats),s=ri(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fc(){return new Date().toISOString().substring(0,10)}function Rg(e,t=Ig){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Do()?el().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function pc(e){return ri(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function bg(e){De(new we("platform-logger",t=>new Bm(t),"PRIVATE")),De(new we("heartbeat",t=>new Sg(t),"PRIVATE")),le(zs,hc,e),le(zs,hc,"esm2017"),le("fire-js","")}bg("");var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,ko=ko||{},$=Pg||self;function Ri(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function gr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function xg(e){return Object.prototype.hasOwnProperty.call(e,gs)&&e[gs]||(e[gs]=++Dg)}var gs="closure_uid_"+(1e9*Math.random()>>>0),Dg=0;function Vg(e,t,n){return e.call.apply(e.bind,arguments)}function Ng(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=Vg:Ut=Ng,Ut.apply(null,arguments)}function Fr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function bt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Le(){this.s=this.s,this.o=this.o}var kg=0;Le.prototype.s=!1;Le.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kg!=0)&&xg(this)};Le.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ul=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Oo(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function mc(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ri(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Bt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var Og=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};$.addEventListener("test",n,t),$.removeEventListener("test",n,t)}catch{}return e}();function Jn(e){return/^[\s\xa0]*$/.test(e)}function Ci(){var e=$.navigator;return e&&(e=e.userAgent)?e:""}function ae(e){return Ci().indexOf(e)!=-1}function Mo(e){return Mo[" "](e),e}Mo[" "]=function(){};function Mg(e,t){var n=by;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Lg=ae("Opera"),yn=ae("Trident")||ae("MSIE"),ll=ae("Edge"),Hs=ll||yn,hl=ae("Gecko")&&!(Ci().toLowerCase().indexOf("webkit")!=-1&&!ae("Edge"))&&!(ae("Trident")||ae("MSIE"))&&!ae("Edge"),Fg=Ci().toLowerCase().indexOf("webkit")!=-1&&!ae("Edge");function dl(){var e=$.document;return e?e.documentMode:void 0}var Ks;t:{var ys="",_s=function(){var e=Ci();if(hl)return/rv:([^\);]+)(\)|;)/.exec(e);if(ll)return/Edge\/([\d\.]+)/.exec(e);if(yn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Fg)return/WebKit\/(\S+)/.exec(e);if(Lg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(_s&&(ys=_s?_s[1]:""),yn){var vs=dl();if(vs!=null&&vs>parseFloat(ys)){Ks=String(vs);break t}}Ks=ys}var Qs;if($.document&&yn){var gc=dl();Qs=gc||parseInt(Ks,10)||void 0}else Qs=void 0;var $g=Qs;function Zn(e,t){if(Bt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(hl){t:{try{Mo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:jg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Zn.$.h.call(this)}}bt(Zn,Bt);var jg={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yr="closure_listenable_"+(1e6*Math.random()|0),Ug=0;function Bg(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ug,this.fa=this.ia=!1}function bi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Lo(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function qg(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function fl(e){const t={};for(const n in e)t[n]=e[n];return t}const yc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pl(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<yc.length;s++)n=yc[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Pi(e){this.src=e,this.g={},this.h=0}Pi.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Xs(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Bg(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Ys(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ul(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Xs(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Fo="closure_lm_"+(1e6*Math.random()|0),Es={};function ml(e,t,n,r,i){if(r&&r.once)return yl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ml(e,t[s],n,r,i);return null}return n=Uo(n),e&&e[yr]?e.O(t,n,gr(r)?!!r.capture:!!r,i):gl(e,t,n,!1,r,i)}function gl(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=gr(i)?!!i.capture:!!i,a=jo(e);if(a||(e[Fo]=a=new Pi(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=zg(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Og||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(vl(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zg(){function e(n){return t.call(e.src,e.listener,n)}const t=Gg;return e}function yl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)yl(e,t[s],n,r,i);return null}return n=Uo(n),e&&e[yr]?e.P(t,n,gr(r)?!!r.capture:!!r,i):gl(e,t,n,!0,r,i)}function _l(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)_l(e,t[s],n,r,i);else r=gr(r)?!!r.capture:!!r,n=Uo(n),e&&e[yr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Xs(s,n,r,i),-1<n&&(bi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=jo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Xs(t,n,r,i)),(n=-1<e?t[e]:null)&&$o(n))}function $o(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[yr])Ys(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(vl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=jo(t))?(Ys(n,e),n.h==0&&(n.src=null,t[Fo]=null)):bi(e)}}}function vl(e){return e in Es?Es[e]:Es[e]="on"+e}function Gg(e,t){if(e.fa)e=!0;else{t=new Zn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&$o(e),e=n.call(r,t)}return e}function jo(e){return e=e[Fo],e instanceof Pi?e:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(e){return typeof e=="function"?e:(e[ws]||(e[ws]=function(t){return e.handleEvent(t)}),e[ws])}function Ct(){Le.call(this),this.i=new Pi(this),this.S=this,this.J=null}bt(Ct,Le);Ct.prototype[yr]=!0;Ct.prototype.removeEventListener=function(e,t,n,r){_l(this,e,t,n,r)};function Ot(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Bt(t,e);else if(t instanceof Bt)t.target=t.target||e;else{var i=t;t=new Bt(r,e),pl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$r(o,r,!0,t)&&i}if(o=t.g=e,i=$r(o,r,!0,t)&&i,i=$r(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$r(o,r,!1,t)&&i}Ct.prototype.N=function(){if(Ct.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)bi(n[r]);delete e.g[t],e.h--}}this.J=null};Ct.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ct.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $r(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ys(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bo=$.JSON.stringify;class Wg{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Hg(){var e=qo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Kg{constructor(){this.h=this.g=null}add(t,n){const r=El.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var El=new Wg(()=>new Qg,e=>e.reset());class Qg{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Yg(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Xg(e){$.setTimeout(()=>{throw e},0)}let tr,er=!1,qo=new Kg,wl=()=>{const e=$.Promise.resolve(void 0);tr=()=>{e.then(Jg)}};var Jg=()=>{for(var e;e=Hg();){try{e.h.call(e.g)}catch(n){Xg(n)}var t=El;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}er=!1};function xi(e,t){Ct.call(this),this.h=e||1,this.g=t||$,this.j=Ut(this.qb,this),this.l=Date.now()}bt(xi,Ct);C=xi.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ot(this,"tick"),this.ga&&(zo(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zo(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}C.N=function(){xi.$.N.call(this),zo(this),delete this.g};function Go(e,t,n){if(typeof e=="function")n&&(e=Ut(e,n));else if(e&&typeof e.handleEvent=="function")e=Ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}function Tl(e){e.g=Go(()=>{e.g=null,e.i&&(e.i=!1,Tl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Zg extends Le{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tl(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(e){Le.call(this),this.h=e,this.g={}}bt(nr,Le);var _c=[];function Il(e,t,n,r){Array.isArray(n)||(n&&(_c[0]=n.toString()),n=_c);for(var i=0;i<n.length;i++){var s=ml(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Al(e){Lo(e.g,function(t,n){this.g.hasOwnProperty(n)&&$o(t)},e),e.g={}}nr.prototype.N=function(){nr.$.N.call(this),Al(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Di(){this.g=!0}Di.prototype.Ea=function(){this.g=!1};function ty(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ey(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function un(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ry(e,n)+(r?" "+r:"")})}function ny(e,t){e.info(function(){return"TIMEOUT: "+t})}Di.prototype.info=function(){};function ry(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bo(n)}catch{return t}}var en={},vc=null;function Vi(){return vc=vc||new Ct}en.Ta="serverreachability";function Sl(e){Bt.call(this,en.Ta,e)}bt(Sl,Bt);function rr(e){const t=Vi();Ot(t,new Sl(t))}en.STAT_EVENT="statevent";function Rl(e,t){Bt.call(this,en.STAT_EVENT,e),this.stat=t}bt(Rl,Bt);function Gt(e){const t=Vi();Ot(t,new Rl(t,e))}en.Ua="timingevent";function Cl(e,t){Bt.call(this,en.Ua,e),this.size=t}bt(Cl,Bt);function _r(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}var Ni={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},bl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wo(){}Wo.prototype.h=null;function Ec(e){return e.h||(e.h=e.i())}function Pl(){}var vr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ho(){Bt.call(this,"d")}bt(Ho,Bt);function Ko(){Bt.call(this,"c")}bt(Ko,Bt);var Js;function ki(){}bt(ki,Wo);ki.prototype.g=function(){return new XMLHttpRequest};ki.prototype.i=function(){return{}};Js=new ki;function Er(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new nr(this),this.P=iy,e=Hs?125:void 0,this.V=new xi(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xl}function xl(){this.i=null,this.g="",this.h=!1}var iy=45e3,Dl={},Zs={};C=Er.prototype;C.setTimeout=function(e){this.P=e};function to(e,t,n){e.L=1,e.A=Mi(Te(t)),e.u=n,e.S=!0,Vl(e,null)}function Vl(e,t){e.G=Date.now(),wr(e),e.B=Te(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),jl(n.i,"t",r),e.o=0,n=e.l.J,e.h=new xl,e.g=ah(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Zg(Ut(e.Pa,e,e.g),e.O)),Il(e.U,e.g,"readystatechange",e.nb),t=e.I?fl(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),rr(),ty(e.j,e.v,e.B,e.m,e.W,e.u)}C.nb=function(e){e=e.target;const t=this.M;t&&ce(e)==3?t.l():this.Pa(e)};C.Pa=function(e){try{if(e==this.g)t:{const l=ce(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Hs||this.g&&(this.h.h||this.g.ja()||Ac(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?rr(3):rr(2)),Oi(this);var n=this.g.da();this.ca=n;e:if(Nl(this)){var r=Ac(this.g);e="";var i=r.length,s=ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qe(this),qn(this);var o="";break e}this.h.i=new $.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ey(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jn(a)){var u=a;break e}}u=null}if(n=u)un(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eo(this,n);else{this.i=!1,this.s=3,Gt(12),qe(this),qn(this);break t}}this.S?(kl(this,l,o),Hs&&this.i&&l==3&&(Il(this.U,this.V,"tick",this.mb),this.V.start())):(un(this.j,this.m,o,null),eo(this,o)),l==4&&qe(this),this.i&&!this.J&&(l==4?rh(this.l,this):(this.i=!1,wr(this)))}else Sy(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Gt(12)):(this.s=0,Gt(13)),qe(this),qn(this)}}}catch{}finally{}};function Nl(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function kl(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=sy(e,n),i==Zs){t==4&&(e.s=4,Gt(14),r=!1),un(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Dl){e.s=4,Gt(15),un(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else un(e.j,e.m,i,null),eo(e,i);Nl(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Gt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ta(t),t.M=!0,Gt(11))):(un(e.j,e.m,n,"[Invalid Chunked Response]"),qe(e),qn(e))}C.mb=function(){if(this.g){var e=ce(this.g),t=this.g.ja();this.o<t.length&&(Oi(this),kl(this,e,t),this.i&&e!=4&&wr(this))}};function sy(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Zs:(n=Number(t.substring(n,r)),isNaN(n)?Dl:(r+=1,r+n>t.length?Zs:(t=t.slice(r,r+n),e.o=r+n,t)))}C.cancel=function(){this.J=!0,qe(this)};function wr(e){e.Y=Date.now()+e.P,Ol(e,e.P)}function Ol(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=_r(Ut(e.lb,e),t)}function Oi(e){e.C&&($.clearTimeout(e.C),e.C=null)}C.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(ny(this.j,this.B),this.L!=2&&(rr(),Gt(17)),qe(this),this.s=2,qn(this)):Ol(this,this.Y-e)};function qn(e){e.l.H==0||e.J||rh(e.l,e)}function qe(e){Oi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,zo(e.V),Al(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function eo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||no(n.i,e))){if(!e.K&&no(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)ui(n),ji(n);else break t;Zo(n),Gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_r(Ut(n.ib,n),6e3));if(1>=ql(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ze(n,11)}else if((e.K||n.g==e)&&ui(n),!Jn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qo(s,s.h),s.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,at(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=oh(r,r.J?r.pa:null,r.Y),o.K){zl(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Oi(a),wr(a)),r.g=o}else eh(r);0<n.j.length&&Ui(n)}else u[0]!="stop"&&u[0]!="close"||ze(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ze(n,7):Jo(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}rr(4)}catch{}}function oy(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ri(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ay(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ri(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ml(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ri(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ay(e),r=oy(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cy(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ke(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ke){this.h=e.h,ai(this,e.j),this.s=e.s,this.g=e.g,ci(this,e.m),this.l=e.l;var t=e.i,n=new ir;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),wc(this,n),this.o=e.o}else e&&(t=String(e).match(Ll))?(this.h=!1,ai(this,t[1]||"",!0),this.s=Fn(t[2]||""),this.g=Fn(t[3]||"",!0),ci(this,t[4]),this.l=Fn(t[5]||"",!0),wc(this,t[6]||"",!0),this.o=Fn(t[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Ke.prototype.toString=function(){var e=[],t=this.j;t&&e.push($n(t,Tc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push($n(t,Tc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push($n(n,n.charAt(0)=="/"?hy:ly,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",$n(n,fy)),e.join("")};function Te(e){return new Ke(e)}function ai(e,t,n){e.j=n?Fn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ci(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wc(e,t,n){t instanceof ir?(e.i=t,py(e.i,e.h)):(n||(t=$n(t,dy)),e.i=new ir(t,e.h))}function at(e,t,n){e.i.set(t,n)}function Mi(e){return at(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Fn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $n(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uy),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uy(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Tc=/[#\/\?@]/g,ly=/[#\?:]/g,hy=/[#\?]/g,dy=/[#\?@]/g,fy=/#/g;function ir(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Fe(e){e.g||(e.g=new Map,e.h=0,e.i&&cy(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}C=ir.prototype;C.add=function(e,t){Fe(this),this.i=null,e=Cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Fl(e,t){Fe(e),t=Cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $l(e,t){return Fe(e),t=Cn(e,t),e.g.has(t)}C.forEach=function(e,t){Fe(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};C.ta=function(){Fe(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};C.Z=function(e){Fe(this);let t=[];if(typeof e=="string")$l(this,e)&&(t=t.concat(this.g.get(Cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};C.set=function(e,t){return Fe(this),this.i=null,e=Cn(this,e),$l(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};C.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function jl(e,t,n){Fl(e,t),0<n.length&&(e.i=null,e.g.set(Cn(e,t),Oo(n)),e.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function py(e,t){t&&!e.j&&(Fe(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Fl(this,r),jl(this,i,n))},e)),e.j=t}var my=class{constructor(e,t){this.g=e,this.map=t}};function Ul(e){this.l=e||gy,$.PerformanceNavigationTiming?(e=$.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gy=10;function Bl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ql(e){return e.h?1:e.g?e.g.size:0}function no(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Qo(e,t){e.g?e.g.add(t):e.h=t}function zl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ul.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Gl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Oo(e.i)}var yy=class{stringify(e){return $.JSON.stringify(e,void 0)}parse(e){return $.JSON.parse(e,void 0)}};function _y(){this.g=new yy}function vy(e,t,n){const r=n||"";try{Ml(e,function(i,s){let o=i;gr(i)&&(o=Bo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ey(e,t){const n=new Di;if($.Image){const r=new Image;r.onload=Fr(jr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Fr(jr,n,r,"TestLoadImage: error",!1,t),r.onabort=Fr(jr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Fr(jr,n,r,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function jr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Li(e){this.l=e.ec||null,this.j=e.ob||!1}bt(Li,Wo);Li.prototype.g=function(){return new Fi(this.l,this.j)};Li.prototype.i=function(e){return function(){return e}}({});function Fi(e,t){Ct.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Yo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(Fi,Ct);var Yo=0;C=Fi.prototype;C.open=function(e,t){if(this.readyState!=Yo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sr(this)};C.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=Yo};C.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Wl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}C.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Tr(this):sr(this),this.readyState==3&&Wl(this)}};C.Za=function(e){this.g&&(this.response=this.responseText=e,Tr(this))};C.Ya=function(e){this.g&&(this.response=e,Tr(this))};C.ka=function(){this.g&&Tr(this)};function Tr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sr(e)}C.setRequestHeader=function(e,t){this.v.append(e,t)};C.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function sr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wy=$.JSON.parse;function dt(e){Ct.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hl,this.L=this.M=!1}bt(dt,Ct);var Hl="",Ty=/^https?$/i,Iy=["POST","PUT"];C=dt.prototype;C.Oa=function(e){this.M=e};C.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Js.g(),this.C=this.u?Ec(this.u):Ec(Js),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Ic(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&e instanceof $.FormData,!(0<=ul(Iy,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Yl(this),0<this.B&&((this.L=Ay(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=Go(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Ic(this,s)}};function Ay(e){return yn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}C.ua=function(){typeof ko<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))};function Ic(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Kl(e),$i(e)}function Kl(e){e.F||(e.F=!0,Ot(e,"complete"),Ot(e,"error"))}C.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ot(this,"complete"),Ot(this,"abort"),$i(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$i(this,!0)),dt.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?Ql(this):this.kb())};C.kb=function(){Ql(this)};function Ql(e){if(e.h&&typeof ko<"u"&&(!e.C[1]||ce(e)!=4||e.da()!=2)){if(e.v&&ce(e)==4)Go(e.La,0,e);else if(Ot(e,"readystatechange"),ce(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Ll)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!Ty.test(i?i.toLowerCase():"")}n=r}if(n)Ot(e,"complete"),Ot(e,"success");else{e.m=6;try{var s=2<ce(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Kl(e)}}finally{$i(e)}}}}function $i(e,t){if(e.g){Yl(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ot(e,"ready");try{n.onreadystatechange=r}catch{}}}function Yl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}C.isActive=function(){return!!this.g};function ce(e){return e.g?e.g.readyState:0}C.da=function(){try{return 2<ce(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wy(t)}};function Ac(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Hl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Sy(e){const t={};e=(e.g&&2<=ce(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Jn(e[r]))continue;var n=Yg(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}qg(t,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xl(e){let t="";return Lo(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Xo(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):at(e,t,n))}function On(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jl(e){this.Ga=0,this.j=[],this.l=new Di,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=On("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=On("baseRetryDelayMs",5e3,e),this.hb=On("retryDelaySeedMs",1e4,e),this.eb=On("forwardChannelMaxRetries",2,e),this.xa=On("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ul(e&&e.concurrentRequestLimit),this.Ja=new _y,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=Jl.prototype;C.ra=8;C.H=1;function Jo(e){if(Zl(e),e.H==3){var t=e.W++,n=Te(e.I);if(at(n,"SID",e.K),at(n,"RID",t),at(n,"TYPE","terminate"),Ir(e,n),t=new Er(e,e.l,t),t.L=2,t.A=Mi(Te(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&$.Image&&(new Image().src=t.A,n=!0),n||(t.g=ah(t.l,null),t.g.ha(t.A)),t.G=Date.now(),wr(t)}sh(e)}function ji(e){e.g&&(ta(e),e.g.cancel(),e.g=null)}function Zl(e){ji(e),e.u&&($.clearTimeout(e.u),e.u=null),ui(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&$.clearTimeout(e.m),e.m=null)}function Ui(e){if(!Bl(e.i)&&!e.m){e.m=!0;var t=e.Na;tr||wl(),er||(tr(),er=!0),qo.add(t,e),e.C=0}}function Ry(e,t){return ql(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=_r(Ut(e.Na,e,t),ih(e,e.C)),e.C++,!0)}C.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Er(this,this.l,e);let s=this.s;if(this.U&&(s?(s=fl(s),pl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=th(this,i,t),n=Te(this.I),at(n,"RID",e),at(n,"CVER",22),this.F&&at(n,"X-HTTP-Session-Id",this.F),Ir(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Xl(s)))+"&"+t:this.o&&Xo(n,this.o,s)),Qo(this.i,i),this.bb&&at(n,"TYPE","init"),this.P?(at(n,"$req",t),at(n,"SID","null"),i.aa=!0,to(i,n,null)):to(i,n,t),this.H=2}}else this.H==3&&(e?Sc(this,e):this.j.length==0||Bl(this.i)||Sc(this))};function Sc(e,t){var n;t?n=t.m:n=e.W++;const r=Te(e.I);at(r,"SID",e.K),at(r,"RID",n),at(r,"AID",e.V),Ir(e,r),e.o&&e.s&&Xo(r,e.o,e.s),n=new Er(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=th(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Qo(e.i,n),to(n,r,t)}function Ir(e,t){e.na&&Lo(e.na,function(n,r){at(t,r,n)}),e.h&&Ml({},function(n,r){at(t,r,n)})}function th(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ut(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{vy(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function eh(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tr||wl(),er||(tr(),er=!0),qo.add(t,e),e.A=0}}function Zo(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=_r(Ut(e.Ma,e),ih(e,e.A)),e.A++,!0)}C.Ma=function(){if(this.u=null,nh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=_r(Ut(this.jb,this),e)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gt(10),ji(this),nh(this))};function ta(e){e.B!=null&&($.clearTimeout(e.B),e.B=null)}function nh(e){e.g=new Er(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Te(e.wa);at(t,"RID","rpc"),at(t,"SID",e.K),at(t,"AID",e.V),at(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&at(t,"TO",e.qa),at(t,"TYPE","xmlhttp"),Ir(e,t),e.o&&e.s&&Xo(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Mi(Te(t)),n.u=null,n.S=!0,Vl(n,e)}C.ib=function(){this.v!=null&&(this.v=null,ji(this),Zo(this),Gt(19))};function ui(e){e.v!=null&&($.clearTimeout(e.v),e.v=null)}function rh(e,t){var n=null;if(e.g==t){ui(e),ta(e),e.g=null;var r=2}else if(no(e.i,t))n=t.F,zl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Vi(),Ot(r,new Cl(r,n)),Ui(e)}else eh(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Ry(e,t)||r==2&&Zo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ze(e,5);break;case 4:ze(e,10);break;case 3:ze(e,6);break;default:ze(e,2)}}}function ih(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ze(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ut(e.pb,e);n||(n=new Ke("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||ai(n,"https"),Mi(n)),Ey(n.toString(),r)}else Gt(2);e.H=0,e.h&&e.h.za(t),sh(e),Zl(e)}C.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Gt(2)):(this.l.info("Failed to ping google.com"),Gt(1))};function sh(e){if(e.H=0,e.ma=[],e.h){const t=Gl(e.i);(t.length!=0||e.j.length!=0)&&(mc(e.ma,t),mc(e.ma,e.j),e.i.i.length=0,Oo(e.j),e.j.length=0),e.h.ya()}}function oh(e,t,n){var r=n instanceof Ke?Te(n):new Ke(n);if(r.g!="")t&&(r.g=t+"."+r.g),ci(r,r.m);else{var i=$.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ke(null);r&&ai(s,r),t&&(s.g=t),i&&ci(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&at(r,n,t),at(r,"VER",e.ra),Ir(e,r),r}function ah(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new dt(new Li({ob:n})):new dt(e.va),t.Oa(e.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function ch(){}C=ch.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function li(){if(yn&&!(10<=Number($g)))throw Error("Environmental error: no available transport.")}li.prototype.g=function(e,t){return new Jt(e,t)};function Jt(e,t){Ct.call(this),this.g=new Jl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Jn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Jn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new bn(this)}bt(Jt,Ct);Jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=oh(e,null,e.Y),Ui(e)};Jt.prototype.close=function(){Jo(this.g)};Jt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Bo(e),e=n);t.j.push(new my(t.fb++,e)),t.H==3&&Ui(t)};Jt.prototype.N=function(){this.g.h=null,delete this.j,Jo(this.g),delete this.g,Jt.$.N.call(this)};function uh(e){Ho.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}bt(uh,Ho);function lh(){Ko.call(this),this.status=1}bt(lh,Ko);function bn(e){this.g=e}bt(bn,ch);bn.prototype.Ba=function(){Ot(this.g,"a")};bn.prototype.Aa=function(e){Ot(this.g,new uh(e))};bn.prototype.za=function(e){Ot(this.g,new lh)};bn.prototype.ya=function(){Ot(this.g,"b")};function Cy(){this.blockSize=-1}function ie(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(ie,Cy);ie.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ts(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ie.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ts(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ts(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ts(this,r),i=0;break}}this.h=i,this.i+=t};ie.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function rt(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var by={};function ea(e){return-128<=e&&128>e?Mg(e,function(t){return new rt([t|0],0>t?-1:0)}):new rt([e|0],0>e?-1:0)}function ue(e){if(isNaN(e)||!isFinite(e))return ln;if(0>e)return Nt(ue(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ro;return new rt(t,0)}function hh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Nt(hh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ue(Math.pow(t,8)),r=ln,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ue(Math.pow(t,s)),r=r.R(s).add(ue(o))):(r=r.R(n),r=r.add(ue(o)))}return r}var ro=4294967296,ln=ea(0),io=ea(1),Rc=ea(16777216);C=rt.prototype;C.ea=function(){if(te(this))return-Nt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ro+r)*t,t*=ro}return e};C.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(ve(this))return"0";if(te(this))return"-"+Nt(this).toString(e);for(var t=ue(Math.pow(e,6)),n=this,r="";;){var i=di(n,t).g;n=hi(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,ve(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function ve(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function te(e){return e.h==-1}C.X=function(e){return e=hi(this,e),te(e)?-1:ve(e)?0:1};function Nt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new rt(n,~e.h).add(io)}C.abs=function(){return te(this)?Nt(this):this};C.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new rt(n,n[n.length-1]&-2147483648?-1:0)};function hi(e,t){return e.add(Nt(t))}C.R=function(e){if(ve(this)||ve(e))return ln;if(te(this))return te(e)?Nt(this).R(Nt(e)):Nt(Nt(this).R(e));if(te(e))return Nt(this.R(Nt(e)));if(0>this.X(Rc)&&0>e.X(Rc))return ue(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Ur(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Ur(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ur(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ur(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new rt(n,0)};function Ur(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Mn(e,t){this.g=e,this.h=t}function di(e,t){if(ve(t))throw Error("division by zero");if(ve(e))return new Mn(ln,ln);if(te(e))return t=di(Nt(e),t),new Mn(Nt(t.g),Nt(t.h));if(te(t))return t=di(e,Nt(t)),new Mn(Nt(t.g),t.h);if(30<e.g.length){if(te(e)||te(t))throw Error("slowDivide_ only works with positive integers.");for(var n=io,r=t;0>=r.X(e);)n=Cc(n),r=Cc(r);var i=sn(n,1),s=sn(r,1);for(r=sn(r,2),n=sn(n,2);!ve(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=sn(r,1),n=sn(n,1)}return t=hi(e,i.R(t)),new Mn(i,t)}for(i=ln;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ue(n),o=s.R(t);te(o)||0<o.X(e);)n-=r,s=ue(n),o=s.R(t);ve(s)&&(s=io),i=i.add(s),e=hi(e,o)}return new Mn(i,e)}C.gb=function(e){return di(this,e).h};C.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new rt(n,this.h&e.h)};C.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new rt(n,this.h|e.h)};C.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new rt(n,this.h^e.h)};function Cc(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new rt(n,e.h)}function sn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new rt(i,e.h)}li.prototype.createWebChannel=li.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;Ni.NO_ERROR=0;Ni.TIMEOUT=8;Ni.HTTP_ERROR=6;bl.COMPLETE="complete";Pl.EventType=vr;vr.OPEN="a";vr.CLOSE="b";vr.ERROR="c";vr.MESSAGE="d";Ct.prototype.listen=Ct.prototype.O;dt.prototype.listenOnce=dt.prototype.P;dt.prototype.getLastError=dt.prototype.Sa;dt.prototype.getLastErrorCode=dt.prototype.Ia;dt.prototype.getStatus=dt.prototype.da;dt.prototype.getResponseJson=dt.prototype.Wa;dt.prototype.getResponseText=dt.prototype.ja;dt.prototype.send=dt.prototype.ha;dt.prototype.setWithCredentials=dt.prototype.Oa;ie.prototype.digest=ie.prototype.l;ie.prototype.reset=ie.prototype.reset;ie.prototype.update=ie.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=ue;rt.fromString=hh;var Py=function(){return new li},xy=function(){return Vi()},Is=Ni,Dy=bl,Vy=en,bc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Br=Pl,Ny=dt,ky=ie,hn=rt;const Pc="@firebase/firestore";/**
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
 */class $t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Pn="10.8.0";/**
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
 */const Ye=new Vo("@firebase/firestore");function Ln(){return Ye.logLevel}function R(e,...t){if(Ye.logLevel<=Y.DEBUG){const n=t.map(na);Ye.debug(`Firestore (${Pn}): ${e}`,...n)}}function pe(e,...t){if(Ye.logLevel<=Y.ERROR){const n=t.map(na);Ye.error(`Firestore (${Pn}): ${e}`,...n)}}function _n(e,...t){if(Ye.logLevel<=Y.WARN){const n=t.map(na);Ye.warn(`Firestore (${Pn}): ${e}`,...n)}}function na(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function L(e="Unexpected state"){const t=`FIRESTORE (${Pn}) INTERNAL ASSERTION FAILED: `+e;throw pe(t),new Error(t)}function st(e,t){e||L()}function B(e,t){return e}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Me{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ee{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class dh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n($t.UNAUTHENTICATED))}shutdown(){}}class My{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ly{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ee,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ee)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new dh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string"),new $t(t)}}class Fy{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $y{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Fy(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uy{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(st(typeof n.token=="string"),this.R=n.token,new jy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function By(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=By(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function X(e,t){return e<t?-1:e>t?1:0}function vn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Tt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new Tt(0,0))}static max(){return new U(new Tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class or{constructor(t,n,r){n===void 0?n=0:n>t.length&&L(),r===void 0?r=t.length-n:r>t.length-n&&L(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return or.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof or?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ct extends or{construct(t,n,r){return new ct(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ct(n)}static emptyPath(){return new ct([])}}const qy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends or{construct(t,n,r){return new kt(t,n,r)}static isValidIdentifier(t){return qy.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(ct.fromString(t))}static fromName(t){return new O(ct.fromString(t).popFirst(5))}static empty(){return new O(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ct.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new ct(t.slice()))}}function zy(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new Ve(i,O.empty(),t)}function Gy(e){return new Ve(e.readTime,e.key,-1)}class Ve{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ve(U.min(),O.empty(),-1)}static max(){return new Ve(U.max(),O.empty(),-1)}}function Wy(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=O.comparator(e.documentKey,t.documentKey),n!==0?n:X(e.largestBatchId,t.largestBatchId))}/**
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
 */const Hy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ar(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==Hy)throw e;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):v.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):v.reject(n)}static resolve(t){return new v((n,r)=>{n(t)})}static reject(t){return new v((n,r)=>{r(t)})}static waitFor(t){return new v((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=v.resolve(!1);for(const r of t)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new v((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new v((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class ra{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Ee,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new zn(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ia(r.target.error);this.V.reject(new zn(t,i))}}static open(t,n,r,i){try{return new ra(n,t.transaction(i,r))}catch(s){throw new zn(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(R("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Yy(n)}}class Ge{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ge.S(ii())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return R("SimpleDb","Removing database:",t),Be(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Do())return!1;if(Ge.C())return!0;const t=ii(),n=Ge.S(t),r=0<n&&n<10,i=Ge.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new zn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new D(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new zn(t,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ra.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Qy{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Be(this.k.delete())}}class zn extends D{constructor(t,n){super(_.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Sr(e){return e.name==="IndexedDbTransactionError"}class Yy{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Be(r)}add(t){return R("SimpleDb","ADD",this.store.name,t,t),Be(this.store.add(t))}get(t){return Be(this.store.get(t)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return R("SimpleDb","DELETE",this.store.name,t),Be(this.store.delete(t))}count(){return R("SimpleDb","COUNT",this.store.name),Be(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new v((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new v((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new v((r,i)=>{n.onerror=s=>{const o=ia(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new v((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Qy(a),u=n(a.primaryKey,a.value,c);if(u instanceof v){const l=u.catch(h=>(c.done(),v.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>v.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Be(e){return new v((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=ia(r.target.error);n(i)}})}let xc=!1;function ia(e){const t=Ge.S(ii());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xc||(xc=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class sa{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}sa._e=-1;function Bi(e){return e==null}function fi(e){return e===0&&1/e==-1/0}function Xy(e){return typeof e=="number"&&Number.isInteger(e)&&!fi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function nn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ph(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ht{constructor(t,n){this.comparator=t,this.root=n||Vt.EMPTY}insert(t,n){return new ht(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new ht(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qr(this.root,t,this.comparator,!0)}}class qr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Vt.RED,this.left=i??Vt.EMPTY,this.right=s??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Vt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(t){this.comparator=t,this.data=new ht(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(t){return new Vc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Mt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Mt(this.comparator);return n.data=t,n}}class Vc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Qt([])}unionWith(t){let n=new Mt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Qt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return vn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class mh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mh("Invalid base64 string: "+s):s}}(t);return new qt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const Jy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ne(e){if(st(!!e),typeof e=="string"){let t=0;const n=Jy.exec(e);if(st(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vt(e.seconds),nanos:vt(e.nanos)}}function vt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xe(e){return typeof e=="string"?qt.fromBase64String(e):qt.fromUint8Array(e)}/**
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
 */function oa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function aa(e){const t=e.mapValue.fields.__previous_value__;return oa(t)?aa(t):t}function ar(e){const t=Ne(e.mapValue.fields.__local_write_time__.timestampValue);return new Tt(t.seconds,t.nanos)}/**
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
 */class Zy{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class cr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof cr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const zr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Je(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oa(e)?4:t_(e)?9007199254740991:10:L()}function me(e,t){if(e===t)return!0;const n=Je(e);if(n!==Je(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ar(e).isEqual(ar(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ne(i.timestampValue),a=Ne(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Xe(i.bytesValue).isEqual(Xe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return vt(i.geoPointValue.latitude)===vt(s.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return vt(i.integerValue)===vt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=vt(i.doubleValue),a=vt(s.doubleValue);return o===a?fi(o)===fi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return vn(e.arrayValue.values||[],t.arrayValue.values||[],me);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Dc(o)!==Dc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!me(o[c],a[c])))return!1;return!0}(e,t);default:return L()}}function ur(e,t){return(e.values||[]).find(n=>me(n,t))!==void 0}function En(e,t){if(e===t)return 0;const n=Je(e),r=Je(t);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=vt(s.integerValue||s.doubleValue),c=vt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Nc(e.timestampValue,t.timestampValue);case 4:return Nc(ar(e),ar(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Xe(s),c=Xe(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=X(a[u],c[u]);if(l!==0)return l}return X(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=X(vt(s.latitude),vt(o.latitude));return a!==0?a:X(vt(s.longitude),vt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=En(a[u],c[u]);if(l)return l}return X(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===zr.mapValue&&o===zr.mapValue)return 0;if(s===zr.mapValue)return 1;if(o===zr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=X(c[h],l[h]);if(d!==0)return d;const p=En(a[c[h]],u[l[h]]);if(p!==0)return p}return X(c.length,l.length)}(e.mapValue,t.mapValue);default:throw L()}}function Nc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return X(e,t);const n=Ne(e),r=Ne(t),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function wn(e){return so(e)}function so(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ne(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Xe(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return O.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=so(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${so(n.fields[o])}`;return i+"}"}(e.mapValue):L()}function kc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function oo(e){return!!e&&"integerValue"in e}function ca(e){return!!e&&"arrayValue"in e}function Oc(e){return!!e&&"nullValue"in e}function Mc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Yr(e){return!!e&&"mapValue"in e}function Gn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return nn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Gn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Gn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function t_(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ht{constructor(t){this.value=t}static empty(){return new Ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Yr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gn(n)}setAll(t){let n=kt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Gn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Yr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return me(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){nn(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ht(Gn(this.value))}}function gh(e){const t=[];return nn(e.fields,(n,r)=>{const i=new kt([n]);if(Yr(r)){const s=gh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Qt(t)}/**
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
 */class jt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new jt(t,0,U.min(),U.min(),U.min(),Ht.empty(),0)}static newFoundDocument(t,n,r,i){return new jt(t,1,n,U.min(),r,i,0)}static newNoDocument(t,n){return new jt(t,2,n,U.min(),U.min(),Ht.empty(),0)}static newUnknownDocument(t,n){return new jt(t,3,n,U.min(),U.min(),Ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pi{constructor(t,n){this.position=t,this.inclusive=n}}function Lc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=En(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!me(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class mi{constructor(t,n="asc"){this.field=t,this.dir=n}}function e_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class yh{}class Et extends yh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new r_(t,n,r):n==="array-contains"?new o_(t,r):n==="in"?new a_(t,r):n==="not-in"?new c_(t,r):n==="array-contains-any"?new u_(t,r):new Et(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new i_(t,r):new s_(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(En(n,this.value)):n!==null&&Je(this.value)===Je(n)&&this.matchesComparison(En(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends yh{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new se(t,n)}matches(t){return _h(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _h(e){return e.op==="and"}function vh(e){return n_(e)&&_h(e)}function n_(e){for(const t of e.filters)if(t instanceof se)return!1;return!0}function ao(e){if(e instanceof Et)return e.field.canonicalString()+e.op.toString()+wn(e.value);if(vh(e))return e.filters.map(t=>ao(t)).join(",");{const t=e.filters.map(n=>ao(n)).join(",");return`${e.op}(${t})`}}function Eh(e,t){return e instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.field.isEqual(i.field)&&me(r.value,i.value)}(e,t):e instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Eh(o,i.filters[a]),!0):!1}(e,t):void L()}function wh(e){return e instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${wn(n.value)}`}(e):e instanceof se?function(n){return n.op.toString()+" {"+n.getFilters().map(wh).join(" ,")+"}"}(e):"Filter"}class r_ extends Et{constructor(t,n,r){super(t,n,r),this.key=O.fromName(r.referenceValue)}matches(t){const n=O.comparator(t.key,this.key);return this.matchesComparison(n)}}class i_ extends Et{constructor(t,n){super(t,"in",n),this.keys=Th("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class s_ extends Et{constructor(t,n){super(t,"not-in",n),this.keys=Th("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Th(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class o_ extends Et{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ca(n)&&ur(n.arrayValue,this.value)}}class a_ extends Et{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ur(this.value.arrayValue,n)}}class c_ extends Et{constructor(t,n){super(t,"not-in",n)}matches(t){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ur(this.value.arrayValue,n)}}class u_ extends Et{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ur(this.value.arrayValue,r))}}/**
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
 */class l_{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function $c(e,t=null,n=[],r=[],i=null,s=null,o=null){return new l_(e,t,n,r,i,s,o)}function ua(e){const t=B(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ao(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>wn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>wn(r)).join(",")),t.ce=n}return t.ce}function la(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!e_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Eh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fc(e.startAt,t.startAt)&&Fc(e.endAt,t.endAt)}function co(e){return O.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Rr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function h_(e,t,n,r,i,s,o,a){return new Rr(e,t,n,r,i,s,o,a)}function Ih(e){return new Rr(e)}function jc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ah(e){return e.collectionGroup!==null}function Wn(e){const t=B(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mt(kt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new mi(s,r))}),n.has(kt.keyField().canonicalString())||t.le.push(new mi(kt.keyField(),r))}return t.le}function he(e){const t=B(e);return t.he||(t.he=d_(t,Wn(e))),t.he}function d_(e,t){if(e.limitType==="F")return $c(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new mi(i.field,s)});const n=e.endAt?new pi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new pi(e.startAt.position,e.startAt.inclusive):null;return $c(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function uo(e,t){const n=e.filters.concat([t]);return new Rr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function lo(e,t,n){return new Rr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qi(e,t){return la(he(e),he(t))&&e.limitType===t.limitType}function Sh(e){return`${ua(he(e))}|lt:${e.limitType}`}function on(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wh(i)).join(", ")}]`),Bi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wn(i)).join(",")),`Target(${r})`}(he(e))}; limitType=${e.limitType})`}function zi(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Wn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Lc(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Wn(r),i)||r.endAt&&!function(o,a,c){const u=Lc(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Wn(r),i))}(e,t)}function f_(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Rh(e){return(t,n)=>{let r=!1;for(const i of Wn(e)){const s=p_(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function p_(e,t,n){const r=e.field.isKeyField()?O.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?En(c,u):L()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class xn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){nn(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return ph(this.inner)}size(){return this.innerSize}}/**
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
 */const m_=new ht(O.comparator);function Ie(){return m_}const Ch=new ht(O.comparator);function jn(...e){let t=Ch;for(const n of e)t=t.insert(n.key,n);return t}function bh(e){let t=Ch;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function We(){return Hn()}function Ph(){return Hn()}function Hn(){return new xn(e=>e.toString(),(e,t)=>e.isEqual(t))}const g_=new ht(O.comparator),y_=new Mt(O.comparator);function z(...e){let t=y_;for(const n of e)t=t.add(n);return t}const __=new Mt(X);function v_(){return __}/**
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
 */function xh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fi(t)?"-0":t}}function Dh(e){return{integerValue:""+e}}function E_(e,t){return Xy(t)?Dh(t):xh(e,t)}/**
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
 */class Gi{constructor(){this._=void 0}}function w_(e,t,n){return e instanceof gi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oa(s)&&(s=aa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof lr?Nh(e,t):e instanceof hr?kh(e,t):function(i,s){const o=Vh(i,s),a=Uc(o)+Uc(i.Ie);return oo(o)&&oo(i.Ie)?Dh(a):xh(i.serializer,a)}(e,t)}function T_(e,t,n){return e instanceof lr?Nh(e,t):e instanceof hr?kh(e,t):n}function Vh(e,t){return e instanceof yi?function(r){return oo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class gi extends Gi{}class lr extends Gi{constructor(t){super(),this.elements=t}}function Nh(e,t){const n=Oh(t);for(const r of e.elements)n.some(i=>me(i,r))||n.push(r);return{arrayValue:{values:n}}}class hr extends Gi{constructor(t){super(),this.elements=t}}function kh(e,t){let n=Oh(t);for(const r of e.elements)n=n.filter(i=>!me(i,r));return{arrayValue:{values:n}}}class yi extends Gi{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Uc(e){return vt(e.integerValue||e.doubleValue)}function Oh(e){return ca(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function I_(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof lr&&i instanceof lr||r instanceof hr&&i instanceof hr?vn(r.elements,i.elements,me):r instanceof yi&&i instanceof yi?me(r.Ie,i.Ie):r instanceof gi&&i instanceof gi}(e.transform,t.transform)}class A_{constructor(t,n){this.version=t,this.transformResults=n}}class de{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new de}static exists(t){return new de(void 0,t)}static updateTime(t){return new de(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wi{}function Mh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Fh(e.key,de.none()):new Cr(e.key,e.data,de.none());{const n=e.data,r=Ht.empty();let i=new Mt(kt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $e(e.key,r,new Qt(i.toArray()),de.none())}}function S_(e,t,n){e instanceof Cr?function(i,s,o){const a=i.value.clone(),c=qc(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof $e?function(i,s,o){if(!Xr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Lh(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Kn(e,t,n,r){return e instanceof Cr?function(s,o,a,c){if(!Xr(s.precondition,o))return a;const u=s.value.clone(),l=zc(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof $e?function(s,o,a,c){if(!Xr(s.precondition,o))return a;const u=zc(s.fieldTransforms,c,o),l=o.data;return l.setAll(Lh(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Xr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function R_(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Vh(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Bc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vn(r,i,(s,o)=>I_(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Cr extends Wi{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $e extends Wi{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function qc(e,t,n){const r=new Map;st(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,T_(o,a,n[i]))}return r}function zc(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,w_(s,o,t))}return r}class Fh extends Wi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class C_ extends Wi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b_{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&S_(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Kn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Kn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Ph();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Mh(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),z())}isEqual(t){return this.batchId===t.batchId&&vn(this.mutations,t.mutations,(n,r)=>Bc(n,r))&&vn(this.baseMutations,t.baseMutations,(n,r)=>Bc(n,r))}}class ha{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){st(t.mutations.length===r.length);let i=function(){return g_}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ha(t,n,r,i)}}/**
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
 */class P_{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class x_{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var _t,K;function D_(e){switch(e){default:return L();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function $h(e){if(e===void 0)return pe("GRPC error has no .code"),_.UNKNOWN;switch(e){case _t.OK:return _.OK;case _t.CANCELLED:return _.CANCELLED;case _t.UNKNOWN:return _.UNKNOWN;case _t.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case _t.INTERNAL:return _.INTERNAL;case _t.UNAVAILABLE:return _.UNAVAILABLE;case _t.UNAUTHENTICATED:return _.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case _t.NOT_FOUND:return _.NOT_FOUND;case _t.ALREADY_EXISTS:return _.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return _.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case _t.ABORTED:return _.ABORTED;case _t.OUT_OF_RANGE:return _.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return _.UNIMPLEMENTED;case _t.DATA_LOSS:return _.DATA_LOSS;default:return L()}}(K=_t||(_t={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function V_(){return new TextEncoder}/**
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
 */const N_=new hn([4294967295,4294967295],0);function Gc(e){const t=V_().encode(e),n=new ky;return n.update(t),new Uint8Array(n.digest())}function Wc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new hn([n,r],0),new hn([i,s],0)]}class da{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Un(`Invalid padding: ${n}`);if(r<0)throw new Un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Un(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=hn.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(hn.fromNumber(r)));return i.compare(N_)===1&&(i=new hn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Gc(t),[r,i]=Wc(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new da(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Gc(t),[r,i]=Wc(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hi{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,br.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Hi(U.min(),i,new ht(X),Ie(),z())}}class br{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new br(r,n,z(),z(),z())}}/**
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
 */class Jr{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class jh{constructor(t,n){this.targetId=t,this.fe=n}}class Uh{constructor(t,n,r=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Hc{constructor(){this.ge=0,this.pe=Qc(),this.ye=qt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=z(),n=z(),r=z();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new br(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Qc()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,st(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class k_{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ie(),this.Qe=Kc(),this.Ke=new ht(X)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(co(s))if(r===0){const o=new O(s.path);this.We(n,o,jt.newNoDocument(o,U.min()))}else st(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Xe(r).toUint8Array()}catch(c){if(c instanceof mh)return _n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new da(o,i,s)}catch(c){return _n(c instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&co(a.target)){const c=new O(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,jt.newNoDocument(c,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=z();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new Hi(t,n,this.Ke,this.qe,r);return this.qe=Ie(),this.Qe=Kc(),this.Ke=new ht(X),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Hc,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Mt(X),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||R("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Hc),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Kc(){return new ht(O.comparator)}function Qc(){return new ht(O.comparator)}const O_={asc:"ASCENDING",desc:"DESCENDING"},M_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L_={and:"AND",or:"OR"};class F_{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ho(e,t){return e.useProto3Json||Bi(t)?t:{value:t}}function _i(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $_(e,t){return _i(e,t.toTimestamp())}function fe(e){return st(!!e),U.fromTimestamp(function(n){const r=Ne(n);return new Tt(r.seconds,r.nanos)}(e))}function fa(e,t){return fo(e,t).canonicalString()}function fo(e,t){const n=function(i){return new ct(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function qh(e){const t=ct.fromString(e);return st(Kh(t)),t}function po(e,t){return fa(e.databaseId,t.path)}function As(e,t){const n=qh(t);if(n.get(1)!==e.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new O(Gh(n))}function zh(e,t){return fa(e.databaseId,t)}function j_(e){const t=qh(e);return t.length===4?ct.emptyPath():Gh(t)}function mo(e){return new ct(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Gh(e){return st(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Yc(e,t,n){return{name:po(e,t),fields:n.value.mapValue.fields}}function U_(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(st(l===void 0||typeof l=="string"),qt.fromBase64String(l||"")):(st(l===void 0||l instanceof Uint8Array),qt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?_.UNKNOWN:$h(u.code);return new D(l,u.message||"")}(o);n=new Uh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=As(e,r.document.name),s=fe(r.document.updateTime),o=r.document.createTime?fe(r.document.createTime):U.min(),a=new Ht({mapValue:{fields:r.document.fields}}),c=jt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Jr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=As(e,r.document),s=r.readTime?fe(r.readTime):U.min(),o=jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=As(e,r.document),s=r.removedTargetIds||[];n=new Jr([],s,i,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new x_(i,s),a=r.targetId;n=new jh(a,o)}}return n}function B_(e,t){let n;if(t instanceof Cr)n={update:Yc(e,t.key,t.value)};else if(t instanceof Fh)n={delete:po(e,t.key)};else if(t instanceof $e)n={update:Yc(e,t.key,t.data),updateMask:X_(t.fieldMask)};else{if(!(t instanceof C_))return L();n={verify:po(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof gi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof lr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw L()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(e,t.precondition)),n}function q_(e,t){return e&&e.length>0?(st(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?fe(i.updateTime):fe(s);return o.isEqual(U.min())&&(o=fe(s)),new A_(o,i.transformResults||[])}(n,t))):[]}function z_(e,t){return{documents:[zh(e,t.path)]}}function G_(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zh(e,i);const s=function(u){if(u.length!==0)return Hh(se.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:an(d.field),direction:K_(d.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ho(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:i}}function W_(e){let t=j_(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){st(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=Wh(h);return d instanceof se&&vh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new mi(cn(y.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Bi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new pi(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new pi(p,d)}(n.endAt)),h_(t,i,o,s,a,"F",c,u)}function H_(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Wh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cn(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=cn(n.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=cn(n.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cn(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(e):e.fieldFilter!==void 0?function(n){return Et.create(cn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return se.create(n.compositeFilter.filters.map(r=>Wh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(n.compositeFilter.op))}(e):L()}function K_(e){return O_[e]}function Q_(e){return M_[e]}function Y_(e){return L_[e]}function an(e){return{fieldPath:e.canonicalString()}}function cn(e){return kt.fromServerFormat(e.fieldPath)}function Hh(e){return e instanceof Et?function(n){if(n.op==="=="){if(Mc(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NAN"}};if(Oc(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mc(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NOT_NAN"}};if(Oc(n.value))return{unaryFilter:{field:an(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(n.field),op:Q_(n.op),value:n.value}}}(e):e instanceof se?function(n){const r=n.getFilters().map(i=>Hh(i));return r.length===1?r[0]:{compositeFilter:{op:Y_(n.op),filters:r}}}(e):L()}function X_(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Kh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Re{constructor(t,n,r,i,s=U.min(),o=U.min(),a=qt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class J_{constructor(t){this.ct=t}}function Z_(e){const t=W_({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?lo(t,t.limit,"L"):t}/**
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
 */class tv{constructor(){this._n=new ev}addToCollectionParentIndex(t,n){return this._n.add(n),v.resolve()}getCollectionParents(t,n){return v.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return v.resolve()}deleteFieldIndex(t,n){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,n){return v.resolve()}getDocumentsMatchingTarget(t,n){return v.resolve(null)}getIndexType(t,n){return v.resolve(0)}getFieldIndexes(t,n){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,n){return v.resolve(Ve.min())}getMinOffsetFromCollectionGroup(t,n){return v.resolve(Ve.min())}updateCollectionGroup(t,n,r){return v.resolve()}updateIndexEntries(t,n){return v.resolve()}}class ev{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Mt(ct.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Mt(ct.comparator)).toArray()}}/**
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
 */class Tn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Tn(0)}static Bn(){return new Tn(-1)}}/**
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
 */class nv{constructor(){this.changes=new xn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class rv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class iv{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Kn(r.mutation,i,Qt.empty(),Tt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=z()){const i=We();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=jn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=We();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,z()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ie();const o=Hn(),a=function(){return Hn()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof $e)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Kn(l.mutation,u,l.mutation.getFieldMask(),Tt.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new rv(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Hn();let i=new ht((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Qt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||z()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ph();l.forEach(d=>{if(!s.has(d)){const p=Mh(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ah(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):v.resolve(We());let a=-1,c=s;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?v.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,z())).next(l=>({batchId:a,changes:bh(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new O(n)).next(r=>{let i=jn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=jn();return this.indexManager.getCollectionParents(t,s).next(a=>v.forEach(a,c=>{const u=function(h,d){return new Rr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,jt.newInvalidDocument(l)))});let a=jn();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&Kn(l.mutation,u,Qt.empty(),Tt.now()),zi(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class sv{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return v.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fe(i.createTime)}}(n)),v.resolve()}getNamedQuery(t,n){return v.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Z_(i.bundledQuery),readTime:fe(i.readTime)}}(n)),v.resolve()}}/**
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
 */class ov{constructor(){this.overlays=new ht(O.comparator),this.hr=new Map}getOverlay(t,n){return v.resolve(this.overlays.get(n))}getOverlays(t,n){const r=We();return v.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),v.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),v.resolve()}getOverlaysForCollection(t,n,r){const i=We(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new ht((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=We(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=We(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return v.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new P_(n,r));let s=this.hr.get(n);s===void 0&&(s=z(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class pa{constructor(){this.Pr=new Mt(Rt.Ir),this.Tr=new Mt(Rt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Rt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Rt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new O(new ct([])),r=new Rt(n,t),i=new Rt(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new O(new ct([])),r=new Rt(n,t),i=new Rt(n,t+1);let s=z();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Rt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Rt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return O.comparator(t.key,n.key)||X(t.pr,n.pr)}static Er(t,n){return X(t.pr,n.pr)||O.comparator(t.key,n.key)}}/**
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
 */class av{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Mt(Rt.Ir)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new b_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Rt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(t,n){return v.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Rt(n,0),i=new Rt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Mt(X);return n.forEach(i=>{const s=new Rt(i,0),o=new Rt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),v.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Rt(new O(s),0);let a=new Mt(X);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.pr)),!0)},o),v.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){st(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return v.forEach(n.mutations,i=>{const s=new Rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Rt(n,0),i=this.wr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cv{constructor(t){this.vr=t,this.docs=function(){return new ht(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(t,n){let r=Ie();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ie();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wy(Gy(l),r)<=0||(i.has(l.key)||zi(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(t,n,r,i){L()}Fr(t,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new uv(this)}getSize(t){return v.resolve(this.size)}}class uv extends nv{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),v.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class lv{constructor(t){this.persistence=t,this.Mr=new xn(n=>ua(n),la),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pa,this.targetCount=0,this.Br=Tn.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),v.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new Tn(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,v.resolve()}updateTargetData(t,n){return this.qn(n),v.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return v.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),v.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),v.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return v.resolve(r)}containsKey(t,n){return v.resolve(this.Nr.containsKey(n))}}/**
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
 */class hv{constructor(t,n){this.Lr={},this.overlays={},this.kr=new sa(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new lv(this),this.indexManager=new tv,this.remoteDocumentCache=function(i){return new cv(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new J_(n),this.$r=new sv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ov,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new av(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){R("MemoryPersistence","Starting transaction:",t);const i=new dv(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return v.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class dv extends Ky{constructor(t){super(),this.currentSequenceNumber=t}}class ma{constructor(t){this.persistence=t,this.zr=new pa,this.jr=null}static Hr(t){return new ma(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),v.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),v.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Jr,r=>{const i=O.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return v.or([()=>v.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class ga{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=z(),i=z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ga(t,n.fromCache,r,i)}}/**
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
 */class fv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class pv{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return mm()?8:Ge.v(ii())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fv;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Ln()<=Y.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",on(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),v.resolve()):(Ln()<=Y.DEBUG&&R("QueryEngine","Query:",on(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ln()<=Y.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",on(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,he(n))):v.resolve())}ji(t,n){if(jc(n))return v.resolve(null);let r=he(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=lo(n,null,"F"),r=he(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=z(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,lo(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,i){return jc(n)||i.isEqual(U.min())?v.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?v.resolve(null):(Ln()<=Y.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),on(n)),this.es(t,o,n,zy(i,-1)).next(a=>a))})}Zi(t,n){let r=new Mt(Rh(t));return n.forEach((i,s)=>{zi(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Ln()<=Y.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",on(n)),this.zi.getDocumentsMatchingQuery(t,n,Ve.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class mv{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new ht(X),this.rs=new xn(s=>ua(s),la),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new iv(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function gv(e,t,n,r){return new mv(e,t,n,r)}async function Qh(e,t){const n=B(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=z();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function yv(e,t){const n=B(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let p=v.resolve();return d.forEach(y=>{p=p.next(()=>l.getEntry(c,y)).next(E=>{const f=u.docVersions.get(y);st(f!==null),E.version.compareTo(f)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),l.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=z();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Yh(e){const t=B(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function _v(e,t){const n=B(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(qt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(E,f,V){return E.resumeToken.approximateByteSize()===0||f.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(d,p,l)&&a.push(n.Qr.updateTargetData(s,p))});let c=Ie(),u=z();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(vv(s,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(U.min())){const l=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.ns=i,s))}function vv(e,t,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ie();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function Ev(e,t){const n=B(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function wv(e,t){const n=B(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,v.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Re(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function go(e,t,n){const r=B(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Xc(e,t,n){const r=B(e);let i=U.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=B(c),d=h.rs.get(l);return d!==void 0?v.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,he(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:U.min(),n?s:z())).next(a=>(Tv(r,f_(t),a),{documents:a,hs:s})))}function Tv(e,t,n){let r=e.ss.get(t)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Jc{constructor(){this.activeTargetIds=v_()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Iv{constructor(){this.no=new Jc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Jc,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Av{io(t){}shutdown(){}}/**
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
 */class Zc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gr=null;function Ss(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
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
 */const Sv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Rv{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Ft="WebChannelConnection";class Cv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Ss(),c=this.bo(n,r.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,c,u,i).then(l=>(R("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw _n("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=Sv[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Ss();return new Promise((o,a)=>{const c=new Ny;c.setWithCredentials(!0),c.listenOnce(Dy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Is.NO_ERROR:const l=c.getResponseJson();R(Ft,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Is.TIMEOUT:R(Ft,`RPC '${t}' ${s} timed out`),a(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const h=c.getStatus();if(R(Ft,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(f){const V=f.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(V)>=0?V:_.UNKNOWN}(p.status);a(new D(y,p.message))}else a(new D(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new D(_.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{R(Ft,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);R(Ft,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const i=Ss(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Py(),a=xy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");R(Ft,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const y=new Rv({lo:f=>{p?R(Ft,`Not sending because RPC '${t}' stream ${i} is closed:`,f):(d||(R(Ft,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),R(Ft,`RPC '${t}' stream ${i} sending:`,f),h.send(f))},ho:()=>h.close()}),E=(f,V,T)=>{f.listen(V,I=>{try{T(I)}catch(S){setTimeout(()=>{throw S},0)}})};return E(h,Br.EventType.OPEN,()=>{p||R(Ft,`RPC '${t}' stream ${i} transport opened.`)}),E(h,Br.EventType.CLOSE,()=>{p||(p=!0,R(Ft,`RPC '${t}' stream ${i} transport closed`),y.Vo())}),E(h,Br.EventType.ERROR,f=>{p||(p=!0,_n(Ft,`RPC '${t}' stream ${i} transport errored:`,f),y.Vo(new D(_.UNAVAILABLE,"The operation could not be completed")))}),E(h,Br.EventType.MESSAGE,f=>{var V;if(!p){const T=f.data[0];st(!!T);const I=T,S=I.error||((V=I[0])===null||V===void 0?void 0:V.error);if(S){R(Ft,`RPC '${t}' stream ${i} received error:`,S);const g=S.status;let nt=function(It){const wt=_t[It];if(wt!==void 0)return $h(wt)}(g),yt=S.message;nt===void 0&&(nt=_.INTERNAL,yt="Unknown error status: "+g+" with message "+S.message),p=!0,y.Vo(new D(nt,yt)),h.close()}else R(Ft,`RPC '${t}' stream ${i} received:`,T),y.mo(T)}}),E(a,Vy.STAT_EVENT,f=>{f.stat===bc.PROXY?R(Ft,`RPC '${t}' stream ${i} detected buffering proxy`):f.stat===bc.NOPROXY&&R(Ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Rs(){return typeof document<"u"?document:null}/**
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
 */function Ki(e){return new F_(e,!0)}/**
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
 */class Xh{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Jh{constructor(t,n,r,i,s,o,a,c){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Xh(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(pe(n.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new D(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bv extends Jh{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=U_(this.serializer,t),r=function(s){if(!("targetChange"in s))return U.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?fe(o.readTime):U.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=mo(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=co(c)?{documents:z_(s,c)}:{query:G_(s,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Bh(s,o.resumeToken);const u=ho(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(U.min())>0){a.readTime=_i(s,o.snapshotVersion.toTimestamp());const u=ho(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=H_(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=mo(this.serializer),n.removeTarget=t,this.t_(n)}}class Pv extends Jh{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(st(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=q_(t.writeResults,t.commitTime),r=fe(t.commitTime);return this.listener.T_(r,n)}return st(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=mo(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>B_(this.serializer,r))};this.t_(n)}}/**
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
 */class xv extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,fo(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(_.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,fo(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(_.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Dv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(pe(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Vv{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{rn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=B(c);u.v_.add(4),await Pr(u),u.x_.set("Unknown"),u.v_.delete(4),await Qi(u)}(this))})}),this.x_=new Dv(r,i)}}async function Qi(e){if(rn(e))for(const t of e.F_)await t(!0)}async function Pr(e){for(const t of e.F_)await t(!1)}function Zh(e,t){const n=B(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),va(n)?_a(n):Dn(n).Jo()&&ya(n,t))}function td(e,t){const n=B(e),r=Dn(n);n.C_.delete(t),r.Jo()&&ed(n,t),n.C_.size===0&&(r.Jo()?r.Xo():rn(n)&&n.x_.set("Unknown"))}function ya(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dn(e).c_(t)}function ed(e,t){e.O_.Oe(t),Dn(e).l_(t)}function _a(e){e.O_=new k_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Dn(e).start(),e.x_.p_()}function va(e){return rn(e)&&!Dn(e).Ho()&&e.C_.size>0}function rn(e){return B(e).v_.size===0}function nd(e){e.O_=void 0}async function Nv(e){e.C_.forEach((t,n)=>{ya(e,t)})}async function kv(e,t){nd(e),va(e)?(e.x_.S_(t),_a(e)):e.x_.set("Unknown")}async function Ov(e,t,n){if(e.x_.set("Online"),t instanceof Uh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vi(e,r)}else if(t instanceof Jr?e.O_.$e(t):t instanceof jh?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(U.min()))try{const r=await Yh(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.C_.get(u);l&&s.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.C_.get(c);if(!l)return;s.C_.set(c,l.withResumeToken(qt.EMPTY_BYTE_STRING,l.snapshotVersion)),ed(s,c);const h=new Re(l.target,c,u,l.sequenceNumber);ya(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await vi(e,r)}}async function vi(e,t,n){if(!Sr(t))throw t;e.v_.add(1),await Pr(e),e.x_.set("Offline"),n||(n=()=>Yh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Qi(e)})}function rd(e,t){return t().catch(n=>vi(e,n,t))}async function Yi(e){const t=B(e),n=ke(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Mv(t);)try{const i=await Ev(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,Lv(t,i)}catch(i){await vi(t,i)}id(t)&&sd(t)}function Mv(e){return rn(e)&&e.D_.length<10}function Lv(e,t){e.D_.push(t);const n=ke(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function id(e){return rn(e)&&!ke(e).Ho()&&e.D_.length>0}function sd(e){ke(e).start()}async function Fv(e){ke(e).d_()}async function $v(e){const t=ke(e);for(const n of e.D_)t.I_(n.mutations)}async function jv(e,t,n){const r=e.D_.shift(),i=ha.from(r,t,n);await rd(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Yi(e)}async function Uv(e,t){t&&ke(e).P_&&await async function(r,i){if(function(o){return D_(o)&&o!==_.ABORTED}(i.code)){const s=r.D_.shift();ke(r).Zo(),await rd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yi(r)}}(e,t),id(e)&&sd(e)}async function tu(e,t){const n=B(e);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=rn(n);n.v_.add(3),await Pr(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Qi(n)}async function Bv(e,t){const n=B(e);t?(n.v_.delete(2),await Qi(n)):t||(n.v_.add(2),await Pr(n),n.x_.set("Unknown"))}function Dn(e){return e.N_||(e.N_=function(n,r,i){const s=B(n);return s.R_(),new bv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Nv.bind(null,e),To:kv.bind(null,e),u_:Ov.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),va(e)?_a(e):e.x_.set("Unknown")):(await e.N_.stop(),nd(e))})),e.N_}function ke(e){return e.B_||(e.B_=function(n,r,i){const s=B(n);return s.R_(),new Pv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Fv.bind(null,e),To:Uv.bind(null,e),E_:$v.bind(null,e),T_:jv.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Yi(e)):(await e.B_.stop(),e.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class Ea{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ea(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(e,t){if(pe("AsyncQueue",`${t}: ${e}`),Sr(e))return new D(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class dn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=jn(),this.sortedSet=new ht(this.comparator)}static emptySet(t){return new dn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof dn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new dn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class eu{constructor(){this.L_=new ht(O.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):L():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class In{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new In(t,n,dn.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class qv{constructor(){this.q_=void 0,this.Q_=[]}}class zv{constructor(){this.queries=new xn(t=>Sh(t),qi),this.onlineState="Unknown",this.K_=new Set}}async function Gv(e,t){const n=B(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new qv),i)try{s.q_=await n.onListen(r)}catch(o){const a=wa(o,`Initialization of query '${on(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&Ta(n)}async function Wv(e,t){const n=B(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Hv(e,t){const n=B(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Ta(n)}function Kv(e,t,n){const r=B(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function Ta(e){e.K_.forEach(t=>{t.next()})}class Qv{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new In(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=In.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class od{constructor(t){this.key=t}}class ad{constructor(t){this.key=t}}class Yv{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=z(),this.mutatedKeys=z(),this.ua=Rh(t),this.ca=new dn(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new eu,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),p=zi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let f=!1;d&&p?d.data.isEqual(p.data)?y!==E&&(r.track({type:3,doc:p}),f=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),f=!0,(c&&this.ua(p,c)>0||u&&this.ua(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),f=!0):d&&!p&&(r.track({type:1,doc:d}),f=!0,(c||u)&&(a=!0)),f&&(p?(o=o.add(p),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,h)=>function(p,y){const E=f=>{switch(f){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return E(p)-E(y)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],c=this.aa.size===0&&this.current&&!i?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new In(this.query,t.ca,s,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new eu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=z(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new ad(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new od(r))}),n}Ra(t){this.oa=t.hs,this.aa=z();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return In.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Xv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jv{constructor(t){this.key=t,this.ma=!1}}class Zv{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new xn(a=>Sh(a),qi),this.pa=new Map,this.ya=new Set,this.wa=new ht(O.comparator),this.Sa=new Map,this.ba=new pa,this.Da={},this.Ca=new Map,this.va=Tn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function tE(e,t){const n=lE(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await wv(n.localStore,he(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await eE(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Zh(n.remoteStore,o)}return i}async function eE(e,t,n,r,i){e.Ma=(h,d,p)=>async function(E,f,V,T){let I=f.view.ha(V);I.Xi&&(I=await Xc(E.localStore,f.query,!1).then(({documents:yt})=>f.view.ha(yt,I)));const S=T&&T.targetChanges.get(f.targetId),g=T&&T.targetMismatches.get(f.targetId)!=null,nt=f.view.applyChanges(I,E.isPrimaryClient,S,g);return ru(E,f.targetId,nt.da),nt.snapshot}(e,h,d,p);const s=await Xc(e.localStore,t,!0),o=new Yv(t,s.hs),a=o.ha(s.documents),c=br.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);ru(e,n,u.da);const l=new Xv(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function nE(e,t){const n=B(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!qi(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await go(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),td(n.remoteStore,r.targetId),yo(n,r.targetId)}).catch(Ar)):(yo(n,r.targetId),await go(n.localStore,r.targetId,!0))}async function rE(e,t,n){const r=hE(e);try{const i=await function(o,a){const c=B(o),u=Tt.now(),l=a.reduce((p,y)=>p.add(y.key),z());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Ie(),E=z();return c.os.getEntries(p,l).next(f=>{y=f,y.forEach((V,T)=>{T.isValidDocument()||(E=E.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(f=>{h=f;const V=[];for(const T of a){const I=R_(T,h.get(T.key).overlayedDocument);I!=null&&V.push(new $e(T.key,I,gh(I.value.mapValue),de.exists(!0)))}return c.mutationQueue.addMutationBatch(p,u,V,a)}).next(f=>{d=f;const V=f.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(p,f.batchId,V)})}).then(()=>({batchId:d.batchId,changes:bh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new ht(X)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await xr(r,i.changes),await Yi(r.remoteStore)}catch(i){const s=wa(i,"Failed to persist write");n.reject(s)}}async function cd(e,t){const n=B(e);try{const r=await _v(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(st(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?st(o.ma):i.removedDocuments.size>0&&(st(o.ma),o.ma=!1))}),await xr(n,r,t)}catch(r){await Ar(r)}}function nu(e,t,n){const r=B(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=B(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&Ta(c)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function iE(e,t,n){const r=B(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new ht(O.comparator);o=o.insert(s,jt.newNoDocument(s,U.min()));const a=z().add(s),c=new Hi(U.min(),new Map,new ht(X),o,a);await cd(r,c),r.wa=r.wa.remove(s),r.Sa.delete(t),Ia(r)}else await go(r.localStore,t,!1).then(()=>yo(r,t,n)).catch(Ar)}async function sE(e,t){const n=B(e),r=t.batch.batchId;try{const i=await yv(n.localStore,t);ld(n,r,null),ud(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xr(n,i)}catch(i){await Ar(i)}}async function oE(e,t,n){const r=B(e);try{const i=await function(o,a){const c=B(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(st(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);ld(r,t,n),ud(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await xr(r,i)}catch(i){await Ar(i)}}function ud(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function ld(e,t,n){const r=B(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function yo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||hd(e,r)})}function hd(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(td(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Ia(e))}function ru(e,t,n){for(const r of n)r instanceof od?(e.ba.addReference(r.key,t),aE(e,r)):r instanceof ad?(R("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||hd(e,r.key)):L()}function aE(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(R("SyncEngine","New document in limbo: "+n),e.ya.add(r),Ia(e))}function Ia(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new O(ct.fromString(t)),r=e.va.next();e.Sa.set(r,new Jv(n)),e.wa=e.wa.insert(n,r),Zh(e.remoteStore,new Re(he(Ih(n.path)),r,"TargetPurposeLimboResolution",sa._e))}}async function xr(e,t,n){const r=B(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=ga.Ki(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fa.u_(i),await async function(c,u){const l=B(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,d=>v.forEach(d.qi,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>v.forEach(d.Qi,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Sr(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=l.ns.get(d),y=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(y);l.ns=l.ns.insert(d,E)}}}(r.localStore,s))}async function cE(e,t){const n=B(e);if(!n.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await Qh(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(c=>{c.reject(new D(_.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xr(n,r.us)}}function uE(e,t){const n=B(e),r=n.Sa.get(t);if(r&&r.ma)return z().add(r.key);{let i=z();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function lE(e){const t=B(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=cd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=iE.bind(null,t),t.fa.u_=Hv.bind(null,t.eventManager),t.fa.xa=Kv.bind(null,t.eventManager),t}function hE(e){const t=B(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oE.bind(null,t),t}class iu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ki(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return gv(this.persistence,new pv,t.initialUser,this.serializer)}createPersistence(t){return new hv(ma.Hr,this.serializer)}createSharedClientState(t){return new Iv}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dE{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cE.bind(null,this.syncEngine),await Bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zv}()}createDatastore(t){const n=Ki(t.databaseInfo.databaseId),r=function(s){return new Cv(s)}(t.databaseInfo);return function(s,o,a,c){return new xv(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Vv(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>nu(this.syncEngine,n,0),function(){return Zc.D()?new Zc:new Av}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){const h=new Zv(i,s,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=B(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Pr(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 *//**
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
 */class fE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):pe("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class pE{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=fh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=wa(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Cs(e,t){e.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Qh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function su(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gE(e);R("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>tu(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>tu(t.remoteStore,i)),e._onlineComponents=t}function mE(e){return e.name==="FirebaseError"?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function gE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mE(n))throw n;_n("Error using user provided cache. Falling back to memory cache: "+n),await Cs(e,new iu)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Cs(e,new iu);return e._offlineComponents}async function dd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await su(e,e._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await su(e,new dE))),e._onlineComponents}function yE(e){return dd(e).then(t=>t.syncEngine)}async function _E(e){const t=await dd(e),n=t.eventManager;return n.onListen=tE.bind(null,t.syncEngine),n.onUnlisten=nE.bind(null,t.syncEngine),n}function vE(e,t,n={}){const r=new Ee;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new fE({next:d=>{o.enqueueAndForget(()=>Wv(s,h)),d.fromCache&&c.source==="server"?u.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Qv(a,l,{includeMetadataChanges:!0,Z_:!0});return Gv(s,h)}(await _E(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function fd(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const ou=new Map;/**
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
 */function pd(e,t,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function EE(e,t,n,r){if(t===!0&&r===!0)throw new D(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function au(e){if(!O.isDocumentKey(e))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cu(e){if(O.isDocumentKey(e))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":L()}function An(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xi(e);throw new D(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class uu{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}EE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(_.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ji{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uu(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oy;switch(r.type){case"firstParty":return new $y(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ou.get(n);r&&(R("ComponentProvider","Removing Datastore"),ou.delete(n),r.terminate())}(this),Promise.resolve()}}function wE(e,t,n,r={}){var i;const s=(e=An(e,Ji))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=$t.MOCK_USER;else{a=dm(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new $t(u)}e._authCredentials=new My(new dh(a,c))}}/**
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
 */class Vn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Vn(this.firestore,t,this._query)}}class Yt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yt(this.firestore,t,this._key)}}class xe extends Vn{constructor(t,n,r){super(t,n,Ih(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yt(this.firestore,null,new O(t))}withConverter(t){return new xe(this.firestore,t,this._path)}}function Aa(e,t,...n){if(e=re(e),pd("collection","path",t),e instanceof Ji){const r=ct.fromString(t,...n);return cu(r),new xe(e,null,r)}{if(!(e instanceof Yt||e instanceof xe))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ct.fromString(t,...n));return cu(r),new xe(e.firestore,null,r)}}function md(e,t,...n){if(e=re(e),arguments.length===1&&(t=fh.newId()),pd("doc","path",t),e instanceof Ji){const r=ct.fromString(t,...n);return au(r),new Yt(e,null,new O(r))}{if(!(e instanceof Yt||e instanceof xe))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ct.fromString(t,...n));return au(r),new Yt(e.firestore,e instanceof xe?e.converter:null,new O(r))}}/**
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
 */class TE{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Xh(this,"async_queue_retry"),this._u=()=>{const n=Rs();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Rs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Rs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Ee;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Sr(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=Ea.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&L()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class Zi extends Ji{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new TE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yd(this),this._firestoreClient.terminate()}}function IE(e,t){const n=typeof e=="object"?e:ol(),r=typeof e=="string"?e:t||"(default)",i=mr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lm("firestore");s&&wE(i,...s)}return i}function gd(e){return e._firestoreClient||yd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function yd(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,u,l){return new Zy(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,fd(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new pE(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sn(qt.fromBase64String(t))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Sn(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Dr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function AE(){return new Dr("__name__")}/**
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
 */class Sa{constructor(t){this._methodName=t}}/**
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
 */class Ra{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
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
 */const SE=/^__.*__$/;class RE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new $e(t,this.data,this.fieldMask,n,this.fieldTransforms):new Cr(t,this.data,n,this.fieldTransforms)}}class _d{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new $e(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function vd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ca{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Ca(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Ei(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(vd(this.du)&&SE.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class CE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ki(t)}Su(t,n,r,i=!1){return new Ca({du:t,methodName:n,wu:r,path:kt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(e){const t=e._freezeSettings(),n=Ki(e._databaseId);return new CE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function bE(e,t,n,r,i,s={}){const o=e.Su(s.merge||s.mergeFields?2:0,t,n,i);Pa("Data must be an object, but it was:",o,r);const a=Ed(r,o);let c,u;if(s.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=_o(t,h,n);if(!o.contains(d))throw new D(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Td(l,d)||l.push(d)}c=new Qt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new RE(new Ht(a),c,u)}class ts extends Sa{_toFieldTransform(t){if(t.du!==2)throw t.du===1?t.pu(`${this._methodName}() can only appear at the top level of your update data`):t.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ts}}function PE(e,t,n,r){const i=e.Su(1,t,n);Pa("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();nn(r,(c,u)=>{const l=xa(t,c,n);u=re(u);const h=i.fu(l);if(u instanceof ts)s.push(l);else{const d=Vr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Qt(s);return new _d(o,a,i.fieldTransforms)}function xE(e,t,n,r,i,s){const o=e.Su(1,t,n),a=[_o(t,r,n)],c=[i];if(s.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(_o(t,s[d])),c.push(s[d+1]);const u=[],l=Ht.empty();for(let d=a.length-1;d>=0;--d)if(!Td(u,a[d])){const p=a[d];let y=c[d];y=re(y);const E=o.fu(p);if(y instanceof ts)u.push(p);else{const f=Vr(y,E);f!=null&&(u.push(p),l.set(p,f))}}const h=new Qt(u);return new _d(l,h,o.fieldTransforms)}function DE(e,t,n,r=!1){return Vr(n,e.Su(r?4:3,t))}function Vr(e,t){if(wd(e=re(e)))return Pa("Unsupported field value:",t,e),Ed(e,t);if(e instanceof Sa)return function(r,i){if(!vd(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Vr(a,i.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return E_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Tt.fromDate(r);return{timestampValue:_i(i.serializer,s)}}if(r instanceof Tt){const s=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_i(i.serializer,s)}}if(r instanceof Ra)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:Bh(i.serializer,r._byteString)};if(r instanceof Yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Xi(r)}`)}(e,t)}function Ed(e,t){const n={};return ph(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nn(e,(r,i)=>{const s=Vr(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Tt||e instanceof Ra||e instanceof Sn||e instanceof Yt||e instanceof Sa)}function Pa(e,t,n){if(!wd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xi(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function _o(e,t,n){if((t=re(t))instanceof Dr)return t._internalPath;if(typeof t=="string")return xa(e,t);throw Ei("Field path arguments must be of type string or ",e,!1,void 0,n)}const VE=new RegExp("[~\\*/\\[\\]]");function xa(e,t,n){if(t.search(VE)>=0)throw Ei(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Dr(...t.split("."))._internalPath}catch{throw Ei(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ei(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new D(_.INVALID_ARGUMENT,a+e+c)}function Td(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Id{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Da("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NE extends Id{data(){return super.data()}}function Da(e,t){return typeof t=="string"?xa(e,t):t instanceof Dr?t._internalPath:t._delegate._internalPath}/**
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
 */function kE(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Va{}class OE extends Va{}function ME(e,t,...n){let r=[];t instanceof Va&&r.push(t),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Na).length,a=s.filter(c=>c instanceof es).length;if(o>1||o>0&&a>0)throw new D(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class es extends OE{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new es(t,n,r)}_apply(t){const n=this._parse(t);return Ad(t._query,n),new Vn(t.firestore,t.converter,uo(t._query,n))}_parse(t){const n=ba(t.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hu(h,l);const p=[];for(const y of h)p.push(lu(c,s,y));d={arrayValue:{values:p}}}else d=lu(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hu(h,l),d=DE(a,o,h,l==="in"||l==="not-in");return Et.create(u,l,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function LE(e,t,n){const r=t,i=Da("where",e);return es._create(i,r,n)}class Na extends Va{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Na(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:se.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Ad(o,c),o=uo(o,c)}(t._query,n),new Vn(t.firestore,t.converter,uo(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lu(e,t,n){if(typeof(n=re(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ah(t)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ct.fromString(n));if(!O.isDocumentKey(r))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kc(e,new O(r))}if(n instanceof Yt)return kc(e,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xi(n)}.`)}function hu(e,t){if(!Array.isArray(e)||e.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ad(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class FE{convertValue(t,n="none"){switch(Je(t)){case 0:return null;case 1:return t.booleanValue;case 2:return vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw L()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return nn(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ra(vt(t.latitude),vt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=aa(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ar(t));default:return null}}convertTimestamp(t){const n=Ne(t);return new Tt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ct.fromString(t);st(Kh(r));const i=new cr(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||pe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function $E(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Wr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jE extends Id{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Da("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zr extends jE{data(t={}){return super.data(t)}}class UE{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Zr(this._firestore,this._userDataWriter,r.key,r,new Wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Zr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Zr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:BE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class qE extends FE{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function Sd(e){e=An(e,Vn);const t=An(e.firestore,Zi),n=gd(t),r=new qE(t);return kE(e._query),vE(n,e._query).then(i=>new UE(t,r,e,i))}function zE(e,t,n,...r){e=An(e,Yt);const i=An(e.firestore,Zi),s=ba(i);let o;return o=typeof(t=re(t))=="string"||t instanceof Dr?xE(s,"updateDoc",e._key,t,n,r):PE(s,"updateDoc",e._key,t),Rd(i,[o.toMutation(e._key,de.exists(!0))])}function GE(e,t){const n=An(e.firestore,Zi),r=md(e),i=$E(e.converter,t);return Rd(n,[bE(ba(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,de.exists(!1))]).then(()=>r)}function Rd(e,t){return function(r,i){const s=new Ee;return r.asyncQueue.enqueueAndForget(async()=>rE(await yE(r),i,s)),s.promise}(gd(e),t)}(function(t,n=!0){(function(i){Pn=i})(vg),De(new we("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Zi(new Ly(r.getProvider("auth-internal")),new Uy(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),le(Pc,"4.4.2",t),le(Pc,"4.4.2","esm2017")})();var WE="firebase",HE="10.8.0";/**
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
 */le(WE,HE,"app");const Cd="@firebase/installations",ka="0.6.5";/**
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
 */const bd=1e4,Pd=`w:${ka}`,xd="FIS_v2",KE="https://firebaseinstallations.googleapis.com/v1",QE=60*60*1e3,YE="installations",XE="Installations";/**
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
 */const JE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ze=new Si(YE,XE,JE);function Dd(e){return e instanceof Me&&e.code.includes("request-failed")}/**
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
 */function Vd({projectId:e}){return`${KE}/projects/${e}/installations`}function Nd(e){return{token:e.token,requestStatus:2,expiresIn:tw(e.expiresIn),creationTime:Date.now()}}async function kd(e,t){const r=(await t.json()).error;return Ze.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Od({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ZE(e,{refreshToken:t}){const n=Od(e);return n.append("Authorization",ew(t)),n}async function Md(e){const t=await e();return t.status>=500&&t.status<600?e():t}function tw(e){return Number(e.replace("s","000"))}function ew(e){return`${xd} ${e}`}/**
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
 */async function nw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Vd(e),i=Od(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:xd,appId:e.appId,sdkVersion:Pd},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Md(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Nd(u.authToken)}}else throw await kd("Create Installation",c)}/**
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
 */function Ld(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function rw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iw=/^[cdef][\w-]{21}$/,vo="";function sw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ow(e);return iw.test(n)?n:vo}catch{return vo}}function ow(e){return rw(e).substr(0,22)}/**
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
 */function ns(e){return`${e.appName}!${e.appId}`}/**
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
 */const Fd=new Map;function $d(e,t){const n=ns(e);jd(n,t),aw(n,t)}function jd(e,t){const n=Fd.get(e);if(n)for(const r of n)r(t)}function aw(e,t){const n=cw();n&&n.postMessage({key:e,fid:t}),uw()}let He=null;function cw(){return!He&&"BroadcastChannel"in self&&(He=new BroadcastChannel("[Firebase] FID Change"),He.onmessage=e=>{jd(e.data.key,e.data.fid)}),He}function uw(){Fd.size===0&&He&&(He.close(),He=null)}/**
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
 */const lw="firebase-installations-database",hw=1,tn="firebase-installations-store";let bs=null;function Oa(){return bs||(bs=il(lw,hw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tn)}}})),bs}async function wi(e,t){const n=ns(e),i=(await Oa()).transaction(tn,"readwrite"),s=i.objectStore(tn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&$d(e,t.fid),t}async function Ud(e){const t=ns(e),r=(await Oa()).transaction(tn,"readwrite");await r.objectStore(tn).delete(t),await r.done}async function rs(e,t){const n=ns(e),i=(await Oa()).transaction(tn,"readwrite"),s=i.objectStore(tn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&$d(e,a.fid),a}/**
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
 */async function Ma(e){let t;const n=await rs(e.appConfig,r=>{const i=dw(r),s=fw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===vo?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function dw(e){const t=e||{fid:sw(),registrationStatus:0};return Bd(t)}function fw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ze.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=pw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mw(e)}:{installationEntry:t}}async function pw(e,t){try{const n=await nw(e,t);return wi(e.appConfig,n)}catch(n){throw Dd(n)&&n.customData.serverCode===409?await Ud(e.appConfig):await wi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function mw(e){let t=await du(e.appConfig);for(;t.registrationStatus===1;)await Ld(100),t=await du(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ma(e);return r||n}return t}function du(e){return rs(e,t=>{if(!t)throw Ze.create("installation-not-found");return Bd(t)})}function Bd(e){return gw(e)?{fid:e.fid,registrationStatus:0}:e}function gw(e){return e.registrationStatus===1&&e.registrationTime+bd<Date.now()}/**
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
 */async function yw({appConfig:e,heartbeatServiceProvider:t},n){const r=_w(e,n),i=ZE(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Pd,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Md(()=>fetch(r,a));if(c.ok){const u=await c.json();return Nd(u)}else throw await kd("Generate Auth Token",c)}function _w(e,{fid:t}){return`${Vd(e)}/${t}/authTokens:generate`}/**
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
 */async function La(e,t=!1){let n;const r=await rs(e.appConfig,s=>{if(!qd(s))throw Ze.create("not-registered");const o=s.authToken;if(!t&&ww(o))return s;if(o.requestStatus===1)return n=vw(e,t),s;{if(!navigator.onLine)throw Ze.create("app-offline");const a=Iw(s);return n=Ew(e,a),a}});return n?await n:r.authToken}async function vw(e,t){let n=await fu(e.appConfig);for(;n.authToken.requestStatus===1;)await Ld(100),n=await fu(e.appConfig);const r=n.authToken;return r.requestStatus===0?La(e,t):r}function fu(e){return rs(e,t=>{if(!qd(t))throw Ze.create("not-registered");const n=t.authToken;return Aw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ew(e,t){try{const n=await yw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await wi(e.appConfig,r),n}catch(n){if(Dd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ud(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await wi(e.appConfig,r)}throw n}}function qd(e){return e!==void 0&&e.registrationStatus===2}function ww(e){return e.requestStatus===2&&!Tw(e)}function Tw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+QE}function Iw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Aw(e){return e.requestStatus===1&&e.requestTime+bd<Date.now()}/**
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
 */async function Sw(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ma(t);return r?r.catch(console.error):La(t).catch(console.error),n.fid}/**
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
 */async function Rw(e,t=!1){const n=e;return await Cw(n),(await La(n,t)).token}async function Cw(e){const{registrationPromise:t}=await Ma(e);t&&await t}/**
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
 */function bw(e){if(!e||!e.options)throw Ps("App Configuration");if(!e.name)throw Ps("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ps(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ps(e){return Ze.create("missing-app-config-values",{valueName:e})}/**
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
 */const zd="installations",Pw="installations-internal",xw=e=>{const t=e.getProvider("app").getImmediate(),n=bw(t),r=mr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Dw=e=>{const t=e.getProvider("app").getImmediate(),n=mr(t,zd).getImmediate();return{getId:()=>Sw(n),getToken:i=>Rw(n,i)}};function Vw(){De(new we(zd,xw,"PUBLIC")),De(new we(Pw,Dw,"PRIVATE"))}Vw();le(Cd,ka);le(Cd,ka,"esm2017");/**
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
 */const Ti="analytics",Nw="firebase_id",kw="origin",Ow=60*1e3,Mw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Kt=new Vo("@firebase/analytics");/**
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
 */const Lw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new Si("analytics","Analytics",Lw);/**
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
 */function Fw(e){if(!e.startsWith(Fa)){const t=Xt.create("invalid-gtag-resource",{gtagURL:e});return Kt.warn(t.message),""}return e}function Gd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $w(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function jw(e,t){const n=$w("firebase-js-sdk-policy",{createScriptURL:Fw}),r=document.createElement("script"),i=`${Fa}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Uw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Bw(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await Gd(n)).find(u=>u.measurementId===i);c&&await t[c.appId]}}catch(a){Kt.error(a)}e("config",i,s)}async function qw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Gd(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Kt.error(s)}}function zw(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await qw(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await Bw(e,t,n,r,a,c)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Kt.error(a)}}return i}function Gw(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=zw(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Ww(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Fa)&&n.src.includes(e))return n;return null}/**
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
 */const Hw=30,Kw=1e3;class Qw{constructor(t={},n=Kw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wd=new Qw;function Yw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Yw(r)},s=Mw.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Jw(e,t=Wd,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Xt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new e0;return setTimeout(async()=>{a.abort()},n!==void 0?n:Ow),Hd({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Hd(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Wd){var s;const{appId:o,measurementId:a}=e;try{await Zw(r,t)}catch(c){if(a)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Xw(e);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!t0(u)){if(i.deleteThrottleMetadata(o),a)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ac(n,i.intervalMillis,Hw):ac(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,h),Kt.debug(`Calling attemptFetch again in ${l} millis`),Hd(e,h,r,i)}}function Zw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function t0(e){if(!(e instanceof Me)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class e0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function n0(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function r0(){if(Do())try{await el()}catch(e){return Kt.warn(Xt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Kt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i0(e,t,n,r,i,s,o){var a;const c=Jw(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Kt.error(p)),t.push(c);const u=r0().then(p=>{if(p)return r.getId()}),[l,h]=await Promise.all([c,u]);Ww(s)||jw(s,l.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[kw]="firebase",d.update=!0,h!=null&&(d[Nw]=h),i("config",l.measurementId,d),l.measurementId}/**
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
 */class s0{constructor(t){this.app=t}_delete(){return delete Qn[this.app.options.appId],Promise.resolve()}}let Qn={},pu=[];const mu={};let xs="dataLayer",o0="gtag",gu,Kd,yu=!1;function a0(){const e=[];if(pm()&&e.push("This is a browser extension environment."),gm()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:t});Kt.warn(n.message)}}function c0(e,t,n){a0();const r=e.options.appId;if(!r)throw Xt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Qn[r]!=null)throw Xt.create("already-exists",{id:r});if(!yu){Uw(xs);const{wrappedGtag:s,gtagCore:o}=Gw(Qn,pu,mu,xs,o0);Kd=s,gu=o,yu=!0}return Qn[r]=i0(e,pu,mu,t,gu,xs,n),new s0(e)}function u0(e=ol()){e=re(e);const t=mr(e,Ti);return t.isInitialized()?t.getImmediate():l0(e)}function l0(e,t={}){const n=mr(e,Ti);if(n.isInitialized()){const i=n.getImmediate();if(si(t,n.getOptions()))return i;throw Xt.create("already-initialized")}return n.initialize({options:t})}function h0(e,t,n,r){e=re(e),n0(Kd,Qn[e.app.options.appId],t,n,r).catch(i=>Kt.error(i))}const _u="@firebase/analytics",vu="0.10.1";function d0(){De(new we(Ti,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return c0(r,i,n)},"PUBLIC")),De(new we("analytics-internal",e,"PRIVATE")),le(_u,vu),le(_u,vu,"esm2017");function e(t){try{const n=t.getProvider(Ti).getImmediate();return{logEvent:(r,i,s)=>h0(n,r,i,s)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}d0();const f0={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},Qd=sl(f0);u0(Qd);const is=IE(Qd),$a=(e,t)=>t.map(n=>e.find(r=>r.id===n)),ja=e=>e.reduce((t,n)=>{var r;return{...t,[n==null?void 0:n.area]:[...(t[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(t[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),Eu=e=>e.reduce((t,n)=>{const r=t.findIndex(i=>i.name===n.area);return t[r].positions.add(n.position),t},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),p0=(e,t)=>window.navigator.clipboard.writeText(JSON.stringify(ja($a(e,t)))),m0=async(e,t)=>{await GE(Aa(is,"practice_plan"),e).then(n=>{t(`/practice_plans/${n.id}`)})},g0=async(e,t,n)=>{const r=md(is,"practice_plan",e);await zE(r,t),n(`/practice_plans/${e}`)},y0=ot(({className:e})=>x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:e,children:x.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,_0=ot.div`
  height: 100%;
  overflow: scroll;
`,v0=ot.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,wu=ot(({className:e,moves:t,practicePlan:n,removeFromPracticePlan:r,clearPracticePlan:i,currentPracticePlanId:s})=>{const o=zu(),[a,c]=lt.useState(window.innerWidth>850),u=()=>{window.innerWidth>850&&c(!0)};lt.useLayoutEffect(()=>(window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}),[]);const l=()=>{c(h=>!h)};return x.jsxs("aside",{className:e,style:{"--transform":a?"translateX(0%)":"translateX(-100%)"},children:[x.jsx("button",{"aria-label":"show practice plan",onClick:l,children:x.jsx(y0,{})}),x.jsxs(_0,{children:[x.jsx("h1",{children:"Practice Plan"}),Object.entries(ja($a(t,n.moves))).map(([h,d])=>x.jsxs(lt.Fragment,{children:[x.jsx("h2",{children:h}),d.map(p=>x.jsx(Yp,{title:p.name,children:p.moves.map(({name:y,id:E})=>x.jsxs(w0,{children:[y,x.jsx(T0,{onClick:()=>r(E),children:x.jsx(Mu,{})})]},`${p.name}=${y}`))},p.name))]},h)),x.jsxs(v0,{children:[!s&&x.jsx(us,{onClick:i,text:"Clear Practice Plan",Icon:E0,$level:"caution"}),x.jsx(us,{onClick:()=>p0(t,n.moves),text:"Copy Practice Plan",Icon:Xp}),x.jsx(us,{onClick:()=>s?g0(s,n,o):m0(n,o),text:s?"Update Practice Plan":"Save Practice Plan",Icon:Jp})]})]})]})})`
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
`,E0=ot(Zp)`
  stroke: white;
`,w0=ot.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,T0=ot.button`
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
`,I0=e=>{const t={date:new Date,moves:[]},[n,r]=lt.useState(t);return lt.useEffect(()=>{if(e){const i=ME(Aa(is,"practice_plan"),LE(AE(),"==",e));Sd(i).then(o=>{const a=o.docs.map(u=>({...u.data(),id:u.id})),[c]=a;r(c)})}else r(t)},[e]),[n,r]},A0=ot(({className:e})=>{const[t,n]=lt.useState(""),[r,i]=lt.useState("neutral"),[s,o]=lt.useState([]),a=lt.useRef(),[c,u]=lt.useState("");let{id:l}=Ep();const[h,d]=I0(l),p=()=>Sd(Aa(is,"moves")).then(T=>{const I=T.docs.map(S=>({...S.data(),id:S.id}));o(I)});lt.useEffect(()=>{p()},[]);const y=T=>{var I;n(T),(I=a.current)==null||I.showModal()},E=()=>{d({date:new Date,moves:[]})},f=T=>{d(I=>({...I,moves:[...I.moves,T]}))},V=T=>{d(I=>({...I,moves:[...I.moves].filter(S=>S!==T)}))};return x.jsxs("main",{className:e,children:[x.jsx(wu,{moves:s,practicePlan:h,clearPracticePlan:E,removeFromPracticePlan:V,currentPracticePlanId:l}),x.jsx(Xu,{setPanelTitle:u,addToPracticePlan:f,content:[...Eu(s).find(T=>T.name===r).positions],showPanel:y,area:r,moves:s}),x.jsx(sp,{passedRef:a,title:c,children:x.jsx(ep,{children:t})}),x.jsx(op,{tabs:Eu(s).map(T=>T.name),currentTab:r,setCurrentTab:i})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${wu} {
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
`;exports.ContentMap=Xu;exports.Map=A0;exports.aggregateMovesByPosition=ja;exports.findMoves=$a;
