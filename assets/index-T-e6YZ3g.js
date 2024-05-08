function Vw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const kR="modulepreload",DR=function(t){return"/technique-map/"+t},sv={},bR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=DR(o),o in sv)return;sv[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":kR,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fw={exports:{}},qc={},$w={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),NR=Symbol.for("react.portal"),OR=Symbol.for("react.fragment"),LR=Symbol.for("react.strict_mode"),MR=Symbol.for("react.profiler"),VR=Symbol.for("react.provider"),FR=Symbol.for("react.context"),$R=Symbol.for("react.forward_ref"),jR=Symbol.for("react.suspense"),UR=Symbol.for("react.memo"),zR=Symbol.for("react.lazy"),ov=Symbol.iterator;function BR(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uw=Object.assign,zw={};function Po(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||jw}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bw(){}Bw.prototype=Po.prototype;function fm(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||jw}var pm=fm.prototype=new Bw;pm.constructor=fm;Uw(pm,Po.prototype);pm.isPureReactComponent=!0;var av=Array.isArray,Hw=Object.prototype.hasOwnProperty,mm={current:null},qw={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hw.call(e,r)&&!qw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gl,type:t,key:s,ref:o,props:i,_owner:mm.current}}function HR(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gm(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function qR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function Ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qR(""+t.key):e.toString(36)}function Au(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case NR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ih(o,0):r,av(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),Au(i,e,n,"",function(u){return u})):i!=null&&(gm(i)&&(i=HR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ih(s,a);o+=Au(s,e,n,l,i)}else if(l=BR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ih(s,a++),o+=Au(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var r=[],i=0;return Au(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ru={transition:null},KR={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ru,ReactCurrentOwner:mm};ve.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!gm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Po;ve.Fragment=OR;ve.Profiler=MR;ve.PureComponent=fm;ve.StrictMode=LR;ve.Suspense=jR;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KR;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hw.call(e,l)&&!qw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:gl,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:FR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VR,_context:t},t.Consumer=t};ve.createElement=Ww;ve.createFactory=function(t){var e=Ww.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:$R,render:t}};ve.isValidElement=gm;ve.lazy=function(t){return{$$typeof:zR,_payload:{_status:-1,_result:t},_init:WR}};ve.memo=function(t,e){return{$$typeof:UR,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=Ru.transition;Ru.transition={};try{t()}finally{Ru.transition=e}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(t,e){return Qt.current.useCallback(t,e)};ve.useContext=function(t){return Qt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Qt.current.useEffect(t,e)};ve.useId=function(){return Qt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Qt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};ve.useRef=function(t){return Qt.current.useRef(t)};ve.useState=function(t){return Qt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Qt.current.useTransition()};ve.version="18.2.0";$w.exports=ve;var T=$w.exports;const xo=hm(T),GR=Vw({__proto__:null,default:xo},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QR=T,YR=Symbol.for("react.element"),JR=Symbol.for("react.fragment"),XR=Object.prototype.hasOwnProperty,ZR=QR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eC={key:!0,ref:!0,__self:!0,__source:!0};function Kw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XR.call(e,r)&&!eC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YR,type:t,key:s,ref:o,props:i,_owner:ZR.current}}qc.Fragment=JR;qc.jsx=Kw;qc.jsxs=Kw;Fw.exports=qc;var g=Fw.exports,Gw={exports:{}},fn={},Qw={exports:{}},Yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Q){var Z=O.length;O.push(Q);e:for(;0<Z;){var me=Z-1>>>1,L=O[me];if(0<i(L,Q))O[me]=Q,O[Z]=L,Z=me;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Q=O[0],Z=O.pop();if(Z!==Q){O[0]=Z;e:for(var me=0,L=O.length,z=L>>>1;me<z;){var F=2*(me+1)-1,Y=O[F],A=F+1,fe=O[A];if(0>i(Y,Z))A<L&&0>i(fe,Y)?(O[me]=fe,O[A]=Z,me=A):(O[me]=Y,O[F]=Z,me=F);else if(A<L&&0>i(fe,Z))O[me]=fe,O[A]=Z,me=A;else break e}}return Q}function i(O,Q){var Z=O.sortIndex-Q.sortIndex;return Z!==0?Z:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,y=!1,_=!1,w=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=O)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function I(O){if(w=!1,v(O),!_)if(n(l)!==null)_=!0,Jt(x);else{var Q=n(u);Q!==null&&ge(I,Q.startTime-O)}}function x(O,Q){_=!1,w&&(w=!1,f(b),b=-1),y=!0;var Z=h;try{for(v(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||O&&!ce());){var me=d.callback;if(typeof me=="function"){d.callback=null,h=d.priorityLevel;var L=me(d.expirationTime<=Q);Q=t.unstable_now(),typeof L=="function"?d.callback=L:d===n(l)&&r(l),v(Q)}else r(l);d=n(l)}if(d!==null)var z=!0;else{var F=n(u);F!==null&&ge(I,F.startTime-Q),z=!1}return z}finally{d=null,h=Z,y=!1}}var E=!1,C=null,b=-1,V=5,H=-1;function ce(){return!(t.unstable_now()-H<V)}function Te(){if(C!==null){var O=t.unstable_now();H=O;var Q=!0;try{Q=C(!0,O)}finally{Q?Se():(E=!1,C=null)}}else E=!1}var Se;if(typeof p=="function")Se=function(){p(Te)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,et=He.port2;He.port1.onmessage=Te,Se=function(){et.postMessage(null)}}else Se=function(){m(Te,0)};function Jt(O){C=O,E||(E=!0,Se())}function ge(O,Q){b=m(function(){O(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,Jt(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var Z=h;h=Q;try{return O()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=h;h=O;try{return Q()}finally{h=Z}},t.unstable_scheduleCallback=function(O,Q,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,O={id:c++,callback:Q,priorityLevel:O,startTime:Z,expirationTime:L,sortIndex:-1},Z>me?(O.sortIndex=Z,e(u,O),n(l)===null&&O===n(u)&&(w?(f(b),b=-1):w=!0,ge(I,Z-me))):(O.sortIndex=L,e(l,O),_||y||(_=!0,Jt(x))),O},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(O){var Q=h;return function(){var Z=h;h=Q;try{return O.apply(this,arguments)}finally{h=Z}}}})(Yw);Qw.exports=Yw;var tC=Qw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jw=T,dn=tC;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xw=new Set,La={};function cs(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(La[t]=e,t=0;t<e.length;t++)Xw.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,nC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uv={},cv={};function rC(t){return Af.call(cv,t)?!0:Af.call(uv,t)?!1:nC.test(t)?cv[t]=!0:(uv[t]=!0,!1)}function iC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sC(t,e,n,r){if(e===null||typeof e>"u"||iC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ym=/[\-:]([a-z])/g;function vm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ym,vm);bt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ym,vm);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ym,vm);bt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _m(t,e,n,r){var i=bt.hasOwnProperty(e)?bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sC(e,n,i,r)&&(n=null),r||i===null?rC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Zw=Symbol.for("react.provider"),e1=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),t1=Symbol.for("react.offscreen"),dv=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var Ke=Object.assign,Sh;function ia(t){if(Sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sh=e&&e[1]||""}return`
`+Sh+t}var Ah=!1;function Rh(t,e){if(!t||Ah)return"";Ah=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ah=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function oC(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=Rh(t.type,!1),t;case 11:return t=Rh(t.type.render,!1),t;case 1:return t=Rh(t.type,!0),t;default:return""}}function xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case bs:return"Portal";case Rf:return"Profiler";case wm:return"StrictMode";case Cf:return"Suspense";case Pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e1:return(t.displayName||"Context")+".Consumer";case Zw:return(t._context.displayName||"Context")+".Provider";case Em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tm:return e=t.displayName||null,e!==null?e:xf(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return xf(t(e))}catch{}}return null}function aC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xf(e);case 8:return e===wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lC(t){var e=n1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zl(t){t._valueTracker||(t._valueTracker=lC(t))}function r1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=n1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kf(t,e){var n=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i1(t,e){e=e.checked,e!=null&&_m(t,"checked",e,!1)}function Df(t,e){i1(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bf(t,e.type,n):e.hasOwnProperty("defaultValue")&&bf(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bf(t,e,n){(e!=="number"||Ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sa=Array.isArray;function Qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(sa(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function s1(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eu,a1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eu=eu||document.createElement("div"),eu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uC=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){uC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function l1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function u1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=l1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cC=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(cC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Im(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,Ys=null,Js=null;function gv(t){if(t=_l(t)){if(typeof Ff!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Yc(e),Ff(t.stateNode,t.type,e))}}function c1(t){Ys?Js?Js.push(t):Js=[t]:Ys=t}function d1(){if(Ys){var t=Ys,e=Js;if(Js=Ys=null,gv(t),e)for(t=0;t<e.length;t++)gv(e[t])}}function h1(t,e){return t(e)}function f1(){}var Ch=!1;function p1(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return h1(t,e,n)}finally{Ch=!1,(Ys!==null||Js!==null)&&(f1(),d1())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var r=Yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var $f=!1;if(Rr)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){$f=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{$f=!1}function dC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ga=!1,Gu=null,Qu=!1,jf=null,hC={onError:function(t){ga=!0,Gu=t}};function fC(t,e,n,r,i,s,o,a,l){ga=!1,Gu=null,dC.apply(hC,arguments)}function pC(t,e,n,r,i,s,o,a,l){if(fC.apply(this,arguments),ga){if(ga){var u=Gu;ga=!1,Gu=null}else throw Error(N(198));Qu||(Qu=!0,jf=u)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yv(t){if(ds(t)!==t)throw Error(N(188))}function mC(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yv(i),t;if(s===r)return yv(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function g1(t){return t=mC(t),t!==null?y1(t):null}function y1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y1(t);if(e!==null)return e;t=t.sibling}return null}var v1=dn.unstable_scheduleCallback,vv=dn.unstable_cancelCallback,gC=dn.unstable_shouldYield,yC=dn.unstable_requestPaint,nt=dn.unstable_now,vC=dn.unstable_getCurrentPriorityLevel,Sm=dn.unstable_ImmediatePriority,_1=dn.unstable_UserBlockingPriority,Yu=dn.unstable_NormalPriority,_C=dn.unstable_LowPriority,w1=dn.unstable_IdlePriority,Wc=null,nr=null;function wC(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:IC,EC=Math.log,TC=Math.LN2;function IC(t){return t>>>=0,t===0?32:31-(EC(t)/TC|0)|0}var tu=64,nu=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oa(a):(s&=o,s!==0&&(r=oa(s)))}else o=n&~i,o!==0?r=oa(o):s!==0&&(r=oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function SC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E1(){var t=tu;return tu<<=1,!(tu&4194240)&&(tu=64),t}function Ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function RC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function T1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I1,Rm,S1,A1,R1,zf=!1,ru=[],ei=null,ti=null,ni=null,Fa=new Map,$a=new Map,qr=[],CC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _v(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_l(e),e!==null&&Rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PC(t,e,n,r,i){switch(e){case"focusin":return ei=Ho(ei,t,e,n,r,i),!0;case"dragenter":return ti=Ho(ti,t,e,n,r,i),!0;case"mouseover":return ni=Ho(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Ho(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,Ho($a.get(s)||null,t,e,n,r,i)),!0}return!1}function C1(t){var e=Ni(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=m1(n),e!==null){t.blockedOn=e,R1(t.priority,function(){S1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vf=r,n.target.dispatchEvent(r),Vf=null}else return e=_l(n),e!==null&&Rm(e),t.blockedOn=n,!1;e.shift()}return!0}function wv(t,e,n){Cu(t)&&n.delete(e)}function xC(){zf=!1,ei!==null&&Cu(ei)&&(ei=null),ti!==null&&Cu(ti)&&(ti=null),ni!==null&&Cu(ni)&&(ni=null),Fa.forEach(wv),$a.forEach(wv)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,xC)))}function ja(t){function e(i){return qo(i,t)}if(0<ru.length){qo(ru[0],t);for(var n=1;n<ru.length;n++){var r=ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&qo(ei,t),ti!==null&&qo(ti,t),ni!==null&&qo(ni,t),Fa.forEach(e),$a.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)C1(n),n.blockedOn===null&&qr.shift()}var Xs=Or.ReactCurrentBatchConfig,Xu=!0;function kC(t,e,n,r){var i=Pe,s=Xs.transition;Xs.transition=null;try{Pe=1,Cm(t,e,n,r)}finally{Pe=i,Xs.transition=s}}function DC(t,e,n,r){var i=Pe,s=Xs.transition;Xs.transition=null;try{Pe=4,Cm(t,e,n,r)}finally{Pe=i,Xs.transition=s}}function Cm(t,e,n,r){if(Xu){var i=Bf(t,e,n,r);if(i===null)Fh(t,e,r,Zu,n),_v(t,r);else if(PC(i,t,e,n,r))r.stopPropagation();else if(_v(t,r),e&4&&-1<CC.indexOf(t)){for(;i!==null;){var s=_l(i);if(s!==null&&I1(s),s=Bf(t,e,n,r),s===null&&Fh(t,e,r,Zu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fh(t,e,r,null,n)}}var Zu=null;function Bf(t,e,n,r){if(Zu=null,t=Im(r),t=Ni(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zu=t,null}function P1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vC()){case Sm:return 1;case _1:return 4;case Yu:case _C:return 16;case w1:return 536870912;default:return 16}default:return 16}}var Jr=null,Pm=null,Pu=null;function x1(){if(Pu)return Pu;var t,e=Pm,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pu=i.slice(t,1<r?1-r:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function iu(){return!0}function Ev(){return!1}function pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?iu:Ev,this.isPropagationStopped=Ev,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xm=pn(ko),vl=Ke({},ko,{view:0,detail:0}),bC=pn(vl),xh,kh,Wo,Kc=Ke({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:km,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(xh=t.screenX-Wo.screenX,kh=t.screenY-Wo.screenY):kh=xh=0,Wo=t),xh)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),Tv=pn(Kc),NC=Ke({},Kc,{dataTransfer:0}),OC=pn(NC),LC=Ke({},vl,{relatedTarget:0}),Dh=pn(LC),MC=Ke({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),VC=pn(MC),FC=Ke({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$C=pn(FC),jC=Ke({},ko,{data:0}),Iv=pn(jC),UC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BC[t])?!!e[t]:!1}function km(){return HC}var qC=Ke({},vl,{key:function(t){if(t.key){var e=UC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:km,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WC=pn(qC),KC=Ke({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=pn(KC),GC=Ke({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:km}),QC=pn(GC),YC=Ke({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),JC=pn(YC),XC=Ke({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZC=pn(XC),eP=[9,13,27,32],Dm=Rr&&"CompositionEvent"in window,ya=null;Rr&&"documentMode"in document&&(ya=document.documentMode);var tP=Rr&&"TextEvent"in window&&!ya,k1=Rr&&(!Dm||ya&&8<ya&&11>=ya),Av=" ",Rv=!1;function D1(t,e){switch(t){case"keyup":return eP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function nP(t,e){switch(t){case"compositionend":return b1(e);case"keypress":return e.which!==32?null:(Rv=!0,Av);case"textInput":return t=e.data,t===Av&&Rv?null:t;default:return null}}function rP(t,e){if(Os)return t==="compositionend"||!Dm&&D1(t,e)?(t=x1(),Pu=Pm=Jr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k1&&e.locale!=="ko"?null:e.data;default:return null}}var iP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iP[t.type]:e==="textarea"}function N1(t,e,n,r){c1(r),e=ec(e,"onChange"),0<e.length&&(n=new xm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var va=null,Ua=null;function sP(t){H1(t,0)}function Gc(t){var e=Vs(t);if(r1(e))return t}function oP(t,e){if(t==="change")return e}var O1=!1;if(Rr){var bh;if(Rr){var Nh="oninput"in document;if(!Nh){var Pv=document.createElement("div");Pv.setAttribute("oninput","return;"),Nh=typeof Pv.oninput=="function"}bh=Nh}else bh=!1;O1=bh&&(!document.documentMode||9<document.documentMode)}function xv(){va&&(va.detachEvent("onpropertychange",L1),Ua=va=null)}function L1(t){if(t.propertyName==="value"&&Gc(Ua)){var e=[];N1(e,Ua,t,Im(t)),p1(sP,e)}}function aP(t,e,n){t==="focusin"?(xv(),va=e,Ua=n,va.attachEvent("onpropertychange",L1)):t==="focusout"&&xv()}function lP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(Ua)}function uP(t,e){if(t==="click")return Gc(e)}function cP(t,e){if(t==="input"||t==="change")return Gc(e)}function dP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mn=typeof Object.is=="function"?Object.is:dP;function za(t,e){if(Mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Af.call(e,i)||!Mn(t[i],e[i]))return!1}return!0}function kv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dv(t,e){var n=kv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kv(n)}}function M1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V1(){for(var t=window,e=Ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ku(t.document)}return e}function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hP(t){var e=V1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M1(n.ownerDocument.documentElement,n)){if(r!==null&&bm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dv(n,s);var o=Dv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fP=Rr&&"documentMode"in document&&11>=document.documentMode,Ls=null,Hf=null,_a=null,qf=!1;function bv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||Ls==null||Ls!==Ku(r)||(r=Ls,"selectionStart"in r&&bm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_a&&za(_a,r)||(_a=r,r=ec(Hf,"onSelect"),0<r.length&&(e=new xm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},Oh={},F1={};Rr&&(F1=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Qc(t){if(Oh[t])return Oh[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F1)return Oh[t]=e[n];return t}var $1=Qc("animationend"),j1=Qc("animationiteration"),U1=Qc("animationstart"),z1=Qc("transitionend"),B1=new Map,Nv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){B1.set(t,e),cs(e,[t])}for(var Lh=0;Lh<Nv.length;Lh++){var Mh=Nv[Lh],pP=Mh.toLowerCase(),mP=Mh[0].toUpperCase()+Mh.slice(1);vi(pP,"on"+mP)}vi($1,"onAnimationEnd");vi(j1,"onAnimationIteration");vi(U1,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(z1,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gP=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pC(r,e,void 0,t),t.currentTarget=null}function H1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ov(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ov(i,a,u),s=l}}}if(Qu)throw t=jf,Qu=!1,jf=null,t}function Ve(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(q1(e,t,2,!1),n.add(r))}function Vh(t,e,n){var r=0;e&&(r|=4),q1(n,t,r,e)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Ba(t){if(!t[ou]){t[ou]=!0,Xw.forEach(function(n){n!=="selectionchange"&&(gP.has(n)||Vh(n,!1,t),Vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ou]||(e[ou]=!0,Vh("selectionchange",!1,e))}}function q1(t,e,n,r){switch(P1(e)){case 1:var i=kC;break;case 4:i=DC;break;default:i=Cm}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}p1(function(){var u=s,c=Im(n),d=[];e:{var h=B1.get(t);if(h!==void 0){var y=xm,_=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":y=WC;break;case"focusin":_="focus",y=Dh;break;case"focusout":_="blur",y=Dh;break;case"beforeblur":case"afterblur":y=Dh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=OC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=QC;break;case $1:case j1:case U1:y=VC;break;case z1:y=JC;break;case"scroll":y=bC;break;case"wheel":y=ZC;break;case"copy":case"cut":case"paste":y=$C;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sv}var w=(e&4)!==0,m=!w&&t==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,v;p!==null;){v=p;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,f!==null&&(I=Va(p,f),I!=null&&w.push(Ha(p,I,v)))),m)break;p=p.return}0<w.length&&(h=new y(h,_,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==Vf&&(_=n.relatedTarget||n.fromElement)&&(Ni(_)||_[Cr]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Ni(_):null,_!==null&&(m=ds(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=Tv,I="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Sv,I="onPointerLeave",f="onPointerEnter",p="pointer"),m=y==null?h:Vs(y),v=_==null?h:Vs(_),h=new w(I,p+"leave",y,n,c),h.target=m,h.relatedTarget=v,I=null,Ni(c)===u&&(w=new w(f,p+"enter",_,n,c),w.target=v,w.relatedTarget=m,I=w),m=I,y&&_)t:{for(w=y,f=_,p=0,v=w;v;v=Cs(v))p++;for(v=0,I=f;I;I=Cs(I))v++;for(;0<p-v;)w=Cs(w),p--;for(;0<v-p;)f=Cs(f),v--;for(;p--;){if(w===f||f!==null&&w===f.alternate)break t;w=Cs(w),f=Cs(f)}w=null}else w=null;y!==null&&Lv(d,h,y,w,!1),_!==null&&m!==null&&Lv(d,m,_,w,!0)}}e:{if(h=u?Vs(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var x=oP;else if(Cv(h))if(O1)x=cP;else{x=lP;var E=aP}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=uP);if(x&&(x=x(t,u))){N1(d,x,n,c);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&bf(h,"number",h.value)}switch(E=u?Vs(u):window,t){case"focusin":(Cv(E)||E.contentEditable==="true")&&(Ls=E,Hf=u,_a=null);break;case"focusout":_a=Hf=Ls=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,bv(d,n,c);break;case"selectionchange":if(fP)break;case"keydown":case"keyup":bv(d,n,c)}var C;if(Dm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Os?D1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(k1&&n.locale!=="ko"&&(Os||b!=="onCompositionStart"?b==="onCompositionEnd"&&Os&&(C=x1()):(Jr=c,Pm="value"in Jr?Jr.value:Jr.textContent,Os=!0)),E=ec(u,b),0<E.length&&(b=new Iv(b,t,null,n,c),d.push({event:b,listeners:E}),C?b.data=C:(C=b1(n),C!==null&&(b.data=C)))),(C=tP?nP(t,n):rP(t,n))&&(u=ec(u,"onBeforeInput"),0<u.length&&(c=new Iv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}H1(d,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Va(t,n),s!=null&&r.unshift(Ha(t,s,i)),s=Va(t,e),s!=null&&r.push(Ha(t,s,i))),t=t.return}return r}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Va(n,s),l!=null&&o.unshift(Ha(n,l,a))):i||(l=Va(n,s),l!=null&&o.push(Ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yP=/\r\n?/g,vP=/\u0000|\uFFFD/g;function Mv(t){return(typeof t=="string"?t:""+t).replace(yP,`
`).replace(vP,"")}function au(t,e,n){if(e=Mv(e),Mv(t)!==e&&n)throw Error(N(425))}function tc(){}var Wf=null,Kf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,_P=typeof clearTimeout=="function"?clearTimeout:void 0,Vv=typeof Promise=="function"?Promise:void 0,wP=typeof queueMicrotask=="function"?queueMicrotask:typeof Vv<"u"?function(t){return Vv.resolve(null).then(t).catch(EP)}:Qf;function EP(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Do,qa="__reactProps$"+Do,Cr="__reactContainer$"+Do,Yf="__reactEvents$"+Do,TP="__reactListeners$"+Do,IP="__reactHandles$"+Do;function Ni(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fv(t);t!==null;){if(n=t[Yn])return n;t=Fv(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[Yn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Yc(t){return t[qa]||null}var Jf=[],Fs=-1;function _i(t){return{current:t}}function je(t){0>Fs||(t.current=Jf[Fs],Jf[Fs]=null,Fs--)}function Le(t,e){Fs++,Jf[Fs]=t.current,t.current=e}var pi={},zt=_i(pi),tn=_i(!1),Ki=pi;function uo(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function nc(){je(tn),je(zt)}function $v(t,e,n){if(zt.current!==pi)throw Error(N(168));Le(zt,e),Le(tn,n)}function W1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,aC(t)||"Unknown",i));return Ke({},n,r)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Ki=zt.current,Le(zt,t),Le(tn,tn.current),!0}function jv(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=W1(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,je(tn),je(zt),Le(zt,t)):je(tn),Le(tn,n)}var gr=null,Jc=!1,jh=!1;function K1(t){gr===null?gr=[t]:gr.push(t)}function SP(t){Jc=!0,K1(t)}function wi(){if(!jh&&gr!==null){jh=!0;var t=0,e=Pe;try{var n=gr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Jc=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),v1(Sm,wi),i}finally{Pe=e,jh=!1}}return null}var $s=[],js=0,ic=null,sc=0,vn=[],_n=0,Gi=null,yr=1,vr="";function xi(t,e){$s[js++]=sc,$s[js++]=ic,ic=t,sc=e}function G1(t,e,n){vn[_n++]=yr,vn[_n++]=vr,vn[_n++]=Gi,Gi=t;var r=yr;t=vr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-On(e)+i|n<<i|r,vr=s+t}else yr=1<<s|n<<i|r,vr=t}function Nm(t){t.return!==null&&(xi(t,1),G1(t,1,0))}function Om(t){for(;t===ic;)ic=$s[--js],$s[js]=null,sc=$s[--js],$s[js]=null;for(;t===Gi;)Gi=vn[--_n],vn[_n]=null,vr=vn[--_n],vn[_n]=null,yr=vn[--_n],vn[_n]=null}var un=null,an=null,Be=!1,Nn=null;function Q1(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,an=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,an=null,!0):!1;default:return!1}}function Xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Be){var e=an;if(e){var n=e;if(!Uv(t,e)){if(Xf(t))throw Error(N(418));e=ri(n.nextSibling);var r=un;e&&Uv(t,e)?Q1(r,n):(t.flags=t.flags&-4097|2,Be=!1,un=t)}}else{if(Xf(t))throw Error(N(418));t.flags=t.flags&-4097|2,Be=!1,un=t}}}function zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function lu(t){if(t!==un)return!1;if(!Be)return zv(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=an)){if(Xf(t))throw Y1(),Error(N(418));for(;e;)Q1(t,e),e=ri(e.nextSibling)}if(zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=un?ri(t.stateNode.nextSibling):null;return!0}function Y1(){for(var t=an;t;)t=ri(t.nextSibling)}function co(){an=un=null,Be=!1}function Lm(t){Nn===null?Nn=[t]:Nn.push(t)}var AP=Or.ReactCurrentBatchConfig;function kn(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oc=_i(null),ac=null,Us=null,Mm=null;function Vm(){Mm=Us=ac=null}function Fm(t){var e=oc.current;je(oc),t._currentValue=e}function ep(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){ac=t,Mm=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Mm!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(ac===null)throw Error(N(308));Us=t,ac.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Oi=null;function $m(t){Oi===null?Oi=[t]:Oi.push(t)}function J1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pr(t,r)}function Pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function jm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pr(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pr(t,n)}function ku(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function Bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var i=t.updateQueue;Hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(y,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(y,d,h):_,h==null)break e;d=Ke({},d,h);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=d}}function Hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Z1=new Jw.Component().refs;function tp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=oi(t),s=Ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(Ln(e,t,i,r),ku(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=oi(t),s=Ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(Ln(e,t,i,r),ku(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=oi(t),i=Ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(Ln(e,t,r,n),ku(e,t,r))}};function qv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function eE(t,e,n){var r=!1,i=pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=nn(e)?Ki:zt.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function np(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Z1,jm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=nn(e)?Ki:zt.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xc.enqueueReplaceState(i,i.state,null),lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Z1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kv(t){var e=t._init;return e(t._payload)}function tE(t){function e(f,p){if(t){var v=f.deletions;v===null?(f.deletions=[p],f.flags|=16):v.push(p)}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=ai(f,p),f.index=0,f.sibling=null,f}function s(f,p,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<p?(f.flags|=2,p):v):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,p,v,I){return p===null||p.tag!==6?(p=Kh(v,f.mode,I),p.return=f,p):(p=i(p,v),p.return=f,p)}function l(f,p,v,I){var x=v.type;return x===Ns?c(f,p,v.props.children,I,v.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Br&&Kv(x)===p.type)?(I=i(p,v.props),I.ref=Ko(f,p,v),I.return=f,I):(I=Mu(v.type,v.key,v.props,null,f.mode,I),I.ref=Ko(f,p,v),I.return=f,I)}function u(f,p,v,I){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Gh(v,f.mode,I),p.return=f,p):(p=i(p,v.children||[]),p.return=f,p)}function c(f,p,v,I,x){return p===null||p.tag!==7?(p=Hi(v,f.mode,I,x),p.return=f,p):(p=i(p,v),p.return=f,p)}function d(f,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Kh(""+p,f.mode,v),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xl:return v=Mu(p.type,p.key,p.props,null,f.mode,v),v.ref=Ko(f,null,p),v.return=f,v;case bs:return p=Gh(p,f.mode,v),p.return=f,p;case Br:var I=p._init;return d(f,I(p._payload),v)}if(sa(p)||zo(p))return p=Hi(p,f.mode,v,null),p.return=f,p;uu(f,p)}return null}function h(f,p,v,I){var x=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:a(f,p,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xl:return v.key===x?l(f,p,v,I):null;case bs:return v.key===x?u(f,p,v,I):null;case Br:return x=v._init,h(f,p,x(v._payload),I)}if(sa(v)||zo(v))return x!==null?null:c(f,p,v,I,null);uu(f,v)}return null}function y(f,p,v,I,x){if(typeof I=="string"&&I!==""||typeof I=="number")return f=f.get(v)||null,a(p,f,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Xl:return f=f.get(I.key===null?v:I.key)||null,l(p,f,I,x);case bs:return f=f.get(I.key===null?v:I.key)||null,u(p,f,I,x);case Br:var E=I._init;return y(f,p,v,E(I._payload),x)}if(sa(I)||zo(I))return f=f.get(v)||null,c(p,f,I,x,null);uu(p,I)}return null}function _(f,p,v,I){for(var x=null,E=null,C=p,b=p=0,V=null;C!==null&&b<v.length;b++){C.index>b?(V=C,C=null):V=C.sibling;var H=h(f,C,v[b],I);if(H===null){C===null&&(C=V);break}t&&C&&H.alternate===null&&e(f,C),p=s(H,p,b),E===null?x=H:E.sibling=H,E=H,C=V}if(b===v.length)return n(f,C),Be&&xi(f,b),x;if(C===null){for(;b<v.length;b++)C=d(f,v[b],I),C!==null&&(p=s(C,p,b),E===null?x=C:E.sibling=C,E=C);return Be&&xi(f,b),x}for(C=r(f,C);b<v.length;b++)V=y(C,f,b,v[b],I),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?b:V.key),p=s(V,p,b),E===null?x=V:E.sibling=V,E=V);return t&&C.forEach(function(ce){return e(f,ce)}),Be&&xi(f,b),x}function w(f,p,v,I){var x=zo(v);if(typeof x!="function")throw Error(N(150));if(v=x.call(v),v==null)throw Error(N(151));for(var E=x=null,C=p,b=p=0,V=null,H=v.next();C!==null&&!H.done;b++,H=v.next()){C.index>b?(V=C,C=null):V=C.sibling;var ce=h(f,C,H.value,I);if(ce===null){C===null&&(C=V);break}t&&C&&ce.alternate===null&&e(f,C),p=s(ce,p,b),E===null?x=ce:E.sibling=ce,E=ce,C=V}if(H.done)return n(f,C),Be&&xi(f,b),x;if(C===null){for(;!H.done;b++,H=v.next())H=d(f,H.value,I),H!==null&&(p=s(H,p,b),E===null?x=H:E.sibling=H,E=H);return Be&&xi(f,b),x}for(C=r(f,C);!H.done;b++,H=v.next())H=y(C,f,b,H.value,I),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?b:H.key),p=s(H,p,b),E===null?x=H:E.sibling=H,E=H);return t&&C.forEach(function(Te){return e(f,Te)}),Be&&xi(f,b),x}function m(f,p,v,I){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xl:e:{for(var x=v.key,E=p;E!==null;){if(E.key===x){if(x=v.type,x===Ns){if(E.tag===7){n(f,E.sibling),p=i(E,v.props.children),p.return=f,f=p;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Br&&Kv(x)===E.type){n(f,E.sibling),p=i(E,v.props),p.ref=Ko(f,E,v),p.return=f,f=p;break e}n(f,E);break}else e(f,E);E=E.sibling}v.type===Ns?(p=Hi(v.props.children,f.mode,I,v.key),p.return=f,f=p):(I=Mu(v.type,v.key,v.props,null,f.mode,I),I.ref=Ko(f,p,v),I.return=f,f=I)}return o(f);case bs:e:{for(E=v.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(f,p.sibling),p=i(p,v.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=Gh(v,f.mode,I),p.return=f,f=p}return o(f);case Br:return E=v._init,m(f,p,E(v._payload),I)}if(sa(v))return _(f,p,v,I);if(zo(v))return w(f,p,v,I);uu(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,v),p.return=f,f=p):(n(f,p),p=Kh(v,f.mode,I),p.return=f,f=p),o(f)):n(f,p)}return m}var ho=tE(!0),nE=tE(!1),wl={},rr=_i(wl),Wa=_i(wl),Ka=_i(wl);function Li(t){if(t===wl)throw Error(N(174));return t}function Um(t,e){switch(Le(Ka,e),Le(Wa,t),Le(rr,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}je(rr),Le(rr,e)}function fo(){je(rr),je(Wa),je(Ka)}function rE(t){Li(Ka.current);var e=Li(rr.current),n=Of(e,t.type);e!==n&&(Le(Wa,t),Le(rr,n))}function zm(t){Wa.current===t&&(je(rr),je(Wa))}var qe=_i(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uh=[];function Bm(){for(var t=0;t<Uh.length;t++)Uh[t]._workInProgressVersionPrimary=null;Uh.length=0}var Du=Or.ReactCurrentDispatcher,zh=Or.ReactCurrentBatchConfig,Qi=0,We=null,dt=null,vt=null,cc=!1,wa=!1,Ga=0,RP=0;function Ot(){throw Error(N(321))}function Hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mn(t[n],e[n]))return!1;return!0}function qm(t,e,n,r,i,s){if(Qi=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?kP:DP,t=n(r,i),wa){s=0;do{if(wa=!1,Ga=0,25<=s)throw Error(N(301));s+=1,vt=dt=null,e.updateQueue=null,Du.current=bP,t=n(r,i)}while(wa)}if(Du.current=dc,e=dt!==null&&dt.next!==null,Qi=0,vt=dt=We=null,cc=!1,e)throw Error(N(300));return t}function Wm(){var t=Ga!==0;return Ga=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?We.memoizedState=vt=t:vt=vt.next=t,vt}function Cn(){if(dt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=vt===null?We.memoizedState:vt.next;if(e!==null)vt=e,dt=t;else{if(t===null)throw Error(N(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?We.memoizedState=vt=t:vt=vt.next=t}return vt}function Qa(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=Cn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=dt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,We.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mn(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hh(t){var e=Cn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iE(){}function sE(t,e){var n=We,r=Cn(),i=e(),s=!Mn(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,Km(lE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,aE.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(N(349));Qi&30||oE(n,e,i)}return i}function oE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aE(t,e,n,r){e.value=n,e.getSnapshot=r,uE(e)&&cE(t)}function lE(t,e,n){return n(function(){uE(e)&&cE(t)})}function uE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mn(t,n)}catch{return!0}}function cE(t){var e=Pr(t,1);e!==null&&Ln(e,t,1,-1)}function Gv(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=xP.bind(null,We,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dE(){return Cn().memoizedState}function bu(t,e,n,r){var i=Gn();We.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function Zc(t,e,n,r){var i=Cn();r=r===void 0?null:r;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,r!==null&&Hm(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}We.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function Qv(t,e){return bu(8390656,8,t,e)}function Km(t,e){return Zc(2048,8,t,e)}function hE(t,e){return Zc(4,2,t,e)}function fE(t,e){return Zc(4,4,t,e)}function pE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mE(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,pE.bind(null,e,t),n)}function Gm(){}function gE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yE(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vE(t,e,n){return Qi&21?(Mn(n,e)||(n=E1(),We.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function CP(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=zh.transition;zh.transition={};try{t(!1),e()}finally{Pe=n,zh.transition=r}}function _E(){return Cn().memoizedState}function PP(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wE(t))EE(e,n);else if(n=J1(t,e,n,r),n!==null){var i=Kt();Ln(n,t,r,i),TE(n,e,r)}}function xP(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wE(t))EE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mn(a,o)){var l=e.interleaved;l===null?(i.next=i,$m(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=J1(t,e,i,r),n!==null&&(i=Kt(),Ln(n,t,r,i),TE(n,e,r))}}function wE(t){var e=t.alternate;return t===We||e!==null&&e===We}function EE(t,e){wa=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var dc={readContext:Rn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},kP={readContext:Rn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bu(4194308,4,pE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return bu(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PP.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Gv,useDebugValue:Gm,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Gv(!1),e=t[0];return t=CP.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Gn();if(Be){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),_t===null)throw Error(N(349));Qi&30||oE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qv(lE.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,aE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=_t.identifierPrefix;if(Be){var n=vr,r=yr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DP={readContext:Rn,useCallback:gE,useContext:Rn,useEffect:Km,useImperativeHandle:mE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:yE,useReducer:Bh,useRef:dE,useState:function(){return Bh(Qa)},useDebugValue:Gm,useDeferredValue:function(t){var e=Cn();return vE(e,dt.memoizedState,t)},useTransition:function(){var t=Bh(Qa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1},bP={readContext:Rn,useCallback:gE,useContext:Rn,useEffect:Km,useImperativeHandle:mE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:yE,useReducer:Hh,useRef:dE,useState:function(){return Hh(Qa)},useDebugValue:Gm,useDeferredValue:function(t){var e=Cn();return dt===null?e.memoizedState=t:vE(e,dt.memoizedState,t)},useTransition:function(){var t=Hh(Qa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1};function po(t,e){try{var n="",r=e;do n+=oC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NP=typeof WeakMap=="function"?WeakMap:Map;function IE(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fc||(fc=!0,fp=r),rp(t,e)},n}function SE(t,e,n){n=Ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rp(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KP.bind(null,t,e,n),e.then(t,t))}function Jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var OP=Or.ReactCurrentOwner,en=!1;function qt(t,e,n,r){e.child=t===null?nE(e,null,n,r):ho(e,t.child,n,r)}function Zv(t,e,n,r,i){n=n.render;var s=e.ref;return Zs(e,i),r=qm(t,e,n,r,s,i),n=Wm(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Be&&n&&Nm(e),e.flags|=1,qt(t,e,r,i),e.child)}function e0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ng(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,AE(t,e,s,r,i)):(t=Mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function AE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,xr(t,e,i)}return ip(t,e,n,r,i)}function RE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Bs,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(Bs,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(Bs,on),on|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(Bs,on),on|=r;return qt(t,e,i,n),e.child}function CE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ip(t,e,n,r,i){var s=nn(n)?Ki:zt.current;return s=uo(e,s),Zs(e,i),n=qm(t,e,n,r,s,i),r=Wm(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Be&&r&&Nm(e),e.flags|=1,qt(t,e,n,i),e.child)}function t0(t,e,n,r,i){if(nn(n)){var s=!0;rc(e)}else s=!1;if(Zs(e,i),e.stateNode===null)Nu(t,e),eE(e,n,r),np(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=nn(n)?Ki:zt.current,u=uo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wv(e,o,r,u),Hr=!1;var h=e.memoizedState;o.state=h,lc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||tn.current||Hr?(typeof c=="function"&&(tp(e,n,c,r),l=e.memoizedState),(a=Hr||qv(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=nn(n)?Ki:zt.current,l=uo(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Wv(e,o,r,l),Hr=!1,h=e.memoizedState,o.state=h,lc(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||tn.current||Hr?(typeof y=="function"&&(tp(e,n,y,r),_=e.memoizedState),(u=Hr||qv(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){CE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jv(e,n,!1),xr(t,e,s);r=e.stateNode,OP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):qt(t,e,a,s),e.memoizedState=r.state,i&&jv(e,n,!0),e.child}function PE(t){var e=t.stateNode;e.pendingContext?$v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$v(t,e.context,!1),Um(t,e.containerInfo)}function n0(t,e,n,r,i){return co(),Lm(i),e.flags|=256,qt(t,e,n,r),e.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function xE(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(qe,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=Hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ap(n),e.memoizedState=op,t):Qm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ai(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ai(a,s):(s=Hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=op,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qm(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cu(t,e,n,r){return r!==null&&Lm(r),ho(e,t.child,null,n),t=Qm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qh(Error(N(422))),cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=Hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=op,s);if(!(e.mode&1))return cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=qh(s,r,void 0),cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,en||a){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pr(t,i),Ln(r,t,i,-1))}return tg(),r=qh(Error(N(421))),cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,an=ri(i.nextSibling),un=e,Be=!0,Nn=null,t!==null&&(vn[_n++]=yr,vn[_n++]=vr,vn[_n++]=Gi,yr=t.id,vr=t.overflow,Gi=e),e=Qm(e,r.children),e.flags|=4096,e)}function r0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ep(t.return,e,n)}function Wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qt(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,n,e);else if(t.tag===19)r0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wh(e,!0,n,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function MP(t,e,n){switch(e.tag){case 3:PE(e),co();break;case 5:rE(e);break;case 1:nn(e.type)&&rc(e);break;case 4:Um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?xE(t,e,n):(Le(qe,qe.current&1),t=xr(t,e,n),t!==null?t.sibling:null);Le(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,RE(t,e,n)}return xr(t,e,n)}var DE,lp,bE,NE;DE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};bE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(rr.current);var s=null;switch(n){case"input":i=kf(t,i),r=kf(t,r),s=[];break;case"select":i=Ke({},i,{value:void 0}),r=Ke({},r,{value:void 0}),s=[];break;case"textarea":i=Nf(t,i),r=Nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tc)}Lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(La.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(La.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};NE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VP(t,e,n){var r=e.pendingProps;switch(Om(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return nn(e.type)&&nc(),Lt(e),null;case 3:return r=e.stateNode,fo(),je(tn),je(zt),Bm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(gp(Nn),Nn=null))),lp(t,e),Lt(e),null;case 5:zm(e);var i=Li(Ka.current);if(n=e.type,t!==null&&e.stateNode!=null)bE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Lt(e),null}if(t=Li(rr.current),lu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[qa]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<aa.length;i++)Ve(aa[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":hv(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":pv(r,s),Ve("invalid",r)}Lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&au(r.textContent,a,t),i=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Zl(r),fv(r,s,!0);break;case"textarea":Zl(r),mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[qa]=r,DE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)Ve(aa[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":hv(t,r),i=kf(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ke({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":pv(t,r),i=Nf(t,r),Ve("invalid",t);break;default:i=r}Lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?u1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&_m(t,s,l,o))}switch(n){case"input":Zl(t),fv(t,r,!1);break;case"textarea":Zl(t),mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)NE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Li(Ka.current),Li(rr.current),lu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:au(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&au(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Lt(e),null;case 13:if(je(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&an!==null&&e.mode&1&&!(e.flags&128))Y1(),co(),e.flags|=98560,s=!1;else if(s=lu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Yn]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),s=!1}else Nn!==null&&(gp(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?ht===0&&(ht=3):tg())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return fo(),lp(t,e),t===null&&Ba(e.stateNode.containerInfo),Lt(e),null;case 10:return Fm(e.type._context),Lt(e),null;case 17:return nn(e.type)&&nc(),Lt(e),null;case 19:if(je(qe),s=e.memoizedState,s===null)return Lt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Go(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uc(t),o!==null){for(e.flags|=128,Go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>mo&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304)}else{if(!r)if(t=uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Lt(e),null}else 2*nt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=qe.current,Le(qe,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return eg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function FP(t,e){switch(Om(e),e.tag){case 1:return nn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),je(tn),je(zt),Bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zm(e),null;case 13:if(je(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(qe),null;case 4:return fo(),null;case 10:return Fm(e.type._context),null;case 22:case 23:return eg(),null;case 24:return null;default:return null}}var du=!1,Ft=!1,$P=typeof WeakSet=="function"?WeakSet:Set,q=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(t,e,r)}else n.current=null}function up(t,e,n){try{n()}catch(r){Ye(t,e,r)}}var i0=!1;function jP(t,e){if(Wf=Xu,t=V1(),bm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},Xu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,m=_.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?w:kn(e.type,w),m);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(I){Ye(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return _=i0,i0=!1,_}function Ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&up(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function OE(t){var e=t.alternate;e!==null&&(t.alternate=null,OE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[qa],delete e[Yf],delete e[TP],delete e[IP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function LE(t){return t.tag===5||t.tag===3||t.tag===4}function s0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||LE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}function hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}var At=null,Dn=!1;function jr(t,e,n){for(n=n.child;n!==null;)ME(t,e,n),n=n.sibling}function ME(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:Ft||zs(n,e);case 6:var r=At,i=Dn;At=null,jr(t,e,n),At=r,Dn=i,At!==null&&(Dn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Dn?(t=At,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),ja(t)):$h(At,n.stateNode));break;case 4:r=At,i=Dn,At=n.stateNode.containerInfo,Dn=!0,jr(t,e,n),At=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),i=i.next}while(i!==r)}jr(t,e,n);break;case 1:if(!Ft&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ye(n,e,a)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,jr(t,e,n),Ft=r):jr(t,e,n);break;default:jr(t,e,n)}}function o0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $P),e.forEach(function(r){var i=QP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Dn=!1;break e;case 3:At=a.stateNode.containerInfo,Dn=!0;break e;case 4:At=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(At===null)throw Error(N(160));ME(s,o,i),At=null,Dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ye(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VE(e,t),e=e.sibling}function VE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Kn(t),r&4){try{Ea(3,t,t.return),ed(3,t)}catch(w){Ye(t,t.return,w)}try{Ea(5,t,t.return)}catch(w){Ye(t,t.return,w)}}break;case 1:xn(e,t),Kn(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(xn(e,t),Kn(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{Ma(i,"")}catch(w){Ye(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i1(i,s),Mf(a,o);var u=Mf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?u1(i,d):c==="dangerouslySetInnerHTML"?a1(i,d):c==="children"?Ma(i,d):_m(i,c,d,u)}switch(a){case"input":Df(i,s);break;case"textarea":s1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Qs(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qs(i,!!s.multiple,s.defaultValue,!0):Qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[qa]=s}catch(w){Ye(t,t.return,w)}}break;case 6:if(xn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ye(t,t.return,w)}}break;case 3:if(xn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(w){Ye(t,t.return,w)}break;case 4:xn(e,t),Kn(t);break;case 13:xn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xm=nt())),r&4&&o0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||c,xn(e,t),Ft=u):xn(e,t),Kn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(q=t,c=t.child;c!==null;){for(d=q=c;q!==null;){switch(h=q,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ea(4,h,h.return);break;case 1:zs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Ye(r,n,w)}}break;case 5:zs(h,h.return);break;case 22:if(h.memoizedState!==null){l0(d);continue}}y!==null?(y.return=h,q=y):l0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l1("display",o))}catch(w){Ye(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Ye(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xn(e,t),Kn(t),r&4&&o0(t);break;case 21:break;default:xn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(LE(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ma(i,""),r.flags&=-33);var s=s0(t);hp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=s0(t);dp(t,a,o);break;default:throw Error(N(161))}}catch(l){Ye(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UP(t,e,n){q=t,FE(t)}function FE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=du;var u=Ft;if(du=o,(Ft=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?u0(i):l!==null?(l.return=o,q=l):u0(i);for(;s!==null;)q=s,FE(s),s=s.sibling;q=i,du=a,Ft=u}a0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):a0(t)}}function a0(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ja(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ft||e.flags&512&&cp(e)}catch(h){Ye(e,e.return,h)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function l0(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function u0(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(l){Ye(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ye(e,i,l)}}var s=e.return;try{cp(e)}catch(l){Ye(e,s,l)}break;case 5:var o=e.return;try{cp(e)}catch(l){Ye(e,o,l)}}}catch(l){Ye(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var zP=Math.ceil,hc=Or.ReactCurrentDispatcher,Ym=Or.ReactCurrentOwner,In=Or.ReactCurrentBatchConfig,Ie=0,_t=null,ot=null,xt=0,on=0,Bs=_i(0),ht=0,Ja=null,Yi=0,td=0,Jm=0,Ta=null,Xt=null,Xm=0,mo=1/0,mr=null,fc=!1,fp=null,si=null,hu=!1,Xr=null,pc=0,Ia=0,pp=null,Ou=-1,Lu=0;function Kt(){return Ie&6?nt():Ou!==-1?Ou:Ou=nt()}function oi(t){return t.mode&1?Ie&2&&xt!==0?xt&-xt:AP.transition!==null?(Lu===0&&(Lu=E1()),Lu):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:P1(t.type)),t):1}function Ln(t,e,n,r){if(50<Ia)throw Ia=0,pp=null,Error(N(185));yl(t,n,r),(!(Ie&2)||t!==_t)&&(t===_t&&(!(Ie&2)&&(td|=n),ht===4&&Wr(t,xt)),rn(t,r),n===1&&Ie===0&&!(e.mode&1)&&(mo=nt()+500,Jc&&wi()))}function rn(t,e){var n=t.callbackNode;AC(t,e);var r=Ju(t,t===_t?xt:0);if(r===0)n!==null&&vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vv(n),e===1)t.tag===0?SP(c0.bind(null,t)):K1(c0.bind(null,t)),wP(function(){!(Ie&6)&&wi()}),n=null;else{switch(T1(r)){case 1:n=Sm;break;case 4:n=_1;break;case 16:n=Yu;break;case 536870912:n=w1;break;default:n=Yu}n=WE(n,$E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $E(t,e){if(Ou=-1,Lu=0,Ie&6)throw Error(N(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var r=Ju(t,t===_t?xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mc(t,r);else{e=r;var i=Ie;Ie|=2;var s=UE();(_t!==t||xt!==e)&&(mr=null,mo=nt()+500,Bi(t,e));do try{qP();break}catch(a){jE(t,a)}while(!0);Vm(),hc.current=s,Ie=i,ot!==null?e=0:(_t=null,xt=0,e=ht)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=mp(t,i))),e===1)throw n=Ja,Bi(t,0),Wr(t,r),rn(t,nt()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!BP(i)&&(e=mc(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=mp(t,s))),e===1))throw n=Ja,Bi(t,0),Wr(t,r),rn(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:ki(t,Xt,mr);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=Xm+500-nt(),10<e)){if(Ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qf(ki.bind(null,t,Xt,mr),e);break}ki(t,Xt,mr);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zP(r/1960))-r,10<r){t.timeoutHandle=Qf(ki.bind(null,t,Xt,mr),r);break}ki(t,Xt,mr);break;case 5:ki(t,Xt,mr);break;default:throw Error(N(329))}}}return rn(t,nt()),t.callbackNode===n?$E.bind(null,t):null}function mp(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=mc(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&gp(e)),t}function gp(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function BP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~Jm,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function c0(t){if(Ie&6)throw Error(N(327));eo();var e=Ju(t,0);if(!(e&1))return rn(t,nt()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=mp(t,r))}if(n===1)throw n=Ja,Bi(t,0),Wr(t,e),rn(t,nt()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,Xt,mr),rn(t,nt()),null}function Zm(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(mo=nt()+500,Jc&&wi())}}function Ji(t){Xr!==null&&Xr.tag===0&&!(Ie&6)&&eo();var e=Ie;Ie|=1;var n=In.transition,r=Pe;try{if(In.transition=null,Pe=1,t)return t()}finally{Pe=r,In.transition=n,Ie=e,!(Ie&6)&&wi()}}function eg(){on=Bs.current,je(Bs)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_P(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Om(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nc();break;case 3:fo(),je(tn),je(zt),Bm();break;case 5:zm(r);break;case 4:fo();break;case 13:je(qe);break;case 19:je(qe);break;case 10:Fm(r.type._context);break;case 22:case 23:eg()}n=n.return}if(_t=t,ot=t=ai(t.current,null),xt=on=e,ht=0,Ja=null,Jm=td=Yi=0,Xt=Ta=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Oi=null}return t}function jE(t,e){do{var n=ot;try{if(Vm(),Du.current=dc,cc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cc=!1}if(Qi=0,vt=dt=We=null,wa=!1,Ga=0,Ym.current=null,n===null||n.return===null){ht=1,Ja=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Jv(o);if(y!==null){y.flags&=-257,Xv(y,o,a,s,e),y.mode&1&&Yv(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Yv(s,u,e),tg();break e}l=Error(N(426))}}else if(Be&&a.mode&1){var m=Jv(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xv(m,o,a,s,e),Lm(po(l,a));break e}}s=l=po(l,a),ht!==4&&(ht=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=IE(s,l,e);Bv(s,f);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(si===null||!si.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=SE(s,a,e);Bv(s,I);break e}}s=s.return}while(s!==null)}BE(n)}catch(x){e=x,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function UE(){var t=hc.current;return hc.current=dc,t===null?dc:t}function tg(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||!(Yi&268435455)&&!(td&268435455)||Wr(_t,xt)}function mc(t,e){var n=Ie;Ie|=2;var r=UE();(_t!==t||xt!==e)&&(mr=null,Bi(t,e));do try{HP();break}catch(i){jE(t,i)}while(!0);if(Vm(),Ie=n,hc.current=r,ot!==null)throw Error(N(261));return _t=null,xt=0,ht}function HP(){for(;ot!==null;)zE(ot)}function qP(){for(;ot!==null&&!gC();)zE(ot)}function zE(t){var e=qE(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?BE(t):ot=e,Ym.current=null}function BE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FP(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,ot=null;return}}else if(n=VP(n,e,on),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ht===0&&(ht=5)}function ki(t,e,n){var r=Pe,i=In.transition;try{In.transition=null,Pe=1,WP(t,e,n,r)}finally{In.transition=i,Pe=r}return null}function WP(t,e,n,r){do eo();while(Xr!==null);if(Ie&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RC(t,s),t===_t&&(ot=_t=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,WE(Yu,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Pe;Pe=1;var a=Ie;Ie|=4,Ym.current=null,jP(t,n),VE(n,t),hP(Kf),Xu=!!Wf,Kf=Wf=null,t.current=n,UP(n),yC(),Ie=a,Pe=o,In.transition=s}else t.current=n;if(hu&&(hu=!1,Xr=t,pc=i),s=t.pendingLanes,s===0&&(si=null),wC(n.stateNode),rn(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fc)throw fc=!1,t=fp,fp=null,t;return pc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===pp?Ia++:(Ia=0,pp=t):Ia=0,wi(),null}function eo(){if(Xr!==null){var t=T1(pc),e=In.transition,n=Pe;try{if(In.transition=null,Pe=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,pc=0,Ie&6)throw Error(N(331));var i=Ie;for(Ie|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:Ea(8,c,s)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var h=c.sibling,y=c.return;if(OE(c),c===u){q=null;break}if(h!==null){h.return=y,q=h;break}q=y}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var m=w.sibling;w.sibling=null,w=m}while(w!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,q=f;break e}q=s.return}}var p=t.current;for(q=p;q!==null;){o=q;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,q=v;else e:for(o=p;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ed(9,a)}}catch(x){Ye(a,a.return,x)}if(a===o){q=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,q=I;break e}q=a.return}}if(Ie=i,wi(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Wc,t)}catch{}r=!0}return r}finally{Pe=n,In.transition=e}}return!1}function d0(t,e,n){e=po(n,e),e=IE(t,e,1),t=ii(t,e,1),e=Kt(),t!==null&&(yl(t,1,e),rn(t,e))}function Ye(t,e,n){if(t.tag===3)d0(t,t,n);else for(;e!==null;){if(e.tag===3){d0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=po(n,t),t=SE(e,t,1),e=ii(e,t,1),t=Kt(),e!==null&&(yl(e,1,t),rn(e,t));break}}e=e.return}}function KP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(xt&n)===n&&(ht===4||ht===3&&(xt&130023424)===xt&&500>nt()-Xm?Bi(t,0):Jm|=n),rn(t,e)}function HE(t,e){e===0&&(t.mode&1?(e=nu,nu<<=1,!(nu&130023424)&&(nu=4194304)):e=1);var n=Kt();t=Pr(t,e),t!==null&&(yl(t,e,n),rn(t,n))}function GP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),HE(t,n)}function QP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),HE(t,n)}var qE;qE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,MP(t,e,n);en=!!(t.flags&131072)}else en=!1,Be&&e.flags&1048576&&G1(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var i=uo(e,zt.current);Zs(e,n),i=qm(null,e,r,t,i,n);var s=Wm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(s=!0,rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jm(e),i.updater=Xc,e.stateNode=i,i._reactInternals=e,np(e,r,t,n),e=sp(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&Nm(e),qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JP(r),t=kn(r,t),i){case 0:e=ip(null,e,r,t,n);break e;case 1:e=t0(null,e,r,t,n);break e;case 11:e=Zv(null,e,r,t,n);break e;case 14:e=e0(null,e,r,kn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),t0(t,e,r,i,n);case 3:e:{if(PE(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X1(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(N(423)),e),e=n0(t,e,r,n,i);break e}else if(r!==i){i=po(Error(N(424)),e),e=n0(t,e,r,n,i);break e}else for(an=ri(e.stateNode.containerInfo.firstChild),un=e,Be=!0,Nn=null,n=nE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=xr(t,e,n);break e}qt(t,e,r,n)}e=e.child}return e;case 5:return rE(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=32),CE(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return xE(t,e,n);case 4:return Um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Zv(t,e,r,i,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(oc,r._currentValue),r._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===i.children&&!tn.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ep(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ep(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zs(e,n),i=Rn(i),r=r(i),e.flags|=1,qt(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),e0(t,e,r,i,n);case 15:return AE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Nu(t,e),e.tag=1,nn(r)?(t=!0,rc(e)):t=!1,Zs(e,n),eE(e,r,i),np(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return kE(t,e,n);case 22:return RE(t,e,n)}throw Error(N(156,e.tag))};function WE(t,e){return v1(t,e)}function YP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new YP(t,e,n,r)}function ng(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JP(t){if(typeof t=="function")return ng(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Em)return 11;if(t===Tm)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ng(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Hi(n.children,i,s,e);case wm:o=8,i|=8;break;case Rf:return t=En(12,n,e,i|2),t.elementType=Rf,t.lanes=s,t;case Cf:return t=En(13,n,e,i),t.elementType=Cf,t.lanes=s,t;case Pf:return t=En(19,n,e,i),t.elementType=Pf,t.lanes=s,t;case t1:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zw:o=10;break e;case e1:o=9;break e;case Em:o=11;break e;case Tm:o=14;break e;case Br:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hi(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=En(22,t,r,e),t.elementType=t1,t.lanes=n,t.stateNode={isHidden:!1},t}function Kh(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function Gh(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ph(0),this.expirationTimes=Ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rg(t,e,n,r,i,s,o,a,l){return t=new XP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jm(s),t}function ZP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return pi;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(nn(n))return W1(t,n,e)}return e}function GE(t,e,n,r,i,s,o,a,l){return t=rg(n,r,!0,t,i,s,o,a,l),t.context=KE(null),n=t.current,r=Kt(),i=oi(n),s=Ir(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,yl(t,i,r),rn(t,r),t}function rd(t,e,n,r){var i=e.current,s=Kt(),o=oi(i);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(Ln(t,i,o,s),ku(t,i,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function h0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ig(t,e){h0(t,e),(t=t.alternate)&&h0(t,e)}function ex(){return null}var QE=typeof reportError=="function"?reportError:function(t){console.error(t)};function sg(t){this._internalRoot=t}id.prototype.render=sg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));rd(t,e,null,null)};id.prototype.unmount=sg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){rd(null,t,null,null)}),e[Cr]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=A1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&C1(t)}};function og(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function f0(){}function tx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gc(o);s.call(u)}}var o=GE(e,r,t,0,null,!1,!1,"",f0);return t._reactRootContainer=o,t[Cr]=o.current,Ba(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gc(l);a.call(u)}}var l=rg(t,0,!1,null,null,!1,!1,"",f0);return t._reactRootContainer=l,t[Cr]=l.current,Ba(t.nodeType===8?t.parentNode:t),Ji(function(){rd(e,l,n,r)}),l}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gc(o);a.call(l)}}rd(e,o,t,i)}else o=tx(n,e,t,i,r);return gc(o)}I1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(Am(e,n|1),rn(e,nt()),!(Ie&6)&&(mo=nt()+500,wi()))}break;case 13:Ji(function(){var r=Pr(t,1);if(r!==null){var i=Kt();Ln(r,t,1,i)}}),ig(t,1)}};Rm=function(t){if(t.tag===13){var e=Pr(t,134217728);if(e!==null){var n=Kt();Ln(e,t,134217728,n)}ig(t,134217728)}};S1=function(t){if(t.tag===13){var e=oi(t),n=Pr(t,e);if(n!==null){var r=Kt();Ln(n,t,e,r)}ig(t,e)}};A1=function(){return Pe};R1=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};Ff=function(t,e,n){switch(e){case"input":if(Df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yc(r);if(!i)throw Error(N(90));r1(r),Df(r,i)}}}break;case"textarea":s1(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};h1=Zm;f1=Ji;var nx={usingClientEntryPoint:!1,Events:[_l,Vs,Yc,c1,d1,Zm]},Qo={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rx={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Wc=fu.inject(rx),nr=fu}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!og(e))throw Error(N(200));return ZP(t,e,null,n)};fn.createRoot=function(t,e){if(!og(t))throw Error(N(299));var n=!1,r="",i=QE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rg(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,Ba(t.nodeType===8?t.parentNode:t),new sg(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=g1(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Ji(t)};fn.hydrate=function(t,e,n){if(!sd(e))throw Error(N(200));return od(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!og(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=QE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GE(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,Ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};fn.render=function(t,e,n){if(!sd(e))throw Error(N(200));return od(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!sd(t))throw Error(N(40));return t._reactRootContainer?(Ji(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};fn.unstable_batchedUpdates=Zm;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return od(t,e,n,!1,r)};fn.version="18.2.0-next-9e3b772b8-20220608";function YE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YE)}catch(t){console.error(t)}}YE(),Gw.exports=fn;var ag=Gw.exports;const ix=hm(ag),sx=Vw({__proto__:null,default:ix},[ag]);var JE,p0=ag;JE=p0.createRoot,p0.hydrateRoot;var m0={};/**
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
 */const XE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ox=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ZE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(h=64)),r.push(n[c],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(XE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ox(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new ax;const h=s<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ax extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lx=function(t){const e=XE(t);return ZE.encodeByteArray(e,!0)},yc=function(t){return lx(t).replace(/\./g,"")},eT=function(t){try{return ZE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ux(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cx=()=>ux().__FIREBASE_DEFAULTS__,dx=()=>{if(typeof process>"u"||typeof m0>"u")return;const t=m0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eT(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return cx()||dx()||hx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tT=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fx=t=>{const e=tT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nT=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config},rT=t=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let px=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function mx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yc(JSON.stringify(n)),yc(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function yx(){var t;const e=(t=ad())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _x(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wx(){return!yx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ld(){try{return typeof indexedDB=="object"}catch{return!1}}function ug(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function iT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ex="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ex,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Tx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bn(i,a,r)}}function Tx(t,e){return t.replace(Ix,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ix=/\{\$([^}]+)}/g;function Sx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(g0(s)&&g0(o)){if(!Xi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function g0(t){return t!==null&&typeof t=="object"}/**
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
 */function El(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function la(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ua(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ax(t,e){const n=new Rx(t,e);return n.subscribe.bind(n)}class Rx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qh),i.error===void 0&&(i.error=Qh),i.complete===void 0&&(i.complete=Qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qh(){}/**
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
 */const Px=1e3,xx=2,kx=4*60*60*1e3,Dx=.5;function y0(t,e=Px,n=xx){const r=e*Math.pow(n,t),i=Math.round(Dx*r*(Math.random()-.5)*2);return Math.min(kx,r+i)}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class bx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new px;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ox(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nx(t){return t===Di?void 0:t}function Ox(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Mx={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Vx=we.INFO,Fx={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},$x=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=Vx,this._logHandler=$x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const jx=(t,e)=>e.some(n=>t instanceof n);let v0,_0;function Ux(){return v0||(v0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zx(){return _0||(_0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sT=new WeakMap,yp=new WeakMap,oT=new WeakMap,Yh=new WeakMap,cg=new WeakMap;function Bx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sT.set(n,t)}).catch(()=>{}),cg.set(e,t),e}function Hx(t){if(yp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yp.set(t,e)}let vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qx(t){vp=t(vp)}function Wx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jh(this),e,...n);return oT.set(r,e.sort?e.sort():[e]),li(r)}:zx().includes(t)?function(...e){return t.apply(Jh(this),e),li(sT.get(this))}:function(...e){return li(t.apply(Jh(this),e))}}function Kx(t){return typeof t=="function"?Wx(t):(t instanceof IDBTransaction&&Hx(t),jx(t,Ux())?new Proxy(t,vp):t)}function li(t){if(t instanceof IDBRequest)return Bx(t);if(Yh.has(t))return Yh.get(t);const e=Kx(t);return e!==t&&(Yh.set(t,e),cg.set(e,t)),e}const Jh=t=>cg.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=li(o);return r&&o.addEventListener("upgradeneeded",l=>{r(li(o.result),l.oldVersion,l.newVersion,li(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Gx=["get","getKey","getAll","getAllKeys","count"],Qx=["put","add","delete","clear"],Xh=new Map;function w0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xh.get(e))return Xh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Qx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Xh.set(e,s),s}qx(t=>({...t,get:(e,n,r)=>w0(e,n)||t.get(e,n,r),has:(e,n)=>!!w0(e,n)||t.has(e,n)}));/**
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
 */class Yx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _p="@firebase/app",E0="0.10.1";/**
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
 */const Zi=new ud("@firebase/app"),Xx="@firebase/app-compat",Zx="@firebase/analytics-compat",ek="@firebase/analytics",tk="@firebase/app-check-compat",nk="@firebase/app-check",rk="@firebase/auth",ik="@firebase/auth-compat",sk="@firebase/database",ok="@firebase/database-compat",ak="@firebase/functions",lk="@firebase/functions-compat",uk="@firebase/installations",ck="@firebase/installations-compat",dk="@firebase/messaging",hk="@firebase/messaging-compat",fk="@firebase/performance",pk="@firebase/performance-compat",mk="@firebase/remote-config",gk="@firebase/remote-config-compat",yk="@firebase/storage",vk="@firebase/storage-compat",_k="@firebase/firestore",wk="@firebase/firestore-compat",Ek="firebase",Tk="10.11.0";/**
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
 */const wp="[DEFAULT]",Ik={[_p]:"fire-core",[Xx]:"fire-core-compat",[ek]:"fire-analytics",[Zx]:"fire-analytics-compat",[nk]:"fire-app-check",[tk]:"fire-app-check-compat",[rk]:"fire-auth",[ik]:"fire-auth-compat",[sk]:"fire-rtdb",[ok]:"fire-rtdb-compat",[ak]:"fire-fn",[lk]:"fire-fn-compat",[uk]:"fire-iid",[ck]:"fire-iid-compat",[dk]:"fire-fcm",[hk]:"fire-fcm-compat",[fk]:"fire-perf",[pk]:"fire-perf-compat",[mk]:"fire-rc",[gk]:"fire-rc-compat",[yk]:"fire-gcs",[vk]:"fire-gcs-compat",[_k]:"fire-fst",[wk]:"fire-fst-compat","fire-js":"fire-js",[Ek]:"fire-js-all"};/**
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
 */const vc=new Map,Sk=new Map,Ep=new Map;function T0(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ur(t){const e=t.name;if(Ep.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;Ep.set(e,t);for(const n of vc.values())T0(n,t);for(const n of Sk.values())T0(n,t);return!0}function fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t.settings!==void 0}/**
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
 */const Ak={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new hs("app","Firebase",Ak);/**
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
 */class Rk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=Tk;function lT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ui.create("bad-app-name",{appName:String(i)});if(n||(n=nT()),!n)throw ui.create("no-options");const s=vc.get(i);if(s){if(Xi(n,s.options)&&Xi(r,s.config))return s;throw ui.create("duplicate-app",{appName:i})}const o=new Lx(i);for(const l of Ep.values())o.addComponent(l);const a=new Rk(n,r,o);return vc.set(i,a),a}function dg(t=wp){const e=vc.get(t);if(!e&&t===wp&&nT())return lT();if(!e)throw ui.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let i=(r=Ik[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}ur(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ck="firebase-heartbeat-database",Pk=1,Xa="firebase-heartbeat-store";let Zh=null;function uT(){return Zh||(Zh=aT(Ck,Pk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),Zh}async function xk(t){try{const n=(await uT()).transaction(Xa),r=await n.objectStore(Xa).get(cT(t));return await n.done,r}catch(e){if(e instanceof Bn)Zi.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function I0(t,e){try{const r=(await uT()).transaction(Xa,"readwrite");await r.objectStore(Xa).put(e,cT(t)),await r.done}catch(n){if(n instanceof Bn)Zi.warn(n.message);else{const r=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function cT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kk=1024,Dk=30*24*60*60*1e3;class bk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ok(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=S0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Dk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=S0(),{heartbeatsToSend:r,unsentEntries:i}=Nk(this._heartbeatsCache.heartbeats),s=yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function S0(){return new Date().toISOString().substring(0,10)}function Nk(t,e=kk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),A0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),A0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ok{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ld()?ug().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function A0(t){return yc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lk(t){ur(new Vn("platform-logger",e=>new Yx(e),"PRIVATE")),ur(new Vn("heartbeat",e=>new bk(e),"PRIVATE")),Sn(_p,E0,t),Sn(_p,E0,"esm2017"),Sn("fire-js","")}Lk("");var Mk="firebase",Vk="10.11.0";/**
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
 */Sn(Mk,Vk,"app");function hg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fk=dT,hT=new hs("auth","Firebase",dT());/**
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
 */const _c=new ud("@firebase/auth");function $k(t,...e){_c.logLevel<=we.WARN&&_c.warn(`Auth (${bo}): ${t}`,...e)}function Vu(t,...e){_c.logLevel<=we.ERROR&&_c.error(`Auth (${bo}): ${t}`,...e)}/**
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
 */function Fn(t,...e){throw fg(t,...e)}function ir(t,...e){return fg(t,...e)}function fT(t,e,n){const r=Object.assign(Object.assign({},Fk()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return fT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hT.create(t,...e)}function te(t,e,...n){if(!t)throw fg(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function kr(t,e){t||_r(e)}/**
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
 */function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jk(){return R0()==="http:"||R0()==="https:"}function R0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||lg()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=gx()||vx()}get(){return Uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hk=new Tl(3e4,6e4);function Ei(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ti(t,e,n,r,i={}){return mT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=El(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pT.fetch()(gT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bk),e);try{const i=new Wk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fT(t,c,u);Fn(t,c)}}catch(i){if(i instanceof Bn)throw i;Fn(t,"network-request-failed",{message:String(i)})}}async function Il(t,e,n,r,i={}){const s=await Ti(t,e,n,r,i);return"mfaPendingCredential"in s&&Fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pg(t.config,i):`${t.config.apiScheme}://${i}`}function qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ir(this.auth,"network-request-failed")),Hk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ir(t,e,r);return i.customData._tokenResponse=n,i}function C0(t){return t!==void 0&&t.enterprise!==void 0}class Kk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gk(t,e){return Ti(t,"GET","/v2/recaptchaConfig",Ei(t,e))}/**
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
 */async function Qk(t,e){return Ti(t,"POST","/v1/accounts:delete",e)}async function yT(t,e){return Ti(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yk(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=mg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Sa(ef(i.auth_time)),issuedAtTime:Sa(ef(i.iat)),expirationTime:Sa(ef(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ef(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=eT(n);return i?JSON.parse(i):(Vu("Failed to decode base64 JWT payload"),null)}catch(i){return Vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function P0(t){const e=mg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&Jk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sa(this.lastLoginAt),this.creationTime=Sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Za(t,yT(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vT(s.providerUserInfo):[],a=eD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ip(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Zk(t){const e=wt(t);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vT(t){return t.map(e=>{var{providerId:n}=e,r=hg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tD(t,e){const n=await mT(t,{},async()=>{const r=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nD(t,e){return Ti(t,"POST","/v2/accounts:revokeToken",Ei(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=P0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Ur(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ip(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Za(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yk(this,e)}reload(){return Zk(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Za(this,Qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:I,isAnonymous:x,providerData:E,stsTokenManager:C}=n;te(v&&C,e,"internal-error");const b=to.fromJSON(this.name,C);te(typeof v=="string",e,"internal-error"),Ur(d,e.name),Ur(h,e.name),te(typeof I=="boolean",e,"internal-error"),te(typeof x=="boolean",e,"internal-error"),Ur(y,e.name),Ur(_,e.name),Ur(w,e.name),Ur(m,e.name),Ur(f,e.name),Ur(p,e.name);const V=new wr({uid:v,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:x,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:b,createdAt:f,lastLoginAt:p});return E&&Array.isArray(E)&&(V.providerData=E.map(H=>Object.assign({},H))),m&&(V._redirectEventId=m),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new to;a.updateFromIdToken(r);const l=new wr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ip(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const x0=new Map;function Er(t){kr(t instanceof Function,"Expected a class definition");let e=x0.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x0.set(t,e),e)}/**
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
 */class _T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_T.type="NONE";const k0=_T;/**
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
 */function Fu(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(Er(k0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Er(k0);const o=Fu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=wr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
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
 */function D0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ST(e))return"Blackberry";if(AT(e))return"Webos";if(gg(e))return"Safari";if((e.includes("chrome/")||ET(e))&&!e.includes("edge/"))return"Chrome";if(IT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=lt()){return/firefox\//i.test(t)}function gg(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ET(t=lt()){return/crios\//i.test(t)}function TT(t=lt()){return/iemobile/i.test(t)}function IT(t=lt()){return/android/i.test(t)}function ST(t=lt()){return/blackberry/i.test(t)}function AT(t=lt()){return/webos/i.test(t)}function cd(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rD(t=lt()){var e;return cd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iD(){return _x()&&document.documentMode===10}function RT(t=lt()){return cd(t)||IT(t)||AT(t)||ST(t)||/windows phone/i.test(t)||TT(t)}function sD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function CT(t,e=[]){let n;switch(t){case"Browser":n=D0(lt());break;case"Worker":n=`${D0(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${r}`}/**
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
 */class oD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function aD(t,e={}){return Ti(t,"GET","/v2/passwordPolicy",Ei(t,e))}/**
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
 */const lD=6;class uD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class cD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b0(this),this.idTokenSubscription=new b0(this),this.beforeStateQueue=new oD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yT(this,{idToken:e}),r=await wr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Sr(this));const n=e?wt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aD(this),n=new uD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$k(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ps(t){return wt(t)}class b0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ax(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dD(t){dd=t}function PT(t){return dd.loadJS(t)}function hD(){return dd.recaptchaEnterpriseScript}function fD(){return dd.gapiScript}function pD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mD="recaptcha-enterprise",gD="NO_RECAPTCHA";class yD{constructor(e){this.type=mD,this.auth=ps(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Gk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Kk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;C0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(gD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&C0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hD();l.length!==0&&(l+=a),PT(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function N0(t,e,n,r=!1){const i=new yD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function vD(t,e){const n=fs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xi(s,e??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:e})}function _D(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wD(t,e,n){const r=ps(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xT(e),{host:o,port:a}=ED(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TD()}function xT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ED(t){const e=xT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:O0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:O0(o)}}}function O0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function ID(t,e){return Ti(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function SD(t,e){return Il(t,"POST","/v1/accounts:signInWithPassword",Ei(t,e))}/**
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
 */async function AD(t,e){return Il(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,e))}async function RD(t,e){return Il(t,"POST","/v1/accounts:signInWithEmailLink",Ei(t,e))}/**
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
 */class el extends yg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new el(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new el(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sp(e,n,"signInWithPassword",SD);case"emailLink":return AD(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sp(e,r,"signUpPassword",ID);case"emailLink":return RD(e,{idToken:n,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ro(t,e){return Il(t,"POST","/v1/accounts:signInWithIdp",Ei(t,e))}/**
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
 */const CD="http://localhost";class es extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new es(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:CD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=El(n)}return e}}/**
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
 */function PD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xD(t){const e=la(ua(t)).link,n=e?la(ua(e)).deep_link_id:null,r=la(ua(t)).deep_link_id;return(r?la(ua(r)).link:null)||r||n||e||t}class vg{constructor(e){var n,r,i,s,o,a;const l=la(ua(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=PD((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xD(e);try{return new vg(n)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,n){return el._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vg.parseLink(n);return te(r,"argument-error"),el._fromEmailAndCode(e,r.code,r.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends kT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Sl{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Gr extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
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
 */class Qr extends Sl{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends Sl{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function kD(t,e){return Il(t,"POST","/v1/accounts:signUp",Ei(t,e))}/**
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
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wr._fromIdTokenResponse(e,r,i),o=L0(r);return new ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=L0(r);return new ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function L0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ec extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ec(e,n,r,i)}}function DT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(t,s,e,r):s})}async function DD(t,e,n=!1){const r=await Za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
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
 */async function bD(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Sr(r));const i="reauthenticate";try{const s=await Za(t,DT(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=mg(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fn(r,"user-mismatch"),s}}/**
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
 */async function bT(t,e,n=!1){if(Xn(t.app))return Promise.reject(Sr(t));const r="signIn",i=await DT(t,r,e),s=await ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ND(t,e){return bT(ps(t),e)}/**
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
 */async function NT(t){const e=ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OD(t,e,n){if(Xn(t.app))return Promise.reject(Sr(t));const r=ps(t),o=await Sp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&NT(t),l}),a=await ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function LD(t,e,n){return Xn(t.app)?Promise.reject(Sr(t)):ND(wt(t),No.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&NT(t),r})}function MD(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function VD(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const Tc="__sak";/**
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
 */class OT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FD(){const t=lt();return gg(t)||cd(t)}const $D=1e3,jD=10;class LT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FD()&&sD(),this.fallbackToPolling=RT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LT.type="LOCAL";const UD=LT;/**
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
 */class MT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MT.type="SESSION";const VT=MT;/**
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
 */function zD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await zD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hd.receivers=[];/**
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
 */function _g(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_g("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sr(){return window}function HD(t){sr().location.href=t}/**
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
 */function FT(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function qD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KD(){return FT()?self:null}/**
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
 */const $T="firebaseLocalStorageDb",GD=1,Ic="firebaseLocalStorage",jT="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fd(t,e){return t.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function QD(){const t=indexedDB.deleteDatabase($T);return new Al(t).toPromise()}function Ap(){const t=indexedDB.open($T,GD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ic,{keyPath:jT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ic)?e(r):(r.close(),await QD(),e(await Ap()))})})}async function M0(t,e,n){const r=fd(t,!0).put({[jT]:e,value:n});return new Al(r).toPromise()}async function YD(t,e){const n=fd(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function V0(t,e){const n=fd(t,!0).delete(e);return new Al(n).toPromise()}const JD=800,XD=3;class UT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hd._getInstance(KD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qD(),!this.activeServiceWorker)return;this.sender=new BD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ap();return await M0(e,Tc,"1"),await V0(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>M0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fd(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UT.type="LOCAL";const ZD=UT;new Tl(3e4,6e4);/**
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
 */function eb(t,e){return e?Er(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tb(t){return bT(t.auth,new wg(t),t.bypassAuthState)}function nb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),bD(n,new wg(t),t.bypassAuthState)}async function rb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),DD(n,new wg(t),t.bypassAuthState)}/**
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
 */class zT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tb;case"linkViaPopup":case"linkViaRedirect":return rb;case"reauthViaPopup":case"reauthViaRedirect":return nb;default:Fn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ib=new Tl(2e3,1e4);class Hs extends zT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=_g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ib.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const sb="pendingRedirect",$u=new Map;class ob extends zT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const r=await ab(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ab(t,e){const n=cb(e),r=ub(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lb(t,e){$u.set(t._key(),e)}function ub(t){return Er(t._redirectPersistence)}function cb(t){return Fu(sb,t.config.apiKey,t.name)}async function db(t,e,n=!1){if(Xn(t.app))return Promise.reject(Sr(t));const r=ps(t),i=eb(r,e),o=await new ob(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hb=10*60*1e3;class fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hb&&this.cachedEventUids.clear(),this.cachedEventUids.has(F0(e))}saveEventToCache(e){this.cachedEventUids.add(F0(e)),this.lastProcessedEventTime=Date.now()}}function F0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BT(t);default:return!1}}/**
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
 */async function mb(t,e={}){return Ti(t,"GET","/v1/projects",e)}/**
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
 */const gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yb=/^https?/;async function vb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mb(t);for(const n of e)try{if(_b(n))return}catch{}Fn(t,"unauthorized-domain")}function _b(t){const e=Tp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yb.test(n))return!1;if(gb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wb=new Tl(3e4,6e4);function $0(){const t=sr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Eb(t){return new Promise((e,n)=>{var r,i,s;function o(){$0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$0(),n(ir(t,"network-request-failed"))},timeout:wb.get()})}if(!((i=(r=sr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sr().gapi)===null||s===void 0)&&s.load)o();else{const a=pD("iframefcb");return sr()[a]=()=>{gapi.load?o():n(ir(t,"network-request-failed"))},PT(`${fD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ju=null,e})}let ju=null;function Tb(t){return ju=ju||Eb(t),ju}/**
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
 */const Ib=new Tl(5e3,15e3),Sb="__/auth/iframe",Ab="emulator/auth/iframe",Rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pb(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pg(e,Ab):`https://${t.config.authDomain}/${Sb}`,r={apiKey:e.apiKey,appName:t.name,v:bo},i=Cb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${El(r).slice(1)}`}async function xb(t){const e=await Tb(t),n=sr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:Pb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ir(t,"network-request-failed"),a=sr().setTimeout(()=>{s(o)},Ib.get());function l(){sr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Db=500,bb=600,Nb="_blank",Ob="http://localhost";class j0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lb(t,e,n,r=Db,i=bb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=lt().toLowerCase();n&&(a=ET(u)?Nb:n),wT(u)&&(e=e||Ob,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[y,_])=>`${h}${y}=${_},`,"");if(rD(u)&&a!=="_self")return Mb(e||"",a),new j0(null);const d=window.open(e||"",a,c);te(d,t,"popup-blocked");try{d.focus()}catch{}return new j0(d)}function Mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Vb="__/auth/handler",Fb="emulator/auth/handler",$b=encodeURIComponent("fac");async function U0(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:i};if(e instanceof kT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Sl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${$b}=${encodeURIComponent(l)}`:"";return`${jb(t)}?${El(a).slice(1)}${u}`}function jb({config:t}){return t.emulator?pg(t,Fb):`https://${t.authDomain}/${Vb}`}/**
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
 */const tf="webStorageSupport";class Ub{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VT,this._completeRedirectFn=db,this._overrideRedirectResult=lb}async _openPopup(e,n,r,i){var s;kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await U0(e,n,r,Tp(),i);return Lb(e,o,_g())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await U0(e,n,r,Tp(),i);return HD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xb(e),r=new fb(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tf,{type:tf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tf];o!==void 0&&n(!!o),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RT()||gg()||cd()}}const zb=Ub;var z0="@firebase/auth",B0="1.7.1";/**
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
 */class Bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qb(t){ur(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CT(t)},u=new cD(r,i,s,l);return _D(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ur(new Vn("auth-internal",e=>{const n=ps(e.getProvider("auth").getImmediate());return(r=>new Bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(z0,B0,Hb(t)),Sn(z0,B0,"esm2017")}/**
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
 */const Wb=5*60,Kb=rT("authIdTokenMaxAge")||Wb;let H0=null;const Gb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kb)return;const i=n==null?void 0:n.token;H0!==i&&(H0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rl(t=dg()){const e=fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vD(t,{popupRedirectResolver:zb,persistence:[ZD,UD,VT]}),r=rT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Gb(s.toString());VD(n,o,()=>o(n.currentUser)),MD(n,a=>o(a))}}const i=tT("auth");return i&&wD(n,`http://${i}`),n}function Qb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ir("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qb("Browser");const HT="@firebase/installations",Eg="0.6.6";/**
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
 */const qT=1e4,WT=`w:${Eg}`,KT="FIS_v2",Yb="https://firebaseinstallations.googleapis.com/v1",Jb=60*60*1e3,Xb="installations",Zb="Installations";/**
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
 */const e2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ns=new hs(Xb,Zb,e2);function GT(t){return t instanceof Bn&&t.code.includes("request-failed")}/**
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
 */function QT({projectId:t}){return`${Yb}/projects/${t}/installations`}function YT(t){return{token:t.token,requestStatus:2,expiresIn:n2(t.expiresIn),creationTime:Date.now()}}async function JT(t,e){const r=(await e.json()).error;return ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function t2(t,{refreshToken:e}){const n=XT(t);return n.append("Authorization",r2(e)),n}async function ZT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function n2(t){return Number(t.replace("s","000"))}function r2(t){return`${KT} ${t}`}/**
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
 */async function i2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=QT(t),i=XT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:KT,appId:t.appId,sdkVersion:WT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ZT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:YT(u.authToken)}}else throw await JT("Create Installation",l)}/**
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
 */function eI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function s2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const o2=/^[cdef][\w-]{21}$/,Rp="";function a2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=l2(t);return o2.test(n)?n:Rp}catch{return Rp}}function l2(t){return s2(t).substr(0,22)}/**
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
 */function pd(t){return`${t.appName}!${t.appId}`}/**
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
 */const tI=new Map;function nI(t,e){const n=pd(t);rI(n,e),u2(n,e)}function rI(t,e){const n=tI.get(t);if(n)for(const r of n)r(e)}function u2(t,e){const n=c2();n&&n.postMessage({key:t,fid:e}),d2()}let Mi=null;function c2(){return!Mi&&"BroadcastChannel"in self&&(Mi=new BroadcastChannel("[Firebase] FID Change"),Mi.onmessage=t=>{rI(t.data.key,t.data.fid)}),Mi}function d2(){tI.size===0&&Mi&&(Mi.close(),Mi=null)}/**
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
 */const h2="firebase-installations-database",f2=1,rs="firebase-installations-store";let nf=null;function Tg(){return nf||(nf=aT(h2,f2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),nf}async function Sc(t,e){const n=pd(t),i=(await Tg()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&nI(t,e.fid),e}async function iI(t){const e=pd(t),r=(await Tg()).transaction(rs,"readwrite");await r.objectStore(rs).delete(e),await r.done}async function md(t,e){const n=pd(t),i=(await Tg()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&nI(t,a.fid),a}/**
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
 */async function Ig(t){let e;const n=await md(t.appConfig,r=>{const i=p2(r),s=m2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function p2(t){const e=t||{fid:a2(),registrationStatus:0};return sI(e)}function m2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ns.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=g2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:y2(t)}:{installationEntry:e}}async function g2(t,e){try{const n=await i2(t,e);return Sc(t.appConfig,n)}catch(n){throw GT(n)&&n.customData.serverCode===409?await iI(t.appConfig):await Sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function y2(t){let e=await q0(t.appConfig);for(;e.registrationStatus===1;)await eI(100),e=await q0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ig(t);return r||n}return e}function q0(t){return md(t,e=>{if(!e)throw ns.create("installation-not-found");return sI(e)})}function sI(t){return v2(t)?{fid:t.fid,registrationStatus:0}:t}function v2(t){return t.registrationStatus===1&&t.registrationTime+qT<Date.now()}/**
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
 */async function _2({appConfig:t,heartbeatServiceProvider:e},n){const r=w2(t,n),i=t2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:WT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ZT(()=>fetch(r,a));if(l.ok){const u=await l.json();return YT(u)}else throw await JT("Generate Auth Token",l)}function w2(t,{fid:e}){return`${QT(t)}/${e}/authTokens:generate`}/**
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
 */async function Sg(t,e=!1){let n;const r=await md(t.appConfig,s=>{if(!oI(s))throw ns.create("not-registered");const o=s.authToken;if(!e&&I2(o))return s;if(o.requestStatus===1)return n=E2(t,e),s;{if(!navigator.onLine)throw ns.create("app-offline");const a=A2(s);return n=T2(t,a),a}});return n?await n:r.authToken}async function E2(t,e){let n=await W0(t.appConfig);for(;n.authToken.requestStatus===1;)await eI(100),n=await W0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Sg(t,e):r}function W0(t){return md(t,e=>{if(!oI(e))throw ns.create("not-registered");const n=e.authToken;return R2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function T2(t,e){try{const n=await _2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Sc(t.appConfig,r),n}catch(n){if(GT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sc(t.appConfig,r)}throw n}}function oI(t){return t!==void 0&&t.registrationStatus===2}function I2(t){return t.requestStatus===2&&!S2(t)}function S2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jb}function A2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function R2(t){return t.requestStatus===1&&t.requestTime+qT<Date.now()}/**
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
 */async function C2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ig(e);return r?r.catch(console.error):Sg(e).catch(console.error),n.fid}/**
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
 */async function P2(t,e=!1){const n=t;return await x2(n),(await Sg(n,e)).token}async function x2(t){const{registrationPromise:e}=await Ig(t);e&&await e}/**
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
 */function k2(t){if(!t||!t.options)throw rf("App Configuration");if(!t.name)throw rf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw rf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function rf(t){return ns.create("missing-app-config-values",{valueName:t})}/**
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
 */const aI="installations",D2="installations-internal",b2=t=>{const e=t.getProvider("app").getImmediate(),n=k2(e),r=fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},N2=t=>{const e=t.getProvider("app").getImmediate(),n=fs(e,aI).getImmediate();return{getId:()=>C2(n),getToken:i=>P2(n,i)}};function O2(){ur(new Vn(aI,b2,"PUBLIC")),ur(new Vn(D2,N2,"PRIVATE"))}O2();Sn(HT,Eg);Sn(HT,Eg,"esm2017");/**
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
 */const Ac="analytics",L2="firebase_id",M2="origin",V2=60*1e3,F2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ag="https://www.googletagmanager.com/gtag/js";/**
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
 */const sn=new ud("@firebase/analytics");/**
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
 */const $2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new hs("analytics","Analytics",$2);/**
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
 */function j2(t){if(!t.startsWith(Ag)){const e=cn.create("invalid-gtag-resource",{gtagURL:t});return sn.warn(e.message),""}return t}function lI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function U2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function z2(t,e){const n=U2("firebase-js-sdk-policy",{createScriptURL:j2}),r=document.createElement("script"),i=`${Ag}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function B2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function H2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await lI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){sn.error(a)}t("config",i,s)}async function q2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await lI(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){sn.error(s)}}function W2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await q2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await H2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){sn.error(a)}}return i}function K2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=W2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function G2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ag)&&n.src.includes(t))return n;return null}/**
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
 */const Q2=30,Y2=1e3;class J2{constructor(e={},n=Y2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uI=new J2;function X2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Z2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:X2(r)},s=F2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eN(t,e=uI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw cn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw cn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new rN;return setTimeout(async()=>{a.abort()},n!==void 0?n:V2),cI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function cI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=uI){var s;const{appId:o,measurementId:a}=t;try{await tN(r,e)}catch(l){if(a)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Z2(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!nN(u)){if(i.deleteThrottleMetadata(o),a)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?y0(n,i.intervalMillis,Q2):y0(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),sn.debug(`Calling attemptFetch again in ${c} millis`),cI(t,d,r,i)}}function tN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nN(t){if(!(t instanceof Bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function sN(){if(ld())try{await ug()}catch(t){return sn.warn(cn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return sn.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oN(t,e,n,r,i,s,o){var a;const l=eN(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>sn.error(y)),e.push(l);const u=sN().then(y=>{if(y)return r.getId()}),[c,d]=await Promise.all([l,u]);G2(s)||z2(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[M2]="firebase",h.update=!0,d!=null&&(h[L2]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class aN{constructor(e){this.app=e}_delete(){return delete Aa[this.app.options.appId],Promise.resolve()}}let Aa={},K0=[];const G0={};let sf="dataLayer",lN="gtag",Q0,dI,Y0=!1;function uN(){const t=[];if(lg()&&t.push("This is a browser extension environment."),iT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=cn.create("invalid-analytics-context",{errorInfo:e});sn.warn(n.message)}}function cN(t,e,n){uN();const r=t.options.appId;if(!r)throw cn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(Aa[r]!=null)throw cn.create("already-exists",{id:r});if(!Y0){B2(sf);const{wrappedGtag:s,gtagCore:o}=K2(Aa,K0,G0,sf,lN);dI=s,Q0=o,Y0=!0}return Aa[r]=oN(t,K0,G0,e,Q0,sf,n),new aN(t)}function dN(t=dg()){t=wt(t);const e=fs(t,Ac);return e.isInitialized()?e.getImmediate():hN(t)}function hN(t,e={}){const n=fs(t,Ac);if(n.isInitialized()){const i=n.getImmediate();if(Xi(e,n.getOptions()))return i;throw cn.create("already-initialized")}return n.initialize({options:e})}async function fN(){if(lg()||!iT()||!ld())return!1;try{return await ug()}catch{return!1}}function pN(t,e,n,r){t=wt(t),iN(dI,Aa[t.app.options.appId],e,n,r).catch(i=>sn.error(i))}const J0="@firebase/analytics",X0="0.10.2";function mN(){ur(new Vn(Ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cN(r,i,n)},"PUBLIC")),ur(new Vn("analytics-internal",t,"PRIVATE")),Sn(J0,X0),Sn(J0,X0,"esm2017");function t(e){try{const n=e.getProvider(Ac).getImmediate();return{logEvent:(r,i,s)=>pN(n,r,i,s)}}catch(n){throw cn.create("interop-component-reg-failed",{reason:n})}}}mN();var gN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,Rg=Rg||{},se=gN||self;function gd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Cl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yN(t){return Object.prototype.hasOwnProperty.call(t,of)&&t[of]||(t[of]=++vN)}var of="closure_uid_"+(1e9*Math.random()>>>0),vN=0;function _N(t,e,n){return t.call.apply(t.bind,arguments)}function wN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=_N:jt=wN,jt.apply(null,arguments)}function mu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ii(){this.s=this.s,this.o=this.o}var EN=0;Ii.prototype.s=!1;Ii.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),EN!=0)&&yN(this)};Ii.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Z0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ut.prototype.h=function(){this.defaultPrevented=!0};var TN=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function tl(t){return/^[\s\xa0]*$/.test(t)}function yd(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Jn(t){return yd().indexOf(t)!=-1}function Pg(t){return Pg[" "](t),t}Pg[" "]=function(){};function IN(t,e){var n=mO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var SN=Jn("Opera"),go=Jn("Trident")||Jn("MSIE"),fI=Jn("Edge"),Cp=fI||go,pI=Jn("Gecko")&&!(yd().toLowerCase().indexOf("webkit")!=-1&&!Jn("Edge"))&&!(Jn("Trident")||Jn("MSIE"))&&!Jn("Edge"),AN=yd().toLowerCase().indexOf("webkit")!=-1&&!Jn("Edge");function mI(){var t=se.document;return t?t.documentMode:void 0}var Pp;e:{var af="",lf=function(){var t=yd();if(pI)return/rv:([^\);]+)(\)|;)/.exec(t);if(fI)return/Edge\/([\d\.]+)/.exec(t);if(go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AN)return/WebKit\/(\S+)/.exec(t);if(SN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lf&&(af=lf?lf[1]:""),go){var uf=mI();if(uf!=null&&uf>parseFloat(af)){Pp=String(uf);break e}}Pp=af}var xp;if(se.document&&go){var e_=mI();xp=e_||parseInt(Pp,10)||void 0}else xp=void 0;var RN=xp;function nl(t,e){if(Ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pI){e:{try{Pg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.$.h.call(this)}}Tt(nl,Ut);var CN={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pl="closure_listenable_"+(1e6*Math.random()|0),PN=0;function xN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++PN,this.fa=this.ia=!1}function vd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function xg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function gI(t){const e={};for(const n in t)e[n]=t[n];return e}const t_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<t_.length;s++)n=t_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _d(t){this.src=t,this.g={},this.h=0}_d.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function kp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=hI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var kg="closure_lm_"+(1e6*Math.random()|0),cf={};function vI(t,e,n,r,i){if(r&&r.once)return wI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vI(t,e[s],n,r,i);return null}return n=Ng(n),t&&t[Pl]?t.O(e,n,Cl(r)?!!r.capture:!!r,i):_I(t,e,n,!1,r,i)}function _I(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Cl(i)?!!i.capture:!!i,a=bg(t);if(a||(t[kg]=a=new _d(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(TI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DN(){function t(n){return e.call(t.src,t.listener,n)}const e=bN;return t}function wI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wI(t,e[s],n,r,i);return null}return n=Ng(n),t&&t[Pl]?t.P(e,n,Cl(r)?!!r.capture:!!r,i):_I(t,e,n,!0,r,i)}function EI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)EI(t,e[s],n,r,i);else r=Cl(r)?!!r.capture:!!r,n=Ng(n),t&&t[Pl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dp(s,n,r,i),-1<n&&(vd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dp(e,n,r,i)),(n=-1<t?e[t]:null)&&Dg(n))}function Dg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pl])kp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(TI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bg(e))?(kp(n,t),n.h==0&&(n.src=null,e[kg]=null)):vd(t)}}}function TI(t){return t in cf?cf[t]:cf[t]="on"+t}function bN(t,e){if(t.fa)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Dg(t),t=n.call(r,e)}return t}function bg(t){return t=t[kg],t instanceof _d?t:null}var df="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ng(t){return typeof t=="function"?t:(t[df]||(t[df]=function(e){return t.handleEvent(e)}),t[df])}function Et(){Ii.call(this),this.i=new _d(this),this.S=this,this.J=null}Tt(Et,Ii);Et.prototype[Pl]=!0;Et.prototype.removeEventListener=function(t,e,n,r){EI(this,t,e,n,r)};function kt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ut(e,t);else if(e instanceof Ut)e.target=e.target||t;else{var i=e;e=new Ut(r,t),yI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=gu(o,r,!0,e)&&i}if(o=e.g=t,i=gu(o,r,!0,e)&&i,i=gu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=gu(o,r,!1,e)&&i}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vd(n[r]);delete t.g[e],t.h--}}this.J=null};Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function gu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Og=se.JSON.stringify;class NN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function ON(){var t=Lg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LN{constructor(){this.h=this.g=null}add(e,n){const r=II.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var II=new NN(()=>new MN,t=>t.reset());class MN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function FN(t){se.setTimeout(()=>{throw t},0)}let rl,il=!1,Lg=new LN,SI=()=>{const t=se.Promise.resolve(void 0);rl=()=>{t.then($N)}};var $N=()=>{for(var t;t=ON();){try{t.h.call(t.g)}catch(n){FN(n)}var e=II;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1};function wd(t,e){Et.call(this),this.h=t||1,this.g=e||se,this.j=jt(this.qb,this),this.l=Date.now()}Tt(wd,Et);U=wd.prototype;U.ga=!1;U.T=null;U.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(Mg(this),this.start()))}};U.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}U.N=function(){wd.$.N.call(this),Mg(this),delete this.g};function Vg(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function AI(t){t.g=Vg(()=>{t.g=null,t.i&&(t.i=!1,AI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jN extends Ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:AI(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sl(t){Ii.call(this),this.h=t,this.g={}}Tt(sl,Ii);var n_=[];function RI(t,e,n,r){Array.isArray(n)||(n&&(n_[0]=n.toString()),n=n_);for(var i=0;i<n.length;i++){var s=vI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function CI(t){xg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dg(e)},t),t.g={}}sl.prototype.N=function(){sl.$.N.call(this),CI(this)};sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ed(){this.g=!0}Ed.prototype.Ea=function(){this.g=!1};function UN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HN(t,n)+(r?" "+r:"")})}function BN(t,e){t.info(function(){return"TIMEOUT: "+e})}Ed.prototype.info=function(){};function HN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Og(n)}catch{return e}}var ms={},r_=null;function Td(){return r_=r_||new Et}ms.Ta="serverreachability";function PI(t){Ut.call(this,ms.Ta,t)}Tt(PI,Ut);function ol(t){const e=Td();kt(e,new PI(e))}ms.STAT_EVENT="statevent";function xI(t,e){Ut.call(this,ms.STAT_EVENT,t),this.stat=e}Tt(xI,Ut);function Wt(t){const e=Td();kt(e,new xI(e,t))}ms.Ua="timingevent";function kI(t,e){Ut.call(this,ms.Ua,t),this.size=e}Tt(kI,Ut);function xl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Id={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},DI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fg(){}Fg.prototype.h=null;function i_(t){return t.h||(t.h=t.i())}function bI(){}var kl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $g(){Ut.call(this,"d")}Tt($g,Ut);function jg(){Ut.call(this,"c")}Tt(jg,Ut);var bp;function Sd(){}Tt(Sd,Fg);Sd.prototype.g=function(){return new XMLHttpRequest};Sd.prototype.i=function(){return{}};bp=new Sd;function Dl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sl(this),this.P=qN,t=Cp?125:void 0,this.V=new wd(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new NI}function NI(){this.i=null,this.g="",this.h=!1}var qN=45e3,OI={},Np={};U=Dl.prototype;U.setTimeout=function(t){this.P=t};function Op(t,e,n){t.L=1,t.A=Rd(Dr(e)),t.u=n,t.S=!0,LI(t,null)}function LI(t,e){t.G=Date.now(),bl(t),t.B=Dr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),BI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new NI,t.g=cS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new jN(jt(t.Pa,t,t.g),t.O)),RI(t.U,t.g,"readystatechange",t.nb),e=t.I?gI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ol(),UN(t.j,t.v,t.B,t.m,t.W,t.u)}U.nb=function(t){t=t.target;const e=this.M;e&&Zn(t)==3?e.l():this.Pa(t)};U.Pa=function(t){try{if(t==this.g)e:{const c=Zn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Cp||this.g&&(this.h.h||this.g.ja()||l_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?ol(3):ol(2)),Ad(this);var n=this.g.da();this.ca=n;t:if(MI(this)){var r=l_(this.g);t="";var i=r.length,s=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vi(this),Ra(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,zN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tl(a)){var u=a;break t}}u=null}if(n=u)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lp(this,n);else{this.i=!1,this.s=3,Wt(12),Vi(this),Ra(this);break e}}this.S?(VI(this,c,o),Cp&&this.i&&c==3&&(RI(this.U,this.V,"tick",this.mb),this.V.start())):(qs(this.j,this.m,o,null),Lp(this,o)),c==4&&Vi(this),this.i&&!this.J&&(c==4?oS(this.l,this):(this.i=!1,bl(this)))}else hO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Wt(12)):(this.s=0,Wt(13)),Vi(this),Ra(this)}}}catch{}finally{}};function MI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function VI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=WN(t,n),i==Np){e==4&&(t.s=4,Wt(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==OI){t.s=4,Wt(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),Lp(t,i);MI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wg(e),e.M=!0,Wt(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),Vi(t),Ra(t))}U.mb=function(){if(this.g){var t=Zn(this.g),e=this.g.ja();this.o<e.length&&(Ad(this),VI(this,t,e),this.i&&t!=4&&bl(this))}};function WN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Np:(n=Number(e.substring(n,r)),isNaN(n)?OI:(r+=1,r+n>e.length?Np:(e=e.slice(r,r+n),t.o=r+n,e)))}U.cancel=function(){this.J=!0,Vi(this)};function bl(t){t.Y=Date.now()+t.P,FI(t,t.P)}function FI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=xl(jt(t.lb,t),e)}function Ad(t){t.C&&(se.clearTimeout(t.C),t.C=null)}U.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(BN(this.j,this.B),this.L!=2&&(ol(),Wt(17)),Vi(this),this.s=2,Ra(this)):FI(this,this.Y-t)};function Ra(t){t.l.H==0||t.J||oS(t.l,t)}function Vi(t){Ad(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Mg(t.V),CI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Lp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mp(n.i,t))){if(!t.K&&Mp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pc(n),kd(n);else break e;qg(n),Wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xl(jt(n.ib,n),6e3));if(1>=WI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Fi(n,11)}else if((t.K||n.g==t)&&Pc(n),!tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ug(s,s.h),s.h=null))}if(r.F){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Fe(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=uS(r,r.J?r.pa:null,r.Y),o.K){KI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ad(a),bl(a)),r.g=o}else iS(r);0<n.j.length&&Dd(n)}else u[0]!="stop"&&u[0]!="close"||Fi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fi(n,7):Hg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ol(4)}catch{}}function KN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $I(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GN(t),r=KN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var jI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qi){this.h=t.h,Rc(this,t.j),this.s=t.s,this.g=t.g,Cc(this,t.m),this.l=t.l;var e=t.i,n=new al;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),s_(this,n),this.o=t.o}else t&&(e=String(t).match(jI))?(this.h=!1,Rc(this,e[1]||"",!0),this.s=ca(e[2]||""),this.g=ca(e[3]||"",!0),Cc(this,e[4]),this.l=ca(e[5]||"",!0),s_(this,e[6]||"",!0),this.o=ca(e[7]||"")):(this.h=!1,this.i=new al(null,this.h))}qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(da(e,o_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(da(e,o_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(da(n,n.charAt(0)=="/"?XN:JN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",da(n,eO)),t.join("")};function Dr(t){return new qi(t)}function Rc(t,e,n){t.j=n?ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function s_(t,e,n){e instanceof al?(t.i=e,tO(t.i,t.h)):(n||(e=da(e,ZN)),t.i=new al(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Rd(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function da(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var o_=/[#\/\?@]/g,JN=/[#\?:]/g,XN=/[#\?]/g,ZN=/[#\?@]/g,eO=/#/g;function al(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Si(t){t.g||(t.g=new Map,t.h=0,t.i&&QN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=al.prototype;U.add=function(t,e){Si(this),this.i=null,t=Oo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function UI(t,e){Si(t),e=Oo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zI(t,e){return Si(t),e=Oo(t,e),t.g.has(e)}U.forEach=function(t,e){Si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.ta=function(){Si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.Z=function(t){Si(this);let e=[];if(typeof t=="string")zI(this,t)&&(e=e.concat(this.g.get(Oo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Si(this),this.i=null,t=Oo(this,t),zI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function BI(t,e,n){UI(t,e),0<n.length&&(t.i=null,t.g.set(Oo(t,e),Cg(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Oo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tO(t,e){e&&!t.j&&(Si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(UI(this,r),BI(this,i,n))},t)),t.j=e}var nO=class{constructor(t,e){this.g=t,this.map=e}};function HI(t){this.l=t||rO,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rO=10;function qI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function WI(t){return t.h?1:t.g?t.g.size:0}function Mp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ug(t,e){t.g?t.g.add(e):t.h=e}function KI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}HI.prototype.cancel=function(){if(this.i=GI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cg(t.i)}var iO=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function sO(){this.g=new iO}function oO(t,e,n){const r=n||"";try{$I(t,function(i,s){let o=i;Cl(i)&&(o=Og(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function aO(t,e){const n=new Ed;if(se.Image){const r=new Image;r.onload=mu(yu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mu(yu,n,r,"TestLoadImage: error",!1,e),r.onabort=mu(yu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mu(yu,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Cd(t){this.l=t.ec||null,this.j=t.ob||!1}Tt(Cd,Fg);Cd.prototype.g=function(){return new Pd(this.l,this.j)};Cd.prototype.i=function(t){return function(){return t}}({});function Pd(t,e){Et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=zg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(Pd,Et);var zg=0;U=Pd.prototype;U.open=function(t,e){if(this.readyState!=zg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nl(this)),this.readyState=zg};U.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function QI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}U.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Nl(this):ll(this),this.readyState==3&&QI(this)}};U.Za=function(t){this.g&&(this.response=this.responseText=t,Nl(this))};U.Ya=function(t){this.g&&(this.response=t,Nl(this))};U.ka=function(){this.g&&Nl(this)};function Nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lO=se.JSON.parse;function Ze(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=YI,this.L=this.M=!1}Tt(Ze,Et);var YI="",uO=/^https?$/i,cO=["POST","PUT"];U=Ze.prototype;U.Oa=function(t){this.M=t};U.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bp.g(),this.C=this.u?i_(this.u):i_(bp),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){a_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=hI(cO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ZI(this),0<this.B&&((this.L=dO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=Vg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){a_(this,s)}};function dO(t){return go&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.ua=function(){typeof Rg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function a_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,JI(t),xd(t)}function JI(t){t.F||(t.F=!0,kt(t,"complete"),kt(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),xd(this))};U.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xd(this,!0)),Ze.$.N.call(this)};U.La=function(){this.s||(this.G||this.v||this.l?XI(this):this.kb())};U.kb=function(){XI(this)};function XI(t){if(t.h&&typeof Rg<"u"&&(!t.C[1]||Zn(t)!=4||t.da()!=2)){if(t.v&&Zn(t)==4)Vg(t.La,0,t);else if(kt(t,"readystatechange"),Zn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(jI)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!uO.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var s=2<Zn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",JI(t)}}finally{xd(t)}}}}function xd(t,e){if(t.g){ZI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function ZI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}U.isActive=function(){return!!this.g};function Zn(t){return t.g?t.g.readyState:0}U.da=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}};U.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lO(e)}};function l_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case YI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hO(t){const e={};t=(t.g&&2<=Zn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(tl(t[r]))continue;var n=VN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}kN(e,function(r){return r.join(", ")})}U.Ia=function(){return this.m};U.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eS(t){let e="";return xg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=eS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function Yo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function tS(t){this.Ga=0,this.j=[],this.l=new Ed,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yo("baseRetryDelayMs",5e3,t),this.hb=Yo("retryDelaySeedMs",1e4,t),this.eb=Yo("forwardChannelMaxRetries",2,t),this.xa=Yo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new HI(t&&t.concurrentRequestLimit),this.Ja=new sO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}U=tS.prototype;U.ra=8;U.H=1;function Hg(t){if(nS(t),t.H==3){var e=t.W++,n=Dr(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),Ol(t,n),e=new Dl(t,t.l,e),e.L=2,e.A=Rd(Dr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=cS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),bl(e)}lS(t)}function kd(t){t.g&&(Wg(t),t.g.cancel(),t.g=null)}function nS(t){kd(t),t.u&&(se.clearTimeout(t.u),t.u=null),Pc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Dd(t){if(!qI(t.i)&&!t.m){t.m=!0;var e=t.Na;rl||SI(),il||(rl(),il=!0),Lg.add(e,t),t.C=0}}function fO(t,e){return WI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=xl(jt(t.Na,t,e),aS(t,t.C)),t.C++,!0)}U.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Dl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=gI(s),yI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=rS(this,i,e),n=Dr(this.I),Fe(n,"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),Ol(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(eS(s)))+"&"+e:this.o&&Bg(n,this.o,s)),Ug(this.i,i),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),i.aa=!0,Op(i,n,null)):Op(i,n,e),this.H=2}}else this.H==3&&(t?u_(this,t):this.j.length==0||qI(this.i)||u_(this))};function u_(t,e){var n;e?n=e.m:n=t.W++;const r=Dr(t.I);Fe(r,"SID",t.K),Fe(r,"RID",n),Fe(r,"AID",t.V),Ol(t,r),t.o&&t.s&&Bg(r,t.o,t.s),n=new Dl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ug(t.i,n),Op(n,r,e)}function Ol(t,e){t.na&&xg(t.na,function(n,r){Fe(e,r,n)}),t.h&&$I({},function(n,r){Fe(e,r,n)})}function rS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?jt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{oO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function iS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rl||SI(),il||(rl(),il=!0),Lg.add(e,t),t.A=0}}function qg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=xl(jt(t.Ma,t),aS(t,t.A)),t.A++,!0)}U.Ma=function(){if(this.u=null,sS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xl(jt(this.jb,this),t)}};U.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Wt(10),kd(this),sS(this))};function Wg(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function sS(t){t.g=new Dl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Dr(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),Ol(t,e),t.o&&t.s&&Bg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Rd(Dr(e)),n.u=null,n.S=!0,LI(n,t)}U.ib=function(){this.v!=null&&(this.v=null,kd(this),qg(this),Wt(19))};function Pc(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function oS(t,e){var n=null;if(t.g==e){Pc(t),Wg(t),t.g=null;var r=2}else if(Mp(t.i,e))n=e.F,KI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Td(),kt(r,new kI(r,n)),Dd(t)}else iS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&fO(t,e)||r==2&&qg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function aS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Fi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=jt(t.pb,t);n||(n=new qi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||Rc(n,"https"),Rd(n)),aO(n.toString(),r)}else Wt(2);t.H=0,t.h&&t.h.za(e),lS(t),nS(t)}U.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Wt(2)):(this.l.info("Failed to ping google.com"),Wt(1))};function lS(t){if(t.H=0,t.ma=[],t.h){const e=GI(t.i);(e.length!=0||t.j.length!=0)&&(Z0(t.ma,e),Z0(t.ma,t.j),t.i.i.length=0,Cg(t.j),t.j.length=0),t.h.ya()}}function uS(t,e,n){var r=n instanceof qi?Dr(n):new qi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Cc(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new qi(null);r&&Rc(s,r),e&&(s.g=e),i&&Cc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Fe(r,n,e),Fe(r,"VER",t.ra),Ol(t,r),r}function cS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ze(new Cd({ob:n})):new Ze(t.va),e.Oa(t.J),e}U.isActive=function(){return!!this.h&&this.h.isActive(this)};function dS(){}U=dS.prototype;U.Ba=function(){};U.Aa=function(){};U.za=function(){};U.ya=function(){};U.isActive=function(){return!0};U.Va=function(){};function xc(){if(go&&!(10<=Number(RN)))throw Error("Environmental error: no available transport.")}xc.prototype.g=function(t,e){return new hn(t,e)};function hn(t,e){Et.call(this),this.g=new tS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Lo(this)}Tt(hn,Et);hn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=uS(t,null,t.Y),Dd(t)};hn.prototype.close=function(){Hg(this.g)};hn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Og(t),t=n);e.j.push(new nO(e.fb++,t)),e.H==3&&Dd(e)};hn.prototype.N=function(){this.g.h=null,delete this.j,Hg(this.g),delete this.g,hn.$.N.call(this)};function hS(t){$g.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Tt(hS,$g);function fS(){jg.call(this),this.status=1}Tt(fS,jg);function Lo(t){this.g=t}Tt(Lo,dS);Lo.prototype.Ba=function(){kt(this.g,"a")};Lo.prototype.Aa=function(t){kt(this.g,new hS(t))};Lo.prototype.za=function(t){kt(this.g,new fS)};Lo.prototype.ya=function(){kt(this.g,"b")};function pO(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Tt($n,pO);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}$n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)hf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){hf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){hf(this,r),i=0;break}}this.h=i,this.i+=e};$n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function xe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var mO={};function Kg(t){return-128<=t&&128>t?IN(t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function er(t){if(isNaN(t)||!isFinite(t))return io;if(0>t)return Ct(er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vp;return new xe(e,0)}function pS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ct(pS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=er(Math.pow(e,8)),r=io,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=er(Math.pow(e,s)),r=r.R(s).add(er(o))):(r=r.R(n),r=r.add(er(o)))}return r}var Vp=4294967296,io=Kg(0),Fp=Kg(1),c_=Kg(16777216);U=xe.prototype;U.ea=function(){if(wn(this))return-Ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vp+r)*e,e*=Vp}return t};U.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tr(this))return"0";if(wn(this))return"-"+Ct(this).toString(t);for(var e=er(Math.pow(t,6)),n=this,r="";;){var i=Dc(n,e).g;n=kc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};U.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function wn(t){return t.h==-1}U.X=function(t){return t=kc(this,t),wn(t)?-1:Tr(t)?0:1};function Ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new xe(n,~t.h).add(Fp)}U.abs=function(){return wn(this)?Ct(this):this};U.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function kc(t,e){return t.add(Ct(e))}U.R=function(t){if(Tr(this)||Tr(t))return io;if(wn(this))return wn(t)?Ct(this).R(Ct(t)):Ct(Ct(this).R(t));if(wn(t))return Ct(this.R(Ct(t)));if(0>this.X(c_)&&0>t.X(c_))return er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,vu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,vu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,vu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,vu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new xe(n,0)};function vu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Jo(t,e){this.g=t,this.h=e}function Dc(t,e){if(Tr(e))throw Error("division by zero");if(Tr(t))return new Jo(io,io);if(wn(t))return e=Dc(Ct(t),e),new Jo(Ct(e.g),Ct(e.h));if(wn(e))return e=Dc(t,Ct(e)),new Jo(Ct(e.g),e.h);if(30<t.g.length){if(wn(t)||wn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fp,r=e;0>=r.X(t);)n=d_(n),r=d_(r);var i=Ps(n,1),s=Ps(r,1);for(r=Ps(r,2),n=Ps(n,2);!Tr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ps(r,1),n=Ps(n,1)}return e=kc(t,i.R(e)),new Jo(i,e)}for(i=io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=er(n),o=s.R(e);wn(o)||0<o.X(t);)n-=r,s=er(n),o=s.R(e);Tr(s)&&(s=Fp),i=i.add(s),t=kc(t,o)}return new Jo(i,t)}U.gb=function(t){return Dc(this,t).h};U.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new xe(n,this.h&t.h)};U.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new xe(n,this.h|t.h)};U.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new xe(n,this.h^t.h)};function d_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new xe(n,t.h)}function Ps(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new xe(i,t.h)}xc.prototype.createWebChannel=xc.prototype.g;hn.prototype.send=hn.prototype.u;hn.prototype.open=hn.prototype.m;hn.prototype.close=hn.prototype.close;Id.NO_ERROR=0;Id.TIMEOUT=8;Id.HTTP_ERROR=6;DI.COMPLETE="complete";bI.EventType=kl;kl.OPEN="a";kl.CLOSE="b";kl.ERROR="c";kl.MESSAGE="d";Et.prototype.listen=Et.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=er;xe.fromString=pS;var gO=function(){return new xc},yO=function(){return Td()},ff=Id,vO=DI,_O=ms,h_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_u=bI,wO=Ze,EO=$n,so=xe;const f_="@firebase/firestore";/**
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
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */const is=new ud("@firebase/firestore");function Xo(){return is.logLevel}function j(t,...e){if(is.logLevel<=we.DEBUG){const n=e.map(Gg);is.debug(`Firestore (${Mo}): ${t}`,...n)}}function cr(t,...e){if(is.logLevel<=we.ERROR){const n=e.map(Gg);is.error(`Firestore (${Mo}): ${t}`,...n)}}function yo(t,...e){if(is.logLevel<=we.WARN){const n=e.map(Gg);is.warn(`Firestore (${Mo}): ${t}`,...n)}}function Gg(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function Me(t,e){t||ie()}function le(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class IO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SO{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new mS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Vt(e)}}class AO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new CO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ft(0,0))}static max(){return new oe(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends ul{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const kO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends ul{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return kO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G($e.fromString(e))}static fromName(e){return new G($e.fromString(e).popFirst(5))}static empty(){return new G($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new $e(e.slice()))}}function DO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new mi(i,G.empty(),e)}function bO(t){return new mi(t.readTime,t.key,-1)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(oe.min(),G.empty(),-1)}static max(){return new mi(oe.max(),G.empty(),-1)}}function NO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const OO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ll(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==OO)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Qg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new or,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ca(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Yg(r.target.error);this.V.reject(new Ca(e,i))}}static open(e,n,r,i){try{return new Qg(n,e.transaction(i,r))}catch(s){throw new Ca(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new VO(n)}}class $i{constructor(e,n,r){this.name=e,this.version=n,this.p=r,$i.S(lt())===12.2&&cr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),bi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ld())return!1;if($i.C())return!0;const e=lt(),n=$i.S(e),r=0<n&&n<10,i=$i.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ca(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ca(e,o))},i.onupgradeneeded=s=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Qg.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class MO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return bi(this.k.delete())}}class Ca extends B{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ml(t){return t.name==="IndexedDbTransactionError"}class VO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),bi(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),bi(this.store.add(e))}get(e){return bi(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),bi(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),bi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=Yg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new MO(a),u=n(a.primaryKey,a.value,l);if(u instanceof D){const c=u.catch(d=>(l.done(),D.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function bi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Yg(r.target.error);n(i)}})}let p_=!1;function Yg(t){const e=$i.S(lt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return p_||(p_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Jg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Jg._e=-1;function bd(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function FO(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function m_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Rt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Rt.RED,this.left=i??Rt.EMPTY,this.right=s??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new g_(this.data.getIterator())}getIteratorFrom(e){return new g_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dt(this.comparator);return n.data=e,n}}class g_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new Dt(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class vS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vS("Invalid base64 string: "+s):s}}(e);return new Bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const $O=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=$O.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
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
 */function Xg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zg(t){const e=t.mapValue.fields.__previous_value__;return Xg(e)?Zg(e):e}function cl(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class jO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xg(t)?4:UO(t)?9007199254740991:10:ie()}function dr(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),a=gi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ss(i.bytesValue).isEqual(ss(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return st(i.geoPointValue.latitude)===st(s.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return st(i.integerValue)===st(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=st(i.doubleValue),a=st(s.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(m_(o)!==m_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!dr(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function hl(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=st(s.integerValue||s.doubleValue),l=st(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return y_(t.timestampValue,e.timestampValue);case 4:return y_(cl(t),cl(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ss(s),l=ss(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Ce(a[u],l[u]);if(c!==0)return c}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ce(st(s.latitude),st(o.latitude));return a!==0?a:Ce(st(s.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=_o(a[u],l[u]);if(c)return c}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Eu.mapValue&&o===Eu.mapValue)return 0;if(s===Eu.mapValue)return 1;if(o===Eu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=Ce(l[d],c[d]);if(h!==0)return h;const y=_o(a[l[d]],u[c[d]]);if(y!==0)return y}return Ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ie()}}function y_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=gi(t),r=gi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function wo(t){return $p(t)}function $p(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$p(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$p(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function v_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jp(t){return!!t&&"integerValue"in t}function ey(t){return!!t&&"arrayValue"in t}function __(t){return!!t&&"nullValue"in t}function w_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function Pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=Pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Zt(Pa(this.value))}}function _S(t){const e=[];return gs(t.fields,(n,r)=>{const i=new Pt([n]);if(Uu(r)){const s=_S(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,oe.min(),oe.min(),oe.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,oe.min(),oe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,oe.min(),oe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nc{constructor(e,n){this.position=e,this.inclusive=n}}function E_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function T_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oc{constructor(e,n="asc"){this.field=e,this.dir=n}}function zO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wS{}class at extends wS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HO(e,n,r):n==="array-contains"?new KO(e,r):n==="in"?new GO(e,r):n==="not-in"?new QO(e,r):n==="array-contains-any"?new YO(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qO(e,r):new WO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends wS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new jn(e,n)}matches(e){return ES(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ES(t){return t.op==="and"}function TS(t){return BO(t)&&ES(t)}function BO(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Up(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+wo(t.value);if(TS(t))return t.filters.map(e=>Up(e)).join(",");{const e=t.filters.map(n=>Up(n)).join(",");return`${t.op}(${e})`}}function IS(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&dr(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IS(o,i.filters[a]),!0):!1}(t,e):void ie()}function SS(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(SS).join(" ,")+"}"}(t):"Filter"}class HO extends at{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class qO extends at{constructor(e,n){super(e,"in",n),this.keys=AS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WO extends at{constructor(e,n){super(e,"not-in",n),this.keys=AS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class KO extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ey(n)&&hl(n.arrayValue,this.value)}}class GO extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class QO extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hl(this.value.arrayValue,n)}}class YO extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ey(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
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
 */class JO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function I_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JO(t,e,n,r,i,s,o)}function ty(t){const e=le(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),bd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wo(r)).join(",")),e.ce=n}return e.ce}function ny(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!T_(t.startAt,e.startAt)&&T_(t.endAt,e.endAt)}function zp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function XO(t,e,n,r,i,s,o,a){return new Vl(t,e,n,r,i,s,o,a)}function ry(t){return new Vl(t)}function S_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RS(t){return t.collectionGroup!==null}function xa(t){const e=le(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Dt(Pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Oc(s,r))}),n.has(Pt.keyField().canonicalString())||e.le.push(new Oc(Pt.keyField(),r))}return e.le}function ar(t){const e=le(t);return e.he||(e.he=ZO(e,xa(t))),e.he}function ZO(t,e){if(t.limitType==="F")return I_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oc(i.field,s)});const n=t.endAt?new Nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nc(t.startAt.position,t.startAt.inclusive):null;return I_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bp(t,e){const n=t.filters.concat([e]);return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hp(t,e,n){return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nd(t,e){return ny(ar(t),ar(e))&&t.limitType===e.limitType}function CS(t){return`${ty(ar(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>SS(i)).join(", ")}]`),bd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wo(i)).join(",")),`Target(${r})`}(ar(t))}; limitType=${t.limitType})`}function Od(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=E_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,xa(r),i)||r.endAt&&!function(o,a,l){const u=E_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,xa(r),i))}(t,e)}function eL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PS(t){return(e,n)=>{let r=!1;for(const i of xa(t)){const s=tL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tL(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?_o(l,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yS(this.inner)}size(){return this.innerSize}}/**
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
 */const nL=new Ge(G.comparator);function br(){return nL}const xS=new Ge(G.comparator);function ha(...t){let e=xS;for(const n of t)e=e.insert(n.key,n);return e}function kS(t){let e=xS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ji(){return ka()}function DS(){return ka()}function ka(){return new Vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const rL=new Ge(G.comparator),iL=new Dt(G.comparator);function ye(...t){let e=iL;for(const n of t)e=e.add(n);return e}const sL=new Dt(Ce);function oL(){return sL}/**
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
 */function bS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function NS(t){return{integerValue:""+t}}function aL(t,e){return FO(e)?NS(e):bS(t,e)}/**
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
 */class Ld{constructor(){this._=void 0}}function lL(t,e,n){return t instanceof Lc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xg(s)&&(s=Zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Eo?LS(t,e):t instanceof To?MS(t,e):function(i,s){const o=OS(i,s),a=A_(o)+A_(i.Ie);return jp(o)&&jp(i.Ie)?NS(a):bS(i.serializer,a)}(t,e)}function uL(t,e,n){return t instanceof Eo?LS(t,e):t instanceof To?MS(t,e):n}function OS(t,e){return t instanceof Mc?function(r){return jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lc extends Ld{}class Eo extends Ld{constructor(e){super(),this.elements=e}}function LS(t,e){const n=VS(e);for(const r of t.elements)n.some(i=>dr(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends Ld{constructor(e){super(),this.elements=e}}function MS(t,e){let n=VS(e);for(const r of t.elements)n=n.filter(i=>!dr(i,r));return{arrayValue:{values:n}}}class Mc extends Ld{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function A_(t){return st(t.integerValue||t.doubleValue)}function VS(t){return ey(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class FS{constructor(e,n){this.field=e,this.transform=n}}function cL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof To&&i instanceof To?vo(r.elements,i.elements,dr):r instanceof Mc&&i instanceof Mc?dr(r.Ie,i.Ie):r instanceof Lc&&i instanceof Lc}(t.transform,e.transform)}class dL{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Md{}function $S(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iy(t.key,An.none()):new Fl(t.key,t.data,An.none());{const n=t.data,r=Zt.empty();let i=new Dt(Pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ai(t.key,r,new ln(i.toArray()),An.none())}}function hL(t,e,n){t instanceof Fl?function(i,s,o){const a=i.value.clone(),l=C_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ai?function(i,s,o){if(!zu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=C_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Fl?function(s,o,a,l){if(!zu(s.precondition,o))return a;const u=s.value.clone(),c=P_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ai?function(s,o,a,l){if(!zu(s.precondition,o))return a;const u=P_(s.fieldTransforms,l,o),c=o.data;return c.setAll(jS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return zu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function fL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OS(r.transform,i||null);s!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,s))}return n||null}function R_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vo(r,i,(s,o)=>cL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fl extends Md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends Md{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function C_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uL(o,a,n[i]))}return r}function P_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lL(s,o,e))}return r}class iy extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pL extends Md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=DS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$S(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,r)=>R_(n,r))&&vo(this.baseMutations,e.baseMutations,(n,r)=>R_(n,r))}}class sy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return rL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sy(e,n,r,i)}}/**
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
 */class gL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,Ee;function vL(t){switch(t){default:return ie();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function US(t){if(t===void 0)return cr("GRPC error has no .code"),k.UNKNOWN;switch(t){case it.OK:return k.OK;case it.CANCELLED:return k.CANCELLED;case it.UNKNOWN:return k.UNKNOWN;case it.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case it.INTERNAL:return k.INTERNAL;case it.UNAVAILABLE:return k.UNAVAILABLE;case it.UNAUTHENTICATED:return k.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case it.NOT_FOUND:return k.NOT_FOUND;case it.ALREADY_EXISTS:return k.ALREADY_EXISTS;case it.PERMISSION_DENIED:return k.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case it.ABORTED:return k.ABORTED;case it.OUT_OF_RANGE:return k.OUT_OF_RANGE;case it.UNIMPLEMENTED:return k.UNIMPLEMENTED;case it.DATA_LOSS:return k.DATA_LOSS;default:return ie()}}(Ee=it||(it={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _L(){return new TextEncoder}/**
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
 */const wL=new so([4294967295,4294967295],0);function x_(t){const e=_L().encode(t),n=new EO;return n.update(e),new Uint8Array(n.digest())}function k_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new so([n,r],0),new so([i,s],0)]}class oy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fa(`Invalid padding: ${n}`);if(r<0)throw new fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=so.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(so.fromNumber(r)));return i.compare(wL)===1&&(i=new so([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=x_(e),[r,i]=k_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new oy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=x_(e),[r,i]=k_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vd(oe.min(),i,new Ge(Ce),br(),ye())}}class $l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $l(r,n,ye(),ye(),ye())}}/**
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
 */class Bu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class zS{constructor(e,n){this.targetId=e,this.fe=n}}class BS{constructor(e,n,r=Bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class D_{constructor(){this.ge=0,this.pe=N_(),this.ye=Bt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ye(),n=ye(),r=ye();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new $l(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=N_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Me(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class EL{constructor(e){this.Be=e,this.ke=new Map,this.qe=br(),this.Qe=b_(),this.Ke=new Ge(Ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(zp(s))if(r===0){const o=new G(s.path);this.We(n,o,$t.newNoDocument(o,oe.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ss(r).toUint8Array()}catch(l){if(l instanceof vS)return yo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new oy(o,i,s)}catch(l){return yo(l instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&zp(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,$t.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ye();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Vd(e,n,this.Ke,this.qe,r);return this.qe=br(),this.Qe=b_(),this.Ke=new Ge(Ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new D_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Dt(Ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new D_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function b_(){return new Ge(G.comparator)}function N_(){return new Ge(G.comparator)}const TL={asc:"ASCENDING",desc:"DESCENDING"},IL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SL={and:"AND",or:"OR"};class AL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qp(t,e){return t.useProto3Json||bd(e)?e:{value:e}}function Vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RL(t,e){return Vc(t,e.toTimestamp())}function lr(t){return Me(!!t),oe.fromTimestamp(function(n){const r=gi(n);return new ft(r.seconds,r.nanos)}(t))}function ay(t,e){return Wp(t,e).canonicalString()}function Wp(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qS(t){const e=$e.fromString(t);return Me(YS(e)),e}function Kp(t,e){return ay(t.databaseId,e.path)}function pf(t,e){const n=qS(e);if(n.get(1)!==t.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(KS(n))}function WS(t,e){return ay(t.databaseId,e)}function CL(t){const e=qS(t);return e.length===4?$e.emptyPath():KS(e)}function Gp(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KS(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function O_(t,e,n){return{name:Kp(t,e),fields:n.value.mapValue.fields}}function PL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Me(c===void 0||typeof c=="string"),Bt.fromBase64String(c||"")):(Me(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Bt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:US(u.code);return new B(c,u.message||"")}(o);n=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pf(t,r.document.name),s=lr(r.document.updateTime),o=r.document.createTime?lr(r.document.createTime):oe.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Bu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pf(t,r.document),s=r.readTime?lr(r.readTime):oe.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pf(t,r.document),s=r.removedTargetIds||[];n=new Bu([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yL(i,s),a=r.targetId;n=new zS(a,o)}}return n}function xL(t,e){let n;if(e instanceof Fl)n={update:O_(t,e.key,e.value)};else if(e instanceof iy)n={delete:Kp(t,e.key)};else if(e instanceof Ai)n={update:O_(t,e.key,e.data),updateMask:FL(e.fieldMask)};else{if(!(e instanceof pL))return ie();n={verify:Kp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function kL(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?lr(i.updateTime):lr(s);return o.isEqual(oe.min())&&(o=lr(s)),new dL(o,i.transformResults||[])}(n,e))):[]}function DL(t,e){return{documents:[WS(t,e.path)]}}function bL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=WS(t,i);const s=function(u){if(u.length!==0)return QS(jn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:ks(h.field),direction:LL(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=qp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function NL(t){let e=CL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=GS(d);return h instanceof jn&&TS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(_){return new Oc(Ds(_.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,bd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,y=d.values||[];return new Nc(y,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,y=d.values||[];return new Nc(y,h)}(n.endAt)),XO(e,i,o,s,a,"F",l,u)}function OL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>GS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function LL(t){return TL[t]}function ML(t){return IL[t]}function VL(t){return SL[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Ds(t){return Pt.fromServerFormat(t.fieldPath)}function QS(t){return t instanceof at?function(n){if(n.op==="=="){if(w_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(__(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(w_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(__(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:ML(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>QS(i));return r.length===1?r[0]:{compositeFilter:{op:VL(n.op),filters:r}}}(t):ie()}function FL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $L{constructor(e){this.ct=e}}function jL(t){const e=NL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hp(e,e.limit,"L"):e}/**
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
 */class UL{constructor(){this._n=new zL}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(mi.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class zL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Dt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Dt($e.comparator)).toArray()}}/**
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
 */class BL{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,ln.empty(),ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ha();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=br();const o=ka(),a=function(){return ka()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ai)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Da(c.mutation,u,c.mutation.getFieldMask(),ft.now())):o.set(u.key,ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new HL(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new Ge((o,a)=>o-a),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ln.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=DS();c.forEach(h=>{if(!s.has(h)){const y=$S(n.get(h),r.get(h));y!==null&&d.set(h,y),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(ji());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ye())).next(c=>({batchId:a,changes:kS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ha();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ha();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const u=function(d,h){return new Vl(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,$t.newInvalidDocument(c)))});let a=ha();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Da(c.mutation,u,ln.empty(),ft.now()),Od(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class WL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:lr(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:jL(i.bundledQuery),readTime:lr(i.readTime)}}(n)),D.resolve()}}/**
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
 */class KL{constructor(){this.overlays=new Ge(G.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ji();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=ji(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ji(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ji(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gL(n,r));let s=this.hr.get(n);s===void 0&&(s=ye(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class ly{constructor(){this.Pr=new Dt(yt.Ir),this.Tr=new Dt(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new yt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new $e([])),r=new yt(n,e),i=new yt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new $e([])),r=new yt(n,e),i=new yt(n,e+1);let s=ye();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new yt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class GL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Dt(yt.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new yt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Dt(Ce);return n.forEach(i=>{const s=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new yt(new G(s),0);let a=new Dt(Ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new yt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new yt(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QL{constructor(e){this.vr=e,this.docs=function(){return new Ge(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=br();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NO(bO(c),r)<=0||(i.has(c.key)||Od(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YL(this)}getSize(e){return D.resolve(this.size)}}class YL extends BL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class JL{constructor(e){this.persistence=e,this.Mr=new Vo(n=>ty(n),ny),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ly,this.targetCount=0,this.Lr=Io.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Io(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class XL{constructor(e,n){this.Br={},this.overlays={},this.kr=new Jg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new JL(this),this.indexManager=new UL,this.remoteDocumentCache=function(i){return new QL(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $L(n),this.$r=new WL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new GL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new ZL(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ZL extends LO{constructor(e){super(),this.currentSequenceNumber=e}}class uy{constructor(e){this.persistence=e,this.zr=new ly,this.jr=null}static Hr(e){return new uy(e)}get Jr(){if(this.jr)return this.jr;throw ie()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class cy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cy(e,n.fromCache,r,i)}}/**
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
 */class eM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wx()?8:$i.v(lt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eM;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Xo()<=we.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Xo()<=we.DEBUG&&j("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xo()<=we.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(n))):D.resolve())}ji(e,n){if(S_(n))return D.resolve(null);let r=ar(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hp(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Hp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return S_(n)||i.isEqual(oe.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(Xo()<=we.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xs(n)),this.es(e,o,n,DO(i,-1)).next(a=>a))})}Zi(e,n){let r=new Dt(PS(e));return n.forEach((i,s)=>{Od(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Xo()<=we.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",xs(n)),this.zi.getDocumentsMatchingQuery(e,n,mi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nM{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ge(Ce),this.rs=new Vo(s=>ty(s),ny),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function rM(t,e,n,r){return new nM(t,e,n,r)}async function JS(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ye();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function iM(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let y=D.resolve();return h.forEach(_=>{y=y.next(()=>c.getEntry(l,_)).next(w=>{const m=u.docVersions.get(_);Me(m!==null),w.version.compareTo(m)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XS(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function sM(t,e){const n=le(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let y=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Bt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(d,y),function(w,m,f){return w.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(h,y,c)&&a.push(n.Qr.updateTargetData(s,y))});let l=br(),u=ye();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(oM(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(oe.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function oM(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=br();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function aM(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lM(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Qp(t,e,n){const r=le(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ml(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function L_(t,e,n){const r=le(t);let i=oe.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=le(l),h=d.rs.get(c);return h!==void 0?D.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,ar(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:ye())).next(a=>(uM(r,eL(e),a),{documents:a,hs:s})))}function uM(t,e,n){let r=t.ss.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class M_{constructor(){this.activeTargetIds=oL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cM{constructor(){this.no=new M_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new M_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dM{io(e){}shutdown(){}}/**
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
 */class V_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Tu=null;function mf(){return Tu===null?Tu=function(){return 268435456+Math.round(2147483648*Math.random())}():Tu++,"0x"+Tu.toString(16)}/**
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
 */const hM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Mt="WebChannelConnection";class pM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=mf(),l=this.bo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw yo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=hM[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=mf();return new Promise((o,a)=>{const l=new wO;l.setWithCredentials(!0),l.listenOnce(vO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ff.NO_ERROR:const c=l.getResponseJson();j(Mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case ff.TIMEOUT:j(Mt,`RPC '${e}' ${s} timed out`),a(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case ff.HTTP_ERROR:const d=l.getStatus();if(j(Mt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const y=h==null?void 0:h.error;if(y&&y.status&&y.message){const _=function(m){const f=m.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(f)>=0?f:k.UNKNOWN}(y.status);a(new B(_,y.message))}else a(new B(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(k.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{j(Mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(Mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=mf(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=gO(),a=yO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");j(Mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,y=!1;const _=new fM({lo:m=>{y?j(Mt,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(h||(j(Mt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),j(Mt,`RPC '${e}' stream ${i} sending:`,m),d.send(m))},ho:()=>d.close()}),w=(m,f,p)=>{m.listen(f,v=>{try{p(v)}catch(I){setTimeout(()=>{throw I},0)}})};return w(d,_u.EventType.OPEN,()=>{y||j(Mt,`RPC '${e}' stream ${i} transport opened.`)}),w(d,_u.EventType.CLOSE,()=>{y||(y=!0,j(Mt,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),w(d,_u.EventType.ERROR,m=>{y||(y=!0,yo(Mt,`RPC '${e}' stream ${i} transport errored:`,m),_.Vo(new B(k.UNAVAILABLE,"The operation could not be completed")))}),w(d,_u.EventType.MESSAGE,m=>{var f;if(!y){const p=m.data[0];Me(!!p);const v=p,I=v.error||((f=v[0])===null||f===void 0?void 0:f.error);if(I){j(Mt,`RPC '${e}' stream ${i} received error:`,I);const x=I.status;let E=function(V){const H=it[V];if(H!==void 0)return US(H)}(x),C=I.message;E===void 0&&(E=k.INTERNAL,C="Unknown error status: "+x+" with message "+I.message),y=!0,_.Vo(new B(E,C)),d.close()}else j(Mt,`RPC '${e}' stream ${i} received:`,p),_.mo(p)}}),w(a,_O.STAT_EVENT,m=>{m.stat===h_.PROXY?j(Mt,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===h_.NOPROXY&&j(Mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function gf(){return typeof document<"u"?document:null}/**
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
 */function Fd(t){return new AL(t,!0)}/**
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
 */class ZS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class eA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ZS(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mM extends eA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=PL(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?lr(o.readTime):oe.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Gp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=zp(l)?{documents:DL(s,l)}:{query:bL(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HS(s,o.resumeToken);const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Vc(s,o.snapshotVersion.toTimestamp());const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=OL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Gp(this.serializer),n.removeTarget=e,this.t_(n)}}class gM extends eA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=kL(e.writeResults,e.commitTime),r=lr(e.commitTime);return this.listener.T_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Gp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xL(this.serializer,r))};this.t_(n)}}/**
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
 */class yM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Wp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(k.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Wp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(k.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class vM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(cr(n),this.g_=!1):j("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class _M{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ys(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=le(l);u.v_.add(4),await jl(u),u.x_.set("Unknown"),u.v_.delete(4),await $d(u)}(this))})}),this.x_=new vM(r,i)}}async function $d(t){if(ys(t))for(const e of t.F_)await e(!0)}async function jl(t){for(const e of t.F_)await e(!1)}function tA(t,e){const n=le(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),py(n)?fy(n):Fo(n).Jo()&&hy(n,e))}function dy(t,e){const n=le(t),r=Fo(n);n.C_.delete(e),r.Jo()&&nA(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ys(n)&&n.x_.set("Unknown"))}function hy(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).c_(e)}function nA(t,e){t.O_.Oe(e),Fo(t).l_(e)}function fy(t){t.O_=new EL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.x_.p_()}function py(t){return ys(t)&&!Fo(t).Ho()&&t.C_.size>0}function ys(t){return le(t).v_.size===0}function rA(t){t.O_=void 0}async function wM(t){t.C_.forEach((e,n)=>{hy(t,e)})}async function EM(t,e){rA(t),py(t)?(t.x_.S_(e),fy(t)):t.x_.set("Unknown")}async function TM(t,e,n){if(t.x_.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fc(t,r)}else if(e instanceof Bu?t.O_.$e(e):e instanceof zS?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(oe.min()))try{const r=await XS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Bt.EMPTY_BYTE_STRING,c.snapshotVersion)),nA(s,l);const d=new Zr(c.target,l,u,c.sequenceNumber);hy(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Fc(t,r)}}async function Fc(t,e,n){if(!Ml(e))throw e;t.v_.add(1),await jl(t),t.x_.set("Offline"),n||(n=()=>XS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await $d(t)})}function iA(t,e){return e().catch(n=>Fc(t,n,e))}async function jd(t){const e=le(t),n=yi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;IM(e);)try{const i=await aM(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,SM(e,i)}catch(i){await Fc(e,i)}sA(e)&&oA(e)}function IM(t){return ys(t)&&t.D_.length<10}function SM(t,e){t.D_.push(e);const n=yi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function sA(t){return ys(t)&&!yi(t).Ho()&&t.D_.length>0}function oA(t){yi(t).start()}async function AM(t){yi(t).d_()}async function RM(t){const e=yi(t);for(const n of t.D_)e.I_(n.mutations)}async function CM(t,e,n){const r=t.D_.shift(),i=sy.from(r,e,n);await iA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jd(t)}async function PM(t,e){e&&yi(t).P_&&await async function(r,i){if(function(o){return vL(o)&&o!==k.ABORTED}(i.code)){const s=r.D_.shift();yi(r).Zo(),await iA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jd(r)}}(t,e),sA(t)&&oA(t)}async function F_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.v_.add(3),await jl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await $d(n)}async function xM(t,e){const n=le(t);e?(n.v_.delete(2),await $d(n)):e||(n.v_.add(2),await jl(n),n.x_.set("Unknown"))}function Fo(t){return t.N_||(t.N_=function(n,r,i){const s=le(n);return s.R_(),new mM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:wM.bind(null,t),To:EM.bind(null,t),u_:TM.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),py(t)?fy(t):t.x_.set("Unknown")):(await t.N_.stop(),rA(t))})),t.N_}function yi(t){return t.L_||(t.L_=function(n,r,i){const s=le(n);return s.R_(),new gM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:AM.bind(null,t),To:PM.bind(null,t),E_:RM.bind(null,t),T_:CM.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await jd(t)):(await t.L_.stop(),t.D_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class my{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new my(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gy(t,e){if(cr("AsyncQueue",`${e}: ${t}`),Ml(t))return new B(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ha(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new oo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class $_{constructor(){this.B_=new Ge(G.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ie():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class So{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new So(e,n,oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kM{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class DM{constructor(){this.queries=new Vo(e=>CS(e),Nd),this.onlineState="Unknown",this.W_=new Set}}async function aA(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new kM,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=gy(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&yy(n)}async function lA(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bM(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&yy(n)}function NM(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function yy(t){t.W_.forEach(e=>{e.next()})}var Yp,j_;(j_=Yp||(Yp={})).j_="default",j_.Cache="cache";class uA{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new So(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Yp.Cache}}/**
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
 */class cA{constructor(e){this.key=e}}class dA{constructor(e){this.key=e}}class OM{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ye(),this.mutatedKeys=ye(),this.ha=PS(e),this.Pa=new oo(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new $_,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),y=Od(this.query,d)?d:null,_=!!h&&this.mutatedKeys.has(h.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let m=!1;h&&y?h.data.isEqual(y.data)?_!==w&&(r.track({type:3,doc:y}),m=!0):this.da(h,y)||(r.track({type:2,doc:y}),m=!0,(l&&this.ha(y,l)>0||u&&this.ha(y,u)<0)&&(a=!0)):!h&&y?(r.track({type:0,doc:y}),m=!0):h&&!y&&(r.track({type:1,doc:h}),m=!0,(l||u)&&(a=!0)),m&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,d)=>function(y,_){const w=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return w(y)-w(_)}(c.type,d.type)||this.ha(c.doc,d.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new So(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new $_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ye(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new dA(r))}),this.la.forEach(r=>{e.has(r)||n.push(new cA(r))}),n}fa(e){this.ua=e.hs,this.la=ye();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return So.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class LM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MM{constructor(e){this.key=e,this.pa=!1}}class VM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Vo(a=>CS(a),Nd),this.Sa=new Map,this.ba=new Set,this.Da=new Ge(G.comparator),this.Ca=new Map,this.va=new ly,this.Fa={},this.Ma=new Map,this.xa=Io.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function FM(t,e,n=!0){const r=yA(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await hA(r,e,n,!0),i}async function $M(t,e){const n=yA(t);await hA(n,e,!0,!1)}async function hA(t,e,n,r){const i=await lM(t.localStore,ar(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await jM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tA(t.remoteStore,i),a}async function jM(t,e,n,r,i){t.Na=(d,h,y)=>async function(w,m,f,p){let v=m.view.Ta(f);v.Xi&&(v=await L_(w.localStore,m.query,!1).then(({documents:C})=>m.view.Ta(C,v)));const I=p&&p.targetChanges.get(m.targetId),x=p&&p.targetMismatches.get(m.targetId)!=null,E=m.view.applyChanges(v,w.isPrimaryClient,I,x);return z_(w,m.targetId,E.Va),E.snapshot}(t,d,h,y);const s=await L_(t.localStore,e,!0),o=new OM(e,s.hs),a=o.Ta(s.documents),l=$l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);z_(t,n,u.Va);const c=new LM(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function UM(t,e,n){const r=le(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Nd(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dy(r.remoteStore,i.targetId),Jp(r,i.targetId)}).catch(Ll)):(Jp(r,i.targetId),await Qp(r.localStore,i.targetId,!0))}async function zM(t,e){const n=le(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dy(n.remoteStore,r.targetId))}async function BM(t,e,n){const r=YM(t);try{const i=await function(o,a){const l=le(o),u=ft.now(),c=a.reduce((y,_)=>y.add(_.key),ye());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=br(),w=ye();return l.os.getEntries(y,c).next(m=>{_=m,_.forEach((f,p)=>{p.isValidDocument()||(w=w.add(f))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,_)).next(m=>{d=m;const f=[];for(const p of a){const v=fL(p,d.get(p.key).overlayedDocument);v!=null&&f.push(new Ai(p.key,v,_S(v.value.mapValue),An.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,f,a)}).next(m=>{h=m;const f=m.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(y,m.batchId,f)})}).then(()=>({batchId:h.batchId,changes:kS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new Ge(Ce)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ul(r,i.changes),await jd(r.remoteStore)}catch(i){const s=gy(i,"Failed to persist write");n.reject(s)}}async function fA(t,e){const n=le(t);try{const r=await sM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Me(o.pa):i.removedDocuments.size>0&&(Me(o.pa),o.pa=!1))}),await Ul(n,r,e)}catch(r){await Ll(r)}}function U_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=le(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.G_(a)&&(u=!0)}),u&&yy(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HM(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new Ge(G.comparator);o=o.insert(s,$t.newNoDocument(s,oe.min()));const a=ye().add(s),l=new Vd(oe.min(),new Map,new Ge(Ce),o,a);await fA(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),vy(r)}else await Qp(r.localStore,e,!1).then(()=>Jp(r,e,n)).catch(Ll)}async function qM(t,e){const n=le(t),r=e.batch.batchId;try{const i=await iM(n.localStore,e);mA(n,r,null),pA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ul(n,i)}catch(i){await Ll(i)}}async function WM(t,e,n){const r=le(t);try{const i=await function(o,a){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Me(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mA(r,e,n),pA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ul(r,i)}catch(i){await Ll(i)}}function pA(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function mA(t,e,n){const r=le(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function Jp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||gA(t,r)})}function gA(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(dy(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),vy(t))}function z_(t,e,n){for(const r of n)r instanceof cA?(t.va.addReference(r.key,e),KM(t,r)):r instanceof dA?(j("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||gA(t,r.key)):ie()}function KM(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ba.add(r),vy(t))}function vy(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new G($e.fromString(e)),r=t.xa.next();t.Ca.set(r,new MM(n)),t.Da=t.Da.insert(n,r),tA(t.remoteStore,new Zr(ar(ry(n.path)),r,"TargetPurposeLimboResolution",Jg._e))}}async function Ul(t,e,n){const r=le(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=cy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=le(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,h=>D.forEach(h.qi,y=>c.persistence.referenceDelegate.addReference(d,h.targetId,y)).next(()=>D.forEach(h.Qi,y=>c.persistence.referenceDelegate.removeReference(d,h.targetId,y)))))}catch(d){if(!Ml(d))throw d;j("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const y=c.ns.get(h),_=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(h,w)}}}(r.localStore,s))}async function GM(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await JS(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new B(k.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ul(n,r.us)}}function QM(t,e){const n=le(t),r=n.Ca.get(e);if(r&&r.pa)return ye().add(r.key);{let i=ye();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function yA(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HM.bind(null,e),e.ya.u_=bM.bind(null,e.eventManager),e.ya.La=NM.bind(null,e.eventManager),e}function YM(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WM.bind(null,e),e}class B_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rM(this.persistence,new tM,e.initialUser,this.serializer)}createPersistence(e){return new XL(uy.Hr,this.serializer)}createSharedClientState(e){return new cM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>U_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GM.bind(null,this.syncEngine),await xM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DM}()}createDatastore(e){const n=Fd(e.databaseInfo.databaseId),r=function(s){return new pM(s)}(e.databaseInfo);return function(s,o,a,l){return new yM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _M(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>U_(this.syncEngine,n,0),function(){return V_.D()?new V_:new dM}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new VM(i,s,o,a,l,u);return c&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=le(r);j("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await jl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class vA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Vt.UNAUTHENTICATED,this.clientId=gS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await JS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function H_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eV(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>F_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>F_(e.remoteStore,i)),t._onlineComponents=e}function ZM(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function eV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await yf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ZM(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await yf(t,new B_)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await yf(t,new B_);return t._offlineComponents}async function _A(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await H_(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await H_(t,new JM))),t._onlineComponents}function tV(t){return _A(t).then(e=>e.syncEngine)}async function wA(t){const e=await _A(t),n=e.eventManager;return n.onListen=FM.bind(null,e.syncEngine),n.onUnlisten=UM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$M.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zM.bind(null,e.syncEngine),n}function nV(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new vA({next:h=>{o.enqueueAndForget(()=>lA(s,d));const y=h.docs.has(a);!y&&h.fromCache?u.reject(new B(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&h.fromCache&&l&&l.source==="server"?u.reject(new B(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new uA(ry(a.path),c,{includeMetadataChanges:!0,ta:!0});return aA(s,d)}(await wA(t),t.asyncQueue,e,n,r)),r.promise}function rV(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new vA({next:h=>{o.enqueueAndForget(()=>lA(s,d)),h.fromCache&&l.source==="server"?u.reject(new B(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new uA(a,c,{includeMetadataChanges:!0,ta:!0});return aA(s,d)}(await wA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function EA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const q_=new Map;/**
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
 */function TA(t,e,n){if(!n)throw new B(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iV(t,e,n,r){if(e===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!G.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K_(t){if(G.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new B(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class G_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TO;switch(r.type){case"firstParty":return new RO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=q_.get(n);r&&(j("ComponentProvider","Removing Datastore"),q_.delete(n),r.terminate())}(this),Promise.resolve()}}function sV(t,e,n,r={}){var i;const s=(t=Un(t,zd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Vt.MOCK_USER;else{a=mx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Vt(u)}t._authCredentials=new IO(new mS(a,l))}}/**
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
 */class $o{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $o(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class ci extends $o{constructor(e,n,r){super(e,n,ry(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new G(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function zn(t,e,...n){if(t=wt(t),TA("collection","path",e),t instanceof zd){const r=$e.fromString(e,...n);return K_(r),new ci(t,null,r)}{if(!(t instanceof Gt||t instanceof ci))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return K_(r),new ci(t.firestore,null,r)}}function Tn(t,e,...n){if(t=wt(t),arguments.length===1&&(e=gS.newId()),TA("doc","path",e),t instanceof zd){const r=$e.fromString(e,...n);return W_(r),new Gt(t,null,new G(r))}{if(!(t instanceof Gt||t instanceof ci))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return W_(r),new Gt(t.firestore,t instanceof ci?t.converter:null,new G(r))}}/**
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
 */class oV{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new ZS(this,"async_queue_retry"),this.cu=()=>{const n=gf();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=gf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=gf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new or;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ml(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=my.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&ie()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class vs extends zd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new oV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||IA(this),this._firestoreClient.terminate()}}function aV(t,e){const n=typeof t=="object"?t:dg(),r=typeof t=="string"?t:e||"(default)",i=fs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fx("firestore");s&&sV(i,...s)}return i}function _y(t){return t._firestoreClient||IA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function IA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new jO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,EA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ao(Bt.fromBase64String(e))}catch(n){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ao(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function SA(){return new zl("__name__")}/**
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
 */class Bl{constructor(e){this._methodName=e}}/**
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
 */class wy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const lV=/^__.*__$/;class uV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fl(e,this.data,n,this.fieldTransforms)}}class AA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function RA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Bd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return $c(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(RA(this.Vu)&&lV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class cV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fd(e)}Cu(e,n,r,i=!1){return new Bd({Vu:e,methodName:n,Du:r,path:Pt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hd(t){const e=t._freezeSettings(),n=Fd(t._databaseId);return new cV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CA(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);Iy("Data must be an object, but it was:",o,r);const a=xA(r,o);let l,u;if(s.merge)l=new ln(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Xp(e,d,n);if(!o.contains(h))throw new B(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);DA(c,h)||c.push(h)}l=new ln(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new uV(new Zt(a),l,u)}class qd extends Bl{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qd}}function PA(t,e,n){return new Bd({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ey extends Bl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=PA(this,e,!0),r=this.vu.map(s=>_s(s,n)),i=new Eo(r);return new FS(e.path,i)}isEqual(e){return e instanceof Ey&&Xi(this.vu,e.vu)}}class Ty extends Bl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=PA(this,e,!0),r=this.vu.map(s=>_s(s,n)),i=new To(r);return new FS(e.path,i)}isEqual(e){return e instanceof Ty&&Xi(this.vu,e.vu)}}function dV(t,e,n,r){const i=t.Cu(1,e,n);Iy("Data must be an object, but it was:",i,r);const s=[],o=Zt.empty();gs(r,(l,u)=>{const c=Sy(e,l,n);u=wt(u);const d=i.yu(c);if(u instanceof qd)s.push(c);else{const h=_s(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new ln(s);return new AA(o,a,i.fieldTransforms)}function hV(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[Xp(e,r,n)],l=[i];if(s.length%2!=0)throw new B(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Xp(e,s[h])),l.push(s[h+1]);const u=[],c=Zt.empty();for(let h=a.length-1;h>=0;--h)if(!DA(u,a[h])){const y=a[h];let _=l[h];_=wt(_);const w=o.yu(y);if(_ instanceof qd)u.push(y);else{const m=_s(_,w);m!=null&&(u.push(y),c.set(y,m))}}const d=new ln(u);return new AA(c,d,o.fieldTransforms)}function fV(t,e,n,r=!1){return _s(n,t.Cu(r?4:3,e))}function _s(t,e){if(kA(t=wt(t)))return Iy("Unsupported field value:",e,t),xA(t,e);if(t instanceof Bl)return function(r,i){if(!RA(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=_s(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ft.fromDate(r);return{timestampValue:Vc(i.serializer,s)}}if(r instanceof ft){const s=new ft(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vc(i.serializer,s)}}if(r instanceof wy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ao)return{bytesValue:HS(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ay(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Ud(r)}`)}(t,e)}function xA(t,e){const n={};return yS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,i)=>{const s=_s(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ft||t instanceof wy||t instanceof Ao||t instanceof Gt||t instanceof Bl)}function Iy(t,e,n){if(!kA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ud(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Xp(t,e,n){if((e=wt(e))instanceof zl)return e._internalPath;if(typeof e=="string")return Sy(t,e);throw $c("Field path arguments must be of type string or ",t,!1,void 0,n)}const pV=new RegExp("[~\\*/\\[\\]]");function Sy(t,e,n){if(e.search(pV)>=0)throw $c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw $c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $c(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(k.INVALID_ARGUMENT,a+t+l)}function DA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ay("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mV extends bA{data(){return super.data()}}function Ay(t,e){return typeof e=="string"?Sy(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
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
 */function gV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ry{}class yV extends Ry{}function ws(t,e,...n){let r=[];e instanceof Ry&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Cy).length,a=s.filter(l=>l instanceof Wd).length;if(o>1||o>0&&a>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Wd extends yV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wd(e,n,r)}_apply(e){const n=this._parse(e);return NA(e._query,n),new $o(e.firestore,e.converter,Bp(e._query,n))}_parse(e){const n=Hd(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Y_(d,c);const y=[];for(const _ of d)y.push(Q_(l,s,_));h={arrayValue:{values:y}}}else h=Q_(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Y_(d,c),h=fV(a,o,d,c==="in"||c==="not-in");return at.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Es(t,e,n){const r=e,i=Ay("where",t);return Wd._create(i,r,n)}class Cy extends Ry{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)NA(o,l),o=Bp(o,l)}(e._query,n),new $o(e.firestore,e.converter,Bp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Q_(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RS(e)&&n.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!G.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return v_(t,new G(r))}if(n instanceof Gt)return v_(t,n._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ud(n)}.`)}function Y_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class vV{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wy(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Me(YS(r));const i=new dl(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function OA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class pa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LA extends bA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ay("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hu extends LA{data(e={}){return super.data(e)}}class _V{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hu(this._firestore,this._userDataWriter,r.key,r,new pa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Hu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Hu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:wV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function MA(t){t=Un(t,Gt);const e=Un(t.firestore,vs);return nV(_y(e),t._key).then(n=>IV(e,t,n))}class VA extends vV{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gt(this.firestore,null,n)}}function hr(t){t=Un(t,$o);const e=Un(t.firestore,vs),n=_y(e),r=new VA(e);return gV(t._query),rV(n,t._query).then(i=>new _V(e,r,t,i))}function EV(t,e,n){t=Un(t,Gt);const r=Un(t.firestore,vs),i=OA(t.converter,e,n);return Kd(r,[CA(Hd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function Wi(t,e,n,...r){t=Un(t,Gt);const i=Un(t.firestore,vs),s=Hd(i);let o;return o=typeof(e=wt(e))=="string"||e instanceof zl?hV(s,"updateDoc",t._key,e,n,r):dV(s,"updateDoc",t._key,e),Kd(i,[o.toMutation(t._key,An.exists(!0))])}function TV(t){return Kd(Un(t.firestore,vs),[new iy(t._key,An.none())])}function Py(t,e){const n=Un(t.firestore,vs),r=Tn(t),i=OA(t.converter,e);return Kd(n,[CA(Hd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,An.exists(!1))]).then(()=>r)}function Kd(t,e){return function(r,i){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>BM(await tV(r),i,s)),s.promise}(_y(t),e)}function IV(t,e,n){const r=n.docs.get(e._key),i=new VA(t);return new LA(t,i,e._key,r,new pa(n.hasPendingWrites,n.fromCache),e.converter)}function jc(...t){return new Ey("arrayUnion",t)}function ba(...t){return new Ty("arrayRemove",t)}(function(e,n=!0){(function(i){Mo=i})(bo),ur(new Vn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new vs(new SO(r.getProvider("auth-internal")),new PO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Sn(f_,"4.6.0",e),Sn(f_,"4.6.0","esm2017")})();const SV={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},xy=lT(SV),Xe=aV(xy);fN().then(t=>{t&&dN(xy)});Rl(xy);var FA={exports:{}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),AV=Symbol.for("react.server_context"),Zd=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),nh=Symbol.for("react.memo"),rh=Symbol.for("react.lazy"),RV=Symbol.for("react.offscreen"),$A;$A=Symbol.for("react.module.reference");function Pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ky:switch(t=t.type,t){case Gd:case Yd:case Qd:case eh:case th:return t;default:switch(t=t&&t.$$typeof,t){case AV:case Xd:case Zd:case rh:case nh:case Jd:return t;default:return e}}case Dy:return e}}}ke.ContextConsumer=Xd;ke.ContextProvider=Jd;ke.Element=ky;ke.ForwardRef=Zd;ke.Fragment=Gd;ke.Lazy=rh;ke.Memo=nh;ke.Portal=Dy;ke.Profiler=Yd;ke.StrictMode=Qd;ke.Suspense=eh;ke.SuspenseList=th;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(t){return Pn(t)===Xd};ke.isContextProvider=function(t){return Pn(t)===Jd};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ky};ke.isForwardRef=function(t){return Pn(t)===Zd};ke.isFragment=function(t){return Pn(t)===Gd};ke.isLazy=function(t){return Pn(t)===rh};ke.isMemo=function(t){return Pn(t)===nh};ke.isPortal=function(t){return Pn(t)===Dy};ke.isProfiler=function(t){return Pn(t)===Yd};ke.isStrictMode=function(t){return Pn(t)===Qd};ke.isSuspense=function(t){return Pn(t)===eh};ke.isSuspenseList=function(t){return Pn(t)===th};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gd||t===Yd||t===Qd||t===eh||t===th||t===RV||typeof t=="object"&&t!==null&&(t.$$typeof===rh||t.$$typeof===nh||t.$$typeof===Jd||t.$$typeof===Xd||t.$$typeof===Zd||t.$$typeof===$A||t.getModuleId!==void 0)};ke.typeOf=Pn;FA.exports=ke;var jA=FA.exports;function CV(t){function e(L,z,F,Y,A){for(var fe=0,M=0,Ue=0,Ae=0,ae,ne,rt=0,Nt=0,de,pt=de=ae=0,Re=0,ut=0,Ci=0,ct=0,Hn=F.length,Mr=Hn-1,Ht,J="",be="",Is="",Vr="",qn;Re<Hn;){if(ne=F.charCodeAt(Re),Re===Mr&&M+Ae+Ue+fe!==0&&(M!==0&&(ne=M===47?10:47),Ae=Ue=fe=0,Hn++,Mr++),M+Ae+Ue+fe===0){if(Re===Mr&&(0<ut&&(J=J.replace(h,"")),0<J.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:J+=F.charAt(Re)}ne=59}switch(ne){case 123:for(J=J.trim(),ae=J.charCodeAt(0),de=1,ct=++Re;Re<Hn;){switch(ne=F.charCodeAt(Re)){case 123:de++;break;case 125:de--;break;case 47:switch(ne=F.charCodeAt(Re+1)){case 42:case 47:e:{for(pt=Re+1;pt<Mr;++pt)switch(F.charCodeAt(pt)){case 47:if(ne===42&&F.charCodeAt(pt-1)===42&&Re+2!==pt){Re=pt+1;break e}break;case 10:if(ne===47){Re=pt+1;break e}}Re=pt}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;Re++<Mr&&F.charCodeAt(Re)!==ne;);}if(de===0)break;Re++}switch(de=F.substring(ct,Re),ae===0&&(ae=(J=J.replace(d,"").trim()).charCodeAt(0)),ae){case 64:switch(0<ut&&(J=J.replace(h,"")),ne=J.charCodeAt(1),ne){case 100:case 109:case 115:case 45:ut=z;break;default:ut=Jt}if(de=e(z,ut,de,ne,A+1),ct=de.length,0<O&&(ut=n(Jt,J,Ci),qn=a(3,de,ut,z,Se,Te,ct,ne,A,Y),J=ut.join(""),qn!==void 0&&(ct=(de=qn.trim()).length)===0&&(ne=0,de="")),0<ct)switch(ne){case 115:J=J.replace(E,o);case 100:case 109:case 45:de=J+"{"+de+"}";break;case 107:J=J.replace(p,"$1 $2"),de=J+"{"+de+"}",de=et===1||et===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=J+de,Y===112&&(de=(be+=de,""))}else de="";break;default:de=e(z,n(z,J,Ci),de,Y,A+1)}Is+=de,de=Ci=ut=pt=ae=0,J="",ne=F.charCodeAt(++Re);break;case 125:case 59:if(J=(0<ut?J.replace(h,""):J).trim(),1<(ct=J.length))switch(pt===0&&(ae=J.charCodeAt(0),ae===45||96<ae&&123>ae)&&(ct=(J=J.replace(" ",":")).length),0<O&&(qn=a(1,J,z,L,Se,Te,be.length,Y,A,Y))!==void 0&&(ct=(J=qn.trim()).length)===0&&(J="\0\0"),ae=J.charCodeAt(0),ne=J.charCodeAt(1),ae){case 0:break;case 64:if(ne===105||ne===99){Vr+=J+F.charAt(Re);break}default:J.charCodeAt(ct-1)!==58&&(be+=i(J,ae,ne,J.charCodeAt(2)))}Ci=ut=pt=ae=0,J="",ne=F.charCodeAt(++Re)}}switch(ne){case 13:case 10:M===47?M=0:1+ae===0&&Y!==107&&0<J.length&&(ut=1,J+="\0"),0<O*Z&&a(0,J,z,L,Se,Te,be.length,Y,A,Y),Te=1,Se++;break;case 59:case 125:if(M+Ae+Ue+fe===0){Te++;break}default:switch(Te++,Ht=F.charAt(Re),ne){case 9:case 32:if(Ae+fe+M===0)switch(rt){case 44:case 58:case 9:case 32:Ht="";break;default:ne!==32&&(Ht=" ")}break;case 0:Ht="\\0";break;case 12:Ht="\\f";break;case 11:Ht="\\v";break;case 38:Ae+M+fe===0&&(ut=Ci=1,Ht="\f"+Ht);break;case 108:if(Ae+M+fe+He===0&&0<pt)switch(Re-pt){case 2:rt===112&&F.charCodeAt(Re-3)===58&&(He=rt);case 8:Nt===111&&(He=Nt)}break;case 58:Ae+M+fe===0&&(pt=Re);break;case 44:M+Ue+Ae+fe===0&&(ut=1,Ht+="\r");break;case 34:case 39:M===0&&(Ae=Ae===ne?0:Ae===0?ne:Ae);break;case 91:Ae+M+Ue===0&&fe++;break;case 93:Ae+M+Ue===0&&fe--;break;case 41:Ae+M+fe===0&&Ue--;break;case 40:if(Ae+M+fe===0){if(ae===0)switch(2*rt+3*Nt){case 533:break;default:ae=1}Ue++}break;case 64:M+Ue+Ae+fe+pt+de===0&&(de=1);break;case 42:case 47:if(!(0<Ae+fe+Ue))switch(M){case 0:switch(2*ne+3*F.charCodeAt(Re+1)){case 235:M=47;break;case 220:ct=Re,M=42}break;case 42:ne===47&&rt===42&&ct+2!==Re&&(F.charCodeAt(ct+2)===33&&(be+=F.substring(ct,Re+1)),Ht="",M=0)}}M===0&&(J+=Ht)}Nt=rt,rt=ne,Re++}if(ct=be.length,0<ct){if(ut=z,0<O&&(qn=a(2,be,ut,L,Se,Te,ct,Y,A,Y),qn!==void 0&&(be=qn).length===0))return Vr+be+Is;if(be=ut.join(",")+"{"+be+"}",et*He!==0){switch(et!==2||s(be,2)||(He=0),He){case 111:be=be.replace(I,":-moz-$1")+be;break;case 112:be=be.replace(v,"::-webkit-input-$1")+be.replace(v,"::-moz-$1")+be.replace(v,":-ms-input-$1")+be}He=0}}return Vr+be+Is}function n(L,z,F){var Y=z.trim().split(m);z=Y;var A=Y.length,fe=L.length;switch(fe){case 0:case 1:var M=0;for(L=fe===0?"":L[0]+" ";M<A;++M)z[M]=r(L,z[M],F).trim();break;default:var Ue=M=0;for(z=[];M<A;++M)for(var Ae=0;Ae<fe;++Ae)z[Ue++]=r(L[Ae]+" ",Y[M],F).trim()}return z}function r(L,z,F){var Y=z.charCodeAt(0);switch(33>Y&&(Y=(z=z.trim()).charCodeAt(0)),Y){case 38:return z.replace(f,"$1"+L.trim());case 58:return L.trim()+z.replace(f,"$1"+L.trim());default:if(0<1*F&&0<z.indexOf("\f"))return z.replace(f,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+z}function i(L,z,F,Y){var A=L+";",fe=2*z+3*F+4*Y;if(fe===944){L=A.indexOf(":",9)+1;var M=A.substring(L,A.length-1).trim();return M=A.substring(0,L).trim()+M+";",et===1||et===2&&s(M,1)?"-webkit-"+M+M:M}if(et===0||et===2&&!s(A,1))return A;switch(fe){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ce,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return M=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+A+"-ms-flex-pack"+M+A;case 1005:return _.test(A)?A.replace(y,":-webkit-")+A.replace(y,":-moz-")+A:A;case 1e3:switch(M=A.substring(13).trim(),z=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(z)){case 226:M=A.replace(x,"tb");break;case 232:M=A.replace(x,"tb-rl");break;case 220:M=A.replace(x,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+M+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(z=(A=L).length-10,M=(A.charCodeAt(z)===33?A.substring(0,z):A).substring(L.indexOf(":",7)+1).trim(),fe=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:A=A.replace(M,"-webkit-"+M)+";"+A;break;case 207:case 102:A=A.replace(M,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+A.replace(M,"-webkit-"+M)+";"+A.replace(M,"-ms-"+M+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return M=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+M+"-ms-flex-"+M+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(b,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(b,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(H.test(L)===!0)return(M=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),z,F,Y).replace(":fill-available",":stretch"):A.replace(M,"-webkit-"+M)+A.replace(M,"-moz-"+M.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,F+Y===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+A}return A}function s(L,z){var F=L.indexOf(z===1?":":"{"),Y=L.substring(0,z!==3?F:10);return F=L.substring(F+1,L.length-1),Q(z!==2?Y:Y.replace(V,"$1"),F,z)}function o(L,z){var F=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return F!==z+";"?F.replace(C," or ($1)").substring(4):"("+z+")"}function a(L,z,F,Y,A,fe,M,Ue,Ae,ae){for(var ne=0,rt=z,Nt;ne<O;++ne)switch(Nt=ge[ne].call(c,L,rt,F,Y,A,fe,M,Ue,Ae,ae)){case void 0:case!1:case!0:case null:break;default:rt=Nt}if(rt!==z)return rt}function l(L){switch(L){case void 0:case null:O=ge.length=0;break;default:if(typeof L=="function")ge[O++]=L;else if(typeof L=="object")for(var z=0,F=L.length;z<F;++z)l(L[z]);else Z=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(Q=null,L?typeof L!="function"?et=1:(et=2,Q=L):et=0),u}function c(L,z){var F=L;if(33>F.charCodeAt(0)&&(F=F.trim()),me=F,F=[me],0<O){var Y=a(-1,z,F,F,Se,Te,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(z=Y)}var A=e(Jt,F,z,0,0);return 0<O&&(Y=a(-2,A,F,F,Se,Te,A.length,0,0,0),Y!==void 0&&(A=Y)),me="",He=0,Te=Se=1,A}var d=/^\0+/g,h=/[\0\r\f]/g,y=/: */g,_=/zoo|gra/,w=/([,: ])(transform)/g,m=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,I=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,b=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,H=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,Te=1,Se=1,He=0,et=1,Jt=[],ge=[],O=0,Q=null,Z=0,me="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var PV={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xV(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var kV=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,J_=xV(function(t){return kV.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),UA={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It=typeof Symbol=="function"&&Symbol.for,by=It?Symbol.for("react.element"):60103,Ny=It?Symbol.for("react.portal"):60106,ih=It?Symbol.for("react.fragment"):60107,sh=It?Symbol.for("react.strict_mode"):60108,oh=It?Symbol.for("react.profiler"):60114,ah=It?Symbol.for("react.provider"):60109,lh=It?Symbol.for("react.context"):60110,Oy=It?Symbol.for("react.async_mode"):60111,uh=It?Symbol.for("react.concurrent_mode"):60111,ch=It?Symbol.for("react.forward_ref"):60112,dh=It?Symbol.for("react.suspense"):60113,DV=It?Symbol.for("react.suspense_list"):60120,hh=It?Symbol.for("react.memo"):60115,fh=It?Symbol.for("react.lazy"):60116,bV=It?Symbol.for("react.block"):60121,NV=It?Symbol.for("react.fundamental"):60117,OV=It?Symbol.for("react.responder"):60118,LV=It?Symbol.for("react.scope"):60119;function mn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case by:switch(t=t.type,t){case Oy:case uh:case ih:case oh:case sh:case dh:return t;default:switch(t=t&&t.$$typeof,t){case lh:case ch:case fh:case hh:case ah:return t;default:return e}}case Ny:return e}}}function zA(t){return mn(t)===uh}De.AsyncMode=Oy;De.ConcurrentMode=uh;De.ContextConsumer=lh;De.ContextProvider=ah;De.Element=by;De.ForwardRef=ch;De.Fragment=ih;De.Lazy=fh;De.Memo=hh;De.Portal=Ny;De.Profiler=oh;De.StrictMode=sh;De.Suspense=dh;De.isAsyncMode=function(t){return zA(t)||mn(t)===Oy};De.isConcurrentMode=zA;De.isContextConsumer=function(t){return mn(t)===lh};De.isContextProvider=function(t){return mn(t)===ah};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===by};De.isForwardRef=function(t){return mn(t)===ch};De.isFragment=function(t){return mn(t)===ih};De.isLazy=function(t){return mn(t)===fh};De.isMemo=function(t){return mn(t)===hh};De.isPortal=function(t){return mn(t)===Ny};De.isProfiler=function(t){return mn(t)===oh};De.isStrictMode=function(t){return mn(t)===sh};De.isSuspense=function(t){return mn(t)===dh};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ih||t===uh||t===oh||t===sh||t===dh||t===DV||typeof t=="object"&&t!==null&&(t.$$typeof===fh||t.$$typeof===hh||t.$$typeof===ah||t.$$typeof===lh||t.$$typeof===ch||t.$$typeof===NV||t.$$typeof===OV||t.$$typeof===LV||t.$$typeof===bV)};De.typeOf=mn;UA.exports=De;var MV=UA.exports,Ly=MV,VV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},BA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},My={};My[Ly.ForwardRef]=$V;My[Ly.Memo]=BA;function X_(t){return Ly.isMemo(t)?BA:My[t.$$typeof]||VV}var jV=Object.defineProperty,UV=Object.getOwnPropertyNames,Z_=Object.getOwnPropertySymbols,zV=Object.getOwnPropertyDescriptor,BV=Object.getPrototypeOf,ew=Object.prototype;function HA(t,e,n){if(typeof e!="string"){if(ew){var r=BV(e);r&&r!==ew&&HA(t,r,n)}var i=UV(e);Z_&&(i=i.concat(Z_(e)));for(var s=X_(t),o=X_(e),a=0;a<i.length;++a){var l=i[a];if(!FV[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=zV(e,l);try{jV(t,l,u)}catch{}}}}return t}var HV=HA;const qV=hm(HV);var Qn={};function tr(){return(tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var tw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Zp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!jA.typeOf(t)},Uc=Object.freeze([]),di=Object.freeze({});function fl(t){return typeof t=="function"}function nw(t){return t.displayName||t.name||"Component"}function Vy(t){return t&&typeof t.styledComponentId=="string"}var Ro=typeof process<"u"&&(Qn.REACT_APP_SC_ATTR||Qn.SC_ATTR)||"data-styled",Fy=typeof window<"u"&&"HTMLElement"in window,WV=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==""?Qn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qn.SC_DISABLE_SPEEDY!==void 0&&Qn.SC_DISABLE_SPEEDY!==""&&Qn.SC_DISABLE_SPEEDY!=="false"&&Qn.SC_DISABLE_SPEEDY),KV={};function Hl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var GV=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Hl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),qu=new Map,zc=new Map,Na=1,Iu=function(t){if(qu.has(t))return qu.get(t);for(;zc.has(Na);)Na++;var e=Na++;return qu.set(t,e),zc.set(e,t),e},QV=function(t){return zc.get(t)},YV=function(t,e){e>=Na&&(Na=e+1),qu.set(t,e),zc.set(e,t)},JV="style["+Ro+'][data-styled-version="5.3.6"]',XV=new RegExp("^"+Ro+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ZV=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},e4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(XV);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(YV(u,l),ZV(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},t4=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ro))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ro,"active"),r.setAttribute("data-styled-version","5.3.6");var o=t4();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},n4=function(){function t(n){var r=this.element=qA(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Hl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),r4=function(){function t(n){var r=this.element=qA(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),i4=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),rw=Fy,s4={isServer:!Fy,useCSSOMInjection:!WV},Bc=function(){function t(n,r,i){n===void 0&&(n=di),r===void 0&&(r={}),this.options=tr({},s4,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fy&&rw&&(rw=!1,function(s){for(var o=document.querySelectorAll(JV),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ro)!=="active"&&(e4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Iu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(tr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new i4(o):s?new n4(o):new r4(o),new GV(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Iu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Iu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Iu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=QV(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ro+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),o4=/(a)(d)/gi,iw=function(t){return String.fromCharCode(t+(t>25?39:97))};function em(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=iw(e%52)+n;return(iw(e%52)+n).replace(o4,"$1-$2")}var Ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},WA=function(t){return Ws(5381,t)};function KA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(fl(n)&&!Vy(n))return!1}return!0}var a4=WA("5.3.6"),l4=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KA(e),this.componentId=n,this.baseHash=Ws(a4,n),this.baseStyle=r,Bc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=as(this.rules,e,n,r).join(""),a=em(Ws(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ws(this.baseHash,r.hash),d="",h=0;h<u;h++){var y=this.rules[h];if(typeof y=="string")d+=y;else if(y){var _=as(y,e,n,r),w=Array.isArray(_)?_.join(""):_;c=Ws(c,w+h),d+=w}}if(d){var m=em(c>>>0);if(!n.hasNameForId(i,m)){var f=r(d,"."+m,void 0,i);n.insertRules(i,m,f)}s.push(m)}}return s.join(" ")},t}(),u4=/^\s*\/\/.*$/gm,c4=[":","[",".","#"];function d4(t){var e,n,r,i,s=t===void 0?di:t,o=s.options,a=o===void 0?di:o,l=s.plugins,u=l===void 0?Uc:l,c=new CV(a),d=[],h=function(w){function m(f){if(f)try{w(f+"}")}catch{}}return function(f,p,v,I,x,E,C,b,V,H){switch(f){case 1:if(V===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(b===0)return p+"/*|*/";break;case 3:switch(b){case 102:case 112:return w(v[0]+p),"";default:return p+(H===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(m)}}}(function(w){d.push(w)}),y=function(w,m,f){return m===0&&c4.indexOf(f[n.length])!==-1||f.match(i)?w:"."+e};function _(w,m,f,p){p===void 0&&(p="&");var v=w.replace(u4,""),I=m&&f?f+" "+m+" { "+v+" }":v;return e=p,n=m,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(f||!m?"":m,I)}return c.use([].concat(u,[function(w,m,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,y))},h,function(w){if(w===-2){var m=d;return d=[],m}}])),_.hash=u.length?u.reduce(function(w,m){return m.name||Hl(15),Ws(w,m.name)},5381).toString():"",_}var GA=xo.createContext();GA.Consumer;var QA=xo.createContext(),h4=(QA.Consumer,new Bc),tm=d4();function YA(){return T.useContext(GA)||h4}function JA(){return T.useContext(QA)||tm}var XA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=tm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Hl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=tm),this.name+e.hash},t}(),f4=/([A-Z])/,p4=/([A-Z])/g,m4=/^ms-/,g4=function(t){return"-"+t.toLowerCase()};function sw(t){return f4.test(t)?t.replace(p4,g4).replace(m4,"-ms-"):t}var ow=function(t){return t==null||t===!1||t===""};function as(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=as(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(ow(t))return"";if(Vy(t))return"."+t.styledComponentId;if(fl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return as(l,e,n,r)}var u;return t instanceof XA?n?(t.inject(n,r),t.getName(r)):t:Zp(t)?function c(d,h){var y,_,w=[];for(var m in d)d.hasOwnProperty(m)&&!ow(d[m])&&(Array.isArray(d[m])&&d[m].isCss||fl(d[m])?w.push(sw(m)+":",d[m],";"):Zp(d[m])?w.push.apply(w,c(d[m],m)):w.push(sw(m)+": "+(y=m,(_=d[m])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||y in PV?String(_).trim():_+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(t):t.toString()}var aw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function $y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return fl(t)||Zp(t)?aw(as(tw(Uc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:aw(as(tw(t,n)))}var ZA=function(t,e,n){return n===void 0&&(n=di),t.theme!==n.theme&&t.theme||e||n.theme},y4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v4=/(^-|-$)/g;function vf(t){return t.replace(y4,"-").replace(v4,"")}var jy=function(t){return em(WA(t)>>>0)};function Su(t){return typeof t=="string"&&!0}var nm=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},_4=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function w4(t,e,n){var r=t[n];nm(e)&&nm(r)?eR(r,e):t[n]=e}function eR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(nm(o))for(var a in o)_4(a)&&w4(t,o[a],a)}return t}var Uy=xo.createContext();Uy.Consumer;var _f={};function tR(t,e,n){var r=Vy(t),i=!Su(t),s=e.attrs,o=s===void 0?Uc:s,a=e.componentId,l=a===void 0?function(p,v){var I=typeof p!="string"?"sc":vf(p);_f[I]=(_f[I]||0)+1;var x=I+"-"+jy("5.3.6"+I+_f[I]);return v?v+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return Su(p)?"styled."+p:"Styled("+nw(p)+")"}(t):u,d=e.displayName&&e.componentId?vf(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(p,v,I){return t.shouldForwardProp(p,v,I)&&e.shouldForwardProp(p,v,I)}:t.shouldForwardProp);var _,w=new l4(n,d,r?t.componentStyle:void 0),m=w.isStatic&&o.length===0,f=function(p,v){return function(I,x,E,C){var b=I.attrs,V=I.componentStyle,H=I.defaultProps,ce=I.foldedComponentIds,Te=I.shouldForwardProp,Se=I.styledComponentId,He=I.target,et=function(Y,A,fe){Y===void 0&&(Y=di);var M=tr({},A,{theme:Y}),Ue={};return fe.forEach(function(Ae){var ae,ne,rt,Nt=Ae;for(ae in fl(Nt)&&(Nt=Nt(M)),Nt)M[ae]=Ue[ae]=ae==="className"?(ne=Ue[ae],rt=Nt[ae],ne&&rt?ne+" "+rt:ne||rt):Nt[ae]}),[M,Ue]}(ZA(x,T.useContext(Uy),H)||di,x,b),Jt=et[0],ge=et[1],O=function(Y,A,fe,M){var Ue=YA(),Ae=JA(),ae=A?Y.generateAndInjectStyles(di,Ue,Ae):Y.generateAndInjectStyles(fe,Ue,Ae);return ae}(V,C,Jt),Q=E,Z=ge.$as||x.$as||ge.as||x.as||He,me=Su(Z),L=ge!==x?tr({},x,{},ge):x,z={};for(var F in L)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?z.as=L[F]:(Te?Te(F,J_,Z):!me||J_(F))&&(z[F]=L[F]));return x.style&&ge.style!==x.style&&(z.style=tr({},x.style,{},ge.style)),z.className=Array.prototype.concat(ce,Se,O!==Se?O:null,x.className,ge.className).filter(Boolean).join(" "),z.ref=Q,T.createElement(Z,z)}(_,p,v,m)};return f.displayName=c,(_=xo.forwardRef(f)).attrs=h,_.componentStyle=w,_.displayName=c,_.shouldForwardProp=y,_.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Uc,_.styledComponentId=d,_.target=r?t.target:t,_.withComponent=function(p){var v=e.componentId,I=function(E,C){if(E==null)return{};var b,V,H={},ce=Object.keys(E);for(V=0;V<ce.length;V++)b=ce[V],C.indexOf(b)>=0||(H[b]=E[b]);return H}(e,["componentId"]),x=v&&v+"-"+(Su(p)?p:vf(nw(p)));return tR(p,tr({},I,{attrs:h,componentId:x}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?eR({},t.defaultProps,p):p}}),_.toString=function(){return"."+_.styledComponentId},i&&qV(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var W=function(t){return function e(n,r,i){if(i===void 0&&(i=di),!jA.isValidElementType(r))return Hl(1,String(r));var s=function(){return n(r,i,$y.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,tr({},i,{},o))},s.attrs=function(o){return e(n,r,tr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(tR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){W[t]=W(t)});var E4=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=KA(n),Bc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(as(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Bc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function T4(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=$y.apply(void 0,[t].concat(n)),s="sc-global-"+jy(JSON.stringify(i)),o=new E4(i,s);function a(u){var c=YA(),d=JA(),h=T.useContext(Uy),y=T.useRef(c.allocateGSInstance(s)).current;return c.server&&l(y,u,c,h,d),T.useLayoutEffect(function(){if(!c.server)return l(y,u,c,h,d),function(){return o.removeStyles(y,c)}},[y,u,c,h,d]),null}function l(u,c,d,h,y){if(o.isStatic)o.renderStyles(u,KV,d,y);else{var _=tr({},c,{theme:ZA(c,h,a.defaultProps)});o.renderStyles(u,_,d,y)}}return xo.memo(a)}function nR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=$y.apply(void 0,[t].concat(n)).join(""),s=jy(i);return new XA(s,i)}const ph=W(t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:g.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,I4=nR`
  to {
     backdrop-filter: blur(3px);
  }
`,S4=W.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`,rR=W(({className:t,children:e,addToPracticePlan:n})=>g.jsx("li",{className:t,children:g.jsx("button",{onClick:n,children:e})}))`
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
`,A4=(t,e,n)=>{const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,l=e.clientY;(a<s||a>o||l<r||l>i)&&n()},R4=W.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,iR=W(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>g.jsxs("dialog",{ref:n,onClick:o=>A4(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[g.jsxs(R4,{children:[r,g.jsx(ph,{onClick:i})]}),t]}))`
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
      animation-name: ${I4};
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
`,zy=T.createContext(null),C4=({children:t})=>{const[e,n]=T.useState(),[r,i]=T.useState(""),s=T.useRef(),[o,a]=T.useState(!1),l=()=>{s.current&&a(!1)},u=()=>{var c;(c=s.current)==null||c.show(),a(!0)};return g.jsxs(zy.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:u,closePanel:l},children:[t,g.jsx(iR,{title:r,passedRef:s,onClose:l,animationDirection:o,children:g.jsx(S4,{children:e})})]})},hi=W(({text:t,onClick:e,className:n,Icon:r})=>g.jsxs("button",{className:n,onClick:e,children:[g.jsx("span",{children:t}),!!r&&g.jsx("div",{children:g.jsx(r,{})})]}))`
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
`,lw=W(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>g.jsx("ul",{className:r,children:t.map(i=>g.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
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
 */function Je(){return Je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Je.apply(this,arguments)}var tt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tt||(tt={}));const uw="popstate";function P4(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=fr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),pl("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:us(s))}function r(i,s){ls(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return k4(e,n,r,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ls(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function x4(){return Math.random().toString(36).substr(2,8)}function cw(t,e){return{usr:t.state,key:t.key,idx:e}}function pl(t,e,n,r){return n===void 0&&(n=null),Je({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fr(e):e,{state:n,key:e&&e.key||r||x4()})}function us(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function k4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=tt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Je({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=tt.Pop;let m=c(),f=m==null?null:m-u;u=m,l&&l({action:a,location:w.location,delta:f})}function h(m,f){a=tt.Push;let p=pl(w.location,m,f);n&&n(p,m),u=c()+1;let v=cw(p,u),I=w.createHref(p);try{o.pushState(v,"",I)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(I)}s&&l&&l({action:a,location:w.location,delta:1})}function y(m,f){a=tt.Replace;let p=pl(w.location,m,f);n&&n(p,m),u=c();let v=cw(p,u),I=w.createHref(p);o.replaceState(v,"",I),s&&l&&l({action:a,location:w.location,delta:0})}function _(m){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof m=="string"?m:us(m);return p=p.replace(/ $/,"%20"),ue(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let w={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uw,d),l=m,()=>{i.removeEventListener(uw,d),l=null}},createHref(m){return e(i,m)},createURL:_,encodeLocation(m){let f=_(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(m){return o.go(m)}};return w}var Qe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qe||(Qe={}));const D4=new Set(["lazy","caseSensitive","path","id","index","children"]);function b4(t){return t.index===!0}function rm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),b4(i)){let l=Je({},i,e(i),{id:a});return r[a]=l,l}else{let l=Je({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=rm(i.children,e,o,r)),l}})}function Ks(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fr(e):e,i=Nr(r.pathname||"/",n);if(i==null)return null;let s=sR(t);O4(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=q4(i);o=B4(s[a],l)}return o}function N4(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function sR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sR(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:U4(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of oR(s.path))i(s,o,l)}),e}function oR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oR(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function O4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L4=/^:[\w-]+$/,M4=3,V4=2,F4=1,$4=10,j4=-2,dw=t=>t==="*";function U4(t,e){let n=t.split("/"),r=n.length;return n.some(dw)&&(r+=j4),e&&(r+=V4),n.filter(i=>!dw(i)).reduce((i,s)=>i+(L4.test(s)?M4:s===""?F4:$4),r)}function z4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function B4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=im({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ar([i,c.pathname]),pathnameBase:G4(Ar([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ar([i,c.pathnameBase]))}return s}function im(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=H4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:y}=c;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const _=a[d];return y&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function H4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ls(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function q4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ls(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function W4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fr(t):t;return{pathname:n?n.startsWith("/")?n:K4(n,e):e,search:Q4(r),hash:Y4(i)}}function K4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function By(t,e){let n=aR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fr(t):(i=Je({},t),ue(!i.pathname||!i.pathname.includes("?"),wf("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),wf("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),wf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=W4(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ar=t=>t.join("/").replace(/\/\/+/g,"/"),G4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Q4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Y4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class qy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function lR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uR=["post","put","patch","delete"],J4=new Set(uR),X4=["get",...uR],Z4=new Set(X4),eF=new Set([301,302,303,307,308]),tF=new Set([307,308]),Ef={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},nF={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Zo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rF=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),dR="remix-router-transitions";function iF(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let S=t.detectErrorBoundary;i=R=>({hasErrorBoundary:S(R)})}else i=rF;let s={},o=rm(t.routes,i,void 0,s),a,l=t.basename||"/",u=Je({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,h=null,y=null,_=null,w=t.hydrationData!=null,m=Ks(o,t.history.location,l),f=null;if(m==null){let S=yn(404,{pathname:t.history.location.pathname}),{matches:R,route:P}=_w(o);m=R,f={[P.id]:S}}let p,v=m.some(S=>S.route.lazy),I=m.some(S=>S.route.loader);if(v)p=!1;else if(!I)p=!0;else if(u.v7_partialHydration){let S=t.hydrationData?t.hydrationData.loaderData:null,R=t.hydrationData?t.hydrationData.errors:null;p=m.every(P=>P.route.loader&&P.route.loader.hydrate!==!0&&(S&&S[P.route.id]!==void 0||R&&R[P.route.id]!==void 0))}else p=t.hydrationData!=null;let x,E={historyAction:t.history.action,location:t.history.location,matches:m,initialized:p,navigation:Ef,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||f,fetchers:new Map,blockers:new Map},C=tt.Pop,b=!1,V,H=!1,ce=new Map,Te=null,Se=!1,He=!1,et=[],Jt=[],ge=new Map,O=0,Q=-1,Z=new Map,me=new Set,L=new Map,z=new Map,F=new Set,Y=new Map,A=new Map,fe=!1;function M(){if(c=t.history.listen(S=>{let{action:R,location:P,delta:$}=S;if(fe){fe=!1;return}ls(A.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=nv({currentLocation:E.location,nextLocation:P,historyAction:R});if(K&&$!=null){fe=!0,t.history.go($*-1),Gl(K,{state:"blocked",location:P,proceed(){Gl(K,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),t.history.go($)},reset(){let pe=new Map(E.blockers);pe.set(K,Zo),ae({blockers:pe})}});return}return de(R,P)}),n){mF(e,ce);let S=()=>gF(e,ce);e.addEventListener("pagehide",S),Te=()=>e.removeEventListener("pagehide",S)}return E.initialized||de(tt.Pop,E.location,{initialHydration:!0}),x}function Ue(){c&&c(),Te&&Te(),d.clear(),V&&V.abort(),E.fetchers.forEach((S,R)=>Vr(R)),E.blockers.forEach((S,R)=>tv(R))}function Ae(S){return d.add(S),()=>d.delete(S)}function ae(S,R){R===void 0&&(R={}),E=Je({},E,S);let P=[],$=[];u.v7_fetcherPersist&&E.fetchers.forEach((K,pe)=>{K.state==="idle"&&(F.has(pe)?$.push(pe):P.push(pe))}),[...d].forEach(K=>K(E,{deletedFetchers:$,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),u.v7_fetcherPersist&&(P.forEach(K=>E.fetchers.delete(K)),$.forEach(K=>Vr(K)))}function ne(S,R,P){var $,K;let{flushSync:pe}=P===void 0?{}:P,re=E.actionData!=null&&E.navigation.formMethod!=null&&bn(E.navigation.formMethod)&&E.navigation.state==="loading"&&(($=S.state)==null?void 0:$._isRedirect)!==!0,ee;R.actionData?Object.keys(R.actionData).length>0?ee=R.actionData:ee=null:re?ee=E.actionData:ee=null;let X=R.loaderData?vw(E.loaderData,R.loaderData,R.matches||[],R.errors):E.loaderData,_e=E.blockers;_e.size>0&&(_e=new Map(_e),_e.forEach((Oe,St)=>_e.set(St,Zo)));let mt=b===!0||E.navigation.formMethod!=null&&bn(E.navigation.formMethod)&&((K=S.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),Se||C===tt.Pop||(C===tt.Push?t.history.push(S,S.state):C===tt.Replace&&t.history.replace(S,S.state));let he;if(C===tt.Pop){let Oe=ce.get(E.location.pathname);Oe&&Oe.has(S.pathname)?he={currentLocation:E.location,nextLocation:S}:ce.has(S.pathname)&&(he={currentLocation:S,nextLocation:E.location})}else if(H){let Oe=ce.get(E.location.pathname);Oe?Oe.add(S.pathname):(Oe=new Set([S.pathname]),ce.set(E.location.pathname,Oe)),he={currentLocation:E.location,nextLocation:S}}ae(Je({},R,{actionData:ee,loaderData:X,historyAction:C,location:S,initialized:!0,navigation:Ef,revalidation:"idle",restoreScrollPosition:iv(S,R.matches||E.matches),preventScrollReset:mt,blockers:_e}),{viewTransitionOpts:he,flushSync:pe===!0}),C=tt.Pop,b=!1,H=!1,Se=!1,He=!1,et=[],Jt=[]}async function rt(S,R){if(typeof S=="number"){t.history.go(S);return}let P=sm(E.location,E.matches,l,u.v7_prependBasename,S,u.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:$,submission:K,error:pe}=hw(u.v7_normalizeFormMethod,!1,P,R),re=E.location,ee=pl(E.location,$,R&&R.state);ee=Je({},ee,t.history.encodeLocation(ee));let X=R&&R.replace!=null?R.replace:void 0,_e=tt.Push;X===!0?_e=tt.Replace:X===!1||K!=null&&bn(K.formMethod)&&K.formAction===E.location.pathname+E.location.search&&(_e=tt.Replace);let mt=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,he=(R&&R.unstable_flushSync)===!0,Oe=nv({currentLocation:re,nextLocation:ee,historyAction:_e});if(Oe){Gl(Oe,{state:"blocked",location:ee,proceed(){Gl(Oe,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),rt(S,R)},reset(){let St=new Map(E.blockers);St.set(Oe,Zo),ae({blockers:St})}});return}return await de(_e,ee,{submission:K,pendingError:pe,preventScrollReset:mt,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:he})}function Nt(){if(Ht(),ae({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){de(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}de(C||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function de(S,R,P){V&&V.abort(),V=null,C=S,Se=(P&&P.startUninterruptedRevalidation)===!0,CR(E.location,E.matches),b=(P&&P.preventScrollReset)===!0,H=(P&&P.enableViewTransition)===!0;let $=a||o,K=P&&P.overrideNavigation,pe=Ks($,R,l),re=(P&&P.flushSync)===!0;if(!pe){let St=yn(404,{pathname:R.pathname}),{matches:gn,route:gt}=_w($);vh(),ne(R,{matches:gn,loaderData:{},errors:{[gt.id]:St}},{flushSync:re});return}if(E.initialized&&!He&&uF(E.location,R)&&!(P&&P.submission&&bn(P.submission.formMethod))){ne(R,{matches:pe},{flushSync:re});return}V=new AbortController;let ee=ta(t.history,R,V.signal,P&&P.submission),X,_e;if(P&&P.pendingError)_e={[Oa(pe).route.id]:P.pendingError};else if(P&&P.submission&&bn(P.submission.formMethod)){let St=await pt(ee,R,P.submission,pe,{replace:P.replace,flushSync:re});if(St.shortCircuited)return;X=St.pendingActionData,_e=St.pendingActionError,K=Tf(R,P.submission),re=!1,ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:mt,loaderData:he,errors:Oe}=await Re(ee,R,pe,K,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,P&&P.initialHydration===!0,re,X,_e);mt||(V=null,ne(R,Je({matches:pe},X?{actionData:X}:{},{loaderData:he,errors:Oe})))}async function pt(S,R,P,$,K){K===void 0&&(K={}),Ht();let pe=fF(R,P);ae({navigation:pe},{flushSync:K.flushSync===!0});let re,ee=am($,R);if(!ee.route.action&&!ee.route.lazy)re={type:Qe.error,error:yn(405,{method:S.method,pathname:R.pathname,routeId:ee.route.id})};else if(re=await ea("action",S,ee,$,s,i,l,u.v7_relativeSplatPath),S.signal.aborted)return{shortCircuited:!0};if(zi(re)){let X;return K&&K.replace!=null?X=K.replace:X=re.location===E.location.pathname+E.location.search,await Hn(E,re,{submission:P,replace:X}),{shortCircuited:!0}}if(Gs(re)){let X=Oa($,ee.route.id);return(K&&K.replace)!==!0&&(C=tt.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:re.error}}}if(Ui(re))throw yn(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:re.data}}}async function Re(S,R,P,$,K,pe,re,ee,X,_e,mt){let he=$||Tf(R,K),Oe=K||pe||Tw(he),St=a||o,[gn,gt]=fw(t.history,E,P,Oe,R,u.v7_partialHydration&&ee===!0,He,et,Jt,F,L,me,St,l,_e,mt);if(vh(Ne=>!(P&&P.some(ze=>ze.route.id===Ne))||gn&&gn.some(ze=>ze.route.id===Ne)),Q=++O,gn.length===0&&gt.length===0){let Ne=Zy();return ne(R,Je({matches:P,loaderData:{},errors:mt||null},_e?{actionData:_e}:{},Ne?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!Se&&(!u.v7_partialHydration||!ee)){gt.forEach(ze=>{let Wn=E.fetchers.get(ze.key),Yl=na(void 0,Wn?Wn.data:void 0);E.fetchers.set(ze.key,Yl)});let Ne=_e||E.actionData;ae(Je({navigation:he},Ne?Object.keys(Ne).length===0?{actionData:null}:{actionData:Ne}:{},gt.length>0?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X})}gt.forEach(Ne=>{ge.has(Ne.key)&&Fr(Ne.key),Ne.controller&&ge.set(Ne.key,Ne.controller)});let Ss=()=>gt.forEach(Ne=>Fr(Ne.key));V&&V.signal.addEventListener("abort",Ss);let{results:_h,loaderResults:As,fetcherResults:$r}=await Mr(E.matches,P,gn,gt,S);if(S.signal.aborted)return{shortCircuited:!0};V&&V.signal.removeEventListener("abort",Ss),gt.forEach(Ne=>ge.delete(Ne.key));let Pi=ww(_h);if(Pi){if(Pi.idx>=gn.length){let Ne=gt[Pi.idx-gn.length].key;me.add(Ne)}return await Hn(E,Pi.result,{replace:re}),{shortCircuited:!0}}let{loaderData:wh,errors:Eh}=yw(E,P,gn,As,mt,gt,$r,Y);Y.forEach((Ne,ze)=>{Ne.subscribe(Wn=>{(Wn||Ne.done)&&Y.delete(ze)})});let Th=Zy(),Rs=ev(Q),Ql=Th||Rs||gt.length>0;return Je({loaderData:wh,errors:Eh},Ql?{fetchers:new Map(E.fetchers)}:{})}function ut(S,R,P,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(S)&&Fr(S);let K=($&&$.unstable_flushSync)===!0,pe=a||o,re=sm(E.location,E.matches,l,u.v7_prependBasename,P,u.v7_relativeSplatPath,R,$==null?void 0:$.relative),ee=Ks(pe,re,l);if(!ee){be(S,R,yn(404,{pathname:re}),{flushSync:K});return}let{path:X,submission:_e,error:mt}=hw(u.v7_normalizeFormMethod,!0,re,$);if(mt){be(S,R,mt,{flushSync:K});return}let he=am(ee,X);if(b=($&&$.preventScrollReset)===!0,_e&&bn(_e.formMethod)){Ci(S,R,X,he,ee,K,_e);return}L.set(S,{routeId:R,path:X}),ct(S,R,X,he,ee,K,_e)}async function Ci(S,R,P,$,K,pe,re){if(Ht(),L.delete(S),!$.route.action&&!$.route.lazy){let ze=yn(405,{method:re.formMethod,pathname:P,routeId:R});be(S,R,ze,{flushSync:pe});return}let ee=E.fetchers.get(S);J(S,pF(re,ee),{flushSync:pe});let X=new AbortController,_e=ta(t.history,P,X.signal,re);ge.set(S,X);let mt=O,he=await ea("action",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(_e.signal.aborted){ge.get(S)===X&&ge.delete(S);return}if(u.v7_fetcherPersist&&F.has(S)){if(zi(he)||Gs(he)){J(S,zr(void 0));return}}else{if(zi(he))if(ge.delete(S),Q>mt){J(S,zr(void 0));return}else return me.add(S),J(S,na(re)),Hn(E,he,{fetcherSubmission:re});if(Gs(he)){be(S,R,he.error);return}}if(Ui(he))throw yn(400,{type:"defer-action"});let Oe=E.navigation.location||E.location,St=ta(t.history,Oe,X.signal),gn=a||o,gt=E.navigation.state!=="idle"?Ks(gn,E.navigation.location,l):E.matches;ue(gt,"Didn't find any matches after fetcher action");let Ss=++O;Z.set(S,Ss);let _h=na(re,he.data);E.fetchers.set(S,_h);let[As,$r]=fw(t.history,E,gt,re,Oe,!1,He,et,Jt,F,L,me,gn,l,{[$.route.id]:he.data},void 0);$r.filter(ze=>ze.key!==S).forEach(ze=>{let Wn=ze.key,Yl=E.fetchers.get(Wn),xR=na(void 0,Yl?Yl.data:void 0);E.fetchers.set(Wn,xR),ge.has(Wn)&&Fr(Wn),ze.controller&&ge.set(Wn,ze.controller)}),ae({fetchers:new Map(E.fetchers)});let Pi=()=>$r.forEach(ze=>Fr(ze.key));X.signal.addEventListener("abort",Pi);let{results:wh,loaderResults:Eh,fetcherResults:Th}=await Mr(E.matches,gt,As,$r,St);if(X.signal.aborted)return;X.signal.removeEventListener("abort",Pi),Z.delete(S),ge.delete(S),$r.forEach(ze=>ge.delete(ze.key));let Rs=ww(wh);if(Rs){if(Rs.idx>=As.length){let ze=$r[Rs.idx-As.length].key;me.add(ze)}return Hn(E,Rs.result)}let{loaderData:Ql,errors:Ne}=yw(E,E.matches,As,Eh,void 0,$r,Th,Y);if(E.fetchers.has(S)){let ze=zr(he.data);E.fetchers.set(S,ze)}ev(Ss),E.navigation.state==="loading"&&Ss>Q?(ue(C,"Expected pending action"),V&&V.abort(),ne(E.navigation.location,{matches:gt,loaderData:Ql,errors:Ne,fetchers:new Map(E.fetchers)})):(ae({errors:Ne,loaderData:vw(E.loaderData,Ql,gt,Ne),fetchers:new Map(E.fetchers)}),He=!1)}async function ct(S,R,P,$,K,pe,re){let ee=E.fetchers.get(S);J(S,na(re,ee?ee.data:void 0),{flushSync:pe});let X=new AbortController,_e=ta(t.history,P,X.signal);ge.set(S,X);let mt=O,he=await ea("loader",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(Ui(he)&&(he=await pR(he,_e.signal,!0)||he),ge.get(S)===X&&ge.delete(S),!_e.signal.aborted){if(F.has(S)){J(S,zr(void 0));return}if(zi(he))if(Q>mt){J(S,zr(void 0));return}else{me.add(S),await Hn(E,he);return}if(Gs(he)){be(S,R,he.error);return}ue(!Ui(he),"Unhandled fetcher deferred data"),J(S,zr(he.data))}}async function Hn(S,R,P){let{submission:$,fetcherSubmission:K,replace:pe}=P===void 0?{}:P;R.revalidate&&(He=!0);let re=pl(S.location,R.location,{_isRedirect:!0});if(ue(re,"Expected a location on the redirect navigation"),n){let Oe=!1;if(R.reloadDocument)Oe=!0;else if(cR.test(R.location)){const St=t.history.createURL(R.location);Oe=St.origin!==e.location.origin||Nr(St.pathname,l)==null}if(Oe){pe?e.location.replace(R.location):e.location.assign(R.location);return}}V=null;let ee=pe===!0?tt.Replace:tt.Push,{formMethod:X,formAction:_e,formEncType:mt}=S.navigation;!$&&!K&&X&&_e&&mt&&($=Tw(S.navigation));let he=$||K;if(tF.has(R.status)&&he&&bn(he.formMethod))await de(ee,re,{submission:Je({},he,{formAction:R.location}),preventScrollReset:b});else{let Oe=Tf(re,$);await de(ee,re,{overrideNavigation:Oe,fetcherSubmission:K,preventScrollReset:b})}}async function Mr(S,R,P,$,K){let pe=await Promise.all([...P.map(X=>ea("loader",K,X,R,s,i,l,u.v7_relativeSplatPath)),...$.map(X=>X.matches&&X.match&&X.controller?ea("loader",ta(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l,u.v7_relativeSplatPath):{type:Qe.error,error:yn(404,{pathname:X.path})})]),re=pe.slice(0,P.length),ee=pe.slice(P.length);return await Promise.all([Ew(S,P,re,re.map(()=>K.signal),!1,E.loaderData),Ew(S,$.map(X=>X.match),ee,$.map(X=>X.controller?X.controller.signal:null),!0)]),{results:pe,loaderResults:re,fetcherResults:ee}}function Ht(){He=!0,et.push(...vh()),L.forEach((S,R)=>{ge.has(R)&&(Jt.push(R),Fr(R))})}function J(S,R,P){P===void 0&&(P={}),E.fetchers.set(S,R),ae({fetchers:new Map(E.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function be(S,R,P,$){$===void 0&&($={});let K=Oa(E.matches,R);Vr(S),ae({errors:{[K.route.id]:P},fetchers:new Map(E.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Is(S){return u.v7_fetcherPersist&&(z.set(S,(z.get(S)||0)+1),F.has(S)&&F.delete(S)),E.fetchers.get(S)||nF}function Vr(S){let R=E.fetchers.get(S);ge.has(S)&&!(R&&R.state==="loading"&&Z.has(S))&&Fr(S),L.delete(S),Z.delete(S),me.delete(S),F.delete(S),E.fetchers.delete(S)}function qn(S){if(u.v7_fetcherPersist){let R=(z.get(S)||0)-1;R<=0?(z.delete(S),F.add(S)):z.set(S,R)}else Vr(S);ae({fetchers:new Map(E.fetchers)})}function Fr(S){let R=ge.get(S);ue(R,"Expected fetch controller: "+S),R.abort(),ge.delete(S)}function Xy(S){for(let R of S){let P=Is(R),$=zr(P.data);E.fetchers.set(R,$)}}function Zy(){let S=[],R=!1;for(let P of me){let $=E.fetchers.get(P);ue($,"Expected fetcher: "+P),$.state==="loading"&&(me.delete(P),S.push(P),R=!0)}return Xy(S),R}function ev(S){let R=[];for(let[P,$]of Z)if($<S){let K=E.fetchers.get(P);ue(K,"Expected fetcher: "+P),K.state==="loading"&&(Fr(P),Z.delete(P),R.push(P))}return Xy(R),R.length>0}function AR(S,R){let P=E.blockers.get(S)||Zo;return A.get(S)!==R&&A.set(S,R),P}function tv(S){E.blockers.delete(S),A.delete(S)}function Gl(S,R){let P=E.blockers.get(S)||Zo;ue(P.state==="unblocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="blocked"||P.state==="blocked"&&R.state==="proceeding"||P.state==="blocked"&&R.state==="unblocked"||P.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+R.state);let $=new Map(E.blockers);$.set(S,R),ae({blockers:$})}function nv(S){let{currentLocation:R,nextLocation:P,historyAction:$}=S;if(A.size===0)return;A.size>1&&ls(!1,"A router only supports one blocker at a time");let K=Array.from(A.entries()),[pe,re]=K[K.length-1],ee=E.blockers.get(pe);if(!(ee&&ee.state==="proceeding")&&re({currentLocation:R,nextLocation:P,historyAction:$}))return pe}function vh(S){let R=[];return Y.forEach((P,$)=>{(!S||S($))&&(P.cancel(),R.push($),Y.delete($))}),R}function RR(S,R,P){if(h=S,_=R,y=P||null,!w&&E.navigation===Ef){w=!0;let $=iv(E.location,E.matches);$!=null&&ae({restoreScrollPosition:$})}return()=>{h=null,_=null,y=null}}function rv(S,R){return y&&y(S,R.map($=>N4($,E.loaderData)))||S.key}function CR(S,R){if(h&&_){let P=rv(S,R);h[P]=_()}}function iv(S,R){if(h){let P=rv(S,R),$=h[P];if(typeof $=="number")return $}return null}function PR(S){s={},a=rm(S,i,void 0,s)}return x={get basename(){return l},get future(){return u},get state(){return E},get routes(){return o},get window(){return e},initialize:M,subscribe:Ae,enableScrollRestoration:RR,navigate:rt,fetch:ut,revalidate:Nt,createHref:S=>t.history.createHref(S),encodeLocation:S=>t.history.encodeLocation(S),getFetcher:Is,deleteFetcher:qn,dispose:Ue,getBlocker:AR,deleteBlocker:tv,_internalFetchControllers:ge,_internalActiveDeferreds:Y,_internalSetRoutes:PR},x}function sF(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function sm(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=Hy(i||".",By(l,s),Nr(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Wy(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Ar([n,c.pathname])),us(c)}function hw(t,e,n,r){if(!r||!sF(r))return{path:n};if(r.formMethod&&!hF(r.formMethod))return{path:n,error:yn(405,{method:r.formMethod})};let i=()=>({path:n,error:yn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=fR(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!bn(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,_)=>{let[w,m]=_;return""+y+w+"="+m+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!bn(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=om(r.formData),u=r.formData;else if(r.body instanceof FormData)l=om(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=gw(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=gw(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(bn(c.formMethod))return{path:n,submission:c};let d=fr(n);return e&&d.search&&Wy(d.search)&&l.append("index",""),d.search="?"+l,{path:us(d),submission:c}}function oF(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function fw(t,e,n,r,i,s,o,a,l,u,c,d,h,y,_,w){let m=w?Object.values(w)[0]:_?Object.values(_)[0]:void 0,f=t.createURL(e.location),p=t.createURL(i),v=w?Object.keys(w)[0]:void 0,x=oF(n,v).filter((C,b)=>{let{route:V}=C;if(V.lazy)return!0;if(V.loader==null)return!1;if(s)return V.loader.hydrate?!0:e.loaderData[V.id]===void 0&&(!e.errors||e.errors[V.id]===void 0);if(aF(e.loaderData,e.matches[b],C)||a.some(Te=>Te===C.route.id))return!0;let H=e.matches[b],ce=C;return pw(C,Je({currentUrl:f,currentParams:H.params,nextUrl:p,nextParams:ce.params},r,{actionResult:m,defaultShouldRevalidate:o||f.pathname+f.search===p.pathname+p.search||f.search!==p.search||hR(H,ce)}))}),E=[];return c.forEach((C,b)=>{if(s||!n.some(Se=>Se.route.id===C.routeId)||u.has(b))return;let V=Ks(h,C.path,y);if(!V){E.push({key:b,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let H=e.fetchers.get(b),ce=am(V,C.path),Te=!1;d.has(b)?Te=!1:l.includes(b)?Te=!0:H&&H.state!=="idle"&&H.data===void 0?Te=o:Te=pw(ce,Je({currentUrl:f,currentParams:e.matches[e.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:m,defaultShouldRevalidate:o})),Te&&E.push({key:b,routeId:C.routeId,path:C.path,matches:V,match:ce,controller:new AbortController})}),[x,E]}function aF(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function hR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function pw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function mw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ls(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!D4.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Je({},e(i),{lazy:void 0}))}async function ea(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,h=w=>{let m,f=new Promise((p,v)=>m=v);return d=()=>m(),e.signal.addEventListener("abort",d),Promise.race([w({request:e,params:n.params,context:l.requestContext}),f])};try{let w=n.route[t];if(n.route.lazy)if(w){let m,f=await Promise.all([h(w).catch(p=>{m=p}),mw(n.route,s,i)]);if(m)throw m;c=f[0]}else if(await mw(n.route,s,i),w=n.route[t],w)c=await h(w);else if(t==="action"){let m=new URL(e.url),f=m.pathname+m.search;throw yn(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Qe.data,data:void 0};else if(w)c=await h(w);else{let m=new URL(e.url),f=m.pathname+m.search;throw yn(404,{pathname:f})}ue(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(w){u=Qe.error,c=w}finally{d&&e.signal.removeEventListener("abort",d)}if(dF(c)){let w=c.status;if(eF.has(w)){let f=c.headers.get("Location");if(ue(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!cR.test(f))f=sm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,f,a);else if(!l.isStaticRequest){let p=new URL(e.url),v=f.startsWith("//")?new URL(p.protocol+f):new URL(f),I=Nr(v.pathname,o)!=null;v.origin===p.origin&&I&&(f=v.pathname+v.search+v.hash)}if(l.isStaticRequest)throw c.headers.set("Location",f),c;return{type:Qe.redirect,status:w,location:f,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Qe.error?Qe.error:Qe.data,response:c};let m;try{let f=c.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?c.body==null?m=null:m=await c.json():m=await c.text()}catch(f){return{type:Qe.error,error:f}}return u===Qe.error?{type:u,error:new qy(w,c.statusText,m),headers:c.headers}:{type:Qe.data,data:m,statusCode:c.status,headers:c.headers}}if(u===Qe.error)return{type:u,error:c};if(cF(c)){var y,_;return{type:Qe.deferred,deferredData:c,statusCode:(y=c.init)==null?void 0:y.status,headers:((_=c.init)==null?void 0:_.headers)&&new Headers(c.init.headers)}}return{type:Qe.data,data:c}}function ta(t,e,n,r){let i=t.createURL(fR(e)).toString(),s={signal:n};if(r&&bn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=om(r.formData):s.body=r.formData}return new Request(i,s)}function om(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function gw(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function lF(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(ue(!zi(c),"Cannot handle redirect results in processLoaderData"),Gs(c)){let y=Oa(t,h),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=_),s[h]=void 0,l||(l=!0,a=lR(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Ui(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function yw(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=lF(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:y}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let _=o[c];if(!(y&&y.signal.aborted))if(Gs(_)){let w=Oa(t.matches,h==null?void 0:h.route.id);u&&u[w.route.id]||(u=Je({},u,{[w.route.id]:_.error})),t.fetchers.delete(d)}else if(zi(_))ue(!1,"Unhandled fetcher revalidation redirect");else if(Ui(_))ue(!1,"Unhandled fetcher deferred data");else{let w=zr(_.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function vw(t,e,n,r){let i=Je({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Oa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function _w(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function yn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new qy(t||500,o,new Error(a),!0)}function ww(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(zi(n))return{result:n,idx:e}}}function fR(t){let e=typeof t=="string"?fr(t):t;return us(Je({},e,{hash:""}))}function uF(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Ui(t){return t.type===Qe.deferred}function Gs(t){return t.type===Qe.error}function zi(t){return(t&&t.type)===Qe.redirect}function cF(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function dF(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function hF(t){return Z4.has(t.toLowerCase())}function bn(t){return J4.has(t.toLowerCase())}async function Ew(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!hR(u,l)&&(s&&s[l.route.id])!==void 0;if(Ui(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await pR(a,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function pR(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Qe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Qe.error,error:i}}return{type:Qe.data,data:t.deferredData.data}}}function Wy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function am(t,e){let n=typeof e=="string"?fr(e).search:e.search;if(t[t.length-1].route.index&&Wy(n||""))return t[t.length-1];let r=aR(t);return r[r.length-1]}function Tw(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Tf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fF(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function na(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pF(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function zr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function mF(t,e){try{let n=t.sessionStorage.getItem(dR);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function gF(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(dR,JSON.stringify(n))}catch(r){ls(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}const ql=T.createContext(null),Ky=T.createContext(null),Ri=T.createContext(null),mh=T.createContext(null),Lr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),mR=T.createContext(null);function yF(t,e){let{relative:n}=e===void 0?{}:e;Wl()||ue(!1);let{basename:r,navigator:i}=T.useContext(Ri),{hash:s,pathname:o,search:a}=gh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Wl(){return T.useContext(mh)!=null}function jo(){return Wl()||ue(!1),T.useContext(mh).location}function gR(t){T.useContext(Ri).static||T.useLayoutEffect(t)}function Ts(){let{isDataRoute:t}=T.useContext(Lr);return t?DF():vF()}function vF(){Wl()||ue(!1);let t=T.useContext(ql),{basename:e,future:n,navigator:r}=T.useContext(Ri),{matches:i}=T.useContext(Lr),{pathname:s}=jo(),o=JSON.stringify(By(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return gR(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Hy(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ar([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const _F=T.createContext(null);function wF(t){let e=T.useContext(Lr).outlet;return e&&T.createElement(_F.Provider,{value:t},e)}function Gy(){let{matches:t}=T.useContext(Lr),e=t[t.length-1];return e?e.params:{}}function gh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Ri),{matches:i}=T.useContext(Lr),{pathname:s}=jo(),o=JSON.stringify(By(i,r.v7_relativeSplatPath));return T.useMemo(()=>Hy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EF(t,e,n,r){Wl()||ue(!1);let{navigator:i}=T.useContext(Ri),{matches:s}=T.useContext(Lr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=jo(),c;if(e){var d;let m=typeof e=="string"?fr(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||ue(!1),c=m}else c=u;let h=c.pathname||"/",y=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=Ks(t,{pathname:y}),w=RF(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Ar([l,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Ar([l,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,r);return e&&w?T.createElement(mh.Provider,{value:{location:ml({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:tt.Pop}},w):w}function TF(){let t=kF(),e=lR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const IF=T.createElement(TF,null);class SF extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Lr.Provider,{value:this.props.routeContext},T.createElement(mR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AF(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(ql);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Lr.Provider,{value:e},r)}function RF(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ue(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:y}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let y,_=!1,w=null,m=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||IF,l&&(u<0&&h===0?(bF("route-fallback",!1),_=!0,m=null):u===h&&(_=!0,m=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,h+1)),p=()=>{let v;return y?v=w:_?v=m:d.route.Component?v=T.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,T.createElement(AF,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(SF,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var yR=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(yR||{}),Hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hc||{});function CF(t){let e=T.useContext(ql);return e||ue(!1),e}function PF(t){let e=T.useContext(Ky);return e||ue(!1),e}function xF(t){let e=T.useContext(Lr);return e||ue(!1),e}function vR(t){let e=xF(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function kF(){var t;let e=T.useContext(mR),n=PF(Hc.UseRouteError),r=vR(Hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DF(){let{router:t}=CF(yR.UseNavigateStable),e=vR(Hc.UseNavigateStable),n=T.useRef(!1);return gR(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ml({fromRouteId:e},s)))},[t,e])}const Iw={};function bF(t,e,n){!e&&!Iw[t]&&(Iw[t]=!0)}function NF(t){return wF(t.context)}function pr(t){ue(!1)}function OF(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:s,static:o=!1,future:a}=t;Wl()&&ue(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:ml({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=fr(r));let{pathname:c="/",search:d="",hash:h="",state:y=null,key:_="default"}=r,w=T.useMemo(()=>{let m=Nr(c,l);return m==null?null:{location:{pathname:m,search:d,hash:h,state:y,key:_},navigationType:i}},[l,c,d,h,y,_,i]);return w==null?null:T.createElement(Ri.Provider,{value:u},T.createElement(mh.Provider,{children:n,value:w}))}new Promise(()=>{});function lm(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,lm(r.props.children,s));return}r.type!==pr&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lm(r.props.children,s)),n.push(o)}),n}function LF(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:T.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:T.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:T.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}function _R(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VF(t,e){return t.button===0&&(!e||e==="_self")&&!MF(t)}const FF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$F=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],jF="6";try{window.__reactRouterVersion=jF}catch{}function UF(t,e){return iF({basename:e==null?void 0:e.basename,future:Co({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:P4({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||zF(),routes:t,mapRouteProperties:LF,window:e==null?void 0:e.window}).initialize()}function zF(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Co({},e,{errors:BF(e.errors)})),e}function BF(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new qy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const wR=T.createContext({isTransitioning:!1}),HF=T.createContext(new Map),qF="startTransition",Sw=GR[qF],WF="flushSync",Aw=sx[WF];function KF(t){Sw?Sw(t):t()}function ra(t){Aw?Aw(t):t()}class GF{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function QF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=T.useState(n.state),[o,a]=T.useState(),[l,u]=T.useState({isTransitioning:!1}),[c,d]=T.useState(),[h,y]=T.useState(),[_,w]=T.useState(),m=T.useRef(new Map),{v7_startTransition:f}=r||{},p=T.useCallback(C=>{f?KF(C):C()},[f]),v=T.useCallback((C,b)=>{let{deletedFetchers:V,unstable_flushSync:H,unstable_viewTransitionOpts:ce}=b;V.forEach(Se=>m.current.delete(Se)),C.fetchers.forEach((Se,He)=>{Se.data!==void 0&&m.current.set(He,Se.data)});let Te=n.window==null||typeof n.window.document.startViewTransition!="function";if(!ce||Te){H?ra(()=>s(C)):p(()=>s(C));return}if(H){ra(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})});let Se=n.window.document.startViewTransition(()=>{ra(()=>s(C))});Se.finished.finally(()=>{ra(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),ra(()=>y(Se));return}h?(c&&c.resolve(),h.skipTransition(),w({state:C,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})):(a(C),u({isTransitioning:!0,flushSync:!1,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation}))},[n.window,h,c,m,p]);T.useLayoutEffect(()=>n.subscribe(v),[n,v]),T.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new GF)},[l]),T.useEffect(()=>{if(c&&o&&n.window){let C=o,b=c.promise,V=n.window.document.startViewTransition(async()=>{p(()=>s(C)),await b});V.finished.finally(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(V)}},[p,o,c,n.window]),T.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,h,i.location,o]),T.useEffect(()=>{!l.isTransitioning&&_&&(a(_.state),u({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),w(void 0))},[l.isTransitioning,_]),T.useEffect(()=>{},[]);let I=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,b,V)=>n.navigate(C,{state:b,preventScrollReset:V==null?void 0:V.preventScrollReset}),replace:(C,b,V)=>n.navigate(C,{replace:!0,state:b,preventScrollReset:V==null?void 0:V.preventScrollReset})}),[n]),x=n.basename||"/",E=T.useMemo(()=>({router:n,navigator:I,static:!1,basename:x}),[n,I,x]);return T.createElement(T.Fragment,null,T.createElement(ql.Provider,{value:E},T.createElement(Ky.Provider,{value:i},T.createElement(HF.Provider,{value:m.current},T.createElement(wR.Provider,{value:l},T.createElement(OF,{basename:x,location:i.location,navigationType:i.historyAction,navigator:I,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?T.createElement(YF,{routes:n.routes,future:n.future,state:i}):e))))),null)}function YF(t){let{routes:e,future:n,state:r}=t;return EF(e,void 0,r,n)}const JF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yh=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=_R(e,FF),{basename:y}=T.useContext(Ri),_,w=!1;if(typeof u=="string"&&XF.test(u)&&(_=u,JF))try{let v=new URL(window.location.href),I=u.startsWith("//")?new URL(v.protocol+u):new URL(u),x=Nr(I.pathname,y);I.origin===v.origin&&x!=null?u=x+I.search+I.hash:w=!0}catch{}let m=yF(u,{relative:i}),f=e$(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(v){r&&r(v),v.defaultPrevented||f(v)}return T.createElement("a",Co({},h,{href:_||m,onClick:w||s?r:p,ref:n,target:l}))}),If=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=_R(e,$F),h=gh(l,{relative:d.relative}),y=jo(),_=T.useContext(Ky),{navigator:w,basename:m}=T.useContext(Ri),f=_!=null&&t$(h)&&u===!0,p=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,v=y.pathname,I=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(v=v.toLowerCase(),I=I?I.toLowerCase():null,p=p.toLowerCase()),I&&m&&(I=Nr(I,m)||I);const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=v===p||!o&&v.startsWith(p)&&v.charAt(x)==="/",C=I!=null&&(I===p||!o&&I.startsWith(p)&&I.charAt(p.length)==="/"),b={isActive:E,isPending:C,isTransitioning:f},V=E?r:void 0,H;typeof s=="function"?H=s(b):H=[s,E?"active":null,C?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ce=typeof a=="function"?a(b):a;return T.createElement(yh,Co({},d,{"aria-current":V,className:H,ref:n,style:ce,to:l,unstable_viewTransition:u}),typeof c=="function"?c(b):c)});var um;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(um||(um={}));var Rw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rw||(Rw={}));function ZF(t){let e=T.useContext(ql);return e||ue(!1),e}function e$(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ts(),u=jo(),c=gh(t,{relative:o});return T.useCallback(d=>{if(VF(d,n)){d.preventDefault();let h=r!==void 0?r:us(u)===us(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function t$(t,e){e===void 0&&(e={});let n=T.useContext(wR);n==null&&ue(!1);let{basename:r}=ZF(um.useViewTransitionState),i=gh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return im(i.pathname,o)!=null||im(i.pathname,s)!=null}const Cw=W(({Icon:t,className:e,...n})=>g.jsxs("div",{className:e,children:[g.jsx("input",{...n}),g.jsx(t,{})]}))`
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
`,n$=W(({className:t})=>{const e=Ts(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Rl();LD(s,i.get("email"),i.get("password")),e("/")};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:n,children:[g.jsx(Cw,{Icon:d$,id:"email",type:"email",name:"email"}),g.jsx(Cw,{Icon:h$,id:"password",type:"password",name:"password"}),g.jsx("button",{type:"submit",children:"Sign In"})]})})})`
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
`,r$=W(({className:t})=>{const{addToast:e,removeToast:n}=T.useContext(Kl),r=Ts(),i=Rl(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}OD(i,a.get("email"),a.get("password")).then(l=>{EV(Tn(Xe,"users",l.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:s,children:[g.jsxs("label",{htmlFor:"email",children:["Email:",g.jsx("input",{id:"email",type:"email",name:"email"})]}),g.jsxs("label",{htmlFor:"password",children:["Password:",g.jsx("input",{id:"password",type:"password",name:"password"})]}),g.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",g.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),g.jsx("button",{type:"submit",children:"Sign Up"})]})})})`
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
`,Uo=T.createContext(null),i$=({children:t})=>{const[e,n]=T.useState();return Rl().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),g.jsx(Uo.Provider,{value:e,children:t})},s$=W(({className:t})=>{const e=T.useContext(Uo);return g.jsxs(g.Fragment,{children:[g.jsx("nav",{className:t,children:g.jsx("ul",{children:e?g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(If,{to:"/teams",children:"Teams"})}),g.jsx("li",{children:e.email}),g.jsx("li",{children:g.jsx("button",{onClick:()=>Rl().signOut(),children:"Sign out"})})]}):g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(If,{to:"/sign_in",children:"Sign In"})}),g.jsx("li",{children:g.jsx(If,{to:"/sign_up",children:"Sign Up"})})]})})}),g.jsx(NF,{})]})})`
  border-bottom: 1px groove var(--blue100);
  background-color: var(--blue100);
  padding: 16px;
  color: white;

  & a {
    color: currentcolor;
  }

  & > ul {
    list-style: none;
    display: flex;
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
`,cm=W(({className:t,children:e,title:n,...r})=>g.jsxs("details",{className:t,...r,children:[g.jsx("summary",{children:n}),e]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,o$=W(({className:t})=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[g.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),g.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,a$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,l$=W(({className:t=""})=>g.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,u$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,c$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,d$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,h$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,ER=W(({className:t,children:e})=>g.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,f$=nR`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,TR=W(({className:t})=>g.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${f$} 500ms infinite;
`,p$=T4`
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
  }
`,m$=W(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,g$=W.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,y$=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},v$=(t,e)=>new Date(t,e,0).getDate(),_$=(t,e)=>new Date(t,e,1),w$=(t,e)=>{const r=((i,s)=>o=>{var a;(a=i.current)!=null&&a.contains(o.target)||typeof s=="function"&&s(o)})(t,e);T.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},E$=["January","February","March","April","May","June","July","August","September","October","November","December"],T$=["M","Tu","W","Th","F","Sa","Su"],I$=W.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,S$=W.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,A$=W.div`
  text-align: center;
`,R$=W.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,C$=(t,e)=>{const[n,r]=T.useState([]),i=v$(e,t+1);let s=_$(e,t).getDay()-1;return s===-1&&(s=6),T.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,l)=>l+1)];r(o)},[t,e]),n},P$=W(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,l]=T.useState(o),[u,c]=T.useState(s),d=C$(a,u),h=y$(new Date(i).getFullYear(),5),y=m=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(m).padStart(2,"0")}-${u}`)},_=()=>{l(m=>Number(m)===0?(c(f=>f-1),11):m-1)},w=()=>l(m=>Number(m)===11?(c(f=>f+1),11):m+1);return g.jsxs("div",{ref:e,className:t,popover:"true",children:[g.jsxs(S$,{children:[g.jsx("select",{value:`${a}/${u}`,onChange:m=>{const[f,p]=m.target.value.split("/");l(Number(f)),c(Number(p))},children:h.map(m=>E$.map((f,p)=>g.jsx("option",{value:`${p}/${m}`,children:`${f} , ${m}`},`${p}/${m}`)))}),g.jsx("button",{"aria-label":"left",onClick:_,children:"←"}),g.jsx("button",{"aria-label":"right",onClick:w,children:"→"})]}),g.jsxs(I$,{children:[T$.map(m=>g.jsx(A$,{children:m},`${m}-header`)),d.map((m,f)=>typeof m=="number"?g.jsx(R$,{onClick:()=>y(m),$selected:new Date(i).getDate()===m&&a===o&&u===s,children:m},`${m}-${a}-${u}`):g.jsx("span",{},`blank-day-${f}`))]})]})})`
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
`;W(({className:t,value:e,setValue:n})=>{const r=T.useRef(null),i=T.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return w$(i,o=>{var a,l;(a=r.current)!=null&&a.contains(o.target)||(l=i.current)==null||l.hidePopover()}),g.jsxs("div",{className:t,children:[g.jsx(g$,{value:e,readOnly:!0}),g.jsx("button",{onClick:s,ref:r,children:g.jsx(m$,{})}),g.jsx(P$,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const x$=t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",...t,children:g.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),k$={success:x$},D$={success:"var(--affirmative)"},Pw=W(({className:t,variant:e,children:n,onClose:r})=>{const i=T.useRef(),s=k$[e];return T.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[]),g.jsxs("div",{className:t,popover:"auto",children:[g.jsx(s,{style:{color:D$[e]}}),g.jsx("div",{children:n}),g.jsx("button",{onClick:r,children:g.jsx(ph,{})})]})})`
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
`,dm=W(({toasts:t,className:e})=>{const n=T.useId();return g.jsx("ul",{className:e,children:t.map(({variant:r,onClose:i,message:s})=>g.jsx("li",{children:g.jsx(Pw,{variant:r,onClose:i,children:s})},n))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: start;

  & > li > ${Pw} {
    background-color: var(--secondary);
    color: white;
  }
`,Kl=T.createContext(null),b$=({children:t})=>{const[e,n]=T.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return g.jsxs(Kl.Provider,{value:{removeToast:i,addToast:r},children:[t,g.jsx(dm,{toasts:e})]})},ao=W(({passedRef:t,className:e,children:n,onClose:r})=>g.jsxs("dialog",{ref:t,className:e,children:[g.jsx("button",{onClick:r,formNoValidate:!0,children:g.jsx(ph,{})}),n]}))`
  border: none;
  border-radius: 16px;
  filter: drop-shadow(1px 2px 8px var(--blue900));
  position: relative;
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transform: translate(50%, -50%);
    aspect-ratio: 1/1;
    border: none;
  }
`,N$=T.createContext(null),Sf={didCatch:!1,error:null};class O$ extends T.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Sf}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(Sf)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&L$(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(Sf)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const l={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(l);else if(r)a=T.createElement(r,l);else if(i===null||T.isValidElement(i))a=i;else throw o}return T.createElement(N$.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function L$(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const M$=W.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,V$=W.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,xw=W(({children:t,passedRef:e,className:n})=>g.jsx("dialog",{ref:e,className:n,children:g.jsx("div",{children:t})}))`
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
`,F$=W(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=T.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return g.jsxs("li",{className:r,children:[g.jsx(yh,{to:`/practice_plans/${t}`,children:s(e)}),g.jsx(V$,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),g.jsxs(xw,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",g.jsx("br",{})," This action cannot be undone"," ",g.jsxs("div",{children:[g.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),g.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${xw} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,$$=W(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=Ts(),i=s=>{s("/create")};return g.jsxs("main",{className:t,children:[g.jsxs(M$,{children:[g.jsx("h1",{children:"Practice plans"}),g.jsx(hi,{onClick:()=>i(r),text:"Add Practice Plan"})]}),g.jsx("ul",{children:e.map(s=>g.jsx(F$,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
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
`;W(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState(!1),{addToast:s,removeToast:o}=T.useContext(Kl),a=async u=>{await TV(Tn(Xe,"practice_plan",u)),n(c=>c.filter(d=>d.id!==u)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},l=()=>(i(!0),hr(zn(Xe,"practice_plan")).then(u=>{const c=u.docs.map(d=>({...d.data(),id:d.id})).sort((d,h)=>Number(h.date.seconds)-Number(d.date.seconds));n(c)}).catch(u=>{throw new Error(u)}).finally(()=>{i(!1)}));return T.useEffect(()=>{l()},[]),g.jsx(O$,{fallback:g.jsx("p",{children:"⚠️ Something went wrong"}),children:g.jsx("div",{className:t,children:r?g.jsx(ER,{children:g.jsx(TR,{})}):g.jsx($$,{practicePlans:e,deletePracticePlan:a})})})})`
  background: linear-gradient(var(--blue100), var(--blue900));
  height: calc(100% - 51px);
`;const j$=W(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>g.jsxs("g",{onClick:s,className:t,children:[g.jsx("circle",{r:i+5,cy:r,cx:n}),g.jsx("circle",{className:t,r:i,cy:r,cx:n}),g.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,kw=W.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,U$=W(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(u=>{const c=i.find(d=>d.moves.includes(u));return c?new Date(Number(c.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),l=u=>u==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(u))/864e5);return g.jsxs(rR,{className:s,addToPracticePlan:()=>r(n.id),children:[g.jsx("span",{children:n.name}),g.jsxs("span",{children:["Last Review: ",a]}),g.jsx(kw,{$reviewUrgency:l(a),children:l(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${kw} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,z$=W(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=T.useContext(zy),[l,u]=T.useState([]),{id:c=""}=Gy(),d=m=>hr(ws(zn(Xe,"practice_plan"),Es("teamId","==",m))).then(f=>{const p=f.docs.map(v=>({...v.data(),id:v.id})).sort((v,I)=>Number(I.date.seconds)-Number(v.date.seconds));u(p)}).catch(f=>{throw new Error(f)});T.useEffect(()=>{d(c)},[]);const h=50,y=70,_=m=>{const f="50%",p="25%",v="75%";return m%3===1||m===0?f:m%6===2||m%6===3?p:v},w=m=>{o(m),s()};return g.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((m,f)=>g.jsxs("g",{children:[g.jsx("line",{x1:_(f),y1:y+f*110,x2:_(f+1),y2:y+(f+1)*110}),g.jsx(j$,{r:h,y:y+f*110,x:_(f),onClick:()=>{a(m),w(()=>g.jsx(g.Fragment,{children:i.filter(p=>p.area===r&&p.position===m).map(p=>g.jsx(U$,{position:m,area:r,move:p,addToPracticePlan:n,practicePlans:l}))}))},text:m})]},m))})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));

  & > g > line {
    stroke: var(--orange);
  }

  ${rR} > span {
  }
`,IR=t=>!isNaN(t),Qy=(t,e)=>e.map(n=>t.find(r=>r.id===n)),Yy=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),Dw=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),B$=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(Yy(Qy(t,e)))),H$=async(t,e)=>{if(!IR(t.date)){alert("please submit a valid date");return}await Py(zn(Xe,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},q$=async(t,e,n)=>{const r=Tn(Xe,"practice_plan",t);if(!IR(e.date)){alert("please submit a valid date");return}await Wi(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},W$=W.div`
  height: 100%;
  overflow: scroll;
`,K$=W.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,G$=W.input``,bw=W(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:l})=>{const u=Ts(),[c,d]=T.useState(window.innerWidth>850),{closePanel:h}=T.useContext(zy);T.useEffect(()=>()=>h(),[]);const y=()=>{window.innerWidth>850&&d(!0)};T.useLayoutEffect(()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[]);const _=()=>{d(m=>!m)},w=m=>{const[f,p,v]=m.split("-");return new Date(`${p}/${v}/${f}`)};return g.jsxs("aside",{className:t,style:{"--transform":c?"translateX(0%)":"translateX(-100%)"},children:[g.jsx("button",{"aria-label":"show practice plan",onClick:_,children:g.jsx(c$,{})}),g.jsxs(W$,{children:["Date:",g.jsx(G$,{type:"date",value:r,onChange:m=>a(m.target.value)}),g.jsx("h1",{children:"Practice Plan"}),Object.entries(Yy(Qy(e,n))).map(([m,f])=>g.jsxs(T.Fragment,{children:[g.jsx("h2",{children:m}),f.map(p=>g.jsx(cm,{title:p.name,children:p.moves.map(({name:v,id:I})=>g.jsxs(Y$,{children:[v,g.jsx(J$,{onClick:()=>i(I),children:g.jsx(ph,{})})]},`${p.name}=${v}`))},p.name))]},m)),g.jsxs(K$,{children:[!o&&g.jsx(hi,{onClick:s,text:"Clear Practice Plan",Icon:Q$,$level:"caution"}),g.jsx(hi,{onClick:()=>B$(e,n),text:"Copy Practice Plan",Icon:o$}),g.jsx(hi,{onClick:()=>{o?q$(o,{moves:n,date:w(r),teamId:l},u):H$({moves:n,date:w(r),teamId:l},u)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:a$})]})]})]})})`
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
`,Q$=W(l$)`
  stroke: white;
`,Y$=W.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,J$=W.button`
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
`,Nw=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},X$=t=>{const[e,n]=T.useState([]),[r,i]=T.useState(Nw(new Date));return T.useEffect(()=>{if(t){const s=ws(zn(Xe,"practice_plan"),Es(SA(),"==",t));hr(s).then(a=>{const l=a.docs.map(c=>({...c.data(),id:c.id})),[u]=l;i(Nw(new Date(Number(u.date.seconds)*1e3))),n(u.moves)})}},[t]),[e,n,r,i]},Z$=t=>hr(ws(zn(Xe,"moves"),Es("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),Ow=W(({className:t})=>{const[e,n]=T.useState("neutral"),[r,i]=T.useState([]),{addToast:s,removeToast:o}=T.useContext(Kl),{practice_plan_id:a,id:l=""}=Gy(),[u,c,d,h]=X$(a);T.useEffect(()=>{Z$(l).then(f=>i(f))},[l]);const y=()=>{h(new Date),c([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},_=f=>{c(p=>p.includes(f)?(s({variant:"success",message:"move already exists",onClose:()=>o("move already exists")}),p):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...p,f]))},w=f=>{c(p=>[...p].filter(v=>v!==f)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},m=f=>{h(f),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return g.jsxs("main",{className:t,children:[g.jsx(lw,{tabs:Dw(r).map(f=>f.name),currentTab:e,setCurrentTab:n}),g.jsx(bw,{moves:r,practicePlanMoves:u,practicePlanDate:d,clearPracticePlan:y,removeFromPracticePlan:w,currentPracticePlanId:a,updatePracticePlanDate:m,teamId:l}),g.jsx(z$,{addToPracticePlan:_,content:[...Dw(r).find(f=>f.name===e).positions],area:e,moves:r})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${bw} {
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

  & > ${lw} {
    background-color: var(--blue100);
  }
`,e5=W.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,t5=W(({className:t})=>{const[e,n]=T.useState({date:new Date,moves:[],id:""}),[r,i]=T.useState([]),s=jo(),o=Ts(),a=s.pathname.split("/").at(-1)??"",l=ws(zn(Xe,"practice_plan"),Es(SA(),"==",a)),u=()=>hr(zn(Xe,"moves")).then(h=>{const y=h.docs.map(_=>({..._.data(),id:_.id}));i(y)}),c=()=>hr(l).then(h=>{const y=h.docs.map(w=>({...w.data(),id:w.id})),[_]=y;n(_)});T.useEffect(()=>{u(),c()},[]);const d=h=>{o("edit")};return g.jsxs("main",{className:t,children:[Object.entries(Yy(Qy(r,e.moves))).map(([h,y])=>g.jsxs(e5,{children:[g.jsx("h2",{children:h}),y.map(_=>g.jsx("li",{children:g.jsx(cm,{title:_.name,open:!0,children:g.jsx("ul",{children:_==null?void 0:_.moves.map(w=>g.jsx("li",{children:w.name},`${_.name}-${w.name}`))})})},_.name))]},h)),g.jsx(hi,{onClick:()=>d(),text:"Edit Practice Plan",Icon:u$,$level:"caution"})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${hi} {
    align-self: start;
  }

  & ${cm} {
    background-color: var(--secondary);
  }
`,SR=W.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,n5=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],Jy=zn(Xe,"teams"),r5=()=>hr(Jy).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),i5=t=>{const e=ws(Jy,Es("userIds","array-contains",t));return hr(e).then(n=>n.docs.map(i=>({...i.data(),id:i.id})))},s5=W.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`,o5=W.li`
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
`,Lw=W.div`
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
`,Mw=W.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,a5=W.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,l5=W(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState([]),s=T.useContext(Uo),{addToast:o,removeToast:a}=T.useContext(Kl),l=T.useRef(),u=T.useRef(),c=()=>{l.current&&l.current.showModal()},d=()=>{l.current&&l.current.close()},h=()=>{u.current&&u.current.showModal()},y=()=>{u.current&&u.current.close()},_=m=>{m.preventDefault();const f=new FormData(m.currentTarget),p={name:f.get("teamName"),state:f.get("stateLocation"),joinRequests:[],userIds:[s.uid],users:[{role:"admin",uid:s.uid}]};Py(Jy,p).then(v=>{i(I=>[...I,{...p,id:v.id}]),d()})},w=m=>{m.preventDefault();const f=new FormData(m.currentTarget),p=e.find(v=>v.id===f.get("teamToJoin"));if(p&&p.joinRequests.find(I=>I.uid===s.uid)){o({variant:"success",message:"You have an existing request to join this team",onClose:()=>a("You have an existing request to join this team")});return}Wi(Tn(Xe,"teams",f.get("teamToJoin")),{joinRequests:jc({userEmail:s.email,uid:s.uid,role:f.get("requestedRole")})}).then(()=>{y(),o({variant:"success",message:"Request Successfully Submitted",onClose:()=>a("Request Successfully Submitted")})})};return T.useEffect(()=>{r5().then(m=>n(m)),s!=null&&s.uid&&i5(s.uid).then(m=>i(m))},[s]),g.jsxs("main",{className:t,children:[g.jsx("h1",{children:"My Teams"}),g.jsx(s5,{children:r.map(m=>g.jsx(yh,{to:`${m.id}`,children:g.jsxs(o5,{children:[g.jsxs("span",{children:[m.name," (",m.state,")"]}),g.jsxs(Mw,{children:["Users ",g.jsx(Lw,{children:m.users.length})]}),g.jsxs(Mw,{children:[g.jsx("span",{children:"Join Requests"})," ",g.jsx(Lw,{children:m.joinRequests.length})]}),m.users.find(f=>f.uid===s.uid&&f.role==="admin")?g.jsx(SR,{$color:"white",children:"Admin"}):g.jsx("span",{})]})},m.id))}),g.jsxs(a5,{children:[g.jsx(hi,{text:"Request to Join a Team",onClick:h}),g.jsx(hi,{text:"Create a Team",onClick:c})]}),g.jsx(ao,{passedRef:l,onClose:d,children:g.jsxs("form",{onSubmit:_,children:[g.jsxs("label",{htmlFor:"teamName",children:[g.jsx("span",{children:"Team Name:"}),g.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),g.jsxs("label",{htmlFor:"stateLocation",children:[g.jsx("span",{children:"State:"}),g.jsx("select",{name:"stateLocation",id:"stateLocation",children:n5.map(m=>g.jsx("option",{value:m,children:m},m))})]}),g.jsx("button",{type:"submit",children:"Create"})]})}),g.jsx(ao,{passedRef:u,onClose:y,children:g.jsxs("form",{onSubmit:w,children:[g.jsxs("label",{htmlFor:"teamToJoin",children:[g.jsx("span",{children:"Team:"}),g.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(m=>!m.userIds.includes(s.uid)).map(m=>g.jsxs("option",{value:m.id,children:[m.name," (",m.state,")"]},m.id))})]}),g.jsxs("label",{htmlFor:"requestedRole",children:[g.jsx("span",{children:"Requested Role:"}),g.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(m=>g.jsx("option",{value:m,children:m},m))})]}),g.jsx("button",{type:"submit",children:"Send Request to Join"})]})})]})})`
  height: 100%;
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
`,Wu=({roles:t,team:e,children:n})=>{const r=T.useContext(Uo),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},u5=({uid:t,role:e,team:n,setTeam:r})=>{const[i,s]=T.useState(""),o=T.useContext(Uo),a=T.useRef(),l=async y=>await MA(Tn(Xe,"users",y)).then(_=>({..._.data(),id:_.id}).email);T.useEffect(()=>{l(t).then(s)},[t]);const u=()=>{Wi(Tn(Xe,"teams",n.id),{users:ba({uid:t,role:e}),userIds:ba(t)}),r(y=>({...y,users:y.users.filter(_=>_.uid!==t),userIds:y.userIds.filter(_=>_!==t)}))},c=()=>{a.current&&a.current.showModal()},d=()=>{a.current&&a.current.close()},h=y=>{y.preventDefault();const _=new FormData(y.currentTarget);Wi(Tn(Xe,"teams",n.id),{users:ba({uid:t,role:e})}),Wi(Tn(Xe,"teams",n.id),{users:jc({uid:t,role:_.get("newRole")})}),r(w=>{const m=w.users.find(f=>f.uid===t);return m&&(m.role=_.get("newRole")),{...w,users:[...w.users.filter(f=>f.uid!==t),m]}}),a.current&&d()};return g.jsxs("li",{children:[i,": ",e,g.jsxs(Wu,{roles:["admin"],team:n,children:[g.jsx("button",{onClick:c,children:"Update Role"}),t!==o.uid&&g.jsx("button",{onClick:u,children:"Remove User"}),g.jsx(ao,{passedRef:a,onClose:d,children:g.jsxs("form",{onSubmit:h,children:[g.jsxs("label",{htmlFor:"newRole",children:[g.jsx("span",{children:"New Role:"}),g.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(y=>g.jsx("option",{value:y,children:y},y))})]}),g.jsx("button",{type:"submit",children:"Update Role"})]})})]})]})},c5=t=>MA(Tn(Xe,"teams",t)).then(e=>({...e.data(),id:e.id})),d5=t=>hr(ws(zn(Xe,"moves"),Es("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),h5=t=>hr(ws(zn(Xe,"practice_plan"),Es("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),f5=W.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,p5=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",m5=W(({className:t,move:e})=>g.jsx("li",{className:t,children:g.jsxs("div",{children:[g.jsx("h3",{children:e.name}),g.jsxs("span",{children:[e.area," - ",e.position]}),g.jsx(SR,{$color:p5(e.level),children:e.level})]})}))`
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
`,g5=W(({className:t})=>{const[e,n]=T.useState(),[r,i]=T.useState([]),[s,o]=T.useState([]),a=T.useRef(),l=T.useContext(Uo),{id:u=""}=Gy(),c=Ts();T.useEffect(()=>{u&&(c5(u).then(n),d5(u).then(i),h5(u).then(o))},[u]),T.useEffect(()=>{l&&e&&!e.userIds.includes(l.uid)&&c("/")},[c,e,l]);const d=f=>{Wi(Tn(Xe,"teams",u),{joinRequests:ba(f),users:jc({uid:f.uid,role:f.role}),userIds:jc(f.uid)}),n(p=>({...p,joinRequests:p.joinRequests.filter(v=>v.uid!==f.uid),users:[...p.users,{uid:f.uid,role:f.role}],userIds:[...p.userIds,f.uid]}))},h=f=>{Wi(Tn(Xe,"teams",u),{joinRequests:ba(f)}),n(p=>({...p,joinRequests:p.joinRequests.filter(v=>v.uid!==f.uid)}))},y=f=>new Date(Number(f)*1e3).toLocaleDateString(),_=()=>{a.current&&a.current.showModal()},w=()=>{a.current&&a.current.close()},m=f=>{f.preventDefault();const p=new FormData(f.currentTarget),v={area:p.get("area"),level:p.get("level"),name:p.get("name"),position:p.get("position"),teamId:u};Py(zn(Xe,"moves"),v),i(I=>[...I,v]),w()};return g.jsx("div",{className:t,children:e?g.jsxs("main",{children:[g.jsxs("h1",{children:[e.name," (",e.state,")"]}),g.jsx("h2",{children:"Practice Plans"}),g.jsx("ul",{children:s.map(f=>g.jsx(yh,{to:`practice_plans/${f.id}`,children:g.jsx("li",{children:y(f.date.seconds)})}))}),g.jsx("button",{onClick:()=>c("practice_plans/create"),children:"Add Practice Plan"}),g.jsx("h2",{children:"Moves"}),g.jsx(f5,{children:r.map(f=>g.jsx(m5,{move:f}))}),g.jsxs(Wu,{roles:["admin","base+"],team:e,children:[g.jsx("button",{onClick:_,children:"Add Move"}),g.jsx(ao,{passedRef:a,onClose:w,children:g.jsxs("form",{onSubmit:m,children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx("span",{children:"Move name:"}),g.jsx("input",{type:"text",name:"name",id:"name"})]}),g.jsxs("label",{htmlFor:"area",children:[g.jsx("span",{children:"Move Area:"}),g.jsx("select",{name:"area",id:"area",children:["neutral","top","bottom"].map(f=>g.jsx("option",{value:f,children:f},f))})]}),g.jsxs("label",{htmlFor:"level",children:[g.jsx("span",{children:"Move Level:"}),g.jsx("select",{name:"level",id:"level",children:["jv","varsity","state qualifier","state placer"].map(f=>g.jsx("option",{value:f,children:f},f))})]}),g.jsxs("label",{htmlFor:"position",children:[g.jsx("span",{children:"Move Position:"}),g.jsx("input",{type:"text",name:"position",id:"position"})]}),g.jsx("button",{type:"submit",children:"Add Move"})]})})]}),g.jsx(Wu,{roles:["admin","base+"],team:e,children:g.jsxs("section",{children:[g.jsx("h2",{children:"Team Users"}),g.jsx("ul",{children:e.users.map(f=>g.jsx(u5,{team:e,setTeam:n,uid:f.uid,role:f.role}))})]})}),g.jsxs(Wu,{roles:["admin","base+"],team:e,children:[g.jsx("h2",{children:"Open Join Requests:"}),g.jsx("ul",{children:e.joinRequests.map(f=>g.jsxs("li",{children:[f.userEmail," ",f.role," ",g.jsx("button",{onClick:()=>d(f),children:"Accept"})," ",g.jsx("button",{onClick:()=>h(f),children:"Decline"})]}))})]})]}):g.jsx(ER,{children:g.jsx(TR,{})})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 64px;

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
`,y5=UF(lm(g.jsxs(pr,{path:"/",element:g.jsx(s$,{}),children:[g.jsx(pr,{path:"teams/:id/practice_plans/create",element:g.jsx(Ow,{})}),g.jsx(pr,{path:"teams/:id/practice_plans/:practice_plan_id",element:g.jsx(t5,{})}),g.jsx(pr,{path:"/teams",element:g.jsx(l5,{})}),g.jsx(pr,{path:"/teams/:id",element:g.jsx(g5,{})}),g.jsx(pr,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:g.jsx(Ow,{})}),g.jsx(pr,{path:"/sign_in",element:g.jsx(n$,{})}),g.jsx(pr,{path:"/sign_up",element:g.jsx(r$,{})})]}))),v5=W(({className:t})=>g.jsx("div",{className:t,children:g.jsx(i$,{children:g.jsx(b$,{children:g.jsxs(C4,{children:[g.jsx(QF,{router:y5}),g.jsx(p$,{})]})})})}))`
  height: 100%;

  & > ${dm} {
    position: fixed;
    bottom: 16px;
    right: 50%;
    transform: translateX(50%);
  }

  & > ${iR} {
    background: linear-gradient(var(--blue100), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${dm} {
      right: 32px;
      transform: translateX(0%);
    }
  }
`,_5=JE(document.getElementById("root"));async function w5(){if(!["development","test"].includes("production"))return;const{worker:t}=await bR(()=>import("./browser-UkVwgeuH.js"),__vite__mapDeps([]));return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}w5().then(()=>{_5.render(g.jsx(T.StrictMode,{children:g.jsx(v5,{})}))});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
