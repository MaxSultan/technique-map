function Gw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const zR="modulepreload",BR=function(t){return"/technique-map/"+t},pv={},HR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=BR(o),o in pv)return;pv[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":zR,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function gm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qw={exports:{}},Jc={},Yw={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),qR=Symbol.for("react.portal"),WR=Symbol.for("react.fragment"),KR=Symbol.for("react.strict_mode"),GR=Symbol.for("react.profiler"),QR=Symbol.for("react.provider"),YR=Symbol.for("react.context"),JR=Symbol.for("react.forward_ref"),XR=Symbol.for("react.suspense"),ZR=Symbol.for("react.memo"),eC=Symbol.for("react.lazy"),mv=Symbol.iterator;function tC(t){return t===null||typeof t!="object"?null:(t=mv&&t[mv]||t["@@iterator"],typeof t=="function"?t:null)}var Jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xw=Object.assign,Zw={};function Do(t,e,n){this.props=t,this.context=e,this.refs=Zw,this.updater=n||Jw}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e1(){}e1.prototype=Do.prototype;function ym(t,e,n){this.props=t,this.context=e,this.refs=Zw,this.updater=n||Jw}var vm=ym.prototype=new e1;vm.constructor=ym;Xw(vm,Do.prototype);vm.isPureReactComponent=!0;var gv=Array.isArray,t1=Object.prototype.hasOwnProperty,_m={current:null},n1={key:!0,ref:!0,__self:!0,__source:!0};function r1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)t1.call(e,r)&&!n1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:El,type:t,key:s,ref:o,props:i,_owner:_m.current}}function nC(t,e){return{$$typeof:El,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wm(t){return typeof t=="object"&&t!==null&&t.$$typeof===El}function rC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yv=/\/+/g;function Ch(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rC(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case El:case qR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ch(o,0):r,gv(i)?(n="",t!=null&&(n=t.replace(yv,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(wm(i)&&(i=nC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ch(s,a);o+=Du(s,e,n,l,i)}else if(l=tC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ch(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},bu={transition:null},sC={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:bu,ReactCurrentOwner:_m};ve.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!wm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=Do;ve.Fragment=WR;ve.Profiler=GR;ve.PureComponent=ym;ve.StrictMode=KR;ve.Suspense=XR;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sC;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_m.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)t1.call(e,l)&&!n1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:El,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:YR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QR,_context:t},t.Consumer=t};ve.createElement=r1;ve.createFactory=function(t){var e=r1.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:JR,render:t}};ve.isValidElement=wm;ve.lazy=function(t){return{$$typeof:eC,_payload:{_status:-1,_result:t},_init:iC}};ve.memo=function(t,e){return{$$typeof:ZR,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=bu.transition;bu.transition={};try{t()}finally{bu.transition=e}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(t,e){return Jt.current.useCallback(t,e)};ve.useContext=function(t){return Jt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Jt.current.useEffect(t,e)};ve.useId=function(){return Jt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Jt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};ve.useRef=function(t){return Jt.current.useRef(t)};ve.useState=function(t){return Jt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Jt.current.useTransition()};ve.version="18.2.0";Yw.exports=ve;var T=Yw.exports;const bo=gm(T),oC=Gw({__proto__:null,default:bo},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aC=T,lC=Symbol.for("react.element"),uC=Symbol.for("react.fragment"),cC=Object.prototype.hasOwnProperty,dC=aC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hC={key:!0,ref:!0,__self:!0,__source:!0};function i1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cC.call(e,r)&&!hC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lC,type:t,key:s,ref:o,props:i,_owner:dC.current}}Jc.Fragment=uC;Jc.jsx=i1;Jc.jsxs=i1;Qw.exports=Jc;var f=Qw.exports,s1={exports:{}},gn={},o1={exports:{}},a1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Q){var Z=L.length;L.push(Q);e:for(;0<Z;){var me=Z-1>>>1,M=L[me];if(0<i(M,Q))L[me]=Q,L[Z]=M,Z=me;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Q=L[0],Z=L.pop();if(Z!==Q){L[0]=Z;e:for(var me=0,M=L.length,B=M>>>1;me<B;){var F=2*(me+1)-1,Y=L[F],A=F+1,fe=L[A];if(0>i(Y,Z))A<M&&0>i(fe,Y)?(L[me]=fe,L[A]=Z,me=A):(L[me]=Y,L[F]=Z,me=F);else if(A<M&&0>i(fe,Z))L[me]=fe,L[A]=Z,me=A;else break e}}return Q}function i(L,Q){var Z=L.sortIndex-Q.sortIndex;return Z!==0?Z:L.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,y=!1,g=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=L)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function S(L){if(w=!1,_(L),!g)if(n(l)!==null)g=!0,Zt(P);else{var Q=n(u);Q!==null&&ge(S,Q.startTime-L)}}function P(L,Q){g=!1,w&&(w=!1,m(b),b=-1),y=!0;var Z=h;try{for(_(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||L&&!ce());){var me=d.callback;if(typeof me=="function"){d.callback=null,h=d.priorityLevel;var M=me(d.expirationTime<=Q);Q=t.unstable_now(),typeof M=="function"?d.callback=M:d===n(l)&&r(l),_(Q)}else r(l);d=n(l)}if(d!==null)var B=!0;else{var F=n(u);F!==null&&ge(S,F.startTime-Q),B=!1}return B}finally{d=null,h=Z,y=!1}}var E=!1,C=null,b=-1,j=5,q=-1;function ce(){return!(t.unstable_now()-q<j)}function Te(){if(C!==null){var L=t.unstable_now();q=L;var Q=!0;try{Q=C(!0,L)}finally{Q?Se():(E=!1,C=null)}}else E=!1}var Se;if(typeof p=="function")Se=function(){p(Te)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,tt=qe.port2;qe.port1.onmessage=Te,Se=function(){tt.postMessage(null)}}else Se=function(){v(Te,0)};function Zt(L){C=L,E||(E=!0,Se())}function ge(L,Q){b=v(function(){L(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,Zt(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var Z=h;h=Q;try{return L()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return Q()}finally{h=Z}},t.unstable_scheduleCallback=function(L,Q,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,L){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Z+M,L={id:c++,callback:Q,priorityLevel:L,startTime:Z,expirationTime:M,sortIndex:-1},Z>me?(L.sortIndex=Z,e(u,L),n(l)===null&&L===n(u)&&(w?(m(b),b=-1):w=!0,ge(S,Z-me))):(L.sortIndex=M,e(l,L),g||y||(g=!0,Zt(P))),L},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(L){var Q=h;return function(){var Z=h;h=Q;try{return L.apply(this,arguments)}finally{h=Z}}}})(a1);o1.exports=a1;var fC=o1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=T,pn=fC;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u1=new Set,Fa={};function ps(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(Fa[t]=e,t=0;t<e.length;t++)u1.add(e[t])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,pC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vv={},_v={};function mC(t){return Pf.call(_v,t)?!0:Pf.call(vv,t)?!1:pC.test(t)?_v[t]=!0:(vv[t]=!0,!1)}function gC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yC(t,e,n,r){if(e===null||typeof e>"u"||gC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Em=/[\-:]([a-z])/g;function Tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Em,Tm);Nt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Em,Tm);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Em,Tm);Nt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Im(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yC(e,n,i,r)&&(n=null),r||i===null?mC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ru=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Sm=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),c1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),bf=Symbol.for("react.suspense_list"),Rm=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),h1=Symbol.for("react.offscreen"),wv=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=wv&&t[wv]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Object.assign,xh;function la(t){if(xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xh=e&&e[1]||""}return`
`+xh+t}var Ph=!1;function kh(t,e){if(!t||Ph)return"";Ph=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ph=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function vC(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=kh(t.type,!1),t;case 11:return t=kh(t.type.render,!1),t;case 1:return t=kh(t.type,!0),t;default:return""}}function Nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ms:return"Portal";case kf:return"Profiler";case Sm:return"StrictMode";case Df:return"Suspense";case bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case d1:return(t.displayName||"Context")+".Consumer";case c1:return(t._context.displayName||"Context")+".Provider";case Am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rm:return e=t.displayName||null,e!==null?e:Nf(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Nf(t(e))}catch{}}return null}function _C(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(e);case 8:return e===Sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wC(t){var e=f1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function iu(t){t._valueTracker||(t._valueTracker=wC(t))}function p1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=f1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Of(t,e){var n=e.checked;return Ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ev(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function m1(t,e){e=e.checked,e!=null&&Im(t,"checked",e,!1)}function Lf(t,e){m1(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mf(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mf(t,e,n){(e!=="number"||Zu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Iv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(ua(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function g1(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var su,v1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(su=su||document.createElement("div"),su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EC=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){EC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function _1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function w1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TC=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ff(t,e){if(e){if(TC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function Cm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zf=null,eo=null,to=null;function Av(t){if(t=Sl(t)){if(typeof zf!="function")throw Error(O(280));var e=t.stateNode;e&&(e=nd(e),zf(t.stateNode,t.type,e))}}function E1(t){eo?to?to.push(t):to=[t]:eo=t}function T1(){if(eo){var t=eo,e=to;if(to=eo=null,Av(t),e)for(t=0;t<e.length;t++)Av(e[t])}}function I1(t,e){return t(e)}function S1(){}var Dh=!1;function A1(t,e,n){if(Dh)return t(e,n);Dh=!0;try{return I1(t,e,n)}finally{Dh=!1,(eo!==null||to!==null)&&(S1(),T1())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var r=nd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var Bf=!1;if(xr)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Bf=!1}function IC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var wa=!1,ec=null,tc=!1,Hf=null,SC={onError:function(t){wa=!0,ec=t}};function AC(t,e,n,r,i,s,o,a,l){wa=!1,ec=null,IC.apply(SC,arguments)}function RC(t,e,n,r,i,s,o,a,l){if(AC.apply(this,arguments),wa){if(wa){var u=ec;wa=!1,ec=null}else throw Error(O(198));tc||(tc=!0,Hf=u)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rv(t){if(ms(t)!==t)throw Error(O(188))}function CC(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rv(i),t;if(s===r)return Rv(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function C1(t){return t=CC(t),t!==null?x1(t):null}function x1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x1(t);if(e!==null)return e;t=t.sibling}return null}var P1=pn.unstable_scheduleCallback,Cv=pn.unstable_cancelCallback,xC=pn.unstable_shouldYield,PC=pn.unstable_requestPaint,rt=pn.unstable_now,kC=pn.unstable_getCurrentPriorityLevel,xm=pn.unstable_ImmediatePriority,k1=pn.unstable_UserBlockingPriority,nc=pn.unstable_NormalPriority,DC=pn.unstable_LowPriority,D1=pn.unstable_IdlePriority,Xc=null,sr=null;function bC(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:LC,NC=Math.log,OC=Math.LN2;function LC(t){return t>>>=0,t===0?32:31-(NC(t)/OC|0)|0}var ou=64,au=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ca(a):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vn(e),i=1<<n,r|=t[n],e&=~i;return r}function MC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=MC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function b1(){var t=ou;return ou<<=1,!(ou&4194240)&&(ou=64),t}function bh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function jC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function N1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O1,km,L1,M1,V1,Wf=!1,lu=[],ni=null,ri=null,ii=null,za=new Map,Ba=new Map,Kr=[],FC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xv(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Go(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sl(e),e!==null&&km(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $C(t,e,n,r,i){switch(e){case"focusin":return ni=Go(ni,t,e,n,r,i),!0;case"dragenter":return ri=Go(ri,t,e,n,r,i),!0;case"mouseover":return ii=Go(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return za.set(s,Go(za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ba.set(s,Go(Ba.get(s)||null,t,e,n,r,i)),!0}return!1}function j1(t){var e=Vi(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=R1(n),e!==null){t.blockedOn=e,V1(t.priority,function(){L1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uf=r,n.target.dispatchEvent(r),Uf=null}else return e=Sl(n),e!==null&&km(e),t.blockedOn=n,!1;e.shift()}return!0}function Pv(t,e,n){Nu(t)&&n.delete(e)}function UC(){Wf=!1,ni!==null&&Nu(ni)&&(ni=null),ri!==null&&Nu(ri)&&(ri=null),ii!==null&&Nu(ii)&&(ii=null),za.forEach(Pv),Ba.forEach(Pv)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,UC)))}function Ha(t){function e(i){return Qo(i,t)}if(0<lu.length){Qo(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&Qo(ni,t),ri!==null&&Qo(ri,t),ii!==null&&Qo(ii,t),za.forEach(e),Ba.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)j1(n),n.blockedOn===null&&Kr.shift()}var no=Mr.ReactCurrentBatchConfig,ic=!0;function zC(t,e,n,r){var i=xe,s=no.transition;no.transition=null;try{xe=1,Dm(t,e,n,r)}finally{xe=i,no.transition=s}}function BC(t,e,n,r){var i=xe,s=no.transition;no.transition=null;try{xe=4,Dm(t,e,n,r)}finally{xe=i,no.transition=s}}function Dm(t,e,n,r){if(ic){var i=Kf(t,e,n,r);if(i===null)zh(t,e,r,sc,n),xv(t,r);else if($C(i,t,e,n,r))r.stopPropagation();else if(xv(t,r),e&4&&-1<FC.indexOf(t)){for(;i!==null;){var s=Sl(i);if(s!==null&&O1(s),s=Kf(t,e,n,r),s===null&&zh(t,e,r,sc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zh(t,e,r,null,n)}}var sc=null;function Kf(t,e,n,r){if(sc=null,t=Cm(r),t=Vi(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function F1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kC()){case xm:return 1;case k1:return 4;case nc:case DC:return 16;case D1:return 536870912;default:return 16}default:return 16}}var Zr=null,bm=null,Ou=null;function $1(){if(Ou)return Ou;var t,e=bm,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ou=i.slice(t,1<r?1-r:void 0)}function Lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function kv(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:kv,this.isPropagationStopped=kv,this}return Ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nm=yn(No),Il=Ge({},No,{view:0,detail:0}),HC=yn(Il),Nh,Oh,Yo,Zc=Ge({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Nh=t.screenX-Yo.screenX,Oh=t.screenY-Yo.screenY):Oh=Nh=0,Yo=t),Nh)},movementY:function(t){return"movementY"in t?t.movementY:Oh}}),Dv=yn(Zc),qC=Ge({},Zc,{dataTransfer:0}),WC=yn(qC),KC=Ge({},Il,{relatedTarget:0}),Lh=yn(KC),GC=Ge({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),QC=yn(GC),YC=Ge({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JC=yn(YC),XC=Ge({},No,{data:0}),bv=yn(XC),ZC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function Om(){return nx}var rx=Ge({},Il,{key:function(t){if(t.key){var e=ZC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Om,charCode:function(t){return t.type==="keypress"?Lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=yn(rx),sx=Ge({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nv=yn(sx),ox=Ge({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Om}),ax=yn(ox),lx=Ge({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=yn(lx),cx=Ge({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=yn(cx),hx=[9,13,27,32],Lm=xr&&"CompositionEvent"in window,Ea=null;xr&&"documentMode"in document&&(Ea=document.documentMode);var fx=xr&&"TextEvent"in window&&!Ea,U1=xr&&(!Lm||Ea&&8<Ea&&11>=Ea),Ov=" ",Lv=!1;function z1(t,e){switch(t){case"keyup":return hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function px(t,e){switch(t){case"compositionend":return B1(e);case"keypress":return e.which!==32?null:(Lv=!0,Ov);case"textInput":return t=e.data,t===Ov&&Lv?null:t;default:return null}}function mx(t,e){if(js)return t==="compositionend"||!Lm&&z1(t,e)?(t=$1(),Ou=bm=Zr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U1&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function H1(t,e,n,r){E1(r),e=oc(e,"onChange"),0<e.length&&(n=new Nm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,qa=null;function yx(t){tE(t,0)}function ed(t){var e=Us(t);if(p1(e))return t}function vx(t,e){if(t==="change")return e}var q1=!1;if(xr){var Mh;if(xr){var Vh="oninput"in document;if(!Vh){var Vv=document.createElement("div");Vv.setAttribute("oninput","return;"),Vh=typeof Vv.oninput=="function"}Mh=Vh}else Mh=!1;q1=Mh&&(!document.documentMode||9<document.documentMode)}function jv(){Ta&&(Ta.detachEvent("onpropertychange",W1),qa=Ta=null)}function W1(t){if(t.propertyName==="value"&&ed(qa)){var e=[];H1(e,qa,t,Cm(t)),A1(yx,e)}}function _x(t,e,n){t==="focusin"?(jv(),Ta=e,qa=n,Ta.attachEvent("onpropertychange",W1)):t==="focusout"&&jv()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ed(qa)}function Ex(t,e){if(t==="click")return ed(e)}function Tx(t,e){if(t==="input"||t==="change")return ed(e)}function Ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:Ix;function Wa(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pf.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function Fv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $v(t,e){var n=Fv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fv(n)}}function K1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function G1(){for(var t=window,e=Zu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zu(t.document)}return e}function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sx(t){var e=G1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K1(n.ownerDocument.documentElement,n)){if(r!==null&&Mm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$v(n,s);var o=$v(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ax=xr&&"documentMode"in document&&11>=document.documentMode,Fs=null,Gf=null,Ia=null,Qf=!1;function Uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||Fs==null||Fs!==Zu(r)||(r=Fs,"selectionStart"in r&&Mm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&Wa(Ia,r)||(Ia=r,r=oc(Gf,"onSelect"),0<r.length&&(e=new Nm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fs)))}function cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},jh={},Q1={};xr&&(Q1=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function td(t){if(jh[t])return jh[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q1)return jh[t]=e[n];return t}var Y1=td("animationend"),J1=td("animationiteration"),X1=td("animationstart"),Z1=td("transitionend"),eE=new Map,zv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){eE.set(t,e),ps(e,[t])}for(var Fh=0;Fh<zv.length;Fh++){var $h=zv[Fh],Rx=$h.toLowerCase(),Cx=$h[0].toUpperCase()+$h.slice(1);Ei(Rx,"on"+Cx)}Ei(Y1,"onAnimationEnd");Ei(J1,"onAnimationIteration");Ei(X1,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(Z1,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Bv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,RC(r,e,void 0,t),t.currentTarget=null}function tE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bv(i,a,u),s=l}}}if(tc)throw t=Hf,tc=!1,Hf=null,t}function je(t,e){var n=e[ep];n===void 0&&(n=e[ep]=new Set);var r=t+"__bubble";n.has(r)||(nE(e,t,2,!1),n.add(r))}function Uh(t,e,n){var r=0;e&&(r|=4),nE(n,t,r,e)}var du="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[du]){t[du]=!0,u1.forEach(function(n){n!=="selectionchange"&&(xx.has(n)||Uh(n,!1,t),Uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[du]||(e[du]=!0,Uh("selectionchange",!1,e))}}function nE(t,e,n,r){switch(F1(e)){case 1:var i=zC;break;case 4:i=BC;break;default:i=Dm}n=i.bind(null,e,n,t),i=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}A1(function(){var u=s,c=Cm(n),d=[];e:{var h=eE.get(t);if(h!==void 0){var y=Nm,g=t;switch(t){case"keypress":if(Lu(n)===0)break e;case"keydown":case"keyup":y=ix;break;case"focusin":g="focus",y=Lh;break;case"focusout":g="blur",y=Lh;break;case"beforeblur":case"afterblur":y=Lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=WC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ax;break;case Y1:case J1:case X1:y=QC;break;case Z1:y=ux;break;case"scroll":y=HC;break;case"wheel":y=dx;break;case"copy":case"cut":case"paste":y=JC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Nv}var w=(e&4)!==0,v=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,m!==null&&(S=Ua(p,m),S!=null&&w.push(Ga(p,S,_)))),v)break;p=p.return}0<w.length&&(h=new y(h,g,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==Uf&&(g=n.relatedTarget||n.fromElement)&&(Vi(g)||g[Pr]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Vi(g):null,g!==null&&(v=ms(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(w=Dv,S="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Nv,S="onPointerLeave",m="onPointerEnter",p="pointer"),v=y==null?h:Us(y),_=g==null?h:Us(g),h=new w(S,p+"leave",y,n,c),h.target=v,h.relatedTarget=_,S=null,Vi(c)===u&&(w=new w(m,p+"enter",g,n,c),w.target=_,w.relatedTarget=v,S=w),v=S,y&&g)t:{for(w=y,m=g,p=0,_=w;_;_=Ds(_))p++;for(_=0,S=m;S;S=Ds(S))_++;for(;0<p-_;)w=Ds(w),p--;for(;0<_-p;)m=Ds(m),_--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ds(w),m=Ds(m)}w=null}else w=null;y!==null&&Hv(d,h,y,w,!1),g!==null&&v!==null&&Hv(d,v,g,w,!0)}}e:{if(h=u?Us(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var P=vx;else if(Mv(h))if(q1)P=Tx;else{P=wx;var E=_x}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Ex);if(P&&(P=P(t,u))){H1(d,P,n,c);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Mf(h,"number",h.value)}switch(E=u?Us(u):window,t){case"focusin":(Mv(E)||E.contentEditable==="true")&&(Fs=E,Gf=u,Ia=null);break;case"focusout":Ia=Gf=Fs=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,Uv(d,n,c);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":Uv(d,n,c)}var C;if(Lm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else js?z1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(U1&&n.locale!=="ko"&&(js||b!=="onCompositionStart"?b==="onCompositionEnd"&&js&&(C=$1()):(Zr=c,bm="value"in Zr?Zr.value:Zr.textContent,js=!0)),E=oc(u,b),0<E.length&&(b=new bv(b,t,null,n,c),d.push({event:b,listeners:E}),C?b.data=C:(C=B1(n),C!==null&&(b.data=C)))),(C=fx?px(t,n):mx(t,n))&&(u=oc(u,"onBeforeInput"),0<u.length&&(c=new bv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}tE(d,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ua(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=Ua(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ua(n,s),l!=null&&o.unshift(Ga(n,l,a))):i||(l=Ua(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Px=/\r\n?/g,kx=/\u0000|\uFFFD/g;function qv(t){return(typeof t=="string"?t:""+t).replace(Px,`
`).replace(kx,"")}function hu(t,e,n){if(e=qv(e),qv(t)!==e&&n)throw Error(O(425))}function ac(){}var Yf=null,Jf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Wv=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wv<"u"?function(t){return Wv.resolve(null).then(t).catch(Nx)}:Zf;function Nx(t){setTimeout(function(){throw t})}function Bh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Oo,Qa="__reactProps$"+Oo,Pr="__reactContainer$"+Oo,ep="__reactEvents$"+Oo,Ox="__reactListeners$"+Oo,Lx="__reactHandles$"+Oo;function Vi(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kv(t);t!==null;){if(n=t[Zn])return n;t=Kv(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[Zn]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function nd(t){return t[Qa]||null}var tp=[],zs=-1;function Ti(t){return{current:t}}function Ue(t){0>zs||(t.current=tp[zs],tp[zs]=null,zs--)}function Le(t,e){zs++,tp[zs]=t.current,t.current=e}var gi={},Bt=Ti(gi),sn=Ti(!1),Ji=gi;function fo(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function lc(){Ue(sn),Ue(Bt)}function Gv(t,e,n){if(Bt.current!==gi)throw Error(O(168));Le(Bt,e),Le(sn,n)}function rE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,_C(t)||"Unknown",i));return Ge({},n,r)}function uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,Ji=Bt.current,Le(Bt,t),Le(sn,sn.current),!0}function Qv(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=rE(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,Ue(sn),Ue(Bt),Le(Bt,t)):Ue(sn),Le(sn,n)}var vr=null,rd=!1,Hh=!1;function iE(t){vr===null?vr=[t]:vr.push(t)}function Mx(t){rd=!0,iE(t)}function Ii(){if(!Hh&&vr!==null){Hh=!0;var t=0,e=xe;try{var n=vr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vr=null,rd=!1}catch(i){throw vr!==null&&(vr=vr.slice(t+1)),P1(xm,Ii),i}finally{xe=e,Hh=!1}}return null}var Bs=[],Hs=0,cc=null,dc=0,En=[],Tn=0,Xi=null,_r=1,wr="";function Ni(t,e){Bs[Hs++]=dc,Bs[Hs++]=cc,cc=t,dc=e}function sE(t,e,n){En[Tn++]=_r,En[Tn++]=wr,En[Tn++]=Xi,Xi=t;var r=_r;t=wr;var i=32-Vn(r)-1;r&=~(1<<i),n+=1;var s=32-Vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-Vn(e)+i|n<<i|r,wr=s+t}else _r=1<<s|n<<i|r,wr=t}function Vm(t){t.return!==null&&(Ni(t,1),sE(t,1,0))}function jm(t){for(;t===cc;)cc=Bs[--Hs],Bs[Hs]=null,dc=Bs[--Hs],Bs[Hs]=null;for(;t===Xi;)Xi=En[--Tn],En[Tn]=null,wr=En[--Tn],En[Tn]=null,_r=En[--Tn],En[Tn]=null}var hn=null,cn=null,He=!1,Mn=null;function oE(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:_r,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function np(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rp(t){if(He){var e=cn;if(e){var n=e;if(!Yv(t,e)){if(np(t))throw Error(O(418));e=si(n.nextSibling);var r=hn;e&&Yv(t,e)?oE(r,n):(t.flags=t.flags&-4097|2,He=!1,hn=t)}}else{if(np(t))throw Error(O(418));t.flags=t.flags&-4097|2,He=!1,hn=t}}}function Jv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function fu(t){if(t!==hn)return!1;if(!He)return Jv(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=cn)){if(np(t))throw aE(),Error(O(418));for(;e;)oE(t,e),e=si(e.nextSibling)}if(Jv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?si(t.stateNode.nextSibling):null;return!0}function aE(){for(var t=cn;t;)t=si(t.nextSibling)}function po(){cn=hn=null,He=!1}function Fm(t){Mn===null?Mn=[t]:Mn.push(t)}var Vx=Mr.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=Ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hc=Ti(null),fc=null,qs=null,$m=null;function Um(){$m=qs=fc=null}function zm(t){var e=hc.current;Ue(hc),t._currentValue=e}function ip(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){fc=t,$m=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function xn(t){var e=t._currentValue;if($m!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(fc===null)throw Error(O(308));qs=t,fc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var ji=null;function Bm(t){ji===null?ji=[t]:ji.push(t)}function lE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bm(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Hm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,Bm(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function Mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}function Xv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,r){var i=t.updateQueue;Wr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,y=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(h=e,y=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){d=g.call(y,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,h=typeof g=="function"?g.call(y,d,h):g,h==null)break e;d=Ge({},d,h);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=d}}function Zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var cE=new l1.Component().refs;function sp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var id={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=li(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(jn(e,t,i,r),Mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qt(),i=li(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(jn(e,t,i,r),Mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),r=li(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(jn(e,t,r,n),Mu(e,t,r))}};function e0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,r)||!Wa(i,s):!0}function dE(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(i=on(e)?Ji:Bt.current,r=e.contextTypes,s=(r=r!=null)?fo(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function t0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&id.enqueueReplaceState(e,e.state,null)}function op(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=cE,Hm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xn(s):(s=on(e)?Ji:Bt.current,i.context=fo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&id.enqueueReplaceState(i,i.state,null),pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===cE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function pu(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function n0(t){var e=t._init;return e(t._payload)}function hE(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=ui(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,S){return p===null||p.tag!==6?(p=Jh(_,m.mode,S),p.return=m,p):(p=i(p,_),p.return=m,p)}function l(m,p,_,S){var P=_.type;return P===Vs?c(m,p,_.props.children,S,_.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qr&&n0(P)===p.type)?(S=i(p,_.props),S.ref=Jo(m,p,_),S.return=m,S):(S=zu(_.type,_.key,_.props,null,m.mode,S),S.ref=Jo(m,p,_),S.return=m,S)}function u(m,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Xh(_,m.mode,S),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function c(m,p,_,S,P){return p===null||p.tag!==7?(p=Gi(_,m.mode,S,P),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Jh(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ru:return _=zu(p.type,p.key,p.props,null,m.mode,_),_.ref=Jo(m,null,p),_.return=m,_;case Ms:return p=Xh(p,m.mode,_),p.return=m,p;case qr:var S=p._init;return d(m,S(p._payload),_)}if(ua(p)||Wo(p))return p=Gi(p,m.mode,_,null),p.return=m,p;pu(m,p)}return null}function h(m,p,_,S){var P=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(m,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ru:return _.key===P?l(m,p,_,S):null;case Ms:return _.key===P?u(m,p,_,S):null;case qr:return P=_._init,h(m,p,P(_._payload),S)}if(ua(_)||Wo(_))return P!==null?null:c(m,p,_,S,null);pu(m,_)}return null}function y(m,p,_,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(_)||null,a(p,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ru:return m=m.get(S.key===null?_:S.key)||null,l(p,m,S,P);case Ms:return m=m.get(S.key===null?_:S.key)||null,u(p,m,S,P);case qr:var E=S._init;return y(m,p,_,E(S._payload),P)}if(ua(S)||Wo(S))return m=m.get(_)||null,c(p,m,S,P,null);pu(p,S)}return null}function g(m,p,_,S){for(var P=null,E=null,C=p,b=p=0,j=null;C!==null&&b<_.length;b++){C.index>b?(j=C,C=null):j=C.sibling;var q=h(m,C,_[b],S);if(q===null){C===null&&(C=j);break}t&&C&&q.alternate===null&&e(m,C),p=s(q,p,b),E===null?P=q:E.sibling=q,E=q,C=j}if(b===_.length)return n(m,C),He&&Ni(m,b),P;if(C===null){for(;b<_.length;b++)C=d(m,_[b],S),C!==null&&(p=s(C,p,b),E===null?P=C:E.sibling=C,E=C);return He&&Ni(m,b),P}for(C=r(m,C);b<_.length;b++)j=y(C,m,b,_[b],S),j!==null&&(t&&j.alternate!==null&&C.delete(j.key===null?b:j.key),p=s(j,p,b),E===null?P=j:E.sibling=j,E=j);return t&&C.forEach(function(ce){return e(m,ce)}),He&&Ni(m,b),P}function w(m,p,_,S){var P=Wo(_);if(typeof P!="function")throw Error(O(150));if(_=P.call(_),_==null)throw Error(O(151));for(var E=P=null,C=p,b=p=0,j=null,q=_.next();C!==null&&!q.done;b++,q=_.next()){C.index>b?(j=C,C=null):j=C.sibling;var ce=h(m,C,q.value,S);if(ce===null){C===null&&(C=j);break}t&&C&&ce.alternate===null&&e(m,C),p=s(ce,p,b),E===null?P=ce:E.sibling=ce,E=ce,C=j}if(q.done)return n(m,C),He&&Ni(m,b),P;if(C===null){for(;!q.done;b++,q=_.next())q=d(m,q.value,S),q!==null&&(p=s(q,p,b),E===null?P=q:E.sibling=q,E=q);return He&&Ni(m,b),P}for(C=r(m,C);!q.done;b++,q=_.next())q=y(C,m,b,q.value,S),q!==null&&(t&&q.alternate!==null&&C.delete(q.key===null?b:q.key),p=s(q,p,b),E===null?P=q:E.sibling=q,E=q);return t&&C.forEach(function(Te){return e(m,Te)}),He&&Ni(m,b),P}function v(m,p,_,S){if(typeof _=="object"&&_!==null&&_.type===Vs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ru:e:{for(var P=_.key,E=p;E!==null;){if(E.key===P){if(P=_.type,P===Vs){if(E.tag===7){n(m,E.sibling),p=i(E,_.props.children),p.return=m,m=p;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qr&&n0(P)===E.type){n(m,E.sibling),p=i(E,_.props),p.ref=Jo(m,E,_),p.return=m,m=p;break e}n(m,E);break}else e(m,E);E=E.sibling}_.type===Vs?(p=Gi(_.props.children,m.mode,S,_.key),p.return=m,m=p):(S=zu(_.type,_.key,_.props,null,m.mode,S),S.ref=Jo(m,p,_),S.return=m,m=S)}return o(m);case Ms:e:{for(E=_.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Xh(_,m.mode,S),p.return=m,m=p}return o(m);case qr:return E=_._init,v(m,p,E(_._payload),S)}if(ua(_))return g(m,p,_,S);if(Wo(_))return w(m,p,_,S);pu(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=Jh(_,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return v}var mo=hE(!0),fE=hE(!1),Al={},or=Ti(Al),Ya=Ti(Al),Ja=Ti(Al);function Fi(t){if(t===Al)throw Error(O(174));return t}function qm(t,e){switch(Le(Ja,e),Le(Ya,t),Le(or,Al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}Ue(or),Le(or,e)}function go(){Ue(or),Ue(Ya),Ue(Ja)}function pE(t){Fi(Ja.current);var e=Fi(or.current),n=jf(e,t.type);e!==n&&(Le(Ya,t),Le(or,n))}function Wm(t){Ya.current===t&&(Ue(or),Ue(Ya))}var We=Ti(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qh=[];function Km(){for(var t=0;t<qh.length;t++)qh[t]._workInProgressVersionPrimary=null;qh.length=0}var Vu=Mr.ReactCurrentDispatcher,Wh=Mr.ReactCurrentBatchConfig,Zi=0,Ke=null,ht=null,_t=null,gc=!1,Sa=!1,Xa=0,jx=0;function Lt(){throw Error(O(321))}function Gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Qm(t,e,n,r,i,s){if(Zi=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vu.current=t===null||t.memoizedState===null?zx:Bx,t=n(r,i),Sa){s=0;do{if(Sa=!1,Xa=0,25<=s)throw Error(O(301));s+=1,_t=ht=null,e.updateQueue=null,Vu.current=Hx,t=n(r,i)}while(Sa)}if(Vu.current=yc,e=ht!==null&&ht.next!==null,Zi=0,_t=ht=Ke=null,gc=!1,e)throw Error(O(300));return t}function Ym(){var t=Xa!==0;return Xa=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ke.memoizedState=_t=t:_t=_t.next=t,_t}function Pn(){if(ht===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=_t===null?Ke.memoizedState:_t.next;if(e!==null)_t=e,ht=t;else{if(t===null)throw Error(O(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Ke.memoizedState=_t=t:_t=_t.next=t}return _t}function Za(t,e){return typeof e=="function"?e(t):e}function Kh(t){var e=Pn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=ht,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ke.lanes|=c,es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Fn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ke.lanes|=s,es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gh(t){var e=Pn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function mE(){}function gE(t,e){var n=Ke,r=Pn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,Jm(_E.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,el(9,vE.bind(null,n,r,i,e),void 0,null),wt===null)throw Error(O(349));Zi&30||yE(n,e,i)}return i}function yE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vE(t,e,n,r){e.value=n,e.getSnapshot=r,wE(e)&&EE(t)}function _E(t,e,n){return n(function(){wE(e)&&EE(t)})}function wE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function EE(t){var e=kr(t,1);e!==null&&jn(e,t,1,-1)}function r0(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Ux.bind(null,Ke,t),[e.memoizedState,t]}function el(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TE(){return Pn().memoizedState}function ju(t,e,n,r){var i=Jn();Ke.flags|=t,i.memoizedState=el(1|e,n,void 0,r===void 0?null:r)}function sd(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,r!==null&&Gm(r,o.deps)){i.memoizedState=el(e,n,s,r);return}}Ke.flags|=t,i.memoizedState=el(1|e,n,s,r)}function i0(t,e){return ju(8390656,8,t,e)}function Jm(t,e){return sd(2048,8,t,e)}function IE(t,e){return sd(4,2,t,e)}function SE(t,e){return sd(4,4,t,e)}function AE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function RE(t,e,n){return n=n!=null?n.concat([t]):null,sd(4,4,AE.bind(null,e,t),n)}function Xm(){}function CE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function PE(t,e,n){return Zi&21?(Fn(n,e)||(n=b1(),Ke.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function Fx(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Wh.transition;Wh.transition={};try{t(!1),e()}finally{xe=n,Wh.transition=r}}function kE(){return Pn().memoizedState}function $x(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DE(t))bE(e,n);else if(n=lE(t,e,n,r),n!==null){var i=Qt();jn(n,t,r,i),NE(n,e,r)}}function Ux(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DE(t))bE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(i.next=i,Bm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=lE(t,e,i,r),n!==null&&(i=Qt(),jn(n,t,r,i),NE(n,e,r))}}function DE(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function bE(t,e){Sa=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}var yc={readContext:xn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},zx={readContext:xn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:xn,useEffect:i0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ju(4194308,4,AE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return ju(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$x.bind(null,Ke,t),[r.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:r0,useDebugValue:Xm,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=r0(!1),e=t[0];return t=Fx.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ke,i=Jn();if(He){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),wt===null)throw Error(O(349));Zi&30||yE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,i0(_E.bind(null,r,s,t),[t]),r.flags|=2048,el(9,vE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=wt.identifierPrefix;if(He){var n=wr,r=_r;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bx={readContext:xn,useCallback:CE,useContext:xn,useEffect:Jm,useImperativeHandle:RE,useInsertionEffect:IE,useLayoutEffect:SE,useMemo:xE,useReducer:Kh,useRef:TE,useState:function(){return Kh(Za)},useDebugValue:Xm,useDeferredValue:function(t){var e=Pn();return PE(e,ht.memoizedState,t)},useTransition:function(){var t=Kh(Za)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:mE,useSyncExternalStore:gE,useId:kE,unstable_isNewReconciler:!1},Hx={readContext:xn,useCallback:CE,useContext:xn,useEffect:Jm,useImperativeHandle:RE,useInsertionEffect:IE,useLayoutEffect:SE,useMemo:xE,useReducer:Gh,useRef:TE,useState:function(){return Gh(Za)},useDebugValue:Xm,useDeferredValue:function(t){var e=Pn();return ht===null?e.memoizedState=t:PE(e,ht.memoizedState,t)},useTransition:function(){var t=Gh(Za)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:mE,useSyncExternalStore:gE,useId:kE,unstable_isNewReconciler:!1};function yo(t,e){try{var n="",r=e;do n+=vC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function OE(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_c||(_c=!0,yp=r),ap(t,e)},n}function LE(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ap(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ap(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function s0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sP.bind(null,t,e,n),e.then(t,t))}function o0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function a0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var Wx=Mr.ReactCurrentOwner,rn=!1;function Wt(t,e,n,r){e.child=t===null?fE(e,null,n,r):mo(e,t.child,n,r)}function l0(t,e,n,r,i){n=n.render;var s=e.ref;return ro(e,i),r=Qm(t,e,n,r,s,i),n=Ym(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(He&&n&&Vm(e),e.flags|=1,Wt(t,e,r,i),e.child)}function u0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ME(t,e,s,r,i)):(t=zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,r)&&t.ref===e.ref)return Dr(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function ME(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wa(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Dr(t,e,i)}return lp(t,e,n,r,i)}function VE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Ks,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Le(Ks,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Le(Ks,un),un|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Le(Ks,un),un|=r;return Wt(t,e,i,n),e.child}function jE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lp(t,e,n,r,i){var s=on(n)?Ji:Bt.current;return s=fo(e,s),ro(e,i),n=Qm(t,e,n,r,s,i),r=Ym(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(He&&r&&Vm(e),e.flags|=1,Wt(t,e,n,i),e.child)}function c0(t,e,n,r,i){if(on(n)){var s=!0;uc(e)}else s=!1;if(ro(e,i),e.stateNode===null)Fu(t,e),dE(e,n,r),op(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=on(n)?Ji:Bt.current,u=fo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&t0(e,o,r,u),Wr=!1;var h=e.memoizedState;o.state=h,pc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||sn.current||Wr?(typeof c=="function"&&(sp(e,n,c,r),l=e.memoizedState),(a=Wr||e0(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=on(n)?Ji:Bt.current,l=fo(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&t0(e,o,r,l),Wr=!1,h=e.memoizedState,o.state=h,pc(e,r,o,i);var g=e.memoizedState;a!==d||h!==g||sn.current||Wr?(typeof y=="function"&&(sp(e,n,y,r),g=e.memoizedState),(u=Wr||e0(e,n,u,r,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return up(t,e,n,r,s,i)}function up(t,e,n,r,i,s){jE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qv(e,n,!1),Dr(t,e,s);r=e.stateNode,Wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mo(e,t.child,null,s),e.child=mo(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=r.state,i&&Qv(e,n,!0),e.child}function FE(t){var e=t.stateNode;e.pendingContext?Gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gv(t,e.context,!1),qm(t,e.containerInfo)}function d0(t,e,n,r,i){return po(),Fm(i),e.flags|=256,Wt(t,e,n,r),e.child}var cp={dehydrated:null,treeContext:null,retryLane:0};function dp(t){return{baseLanes:t,cachePool:null,transitions:null}}function $E(t,e,n){var r=e.pendingProps,i=We.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Le(We,i&1),t===null)return rp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ld(o,r,0,null),t=Gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dp(n),e.memoizedState=cp,t):Zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ui(a,s):(s=Gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cp,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zm(t,e){return e=ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mu(t,e,n,r){return r!==null&&Fm(r),mo(e,t.child,null,n),t=Zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qh(Error(O(422))),mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ld({mode:"visible",children:r.children},i,0,null),s=Gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mo(e,t.child,null,o),e.child.memoizedState=dp(o),e.memoizedState=cp,s);if(!(e.mode&1))return mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=Qh(s,r,void 0),mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,rn||a){if(r=wt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kr(t,i),jn(r,t,i,-1))}return sg(),r=Qh(Error(O(421))),mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,cn=si(i.nextSibling),hn=e,He=!0,Mn=null,t!==null&&(En[Tn++]=_r,En[Tn++]=wr,En[Tn++]=Xi,_r=t.id,wr=t.overflow,Xi=e),e=Zm(e,r.children),e.flags|=4096,e)}function h0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ip(t.return,e,n)}function Yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function UE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Wt(t,e,r.children,n),r=We.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,n,e);else if(t.tag===19)h0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Le(We,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yh(e,!0,n,null,s);break;case"together":Yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gx(t,e,n){switch(e.tag){case 3:FE(e),po();break;case 5:pE(e);break;case 1:on(e.type)&&uc(e);break;case 4:qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Le(hc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Le(We,We.current&1),e.flags|=128,null):n&e.child.childLanes?$E(t,e,n):(Le(We,We.current&1),t=Dr(t,e,n),t!==null?t.sibling:null);Le(We,We.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return UE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(We,We.current),r)break;return null;case 22:case 23:return e.lanes=0,VE(t,e,n)}return Dr(t,e,n)}var zE,hp,BE,HE;zE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};BE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(or.current);var s=null;switch(n){case"input":i=Of(t,i),r=Of(t,r),s=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),s=[];break;case"textarea":i=Vf(t,i),r=Vf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ac)}Ff(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};HE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xo(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qx(t,e,n){var r=e.pendingProps;switch(jm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return on(e.type)&&lc(),Mt(e),null;case 3:return r=e.stateNode,go(),Ue(sn),Ue(Bt),Km(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(wp(Mn),Mn=null))),hp(t,e),Mt(e),null;case 5:Wm(e);var i=Fi(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)BE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return Mt(e),null}if(t=Fi(or.current),fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zn]=e,r[Qa]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)je(da[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Ev(r,s),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},je("invalid",r);break;case"textarea":Iv(r,s),je("invalid",r)}Ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,a,t),i=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",r)}switch(n){case"input":iu(r),Tv(r,s,!0);break;case"textarea":iu(r),Sv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ac)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Qa]=r,zE(t,e,!1,!1),e.stateNode=t;e:{switch(o=$f(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)je(da[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":Ev(t,r),i=Of(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),je("invalid",t);break;case"textarea":Iv(t,r),i=Vf(t,r),je("invalid",t);break;default:i=r}Ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?w1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&Im(t,s,l,o))}switch(n){case"input":iu(t),Tv(t,r,!1);break;case"textarea":iu(t),Sv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)HE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=Fi(Ja.current),Fi(or.current),fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(s=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:hu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return Mt(e),null;case 13:if(Ue(We),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&cn!==null&&e.mode&1&&!(e.flags&128))aE(),po(),e.flags|=98560,s=!1;else if(s=fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Zn]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else Mn!==null&&(wp(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||We.current&1?ft===0&&(ft=3):sg())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return go(),hp(t,e),t===null&&Ka(e.stateNode.containerInfo),Mt(e),null;case 10:return zm(e.type._context),Mt(e),null;case 17:return on(e.type)&&lc(),Mt(e),null;case 19:if(Ue(We),s=e.memoizedState,s===null)return Mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xo(s,!1);else{if(ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,Xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Le(We,We.current&1|2),e.child}t=t.sibling}s.tail!==null&&rt()>vo&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=mc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Mt(e),null}else 2*rt()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,n=We.current,Le(We,r?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return ig(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function Yx(t,e){switch(jm(e),e.tag){case 1:return on(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return go(),Ue(sn),Ue(Bt),Km(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wm(e),null;case 13:if(Ue(We),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue(We),null;case 4:return go(),null;case 10:return zm(e.type._context),null;case 22:case 23:return ig(),null;case 24:return null;default:return null}}var gu=!1,Ft=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(t,e,r)}else n.current=null}function fp(t,e,n){try{n()}catch(r){Je(t,e,r)}}var f0=!1;function Xx(t,e){if(Yf=ic,t=G1(),Mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:t,selectionRange:n},ic=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,v=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Nn(e.type,w),v);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(S){Je(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return g=f0,f0=!1,g}function Aa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fp(e,n,s)}i=i.next}while(i!==r)}}function od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qE(t){var e=t.alternate;e!==null&&(t.alternate=null,qE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Qa],delete e[ep],delete e[Ox],delete e[Lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function WE(t){return t.tag===5||t.tag===3||t.tag===4}function p0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||WE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(r!==4&&(t=t.child,t!==null))for(mp(t,e,n),t=t.sibling;t!==null;)mp(t,e,n),t=t.sibling}function gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gp(t,e,n),t=t.sibling;t!==null;)gp(t,e,n),t=t.sibling}var Rt=null,On=!1;function zr(t,e,n){for(n=n.child;n!==null;)KE(t,e,n),n=n.sibling}function KE(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:Ft||Ws(n,e);case 6:var r=Rt,i=On;Rt=null,zr(t,e,n),Rt=r,On=i,Rt!==null&&(On?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(On?(t=Rt,n=n.stateNode,t.nodeType===8?Bh(t.parentNode,n):t.nodeType===1&&Bh(t,n),Ha(t)):Bh(Rt,n.stateNode));break;case 4:r=Rt,i=On,Rt=n.stateNode.containerInfo,On=!0,zr(t,e,n),Rt=r,On=i;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fp(n,e,o),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!Ft&&(Ws(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Je(n,e,a)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,zr(t,e,n),Ft=r):zr(t,e,n);break;default:zr(t,e,n)}}function m0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jx),e.forEach(function(r){var i=aP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,On=!1;break e;case 3:Rt=a.stateNode.containerInfo,On=!0;break e;case 4:Rt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Rt===null)throw Error(O(160));KE(s,o,i),Rt=null,On=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)GE(e,t),e=e.sibling}function GE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Qn(t),r&4){try{Aa(3,t,t.return),od(3,t)}catch(w){Je(t,t.return,w)}try{Aa(5,t,t.return)}catch(w){Je(t,t.return,w)}}break;case 1:bn(e,t),Qn(t),r&512&&n!==null&&Ws(n,n.return);break;case 5:if(bn(e,t),Qn(t),r&512&&n!==null&&Ws(n,n.return),t.flags&32){var i=t.stateNode;try{$a(i,"")}catch(w){Je(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&m1(i,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?w1(i,d):c==="dangerouslySetInnerHTML"?v1(i,d):c==="children"?$a(i,d):Im(i,c,d,u)}switch(a){case"input":Lf(i,s);break;case"textarea":g1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Zs(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Zs(i,!!s.multiple,s.defaultValue,!0):Zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qa]=s}catch(w){Je(t,t.return,w)}}break;case 6:if(bn(e,t),Qn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Je(t,t.return,w)}}break;case 3:if(bn(e,t),Qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(w){Je(t,t.return,w)}break;case 4:bn(e,t),Qn(t);break;case 13:bn(e,t),Qn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ng=rt())),r&4&&m0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||c,bn(e,t),Ft=u):bn(e,t),Qn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(W=t,c=t.child;c!==null;){for(d=W=c;W!==null;){switch(h=W,y=h.child,h.tag){case 0:case 11:case 14:case 15:Aa(4,h,h.return);break;case 1:Ws(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){Je(r,n,w)}}break;case 5:Ws(h,h.return);break;case 22:if(h.memoizedState!==null){y0(d);continue}}y!==null?(y.return=h,W=y):y0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_1("display",o))}catch(w){Je(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Je(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bn(e,t),Qn(t),r&4&&m0(t);break;case 21:break;default:bn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(WE(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=p0(t);gp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=p0(t);mp(t,a,o);break;default:throw Error(O(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zx(t,e,n){W=t,QE(t)}function QE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=gu;var u=Ft;if(gu=o,(Ft=l)&&!u)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?v0(i):l!==null?(l.return=o,W=l):v0(i);for(;s!==null;)W=s,QE(s),s=s.sibling;W=i,gu=a,Ft=u}g0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):g0(t)}}function g0(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ft||e.flags&512&&pp(e)}catch(h){Je(e,e.return,h)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function y0(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function v0(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{od(4,e)}catch(l){Je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Je(e,i,l)}}var s=e.return;try{pp(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{pp(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var eP=Math.ceil,vc=Mr.ReactCurrentDispatcher,eg=Mr.ReactCurrentOwner,An=Mr.ReactCurrentBatchConfig,Ie=0,wt=null,at=null,kt=0,un=0,Ks=Ti(0),ft=0,tl=null,es=0,ad=0,tg=0,Ra=null,tn=null,ng=0,vo=1/0,yr=null,_c=!1,yp=null,ai=null,yu=!1,ei=null,wc=0,Ca=0,vp=null,$u=-1,Uu=0;function Qt(){return Ie&6?rt():$u!==-1?$u:$u=rt()}function li(t){return t.mode&1?Ie&2&&kt!==0?kt&-kt:Vx.transition!==null?(Uu===0&&(Uu=b1()),Uu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:F1(t.type)),t):1}function jn(t,e,n,r){if(50<Ca)throw Ca=0,vp=null,Error(O(185));Tl(t,n,r),(!(Ie&2)||t!==wt)&&(t===wt&&(!(Ie&2)&&(ad|=n),ft===4&&Gr(t,kt)),an(t,r),n===1&&Ie===0&&!(e.mode&1)&&(vo=rt()+500,rd&&Ii()))}function an(t,e){var n=t.callbackNode;VC(t,e);var r=rc(t,t===wt?kt:0);if(r===0)n!==null&&Cv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cv(n),e===1)t.tag===0?Mx(_0.bind(null,t)):iE(_0.bind(null,t)),bx(function(){!(Ie&6)&&Ii()}),n=null;else{switch(N1(r)){case 1:n=xm;break;case 4:n=k1;break;case 16:n=nc;break;case 536870912:n=D1;break;default:n=nc}n=rT(n,YE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YE(t,e){if($u=-1,Uu=0,Ie&6)throw Error(O(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=rc(t,t===wt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ec(t,r);else{e=r;var i=Ie;Ie|=2;var s=XE();(wt!==t||kt!==e)&&(yr=null,vo=rt()+500,Ki(t,e));do try{rP();break}catch(a){JE(t,a)}while(!0);Um(),vc.current=s,Ie=i,at!==null?e=0:(wt=null,kt=0,e=ft)}if(e!==0){if(e===2&&(i=qf(t),i!==0&&(r=i,e=_p(t,i))),e===1)throw n=tl,Ki(t,0),Gr(t,r),an(t,rt()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!tP(i)&&(e=Ec(t,r),e===2&&(s=qf(t),s!==0&&(r=s,e=_p(t,s))),e===1))throw n=tl,Ki(t,0),Gr(t,r),an(t,rt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Oi(t,tn,yr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=ng+500-rt(),10<e)){if(rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zf(Oi.bind(null,t,tn,yr),e);break}Oi(t,tn,yr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=rt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eP(r/1960))-r,10<r){t.timeoutHandle=Zf(Oi.bind(null,t,tn,yr),r);break}Oi(t,tn,yr);break;case 5:Oi(t,tn,yr);break;default:throw Error(O(329))}}}return an(t,rt()),t.callbackNode===n?YE.bind(null,t):null}function _p(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=Ec(t,e),t!==2&&(e=tn,tn=n,e!==null&&wp(e)),t}function wp(t){tn===null?tn=t:tn.push.apply(tn,t)}function tP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~tg,e&=~ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),r=1<<n;t[n]=-1,e&=~r}}function _0(t){if(Ie&6)throw Error(O(327));io();var e=rc(t,0);if(!(e&1))return an(t,rt()),null;var n=Ec(t,e);if(t.tag!==0&&n===2){var r=qf(t);r!==0&&(e=r,n=_p(t,r))}if(n===1)throw n=tl,Ki(t,0),Gr(t,e),an(t,rt()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,tn,yr),an(t,rt()),null}function rg(t,e){var n=Ie;Ie|=1;try{return t(e)}finally{Ie=n,Ie===0&&(vo=rt()+500,rd&&Ii())}}function ts(t){ei!==null&&ei.tag===0&&!(Ie&6)&&io();var e=Ie;Ie|=1;var n=An.transition,r=xe;try{if(An.transition=null,xe=1,t)return t()}finally{xe=r,An.transition=n,Ie=e,!(Ie&6)&&Ii()}}function ig(){un=Ks.current,Ue(Ks)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dx(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(jm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lc();break;case 3:go(),Ue(sn),Ue(Bt),Km();break;case 5:Wm(r);break;case 4:go();break;case 13:Ue(We);break;case 19:Ue(We);break;case 10:zm(r.type._context);break;case 22:case 23:ig()}n=n.return}if(wt=t,at=t=ui(t.current,null),kt=un=e,ft=0,tl=null,tg=ad=es=0,tn=Ra=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function JE(t,e){do{var n=at;try{if(Um(),Vu.current=yc,gc){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gc=!1}if(Zi=0,_t=ht=Ke=null,Sa=!1,Xa=0,eg.current=null,n===null||n.return===null){ft=1,tl=e,at=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=o0(o);if(y!==null){y.flags&=-257,a0(y,o,a,s,e),y.mode&1&&s0(s,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if(!(e&1)){s0(s,u,e),sg();break e}l=Error(O(426))}}else if(He&&a.mode&1){var v=o0(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),a0(v,o,a,s,e),Fm(yo(l,a));break e}}s=l=yo(l,a),ft!==4&&(ft=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=OE(s,l,e);Xv(s,m);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ai===null||!ai.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=LE(s,a,e);Xv(s,S);break e}}s=s.return}while(s!==null)}eT(n)}catch(P){e=P,at===n&&n!==null&&(at=n=n.return);continue}break}while(!0)}function XE(){var t=vc.current;return vc.current=yc,t===null?yc:t}function sg(){(ft===0||ft===3||ft===2)&&(ft=4),wt===null||!(es&268435455)&&!(ad&268435455)||Gr(wt,kt)}function Ec(t,e){var n=Ie;Ie|=2;var r=XE();(wt!==t||kt!==e)&&(yr=null,Ki(t,e));do try{nP();break}catch(i){JE(t,i)}while(!0);if(Um(),Ie=n,vc.current=r,at!==null)throw Error(O(261));return wt=null,kt=0,ft}function nP(){for(;at!==null;)ZE(at)}function rP(){for(;at!==null&&!xC();)ZE(at)}function ZE(t){var e=nT(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?eT(t):at=e,eg.current=null}function eT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,at=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,at=null;return}}else if(n=Qx(n,e,un),n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);ft===0&&(ft=5)}function Oi(t,e,n){var r=xe,i=An.transition;try{An.transition=null,xe=1,iP(t,e,n,r)}finally{An.transition=i,xe=r}return null}function iP(t,e,n,r){do io();while(ei!==null);if(Ie&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jC(t,s),t===wt&&(at=wt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,rT(nc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=xe;xe=1;var a=Ie;Ie|=4,eg.current=null,Xx(t,n),GE(n,t),Sx(Jf),ic=!!Yf,Jf=Yf=null,t.current=n,Zx(n),PC(),Ie=a,xe=o,An.transition=s}else t.current=n;if(yu&&(yu=!1,ei=t,wc=i),s=t.pendingLanes,s===0&&(ai=null),bC(n.stateNode),an(t,rt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_c)throw _c=!1,t=yp,yp=null,t;return wc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===vp?Ca++:(Ca=0,vp=t):Ca=0,Ii(),null}function io(){if(ei!==null){var t=N1(wc),e=An.transition,n=xe;try{if(An.transition=null,xe=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,wc=0,Ie&6)throw Error(O(331));var i=Ie;for(Ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(W=u;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:Aa(8,c,s)}var d=c.child;if(d!==null)d.return=c,W=d;else for(;W!==null;){c=W;var h=c.sibling,y=c.return;if(qE(c),c===u){W=null;break}if(h!==null){h.return=y,W=h;break}W=y}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,W=m;break e}W=s.return}}var p=t.current;for(W=p;W!==null;){o=W;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,W=_;else e:for(o=p;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:od(9,a)}}catch(P){Je(a,a.return,P)}if(a===o){W=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,W=S;break e}W=a.return}}if(Ie=i,Ii(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Xc,t)}catch{}r=!0}return r}finally{xe=n,An.transition=e}}return!1}function w0(t,e,n){e=yo(n,e),e=OE(t,e,1),t=oi(t,e,1),e=Qt(),t!==null&&(Tl(t,1,e),an(t,e))}function Je(t,e,n){if(t.tag===3)w0(t,t,n);else for(;e!==null;){if(e.tag===3){w0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=yo(n,t),t=LE(e,t,1),e=oi(e,t,1),t=Qt(),e!==null&&(Tl(e,1,t),an(e,t));break}}e=e.return}}function sP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(kt&n)===n&&(ft===4||ft===3&&(kt&130023424)===kt&&500>rt()-ng?Ki(t,0):tg|=n),an(t,e)}function tT(t,e){e===0&&(t.mode&1?(e=au,au<<=1,!(au&130023424)&&(au=4194304)):e=1);var n=Qt();t=kr(t,e),t!==null&&(Tl(t,e,n),an(t,n))}function oP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tT(t,n)}function aP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),tT(t,n)}var nT;nT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Gx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,He&&e.flags&1048576&&sE(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fu(t,e),t=e.pendingProps;var i=fo(e,Bt.current);ro(e,n),i=Qm(null,e,r,t,i,n);var s=Ym();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,uc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hm(e),i.updater=id,e.stateNode=i,i._reactInternals=e,op(e,r,t,n),e=up(null,e,r,!0,s,n)):(e.tag=0,He&&s&&Vm(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uP(r),t=Nn(r,t),i){case 0:e=lp(null,e,r,t,n);break e;case 1:e=c0(null,e,r,t,n);break e;case 11:e=l0(null,e,r,t,n);break e;case 14:e=u0(null,e,r,Nn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),lp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),c0(t,e,r,i,n);case 3:e:{if(FE(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,uE(t,e),pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yo(Error(O(423)),e),e=d0(t,e,r,n,i);break e}else if(r!==i){i=yo(Error(O(424)),e),e=d0(t,e,r,n,i);break e}else for(cn=si(e.stateNode.containerInfo.firstChild),hn=e,He=!0,Mn=null,n=fE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),r===i){e=Dr(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return pE(e),t===null&&rp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xf(r,i)?o=null:s!==null&&Xf(r,s)&&(e.flags|=32),jE(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&rp(e),null;case 13:return $E(t,e,n);case 4:return qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mo(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),l0(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Le(hc,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!sn.current){e=Dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ip(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ip(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=xn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Nn(r,e.pendingProps),i=Nn(r.type,i),u0(t,e,r,i,n);case 15:return ME(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nn(r,i),Fu(t,e),e.tag=1,on(r)?(t=!0,uc(e)):t=!1,ro(e,n),dE(e,r,i),op(e,r,i,n),up(null,e,r,!0,t,n);case 19:return UE(t,e,n);case 22:return VE(t,e,n)}throw Error(O(156,e.tag))};function rT(t,e){return P1(t,e)}function lP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,r){return new lP(t,e,n,r)}function og(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uP(t){if(typeof t=="function")return og(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Am)return 11;if(t===Rm)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")og(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return Gi(n.children,i,s,e);case Sm:o=8,i|=8;break;case kf:return t=Sn(12,n,e,i|2),t.elementType=kf,t.lanes=s,t;case Df:return t=Sn(13,n,e,i),t.elementType=Df,t.lanes=s,t;case bf:return t=Sn(19,n,e,i),t.elementType=bf,t.lanes=s,t;case h1:return ld(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c1:o=10;break e;case d1:o=9;break e;case Am:o=11;break e;case Rm:o=14;break e;case qr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=Sn(7,t,r,e),t.lanes=n,t}function ld(t,e,n,r){return t=Sn(22,t,r,e),t.elementType=h1,t.lanes=n,t.stateNode={isHidden:!1},t}function Jh(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Xh(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bh(0),this.expirationTimes=bh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ag(t,e,n,r,i,s,o,a,l){return t=new cP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hm(s),t}function dP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iT(t){if(!t)return gi;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(on(n))return rE(t,n,e)}return e}function sT(t,e,n,r,i,s,o,a,l){return t=ag(n,r,!0,t,i,s,o,a,l),t.context=iT(null),n=t.current,r=Qt(),i=li(n),s=Ar(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,Tl(t,i,r),an(t,r),t}function ud(t,e,n,r){var i=e.current,s=Qt(),o=li(i);return n=iT(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(jn(t,i,o,s),Mu(t,i,o)),o}function Tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lg(t,e){E0(t,e),(t=t.alternate)&&E0(t,e)}function hP(){return null}var oT=typeof reportError=="function"?reportError:function(t){console.error(t)};function ug(t){this._internalRoot=t}cd.prototype.render=ug.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));ud(t,e,null,null)};cd.prototype.unmount=ug.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){ud(null,t,null,null)}),e[Pr]=null}};function cd(t){this._internalRoot=t}cd.prototype.unstable_scheduleHydration=function(t){if(t){var e=M1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&j1(t)}};function cg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function T0(){}function fP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Tc(o);s.call(u)}}var o=sT(e,r,t,0,null,!1,!1,"",T0);return t._reactRootContainer=o,t[Pr]=o.current,Ka(t.nodeType===8?t.parentNode:t),ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Tc(l);a.call(u)}}var l=ag(t,0,!1,null,null,!1,!1,"",T0);return t._reactRootContainer=l,t[Pr]=l.current,Ka(t.nodeType===8?t.parentNode:t),ts(function(){ud(e,l,n,r)}),l}function hd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Tc(o);a.call(l)}}ud(e,o,t,i)}else o=fP(n,e,t,i,r);return Tc(o)}O1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(Pm(e,n|1),an(e,rt()),!(Ie&6)&&(vo=rt()+500,Ii()))}break;case 13:ts(function(){var r=kr(t,1);if(r!==null){var i=Qt();jn(r,t,1,i)}}),lg(t,1)}};km=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=Qt();jn(e,t,134217728,n)}lg(t,134217728)}};L1=function(t){if(t.tag===13){var e=li(t),n=kr(t,e);if(n!==null){var r=Qt();jn(n,t,e,r)}lg(t,e)}};M1=function(){return xe};V1=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};zf=function(t,e,n){switch(e){case"input":if(Lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nd(r);if(!i)throw Error(O(90));p1(r),Lf(r,i)}}}break;case"textarea":g1(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};I1=rg;S1=ts;var pP={usingClientEntryPoint:!1,Events:[Sl,Us,nd,E1,T1,rg]},Zo={findFiberByHostInstance:Vi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mP={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C1(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||hP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Xc=vu.inject(mP),sr=vu}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pP;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cg(e))throw Error(O(200));return dP(t,e,null,n)};gn.createRoot=function(t,e){if(!cg(t))throw Error(O(299));var n=!1,r="",i=oT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ag(t,1,!1,null,null,n,!1,r,i),t[Pr]=e.current,Ka(t.nodeType===8?t.parentNode:t),new ug(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=C1(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return ts(t)};gn.hydrate=function(t,e,n){if(!dd(e))throw Error(O(200));return hd(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!cg(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sT(e,null,t,1,n??null,i,!1,s,o),t[Pr]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cd(e)};gn.render=function(t,e,n){if(!dd(e))throw Error(O(200));return hd(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!dd(t))throw Error(O(40));return t._reactRootContainer?(ts(function(){hd(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};gn.unstable_batchedUpdates=rg;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dd(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return hd(t,e,n,!1,r)};gn.version="18.2.0-next-9e3b772b8-20220608";function aT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aT)}catch(t){console.error(t)}}aT(),s1.exports=gn;var dg=s1.exports;const gP=gm(dg),yP=Gw({__proto__:null,default:gP},[dg]);var lT,I0=dg;lT=I0.createRoot,I0.hydrateRoot;var S0={};/**
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
 */const uT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(h=64)),r.push(n[c],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new _P;const h=s<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wP=function(t){const e=uT(t);return cT.encodeByteArray(e,!0)},Ic=function(t){return wP(t).replace(/\./g,"")},dT=function(t){try{return cT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TP=()=>EP().__FIREBASE_DEFAULTS__,IP=()=>{if(typeof process>"u"||typeof S0>"u")return;const t=S0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dT(t[1]);return e&&JSON.parse(e)},fd=()=>{try{return TP()||IP()||SP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hT=t=>{var e,n;return(n=(e=fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AP=t=>{const e=hT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fT=()=>{var t;return(t=fd())===null||t===void 0?void 0:t.config},pT=t=>{var e;return(e=fd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let RP=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function CP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ic(JSON.stringify(n)),Ic(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function PP(){var t;const e=(t=fd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DP(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bP(){return!PP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pd(){try{return typeof indexedDB=="object"}catch{return!1}}function fg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function mT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const NP="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NP,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qn(i,a,r)}}function OP(t,e){return t.replace(LP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LP=/\{\$([^}]+)}/g;function MP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(A0(s)&&A0(o)){if(!ns(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A0(t){return t!==null&&typeof t=="object"}/**
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
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VP(t,e){const n=new jP(t,e);return n.subscribe.bind(n)}class jP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zh),i.error===void 0&&(i.error=Zh),i.complete===void 0&&(i.complete=Zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zh(){}/**
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
 */const $P=1e3,UP=2,zP=4*60*60*1e3,BP=.5;function R0(t,e=$P,n=UP){const r=e*Math.pow(n,t),i=Math.round(BP*r*(Math.random()-.5)*2);return Math.min(zP,r+i)}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class HP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WP(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qP(t){return t===Li?void 0:t}function WP(t){return t.instantiationMode==="EAGER"}/**
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
 */class KP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const GP={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},QP=we.INFO,YP={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},JP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=QP,this._logHandler=JP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const XP=(t,e)=>e.some(n=>t instanceof n);let C0,x0;function ZP(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ek(){return x0||(x0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,Ep=new WeakMap,yT=new WeakMap,ef=new WeakMap,pg=new WeakMap;function tk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gT.set(n,t)}).catch(()=>{}),pg.set(e,t),e}function nk(t){if(Ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ep.set(t,e)}let Tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rk(t){Tp=t(Tp)}function ik(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return yT.set(r,e.sort?e.sort():[e]),ci(r)}:ek().includes(t)?function(...e){return t.apply(tf(this),e),ci(gT.get(this))}:function(...e){return ci(t.apply(tf(this),e))}}function sk(t){return typeof t=="function"?ik(t):(t instanceof IDBTransaction&&nk(t),XP(t,ZP())?new Proxy(t,Tp):t)}function ci(t){if(t instanceof IDBRequest)return tk(t);if(ef.has(t))return ef.get(t);const e=sk(t);return e!==t&&(ef.set(t,e),pg.set(e,t)),e}const tf=t=>pg.get(t);function vT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ci(o.result),l.oldVersion,l.newVersion,ci(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ok=["get","getKey","getAll","getAllKeys","count"],ak=["put","add","delete","clear"],nf=new Map;function P0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ak.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ok.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return nf.set(e,s),s}rk(t=>({...t,get:(e,n,r)=>P0(e,n)||t.get(e,n,r),has:(e,n)=>!!P0(e,n)||t.has(e,n)}));/**
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
 */class lk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ip="@firebase/app",k0="0.10.1";/**
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
 */const rs=new md("@firebase/app"),ck="@firebase/app-compat",dk="@firebase/analytics-compat",hk="@firebase/analytics",fk="@firebase/app-check-compat",pk="@firebase/app-check",mk="@firebase/auth",gk="@firebase/auth-compat",yk="@firebase/database",vk="@firebase/database-compat",_k="@firebase/functions",wk="@firebase/functions-compat",Ek="@firebase/installations",Tk="@firebase/installations-compat",Ik="@firebase/messaging",Sk="@firebase/messaging-compat",Ak="@firebase/performance",Rk="@firebase/performance-compat",Ck="@firebase/remote-config",xk="@firebase/remote-config-compat",Pk="@firebase/storage",kk="@firebase/storage-compat",Dk="@firebase/firestore",bk="@firebase/firestore-compat",Nk="firebase",Ok="10.11.0";/**
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
 */const Sp="[DEFAULT]",Lk={[Ip]:"fire-core",[ck]:"fire-core-compat",[hk]:"fire-analytics",[dk]:"fire-analytics-compat",[pk]:"fire-app-check",[fk]:"fire-app-check-compat",[mk]:"fire-auth",[gk]:"fire-auth-compat",[yk]:"fire-rtdb",[vk]:"fire-rtdb-compat",[_k]:"fire-fn",[wk]:"fire-fn-compat",[Ek]:"fire-iid",[Tk]:"fire-iid-compat",[Ik]:"fire-fcm",[Sk]:"fire-fcm-compat",[Ak]:"fire-perf",[Rk]:"fire-perf-compat",[Ck]:"fire-rc",[xk]:"fire-rc-compat",[Pk]:"fire-gcs",[kk]:"fire-gcs-compat",[Dk]:"fire-fst",[bk]:"fire-fst-compat","fire-js":"fire-js",[Nk]:"fire-js-all"};/**
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
 */const Sc=new Map,Mk=new Map,Ap=new Map;function D0(t,e){try{t.container.addComponent(e)}catch(n){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Ap.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;Ap.set(e,t);for(const n of Sc.values())D0(n,t);for(const n of Mk.values())D0(n,t);return!0}function ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
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
 */const Vk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new gs("app","Firebase",Vk);/**
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
 */class jk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=Ok;function mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=fT()),!n)throw di.create("no-options");const s=Sc.get(i);if(s){if(ns(n,s.options)&&ns(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new KP(i);for(const l of Ap.values())o.addComponent(l);const a=new jk(n,r,o);return Sc.set(i,a),a}function gg(t=Sp){const e=Sc.get(t);if(!e&&t===Sp&&fT())return mg();if(!e)throw di.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=Lk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}hr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fk="firebase-heartbeat-database",$k=1,nl="firebase-heartbeat-store";let rf=null;function _T(){return rf||(rf=vT(Fk,$k,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),rf}async function Uk(t){try{const n=(await _T()).transaction(nl),r=await n.objectStore(nl).get(wT(t));return await n.done,r}catch(e){if(e instanceof qn)rs.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(n.message)}}}async function b0(t,e){try{const r=(await _T()).transaction(nl,"readwrite");await r.objectStore(nl).put(e,wT(t)),await r.done}catch(n){if(n instanceof qn)rs.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rs.warn(r.message)}}}function wT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zk=1024,Bk=30*24*60*60*1e3;class Hk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=N0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=N0(),{heartbeatsToSend:r,unsentEntries:i}=qk(this._heartbeatsCache.heartbeats),s=Ic(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function N0(){return new Date().toISOString().substring(0,10)}function qk(t,e=zk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),O0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),O0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pd()?fg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function O0(t){return Ic(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kk(t){hr(new $n("platform-logger",e=>new lk(e),"PRIVATE")),hr(new $n("heartbeat",e=>new Hk(e),"PRIVATE")),Rn(Ip,k0,t),Rn(Ip,k0,"esm2017"),Rn("fire-js","")}Kk("");var Gk="firebase",Qk="10.11.0";/**
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
 */Rn(Gk,Qk,"app");function yg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ET(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=ET,TT=new gs("auth","Firebase",ET());/**
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
 */const Ac=new md("@firebase/auth");function Jk(t,...e){Ac.logLevel<=we.WARN&&Ac.warn(`Auth (${Lo}): ${t}`,...e)}function Bu(t,...e){Ac.logLevel<=we.ERROR&&Ac.error(`Auth (${Lo}): ${t}`,...e)}/**
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
 */function Un(t,...e){throw vg(t,...e)}function ar(t,...e){return vg(t,...e)}function IT(t,e,n){const r=Object.assign(Object.assign({},Yk()),{[e]:n});return new gs("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return IT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TT.create(t,...e)}function te(t,e,...n){if(!t)throw vg(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bu(e),new Error(e)}function br(t,e){t||Er(e)}/**
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
 */function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xk(){return L0()==="http:"||L0()==="https:"}function L0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||hg()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=xP()||kP()}get(){return Zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _g(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ST{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nD=new Cl(3e4,6e4);function Si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ai(t,e,n,r,i={}){return AT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ST.fetch()(RT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function AT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tD),e);try{const i=new iD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _u(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _u(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw IT(t,c,u);Un(t,c)}}catch(i){if(i instanceof qn)throw i;Un(t,"network-request-failed",{message:String(i)})}}async function xl(t,e,n,r,i={}){const s=await Ai(t,e,n,r,i);return"mfaPendingCredential"in s&&Un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_g(t.config,i):`${t.config.apiScheme}://${i}`}function rD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ar(this.auth,"network-request-failed")),nD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ar(t,e,r);return i.customData._tokenResponse=n,i}function M0(t){return t!==void 0&&t.enterprise!==void 0}class sD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oD(t,e){return Ai(t,"GET","/v2/recaptchaConfig",Si(t,e))}/**
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
 */async function aD(t,e){return Ai(t,"POST","/v1/accounts:delete",e)}async function CT(t,e){return Ai(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lD(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=wg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xa(sf(i.auth_time)),issuedAtTime:xa(sf(i.iat)),expirationTime:xa(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function wg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bu("JWT malformed, contained fewer than 3 sections"),null;try{const i=dT(n);return i?JSON.parse(i):(Bu("Failed to decode base64 JWT payload"),null)}catch(i){return Bu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function V0(t){const e=wg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&uD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rl(t,CT(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xT(s.providerUserInfo):[],a=hD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function dD(t){const e=Et(t);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xT(t){return t.map(e=>{var{providerId:n}=e,r=yg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fD(t,e){const n=await AT(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ST.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pD(t,e){return Ai(t,"POST","/v2/accounts:revokeToken",Si(t,e))}/**
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
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=V0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new so;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Br(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rl(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lD(this,e)}reload(){return dD(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await rl(this,aD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:S,isAnonymous:P,providerData:E,stsTokenManager:C}=n;te(_&&C,e,"internal-error");const b=so.fromJSON(this.name,C);te(typeof _=="string",e,"internal-error"),Br(d,e.name),Br(h,e.name),te(typeof S=="boolean",e,"internal-error"),te(typeof P=="boolean",e,"internal-error"),Br(y,e.name),Br(g,e.name),Br(w,e.name),Br(v,e.name),Br(m,e.name),Br(p,e.name);const j=new Tr({uid:_,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:P,photoURL:g,phoneNumber:y,tenantId:w,stsTokenManager:b,createdAt:m,lastLoginAt:p});return E&&Array.isArray(E)&&(j.providerData=E.map(q=>Object.assign({},q))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new so;i.updateFromServerResponse(n);const s=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new so;a.updateFromIdToken(r);const l=new Tr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const j0=new Map;function Ir(t){br(t instanceof Function,"Expected a class definition");let e=j0.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,j0.set(t,e),e)}/**
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
 */class PT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PT.type="NONE";const F0=PT;/**
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
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oo(Ir(F0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ir(F0);const o=Hu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Tr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new oo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new oo(s,e,r))}}/**
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
 */function $0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OT(e))return"Blackberry";if(LT(e))return"Webos";if(Eg(e))return"Safari";if((e.includes("chrome/")||DT(e))&&!e.includes("edge/"))return"Chrome";if(NT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kT(t=ut()){return/firefox\//i.test(t)}function Eg(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DT(t=ut()){return/crios\//i.test(t)}function bT(t=ut()){return/iemobile/i.test(t)}function NT(t=ut()){return/android/i.test(t)}function OT(t=ut()){return/blackberry/i.test(t)}function LT(t=ut()){return/webos/i.test(t)}function gd(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mD(t=ut()){var e;return gd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gD(){return DP()&&document.documentMode===10}function MT(t=ut()){return gd(t)||NT(t)||LT(t)||OT(t)||/windows phone/i.test(t)||bT(t)}function yD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function VT(t,e=[]){let n;switch(t){case"Browser":n=$0(ut());break;case"Worker":n=`${$0(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lo}/${r}`}/**
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
 */class vD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _D(t,e={}){return Ai(t,"GET","/v2/passwordPolicy",Si(t,e))}/**
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
 */const wD=6;class ED{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class TD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U0(this),this.idTokenSubscription=new U0(this),this.beforeStateQueue=new vD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await CT(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Rr(this));const n=e?Et(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _D(this),n=new ED(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return Et(t)}class U0{constructor(e){this.auth=e,this.observer=null,this.addObserver=VP(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ID(t){yd=t}function jT(t){return yd.loadJS(t)}function SD(){return yd.recaptchaEnterpriseScript}function AD(){return yd.gapiScript}function RD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CD="recaptcha-enterprise",xD="NO_RECAPTCHA";class PD{constructor(e){this.type=CD,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sD(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;M0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(xD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&M0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=SD();l.length!==0&&(l+=a),jT(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function z0(t,e,n,r=!1){const i=new PD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await z0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await z0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function kD(t,e){const n=ys(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ns(s,e??{}))return i;Un(i,"already-initialized")}return n.initialize({options:e})}function DD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bD(t,e,n){const r=vs(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=FT(e),{host:o,port:a}=ND(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OD()}function FT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ND(t){const e=FT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:B0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:B0(o)}}}function B0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}async function LD(t,e){return Ai(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MD(t,e){return xl(t,"POST","/v1/accounts:signInWithPassword",Si(t,e))}/**
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
 */async function VD(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}async function jD(t,e){return xl(t,"POST","/v1/accounts:signInWithEmailLink",Si(t,e))}/**
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
 */class il extends Tg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xp(e,n,"signInWithPassword",MD);case"emailLink":return VD(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xp(e,r,"signUpPassword",LD);case"emailLink":return jD(e,{idToken:n,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(t,e){return xl(t,"POST","/v1/accounts:signInWithIdp",Si(t,e))}/**
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
 */const FD="http://localhost";class is extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new is(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ao(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:FD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
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
 */function $D(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UD(t){const e=ha(fa(t)).link,n=e?ha(fa(e)).deep_link_id:null,r=ha(fa(t)).deep_link_id;return(r?ha(fa(r)).link:null)||r||n||e||t}class Ig{constructor(e){var n,r,i,s,o,a;const l=ha(fa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=$D((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UD(e);try{return new Ig(n)}catch{return null}}}/**
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
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ig.parseLink(n);return te(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $T{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pl extends $T{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qr extends Pl{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class Jr extends Pl{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class Xr extends Pl{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */async function zD(t,e){return xl(t,"POST","/v1/accounts:signUp",Si(t,e))}/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Tr._fromIdTokenResponse(e,r,i),o=H0(r);return new ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=H0(r);return new ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function H0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cc extends qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cc(e,n,r,i)}}function UT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,s,e,r):s})}async function BD(t,e,n=!1){const r=await rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
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
 */async function HD(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await rl(t,UT(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=wg(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Un(r,"user-mismatch"),s}}/**
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
 */async function zT(t,e,n=!1){if(tr(t.app))return Promise.reject(Rr(t));const r="signIn",i=await UT(t,r,e),s=await ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qD(t,e){return zT(vs(t),e)}/**
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
 */async function BT(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WD(t,e,n){if(tr(t.app))return Promise.reject(Rr(t));const r=vs(t),o=await xp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&BT(t),l}),a=await ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KD(t,e,n){return tr(t.app)?Promise.reject(Rr(t)):qD(Et(t),Mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BT(t),r})}function GD(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function QD(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}const xc="__sak";/**
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
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xc,"1"),this.storage.removeItem(xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YD(){const t=ut();return Eg(t)||gd(t)}const JD=1e3,XD=10;class qT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YD()&&yD(),this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qT.type="LOCAL";const ZD=qT;/**
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
 */class WT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WT.type="SESSION";const KT=WT;/**
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
 */function eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await eb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vd.receivers=[];/**
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
 */function Sg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lr(){return window}function nb(t){lr().location.href=t}/**
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
 */function GT(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sb(){return GT()?self:null}/**
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
 */const QT="firebaseLocalStorageDb",ob=1,Pc="firebaseLocalStorage",YT="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _d(t,e){return t.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function ab(){const t=indexedDB.deleteDatabase(QT);return new kl(t).toPromise()}function Pp(){const t=indexedDB.open(QT,ob);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pc,{keyPath:YT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pc)?e(r):(r.close(),await ab(),e(await Pp()))})})}async function q0(t,e,n){const r=_d(t,!0).put({[YT]:e,value:n});return new kl(r).toPromise()}async function lb(t,e){const n=_d(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function W0(t,e){const n=_d(t,!0).delete(e);return new kl(n).toPromise()}const ub=800,cb=3;class JT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vd._getInstance(sb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await q0(e,xc,"1"),await W0(e,xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>q0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_d(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JT.type="LOCAL";const db=JT;new Cl(3e4,6e4);/**
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
 */function hb(t,e){return e?Ir(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ag extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fb(t){return zT(t.auth,new Ag(t),t.bypassAuthState)}function pb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),HD(n,new Ag(t),t.bypassAuthState)}async function mb(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),BD(n,new Ag(t),t.bypassAuthState)}/**
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
 */class XT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fb;case"linkViaPopup":case"linkViaRedirect":return mb;case"reauthViaPopup":case"reauthViaRedirect":return pb;default:Un(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gb=new Cl(2e3,1e4);class Gs extends XT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ar(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ar(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ar(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gb.get())};e()}}Gs.currentPopupAction=null;/**
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
 */const yb="pendingRedirect",qu=new Map;class vb extends XT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const r=await _b(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _b(t,e){const n=Tb(e),r=Eb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wb(t,e){qu.set(t._key(),e)}function Eb(t){return Ir(t._redirectPersistence)}function Tb(t){return Hu(yb,t.config.apiKey,t.name)}async function Ib(t,e,n=!1){if(tr(t.app))return Promise.reject(Rr(t));const r=vs(t),i=hb(r,e),o=await new vb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sb=10*60*1e3;class Ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ar(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(K0(e))}saveEventToCache(e){this.cachedEventUids.add(K0(e)),this.lastProcessedEventTime=Date.now()}}function K0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZT(t);default:return!1}}/**
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
 */async function Cb(t,e={}){return Ai(t,"GET","/v1/projects",e)}/**
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
 */const xb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pb=/^https?/;async function kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cb(t);for(const n of e)try{if(Db(n))return}catch{}Un(t,"unauthorized-domain")}function Db(t){const e=Rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pb.test(n))return!1;if(xb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bb=new Cl(3e4,6e4);function G0(){const t=lr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nb(t){return new Promise((e,n)=>{var r,i,s;function o(){G0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{G0(),n(ar(t,"network-request-failed"))},timeout:bb.get()})}if(!((i=(r=lr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lr().gapi)===null||s===void 0)&&s.load)o();else{const a=RD("iframefcb");return lr()[a]=()=>{gapi.load?o():n(ar(t,"network-request-failed"))},jT(`${AD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function Ob(t){return Wu=Wu||Nb(t),Wu}/**
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
 */const Lb=new Cl(5e3,15e3),Mb="__/auth/iframe",Vb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $b(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_g(e,Vb):`https://${t.config.authDomain}/${Mb}`,r={apiKey:e.apiKey,appName:t.name,v:Lo},i=Fb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rl(r).slice(1)}`}async function Ub(t){const e=await Ob(t),n=lr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:$b(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ar(t,"network-request-failed"),a=lr().setTimeout(()=>{s(o)},Lb.get());function l(){lr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const zb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bb=500,Hb=600,qb="_blank",Wb="http://localhost";class Q0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kb(t,e,n,r=Bb,i=Hb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=DT(u)?qb:n),kT(u)&&(e=e||Wb,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[y,g])=>`${h}${y}=${g},`,"");if(mD(u)&&a!=="_self")return Gb(e||"",a),new Q0(null);const d=window.open(e||"",a,c);te(d,t,"popup-blocked");try{d.focus()}catch{}return new Q0(d)}function Gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qb="__/auth/handler",Yb="emulator/auth/handler",Jb=encodeURIComponent("fac");async function Y0(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lo,eventId:i};if(e instanceof $T){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Pl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Jb}=${encodeURIComponent(l)}`:"";return`${Xb(t)}?${Rl(a).slice(1)}${u}`}function Xb({config:t}){return t.emulator?_g(t,Yb):`https://${t.authDomain}/${Qb}`}/**
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
 */const of="webStorageSupport";class Zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KT,this._completeRedirectFn=Ib,this._overrideRedirectResult=wb}async _openPopup(e,n,r,i){var s;br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Y0(e,n,r,Rp(),i);return Kb(e,o,Sg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Y0(e,n,r,Rp(),i);return nb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ub(e),r=new Ab(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[of];o!==void 0&&n(!!o),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||Eg()||gd()}}const e2=Zb;var J0="@firebase/auth",X0="1.7.1";/**
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
 */class t2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function n2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r2(t){hr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VT(t)},u=new TD(r,i,s,l);return DD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new $n("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new t2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(J0,X0,n2(t)),Rn(J0,X0,"esm2017")}/**
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
 */const i2=5*60,s2=pT("authIdTokenMaxAge")||i2;let Z0=null;const o2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s2)return;const i=n==null?void 0:n.token;Z0!==i&&(Z0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vo(t=gg()){const e=ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kD(t,{popupRedirectResolver:e2,persistence:[db,ZD,KT]}),r=pT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=o2(s.toString());QD(n,o,()=>o(n.currentUser)),GD(n,a=>o(a))}}const i=hT("auth");return i&&bD(n,`http://${i}`),n}function a2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ID({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ar("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r2("Browser");const eI="@firebase/installations",Rg="0.6.6";/**
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
 */const tI=1e4,nI=`w:${Rg}`,rI="FIS_v2",l2="https://firebaseinstallations.googleapis.com/v1",u2=60*60*1e3,c2="installations",d2="Installations";/**
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
 */const h2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new gs(c2,d2,h2);function iI(t){return t instanceof qn&&t.code.includes("request-failed")}/**
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
 */function sI({projectId:t}){return`${l2}/projects/${t}/installations`}function oI(t){return{token:t.token,requestStatus:2,expiresIn:p2(t.expiresIn),creationTime:Date.now()}}async function aI(t,e){const r=(await e.json()).error;return os.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function f2(t,{refreshToken:e}){const n=lI(t);return n.append("Authorization",m2(e)),n}async function uI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function p2(t){return Number(t.replace("s","000"))}function m2(t){return`${rI} ${t}`}/**
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
 */async function g2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=sI(t),i=lI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:rI,appId:t.appId,sdkVersion:nI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await uI(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:oI(u.authToken)}}else throw await aI("Create Installation",l)}/**
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
 */function cI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function y2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const v2=/^[cdef][\w-]{21}$/,kp="";function _2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=w2(t);return v2.test(n)?n:kp}catch{return kp}}function w2(t){return y2(t).substr(0,22)}/**
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
 */function wd(t){return`${t.appName}!${t.appId}`}/**
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
 */const dI=new Map;function hI(t,e){const n=wd(t);fI(n,e),E2(n,e)}function fI(t,e){const n=dI.get(t);if(n)for(const r of n)r(e)}function E2(t,e){const n=T2();n&&n.postMessage({key:t,fid:e}),I2()}let $i=null;function T2(){return!$i&&"BroadcastChannel"in self&&($i=new BroadcastChannel("[Firebase] FID Change"),$i.onmessage=t=>{fI(t.data.key,t.data.fid)}),$i}function I2(){dI.size===0&&$i&&($i.close(),$i=null)}/**
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
 */const S2="firebase-installations-database",A2=1,as="firebase-installations-store";let af=null;function Cg(){return af||(af=vT(S2,A2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}})),af}async function kc(t,e){const n=wd(t),i=(await Cg()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&hI(t,e.fid),e}async function pI(t){const e=wd(t),r=(await Cg()).transaction(as,"readwrite");await r.objectStore(as).delete(e),await r.done}async function Ed(t,e){const n=wd(t),i=(await Cg()).transaction(as,"readwrite"),s=i.objectStore(as),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&hI(t,a.fid),a}/**
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
 */async function xg(t){let e;const n=await Ed(t.appConfig,r=>{const i=R2(r),s=C2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===kp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function R2(t){const e=t||{fid:_2(),registrationStatus:0};return mI(e)}function C2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=x2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P2(t)}:{installationEntry:e}}async function x2(t,e){try{const n=await g2(t,e);return kc(t.appConfig,n)}catch(n){throw iI(n)&&n.customData.serverCode===409?await pI(t.appConfig):await kc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P2(t){let e=await e_(t.appConfig);for(;e.registrationStatus===1;)await cI(100),e=await e_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xg(t);return r||n}return e}function e_(t){return Ed(t,e=>{if(!e)throw os.create("installation-not-found");return mI(e)})}function mI(t){return k2(t)?{fid:t.fid,registrationStatus:0}:t}function k2(t){return t.registrationStatus===1&&t.registrationTime+tI<Date.now()}/**
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
 */async function D2({appConfig:t,heartbeatServiceProvider:e},n){const r=b2(t,n),i=f2(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:nI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await uI(()=>fetch(r,a));if(l.ok){const u=await l.json();return oI(u)}else throw await aI("Generate Auth Token",l)}function b2(t,{fid:e}){return`${sI(t)}/${e}/authTokens:generate`}/**
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
 */async function Pg(t,e=!1){let n;const r=await Ed(t.appConfig,s=>{if(!gI(s))throw os.create("not-registered");const o=s.authToken;if(!e&&L2(o))return s;if(o.requestStatus===1)return n=N2(t,e),s;{if(!navigator.onLine)throw os.create("app-offline");const a=V2(s);return n=O2(t,a),a}});return n?await n:r.authToken}async function N2(t,e){let n=await t_(t.appConfig);for(;n.authToken.requestStatus===1;)await cI(100),n=await t_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pg(t,e):r}function t_(t){return Ed(t,e=>{if(!gI(e))throw os.create("not-registered");const n=e.authToken;return j2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function O2(t,e){try{const n=await D2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await kc(t.appConfig,r),n}catch(n){if(iI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await kc(t.appConfig,r)}throw n}}function gI(t){return t!==void 0&&t.registrationStatus===2}function L2(t){return t.requestStatus===2&&!M2(t)}function M2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+u2}function V2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function j2(t){return t.requestStatus===1&&t.requestTime+tI<Date.now()}/**
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
 */async function F2(t){const e=t,{installationEntry:n,registrationPromise:r}=await xg(e);return r?r.catch(console.error):Pg(e).catch(console.error),n.fid}/**
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
 */async function $2(t,e=!1){const n=t;return await U2(n),(await Pg(n,e)).token}async function U2(t){const{registrationPromise:e}=await xg(t);e&&await e}/**
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
 */function z2(t){if(!t||!t.options)throw lf("App Configuration");if(!t.name)throw lf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw lf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function lf(t){return os.create("missing-app-config-values",{valueName:t})}/**
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
 */const yI="installations",B2="installations-internal",H2=t=>{const e=t.getProvider("app").getImmediate(),n=z2(e),r=ys(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q2=t=>{const e=t.getProvider("app").getImmediate(),n=ys(e,yI).getImmediate();return{getId:()=>F2(n),getToken:i=>$2(n,i)}};function W2(){hr(new $n(yI,H2,"PUBLIC")),hr(new $n(B2,q2,"PRIVATE"))}W2();Rn(eI,Rg);Rn(eI,Rg,"esm2017");/**
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
 */const Dc="analytics",K2="firebase_id",G2="origin",Q2=60*1e3,Y2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kg="https://www.googletagmanager.com/gtag/js";/**
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
 */const ln=new md("@firebase/analytics");/**
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
 */const J2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new gs("analytics","Analytics",J2);/**
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
 */function X2(t){if(!t.startsWith(kg)){const e=fn.create("invalid-gtag-resource",{gtagURL:t});return ln.warn(e.message),""}return t}function vI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Z2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function eN(t,e){const n=Z2("firebase-js-sdk-policy",{createScriptURL:X2}),r=document.createElement("script"),i=`${kg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await vI(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){ln.error(a)}t("config",i,s)}async function rN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await vI(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ln.error(s)}}function iN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await rN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await nN(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ln.error(a)}}return i}function sN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=iN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function oN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(kg)&&n.src.includes(t))return n;return null}/**
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
 */const aN=30,lN=1e3;class uN{constructor(e={},n=lN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _I=new uN;function cN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:cN(r)},s=Y2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function hN(t,e=_I,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw fn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw fn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mN;return setTimeout(async()=>{a.abort()},n!==void 0?n:Q2),wI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function wI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=_I){var s;const{appId:o,measurementId:a}=t;try{await fN(r,e)}catch(l){if(a)return ln.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await dN(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!pN(u)){if(i.deleteThrottleMetadata(o),a)return ln.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?R0(n,i.intervalMillis,aN):R0(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),ln.debug(`Calling attemptFetch again in ${c} millis`),wI(t,d,r,i)}}function fN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pN(t){if(!(t instanceof qn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function yN(){if(pd())try{await fg()}catch(t){return ln.warn(fn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ln.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vN(t,e,n,r,i,s,o){var a;const l=hN(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&ln.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>ln.error(y)),e.push(l);const u=yN().then(y=>{if(y)return r.getId()}),[c,d]=await Promise.all([l,u]);oN(s)||eN(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[G2]="firebase",h.update=!0,d!=null&&(h[K2]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class _N{constructor(e){this.app=e}_delete(){return delete Pa[this.app.options.appId],Promise.resolve()}}let Pa={},n_=[];const r_={};let uf="dataLayer",wN="gtag",i_,EI,s_=!1;function EN(){const t=[];if(hg()&&t.push("This is a browser extension environment."),mT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});ln.warn(n.message)}}function TN(t,e,n){EN();const r=t.options.appId;if(!r)throw fn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ln.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(Pa[r]!=null)throw fn.create("already-exists",{id:r});if(!s_){tN(uf);const{wrappedGtag:s,gtagCore:o}=sN(Pa,n_,r_,uf,wN);EI=s,i_=o,s_=!0}return Pa[r]=vN(t,n_,r_,e,i_,uf,n),new _N(t)}function TI(t=gg()){t=Et(t);const e=ys(t,Dc);return e.isInitialized()?e.getImmediate():IN(t)}function IN(t,e={}){const n=ys(t,Dc);if(n.isInitialized()){const i=n.getImmediate();if(ns(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}async function II(){if(hg()||!mT()||!pd())return!1;try{return await fg()}catch{return!1}}function SN(t,e,n,r){t=Et(t),gN(EI,Pa[t.app.options.appId],e,n,r).catch(i=>ln.error(i))}const o_="@firebase/analytics",a_="0.10.2";function AN(){hr(new $n(Dc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return TN(r,i,n)},"PUBLIC")),hr(new $n("analytics-internal",t,"PRIVATE")),Rn(o_,a_),Rn(o_,a_,"esm2017");function t(e){try{const n=e.getProvider(Dc).getImmediate();return{logEvent:(r,i,s)=>SN(n,r,i,s)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}AN();var RN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Dg=Dg||{},se=RN||self;function Td(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CN(t){return Object.prototype.hasOwnProperty.call(t,cf)&&t[cf]||(t[cf]=++xN)}var cf="closure_uid_"+(1e9*Math.random()>>>0),xN=0;function PN(t,e,n){return t.call.apply(t.bind,arguments)}function kN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=PN:Ut=kN,Ut.apply(null,arguments)}function wu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function It(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ri(){this.s=this.s,this.o=this.o}var DN=0;Ri.prototype.s=!1;Ri.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DN!=0)&&CN(this)};Ri.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const SI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function l_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Td(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function zt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}zt.prototype.h=function(){this.defaultPrevented=!0};var bN=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};se.addEventListener("test",n,e),se.removeEventListener("test",n,e)}catch{}return t}();function sl(t){return/^[\s\xa0]*$/.test(t)}function Id(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function er(t){return Id().indexOf(t)!=-1}function Ng(t){return Ng[" "](t),t}Ng[" "]=function(){};function NN(t,e){var n=AO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ON=er("Opera"),_o=er("Trident")||er("MSIE"),AI=er("Edge"),Dp=AI||_o,RI=er("Gecko")&&!(Id().toLowerCase().indexOf("webkit")!=-1&&!er("Edge"))&&!(er("Trident")||er("MSIE"))&&!er("Edge"),LN=Id().toLowerCase().indexOf("webkit")!=-1&&!er("Edge");function CI(){var t=se.document;return t?t.documentMode:void 0}var bp;e:{var df="",hf=function(){var t=Id();if(RI)return/rv:([^\);]+)(\)|;)/.exec(t);if(AI)return/Edge\/([\d\.]+)/.exec(t);if(_o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LN)return/WebKit\/(\S+)/.exec(t);if(ON)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hf&&(df=hf?hf[1]:""),_o){var ff=CI();if(ff!=null&&ff>parseFloat(df)){bp=String(ff);break e}}bp=df}var Np;if(se.document&&_o){var u_=CI();Np=u_||parseInt(bp,10)||void 0}else Np=void 0;var MN=Np;function ol(t,e){if(zt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(RI){e:{try{Ng(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ol.$.h.call(this)}}It(ol,zt);var VN={2:"touch",3:"pen",4:"mouse"};ol.prototype.h=function(){ol.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bl="closure_listenable_"+(1e6*Math.random()|0),jN=0;function FN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jN,this.fa=this.ia=!1}function Sd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Og(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function $N(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xI(t){const e={};for(const n in t)e[n]=t[n];return e}const c_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function PI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<c_.length;s++)n=c_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ad(t){this.src=t,this.g={},this.h=0}Ad.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Lp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new FN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Op(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=SI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Lg="closure_lm_"+(1e6*Math.random()|0),pf={};function kI(t,e,n,r,i){if(r&&r.once)return bI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)kI(t,e[s],n,r,i);return null}return n=jg(n),t&&t[bl]?t.O(e,n,Dl(r)?!!r.capture:!!r,i):DI(t,e,n,!1,r,i)}function DI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Dl(i)?!!i.capture:!!i,a=Vg(t);if(a||(t[Lg]=a=new Ad(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=UN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(OI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UN(){function t(n){return e.call(t.src,t.listener,n)}const e=zN;return t}function bI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bI(t,e[s],n,r,i);return null}return n=jg(n),t&&t[bl]?t.P(e,n,Dl(r)?!!r.capture:!!r,i):DI(t,e,n,!0,r,i)}function NI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)NI(t,e[s],n,r,i);else r=Dl(r)?!!r.capture:!!r,n=jg(n),t&&t[bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Lp(s,n,r,i),-1<n&&(Sd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lp(e,n,r,i)),(n=-1<t?e[t]:null)&&Mg(n))}function Mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[bl])Op(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(OI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vg(e))?(Op(n,t),n.h==0&&(n.src=null,e[Lg]=null)):Sd(t)}}}function OI(t){return t in pf?pf[t]:pf[t]="on"+t}function zN(t,e){if(t.fa)t=!0;else{e=new ol(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mg(t),t=n.call(r,e)}return t}function Vg(t){return t=t[Lg],t instanceof Ad?t:null}var mf="__closure_events_fn_"+(1e9*Math.random()>>>0);function jg(t){return typeof t=="function"?t:(t[mf]||(t[mf]=function(e){return t.handleEvent(e)}),t[mf])}function Tt(){Ri.call(this),this.i=new Ad(this),this.S=this,this.J=null}It(Tt,Ri);Tt.prototype[bl]=!0;Tt.prototype.removeEventListener=function(t,e,n,r){NI(this,t,e,n,r)};function Dt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new zt(e,t);else if(e instanceof zt)e.target=e.target||t;else{var i=e;e=new zt(r,t),PI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Eu(o,r,!0,e)&&i}if(o=e.g=t,i=Eu(o,r,!0,e)&&i,i=Eu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Eu(o,r,!1,e)&&i}Tt.prototype.N=function(){if(Tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sd(n[r]);delete t.g[e],t.h--}}this.J=null};Tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Tt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Op(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fg=se.JSON.stringify;class BN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HN(){var t=$g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qN{constructor(){this.h=this.g=null}add(e,n){const r=LI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var LI=new BN(()=>new WN,t=>t.reset());class WN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function KN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GN(t){se.setTimeout(()=>{throw t},0)}let al,ll=!1,$g=new qN,MI=()=>{const t=se.Promise.resolve(void 0);al=()=>{t.then(QN)}};var QN=()=>{for(var t;t=HN();){try{t.h.call(t.g)}catch(n){GN(n)}var e=LI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ll=!1};function Rd(t,e){Tt.call(this),this.h=t||1,this.g=e||se,this.j=Ut(this.qb,this),this.l=Date.now()}It(Rd,Tt);z=Rd.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Dt(this,"tick"),this.ga&&(Ug(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ug(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}z.N=function(){Rd.$.N.call(this),Ug(this),delete this.g};function zg(t,e,n){if(typeof t=="function")n&&(t=Ut(t,n));else if(t&&typeof t.handleEvent=="function")t=Ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function VI(t){t.g=zg(()=>{t.g=null,t.i&&(t.i=!1,VI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class YN extends Ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:VI(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ul(t){Ri.call(this),this.h=t,this.g={}}It(ul,Ri);var d_=[];function jI(t,e,n,r){Array.isArray(n)||(n&&(d_[0]=n.toString()),n=d_);for(var i=0;i<n.length;i++){var s=kI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function FI(t){Og(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mg(e)},t),t.g={}}ul.prototype.N=function(){ul.$.N.call(this),FI(this)};ul.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cd(){this.g=!0}Cd.prototype.Ea=function(){this.g=!1};function JN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+eO(t,n)+(r?" "+r:"")})}function ZN(t,e){t.info(function(){return"TIMEOUT: "+e})}Cd.prototype.info=function(){};function eO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fg(n)}catch{return e}}var _s={},h_=null;function xd(){return h_=h_||new Tt}_s.Ta="serverreachability";function $I(t){zt.call(this,_s.Ta,t)}It($I,zt);function cl(t){const e=xd();Dt(e,new $I(e))}_s.STAT_EVENT="statevent";function UI(t,e){zt.call(this,_s.STAT_EVENT,t),this.stat=e}It(UI,zt);function Kt(t){const e=xd();Dt(e,new UI(e,t))}_s.Ua="timingevent";function zI(t,e){zt.call(this,_s.Ua,t),this.size=e}It(zI,zt);function Nl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Pd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bg(){}Bg.prototype.h=null;function f_(t){return t.h||(t.h=t.i())}function HI(){}var Ol={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hg(){zt.call(this,"d")}It(Hg,zt);function qg(){zt.call(this,"c")}It(qg,zt);var Mp;function kd(){}It(kd,Bg);kd.prototype.g=function(){return new XMLHttpRequest};kd.prototype.i=function(){return{}};Mp=new kd;function Ll(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ul(this),this.P=tO,t=Dp?125:void 0,this.V=new Rd(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new qI}function qI(){this.i=null,this.g="",this.h=!1}var tO=45e3,WI={},Vp={};z=Ll.prototype;z.setTimeout=function(t){this.P=t};function jp(t,e,n){t.L=1,t.A=bd(Nr(e)),t.u=n,t.S=!0,KI(t,null)}function KI(t,e){t.G=Date.now(),Ml(t),t.B=Nr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),tS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new qI,t.g=TS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new YN(Ut(t.Pa,t,t.g),t.O)),jI(t.U,t.g,"readystatechange",t.nb),e=t.I?xI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),cl(),JN(t.j,t.v,t.B,t.m,t.W,t.u)}z.nb=function(t){t=t.target;const e=this.M;e&&nr(t)==3?e.l():this.Pa(t)};z.Pa=function(t){try{if(t==this.g)e:{const c=nr(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Dp||this.g&&(this.h.h||this.g.ja()||y_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?cl(3):cl(2)),Dd(this);var n=this.g.da();this.ca=n;t:if(GI(this)){var r=y_(this.g);t="";var i=r.length,s=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ui(this),ka(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,XN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sl(a)){var u=a;break t}}u=null}if(n=u)Qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fp(this,n);else{this.i=!1,this.s=3,Kt(12),Ui(this),ka(this);break e}}this.S?(QI(this,c,o),Dp&&this.i&&c==3&&(jI(this.U,this.V,"tick",this.mb),this.V.start())):(Qs(this.j,this.m,o,null),Fp(this,o)),c==4&&Ui(this),this.i&&!this.J&&(c==4?vS(this.l,this):(this.i=!1,Ml(this)))}else TO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),Ui(this),ka(this)}}}catch{}finally{}};function GI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function QI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=nO(t,n),i==Vp){e==4&&(t.s=4,Kt(14),r=!1),Qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==WI){t.s=4,Kt(15),Qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Qs(t.j,t.m,i,null),Fp(t,i);GI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jg(e),e.M=!0,Kt(11))):(Qs(t.j,t.m,n,"[Invalid Chunked Response]"),Ui(t),ka(t))}z.mb=function(){if(this.g){var t=nr(this.g),e=this.g.ja();this.o<e.length&&(Dd(this),QI(this,t,e),this.i&&t!=4&&Ml(this))}};function nO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Vp:(n=Number(e.substring(n,r)),isNaN(n)?WI:(r+=1,r+n>e.length?Vp:(e=e.slice(r,r+n),t.o=r+n,e)))}z.cancel=function(){this.J=!0,Ui(this)};function Ml(t){t.Y=Date.now()+t.P,YI(t,t.P)}function YI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Nl(Ut(t.lb,t),e)}function Dd(t){t.C&&(se.clearTimeout(t.C),t.C=null)}z.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ZN(this.j,this.B),this.L!=2&&(cl(),Kt(17)),Ui(this),this.s=2,ka(this)):YI(this,this.Y-t)};function ka(t){t.l.H==0||t.J||vS(t.l,t)}function Ui(t){Dd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ug(t.V),FI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$p(n.i,t))){if(!t.K&&$p(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Oc(n),Md(n);else break e;Yg(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Nl(Ut(n.ib,n),6e3));if(1>=iS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zi(n,11)}else if((t.K||n.g==t)&&Oc(n),!sl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const g=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wg(s,s.h),s.h=null))}if(r.F){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Fe(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ES(r,r.J?r.pa:null,r.Y),o.K){sS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Dd(a),Ml(a)),r.g=o}else gS(r);0<n.j.length&&Vd(n)}else u[0]!="stop"&&u[0]!="close"||zi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zi(n,7):Qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}cl(4)}catch{}}function rO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Td(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function iO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Td(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function JI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Td(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iO(t),r=rO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var XI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qi){this.h=t.h,bc(this,t.j),this.s=t.s,this.g=t.g,Nc(this,t.m),this.l=t.l;var e=t.i,n=new dl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),p_(this,n),this.o=t.o}else t&&(e=String(t).match(XI))?(this.h=!1,bc(this,e[1]||"",!0),this.s=pa(e[2]||""),this.g=pa(e[3]||"",!0),Nc(this,e[4]),this.l=pa(e[5]||"",!0),p_(this,e[6]||"",!0),this.o=pa(e[7]||"")):(this.h=!1,this.i=new dl(null,this.h))}Qi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ma(e,m_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ma(e,m_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ma(n,n.charAt(0)=="/"?lO:aO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ma(n,cO)),t.join("")};function Nr(t){return new Qi(t)}function bc(t,e,n){t.j=n?pa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function p_(t,e,n){e instanceof dl?(t.i=e,dO(t.i,t.h)):(n||(e=ma(e,uO)),t.i=new dl(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function bd(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ma(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,oO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function oO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var m_=/[#\/\?@]/g,aO=/[#\?:]/g,lO=/[#\?]/g,uO=/[#\?@]/g,cO=/#/g;function dl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ci(t){t.g||(t.g=new Map,t.h=0,t.i&&sO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=dl.prototype;z.add=function(t,e){Ci(this),this.i=null,t=jo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ZI(t,e){Ci(t),e=jo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eS(t,e){return Ci(t),e=jo(t,e),t.g.has(e)}z.forEach=function(t,e){Ci(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.ta=function(){Ci(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.Z=function(t){Ci(this);let e=[];if(typeof t=="string")eS(this,t)&&(e=e.concat(this.g.get(jo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return Ci(this),this.i=null,t=jo(this,t),eS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function tS(t,e,n){ZI(t,e),0<n.length&&(t.i=null,t.g.set(jo(t,e),bg(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function jo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dO(t,e){e&&!t.j&&(Ci(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ZI(this,r),tS(this,i,n))},t)),t.j=e}var hO=class{constructor(t,e){this.g=t,this.map=e}};function nS(t){this.l=t||fO,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fO=10;function rS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iS(t){return t.h?1:t.g?t.g.size:0}function $p(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wg(t,e){t.g?t.g.add(e):t.h=e}function sS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nS.prototype.cancel=function(){if(this.i=oS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bg(t.i)}var pO=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function mO(){this.g=new pO}function gO(t,e,n){const r=n||"";try{JI(t,function(i,s){let o=i;Dl(i)&&(o=Fg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yO(t,e){const n=new Cd;if(se.Image){const r=new Image;r.onload=wu(Tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wu(Tu,n,r,"TestLoadImage: error",!1,e),r.onabort=wu(Tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wu(Tu,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Tu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Nd(t){this.l=t.ec||null,this.j=t.ob||!1}It(Nd,Bg);Nd.prototype.g=function(){return new Od(this.l,this.j)};Nd.prototype.i=function(t){return function(){return t}}({});function Od(t,e){Tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Kg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It(Od,Tt);var Kg=0;z=Od.prototype;z.open=function(t,e){if(this.readyState!=Kg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hl(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vl(this)),this.readyState=Kg};z.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hl(this)),this.g&&(this.readyState=3,hl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function aS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}z.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vl(this):hl(this),this.readyState==3&&aS(this)}};z.Za=function(t){this.g&&(this.response=this.responseText=t,Vl(this))};z.Ya=function(t){this.g&&(this.response=t,Vl(this))};z.ka=function(){this.g&&Vl(this)};function Vl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hl(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Od.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vO=se.JSON.parse;function et(t){Tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lS,this.L=this.M=!1}It(et,Tt);var lS="",_O=/^https?$/i,wO=["POST","PUT"];z=et.prototype;z.Oa=function(t){this.M=t};z.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mp.g(),this.C=this.u?f_(this.u):f_(Mp),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){g_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=SI(wO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{dS(this),0<this.B&&((this.L=EO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=zg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){g_(this,s)}};function EO(t){return _o&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.ua=function(){typeof Dg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dt(this,"timeout"),this.abort(8))};function g_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uS(t),Ld(t)}function uS(t){t.F||(t.F=!0,Dt(t,"complete"),Dt(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Dt(this,"complete"),Dt(this,"abort"),Ld(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ld(this,!0)),et.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?cS(this):this.kb())};z.kb=function(){cS(this)};function cS(t){if(t.h&&typeof Dg<"u"&&(!t.C[1]||nr(t)!=4||t.da()!=2)){if(t.v&&nr(t)==4)zg(t.La,0,t);else if(Dt(t,"readystatechange"),nr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(XI)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!_O.test(i?i.toLowerCase():"")}n=r}if(n)Dt(t,"complete"),Dt(t,"success");else{t.m=6;try{var s=2<nr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",uS(t)}}finally{Ld(t)}}}}function Ld(t,e){if(t.g){dS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Dt(t,"ready");try{n.onreadystatechange=r}catch{}}}function dS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}z.isActive=function(){return!!this.g};function nr(t){return t.g?t.g.readyState:0}z.da=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vO(e)}};function y_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case lS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function TO(t){const e={};t=(t.g&&2<=nr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(sl(t[r]))continue;var n=KN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}$N(e,function(r){return r.join(", ")})}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function hS(t){let e="";return Og(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Gg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function ea(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fS(t){this.Ga=0,this.j=[],this.l=new Cd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ea("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ea("baseRetryDelayMs",5e3,t),this.hb=ea("retryDelaySeedMs",1e4,t),this.eb=ea("forwardChannelMaxRetries",2,t),this.xa=ea("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nS(t&&t.concurrentRequestLimit),this.Ja=new mO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}z=fS.prototype;z.ra=8;z.H=1;function Qg(t){if(pS(t),t.H==3){var e=t.W++,n=Nr(t.I);if(Fe(n,"SID",t.K),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),jl(t,n),e=new Ll(t,t.l,e),e.L=2,e.A=bd(Nr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.A,n=!0),n||(e.g=TS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ml(e)}wS(t)}function Md(t){t.g&&(Jg(t),t.g.cancel(),t.g=null)}function pS(t){Md(t),t.u&&(se.clearTimeout(t.u),t.u=null),Oc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Vd(t){if(!rS(t.i)&&!t.m){t.m=!0;var e=t.Na;al||MI(),ll||(al(),ll=!0),$g.add(e,t),t.C=0}}function IO(t,e){return iS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Nl(Ut(t.Na,t,e),_S(t,t.C)),t.C++,!0)}z.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ll(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xI(s),PI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mS(this,i,e),n=Nr(this.I),Fe(n,"RID",t),Fe(n,"CVER",22),this.F&&Fe(n,"X-HTTP-Session-Id",this.F),jl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(hS(s)))+"&"+e:this.o&&Gg(n,this.o,s)),Wg(this.i,i),this.bb&&Fe(n,"TYPE","init"),this.P?(Fe(n,"$req",e),Fe(n,"SID","null"),i.aa=!0,jp(i,n,null)):jp(i,n,e),this.H=2}}else this.H==3&&(t?v_(this,t):this.j.length==0||rS(this.i)||v_(this))};function v_(t,e){var n;e?n=e.m:n=t.W++;const r=Nr(t.I);Fe(r,"SID",t.K),Fe(r,"RID",n),Fe(r,"AID",t.V),jl(t,r),t.o&&t.s&&Gg(r,t.o,t.s),n=new Ll(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=mS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wg(t.i,n),jp(n,r,e)}function jl(t,e){t.na&&Og(t.na,function(n,r){Fe(e,r,n)}),t.h&&JI({},function(n,r){Fe(e,r,n)})}function mS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ut(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{gO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function gS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;al||MI(),ll||(al(),ll=!0),$g.add(e,t),t.A=0}}function Yg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Nl(Ut(t.Ma,t),_S(t,t.A)),t.A++,!0)}z.Ma=function(){if(this.u=null,yS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Nl(Ut(this.jb,this),t)}};z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),Md(this),yS(this))};function Jg(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function yS(t){t.g=new Ll(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nr(t.wa);Fe(e,"RID","rpc"),Fe(e,"SID",t.K),Fe(e,"AID",t.V),Fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Fe(e,"TO",t.qa),Fe(e,"TYPE","xmlhttp"),jl(t,e),t.o&&t.s&&Gg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=bd(Nr(e)),n.u=null,n.S=!0,KI(n,t)}z.ib=function(){this.v!=null&&(this.v=null,Md(this),Yg(this),Kt(19))};function Oc(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function vS(t,e){var n=null;if(t.g==e){Oc(t),Jg(t),t.g=null;var r=2}else if($p(t.i,e))n=e.F,sS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=xd(),Dt(r,new zI(r,n)),Vd(t)}else gS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&IO(t,e)||r==2&&Yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zi(t,5);break;case 4:zi(t,10);break;case 3:zi(t,6);break;default:zi(t,2)}}}function _S(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ut(t.pb,t);n||(n=new Qi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||bc(n,"https"),bd(n)),yO(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),wS(t),pS(t)}z.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function wS(t){if(t.H=0,t.ma=[],t.h){const e=oS(t.i);(e.length!=0||t.j.length!=0)&&(l_(t.ma,e),l_(t.ma,t.j),t.i.i.length=0,bg(t.j),t.j.length=0),t.h.ya()}}function ES(t,e,n){var r=n instanceof Qi?Nr(n):new Qi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Nc(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qi(null);r&&bc(s,r),e&&(s.g=e),i&&Nc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Fe(r,n,e),Fe(r,"VER",t.ra),jl(t,r),r}function TS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new et(new Nd({ob:n})):new et(t.va),e.Oa(t.J),e}z.isActive=function(){return!!this.h&&this.h.isActive(this)};function IS(){}z=IS.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.isActive=function(){return!0};z.Va=function(){};function Lc(){if(_o&&!(10<=Number(MN)))throw Error("Environmental error: no available transport.")}Lc.prototype.g=function(t,e){return new mn(t,e)};function mn(t,e){Tt.call(this),this.g=new fS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!sl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fo(this)}It(mn,Tt);mn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ES(t,null,t.Y),Vd(t)};mn.prototype.close=function(){Qg(this.g)};mn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fg(t),t=n);e.j.push(new hO(e.fb++,t)),e.H==3&&Vd(e)};mn.prototype.N=function(){this.g.h=null,delete this.j,Qg(this.g),delete this.g,mn.$.N.call(this)};function SS(t){Hg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(SS,Hg);function AS(){qg.call(this),this.status=1}It(AS,qg);function Fo(t){this.g=t}It(Fo,IS);Fo.prototype.Ba=function(){Dt(this.g,"a")};Fo.prototype.Aa=function(t){Dt(this.g,new SS(t))};Fo.prototype.za=function(t){Dt(this.g,new AS)};Fo.prototype.ya=function(){Dt(this.g,"b")};function SO(){this.blockSize=-1}function zn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}It(zn,SO);zn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}zn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)gf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){gf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){gf(this,r),i=0;break}}this.h=i,this.i+=e};zn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Pe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var AO={};function Xg(t){return-128<=t&&128>t?NN(t,function(e){return new Pe([e|0],0>e?-1:0)}):new Pe([t|0],0>t?-1:0)}function rr(t){if(isNaN(t)||!isFinite(t))return lo;if(0>t)return xt(rr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Up;return new Pe(e,0)}function RS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xt(RS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rr(Math.pow(e,8)),r=lo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=rr(Math.pow(e,s)),r=r.R(s).add(rr(o))):(r=r.R(n),r=r.add(rr(o)))}return r}var Up=4294967296,lo=Xg(0),zp=Xg(1),__=Xg(16777216);z=Pe.prototype;z.ea=function(){if(In(this))return-xt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Up+r)*e,e*=Up}return t};z.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Sr(this))return"0";if(In(this))return"-"+xt(this).toString(t);for(var e=rr(Math.pow(t,6)),n=this,r="";;){var i=Vc(n,e).g;n=Mc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};z.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Sr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function In(t){return t.h==-1}z.X=function(t){return t=Mc(this,t),In(t)?-1:Sr(t)?0:1};function xt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Pe(n,~t.h).add(zp)}z.abs=function(){return In(this)?xt(this):this};z.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Pe(n,n[n.length-1]&-2147483648?-1:0)};function Mc(t,e){return t.add(xt(e))}z.R=function(t){if(Sr(this)||Sr(t))return lo;if(In(this))return In(t)?xt(this).R(xt(t)):xt(xt(this).R(t));if(In(t))return xt(this.R(xt(t)));if(0>this.X(__)&&0>t.X(__))return rr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Iu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Iu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Iu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Iu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Pe(n,0)};function Iu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ta(t,e){this.g=t,this.h=e}function Vc(t,e){if(Sr(e))throw Error("division by zero");if(Sr(t))return new ta(lo,lo);if(In(t))return e=Vc(xt(t),e),new ta(xt(e.g),xt(e.h));if(In(e))return e=Vc(t,xt(e)),new ta(xt(e.g),e.h);if(30<t.g.length){if(In(t)||In(e))throw Error("slowDivide_ only works with positive integers.");for(var n=zp,r=e;0>=r.X(t);)n=w_(n),r=w_(r);var i=bs(n,1),s=bs(r,1);for(r=bs(r,2),n=bs(n,2);!Sr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=bs(r,1),n=bs(n,1)}return e=Mc(t,i.R(e)),new ta(i,e)}for(i=lo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=rr(n),o=s.R(e);In(o)||0<o.X(t);)n-=r,s=rr(n),o=s.R(e);Sr(s)&&(s=zp),i=i.add(s),t=Mc(t,o)}return new ta(i,t)}z.gb=function(t){return Vc(this,t).h};z.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Pe(n,this.h&t.h)};z.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Pe(n,this.h|t.h)};z.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Pe(n,this.h^t.h)};function w_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Pe(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Pe(i,t.h)}Lc.prototype.createWebChannel=Lc.prototype.g;mn.prototype.send=mn.prototype.u;mn.prototype.open=mn.prototype.m;mn.prototype.close=mn.prototype.close;Pd.NO_ERROR=0;Pd.TIMEOUT=8;Pd.HTTP_ERROR=6;BI.COMPLETE="complete";HI.EventType=Ol;Ol.OPEN="a";Ol.CLOSE="b";Ol.ERROR="c";Ol.MESSAGE="d";Tt.prototype.listen=Tt.prototype.O;et.prototype.listenOnce=et.prototype.P;et.prototype.getLastError=et.prototype.Sa;et.prototype.getLastErrorCode=et.prototype.Ia;et.prototype.getStatus=et.prototype.da;et.prototype.getResponseJson=et.prototype.Wa;et.prototype.getResponseText=et.prototype.ja;et.prototype.send=et.prototype.ha;et.prototype.setWithCredentials=et.prototype.Oa;zn.prototype.digest=zn.prototype.l;zn.prototype.reset=zn.prototype.reset;zn.prototype.update=zn.prototype.j;Pe.prototype.add=Pe.prototype.add;Pe.prototype.multiply=Pe.prototype.R;Pe.prototype.modulo=Pe.prototype.gb;Pe.prototype.compare=Pe.prototype.X;Pe.prototype.toNumber=Pe.prototype.ea;Pe.prototype.toString=Pe.prototype.toString;Pe.prototype.getBits=Pe.prototype.D;Pe.fromNumber=rr;Pe.fromString=RS;var RO=function(){return new Lc},CO=function(){return xd()},yf=Pd,xO=BI,PO=_s,E_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Su=HI,kO=et,DO=zn,uo=Pe;const T_="@firebase/firestore";/**
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
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
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
 */let $o="10.11.0";/**
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
 */const ls=new md("@firebase/firestore");function na(){return ls.logLevel}function U(t,...e){if(ls.logLevel<=we.DEBUG){const n=e.map(Zg);ls.debug(`Firestore (${$o}): ${t}`,...n)}}function fr(t,...e){if(ls.logLevel<=we.ERROR){const n=e.map(Zg);ls.error(`Firestore (${$o}): ${t}`,...n)}}function wo(t,...e){if(ls.logLevel<=we.WARN){const n=e.map(Zg);ls.warn(`Firestore (${$o}): ${t}`,...n)}}function Zg(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${$o}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Ve(t,e){t||ie()}function le(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class CS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(jt.UNAUTHENTICATED))}shutdown(){}}class NO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OO{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new CS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new jt(e)}}class LO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new VO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function FO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=FO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class fl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends fl{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const $O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends fl{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return $O.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G($e.fromString(e))}static fromName(e){return new G($e.fromString(e).popFirst(5))}static empty(){return new G($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new $e(e.slice()))}}function UO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new pt(n+1,0):new pt(n,r));return new yi(i,G.empty(),e)}function zO(t){return new yi(t.readTime,t.key,-1)}class yi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yi(oe.min(),G.empty(),-1)}static max(){return new yi(oe.max(),G.empty(),-1)}}function BO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const HO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fl(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==HO)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ey{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ur,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Da(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ty(r.target.error);this.V.reject(new Da(e,i))}}static open(e,n,r,i){try{return new ey(n,e.transaction(i,r))}catch(s){throw new Da(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new KO(n)}}class Bi{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Bi.S(ut())===12.2&&fr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Mi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!pd())return!1;if(Bi.C())return!0;const e=ut(),n=Bi.S(e),r=0<n&&n<10,i=Bi.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Da(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new H(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new H(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Da(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=ey.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class WO{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Mi(this.k.delete())}}class Da extends H{constructor(e,n){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function $l(t){return t.name==="IndexedDbTransactionError"}class KO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Mi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Mi(this.store.add(e))}get(e){return Mi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Mi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Mi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=ty(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new WO(a),u=n(a.primaryKey,a.value,l);if(u instanceof D){const c=u.catch(d=>(l.done(),D.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Mi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ty(r.target.error);n(i)}})}let I_=!1;function ty(t){const e=Bi.S(ut());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new H("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return I_||(I_=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class ny{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ny._e=-1;function jd(t){return t==null}function jc(t){return t===0&&1/t==-1/0}function GO(t){return typeof t=="number"&&Number.isInteger(t)&&!jc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function S_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Ct.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ct.RED,this.left=i??Ct.EMPTY,this.right=s??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new A_(this.data.getIterator())}getIteratorFrom(e){return new A_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bt(this.comparator);return n.data=e,n}}class A_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new bt(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kS("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const QO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=QO.exec(t);if(Ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
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
 */function ry(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iy(t){const e=t.mapValue.fields.__previous_value__;return ry(e)?iy(e):e}function pl(t){const e=vi(t.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class YO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ml{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ml("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ml&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ru={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ry(t)?4:JO(t)?9007199254740991:10:ie()}function pr(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pl(t).isEqual(pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),a=vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return us(i.bytesValue).isEqual(us(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ot(i.geoPointValue.latitude)===ot(s.geoPointValue.latitude)&&ot(i.geoPointValue.longitude)===ot(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ot(i.integerValue)===ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ot(i.doubleValue),a=ot(s.doubleValue);return o===a?jc(o)===jc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(S_(o)!==S_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pr(o[l],a[l])))return!1;return!0}(t,e);default:return ie()}}function gl(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function To(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ot(s.integerValue||s.doubleValue),l=ot(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return R_(t.timestampValue,e.timestampValue);case 4:return R_(pl(t),pl(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=us(s),l=us(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Ce(a[u],l[u]);if(c!==0)return c}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ce(ot(s.latitude),ot(o.latitude));return a!==0?a:Ce(ot(s.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=To(a[u],l[u]);if(c)return c}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ru.mapValue&&o===Ru.mapValue)return 0;if(s===Ru.mapValue)return 1;if(o===Ru.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=Ce(l[d],c[d]);if(h!==0)return h;const y=To(a[l[d]],u[c[d]]);if(y!==0)return y}return Ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ie()}}function R_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=vi(t),r=vi(e),i=Ce(n.seconds,r.seconds);return i!==0?i:Ce(n.nanos,r.nanos)}function Io(t){return Bp(t)}function Bp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bp(n.fields[o])}`;return i+"}"}(t.mapValue):ie()}function C_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hp(t){return!!t&&"integerValue"in t}function sy(t){return!!t&&"arrayValue"in t}function x_(t){return!!t&&"nullValue"in t}function P_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ku(t){return!!t&&"mapValue"in t}function ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(n)}setAll(e){let n=Pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ku(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nn(ba(this.value))}}function DS(t){const e=[];return ws(t.fields,(n,r)=>{const i=new Pt([n]);if(Ku(r)){const s=DS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
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
 */class $t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,oe.min(),oe.min(),oe.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new $t(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new $t(e,2,n,oe.min(),oe.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,oe.min(),oe.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fc{constructor(e,n){this.position=e,this.inclusive=n}}function k_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function D_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $c{constructor(e,n="asc"){this.field=e,this.dir=n}}function XO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bS{}class lt extends bS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eL(e,n,r):n==="array-contains"?new rL(e,r):n==="in"?new iL(e,r):n==="not-in"?new sL(e,r):n==="array-contains-any"?new oL(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tL(e,r):new nL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(To(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends bS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Bn(e,n)}matches(e){return NS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function NS(t){return t.op==="and"}function OS(t){return ZO(t)&&NS(t)}function ZO(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function qp(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(OS(t))return t.filters.map(e=>qp(e)).join(",");{const e=t.filters.map(n=>qp(n)).join(",");return`${t.op}(${e})`}}function LS(t,e){return t instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&pr(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&LS(o,i.filters[a]),!0):!1}(t,e):void ie()}function MS(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${Io(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(MS).join(" ,")+"}"}(t):"Filter"}class eL extends lt{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class tL extends lt{constructor(e,n){super(e,"in",n),this.keys=VS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nL extends lt{constructor(e,n){super(e,"not-in",n),this.keys=VS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class rL extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sy(n)&&gl(n.arrayValue,this.value)}}class iL extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gl(this.value.arrayValue,n)}}class sL extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gl(this.value.arrayValue,n)}}class oL extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gl(this.value.arrayValue,r))}}/**
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
 */class aL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function b_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aL(t,e,n,r,i,s,o)}function oy(t){const e=le(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.ce=n}return e.ce}function ay(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!D_(t.startAt,e.startAt)&&D_(t.endAt,e.endAt)}function Wp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ul{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lL(t,e,n,r,i,s,o,a){return new Ul(t,e,n,r,i,s,o,a)}function ly(t){return new Ul(t)}function N_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jS(t){return t.collectionGroup!==null}function Na(t){const e=le(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new bt(Pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new $c(s,r))}),n.has(Pt.keyField().canonicalString())||e.le.push(new $c(Pt.keyField(),r))}return e.le}function cr(t){const e=le(t);return e.he||(e.he=uL(e,Na(t))),e.he}function uL(t,e){if(t.limitType==="F")return b_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $c(i.field,s)});const n=t.endAt?new Fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fc(t.startAt.position,t.startAt.inclusive):null;return b_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kp(t,e){const n=t.filters.concat([e]);return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gp(t,e,n){return new Ul(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fd(t,e){return ay(cr(t),cr(e))&&t.limitType===e.limitType}function FS(t){return`${oy(cr(t))}|lt:${t.limitType}`}function Ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MS(i)).join(", ")}]`),jd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Io(i)).join(",")),`Target(${r})`}(cr(t))}; limitType=${t.limitType})`}function $d(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Na(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=k_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Na(r),i)||r.endAt&&!function(o,a,l){const u=k_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Na(r),i))}(t,e)}function cL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $S(t){return(e,n)=>{let r=!1;for(const i of Na(t)){const s=dL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dL(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?To(l,u):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class Uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return PS(this.inner)}size(){return this.innerSize}}/**
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
 */const hL=new Qe(G.comparator);function Or(){return hL}const US=new Qe(G.comparator);function ga(...t){let e=US;for(const n of t)e=e.insert(n.key,n);return e}function zS(t){let e=US;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hi(){return Oa()}function BS(){return Oa()}function Oa(){return new Uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const fL=new Qe(G.comparator),pL=new bt(G.comparator);function ye(...t){let e=pL;for(const n of t)e=e.add(n);return e}const mL=new bt(Ce);function gL(){return mL}/**
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
 */function HS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jc(e)?"-0":e}}function qS(t){return{integerValue:""+t}}function yL(t,e){return GO(e)?qS(e):HS(t,e)}/**
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
 */class Ud{constructor(){this._=void 0}}function vL(t,e,n){return t instanceof Uc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ry(s)&&(s=iy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof So?KS(t,e):t instanceof Ao?GS(t,e):function(i,s){const o=WS(i,s),a=O_(o)+O_(i.Ie);return Hp(o)&&Hp(i.Ie)?qS(a):HS(i.serializer,a)}(t,e)}function _L(t,e,n){return t instanceof So?KS(t,e):t instanceof Ao?GS(t,e):n}function WS(t,e){return t instanceof zc?function(r){return Hp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Uc extends Ud{}class So extends Ud{constructor(e){super(),this.elements=e}}function KS(t,e){const n=QS(e);for(const r of t.elements)n.some(i=>pr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ao extends Ud{constructor(e){super(),this.elements=e}}function GS(t,e){let n=QS(e);for(const r of t.elements)n=n.filter(i=>!pr(i,r));return{arrayValue:{values:n}}}class zc extends Ud{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function O_(t){return ot(t.integerValue||t.doubleValue)}function QS(t){return sy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class YS{constructor(e,n){this.field=e,this.transform=n}}function wL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof So&&i instanceof So||r instanceof Ao&&i instanceof Ao?Eo(r.elements,i.elements,pr):r instanceof zc&&i instanceof zc?pr(r.Ie,i.Ie):r instanceof Uc&&i instanceof Uc}(t.transform,e.transform)}class EL{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zd{}function JS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uy(t.key,Cn.none()):new zl(t.key,t.data,Cn.none());{const n=t.data,r=nn.empty();let i=new bt(Pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new dn(i.toArray()),Cn.none())}}function TL(t,e,n){t instanceof zl?function(i,s,o){const a=i.value.clone(),l=M_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!Gu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=M_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(XS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function La(t,e,n,r){return t instanceof zl?function(s,o,a,l){if(!Gu(s.precondition,o))return a;const u=s.value.clone(),c=V_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,a,l){if(!Gu(s.precondition,o))return a;const u=V_(s.fieldTransforms,l,o),c=o.data;return c.setAll(XS(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Gu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=WS(r.transform,i||null);s!=null&&(n===null&&(n=nn.empty()),n.set(r.field,s))}return n||null}function L_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>wL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zl extends zd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends zd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function M_(t,e,n){const r=new Map;Ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_L(o,a,n[i]))}return r}function V_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vL(s,o,e))}return r}class uy extends zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SL extends zd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=JS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>L_(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>L_(n,r))}}class cy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ve(e.mutations.length===r.length);let i=function(){return fL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cy(e,n,r,i)}}/**
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
 */class RL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ee;function xL(t){switch(t){default:return ie();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function ZS(t){if(t===void 0)return fr("GRPC error has no .code"),k.UNKNOWN;switch(t){case st.OK:return k.OK;case st.CANCELLED:return k.CANCELLED;case st.UNKNOWN:return k.UNKNOWN;case st.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case st.INTERNAL:return k.INTERNAL;case st.UNAVAILABLE:return k.UNAVAILABLE;case st.UNAUTHENTICATED:return k.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case st.NOT_FOUND:return k.NOT_FOUND;case st.ALREADY_EXISTS:return k.ALREADY_EXISTS;case st.PERMISSION_DENIED:return k.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case st.ABORTED:return k.ABORTED;case st.OUT_OF_RANGE:return k.OUT_OF_RANGE;case st.UNIMPLEMENTED:return k.UNIMPLEMENTED;case st.DATA_LOSS:return k.DATA_LOSS;default:return ie()}}(Ee=st||(st={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PL(){return new TextEncoder}/**
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
 */const kL=new uo([4294967295,4294967295],0);function j_(t){const e=PL().encode(t),n=new DO;return n.update(e),new Uint8Array(n.digest())}function F_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new uo([n,r],0),new uo([i,s],0)]}class dy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=uo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(uo.fromNumber(r)));return i.compare(kL)===1&&(i=new uo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=j_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new dy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=j_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bd(oe.min(),i,new Qe(Ce),Or(),ye())}}class Bl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bl(r,n,ye(),ye(),ye())}}/**
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
 */class Qu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class eA{constructor(e,n){this.targetId=e,this.fe=n}}class tA{constructor(e,n,r=Ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $_{constructor(){this.ge=0,this.pe=z_(),this.ye=Ht.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ye(),n=ye(),r=ye();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie()}}),new Bl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=z_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ve(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class DL{constructor(e){this.Be=e,this.ke=new Map,this.qe=Or(),this.Qe=U_(),this.Ke=new Qe(Ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Wp(s))if(r===0){const o=new G(s.path);this.We(n,o,$t.newNoDocument(o,oe.min()))}else Ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=us(r).toUint8Array()}catch(l){if(l instanceof kS)return wo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new dy(o,i,s)}catch(l){return wo(l instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wp(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,$t.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ye();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Bd(e,n,this.Ke,this.qe,r);return this.qe=Or(),this.Qe=U_(),this.Ke=new Qe(Ce),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new $_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new bt(Ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new $_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function U_(){return new Qe(G.comparator)}function z_(){return new Qe(G.comparator)}const bL={asc:"ASCENDING",desc:"DESCENDING"},NL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OL={and:"AND",or:"OR"};class LL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qp(t,e){return t.useProto3Json||jd(e)?e:{value:e}}function Bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ML(t,e){return Bc(t,e.toTimestamp())}function dr(t){return Ve(!!t),oe.fromTimestamp(function(n){const r=vi(n);return new pt(r.seconds,r.nanos)}(t))}function hy(t,e){return Yp(t,e).canonicalString()}function Yp(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function rA(t){const e=$e.fromString(t);return Ve(lA(e)),e}function Jp(t,e){return hy(t.databaseId,e.path)}function vf(t,e){const n=rA(e);if(n.get(1)!==t.databaseId.projectId)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(sA(n))}function iA(t,e){return hy(t.databaseId,e)}function VL(t){const e=rA(t);return e.length===4?$e.emptyPath():sA(e)}function Xp(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sA(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function B_(t,e,n){return{name:Jp(t,e),fields:n.value.mapValue.fields}}function jL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Ve(c===void 0||typeof c=="string"),Ht.fromBase64String(c||"")):(Ve(c===void 0||c instanceof Buffer||c instanceof Uint8Array),Ht.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:ZS(u.code);return new H(c,u.message||"")}(o);n=new tA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vf(t,r.document.name),s=dr(r.document.updateTime),o=r.document.createTime?dr(r.document.createTime):oe.min(),a=new nn({mapValue:{fields:r.document.fields}}),l=$t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Qu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vf(t,r.document),s=r.readTime?dr(r.readTime):oe.min(),o=$t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vf(t,r.document),s=r.removedTargetIds||[];n=new Qu([],s,i,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CL(i,s),a=r.targetId;n=new eA(a,o)}}return n}function FL(t,e){let n;if(e instanceof zl)n={update:B_(t,e.key,e.value)};else if(e instanceof uy)n={delete:Jp(t,e.key)};else if(e instanceof xi)n={update:B_(t,e.key,e.data),updateMask:GL(e.fieldMask)};else{if(!(e instanceof SL))return ie();n={verify:Jp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Uc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ML(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie()}(t,e.precondition)),n}function $L(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?dr(i.updateTime):dr(s);return o.isEqual(oe.min())&&(o=dr(s)),new EL(o,i.transformResults||[])}(n,e))):[]}function UL(t,e){return{documents:[iA(t,e.path)]}}function zL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iA(t,i);const s=function(u){if(u.length!==0)return aA(Bn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Os(h.field),direction:qL(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function BL(t){let e=VL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=oA(d);return h instanceof Bn&&OS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(g){return new $c(Ls(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,jd(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,y=d.values||[];return new Fc(y,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,y=d.values||[];return new Fc(y,h)}(n.endAt)),lL(e,i,o,s,a,"F",l,u)}function HL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ls(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ls(n.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ls(n.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ls(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(Ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>oA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function qL(t){return bL[t]}function WL(t){return NL[t]}function KL(t){return OL[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ls(t){return Pt.fromServerFormat(t.fieldPath)}function aA(t){return t instanceof lt?function(n){if(n.op==="=="){if(P_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(x_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(P_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(x_(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:WL(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>aA(i));return r.length===1?r[0]:{compositeFilter:{op:KL(n.op),filters:r}}}(t):ie()}function GL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ti{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QL{constructor(e){this.ct=e}}function YL(t){const e=BL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gp(e,e.limit,"L"):e}/**
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
 */class JL{constructor(){this._n=new XL}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(yi.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class XL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new bt($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new bt($e.comparator)).toArray()}}/**
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
 */class Ro{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ro(0)}static Ln(){return new Ro(-1)}}/**
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
 */class ZL{constructor(){this.changes=new Uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&La(r.mutation,i,dn.empty(),pt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ga();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Or();const o=Oa(),a=function(){return Oa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof xi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),La(c.mutation,u,c.mutation.getFieldMask(),pt.now())):o.set(u.key,dn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new eM(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oa();let i=new Qe((o,a)=>o-a),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ye()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=BS();c.forEach(h=>{if(!s.has(h)){const y=JS(n.get(h),r.get(h));y!==null&&d.set(h,y),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Hi());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ye())).next(c=>({batchId:a,changes:zS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const u=function(d,h){return new Ul(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,$t.newInvalidDocument(c)))});let a=ga();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&La(c.mutation,u,dn.empty(),pt.now()),$d(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class nM{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dr(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:YL(i.bundledQuery),readTime:dr(i.readTime)}}(n)),D.resolve()}}/**
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
 */class rM{constructor(){this.overlays=new Qe(G.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hi();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Hi(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RL(n,r));let s=this.hr.get(n);s===void 0&&(s=ye(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class fy{constructor(){this.Pr=new bt(vt.Ir),this.Tr=new bt(vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new vt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new $e([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new $e([])),r=new vt(n,e),i=new vt(n,e+1);let s=ye();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class iM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new bt(vt.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bt(Ce);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new vt(new G(s),0);let a=new bt(Ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new vt(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class sM{constructor(e){this.vr=e,this.docs=function(){return new Qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let r=Or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$t.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Or();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BO(zO(c),r)<=0||(i.has(c.key)||$d(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oM(this)}getSize(e){return D.resolve(this.size)}}class oM extends ZL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class aM{constructor(e){this.persistence=e,this.Mr=new Uo(n=>oy(n),ay),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new fy,this.targetCount=0,this.Lr=Ro.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ro(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
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
 */class lM{constructor(e,n){this.Br={},this.overlays={},this.kr=new ny(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new aM(this),this.indexManager=new JL,this.remoteDocumentCache=function(i){return new sM(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new QL(n),this.$r=new nM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new iM(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new uM(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class uM extends qO{constructor(e){super(),this.currentSequenceNumber=e}}class py{constructor(e){this.persistence=e,this.zr=new fy,this.jr=null}static Hr(e){return new py(e)}get Jr(){if(this.jr)return this.jr;throw ie()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class my{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new my(e,n.fromCache,r,i)}}/**
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
 */class cM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bP()?8:Bi.v(ut())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cM;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(na()<=we.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(na()<=we.DEBUG&&U("QueryEngine","Query:",Ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(na()<=we.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cr(n))):D.resolve())}ji(e,n){if(N_(n))return D.resolve(null);let r=cr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gp(n,null,"F"),r=cr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Gp(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return N_(n)||i.isEqual(oe.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):(na()<=we.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ns(n)),this.es(e,o,n,UO(i,-1)).next(a=>a))})}Zi(e,n){let r=new bt($S(e));return n.forEach((i,s)=>{$d(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return na()<=we.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ns(n)),this.zi.getDocumentsMatchingQuery(e,n,yi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class hM{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Qe(Ce),this.rs=new Uo(s=>oy(s),ay),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tM(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function fM(t,e,n,r){return new hM(t,e,n,r)}async function uA(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ye();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function pM(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let y=D.resolve();return h.forEach(g=>{y=y.next(()=>c.getEntry(l,g)).next(w=>{const v=u.docVersions.get(g);Ve(v!==null),w.version.compareTo(v)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cA(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function mM(t,e){const n=le(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let y=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Ht.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(d,y),function(w,v,m){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,y,c)&&a.push(n.Qr.updateTargetData(s,y))});let l=Or(),u=ye();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gM(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(oe.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function gM(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Or();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function yM(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vM(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Zp(t,e,n){const r=le(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$l(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function H_(t,e,n){const r=le(t);let i=oe.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=le(l),h=d.rs.get(c);return h!==void 0?D.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,cr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:ye())).next(a=>(_M(r,cL(e),a),{documents:a,hs:s})))}function _M(t,e,n){let r=t.ss.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class q_{constructor(){this.activeTargetIds=gL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wM{constructor(){this.no=new q_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EM{io(e){}shutdown(){}}/**
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
 */class W_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cu=null;function _f(){return Cu===null?Cu=function(){return 268435456+Math.round(2147483648*Math.random())}():Cu++,"0x"+Cu.toString(16)}/**
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
 */const TM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const Vt="WebChannelConnection";class SM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=_f(),l=this.bo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw wo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$o}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=TM[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=_f();return new Promise((o,a)=>{const l=new kO;l.setWithCredentials(!0),l.listenOnce(xO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yf.NO_ERROR:const c=l.getResponseJson();U(Vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case yf.TIMEOUT:U(Vt,`RPC '${e}' ${s} timed out`),a(new H(k.DEADLINE_EXCEEDED,"Request time out"));break;case yf.HTTP_ERROR:const d=l.getStatus();if(U(Vt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const y=h==null?void 0:h.error;if(y&&y.status&&y.message){const g=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(m)>=0?m:k.UNKNOWN}(y.status);a(new H(g,y.message))}else a(new H(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(k.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{U(Vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(Vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=_f(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RO(),a=CO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(Vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,y=!1;const g=new IM({lo:v=>{y?U(Vt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(U(Vt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),U(Vt,`RPC '${e}' stream ${i} sending:`,v),d.send(v))},ho:()=>d.close()}),w=(v,m,p)=>{v.listen(m,_=>{try{p(_)}catch(S){setTimeout(()=>{throw S},0)}})};return w(d,Su.EventType.OPEN,()=>{y||U(Vt,`RPC '${e}' stream ${i} transport opened.`)}),w(d,Su.EventType.CLOSE,()=>{y||(y=!0,U(Vt,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),w(d,Su.EventType.ERROR,v=>{y||(y=!0,wo(Vt,`RPC '${e}' stream ${i} transport errored:`,v),g.Vo(new H(k.UNAVAILABLE,"The operation could not be completed")))}),w(d,Su.EventType.MESSAGE,v=>{var m;if(!y){const p=v.data[0];Ve(!!p);const _=p,S=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(S){U(Vt,`RPC '${e}' stream ${i} received error:`,S);const P=S.status;let E=function(j){const q=st[j];if(q!==void 0)return ZS(q)}(P),C=S.message;E===void 0&&(E=k.INTERNAL,C="Unknown error status: "+P+" with message "+S.message),y=!0,g.Vo(new H(E,C)),d.close()}else U(Vt,`RPC '${e}' stream ${i} received:`,p),g.mo(p)}}),w(a,PO.STAT_EVENT,v=>{v.stat===E_.PROXY?U(Vt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===E_.NOPROXY&&U(Vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function wf(){return typeof document<"u"?document:null}/**
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
 */function Hd(t){return new LL(t,!0)}/**
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
 */class dA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class hA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new dA(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new H(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AM extends hA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=jL(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?dr(o.readTime):oe.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Xp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wp(l)?{documents:UL(s,l)}:{query:zL(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=nA(s,o.resumeToken);const u=Qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Bc(s,o.snapshotVersion.toTimestamp());const u=Qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=HL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Xp(this.serializer),n.removeTarget=e,this.t_(n)}}class RM extends hA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=$L(e.writeResults,e.commitTime),r=dr(e.commitTime);return this.listener.T_(r,n)}return Ve(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Xp(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FL(this.serializer,r))};this.t_(n)}}/**
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
 */class CM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Yp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(k.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Yp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(k.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class xM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(fr(n),this.g_=!1):U("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class PM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Es(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=le(l);u.v_.add(4),await Hl(u),u.x_.set("Unknown"),u.v_.delete(4),await qd(u)}(this))})}),this.x_=new xM(r,i)}}async function qd(t){if(Es(t))for(const e of t.F_)await e(!0)}async function Hl(t){for(const e of t.F_)await e(!1)}function fA(t,e){const n=le(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),_y(n)?vy(n):zo(n).Jo()&&yy(n,e))}function gy(t,e){const n=le(t),r=zo(n);n.C_.delete(e),r.Jo()&&pA(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Es(n)&&n.x_.set("Unknown"))}function yy(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zo(t).c_(e)}function pA(t,e){t.O_.Oe(e),zo(t).l_(e)}function vy(t){t.O_=new DL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),zo(t).start(),t.x_.p_()}function _y(t){return Es(t)&&!zo(t).Ho()&&t.C_.size>0}function Es(t){return le(t).v_.size===0}function mA(t){t.O_=void 0}async function kM(t){t.C_.forEach((e,n)=>{yy(t,e)})}async function DM(t,e){mA(t),_y(t)?(t.x_.S_(e),vy(t)):t.x_.set("Unknown")}async function bM(t,e,n){if(t.x_.set("Online"),e instanceof tA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hc(t,r)}else if(e instanceof Qu?t.O_.$e(e):e instanceof eA?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(oe.min()))try{const r=await cA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ht.EMPTY_BYTE_STRING,c.snapshotVersion)),pA(s,l);const d=new ti(c.target,l,u,c.sequenceNumber);yy(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Hc(t,r)}}async function Hc(t,e,n){if(!$l(e))throw e;t.v_.add(1),await Hl(t),t.x_.set("Offline"),n||(n=()=>cA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await qd(t)})}function gA(t,e){return e().catch(n=>Hc(t,n,e))}async function Wd(t){const e=le(t),n=_i(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;NM(e);)try{const i=await yM(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,OM(e,i)}catch(i){await Hc(e,i)}yA(e)&&vA(e)}function NM(t){return Es(t)&&t.D_.length<10}function OM(t,e){t.D_.push(e);const n=_i(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function yA(t){return Es(t)&&!_i(t).Ho()&&t.D_.length>0}function vA(t){_i(t).start()}async function LM(t){_i(t).d_()}async function MM(t){const e=_i(t);for(const n of t.D_)e.I_(n.mutations)}async function VM(t,e,n){const r=t.D_.shift(),i=cy.from(r,e,n);await gA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wd(t)}async function jM(t,e){e&&_i(t).P_&&await async function(r,i){if(function(o){return xL(o)&&o!==k.ABORTED}(i.code)){const s=r.D_.shift();_i(r).Zo(),await gA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wd(r)}}(t,e),yA(t)&&vA(t)}async function K_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.v_.add(3),await Hl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await qd(n)}async function FM(t,e){const n=le(t);e?(n.v_.delete(2),await qd(n)):e||(n.v_.add(2),await Hl(n),n.x_.set("Unknown"))}function zo(t){return t.N_||(t.N_=function(n,r,i){const s=le(n);return s.R_(),new AM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:kM.bind(null,t),To:DM.bind(null,t),u_:bM.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),_y(t)?vy(t):t.x_.set("Unknown")):(await t.N_.stop(),mA(t))})),t.N_}function _i(t){return t.L_||(t.L_=function(n,r,i){const s=le(n);return s.R_(),new RM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:LM.bind(null,t),To:jM.bind(null,t),E_:MM.bind(null,t),T_:VM.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Wd(t)):(await t.L_.stop(),t.D_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class wy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new wy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ey(t,e){if(fr("AsyncQueue",`${e}: ${t}`),$l(t))return new H(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class co{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new co(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new co;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class G_{constructor(){this.B_=new Qe(G.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ie():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Co(e,n,co.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $M{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class UM{constructor(){this.queries=new Uo(e=>FS(e),Fd),this.onlineState="Unknown",this.W_=new Set}}async function _A(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new $M,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ey(o,`Initialization of query '${Ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&Ty(n)}async function wA(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zM(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&Ty(n)}function BM(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Ty(t){t.W_.forEach(e=>{e.next()})}var em,Q_;(Q_=em||(em={})).j_="default",Q_.Cache="cache";class EA{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==em.Cache}}/**
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
 */class TA{constructor(e){this.key=e}}class IA{constructor(e){this.key=e}}class HM{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ye(),this.mutatedKeys=ye(),this.ha=$S(e),this.Pa=new co(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new G_,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),y=$d(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let v=!1;h&&y?h.data.isEqual(y.data)?g!==w&&(r.track({type:3,doc:y}),v=!0):this.da(h,y)||(r.track({type:2,doc:y}),v=!0,(l&&this.ha(y,l)>0||u&&this.ha(y,u)<0)&&(a=!0)):!h&&y?(r.track({type:0,doc:y}),v=!0):h&&!y&&(r.track({type:1,doc:h}),v=!0,(l||u)&&(a=!0)),v&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,d)=>function(y,g){const w=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return w(y)-w(g)}(c.type,d.type)||this.ha(c.doc,d.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new Co(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new G_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ye(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new IA(r))}),this.la.forEach(r=>{e.has(r)||n.push(new TA(r))}),n}fa(e){this.ua=e.hs,this.la=ye();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Co.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class qM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class WM{constructor(e){this.key=e,this.pa=!1}}class KM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Uo(a=>FS(a),Fd),this.Sa=new Map,this.ba=new Set,this.Da=new Qe(G.comparator),this.Ca=new Map,this.va=new fy,this.Fa={},this.Ma=new Map,this.xa=Ro.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function GM(t,e,n=!0){const r=PA(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await SA(r,e,n,!0),i}async function QM(t,e){const n=PA(t);await SA(n,e,!0,!1)}async function SA(t,e,n,r){const i=await vM(t.localStore,cr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await YM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&fA(t.remoteStore,i),a}async function YM(t,e,n,r,i){t.Na=(d,h,y)=>async function(w,v,m,p){let _=v.view.Ta(m);_.Xi&&(_=await H_(w.localStore,v.query,!1).then(({documents:C})=>v.view.Ta(C,_)));const S=p&&p.targetChanges.get(v.targetId),P=p&&p.targetMismatches.get(v.targetId)!=null,E=v.view.applyChanges(_,w.isPrimaryClient,S,P);return J_(w,v.targetId,E.Va),E.snapshot}(t,d,h,y);const s=await H_(t.localStore,e,!0),o=new HM(e,s.hs),a=o.Ta(s.documents),l=Bl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);J_(t,n,u.Va);const c=new qM(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function JM(t,e,n){const r=le(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Fd(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gy(r.remoteStore,i.targetId),tm(r,i.targetId)}).catch(Fl)):(tm(r,i.targetId),await Zp(r.localStore,i.targetId,!0))}async function XM(t,e){const n=le(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gy(n.remoteStore,r.targetId))}async function ZM(t,e,n){const r=oV(t);try{const i=await function(o,a){const l=le(o),u=pt.now(),c=a.reduce((y,g)=>y.add(g.key),ye());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let g=Or(),w=ye();return l.os.getEntries(y,c).next(v=>{g=v,g.forEach((m,p)=>{p.isValidDocument()||(w=w.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,g)).next(v=>{d=v;const m=[];for(const p of a){const _=IL(p,d.get(p.key).overlayedDocument);_!=null&&m.push(new xi(p.key,_,DS(_.value.mapValue),Cn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,m,a)}).next(v=>{h=v;const m=v.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(y,v.batchId,m)})}).then(()=>({batchId:h.batchId,changes:zS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new Qe(Ce)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ql(r,i.changes),await Wd(r.remoteStore)}catch(i){const s=Ey(i,"Failed to persist write");n.reject(s)}}async function AA(t,e){const n=le(t);try{const r=await mM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(Ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Ve(o.pa):i.removedDocuments.size>0&&(Ve(o.pa),o.pa=!1))}),await ql(n,r,e)}catch(r){await Fl(r)}}function Y_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=le(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.G_(a)&&(u=!0)}),u&&Ty(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eV(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new Qe(G.comparator);o=o.insert(s,$t.newNoDocument(s,oe.min()));const a=ye().add(s),l=new Bd(oe.min(),new Map,new Qe(Ce),o,a);await AA(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),Iy(r)}else await Zp(r.localStore,e,!1).then(()=>tm(r,e,n)).catch(Fl)}async function tV(t,e){const n=le(t),r=e.batch.batchId;try{const i=await pM(n.localStore,e);CA(n,r,null),RA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ql(n,i)}catch(i){await Fl(i)}}async function nV(t,e,n){const r=le(t);try{const i=await function(o,a){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ve(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);CA(r,e,n),RA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ql(r,i)}catch(i){await Fl(i)}}function RA(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function CA(t,e,n){const r=le(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function tm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||xA(t,r)})}function xA(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(gy(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Iy(t))}function J_(t,e,n){for(const r of n)r instanceof TA?(t.va.addReference(r.key,e),rV(t,r)):r instanceof IA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||xA(t,r.key)):ie()}function rV(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ba.add(r),Iy(t))}function Iy(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new G($e.fromString(e)),r=t.xa.next();t.Ca.set(r,new WM(n)),t.Da=t.Da.insert(n,r),fA(t.remoteStore,new ti(cr(ly(n.path)),r,"TargetPurposeLimboResolution",ny._e))}}async function ql(t,e,n){const r=le(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=my.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=le(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,h=>D.forEach(h.qi,y=>c.persistence.referenceDelegate.addReference(d,h.targetId,y)).next(()=>D.forEach(h.Qi,y=>c.persistence.referenceDelegate.removeReference(d,h.targetId,y)))))}catch(d){if(!$l(d))throw d;U("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const y=c.ns.get(h),g=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(g);c.ns=c.ns.insert(h,w)}}}(r.localStore,s))}async function iV(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await uA(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new H(k.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ql(n,r.us)}}function sV(t,e){const n=le(t),r=n.Ca.get(e);if(r&&r.pa)return ye().add(r.key);{let i=ye();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function PA(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eV.bind(null,e),e.ya.u_=zM.bind(null,e.eventManager),e.ya.La=BM.bind(null,e.eventManager),e}function oV(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nV.bind(null,e),e}class X_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fM(this.persistence,new dM,e.initialUser,this.serializer)}createPersistence(e){return new lM(py.Hr,this.serializer)}createSharedClientState(e){return new wM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iV.bind(null,this.syncEngine),await FM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UM}()}createDatastore(e){const n=Hd(e.databaseInfo.databaseId),r=function(s){return new SM(s)}(e.databaseInfo);return function(s,o,a,l){return new CM(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new PM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Y_(this.syncEngine,n,0),function(){return W_.D()?new W_:new EM}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new KM(i,s,o,a,l,u);return c&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=le(r);U("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Hl(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class kA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class lV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=jt.UNAUTHENTICATED,this.clientId=xS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ey(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Z_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cV(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>K_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>K_(e.remoteStore,i)),t._onlineComponents=e}function uV(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uV(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await Ef(t,new X_)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Ef(t,new X_);return t._offlineComponents}async function DA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Z_(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Z_(t,new aV))),t._onlineComponents}function dV(t){return DA(t).then(e=>e.syncEngine)}async function bA(t){const e=await DA(t),n=e.eventManager;return n.onListen=GM.bind(null,e.syncEngine),n.onUnlisten=JM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XM.bind(null,e.syncEngine),n}function hV(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new kA({next:h=>{o.enqueueAndForget(()=>wA(s,d));const y=h.docs.has(a);!y&&h.fromCache?u.reject(new H(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&h.fromCache&&l&&l.source==="server"?u.reject(new H(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new EA(ly(a.path),c,{includeMetadataChanges:!0,ta:!0});return _A(s,d)}(await bA(t),t.asyncQueue,e,n,r)),r.promise}function fV(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new kA({next:h=>{o.enqueueAndForget(()=>wA(s,d)),h.fromCache&&l.source==="server"?u.reject(new H(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new EA(a,c,{includeMetadataChanges:!0,ta:!0});return _A(s,d)}(await bA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ew=new Map;/**
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
 */function OA(t,e,n){if(!n)throw new H(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pV(t,e,n,r){if(e===!0&&r===!0)throw new H(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tw(t){if(!G.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nw(t){if(G.isDocumentKey(t))throw new H(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kd(t);throw new H(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class rw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bO;switch(r.type){case"firstParty":return new MO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ew.get(n);r&&(U("ComponentProvider","Removing Datastore"),ew.delete(n),r.terminate())}(this),Promise.resolve()}}function mV(t,e,n,r={}){var i;const s=(t=Hn(t,Gd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=jt.MOCK_USER;else{a=CP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new H(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new jt(u)}t._authCredentials=new NO(new CS(a,l))}}/**
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
 */class Bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bo(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class hi extends Bo{constructor(e,n,r){super(e,n,ly(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new G(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function kn(t,e,...n){if(t=Et(t),OA("collection","path",e),t instanceof Gd){const r=$e.fromString(e,...n);return nw(r),new hi(t,null,r)}{if(!(t instanceof Yt||t instanceof hi))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return nw(r),new hi(t.firestore,null,r)}}function Gt(t,e,...n){if(t=Et(t),arguments.length===1&&(e=xS.newId()),OA("doc","path",e),t instanceof Gd){const r=$e.fromString(e,...n);return tw(r),new Yt(t,null,new G(r))}{if(!(t instanceof Yt||t instanceof hi))throw new H(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return tw(r),new Yt(t.firestore,t instanceof hi?t.converter:null,new G(r))}}/**
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
 */class gV{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new dA(this,"async_queue_retry"),this.cu=()=>{const n=wf();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=wf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new ur;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!$l(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=wy.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&ie()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class Ts extends Gd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new gV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||MA(this),this._firestoreClient.terminate()}}function LA(t,e){const n=typeof t=="object"?t:gg(),r=typeof t=="string"?t:e||"(default)",i=ys(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AP("firestore");s&&mV(i,...s)}return i}function Sy(t){return t._firestoreClient||MA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function MA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new YO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,NA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new lV(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class xo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xo(Ht.fromBase64String(e))}catch(n){throw new H(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xo(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function yV(){return new Wl("__name__")}/**
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
 */class Kl{constructor(e){this._methodName=e}}/**
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
 */class Ay{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const vV=/^__.*__$/;class _V{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new zl(e,this.data,n,this.fieldTransforms)}}class VA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class Qd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return qc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(jA(this.Vu)&&vV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class wV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hd(e)}Cu(e,n,r,i=!1){return new Qd({Vu:e,methodName:n,Du:r,path:Pt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yd(t){const e=t._freezeSettings(),n=Hd(t._databaseId);return new wV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FA(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);xy("Data must be an object, but it was:",o,r);const a=UA(r,o);let l,u;if(s.merge)l=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=nm(e,d,n);if(!o.contains(h))throw new H(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);BA(c,h)||c.push(h)}l=new dn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new _V(new nn(a),l,u)}class Jd extends Kl{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jd}}function $A(t,e,n){return new Qd({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ry extends Kl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=$A(this,e,!0),r=this.vu.map(s=>Is(s,n)),i=new So(r);return new YS(e.path,i)}isEqual(e){return e instanceof Ry&&ns(this.vu,e.vu)}}class Cy extends Kl{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=$A(this,e,!0),r=this.vu.map(s=>Is(s,n)),i=new Ao(r);return new YS(e.path,i)}isEqual(e){return e instanceof Cy&&ns(this.vu,e.vu)}}function EV(t,e,n,r){const i=t.Cu(1,e,n);xy("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();ws(r,(l,u)=>{const c=Py(e,l,n);u=Et(u);const d=i.yu(c);if(u instanceof Jd)s.push(c);else{const h=Is(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new dn(s);return new VA(o,a,i.fieldTransforms)}function TV(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[nm(e,r,n)],l=[i];if(s.length%2!=0)throw new H(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(nm(e,s[h])),l.push(s[h+1]);const u=[],c=nn.empty();for(let h=a.length-1;h>=0;--h)if(!BA(u,a[h])){const y=a[h];let g=l[h];g=Et(g);const w=o.yu(y);if(g instanceof Jd)u.push(y);else{const v=Is(g,w);v!=null&&(u.push(y),c.set(y,v))}}const d=new dn(u);return new VA(c,d,o.fieldTransforms)}function IV(t,e,n,r=!1){return Is(n,t.Cu(r?4:3,e))}function Is(t,e){if(zA(t=Et(t)))return xy("Unsupported field value:",e,t),UA(t,e);if(t instanceof Kl)return function(r,i){if(!jA(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Is(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pt.fromDate(r);return{timestampValue:Bc(i.serializer,s)}}if(r instanceof pt){const s=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bc(i.serializer,s)}}if(r instanceof Ay)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xo)return{bytesValue:nA(i.serializer,r._byteString)};if(r instanceof Yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Kd(r)}`)}(t,e)}function UA(t,e){const n={};return PS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,i)=>{const s=Is(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof Ay||t instanceof xo||t instanceof Yt||t instanceof Kl)}function xy(t,e,n){if(!zA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kd(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function nm(t,e,n){if((e=Et(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return Py(t,e);throw qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const SV=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(SV)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(k.INVALID_ARGUMENT,a+t+l)}function BA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class HA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ky("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AV extends HA{data(){return super.data()}}function ky(t,e){return typeof e=="string"?Py(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
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
 */function RV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dy{}class CV extends Dy{}function Ss(t,e,...n){let r=[];e instanceof Dy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ql).length,a=s.filter(l=>l instanceof Gl).length;if(o>1||o>0&&a>0)throw new H(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gl extends CV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gl(e,n,r)}_apply(e){const n=this._parse(e);return qA(e._query,n),new Bo(e.firestore,e.converter,Kp(e._query,n))}_parse(e){const n=Yd(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new H(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){sw(d,c);const y=[];for(const g of d)y.push(iw(l,s,g));h={arrayValue:{values:y}}}else h=iw(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||sw(d,c),h=IV(a,o,d,c==="in"||c==="not-in");return lt.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wi(t,e,n){const r=e,i=ky("where",t);return Gl._create(i,r,n)}class Ql extends Dy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ql(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)qA(o,l),o=Kp(o,l)}(e._query,n),new Bo(e.firestore,e.converter,Kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xV(...t){return t.forEach(e=>PV("and",e)),Ql._create("and",t)}function iw(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new H(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jS(e)&&n.indexOf("/")!==-1)throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!G.isDocumentKey(r))throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return C_(t,new G(r))}if(n instanceof Yt)return C_(t,n._key);throw new H(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kd(n)}.`)}function sw(t,e){if(!Array.isArray(t)||t.length===0)throw new H(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PV(t,e){if(!(e instanceof Gl||e instanceof Ql))throw new H(k.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class kV{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ay(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pl(e));default:return null}}convertTimestamp(e){const n=vi(e);return new pt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(lA(r));const i=new ml(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KA extends HA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ky("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yu extends KA{data(e={}){return super.data(e)}}class DV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yu(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Yu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new va(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Yu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new va(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:bV(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function by(t){t=Hn(t,Yt);const e=Hn(t.firestore,Ts);return hV(Sy(e),t._key).then(n=>OV(e,t,n))}class GA extends kV{constructor(e){super(),this.firestore=e}convertBytes(e){return new xo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function mr(t){t=Hn(t,Bo);const e=Hn(t.firestore,Ts),n=Sy(e),r=new GA(e);return RV(t._query),fV(n,t._query).then(i=>new DV(e,r,t,i))}function NV(t,e,n){t=Hn(t,Yt);const r=Hn(t.firestore,Ts),i=WA(t.converter,e,n);return Xd(r,[FA(Yd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Cn.none())])}function fi(t,e,n,...r){t=Hn(t,Yt);const i=Hn(t.firestore,Ts),s=Yd(i);let o;return o=typeof(e=Et(e))=="string"||e instanceof Wl?TV(s,"updateDoc",t._key,e,n,r):EV(s,"updateDoc",t._key,e),Xd(i,[o.toMutation(t._key,Cn.exists(!0))])}function QA(t){return Xd(Hn(t.firestore,Ts),[new uy(t._key,Cn.none())])}function Ny(t,e){const n=Hn(t.firestore,Ts),r=Gt(t),i=WA(t.converter,e);return Xd(n,[FA(Yd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Cn.exists(!1))]).then(()=>r)}function Xd(t,e){return function(r,i){const s=new ur;return r.asyncQueue.enqueueAndForget(async()=>ZM(await dV(r),i,s)),s.promise}(Sy(t),e)}function OV(t,e,n){const r=n.docs.get(e._key),i=new GA(t);return new KA(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}function yl(...t){return new Ry("arrayUnion",t)}function Ma(...t){return new Cy("arrayRemove",t)}(function(e,n=!0){(function(i){$o=i})(Lo),hr(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ts(new OO(r.getProvider("auth-internal")),new jO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new H(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ml(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rn(T_,"4.6.0",e),Rn(T_,"4.6.0","esm2017")})();const LV={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},Oy=mg(LV);LA(Oy);II().then(t=>{t&&TI(Oy)});Vo(Oy);var YA={exports:{}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=Symbol.for("react.element"),My=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),MV=Symbol.for("react.server_context"),ih=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),lh=Symbol.for("react.lazy"),VV=Symbol.for("react.offscreen"),JA;JA=Symbol.for("react.module.reference");function Dn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ly:switch(t=t.type,t){case Zd:case th:case eh:case sh:case oh:return t;default:switch(t=t&&t.$$typeof,t){case MV:case rh:case ih:case lh:case ah:case nh:return t;default:return e}}case My:return e}}}ke.ContextConsumer=rh;ke.ContextProvider=nh;ke.Element=Ly;ke.ForwardRef=ih;ke.Fragment=Zd;ke.Lazy=lh;ke.Memo=ah;ke.Portal=My;ke.Profiler=th;ke.StrictMode=eh;ke.Suspense=sh;ke.SuspenseList=oh;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(t){return Dn(t)===rh};ke.isContextProvider=function(t){return Dn(t)===nh};ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ly};ke.isForwardRef=function(t){return Dn(t)===ih};ke.isFragment=function(t){return Dn(t)===Zd};ke.isLazy=function(t){return Dn(t)===lh};ke.isMemo=function(t){return Dn(t)===ah};ke.isPortal=function(t){return Dn(t)===My};ke.isProfiler=function(t){return Dn(t)===th};ke.isStrictMode=function(t){return Dn(t)===eh};ke.isSuspense=function(t){return Dn(t)===sh};ke.isSuspenseList=function(t){return Dn(t)===oh};ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Zd||t===th||t===eh||t===sh||t===oh||t===VV||typeof t=="object"&&t!==null&&(t.$$typeof===lh||t.$$typeof===ah||t.$$typeof===nh||t.$$typeof===rh||t.$$typeof===ih||t.$$typeof===JA||t.getModuleId!==void 0)};ke.typeOf=Dn;YA.exports=ke;var XA=YA.exports;function jV(t){function e(M,B,F,Y,A){for(var fe=0,V=0,ze=0,Ae=0,ae,ne,it=0,Ot=0,de,mt=de=ae=0,Re=0,ct=0,Di=0,dt=0,Wn=F.length,jr=Wn-1,qt,J="",be="",Cs="",Fr="",Kn;Re<Wn;){if(ne=F.charCodeAt(Re),Re===jr&&V+Ae+ze+fe!==0&&(V!==0&&(ne=V===47?10:47),Ae=ze=fe=0,Wn++,jr++),V+Ae+ze+fe===0){if(Re===jr&&(0<ct&&(J=J.replace(h,"")),0<J.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:J+=F.charAt(Re)}ne=59}switch(ne){case 123:for(J=J.trim(),ae=J.charCodeAt(0),de=1,dt=++Re;Re<Wn;){switch(ne=F.charCodeAt(Re)){case 123:de++;break;case 125:de--;break;case 47:switch(ne=F.charCodeAt(Re+1)){case 42:case 47:e:{for(mt=Re+1;mt<jr;++mt)switch(F.charCodeAt(mt)){case 47:if(ne===42&&F.charCodeAt(mt-1)===42&&Re+2!==mt){Re=mt+1;break e}break;case 10:if(ne===47){Re=mt+1;break e}}Re=mt}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;Re++<jr&&F.charCodeAt(Re)!==ne;);}if(de===0)break;Re++}switch(de=F.substring(dt,Re),ae===0&&(ae=(J=J.replace(d,"").trim()).charCodeAt(0)),ae){case 64:switch(0<ct&&(J=J.replace(h,"")),ne=J.charCodeAt(1),ne){case 100:case 109:case 115:case 45:ct=B;break;default:ct=Zt}if(de=e(B,ct,de,ne,A+1),dt=de.length,0<L&&(ct=n(Zt,J,Di),Kn=a(3,de,ct,B,Se,Te,dt,ne,A,Y),J=ct.join(""),Kn!==void 0&&(dt=(de=Kn.trim()).length)===0&&(ne=0,de="")),0<dt)switch(ne){case 115:J=J.replace(E,o);case 100:case 109:case 45:de=J+"{"+de+"}";break;case 107:J=J.replace(p,"$1 $2"),de=J+"{"+de+"}",de=tt===1||tt===2&&s("@"+de,3)?"@-webkit-"+de+"@"+de:"@"+de;break;default:de=J+de,Y===112&&(de=(be+=de,""))}else de="";break;default:de=e(B,n(B,J,Di),de,Y,A+1)}Cs+=de,de=Di=ct=mt=ae=0,J="",ne=F.charCodeAt(++Re);break;case 125:case 59:if(J=(0<ct?J.replace(h,""):J).trim(),1<(dt=J.length))switch(mt===0&&(ae=J.charCodeAt(0),ae===45||96<ae&&123>ae)&&(dt=(J=J.replace(" ",":")).length),0<L&&(Kn=a(1,J,B,M,Se,Te,be.length,Y,A,Y))!==void 0&&(dt=(J=Kn.trim()).length)===0&&(J="\0\0"),ae=J.charCodeAt(0),ne=J.charCodeAt(1),ae){case 0:break;case 64:if(ne===105||ne===99){Fr+=J+F.charAt(Re);break}default:J.charCodeAt(dt-1)!==58&&(be+=i(J,ae,ne,J.charCodeAt(2)))}Di=ct=mt=ae=0,J="",ne=F.charCodeAt(++Re)}}switch(ne){case 13:case 10:V===47?V=0:1+ae===0&&Y!==107&&0<J.length&&(ct=1,J+="\0"),0<L*Z&&a(0,J,B,M,Se,Te,be.length,Y,A,Y),Te=1,Se++;break;case 59:case 125:if(V+Ae+ze+fe===0){Te++;break}default:switch(Te++,qt=F.charAt(Re),ne){case 9:case 32:if(Ae+fe+V===0)switch(it){case 44:case 58:case 9:case 32:qt="";break;default:ne!==32&&(qt=" ")}break;case 0:qt="\\0";break;case 12:qt="\\f";break;case 11:qt="\\v";break;case 38:Ae+V+fe===0&&(ct=Di=1,qt="\f"+qt);break;case 108:if(Ae+V+fe+qe===0&&0<mt)switch(Re-mt){case 2:it===112&&F.charCodeAt(Re-3)===58&&(qe=it);case 8:Ot===111&&(qe=Ot)}break;case 58:Ae+V+fe===0&&(mt=Re);break;case 44:V+ze+Ae+fe===0&&(ct=1,qt+="\r");break;case 34:case 39:V===0&&(Ae=Ae===ne?0:Ae===0?ne:Ae);break;case 91:Ae+V+ze===0&&fe++;break;case 93:Ae+V+ze===0&&fe--;break;case 41:Ae+V+fe===0&&ze--;break;case 40:if(Ae+V+fe===0){if(ae===0)switch(2*it+3*Ot){case 533:break;default:ae=1}ze++}break;case 64:V+ze+Ae+fe+mt+de===0&&(de=1);break;case 42:case 47:if(!(0<Ae+fe+ze))switch(V){case 0:switch(2*ne+3*F.charCodeAt(Re+1)){case 235:V=47;break;case 220:dt=Re,V=42}break;case 42:ne===47&&it===42&&dt+2!==Re&&(F.charCodeAt(dt+2)===33&&(be+=F.substring(dt,Re+1)),qt="",V=0)}}V===0&&(J+=qt)}Ot=it,it=ne,Re++}if(dt=be.length,0<dt){if(ct=B,0<L&&(Kn=a(2,be,ct,M,Se,Te,dt,Y,A,Y),Kn!==void 0&&(be=Kn).length===0))return Fr+be+Cs;if(be=ct.join(",")+"{"+be+"}",tt*qe!==0){switch(tt!==2||s(be,2)||(qe=0),qe){case 111:be=be.replace(S,":-moz-$1")+be;break;case 112:be=be.replace(_,"::-webkit-input-$1")+be.replace(_,"::-moz-$1")+be.replace(_,":-ms-input-$1")+be}qe=0}}return Fr+be+Cs}function n(M,B,F){var Y=B.trim().split(v);B=Y;var A=Y.length,fe=M.length;switch(fe){case 0:case 1:var V=0;for(M=fe===0?"":M[0]+" ";V<A;++V)B[V]=r(M,B[V],F).trim();break;default:var ze=V=0;for(B=[];V<A;++V)for(var Ae=0;Ae<fe;++Ae)B[ze++]=r(M[Ae]+" ",Y[V],F).trim()}return B}function r(M,B,F){var Y=B.charCodeAt(0);switch(33>Y&&(Y=(B=B.trim()).charCodeAt(0)),Y){case 38:return B.replace(m,"$1"+M.trim());case 58:return M.trim()+B.replace(m,"$1"+M.trim());default:if(0<1*F&&0<B.indexOf("\f"))return B.replace(m,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+B}function i(M,B,F,Y){var A=M+";",fe=2*B+3*F+4*Y;if(fe===944){M=A.indexOf(":",9)+1;var V=A.substring(M,A.length-1).trim();return V=A.substring(0,M).trim()+V+";",tt===1||tt===2&&s(V,1)?"-webkit-"+V+V:V}if(tt===0||tt===2&&!s(A,1))return A;switch(fe){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ce,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return V=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+V+"-webkit-"+A+"-ms-flex-pack"+V+A;case 1005:return g.test(A)?A.replace(y,":-webkit-")+A.replace(y,":-moz-")+A:A;case 1e3:switch(V=A.substring(13).trim(),B=V.indexOf("-")+1,V.charCodeAt(0)+V.charCodeAt(B)){case 226:V=A.replace(P,"tb");break;case 232:V=A.replace(P,"tb-rl");break;case 220:V=A.replace(P,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+V+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(B=(A=M).length-10,V=(A.charCodeAt(B)===33?A.substring(0,B):A).substring(M.indexOf(":",7)+1).trim(),fe=V.charCodeAt(0)+(V.charCodeAt(7)|0)){case 203:if(111>V.charCodeAt(8))break;case 115:A=A.replace(V,"-webkit-"+V)+";"+A;break;case 207:case 102:A=A.replace(V,"-webkit-"+(102<fe?"inline-":"")+"box")+";"+A.replace(V,"-webkit-"+V)+";"+A.replace(V,"-ms-"+V+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return V=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+V+"-ms-flex-"+V+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(b,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(b,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(q.test(M)===!0)return(V=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),B,F,Y).replace(":fill-available",":stretch"):A.replace(V,"-webkit-"+V)+A.replace(V,"-moz-"+V.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,F+Y===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+A}return A}function s(M,B){var F=M.indexOf(B===1?":":"{"),Y=M.substring(0,B!==3?F:10);return F=M.substring(F+1,M.length-1),Q(B!==2?Y:Y.replace(j,"$1"),F,B)}function o(M,B){var F=i(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return F!==B+";"?F.replace(C," or ($1)").substring(4):"("+B+")"}function a(M,B,F,Y,A,fe,V,ze,Ae,ae){for(var ne=0,it=B,Ot;ne<L;++ne)switch(Ot=ge[ne].call(c,M,it,F,Y,A,fe,V,ze,Ae,ae)){case void 0:case!1:case!0:case null:break;default:it=Ot}if(it!==B)return it}function l(M){switch(M){case void 0:case null:L=ge.length=0;break;default:if(typeof M=="function")ge[L++]=M;else if(typeof M=="object")for(var B=0,F=M.length;B<F;++B)l(M[B]);else Z=!!M|0}return l}function u(M){return M=M.prefix,M!==void 0&&(Q=null,M?typeof M!="function"?tt=1:(tt=2,Q=M):tt=0),u}function c(M,B){var F=M;if(33>F.charCodeAt(0)&&(F=F.trim()),me=F,F=[me],0<L){var Y=a(-1,B,F,F,Se,Te,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(B=Y)}var A=e(Zt,F,B,0,0);return 0<L&&(Y=a(-2,A,F,F,Se,Te,A.length,0,0,0),Y!==void 0&&(A=Y)),me="",qe=0,Te=Se=1,A}var d=/^\0+/g,h=/[\0\r\f]/g,y=/: */g,g=/zoo|gra/,w=/([,: ])(transform)/g,v=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,S=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,b=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,Te=1,Se=1,qe=0,tt=1,Zt=[],ge=[],L=0,Q=null,Z=0,me="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var FV={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $V(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var UV=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ow=$V(function(t){return UV.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ZA={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St=typeof Symbol=="function"&&Symbol.for,Vy=St?Symbol.for("react.element"):60103,jy=St?Symbol.for("react.portal"):60106,uh=St?Symbol.for("react.fragment"):60107,ch=St?Symbol.for("react.strict_mode"):60108,dh=St?Symbol.for("react.profiler"):60114,hh=St?Symbol.for("react.provider"):60109,fh=St?Symbol.for("react.context"):60110,Fy=St?Symbol.for("react.async_mode"):60111,ph=St?Symbol.for("react.concurrent_mode"):60111,mh=St?Symbol.for("react.forward_ref"):60112,gh=St?Symbol.for("react.suspense"):60113,zV=St?Symbol.for("react.suspense_list"):60120,yh=St?Symbol.for("react.memo"):60115,vh=St?Symbol.for("react.lazy"):60116,BV=St?Symbol.for("react.block"):60121,HV=St?Symbol.for("react.fundamental"):60117,qV=St?Symbol.for("react.responder"):60118,WV=St?Symbol.for("react.scope"):60119;function vn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Vy:switch(t=t.type,t){case Fy:case ph:case uh:case dh:case ch:case gh:return t;default:switch(t=t&&t.$$typeof,t){case fh:case mh:case vh:case yh:case hh:return t;default:return e}}case jy:return e}}}function eR(t){return vn(t)===ph}De.AsyncMode=Fy;De.ConcurrentMode=ph;De.ContextConsumer=fh;De.ContextProvider=hh;De.Element=Vy;De.ForwardRef=mh;De.Fragment=uh;De.Lazy=vh;De.Memo=yh;De.Portal=jy;De.Profiler=dh;De.StrictMode=ch;De.Suspense=gh;De.isAsyncMode=function(t){return eR(t)||vn(t)===Fy};De.isConcurrentMode=eR;De.isContextConsumer=function(t){return vn(t)===fh};De.isContextProvider=function(t){return vn(t)===hh};De.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vy};De.isForwardRef=function(t){return vn(t)===mh};De.isFragment=function(t){return vn(t)===uh};De.isLazy=function(t){return vn(t)===vh};De.isMemo=function(t){return vn(t)===yh};De.isPortal=function(t){return vn(t)===jy};De.isProfiler=function(t){return vn(t)===dh};De.isStrictMode=function(t){return vn(t)===ch};De.isSuspense=function(t){return vn(t)===gh};De.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uh||t===ph||t===dh||t===ch||t===gh||t===zV||typeof t=="object"&&t!==null&&(t.$$typeof===vh||t.$$typeof===yh||t.$$typeof===hh||t.$$typeof===fh||t.$$typeof===mh||t.$$typeof===HV||t.$$typeof===qV||t.$$typeof===WV||t.$$typeof===BV)};De.typeOf=vn;ZA.exports=De;var KV=ZA.exports,$y=KV,GV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Uy={};Uy[$y.ForwardRef]=YV;Uy[$y.Memo]=tR;function aw(t){return $y.isMemo(t)?tR:Uy[t.$$typeof]||GV}var JV=Object.defineProperty,XV=Object.getOwnPropertyNames,lw=Object.getOwnPropertySymbols,ZV=Object.getOwnPropertyDescriptor,ej=Object.getPrototypeOf,uw=Object.prototype;function nR(t,e,n){if(typeof e!="string"){if(uw){var r=ej(e);r&&r!==uw&&nR(t,r,n)}var i=XV(e);lw&&(i=i.concat(lw(e)));for(var s=aw(t),o=aw(e),a=0;a<i.length;++a){var l=i[a];if(!QV[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=ZV(e,l);try{JV(t,l,u)}catch{}}}}return t}var tj=nR;const nj=gm(tj);var Xn={};function ir(){return(ir=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var cw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},rm=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!XA.typeOf(t)},Wc=Object.freeze([]),pi=Object.freeze({});function vl(t){return typeof t=="function"}function dw(t){return t.displayName||t.name||"Component"}function zy(t){return t&&typeof t.styledComponentId=="string"}var Po=typeof process<"u"&&(Xn.REACT_APP_SC_ATTR||Xn.SC_ATTR)||"data-styled",By=typeof window<"u"&&"HTMLElement"in window,rj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xn.REACT_APP_SC_DISABLE_SPEEDY!==""?Xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xn.SC_DISABLE_SPEEDY!==void 0&&Xn.SC_DISABLE_SPEEDY!==""&&Xn.SC_DISABLE_SPEEDY!=="false"&&Xn.SC_DISABLE_SPEEDY),ij={};function Yl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var sj=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Yl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ju=new Map,Kc=new Map,Va=1,xu=function(t){if(Ju.has(t))return Ju.get(t);for(;Kc.has(Va);)Va++;var e=Va++;return Ju.set(t,e),Kc.set(e,t),e},oj=function(t){return Kc.get(t)},aj=function(t,e){e>=Va&&(Va=e+1),Ju.set(t,e),Kc.set(e,t)},lj="style["+Po+'][data-styled-version="5.3.6"]',uj=new RegExp("^"+Po+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),cj=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},dj=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(uj);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(aj(u,l),cj(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},hj=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},rR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Po))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Po,"active"),r.setAttribute("data-styled-version","5.3.6");var o=hj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},fj=function(){function t(n){var r=this.element=rR(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Yl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),pj=function(){function t(n){var r=this.element=rR(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),mj=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),hw=By,gj={isServer:!By,useCSSOMInjection:!rj},Gc=function(){function t(n,r,i){n===void 0&&(n=pi),r===void 0&&(r={}),this.options=ir({},gj,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&By&&hw&&(hw=!1,function(s){for(var o=document.querySelectorAll(lj),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Po)!=="active"&&(dj(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return xu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(ir({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new mj(o):s?new fj(o):new pj(o),new sj(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(xu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(xu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(xu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=oj(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Po+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),yj=/(a)(d)/gi,fw=function(t){return String.fromCharCode(t+(t>25?39:97))};function im(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=fw(e%52)+n;return(fw(e%52)+n).replace(yj,"$1-$2")}var Ys=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},iR=function(t){return Ys(5381,t)};function sR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(vl(n)&&!zy(n))return!1}return!0}var vj=iR("5.3.6"),_j=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sR(e),this.componentId=n,this.baseHash=Ys(vj,n),this.baseStyle=r,Gc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ds(this.rules,e,n,r).join(""),a=im(Ys(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ys(this.baseHash,r.hash),d="",h=0;h<u;h++){var y=this.rules[h];if(typeof y=="string")d+=y;else if(y){var g=ds(y,e,n,r),w=Array.isArray(g)?g.join(""):g;c=Ys(c,w+h),d+=w}}if(d){var v=im(c>>>0);if(!n.hasNameForId(i,v)){var m=r(d,"."+v,void 0,i);n.insertRules(i,v,m)}s.push(v)}}return s.join(" ")},t}(),wj=/^\s*\/\/.*$/gm,Ej=[":","[",".","#"];function Tj(t){var e,n,r,i,s=t===void 0?pi:t,o=s.options,a=o===void 0?pi:o,l=s.plugins,u=l===void 0?Wc:l,c=new jV(a),d=[],h=function(w){function v(m){if(m)try{w(m+"}")}catch{}}return function(m,p,_,S,P,E,C,b,j,q){switch(m){case 1:if(j===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(b===0)return p+"/*|*/";break;case 3:switch(b){case 102:case 112:return w(_[0]+p),"";default:return p+(q===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(v)}}}(function(w){d.push(w)}),y=function(w,v,m){return v===0&&Ej.indexOf(m[n.length])!==-1||m.match(i)?w:"."+e};function g(w,v,m,p){p===void 0&&(p="&");var _=w.replace(wj,""),S=v&&m?m+" "+v+" { "+_+" }":_;return e=p,n=v,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!v?"":v,S)}return c.use([].concat(u,[function(w,v,m){w===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,y))},h,function(w){if(w===-2){var v=d;return d=[],v}}])),g.hash=u.length?u.reduce(function(w,v){return v.name||Yl(15),Ys(w,v.name)},5381).toString():"",g}var oR=bo.createContext();oR.Consumer;var aR=bo.createContext(),Ij=(aR.Consumer,new Gc),sm=Tj();function lR(){return T.useContext(oR)||Ij}function uR(){return T.useContext(aR)||sm}var cR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=sm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Yl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=sm),this.name+e.hash},t}(),Sj=/([A-Z])/,Aj=/([A-Z])/g,Rj=/^ms-/,Cj=function(t){return"-"+t.toLowerCase()};function pw(t){return Sj.test(t)?t.replace(Aj,Cj).replace(Rj,"-ms-"):t}var mw=function(t){return t==null||t===!1||t===""};function ds(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ds(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(mw(t))return"";if(zy(t))return"."+t.styledComponentId;if(vl(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ds(l,e,n,r)}var u;return t instanceof cR?n?(t.inject(n,r),t.getName(r)):t:rm(t)?function c(d,h){var y,g,w=[];for(var v in d)d.hasOwnProperty(v)&&!mw(d[v])&&(Array.isArray(d[v])&&d[v].isCss||vl(d[v])?w.push(pw(v)+":",d[v],";"):rm(d[v])?w.push.apply(w,c(d[v],v)):w.push(pw(v)+": "+(y=v,(g=d[v])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||y in FV?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(t):t.toString()}var gw=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Hy(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return vl(t)||rm(t)?gw(ds(cw(Wc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:gw(ds(cw(t,n)))}var dR=function(t,e,n){return n===void 0&&(n=pi),t.theme!==n.theme&&t.theme||e||n.theme},xj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pj=/(^-|-$)/g;function Tf(t){return t.replace(xj,"-").replace(Pj,"")}var qy=function(t){return im(iR(t)>>>0)};function Pu(t){return typeof t=="string"&&!0}var om=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},kj=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function Dj(t,e,n){var r=t[n];om(e)&&om(r)?hR(r,e):t[n]=e}function hR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(om(o))for(var a in o)kj(a)&&Dj(t,o[a],a)}return t}var Wy=bo.createContext();Wy.Consumer;var If={};function fR(t,e,n){var r=zy(t),i=!Pu(t),s=e.attrs,o=s===void 0?Wc:s,a=e.componentId,l=a===void 0?function(p,_){var S=typeof p!="string"?"sc":Tf(p);If[S]=(If[S]||0)+1;var P=S+"-"+qy("5.3.6"+S+If[S]);return _?_+"-"+P:P}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return Pu(p)?"styled."+p:"Styled("+dw(p)+")"}(t):u,d=e.displayName&&e.componentId?Tf(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,y=e.shouldForwardProp;r&&t.shouldForwardProp&&(y=e.shouldForwardProp?function(p,_,S){return t.shouldForwardProp(p,_,S)&&e.shouldForwardProp(p,_,S)}:t.shouldForwardProp);var g,w=new _j(n,d,r?t.componentStyle:void 0),v=w.isStatic&&o.length===0,m=function(p,_){return function(S,P,E,C){var b=S.attrs,j=S.componentStyle,q=S.defaultProps,ce=S.foldedComponentIds,Te=S.shouldForwardProp,Se=S.styledComponentId,qe=S.target,tt=function(Y,A,fe){Y===void 0&&(Y=pi);var V=ir({},A,{theme:Y}),ze={};return fe.forEach(function(Ae){var ae,ne,it,Ot=Ae;for(ae in vl(Ot)&&(Ot=Ot(V)),Ot)V[ae]=ze[ae]=ae==="className"?(ne=ze[ae],it=Ot[ae],ne&&it?ne+" "+it:ne||it):Ot[ae]}),[V,ze]}(dR(P,T.useContext(Wy),q)||pi,P,b),Zt=tt[0],ge=tt[1],L=function(Y,A,fe,V){var ze=lR(),Ae=uR(),ae=A?Y.generateAndInjectStyles(pi,ze,Ae):Y.generateAndInjectStyles(fe,ze,Ae);return ae}(j,C,Zt),Q=E,Z=ge.$as||P.$as||ge.as||P.as||qe,me=Pu(Z),M=ge!==P?ir({},P,{},ge):P,B={};for(var F in M)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?B.as=M[F]:(Te?Te(F,ow,Z):!me||ow(F))&&(B[F]=M[F]));return P.style&&ge.style!==P.style&&(B.style=ir({},P.style,{},ge.style)),B.className=Array.prototype.concat(ce,Se,L!==Se?L:null,P.className,ge.className).filter(Boolean).join(" "),B.ref=Q,T.createElement(Z,B)}(g,p,_,v)};return m.displayName=c,(g=bo.forwardRef(m)).attrs=h,g.componentStyle=w,g.displayName=c,g.shouldForwardProp=y,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Wc,g.styledComponentId=d,g.target=r?t.target:t,g.withComponent=function(p){var _=e.componentId,S=function(E,C){if(E==null)return{};var b,j,q={},ce=Object.keys(E);for(j=0;j<ce.length;j++)b=ce[j],C.indexOf(b)>=0||(q[b]=E[b]);return q}(e,["componentId"]),P=_&&_+"-"+(Pu(p)?p:Tf(dw(p)));return fR(p,ir({},S,{attrs:h,componentId:P}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?hR({},t.defaultProps,p):p}}),g.toString=function(){return"."+g.styledComponentId},i&&nj(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var N=function(t){return function e(n,r,i){if(i===void 0&&(i=pi),!XA.isValidElementType(r))return Yl(1,String(r));var s=function(){return n(r,i,Hy.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,ir({},i,{},o))},s.attrs=function(o){return e(n,r,ir({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(fR,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){N[t]=N(t)});var bj=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=sR(n),Gc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ds(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Gc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function Nj(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Hy.apply(void 0,[t].concat(n)),s="sc-global-"+qy(JSON.stringify(i)),o=new bj(i,s);function a(u){var c=lR(),d=uR(),h=T.useContext(Wy),y=T.useRef(c.allocateGSInstance(s)).current;return c.server&&l(y,u,c,h,d),T.useLayoutEffect(function(){if(!c.server)return l(y,u,c,h,d),function(){return o.removeStyles(y,c)}},[y,u,c,h,d]),null}function l(u,c,d,h,y){if(o.isStatic)o.renderStyles(u,ij,d,y);else{var g=ir({},c,{theme:dR(c,h,a.defaultProps)});o.renderStyles(u,g,d,y)}}return bo.memo(a)}function pR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Hy.apply(void 0,[t].concat(n)).join(""),s=qy(i);return new cR(s,i)}const _h=N(t=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:f.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,Oj=pR`
  to {
     backdrop-filter: blur(3px);
  }
`,Lj=N.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`,mR=N(({className:t,children:e,addToPracticePlan:n})=>f.jsx("li",{className:t,children:f.jsx("button",{onClick:n,children:e})}))`
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
`,Mj=(t,e,n)=>{const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,l=e.clientY;(a<s||a>o||l<r||l>i)&&n()},Vj=N.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gR=N(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>f.jsxs("dialog",{ref:n,onClick:o=>Mj(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[f.jsxs(Vj,{children:[r,f.jsx(_h,{onClick:i})]}),t]}))`
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
      animation-name: ${Oj};
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
`,Ky=T.createContext(null),jj=({children:t})=>{const[e,n]=T.useState(),[r,i]=T.useState(""),s=T.useRef(),[o,a]=T.useState(!1),l=()=>{s.current&&a(!1)},u=()=>{var c;(c=s.current)==null||c.show(),a(!0)};return f.jsxs(Ky.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:u,closePanel:l},children:[t,f.jsx(gR,{title:r,passedRef:s,onClose:l,animationDirection:o,children:f.jsx(Lj,{children:e})})]})},Ze=N(({text:t,onClick:e,className:n,Icon:r,...i})=>f.jsxs("button",{className:n,onClick:e,...i,children:[f.jsx("span",{children:t}),!!r&&f.jsx("div",{children:f.jsx(r,{})})]}))`
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
`,yw=N(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>f.jsx("ul",{className:r,children:t.map(i=>f.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
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
 */function Xe(){return Xe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xe.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const vw="popstate";function Fj(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=gr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_l("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:fs(s))}function r(i,s){hs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Uj(e,n,r,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function hs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $j(){return Math.random().toString(36).substr(2,8)}function _w(t,e){return{usr:t.state,key:t.key,idx:e}}function _l(t,e,n,r){return n===void 0&&(n=null),Xe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gr(e):e,{state:n,key:e&&e.key||r||$j()})}function fs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Uj(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nt.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:w.location,delta:m})}function h(v,m){a=nt.Push;let p=_l(w.location,v,m);n&&n(p,v),u=c()+1;let _=_w(p,u),S=w.createHref(p);try{o.pushState(_,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(S)}s&&l&&l({action:a,location:w.location,delta:1})}function y(v,m){a=nt.Replace;let p=_l(w.location,v,m);n&&n(p,v),u=c();let _=_w(p,u),S=w.createHref(p);o.replaceState(_,"",S),s&&l&&l({action:a,location:w.location,delta:0})}function g(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:fs(v);return p=p.replace(/ $/,"%20"),ue(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(vw,d),l=v,()=>{i.removeEventListener(vw,d),l=null}},createHref(v){return e(i,v)},createURL:g,encodeLocation(v){let m=g(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(v){return o.go(v)}};return w}var Ye;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ye||(Ye={}));const zj=new Set(["lazy","caseSensitive","path","id","index","children"]);function Bj(t){return t.index===!0}function am(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ue(i.index!==!0||!i.children,"Cannot specify children on an index route"),ue(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Bj(i)){let l=Xe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Xe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=am(i.children,e,o,r)),l}})}function Js(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?gr(e):e,i=Lr(r.pathname||"/",n);if(i==null)return null;let s=yR(t);qj(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=n4(i);o=e4(s[a],l)}return o}function Hj(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function yR(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yR(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Xj(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vR(s.path))i(s,o,l)}),e}function vR(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vR(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function qj(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Zj(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wj=/^:[\w-]+$/,Kj=3,Gj=2,Qj=1,Yj=10,Jj=-2,ww=t=>t==="*";function Xj(t,e){let n=t.split("/"),r=n.length;return n.some(ww)&&(r+=Jj),e&&(r+=Gj),n.filter(i=>!ww(i)).reduce((i,s)=>i+(Wj.test(s)?Kj:s===""?Qj:Yj),r)}function Zj(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function e4(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lm({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Cr([i,c.pathname]),pathnameBase:s4(Cr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Cr([i,c.pathnameBase]))}return s}function lm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=t4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:y}=c;if(h==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const g=a[d];return y&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function t4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function n4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function r4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gr(t):t;return{pathname:n?n.startsWith("/")?n:i4(n,e):e,search:o4(r),hash:a4(i)}}function i4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _R(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gy(t,e){let n=_R(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Qy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=gr(t):(i=Xe({},t),ue(!i.pathname||!i.pathname.includes("?"),Sf("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),Sf("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),Sf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=r4(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),s4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,a4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Yy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function wR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ER=["post","put","patch","delete"],l4=new Set(ER),u4=["get",...ER],c4=new Set(u4),d4=new Set([301,302,303,307,308]),h4=new Set([307,308]),Af={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},f4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ra={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},TR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p4=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),IR="remix-router-transitions";function m4(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ue(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=R=>({hasErrorBoundary:I(R)})}else i=p4;let s={},o=am(t.routes,i,void 0,s),a,l=t.basename||"/",u=Xe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,h=null,y=null,g=null,w=t.hydrationData!=null,v=Js(o,t.history.location,l),m=null;if(v==null){let I=wn(404,{pathname:t.history.location.pathname}),{matches:R,route:x}=xw(o);v=R,m={[x.id]:I}}let p,_=v.some(I=>I.route.lazy),S=v.some(I=>I.route.loader);if(_)p=!1;else if(!S)p=!0;else if(u.v7_partialHydration){let I=t.hydrationData?t.hydrationData.loaderData:null,R=t.hydrationData?t.hydrationData.errors:null;p=v.every(x=>x.route.loader&&x.route.loader.hydrate!==!0&&(I&&I[x.route.id]!==void 0||R&&R[x.route.id]!==void 0))}else p=t.hydrationData!=null;let P,E={historyAction:t.history.action,location:t.history.location,matches:v,initialized:p,navigation:Af,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=nt.Pop,b=!1,j,q=!1,ce=new Map,Te=null,Se=!1,qe=!1,tt=[],Zt=[],ge=new Map,L=0,Q=-1,Z=new Map,me=new Set,M=new Map,B=new Map,F=new Set,Y=new Map,A=new Map,fe=!1;function V(){if(c=t.history.listen(I=>{let{action:R,location:x,delta:$}=I;if(fe){fe=!1;return}hs(A.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=dv({currentLocation:E.location,nextLocation:x,historyAction:R});if(K&&$!=null){fe=!0,t.history.go($*-1),Zl(K,{state:"blocked",location:x,proceed(){Zl(K,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),t.history.go($)},reset(){let pe=new Map(E.blockers);pe.set(K,ra),ae({blockers:pe})}});return}return de(R,x)}),n){R4(e,ce);let I=()=>C4(e,ce);e.addEventListener("pagehide",I),Te=()=>e.removeEventListener("pagehide",I)}return E.initialized||de(nt.Pop,E.location,{initialHydration:!0}),P}function ze(){c&&c(),Te&&Te(),d.clear(),j&&j.abort(),E.fetchers.forEach((I,R)=>Fr(R)),E.blockers.forEach((I,R)=>cv(R))}function Ae(I){return d.add(I),()=>d.delete(I)}function ae(I,R){R===void 0&&(R={}),E=Xe({},E,I);let x=[],$=[];u.v7_fetcherPersist&&E.fetchers.forEach((K,pe)=>{K.state==="idle"&&(F.has(pe)?$.push(pe):x.push(pe))}),[...d].forEach(K=>K(E,{deletedFetchers:$,unstable_viewTransitionOpts:R.viewTransitionOpts,unstable_flushSync:R.flushSync===!0})),u.v7_fetcherPersist&&(x.forEach(K=>E.fetchers.delete(K)),$.forEach(K=>Fr(K)))}function ne(I,R,x){var $,K;let{flushSync:pe}=x===void 0?{}:x,re=E.actionData!=null&&E.navigation.formMethod!=null&&Ln(E.navigation.formMethod)&&E.navigation.state==="loading"&&(($=I.state)==null?void 0:$._isRedirect)!==!0,ee;R.actionData?Object.keys(R.actionData).length>0?ee=R.actionData:ee=null:re?ee=E.actionData:ee=null;let X=R.loaderData?Cw(E.loaderData,R.loaderData,R.matches||[],R.errors):E.loaderData,_e=E.blockers;_e.size>0&&(_e=new Map(_e),_e.forEach((Oe,At)=>_e.set(At,ra)));let gt=b===!0||E.navigation.formMethod!=null&&Ln(E.navigation.formMethod)&&((K=I.state)==null?void 0:K._isRedirect)!==!0;a&&(o=a,a=void 0),Se||C===nt.Pop||(C===nt.Push?t.history.push(I,I.state):C===nt.Replace&&t.history.replace(I,I.state));let he;if(C===nt.Pop){let Oe=ce.get(E.location.pathname);Oe&&Oe.has(I.pathname)?he={currentLocation:E.location,nextLocation:I}:ce.has(I.pathname)&&(he={currentLocation:I,nextLocation:E.location})}else if(q){let Oe=ce.get(E.location.pathname);Oe?Oe.add(I.pathname):(Oe=new Set([I.pathname]),ce.set(E.location.pathname,Oe)),he={currentLocation:E.location,nextLocation:I}}ae(Xe({},R,{actionData:ee,loaderData:X,historyAction:C,location:I,initialized:!0,navigation:Af,revalidation:"idle",restoreScrollPosition:fv(I,R.matches||E.matches),preventScrollReset:gt,blockers:_e}),{viewTransitionOpts:he,flushSync:pe===!0}),C=nt.Pop,b=!1,q=!1,Se=!1,qe=!1,tt=[],Zt=[]}async function it(I,R){if(typeof I=="number"){t.history.go(I);return}let x=um(E.location,E.matches,l,u.v7_prependBasename,I,u.v7_relativeSplatPath,R==null?void 0:R.fromRouteId,R==null?void 0:R.relative),{path:$,submission:K,error:pe}=Ew(u.v7_normalizeFormMethod,!1,x,R),re=E.location,ee=_l(E.location,$,R&&R.state);ee=Xe({},ee,t.history.encodeLocation(ee));let X=R&&R.replace!=null?R.replace:void 0,_e=nt.Push;X===!0?_e=nt.Replace:X===!1||K!=null&&Ln(K.formMethod)&&K.formAction===E.location.pathname+E.location.search&&(_e=nt.Replace);let gt=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,he=(R&&R.unstable_flushSync)===!0,Oe=dv({currentLocation:re,nextLocation:ee,historyAction:_e});if(Oe){Zl(Oe,{state:"blocked",location:ee,proceed(){Zl(Oe,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),it(I,R)},reset(){let At=new Map(E.blockers);At.set(Oe,ra),ae({blockers:At})}});return}return await de(_e,ee,{submission:K,pendingError:pe,preventScrollReset:gt,replace:R&&R.replace,enableViewTransition:R&&R.unstable_viewTransition,flushSync:he})}function Ot(){if(qt(),ae({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){de(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}de(C||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function de(I,R,x){j&&j.abort(),j=null,C=I,Se=(x&&x.startUninterruptedRevalidation)===!0,FR(E.location,E.matches),b=(x&&x.preventScrollReset)===!0,q=(x&&x.enableViewTransition)===!0;let $=a||o,K=x&&x.overrideNavigation,pe=Js($,R,l),re=(x&&x.flushSync)===!0;if(!pe){let At=wn(404,{pathname:R.pathname}),{matches:_n,route:yt}=xw($);Th(),ne(R,{matches:_n,loaderData:{},errors:{[yt.id]:At}},{flushSync:re});return}if(E.initialized&&!qe&&w4(E.location,R)&&!(x&&x.submission&&Ln(x.submission.formMethod))){ne(R,{matches:pe},{flushSync:re});return}j=new AbortController;let ee=sa(t.history,R,j.signal,x&&x.submission),X,_e;if(x&&x.pendingError)_e={[ja(pe).route.id]:x.pendingError};else if(x&&x.submission&&Ln(x.submission.formMethod)){let At=await mt(ee,R,x.submission,pe,{replace:x.replace,flushSync:re});if(At.shortCircuited)return;X=At.pendingActionData,_e=At.pendingActionError,K=Rf(R,x.submission),re=!1,ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:gt,loaderData:he,errors:Oe}=await Re(ee,R,pe,K,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,x&&x.initialHydration===!0,re,X,_e);gt||(j=null,ne(R,Xe({matches:pe},X?{actionData:X}:{},{loaderData:he,errors:Oe})))}async function mt(I,R,x,$,K){K===void 0&&(K={}),qt();let pe=S4(R,x);ae({navigation:pe},{flushSync:K.flushSync===!0});let re,ee=dm($,R);if(!ee.route.action&&!ee.route.lazy)re={type:Ye.error,error:wn(405,{method:I.method,pathname:R.pathname,routeId:ee.route.id})};else if(re=await ia("action",I,ee,$,s,i,l,u.v7_relativeSplatPath),I.signal.aborted)return{shortCircuited:!0};if(Wi(re)){let X;return K&&K.replace!=null?X=K.replace:X=re.location===E.location.pathname+E.location.search,await Wn(E,re,{submission:x,replace:X}),{shortCircuited:!0}}if(Xs(re)){let X=ja($,ee.route.id);return(K&&K.replace)!==!0&&(C=nt.Push),{pendingActionData:{},pendingActionError:{[X.route.id]:re.error}}}if(qi(re))throw wn(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:re.data}}}async function Re(I,R,x,$,K,pe,re,ee,X,_e,gt){let he=$||Rf(R,K),Oe=K||pe||Dw(he),At=a||o,[_n,yt]=Tw(t.history,E,x,Oe,R,u.v7_partialHydration&&ee===!0,qe,tt,Zt,F,M,me,At,l,_e,gt);if(Th(Ne=>!(x&&x.some(Be=>Be.route.id===Ne))||_n&&_n.some(Be=>Be.route.id===Ne)),Q=++L,_n.length===0&&yt.length===0){let Ne=lv();return ne(R,Xe({matches:x,loaderData:{},errors:gt||null},_e?{actionData:_e}:{},Ne?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!Se&&(!u.v7_partialHydration||!ee)){yt.forEach(Be=>{let Gn=E.fetchers.get(Be.key),tu=oa(void 0,Gn?Gn.data:void 0);E.fetchers.set(Be.key,tu)});let Ne=_e||E.actionData;ae(Xe({navigation:he},Ne?Object.keys(Ne).length===0?{actionData:null}:{actionData:Ne}:{},yt.length>0?{fetchers:new Map(E.fetchers)}:{}),{flushSync:X})}yt.forEach(Ne=>{ge.has(Ne.key)&&$r(Ne.key),Ne.controller&&ge.set(Ne.key,Ne.controller)});let xs=()=>yt.forEach(Ne=>$r(Ne.key));j&&j.signal.addEventListener("abort",xs);let{results:Ih,loaderResults:Ps,fetcherResults:Ur}=await jr(E.matches,x,_n,yt,I);if(I.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",xs),yt.forEach(Ne=>ge.delete(Ne.key));let bi=Pw(Ih);if(bi){if(bi.idx>=_n.length){let Ne=yt[bi.idx-_n.length].key;me.add(Ne)}return await Wn(E,bi.result,{replace:re}),{shortCircuited:!0}}let{loaderData:Sh,errors:Ah}=Rw(E,x,_n,Ps,gt,yt,Ur,Y);Y.forEach((Ne,Be)=>{Ne.subscribe(Gn=>{(Gn||Ne.done)&&Y.delete(Be)})});let Rh=lv(),ks=uv(Q),eu=Rh||ks||yt.length>0;return Xe({loaderData:Sh,errors:Ah},eu?{fetchers:new Map(E.fetchers)}:{})}function ct(I,R,x,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(I)&&$r(I);let K=($&&$.unstable_flushSync)===!0,pe=a||o,re=um(E.location,E.matches,l,u.v7_prependBasename,x,u.v7_relativeSplatPath,R,$==null?void 0:$.relative),ee=Js(pe,re,l);if(!ee){be(I,R,wn(404,{pathname:re}),{flushSync:K});return}let{path:X,submission:_e,error:gt}=Ew(u.v7_normalizeFormMethod,!0,re,$);if(gt){be(I,R,gt,{flushSync:K});return}let he=dm(ee,X);if(b=($&&$.preventScrollReset)===!0,_e&&Ln(_e.formMethod)){Di(I,R,X,he,ee,K,_e);return}M.set(I,{routeId:R,path:X}),dt(I,R,X,he,ee,K,_e)}async function Di(I,R,x,$,K,pe,re){if(qt(),M.delete(I),!$.route.action&&!$.route.lazy){let Be=wn(405,{method:re.formMethod,pathname:x,routeId:R});be(I,R,Be,{flushSync:pe});return}let ee=E.fetchers.get(I);J(I,A4(re,ee),{flushSync:pe});let X=new AbortController,_e=sa(t.history,x,X.signal,re);ge.set(I,X);let gt=L,he=await ia("action",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(_e.signal.aborted){ge.get(I)===X&&ge.delete(I);return}if(u.v7_fetcherPersist&&F.has(I)){if(Wi(he)||Xs(he)){J(I,Hr(void 0));return}}else{if(Wi(he))if(ge.delete(I),Q>gt){J(I,Hr(void 0));return}else return me.add(I),J(I,oa(re)),Wn(E,he,{fetcherSubmission:re});if(Xs(he)){be(I,R,he.error);return}}if(qi(he))throw wn(400,{type:"defer-action"});let Oe=E.navigation.location||E.location,At=sa(t.history,Oe,X.signal),_n=a||o,yt=E.navigation.state!=="idle"?Js(_n,E.navigation.location,l):E.matches;ue(yt,"Didn't find any matches after fetcher action");let xs=++L;Z.set(I,xs);let Ih=oa(re,he.data);E.fetchers.set(I,Ih);let[Ps,Ur]=Tw(t.history,E,yt,re,Oe,!1,qe,tt,Zt,F,M,me,_n,l,{[$.route.id]:he.data},void 0);Ur.filter(Be=>Be.key!==I).forEach(Be=>{let Gn=Be.key,tu=E.fetchers.get(Gn),UR=oa(void 0,tu?tu.data:void 0);E.fetchers.set(Gn,UR),ge.has(Gn)&&$r(Gn),Be.controller&&ge.set(Gn,Be.controller)}),ae({fetchers:new Map(E.fetchers)});let bi=()=>Ur.forEach(Be=>$r(Be.key));X.signal.addEventListener("abort",bi);let{results:Sh,loaderResults:Ah,fetcherResults:Rh}=await jr(E.matches,yt,Ps,Ur,At);if(X.signal.aborted)return;X.signal.removeEventListener("abort",bi),Z.delete(I),ge.delete(I),Ur.forEach(Be=>ge.delete(Be.key));let ks=Pw(Sh);if(ks){if(ks.idx>=Ps.length){let Be=Ur[ks.idx-Ps.length].key;me.add(Be)}return Wn(E,ks.result)}let{loaderData:eu,errors:Ne}=Rw(E,E.matches,Ps,Ah,void 0,Ur,Rh,Y);if(E.fetchers.has(I)){let Be=Hr(he.data);E.fetchers.set(I,Be)}uv(xs),E.navigation.state==="loading"&&xs>Q?(ue(C,"Expected pending action"),j&&j.abort(),ne(E.navigation.location,{matches:yt,loaderData:eu,errors:Ne,fetchers:new Map(E.fetchers)})):(ae({errors:Ne,loaderData:Cw(E.loaderData,eu,yt,Ne),fetchers:new Map(E.fetchers)}),qe=!1)}async function dt(I,R,x,$,K,pe,re){let ee=E.fetchers.get(I);J(I,oa(re,ee?ee.data:void 0),{flushSync:pe});let X=new AbortController,_e=sa(t.history,x,X.signal);ge.set(I,X);let gt=L,he=await ia("loader",_e,$,K,s,i,l,u.v7_relativeSplatPath);if(qi(he)&&(he=await RR(he,_e.signal,!0)||he),ge.get(I)===X&&ge.delete(I),!_e.signal.aborted){if(F.has(I)){J(I,Hr(void 0));return}if(Wi(he))if(Q>gt){J(I,Hr(void 0));return}else{me.add(I),await Wn(E,he);return}if(Xs(he)){be(I,R,he.error);return}ue(!qi(he),"Unhandled fetcher deferred data"),J(I,Hr(he.data))}}async function Wn(I,R,x){let{submission:$,fetcherSubmission:K,replace:pe}=x===void 0?{}:x;R.revalidate&&(qe=!0);let re=_l(I.location,R.location,{_isRedirect:!0});if(ue(re,"Expected a location on the redirect navigation"),n){let Oe=!1;if(R.reloadDocument)Oe=!0;else if(TR.test(R.location)){const At=t.history.createURL(R.location);Oe=At.origin!==e.location.origin||Lr(At.pathname,l)==null}if(Oe){pe?e.location.replace(R.location):e.location.assign(R.location);return}}j=null;let ee=pe===!0?nt.Replace:nt.Push,{formMethod:X,formAction:_e,formEncType:gt}=I.navigation;!$&&!K&&X&&_e&&gt&&($=Dw(I.navigation));let he=$||K;if(h4.has(R.status)&&he&&Ln(he.formMethod))await de(ee,re,{submission:Xe({},he,{formAction:R.location}),preventScrollReset:b});else{let Oe=Rf(re,$);await de(ee,re,{overrideNavigation:Oe,fetcherSubmission:K,preventScrollReset:b})}}async function jr(I,R,x,$,K){let pe=await Promise.all([...x.map(X=>ia("loader",K,X,R,s,i,l,u.v7_relativeSplatPath)),...$.map(X=>X.matches&&X.match&&X.controller?ia("loader",sa(t.history,X.path,X.controller.signal),X.match,X.matches,s,i,l,u.v7_relativeSplatPath):{type:Ye.error,error:wn(404,{pathname:X.path})})]),re=pe.slice(0,x.length),ee=pe.slice(x.length);return await Promise.all([kw(I,x,re,re.map(()=>K.signal),!1,E.loaderData),kw(I,$.map(X=>X.match),ee,$.map(X=>X.controller?X.controller.signal:null),!0)]),{results:pe,loaderResults:re,fetcherResults:ee}}function qt(){qe=!0,tt.push(...Th()),M.forEach((I,R)=>{ge.has(R)&&(Zt.push(R),$r(R))})}function J(I,R,x){x===void 0&&(x={}),E.fetchers.set(I,R),ae({fetchers:new Map(E.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function be(I,R,x,$){$===void 0&&($={});let K=ja(E.matches,R);Fr(I),ae({errors:{[K.route.id]:x},fetchers:new Map(E.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Cs(I){return u.v7_fetcherPersist&&(B.set(I,(B.get(I)||0)+1),F.has(I)&&F.delete(I)),E.fetchers.get(I)||f4}function Fr(I){let R=E.fetchers.get(I);ge.has(I)&&!(R&&R.state==="loading"&&Z.has(I))&&$r(I),M.delete(I),Z.delete(I),me.delete(I),F.delete(I),E.fetchers.delete(I)}function Kn(I){if(u.v7_fetcherPersist){let R=(B.get(I)||0)-1;R<=0?(B.delete(I),F.add(I)):B.set(I,R)}else Fr(I);ae({fetchers:new Map(E.fetchers)})}function $r(I){let R=ge.get(I);ue(R,"Expected fetch controller: "+I),R.abort(),ge.delete(I)}function av(I){for(let R of I){let x=Cs(R),$=Hr(x.data);E.fetchers.set(R,$)}}function lv(){let I=[],R=!1;for(let x of me){let $=E.fetchers.get(x);ue($,"Expected fetcher: "+x),$.state==="loading"&&(me.delete(x),I.push(x),R=!0)}return av(I),R}function uv(I){let R=[];for(let[x,$]of Z)if($<I){let K=E.fetchers.get(x);ue(K,"Expected fetcher: "+x),K.state==="loading"&&($r(x),Z.delete(x),R.push(x))}return av(R),R.length>0}function VR(I,R){let x=E.blockers.get(I)||ra;return A.get(I)!==R&&A.set(I,R),x}function cv(I){E.blockers.delete(I),A.delete(I)}function Zl(I,R){let x=E.blockers.get(I)||ra;ue(x.state==="unblocked"&&R.state==="blocked"||x.state==="blocked"&&R.state==="blocked"||x.state==="blocked"&&R.state==="proceeding"||x.state==="blocked"&&R.state==="unblocked"||x.state==="proceeding"&&R.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+R.state);let $=new Map(E.blockers);$.set(I,R),ae({blockers:$})}function dv(I){let{currentLocation:R,nextLocation:x,historyAction:$}=I;if(A.size===0)return;A.size>1&&hs(!1,"A router only supports one blocker at a time");let K=Array.from(A.entries()),[pe,re]=K[K.length-1],ee=E.blockers.get(pe);if(!(ee&&ee.state==="proceeding")&&re({currentLocation:R,nextLocation:x,historyAction:$}))return pe}function Th(I){let R=[];return Y.forEach((x,$)=>{(!I||I($))&&(x.cancel(),R.push($),Y.delete($))}),R}function jR(I,R,x){if(h=I,g=R,y=x||null,!w&&E.navigation===Af){w=!0;let $=fv(E.location,E.matches);$!=null&&ae({restoreScrollPosition:$})}return()=>{h=null,g=null,y=null}}function hv(I,R){return y&&y(I,R.map($=>Hj($,E.loaderData)))||I.key}function FR(I,R){if(h&&g){let x=hv(I,R);h[x]=g()}}function fv(I,R){if(h){let x=hv(I,R),$=h[x];if(typeof $=="number")return $}return null}function $R(I){s={},a=am(I,i,void 0,s)}return P={get basename(){return l},get future(){return u},get state(){return E},get routes(){return o},get window(){return e},initialize:V,subscribe:Ae,enableScrollRestoration:jR,navigate:it,fetch:ct,revalidate:Ot,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:Cs,deleteFetcher:Kn,dispose:ze,getBlocker:VR,deleteBlocker:cv,_internalFetchControllers:ge,_internalActiveDeferreds:Y,_internalSetRoutes:$R},P}function g4(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function um(t,e,n,r,i,s,o,a){let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=Qy(i||".",Gy(l,s),Lr(t.pathname,n)||t.pathname,a==="path");return i==null&&(c.search=t.search,c.hash=t.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Jy(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Cr([n,c.pathname])),fs(c)}function Ew(t,e,n,r){if(!r||!g4(r))return{path:n};if(r.formMethod&&!I4(r.formMethod))return{path:n,error:wn(405,{method:r.formMethod})};let i=()=>({path:n,error:wn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=AR(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ln(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,g)=>{let[w,v]=g;return""+y+w+"="+v+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Ln(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}ue(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=cm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=cm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Aw(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Aw(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Ln(c.formMethod))return{path:n,submission:c};let d=gr(n);return e&&d.search&&Jy(d.search)&&l.append("index",""),d.search="?"+l,{path:fs(d),submission:c}}function y4(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Tw(t,e,n,r,i,s,o,a,l,u,c,d,h,y,g,w){let v=w?Object.values(w)[0]:g?Object.values(g)[0]:void 0,m=t.createURL(e.location),p=t.createURL(i),_=w?Object.keys(w)[0]:void 0,P=y4(n,_).filter((C,b)=>{let{route:j}=C;if(j.lazy)return!0;if(j.loader==null)return!1;if(s)return j.loader.hydrate?!0:e.loaderData[j.id]===void 0&&(!e.errors||e.errors[j.id]===void 0);if(v4(e.loaderData,e.matches[b],C)||a.some(Te=>Te===C.route.id))return!0;let q=e.matches[b],ce=C;return Iw(C,Xe({currentUrl:m,currentParams:q.params,nextUrl:p,nextParams:ce.params},r,{actionResult:v,defaultShouldRevalidate:o||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||SR(q,ce)}))}),E=[];return c.forEach((C,b)=>{if(s||!n.some(Se=>Se.route.id===C.routeId)||u.has(b))return;let j=Js(h,C.path,y);if(!j){E.push({key:b,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let q=e.fetchers.get(b),ce=dm(j,C.path),Te=!1;d.has(b)?Te=!1:l.includes(b)?Te=!0:q&&q.state!=="idle"&&q.data===void 0?Te=o:Te=Iw(ce,Xe({currentUrl:m,currentParams:e.matches[e.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:o})),Te&&E.push({key:b,routeId:C.routeId,path:C.path,matches:j,match:ce,controller:new AbortController})}),[P,E]}function v4(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function SR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Iw(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Sw(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ue(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";hs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!zj.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Xe({},e(i),{lazy:void 0}))}async function ia(t,e,n,r,i,s,o,a,l){l===void 0&&(l={});let u,c,d,h=w=>{let v,m=new Promise((p,_)=>v=_);return d=()=>v(),e.signal.addEventListener("abort",d),Promise.race([w({request:e,params:n.params,context:l.requestContext}),m])};try{let w=n.route[t];if(n.route.lazy)if(w){let v,m=await Promise.all([h(w).catch(p=>{v=p}),Sw(n.route,s,i)]);if(v)throw v;c=m[0]}else if(await Sw(n.route,s,i),w=n.route[t],w)c=await h(w);else if(t==="action"){let v=new URL(e.url),m=v.pathname+v.search;throw wn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:Ye.data,data:void 0};else if(w)c=await h(w);else{let v=new URL(e.url),m=v.pathname+v.search;throw wn(404,{pathname:m})}ue(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(w){u=Ye.error,c=w}finally{d&&e.signal.removeEventListener("abort",d)}if(T4(c)){let w=c.status;if(d4.has(w)){let m=c.headers.get("Location");if(ue(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!TR.test(m))m=um(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m,a);else if(!l.isStaticRequest){let p=new URL(e.url),_=m.startsWith("//")?new URL(p.protocol+m):new URL(m),S=Lr(_.pathname,o)!=null;_.origin===p.origin&&S&&(m=_.pathname+_.search+_.hash)}if(l.isStaticRequest)throw c.headers.set("Location",m),c;return{type:Ye.redirect,status:w,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Ye.error?Ye.error:Ye.data,response:c};let v;try{let m=c.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?c.body==null?v=null:v=await c.json():v=await c.text()}catch(m){return{type:Ye.error,error:m}}return u===Ye.error?{type:u,error:new Yy(w,c.statusText,v),headers:c.headers}:{type:Ye.data,data:v,statusCode:c.status,headers:c.headers}}if(u===Ye.error)return{type:u,error:c};if(E4(c)){var y,g;return{type:Ye.deferred,deferredData:c,statusCode:(y=c.init)==null?void 0:y.status,headers:((g=c.init)==null?void 0:g.headers)&&new Headers(c.init.headers)}}return{type:Ye.data,data:c}}function sa(t,e,n,r){let i=t.createURL(AR(e)).toString(),s={signal:n};if(r&&Ln(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=cm(r.formData):s.body=r.formData}return new Request(i,s)}function cm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Aw(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function _4(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(ue(!Wi(c),"Cannot handle redirect results in processLoaderData"),Xs(c)){let y=ja(t,h),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=g),s[h]=void 0,l||(l=!0,a=wR(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else qi(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Rw(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=_4(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:y}=s[c];ue(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(y&&y.signal.aborted))if(Xs(g)){let w=ja(t.matches,h==null?void 0:h.route.id);u&&u[w.route.id]||(u=Xe({},u,{[w.route.id]:g.error})),t.fetchers.delete(d)}else if(Wi(g))ue(!1,"Unhandled fetcher revalidation redirect");else if(qi(g))ue(!1,"Unhandled fetcher deferred data");else{let w=Hr(g.data);t.fetchers.set(d,w)}}return{loaderData:l,errors:u}}function Cw(t,e,n,r){let i=Xe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ja(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function xw(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function wn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Yy(t||500,o,new Error(a),!0)}function Pw(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Wi(n))return{result:n,idx:e}}}function AR(t){let e=typeof t=="string"?gr(t):t;return fs(Xe({},e,{hash:""}))}function w4(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function qi(t){return t.type===Ye.deferred}function Xs(t){return t.type===Ye.error}function Wi(t){return(t&&t.type)===Ye.redirect}function E4(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function T4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function I4(t){return c4.has(t.toLowerCase())}function Ln(t){return l4.has(t.toLowerCase())}async function kw(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!SR(u,l)&&(s&&s[l.route.id])!==void 0;if(qi(a)&&(i||c)){let d=r[o];ue(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await RR(a,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function RR(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ye.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ye.error,error:i}}return{type:Ye.data,data:t.deferredData.data}}}function Jy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function dm(t,e){let n=typeof e=="string"?gr(e).search:e.search;if(t[t.length-1].route.index&&Jy(n||""))return t[t.length-1];let r=_R(t);return r[r.length-1]}function Dw(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Rf(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function S4(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function oa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function A4(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Hr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function R4(t,e){try{let n=t.sessionStorage.getItem(IR);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function C4(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(IR,JSON.stringify(n))}catch(r){hs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}const Jl=T.createContext(null),Xy=T.createContext(null),Pi=T.createContext(null),wh=T.createContext(null),Vr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),CR=T.createContext(null);function x4(t,e){let{relative:n}=e===void 0?{}:e;Xl()||ue(!1);let{basename:r,navigator:i}=T.useContext(Pi),{hash:s,pathname:o,search:a}=Eh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xl(){return T.useContext(wh)!=null}function As(){return Xl()||ue(!1),T.useContext(wh).location}function xR(t){T.useContext(Pi).static||T.useLayoutEffect(t)}function ki(){let{isDataRoute:t}=T.useContext(Vr);return t?z4():P4()}function P4(){Xl()||ue(!1);let t=T.useContext(Jl),{basename:e,future:n,navigator:r}=T.useContext(Pi),{matches:i}=T.useContext(Vr),{pathname:s}=As(),o=JSON.stringify(Gy(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return xR(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Qy(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Cr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const k4=T.createContext(null);function D4(t){let e=T.useContext(Vr).outlet;return e&&T.createElement(k4.Provider,{value:t},e)}function Zy(){let{matches:t}=T.useContext(Vr),e=t[t.length-1];return e?e.params:{}}function Eh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(Pi),{matches:i}=T.useContext(Vr),{pathname:s}=As(),o=JSON.stringify(Gy(i,r.v7_relativeSplatPath));return T.useMemo(()=>Qy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function b4(t,e,n,r){Xl()||ue(!1);let{navigator:i}=T.useContext(Pi),{matches:s}=T.useContext(Vr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=As(),c;if(e){var d;let v=typeof e=="string"?gr(e):e;l==="/"||(d=v.pathname)!=null&&d.startsWith(l)||ue(!1),c=v}else c=u;let h=c.pathname||"/",y=h;if(l!=="/"){let v=l.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=Js(t,{pathname:y}),w=V4(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Cr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Cr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&w?T.createElement(wh.Provider,{value:{location:wl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nt.Pop}},w):w}function N4(){let t=U4(),e=wR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const O4=T.createElement(N4,null);class L4 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(Vr.Provider,{value:this.props.routeContext},T.createElement(CR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M4(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(Jl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Vr.Provider,{value:e},r)}function V4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ue(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:y}=n,g=d.route.loader&&h[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let y,g=!1,w=null,v=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||O4,l&&(u<0&&h===0?(B4("route-fallback",!1),g=!0,v=null):u===h&&(g=!0,v=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),p=()=>{let _;return y?_=w:g?_=v:d.route.Component?_=T.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,T.createElement(M4,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?T.createElement(L4,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var PR=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(PR||{}),Qc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Qc||{});function j4(t){let e=T.useContext(Jl);return e||ue(!1),e}function F4(t){let e=T.useContext(Xy);return e||ue(!1),e}function $4(t){let e=T.useContext(Vr);return e||ue(!1),e}function kR(t){let e=$4(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function U4(){var t;let e=T.useContext(CR),n=F4(Qc.UseRouteError),r=kR(Qc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function z4(){let{router:t}=j4(PR.UseNavigateStable),e=kR(Qc.UseNavigateStable),n=T.useRef(!1);return xR(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,wl({fromRouteId:e},s)))},[t,e])}const bw={};function B4(t,e,n){!e&&!bw[t]&&(bw[t]=!0)}function H4(t){return D4(t.context)}function Yn(t){ue(!1)}function q4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nt.Pop,navigator:s,static:o=!1,future:a}=t;Xl()&&ue(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:wl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=gr(r));let{pathname:c="/",search:d="",hash:h="",state:y=null,key:g="default"}=r,w=T.useMemo(()=>{let v=Lr(c,l);return v==null?null:{location:{pathname:v,search:d,hash:h,state:y,key:g},navigationType:i}},[l,c,d,h,y,g,i]);return w==null?null:T.createElement(Pi.Provider,{value:u},T.createElement(wh.Provider,{children:n,value:w}))}new Promise(()=>{});function hm(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,hm(r.props.children,s));return}r.type!==Yn&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hm(r.props.children,s)),n.push(o)}),n}function W4(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:T.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:T.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:T.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}function DR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function K4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function G4(t,e){return t.button===0&&(!e||e==="_self")&&!K4(t)}const Q4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Y4=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],J4="6";try{window.__reactRouterVersion=J4}catch{}function X4(t,e){return m4({basename:e==null?void 0:e.basename,future:ko({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Fj({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||Z4(),routes:t,mapRouteProperties:W4,window:e==null?void 0:e.window}).initialize()}function Z4(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ko({},e,{errors:eF(e.errors)})),e}function eF(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Yy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const bR=T.createContext({isTransitioning:!1}),tF=T.createContext(new Map),nF="startTransition",Nw=oC[nF],rF="flushSync",Ow=yP[rF];function iF(t){Nw?Nw(t):t()}function aa(t){Ow?Ow(t):t()}class sF{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function oF(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=T.useState(n.state),[o,a]=T.useState(),[l,u]=T.useState({isTransitioning:!1}),[c,d]=T.useState(),[h,y]=T.useState(),[g,w]=T.useState(),v=T.useRef(new Map),{v7_startTransition:m}=r||{},p=T.useCallback(C=>{m?iF(C):C()},[m]),_=T.useCallback((C,b)=>{let{deletedFetchers:j,unstable_flushSync:q,unstable_viewTransitionOpts:ce}=b;j.forEach(Se=>v.current.delete(Se)),C.fetchers.forEach((Se,qe)=>{Se.data!==void 0&&v.current.set(qe,Se.data)});let Te=n.window==null||typeof n.window.document.startViewTransition!="function";if(!ce||Te){q?aa(()=>s(C)):p(()=>s(C));return}if(q){aa(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})});let Se=n.window.document.startViewTransition(()=>{aa(()=>s(C))});Se.finished.finally(()=>{aa(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})})}),aa(()=>y(Se));return}h?(c&&c.resolve(),h.skipTransition(),w({state:C,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation})):(a(C),u({isTransitioning:!0,flushSync:!1,currentLocation:ce.currentLocation,nextLocation:ce.nextLocation}))},[n.window,h,c,v,p]);T.useLayoutEffect(()=>n.subscribe(_),[n,_]),T.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new sF)},[l]),T.useEffect(()=>{if(c&&o&&n.window){let C=o,b=c.promise,j=n.window.document.startViewTransition(async()=>{p(()=>s(C)),await b});j.finished.finally(()=>{d(void 0),y(void 0),a(void 0),u({isTransitioning:!1})}),y(j)}},[p,o,c,n.window]),T.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,h,i.location,o]),T.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),w(void 0))},[l.isTransitioning,g]),T.useEffect(()=>{},[]);let S=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,b,j)=>n.navigate(C,{state:b,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(C,b,j)=>n.navigate(C,{replace:!0,state:b,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[n]),P=n.basename||"/",E=T.useMemo(()=>({router:n,navigator:S,static:!1,basename:P}),[n,S,P]);return T.createElement(T.Fragment,null,T.createElement(Jl.Provider,{value:E},T.createElement(Xy.Provider,{value:i},T.createElement(tF.Provider,{value:v.current},T.createElement(bR.Provider,{value:l},T.createElement(q4,{basename:P,location:i.location,navigationType:i.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?T.createElement(aF,{routes:n.routes,future:n.future,state:i}):e))))),null)}function aF(t){let{routes:e,future:n,state:r}=t;return b4(e,void 0,r,n)}const lF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ho=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=DR(e,Q4),{basename:y}=T.useContext(Pi),g,w=!1;if(typeof u=="string"&&uF.test(u)&&(g=u,lF))try{let _=new URL(window.location.href),S=u.startsWith("//")?new URL(_.protocol+u):new URL(u),P=Lr(S.pathname,y);S.origin===_.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let v=x4(u,{relative:i}),m=dF(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(_){r&&r(_),_.defaultPrevented||m(_)}return T.createElement("a",ko({},h,{href:g||v,onClick:w||s?r:p,ref:n,target:l}))}),Cf=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=DR(e,Y4),h=Eh(l,{relative:d.relative}),y=As(),g=T.useContext(Xy),{navigator:w,basename:v}=T.useContext(Pi),m=g!=null&&hF(h)&&u===!0,p=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,_=y.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(_=_.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&v&&(S=Lr(S,v)||S);const P=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=_===p||!o&&_.startsWith(p)&&_.charAt(P)==="/",C=S!=null&&(S===p||!o&&S.startsWith(p)&&S.charAt(p.length)==="/"),b={isActive:E,isPending:C,isTransitioning:m},j=E?r:void 0,q;typeof s=="function"?q=s(b):q=[s,E?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let ce=typeof a=="function"?a(b):a;return T.createElement(Ho,ko({},d,{"aria-current":j,className:q,ref:n,style:ce,to:l,unstable_viewTransition:u}),typeof c=="function"?c(b):c)});var fm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fm||(fm={}));var Lw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lw||(Lw={}));function cF(t){let e=T.useContext(Jl);return e||ue(!1),e}function dF(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=ki(),u=As(),c=Eh(t,{relative:o});return T.useCallback(d=>{if(G4(d,n)){d.preventDefault();let h=r!==void 0?r:fs(u)===fs(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function hF(t,e){e===void 0&&(e={});let n=T.useContext(bR);n==null&&ue(!1);let{basename:r}=cF(fm.useViewTransitionState),i=Eh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Lr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Lr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return lm(i.pathname,o)!=null||lm(i.pathname,s)!=null}const Mw=N(({className:t,children:e,to:n})=>{const i=As().pathname===n;return f.jsx(Ho,{to:n,className:t,style:{"--link-background-color":i?"var(--blue900)":"white","--link-color":i?"white":"var(--blue900)"},children:e})})`
  display: inline-block;
  color: var(--link-color);
  border: 2px solid var(--blue900);
  padding: 8px 32px;
  background-color: var(--link-background-color);

  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`,NR=N(({className:t})=>f.jsxs("div",{className:t,children:[f.jsx(Mw,{to:"/sign_in",children:"Sign In"}),f.jsx(Mw,{to:"/sign_up",children:"Sign Up"})]}))`
  display: flex;
`,Vw=N(({Icon:t,className:e,...n})=>f.jsxs("div",{className:e,children:[f.jsx("input",{...n}),f.jsx(t,{})]}))`
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
`,fF=N(({className:t})=>{const e=ki(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Vo();KD(s,i.get("email"),i.get("password")),e("/")};return f.jsx("div",{className:t,children:f.jsxs("form",{onSubmit:n,children:[f.jsx(NR,{}),f.jsx(Vw,{Icon:AF,id:"email",type:"email",name:"email"}),f.jsx(Vw,{Icon:RF,id:"password",type:"password",name:"password"}),f.jsx(Ze,{type:"submit",text:"Sign In"})]})})})`
  --form-padding: 16px;
  height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  display: grid;
  place-items: center;

  & > form {
    display: grid;
    justify-content: center;
    align-content: space-between;
    gap: 8px;
    border: 1px solid white;
    padding: var(--form-padding);
    border-radius: 24px;
    aspect-ratio: 1;
    box-shadow: 0px 10px 15px var(--blue900);
  }
`,pF={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},ev=mg(pF),Me=LA(ev);II().then(t=>{t&&TI(ev)});Vo(ev);const mF=N(({className:t})=>{const{addToast:e,removeToast:n}=T.useContext(qo),r=ki(),i=Vo(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}WD(i,a.get("email"),a.get("password")).then(l=>{NV(Gt(Me,"users",l.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return f.jsx("div",{className:t,children:f.jsxs("form",{onSubmit:s,children:[f.jsx(NR,{}),f.jsxs("label",{htmlFor:"email",children:["Email:",f.jsx("input",{id:"email",type:"email",name:"email"})]}),f.jsxs("label",{htmlFor:"password",children:["Password:",f.jsx("input",{id:"password",type:"password",name:"password"})]}),f.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",f.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),f.jsx(Ze,{type:"submit",text:"Sign Up"})]})})})`
  height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  display: grid;
  place-items: center;
  color: white;
  font-size: 1em;

  & > form {
    display: grid;
    justify-content: center;
    gap: 8px;
    border: 1px solid white;
    padding: 16px;
    border-radius: 24px;
    box-shadow: 0px 10px 15px var(--blue900);
    aspect-ratio: 1;

    & > label {
      display: grid;
      gap: 4px;
      & > input {
        font-size: 1em;
      }
    }
  }
`,Rs=T.createContext(null),gF=({children:t})=>{const[e,n]=T.useState();return Vo().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),f.jsx(Rs.Provider,{value:e,children:t})},yF=N(Ze)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,vF=N.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`,_F=N(({className:t})=>{const e=T.useContext(Rs);return f.jsxs(f.Fragment,{children:[f.jsx("nav",{className:t,children:f.jsx("ul",{children:e?f.jsxs(f.Fragment,{children:[f.jsx("li",{children:f.jsx(Cf,{to:"/teams",children:"Teams"})}),f.jsx(vF,{children:e.email}),f.jsx("li",{children:f.jsx(yF,{text:"Sign out",onClick:()=>Vo().signOut()})})]}):f.jsxs(f.Fragment,{children:[f.jsx("li",{children:f.jsx(Cf,{to:"/sign_in",children:"Sign In"})}),f.jsx("li",{children:f.jsx(Cf,{to:"/sign_up",children:"Sign Up"})})]})})}),f.jsx(H4,{})]})})`
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
      padding-right: 8px;
      border-right: 1px groove rgba(255, 255, 255, 0.25);
    }

    & > li {
      padding-left: 8px;
      padding-right: 8px;
    }

    & > li:nth-of-type(2) {
      margin-left: auto;
    }
  }
`,pm=N(({className:t,children:e,title:n,...r})=>f.jsxs("details",{className:t,...r,children:[f.jsx("summary",{children:n}),e]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,wF=N(({className:t})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[f.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),f.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,EF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:f.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,TF=N(({className:t=""})=>f.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:f.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,IF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:f.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,SF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:f.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,AF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:f.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,RF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:f.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,tv=N(({className:t,children:e})=>f.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,CF=pR`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,nv=N(({className:t})=>f.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${CF} 500ms infinite;
`,xF=Nj`
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


`,PF=N(({className:t})=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:f.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,kF=N.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,DF=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},bF=(t,e)=>new Date(t,e,0).getDate(),NF=(t,e)=>new Date(t,e,1),OF=(t,e)=>{const r=((i,s)=>o=>{var a;if(!((a=i.current)!=null&&a.contains(o.target)))return typeof s=="function"?s(o):null})(t,e);T.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},LF=["January","February","March","April","May","June","July","August","September","October","November","December"],MF=["M","Tu","W","Th","F","Sa","Su"],VF=N.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,jF=N.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,FF=N.div`
  text-align: center;
`,$F=N.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,UF=(t,e)=>{const[n,r]=T.useState([]),i=bF(e,t+1);let s=NF(e,t).getDay()-1;return s===-1&&(s=6),T.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,l)=>l+1)];r(o)},[t,e]),n},zF=N(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,l]=T.useState(o),[u,c]=T.useState(s),d=UF(a,u),h=DF(new Date(i).getFullYear(),5),y=v=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(v).padStart(2,"0")}-${u}`)},g=()=>{l(v=>Number(v)===0?(c(m=>m-1),11):v-1)},w=()=>l(v=>Number(v)===11?(c(m=>m+1),11):v+1);return f.jsxs("div",{ref:e,className:t,popover:"true",children:[f.jsxs(jF,{children:[f.jsx("select",{value:`${a}/${u}`,onChange:v=>{const[m,p]=v.target.value.split("/");l(Number(m)),c(Number(p))},children:h.map(v=>LF.map((m,p)=>f.jsx("option",{value:`${p}/${v}`,children:`${m} , ${v}`},`${p}/${v}`)))}),f.jsx("button",{"aria-label":"left",onClick:g,children:"←"}),f.jsx("button",{"aria-label":"right",onClick:w,children:"→"})]}),f.jsxs(VF,{children:[MF.map(v=>f.jsx(FF,{children:v},`${v}-header`)),d.map((v,m)=>typeof v=="number"?f.jsx($F,{onClick:()=>y(v),$selected:new Date(i).getDate()===v&&a===o&&u===s,children:v},`${v}-${a}-${u}`):f.jsx("span",{},`blank-day-${m}`))]})]})})`
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
`;N(({className:t,value:e,setValue:n})=>{const r=T.useRef(null),i=T.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return OF(i,o=>{var a,l;(a=r.current)!=null&&a.contains(o.target)||(l=i.current)==null||l.hidePopover()}),f.jsxs("div",{className:t,children:[f.jsx(kF,{value:e,readOnly:!0}),f.jsx("button",{onClick:s,ref:r,children:f.jsx(PF,{})}),f.jsx(zF,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const BF=t=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",...t,children:f.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),HF={success:BF},qF={success:"var(--affirmative)"},jw=N(({className:t,variant:e,children:n,onClose:r})=>{const i=T.useRef(),s=HF[e];return T.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[]),f.jsxs("div",{className:t,popover:"auto",children:[f.jsx(s,{style:{color:qF[e]}}),f.jsx("div",{children:n}),f.jsx("button",{onClick:r,children:f.jsx(_h,{})})]})})`
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
`,mm=N(({toasts:t,className:e})=>{const n=T.useId();return f.jsx("ul",{className:e,children:t.map(({variant:r,onClose:i,message:s})=>f.jsx("li",{children:f.jsx(jw,{variant:r,onClose:i,children:s})},n))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: start;

  & > li > ${jw} {
    background-color: var(--secondary);
    color: white;
  }
`,qo=T.createContext(null),WF=({children:t})=>{const[e,n]=T.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return f.jsxs(qo.Provider,{value:{removeToast:i,addToast:r},children:[t,f.jsx(mm,{toasts:e})]})},Yi=N(({passedRef:t,className:e,children:n,onClose:r})=>f.jsxs("dialog",{ref:t,className:e,children:[f.jsx("button",{onClick:r,formNoValidate:!0,children:f.jsx(_h,{})}),n]}))`
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
`,KF=T.createContext(null),xf={didCatch:!1,error:null};class GF extends T.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=xf}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(xf)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&QF(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(xf)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const l={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(l);else if(r)a=T.createElement(r,l);else if(i===null||T.isValidElement(i))a=i;else throw o}return T.createElement(KF.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function QF(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const YF=N.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,JF=N.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,Fw=N(({children:t,passedRef:e,className:n})=>f.jsx("dialog",{ref:e,className:n,children:f.jsx("div",{children:t})}))`
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
`,XF=N(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=T.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return f.jsxs("li",{className:r,children:[f.jsx(Ho,{to:`/practice_plans/${t}`,children:s(e)}),f.jsx(JF,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),f.jsxs(Fw,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",f.jsx("br",{})," This action cannot be undone"," ",f.jsxs("div",{children:[f.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),f.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${Fw} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,ZF=N(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=ki(),i=s=>{s("/create")};return f.jsxs("main",{className:t,children:[f.jsxs(YF,{children:[f.jsx("h1",{children:"Practice plans"}),f.jsx(Ze,{onClick:()=>i(r),text:"Add Practice Plan"})]}),f.jsx("ul",{children:e.map(s=>f.jsx(XF,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
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
`;N(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState(!1),{addToast:s,removeToast:o}=T.useContext(qo),a=async u=>{await QA(Gt(Me,"practice_plan",u)),n(c=>c.filter(d=>d.id!==u)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},l=()=>(i(!0),mr(kn(Me,"practice_plan")).then(u=>{const c=u.docs.map(d=>({...d.data(),id:d.id})).sort((d,h)=>Number(h.date.seconds)-Number(d.date.seconds));n(c)}).catch(u=>{throw new Error(u)}).finally(()=>{i(!1)}));return T.useEffect(()=>{l()},[]),f.jsx(GF,{fallback:f.jsx("p",{children:"⚠️ Something went wrong"}),children:f.jsx("div",{className:t,children:r?f.jsx(tv,{children:f.jsx(nv,{})}):f.jsx(ZF,{practicePlans:e,deletePracticePlan:a})})})})`
  background: linear-gradient(var(--blue100), var(--blue900));
  height: calc(100% - 51px);
`;const e$=N(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>f.jsxs("g",{onClick:s,className:t,children:[f.jsx("circle",{r:i+5,cy:r,cx:n}),f.jsx("circle",{className:t,r:i,cy:r,cx:n}),f.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,$w=N.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,t$=N(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(u=>{const c=i.find(d=>d.moves.includes(u));return c?new Date(Number(c.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),l=u=>u==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(u))/864e5);return f.jsxs(mR,{className:s,addToPracticePlan:()=>r(n.id),children:[f.jsx("span",{children:n.name}),f.jsxs("span",{children:["Last Review: ",a]}),f.jsx($w,{$reviewUrgency:l(a),children:l(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${$w} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,n$=N(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=T.useContext(Ky),[l,u]=T.useState([]),{id:c=""}=Zy(),d=v=>mr(Ss(kn(Me,"practice_plan"),wi("teamId","==",v))).then(m=>{const p=m.docs.map(_=>({..._.data(),id:_.id})).sort((_,S)=>Number(S.date.seconds)-Number(_.date.seconds));u(p)}).catch(m=>{throw new Error(m)});T.useEffect(()=>{d(c)},[]);const h=50,y=70,g=v=>{const m="50%",p="25%",_="75%";return v%3===1||v===0?m:v%6===2||v%6===3?p:_},w=v=>{o(v),s()};return f.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((v,m)=>f.jsxs("g",{children:[f.jsx("line",{x1:g(m),y1:y+m*110,x2:g(m+1),y2:y+(m+1)*110}),f.jsx(e$,{r:h,y:y+m*110,x:g(m),onClick:()=>{a(v),w(()=>f.jsx(f.Fragment,{children:i.filter(p=>p.area===r&&p.position===v).map(p=>f.jsx(t$,{position:v,area:r,move:p,addToPracticePlan:n,practicePlans:l}))}))},text:v})]},v))})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));

  & > g > line {
    stroke: var(--orange);
  }

  ${mR} > span {
  }
`,OR=t=>!isNaN(t),rv=(t,e)=>e.map(n=>t.find(r=>r.id===n)),iv=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),Uw=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),r$=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(iv(rv(t,e)))),i$=async(t,e)=>{if(!OR(t.date)){alert("please submit a valid date");return}await Ny(kn(Me,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},s$=async(t,e,n)=>{const r=Gt(Me,"practice_plan",t);if(!OR(e.date)){alert("please submit a valid date");return}await fi(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},o$=N.div`
  height: 100%;
  overflow: scroll;
`,a$=N.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,l$=N.input``,zw=N(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:l})=>{const u=ki(),[c,d]=T.useState(window.innerWidth>850),{closePanel:h}=T.useContext(Ky);T.useEffect(()=>()=>h(),[]);const y=()=>{window.innerWidth>850&&d(!0)};T.useLayoutEffect(()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[]);const g=()=>{d(v=>!v)},w=v=>{const[m,p,_]=v.split("-");return new Date(`${p}/${_}/${m}`)};return f.jsxs("aside",{className:t,style:{"--transform":c?"translateX(0%)":"translateX(-100%)"},children:[f.jsx("button",{"aria-label":"show practice plan",onClick:g,children:f.jsx(SF,{})}),f.jsxs(o$,{children:["Date:",f.jsx(l$,{type:"date",value:r,onChange:v=>a(v.target.value)}),f.jsx("h1",{children:"Practice Plan"}),Object.entries(iv(rv(e,n))).map(([v,m])=>f.jsxs(T.Fragment,{children:[f.jsx("h2",{children:v}),m.map(p=>f.jsx(pm,{title:p.name,children:p.moves.map(({name:_,id:S})=>f.jsxs(c$,{children:[_,f.jsx(d$,{onClick:()=>i(S),children:f.jsx(_h,{})})]},`${p.name}=${_}`))},p.name))]},v)),f.jsxs(a$,{children:[!o&&f.jsx(Ze,{onClick:s,text:"Clear Practice Plan",Icon:u$,$level:"caution"}),f.jsx(Ze,{onClick:()=>r$(e,n),text:"Copy Practice Plan",Icon:wF}),f.jsx(Ze,{onClick:()=>{o?s$(o,{moves:n,date:w(r),teamId:l},u):i$({moves:n,date:w(r),teamId:l},u)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:EF})]})]})]})})`
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
`,u$=N(TF)`
  stroke: white;
`,c$=N.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,d$=N.button`
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
`,Bw=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},h$=t=>{const[e,n]=T.useState([]),[r,i]=T.useState(Bw(new Date));return T.useEffect(()=>{t&&by(Gt(Me,"practice_plan",t)).then(o=>{const a={...o.data(),id:o.id};i(Bw(new Date(Number(a.date.seconds)*1e3))),n(a.moves)})},[t]),[e,n,r,i]},f$=t=>mr(Ss(kn(Me,"moves"),wi("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),Hw=N(({className:t})=>{const[e,n]=T.useState("neutral"),[r,i]=T.useState([]),{addToast:s,removeToast:o}=T.useContext(qo),{practice_plan_id:a,id:l=""}=Zy(),[u,c,d,h]=h$(a);T.useEffect(()=>{f$(l).then(m=>i(m))},[l]);const y=()=>{h(new Date),c([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},g=m=>{c(p=>p.includes(m)?(s({variant:"success",message:"move already exists",onClose:()=>o("move already exists")}),p):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...p,m]))},w=m=>{c(p=>[...p].filter(_=>_!==m)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},v=m=>{h(m),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return f.jsxs("main",{className:t,children:[f.jsx(yw,{tabs:Uw(r).map(m=>m.name),currentTab:e,setCurrentTab:n}),f.jsx(zw,{moves:r,practicePlanMoves:u,practicePlanDate:d,clearPracticePlan:y,removeFromPracticePlan:w,currentPracticePlanId:a,updatePracticePlanDate:v,teamId:l}),f.jsx(n$,{addToPracticePlan:g,content:[...Uw(r).find(m=>m.name===e).positions],area:e,moves:r})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${zw} {
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

  & > ${yw} {
    background-color: var(--blue100);
  }
`,p$=N.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,m$=N(({className:t})=>{const[e,n]=T.useState({date:new Date,moves:[],id:""}),[r,i]=T.useState([]),s=As(),o=ki(),a=s.pathname.split("/").at(-1)??"",l=Ss(kn(Me,"practice_plan"),wi(yV(),"==",a)),u=()=>mr(kn(Me,"moves")).then(h=>{const y=h.docs.map(g=>({...g.data(),id:g.id}));i(y)}),c=()=>mr(l).then(h=>{const y=h.docs.map(w=>({...w.data(),id:w.id})),[g]=y;n(g)});T.useEffect(()=>{u(),c()},[]);const d=h=>{o("edit")};return f.jsxs("main",{className:t,children:[Object.entries(iv(rv(r,e.moves))).map(([h,y])=>f.jsxs(p$,{children:[f.jsx("h2",{children:h}),y.map(g=>f.jsx("li",{children:f.jsx(pm,{title:g.name,open:!0,children:f.jsx("ul",{children:g==null?void 0:g.moves.map(w=>f.jsx("li",{children:w.name},`${g.name}-${w.name}`))})})},g.name))]},h)),f.jsx(Ze,{onClick:()=>d(),text:"Edit Practice Plan",Icon:IF,$level:"caution"})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${Ze} {
    align-self: start;
  }

  & ${pm} {
    background-color: var(--secondary);
  }
`,Yc=N.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,g$=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],LR=kn(Me,"teams"),y$=()=>mr(LR).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),v$=N.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`,_$=N.li`
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
`,qw=N.div`
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
`,Ww=N.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,w$=N.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,E$=N(({className:t,teams:e,setTeams:n})=>{const r=T.useContext(Rs),{addToast:i,removeToast:s}=T.useContext(qo),o=T.useRef(),a=T.useRef(),l=()=>{o.current&&o.current.showModal()},u=()=>{o.current&&o.current.close()},c=()=>{a.current&&a.current.showModal()},d=()=>{a.current&&a.current.close()},h=g=>{g.preventDefault();const w=new FormData(g.currentTarget),v={name:w.get("teamName"),state:w.get("stateLocation"),joinRequests:[],goals:[],userIds:[r.uid],users:[{role:"admin",uid:r.uid}]};Ny(LR,v).then(m=>{n(p=>[...p,{...v,id:m.id}]),u()})},y=g=>{g.preventDefault();const w=new FormData(g.currentTarget),v=e.find(m=>m.id===w.get("teamToJoin"));if(v&&v.joinRequests.find(p=>p.uid===r.uid)){i({variant:"success",message:"You have an existing request to join this team",onClose:()=>s("You have an existing request to join this team")});return}fi(Gt(Me,"teams",w.get("teamToJoin")),{joinRequests:yl({userEmail:r.email,uid:r.uid,role:w.get("requestedRole")})}).then(()=>{d(),i({variant:"success",message:"Request Successfully Submitted",onClose:()=>s("Request Successfully Submitted")})})};return f.jsxs("main",{className:t,children:[f.jsx("h1",{children:"My Teams"}),f.jsx(v$,{children:e.filter(g=>g.userIds.includes(r.uid)).map(g=>f.jsx(Ho,{to:`${g.id}`,children:f.jsxs(_$,{children:[f.jsxs("span",{children:[g.name," (",g.state,")"]}),f.jsxs(Ww,{children:["Users ",f.jsx(qw,{children:g.users.length})]}),f.jsxs(Ww,{children:[f.jsx("span",{children:"Join Requests"})," ",f.jsx(qw,{children:g.joinRequests.length})]}),g.users.find(w=>w.uid===r.uid&&w.role==="admin")?f.jsx(Yc,{$color:"white",children:"Admin"}):f.jsx("span",{})]})},g.id))}),f.jsxs(w$,{children:[f.jsx(Ze,{text:"Request to Join a Team",onClick:c}),f.jsx(Ze,{text:"Create a Team",onClick:l})]}),f.jsx(Yi,{passedRef:o,onClose:u,children:f.jsxs("form",{onSubmit:h,children:[f.jsxs("label",{htmlFor:"teamName",children:[f.jsx("span",{children:"Team Name:"}),f.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),f.jsxs("label",{htmlFor:"stateLocation",children:[f.jsx("span",{children:"State:"}),f.jsx("select",{name:"stateLocation",id:"stateLocation",children:g$.map(g=>f.jsx("option",{value:g,children:g},g))})]}),f.jsx(Ze,{text:"Create",type:"submit"})]})}),f.jsx(Yi,{passedRef:a,onClose:d,children:f.jsxs("form",{onSubmit:y,children:[f.jsxs("label",{htmlFor:"teamToJoin",children:[f.jsx("span",{children:"Team:"}),f.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(g=>!g.userIds.includes(r.uid)).map(g=>f.jsxs("option",{value:g.id,children:[g.name," (",g.state,")"]},g.id))})]}),f.jsxs("label",{htmlFor:"requestedRole",children:[f.jsx("span",{children:"Requested Role:"}),f.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(g=>f.jsx("option",{value:g,children:g},g))})]}),f.jsx(Ze,{text:"Send Request to Join",type:"submit"})]})})]})})`
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

  & > ${Yi} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,T$=N(({className:t})=>{const[e,n]=T.useState([]),[r,i]=T.useState(!1);return T.useEffect(()=>{i(!0),y$().then(s=>n(s)).then(()=>i(!1))},[]),f.jsx("div",{className:t,children:r?f.jsx(tv,{children:f.jsx(nv,{})}):f.jsx(E$,{teams:e,setTeams:n})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
`,I$=N(Ze)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,sv=({roles:t,team:e,children:n})=>{const r=T.useContext(Rs),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},S$=N(({uid:t,role:e,team:n,setTeam:r,className:i})=>{const[s,o]=T.useState(""),a=T.useContext(Rs),l=T.useRef(),u=async g=>await by(Gt(Me,"users",g)).then(w=>({...w.data(),id:w.id}).email);T.useEffect(()=>{u(t).then(o)},[t]);const c=()=>{fi(Gt(Me,"teams",n.id),{users:Ma({uid:t,role:e}),userIds:Ma(t)}),r(g=>({...g,users:g.users.filter(w=>w.uid!==t),userIds:g.userIds.filter(w=>w!==t)}))},d=()=>{l.current&&l.current.showModal()},h=()=>{l.current&&l.current.close()},y=g=>{g.preventDefault();const w=new FormData(g.currentTarget);fi(Gt(Me,"teams",n.id),{users:Ma({uid:t,role:e})}),fi(Gt(Me,"teams",n.id),{users:yl({uid:t,role:w.get("newRole")})}),r(v=>{const m=v.users.find(p=>p.uid===t);if(!m){alert("could not find user!");return}return m.role=w.get("newRole"),{...v,users:[...v.users.filter(p=>p.uid!==t),m].filter(p=>p)}}),l.current&&h()};return f.jsxs("li",{className:i,children:[f.jsx("span",{children:s}),f.jsx(Yc,{children:e}),f.jsxs(sv,{roles:["admin"],team:n,children:[f.jsx(I$,{onClick:d,text:"Update Role"}),t!==a.uid&&f.jsx(ov,{$level:"caution",onClick:c,text:"Remove User"}),f.jsx(Yi,{passedRef:l,onClose:h,children:f.jsxs("form",{onSubmit:y,children:[f.jsxs("label",{htmlFor:"newRole",children:[f.jsx("span",{children:"New Role:"}),f.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(g=>f.jsx("option",{value:g,children:g},g))})]}),f.jsx(Ze,{text:"Update Role",type:"submit"})]})})]})]})})`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid white;

  @media screen and (width < 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content);
    border: 1px solid white;
    border-radius: 8px;

    ${Yc} {
      justify-self: center;
    }
  }
`,A$=t=>by(Gt(Me,"teams",t)).then(e=>({...e.data(),id:e.id})),R$=t=>mr(Ss(kn(Me,"moves"),wi("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),C$=t=>mr(Ss(kn(Me,"practice_plan"),wi("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),x$=["jv","varsity","state qualifier","state placer"],P$=["neutral","top","bottom"],k$=N(({className:t,moves:e,setMoves:n,teamId:r,team:i})=>{const s=T.useRef(),o=()=>{s.current&&s.current.showModal()},a=()=>{s.current&&s.current.close()},l=u=>{u.preventDefault();const c=new FormData(u.currentTarget),d={area:c.get("area"),level:c.get("level"),name:c.get("name"),position:c.get("position"),teamId:r};Ny(kn(Me,"moves"),d).then(h=>{n(y=>[...y,{...d,id:h.id}])}),a()};return f.jsxs("section",{className:t,children:[f.jsx("h2",{children:"Moves"}),f.jsx(D$,{children:e.map(u=>f.jsx(O$,{move:u}))}),f.jsxs(sv,{roles:["admin","base+"],team:i,children:[f.jsx(Ze,{onClick:o,text:"Add Move"}),f.jsx(Yi,{passedRef:s,onClose:a,children:f.jsxs("form",{onSubmit:l,children:[f.jsxs("label",{htmlFor:"name",children:[f.jsx("span",{children:"Move name:"}),f.jsx("input",{type:"text",name:"name",id:"name"})]}),f.jsxs("label",{htmlFor:"area",children:[f.jsx("span",{children:"Move Area:"}),f.jsx("select",{name:"area",id:"area",children:P$.map(u=>f.jsx("option",{value:u,children:u},u))})]}),f.jsxs("label",{htmlFor:"level",children:[f.jsx("span",{children:"Move Level:"}),f.jsx("select",{name:"level",id:"level",children:x$.map(u=>f.jsx("option",{value:u,children:u},u))})]}),f.jsxs("label",{htmlFor:"position",children:[f.jsx("span",{children:"Move Position:"}),f.jsx("input",{type:"text",name:"position",id:"position"})]}),f.jsx(Ze,{text:"Add Move",type:"submit"})]})})]})]})})`
  display: grid;
  gap: 16px;
`,D$=N.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,b$=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",N$=t=>t==="jv"?"JV":t==="varsity"?"V":t==="state qualifier"?"SQ":t==="state placer"?"SP":"",O$=N(({className:t,move:e})=>f.jsx("li",{className:t,children:f.jsxs("div",{children:[f.jsx("h3",{children:e.name}),f.jsxs("span",{children:[e.area," - ",e.position]}),f.jsx(Yc,{$color:b$(e.level),children:N$(e.level)})]})}))`
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
`,L$=N.span`
  font-size: 1.5em;
`,M$=N.span`
  font-size: 2em;
`,Xu=N(({className:t,title:e,subtext:n,value:r})=>f.jsxs("output",{className:t,children:[f.jsx(L$,{children:e}),f.jsx("p",{children:n}),f.jsx(M$,{children:r})]}))`
  background-color: var(--blue900);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 8px hsl(0deg 0% 1.55% / 50%);
`,V$=N.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media screen and (width >= 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
  }

  & > ${Xu} {
    width: auto;
  }
`,j$=N.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`,F$=N.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,Kw=N.section`
  display: grid;
  gap: 8px;
`,$$=N.ul`
  list-style: none;
`,U$=N.li`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  border: 1px solid white;
  border-radius: 8px;
  padding: 8px;

  @media screen and (width > 650px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border: none;
  }
`,z$=N(({className:t,team:e,setTeam:n,teamId:r})=>{const i=o=>{fi(Gt(Me,"teams",r),{joinRequests:Ma(o),users:yl({uid:o.uid,role:o.role}),userIds:yl(o.uid)}),n(a=>({...a,joinRequests:a.joinRequests.filter(l=>l.uid!==o.uid),users:[...a.users,{uid:o.uid,role:o.role}],userIds:[...a.userIds,o.uid]}))},s=o=>{fi(Gt(Me,"teams",r),{joinRequests:Ma(o)}),n(a=>({...a,joinRequests:a.joinRequests.filter(l=>l.uid!==o.uid)}))};return e?f.jsxs("div",{className:t,children:[f.jsx("h2",{children:"Admin"}),f.jsx(F$,{children:f.jsxs(sv,{roles:["admin","base+"],team:e,children:[f.jsxs(Kw,{children:[f.jsx("h3",{children:"Team Users"}),f.jsx(j$,{children:e.users.map(o=>f.jsx(S$,{team:e,setTeam:n,uid:o.uid,role:o.role}))})]}),f.jsxs(Kw,{children:[f.jsx("h3",{children:"Open Join Requests:"}),f.jsx($$,{children:e.joinRequests.map(o=>f.jsxs(U$,{children:[f.jsx("span",{children:o.userEmail}),f.jsx("span",{children:o.role}),f.jsx(Ze,{onClick:()=>i(o),text:"Accept"}),f.jsx(ov,{$level:"caution",onClick:()=>s(o),text:"Decline"})]}))})]})]})})]}):null})`
  display: grid;
  gap: 16px;
`,B$=N.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`,H$=N.div`
  &:not(:last-of-type) {
    border-bottom: 2px solid var(--blue900);
  }
  position: relative;
`,q$=N.li`
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
`,ov=N(Ze)`
  background: transparent;
  color: var(--caution);
  border: 2px solid var(--caution);
  padding: 8px;
  white-space: nowrap;

  &:hover {
    background-color: var(--blue900);
  }
`,W$=N(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],{addToast:i,removeToast:s}=T.useContext(qo),o=u=>new Date(Number(u)*1e3).toLocaleDateString(),a=u=>u.map(c=>({time:o(c.date.seconds),id:c.id})).reduce((c,d)=>{const[h,y,g]=d.time.split("/"),w=`${r[Number(h)-1]}, ${g}`;return{...c,[w]:[...String(w)in c?c[String(w)]:[],d]}},{}),l=async u=>{await QA(Gt(Me,"practice_plan",u)),n(c=>c.filter(d=>d.id!==u)),i({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>s("Practice Plan Successfully Deleted")})};return f.jsx("ul",{className:t,children:Object.entries(a(e)).map(([u,c])=>f.jsxs(H$,{children:[f.jsx(B$,{children:u}),c.map(d=>f.jsxs(q$,{children:[f.jsx(Ho,{to:`practice_plans/${d.id}`,children:d.time},d.id),f.jsx(ov,{$level:"caution",text:"Delete Practice Plan",onClick:()=>l(d.id)})]}))]},u))})})`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid var(--blue900);
`,K$=N(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=ki();return f.jsxs("section",{className:t,children:[f.jsx("h2",{children:"Practice Plans"}),f.jsx(W$,{practicePlans:e,setPracticePlans:n}),f.jsx(Ze,{text:"Add Practice Plan",onClick:()=>r("practice_plans/create")})]})})`
  display: grid;
  gap: 16px;
`,G$=N.table``,MR=N.tr``,en=N.td`
  padding: 4px 16px;
`,Q$=({goal:t,teamId:e,moves:n,practicePlans:r})=>{const[i,s]=T.useState();T.useEffect(()=>{o(t.moveId,e).then(l=>s(l))},[t.moveId,e]);const o=async(l,u)=>await mr(Ss(kn(Me,"practice_plan"),xV(wi("teamId","==",u),wi("moves","array-contains",l)))).then(c=>c.docs.length),a=n.find(l=>l.id===t.moveId)||{name:"",area:"",position:""};return f.jsxs(MR,{children:[f.jsx(en,{children:a.name}),f.jsx(en,{children:a.area}),f.jsx(en,{children:a.position}),f.jsx(en,{children:String(t.startDate)}),f.jsx(en,{children:String(t.endDate)}),f.jsxs(en,{children:[Math.round(t.practicePlanPercentage*100),"%"]}),f.jsxs(en,{children:[Math.round(Number(i)/r.length*100),"%"]})]})},Y$=N(({className:t,team:e,setTeam:n,moves:r,practicePlans:i})=>{const[s,o]=T.useState(.5),a=T.useRef(),l=()=>{a.current&&a.current.showModal()},u=()=>{a.current&&a.current.close()},c=d=>{d.preventDefault();const h=new FormData(d.currentTarget);if(!h.get("endDate")&&h.get("startDate")&&!h.get("move")){alert("Please enter all fields");return}if(Number(new Date(h.get("endDate")))-Number(new Date(h.get("startDate")))<0){alert("Start date cannot be after end date");return}const y={moveId:h.get("move"),startDate:h.get("startDate"),endDate:h.get("endDate"),practicePlanPercentage:s};fi(Gt(Me,"teams",e.id),{goals:yl(y)}),n(g=>({...g,goals:[...g.goals,y]})),u()};return f.jsxs("section",{className:t,children:[f.jsx("h2",{children:"Goals"}),f.jsxs(G$,{children:[f.jsx("thead",{children:f.jsxs(MR,{children:[f.jsx(en,{children:"Name"}),f.jsx(en,{children:"Area"}),f.jsx(en,{children:"Position"}),f.jsx(en,{children:"Start"}),f.jsx(en,{children:"End"}),f.jsx(en,{children:"Goal Percentage"}),f.jsx(en,{children:"Current Percentage"})]})}),f.jsx("tbody",{children:e.goals.map(d=>f.jsx(Q$,{goal:d,teamId:e.id,moves:r,practicePlans:i}))})]}),f.jsx(Ze,{text:"Add Goal",onClick:l}),f.jsx(Yi,{passedRef:a,onClose:u,children:f.jsxs("form",{onSubmit:c,children:[f.jsx("h2",{children:"Add a Goal"}),f.jsxs("label",{htmlFor:"move",children:[f.jsx("span",{children:"Move:"}),f.jsx("select",{name:"move",id:"move",children:r.map(({id:d,name:h,area:y,position:g})=>f.jsxs("option",{value:d,children:[h," - ",y," - ",g]},d))})]}),f.jsxs("label",{htmlFor:"startDate",children:[f.jsx("span",{children:"Start Date:"}),f.jsx("input",{type:"date",name:"startDate",id:"startDate"})]}),f.jsxs("label",{htmlFor:"endDate",children:[f.jsx("span",{children:"End Date:"}),f.jsx("input",{type:"date",name:"endDate",id:"endDate"})]}),f.jsxs("label",{htmlFor:"practicePlanPercentage",children:[f.jsx("span",{children:"Percentage of Practices"}),f.jsx("output",{children:Math.round(s*100)}),f.jsx("input",{type:"range",max:"1",min:"0",step:".01",value:s,onChange:d=>o(Number(d.target.value))})]}),f.jsx(Ze,{text:"Add Goal",type:"submit"})]})})]})})`
  min-height: 0;
  min-width: 0;
  overflow: auto;
`,J$=N.main`
  display: grid;
  gap: 64px;
  max-width: 90%;

  @media screen and (width > 550px) {
    max-width: 80%;
  }
`,X$=N.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
`,ku=N.hr`
  color: white;
`,Z$=N(({className:t})=>{const[e,n]=T.useState(),[r,i]=T.useState([]),[s,o]=T.useState([]),a=T.useContext(Rs),{id:l=""}=Zy(),u=ki();return T.useEffect(()=>{l&&(A$(l).then(n),R$(l).then(i),C$(l).then(o))},[l]),T.useEffect(()=>{a&&e&&!e.userIds.includes(a.uid)&&u("/")},[u,e,a]),f.jsx("div",{className:t,children:e?f.jsxs(J$,{children:[f.jsxs(X$,{children:[f.jsxs("h1",{children:[e.name," (",e.state,")"]}),f.jsxs(V$,{children:[f.jsx(Xu,{title:"Season",value:"Nov 2024 - Feb 2025"}),f.jsx(Xu,{title:"Practice Plans",subtext:"practice plans in the current season",value:s.length}),f.jsx(Xu,{title:"Moves",value:r.length})]})]}),f.jsx(ku,{}),f.jsx(Y$,{team:e,setTeam:n,moves:r,practicePlans:s}),f.jsx(ku,{}),f.jsx(K$,{practicePlans:s,setPracticePlans:o}),f.jsx(ku,{}),f.jsx(k$,{team:e,teamId:l,setMoves:i,moves:r}),f.jsx(ku,{}),f.jsx(z$,{setTeam:n,team:e,teamId:l})]}):f.jsx(tv,{children:f.jsx(nv,{})})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
  padding: 8px;
  display: flex;
  justify-content: center;

  & > h1 {
    margin: 0;
  }

  & a {
    color: white;
  }

  & ${Yi} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,e5=N.main`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;
`,t5=t=>mr(Ss(kn(Me,"teams"),wi("teamIds","array-contains",t))).then(e=>{e.docs.map(n=>({...n.data(),id:n.id}))});function n5(t){const e=T.useContext(Rs);return T.useEffect(()=>{e!=null&&e.uid&&t5(e.uid)},[e]),f.jsxs(e5,{children:[f.jsx("h1",{children:"Welcome to Home!"}),f.jsx(Ho,{to:"",children:"Go To Teams"})]})}const r5=X4(hm(f.jsxs(Yn,{path:"/",element:f.jsx(_F,{}),children:[f.jsx(Yn,{path:"/",element:f.jsx(n5,{})}),f.jsx(Yn,{path:"teams/:id/practice_plans/create",element:f.jsx(Hw,{})}),f.jsx(Yn,{path:"teams/:id/practice_plans/:practice_plan_id",element:f.jsx(m$,{})}),f.jsx(Yn,{path:"/teams",element:f.jsx(T$,{})}),f.jsx(Yn,{path:"/teams/:id",element:f.jsx(Z$,{})}),f.jsx(Yn,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:f.jsx(Hw,{})}),f.jsx(Yn,{path:"/sign_in",element:f.jsx(fF,{})}),f.jsx(Yn,{path:"/sign_up",element:f.jsx(mF,{})})]}))),i5=N(({className:t})=>f.jsx("div",{className:t,children:f.jsx(gF,{children:f.jsx(WF,{children:f.jsxs(jj,{children:[f.jsx(oF,{router:r5}),f.jsx(xF,{})]})})})}))`
  height: 100%;

  & > ${mm} {
    position: fixed;
    bottom: 16px;
    right: 50%;
    transform: translateX(50%);
  }

  & > ${gR} {
    background: linear-gradient(var(--blue100), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${mm} {
      right: 32px;
      transform: translateX(0%);
    }
  }
`,s5=lT(document.getElementById("root"));async function o5(){if(!["development","test"].includes("production"))return;const{worker:t}=await HR(()=>import("./browser-UkVwgeuH.js"),__vite__mapDeps([]));return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}o5().then(()=>{s5.render(f.jsx(T.StrictMode,{children:f.jsx(i5,{})}))});
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
