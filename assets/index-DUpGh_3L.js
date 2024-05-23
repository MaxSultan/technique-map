function sw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const pA="modulepreload",mA=function(t){return"/technique-map/"+t},jy={},gA=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=mA(a),a in jy)return;jy[a]=!0;const u=a.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":pA,u||(h.as="script",h.crossOrigin=""),h.href=a,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Np(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ow={exports:{}},Kc={},aw={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),yA=Symbol.for("react.portal"),vA=Symbol.for("react.fragment"),_A=Symbol.for("react.strict_mode"),wA=Symbol.for("react.profiler"),EA=Symbol.for("react.provider"),TA=Symbol.for("react.context"),IA=Symbol.for("react.forward_ref"),SA=Symbol.for("react.suspense"),AA=Symbol.for("react.memo"),CA=Symbol.for("react.lazy"),Fy=Symbol.iterator;function RA(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uw=Object.assign,cw={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=cw,this.updater=n||lw}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dw(){}dw.prototype=Uo.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=cw,this.updater=n||lw}var Lp=Op.prototype=new dw;Lp.constructor=Op;uw(Lp,Uo.prototype);Lp.isPureReactComponent=!0;var Uy=Array.isArray,hw=Object.prototype.hasOwnProperty,Mp={current:null},fw={key:!0,ref:!0,__self:!0,__source:!0};function pw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hw.call(e,r)&&!fw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sl,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function PA(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function xA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $y=/\/+/g;function uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xA(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sl:case yA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+uh(o,0):r,Uy(i)?(n="",t!=null&&(n=t.replace($y,"$&/")+"/"),Du(i,e,n,"",function(c){return c})):i!=null&&(Vp(i)&&(i=PA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+uh(s,a);o+=Du(s,e,n,u,i)}else if(u=RA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+uh(s,a++),o+=Du(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Nu={transition:null},bA={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Nu,ReactCurrentOwner:Mp};Pe.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!Vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pe.Component=Uo;Pe.Fragment=vA;Pe.Profiler=wA;Pe.PureComponent=Op;Pe.StrictMode=_A;Pe.Suspense=SA;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bA;Pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)hw.call(e,u)&&!fw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sl,type:t.type,key:i,ref:s,props:r,_owner:o}};Pe.createContext=function(t){return t={$$typeof:TA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:EA,_context:t},t.Consumer=t};Pe.createElement=pw;Pe.createFactory=function(t){var e=pw.bind(null,t);return e.type=t,e};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(t){return{$$typeof:IA,render:t}};Pe.isValidElement=Vp;Pe.lazy=function(t){return{$$typeof:CA,_payload:{_status:-1,_result:t},_init:kA}};Pe.memo=function(t,e){return{$$typeof:AA,type:t,compare:e===void 0?null:e}};Pe.startTransition=function(t){var e=Nu.transition;Nu.transition={};try{t()}finally{Nu.transition=e}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(t,e){return an.current.useCallback(t,e)};Pe.useContext=function(t){return an.current.useContext(t)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Pe.useEffect=function(t,e){return an.current.useEffect(t,e)};Pe.useId=function(){return an.current.useId()};Pe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Pe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Pe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Pe.useMemo=function(t,e){return an.current.useMemo(t,e)};Pe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Pe.useRef=function(t){return an.current.useRef(t)};Pe.useState=function(t){return an.current.useState(t)};Pe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Pe.useTransition=function(){return an.current.useTransition()};Pe.version="18.2.0";aw.exports=Pe;var D=aw.exports;const $o=Np(D),DA=sw({__proto__:null,default:$o},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NA=D,OA=Symbol.for("react.element"),LA=Symbol.for("react.fragment"),MA=Object.prototype.hasOwnProperty,VA=NA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jA={key:!0,ref:!0,__self:!0,__source:!0};function mw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MA.call(e,r)&&!jA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OA,type:t,key:s,ref:o,props:i,_owner:VA.current}}Kc.Fragment=LA;Kc.jsx=mw;Kc.jsxs=mw;ow.exports=Kc;var g=ow.exports,gw={exports:{}},Cn={},yw={exports:{}},vw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,ae){var ue=z.length;z.push(ae);e:for(;0<ue;){var Ae=ue-1>>>1,W=z[Ae];if(0<i(W,ae))z[Ae]=ae,z[ue]=W,ue=Ae;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],ue=z.pop();if(ue!==ae){z[0]=ue;e:for(var Ae=0,W=z.length,K=W>>>1;Ae<K;){var J=2*(Ae+1)-1,ie=z[J],M=J+1,he=z[M];if(0>i(ie,ue))M<W&&0>i(he,ie)?(z[Ae]=he,z[M]=ue,Ae=M):(z[Ae]=ie,z[J]=ue,Ae=J);else if(M<W&&0>i(he,ue))z[Ae]=he,z[M]=ue,Ae=M;else break e}}return ae}function i(z,ae){var ue=z.sortIndex-ae.sortIndex;return ue!==0?ue:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,I=!1,T=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var ae=n(c);ae!==null;){if(ae.callback===null)r(c);else if(ae.startTime<=z)r(c),ae.sortIndex=ae.expirationTime,e(u,ae);else break;ae=n(c)}}function O(z){if(A=!1,C(z),!T)if(n(u)!==null)T=!0,Bt(U);else{var ae=n(c);ae!==null&&He(O,ae.startTime-z)}}function U(z,ae){T=!1,A&&(A=!1,E(_),_=-1),I=!0;var ue=m;try{for(C(ae),f=n(u);f!==null&&(!(f.expirationTime>ae)||z&&!k());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,m=f.priorityLevel;var W=Ae(f.expirationTime<=ae);ae=t.unstable_now(),typeof W=="function"?f.callback=W:f===n(u)&&r(u),C(ae)}else r(u);f=n(u)}if(f!==null)var K=!0;else{var J=n(c);J!==null&&He(O,J.startTime-ae),K=!1}return K}finally{f=null,m=ue,I=!1}}var B=!1,y=null,_=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function b(){if(y!==null){var z=t.unstable_now();R=z;var ae=!0;try{ae=y(!0,z)}finally{ae?x():(B=!1,y=null)}}else B=!1}var x;if(typeof v=="function")x=function(){v(b)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ne=Ee.port2;Ee.port1.onmessage=b,x=function(){Ne.postMessage(null)}}else x=function(){P(b,0)};function Bt(z){y=z,B||(B=!0,x())}function He(z,ae){_=P(function(){z(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||I||(T=!0,Bt(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var ue=m;m=ae;try{return z()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ue=m;m=z;try{return ae()}finally{m=ue}},t.unstable_scheduleCallback=function(z,ae,ue){var Ae=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ae+ue:Ae):ue=Ae,z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ue+W,z={id:h++,callback:ae,priorityLevel:z,startTime:ue,expirationTime:W,sortIndex:-1},ue>Ae?(z.sortIndex=ue,e(c,z),n(u)===null&&z===n(c)&&(A?(E(_),_=-1):A=!0,He(O,ue-Ae))):(z.sortIndex=W,e(u,z),T||I||(T=!0,Bt(U))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var ae=m;return function(){var ue=m;m=ae;try{return z.apply(this,arguments)}finally{m=ue}}}})(vw);yw.exports=vw;var FA=yw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w=D,An=FA;function G(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ww=new Set,Xa={};function Cs(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(Xa[t]=e,t=0;t<e.length;t++)ww.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,UA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zy={},By={};function $A(t){return nf.call(By,t)?!0:nf.call(zy,t)?!1:UA.test(t)?By[t]=!0:(zy[t]=!0,!1)}function zA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BA(t,e,n,r){if(e===null||typeof e>"u"||zA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function Fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jp,Fp);$t[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jp,Fp);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jp,Fp);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var i=$t.hasOwnProperty(e)?$t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BA(e,n,i,r)&&(n=null),r||i===null?$A(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=_w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),Ew=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),ai=Symbol.for("react.lazy"),Iw=Symbol.for("react.offscreen"),Hy=Symbol.iterator;function da(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,ch;function Ia(t){if(ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ch=e&&e[1]||""}return`
`+ch+t}var dh=!1;function hh(t,e){if(!t||dh)return"";dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{dh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function HA(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=hh(t.type,!1),t;case 11:return t=hh(t.type.render,!1),t;case 1:return t=hh(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case Ys:return"Portal";case rf:return"Profiler";case $p:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tw:return(t.displayName||"Context")+".Consumer";case Ew:return(t._context.displayName||"Context")+".Provider";case zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case ai:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function qA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WA(t){var e=Sw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=WA(t))}function Aw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Sw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cw(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function uf(t,e){Cw(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function ho(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(G(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(G(92));if(Sa(n)){if(1<n.length)throw Error(G(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function Rw(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ky(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,xw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GA=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(t){GA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Na[e]=Na[t]})});function kw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Na.hasOwnProperty(t)&&Na[t]?(""+e).trim():e+"px"}function bw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KA=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(KA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(G(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(G(61))}if(e.style!=null&&typeof e.style!="object")throw Error(G(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function Hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,fo=null,po=null;function Qy(t){if(t=Rl(t)){if(typeof gf!="function")throw Error(G(280));var e=t.stateNode;e&&(e=Zc(e),gf(t.stateNode,t.type,e))}}function Dw(t){fo?po?po.push(t):po=[t]:fo=t}function Nw(){if(fo){var t=fo,e=po;if(po=fo=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function Ow(t,e){return t(e)}function Lw(){}var fh=!1;function Mw(t,e,n){if(fh)return t(e,n);fh=!0;try{return Ow(t,e,n)}finally{fh=!1,(fo!==null||po!==null)&&(Lw(),Nw())}}function Za(t,e){var n=t.stateNode;if(n===null)return null;var r=Zc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(G(231,e,typeof n));return n}var yf=!1;if(Fr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){yf=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{yf=!1}function QA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Oa=!1,nc=null,rc=!1,vf=null,YA={onError:function(t){Oa=!0,nc=t}};function XA(t,e,n,r,i,s,o,a,u){Oa=!1,nc=null,QA.apply(YA,arguments)}function JA(t,e,n,r,i,s,o,a,u){if(XA.apply(this,arguments),Oa){if(Oa){var c=nc;Oa=!1,nc=null}else throw Error(G(198));rc||(rc=!0,vf=c)}}function Rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(Rs(t)!==t)throw Error(G(188))}function ZA(t){var e=t.alternate;if(!e){if(e=Rs(t),e===null)throw Error(G(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yy(i),t;if(s===r)return Yy(i),e;s=s.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?t:e}function jw(t){return t=ZA(t),t!==null?Fw(t):null}function Fw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fw(t);if(e!==null)return e;t=t.sibling}return null}var Uw=An.unstable_scheduleCallback,Xy=An.unstable_cancelCallback,eC=An.unstable_shouldYield,tC=An.unstable_requestPaint,yt=An.unstable_now,nC=An.unstable_getCurrentPriorityLevel,qp=An.unstable_ImmediatePriority,$w=An.unstable_UserBlockingPriority,ic=An.unstable_NormalPriority,rC=An.unstable_LowPriority,zw=An.unstable_IdlePriority,Qc=null,hr=null;function iC(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:aC,sC=Math.log,oC=Math.LN2;function aC(t){return t>>>=0,t===0?32:31-(sC(t)/oC|0)|0}var du=64,hu=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Aa(a):(s&=o,s!==0&&(r=Aa(s)))}else o=n&~i,o!==0?r=Aa(o):s!==0&&(r=Aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function lC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=lC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bw(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function ph(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function cC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ve=0;function Hw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qw,Gp,Ww,Gw,Kw,wf=!1,fu=[],vi=null,_i=null,wi=null,el=new Map,tl=new Map,ui=[],dC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function fa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Rl(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hC(t,e,n,r,i){switch(e){case"focusin":return vi=fa(vi,t,e,n,r,i),!0;case"dragenter":return _i=fa(_i,t,e,n,r,i),!0;case"mouseover":return wi=fa(wi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return el.set(s,fa(el.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tl.set(s,fa(tl.get(s)||null,t,e,n,r,i)),!0}return!1}function Qw(t){var e=Ji(t.target);if(e!==null){var n=Rs(e);if(n!==null){if(e=n.tag,e===13){if(e=Vw(n),e!==null){t.blockedOn=e,Kw(t.priority,function(){Ww(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mf=r,n.target.dispatchEvent(r),mf=null}else return e=Rl(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Zy(t,e,n){Ou(t)&&n.delete(e)}function fC(){wf=!1,vi!==null&&Ou(vi)&&(vi=null),_i!==null&&Ou(_i)&&(_i=null),wi!==null&&Ou(wi)&&(wi=null),el.forEach(Zy),tl.forEach(Zy)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,fC)))}function nl(t){function e(i){return pa(i,t)}if(0<fu.length){pa(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vi!==null&&pa(vi,t),_i!==null&&pa(_i,t),wi!==null&&pa(wi,t),el.forEach(e),tl.forEach(e),n=0;n<ui.length;n++)r=ui[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ui.length&&(n=ui[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&ui.shift()}var mo=Gr.ReactCurrentBatchConfig,oc=!0;function pC(t,e,n,r){var i=Ve,s=mo.transition;mo.transition=null;try{Ve=1,Kp(t,e,n,r)}finally{Ve=i,mo.transition=s}}function mC(t,e,n,r){var i=Ve,s=mo.transition;mo.transition=null;try{Ve=4,Kp(t,e,n,r)}finally{Ve=i,mo.transition=s}}function Kp(t,e,n,r){if(oc){var i=Ef(t,e,n,r);if(i===null)Sh(t,e,r,ac,n),Jy(t,r);else if(hC(i,t,e,n,r))r.stopPropagation();else if(Jy(t,r),e&4&&-1<dC.indexOf(t)){for(;i!==null;){var s=Rl(i);if(s!==null&&qw(s),s=Ef(t,e,n,r),s===null&&Sh(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sh(t,e,r,null,n)}}var ac=null;function Ef(t,e,n,r){if(ac=null,t=Hp(r),t=Ji(t),t!==null)if(e=Rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function Yw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nC()){case qp:return 1;case $w:return 4;case ic:case rC:return 16;case zw:return 536870912;default:return 16}default:return 16}}var mi=null,Qp=null,Lu=null;function Xw(){if(Lu)return Lu;var t,e=Qp,n=e.length,r,i="value"in mi?mi.value:mi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function ev(){return!1}function Rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:ev,this.isPropagationStopped=ev,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=Rn(zo),Cl=ut({},zo,{view:0,detail:0}),gC=Rn(Cl),mh,gh,ma,Yc=ut({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(mh=t.screenX-ma.screenX,gh=t.screenY-ma.screenY):gh=mh=0,ma=t),mh)},movementY:function(t){return"movementY"in t?t.movementY:gh}}),tv=Rn(Yc),yC=ut({},Yc,{dataTransfer:0}),vC=Rn(yC),_C=ut({},Cl,{relatedTarget:0}),yh=Rn(_C),wC=ut({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),EC=Rn(wC),TC=ut({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IC=Rn(TC),SC=ut({},zo,{data:0}),nv=Rn(SC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RC[t])?!!e[t]:!1}function Xp(){return PC}var xC=ut({},Cl,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kC=Rn(xC),bC=ut({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rv=Rn(bC),DC=ut({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),NC=Rn(DC),OC=ut({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),LC=Rn(OC),MC=ut({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VC=Rn(MC),jC=[9,13,27,32],Jp=Fr&&"CompositionEvent"in window,La=null;Fr&&"documentMode"in document&&(La=document.documentMode);var FC=Fr&&"TextEvent"in window&&!La,Jw=Fr&&(!Jp||La&&8<La&&11>=La),iv=" ",sv=!1;function Zw(t,e){switch(t){case"keyup":return jC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function UC(t,e){switch(t){case"compositionend":return e1(e);case"keypress":return e.which!==32?null:(sv=!0,iv);case"textInput":return t=e.data,t===iv&&sv?null:t;default:return null}}function $C(t,e){if(Js)return t==="compositionend"||!Jp&&Zw(t,e)?(t=Xw(),Lu=Qp=mi=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jw&&e.locale!=="ko"?null:e.data;default:return null}}var zC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ov(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zC[t.type]:e==="textarea"}function t1(t,e,n,r){Dw(r),e=lc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ma=null,rl=null;function BC(t){h1(t,0)}function Xc(t){var e=to(t);if(Aw(e))return t}function HC(t,e){if(t==="change")return e}var n1=!1;if(Fr){var vh;if(Fr){var _h="oninput"in document;if(!_h){var av=document.createElement("div");av.setAttribute("oninput","return;"),_h=typeof av.oninput=="function"}vh=_h}else vh=!1;n1=vh&&(!document.documentMode||9<document.documentMode)}function lv(){Ma&&(Ma.detachEvent("onpropertychange",r1),rl=Ma=null)}function r1(t){if(t.propertyName==="value"&&Xc(rl)){var e=[];t1(e,rl,t,Hp(t)),Mw(BC,e)}}function qC(t,e,n){t==="focusin"?(lv(),Ma=e,rl=n,Ma.attachEvent("onpropertychange",r1)):t==="focusout"&&lv()}function WC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(rl)}function GC(t,e){if(t==="click")return Xc(e)}function KC(t,e){if(t==="input"||t==="change")return Xc(e)}function QC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:QC;function il(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nf.call(e,i)||!Xn(t[i],e[i]))return!1}return!0}function uv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cv(t,e){var n=uv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uv(n)}}function i1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s1(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YC(t){var e=s1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i1(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cv(n,s);var o=cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XC=Fr&&"documentMode"in document&&11>=document.documentMode,Zs=null,Tf=null,Va=null,If=!1;function dv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Zs==null||Zs!==tc(r)||(r=Zs,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&il(Va,r)||(Va=r,r=lc(Tf,"onSelect"),0<r.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zs)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var eo={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},wh={},o1={};Fr&&(o1=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function Jc(t){if(wh[t])return wh[t];if(!eo[t])return t;var e=eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o1)return wh[t]=e[n];return t}var a1=Jc("animationend"),l1=Jc("animationiteration"),u1=Jc("animationstart"),c1=Jc("transitionend"),d1=new Map,hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){d1.set(t,e),Cs(e,[t])}for(var Eh=0;Eh<hv.length;Eh++){var Th=hv[Eh],JC=Th.toLowerCase(),ZC=Th[0].toUpperCase()+Th.slice(1);Vi(JC,"on"+ZC)}Vi(a1,"onAnimationEnd");Vi(l1,"onAnimationIteration");Vi(u1,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(c1,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JA(r,e,void 0,t),t.currentTarget=null}function h1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;fv(i,a,c),s=u}}}if(rc)throw t=vf,rc=!1,vf=null,t}function Je(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var r=t+"__bubble";n.has(r)||(f1(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),f1(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function sl(t){if(!t[gu]){t[gu]=!0,ww.forEach(function(n){n!=="selectionchange"&&(eR.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Ih("selectionchange",!1,e))}}function f1(t,e,n,r){switch(Yw(e)){case 1:var i=pC;break;case 4:i=mC;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Mw(function(){var c=s,h=Hp(n),f=[];e:{var m=d1.get(t);if(m!==void 0){var I=Yp,T=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":I=kC;break;case"focusin":T="focus",I=yh;break;case"focusout":T="blur",I=yh;break;case"beforeblur":case"afterblur":I=yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=vC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=NC;break;case a1:case l1:case u1:I=EC;break;case c1:I=LC;break;case"scroll":I=gC;break;case"wheel":I=VC;break;case"copy":case"cut":case"paste":I=IC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=rv}var A=(e&4)!==0,P=!A&&t==="scroll",E=A?m!==null?m+"Capture":null:m;A=[];for(var v=c,C;v!==null;){C=v;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,E!==null&&(O=Za(v,E),O!=null&&A.push(ol(v,O,C)))),P)break;v=v.return}0<A.length&&(m=new I(m,T,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==mf&&(T=n.relatedTarget||n.fromElement)&&(Ji(T)||T[Ur]))break e;if((I||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,I?(T=n.relatedTarget||n.toElement,I=c,T=T?Ji(T):null,T!==null&&(P=Rs(T),T!==P||T.tag!==5&&T.tag!==6)&&(T=null)):(I=null,T=c),I!==T)){if(A=tv,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=rv,O="onPointerLeave",E="onPointerEnter",v="pointer"),P=I==null?m:to(I),C=T==null?m:to(T),m=new A(O,v+"leave",I,n,h),m.target=P,m.relatedTarget=C,O=null,Ji(h)===c&&(A=new A(E,v+"enter",T,n,h),A.target=C,A.relatedTarget=P,O=A),P=O,I&&T)t:{for(A=I,E=T,v=0,C=A;C;C=qs(C))v++;for(C=0,O=E;O;O=qs(O))C++;for(;0<v-C;)A=qs(A),v--;for(;0<C-v;)E=qs(E),C--;for(;v--;){if(A===E||E!==null&&A===E.alternate)break t;A=qs(A),E=qs(E)}A=null}else A=null;I!==null&&pv(f,m,I,A,!1),T!==null&&P!==null&&pv(f,P,T,A,!0)}}e:{if(m=c?to(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var U=HC;else if(ov(m))if(n1)U=KC;else{U=WC;var B=qC}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=GC);if(U&&(U=U(t,c))){t1(f,U,n,h);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&cf(m,"number",m.value)}switch(B=c?to(c):window,t){case"focusin":(ov(B)||B.contentEditable==="true")&&(Zs=B,Tf=c,Va=null);break;case"focusout":Va=Tf=Zs=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,dv(f,n,h);break;case"selectionchange":if(XC)break;case"keydown":case"keyup":dv(f,n,h)}var y;if(Jp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Js?Zw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Jw&&n.locale!=="ko"&&(Js||_!=="onCompositionStart"?_==="onCompositionEnd"&&Js&&(y=Xw()):(mi=h,Qp="value"in mi?mi.value:mi.textContent,Js=!0)),B=lc(c,_),0<B.length&&(_=new nv(_,t,null,n,h),f.push({event:_,listeners:B}),y?_.data=y:(y=e1(n),y!==null&&(_.data=y)))),(y=FC?UC(t,n):$C(t,n))&&(c=lc(c,"onBeforeInput"),0<c.length&&(h=new nv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=y))}h1(f,e)})}function ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Za(t,n),s!=null&&r.unshift(ol(t,s,i)),s=Za(t,e),s!=null&&r.push(ol(t,s,i))),t=t.return}return r}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Za(n,s),u!=null&&o.unshift(ol(n,u,a))):i||(u=Za(n,s),u!=null&&o.push(ol(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tR=/\r\n?/g,nR=/\u0000|\uFFFD/g;function mv(t){return(typeof t=="string"?t:""+t).replace(tR,`
`).replace(nR,"")}function yu(t,e,n){if(e=mv(e),mv(t)!==e&&n)throw Error(G(425))}function uc(){}var Sf=null,Af=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,rR=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,iR=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(t){return gv.resolve(null).then(t).catch(sR)}:Rf;function sR(t){setTimeout(function(){throw t})}function Ah(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),nl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nl(e)}function Ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),ur="__reactFiber$"+Bo,al="__reactProps$"+Bo,Ur="__reactContainer$"+Bo,Pf="__reactEvents$"+Bo,oR="__reactListeners$"+Bo,aR="__reactHandles$"+Bo;function Ji(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yv(t);t!==null;){if(n=t[ur])return n;t=yv(t)}return e}t=n,n=t.parentNode}return null}function Rl(t){return t=t[ur]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function to(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function Zc(t){return t[al]||null}var xf=[],no=-1;function ji(t){return{current:t}}function et(t){0>no||(t.current=xf[no],xf[no]=null,no--)}function Ge(t,e){no++,xf[no]=t.current,t.current=e}var Di={},Zt=ji(Di),fn=ji(!1),us=Di;function Io(t,e){var n=t.type.contextTypes;if(!n)return Di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pn(t){return t=t.childContextTypes,t!=null}function cc(){et(fn),et(Zt)}function vv(t,e,n){if(Zt.current!==Di)throw Error(G(168));Ge(Zt,e),Ge(fn,n)}function p1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(G(108,qA(t)||"Unknown",i));return ut({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Di,us=Zt.current,Ge(Zt,t),Ge(fn,fn.current),!0}function _v(t,e,n){var r=t.stateNode;if(!r)throw Error(G(169));n?(t=p1(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,et(fn),et(Zt),Ge(Zt,t)):et(fn),Ge(fn,n)}var xr=null,ed=!1,Ch=!1;function m1(t){xr===null?xr=[t]:xr.push(t)}function lR(t){ed=!0,m1(t)}function Fi(){if(!Ch&&xr!==null){Ch=!0;var t=0,e=Ve;try{var n=xr;for(Ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xr=null,ed=!1}catch(i){throw xr!==null&&(xr=xr.slice(t+1)),Uw(qp,Fi),i}finally{Ve=e,Ch=!1}}return null}var ro=[],io=0,hc=null,fc=0,bn=[],Dn=0,cs=null,kr=1,br="";function Qi(t,e){ro[io++]=fc,ro[io++]=hc,hc=t,fc=e}function g1(t,e,n){bn[Dn++]=kr,bn[Dn++]=br,bn[Dn++]=cs,cs=t;var r=kr;t=br;var i=32-Qn(r)-1;r&=~(1<<i),n+=1;var s=32-Qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kr=1<<32-Qn(e)+i|n<<i|r,br=s+t}else kr=1<<s|n<<i|r,br=t}function em(t){t.return!==null&&(Qi(t,1),g1(t,1,0))}function tm(t){for(;t===hc;)hc=ro[--io],ro[io]=null,fc=ro[--io],ro[io]=null;for(;t===cs;)cs=bn[--Dn],bn[Dn]=null,br=bn[--Dn],bn[Dn]=null,kr=bn[--Dn],bn[Dn]=null}var In=null,En=null,rt=!1,Kn=null;function y1(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,En=Ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:kr,overflow:br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,En=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(rt){var e=En;if(e){var n=e;if(!wv(t,e)){if(kf(t))throw Error(G(418));e=Ei(n.nextSibling);var r=In;e&&wv(t,e)?y1(r,n):(t.flags=t.flags&-4097|2,rt=!1,In=t)}}else{if(kf(t))throw Error(G(418));t.flags=t.flags&-4097|2,rt=!1,In=t}}}function Ev(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function vu(t){if(t!==In)return!1;if(!rt)return Ev(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=En)){if(kf(t))throw v1(),Error(G(418));for(;e;)y1(t,e),e=Ei(e.nextSibling)}if(Ev(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=Ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=In?Ei(t.stateNode.nextSibling):null;return!0}function v1(){for(var t=En;t;)t=Ei(t.nextSibling)}function So(){En=In=null,rt=!1}function nm(t){Kn===null?Kn=[t]:Kn.push(t)}var uR=Gr.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pc=ji(null),mc=null,so=null,rm=null;function im(){rm=so=mc=null}function sm(t){var e=pc.current;et(pc),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function go(t,e){mc=t,rm=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(mc===null)throw Error(G(308));so=t,mc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var Zi=null;function om(t){Zi===null?Zi=[t]:Zi.push(t)}function _1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,$r(t,r)}function $r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var li=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,De&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$r(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,$r(t,n)}function Vu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;li=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,I=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(m=e,I=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(I,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,m=typeof T=="function"?T.call(I,f,m):T,m==null)break e;f=ut({},f,m);break e;case 2:li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else I={eventTime:I,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=I,u=f):h=h.next=I,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=f}}function Iv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var E1=new _w.Component().refs;function Nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var td={isMounted:function(t){return(t=t._reactInternals)?Rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=sn(),i=Si(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Yn(e,t,i,r),Vu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=sn(),i=Si(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Yn(e,t,i,r),Vu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),r=Si(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ti(t,i,r),e!==null&&(Yn(e,t,r,n),Vu(e,t,r))}};function Sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!il(n,r)||!il(i,s):!0}function T1(t,e,n){var r=!1,i=Di,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(i=pn(e)?us:Zt.current,r=e.contextTypes,s=(r=r!=null)?Io(t,i):Di),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=td,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Av(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&td.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=E1,am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jn(s):(s=pn(e)?us:Zt.current,i.context=Io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&td.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===E1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cv(t){var e=t._init;return e(t._payload)}function I1(t){function e(E,v){if(t){var C=E.deletions;C===null?(E.deletions=[v],E.flags|=16):C.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Ai(E,v),E.index=0,E.sibling=null,E}function s(E,v,C){return E.index=C,t?(C=E.alternate,C!==null?(C=C.index,C<v?(E.flags|=2,v):C):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,C,O){return v===null||v.tag!==6?(v=Nh(C,E.mode,O),v.return=E,v):(v=i(v,C),v.return=E,v)}function u(E,v,C,O){var U=C.type;return U===Xs?h(E,v,C.props.children,O,C.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ai&&Cv(U)===v.type)?(O=i(v,C.props),O.ref=ga(E,v,C),O.return=E,O):(O=Bu(C.type,C.key,C.props,null,E.mode,O),O.ref=ga(E,v,C),O.return=E,O)}function c(E,v,C,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Oh(C,E.mode,O),v.return=E,v):(v=i(v,C.children||[]),v.return=E,v)}function h(E,v,C,O,U){return v===null||v.tag!==7?(v=os(C,E.mode,O,U),v.return=E,v):(v=i(v,C),v.return=E,v)}function f(E,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nh(""+v,E.mode,C),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return C=Bu(v.type,v.key,v.props,null,E.mode,C),C.ref=ga(E,null,v),C.return=E,C;case Ys:return v=Oh(v,E.mode,C),v.return=E,v;case ai:var O=v._init;return f(E,O(v._payload),C)}if(Sa(v)||da(v))return v=os(v,E.mode,C,null),v.return=E,v;_u(E,v)}return null}function m(E,v,C,O){var U=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:a(E,v,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case lu:return C.key===U?u(E,v,C,O):null;case Ys:return C.key===U?c(E,v,C,O):null;case ai:return U=C._init,m(E,v,U(C._payload),O)}if(Sa(C)||da(C))return U!==null?null:h(E,v,C,O,null);_u(E,C)}return null}function I(E,v,C,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(C)||null,a(v,E,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case lu:return E=E.get(O.key===null?C:O.key)||null,u(v,E,O,U);case Ys:return E=E.get(O.key===null?C:O.key)||null,c(v,E,O,U);case ai:var B=O._init;return I(E,v,C,B(O._payload),U)}if(Sa(O)||da(O))return E=E.get(C)||null,h(v,E,O,U,null);_u(v,O)}return null}function T(E,v,C,O){for(var U=null,B=null,y=v,_=v=0,S=null;y!==null&&_<C.length;_++){y.index>_?(S=y,y=null):S=y.sibling;var R=m(E,y,C[_],O);if(R===null){y===null&&(y=S);break}t&&y&&R.alternate===null&&e(E,y),v=s(R,v,_),B===null?U=R:B.sibling=R,B=R,y=S}if(_===C.length)return n(E,y),rt&&Qi(E,_),U;if(y===null){for(;_<C.length;_++)y=f(E,C[_],O),y!==null&&(v=s(y,v,_),B===null?U=y:B.sibling=y,B=y);return rt&&Qi(E,_),U}for(y=r(E,y);_<C.length;_++)S=I(y,E,_,C[_],O),S!==null&&(t&&S.alternate!==null&&y.delete(S.key===null?_:S.key),v=s(S,v,_),B===null?U=S:B.sibling=S,B=S);return t&&y.forEach(function(k){return e(E,k)}),rt&&Qi(E,_),U}function A(E,v,C,O){var U=da(C);if(typeof U!="function")throw Error(G(150));if(C=U.call(C),C==null)throw Error(G(151));for(var B=U=null,y=v,_=v=0,S=null,R=C.next();y!==null&&!R.done;_++,R=C.next()){y.index>_?(S=y,y=null):S=y.sibling;var k=m(E,y,R.value,O);if(k===null){y===null&&(y=S);break}t&&y&&k.alternate===null&&e(E,y),v=s(k,v,_),B===null?U=k:B.sibling=k,B=k,y=S}if(R.done)return n(E,y),rt&&Qi(E,_),U;if(y===null){for(;!R.done;_++,R=C.next())R=f(E,R.value,O),R!==null&&(v=s(R,v,_),B===null?U=R:B.sibling=R,B=R);return rt&&Qi(E,_),U}for(y=r(E,y);!R.done;_++,R=C.next())R=I(y,E,_,R.value,O),R!==null&&(t&&R.alternate!==null&&y.delete(R.key===null?_:R.key),v=s(R,v,_),B===null?U=R:B.sibling=R,B=R);return t&&y.forEach(function(b){return e(E,b)}),rt&&Qi(E,_),U}function P(E,v,C,O){if(typeof C=="object"&&C!==null&&C.type===Xs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case lu:e:{for(var U=C.key,B=v;B!==null;){if(B.key===U){if(U=C.type,U===Xs){if(B.tag===7){n(E,B.sibling),v=i(B,C.props.children),v.return=E,E=v;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ai&&Cv(U)===B.type){n(E,B.sibling),v=i(B,C.props),v.ref=ga(E,B,C),v.return=E,E=v;break e}n(E,B);break}else e(E,B);B=B.sibling}C.type===Xs?(v=os(C.props.children,E.mode,O,C.key),v.return=E,E=v):(O=Bu(C.type,C.key,C.props,null,E.mode,O),O.ref=ga(E,v,C),O.return=E,E=O)}return o(E);case Ys:e:{for(B=C.key;v!==null;){if(v.key===B)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(E,v.sibling),v=i(v,C.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Oh(C,E.mode,O),v.return=E,E=v}return o(E);case ai:return B=C._init,P(E,v,B(C._payload),O)}if(Sa(C))return T(E,v,C,O);if(da(C))return A(E,v,C,O);_u(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,C),v.return=E,E=v):(n(E,v),v=Nh(C,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return P}var Ao=I1(!0),S1=I1(!1),Pl={},fr=ji(Pl),ll=ji(Pl),ul=ji(Pl);function es(t){if(t===Pl)throw Error(G(174));return t}function lm(t,e){switch(Ge(ul,e),Ge(ll,t),Ge(fr,Pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}et(fr),Ge(fr,e)}function Co(){et(fr),et(ll),et(ul)}function A1(t){es(ul.current);var e=es(fr.current),n=hf(e,t.type);e!==n&&(Ge(ll,t),Ge(fr,n))}function um(t){ll.current===t&&(et(fr),et(ll))}var at=ji(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rh=[];function cm(){for(var t=0;t<Rh.length;t++)Rh[t]._workInProgressVersionPrimary=null;Rh.length=0}var ju=Gr.ReactCurrentDispatcher,Ph=Gr.ReactCurrentBatchConfig,ds=0,lt=null,At=null,xt=null,vc=!1,ja=!1,cl=0,cR=0;function Gt(){throw Error(G(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(ds=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?pR:mR,t=n(r,i),ja){s=0;do{if(ja=!1,cl=0,25<=s)throw Error(G(301));s+=1,xt=At=null,e.updateQueue=null,ju.current=gR,t=n(r,i)}while(ja)}if(ju.current=_c,e=At!==null&&At.next!==null,ds=0,xt=At=lt=null,vc=!1,e)throw Error(G(300));return t}function fm(){var t=cl!==0;return cl=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?lt.memoizedState=xt=t:xt=xt.next=t,xt}function Fn(){if(At===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=xt===null?lt.memoizedState:xt.next;if(e!==null)xt=e,At=t;else{if(t===null)throw Error(G(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},xt===null?lt.memoizedState=xt=t:xt=xt.next=t}return xt}function dl(t,e){return typeof e=="function"?e(t):e}function xh(t){var e=Fn(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=At,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ds&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,lt.lanes|=h,hs|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Xn(r,e.memoizedState)||(hn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,lt.lanes|=s,hs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kh(t){var e=Fn(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Xn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function C1(){}function R1(t,e){var n=lt,r=Fn(),i=e(),s=!Xn(r.memoizedState,i);if(s&&(r.memoizedState=i,hn=!0),r=r.queue,pm(k1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,hl(9,x1.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(G(349));ds&30||P1(n,e,i)}return i}function P1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x1(t,e,n,r){e.value=n,e.getSnapshot=r,b1(e)&&D1(t)}function k1(t,e,n){return n(function(){b1(e)&&D1(t)})}function b1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function D1(t){var e=$r(t,1);e!==null&&Yn(e,t,1,-1)}function Rv(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e.queue=t,t=t.dispatch=fR.bind(null,lt,t),[e.memoizedState,t]}function hl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N1(){return Fn().memoizedState}function Fu(t,e,n,r){var i=ar();lt.flags|=t,i.memoizedState=hl(1|e,n,void 0,r===void 0?null:r)}function nd(t,e,n,r){var i=Fn();r=r===void 0?null:r;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=hl(e,n,s,r);return}}lt.flags|=t,i.memoizedState=hl(1|e,n,s,r)}function Pv(t,e){return Fu(8390656,8,t,e)}function pm(t,e){return nd(2048,8,t,e)}function O1(t,e){return nd(4,2,t,e)}function L1(t,e){return nd(4,4,t,e)}function M1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function V1(t,e,n){return n=n!=null?n.concat([t]):null,nd(4,4,M1.bind(null,e,t),n)}function mm(){}function j1(t,e){var n=Fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F1(t,e){var n=Fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function U1(t,e,n){return ds&21?(Xn(n,e)||(n=Bw(),lt.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function dR(t,e){var n=Ve;Ve=n!==0&&4>n?n:4,t(!0);var r=Ph.transition;Ph.transition={};try{t(!1),e()}finally{Ve=n,Ph.transition=r}}function $1(){return Fn().memoizedState}function hR(t,e,n){var r=Si(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z1(t))B1(e,n);else if(n=_1(t,e,n,r),n!==null){var i=sn();Yn(n,t,r,i),H1(n,e,r)}}function fR(t,e,n){var r=Si(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z1(t))B1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Xn(a,o)){var u=e.interleaved;u===null?(i.next=i,om(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_1(t,e,i,r),n!==null&&(i=sn(),Yn(n,t,r,i),H1(n,e,r))}}function z1(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function B1(t,e){ja=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function H1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var _c={readContext:jn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},pR={readContext:jn,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Pv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fu(4194308,4,M1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fu(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ar();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hR.bind(null,lt,t),[r.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:Rv,useDebugValue:mm,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=Rv(!1),e=t[0];return t=dR.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=lt,i=ar();if(rt){if(n===void 0)throw Error(G(407));n=n()}else{if(n=e(),kt===null)throw Error(G(349));ds&30||P1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Pv(k1.bind(null,r,s,t),[t]),r.flags|=2048,hl(9,x1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ar(),e=kt.identifierPrefix;if(rt){var n=br,r=kr;n=(r&~(1<<32-Qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mR={readContext:jn,useCallback:j1,useContext:jn,useEffect:pm,useImperativeHandle:V1,useInsertionEffect:O1,useLayoutEffect:L1,useMemo:F1,useReducer:xh,useRef:N1,useState:function(){return xh(dl)},useDebugValue:mm,useDeferredValue:function(t){var e=Fn();return U1(e,At.memoizedState,t)},useTransition:function(){var t=xh(dl)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:C1,useSyncExternalStore:R1,useId:$1,unstable_isNewReconciler:!1},gR={readContext:jn,useCallback:j1,useContext:jn,useEffect:pm,useImperativeHandle:V1,useInsertionEffect:O1,useLayoutEffect:L1,useMemo:F1,useReducer:kh,useRef:N1,useState:function(){return kh(dl)},useDebugValue:mm,useDeferredValue:function(t){var e=Fn();return At===null?e.memoizedState=t:U1(e,At.memoizedState,t)},useTransition:function(){var t=kh(dl)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:C1,useSyncExternalStore:R1,useId:$1,unstable_isNewReconciler:!1};function Ro(t,e){try{var n="",r=e;do n+=HA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yR=typeof WeakMap=="function"?WeakMap:Map;function q1(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ec||(Ec=!0,qf=r),Lf(t,e)},n}function W1(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bR.bind(null,t,e,n),e.then(t,t))}function kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,Ti(n,e,1))),n.lanes|=1),t)}var vR=Gr.ReactCurrentOwner,hn=!1;function nn(t,e,n,r){e.child=t===null?S1(e,null,n,r):Ao(e,t.child,n,r)}function Dv(t,e,n,r,i){n=n.render;var s=e.ref;return go(e,i),r=hm(t,e,n,r,s,i),n=fm(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(rt&&n&&em(e),e.flags|=1,nn(t,e,r,i),e.child)}function Nv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G1(t,e,s,r,i)):(t=Bu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(o,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=Ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function G1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(il(s,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,zr(t,e,i)}return Mf(t,e,n,r,i)}function K1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ao,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ge(ao,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ge(ao,wn),wn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ge(ao,wn),wn|=r;return nn(t,e,i,n),e.child}function Q1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=pn(n)?us:Zt.current;return s=Io(e,s),go(e,i),n=hm(t,e,n,r,s,i),r=fm(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(rt&&r&&em(e),e.flags|=1,nn(t,e,n,i),e.child)}function Ov(t,e,n,r,i){if(pn(n)){var s=!0;dc(e)}else s=!1;if(go(e,i),e.stateNode===null)Uu(t,e),T1(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=pn(n)?us:Zt.current,c=Io(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Av(e,o,r,c),li=!1;var m=e.memoizedState;o.state=m,gc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||fn.current||li?(typeof h=="function"&&(Nf(e,n,h,r),u=e.memoizedState),(a=li||Sv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,w1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jn(u):(u=pn(n)?us:Zt.current,u=Io(e,u));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Av(e,o,r,u),li=!1,m=e.memoizedState,o.state=m,gc(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||fn.current||li?(typeof I=="function"&&(Nf(e,n,I,r),T=e.memoizedState),(c=li||Sv(e,n,c,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){Q1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&_v(e,n,!1),zr(t,e,s);r=e.stateNode,vR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ao(e,t.child,null,s),e.child=Ao(e,null,a,s)):nn(t,e,a,s),e.memoizedState=r.state,i&&_v(e,n,!0),e.child}function Y1(t){var e=t.stateNode;e.pendingContext?vv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vv(t,e.context,!1),lm(t,e.containerInfo)}function Lv(t,e,n,r,i){return So(),nm(i),e.flags|=256,nn(t,e,n,r),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function X1(t,e,n){var r=e.pendingProps,i=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ge(at,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sd(o,r,0,null),t=os(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=jf,t):gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _R(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ai(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jf,r}return s=t.child,t=s.sibling,r=Ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=sd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wu(t,e,n,r){return r!==null&&nm(r),Ao(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _R(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bh(Error(G(422))),wu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sd({mode:"visible",children:r.children},i,0,null),s=os(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ao(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=jf,s);if(!(e.mode&1))return wu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(G(419)),r=bh(s,r,void 0),wu(t,e,o,r)}if(a=(o&t.childLanes)!==0,hn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$r(t,i),Yn(r,t,i,-1))}return Tm(),r=bh(Error(G(421))),wu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,En=Ei(i.nextSibling),In=e,rt=!0,Kn=null,t!==null&&(bn[Dn++]=kr,bn[Dn++]=br,bn[Dn++]=cs,kr=t.id,br=t.overflow,cs=e),e=gm(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Df(t.return,e,n)}function Dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function J1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nn(t,e,r.children,n),r=at.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ge(at,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dh(e,!0,n,null,s);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,n=Ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wR(t,e,n){switch(e.tag){case 3:Y1(e),So();break;case 5:A1(e);break;case 1:pn(e.type)&&dc(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ge(pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ge(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?X1(t,e,n):(Ge(at,at.current&1),t=zr(t,e,n),t!==null?t.sibling:null);Ge(at,at.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return J1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ge(at,at.current),r)break;return null;case 22:case 23:return e.lanes=0,K1(t,e,n)}return zr(t,e,n)}var Z1,Uf,eE,tE;Z1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};eE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,es(fr.current);var s=null;switch(n){case"input":i=lf(t,i),r=lf(t,r),s=[];break;case"select":i=ut({},i,{value:void 0}),r=ut({},r,{value:void 0}),s=[];break;case"textarea":i=df(t,i),r=df(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}ff(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Je("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};tE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ya(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ER(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return pn(e.type)&&cc(),Kt(e),null;case 3:return r=e.stateNode,Co(),et(fn),et(Zt),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Kf(Kn),Kn=null))),Uf(t,e),Kt(e),null;case 5:um(e);var i=es(ul.current);if(n=e.type,t!==null&&e.stateNode!=null)eE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(G(166));return Kt(e),null}if(t=es(fr.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ur]=e,r[al]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<Ca.length;i++)Je(Ca[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":qy(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":Gy(r,s),Je("invalid",r)}ff(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,a,t),i=["children",""+a]):Xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":uu(r),Wy(r,s,!0);break;case"textarea":uu(r),Ky(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ur]=e,t[al]=r,Z1(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ca.length;i++)Je(Ca[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":qy(t,r),i=lf(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ut({},r,{value:void 0}),Je("invalid",t);break;case"textarea":Gy(t,r),i=df(t,r),Je("invalid",t);break;default:i=r}ff(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?bw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ja(t,u):typeof u=="number"&&Ja(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Je("scroll",t):u!=null&&Up(t,s,u,o))}switch(n){case"input":uu(t),Wy(t,r,!1);break;case"textarea":uu(t),Ky(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ho(t,!!r.multiple,s,!1):r.defaultValue!=null&&ho(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)tE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(G(166));if(n=es(ul.current),es(fr.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[ur]=e,(s=r.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ur]=e,e.stateNode=r}return Kt(e),null;case 13:if(et(at),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&En!==null&&e.mode&1&&!(e.flags&128))v1(),So(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(G(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[ur]=e}else So(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Kn!==null&&(Kf(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Ct===0&&(Ct=3):Tm())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Co(),Uf(t,e),t===null&&sl(e.stateNode.containerInfo),Kt(e),null;case 10:return sm(e.type._context),Kt(e),null;case 17:return pn(e.type)&&cc(),Kt(e),null;case 19:if(et(at),s=e.memoizedState,s===null)return Kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ya(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,ya(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ge(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Po&&(e.flags|=128,r=!0,ya(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Kt(e),null}else 2*yt()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=at.current,Ge(at,r?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(G(156,e.tag))}function TR(t,e){switch(tm(e),e.tag){case 1:return pn(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),et(fn),et(Zt),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(et(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(at),null;case 4:return Co(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var Eu=!1,Xt=!1,IR=typeof WeakSet=="function"?WeakSet:Set,te=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(t,e,r)}else n.current=null}function $f(t,e,n){try{n()}catch(r){ht(t,e,r)}}var Vv=!1;function SR(t,e){if(Sf=oc,t=s1(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var I;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(I=f.firstChild)!==null;)m=f,f=I;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(I=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=I}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Af={focusedElem:t,selectionRange:n},oc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,P=T.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?A:qn(e.type,A),P);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(O){ht(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return T=Vv,Vv=!1,T}function Fa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$f(e,n,s)}i=i.next}while(i!==r)}}function rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nE(t){var e=t.alternate;e!==null&&(t.alternate=null,nE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[al],delete e[Pf],delete e[oR],delete e[aR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rE(t){return t.tag===5||t.tag===3||t.tag===4}function jv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var Mt=null,Wn=!1;function ii(t,e,n){for(n=n.child;n!==null;)iE(t,e,n),n=n.sibling}function iE(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:Xt||oo(n,e);case 6:var r=Mt,i=Wn;Mt=null,ii(t,e,n),Mt=r,Wn=i,Mt!==null&&(Wn?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(Wn?(t=Mt,n=n.stateNode,t.nodeType===8?Ah(t.parentNode,n):t.nodeType===1&&Ah(t,n),nl(t)):Ah(Mt,n.stateNode));break;case 4:r=Mt,i=Wn,Mt=n.stateNode.containerInfo,Wn=!0,ii(t,e,n),Mt=r,Wn=i;break;case 0:case 11:case 14:case 15:if(!Xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(n,e,o),i=i.next}while(i!==r)}ii(t,e,n);break;case 1:if(!Xt&&(oo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ht(n,e,a)}ii(t,e,n);break;case 21:ii(t,e,n);break;case 22:n.mode&1?(Xt=(r=Xt)||n.memoizedState!==null,ii(t,e,n),Xt=r):ii(t,e,n);break;default:ii(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IR),e.forEach(function(r){var i=NR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,Wn=!1;break e;case 3:Mt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Mt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Mt===null)throw Error(G(160));iE(s,o,i),Mt=null,Wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ht(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sE(e,t),e=e.sibling}function sE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),sr(t),r&4){try{Fa(3,t,t.return),rd(3,t)}catch(A){ht(t,t.return,A)}try{Fa(5,t,t.return)}catch(A){ht(t,t.return,A)}}break;case 1:Hn(e,t),sr(t),r&512&&n!==null&&oo(n,n.return);break;case 5:if(Hn(e,t),sr(t),r&512&&n!==null&&oo(n,n.return),t.flags&32){var i=t.stateNode;try{Ja(i,"")}catch(A){ht(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cw(i,s),pf(a,o);var c=pf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?bw(i,f):h==="dangerouslySetInnerHTML"?xw(i,f):h==="children"?Ja(i,f):Up(i,h,f,c)}switch(a){case"input":uf(i,s);break;case"textarea":Rw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ho(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ho(i,!!s.multiple,s.defaultValue,!0):ho(i,!!s.multiple,s.multiple?[]:"",!1))}i[al]=s}catch(A){ht(t,t.return,A)}}break;case 6:if(Hn(e,t),sr(t),r&4){if(t.stateNode===null)throw Error(G(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){ht(t,t.return,A)}}break;case 3:if(Hn(e,t),sr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(A){ht(t,t.return,A)}break;case 4:Hn(e,t),sr(t);break;case 13:Hn(e,t),sr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=yt())),r&4&&Fv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||h,Hn(e,t),Xt=c):Hn(e,t),sr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(te=t,h=t.child;h!==null;){for(f=te=h;te!==null;){switch(m=te,I=m.child,m.tag){case 0:case 11:case 14:case 15:Fa(4,m,m.return);break;case 1:oo(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){ht(r,n,A)}}break;case 5:oo(m,m.return);break;case 22:if(m.memoizedState!==null){$v(f);continue}}I!==null?(I.return=m,te=I):$v(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=kw("display",o))}catch(A){ht(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){ht(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,t),sr(t),r&4&&Fv(t);break;case 21:break;default:Hn(e,t),sr(t)}}function sr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rE(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var s=jv(t);Hf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jv(t);Bf(t,a,o);break;default:throw Error(G(161))}}catch(u){ht(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AR(t,e,n){te=t,oE(t)}function oE(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Xt;a=Eu;var c=Xt;if(Eu=o,(Xt=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?zv(i):u!==null?(u.return=o,te=u):zv(i);for(;s!==null;)te=s,oE(s),s=s.sibling;te=i,Eu=a,Xt=c}Uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):Uv(t)}}function Uv(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||rd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Iv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&nl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Xt||e.flags&512&&zf(e)}catch(m){ht(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function $v(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function zv(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rd(4,e)}catch(u){ht(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ht(e,i,u)}}var s=e.return;try{zf(e)}catch(u){ht(e,s,u)}break;case 5:var o=e.return;try{zf(e)}catch(u){ht(e,o,u)}}}catch(u){ht(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var CR=Math.ceil,wc=Gr.ReactCurrentDispatcher,ym=Gr.ReactCurrentOwner,Ln=Gr.ReactCurrentBatchConfig,De=0,kt=null,Tt=null,Ft=0,wn=0,ao=ji(0),Ct=0,fl=null,hs=0,id=0,vm=0,Ua=null,cn=null,_m=0,Po=1/0,Pr=null,Ec=!1,qf=null,Ii=null,Tu=!1,gi=null,Tc=0,$a=0,Wf=null,$u=-1,zu=0;function sn(){return De&6?yt():$u!==-1?$u:$u=yt()}function Si(t){return t.mode&1?De&2&&Ft!==0?Ft&-Ft:uR.transition!==null?(zu===0&&(zu=Bw()),zu):(t=Ve,t!==0||(t=window.event,t=t===void 0?16:Yw(t.type)),t):1}function Yn(t,e,n,r){if(50<$a)throw $a=0,Wf=null,Error(G(185));Al(t,n,r),(!(De&2)||t!==kt)&&(t===kt&&(!(De&2)&&(id|=n),Ct===4&&ci(t,Ft)),mn(t,r),n===1&&De===0&&!(e.mode&1)&&(Po=yt()+500,ed&&Fi()))}function mn(t,e){var n=t.callbackNode;uC(t,e);var r=sc(t,t===kt?Ft:0);if(r===0)n!==null&&Xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xy(n),e===1)t.tag===0?lR(Bv.bind(null,t)):m1(Bv.bind(null,t)),iR(function(){!(De&6)&&Fi()}),n=null;else{switch(Hw(r)){case 1:n=qp;break;case 4:n=$w;break;case 16:n=ic;break;case 536870912:n=zw;break;default:n=ic}n=pE(n,aE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function aE(t,e){if($u=-1,zu=0,De&6)throw Error(G(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var r=sc(t,t===kt?Ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ic(t,r);else{e=r;var i=De;De|=2;var s=uE();(kt!==t||Ft!==e)&&(Pr=null,Po=yt()+500,ss(t,e));do try{xR();break}catch(a){lE(t,a)}while(!0);im(),wc.current=s,De=i,Tt!==null?e=0:(kt=null,Ft=0,e=Ct)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=Gf(t,i))),e===1)throw n=fl,ss(t,0),ci(t,r),mn(t,yt()),n;if(e===6)ci(t,r);else{if(i=t.current.alternate,!(r&30)&&!RR(i)&&(e=Ic(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=Gf(t,s))),e===1))throw n=fl,ss(t,0),ci(t,r),mn(t,yt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(G(345));case 2:Yi(t,cn,Pr);break;case 3:if(ci(t,r),(r&130023424)===r&&(e=_m+500-yt(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){sn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rf(Yi.bind(null,t,cn,Pr),e);break}Yi(t,cn,Pr);break;case 4:if(ci(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=yt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CR(r/1960))-r,10<r){t.timeoutHandle=Rf(Yi.bind(null,t,cn,Pr),r);break}Yi(t,cn,Pr);break;case 5:Yi(t,cn,Pr);break;default:throw Error(G(329))}}}return mn(t,yt()),t.callbackNode===n?aE.bind(null,t):null}function Gf(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=cn,cn=n,e!==null&&Kf(e)),t}function Kf(t){cn===null?cn=t:cn.push.apply(cn,t)}function RR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Xn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ci(t,e){for(e&=~vm,e&=~id,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function Bv(t){if(De&6)throw Error(G(327));yo();var e=sc(t,0);if(!(e&1))return mn(t,yt()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=Gf(t,r))}if(n===1)throw n=fl,ss(t,0),ci(t,e),mn(t,yt()),n;if(n===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,cn,Pr),mn(t,yt()),null}function wm(t,e){var n=De;De|=1;try{return t(e)}finally{De=n,De===0&&(Po=yt()+500,ed&&Fi())}}function fs(t){gi!==null&&gi.tag===0&&!(De&6)&&yo();var e=De;De|=1;var n=Ln.transition,r=Ve;try{if(Ln.transition=null,Ve=1,t)return t()}finally{Ve=r,Ln.transition=n,De=e,!(De&6)&&Fi()}}function Em(){wn=ao.current,et(ao)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rR(n)),Tt!==null)for(n=Tt.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Co(),et(fn),et(Zt),cm();break;case 5:um(r);break;case 4:Co();break;case 13:et(at);break;case 19:et(at);break;case 10:sm(r.type._context);break;case 22:case 23:Em()}n=n.return}if(kt=t,Tt=t=Ai(t.current,null),Ft=wn=e,Ct=0,fl=null,vm=id=hs=0,cn=Ua=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return t}function lE(t,e){do{var n=Tt;try{if(im(),ju.current=_c,vc){for(var r=lt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(ds=0,xt=At=lt=null,ja=!1,cl=0,ym.current=null,n===null||n.return===null){Ct=1,fl=e,Tt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ft,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=kv(o);if(I!==null){I.flags&=-257,bv(I,o,a,s,e),I.mode&1&&xv(s,c,e),e=I,u=c;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){xv(s,c,e),Tm();break e}u=Error(G(426))}}else if(rt&&a.mode&1){var P=kv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bv(P,o,a,s,e),nm(Ro(u,a));break e}}s=u=Ro(u,a),Ct!==4&&(Ct=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=q1(s,u,e);Tv(s,E);break e;case 1:a=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ii===null||!Ii.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=W1(s,a,e);Tv(s,O);break e}}s=s.return}while(s!==null)}dE(n)}catch(U){e=U,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function uE(){var t=wc.current;return wc.current=_c,t===null?_c:t}function Tm(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),kt===null||!(hs&268435455)&&!(id&268435455)||ci(kt,Ft)}function Ic(t,e){var n=De;De|=2;var r=uE();(kt!==t||Ft!==e)&&(Pr=null,ss(t,e));do try{PR();break}catch(i){lE(t,i)}while(!0);if(im(),De=n,wc.current=r,Tt!==null)throw Error(G(261));return kt=null,Ft=0,Ct}function PR(){for(;Tt!==null;)cE(Tt)}function xR(){for(;Tt!==null&&!eC();)cE(Tt)}function cE(t){var e=fE(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?dE(t):Tt=e,ym.current=null}function dE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TR(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=ER(n,e,wn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Yi(t,e,n){var r=Ve,i=Ln.transition;try{Ln.transition=null,Ve=1,kR(t,e,n,r)}finally{Ln.transition=i,Ve=r}return null}function kR(t,e,n,r){do yo();while(gi!==null);if(De&6)throw Error(G(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cC(t,s),t===kt&&(Tt=kt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,pE(ic,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=Ve;Ve=1;var a=De;De|=4,ym.current=null,SR(t,n),sE(n,t),YC(Af),oc=!!Sf,Af=Sf=null,t.current=n,AR(n),tC(),De=a,Ve=o,Ln.transition=s}else t.current=n;if(Tu&&(Tu=!1,gi=t,Tc=i),s=t.pendingLanes,s===0&&(Ii=null),iC(n.stateNode),mn(t,yt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ec)throw Ec=!1,t=qf,qf=null,t;return Tc&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===Wf?$a++:($a=0,Wf=t):$a=0,Fi(),null}function yo(){if(gi!==null){var t=Hw(Tc),e=Ln.transition,n=Ve;try{if(Ln.transition=null,Ve=16>t?16:t,gi===null)var r=!1;else{if(t=gi,gi=null,Tc=0,De&6)throw Error(G(331));var i=De;for(De|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(te=c;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:Fa(8,h,s)}var f=h.child;if(f!==null)f.return=h,te=f;else for(;te!==null;){h=te;var m=h.sibling,I=h.return;if(nE(h),h===c){te=null;break}if(m!==null){m.return=I,te=m;break}te=I}}}var T=s.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,te=E;break e}te=s.return}}var v=t.current;for(te=v;te!==null;){o=te;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,te=C;else e:for(o=v;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rd(9,a)}}catch(U){ht(a,a.return,U)}if(a===o){te=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,te=O;break e}te=a.return}}if(De=i,Fi(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Qc,t)}catch{}r=!0}return r}finally{Ve=n,Ln.transition=e}}return!1}function Hv(t,e,n){e=Ro(n,e),e=q1(t,e,1),t=Ti(t,e,1),e=sn(),t!==null&&(Al(t,1,e),mn(t,e))}function ht(t,e,n){if(t.tag===3)Hv(t,t,n);else for(;e!==null;){if(e.tag===3){Hv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=Ro(n,t),t=W1(e,t,1),e=Ti(e,t,1),t=sn(),e!==null&&(Al(e,1,t),mn(e,t));break}}e=e.return}}function bR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ft&n)===n&&(Ct===4||Ct===3&&(Ft&130023424)===Ft&&500>yt()-_m?ss(t,0):vm|=n),mn(t,e)}function hE(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=sn();t=$r(t,e),t!==null&&(Al(t,e,n),mn(t,n))}function DR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hE(t,n)}function NR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(e),hE(t,n)}var fE;fE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,wR(t,e,n);hn=!!(t.flags&131072)}else hn=!1,rt&&e.flags&1048576&&g1(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uu(t,e),t=e.pendingProps;var i=Io(e,Zt.current);go(e,n),i=hm(null,e,r,t,i,n);var s=fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(r)?(s=!0,dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=td,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,rt&&s&&em(e),nn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LR(r),t=qn(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Ov(null,e,r,t,n);break e;case 11:e=Dv(null,e,r,t,n);break e;case 14:e=Nv(null,e,r,qn(r.type,t),n);break e}throw Error(G(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Ov(t,e,r,i,n);case 3:e:{if(Y1(e),t===null)throw Error(G(387));r=e.pendingProps,s=e.memoizedState,i=s.element,w1(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ro(Error(G(423)),e),e=Lv(t,e,r,n,i);break e}else if(r!==i){i=Ro(Error(G(424)),e),e=Lv(t,e,r,n,i);break e}else for(En=Ei(e.stateNode.containerInfo.firstChild),In=e,rt=!0,Kn=null,n=S1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),r===i){e=zr(t,e,n);break e}nn(t,e,r,n)}e=e.child}return e;case 5:return A1(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cf(r,i)?o=null:s!==null&&Cf(r,s)&&(e.flags|=32),Q1(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return X1(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ao(e,null,r,n):nn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Dv(t,e,r,i,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ge(pc,r._currentValue),r._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===i.children&&!fn.current){e=zr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Lr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(G(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,go(e,n),i=jn(i),r=r(i),e.flags|=1,nn(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),Nv(t,e,r,i,n);case 15:return G1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Uu(t,e),e.tag=1,pn(r)?(t=!0,dc(e)):t=!1,go(e,n),T1(e,r,i),Of(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return J1(t,e,n);case 22:return K1(t,e,n)}throw Error(G(156,e.tag))};function pE(t,e){return Uw(t,e)}function OR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,r){return new OR(t,e,n,r)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LR(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zp)return 11;if(t===Bp)return 14}return 2}function Ai(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return os(n.children,i,s,e);case $p:o=8,i|=8;break;case rf:return t=On(12,n,e,i|2),t.elementType=rf,t.lanes=s,t;case sf:return t=On(13,n,e,i),t.elementType=sf,t.lanes=s,t;case of:return t=On(19,n,e,i),t.elementType=of,t.lanes=s,t;case Iw:return sd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ew:o=10;break e;case Tw:o=9;break e;case zp:o=11;break e;case Bp:o=14;break e;case ai:o=16,r=null;break e}throw Error(G(130,t==null?t:typeof t,""))}return e=On(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function os(t,e,n,r){return t=On(7,t,r,e),t.lanes=n,t}function sd(t,e,n,r){return t=On(22,t,r,e),t.elementType=Iw,t.lanes=n,t.stateNode={isHidden:!1},t}function Nh(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ph(0),this.expirationTimes=ph(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ph(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sm(t,e,n,r,i,s,o,a,u){return t=new MR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function VR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function mE(t){if(!t)return Di;t=t._reactInternals;e:{if(Rs(t)!==t||t.tag!==1)throw Error(G(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(G(171))}if(t.tag===1){var n=t.type;if(pn(n))return p1(t,n,e)}return e}function gE(t,e,n,r,i,s,o,a,u){return t=Sm(n,r,!0,t,i,s,o,a,u),t.context=mE(null),n=t.current,r=sn(),i=Si(n),s=Lr(r,i),s.callback=e??null,Ti(n,s,i),t.current.lanes=i,Al(t,i,r),mn(t,r),t}function od(t,e,n,r){var i=e.current,s=sn(),o=Si(i);return n=mE(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ti(i,e,o),t!==null&&(Yn(t,i,o,s),Vu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Am(t,e){qv(t,e),(t=t.alternate)&&qv(t,e)}function jR(){return null}var yE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}ad.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));od(t,e,null,null)};ad.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){od(null,t,null,null)}),e[Ur]=null}};function ad(t){this._internalRoot=t}ad.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ui.length&&e!==0&&e<ui[n].priority;n++);ui.splice(n,0,t),n===0&&Qw(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function FR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sc(o);s.call(c)}}var o=gE(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[Ur]=o.current,sl(t.nodeType===8?t.parentNode:t),fs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Sc(u);a.call(c)}}var u=Sm(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=u,t[Ur]=u.current,sl(t.nodeType===8?t.parentNode:t),fs(function(){od(e,u,n,r)}),u}function ud(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Sc(o);a.call(u)}}od(e,o,t,i)}else o=FR(n,e,t,i,r);return Sc(o)}qw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(Wp(e,n|1),mn(e,yt()),!(De&6)&&(Po=yt()+500,Fi()))}break;case 13:fs(function(){var r=$r(t,1);if(r!==null){var i=sn();Yn(r,t,1,i)}}),Am(t,1)}};Gp=function(t){if(t.tag===13){var e=$r(t,134217728);if(e!==null){var n=sn();Yn(e,t,134217728,n)}Am(t,134217728)}};Ww=function(t){if(t.tag===13){var e=Si(t),n=$r(t,e);if(n!==null){var r=sn();Yn(n,t,e,r)}Am(t,e)}};Gw=function(){return Ve};Kw=function(t,e){var n=Ve;try{return Ve=t,e()}finally{Ve=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zc(r);if(!i)throw Error(G(90));Aw(r),uf(r,i)}}}break;case"textarea":Rw(t,n);break;case"select":e=n.value,e!=null&&ho(t,!!n.multiple,e,!1)}};Ow=wm;Lw=fs;var UR={usingClientEntryPoint:!1,Events:[Rl,to,Zc,Dw,Nw,wm]},va={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$R={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jw(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||jR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Qc=Iu.inject($R),hr=Iu}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UR;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(G(200));return VR(t,e,null,n)};Cn.createRoot=function(t,e){if(!Rm(t))throw Error(G(299));var n=!1,r="",i=yE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sm(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,sl(t.nodeType===8?t.parentNode:t),new Cm(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=jw(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return fs(t)};Cn.hydrate=function(t,e,n){if(!ld(e))throw Error(G(200));return ud(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=yE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gE(e,null,t,1,n??null,i,!1,s,o),t[Ur]=e.current,sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ad(e)};Cn.render=function(t,e,n){if(!ld(e))throw Error(G(200));return ud(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!ld(t))throw Error(G(40));return t._reactRootContainer?(fs(function(){ud(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};Cn.unstable_batchedUpdates=wm;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ld(n))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return ud(t,e,n,!1,r)};Cn.version="18.2.0-next-9e3b772b8-20220608";function vE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vE)}catch(t){console.error(t)}}vE(),gw.exports=Cn;var Pm=gw.exports;const zR=Np(Pm),BR=sw({__proto__:null,default:zR},[Pm]);var _E,Gv=Pm;_E=Gv.createRoot,Gv.hydrateRoot;var Kv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},EE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[h],n[f],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new qR;const m=s<<2|a>>4;if(r.push(m),c!==64){const I=a<<4&240|c>>2;if(r.push(I),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WR=function(t){const e=wE(t);return EE.encodeByteArray(e,!0)},Ac=function(t){return WR(t).replace(/\./g,"")},TE=function(t){try{return EE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KR=()=>GR().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof Kv>"u")return;const t=Kv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&TE(t[1]);return e&&JSON.parse(e)},cd=()=>{try{return KR()||QR()||YR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IE=t=>{var e,n;return(n=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XR=t=>{const e=IE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},SE=()=>{var t;return(t=cd())===null||t===void 0?void 0:t.config},AE=t=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JR=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};/**
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
 */function ZR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function tP(){var t;const e=(t=cd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rP(){const t=zt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iP(){return!tP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function bm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function CE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sP,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nr(i,a,r)}}function oP(t,e){return t.replace(aP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aP=/\{\$([^}]+)}/g;function lP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qv(s)&&Qv(o)){if(!ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uP(t,e){const n=new cP(t,e);return n.subscribe.bind(n)}class cP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lh),i.error===void 0&&(i.error=Lh),i.complete===void 0&&(i.complete=Lh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lh(){}/**
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
 */const hP=1e3,fP=2,pP=4*60*60*1e3,mP=.5;function Yv(t,e=hP,n=fP){const r=e*Math.pow(n,t),i=Math.round(mP*r*(Math.random()-.5)*2);return Math.min(pP,r+i)}/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class gP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vP(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yP(t){return t===Xi?void 0:t}function vP(t){return t.instantiationMode==="EAGER"}/**
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
 */class _P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const wP={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},EP=xe.INFO,TP={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},IP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=EP,this._logHandler=IP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const SP=(t,e)=>e.some(n=>t instanceof n);let Xv,Jv;function AP(){return Xv||(Xv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CP(){return Jv||(Jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RE=new WeakMap,Qf=new WeakMap,PE=new WeakMap,Mh=new WeakMap,Dm=new WeakMap;function RP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&RE.set(n,t)}).catch(()=>{}),Dm.set(e,t),e}function PP(t){if(Qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qf.set(t,e)}let Yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xP(t){Yf=t(Yf)}function kP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vh(this),e,...n);return PE.set(r,e.sort?e.sort():[e]),Ci(r)}:CP().includes(t)?function(...e){return t.apply(Vh(this),e),Ci(RE.get(this))}:function(...e){return Ci(t.apply(Vh(this),e))}}function bP(t){return typeof t=="function"?kP(t):(t instanceof IDBTransaction&&PP(t),SP(t,AP())?new Proxy(t,Yf):t)}function Ci(t){if(t instanceof IDBRequest)return RP(t);if(Mh.has(t))return Mh.get(t);const e=bP(t);return e!==t&&(Mh.set(t,e),Dm.set(e,t)),e}const Vh=t=>Dm.get(t);function xE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ci(o.result),u.oldVersion,u.newVersion,Ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const DP=["get","getKey","getAll","getAllKeys","count"],NP=["put","add","delete","clear"],jh=new Map;function Zv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jh.get(e))return jh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return jh.set(e,s),s}xP(t=>({...t,get:(e,n,r)=>Zv(e,n)||t.get(e,n,r),has:(e,n)=>!!Zv(e,n)||t.has(e,n)}));/**
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
 */class OP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xf="@firebase/app",e0="0.10.4";/**
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
 */const ms=new dd("@firebase/app"),MP="@firebase/app-compat",VP="@firebase/analytics-compat",jP="@firebase/analytics",FP="@firebase/app-check-compat",UP="@firebase/app-check",$P="@firebase/auth",zP="@firebase/auth-compat",BP="@firebase/database",HP="@firebase/database-compat",qP="@firebase/functions",WP="@firebase/functions-compat",GP="@firebase/installations",KP="@firebase/installations-compat",QP="@firebase/messaging",YP="@firebase/messaging-compat",XP="@firebase/performance",JP="@firebase/performance-compat",ZP="@firebase/remote-config",ex="@firebase/remote-config-compat",tx="@firebase/storage",nx="@firebase/storage-compat",rx="@firebase/firestore",ix="@firebase/vertexai-preview",sx="@firebase/firestore-compat",ox="firebase",ax="10.12.1";/**
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
 */const Jf="[DEFAULT]",lx={[Xf]:"fire-core",[MP]:"fire-core-compat",[jP]:"fire-analytics",[VP]:"fire-analytics-compat",[UP]:"fire-app-check",[FP]:"fire-app-check-compat",[$P]:"fire-auth",[zP]:"fire-auth-compat",[BP]:"fire-rtdb",[HP]:"fire-rtdb-compat",[qP]:"fire-fn",[WP]:"fire-fn-compat",[GP]:"fire-iid",[KP]:"fire-iid-compat",[QP]:"fire-fcm",[YP]:"fire-fcm-compat",[XP]:"fire-perf",[JP]:"fire-perf-compat",[ZP]:"fire-rc",[ex]:"fire-rc-compat",[tx]:"fire-gcs",[nx]:"fire-gcs-compat",[rx]:"fire-fst",[sx]:"fire-fst-compat",[ix]:"fire-vertex","fire-js":"fire-js",[ox]:"fire-js-all"};/**
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
 */const Cc=new Map,ux=new Map,Zf=new Map;function t0(t,e){try{t.container.addComponent(e)}catch(n){ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vr(t){const e=t.name;if(Zf.has(e))return ms.debug(`There were multiple attempts to register component ${e}.`),!1;Zf.set(e,t);for(const n of Cc.values())t0(n,t);for(const n of ux.values())t0(n,t);return!0}function xs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cr(t){return t.settings!==void 0}/**
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
 */const cx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ri=new Ps("app","Firebase",cx);/**
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
 */class dx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ri.create("app-deleted",{appName:this._name})}}/**
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
 */const Ho=ax;function Nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ri.create("bad-app-name",{appName:String(i)});if(n||(n=SE()),!n)throw Ri.create("no-options");const s=Cc.get(i);if(s){if(ps(n,s.options)&&ps(r,s.config))return s;throw Ri.create("duplicate-app",{appName:i})}const o=new _P(i);for(const u of Zf.values())o.addComponent(u);const a=new dx(n,r,o);return Cc.set(i,a),a}function Om(t=Jf){const e=Cc.get(t);if(!e&&t===Jf&&SE())return Nm();if(!e)throw Ri.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let i=(r=lx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ms.warn(a.join(" "));return}vr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hx="firebase-heartbeat-database",fx=1,pl="firebase-heartbeat-store";let Fh=null;function kE(){return Fh||(Fh=xE(hx,fx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ri.create("idb-open",{originalErrorMessage:t.message})})),Fh}async function px(t){try{const n=(await kE()).transaction(pl),r=await n.objectStore(pl).get(bE(t));return await n.done,r}catch(e){if(e instanceof nr)ms.warn(e.message);else{const n=Ri.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ms.warn(n.message)}}}async function n0(t,e){try{const r=(await kE()).transaction(pl,"readwrite");await r.objectStore(pl).put(e,bE(t)),await r.done}catch(n){if(n instanceof nr)ms.warn(n.message);else{const r=Ri.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ms.warn(r.message)}}}function bE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mx=1024,gx=30*24*60*60*1e3;class yx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _x(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=r0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=r0(),{heartbeatsToSend:r,unsentEntries:i}=vx(this._heartbeatsCache.heartbeats),s=Ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function r0(){return new Date().toISOString().substring(0,10)}function vx(t,e=mx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),i0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _x{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?bm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await px(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i0(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wx(t){vr(new Jn("platform-logger",e=>new OP(e),"PRIVATE")),vr(new Jn("heartbeat",e=>new yx(e),"PRIVATE")),Mn(Xf,e0,t),Mn(Xf,e0,"esm2017"),Mn("fire-js","")}wx("");var Ex="firebase",Tx="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(Ex,Tx,"app");function Lm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function DE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ix=DE,NE=new Ps("auth","Firebase",DE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new dd("@firebase/auth");function Sx(t,...e){Rc.logLevel<=xe.WARN&&Rc.warn(`Auth (${Ho}): ${t}`,...e)}function Hu(t,...e){Rc.logLevel<=xe.ERROR&&Rc.error(`Auth (${Ho}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,...e){throw Mm(t,...e)}function pr(t,...e){return Mm(t,...e)}function OE(t,e,n){const r=Object.assign(Object.assign({},Ix()),{[e]:n});return new Ps("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return OE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NE.create(t,...e)}function pe(t,e,...n){if(!t)throw Mm(e,...n)}function Dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function Br(t,e){t||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ax(){return s0()==="http:"||s0()==="https:"}function s0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ax()||xm()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Br(n>e,"Short delay should be less than long delay!"),this.isMobile=eP()||nP()}get(){return Cx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){Br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new kl(3e4,6e4);function Ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,r,i={}){return ME(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),LE.fetch()(VE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function ME(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Px),e);try{const i=new bx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Su(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw OE(t,h,c);Zn(t,h)}}catch(i){if(i instanceof nr)throw i;Zn(t,"network-request-failed",{message:String(i)})}}async function bl(t,e,n,r,i={}){const s=await $i(t,e,n,r,i);return"mfaPendingCredential"in s&&Zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vm(t.config,i):`${t.config.apiScheme}://${i}`}function kx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pr(this.auth,"network-request-failed")),xx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pr(t,e,r);return i.customData._tokenResponse=n,i}function o0(t){return t!==void 0&&t.enterprise!==void 0}class Dx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Nx(t,e){return $i(t,"GET","/v2/recaptchaConfig",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function jE(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lx(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=jm(r);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:za(Uh(i.auth_time)),issuedAtTime:za(Uh(i.iat)),expirationTime:za(Uh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uh(t){return Number(t)*1e3}function jm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=TE(n);return i?JSON.parse(i):(Hu("Failed to decode base64 JWT payload"),null)}catch(i){return Hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function a0(t){const e=jm(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&Mx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ml(t,jE(n,{idToken:r}));pe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FE(s.providerUserInfo):[],a=Fx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function jx(t){const e=bt(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FE(t){return t.map(e=>{var{providerId:n}=e,r=Lm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,e){const n=await ME(t,{},async()=>{const r=xl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $x(t,e){return $i(t,"POST","/v2/accounts:revokeToken",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=a0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ux(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vo;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ml(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lx(this,e)}reload(){return jx(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cr(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await ml(this,Ox(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:O,isAnonymous:U,providerData:B,stsTokenManager:y}=n;pe(C&&y,e,"internal-error");const _=vo.fromJSON(this.name,y);pe(typeof C=="string",e,"internal-error"),si(f,e.name),si(m,e.name),pe(typeof O=="boolean",e,"internal-error"),pe(typeof U=="boolean",e,"internal-error"),si(I,e.name),si(T,e.name),si(A,e.name),si(P,e.name),si(E,e.name),si(v,e.name);const S=new Nr({uid:C,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:U,photoURL:T,phoneNumber:I,tenantId:A,stsTokenManager:_,createdAt:E,lastLoginAt:v});return B&&Array.isArray(B)&&(S.providerData=B.map(R=>Object.assign({},R))),P&&(S._redirectEventId=P),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new vo;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];pe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?FE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new vo;a.updateFromIdToken(r);const u=new Nr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Map;function Or(t){Br(t instanceof Function,"Expected a class definition");let e=l0.get(t);return e?(Br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,l0.set(t,e),e)}/**
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
 */class UE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UE.type="NONE";const u0=UE;/**
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
 */function qu(t,e,n){return`firebase:${t}:${e}:${n}`}class _o{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _o(Or(u0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Or(u0);const o=qu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Nr._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _o(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _o(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qE(e))return"Blackberry";if(WE(e))return"Webos";if(Fm(e))return"Safari";if((e.includes("chrome/")||zE(e))&&!e.includes("edge/"))return"Chrome";if(HE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $E(t=zt()){return/firefox\//i.test(t)}function Fm(t=zt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zE(t=zt()){return/crios\//i.test(t)}function BE(t=zt()){return/iemobile/i.test(t)}function HE(t=zt()){return/android/i.test(t)}function qE(t=zt()){return/blackberry/i.test(t)}function WE(t=zt()){return/webos/i.test(t)}function hd(t=zt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zx(t=zt()){var e;return hd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bx(){return rP()&&document.documentMode===10}function GE(t=zt()){return hd(t)||HE(t)||WE(t)||qE(t)||/windows phone/i.test(t)||BE(t)}function Hx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t,e=[]){let n;switch(t){case"Browser":n=c0(zt());break;case"Worker":n=`${c0(zt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ho}/${r}`}/**
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
 */class qx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Wx(t,e={}){return $i(t,"GET","/v2/passwordPolicy",Ui(t,e))}/**
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
 */const Gx=6;class Kx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Gx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new d0(this),this.idTokenSubscription=new d0(this),this.beforeStateQueue=new qx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jE(this,{idToken:e}),r=await Nr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cr(this.app))return Promise.reject(Mr(this));const n=e?bt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cr(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cr(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wx(this),n=new Kx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $x(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ks(t){return bt(t)}class d0{constructor(e){this.auth=e,this.observer=null,this.addObserver=uP(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yx(t){fd=t}function QE(t){return fd.loadJS(t)}function Xx(){return fd.recaptchaEnterpriseScript}function Jx(){return fd.gapiScript}function Zx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ek="recaptcha-enterprise",tk="NO_RECAPTCHA";class nk{constructor(e){this.type=ek,this.auth=ks(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Nx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Dx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;o0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&o0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xx();u.length!==0&&(u+=a),QE(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function h0(t,e,n,r=!1){const i=new nk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function np(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await h0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await h0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t,e){const n=xs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ps(s,e??{}))return i;Zn(i,"already-initialized")}return n.initialize({options:e})}function ik(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sk(t,e,n){const r=ks(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=YE(e),{host:o,port:a}=ok(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ak()}function YE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ok(t){const e=YE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:f0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:f0(o)}}}function f0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ak(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,n){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function lk(t,e){return $i(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return bl(t,"POST","/v1/accounts:signInWithPassword",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}async function dk(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Um{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(e,n,"signInWithPassword",uk);case"emailLink":return ck(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return np(e,r,"signUpPassword",lk);case"emailLink":return dk(e,{idToken:n,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e){return bl(t,"POST","/v1/accounts:signInWithIdp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="http://localhost";class gs extends Um{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wo(e,n)}buildRequest(){const e={requestUri:hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pk(t){const e=Ra(Pa(t)).link,n=e?Ra(Pa(e)).deep_link_id:null,r=Ra(Pa(t)).deep_link_id;return(r?Ra(Pa(r)).link:null)||r||n||e||t}class $m{constructor(e){var n,r,i,s,o,a;const u=Ra(Pa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=fk((i=u.mode)!==null&&i!==void 0?i:null);pe(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pk(e);try{return new $m(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,n){return gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$m.parseLink(n);return pe(r,"argument-error"),gl._fromEmailAndCode(e,r.code,r.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dl extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Dl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.FACEBOOK_SIGN_IN_METHOD="facebook.com";di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hi.credential(n,r)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Dl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Dl{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pi.credential(n,r)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){return bl(t,"POST","/v1/accounts:signUp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=p0(r);return new ys({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=p0(r);return new ys({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function p0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends nr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xc(e,n,r,i)}}function JE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xc._fromErrorAndOperation(t,s,e,r):s})}async function gk(t,e,n=!1){const r=await ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",r)}/**
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
 */async function yk(t,e,n=!1){const{auth:r}=t;if(cr(r.app))return Promise.reject(Mr(r));const i="reauthenticate";try{const s=await ml(t,JE(r,i,e,t),n);pe(s.idToken,r,"internal-error");const o=jm(s.idToken);pe(o,r,"internal-error");const{sub:a}=o;return pe(t.uid===a,r,"user-mismatch"),ys._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e,n=!1){if(cr(t.app))return Promise.reject(Mr(t));const r="signIn",i=await JE(t,r,e),s=await ys._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vk(t,e){return ZE(ks(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t){const e=ks(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _k(t,e,n){if(cr(t.app))return Promise.reject(Mr(t));const r=ks(t),o=await np(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&eT(t),u}),a=await ys._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function wk(t,e,n){return cr(t.app)?Promise.reject(Mr(t)):vk(bt(t),qo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eT(t),r})}function Ek(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function Tk(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const kc="__sak";/**
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
 */class tT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(){const t=zt();return Fm(t)||hd(t)}const Sk=1e3,Ak=10;class nT extends tT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ik()&&Hx(),this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ak):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nT.type="LOCAL";const Ck=nT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT extends tT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rT.type="SESSION";const iT=rT;/**
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
 */function Rk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await Rk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=zm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return window}function xk(t){mr().location.href=t}/**
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
 */function sT(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dk(){return sT()?self:null}/**
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
 */const oT="firebaseLocalStorageDb",Nk=1,bc="firebaseLocalStorage",aT="fbase_key";class Nl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function md(t,e){return t.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function Ok(){const t=indexedDB.deleteDatabase(oT);return new Nl(t).toPromise()}function rp(){const t=indexedDB.open(oT,Nk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bc,{keyPath:aT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await Ok(),e(await rp()))})})}async function m0(t,e,n){const r=md(t,!0).put({[aT]:e,value:n});return new Nl(r).toPromise()}async function Lk(t,e){const n=md(t,!1).get(e),r=await new Nl(n).toPromise();return r===void 0?null:r.value}function g0(t,e){const n=md(t,!0).delete(e);return new Nl(n).toPromise()}const Mk=800,Vk=3;class lT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pd._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rp();return await m0(e,kc,"1"),await g0(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>m0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>g0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=md(i,!1).getAll();return new Nl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lT.type="LOCAL";const jk=lT;new kl(3e4,6e4);/**
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
 */function Fk(t,e){return e?Or(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bm extends Um{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uk(t){return ZE(t.auth,new Bm(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),yk(n,new Bm(t),t.bypassAuthState)}async function zk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),gk(n,new Bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uk;case"linkViaPopup":case"linkViaRedirect":return zk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:Zn(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new kl(2e3,1e4);class lo extends uT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bk.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="pendingRedirect",Wu=new Map;class qk extends uT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wu.get(this.auth._key());if(!e){try{const r=await Wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wu.set(this.auth._key(),e)}return this.bypassAuthState||Wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wk(t,e){const n=Qk(e),r=Kk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gk(t,e){Wu.set(t._key(),e)}function Kk(t){return Or(t._redirectPersistence)}function Qk(t){return qu(Hk,t.config.apiKey,t.name)}async function Yk(t,e,n=!1){if(cr(t.app))return Promise.reject(Mr(t));const r=ks(t),i=Fk(r,e),o=await new qk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=10*60*1e3;class Jk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(y0(e))}saveEventToCache(e){this.cachedEventUids.add(y0(e)),this.lastProcessedEventTime=Date.now()}}function y0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eb(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eb(t);for(const n of e)try{if(ib(n))return}catch{}Zn(t,"unauthorized-domain")}function ib(t){const e=ep(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nb.test(n))return!1;if(tb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const sb=new kl(3e4,6e4);function v0(){const t=mr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ob(t){return new Promise((e,n)=>{var r,i,s;function o(){v0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{v0(),n(pr(t,"network-request-failed"))},timeout:sb.get()})}if(!((i=(r=mr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mr().gapi)===null||s===void 0)&&s.load)o();else{const a=Zx("iframefcb");return mr()[a]=()=>{gapi.load?o():n(pr(t,"network-request-failed"))},QE(`${Jx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function ab(t){return Gu=Gu||ob(t),Gu}/**
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
 */const lb=new kl(5e3,15e3),ub="__/auth/iframe",cb="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fb(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vm(e,cb):`https://${t.config.authDomain}/${ub}`,r={apiKey:e.apiKey,appName:t.name,v:Ho},i=hb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xl(r).slice(1)}`}async function pb(t){const e=await ab(t),n=mr().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pr(t,"network-request-failed"),a=mr().setTimeout(()=>{s(o)},lb.get());function u(){mr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gb=500,yb=600,vb="_blank",_b="http://localhost";class _0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(t,e,n,r=gb,i=yb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},mb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=zt().toLowerCase();n&&(a=zE(c)?vb:n),$E(c)&&(e=e||_b,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[I,T])=>`${m}${I}=${T},`,"");if(zx(c)&&a!=="_self")return Eb(e||"",a),new _0(null);const f=window.open(e||"",a,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new _0(f)}function Eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tb="__/auth/handler",Ib="emulator/auth/handler",Sb=encodeURIComponent("fac");async function w0(t,e,n,r,i,s){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ho,eventId:i};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Dl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${Sb}=${encodeURIComponent(u)}`:"";return`${Ab(t)}?${xl(a).slice(1)}${c}`}function Ab({config:t}){return t.emulator?Vm(t,Ib):`https://${t.authDomain}/${Tb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iT,this._completeRedirectFn=Yk,this._overrideRedirectResult=Gk}async _openPopup(e,n,r,i){var s;Br((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await w0(e,n,r,ep(),i);return wb(e,o,zm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await w0(e,n,r,ep(),i);return xk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pb(e),r=new Jk(e);return n.register("authEvent",i=>(pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($h,{type:$h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$h];o!==void 0&&n(!!o),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||Fm()||hd()}}const Rb=Cb;var E0="@firebase/auth",T0="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kb(t){vr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KE(t)},c=new Qx(r,i,s,u);return ik(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new Jn("auth-internal",e=>{const n=ks(e.getProvider("auth").getImmediate());return(r=>new Pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(E0,T0,xb(t)),Mn(E0,T0,"esm2017")}/**
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
 */const bb=5*60,Db=AE("authIdTokenMaxAge")||bb;let I0=null;const Nb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Db)return;const i=n==null?void 0:n.token;I0!==i&&(I0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wo(t=Om()){const e=xs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rk(t,{popupRedirectResolver:Rb,persistence:[jk,Ck,iT]}),r=AE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Nb(s.toString());Tk(n,o,()=>o(n.currentUser)),Ek(n,a=>o(a))}}const i=IE("auth");return i&&sk(n,`http://${i}`),n}function Ob(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ob().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kb("Browser");const dT="@firebase/installations",Hm="0.6.7";/**
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
 */const hT=1e4,fT=`w:${Hm}`,pT="FIS_v2",Lb="https://firebaseinstallations.googleapis.com/v1",Mb=60*60*1e3,Vb="installations",jb="Installations";/**
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
 */const Fb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vs=new Ps(Vb,jb,Fb);function mT(t){return t instanceof nr&&t.code.includes("request-failed")}/**
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
 */function gT({projectId:t}){return`${Lb}/projects/${t}/installations`}function yT(t){return{token:t.token,requestStatus:2,expiresIn:$b(t.expiresIn),creationTime:Date.now()}}async function vT(t,e){const r=(await e.json()).error;return vs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _T({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ub(t,{refreshToken:e}){const n=_T(t);return n.append("Authorization",zb(e)),n}async function wT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $b(t){return Number(t.replace("s","000"))}function zb(t){return`${pT} ${t}`}/**
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
 */async function Bb({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=gT(t),i=_T(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:pT,appId:t.appId,sdkVersion:fT},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await wT(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:yT(c.authToken)}}else throw await vT("Create Installation",u)}/**
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
 */function ET(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Hb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qb=/^[cdef][\w-]{21}$/,ip="";function Wb(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Gb(t);return qb.test(n)?n:ip}catch{return ip}}function Gb(t){return Hb(t).substr(0,22)}/**
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
 */function gd(t){return`${t.appName}!${t.appId}`}/**
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
 */const TT=new Map;function IT(t,e){const n=gd(t);ST(n,e),Kb(n,e)}function ST(t,e){const n=TT.get(t);if(n)for(const r of n)r(e)}function Kb(t,e){const n=Qb();n&&n.postMessage({key:t,fid:e}),Yb()}let ts=null;function Qb(){return!ts&&"BroadcastChannel"in self&&(ts=new BroadcastChannel("[Firebase] FID Change"),ts.onmessage=t=>{ST(t.data.key,t.data.fid)}),ts}function Yb(){TT.size===0&&ts&&(ts.close(),ts=null)}/**
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
 */const Xb="firebase-installations-database",Jb=1,_s="firebase-installations-store";let zh=null;function qm(){return zh||(zh=xE(Xb,Jb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}})),zh}async function Dc(t,e){const n=gd(t),i=(await qm()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&IT(t,e.fid),e}async function AT(t){const e=gd(t),r=(await qm()).transaction(_s,"readwrite");await r.objectStore(_s).delete(e),await r.done}async function yd(t,e){const n=gd(t),i=(await qm()).transaction(_s,"readwrite"),s=i.objectStore(_s),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&IT(t,a.fid),a}/**
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
 */async function Wm(t){let e;const n=await yd(t.appConfig,r=>{const i=Zb(r),s=eD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ip?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Zb(t){const e=t||{fid:Wb(),registrationStatus:0};return CT(e)}function eD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nD(t)}:{installationEntry:e}}async function tD(t,e){try{const n=await Bb(t,e);return Dc(t.appConfig,n)}catch(n){throw mT(n)&&n.customData.serverCode===409?await AT(t.appConfig):await Dc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nD(t){let e=await S0(t.appConfig);for(;e.registrationStatus===1;)await ET(100),e=await S0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wm(t);return r||n}return e}function S0(t){return yd(t,e=>{if(!e)throw vs.create("installation-not-found");return CT(e)})}function CT(t){return rD(t)?{fid:t.fid,registrationStatus:0}:t}function rD(t){return t.registrationStatus===1&&t.registrationTime+hT<Date.now()}/**
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
 */async function iD({appConfig:t,heartbeatServiceProvider:e},n){const r=sD(t,n),i=Ub(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:fT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await wT(()=>fetch(r,a));if(u.ok){const c=await u.json();return yT(c)}else throw await vT("Generate Auth Token",u)}function sD(t,{fid:e}){return`${gT(t)}/${e}/authTokens:generate`}/**
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
 */async function Gm(t,e=!1){let n;const r=await yd(t.appConfig,s=>{if(!RT(s))throw vs.create("not-registered");const o=s.authToken;if(!e&&lD(o))return s;if(o.requestStatus===1)return n=oD(t,e),s;{if(!navigator.onLine)throw vs.create("app-offline");const a=cD(s);return n=aD(t,a),a}});return n?await n:r.authToken}async function oD(t,e){let n=await A0(t.appConfig);for(;n.authToken.requestStatus===1;)await ET(100),n=await A0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Gm(t,e):r}function A0(t){return yd(t,e=>{if(!RT(e))throw vs.create("not-registered");const n=e.authToken;return dD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aD(t,e){try{const n=await iD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Dc(t.appConfig,r),n}catch(n){if(mT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await AT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Dc(t.appConfig,r)}throw n}}function RT(t){return t!==void 0&&t.registrationStatus===2}function lD(t){return t.requestStatus===2&&!uD(t)}function uD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Mb}function cD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function dD(t){return t.requestStatus===1&&t.requestTime+hT<Date.now()}/**
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
 */async function hD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wm(e);return r?r.catch(console.error):Gm(e).catch(console.error),n.fid}/**
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
 */async function fD(t,e=!1){const n=t;return await pD(n),(await Gm(n,e)).token}async function pD(t){const{registrationPromise:e}=await Wm(t);e&&await e}/**
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
 */function mD(t){if(!t||!t.options)throw Bh("App Configuration");if(!t.name)throw Bh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bh(t){return vs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="installations",gD="installations-internal",yD=t=>{const e=t.getProvider("app").getImmediate(),n=mD(e),r=xs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vD=t=>{const e=t.getProvider("app").getImmediate(),n=xs(e,PT).getImmediate();return{getId:()=>hD(n),getToken:i=>fD(n,i)}};function _D(){vr(new Jn(PT,yD,"PUBLIC")),vr(new Jn(gD,vD,"PRIVATE"))}_D();Mn(dT,Hm);Mn(dT,Hm,"esm2017");/**
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
 */const Nc="analytics",wD="firebase_id",ED="origin",TD=60*1e3,ID="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Km="https://www.googletagmanager.com/gtag/js";/**
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
 */const gn=new dd("@firebase/analytics");/**
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
 */const SD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new Ps("analytics","Analytics",SD);/**
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
 */function AD(t){if(!t.startsWith(Km)){const e=Sn.create("invalid-gtag-resource",{gtagURL:t});return gn.warn(e.message),""}return t}function xT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function CD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function RD(t,e){const n=CD("firebase-js-sdk-policy",{createScriptURL:AD}),r=document.createElement("script"),i=`${Km}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function PD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await xT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){gn.error(a)}t("config",i,s)}async function kD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xT(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){gn.error(s)}}function bD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await kD(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await xD(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){gn.error(a)}}return i}function DD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ND(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Km)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=30,LD=1e3;class MD{constructor(e={},n=LD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kT=new MD;function VD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function jD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:VD(r)},s=ID.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function FD(t,e=kT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Sn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Sn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zD;return setTimeout(async()=>{a.abort()},TD),bT({appId:r,apiKey:i,measurementId:s},o,a,e)}async function bT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=kT){var s;const{appId:o,measurementId:a}=t;try{await UD(r,e)}catch(u){if(a)return gn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await jD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!$D(c)){if(i.deleteThrottleMetadata(o),a)return gn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Yv(n,i.intervalMillis,OD):Yv(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),gn.debug(`Calling attemptFetch again in ${h} millis`),bT(t,f,r,i)}}function UD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $D(t){if(!(t instanceof nr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function BD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(){if(km())try{await bm()}catch(t){return gn.warn(Sn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qD(t,e,n,r,i,s,o){var a;const u=FD(t);u.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&gn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>gn.error(I)),e.push(u);const c=HD().then(I=>{if(I)return r.getId()}),[h,f]=await Promise.all([u,c]);ND(s)||RD(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[ED]="firebase",m.update=!0,f!=null&&(m[wD]=f),i("config",h.measurementId,m),h.measurementId}/**
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
 */class WD{constructor(e){this.app=e}_delete(){return delete Ba[this.app.options.appId],Promise.resolve()}}let Ba={},C0=[];const R0={};let Hh="dataLayer",GD="gtag",P0,DT,x0=!1;function KD(){const t=[];if(xm()&&t.push("This is a browser extension environment."),CE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Sn.create("invalid-analytics-context",{errorInfo:e});gn.warn(n.message)}}function QD(t,e,n){KD();const r=t.options.appId;if(!r)throw Sn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(Ba[r]!=null)throw Sn.create("already-exists",{id:r});if(!x0){PD(Hh);const{wrappedGtag:s,gtagCore:o}=DD(Ba,C0,R0,Hh,GD);DT=s,P0=o,x0=!0}return Ba[r]=qD(t,C0,R0,e,P0,Hh,n),new WD(t)}function NT(t=Om()){t=bt(t);const e=xs(t,Nc);return e.isInitialized()?e.getImmediate():YD(t)}function YD(t,e={}){const n=xs(t,Nc);if(n.isInitialized()){const i=n.getImmediate();if(ps(e,n.getOptions()))return i;throw Sn.create("already-initialized")}return n.initialize({options:e})}async function OT(){if(xm()||!CE()||!km())return!1;try{return await bm()}catch{return!1}}function XD(t,e,n,r){t=bt(t),BD(DT,Ba[t.app.options.appId],e,n,r).catch(i=>gn.error(i))}const k0="@firebase/analytics",b0="0.10.4";function JD(){vr(new Jn(Nc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return QD(r,i,n)},"PUBLIC")),vr(new Jn("analytics-internal",t,"PRIVATE")),Mn(k0,b0),Mn(k0,b0,"esm2017");function t(e){try{const n=e.getProvider(Nc).getImmediate();return{logEvent:(r,i,s)=>XD(n,r,i,s)}}catch(n){throw Sn.create("interop-component-reg-failed",{reason:n})}}}JD();var D0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,LT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,_){function S(){}S.prototype=_.prototype,y.D=_.prototype,y.prototype=new S,y.prototype.constructor=y,y.C=function(R,k,b){for(var x=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)x[Ee-2]=arguments[Ee];return _.prototype[k].apply(R,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,_,S){S||(S=0);var R=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)R[k]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=y.g[0],S=y.g[1],k=y.g[2];var b=y.g[3],x=_+(b^S&(k^b))+R[0]+3614090360&4294967295;_=S+(x<<7&4294967295|x>>>25),x=b+(k^_&(S^k))+R[1]+3905402710&4294967295,b=_+(x<<12&4294967295|x>>>20),x=k+(S^b&(_^S))+R[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=S+(_^k&(b^_))+R[3]+3250441966&4294967295,S=k+(x<<22&4294967295|x>>>10),x=_+(b^S&(k^b))+R[4]+4118548399&4294967295,_=S+(x<<7&4294967295|x>>>25),x=b+(k^_&(S^k))+R[5]+1200080426&4294967295,b=_+(x<<12&4294967295|x>>>20),x=k+(S^b&(_^S))+R[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=S+(_^k&(b^_))+R[7]+4249261313&4294967295,S=k+(x<<22&4294967295|x>>>10),x=_+(b^S&(k^b))+R[8]+1770035416&4294967295,_=S+(x<<7&4294967295|x>>>25),x=b+(k^_&(S^k))+R[9]+2336552879&4294967295,b=_+(x<<12&4294967295|x>>>20),x=k+(S^b&(_^S))+R[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=S+(_^k&(b^_))+R[11]+2304563134&4294967295,S=k+(x<<22&4294967295|x>>>10),x=_+(b^S&(k^b))+R[12]+1804603682&4294967295,_=S+(x<<7&4294967295|x>>>25),x=b+(k^_&(S^k))+R[13]+4254626195&4294967295,b=_+(x<<12&4294967295|x>>>20),x=k+(S^b&(_^S))+R[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=S+(_^k&(b^_))+R[15]+1236535329&4294967295,S=k+(x<<22&4294967295|x>>>10),x=_+(k^b&(S^k))+R[1]+4129170786&4294967295,_=S+(x<<5&4294967295|x>>>27),x=b+(S^k&(_^S))+R[6]+3225465664&4294967295,b=_+(x<<9&4294967295|x>>>23),x=k+(_^S&(b^_))+R[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=S+(b^_&(k^b))+R[0]+3921069994&4294967295,S=k+(x<<20&4294967295|x>>>12),x=_+(k^b&(S^k))+R[5]+3593408605&4294967295,_=S+(x<<5&4294967295|x>>>27),x=b+(S^k&(_^S))+R[10]+38016083&4294967295,b=_+(x<<9&4294967295|x>>>23),x=k+(_^S&(b^_))+R[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=S+(b^_&(k^b))+R[4]+3889429448&4294967295,S=k+(x<<20&4294967295|x>>>12),x=_+(k^b&(S^k))+R[9]+568446438&4294967295,_=S+(x<<5&4294967295|x>>>27),x=b+(S^k&(_^S))+R[14]+3275163606&4294967295,b=_+(x<<9&4294967295|x>>>23),x=k+(_^S&(b^_))+R[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=S+(b^_&(k^b))+R[8]+1163531501&4294967295,S=k+(x<<20&4294967295|x>>>12),x=_+(k^b&(S^k))+R[13]+2850285829&4294967295,_=S+(x<<5&4294967295|x>>>27),x=b+(S^k&(_^S))+R[2]+4243563512&4294967295,b=_+(x<<9&4294967295|x>>>23),x=k+(_^S&(b^_))+R[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=S+(b^_&(k^b))+R[12]+2368359562&4294967295,S=k+(x<<20&4294967295|x>>>12),x=_+(S^k^b)+R[5]+4294588738&4294967295,_=S+(x<<4&4294967295|x>>>28),x=b+(_^S^k)+R[8]+2272392833&4294967295,b=_+(x<<11&4294967295|x>>>21),x=k+(b^_^S)+R[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=S+(k^b^_)+R[14]+4259657740&4294967295,S=k+(x<<23&4294967295|x>>>9),x=_+(S^k^b)+R[1]+2763975236&4294967295,_=S+(x<<4&4294967295|x>>>28),x=b+(_^S^k)+R[4]+1272893353&4294967295,b=_+(x<<11&4294967295|x>>>21),x=k+(b^_^S)+R[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=S+(k^b^_)+R[10]+3200236656&4294967295,S=k+(x<<23&4294967295|x>>>9),x=_+(S^k^b)+R[13]+681279174&4294967295,_=S+(x<<4&4294967295|x>>>28),x=b+(_^S^k)+R[0]+3936430074&4294967295,b=_+(x<<11&4294967295|x>>>21),x=k+(b^_^S)+R[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=S+(k^b^_)+R[6]+76029189&4294967295,S=k+(x<<23&4294967295|x>>>9),x=_+(S^k^b)+R[9]+3654602809&4294967295,_=S+(x<<4&4294967295|x>>>28),x=b+(_^S^k)+R[12]+3873151461&4294967295,b=_+(x<<11&4294967295|x>>>21),x=k+(b^_^S)+R[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=S+(k^b^_)+R[2]+3299628645&4294967295,S=k+(x<<23&4294967295|x>>>9),x=_+(k^(S|~b))+R[0]+4096336452&4294967295,_=S+(x<<6&4294967295|x>>>26),x=b+(S^(_|~k))+R[7]+1126891415&4294967295,b=_+(x<<10&4294967295|x>>>22),x=k+(_^(b|~S))+R[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=S+(b^(k|~_))+R[5]+4237533241&4294967295,S=k+(x<<21&4294967295|x>>>11),x=_+(k^(S|~b))+R[12]+1700485571&4294967295,_=S+(x<<6&4294967295|x>>>26),x=b+(S^(_|~k))+R[3]+2399980690&4294967295,b=_+(x<<10&4294967295|x>>>22),x=k+(_^(b|~S))+R[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=S+(b^(k|~_))+R[1]+2240044497&4294967295,S=k+(x<<21&4294967295|x>>>11),x=_+(k^(S|~b))+R[8]+1873313359&4294967295,_=S+(x<<6&4294967295|x>>>26),x=b+(S^(_|~k))+R[15]+4264355552&4294967295,b=_+(x<<10&4294967295|x>>>22),x=k+(_^(b|~S))+R[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=S+(b^(k|~_))+R[13]+1309151649&4294967295,S=k+(x<<21&4294967295|x>>>11),x=_+(k^(S|~b))+R[4]+4149444226&4294967295,_=S+(x<<6&4294967295|x>>>26),x=b+(S^(_|~k))+R[11]+3174756917&4294967295,b=_+(x<<10&4294967295|x>>>22),x=k+(_^(b|~S))+R[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=S+(b^(k|~_))+R[9]+3951481745&4294967295,y.g[0]=y.g[0]+_&4294967295,y.g[1]=y.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+b&4294967295}r.prototype.u=function(y,_){_===void 0&&(_=y.length);for(var S=_-this.blockSize,R=this.B,k=this.h,b=0;b<_;){if(k==0)for(;b<=S;)i(this,y,b),b+=this.blockSize;if(typeof y=="string"){for(;b<_;)if(R[k++]=y.charCodeAt(b++),k==this.blockSize){i(this,R),k=0;break}}else for(;b<_;)if(R[k++]=y[b++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var _=1;_<y.length-8;++_)y[_]=0;var S=8*this.o;for(_=y.length-8;_<y.length;++_)y[_]=S&255,S/=256;for(this.u(y),y=Array(16),_=S=0;4>_;++_)for(var R=0;32>R;R+=8)y[S++]=this.g[_]>>>R&255;return y};function s(y,_){var S=a;return Object.prototype.hasOwnProperty.call(S,y)?S[y]:S[y]=_(y)}function o(y,_){this.h=_;for(var S=[],R=!0,k=y.length-1;0<=k;k--){var b=y[k]|0;R&&b==_||(S[k]=b,R=!1)}this.g=S}var a={};function u(y){return-128<=y&&128>y?s(y,function(_){return new o([_|0],0>_?-1:0)}):new o([y|0],0>y?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return f;if(0>y)return P(c(-y));for(var _=[],S=1,R=0;y>=S;R++)_[R]=y/S|0,S*=4294967296;return new o(_,0)}function h(y,_){if(y.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(y.charAt(0)=="-")return P(h(y.substring(1),_));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(_,8)),R=f,k=0;k<y.length;k+=8){var b=Math.min(8,y.length-k),x=parseInt(y.substring(k,k+b),_);8>b?(b=c(Math.pow(_,b)),R=R.j(b).add(c(x))):(R=R.j(S),R=R.add(c(x)))}return R}var f=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var y=0,_=1,S=0;S<this.g.length;S++){var R=this.i(S);y+=(0<=R?R:4294967296+R)*_,_*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T(this))return"0";if(A(this))return"-"+P(this).toString(y);for(var _=c(Math.pow(y,6)),S=this,R="";;){var k=O(S,_).g;S=E(S,k.j(_));var b=((0<S.g.length?S.g[0]:S.h)>>>0).toString(y);if(S=k,T(S))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function T(y){if(y.h!=0)return!1;for(var _=0;_<y.g.length;_++)if(y.g[_]!=0)return!1;return!0}function A(y){return y.h==-1}t.l=function(y){return y=E(this,y),A(y)?-1:T(y)?0:1};function P(y){for(var _=y.g.length,S=[],R=0;R<_;R++)S[R]=~y.g[R];return new o(S,~y.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(y){for(var _=Math.max(this.g.length,y.g.length),S=[],R=0,k=0;k<=_;k++){var b=R+(this.i(k)&65535)+(y.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);R=x>>>16,b&=65535,x&=65535,S[k]=x<<16|b}return new o(S,S[S.length-1]&-2147483648?-1:0)};function E(y,_){return y.add(P(_))}t.j=function(y){if(T(this)||T(y))return f;if(A(this))return A(y)?P(this).j(P(y)):P(P(this).j(y));if(A(y))return P(this.j(P(y)));if(0>this.l(I)&&0>y.l(I))return c(this.m()*y.m());for(var _=this.g.length+y.g.length,S=[],R=0;R<2*_;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<y.g.length;k++){var b=this.i(R)>>>16,x=this.i(R)&65535,Ee=y.i(k)>>>16,Ne=y.i(k)&65535;S[2*R+2*k]+=x*Ne,v(S,2*R+2*k),S[2*R+2*k+1]+=b*Ne,v(S,2*R+2*k+1),S[2*R+2*k+1]+=x*Ee,v(S,2*R+2*k+1),S[2*R+2*k+2]+=b*Ee,v(S,2*R+2*k+2)}for(R=0;R<_;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=_;R<2*_;R++)S[R]=0;return new o(S,0)};function v(y,_){for(;(y[_]&65535)!=y[_];)y[_+1]+=y[_]>>>16,y[_]&=65535,_++}function C(y,_){this.g=y,this.h=_}function O(y,_){if(T(_))throw Error("division by zero");if(T(y))return new C(f,f);if(A(y))return _=O(P(y),_),new C(P(_.g),P(_.h));if(A(_))return _=O(y,P(_)),new C(P(_.g),_.h);if(30<y.g.length){if(A(y)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var S=m,R=_;0>=R.l(y);)S=U(S),R=U(R);var k=B(S,1),b=B(R,1);for(R=B(R,2),S=B(S,2);!T(R);){var x=b.add(R);0>=x.l(y)&&(k=k.add(S),b=x),R=B(R,1),S=B(S,1)}return _=E(y,k.j(_)),new C(k,_)}for(k=f;0<=y.l(_);){for(S=Math.max(1,Math.floor(y.m()/_.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(S),x=b.j(_);A(x)||0<x.l(y);)S-=R,b=c(S),x=b.j(_);T(b)&&(b=m),k=k.add(b),y=E(y,x)}return new C(k,y)}t.A=function(y){return O(this,y).h},t.and=function(y){for(var _=Math.max(this.g.length,y.g.length),S=[],R=0;R<_;R++)S[R]=this.i(R)&y.i(R);return new o(S,this.h&y.h)},t.or=function(y){for(var _=Math.max(this.g.length,y.g.length),S=[],R=0;R<_;R++)S[R]=this.i(R)|y.i(R);return new o(S,this.h|y.h)},t.xor=function(y){for(var _=Math.max(this.g.length,y.g.length),S=[],R=0;R<_;R++)S[R]=this.i(R)^y.i(R);return new o(S,this.h^y.h)};function U(y){for(var _=y.g.length+1,S=[],R=0;R<_;R++)S[R]=y.i(R)<<1|y.i(R-1)>>>31;return new o(S,y.h)}function B(y,_){var S=_>>5;_%=32;for(var R=y.g.length-S,k=[],b=0;b<R;b++)k[b]=0<_?y.i(b+S)>>>_|y.i(b+S+1)<<32-_:y.i(b+S);return new o(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,LT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,as=o}).apply(typeof D0<"u"?D0:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MT,VT,xa,jT,Ku,sp,FT,UT,$T;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in p))break e;p=p[L]}l=l[l.length-1],w=p[l],d=d(w),d!=w&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,w=!1,L={next:function(){if(!w&&p<l.length){var j=p++;return{value:d(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function I(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function T(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(w,L,j){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return d.prototype[L].apply(w,X)}}function A(l){const d=l.length;if(0<d){const p=Array(d);for(let w=0;w<d;w++)p[w]=l[w];return p}return[]}function P(l,d){for(let p=1;p<arguments.length;p++){const w=arguments[p];if(u(w)){const L=l.length||0,j=w.length||0;l.length=L+j;for(let X=0;X<j;X++)l[L+X]=w[X]}else l.push(w)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var U=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function B(l,d,p){for(const w in l)d.call(p,l[w],w,l)}function y(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(p in w)l[p]=w[p];for(let j=0;j<S.length;j++)p=S[j],Object.prototype.hasOwnProperty.call(w,p)&&(l[p]=w[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function b(l){a.setTimeout(()=>{throw l},0)}function x(){var l=ae;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ee{constructor(){this.h=this.g=null}add(d,p){const w=Ne.get();w.set(d,p),this.h?this.h.next=w:this.g=w,this.h=w}}var Ne=new E(()=>new Bt,l=>l.reset());class Bt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let He,z=!1,ae=new Ee,ue=()=>{const l=a.Promise.resolve(void 0);He=()=>{l.then(Ae)}};var Ae=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(p){b(p)}var d=Ne;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}z=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function K(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}K.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function ie(l,d){if(K.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(U){e:{try{O(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:M[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ie.aa.h.call(this)}}T(ie,K);var M={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Y=0;function qe(l,d,p,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!w,this.ha=L,this.key=++Y,this.da=this.fa=!1}function Ie(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,d,p,w,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var X=$e(l,d,w,L);return-1<X?(d=l[X],p||(d.fa=!1)):(d=new qe(d,this.src,j,!!w,L),d.fa=p,l.push(d)),d};function se(l,d){var p=d.type;if(p in l.g){var w=l.g[p],L=Array.prototype.indexOf.call(w,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(Ie(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function $e(l,d,p,w){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==w)return L}return-1}var pt="closure_lm_"+(1e6*Math.random()|0),Te={};function ze(l,d,p,w,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)ze(l,d[j],p,w,L);return null}return p=Ue(p),l&&l[he]?l.K(d,p,c(w)?!!w.capture:!!w,L):ke(l,d,p,!1,w,L)}function ke(l,d,p,w,L,j){if(!d)throw Error("Invalid event type");var X=c(L)?!!L.capture:!!L,Be=gt(l);if(Be||(l[pt]=Be=new Ce(l)),p=Be.add(d,p,w,X,j),p.proxy)return p;if(w=mt(),p.proxy=w,w.src=l,w.listener=p,l.addEventListener)J||(L=X),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(Er(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function mt(){function l(p){return d.call(l.src,l.listener,p)}const d=yn;return l}function rr(l,d,p,w,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)rr(l,d[j],p,w,L);else w=c(w)?!!w.capture:!!w,p=Ue(p),l&&l[he]?(l=l.i,d=String(d).toString(),d in l.g&&(j=l.g[d],p=$e(j,p,w,L),-1<p&&(Ie(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete l.g[d],l.h--)))):l&&(l=gt(l))&&(d=l.g[d.toString()],l=-1,d&&(l=$e(d,p,w,L)),(p=-1<l?d[l]:null)&&it(p))}function it(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[he])se(d.i,l);else{var p=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(p,w,l.capture):d.detachEvent?d.detachEvent(Er(p),w):d.addListener&&d.removeListener&&d.removeListener(w),(p=gt(d))?(se(p,l),p.h==0&&(p.src=null,d[pt]=null)):Ie(l)}}}function Er(l){return l in Te?Te[l]:Te[l]="on"+l}function yn(l,d){if(l.da)l=!0;else{d=new ie(d,this);var p=l.listener,w=l.ha||l.src;l.fa&&it(l),l=p.call(w,d)}return l}function gt(l){return l=l[pt],l instanceof Ce?l:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ue(l){return typeof l=="function"?l:(l[de]||(l[de]=function(d){return l.handleEvent(d)}),l[de])}function Me(){W.call(this),this.i=new Ce(this),this.M=this,this.F=null}T(Me,W),Me.prototype[he]=!0,Me.prototype.removeEventListener=function(l,d,p,w){rr(this,l,d,p,w)};function Ye(l,d){var p,w=l.F;if(w)for(p=[];w;w=w.F)p.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new K(d,l);else if(d instanceof K)d.target=d.target||l;else{var L=d;d=new K(w,l),R(d,L)}if(L=!0,p)for(var j=p.length-1;0<=j;j--){var X=d.g=p[j];L=Ht(X,w,!0,d)&&L}if(X=d.g=l,L=Ht(X,w,!0,d)&&L,L=Ht(X,w,!1,d)&&L,p)for(j=0;j<p.length;j++)X=d.g=p[j],L=Ht(X,w,!1,d)&&L}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],w=0;w<p.length;w++)Ie(p[w]);delete l.g[d],l.h--}}this.F=null},Me.prototype.K=function(l,d,p,w){return this.i.add(String(l),d,!1,p,w)},Me.prototype.L=function(l,d,p,w){return this.i.add(String(l),d,!0,p,w)};function Ht(l,d,p,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var X=d[j];if(X&&!X.da&&X.capture==p){var Be=X.listener,Lt=X.ha||X.src;X.fa&&se(l.i,X),L=Be.call(Lt,w)!==!1&&L}}return L&&!w.defaultPrevented}function qi(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Kl(l){l.g=qi(()=>{l.g=null,l.i&&(l.i=!1,Kl(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ir extends W{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(l){W.call(this),this.h=l,this.g={}}T(Yr,W);var Zo=[];function ea(l){B(l.g,function(d,p){this.g.hasOwnProperty(p)&&it(d)},l),l.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),ea(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=a.JSON.stringify,Ql=a.JSON.parse,js=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fs(){}Fs.prototype.h=null;function Us(l){return l.h||(l.h=l.i())}function Yl(){}var Xr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function na(){K.call(this,"d")}T(na,K);function $s(){K.call(this,"c")}T($s,K);var Tr={},N=null;function V(){return N=N||new Me}Tr.La="serverreachability";function F(l){K.call(this,Tr.La,l)}T(F,K);function Q(l){const d=V();Ye(d,new F(d))}Tr.STAT_EVENT="statevent";function ee(l,d){K.call(this,Tr.STAT_EVENT,l),this.stat=d}T(ee,K);function oe(l){const d=V();Ye(d,new ee(d,l))}Tr.Ma="timingevent";function le(l,d){K.call(this,Tr.Ma,l),this.size=d}T(le,K);function Z(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function me(){this.g=!0}me.prototype.xa=function(){this.g=!1};function ge(l,d,p,w,L,j){l.info(function(){if(l.g)if(j)for(var X="",Be=j.split("&"),Lt=0;Lt<Be.length;Lt++){var Oe=Be[Lt].split("=");if(1<Oe.length){var qt=Oe[0];Oe=Oe[1];var Wt=qt.split("_");X=2<=Wt.length&&Wt[1]=="type"?X+(qt+"="+Oe+"&"):X+(qt+"=redacted&")}}else X=null;else X=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+p+`
`+X})}function St(l,d,p,w,L,j,X){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+p+`
`+j+" "+X})}function tt(l,d,p,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+We(l,p)+(w?" "+w:"")})}function fe(l,d){l.info(function(){return"TIMEOUT: "+d})}me.prototype.info=function(){};function We(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var w=p[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return ta(p)}catch{return d}}var st={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function zn(){}T(zn,Fs),zn.prototype.g=function(){return new XMLHttpRequest},zn.prototype.i=function(){return{}},xn=new zn;function tn(l,d,p,w){this.j=l,this.i=d,this.l=p,this.R=w||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ir}function Ir(){this.i=null,this.g="",this.h=!1}var vn={},Zr={};function ei(l,d,p){l.L=1,l.v=Zl(Cr(d)),l.m=p,l.P=!0,Wi(l,null)}function Wi(l,d){l.F=Date.now(),Ot(l),l.A=Cr(l.v);var p=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),gy(p.i,"t",w),l.C=0,p=l.j.J,l.h=new Ir,l.g=Oy(l.j,p?d:null,!l.m),0<l.O&&(l.M=new ir(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Zo[0]=L.toString()),L=Zo);for(var j=0;j<L.length;j++){var X=ze(p,L[j],w||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Q(),ge(l.i,l.u,l.A,l.l,l.R,l.m)}tn.prototype.ca=function(l){l=l.target;const d=this.M;d&&Rr(l)==3?d.j():this.Y(l)},tn.prototype.Y=function(l){try{if(l==this.g)e:{const Wt=Rr(this.g);var d=this.g.Ba();const Hs=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Iy(this.g)))){this.J||Wt!=4||d==7||(d==8||0>=Hs?Q(3):Q(2)),Sr(this);var p=this.g.Z();this.X=p;t:if(Se(this)){var w=Iy(this.g);l="";var L=w.length,j=Rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),ti(this);var X="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(j&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=p==200,St(this.i,this.u,this.A,this.l,this.R,Wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Lt=this.g;if((Be=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Be)){var Oe=Be;break t}}Oe=null}if(p=Oe)tt(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,th(this,p);else{this.o=!1,this.s=3,oe(12),Ar(this),ti(this);break e}}if(this.P){p=!0;let Bn;for(;!this.J&&this.C<X.length;)if(Bn=Nt(this,X),Bn==Zr){Wt==4&&(this.s=4,oe(14),p=!1),tt(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==vn){this.s=4,oe(15),tt(this.i,this.l,X,"[Invalid Chunk]"),p=!1;break}else tt(this.i,this.l,Bn,null),th(this,Bn);if(Se(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||X.length!=0||this.h.h||(this.s=1,oe(16),p=!1),this.o=this.o&&p,!p)tt(this.i,this.l,X,"[Invalid Chunked Response]"),Ar(this),ti(this);else if(0<X.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ah(qt),qt.M=!0,oe(11))}}else tt(this.i,this.l,X,null),th(this,X);Wt==4&&Ar(this),this.o&&!this.J&&(Wt==4?ky(this.j,this):(this.o=!1,Ot(this)))}else hA(this.g),p==400&&0<X.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Ar(this),ti(this)}}}catch{}finally{}};function Se(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Nt(l,d){var p=l.C,w=d.indexOf(`
`,p);return w==-1?Zr:(p=Number(d.substring(p,w)),isNaN(p)?vn:(w+=1,w+p>d.length?Zr:(d=d.slice(w,w+p),l.C=w+p,d)))}tn.prototype.cancel=function(){this.J=!0,Ar(this)};function Ot(l){l.S=Date.now()+l.I,vt(l,l.I)}function vt(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Z(m(l.ba,l),d)}function Sr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(fe(this.i,this.A),this.L!=2&&(Q(),oe(17)),Ar(this),this.s=2,ti(this)):vt(this,this.S-l)};function ti(l){l.j.G==0||l.J||ky(l.j,l)}function Ar(l){Sr(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ea(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function th(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||nh(p.h,l))){if(!l.K&&nh(p.h,l)&&p.G==3){try{var w=p.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)iu(p),nu(p);else break e;oh(p),oe(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=Z(m(p.Za,p),6e3));if(1>=ay(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ki(p,11)}else if((l.K||p.g==l)&&iu(p),!v(d))for(L=p.Da.g.parse(d),d=0;d<L.length;d++){let Oe=L[d];if(p.T=Oe[0],Oe=Oe[1],p.G==2)if(Oe[0]=="c"){p.K=Oe[1],p.ia=Oe[2];const qt=Oe[3];qt!=null&&(p.la=qt,p.j.info("VER="+p.la));const Wt=Oe[4];Wt!=null&&(p.Aa=Wt,p.j.info("SVER="+p.Aa));const Hs=Oe[5];Hs!=null&&typeof Hs=="number"&&0<Hs&&(w=1.5*Hs,p.L=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const Bn=l.g;if(Bn){const ou=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var j=w.h;j.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(rh(j,j.h),j.h=null))}if(w.D){const lh=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;lh&&(w.ya=lh,Xe(w.I,w.D,lh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),w=p;var X=l;if(w.qa=Ny(w,w.J?w.ia:null,w.W),X.K){ly(w.h,X);var Be=X,Lt=w.L;Lt&&(Be.I=Lt),Be.B&&(Sr(Be),Ot(Be)),w.g=X}else Py(w);0<p.i.length&&ru(p)}else Oe[0]!="stop"&&Oe[0]!="close"||Ki(p,7);else p.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ki(p,7):sh(p):Oe[0]!="noop"&&p.l&&p.l.ta(Oe),p.v=0)}}Q(4)}catch{}}var YS=class{constructor(l,d){this.g=l,this.map=d}};function sy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ay(l){return l.h?1:l.g?l.g.size:0}function nh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function rh(l,d){l.g?l.g.add(d):l.h=d}function ly(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}sy.prototype.cancel=function(){if(this.i=uy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function uy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return A(l.i)}function XS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,w=0;w<p;w++)d.push(l[w]);return d}d=[],p=0;for(w in l)d[p++]=l[w];return d}function JS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const w in l)d[p++]=w;return d}}}function cy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=JS(l),w=XS(l),L=w.length,j=0;j<L;j++)d.call(void 0,w[j],p&&p[j],l)}var dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZS(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var w=l[p].indexOf("="),L=null;if(0<=w){var j=l[p].substring(0,w);L=l[p].substring(w+1)}else j=l[p];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Gi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Gi){this.h=l.h,Xl(this,l.j),this.o=l.o,this.g=l.g,Jl(this,l.s),this.l=l.l;var d=l.i,p=new sa;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),hy(this,p),this.m=l.m}else l&&(d=String(l).match(dy))?(this.h=!1,Xl(this,d[1]||"",!0),this.o=ra(d[2]||""),this.g=ra(d[3]||"",!0),Jl(this,d[4]),this.l=ra(d[5]||"",!0),hy(this,d[6]||"",!0),this.m=ra(d[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}Gi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(ia(d,fy,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(ia(d,fy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ia(p,p.charAt(0)=="/"?nA:tA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ia(p,iA)),l.join("")};function Cr(l){return new Gi(l)}function Xl(l,d,p){l.j=p?ra(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Jl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function hy(l,d,p){d instanceof sa?(l.i=d,sA(l.i,l.h)):(p||(d=ia(d,rA)),l.i=new sa(d,l.h))}function Xe(l,d,p){l.i.set(d,p)}function Zl(l){return Xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ra(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ia(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,eA),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function eA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fy=/[#\/\?@]/g,tA=/[#\?:]/g,nA=/[#\?]/g,rA=/[#\?@]/g,iA=/#/g;function sa(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ni(l){l.g||(l.g=new Map,l.h=0,l.i&&ZS(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=sa.prototype,t.add=function(l,d){ni(this),this.i=null,l=zs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function py(l,d){ni(l),d=zs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function my(l,d){return ni(l),d=zs(l,d),l.g.has(d)}t.forEach=function(l,d){ni(this),this.g.forEach(function(p,w){p.forEach(function(L){l.call(d,L,w,this)},this)},this)},t.na=function(){ni(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let w=0;w<d.length;w++){const L=l[w];for(let j=0;j<L.length;j++)p.push(d[w])}return p},t.V=function(l){ni(this);let d=[];if(typeof l=="string")my(this,l)&&(d=d.concat(this.g.get(zs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return ni(this),this.i=null,l=zs(this,l),my(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function gy(l,d,p){py(l,d),0<p.length&&(l.i=null,l.g.set(zs(l,d),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var w=d[p];const j=encodeURIComponent(String(w)),X=this.V(w);for(w=0;w<X.length;w++){var L=j;X[w]!==""&&(L+="="+encodeURIComponent(String(X[w]))),l.push(L)}}return this.i=l.join("&")};function zs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function sA(l,d){d&&!l.j&&(ni(l),l.i=null,l.g.forEach(function(p,w){var L=w.toLowerCase();w!=L&&(py(this,w),gy(this,L,p))},l)),l.j=d}function oA(l,d){const p=new me;if(a.Image){const w=new Image;w.onload=I(ri,p,"TestLoadImage: loaded",!0,d,w),w.onerror=I(ri,p,"TestLoadImage: error",!1,d,w),w.onabort=I(ri,p,"TestLoadImage: abort",!1,d,w),w.ontimeout=I(ri,p,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function aA(l,d){const p=new me,w=new AbortController,L=setTimeout(()=>{w.abort(),ri(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?ri(p,"TestPingServer: ok",!0,d):ri(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),ri(p,"TestPingServer: error",!1,d)})}function ri(l,d,p,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(p)}catch{}}function lA(){this.g=new js}function uA(l,d,p){const w=p||"";try{cy(l,function(L,j){let X=L;c(L)&&(X=ta(L)),d.push(w+j+"="+encodeURIComponent(X))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function oa(l){this.l=l.Ub||null,this.j=l.eb||!1}T(oa,Fs),oa.prototype.g=function(){return new eu(this.l,this.j)},oa.prototype.i=function(l){return function(){return l}}({});function eu(l,d){Me.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(eu,Me),t=eu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,la(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,aa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function yy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?aa(this):la(this),this.readyState==3&&yy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,aa(this))},t.Qa=function(l){this.g&&(this.response=l,aa(this))},t.ga=function(){this.g&&aa(this)};function aa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,la(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function la(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vy(l){let d="";return B(l,function(p,w){d+=w,d+=":",d+=p,d+=`\r
`}),d}function ih(l,d,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=vy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Xe(l,d,p))}function dt(l){Me.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(dt,Me);var cA=/^https?$/i,dA=["POST","PUT"];t=dt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Us(this.o):Us(xn),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){_y(this,j);return}if(l=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)p.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())p.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),L=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dA,d,void 0))||w||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of p)this.g.setRequestHeader(j,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ty(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){_y(this,j)}};function _y(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,wy(l),tu(l)}function wy(l){l.A||(l.A=!0,Ye(l,"complete"),Ye(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ye(this,"complete"),Ye(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ey(this):this.bb())},t.bb=function(){Ey(this)};function Ey(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Rr(l)!=4||l.Z()!=2)){if(l.u&&Rr(l)==4)qi(l.Ea,0,l);else if(Ye(l,"readystatechange"),Rr(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var w;if(w=X===0){var L=String(l.D).match(dy)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),w=!cA.test(L?L.toLowerCase():"")}p=w}if(p)Ye(l,"complete"),Ye(l,"success");else{l.m=6;try{var j=2<Rr(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",wy(l)}}finally{tu(l)}}}}function tu(l,d){if(l.g){Ty(l);const p=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Ye(l,"ready");try{p.onreadystatechange=w}catch{}}}function Ty(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Rr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ql(d)}};function Iy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function hA(l){const d={};l=(l.g&&2<=Rr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(v(l[w]))continue;var p=k(l[w]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[L]||[];d[L]=j,j.push(p)}y(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ua(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Sy(l){this.Aa=0,this.i=[],this.j=new me,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ua("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ua("baseRetryDelayMs",5e3,l),this.cb=ua("retryDelaySeedMs",1e4,l),this.Wa=ua("forwardChannelMaxRetries",2,l),this.wa=ua("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new sy(l&&l.concurrentRequestLimit),this.Da=new lA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sy.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,w){oe(0),this.W=l,this.H=d||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.I=Ny(this,null,this.W),ru(this)};function sh(l){if(Ay(l),l.G==3){var d=l.U++,p=Cr(l.I);if(Xe(p,"SID",l.K),Xe(p,"RID",d),Xe(p,"TYPE","terminate"),ca(l,p),d=new tn(l,l.j,d),d.L=2,d.v=Zl(Cr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Oy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ot(d)}Dy(l)}function nu(l){l.g&&(ah(l),l.g.cancel(),l.g=null)}function Ay(l){nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),iu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ru(l){if(!oy(l.h)&&!l.s){l.s=!0;var d=l.Ga;He||ue(),z||(He(),z=!0),ae.add(d,l),l.B=0}}function fA(l,d){return ay(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Z(m(l.Ga,l,d),by(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new tn(this,this.j,l);let j=this.o;if(this.S&&(j?(j=_(j),R(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ry(this,L,d),p=Cr(this.I),Xe(p,"RID",l),Xe(p,"CVER",22),this.D&&Xe(p,"X-HTTP-Session-Id",this.D),ca(this,p),j&&(this.O?d="headers="+encodeURIComponent(String(vy(j)))+"&"+d:this.m&&ih(p,this.m,j)),rh(this.h,L),this.Ua&&Xe(p,"TYPE","init"),this.P?(Xe(p,"$req",d),Xe(p,"SID","null"),L.T=!0,ei(L,p,null)):ei(L,p,d),this.G=2}}else this.G==3&&(l?Cy(this,l):this.i.length==0||oy(this.h)||Cy(this))};function Cy(l,d){var p;d?p=d.l:p=l.U++;const w=Cr(l.I);Xe(w,"SID",l.K),Xe(w,"RID",p),Xe(w,"AID",l.T),ca(l,w),l.m&&l.o&&ih(w,l.m,l.o),p=new tn(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ry(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),rh(l.h,p),ei(p,w,d)}function ca(l,d){l.H&&B(l.H,function(p,w){Xe(d,w,p)}),l.l&&cy({},function(p,w){Xe(d,w,p)})}function Ry(l,d,p){p=Math.min(l.i.length,p);var w=l.l?m(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const X=["count="+p];j==-1?0<p?(j=L[0].g,X.push("ofs="+j)):j=0:X.push("ofs="+j);let Be=!0;for(let Lt=0;Lt<p;Lt++){let Oe=L[Lt].g;const qt=L[Lt].map;if(Oe-=j,0>Oe)j=Math.max(0,L[Lt].g-100),Be=!1;else try{uA(qt,X,"req"+Oe+"_")}catch{w&&w(qt)}}if(Be){w=X.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,w}function Py(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;He||ue(),z||(He(),z=!0),ae.add(d,l),l.v=0}}function oh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Z(m(l.Fa,l),by(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,xy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Z(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),nu(this),xy(this))};function ah(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function xy(l){l.g=new tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Cr(l.qa);Xe(d,"RID","rpc"),Xe(d,"SID",l.K),Xe(d,"AID",l.T),Xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Xe(d,"TO",l.ja),Xe(d,"TYPE","xmlhttp"),ca(l,d),l.m&&l.o&&ih(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Zl(Cr(d)),p.m=null,p.P=!0,Wi(p,l)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),oh(this),oe(19))};function iu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ky(l,d){var p=null;if(l.g==d){iu(l),ah(l),l.g=null;var w=2}else if(nh(l.h,d))p=d.D,ly(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=V(),Ye(w,new le(w,p)),ru(l)}else Py(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&fA(l,d)||w==2&&oh(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),L){case 1:Ki(l,5);break;case 4:Ki(l,10);break;case 3:Ki(l,6);break;default:Ki(l,2)}}}function by(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Ki(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),w=l.Xa;const L=!w;w=new Gi(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xl(w,"https"),Zl(w),L?oA(w.toString(),p):aA(w.toString(),p)}else oe(2);l.G=0,l.l&&l.l.sa(d),Dy(l),Ay(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Dy(l){if(l.G=0,l.ka=[],l.l){const d=uy(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Ny(l,d,p){var w=p instanceof Gi?Cr(p):new Gi(p);if(w.g!="")d&&(w.g=d+"."+w.g),Jl(w,w.s);else{var L=a.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new Gi(null);w&&Xl(j,w),d&&(j.g=d),L&&Jl(j,L),p&&(j.l=p),w=j}return p=l.D,d=l.ya,p&&d&&Xe(w,p,d),Xe(w,"VER",l.la),ca(l,w),w}function Oy(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new dt(new oa({eb:p})):new dt(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ly(){}t=Ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(l,d){return new _n(l,d)};function _n(l,d){Me.call(this),this.g=new Sy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!v(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Bs(this)}T(_n,Me),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){sh(this.g)},_n.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ta(l),l=p);d.i.push(new YS(d.Ya++,l)),d.G==3&&ru(d)},_n.prototype.N=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,_n.aa.N.call(this)};function My(l){na.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(My,na);function Vy(){$s.call(this),this.status=1}T(Vy,$s);function Bs(l){this.g=l}T(Bs,Ly),Bs.prototype.ua=function(){Ye(this.g,"a")},Bs.prototype.ta=function(l){Ye(this.g,new My(l))},Bs.prototype.sa=function(l){Ye(this.g,new Vy)},Bs.prototype.ra=function(){Ye(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,$T=function(){return new su},UT=function(){return V()},FT=Tr,sp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},st.NO_ERROR=0,st.TIMEOUT=8,st.HTTP_ERROR=6,Ku=st,Jr.COMPLETE="complete",jT=Jr,Yl.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,xa=Yl,VT=oa,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,MT=dt}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const N0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new dd("@firebase/firestore");function _a(){return ws.logLevel}function re(t,...e){if(ws.logLevel<=xe.DEBUG){const n=e.map(Qm);ws.debug(`Firestore (${Go}): ${t}`,...n)}}function Hr(t,...e){if(ws.logLevel<=xe.ERROR){const n=e.map(Qm);ws.error(`Firestore (${Go}): ${t}`,...n)}}function xo(t,...e){if(ws.logLevel<=xe.WARN){const n=e.map(Qm);ws.warn(`Firestore (${Go}): ${t}`,...n)}}function Qm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+t;throw Hr(e),new Error(e)}function Qe(t,e){t||ye()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class e2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class t2{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new zT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new Yt(e)}}class n2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class r2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new n2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class s2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new i2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=o2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function ko(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Rt(0,0))}static max(){return new ve(new Rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ze extends yl{construct(e,n,r){return new Ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const a2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends yl{construct(e,n,r){return new jt(e,n,r)}static isValidIdentifier(e){return a2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new jt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ze.fromString(e))}static fromName(e){return new ce(Ze.fromString(e).popFirst(5))}static empty(){return new ce(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ze(e.slice()))}}function l2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new Rt(n+1,0):new Rt(n,r));return new Ni(i,ce.empty(),e)}function u2(t){return new Ni(t.readTime,t.key,-1)}class Ni{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ni(ve.min(),ce.empty(),-1)}static max(){return new Ni(ve.max(),ce.empty(),-1)}}function c2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==d2)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(i=>i?q.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new q((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new q((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function f2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ym{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ym.oe=-1;function vd(t){return t==null}function Oc(t){return t===0&&1/t==-1/0}function p2(t){return typeof t=="number"&&Number.isInteger(t)&&!Oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Vt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Vt.RED,this.left=i??Vt.EMPTY,this.right=s??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L0(this.data.getIterator())}getIteratorFrom(e){return new L0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ut(this.comparator);return n.data=e,n}}class L0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new Tn([])}unionWith(e){let n=new Ut(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qT("Invalid base64 string: "+s):s}}(e);return new en(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const m2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=m2.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Et(t.seconds),nanos:Et(t.nanos)}}function Et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jm(t){const e=t.mapValue.fields.__previous_value__;return Xm(e)?Jm(e):e}function vl(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class _l{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _l("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xm(t)?4:y2(t)?9007199254740991:10:ye()}function _r(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Oi(i.timestampValue),a=Oi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Es(i.bytesValue).isEqual(Es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Et(i.geoPointValue.latitude)===Et(s.geoPointValue.latitude)&&Et(i.geoPointValue.longitude)===Et(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Et(i.integerValue)===Et(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Et(i.doubleValue),a=Et(s.doubleValue);return o===a?Oc(o)===Oc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(O0(o)!==O0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_r(o[u],a[u])))return!1;return!0}(t,e);default:return ye()}}function wl(t,e){return(t.values||[]).find(n=>_r(n,e))!==void 0}function bo(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Et(s.integerValue||s.doubleValue),u=Et(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return M0(t.timestampValue,e.timestampValue);case 4:return M0(vl(t),vl(e));case 5:return Le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Es(s),u=Es(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=Le(a[c],u[c]);if(h!==0)return h}return Le(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Le(Et(s.latitude),Et(o.latitude));return a!==0?a:Le(Et(s.longitude),Et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=bo(a[c],u[c]);if(h)return h}return Le(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ru.mapValue&&o===Ru.mapValue)return 0;if(s===Ru.mapValue)return 1;if(o===Ru.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=Le(u[f],h[f]);if(m!==0)return m;const I=bo(a[u[f]],c[h[f]]);if(I!==0)return I}return Le(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ye()}}function M0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=Oi(t),r=Oi(e),i=Le(n.seconds,r.seconds);return i!==0?i:Le(n.nanos,r.nanos)}function Do(t){return op(t)}function op(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Oi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=op(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${op(n.fields[o])}`;return i+"}"}(t.mapValue):ye()}function V0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ap(t){return!!t&&"integerValue"in t}function Zm(t){return!!t&&"arrayValue"in t}function j0(t){return!!t&&"nullValue"in t}function F0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qu(t){return!!t&&"mapValue"in t}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function y2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=jt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dn(Ha(this.value))}}function WT(t){const e=[];return bs(t.fields,(n,r)=>{const i=new jt([n]);if(Qu(r)){const s=WT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Jt(e,0,ve.min(),ve.min(),ve.min(),dn.empty(),0)}static newFoundDocument(e,n,r,i){return new Jt(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new Jt(e,2,n,ve.min(),ve.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,ve.min(),ve.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function U0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=bo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function v2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class GT{}class It extends GT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new w2(e,n,r):n==="array-contains"?new I2(e,r):n==="in"?new S2(e,r):n==="not-in"?new A2(e,r):n==="array-contains-any"?new C2(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new E2(e,r):new T2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bo(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends GT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new er(e,n)}matches(e){return KT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KT(t){return t.op==="and"}function QT(t){return _2(t)&&KT(t)}function _2(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function lp(t){if(t instanceof It)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(QT(t))return t.filters.map(e=>lp(e)).join(",");{const e=t.filters.map(n=>lp(n)).join(",");return`${t.op}(${e})`}}function YT(t,e){return t instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&_r(r.value,i.value)}(t,e):t instanceof er?function(r,i){return i instanceof er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&YT(o,i.filters[a]),!0):!1}(t,e):void ye()}function XT(t){return t instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(XT).join(" ,")+"}"}(t):"Filter"}class w2 extends It{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class E2 extends It{constructor(e,n){super(e,"in",n),this.keys=JT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class T2 extends It{constructor(e,n){super(e,"not-in",n),this.keys=JT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function JT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class I2 extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zm(n)&&wl(n.arrayValue,this.value)}}class S2 extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class A2 extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class C2 extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class R2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function z0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new R2(t,e,n,r,i,s,o)}function eg(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function tg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!v2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!YT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$0(t.startAt,e.startAt)&&$0(t.endAt,e.endAt)}function up(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function P2(t,e,n,r,i,s,o,a){return new Ml(t,e,n,r,i,s,o,a)}function ng(t){return new Ml(t)}function B0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZT(t){return t.collectionGroup!==null}function qa(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ut(jt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Mc(s,r))}),n.has(jt.keyField().canonicalString())||e.ce.push(new Mc(jt.keyField(),r))}return e.ce}function gr(t){const e=_e(t);return e.le||(e.le=x2(e,qa(t))),e.le}function x2(t,e){if(t.limitType==="F")return z0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mc(i.field,s)});const n=t.endAt?new Lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lc(t.startAt.position,t.startAt.inclusive):null;return z0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cp(t,e){const n=t.filters.concat([e]);return new Ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dp(t,e,n){return new Ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _d(t,e){return tg(gr(t),gr(e))&&t.limitType===e.limitType}function eI(t){return`${eg(gr(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>XT(i)).join(", ")}]`),vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(gr(t))}; limitType=${t.limitType})`}function wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of qa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=U0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,qa(r),i)||r.endAt&&!function(o,a,u){const c=U0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,qa(r),i))}(t,e)}function k2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tI(t){return(e,n)=>{let r=!1;for(const i of qa(t)){const s=b2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function b2(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?bo(u,c):ye()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=new ct(ce.comparator);function qr(){return D2}const nI=new ct(ce.comparator);function ka(...t){let e=nI;for(const n of t)e=e.insert(n.key,n);return e}function rI(t){let e=nI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return Wa()}function iI(){return Wa()}function Wa(){return new Ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const N2=new ct(ce.comparator),O2=new Ut(ce.comparator);function Re(...t){let e=O2;for(const n of t)e=e.add(n);return e}const L2=new Ut(Le);function M2(){return L2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oc(e)?"-0":e}}function oI(t){return{integerValue:""+t}}function V2(t,e){return p2(e)?oI(e):sI(t,e)}/**
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
 */class Ed{constructor(){this._=void 0}}function j2(t,e,n){return t instanceof Vc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Xm(s)&&(s=Jm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof No?lI(t,e):t instanceof Oo?uI(t,e):function(i,s){const o=aI(i,s),a=H0(o)+H0(i.Pe);return ap(o)&&ap(i.Pe)?oI(a):sI(i.serializer,a)}(t,e)}function F2(t,e,n){return t instanceof No?lI(t,e):t instanceof Oo?uI(t,e):n}function aI(t,e){return t instanceof jc?function(r){return ap(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vc extends Ed{}class No extends Ed{constructor(e){super(),this.elements=e}}function lI(t,e){const n=cI(e);for(const r of t.elements)n.some(i=>_r(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends Ed{constructor(e){super(),this.elements=e}}function uI(t,e){let n=cI(e);for(const r of t.elements)n=n.filter(i=>!_r(i,r));return{arrayValue:{values:n}}}class jc extends Ed{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function H0(t){return Et(t.integerValue||t.doubleValue)}function cI(t){return Zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.field=e,this.transform=n}}function U2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof No&&i instanceof No||r instanceof Oo&&i instanceof Oo?ko(r.elements,i.elements,_r):r instanceof jc&&i instanceof jc?_r(r.Pe,i.Pe):r instanceof Vc&&i instanceof Vc}(t.transform,e.transform)}class $2{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Td{}function hI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rg(t.key,Vn.none()):new Vl(t.key,t.data,Vn.none());{const n=t.data,r=dn.empty();let i=new Ut(jt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(t.key,r,new Tn(i.toArray()),Vn.none())}}function z2(t,e,n){t instanceof Vl?function(i,s,o){const a=i.value.clone(),u=W0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(i,s,o){if(!Yu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=W0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(fI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,r){return t instanceof Vl?function(s,o,a,u){if(!Yu(s.precondition,o))return a;const c=s.value.clone(),h=G0(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zi?function(s,o,a,u){if(!Yu(s.precondition,o))return a;const c=G0(s.fieldTransforms,u,o),h=o.data;return h.setAll(fI(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Yu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function B2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=aI(r.transform,i||null);s!=null&&(n===null&&(n=dn.empty()),n.set(r.field,s))}return n||null}function q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ko(r,i,(s,o)=>U2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends Td{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends Td{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function W0(t,e,n){const r=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,F2(o,a,n[i]))}return r}function G0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,j2(s,o,e))}return r}class rg extends Td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H2 extends Td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&z2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=hI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(n,r)=>q0(n,r))&&ko(this.baseMutations,e.baseMutations,(n,r)=>q0(n,r))}}class ig{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Qe(e.mutations.length===r.length);let i=function(){return N2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ig(e,n,r,i)}}/**
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
 */class W2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class G2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,be;function K2(t){switch(t){default:return ye();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function pI(t){if(t===void 0)return Hr("GRPC error has no .code"),$.UNKNOWN;switch(t){case _t.OK:return $.OK;case _t.CANCELLED:return $.CANCELLED;case _t.UNKNOWN:return $.UNKNOWN;case _t.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case _t.INTERNAL:return $.INTERNAL;case _t.UNAVAILABLE:return $.UNAVAILABLE;case _t.UNAUTHENTICATED:return $.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case _t.NOT_FOUND:return $.NOT_FOUND;case _t.ALREADY_EXISTS:return $.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return $.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case _t.ABORTED:return $.ABORTED;case _t.OUT_OF_RANGE:return $.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return $.UNIMPLEMENTED;case _t.DATA_LOSS:return $.DATA_LOSS;default:return ye()}}(be=_t||(_t={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Q2(){return new TextEncoder}/**
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
 */const Y2=new as([4294967295,4294967295],0);function K0(t){const e=Q2().encode(t),n=new LT;return n.update(e),new Uint8Array(n.digest())}function Q0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new as([n,r],0),new as([i,s],0)]}class sg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=as.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(as.fromNumber(r)));return i.compare(Y2)===1&&(i=new as([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=K0(e),[r,i]=Q0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=K0(e),[r,i]=Q0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Id(ve.min(),i,new ct(Le),qr(),Re())}}class jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jl(r,n,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class mI{constructor(e,n){this.targetId=e,this.me=n}}class gI{constructor(e,n,r=en.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Y0{constructor(){this.fe=0,this.ge=J0(),this.pe=en.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Re(),n=Re(),r=Re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ye()}}),new jl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=J0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class X2{constructor(e){this.Le=e,this.Be=new Map,this.ke=qr(),this.qe=X0(),this.Qe=new ct(Le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(up(s))if(r===0){const o=new ce(s.path);this.Ue(n,o,Jt.newNoDocument(o,ve.min()))}else Qe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Es(r).toUint8Array()}catch(u){if(u instanceof qT)return xo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new sg(o,i,s)}catch(u){return xo(u instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&up(a.target)){const u=new ce(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Jt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Id(e,n,this.Qe,this.ke,r);return this.ke=qr(),this.qe=X0(),this.Qe=new ct(Le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Y0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ut(Le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Y0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function X0(){return new ct(ce.comparator)}function J0(){return new ct(ce.comparator)}const J2={asc:"ASCENDING",desc:"DESCENDING"},Z2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eN={and:"AND",or:"OR"};class tN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hp(t,e){return t.useProto3Json||vd(e)?e:{value:e}}function Fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nN(t,e){return Fc(t,e.toTimestamp())}function yr(t){return Qe(!!t),ve.fromTimestamp(function(n){const r=Oi(n);return new Rt(r.seconds,r.nanos)}(t))}function og(t,e){return fp(t,e).canonicalString()}function fp(t,e){const n=function(i){return new Ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vI(t){const e=Ze.fromString(t);return Qe(II(e)),e}function pp(t,e){return og(t.databaseId,e.path)}function qh(t,e){const n=vI(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(wI(n))}function _I(t,e){return og(t.databaseId,e)}function rN(t){const e=vI(t);return e.length===4?Ze.emptyPath():wI(e)}function mp(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wI(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Z0(t,e,n){return{name:pp(t,e),fields:n.value.mapValue.fields}}function iN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Qe(h===void 0||typeof h=="string"),en.fromBase64String(h||"")):(Qe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),en.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?$.UNKNOWN:pI(c.code);return new ne(h,c.message||"")}(o);n=new gI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qh(t,r.document.name),s=yr(r.document.updateTime),o=r.document.createTime?yr(r.document.createTime):ve.min(),a=new dn({mapValue:{fields:r.document.fields}}),u=Jt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Xu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qh(t,r.document),s=r.readTime?yr(r.readTime):ve.min(),o=Jt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qh(t,r.document),s=r.removedTargetIds||[];n=new Xu([],s,i,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new G2(i,s),a=r.targetId;n=new mI(a,o)}}return n}function sN(t,e){let n;if(e instanceof Vl)n={update:Z0(t,e.key,e.value)};else if(e instanceof rg)n={delete:pp(t,e.key)};else if(e instanceof zi)n={update:Z0(t,e.key,e.data),updateMask:pN(e.fieldMask)};else{if(!(e instanceof H2))return ye();n={verify:pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof No)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ye()}(t,e.precondition)),n}function oN(t,e){return t&&t.length>0?(Qe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?yr(i.updateTime):yr(s);return o.isEqual(ve.min())&&(o=yr(s)),new $2(o,i.transformResults||[])}(n,e))):[]}function aN(t,e){return{documents:[_I(t,e.path)]}}function lN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_I(t,i);const s=function(c){if(c.length!==0)return TI(er.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ks(m.field),direction:dN(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function uN(t){let e=rN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=EI(f);return m instanceof er&&QT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Mc(Qs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,vd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,I=f.values||[];return new Lc(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,I=f.values||[];return new Lc(I,m)}(n.endAt)),P2(e,i,o,s,a,"F",u,c)}function cN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function EI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qs(n.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qs(n.unaryFilter.field);return It.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return It.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(t):t.fieldFilter!==void 0?function(n){return It.create(Qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>EI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ye()}}(n.compositeFilter.op))}(t):ye()}function dN(t){return J2[t]}function hN(t){return Z2[t]}function fN(t){return eN[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Qs(t){return jt.fromServerFormat(t.fieldPath)}function TI(t){return t instanceof It?function(n){if(n.op==="=="){if(F0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(j0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(F0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(j0(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:hN(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(i=>TI(i));return r.length===1?r[0]:{compositeFilter:{op:fN(n.op),filters:r}}}(t):ye()}function pN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function II(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r,i,s=ve.min(),o=ve.min(),a=en.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.ct=e}}function gN(t){const e=uN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dp(e,e.limit,"L"):e}/**
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
 */class yN{constructor(){this._n=new vN}addToCollectionParentIndex(e,n){return this._n.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Ni.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class vN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ut(Ze.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ut(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Lo(0)}static Ln(){return new Lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.changes=new Ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ga(r.mutation,i,Tn.empty(),Rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Re()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ka();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qr();const o=Wa(),a=function(){return Wa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof zi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ga(h.mutation,c,h.mutation.getFieldMask(),Rt.now())):o.set(c.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new wN(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wa();let i=new ct((o,a)=>o-a),s=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Tn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||Re()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=iI();h.forEach(m=>{if(!s.has(m)){const I=hI(n.get(m),r.get(m));I!==null&&f.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ZT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):q.resolve(ns());let a=-1,u=s;return o.next(c=>q.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?q.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Re())).next(h=>({batchId:a,changes:rI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let i=ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ka();return this.indexManager.getCollectionParents(e,s).next(a=>q.forEach(a,u=>{const c=function(f,m){return new Ml(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Jt.newInvalidDocument(h)))});let a=ka();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Ga(h.mutation,c,Tn.empty(),Rt.now()),wd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return q.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:yr(i.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:gN(i.bundledQuery),readTime:yr(i.readTime)}}(n)),q.resolve()}}/**
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
 */class IN{constructor(){this.overlays=new ct(ce.comparator),this.hr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return q.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return q.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ns(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ns(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return q.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new W2(n,r));let s=this.hr.get(n);s===void 0&&(s=Re(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Pr=new Ut(Pt.Ir),this.Tr=new Ut(Pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ce(new Ze([])),r=new Pt(n,e),i=new Pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ce(new Ze([])),r=new Pt(n,e),i=new Pt(n,e+1);let s=Re();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ce.comparator(e.key,n.key)||Le(e.pr,n.pr)}static Er(e,n){return Le(e.pr,n.pr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ut(Pt.Ir)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new q2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pt(n,0),i=new Pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ut(Le);return n.forEach(i=>{const s=new Pt(i,0),o=new Pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),q.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ce.isDocumentKey(s)||(s=s.child(""));const o=new Pt(new ce(s),0);let a=new Ut(Le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),q.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return q.forEach(n.mutations,i=>{const s=new Pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Pt(n,0),i=this.wr.firstAfterOrEqual(r);return q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.vr=e,this.docs=function(){return new ct(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=qr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Jt.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qr();const o=n.path,a=new ce(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||c2(u2(h),r)<=0||(i.has(h.key)||wd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return q.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ye()}Fr(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CN(this)}getSize(e){return q.resolve(this.size)}}class CN extends _N{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.persistence=e,this.Mr=new Ko(n=>eg(n),tg),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ag,this.targetCount=0,this.Lr=Lo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),q.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.qn(n),q.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),q.waitFor(s).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),q.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ym(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new RN(this),this.indexManager=new yN,this.remoteDocumentCache=function(i){return new AN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mN(n),this.$r=new TN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new SN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const i=new xN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return q.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class xN extends h2{constructor(e){super(),this.currentSequenceNumber=e}}class lg{constructor(e){this.persistence=e,this.zr=new ag,this.jr=null}static Hr(e){return new lg(e)}get Jr(){if(this.jr)return this.jr;throw ye()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),q.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Jr,r=>{const i=ce.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ve.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return q.or([()=>q.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Re(),i=Re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ug(e,n.fromCache,r,i)}}/**
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
 */class kN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return iP()?8:f2(zt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kN;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(_a()<=xe.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),q.resolve()):(_a()<=xe.DEBUG&&re("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(_a()<=xe.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gr(n))):q.resolve())}ji(e,n){if(B0(n))return q.resolve(null);let r=gr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dp(n,null,"F"),r=gr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Re(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,dp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return B0(n)||i.isEqual(ve.min())?q.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?q.resolve(null):(_a()<=xe.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gs(n)),this.es(e,o,n,l2(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ut(tI(e));return n.forEach((i,s)=>{wd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return _a()<=xe.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ni.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ct(Le),this.rs=new Ko(s=>eg(s),tg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function NN(t,e,n,r){return new DN(t,e,n,r)}async function SI(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Re();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function ON(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let I=q.resolve();return m.forEach(T=>{I=I.next(()=>h.getEntry(u,T)).next(A=>{const P=c.docVersions.get(T);Qe(P!==null),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AI(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function LN(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?I=I.withResumeToken(en.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(f,I),function(A,P,E){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,I,h)&&a.push(n.Qr.updateTargetData(s,I))});let u=qr(),c=Re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(MN(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(ve.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return q.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function MN(t,e,n){let r=Re(),i=Re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ve.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function VN(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jN(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,q.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new yi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function gp(t,e,n){const r=_e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ll(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function e_(t,e,n){const r=_e(t);let i=ve.min(),s=Re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=_e(u),m=f.rs.get(h);return m!==void 0?q.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,gr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?s:Re())).next(a=>(FN(r,k2(e),a),{documents:a,hs:s})))}function FN(t,e,n){let r=t.ss.get(e)||ve.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class t_{constructor(){this.activeTargetIds=M2()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UN{constructor(){this.no=new t_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new t_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $N{io(e){}shutdown(){}}/**
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
 */class n_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pu=null;function Wh(){return Pu===null?Pu=function(){return 268435456+Math.round(2147483648*Math.random())}():Pu++,"0x"+Pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class HN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Wh(),u=this.vo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(re("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw xo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=zN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Wh();return new Promise((o,a)=>{const u=new MT;u.setWithCredentials(!0),u.listenOnce(jT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ku.NO_ERROR:const h=u.getResponseJson();re(Qt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ku.TIMEOUT:re(Qt,`RPC '${e}' ${s} timed out`),a(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const f=u.getStatus();if(re(Qt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const T=function(P){const E=P.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(E)>=0?E:$.UNKNOWN}(I.status);a(new ne(T,I.message))}else a(new ne($.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ne($.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{re(Qt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);re(Qt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Wh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$T(),a=UT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new VT({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");re(Qt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,I=!1;const T=new BN({lo:P=>{I?re(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(re(Qt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),re(Qt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),A=(P,E,v)=>{P.listen(E,C=>{try{v(C)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,xa.EventType.OPEN,()=>{I||(re(Qt,`RPC '${e}' stream ${i} transport opened.`),T.mo())}),A(f,xa.EventType.CLOSE,()=>{I||(I=!0,re(Qt,`RPC '${e}' stream ${i} transport closed`),T.po())}),A(f,xa.EventType.ERROR,P=>{I||(I=!0,xo(Qt,`RPC '${e}' stream ${i} transport errored:`,P),T.po(new ne($.UNAVAILABLE,"The operation could not be completed")))}),A(f,xa.EventType.MESSAGE,P=>{var E;if(!I){const v=P.data[0];Qe(!!v);const C=v,O=C.error||((E=C[0])===null||E===void 0?void 0:E.error);if(O){re(Qt,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let B=function(S){const R=_t[S];if(R!==void 0)return pI(R)}(U),y=O.message;B===void 0&&(B=$.INTERNAL,y="Unknown error status: "+U+" with message "+O.message),I=!0,T.po(new ne(B,y)),f.close()}else re(Qt,`RPC '${e}' stream ${i} received:`,v),T.yo(v)}}),A(a,FT.STAT_EVENT,P=>{P.stat===sp.PROXY?re(Qt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===sp.NOPROXY&&re(Qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.fo()},0),T}}function Gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t){return new tN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new CI(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Hr(n.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ne($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qN extends RI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=iN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?yr(o.readTime):ve.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=mp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=up(u)?{documents:aN(s,u)}:{query:lN(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yI(s,o.resumeToken);const c=hp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Fc(s,o.snapshotVersion.toTimestamp());const c=hp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=cN(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=mp(this.serializer),n.removeTarget=e,this.i_(n)}}class WN extends RI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=oN(e.writeResults,e.commitTime),r=yr(e.commitTime);return this.listener.A_(r,n)}return Qe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=mp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sN(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,fp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,fp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class KN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Hr(n),this.y_=!1):re("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ds(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=_e(u);c.M_.add(4),await Fl(c),c.N_.set("Unknown"),c.M_.delete(4),await Ad(c)}(this))})}),this.N_=new KN(r,i)}}async function Ad(t){if(Ds(t))for(const e of t.x_)await e(!0)}async function Fl(t){for(const e of t.x_)await e(!1)}function PI(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),fg(n)?hg(n):Qo(n).Xo()&&dg(n,e))}function cg(t,e){const n=_e(t),r=Qo(n);n.F_.delete(e),r.Xo()&&xI(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ds(n)&&n.N_.set("Unknown"))}function dg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).P_(e)}function xI(t,e){t.L_.xe(e),Qo(t).I_(e)}function hg(t){t.L_=new X2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.N_.w_()}function fg(t){return Ds(t)&&!Qo(t).Zo()&&t.F_.size>0}function Ds(t){return _e(t).M_.size===0}function kI(t){t.L_=void 0}async function YN(t){t.N_.set("Online")}async function XN(t){t.F_.forEach((e,n)=>{dg(t,e)})}async function JN(t,e){kI(t),fg(t)?(t.N_.D_(e),hg(t)):t.N_.set("Unknown")}async function ZN(t,e,n){if(t.N_.set("Online"),e instanceof gI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uc(t,r)}else if(e instanceof Xu?t.L_.Ke(e):e instanceof mI?t.L_.He(e):t.L_.We(e),!n.isEqual(ve.min()))try{const r=await AI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(en.EMPTY_BYTE_STRING,h.snapshotVersion)),xI(s,u);const f=new yi(h.target,u,c,h.sequenceNumber);dg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await Uc(t,r)}}async function Uc(t,e,n){if(!Ll(e))throw e;t.M_.add(1),await Fl(t),t.N_.set("Offline"),n||(n=()=>AI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ad(t)})}function bI(t,e){return e().catch(n=>Uc(t,n,e))}async function Cd(t){const e=_e(t),n=Li(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;eO(e);)try{const i=await VN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,tO(e,i)}catch(i){await Uc(e,i)}DI(e)&&NI(e)}function eO(t){return Ds(t)&&t.v_.length<10}function tO(t,e){t.v_.push(e);const n=Li(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function DI(t){return Ds(t)&&!Li(t).Zo()&&t.v_.length>0}function NI(t){Li(t).start()}async function nO(t){Li(t).V_()}async function rO(t){const e=Li(t);for(const n of t.v_)e.d_(n.mutations)}async function iO(t,e,n){const r=t.v_.shift(),i=ig.from(r,e,n);await bI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cd(t)}async function sO(t,e){e&&Li(t).E_&&await async function(r,i){if(function(o){return K2(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();Li(r).t_(),await bI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cd(r)}}(t,e),DI(t)&&NI(t)}async function r_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Ds(n);n.M_.add(3),await Fl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ad(n)}async function oO(t,e){const n=_e(t);e?(n.M_.delete(2),await Ad(n)):e||(n.M_.add(2),await Fl(n),n.N_.set("Unknown"))}function Qo(t){return t.B_||(t.B_=function(n,r,i){const s=_e(n);return s.f_(),new qN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:YN.bind(null,t),To:XN.bind(null,t),Ao:JN.bind(null,t),h_:ZN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),fg(t)?hg(t):t.N_.set("Unknown")):(await t.B_.stop(),kI(t))})),t.B_}function Li(t){return t.k_||(t.k_=function(n,r,i){const s=_e(n);return s.f_(),new WN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:nO.bind(null,t),Ao:sO.bind(null,t),R_:rO.bind(null,t),A_:iO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Cd(t)):(await t.k_.stop(),t.v_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(t,e){if(Hr("AsyncQueue",`${e}: ${t}`),Ll(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=ka(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.q_=new ct(ce.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ye():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mo(e,n,Eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_d(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class lO{constructor(){this.queries=new Ko(e=>eI(e),_d),this.onlineState="Unknown",this.z_=new Set}}async function OI(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new aO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=mg(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&gg(n)}async function LI(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uO(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&gg(n)}function cO(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function gg(t){t.z_.forEach(e=>{e.next()})}var yp,s_;(s_=yp||(yp={})).J_="default",s_.Cache="cache";class MI{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==yp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.key=e}}class jI{constructor(e){this.key=e}}class dO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Re(),this.mutatedKeys=Re(),this.Ia=tI(e),this.Ta=new Eo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new i_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),I=wd(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),A=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;m&&I?m.data.isEqual(I.data)?T!==A&&(r.track({type:3,doc:I}),P=!0):this.Ra(m,I)||(r.track({type:2,doc:I}),P=!0,(u&&this.Ia(I,u)>0||c&&this.Ia(I,c)<0)&&(a=!0)):!m&&I?(r.track({type:0,doc:I}),P=!0):m&&!I&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(a=!0)),P&&(I?(o=o.add(I),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(I,T){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return A(I)-A(T)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Mo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new i_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Re(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new jI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new VI(r))}),n}pa(e){this.la=e.hs,this.Pa=Re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Mo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class hO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fO{constructor(e){this.key=e,this.wa=!1}}class pO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ko(a=>eI(a),_d),this.Da=new Map,this.Ca=new Set,this.va=new ct(ce.comparator),this.Fa=new Map,this.Ma=new ag,this.xa={},this.Oa=new Map,this.Na=Lo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function mO(t,e,n=!0){const r=HI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await FI(r,e,n,!0),i}async function gO(t,e){const n=HI(t);await FI(n,e,!0,!1)}async function FI(t,e,n,r){const i=await jN(t.localStore,gr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await yO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&PI(t.remoteStore,i),a}async function yO(t,e,n,r,i){t.Ba=(f,m,I)=>async function(A,P,E,v){let C=P.view.da(E);C.Xi&&(C=await e_(A.localStore,P.query,!1).then(({documents:y})=>P.view.da(y,C)));const O=v&&v.targetChanges.get(P.targetId),U=v&&v.targetMismatches.get(P.targetId)!=null,B=P.view.applyChanges(C,A.isPrimaryClient,O,U);return a_(A,P.targetId,B.fa),B.snapshot}(t,f,m,I);const s=await e_(t.localStore,e,!0),o=new dO(e,s.hs),a=o.da(s.documents),u=jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);a_(t,n,c.fa);const h=new hO(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function vO(t,e,n){const r=_e(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!_d(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cg(r.remoteStore,i.targetId),vp(r,i.targetId)}).catch(Ol)):(vp(r,i.targetId),await gp(r.localStore,i.targetId,!0))}async function _O(t,e){const n=_e(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cg(n.remoteStore,r.targetId))}async function wO(t,e,n){const r=RO(t);try{const i=await function(o,a){const u=_e(o),c=Rt.now(),h=a.reduce((I,T)=>I.add(T.key),Re());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let T=qr(),A=Re();return u.os.getEntries(I,h).next(P=>{T=P,T.forEach((E,v)=>{v.isValidDocument()||(A=A.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,T)).next(P=>{f=P;const E=[];for(const v of a){const C=B2(v,f.get(v.key).overlayedDocument);C!=null&&E.push(new zi(v.key,C,WT(C.value.mapValue),Vn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,E,a)}).next(P=>{m=P;const E=P.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(I,P.batchId,E)})}).then(()=>({batchId:m.batchId,changes:rI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ct(Le)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ul(r,i.changes),await Cd(r.remoteStore)}catch(i){const s=mg(i,"Failed to persist write");n.reject(s)}}async function UI(t,e){const n=_e(t);try{const r=await LN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Qe(o.wa):i.removedDocuments.size>0&&(Qe(o.wa),o.wa=!1))}),await Ul(n,r,e)}catch(r){await Ol(r)}}function o_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=_e(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&gg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EO(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ct(ce.comparator);o=o.insert(s,Jt.newNoDocument(s,ve.min()));const a=Re().add(s),u=new Id(ve.min(),new Map,new ct(Le),o,a);await UI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),yg(r)}else await gp(r.localStore,e,!1).then(()=>vp(r,e,n)).catch(Ol)}async function TO(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await ON(n.localStore,e);zI(n,r,null),$I(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ul(n,i)}catch(i){await Ol(i)}}async function IO(t,e,n){const r=_e(t);try{const i=await function(o,a){const u=_e(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Qe(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);zI(r,e,n),$I(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ul(r,i)}catch(i){await Ol(i)}}function $I(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function zI(t,e,n){const r=_e(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||BI(t,r)})}function BI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(cg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),yg(t))}function a_(t,e,n){for(const r of n)r instanceof VI?(t.Ma.addReference(r.key,e),SO(t,r)):r instanceof jI?(re("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||BI(t,r.key)):ye()}function SO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(re("SyncEngine","New document in limbo: "+n),t.Ca.add(r),yg(t))}function yg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ce(Ze.fromString(e)),r=t.Na.next();t.Fa.set(r,new fO(n)),t.va=t.va.insert(n,r),PI(t.remoteStore,new yi(gr(ng(n.path)),r,"TargetPurposeLimboResolution",Ym.oe))}}async function Ul(t,e,n){const r=_e(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=ug.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=_e(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>q.forEach(c,m=>q.forEach(m.qi,I=>h.persistence.referenceDelegate.addReference(f,m.targetId,I)).next(()=>q.forEach(m.Qi,I=>h.persistence.referenceDelegate.removeReference(f,m.targetId,I)))))}catch(f){if(!Ll(f))throw f;re("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const I=h.ns.get(m),T=I.snapshotVersion,A=I.withLastLimboFreeSnapshotVersion(T);h.ns=h.ns.insert(m,A)}}}(r.localStore,s))}async function AO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await SI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new ne($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ul(n,r.us)}}function CO(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return Re().add(r.key);{let i=Re();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function HI(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=UI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EO.bind(null,e),e.Sa.h_=uO.bind(null,e.eventManager),e.Sa.ka=cO.bind(null,e.eventManager),e}function RO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IO.bind(null,e),e}class l_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NN(this.persistence,new bN,e.initialUser,this.serializer)}createPersistence(e){return new PN(lg.Hr,this.serializer)}createSharedClientState(e){return new UN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AO.bind(null,this.syncEngine),await oO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lO}()}createDatastore(e){const n=Sd(e.databaseInfo.databaseId),r=function(s){return new HN(s)}(e.databaseInfo);return function(s,o,a,u){return new GN(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new QN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>o_(this.syncEngine,n,0),function(){return n_.D()?new n_:new $N}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new pO(i,s,o,a,u,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=_e(r);re("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Fl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Yt.UNAUTHENTICATED,this.clientId=BT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{re("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(re("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await SI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function u_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bO(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>r_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>r_(e.remoteStore,i)),t._onlineComponents=e}function kO(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function bO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kO(n))throw n;xo("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new l_)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new l_);return t._offlineComponents}async function WI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await u_(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await u_(t,new PO))),t._onlineComponents}function DO(t){return WI(t).then(e=>e.syncEngine)}async function GI(t){const e=await WI(t),n=e.eventManager;return n.onListen=mO.bind(null,e.syncEngine),n.onUnlisten=vO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_O.bind(null,e.syncEngine),n}function NO(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new qI({next:m=>{o.enqueueAndForget(()=>LI(s,f));const I=m.docs.has(a);!I&&m.fromCache?c.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new MI(ng(a.path),h,{includeMetadataChanges:!0,ra:!0});return OI(s,f)}(await GI(t),t.asyncQueue,e,n,r)),r.promise}function OO(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new qI({next:m=>{o.enqueueAndForget(()=>LI(s,f)),m.fromCache&&u.source==="server"?c.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new MI(a,h,{includeMetadataChanges:!0,ra:!0});return OI(s,f)}(await GI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function KI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LO(t,e,n,r){if(e===!0&&r===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function d_(t){if(!ce.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h_(t){if(ce.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rd(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZD;switch(r.type){case"firstParty":return new r2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=c_.get(n);r&&(re("ComponentProvider","Removing Datastore"),c_.delete(n),r.terminate())}(this),Promise.resolve()}}function MO(t,e,n,r={}){var i;const s=(t=tr(t,Pd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Yt.MOCK_USER;else{a=ZR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Yt(c)}t._authCredentials=new e2(new zT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class on{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class Pi extends Yo{constructor(e,n,r){super(e,n,ng(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ce(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function Un(t,e,...n){if(t=bt(t),QI("collection","path",e),t instanceof Pd){const r=Ze.fromString(e,...n);return h_(r),new Pi(t,null,r)}{if(!(t instanceof on||t instanceof Pi))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return h_(r),new Pi(t.firestore,null,r)}}function rn(t,e,...n){if(t=bt(t),arguments.length===1&&(e=BT.newId()),QI("doc","path",e),t instanceof Pd){const r=Ze.fromString(e,...n);return d_(r),new on(t,null,new ce(r))}{if(!(t instanceof on||t instanceof Pi))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return d_(r),new on(t.firestore,t instanceof Pi?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new CI(this,"async_queue_retry"),this.hu=()=>{const n=Gh();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Vr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ll(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Hr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=pg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ye()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Ns extends Pd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new VO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||XI(this),this._firestoreClient.terminate()}}function YI(t,e){const n=typeof t=="object"?t:Om(),r=typeof t=="string"?t:"(default)",i=xs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XR("firestore");s&&MO(i,...s)}return i}function vg(t){return t._firestoreClient||XI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function XI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new g2(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,KI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(en.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vo(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function jO(){return new $l("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=/^__.*__$/;class UO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class JI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class xd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new xd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return $c(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(ZI(this.fu)&&FO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class $O{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sd(e)}Fu(e,n,r,i=!1){return new xd({fu:e,methodName:n,vu:r,path:jt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kd(t){const e=t._freezeSettings(),n=Sd(t._databaseId);return new $O(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eS(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Tg("Data must be an object, but it was:",o,r);const a=nS(r,o);let u,c;if(s.merge)u=new Tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=_p(e,f,n);if(!o.contains(m))throw new ne($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iS(h,m)||h.push(m)}u=new Tn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new UO(new dn(a),u,c)}class bd extends zl{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bd}}function tS(t,e,n){return new xd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wg extends zl{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=tS(this,e,!0),r=this.Mu.map(s=>Os(s,n)),i=new No(r);return new dI(e.path,i)}isEqual(e){return e instanceof wg&&ps(this.Mu,e.Mu)}}class Eg extends zl{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=tS(this,e,!0),r=this.Mu.map(s=>Os(s,n)),i=new Oo(r);return new dI(e.path,i)}isEqual(e){return e instanceof Eg&&ps(this.Mu,e.Mu)}}function zO(t,e,n,r){const i=t.Fu(1,e,n);Tg("Data must be an object, but it was:",i,r);const s=[],o=dn.empty();bs(r,(u,c)=>{const h=Ig(e,u,n);c=bt(c);const f=i.Su(h);if(c instanceof bd)s.push(h);else{const m=Os(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Tn(s);return new JI(o,a,i.fieldTransforms)}function BO(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[_p(e,r,n)],u=[i];if(s.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(_p(e,s[m])),u.push(s[m+1]);const c=[],h=dn.empty();for(let m=a.length-1;m>=0;--m)if(!iS(c,a[m])){const I=a[m];let T=u[m];T=bt(T);const A=o.Su(I);if(T instanceof bd)c.push(I);else{const P=Os(T,A);P!=null&&(c.push(I),h.set(I,P))}}const f=new Tn(c);return new JI(h,f,o.fieldTransforms)}function HO(t,e,n,r=!1){return Os(n,t.Fu(r?4:3,e))}function Os(t,e){if(rS(t=bt(t)))return Tg("Unsupported field value:",e,t),nS(t,e);if(t instanceof zl)return function(r,i){if(!ZI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Os(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return V2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Rt.fromDate(r);return{timestampValue:Fc(i.serializer,s)}}if(r instanceof Rt){const s=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fc(i.serializer,s)}}if(r instanceof _g)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vo)return{bytesValue:yI(i.serializer,r._byteString)};if(r instanceof on){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:og(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Rd(r)}`)}(t,e)}function nS(t,e){const n={};return HT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,i)=>{const s=Os(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof _g||t instanceof Vo||t instanceof on||t instanceof zl)}function Tg(t,e,n){if(!rS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function _p(t,e,n){if((e=bt(e))instanceof $l)return e._internalPath;if(typeof e=="string")return Ig(t,e);throw $c("Field path arguments must be of type string or ",t,!1,void 0,n)}const qO=new RegExp("[~\\*/\\[\\]]");function Ig(t,e,n){if(e.search(qO)>=0)throw $c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $l(...e.split("."))._internalPath}catch{throw $c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $c(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ne($.INVALID_ARGUMENT,a+t+u)}function iS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WO extends sS{data(){return super.data()}}function Sg(t,e){return typeof e=="string"?Ig(t,e):e instanceof $l?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ag{}class KO extends Ag{}function Ls(t,e,...n){let r=[];e instanceof Ag&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Hl).length,a=s.filter(u=>u instanceof Bl).length;if(o>1||o>0&&a>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bl extends KO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bl(e,n,r)}_apply(e){const n=this._parse(e);return oS(e._query,n),new Yo(e.firestore,e.converter,cp(e._query,n))}_parse(e){const n=kd(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){m_(f,h);const I=[];for(const T of f)I.push(p_(u,s,T));m={arrayValue:{values:I}}}else m=p_(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||m_(f,h),m=HO(a,o,f,h==="in"||h==="not-in");return It.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Mi(t,e,n){const r=e,i=Sg("where",t);return Bl._create(i,r,n)}class Hl extends Ag{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:er.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)oS(o,u),o=cp(o,u)}(e._query,n),new Yo(e.firestore,e.converter,cp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function QO(...t){return t.forEach(e=>YO("and",e)),Hl._create("and",t)}function p_(t,e,n){if(typeof(n=bt(n))=="string"){if(n==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ZT(e)&&n.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ze.fromString(n));if(!ce.isDocumentKey(r))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return V0(t,new ce(r))}if(n instanceof on)return V0(t,n._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rd(n)}.`)}function m_(t,e){if(!Array.isArray(t)||t.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function YO(t,e){if(!(e instanceof Bl||e instanceof Hl))throw new ne($.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class XO{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _g(Et(e.latitude),Et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=Oi(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ze.fromString(e);Qe(II(r));const i=new _l(r.get(1),r.get(3)),s=new ce(r.popFirst(5));return i.isEqual(n)||Hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lS extends sS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ju extends lS{data(e={}){return super.data(e)}}class JO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ju(this._firestore,this._userDataWriter,r.key,r,new Da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Da(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:ZO(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){t=tr(t,on);const e=tr(t.firestore,Ns);return NO(vg(e),t._key).then(n=>tL(e,t,n))}class uS extends XO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,n)}}function wr(t){t=tr(t,Yo);const e=tr(t.firestore,Ns),n=vg(e),r=new uS(e);return GO(t._query),OO(n,t._query).then(i=>new JO(e,r,t,i))}function eL(t,e,n){t=tr(t,on);const r=tr(t.firestore,Ns),i=aS(t.converter,e);return Dd(r,[eS(kd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vn.none())])}function xi(t,e,n,...r){t=tr(t,on);const i=tr(t.firestore,Ns),s=kd(i);let o;return o=typeof(e=bt(e))=="string"||e instanceof $l?BO(s,"updateDoc",t._key,e,n,r):zO(s,"updateDoc",t._key,e),Dd(i,[o.toMutation(t._key,Vn.exists(!0))])}function cS(t){return Dd(tr(t.firestore,Ns),[new rg(t._key,Vn.none())])}function Rg(t,e){const n=tr(t.firestore,Ns),r=rn(t),i=aS(t.converter,e);return Dd(n,[eS(kd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vn.exists(!1))]).then(()=>r)}function Dd(t,e){return function(r,i){const s=new Vr;return r.asyncQueue.enqueueAndForget(async()=>wO(await DO(r),i,s)),s.promise}(vg(t),e)}function tL(t,e,n){const r=n.docs.get(e._key),i=new uS(t);return new lS(t,i,e._key,r,new Da(n.hasPendingWrites,n.fromCache),e.converter)}function El(...t){return new wg("arrayUnion",t)}function Ka(...t){return new Eg("arrayRemove",t)}(function(e,n=!0){(function(i){Go=i})(Ho),vr(new Jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ns(new t2(r.getProvider("auth-internal")),new s2(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _l(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mn(N0,"4.6.3",e),Mn(N0,"4.6.3","esm2017")})();const nL={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},Pg=Nm(nL);YI(Pg);OT().then(t=>{t&&NT(Pg)});Wo(Pg);var dS={exports:{}},je={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg=Symbol.for("react.element"),kg=Symbol.for("react.portal"),Nd=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),rL=Symbol.for("react.server_context"),jd=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),zd=Symbol.for("react.lazy"),iL=Symbol.for("react.offscreen"),hS;hS=Symbol.for("react.module.reference");function $n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xg:switch(t=t.type,t){case Nd:case Ld:case Od:case Fd:case Ud:return t;default:switch(t=t&&t.$$typeof,t){case rL:case Vd:case jd:case zd:case $d:case Md:return t;default:return e}}case kg:return e}}}je.ContextConsumer=Vd;je.ContextProvider=Md;je.Element=xg;je.ForwardRef=jd;je.Fragment=Nd;je.Lazy=zd;je.Memo=$d;je.Portal=kg;je.Profiler=Ld;je.StrictMode=Od;je.Suspense=Fd;je.SuspenseList=Ud;je.isAsyncMode=function(){return!1};je.isConcurrentMode=function(){return!1};je.isContextConsumer=function(t){return $n(t)===Vd};je.isContextProvider=function(t){return $n(t)===Md};je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xg};je.isForwardRef=function(t){return $n(t)===jd};je.isFragment=function(t){return $n(t)===Nd};je.isLazy=function(t){return $n(t)===zd};je.isMemo=function(t){return $n(t)===$d};je.isPortal=function(t){return $n(t)===kg};je.isProfiler=function(t){return $n(t)===Ld};je.isStrictMode=function(t){return $n(t)===Od};je.isSuspense=function(t){return $n(t)===Fd};je.isSuspenseList=function(t){return $n(t)===Ud};je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Nd||t===Ld||t===Od||t===Fd||t===Ud||t===iL||typeof t=="object"&&t!==null&&(t.$$typeof===zd||t.$$typeof===$d||t.$$typeof===Md||t.$$typeof===Vd||t.$$typeof===jd||t.$$typeof===hS||t.getModuleId!==void 0)};je.typeOf=$n;dS.exports=je;var fS=dS.exports;function sL(t){function e(W,K,J,ie,M){for(var he=0,Y=0,qe=0,Ie=0,Ce,se,$e=0,pt=0,Te,ze=Te=Ce=0,ke=0,mt=0,rr=0,it=0,Er=J.length,yn=Er-1,gt,de="",Ue="",Me="",Ye="",Ht;ke<Er;){if(se=J.charCodeAt(ke),ke===yn&&Y+Ie+qe+he!==0&&(Y!==0&&(se=Y===47?10:47),Ie=qe=he=0,Er++,yn++),Y+Ie+qe+he===0){if(ke===yn&&(0<mt&&(de=de.replace(m,"")),0<de.trim().length)){switch(se){case 32:case 9:case 59:case 13:case 10:break;default:de+=J.charAt(ke)}se=59}switch(se){case 123:for(de=de.trim(),Ce=de.charCodeAt(0),Te=1,it=++ke;ke<Er;){switch(se=J.charCodeAt(ke)){case 123:Te++;break;case 125:Te--;break;case 47:switch(se=J.charCodeAt(ke+1)){case 42:case 47:e:{for(ze=ke+1;ze<yn;++ze)switch(J.charCodeAt(ze)){case 47:if(se===42&&J.charCodeAt(ze-1)===42&&ke+2!==ze){ke=ze+1;break e}break;case 10:if(se===47){ke=ze+1;break e}}ke=ze}}break;case 91:se++;case 40:se++;case 34:case 39:for(;ke++<yn&&J.charCodeAt(ke)!==se;);}if(Te===0)break;ke++}switch(Te=J.substring(it,ke),Ce===0&&(Ce=(de=de.replace(f,"").trim()).charCodeAt(0)),Ce){case 64:switch(0<mt&&(de=de.replace(m,"")),se=de.charCodeAt(1),se){case 100:case 109:case 115:case 45:mt=K;break;default:mt=Bt}if(Te=e(K,mt,Te,se,M+1),it=Te.length,0<z&&(mt=n(Bt,de,rr),Ht=a(3,Te,mt,K,x,b,it,se,M,ie),de=mt.join(""),Ht!==void 0&&(it=(Te=Ht.trim()).length)===0&&(se=0,Te="")),0<it)switch(se){case 115:de=de.replace(B,o);case 100:case 109:case 45:Te=de+"{"+Te+"}";break;case 107:de=de.replace(v,"$1 $2"),Te=de+"{"+Te+"}",Te=Ne===1||Ne===2&&s("@"+Te,3)?"@-webkit-"+Te+"@"+Te:"@"+Te;break;default:Te=de+Te,ie===112&&(Te=(Ue+=Te,""))}else Te="";break;default:Te=e(K,n(K,de,rr),Te,ie,M+1)}Me+=Te,Te=rr=mt=ze=Ce=0,de="",se=J.charCodeAt(++ke);break;case 125:case 59:if(de=(0<mt?de.replace(m,""):de).trim(),1<(it=de.length))switch(ze===0&&(Ce=de.charCodeAt(0),Ce===45||96<Ce&&123>Ce)&&(it=(de=de.replace(" ",":")).length),0<z&&(Ht=a(1,de,K,W,x,b,Ue.length,ie,M,ie))!==void 0&&(it=(de=Ht.trim()).length)===0&&(de="\0\0"),Ce=de.charCodeAt(0),se=de.charCodeAt(1),Ce){case 0:break;case 64:if(se===105||se===99){Ye+=de+J.charAt(ke);break}default:de.charCodeAt(it-1)!==58&&(Ue+=i(de,Ce,se,de.charCodeAt(2)))}rr=mt=ze=Ce=0,de="",se=J.charCodeAt(++ke)}}switch(se){case 13:case 10:Y===47?Y=0:1+Ce===0&&ie!==107&&0<de.length&&(mt=1,de+="\0"),0<z*ue&&a(0,de,K,W,x,b,Ue.length,ie,M,ie),b=1,x++;break;case 59:case 125:if(Y+Ie+qe+he===0){b++;break}default:switch(b++,gt=J.charAt(ke),se){case 9:case 32:if(Ie+he+Y===0)switch($e){case 44:case 58:case 9:case 32:gt="";break;default:se!==32&&(gt=" ")}break;case 0:gt="\\0";break;case 12:gt="\\f";break;case 11:gt="\\v";break;case 38:Ie+Y+he===0&&(mt=rr=1,gt="\f"+gt);break;case 108:if(Ie+Y+he+Ee===0&&0<ze)switch(ke-ze){case 2:$e===112&&J.charCodeAt(ke-3)===58&&(Ee=$e);case 8:pt===111&&(Ee=pt)}break;case 58:Ie+Y+he===0&&(ze=ke);break;case 44:Y+qe+Ie+he===0&&(mt=1,gt+="\r");break;case 34:case 39:Y===0&&(Ie=Ie===se?0:Ie===0?se:Ie);break;case 91:Ie+Y+qe===0&&he++;break;case 93:Ie+Y+qe===0&&he--;break;case 41:Ie+Y+he===0&&qe--;break;case 40:if(Ie+Y+he===0){if(Ce===0)switch(2*$e+3*pt){case 533:break;default:Ce=1}qe++}break;case 64:Y+qe+Ie+he+ze+Te===0&&(Te=1);break;case 42:case 47:if(!(0<Ie+he+qe))switch(Y){case 0:switch(2*se+3*J.charCodeAt(ke+1)){case 235:Y=47;break;case 220:it=ke,Y=42}break;case 42:se===47&&$e===42&&it+2!==ke&&(J.charCodeAt(it+2)===33&&(Ue+=J.substring(it,ke+1)),gt="",Y=0)}}Y===0&&(de+=gt)}pt=$e,$e=se,ke++}if(it=Ue.length,0<it){if(mt=K,0<z&&(Ht=a(2,Ue,mt,W,x,b,it,ie,M,ie),Ht!==void 0&&(Ue=Ht).length===0))return Ye+Ue+Me;if(Ue=mt.join(",")+"{"+Ue+"}",Ne*Ee!==0){switch(Ne!==2||s(Ue,2)||(Ee=0),Ee){case 111:Ue=Ue.replace(O,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(C,"::-webkit-input-$1")+Ue.replace(C,"::-moz-$1")+Ue.replace(C,":-ms-input-$1")+Ue}Ee=0}}return Ye+Ue+Me}function n(W,K,J){var ie=K.trim().split(P);K=ie;var M=ie.length,he=W.length;switch(he){case 0:case 1:var Y=0;for(W=he===0?"":W[0]+" ";Y<M;++Y)K[Y]=r(W,K[Y],J).trim();break;default:var qe=Y=0;for(K=[];Y<M;++Y)for(var Ie=0;Ie<he;++Ie)K[qe++]=r(W[Ie]+" ",ie[Y],J).trim()}return K}function r(W,K,J){var ie=K.charCodeAt(0);switch(33>ie&&(ie=(K=K.trim()).charCodeAt(0)),ie){case 38:return K.replace(E,"$1"+W.trim());case 58:return W.trim()+K.replace(E,"$1"+W.trim());default:if(0<1*J&&0<K.indexOf("\f"))return K.replace(E,(W.charCodeAt(0)===58?"":"$1")+W.trim())}return W+K}function i(W,K,J,ie){var M=W+";",he=2*K+3*J+4*ie;if(he===944){W=M.indexOf(":",9)+1;var Y=M.substring(W,M.length-1).trim();return Y=M.substring(0,W).trim()+Y+";",Ne===1||Ne===2&&s(Y,1)?"-webkit-"+Y+Y:Y}if(Ne===0||Ne===2&&!s(M,1))return M;switch(he){case 1015:return M.charCodeAt(10)===97?"-webkit-"+M+M:M;case 951:return M.charCodeAt(3)===116?"-webkit-"+M+M:M;case 963:return M.charCodeAt(5)===110?"-webkit-"+M+M:M;case 1009:if(M.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+M+M;case 978:return"-webkit-"+M+"-moz-"+M+M;case 1019:case 983:return"-webkit-"+M+"-moz-"+M+"-ms-"+M+M;case 883:if(M.charCodeAt(8)===45)return"-webkit-"+M+M;if(0<M.indexOf("image-set(",11))return M.replace(k,"$1-webkit-$2")+M;break;case 932:if(M.charCodeAt(4)===45)switch(M.charCodeAt(5)){case 103:return"-webkit-box-"+M.replace("-grow","")+"-webkit-"+M+"-ms-"+M.replace("grow","positive")+M;case 115:return"-webkit-"+M+"-ms-"+M.replace("shrink","negative")+M;case 98:return"-webkit-"+M+"-ms-"+M.replace("basis","preferred-size")+M}return"-webkit-"+M+"-ms-"+M+M;case 964:return"-webkit-"+M+"-ms-flex-"+M+M;case 1023:if(M.charCodeAt(8)!==99)break;return Y=M.substring(M.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+M+"-ms-flex-pack"+Y+M;case 1005:return T.test(M)?M.replace(I,":-webkit-")+M.replace(I,":-moz-")+M:M;case 1e3:switch(Y=M.substring(13).trim(),K=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(K)){case 226:Y=M.replace(U,"tb");break;case 232:Y=M.replace(U,"tb-rl");break;case 220:Y=M.replace(U,"lr");break;default:return M}return"-webkit-"+M+"-ms-"+Y+M;case 1017:if(M.indexOf("sticky",9)===-1)break;case 975:switch(K=(M=W).length-10,Y=(M.charCodeAt(K)===33?M.substring(0,K):M).substring(W.indexOf(":",7)+1).trim(),he=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:M=M.replace(Y,"-webkit-"+Y)+";"+M;break;case 207:case 102:M=M.replace(Y,"-webkit-"+(102<he?"inline-":"")+"box")+";"+M.replace(Y,"-webkit-"+Y)+";"+M.replace(Y,"-ms-"+Y+"box")+";"+M}return M+";";case 938:if(M.charCodeAt(5)===45)switch(M.charCodeAt(6)){case 105:return Y=M.replace("-items",""),"-webkit-"+M+"-webkit-box-"+Y+"-ms-flex-"+Y+M;case 115:return"-webkit-"+M+"-ms-flex-item-"+M.replace(_,"")+M;default:return"-webkit-"+M+"-ms-flex-line-pack"+M.replace("align-content","").replace(_,"")+M}break;case 973:case 989:if(M.charCodeAt(3)!==45||M.charCodeAt(4)===122)break;case 931:case 953:if(R.test(W)===!0)return(Y=W.substring(W.indexOf(":")+1)).charCodeAt(0)===115?i(W.replace("stretch","fill-available"),K,J,ie).replace(":fill-available",":stretch"):M.replace(Y,"-webkit-"+Y)+M.replace(Y,"-moz-"+Y.replace("fill-",""))+M;break;case 962:if(M="-webkit-"+M+(M.charCodeAt(5)===102?"-ms-"+M:"")+M,J+ie===211&&M.charCodeAt(13)===105&&0<M.indexOf("transform",10))return M.substring(0,M.indexOf(";",27)+1).replace(A,"$1-webkit-$2")+M}return M}function s(W,K){var J=W.indexOf(K===1?":":"{"),ie=W.substring(0,K!==3?J:10);return J=W.substring(J+1,W.length-1),ae(K!==2?ie:ie.replace(S,"$1"),J,K)}function o(W,K){var J=i(K,K.charCodeAt(0),K.charCodeAt(1),K.charCodeAt(2));return J!==K+";"?J.replace(y," or ($1)").substring(4):"("+K+")"}function a(W,K,J,ie,M,he,Y,qe,Ie,Ce){for(var se=0,$e=K,pt;se<z;++se)switch(pt=He[se].call(h,W,$e,J,ie,M,he,Y,qe,Ie,Ce)){case void 0:case!1:case!0:case null:break;default:$e=pt}if($e!==K)return $e}function u(W){switch(W){case void 0:case null:z=He.length=0;break;default:if(typeof W=="function")He[z++]=W;else if(typeof W=="object")for(var K=0,J=W.length;K<J;++K)u(W[K]);else ue=!!W|0}return u}function c(W){return W=W.prefix,W!==void 0&&(ae=null,W?typeof W!="function"?Ne=1:(Ne=2,ae=W):Ne=0),c}function h(W,K){var J=W;if(33>J.charCodeAt(0)&&(J=J.trim()),Ae=J,J=[Ae],0<z){var ie=a(-1,K,J,J,x,b,0,0,0,0);ie!==void 0&&typeof ie=="string"&&(K=ie)}var M=e(Bt,J,K,0,0);return 0<z&&(ie=a(-2,M,J,J,x,b,M.length,0,0,0),ie!==void 0&&(M=ie)),Ae="",Ee=0,b=x=1,M}var f=/^\0+/g,m=/[\0\r\f]/g,I=/: */g,T=/zoo|gra/,A=/([,: ])(transform)/g,P=/,\r+?/g,E=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,O=/:(read-only)/g,U=/[svh]\w+-[tblr]{2}/,B=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,_=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,b=1,x=1,Ee=0,Ne=1,Bt=[],He=[],z=0,ae=null,ue=0,Ae="";return h.use=u,h.set=c,t!==void 0&&c(t),h}var oL={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function aL(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var lL=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,g_=aL(function(t){return lL.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),pS={exports:{}},Fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=typeof Symbol=="function"&&Symbol.for,bg=Dt?Symbol.for("react.element"):60103,Dg=Dt?Symbol.for("react.portal"):60106,Bd=Dt?Symbol.for("react.fragment"):60107,Hd=Dt?Symbol.for("react.strict_mode"):60108,qd=Dt?Symbol.for("react.profiler"):60114,Wd=Dt?Symbol.for("react.provider"):60109,Gd=Dt?Symbol.for("react.context"):60110,Ng=Dt?Symbol.for("react.async_mode"):60111,Kd=Dt?Symbol.for("react.concurrent_mode"):60111,Qd=Dt?Symbol.for("react.forward_ref"):60112,Yd=Dt?Symbol.for("react.suspense"):60113,uL=Dt?Symbol.for("react.suspense_list"):60120,Xd=Dt?Symbol.for("react.memo"):60115,Jd=Dt?Symbol.for("react.lazy"):60116,cL=Dt?Symbol.for("react.block"):60121,dL=Dt?Symbol.for("react.fundamental"):60117,hL=Dt?Symbol.for("react.responder"):60118,fL=Dt?Symbol.for("react.scope"):60119;function Pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bg:switch(t=t.type,t){case Ng:case Kd:case Bd:case qd:case Hd:case Yd:return t;default:switch(t=t&&t.$$typeof,t){case Gd:case Qd:case Jd:case Xd:case Wd:return t;default:return e}}case Dg:return e}}}function mS(t){return Pn(t)===Kd}Fe.AsyncMode=Ng;Fe.ConcurrentMode=Kd;Fe.ContextConsumer=Gd;Fe.ContextProvider=Wd;Fe.Element=bg;Fe.ForwardRef=Qd;Fe.Fragment=Bd;Fe.Lazy=Jd;Fe.Memo=Xd;Fe.Portal=Dg;Fe.Profiler=qd;Fe.StrictMode=Hd;Fe.Suspense=Yd;Fe.isAsyncMode=function(t){return mS(t)||Pn(t)===Ng};Fe.isConcurrentMode=mS;Fe.isContextConsumer=function(t){return Pn(t)===Gd};Fe.isContextProvider=function(t){return Pn(t)===Wd};Fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bg};Fe.isForwardRef=function(t){return Pn(t)===Qd};Fe.isFragment=function(t){return Pn(t)===Bd};Fe.isLazy=function(t){return Pn(t)===Jd};Fe.isMemo=function(t){return Pn(t)===Xd};Fe.isPortal=function(t){return Pn(t)===Dg};Fe.isProfiler=function(t){return Pn(t)===qd};Fe.isStrictMode=function(t){return Pn(t)===Hd};Fe.isSuspense=function(t){return Pn(t)===Yd};Fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bd||t===Kd||t===qd||t===Hd||t===Yd||t===uL||typeof t=="object"&&t!==null&&(t.$$typeof===Jd||t.$$typeof===Xd||t.$$typeof===Wd||t.$$typeof===Gd||t.$$typeof===Qd||t.$$typeof===dL||t.$$typeof===hL||t.$$typeof===fL||t.$$typeof===cL)};Fe.typeOf=Pn;pS.exports=Fe;var pL=pS.exports,Og=pL,mL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Lg={};Lg[Og.ForwardRef]=yL;Lg[Og.Memo]=gS;function y_(t){return Og.isMemo(t)?gS:Lg[t.$$typeof]||mL}var vL=Object.defineProperty,_L=Object.getOwnPropertyNames,v_=Object.getOwnPropertySymbols,wL=Object.getOwnPropertyDescriptor,EL=Object.getPrototypeOf,__=Object.prototype;function yS(t,e,n){if(typeof e!="string"){if(__){var r=EL(e);r&&r!==__&&yS(t,r,n)}var i=_L(e);v_&&(i=i.concat(v_(e)));for(var s=y_(t),o=y_(e),a=0;a<i.length;++a){var u=i[a];if(!gL[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=wL(e,u);try{vL(t,u,c)}catch{}}}}return t}var TL=yS;const IL=Np(TL);var lr={};function dr(){return(dr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var w_=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},wp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!fS.typeOf(t)},zc=Object.freeze([]),ki=Object.freeze({});function Tl(t){return typeof t=="function"}function E_(t){return t.displayName||t.name||"Component"}function Mg(t){return t&&typeof t.styledComponentId=="string"}var jo=typeof process<"u"&&(lr.REACT_APP_SC_ATTR||lr.SC_ATTR)||"data-styled",Vg=typeof window<"u"&&"HTMLElement"in window,SL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&lr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lr.REACT_APP_SC_DISABLE_SPEEDY!==""?lr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&lr.SC_DISABLE_SPEEDY!==void 0&&lr.SC_DISABLE_SPEEDY!==""&&lr.SC_DISABLE_SPEEDY!=="false"&&lr.SC_DISABLE_SPEEDY),AL={};function ql(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var CL=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ql(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,h=r.length;c<h;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Zu=new Map,Bc=new Map,Qa=1,xu=function(t){if(Zu.has(t))return Zu.get(t);for(;Bc.has(Qa);)Qa++;var e=Qa++;return Zu.set(t,e),Bc.set(e,t),e},RL=function(t){return Bc.get(t)},PL=function(t,e){e>=Qa&&(Qa=e+1),Zu.set(t,e),Bc.set(e,t)},xL="style["+jo+'][data-styled-version="5.3.6"]',kL=new RegExp("^"+jo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),bL=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},DL=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(kL);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(PL(c,u),bL(t,c,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},NL=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},vS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var h=u[c];if(h&&h.nodeType===1&&h.hasAttribute(jo))return h}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(jo,"active"),r.setAttribute("data-styled-version","5.3.6");var o=NL();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},OL=function(){function t(n){var r=this.element=vS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}ql(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),LL=function(){function t(n){var r=this.element=vS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),ML=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),T_=Vg,VL={isServer:!Vg,useCSSOMInjection:!SL},Hc=function(){function t(n,r,i){n===void 0&&(n=ki),r===void 0&&(r={}),this.options=dr({},VL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Vg&&T_&&(T_=!1,function(s){for(var o=document.querySelectorAll(xL),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(jo)!=="active"&&(DL(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return xu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(dr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new ML(o):s?new OL(o):new LL(o),new CL(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(xu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(xu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(xu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=RL(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var h=jo+".g"+o+'[id="'+a+'"]',f="";u!==void 0&&u.forEach(function(m){m.length>0&&(f+=m+",")}),s+=""+c+h+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),jL=/(a)(d)/gi,I_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ep(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=I_(e%52)+n;return(I_(e%52)+n).replace(jL,"$1-$2")}var uo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_S=function(t){return uo(5381,t)};function wS(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Tl(n)&&!Mg(n))return!1}return!0}var FL=_S("5.3.6"),UL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wS(e),this.componentId=n,this.baseHash=uo(FL,n),this.baseStyle=r,Hc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Is(this.rules,e,n,r).join(""),a=Ep(uo(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,h=uo(this.baseHash,r.hash),f="",m=0;m<c;m++){var I=this.rules[m];if(typeof I=="string")f+=I;else if(I){var T=Is(I,e,n,r),A=Array.isArray(T)?T.join(""):T;h=uo(h,A+m),f+=A}}if(f){var P=Ep(h>>>0);if(!n.hasNameForId(i,P)){var E=r(f,"."+P,void 0,i);n.insertRules(i,P,E)}s.push(P)}}return s.join(" ")},t}(),$L=/^\s*\/\/.*$/gm,zL=[":","[",".","#"];function BL(t){var e,n,r,i,s=ki,o=s.options,a=o===void 0?ki:o,u=s.plugins,c=u===void 0?zc:u,h=new sL(a),f=[],m=function(A){function P(E){if(E)try{A(E+"}")}catch{}}return function(E,v,C,O,U,B,y,_,S,R){switch(E){case 1:if(S===0&&v.charCodeAt(0)===64)return A(v+";"),"";break;case 2:if(_===0)return v+"/*|*/";break;case 3:switch(_){case 102:case 112:return A(C[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(P)}}}(function(A){f.push(A)}),I=function(A,P,E){return P===0&&zL.indexOf(E[n.length])!==-1||E.match(i)?A:"."+e};function T(A,P,E,v){v===void 0&&(v="&");var C=A.replace($L,""),O=P&&E?E+" "+P+" { "+C+" }":C;return e=v,n=P,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),h(E||!P?"":P,O)}return h.use([].concat(c,[function(A,P,E){A===2&&E.length&&E[0].lastIndexOf(n)>0&&(E[0]=E[0].replace(r,I))},m,function(A){if(A===-2){var P=f;return f=[],P}}])),T.hash=c.length?c.reduce(function(A,P){return P.name||ql(15),uo(A,P.name)},5381).toString():"",T}var ES=$o.createContext();ES.Consumer;var TS=$o.createContext(),HL=(TS.Consumer,new Hc),Tp=BL();function IS(){return D.useContext(ES)||HL}function SS(){return D.useContext(TS)||Tp}var AS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Tp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ql(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Tp),this.name+e.hash},t}(),qL=/([A-Z])/,WL=/([A-Z])/g,GL=/^ms-/,KL=function(t){return"-"+t.toLowerCase()};function S_(t){return qL.test(t)?t.replace(WL,KL).replace(GL,"-ms-"):t}var A_=function(t){return t==null||t===!1||t===""};function Is(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Is(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(A_(t))return"";if(Mg(t))return"."+t.styledComponentId;if(Tl(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var u=t(e);return Is(u,e,n,r)}var c;return t instanceof AS?n?(t.inject(n,r),t.getName(r)):t:wp(t)?function h(f,m){var I,T,A=[];for(var P in f)f.hasOwnProperty(P)&&!A_(f[P])&&(Array.isArray(f[P])&&f[P].isCss||Tl(f[P])?A.push(S_(P)+":",f[P],";"):wp(f[P])?A.push.apply(A,h(f[P],P)):A.push(S_(P)+": "+(I=P,(T=f[P])==null||typeof T=="boolean"||T===""?"":typeof T!="number"||T===0||I in oL?String(T).trim():T+"px")+";"));return m?[m+" {"].concat(A,["}"]):A}(t):t.toString()}var C_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function jg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Tl(t)||wp(t)?C_(Is(w_(zc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:C_(Is(w_(t,n)))}var CS=function(t,e,n){return n===void 0&&(n=ki),t.theme!==n.theme&&t.theme||e||n.theme},QL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YL=/(^-|-$)/g;function Qh(t){return t.replace(QL,"-").replace(YL,"")}var Fg=function(t){return Ep(_S(t)>>>0)};function ku(t){return typeof t=="string"&&!0}var Ip=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},XL=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function JL(t,e,n){var r=t[n];Ip(e)&&Ip(r)?RS(r,e):t[n]=e}function RS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Ip(o))for(var a in o)XL(a)&&JL(t,o[a],a)}return t}var Ug=$o.createContext();Ug.Consumer;var Yh={};function PS(t,e,n){var r=Mg(t),i=!ku(t),s=e.attrs,o=s===void 0?zc:s,a=e.componentId,u=a===void 0?function(v,C){var O=typeof v!="string"?"sc":Qh(v);Yh[O]=(Yh[O]||0)+1;var U=O+"-"+Fg("5.3.6"+O+Yh[O]);return C?C+"-"+U:U}(e.displayName,e.parentComponentId):a,c=e.displayName,h=c===void 0?function(v){return ku(v)?"styled."+v:"Styled("+E_(v)+")"}(t):c,f=e.displayName&&e.componentId?Qh(e.displayName)+"-"+e.componentId:e.componentId||u,m=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,I=e.shouldForwardProp;r&&t.shouldForwardProp&&(I=e.shouldForwardProp?function(v,C,O){return t.shouldForwardProp(v,C,O)&&e.shouldForwardProp(v,C,O)}:t.shouldForwardProp);var T,A=new UL(n,f,r?t.componentStyle:void 0),P=A.isStatic&&o.length===0,E=function(v,C){return function(O,U,B,y){var _=O.attrs,S=O.componentStyle,R=O.defaultProps,k=O.foldedComponentIds,b=O.shouldForwardProp,x=O.styledComponentId,Ee=O.target,Ne=function(ie,M,he){ie===void 0&&(ie=ki);var Y=dr({},M,{theme:ie}),qe={};return he.forEach(function(Ie){var Ce,se,$e,pt=Ie;for(Ce in Tl(pt)&&(pt=pt(Y)),pt)Y[Ce]=qe[Ce]=Ce==="className"?(se=qe[Ce],$e=pt[Ce],se&&$e?se+" "+$e:se||$e):pt[Ce]}),[Y,qe]}(CS(U,D.useContext(Ug),R)||ki,U,_),Bt=Ne[0],He=Ne[1],z=function(ie,M,he,Y){var qe=IS(),Ie=SS(),Ce=M?ie.generateAndInjectStyles(ki,qe,Ie):ie.generateAndInjectStyles(he,qe,Ie);return Ce}(S,y,Bt),ae=B,ue=He.$as||U.$as||He.as||U.as||Ee,Ae=ku(ue),W=He!==U?dr({},U,{},He):U,K={};for(var J in W)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?K.as=W[J]:(b?b(J,g_,ue):!Ae||g_(J))&&(K[J]=W[J]));return U.style&&He.style!==U.style&&(K.style=dr({},U.style,{},He.style)),K.className=Array.prototype.concat(k,x,z!==x?z:null,U.className,He.className).filter(Boolean).join(" "),K.ref=ae,D.createElement(ue,K)}(T,v,C,P)};return E.displayName=h,(T=$o.forwardRef(E)).attrs=m,T.componentStyle=A,T.displayName=h,T.shouldForwardProp=I,T.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):zc,T.styledComponentId=f,T.target=r?t.target:t,T.withComponent=function(v){var C=e.componentId,O=function(B,y){if(B==null)return{};var _,S,R={},k=Object.keys(B);for(S=0;S<k.length;S++)_=k[S],y.indexOf(_)>=0||(R[_]=B[_]);return R}(e,["componentId"]),U=C&&C+"-"+(ku(v)?v:Qh(E_(v)));return PS(v,dr({},O,{attrs:m,componentId:U}),n)},Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?RS({},t.defaultProps,v):v}}),T.toString=function(){return"."+T.styledComponentId},i&&IL(T,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),T}var H=function(t){return function e(n,r,i){if(i===void 0&&(i=ki),!fS.isValidElementType(r))return ql(1,String(r));var s=function(){return n(r,i,jg.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,dr({},i,{},o))},s.attrs=function(o){return e(n,r,dr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(PS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){H[t]=H(t)});var ZL=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=wS(n),Hc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Is(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Hc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function eM(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=jg.apply(void 0,[t].concat(n)),s="sc-global-"+Fg(JSON.stringify(i)),o=new ZL(i,s);function a(c){var h=IS(),f=SS(),m=D.useContext(Ug),I=D.useRef(h.allocateGSInstance(s)).current;return h.server&&u(I,c,h,m,f),D.useLayoutEffect(function(){if(!h.server)return u(I,c,h,m,f),function(){return o.removeStyles(I,h)}},[I,c,h,m,f]),null}function u(c,h,f,m,I){if(o.isStatic)o.renderStyles(c,AL,f,I);else{var T=dr({},h,{theme:CS(h,m,a.defaultProps)});o.renderStyles(c,T,f,I)}}return $o.memo(a)}function xS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=jg.apply(void 0,[t].concat(n)).join(""),s=Fg(i);return new AS(s,i)}const Zd=H(t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:g.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,tM=xS`
  to {
     backdrop-filter: blur(3px);
  }
`,nM=H.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`,kS=H(({className:t,children:e,addToPracticePlan:n})=>g.jsx("li",{className:t,children:g.jsx("button",{onClick:n,children:e})}))`
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
`,rM=(t,e,n)=>{const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,u=e.clientY;(a<s||a>o||u<r||u>i)&&n()},iM=H.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bS=H(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>g.jsxs("dialog",{ref:n,onClick:o=>rM(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[g.jsxs(iM,{children:[r,g.jsx(Zd,{onClick:i})]}),t]}))`
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
      animation-name: ${tM};
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
`,$g=D.createContext(null),sM=({children:t})=>{const[e,n]=D.useState(),[r,i]=D.useState(""),s=D.useRef(),[o,a]=D.useState(!1),u=()=>{s.current&&a(!1)},c=()=>{var h;(h=s.current)==null||h.show(),a(!0)};return g.jsxs($g.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:c,closePanel:u},children:[t,g.jsx(bS,{title:r,passedRef:s,onClose:u,animationDirection:o,children:g.jsx(nM,{children:e})})]})},ft=H(({text:t,onClick:e,className:n,Icon:r,...i})=>g.jsxs("button",{className:n,onClick:e,...i,children:[g.jsx("span",{children:t}),!!r&&g.jsx("div",{children:g.jsx(r,{})})]}))`
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
`,R_=H(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>g.jsx("ul",{className:r,children:t.map(i=>g.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
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
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ot(){return ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ot.apply(this,arguments)}var wt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wt||(wt={}));const P_="popstate";function oM(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Kr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Il("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:As(s))}function r(i,s){Ss(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return lM(e,n,r,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ss(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aM(){return Math.random().toString(36).substr(2,8)}function x_(t,e){return{usr:t.state,key:t.key,idx:e}}function Il(t,e,n,r){return n===void 0&&(n=null),ot({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Kr(e):e,{state:n,key:e&&e.key||r||aM()})}function As(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lM(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wt.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ot({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=wt.Pop;let P=h(),E=P==null?null:P-c;c=P,u&&u({action:a,location:A.location,delta:E})}function m(P,E){a=wt.Push;let v=Il(A.location,P,E);n&&n(v,P),c=h()+1;let C=x_(v,c),O=A.createHref(v);try{o.pushState(C,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:a,location:A.location,delta:1})}function I(P,E){a=wt.Replace;let v=Il(A.location,P,E);n&&n(v,P),c=h();let C=x_(v,c),O=A.createHref(v);o.replaceState(C,"",O),s&&u&&u({action:a,location:A.location,delta:0})}function T(P){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:As(P);return v=v.replace(/ $/,"%20"),we(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let A={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(P_,f),u=P,()=>{i.removeEventListener(P_,f),u=null}},createHref(P){return e(i,P)},createURL:T,encodeLocation(P){let E=T(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:I,go(P){return o.go(P)}};return A}var nt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nt||(nt={}));const uM=new Set(["lazy","caseSensitive","path","id","index","children"]);function cM(t){return t.index===!0}function Sp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(we(i.index!==!0||!i.children,"Cannot specify children on an index route"),we(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),cM(i)){let u=ot({},i,e(i),{id:a});return r[a]=u,u}else{let u=ot({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=Sp(i.children,e,o,r)),u}})}function co(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Kr(e):e,i=Wr(r.pathname||"/",n);if(i==null)return null;let s=DS(t);hM(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=IM(i);o=EM(s[a],u)}return o}function dM(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function DS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(we(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=jr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),DS(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:_M(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of NS(s.path))i(s,o,u)}),e}function NS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NS(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function hM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fM=/^:[\w-]+$/,pM=3,mM=2,gM=1,yM=10,vM=-2,k_=t=>t==="*";function _M(t,e){let n=t.split("/"),r=n.length;return n.some(k_)&&(r+=vM),e&&(r+=mM),n.filter(i=>!k_(i)).reduce((i,s)=>i+(fM.test(s)?pM:s===""?gM:yM),r)}function wM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function EM(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=Ap({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:jr([i,h.pathname]),pathnameBase:CM(jr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=jr([i,h.pathnameBase]))}return s}function Ap(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:I}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[f];return I&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function TM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ss(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function IM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ss(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function SM(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Kr(t):t;return{pathname:n?n.startsWith("/")?n:AM(n,e):e,search:RM(r),hash:PM(i)}}function AM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zg(t,e){let n=OS(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Bg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Kr(t):(i=ot({},t),we(!i.pathname||!i.pathname.includes("?"),Xh("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Xh("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=SM(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),CM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Hg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function qg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LS=["post","put","patch","delete"],xM=new Set(LS),kM=["get",...LS],bM=new Set(kM),DM=new Set([301,302,303,307,308]),NM=new Set([307,308]),Jh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},OM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LM=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),MS="remix-router-transitions";function MM(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;we(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let N=t.detectErrorBoundary;i=V=>({hasErrorBoundary:N(V)})}else i=LM;let s={},o=Sp(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||UM,h=ot({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,m=new Set,I=null,T=null,A=null,P=t.hydrationData!=null,E=co(o,t.history.location,u),v=null;if(E==null){let N=kn(404,{pathname:t.history.location.pathname}),{matches:V,route:F}=U_(o);E=V,v={[F.id]:N}}let C,O=E.some(N=>N.route.lazy),U=E.some(N=>N.route.loader);if(O)C=!1;else if(!U)C=!0;else if(h.v7_partialHydration){let N=t.hydrationData?t.hydrationData.loaderData:null,V=t.hydrationData?t.hydrationData.errors:null,F=Q=>Q.route.loader?typeof Q.route.loader=="function"&&Q.route.loader.hydrate===!0?!1:N&&N[Q.route.id]!==void 0||V&&V[Q.route.id]!==void 0:!0;if(V){let Q=E.findIndex(ee=>V[ee.route.id]!==void 0);C=E.slice(0,Q+1).every(F)}else C=E.every(F)}else C=t.hydrationData!=null;let B,y={historyAction:t.history.action,location:t.history.location,matches:E,initialized:C,navigation:Jh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},_=wt.Pop,S=!1,R,k=!1,b=new Map,x=null,Ee=!1,Ne=!1,Bt=[],He=[],z=new Map,ae=0,ue=-1,Ae=new Map,W=new Set,K=new Map,J=new Map,ie=new Set,M=new Map,he=new Map,Y=!1;function qe(){if(f=t.history.listen(N=>{let{action:V,location:F,delta:Q}=N;if(Y){Y=!1;return}Ss(he.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ee=Fs({currentLocation:y.location,nextLocation:F,historyAction:V});if(ee&&Q!=null){Y=!0,t.history.go(Q*-1),js(ee,{state:"blocked",location:F,proceed(){js(ee,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),t.history.go(Q)},reset(){let oe=new Map(y.blockers);oe.set(ee,wa),se({blockers:oe})}});return}return ze(V,F)}),n){JM(e,b);let N=()=>ZM(e,b);e.addEventListener("pagehide",N),x=()=>e.removeEventListener("pagehide",N)}return y.initialized||ze(wt.Pop,y.location,{initialHydration:!0}),B}function Ie(){f&&f(),x&&x(),m.clear(),R&&R.abort(),y.fetchers.forEach((N,V)=>qi(V)),y.blockers.forEach((N,V)=>Ql(V))}function Ce(N){return m.add(N),()=>m.delete(N)}function se(N,V){V===void 0&&(V={}),y=ot({},y,N);let F=[],Q=[];h.v7_fetcherPersist&&y.fetchers.forEach((ee,oe)=>{ee.state==="idle"&&(ie.has(oe)?Q.push(oe):F.push(oe))}),[...m].forEach(ee=>ee(y,{deletedFetchers:Q,unstable_viewTransitionOpts:V.viewTransitionOpts,unstable_flushSync:V.flushSync===!0})),h.v7_fetcherPersist&&(F.forEach(ee=>y.fetchers.delete(ee)),Q.forEach(ee=>qi(ee)))}function $e(N,V,F){var Q,ee;let{flushSync:oe}=F===void 0?{}:F,le=y.actionData!=null&&y.navigation.formMethod!=null&&Gn(y.navigation.formMethod)&&y.navigation.state==="loading"&&((Q=N.state)==null?void 0:Q._isRedirect)!==!0,Z;V.actionData?Object.keys(V.actionData).length>0?Z=V.actionData:Z=null:le?Z=y.actionData:Z=null;let me=V.loaderData?j_(y.loaderData,V.loaderData,V.matches||[],V.errors):y.loaderData,ge=y.blockers;ge.size>0&&(ge=new Map(ge),ge.forEach((fe,We)=>ge.set(We,wa)));let St=S===!0||y.navigation.formMethod!=null&&Gn(y.navigation.formMethod)&&((ee=N.state)==null?void 0:ee._isRedirect)!==!0;a&&(o=a,a=void 0),Ee||_===wt.Pop||(_===wt.Push?t.history.push(N,N.state):_===wt.Replace&&t.history.replace(N,N.state));let tt;if(_===wt.Pop){let fe=b.get(y.location.pathname);fe&&fe.has(N.pathname)?tt={currentLocation:y.location,nextLocation:N}:b.has(N.pathname)&&(tt={currentLocation:N,nextLocation:y.location})}else if(k){let fe=b.get(y.location.pathname);fe?fe.add(N.pathname):(fe=new Set([N.pathname]),b.set(y.location.pathname,fe)),tt={currentLocation:y.location,nextLocation:N}}se(ot({},V,{actionData:Z,loaderData:me,historyAction:_,location:N,initialized:!0,navigation:Jh,revalidation:"idle",restoreScrollPosition:$s(N,V.matches||y.matches),preventScrollReset:St,blockers:ge}),{viewTransitionOpts:tt,flushSync:oe===!0}),_=wt.Pop,S=!1,k=!1,Ee=!1,Ne=!1,Bt=[],He=[]}async function pt(N,V){if(typeof N=="number"){t.history.go(N);return}let F=Cp(y.location,y.matches,u,h.v7_prependBasename,N,h.v7_relativeSplatPath,V==null?void 0:V.fromRouteId,V==null?void 0:V.relative),{path:Q,submission:ee,error:oe}=b_(h.v7_normalizeFormMethod,!1,F,V),le=y.location,Z=Il(y.location,Q,V&&V.state);Z=ot({},Z,t.history.encodeLocation(Z));let me=V&&V.replace!=null?V.replace:void 0,ge=wt.Push;me===!0?ge=wt.Replace:me===!1||ee!=null&&Gn(ee.formMethod)&&ee.formAction===y.location.pathname+y.location.search&&(ge=wt.Replace);let St=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,tt=(V&&V.unstable_flushSync)===!0,fe=Fs({currentLocation:le,nextLocation:Z,historyAction:ge});if(fe){js(fe,{state:"blocked",location:Z,proceed(){js(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),pt(N,V)},reset(){let We=new Map(y.blockers);We.set(fe,wa),se({blockers:We})}});return}return await ze(ge,Z,{submission:ee,pendingError:oe,preventScrollReset:St,replace:V&&V.replace,enableViewTransition:V&&V.unstable_viewTransition,flushSync:tt})}function Te(){if(Ue(),se({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){ze(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}ze(_||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function ze(N,V,F){R&&R.abort(),R=null,_=N,Ee=(F&&F.startUninterruptedRevalidation)===!0,na(y.location,y.matches),S=(F&&F.preventScrollReset)===!0,k=(F&&F.enableViewTransition)===!0;let Q=a||o,ee=F&&F.overrideNavigation,oe=co(Q,V,u),le=(F&&F.flushSync)===!0;if(!oe){let fe=kn(404,{pathname:V.pathname}),{matches:We,route:st}=U_(Q);Us(),$e(V,{matches:We,loaderData:{},errors:{[st.id]:fe}},{flushSync:le});return}if(y.initialized&&!Ne&&WM(y.location,V)&&!(F&&F.submission&&Gn(F.submission.formMethod))){$e(V,{matches:oe},{flushSync:le});return}R=new AbortController;let Z=Ws(t.history,V,R.signal,F&&F.submission),me;if(F&&F.pendingError)me=[Ya(oe).route.id,{type:nt.error,error:F.pendingError}];else if(F&&F.submission&&Gn(F.submission.formMethod)){let fe=await ke(Z,V,F.submission,oe,{replace:F.replace,flushSync:le});if(fe.shortCircuited)return;me=fe.pendingActionResult,ee=Zh(V,F.submission),le=!1,Z=Ws(t.history,Z.url,Z.signal)}let{shortCircuited:ge,loaderData:St,errors:tt}=await mt(Z,V,oe,ee,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,le,me);ge||(R=null,$e(V,ot({matches:oe},F_(me),{loaderData:St,errors:tt})))}async function ke(N,V,F,Q,ee){ee===void 0&&(ee={}),Ue();let oe=YM(V,F);se({navigation:oe},{flushSync:ee.flushSync===!0});let le,Z=Pp(Q,V);if(!Z.route.action&&!Z.route.lazy)le={type:nt.error,error:kn(405,{method:N.method,pathname:V.pathname,routeId:Z.route.id})};else if(le=(await gt("action",N,[Z],Q))[0],N.signal.aborted)return{shortCircuited:!0};if(is(le)){let me;return ee&&ee.replace!=null?me=ee.replace:me=L_(le.response.headers.get("Location"),new URL(N.url),u)===y.location.pathname+y.location.search,await yn(N,le,{submission:F,replace:me}),{shortCircuited:!0}}if(rs(le))throw kn(400,{type:"defer-action"});if(Nn(le)){let me=Ya(Q,Z.route.id);return(ee&&ee.replace)!==!0&&(_=wt.Push),{pendingActionResult:[me.route.id,le]}}return{pendingActionResult:[Z.route.id,le]}}async function mt(N,V,F,Q,ee,oe,le,Z,me,ge){let St=Q||Zh(V,ee),tt=ee||oe||B_(St),fe=a||o,[We,st]=D_(t.history,y,F,tt,V,h.v7_partialHydration&&Z===!0,h.unstable_skipActionErrorRevalidation,Ne,Bt,He,ie,K,W,fe,u,ge);if(Us(Se=>!(F&&F.some(Nt=>Nt.route.id===Se))||We&&We.some(Nt=>Nt.route.id===Se)),ue=++ae,We.length===0&&st.length===0){let Se=Zo();return $e(V,ot({matches:F,loaderData:{},errors:ge&&Nn(ge[1])?{[ge[0]]:ge[1].error}:null},F_(ge),Se?{fetchers:new Map(y.fetchers)}:{}),{flushSync:me}),{shortCircuited:!0}}if(!Ee&&(!h.v7_partialHydration||!Z)){st.forEach(Nt=>{let Ot=y.fetchers.get(Nt.key),vt=Ea(void 0,Ot?Ot.data:void 0);y.fetchers.set(Nt.key,vt)});let Se;ge&&!Nn(ge[1])?Se={[ge[0]]:ge[1].data}:y.actionData&&(Object.keys(y.actionData).length===0?Se=null:Se=y.actionData),se(ot({navigation:St},Se!==void 0?{actionData:Se}:{},st.length>0?{fetchers:new Map(y.fetchers)}:{}),{flushSync:me})}st.forEach(Se=>{z.has(Se.key)&&ir(Se.key),Se.controller&&z.set(Se.key,Se.controller)});let Jr=()=>st.forEach(Se=>ir(Se.key));R&&R.signal.addEventListener("abort",Jr);let{loaderResults:xn,fetcherResults:zn}=await de(y.matches,F,We,st,N);if(N.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",Jr),st.forEach(Se=>z.delete(Se.key));let tn=$_([...xn,...zn]);if(tn){if(tn.idx>=We.length){let Se=st[tn.idx-We.length].key;W.add(Se)}return await yn(N,tn.result,{replace:le}),{shortCircuited:!0}}let{loaderData:Ir,errors:vn}=V_(y,F,We,xn,ge,st,zn,M);M.forEach((Se,Nt)=>{Se.subscribe(Ot=>{(Ot||Se.done)&&M.delete(Nt)})}),h.v7_partialHydration&&Z&&y.errors&&Object.entries(y.errors).filter(Se=>{let[Nt]=Se;return!We.some(Ot=>Ot.route.id===Nt)}).forEach(Se=>{let[Nt,Ot]=Se;vn=Object.assign(vn||{},{[Nt]:Ot})});let Zr=Zo(),ei=ea(ue),Wi=Zr||ei||st.length>0;return ot({loaderData:Ir,errors:vn},Wi?{fetchers:new Map(y.fetchers)}:{})}function rr(N,V,F,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");z.has(N)&&ir(N);let ee=(Q&&Q.unstable_flushSync)===!0,oe=a||o,le=Cp(y.location,y.matches,u,h.v7_prependBasename,F,h.v7_relativeSplatPath,V,Q==null?void 0:Q.relative),Z=co(oe,le,u);if(!Z){Ye(N,V,kn(404,{pathname:le}),{flushSync:ee});return}let{path:me,submission:ge,error:St}=b_(h.v7_normalizeFormMethod,!0,le,Q);if(St){Ye(N,V,St,{flushSync:ee});return}let tt=Pp(Z,me);if(S=(Q&&Q.preventScrollReset)===!0,ge&&Gn(ge.formMethod)){it(N,V,me,tt,Z,ee,ge);return}K.set(N,{routeId:V,path:me}),Er(N,V,me,tt,Z,ee,ge)}async function it(N,V,F,Q,ee,oe,le){if(Ue(),K.delete(N),!Q.route.action&&!Q.route.lazy){let vt=kn(405,{method:le.formMethod,pathname:F,routeId:V});Ye(N,V,vt,{flushSync:oe});return}let Z=y.fetchers.get(N);Me(N,XM(le,Z),{flushSync:oe});let me=new AbortController,ge=Ws(t.history,F,me.signal,le);z.set(N,me);let St=ae,fe=(await gt("action",ge,[Q],ee))[0];if(ge.signal.aborted){z.get(N)===me&&z.delete(N);return}if(h.v7_fetcherPersist&&ie.has(N)){if(is(fe)||Nn(fe)){Me(N,oi(void 0));return}}else{if(is(fe))if(z.delete(N),ue>St){Me(N,oi(void 0));return}else return W.add(N),Me(N,Ea(le)),yn(ge,fe,{fetcherSubmission:le});if(Nn(fe)){Ye(N,V,fe.error);return}}if(rs(fe))throw kn(400,{type:"defer-action"});let We=y.navigation.location||y.location,st=Ws(t.history,We,me.signal),Jr=a||o,xn=y.navigation.state!=="idle"?co(Jr,y.navigation.location,u):y.matches;we(xn,"Didn't find any matches after fetcher action");let zn=++ae;Ae.set(N,zn);let tn=Ea(le,fe.data);y.fetchers.set(N,tn);let[Ir,vn]=D_(t.history,y,xn,le,We,!1,h.unstable_skipActionErrorRevalidation,Ne,Bt,He,ie,K,W,Jr,u,[Q.route.id,fe]);vn.filter(vt=>vt.key!==N).forEach(vt=>{let Sr=vt.key,ti=y.fetchers.get(Sr),Ar=Ea(void 0,ti?ti.data:void 0);y.fetchers.set(Sr,Ar),z.has(Sr)&&ir(Sr),vt.controller&&z.set(Sr,vt.controller)}),se({fetchers:new Map(y.fetchers)});let Zr=()=>vn.forEach(vt=>ir(vt.key));me.signal.addEventListener("abort",Zr);let{loaderResults:ei,fetcherResults:Wi}=await de(y.matches,xn,Ir,vn,st);if(me.signal.aborted)return;me.signal.removeEventListener("abort",Zr),Ae.delete(N),z.delete(N),vn.forEach(vt=>z.delete(vt.key));let Se=$_([...ei,...Wi]);if(Se){if(Se.idx>=Ir.length){let vt=vn[Se.idx-Ir.length].key;W.add(vt)}return yn(st,Se.result)}let{loaderData:Nt,errors:Ot}=V_(y,y.matches,Ir,ei,void 0,vn,Wi,M);if(y.fetchers.has(N)){let vt=oi(fe.data);y.fetchers.set(N,vt)}ea(zn),y.navigation.state==="loading"&&zn>ue?(we(_,"Expected pending action"),R&&R.abort(),$e(y.navigation.location,{matches:xn,loaderData:Nt,errors:Ot,fetchers:new Map(y.fetchers)})):(se({errors:Ot,loaderData:j_(y.loaderData,Nt,xn,Ot),fetchers:new Map(y.fetchers)}),Ne=!1)}async function Er(N,V,F,Q,ee,oe,le){let Z=y.fetchers.get(N);Me(N,Ea(le,Z?Z.data:void 0),{flushSync:oe});let me=new AbortController,ge=Ws(t.history,F,me.signal);z.set(N,me);let St=ae,fe=(await gt("loader",ge,[Q],ee))[0];if(rs(fe)&&(fe=await US(fe,ge.signal,!0)||fe),z.get(N)===me&&z.delete(N),!ge.signal.aborted){if(ie.has(N)){Me(N,oi(void 0));return}if(is(fe))if(ue>St){Me(N,oi(void 0));return}else{W.add(N),await yn(ge,fe);return}if(Nn(fe)){Ye(N,V,fe.error);return}we(!rs(fe),"Unhandled fetcher deferred data"),Me(N,oi(fe.data))}}async function yn(N,V,F){let{submission:Q,fetcherSubmission:ee,replace:oe}=F===void 0?{}:F;V.response.headers.has("X-Remix-Revalidate")&&(Ne=!0);let le=V.response.headers.get("Location");we(le,"Expected a Location header on the redirect Response"),le=L_(le,new URL(N.url),u);let Z=Il(y.location,le,{_isRedirect:!0});if(n){let We=!1;if(V.response.headers.has("X-Remix-Reload-Document"))We=!0;else if(Wg.test(le)){const st=t.history.createURL(le);We=st.origin!==e.location.origin||Wr(st.pathname,u)==null}if(We){oe?e.location.replace(le):e.location.assign(le);return}}R=null;let me=oe===!0?wt.Replace:wt.Push,{formMethod:ge,formAction:St,formEncType:tt}=y.navigation;!Q&&!ee&&ge&&St&&tt&&(Q=B_(y.navigation));let fe=Q||ee;if(NM.has(V.response.status)&&fe&&Gn(fe.formMethod))await ze(me,Z,{submission:ot({},fe,{formAction:le}),preventScrollReset:S});else{let We=Zh(Z,Q);await ze(me,Z,{overrideNavigation:We,fetcherSubmission:ee,preventScrollReset:S})}}async function gt(N,V,F,Q){try{let ee=await $M(c,N,V,F,Q,s,i);return await Promise.all(ee.map((oe,le)=>{if(GM(oe)){let Z=oe.result;return{type:nt.redirect,response:HM(Z,V,F[le].route.id,Q,u,h.v7_relativeSplatPath)}}return BM(oe)}))}catch(ee){return F.map(()=>({type:nt.error,error:ee}))}}async function de(N,V,F,Q,ee){let[oe,...le]=await Promise.all([F.length?gt("loader",ee,F,V):[],...Q.map(Z=>{if(Z.matches&&Z.match&&Z.controller){let me=Ws(t.history,Z.path,Z.controller.signal);return gt("loader",me,[Z.match],Z.matches).then(ge=>ge[0])}else return Promise.resolve({type:nt.error,error:kn(404,{pathname:Z.path})})})]);return await Promise.all([z_(N,F,oe,oe.map(()=>ee.signal),!1,y.loaderData),z_(N,Q.map(Z=>Z.match),le,Q.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{loaderResults:oe,fetcherResults:le}}function Ue(){Ne=!0,Bt.push(...Us()),K.forEach((N,V)=>{z.has(V)&&(He.push(V),ir(V))})}function Me(N,V,F){F===void 0&&(F={}),y.fetchers.set(N,V),se({fetchers:new Map(y.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Ye(N,V,F,Q){Q===void 0&&(Q={});let ee=Ya(y.matches,V);qi(N),se({errors:{[ee.route.id]:F},fetchers:new Map(y.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function Ht(N){return h.v7_fetcherPersist&&(J.set(N,(J.get(N)||0)+1),ie.has(N)&&ie.delete(N)),y.fetchers.get(N)||OM}function qi(N){let V=y.fetchers.get(N);z.has(N)&&!(V&&V.state==="loading"&&Ae.has(N))&&ir(N),K.delete(N),Ae.delete(N),W.delete(N),ie.delete(N),y.fetchers.delete(N)}function Kl(N){if(h.v7_fetcherPersist){let V=(J.get(N)||0)-1;V<=0?(J.delete(N),ie.add(N)):J.set(N,V)}else qi(N);se({fetchers:new Map(y.fetchers)})}function ir(N){let V=z.get(N);we(V,"Expected fetch controller: "+N),V.abort(),z.delete(N)}function Yr(N){for(let V of N){let F=Ht(V),Q=oi(F.data);y.fetchers.set(V,Q)}}function Zo(){let N=[],V=!1;for(let F of W){let Q=y.fetchers.get(F);we(Q,"Expected fetcher: "+F),Q.state==="loading"&&(W.delete(F),N.push(F),V=!0)}return Yr(N),V}function ea(N){let V=[];for(let[F,Q]of Ae)if(Q<N){let ee=y.fetchers.get(F);we(ee,"Expected fetcher: "+F),ee.state==="loading"&&(ir(F),Ae.delete(F),V.push(F))}return Yr(V),V.length>0}function ta(N,V){let F=y.blockers.get(N)||wa;return he.get(N)!==V&&he.set(N,V),F}function Ql(N){y.blockers.delete(N),he.delete(N)}function js(N,V){let F=y.blockers.get(N)||wa;we(F.state==="unblocked"&&V.state==="blocked"||F.state==="blocked"&&V.state==="blocked"||F.state==="blocked"&&V.state==="proceeding"||F.state==="blocked"&&V.state==="unblocked"||F.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+V.state);let Q=new Map(y.blockers);Q.set(N,V),se({blockers:Q})}function Fs(N){let{currentLocation:V,nextLocation:F,historyAction:Q}=N;if(he.size===0)return;he.size>1&&Ss(!1,"A router only supports one blocker at a time");let ee=Array.from(he.entries()),[oe,le]=ee[ee.length-1],Z=y.blockers.get(oe);if(!(Z&&Z.state==="proceeding")&&le({currentLocation:V,nextLocation:F,historyAction:Q}))return oe}function Us(N){let V=[];return M.forEach((F,Q)=>{(!N||N(Q))&&(F.cancel(),V.push(Q),M.delete(Q))}),V}function Yl(N,V,F){if(I=N,A=V,T=F||null,!P&&y.navigation===Jh){P=!0;let Q=$s(y.location,y.matches);Q!=null&&se({restoreScrollPosition:Q})}return()=>{I=null,A=null,T=null}}function Xr(N,V){return T&&T(N,V.map(Q=>dM(Q,y.loaderData)))||N.key}function na(N,V){if(I&&A){let F=Xr(N,V);I[F]=A()}}function $s(N,V){if(I){let F=Xr(N,V),Q=I[F];if(typeof Q=="number")return Q}return null}function Tr(N){s={},a=Sp(N,i,void 0,s)}return B={get basename(){return u},get future(){return h},get state(){return y},get routes(){return o},get window(){return e},initialize:qe,subscribe:Ce,enableScrollRestoration:Yl,navigate:pt,fetch:rr,revalidate:Te,createHref:N=>t.history.createHref(N),encodeLocation:N=>t.history.encodeLocation(N),getFetcher:Ht,deleteFetcher:Kl,dispose:Ie,getBlocker:ta,deleteBlocker:Ql,_internalFetchControllers:z,_internalActiveDeferreds:M,_internalSetRoutes:Tr},B}function VM(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Cp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let h=Bg(i||".",zg(u,s),Wr(t.pathname,n)||t.pathname,a==="path");return i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Gg(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:jr([n,h.pathname])),As(h)}function b_(t,e,n,r){if(!r||!VM(r))return{path:n};if(r.formMethod&&!QM(r.formMethod))return{path:n,error:kn(405,{method:r.formMethod})};let i=()=>({path:n,error:kn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=jS(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Gn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((I,T)=>{let[A,P]=T;return""+I+A+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Gn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}we(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Rp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Rp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=M_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=M_(u)}catch{return i()}let h={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Gn(h.formMethod))return{path:n,submission:h};let f=Kr(n);return e&&f.search&&Gg(f.search)&&u.append("index",""),f.search="?"+u,{path:As(f),submission:h}}function jM(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function D_(t,e,n,r,i,s,o,a,u,c,h,f,m,I,T,A){let P=A?Nn(A[1])?A[1].error:A[1].data:void 0,E=t.createURL(e.location),v=t.createURL(i),C=A&&Nn(A[1])?A[0]:void 0,O=C?jM(n,C):n,U=A?A[1].statusCode:void 0,B=o&&U&&U>=400,y=O.filter((S,R)=>{let{route:k}=S;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(FM(e.loaderData,e.matches[R],S)||u.some(Ee=>Ee===S.route.id))return!0;let b=e.matches[R],x=S;return N_(S,ot({currentUrl:E,currentParams:b.params,nextUrl:v,nextParams:x.params},r,{actionResult:P,unstable_actionStatus:U,defaultShouldRevalidate:B?!1:a||E.pathname+E.search===v.pathname+v.search||E.search!==v.search||VS(b,x)}))}),_=[];return f.forEach((S,R)=>{if(s||!n.some(Ne=>Ne.route.id===S.routeId)||h.has(R))return;let k=co(I,S.path,T);if(!k){_.push({key:R,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(R),x=Pp(k,S.path),Ee=!1;m.has(R)?Ee=!1:c.includes(R)?Ee=!0:b&&b.state!=="idle"&&b.data===void 0?Ee=a:Ee=N_(x,ot({currentUrl:E,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:U,defaultShouldRevalidate:B?!1:a})),Ee&&_.push({key:R,routeId:S.routeId,path:S.path,matches:k,match:x,controller:new AbortController})}),[y,_]}function FM(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function VS(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function N_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function O_(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];we(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Ss(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!uM.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ot({},e(i),{lazy:void 0}))}function UM(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function $M(t,e,n,r,i,s,o,a){let u=r.reduce((f,m)=>f.add(m.route.id),new Set),c=new Set,h=await t({matches:i.map(f=>{let m=u.has(f.route.id);return ot({},f,{shouldLoad:m,resolve:T=>(c.add(f.route.id),m?zM(e,n,f,s,o,T,a):Promise.resolve({type:nt.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>we(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),h.filter((f,m)=>u.has(i[m].route.id))}async function zM(t,e,n,r,i,s,o){let a,u,c=h=>{let f,m=new Promise((A,P)=>f=P);u=()=>f(),e.signal.addEventListener("abort",u);let I=A=>typeof h!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):h({request:e,params:n.params,context:o},...A!==void 0?[A]:[]),T;return s?T=s(A=>I(A)):T=(async()=>{try{return{type:"data",result:await I()}}catch(A){return{type:"error",result:A}}})(),Promise.race([T,m])};try{let h=n.route[t];if(n.route.lazy)if(h){let f,[m]=await Promise.all([c(h).catch(I=>{f=I}),O_(n.route,i,r)]);if(f!==void 0)throw f;a=m}else if(await O_(n.route,i,r),h=n.route[t],h)a=await c(h);else if(t==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw kn(405,{method:e.method,pathname:m,routeId:n.route.id})}else return{type:nt.data,result:void 0};else if(h)a=await c(h);else{let f=new URL(e.url),m=f.pathname+f.search;throw kn(404,{pathname:m})}we(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(h){return{type:nt.error,result:h}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function BM(t){let{result:e,type:n,status:r}=t;if(FS(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:nt.error,error:a}}return n===nt.error?{type:nt.error,error:new Hg(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:nt.data,data:o,statusCode:e.status,headers:e.headers}}if(n===nt.error)return{type:nt.error,error:e,statusCode:qg(e)?e.status:r};if(KM(e)){var i,s;return{type:nt.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:nt.data,data:e,statusCode:r}}function HM(t,e,n,r,i,s){let o=t.headers.get("Location");if(we(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Wg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Cp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function L_(t,e,n){if(Wg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Wr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ws(t,e,n,r){let i=t.createURL(jS(e)).toString(),s={signal:n};if(r&&Gn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Rp(r.formData):s.body=r.formData}return new Request(i,s)}function Rp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function M_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function qM(t,e,n,r,i,s){let o={},a=null,u,c=!1,h={},f=r&&Nn(r[1])?r[1].error:void 0;return n.forEach((m,I)=>{let T=e[I].route.id;if(we(!is(m),"Cannot handle redirect results in processLoaderData"),Nn(m)){let A=m.error;f!==void 0&&(A=f,f=void 0),a=a||{};{let P=Ya(t,T);a[P.route.id]==null&&(a[P.route.id]=A)}o[T]=void 0,c||(c=!0,u=qg(m.error)?m.error.status:500),m.headers&&(h[T]=m.headers)}else rs(m)?(i.set(T,m.deferredData),o[T]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[T]=m.headers)):(o[T]=m.data,m.statusCode&&m.statusCode!==200&&!c&&(u=m.statusCode),m.headers&&(h[T]=m.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:h}}function V_(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=qM(e,n,r,i,a);for(let h=0;h<s.length;h++){let{key:f,match:m,controller:I}=s[h];we(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let T=o[h];if(!(I&&I.signal.aborted))if(Nn(T)){let A=Ya(t.matches,m==null?void 0:m.route.id);c&&c[A.route.id]||(c=ot({},c,{[A.route.id]:T.error})),t.fetchers.delete(f)}else if(is(T))we(!1,"Unhandled fetcher revalidation redirect");else if(rs(T))we(!1,"Unhandled fetcher deferred data");else{let A=oi(T.data);t.fetchers.set(f,A)}}return{loaderData:u,errors:c}}function j_(t,e,n,r){let i=ot({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function F_(t){return t?Nn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Ya(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function U_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function kn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Hg(t||500,o,new Error(a),!0)}function $_(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(is(n))return{result:n,idx:e}}}function jS(t){let e=typeof t=="string"?Kr(t):t;return As(ot({},e,{hash:""}))}function WM(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function GM(t){return FS(t.result)&&DM.has(t.result.status)}function rs(t){return t.type===nt.deferred}function Nn(t){return t.type===nt.error}function is(t){return(t&&t.type)===nt.redirect}function KM(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function FS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function QM(t){return bM.has(t.toLowerCase())}function Gn(t){return xM.has(t.toLowerCase())}async function z_(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),h=c!=null&&!VS(c,u)&&(s&&s[u.route.id])!==void 0;if(rs(a)&&(i||h)){let f=r[o];we(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await US(a,f,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function US(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:nt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:nt.error,error:i}}return{type:nt.data,data:t.deferredData.data}}}function Gg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Pp(t,e){let n=typeof e=="string"?Kr(e).search:e.search;if(t[t.length-1].route.index&&Gg(n||""))return t[t.length-1];let r=OS(t);return r[r.length-1]}function B_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Zh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function YM(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ea(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function XM(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function oi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function JM(t,e){try{let n=t.sessionStorage.getItem(MS);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function ZM(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(MS,JSON.stringify(n))}catch(r){Ss(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qc(){return qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qc.apply(this,arguments)}const Wl=D.createContext(null),Kg=D.createContext(null),Bi=D.createContext(null),Qg=D.createContext(null),Qr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),$S=D.createContext(null);function eV(t,e){let{relative:n}=e===void 0?{}:e;Gl()||we(!1);let{basename:r,navigator:i}=D.useContext(Bi),{hash:s,pathname:o,search:a}=eh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:jr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Gl(){return D.useContext(Qg)!=null}function Ms(){return Gl()||we(!1),D.useContext(Qg).location}function zS(t){D.useContext(Bi).static||D.useLayoutEffect(t)}function Hi(){let{isDataRoute:t}=D.useContext(Qr);return t?pV():tV()}function tV(){Gl()||we(!1);let t=D.useContext(Wl),{basename:e,future:n,navigator:r}=D.useContext(Bi),{matches:i}=D.useContext(Qr),{pathname:s}=Ms(),o=JSON.stringify(zg(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return zS(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Bg(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:jr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const nV=D.createContext(null);function rV(t){let e=D.useContext(Qr).outlet;return e&&D.createElement(nV.Provider,{value:t},e)}function Yg(){let{matches:t}=D.useContext(Qr),e=t[t.length-1];return e?e.params:{}}function eh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Bi),{matches:i}=D.useContext(Qr),{pathname:s}=Ms(),o=JSON.stringify(zg(i,r.v7_relativeSplatPath));return D.useMemo(()=>Bg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function iV(t,e,n,r){Gl()||we(!1);let{navigator:i}=D.useContext(Bi),{matches:s}=D.useContext(Qr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ms(),h;h=c;let f=h.pathname||"/",m=f;if(u!=="/"){let A=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let I=co(t,{pathname:m});return uV(I&&I.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:jr([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:jr([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function sV(){let t=fV(),e=qg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const oV=D.createElement(sV,null);class aV extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Qr.Provider,{value:this.props.routeContext},D.createElement($S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lV(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Wl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Qr.Provider,{value:e},r)}function uV(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||we(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:I}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!I||I[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let I,T=!1,A=null,P=null;n&&(I=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||oV,u&&(c<0&&m===0?(T=!0,P=null):c===m&&(T=!0,P=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let C;return I?C=A:T?C=P:f.route.Component?C=D.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,D.createElement(lV,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(aV,{location:n.location,revalidation:n.revalidation,component:A,error:I,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var BS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(BS||{}),Wc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Wc||{});function cV(t){let e=D.useContext(Wl);return e||we(!1),e}function dV(t){let e=D.useContext(Kg);return e||we(!1),e}function hV(t){let e=D.useContext(Qr);return e||we(!1),e}function HS(t){let e=hV(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function fV(){var t;let e=D.useContext($S),n=dV(Wc.UseRouteError),r=HS(Wc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pV(){let{router:t}=cV(BS.UseNavigateStable),e=HS(Wc.UseNavigateStable),n=D.useRef(!1);return zS(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qc({fromRouteId:e},s)))},[t,e])}function mV(t){return rV(t.context)}function or(t){we(!1)}function gV(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wt.Pop,navigator:s,static:o=!1,future:a}=t;Gl()&&we(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:qc({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Kr(r));let{pathname:h="/",search:f="",hash:m="",state:I=null,key:T="default"}=r,A=D.useMemo(()=>{let P=Wr(h,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:I,key:T},navigationType:i}},[u,h,f,m,I,T,i]);return A==null?null:D.createElement(Bi.Provider,{value:c},D.createElement(Qg.Provider,{children:n,value:A}))}new Promise(()=>{});function xp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,xp(r.props.children,s));return}r.type!==or&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xp(r.props.children,s)),n.push(o)}),n}function yV(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:D.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:D.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:D.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}function qS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vV(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _V(t,e){return t.button===0&&(!e||e==="_self")&&!vV(t)}const wV=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],EV=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],TV="6";try{window.__reactRouterVersion=TV}catch{}function IV(t,e){return MM({basename:void 0,future:Fo({},void 0,{v7_prependBasename:!0}),history:oM({window:void 0}),hydrationData:SV(),routes:t,mapRouteProperties:yV,unstable_dataStrategy:void 0,window:void 0}).initialize()}function SV(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Fo({},e,{errors:AV(e.errors)})),e}function AV(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Hg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const WS=D.createContext({isTransitioning:!1}),CV=D.createContext(new Map),RV="startTransition",H_=DA[RV],PV="flushSync",q_=BR[PV];function xV(t){H_?H_(t):t()}function Ta(t){q_?q_(t):t()}class kV{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function bV(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=D.useState(n.state),[o,a]=D.useState(),[u,c]=D.useState({isTransitioning:!1}),[h,f]=D.useState(),[m,I]=D.useState(),[T,A]=D.useState(),P=D.useRef(new Map),{v7_startTransition:E}=r||{},v=D.useCallback(y=>{E?xV(y):y()},[E]),C=D.useCallback((y,_)=>{let{deletedFetchers:S,unstable_flushSync:R,unstable_viewTransitionOpts:k}=_;S.forEach(x=>P.current.delete(x)),y.fetchers.forEach((x,Ee)=>{x.data!==void 0&&P.current.set(Ee,x.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||b){R?Ta(()=>s(y)):v(()=>s(y));return}if(R){Ta(()=>{m&&(h&&h.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let x=n.window.document.startViewTransition(()=>{Ta(()=>s(y))});x.finished.finally(()=>{Ta(()=>{f(void 0),I(void 0),a(void 0),c({isTransitioning:!1})})}),Ta(()=>I(x));return}m?(h&&h.resolve(),m.skipTransition(),A({state:y,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(y),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,m,h,P,v]);D.useLayoutEffect(()=>n.subscribe(C),[n,C]),D.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new kV)},[u]),D.useEffect(()=>{if(h&&o&&n.window){let y=o,_=h.promise,S=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await _});S.finished.finally(()=>{f(void 0),I(void 0),a(void 0),c({isTransitioning:!1})}),I(S)}},[v,o,h,n.window]),D.useEffect(()=>{h&&o&&i.location.key===o.location.key&&h.resolve()},[h,m,i.location,o]),D.useEffect(()=>{!u.isTransitioning&&T&&(a(T.state),c({isTransitioning:!0,flushSync:!1,currentLocation:T.currentLocation,nextLocation:T.nextLocation}),A(void 0))},[u.isTransitioning,T]),D.useEffect(()=>{},[]);let O=D.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,_,S)=>n.navigate(y,{state:_,preventScrollReset:S==null?void 0:S.preventScrollReset}),replace:(y,_,S)=>n.navigate(y,{replace:!0,state:_,preventScrollReset:S==null?void 0:S.preventScrollReset})}),[n]),U=n.basename||"/",B=D.useMemo(()=>({router:n,navigator:O,static:!1,basename:U}),[n,O,U]);return D.createElement(D.Fragment,null,D.createElement(Wl.Provider,{value:B},D.createElement(Kg.Provider,{value:i},D.createElement(CV.Provider,{value:P.current},D.createElement(WS.Provider,{value:u},D.createElement(gV,{basename:U,location:i.location,navigationType:i.historyAction,navigator:O,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?D.createElement(DV,{routes:n.routes,future:n.future,state:i}):e))))),null)}function DV(t){let{routes:e,future:n,state:r}=t;return iV(e,void 0,r,n)}const NV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OV=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xo=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=qS(e,wV),{basename:I}=D.useContext(Bi),T,A=!1;if(typeof c=="string"&&OV.test(c)&&(T=c,NV))try{let C=new URL(window.location.href),O=c.startsWith("//")?new URL(C.protocol+c):new URL(c),U=Wr(O.pathname,I);O.origin===C.origin&&U!=null?c=U+O.search+O.hash:A=!0}catch{}let P=eV(c,{relative:i}),E=MV(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:f});function v(C){r&&r(C),C.defaultPrevented||E(C)}return D.createElement("a",Fo({},m,{href:T||P,onClick:A||s?r:v,ref:n,target:u}))}),ef=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:h}=e,f=qS(e,EV),m=eh(u,{relative:f.relative}),I=Ms(),T=D.useContext(Kg),{navigator:A,basename:P}=D.useContext(Bi),E=T!=null&&VV(m)&&c===!0,v=A.encodeLocation?A.encodeLocation(m).pathname:m.pathname,C=I.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(C=C.toLowerCase(),O=O?O.toLowerCase():null,v=v.toLowerCase()),O&&P&&(O=Wr(O,P)||O);const U=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let B=C===v||!o&&C.startsWith(v)&&C.charAt(U)==="/",y=O!=null&&(O===v||!o&&O.startsWith(v)&&O.charAt(v.length)==="/"),_={isActive:B,isPending:y,isTransitioning:E},S=B?r:void 0,R;typeof s=="function"?R=s(_):R=[s,B?"active":null,y?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(_):a;return D.createElement(Xo,Fo({},f,{"aria-current":S,className:R,ref:n,style:k,to:u,unstable_viewTransition:c}),typeof h=="function"?h(_):h)});var kp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kp||(kp={}));var W_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(W_||(W_={}));function LV(t){let e=D.useContext(Wl);return e||we(!1),e}function MV(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Hi(),c=Ms(),h=eh(t,{relative:o});return D.useCallback(f=>{if(_V(f,n)){f.preventDefault();let m=r!==void 0?r:As(c)===As(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function VV(t,e){e===void 0&&(e={});let n=D.useContext(WS);n==null&&we(!1);let{basename:r}=LV(kp.useViewTransitionState),i=eh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Wr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Wr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ap(i.pathname,o)!=null||Ap(i.pathname,s)!=null}const G_=H(({className:t,children:e,to:n})=>{const i=Ms().pathname===n;return g.jsx(Xo,{to:n,className:t,style:{"--link-background-color":i?"var(--blue900)":"white","--link-color":i?"white":"var(--blue900)"},children:e})})`
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
`,GS=H(({className:t})=>g.jsxs("div",{className:t,children:[g.jsx(G_,{to:"/sign_in",children:"Sign In"}),g.jsx(G_,{to:"/sign_up",children:"Sign Up"})]}))`
  display: flex;
`,K_=H(({Icon:t,className:e,...n})=>g.jsxs("div",{className:e,children:[g.jsx("input",{...n}),g.jsx(t,{})]}))`
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
`,jV=H(({className:t})=>{const e=Hi(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Wo();wk(s,i.get("email"),i.get("password")),e("/")};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:n,children:[g.jsx(GS,{}),g.jsx(K_,{Icon:YV,id:"email",type:"email",name:"email"}),g.jsx(K_,{Icon:XV,id:"password",type:"password",name:"password"}),g.jsx(ft,{type:"submit",text:"Sign In"})]})})})`
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
`,FV={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},Xg=Nm(FV),Ke=YI(Xg);OT().then(t=>{t&&NT(Xg)});Wo(Xg);const UV=H(({className:t})=>{const{addToast:e,removeToast:n}=D.useContext(Jo),r=Hi(),i=Wo(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}_k(i,a.get("email"),a.get("password")).then(u=>{eL(rn(Ke,"users",u.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:s,children:[g.jsx(GS,{}),g.jsxs("label",{htmlFor:"email",children:["Email:",g.jsx("input",{id:"email",type:"email",name:"email"})]}),g.jsxs("label",{htmlFor:"password",children:["Password:",g.jsx("input",{id:"password",type:"password",name:"password"})]}),g.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",g.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),g.jsx(ft,{type:"submit",text:"Sign Up"})]})})})`
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
`,Vs=D.createContext(null),$V=({children:t})=>{const[e,n]=D.useState();return Wo().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),g.jsx(Vs.Provider,{value:e,children:t})},zV=H(ft)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,BV=H.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`,HV=H(({className:t})=>{const e=D.useContext(Vs);return g.jsxs(g.Fragment,{children:[g.jsx("nav",{className:t,children:g.jsx("ul",{children:e?g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(ef,{to:"/teams",children:"Teams"})}),g.jsx(BV,{children:e.email}),g.jsx("li",{children:g.jsx(zV,{text:"Sign out",onClick:()=>Wo().signOut()})})]}):g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(ef,{to:"/sign_in",children:"Sign In"})}),g.jsx("li",{children:g.jsx(ef,{to:"/sign_up",children:"Sign Up"})})]})})}),g.jsx(mV,{})]})})`
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
`,bp=H(({className:t,children:e,title:n,...r})=>g.jsxs("details",{className:t,...r,children:[g.jsx("summary",{children:n}),e]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,qV=H(({className:t})=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[g.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),g.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,WV=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,GV=H(({className:t=""})=>g.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,KV=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,QV=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,YV=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,XV=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,Jg=H(({className:t,children:e})=>g.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,JV=xS`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,Zg=H(({className:t})=>g.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${JV} 500ms infinite;
`,ZV=eM`
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


`,ej=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,tj=H.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,nj=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},rj=(t,e)=>new Date(t,e,0).getDate(),ij=(t,e)=>new Date(t,e,1),sj=(t,e)=>{const r=((i,s)=>o=>{var a;if(!((a=i.current)!=null&&a.contains(o.target)))return typeof s=="function"?s(o):null})(t,e);D.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},oj=["January","February","March","April","May","June","July","August","September","October","November","December"],aj=["M","Tu","W","Th","F","Sa","Su"],lj=H.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,uj=H.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,cj=H.div`
  text-align: center;
`,dj=H.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,hj=(t,e)=>{const[n,r]=D.useState([]),i=rj(e,t+1);let s=ij(e,t).getDay()-1;return s===-1&&(s=6),D.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,u)=>u+1)];r(o)},[t,e]),n},fj=H(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,u]=D.useState(o),[c,h]=D.useState(s),f=hj(a,c),m=nj(new Date(i).getFullYear(),5),I=P=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(P).padStart(2,"0")}-${c}`)},T=()=>{u(P=>Number(P)===0?(h(E=>E-1),11):P-1)},A=()=>u(P=>Number(P)===11?(h(E=>E+1),11):P+1);return g.jsxs("div",{ref:e,className:t,popover:"true",children:[g.jsxs(uj,{children:[g.jsx("select",{value:`${a}/${c}`,onChange:P=>{const[E,v]=P.target.value.split("/");u(Number(E)),h(Number(v))},children:m.map(P=>oj.map((E,v)=>g.jsx("option",{value:`${v}/${P}`,children:`${E} , ${P}`},`${v}/${P}`)))}),g.jsx("button",{"aria-label":"left",onClick:T,children:"←"}),g.jsx("button",{"aria-label":"right",onClick:A,children:"→"})]}),g.jsxs(lj,{children:[aj.map(P=>g.jsx(cj,{children:P},`${P}-header`)),f.map((P,E)=>typeof P=="number"?g.jsx(dj,{onClick:()=>I(P),$selected:new Date(i).getDate()===P&&a===o&&c===s,children:P},`${P}-${a}-${c}`):g.jsx("span",{},`blank-day-${E}`))]})]})})`
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
`;H(({className:t,value:e,setValue:n})=>{const r=D.useRef(null),i=D.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return sj(i,o=>{var a,u;(a=r.current)!=null&&a.contains(o.target)||(u=i.current)==null||u.hidePopover()}),g.jsxs("div",{className:t,children:[g.jsx(tj,{value:e,readOnly:!0}),g.jsx("button",{onClick:s,ref:r,children:g.jsx(ej,{})}),g.jsx(fj,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const pj=t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 16 16",...t,children:g.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),mj={success:pj},gj={success:"var(--affirmative)"},Q_=H(({className:t,variant:e,children:n,onClose:r})=>{const i=D.useRef(),s=mj[e];return D.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[]),g.jsxs("div",{className:t,popover:"auto",children:[g.jsx(s,{style:{color:gj[e]}}),g.jsx("div",{children:n}),g.jsx("button",{onClick:r,children:g.jsx(Zd,{})})]})})`
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
`,Dp=H(({toasts:t,className:e})=>{const n=D.useId();return g.jsx("ul",{className:e,children:t.map(({variant:r,onClose:i,message:s})=>g.jsx("li",{children:g.jsx(Q_,{variant:r,onClose:i,children:s})},n))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: start;

  & > li > ${Q_} {
    background-color: var(--secondary);
    color: white;
  }
`,Jo=D.createContext(null),yj=({children:t})=>{const[e,n]=D.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return g.jsxs(Jo.Provider,{value:{removeToast:i,addToast:r},children:[t,g.jsx(Dp,{toasts:e})]})},ls=H(({passedRef:t,className:e,children:n,onClose:r})=>g.jsxs("dialog",{ref:t,className:e,children:[g.jsx("button",{onClick:r,formNoValidate:!0,children:g.jsx(Zd,{})}),n]}))`
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
`,vj=D.createContext(null),tf={didCatch:!1,error:null};class _j extends D.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=tf}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(tf)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&wj(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(tf)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(u);else if(r)a=D.createElement(r,u);else if(i===null||D.isValidElement(i))a=i;else throw o}return D.createElement(vj.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function wj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const Ej=H.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,Tj=H.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,Y_=H(({children:t,passedRef:e,className:n})=>g.jsx("dialog",{ref:e,className:n,children:g.jsx("div",{children:t})}))`
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
`,Ij=H(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=D.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return g.jsxs("li",{className:r,children:[g.jsx(Xo,{to:`/practice_plans/${t}`,children:s(e)}),g.jsx(Tj,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),g.jsxs(Y_,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",g.jsx("br",{})," This action cannot be undone"," ",g.jsxs("div",{children:[g.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),g.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${Y_} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,Sj=H(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=Hi(),i=s=>{s("/create")};return g.jsxs("main",{className:t,children:[g.jsxs(Ej,{children:[g.jsx("h1",{children:"Practice plans"}),g.jsx(ft,{onClick:()=>i(r),text:"Add Practice Plan"})]}),g.jsx("ul",{children:e.map(s=>g.jsx(Ij,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
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
`;H(({className:t})=>{const[e,n]=D.useState([]),[r,i]=D.useState(!1),{addToast:s,removeToast:o}=D.useContext(Jo),a=async c=>{await cS(rn(Ke,"practice_plan",c)),n(h=>h.filter(f=>f.id!==c)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},u=()=>(i(!0),wr(Un(Ke,"practice_plan")).then(c=>{const h=c.docs.map(f=>({...f.data(),id:f.id})).sort((f,m)=>Number(m.date.seconds)-Number(f.date.seconds));n(h)}).catch(c=>{throw new Error(c)}).finally(()=>{i(!1)}));return D.useEffect(()=>{u()},[]),g.jsx(_j,{fallback:g.jsx("p",{children:"⚠️ Something went wrong"}),children:g.jsx("div",{className:t,children:r?g.jsx(Jg,{children:g.jsx(Zg,{})}):g.jsx(Sj,{practicePlans:e,deletePracticePlan:a})})})})`
  background: linear-gradient(var(--blue100), var(--blue900));
  height: calc(100% - 51px);
`;const Aj=H(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>g.jsxs("g",{onClick:s,className:t,children:[g.jsx("circle",{r:i+5,cy:r,cx:n}),g.jsx("circle",{className:t,r:i,cy:r,cx:n}),g.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,X_=H.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,Cj=H(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(c=>{const h=i.find(f=>f.moves.includes(c));return h?new Date(Number(h.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),u=c=>c==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(c))/864e5);return g.jsxs(kS,{className:s,addToPracticePlan:()=>r(n.id),children:[g.jsx("span",{children:n.name}),g.jsxs("span",{children:["Last Review: ",a]}),g.jsx(X_,{$reviewUrgency:u(a),children:u(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${X_} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,Rj=H(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=D.useContext($g),[u,c]=D.useState([]),{id:h=""}=Yg(),f=P=>wr(Ls(Un(Ke,"practice_plan"),Mi("teamId","==",P))).then(E=>{const v=E.docs.map(C=>({...C.data(),id:C.id})).sort((C,O)=>Number(O.date.seconds)-Number(C.date.seconds));c(v)}).catch(E=>{throw new Error(E)});D.useEffect(()=>{f(h)},[]);const m=50,I=70,T=P=>{const E="50%",v="25%",C="75%";return P%3===1||P===0?E:P%6===2||P%6===3?v:C},A=P=>{o(P),s()};return g.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((P,E)=>g.jsxs("g",{children:[g.jsx("line",{x1:T(E),y1:I+E*110,x2:T(E+1),y2:I+(E+1)*110}),g.jsx(Aj,{r:m,y:I+E*110,x:T(E),onClick:()=>{a(P),A(()=>g.jsx(g.Fragment,{children:i.filter(v=>v.area===r&&v.position===P).map(v=>g.jsx(Cj,{position:P,area:r,move:v,addToPracticePlan:n,practicePlans:u}))}))},text:P})]},P))})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));

  & > g > line {
    stroke: var(--orange);
  }

  ${kS} > span {
  }
`,KS=t=>!isNaN(t),ey=(t,e)=>e.map(n=>t.find(r=>r.id===n)),ty=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),J_=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),Pj=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(ty(ey(t,e)))),xj=async(t,e)=>{if(!KS(t.date)){alert("please submit a valid date");return}await Rg(Un(Ke,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},kj=async(t,e,n)=>{const r=rn(Ke,"practice_plan",t);if(!KS(e.date)){alert("please submit a valid date");return}await xi(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},bj=H.div`
  height: 100%;
  overflow: scroll;
`,Dj=H.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,Nj=H.input``,Z_=H(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:u})=>{const c=Hi(),[h,f]=D.useState(window.innerWidth>850),{closePanel:m}=D.useContext($g);D.useEffect(()=>()=>m(),[]);const I=()=>{window.innerWidth>850&&f(!0)};D.useLayoutEffect(()=>(window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)}),[]);const T=()=>{f(P=>!P)},A=P=>{const[E,v,C]=P.split("-");return new Date(`${v}/${C}/${E}`)};return g.jsxs("aside",{className:t,style:{"--transform":h?"translateX(0%)":"translateX(-100%)"},children:[g.jsx("button",{"aria-label":"show practice plan",onClick:T,children:g.jsx(QV,{})}),g.jsxs(bj,{children:["Date:",g.jsx(Nj,{type:"date",value:r,onChange:P=>a(P.target.value)}),g.jsx("h1",{children:"Practice Plan"}),Object.entries(ty(ey(e,n))).map(([P,E])=>g.jsxs(D.Fragment,{children:[g.jsx("h2",{children:P}),E.map(v=>g.jsx(bp,{title:v.name,children:v.moves.map(({name:C,id:O})=>g.jsxs(Lj,{children:[C,g.jsx(Mj,{onClick:()=>i(O),children:g.jsx(Zd,{})})]},`${v.name}=${C}`))},v.name))]},P)),g.jsxs(Dj,{children:[!o&&g.jsx(ft,{onClick:s,text:"Clear Practice Plan",Icon:Oj,$level:"caution"}),g.jsx(ft,{onClick:()=>Pj(e,n),text:"Copy Practice Plan",Icon:qV}),g.jsx(ft,{onClick:()=>{o?kj(o,{moves:n,date:A(r),teamId:u},c):xj({moves:n,date:A(r),teamId:u},c)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:WV})]})]})]})})`
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
`,Oj=H(GV)`
  stroke: white;
`,Lj=H.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,Mj=H.button`
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
`,ew=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},Vj=t=>{const[e,n]=D.useState([]),[r,i]=D.useState(ew(new Date));return D.useEffect(()=>{t&&Cg(rn(Ke,"practice_plan",t)).then(o=>{const a={...o.data(),id:o.id};i(ew(new Date(Number(a.date.seconds)*1e3))),n(a.moves)})},[t]),[e,n,r,i]},jj=t=>wr(Ls(Un(Ke,"moves"),Mi("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),tw=H(({className:t})=>{const[e,n]=D.useState("neutral"),[r,i]=D.useState([]),{addToast:s,removeToast:o}=D.useContext(Jo),{practice_plan_id:a,id:u=""}=Yg(),[c,h,f,m]=Vj(a);D.useEffect(()=>{jj(u).then(E=>i(E))},[u]);const I=()=>{m(new Date),h([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},T=E=>{h(v=>v.includes(E)?(s({variant:"success",message:"move already exists",onClose:()=>o("move already exists")}),v):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...v,E]))},A=E=>{h(v=>[...v].filter(C=>C!==E)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},P=E=>{m(E),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return g.jsxs("main",{className:t,children:[g.jsx(R_,{tabs:J_(r).map(E=>E.name),currentTab:e,setCurrentTab:n}),g.jsx(Z_,{moves:r,practicePlanMoves:c,practicePlanDate:f,clearPracticePlan:I,removeFromPracticePlan:A,currentPracticePlanId:a,updatePracticePlanDate:P,teamId:u}),g.jsx(Rj,{addToPracticePlan:T,content:[...J_(r).find(E=>E.name===e).positions],area:e,moves:r})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${Z_} {
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

  & > ${R_} {
    background-color: var(--blue100);
  }
`,Fj=H.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,Uj=H(({className:t})=>{const[e,n]=D.useState({date:new Date,moves:[],id:""}),[r,i]=D.useState([]),s=Ms(),o=Hi(),a=s.pathname.split("/").at(-1)??"",u=Ls(Un(Ke,"practice_plan"),Mi(jO(),"==",a)),c=()=>wr(Un(Ke,"moves")).then(m=>{const I=m.docs.map(T=>({...T.data(),id:T.id}));i(I)}),h=()=>wr(u).then(m=>{const I=m.docs.map(A=>({...A.data(),id:A.id})),[T]=I;n(T)});D.useEffect(()=>{c(),h()},[]);const f=m=>{o("edit")};return g.jsxs("main",{className:t,children:[Object.entries(ty(ey(r,e.moves))).map(([m,I])=>g.jsxs(Fj,{children:[g.jsx("h2",{children:m}),I.map(T=>g.jsx("li",{children:g.jsx(bp,{title:T.name,open:!0,children:g.jsx("ul",{children:T==null?void 0:T.moves.map(A=>g.jsx("li",{children:A.name},`${T.name}-${A.name}`))})})},T.name))]},m)),g.jsx(ft,{onClick:()=>f(),text:"Edit Practice Plan",Icon:KV,$level:"caution"})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${ft} {
    align-self: start;
  }

  & ${bp} {
    background-color: var(--secondary);
  }
`,Gc=H.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,$j=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],QS=Un(Ke,"teams"),zj=()=>wr(QS).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),Bj=H.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`,Hj=H.li`
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
`,nw=H.div`
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
`,rw=H.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,qj=H.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,Wj=H(({className:t,teams:e,setTeams:n})=>{const r=D.useContext(Vs),{addToast:i,removeToast:s}=D.useContext(Jo),o=D.useRef(),a=D.useRef(),u=()=>{o.current&&o.current.showModal()},c=()=>{o.current&&o.current.close()},h=()=>{a.current&&a.current.showModal()},f=()=>{a.current&&a.current.close()},m=T=>{T.preventDefault();const A=new FormData(T.currentTarget),P={name:A.get("teamName"),state:A.get("stateLocation"),joinRequests:[],goals:[],userIds:[r.uid],users:[{role:"admin",uid:r.uid}]};Rg(QS,P).then(E=>{n(v=>[...v,{...P,id:E.id}]),c()})},I=T=>{T.preventDefault();const A=new FormData(T.currentTarget),P=e.find(E=>E.id===A.get("teamToJoin"));if(P&&P.joinRequests.find(v=>v.uid===r.uid)){i({variant:"success",message:"You have an existing request to join this team",onClose:()=>s("You have an existing request to join this team")});return}xi(rn(Ke,"teams",A.get("teamToJoin")),{joinRequests:El({userEmail:r.email,uid:r.uid,role:A.get("requestedRole")})}).then(()=>{f(),i({variant:"success",message:"Request Successfully Submitted",onClose:()=>s("Request Successfully Submitted")})})};return g.jsxs("main",{className:t,children:[g.jsx("h1",{children:"My Teams"}),g.jsx(Bj,{children:e.filter(T=>T.userIds.includes(r.uid)).map(T=>g.jsx(Xo,{to:`${T.id}`,children:g.jsxs(Hj,{children:[g.jsxs("span",{children:[T.name," (",T.state,")"]}),g.jsxs(rw,{children:["Users ",g.jsx(nw,{children:T.users.length})]}),g.jsxs(rw,{children:[g.jsx("span",{children:"Join Requests"})," ",g.jsx(nw,{children:T.joinRequests.length})]}),T.users.find(A=>A.uid===r.uid&&A.role==="admin")?g.jsx(Gc,{$color:"white",children:"Admin"}):g.jsx("span",{})]})},T.id))}),g.jsxs(qj,{children:[g.jsx(ft,{text:"Request to Join a Team",onClick:h}),g.jsx(ft,{text:"Create a Team",onClick:u})]}),g.jsx(ls,{passedRef:o,onClose:c,children:g.jsxs("form",{onSubmit:m,children:[g.jsxs("label",{htmlFor:"teamName",children:[g.jsx("span",{children:"Team Name:"}),g.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),g.jsxs("label",{htmlFor:"stateLocation",children:[g.jsx("span",{children:"State:"}),g.jsx("select",{name:"stateLocation",id:"stateLocation",children:$j.map(T=>g.jsx("option",{value:T,children:T},T))})]}),g.jsx(ft,{text:"Create",type:"submit"})]})}),g.jsx(ls,{passedRef:a,onClose:f,children:g.jsxs("form",{onSubmit:I,children:[g.jsxs("label",{htmlFor:"teamToJoin",children:[g.jsx("span",{children:"Team:"}),g.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(T=>!T.userIds.includes(r.uid)).map(T=>g.jsxs("option",{value:T.id,children:[T.name," (",T.state,")"]},T.id))})]}),g.jsxs("label",{htmlFor:"requestedRole",children:[g.jsx("span",{children:"Requested Role:"}),g.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(T=>g.jsx("option",{value:T,children:T},T))})]}),g.jsx(ft,{text:"Send Request to Join",type:"submit"})]})})]})})`
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

  & > ${ls} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,Gj=H(({className:t})=>{const[e,n]=D.useState([]),[r,i]=D.useState(!1);return D.useEffect(()=>{i(!0),zj().then(s=>n(s)).then(()=>i(!1))},[]),g.jsx("div",{className:t,children:r?g.jsx(Jg,{children:g.jsx(Zg,{})}):g.jsx(Wj,{teams:e,setTeams:n})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
`,Kj=H(ft)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,ny=({roles:t,team:e,children:n})=>{const r=D.useContext(Vs),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},Qj=H(({uid:t,role:e,team:n,setTeam:r,className:i})=>{const[s,o]=D.useState(""),a=D.useContext(Vs),u=D.useRef(),c=async T=>await Cg(rn(Ke,"users",T)).then(A=>({...A.data(),id:A.id}).email);D.useEffect(()=>{c(t).then(o)},[t]);const h=()=>{xi(rn(Ke,"teams",n.id),{users:Ka({uid:t,role:e}),userIds:Ka(t)}),r(T=>({...T,users:T.users.filter(A=>A.uid!==t),userIds:T.userIds.filter(A=>A!==t)}))},f=()=>{u.current&&u.current.showModal()},m=()=>{u.current&&u.current.close()},I=T=>{T.preventDefault();const A=new FormData(T.currentTarget);xi(rn(Ke,"teams",n.id),{users:Ka({uid:t,role:e})}),xi(rn(Ke,"teams",n.id),{users:El({uid:t,role:A.get("newRole")})}),r(P=>{const E=P.users.find(v=>v.uid===t);if(!E){alert("could not find user!");return}return E.role=A.get("newRole"),{...P,users:[...P.users.filter(v=>v.uid!==t),E].filter(v=>v)}}),u.current&&m()};return g.jsxs("li",{className:i,children:[g.jsx("span",{children:s}),g.jsx(Gc,{children:e}),g.jsxs(ny,{roles:["admin"],team:n,children:[g.jsx(Kj,{onClick:f,text:"Update Role"}),t!==a.uid&&g.jsx(ry,{$level:"caution",onClick:h,text:"Remove User"}),g.jsx(ls,{passedRef:u,onClose:m,children:g.jsxs("form",{onSubmit:I,children:[g.jsxs("label",{htmlFor:"newRole",children:[g.jsx("span",{children:"New Role:"}),g.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(T=>g.jsx("option",{value:T,children:T},T))})]}),g.jsx(ft,{text:"Update Role",type:"submit"})]})})]})]})})`
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

    ${Gc} {
      justify-self: center;
    }
  }
`,Yj=t=>Cg(rn(Ke,"teams",t)).then(e=>({...e.data(),id:e.id})),Xj=t=>wr(Ls(Un(Ke,"moves"),Mi("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),Jj=t=>wr(Ls(Un(Ke,"practice_plan"),Mi("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),Zj=["jv","varsity","state qualifier","state placer"],e4=["neutral","top","bottom"],t4=H(({className:t,moves:e,setMoves:n,teamId:r,team:i})=>{const s=D.useRef(),o=()=>{s.current&&s.current.showModal()},a=()=>{s.current&&s.current.close()},u=c=>{c.preventDefault();const h=new FormData(c.currentTarget),f={area:h.get("area"),level:h.get("level"),name:h.get("name"),position:h.get("position"),teamId:r};Rg(Un(Ke,"moves"),f).then(m=>{n(I=>[...I,{...f,id:m.id}])}),a()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Moves"}),g.jsx(n4,{children:e.map(c=>g.jsx(s4,{move:c}))}),g.jsxs(ny,{roles:["admin","base+"],team:i,children:[g.jsx(ft,{onClick:o,text:"Add Move"}),g.jsx(ls,{passedRef:s,onClose:a,children:g.jsxs("form",{onSubmit:u,children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx("span",{children:"Move name:"}),g.jsx("input",{type:"text",name:"name",id:"name"})]}),g.jsxs("label",{htmlFor:"area",children:[g.jsx("span",{children:"Move Area:"}),g.jsx("select",{name:"area",id:"area",children:e4.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"level",children:[g.jsx("span",{children:"Move Level:"}),g.jsx("select",{name:"level",id:"level",children:Zj.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"position",children:[g.jsx("span",{children:"Move Position:"}),g.jsx("input",{type:"text",name:"position",id:"position"})]}),g.jsx(ft,{text:"Add Move",type:"submit"})]})})]})]})})`
  display: grid;
  gap: 16px;
`,n4=H.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,r4=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",i4=t=>t==="jv"?"JV":t==="varsity"?"V":t==="state qualifier"?"SQ":t==="state placer"?"SP":"",s4=H(({className:t,move:e})=>g.jsx("li",{className:t,children:g.jsxs("div",{children:[g.jsx("h3",{children:e.name}),g.jsxs("span",{children:[e.area," - ",e.position]}),g.jsx(Gc,{$color:r4(e.level),children:i4(e.level)})]})}))`
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
`,o4=H.span`
  font-size: 1.5em;
`,a4=H.span`
  font-size: 2em;
`,ec=H(({className:t,title:e,subtext:n,value:r})=>g.jsxs("output",{className:t,children:[g.jsx(o4,{children:e}),g.jsx("p",{children:n}),g.jsx(a4,{children:r})]}))`
  background-color: var(--blue900);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 8px hsl(0deg 0% 1.55% / 50%);
`,l4=H.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media screen and (width >= 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
  }

  & > ${ec} {
    width: auto;
  }
`,u4=H.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`,c4=H.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,iw=H.section`
  display: grid;
  gap: 8px;
`,d4=H.ul`
  list-style: none;
`,h4=H.li`
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
`,f4=H(({className:t,team:e,setTeam:n,teamId:r})=>{const i=o=>{xi(rn(Ke,"teams",r),{joinRequests:Ka(o),users:El({uid:o.uid,role:o.role}),userIds:El(o.uid)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid),users:[...a.users,{uid:o.uid,role:o.role}],userIds:[...a.userIds,o.uid]}))},s=o=>{xi(rn(Ke,"teams",r),{joinRequests:Ka(o)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid)}))};return e?g.jsxs("div",{className:t,children:[g.jsx("h2",{children:"Admin"}),g.jsx(c4,{children:g.jsxs(ny,{roles:["admin","base+"],team:e,children:[g.jsxs(iw,{children:[g.jsx("h3",{children:"Team Users"}),g.jsx(u4,{children:e.users.map(o=>g.jsx(Qj,{team:e,setTeam:n,uid:o.uid,role:o.role}))})]}),g.jsxs(iw,{children:[g.jsx("h3",{children:"Open Join Requests:"}),g.jsx(d4,{children:e.joinRequests.map(o=>g.jsxs(h4,{children:[g.jsx("span",{children:o.userEmail}),g.jsx("span",{children:o.role}),g.jsx(ft,{onClick:()=>i(o),text:"Accept"}),g.jsx(ry,{$level:"caution",onClick:()=>s(o),text:"Decline"})]}))})]})]})})]}):null})`
  display: grid;
  gap: 16px;
`,p4=H.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`,m4=H.div`
  &:not(:last-of-type) {
    border-bottom: 2px solid var(--blue900);
  }
  position: relative;
`,g4=H.li`
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
`,ry=H(ft)`
  background: transparent;
  color: var(--caution);
  border: 2px solid var(--caution);
  padding: 8px;
  white-space: nowrap;

  &:hover {
    background-color: var(--blue900);
  }
`,y4=H(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],{addToast:i,removeToast:s}=D.useContext(Jo),o=c=>new Date(Number(c)*1e3).toLocaleDateString(),a=c=>c.map(h=>({time:o(h.date.seconds),id:h.id})).reduce((h,f)=>{const[m,I,T]=f.time.split("/"),A=`${r[Number(m)-1]}, ${T}`;return{...h,[A]:[...String(A)in h?h[String(A)]:[],f]}},{}),u=async c=>{await cS(rn(Ke,"practice_plan",c)),n(h=>h.filter(f=>f.id!==c)),i({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>s("Practice Plan Successfully Deleted")})};return g.jsx("ul",{className:t,children:Object.entries(a(e)).map(([c,h])=>g.jsxs(m4,{children:[g.jsx(p4,{children:c}),h.map(f=>g.jsxs(g4,{children:[g.jsx(Xo,{to:`practice_plans/${f.id}`,children:f.time},f.id),g.jsx(ry,{$level:"caution",text:"Delete Practice Plan",onClick:()=>u(f.id)})]}))]},c))})})`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid var(--blue900);
`,v4=H(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=Hi();return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Practice Plans"}),g.jsx(y4,{practicePlans:e,setPracticePlans:n}),g.jsx(ft,{text:"Add Practice Plan",onClick:()=>r("practice_plans/create")})]})})`
  display: grid;
  gap: 16px;
`,_4=H.table`
  border-collapse: collapse;
  border-radius: 8px;
  overflow: clip;
`,iy=H.tr``,un=H.td`
  padding: 4px 16px;
  text-align: center;
`,w4=H(({className:t,goal:e,teamId:n,moves:r,practicePlans:i})=>{const[s,o]=D.useState();D.useEffect(()=>{a(e.moveId,n).then(c=>o(c))},[e.moveId,n]);const a=async(c,h)=>await wr(Ls(Un(Ke,"practice_plan"),QO(Mi("teamId","==",h),Mi("moves","array-contains",c)))).then(f=>f.docs.length),u=r.find(c=>c.id===e.moveId)||{name:"",area:"",position:""};return g.jsxs(iy,{className:t,children:[g.jsx(un,{children:u.name}),g.jsx(un,{children:u.area}),g.jsx(un,{children:u.position}),g.jsx(un,{children:String(e.startDate)}),g.jsx(un,{children:String(e.endDate)}),g.jsxs(un,{children:[Math.round(e.practicePlanPercentage*100),"%"]}),g.jsxs(un,{children:[Math.round(Number(s)/i.length*100),"%"]})]})})`
  &:nth-of-type(odd) {
    background-color: hsla(255, 10%, 50%, 0.5);
    backdrop-filter: blur(3px);
  }
`,E4=H.div`
  min-width: 0;
  overflow: auto;
`,T4=H.thead`
  & > ${iy} {
    background-color: var(--blue900);
  }
`,I4=H(({className:t,team:e,setTeam:n,moves:r,practicePlans:i})=>{const[s,o]=D.useState(.5),a=D.useRef(),u=()=>{a.current&&a.current.showModal()},c=()=>{a.current&&a.current.close()},h=f=>{f.preventDefault();const m=new FormData(f.currentTarget);if(!m.get("endDate")&&m.get("startDate")&&!m.get("move")){alert("Please enter all fields");return}if(Number(new Date(m.get("endDate")))-Number(new Date(m.get("startDate")))<0){alert("Start date cannot be after end date");return}const I={moveId:m.get("move"),startDate:m.get("startDate"),endDate:m.get("endDate"),practicePlanPercentage:s};xi(rn(Ke,"teams",e.id),{goals:El(I)}),n(T=>({...T,goals:[...T.goals,I]})),c()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Goals"}),g.jsx(E4,{children:g.jsxs(_4,{children:[g.jsx(T4,{children:g.jsxs(iy,{children:[g.jsx(un,{children:"Name"}),g.jsx(un,{children:"Area"}),g.jsx(un,{children:"Position"}),g.jsx(un,{children:"Start"}),g.jsx(un,{children:"End"}),g.jsx(un,{children:"Goal Percentage"}),g.jsx(un,{children:"Current Percentage"})]})}),g.jsx("tbody",{children:e.goals.map(f=>g.jsx(w4,{goal:f,teamId:e.id,moves:r,practicePlans:i}))})]})}),g.jsx(ft,{text:"Add Goal",onClick:u}),g.jsx(ls,{passedRef:a,onClose:c,children:g.jsxs("form",{onSubmit:h,children:[g.jsx("h2",{children:"Add a Goal"}),g.jsxs("label",{htmlFor:"move",children:[g.jsx("span",{children:"Move:"}),g.jsx("select",{name:"move",id:"move",children:r.map(({id:f,name:m,area:I,position:T})=>g.jsxs("option",{value:f,children:[m," - ",I," - ",T]},f))})]}),g.jsxs("label",{htmlFor:"startDate",children:[g.jsx("span",{children:"Start Date:"}),g.jsx("input",{type:"date",name:"startDate",id:"startDate"})]}),g.jsxs("label",{htmlFor:"endDate",children:[g.jsx("span",{children:"End Date:"}),g.jsx("input",{type:"date",name:"endDate",id:"endDate"})]}),g.jsxs("label",{htmlFor:"practicePlanPercentage",children:[g.jsx("span",{children:"Percentage of Practices"}),g.jsx("output",{children:Math.round(s*100)}),g.jsx("input",{type:"range",max:"1",min:"0",step:".01",value:s,onChange:f=>o(Number(f.target.value))})]}),g.jsx(ft,{text:"Add Goal",type:"submit"})]})})]})})`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 16px;
`,S4=H.main`
  display: grid;
  gap: 64px;
  max-width: 90%;

  @media screen and (width > 550px) {
    max-width: 80%;
  }
`,A4=H.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
`,bu=H.hr`
  color: white;
`,C4=H(({className:t})=>{const[e,n]=D.useState(),[r,i]=D.useState([]),[s,o]=D.useState([]),a=D.useContext(Vs),{id:u=""}=Yg(),c=Hi();return D.useEffect(()=>{u&&(Yj(u).then(n),Xj(u).then(i),Jj(u).then(o))},[u]),D.useEffect(()=>{a&&e&&!e.userIds.includes(a.uid)&&c("/")},[c,e,a]),g.jsx("div",{className:t,children:e?g.jsxs(S4,{children:[g.jsxs(A4,{children:[g.jsxs("h1",{children:[e.name," (",e.state,")"]}),g.jsxs(l4,{children:[g.jsx(ec,{title:"Season",value:"Nov 2024 - Feb 2025"}),g.jsx(ec,{title:"Practice Plans",subtext:"practice plans in the current season",value:s.length}),g.jsx(ec,{title:"Moves",value:r.length})]})]}),g.jsx(bu,{}),g.jsx(I4,{team:e,setTeam:n,moves:r,practicePlans:s}),g.jsx(bu,{}),g.jsx(v4,{practicePlans:s,setPracticePlans:o}),g.jsx(bu,{}),g.jsx(t4,{team:e,teamId:u,setMoves:i,moves:r}),g.jsx(bu,{}),g.jsx(f4,{setTeam:n,team:e,teamId:u})]}):g.jsx(Jg,{children:g.jsx(Zg,{})})})})`
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

  & ${ls} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,R4=H.main`
  min-height: 100%;
  background: linear-gradient(var(--blue100), var(--blue900));
  color: white;

  & a {
    color: currentColor;
  }
`,P4=t=>wr(Ls(Un(Ke,"teams"),Mi("teamIds","array-contains",t))).then(e=>{e.docs.map(n=>({...n.data(),id:n.id}))});function x4(t){const e=D.useContext(Vs);return D.useEffect(()=>{e!=null&&e.uid&&P4(e.uid)},[e]),g.jsxs(R4,{children:[g.jsx("h1",{children:"Welcome to Home!"}),g.jsx(Xo,{to:"/teams",children:"Go To Teams"})]})}const k4=IV(xp(g.jsxs(or,{path:"/",element:g.jsx(HV,{}),children:[g.jsx(or,{path:"/",element:g.jsx(x4,{})}),g.jsx(or,{path:"teams/:id/practice_plans/create",element:g.jsx(tw,{})}),g.jsx(or,{path:"teams/:id/practice_plans/:practice_plan_id",element:g.jsx(Uj,{})}),g.jsx(or,{path:"/teams",element:g.jsx(Gj,{})}),g.jsx(or,{path:"/teams/:id",element:g.jsx(C4,{})}),g.jsx(or,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:g.jsx(tw,{})}),g.jsx(or,{path:"/sign_in",element:g.jsx(jV,{})}),g.jsx(or,{path:"/sign_up",element:g.jsx(UV,{})})]}))),b4=H(({className:t})=>g.jsx("div",{className:t,children:g.jsx($V,{children:g.jsx(yj,{children:g.jsxs(sM,{children:[g.jsx(bV,{router:k4}),g.jsx(ZV,{})]})})})}))`
  height: 100%;

  & > ${Dp} {
    position: fixed;
    bottom: 16px;
    right: 50%;
    transform: translateX(50%);
  }

  & > ${bS} {
    background: linear-gradient(var(--blue100), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${Dp} {
      right: 32px;
      transform: translateX(0%);
    }
  }
`,D4=_E(document.getElementById("root"));async function N4(){if(!["development","test"].includes("production"))return;const{worker:t}=await gA(()=>import("./browser-BxBLihda.js"),[]);return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}N4().then(()=>{D4.render(g.jsx(D.StrictMode,{children:g.jsx(b4,{})}))});
