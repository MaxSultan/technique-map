function $w(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const NR="modulepreload",OR=function(t){return"/technique-map/"+t},av={},LR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=OR(o),o in av)return;av[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":NR,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uw={exports:{}},Wc={},zw={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),MR=Symbol.for("react.portal"),VR=Symbol.for("react.fragment"),FR=Symbol.for("react.strict_mode"),jR=Symbol.for("react.profiler"),$R=Symbol.for("react.provider"),UR=Symbol.for("react.context"),zR=Symbol.for("react.forward_ref"),BR=Symbol.for("react.suspense"),HR=Symbol.for("react.memo"),qR=Symbol.for("react.lazy"),lv=Symbol.iterator;function WR(t){return t===null||typeof t!="object"?null:(t=lv&&t[lv]||t["@@iterator"],typeof t=="function"?t:null)}var Bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hw=Object.assign,qw={};function Po(t,e,n){this.props=t,this.context=e,this.refs=qw,this.updater=n||Bw}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ww(){}Ww.prototype=Po.prototype;function pm(t,e,n){this.props=t,this.context=e,this.refs=qw,this.updater=n||Bw}var mm=pm.prototype=new Ww;mm.constructor=pm;Hw(mm,Po.prototype);mm.isPureReactComponent=!0;var uv=Array.isArray,Kw=Object.prototype.hasOwnProperty,gm={current:null},Gw={key:!0,ref:!0,__self:!0,__source:!0};function Qw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kw.call(e,r)&&!Gw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:gm.current}}function KR(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function GR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cv=/\/+/g;function Sh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GR(""+t.key):e.toString(36)}function Au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case MR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sh(o,0):r,uv(i)?(n="",t!=null&&(n=t.replace(cv,"$&/")+"/"),Au(i,e,n,"",function(u){return u})):i!=null&&(ym(i)&&(i=KR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sh(s,a);o+=Au(s,e,n,l,i)}else if(l=WR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sh(s,a++),o+=Au(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var r=[],i=0;return Au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function QR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ru={transition:null},YR={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ru,ReactCurrentOwner:gm};ve.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Po;ve.Fragment=VR;ve.Profiler=jR;ve.PureComponent=pm;ve.StrictMode=FR;ve.Suspense=BR;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YR;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kw.call(e,l)&&!Gw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:UR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$R,_context:t},t.Consumer=t};ve.createElement=Qw;ve.createFactory=function(t){var e=Qw.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:zR,render:t}};ve.isValidElement=ym;ve.lazy=function(t){return{$$typeof:qR,_payload:{_status:-1,_result:t},_init:QR}};ve.memo=function(t,e){return{$$typeof:HR,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=Ru.transition;Ru.transition={};try{t()}finally{Ru.transition=e}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ve.useContext=function(t){return Yt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ve.useId=function(){return Yt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ve.useRef=function(t){return Yt.current.useRef(t)};ve.useState=function(t){return Yt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Yt.current.useTransition()};ve.version="18.2.0";zw.exports=ve;var T=zw.exports;const xo=fm(T),JR=$w({__proto__:null,default:xo},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XR=T,ZR=Symbol.for("react.element"),eC=Symbol.for("react.fragment"),tC=Object.prototype.hasOwnProperty,nC=XR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rC={key:!0,ref:!0,__self:!0,__source:!0};function Yw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tC.call(e,r)&&!rC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZR,type:t,key:s,ref:o,props:i,_owner:nC.current}}Wc.Fragment=eC;Wc.jsx=Yw;Wc.jsxs=Yw;Uw.exports=Wc;var m=Uw.exports,Jw={exports:{}},mn={},Xw={exports:{}},Zw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Q){var Z=L.length;L.push(Q);e:for(;0<Z;){var me=Z-1>>>1,M=L[me];if(0<i(M,Q))L[me]=Q,L[Z]=M,Z=me;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Q=L[0],Z=L.pop();if(Z!==Q){L[0]=Z;e:for(var me=0,M=L.length,B=M>>>1;me<B;){var j=2*(me+1)-1,Y=L[j],A=j+1,fe=L[A];if(0>i(Y,Z))A<M&&0>i(fe,Y)?(L[me]=fe,L[A]=Z,me=A):(L[me]=Y,L[j]=Z,me=j);else if(A<M&&0>i(fe,Z))L[me]=fe,L[A]=Z,me=A;else break e}}return Q}function i(L,Q){var Z=L.sortIndex-Q.sortIndex;return Z!==0?Z:L.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,y=!1,v=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=L)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function S(L){if(w=!1,_(L),!v)if(n(l)!==null)v=!0,Xt(x);else{var Q=n(u);Q!==null&&ge(S,Q.startTime-L)}}function x(L,Q){v=!1,w&&(w=!1,p(b),b=-1),y=!0;var Z=h;try{for(_(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||L&&!ce());){var me=d.callback;if(typeof me=="function"){d.callback=null,h=d.priorityLevel;var M=me(d.expirationTime<=Q);Q=t.unstable_now(),typeof M=="function"?d.callback=M:d===n(l)&&r(l),_(Q)}else r(l);d=n(l)}if(d!==null)var B=!0;else{var j=n(u);j!==null&&ge(S,j.startTime-Q),B=!1}return B}finally{d=null,h=Z,y=!1}}var E=!1,C=null,b=-1,F=5,q=-1;function ce(){return!(t.unstable_now()-q<F)}function Te(){if(C!==null){var L=t.unstable_now();q=L;var Q=!0;try{Q=C(!0,L)}finally{Q?Se():(E=!1,C=null)}}else E=!1}var Se;if(typeof f=="function")Se=function(){f(Te)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,et=He.port2;He.port1.onmessage=Te,Se=function(){et.postMessage(null)}}else Se=function(){g(Te,0)};function Xt(L){C=L,E||(E=!0,Se())}function ge(L,Q){b=g(function(){L(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Xt(x))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var Z=h;h=Q;try{return L()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return Q()}finally{h=Z}},t.unstable_scheduleCallback=function(L,Q,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,L){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Z+M,L={id:c++,callback:Q,priorityLevel:L,startTime:Z,expirationTime:M,sortIndex:-1},Z>me?(L.sortIndex=Z,e(u,L),n(l)===null&&L===n(u)&&(w?(p(b),b=-1):w=!0,ge(S,Z-me))):(L.sortIndex=M,e(l,L),v||y||(v=!0,Xt(x))),L},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(L){var Q=h;return function(){var Z=h;h=Q;try{return L.apply(this,arguments)}finally{h=Z}}}})(Zw);Xw.exports=Zw;var iC=Xw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=T,fn=iC;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t1=new Set,Ma={};function ds(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(Ma[t]=e,t=0;t<e.length;t++)t1.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=Object.prototype.hasOwnProperty,sC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dv={},hv={};function oC(t){return Rf.call(hv,t)?!0:Rf.call(dv,t)?!1:sC.test(t)?hv[t]=!0:(dv[t]=!0,!1)}function aC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lC(t,e,n,r){if(e===null||typeof e>"u"||aC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vm=/[\-:]([a-z])/g;function _m(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vm,_m);Nt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vm,_m);Nt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vm,_m);Nt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wm(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lC(e,n,i,r)&&(n=null),r||i===null?oC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),i1=Symbol.for("react.offscreen"),fv=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=fv&&t[fv]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Object.assign,Ah;function sa(t){if(Ah===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ah=e&&e[1]||""}return`
`+Ah+t}var Rh=!1;function Ch(t,e){if(!t||Rh)return"";Rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function uC(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=Ch(t.type,!1),t;case 11:return t=Ch(t.type.render,!1),t;case 1:return t=Ch(t.type,!0),t;default:return""}}function kf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case bs:return"Portal";case Cf:return"Profiler";case Em:return"StrictMode";case Pf:return"Suspense";case xf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r1:return(t.displayName||"Context")+".Consumer";case n1:return(t._context.displayName||"Context")+".Provider";case Tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Im:return e=t.displayName||null,e!==null?e:kf(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return kf(t(e))}catch{}}return null}function cC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dC(t){var e=s1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zl(t){t._valueTracker||(t._valueTracker=dC(t))}function o1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return Ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a1(t,e){e=e.checked,e!=null&&wm(t,"checked",e,!1)}function bf(t,e){a1(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||Ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function Qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(oa(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function l1(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,c1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hC=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){hC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function d1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function h1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fC=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(fC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jf=null,Ys=null,Js=null;function vv(t){if(t=wl(t)){if(typeof jf!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Jc(e),jf(t.stateNode,t.type,e))}}function f1(t){Ys?Js?Js.push(t):Js=[t]:Ys=t}function p1(){if(Ys){var t=Ys,e=Js;if(Js=Ys=null,vv(t),e)for(t=0;t<e.length;t++)vv(e[t])}}function m1(t,e){return t(e)}function g1(){}var Ph=!1;function y1(t,e,n){if(Ph)return t(e,n);Ph=!0;try{return m1(t,e,n)}finally{Ph=!1,(Ys!==null||Js!==null)&&(g1(),p1())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var r=Jc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var $f=!1;if(Cr)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){$f=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{$f=!1}function pC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ya=!1,Gu=null,Qu=!1,Uf=null,mC={onError:function(t){ya=!0,Gu=t}};function gC(t,e,n,r,i,s,o,a,l){ya=!1,Gu=null,pC.apply(mC,arguments)}function yC(t,e,n,r,i,s,o,a,l){if(gC.apply(this,arguments),ya){if(ya){var u=Gu;ya=!1,Gu=null}else throw Error(N(198));Qu||(Qu=!0,Uf=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(hs(t)!==t)throw Error(N(188))}function vC(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _v(i),t;if(s===r)return _v(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function _1(t){return t=vC(t),t!==null?w1(t):null}function w1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w1(t);if(e!==null)return e;t=t.sibling}return null}var E1=fn.unstable_scheduleCallback,wv=fn.unstable_cancelCallback,_C=fn.unstable_shouldYield,wC=fn.unstable_requestPaint,nt=fn.unstable_now,EC=fn.unstable_getCurrentPriorityLevel,Am=fn.unstable_ImmediatePriority,T1=fn.unstable_UserBlockingPriority,Yu=fn.unstable_NormalPriority,TC=fn.unstable_LowPriority,I1=fn.unstable_IdlePriority,Kc=null,rr=null;function IC(t){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:RC,SC=Math.log,AC=Math.LN2;function RC(t){return t>>>=0,t===0?32:31-(SC(t)/AC|0)|0}var tu=64,nu=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=aa(a):(s&=o,s!==0&&(r=aa(s)))}else o=n&~i,o!==0?r=aa(o):s!==0&&(r=aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ln(e),i=1<<n,r|=t[n],e&=~i;return r}function CC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=CC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S1(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function xC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function A1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var R1,Cm,C1,P1,x1,Bf=!1,ru=[],ti=null,ni=null,ri=null,ja=new Map,$a=new Map,Wr=[],kC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ev(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&Cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DC(t,e,n,r,i){switch(e){case"focusin":return ti=qo(ti,t,e,n,r,i),!0;case"dragenter":return ni=qo(ni,t,e,n,r,i),!0;case"mouseover":return ri=qo(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ja.set(s,qo(ja.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,qo($a.get(s)||null,t,e,n,r,i)),!0}return!1}function k1(t){var e=Oi(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=v1(n),e!==null){t.blockedOn=e,x1(t.priority,function(){C1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=wl(n),e!==null&&Cm(e),t.blockedOn=n,!1;e.shift()}return!0}function Tv(t,e,n){Cu(t)&&n.delete(e)}function bC(){Bf=!1,ti!==null&&Cu(ti)&&(ti=null),ni!==null&&Cu(ni)&&(ni=null),ri!==null&&Cu(ri)&&(ri=null),ja.forEach(Tv),$a.forEach(Tv)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,bC)))}function Ua(t){function e(i){return Wo(i,t)}if(0<ru.length){Wo(ru[0],t);for(var n=1;n<ru.length;n++){var r=ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&Wo(ti,t),ni!==null&&Wo(ni,t),ri!==null&&Wo(ri,t),ja.forEach(e),$a.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)k1(n),n.blockedOn===null&&Wr.shift()}var Xs=Lr.ReactCurrentBatchConfig,Xu=!0;function NC(t,e,n,r){var i=Pe,s=Xs.transition;Xs.transition=null;try{Pe=1,Pm(t,e,n,r)}finally{Pe=i,Xs.transition=s}}function OC(t,e,n,r){var i=Pe,s=Xs.transition;Xs.transition=null;try{Pe=4,Pm(t,e,n,r)}finally{Pe=i,Xs.transition=s}}function Pm(t,e,n,r){if(Xu){var i=Hf(t,e,n,r);if(i===null)jh(t,e,r,Zu,n),Ev(t,r);else if(DC(i,t,e,n,r))r.stopPropagation();else if(Ev(t,r),e&4&&-1<kC.indexOf(t)){for(;i!==null;){var s=wl(i);if(s!==null&&R1(s),s=Hf(t,e,n,r),s===null&&jh(t,e,r,Zu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jh(t,e,r,null,n)}}var Zu=null;function Hf(t,e,n,r){if(Zu=null,t=Sm(r),t=Oi(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zu=t,null}function D1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EC()){case Am:return 1;case T1:return 4;case Yu:case TC:return 16;case I1:return 536870912;default:return 16}default:return 16}}var Xr=null,xm=null,Pu=null;function b1(){if(Pu)return Pu;var t,e=xm,n=e.length,r,i="value"in Xr?Xr.value:Xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pu=i.slice(t,1<r?1-r:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function Iv(){return!1}function gn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?iu:Iv,this.isPropagationStopped=Iv,this}return Ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},km=gn(ko),_l=Ge({},ko,{view:0,detail:0}),LC=gn(_l),kh,Dh,Ko,Gc=Ge({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(kh=t.screenX-Ko.screenX,Dh=t.screenY-Ko.screenY):Dh=kh=0,Ko=t),kh)},movementY:function(t){return"movementY"in t?t.movementY:Dh}}),Sv=gn(Gc),MC=Ge({},Gc,{dataTransfer:0}),VC=gn(MC),FC=Ge({},_l,{relatedTarget:0}),bh=gn(FC),jC=Ge({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),$C=gn(jC),UC=Ge({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zC=gn(UC),BC=Ge({},ko,{data:0}),Av=gn(BC),HC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WC[t])?!!e[t]:!1}function Dm(){return KC}var GC=Ge({},_l,{key:function(t){if(t.key){var e=HC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dm,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QC=gn(GC),YC=Ge({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rv=gn(YC),JC=Ge({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dm}),XC=gn(JC),ZC=Ge({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),eP=gn(ZC),tP=Ge({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nP=gn(tP),rP=[9,13,27,32],bm=Cr&&"CompositionEvent"in window,va=null;Cr&&"documentMode"in document&&(va=document.documentMode);var iP=Cr&&"TextEvent"in window&&!va,N1=Cr&&(!bm||va&&8<va&&11>=va),Cv=" ",Pv=!1;function O1(t,e){switch(t){case"keyup":return rP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function sP(t,e){switch(t){case"compositionend":return L1(e);case"keypress":return e.which!==32?null:(Pv=!0,Cv);case"textInput":return t=e.data,t===Cv&&Pv?null:t;default:return null}}function oP(t,e){if(Os)return t==="compositionend"||!bm&&O1(t,e)?(t=b1(),Pu=xm=Xr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N1&&e.locale!=="ko"?null:e.data;default:return null}}var aP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aP[t.type]:e==="textarea"}function M1(t,e,n,r){f1(r),e=ec(e,"onChange"),0<e.length&&(n=new km("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _a=null,za=null;function lP(t){K1(t,0)}function Qc(t){var e=Vs(t);if(o1(e))return t}function uP(t,e){if(t==="change")return e}var V1=!1;if(Cr){var Nh;if(Cr){var Oh="oninput"in document;if(!Oh){var kv=document.createElement("div");kv.setAttribute("oninput","return;"),Oh=typeof kv.oninput=="function"}Nh=Oh}else Nh=!1;V1=Nh&&(!document.documentMode||9<document.documentMode)}function Dv(){_a&&(_a.detachEvent("onpropertychange",F1),za=_a=null)}function F1(t){if(t.propertyName==="value"&&Qc(za)){var e=[];M1(e,za,t,Sm(t)),y1(lP,e)}}function cP(t,e,n){t==="focusin"?(Dv(),_a=e,za=n,_a.attachEvent("onpropertychange",F1)):t==="focusout"&&Dv()}function dP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(za)}function hP(t,e){if(t==="click")return Qc(e)}function fP(t,e){if(t==="input"||t==="change")return Qc(e)}function pP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:pP;function Ba(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rf.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function j1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $1(){for(var t=window,e=Ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ku(t.document)}return e}function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mP(t){var e=$1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j1(n.ownerDocument.documentElement,n)){if(r!==null&&Nm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gP=Cr&&"documentMode"in document&&11>=document.documentMode,Ls=null,qf=null,wa=null,Wf=!1;function Ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Ls==null||Ls!==Ku(r)||(r=Ls,"selectionStart"in r&&Nm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wa&&Ba(wa,r)||(wa=r,r=ec(qf,"onSelect"),0<r.length&&(e=new km("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Lh={},U1={};Cr&&(U1=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Yc(t){if(Lh[t])return Lh[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in U1)return Lh[t]=e[n];return t}var z1=Yc("animationend"),B1=Yc("animationiteration"),H1=Yc("animationstart"),q1=Yc("transitionend"),W1=new Map,Lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){W1.set(t,e),ds(e,[t])}for(var Mh=0;Mh<Lv.length;Mh++){var Vh=Lv[Mh],yP=Vh.toLowerCase(),vP=Vh[0].toUpperCase()+Vh.slice(1);vi(yP,"on"+vP)}vi(z1,"onAnimationEnd");vi(B1,"onAnimationIteration");vi(H1,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(q1,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_P=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Mv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yC(r,e,void 0,t),t.currentTarget=null}function K1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Mv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Mv(i,a,u),s=l}}}if(Qu)throw t=Uf,Qu=!1,Uf=null,t}function Ve(t,e){var n=e[Jf];n===void 0&&(n=e[Jf]=new Set);var r=t+"__bubble";n.has(r)||(G1(e,t,2,!1),n.add(r))}function Fh(t,e,n){var r=0;e&&(r|=4),G1(n,t,r,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[ou]){t[ou]=!0,t1.forEach(function(n){n!=="selectionchange"&&(_P.has(n)||Fh(n,!1,t),Fh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ou]||(e[ou]=!0,Fh("selectionchange",!1,e))}}function G1(t,e,n,r){switch(D1(e)){case 1:var i=NC;break;case 4:i=OC;break;default:i=Pm}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Oi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}y1(function(){var u=s,c=Sm(n),d=[];e:{var h=W1.get(t);if(h!==void 0){var y=km,v=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":y=QC;break;case"focusin":v="focus",y=bh;break;case"focusout":v="blur",y=bh;break;case"beforeblur":case"afterblur":y=bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=VC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=XC;break;case z1:case B1:case H1:y=$C;break;case q1:y=eP;break;case"scroll":y=LC;break;case"wheel":y=nP;break;case"copy":case"cut":case"paste":y=zC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rv}var w=(e&4)!==0,g=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,_;f!==null;){_=f;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,p!==null&&(S=Fa(f,p),S!=null&&w.push(qa(f,S,_)))),g)break;f=f.return}0<w.length&&(h=new y(h,v,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==Ff&&(v=n.relatedTarget||n.fromElement)&&(Oi(v)||v[Pr]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Oi(v):null,v!==null&&(g=hs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Sv,S="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Rv,S="onPointerLeave",p="onPointerEnter",f="pointer"),g=y==null?h:Vs(y),_=v==null?h:Vs(v),h=new w(S,f+"leave",y,n,c),h.target=g,h.relatedTarget=_,S=null,Oi(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=_,w.relatedTarget=g,S=w),g=S,y&&v)t:{for(w=y,p=v,f=0,_=w;_;_=Cs(_))f++;for(_=0,S=p;S;S=Cs(S))_++;for(;0<f-_;)w=Cs(w),f--;for(;0<_-f;)p=Cs(p),_--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Cs(w),p=Cs(p)}w=null}else w=null;y!==null&&Vv(d,h,y,w,!1),v!==null&&g!==null&&Vv(d,g,v,w,!0)}}e:{if(h=u?Vs(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var x=uP;else if(xv(h))if(V1)x=fP;else{x=dP;var E=cP}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=hP);if(x&&(x=x(t,u))){M1(d,x,n,c);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Nf(h,"number",h.value)}switch(E=u?Vs(u):window,t){case"focusin":(xv(E)||E.contentEditable==="true")&&(Ls=E,qf=u,wa=null);break;case"focusout":wa=qf=Ls=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Ov(d,n,c);break;case"selectionchange":if(gP)break;case"keydown":case"keyup":Ov(d,n,c)}var C;if(bm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Os?O1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(N1&&n.locale!=="ko"&&(Os||b!=="onCompositionStart"?b==="onCompositionEnd"&&Os&&(C=b1()):(Xr=c,xm="value"in Xr?Xr.value:Xr.textContent,Os=!0)),E=ec(u,b),0<E.length&&(b=new Av(b,t,null,n,c),d.push({event:b,listeners:E}),C?b.data=C:(C=L1(n),C!==null&&(b.data=C)))),(C=iP?sP(t,n):oP(t,n))&&(u=ec(u,"onBeforeInput"),0<u.length&&(c=new Av("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}K1(d,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fa(t,n),s!=null&&r.unshift(qa(t,s,i)),s=Fa(t,e),s!=null&&r.push(qa(t,s,i))),t=t.return}return r}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fa(n,s),l!=null&&o.unshift(qa(n,l,a))):i||(l=Fa(n,s),l!=null&&o.push(qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wP=/\r\n?/g,EP=/\u0000|\uFFFD/g;function Fv(t){return(typeof t=="string"?t:""+t).replace(wP,`
`).replace(EP,"")}function au(t,e,n){if(e=Fv(e),Fv(t)!==e&&n)throw Error(N(425))}function tc(){}var Kf=null,Gf=null;function Qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,TP=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,IP=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch(SP)}:Yf;function SP(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ua(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Do,Wa="__reactProps$"+Do,Pr="__reactContainer$"+Do,Jf="__reactEvents$"+Do,AP="__reactListeners$"+Do,RP="__reactHandles$"+Do;function Oi(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$v(t);t!==null;){if(n=t[Jn])return n;t=$v(t)}return e}t=n,n=t.parentNode}return null}function wl(t){return t=t[Jn]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Jc(t){return t[Wa]||null}var Xf=[],Fs=-1;function _i(t){return{current:t}}function $e(t){0>Fs||(t.current=Xf[Fs],Xf[Fs]=null,Fs--)}function Le(t,e){Fs++,Xf[Fs]=t.current,t.current=e}var pi={},Bt=_i(pi),nn=_i(!1),Gi=pi;function uo(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rn(t){return t=t.childContextTypes,t!=null}function nc(){$e(nn),$e(Bt)}function Uv(t,e,n){if(Bt.current!==pi)throw Error(N(168));Le(Bt,e),Le(nn,n)}function Q1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,cC(t)||"Unknown",i));return Ge({},n,r)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Gi=Bt.current,Le(Bt,t),Le(nn,nn.current),!0}function zv(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Q1(t,e,Gi),r.__reactInternalMemoizedMergedChildContext=t,$e(nn),$e(Bt),Le(Bt,t)):$e(nn),Le(nn,n)}var yr=null,Xc=!1,Uh=!1;function Y1(t){yr===null?yr=[t]:yr.push(t)}function CP(t){Xc=!0,Y1(t)}function wi(){if(!Uh&&yr!==null){Uh=!0;var t=0,e=Pe;try{var n=yr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,Xc=!1}catch(i){throw yr!==null&&(yr=yr.slice(t+1)),E1(Am,wi),i}finally{Pe=e,Uh=!1}}return null}var js=[],$s=0,ic=null,sc=0,wn=[],En=0,Qi=null,vr=1,_r="";function ki(t,e){js[$s++]=sc,js[$s++]=ic,ic=t,sc=e}function J1(t,e,n){wn[En++]=vr,wn[En++]=_r,wn[En++]=Qi,Qi=t;var r=vr;t=_r;var i=32-Ln(r)-1;r&=~(1<<i),n+=1;var s=32-Ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vr=1<<32-Ln(e)+i|n<<i|r,_r=s+t}else vr=1<<s|n<<i|r,_r=t}function Om(t){t.return!==null&&(ki(t,1),J1(t,1,0))}function Lm(t){for(;t===ic;)ic=js[--$s],js[$s]=null,sc=js[--$s],js[$s]=null;for(;t===Qi;)Qi=wn[--En],wn[En]=null,_r=wn[--En],wn[En]=null,vr=wn[--En],wn[En]=null}var dn=null,ln=null,Be=!1,On=null;function X1(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,ln=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qi!==null?{id:vr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,ln=null,!0):!1;default:return!1}}function Zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ep(t){if(Be){var e=ln;if(e){var n=e;if(!Bv(t,e)){if(Zf(t))throw Error(N(418));e=ii(n.nextSibling);var r=dn;e&&Bv(t,e)?X1(r,n):(t.flags=t.flags&-4097|2,Be=!1,dn=t)}}else{if(Zf(t))throw Error(N(418));t.flags=t.flags&-4097|2,Be=!1,dn=t}}}function Hv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function lu(t){if(t!==dn)return!1;if(!Be)return Hv(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qf(t.type,t.memoizedProps)),e&&(e=ln)){if(Zf(t))throw Z1(),Error(N(418));for(;e;)X1(t,e),e=ii(e.nextSibling)}if(Hv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=dn?ii(t.stateNode.nextSibling):null;return!0}function Z1(){for(var t=ln;t;)t=ii(t.nextSibling)}function co(){ln=dn=null,Be=!1}function Mm(t){On===null?On=[t]:On.push(t)}var PP=Lr.ReactCurrentBatchConfig;function Dn(t,e){if(t&&t.defaultProps){e=Ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oc=_i(null),ac=null,Us=null,Vm=null;function Fm(){Vm=Us=ac=null}function jm(t){var e=oc.current;$e(oc),t._currentValue=e}function tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){ac=t,Vm=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Vm!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(ac===null)throw Error(N(308));Us=t,ac.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Li=null;function $m(t){Li===null?Li=[t]:Li.push(t)}function eE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rm(t,n)}}function qv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var i=t.updateQueue;qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(y,d,h):v,h==null)break e;d=Ge({},d,h);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ji|=o,t.lanes=o,t.memoizedState=d}}function Wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var nE=new e1.Component().refs;function np(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ai(t),s=Sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(Mn(e,t,i,r),ku(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=ai(t),s=Sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(Mn(e,t,i,r),ku(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=ai(t),i=Sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(Mn(e,t,r,n),ku(e,t,r))}};function Kv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,s):!0}function rE(t,e,n){var r=!1,i=pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=rn(e)?Gi:Bt.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function rp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=nE,Um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=rn(e)?Gi:Bt.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(np(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===nE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qv(t){var e=t._init;return e(t._payload)}function iE(t){function e(p,f){if(t){var _=p.deletions;_===null?(p.deletions=[f],p.flags|=16):_.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=li(p,f),p.index=0,p.sibling=null,p}function s(p,f,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<f?(p.flags|=2,f):_):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,_,S){return f===null||f.tag!==6?(f=Gh(_,p.mode,S),f.return=p,f):(f=i(f,_),f.return=p,f)}function l(p,f,_,S){var x=_.type;return x===Ns?c(p,f,_.props.children,S,_.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Hr&&Qv(x)===f.type)?(S=i(f,_.props),S.ref=Go(p,f,_),S.return=p,S):(S=Mu(_.type,_.key,_.props,null,p.mode,S),S.ref=Go(p,f,_),S.return=p,S)}function u(p,f,_,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Qh(_,p.mode,S),f.return=p,f):(f=i(f,_.children||[]),f.return=p,f)}function c(p,f,_,S,x){return f===null||f.tag!==7?(f=qi(_,p.mode,S,x),f.return=p,f):(f=i(f,_),f.return=p,f)}function d(p,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gh(""+f,p.mode,_),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xl:return _=Mu(f.type,f.key,f.props,null,p.mode,_),_.ref=Go(p,null,f),_.return=p,_;case bs:return f=Qh(f,p.mode,_),f.return=p,f;case Hr:var S=f._init;return d(p,S(f._payload),_)}if(oa(f)||Bo(f))return f=qi(f,p.mode,_,null),f.return=p,f;uu(p,f)}return null}function h(p,f,_,S){var x=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(p,f,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xl:return _.key===x?l(p,f,_,S):null;case bs:return _.key===x?u(p,f,_,S):null;case Hr:return x=_._init,h(p,f,x(_._payload),S)}if(oa(_)||Bo(_))return x!==null?null:c(p,f,_,S,null);uu(p,_)}return null}function y(p,f,_,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(_)||null,a(f,p,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xl:return p=p.get(S.key===null?_:S.key)||null,l(f,p,S,x);case bs:return p=p.get(S.key===null?_:S.key)||null,u(f,p,S,x);case Hr:var E=S._init;return y(p,f,_,E(S._payload),x)}if(oa(S)||Bo(S))return p=p.get(_)||null,c(f,p,S,x,null);uu(f,S)}return null}function v(p,f,_,S){for(var x=null,E=null,C=f,b=f=0,F=null;C!==null&&b<_.length;b++){C.index>b?(F=C,C=null):F=C.sibling;var q=h(p,C,_[b],S);if(q===null){C===null&&(C=F);break}t&&C&&q.alternate===null&&e(p,C),f=s(q,f,b),E===null?x=q:E.sibling=q,E=q,C=F}if(b===_.length)return n(p,C),Be&&ki(p,b),x;if(C===null){for(;b<_.length;b++)C=d(p,_[b],S),C!==null&&(f=s(C,f,b),E===null?x=C:E.sibling=C,E=C);return Be&&ki(p,b),x}for(C=r(p,C);b<_.length;b++)F=y(C,p,b,_[b],S),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?b:F.key),f=s(F,f,b),E===null?x=F:E.sibling=F,E=F);return t&&C.forEach(function(ce){return e(p,ce)}),Be&&ki(p,b),x}function w(p,f,_,S){var x=Bo(_);if(typeof x!="function")throw Error(N(150));if(_=x.call(_),_==null)throw Error(N(151));for(var E=x=null,C=f,b=f=0,F=null,q=_.next();C!==null&&!q.done;b++,q=_.next()){C.index>b?(F=C,C=null):F=C.sibling;var ce=h(p,C,q.value,S);if(ce===null){C===null&&(C=F);break}t&&C&&ce.alternate===null&&e(p,C),f=s(ce,f,b),E===null?x=ce:E.sibling=ce,E=ce,C=F}if(q.done)return n(p,C),Be&&ki(p,b),x;if(C===null){for(;!q.done;b++,q=_.next())q=d(p,q.value,S),q!==null&&(f=s(q,f,b),E===null?x=q:E.sibling=q,E=q);return Be&&ki(p,b),x}for(C=r(p,C);!q.done;b++,q=_.next())q=y(C,p,b,q.value,S),q!==null&&(t&&q.alternate!==null&&C.delete(q.key===null?b:q.key),f=s(q,f,b),E===null?x=q:E.sibling=q,E=q);return t&&C.forEach(function(Te){return e(p,Te)}),Be&&ki(p,b),x}function g(p,f,_,S){if(typeof _=="object"&&_!==null&&_.type===Ns&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Xl:e:{for(var x=_.key,E=f;E!==null;){if(E.key===x){if(x=_.type,x===Ns){if(E.tag===7){n(p,E.sibling),f=i(E,_.props.children),f.return=p,p=f;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Hr&&Qv(x)===E.type){n(p,E.sibling),f=i(E,_.props),f.ref=Go(p,E,_),f.return=p,p=f;break e}n(p,E);break}else e(p,E);E=E.sibling}_.type===Ns?(f=qi(_.props.children,p.mode,S,_.key),f.return=p,p=f):(S=Mu(_.type,_.key,_.props,null,p.mode,S),S.ref=Go(p,f,_),S.return=p,p=S)}return o(p);case bs:e:{for(E=_.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(p,f.sibling),f=i(f,_.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Qh(_,p.mode,S),f.return=p,p=f}return o(p);case Hr:return E=_._init,g(p,f,E(_._payload),S)}if(oa(_))return v(p,f,_,S);if(Bo(_))return w(p,f,_,S);uu(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,_),f.return=p,p=f):(n(p,f),f=Gh(_,p.mode,S),f.return=p,p=f),o(p)):n(p,f)}return g}var ho=iE(!0),sE=iE(!1),El={},ir=_i(El),Ka=_i(El),Ga=_i(El);function Mi(t){if(t===El)throw Error(N(174));return t}function zm(t,e){switch(Le(Ga,e),Le(Ka,t),Le(ir,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}$e(ir),Le(ir,e)}function fo(){$e(ir),$e(Ka),$e(Ga)}function oE(t){Mi(Ga.current);var e=Mi(ir.current),n=Lf(e,t.type);e!==n&&(Le(Ka,t),Le(ir,n))}function Bm(t){Ka.current===t&&($e(ir),$e(Ka))}var qe=_i(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zh=[];function Hm(){for(var t=0;t<zh.length;t++)zh[t]._workInProgressVersionPrimary=null;zh.length=0}var Du=Lr.ReactCurrentDispatcher,Bh=Lr.ReactCurrentBatchConfig,Yi=0,Ke=null,ht=null,_t=null,cc=!1,Ea=!1,Qa=0,xP=0;function Lt(){throw Error(N(321))}function qm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Wm(t,e,n,r,i,s){if(Yi=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?NP:OP,t=n(r,i),Ea){s=0;do{if(Ea=!1,Qa=0,25<=s)throw Error(N(301));s+=1,_t=ht=null,e.updateQueue=null,Du.current=LP,t=n(r,i)}while(Ea)}if(Du.current=dc,e=ht!==null&&ht.next!==null,Yi=0,_t=ht=Ke=null,cc=!1,e)throw Error(N(300));return t}function Km(){var t=Qa!==0;return Qa=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ke.memoizedState=_t=t:_t=_t.next=t,_t}function Pn(){if(ht===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=_t===null?Ke.memoizedState:_t.next;if(e!==null)_t=e,ht=t;else{if(t===null)throw Error(N(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Ke.memoizedState=_t=t:_t=_t.next=t}return _t}function Ya(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=Pn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ht,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ke.lanes|=c,Ji|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Vn(r,e.memoizedState)||(tn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ke.lanes|=s,Ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qh(t){var e=Pn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Vn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aE(){}function lE(t,e){var n=Ke,r=Pn(),i=e(),s=!Vn(r.memoizedState,i);if(s&&(r.memoizedState=i,tn=!0),r=r.queue,Gm(dE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,Ja(9,cE.bind(null,n,r,i,e),void 0,null),wt===null)throw Error(N(349));Yi&30||uE(n,e,i)}return i}function uE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cE(t,e,n,r){e.value=n,e.getSnapshot=r,hE(e)&&fE(t)}function dE(t,e,n){return n(function(){hE(e)&&fE(t)})}function hE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function fE(t){var e=xr(t,1);e!==null&&Mn(e,t,1,-1)}function Yv(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:t},e.queue=t,t=t.dispatch=bP.bind(null,Ke,t),[e.memoizedState,t]}function Ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pE(){return Pn().memoizedState}function bu(t,e,n,r){var i=Qn();Ke.flags|=t,i.memoizedState=Ja(1|e,n,void 0,r===void 0?null:r)}function ed(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,r!==null&&qm(r,o.deps)){i.memoizedState=Ja(e,n,s,r);return}}Ke.flags|=t,i.memoizedState=Ja(1|e,n,s,r)}function Jv(t,e){return bu(8390656,8,t,e)}function Gm(t,e){return ed(2048,8,t,e)}function mE(t,e){return ed(4,2,t,e)}function gE(t,e){return ed(4,4,t,e)}function yE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vE(t,e,n){return n=n!=null?n.concat([t]):null,ed(4,4,yE.bind(null,e,t),n)}function Qm(){}function _E(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function EE(t,e,n){return Yi&21?(Vn(n,e)||(n=S1(),Ke.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function kP(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=Bh.transition;Bh.transition={};try{t(!1),e()}finally{Pe=n,Bh.transition=r}}function TE(){return Pn().memoizedState}function DP(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IE(t))SE(e,n);else if(n=eE(t,e,n,r),n!==null){var i=Gt();Mn(n,t,r,i),AE(n,e,r)}}function bP(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IE(t))SE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(i.next=i,$m(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=eE(t,e,i,r),n!==null&&(i=Gt(),Mn(n,t,r,i),AE(n,e,r))}}function IE(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function SE(t,e){Ea=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function AE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rm(t,n)}}var dc={readContext:Cn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},NP={readContext:Cn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Jv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bu(4194308,4,yE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return bu(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DP.bind(null,Ke,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Yv,useDebugValue:Qm,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Yv(!1),e=t[0];return t=kP.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ke,i=Qn();if(Be){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),wt===null)throw Error(N(349));Yi&30||uE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jv(dE.bind(null,r,s,t),[t]),r.flags|=2048,Ja(9,cE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=wt.identifierPrefix;if(Be){var n=_r,r=vr;n=(r&~(1<<32-Ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OP={readContext:Cn,useCallback:_E,useContext:Cn,useEffect:Gm,useImperativeHandle:vE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:Hh,useRef:pE,useState:function(){return Hh(Ya)},useDebugValue:Qm,useDeferredValue:function(t){var e=Pn();return EE(e,ht.memoizedState,t)},useTransition:function(){var t=Hh(Ya)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1},LP={readContext:Cn,useCallback:_E,useContext:Cn,useEffect:Gm,useImperativeHandle:vE,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:qh,useRef:pE,useState:function(){return qh(Ya)},useDebugValue:Qm,useDeferredValue:function(t){var e=Pn();return ht===null?e.memoizedState=t:EE(e,ht.memoizedState,t)},useTransition:function(){var t=qh(Ya)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1};function po(t,e){try{var n="",r=e;do n+=uC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ip(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MP=typeof WeakMap=="function"?WeakMap:Map;function RE(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fc||(fc=!0,pp=r),ip(t,e)},n}function CE(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ip(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ip(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=YP.bind(null,t,e,n),e.then(t,t))}function Zv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var VP=Lr.ReactCurrentOwner,tn=!1;function Wt(t,e,n,r){e.child=t===null?sE(e,null,n,r):ho(e,t.child,n,r)}function t0(t,e,n,r,i){n=n.render;var s=e.ref;return Zs(e,i),r=Wm(t,e,n,r,s,i),n=Km(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Be&&n&&Om(e),e.flags|=1,Wt(t,e,r,i),e.child)}function n0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,PE(t,e,s,r,i)):(t=Mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function PE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ba(s,r)&&t.ref===e.ref)if(tn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,kr(t,e,i)}return sp(t,e,n,r,i)}function xE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Bs,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(Bs,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(Bs,an),an|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(Bs,an),an|=r;return Wt(t,e,i,n),e.child}function kE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sp(t,e,n,r,i){var s=rn(n)?Gi:Bt.current;return s=uo(e,s),Zs(e,i),n=Wm(t,e,n,r,s,i),r=Km(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Be&&r&&Om(e),e.flags|=1,Wt(t,e,n,i),e.child)}function r0(t,e,n,r,i){if(rn(n)){var s=!0;rc(e)}else s=!1;if(Zs(e,i),e.stateNode===null)Nu(t,e),rE(e,n,r),rp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?Gi:Bt.current,u=uo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Gv(e,o,r,u),qr=!1;var h=e.memoizedState;o.state=h,lc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||nn.current||qr?(typeof c=="function"&&(np(e,n,c,r),l=e.memoizedState),(a=qr||Kv(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Gi:Bt.current,l=uo(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Gv(e,o,r,l),qr=!1,h=e.memoizedState,o.state=h,lc(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||nn.current||qr?(typeof y=="function"&&(np(e,n,y,r),v=e.memoizedState),(u=qr||Kv(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return op(t,e,n,r,s,i)}function op(t,e,n,r,i,s){kE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zv(e,n,!1),kr(t,e,s);r=e.stateNode,VP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=r.state,i&&zv(e,n,!0),e.child}function DE(t){var e=t.stateNode;e.pendingContext?Uv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uv(t,e.context,!1),zm(t,e.containerInfo)}function i0(t,e,n,r,i){return co(),Mm(i),e.flags|=256,Wt(t,e,n,r),e.child}var ap={dehydrated:null,treeContext:null,retryLane:0};function lp(t){return{baseLanes:t,cachePool:null,transitions:null}}function bE(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(qe,i&1),t===null)return ep(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rd(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lp(n),e.memoizedState=ap,t):Ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=li(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=li(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ap,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ym(t,e){return e=rd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,r){return r!==null&&Mm(r),ho(e,t.child,null,n),t=Ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wh(Error(N(422))),cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rd({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=lp(o),e.memoizedState=ap,s);if(!(e.mode&1))return cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Wh(s,r,void 0),cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,tn||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xr(t,i),Mn(r,t,i,-1))}return ng(),r=Wh(Error(N(421))),cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=JP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=ii(i.nextSibling),dn=e,Be=!0,On=null,t!==null&&(wn[En++]=vr,wn[En++]=_r,wn[En++]=Qi,vr=t.id,_r=t.overflow,Qi=e),e=Ym(e,r.children),e.flags|=4096,e)}function s0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tp(t.return,e,n)}function Kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function NE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wt(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,n,e);else if(t.tag===19)s0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kh(e,!0,n,null,s);break;case"together":Kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jP(t,e,n){switch(e.tag){case 3:DE(e),co();break;case 5:oE(e);break;case 1:rn(e.type)&&rc(e);break;case 4:zm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?bE(t,e,n):(Le(qe,qe.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Le(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,xE(t,e,n)}return kr(t,e,n)}var OE,up,LE,ME;OE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};LE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mi(ir.current);var s=null;switch(n){case"input":i=Df(t,i),r=Df(t,r),s=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tc)}Mf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ME=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qo(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $P(t,e,n){var r=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return rn(e.type)&&nc(),Mt(e),null;case 3:return r=e.stateNode,fo(),$e(nn),$e(Bt),Hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(yp(On),On=null))),up(t,e),Mt(e),null;case 5:Bm(e);var i=Mi(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)LE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Mt(e),null}if(t=Mi(ir.current),lu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jn]=e,r[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<la.length;i++)Ve(la[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":pv(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":gv(r,s),Ve("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",""+a]):Ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Zl(r),mv(r,s,!0);break;case"textarea":Zl(r),yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Wa]=r,OE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vf(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<la.length;i++)Ve(la[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":pv(t,r),i=Df(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":gv(t,r),i=Of(t,r),Ve("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?h1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&wm(t,s,l,o))}switch(n){case"input":Zl(t),mv(t,r,!1);break;case"textarea":Zl(t),yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)ME(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Mi(Ga.current),Mi(ir.current),lu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jn]=e,(s=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return Mt(e),null;case 13:if($e(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&ln!==null&&e.mode&1&&!(e.flags&128))Z1(),co(),e.flags|=98560,s=!1;else if(s=lu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Jn]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else On!==null&&(yp(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?ft===0&&(ft=3):ng())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return fo(),up(t,e),t===null&&Ha(e.stateNode.containerInfo),Mt(e),null;case 10:return jm(e.type._context),Mt(e),null;case 17:return rn(e.type)&&nc(),Mt(e),null;case 19:if($e(qe),s=e.memoizedState,s===null)return Mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qo(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,Qo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>mo&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304)}else{if(!r)if(t=uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Mt(e),null}else 2*nt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=qe.current,Le(qe,r?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?an&1073741824&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function UP(t,e){switch(Lm(e),e.tag){case 1:return rn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),$e(nn),$e(Bt),Hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bm(e),null;case 13:if($e(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(qe),null;case 4:return fo(),null;case 10:return jm(e.type._context),null;case 22:case 23:return tg(),null;case 24:return null;default:return null}}var du=!1,jt=!1,zP=typeof WeakSet=="function"?WeakSet:Set,W=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function cp(t,e,n){try{n()}catch(r){Je(t,e,r)}}var o0=!1;function BP(t,e){if(Kf=Xu,t=$1(),Nm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},Xu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,g=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Dn(e.type,w),g);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){Je(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return v=o0,o0=!1,v}function Ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cp(e,n,s)}i=i.next}while(i!==r)}}function td(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VE(t){var e=t.alternate;e!==null&&(t.alternate=null,VE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Wa],delete e[Jf],delete e[AP],delete e[RP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FE(t){return t.tag===5||t.tag===3||t.tag===4}function a0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}var Rt=null,bn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)jE(t,e,n),n=n.sibling}function jE(t,e,n){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:jt||zs(n,e);case 6:var r=Rt,i=bn;Rt=null,Ur(t,e,n),Rt=r,bn=i,Rt!==null&&(bn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(bn?(t=Rt,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),Ua(t)):$h(Rt,n.stateNode));break;case 4:r=Rt,i=bn,Rt=n.stateNode.containerInfo,bn=!0,Ur(t,e,n),Rt=r,bn=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cp(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!jt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Ur(t,e,n),jt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function l0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zP),e.forEach(function(r){var i=XP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,bn=!1;break e;case 3:Rt=a.stateNode.containerInfo,bn=!0;break e;case 4:Rt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Rt===null)throw Error(N(160));jE(s,o,i),Rt=null,bn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$E(e,t),e=e.sibling}function $E(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Gn(t),r&4){try{Ta(3,t,t.return),td(3,t)}catch(w){Je(t,t.return,w)}try{Ta(5,t,t.return)}catch(w){Je(t,t.return,w)}}break;case 1:kn(e,t),Gn(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(kn(e,t),Gn(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{Va(i,"")}catch(w){Je(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a1(i,s),Vf(a,o);var u=Vf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?h1(i,d):c==="dangerouslySetInnerHTML"?c1(i,d):c==="children"?Va(i,d):wm(i,c,d,u)}switch(a){case"input":bf(i,s);break;case"textarea":l1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Qs(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qs(i,!!s.multiple,s.defaultValue,!0):Qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wa]=s}catch(w){Je(t,t.return,w)}}break;case 6:if(kn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Je(t,t.return,w)}}break;case 3:if(kn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(w){Je(t,t.return,w)}break;case 4:kn(e,t),Gn(t);break;case 13:kn(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zm=nt())),r&4&&l0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,kn(e,t),jt=u):kn(e,t),Gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(W=t,c=t.child;c!==null;){for(d=W=c;W!==null;){switch(h=W,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ta(4,h,h.return);break;case 1:zs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Je(r,n,w)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){c0(d);continue}}y!==null?(y.return=h,W=y):c0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d1("display",o))}catch(w){Je(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Je(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),Gn(t),r&4&&l0(t);break;case 21:break;default:kn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FE(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Va(i,""),r.flags&=-33);var s=a0(t);fp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=a0(t);hp(t,a,o);break;default:throw Error(N(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HP(t,e,n){W=t,UE(t)}function UE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jt;a=du;var u=jt;if(du=o,(jt=l)&&!u)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?d0(i):l!==null?(l.return=o,W=l):d0(i);for(;s!==null;)W=s,UE(s),s=s.sibling;W=i,du=a,jt=u}u0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):u0(t)}}function u0(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||td(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ua(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}jt||e.flags&512&&dp(e)}catch(h){Je(e,e.return,h)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function c0(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function d0(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{td(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{dp(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{dp(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var qP=Math.ceil,hc=Lr.ReactCurrentDispatcher,Jm=Lr.ReactCurrentOwner,Sn=Lr.ReactCurrentBatchConfig,Ie=0,wt=null,ot=null,kt=0,an=0,Bs=_i(0),ft=0,Xa=null,Ji=0,nd=0,Xm=0,Ia=null,Zt=null,Zm=0,mo=1/0,gr=null,fc=!1,pp=null,oi=null,hu=!1,Zr=null,pc=0,Sa=0,mp=null,Ou=-1,Lu=0;function Gt(){return Ie&6?nt():Ou!==-1?Ou:Ou=nt()}function ai(t){return t.mode&1?Ie&2&&kt!==0?kt&-kt:PP.transition!==null?(Lu===0&&(Lu=S1()),Lu):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:D1(t.type)),t):1}function Mn(t,e,n,r){if(50<Sa)throw Sa=0,mp=null,Error(N(185));vl(t,n,r),(!(Ie&2)||t!==wt)&&(t===wt&&(!(Ie&2)&&(nd|=n),ft===4&&Kr(t,kt)),sn(t,r),n===1&&Ie===0&&!(e.mode&1)&&(mo=nt()+500,Xc&&wi()))}function sn(t,e){var n=t.callbackNode;PC(t,e);var r=Ju(t,t===wt?kt:0);if(r===0)n!==null&&wv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wv(n),e===1)t.tag===0?CP(h0.bind(null,t)):Y1(h0.bind(null,t)),IP(function(){!(Ie&6)&&wi()}),n=null;else{switch(A1(r)){case 1:n=Am;break;case 4:n=T1;break;case 16:n=Yu;break;case 536870912:n=I1;break;default:n=Yu}n=QE(n,zE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zE(t,e){if(Ou=-1,Lu=0,Ie&6)throw Error(N(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var r=Ju(t,t===wt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mc(t,r);else{e=r;var i=Ie;Ie|=2;var s=HE();(wt!==t||kt!==e)&&(gr=null,mo=nt()+500,Hi(t,e));do try{GP();break}catch(a){BE(t,a)}while(!0);Fm(),hc.current=s,Ie=i,ot!==null?e=0:(wt=null,kt=0,e=ft)}if(e!==0){if(e===2&&(i=zf(t),i!==0&&(r=i,e=gp(t,i))),e===1)throw n=Xa,Hi(t,0),Kr(t,r),sn(t,nt()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!WP(i)&&(e=mc(t,r),e===2&&(s=zf(t),s!==0&&(r=s,e=gp(t,s))),e===1))throw n=Xa,Hi(t,0),Kr(t,r),sn(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Di(t,Zt,gr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=Zm+500-nt(),10<e)){if(Ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yf(Di.bind(null,t,Zt,gr),e);break}Di(t,Zt,gr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qP(r/1960))-r,10<r){t.timeoutHandle=Yf(Di.bind(null,t,Zt,gr),r);break}Di(t,Zt,gr);break;case 5:Di(t,Zt,gr);break;default:throw Error(N(329))}}}return sn(t,nt()),t.callbackNode===n?zE.bind(null,t):null}function gp(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Hi(t,e).flags|=256),t=mc(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&yp(e)),t}function yp(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function WP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~Xm,e&=~nd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),r=1<<n;t[n]=-1,e&=~r}}function h0(t){if(Ie&6)throw Error(N(327));eo();var e=Ju(t,0);if(!(e&1))return sn(t,nt()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var r=zf(t);r!==0&&(e=r,n=gp(t,r))}if(n===1)throw n=Xa,Hi(t,0),Kr(t,e),sn(t,nt()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Di(t,Zt,gr),sn(t,nt()),null}function eg(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(mo=nt()+500,Xc&&wi())}}function Xi(t){Zr!==null&&Zr.tag===0&&!(Ie&6)&&eo();var e=Ie;Ie|=1;var n=Sn.transition,r=Pe;try{if(Sn.transition=null,Pe=1,t)return t()}finally{Pe=r,Sn.transition=n,Ie=e,!(Ie&6)&&wi()}}function tg(){an=Bs.current,$e(Bs)}function Hi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TP(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nc();break;case 3:fo(),$e(nn),$e(Bt),Hm();break;case 5:Bm(r);break;case 4:fo();break;case 13:$e(qe);break;case 19:$e(qe);break;case 10:jm(r.type._context);break;case 22:case 23:tg()}n=n.return}if(wt=t,ot=t=li(t.current,null),kt=an=e,ft=0,Xa=null,Xm=nd=Ji=0,Zt=Ia=null,Li!==null){for(e=0;e<Li.length;e++)if(n=Li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Li=null}return t}function BE(t,e){do{var n=ot;try{if(Fm(),Du.current=dc,cc){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cc=!1}if(Yi=0,_t=ht=Ke=null,Ea=!1,Qa=0,Jm.current=null,n===null||n.return===null){ft=1,Xa=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Zv(o);if(y!==null){y.flags&=-257,e0(y,o,a,s,e),y.mode&1&&Xv(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){Xv(s,u,e),ng();break e}l=Error(N(426))}}else if(Be&&a.mode&1){var g=Zv(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),e0(g,o,a,s,e),Mm(po(l,a));break e}}s=l=po(l,a),ft!==4&&(ft=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=RE(s,l,e);qv(s,p);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(oi===null||!oi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=CE(s,a,e);qv(s,S);break e}}s=s.return}while(s!==null)}WE(n)}catch(x){e=x,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function HE(){var t=hc.current;return hc.current=dc,t===null?dc:t}function ng(){(ft===0||ft===3||ft===2)&&(ft=4),wt===null||!(Ji&268435455)&&!(nd&268435455)||Kr(wt,kt)}function mc(t,e){var n=Ie;Ie|=2;var r=HE();(wt!==t||kt!==e)&&(gr=null,Hi(t,e));do try{KP();break}catch(i){BE(t,i)}while(!0);if(Fm(),Ie=n,hc.current=r,ot!==null)throw Error(N(261));return wt=null,kt=0,ft}function KP(){for(;ot!==null;)qE(ot)}function GP(){for(;ot!==null&&!_C();)qE(ot)}function qE(t){var e=GE(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?WE(t):ot=e,Jm.current=null}function WE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UP(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,ot=null;return}}else if(n=$P(n,e,an),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ft===0&&(ft=5)}function Di(t,e,n){var r=Pe,i=Sn.transition;try{Sn.transition=null,Pe=1,QP(t,e,n,r)}finally{Sn.transition=i,Pe=r}return null}function QP(t,e,n,r){do eo();while(Zr!==null);if(Ie&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xC(t,s),t===wt&&(ot=wt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,QE(Yu,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Sn.transition,Sn.transition=null;var o=Pe;Pe=1;var a=Ie;Ie|=4,Jm.current=null,BP(t,n),$E(n,t),mP(Gf),Xu=!!Kf,Gf=Kf=null,t.current=n,HP(n),wC(),Ie=a,Pe=o,Sn.transition=s}else t.current=n;if(hu&&(hu=!1,Zr=t,pc=i),s=t.pendingLanes,s===0&&(oi=null),IC(n.stateNode),sn(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fc)throw fc=!1,t=pp,pp=null,t;return pc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===mp?Sa++:(Sa=0,mp=t):Sa=0,wi(),null}function eo(){if(Zr!==null){var t=A1(pc),e=Sn.transition,n=Pe;try{if(Sn.transition=null,Pe=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,pc=0,Ie&6)throw Error(N(331));var i=Ie;for(Ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:Ta(8,c,s)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var h=c.sibling,y=c.return;if(VE(c),c===u){W=null;break}if(h!==null){h.return=y,W=h;break}W=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var g=w.sibling;w.sibling=null,w=g}while(w!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,W=p;break e}W=s.return}}var f=t.current;for(W=f;W!==null;){o=W;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,W=_;else e:for(o=f;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:td(9,a)}}catch(x){Je(a,a.return,x)}if(a===o){W=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,W=S;break e}W=a.return}}if(Ie=i,wi(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(Kc,t)}catch{}r=!0}return r}finally{Pe=n,Sn.transition=e}}return!1}function f0(t,e,n){e=po(n,e),e=RE(t,e,1),t=si(t,e,1),e=Gt(),t!==null&&(vl(t,1,e),sn(t,e))}function Je(t,e,n){if(t.tag===3)f0(t,t,n);else for(;e!==null;){if(e.tag===3){f0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=po(n,t),t=CE(e,t,1),e=si(e,t,1),t=Gt(),e!==null&&(vl(e,1,t),sn(e,t));break}}e=e.return}}function YP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(kt&n)===n&&(ft===4||ft===3&&(kt&130023424)===kt&&500>nt()-Zm?Hi(t,0):Xm|=n),sn(t,e)}function KE(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=Gt();t=xr(t,e),t!==null&&(vl(t,e,n),sn(t,n))}function JP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KE(t,n)}function XP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),KE(t,n)}var GE;GE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,jP(t,e,n);tn=!!(t.flags&131072)}else tn=!1,Be&&e.flags&1048576&&J1(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var i=uo(e,Bt.current);Zs(e,n),i=Wm(null,e,r,t,i,n);var s=Km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(r)?(s=!0,rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Um(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,rp(e,r,t,n),e=op(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&Om(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ex(r),t=Dn(r,t),i){case 0:e=sp(null,e,r,t,n);break e;case 1:e=r0(null,e,r,t,n);break e;case 11:e=t0(null,e,r,t,n);break e;case 14:e=n0(null,e,r,Dn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),sp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),r0(t,e,r,i,n);case 3:e:{if(DE(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tE(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(N(423)),e),e=i0(t,e,r,n,i);break e}else if(r!==i){i=po(Error(N(424)),e),e=i0(t,e,r,n,i);break e}else for(ln=ii(e.stateNode.containerInfo.firstChild),dn=e,Be=!0,On=null,n=sE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=kr(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return oE(e),t===null&&ep(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qf(r,i)?o=null:s!==null&&Qf(r,s)&&(e.flags|=32),kE(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&ep(e),null;case 13:return bE(t,e,n);case 4:return zm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),t0(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(oc,r._currentValue),r._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===i.children&&!nn.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zs(e,n),i=Cn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Dn(r,e.pendingProps),i=Dn(r.type,i),n0(t,e,r,i,n);case 15:return PE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),Nu(t,e),e.tag=1,rn(r)?(t=!0,rc(e)):t=!1,Zs(e,n),rE(e,r,i),rp(e,r,i,n),op(null,e,r,!0,t,n);case 19:return NE(t,e,n);case 22:return xE(t,e,n)}throw Error(N(156,e.tag))};function QE(t,e){return E1(t,e)}function ZP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new ZP(t,e,n,r)}function rg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return rg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tm)return 11;if(t===Im)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return qi(n.children,i,s,e);case Em:o=8,i|=8;break;case Cf:return t=In(12,n,e,i|2),t.elementType=Cf,t.lanes=s,t;case Pf:return t=In(13,n,e,i),t.elementType=Pf,t.lanes=s,t;case xf:return t=In(19,n,e,i),t.elementType=xf,t.lanes=s,t;case i1:return rd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n1:o=10;break e;case r1:o=9;break e;case Tm:o=11;break e;case Im:o=14;break e;case Hr:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function rd(t,e,n,r){return t=In(22,t,r,e),t.elementType=i1,t.lanes=n,t.stateNode={isHidden:!1},t}function Gh(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Qh(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ig(t,e,n,r,i,s,o,a,l){return t=new tx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Um(s),t}function nx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function YE(t){if(!t)return pi;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(rn(n))return Q1(t,n,e)}return e}function JE(t,e,n,r,i,s,o,a,l){return t=ig(n,r,!0,t,i,s,o,a,l),t.context=YE(null),n=t.current,r=Gt(),i=ai(n),s=Sr(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,vl(t,i,r),sn(t,r),t}function id(t,e,n,r){var i=e.current,s=Gt(),o=ai(i);return n=YE(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&(Mn(t,i,o,s),ku(t,i,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sg(t,e){p0(t,e),(t=t.alternate)&&p0(t,e)}function rx(){return null}var XE=typeof reportError=="function"?reportError:function(t){console.error(t)};function og(t){this._internalRoot=t}sd.prototype.render=og.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));id(t,e,null,null)};sd.prototype.unmount=og.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){id(null,t,null,null)}),e[Pr]=null}};function sd(t){this._internalRoot=t}sd.prototype.unstable_scheduleHydration=function(t){if(t){var e=P1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&k1(t)}};function ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m0(){}function ix(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gc(o);s.call(u)}}var o=JE(e,r,t,0,null,!1,!1,"",m0);return t._reactRootContainer=o,t[Pr]=o.current,Ha(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gc(l);a.call(u)}}var l=ig(t,0,!1,null,null,!1,!1,"",m0);return t._reactRootContainer=l,t[Pr]=l.current,Ha(t.nodeType===8?t.parentNode:t),Xi(function(){id(e,l,n,r)}),l}function ad(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gc(o);a.call(l)}}id(e,o,t,i)}else o=ix(n,e,t,i,r);return gc(o)}R1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Rm(e,n|1),sn(e,nt()),!(Ie&6)&&(mo=nt()+500,wi()))}break;case 13:Xi(function(){var r=xr(t,1);if(r!==null){var i=Gt();Mn(r,t,1,i)}}),sg(t,1)}};Cm=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Gt();Mn(e,t,134217728,n)}sg(t,134217728)}};C1=function(t){if(t.tag===13){var e=ai(t),n=xr(t,e);if(n!==null){var r=Gt();Mn(n,t,e,r)}sg(t,e)}};P1=function(){return Pe};x1=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};jf=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jc(r);if(!i)throw Error(N(90));o1(r),bf(r,i)}}}break;case"textarea":l1(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};m1=eg;g1=Xi;var sx={usingClientEntryPoint:!1,Events:[wl,Vs,Jc,f1,p1,eg]},Yo={findFiberByHostInstance:Oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ox={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_1(t),t===null?null:t.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Kc=fu.inject(ox),rr=fu}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ag(e))throw Error(N(200));return nx(t,e,null,n)};mn.createRoot=function(t,e){if(!ag(t))throw Error(N(299));var n=!1,r="",i=XE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ig(t,1,!1,null,null,n,!1,r,i),t[Pr]=e.current,Ha(t.nodeType===8?t.parentNode:t),new og(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=_1(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Xi(t)};mn.hydrate=function(t,e,n){if(!od(e))throw Error(N(200));return ad(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!ag(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=XE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JE(e,null,t,1,n??null,i,!1,s,o),t[Pr]=e.current,Ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sd(e)};mn.render=function(t,e,n){if(!od(e))throw Error(N(200));return ad(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!od(t))throw Error(N(40));return t._reactRootContainer?(Xi(function(){ad(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};mn.unstable_batchedUpdates=eg;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!od(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return ad(t,e,n,!1,r)};mn.version="18.2.0-next-9e3b772b8-20220608";function ZE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZE)}catch(t){console.error(t)}}ZE(),Jw.exports=mn;var lg=Jw.exports;const ax=fm(lg),lx=$w({__proto__:null,default:ax},[lg]);var eT,g0=lg;eT=g0.createRoot,g0.hydrateRoot;var y0={};/**
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
 */const tT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ux=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(h=64)),r.push(n[c],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ux(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new cx;const h=s<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dx=function(t){const e=tT(t);return nT.encodeByteArray(e,!0)},yc=function(t){return dx(t).replace(/\./g,"")},rT=function(t){try{return nT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fx=()=>hx().__FIREBASE_DEFAULTS__,px=()=>{if(typeof process>"u"||typeof y0>"u")return;const t=y0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rT(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return fx()||px()||mx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iT=t=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gx=t=>{const e=iT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sT=()=>{var t;return(t=ld())===null||t===void 0?void 0:t.config},oT=t=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let yx=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function vx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yc(JSON.stringify(n)),yc(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _x(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function wx(){var t;const e=(t=ld())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ug(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ex(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tx(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ix(){return!wx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function cg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function aT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sx="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sx,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ax(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function Ax(t,e){return t.replace(Rx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rx=/\{\$([^}]+)}/g;function Cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v0(s)&&v0(o)){if(!Zi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v0(t){return t!==null&&typeof t=="object"}/**
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
 */function Tl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Px(t,e){const n=new xx(t,e);return n.subscribe.bind(n)}class xx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yh),i.error===void 0&&(i.error=Yh),i.complete===void 0&&(i.complete=Yh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yh(){}/**
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
 */const Dx=1e3,bx=2,Nx=4*60*60*1e3,Ox=.5;function _0(t,e=Dx,n=bx){const r=e*Math.pow(n,t),i=Math.round(Ox*r*(Math.random()-.5)*2);return Math.min(Nx,r+i)}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bi="[DEFAULT]";/**
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
 */class Lx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vx(e))try{this.getOrInitializeService({instanceIdentifier:bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bi){return this.instances.has(e)}getOptions(e=bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bi){return this.component?this.component.multipleInstances?e:bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mx(t){return t===bi?void 0:t}function Vx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const jx={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},$x=we.INFO,Ux={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},zx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ux[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=$x,this._logHandler=zx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Bx=(t,e)=>e.some(n=>t instanceof n);let w0,E0;function Hx(){return w0||(w0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qx(){return E0||(E0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lT=new WeakMap,vp=new WeakMap,uT=new WeakMap,Jh=new WeakMap,dg=new WeakMap;function Wx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lT.set(n,t)}).catch(()=>{}),dg.set(e,t),e}function Kx(t){if(vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vp.set(t,e)}let _p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gx(t){_p=t(_p)}function Qx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xh(this),e,...n);return uT.set(r,e.sort?e.sort():[e]),ui(r)}:qx().includes(t)?function(...e){return t.apply(Xh(this),e),ui(lT.get(this))}:function(...e){return ui(t.apply(Xh(this),e))}}function Yx(t){return typeof t=="function"?Qx(t):(t instanceof IDBTransaction&&Kx(t),Bx(t,Hx())?new Proxy(t,_p):t)}function ui(t){if(t instanceof IDBRequest)return Wx(t);if(Jh.has(t))return Jh.get(t);const e=Yx(t);return e!==t&&(Jh.set(t,e),dg.set(e,t)),e}const Xh=t=>dg.get(t);function cT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ui(o.result),l.oldVersion,l.newVersion,ui(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Jx=["get","getKey","getAll","getAllKeys","count"],Xx=["put","add","delete","clear"],Zh=new Map;function T0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zh.set(e,s),s}Gx(t=>({...t,get:(e,n,r)=>T0(e,n)||t.get(e,n,r),has:(e,n)=>!!T0(e,n)||t.has(e,n)}));/**
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
 */class Zx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",I0="0.10.1";/**
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
 */const es=new cd("@firebase/app"),tk="@firebase/app-compat",nk="@firebase/analytics-compat",rk="@firebase/analytics",ik="@firebase/app-check-compat",sk="@firebase/app-check",ok="@firebase/auth",ak="@firebase/auth-compat",lk="@firebase/database",uk="@firebase/database-compat",ck="@firebase/functions",dk="@firebase/functions-compat",hk="@firebase/installations",fk="@firebase/installations-compat",pk="@firebase/messaging",mk="@firebase/messaging-compat",gk="@firebase/performance",yk="@firebase/performance-compat",vk="@firebase/remote-config",_k="@firebase/remote-config-compat",wk="@firebase/storage",Ek="@firebase/storage-compat",Tk="@firebase/firestore",Ik="@firebase/firestore-compat",Sk="firebase",Ak="10.11.0";/**
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
 */const Ep="[DEFAULT]",Rk={[wp]:"fire-core",[tk]:"fire-core-compat",[rk]:"fire-analytics",[nk]:"fire-analytics-compat",[sk]:"fire-app-check",[ik]:"fire-app-check-compat",[ok]:"fire-auth",[ak]:"fire-auth-compat",[lk]:"fire-rtdb",[uk]:"fire-rtdb-compat",[ck]:"fire-fn",[dk]:"fire-fn-compat",[hk]:"fire-iid",[fk]:"fire-iid-compat",[pk]:"fire-fcm",[mk]:"fire-fcm-compat",[gk]:"fire-perf",[yk]:"fire-perf-compat",[vk]:"fire-rc",[_k]:"fire-rc-compat",[wk]:"fire-gcs",[Ek]:"fire-gcs-compat",[Tk]:"fire-fst",[Ik]:"fire-fst-compat","fire-js":"fire-js",[Sk]:"fire-js-all"};/**
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
 */const vc=new Map,Ck=new Map,Tp=new Map;function S0(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cr(t){const e=t.name;if(Tp.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Tp.set(e,t);for(const n of vc.values())S0(n,t);for(const n of Ck.values())S0(n,t);return!0}function ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
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
 */const Pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new fs("app","Firebase",Pk);/**
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
 */class xk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=Ak;function dT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ep,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ci.create("bad-app-name",{appName:String(i)});if(n||(n=sT()),!n)throw ci.create("no-options");const s=vc.get(i);if(s){if(Zi(n,s.options)&&Zi(r,s.config))return s;throw ci.create("duplicate-app",{appName:i})}const o=new Fx(i);for(const l of Tp.values())o.addComponent(l);const a=new xk(n,r,o);return vc.set(i,a),a}function hg(t=Ep){const e=vc.get(t);if(!e&&t===Ep&&sT())return dT();if(!e)throw ci.create("no-app",{appName:t});return e}function An(t,e,n){var r;let i=(r=Rk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}cr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const kk="firebase-heartbeat-database",Dk=1,Za="firebase-heartbeat-store";let ef=null;function hT(){return ef||(ef=cT(kk,Dk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Za)}catch(n){console.warn(n)}}}}).catch(t=>{throw ci.create("idb-open",{originalErrorMessage:t.message})})),ef}async function bk(t){try{const n=(await hT()).transaction(Za),r=await n.objectStore(Za).get(fT(t));return await n.done,r}catch(e){if(e instanceof Hn)es.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function A0(t,e){try{const r=(await hT()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,fT(t)),await r.done}catch(n){if(n instanceof Hn)es.warn(n.message);else{const r=ci.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function fT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nk=1024,Ok=30*24*60*60*1e3;class Lk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=R0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ok}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R0(),{heartbeatsToSend:r,unsentEntries:i}=Mk(this._heartbeatsCache.heartbeats),s=yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function R0(){return new Date().toISOString().substring(0,10)}function Mk(t,e=Nk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),C0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),C0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return A0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function C0(t){return yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fk(t){cr(new Fn("platform-logger",e=>new Zx(e),"PRIVATE")),cr(new Fn("heartbeat",e=>new Lk(e),"PRIVATE")),An(wp,I0,t),An(wp,I0,"esm2017"),An("fire-js","")}Fk("");var jk="firebase",$k="10.11.0";/**
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
 */An(jk,$k,"app");function fg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uk=pT,mT=new fs("auth","Firebase",pT());/**
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
 */const _c=new cd("@firebase/auth");function zk(t,...e){_c.logLevel<=we.WARN&&_c.warn(`Auth (${bo}): ${t}`,...e)}function Vu(t,...e){_c.logLevel<=we.ERROR&&_c.error(`Auth (${bo}): ${t}`,...e)}/**
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
 */function jn(t,...e){throw pg(t,...e)}function sr(t,...e){return pg(t,...e)}function gT(t,e,n){const r=Object.assign(Object.assign({},Uk()),{[e]:n});return new fs("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return gT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mT.create(t,...e)}function te(t,e,...n){if(!t)throw pg(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function Dr(t,e){t||wr(e)}/**
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
 */function Ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bk(){return P0()==="http:"||P0()==="https:"}function P0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bk()||ug()||"connection"in navigator)?navigator.onLine:!0}function qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Il{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dr(n>e,"Short delay should be less than long delay!"),this.isMobile=_x()||Ex()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mg(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kk=new Il(3e4,6e4);function Ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ti(t,e,n,r,i={}){return vT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Tl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),yT.fetch()(_T(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wk),e);try{const i=new Qk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gT(t,c,u);jn(t,c)}}catch(i){if(i instanceof Hn)throw i;jn(t,"network-request-failed",{message:String(i)})}}async function Sl(t,e,n,r,i={}){const s=await Ti(t,e,n,r,i);return"mfaPendingCredential"in s&&jn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _T(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mg(t.config,i):`${t.config.apiScheme}://${i}`}function Gk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sr(this.auth,"network-request-failed")),Kk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sr(t,e,r);return i.customData._tokenResponse=n,i}function x0(t){return t!==void 0&&t.enterprise!==void 0}class Yk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Jk(t,e){return Ti(t,"GET","/v2/recaptchaConfig",Ei(t,e))}/**
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
 */async function Xk(t,e){return Ti(t,"POST","/v1/accounts:delete",e)}async function wT(t,e){return Ti(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zk(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=gg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Aa(tf(i.auth_time)),issuedAtTime:Aa(tf(i.iat)),expirationTime:Aa(tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tf(t){return Number(t)*1e3}function gg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=rT(n);return i?JSON.parse(i):(Vu("Failed to decode base64 JWT payload"),null)}catch(i){return Vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function k0(t){const e=gg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function el(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&eD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await el(t,wT(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ET(s.providerUserInfo):[],a=rD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function nD(t){const e=Et(t);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ET(t){return t.map(e=>{var{providerId:n}=e,r=fg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function iD(t,e){const n=await vT(t,{},async()=>{const r=Tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_T(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sD(t,e){return Ti(t,"POST","/v2/accounts:revokeToken",Ei(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):k0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=k0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function zr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await el(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zk(this,e)}reload(){return nD(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await el(this,Xk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:S,isAnonymous:x,providerData:E,stsTokenManager:C}=n;te(_&&C,e,"internal-error");const b=to.fromJSON(this.name,C);te(typeof _=="string",e,"internal-error"),zr(d,e.name),zr(h,e.name),te(typeof S=="boolean",e,"internal-error"),te(typeof x=="boolean",e,"internal-error"),zr(y,e.name),zr(v,e.name),zr(w,e.name),zr(g,e.name),zr(p,e.name),zr(f,e.name);const F=new Er({uid:_,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:x,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:f});return E&&Array.isArray(E)&&(F.providerData=E.map(q=>Object.assign({},q))),g&&(F._redirectEventId=g),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ET(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new to;a.updateFromIdToken(r);const l=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const D0=new Map;function Tr(t){Dr(t instanceof Function,"Expected a class definition");let e=D0.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,D0.set(t,e),e)}/**
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
 */class TT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TT.type="NONE";const b0=TT;/**
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
 */function Fu(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(Tr(b0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tr(b0);const o=Fu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Er._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
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
 */function N0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(IT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(PT(e))return"Webos";if(yg(e))return"Safari";if((e.includes("chrome/")||ST(e))&&!e.includes("edge/"))return"Chrome";if(RT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function IT(t=ut()){return/firefox\//i.test(t)}function yg(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ST(t=ut()){return/crios\//i.test(t)}function AT(t=ut()){return/iemobile/i.test(t)}function RT(t=ut()){return/android/i.test(t)}function CT(t=ut()){return/blackberry/i.test(t)}function PT(t=ut()){return/webos/i.test(t)}function dd(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oD(t=ut()){var e;return dd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aD(){return Tx()&&document.documentMode===10}function xT(t=ut()){return dd(t)||RT(t)||PT(t)||CT(t)||/windows phone/i.test(t)||AT(t)}function lD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kT(t,e=[]){let n;switch(t){case"Browser":n=N0(ut());break;case"Worker":n=`${N0(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${r}`}/**
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
 */class uD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cD(t,e={}){return Ti(t,"GET","/v2/passwordPolicy",Ei(t,e))}/**
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
 */const dD=6;class hD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class fD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new O0(this),this.idTokenSubscription=new O0(this),this.beforeStateQueue=new uD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wT(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Ar(this));const n=e?Et(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cD(this),n=new hD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ms(t){return Et(t)}class O0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Px(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pD(t){hd=t}function DT(t){return hd.loadJS(t)}function mD(){return hd.recaptchaEnterpriseScript}function gD(){return hd.gapiScript}function yD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vD="recaptcha-enterprise",_D="NO_RECAPTCHA";class wD{constructor(e){this.type=vD,this.auth=ms(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Jk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;x0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(_D)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&x0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mD();l.length!==0&&(l+=a),DT(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function L0(t,e,n,r=!1){const i=new wD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ap(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await L0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await L0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function ED(t,e){const n=ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zi(s,e??{}))return i;jn(i,"already-initialized")}return n.initialize({options:e})}function TD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ID(t,e,n){const r=ms(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bT(e),{host:o,port:a}=SD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AD()}function bT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SD(t){const e=bT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:M0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:M0(o)}}}function M0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function RD(t,e){return Ti(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CD(t,e){return Sl(t,"POST","/v1/accounts:signInWithPassword",Ei(t,e))}/**
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
 */async function PD(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,e))}async function xD(t,e){return Sl(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,e))}/**
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
 */class tl extends vg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ap(e,n,"signInWithPassword",CD);case"emailLink":return PD(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ap(e,r,"signUpPassword",RD);case"emailLink":return xD(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ro(t,e){return Sl(t,"POST","/v1/accounts:signInWithIdp",Ei(t,e))}/**
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
 */const kD="http://localhost";class ts extends vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:kD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tl(n)}return e}}/**
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
 */function DD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bD(t){const e=ua(ca(t)).link,n=e?ua(ca(e)).deep_link_id:null,r=ua(ca(t)).deep_link_id;return(r?ua(ca(r)).link:null)||r||n||e||t}class _g{constructor(e){var n,r,i,s,o,a;const l=ua(ca(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=DD((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bD(e);try{return new _g(n)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,n){return tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_g.parseLink(n);return te(r,"argument-error"),tl._fromEmailAndCode(e,r.code,r.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends NT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends Al{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class Yr extends Al{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Jr extends Al{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */async function ND(t,e){return Sl(t,"POST","/v1/accounts:signUp",Ei(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Er._fromIdTokenResponse(e,r,i),o=V0(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=V0(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function V0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ec extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ec(e,n,r,i)}}function OT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(t,s,e,r):s})}async function OD(t,e,n=!1){const r=await el(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function LD(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject(Ar(r));const i="reauthenticate";try{const s=await el(t,OT(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=gg(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jn(r,"user-mismatch"),s}}/**
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
 */async function LT(t,e,n=!1){if(Zn(t.app))return Promise.reject(Ar(t));const r="signIn",i=await OT(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function MD(t,e){return LT(ms(t),e)}/**
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
 */async function MT(t){const e=ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VD(t,e,n){if(Zn(t.app))return Promise.reject(Ar(t));const r=ms(t),o=await Ap(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ND).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&MT(t),l}),a=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function FD(t,e,n){return Zn(t.app)?Promise.reject(Ar(t)):MD(Et(t),No.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&MT(t),r})}function jD(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function $D(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}const Tc="__sak";/**
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
 */class VT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function UD(){const t=ut();return yg(t)||dd(t)}const zD=1e3,BD=10;class FT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UD()&&lD(),this.fallbackToPolling=xT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);aD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FT.type="LOCAL";const HD=FT;/**
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
 */class jT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jT.type="SESSION";const $T=jT;/**
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
 */function qD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await qD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fd.receivers=[];/**
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
 */function wg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function or(){return window}function KD(t){or().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function GD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YD(){return UT()?self:null}/**
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
 */const zT="firebaseLocalStorageDb",JD=1,Ic="firebaseLocalStorage",BT="fbase_key";class Rl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pd(t,e){return t.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function XD(){const t=indexedDB.deleteDatabase(zT);return new Rl(t).toPromise()}function Rp(){const t=indexedDB.open(zT,JD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ic,{keyPath:BT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ic)?e(r):(r.close(),await XD(),e(await Rp()))})})}async function F0(t,e,n){const r=pd(t,!0).put({[BT]:e,value:n});return new Rl(r).toPromise()}async function ZD(t,e){const n=pd(t,!1).get(e),r=await new Rl(n).toPromise();return r===void 0?null:r.value}function j0(t,e){const n=pd(t,!0).delete(e);return new Rl(n).toPromise()}const eb=800,tb=3;class HT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fd._getInstance(YD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GD(),!this.activeServiceWorker)return;this.sender=new WD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rp();return await F0(e,Tc,"1"),await j0(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>F0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ZD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>j0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pd(i,!1).getAll();return new Rl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HT.type="LOCAL";const nb=HT;new Il(3e4,6e4);/**
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
 */function rb(t,e){return e?Tr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eg extends vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ib(t){return LT(t.auth,new Eg(t),t.bypassAuthState)}function sb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),LD(n,new Eg(t),t.bypassAuthState)}async function ob(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),OD(n,new Eg(t),t.bypassAuthState)}/**
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
 */class qT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ib;case"linkViaPopup":case"linkViaRedirect":return ob;case"reauthViaPopup":case"reauthViaRedirect":return sb;default:jn(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ab=new Il(2e3,1e4);class Hs extends qT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ab.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const lb="pendingRedirect",ju=new Map;class ub extends qT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const r=await cb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ju.set(this.auth._key(),e)}return this.bypassAuthState||ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cb(t,e){const n=fb(e),r=hb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function db(t,e){ju.set(t._key(),e)}function hb(t){return Tr(t._redirectPersistence)}function fb(t){return Fu(lb,t.config.apiKey,t.name)}async function pb(t,e,n=!1){if(Zn(t.app))return Promise.reject(Ar(t));const r=ms(t),i=rb(r,e),o=await new ub(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const mb=10*60*1e3;class gb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mb&&this.cachedEventUids.clear(),this.cachedEventUids.has($0(e))}saveEventToCache(e){this.cachedEventUids.add($0(e)),this.lastProcessedEventTime=Date.now()}}function $0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WT(t);default:return!1}}/**
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
 */async function vb(t,e={}){return Ti(t,"GET","/v1/projects",e)}/**
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
 */const _b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function Eb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vb(t);for(const n of e)try{if(Tb(n))return}catch{}jn(t,"unauthorized-domain")}function Tb(t){const e=Ip(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wb.test(n))return!1;if(_b.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=new Il(3e4,6e4);function U0(){const t=or().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sb(t){return new Promise((e,n)=>{var r,i,s;function o(){U0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{U0(),n(sr(t,"network-request-failed"))},timeout:Ib.get()})}if(!((i=(r=or().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=or().gapi)===null||s===void 0)&&s.load)o();else{const a=yD("iframefcb");return or()[a]=()=>{gapi.load?o():n(sr(t,"network-request-failed"))},DT(`${gD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $u=null,e})}let $u=null;function Ab(t){return $u=$u||Sb(t),$u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Il(5e3,15e3),Cb="__/auth/iframe",Pb="emulator/auth/iframe",xb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Db(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mg(e,Pb):`https://${t.config.authDomain}/${Cb}`,r={apiKey:e.apiKey,appName:t.name,v:bo},i=kb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Tl(r).slice(1)}`}async function bb(t){const e=await Ab(t),n=or().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:Db(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sr(t,"network-request-failed"),a=or().setTimeout(()=>{s(o)},Rb.get());function l(){or().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ob=500,Lb=600,Mb="_blank",Vb="http://localhost";class z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fb(t,e,n,r=Ob,i=Lb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Nb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=ST(u)?Mb:n),IT(u)&&(e=e||Vb,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[y,v])=>`${h}${y}=${v},`,"");if(oD(u)&&a!=="_self")return jb(e||"",a),new z0(null);const d=window.open(e||"",a,c);te(d,t,"popup-blocked");try{d.focus()}catch{}return new z0(d)}function jb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $b="__/auth/handler",Ub="emulator/auth/handler",zb=encodeURIComponent("fac");async function B0(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:i};if(e instanceof NT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Al){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${zb}=${encodeURIComponent(l)}`:"";return`${Bb(t)}?${Tl(a).slice(1)}${u}`}function Bb({config:t}){return t.emulator?mg(t,Ub):`https://${t.authDomain}/${$b}`}/**
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
 */const nf="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$T,this._completeRedirectFn=pb,this._overrideRedirectResult=db}async _openPopup(e,n,r,i){var s;Dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await B0(e,n,r,Ip(),i);return Fb(e,o,wg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await B0(e,n,r,Ip(),i);return KD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bb(e),r=new gb(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nf,{type:nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nf];o!==void 0&&n(!!o),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xT()||yg()||dd()}}const qb=Hb;var H0="@firebase/auth",q0="1.7.1";/**
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
 */class Wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gb(t){cr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kT(t)},u=new fD(r,i,s,l);return TD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cr(new Fn("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(r=>new Wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(H0,q0,Kb(t)),An(H0,q0,"esm2017")}/**
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
 */const Qb=5*60,Yb=oT("authIdTokenMaxAge")||Qb;let W0=null;const Jb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yb)return;const i=n==null?void 0:n.token;W0!==i&&(W0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cl(t=hg()){const e=ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ED(t,{popupRedirectResolver:qb,persistence:[nb,HD,$T]}),r=oT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Jb(s.toString());$D(n,o,()=>o(n.currentUser)),jD(n,a=>o(a))}}const i=iT("auth");return i&&ID(n,`http://${i}`),n}function Xb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Xb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gb("Browser");const KT="@firebase/installations",Tg="0.6.6";/**
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
 */const GT=1e4,QT=`w:${Tg}`,YT="FIS_v2",Zb="https://firebaseinstallations.googleapis.com/v1",e2=60*60*1e3,t2="installations",n2="Installations";/**
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
 */const r2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new fs(t2,n2,r2);function JT(t){return t instanceof Hn&&t.code.includes("request-failed")}/**
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
 */function XT({projectId:t}){return`${Zb}/projects/${t}/installations`}function ZT(t){return{token:t.token,requestStatus:2,expiresIn:s2(t.expiresIn),creationTime:Date.now()}}async function eI(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function tI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function i2(t,{refreshToken:e}){const n=tI(t);return n.append("Authorization",o2(e)),n}async function nI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function s2(t){return Number(t.replace("s","000"))}function o2(t){return`${YT} ${t}`}/**
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
 */async function a2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XT(t),i=tI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:YT,appId:t.appId,sdkVersion:QT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ZT(u.authToken)}}else throw await eI("Create Installation",l)}/**
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
 */function rI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function l2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const u2=/^[cdef][\w-]{21}$/,Cp="";function c2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=d2(t);return u2.test(n)?n:Cp}catch{return Cp}}function d2(t){return l2(t).substr(0,22)}/**
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
 */function md(t){return`${t.appName}!${t.appId}`}/**
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
 */const iI=new Map;function sI(t,e){const n=md(t);oI(n,e),h2(n,e)}function oI(t,e){const n=iI.get(t);if(n)for(const r of n)r(e)}function h2(t,e){const n=f2();n&&n.postMessage({key:t,fid:e}),p2()}let Vi=null;function f2(){return!Vi&&"BroadcastChannel"in self&&(Vi=new BroadcastChannel("[Firebase] FID Change"),Vi.onmessage=t=>{oI(t.data.key,t.data.fid)}),Vi}function p2(){iI.size===0&&Vi&&(Vi.close(),Vi=null)}/**
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
 */const m2="firebase-installations-database",g2=1,is="firebase-installations-store";let rf=null;function Ig(){return rf||(rf=cT(m2,g2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),rf}async function Sc(t,e){const n=md(t),i=(await Ig()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&sI(t,e.fid),e}async function aI(t){const e=md(t),r=(await Ig()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function gd(t,e){const n=md(t),i=(await Ig()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&sI(t,a.fid),a}/**
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
 */async function Sg(t){let e;const n=await gd(t.appConfig,r=>{const i=y2(r),s=v2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Cp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function y2(t){const e=t||{fid:c2(),registrationStatus:0};return lI(e)}function v2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:w2(t)}:{installationEntry:e}}async function _2(t,e){try{const n=await a2(t,e);return Sc(t.appConfig,n)}catch(n){throw JT(n)&&n.customData.serverCode===409?await aI(t.appConfig):await Sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function w2(t){let e=await K0(t.appConfig);for(;e.registrationStatus===1;)await rI(100),e=await K0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sg(t);return r||n}return e}function K0(t){return gd(t,e=>{if(!e)throw rs.create("installation-not-found");return lI(e)})}function lI(t){return E2(t)?{fid:t.fid,registrationStatus:0}:t}function E2(t){return t.registrationStatus===1&&t.registrationTime+GT<Date.now()}/**
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
 */async function T2({appConfig:t,heartbeatServiceProvider:e},n){const r=I2(t,n),i=i2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:QT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await nI(()=>fetch(r,a));if(l.ok){const u=await l.json();return ZT(u)}else throw await eI("Generate Auth Token",l)}function I2(t,{fid:e}){return`${XT(t)}/${e}/authTokens:generate`}/**
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
 */async function Ag(t,e=!1){let n;const r=await gd(t.appConfig,s=>{if(!uI(s))throw rs.create("not-registered");const o=s.authToken;if(!e&&R2(o))return s;if(o.requestStatus===1)return n=S2(t,e),s;{if(!navigator.onLine)throw rs.create("app-offline");const a=P2(s);return n=A2(t,a),a}});return n?await n:r.authToken}async function S2(t,e){let n=await G0(t.appConfig);for(;n.authToken.requestStatus===1;)await rI(100),n=await G0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ag(t,e):r}function G0(t){return gd(t,e=>{if(!uI(e))throw rs.create("not-registered");const n=e.authToken;return x2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function A2(t,e){try{const n=await T2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Sc(t.appConfig,r),n}catch(n){if(JT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sc(t.appConfig,r)}throw n}}function uI(t){return t!==void 0&&t.registrationStatus===2}function R2(t){return t.requestStatus===2&&!C2(t)}function C2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e2}function P2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function x2(t){return t.requestStatus===1&&t.requestTime+GT<Date.now()}/**
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
 */async function k2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sg(e);return r?r.catch(console.error):Ag(e).catch(console.error),n.fid}/**
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
 */async function D2(t,e=!1){const n=t;return await b2(n),(await Ag(n,e)).token}async function b2(t){const{registrationPromise:e}=await Sg(t);e&&await e}/**
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
 */function N2(t){if(!t||!t.options)throw sf("App Configuration");if(!t.name)throw sf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sf(t){return rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const cI="installations",O2="installations-internal",L2=t=>{const e=t.getProvider("app").getImmediate(),n=N2(e),r=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},M2=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,cI).getImmediate();return{getId:()=>k2(n),getToken:i=>D2(n,i)}};function V2(){cr(new Fn(cI,L2,"PUBLIC")),cr(new Fn(O2,M2,"PRIVATE"))}V2();An(KT,Tg);An(KT,Tg,"esm2017");/**
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
 */const Ac="analytics",F2="firebase_id",j2="origin",$2=60*1e3,U2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rg="https://www.googletagmanager.com/gtag/js";/**
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
 */const on=new cd("@firebase/analytics");/**
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
 */const z2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new fs("analytics","Analytics",z2);/**
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
 */function B2(t){if(!t.startsWith(Rg)){const e=hn.create("invalid-gtag-resource",{gtagURL:t});return on.warn(e.message),""}return t}function dI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function H2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function q2(t,e){const n=H2("firebase-js-sdk-policy",{createScriptURL:B2}),r=document.createElement("script"),i=`${Rg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function W2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function K2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await dI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){on.error(a)}t("config",i,s)}async function G2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await dI(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){on.error(s)}}function Q2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await G2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await K2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){on.error(a)}}return i}function Y2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Q2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function J2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Rg)&&n.src.includes(t))return n;return null}/**
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
 */const X2=30,Z2=1e3;class eN{constructor(e={},n=Z2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hI=new eN;function tN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:tN(r)},s=U2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function rN(t,e=hI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw hn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw hn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new oN;return setTimeout(async()=>{a.abort()},n!==void 0?n:$2),fI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function fI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=hI){var s;const{appId:o,measurementId:a}=t;try{await iN(r,e)}catch(l){if(a)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await nN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!sN(u)){if(i.deleteThrottleMetadata(o),a)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?_0(n,i.intervalMillis,X2):_0(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),on.debug(`Calling attemptFetch again in ${c} millis`),fI(t,d,r,i)}}function iN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sN(t){if(!(t instanceof Hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class oN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function lN(){if(ud())try{await cg()}catch(t){return on.warn(hn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return on.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uN(t,e,n,r,i,s,o){var a;const l=rN(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>on.error(y)),e.push(l);const u=lN().then(y=>{if(y)return r.getId()}),[c,d]=await Promise.all([l,u]);J2(s)||q2(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[j2]="firebase",h.update=!0,d!=null&&(h[F2]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class cN{constructor(e){this.app=e}_delete(){return delete Ra[this.app.options.appId],Promise.resolve()}}let Ra={},Q0=[];const Y0={};let of="dataLayer",dN="gtag",J0,pI,X0=!1;function hN(){const t=[];if(ug()&&t.push("This is a browser extension environment."),aT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=hn.create("invalid-analytics-context",{errorInfo:e});on.warn(n.message)}}function fN(t,e,n){hN();const r=t.options.appId;if(!r)throw hn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Ra[r]!=null)throw hn.create("already-exists",{id:r});if(!X0){W2(of);const{wrappedGtag:s,gtagCore:o}=Y2(Ra,Q0,Y0,of,dN);pI=s,J0=o,X0=!0}return Ra[r]=uN(t,Q0,Y0,e,J0,of,n),new cN(t)}function pN(t=hg()){t=Et(t);const e=ps(t,Ac);return e.isInitialized()?e.getImmediate():mN(t)}function mN(t,e={}){const n=ps(t,Ac);if(n.isInitialized()){const i=n.getImmediate();if(Zi(e,n.getOptions()))return i;throw hn.create("already-initialized")}return n.initialize({options:e})}async function gN(){if(ug()||!aT()||!ud())return!1;try{return await cg()}catch{return!1}}function yN(t,e,n,r){t=Et(t),aN(pI,Ra[t.app.options.appId],e,n,r).catch(i=>on.error(i))}const Z0="@firebase/analytics",e_="0.10.2";function vN(){cr(new Fn(Ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return fN(r,i,n)},"PUBLIC")),cr(new Fn("analytics-internal",t,"PRIVATE")),An(Z0,e_),An(Z0,e_,"esm2017");function t(e){try{const n=e.getProvider(Ac).getImmediate();return{logEvent:(r,i,s)=>yN(n,r,i,s)}}catch(n){throw hn.create("interop-component-reg-failed",{reason:n})}}}vN();var _N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Cg=Cg||{},se=_N||self;function yd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wN(t){return Object.prototype.hasOwnProperty.call(t,af)&&t[af]||(t[af]=++EN)}var af="closure_uid_"+(1e9*Math.random()>>>0),EN=0;function TN(t,e,n){return t.call.apply(t.bind,arguments)}function IN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=TN:Ut=IN,Ut.apply(null,arguments)}function mu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function It(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ii(){this.s=this.s,this.o=this.o}var SN=0;Ii.prototype.s=!1;Ii.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SN!=0)&&wN(this)};Ii.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function t_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function zt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var AN=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function nl(t){return/^[\s\xa0]*$/.test(t)}function vd(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Xn(t){return vd().indexOf(t)!=-1}function xg(t){return xg[" "](t),t}xg[" "]=function(){};function RN(t,e){var n=vO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var CN=Xn("Opera"),go=Xn("Trident")||Xn("MSIE"),gI=Xn("Edge"),Pp=gI||go,yI=Xn("Gecko")&&!(vd().toLowerCase().indexOf("webkit")!=-1&&!Xn("Edge"))&&!(Xn("Trident")||Xn("MSIE"))&&!Xn("Edge"),PN=vd().toLowerCase().indexOf("webkit")!=-1&&!Xn("Edge");function vI(){var t=se.document;return t?t.documentMode:void 0}var xp;e:{var lf="",uf=function(){var t=vd();if(yI)return/rv:([^\);]+)(\)|;)/.exec(t);if(gI)return/Edge\/([\d\.]+)/.exec(t);if(go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PN)return/WebKit\/(\S+)/.exec(t);if(CN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uf&&(lf=uf?uf[1]:""),go){var cf=vI();if(cf!=null&&cf>parseFloat(lf)){xp=String(cf);break e}}xp=lf}var kp;if(se.document&&go){var n_=vI();kp=n_||parseInt(xp,10)||void 0}else kp=void 0;var xN=kp;function rl(t,e){if(zt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yI){e:{try{xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:kN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rl.$.h.call(this)}}It(rl,zt);var kN={2:"touch",3:"pen",4:"mouse"};rl.prototype.h=function(){rl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xl="closure_listenable_"+(1e6*Math.random()|0),DN=0;function bN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++DN,this.fa=this.ia=!1}function _d(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function _I(t){const e={};for(const n in t)e[n]=t[n];return e}const r_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<r_.length;s++)n=r_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wd(t){this.src=t,this.g={},this.h=0}wd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Dp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=mI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_d(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Dg="closure_lm_"+(1e6*Math.random()|0),df={};function EI(t,e,n,r,i){if(r&&r.once)return II(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)EI(t,e[s],n,r,i);return null}return n=Og(n),t&&t[xl]?t.O(e,n,Pl(r)?!!r.capture:!!r,i):TI(t,e,n,!1,r,i)}function TI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Pl(i)?!!i.capture:!!i,a=Ng(t);if(a||(t[Dg]=a=new wd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ON(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(AI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ON(){function t(n){return e.call(t.src,t.listener,n)}const e=LN;return t}function II(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)II(t,e[s],n,r,i);return null}return n=Og(n),t&&t[xl]?t.P(e,n,Pl(r)?!!r.capture:!!r,i):TI(t,e,n,!0,r,i)}function SI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)SI(t,e[s],n,r,i);else r=Pl(r)?!!r.capture:!!r,n=Og(n),t&&t[xl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bp(s,n,r,i),-1<n&&(_d(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ng(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bp(e,n,r,i)),(n=-1<t?e[t]:null)&&bg(n))}function bg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[xl])Dp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(AI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ng(e))?(Dp(n,t),n.h==0&&(n.src=null,e[Dg]=null)):_d(t)}}}function AI(t){return t in df?df[t]:df[t]="on"+t}function LN(t,e){if(t.fa)t=!0;else{e=new rl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bg(t),t=n.call(r,e)}return t}function Ng(t){return t=t[Dg],t instanceof wd?t:null}var hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Og(t){return typeof t=="function"?t:(t[hf]||(t[hf]=function(e){return t.handleEvent(e)}),t[hf])}function Tt(){Ii.call(this),this.i=new wd(this),this.S=this,this.J=null}It(Tt,Ii);Tt.prototype[xl]=!0;Tt.prototype.removeEventListener=function(t,e,n,r){SI(this,t,e,n,r)};function Dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new zt(e,t);else if(e instanceof zt)e.target=e.target||t;else{var i=e;e=new zt(r,t),wI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=gu(o,r,!0,e)&&i}if(o=e.g=t,i=gu(o,r,!0,e)&&i,i=gu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=gu(o,r,!1,e)&&i}Tt.prototype.N=function(){if(Tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_d(n[r]);delete t.g[e],t.h--}}this.J=null};Tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function gu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Dp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lg=se.JSON.stringify;class MN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function VN(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FN{constructor(){this.h=this.g=null}add(e,n){const r=RI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var RI=new MN(()=>new jN,t=>t.reset());class jN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $N(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function UN(t){se.setTimeout(()=>{throw t},0)}let il,sl=!1,Mg=new FN,CI=()=>{const t=se.Promise.resolve(void 0);il=()=>{t.then(zN)}};var zN=()=>{for(var t;t=VN();){try{t.h.call(t.g)}catch(n){UN(n)}var e=RI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sl=!1};function Ed(t,e){Tt.call(this),this.h=t||1,this.g=e||se,this.j=Ut(this.qb,this),this.l=Date.now()}It(Ed,Tt);z=Ed.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Dt(this,"tick"),this.ga&&(Vg(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}z.N=function(){Ed.$.N.call(this),Vg(this),delete this.g};function Fg(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function PI(t){t.g=Fg(()=>{t.g=null,t.i&&(t.i=!1,PI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BN extends Ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:PI(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ol(t){Ii.call(this),this.h=t,this.g={}}It(ol,Ii);var i_=[];function xI(t,e,n,r){Array.isArray(n)||(n&&(i_[0]=n.toString()),n=i_);for(var i=0;i<n.length;i++){var s=EI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kI(t){kg(t.g,function(e,n){this.g.hasOwnProperty(n)&&bg(e)},t),t.g={}}ol.prototype.N=function(){ol.$.N.call(this),kI(this)};ol.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Td(){this.g=!0}Td.prototype.Ea=function(){this.g=!1};function HN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function qN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KN(t,n)+(r?" "+r:"")})}function WN(t,e){t.info(function(){return"TIMEOUT: "+e})}Td.prototype.info=function(){};function KN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lg(n)}catch{return e}}var gs={},s_=null;function Id(){return s_=s_||new Tt}gs.Ta="serverreachability";function DI(t){zt.call(this,gs.Ta,t)}It(DI,zt);function al(t){const e=Id();Dt(e,new DI(e))}gs.STAT_EVENT="statevent";function bI(t,e){zt.call(this,gs.STAT_EVENT,t),this.stat=e}It(bI,zt);function Kt(t){const e=Id();Dt(e,new bI(e,t))}gs.Ua="timingevent";function NI(t,e){zt.call(this,gs.Ua,t),this.size=e}It(NI,zt);function kl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Sd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},OI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jg(){}jg.prototype.h=null;function o_(t){return t.h||(t.h=t.i())}function LI(){}var Dl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $g(){zt.call(this,"d")}It($g,zt);function Ug(){zt.call(this,"c")}It(Ug,zt);var Np;function Ad(){}It(Ad,jg);Ad.prototype.g=function(){return new XMLHttpRequest};Ad.prototype.i=function(){return{}};Np=new Ad;function bl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ol(this),this.P=GN,t=Pp?125:void 0,this.V=new Ed(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new MI}function MI(){this.i=null,this.g="",this.h=!1}var GN=45e3,VI={},Op={};z=bl.prototype;z.setTimeout=function(t){this.P=t};function Lp(t,e,n){t.L=1,t.A=Cd(br(e)),t.u=n,t.S=!0,FI(t,null)}function FI(t,e){t.G=Date.now(),Nl(t),t.B=br(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),WI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new MI,t.g=fS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new BN(Ut(t.Pa,t,t.g),t.O)),xI(t.U,t.g,"readystatechange",t.nb),e=t.I?_I(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),al(),HN(t.j,t.v,t.B,t.m,t.W,t.u)}z.nb=function(t){t=t.target;const e=this.M;e&&er(t)==3?e.l():this.Pa(t)};z.Pa=function(t){try{if(t==this.g)e:{const c=er(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Pp||this.g&&(this.h.h||this.g.ja()||c_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?al(3):al(2)),Rd(this);var n=this.g.da();this.ca=n;t:if(jI(this)){var r=c_(this.g);t="";var i=r.length,s=er(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Ca(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nl(a)){var u=a;break t}}u=null}if(n=u)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mp(this,n);else{this.i=!1,this.s=3,Kt(12),Fi(this),Ca(this);break e}}this.S?($I(this,c,o),Pp&&this.i&&c==3&&(xI(this.U,this.V,"tick",this.mb),this.V.start())):(qs(this.j,this.m,o,null),Mp(this,o)),c==4&&Fi(this),this.i&&!this.J&&(c==4?uS(this.l,this):(this.i=!1,Nl(this)))}else mO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),Fi(this),Ca(this)}}}catch{}finally{}};function jI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function $I(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=QN(t,n),i==Op){e==4&&(t.s=4,Kt(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==VI){t.s=4,Kt(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),Mp(t,i);jI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kg(e),e.M=!0,Kt(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),Fi(t),Ca(t))}z.mb=function(){if(this.g){var t=er(this.g),e=this.g.ja();this.o<e.length&&(Rd(this),$I(this,t,e),this.i&&t!=4&&Nl(this))}};function QN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Op:(n=Number(e.substring(n,r)),isNaN(n)?VI:(r+=1,r+n>e.length?Op:(e=e.slice(r,r+n),t.o=r+n,e)))}z.cancel=function(){this.J=!0,Fi(this)};function Nl(t){t.Y=Date.now()+t.P,UI(t,t.P)}function UI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=kl(Ut(t.lb,t),e)}function Rd(t){t.C&&(se.clearTimeout(t.C),t.C=null)}z.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(WN(this.j,this.B),this.L!=2&&(al(),Kt(17)),Fi(this),this.s=2,Ca(this)):UI(this,this.Y-t)};function Ca(t){t.l.H==0||t.J||uS(t.l,t)}function Fi(t){Rd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vg(t.V),kI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Mp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vp(n.i,t))){if(!t.K&&Vp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pc(n),Dd(n);else break e;Wg(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=kl(Ut(n.ib,n),6e3));if(1>=QI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ji(n,11)}else if((t.K||n.g==t)&&Pc(n),!nl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zg(s,s.h),s.h=null))}if(r.F){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Fe(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=hS(r,r.J?r.pa:null,r.Y),o.K){YI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Rd(a),Nl(a)),r.g=o}else aS(r);0<n.j.length&&bd(n)}else u[0]!="stop"&&u[0]!="close"||ji(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(n,7):qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}al(4)}catch{}}function YN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function zI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JN(t),r=YN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var BI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=t.h,Rc(this,t.j),this.s=t.s,this.g=t.g,Cc(this,t.m),this.l=t.l;var e=t.i,n=new ll;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),a_(this,n),this.o=t.o}else t&&(e=String(t).match(BI))?(this.h=!1,Rc(this,e[1]||"",!0),this.s=da(e[2]||""),this.g=da(e[3]||"",!0),Cc(this,e[4]),this.l=da(e[5]||"",!0),a_(this,e[6]||"",!0),this.o=da(e[7]||"")):(this.h=!1,this.i=new ll(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ha(e,l_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ha(e,l_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ha(n,n.charAt(0)=="/"?tO:eO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ha(n,rO)),t.join("")};function br(t){return new Wi(t)}function Rc(t,e,n){t.j=n?da(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function a_(t,e,n){e instanceof ll?(t.i=e,iO(t.i,t.h)):(n||(e=ha(e,nO)),t.i=new ll(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Cd(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function da(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ha(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var l_=/[#\/\?@]/g,eO=/[#\?:]/g,tO=/[#\?]/g,nO=/[#\?@]/g,rO=/#/g;function ll(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Si(t){t.g||(t.g=new Map,t.h=0,t.i&&XN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=ll.prototype;z.add=function(t,e){Si(this),this.i=null,t=Oo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function HI(t,e){Si(t),e=Oo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qI(t,e){return Si(t),e=Oo(t,e),t.g.has(e)}z.forEach=function(t,e){Si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.ta=function(){Si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.Z=function(t){Si(this);let e=[];if(typeof t=="string")qI(this,t)&&(e=e.concat(this.g.get(Oo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Si(this),this.i=null,t=Oo(this,t),qI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function WI(t,e,n){HI(t,e),0<n.length&&(t.i=null,t.g.set(Oo(t,e),Pg(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Oo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iO(t,e){e&&!t.j&&(Si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(HI(this,r),WI(this,i,n))},t)),t.j=e}var sO=class{constructor(t,e){this.g=t,this.map=e}};function KI(t){this.l=t||oO,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oO=10;function GI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function QI(t){return t.h?1:t.g?t.g.size:0}function Vp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zg(t,e){t.g?t.g.add(e):t.h=e}function YI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}KI.prototype.cancel=function(){if(this.i=JI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function JI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pg(t.i)}var aO=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function lO(){this.g=new aO}function uO(t,e,n){const r=n||"";try{zI(t,function(i,s){let o=i;Pl(i)&&(o=Lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cO(t,e){const n=new Td;if(se.Image){const r=new Image;r.onload=mu(yu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mu(yu,n,r,"TestLoadImage: error",!1,e),r.onabort=mu(yu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mu(yu,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pd(t){this.l=t.ec||null,this.j=t.ob||!1}It(Pd,jg);Pd.prototype.g=function(){return new xd(this.l,this.j)};Pd.prototype.i=function(t){return function(){return t}}({});function xd(t,e){Tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It(xd,Tt);var Bg=0;z=xd.prototype;z.open=function(t,e){if(this.readyState!=Bg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ul(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=Bg};z.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ul(this)),this.g&&(this.readyState=3,ul(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;XI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function XI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}z.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ol(this):ul(this),this.readyState==3&&XI(this)}};z.Za=function(t){this.g&&(this.response=this.responseText=t,Ol(this))};z.Ya=function(t){this.g&&(this.response=t,Ol(this))};z.ka=function(){this.g&&Ol(this)};function Ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ul(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ul(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dO=se.JSON.parse;function Ze(t){Tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ZI,this.L=this.M=!1}It(Ze,Tt);var ZI="",hO=/^https?$/i,fO=["POST","PUT"];z=Ze.prototype;z.Oa=function(t){this.M=t};z.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Np.g(),this.C=this.u?o_(this.u):o_(Np),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){u_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=mI(fO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nS(this),0<this.B&&((this.L=pO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=Fg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){u_(this,s)}};function pO(t){return go&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.ua=function(){typeof Cg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dt(this,"timeout"),this.abort(8))};function u_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eS(t),kd(t)}function eS(t){t.F||(t.F=!0,Dt(t,"complete"),Dt(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Dt(this,"complete"),Dt(this,"abort"),kd(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kd(this,!0)),Ze.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?tS(this):this.kb())};z.kb=function(){tS(this)};function tS(t){if(t.h&&typeof Cg<"u"&&(!t.C[1]||er(t)!=4||t.da()!=2)){if(t.v&&er(t)==4)Fg(t.La,0,t);else if(Dt(t,"readystatechange"),er(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(BI)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!hO.test(i?i.toLowerCase():"")}n=r}if(n)Dt(t,"complete"),Dt(t,"success");else{t.m=6;try{var s=2<er(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",eS(t)}}finally{kd(t)}}}}function kd(t,e){if(t.g){nS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function nS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}z.isActive=function(){return!!this.g};function er(t){return t.g?t.g.readyState:0}z.da=function(){try{return 2<er(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dO(e)}};function c_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ZI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mO(t){const e={};t=(t.g&&2<=er(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(nl(t[r]))continue;var n=$N(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}NN(e,function(r){return r.join(", ")})}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rS(t){let e="";return kg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function Jo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function iS(t){this.Ga=0,this.j=[],this.l=new Td,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Jo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Jo("baseRetryDelayMs",5e3,t),this.hb=Jo("retryDelaySeedMs",1e4,t),this.eb=Jo("forwardChannelMaxRetries",2,t),this.xa=Jo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new KI(t&&t.concurrentRequestLimit),this.Ja=new lO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}z=iS.prototype;z.ra=8;z.H=1;function qg(t){if(sS(t),t.H==3){var e=t.W++,n=br(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),Ll(t,n),e=new bl(t,t.l,e),e.L=2,e.A=Cd(br(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=fS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Nl(e)}dS(t)}function Dd(t){t.g&&(Kg(t),t.g.cancel(),t.g=null)}function sS(t){Dd(t),t.u&&(se.clearTimeout(t.u),t.u=null),Pc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function bd(t){if(!GI(t.i)&&!t.m){t.m=!0;var e=t.Na;il||CI(),sl||(il(),sl=!0),Mg.add(e,t),t.C=0}}function gO(t,e){return QI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=kl(Ut(t.Na,t,e),cS(t,t.C)),t.C++,!0)}z.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new bl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=_I(s),wI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=oS(this,i,e),n=br(this.I),Fe(n,"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),Ll(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(rS(s)))+"&"+e:this.o&&Hg(n,this.o,s)),zg(this.i,i),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),i.aa=!0,Lp(i,n,null)):Lp(i,n,e),this.H=2}}else this.H==3&&(t?d_(this,t):this.j.length==0||GI(this.i)||d_(this))};function d_(t,e){var n;e?n=e.m:n=t.W++;const r=br(t.I);Fe(r,"SID",t.K),Fe(r,"RID",n),Fe(r,"AID",t.V),Ll(t,r),t.o&&t.s&&Hg(r,t.o,t.s),n=new bl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=oS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zg(t.i,n),Lp(n,r,e)}function Ll(t,e){t.na&&kg(t.na,function(n,r){Fe(e,r,n)}),t.h&&zI({},function(n,r){Fe(e,r,n)})}function oS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{uO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function aS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;il||CI(),sl||(il(),sl=!0),Mg.add(e,t),t.A=0}}function Wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=kl(Ut(t.Ma,t),cS(t,t.A)),t.A++,!0)}z.Ma=function(){if(this.u=null,lS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=kl(Ut(this.jb,this),t)}};z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Dd(this),lS(this))};function Kg(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function lS(t){t.g=new bl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=br(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),Ll(t,e),t.o&&t.s&&Hg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Cd(br(e)),n.u=null,n.S=!0,FI(n,t)}z.ib=function(){this.v!=null&&(this.v=null,Dd(this),Wg(this),Kt(19))};function Pc(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function uS(t,e){var n=null;if(t.g==e){Pc(t),Kg(t),t.g=null;var r=2}else if(Vp(t.i,e))n=e.F,YI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Id(),Dt(r,new NI(r,n)),bd(t)}else aS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&gO(t,e)||r==2&&Wg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ji(t,5);break;case 4:ji(t,10);break;case 3:ji(t,6);break;default:ji(t,2)}}}function cS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ut(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Rc(n,"https"),Cd(n)),cO(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),dS(t),sS(t)}z.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function dS(t){if(t.H=0,t.ma=[],t.h){const e=JI(t.i);(e.length!=0||t.j.length!=0)&&(t_(t.ma,e),t_(t.ma,t.j),t.i.i.length=0,Pg(t.j),t.j.length=0),t.h.ya()}}function hS(t,e,n){var r=n instanceof Wi?br(n):new Wi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Cc(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wi(null);r&&Rc(s,r),e&&(s.g=e),i&&Cc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Fe(r,n,e),Fe(r,"VER",t.ra),Ll(t,r),r}function fS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ze(new Pd({ob:n})):new Ze(t.va),e.Oa(t.J),e}z.isActive=function(){return!!this.h&&this.h.isActive(this)};function pS(){}z=pS.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.isActive=function(){return!0};z.Va=function(){};function xc(){if(go&&!(10<=Number(xN)))throw Error("Environmental error: no available transport.")}xc.prototype.g=function(t,e){return new pn(t,e)};function pn(t,e){Tt.call(this),this.g=new iS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!nl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lo(this)}It(pn,Tt);pn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hS(t,null,t.Y),bd(t)};pn.prototype.close=function(){qg(this.g)};pn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lg(t),t=n);e.j.push(new sO(e.fb++,t)),e.H==3&&bd(e)};pn.prototype.N=function(){this.g.h=null,delete this.j,qg(this.g),delete this.g,pn.$.N.call(this)};function mS(t){$g.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(mS,$g);function gS(){Ug.call(this),this.status=1}It(gS,Ug);function Lo(t){this.g=t}It(Lo,pS);Lo.prototype.Ba=function(){Dt(this.g,"a")};Lo.prototype.Aa=function(t){Dt(this.g,new mS(t))};Lo.prototype.za=function(t){Dt(this.g,new gS)};Lo.prototype.ya=function(){Dt(this.g,"b")};function yO(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}It($n,yO);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ff(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}$n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ff(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ff(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ff(this,r),i=0;break}}this.h=i,this.i+=e};$n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function xe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var vO={};function Gg(t){return-128<=t&&128>t?RN(t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function tr(t){if(isNaN(t)||!isFinite(t))return io;if(0>t)return Pt(tr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Fp;return new xe(e,0)}function yS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pt(yS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tr(Math.pow(e,8)),r=io,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=tr(Math.pow(e,s)),r=r.R(s).add(tr(o))):(r=r.R(n),r=r.add(tr(o)))}return r}var Fp=4294967296,io=Gg(0),jp=Gg(1),h_=Gg(16777216);z=xe.prototype;z.ea=function(){if(Tn(this))return-Pt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Fp+r)*e,e*=Fp}return t};z.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ir(this))return"0";if(Tn(this))return"-"+Pt(this).toString(t);for(var e=tr(Math.pow(t,6)),n=this,r="";;){var i=Dc(n,e).g;n=kc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};z.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tn(t){return t.h==-1}z.X=function(t){return t=kc(this,t),Tn(t)?-1:Ir(t)?0:1};function Pt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new xe(n,~t.h).add(jp)}z.abs=function(){return Tn(this)?Pt(this):this};z.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function kc(t,e){return t.add(Pt(e))}z.R=function(t){if(Ir(this)||Ir(t))return io;if(Tn(this))return Tn(t)?Pt(this).R(Pt(t)):Pt(Pt(this).R(t));if(Tn(t))return Pt(this.R(Pt(t)));if(0>this.X(h_)&&0>t.X(h_))return tr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,vu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,vu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,vu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,vu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new xe(n,0)};function vu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xo(t,e){this.g=t,this.h=e}function Dc(t,e){if(Ir(e))throw Error("division by zero");if(Ir(t))return new Xo(io,io);if(Tn(t))return e=Dc(Pt(t),e),new Xo(Pt(e.g),Pt(e.h));if(Tn(e))return e=Dc(t,Pt(e)),new Xo(Pt(e.g),e.h);if(30<t.g.length){if(Tn(t)||Tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jp,r=e;0>=r.X(t);)n=f_(n),r=f_(r);var i=Ps(n,1),s=Ps(r,1);for(r=Ps(r,2),n=Ps(n,2);!Ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ps(r,1),n=Ps(n,1)}return e=kc(t,i.R(e)),new Xo(i,e)}for(i=io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=tr(n),o=s.R(e);Tn(o)||0<o.X(t);)n-=r,s=tr(n),o=s.R(e);Ir(s)&&(s=jp),i=i.add(s),t=kc(t,o)}return new Xo(i,t)}z.gb=function(t){return Dc(this,t).h};z.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new xe(n,this.h&t.h)};z.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new xe(n,this.h|t.h)};z.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new xe(n,this.h^t.h)};function f_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new xe(n,t.h)}function Ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new xe(i,t.h)}xc.prototype.createWebChannel=xc.prototype.g;pn.prototype.send=pn.prototype.u;pn.prototype.open=pn.prototype.m;pn.prototype.close=pn.prototype.close;Sd.NO_ERROR=0;Sd.TIMEOUT=8;Sd.HTTP_ERROR=6;OI.COMPLETE="complete";LI.EventType=Dl;Dl.OPEN="a";Dl.CLOSE="b";Dl.ERROR="c";Dl.MESSAGE="d";Tt.prototype.listen=Tt.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=tr;xe.fromString=yS;var _O=function(){return new xc},wO=function(){return Id()},pf=Sd,EO=OI,TO=gs,p_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_u=LI,IO=Ze,SO=$n,so=xe;const m_="@firebase/firestore";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Mo="10.11.0";/**
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
 */const ss=new cd("@firebase/firestore");function Zo(){return ss.logLevel}function U(t,...e){if(ss.logLevel<=we.DEBUG){const n=e.map(Qg);ss.debug(`Firestore (${Mo}): ${t}`,...n)}}function dr(t,...e){if(ss.logLevel<=we.ERROR){const n=e.map(Qg);ss.error(`Firestore (${Mo}): ${t}`,...n)}}function yo(t,...e){if(ss.logLevel<=we.WARN){const n=e.map(Qg);ss.warn(`Firestore (${Mo}): ${t}`,...n)}}function Qg(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function Me(t,e){t||ie()}function le(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class RO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CO{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new vS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Ft(e)}}class PO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new PO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new kO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _S{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=bO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new pt(0,0))}static max(){return new oe(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends cl{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const NO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends cl{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return NO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(je.fromString(e))}static fromName(e){return new G(je.fromString(e).popFirst(5))}static empty(){return new G(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new je(e.slice()))}}function OO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new pt(n+1,0):new pt(n,r));return new mi(i,G.empty(),e)}function LO(t){return new mi(t.readTime,t.key,-1)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(oe.min(),G.empty(),-1)}static max(){return new mi(oe.max(),G.empty(),-1)}}function MO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const VO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ml(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==VO)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Yg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ar,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Pa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Jg(r.target.error);this.V.reject(new Pa(e,i))}}static open(e,n,r,i){try{return new Yg(n,e.transaction(i,r))}catch(s){throw new Pa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new $O(n)}}class $i{constructor(e,n,r){this.name=e,this.version=n,this.p=r,$i.S(ut())===12.2&&dr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Ni(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ud())return!1;if($i.C())return!0;const e=ut(),n=$i.S(e),r=0<n&&n<10,i=$i.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new H(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new H(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pa(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Yg.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class jO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ni(this.k.delete())}}class Pa extends H{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Vl(t){return t.name==="IndexedDbTransactionError"}class $O{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ni(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Ni(this.store.add(e))}get(e){return Ni(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Ni(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Ni(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=Jg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new jO(a),u=n(a.primaryKey,a.value,l);if(u instanceof D){const c=u.catch(d=>(l.done(),D.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ni(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Jg(r.target.error);n(i)}})}let g_=!1;function Jg(t){const e=$i.S(ut());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return g_||(g_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Xg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Xg._e=-1;function Nd(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function UO(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=i??Ct.EMPTY,this.right=s??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v_(this.data.getIterator())}getIteratorFrom(e){return new v_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class v_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new un([])}unionWith(e){let n=new bt(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ES extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ES("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const zO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=zO.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function os(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
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
 */function Zg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ey(t){const e=t.mapValue.fields.__previous_value__;return Zg(e)?ey(e):e}function dl(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class BO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zg(t)?4:HO(t)?9007199254740991:10:ie()}function hr(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),a=gi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return os(i.bytesValue).isEqual(os(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return st(i.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return st(i.integerValue)===st(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=st(i.doubleValue),a=st(s.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(y_(o)!==y_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!hr(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function fl(t,e){return(t.values||[]).find(n=>hr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=st(s.integerValue||s.doubleValue),l=st(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return __(t.timestampValue,e.timestampValue);case 4:return __(dl(t),dl(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=os(s),l=os(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Ce(a[u],l[u]);if(c!==0)return c}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ce(st(s.latitude),st(o.latitude));return a!==0?a:Ce(st(s.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=_o(a[u],l[u]);if(c)return c}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Eu.mapValue&&o===Eu.mapValue)return 0;if(s===Eu.mapValue)return 1;if(o===Eu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=Ce(l[d],c[d]);if(h!==0)return h;const y=_o(a[l[d]],u[c[d]]);if(y!==0)return y}return Ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ie()}}function __(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=gi(t),r=gi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function wo(t){return $p(t)}function $p(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return os(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$p(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$p(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function w_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Up(t){return!!t&&"integerValue"in t}function ty(t){return!!t&&"arrayValue"in t}function E_(t){return!!t&&"nullValue"in t}function T_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function xa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xa(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(xa(this.value))}}function TS(t){const e=[];return ys(t.fields,(n,r)=>{const i=new xt([n]);if(Uu(r)){const s=TS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new un(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,oe.min(),oe.min(),oe.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,oe.min(),oe.min(),en.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,oe.min(),oe.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nc{constructor(e,n){this.position=e,this.inclusive=n}}function I_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function S_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oc{constructor(e,n="asc"){this.field=e,this.dir=n}}function qO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class IS{}class at extends IS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KO(e,n,r):n==="array-contains"?new YO(e,r):n==="in"?new JO(e,r):n==="not-in"?new XO(e,r):n==="array-contains-any"?new ZO(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GO(e,r):new QO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends IS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Un(e,n)}matches(e){return SS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function SS(t){return t.op==="and"}function AS(t){return WO(t)&&SS(t)}function WO(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function zp(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+wo(t.value);if(AS(t))return t.filters.map(e=>zp(e)).join(",");{const e=t.filters.map(n=>zp(n)).join(",");return`${t.op}(${e})`}}function RS(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&hr(r.value,i.value)}(t,e):t instanceof Un?function(r,i){return i instanceof Un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&RS(o,i.filters[a]),!0):!1}(t,e):void ie()}function CS(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(CS).join(" ,")+"}"}(t):"Filter"}class KO extends at{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class GO extends at{constructor(e,n){super(e,"in",n),this.keys=PS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QO extends at{constructor(e,n){super(e,"not-in",n),this.keys=PS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class YO extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ty(n)&&fl(n.arrayValue,this.value)}}class JO extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class XO extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class ZO extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ty(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
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
 */class eL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function A_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new eL(t,e,n,r,i,s,o)}function ny(t){const e=le(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wo(r)).join(",")),e.ce=n}return e.ce}function ry(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!S_(t.startAt,e.startAt)&&S_(t.endAt,e.endAt)}function Bp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function tL(t,e,n,r,i,s,o,a){return new Fl(t,e,n,r,i,s,o,a)}function iy(t){return new Fl(t)}function R_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xS(t){return t.collectionGroup!==null}function ka(t){const e=le(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new bt(xt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Oc(s,r))}),n.has(xt.keyField().canonicalString())||e.le.push(new Oc(xt.keyField(),r))}return e.le}function lr(t){const e=le(t);return e.he||(e.he=nL(e,ka(t))),e.he}function nL(t,e){if(t.limitType==="F")return A_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oc(i.field,s)});const n=t.endAt?new Nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nc(t.startAt.position,t.startAt.inclusive):null;return A_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hp(t,e){const n=t.filters.concat([e]);return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qp(t,e,n){return new Fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Od(t,e){return ry(lr(t),lr(e))&&t.limitType===e.limitType}function kS(t){return`${ny(lr(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CS(i)).join(", ")}]`),Nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wo(i)).join(",")),`Target(${r})`}(lr(t))}; limitType=${t.limitType})`}function Ld(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ka(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=I_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ka(r),i)||r.endAt&&!function(o,a,l){const u=I_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ka(r),i))}(t,e)}function rL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DS(t){return(e,n)=>{let r=!1;for(const i of ka(t)){const s=iL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iL(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?_o(l,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wS(this.inner)}size(){return this.innerSize}}/**
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
 */const sL=new Qe(G.comparator);function Nr(){return sL}const bS=new Qe(G.comparator);function fa(...t){let e=bS;for(const n of t)e=e.insert(n.key,n);return e}function NS(t){let e=bS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ui(){return Da()}function OS(){return Da()}function Da(){return new Vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const oL=new Qe(G.comparator),aL=new bt(G.comparator);function ye(...t){let e=aL;for(const n of t)e=e.add(n);return e}const lL=new bt(Ce);function uL(){return lL}/**
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
 */function LS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function MS(t){return{integerValue:""+t}}function cL(t,e){return UO(e)?MS(e):LS(t,e)}/**
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
 */class Md{constructor(){this._=void 0}}function dL(t,e,n){return t instanceof Lc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zg(s)&&(s=ey(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Eo?FS(t,e):t instanceof To?jS(t,e):function(i,s){const o=VS(i,s),a=C_(o)+C_(i.Ie);return Up(o)&&Up(i.Ie)?MS(a):LS(i.serializer,a)}(t,e)}function hL(t,e,n){return t instanceof Eo?FS(t,e):t instanceof To?jS(t,e):n}function VS(t,e){return t instanceof Mc?function(r){return Up(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lc extends Md{}class Eo extends Md{constructor(e){super(),this.elements=e}}function FS(t,e){const n=$S(e);for(const r of t.elements)n.some(i=>hr(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends Md{constructor(e){super(),this.elements=e}}function jS(t,e){let n=$S(e);for(const r of t.elements)n=n.filter(i=>!hr(i,r));return{arrayValue:{values:n}}}class Mc extends Md{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function C_(t){return st(t.integerValue||t.doubleValue)}function $S(t){return ty(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class US{constructor(e,n){this.field=e,this.transform=n}}function fL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof To&&i instanceof To?vo(r.elements,i.elements,hr):r instanceof Mc&&i instanceof Mc?hr(r.Ie,i.Ie):r instanceof Lc&&i instanceof Lc}(t.transform,e.transform)}class pL{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vd{}function zS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sy(t.key,Rn.none()):new jl(t.key,t.data,Rn.none());{const n=t.data,r=en.empty();let i=new bt(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new un(i.toArray()),Rn.none())}}function mL(t,e,n){t instanceof jl?function(i,s,o){const a=i.value.clone(),l=x_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,s,o){if(!zu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=x_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(BS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ba(t,e,n,r){return t instanceof jl?function(s,o,a,l){if(!zu(s.precondition,o))return a;const u=s.value.clone(),c=k_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(s,o,a,l){if(!zu(s.precondition,o))return a;const u=k_(s.fieldTransforms,l,o),c=o.data;return c.setAll(BS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return zu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function gL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VS(r.transform,i||null);s!=null&&(n===null&&(n=en.empty()),n.set(r.field,s))}return n||null}function P_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vo(r,i,(s,o)=>fL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jl extends Vd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Vd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function BS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function x_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hL(o,a,n[i]))}return r}function k_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dL(s,o,e))}return r}class sy extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yL extends Vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ba(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=zS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,r)=>P_(n,r))&&vo(this.baseMutations,e.baseMutations,(n,r)=>P_(n,r))}}class oy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return oL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new oy(e,n,r,i)}}/**
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
 */class _L{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,Ee;function EL(t){switch(t){default:return ie();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function HS(t){if(t===void 0)return dr("GRPC error has no .code"),k.UNKNOWN;switch(t){case it.OK:return k.OK;case it.CANCELLED:return k.CANCELLED;case it.UNKNOWN:return k.UNKNOWN;case it.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case it.INTERNAL:return k.INTERNAL;case it.UNAVAILABLE:return k.UNAVAILABLE;case it.UNAUTHENTICATED:return k.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case it.NOT_FOUND:return k.NOT_FOUND;case it.ALREADY_EXISTS:return k.ALREADY_EXISTS;case it.PERMISSION_DENIED:return k.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case it.ABORTED:return k.ABORTED;case it.OUT_OF_RANGE:return k.OUT_OF_RANGE;case it.UNIMPLEMENTED:return k.UNIMPLEMENTED;case it.DATA_LOSS:return k.DATA_LOSS;default:return ie()}}(Ee=it||(it={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function TL(){return new TextEncoder}/**
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
 */const IL=new so([4294967295,4294967295],0);function D_(t){const e=TL().encode(t),n=new SO;return n.update(e),new Uint8Array(n.digest())}function b_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new so([n,r],0),new so([i,s],0)]}class ay{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pa(`Invalid padding: ${n}`);if(r<0)throw new pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=so.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(so.fromNumber(r)));return i.compare(IL)===1&&(i=new so([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=D_(e),[r,i]=b_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ay(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=D_(e),[r,i]=b_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fd(oe.min(),i,new Qe(Ce),Nr(),ye())}}class $l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $l(r,n,ye(),ye(),ye())}}/**
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
 */class Bu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class qS{constructor(e,n){this.targetId=e,this.fe=n}}class WS{constructor(e,n,r=Ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class N_{constructor(){this.ge=0,this.pe=L_(),this.ye=Ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ye(),n=ye(),r=ye();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new $l(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=L_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Me(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class SL{constructor(e){this.Be=e,this.ke=new Map,this.qe=Nr(),this.Qe=O_(),this.Ke=new Qe(Ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Bp(s))if(r===0){const o=new G(s.path);this.We(n,o,$t.newNoDocument(o,oe.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=os(r).toUint8Array()}catch(l){if(l instanceof ES)return yo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ay(o,i,s)}catch(l){return yo(l instanceof pa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Bp(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,$t.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ye();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Fd(e,n,this.Ke,this.qe,r);return this.qe=Nr(),this.Qe=O_(),this.Ke=new Qe(Ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new N_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new bt(Ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new N_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function O_(){return new Qe(G.comparator)}function L_(){return new Qe(G.comparator)}const AL={asc:"ASCENDING",desc:"DESCENDING"},RL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CL={and:"AND",or:"OR"};class PL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wp(t,e){return t.useProto3Json||Nd(e)?e:{value:e}}function Vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xL(t,e){return Vc(t,e.toTimestamp())}function ur(t){return Me(!!t),oe.fromTimestamp(function(n){const r=gi(n);return new pt(r.seconds,r.nanos)}(t))}function ly(t,e){return Kp(t,e).canonicalString()}function Kp(t,e){const n=function(i){return new je(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GS(t){const e=je.fromString(t);return Me(ZS(e)),e}function Gp(t,e){return ly(t.databaseId,e.path)}function mf(t,e){const n=GS(e);if(n.get(1)!==t.databaseId.projectId)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(YS(n))}function QS(t,e){return ly(t.databaseId,e)}function kL(t){const e=GS(t);return e.length===4?je.emptyPath():YS(e)}function Qp(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YS(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function M_(t,e,n){return{name:Gp(t,e),fields:n.value.mapValue.fields}}function DL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Me(c===void 0||typeof c=="string"),Ht.fromBase64String(c||"")):(Me(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Ht.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:HS(u.code);return new H(c,u.message||"")}(o);n=new WS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mf(t,r.document.name),s=ur(r.document.updateTime),o=r.document.createTime?ur(r.document.createTime):oe.min(),a=new en({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Bu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mf(t,r.document),s=r.readTime?ur(r.readTime):oe.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mf(t,r.document),s=r.removedTargetIds||[];n=new Bu([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wL(i,s),a=r.targetId;n=new qS(a,o)}}return n}function bL(t,e){let n;if(e instanceof jl)n={update:M_(t,e.key,e.value)};else if(e instanceof sy)n={delete:Gp(t,e.key)};else if(e instanceof Ai)n={update:M_(t,e.key,e.data),updateMask:UL(e.fieldMask)};else{if(!(e instanceof yL))return ie();n={verify:Gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function NL(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ur(i.updateTime):ur(s);return o.isEqual(oe.min())&&(o=ur(s)),new pL(o,i.transformResults||[])}(n,e))):[]}function OL(t,e){return{documents:[QS(t,e.path)]}}function LL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QS(t,i);const s=function(u){if(u.length!==0)return XS(Un.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:ks(h.field),direction:FL(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function ML(t){let e=kL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=JS(d);return h instanceof Un&&AS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(v){return new Oc(Ds(v.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,Nd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,y=d.values||[];return new Nc(y,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,y=d.values||[];return new Nc(y,h)}(n.endAt)),tL(e,i,o,s,a,"F",l,u)}function VL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(r=>JS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function FL(t){return AL[t]}function jL(t){return RL[t]}function $L(t){return CL[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Ds(t){return xt.fromServerFormat(t.fieldPath)}function XS(t){return t instanceof at?function(n){if(n.op==="=="){if(T_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(E_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(T_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(E_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:jL(n.op),value:n.value}}}(t):t instanceof Un?function(n){const r=n.getFilters().map(i=>XS(i));return r.length===1?r[0]:{compositeFilter:{op:$L(n.op),filters:r}}}(t):ie()}function UL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ei{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zL{constructor(e){this.ct=e}}function BL(t){const e=ML({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qp(e,e.limit,"L"):e}/**
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
 */class HL{constructor(){this._n=new qL}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(mi.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class qL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new bt(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new bt(je.comparator)).toArray()}}/**
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
 */class Io{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Io(0)}static Ln(){return new Io(-1)}}/**
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
 */class WL{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ba(r.mutation,i,un.empty(),pt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nr();const o=Da(),a=function(){return Da()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ai)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ba(c.mutation,u,c.mutation.getFieldMask(),pt.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new KL(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new Qe((o,a)=>o-a),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||un.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=OS();c.forEach(h=>{if(!s.has(h)){const y=zS(n.get(h),r.get(h));y!==null&&d.set(h,y),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Ui());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ye())).next(c=>({batchId:a,changes:NS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fa();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const u=function(d,h){return new Fl(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,$t.newInvalidDocument(c)))});let a=fa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ba(c.mutation,u,un.empty(),pt.now()),Ld(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class QL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ur(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:BL(i.bundledQuery),readTime:ur(i.readTime)}}(n)),D.resolve()}}/**
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
 */class YL{constructor(){this.overlays=new Qe(G.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ui();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Ui(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ui(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ui(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _L(n,r));let s=this.hr.get(n);s===void 0&&(s=ye(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class uy{constructor(){this.Pr=new bt(vt.Ir),this.Tr=new bt(vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new vt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new je([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new je([])),r=new vt(n,e),i=new vt(n,e+1);let s=ye();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class JL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new bt(vt.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Ce);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new vt(new G(s),0);let a=new bt(Ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new vt(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class XL{constructor(e){this.vr=e,this.docs=function(){return new Qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MO(LO(c),r)<=0||(i.has(c.key)||Ld(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZL(this)}getSize(e){return D.resolve(this.size)}}class ZL extends WL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class eM{constructor(e){this.persistence=e,this.Mr=new Vo(n=>ny(n),ry),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new uy,this.targetCount=0,this.Lr=Io.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class tM{constructor(e,n){this.Br={},this.overlays={},this.kr=new Xg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new eM(this),this.indexManager=new HL,this.remoteDocumentCache=function(i){return new XL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new zL(n),this.$r=new QL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new JL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new nM(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nM extends FO{constructor(e){super(),this.currentSequenceNumber=e}}class cy{constructor(e){this.persistence=e,this.zr=new uy,this.jr=null}static Hr(e){return new cy(e)}get Jr(){if(this.jr)return this.jr;throw ie()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class dy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dy(e,n.fromCache,r,i)}}/**
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
 */class rM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ix()?8:$i.v(ut())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rM;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Zo()<=we.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Zo()<=we.DEBUG&&U("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Zo()<=we.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(n))):D.resolve())}ji(e,n){if(R_(n))return D.resolve(null);let r=lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qp(n,null,"F"),r=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,qp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return R_(n)||i.isEqual(oe.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(Zo()<=we.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xs(n)),this.es(e,o,n,OO(i,-1)).next(a=>a))})}Zi(e,n){let r=new bt(DS(e));return n.forEach((i,s)=>{Ld(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Zo()<=we.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",xs(n)),this.zi.getDocumentsMatchingQuery(e,n,mi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sM{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Qe(Ce),this.rs=new Vo(s=>ny(s),ry),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function oM(t,e,n,r){return new sM(t,e,n,r)}async function eA(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ye();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function aM(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let y=D.resolve();return h.forEach(v=>{y=y.next(()=>c.getEntry(l,v)).next(w=>{const g=u.docVersions.get(v);Me(g!==null),w.version.compareTo(g)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tA(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function lM(t,e){const n=le(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let y=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Ht.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(d,y),function(w,g,p){return w.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,y,c)&&a.push(n.Qr.updateTargetData(s,y))});let l=Nr(),u=ye();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(uM(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(oe.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function uM(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function cM(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dM(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Yp(t,e,n){const r=le(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vl(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function V_(t,e,n){const r=le(t);let i=oe.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=le(l),h=d.rs.get(c);return h!==void 0?D.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,lr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:ye())).next(a=>(hM(r,rL(e),a),{documents:a,hs:s})))}function hM(t,e,n){let r=t.ss.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class F_{constructor(){this.activeTargetIds=uL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fM{constructor(){this.no=new F_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new F_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pM{io(e){}shutdown(){}}/**
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
 */class j_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tu=null;function gf(){return Tu===null?Tu=function(){return 268435456+Math.round(2147483648*Math.random())}():Tu++,"0x"+Tu.toString(16)}/**
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
 */const mM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Vt="WebChannelConnection";class yM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=gf(),l=this.bo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw yo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=mM[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=gf();return new Promise((o,a)=>{const l=new IO;l.setWithCredentials(!0),l.listenOnce(EO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case pf.NO_ERROR:const c=l.getResponseJson();U(Vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case pf.TIMEOUT:U(Vt,`RPC '${e}' ${s} timed out`),a(new H(k.DEADLINE_EXCEEDED,"Request time out"));break;case pf.HTTP_ERROR:const d=l.getStatus();if(U(Vt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const y=h==null?void 0:h.error;if(y&&y.status&&y.message){const v=function(g){const p=g.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(p)>=0?p:k.UNKNOWN}(y.status);a(new H(v,y.message))}else a(new H(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(k.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{U(Vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(Vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=gf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_O(),a=wO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(Vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,y=!1;const v=new gM({lo:g=>{y?U(Vt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(h||(U(Vt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),U(Vt,`RPC '${e}' stream ${i} sending:`,g),d.send(g))},ho:()=>d.close()}),w=(g,p,f)=>{g.listen(p,_=>{try{f(_)}catch(S){setTimeout(()=>{throw S},0)}})};return w(d,_u.EventType.OPEN,()=>{y||U(Vt,`RPC '${e}' stream ${i} transport opened.`)}),w(d,_u.EventType.CLOSE,()=>{y||(y=!0,U(Vt,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),w(d,_u.EventType.ERROR,g=>{y||(y=!0,yo(Vt,`RPC '${e}' stream ${i} transport errored:`,g),v.Vo(new H(k.UNAVAILABLE,"The operation could not be completed")))}),w(d,_u.EventType.MESSAGE,g=>{var p;if(!y){const f=g.data[0];Me(!!f);const _=f,S=_.error||((p=_[0])===null||p===void 0?void 0:p.error);if(S){U(Vt,`RPC '${e}' stream ${i} received error:`,S);const x=S.status;let E=function(F){const q=it[F];if(q!==void 0)return HS(q)}(x),C=S.message;E===void 0&&(E=k.INTERNAL,C="Unknown error status: "+x+" with message "+S.message),y=!0,v.Vo(new H(E,C)),d.close()}else U(Vt,`RPC '${e}' stream ${i} received:`,f),v.mo(f)}}),w(a,TO.STAT_EVENT,g=>{g.stat===p_.PROXY?U(Vt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===p_.NOPROXY&&U(Vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function yf(){return typeof document<"u"?document:null}/**
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
 */function jd(t){return new PL(t,!0)}/**
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
 */class nA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class rA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new nA(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new H(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vM extends rA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=DL(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?ur(o.readTime):oe.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Qp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Bp(l)?{documents:OL(s,l)}:{query:LL(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KS(s,o.resumeToken);const u=Wp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Vc(s,o.snapshotVersion.toTimestamp());const u=Wp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=VL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Qp(this.serializer),n.removeTarget=e,this.t_(n)}}class _M extends rA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=NL(e.writeResults,e.commitTime),r=ur(e.commitTime);return this.listener.T_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Qp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bL(this.serializer,r))};this.t_(n)}}/**
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
 */class wM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Kp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(k.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Kp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(k.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class EM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(dr(n),this.g_=!1):U("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class TM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{vs(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=le(l);u.v_.add(4),await Ul(u),u.x_.set("Unknown"),u.v_.delete(4),await $d(u)}(this))})}),this.x_=new EM(r,i)}}async function $d(t){if(vs(t))for(const e of t.F_)await e(!0)}async function Ul(t){for(const e of t.F_)await e(!1)}function iA(t,e){const n=le(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),my(n)?py(n):Fo(n).Jo()&&fy(n,e))}function hy(t,e){const n=le(t),r=Fo(n);n.C_.delete(e),r.Jo()&&sA(n,e),n.C_.size===0&&(r.Jo()?r.Xo():vs(n)&&n.x_.set("Unknown"))}function fy(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).c_(e)}function sA(t,e){t.O_.Oe(e),Fo(t).l_(e)}function py(t){t.O_=new SL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.x_.p_()}function my(t){return vs(t)&&!Fo(t).Ho()&&t.C_.size>0}function vs(t){return le(t).v_.size===0}function oA(t){t.O_=void 0}async function IM(t){t.C_.forEach((e,n)=>{fy(t,e)})}async function SM(t,e){oA(t),my(t)?(t.x_.S_(e),py(t)):t.x_.set("Unknown")}async function AM(t,e,n){if(t.x_.set("Online"),e instanceof WS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fc(t,r)}else if(e instanceof Bu?t.O_.$e(e):e instanceof qS?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(oe.min()))try{const r=await tA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ht.EMPTY_BYTE_STRING,c.snapshotVersion)),sA(s,l);const d=new ei(c.target,l,u,c.sequenceNumber);fy(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Fc(t,r)}}async function Fc(t,e,n){if(!Vl(e))throw e;t.v_.add(1),await Ul(t),t.x_.set("Offline"),n||(n=()=>tA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await $d(t)})}function aA(t,e){return e().catch(n=>Fc(t,n,e))}async function Ud(t){const e=le(t),n=yi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;RM(e);)try{const i=await cM(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,CM(e,i)}catch(i){await Fc(e,i)}lA(e)&&uA(e)}function RM(t){return vs(t)&&t.D_.length<10}function CM(t,e){t.D_.push(e);const n=yi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function lA(t){return vs(t)&&!yi(t).Ho()&&t.D_.length>0}function uA(t){yi(t).start()}async function PM(t){yi(t).d_()}async function xM(t){const e=yi(t);for(const n of t.D_)e.I_(n.mutations)}async function kM(t,e,n){const r=t.D_.shift(),i=oy.from(r,e,n);await aA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ud(t)}async function DM(t,e){e&&yi(t).P_&&await async function(r,i){if(function(o){return EL(o)&&o!==k.ABORTED}(i.code)){const s=r.D_.shift();yi(r).Zo(),await aA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ud(r)}}(t,e),lA(t)&&uA(t)}async function $_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.v_.add(3),await Ul(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await $d(n)}async function bM(t,e){const n=le(t);e?(n.v_.delete(2),await $d(n)):e||(n.v_.add(2),await Ul(n),n.x_.set("Unknown"))}function Fo(t){return t.N_||(t.N_=function(n,r,i){const s=le(n);return s.R_(),new vM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:IM.bind(null,t),To:SM.bind(null,t),u_:AM.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),my(t)?py(t):t.x_.set("Unknown")):(await t.N_.stop(),oA(t))})),t.N_}function yi(t){return t.L_||(t.L_=function(n,r,i){const s=le(n);return s.R_(),new _M(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:PM.bind(null,t),To:DM.bind(null,t),E_:xM.bind(null,t),T_:kM.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ud(t)):(await t.L_.stop(),t.D_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class gy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yy(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Vl(t))return new H(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=fa(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U_{constructor(){this.B_=new Qe(G.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ie():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class So{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new So(e,n,oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Od(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NM{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class OM{constructor(){this.queries=new Vo(e=>kS(e),Od),this.onlineState="Unknown",this.W_=new Set}}async function cA(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new NM,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=yy(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&vy(n)}async function dA(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LM(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&vy(n)}function MM(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function vy(t){t.W_.forEach(e=>{e.next()})}var Jp,z_;(z_=Jp||(Jp={})).j_="default",z_.Cache="cache";class hA{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new So(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Jp.Cache}}/**
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
 */class fA{constructor(e){this.key=e}}class pA{constructor(e){this.key=e}}class VM{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ye(),this.mutatedKeys=ye(),this.ha=DS(e),this.Pa=new oo(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new U_,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),y=Ld(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let g=!1;h&&y?h.data.isEqual(y.data)?v!==w&&(r.track({type:3,doc:y}),g=!0):this.da(h,y)||(r.track({type:2,doc:y}),g=!0,(l&&this.ha(y,l)>0||u&&this.ha(y,u)<0)&&(a=!0)):!h&&y?(r.track({type:0,doc:y}),g=!0):h&&!y&&(r.track({type:1,doc:h}),g=!0,(l||u)&&(a=!0)),g&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,d)=>function(y,v){const w=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return w(y)-w(v)}(c.type,d.type)||this.ha(c.doc,d.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new So(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new U_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ye(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new pA(r))}),this.la.forEach(r=>{e.has(r)||n.push(new fA(r))}),n}fa(e){this.ua=e.hs,this.la=ye();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return So.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class FM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jM{constructor(e){this.key=e,this.pa=!1}}class $M{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Vo(a=>kS(a),Od),this.Sa=new Map,this.ba=new Set,this.Da=new Qe(G.comparator),this.Ca=new Map,this.va=new uy,this.Fa={},this.Ma=new Map,this.xa=Io.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function UM(t,e,n=!0){const r=wA(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await mA(r,e,n,!0),i}async function zM(t,e){const n=wA(t);await mA(n,e,!0,!1)}async function mA(t,e,n,r){const i=await dM(t.localStore,lr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await BM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iA(t.remoteStore,i),a}async function BM(t,e,n,r,i){t.Na=(d,h,y)=>async function(w,g,p,f){let _=g.view.Ta(p);_.Xi&&(_=await V_(w.localStore,g.query,!1).then(({documents:C})=>g.view.Ta(C,_)));const S=f&&f.targetChanges.get(g.targetId),x=f&&f.targetMismatches.get(g.targetId)!=null,E=g.view.applyChanges(_,w.isPrimaryClient,S,x);return H_(w,g.targetId,E.Va),E.snapshot}(t,d,h,y);const s=await V_(t.localStore,e,!0),o=new VM(e,s.hs),a=o.Ta(s.documents),l=$l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);H_(t,n,u.Va);const c=new FM(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function HM(t,e,n){const r=le(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Od(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hy(r.remoteStore,i.targetId),Xp(r,i.targetId)}).catch(Ml)):(Xp(r,i.targetId),await Yp(r.localStore,i.targetId,!0))}async function qM(t,e){const n=le(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hy(n.remoteStore,r.targetId))}async function WM(t,e,n){const r=ZM(t);try{const i=await function(o,a){const l=le(o),u=pt.now(),c=a.reduce((y,v)=>y.add(v.key),ye());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let v=Nr(),w=ye();return l.os.getEntries(y,c).next(g=>{v=g,v.forEach((p,f)=>{f.isValidDocument()||(w=w.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,v)).next(g=>{d=g;const p=[];for(const f of a){const _=gL(f,d.get(f.key).overlayedDocument);_!=null&&p.push(new Ai(f.key,_,TS(_.value.mapValue),Rn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,p,a)}).next(g=>{h=g;const p=g.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(y,g.batchId,p)})}).then(()=>({batchId:h.batchId,changes:NS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new Qe(Ce)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await zl(r,i.changes),await Ud(r.remoteStore)}catch(i){const s=yy(i,"Failed to persist write");n.reject(s)}}async function gA(t,e){const n=le(t);try{const r=await lM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Me(o.pa):i.removedDocuments.size>0&&(Me(o.pa),o.pa=!1))}),await zl(n,r,e)}catch(r){await Ml(r)}}function B_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=le(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.G_(a)&&(u=!0)}),u&&vy(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KM(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new Qe(G.comparator);o=o.insert(s,$t.newNoDocument(s,oe.min()));const a=ye().add(s),l=new Fd(oe.min(),new Map,new Qe(Ce),o,a);await gA(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),_y(r)}else await Yp(r.localStore,e,!1).then(()=>Xp(r,e,n)).catch(Ml)}async function GM(t,e){const n=le(t),r=e.batch.batchId;try{const i=await aM(n.localStore,e);vA(n,r,null),yA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zl(n,i)}catch(i){await Ml(i)}}async function QM(t,e,n){const r=le(t);try{const i=await function(o,a){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Me(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);vA(r,e,n),yA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zl(r,i)}catch(i){await Ml(i)}}function yA(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function vA(t,e,n){const r=le(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function Xp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||_A(t,r)})}function _A(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(hy(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),_y(t))}function H_(t,e,n){for(const r of n)r instanceof fA?(t.va.addReference(r.key,e),YM(t,r)):r instanceof pA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||_A(t,r.key)):ie()}function YM(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ba.add(r),_y(t))}function _y(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new G(je.fromString(e)),r=t.xa.next();t.Ca.set(r,new jM(n)),t.Da=t.Da.insert(n,r),iA(t.remoteStore,new ei(lr(iy(n.path)),r,"TargetPurposeLimboResolution",Xg._e))}}async function zl(t,e,n){const r=le(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=dy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=le(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,h=>D.forEach(h.qi,y=>c.persistence.referenceDelegate.addReference(d,h.targetId,y)).next(()=>D.forEach(h.Qi,y=>c.persistence.referenceDelegate.removeReference(d,h.targetId,y)))))}catch(d){if(!Vl(d))throw d;U("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const y=c.ns.get(h),v=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,w)}}}(r.localStore,s))}async function JM(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await eA(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new H(k.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zl(n,r.us)}}function XM(t,e){const n=le(t),r=n.Ca.get(e);if(r&&r.pa)return ye().add(r.key);{let i=ye();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function wA(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KM.bind(null,e),e.ya.u_=LM.bind(null,e.eventManager),e.ya.La=MM.bind(null,e.eventManager),e}function ZM(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QM.bind(null,e),e}class q_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oM(this.persistence,new iM,e.initialUser,this.serializer)}createPersistence(e){return new tM(cy.Hr,this.serializer)}createSharedClientState(e){return new fM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JM.bind(null,this.syncEngine),await bM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OM}()}createDatastore(e){const n=jd(e.databaseInfo.databaseId),r=function(s){return new yM(s)}(e.databaseInfo);return function(s,o,a,l){return new wM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new TM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return j_.D()?new j_:new pM}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new $M(i,s,o,a,l,u);return c&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=le(r);U("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Ul(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class EA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=_S.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vf(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function W_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rV(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$_(e.remoteStore,i)),t._onlineComponents=e}function nV(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await vf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nV(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await vf(t,new q_)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await vf(t,new q_);return t._offlineComponents}async function TA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await W_(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await W_(t,new eV))),t._onlineComponents}function iV(t){return TA(t).then(e=>e.syncEngine)}async function IA(t){const e=await TA(t),n=e.eventManager;return n.onListen=UM.bind(null,e.syncEngine),n.onUnlisten=HM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qM.bind(null,e.syncEngine),n}function sV(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new EA({next:h=>{o.enqueueAndForget(()=>dA(s,d));const y=h.docs.has(a);!y&&h.fromCache?u.reject(new H(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&h.fromCache&&l&&l.source==="server"?u.reject(new H(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new hA(iy(a.path),c,{includeMetadataChanges:!0,ta:!0});return cA(s,d)}(await IA(t),t.asyncQueue,e,n,r)),r.promise}function oV(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new EA({next:h=>{o.enqueueAndForget(()=>dA(s,d)),h.fromCache&&l.source==="server"?u.reject(new H(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new hA(a,c,{includeMetadataChanges:!0,ta:!0});return cA(s,d)}(await IA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function SA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const K_=new Map;/**
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
 */function AA(t,e,n){if(!n)throw new H(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aV(t,e,n,r){if(e===!0&&r===!0)throw new H(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function G_(t){if(!G.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Q_(t){if(G.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new H(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Y_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Y_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Y_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AO;switch(r.type){case"firstParty":return new xO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=K_.get(n);r&&(U("ComponentProvider","Removing Datastore"),K_.delete(n),r.terminate())}(this),Promise.resolve()}}function lV(t,e,n,r={}){var i;const s=(t=zn(t,Bd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=vx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new H(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(u)}t._authCredentials=new RO(new vS(a,l))}}/**
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
 */class jo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jo(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class di extends jo{constructor(e,n,r){super(e,n,iy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new G(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function Bn(t,e,...n){if(t=Et(t),AA("collection","path",e),t instanceof Bd){const r=je.fromString(e,...n);return Q_(r),new di(t,null,r)}{if(!(t instanceof Qt||t instanceof di))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Q_(r),new di(t.firestore,null,r)}}function cn(t,e,...n){if(t=Et(t),arguments.length===1&&(e=_S.newId()),AA("doc","path",e),t instanceof Bd){const r=je.fromString(e,...n);return G_(r),new Qt(t,null,new G(r))}{if(!(t instanceof Qt||t instanceof di))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return G_(r),new Qt(t.firestore,t instanceof di?t.converter:null,new G(r))}}/**
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
 */class uV{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new nA(this,"async_queue_retry"),this.cu=()=>{const n=yf();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=yf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new ar;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Vl(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=gy.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&ie()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class _s extends Bd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new uV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RA(this),this._firestoreClient.terminate()}}function cV(t,e){const n=typeof t=="object"?t:hg(),r=typeof t=="string"?t:e||"(default)",i=ps(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gx("firestore");s&&lV(i,...s)}return i}function wy(t){return t._firestoreClient||RA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new BO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,SA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ao(Ht.fromBase64String(e))}catch(n){throw new H(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ao(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function CA(){return new Bl("__name__")}/**
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
 */class Hl{constructor(e){this._methodName=e}}/**
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
 */class Ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const dV=/^__.*__$/;class hV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new jl(e,this.data,n,this.fieldTransforms)}}class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Hd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return jc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(xA(this.Vu)&&dV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class fV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jd(e)}Cu(e,n,r,i=!1){return new Hd({Vu:e,methodName:n,Du:r,path:xt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qd(t){const e=t._freezeSettings(),n=jd(t._databaseId);return new fV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kA(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);Sy("Data must be an object, but it was:",o,r);const a=bA(r,o);let l,u;if(s.merge)l=new un(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Zp(e,d,n);if(!o.contains(h))throw new H(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);OA(c,h)||c.push(h)}l=new un(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new hV(new en(a),l,u)}class Wd extends Hl{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wd}}function DA(t,e,n){return new Hd({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ty extends Hl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=DA(this,e,!0),r=this.vu.map(s=>ws(s,n)),i=new Eo(r);return new US(e.path,i)}isEqual(e){return e instanceof Ty&&Zi(this.vu,e.vu)}}class Iy extends Hl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=DA(this,e,!0),r=this.vu.map(s=>ws(s,n)),i=new To(r);return new US(e.path,i)}isEqual(e){return e instanceof Iy&&Zi(this.vu,e.vu)}}function pV(t,e,n,r){const i=t.Cu(1,e,n);Sy("Data must be an object, but it was:",i,r);const s=[],o=en.empty();ys(r,(l,u)=>{const c=Ay(e,l,n);u=Et(u);const d=i.yu(c);if(u instanceof Wd)s.push(c);else{const h=ws(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new un(s);return new PA(o,a,i.fieldTransforms)}function mV(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[Zp(e,r,n)],l=[i];if(s.length%2!=0)throw new H(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Zp(e,s[h])),l.push(s[h+1]);const u=[],c=en.empty();for(let h=a.length-1;h>=0;--h)if(!OA(u,a[h])){const y=a[h];let v=l[h];v=Et(v);const w=o.yu(y);if(v instanceof Wd)u.push(y);else{const g=ws(v,w);g!=null&&(u.push(y),c.set(y,g))}}const d=new un(u);return new PA(c,d,o.fieldTransforms)}function gV(t,e,n,r=!1){return ws(n,t.Cu(r?4:3,e))}function ws(t,e){if(NA(t=Et(t)))return Sy("Unsupported field value:",e,t),bA(t,e);if(t instanceof Hl)return function(r,i){if(!xA(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ws(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pt.fromDate(r);return{timestampValue:Vc(i.serializer,s)}}if(r instanceof pt){const s=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vc(i.serializer,s)}}if(r instanceof Ey)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ao)return{bytesValue:KS(i.serializer,r._byteString)};if(r instanceof Qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ly(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${zd(r)}`)}(t,e)}function bA(t,e){const n={};return wS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=ws(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof Ey||t instanceof Ao||t instanceof Qt||t instanceof Hl)}function Sy(t,e,n){if(!NA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=zd(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Zp(t,e,n){if((e=Et(e))instanceof Bl)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const yV=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(yV)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bl(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(k.INVALID_ARGUMENT,a+t+l)}function OA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class LA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ry("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vV extends LA{data(){return super.data()}}function Ry(t,e){return typeof e=="string"?Ay(t,e):e instanceof Bl?e._internalPath:e._delegate._internalPath}/**
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
 */function _V(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cy{}class wV extends Cy{}function Es(t,e,...n){let r=[];e instanceof Cy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Py).length,a=s.filter(l=>l instanceof Kd).length;if(o>1||o>0&&a>0)throw new H(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Kd extends wV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kd(e,n,r)}_apply(e){const n=this._parse(e);return MA(e._query,n),new jo(e.firestore,e.converter,Hp(e._query,n))}_parse(e){const n=qd(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new H(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){X_(d,c);const y=[];for(const v of d)y.push(J_(l,s,v));h={arrayValue:{values:y}}}else h=J_(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||X_(d,c),h=gV(a,o,d,c==="in"||c==="not-in");return at.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ts(t,e,n){const r=e,i=Ry("where",t);return Kd._create(i,r,n)}class Py extends Cy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Py(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)MA(o,l),o=Hp(o,l)}(e._query,n),new jo(e.firestore,e.converter,Hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function J_(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new H(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xS(e)&&n.indexOf("/")!==-1)throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!G.isDocumentKey(r))throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return w_(t,new G(r))}if(n instanceof Qt)return w_(t,n._key);throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zd(n)}.`)}function X_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class EV{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ey(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ey(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Me(ZS(r));const i=new hl(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function VA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ma{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FA extends LA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ry("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hu extends FA{data(e={}){return super.data(e)}}class TV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ma(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hu(this._firestore,this._userDataWriter,r.key,r,new ma(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Hu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ma(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Hu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ma(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:IV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function jA(t){t=zn(t,Qt);const e=zn(t.firestore,_s);return sV(wy(e),t._key).then(n=>AV(e,t,n))}class $A extends EV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function fr(t){t=zn(t,jo);const e=zn(t.firestore,_s),n=wy(e),r=new $A(e);return _V(t._query),oV(n,t._query).then(i=>new TV(e,r,t,i))}function SV(t,e,n){t=zn(t,Qt);const r=zn(t.firestore,_s),i=VA(t.converter,e,n);return Gd(r,[kA(qd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Ki(t,e,n,...r){t=zn(t,Qt);const i=zn(t.firestore,_s),s=qd(i);let o;return o=typeof(e=Et(e))=="string"||e instanceof Bl?mV(s,"updateDoc",t._key,e,n,r):pV(s,"updateDoc",t._key,e),Gd(i,[o.toMutation(t._key,Rn.exists(!0))])}function UA(t){return Gd(zn(t.firestore,_s),[new sy(t._key,Rn.none())])}function xy(t,e){const n=zn(t.firestore,_s),r=cn(t),i=VA(t.converter,e);return Gd(n,[kA(qd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Rn.exists(!1))]).then(()=>r)}function Gd(t,e){return function(r,i){const s=new ar;return r.asyncQueue.enqueueAndForget(async()=>WM(await iV(r),i,s)),s.promise}(wy(t),e)}function AV(t,e,n){const r=n.docs.get(e._key),i=new $A(t);return new FA(t,i,e._key,r,new ma(n.hasPendingWrites,n.fromCache),e.converter)}function $c(...t){return new Ty("arrayUnion",t)}function Na(...t){return new Iy("arrayRemove",t)}(function(e,n=!0){(function(i){Mo=i})(bo),cr(new Fn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _s(new CO(r.getProvider("auth-internal")),new DO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new H(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hl(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),An(m_,"4.6.0",e),An(m_,"4.6.0","esm2017")})();const RV={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},ky=dT(RV),We=cV(ky);gN().then(t=>{t&&pN(ky)});Cl(ky);var zA={exports:{}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=Symbol.for("react.element"),by=Symbol.for("react.portal"),Qd=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),CV=Symbol.for("react.server_context"),eh=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),ih=Symbol.for("react.lazy"),PV=Symbol.for("react.offscreen"),BA;BA=Symbol.for("react.module.reference");function xn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Dy:switch(t=t.type,t){case Qd:case Jd:case Yd:case th:case nh:return t;default:switch(t=t&&t.$$typeof,t){case CV:case Zd:case eh:case ih:case rh:case Xd:return t;default:return e}}case by:return e}}}ke.ContextConsumer=Zd;ke.ContextProvider=Xd;ke.Element=Dy;ke.ForwardRef=eh;ke.Fragment=Qd;ke.Lazy=ih;ke.Memo=rh;ke.Portal=by;ke.Profiler=Jd;ke.StrictMode=Yd;ke.Suspense=th;ke.SuspenseList=nh;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(t){return xn(t)===Zd};ke.isContextProvider=function(t){return xn(t)===Xd};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dy};ke.isForwardRef=function(t){return xn(t)===eh};ke.isFragment=function(t){return xn(t)===Qd};ke.isLazy=function(t){return xn(t)===ih};ke.isMemo=function(t){return xn(t)===rh};ke.isPortal=function(t){return xn(t)===by};ke.isProfiler=function(t){return xn(t)===Jd};ke.isStrictMode=function(t){return xn(t)===Yd};ke.isSuspense=function(t){return xn(t)===th};ke.isSuspenseList=function(t){return xn(t)===nh};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qd||t===Jd||t===Yd||t===th||t===nh||t===PV||typeof t=="object"&&t!==null&&(t.$$typeof===ih||t.$$typeof===rh||t.$$typeof===Xd||t.$$typeof===Zd||t.$$typeof===eh||t.$$typeof===BA||t.getModuleId!==void 0)};ke.typeOf=xn;zA.exports=ke;var HA=zA.exports;function xV(t){function e(M,B,j,Y,A){for(var fe=0,V=0,Ue=0,Ae=0,ae,ne,rt=0,Ot=0,de,mt=de=ae=0,Re=0,ct=0,Pi=0,dt=0,qn=j.length,Vr=qn-1,qt,J="",be="",Is="",Fr="",Wn;Re<qn;){if(ne=j.charCodeAt(Re),Re===Vr&&V+Ae+Ue+fe!==0&&(V!==0&&(ne=V===47?10:47),Ae=Ue=fe=0,qn++,Vr++),V+Ae+Ue+fe===0){if(Re===Vr&&(0<ct&&(J=J.replace(h,"")),0<J.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:J+=j.charAt(Re)}ne=59}switch(ne){case 123:for(J=J.trim(),ae=J.charCodeAt(0),de=1,dt=++Re;Re<qn;){switch(ne=j.charCodeAt(Re)){case 123:de++;break;case 125:de--;break;case 47:switch(ne=j.charCodeAt(Re+1)){case 42:case 47:e:{for(mt=Re+1;mt<Vr;++mt)switch(j.charCodeAt(mt)){case 47:if(ne===42&&j.charCodeAt(mt-1)===42&&Re+2!==mt){Re=mt+1;break e}break;case 10:if(ne===47){Re=mt+1;break e}}Re=mt}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;Re++<Vr&&j.charCodeAt(Re)!==ne;);}if(de===0)break;Re++}switch(de=j.substring(dt,Re),ae===0&&(ae=(J=J.replace(d,"").trim()).charCodeAt(0)),ae){case 64:switch(0<ct&&(J=J.replace(h,"")),ne=J.charCodeAt(1),ne){case 100:case 109:case 115:case 45:ct=B;break;default:ct=Xt}if(de=e(B,ct,de,ne,A+1),dt=de.length,0<L&&(ct=n(Xt,J,Pi),Wn=a(3,de,ct,B,Se,Te,dt,ne,A,Y),J=ct.join(""),Wn!==void 0&&(dt=(de=Wn.trim()).length)===0&&(ne=0,de="")),0<dt)switch(ne){case 115:J=J.replace(E,o);case 100:case 109:case 45:de=J+"{"+de+"}";break;case 107:J=J.replace(f,"$1 $2"),de=J+"{"+de+"}",de=et===1||et===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=J+de,Y===112&&(de=(be+=de,""))}else de="";break;default:de=e(B,n(B,J,Pi),de,Y,A+1)}Is+=de,de=Pi=ct=mt=ae=0,J="",ne=j.charCodeAt(++Re);break;case 125:case 59:if(J=(0<ct?J.replace(h,""):J).trim(),1<(dt=J.length))switch(mt===0&&(ae=J.charCodeAt(0),ae===45||96<ae&&123>ae)&&(dt=(J=J.replace(" ",":")).length),0<L&&(Wn=a(1,J,B,M,Se,Te,be.length,Y,A,Y))!==void 0&&(dt=(J=Wn.trim()).length)===0&&(J="\0\0"),ae=J.charCodeAt(0),ne=J.charCodeAt(1),ae){case 0:break;case 64:if(ne===105||ne===99){Fr+=J+j.charAt(Re);break}default:J.charCodeAt(dt-1)!==58&&(be+=i(J,ae,ne,J.charCodeAt(2)))}Pi=ct=mt=ae=0,J="",ne=j.charCodeAt(++Re)}}switch(ne){case 13:case 10:V===47?V=0:1+ae===0&&Y!==107&&0<J.length&&(ct=1,J+="\0"),0<L*Z&&a(0,J,B,M,Se,Te,be.length,Y,A,Y),Te=1,Se++;break;case 59:case 125:if(V+Ae+Ue+fe===0){Te++;break}default:switch(Te++,qt=j.charAt(Re),ne){case 9:case 32:if(Ae+fe+V===0)switch(rt){case 44:case 58:case 9:case 32:qt="";break;default:ne!==32&&(qt=" ")}break;case 0:qt="\\0";break;case 12:qt="\\f";break;case 11:qt="\\v";break;case 38:Ae+V+fe===0&&(ct=Pi=1,qt="\f"+qt);break;case 108:if(Ae+V+fe+He===0&&0<mt)switch(Re-mt){case 2:rt===112&&j.charCodeAt(Re-3)===58&&(He=rt);case 8:Ot===111&&(He=Ot)}break;case 58:Ae+V+fe===0&&(mt=Re);break;case 44:V+Ue+Ae+fe===0&&(ct=1,qt+="\r");break;case 34:case 39:V===0&&(Ae=Ae===ne?0:Ae===0?ne:Ae);break;case 91:Ae+V+Ue===0&&fe++;break;case 93:Ae+V+Ue===0&&fe--;break;case 41:Ae+V+fe===0&&Ue--;break;case 40:if(Ae+V+fe===0){if(ae===0)switch(2*rt+3*Ot){case 533:break;default:ae=1}Ue++}break;case 64:V+Ue+Ae+fe+mt+de===0&&(de=1);break;case 42:case 47:if(!(0<Ae+fe+Ue))switch(V){case 0:switch(2*ne+3*j.charCodeAt(Re+1)){case 235:V=47;break;case 220:dt=Re,V=42}break;case 42:ne===47&&rt===42&&dt+2!==Re&&(j.charCodeAt(dt+2)===33&&(be+=j.substring(dt,Re+1)),qt="",V=0)}}V===0&&(J+=qt)}Ot=rt,rt=ne,Re++}if(dt=be.length,0<dt){if(ct=B,0<L&&(Wn=a(2,be,ct,M,Se,Te,dt,Y,A,Y),Wn!==void 0&&(be=Wn).length===0))return Fr+be+Is;if(be=ct.join(",")+"{"+be+"}",et*He!==0){switch(et!==2||s(be,2)||(He=0),He){case 111:be=be.replace(S,":-moz-$1")+be;break;case 112:be=be.replace(_,"::-webkit-input-$1")+be.replace(_,"::-moz-$1")+be.replace(_,":-ms-input-$1")+be}He=0}}return Fr+be+Is}function n(M,B,j){var Y=B.trim().split(g);B=Y;var A=Y.length,fe=M.length;switch(fe){case 0:case 1:var V=0;for(M=fe===0?"":M[0]+" ";V<A;++V)B[V]=r(M,B[V],j).trim();break;default:var Ue=V=0;for(B=[];V<A;++V)for(var Ae=0;Ae<fe;++Ae)B[Ue++]=r(M[Ae]+" ",Y[V],j).trim()}return B}function r(M,B,j){var Y=B.charCodeAt(0);switch(33>Y&&(Y=(B=B.trim()).charCodeAt(0)),Y){case 38:return B.replace(p,"$1"+M.trim());case 58:return M.trim()+B.replace(p,"$1"+M.trim());default:if(0<1*j&&0<B.indexOf("\f"))return B.replace(p,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+B}function i(M,B,j,Y){var A=M+";",fe=2*B+3*j+4*Y;if(fe===944){M=A.indexOf(":",9)+1;var V=A.substring(M,A.length-1).trim();return V=A.substring(0,M).trim()+V+";",et===1||et===2&&s(V,1)?"-webkit-"+V+V:V}if(et===0||et===2&&!s(A,1))return A;switch(fe){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ce,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return V=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+V+"-webkit-"+A+"-ms-flex-pack"+V+A;case 1005:return v.test(A)?A.replace(y,":-webkit-")+A.replace(y,":-moz-")+A:A;case 1e3:switch(V=A.substring(13).trim(),B=V.indexOf("-")+1,V.charCodeAt(0)+V.charCodeAt(B)){case 226:V=A.replace(x,"tb");break;case 232:V=A.replace(x,"tb-rl");break;case 220:V=A.replace(x,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+V+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(B=(A=M).length-10,V=(A.charCodeAt(B)===33?A.substring(0,B):A).substring(M.indexOf(":",7)+1).trim(),fe=V.charCodeAt(0)+(V.charCodeAt(7)|0)){case 203:if(111>V.charCodeAt(8))break;case 115:A=A.replace(V,"-webkit-"+V)+";"+A;break;case 207:case 102:A=A.replace(V,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+A.replace(V,"-webkit-"+V)+";"+A.replace(V,"-ms-"+V+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return V=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+V+"-ms-flex-"+V+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(b,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(b,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(q.test(M)===!0)return(V=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),B,j,Y).replace(":fill-available",":stretch"):A.replace(V,"-webkit-"+V)+A.replace(V,"-moz-"+V.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,j+Y===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+A}return A}function s(M,B){var j=M.indexOf(B===1?":":"{"),Y=M.substring(0,B!==3?j:10);return j=M.substring(j+1,M.length-1),Q(B!==2?Y:Y.replace(F,"$1"),j,B)}function o(M,B){var j=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return j!==B+";"?j.replace(C," or ($1)").substring(4):"("+B+")"}function a(M,B,j,Y,A,fe,V,Ue,Ae,ae){for(var ne=0,rt=B,Ot;ne<L;++ne)switch(Ot=ge[ne].call(c,M,rt,j,Y,A,fe,V,Ue,Ae,ae)){case void 0:case!1:case!0:case null:break;default:rt=Ot}if(rt!==B)return rt}function l(M){switch(M){case void 0:case null:L=ge.length=0;break;default:if(typeof M=="function")ge[L++]=M;else if(typeof M=="object")for(var B=0,j=M.length;B<j;++B)l(M[B]);else Z=!!M|0}return l}function u(M){return M=M.prefix,M!==void 0&&(Q=null,M?typeof M!="function"?et=1:(et=2,Q=M):et=0),u}function c(M,B){var j=M;if(33>j.charCodeAt(0)&&(j=j.trim()),me=j,j=[me],0<L){var Y=a(-1,B,j,j,Se,Te,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(B=Y)}var A=e(Xt,j,B,0,0);return 0<L&&(Y=a(-2,A,j,j,Se,Te,A.length,0,0,0),Y!==void 0&&(A=Y)),me="",He=0,Te=Se=1,A}var d=/^\0+/g,h=/[\0\r\f]/g,y=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,g=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,S=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,b=/-self|flex-/g,F=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,Te=1,Se=1,He=0,et=1,Xt=[],ge=[],L=0,Q=null,Z=0,me="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var kV={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function DV(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var bV=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Z_=DV(function(t){return bV.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),qA={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St=typeof Symbol=="function"&&Symbol.for,Ny=St?Symbol.for("react.element"):60103,Oy=St?Symbol.for("react.portal"):60106,sh=St?Symbol.for("react.fragment"):60107,oh=St?Symbol.for("react.strict_mode"):60108,ah=St?Symbol.for("react.profiler"):60114,lh=St?Symbol.for("react.provider"):60109,uh=St?Symbol.for("react.context"):60110,Ly=St?Symbol.for("react.async_mode"):60111,ch=St?Symbol.for("react.concurrent_mode"):60111,dh=St?Symbol.for("react.forward_ref"):60112,hh=St?Symbol.for("react.suspense"):60113,NV=St?Symbol.for("react.suspense_list"):60120,fh=St?Symbol.for("react.memo"):60115,ph=St?Symbol.for("react.lazy"):60116,OV=St?Symbol.for("react.block"):60121,LV=St?Symbol.for("react.fundamental"):60117,MV=St?Symbol.for("react.responder"):60118,VV=St?Symbol.for("react.scope"):60119;function yn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ny:switch(t=t.type,t){case Ly:case ch:case sh:case ah:case oh:case hh:return t;default:switch(t=t&&t.$$typeof,t){case uh:case dh:case ph:case fh:case lh:return t;default:return e}}case Oy:return e}}}function WA(t){return yn(t)===ch}De.AsyncMode=Ly;De.ConcurrentMode=ch;De.ContextConsumer=uh;De.ContextProvider=lh;De.Element=Ny;De.ForwardRef=dh;De.Fragment=sh;De.Lazy=ph;De.Memo=fh;De.Portal=Oy;De.Profiler=ah;De.StrictMode=oh;De.Suspense=hh;De.isAsyncMode=function(t){return WA(t)||yn(t)===Ly};De.isConcurrentMode=WA;De.isContextConsumer=function(t){return yn(t)===uh};De.isContextProvider=function(t){return yn(t)===lh};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ny};De.isForwardRef=function(t){return yn(t)===dh};De.isFragment=function(t){return yn(t)===sh};De.isLazy=function(t){return yn(t)===ph};De.isMemo=function(t){return yn(t)===fh};De.isPortal=function(t){return yn(t)===Oy};De.isProfiler=function(t){return yn(t)===ah};De.isStrictMode=function(t){return yn(t)===oh};De.isSuspense=function(t){return yn(t)===hh};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===sh||t===ch||t===ah||t===oh||t===hh||t===NV||typeof t=="object"&&t!==null&&(t.$$typeof===ph||t.$$typeof===fh||t.$$typeof===lh||t.$$typeof===uh||t.$$typeof===dh||t.$$typeof===LV||t.$$typeof===MV||t.$$typeof===VV||t.$$typeof===OV)};De.typeOf=yn;qA.exports=De;var FV=qA.exports,My=FV,jV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$V={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vy={};Vy[My.ForwardRef]=UV;Vy[My.Memo]=KA;function ew(t){return My.isMemo(t)?KA:Vy[t.$$typeof]||jV}var zV=Object.defineProperty,BV=Object.getOwnPropertyNames,tw=Object.getOwnPropertySymbols,HV=Object.getOwnPropertyDescriptor,qV=Object.getPrototypeOf,nw=Object.prototype;function GA(t,e,n){if(typeof e!="string"){if(nw){var r=qV(e);r&&r!==nw&&GA(t,r,n)}var i=BV(e);tw&&(i=i.concat(tw(e)));for(var s=ew(t),o=ew(e),a=0;a<i.length;++a){var l=i[a];if(!$V[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=HV(e,l);try{zV(t,l,u)}catch{}}}}return t}var WV=GA;const KV=fm(WV);var Yn={};function nr(){return(nr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var rw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},em=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!HA.typeOf(t)},Uc=Object.freeze([]),hi=Object.freeze({});function pl(t){return typeof t=="function"}function iw(t){return t.displayName||t.name||"Component"}function Fy(t){return t&&typeof t.styledComponentId=="string"}var Ro=typeof process<"u"&&(Yn.REACT_APP_SC_ATTR||Yn.SC_ATTR)||"data-styled",jy=typeof window<"u"&&"HTMLElement"in window,GV=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Yn.REACT_APP_SC_DISABLE_SPEEDY!==""?Yn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Yn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Yn.SC_DISABLE_SPEEDY!==void 0&&Yn.SC_DISABLE_SPEEDY!==""&&Yn.SC_DISABLE_SPEEDY!=="false"&&Yn.SC_DISABLE_SPEEDY),QV={};function ql(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var YV=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ql(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),qu=new Map,zc=new Map,Oa=1,Iu=function(t){if(qu.has(t))return qu.get(t);for(;zc.has(Oa);)Oa++;var e=Oa++;return qu.set(t,e),zc.set(e,t),e},JV=function(t){return zc.get(t)},XV=function(t,e){e>=Oa&&(Oa=e+1),qu.set(t,e),zc.set(e,t)},ZV="style["+Ro+'][data-styled-version="5.3.6"]',e4=new RegExp("^"+Ro+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),t4=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},n4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(e4);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(XV(u,l),t4(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},r4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},QA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ro))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ro,"active"),r.setAttribute("data-styled-version","5.3.6");var o=r4();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},i4=function(){function t(n){var r=this.element=QA(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ql(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),s4=function(){function t(n){var r=this.element=QA(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),o4=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),sw=jy,a4={isServer:!jy,useCSSOMInjection:!GV},Bc=function(){function t(n,r,i){n===void 0&&(n=hi),r===void 0&&(r={}),this.options=nr({},a4,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&jy&&sw&&(sw=!1,function(s){for(var o=document.querySelectorAll(ZV),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ro)!=="active"&&(n4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Iu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(nr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new o4(o):s?new i4(o):new s4(o),new YV(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Iu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Iu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Iu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=JV(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ro+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),l4=/(a)(d)/gi,ow=function(t){return String.fromCharCode(t+(t>25?39:97))};function tm(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=ow(e%52)+n;return(ow(e%52)+n).replace(l4,"$1-$2")}var Ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},YA=function(t){return Ws(5381,t)};function JA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(pl(n)&&!Fy(n))return!1}return!0}var u4=YA("5.3.6"),c4=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&JA(e),this.componentId=n,this.baseHash=Ws(u4,n),this.baseStyle=r,Bc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ls(this.rules,e,n,r).join(""),a=tm(Ws(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ws(this.baseHash,r.hash),d="",h=0;h<u;h++){var y=this.rules[h];if(typeof y=="string")d+=y;else if(y){var v=ls(y,e,n,r),w=Array.isArray(v)?v.join(""):v;c=Ws(c,w+h),d+=w}}if(d){var g=tm(c>>>0);if(!n.hasNameForId(i,g)){var p=r(d,"."+g,void 0,i);n.insertRules(i,g,p)}s.push(g)}}return s.join(" ")},t}(),d4=/^\s*\/\/.*$/gm,h4=[":","[",".","#"];function f4(t){var e,n,r,i,s=t===void 0?hi:t,o=s.options,a=o===void 0?hi:o,l=s.plugins,u=l===void 0?Uc:l,c=new xV(a),d=[],h=function(w){function g(p){if(p)try{w(p+"}")}catch{}}return function(p,f,_,S,x,E,C,b,F,q){switch(p){case 1:if(F===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(b===0)return f+"/*|*/";break;case 3:switch(b){case 102:case 112:return w(_[0]+f),"";default:return f+(q===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(g)}}}(function(w){d.push(w)}),y=function(w,g,p){return g===0&&h4.indexOf(p[n.length])!==-1||p.match(i)?w:"."+e};function v(w,g,p,f){f===void 0&&(f="&");var _=w.replace(d4,""),S=g&&p?p+" "+g+" { "+_+" }":_;return e=f,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!g?"":g,S)}return c.use([].concat(u,[function(w,g,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,y))},h,function(w){if(w===-2){var g=d;return d=[],g}}])),v.hash=u.length?u.reduce(function(w,g){return g.name||ql(15),Ws(w,g.name)},5381).toString():"",v}var XA=xo.createContext();XA.Consumer;var ZA=xo.createContext(),p4=(ZA.Consumer,new Bc),nm=f4();function eR(){return T.useContext(XA)||p4}function tR(){return T.useContext(ZA)||nm}var nR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=nm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ql(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=nm),this.name+e.hash},t}(),m4=/([A-Z])/,g4=/([A-Z])/g,y4=/^ms-/,v4=function(t){return"-"+t.toLowerCase()};function aw(t){return m4.test(t)?t.replace(g4,v4).replace(y4,"-ms-"):t}var lw=function(t){return t==null||t===!1||t===""};function ls(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ls(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(lw(t))return"";if(Fy(t))return"."+t.styledComponentId;if(pl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ls(l,e,n,r)}var u;return t instanceof nR?n?(t.inject(n,r),t.getName(r)):t:em(t)?function c(d,h){var y,v,w=[];for(var g in d)d.hasOwnProperty(g)&&!lw(d[g])&&(Array.isArray(d[g])&&d[g].isCss||pl(d[g])?w.push(aw(g)+":",d[g],";"):em(d[g])?w.push.apply(w,c(d[g],g)):w.push(aw(g)+": "+(y=g,(v=d[g])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||y in kV?String(v).trim():v+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(t):t.toString()}var uw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function $y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return pl(t)||em(t)?uw(ls(rw(Uc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:uw(ls(rw(t,n)))}var rR=function(t,e,n){return n===void 0&&(n=hi),t.theme!==n.theme&&t.theme||e||n.theme},_4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,w4=/(^-|-$)/g;function _f(t){return t.replace(_4,"-").replace(w4,"")}var Uy=function(t){return tm(YA(t)>>>0)};function Su(t){return typeof t=="string"&&!0}var rm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},E4=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function T4(t,e,n){var r=t[n];rm(e)&&rm(r)?iR(r,e):t[n]=e}function iR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(rm(o))for(var a in o)E4(a)&&T4(t,o[a],a)}return t}var zy=xo.createContext();zy.Consumer;var wf={};function sR(t,e,n){var r=Fy(t),i=!Su(t),s=e.attrs,o=s===void 0?Uc:s,a=e.componentId,l=a===void 0?function(f,_){var S=typeof f!="string"?"sc":_f(f);wf[S]=(wf[S]||0)+1;var x=S+"-"+Uy("5.3.6"+S+wf[S]);return _?_+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Su(f)?"styled."+f:"Styled("+iw(f)+")"}(t):u,d=e.displayName&&e.componentId?_f(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(f,_,S){return t.shouldForwardProp(f,_,S)&&e.shouldForwardProp(f,_,S)}:t.shouldForwardProp);var v,w=new c4(n,d,r?t.componentStyle:void 0),g=w.isStatic&&o.length===0,p=function(f,_){return function(S,x,E,C){var b=S.attrs,F=S.componentStyle,q=S.defaultProps,ce=S.foldedComponentIds,Te=S.shouldForwardProp,Se=S.styledComponentId,He=S.target,et=function(Y,A,fe){Y===void 0&&(Y=hi);var V=nr({},A,{theme:Y}),Ue={};return fe.forEach(function(Ae){var ae,ne,rt,Ot=Ae;for(ae in pl(Ot)&&(Ot=Ot(V)),Ot)V[ae]=Ue[ae]=ae==="className"?(ne=Ue[ae],rt=Ot[ae],ne&&rt?ne+" "+rt:ne||rt):Ot[ae]}),[V,Ue]}(rR(x,T.useContext(zy),q)||hi,x,b),Xt=et[0],ge=et[1],L=function(Y,A,fe,V){var Ue=eR(),Ae=tR(),ae=A?Y.generateAndInjectStyles(hi,Ue,Ae):Y.generateAndInjectStyles(fe,Ue,Ae);return ae}(F,C,Xt),Q=E,Z=ge.$as||x.$as||ge.as||x.as||He,me=Su(Z),M=ge!==x?nr({},x,{},ge):x,B={};for(var j in M)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?B.as=M[j]:(Te?Te(j,Z_,Z):!me||Z_(j))&&(B[j]=M[j]));return x.style&&ge.style!==x.style&&(B.style=nr({},x.style,{},ge.style)),B.className=Array.prototype.concat(ce,Se,L!==Se?L:null,x.className,ge.className).filter(Boolean).join(" "),B.ref=Q,T.createElement(Z,B)}(v,f,_,g)};return p.displayName=c,(v=xo.forwardRef(p)).attrs=h,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=y,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Uc,v.styledComponentId=d,v.target=r?t.target:t,v.withComponent=function(f){var _=e.componentId,S=function(E,C){if(E==null)return{};var b,F,q={},ce=Object.keys(E);for(F=0;F<ce.length;F++)b=ce[F],C.indexOf(b)>=0||(q[b]=E[b]);return q}(e,["componentId"]),x=_&&_+"-"+(Su(f)?f:_f(iw(f)));return sR(f,nr({},S,{attrs:h,componentId:x}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?iR({},t.defaultProps,f):f}}),v.toString=function(){return"."+v.styledComponentId},i&&KV(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var O=function(t){return function e(n,r,i){if(i===void 0&&(i=hi),!HA.isValidElementType(r))return ql(1,String(r));var s=function(){return n(r,i,$y.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,nr({},i,{},o))},s.attrs=function(o){return e(n,r,nr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(sR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){O[t]=O(t)});var I4=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=JA(n),Bc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ls(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Bc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function S4(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=$y.apply(void 0,[t].concat(n)),s="sc-global-"+Uy(JSON.stringify(i)),o=new I4(i,s);function a(u){var c=eR(),d=tR(),h=T.useContext(zy),y=T.useRef(c.allocateGSInstance(s)).current;return c.server&&l(y,u,c,h,d),T.useLayoutEffect(function(){if(!c.server)return l(y,u,c,h,d),function(){return o.removeStyles(y,c)}},[y,u,c,h,d]),null}function l(u,c,d,h,y){if(o.isStatic)o.renderStyles(u,QV,d,y);else{var v=nr({},c,{theme:rR(c,h,a.defaultProps)});o.renderStyles(u,v,d,y)}}return xo.memo(a)}function oR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=$y.apply(void 0,[t].concat(n)).join(""),s=Uy(i);return new nR(s,i)}const mh=O(t=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:m.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,A4=oR`
  to {
     backdrop-filter: blur(3px);
  }
`,R4=O.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`,aR=O(({className:t,children:e,addToPracticePlan:n})=>m.jsx("li",{className:t,children:m.jsx("button",{onClick:n,children:e})}))`
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

  & > button {
    border-bottom: 2px solid transparent;
  }

  &:hover > button {
    border-bottom: 2px solid var(--highlight);
  }
`,C4=(t,e,n)=>{const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,l=e.clientY;(a<s||a>o||l<r||l>i)&&n()},P4=O.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,lR=O(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>m.jsxs("dialog",{ref:n,onClick:o=>C4(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[m.jsxs(P4,{children:[r,m.jsx(mh,{onClick:i})]}),t]}))`
  --animation-timing: 0.3s;
  --panel-width: 300px;
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
    &::backdrop {
      animation-name: ${A4};
      animation-duration: var(--animation-timing);
      animation-fill-mode: forwards;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`,By=T.createContext(null),x4=({children:t})=>{const[e,n]=T.useState(),[r,i]=T.useState(""),s=T.useRef(),[o,a]=T.useState(!1),l=()=>{s.current&&a(!1)},u=()=>{var c;(c=s.current)==null||c.show(),a(!0)};return m.jsxs(By.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:u,closePanel:l},children:[t,m.jsx(lR,{title:r,passedRef:s,onClose:l,animationDirection:o,children:m.jsx(R4,{children:e})})]})},lt=O(({text:t,onClick:e,className:n,Icon:r,...i})=>m.jsxs("button",{className:n,onClick:e,...i,children:[m.jsx("span",{children:t}),!!r&&m.jsx("div",{children:m.jsx(r,{})})]}))`
  --button-color: ${({$level:t})=>t==="caution"?"var(--caution)":"var(--affirmative)"};

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
`,cw=O(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>m.jsx("ul",{className:r,children:t.map(i=>m.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
  grid-area: nav;
  display: flex;
  gap: 1px;
  background-color: var(--primary);
  border-bottom: 1px groove var(--secondary);
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li[aria-selected='true'] {
    border-bottom: 2px solid var(--highlight);
    cursor: not-allowed;
  }

  & > li {
    cursor: pointer;
    padding: 16px 32px;
    text-transform: capitalize;
    position: relative;
  }

  & > li:not(:last-of-type)::after {
    content: '|';
    color: rgba(255, 255, 255, 0.25);
    position: absolute;
    right: 0;
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
 */function Xe(){return Xe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xe.apply(this,arguments)}var tt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tt||(tt={}));const dw="popstate";function k4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=pr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ml("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:cs(s))}function r(i,s){us(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return b4(e,n,r,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function us(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D4(){return Math.random().toString(36).substr(2,8)}function hw(t,e){return{usr:t.state,key:t.key,idx:e}}function ml(t,e,n,r){return n===void 0&&(n=null),Xe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pr(e):e,{state:n,key:e&&e.key||r||D4()})}function cs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function b4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=tt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=tt.Pop;let g=c(),p=g==null?null:g-u;u=g,l&&l({action:a,location:w.location,delta:p})}function h(g,p){a=tt.Push;let f=ml(w.location,g,p);n&&n(f,g),u=c()+1;let _=hw(f,u),S=w.createHref(f);try{o.pushState(_,"",S)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(S)}s&&l&&l({action:a,location:w.location,delta:1})}function y(g,p){a=tt.Replace;let f=ml(w.location,g,p);n&&n(f,g),u=c();let _=hw(f,u),S=w.createHref(f);o.replaceState(_,"",S),s&&l&&l({action:a,location:w.location,delta:0})}function v(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof g=="string"?g:cs(g);return f=f.replace(/ $/,"%20"),ue(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dw,d),l=g,()=>{i.removeEventListener(dw,d),l=null}},createHref(g){return e(i,g)},createURL:v,encodeLocation(g){let p=v(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(g){return o.go(g)}};return w}var Ye;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ye||(Ye={}));const N4=new Set(["lazy","caseSensitive","path","id","index","children"]);function O4(t){return t.index===!0}function im(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),O4(i)){let l=Xe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Xe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=im(i.children,e,o,r)),l}})}function Ks(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?pr(e):e,i=Or(r.pathname||"/",n);if(i==null)return null;let s=uR(t);M4(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=K4(i);o=q4(s[a],l)}return o}function L4(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function uR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),uR(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:B4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of cR(s.path))i(s,o,l)}),e}function cR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cR(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function M4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:H4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V4=/^:[\w-]+$/,F4=3,j4=2,$4=1,U4=10,z4=-2,fw=t=>t==="*";function B4(t,e){let n=t.split("/"),r=n.length;return n.some(fw)&&(r+=z4),e&&(r+=j4),n.filter(i=>!fw(i)).reduce((i,s)=>i+(V4.test(s)?F4:s===""?$4:U4),r)}function H4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function q4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sm({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Rr([i,c.pathname]),pathnameBase:Y4(Rr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Rr([i,c.pathnameBase]))}return s}function sm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=W4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:y}=c;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function W4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),us(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function K4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return us(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Or(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function G4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pr(t):t;return{pathname:n?n.startsWith("/")?n:Q4(n,e):e,search:J4(r),hash:X4(i)}}function Q4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hy(t,e){let n=dR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=pr(t):(i=Xe({},t),ue(!i.pathname||!i.pathname.includes("?"),Ef("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Ef("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Ef("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=G4(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),Y4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,X4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Wy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function hR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const fR=["post","put","patch","delete"],Z4=new Set(fR),eF=["get",...fR],tF=new Set(eF),nF=new Set([301,302,303,307,308]),rF=new Set([307,308]),Tf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},iF={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ea={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},pR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sF=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),mR="remix-router-transitions";function oF(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=R=>({hasErrorBoundary:I(R)})}else i=sF;let s={},o=im(t.routes,i,void 0,s),a,l=t.basename||"/",u=Xe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,h=null,y=null,v=null,w=t.hydrationData!=null,g=Ks(o,t.history.location,l),p=null;if(g==null){let I=_n(404,{pathname:t.history.location.pathname}),{matches:R,route:P}=Ew(o);g=R,p={[P.id]:I}}let f,_=g.some(I=>I.route.lazy),S=g.some(I=>I.route.loader);if(_)f=!1;else if(!S)f=!0;else if(u.v7_partialHydration){let I=t.hydrationData?t.hydrationData.loaderData:null,R=t.hydrationData?t.hydrationData.errors:null;f=g.every(P=>P.route.loader&&P.route.loader.hydrate!==!0&&(I&&I[P.route.id]!==void 0||R&&R[P.route.id]!==void 0))}else f=t.hydrationData!=null;let x,E={historyAction:t.history.action,location:t.history.location,matches:g,initialized:f,navigation:Tf,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,blockers:new Map},C=tt.Pop,b=!1,F,q=!1,ce=new Map,Te=null,Se=!1,He=!1,et=[],Xt=[],ge=new Map,L=0,Q=-1,Z=new Map,me=new Set,M=new Map,B=new Map,j=new Set,Y=new Map,A=new Map,fe=!1;function V(){if(c=t.history.listen(I=>{let{action:R,location:P,delta:$}=I;if(fe){fe=!1;return}us(A.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=iv({currentLocation:E.location,nextLocation:P,historyAction:R});if(K&&$!=null){fe=!0,t.history.go($*-1),Gl(K,{state:"blocked",location:P,proceed(){Gl(K,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go($)},reset(){let pe=new Map(E.blockers);pe.set(K,ea),ae({blockers:pe})}});return}return de(R,P)}),n){yF(e,ce);let I=()=>vF(e,ce);e.addEventListener("pagehide",I),Te=()=>e.removeEventListener("pagehide",I)}return E.initialized||de(tt.Pop,E.location,{initialHydration:!0}),x}function Ue(){c&&c(),Te&&Te(),d.clear(),F&&F.abort(),E.fetchers.forEach((I,R)=>Fr(R)),E.blockers.forEach((I,R)=>rv(R))}function Ae(I){return d.add(I),()=>d.delete(I)}function ae(I,R){R===void 0&&(R={}),E=Xe({},E,I);let P=[],$=[];u.v7_fetcherPersist&&E.fetchers.forEach((K,pe)=>{K.state==="idle"&&(j.has(pe)?$.push(pe):P.push(pe))}),[...d].forEach(K=>K(E,{deletedFetchers:$,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),u.v7_fetcherPersist&&(P.forEach(K=>E.fetchers.delete(K)),$.forEach(K=>Fr(K)))}function ne(I,R,P){var $,K;let{flushSync:pe}=P===void 0?{}:P,re=E.actionData!=null&&E.navigation.formMethod!=null&&Nn(E.navigation.formMethod)&&E.navigation.state==="loading"&&(($=I.state)==null?void 0:$._isRedirect)!==!0,ee;R.actionData?Object.keys(R.actionData).length>0?ee=R.actionData:ee=null:re?ee=E.actionData:ee=null;let X=R.loaderData?ww(E.loaderData,R.loaderData,R.matches||[],R.errors):E.loaderData,_e=E.blockers;_e.size>0&&(_e=new Map(_e),_e.forEach((Oe,At)=>_e.set(At,ea)));let gt=b===!0||E.navigation.formMethod!=null&&Nn(E.navigation.formMethod)&&((K=I.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),Se||C===tt.Pop||(C===tt.Push?t.history.push(I,I.state):C===tt.Replace&&t.history.replace(I,I.state));let he;if(C===tt.Pop){let Oe=ce.get(E.location.pathname);Oe&&Oe.has(I.pathname)?he={currentLocation:E.location,nextLocation:I}:ce.has(I.pathname)&&(he={currentLocation:I,nextLocation:E.location})}else if(q){let Oe=ce.get(E.location.pathname);Oe?Oe.add(I.pathname):(Oe=new Set([I.pathname]),ce.set(E.location.pathname,Oe)),he={currentLocation:E.location,nextLocation:I}}ae(Xe({},R,{actionData:ee,loaderData:X,historyAction:C,location:I,initialized:!0,navigation:Tf,revalidation:"idle",restoreScrollPosition:ov(I,R.matches||E.matches),preventScrollReset:gt,blockers:_e}),{viewTransitionOpts:he,flushSync:pe===!0}),C=tt.Pop,b=!1,q=!1,Se=!1,He=!1,et=[],Xt=[]}async function rt(I,R){if(typeof I=="number"){t.history.go(I);return}let P=om(E.location,E.matches,l,u.v7_prependBasename,I,u.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:$,submission:K,error:pe}=pw(u.v7_normalizeFormMethod,!1,P,R),re=E.location,ee=ml(E.location,$,R&&R.state);ee=Xe({},ee,t.history.encodeLocation(ee));let X=R&&R.replace!=null?R.replace:void 0,_e=tt.Push;X===!0?_e=tt.Replace:X===!1||K!=null&&Nn(K.formMethod)&&K.formAction===E.location.pathname+E.location.search&&(_e=tt.Replace);let gt=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,he=(R&&R.unstable_flushSync)===!0,Oe=iv({currentLocation:re,nextLocation:ee,historyAction:_e});if(Oe){Gl(Oe,{state:"blocked",location:ee,proceed(){Gl(Oe,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),rt(I,R)},reset(){let At=new Map(E.blockers);At.set(Oe,ea),ae({blockers:At})}});return}return await de(_e,ee,{submission:K,pendingError:pe,preventScrollReset:gt,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:he})}function Ot(){if(qt(),ae({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){de(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}de(C||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function de(I,R,P){F&&F.abort(),F=null,C=I,Se=(P&&P.startUninterruptedRevalidation)===!0,kR(E.location,E.matches),b=(P&&P.preventScrollReset)===!0,q=(P&&P.enableViewTransition)===!0;let $=a||o,K=P&&P.overrideNavigation,pe=Ks($,R,l),re=(P&&P.flushSync)===!0;if(!pe){let At=_n(404,{pathname:R.pathname}),{matches:vn,route:yt}=Ew($);_h(),ne(R,{matches:vn,loaderData:{},errors:{[yt.id]:At}},{flushSync:re});return}if(E.initialized&&!He&&dF(E.location,R)&&!(P&&P.submission&&Nn(P.submission.formMethod))){ne(R,{matches:pe},{flushSync:re});return}F=new AbortController;let ee=na(t.history,R,F.signal,P&&P.submission),X,_e;if(P&&P.pendingError)_e={[La(pe).route.id]:P.pendingError};else if(P&&P.submission&&Nn(P.submission.formMethod)){let At=await mt(ee,R,P.submission,pe,{replace:P.replace,flushSync:re});if(At.shortCircuited)return;X=At.pendingActionData,_e=At.pendingActionError,K=If(R,P.submission),re=!1,ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:gt,loaderData:he,errors:Oe}=await Re(ee,R,pe,K,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,re,X,_e);gt||(F=null,ne(R,Xe({matches:pe},X?{actionData:X}:{},{loaderData:he,errors:Oe})))}async function mt(I,R,P,$,K){K===void 0&&(K={}),qt();let pe=mF(R,P);ae({navigation:pe},{flushSync:K.flushSync===!0});let re,ee=lm($,R);if(!ee.route.action&&!ee.route.lazy)re={type:Ye.error,error:_n(405,{method:I.method,pathname:R.pathname,routeId:ee.route.id})};else if(re=await ta("action",I,ee,$,s,i,l,u.v7_relativeSplatPath),I.signal.aborted)return{shortCircuited:!0};if(Bi(re)){let X;return K&&K.replace!=null?X=K.replace:X=re.location===E.location.pathname+E.location.search,await qn(E,re,{submission:P,replace:X}),{shortCircuited:!0}}if(Gs(re)){let X=La($,ee.route.id);return(K&&K.replace)!==!0&&(C=tt.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:re.error}}}if(zi(re))throw _n(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:re.data}}}async function Re(I,R,P,$,K,pe,re,ee,X,_e,gt){let he=$||If(R,K),Oe=K||pe||Sw(he),At=a||o,[vn,yt]=mw(t.history,E,P,Oe,R,u.v7_partialHydration&&ee===!0,He,et,Xt,j,M,me,At,l,_e,gt);if(_h(Ne=>!(P&&P.some(ze=>ze.route.id===Ne))||vn&&vn.some(ze=>ze.route.id===Ne)),Q=++L,vn.length===0&&yt.length===0){let Ne=tv();return ne(R,Xe({matches:P,loaderData:{},errors:gt||null},_e?{actionData:_e}:{},Ne?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!Se&&(!u.v7_partialHydration||!ee)){yt.forEach(ze=>{let Kn=E.fetchers.get(ze.key),Yl=ra(void 0,Kn?Kn.data:void 0);E.fetchers.set(ze.key,Yl)});let Ne=_e||E.actionData;ae(Xe({navigation:he},Ne?Object.keys(Ne).length===0?{actionData:null}:{actionData:Ne}:{},yt.length>0?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X})}yt.forEach(Ne=>{ge.has(Ne.key)&&jr(Ne.key),Ne.controller&&ge.set(Ne.key,Ne.controller)});let Ss=()=>yt.forEach(Ne=>jr(Ne.key));F&&F.signal.addEventListener("abort",Ss);let{results:wh,loaderResults:As,fetcherResults:$r}=await Vr(E.matches,P,vn,yt,I);if(I.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",Ss),yt.forEach(Ne=>ge.delete(Ne.key));let xi=Tw(wh);if(xi){if(xi.idx>=vn.length){let Ne=yt[xi.idx-vn.length].key;me.add(Ne)}return await qn(E,xi.result,{replace:re}),{shortCircuited:!0}}let{loaderData:Eh,errors:Th}=_w(E,P,vn,As,gt,yt,$r,Y);Y.forEach((Ne,ze)=>{Ne.subscribe(Kn=>{(Kn||Ne.done)&&Y.delete(ze)})});let Ih=tv(),Rs=nv(Q),Ql=Ih||Rs||yt.length>0;return Xe({loaderData:Eh,errors:Th},Ql?{fetchers:new Map(E.fetchers)}:{})}function ct(I,R,P,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(I)&&jr(I);let K=($&&$.unstable_flushSync)===!0,pe=a||o,re=om(E.location,E.matches,l,u.v7_prependBasename,P,u.v7_relativeSplatPath,R,$==null?void 0:$.relative),ee=Ks(pe,re,l);if(!ee){be(I,R,_n(404,{pathname:re}),{flushSync:K});return}let{path:X,submission:_e,error:gt}=pw(u.v7_normalizeFormMethod,!0,re,$);if(gt){be(I,R,gt,{flushSync:K});return}let he=lm(ee,X);if(b=($&&$.preventScrollReset)===!0,_e&&Nn(_e.formMethod)){Pi(I,R,X,he,ee,K,_e);return}M.set(I,{routeId:R,path:X}),dt(I,R,X,he,ee,K,_e)}async function Pi(I,R,P,$,K,pe,re){if(qt(),M.delete(I),!$.route.action&&!$.route.lazy){let ze=_n(405,{method:re.formMethod,pathname:P,routeId:R});be(I,R,ze,{flushSync:pe});return}let ee=E.fetchers.get(I);J(I,gF(re,ee),{flushSync:pe});let X=new AbortController,_e=na(t.history,P,X.signal,re);ge.set(I,X);let gt=L,he=await ta("action",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(_e.signal.aborted){ge.get(I)===X&&ge.delete(I);return}if(u.v7_fetcherPersist&&j.has(I)){if(Bi(he)||Gs(he)){J(I,Br(void 0));return}}else{if(Bi(he))if(ge.delete(I),Q>gt){J(I,Br(void 0));return}else return me.add(I),J(I,ra(re)),qn(E,he,{fetcherSubmission:re});if(Gs(he)){be(I,R,he.error);return}}if(zi(he))throw _n(400,{type:"defer-action"});let Oe=E.navigation.location||E.location,At=na(t.history,Oe,X.signal),vn=a||o,yt=E.navigation.state!=="idle"?Ks(vn,E.navigation.location,l):E.matches;ue(yt,"Didn't find any matches after fetcher action");let Ss=++L;Z.set(I,Ss);let wh=ra(re,he.data);E.fetchers.set(I,wh);let[As,$r]=mw(t.history,E,yt,re,Oe,!1,He,et,Xt,j,M,me,vn,l,{[$.route.id]:he.data},void 0);$r.filter(ze=>ze.key!==I).forEach(ze=>{let Kn=ze.key,Yl=E.fetchers.get(Kn),bR=ra(void 0,Yl?Yl.data:void 0);E.fetchers.set(Kn,bR),ge.has(Kn)&&jr(Kn),ze.controller&&ge.set(Kn,ze.controller)}),ae({fetchers:new Map(E.fetchers)});let xi=()=>$r.forEach(ze=>jr(ze.key));X.signal.addEventListener("abort",xi);let{results:Eh,loaderResults:Th,fetcherResults:Ih}=await Vr(E.matches,yt,As,$r,At);if(X.signal.aborted)return;X.signal.removeEventListener("abort",xi),Z.delete(I),ge.delete(I),$r.forEach(ze=>ge.delete(ze.key));let Rs=Tw(Eh);if(Rs){if(Rs.idx>=As.length){let ze=$r[Rs.idx-As.length].key;me.add(ze)}return qn(E,Rs.result)}let{loaderData:Ql,errors:Ne}=_w(E,E.matches,As,Th,void 0,$r,Ih,Y);if(E.fetchers.has(I)){let ze=Br(he.data);E.fetchers.set(I,ze)}nv(Ss),E.navigation.state==="loading"&&Ss>Q?(ue(C,"Expected pending action"),F&&F.abort(),ne(E.navigation.location,{matches:yt,loaderData:Ql,errors:Ne,fetchers:new Map(E.fetchers)})):(ae({errors:Ne,loaderData:ww(E.loaderData,Ql,yt,Ne),fetchers:new Map(E.fetchers)}),He=!1)}async function dt(I,R,P,$,K,pe,re){let ee=E.fetchers.get(I);J(I,ra(re,ee?ee.data:void 0),{flushSync:pe});let X=new AbortController,_e=na(t.history,P,X.signal);ge.set(I,X);let gt=L,he=await ta("loader",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(zi(he)&&(he=await vR(he,_e.signal,!0)||he),ge.get(I)===X&&ge.delete(I),!_e.signal.aborted){if(j.has(I)){J(I,Br(void 0));return}if(Bi(he))if(Q>gt){J(I,Br(void 0));return}else{me.add(I),await qn(E,he);return}if(Gs(he)){be(I,R,he.error);return}ue(!zi(he),"Unhandled fetcher deferred data"),J(I,Br(he.data))}}async function qn(I,R,P){let{submission:$,fetcherSubmission:K,replace:pe}=P===void 0?{}:P;R.revalidate&&(He=!0);let re=ml(I.location,R.location,{_isRedirect:!0});if(ue(re,"Expected a location on the redirect navigation"),n){let Oe=!1;if(R.reloadDocument)Oe=!0;else if(pR.test(R.location)){const At=t.history.createURL(R.location);Oe=At.origin!==e.location.origin||Or(At.pathname,l)==null}if(Oe){pe?e.location.replace(R.location):e.location.assign(R.location);return}}F=null;let ee=pe===!0?tt.Replace:tt.Push,{formMethod:X,formAction:_e,formEncType:gt}=I.navigation;!$&&!K&&X&&_e&&gt&&($=Sw(I.navigation));let he=$||K;if(rF.has(R.status)&&he&&Nn(he.formMethod))await de(ee,re,{submission:Xe({},he,{formAction:R.location}),preventScrollReset:b});else{let Oe=If(re,$);await de(ee,re,{overrideNavigation:Oe,fetcherSubmission:K,preventScrollReset:b})}}async function Vr(I,R,P,$,K){let pe=await Promise.all([...P.map(X=>ta("loader",K,X,R,s,i,l,u.v7_relativeSplatPath)),...$.map(X=>X.matches&&X.match&&X.controller?ta("loader",na(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l,u.v7_relativeSplatPath):{type:Ye.error,error:_n(404,{pathname:X.path})})]),re=pe.slice(0,P.length),ee=pe.slice(P.length);return await Promise.all([Iw(I,P,re,re.map(()=>K.signal),!1,E.loaderData),Iw(I,$.map(X=>X.match),ee,$.map(X=>X.controller?X.controller.signal:null),!0)]),{results:pe,loaderResults:re,fetcherResults:ee}}function qt(){He=!0,et.push(..._h()),M.forEach((I,R)=>{ge.has(R)&&(Xt.push(R),jr(R))})}function J(I,R,P){P===void 0&&(P={}),E.fetchers.set(I,R),ae({fetchers:new Map(E.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function be(I,R,P,$){$===void 0&&($={});let K=La(E.matches,R);Fr(I),ae({errors:{[K.route.id]:P},fetchers:new Map(E.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Is(I){return u.v7_fetcherPersist&&(B.set(I,(B.get(I)||0)+1),j.has(I)&&j.delete(I)),E.fetchers.get(I)||iF}function Fr(I){let R=E.fetchers.get(I);ge.has(I)&&!(R&&R.state==="loading"&&Z.has(I))&&jr(I),M.delete(I),Z.delete(I),me.delete(I),j.delete(I),E.fetchers.delete(I)}function Wn(I){if(u.v7_fetcherPersist){let R=(B.get(I)||0)-1;R<=0?(B.delete(I),j.add(I)):B.set(I,R)}else Fr(I);ae({fetchers:new Map(E.fetchers)})}function jr(I){let R=ge.get(I);ue(R,"Expected fetch controller: "+I),R.abort(),ge.delete(I)}function ev(I){for(let R of I){let P=Is(R),$=Br(P.data);E.fetchers.set(R,$)}}function tv(){let I=[],R=!1;for(let P of me){let $=E.fetchers.get(P);ue($,"Expected fetcher: "+P),$.state==="loading"&&(me.delete(P),I.push(P),R=!0)}return ev(I),R}function nv(I){let R=[];for(let[P,$]of Z)if($<I){let K=E.fetchers.get(P);ue(K,"Expected fetcher: "+P),K.state==="loading"&&(jr(P),Z.delete(P),R.push(P))}return ev(R),R.length>0}function PR(I,R){let P=E.blockers.get(I)||ea;return A.get(I)!==R&&A.set(I,R),P}function rv(I){E.blockers.delete(I),A.delete(I)}function Gl(I,R){let P=E.blockers.get(I)||ea;ue(P.state==="unblocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="proceeding"||P.state==="blocked"&&R.state==="unblocked"||P.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+R.state);let $=new Map(E.blockers);$.set(I,R),ae({blockers:$})}function iv(I){let{currentLocation:R,nextLocation:P,historyAction:$}=I;if(A.size===0)return;A.size>1&&us(!1,"A router only supports one blocker at a time");let K=Array.from(A.entries()),[pe,re]=K[K.length-1],ee=E.blockers.get(pe);if(!(ee&&ee.state==="proceeding")&&re({currentLocation:R,nextLocation:P,historyAction:$}))return pe}function _h(I){let R=[];return Y.forEach((P,$)=>{(!I||I($))&&(P.cancel(),R.push($),Y.delete($))}),R}function xR(I,R,P){if(h=I,v=R,y=P||null,!w&&E.navigation===Tf){w=!0;let $=ov(E.location,E.matches);$!=null&&ae({restoreScrollPosition:$})}return()=>{h=null,v=null,y=null}}function sv(I,R){return y&&y(I,R.map($=>L4($,E.loaderData)))||I.key}function kR(I,R){if(h&&v){let P=sv(I,R);h[P]=v()}}function ov(I,R){if(h){let P=sv(I,R),$=h[P];if(typeof $=="number")return $}return null}function DR(I){s={},a=im(I,i,void 0,s)}return x={get basename(){return l},get future(){return u},get state(){return E},get routes(){return o},get window(){return e},initialize:V,subscribe:Ae,enableScrollRestoration:xR,navigate:rt,fetch:ct,revalidate:Ot,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:Is,deleteFetcher:Wn,dispose:Ue,getBlocker:PR,deleteBlocker:rv,_internalFetchControllers:ge,_internalActiveDeferreds:Y,_internalSetRoutes:DR},x}function aF(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function om(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=qy(i||".",Hy(l,s),Or(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Ky(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Rr([n,c.pathname])),cs(c)}function pw(t,e,n,r){if(!r||!aF(r))return{path:n};if(r.formMethod&&!pF(r.formMethod))return{path:n,error:_n(405,{method:r.formMethod})};let i=()=>({path:n,error:_n(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=yR(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Nn(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,v)=>{let[w,g]=v;return""+y+w+"="+g+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Nn(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=am(r.formData),u=r.formData;else if(r.body instanceof FormData)l=am(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=vw(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=vw(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Nn(c.formMethod))return{path:n,submission:c};let d=pr(n);return e&&d.search&&Ky(d.search)&&l.append("index",""),d.search="?"+l,{path:cs(d),submission:c}}function lF(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function mw(t,e,n,r,i,s,o,a,l,u,c,d,h,y,v,w){let g=w?Object.values(w)[0]:v?Object.values(v)[0]:void 0,p=t.createURL(e.location),f=t.createURL(i),_=w?Object.keys(w)[0]:void 0,x=lF(n,_).filter((C,b)=>{let{route:F}=C;if(F.lazy)return!0;if(F.loader==null)return!1;if(s)return F.loader.hydrate?!0:e.loaderData[F.id]===void 0&&(!e.errors||e.errors[F.id]===void 0);if(uF(e.loaderData,e.matches[b],C)||a.some(Te=>Te===C.route.id))return!0;let q=e.matches[b],ce=C;return gw(C,Xe({currentUrl:p,currentParams:q.params,nextUrl:f,nextParams:ce.params},r,{actionResult:g,defaultShouldRevalidate:o||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||gR(q,ce)}))}),E=[];return c.forEach((C,b)=>{if(s||!n.some(Se=>Se.route.id===C.routeId)||u.has(b))return;let F=Ks(h,C.path,y);if(!F){E.push({key:b,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let q=e.fetchers.get(b),ce=lm(F,C.path),Te=!1;d.has(b)?Te=!1:l.includes(b)?Te=!0:q&&q.state!=="idle"&&q.data===void 0?Te=o:Te=gw(ce,Xe({currentUrl:p,currentParams:e.matches[e.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:o})),Te&&E.push({key:b,routeId:C.routeId,path:C.path,matches:F,match:ce,controller:new AbortController})}),[x,E]}function uF(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function gR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function gw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function yw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";us(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!N4.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Xe({},e(i),{lazy:void 0}))}async function ta(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,h=w=>{let g,p=new Promise((f,_)=>g=_);return d=()=>g(),e.signal.addEventListener("abort",d),Promise.race([w({request:e,params:n.params,context:l.requestContext}),p])};try{let w=n.route[t];if(n.route.lazy)if(w){let g,p=await Promise.all([h(w).catch(f=>{g=f}),yw(n.route,s,i)]);if(g)throw g;c=p[0]}else if(await yw(n.route,s,i),w=n.route[t],w)c=await h(w);else if(t==="action"){let g=new URL(e.url),p=g.pathname+g.search;throw _n(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Ye.data,data:void 0};else if(w)c=await h(w);else{let g=new URL(e.url),p=g.pathname+g.search;throw _n(404,{pathname:p})}ue(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(w){u=Ye.error,c=w}finally{d&&e.signal.removeEventListener("abort",d)}if(fF(c)){let w=c.status;if(nF.has(w)){let p=c.headers.get("Location");if(ue(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!pR.test(p))p=om(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,p,a);else if(!l.isStaticRequest){let f=new URL(e.url),_=p.startsWith("//")?new URL(f.protocol+p):new URL(p),S=Or(_.pathname,o)!=null;_.origin===f.origin&&S&&(p=_.pathname+_.search+_.hash)}if(l.isStaticRequest)throw c.headers.set("Location",p),c;return{type:Ye.redirect,status:w,location:p,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Ye.error?Ye.error:Ye.data,response:c};let g;try{let p=c.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?c.body==null?g=null:g=await c.json():g=await c.text()}catch(p){return{type:Ye.error,error:p}}return u===Ye.error?{type:u,error:new Wy(w,c.statusText,g),headers:c.headers}:{type:Ye.data,data:g,statusCode:c.status,headers:c.headers}}if(u===Ye.error)return{type:u,error:c};if(hF(c)){var y,v;return{type:Ye.deferred,deferredData:c,statusCode:(y=c.init)==null?void 0:y.status,headers:((v=c.init)==null?void 0:v.headers)&&new Headers(c.init.headers)}}return{type:Ye.data,data:c}}function na(t,e,n,r){let i=t.createURL(yR(e)).toString(),s={signal:n};if(r&&Nn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=am(r.formData):s.body=r.formData}return new Request(i,s)}function am(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function vw(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function cF(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(ue(!Bi(c),"Cannot handle redirect results in processLoaderData"),Gs(c)){let y=La(t,h),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=v),s[h]=void 0,l||(l=!0,a=hR(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else zi(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function _w(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=cF(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:y}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(y&&y.signal.aborted))if(Gs(v)){let w=La(t.matches,h==null?void 0:h.route.id);u&&u[w.route.id]||(u=Xe({},u,{[w.route.id]:v.error})),t.fetchers.delete(d)}else if(Bi(v))ue(!1,"Unhandled fetcher revalidation redirect");else if(zi(v))ue(!1,"Unhandled fetcher deferred data");else{let w=Br(v.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function ww(t,e,n,r){let i=Xe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function La(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ew(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function _n(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Wy(t||500,o,new Error(a),!0)}function Tw(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Bi(n))return{result:n,idx:e}}}function yR(t){let e=typeof t=="string"?pr(t):t;return cs(Xe({},e,{hash:""}))}function dF(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function zi(t){return t.type===Ye.deferred}function Gs(t){return t.type===Ye.error}function Bi(t){return(t&&t.type)===Ye.redirect}function hF(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function fF(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function pF(t){return tF.has(t.toLowerCase())}function Nn(t){return Z4.has(t.toLowerCase())}async function Iw(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!gR(u,l)&&(s&&s[l.route.id])!==void 0;if(zi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await vR(a,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function vR(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ye.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ye.error,error:i}}return{type:Ye.data,data:t.deferredData.data}}}function Ky(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function lm(t,e){let n=typeof e=="string"?pr(e).search:e.search;if(t[t.length-1].route.index&&Ky(n||""))return t[t.length-1];let r=dR(t);return r[r.length-1]}function Sw(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function If(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function mF(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ra(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function gF(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Br(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function yF(t,e){try{let n=t.sessionStorage.getItem(mR);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function vF(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(mR,JSON.stringify(n))}catch(r){us(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gl(){return gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gl.apply(this,arguments)}const Wl=T.createContext(null),Gy=T.createContext(null),Ri=T.createContext(null),gh=T.createContext(null),Mr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),_R=T.createContext(null);function _F(t,e){let{relative:n}=e===void 0?{}:e;Kl()||ue(!1);let{basename:r,navigator:i}=T.useContext(Ri),{hash:s,pathname:o,search:a}=yh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Kl(){return T.useContext(gh)!=null}function $o(){return Kl()||ue(!1),T.useContext(gh).location}function wR(t){T.useContext(Ri).static||T.useLayoutEffect(t)}function Ci(){let{isDataRoute:t}=T.useContext(Mr);return t?NF():wF()}function wF(){Kl()||ue(!1);let t=T.useContext(Wl),{basename:e,future:n,navigator:r}=T.useContext(Ri),{matches:i}=T.useContext(Mr),{pathname:s}=$o(),o=JSON.stringify(Hy(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return wR(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=qy(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Rr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const EF=T.createContext(null);function TF(t){let e=T.useContext(Mr).outlet;return e&&T.createElement(EF.Provider,{value:t},e)}function Qy(){let{matches:t}=T.useContext(Mr),e=t[t.length-1];return e?e.params:{}}function yh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Ri),{matches:i}=T.useContext(Mr),{pathname:s}=$o(),o=JSON.stringify(Hy(i,r.v7_relativeSplatPath));return T.useMemo(()=>qy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IF(t,e,n,r){Kl()||ue(!1);let{navigator:i}=T.useContext(Ri),{matches:s}=T.useContext(Mr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=$o(),c;if(e){var d;let g=typeof e=="string"?pr(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||ue(!1),c=g}else c=u;let h=c.pathname||"/",y=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let v=Ks(t,{pathname:y}),w=PF(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:Rr([l,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Rr([l,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,r);return e&&w?T.createElement(gh.Provider,{value:{location:gl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:tt.Pop}},w):w}function SF(){let t=bF(),e=hR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const AF=T.createElement(SF,null);class RF extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Mr.Provider,{value:this.props.routeContext},T.createElement(_R.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CF(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Wl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Mr.Provider,{value:e},r)}function PF(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ue(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:y}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let y,v=!1,w=null,g=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||AF,l&&(u<0&&h===0?(OF("route-fallback",!1),v=!0,g=null):u===h&&(v=!0,g=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let _;return y?_=w:v?_=g:d.route.Component?_=T.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,T.createElement(CF,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(RF,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var ER=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ER||{}),Hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hc||{});function xF(t){let e=T.useContext(Wl);return e||ue(!1),e}function kF(t){let e=T.useContext(Gy);return e||ue(!1),e}function DF(t){let e=T.useContext(Mr);return e||ue(!1),e}function TR(t){let e=DF(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function bF(){var t;let e=T.useContext(_R),n=kF(Hc.UseRouteError),r=TR(Hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function NF(){let{router:t}=xF(ER.UseNavigateStable),e=TR(Hc.UseNavigateStable),n=T.useRef(!1);return wR(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,gl({fromRouteId:e},s)))},[t,e])}const Aw={};function OF(t,e,n){!e&&!Aw[t]&&(Aw[t]=!0)}function LF(t){return TF(t.context)}function mr(t){ue(!1)}function MF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:s,static:o=!1,future:a}=t;Kl()&&ue(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:gl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=pr(r));let{pathname:c="/",search:d="",hash:h="",state:y=null,key:v="default"}=r,w=T.useMemo(()=>{let g=Or(c,l);return g==null?null:{location:{pathname:g,search:d,hash:h,state:y,key:v},navigationType:i}},[l,c,d,h,y,v,i]);return w==null?null:T.createElement(Ri.Provider,{value:u},T.createElement(gh.Provider,{children:n,value:w}))}new Promise(()=>{});function um(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,um(r.props.children,s));return}r.type!==mr&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=um(r.props.children,s)),n.push(o)}),n}function VF(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:T.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:T.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:T.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}function IR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function FF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jF(t,e){return t.button===0&&(!e||e==="_self")&&!FF(t)}const $F=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],UF=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],zF="6";try{window.__reactRouterVersion=zF}catch{}function BF(t,e){return oF({basename:e==null?void 0:e.basename,future:Co({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:k4({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||HF(),routes:t,mapRouteProperties:VF,window:e==null?void 0:e.window}).initialize()}function HF(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Co({},e,{errors:qF(e.errors)})),e}function qF(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Wy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const SR=T.createContext({isTransitioning:!1}),WF=T.createContext(new Map),KF="startTransition",Rw=JR[KF],GF="flushSync",Cw=lx[GF];function QF(t){Rw?Rw(t):t()}function ia(t){Cw?Cw(t):t()}class YF{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function JF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=T.useState(n.state),[o,a]=T.useState(),[l,u]=T.useState({isTransitioning:!1}),[c,d]=T.useState(),[h,y]=T.useState(),[v,w]=T.useState(),g=T.useRef(new Map),{v7_startTransition:p}=r||{},f=T.useCallback(C=>{p?QF(C):C()},[p]),_=T.useCallback((C,b)=>{let{deletedFetchers:F,unstable_flushSync:q,unstable_viewTransitionOpts:ce}=b;F.forEach(Se=>g.current.delete(Se)),C.fetchers.forEach((Se,He)=>{Se.data!==void 0&&g.current.set(He,Se.data)});let Te=n.window==null||typeof n.window.document.startViewTransition!="function";if(!ce||Te){q?ia(()=>s(C)):f(()=>s(C));return}if(q){ia(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})});let Se=n.window.document.startViewTransition(()=>{ia(()=>s(C))});Se.finished.finally(()=>{ia(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),ia(()=>y(Se));return}h?(c&&c.resolve(),h.skipTransition(),w({state:C,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})):(a(C),u({isTransitioning:!0,flushSync:!1,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation}))},[n.window,h,c,g,f]);T.useLayoutEffect(()=>n.subscribe(_),[n,_]),T.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new YF)},[l]),T.useEffect(()=>{if(c&&o&&n.window){let C=o,b=c.promise,F=n.window.document.startViewTransition(async()=>{f(()=>s(C)),await b});F.finished.finally(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(F)}},[f,o,c,n.window]),T.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,h,i.location,o]),T.useEffect(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),w(void 0))},[l.isTransitioning,v]),T.useEffect(()=>{},[]);let S=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,b,F)=>n.navigate(C,{state:b,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(C,b,F)=>n.navigate(C,{replace:!0,state:b,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[n]),x=n.basename||"/",E=T.useMemo(()=>({router:n,navigator:S,static:!1,basename:x}),[n,S,x]);return T.createElement(T.Fragment,null,T.createElement(Wl.Provider,{value:E},T.createElement(Gy.Provider,{value:i},T.createElement(WF.Provider,{value:g.current},T.createElement(SR.Provider,{value:l},T.createElement(MF,{basename:x,location:i.location,navigationType:i.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?T.createElement(XF,{routes:n.routes,future:n.future,state:i}):e))))),null)}function XF(t){let{routes:e,future:n,state:r}=t;return IF(e,void 0,r,n)}const ZF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ej=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vh=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=IR(e,$F),{basename:y}=T.useContext(Ri),v,w=!1;if(typeof u=="string"&&ej.test(u)&&(v=u,ZF))try{let _=new URL(window.location.href),S=u.startsWith("//")?new URL(_.protocol+u):new URL(u),x=Or(S.pathname,y);S.origin===_.origin&&x!=null?u=x+S.search+S.hash:w=!0}catch{}let g=_F(u,{relative:i}),p=nj(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(_){r&&r(_),_.defaultPrevented||p(_)}return T.createElement("a",Co({},h,{href:v||g,onClick:w||s?r:f,ref:n,target:l}))}),Sf=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=IR(e,UF),h=yh(l,{relative:d.relative}),y=$o(),v=T.useContext(Gy),{navigator:w,basename:g}=T.useContext(Ri),p=v!=null&&rj(h)&&u===!0,f=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,_=y.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(_=_.toLowerCase(),S=S?S.toLowerCase():null,f=f.toLowerCase()),S&&g&&(S=Or(S,g)||S);const x=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let E=_===f||!o&&_.startsWith(f)&&_.charAt(x)==="/",C=S!=null&&(S===f||!o&&S.startsWith(f)&&S.charAt(f.length)==="/"),b={isActive:E,isPending:C,isTransitioning:p},F=E?r:void 0,q;typeof s=="function"?q=s(b):q=[s,E?"active":null,C?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ce=typeof a=="function"?a(b):a;return T.createElement(vh,Co({},d,{"aria-current":F,className:q,ref:n,style:ce,to:l,unstable_viewTransition:u}),typeof c=="function"?c(b):c)});var cm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cm||(cm={}));var Pw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pw||(Pw={}));function tj(t){let e=T.useContext(Wl);return e||ue(!1),e}function nj(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ci(),u=$o(),c=yh(t,{relative:o});return T.useCallback(d=>{if(jF(d,n)){d.preventDefault();let h=r!==void 0?r:cs(u)===cs(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function rj(t,e){e===void 0&&(e={});let n=T.useContext(SR);n==null&&ue(!1);let{basename:r}=tj(cm.useViewTransitionState),i=yh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Or(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Or(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sm(i.pathname,o)!=null||sm(i.pathname,s)!=null}const xw=O(({Icon:t,className:e,...n})=>m.jsxs("div",{className:e,children:[m.jsx("input",{...n}),m.jsx(t,{})]}))`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  height: min-content;

  &:focus-within {
    border-radius: 8px;
    outline: 1px solid blue;
  }

  & > input {
    background-color: transparent;
    border: 2px solid white;
    border-radius: 8px 0 0 8px;
    padding: 8px 16px 8px 16px;
    color: white;
    caret-color: white;
    font-size: 1em;

    &:focus {
      outline: none;
    }
  }

  & > svg {
    padding-left: 8px;
    padding-right: 8px;
    border: 2px solid white;
    border-radius: 0 8px 8px 0;
    height: 90%;
    border-left: none;
  }
`,ij=O(({className:t})=>{const e=Ci(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Cl();FD(s,i.get("email"),i.get("password")),e("/")};return m.jsx("div",{className:t,children:m.jsxs("form",{onSubmit:n,children:[m.jsx(xw,{Icon:pj,id:"email",type:"email",name:"email"}),m.jsx(xw,{Icon:mj,id:"password",type:"password",name:"password"}),m.jsx("button",{type:"submit",children:"Sign In"})]})})})`
  height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  display: grid;
  place-items: center;

  & > form {
    display: grid;
    justify-content: center;
    align-content: space-evenly;
    gap: 8px;
    border: 1px solid white;
    padding: 16px 32px;
    border-radius: 24px;
    aspect-ratio: 1;
    box-shadow: 0px 10px 15px var(--blue900);

    & > button {
      border-radius: 8px;
      background-color: transparent;
      border-color: var(--affirmative);
      color: var(--affirmative);
      cursor: pointer;
      padding: 8px 16px;
    }
  }
`,sj=O(({className:t})=>{const{addToast:e,removeToast:n}=T.useContext(zo),r=Ci(),i=Cl(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}VD(i,a.get("email"),a.get("password")).then(l=>{SV(cn(We,"users",l.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return m.jsx("div",{className:t,children:m.jsxs("form",{onSubmit:s,children:[m.jsxs("label",{htmlFor:"email",children:["Email:",m.jsx("input",{id:"email",type:"email",name:"email"})]}),m.jsxs("label",{htmlFor:"password",children:["Password:",m.jsx("input",{id:"password",type:"password",name:"password"})]}),m.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",m.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),m.jsx("button",{type:"submit",children:"Sign Up"})]})})})`
  height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  display: grid;
  place-items: center;
  color: white;

  & > form {
    display: grid;
    justify-content: center;
    gap: 8px;
    border: 1px solid white;
    padding: 64px;
    border-radius: 16px;
    box-shadow: 0px 10px 15px var(--blue900);
    aspect-ratio: 1;

    & > label {
      display: grid;
      gap: 4px;
      & > input {
        font-size: 1em;
      }
    }

    & > button {
      border-radius: 20em;
      background-color: transparent;
      border-color: var(--affirmative);
      color: var(--affirmative);
    }
  }
`,Uo=T.createContext(null),oj=({children:t})=>{const[e,n]=T.useState();return Cl().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),m.jsx(Uo.Provider,{value:e,children:t})},aj=O(lt)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,lj=O(({className:t})=>{const e=T.useContext(Uo);return m.jsxs(m.Fragment,{children:[m.jsx("nav",{className:t,children:m.jsx("ul",{children:e?m.jsxs(m.Fragment,{children:[m.jsx("li",{children:m.jsx(Sf,{to:"/teams",children:"Teams"})}),m.jsx("li",{children:e.email}),m.jsx("li",{children:m.jsx(aj,{text:"Sign out",onClick:()=>Cl().signOut()})})]}):m.jsxs(m.Fragment,{children:[m.jsx("li",{children:m.jsx(Sf,{to:"/sign_in",children:"Sign In"})}),m.jsx("li",{children:m.jsx(Sf,{to:"/sign_up",children:"Sign Up"})})]})})}),m.jsx(LF,{})]})})`
  border-bottom: 1px groove var(--blue100);
  background-color: var(--blue100);
  padding: 16px 8px;
  color: white;

  & a {
    color: currentcolor;
  }

  & > ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    & > li:not(:last-of-type) {
      padding-right: 16px;
      border-right: 1px groove rgba(255, 255, 255, 0.25);
    }

    & > li {
      padding-left: 16px;
      padding-right: 16px;
    }

    & > li:nth-of-type(2) {
      margin-left: auto;
    }
  }
`,dm=O(({className:t,children:e,title:n,...r})=>m.jsxs("details",{className:t,...r,children:[m.jsx("summary",{children:n}),e]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,uj=O(({className:t})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[m.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),m.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,cj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:m.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,dj=O(({className:t=""})=>m.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:m.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,hj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:m.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,fj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:m.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,pj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:m.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,mj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:m.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,AR=O(({className:t,children:e})=>m.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,gj=oR`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,RR=O(({className:t})=>m.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${gj} 500ms infinite;
`,yj=S4`
 :root {
    --blue100: #3F4366; 
    --primary: #353859;
    --secondary: #3B3B71;
    --tertiary: #373456;
    --blue900: #29284C;
    --highlight: #B842A8;

    --affirmative: #33C27D;
    --caution: #EA6F3E;

    --orange: #F86543;
    --yellow: #E39506;
  }

  html,body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  dialog:focus {
    outline: none;
  }

  * {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    padding:0;
    margin:0
  }

  input {
    font-size: 1em;
  }


`,vj=O(({className:t})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:m.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,_j=O.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,wj=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},Ej=(t,e)=>new Date(t,e,0).getDate(),Tj=(t,e)=>new Date(t,e,1),Ij=(t,e)=>{const r=((i,s)=>o=>{var a;(a=i.current)!=null&&a.contains(o.target)||typeof s=="function"&&s(o)})(t,e);T.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},Sj=["January","February","March","April","May","June","July","August","September","October","November","December"],Aj=["M","Tu","W","Th","F","Sa","Su"],Rj=O.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,Cj=O.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,Pj=O.div`
  text-align: center;
`,xj=O.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,kj=(t,e)=>{const[n,r]=T.useState([]),i=Ej(e,t+1);let s=Tj(e,t).getDay()-1;return s===-1&&(s=6),T.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,l)=>l+1)];r(o)},[t,e]),n},Dj=O(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,l]=T.useState(o),[u,c]=T.useState(s),d=kj(a,u),h=wj(new Date(i).getFullYear(),5),y=g=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(g).padStart(2,"0")}-${u}`)},v=()=>{l(g=>Number(g)===0?(c(p=>p-1),11):g-1)},w=()=>l(g=>Number(g)===11?(c(p=>p+1),11):g+1);return m.jsxs("div",{ref:e,className:t,popover:"true",children:[m.jsxs(Cj,{children:[m.jsx("select",{value:`${a}/${u}`,onChange:g=>{const[p,f]=g.target.value.split("/");l(Number(p)),c(Number(f))},children:h.map(g=>Sj.map((p,f)=>m.jsx("option",{value:`${f}/${g}`,children:`${p} , ${g}`},`${f}/${g}`)))}),m.jsx("button",{"aria-label":"left",onClick:v,children:"←"}),m.jsx("button",{"aria-label":"right",onClick:w,children:"→"})]}),m.jsxs(Rj,{children:[Aj.map(g=>m.jsx(Pj,{children:g},`${g}-header`)),d.map((g,p)=>typeof g=="number"?m.jsx(xj,{onClick:()=>y(g),$selected:new Date(i).getDate()===g&&a===o&&u===s,children:g},`${g}-${a}-${u}`):m.jsx("span",{},`blank-day-${p}`))]})]})})`
  position: fixed;
  inset: 0;
  width: 80%;
  height: fit-content;
  box-shadow: 2px 0px 4px rgba(31, 28, 28, 0.2);
  z-index: 1;

  @media screen and (width > 800px) {
    width: 300px;
    position: absolute;
    left: 0;
    top: 36.5px;
  }
  background-color: white;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;O(({className:t,value:e,setValue:n})=>{const r=T.useRef(null),i=T.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return Ij(i,o=>{var a,l;(a=r.current)!=null&&a.contains(o.target)||(l=i.current)==null||l.hidePopover()}),m.jsxs("div",{className:t,children:[m.jsx(_j,{value:e,readOnly:!0}),m.jsx("button",{onClick:s,ref:r,children:m.jsx(vj,{})}),m.jsx(Dj,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const bj=t=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",...t,children:m.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),Nj={success:bj},Oj={success:"var(--affirmative)"},kw=O(({className:t,variant:e,children:n,onClose:r})=>{const i=T.useRef(),s=Nj[e];return T.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[]),m.jsxs("div",{className:t,popover:"auto",children:[m.jsx(s,{style:{color:Oj[e]}}),m.jsx("div",{children:n}),m.jsx("button",{onClick:r,children:m.jsx(mh,{})})]})})`
  border-radius: 16px;
  box-shadow: 0px 2px 4px var(--primary);
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
  position: relative;
  overflow: visible;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    aspect-ratio: 1/1;
    transform: translate(50%, -50%);
  }
`,hm=O(({toasts:t,className:e})=>{const n=T.useId();return m.jsx("ul",{className:e,children:t.map(({variant:r,onClose:i,message:s})=>m.jsx("li",{children:m.jsx(kw,{variant:r,onClose:i,children:s})},n))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: start;

  & > li > ${kw} {
    background-color: var(--secondary);
    color: white;
  }
`,zo=T.createContext(null),Lj=({children:t})=>{const[e,n]=T.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return m.jsxs(zo.Provider,{value:{removeToast:i,addToast:r},children:[t,m.jsx(hm,{toasts:e})]})},ao=O(({passedRef:t,className:e,children:n,onClose:r})=>m.jsxs("dialog",{ref:t,className:e,children:[m.jsx("button",{onClick:r,formNoValidate:!0,children:m.jsx(mh,{})}),n]}))`
  border: none;
  border-radius: 16px;
  filter: drop-shadow(1px 2px 8px var(--blue900));
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transform: translate(50%, -50%);
    padding: 16px;
    border: none;
  }
`,Mj=T.createContext(null),Af={didCatch:!1,error:null};class Vj extends T.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Af}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(Af)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&Fj(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(Af)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const l={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(l);else if(r)a=T.createElement(r,l);else if(i===null||T.isValidElement(i))a=i;else throw o}return T.createElement(Mj.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function Fj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const jj=O.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,$j=O.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,Dw=O(({children:t,passedRef:e,className:n})=>m.jsx("dialog",{ref:e,className:n,children:m.jsx("div",{children:t})}))`
  @media screen and (width > 800px) {
    width: 50%;
    height: 30%;
  }

  width: 80%;
  height: 80%;
  padding: 16px;
  border-radius: 8px;

  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`,Uj=O(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=T.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return m.jsxs("li",{className:r,children:[m.jsx(vh,{to:`/practice_plans/${t}`,children:s(e)}),m.jsx($j,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),m.jsxs(Dw,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",m.jsx("br",{})," This action cannot be undone"," ",m.jsxs("div",{children:[m.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),m.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${Dw} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,zj=O(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=Ci(),i=s=>{s("/create")};return m.jsxs("main",{className:t,children:[m.jsxs(jj,{children:[m.jsx("h1",{children:"Practice plans"}),m.jsx(lt,{onClick:()=>i(r),text:"Add Practice Plan"})]}),m.jsx("ul",{children:e.map(s=>m.jsx(Uj,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  & > * {
    width: 70%;
  }

  & a {
    color: white;
  }

  & > ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: row;
    gap: 4px;
  }
`;O(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState(!1),{addToast:s,removeToast:o}=T.useContext(zo),a=async u=>{await UA(cn(We,"practice_plan",u)),n(c=>c.filter(d=>d.id!==u)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},l=()=>(i(!0),fr(Bn(We,"practice_plan")).then(u=>{const c=u.docs.map(d=>({...d.data(),id:d.id})).sort((d,h)=>Number(h.date.seconds)-Number(d.date.seconds));n(c)}).catch(u=>{throw new Error(u)}).finally(()=>{i(!1)}));return T.useEffect(()=>{l()},[]),m.jsx(Vj,{fallback:m.jsx("p",{children:"⚠️ Something went wrong"}),children:m.jsx("div",{className:t,children:r?m.jsx(AR,{children:m.jsx(RR,{})}):m.jsx(zj,{practicePlans:e,deletePracticePlan:a})})})})`
  background: linear-gradient(var(--blue100), var(--blue900));
  height: calc(100% - 51px);
`;const Bj=O(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>m.jsxs("g",{onClick:s,className:t,children:[m.jsx("circle",{r:i+5,cy:r,cx:n}),m.jsx("circle",{className:t,r:i,cy:r,cx:n}),m.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,bw=O.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,Hj=O(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(u=>{const c=i.find(d=>d.moves.includes(u));return c?new Date(Number(c.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),l=u=>u==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(u))/864e5);return m.jsxs(aR,{className:s,addToPracticePlan:()=>r(n.id),children:[m.jsx("span",{children:n.name}),m.jsxs("span",{children:["Last Review: ",a]}),m.jsx(bw,{$reviewUrgency:l(a),children:l(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${bw} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,qj=O(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=T.useContext(By),[l,u]=T.useState([]),{id:c=""}=Qy(),d=g=>fr(Es(Bn(We,"practice_plan"),Ts("teamId","==",g))).then(p=>{const f=p.docs.map(_=>({..._.data(),id:_.id})).sort((_,S)=>Number(S.date.seconds)-Number(_.date.seconds));u(f)}).catch(p=>{throw new Error(p)});T.useEffect(()=>{d(c)},[]);const h=50,y=70,v=g=>{const p="50%",f="25%",_="75%";return g%3===1||g===0?p:g%6===2||g%6===3?f:_},w=g=>{o(g),s()};return m.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((g,p)=>m.jsxs("g",{children:[m.jsx("line",{x1:v(p),y1:y+p*110,x2:v(p+1),y2:y+(p+1)*110}),m.jsx(Bj,{r:h,y:y+p*110,x:v(p),onClick:()=>{a(g),w(()=>m.jsx(m.Fragment,{children:i.filter(f=>f.area===r&&f.position===g).map(f=>m.jsx(Hj,{position:g,area:r,move:f,addToPracticePlan:n,practicePlans:l}))}))},text:g})]},g))})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));

  & > g > line {
    stroke: var(--orange);
  }

  ${aR} > span {
  }
`,CR=t=>!isNaN(t),Yy=(t,e)=>e.map(n=>t.find(r=>r.id===n)),Jy=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),Nw=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),Wj=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(Jy(Yy(t,e)))),Kj=async(t,e)=>{if(!CR(t.date)){alert("please submit a valid date");return}await xy(Bn(We,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},Gj=async(t,e,n)=>{const r=cn(We,"practice_plan",t);if(!CR(e.date)){alert("please submit a valid date");return}await Ki(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},Qj=O.div`
  height: 100%;
  overflow: scroll;
`,Yj=O.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,Jj=O.input``,Ow=O(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:l})=>{const u=Ci(),[c,d]=T.useState(window.innerWidth>850),{closePanel:h}=T.useContext(By);T.useEffect(()=>()=>h(),[]);const y=()=>{window.innerWidth>850&&d(!0)};T.useLayoutEffect(()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[]);const v=()=>{d(g=>!g)},w=g=>{const[p,f,_]=g.split("-");return new Date(`${f}/${_}/${p}`)};return m.jsxs("aside",{className:t,style:{"--transform":c?"translateX(0%)":"translateX(-100%)"},children:[m.jsx("button",{"aria-label":"show practice plan",onClick:v,children:m.jsx(fj,{})}),m.jsxs(Qj,{children:["Date:",m.jsx(Jj,{type:"date",value:r,onChange:g=>a(g.target.value)}),m.jsx("h1",{children:"Practice Plan"}),Object.entries(Jy(Yy(e,n))).map(([g,p])=>m.jsxs(T.Fragment,{children:[m.jsx("h2",{children:g}),p.map(f=>m.jsx(dm,{title:f.name,children:f.moves.map(({name:_,id:S})=>m.jsxs(Zj,{children:[_,m.jsx(e$,{onClick:()=>i(S),children:m.jsx(mh,{})})]},`${f.name}=${_}`))},f.name))]},g)),m.jsxs(Yj,{children:[!o&&m.jsx(lt,{onClick:s,text:"Clear Practice Plan",Icon:Xj,$level:"caution"}),m.jsx(lt,{onClick:()=>Wj(e,n),text:"Copy Practice Plan",Icon:uj}),m.jsx(lt,{onClick:()=>{o?Gj(o,{moves:n,date:w(r),teamId:l},u):Kj({moves:n,date:w(r),teamId:l},u)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:cj})]})]})]})})`
  background: linear-gradient(var(--blue100), var(--blue900));
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
`,Xj=O(dj)`
  stroke: white;
`,Zj=O.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,e$=O.button`
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
`,Lw=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},t$=t=>{const[e,n]=T.useState([]),[r,i]=T.useState(Lw(new Date));return T.useEffect(()=>{if(t){const s=Es(Bn(We,"practice_plan"),Ts(CA(),"==",t));fr(s).then(a=>{const l=a.docs.map(c=>({...c.data(),id:c.id})),[u]=l;i(Lw(new Date(Number(u.date.seconds)*1e3))),n(u.moves)})}},[t]),[e,n,r,i]},n$=t=>fr(Es(Bn(We,"moves"),Ts("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),Mw=O(({className:t})=>{const[e,n]=T.useState("neutral"),[r,i]=T.useState([]),{addToast:s,removeToast:o}=T.useContext(zo),{practice_plan_id:a,id:l=""}=Qy(),[u,c,d,h]=t$(a);T.useEffect(()=>{n$(l).then(p=>i(p))},[l]);const y=()=>{h(new Date),c([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},v=p=>{c(f=>f.includes(p)?(s({variant:"success",message:"move already exists",onClose:()=>o("move already exists")}),f):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...f,p]))},w=p=>{c(f=>[...f].filter(_=>_!==p)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},g=p=>{h(p),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return m.jsxs("main",{className:t,children:[m.jsx(cw,{tabs:Nw(r).map(p=>p.name),currentTab:e,setCurrentTab:n}),m.jsx(Ow,{moves:r,practicePlanMoves:u,practicePlanDate:d,clearPracticePlan:y,removeFromPracticePlan:w,currentPracticePlanId:a,updatePracticePlanDate:g,teamId:l}),m.jsx(qj,{addToPracticePlan:v,content:[...Nw(r).find(p=>p.name===e).positions],area:e,moves:r})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${Ow} {
    grid-area: plan;
    position: sticky;
    top: 0;
    height: 100svh;
    box-sizing: border-box;

    @media screen and (width <= 850px) {
      position: fixed;
      left: 0;
      width: 75vw;
    }
  }

  & > ${cw} {
    background-color: var(--blue100);
  }
`,r$=O.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,i$=O(({className:t})=>{const[e,n]=T.useState({date:new Date,moves:[],id:""}),[r,i]=T.useState([]),s=$o(),o=Ci(),a=s.pathname.split("/").at(-1)??"",l=Es(Bn(We,"practice_plan"),Ts(CA(),"==",a)),u=()=>fr(Bn(We,"moves")).then(h=>{const y=h.docs.map(v=>({...v.data(),id:v.id}));i(y)}),c=()=>fr(l).then(h=>{const y=h.docs.map(w=>({...w.data(),id:w.id})),[v]=y;n(v)});T.useEffect(()=>{u(),c()},[]);const d=h=>{o("edit")};return m.jsxs("main",{className:t,children:[Object.entries(Jy(Yy(r,e.moves))).map(([h,y])=>m.jsxs(r$,{children:[m.jsx("h2",{children:h}),y.map(v=>m.jsx("li",{children:m.jsx(dm,{title:v.name,open:!0,children:m.jsx("ul",{children:v==null?void 0:v.moves.map(w=>m.jsx("li",{children:w.name},`${v.name}-${w.name}`))})})},v.name))]},h)),m.jsx(lt,{onClick:()=>d(),text:"Edit Practice Plan",Icon:hj,$level:"caution"})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${lt} {
    align-self: start;
  }

  & ${dm} {
    background-color: var(--secondary);
  }
`,qc=O.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,s$=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],Xy=Bn(We,"teams"),o$=()=>fr(Xy).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),a$=t=>{const e=Es(Xy,Ts("userIds","array-contains",t));return fr(e).then(n=>n.docs.map(i=>({...i.data(),id:i.id})))},l$=O.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`,u$=O.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: white 1px solid;

  &:hover {
    background-color: var(--blue900);
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`,Vw=O.div`
  background-color: aliceblue;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  font-size: 8px;
  filter: drop-shadow(2px 4px 4px black);
`,Fw=O.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,c$=O.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,d$=O(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState([]),s=T.useContext(Uo),{addToast:o,removeToast:a}=T.useContext(zo),l=T.useRef(),u=T.useRef(),c=()=>{l.current&&l.current.showModal()},d=()=>{l.current&&l.current.close()},h=()=>{u.current&&u.current.showModal()},y=()=>{u.current&&u.current.close()},v=g=>{g.preventDefault();const p=new FormData(g.currentTarget),f={name:p.get("teamName"),state:p.get("stateLocation"),joinRequests:[],userIds:[s.uid],users:[{role:"admin",uid:s.uid}]};xy(Xy,f).then(_=>{i(S=>[...S,{...f,id:_.id}]),d()})},w=g=>{g.preventDefault();const p=new FormData(g.currentTarget),f=e.find(_=>_.id===p.get("teamToJoin"));if(f&&f.joinRequests.find(S=>S.uid===s.uid)){o({variant:"success",message:"You have an existing request to join this team",onClose:()=>a("You have an existing request to join this team")});return}Ki(cn(We,"teams",p.get("teamToJoin")),{joinRequests:$c({userEmail:s.email,uid:s.uid,role:p.get("requestedRole")})}).then(()=>{y(),o({variant:"success",message:"Request Successfully Submitted",onClose:()=>a("Request Successfully Submitted")})})};return T.useEffect(()=>{o$().then(g=>n(g)),s!=null&&s.uid&&a$(s.uid).then(g=>i(g))},[s]),m.jsxs("main",{className:t,children:[m.jsx("h1",{children:"My Teams"}),m.jsx(l$,{children:r.map(g=>m.jsx(vh,{to:`${g.id}`,children:m.jsxs(u$,{children:[m.jsxs("span",{children:[g.name," (",g.state,")"]}),m.jsxs(Fw,{children:["Users ",m.jsx(Vw,{children:g.users.length})]}),m.jsxs(Fw,{children:[m.jsx("span",{children:"Join Requests"})," ",m.jsx(Vw,{children:g.joinRequests.length})]}),g.users.find(p=>p.uid===s.uid&&p.role==="admin")?m.jsx(qc,{$color:"white",children:"Admin"}):m.jsx("span",{})]})},g.id))}),m.jsxs(c$,{children:[m.jsx(lt,{text:"Request to Join a Team",onClick:h}),m.jsx(lt,{text:"Create a Team",onClick:c})]}),m.jsx(ao,{passedRef:l,onClose:d,children:m.jsxs("form",{onSubmit:v,children:[m.jsxs("label",{htmlFor:"teamName",children:[m.jsx("span",{children:"Team Name:"}),m.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),m.jsxs("label",{htmlFor:"stateLocation",children:[m.jsx("span",{children:"State:"}),m.jsx("select",{name:"stateLocation",id:"stateLocation",children:s$.map(g=>m.jsx("option",{value:g,children:g},g))})]}),m.jsx(lt,{text:"Create",type:"submit"})]})}),m.jsx(ao,{passedRef:u,onClose:y,children:m.jsxs("form",{onSubmit:w,children:[m.jsxs("label",{htmlFor:"teamToJoin",children:[m.jsx("span",{children:"Team:"}),m.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(g=>!g.userIds.includes(s.uid)).map(g=>m.jsxs("option",{value:g.id,children:[g.name," (",g.state,")"]},g.id))})]}),m.jsxs("label",{htmlFor:"requestedRole",children:[m.jsx("span",{children:"Requested Role:"}),m.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(g=>m.jsx("option",{value:g,children:g},g))})]}),m.jsx(lt,{text:"Send Request to Join",type:"submit"})]})})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 16px;

  & a {
    color: currentColor;
  }

  & > h1 {
    margin: 0;
  }

  & > ${ao} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,Zy=({roles:t,team:e,children:n})=>{const r=T.useContext(Uo),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},h$=O(({uid:t,role:e,team:n,setTeam:r,className:i})=>{const[s,o]=T.useState(""),a=T.useContext(Uo),l=T.useRef(),u=async v=>await jA(cn(We,"users",v)).then(w=>({...w.data(),id:w.id}).email);T.useEffect(()=>{u(t).then(o)},[t]);const c=()=>{Ki(cn(We,"teams",n.id),{users:Na({uid:t,role:e}),userIds:Na(t)}),r(v=>({...v,users:v.users.filter(w=>w.uid!==t),userIds:v.userIds.filter(w=>w!==t)}))},d=()=>{l.current&&l.current.showModal()},h=()=>{l.current&&l.current.close()},y=v=>{v.preventDefault();const w=new FormData(v.currentTarget);Ki(cn(We,"teams",n.id),{users:Na({uid:t,role:e})}),Ki(cn(We,"teams",n.id),{users:$c({uid:t,role:w.get("newRole")})}),r(g=>{const p=g.users.find(f=>f.uid===t);return p&&(p.role=w.get("newRole")),{...g,users:[...g.users.filter(f=>f.uid!==t),p]}}),l.current&&h()};return m.jsxs("li",{className:i,children:[m.jsx("span",{children:s}),m.jsx(qc,{children:e}),m.jsxs(Zy,{roles:["admin"],team:n,children:[m.jsx(lt,{onClick:d,text:"Update Role"}),t!==a.uid&&m.jsx(lt,{$level:"caution",onClick:c,text:"Remove User"}),m.jsx(ao,{passedRef:l,onClose:h,children:m.jsxs("form",{onSubmit:y,children:[m.jsxs("label",{htmlFor:"newRole",children:[m.jsx("span",{children:"New Role:"}),m.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(v=>m.jsx("option",{value:v,children:v},v))})]}),m.jsx(lt,{text:"Update Role",type:"submit"})]})})]})]})})`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid white;

  @media screen and (width < 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, max-content);
    border: 1px solid white;
    border-radius: 8px;

    ${qc} {
      justify-self: center;
    }
  }
`,f$=t=>jA(cn(We,"teams",t)).then(e=>({...e.data(),id:e.id})),p$=t=>fr(Es(Bn(We,"moves"),Ts("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),m$=t=>fr(Es(Bn(We,"practice_plan"),Ts("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),g$=O.section`
  display: grid;
  gap: 16px;
`,y$=O.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,v$=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",_$=O(({className:t,move:e})=>m.jsx("li",{className:t,children:m.jsxs("div",{children:[m.jsx("h3",{children:e.name}),m.jsxs("span",{children:[e.area," - ",e.position]}),m.jsx(qc,{$color:v$(e.level),children:e.level})]})}))`
  & > div {
    display: grid;
    gap: 4px;
    border: 1px solid white;
    border-radius: 8px;
    padding: 8px;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`,w$=O.span`
  font-size: 1.5em;
`,E$=O.span`
  font-size: 2em;
`,Wu=O(({className:t,title:e,subtext:n,value:r})=>m.jsxs("output",{className:t,children:[m.jsx(w$,{children:e}),m.jsx("p",{children:n}),m.jsx(E$,{children:r})]}))`
  background-color: var(--blue900);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
`,T$=O.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media screen and (width >= 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
  }

  & > ${Wu} {
    width: auto;
  }
`,I$=O.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,S$=O.div`
  display: grid;
  grid-auto-flow: row;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 850px) {
    grid-auto-flow: column;
  }
`,jw=O.section`
  display: grid;
  gap: 8px;
`,A$=O.ul`
  list-style: none;
`,R$=O.li`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`,C$=O(({className:t,team:e,setTeam:n,teamId:r})=>{const i=o=>{Ki(cn(We,"teams",r),{joinRequests:Na(o),users:$c({uid:o.uid,role:o.role}),userIds:$c(o.uid)}),n(a=>({...a,joinRequests:a.joinRequests.filter(l=>l.uid!==o.uid),users:[...a.users,{uid:o.uid,role:o.role}],userIds:[...a.userIds,o.uid]}))},s=o=>{Ki(cn(We,"teams",r),{joinRequests:Na(o)}),n(a=>({...a,joinRequests:a.joinRequests.filter(l=>l.uid!==o.uid)}))};return e?m.jsxs("div",{className:t,children:[m.jsx("h2",{children:"Admin"}),m.jsx(S$,{children:m.jsxs(Zy,{roles:["admin","base+"],team:e,children:[m.jsxs(jw,{children:[m.jsx("h3",{children:"Team Users"}),m.jsx(I$,{children:e.users.map(o=>m.jsx(h$,{team:e,setTeam:n,uid:o.uid,role:o.role}))})]}),m.jsxs(jw,{children:[m.jsx("h3",{children:"Open Join Requests:"}),m.jsx(A$,{children:e.joinRequests.map(o=>m.jsxs(R$,{children:[m.jsxs("span",{children:[o.userEmail," ",o.role]}),m.jsx(lt,{onClick:()=>i(o),text:"Accept"}),m.jsx(lt,{$level:"caution",onClick:()=>s(o),text:"Decline"})]}))})]})]})})]}):null})`
  display: grid;
  gap: 16px;
`,P$=O.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`,x$=O.div`
  &:not(:last-of-type) {
    border-bottom: 2px solid var(--blue900);
  }
  position: relative;
`,k$=O.li`
  padding: 8px 16px;
  display: grid;
  align-items: center;
  gap: 16px;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;

  @media screen and (width >= 650px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`,D$=O(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],{addToast:i,removeToast:s}=T.useContext(zo),o=u=>new Date(Number(u)*1e3).toLocaleDateString(),a=u=>u.map(c=>({time:o(c.date.seconds),id:c.id})).reduce((c,d)=>{const[h,y,v]=d.time.split("/"),w=`${r[Number(h)-1]}, ${v}`;return{...c,[w]:[...String(w)in c?c[String(w)]:[],d]}},{}),l=async u=>{await UA(cn(We,"practice_plan",u)),n(c=>c.filter(d=>d.id!==u)),i({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>s("Practice Plan Successfully Deleted")})};return m.jsx("ul",{className:t,children:Object.entries(a(e)).map(([u,c])=>m.jsxs(x$,{children:[m.jsx(P$,{children:u}),c.map(d=>m.jsxs(k$,{children:[m.jsx(vh,{to:`practice_plans/${d.id}`,children:d.time},d.id),m.jsx(lt,{text:"Delete Practice Plan",$level:"caution",onClick:()=>l(d.id)})]}))]},u))})})`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid var(--blue900);
`,b$=O(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=Ci();return m.jsxs("section",{className:t,children:[m.jsx("h2",{children:"Practice Plans"}),m.jsx(D$,{practicePlans:e,setPracticePlans:n}),m.jsx(lt,{text:"Add Practice Plan",onClick:()=>r("practice_plans/create")})]})})`
  display: grid;
  gap: 16px;
`,N$=O.main`
  display: grid;
  gap: 32px;
`,O$=O.div`
  display: grid;
  gap: 16px;
`,L$=O(({className:t})=>{const[e,n]=T.useState(),[r,i]=T.useState([]),[s,o]=T.useState([]),a=T.useRef(),l=T.useContext(Uo),{id:u=""}=Qy(),c=Ci();T.useEffect(()=>{u&&(f$(u).then(n),p$(u).then(i),m$(u).then(o))},[u]),T.useEffect(()=>{l&&e&&!e.userIds.includes(l.uid)&&c("/")},[c,e,l]);const d=()=>{a.current&&a.current.showModal()},h=()=>{a.current&&a.current.close()},y=v=>{v.preventDefault();const w=new FormData(v.currentTarget),g={area:w.get("area"),level:w.get("level"),name:w.get("name"),position:w.get("position"),teamId:u};xy(Bn(We,"moves"),g),i(p=>[...p,g]),h()};return m.jsx("div",{className:t,children:e?m.jsxs(N$,{children:[m.jsxs(O$,{children:[m.jsxs("h1",{children:[e.name," (",e.state,")"]}),m.jsxs(T$,{children:[m.jsx(Wu,{title:"Season",value:"Nov 2024 - Feb 2025"}),m.jsx(Wu,{title:"Practice Plans",subtext:"Number of practice plans team leaders have created",value:s.length}),m.jsx(Wu,{title:"Moves",value:r.length})]})]}),m.jsx(b$,{practicePlans:s,setPracticePlans:o}),m.jsxs(g$,{children:[m.jsx("h2",{children:"Moves"}),m.jsx(y$,{children:r.map(v=>m.jsx(_$,{move:v}))}),m.jsxs(Zy,{roles:["admin","base+"],team:e,children:[m.jsx(lt,{onClick:d,text:"Add Move"}),m.jsx(ao,{passedRef:a,onClose:h,children:m.jsxs("form",{onSubmit:y,children:[m.jsxs("label",{htmlFor:"name",children:[m.jsx("span",{children:"Move name:"}),m.jsx("input",{type:"text",name:"name",id:"name"})]}),m.jsxs("label",{htmlFor:"area",children:[m.jsx("span",{children:"Move Area:"}),m.jsx("select",{name:"area",id:"area",children:["neutral","top","bottom"].map(v=>m.jsx("option",{value:v,children:v},v))})]}),m.jsxs("label",{htmlFor:"level",children:[m.jsx("span",{children:"Move Level:"}),m.jsx("select",{name:"level",id:"level",children:["jv","varsity","state qualifier","state placer"].map(v=>m.jsx("option",{value:v,children:v},v))})]}),m.jsxs("label",{htmlFor:"position",children:[m.jsx("span",{children:"Move Position:"}),m.jsx("input",{type:"text",name:"position",id:"position"})]}),m.jsx(lt,{text:"Add Move",type:"submit"})]})})]})]}),m.jsx(C$,{setTeam:n,team:e,teamId:u})]}):m.jsx(AR,{children:m.jsx(RR,{})})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 8px;

  & > h1 {
    margin: 0;
  }

  & a {
    color: white;
  }

  & ${ao} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,M$=BF(um(m.jsxs(mr,{path:"/",element:m.jsx(lj,{}),children:[m.jsx(mr,{path:"teams/:id/practice_plans/create",element:m.jsx(Mw,{})}),m.jsx(mr,{path:"teams/:id/practice_plans/:practice_plan_id",element:m.jsx(i$,{})}),m.jsx(mr,{path:"/teams",element:m.jsx(d$,{})}),m.jsx(mr,{path:"/teams/:id",element:m.jsx(L$,{})}),m.jsx(mr,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:m.jsx(Mw,{})}),m.jsx(mr,{path:"/sign_in",element:m.jsx(ij,{})}),m.jsx(mr,{path:"/sign_up",element:m.jsx(sj,{})})]}))),V$=O(({className:t})=>m.jsx("div",{className:t,children:m.jsx(oj,{children:m.jsx(Lj,{children:m.jsxs(x4,{children:[m.jsx(JF,{router:M$}),m.jsx(yj,{})]})})})}))`
  height: 100%;

  & > ${hm} {
    position: fixed;
    bottom: 16px;
    right: 50%;
    transform: translateX(50%);
  }

  & > ${lR} {
    background: linear-gradient(var(--blue100), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${hm} {
      right: 32px;
      transform: translateX(0%);
    }
  }
`,F$=eT(document.getElementById("root"));async function j$(){if(!["development","test"].includes("production"))return;const{worker:t}=await LR(()=>import("./browser-UkVwgeuH.js"),__vite__mapDeps([]));return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}j$().then(()=>{F$.render(m.jsx(T.StrictMode,{children:m.jsx(V$,{})}))});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
