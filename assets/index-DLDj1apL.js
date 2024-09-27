function Aw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Nx="modulepreload",Mx=function(t){return"/technique-map/"+t},ev={},Ox=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=Mx(a),a in ev)return;ev[a]=!0;const u=a.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Nx,u||(d.as="script",d.crossOrigin=""),d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Xp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cw={exports:{}},od={},Rw={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),Lx=Symbol.for("react.portal"),Vx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Fx=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),$x=Symbol.for("react.context"),zx=Symbol.for("react.forward_ref"),Bx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),qx=Symbol.for("react.lazy"),tv=Symbol.iterator;function Wx(t){return t===null||typeof t!="object"?null:(t=tv&&t[tv]||t["@@iterator"],typeof t=="function"?t:null)}var Pw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kw=Object.assign,bw={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Pw}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dw(){}Dw.prototype=Yo.prototype;function Jp(t,e,n){this.props=t,this.context=e,this.refs=bw,this.updater=n||Pw}var Zp=Jp.prototype=new Dw;Zp.constructor=Jp;kw(Zp,Yo.prototype);Zp.isPureReactComponent=!0;var nv=Array.isArray,Nw=Object.prototype.hasOwnProperty,em={current:null},Mw={key:!0,ref:!0,__self:!0,__source:!0};function Ow(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nw.call(e,r)&&!Mw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:em.current}}function Gx(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function Kx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rv=/\/+/g;function Ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kx(""+t.key):e.toString(36)}function zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case Lx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ih(o,0):r,nv(i)?(n="",t!=null&&(n=t.replace(rv,"$&/")+"/"),zu(i,e,n,"",function(c){return c})):i!=null&&(tm(i)&&(i=Gx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ih(s,a);o+=zu(s,e,n,u,i)}else if(u=Wx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ih(s,a++),o+=zu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yu(t,e,n){if(t==null)return t;var r=[],i=0;return zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Bu={transition:null},Yx={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:em};function Lw(){throw Error("act(...) is not supported in production builds of React.")}Re.Children={map:yu,forEach:function(t,e,n){yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yu(t,function(){e++}),e},toArray:function(t){return yu(t,function(e){return e})||[]},only:function(t){if(!tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Re.Component=Yo;Re.Fragment=Vx;Re.Profiler=Fx;Re.PureComponent=Jp;Re.StrictMode=jx;Re.Suspense=Bx;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Re.act=Lw;Re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=em.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Nw.call(e,u)&&!Mw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};Re.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ux,_context:t},t.Consumer=t};Re.createElement=Ow;Re.createFactory=function(t){var e=Ow.bind(null,t);return e.type=t,e};Re.createRef=function(){return{current:null}};Re.forwardRef=function(t){return{$$typeof:zx,render:t}};Re.isValidElement=tm;Re.lazy=function(t){return{$$typeof:qx,_payload:{_status:-1,_result:t},_init:Qx}};Re.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};Re.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};Re.unstable_act=Lw;Re.useCallback=function(t,e){return un.current.useCallback(t,e)};Re.useContext=function(t){return un.current.useContext(t)};Re.useDebugValue=function(){};Re.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Re.useEffect=function(t,e){return un.current.useEffect(t,e)};Re.useId=function(){return un.current.useId()};Re.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Re.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Re.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Re.useMemo=function(t,e){return un.current.useMemo(t,e)};Re.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Re.useRef=function(t){return un.current.useRef(t)};Re.useState=function(t){return un.current.useState(t)};Re.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Re.useTransition=function(){return un.current.useTransition()};Re.version="18.3.1";Rw.exports=Re;var N=Rw.exports;const Xo=Xp(N),Xx=Aw({__proto__:null,default:Xo},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=N,Zx=Symbol.for("react.element"),eA=Symbol.for("react.fragment"),tA=Object.prototype.hasOwnProperty,nA=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rA={key:!0,ref:!0,__self:!0,__source:!0};function Vw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tA.call(e,r)&&!rA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zx,type:t,key:s,ref:o,props:i,_owner:nA.current}}od.Fragment=eA;od.jsx=Vw;od.jsxs=Vw;Cw.exports=od;var g=Cw.exports,jw={exports:{}},Pn={},Fw={exports:{}},Uw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,oe){var ae=B.length;B.push(oe);e:for(;0<ae;){var Te=ae-1>>>1,q=B[Te];if(0<i(q,oe))B[Te]=oe,B[ae]=q,ae=Te;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var oe=B[0],ae=B.pop();if(ae!==oe){B[0]=ae;e:for(var Te=0,q=B.length,G=q>>>1;Te<G;){var J=2*(Te+1)-1,Z=B[J],L=J+1,he=B[L];if(0>i(Z,ae))L<q&&0>i(he,Z)?(B[Te]=he,B[L]=ae,Te=L):(B[Te]=Z,B[J]=ae,Te=J);else if(L<q&&0>i(he,ae))B[Te]=he,B[L]=ae,Te=L;else break e}}return oe}function i(B,oe){var ae=B.sortIndex-oe.sortIndex;return ae!==0?ae:B.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,T=!1,E=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var oe=n(c);oe!==null;){if(oe.callback===null)r(c);else if(oe.startTime<=B)r(c),oe.sortIndex=oe.expirationTime,e(u,oe);else break;oe=n(c)}}function b(B){if(C=!1,S(B),!E)if(n(u)!==null)E=!0,pt(j);else{var oe=n(c);oe!==null&&Ne(b,oe.startTime-B)}}function j(B,oe){E=!1,C&&(C=!1,_(w),w=-1),T=!0;var ae=p;try{for(S(oe),f=n(u);f!==null&&(!(f.expirationTime>oe)||B&&!k());){var Te=f.callback;if(typeof Te=="function"){f.callback=null,p=f.priorityLevel;var q=Te(f.expirationTime<=oe);oe=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(u)&&r(u),S(oe)}else r(u);f=n(u)}if(f!==null)var G=!0;else{var J=n(c);J!==null&&Ne(b,J.startTime-oe),G=!1}return G}finally{f=null,p=ae,T=!1}}var z=!1,v=null,w=-1,A=5,R=-1;function k(){return!(t.unstable_now()-R<A)}function D(){if(v!==null){var B=t.unstable_now();R=B;var oe=!0;try{oe=v(!0,B)}finally{oe?x():(z=!1,v=null)}}else z=!1}var x;if(typeof y=="function")x=function(){y(D)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Ie=te.port2;te.port1.onmessage=D,x=function(){Ie.postMessage(null)}}else x=function(){P(D,0)};function pt(B){v=B,z||(z=!0,x())}function Ne(B,oe){w=P(function(){B(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){E||T||(E=!0,pt(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var oe=3;break;default:oe=p}var ae=p;p=oe;try{return B()}finally{p=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,oe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=p;p=B;try{return oe()}finally{p=ae}},t.unstable_scheduleCallback=function(B,oe,ae){var Te=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,B){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ae+q,B={id:d++,callback:oe,priorityLevel:B,startTime:ae,expirationTime:q,sortIndex:-1},ae>Te?(B.sortIndex=ae,e(c,B),n(u)===null&&B===n(c)&&(C?(_(w),w=-1):C=!0,Ne(b,ae-Te))):(B.sortIndex=q,e(u,B),E||T||(E=!0,pt(j))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var oe=p;return function(){var ae=p;p=oe;try{return B.apply(this,arguments)}finally{p=ae}}}})(Uw);Fw.exports=Uw;var iA=Fw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sA=N,Rn=iA;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $w=new Set,ol={};function Ns(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(ol[t]=e,t=0;t<e.length;t++)$w.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vf=Object.prototype.hasOwnProperty,oA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iv={},sv={};function aA(t){return vf.call(sv,t)?!0:vf.call(iv,t)?!1:oA.test(t)?sv[t]=!0:(iv[t]=!0,!1)}function lA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uA(t,e,n,r){if(e===null||typeof e>"u"||lA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,rm);Bt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,rm);Bt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,rm);Bt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function im(t,e,n,r){var i=Bt.hasOwnProperty(e)?Bt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uA(e,n,i,r)&&(n=null),r||i===null?aA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zr=sA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vu=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),zw=Symbol.for("react.provider"),Bw=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),fi=Symbol.for("react.lazy"),Hw=Symbol.for("react.offscreen"),ov=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Sh;function Da(t){if(Sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sh=e&&e[1]||""}return`
`+Sh+t}var xh=!1;function Ah(t,e){if(!t||xh)return"";xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{xh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function cA(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Ah(t.type,!1),t;case 11:return t=Ah(t.type.render,!1),t;case 1:return t=Ah(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case ro:return"Portal";case _f:return"Profiler";case sm:return"StrictMode";case wf:return"Suspense";case Ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bw:return(t.displayName||"Context")+".Consumer";case zw:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case fi:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function dA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hA(t){var e=qw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=hA(t))}function Ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function If(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function av(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gw(t,e){e=e.checked,e!=null&&im(t,"checked",e,!1)}function Sf(t,e){Gw(t,e);var n=Vi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Na=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(Na(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Kw(t,e){var n=Vi(e.value),r=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wu,Yw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wu=wu||document.createElement("div"),wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fA=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){fA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function Xw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function Jw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pA=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(t,e){if(e){if(pA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bf=null,Eo=null,To=null;function dv(t){if(t=Ll(t)){if(typeof bf!="function")throw Error(K(280));var e=t.stateNode;e&&(e=dd(e),bf(t.stateNode,t.type,e))}}function Zw(t){Eo?To?To.push(t):To=[t]:Eo=t}function e1(){if(Eo){var t=Eo,e=To;if(To=Eo=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function t1(t,e){return t(e)}function n1(){}var Ch=!1;function r1(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return t1(t,e,n)}finally{Ch=!1,(Eo!==null||To!==null)&&(n1(),e1())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var r=dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var Df=!1;if(Hr)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){Df=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{Df=!1}function mA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ha=!1,fc=null,pc=!1,Nf=null,gA={onError:function(t){Ha=!0,fc=t}};function yA(t,e,n,r,i,s,o,a,u){Ha=!1,fc=null,mA.apply(gA,arguments)}function vA(t,e,n,r,i,s,o,a,u){if(yA.apply(this,arguments),Ha){if(Ha){var c=fc;Ha=!1,fc=null}else throw Error(K(198));pc||(pc=!0,Nf=c)}}function Ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hv(t){if(Ms(t)!==t)throw Error(K(188))}function _A(t){var e=t.alternate;if(!e){if(e=Ms(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hv(i),t;if(s===r)return hv(i),e;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function s1(t){return t=_A(t),t!==null?o1(t):null}function o1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o1(t);if(e!==null)return e;t=t.sibling}return null}var a1=Rn.unstable_scheduleCallback,fv=Rn.unstable_cancelCallback,wA=Rn.unstable_shouldYield,EA=Rn.unstable_requestPaint,vt=Rn.unstable_now,TA=Rn.unstable_getCurrentPriorityLevel,um=Rn.unstable_ImmediatePriority,l1=Rn.unstable_UserBlockingPriority,mc=Rn.unstable_NormalPriority,IA=Rn.unstable_LowPriority,u1=Rn.unstable_IdlePriority,ad=null,yr=null;function SA(t){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ad,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:CA,xA=Math.log,AA=Math.LN2;function CA(t){return t>>>=0,t===0?32:31-(xA(t)/AA|0)|0}var Eu=64,Tu=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ma(a):(s&=o,s!==0&&(r=Ma(s)))}else o=n&~i,o!==0?r=Ma(o):s!==0&&(r=Ma(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function RA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=RA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c1(){var t=Eu;return Eu<<=1,!(Eu&4194240)&&(Eu=64),t}function Rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function kA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ue=0;function d1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h1,dm,f1,p1,m1,Of=!1,Iu=[],Si=null,xi=null,Ai=null,ul=new Map,cl=new Map,mi=[],bA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pv(t,e){switch(t){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":Ai=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function Ea(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ll(e),e!==null&&dm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DA(t,e,n,r,i){switch(e){case"focusin":return Si=Ea(Si,t,e,n,r,i),!0;case"dragenter":return xi=Ea(xi,t,e,n,r,i),!0;case"mouseover":return Ai=Ea(Ai,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ul.set(s,Ea(ul.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cl.set(s,Ea(cl.get(s)||null,t,e,n,r,i)),!0}return!1}function g1(t){var e=os(t.target);if(e!==null){var n=Ms(e);if(n!==null){if(e=n.tag,e===13){if(e=i1(n),e!==null){t.blockedOn=e,m1(t.priority,function(){f1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=Ll(n),e!==null&&dm(e),t.blockedOn=n,!1;e.shift()}return!0}function mv(t,e,n){Hu(t)&&n.delete(e)}function NA(){Of=!1,Si!==null&&Hu(Si)&&(Si=null),xi!==null&&Hu(xi)&&(xi=null),Ai!==null&&Hu(Ai)&&(Ai=null),ul.forEach(mv),cl.forEach(mv)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,NA)))}function dl(t){function e(i){return Ta(i,t)}if(0<Iu.length){Ta(Iu[0],t);for(var n=1;n<Iu.length;n++){var r=Iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Si!==null&&Ta(Si,t),xi!==null&&Ta(xi,t),Ai!==null&&Ta(Ai,t),ul.forEach(e),cl.forEach(e),n=0;n<mi.length;n++)r=mi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mi.length&&(n=mi[0],n.blockedOn===null);)g1(n),n.blockedOn===null&&mi.shift()}var Io=Zr.ReactCurrentBatchConfig,yc=!0;function MA(t,e,n,r){var i=Ue,s=Io.transition;Io.transition=null;try{Ue=1,hm(t,e,n,r)}finally{Ue=i,Io.transition=s}}function OA(t,e,n,r){var i=Ue,s=Io.transition;Io.transition=null;try{Ue=4,hm(t,e,n,r)}finally{Ue=i,Io.transition=s}}function hm(t,e,n,r){if(yc){var i=Lf(t,e,n,r);if(i===null)jh(t,e,r,vc,n),pv(t,r);else if(DA(i,t,e,n,r))r.stopPropagation();else if(pv(t,r),e&4&&-1<bA.indexOf(t)){for(;i!==null;){var s=Ll(i);if(s!==null&&h1(s),s=Lf(t,e,n,r),s===null&&jh(t,e,r,vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jh(t,e,r,null,n)}}var vc=null;function Lf(t,e,n,r){if(vc=null,t=lm(r),t=os(t),t!==null)if(e=Ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function y1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TA()){case um:return 1;case l1:return 4;case mc:case IA:return 16;case u1:return 536870912;default:return 16}default:return 16}}var Ei=null,fm=null,qu=null;function v1(){if(qu)return qu;var t,e=fm,n=e.length,r,i="value"in Ei?Ei.value:Ei.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qu=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Su(){return!0}function gv(){return!1}function kn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Su:gv,this.isPropagationStopped=gv,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Su)},persist:function(){},isPersistent:Su}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=kn(Jo),Ol=ct({},Jo,{view:0,detail:0}),LA=kn(Ol),Ph,kh,Ia,ld=ct({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(Ph=t.screenX-Ia.screenX,kh=t.screenY-Ia.screenY):kh=Ph=0,Ia=t),Ph)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),yv=kn(ld),VA=ct({},ld,{dataTransfer:0}),jA=kn(VA),FA=ct({},Ol,{relatedTarget:0}),bh=kn(FA),UA=ct({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),$A=kn(UA),zA=ct({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BA=kn(zA),HA=ct({},Jo,{data:0}),vv=kn(HA),qA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GA[t])?!!e[t]:!1}function mm(){return KA}var QA=ct({},Ol,{key:function(t){if(t.key){var e=qA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YA=kn(QA),XA=ct({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_v=kn(XA),JA=ct({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),ZA=kn(JA),eC=ct({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tC=kn(eC),nC=ct({},ld,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rC=kn(nC),iC=[9,13,27,32],gm=Hr&&"CompositionEvent"in window,qa=null;Hr&&"documentMode"in document&&(qa=document.documentMode);var sC=Hr&&"TextEvent"in window&&!qa,_1=Hr&&(!gm||qa&&8<qa&&11>=qa),wv=" ",Ev=!1;function w1(t,e){switch(t){case"keyup":return iC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function oC(t,e){switch(t){case"compositionend":return E1(e);case"keypress":return e.which!==32?null:(Ev=!0,wv);case"textInput":return t=e.data,t===wv&&Ev?null:t;default:return null}}function aC(t,e){if(so)return t==="compositionend"||!gm&&w1(t,e)?(t=v1(),qu=fm=Ei=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _1&&e.locale!=="ko"?null:e.data;default:return null}}var lC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lC[t.type]:e==="textarea"}function T1(t,e,n,r){Zw(r),e=_c(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,hl=null;function uC(t){N1(t,0)}function ud(t){var e=lo(t);if(Ww(e))return t}function cC(t,e){if(t==="change")return e}var I1=!1;if(Hr){var Dh;if(Hr){var Nh="oninput"in document;if(!Nh){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),Nh=typeof Iv.oninput=="function"}Dh=Nh}else Dh=!1;I1=Dh&&(!document.documentMode||9<document.documentMode)}function Sv(){Wa&&(Wa.detachEvent("onpropertychange",S1),hl=Wa=null)}function S1(t){if(t.propertyName==="value"&&ud(hl)){var e=[];T1(e,hl,t,lm(t)),r1(uC,e)}}function dC(t,e,n){t==="focusin"?(Sv(),Wa=e,hl=n,Wa.attachEvent("onpropertychange",S1)):t==="focusout"&&Sv()}function hC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ud(hl)}function fC(t,e){if(t==="click")return ud(e)}function pC(t,e){if(t==="input"||t==="change")return ud(e)}function mC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var er=typeof Object.is=="function"?Object.is:mC;function fl(t,e){if(er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vf.call(e,i)||!er(t[i],e[i]))return!1}return!0}function xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Av(t,e){var n=xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xv(n)}}function x1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A1(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gC(t){var e=A1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x1(n.ownerDocument.documentElement,n)){if(r!==null&&ym(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Av(n,s);var o=Av(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yC=Hr&&"documentMode"in document&&11>=document.documentMode,oo=null,Vf=null,Ga=null,jf=!1;function Cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||oo==null||oo!==hc(r)||(r=oo,"selectionStart"in r&&ym(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ga&&fl(Ga,r)||(Ga=r,r=_c(Vf,"onSelect"),0<r.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oo)))}function xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:xu("Animation","AnimationEnd"),animationiteration:xu("Animation","AnimationIteration"),animationstart:xu("Animation","AnimationStart"),transitionend:xu("Transition","TransitionEnd")},Mh={},C1={};Hr&&(C1=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function cd(t){if(Mh[t])return Mh[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C1)return Mh[t]=e[n];return t}var R1=cd("animationend"),P1=cd("animationiteration"),k1=cd("animationstart"),b1=cd("transitionend"),D1=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(t,e){D1.set(t,e),Ns(e,[t])}for(var Oh=0;Oh<Rv.length;Oh++){var Lh=Rv[Oh],vC=Lh.toLowerCase(),_C=Lh[0].toUpperCase()+Lh.slice(1);zi(vC,"on"+_C)}zi(R1,"onAnimationEnd");zi(P1,"onAnimationIteration");zi(k1,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(b1,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vA(r,e,void 0,t),t.currentTarget=null}function N1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,c),s=u}}}if(pc)throw t=Nf,pc=!1,Nf=null,t}function Ze(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var r=t+"__bubble";n.has(r)||(M1(e,t,2,!1),n.add(r))}function Vh(t,e,n){var r=0;e&&(r|=4),M1(n,t,r,e)}var Au="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[Au]){t[Au]=!0,$w.forEach(function(n){n!=="selectionchange"&&(wC.has(n)||Vh(n,!1,t),Vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Au]||(e[Au]=!0,Vh("selectionchange",!1,e))}}function M1(t,e,n,r){switch(y1(e)){case 1:var i=MA;break;case 4:i=OA;break;default:i=hm}n=i.bind(null,e,n,t),i=void 0,!Df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}r1(function(){var c=s,d=lm(n),f=[];e:{var p=D1.get(t);if(p!==void 0){var T=pm,E=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":T=YA;break;case"focusin":E="focus",T=bh;break;case"focusout":E="blur",T=bh;break;case"beforeblur":case"afterblur":T=bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=jA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=ZA;break;case R1:case P1:case k1:T=$A;break;case b1:T=tC;break;case"scroll":T=LA;break;case"wheel":T=rC;break;case"copy":case"cut":case"paste":T=BA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=_v}var C=(e&4)!==0,P=!C&&t==="scroll",_=C?p!==null?p+"Capture":null:p;C=[];for(var y=c,S;y!==null;){S=y;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,_!==null&&(b=ll(y,_),b!=null&&C.push(ml(y,b,S)))),P)break;y=y.return}0<C.length&&(p=new T(p,E,null,n,d),f.push({event:p,listeners:C}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",p&&n!==kf&&(E=n.relatedTarget||n.fromElement)&&(os(E)||E[qr]))break e;if((T||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,T?(E=n.relatedTarget||n.toElement,T=c,E=E?os(E):null,E!==null&&(P=Ms(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(T=null,E=c),T!==E)){if(C=yv,b="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(C=_v,b="onPointerLeave",_="onPointerEnter",y="pointer"),P=T==null?p:lo(T),S=E==null?p:lo(E),p=new C(b,y+"leave",T,n,d),p.target=P,p.relatedTarget=S,b=null,os(d)===c&&(C=new C(_,y+"enter",E,n,d),C.target=S,C.relatedTarget=P,b=C),P=b,T&&E)t:{for(C=T,_=E,y=0,S=C;S;S=Js(S))y++;for(S=0,b=_;b;b=Js(b))S++;for(;0<y-S;)C=Js(C),y--;for(;0<S-y;)_=Js(_),S--;for(;y--;){if(C===_||_!==null&&C===_.alternate)break t;C=Js(C),_=Js(_)}C=null}else C=null;T!==null&&kv(f,p,T,C,!1),E!==null&&P!==null&&kv(f,P,E,C,!0)}}e:{if(p=c?lo(c):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var j=cC;else if(Tv(p))if(I1)j=pC;else{j=hC;var z=dC}else(T=p.nodeName)&&T.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=fC);if(j&&(j=j(t,c))){T1(f,j,n,d);break e}z&&z(t,p,c),t==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&xf(p,"number",p.value)}switch(z=c?lo(c):window,t){case"focusin":(Tv(z)||z.contentEditable==="true")&&(oo=z,Vf=c,Ga=null);break;case"focusout":Ga=Vf=oo=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Cv(f,n,d);break;case"selectionchange":if(yC)break;case"keydown":case"keyup":Cv(f,n,d)}var v;if(gm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else so?w1(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(_1&&n.locale!=="ko"&&(so||w!=="onCompositionStart"?w==="onCompositionEnd"&&so&&(v=v1()):(Ei=d,fm="value"in Ei?Ei.value:Ei.textContent,so=!0)),z=_c(c,w),0<z.length&&(w=new vv(w,t,null,n,d),f.push({event:w,listeners:z}),v?w.data=v:(v=E1(n),v!==null&&(w.data=v)))),(v=sC?oC(t,n):aC(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new vv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=v))}N1(f,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ll(t,n),s!=null&&r.unshift(ml(t,s,i)),s=ll(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ll(n,s),u!=null&&o.unshift(ml(n,u,a))):i||(u=ll(n,s),u!=null&&o.push(ml(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EC=/\r\n?/g,TC=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(EC,`
`).replace(TC,"")}function Cu(t,e,n){if(e=bv(e),bv(t)!==e&&n)throw Error(K(425))}function wc(){}var Ff=null,Uf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,IC=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,SC=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(t){return Dv.resolve(null).then(t).catch(xC)}:zf;function xC(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dl(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),pr="__reactFiber$"+Zo,gl="__reactProps$"+Zo,qr="__reactContainer$"+Zo,Bf="__reactEvents$"+Zo,AC="__reactListeners$"+Zo,CC="__reactHandles$"+Zo;function os(t){var e=t[pr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qr]||n[pr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[pr])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[pr]||t[qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function dd(t){return t[gl]||null}var Hf=[],uo=-1;function Bi(t){return{current:t}}function tt(t){0>uo||(t.current=Hf[uo],Hf[uo]=null,uo--)}function Qe(t,e){uo++,Hf[uo]=t.current,t.current=e}var ji={},tn=Bi(ji),gn=Bi(!1),gs=ji;function Do(t,e){var n=t.type.contextTypes;if(!n)return ji;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yn(t){return t=t.childContextTypes,t!=null}function Ec(){tt(gn),tt(tn)}function Mv(t,e,n){if(tn.current!==ji)throw Error(K(168));Qe(tn,e),Qe(gn,n)}function O1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(K(108,dA(t)||"Unknown",i));return ct({},n,r)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,gs=tn.current,Qe(tn,t),Qe(gn,gn.current),!0}function Ov(t,e,n){var r=t.stateNode;if(!r)throw Error(K(169));n?(t=O1(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,tt(gn),tt(tn),Qe(tn,t)):tt(gn),Qe(gn,n)}var Mr=null,hd=!1,Uh=!1;function L1(t){Mr===null?Mr=[t]:Mr.push(t)}function RC(t){hd=!0,L1(t)}function Hi(){if(!Uh&&Mr!==null){Uh=!0;var t=0,e=Ue;try{var n=Mr;for(Ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mr=null,hd=!1}catch(i){throw Mr!==null&&(Mr=Mr.slice(t+1)),a1(um,Hi),i}finally{Ue=e,Uh=!1}}return null}var co=[],ho=0,Ic=null,Sc=0,On=[],Ln=0,ys=null,Or=1,Lr="";function ns(t,e){co[ho++]=Sc,co[ho++]=Ic,Ic=t,Sc=e}function V1(t,e,n){On[Ln++]=Or,On[Ln++]=Lr,On[Ln++]=ys,ys=t;var r=Or;t=Lr;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Or=1<<32-Jn(e)+i|n<<i|r,Lr=s+t}else Or=1<<s|n<<i|r,Lr=t}function vm(t){t.return!==null&&(ns(t,1),V1(t,1,0))}function _m(t){for(;t===Ic;)Ic=co[--ho],co[ho]=null,Sc=co[--ho],co[ho]=null;for(;t===ys;)ys=On[--Ln],On[Ln]=null,Lr=On[--Ln],On[Ln]=null,Or=On[--Ln],On[Ln]=null}var An=null,Sn=null,it=!1,Xn=null;function j1(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Sn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Or,overflow:Lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Sn=null,!0):!1;default:return!1}}function qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(it){var e=Sn;if(e){var n=e;if(!Lv(t,e)){if(qf(t))throw Error(K(418));e=Ci(n.nextSibling);var r=An;e&&Lv(t,e)?j1(r,n):(t.flags=t.flags&-4097|2,it=!1,An=t)}}else{if(qf(t))throw Error(K(418));t.flags=t.flags&-4097|2,it=!1,An=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function Ru(t){if(t!==An)return!1;if(!it)return Vv(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=Sn)){if(qf(t))throw F1(),Error(K(418));for(;e;)j1(t,e),e=Ci(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=An?Ci(t.stateNode.nextSibling):null;return!0}function F1(){for(var t=Sn;t;)t=Ci(t.nextSibling)}function No(){Sn=An=null,it=!1}function wm(t){Xn===null?Xn=[t]:Xn.push(t)}var PC=Zr.ReactCurrentBatchConfig;function Sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jv(t){var e=t._init;return e(t._payload)}function U1(t){function e(_,y){if(t){var S=_.deletions;S===null?(_.deletions=[y],_.flags|=16):S.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=bi(_,y),_.index=0,_.sibling=null,_}function s(_,y,S){return _.index=S,t?(S=_.alternate,S!==null?(S=S.index,S<y?(_.flags|=2,y):S):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,S,b){return y===null||y.tag!==6?(y=Gh(S,_.mode,b),y.return=_,y):(y=i(y,S),y.return=_,y)}function u(_,y,S,b){var j=S.type;return j===io?d(_,y,S.props.children,b,S.key):y!==null&&(y.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fi&&jv(j)===y.type)?(b=i(y,S.props),b.ref=Sa(_,y,S),b.return=_,b):(b=Zu(S.type,S.key,S.props,null,_.mode,b),b.ref=Sa(_,y,S),b.return=_,b)}function c(_,y,S,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Kh(S,_.mode,b),y.return=_,y):(y=i(y,S.children||[]),y.return=_,y)}function d(_,y,S,b,j){return y===null||y.tag!==7?(y=ps(S,_.mode,b,j),y.return=_,y):(y=i(y,S),y.return=_,y)}function f(_,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Gh(""+y,_.mode,S),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vu:return S=Zu(y.type,y.key,y.props,null,_.mode,S),S.ref=Sa(_,null,y),S.return=_,S;case ro:return y=Kh(y,_.mode,S),y.return=_,y;case fi:var b=y._init;return f(_,b(y._payload),S)}if(Na(y)||_a(y))return y=ps(y,_.mode,S,null),y.return=_,y;Pu(_,y)}return null}function p(_,y,S,b){var j=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(_,y,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vu:return S.key===j?u(_,y,S,b):null;case ro:return S.key===j?c(_,y,S,b):null;case fi:return j=S._init,p(_,y,j(S._payload),b)}if(Na(S)||_a(S))return j!==null?null:d(_,y,S,b,null);Pu(_,S)}return null}function T(_,y,S,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(S)||null,a(y,_,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vu:return _=_.get(b.key===null?S:b.key)||null,u(y,_,b,j);case ro:return _=_.get(b.key===null?S:b.key)||null,c(y,_,b,j);case fi:var z=b._init;return T(_,y,S,z(b._payload),j)}if(Na(b)||_a(b))return _=_.get(S)||null,d(y,_,b,j,null);Pu(y,b)}return null}function E(_,y,S,b){for(var j=null,z=null,v=y,w=y=0,A=null;v!==null&&w<S.length;w++){v.index>w?(A=v,v=null):A=v.sibling;var R=p(_,v,S[w],b);if(R===null){v===null&&(v=A);break}t&&v&&R.alternate===null&&e(_,v),y=s(R,y,w),z===null?j=R:z.sibling=R,z=R,v=A}if(w===S.length)return n(_,v),it&&ns(_,w),j;if(v===null){for(;w<S.length;w++)v=f(_,S[w],b),v!==null&&(y=s(v,y,w),z===null?j=v:z.sibling=v,z=v);return it&&ns(_,w),j}for(v=r(_,v);w<S.length;w++)A=T(v,_,w,S[w],b),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?w:A.key),y=s(A,y,w),z===null?j=A:z.sibling=A,z=A);return t&&v.forEach(function(k){return e(_,k)}),it&&ns(_,w),j}function C(_,y,S,b){var j=_a(S);if(typeof j!="function")throw Error(K(150));if(S=j.call(S),S==null)throw Error(K(151));for(var z=j=null,v=y,w=y=0,A=null,R=S.next();v!==null&&!R.done;w++,R=S.next()){v.index>w?(A=v,v=null):A=v.sibling;var k=p(_,v,R.value,b);if(k===null){v===null&&(v=A);break}t&&v&&k.alternate===null&&e(_,v),y=s(k,y,w),z===null?j=k:z.sibling=k,z=k,v=A}if(R.done)return n(_,v),it&&ns(_,w),j;if(v===null){for(;!R.done;w++,R=S.next())R=f(_,R.value,b),R!==null&&(y=s(R,y,w),z===null?j=R:z.sibling=R,z=R);return it&&ns(_,w),j}for(v=r(_,v);!R.done;w++,R=S.next())R=T(v,_,w,R.value,b),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?w:R.key),y=s(R,y,w),z===null?j=R:z.sibling=R,z=R);return t&&v.forEach(function(D){return e(_,D)}),it&&ns(_,w),j}function P(_,y,S,b){if(typeof S=="object"&&S!==null&&S.type===io&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case vu:e:{for(var j=S.key,z=y;z!==null;){if(z.key===j){if(j=S.type,j===io){if(z.tag===7){n(_,z.sibling),y=i(z,S.props.children),y.return=_,_=y;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fi&&jv(j)===z.type){n(_,z.sibling),y=i(z,S.props),y.ref=Sa(_,z,S),y.return=_,_=y;break e}n(_,z);break}else e(_,z);z=z.sibling}S.type===io?(y=ps(S.props.children,_.mode,b,S.key),y.return=_,_=y):(b=Zu(S.type,S.key,S.props,null,_.mode,b),b.ref=Sa(_,y,S),b.return=_,_=b)}return o(_);case ro:e:{for(z=S.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(_,y.sibling),y=i(y,S.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Kh(S,_.mode,b),y.return=_,_=y}return o(_);case fi:return z=S._init,P(_,y,z(S._payload),b)}if(Na(S))return E(_,y,S,b);if(_a(S))return C(_,y,S,b);Pu(_,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,S),y.return=_,_=y):(n(_,y),y=Gh(S,_.mode,b),y.return=_,_=y),o(_)):n(_,y)}return P}var Mo=U1(!0),$1=U1(!1),xc=Bi(null),Ac=null,fo=null,Em=null;function Tm(){Em=fo=Ac=null}function Im(t){var e=xc.current;tt(xc),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){Ac=t,Em=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Em!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(Ac===null)throw Error(K(308));fo=t,Ac.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var as=null;function Sm(t){as===null?as=[t]:as.push(t)}function z1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wr(t,r)}function Wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pi=!1;function xm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wr(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wr(t,n)}function Gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function Fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,r){var i=t.updateQueue;pi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,T=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,C=a;switch(p=e,T=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){f=E.call(T,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,p=typeof E=="function"?E.call(T,f,p):E,p==null)break e;f=ct({},f,p);break e;case 2:pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else T={eventTime:T,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=T,u=f):d=d.next=T,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=f}}function Uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Vl={},vr=Bi(Vl),yl=Bi(Vl),vl=Bi(Vl);function ls(t){if(t===Vl)throw Error(K(174));return t}function Am(t,e){switch(Qe(vl,e),Qe(yl,t),Qe(vr,Vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}tt(vr),Qe(vr,e)}function Oo(){tt(vr),tt(yl),tt(vl)}function H1(t){ls(vl.current);var e=ls(vr.current),n=Cf(e,t.type);e!==n&&(Qe(yl,t),Qe(vr,n))}function Cm(t){yl.current===t&&(tt(vr),tt(yl))}var lt=Bi(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $h=[];function Rm(){for(var t=0;t<$h.length;t++)$h[t]._workInProgressVersionPrimary=null;$h.length=0}var Ku=Zr.ReactCurrentDispatcher,zh=Zr.ReactCurrentBatchConfig,vs=0,ut=null,At=null,kt=null,Pc=!1,Ka=!1,_l=0,kC=0;function Kt(){throw Error(K(321))}function Pm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!er(t[n],e[n]))return!1;return!0}function km(t,e,n,r,i,s){if(vs=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?MC:OC,t=n(r,i),Ka){s=0;do{if(Ka=!1,_l=0,25<=s)throw Error(K(301));s+=1,kt=At=null,e.updateQueue=null,Ku.current=LC,t=n(r,i)}while(Ka)}if(Ku.current=kc,e=At!==null&&At.next!==null,vs=0,kt=At=ut=null,Pc=!1,e)throw Error(K(300));return t}function bm(){var t=_l!==0;return _l=0,t}function hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?ut.memoizedState=kt=t:kt=kt.next=t,kt}function Bn(){if(At===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=kt===null?ut.memoizedState:kt.next;if(e!==null)kt=e,At=t;else{if(t===null)throw Error(K(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},kt===null?ut.memoizedState=kt=t:kt=kt.next=t}return kt}function wl(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=Bn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=At,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((vs&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,ut.lanes|=d,_s|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,er(r,e.memoizedState)||(mn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ut.lanes|=s,_s|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hh(t){var e=Bn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);er(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q1(){}function W1(t,e){var n=ut,r=Bn(),i=e(),s=!er(r.memoizedState,i);if(s&&(r.memoizedState=i,mn=!0),r=r.queue,Dm(Q1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,El(9,K1.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(K(349));vs&30||G1(n,e,i)}return i}function G1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K1(t,e,n,r){e.value=n,e.getSnapshot=r,Y1(e)&&X1(t)}function Q1(t,e,n){return n(function(){Y1(e)&&X1(t)})}function Y1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!er(t,n)}catch{return!0}}function X1(t){var e=Wr(t,1);e!==null&&Zn(e,t,1,-1)}function $v(t){var e=hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=NC.bind(null,ut,t),[e.memoizedState,t]}function El(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J1(){return Bn().memoizedState}function Qu(t,e,n,r){var i=hr();ut.flags|=t,i.memoizedState=El(1|e,n,void 0,r===void 0?null:r)}function fd(t,e,n,r){var i=Bn();r=r===void 0?null:r;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,r!==null&&Pm(r,o.deps)){i.memoizedState=El(e,n,s,r);return}}ut.flags|=t,i.memoizedState=El(1|e,n,s,r)}function zv(t,e){return Qu(8390656,8,t,e)}function Dm(t,e){return fd(2048,8,t,e)}function Z1(t,e){return fd(4,2,t,e)}function eE(t,e){return fd(4,4,t,e)}function tE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nE(t,e,n){return n=n!=null?n.concat([t]):null,fd(4,4,tE.bind(null,e,t),n)}function Nm(){}function rE(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iE(t,e){var n=Bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sE(t,e,n){return vs&21?(er(n,e)||(n=c1(),ut.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function bC(t,e){var n=Ue;Ue=n!==0&&4>n?n:4,t(!0);var r=zh.transition;zh.transition={};try{t(!1),e()}finally{Ue=n,zh.transition=r}}function oE(){return Bn().memoizedState}function DC(t,e,n){var r=ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aE(t))lE(e,n);else if(n=z1(t,e,n,r),n!==null){var i=an();Zn(n,t,r,i),uE(n,e,r)}}function NC(t,e,n){var r=ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aE(t))lE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,er(a,o)){var u=e.interleaved;u===null?(i.next=i,Sm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=z1(t,e,i,r),n!==null&&(i=an(),Zn(n,t,r,i),uE(n,e,r))}}function aE(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function lE(t,e){Ka=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var kc={readContext:zn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},MC={readContext:zn,useCallback:function(t,e){return hr().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4194308,4,tE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qu(4,2,t,e)},useMemo:function(t,e){var n=hr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DC.bind(null,ut,t),[r.memoizedState,t]},useRef:function(t){var e=hr();return t={current:t},e.memoizedState=t},useState:$v,useDebugValue:Nm,useDeferredValue:function(t){return hr().memoizedState=t},useTransition:function(){var t=$v(!1),e=t[0];return t=bC.bind(null,t[1]),hr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ut,i=hr();if(it){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),Dt===null)throw Error(K(349));vs&30||G1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(Q1.bind(null,r,s,t),[t]),r.flags|=2048,El(9,K1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hr(),e=Dt.identifierPrefix;if(it){var n=Lr,r=Or;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OC={readContext:zn,useCallback:rE,useContext:zn,useEffect:Dm,useImperativeHandle:nE,useInsertionEffect:Z1,useLayoutEffect:eE,useMemo:iE,useReducer:Bh,useRef:J1,useState:function(){return Bh(wl)},useDebugValue:Nm,useDeferredValue:function(t){var e=Bn();return sE(e,At.memoizedState,t)},useTransition:function(){var t=Bh(wl)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:q1,useSyncExternalStore:W1,useId:oE,unstable_isNewReconciler:!1},LC={readContext:zn,useCallback:rE,useContext:zn,useEffect:Dm,useImperativeHandle:nE,useInsertionEffect:Z1,useLayoutEffect:eE,useMemo:iE,useReducer:Hh,useRef:J1,useState:function(){return Hh(wl)},useDebugValue:Nm,useDeferredValue:function(t){var e=Bn();return At===null?e.memoizedState=t:sE(e,At.memoizedState,t)},useTransition:function(){var t=Hh(wl)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:q1,useSyncExternalStore:W1,useId:oE,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pd={isMounted:function(t){return(t=t._reactInternals)?Ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=an(),i=ki(t),s=Ur(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Zn(e,t,i,r),Gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=an(),i=ki(t),s=Ur(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Zn(e,t,i,r),Gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),r=ki(t),i=Ur(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ri(t,i,r),e!==null&&(Zn(e,t,r,n),Gu(e,t,r))}};function Bv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fl(n,r)||!fl(i,s):!0}function cE(t,e,n){var r=!1,i=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(i=yn(e)?gs:tn.current,r=e.contextTypes,s=(r=r!=null)?Do(t,i):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pd.enqueueReplaceState(e,e.state,null)}function Qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},xm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zn(s):(s=yn(e)?gs:tn.current,i.context=Do(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),Cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e){try{var n="",r=e;do n+=cA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VC=typeof WeakMap=="function"?WeakMap:Map;function dE(t,e,n){n=Ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dc||(Dc=!0,op=r),Yf(t,e)},n}function hE(t,e,n){n=Ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yf(t,e),typeof r!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XC.bind(null,t,e,n),e.then(t,t))}function Wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ur(-1,1),e.tag=2,Ri(n,e,1))),n.lanes|=1),t)}var jC=Zr.ReactCurrentOwner,mn=!1;function sn(t,e,n,r){e.child=t===null?$1(e,null,n,r):Mo(e,t.child,n,r)}function Kv(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=km(t,e,n,r,s,i),n=bm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gr(t,e,i)):(it&&n&&vm(e),e.flags|=1,sn(t,e,r,i),e.child)}function Qv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!$m(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fE(t,e,s,r,i)):(t=Zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(o,r)&&t.ref===e.ref)return Gr(t,e,i)}return e.flags|=1,t=bi(s,r),t.ref=e.ref,t.return=e,e.child=t}function fE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fl(s,r)&&t.ref===e.ref)if(mn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Gr(t,e,i)}return Xf(t,e,n,r,i)}function pE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(mo,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(mo,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Qe(mo,In),In|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Qe(mo,In),In|=r;return sn(t,e,i,n),e.child}function mE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,r,i){var s=yn(n)?gs:tn.current;return s=Do(e,s),So(e,i),n=km(t,e,n,r,s,i),r=bm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gr(t,e,i)):(it&&r&&vm(e),e.flags|=1,sn(t,e,n,i),e.child)}function Yv(t,e,n,r,i){if(yn(n)){var s=!0;Tc(e)}else s=!1;if(So(e,i),e.stateNode===null)Yu(t,e),cE(e,n,r),Qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=yn(n)?gs:tn.current,c=Do(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Hv(e,o,r,c),pi=!1;var p=e.memoizedState;o.state=p,Cc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||gn.current||pi?(typeof d=="function"&&(Kf(e,n,d,r),u=e.memoizedState),(a=pi||Bv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zn(u):(u=yn(n)?gs:tn.current,u=Do(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Hv(e,o,r,u),pi=!1,p=e.memoizedState,o.state=p,Cc(e,r,o,i);var E=e.memoizedState;a!==f||p!==E||gn.current||pi?(typeof T=="function"&&(Kf(e,n,T,r),E=e.memoizedState),(c=pi||Bv(e,n,c,r,p,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){mE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ov(e,n,!1),Gr(t,e,s);r=e.stateNode,jC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mo(e,t.child,null,s),e.child=Mo(e,null,a,s)):sn(t,e,a,s),e.memoizedState=r.state,i&&Ov(e,n,!0),e.child}function gE(t){var e=t.stateNode;e.pendingContext?Mv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mv(t,e.context,!1),Am(t,e.containerInfo)}function Xv(t,e,n,r,i){return No(),wm(i),e.flags|=256,sn(t,e,n,r),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function yE(t,e,n){var r=e.pendingProps,i=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qe(lt,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,r,0,null),t=ps(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ep(n),e.memoizedState=Zf,t):Mm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=bi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bi(a,s):(s=ps(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zf,r}return s=t.child,t=s.sibling,r=bi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mm(t,e){return e=yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ku(t,e,n,r){return r!==null&&wm(r),Mo(e,t.child,null,n),t=Mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qh(Error(K(422))),ku(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yd({mode:"visible",children:r.children},i,0,null),s=ps(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mo(e,t.child,null,o),e.child.memoizedState=ep(o),e.memoizedState=Zf,s);if(!(e.mode&1))return ku(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=qh(s,r,void 0),ku(t,e,o,r)}if(a=(o&t.childLanes)!==0,mn||a){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wr(t,i),Zn(r,t,i,-1))}return Um(),r=qh(Error(K(421))),ku(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=JC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Sn=Ci(i.nextSibling),An=e,it=!0,Xn=null,t!==null&&(On[Ln++]=Or,On[Ln++]=Lr,On[Ln++]=ys,Or=t.id,Lr=t.overflow,ys=e),e=Mm(e,r.children),e.flags|=4096,e)}function Jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(sn(t,e,r.children,n),r=lt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jv(t,n,e);else if(t.tag===19)Jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Qe(lt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wh(e,!0,n,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UC(t,e,n){switch(e.tag){case 3:gE(e),No();break;case 5:H1(e);break;case 1:yn(e.type)&&Tc(e);break;case 4:Am(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Qe(xc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Qe(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?yE(t,e,n):(Qe(lt,lt.current&1),t=Gr(t,e,n),t!==null?t.sibling:null);Qe(lt,lt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(lt,lt.current),r)break;return null;case 22:case 23:return e.lanes=0,pE(t,e,n)}return Gr(t,e,n)}var _E,tp,wE,EE;_E=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};wE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ls(vr.current);var s=null;switch(n){case"input":i=If(t,i),r=If(t,r),s=[];break;case"select":i=ct({},i,{value:void 0}),r=ct({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wc)}Rf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ol.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ol.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ze("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};EE=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $C(t,e,n){var r=e.pendingProps;switch(_m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return yn(e.type)&&Ec(),Qt(e),null;case 3:return r=e.stateNode,Oo(),tt(gn),tt(tn),Rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(up(Xn),Xn=null))),tp(t,e),Qt(e),null;case 5:Cm(e);var i=ls(vl.current);if(n=e.type,t!==null&&e.stateNode!=null)wE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(K(166));return Qt(e),null}if(t=ls(vr.current),Ru(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pr]=e,r[gl]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":av(r,s),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",r);break;case"textarea":uv(r,s),Ze("invalid",r)}Rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",""+a]):ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",r)}switch(n){case"input":_u(r),lv(r,s,!0);break;case"textarea":_u(r),cv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pr]=e,t[gl]=r,_E(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pf(n,r),n){case"dialog":Ze("cancel",t),Ze("close",t),i=r;break;case"iframe":case"object":case"embed":Ze("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],t);i=r;break;case"source":Ze("error",t),i=r;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),i=r;break;case"details":Ze("toggle",t),i=r;break;case"input":av(t,r),i=If(t,r),Ze("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ct({},r,{value:void 0}),Ze("invalid",t);break;case"textarea":uv(t,r),i=Af(t,r),Ze("invalid",t);break;default:i=r}Rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Jw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&al(t,u):typeof u=="number"&&al(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ol.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ze("scroll",t):u!=null&&im(t,s,u,o))}switch(n){case"input":_u(t),lv(t,r,!1);break;case"textarea":_u(t),cv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wo(t,!!r.multiple,s,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)EE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(K(166));if(n=ls(vl.current),ls(vr.current),Ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[pr]=e,(s=r.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:Cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pr]=e,e.stateNode=r}return Qt(e),null;case 13:if(tt(lt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&Sn!==null&&e.mode&1&&!(e.flags&128))F1(),No(),e.flags|=98560,s=!1;else if(s=Ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(K(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[pr]=e}else No(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Xn!==null&&(up(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Ct===0&&(Ct=3):Um())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Oo(),tp(t,e),t===null&&pl(e.stateNode.containerInfo),Qt(e),null;case 10:return Im(e.type._context),Qt(e),null;case 17:return yn(e.type)&&Ec(),Qt(e),null;case 19:if(tt(lt),s=e.memoizedState,s===null)return Qt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xa(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,xa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Vo&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return Qt(e),null}else 2*vt()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=lt.current,Qe(lt,r?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?In&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function zC(t,e){switch(_m(e),e.tag){case 1:return yn(e.type)&&Ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oo(),tt(gn),tt(tn),Rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cm(e),null;case 13:if(tt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));No()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(lt),null;case 4:return Oo(),null;case 10:return Im(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var bu=!1,Zt=!1,BC=typeof WeakSet=="function"?WeakSet:Set,re=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){ft(t,e,r)}}var Zv=!1;function HC(t,e){if(Ff=yc,t=A1(),ym(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)p=f,f=T;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(T=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},yc=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){e=re;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,P=E.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?C:Kn(e.type,C),P);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(b){ft(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}return E=Zv,Zv=!1,E}function Qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&np(e,n,s)}i=i.next}while(i!==r)}}function md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TE(t){var e=t.alternate;e!==null&&(t.alternate=null,TE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pr],delete e[gl],delete e[Bf],delete e[AC],delete e[CC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function IE(t){return t.tag===5||t.tag===3||t.tag===4}function e0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||IE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}var jt=null,Qn=!1;function ci(t,e,n){for(n=n.child;n!==null;)SE(t,e,n),n=n.sibling}function SE(t,e,n){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ad,n)}catch{}switch(n.tag){case 5:Zt||po(n,e);case 6:var r=jt,i=Qn;jt=null,ci(t,e,n),jt=r,Qn=i,jt!==null&&(Qn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Qn?(t=jt,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),dl(t)):Fh(jt,n.stateNode));break;case 4:r=jt,i=Qn,jt=n.stateNode.containerInfo,Qn=!0,ci(t,e,n),jt=r,Qn=i;break;case 0:case 11:case 14:case 15:if(!Zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&np(n,e,o),i=i.next}while(i!==r)}ci(t,e,n);break;case 1:if(!Zt&&(po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ft(n,e,a)}ci(t,e,n);break;case 21:ci(t,e,n);break;case 22:n.mode&1?(Zt=(r=Zt)||n.memoizedState!==null,ci(t,e,n),Zt=r):ci(t,e,n);break;default:ci(t,e,n)}}function t0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BC),e.forEach(function(r){var i=ZC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Qn=!1;break e;case 3:jt=a.stateNode.containerInfo,Qn=!0;break e;case 4:jt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(jt===null)throw Error(K(160));SE(s,o,i),jt=null,Qn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ft(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xE(e,t),e=e.sibling}function xE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ur(t),r&4){try{Qa(3,t,t.return),md(3,t)}catch(C){ft(t,t.return,C)}try{Qa(5,t,t.return)}catch(C){ft(t,t.return,C)}}break;case 1:Gn(e,t),ur(t),r&512&&n!==null&&po(n,n.return);break;case 5:if(Gn(e,t),ur(t),r&512&&n!==null&&po(n,n.return),t.flags&32){var i=t.stateNode;try{al(i,"")}catch(C){ft(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gw(i,s),Pf(a,o);var c=Pf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Jw(i,f):d==="dangerouslySetInnerHTML"?Yw(i,f):d==="children"?al(i,f):im(i,d,f,c)}switch(a){case"input":Sf(i,s);break;case"textarea":Kw(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?wo(i,!!s.multiple,T,!1):p!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[gl]=s}catch(C){ft(t,t.return,C)}}break;case 6:if(Gn(e,t),ur(t),r&4){if(t.stateNode===null)throw Error(K(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){ft(t,t.return,C)}}break;case 3:if(Gn(e,t),ur(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(e.containerInfo)}catch(C){ft(t,t.return,C)}break;case 4:Gn(e,t),ur(t);break;case 13:Gn(e,t),ur(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vm=vt())),r&4&&t0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||d,Gn(e,t),Zt=c):Gn(e,t),ur(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(re=t,d=t.child;d!==null;){for(f=re=d;re!==null;){switch(p=re,T=p.child,p.tag){case 0:case 11:case 14:case 15:Qa(4,p,p.return);break;case 1:po(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(C){ft(r,n,C)}}break;case 5:po(p,p.return);break;case 22:if(p.memoizedState!==null){r0(f);continue}}T!==null?(T.return=p,re=T):r0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Xw("display",o))}catch(C){ft(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){ft(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),ur(t),r&4&&t0(t);break;case 21:break;default:Gn(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(IE(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(al(i,""),r.flags&=-33);var s=e0(t);sp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=e0(t);ip(t,a,o);break;default:throw Error(K(161))}}catch(u){ft(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qC(t,e,n){re=t,AE(t)}function AE(t,e,n){for(var r=(t.mode&1)!==0;re!==null;){var i=re,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Zt;a=bu;var c=Zt;if(bu=o,(Zt=u)&&!c)for(re=i;re!==null;)o=re,u=o.child,o.tag===22&&o.memoizedState!==null?i0(i):u!==null?(u.return=o,re=u):i0(i);for(;s!==null;)re=s,AE(s),s=s.sibling;re=i,bu=a,Zt=c}n0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,re=s):n0(t)}}function n0(t){for(;re!==null;){var e=re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Zt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&dl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Zt||e.flags&512&&rp(e)}catch(p){ft(e,e.return,p)}}if(e===t){re=null;break}if(n=e.sibling,n!==null){n.return=e.return,re=n;break}re=e.return}}function r0(t){for(;re!==null;){var e=re;if(e===t){re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,re=n;break}re=e.return}}function i0(t){for(;re!==null;){var e=re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{md(4,e)}catch(u){ft(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ft(e,i,u)}}var s=e.return;try{rp(e)}catch(u){ft(e,s,u)}break;case 5:var o=e.return;try{rp(e)}catch(u){ft(e,o,u)}}}catch(u){ft(e,e.return,u)}if(e===t){re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,re=a;break}re=e.return}}var WC=Math.ceil,bc=Zr.ReactCurrentDispatcher,Om=Zr.ReactCurrentOwner,Fn=Zr.ReactCurrentBatchConfig,Me=0,Dt=null,It=null,$t=0,In=0,mo=Bi(0),Ct=0,Tl=null,_s=0,gd=0,Lm=0,Ya=null,fn=null,Vm=0,Vo=1/0,Nr=null,Dc=!1,op=null,Pi=null,Du=!1,Ti=null,Nc=0,Xa=0,ap=null,Xu=-1,Ju=0;function an(){return Me&6?vt():Xu!==-1?Xu:Xu=vt()}function ki(t){return t.mode&1?Me&2&&$t!==0?$t&-$t:PC.transition!==null?(Ju===0&&(Ju=c1()),Ju):(t=Ue,t!==0||(t=window.event,t=t===void 0?16:y1(t.type)),t):1}function Zn(t,e,n,r){if(50<Xa)throw Xa=0,ap=null,Error(K(185));Ml(t,n,r),(!(Me&2)||t!==Dt)&&(t===Dt&&(!(Me&2)&&(gd|=n),Ct===4&&gi(t,$t)),vn(t,r),n===1&&Me===0&&!(e.mode&1)&&(Vo=vt()+500,hd&&Hi()))}function vn(t,e){var n=t.callbackNode;PA(t,e);var r=gc(t,t===Dt?$t:0);if(r===0)n!==null&&fv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fv(n),e===1)t.tag===0?RC(s0.bind(null,t)):L1(s0.bind(null,t)),SC(function(){!(Me&6)&&Hi()}),n=null;else{switch(d1(r)){case 1:n=um;break;case 4:n=l1;break;case 16:n=mc;break;case 536870912:n=u1;break;default:n=mc}n=ME(n,CE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function CE(t,e){if(Xu=-1,Ju=0,Me&6)throw Error(K(327));var n=t.callbackNode;if(xo()&&t.callbackNode!==n)return null;var r=gc(t,t===Dt?$t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mc(t,r);else{e=r;var i=Me;Me|=2;var s=PE();(Dt!==t||$t!==e)&&(Nr=null,Vo=vt()+500,fs(t,e));do try{QC();break}catch(a){RE(t,a)}while(!0);Tm(),bc.current=s,Me=i,It!==null?e=0:(Dt=null,$t=0,e=Ct)}if(e!==0){if(e===2&&(i=Mf(t),i!==0&&(r=i,e=lp(t,i))),e===1)throw n=Tl,fs(t,0),gi(t,r),vn(t,vt()),n;if(e===6)gi(t,r);else{if(i=t.current.alternate,!(r&30)&&!GC(i)&&(e=Mc(t,r),e===2&&(s=Mf(t),s!==0&&(r=s,e=lp(t,s))),e===1))throw n=Tl,fs(t,0),gi(t,r),vn(t,vt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(K(345));case 2:rs(t,fn,Nr);break;case 3:if(gi(t,r),(r&130023424)===r&&(e=Vm+500-vt(),10<e)){if(gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){an(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(rs.bind(null,t,fn,Nr),e);break}rs(t,fn,Nr);break;case 4:if(gi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=vt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WC(r/1960))-r,10<r){t.timeoutHandle=zf(rs.bind(null,t,fn,Nr),r);break}rs(t,fn,Nr);break;case 5:rs(t,fn,Nr);break;default:throw Error(K(329))}}}return vn(t,vt()),t.callbackNode===n?CE.bind(null,t):null}function lp(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=fn,fn=n,e!==null&&up(e)),t}function up(t){fn===null?fn=t:fn.push.apply(fn,t)}function GC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!er(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gi(t,e){for(e&=~Lm,e&=~gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function s0(t){if(Me&6)throw Error(K(327));xo();var e=gc(t,0);if(!(e&1))return vn(t,vt()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var r=Mf(t);r!==0&&(e=r,n=lp(t,r))}if(n===1)throw n=Tl,fs(t,0),gi(t,e),vn(t,vt()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,fn,Nr),vn(t,vt()),null}function jm(t,e){var n=Me;Me|=1;try{return t(e)}finally{Me=n,Me===0&&(Vo=vt()+500,hd&&Hi())}}function ws(t){Ti!==null&&Ti.tag===0&&!(Me&6)&&xo();var e=Me;Me|=1;var n=Fn.transition,r=Ue;try{if(Fn.transition=null,Ue=1,t)return t()}finally{Ue=r,Fn.transition=n,Me=e,!(Me&6)&&Hi()}}function Fm(){In=mo.current,tt(mo)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IC(n)),It!==null)for(n=It.return;n!==null;){var r=n;switch(_m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ec();break;case 3:Oo(),tt(gn),tt(tn),Rm();break;case 5:Cm(r);break;case 4:Oo();break;case 13:tt(lt);break;case 19:tt(lt);break;case 10:Im(r.type._context);break;case 22:case 23:Fm()}n=n.return}if(Dt=t,It=t=bi(t.current,null),$t=In=e,Ct=0,Tl=null,Lm=gd=_s=0,fn=Ya=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}as=null}return t}function RE(t,e){do{var n=It;try{if(Tm(),Ku.current=kc,Pc){for(var r=ut.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pc=!1}if(vs=0,kt=At=ut=null,Ka=!1,_l=0,Om.current=null,n===null||n.return===null){Ct=1,Tl=e,It=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=$t,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Wv(o);if(T!==null){T.flags&=-257,Gv(T,o,a,s,e),T.mode&1&&qv(s,c,e),e=T,u=c;var E=e.updateQueue;if(E===null){var C=new Set;C.add(u),e.updateQueue=C}else E.add(u);break e}else{if(!(e&1)){qv(s,c,e),Um();break e}u=Error(K(426))}}else if(it&&a.mode&1){var P=Wv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Gv(P,o,a,s,e),wm(Lo(u,a));break e}}s=u=Lo(u,a),Ct!==4&&(Ct=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=dE(s,u,e);Fv(s,_);break e;case 1:a=u;var y=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pi===null||!Pi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=hE(s,a,e);Fv(s,b);break e}}s=s.return}while(s!==null)}bE(n)}catch(j){e=j,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function PE(){var t=bc.current;return bc.current=kc,t===null?kc:t}function Um(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(_s&268435455)&&!(gd&268435455)||gi(Dt,$t)}function Mc(t,e){var n=Me;Me|=2;var r=PE();(Dt!==t||$t!==e)&&(Nr=null,fs(t,e));do try{KC();break}catch(i){RE(t,i)}while(!0);if(Tm(),Me=n,bc.current=r,It!==null)throw Error(K(261));return Dt=null,$t=0,Ct}function KC(){for(;It!==null;)kE(It)}function QC(){for(;It!==null&&!wA();)kE(It)}function kE(t){var e=NE(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?bE(t):It=e,Om.current=null}function bE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zC(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,It=null;return}}else if(n=$C(n,e,In),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ct===0&&(Ct=5)}function rs(t,e,n){var r=Ue,i=Fn.transition;try{Fn.transition=null,Ue=1,YC(t,e,n,r)}finally{Fn.transition=i,Ue=r}return null}function YC(t,e,n,r){do xo();while(Ti!==null);if(Me&6)throw Error(K(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kA(t,s),t===Dt&&(It=Dt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Du||(Du=!0,ME(mc,function(){return xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=Ue;Ue=1;var a=Me;Me|=4,Om.current=null,HC(t,n),xE(n,t),gC(Uf),yc=!!Ff,Uf=Ff=null,t.current=n,qC(n),EA(),Me=a,Ue=o,Fn.transition=s}else t.current=n;if(Du&&(Du=!1,Ti=t,Nc=i),s=t.pendingLanes,s===0&&(Pi=null),SA(n.stateNode),vn(t,vt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dc)throw Dc=!1,t=op,op=null,t;return Nc&1&&t.tag!==0&&xo(),s=t.pendingLanes,s&1?t===ap?Xa++:(Xa=0,ap=t):Xa=0,Hi(),null}function xo(){if(Ti!==null){var t=d1(Nc),e=Fn.transition,n=Ue;try{if(Fn.transition=null,Ue=16>t?16:t,Ti===null)var r=!1;else{if(t=Ti,Ti=null,Nc=0,Me&6)throw Error(K(331));var i=Me;for(Me|=4,re=t.current;re!==null;){var s=re,o=s.child;if(re.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(re=c;re!==null;){var d=re;switch(d.tag){case 0:case 11:case 15:Qa(8,d,s)}var f=d.child;if(f!==null)f.return=d,re=f;else for(;re!==null;){d=re;var p=d.sibling,T=d.return;if(TE(d),d===c){re=null;break}if(p!==null){p.return=T,re=p;break}re=T}}}var E=s.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,re=o;else e:for(;re!==null;){if(s=re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,re=_;break e}re=s.return}}var y=t.current;for(re=y;re!==null;){o=re;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,re=S;else e:for(o=y;re!==null;){if(a=re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(j){ft(a,a.return,j)}if(a===o){re=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,re=b;break e}re=a.return}}if(Me=i,Hi(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ad,t)}catch{}r=!0}return r}finally{Ue=n,Fn.transition=e}}return!1}function o0(t,e,n){e=Lo(n,e),e=dE(t,e,1),t=Ri(t,e,1),e=an(),t!==null&&(Ml(t,1,e),vn(t,e))}function ft(t,e,n){if(t.tag===3)o0(t,t,n);else for(;e!==null;){if(e.tag===3){o0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pi===null||!Pi.has(r))){t=Lo(n,t),t=hE(e,t,1),e=Ri(e,t,1),t=an(),e!==null&&(Ml(e,1,t),vn(e,t));break}}e=e.return}}function XC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&($t&n)===n&&(Ct===4||Ct===3&&($t&130023424)===$t&&500>vt()-Vm?fs(t,0):Lm|=n),vn(t,e)}function DE(t,e){e===0&&(t.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var n=an();t=Wr(t,e),t!==null&&(Ml(t,e,n),vn(t,n))}function JC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DE(t,n)}function ZC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(e),DE(t,n)}var NE;NE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,UC(t,e,n);mn=!!(t.flags&131072)}else mn=!1,it&&e.flags&1048576&&V1(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yu(t,e),t=e.pendingProps;var i=Do(e,tn.current);So(e,n),i=km(null,e,r,t,i,n);var s=bm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(r)?(s=!0,Tc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xm(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,Qf(e,r,t,n),e=Jf(null,e,r,!0,s,n)):(e.tag=0,it&&s&&vm(e),sn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tR(r),t=Kn(r,t),i){case 0:e=Xf(null,e,r,t,n);break e;case 1:e=Yv(null,e,r,t,n);break e;case 11:e=Kv(null,e,r,t,n);break e;case 14:e=Qv(null,e,r,Kn(r.type,t),n);break e}throw Error(K(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Yv(t,e,r,i,n);case 3:e:{if(gE(e),t===null)throw Error(K(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B1(t,e),Cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lo(Error(K(423)),e),e=Xv(t,e,r,n,i);break e}else if(r!==i){i=Lo(Error(K(424)),e),e=Xv(t,e,r,n,i);break e}else for(Sn=Ci(e.stateNode.containerInfo.firstChild),An=e,it=!0,Xn=null,n=$1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(No(),r===i){e=Gr(t,e,n);break e}sn(t,e,r,n)}e=e.child}return e;case 5:return H1(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$f(r,i)?o=null:s!==null&&$f(r,s)&&(e.flags|=32),mE(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return yE(t,e,n);case 4:return Am(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mo(e,null,r,n):sn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Kv(t,e,r,i,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Qe(xc,r._currentValue),r._currentValue=o,s!==null)if(er(s.value,o)){if(s.children===i.children&&!gn.current){e=Gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ur(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(K(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=zn(i),r=r(i),e.flags|=1,sn(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),Qv(t,e,r,i,n);case 15:return fE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Yu(t,e),e.tag=1,yn(r)?(t=!0,Tc(e)):t=!1,So(e,n),cE(e,r,i),Qf(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return vE(t,e,n);case 22:return pE(t,e,n)}throw Error(K(156,e.tag))};function ME(t,e){return a1(t,e)}function eR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,r){return new eR(t,e,n,r)}function $m(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tR(t){if(typeof t=="function")return $m(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===am)return 14}return 2}function bi(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")$m(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case io:return ps(n.children,i,s,e);case sm:o=8,i|=8;break;case _f:return t=jn(12,n,e,i|2),t.elementType=_f,t.lanes=s,t;case wf:return t=jn(13,n,e,i),t.elementType=wf,t.lanes=s,t;case Ef:return t=jn(19,n,e,i),t.elementType=Ef,t.lanes=s,t;case Hw:return yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zw:o=10;break e;case Bw:o=9;break e;case om:o=11;break e;case am:o=14;break e;case fi:o=16,r=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=jn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ps(t,e,n,r){return t=jn(7,t,r,e),t.lanes=n,t}function yd(t,e,n,r){return t=jn(22,t,r,e),t.elementType=Hw,t.lanes=n,t.stateNode={isHidden:!1},t}function Gh(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rh(0),this.expirationTimes=Rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,s,o,a,u){return t=new nR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xm(s),t}function rR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function OE(t){if(!t)return ji;t=t._reactInternals;e:{if(Ms(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(yn(n))return O1(t,n,e)}return e}function LE(t,e,n,r,i,s,o,a,u){return t=zm(n,r,!0,t,i,s,o,a,u),t.context=OE(null),n=t.current,r=an(),i=ki(n),s=Ur(r,i),s.callback=e??null,Ri(n,s,i),t.current.lanes=i,Ml(t,i,r),vn(t,r),t}function vd(t,e,n,r){var i=e.current,s=an(),o=ki(i);return n=OE(n),e.context===null?e.context=n:e.pendingContext=n,e=Ur(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ri(i,e,o),t!==null&&(Zn(t,i,o,s),Gu(t,i,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function a0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bm(t,e){a0(t,e),(t=t.alternate)&&a0(t,e)}function iR(){return null}var VE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hm(t){this._internalRoot=t}_d.prototype.render=Hm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));vd(t,e,null,null)};_d.prototype.unmount=Hm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ws(function(){vd(null,t,null,null)}),e[qr]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=p1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mi.length&&e!==0&&e<mi[n].priority;n++);mi.splice(n,0,t),n===0&&g1(t)}};function qm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function l0(){}function sR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Oc(o);s.call(c)}}var o=LE(e,r,t,0,null,!1,!1,"",l0);return t._reactRootContainer=o,t[qr]=o.current,pl(t.nodeType===8?t.parentNode:t),ws(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Oc(u);a.call(c)}}var u=zm(t,0,!1,null,null,!1,!1,"",l0);return t._reactRootContainer=u,t[qr]=u.current,pl(t.nodeType===8?t.parentNode:t),ws(function(){vd(e,u,n,r)}),u}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Oc(o);a.call(u)}}vd(e,o,t,i)}else o=sR(n,e,t,i,r);return Oc(o)}h1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(cm(e,n|1),vn(e,vt()),!(Me&6)&&(Vo=vt()+500,Hi()))}break;case 13:ws(function(){var r=Wr(t,1);if(r!==null){var i=an();Zn(r,t,1,i)}}),Bm(t,1)}};dm=function(t){if(t.tag===13){var e=Wr(t,134217728);if(e!==null){var n=an();Zn(e,t,134217728,n)}Bm(t,134217728)}};f1=function(t){if(t.tag===13){var e=ki(t),n=Wr(t,e);if(n!==null){var r=an();Zn(n,t,e,r)}Bm(t,e)}};p1=function(){return Ue};m1=function(t,e){var n=Ue;try{return Ue=t,e()}finally{Ue=n}};bf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dd(r);if(!i)throw Error(K(90));Ww(r),Sf(r,i)}}}break;case"textarea":Kw(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};t1=jm;n1=ws;var oR={usingClientEntryPoint:!1,Events:[Ll,lo,dd,Zw,e1,jm]},Aa={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aR={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s1(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||iR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{ad=Nu.inject(aR),yr=Nu}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oR;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qm(e))throw Error(K(200));return rR(t,e,null,n)};Pn.createRoot=function(t,e){if(!qm(t))throw Error(K(299));var n=!1,r="",i=VE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[qr]=e.current,pl(t.nodeType===8?t.parentNode:t),new Hm(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=s1(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return ws(t)};Pn.hydrate=function(t,e,n){if(!wd(e))throw Error(K(200));return Ed(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!qm(t))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=VE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=LE(e,null,t,1,n??null,i,!1,s,o),t[qr]=e.current,pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};Pn.render=function(t,e,n){if(!wd(e))throw Error(K(200));return Ed(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!wd(t))throw Error(K(40));return t._reactRootContainer?(ws(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[qr]=null})}),!0):!1};Pn.unstable_batchedUpdates=jm;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wd(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Ed(t,e,n,!1,r)};Pn.version="18.3.1-next-f1338f8080-20240426";function jE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jE)}catch(t){console.error(t)}}jE(),jw.exports=Pn;var Wm=jw.exports;const lR=Xp(Wm),uR=Aw({__proto__:null,default:lR},[Wm]);var FE,u0=Wm;FE=u0.createRoot,u0.hydrateRoot;var UE={exports:{}},$e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=Symbol.for("react.element"),Km=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),cR=Symbol.for("react.server_context"),Cd=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),dR=Symbol.for("react.offscreen"),$E;$E=Symbol.for("react.module.reference");function Hn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Gm:switch(t=t.type,t){case Td:case Sd:case Id:case Rd:case Pd:return t;default:switch(t=t&&t.$$typeof,t){case cR:case Ad:case Cd:case bd:case kd:case xd:return t;default:return e}}case Km:return e}}}$e.ContextConsumer=Ad;$e.ContextProvider=xd;$e.Element=Gm;$e.ForwardRef=Cd;$e.Fragment=Td;$e.Lazy=bd;$e.Memo=kd;$e.Portal=Km;$e.Profiler=Sd;$e.StrictMode=Id;$e.Suspense=Rd;$e.SuspenseList=Pd;$e.isAsyncMode=function(){return!1};$e.isConcurrentMode=function(){return!1};$e.isContextConsumer=function(t){return Hn(t)===Ad};$e.isContextProvider=function(t){return Hn(t)===xd};$e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gm};$e.isForwardRef=function(t){return Hn(t)===Cd};$e.isFragment=function(t){return Hn(t)===Td};$e.isLazy=function(t){return Hn(t)===bd};$e.isMemo=function(t){return Hn(t)===kd};$e.isPortal=function(t){return Hn(t)===Km};$e.isProfiler=function(t){return Hn(t)===Sd};$e.isStrictMode=function(t){return Hn(t)===Id};$e.isSuspense=function(t){return Hn(t)===Rd};$e.isSuspenseList=function(t){return Hn(t)===Pd};$e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Td||t===Sd||t===Id||t===Rd||t===Pd||t===dR||typeof t=="object"&&t!==null&&(t.$$typeof===bd||t.$$typeof===kd||t.$$typeof===xd||t.$$typeof===Ad||t.$$typeof===Cd||t.$$typeof===$E||t.getModuleId!==void 0)};$e.typeOf=Hn;UE.exports=$e;var zE=UE.exports;function hR(t){function e(q,G,J,Z,L){for(var he=0,Y=0,Ve=0,Se=0,xe,le,He=0,mt=0,Ae,qe=Ae=xe=0,be=0,gt=0,ar=0,st=0,Ar=J.length,wn=Ar-1,yt,fe="",Be="",Fe="",Xe="",qt;be<Ar;){if(le=J.charCodeAt(be),be===wn&&Y+Se+Ve+he!==0&&(Y!==0&&(le=Y===47?10:47),Se=Ve=he=0,Ar++,wn++),Y+Se+Ve+he===0){if(be===wn&&(0<gt&&(fe=fe.replace(p,"")),0<fe.trim().length)){switch(le){case 32:case 9:case 59:case 13:case 10:break;default:fe+=J.charAt(be)}le=59}switch(le){case 123:for(fe=fe.trim(),xe=fe.charCodeAt(0),Ae=1,st=++be;be<Ar;){switch(le=J.charCodeAt(be)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(le=J.charCodeAt(be+1)){case 42:case 47:e:{for(qe=be+1;qe<wn;++qe)switch(J.charCodeAt(qe)){case 47:if(le===42&&J.charCodeAt(qe-1)===42&&be+2!==qe){be=qe+1;break e}break;case 10:if(le===47){be=qe+1;break e}}be=qe}}break;case 91:le++;case 40:le++;case 34:case 39:for(;be++<wn&&J.charCodeAt(be)!==le;);}if(Ae===0)break;be++}switch(Ae=J.substring(st,be),xe===0&&(xe=(fe=fe.replace(f,"").trim()).charCodeAt(0)),xe){case 64:switch(0<gt&&(fe=fe.replace(p,"")),le=fe.charCodeAt(1),le){case 100:case 109:case 115:case 45:gt=G;break;default:gt=pt}if(Ae=e(G,gt,Ae,le,L+1),st=Ae.length,0<B&&(gt=n(pt,fe,ar),qt=a(3,Ae,gt,G,x,D,st,le,L,Z),fe=gt.join(""),qt!==void 0&&(st=(Ae=qt.trim()).length)===0&&(le=0,Ae="")),0<st)switch(le){case 115:fe=fe.replace(z,o);case 100:case 109:case 45:Ae=fe+"{"+Ae+"}";break;case 107:fe=fe.replace(y,"$1 $2"),Ae=fe+"{"+Ae+"}",Ae=Ie===1||Ie===2&&s("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=fe+Ae,Z===112&&(Ae=(Be+=Ae,""))}else Ae="";break;default:Ae=e(G,n(G,fe,ar),Ae,Z,L+1)}Fe+=Ae,Ae=ar=gt=qe=xe=0,fe="",le=J.charCodeAt(++be);break;case 125:case 59:if(fe=(0<gt?fe.replace(p,""):fe).trim(),1<(st=fe.length))switch(qe===0&&(xe=fe.charCodeAt(0),xe===45||96<xe&&123>xe)&&(st=(fe=fe.replace(" ",":")).length),0<B&&(qt=a(1,fe,G,q,x,D,Be.length,Z,L,Z))!==void 0&&(st=(fe=qt.trim()).length)===0&&(fe="\0\0"),xe=fe.charCodeAt(0),le=fe.charCodeAt(1),xe){case 0:break;case 64:if(le===105||le===99){Xe+=fe+J.charAt(be);break}default:fe.charCodeAt(st-1)!==58&&(Be+=i(fe,xe,le,fe.charCodeAt(2)))}ar=gt=qe=xe=0,fe="",le=J.charCodeAt(++be)}}switch(le){case 13:case 10:Y===47?Y=0:1+xe===0&&Z!==107&&0<fe.length&&(gt=1,fe+="\0"),0<B*ae&&a(0,fe,G,q,x,D,Be.length,Z,L,Z),D=1,x++;break;case 59:case 125:if(Y+Se+Ve+he===0){D++;break}default:switch(D++,yt=J.charAt(be),le){case 9:case 32:if(Se+he+Y===0)switch(He){case 44:case 58:case 9:case 32:yt="";break;default:le!==32&&(yt=" ")}break;case 0:yt="\\0";break;case 12:yt="\\f";break;case 11:yt="\\v";break;case 38:Se+Y+he===0&&(gt=ar=1,yt="\f"+yt);break;case 108:if(Se+Y+he+te===0&&0<qe)switch(be-qe){case 2:He===112&&J.charCodeAt(be-3)===58&&(te=He);case 8:mt===111&&(te=mt)}break;case 58:Se+Y+he===0&&(qe=be);break;case 44:Y+Ve+Se+he===0&&(gt=1,yt+="\r");break;case 34:case 39:Y===0&&(Se=Se===le?0:Se===0?le:Se);break;case 91:Se+Y+Ve===0&&he++;break;case 93:Se+Y+Ve===0&&he--;break;case 41:Se+Y+he===0&&Ve--;break;case 40:if(Se+Y+he===0){if(xe===0)switch(2*He+3*mt){case 533:break;default:xe=1}Ve++}break;case 64:Y+Ve+Se+he+qe+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<Se+he+Ve))switch(Y){case 0:switch(2*le+3*J.charCodeAt(be+1)){case 235:Y=47;break;case 220:st=be,Y=42}break;case 42:le===47&&He===42&&st+2!==be&&(J.charCodeAt(st+2)===33&&(Be+=J.substring(st,be+1)),yt="",Y=0)}}Y===0&&(fe+=yt)}mt=He,He=le,be++}if(st=Be.length,0<st){if(gt=G,0<B&&(qt=a(2,Be,gt,q,x,D,st,Z,L,Z),qt!==void 0&&(Be=qt).length===0))return Xe+Be+Fe;if(Be=gt.join(",")+"{"+Be+"}",Ie*te!==0){switch(Ie!==2||s(Be,2)||(te=0),te){case 111:Be=Be.replace(b,":-moz-$1")+Be;break;case 112:Be=Be.replace(S,"::-webkit-input-$1")+Be.replace(S,"::-moz-$1")+Be.replace(S,":-ms-input-$1")+Be}te=0}}return Xe+Be+Fe}function n(q,G,J){var Z=G.trim().split(P);G=Z;var L=Z.length,he=q.length;switch(he){case 0:case 1:var Y=0;for(q=he===0?"":q[0]+" ";Y<L;++Y)G[Y]=r(q,G[Y],J).trim();break;default:var Ve=Y=0;for(G=[];Y<L;++Y)for(var Se=0;Se<he;++Se)G[Ve++]=r(q[Se]+" ",Z[Y],J).trim()}return G}function r(q,G,J){var Z=G.charCodeAt(0);switch(33>Z&&(Z=(G=G.trim()).charCodeAt(0)),Z){case 38:return G.replace(_,"$1"+q.trim());case 58:return q.trim()+G.replace(_,"$1"+q.trim());default:if(0<1*J&&0<G.indexOf("\f"))return G.replace(_,(q.charCodeAt(0)===58?"":"$1")+q.trim())}return q+G}function i(q,G,J,Z){var L=q+";",he=2*G+3*J+4*Z;if(he===944){q=L.indexOf(":",9)+1;var Y=L.substring(q,L.length-1).trim();return Y=L.substring(0,q).trim()+Y+";",Ie===1||Ie===2&&s(Y,1)?"-webkit-"+Y+Y:Y}if(Ie===0||Ie===2&&!s(L,1))return L;switch(he){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(k,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return Y=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+L+"-ms-flex-pack"+Y+L;case 1005:return E.test(L)?L.replace(T,":-webkit-")+L.replace(T,":-moz-")+L:L;case 1e3:switch(Y=L.substring(13).trim(),G=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(G)){case 226:Y=L.replace(j,"tb");break;case 232:Y=L.replace(j,"tb-rl");break;case 220:Y=L.replace(j,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+Y+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(G=(L=q).length-10,Y=(L.charCodeAt(G)===33?L.substring(0,G):L).substring(q.indexOf(":",7)+1).trim(),he=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:L=L.replace(Y,"-webkit-"+Y)+";"+L;break;case 207:case 102:L=L.replace(Y,"-webkit-"+(102<he?"inline-":"")+"box")+";"+L.replace(Y,"-webkit-"+Y)+";"+L.replace(Y,"-ms-"+Y+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return Y=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+Y+"-ms-flex-"+Y+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(w,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(w,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(R.test(q)===!0)return(Y=q.substring(q.indexOf(":")+1)).charCodeAt(0)===115?i(q.replace("stretch","fill-available"),G,J,Z).replace(":fill-available",":stretch"):L.replace(Y,"-webkit-"+Y)+L.replace(Y,"-moz-"+Y.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,J+Z===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+L}return L}function s(q,G){var J=q.indexOf(G===1?":":"{"),Z=q.substring(0,G!==3?J:10);return J=q.substring(J+1,q.length-1),oe(G!==2?Z:Z.replace(A,"$1"),J,G)}function o(q,G){var J=i(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return J!==G+";"?J.replace(v," or ($1)").substring(4):"("+G+")"}function a(q,G,J,Z,L,he,Y,Ve,Se,xe){for(var le=0,He=G,mt;le<B;++le)switch(mt=Ne[le].call(d,q,He,J,Z,L,he,Y,Ve,Se,xe)){case void 0:case!1:case!0:case null:break;default:He=mt}if(He!==G)return He}function u(q){switch(q){case void 0:case null:B=Ne.length=0;break;default:if(typeof q=="function")Ne[B++]=q;else if(typeof q=="object")for(var G=0,J=q.length;G<J;++G)u(q[G]);else ae=!!q|0}return u}function c(q){return q=q.prefix,q!==void 0&&(oe=null,q?typeof q!="function"?Ie=1:(Ie=2,oe=q):Ie=0),c}function d(q,G){var J=q;if(33>J.charCodeAt(0)&&(J=J.trim()),Te=J,J=[Te],0<B){var Z=a(-1,G,J,J,x,D,0,0,0,0);Z!==void 0&&typeof Z=="string"&&(G=Z)}var L=e(pt,J,G,0,0);return 0<B&&(Z=a(-2,L,J,J,x,D,L.length,0,0,0),Z!==void 0&&(L=Z)),Te="",te=0,D=x=1,L}var f=/^\0+/g,p=/[\0\r\f]/g,T=/: */g,E=/zoo|gra/,C=/([,: ])(transform)/g,P=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,S=/::(place)/g,b=/:(read-only)/g,j=/[svh]\w+-[tblr]{2}/,z=/\(\s*(.*)\s*\)/g,v=/([\s\S]*?);/g,w=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,D=1,x=1,te=0,Ie=1,pt=[],Ne=[],B=0,oe=null,ae=0,Te="";return d.use=u,d.set=c,t!==void 0&&c(t),d}var fR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function pR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var mR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c0=pR(function(t){return mR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),BE={exports:{}},ze={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mt=typeof Symbol=="function"&&Symbol.for,Qm=Mt?Symbol.for("react.element"):60103,Ym=Mt?Symbol.for("react.portal"):60106,Dd=Mt?Symbol.for("react.fragment"):60107,Nd=Mt?Symbol.for("react.strict_mode"):60108,Md=Mt?Symbol.for("react.profiler"):60114,Od=Mt?Symbol.for("react.provider"):60109,Ld=Mt?Symbol.for("react.context"):60110,Xm=Mt?Symbol.for("react.async_mode"):60111,Vd=Mt?Symbol.for("react.concurrent_mode"):60111,jd=Mt?Symbol.for("react.forward_ref"):60112,Fd=Mt?Symbol.for("react.suspense"):60113,gR=Mt?Symbol.for("react.suspense_list"):60120,Ud=Mt?Symbol.for("react.memo"):60115,$d=Mt?Symbol.for("react.lazy"):60116,yR=Mt?Symbol.for("react.block"):60121,vR=Mt?Symbol.for("react.fundamental"):60117,_R=Mt?Symbol.for("react.responder"):60118,wR=Mt?Symbol.for("react.scope"):60119;function bn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qm:switch(t=t.type,t){case Xm:case Vd:case Dd:case Md:case Nd:case Fd:return t;default:switch(t=t&&t.$$typeof,t){case Ld:case jd:case $d:case Ud:case Od:return t;default:return e}}case Ym:return e}}}function HE(t){return bn(t)===Vd}ze.AsyncMode=Xm;ze.ConcurrentMode=Vd;ze.ContextConsumer=Ld;ze.ContextProvider=Od;ze.Element=Qm;ze.ForwardRef=jd;ze.Fragment=Dd;ze.Lazy=$d;ze.Memo=Ud;ze.Portal=Ym;ze.Profiler=Md;ze.StrictMode=Nd;ze.Suspense=Fd;ze.isAsyncMode=function(t){return HE(t)||bn(t)===Xm};ze.isConcurrentMode=HE;ze.isContextConsumer=function(t){return bn(t)===Ld};ze.isContextProvider=function(t){return bn(t)===Od};ze.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qm};ze.isForwardRef=function(t){return bn(t)===jd};ze.isFragment=function(t){return bn(t)===Dd};ze.isLazy=function(t){return bn(t)===$d};ze.isMemo=function(t){return bn(t)===Ud};ze.isPortal=function(t){return bn(t)===Ym};ze.isProfiler=function(t){return bn(t)===Md};ze.isStrictMode=function(t){return bn(t)===Nd};ze.isSuspense=function(t){return bn(t)===Fd};ze.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dd||t===Vd||t===Md||t===Nd||t===Fd||t===gR||typeof t=="object"&&t!==null&&(t.$$typeof===$d||t.$$typeof===Ud||t.$$typeof===Od||t.$$typeof===Ld||t.$$typeof===jd||t.$$typeof===vR||t.$$typeof===_R||t.$$typeof===wR||t.$$typeof===yR)};ze.typeOf=bn;BE.exports=ze;var ER=BE.exports,Jm=ER,TR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},SR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zm={};Zm[Jm.ForwardRef]=SR;Zm[Jm.Memo]=qE;function d0(t){return Jm.isMemo(t)?qE:Zm[t.$$typeof]||TR}var xR=Object.defineProperty,AR=Object.getOwnPropertyNames,h0=Object.getOwnPropertySymbols,CR=Object.getOwnPropertyDescriptor,RR=Object.getPrototypeOf,f0=Object.prototype;function WE(t,e,n){if(typeof e!="string"){if(f0){var r=RR(e);r&&r!==f0&&WE(t,r,n)}var i=AR(e);h0&&(i=i.concat(h0(e)));for(var s=d0(t),o=d0(e),a=0;a<i.length;++a){var u=i[a];if(!IR[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=CR(e,u);try{xR(t,u,c)}catch{}}}}return t}var PR=WE;const kR=Xp(PR);var fr={};function mr(){return(mr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},cp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!zE.typeOf(t)},Lc=Object.freeze([]),Di=Object.freeze({});function Il(t){return typeof t=="function"}function m0(t){return t.displayName||t.name||"Component"}function eg(t){return t&&typeof t.styledComponentId=="string"}var jo=typeof process<"u"&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",tg=typeof window<"u"&&"HTMLElement"in window,bR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&fr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fr.REACT_APP_SC_DISABLE_SPEEDY!==""?fr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&fr.SC_DISABLE_SPEEDY!==void 0&&fr.SC_DISABLE_SPEEDY!==""&&fr.SC_DISABLE_SPEEDY!=="false"&&fr.SC_DISABLE_SPEEDY),DR={};function jl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var NR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&jl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ec=new Map,Vc=new Map,Ja=1,Mu=function(t){if(ec.has(t))return ec.get(t);for(;Vc.has(Ja);)Ja++;var e=Ja++;return ec.set(t,e),Vc.set(e,t),e},MR=function(t){return Vc.get(t)},OR=function(t,e){e>=Ja&&(Ja=e+1),ec.set(t,e),Vc.set(e,t)},LR="style["+jo+'][data-styled-version="5.3.6"]',VR=new RegExp("^"+jo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),jR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},FR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(VR);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(OR(c,u),jR(t,c,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},UR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},GE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(jo))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(jo,"active"),r.setAttribute("data-styled-version","5.3.6");var o=UR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},$R=function(){function t(n){var r=this.element=GE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}jl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),zR=function(){function t(n){var r=this.element=GE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),BR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),g0=tg,HR={isServer:!tg,useCSSOMInjection:!bR},jc=function(){function t(n,r,i){n===void 0&&(n=Di),r===void 0&&(r={}),this.options=mr({},HR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&tg&&g0&&(g0=!1,function(s){for(var o=document.querySelectorAll(LR),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(jo)!=="active"&&(FR(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return Mu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(mr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new BR(o):s?new $R(o):new zR(o),new NR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Mu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Mu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Mu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=MR(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var d=jo+".g"+o+'[id="'+a+'"]',f="";u!==void 0&&u.forEach(function(p){p.length>0&&(f+=p+",")}),s+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),qR=/(a)(d)/gi,y0=function(t){return String.fromCharCode(t+(t>25?39:97))};function dp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=y0(e%52)+n;return(y0(e%52)+n).replace(qR,"$1-$2")}var go=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},KE=function(t){return go(5381,t)};function QE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Il(n)&&!eg(n))return!1}return!0}var WR=KE("5.3.6"),GR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&QE(e),this.componentId=n,this.baseHash=go(WR,n),this.baseStyle=r,jc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Es(this.rules,e,n,r).join(""),a=dp(go(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=go(this.baseHash,r.hash),f="",p=0;p<c;p++){var T=this.rules[p];if(typeof T=="string")f+=T;else if(T){var E=Es(T,e,n,r),C=Array.isArray(E)?E.join(""):E;d=go(d,C+p),f+=C}}if(f){var P=dp(d>>>0);if(!n.hasNameForId(i,P)){var _=r(f,"."+P,void 0,i);n.insertRules(i,P,_)}s.push(P)}}return s.join(" ")},t}(),KR=/^\s*\/\/.*$/gm,QR=[":","[",".","#"];function YR(t){var e,n,r,i,s=Di,o=s.options,a=o===void 0?Di:o,u=s.plugins,c=u===void 0?Lc:u,d=new hR(a),f=[],p=function(C){function P(_){if(_)try{C(_+"}")}catch{}}return function(_,y,S,b,j,z,v,w,A,R){switch(_){case 1:if(A===0&&y.charCodeAt(0)===64)return C(y+";"),"";break;case 2:if(w===0)return y+"/*|*/";break;case 3:switch(w){case 102:case 112:return C(S[0]+y),"";default:return y+(R===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(P)}}}(function(C){f.push(C)}),T=function(C,P,_){return P===0&&QR.indexOf(_[n.length])!==-1||_.match(i)?C:"."+e};function E(C,P,_,y){y===void 0&&(y="&");var S=C.replace(KR,""),b=P&&_?_+" "+P+" { "+S+" }":S;return e=y,n=P,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(_||!P?"":P,b)}return d.use([].concat(c,[function(C,P,_){C===2&&_.length&&_[0].lastIndexOf(n)>0&&(_[0]=_[0].replace(r,T))},p,function(C){if(C===-2){var P=f;return f=[],P}}])),E.hash=c.length?c.reduce(function(C,P){return P.name||jl(15),go(C,P.name)},5381).toString():"",E}var YE=Xo.createContext();YE.Consumer;var XE=Xo.createContext(),XR=(XE.Consumer,new jc),hp=YR();function JE(){return N.useContext(YE)||XR}function ZE(){return N.useContext(XE)||hp}var eT=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=hp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return jl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=hp),this.name+e.hash},t}(),JR=/([A-Z])/,ZR=/([A-Z])/g,eP=/^ms-/,tP=function(t){return"-"+t.toLowerCase()};function v0(t){return JR.test(t)?t.replace(ZR,tP).replace(eP,"-ms-"):t}var _0=function(t){return t==null||t===!1||t===""};function Es(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Es(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_0(t))return"";if(eg(t))return"."+t.styledComponentId;if(Il(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var u=t(e);return Es(u,e,n,r)}var c;return t instanceof eT?n?(t.inject(n,r),t.getName(r)):t:cp(t)?function d(f,p){var T,E,C=[];for(var P in f)f.hasOwnProperty(P)&&!_0(f[P])&&(Array.isArray(f[P])&&f[P].isCss||Il(f[P])?C.push(v0(P)+":",f[P],";"):cp(f[P])?C.push.apply(C,d(f[P],P)):C.push(v0(P)+": "+(T=P,(E=f[P])==null||typeof E=="boolean"||E===""?"":typeof E!="number"||E===0||T in fR?String(E).trim():E+"px")+";"));return p?[p+" {"].concat(C,["}"]):C}(t):t.toString()}var w0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function ng(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Il(t)||cp(t)?w0(Es(p0(Lc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:w0(Es(p0(t,n)))}var tT=function(t,e,n){return n===void 0&&(n=Di),t.theme!==n.theme&&t.theme||e||n.theme},nP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rP=/(^-|-$)/g;function Qh(t){return t.replace(nP,"-").replace(rP,"")}var rg=function(t){return dp(KE(t)>>>0)};function Ou(t){return typeof t=="string"&&!0}var fp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},iP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function sP(t,e,n){var r=t[n];fp(e)&&fp(r)?nT(r,e):t[n]=e}function nT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(fp(o))for(var a in o)iP(a)&&sP(t,o[a],a)}return t}var ig=Xo.createContext();ig.Consumer;var Yh={};function rT(t,e,n){var r=eg(t),i=!Ou(t),s=e.attrs,o=s===void 0?Lc:s,a=e.componentId,u=a===void 0?function(y,S){var b=typeof y!="string"?"sc":Qh(y);Yh[b]=(Yh[b]||0)+1;var j=b+"-"+rg("5.3.6"+b+Yh[b]);return S?S+"-"+j:j}(e.displayName,e.parentComponentId):a,c=e.displayName,d=c===void 0?function(y){return Ou(y)?"styled."+y:"Styled("+m0(y)+")"}(t):c,f=e.displayName&&e.componentId?Qh(e.displayName)+"-"+e.componentId:e.componentId||u,p=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,T=e.shouldForwardProp;r&&t.shouldForwardProp&&(T=e.shouldForwardProp?function(y,S,b){return t.shouldForwardProp(y,S,b)&&e.shouldForwardProp(y,S,b)}:t.shouldForwardProp);var E,C=new GR(n,f,r?t.componentStyle:void 0),P=C.isStatic&&o.length===0,_=function(y,S){return function(b,j,z,v){var w=b.attrs,A=b.componentStyle,R=b.defaultProps,k=b.foldedComponentIds,D=b.shouldForwardProp,x=b.styledComponentId,te=b.target,Ie=function(Z,L,he){Z===void 0&&(Z=Di);var Y=mr({},L,{theme:Z}),Ve={};return he.forEach(function(Se){var xe,le,He,mt=Se;for(xe in Il(mt)&&(mt=mt(Y)),mt)Y[xe]=Ve[xe]=xe==="className"?(le=Ve[xe],He=mt[xe],le&&He?le+" "+He:le||He):mt[xe]}),[Y,Ve]}(tT(j,N.useContext(ig),R)||Di,j,w),pt=Ie[0],Ne=Ie[1],B=function(Z,L,he,Y){var Ve=JE(),Se=ZE(),xe=L?Z.generateAndInjectStyles(Di,Ve,Se):Z.generateAndInjectStyles(he,Ve,Se);return xe}(A,v,pt),oe=z,ae=Ne.$as||j.$as||Ne.as||j.as||te,Te=Ou(ae),q=Ne!==j?mr({},j,{},Ne):j,G={};for(var J in q)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?G.as=q[J]:(D?D(J,c0,ae):!Te||c0(J))&&(G[J]=q[J]));return j.style&&Ne.style!==j.style&&(G.style=mr({},j.style,{},Ne.style)),G.className=Array.prototype.concat(k,x,B!==x?B:null,j.className,Ne.className).filter(Boolean).join(" "),G.ref=oe,N.createElement(ae,G)}(E,y,S,P)};return _.displayName=d,(E=Xo.forwardRef(_)).attrs=p,E.componentStyle=C,E.displayName=d,E.shouldForwardProp=T,E.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Lc,E.styledComponentId=f,E.target=r?t.target:t,E.withComponent=function(y){var S=e.componentId,b=function(z,v){if(z==null)return{};var w,A,R={},k=Object.keys(z);for(A=0;A<k.length;A++)w=k[A],v.indexOf(w)>=0||(R[w]=z[w]);return R}(e,["componentId"]),j=S&&S+"-"+(Ou(y)?y:Qh(m0(y)));return rT(y,mr({},b,{attrs:p,componentId:j}),n)},Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?nT({},t.defaultProps,y):y}}),E.toString=function(){return"."+E.styledComponentId},i&&kR(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),E}var $=function(t){return function e(n,r,i){if(i===void 0&&(i=Di),!zE.isValidElementType(r))return jl(1,String(r));var s=function(){return n(r,i,ng.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,mr({},i,{},o))},s.attrs=function(o){return e(n,r,mr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(rT,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){$[t]=$(t)});var oP=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=QE(n),jc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Es(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&jc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function aP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ng.apply(void 0,[t].concat(n)),s="sc-global-"+rg(JSON.stringify(i)),o=new oP(i,s);function a(c){var d=JE(),f=ZE(),p=N.useContext(ig),T=N.useRef(d.allocateGSInstance(s)).current;return d.server&&u(T,c,d,p,f),N.useLayoutEffect(function(){if(!d.server)return u(T,c,d,p,f),function(){return o.removeStyles(T,d)}},[T,c,d,p,f]),null}function u(c,d,f,p,T){if(o.isStatic)o.renderStyles(c,DR,f,T);else{var E=mr({},d,{theme:tT(d,p,a.defaultProps)});o.renderStyles(c,E,f,T)}}return Xo.memo(a)}function sg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ng.apply(void 0,[t].concat(n)).join(""),s=rg(i);return new eT(s,i)}const zd=$(t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:g.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,lP=sg`
  to {
     backdrop-filter: blur(3px);
  }
`,uP=$.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
  padding-block-start: 16px;
`,cP=$(({className:t,children:e,addToPracticePlan:n})=>g.jsx("li",{className:t,children:g.jsx("button",{onClick:n,children:e})}))`
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
`,dP=(t,e,n)=>{var c;const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,u=e.clientY;(a<s||a>o||u<r||u>i)&&!((c=t.current)!=null&&c.contains(e.currentTarget))&&n()},hP=$.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-weight: 600;
  font-size: 1em;
`,og=$(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>g.jsxs("dialog",{ref:n,onClick:o=>dP(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[g.jsxs(hP,{children:[g.jsx("h2",{children:r}),g.jsx(zd,{onClick:i})]}),t]}))`
  --animation-timing: 0.3s;
  --panel-width: 300px;
  transform-origin: right center;
  box-shadow: var(--shadow-elevation-high);
  border: none;
  inset: unset;
  min-height: 100%;
  width: var(--panel-width);
  position: fixed;
  top: 0;
  right: calc(-1 * var(--panel-width));
  padding: 0;

  &[open] {
    &::backdrop {
      animation-name: ${lP};
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
`,fP=()=>null,Bd=N.createContext(null),iT=({children:t})=>{const[e,n]=N.useState(()=>g.jsx(fP,{})),[r,i]=N.useState(""),s=N.useRef(),[o,a]=N.useState(!1),u=()=>{s.current&&a(!1)},c=()=>{var d;(d=s.current)==null||d.show(),a(!0)};return g.jsxs(Bd.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:c,closePanel:u},children:[t,g.jsx(og,{title:r,passedRef:s,onClose:u,animationDirection:o,children:g.jsx(uP,{children:e})})]})},Ge=$(({text:t,onClick:e,className:n,Icon:r,...i})=>g.jsxs("button",{className:n,onClick:e,...i,children:[g.jsx("span",{children:t}),!!r&&g.jsx("div",{children:g.jsx(r,{})})]}))`
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
  box-shadow: var(--shadow-elevation-low);

  &:hover,
  &:hover > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.8));
  }

  &:active,
  &:active > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.7));
    box-shadow: none;
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
`,pP=$(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>g.jsx("ul",{className:r,children:t.map(i=>g.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
  display: flex;
  gap: 1px;
  background-color: var(--blue500);
  border-bottom: 1px groove var(--blue500);
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
 */function at(){return at=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},at.apply(this,arguments)}var Et;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Et||(Et={}));const E0="popstate";function mP(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=ei(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Sl("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:Is(s))}function r(i,s){Ts(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return yP(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ts(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gP(){return Math.random().toString(36).substr(2,8)}function T0(t,e){return{usr:t.state,key:t.key,idx:e}}function Sl(t,e,n,r){return n===void 0&&(n=null),at({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ei(e):e,{state:n,key:e&&e.key||r||gP()})}function Is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Et.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(at({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Et.Pop;let P=d(),_=P==null?null:P-c;c=P,u&&u({action:a,location:C.location,delta:_})}function p(P,_){a=Et.Push;let y=Sl(C.location,P,_);n&&n(y,P),c=d()+1;let S=T0(y,c),b=C.createHref(y);try{o.pushState(S,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}s&&u&&u({action:a,location:C.location,delta:1})}function T(P,_){a=Et.Replace;let y=Sl(C.location,P,_);n&&n(y,P),c=d();let S=T0(y,c),b=C.createHref(y);o.replaceState(S,"",b),s&&u&&u({action:a,location:C.location,delta:0})}function E(P){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof P=="string"?P:Is(P);return y=y.replace(/ $/,"%20"),Ee(_,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,_)}let C={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(E0,f),u=P,()=>{i.removeEventListener(E0,f),u=null}},createHref(P){return e(i,P)},createURL:E,encodeLocation(P){let _=E(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:T,go(P){return o.go(P)}};return C}var rt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rt||(rt={}));const vP=new Set(["lazy","caseSensitive","path","id","index","children"]);function _P(t){return t.index===!0}function pp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),_P(i)){let u=at({},i,e(i),{id:a});return r[a]=u,u}else{let u=at({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=pp(i.children,e,o,r)),u}})}function yo(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ei(e):e,i=Kr(r.pathname||"/",n);if(i==null)return null;let s=sT(t);EP(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=DP(i);o=kP(s[a],u)}return o}function wP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function sT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:RP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of oT(s.path))i(s,o,u)}),e}function oT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=oT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function EP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TP=/^:[\w-]+$/,IP=3,SP=2,xP=1,AP=10,CP=-2,I0=t=>t==="*";function RP(t,e){let n=t.split("/"),r=n.length;return n.some(I0)&&(r+=CP),e&&(r+=SP),n.filter(i=>!I0(i)).reduce((i,s)=>i+(TP.test(s)?IP:s===""?xP:AP),r)}function PP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=mp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:$r([i,d.pathname]),pathnameBase:OP($r([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=$r([i,d.pathnameBase]))}return s}function mp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:T}=d;if(p==="*"){let C=a[f]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const E=a[f];return T&&!E?c[p]=void 0:c[p]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function bP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ts(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ts(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ei(t):t;return{pathname:n?n.startsWith("/")?n:MP(n,e):e,search:LP(r),hash:VP(i)}}function MP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ag(t,e){let n=aT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ei(t):(i=at({},t),Ee(!i.pathname||!i.pathname.includes("?"),Xh("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Xh("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=NP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),OP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class ug{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function cg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lT=["post","put","patch","delete"],jP=new Set(lT),FP=["get",...lT],UP=new Set(FP),$P=new Set([301,302,303,307,308]),zP=new Set([307,308]),Jh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},BP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ca={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},dg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),uT="remix-router-transitions";function qP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let M=t.detectErrorBoundary;i=V=>({hasErrorBoundary:M(V)})}else i=HP;let s={},o=pp(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||QP,d=at({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,p=new Set,T=null,E=null,C=null,P=t.hydrationData!=null,_=yo(o,t.history.location,u),y=null;if(_==null){let M=Mn(404,{pathname:t.history.location.pathname}),{matches:V,route:U}=N0(o);_=V,y={[U.id]:M}}let S,b=_.some(M=>M.route.lazy),j=_.some(M=>M.route.loader);if(b)S=!1;else if(!j)S=!0;else if(d.v7_partialHydration){let M=t.hydrationData?t.hydrationData.loaderData:null,V=t.hydrationData?t.hydrationData.errors:null,U=Q=>Q.route.loader?typeof Q.route.loader=="function"&&Q.route.loader.hydrate===!0?!1:M&&M[Q.route.id]!==void 0||V&&V[Q.route.id]!==void 0:!0;if(V){let Q=_.findIndex(ne=>V[ne.route.id]!==void 0);S=_.slice(0,Q+1).every(U)}else S=_.every(U)}else S=t.hydrationData!=null;let z,v={historyAction:t.history.action,location:t.history.location,matches:_,initialized:S,navigation:Jh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},w=Et.Pop,A=!1,R,k=!1,D=new Map,x=null,te=!1,Ie=!1,pt=[],Ne=[],B=new Map,oe=0,ae=-1,Te=new Map,q=new Set,G=new Map,J=new Map,Z=new Set,L=new Map,he=new Map,Y=!1;function Ve(){if(f=t.history.listen(M=>{let{action:V,location:U,delta:Q}=M;if(Y){Y=!1;return}Ts(he.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=Ws({currentLocation:v.location,nextLocation:U,historyAction:V});if(ne&&Q!=null){Y=!0,t.history.go(Q*-1),qs(ne,{state:"blocked",location:U,proceed(){qs(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),t.history.go(Q)},reset(){let ue=new Map(v.blockers);ue.set(ne,Ca),le({blockers:ue})}});return}return qe(V,U)}),n){ak(e,D);let M=()=>lk(e,D);e.addEventListener("pagehide",M),x=()=>e.removeEventListener("pagehide",M)}return v.initialized||qe(Et.Pop,v.location,{initialHydration:!0}),z}function Se(){f&&f(),x&&x(),p.clear(),R&&R.abort(),v.fetchers.forEach((M,V)=>Xi(V)),v.blockers.forEach((M,V)=>su(V))}function xe(M){return p.add(M),()=>p.delete(M)}function le(M,V){V===void 0&&(V={}),v=at({},v,M);let U=[],Q=[];d.v7_fetcherPersist&&v.fetchers.forEach((ne,ue)=>{ne.state==="idle"&&(Z.has(ue)?Q.push(ue):U.push(ue))}),[...p].forEach(ne=>ne(v,{deletedFetchers:Q,unstable_viewTransitionOpts:V.viewTransitionOpts,unstable_flushSync:V.flushSync===!0})),d.v7_fetcherPersist&&(U.forEach(ne=>v.fetchers.delete(ne)),Q.forEach(ne=>Xi(ne)))}function He(M,V,U){var Q,ne;let{flushSync:ue}=U===void 0?{}:U,ce=v.actionData!=null&&v.navigation.formMethod!=null&&Yn(v.navigation.formMethod)&&v.navigation.state==="loading"&&((Q=M.state)==null?void 0:Q._isRedirect)!==!0,ee;V.actionData?Object.keys(V.actionData).length>0?ee=V.actionData:ee=null:ce?ee=v.actionData:ee=null;let ge=V.loaderData?b0(v.loaderData,V.loaderData,V.matches||[],V.errors):v.loaderData,ye=v.blockers;ye.size>0&&(ye=new Map(ye),ye.forEach((pe,Ke)=>ye.set(Ke,Ca)));let xt=A===!0||v.navigation.formMethod!=null&&Yn(v.navigation.formMethod)&&((ne=M.state)==null?void 0:ne._isRedirect)!==!0;a&&(o=a,a=void 0),te||w===Et.Pop||(w===Et.Push?t.history.push(M,M.state):w===Et.Replace&&t.history.replace(M,M.state));let nt;if(w===Et.Pop){let pe=D.get(v.location.pathname);pe&&pe.has(M.pathname)?nt={currentLocation:v.location,nextLocation:M}:D.has(M.pathname)&&(nt={currentLocation:M,nextLocation:v.location})}else if(k){let pe=D.get(v.location.pathname);pe?pe.add(M.pathname):(pe=new Set([M.pathname]),D.set(v.location.pathname,pe)),nt={currentLocation:v.location,nextLocation:M}}le(at({},V,{actionData:ee,loaderData:ge,historyAction:w,location:M,initialized:!0,navigation:Jh,revalidation:"idle",restoreScrollPosition:Ks(M,V.matches||v.matches),preventScrollReset:xt,blockers:ye}),{viewTransitionOpts:nt,flushSync:ue===!0}),w=Et.Pop,A=!1,k=!1,te=!1,Ie=!1,pt=[],Ne=[]}async function mt(M,V){if(typeof M=="number"){t.history.go(M);return}let U=gp(v.location,v.matches,u,d.v7_prependBasename,M,d.v7_relativeSplatPath,V==null?void 0:V.fromRouteId,V==null?void 0:V.relative),{path:Q,submission:ne,error:ue}=S0(d.v7_normalizeFormMethod,!1,U,V),ce=v.location,ee=Sl(v.location,Q,V&&V.state);ee=at({},ee,t.history.encodeLocation(ee));let ge=V&&V.replace!=null?V.replace:void 0,ye=Et.Push;ge===!0?ye=Et.Replace:ge===!1||ne!=null&&Yn(ne.formMethod)&&ne.formAction===v.location.pathname+v.location.search&&(ye=Et.Replace);let xt=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,nt=(V&&V.unstable_flushSync)===!0,pe=Ws({currentLocation:ce,nextLocation:ee,historyAction:ye});if(pe){qs(pe,{state:"blocked",location:ee,proceed(){qs(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),mt(M,V)},reset(){let Ke=new Map(v.blockers);Ke.set(pe,Ca),le({blockers:Ke})}});return}return await qe(ye,ee,{submission:ne,pendingError:ue,preventScrollReset:xt,replace:V&&V.replace,enableViewTransition:V&&V.unstable_viewTransition,flushSync:nt})}function Ae(){if(Be(),le({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){qe(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}qe(w||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function qe(M,V,U){R&&R.abort(),R=null,w=M,te=(U&&U.startUninterruptedRevalidation)===!0,ca(v.location,v.matches),A=(U&&U.preventScrollReset)===!0,k=(U&&U.enableViewTransition)===!0;let Q=a||o,ne=U&&U.overrideNavigation,ue=yo(Q,V,u),ce=(U&&U.flushSync)===!0;if(!ue){let pe=Mn(404,{pathname:V.pathname}),{matches:Ke,route:ot}=N0(Q);Gs(),He(V,{matches:Ke,loaderData:{},errors:{[ot.id]:pe}},{flushSync:ce});return}if(v.initialized&&!Ie&&tk(v.location,V)&&!(U&&U.submission&&Yn(U.submission.formMethod))){He(V,{matches:ue},{flushSync:ce});return}R=new AbortController;let ee=Zs(t.history,V,R.signal,U&&U.submission),ge;if(U&&U.pendingError)ge=[Za(ue).route.id,{type:rt.error,error:U.pendingError}];else if(U&&U.submission&&Yn(U.submission.formMethod)){let pe=await be(ee,V,U.submission,ue,{replace:U.replace,flushSync:ce});if(pe.shortCircuited)return;ge=pe.pendingActionResult,ne=Zh(V,U.submission),ce=!1,ee=Zs(t.history,ee.url,ee.signal)}let{shortCircuited:ye,loaderData:xt,errors:nt}=await gt(ee,V,ue,ne,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,U&&U.initialHydration===!0,ce,ge);ye||(R=null,He(V,at({matches:ue},D0(ge),{loaderData:xt,errors:nt})))}async function be(M,V,U,Q,ne){ne===void 0&&(ne={}),Be();let ue=sk(V,U);le({navigation:ue},{flushSync:ne.flushSync===!0});let ce,ee=vp(Q,V);if(!ee.route.action&&!ee.route.lazy)ce={type:rt.error,error:Mn(405,{method:M.method,pathname:V.pathname,routeId:ee.route.id})};else if(ce=(await yt("action",M,[ee],Q))[0],M.signal.aborted)return{shortCircuited:!0};if(cs(ce)){let ge;return ne&&ne.replace!=null?ge=ne.replace:ge=R0(ce.response.headers.get("Location"),new URL(M.url),u)===v.location.pathname+v.location.search,await wn(M,ce,{submission:U,replace:ge}),{shortCircuited:!0}}if(us(ce))throw Mn(400,{type:"defer-action"});if(Vn(ce)){let ge=Za(Q,ee.route.id);return(ne&&ne.replace)!==!0&&(w=Et.Push),{pendingActionResult:[ge.route.id,ce]}}return{pendingActionResult:[ee.route.id,ce]}}async function gt(M,V,U,Q,ne,ue,ce,ee,ge,ye){let xt=Q||Zh(V,ne),nt=ne||ue||L0(xt),pe=a||o,[Ke,ot]=x0(t.history,v,U,nt,V,d.v7_partialHydration&&ee===!0,d.unstable_skipActionErrorRevalidation,Ie,pt,Ne,Z,G,q,pe,u,ye);if(Gs(Ce=>!(U&&U.some(Ot=>Ot.route.id===Ce))||Ke&&Ke.some(Ot=>Ot.route.id===Ce)),ae=++oe,Ke.length===0&&ot.length===0){let Ce=aa();return He(V,at({matches:U,loaderData:{},errors:ye&&Vn(ye[1])?{[ye[0]]:ye[1].error}:null},D0(ye),Ce?{fetchers:new Map(v.fetchers)}:{}),{flushSync:ge}),{shortCircuited:!0}}if(!te&&(!d.v7_partialHydration||!ee)){ot.forEach(Ot=>{let Lt=v.fetchers.get(Ot.key),_t=Ra(void 0,Lt?Lt.data:void 0);v.fetchers.set(Ot.key,_t)});let Ce;ye&&!Vn(ye[1])?Ce={[ye[0]]:ye[1].data}:v.actionData&&(Object.keys(v.actionData).length===0?Ce=null:Ce=v.actionData),le(at({navigation:xt},Ce!==void 0?{actionData:Ce}:{},ot.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:ge})}ot.forEach(Ce=>{B.has(Ce.key)&&lr(Ce.key),Ce.controller&&B.set(Ce.key,Ce.controller)});let ii=()=>ot.forEach(Ce=>lr(Ce.key));R&&R.signal.addEventListener("abort",ii);let{loaderResults:Nn,fetcherResults:qn}=await fe(v.matches,U,Ke,ot,M);if(M.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",ii),ot.forEach(Ce=>B.delete(Ce.key));let rn=M0([...Nn,...qn]);if(rn){if(rn.idx>=Ke.length){let Ce=ot[rn.idx-Ke.length].key;q.add(Ce)}return await wn(M,rn.result,{replace:ce}),{shortCircuited:!0}}let{loaderData:Rr,errors:En}=k0(v,U,Ke,Nn,ye,ot,qn,L);L.forEach((Ce,Ot)=>{Ce.subscribe(Lt=>{(Lt||Ce.done)&&L.delete(Ot)})}),d.v7_partialHydration&&ee&&v.errors&&Object.entries(v.errors).filter(Ce=>{let[Ot]=Ce;return!Ke.some(Lt=>Lt.route.id===Ot)}).forEach(Ce=>{let[Ot,Lt]=Ce;En=Object.assign(En||{},{[Ot]:Lt})});let si=aa(),oi=la(ae),Ji=si||oi||ot.length>0;return at({loaderData:Rr,errors:En},Ji?{fetchers:new Map(v.fetchers)}:{})}function ar(M,V,U,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");B.has(M)&&lr(M);let ne=(Q&&Q.unstable_flushSync)===!0,ue=a||o,ce=gp(v.location,v.matches,u,d.v7_prependBasename,U,d.v7_relativeSplatPath,V,Q==null?void 0:Q.relative),ee=yo(ue,ce,u);if(!ee){Xe(M,V,Mn(404,{pathname:ce}),{flushSync:ne});return}let{path:ge,submission:ye,error:xt}=S0(d.v7_normalizeFormMethod,!0,ce,Q);if(xt){Xe(M,V,xt,{flushSync:ne});return}let nt=vp(ee,ge);if(A=(Q&&Q.preventScrollReset)===!0,ye&&Yn(ye.formMethod)){st(M,V,ge,nt,ee,ne,ye);return}G.set(M,{routeId:V,path:ge}),Ar(M,V,ge,nt,ee,ne,ye)}async function st(M,V,U,Q,ne,ue,ce){if(Be(),G.delete(M),!Q.route.action&&!Q.route.lazy){let _t=Mn(405,{method:ce.formMethod,pathname:U,routeId:V});Xe(M,V,_t,{flushSync:ue});return}let ee=v.fetchers.get(M);Fe(M,ok(ce,ee),{flushSync:ue});let ge=new AbortController,ye=Zs(t.history,U,ge.signal,ce);B.set(M,ge);let xt=oe,pe=(await yt("action",ye,[Q],ne))[0];if(ye.signal.aborted){B.get(M)===ge&&B.delete(M);return}if(d.v7_fetcherPersist&&Z.has(M)){if(cs(pe)||Vn(pe)){Fe(M,hi(void 0));return}}else{if(cs(pe))if(B.delete(M),ae>xt){Fe(M,hi(void 0));return}else return q.add(M),Fe(M,Ra(ce)),wn(ye,pe,{fetcherSubmission:ce});if(Vn(pe)){Xe(M,V,pe.error);return}}if(us(pe))throw Mn(400,{type:"defer-action"});let Ke=v.navigation.location||v.location,ot=Zs(t.history,Ke,ge.signal),ii=a||o,Nn=v.navigation.state!=="idle"?yo(ii,v.navigation.location,u):v.matches;Ee(Nn,"Didn't find any matches after fetcher action");let qn=++oe;Te.set(M,qn);let rn=Ra(ce,pe.data);v.fetchers.set(M,rn);let[Rr,En]=x0(t.history,v,Nn,ce,Ke,!1,d.unstable_skipActionErrorRevalidation,Ie,pt,Ne,Z,G,q,ii,u,[Q.route.id,pe]);En.filter(_t=>_t.key!==M).forEach(_t=>{let Pr=_t.key,ai=v.fetchers.get(Pr),kr=Ra(void 0,ai?ai.data:void 0);v.fetchers.set(Pr,kr),B.has(Pr)&&lr(Pr),_t.controller&&B.set(Pr,_t.controller)}),le({fetchers:new Map(v.fetchers)});let si=()=>En.forEach(_t=>lr(_t.key));ge.signal.addEventListener("abort",si);let{loaderResults:oi,fetcherResults:Ji}=await fe(v.matches,Nn,Rr,En,ot);if(ge.signal.aborted)return;ge.signal.removeEventListener("abort",si),Te.delete(M),B.delete(M),En.forEach(_t=>B.delete(_t.key));let Ce=M0([...oi,...Ji]);if(Ce){if(Ce.idx>=Rr.length){let _t=En[Ce.idx-Rr.length].key;q.add(_t)}return wn(ot,Ce.result)}let{loaderData:Ot,errors:Lt}=k0(v,v.matches,Rr,oi,void 0,En,Ji,L);if(v.fetchers.has(M)){let _t=hi(pe.data);v.fetchers.set(M,_t)}la(qn),v.navigation.state==="loading"&&qn>ae?(Ee(w,"Expected pending action"),R&&R.abort(),He(v.navigation.location,{matches:Nn,loaderData:Ot,errors:Lt,fetchers:new Map(v.fetchers)})):(le({errors:Lt,loaderData:b0(v.loaderData,Ot,Nn,Lt),fetchers:new Map(v.fetchers)}),Ie=!1)}async function Ar(M,V,U,Q,ne,ue,ce){let ee=v.fetchers.get(M);Fe(M,Ra(ce,ee?ee.data:void 0),{flushSync:ue});let ge=new AbortController,ye=Zs(t.history,U,ge.signal);B.set(M,ge);let xt=oe,pe=(await yt("loader",ye,[Q],ne))[0];if(us(pe)&&(pe=await fT(pe,ye.signal,!0)||pe),B.get(M)===ge&&B.delete(M),!ye.signal.aborted){if(Z.has(M)){Fe(M,hi(void 0));return}if(cs(pe))if(ae>xt){Fe(M,hi(void 0));return}else{q.add(M),await wn(ye,pe);return}if(Vn(pe)){Xe(M,V,pe.error);return}Ee(!us(pe),"Unhandled fetcher deferred data"),Fe(M,hi(pe.data))}}async function wn(M,V,U){let{submission:Q,fetcherSubmission:ne,replace:ue}=U===void 0?{}:U;V.response.headers.has("X-Remix-Revalidate")&&(Ie=!0);let ce=V.response.headers.get("Location");Ee(ce,"Expected a Location header on the redirect Response"),ce=R0(ce,new URL(M.url),u);let ee=Sl(v.location,ce,{_isRedirect:!0});if(n){let Ke=!1;if(V.response.headers.has("X-Remix-Reload-Document"))Ke=!0;else if(dg.test(ce)){const ot=t.history.createURL(ce);Ke=ot.origin!==e.location.origin||Kr(ot.pathname,u)==null}if(Ke){ue?e.location.replace(ce):e.location.assign(ce);return}}R=null;let ge=ue===!0?Et.Replace:Et.Push,{formMethod:ye,formAction:xt,formEncType:nt}=v.navigation;!Q&&!ne&&ye&&xt&&nt&&(Q=L0(v.navigation));let pe=Q||ne;if(zP.has(V.response.status)&&pe&&Yn(pe.formMethod))await qe(ge,ee,{submission:at({},pe,{formAction:ce}),preventScrollReset:A});else{let Ke=Zh(ee,Q);await qe(ge,ee,{overrideNavigation:Ke,fetcherSubmission:ne,preventScrollReset:A})}}async function yt(M,V,U,Q){try{let ne=await YP(c,M,V,U,Q,s,i);return await Promise.all(ne.map((ue,ce)=>{if(nk(ue)){let ee=ue.result;return{type:rt.redirect,response:ZP(ee,V,U[ce].route.id,Q,u,d.v7_relativeSplatPath)}}return JP(ue)}))}catch(ne){return U.map(()=>({type:rt.error,error:ne}))}}async function fe(M,V,U,Q,ne){let[ue,...ce]=await Promise.all([U.length?yt("loader",ne,U,V):[],...Q.map(ee=>{if(ee.matches&&ee.match&&ee.controller){let ge=Zs(t.history,ee.path,ee.controller.signal);return yt("loader",ge,[ee.match],ee.matches).then(ye=>ye[0])}else return Promise.resolve({type:rt.error,error:Mn(404,{pathname:ee.path})})})]);return await Promise.all([O0(M,U,ue,ue.map(()=>ne.signal),!1,v.loaderData),O0(M,Q.map(ee=>ee.match),ce,Q.map(ee=>ee.controller?ee.controller.signal:null),!0)]),{loaderResults:ue,fetcherResults:ce}}function Be(){Ie=!0,pt.push(...Gs()),G.forEach((M,V)=>{B.has(V)&&(Ne.push(V),lr(V))})}function Fe(M,V,U){U===void 0&&(U={}),v.fetchers.set(M,V),le({fetchers:new Map(v.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function Xe(M,V,U,Q){Q===void 0&&(Q={});let ne=Za(v.matches,V);Xi(M),le({errors:{[ne.route.id]:U},fetchers:new Map(v.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function qt(M){return d.v7_fetcherPersist&&(J.set(M,(J.get(M)||0)+1),Z.has(M)&&Z.delete(M)),v.fetchers.get(M)||BP}function Xi(M){let V=v.fetchers.get(M);B.has(M)&&!(V&&V.state==="loading"&&Te.has(M))&&lr(M),G.delete(M),Te.delete(M),q.delete(M),Z.delete(M),v.fetchers.delete(M)}function iu(M){if(d.v7_fetcherPersist){let V=(J.get(M)||0)-1;V<=0?(J.delete(M),Z.add(M)):J.set(M,V)}else Xi(M);le({fetchers:new Map(v.fetchers)})}function lr(M){let V=B.get(M);Ee(V,"Expected fetch controller: "+M),V.abort(),B.delete(M)}function ni(M){for(let V of M){let U=qt(V),Q=hi(U.data);v.fetchers.set(V,Q)}}function aa(){let M=[],V=!1;for(let U of q){let Q=v.fetchers.get(U);Ee(Q,"Expected fetcher: "+U),Q.state==="loading"&&(q.delete(U),M.push(U),V=!0)}return ni(M),V}function la(M){let V=[];for(let[U,Q]of Te)if(Q<M){let ne=v.fetchers.get(U);Ee(ne,"Expected fetcher: "+U),ne.state==="loading"&&(lr(U),Te.delete(U),V.push(U))}return ni(V),V.length>0}function ua(M,V){let U=v.blockers.get(M)||Ca;return he.get(M)!==V&&he.set(M,V),U}function su(M){v.blockers.delete(M),he.delete(M)}function qs(M,V){let U=v.blockers.get(M)||Ca;Ee(U.state==="unblocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="proceeding"||U.state==="blocked"&&V.state==="unblocked"||U.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+U.state+" -> "+V.state);let Q=new Map(v.blockers);Q.set(M,V),le({blockers:Q})}function Ws(M){let{currentLocation:V,nextLocation:U,historyAction:Q}=M;if(he.size===0)return;he.size>1&&Ts(!1,"A router only supports one blocker at a time");let ne=Array.from(he.entries()),[ue,ce]=ne[ne.length-1],ee=v.blockers.get(ue);if(!(ee&&ee.state==="proceeding")&&ce({currentLocation:V,nextLocation:U,historyAction:Q}))return ue}function Gs(M){let V=[];return L.forEach((U,Q)=>{(!M||M(Q))&&(U.cancel(),V.push(Q),L.delete(Q))}),V}function ou(M,V,U){if(T=M,C=V,E=U||null,!P&&v.navigation===Jh){P=!0;let Q=Ks(v.location,v.matches);Q!=null&&le({restoreScrollPosition:Q})}return()=>{T=null,C=null,E=null}}function ri(M,V){return E&&E(M,V.map(Q=>wP(Q,v.loaderData)))||M.key}function ca(M,V){if(T&&C){let U=ri(M,V);T[U]=C()}}function Ks(M,V){if(T){let U=ri(M,V),Q=T[U];if(typeof Q=="number")return Q}return null}function Cr(M){s={},a=pp(M,i,void 0,s)}return z={get basename(){return u},get future(){return d},get state(){return v},get routes(){return o},get window(){return e},initialize:Ve,subscribe:xe,enableScrollRestoration:ou,navigate:mt,fetch:ar,revalidate:Ae,createHref:M=>t.history.createHref(M),encodeLocation:M=>t.history.encodeLocation(M),getFetcher:qt,deleteFetcher:iu,dispose:Se,getBlocker:ua,deleteBlocker:su,_internalFetchControllers:B,_internalActiveDeferreds:L,_internalSetRoutes:Cr},z}function WP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function gp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=lg(i||".",ag(u,s),Kr(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!hg(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:$r([n,d.pathname])),Is(d)}function S0(t,e,n,r){if(!r||!WP(r))return{path:n};if(r.formMethod&&!ik(r.formMethod))return{path:n,error:Mn(405,{method:r.formMethod})};let i=()=>({path:n,error:Mn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=dT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Yn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,E)=>{let[C,P]=E;return""+T+C+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Yn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=yp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=yp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=P0(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=P0(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Yn(d.formMethod))return{path:n,submission:d};let f=ei(n);return e&&f.search&&hg(f.search)&&u.append("index",""),f.search="?"+u,{path:Is(f),submission:d}}function GP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function x0(t,e,n,r,i,s,o,a,u,c,d,f,p,T,E,C){let P=C?Vn(C[1])?C[1].error:C[1].data:void 0,_=t.createURL(e.location),y=t.createURL(i),S=C&&Vn(C[1])?C[0]:void 0,b=S?GP(n,S):n,j=C?C[1].statusCode:void 0,z=o&&j&&j>=400,v=b.filter((A,R)=>{let{route:k}=A;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(KP(e.loaderData,e.matches[R],A)||u.some(te=>te===A.route.id))return!0;let D=e.matches[R],x=A;return A0(A,at({currentUrl:_,currentParams:D.params,nextUrl:y,nextParams:x.params},r,{actionResult:P,unstable_actionStatus:j,defaultShouldRevalidate:z?!1:a||_.pathname+_.search===y.pathname+y.search||_.search!==y.search||cT(D,x)}))}),w=[];return f.forEach((A,R)=>{if(s||!n.some(Ie=>Ie.route.id===A.routeId)||d.has(R))return;let k=yo(T,A.path,E);if(!k){w.push({key:R,routeId:A.routeId,path:A.path,matches:null,match:null,controller:null});return}let D=e.fetchers.get(R),x=vp(k,A.path),te=!1;p.has(R)?te=!1:c.includes(R)?te=!0:D&&D.state!=="idle"&&D.data===void 0?te=a:te=A0(x,at({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:j,defaultShouldRevalidate:z?!1:a})),te&&w.push({key:R,routeId:A.routeId,path:A.path,matches:k,match:x,controller:new AbortController})}),[v,w]}function KP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function cT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function A0(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function C0(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Ee(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Ts(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!vP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,at({},e(i),{lazy:void 0}))}function QP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function YP(t,e,n,r,i,s,o,a){let u=r.reduce((f,p)=>f.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let p=u.has(f.route.id);return at({},f,{shouldLoad:p,resolve:E=>(c.add(f.route.id),p?XP(e,n,f,s,o,E,a):Promise.resolve({type:rt.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>Ee(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,p)=>u.has(i[p].route.id))}async function XP(t,e,n,r,i,s,o){let a,u,c=d=>{let f,p=new Promise((C,P)=>f=P);u=()=>f(),e.signal.addEventListener("abort",u);let T=C=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...C!==void 0?[C]:[]),E;return s?E=s(C=>T(C)):E=(async()=>{try{return{type:"data",result:await T()}}catch(C){return{type:"error",result:C}}})(),Promise.race([E,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[p]=await Promise.all([c(d).catch(T=>{f=T}),C0(n.route,i,r)]);if(f!==void 0)throw f;a=p}else if(await C0(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),p=f.pathname+f.search;throw Mn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:rt.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),p=f.pathname+f.search;throw Mn(404,{pathname:p})}Ee(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:rt.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function JP(t){let{result:e,type:n,status:r}=t;if(hT(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:rt.error,error:a}}return n===rt.error?{type:rt.error,error:new ug(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:rt.data,data:o,statusCode:e.status,headers:e.headers}}if(n===rt.error)return{type:rt.error,error:e,statusCode:cg(e)?e.status:r};if(rk(e)){var i,s;return{type:rt.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:rt.data,data:e,statusCode:r}}function ZP(t,e,n,r,i,s){let o=t.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!dg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=gp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function R0(t,e,n){if(dg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Kr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Zs(t,e,n,r){let i=t.createURL(dT(e)).toString(),s={signal:n};if(r&&Yn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=yp(r.formData):s.body=r.formData}return new Request(i,s)}function yp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function P0(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ek(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&Vn(r[1])?r[1].error:void 0;return n.forEach((p,T)=>{let E=e[T].route.id;if(Ee(!cs(p),"Cannot handle redirect results in processLoaderData"),Vn(p)){let C=p.error;f!==void 0&&(C=f,f=void 0),a=a||{};{let P=Za(t,E);a[P.route.id]==null&&(a[P.route.id]=C)}o[E]=void 0,c||(c=!0,u=cg(p.error)?p.error.status:500),p.headers&&(d[E]=p.headers)}else us(p)?(i.set(E,p.deferredData),o[E]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[E]=p.headers)):(o[E]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[E]=p.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function k0(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=ek(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:p,controller:T}=s[d];Ee(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let E=o[d];if(!(T&&T.signal.aborted))if(Vn(E)){let C=Za(t.matches,p==null?void 0:p.route.id);c&&c[C.route.id]||(c=at({},c,{[C.route.id]:E.error})),t.fetchers.delete(f)}else if(cs(E))Ee(!1,"Unhandled fetcher revalidation redirect");else if(us(E))Ee(!1,"Unhandled fetcher deferred data");else{let C=hi(E.data);t.fetchers.set(f,C)}}return{loaderData:u,errors:c}}function b0(t,e,n,r){let i=at({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function D0(t){return t?Vn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Za(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function N0(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Mn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new ug(t||500,o,new Error(a),!0)}function M0(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(cs(n))return{result:n,idx:e}}}function dT(t){let e=typeof t=="string"?ei(t):t;return Is(at({},e,{hash:""}))}function tk(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function nk(t){return hT(t.result)&&$P.has(t.result.status)}function us(t){return t.type===rt.deferred}function Vn(t){return t.type===rt.error}function cs(t){return(t&&t.type)===rt.redirect}function rk(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function hT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ik(t){return UP.has(t.toLowerCase())}function Yn(t){return jP.has(t.toLowerCase())}async function O0(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!cT(c,u)&&(s&&s[u.route.id])!==void 0;if(us(a)&&(i||d)){let f=r[o];Ee(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await fT(a,f,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function fT(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:rt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:rt.error,error:i}}return{type:rt.data,data:t.deferredData.data}}}function hg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function vp(t,e){let n=typeof e=="string"?ei(e).search:e.search;if(t[t.length-1].route.index&&hg(n||""))return t[t.length-1];let r=aT(t);return r[r.length-1]}function L0(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Zh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function sk(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ra(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ok(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function hi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ak(t,e){try{let n=t.sessionStorage.getItem(uT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function lk(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(uT,JSON.stringify(n))}catch(r){Ts(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fc.apply(this,arguments)}const Fl=N.createContext(null),fg=N.createContext(null),qi=N.createContext(null),pg=N.createContext(null),ti=N.createContext({outlet:null,matches:[],isDataRoute:!1}),pT=N.createContext(null);function uk(t,e){let{relative:n}=e===void 0?{}:e;Ul()||Ee(!1);let{basename:r,navigator:i}=N.useContext(qi),{hash:s,pathname:o,search:a}=Hd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:$r([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ul(){return N.useContext(pg)!=null}function Os(){return Ul()||Ee(!1),N.useContext(pg).location}function mT(t){N.useContext(qi).static||N.useLayoutEffect(t)}function Wi(){let{isDataRoute:t}=N.useContext(ti);return t?Ik():ck()}function ck(){Ul()||Ee(!1);let t=N.useContext(Fl),{basename:e,future:n,navigator:r}=N.useContext(qi),{matches:i}=N.useContext(ti),{pathname:s}=Os(),o=JSON.stringify(ag(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return mT(()=>{a.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=lg(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:$r([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const dk=N.createContext(null);function hk(t){let e=N.useContext(ti).outlet;return e&&N.createElement(dk.Provider,{value:t},e)}function mg(){let{matches:t}=N.useContext(ti),e=t[t.length-1];return e?e.params:{}}function Hd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(qi),{matches:i}=N.useContext(ti),{pathname:s}=Os(),o=JSON.stringify(ag(i,r.v7_relativeSplatPath));return N.useMemo(()=>lg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fk(t,e,n,r){Ul()||Ee(!1);let{navigator:i}=N.useContext(qi),{matches:s}=N.useContext(ti),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Os(),d;d=c;let f=d.pathname||"/",p=f;if(u!=="/"){let C=u.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(C.length).join("/")}let T=yo(t,{pathname:p});return vk(T&&T.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:$r([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:$r([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r)}function pk(){let t=Tk(),e=cg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const mk=N.createElement(pk,null);class gk extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(ti.Provider,{value:this.props.routeContext},N.createElement(pT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yk(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Fl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(ti.Provider,{value:e},r)}function vk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:T}=n,E=f.route.loader&&p[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let T,E=!1,C=null,P=null;n&&(T=a&&f.route.id?a[f.route.id]:void 0,C=f.route.errorElement||mk,u&&(c<0&&p===0?(E=!0,P=null):c===p&&(E=!0,P=f.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,p+1)),y=()=>{let S;return T?S=C:E?S=P:f.route.Component?S=N.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,N.createElement(yk,{match:f,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(gk,{location:n.location,revalidation:n.revalidation,component:C,error:T,children:y(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):y()},null)}var gT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gT||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function _k(t){let e=N.useContext(Fl);return e||Ee(!1),e}function wk(t){let e=N.useContext(fg);return e||Ee(!1),e}function Ek(t){let e=N.useContext(ti);return e||Ee(!1),e}function yT(t){let e=Ek(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Tk(){var t;let e=N.useContext(pT),n=wk(Uc.UseRouteError),r=yT(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ik(){let{router:t}=_k(gT.UseNavigateStable),e=yT(Uc.UseNavigateStable),n=N.useRef(!1);return mT(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fc({fromRouteId:e},s)))},[t,e])}function Sk(t){return hk(t.context)}function dr(t){Ee(!1)}function xk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:s,static:o=!1,future:a}=t;Ul()&&Ee(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:Fc({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:f="",hash:p="",state:T=null,key:E="default"}=r,C=N.useMemo(()=>{let P=Kr(d,u);return P==null?null:{location:{pathname:P,search:f,hash:p,state:T,key:E},navigationType:i}},[u,d,f,p,T,E,i]);return C==null?null:N.createElement(qi.Provider,{value:c},N.createElement(pg.Provider,{children:n,value:C}))}new Promise(()=>{});function _p(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,_p(r.props.children,s));return}r.type!==dr&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_p(r.props.children,s)),n.push(o)}),n}function Ak(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:N.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:N.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:N.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}function vT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ck(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Rk(t,e){return t.button===0&&(!e||e==="_self")&&!Ck(t)}const Pk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],bk="6";try{window.__reactRouterVersion=bk}catch{}function Dk(t,e){return qP({basename:void 0,future:Fo({},void 0,{v7_prependBasename:!0}),history:mP({window:void 0}),hydrationData:Nk(),routes:t,mapRouteProperties:Ak,unstable_dataStrategy:void 0,window:void 0}).initialize()}function Nk(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Fo({},e,{errors:Mk(e.errors)})),e}function Mk(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new ug(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const _T=N.createContext({isTransitioning:!1}),Ok=N.createContext(new Map),Lk="startTransition",V0=Xx[Lk],Vk="flushSync",j0=uR[Vk];function jk(t){V0?V0(t):t()}function Pa(t){j0?j0(t):t()}let Fk=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Uk(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=N.useState(n.state),[o,a]=N.useState(),[u,c]=N.useState({isTransitioning:!1}),[d,f]=N.useState(),[p,T]=N.useState(),[E,C]=N.useState(),P=N.useRef(new Map),{v7_startTransition:_}=r||{},y=N.useCallback(v=>{_?jk(v):v()},[_]),S=N.useCallback((v,w)=>{let{deletedFetchers:A,unstable_flushSync:R,unstable_viewTransitionOpts:k}=w;A.forEach(x=>P.current.delete(x)),v.fetchers.forEach((x,te)=>{x.data!==void 0&&P.current.set(te,x.data)});let D=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||D){R?Pa(()=>s(v)):y(()=>s(v));return}if(R){Pa(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let x=n.window.document.startViewTransition(()=>{Pa(()=>s(v))});x.finished.finally(()=>{Pa(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})})}),Pa(()=>T(x));return}p?(d&&d.resolve(),p.skipTransition(),C({state:v,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(v),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,p,d,P,y]);N.useLayoutEffect(()=>n.subscribe(S),[n,S]),N.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new Fk)},[u]),N.useEffect(()=>{if(d&&o&&n.window){let v=o,w=d.promise,A=n.window.document.startViewTransition(async()=>{y(()=>s(v)),await w});A.finished.finally(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})}),T(A)}},[y,o,d,n.window]),N.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),N.useEffect(()=>{!u.isTransitioning&&E&&(a(E.state),c({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),C(void 0))},[u.isTransitioning,E]),N.useEffect(()=>{},[]);let b=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:v=>n.navigate(v),push:(v,w,A)=>n.navigate(v,{state:w,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(v,w,A)=>n.navigate(v,{replace:!0,state:w,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),j=n.basename||"/",z=N.useMemo(()=>({router:n,navigator:b,static:!1,basename:j}),[n,b,j]);return N.createElement(N.Fragment,null,N.createElement(Fl.Provider,{value:z},N.createElement(fg.Provider,{value:i},N.createElement(Ok.Provider,{value:P.current},N.createElement(_T.Provider,{value:u},N.createElement(xk,{basename:j,location:i.location,navigationType:i.historyAction,navigator:b,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?N.createElement($k,{routes:n.routes,future:n.future,state:i}):e))))),null)}function $k(t){let{routes:e,future:n,state:r}=t;return fk(e,void 0,r,n)}const zk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ls=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,p=vT(e,Pk),{basename:T}=N.useContext(qi),E,C=!1;if(typeof c=="string"&&Bk.test(c)&&(E=c,zk))try{let S=new URL(window.location.href),b=c.startsWith("//")?new URL(S.protocol+c):new URL(c),j=Kr(b.pathname,T);b.origin===S.origin&&j!=null?c=j+b.search+b.hash:C=!0}catch{}let P=uk(c,{relative:i}),_=qk(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function y(S){r&&r(S),S.defaultPrevented||_(S)}return N.createElement("a",Fo({},p,{href:E||P,onClick:C||s?r:y,ref:n,target:u}))}),wp=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:d}=e,f=vT(e,kk),p=Hd(u,{relative:f.relative}),T=Os(),E=N.useContext(fg),{navigator:C,basename:P}=N.useContext(qi),_=E!=null&&Wk(p)&&c===!0,y=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,S=T.pathname,b=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(S=S.toLowerCase(),b=b?b.toLowerCase():null,y=y.toLowerCase()),b&&P&&(b=Kr(b,P)||b);const j=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let z=S===y||!o&&S.startsWith(y)&&S.charAt(j)==="/",v=b!=null&&(b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/"),w={isActive:z,isPending:v,isTransitioning:_},A=z?r:void 0,R;typeof s=="function"?R=s(w):R=[s,z?"active":null,v?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(w):a;return N.createElement(Ls,Fo({},f,{"aria-current":A,className:R,ref:n,style:k,to:u,unstable_viewTransition:c}),typeof d=="function"?d(w):d)});var Ep;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ep||(Ep={}));var F0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F0||(F0={}));function Hk(t){let e=N.useContext(Fl);return e||Ee(!1),e}function qk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Wi(),c=Os(),d=Hd(t,{relative:o});return N.useCallback(f=>{if(Rk(f,n)){f.preventDefault();let p=r!==void 0?r:Is(c)===Is(d);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function Wk(t,e){e===void 0&&(e={});let n=N.useContext(_T);n==null&&Ee(!1);let{basename:r}=Hk(Ep.useViewTransitionState),i=Hd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Kr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Kr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mp(i.pathname,o)!=null||mp(i.pathname,s)!=null}var U0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ET={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,T=c&63;u||(T=64,o||(p=64)),r.push(n[d],n[f],n[p],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Kk;const p=s<<2|a>>4;if(r.push(p),c!==64){const T=a<<4&240|c>>2;if(r.push(T),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qk=function(t){const e=wT(t);return ET.encodeByteArray(e,!0)},$c=function(t){return Qk(t).replace(/\./g,"")},TT=function(t){try{return ET.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xk=()=>Yk().__FIREBASE_DEFAULTS__,Jk=()=>{if(typeof process>"u"||typeof U0>"u")return;const t=U0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&TT(t[1]);return e&&JSON.parse(e)},qd=()=>{try{return Xk()||Jk()||Zk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IT=t=>{var e,n;return(n=(e=qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eb=t=>{const e=IT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ST=()=>{var t;return(t=qd())===null||t===void 0?void 0:t.config},xT=t=>{var e;return(e=qd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function ib(){var t;const e=(t=qd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ob(){const t=Ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ab(){return!ib()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yg(){try{return typeof indexedDB=="object"}catch{return!1}}function vg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function AT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lb,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vs.prototype.create)}}class Vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ub(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function ub(t,e){return t.replace(cb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cb=/\{\$([^}]+)}/g;function db(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($0(s)&&$0(o)){if(!Ss(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function La(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hb(t,e){const n=new fb(t,e);return n.subscribe.bind(n)}class fb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ef),i.error===void 0&&(i.error=ef),i.complete===void 0&&(i.complete=ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ef(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=1e3,gb=2,yb=4*60*60*1e3,vb=.5;function z0(t,e=mb,n=gb){const r=e*Math.pow(n,t),i=Math.round(vb*r*(Math.random()-.5)*2);return Math.min(yb,r+i)}/**
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eb(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wb(t){return t===is?void 0:t}function Eb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _b(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const Ib={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Sb=ke.INFO,xb={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Ab=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wd{constructor(e){this.name=e,this._logLevel=Sb,this._logHandler=Ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ib[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Cb=(t,e)=>e.some(n=>t instanceof n);let B0,H0;function Rb(){return B0||(B0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return H0||(H0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Tp=new WeakMap,RT=new WeakMap,tf=new WeakMap,_g=new WeakMap;function kb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ni(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),_g.set(e,t),e}function bb(t){if(Tp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tp.set(t,e)}let Ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Db(t){Ip=t(Ip)}function Nb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nf(this),e,...n);return RT.set(r,e.sort?e.sort():[e]),Ni(r)}:Pb().includes(t)?function(...e){return t.apply(nf(this),e),Ni(CT.get(this))}:function(...e){return Ni(t.apply(nf(this),e))}}function Mb(t){return typeof t=="function"?Nb(t):(t instanceof IDBTransaction&&bb(t),Cb(t,Rb())?new Proxy(t,Ip):t)}function Ni(t){if(t instanceof IDBRequest)return kb(t);if(tf.has(t))return tf.get(t);const e=Mb(t);return e!==t&&(tf.set(t,e),_g.set(e,t)),e}const nf=t=>_g.get(t);function PT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ni(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ni(o.result),u.oldVersion,u.newVersion,Ni(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ob=["get","getKey","getAll","getAllKeys","count"],Lb=["put","add","delete","clear"],rf=new Map;function q0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rf.get(e))return rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ob.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return rf.set(e,s),s}Db(t=>({...t,get:(e,n,r)=>q0(e,n)||t.get(e,n,r),has:(e,n)=>!!q0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sp="@firebase/app",W0="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Wd("@firebase/app"),Fb="@firebase/app-compat",Ub="@firebase/analytics-compat",$b="@firebase/analytics",zb="@firebase/app-check-compat",Bb="@firebase/app-check",Hb="@firebase/auth",qb="@firebase/auth-compat",Wb="@firebase/database",Gb="@firebase/database-compat",Kb="@firebase/functions",Qb="@firebase/functions-compat",Yb="@firebase/installations",Xb="@firebase/installations-compat",Jb="@firebase/messaging",Zb="@firebase/messaging-compat",e2="@firebase/performance",t2="@firebase/performance-compat",n2="@firebase/remote-config",r2="@firebase/remote-config-compat",i2="@firebase/storage",s2="@firebase/storage-compat",o2="@firebase/firestore",a2="@firebase/vertexai-preview",l2="@firebase/firestore-compat",u2="firebase",c2="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="[DEFAULT]",d2={[Sp]:"fire-core",[Fb]:"fire-core-compat",[$b]:"fire-analytics",[Ub]:"fire-analytics-compat",[Bb]:"fire-app-check",[zb]:"fire-app-check-compat",[Hb]:"fire-auth",[qb]:"fire-auth-compat",[Wb]:"fire-rtdb",[Gb]:"fire-rtdb-compat",[Kb]:"fire-fn",[Qb]:"fire-fn-compat",[Yb]:"fire-iid",[Xb]:"fire-iid-compat",[Jb]:"fire-fcm",[Zb]:"fire-fcm-compat",[e2]:"fire-perf",[t2]:"fire-perf-compat",[n2]:"fire-rc",[r2]:"fire-rc-compat",[i2]:"fire-gcs",[s2]:"fire-gcs-compat",[o2]:"fire-fst",[l2]:"fire-fst-compat",[a2]:"fire-vertex","fire-js":"fire-js",[u2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,h2=new Map,Ap=new Map;function G0(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sr(t){const e=t.name;if(Ap.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;Ap.set(e,t);for(const n of zc.values())G0(n,t);for(const n of h2.values())G0(n,t);return!0}function js(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mi=new Vs("app","Firebase",f2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=c2;function kT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Mi.create("bad-app-name",{appName:String(i)});if(n||(n=ST()),!n)throw Mi.create("no-options");const s=zc.get(i);if(s){if(Ss(n,s.options)&&Ss(r,s.config))return s;throw Mi.create("duplicate-app",{appName:i})}const o=new Tb(i);for(const u of Ap.values())o.addComponent(u);const a=new p2(n,r,o);return zc.set(i,a),a}function wg(t=xp){const e=zc.get(t);if(!e&&t===xp&&ST())return kT();if(!e)throw Mi.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let i=(r=d2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Sr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const m2="firebase-heartbeat-database",g2=1,xl="firebase-heartbeat-store";let sf=null;function bT(){return sf||(sf=PT(m2,g2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mi.create("idb-open",{originalErrorMessage:t.message})})),sf}async function y2(t){try{const n=(await bT()).transaction(xl),r=await n.objectStore(xl).get(DT(t));return await n.done,r}catch(e){if(e instanceof sr)xs.warn(e.message);else{const n=Mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function K0(t,e){try{const r=(await bT()).transaction(xl,"readwrite");await r.objectStore(xl).put(e,DT(t)),await r.done}catch(n){if(n instanceof sr)xs.warn(n.message);else{const r=Mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function DT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const v2=1024,_2=30*24*60*60*1e3;class w2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new T2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Q0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Q0(),{heartbeatsToSend:r,unsentEntries:i}=E2(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Q0(){return new Date().toISOString().substring(0,10)}function E2(t,e=v2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Y0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Y0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class T2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yg()?vg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return K0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return K0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Y0(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(t){Sr(new tr("platform-logger",e=>new Vb(e),"PRIVATE")),Sr(new tr("heartbeat",e=>new w2(e),"PRIVATE")),Un(Sp,W0,t),Un(Sp,W0,"esm2017"),Un("fire-js","")}I2("");function Eg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S2=NT,MT=new Vs("auth","Firebase",NT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Wd("@firebase/auth");function x2(t,...e){Bc.logLevel<=ke.WARN&&Bc.warn(`Auth (${ea}): ${t}`,...e)}function tc(t,...e){Bc.logLevel<=ke.ERROR&&Bc.error(`Auth (${ea}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw Tg(t,...e)}function _r(t,...e){return Tg(t,...e)}function OT(t,e,n){const r=Object.assign(Object.assign({},S2()),{[e]:n});return new Vs("auth","Firebase",r).create(e,{appName:t.name})}function zr(t){return OT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return MT.create(t,...e)}function me(t,e,...n){if(!t)throw Tg(e,...n)}function Vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tc(e),new Error(e)}function Qr(t,e){t||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A2(){return X0()==="http:"||X0()==="https:"}function X0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A2()||gg()||"connection"in navigator)?navigator.onLine:!0}function R2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qr(n>e,"Short delay should be less than long delay!"),this.isMobile=rb()||sb()}get(){return C2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){Qr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new zl(3e4,6e4);function Gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,r,i={}){return VT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$l(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),LT.fetch()(jT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function VT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P2),e);try{const i=new D2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Lu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw OT(t,d,c);nr(t,d)}}catch(i){if(i instanceof sr)throw i;nr(t,"network-request-failed",{message:String(i)})}}async function Bl(t,e,n,r,i={}){const s=await Ki(t,e,n,r,i);return"mfaPendingCredential"in s&&nr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ig(t.config,i):`${t.config.apiScheme}://${i}`}function b2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),k2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_r(t,e,r);return i.customData._tokenResponse=n,i}function J0(t){return t!==void 0&&t.enterprise!==void 0}class N2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return b2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function M2(t,e){return Ki(t,"GET","/v2/recaptchaConfig",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function FT(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L2(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=Sg(r);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:el(of(i.auth_time)),issuedAtTime:el(of(i.iat)),expirationTime:el(of(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function of(t){return Number(t)*1e3}function Sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=TT(n);return i?JSON.parse(i):(tc("Failed to decode base64 JWT payload"),null)}catch(i){return tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Z0(t){const e=Sg(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&V2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Al(t,FT(n,{idToken:r}));me(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UT(s.providerUserInfo):[],a=U2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function F2(t){const e=Nt(t);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UT(t){return t.map(e=>{var{providerId:n}=e,r=Eg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e){const n=await VT(t,{},async()=>{const r=$l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z2(t,e){return Ki(t,"POST","/v2/accounts:revokeToken",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Z0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ao;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(me(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Eg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Al(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L2(this,e)}reload(){return F2(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await Al(this,O2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:b,isAnonymous:j,providerData:z,stsTokenManager:v}=n;me(S&&v,e,"internal-error");const w=Ao.fromJSON(this.name,v);me(typeof S=="string",e,"internal-error"),di(f,e.name),di(p,e.name),me(typeof b=="boolean",e,"internal-error"),me(typeof j=="boolean",e,"internal-error"),di(T,e.name),di(E,e.name),di(C,e.name),di(P,e.name),di(_,e.name),di(y,e.name);const A=new jr({uid:S,auth:e,email:p,emailVerified:b,displayName:f,isAnonymous:j,photoURL:E,phoneNumber:T,tenantId:C,stsTokenManager:w,createdAt:_,lastLoginAt:y});return z&&Array.isArray(z)&&(A.providerData=z.map(R=>Object.assign({},R))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ao;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];me(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?UT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ao;a.updateFromIdToken(r);const u=new jr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function Fr(t){Qr(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(Qr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$T.type="NONE";const t_=$T;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class Co{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,s),this.fullPersistenceKey=nc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Co(Fr(t_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fr(t_);const o=nc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=jr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Co(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Co(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(HT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WT(e))return"Blackberry";if(GT(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||BT(e))&&!e.includes("edge/"))return"Chrome";if(qT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zT(t=Ht()){return/firefox\//i.test(t)}function xg(t=Ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BT(t=Ht()){return/crios\//i.test(t)}function HT(t=Ht()){return/iemobile/i.test(t)}function qT(t=Ht()){return/android/i.test(t)}function WT(t=Ht()){return/blackberry/i.test(t)}function GT(t=Ht()){return/webos/i.test(t)}function Gd(t=Ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function B2(t=Ht()){var e;return Gd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H2(){return ob()&&document.documentMode===10}function KT(t=Ht()){return Gd(t)||qT(t)||GT(t)||WT(t)||/windows phone/i.test(t)||HT(t)}function q2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e=[]){let n;switch(t){case"Browser":n=n_(Ht());break;case"Worker":n=`${n_(Ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ea}/${r}`}/**
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
 */class W2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G2(t,e={}){return Ki(t,"GET","/v2/passwordPolicy",Gi(t,e))}/**
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
 */const K2=6;class Q2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:K2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r_(this),this.idTokenSubscription=new r_(this),this.beforeStateQueue=new W2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Co.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await FT(this,{idToken:e}),r=await jr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(zr(this));const n=e?Nt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G2(this),n=new Q2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await z2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fr(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[Fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(t){return Nt(t)}class r_{constructor(e){this.auth=e,this.observer=null,this.addObserver=hb(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X2(t){Kd=t}function YT(t){return Kd.loadJS(t)}function J2(){return Kd.recaptchaEnterpriseScript}function Z2(){return Kd.gapiScript}function eD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tD="recaptcha-enterprise",nD="NO_RECAPTCHA";class rD{constructor(e){this.type=tD,this.auth=Fs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{M2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new N2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;J0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(nD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&J0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=J2();u.length!==0&&(u+=a),YT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function i_(t,e,n,r=!1){const i=new rD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Pp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await i_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e){const n=js(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ss(s,e??{}))return i;nr(i,"already-initialized")}return n.initialize({options:e})}function sD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oD(t,e,n){const r=Fs(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=XT(e),{host:o,port:a}=aD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),lD()}function XT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aD(t){const e=XT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s_(o)}}}function s_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,n){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function uD(t,e){return Ki(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e){return Bl(t,"POST","/v1/accounts:signInWithPassword",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}async function hD(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pp(e,n,"signInWithPassword",cD);case"emailLink":return dD(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pp(e,r,"signUpPassword",uD);case"emailLink":return hD(e,{idToken:n,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="http://localhost";class As extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Eg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new As(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ro(e,n)}buildRequest(){const e={requestUri:fD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$l(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mD(t){const e=La(Va(t)).link,n=e?La(Va(e)).deep_link_id:null,r=La(Va(t)).deep_link_id;return(r?La(Va(r)).link:null)||r||n||e||t}class Cg{constructor(e){var n,r,i,s,o,a;const u=La(Va(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=pD((i=u.mode)!==null&&i!==void 0?i:null);me(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mD(e);try{return new Cg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.providerId=ta.PROVIDER_ID}static credential(e,n){return Cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cg.parseLink(n);return me(r,"argument-error"),Cl._fromEmailAndCode(e,r.code,r.tenantId)}}ta.PROVIDER_ID="password";ta.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ta.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends JT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Hl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vi.credential(n,r)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Hl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Hl{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wi.credential(n,r)}catch{return null}}}wi.TWITTER_SIGN_IN_METHOD="twitter.com";wi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){return Bl(t,"POST","/v1/accounts:signUp",Gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=o_(r);return new Cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o_(r);return new Cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function ZT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function yD(t,e,n=!1){const r=await Al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e,n=!1){const{auth:r}=t;if(gr(r.app))return Promise.reject(zr(r));const i="reauthenticate";try{const s=await Al(t,ZT(r,i,e,t),n);me(s.idToken,r,"internal-error");const o=Sg(s.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),Cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e,n=!1){if(gr(t.app))return Promise.reject(zr(t));const r="signIn",i=await ZT(t,r,e),s=await Cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _D(t,e){return eI(Fs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t){const e=Fs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wD(t,e,n){if(gr(t.app))return Promise.reject(zr(t));const r=Fs(t),o=await Pp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&tI(t),u}),a=await Cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ED(t,e,n){return gr(t.app)?Promise.reject(zr(t)):_D(Nt(t),ta.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tI(t),r})}function TD(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function ID(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}const Wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){const t=Ht();return xg(t)||Gd(t)}const xD=1e3,AD=10;class rI extends nI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SD()&&q2(),this.fallbackToPolling=KT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rI.type="LOCAL";const CD=rI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends nI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iI.type="SESSION";const sI=iI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await RD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Rg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){return window}function kD(t){wr().location.href=t}/**
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
 */function oI(){return typeof wr().WorkerGlobalScope<"u"&&typeof wr().importScripts=="function"}async function bD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ND(){return oI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="firebaseLocalStorageDb",MD=1,Gc="firebaseLocalStorage",lI="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yd(t,e){return t.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function OD(){const t=indexedDB.deleteDatabase(aI);return new ql(t).toPromise()}function kp(){const t=indexedDB.open(aI,MD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gc,{keyPath:lI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gc)?e(r):(r.close(),await OD(),e(await kp()))})})}async function a_(t,e,n){const r=Yd(t,!0).put({[lI]:e,value:n});return new ql(r).toPromise()}async function LD(t,e){const n=Yd(t,!1).get(e),r=await new ql(n).toPromise();return r===void 0?null:r.value}function l_(t,e){const n=Yd(t,!0).delete(e);return new ql(n).toPromise()}const VD=800,jD=3;class uI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qd._getInstance(ND()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bD(),!this.activeServiceWorker)return;this.sender=new PD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kp();return await a_(e,Wc,"1"),await l_(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yd(i,!1).getAll();return new ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uI.type="LOCAL";const FD=uI;new zl(3e4,6e4);/**
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
 */function UD(t,e){return e?Fr(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $D(t){return eI(t.auth,new Pg(t),t.bypassAuthState)}function zD(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),vD(n,new Pg(t),t.bypassAuthState)}async function BD(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),yD(n,new Pg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $D;case"linkViaPopup":case"linkViaRedirect":return BD;case"reauthViaPopup":case"reauthViaRedirect":return zD;default:nr(this.auth,"internal-error")}}resolve(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=new zl(2e3,1e4);class vo extends cI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vo.currentPopupAction&&vo.currentPopupAction.cancel(),vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Qr(this.filter.length===1,"Popup operations only handle one event");const e=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HD.get())};e()}}vo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD="pendingRedirect",rc=new Map;class WD extends cI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await GD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GD(t,e){const n=YD(e),r=QD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KD(t,e){rc.set(t._key(),e)}function QD(t){return Fr(t._redirectPersistence)}function YD(t){return nc(qD,t.config.apiKey,t.name)}async function XD(t,e,n=!1){if(gr(t.app))return Promise.reject(zr(t));const r=Fs(t),i=UD(r,e),o=await new WD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=10*60*1e3;class ZD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_r(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JD&&this.cachedEventUids.clear(),this.cachedEventUids.has(u_(e))}saveEventToCache(e){this.cachedEventUids.add(u_(e)),this.lastProcessedEventTime=Date.now()}}function u_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rN=/^https?/;async function iN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tN(t);for(const n of e)try{if(sN(n))return}catch{}nr(t,"unauthorized-domain")}function sN(t){const e=Cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rN.test(n))return!1;if(nN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oN=new zl(3e4,6e4);function c_(){const t=wr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aN(t){return new Promise((e,n)=>{var r,i,s;function o(){c_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c_(),n(_r(t,"network-request-failed"))},timeout:oN.get()})}if(!((i=(r=wr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wr().gapi)===null||s===void 0)&&s.load)o();else{const a=eD("iframefcb");return wr()[a]=()=>{gapi.load?o():n(_r(t,"network-request-failed"))},YT(`${Z2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ic=null,e})}let ic=null;function lN(t){return ic=ic||aN(t),ic}/**
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
 */const uN=new zl(5e3,15e3),cN="__/auth/iframe",dN="emulator/auth/iframe",hN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pN(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ig(e,dN):`https://${t.config.authDomain}/${cN}`,r={apiKey:e.apiKey,appName:t.name,v:ea},i=fN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$l(r).slice(1)}`}async function mN(t){const e=await lN(t),n=wr().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:pN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_r(t,"network-request-failed"),a=wr().setTimeout(()=>{s(o)},uN.get());function u(){wr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const gN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yN=500,vN=600,_N="_blank",wN="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EN(t,e,n,r=yN,i=vN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},gN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ht().toLowerCase();n&&(a=BT(c)?_N:n),zT(c)&&(e=e||wN,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[T,E])=>`${p}${T}=${E},`,"");if(B2(c)&&a!=="_self")return TN(e||"",a),new d_(null);const f=window.open(e||"",a,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new d_(f)}function TN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IN="__/auth/handler",SN="emulator/auth/handler",xN=encodeURIComponent("fac");async function h_(t,e,n,r,i,s){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ea,eventId:i};if(e instanceof JT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",db(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Hl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${xN}=${encodeURIComponent(u)}`:"";return`${AN(t)}?${$l(a).slice(1)}${c}`}function AN({config:t}){return t.emulator?Ig(t,SN):`https://${t.authDomain}/${IN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="webStorageSupport";class CN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sI,this._completeRedirectFn=XD,this._overrideRedirectResult=KD}async _openPopup(e,n,r,i){var s;Qr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await h_(e,n,r,Cp(),i);return EN(e,o,Rg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await h_(e,n,r,Cp(),i);return kD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mN(e),r=new ZD(e);return n.register("authEvent",i=>(me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(af,{type:af},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[af];o!==void 0&&n(!!o),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KT()||xg()||Gd()}}const RN=CN;var f_="@firebase/auth",p_="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bN(t){Sr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QT(t)},c=new Y2(r,i,s,u);return sD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sr(new tr("auth-internal",e=>{const n=Fs(e.getProvider("auth").getImmediate());return(r=>new PN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(f_,p_,kN(t)),Un(f_,p_,"esm2017")}/**
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
 */const DN=5*60,NN=xT("authIdTokenMaxAge")||DN;let m_=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NN)return;const i=n==null?void 0:n.token;m_!==i&&(m_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wl(t=wg()){const e=js(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iD(t,{popupRedirectResolver:RN,persistence:[FD,CD,sI]}),r=xT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MN(s.toString());ID(n,o,()=>o(n.currentUser)),TD(n,a=>o(a))}}const i=IT("auth");return i&&oD(n,`http://${i}`),n}function ON(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}X2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_r("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ON().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bN("Browser");const g_=$(({className:t,children:e,to:n})=>{const i=Os().pathname===n;return g.jsx(Ls,{to:n,className:t,style:{"--link-background-color":i?"var(--blue900)":"white","--link-color":i?"white":"var(--blue900)"},children:e})})`
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
`,hI=$(({className:t})=>g.jsxs("div",{className:t,children:[g.jsx(g_,{to:"/sign_in",children:"Sign In"}),g.jsx(g_,{to:"/sign_up",children:"Sign Up"})]}))`
  display: flex;
`,y_=$(({Icon:t,className:e,...n})=>g.jsxs("div",{className:e,children:[g.jsx("input",{...n}),g.jsx(t,{})]}))`
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
`,LN=$(({className:t})=>{const e=Wi(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Wl();ED(s,i.get("email"),i.get("password")),e("/")};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:n,children:[g.jsx(hI,{}),g.jsx(y_,{Icon:D5,id:"email",type:"email",name:"email"}),g.jsx(y_,{Icon:N5,id:"password",type:"password",name:"password"}),g.jsx(Ge,{type:"submit",text:"Sign In"})]})})})`
  --form-padding: 16px;
  height: 100%;
  background: var(--gray100);
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
`;var v_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,fI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,w){function A(){}A.prototype=w.prototype,v.D=w.prototype,v.prototype=new A,v.prototype.constructor=v,v.C=function(R,k,D){for(var x=Array(arguments.length-2),te=2;te<arguments.length;te++)x[te-2]=arguments[te];return w.prototype[k].apply(R,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,w,A){A||(A=0);var R=Array(16);if(typeof w=="string")for(var k=0;16>k;++k)R[k]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(k=0;16>k;++k)R[k]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=v.g[0],A=v.g[1],k=v.g[2];var D=v.g[3],x=w+(D^A&(k^D))+R[0]+3614090360&4294967295;w=A+(x<<7&4294967295|x>>>25),x=D+(k^w&(A^k))+R[1]+3905402710&4294967295,D=w+(x<<12&4294967295|x>>>20),x=k+(A^D&(w^A))+R[2]+606105819&4294967295,k=D+(x<<17&4294967295|x>>>15),x=A+(w^k&(D^w))+R[3]+3250441966&4294967295,A=k+(x<<22&4294967295|x>>>10),x=w+(D^A&(k^D))+R[4]+4118548399&4294967295,w=A+(x<<7&4294967295|x>>>25),x=D+(k^w&(A^k))+R[5]+1200080426&4294967295,D=w+(x<<12&4294967295|x>>>20),x=k+(A^D&(w^A))+R[6]+2821735955&4294967295,k=D+(x<<17&4294967295|x>>>15),x=A+(w^k&(D^w))+R[7]+4249261313&4294967295,A=k+(x<<22&4294967295|x>>>10),x=w+(D^A&(k^D))+R[8]+1770035416&4294967295,w=A+(x<<7&4294967295|x>>>25),x=D+(k^w&(A^k))+R[9]+2336552879&4294967295,D=w+(x<<12&4294967295|x>>>20),x=k+(A^D&(w^A))+R[10]+4294925233&4294967295,k=D+(x<<17&4294967295|x>>>15),x=A+(w^k&(D^w))+R[11]+2304563134&4294967295,A=k+(x<<22&4294967295|x>>>10),x=w+(D^A&(k^D))+R[12]+1804603682&4294967295,w=A+(x<<7&4294967295|x>>>25),x=D+(k^w&(A^k))+R[13]+4254626195&4294967295,D=w+(x<<12&4294967295|x>>>20),x=k+(A^D&(w^A))+R[14]+2792965006&4294967295,k=D+(x<<17&4294967295|x>>>15),x=A+(w^k&(D^w))+R[15]+1236535329&4294967295,A=k+(x<<22&4294967295|x>>>10),x=w+(k^D&(A^k))+R[1]+4129170786&4294967295,w=A+(x<<5&4294967295|x>>>27),x=D+(A^k&(w^A))+R[6]+3225465664&4294967295,D=w+(x<<9&4294967295|x>>>23),x=k+(w^A&(D^w))+R[11]+643717713&4294967295,k=D+(x<<14&4294967295|x>>>18),x=A+(D^w&(k^D))+R[0]+3921069994&4294967295,A=k+(x<<20&4294967295|x>>>12),x=w+(k^D&(A^k))+R[5]+3593408605&4294967295,w=A+(x<<5&4294967295|x>>>27),x=D+(A^k&(w^A))+R[10]+38016083&4294967295,D=w+(x<<9&4294967295|x>>>23),x=k+(w^A&(D^w))+R[15]+3634488961&4294967295,k=D+(x<<14&4294967295|x>>>18),x=A+(D^w&(k^D))+R[4]+3889429448&4294967295,A=k+(x<<20&4294967295|x>>>12),x=w+(k^D&(A^k))+R[9]+568446438&4294967295,w=A+(x<<5&4294967295|x>>>27),x=D+(A^k&(w^A))+R[14]+3275163606&4294967295,D=w+(x<<9&4294967295|x>>>23),x=k+(w^A&(D^w))+R[3]+4107603335&4294967295,k=D+(x<<14&4294967295|x>>>18),x=A+(D^w&(k^D))+R[8]+1163531501&4294967295,A=k+(x<<20&4294967295|x>>>12),x=w+(k^D&(A^k))+R[13]+2850285829&4294967295,w=A+(x<<5&4294967295|x>>>27),x=D+(A^k&(w^A))+R[2]+4243563512&4294967295,D=w+(x<<9&4294967295|x>>>23),x=k+(w^A&(D^w))+R[7]+1735328473&4294967295,k=D+(x<<14&4294967295|x>>>18),x=A+(D^w&(k^D))+R[12]+2368359562&4294967295,A=k+(x<<20&4294967295|x>>>12),x=w+(A^k^D)+R[5]+4294588738&4294967295,w=A+(x<<4&4294967295|x>>>28),x=D+(w^A^k)+R[8]+2272392833&4294967295,D=w+(x<<11&4294967295|x>>>21),x=k+(D^w^A)+R[11]+1839030562&4294967295,k=D+(x<<16&4294967295|x>>>16),x=A+(k^D^w)+R[14]+4259657740&4294967295,A=k+(x<<23&4294967295|x>>>9),x=w+(A^k^D)+R[1]+2763975236&4294967295,w=A+(x<<4&4294967295|x>>>28),x=D+(w^A^k)+R[4]+1272893353&4294967295,D=w+(x<<11&4294967295|x>>>21),x=k+(D^w^A)+R[7]+4139469664&4294967295,k=D+(x<<16&4294967295|x>>>16),x=A+(k^D^w)+R[10]+3200236656&4294967295,A=k+(x<<23&4294967295|x>>>9),x=w+(A^k^D)+R[13]+681279174&4294967295,w=A+(x<<4&4294967295|x>>>28),x=D+(w^A^k)+R[0]+3936430074&4294967295,D=w+(x<<11&4294967295|x>>>21),x=k+(D^w^A)+R[3]+3572445317&4294967295,k=D+(x<<16&4294967295|x>>>16),x=A+(k^D^w)+R[6]+76029189&4294967295,A=k+(x<<23&4294967295|x>>>9),x=w+(A^k^D)+R[9]+3654602809&4294967295,w=A+(x<<4&4294967295|x>>>28),x=D+(w^A^k)+R[12]+3873151461&4294967295,D=w+(x<<11&4294967295|x>>>21),x=k+(D^w^A)+R[15]+530742520&4294967295,k=D+(x<<16&4294967295|x>>>16),x=A+(k^D^w)+R[2]+3299628645&4294967295,A=k+(x<<23&4294967295|x>>>9),x=w+(k^(A|~D))+R[0]+4096336452&4294967295,w=A+(x<<6&4294967295|x>>>26),x=D+(A^(w|~k))+R[7]+1126891415&4294967295,D=w+(x<<10&4294967295|x>>>22),x=k+(w^(D|~A))+R[14]+2878612391&4294967295,k=D+(x<<15&4294967295|x>>>17),x=A+(D^(k|~w))+R[5]+4237533241&4294967295,A=k+(x<<21&4294967295|x>>>11),x=w+(k^(A|~D))+R[12]+1700485571&4294967295,w=A+(x<<6&4294967295|x>>>26),x=D+(A^(w|~k))+R[3]+2399980690&4294967295,D=w+(x<<10&4294967295|x>>>22),x=k+(w^(D|~A))+R[10]+4293915773&4294967295,k=D+(x<<15&4294967295|x>>>17),x=A+(D^(k|~w))+R[1]+2240044497&4294967295,A=k+(x<<21&4294967295|x>>>11),x=w+(k^(A|~D))+R[8]+1873313359&4294967295,w=A+(x<<6&4294967295|x>>>26),x=D+(A^(w|~k))+R[15]+4264355552&4294967295,D=w+(x<<10&4294967295|x>>>22),x=k+(w^(D|~A))+R[6]+2734768916&4294967295,k=D+(x<<15&4294967295|x>>>17),x=A+(D^(k|~w))+R[13]+1309151649&4294967295,A=k+(x<<21&4294967295|x>>>11),x=w+(k^(A|~D))+R[4]+4149444226&4294967295,w=A+(x<<6&4294967295|x>>>26),x=D+(A^(w|~k))+R[11]+3174756917&4294967295,D=w+(x<<10&4294967295|x>>>22),x=k+(w^(D|~A))+R[2]+718787259&4294967295,k=D+(x<<15&4294967295|x>>>17),x=A+(D^(k|~w))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+w&4294967295,v.g[1]=v.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+D&4294967295}r.prototype.u=function(v,w){w===void 0&&(w=v.length);for(var A=w-this.blockSize,R=this.B,k=this.h,D=0;D<w;){if(k==0)for(;D<=A;)i(this,v,D),D+=this.blockSize;if(typeof v=="string"){for(;D<w;)if(R[k++]=v.charCodeAt(D++),k==this.blockSize){i(this,R),k=0;break}}else for(;D<w;)if(R[k++]=v[D++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=w},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var w=1;w<v.length-8;++w)v[w]=0;var A=8*this.o;for(w=v.length-8;w<v.length;++w)v[w]=A&255,A/=256;for(this.u(v),v=Array(16),w=A=0;4>w;++w)for(var R=0;32>R;R+=8)v[A++]=this.g[w]>>>R&255;return v};function s(v,w){var A=a;return Object.prototype.hasOwnProperty.call(A,v)?A[v]:A[v]=w(v)}function o(v,w){this.h=w;for(var A=[],R=!0,k=v.length-1;0<=k;k--){var D=v[k]|0;R&&D==w||(A[k]=D,R=!1)}this.g=A}var a={};function u(v){return-128<=v&&128>v?s(v,function(w){return new o([w|0],0>w?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return P(c(-v));for(var w=[],A=1,R=0;v>=A;R++)w[R]=v/A|0,A*=4294967296;return new o(w,0)}function d(v,w){if(v.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(v.charAt(0)=="-")return P(d(v.substring(1),w));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(w,8)),R=f,k=0;k<v.length;k+=8){var D=Math.min(8,v.length-k),x=parseInt(v.substring(k,k+D),w);8>D?(D=c(Math.pow(w,D)),R=R.j(D).add(c(x))):(R=R.j(A),R=R.add(c(x)))}return R}var f=u(0),p=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var v=0,w=1,A=0;A<this.g.length;A++){var R=this.i(A);v+=(0<=R?R:4294967296+R)*w,w*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E(this))return"0";if(C(this))return"-"+P(this).toString(v);for(var w=c(Math.pow(v,6)),A=this,R="";;){var k=b(A,w).g;A=_(A,k.j(w));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(v);if(A=k,E(A))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function E(v){if(v.h!=0)return!1;for(var w=0;w<v.g.length;w++)if(v.g[w]!=0)return!1;return!0}function C(v){return v.h==-1}t.l=function(v){return v=_(this,v),C(v)?-1:E(v)?0:1};function P(v){for(var w=v.g.length,A=[],R=0;R<w;R++)A[R]=~v.g[R];return new o(A,~v.h).add(p)}t.abs=function(){return C(this)?P(this):this},t.add=function(v){for(var w=Math.max(this.g.length,v.g.length),A=[],R=0,k=0;k<=w;k++){var D=R+(this.i(k)&65535)+(v.i(k)&65535),x=(D>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);R=x>>>16,D&=65535,x&=65535,A[k]=x<<16|D}return new o(A,A[A.length-1]&-2147483648?-1:0)};function _(v,w){return v.add(P(w))}t.j=function(v){if(E(this)||E(v))return f;if(C(this))return C(v)?P(this).j(P(v)):P(P(this).j(v));if(C(v))return P(this.j(P(v)));if(0>this.l(T)&&0>v.l(T))return c(this.m()*v.m());for(var w=this.g.length+v.g.length,A=[],R=0;R<2*w;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<v.g.length;k++){var D=this.i(R)>>>16,x=this.i(R)&65535,te=v.i(k)>>>16,Ie=v.i(k)&65535;A[2*R+2*k]+=x*Ie,y(A,2*R+2*k),A[2*R+2*k+1]+=D*Ie,y(A,2*R+2*k+1),A[2*R+2*k+1]+=x*te,y(A,2*R+2*k+1),A[2*R+2*k+2]+=D*te,y(A,2*R+2*k+2)}for(R=0;R<w;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=w;R<2*w;R++)A[R]=0;return new o(A,0)};function y(v,w){for(;(v[w]&65535)!=v[w];)v[w+1]+=v[w]>>>16,v[w]&=65535,w++}function S(v,w){this.g=v,this.h=w}function b(v,w){if(E(w))throw Error("division by zero");if(E(v))return new S(f,f);if(C(v))return w=b(P(v),w),new S(P(w.g),P(w.h));if(C(w))return w=b(v,P(w)),new S(P(w.g),w.h);if(30<v.g.length){if(C(v)||C(w))throw Error("slowDivide_ only works with positive integers.");for(var A=p,R=w;0>=R.l(v);)A=j(A),R=j(R);var k=z(A,1),D=z(R,1);for(R=z(R,2),A=z(A,2);!E(R);){var x=D.add(R);0>=x.l(v)&&(k=k.add(A),D=x),R=z(R,1),A=z(A,1)}return w=_(v,k.j(w)),new S(k,w)}for(k=f;0<=v.l(w);){for(A=Math.max(1,Math.floor(v.m()/w.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=c(A),x=D.j(w);C(x)||0<x.l(v);)A-=R,D=c(A),x=D.j(w);E(D)&&(D=p),k=k.add(D),v=_(v,x)}return new S(k,v)}t.A=function(v){return b(this,v).h},t.and=function(v){for(var w=Math.max(this.g.length,v.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)&v.i(R);return new o(A,this.h&v.h)},t.or=function(v){for(var w=Math.max(this.g.length,v.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)|v.i(R);return new o(A,this.h|v.h)},t.xor=function(v){for(var w=Math.max(this.g.length,v.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)^v.i(R);return new o(A,this.h^v.h)};function j(v){for(var w=v.g.length+1,A=[],R=0;R<w;R++)A[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(A,v.h)}function z(v,w){var A=w>>5;w%=32;for(var R=v.g.length-A,k=[],D=0;D<R;D++)k[D]=0<w?v.i(D+A)>>>w|v.i(D+A+1)<<32-w:v.i(D+A);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ms=o}).apply(typeof v_<"u"?v_:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pI,mI,ja,gI,sc,bp,yI,vI,_I;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var I=0;I<l.length-1;I++){var O=l[I];if(!(O in m))break e;m=m[O]}l=l[l.length-1],I=m[l],h=h(I),h!=I&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,I=!1,O={next:function(){if(!I&&m<l.length){var F=m++;return{value:h(F,l[F]),done:!1}}return I=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,I),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function T(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var I=m.slice();return I.push.apply(I,arguments),l.apply(this,I)}}function E(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(I,O,F){for(var X=Array(arguments.length-2),We=2;We<arguments.length;We++)X[We-2]=arguments[We];return h.prototype[O].apply(I,X)}}function C(l){const h=l.length;if(0<h){const m=Array(h);for(let I=0;I<h;I++)m[I]=l[I];return m}return[]}function P(l,h){for(let m=1;m<arguments.length;m++){const I=arguments[m];if(u(I)){const O=l.length||0,F=I.length||0;l.length=O+F;for(let X=0;X<F;X++)l[O+X]=I[X]}else l.push(I)}}class _{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function z(l,h,m){for(const I in l)h.call(m,l[I],I,l)}function v(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function w(l){const h={};for(const m in l)h[m]=l[m];return h}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let m,I;for(let O=1;O<arguments.length;O++){I=arguments[O];for(m in I)l[m]=I[m];for(let F=0;F<A.length;F++)m=A[F],Object.prototype.hasOwnProperty.call(I,m)&&(l[m]=I[m])}}function k(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function D(l){a.setTimeout(()=>{throw l},0)}function x(){var l=oe;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class te{constructor(){this.h=this.g=null}add(h,m){const I=Ie.get();I.set(h,m),this.h?this.h.next=I:this.g=I,this.h=I}}var Ie=new _(()=>new pt,l=>l.reset());class pt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,B=!1,oe=new te,ae=()=>{const l=a.Promise.resolve(void 0);Ne=()=>{l.then(Te)}};var Te=()=>{for(var l;l=x();){try{l.h.call(l.g)}catch(m){D(m)}var h=Ie;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}B=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Z(l,h){if(G.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,I=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{b(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:L[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Z.aa.h.call(this)}}E(Z,G);var L={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Ve(l,h,m,I,O){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!I,this.ha=O,this.key=++Y,this.da=this.fa=!1}function Se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xe(l){this.src=l,this.g={},this.h=0}xe.prototype.add=function(l,h,m,I,O){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var X=He(l,h,I,O);return-1<X?(h=l[X],m||(h.fa=!1)):(h=new Ve(h,this.src,F,!!I,O),h.fa=m,l.push(h)),h};function le(l,h){var m=h.type;if(m in l.g){var I=l.g[m],O=Array.prototype.indexOf.call(I,h,void 0),F;(F=0<=O)&&Array.prototype.splice.call(I,O,1),F&&(Se(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function He(l,h,m,I){for(var O=0;O<l.length;++O){var F=l[O];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==I)return O}return-1}var mt="closure_lm_"+(1e6*Math.random()|0),Ae={};function qe(l,h,m,I,O){if(Array.isArray(h)){for(var F=0;F<h.length;F++)qe(l,h[F],m,I,O);return null}return m=Be(m),l&&l[he]?l.K(h,m,c(I)?!!I.capture:!!I,O):be(l,h,m,!1,I,O)}function be(l,h,m,I,O,F){if(!h)throw Error("Invalid event type");var X=c(O)?!!O.capture:!!O,We=yt(l);if(We||(l[mt]=We=new xe(l)),m=We.add(h,m,I,X,F),m.proxy)return m;if(I=gt(),m.proxy=I,I.src=l,I.listener=m,l.addEventListener)J||(O=X),O===void 0&&(O=!1),l.addEventListener(h.toString(),I,O);else if(l.attachEvent)l.attachEvent(Ar(h.toString()),I);else if(l.addListener&&l.removeListener)l.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return m}function gt(){function l(m){return h.call(l.src,l.listener,m)}const h=wn;return l}function ar(l,h,m,I,O){if(Array.isArray(h))for(var F=0;F<h.length;F++)ar(l,h[F],m,I,O);else I=c(I)?!!I.capture:!!I,m=Be(m),l&&l[he]?(l=l.i,h=String(h).toString(),h in l.g&&(F=l.g[h],m=He(F,m,I,O),-1<m&&(Se(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[h],l.h--)))):l&&(l=yt(l))&&(h=l.g[h.toString()],l=-1,h&&(l=He(h,m,I,O)),(m=-1<l?h[l]:null)&&st(m))}function st(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[he])le(h.i,l);else{var m=l.type,I=l.proxy;h.removeEventListener?h.removeEventListener(m,I,l.capture):h.detachEvent?h.detachEvent(Ar(m),I):h.addListener&&h.removeListener&&h.removeListener(I),(m=yt(h))?(le(m,l),m.h==0&&(m.src=null,h[mt]=null)):Se(l)}}}function Ar(l){return l in Ae?Ae[l]:Ae[l]="on"+l}function wn(l,h){if(l.da)l=!0;else{h=new Z(h,this);var m=l.listener,I=l.ha||l.src;l.fa&&st(l),l=m.call(I,h)}return l}function yt(l){return l=l[mt],l instanceof xe?l:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Be(l){return typeof l=="function"?l:(l[fe]||(l[fe]=function(h){return l.handleEvent(h)}),l[fe])}function Fe(){q.call(this),this.i=new xe(this),this.M=this,this.F=null}E(Fe,q),Fe.prototype[he]=!0,Fe.prototype.removeEventListener=function(l,h,m,I){ar(this,l,h,m,I)};function Xe(l,h){var m,I=l.F;if(I)for(m=[];I;I=I.F)m.push(I);if(l=l.M,I=h.type||h,typeof h=="string")h=new G(h,l);else if(h instanceof G)h.target=h.target||l;else{var O=h;h=new G(I,l),R(h,O)}if(O=!0,m)for(var F=m.length-1;0<=F;F--){var X=h.g=m[F];O=qt(X,I,!0,h)&&O}if(X=h.g=l,O=qt(X,I,!0,h)&&O,O=qt(X,I,!1,h)&&O,m)for(F=0;F<m.length;F++)X=h.g=m[F],O=qt(X,I,!1,h)&&O}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],I=0;I<m.length;I++)Se(m[I]);delete l.g[h],l.h--}}this.F=null},Fe.prototype.K=function(l,h,m,I){return this.i.add(String(l),h,!1,m,I)},Fe.prototype.L=function(l,h,m,I){return this.i.add(String(l),h,!0,m,I)};function qt(l,h,m,I){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,F=0;F<h.length;++F){var X=h[F];if(X&&!X.da&&X.capture==m){var We=X.listener,Vt=X.ha||X.src;X.fa&&le(l.i,X),O=We.call(Vt,I)!==!1&&O}}return O&&!I.defaultPrevented}function Xi(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function iu(l){l.g=Xi(()=>{l.g=null,l.i&&(l.i=!1,iu(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class lr extends q{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ni(l){q.call(this),this.h=l,this.g={}}E(ni,q);var aa=[];function la(l){z(l.g,function(h,m){this.g.hasOwnProperty(m)&&st(h)},l),l.g={}}ni.prototype.N=function(){ni.aa.N.call(this),la(this)},ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=a.JSON.stringify,su=a.JSON.parse,qs=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ws(){}Ws.prototype.h=null;function Gs(l){return l.h||(l.h=l.i())}function ou(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ca(){G.call(this,"d")}E(ca,G);function Ks(){G.call(this,"c")}E(Ks,G);var Cr={},M=null;function V(){return M=M||new Fe}Cr.La="serverreachability";function U(l){G.call(this,Cr.La,l)}E(U,G);function Q(l){const h=V();Xe(h,new U(h))}Cr.STAT_EVENT="statevent";function ne(l,h){G.call(this,Cr.STAT_EVENT,l),this.stat=h}E(ne,G);function ue(l){const h=V();Xe(h,new ne(h,l))}Cr.Ma="timingevent";function ce(l,h){G.call(this,Cr.Ma,l),this.size=h}E(ce,G);function ee(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function ge(){this.g=!0}ge.prototype.xa=function(){this.g=!1};function ye(l,h,m,I,O,F){l.info(function(){if(l.g)if(F)for(var X="",We=F.split("&"),Vt=0;Vt<We.length;Vt++){var Oe=We[Vt].split("=");if(1<Oe.length){var Wt=Oe[0];Oe=Oe[1];var Gt=Wt.split("_");X=2<=Gt.length&&Gt[1]=="type"?X+(Wt+"="+Oe+"&"):X+(Wt+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+I+") [attempt "+O+"]: "+h+`
`+m+`
`+X})}function xt(l,h,m,I,O,F,X){l.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+O+"]: "+h+`
`+m+`
`+F+" "+X})}function nt(l,h,m,I){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ke(l,m)+(I?" "+I:"")})}function pe(l,h){l.info(function(){return"TIMEOUT: "+h})}ge.prototype.info=function(){};function Ke(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var I=m[l];if(!(2>I.length)){var O=I[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return ua(m)}catch{return h}}var ot={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function qn(){}E(qn,Ws),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},Nn=new qn;function rn(l,h,m,I){this.j=l,this.i=h,this.l=m,this.R=I||1,this.U=new ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rr}function Rr(){this.i=null,this.g="",this.h=!1}var En={},si={};function oi(l,h,m){l.L=1,l.v=uu(br(h)),l.m=m,l.P=!0,Ji(l,null)}function Ji(l,h){l.F=Date.now(),Lt(l),l.A=br(l.v);var m=l.A,I=l.R;Array.isArray(I)||(I=[String(I)]),Dy(m.i,"t",I),l.C=0,m=l.j.J,l.h=new Rr,l.g=Yy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new lr(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,I=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(aa[0]=O.toString()),O=aa);for(var F=0;F<O.length;F++){var X=qe(m,O[F],I||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Q(),ye(l.i,l.u,l.A,l.l,l.R,l.m)}rn.prototype.ca=function(l){l=l.target;const h=this.M;h&&Dr(l)==3?h.j():this.Y(l)},rn.prototype.Y=function(l){try{if(l==this.g)e:{const Gt=Dr(this.g);var h=this.g.Ba();const Xs=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||Fy(this.g)))){this.J||Gt!=4||h==7||(h==8||0>=Xs?Q(3):Q(2)),Pr(this);var m=this.g.Z();this.X=m;t:if(Ce(this)){var I=Fy(this.g);l="";var O=I.length,F=Dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),ai(this);var X="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(I[h],{stream:!(F&&h==O-1)});I.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,xt(this.i,this.u,this.A,this.l,this.R,Gt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Vt=this.g;if((We=Vt.g?Vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(We)){var Oe=We;break t}}Oe=null}if(m=Oe)nt(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mh(this,m);else{this.o=!1,this.s=3,ue(12),kr(this),ai(this);break e}}if(this.P){m=!0;let Wn;for(;!this.J&&this.C<X.length;)if(Wn=Ot(this,X),Wn==si){Gt==4&&(this.s=4,ue(14),m=!1),nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Wn==En){this.s=4,ue(15),nt(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else nt(this.i,this.l,Wn,null),mh(this,Wn);if(Ce(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||X.length!=0||this.h.h||(this.s=1,ue(16),m=!1),this.o=this.o&&m,!m)nt(this.i,this.l,X,"[Invalid Chunked Response]"),kr(this),ai(this);else if(0<X.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Eh(Wt),Wt.M=!0,ue(11))}}else nt(this.i,this.l,X,null),mh(this,X);Gt==4&&kr(this),this.o&&!this.J&&(Gt==4?Wy(this.j,this):(this.o=!1,Lt(this)))}else bx(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,ue(12)):(this.s=0,ue(13)),kr(this),ai(this)}}}catch{}finally{}};function Ce(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ot(l,h){var m=l.C,I=h.indexOf(`
`,m);return I==-1?si:(m=Number(h.substring(m,I)),isNaN(m)?En:(I+=1,I+m>h.length?si:(h=h.slice(I,I+m),l.C=I+m,h)))}rn.prototype.cancel=function(){this.J=!0,kr(this)};function Lt(l){l.S=Date.now()+l.I,_t(l,l.I)}function _t(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ee(p(l.ba,l),h)}function Pr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}rn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(pe(this.i,this.A),this.L!=2&&(Q(),ue(17)),kr(this),this.s=2,ai(this)):_t(this,this.S-l)};function ai(l){l.j.G==0||l.J||Wy(l.j,l)}function kr(l){Pr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,la(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function mh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||gh(m.h,l))){if(!l.K&&gh(m.h,l)&&m.G==3){try{var I=m.Da.g.parse(h)}catch{I=null}if(Array.isArray(I)&&I.length==3){var O=I;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)pu(m),hu(m);else break e;wh(m),ue(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=ee(p(m.Za,m),6e3));if(1>=Iy(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else es(m,11)}else if((l.K||m.g==l)&&pu(m),!y(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let Oe=O[h];if(m.T=Oe[0],Oe=Oe[1],m.G==2)if(Oe[0]=="c"){m.K=Oe[1],m.ia=Oe[2];const Wt=Oe[3];Wt!=null&&(m.la=Wt,m.j.info("VER="+m.la));const Gt=Oe[4];Gt!=null&&(m.Aa=Gt,m.j.info("SVER="+m.Aa));const Xs=Oe[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(I=1.5*Xs,m.L=I,m.j.info("backChannelRequestTimeoutMs_="+I)),I=m;const Wn=l.g;if(Wn){const gu=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gu){var F=I.h;F.g||gu.indexOf("spdy")==-1&&gu.indexOf("quic")==-1&&gu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(yh(F,F.h),F.h=null))}if(I.D){const Th=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Th&&(I.ya=Th,Je(I.I,I.D,Th))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),I=m;var X=l;if(I.qa=Qy(I,I.J?I.ia:null,I.W),X.K){Sy(I.h,X);var We=X,Vt=I.L;Vt&&(We.I=Vt),We.B&&(Pr(We),Lt(We)),I.g=X}else Hy(I);0<m.i.length&&fu(m)}else Oe[0]!="stop"&&Oe[0]!="close"||es(m,7);else m.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?es(m,7):_h(m):Oe[0]!="noop"&&m.l&&m.l.ta(Oe),m.v=0)}}Q(4)}catch{}}var mx=class{constructor(l,h){this.g=l,this.map=h}};function Ey(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ty(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Iy(l){return l.h?1:l.g?l.g.size:0}function gh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function yh(l,h){l.g?l.g.add(h):l.h=h}function Sy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Ey.prototype.cancel=function(){if(this.i=xy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function xy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return C(l.i)}function gx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,I=0;I<m;I++)h.push(l[I]);return h}h=[],m=0;for(I in l)h[m++]=l[I];return h}function yx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const I in l)h[m++]=I;return h}}}function Ay(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=yx(l),I=gx(l),O=I.length,F=0;F<O;F++)h.call(void 0,I[F],m&&m[F],l)}var Cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vx(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var I=l[m].indexOf("="),O=null;if(0<=I){var F=l[m].substring(0,I);O=l[m].substring(I+1)}else F=l[m];h(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Zi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zi){this.h=l.h,au(this,l.j),this.o=l.o,this.g=l.g,lu(this,l.s),this.l=l.l;var h=l.i,m=new fa;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Ry(this,m),this.m=l.m}else l&&(h=String(l).match(Cy))?(this.h=!1,au(this,h[1]||"",!0),this.o=da(h[2]||""),this.g=da(h[3]||"",!0),lu(this,h[4]),this.l=da(h[5]||"",!0),Ry(this,h[6]||"",!0),this.m=da(h[7]||"")):(this.h=!1,this.i=new fa(null,this.h))}Zi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ha(h,Py,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ha(h,Py,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(ha(m,m.charAt(0)=="/"?Ex:wx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",ha(m,Ix)),l.join("")};function br(l){return new Zi(l)}function au(l,h,m){l.j=m?da(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function lu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Ry(l,h,m){h instanceof fa?(l.i=h,Sx(l.i,l.h)):(m||(h=ha(h,Tx)),l.i=new fa(h,l.h))}function Je(l,h,m){l.i.set(h,m)}function uu(l){return Je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function da(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ha(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,_x),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function _x(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Py=/[#\/\?@]/g,wx=/[#\?:]/g,Ex=/[#\?]/g,Tx=/[#\?@]/g,Ix=/#/g;function fa(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function li(l){l.g||(l.g=new Map,l.h=0,l.i&&vx(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=fa.prototype,t.add=function(l,h){li(this),this.i=null,l=Qs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function ky(l,h){li(l),h=Qs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function by(l,h){return li(l),h=Qs(l,h),l.g.has(h)}t.forEach=function(l,h){li(this),this.g.forEach(function(m,I){m.forEach(function(O){l.call(h,O,I,this)},this)},this)},t.na=function(){li(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let I=0;I<h.length;I++){const O=l[I];for(let F=0;F<O.length;F++)m.push(h[I])}return m},t.V=function(l){li(this);let h=[];if(typeof l=="string")by(this,l)&&(h=h.concat(this.g.get(Qs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return li(this),this.i=null,l=Qs(this,l),by(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Dy(l,h,m){ky(l,h),0<m.length&&(l.i=null,l.g.set(Qs(l,h),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var I=h[m];const F=encodeURIComponent(String(I)),X=this.V(I);for(I=0;I<X.length;I++){var O=F;X[I]!==""&&(O+="="+encodeURIComponent(String(X[I]))),l.push(O)}}return this.i=l.join("&")};function Qs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Sx(l,h){h&&!l.j&&(li(l),l.i=null,l.g.forEach(function(m,I){var O=I.toLowerCase();I!=O&&(ky(this,I),Dy(this,O,m))},l)),l.j=h}function xx(l,h){const m=new ge;if(a.Image){const I=new Image;I.onload=T(ui,m,"TestLoadImage: loaded",!0,h,I),I.onerror=T(ui,m,"TestLoadImage: error",!1,h,I),I.onabort=T(ui,m,"TestLoadImage: abort",!1,h,I),I.ontimeout=T(ui,m,"TestLoadImage: timeout",!1,h,I),a.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=l}else h(!1)}function Ax(l,h){const m=new ge,I=new AbortController,O=setTimeout(()=>{I.abort(),ui(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:I.signal}).then(F=>{clearTimeout(O),F.ok?ui(m,"TestPingServer: ok",!0,h):ui(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),ui(m,"TestPingServer: error",!1,h)})}function ui(l,h,m,I,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),I(m)}catch{}}function Cx(){this.g=new qs}function Rx(l,h,m){const I=m||"";try{Ay(l,function(O,F){let X=O;c(O)&&(X=ua(O)),h.push(I+F+"="+encodeURIComponent(X))})}catch(O){throw h.push(I+"type="+encodeURIComponent("_badmap")),O}}function pa(l){this.l=l.Ub||null,this.j=l.eb||!1}E(pa,Ws),pa.prototype.g=function(){return new cu(this.l,this.j)},pa.prototype.i=function(l){return function(){return l}}({});function cu(l,h){Fe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(cu,Fe),t=cu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ga(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ma(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ga(this)),this.g&&(this.readyState=3,ga(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ny(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ny(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ma(this):ga(this),this.readyState==3&&Ny(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ma(this))},t.Qa=function(l){this.g&&(this.response=l,ma(this))},t.ga=function(){this.g&&ma(this)};function ma(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ga(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function ga(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function My(l){let h="";return z(l,function(m,I){h+=I,h+=":",h+=m,h+=`\r
`}),h}function vh(l,h,m){e:{for(I in m){var I=!1;break e}I=!0}I||(m=My(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Je(l,h,m))}function ht(l){Fe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(ht,Fe);var Px=/^https?$/i,kx=["POST","PUT"];t=ht.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Gs(this.o):Gs(Nn),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(F){Oy(this,F);return}if(l=m||"",m=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var O in I)m.set(O,I[O]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const F of I.keys())m.set(F,I.get(F));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(kx,h,void 0))||I||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of m)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jy(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Oy(this,F)}};function Oy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ly(l),du(l)}function Ly(l){l.A||(l.A=!0,Xe(l,"complete"),Xe(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Xe(this,"complete"),Xe(this,"abort"),du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),du(this,!0)),ht.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vy(this):this.bb())},t.bb=function(){Vy(this)};function Vy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Dr(l)!=4||l.Z()!=2)){if(l.u&&Dr(l)==4)Xi(l.Ea,0,l);else if(Xe(l,"readystatechange"),Dr(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var I;if(I=X===0){var O=String(l.D).match(Cy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),I=!Px.test(O?O.toLowerCase():"")}m=I}if(m)Xe(l,"complete"),Xe(l,"success");else{l.m=6;try{var F=2<Dr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Ly(l)}}finally{du(l)}}}}function du(l,h){if(l.g){jy(l);const m=l.g,I=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Xe(l,"ready");try{m.onreadystatechange=I}catch{}}}function jy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Dr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),su(h)}};function Fy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function bx(l){const h={};l=(l.g&&2<=Dr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<l.length;I++){if(y(l[I]))continue;var m=k(l[I]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[O]||[];h[O]=F,F.push(m)}v(h,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Uy(l){this.Aa=0,this.i=[],this.j=new ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ya("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ya("baseRetryDelayMs",5e3,l),this.cb=ya("retryDelaySeedMs",1e4,l),this.Wa=ya("forwardChannelMaxRetries",2,l),this.wa=ya("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ey(l&&l.concurrentRequestLimit),this.Da=new Cx,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uy.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,I){ue(0),this.W=l,this.H=h||{},m&&I!==void 0&&(this.H.OSID=m,this.H.OAID=I),this.F=this.X,this.I=Qy(this,null,this.W),fu(this)};function _h(l){if($y(l),l.G==3){var h=l.U++,m=br(l.I);if(Je(m,"SID",l.K),Je(m,"RID",h),Je(m,"TYPE","terminate"),va(l,m),h=new rn(l,l.j,h),h.L=2,h.v=uu(br(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Yy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Lt(h)}Ky(l)}function hu(l){l.g&&(Eh(l),l.g.cancel(),l.g=null)}function $y(l){hu(l),l.u&&(a.clearTimeout(l.u),l.u=null),pu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function fu(l){if(!Ty(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ne||ae(),B||(Ne(),B=!0),oe.add(h,l),l.B=0}}function Dx(l,h){return Iy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ee(p(l.Ga,l,h),Gy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new rn(this,this.j,l);let F=this.o;if(this.S&&(F?(F=w(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var I=this.i[m];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(h+=I,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=By(this,O,h),m=br(this.I),Je(m,"RID",l),Je(m,"CVER",22),this.D&&Je(m,"X-HTTP-Session-Id",this.D),va(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(My(F)))+"&"+h:this.m&&vh(m,this.m,F)),yh(this.h,O),this.Ua&&Je(m,"TYPE","init"),this.P?(Je(m,"$req",h),Je(m,"SID","null"),O.T=!0,oi(O,m,null)):oi(O,m,h),this.G=2}}else this.G==3&&(l?zy(this,l):this.i.length==0||Ty(this.h)||zy(this))};function zy(l,h){var m;h?m=h.l:m=l.U++;const I=br(l.I);Je(I,"SID",l.K),Je(I,"RID",m),Je(I,"AID",l.T),va(l,I),l.m&&l.o&&vh(I,l.m,l.o),m=new rn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=By(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),yh(l.h,m),oi(m,I,h)}function va(l,h){l.H&&z(l.H,function(m,I){Je(h,I,m)}),l.l&&Ay({},function(m,I){Je(h,I,m)})}function By(l,h,m){m=Math.min(l.i.length,m);var I=l.l?p(l.l.Na,l.l,l):null;e:{var O=l.i;let F=-1;for(;;){const X=["count="+m];F==-1?0<m?(F=O[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let We=!0;for(let Vt=0;Vt<m;Vt++){let Oe=O[Vt].g;const Wt=O[Vt].map;if(Oe-=F,0>Oe)F=Math.max(0,O[Vt].g-100),We=!1;else try{Rx(Wt,X,"req"+Oe+"_")}catch{I&&I(Wt)}}if(We){I=X.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,I}function Hy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ne||ae(),B||(Ne(),B=!0),oe.add(h,l),l.v=0}}function wh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ee(p(l.Fa,l),Gy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,qy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ee(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ue(10),hu(this),qy(this))};function Eh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function qy(l){l.g=new rn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=br(l.qa);Je(h,"RID","rpc"),Je(h,"SID",l.K),Je(h,"AID",l.T),Je(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Je(h,"TO",l.ja),Je(h,"TYPE","xmlhttp"),va(l,h),l.m&&l.o&&vh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=uu(br(h)),m.m=null,m.P=!0,Ji(m,l)}t.Za=function(){this.C!=null&&(this.C=null,hu(this),wh(this),ue(19))};function pu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Wy(l,h){var m=null;if(l.g==h){pu(l),Eh(l),l.g=null;var I=2}else if(gh(l.h,h))m=h.D,Sy(l.h,h),I=1;else return;if(l.G!=0){if(h.o)if(I==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;I=V(),Xe(I,new ce(I,m)),fu(l)}else Hy(l);else if(O=h.s,O==3||O==0&&0<h.X||!(I==1&&Dx(l,h)||I==2&&wh(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),O){case 1:es(l,5);break;case 4:es(l,10);break;case 3:es(l,6);break;default:es(l,2)}}}function Gy(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function es(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),I=l.Xa;const O=!I;I=new Zi(I||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||au(I,"https"),uu(I),O?xx(I.toString(),m):Ax(I.toString(),m)}else ue(2);l.G=0,l.l&&l.l.sa(h),Ky(l),$y(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function Ky(l){if(l.G=0,l.ka=[],l.l){const h=xy(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Qy(l,h,m){var I=m instanceof Zi?br(m):new Zi(m);if(I.g!="")h&&(I.g=h+"."+I.g),lu(I,I.s);else{var O=a.location;I=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var F=new Zi(null);I&&au(F,I),h&&(F.g=h),O&&lu(F,O),m&&(F.l=m),I=F}return m=l.D,h=l.ya,m&&h&&Je(I,m,h),Je(I,"VER",l.la),va(l,I),I}function Yy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new ht(new pa({eb:m})):new ht(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xy(){}t=Xy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mu(){}mu.prototype.g=function(l,h){return new Tn(l,h)};function Tn(l,h){Fe.call(this),this.g=new Uy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ys(this)}E(Tn,Fe),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){_h(this.g)},Tn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=ua(l),l=m);h.i.push(new mx(h.Ya++,l)),h.G==3&&fu(h)},Tn.prototype.N=function(){this.g.l=null,delete this.j,_h(this.g),delete this.g,Tn.aa.N.call(this)};function Jy(l){ca.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(Jy,ca);function Zy(){Ks.call(this),this.status=1}E(Zy,Ks);function Ys(l){this.g=l}E(Ys,Xy),Ys.prototype.ua=function(){Xe(this.g,"a")},Ys.prototype.ta=function(l){Xe(this.g,new Jy(l))},Ys.prototype.sa=function(l){Xe(this.g,new Zy)},Ys.prototype.ra=function(){Xe(this.g,"b")},mu.prototype.createWebChannel=mu.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,_I=function(){return new mu},vI=function(){return V()},yI=Cr,bp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ot.NO_ERROR=0,ot.TIMEOUT=8,ot.HTTP_ERROR=6,sc=ot,ii.COMPLETE="complete",gI=ii,ou.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,ja=ou,mI=pa,ht.prototype.listenOnce=ht.prototype.L,ht.prototype.getLastError=ht.prototype.Ka,ht.prototype.getLastErrorCode=ht.prototype.Ba,ht.prototype.getStatus=ht.prototype.Z,ht.prototype.getResponseJson=ht.prototype.Oa,ht.prototype.getResponseText=ht.prototype.oa,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Ha,pI=ht}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const __="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Wd("@firebase/firestore");function ka(){return Rs.logLevel}function se(t,...e){if(Rs.logLevel<=ke.DEBUG){const n=e.map(kg);Rs.debug(`Firestore (${na}): ${t}`,...n)}}function Yr(t,...e){if(Rs.logLevel<=ke.ERROR){const n=e.map(kg);Rs.error(`Firestore (${na}): ${t}`,...n)}}function Uo(t,...e){if(Rs.logLevel<=ke.WARN){const n=e.map(kg);Rs.warn(`Firestore (${na}): ${t}`,...n)}}function kg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw Yr(e),new Error(e)}function Ye(t,e){t||ve()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Jt.UNAUTHENTICATED))}shutdown(){}}class jN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FN{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string"),new wI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Jt(e)}}class UN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $N{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string"),this.R=n.token,new zN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=HN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function $o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Rt(0,0))}static max(){return new _e(new Rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(),r===void 0?r=e.length-n:r>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class et extends Rl{construct(e,n,r){return new et(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new et(n)}static emptyPath(){return new et([])}}const qN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Rl{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return qN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(et.fromString(e))}static fromName(e){return new de(et.fromString(e).popFirst(5))}static empty(){return new de(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new et(e.slice()))}}function WN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(r===1e9?new Rt(n+1,0):new Rt(n,r));return new Fi(i,de.empty(),e)}function GN(t){return new Fi(t.readTime,t.key,-1)}class Fi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fi(_e.min(),de.empty(),-1)}static max(){return new Fi(_e.max(),de.empty(),-1)}}function KN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==QN)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function XN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Kl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bg.oe=-1;function Xd(t){return t==null}function Kc(t){return t===0&&1/t==-1/0}function JN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=i??Ft.EMPTY,this.right=s??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new zt(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new xn([])}unionWith(e){let n=new zt(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class II extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new II("Invalid base64 string: "+s):s}}(e);return new nn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const ZN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=ZN.exec(t);if(Ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Tt(t.seconds),nanos:Tt(t.nanos)}}function Tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ps(t){return typeof t=="string"?nn.fromBase64String(t):nn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ng(t){const e=t.mapValue.fields.__previous_value__;return Dg(e)?Ng(e):e}function Pl(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class kl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dg(t)?4:tM(t)?9007199254740991:10:ve()}function xr(t,e){if(t===e)return!0;const n=ks(t);if(n!==ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pl(t).isEqual(Pl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ui(i.timestampValue),a=Ui(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ps(i.bytesValue).isEqual(Ps(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Tt(i.geoPointValue.latitude)===Tt(s.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Tt(i.integerValue)===Tt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Tt(i.doubleValue),a=Tt(s.doubleValue);return o===a?Kc(o)===Kc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(w_(o)!==w_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!xr(o[u],a[u])))return!1;return!0}(t,e);default:return ve()}}function bl(t,e){return(t.values||[]).find(n=>xr(n,e))!==void 0}function zo(t,e){if(t===e)return 0;const n=ks(t),r=ks(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Tt(s.integerValue||s.doubleValue),u=Tt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return T_(t.timestampValue,e.timestampValue);case 4:return T_(Pl(t),Pl(e));case 5:return Le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ps(s),u=Ps(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Le(a[c],u[c]);if(d!==0)return d}return Le(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Le(Tt(s.latitude),Tt(o.latitude));return a!==0?a:Le(Tt(s.longitude),Tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=zo(a[c],u[c]);if(d)return d}return Le(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fu.mapValue&&o===Fu.mapValue)return 0;if(s===Fu.mapValue)return 1;if(o===Fu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Le(u[f],d[f]);if(p!==0)return p;const T=zo(a[u[f]],c[d[f]]);if(T!==0)return T}return Le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ve()}}function T_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=Ui(t),r=Ui(e),i=Le(n.seconds,r.seconds);return i!==0?i:Le(n.nanos,r.nanos)}function Bo(t){return Dp(t)}function Dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ui(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dp(n.fields[o])}`;return i+"}"}(t.mapValue):ve()}function I_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Np(t){return!!t&&"integerValue"in t}function Mg(t){return!!t&&"arrayValue"in t}function S_(t){return!!t&&"nullValue"in t}function x_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oc(t){return!!t&&"mapValue"in t}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=Ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Us(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pn(tl(this.value))}}function SI(t){const e=[];return Us(t.fields,(n,r)=>{const i=new Ut([n]);if(oc(r)){const s=SI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new en(e,0,_e.min(),_e.min(),_e.min(),pn.empty(),0)}static newFoundDocument(e,n,r,i){return new en(e,1,n,_e.min(),r,i,0)}static newNoDocument(e,n){return new en(e,2,n,_e.min(),_e.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,_e.min(),_e.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function A_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=zo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function nM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xI{}class St extends xI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iM(e,n,r):n==="array-contains"?new aM(e,r):n==="in"?new lM(e,r):n==="not-in"?new uM(e,r):n==="array-contains-any"?new cM(e,r):new St(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sM(e,r):new oM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zo(n,this.value)):n!==null&&ks(this.value)===ks(n)&&this.matchesComparison(zo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends xI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rr(e,n)}matches(e){return AI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function AI(t){return t.op==="and"}function CI(t){return rM(t)&&AI(t)}function rM(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function Mp(t){if(t instanceof St)return t.field.canonicalString()+t.op.toString()+Bo(t.value);if(CI(t))return t.filters.map(e=>Mp(e)).join(",");{const e=t.filters.map(n=>Mp(n)).join(",");return`${t.op}(${e})`}}function RI(t,e){return t instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.field.isEqual(i.field)&&xr(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&RI(o,i.filters[a]),!0):!1}(t,e):void ve()}function PI(t){return t instanceof St?function(n){return`${n.field.canonicalString()} ${n.op} ${Bo(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(PI).join(" ,")+"}"}(t):"Filter"}class iM extends St{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class sM extends St{constructor(e,n){super(e,"in",n),this.keys=kI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oM extends St{constructor(e,n){super(e,"not-in",n),this.keys=kI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class aM extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mg(n)&&bl(n.arrayValue,this.value)}}class lM extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bl(this.value.arrayValue,n)}}class uM extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bl(this.value.arrayValue,n)}}class cM extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function R_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dM(t,e,n,r,i,s,o)}function Og(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Xd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bo(r)).join(",")),e.ue=n}return e.ue}function Lg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C_(t.startAt,e.startAt)&&C_(t.endAt,e.endAt)}function Op(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hM(t,e,n,r,i,s,o,a){return new Ql(t,e,n,r,i,s,o,a)}function Vg(t){return new Ql(t)}function P_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bI(t){return t.collectionGroup!==null}function nl(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new zt(Ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yc(s,r))}),n.has(Ut.keyField().canonicalString())||e.ce.push(new Yc(Ut.keyField(),r))}return e.ce}function Er(t){const e=we(t);return e.le||(e.le=fM(e,nl(t))),e.le}function fM(t,e){if(t.limitType==="F")return R_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yc(i.field,s)});const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;return R_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lp(t,e){const n=t.filters.concat([e]);return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vp(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jd(t,e){return Lg(Er(t),Er(e))&&t.limitType===e.limitType}function DI(t){return`${Og(Er(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PI(i)).join(", ")}]`),Xd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bo(i)).join(",")),`Target(${r})`}(Er(t))}; limitType=${t.limitType})`}function Zd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):de.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of nl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=A_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,nl(r),i)||r.endAt&&!function(o,a,u){const c=A_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,nl(r),i))}(t,e)}function pM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NI(t){return(e,n)=>{let r=!1;for(const i of nl(t)){const s=mM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mM(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?zo(u,c):ve()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Us(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM=new dt(de.comparator);function Xr(){return gM}const MI=new dt(de.comparator);function Fa(...t){let e=MI;for(const n of t)e=e.insert(n.key,n);return e}function OI(t){let e=MI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ds(){return rl()}function LI(){return rl()}function rl(){return new ra(t=>t.toString(),(t,e)=>t.isEqual(e))}const yM=new dt(de.comparator),vM=new zt(de.comparator);function Pe(...t){let e=vM;for(const n of t)e=e.add(n);return e}const _M=new zt(Le);function wM(){return _M}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(e)?"-0":e}}function jI(t){return{integerValue:""+t}}function EM(t,e){return JN(e)?jI(e):VI(t,e)}/**
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
 */class eh{constructor(){this._=void 0}}function TM(t,e,n){return t instanceof Xc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dg(s)&&(s=Ng(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ho?UI(t,e):t instanceof qo?$I(t,e):function(i,s){const o=FI(i,s),a=k_(o)+k_(i.Pe);return Np(o)&&Np(i.Pe)?jI(a):VI(i.serializer,a)}(t,e)}function IM(t,e,n){return t instanceof Ho?UI(t,e):t instanceof qo?$I(t,e):n}function FI(t,e){return t instanceof Jc?function(r){return Np(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xc extends eh{}class Ho extends eh{constructor(e){super(),this.elements=e}}function UI(t,e){const n=zI(e);for(const r of t.elements)n.some(i=>xr(i,r))||n.push(r);return{arrayValue:{values:n}}}class qo extends eh{constructor(e){super(),this.elements=e}}function $I(t,e){let n=zI(e);for(const r of t.elements)n=n.filter(i=>!xr(i,r));return{arrayValue:{values:n}}}class Jc extends eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function k_(t){return Tt(t.integerValue||t.doubleValue)}function zI(t){return Mg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.field=e,this.transform=n}}function SM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ho&&i instanceof Ho||r instanceof qo&&i instanceof qo?$o(r.elements,i.elements,xr):r instanceof Jc&&i instanceof Jc?xr(r.Pe,i.Pe):r instanceof Xc&&i instanceof Xc}(t.transform,e.transform)}class xM{constructor(e,n){this.version=e,this.transformResults=n}}class $n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function HI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jg(t.key,$n.none()):new Yl(t.key,t.data,$n.none());{const n=t.data,r=pn.empty();let i=new zt(Ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qi(t.key,r,new xn(i.toArray()),$n.none())}}function AM(t,e,n){t instanceof Yl?function(i,s,o){const a=i.value.clone(),u=D_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Qi?function(i,s,o){if(!ac(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=D_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function il(t,e,n,r){return t instanceof Yl?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=s.value.clone(),d=N_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qi?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=N_(s.fieldTransforms,u,o),d=o.data;return d.setAll(qI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ac(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function CM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FI(r.transform,i||null);s!=null&&(n===null&&(n=pn.empty()),n.set(r.field,s))}return n||null}function b_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$o(r,i,(s,o)=>SM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yl extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qi extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function D_(t,e,n){const r=new Map;Ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,IM(o,a,n[i]))}return r}function N_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TM(s,o,e))}return r}class jg extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RM extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&AM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=HI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(n,r)=>b_(n,r))&&$o(this.baseMutations,e.baseMutations,(n,r)=>b_(n,r))}}class Fg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ye(e.mutations.length===r.length);let i=function(){return yM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fg(e,n,r,i)}}/**
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
 */class kM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,De;function DM(t){switch(t){default:return ve();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function WI(t){if(t===void 0)return Yr("GRPC error has no .code"),H.UNKNOWN;switch(t){case wt.OK:return H.OK;case wt.CANCELLED:return H.CANCELLED;case wt.UNKNOWN:return H.UNKNOWN;case wt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case wt.INTERNAL:return H.INTERNAL;case wt.UNAVAILABLE:return H.UNAVAILABLE;case wt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case wt.NOT_FOUND:return H.NOT_FOUND;case wt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case wt.ABORTED:return H.ABORTED;case wt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case wt.DATA_LOSS:return H.DATA_LOSS;default:return ve()}}(De=wt||(wt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NM(){return new TextEncoder}/**
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
 */const MM=new ms([4294967295,4294967295],0);function M_(t){const e=NM().encode(t),n=new fI;return n.update(e),new Uint8Array(n.digest())}function O_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ms([n,r],0),new ms([i,s],0)]}class Ug{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${n}`);if(r<0)throw new Ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ms.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ms.fromNumber(r)));return i.compare(MM)===1&&(i=new ms([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=M_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ug(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=M_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nh(_e.min(),i,new dt(Le),Xr(),Pe())}}class Xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xl(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class GI{constructor(e,n){this.targetId=e,this.me=n}}class KI{constructor(e,n,r=nn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L_{constructor(){this.fe=0,this.ge=j_(),this.pe=nn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Pe(),n=Pe(),r=Pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ve()}}),new Xl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=j_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class OM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xr(),this.qe=V_(),this.Qe=new dt(Le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Op(s))if(r===0){const o=new de(s.path);this.Ue(n,o,en.newNoDocument(o,_e.min()))}else Ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ps(r).toUint8Array()}catch(u){if(u instanceof II)return Uo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ug(o,i,s)}catch(u){return Uo(u instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Op(a.target)){const u=new de(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,en.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nh(e,n,this.Qe,this.ke,r);return this.ke=Xr(),this.qe=V_(),this.Qe=new dt(Le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new L_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new zt(Le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function V_(){return new dt(de.comparator)}function j_(){return new dt(de.comparator)}const LM={asc:"ASCENDING",desc:"DESCENDING"},VM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jM={and:"AND",or:"OR"};class FM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jp(t,e){return t.useProto3Json||Xd(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function UM(t,e){return Zc(t,e.toTimestamp())}function Tr(t){return Ye(!!t),_e.fromTimestamp(function(n){const r=Ui(n);return new Rt(r.seconds,r.nanos)}(t))}function $g(t,e){return Fp(t,e).canonicalString()}function Fp(t,e){const n=function(i){return new et(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YI(t){const e=et.fromString(t);return Ye(tS(e)),e}function Up(t,e){return $g(t.databaseId,e.path)}function lf(t,e){const n=YI(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(JI(n))}function XI(t,e){return $g(t.databaseId,e)}function $M(t){const e=YI(t);return e.length===4?et.emptyPath():JI(e)}function $p(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JI(t){return Ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F_(t,e,n){return{name:Up(t,e),fields:n.value.mapValue.fields}}function zM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Ye(d===void 0||typeof d=="string"),nn.fromBase64String(d||"")):(Ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nn.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?H.UNKNOWN:WI(c.code);return new ie(d,c.message||"")}(o);n=new KI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lf(t,r.document.name),s=Tr(r.document.updateTime),o=r.document.createTime?Tr(r.document.createTime):_e.min(),a=new pn({mapValue:{fields:r.document.fields}}),u=en.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new lc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lf(t,r.document),s=r.readTime?Tr(r.readTime):_e.min(),o=en.newNoDocument(i,s),a=r.removedTargetIds||[];n=new lc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lf(t,r.document),s=r.removedTargetIds||[];n=new lc([],s,i,null)}else{if(!("filter"in e))return ve();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bM(i,s),a=r.targetId;n=new GI(a,o)}}return n}function BM(t,e){let n;if(e instanceof Yl)n={update:F_(t,e.key,e.value)};else if(e instanceof jg)n={delete:Up(t,e.key)};else if(e instanceof Qi)n={update:F_(t,e.key,e.data),updateMask:JM(e.fieldMask)};else{if(!(e instanceof RM))return ve();n={verify:Up(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ve()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:UM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ve()}(t,e.precondition)),n}function HM(t,e){return t&&t.length>0?(Ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tr(i.updateTime):Tr(s);return o.isEqual(_e.min())&&(o=Tr(s)),new xM(o,i.transformResults||[])}(n,e))):[]}function qM(t,e){return{documents:[XI(t,e.path)]}}function WM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=XI(t,i);const s=function(c){if(c.length!==0)return eS(rr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:to(p.field),direction:QM(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=jp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function GM(t){let e=$M(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=ZI(f);return p instanceof rr&&CI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(E){return new Yc(no(E.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Xd(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,T=f.values||[];return new Qc(T,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,T=f.values||[];return new Qc(T,p)}(n.endAt)),hM(e,i,o,s,a,"F",u,c)}function KM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=no(n.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=no(n.unaryFilter.field);return St.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(n.unaryFilter.field);return St.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=no(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(t):t.fieldFilter!==void 0?function(n){return St.create(no(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>ZI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(t):ve()}function QM(t){return LM[t]}function YM(t){return VM[t]}function XM(t){return jM[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return Ut.fromServerFormat(t.fieldPath)}function eS(t){return t instanceof St?function(n){if(n.op==="=="){if(x_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(S_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(S_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:YM(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>eS(i));return r.length===1?r[0]:{compositeFilter:{op:XM(n.op),filters:r}}}(t):ve()}function JM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r,i,s=_e.min(),o=_e.min(),a=nn.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.ct=e}}function eO(t){const e=GM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this._n=new nO}addToCollectionParentIndex(e,n){return this._n.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Fi.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class nO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new zt(et.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new zt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Wo(0)}static Ln(){return new Wo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(){this.changes=new ra(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&il(r.mutation,i,xn.empty(),Rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Pe()){const i=ds();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ds();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xr();const o=rl(),a=function(){return rl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Qi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),il(d.mutation,c,d.mutation.getFieldMask(),Rt.now())):o.set(c.key,xn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new iO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=rl();let i=new dt((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||xn.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=LI();d.forEach(p=>{if(!s.has(p)){const T=HI(n.get(p),r.get(p));T!==null&&f.set(p,T),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(ds());let a=-1,u=s;return o.next(c=>W.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?W.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Pe())).next(d=>({batchId:a,changes:OI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let i=Fa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fa();return this.indexManager.getCollectionParents(e,s).next(a=>W.forEach(a,u=>{const c=function(f,p){return new Ql(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,en.newInvalidDocument(d)))});let a=Fa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&il(d.mutation,c,xn.empty(),Rt.now()),Zd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return W.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tr(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:eO(i.bundledQuery),readTime:Tr(i.readTime)}}(n)),W.resolve()}}/**
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
 */class aO{constructor(){this.overlays=new dt(de.comparator),this.hr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ds();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=ds(),s=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new dt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ds(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ds(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return W.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kM(n,r));let s=this.hr.get(n);s===void 0&&(s=Pe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.Pr=new zt(Pt.Ir),this.Tr=new zt(Pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new de(new et([])),r=new Pt(n,e),i=new Pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new de(new et([])),r=new Pt(n,e),i=new Pt(n,e+1);let s=Pe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return de.comparator(e.key,n.key)||Le(e.pr,n.pr)}static Er(e,n){return Le(e.pr,n.pr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new zt(Pt.Ir)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pt(n,0),i=new Pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new zt(Le);return n.forEach(i=>{const s=new Pt(i,0),o=new Pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),W.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;de.isDocumentKey(s)||(s=s.child(""));const o=new Pt(new de(s),0);let a=new zt(Le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),W.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return W.forEach(n.mutations,i=>{const s=new Pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Pt(n,0),i=this.wr.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.vr=e,this.docs=function(){return new dt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=Xr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():en.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xr();const o=n.path,a=new de(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||KN(GN(d),r)<=0||(i.has(d.key)||Zd(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ve()}Fr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cO(this)}getSize(e){return W.resolve(this.size)}}class cO extends rO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.persistence=e,this.Mr=new ra(n=>Og(n),Lg),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Or=0,this.Nr=new zg,this.targetCount=0,this.Lr=Wo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),W.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Wo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.qn(n),W.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.Br={},this.overlays={},this.kr=new bg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new dO(this),this.indexManager=new tO,this.remoteDocumentCache=function(i){return new uO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ZM(n),this.$r=new oO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new aO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new lO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const i=new fO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return W.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fO extends YN{constructor(e){super(),this.currentSequenceNumber=e}}class Bg{constructor(e){this.persistence=e,this.zr=new zg,this.jr=null}static Hr(e){return new Bg(e)}get Jr(){if(this.jr)return this.jr;throw ve()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),W.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Jr,r=>{const i=de.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,_e.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return W.or([()=>W.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hg(e,n.fromCache,r,i)}}/**
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
 */class pO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ab()?8:XN(Ht())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ka()<=ke.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),W.resolve()):(ka()<=ke.DEBUG&&se("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ka()<=ke.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Er(n))):W.resolve())}ji(e,n){if(P_(n))return W.resolve(null);let r=Er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vp(n,null,"F"),r=Er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Pe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Vp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return P_(n)||i.isEqual(_e.min())?W.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?W.resolve(null):(ka()<=ke.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.es(e,o,n,WN(i,-1)).next(a=>a))})}Zi(e,n){let r=new zt(NI(e));return n.forEach((i,s)=>{Zd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ka()<=ke.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",eo(n)),this.zi.getDocumentsMatchingQuery(e,n,Fi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new dt(Le),this.rs=new ra(s=>Og(s),Lg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function yO(t,e,n,r){return new gO(t,e,n,r)}async function nS(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function vO(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let T=W.resolve();return p.forEach(E=>{T=T.next(()=>d.getEntry(u,E)).next(C=>{const P=c.docVersions.get(E);Ye(P!==null),C.version.compareTo(P)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rS(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function _O(t,e){const n=we(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let T=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(nn.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(f,T),function(C,P,_){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,T,d)&&a.push(n.Qr.updateTargetData(s,T))});let u=Xr(),c=Pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(wO(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(_e.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return W.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function wO(t,e,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(_e.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):se("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function EO(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function TO(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ii(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function zp(t,e,n){const r=we(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kl(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function U_(t,e,n){const r=we(t);let i=_e.min(),s=Pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=we(u),p=f.rs.get(d);return p!==void 0?W.resolve(f.ns.get(p)):f.Qr.getTargetData(c,d)}(r,o,Er(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:_e.min(),n?s:Pe())).next(a=>(IO(r,pM(e),a),{documents:a,hs:s})))}function IO(t,e,n){let r=t.ss.get(e)||_e.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class $_{constructor(){this.activeTargetIds=wM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SO{constructor(){this.no=new $_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new $_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uu=null;function uf(){return Uu===null?Uu=function(){return 268435456+Math.round(2147483648*Math.random())}():Uu++,"0x"+Uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class RO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=uf(),u=this.vo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(se("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Uo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+na}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=AO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=uf();return new Promise((o,a)=>{const u=new pI;u.setWithCredentials(!0),u.listenOnce(gI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sc.NO_ERROR:const d=u.getResponseJson();se(Yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case sc.TIMEOUT:se(Yt,`RPC '${e}' ${s} timed out`),a(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const f=u.getStatus();if(se(Yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const T=p==null?void 0:p.error;if(T&&T.status&&T.message){const E=function(P){const _=P.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(_)>=0?_:H.UNKNOWN}(T.status);a(new ie(E,T.message))}else a(new ie(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{se(Yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);se(Yt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=uf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_I(),a=vI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new mI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");se(Yt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,T=!1;const E=new CO({lo:P=>{T?se(Yt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(se(Yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),se(Yt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),C=(P,_,y)=>{P.listen(_,S=>{try{y(S)}catch(b){setTimeout(()=>{throw b},0)}})};return C(f,ja.EventType.OPEN,()=>{T||(se(Yt,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),C(f,ja.EventType.CLOSE,()=>{T||(T=!0,se(Yt,`RPC '${e}' stream ${i} transport closed`),E.po())}),C(f,ja.EventType.ERROR,P=>{T||(T=!0,Uo(Yt,`RPC '${e}' stream ${i} transport errored:`,P),E.po(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),C(f,ja.EventType.MESSAGE,P=>{var _;if(!T){const y=P.data[0];Ye(!!y);const S=y,b=S.error||((_=S[0])===null||_===void 0?void 0:_.error);if(b){se(Yt,`RPC '${e}' stream ${i} received error:`,b);const j=b.status;let z=function(A){const R=wt[A];if(R!==void 0)return WI(R)}(j),v=b.message;z===void 0&&(z=H.INTERNAL,v="Unknown error status: "+j+" with message "+b.message),T=!0,E.po(new ie(z,v)),f.close()}else se(Yt,`RPC '${e}' stream ${i} received:`,y),E.yo(y)}}),C(a,yI.STAT_EVENT,P=>{P.stat===bp.PROXY?se(Yt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===bp.NOPROXY&&se(Yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return new FM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&se("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new iS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Yr(n.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ie(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PO extends sS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=zM(this.serializer,e),r=function(s){if(!("targetChange"in s))return _e.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Tr(o.readTime):_e.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=$p(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Op(u)?{documents:qM(s,u)}:{query:WM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=QI(s,o.resumeToken);const c=jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=Zc(s,o.snapshotVersion.toTimestamp());const c=jp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=KM(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=$p(this.serializer),n.removeTarget=e,this.i_(n)}}class kO extends sS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=HM(e.writeResults,e.commitTime),r=Tr(e.commitTime);return this.listener.A_(r,n)}return Ye(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=$p(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BM(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Fp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(H.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Fp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class DO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Yr(n),this.y_=!1):se("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{$s(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=we(u);c.M_.add(4),await Jl(c),c.N_.set("Unknown"),c.M_.delete(4),await ih(c)}(this))})}),this.N_=new DO(r,i)}}async function ih(t){if($s(t))for(const e of t.x_)await e(!0)}async function Jl(t){for(const e of t.x_)await e(!1)}function oS(t,e){const n=we(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Kg(n)?Gg(n):ia(n).Xo()&&Wg(n,e))}function qg(t,e){const n=we(t),r=ia(n);n.F_.delete(e),r.Xo()&&aS(n,e),n.F_.size===0&&(r.Xo()?r.n_():$s(n)&&n.N_.set("Unknown"))}function Wg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).P_(e)}function aS(t,e){t.L_.xe(e),ia(t).I_(e)}function Gg(t){t.L_=new OM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.N_.w_()}function Kg(t){return $s(t)&&!ia(t).Zo()&&t.F_.size>0}function $s(t){return we(t).M_.size===0}function lS(t){t.L_=void 0}async function MO(t){t.N_.set("Online")}async function OO(t){t.F_.forEach((e,n)=>{Wg(t,e)})}async function LO(t,e){lS(t),Kg(t)?(t.N_.D_(e),Gg(t)):t.N_.set("Unknown")}async function VO(t,e,n){if(t.N_.set("Online"),e instanceof KI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(t,r)}else if(e instanceof lc?t.L_.Ke(e):e instanceof GI?t.L_.He(e):t.L_.We(e),!n.isEqual(_e.min()))try{const r=await rS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(nn.EMPTY_BYTE_STRING,d.snapshotVersion)),aS(s,u);const f=new Ii(d.target,u,c,d.sequenceNumber);Wg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await ed(t,r)}}async function ed(t,e,n){if(!Kl(e))throw e;t.M_.add(1),await Jl(t),t.N_.set("Offline"),n||(n=()=>rS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ih(t)})}function uS(t,e){return e().catch(n=>ed(t,n,e))}async function sh(t){const e=we(t),n=$i(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;jO(e);)try{const i=await EO(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,FO(e,i)}catch(i){await ed(e,i)}cS(e)&&dS(e)}function jO(t){return $s(t)&&t.v_.length<10}function FO(t,e){t.v_.push(e);const n=$i(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function cS(t){return $s(t)&&!$i(t).Zo()&&t.v_.length>0}function dS(t){$i(t).start()}async function UO(t){$i(t).V_()}async function $O(t){const e=$i(t);for(const n of t.v_)e.d_(n.mutations)}async function zO(t,e,n){const r=t.v_.shift(),i=Fg.from(r,e,n);await uS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sh(t)}async function BO(t,e){e&&$i(t).E_&&await async function(r,i){if(function(o){return DM(o)&&o!==H.ABORTED}(i.code)){const s=r.v_.shift();$i(r).t_(),await uS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await sh(r)}}(t,e),cS(t)&&dS(t)}async function B_(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=$s(n);n.M_.add(3),await Jl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ih(n)}async function HO(t,e){const n=we(t);e?(n.M_.delete(2),await ih(n)):e||(n.M_.add(2),await Jl(n),n.N_.set("Unknown"))}function ia(t){return t.B_||(t.B_=function(n,r,i){const s=we(n);return s.f_(),new PO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:MO.bind(null,t),To:OO.bind(null,t),Ao:LO.bind(null,t),h_:VO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Kg(t)?Gg(t):t.N_.set("Unknown")):(await t.B_.stop(),lS(t))})),t.B_}function $i(t){return t.k_||(t.k_=function(n,r,i){const s=we(n);return s.f_(),new kO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:UO.bind(null,t),Ao:BO.bind(null,t),R_:$O.bind(null,t),A_:zO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await sh(t)):(await t.k_.stop(),t.v_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Qg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yg(t,e){if(Yr("AsyncQueue",`${e}: ${t}`),Kl(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Fa(),this.sortedSet=new dt(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.q_=new dt(de.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ve():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,Po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class WO{constructor(){this.queries=new ra(e=>DI(e),Jd),this.onlineState="Unknown",this.z_=new Set}}async function hS(t,e){const n=we(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new qO,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Yg(o,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Xg(n)}async function fS(t,e){const n=we(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GO(t,e){const n=we(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Xg(n)}function KO(t,e,n){const r=we(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Xg(t){t.z_.forEach(e=>{e.next()})}var Bp,q_;(q_=Bp||(Bp={})).J_="default",q_.Cache="cache";class pS{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Bp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.key=e}}class gS{constructor(e){this.key=e}}class QO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Pe(),this.mutatedKeys=Pe(),this.Ia=NI(e),this.Ta=new Po(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new H_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),T=Zd(this.query,f)?f:null,E=!!p&&this.mutatedKeys.has(p.key),C=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;p&&T?p.data.isEqual(T.data)?E!==C&&(r.track({type:3,doc:T}),P=!0):this.Ra(p,T)||(r.track({type:2,doc:T}),P=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(a=!0)):!p&&T?(r.track({type:0,doc:T}),P=!0):p&&!T&&(r.track({type:1,doc:p}),P=!0,(u||c)&&(a=!0)),P&&(T?(o=o.add(T),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(T,E){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return C(T)-C(E)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Go(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new H_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Pe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new mS(r))}),n}pa(e){this.la=e.hs,this.Pa=Pe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Go.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class YO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XO{constructor(e){this.key=e,this.wa=!1}}class JO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ra(a=>DI(a),Jd),this.Da=new Map,this.Ca=new Set,this.va=new dt(de.comparator),this.Fa=new Map,this.Ma=new zg,this.xa={},this.Oa=new Map,this.Na=Wo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ZO(t,e,n=!0){const r=TS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await yS(r,e,n,!0),i}async function eL(t,e){const n=TS(t);await yS(n,e,!0,!1)}async function yS(t,e,n,r){const i=await TO(t.localStore,Er(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await tL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&oS(t.remoteStore,i),a}async function tL(t,e,n,r,i){t.Ba=(f,p,T)=>async function(C,P,_,y){let S=P.view.da(_);S.Xi&&(S=await U_(C.localStore,P.query,!1).then(({documents:v})=>P.view.da(v,S)));const b=y&&y.targetChanges.get(P.targetId),j=y&&y.targetMismatches.get(P.targetId)!=null,z=P.view.applyChanges(S,C.isPrimaryClient,b,j);return G_(C,P.targetId,z.fa),z.snapshot}(t,f,p,T);const s=await U_(t.localStore,e,!0),o=new QO(e,s.hs),a=o.da(s.documents),u=Xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);G_(t,n,c.fa);const d=new YO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function nL(t,e,n){const r=we(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Jd(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qg(r.remoteStore,i.targetId),Hp(r,i.targetId)}).catch(Gl)):(Hp(r,i.targetId),await zp(r.localStore,i.targetId,!0))}async function rL(t,e){const n=we(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qg(n.remoteStore,r.targetId))}async function iL(t,e,n){const r=dL(t);try{const i=await function(o,a){const u=we(o),c=Rt.now(),d=a.reduce((T,E)=>T.add(E.key),Pe());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let E=Xr(),C=Pe();return u.os.getEntries(T,d).next(P=>{E=P,E.forEach((_,y)=>{y.isValidDocument()||(C=C.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,E)).next(P=>{f=P;const _=[];for(const y of a){const S=CM(y,f.get(y.key).overlayedDocument);S!=null&&_.push(new Qi(y.key,S,SI(S.value.mapValue),$n.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,_,a)}).next(P=>{p=P;const _=P.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(T,P.batchId,_)})}).then(()=>({batchId:p.batchId,changes:OI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new dt(Le)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Zl(r,i.changes),await sh(r.remoteStore)}catch(i){const s=Yg(i,"Failed to persist write");n.reject(s)}}async function vS(t,e){const n=we(t);try{const r=await _O(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ye(o.wa):i.removedDocuments.size>0&&(Ye(o.wa),o.wa=!1))}),await Zl(n,r,e)}catch(r){await Gl(r)}}function W_(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=we(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.U_)p.j_(a)&&(c=!0)}),c&&Xg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sL(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new dt(de.comparator);o=o.insert(s,en.newNoDocument(s,_e.min()));const a=Pe().add(s),u=new nh(_e.min(),new Map,new dt(Le),o,a);await vS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Jg(r)}else await zp(r.localStore,e,!1).then(()=>Hp(r,e,n)).catch(Gl)}async function oL(t,e){const n=we(t),r=e.batch.batchId;try{const i=await vO(n.localStore,e);wS(n,r,null),_S(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zl(n,i)}catch(i){await Gl(i)}}async function aL(t,e,n){const r=we(t);try{const i=await function(o,a){const u=we(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ye(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);wS(r,e,n),_S(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zl(r,i)}catch(i){await Gl(i)}}function _S(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function wS(t,e,n){const r=we(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Hp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||ES(t,r)})}function ES(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(qg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Jg(t))}function G_(t,e,n){for(const r of n)r instanceof mS?(t.Ma.addReference(r.key,e),lL(t,r)):r instanceof gS?(se("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||ES(t,r.key)):ve()}function lL(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(se("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Jg(t))}function Jg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new de(et.fromString(e)),r=t.Na.next();t.Fa.set(r,new XO(n)),t.va=t.va.insert(n,r),oS(t.remoteStore,new Ii(Er(Vg(n.path)),r,"TargetPurposeLimboResolution",bg.oe))}}async function Zl(t,e,n){const r=we(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Hg.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=we(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>W.forEach(c,p=>W.forEach(p.qi,T=>d.persistence.referenceDelegate.addReference(f,p.targetId,T)).next(()=>W.forEach(p.Qi,T=>d.persistence.referenceDelegate.removeReference(f,p.targetId,T)))))}catch(f){if(!Kl(f))throw f;se("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const T=d.ns.get(p),E=T.snapshotVersion,C=T.withLastLimboFreeSnapshotVersion(E);d.ns=d.ns.insert(p,C)}}}(r.localStore,s))}async function uL(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await nS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new ie(H.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zl(n,r.us)}}function cL(t,e){const n=we(t),r=n.Fa.get(e);if(r&&r.wa)return Pe().add(r.key);{let i=Pe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function TS(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sL.bind(null,e),e.Sa.h_=GO.bind(null,e.eventManager),e.Sa.ka=KO.bind(null,e.eventManager),e}function dL(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aL.bind(null,e),e}class K_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yO(this.persistence,new mO,e.initialUser,this.serializer)}createPersistence(e){return new hO(Bg.Hr,this.serializer)}createSharedClientState(e){return new SO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>W_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uL.bind(null,this.syncEngine),await HO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WO}()}createDatastore(e){const n=rh(e.databaseInfo.databaseId),r=function(s){return new RO(s)}(e.databaseInfo);return function(s,o,a,u){return new bO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new NO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>W_(this.syncEngine,n,0),function(){return z_.D()?new z_:new xO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new JO(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=we(r);se("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Jl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Jt.UNAUTHENTICATED,this.clientId=EI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{se("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(se("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function df(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mL(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>B_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>B_(e.remoteStore,i)),t._onlineComponents=e}function pL(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await df(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pL(n))throw n;Uo("Error using user provided cache. Falling back to memory cache: "+n),await df(t,new K_)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await df(t,new K_);return t._offlineComponents}async function SS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Q_(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Q_(t,new hL))),t._onlineComponents}function gL(t){return SS(t).then(e=>e.syncEngine)}async function xS(t){const e=await SS(t),n=e.eventManager;return n.onListen=ZO.bind(null,e.syncEngine),n.onUnlisten=nL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=rL.bind(null,e.syncEngine),n}function yL(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new IS({next:p=>{o.enqueueAndForget(()=>fS(s,f));const T=p.docs.has(a);!T&&p.fromCache?c.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&p.fromCache&&u&&u.source==="server"?c.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new pS(Vg(a.path),d,{includeMetadataChanges:!0,ra:!0});return hS(s,f)}(await xS(t),t.asyncQueue,e,n,r)),r.promise}function vL(t,e,n={}){const r=new Br;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new IS({next:p=>{o.enqueueAndForget(()=>fS(s,f)),p.fromCache&&u.source==="server"?c.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new pS(a,d,{includeMetadataChanges:!0,ra:!0});return hS(s,f)}(await xS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function AS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _L(t,e,n,r){if(e===!0&&r===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X_(t){if(!de.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function J_(t){if(de.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve()}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_L("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VN;switch(r.type){case"firstParty":return new $N(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y_.get(n);r&&(se("ComponentProvider","Removing Datastore"),Y_.delete(n),r.terminate())}(this),Promise.resolve()}}function wL(t,e,n,r={}){var i;const s=(t=ir(t,ah))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Jt.MOCK_USER;else{a=nb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Jt(c)}t._authCredentials=new jN(new wI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Oi extends sa{constructor(e,n,r){super(e,n,Vg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new de(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function Dn(t,e,...n){if(t=Nt(t),CS("collection","path",e),t instanceof ah){const r=et.fromString(e,...n);return J_(r),new Oi(t,null,r)}{if(!(t instanceof ln||t instanceof Oi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return J_(r),new Oi(t.firestore,null,r)}}function bt(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=EI.newId()),CS("doc","path",e),t instanceof ah){const r=et.fromString(e,...n);return X_(r),new ln(t,null,new de(r))}{if(!(t instanceof ln||t instanceof Oi))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return X_(r),new ln(t.firestore,t instanceof Oi?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new iS(this,"async_queue_retry"),this.hu=()=>{const n=cf();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=cf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=cf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Br;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Kl(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Qg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ve()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class zs extends ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new EL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RS(this),this._firestoreClient.terminate()}}function TL(t,e){const n=typeof t=="object"?t:wg(),r=typeof t=="string"?t:"(default)",i=js(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eb("firestore");s&&wL(i,...s)}return i}function Zg(t){return t._firestoreClient||RS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new eM(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,AS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ko(nn.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ko(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function IL(){return new eu("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=/^__.*__$/;class xL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yl(e,this.data,n,this.fieldTransforms)}}class PS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class lh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return td(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(kS(this.fu)&&SL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class AL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rh(e)}Fu(e,n,r,i=!1){return new lh({fu:e,methodName:n,vu:r,path:Ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(t){const e=t._freezeSettings(),n=rh(t._databaseId);return new AL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bS(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ry("Data must be an object, but it was:",o,r);const a=NS(r,o);let u,c;if(s.merge)u=new xn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=qp(e,f,n);if(!o.contains(p))throw new ie(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);OS(d,p)||d.push(p)}u=new xn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new xL(new pn(a),u,c)}class ch extends tu{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}function DS(t,e,n){return new lh({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ty extends tu{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=DS(this,e,!0),r=this.Mu.map(s=>Bs(s,n)),i=new Ho(r);return new BI(e.path,i)}isEqual(e){return e instanceof ty&&Ss(this.Mu,e.Mu)}}class ny extends tu{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=DS(this,e,!0),r=this.Mu.map(s=>Bs(s,n)),i=new qo(r);return new BI(e.path,i)}isEqual(e){return e instanceof ny&&Ss(this.Mu,e.Mu)}}function CL(t,e,n,r){const i=t.Fu(1,e,n);ry("Data must be an object, but it was:",i,r);const s=[],o=pn.empty();Us(r,(u,c)=>{const d=iy(e,u,n);c=Nt(c);const f=i.Su(d);if(c instanceof ch)s.push(d);else{const p=Bs(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new xn(s);return new PS(o,a,i.fieldTransforms)}function RL(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[qp(e,r,n)],u=[i];if(s.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(qp(e,s[p])),u.push(s[p+1]);const c=[],d=pn.empty();for(let p=a.length-1;p>=0;--p)if(!OS(c,a[p])){const T=a[p];let E=u[p];E=Nt(E);const C=o.Su(T);if(E instanceof ch)c.push(T);else{const P=Bs(E,C);P!=null&&(c.push(T),d.set(T,P))}}const f=new xn(c);return new PS(d,f,o.fieldTransforms)}function PL(t,e,n,r=!1){return Bs(n,t.Fu(r?4:3,e))}function Bs(t,e){if(MS(t=Nt(t)))return ry("Unsupported field value:",e,t),NS(t,e);if(t instanceof tu)return function(r,i){if(!kS(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Bs(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Rt.fromDate(r);return{timestampValue:Zc(i.serializer,s)}}if(r instanceof Rt){const s=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(i.serializer,s)}}if(r instanceof ey)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ko)return{bytesValue:QI(i.serializer,r._byteString)};if(r instanceof ln){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$g(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${oh(r)}`)}(t,e)}function NS(t,e){const n={};return TI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Us(t,(r,i)=>{const s=Bs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof ey||t instanceof Ko||t instanceof ln||t instanceof tu)}function ry(t,e,n){if(!MS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=oh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function qp(t,e,n){if((e=Nt(e))instanceof eu)return e._internalPath;if(typeof e=="string")return iy(t,e);throw td("Field path arguments must be of type string or ",t,!1,void 0,n)}const kL=new RegExp("[~\\*/\\[\\]]");function iy(t,e,n){if(e.search(kL)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eu(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function td(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ie(H.INVALID_ARGUMENT,a+t+u)}function OS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends LS{data(){return super.data()}}function sy(t,e){return typeof e=="string"?iy(t,e):e instanceof eu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oy{}class NL extends oy{}function Yi(t,e,...n){let r=[];e instanceof oy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ru).length,a=s.filter(u=>u instanceof nu).length;if(o>1||o>0&&a>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class nu extends NL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nu(e,n,r)}_apply(e){const n=this._parse(e);return VS(e._query,n),new sa(e.firestore,e.converter,Lp(e._query,n))}_parse(e){const n=uh(e.firestore);return function(s,o,a,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tw(f,d);const T=[];for(const E of f)T.push(ew(u,s,E));p={arrayValue:{values:T}}}else p=ew(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tw(f,d),p=PL(a,o,f,d==="in"||d==="not-in");return St.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Jr(t,e,n){const r=e,i=sy("where",t);return nu._create(i,r,n)}class ru extends oy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ru(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)VS(o,u),o=Lp(o,u)}(e._query,n),new sa(e.firestore,e.converter,Lp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ML(...t){return t.forEach(e=>OL("and",e)),ru._create("and",t)}function ew(t,e,n){if(typeof(n=Nt(n))=="string"){if(n==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bI(e)&&n.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!de.isDocumentKey(r))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I_(t,new de(r))}if(n instanceof ln)return I_(t,n._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function tw(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function OL(t,e){if(!(e instanceof nu||e instanceof ru))throw new ie(H.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class LL{convertValue(e,n="none"){switch(ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Us(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ey(Tt(e.latitude),Tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ng(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pl(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=et.fromString(e);Ye(tS(r));const i=new kl(r.get(1),r.get(3)),s=new de(r.popFirst(5));return i.isEqual(n)||Yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FS extends LS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uc extends FS{data(e={}){return super.data(e)}}class VL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $a(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new $a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $a(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:jL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){t=ir(t,ln);const e=ir(t.firestore,zs);return yL(Zg(e),t._key).then(n=>UL(e,t,n))}class US extends LL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function or(t){t=ir(t,sa);const e=ir(t.firestore,zs),n=Zg(e),r=new US(e);return DL(t._query),vL(n,t._query).then(i=>new VL(e,r,t,i))}function FL(t,e,n){t=ir(t,ln);const r=ir(t.firestore,zs),i=jS(t.converter,e);return hh(r,[bS(uh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$n.none())])}function Ir(t,e,n,...r){t=ir(t,ln);const i=ir(t.firestore,zs),s=uh(i);let o;return o=typeof(e=Nt(e))=="string"||e instanceof eu?RL(s,"updateDoc",t._key,e,n,r):CL(s,"updateDoc",t._key,e),hh(i,[o.toMutation(t._key,$n.exists(!0))])}function $S(t){return hh(ir(t.firestore,zs),[new jg(t._key,$n.none())])}function ay(t,e){const n=ir(t.firestore,zs),r=bt(t),i=jS(t.converter,e);return hh(n,[bS(uh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$n.exists(!1))]).then(()=>r)}function hh(t,e){return function(r,i){const s=new Br;return r.asyncQueue.enqueueAndForget(async()=>iL(await gL(r),i,s)),s.promise}(Zg(t),e)}function UL(t,e,n){const r=n.docs.get(e._key),i=new US(t);return new FS(t,i,e._key,r,new $a(n.hasPendingWrites,n.fromCache),e.converter)}function Qo(...t){return new ty("arrayUnion",t)}function ko(...t){return new ny("arrayRemove",t)}(function(e,n=!0){(function(i){na=i})(ea),Sr(new tr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zs(new FN(r.getProvider("auth-internal")),new BN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Un(__,"4.6.3",e),Un(__,"4.6.3","esm2017")})();var $L="firebase",zL="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un($L,zL,"app");const zS="@firebase/installations",ly="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=1e4,HS=`w:${ly}`,qS="FIS_v2",BL="https://firebaseinstallations.googleapis.com/v1",HL=60*60*1e3,qL="installations",WL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new Vs(qL,WL,GL);function WS(t){return t instanceof sr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS({projectId:t}){return`${BL}/projects/${t}/installations`}function KS(t){return{token:t.token,requestStatus:2,expiresIn:QL(t.expiresIn),creationTime:Date.now()}}async function QS(t,e){const r=(await e.json()).error;return bs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KL(t,{refreshToken:e}){const n=YS(t);return n.append("Authorization",YL(e)),n}async function XS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QL(t){return Number(t.replace("s","000"))}function YL(t){return`${qS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GS(t),i=YS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qS,appId:t.appId,sdkVersion:HS},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XS(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:KS(c.authToken)}}else throw await QS("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=/^[cdef][\w-]{21}$/,Wp="";function eV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tV(t);return ZL.test(n)?n:Wp}catch{return Wp}}function tV(t){return JL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Map;function ex(t,e){const n=fh(t);tx(n,e),nV(n,e)}function tx(t,e){const n=ZS.get(t);if(n)for(const r of n)r(e)}function nV(t,e){const n=rV();n&&n.postMessage({key:t,fid:e}),iV()}let hs=null;function rV(){return!hs&&"BroadcastChannel"in self&&(hs=new BroadcastChannel("[Firebase] FID Change"),hs.onmessage=t=>{tx(t.data.key,t.data.fid)}),hs}function iV(){ZS.size===0&&hs&&(hs.close(),hs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV="firebase-installations-database",oV=1,Ds="firebase-installations-store";let hf=null;function uy(){return hf||(hf=PT(sV,oV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ds)}}})),hf}async function nd(t,e){const n=fh(t),i=(await uy()).transaction(Ds,"readwrite"),s=i.objectStore(Ds),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ex(t,e.fid),e}async function nx(t){const e=fh(t),r=(await uy()).transaction(Ds,"readwrite");await r.objectStore(Ds).delete(e),await r.done}async function ph(t,e){const n=fh(t),i=(await uy()).transaction(Ds,"readwrite"),s=i.objectStore(Ds),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ex(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t){let e;const n=await ph(t.appConfig,r=>{const i=aV(r),s=lV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Wp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aV(t){const e=t||{fid:eV(),registrationStatus:0};return rx(e)}function lV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=uV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cV(t)}:{installationEntry:e}}async function uV(t,e){try{const n=await XL(t,e);return nd(t.appConfig,n)}catch(n){throw WS(n)&&n.customData.serverCode===409?await nx(t.appConfig):await nd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cV(t){let e=await nw(t.appConfig);for(;e.registrationStatus===1;)await JS(100),e=await nw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cy(t);return r||n}return e}function nw(t){return ph(t,e=>{if(!e)throw bs.create("installation-not-found");return rx(e)})}function rx(t){return dV(t)?{fid:t.fid,registrationStatus:0}:t}function dV(t){return t.registrationStatus===1&&t.registrationTime+BS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hV({appConfig:t,heartbeatServiceProvider:e},n){const r=fV(t,n),i=KL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:HS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await XS(()=>fetch(r,a));if(u.ok){const c=await u.json();return KS(c)}else throw await QS("Generate Auth Token",u)}function fV(t,{fid:e}){return`${GS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e=!1){let n;const r=await ph(t.appConfig,s=>{if(!ix(s))throw bs.create("not-registered");const o=s.authToken;if(!e&&gV(o))return s;if(o.requestStatus===1)return n=pV(t,e),s;{if(!navigator.onLine)throw bs.create("app-offline");const a=vV(s);return n=mV(t,a),a}});return n?await n:r.authToken}async function pV(t,e){let n=await rw(t.appConfig);for(;n.authToken.requestStatus===1;)await JS(100),n=await rw(t.appConfig);const r=n.authToken;return r.requestStatus===0?dy(t,e):r}function rw(t){return ph(t,e=>{if(!ix(e))throw bs.create("not-registered");const n=e.authToken;return _V(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mV(t,e){try{const n=await hV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nd(t.appConfig,r),n}catch(n){if(WS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nd(t.appConfig,r)}throw n}}function ix(t){return t!==void 0&&t.registrationStatus===2}function gV(t){return t.requestStatus===2&&!yV(t)}function yV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HL}function vV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _V(t){return t.requestStatus===1&&t.requestTime+BS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t){const e=t,{installationEntry:n,registrationPromise:r}=await cy(e);return r?r.catch(console.error):dy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(t,e=!1){const n=t;return await TV(n),(await dy(n,e)).token}async function TV(t){const{registrationPromise:e}=await cy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){if(!t||!t.options)throw ff("App Configuration");if(!t.name)throw ff("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ff(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ff(t){return bs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="installations",SV="installations-internal",xV=t=>{const e=t.getProvider("app").getImmediate(),n=IV(e),r=js(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AV=t=>{const e=t.getProvider("app").getImmediate(),n=js(e,sx).getImmediate();return{getId:()=>wV(n),getToken:i=>EV(n,i)}};function CV(){Sr(new tr(sx,xV,"PUBLIC")),Sr(new tr(SV,AV,"PRIVATE"))}CV();Un(zS,ly);Un(zS,ly,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="analytics",RV="firebase_id",PV="origin",kV=60*1e3,bV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Wd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Cn=new Vs("analytics","Analytics",DV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){if(!t.startsWith(hy)){const e=Cn.create("invalid-gtag-resource",{gtagURL:t});return _n.warn(e.message),""}return t}function ox(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function MV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function OV(t,e){const n=MV("firebase-js-sdk-policy",{createScriptURL:NV}),r=document.createElement("script"),i=`${hy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function LV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await ox(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function jV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ox(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function FV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await jV(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await VV(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function UV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=FV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function $V(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hy)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=30,BV=1e3;class HV{constructor(e={},n=BV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ax=new HV;function qV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function WV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:qV(r)},s=bV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Cn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function GV(t,e=ax,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Cn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Cn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new YV;return setTimeout(async()=>{a.abort()},kV),lx({appId:r,apiKey:i,measurementId:s},o,a,e)}async function lx(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ax){var s;const{appId:o,measurementId:a}=t;try{await KV(r,e)}catch(u){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await WV(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!QV(c)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?z0(n,i.intervalMillis,zV):z0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),_n.debug(`Calling attemptFetch again in ${d} millis`),lx(t,f,r,i)}}function KV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QV(t){if(!(t instanceof sr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JV(){if(yg())try{await vg()}catch(t){return _n.warn(Cn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(Cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZV(t,e,n,r,i,s,o){var a;const u=GV(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>_n.error(T)),e.push(u);const c=JV().then(T=>{if(T)return r.getId()}),[d,f]=await Promise.all([u,c]);$V(s)||OV(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[PV]="firebase",p.update=!0,f!=null&&(p[RV]=f),i("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.app=e}_delete(){return delete sl[this.app.options.appId],Promise.resolve()}}let sl={},iw=[];const sw={};let pf="dataLayer",t5="gtag",ow,ux,aw=!1;function n5(){const t=[];if(gg()&&t.push("This is a browser extension environment."),AT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Cn.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function r5(t,e,n){n5();const r=t.options.appId;if(!r)throw Cn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Cn.create("no-api-key");if(sl[r]!=null)throw Cn.create("already-exists",{id:r});if(!aw){LV(pf);const{wrappedGtag:s,gtagCore:o}=UV(sl,iw,sw,pf,t5);ux=s,ow=o,aw=!0}return sl[r]=ZV(t,iw,sw,e,ow,pf,n),new e5(t)}function i5(t=wg()){t=Nt(t);const e=js(t,rd);return e.isInitialized()?e.getImmediate():s5(t)}function s5(t,e={}){const n=js(t,rd);if(n.isInitialized()){const i=n.getImmediate();if(Ss(e,n.getOptions()))return i;throw Cn.create("already-initialized")}return n.initialize({options:e})}async function o5(){if(gg()||!AT()||!yg())return!1;try{return await vg()}catch{return!1}}function a5(t,e,n,r){t=Nt(t),XV(ux,sl[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const lw="@firebase/analytics",uw="0.10.4";function l5(){Sr(new tr(rd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return r5(r,i,n)},"PUBLIC")),Sr(new tr("analytics-internal",t,"PRIVATE")),Un(lw,uw),Un(lw,uw,"esm2017");function t(e){try{const n=e.getProvider(rd).getImmediate();return{logEvent:(r,i,s)=>a5(n,r,i,s)}}catch(n){throw Cn.create("interop-component-reg-failed",{reason:n})}}}l5();const u5={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},fy=kT(u5),je=TL(fy);o5().then(t=>{t&&i5(fy)});Wl(fy);const c5=$(({className:t})=>{const{addToast:e,removeToast:n}=N.useContext(oa),r=Wi(),i=Wl(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}wD(i,a.get("email"),a.get("password")).then(u=>{FL(bt(je,"users",u.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:s,children:[g.jsx(hI,{}),g.jsxs("label",{htmlFor:"email",children:["Email:",g.jsx("input",{id:"email",type:"email",name:"email"})]}),g.jsxs("label",{htmlFor:"password",children:["Password:",g.jsx("input",{id:"password",type:"password",name:"password"})]}),g.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",g.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),g.jsx(Ge,{type:"submit",text:"Sign Up"})]})})})`
  height: 100%;
  background: var(--gray100);
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
`,Hs=N.createContext(null),d5=({children:t})=>{const[e,n]=N.useState();return Wl().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),g.jsx(Hs.Provider,{value:e,children:t})},h5=$(({onClose:t,className:e})=>g.jsx("button",{onClick:t,className:e,formNoValidate:!0,children:g.jsx(zd,{})}))`
  display: grid;
  place-items: center;
  border-radius: 50%;
  padding: 16px;
  border: none;
  box-shadow: var(--shadow-elevation-low);

  &:active {
    box-shadow: none;
  }
`,Li=$(({passedRef:t,className:e,children:n,onClose:r})=>g.jsxs("dialog",{ref:t,className:e,children:[g.jsx(h5,{onClose:r}),n]}))`
  border: none;
  border-radius: 16px;
  box-shadow: var(--shadow-elevation-high);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  html:has([open]) {
    overflow: none;
  }
`,cx=$(({className:t=""})=>g.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,f5=()=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:g.jsx("path",{fill:"currentColor",d:"M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5M5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}),p5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432l-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892l-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39l-1.2-2.432a.473.473 0 0 0-.176-.195"})}))``,m5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.508 5.508 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05A3.493 3.493 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5.01 5.01 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.752.752 0 0 1-.549-.514a3.507 3.507 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"})}))``,g5=$(Ge)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,y5=$.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`,v5=$.form`
  display: grid;
  gap: 8px;
  padding: 16px;
`,_5=t=>or(Yi(Dn(je,"teams"),Jr("userIds","array-contains",t))).then(e=>e.docs.map(r=>{const i=r.data();return{name:i.name,state:i.state,id:r.id}})).catch(e=>console.log(e)),w5=(t,e)=>{const n=bt(je,"users",t);Ir(n,{favoriteTeams:Qo(e)})},E5=(t,e)=>{const n=bt(je,"users",t);Ir(n,{favoriteTeams:ko(e)})},cw=$.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,dw=$.li``,T5=$.h2`
  font-size: 1em;
  font-weight: 500;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 8px;
  align-items: center;
`,I5=$.button`
  background-color: transparent;
  border: none;
  display: inline-grid;
  place-content: center;
  place-items: normal;
  cursor: pointer;
`,S5=$(cx)`
  stroke: red;
`,x5=$(({user:t,className:e})=>{var P,_;const n=N.useRef(),[r,i]=N.useState([]),[s,o]=N.useState({});console.log(r),N.useEffect(()=>{t.uid&&(_5(t.uid).then(y=>i(y)),E(t.uid).then(o))},[t.uid]);const a=()=>{document.body.inert=!0},u=()=>{document.body.inert=!1},c=()=>{var y;(y=n==null?void 0:n.current)==null||y.close(),u()},d=()=>{var y;(y=n==null?void 0:n.current)==null||y.showModal(),a()},f=y=>S=>{const b=new FormData(S.currentTarget);T(S),w5(y,b.get("favoriteTeam")),c(),o(j=>({...j,favoriteTeams:[...j.favoriteTeams?j.favoriteTeams:[],b.get("favoriteTeam")]}))},p=(y,S)=>{S&&(E5(y,S),o(b=>({...b,favoriteTeams:b!=null&&b.favoriteTeams?b==null?void 0:b.favoriteTeams.filter(j=>j!==S):[]})))},T=y=>{y.preventDefault(),y.stopPropagation()},E=y=>dh(bt(je,"users",y)).then(S=>({...S.data(),uid:S.id})),C=y=>y.map(S=>r.find(b=>b.id===S||!1));return g.jsxs("div",{className:e,children:[g.jsx(cw,{children:g.jsx(dw,{children:g.jsxs(wp,{to:"/teams",children:[g.jsx(m5,{})," Teams"]})})}),g.jsxs(T5,{children:[g.jsx(p5,{})," Favorite Teams"]}),(P=s==null?void 0:s.favoriteTeams)!=null&&P.length&&((_=s==null?void 0:s.favoriteTeams)==null?void 0:_.length)>0?g.jsx(cw,{children:C(s==null?void 0:s.favoriteTeams).filter(y=>y).map(y=>g.jsxs(dw,{children:[g.jsxs(Ls,{to:`/teams/${y==null?void 0:y.id}`,children:[y==null?void 0:y.name," (",y==null?void 0:y.state,")"]})," ",g.jsx(I5,{onClick:()=>p(t.uid,y==null?void 0:y.id),children:g.jsx(S5,{})})]}))}):g.jsx("p",{children:"No Favorite Teams"}),g.jsx(Ge,{text:"Favorite a Team",onClick:d}),g.jsx(Li,{passedRef:n,onClose:c,children:g.jsxs(v5,{onSubmit:f(t.uid),children:[g.jsx("label",{htmlFor:"favoriteTeam",children:"Teams:"}),g.jsx("select",{name:"favoriteTeam",id:"favoriteTeam",onClick:T,children:r.filter(y=>{var S;return!((S=s.favoriteTeams)!=null&&S.includes(y.id))}).map(y=>g.jsxs("option",{value:y.id,children:[y.name," (",y.state,")"]},y.id))}),g.jsx(Ge,{text:"Add Favorite",type:"submit"})]})})]})})`
  display: grid;
  gap: 16px;
`,A5=$(({className:t,user:e})=>{const{showPanel:n,setPanelContent:r,setPanelTitle:i}=N.useContext(Bd),s=()=>{i("Navigation Menu"),r(()=>g.jsx(x5,{user:e})),n()};return g.jsx("button",{onClick:s,className:t,children:g.jsx(f5,{})})})`
  background-color: var(--blue400);
  border: none;
  border-radius: 8px;
  padding: 8px;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-elevation-low);

  &:active {
    box-shadow: none;
  }

  & > svg {
    stroke: white;
    color: white;
  }
`,C5=$(({className:t})=>{const e=N.useContext(Hs);return g.jsxs(iT,{children:[g.jsx("nav",{className:t,children:g.jsx("ul",{children:e?g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(A5,{user:e})}),g.jsx(y5,{children:e.email}),g.jsx("li",{children:g.jsx(g5,{text:"Sign out",onClick:()=>Wl().signOut()})})]}):g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(wp,{to:"/sign_in",children:"Sign In"})}),g.jsx("li",{children:g.jsx(wp,{to:"/sign_up",children:"Sign Up"})})]})})}),g.jsx(Sk,{})]})})`
  background-color: var(--blue500);
  padding: 16px 8px;
  color: white;
  position: relative;
  box-shadow: var(--shadow-elevation-medium);

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
`,Gp=$(({className:t,children:e,title:n,...r})=>g.jsxs("details",{className:t,...r,children:[g.jsx("summary",{children:n}),e]}))`
  border-radius: 8px;
  color: white;
  padding: 8px;
`,R5=$(({className:t})=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[g.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),g.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,P5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,k5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,b5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,D5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,N5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,py=$(({className:t,children:e})=>g.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,M5=sg`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,my=$(({className:t})=>g.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${M5} 500ms infinite;
`,O5=aP`
 :root {
    /* --blue100: #3F4366;  */
    --primary: #353859;
    --secondary: #3B3B71;
    --tertiary: #373456;
    /* --blue900: #29284C; */
    --highlight: #B842A8;

    --affirmative: #33C27D;
    --caution: #EA6F3E;

    --orange: #F86543;
    --yellow: #E39506;

    // 10 color pallet

    --1:#1C1837;
    --2: #2C2C4E;
    --3:#3D3C60;
    --4:#2E314F;
    --5:#454766;
    --6:#565874;
    --7:#656781;
    --8:#73758C;
    --9:#808296;
    --10:#8C8DA0;

    // 3 color pallet
    --purple100: #CDC7E6;
    --purple200: #B4ABD9;
    --purple300: #9A8ECC;
    --purple400: #8072C0;
    --purple500: #6756B3;
    --purple600: #55469B;
    --purple700: #46397F;
    --purple800: #362C63;
    --purple900: #261F47;
    --purple950: #0F0C1C;

    --blue100: #9ea0bd;
    --blue200: #8688ac;
    --blue300: #6d709c;
    --blue400: #5b5e86;
    --blue500: #454766;
    --blue600: #3A3C55;
    --blue700: #292B3D;
    --blue800: #212231;
    --blue900: #181925;
    --blue950: #181925;

    --gray100: #E9E9ED;
    --gray200: #D2D3DA;
    --gray300: #BCBCC8;
    --gray400: #A5A6B6;
    --gray500: #8C8DA0;
    --gray600: #787A91;
    --gray700: #65667B;
    --gray800: #535465;
    --gray900: #40414F;
    --gray950: #2E2E38;
    
    --orange100: #f5d8cc;
    --orange200: #eebdaa;
    --orange300: #e7a388;
    --orange400: #cb572a;
    --orange500: #D66538;
    --orange600: #cb572a;
    --orange700: #a94923;
    --orange800: #873a1c;
    --orange900: #662c15;
    --orange950: #441d0e;


  --shadow-color: 0deg 0% 0%;
  --shadow-elevation-low:
    0px 0.7px 0.6px hsl(var(--shadow-color) / 0.17),
    0px 1px 0.9px -2px hsl(var(--shadow-color) / 0.12),
    0px 2.7px 2.4px -4px hsl(var(--shadow-color) / 0.08);
  --shadow-elevation-medium:
    0px 0.7px 0.6px hsl(var(--shadow-color) / 0.14),
    0px 1.2px 1.1px -1px hsl(var(--shadow-color) / 0.12),
    0px 2.7px 2.4px -2px hsl(var(--shadow-color) / 0.1),
    0.1px 6.3px 5.7px -3px hsl(var(--shadow-color) / 0.08),
    0.2px 13.3px 12px -4px hsl(var(--shadow-color) / 0.06);
  --shadow-elevation-high:
    0px 0.7px 0.6px hsl(var(--shadow-color) / 0.13),
    0px 1.7px 1.5px -0.4px hsl(var(--shadow-color) / 0.12),
    0px 3.1px 2.8px -0.9px hsl(var(--shadow-color) / 0.11),
    0.1px 5.3px 4.8px -1.3px hsl(var(--shadow-color) / 0.1),
    0.1px 8.9px 8px -1.8px hsl(var(--shadow-color) / 0.09),
    0.2px 14.4px 13px -2.2px hsl(var(--shadow-color) / 0.08),
    0.3px 22.3px 20.1px -2.7px hsl(var(--shadow-color) / 0.07),
    0.5px 33.3px 30px -3.1px hsl(var(--shadow-color) / 0.06),
    0.6px 47.8px 43px -3.6px hsl(var(--shadow-color) / 0.05),
    0.9px 66.3px 59.7px -4px hsl(var(--shadow-color) / 0.04);

  --serif-font-family: ;
  --sans-serif-font-family: 'Rubik', sans-serif;
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
`,L5=$(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,V5=$.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,j5=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},F5=(t,e)=>new Date(t,e,0).getDate(),U5=(t,e)=>new Date(t,e,1),$5=(t,e)=>{const r=((i,s)=>o=>{var a;if(!((a=i.current)!=null&&a.contains(o.target)))return typeof s=="function"?s(o):null})(t,e);N.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},z5=["January","February","March","April","May","June","July","August","September","October","November","December"],B5=["M","Tu","W","Th","F","Sa","Su"],H5=$.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,q5=$.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,W5=$.div`
  text-align: center;
`,G5=$.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,K5=(t,e)=>{const[n,r]=N.useState([]),i=F5(e,t+1);let s=U5(e,t).getDay()-1;return s===-1&&(s=6),N.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,u)=>u+1)];r(o)},[t,e]),n},Q5=$(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,u]=N.useState(o),[c,d]=N.useState(s),f=K5(a,c),p=j5(new Date(i).getFullYear(),5),T=P=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(P).padStart(2,"0")}-${c}`)},E=()=>{u(P=>Number(P)===0?(d(_=>_-1),11):P-1)},C=()=>u(P=>Number(P)===11?(d(_=>_+1),11):P+1);return g.jsxs("div",{ref:e,className:t,popover:"true",children:[g.jsxs(q5,{children:[g.jsx("select",{value:`${a}/${c}`,onChange:P=>{const[_,y]=P.target.value.split("/");u(Number(_)),d(Number(y))},children:p.map(P=>z5.map((_,y)=>g.jsx("option",{value:`${y}/${P}`,children:`${_} , ${P}`},`${y}/${P}`)))}),g.jsx("button",{"aria-label":"left",onClick:E,children:"←"}),g.jsx("button",{"aria-label":"right",onClick:C,children:"→"})]}),g.jsxs(H5,{children:[B5.map(P=>g.jsx(W5,{children:P},`${P}-header`)),f.map((P,_)=>typeof P=="number"?g.jsx(G5,{onClick:()=>T(P),$selected:new Date(i).getDate()===P&&a===o&&c===s,children:P},`${P}-${a}-${c}`):g.jsx("span",{},`blank-day-${_}`))]})]})})`
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
`;$(({className:t,value:e,setValue:n})=>{const r=N.useRef(null),i=N.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return $5(i,o=>{var a,u;(a=r.current)!=null&&a.contains(o.target)||(u=i.current)==null||u.hidePopover()}),g.jsxs("div",{className:t,children:[g.jsx(V5,{value:e,readOnly:!0}),g.jsx("button",{onClick:s,ref:r,children:g.jsx(L5,{})}),g.jsx(Q5,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const Y5=t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",...t,children:g.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),hw=$(({className:t,...e})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,...e,children:g.jsx("path",{fill:"currentColor",d:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"})}))``,X5={success:Y5,warning:hw,error:hw},fw={success:"var(--affirmative)",warning:"var(--orange500)",error:"red"},pw=$.button`
  padding: 8px 8px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: none;
  box-shadow: var(--shadow-elevation-low);
`,J5=sg`
  from {
    transform: translateX(calc(100% + var(--toast-position)));
    opacity: 0.25;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
`,Z5=$(({className:t,variant:e,children:n,onClose:r})=>{const i=N.useRef(),s=X5[e];return N.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[r]),g.jsxs("div",{className:t,popover:"auto",children:[g.jsx(s,{style:{color:fw[e]}}),g.jsx("div",{children:n}),g.jsx(pw,{onClick:r,children:g.jsx(zd,{})})]})})`
  border-radius: 4px;
  box-shadow: var(--shadow-elevation-high);
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
  position: relative;
  overflow: visible;
  border: none;
  border-left: 5px solid ${t=>fw[t.variant]};
  align-items: center;
  background-color: var(--blue400);
  color: var(--gray100);

  animation: ${J5} 300ms ease-in both;

  & > ${pw} {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`,Kp=$(({toasts:t,className:e})=>{N.useId();const r=(()=>{let i=0;return()=>(i++,i)})();return g.jsx("ul",{className:e,children:t.map(({variant:i,onClose:s,message:o})=>g.jsx("li",{children:g.jsx(Z5,{variant:i,onClose:s,children:o})},r()))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: center;

  @media screen and (width > 850px) {
    justify-items: end;
  }
`,oa=N.createContext(null),e4=({children:t})=>{const[e,n]=N.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return g.jsxs(oa.Provider,{value:{removeToast:i,addToast:r},children:[t,g.jsx(Kp,{toasts:e})]})},Qp=Math.PI,Yp=2*Qp,ss=1e-6,t4=Yp-ss;function dx(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function n4(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return dx;const n=10**e;return function(r){this._+=r[0];for(let i=1,s=r.length;i<s;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class r4{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?dx:n4(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,r,i){this._append`Q${+e},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(e,n,r,i,s,o){this._append`C${+e},${+n},${+r},${+i},${this._x1=+s},${this._y1=+o}`}arcTo(e,n,r,i,s){if(e=+e,n=+n,r=+r,i=+i,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,u=r-e,c=i-n,d=o-e,f=a-n,p=d*d+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(p>ss)if(!(Math.abs(f*u-c*d)>ss)||!s)this._append`L${this._x1=e},${this._y1=n}`;else{let T=r-o,E=i-a,C=u*u+c*c,P=T*T+E*E,_=Math.sqrt(C),y=Math.sqrt(p),S=s*Math.tan((Qp-Math.acos((C+p-P)/(2*_*y)))/2),b=S/y,j=S/_;Math.abs(b-1)>ss&&this._append`L${e+b*d},${n+b*f}`,this._append`A${s},${s},0,0,${+(f*T>d*E)},${this._x1=e+j*u},${this._y1=n+j*c}`}}arc(e,n,r,i,s,o){if(e=+e,n=+n,r=+r,o=!!o,r<0)throw new Error(`negative radius: ${r}`);let a=r*Math.cos(i),u=r*Math.sin(i),c=e+a,d=n+u,f=1^o,p=o?i-s:s-i;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>ss||Math.abs(this._y1-d)>ss)&&this._append`L${c},${d}`,r&&(p<0&&(p=p%Yp+Yp),p>t4?this._append`A${r},${r},0,1,${f},${e-a},${n-u}A${r},${r},0,1,${f},${this._x1=c},${this._y1=d}`:p>ss&&this._append`A${r},${r},0,${+(p>=Qp)},${f},${this._x1=e+r*Math.cos(s)},${this._y1=n+r*Math.sin(s)}`)}rect(e,n,r,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function on(t){return function(){return t}}const mw=Math.abs,Xt=Math.atan2,ts=Math.cos,i4=Math.max,mf=Math.min,cr=Math.sin,_o=Math.sqrt,dn=1e-12,Dl=Math.PI,id=Dl/2,cc=2*Dl;function s4(t){return t>1?0:t<-1?Dl:Math.acos(t)}function gw(t){return t>=1?id:t<=-1?-id:Math.asin(t)}function o4(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);e=r}return t},()=>new r4(e)}function a4(t){return t.innerRadius}function l4(t){return t.outerRadius}function u4(t){return t.startAngle}function c4(t){return t.endAngle}function d4(t){return t&&t.padAngle}function h4(t,e,n,r,i,s,o,a){var u=n-t,c=r-e,d=o-i,f=a-s,p=f*u-d*c;if(!(p*p<dn))return p=(d*(e-s)-f*(t-i))/p,[t+p*u,e+p*c]}function $u(t,e,n,r,i,s,o){var a=t-n,u=e-r,c=(o?s:-s)/_o(a*a+u*u),d=c*u,f=-c*a,p=t+d,T=e+f,E=n+d,C=r+f,P=(p+E)/2,_=(T+C)/2,y=E-p,S=C-T,b=y*y+S*S,j=i-s,z=p*C-E*T,v=(S<0?-1:1)*_o(i4(0,j*j*b-z*z)),w=(z*S-y*v)/b,A=(-z*y-S*v)/b,R=(z*S+y*v)/b,k=(-z*y+S*v)/b,D=w-P,x=A-_,te=R-P,Ie=k-_;return D*D+x*x>te*te+Ie*Ie&&(w=R,A=k),{cx:w,cy:A,x01:-d,y01:-f,x11:w*(i/j-1),y11:A*(i/j-1)}}function f4(){var t=a4,e=l4,n=on(0),r=null,i=u4,s=c4,o=d4,a=null,u=o4(c);function c(){var d,f,p=+t.apply(this,arguments),T=+e.apply(this,arguments),E=i.apply(this,arguments)-id,C=s.apply(this,arguments)-id,P=mw(C-E),_=C>E;if(a||(a=d=u()),T<p&&(f=T,T=p,p=f),!(T>dn))a.moveTo(0,0);else if(P>cc-dn)a.moveTo(T*ts(E),T*cr(E)),a.arc(0,0,T,E,C,!_),p>dn&&(a.moveTo(p*ts(C),p*cr(C)),a.arc(0,0,p,C,E,_));else{var y=E,S=C,b=E,j=C,z=P,v=P,w=o.apply(this,arguments)/2,A=w>dn&&(r?+r.apply(this,arguments):_o(p*p+T*T)),R=mf(mw(T-p)/2,+n.apply(this,arguments)),k=R,D=R,x,te;if(A>dn){var Ie=gw(A/p*cr(w)),pt=gw(A/T*cr(w));(z-=Ie*2)>dn?(Ie*=_?1:-1,b+=Ie,j-=Ie):(z=0,b=j=(E+C)/2),(v-=pt*2)>dn?(pt*=_?1:-1,y+=pt,S-=pt):(v=0,y=S=(E+C)/2)}var Ne=T*ts(y),B=T*cr(y),oe=p*ts(j),ae=p*cr(j);if(R>dn){var Te=T*ts(S),q=T*cr(S),G=p*ts(b),J=p*cr(b),Z;if(P<Dl)if(Z=h4(Ne,B,G,J,Te,q,oe,ae)){var L=Ne-Z[0],he=B-Z[1],Y=Te-Z[0],Ve=q-Z[1],Se=1/cr(s4((L*Y+he*Ve)/(_o(L*L+he*he)*_o(Y*Y+Ve*Ve)))/2),xe=_o(Z[0]*Z[0]+Z[1]*Z[1]);k=mf(R,(p-xe)/(Se-1)),D=mf(R,(T-xe)/(Se+1))}else k=D=0}v>dn?D>dn?(x=$u(G,J,Ne,B,T,D,_),te=$u(Te,q,oe,ae,T,D,_),a.moveTo(x.cx+x.x01,x.cy+x.y01),D<R?a.arc(x.cx,x.cy,D,Xt(x.y01,x.x01),Xt(te.y01,te.x01),!_):(a.arc(x.cx,x.cy,D,Xt(x.y01,x.x01),Xt(x.y11,x.x11),!_),a.arc(0,0,T,Xt(x.cy+x.y11,x.cx+x.x11),Xt(te.cy+te.y11,te.cx+te.x11),!_),a.arc(te.cx,te.cy,D,Xt(te.y11,te.x11),Xt(te.y01,te.x01),!_))):(a.moveTo(Ne,B),a.arc(0,0,T,y,S,!_)):a.moveTo(Ne,B),!(p>dn)||!(z>dn)?a.lineTo(oe,ae):k>dn?(x=$u(oe,ae,Te,q,p,-k,_),te=$u(Ne,B,G,J,p,-k,_),a.lineTo(x.cx+x.x01,x.cy+x.y01),k<R?a.arc(x.cx,x.cy,k,Xt(x.y01,x.x01),Xt(te.y01,te.x01),!_):(a.arc(x.cx,x.cy,k,Xt(x.y01,x.x01),Xt(x.y11,x.x11),!_),a.arc(0,0,p,Xt(x.cy+x.y11,x.cx+x.x11),Xt(te.cy+te.y11,te.cx+te.x11),_),a.arc(te.cx,te.cy,k,Xt(te.y11,te.x11),Xt(te.y01,te.x01),!_))):a.arc(0,0,p,j,b,_)}if(a.closePath(),d)return a=null,d+""||null}return c.centroid=function(){var d=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,f=(+i.apply(this,arguments)+ +s.apply(this,arguments))/2-Dl/2;return[ts(f)*d,cr(f)*d]},c.innerRadius=function(d){return arguments.length?(t=typeof d=="function"?d:on(+d),c):t},c.outerRadius=function(d){return arguments.length?(e=typeof d=="function"?d:on(+d),c):e},c.cornerRadius=function(d){return arguments.length?(n=typeof d=="function"?d:on(+d),c):n},c.padRadius=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:on(+d),c):r},c.startAngle=function(d){return arguments.length?(i=typeof d=="function"?d:on(+d),c):i},c.endAngle=function(d){return arguments.length?(s=typeof d=="function"?d:on(+d),c):s},c.padAngle=function(d){return arguments.length?(o=typeof d=="function"?d:on(+d),c):o},c.context=function(d){return arguments.length?(a=d??null,c):a},c}function p4(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function m4(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function g4(t){return t}function y4(){var t=g4,e=m4,n=null,r=on(0),i=on(cc),s=on(0);function o(a){var u,c=(a=p4(a)).length,d,f,p=0,T=new Array(c),E=new Array(c),C=+r.apply(this,arguments),P=Math.min(cc,Math.max(-cc,i.apply(this,arguments)-C)),_,y=Math.min(Math.abs(P)/c,s.apply(this,arguments)),S=y*(P<0?-1:1),b;for(u=0;u<c;++u)(b=E[T[u]=u]=+t(a[u],u,a))>0&&(p+=b);for(e!=null?T.sort(function(j,z){return e(E[j],E[z])}):n!=null&&T.sort(function(j,z){return n(a[j],a[z])}),u=0,f=p?(P-c*S)/p:0;u<c;++u,C=_)d=T[u],b=E[d],_=C+(b>0?b*f:0)+S,E[d]={data:a[d],index:u,value:b,startAngle:C,endAngle:_,padAngle:y};return E}return o.value=function(a){return arguments.length?(t=typeof a=="function"?a:on(+a),o):t},o.sortValues=function(a){return arguments.length?(e=a,n=null,o):e},o.sort=function(a){return arguments.length?(n=a,e=null,o):n},o.startAngle=function(a){return arguments.length?(r=typeof a=="function"?a:on(+a),o):r},o.endAngle=function(a){return arguments.length?(i=typeof a=="function"?a:on(+a),o):i},o.padAngle=function(a){return arguments.length?(s=typeof a=="function"?a:on(+a),o):s},o}function za(t,e,n){this.k=t,this.x=e,this.y=n}za.prototype={constructor:za,scale:function(t){return t===1?this:new za(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new za(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};za.prototype;const v4=$.svg`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 8px hsl(var(--shadow-color) / 0.24));
`,_4=Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}),w4=({label:t,count:e,percentageOfTotal:n})=>{const r=_4.format(n);return g.jsxs(g.Fragment,{children:[g.jsx("circle",{r:70,fill:"white"}),g.jsx("text",{x:-25,y:0,stroke:"black",transform:"translateX(-50%)",children:t}),g.jsxs("text",{x:-25,y:20,stroke:"black",transform:"translateX(-50%)",children:[r," (",e,")"]})]})},E4=$.g`
  &:hover > path {
    transform: scale(1.1);
  }
`,T4=y4().value(t=>t.value),I4=(t,e)=>{const n=f4();return T4(t).map(r=>({path:n({innerRadius:70,outerRadius:e,startAngle:r.startAngle,endAngle:r.endAngle}),...r}))},S4=t=>{const e=t+1;return`var(--${t>=10?"blue":t>=20?"purple":"gray"}${e%10===0?"950":`${e%10}00`})`},gf=({width:t,height:e,data:n})=>{const i=Math.min(t,e)/2-100,s={label:"",count:NaN},[o,a]=N.useState(s),u=n.reduce((d,f)=>d+=f.value,0),c=d=>f=>{a({label:d.data.name,count:d.data.value})};return g.jsx(v4,{width:t,height:e,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"xMidYMid meet",children:g.jsxs("g",{transform:`translate(${t/2}, ${e/2})`,children:[I4(n,i).map((d,f)=>g.jsxs(E4,{d:d.path,onMouseEnter:c(d),onMouseLeave:()=>a(s),children:[" ",g.jsx("path",{d:d.path,fill:S4(f)})," "]},f)),o.label&&g.jsx(w4,{label:o.label,count:o.count,percentageOfTotal:o.count/u})]})})},x4=N.createContext(null),yf={didCatch:!1,error:null};class A4 extends N.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=yf}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(yf)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&C4(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(yf)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(u);else if(r)a=N.createElement(r,u);else if(i===null||N.isValidElement(i))a=i;else throw o}return N.createElement(x4.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function C4(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const R4=$.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,P4=$.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,yw=$(({children:t,passedRef:e,className:n})=>g.jsx("dialog",{ref:e,className:n,children:g.jsx("div",{children:t})}))`
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
`,k4=$(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=N.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return g.jsxs("li",{className:r,children:[g.jsx(Ls,{to:`/practice_plans/${t}`,children:s(e)}),g.jsx(P4,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),g.jsxs(yw,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",g.jsx("br",{})," This action cannot be undone"," ",g.jsxs("div",{children:[g.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),g.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${yw} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,b4=$(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=Wi(),i=s=>{s("/create")};return g.jsxs("main",{className:t,children:[g.jsxs(R4,{children:[g.jsx("h1",{children:"Practice plans"}),g.jsx(Ge,{onClick:()=>i(r),text:"Add Practice Plan"})]}),g.jsx("ul",{children:e.map(s=>g.jsx(k4,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
  background: var(--gray100);
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
`;$(({className:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!1),{addToast:s,removeToast:o}=N.useContext(oa),a=async c=>{await $S(bt(je,"practice_plan",c)),n(d=>d.filter(f=>f.id!==c)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},u=()=>(i(!0),or(Dn(je,"practice_plan")).then(c=>{const d=c.docs.map(f=>({...f.data(),id:f.id})).sort((f,p)=>Number(p.date.seconds)-Number(f.date.seconds));n(d)}).catch(c=>{throw new Error(c)}).finally(()=>{i(!1)}));return N.useEffect(()=>{u()},[]),g.jsx(A4,{fallback:g.jsx("p",{children:"⚠️ Something went wrong"}),children:g.jsx("div",{className:t,children:r?g.jsx(py,{children:g.jsx(my,{})}):g.jsx(b4,{practicePlans:e,deletePracticePlan:a})})})})`
  background: var(--gray100);
  height: calc(100% - 51px);
`;const D4=$(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>g.jsxs("g",{onClick:s,className:t,children:[g.jsx("circle",{r:i+5,cy:r,cx:n}),g.jsx("circle",{className:t,r:i,cy:r,cx:n}),g.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,vw=$.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,N4=$(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(c=>{const d=i.find(f=>f.moves.includes(c));return d?new Date(Number(d.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),u=c=>c==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(c))/864e5);return g.jsxs(cP,{className:s,addToPracticePlan:()=>r(n.id),children:[g.jsx("span",{children:n.name}),g.jsxs("span",{children:["Last Review: ",a]}),g.jsx(vw,{$reviewUrgency:u(a),children:u(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${vw} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,M4=$(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=N.useContext(Bd),[u,c]=N.useState([]),{id:d=""}=mg(),f=P=>or(Yi(Dn(je,"practice_plan"),Jr("teamId","==",P))).then(_=>{const y=_.docs.map(S=>({...S.data(),id:S.id})).sort((S,b)=>Number(b.date.seconds)-Number(S.date.seconds));c(y)}).catch(_=>{throw new Error(_)});N.useEffect(()=>{f(d)},[]);const p=50,T=70,E=P=>{const _="50%",y="25%",S="75%";return P%3===1||P===0?_:P%6===2||P%6===3?y:S},C=P=>{o(P),s()};return g.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((P,_)=>g.jsxs("g",{children:[g.jsx("line",{x1:E(_),y1:T+_*110,x2:E(_+1),y2:T+(_+1)*110}),g.jsx(D4,{r:p,y:T+_*110,x:E(_),onClick:()=>{a(P),C(()=>g.jsx(g.Fragment,{children:i.filter(y=>y.area===r&&y.position===P).map(y=>g.jsx(N4,{position:P,area:r,move:y,addToPracticePlan:n,practicePlans:u},y.id))}))},text:P})]},P))})})`
  min-height: 100%;
  background: var(--gray100);

  & > g > line {
    stroke: var(--orange);
  }
`,hx=t=>!isNaN(t),gy=(t,e)=>e.map(n=>t.find(r=>r.id===n)),yy=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),_w=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),O4=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(yy(gy(t,e)))),L4=async(t,e)=>{if(!hx(t.date)){alert("please submit a valid date");return}await ay(Dn(je,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},V4=async(t,e,n)=>{const r=bt(je,"practice_plan",t);if(!hx(e.date)){alert("please submit a valid date");return}await Ir(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},j4=$.div`
  height: 100%;
  overflow: scroll;
`,F4=$.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,U4=$.input``,ww=$(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:u})=>{const c=Wi(),[d,f]=N.useState(window.innerWidth>850),{closePanel:p}=N.useContext(Bd);N.useEffect(()=>()=>p(),[]);const T=()=>{window.innerWidth>850&&f(!0)};N.useLayoutEffect(()=>(window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[]);const E=()=>{f(P=>!P)},C=P=>{const[_,y,S]=P.split("-");return new Date(`${y}/${S}/${_}`)};return g.jsxs("aside",{className:t,style:{"--transform":d?"translateX(0%)":"translateX(-100%)"},children:[g.jsx("button",{"aria-label":"show practice plan",onClick:E,children:g.jsx(b5,{})}),g.jsxs(j4,{children:["Date:",g.jsx(U4,{type:"date",value:r,onChange:P=>a(P.target.value)}),g.jsx("h1",{children:"Practice Plan"}),Object.entries(yy(gy(e,n))).map(([P,_])=>g.jsxs(N.Fragment,{children:[g.jsx("h2",{children:P}),_.map(y=>g.jsx(Gp,{title:y.name,children:y.moves.map(({name:S,id:b})=>g.jsxs(z4,{children:[S,g.jsx(B4,{onClick:()=>i(b),children:g.jsx(zd,{})})]},`${y.name}=${S}`))},y.name))]},P)),g.jsxs(F4,{children:[!o&&g.jsx(Ge,{onClick:s,text:"Clear Practice Plan",Icon:$4,$level:"caution"}),g.jsx(Ge,{onClick:()=>O4(e,n),text:"Copy Practice Plan",Icon:R5}),g.jsx(Ge,{onClick:()=>{o?V4(o,{moves:n,date:C(r),teamId:u},c):L4({moves:n,date:C(r),teamId:u},c)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:P5})]})]})]})})`
  background: var(--gray100);
  color: white;
  padding: clamp(8px, 3vw, 32px);
  box-shadow: var(--shadow-elevation-high);
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
    box-shadow: var(--shadow-elevation-medium);
    cursor: pointer;
    transform: translateX(90%);
    @media screen and (width >= 850px) {
      display: none;
    }
  }
`,$4=$(cx)`
  stroke: white;
`,z4=$.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,B4=$.button`
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
`,Ew=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},H4=t=>{const[e,n]=N.useState([]),[r,i]=N.useState(Ew(new Date));return N.useEffect(()=>{t&&dh(bt(je,"practice_plan",t)).then(o=>{const a={...o.data(),id:o.id};i(Ew(new Date(Number(a.date.seconds)*1e3))),n(a.moves)})},[t]),[e,n,r,i]},q4=t=>or(Yi(Dn(je,"moves"),Jr("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),W4=$(pP)`
  grid-area: nav;
  position: sticky;
  bottom: 0;
`,Tw=$(({className:t})=>{const[e,n]=N.useState("neutral"),[r,i]=N.useState([]),{addToast:s,removeToast:o}=N.useContext(oa),{practice_plan_id:a,id:u=""}=mg(),[c,d,f,p]=H4(a);N.useEffect(()=>{q4(u).then(_=>i(_))},[u]);const T=()=>{p(new Date),d([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},E=_=>{d(y=>y.includes(_)?(s({variant:"error",message:"move already exists",onClose:()=>o("move already exists")}),y):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...y,_]))},C=_=>{d(y=>[...y].filter(S=>S!==_)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},P=_=>{p(_),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return g.jsxs("main",{className:t,children:[g.jsx(ww,{moves:r,practicePlanMoves:c,practicePlanDate:f,clearPracticePlan:T,removeFromPracticePlan:C,currentPracticePlanId:a,updatePracticePlanDate:P,teamId:u}),g.jsx(M4,{addToPracticePlan:E,content:[..._w(r).find(_=>_.name===e).positions],area:e,moves:r}),g.jsx(W4,{tabs:_w(r).map(_=>_.name),currentTab:e,setCurrentTab:n})]})})`
  display: grid;
  grid-template-areas: 'content' 'nav';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr fit-content;

  @media screen and (width >= 850px) {
    grid-template-areas: 'plan content' 'nav nav';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${ww} {
    grid-area: plan;
    position: sticky;
    top: 0;
    height: 100svh;
    box-sizing: border-box;
    background-color: var(--blue500);

    @media screen and (width <= 850px) {
      position: fixed;
      left: 0;
      width: 75vw;
    }
  }

  :root {
    ${og} {
      background-color: red !important;
    }
  }
`,G4=$.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,K4=$.ul`
  list-style: none;
`,Q4=t=>Yi(Dn(je,"practice_plan"),Jr(IL(),"==",t)),Y4=t=>or(Q4(t)).then(e=>{const n=e.docs.map(i=>({...i.data(),id:i.id})),[r]=n;return r}),X4=()=>or(Dn(je,"moves")).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),J4=t=>new Date(Number(t)*1e3).toLocaleDateString(),Z4=$(({className:t})=>{const[e,n]=N.useState({date:{seconds:"",milliseconds:""},moves:[],id:""}),[r,i]=N.useState([]),s=Os(),o=Wi(),a=s.pathname.split("/").at(-1)??"";N.useEffect(()=>{X4().then(c=>i(c)),Y4(a).then(c=>n(c))},[a]);const u=c=>{o("edit")};return g.jsxs("main",{className:t,children:[g.jsx("h1",{children:J4(e.date.seconds)}),Object.entries(yy(gy(r,e.moves))).map(([c,d])=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:c}),g.jsx(G4,{children:d.map(f=>g.jsx("li",{children:g.jsx(Gp,{title:f.name,open:!0,children:g.jsx(K4,{children:f==null?void 0:f.moves.map(p=>g.jsx("li",{children:p.name},`${f.name}-${p.name}`))})})},f.name))},c)]})),g.jsx(Ge,{onClick:()=>u(),text:"Edit Practice Plan",Icon:k5,$level:"caution"})]})})`
  min-height: 100%;
  background: var(--gray100);
  padding: 32px;
  color: var(--gray900);
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${Ge} {
    align-self: start;
  }

  & ${Gp} {
    background-color: var(--blue500);
  }
`,sd=$.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,ej=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],fx=Dn(je,"teams"),tj=()=>or(fx).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),nj=$.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
  gap: 8px;
`,rj=$.li`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: var(--blue400);
  border-radius: 8px;
  box-shadow: var(--shadow-elevation-medium);

  & > a {
    display: block;
    & > ${Ge} {
      width: 100%;
    }
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`,Iw=$.div`
  background-color: aliceblue;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  font-size: 8px;
  box-shadow: var(--shadow-elevation-low);
`,Sw=$.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,ij=$.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,sj=$(({className:t,teams:e,setTeams:n})=>{const r=N.useContext(Hs),{addToast:i,removeToast:s}=N.useContext(oa),o=N.useRef(),a=N.useRef(),u=()=>{o.current&&o.current.showModal()},c=()=>{o.current&&o.current.close()},d=()=>{a.current&&a.current.showModal()},f=()=>{a.current&&a.current.close()},p=E=>{E.preventDefault();const C=new FormData(E.currentTarget),P={name:C.get("teamName"),state:C.get("stateLocation"),joinRequests:[],goals:[],userIds:[r.uid],users:[{role:"admin",uid:r.uid}]};ay(fx,P).then(_=>{n(y=>[...y,{...P,id:_.id}]),c()})},T=E=>{E.preventDefault();const C=new FormData(E.currentTarget),P=e.find(_=>_.id===C.get("teamToJoin"));if(P&&P.joinRequests.find(y=>y.uid===r.uid)){i({variant:"success",message:"You have an existing request to join this team",onClose:()=>s("You have an existing request to join this team")});return}Ir(bt(je,"teams",C.get("teamToJoin")),{joinRequests:Qo({userEmail:r.email,uid:r.uid,role:C.get("requestedRole")})}).then(()=>{f(),i({variant:"success",message:"Request Successfully Submitted",onClose:()=>s("Request Successfully Submitted")})})};return g.jsxs("main",{className:t,children:[g.jsx("h1",{children:"My Teams"}),g.jsx(nj,{children:e.filter(E=>E.userIds.includes(r.uid)).map(E=>g.jsxs(rj,{children:[g.jsxs("span",{children:[E.name," (",E.state,")"]}),g.jsxs(Sw,{children:["Users ",g.jsx(Iw,{children:E.users.length})]}),g.jsxs(Sw,{children:[g.jsx("span",{children:"Join Requests"})," ",g.jsx(Iw,{children:E.joinRequests.length})]}),E.users.find(C=>C.uid===r.uid&&C.role==="admin")?g.jsx(sd,{$color:"white",children:"Admin"}):g.jsx("span",{}),g.jsx(Ls,{to:E.id,children:g.jsx(Ge,{text:"view"})})]},E.id))}),g.jsxs(ij,{children:[g.jsx(Ge,{text:"Request to Join a Team",onClick:d}),g.jsx(Ge,{text:"Create a Team",onClick:u})]}),g.jsx(Li,{passedRef:o,onClose:c,children:g.jsxs("form",{onSubmit:p,children:[g.jsxs("label",{htmlFor:"teamName",children:[g.jsx("span",{children:"Team Name:"}),g.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),g.jsxs("label",{htmlFor:"stateLocation",children:[g.jsx("span",{children:"State:"}),g.jsx("select",{name:"stateLocation",id:"stateLocation",children:ej.map(E=>g.jsx("option",{value:E,children:E},E))})]}),g.jsx(Ge,{text:"Create",type:"submit"})]})}),g.jsx(Li,{passedRef:a,onClose:f,children:g.jsxs("form",{onSubmit:T,children:[g.jsxs("label",{htmlFor:"teamToJoin",children:[g.jsx("span",{children:"Team:"}),g.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(E=>!E.userIds.includes(r.uid)).map(E=>g.jsxs("option",{value:E.id,children:[E.name," (",E.state,")"]},E.id))})]}),g.jsxs("label",{htmlFor:"requestedRole",children:[g.jsx("span",{children:"Requested Role:"}),g.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(E=>g.jsx("option",{value:E,children:E},E))})]}),g.jsx(Ge,{text:"Send Request to Join",type:"submit"})]})})]})})`
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
    color: var(--gray900);
  }

  & > ${Li} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,oj=$(({className:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!1);return N.useEffect(()=>{i(!0),tj().then(s=>n(s)).then(()=>i(!1))},[]),g.jsx("div",{className:t,children:r?g.jsx(py,{children:g.jsx(my,{})}):g.jsx(sj,{teams:e,setTeams:n})})})`
  min-height: 100%;
  background: var(--gray100);
`,aj=$(Ge)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,vy=({roles:t,team:e,children:n})=>{const r=N.useContext(Hs),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},lj=$(({uid:t,role:e,team:n,setTeam:r,className:i})=>{const[s,o]=N.useState(""),a=N.useContext(Hs),u=N.useRef(),c=async E=>await dh(bt(je,"users",E)).then(C=>({...C.data(),id:C.id}).email);N.useEffect(()=>{c(t).then(o)},[t]);const d=()=>{Ir(bt(je,"teams",n.id),{users:ko({uid:t,role:e}),userIds:ko(t)}),r(E=>({...E,users:E.users.filter(C=>C.uid!==t),userIds:E.userIds.filter(C=>C!==t)}))},f=()=>{u.current&&u.current.showModal()},p=()=>{u.current&&u.current.close()},T=E=>{E.preventDefault();const C=new FormData(E.currentTarget);Ir(bt(je,"teams",n.id),{users:ko({uid:t,role:e})}),Ir(bt(je,"teams",n.id),{users:Qo({uid:t,role:C.get("newRole")})}),r(P=>{const _=P.users.find(y=>y.uid===t);if(!_){alert("could not find user!");return}return _.role=C.get("newRole"),{...P,users:[...P.users.filter(y=>y.uid!==t),_].filter(y=>y)}}),u.current&&p()};return g.jsxs("li",{className:i,children:[g.jsx("span",{children:s}),g.jsx(sd,{children:e}),g.jsxs(vy,{roles:["admin"],team:n,children:[g.jsx(aj,{onClick:f,text:"Update Role"}),t!==a.uid&&g.jsx(_y,{$level:"caution",onClick:d,text:"Remove User"}),g.jsx(Li,{passedRef:u,onClose:p,children:g.jsxs("form",{onSubmit:T,children:[g.jsxs("label",{htmlFor:"newRole",children:[g.jsx("span",{children:"New Role:"}),g.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(E=>g.jsx("option",{value:E,children:E},E))})]}),g.jsx(Ge,{text:"Update Role",type:"submit"})]})})]})]})})`
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

    ${sd} {
      justify-self: center;
    }
  }
`,uj=t=>dh(bt(je,"teams",t)).then(e=>({...e.data(),id:e.id})),cj=t=>or(Yi(Dn(je,"moves"),Jr("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),dj=t=>or(Yi(Dn(je,"practice_plan"),Jr("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),hj=["jv","varsity","state qualifier","state placer"],fj=["neutral","top","bottom"],pj=$(({className:t,moves:e,setMoves:n,teamId:r,team:i})=>{const s=N.useRef(),o=()=>{s.current&&s.current.showModal()},a=()=>{s.current&&s.current.close()},u=c=>{c.preventDefault();const d=new FormData(c.currentTarget),f={area:d.get("area"),level:d.get("level"),name:d.get("name"),position:d.get("position"),teamId:r};ay(Dn(je,"moves"),f).then(p=>{n(T=>[...T,{...f,id:p.id}])}),a()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Moves"}),g.jsx(mj,{children:e.map(c=>g.jsx(vj,{move:c}))}),g.jsxs(vy,{roles:["admin","base+"],team:i,children:[g.jsx(Ge,{onClick:o,text:"Add Move"}),g.jsx(Li,{passedRef:s,onClose:a,children:g.jsxs("form",{onSubmit:u,children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx("span",{children:"Move name:"}),g.jsx("input",{type:"text",name:"name",id:"name"})]}),g.jsxs("label",{htmlFor:"area",children:[g.jsx("span",{children:"Move Area:"}),g.jsx("select",{name:"area",id:"area",children:fj.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"level",children:[g.jsx("span",{children:"Move Level:"}),g.jsx("select",{name:"level",id:"level",children:hj.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"position",children:[g.jsx("span",{children:"Move Position:"}),g.jsx("input",{type:"text",name:"position",id:"position"})]}),g.jsx(Ge,{text:"Add Move",type:"submit"})]})})]})]})})`
  display: grid;
  gap: 16px;
  & > h2 {
    color: var(--gray900);
  }
`,mj=$.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,gj=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",yj=t=>t==="jv"?"JV":t==="varsity"?"V":t==="state qualifier"?"SQ":t==="state placer"?"SP":"",vj=$(({className:t,move:e})=>g.jsx("li",{className:t,children:g.jsxs("div",{children:[g.jsx("h3",{children:e.name}),g.jsxs("span",{children:[e.area," - ",e.position]}),g.jsx(sd,{$color:gj(e.level),children:yj(e.level)})]})}))`
  & > div {
    display: grid;
    gap: 4px;
    border-radius: 8px;
    padding: 8px;
    background-color: var(--blue400);
    box-shadow: var(--shadow-elevation-medium);

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`,_j=$.span`
  font-size: 1.5em;
`,wj=$.span`
  font-size: 2em;
`,dc=$(({className:t,title:e,subtext:n,value:r})=>g.jsxs("output",{className:t,children:[g.jsx(_j,{children:e}),g.jsx("p",{children:n}),g.jsx(wj,{children:r})]}))`
  background-color: var(--blue500);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow-elevation-medium);
`,Ej=$.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media screen and (width >= 850px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: min-content;
  }

  & > ${dc} {
    width: auto;
  }
`,Tj=$.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`,Ij=$.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,xw=$.section`
  display: grid;
  gap: 8px;
`,Sj=$.ul`
  list-style: none;
`,xj=$.li`
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
`,Aj=$(({className:t,team:e,setTeam:n,teamId:r})=>{const i=o=>{Ir(bt(je,"teams",r),{joinRequests:ko(o),users:Qo({uid:o.uid,role:o.role}),userIds:Qo(o.uid)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid),users:[...a.users,{uid:o.uid,role:o.role}],userIds:[...a.userIds,o.uid]}))},s=o=>{Ir(bt(je,"teams",r),{joinRequests:ko(o)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid)}))};return e?g.jsxs("div",{className:t,children:[g.jsx("h2",{children:"Admin"}),g.jsx(Ij,{children:g.jsxs(vy,{roles:["admin","base+"],team:e,children:[g.jsxs(xw,{children:[g.jsx("h3",{children:"Team Users"}),g.jsx(Tj,{children:e.users.map(o=>g.jsx(lj,{team:e,setTeam:n,uid:o.uid,role:o.role}))})]}),g.jsxs(xw,{children:[g.jsx("h3",{children:"Open Join Requests:"}),g.jsx(Sj,{children:e.joinRequests.map(o=>g.jsxs(xj,{children:[g.jsx("span",{children:o.userEmail}),g.jsx("span",{children:o.role}),g.jsx(Ge,{onClick:()=>i(o),text:"Accept"}),g.jsx(_y,{$level:"caution",onClick:()=>s(o),text:"Decline"})]}))})]})]})})]}):null})`
  display: grid;
  gap: 16px;
  color: var(--gray900);
`,Cj=$.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`,Rj=$.li`
  color: var(--gray100);
  position: relative;
  background-color: var(--blue500);
  border-radius: 8px;
  overflow: clip;
  box-shadow: var(--shadow-elevation-medium);
`,Pj=$.div`
  padding: 8px 16px;
  display: grid;
  align-items: center;
  gap: 16px;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: 1fr;

  @media screen and (width >= 650px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`,_y=$(Ge)`
  color: var(--caution);
  padding: 8px;
  white-space: nowrap;
  color: var(--gray100);

  &:hover {
    background-color: var(--orange600);
  }
`,kj=$(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],{addToast:i,removeToast:s}=N.useContext(oa),o=c=>new Date(Number(c)*1e3).toLocaleDateString(),a=c=>c.map(d=>({time:o(d.date.seconds),id:d.id})).reduce((d,f)=>{const[p,,T]=f.time.split("/"),E=`${r[Number(p)-1]}, ${T}`;return{...d,[E]:[...String(E)in d?d[String(E)]:[],f]}},{}),u=async c=>{await $S(bt(je,"practice_plan",c)),n(d=>d.filter(f=>f.id!==c)),i({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>s("Practice Plan Successfully Deleted")})};return g.jsx("ul",{className:t,children:Object.entries(a(e)).map(([c,d])=>g.jsxs(Rj,{children:[g.jsx(Cj,{children:c}),d.map(f=>g.jsxs(Pj,{children:[f.time,g.jsx(Ls,{to:`practice_plans/${f.id}`,children:g.jsx(Ge,{text:"view"})}),g.jsx(_y,{$level:"caution",text:"Delete Practice Plan",onClick:()=>u(f.id)})]},f.id))]},c))})})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
`,bj=$(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=Wi();return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Practice Plans"}),g.jsx(kj,{practicePlans:e,setPracticePlans:n}),g.jsx(Ge,{text:"Add Practice Plan",onClick:()=>r("practice_plans/create")})]})})`
  display: grid;
  gap: 16px;
  color: var(--gray900);
`,px=$.table`
  border-collapse: collapse;
  border-radius: 8px;
  overflow: clip;
`,wy=$.tr``,hn=$.td`
  padding: 4px 16px;
  text-align: center;
`,Dj=$(({className:t,goal:e,teamId:n,moves:r,practicePlans:i})=>{const[s,o]=N.useState();N.useEffect(()=>{a(e.moveId,n).then(c=>o(c))},[e.moveId,n]);const a=async(c,d)=>await or(Yi(Dn(je,"practice_plan"),ML(Jr("teamId","==",d),Jr("moves","array-contains",c)))).then(f=>f.docs.length),u=r.find(c=>c.id===e.moveId)||{name:"",area:"",position:""};return g.jsxs(wy,{className:t,children:[g.jsx(hn,{children:u.name}),g.jsx(hn,{children:u.area}),g.jsx(hn,{children:u.position}),g.jsx(hn,{children:String(e.startDate)}),g.jsx(hn,{children:String(e.endDate)}),g.jsxs(hn,{children:[Math.round(e.practicePlanPercentage*100),"%"]}),g.jsxs(hn,{children:[Math.round(Number(s)/i.length*100),"%"]})]})})`
  &:nth-of-type(odd) {
    background-color: hsla(255, 10%, 50%, 0.5);
    backdrop-filter: blur(3px);
  }
`,Nj=$.div`
  min-width: 0;
  overflow: auto;
  border-radius: 8px;
  box-shadow: var(--shadow-elevation-medium);

  & > ${px} {
    min-width: 100%;
  }
`,Mj=$.thead`
  & > ${wy} {
    background-color: var(--blue900);
  }
`,Oj=$(({className:t,team:e,setTeam:n,moves:r,practicePlans:i})=>{const[s,o]=N.useState(.5),a=N.useRef(),u=()=>{a.current&&a.current.showModal()},c=()=>{a.current&&a.current.close()},d=f=>{f.preventDefault();const p=new FormData(f.currentTarget);if(!p.get("endDate")&&p.get("startDate")&&!p.get("move")){alert("Please enter all fields");return}if(Number(new Date(p.get("endDate")))-Number(new Date(p.get("startDate")))<0){alert("Start date cannot be after end date");return}const T={moveId:p.get("move"),startDate:p.get("startDate"),endDate:p.get("endDate"),practicePlanPercentage:s};Ir(bt(je,"teams",e.id),{goals:Qo(T)}),n(E=>({...E,goals:[...E.goals,T]})),c()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Goals"}),g.jsx(Nj,{children:g.jsxs(px,{children:[g.jsx(Mj,{children:g.jsxs(wy,{children:[g.jsx(hn,{children:"Name"}),g.jsx(hn,{children:"Area"}),g.jsx(hn,{children:"Position"}),g.jsx(hn,{children:"Start"}),g.jsx(hn,{children:"End"}),g.jsx(hn,{children:"Goal Percentage"}),g.jsx(hn,{children:"Current Percentage"})]})}),g.jsx("tbody",{children:e.goals.map(f=>g.jsx(Dj,{goal:f,teamId:e.id,moves:r,practicePlans:i},JSON.stringify(f)))})]})}),g.jsx(Ge,{text:"Add Goal",onClick:u}),g.jsx(Li,{passedRef:a,onClose:c,children:g.jsxs("form",{onSubmit:d,children:[g.jsx("h2",{children:"Add a Goal"}),g.jsxs("label",{htmlFor:"move",children:[g.jsx("span",{children:"Move:"}),g.jsx("select",{name:"move",id:"move",children:r.map(({id:f,name:p,area:T,position:E})=>g.jsxs("option",{value:f,children:[p," - ",T," - ",E]},f))})]}),g.jsxs("label",{htmlFor:"startDate",children:[g.jsx("span",{children:"Start Date:"}),g.jsx("input",{type:"date",name:"startDate",id:"startDate"})]}),g.jsxs("label",{htmlFor:"endDate",children:[g.jsx("span",{children:"End Date:"}),g.jsx("input",{type:"date",name:"endDate",id:"endDate"})]}),g.jsxs("label",{htmlFor:"practicePlanPercentage",children:[g.jsx("span",{children:"Percentage of Practices"}),g.jsx("output",{children:Math.round(s*100)}),g.jsx("input",{type:"range",max:"1",min:"0",step:".01",value:s,onChange:f=>o(Number(f.target.value))})]}),g.jsx(Ge,{text:"Add Goal",type:"submit"})]})})]})})`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 16px;

  & > h2 {
    color: var(--gray900);
  }
`,Lj=$.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

  @media screen and (width >= 850px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    justify-content: unset;
  }
`,Vj=$(({className:t,practicePlans:e,moves:n})=>{const r=Object.entries(e.flatMap(a=>a.moves).reduce((a,u)=>({...a,[u]:a[u]?a[u]+1:1}),{})).map(([a,u])=>({...n.find(c=>c.id===a)??{},value:u})),i=Object.entries(r.reduce((a,u)=>({...a,[u.position]:a[u.position]?a[u.position]+u.value:u.value}),{})).map(([a,u])=>({name:a,value:u})),s=Object.entries(r.reduce((a,u)=>({...a,[u.area]:a[u.area]?a[u.area]+u.value:u.value}),{})).map(([a,u])=>({name:a,value:u})),o=Object.values(s).map(({value:a})=>a).reduce((a,u)=>a+=u,0);return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Practice Overview"}),g.jsx(Lj,{children:o>0?g.jsxs(g.Fragment,{children:[g.jsxs("div",{children:[g.jsx("h3",{children:"Moves"}),g.jsx(gf,{data:r,width:500,height:500})]}),g.jsxs("div",{children:[g.jsx("h3",{children:"Positions"}),g.jsx(gf,{data:i,width:500,height:500})]}),g.jsxs("div",{children:[g.jsx("h3",{children:"Areas"}),g.jsx(gf,{data:s,width:500,height:500})]})]}):g.jsx("h3",{children:"No data to visualize, add a practice plan"})})]})})`
  color: var(--gray900);
`,jj=$.main`
  display: grid;
  gap: 64px;
  max-width: 90%;

  @media screen and (width > 550px) {
    max-width: 80%;
  }
`,Fj=$.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
  & > h1 {
    color: var(--gray900);
  }
`,ba=$.hr`
  color: white;
`,Uj=$(({className:t})=>{var d;const[e,n]=N.useState(),[r,i]=N.useState([]),[s,o]=N.useState([]),a=N.useContext(Hs),{id:u=""}=mg(),c=Wi();return N.useEffect(()=>{u&&(uj(u).then(n),cj(u).then(i),dj(u).then(o))},[u]),N.useEffect(()=>{a&&e&&!e.userIds.includes(a.uid)&&c("/")},[c,e,a]),g.jsx("div",{className:t,children:e?g.jsxs(jj,{children:[g.jsxs(Fj,{children:[g.jsxs("h1",{children:[e.name," (",e.state,")"]}),g.jsxs(Ej,{children:[g.jsx(dc,{title:"Goals",value:((d=e.goals)==null?void 0:d.length)??0}),g.jsx(dc,{title:"Practice Plans",value:s.length}),g.jsx(dc,{title:"Moves",value:r.length})]})]}),g.jsx(ba,{}),g.jsx(Vj,{practicePlans:s,moves:r}),g.jsx(ba,{}),g.jsx(Oj,{team:e,setTeam:n,moves:r,practicePlans:s}),g.jsx(ba,{}),g.jsx(bj,{practicePlans:s,setPracticePlans:o}),g.jsx(ba,{}),g.jsx(pj,{team:e,teamId:u,setMoves:i,moves:r}),g.jsx(ba,{}),g.jsx(Aj,{setTeam:n,team:e,teamId:u})]}):g.jsx(py,{children:g.jsx(my,{})})})})`
  min-height: 100%;
  background: var(--gray100);
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

  & ${Li} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,$j=$.main`
  min-height: 100%;
  background: var(--gray100);
  color: white;

  & a {
    color: currentColor;
  }

  color: var(--gray900);
`,zj=t=>or(Yi(Dn(je,"teams"),Jr("teamIds","array-contains",t))).then(e=>{e.docs.map(n=>({...n.data(),id:n.id}))});function Bj(t){const e=N.useContext(Hs);return N.useEffect(()=>{e!=null&&e.uid&&zj(e.uid)},[e]),g.jsxs($j,{children:[g.jsx("h1",{children:"Welcome to Home!"}),g.jsx(Ls,{to:"/teams",children:"Go To Teams"})]})}const Hj=Dk(_p(g.jsxs(dr,{path:"/",element:g.jsx(C5,{}),children:[g.jsx(dr,{path:"/",element:g.jsx(Bj,{})}),g.jsx(dr,{path:"teams/:id/practice_plans/create",element:g.jsx(Tw,{})}),g.jsx(dr,{path:"teams/:id/practice_plans/:practice_plan_id",element:g.jsx(Z4,{})}),g.jsx(dr,{path:"/teams",element:g.jsx(oj,{})}),g.jsx(dr,{path:"/teams/:id",element:g.jsx(Uj,{})}),g.jsx(dr,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:g.jsx(Tw,{})}),g.jsx(dr,{path:"/sign_in",element:g.jsx(LN,{})}),g.jsx(dr,{path:"/sign_up",element:g.jsx(c5,{})})]}))),qj=$(({className:t})=>g.jsx("div",{className:t,children:g.jsx(d5,{children:g.jsx(e4,{children:g.jsxs(iT,{children:[g.jsx(Uk,{router:Hj}),g.jsx(O5,{})]})})})}))`
  height: 100%;

  & > ${og} {
    background-color: var(--blue500);
    color: var(--gray100);
    & a {
      color: currentColor;
    }
  }

  & > ${Kp} {
    --toast-position: 0%;
    position: fixed;
    bottom: 16px;
    right: var(--toast-position);
    width: 100%;
  }

  @media screen and (width > 850px) {
    & > ${Kp} {
      --toast-position: 32px;
      right: var(--toast-position);
    }
  }
`,Wj=FE(document.getElementById("root"));async function Gj(){if(!["development","test"].includes("production"))return;const{worker:t}=await Ox(()=>import("./browser-BxBLihda.js"),[]);return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}Gj().then(()=>{Wj.render(g.jsx(N.StrictMode,{children:g.jsx(qj,{})}))});
