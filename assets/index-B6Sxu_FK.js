function Sw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const kA="modulepreload",bA=function(t){return"/technique-map/"+t},ev={},DA=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=bA(a),a in ev)return;ev[a]=!0;const u=a.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":kA,u||(d.as="script",d.crossOrigin=""),d.href=a,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function Yp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Aw={exports:{}},od={},xw={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),NA=Symbol.for("react.portal"),MA=Symbol.for("react.fragment"),OA=Symbol.for("react.strict_mode"),LA=Symbol.for("react.profiler"),VA=Symbol.for("react.provider"),jA=Symbol.for("react.context"),FA=Symbol.for("react.forward_ref"),UA=Symbol.for("react.suspense"),$A=Symbol.for("react.memo"),zA=Symbol.for("react.lazy"),tv=Symbol.iterator;function BA(t){return t===null||typeof t!="object"?null:(t=tv&&t[tv]||t["@@iterator"],typeof t=="function"?t:null)}var Cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rw=Object.assign,Pw={};function Go(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||Cw}Go.prototype.isReactComponent={};Go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kw(){}kw.prototype=Go.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=Pw,this.updater=n||Cw}var Jp=Xp.prototype=new kw;Jp.constructor=Xp;Rw(Jp,Go.prototype);Jp.isPureReactComponent=!0;var nv=Array.isArray,bw=Object.prototype.hasOwnProperty,Zp={current:null},Dw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bw.call(e,r)&&!Dw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function HA(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function qA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rv=/\/+/g;function Eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qA(""+t.key):e.toString(36)}function zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case NA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eh(o,0):r,nv(i)?(n="",t!=null&&(n=t.replace(rv,"$&/")+"/"),zu(i,e,n,"",function(c){return c})):i!=null&&(em(i)&&(i=HA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Eh(s,a);o+=zu(s,e,n,u,i)}else if(u=BA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Eh(s,a++),o+=zu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yu(t,e,n){if(t==null)return t;var r=[],i=0;return zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function WA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Bu={transition:null},GA={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:Zp};function Mw(){throw Error("act(...) is not supported in production builds of React.")}Re.Children={map:yu,forEach:function(t,e,n){yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yu(t,function(){e++}),e},toArray:function(t){return yu(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Re.Component=Go;Re.Fragment=MA;Re.Profiler=LA;Re.PureComponent=Xp;Re.StrictMode=OA;Re.Suspense=UA;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GA;Re.act=Mw;Re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)bw.call(e,u)&&!Dw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};Re.createContext=function(t){return t={$$typeof:jA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VA,_context:t},t.Consumer=t};Re.createElement=Nw;Re.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};Re.createRef=function(){return{current:null}};Re.forwardRef=function(t){return{$$typeof:FA,render:t}};Re.isValidElement=em;Re.lazy=function(t){return{$$typeof:zA,_payload:{_status:-1,_result:t},_init:WA}};Re.memo=function(t,e){return{$$typeof:$A,type:t,compare:e===void 0?null:e}};Re.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};Re.unstable_act=Mw;Re.useCallback=function(t,e){return un.current.useCallback(t,e)};Re.useContext=function(t){return un.current.useContext(t)};Re.useDebugValue=function(){};Re.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Re.useEffect=function(t,e){return un.current.useEffect(t,e)};Re.useId=function(){return un.current.useId()};Re.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Re.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Re.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Re.useMemo=function(t,e){return un.current.useMemo(t,e)};Re.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Re.useRef=function(t){return un.current.useRef(t)};Re.useState=function(t){return un.current.useState(t)};Re.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Re.useTransition=function(){return un.current.useTransition()};Re.version="18.3.1";xw.exports=Re;var N=xw.exports;const Ko=Yp(N),KA=Sw({__proto__:null,default:Ko},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QA=N,YA=Symbol.for("react.element"),XA=Symbol.for("react.fragment"),JA=Object.prototype.hasOwnProperty,ZA=QA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ex={key:!0,ref:!0,__self:!0,__source:!0};function Ow(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JA.call(e,r)&&!ex.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YA,type:t,key:s,ref:o,props:i,_owner:ZA.current}}od.Fragment=XA;od.jsx=Ow;od.jsxs=Ow;Aw.exports=od;var g=Aw.exports,Lw={exports:{}},Pn={},Vw={exports:{}},jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,oe){var ae=z.length;z.push(oe);e:for(;0<ae;){var Te=ae-1>>>1,q=z[Te];if(0<i(q,oe))z[Te]=oe,z[ae]=q,ae=Te;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var oe=z[0],ae=z.pop();if(ae!==oe){z[0]=ae;e:for(var Te=0,q=z.length,G=q>>>1;Te<G;){var J=2*(Te+1)-1,Z=z[J],L=J+1,he=z[L];if(0>i(Z,ae))L<q&&0>i(he,Z)?(z[Te]=he,z[L]=ae,Te=L):(z[Te]=Z,z[J]=ae,Te=J);else if(L<q&&0>i(he,ae))z[Te]=he,z[L]=ae,Te=L;else break e}}return oe}function i(z,oe){var ae=z.sortIndex-oe.sortIndex;return ae!==0?ae:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,T=!1,w=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var oe=n(c);oe!==null;){if(oe.callback===null)r(c);else if(oe.startTime<=z)r(c),oe.sortIndex=oe.expirationTime,e(u,oe);else break;oe=n(c)}}function D(z){if(x=!1,C(z),!w)if(n(u)!==null)w=!0,pt(j);else{var oe=n(c);oe!==null&&Ne(D,oe.startTime-z)}}function j(z,oe){w=!1,x&&(x=!1,_(E),E=-1),T=!0;var ae=p;try{for(C(oe),f=n(u);f!==null&&(!(f.expirationTime>oe)||z&&!k());){var Te=f.callback;if(typeof Te=="function"){f.callback=null,p=f.priorityLevel;var q=Te(f.expirationTime<=oe);oe=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(u)&&r(u),C(oe)}else r(u);f=n(u)}if(f!==null)var G=!0;else{var J=n(c);J!==null&&Ne(D,J.startTime-oe),G=!1}return G}finally{f=null,p=ae,T=!1}}var $=!1,y=null,E=-1,A=5,R=-1;function k(){return!(t.unstable_now()-R<A)}function b(){if(y!==null){var z=t.unstable_now();R=z;var oe=!0;try{oe=y(!0,z)}finally{oe?S():($=!1,y=null)}}else $=!1}var S;if(typeof v=="function")S=function(){v(b)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Ie=te.port2;te.port1.onmessage=b,S=function(){Ie.postMessage(null)}}else S=function(){P(b,0)};function pt(z){y=z,$||($=!0,S())}function Ne(z,oe){E=P(function(){z(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){w||T||(w=!0,pt(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var oe=3;break;default:oe=p}var ae=p;p=oe;try{return z()}finally{p=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ae=p;p=z;try{return oe()}finally{p=ae}},t.unstable_scheduleCallback=function(z,oe,ae){var Te=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ae+q,z={id:d++,callback:oe,priorityLevel:z,startTime:ae,expirationTime:q,sortIndex:-1},ae>Te?(z.sortIndex=ae,e(c,z),n(u)===null&&z===n(c)&&(x?(_(E),E=-1):x=!0,Ne(D,ae-Te))):(z.sortIndex=q,e(u,z),w||T||(w=!0,pt(j))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var oe=p;return function(){var ae=p;p=oe;try{return z.apply(this,arguments)}finally{p=ae}}}})(jw);Vw.exports=jw;var tx=Vw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=N,Rn=tx;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fw=new Set,sl={};function Ds(t,e){Po(t,e),Po(t+"Capture",e)}function Po(t,e){for(sl[t]=e,t=0;t<e.length;t++)Fw.add(e[t])}var Br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iv={},sv={};function ix(t){return yf.call(sv,t)?!0:yf.call(iv,t)?!1:rx.test(t)?sv[t]=!0:(iv[t]=!0,!1)}function sx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ox(t,e,n,r){if(e===null||typeof e>"u"||sx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);zt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);zt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);zt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=zt.hasOwnProperty(e)?zt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ox(e,n,i,r)&&(n=null),r||i===null?ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xr=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vu=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),$w=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),di=Symbol.for("react.lazy"),zw=Symbol.for("react.offscreen"),ov=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Th;function ka(t){if(Th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Th=e&&e[1]||""}return`
`+Th+t}var Ih=!1;function Sh(t,e){if(!t||Ih)return"";Ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function ax(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=Sh(t.type,!1),t;case 11:return t=Sh(t.type.render,!1),t;case 1:return t=Sh(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case no:return"Portal";case vf:return"Profiler";case im:return"StrictMode";case _f:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $w:return(t.displayName||"Context")+".Consumer";case Uw:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case di:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function lx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ux(t){var e=Bw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=ux(t))}function Hw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function av(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qw(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function If(t,e){qw(t,e);var n=Oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sf(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sf(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function _o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(ba(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function Ww(t,e){var n=Oi(e.value),r=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wu,Kw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wu=wu||document.createElement("div"),wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cx=["Webkit","ms","Moz","O"];Object.keys($a).forEach(function(t){cx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$a[e]=$a[t]})});function Qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$a.hasOwnProperty(t)&&$a[t]?(""+e).trim():e+"px"}function Yw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dx=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(dx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kf=null,wo=null,Eo=null;function dv(t){if(t=Ll(t)){if(typeof kf!="function")throw Error(K(280));var e=t.stateNode;e&&(e=dd(e),kf(t.stateNode,t.type,e))}}function Xw(t){wo?Eo?Eo.push(t):Eo=[t]:wo=t}function Jw(){if(wo){var t=wo,e=Eo;if(Eo=wo=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function Zw(t,e){return t(e)}function e1(){}var Ah=!1;function t1(t,e,n){if(Ah)return t(e,n);Ah=!0;try{return Zw(t,e,n)}finally{Ah=!1,(wo!==null||Eo!==null)&&(e1(),Jw())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var bf=!1;if(Br)try{var va={};Object.defineProperty(va,"passive",{get:function(){bf=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{bf=!1}function hx(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var za=!1,fc=null,pc=!1,Df=null,fx={onError:function(t){za=!0,fc=t}};function px(t,e,n,r,i,s,o,a,u){za=!1,fc=null,hx.apply(fx,arguments)}function mx(t,e,n,r,i,s,o,a,u){if(px.apply(this,arguments),za){if(za){var c=fc;za=!1,fc=null}else throw Error(K(198));pc||(pc=!0,Df=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hv(t){if(Ns(t)!==t)throw Error(K(188))}function gx(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hv(i),t;if(s===r)return hv(i),e;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function r1(t){return t=gx(t),t!==null?i1(t):null}function i1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i1(t);if(e!==null)return e;t=t.sibling}return null}var s1=Rn.unstable_scheduleCallback,fv=Rn.unstable_cancelCallback,yx=Rn.unstable_shouldYield,vx=Rn.unstable_requestPaint,vt=Rn.unstable_now,_x=Rn.unstable_getCurrentPriorityLevel,lm=Rn.unstable_ImmediatePriority,o1=Rn.unstable_UserBlockingPriority,mc=Rn.unstable_NormalPriority,wx=Rn.unstable_LowPriority,a1=Rn.unstable_IdlePriority,ad=null,gr=null;function Ex(t){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(ad,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:Sx,Tx=Math.log,Ix=Math.LN2;function Sx(t){return t>>>=0,t===0?32:31-(Tx(t)/Ix|0)|0}var Eu=64,Tu=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Da(a):(s&=o,s!==0&&(r=Da(s)))}else o=n&~i,o!==0?r=Da(o):s!==0&&(r=Da(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function Ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Ax(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l1(){var t=Eu;return Eu<<=1,!(Eu&4194240)&&(Eu=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Cx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Fe=0;function u1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c1,cm,d1,h1,f1,Mf=!1,Iu=[],Ti=null,Ii=null,Si=null,ll=new Map,ul=new Map,fi=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pv(t,e){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function _a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ll(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Px(t,e,n,r,i){switch(e){case"focusin":return Ti=_a(Ti,t,e,n,r,i),!0;case"dragenter":return Ii=_a(Ii,t,e,n,r,i),!0;case"mouseover":return Si=_a(Si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,_a(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,_a(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function p1(t){var e=is(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=n1(n),e!==null){t.blockedOn=e,f1(t.priority,function(){d1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pf=r,n.target.dispatchEvent(r),Pf=null}else return e=Ll(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function mv(t,e,n){Hu(t)&&n.delete(e)}function kx(){Mf=!1,Ti!==null&&Hu(Ti)&&(Ti=null),Ii!==null&&Hu(Ii)&&(Ii=null),Si!==null&&Hu(Si)&&(Si=null),ll.forEach(mv),ul.forEach(mv)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,kx)))}function cl(t){function e(i){return wa(i,t)}if(0<Iu.length){wa(Iu[0],t);for(var n=1;n<Iu.length;n++){var r=Iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ti!==null&&wa(Ti,t),Ii!==null&&wa(Ii,t),Si!==null&&wa(Si,t),ll.forEach(e),ul.forEach(e),n=0;n<fi.length;n++)r=fi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fi.length&&(n=fi[0],n.blockedOn===null);)p1(n),n.blockedOn===null&&fi.shift()}var To=Xr.ReactCurrentBatchConfig,yc=!0;function bx(t,e,n,r){var i=Fe,s=To.transition;To.transition=null;try{Fe=1,dm(t,e,n,r)}finally{Fe=i,To.transition=s}}function Dx(t,e,n,r){var i=Fe,s=To.transition;To.transition=null;try{Fe=4,dm(t,e,n,r)}finally{Fe=i,To.transition=s}}function dm(t,e,n,r){if(yc){var i=Of(t,e,n,r);if(i===null)Lh(t,e,r,vc,n),pv(t,r);else if(Px(i,t,e,n,r))r.stopPropagation();else if(pv(t,r),e&4&&-1<Rx.indexOf(t)){for(;i!==null;){var s=Ll(i);if(s!==null&&c1(s),s=Of(t,e,n,r),s===null&&Lh(t,e,r,vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var vc=null;function Of(t,e,n,r){if(vc=null,t=am(r),t=is(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function m1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_x()){case lm:return 1;case o1:return 4;case mc:case wx:return 16;case a1:return 536870912;default:return 16}default:return 16}}var _i=null,hm=null,qu=null;function g1(){if(qu)return qu;var t,e=hm,n=e.length,r,i="value"in _i?_i.value:_i.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return qu=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Su(){return!0}function gv(){return!1}function kn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Su:gv,this.isPropagationStopped=gv,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Su)},persist:function(){},isPersistent:Su}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=kn(Qo),Ol=ut({},Qo,{view:0,detail:0}),Nx=kn(Ol),Ch,Rh,Ea,ld=ut({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(Ch=t.screenX-Ea.screenX,Rh=t.screenY-Ea.screenY):Rh=Ch=0,Ea=t),Ch)},movementY:function(t){return"movementY"in t?t.movementY:Rh}}),yv=kn(ld),Mx=ut({},ld,{dataTransfer:0}),Ox=kn(Mx),Lx=ut({},Ol,{relatedTarget:0}),Ph=kn(Lx),Vx=ut({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=kn(Vx),Fx=ut({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=kn(Fx),$x=ut({},Qo,{data:0}),vv=kn($x),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hx[t])?!!e[t]:!1}function pm(){return qx}var Wx=ut({},Ol,{key:function(t){if(t.key){var e=zx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=kn(Wx),Kx=ut({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_v=kn(Kx),Qx=ut({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),Yx=kn(Qx),Xx=ut({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=kn(Xx),Zx=ut({},ld,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=kn(Zx),tC=[9,13,27,32],mm=Br&&"CompositionEvent"in window,Ba=null;Br&&"documentMode"in document&&(Ba=document.documentMode);var nC=Br&&"TextEvent"in window&&!Ba,y1=Br&&(!mm||Ba&&8<Ba&&11>=Ba),wv=" ",Ev=!1;function v1(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var io=!1;function rC(t,e){switch(t){case"compositionend":return _1(e);case"keypress":return e.which!==32?null:(Ev=!0,wv);case"textInput":return t=e.data,t===wv&&Ev?null:t;default:return null}}function iC(t,e){if(io)return t==="compositionend"||!mm&&v1(t,e)?(t=g1(),qu=hm=_i=null,io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y1&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function w1(t,e,n,r){Xw(r),e=_c(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,dl=null;function oC(t){b1(t,0)}function ud(t){var e=ao(t);if(Hw(e))return t}function aC(t,e){if(t==="change")return e}var E1=!1;if(Br){var kh;if(Br){var bh="oninput"in document;if(!bh){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),bh=typeof Iv.oninput=="function"}kh=bh}else kh=!1;E1=kh&&(!document.documentMode||9<document.documentMode)}function Sv(){Ha&&(Ha.detachEvent("onpropertychange",T1),dl=Ha=null)}function T1(t){if(t.propertyName==="value"&&ud(dl)){var e=[];w1(e,dl,t,am(t)),t1(oC,e)}}function lC(t,e,n){t==="focusin"?(Sv(),Ha=e,dl=n,Ha.attachEvent("onpropertychange",T1)):t==="focusout"&&Sv()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ud(dl)}function cC(t,e){if(t==="click")return ud(e)}function dC(t,e){if(t==="input"||t==="change")return ud(e)}function hC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var er=typeof Object.is=="function"?Object.is:hC;function hl(t,e){if(er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yf.call(e,i)||!er(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function I1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S1(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=S1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I1(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xv(n,s);var o=xv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=Br&&"documentMode"in document&&11>=document.documentMode,so=null,Lf=null,qa=null,Vf=!1;function Cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||so==null||so!==hc(r)||(r=so,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qa&&hl(qa,r)||(qa=r,r=_c(Lf,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=so)))}function Au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oo={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},Dh={},A1={};Br&&(A1=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function cd(t){if(Dh[t])return Dh[t];if(!oo[t])return t;var e=oo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A1)return Dh[t]=e[n];return t}var x1=cd("animationend"),C1=cd("animationiteration"),R1=cd("animationstart"),P1=cd("transitionend"),k1=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){k1.set(t,e),Ds(e,[t])}for(var Nh=0;Nh<Rv.length;Nh++){var Mh=Rv[Nh],mC=Mh.toLowerCase(),gC=Mh[0].toUpperCase()+Mh.slice(1);$i(mC,"on"+gC)}$i(x1,"onAnimationEnd");$i(C1,"onAnimationIteration");$i(R1,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(P1,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mx(r,e,void 0,t),t.currentTarget=null}function b1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,c),s=u}}}if(pc)throw t=Df,pc=!1,Df=null,t}function Je(t,e){var n=e[zf];n===void 0&&(n=e[zf]=new Set);var r=t+"__bubble";n.has(r)||(D1(e,t,2,!1),n.add(r))}function Oh(t,e,n){var r=0;e&&(r|=4),D1(n,t,r,e)}var xu="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[xu]){t[xu]=!0,Fw.forEach(function(n){n!=="selectionchange"&&(yC.has(n)||Oh(n,!1,t),Oh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xu]||(e[xu]=!0,Oh("selectionchange",!1,e))}}function D1(t,e,n,r){switch(m1(e)){case 1:var i=bx;break;case 4:i=Dx;break;default:i=dm}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}t1(function(){var c=s,d=am(n),f=[];e:{var p=k1.get(t);if(p!==void 0){var T=fm,w=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":T=Gx;break;case"focusin":w="focus",T=Ph;break;case"focusout":w="blur",T=Ph;break;case"beforeblur":case"afterblur":T=Ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Yx;break;case x1:case C1:case R1:T=jx;break;case P1:T=Jx;break;case"scroll":T=Nx;break;case"wheel":T=eC;break;case"copy":case"cut":case"paste":T=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=_v}var x=(e&4)!==0,P=!x&&t==="scroll",_=x?p!==null?p+"Capture":null:p;x=[];for(var v=c,C;v!==null;){C=v;var D=C.stateNode;if(C.tag===5&&D!==null&&(C=D,_!==null&&(D=al(v,_),D!=null&&x.push(pl(v,D,C)))),P)break;v=v.return}0<x.length&&(p=new T(p,w,null,n,d),f.push({event:p,listeners:x}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",p&&n!==Pf&&(w=n.relatedTarget||n.fromElement)&&(is(w)||w[Hr]))break e;if((T||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,T?(w=n.relatedTarget||n.toElement,T=c,w=w?is(w):null,w!==null&&(P=Ns(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(T=null,w=c),T!==w)){if(x=yv,D="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=_v,D="onPointerLeave",_="onPointerEnter",v="pointer"),P=T==null?p:ao(T),C=w==null?p:ao(w),p=new x(D,v+"leave",T,n,d),p.target=P,p.relatedTarget=C,D=null,is(d)===c&&(x=new x(_,v+"enter",w,n,d),x.target=C,x.relatedTarget=P,D=x),P=D,T&&w)t:{for(x=T,_=w,v=0,C=x;C;C=Xs(C))v++;for(C=0,D=_;D;D=Xs(D))C++;for(;0<v-C;)x=Xs(x),v--;for(;0<C-v;)_=Xs(_),C--;for(;v--;){if(x===_||_!==null&&x===_.alternate)break t;x=Xs(x),_=Xs(_)}x=null}else x=null;T!==null&&kv(f,p,T,x,!1),w!==null&&P!==null&&kv(f,P,w,x,!0)}}e:{if(p=c?ao(c):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var j=aC;else if(Tv(p))if(E1)j=dC;else{j=uC;var $=lC}else(T=p.nodeName)&&T.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=cC);if(j&&(j=j(t,c))){w1(f,j,n,d);break e}$&&$(t,p,c),t==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Sf(p,"number",p.value)}switch($=c?ao(c):window,t){case"focusin":(Tv($)||$.contentEditable==="true")&&(so=$,Lf=c,qa=null);break;case"focusout":qa=Lf=so=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Cv(f,n,d);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":Cv(f,n,d)}var y;if(mm)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else io?v1(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(y1&&n.locale!=="ko"&&(io||E!=="onCompositionStart"?E==="onCompositionEnd"&&io&&(y=g1()):(_i=d,hm="value"in _i?_i.value:_i.textContent,io=!0)),$=_c(c,E),0<$.length&&(E=new vv(E,t,null,n,d),f.push({event:E,listeners:$}),y?E.data=y:(y=_1(n),y!==null&&(E.data=y)))),(y=nC?rC(t,n):iC(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new vv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=y))}b1(f,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(pl(t,s,i)),s=al(t,e),s!=null&&r.push(pl(t,s,i))),t=t.return}return r}function Xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=al(n,s),u!=null&&o.unshift(pl(n,u,a))):i||(u=al(n,s),u!=null&&o.push(pl(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(_C,"")}function Cu(t,e,n){if(e=bv(e),bv(t)!==e&&n)throw Error(K(425))}function wc(){}var jf=null,Ff=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(t){return Dv.resolve(null).then(t).catch(TC)}:$f;function TC(t){setTimeout(function(){throw t})}function Vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function Ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),fr="__reactFiber$"+Yo,ml="__reactProps$"+Yo,Hr="__reactContainer$"+Yo,zf="__reactEvents$"+Yo,IC="__reactListeners$"+Yo,SC="__reactHandles$"+Yo;function is(t){var e=t[fr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hr]||n[fr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[fr])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[fr]||t[Hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function dd(t){return t[ml]||null}var Bf=[],lo=-1;function zi(t){return{current:t}}function et(t){0>lo||(t.current=Bf[lo],Bf[lo]=null,lo--)}function Ge(t,e){lo++,Bf[lo]=t.current,t.current=e}var Li={},en=zi(Li),gn=zi(!1),ms=Li;function ko(t,e){var n=t.type.contextTypes;if(!n)return Li;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yn(t){return t=t.childContextTypes,t!=null}function Ec(){et(gn),et(en)}function Mv(t,e,n){if(en.current!==Li)throw Error(K(168));Ge(en,e),Ge(gn,n)}function N1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(K(108,lx(t)||"Unknown",i));return ut({},n,r)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Li,ms=en.current,Ge(en,t),Ge(gn,gn.current),!0}function Ov(t,e,n){var r=t.stateNode;if(!r)throw Error(K(169));n?(t=N1(t,e,ms),r.__reactInternalMemoizedMergedChildContext=t,et(gn),et(en),Ge(en,t)):et(gn),Ge(gn,n)}var Nr=null,hd=!1,jh=!1;function M1(t){Nr===null?Nr=[t]:Nr.push(t)}function AC(t){hd=!0,M1(t)}function Bi(){if(!jh&&Nr!==null){jh=!0;var t=0,e=Fe;try{var n=Nr;for(Fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nr=null,hd=!1}catch(i){throw Nr!==null&&(Nr=Nr.slice(t+1)),s1(lm,Bi),i}finally{Fe=e,jh=!1}}return null}var uo=[],co=0,Ic=null,Sc=0,Mn=[],On=0,gs=null,Mr=1,Or="";function es(t,e){uo[co++]=Sc,uo[co++]=Ic,Ic=t,Sc=e}function O1(t,e,n){Mn[On++]=Mr,Mn[On++]=Or,Mn[On++]=gs,gs=t;var r=Mr;t=Or;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mr=1<<32-Jn(e)+i|n<<i|r,Or=s+t}else Mr=1<<s|n<<i|r,Or=t}function ym(t){t.return!==null&&(es(t,1),O1(t,1,0))}function vm(t){for(;t===Ic;)Ic=uo[--co],uo[co]=null,Sc=uo[--co],uo[co]=null;for(;t===gs;)gs=Mn[--On],Mn[On]=null,Or=Mn[--On],Mn[On]=null,Mr=Mn[--On],Mn[On]=null}var xn=null,Sn=null,rt=!1,Xn=null;function L1(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,Sn=Ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:Mr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,Sn=null,!0):!1;default:return!1}}function Hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(rt){var e=Sn;if(e){var n=e;if(!Lv(t,e)){if(Hf(t))throw Error(K(418));e=Ai(n.nextSibling);var r=xn;e&&Lv(t,e)?L1(r,n):(t.flags=t.flags&-4097|2,rt=!1,xn=t)}}else{if(Hf(t))throw Error(K(418));t.flags=t.flags&-4097|2,rt=!1,xn=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Ru(t){if(t!==xn)return!1;if(!rt)return Vv(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=Sn)){if(Hf(t))throw V1(),Error(K(418));for(;e;)L1(t,e),e=Ai(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=xn?Ai(t.stateNode.nextSibling):null;return!0}function V1(){for(var t=Sn;t;)t=Ai(t.nextSibling)}function bo(){Sn=xn=null,rt=!1}function _m(t){Xn===null?Xn=[t]:Xn.push(t)}var xC=Xr.ReactCurrentBatchConfig;function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jv(t){var e=t._init;return e(t._payload)}function j1(t){function e(_,v){if(t){var C=_.deletions;C===null?(_.deletions=[v],_.flags|=16):C.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Pi(_,v),_.index=0,_.sibling=null,_}function s(_,v,C){return _.index=C,t?(C=_.alternate,C!==null?(C=C.index,C<v?(_.flags|=2,v):C):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,v,C,D){return v===null||v.tag!==6?(v=qh(C,_.mode,D),v.return=_,v):(v=i(v,C),v.return=_,v)}function u(_,v,C,D){var j=C.type;return j===ro?d(_,v,C.props.children,D,C.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===di&&jv(j)===v.type)?(D=i(v,C.props),D.ref=Ta(_,v,C),D.return=_,D):(D=Zu(C.type,C.key,C.props,null,_.mode,D),D.ref=Ta(_,v,C),D.return=_,D)}function c(_,v,C,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Wh(C,_.mode,D),v.return=_,v):(v=i(v,C.children||[]),v.return=_,v)}function d(_,v,C,D,j){return v===null||v.tag!==7?(v=hs(C,_.mode,D,j),v.return=_,v):(v=i(v,C),v.return=_,v)}function f(_,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=qh(""+v,_.mode,C),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vu:return C=Zu(v.type,v.key,v.props,null,_.mode,C),C.ref=Ta(_,null,v),C.return=_,C;case no:return v=Wh(v,_.mode,C),v.return=_,v;case di:var D=v._init;return f(_,D(v._payload),C)}if(ba(v)||ya(v))return v=hs(v,_.mode,C,null),v.return=_,v;Pu(_,v)}return null}function p(_,v,C,D){var j=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return j!==null?null:a(_,v,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case vu:return C.key===j?u(_,v,C,D):null;case no:return C.key===j?c(_,v,C,D):null;case di:return j=C._init,p(_,v,j(C._payload),D)}if(ba(C)||ya(C))return j!==null?null:d(_,v,C,D,null);Pu(_,C)}return null}function T(_,v,C,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return _=_.get(C)||null,a(v,_,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case vu:return _=_.get(D.key===null?C:D.key)||null,u(v,_,D,j);case no:return _=_.get(D.key===null?C:D.key)||null,c(v,_,D,j);case di:var $=D._init;return T(_,v,C,$(D._payload),j)}if(ba(D)||ya(D))return _=_.get(C)||null,d(v,_,D,j,null);Pu(v,D)}return null}function w(_,v,C,D){for(var j=null,$=null,y=v,E=v=0,A=null;y!==null&&E<C.length;E++){y.index>E?(A=y,y=null):A=y.sibling;var R=p(_,y,C[E],D);if(R===null){y===null&&(y=A);break}t&&y&&R.alternate===null&&e(_,y),v=s(R,v,E),$===null?j=R:$.sibling=R,$=R,y=A}if(E===C.length)return n(_,y),rt&&es(_,E),j;if(y===null){for(;E<C.length;E++)y=f(_,C[E],D),y!==null&&(v=s(y,v,E),$===null?j=y:$.sibling=y,$=y);return rt&&es(_,E),j}for(y=r(_,y);E<C.length;E++)A=T(y,_,E,C[E],D),A!==null&&(t&&A.alternate!==null&&y.delete(A.key===null?E:A.key),v=s(A,v,E),$===null?j=A:$.sibling=A,$=A);return t&&y.forEach(function(k){return e(_,k)}),rt&&es(_,E),j}function x(_,v,C,D){var j=ya(C);if(typeof j!="function")throw Error(K(150));if(C=j.call(C),C==null)throw Error(K(151));for(var $=j=null,y=v,E=v=0,A=null,R=C.next();y!==null&&!R.done;E++,R=C.next()){y.index>E?(A=y,y=null):A=y.sibling;var k=p(_,y,R.value,D);if(k===null){y===null&&(y=A);break}t&&y&&k.alternate===null&&e(_,y),v=s(k,v,E),$===null?j=k:$.sibling=k,$=k,y=A}if(R.done)return n(_,y),rt&&es(_,E),j;if(y===null){for(;!R.done;E++,R=C.next())R=f(_,R.value,D),R!==null&&(v=s(R,v,E),$===null?j=R:$.sibling=R,$=R);return rt&&es(_,E),j}for(y=r(_,y);!R.done;E++,R=C.next())R=T(y,_,E,R.value,D),R!==null&&(t&&R.alternate!==null&&y.delete(R.key===null?E:R.key),v=s(R,v,E),$===null?j=R:$.sibling=R,$=R);return t&&y.forEach(function(b){return e(_,b)}),rt&&es(_,E),j}function P(_,v,C,D){if(typeof C=="object"&&C!==null&&C.type===ro&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case vu:e:{for(var j=C.key,$=v;$!==null;){if($.key===j){if(j=C.type,j===ro){if($.tag===7){n(_,$.sibling),v=i($,C.props.children),v.return=_,_=v;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===di&&jv(j)===$.type){n(_,$.sibling),v=i($,C.props),v.ref=Ta(_,$,C),v.return=_,_=v;break e}n(_,$);break}else e(_,$);$=$.sibling}C.type===ro?(v=hs(C.props.children,_.mode,D,C.key),v.return=_,_=v):(D=Zu(C.type,C.key,C.props,null,_.mode,D),D.ref=Ta(_,v,C),D.return=_,_=D)}return o(_);case no:e:{for($=C.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(_,v.sibling),v=i(v,C.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=Wh(C,_.mode,D),v.return=_,_=v}return o(_);case di:return $=C._init,P(_,v,$(C._payload),D)}if(ba(C))return w(_,v,C,D);if(ya(C))return x(_,v,C,D);Pu(_,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,C),v.return=_,_=v):(n(_,v),v=qh(C,_.mode,D),v.return=_,_=v),o(_)):n(_,v)}return P}var Do=j1(!0),F1=j1(!1),Ac=zi(null),xc=null,ho=null,wm=null;function Em(){wm=ho=xc=null}function Tm(t){var e=Ac.current;et(Ac),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){xc=t,wm=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(xc===null)throw Error(K(308));ho=t,xc.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var ss=null;function Im(t){ss===null?ss=[t]:ss.push(t)}function U1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Im(e)):(n.next=i.next,i.next=n),e.interleaved=n,qr(t,r)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hi=!1;function Sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qr(t,n)}return i=r.interleaved,i===null?(e.next=e,Im(r)):(e.next=i.next,i.next=e),r.interleaved=e,qr(t,n)}function Gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function Fv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,r){var i=t.updateQueue;hi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,T=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,x=a;switch(p=e,T=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){f=w.call(T,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,p=typeof w=="function"?w.call(T,f,p):w,p==null)break e;f=ut({},f,p);break e;case 2:hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else T={eventTime:T,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=T,u=f):d=d.next=T,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=f}}function Uv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Vl={},yr=zi(Vl),gl=zi(Vl),yl=zi(Vl);function os(t){if(t===Vl)throw Error(K(174));return t}function Am(t,e){switch(Ge(yl,e),Ge(gl,t),Ge(yr,Vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xf(e,t)}et(yr),Ge(yr,e)}function No(){et(yr),et(gl),et(yl)}function z1(t){os(yl.current);var e=os(yr.current),n=xf(e,t.type);e!==n&&(Ge(gl,t),Ge(yr,n))}function xm(t){gl.current===t&&(et(yr),et(gl))}var at=zi(0);function Rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fh=[];function Cm(){for(var t=0;t<Fh.length;t++)Fh[t]._workInProgressVersionPrimary=null;Fh.length=0}var Ku=Xr.ReactCurrentDispatcher,Uh=Xr.ReactCurrentBatchConfig,ys=0,lt=null,xt=null,kt=null,Pc=!1,Wa=!1,vl=0,CC=0;function Gt(){throw Error(K(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!er(t[n],e[n]))return!1;return!0}function Pm(t,e,n,r,i,s){if(ys=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?bC:DC,t=n(r,i),Wa){s=0;do{if(Wa=!1,vl=0,25<=s)throw Error(K(301));s+=1,kt=xt=null,e.updateQueue=null,Ku.current=NC,t=n(r,i)}while(Wa)}if(Ku.current=kc,e=xt!==null&&xt.next!==null,ys=0,kt=xt=lt=null,Pc=!1,e)throw Error(K(300));return t}function km(){var t=vl!==0;return vl=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?lt.memoizedState=kt=t:kt=kt.next=t,kt}function zn(){if(xt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=kt===null?lt.memoizedState:kt.next;if(e!==null)kt=e,xt=t;else{if(t===null)throw Error(K(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},kt===null?lt.memoizedState=kt=t:kt=kt.next=t}return kt}function _l(t,e){return typeof e=="function"?e(t):e}function $h(t){var e=zn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=xt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ys&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,lt.lanes|=d,vs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,er(r,e.memoizedState)||(mn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,lt.lanes|=s,vs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=zn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);er(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B1(){}function H1(t,e){var n=lt,r=zn(),i=e(),s=!er(r.memoizedState,i);if(s&&(r.memoizedState=i,mn=!0),r=r.queue,bm(G1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,wl(9,W1.bind(null,n,r,i,e),void 0,null),bt===null)throw Error(K(349));ys&30||q1(n,e,i)}return i}function q1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function W1(t,e,n,r){e.value=n,e.getSnapshot=r,K1(e)&&Q1(t)}function G1(t,e,n){return n(function(){K1(e)&&Q1(t)})}function K1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!er(t,n)}catch{return!0}}function Q1(t){var e=qr(t,1);e!==null&&Zn(e,t,1,-1)}function $v(t){var e=dr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},e.queue=t,t=t.dispatch=kC.bind(null,lt,t),[e.memoizedState,t]}function wl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y1(){return zn().memoizedState}function Qu(t,e,n,r){var i=dr();lt.flags|=t,i.memoizedState=wl(1|e,n,void 0,r===void 0?null:r)}function fd(t,e,n,r){var i=zn();r=r===void 0?null:r;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,r!==null&&Rm(r,o.deps)){i.memoizedState=wl(e,n,s,r);return}}lt.flags|=t,i.memoizedState=wl(1|e,n,s,r)}function zv(t,e){return Qu(8390656,8,t,e)}function bm(t,e){return fd(2048,8,t,e)}function X1(t,e){return fd(4,2,t,e)}function J1(t,e){return fd(4,4,t,e)}function Z1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eE(t,e,n){return n=n!=null?n.concat([t]):null,fd(4,4,Z1.bind(null,e,t),n)}function Dm(){}function tE(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nE(t,e){var n=zn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rE(t,e,n){return ys&21?(er(n,e)||(n=l1(),lt.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function RC(t,e){var n=Fe;Fe=n!==0&&4>n?n:4,t(!0);var r=Uh.transition;Uh.transition={};try{t(!1),e()}finally{Fe=n,Uh.transition=r}}function iE(){return zn().memoizedState}function PC(t,e,n){var r=Ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sE(t))oE(e,n);else if(n=U1(t,e,n,r),n!==null){var i=an();Zn(n,t,r,i),aE(n,e,r)}}function kC(t,e,n){var r=Ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sE(t))oE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,er(a,o)){var u=e.interleaved;u===null?(i.next=i,Im(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=U1(t,e,i,r),n!==null&&(i=an(),Zn(n,t,r,i),aE(n,e,r))}}function sE(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function oE(t,e){Wa=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var kc={readContext:$n,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},bC={readContext:$n,useCallback:function(t,e){return dr().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4194308,4,Z1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qu(4,2,t,e)},useMemo:function(t,e){var n=dr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PC.bind(null,lt,t),[r.memoizedState,t]},useRef:function(t){var e=dr();return t={current:t},e.memoizedState=t},useState:$v,useDebugValue:Dm,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=$v(!1),e=t[0];return t=RC.bind(null,t[1]),dr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=lt,i=dr();if(rt){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),bt===null)throw Error(K(349));ys&30||q1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(G1.bind(null,r,s,t),[t]),r.flags|=2048,wl(9,W1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dr(),e=bt.identifierPrefix;if(rt){var n=Or,r=Mr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DC={readContext:$n,useCallback:tE,useContext:$n,useEffect:bm,useImperativeHandle:eE,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nE,useReducer:$h,useRef:Y1,useState:function(){return $h(_l)},useDebugValue:Dm,useDeferredValue:function(t){var e=zn();return rE(e,xt.memoizedState,t)},useTransition:function(){var t=$h(_l)[0],e=zn().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:H1,useId:iE,unstable_isNewReconciler:!1},NC={readContext:$n,useCallback:tE,useContext:$n,useEffect:bm,useImperativeHandle:eE,useInsertionEffect:X1,useLayoutEffect:J1,useMemo:nE,useReducer:zh,useRef:Y1,useState:function(){return zh(_l)},useDebugValue:Dm,useDeferredValue:function(t){var e=zn();return xt===null?e.memoizedState=t:rE(e,xt.memoizedState,t)},useTransition:function(){var t=zh(_l)[0],e=zn().memoizedState;return[t,e]},useMutableSource:B1,useSyncExternalStore:H1,useId:iE,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pd={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=an(),i=Ri(t),s=Fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=xi(t,s,i),e!==null&&(Zn(e,t,i,r),Gu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=an(),i=Ri(t),s=Fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xi(t,s,i),e!==null&&(Zn(e,t,i,r),Gu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),r=Ri(t),i=Fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=xi(t,i,r),e!==null&&(Zn(e,t,r,n),Gu(e,t,r))}};function Bv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function lE(t,e,n){var r=!1,i=Li,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(i=yn(e)?ms:en.current,r=e.contextTypes,s=(r=r!=null)?ko(t,i):Li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pd.enqueueReplaceState(e,e.state,null)}function Kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$n(s):(s=yn(e)?ms:en.current,i.context=ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),Cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",r=e;do n+=ax(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function uE(t,e,n){n=Fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dc||(Dc=!0,sp=r),Qf(t,e)},n}function cE(t,e,n){n=Fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof r!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function Wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fr(-1,1),e.tag=2,xi(n,e,1))),n.lanes|=1),t)}var OC=Xr.ReactCurrentOwner,mn=!1;function rn(t,e,n,r){e.child=t===null?F1(e,null,n,r):Do(e,t.child,n,r)}function Kv(t,e,n,r,i){n=n.render;var s=e.ref;return Io(e,i),r=Pm(t,e,n,r,s,i),n=km(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wr(t,e,i)):(rt&&n&&ym(e),e.flags|=1,rn(t,e,r,i),e.child)}function Qv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dE(t,e,s,r,i)):(t=Zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return Wr(t,e,i)}return e.flags|=1,t=Pi(s,r),t.ref=e.ref,t.return=e,e.child=t}function dE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hl(s,r)&&t.ref===e.ref)if(mn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Wr(t,e,i)}return Yf(t,e,n,r,i)}function hE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(po,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ge(po,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ge(po,In),In|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ge(po,In),In|=r;return rn(t,e,i,n),e.child}function fE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,r,i){var s=yn(n)?ms:en.current;return s=ko(e,s),Io(e,i),n=Pm(t,e,n,r,s,i),r=km(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wr(t,e,i)):(rt&&r&&ym(e),e.flags|=1,rn(t,e,n,i),e.child)}function Yv(t,e,n,r,i){if(yn(n)){var s=!0;Tc(e)}else s=!1;if(Io(e,i),e.stateNode===null)Yu(t,e),lE(e,n,r),Kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=yn(n)?ms:en.current,c=ko(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Hv(e,o,r,c),hi=!1;var p=e.memoizedState;o.state=p,Cc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||gn.current||hi?(typeof d=="function"&&(Gf(e,n,d,r),u=e.memoizedState),(a=hi||Bv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$n(u):(u=yn(n)?ms:en.current,u=ko(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Hv(e,o,r,u),hi=!1,p=e.memoizedState,o.state=p,Cc(e,r,o,i);var w=e.memoizedState;a!==f||p!==w||gn.current||hi?(typeof T=="function"&&(Gf(e,n,T,r),w=e.memoizedState),(c=hi||Bv(e,n,c,r,p,w,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Xf(t,e,n,r,s,i)}function Xf(t,e,n,r,i,s){fE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ov(e,n,!1),Wr(t,e,s);r=e.stateNode,OC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Do(e,t.child,null,s),e.child=Do(e,null,a,s)):rn(t,e,a,s),e.memoizedState=r.state,i&&Ov(e,n,!0),e.child}function pE(t){var e=t.stateNode;e.pendingContext?Mv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mv(t,e.context,!1),Am(t,e.containerInfo)}function Xv(t,e,n,r,i){return bo(),_m(i),e.flags|=256,rn(t,e,n,r),e.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function mE(t,e,n){var r=e.pendingProps,i=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ge(at,i&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,r,0,null),t=hs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Jf,t):Nm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pi(a,s):(s=hs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jf,r}return s=t.child,t=s.sibling,r=Pi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nm(t,e){return e=yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ku(t,e,n,r){return r!==null&&_m(r),Do(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bh(Error(K(422))),ku(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yd({mode:"visible",children:r.children},i,0,null),s=hs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Do(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Jf,s);if(!(e.mode&1))return ku(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=Bh(s,r,void 0),ku(t,e,o,r)}if(a=(o&t.childLanes)!==0,mn||a){if(r=bt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qr(t,i),Zn(r,t,i,-1))}return Fm(),r=Bh(Error(K(421))),ku(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Sn=Ai(i.nextSibling),xn=e,rt=!0,Xn=null,t!==null&&(Mn[On++]=Mr,Mn[On++]=Or,Mn[On++]=gs,Mr=t.id,Or=t.overflow,gs=e),e=Nm(e,r.children),e.flags|=4096,e)}function Jv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wf(t.return,e,n)}function Hh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rn(t,e,r.children,n),r=at.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jv(t,n,e);else if(t.tag===19)Jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ge(at,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hh(e,!0,n,null,s);break;case"together":Hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VC(t,e,n){switch(e.tag){case 3:pE(e),bo();break;case 5:z1(e);break;case 1:yn(e.type)&&Tc(e);break;case 4:Am(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ge(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ge(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?mE(t,e,n):(Ge(at,at.current&1),t=Wr(t,e,n),t!==null?t.sibling:null);Ge(at,at.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ge(at,at.current),r)break;return null;case 22:case 23:return e.lanes=0,hE(t,e,n)}return Wr(t,e,n)}var yE,ep,vE,_E;yE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};vE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,os(yr.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=ut({},i,{value:void 0}),r=ut({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wc)}Cf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Je("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_E=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ia(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jC(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return yn(e.type)&&Ec(),Kt(e),null;case 3:return r=e.stateNode,No(),et(gn),et(en),Cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(lp(Xn),Xn=null))),ep(t,e),Kt(e),null;case 5:xm(e);var i=os(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)vE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(K(166));return Kt(e),null}if(t=os(yr.current),Ru(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fr]=e,r[ml]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<Na.length;i++)Je(Na[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":av(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":uv(r,s),Je("invalid",r)}Cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,a,t),i=["children",""+a]):sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":_u(r),lv(r,s,!0);break;case"textarea":_u(r),cv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fr]=e,t[ml]=r,yE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Na.length;i++)Je(Na[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":av(t,r),i=Tf(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ut({},r,{value:void 0}),Je("invalid",t);break;case"textarea":uv(t,r),i=Af(t,r),Je("invalid",t);break;default:i=r}Cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Yw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Kw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ol(t,u):typeof u=="number"&&ol(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Je("scroll",t):u!=null&&rm(t,s,u,o))}switch(n){case"input":_u(t),lv(t,r,!1);break;case"textarea":_u(t),cv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)_E(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(K(166));if(n=os(yl.current),os(yr.current),Ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[fr]=e,(s=r.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=e,e.stateNode=r}return Kt(e),null;case 13:if(et(at),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&Sn!==null&&e.mode&1&&!(e.flags&128))V1(),bo(),e.flags|=98560,s=!1;else if(s=Ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(K(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[fr]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Xn!==null&&(lp(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Ct===0&&(Ct=3):Fm())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return No(),ep(t,e),t===null&&fl(e.stateNode.containerInfo),Kt(e),null;case 10:return Tm(e.type._context),Kt(e),null;case 17:return yn(e.type)&&Ec(),Kt(e),null;case 19:if(et(at),s=e.memoizedState,s===null)return Kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ia(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rc(t),o!==null){for(e.flags|=128,Ia(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ge(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Oo&&(e.flags|=128,r=!0,Ia(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Kt(e),null}else 2*vt()-s.renderingStartTime>Oo&&n!==1073741824&&(e.flags|=128,r=!0,Ia(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=at.current,Ge(at,r?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return jm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?In&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function FC(t,e){switch(vm(e),e.tag){case 1:return yn(e.type)&&Ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return No(),et(gn),et(en),Cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(et(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(at),null;case 4:return No(),null;case 10:return Tm(e.type._context),null;case 22:case 23:return jm(),null;case 24:return null;default:return null}}var bu=!1,Jt=!1,UC=typeof WeakSet=="function"?WeakSet:Set,re=null;function fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){ht(t,e,r)}}var Zv=!1;function $C(t,e){if(jf=yc,t=S1(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)p=f,f=T;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(T=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},yc=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){e=re;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,P=w.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kn(e.type,x),P);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(D){ht(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}return w=Zv,Zv=!1,w}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tp(e,n,s)}i=i.next}while(i!==r)}}function md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wE(t){var e=t.alternate;e!==null&&(t.alternate=null,wE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fr],delete e[ml],delete e[zf],delete e[IC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function EE(t){return t.tag===5||t.tag===3||t.tag===4}function e0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||EE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var Vt=null,Qn=!1;function li(t,e,n){for(n=n.child;n!==null;)TE(t,e,n),n=n.sibling}function TE(t,e,n){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(ad,n)}catch{}switch(n.tag){case 5:Jt||fo(n,e);case 6:var r=Vt,i=Qn;Vt=null,li(t,e,n),Vt=r,Qn=i,Vt!==null&&(Qn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Qn?(t=Vt,n=n.stateNode,t.nodeType===8?Vh(t.parentNode,n):t.nodeType===1&&Vh(t,n),cl(t)):Vh(Vt,n.stateNode));break;case 4:r=Vt,i=Qn,Vt=n.stateNode.containerInfo,Qn=!0,li(t,e,n),Vt=r,Qn=i;break;case 0:case 11:case 14:case 15:if(!Jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tp(n,e,o),i=i.next}while(i!==r)}li(t,e,n);break;case 1:if(!Jt&&(fo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ht(n,e,a)}li(t,e,n);break;case 21:li(t,e,n);break;case 22:n.mode&1?(Jt=(r=Jt)||n.memoizedState!==null,li(t,e,n),Jt=r):li(t,e,n);break;default:li(t,e,n)}}function t0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UC),e.forEach(function(r){var i=YC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Qn=!1;break e;case 3:Vt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Vt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Vt===null)throw Error(K(160));TE(s,o,i),Vt=null,Qn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ht(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IE(e,t),e=e.sibling}function IE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),lr(t),r&4){try{Ga(3,t,t.return),md(3,t)}catch(x){ht(t,t.return,x)}try{Ga(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Gn(e,t),lr(t),r&512&&n!==null&&fo(n,n.return);break;case 5:if(Gn(e,t),lr(t),r&512&&n!==null&&fo(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(x){ht(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qw(i,s),Rf(a,o);var c=Rf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Yw(i,f):d==="dangerouslySetInnerHTML"?Kw(i,f):d==="children"?ol(i,f):rm(i,d,f,c)}switch(a){case"input":If(i,s);break;case"textarea":Ww(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?_o(i,!!s.multiple,T,!1):p!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[ml]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(Gn(e,t),lr(t),r&4){if(t.stateNode===null)throw Error(K(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(Gn(e,t),lr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Gn(e,t),lr(t);break;case 13:Gn(e,t),lr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lm=vt())),r&4&&t0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||d,Gn(e,t),Jt=c):Gn(e,t),lr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(re=t,d=t.child;d!==null;){for(f=re=d;re!==null;){switch(p=re,T=p.child,p.tag){case 0:case 11:case 14:case 15:Ga(4,p,p.return);break;case 1:fo(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(x){ht(r,n,x)}}break;case 5:fo(p,p.return);break;case 22:if(p.memoizedState!==null){r0(f);continue}}T!==null?(T.return=p,re=T):r0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Qw("display",o))}catch(x){ht(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ht(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),lr(t),r&4&&t0(t);break;case 21:break;default:Gn(e,t),lr(t)}}function lr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(EE(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=e0(t);ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=e0(t);rp(t,a,o);break;default:throw Error(K(161))}}catch(u){ht(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zC(t,e,n){re=t,SE(t)}function SE(t,e,n){for(var r=(t.mode&1)!==0;re!==null;){var i=re,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Jt;a=bu;var c=Jt;if(bu=o,(Jt=u)&&!c)for(re=i;re!==null;)o=re,u=o.child,o.tag===22&&o.memoizedState!==null?i0(i):u!==null?(u.return=o,re=u):i0(i);for(;s!==null;)re=s,SE(s),s=s.sibling;re=i,bu=a,Jt=c}n0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,re=s):n0(t)}}function n0(t){for(;re!==null;){var e=re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&cl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Jt||e.flags&512&&np(e)}catch(p){ht(e,e.return,p)}}if(e===t){re=null;break}if(n=e.sibling,n!==null){n.return=e.return,re=n;break}re=e.return}}function r0(t){for(;re!==null;){var e=re;if(e===t){re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,re=n;break}re=e.return}}function i0(t){for(;re!==null;){var e=re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{md(4,e)}catch(u){ht(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ht(e,i,u)}}var s=e.return;try{np(e)}catch(u){ht(e,s,u)}break;case 5:var o=e.return;try{np(e)}catch(u){ht(e,o,u)}}}catch(u){ht(e,e.return,u)}if(e===t){re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,re=a;break}re=e.return}}var BC=Math.ceil,bc=Xr.ReactCurrentDispatcher,Mm=Xr.ReactCurrentOwner,jn=Xr.ReactCurrentBatchConfig,Me=0,bt=null,It=null,Ut=0,In=0,po=zi(0),Ct=0,El=null,vs=0,gd=0,Om=0,Ka=null,fn=null,Lm=0,Oo=1/0,Dr=null,Dc=!1,sp=null,Ci=null,Du=!1,wi=null,Nc=0,Qa=0,op=null,Xu=-1,Ju=0;function an(){return Me&6?vt():Xu!==-1?Xu:Xu=vt()}function Ri(t){return t.mode&1?Me&2&&Ut!==0?Ut&-Ut:xC.transition!==null?(Ju===0&&(Ju=l1()),Ju):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:m1(t.type)),t):1}function Zn(t,e,n,r){if(50<Qa)throw Qa=0,op=null,Error(K(185));Ml(t,n,r),(!(Me&2)||t!==bt)&&(t===bt&&(!(Me&2)&&(gd|=n),Ct===4&&pi(t,Ut)),vn(t,r),n===1&&Me===0&&!(e.mode&1)&&(Oo=vt()+500,hd&&Bi()))}function vn(t,e){var n=t.callbackNode;xx(t,e);var r=gc(t,t===bt?Ut:0);if(r===0)n!==null&&fv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fv(n),e===1)t.tag===0?AC(s0.bind(null,t)):M1(s0.bind(null,t)),EC(function(){!(Me&6)&&Bi()}),n=null;else{switch(u1(r)){case 1:n=lm;break;case 4:n=o1;break;case 16:n=mc;break;case 536870912:n=a1;break;default:n=mc}n=DE(n,AE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function AE(t,e){if(Xu=-1,Ju=0,Me&6)throw Error(K(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var r=gc(t,t===bt?Ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mc(t,r);else{e=r;var i=Me;Me|=2;var s=CE();(bt!==t||Ut!==e)&&(Dr=null,Oo=vt()+500,ds(t,e));do try{WC();break}catch(a){xE(t,a)}while(!0);Em(),bc.current=s,Me=i,It!==null?e=0:(bt=null,Ut=0,e=Ct)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=El,ds(t,0),pi(t,r),vn(t,vt()),n;if(e===6)pi(t,r);else{if(i=t.current.alternate,!(r&30)&&!HC(i)&&(e=Mc(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=ap(t,s))),e===1))throw n=El,ds(t,0),pi(t,r),vn(t,vt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(K(345));case 2:ts(t,fn,Dr);break;case 3:if(pi(t,r),(r&130023424)===r&&(e=Lm+500-vt(),10<e)){if(gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){an(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$f(ts.bind(null,t,fn,Dr),e);break}ts(t,fn,Dr);break;case 4:if(pi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=vt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BC(r/1960))-r,10<r){t.timeoutHandle=$f(ts.bind(null,t,fn,Dr),r);break}ts(t,fn,Dr);break;case 5:ts(t,fn,Dr);break;default:throw Error(K(329))}}}return vn(t,vt()),t.callbackNode===n?AE.bind(null,t):null}function ap(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(ds(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=fn,fn=n,e!==null&&lp(e)),t}function lp(t){fn===null?fn=t:fn.push.apply(fn,t)}function HC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!er(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pi(t,e){for(e&=~Om,e&=~gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function s0(t){if(Me&6)throw Error(K(327));So();var e=gc(t,0);if(!(e&1))return vn(t,vt()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=El,ds(t,0),pi(t,e),vn(t,vt()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ts(t,fn,Dr),vn(t,vt()),null}function Vm(t,e){var n=Me;Me|=1;try{return t(e)}finally{Me=n,Me===0&&(Oo=vt()+500,hd&&Bi())}}function _s(t){wi!==null&&wi.tag===0&&!(Me&6)&&So();var e=Me;Me|=1;var n=jn.transition,r=Fe;try{if(jn.transition=null,Fe=1,t)return t()}finally{Fe=r,jn.transition=n,Me=e,!(Me&6)&&Bi()}}function jm(){In=po.current,et(po)}function ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),It!==null)for(n=It.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ec();break;case 3:No(),et(gn),et(en),Cm();break;case 5:xm(r);break;case 4:No();break;case 13:et(at);break;case 19:et(at);break;case 10:Tm(r.type._context);break;case 22:case 23:jm()}n=n.return}if(bt=t,It=t=Pi(t.current,null),Ut=In=e,Ct=0,El=null,Om=gd=vs=0,fn=Ka=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ss=null}return t}function xE(t,e){do{var n=It;try{if(Em(),Ku.current=kc,Pc){for(var r=lt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pc=!1}if(ys=0,kt=xt=lt=null,Wa=!1,vl=0,Mm.current=null,n===null||n.return===null){Ct=1,El=e,It=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ut,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Wv(o);if(T!==null){T.flags&=-257,Gv(T,o,a,s,e),T.mode&1&&qv(s,c,e),e=T,u=c;var w=e.updateQueue;if(w===null){var x=new Set;x.add(u),e.updateQueue=x}else w.add(u);break e}else{if(!(e&1)){qv(s,c,e),Fm();break e}u=Error(K(426))}}else if(rt&&a.mode&1){var P=Wv(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Gv(P,o,a,s,e),_m(Mo(u,a));break e}}s=u=Mo(u,a),Ct!==4&&(Ct=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=uE(s,u,e);Fv(s,_);break e;case 1:a=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ci===null||!Ci.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=cE(s,a,e);Fv(s,D);break e}}s=s.return}while(s!==null)}PE(n)}catch(j){e=j,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function CE(){var t=bc.current;return bc.current=kc,t===null?kc:t}function Fm(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),bt===null||!(vs&268435455)&&!(gd&268435455)||pi(bt,Ut)}function Mc(t,e){var n=Me;Me|=2;var r=CE();(bt!==t||Ut!==e)&&(Dr=null,ds(t,e));do try{qC();break}catch(i){xE(t,i)}while(!0);if(Em(),Me=n,bc.current=r,It!==null)throw Error(K(261));return bt=null,Ut=0,Ct}function qC(){for(;It!==null;)RE(It)}function WC(){for(;It!==null&&!yx();)RE(It)}function RE(t){var e=bE(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?PE(t):It=e,Mm.current=null}function PE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FC(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,It=null;return}}else if(n=jC(n,e,In),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ct===0&&(Ct=5)}function ts(t,e,n){var r=Fe,i=jn.transition;try{jn.transition=null,Fe=1,GC(t,e,n,r)}finally{jn.transition=i,Fe=r}return null}function GC(t,e,n,r){do So();while(wi!==null);if(Me&6)throw Error(K(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cx(t,s),t===bt&&(It=bt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Du||(Du=!0,DE(mc,function(){return So(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=Fe;Fe=1;var a=Me;Me|=4,Mm.current=null,$C(t,n),IE(n,t),fC(Ff),yc=!!jf,Ff=jf=null,t.current=n,zC(n),vx(),Me=a,Fe=o,jn.transition=s}else t.current=n;if(Du&&(Du=!1,wi=t,Nc=i),s=t.pendingLanes,s===0&&(Ci=null),Ex(n.stateNode),vn(t,vt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dc)throw Dc=!1,t=sp,sp=null,t;return Nc&1&&t.tag!==0&&So(),s=t.pendingLanes,s&1?t===op?Qa++:(Qa=0,op=t):Qa=0,Bi(),null}function So(){if(wi!==null){var t=u1(Nc),e=jn.transition,n=Fe;try{if(jn.transition=null,Fe=16>t?16:t,wi===null)var r=!1;else{if(t=wi,wi=null,Nc=0,Me&6)throw Error(K(331));var i=Me;for(Me|=4,re=t.current;re!==null;){var s=re,o=s.child;if(re.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(re=c;re!==null;){var d=re;switch(d.tag){case 0:case 11:case 15:Ga(8,d,s)}var f=d.child;if(f!==null)f.return=d,re=f;else for(;re!==null;){d=re;var p=d.sibling,T=d.return;if(wE(d),d===c){re=null;break}if(p!==null){p.return=T,re=p;break}re=T}}}var w=s.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,re=o;else e:for(;re!==null;){if(s=re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,re=_;break e}re=s.return}}var v=t.current;for(re=v;re!==null;){o=re;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,re=C;else e:for(o=v;re!==null;){if(a=re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(j){ht(a,a.return,j)}if(a===o){re=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,re=D;break e}re=a.return}}if(Me=i,Bi(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(ad,t)}catch{}r=!0}return r}finally{Fe=n,jn.transition=e}}return!1}function o0(t,e,n){e=Mo(n,e),e=uE(t,e,1),t=xi(t,e,1),e=an(),t!==null&&(Ml(t,1,e),vn(t,e))}function ht(t,e,n){if(t.tag===3)o0(t,t,n);else for(;e!==null;){if(e.tag===3){o0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ci===null||!Ci.has(r))){t=Mo(n,t),t=cE(e,t,1),e=xi(e,t,1),t=an(),e!==null&&(Ml(e,1,t),vn(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ut&n)===n&&(Ct===4||Ct===3&&(Ut&130023424)===Ut&&500>vt()-Lm?ds(t,0):Om|=n),vn(t,e)}function kE(t,e){e===0&&(t.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var n=an();t=qr(t,e),t!==null&&(Ml(t,e,n),vn(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kE(t,n)}function YC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(e),kE(t,n)}var bE;bE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,VC(t,e,n);mn=!!(t.flags&131072)}else mn=!1,rt&&e.flags&1048576&&O1(e,Sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yu(t,e),t=e.pendingProps;var i=ko(e,en.current);Io(e,n),i=Pm(null,e,r,t,i,n);var s=km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(r)?(s=!0,Tc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sm(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,Kf(e,r,t,n),e=Xf(null,e,r,!0,s,n)):(e.tag=0,rt&&s&&ym(e),rn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JC(r),t=Kn(r,t),i){case 0:e=Yf(null,e,r,t,n);break e;case 1:e=Yv(null,e,r,t,n);break e;case 11:e=Kv(null,e,r,t,n);break e;case 14:e=Qv(null,e,r,Kn(r.type,t),n);break e}throw Error(K(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Yv(t,e,r,i,n);case 3:e:{if(pE(e),t===null)throw Error(K(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$1(t,e),Cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mo(Error(K(423)),e),e=Xv(t,e,r,n,i);break e}else if(r!==i){i=Mo(Error(K(424)),e),e=Xv(t,e,r,n,i);break e}else for(Sn=Ai(e.stateNode.containerInfo.firstChild),xn=e,rt=!0,Xn=null,n=F1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),r===i){e=Wr(t,e,n);break e}rn(t,e,r,n)}e=e.child}return e;case 5:return z1(e),t===null&&qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uf(r,i)?o=null:s!==null&&Uf(r,s)&&(e.flags|=32),fE(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return mE(t,e,n);case 4:return Am(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Do(e,null,r,n):rn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Kv(t,e,r,i,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ge(Ac,r._currentValue),r._currentValue=o,s!==null)if(er(s.value,o)){if(s.children===i.children&&!gn.current){e=Wr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Fr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(K(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Io(e,n),i=$n(i),r=r(i),e.flags|=1,rn(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),Qv(t,e,r,i,n);case 15:return dE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Yu(t,e),e.tag=1,yn(r)?(t=!0,Tc(e)):t=!1,Io(e,n),lE(e,r,i),Kf(e,r,i,n),Xf(null,e,r,!0,t,n);case 19:return gE(t,e,n);case 22:return hE(t,e,n)}throw Error(K(156,e.tag))};function DE(t,e){return s1(t,e)}function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,r){return new XC(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return hs(n.children,i,s,e);case im:o=8,i|=8;break;case vf:return t=Vn(12,n,e,i|2),t.elementType=vf,t.lanes=s,t;case _f:return t=Vn(13,n,e,i),t.elementType=_f,t.lanes=s,t;case wf:return t=Vn(19,n,e,i),t.elementType=wf,t.lanes=s,t;case zw:return yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uw:o=10;break e;case $w:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case di:o=16,r=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hs(t,e,n,r){return t=Vn(7,t,r,e),t.lanes=n,t}function yd(t,e,n,r){return t=Vn(22,t,r,e),t.elementType=zw,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $m(t,e,n,r,i,s,o,a,u){return t=new ZC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sm(s),t}function eR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NE(t){if(!t)return Li;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(yn(n))return N1(t,n,e)}return e}function ME(t,e,n,r,i,s,o,a,u){return t=$m(n,r,!0,t,i,s,o,a,u),t.context=NE(null),n=t.current,r=an(),i=Ri(n),s=Fr(r,i),s.callback=e??null,xi(n,s,i),t.current.lanes=i,Ml(t,i,r),vn(t,r),t}function vd(t,e,n,r){var i=e.current,s=an(),o=Ri(i);return n=NE(n),e.context===null?e.context=n:e.pendingContext=n,e=Fr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xi(i,e,o),t!==null&&(Zn(t,i,o,s),Gu(t,i,o)),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function a0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){a0(t,e),(t=t.alternate)&&a0(t,e)}function tR(){return null}var OE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}_d.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));vd(t,e,null,null)};_d.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){vd(null,t,null,null)}),e[Hr]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=h1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fi.length&&e!==0&&e<fi[n].priority;n++);fi.splice(n,0,t),n===0&&p1(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function l0(){}function nR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Oc(o);s.call(c)}}var o=ME(e,r,t,0,null,!1,!1,"",l0);return t._reactRootContainer=o,t[Hr]=o.current,fl(t.nodeType===8?t.parentNode:t),_s(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Oc(u);a.call(c)}}var u=$m(t,0,!1,null,null,!1,!1,"",l0);return t._reactRootContainer=u,t[Hr]=u.current,fl(t.nodeType===8?t.parentNode:t),_s(function(){vd(e,u,n,r)}),u}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Oc(o);a.call(u)}}vd(e,o,t,i)}else o=nR(n,e,t,i,r);return Oc(o)}c1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(um(e,n|1),vn(e,vt()),!(Me&6)&&(Oo=vt()+500,Bi()))}break;case 13:_s(function(){var r=qr(t,1);if(r!==null){var i=an();Zn(r,t,1,i)}}),zm(t,1)}};cm=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=an();Zn(e,t,134217728,n)}zm(t,134217728)}};d1=function(t){if(t.tag===13){var e=Ri(t),n=qr(t,e);if(n!==null){var r=an();Zn(n,t,e,r)}zm(t,e)}};h1=function(){return Fe};f1=function(t,e){var n=Fe;try{return Fe=t,e()}finally{Fe=n}};kf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dd(r);if(!i)throw Error(K(90));Hw(r),If(r,i)}}}break;case"textarea":Ww(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};Zw=Vm;e1=_s;var rR={usingClientEntryPoint:!1,Events:[Ll,ao,dd,Xw,Jw,Vm]},Sa={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iR={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r1(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||tR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nu.isDisabled&&Nu.supportsFiber)try{ad=Nu.inject(iR),gr=Nu}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rR;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(K(200));return eR(t,e,null,n)};Pn.createRoot=function(t,e){if(!Hm(t))throw Error(K(299));var n=!1,r="",i=OE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$m(t,1,!1,null,null,n,!1,r,i),t[Hr]=e.current,fl(t.nodeType===8?t.parentNode:t),new Bm(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=r1(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return _s(t)};Pn.hydrate=function(t,e,n){if(!wd(e))throw Error(K(200));return Ed(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=OE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ME(e,null,t,1,n??null,i,!1,s,o),t[Hr]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};Pn.render=function(t,e,n){if(!wd(e))throw Error(K(200));return Ed(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!wd(t))throw Error(K(40));return t._reactRootContainer?(_s(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[Hr]=null})}),!0):!1};Pn.unstable_batchedUpdates=Vm;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wd(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Ed(t,e,n,!1,r)};Pn.version="18.3.1-next-f1338f8080-20240426";function LE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(LE)}catch(t){console.error(t)}}LE(),Lw.exports=Pn;var qm=Lw.exports;const sR=Yp(qm),oR=Sw({__proto__:null,default:sR},[qm]);var VE,u0=qm;VE=u0.createRoot,u0.hydrateRoot;var jE={exports:{}},Ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=Symbol.for("react.element"),Gm=Symbol.for("react.portal"),Td=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),xd=Symbol.for("react.context"),aR=Symbol.for("react.server_context"),Cd=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),lR=Symbol.for("react.offscreen"),FE;FE=Symbol.for("react.module.reference");function Hn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wm:switch(t=t.type,t){case Td:case Sd:case Id:case Rd:case Pd:return t;default:switch(t=t&&t.$$typeof,t){case aR:case xd:case Cd:case bd:case kd:case Ad:return t;default:return e}}case Gm:return e}}}Ue.ContextConsumer=xd;Ue.ContextProvider=Ad;Ue.Element=Wm;Ue.ForwardRef=Cd;Ue.Fragment=Td;Ue.Lazy=bd;Ue.Memo=kd;Ue.Portal=Gm;Ue.Profiler=Sd;Ue.StrictMode=Id;Ue.Suspense=Rd;Ue.SuspenseList=Pd;Ue.isAsyncMode=function(){return!1};Ue.isConcurrentMode=function(){return!1};Ue.isContextConsumer=function(t){return Hn(t)===xd};Ue.isContextProvider=function(t){return Hn(t)===Ad};Ue.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wm};Ue.isForwardRef=function(t){return Hn(t)===Cd};Ue.isFragment=function(t){return Hn(t)===Td};Ue.isLazy=function(t){return Hn(t)===bd};Ue.isMemo=function(t){return Hn(t)===kd};Ue.isPortal=function(t){return Hn(t)===Gm};Ue.isProfiler=function(t){return Hn(t)===Sd};Ue.isStrictMode=function(t){return Hn(t)===Id};Ue.isSuspense=function(t){return Hn(t)===Rd};Ue.isSuspenseList=function(t){return Hn(t)===Pd};Ue.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Td||t===Sd||t===Id||t===Rd||t===Pd||t===lR||typeof t=="object"&&t!==null&&(t.$$typeof===bd||t.$$typeof===kd||t.$$typeof===Ad||t.$$typeof===xd||t.$$typeof===Cd||t.$$typeof===FE||t.getModuleId!==void 0)};Ue.typeOf=Hn;jE.exports=Ue;var UE=jE.exports;function uR(t){function e(q,G,J,Z,L){for(var he=0,Y=0,Ve=0,Se=0,Ae,le,Be=0,mt=0,xe,He=xe=Ae=0,be=0,gt=0,or=0,it=0,Ar=J.length,wn=Ar-1,yt,fe="",ze="",je="",Ye="",Ht;be<Ar;){if(le=J.charCodeAt(be),be===wn&&Y+Se+Ve+he!==0&&(Y!==0&&(le=Y===47?10:47),Se=Ve=he=0,Ar++,wn++),Y+Se+Ve+he===0){if(be===wn&&(0<gt&&(fe=fe.replace(p,"")),0<fe.trim().length)){switch(le){case 32:case 9:case 59:case 13:case 10:break;default:fe+=J.charAt(be)}le=59}switch(le){case 123:for(fe=fe.trim(),Ae=fe.charCodeAt(0),xe=1,it=++be;be<Ar;){switch(le=J.charCodeAt(be)){case 123:xe++;break;case 125:xe--;break;case 47:switch(le=J.charCodeAt(be+1)){case 42:case 47:e:{for(He=be+1;He<wn;++He)switch(J.charCodeAt(He)){case 47:if(le===42&&J.charCodeAt(He-1)===42&&be+2!==He){be=He+1;break e}break;case 10:if(le===47){be=He+1;break e}}be=He}}break;case 91:le++;case 40:le++;case 34:case 39:for(;be++<wn&&J.charCodeAt(be)!==le;);}if(xe===0)break;be++}switch(xe=J.substring(it,be),Ae===0&&(Ae=(fe=fe.replace(f,"").trim()).charCodeAt(0)),Ae){case 64:switch(0<gt&&(fe=fe.replace(p,"")),le=fe.charCodeAt(1),le){case 100:case 109:case 115:case 45:gt=G;break;default:gt=pt}if(xe=e(G,gt,xe,le,L+1),it=xe.length,0<z&&(gt=n(pt,fe,or),Ht=a(3,xe,gt,G,S,b,it,le,L,Z),fe=gt.join(""),Ht!==void 0&&(it=(xe=Ht.trim()).length)===0&&(le=0,xe="")),0<it)switch(le){case 115:fe=fe.replace($,o);case 100:case 109:case 45:xe=fe+"{"+xe+"}";break;case 107:fe=fe.replace(v,"$1 $2"),xe=fe+"{"+xe+"}",xe=Ie===1||Ie===2&&s("@"+xe,3)?"@-webkit-"+xe+"@"+xe:"@"+xe;break;default:xe=fe+xe,Z===112&&(xe=(ze+=xe,""))}else xe="";break;default:xe=e(G,n(G,fe,or),xe,Z,L+1)}je+=xe,xe=or=gt=He=Ae=0,fe="",le=J.charCodeAt(++be);break;case 125:case 59:if(fe=(0<gt?fe.replace(p,""):fe).trim(),1<(it=fe.length))switch(He===0&&(Ae=fe.charCodeAt(0),Ae===45||96<Ae&&123>Ae)&&(it=(fe=fe.replace(" ",":")).length),0<z&&(Ht=a(1,fe,G,q,S,b,ze.length,Z,L,Z))!==void 0&&(it=(fe=Ht.trim()).length)===0&&(fe="\0\0"),Ae=fe.charCodeAt(0),le=fe.charCodeAt(1),Ae){case 0:break;case 64:if(le===105||le===99){Ye+=fe+J.charAt(be);break}default:fe.charCodeAt(it-1)!==58&&(ze+=i(fe,Ae,le,fe.charCodeAt(2)))}or=gt=He=Ae=0,fe="",le=J.charCodeAt(++be)}}switch(le){case 13:case 10:Y===47?Y=0:1+Ae===0&&Z!==107&&0<fe.length&&(gt=1,fe+="\0"),0<z*ae&&a(0,fe,G,q,S,b,ze.length,Z,L,Z),b=1,S++;break;case 59:case 125:if(Y+Se+Ve+he===0){b++;break}default:switch(b++,yt=J.charAt(be),le){case 9:case 32:if(Se+he+Y===0)switch(Be){case 44:case 58:case 9:case 32:yt="";break;default:le!==32&&(yt=" ")}break;case 0:yt="\\0";break;case 12:yt="\\f";break;case 11:yt="\\v";break;case 38:Se+Y+he===0&&(gt=or=1,yt="\f"+yt);break;case 108:if(Se+Y+he+te===0&&0<He)switch(be-He){case 2:Be===112&&J.charCodeAt(be-3)===58&&(te=Be);case 8:mt===111&&(te=mt)}break;case 58:Se+Y+he===0&&(He=be);break;case 44:Y+Ve+Se+he===0&&(gt=1,yt+="\r");break;case 34:case 39:Y===0&&(Se=Se===le?0:Se===0?le:Se);break;case 91:Se+Y+Ve===0&&he++;break;case 93:Se+Y+Ve===0&&he--;break;case 41:Se+Y+he===0&&Ve--;break;case 40:if(Se+Y+he===0){if(Ae===0)switch(2*Be+3*mt){case 533:break;default:Ae=1}Ve++}break;case 64:Y+Ve+Se+he+He+xe===0&&(xe=1);break;case 42:case 47:if(!(0<Se+he+Ve))switch(Y){case 0:switch(2*le+3*J.charCodeAt(be+1)){case 235:Y=47;break;case 220:it=be,Y=42}break;case 42:le===47&&Be===42&&it+2!==be&&(J.charCodeAt(it+2)===33&&(ze+=J.substring(it,be+1)),yt="",Y=0)}}Y===0&&(fe+=yt)}mt=Be,Be=le,be++}if(it=ze.length,0<it){if(gt=G,0<z&&(Ht=a(2,ze,gt,q,S,b,it,Z,L,Z),Ht!==void 0&&(ze=Ht).length===0))return Ye+ze+je;if(ze=gt.join(",")+"{"+ze+"}",Ie*te!==0){switch(Ie!==2||s(ze,2)||(te=0),te){case 111:ze=ze.replace(D,":-moz-$1")+ze;break;case 112:ze=ze.replace(C,"::-webkit-input-$1")+ze.replace(C,"::-moz-$1")+ze.replace(C,":-ms-input-$1")+ze}te=0}}return Ye+ze+je}function n(q,G,J){var Z=G.trim().split(P);G=Z;var L=Z.length,he=q.length;switch(he){case 0:case 1:var Y=0;for(q=he===0?"":q[0]+" ";Y<L;++Y)G[Y]=r(q,G[Y],J).trim();break;default:var Ve=Y=0;for(G=[];Y<L;++Y)for(var Se=0;Se<he;++Se)G[Ve++]=r(q[Se]+" ",Z[Y],J).trim()}return G}function r(q,G,J){var Z=G.charCodeAt(0);switch(33>Z&&(Z=(G=G.trim()).charCodeAt(0)),Z){case 38:return G.replace(_,"$1"+q.trim());case 58:return q.trim()+G.replace(_,"$1"+q.trim());default:if(0<1*J&&0<G.indexOf("\f"))return G.replace(_,(q.charCodeAt(0)===58?"":"$1")+q.trim())}return q+G}function i(q,G,J,Z){var L=q+";",he=2*G+3*J+4*Z;if(he===944){q=L.indexOf(":",9)+1;var Y=L.substring(q,L.length-1).trim();return Y=L.substring(0,q).trim()+Y+";",Ie===1||Ie===2&&s(Y,1)?"-webkit-"+Y+Y:Y}if(Ie===0||Ie===2&&!s(L,1))return L;switch(he){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(k,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return Y=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Y+"-webkit-"+L+"-ms-flex-pack"+Y+L;case 1005:return w.test(L)?L.replace(T,":-webkit-")+L.replace(T,":-moz-")+L:L;case 1e3:switch(Y=L.substring(13).trim(),G=Y.indexOf("-")+1,Y.charCodeAt(0)+Y.charCodeAt(G)){case 226:Y=L.replace(j,"tb");break;case 232:Y=L.replace(j,"tb-rl");break;case 220:Y=L.replace(j,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+Y+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(G=(L=q).length-10,Y=(L.charCodeAt(G)===33?L.substring(0,G):L).substring(q.indexOf(":",7)+1).trim(),he=Y.charCodeAt(0)+(Y.charCodeAt(7)|0)){case 203:if(111>Y.charCodeAt(8))break;case 115:L=L.replace(Y,"-webkit-"+Y)+";"+L;break;case 207:case 102:L=L.replace(Y,"-webkit-"+(102<he?"inline-":"")+"box")+";"+L.replace(Y,"-webkit-"+Y)+";"+L.replace(Y,"-ms-"+Y+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return Y=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+Y+"-ms-flex-"+Y+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(E,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(E,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(R.test(q)===!0)return(Y=q.substring(q.indexOf(":")+1)).charCodeAt(0)===115?i(q.replace("stretch","fill-available"),G,J,Z).replace(":fill-available",":stretch"):L.replace(Y,"-webkit-"+Y)+L.replace(Y,"-moz-"+Y.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,J+Z===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+L}return L}function s(q,G){var J=q.indexOf(G===1?":":"{"),Z=q.substring(0,G!==3?J:10);return J=q.substring(J+1,q.length-1),oe(G!==2?Z:Z.replace(A,"$1"),J,G)}function o(q,G){var J=i(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return J!==G+";"?J.replace(y," or ($1)").substring(4):"("+G+")"}function a(q,G,J,Z,L,he,Y,Ve,Se,Ae){for(var le=0,Be=G,mt;le<z;++le)switch(mt=Ne[le].call(d,q,Be,J,Z,L,he,Y,Ve,Se,Ae)){case void 0:case!1:case!0:case null:break;default:Be=mt}if(Be!==G)return Be}function u(q){switch(q){case void 0:case null:z=Ne.length=0;break;default:if(typeof q=="function")Ne[z++]=q;else if(typeof q=="object")for(var G=0,J=q.length;G<J;++G)u(q[G]);else ae=!!q|0}return u}function c(q){return q=q.prefix,q!==void 0&&(oe=null,q?typeof q!="function"?Ie=1:(Ie=2,oe=q):Ie=0),c}function d(q,G){var J=q;if(33>J.charCodeAt(0)&&(J=J.trim()),Te=J,J=[Te],0<z){var Z=a(-1,G,J,J,S,b,0,0,0,0);Z!==void 0&&typeof Z=="string"&&(G=Z)}var L=e(pt,J,G,0,0);return 0<z&&(Z=a(-2,L,J,J,S,b,L.length,0,0,0),Z!==void 0&&(L=Z)),Te="",te=0,b=S=1,L}var f=/^\0+/g,p=/[\0\r\f]/g,T=/: */g,w=/zoo|gra/,x=/([,: ])(transform)/g,P=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,D=/:(read-only)/g,j=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,y=/([\s\S]*?);/g,E=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,b=1,S=1,te=0,Ie=1,pt=[],Ne=[],z=0,oe=null,ae=0,Te="";return d.use=u,d.set=c,t!==void 0&&c(t),d}var cR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var hR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c0=dR(function(t){return hR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),$E={exports:{}},$e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nt=typeof Symbol=="function"&&Symbol.for,Km=Nt?Symbol.for("react.element"):60103,Qm=Nt?Symbol.for("react.portal"):60106,Dd=Nt?Symbol.for("react.fragment"):60107,Nd=Nt?Symbol.for("react.strict_mode"):60108,Md=Nt?Symbol.for("react.profiler"):60114,Od=Nt?Symbol.for("react.provider"):60109,Ld=Nt?Symbol.for("react.context"):60110,Ym=Nt?Symbol.for("react.async_mode"):60111,Vd=Nt?Symbol.for("react.concurrent_mode"):60111,jd=Nt?Symbol.for("react.forward_ref"):60112,Fd=Nt?Symbol.for("react.suspense"):60113,fR=Nt?Symbol.for("react.suspense_list"):60120,Ud=Nt?Symbol.for("react.memo"):60115,$d=Nt?Symbol.for("react.lazy"):60116,pR=Nt?Symbol.for("react.block"):60121,mR=Nt?Symbol.for("react.fundamental"):60117,gR=Nt?Symbol.for("react.responder"):60118,yR=Nt?Symbol.for("react.scope"):60119;function bn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Km:switch(t=t.type,t){case Ym:case Vd:case Dd:case Md:case Nd:case Fd:return t;default:switch(t=t&&t.$$typeof,t){case Ld:case jd:case $d:case Ud:case Od:return t;default:return e}}case Qm:return e}}}function zE(t){return bn(t)===Vd}$e.AsyncMode=Ym;$e.ConcurrentMode=Vd;$e.ContextConsumer=Ld;$e.ContextProvider=Od;$e.Element=Km;$e.ForwardRef=jd;$e.Fragment=Dd;$e.Lazy=$d;$e.Memo=Ud;$e.Portal=Qm;$e.Profiler=Md;$e.StrictMode=Nd;$e.Suspense=Fd;$e.isAsyncMode=function(t){return zE(t)||bn(t)===Ym};$e.isConcurrentMode=zE;$e.isContextConsumer=function(t){return bn(t)===Ld};$e.isContextProvider=function(t){return bn(t)===Od};$e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Km};$e.isForwardRef=function(t){return bn(t)===jd};$e.isFragment=function(t){return bn(t)===Dd};$e.isLazy=function(t){return bn(t)===$d};$e.isMemo=function(t){return bn(t)===Ud};$e.isPortal=function(t){return bn(t)===Qm};$e.isProfiler=function(t){return bn(t)===Md};$e.isStrictMode=function(t){return bn(t)===Nd};$e.isSuspense=function(t){return bn(t)===Fd};$e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dd||t===Vd||t===Md||t===Nd||t===Fd||t===fR||typeof t=="object"&&t!==null&&(t.$$typeof===$d||t.$$typeof===Ud||t.$$typeof===Od||t.$$typeof===Ld||t.$$typeof===jd||t.$$typeof===mR||t.$$typeof===gR||t.$$typeof===yR||t.$$typeof===pR)};$e.typeOf=bn;$E.exports=$e;var vR=$E.exports,Xm=vR,_R={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ER={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},BE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jm={};Jm[Xm.ForwardRef]=ER;Jm[Xm.Memo]=BE;function d0(t){return Xm.isMemo(t)?BE:Jm[t.$$typeof]||_R}var TR=Object.defineProperty,IR=Object.getOwnPropertyNames,h0=Object.getOwnPropertySymbols,SR=Object.getOwnPropertyDescriptor,AR=Object.getPrototypeOf,f0=Object.prototype;function HE(t,e,n){if(typeof e!="string"){if(f0){var r=AR(e);r&&r!==f0&&HE(t,r,n)}var i=IR(e);h0&&(i=i.concat(h0(e)));for(var s=d0(t),o=d0(e),a=0;a<i.length;++a){var u=i[a];if(!wR[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=SR(e,u);try{TR(t,u,c)}catch{}}}}return t}var xR=HE;const CR=Yp(xR);var hr={};function pr(){return(pr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var p0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},up=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!UE.typeOf(t)},Lc=Object.freeze([]),ki=Object.freeze({});function Tl(t){return typeof t=="function"}function m0(t){return t.displayName||t.name||"Component"}function Zm(t){return t&&typeof t.styledComponentId=="string"}var Lo=typeof process<"u"&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",eg=typeof window<"u"&&"HTMLElement"in window,RR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY),PR={};function jl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var kR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&jl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),ec=new Map,Vc=new Map,Ya=1,Mu=function(t){if(ec.has(t))return ec.get(t);for(;Vc.has(Ya);)Ya++;var e=Ya++;return ec.set(t,e),Vc.set(e,t),e},bR=function(t){return Vc.get(t)},DR=function(t,e){e>=Ya&&(Ya=e+1),ec.set(t,e),Vc.set(e,t)},NR="style["+Lo+'][data-styled-version="5.3.6"]',MR=new RegExp("^"+Lo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),OR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},LR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(MR);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(DR(c,u),OR(t,c,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},VR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var d=u[c];if(d&&d.nodeType===1&&d.hasAttribute(Lo))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Lo,"active"),r.setAttribute("data-styled-version","5.3.6");var o=VR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},jR=function(){function t(n){var r=this.element=qE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}jl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),FR=function(){function t(n){var r=this.element=qE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),UR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),g0=eg,$R={isServer:!eg,useCSSOMInjection:!RR},jc=function(){function t(n,r,i){n===void 0&&(n=ki),r===void 0&&(r={}),this.options=pr({},$R,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&eg&&g0&&(g0=!1,function(s){for(var o=document.querySelectorAll(NR),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(Lo)!=="active"&&(LR(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return Mu(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(pr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new UR(o):s?new jR(o):new FR(o),new kR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Mu(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Mu(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Mu(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=bR(o);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(o);if(u&&c&&u.size){var d=Lo+".g"+o+'[id="'+a+'"]',f="";u!==void 0&&u.forEach(function(p){p.length>0&&(f+=p+",")}),s+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),zR=/(a)(d)/gi,y0=function(t){return String.fromCharCode(t+(t>25?39:97))};function cp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=y0(e%52)+n;return(y0(e%52)+n).replace(zR,"$1-$2")}var mo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},WE=function(t){return mo(5381,t)};function GE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Tl(n)&&!Zm(n))return!1}return!0}var BR=WE("5.3.6"),HR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&GE(e),this.componentId=n,this.baseHash=mo(BR,n),this.baseStyle=r,jc.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ws(this.rules,e,n,r).join(""),a=cp(mo(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,d=mo(this.baseHash,r.hash),f="",p=0;p<c;p++){var T=this.rules[p];if(typeof T=="string")f+=T;else if(T){var w=ws(T,e,n,r),x=Array.isArray(w)?w.join(""):w;d=mo(d,x+p),f+=x}}if(f){var P=cp(d>>>0);if(!n.hasNameForId(i,P)){var _=r(f,"."+P,void 0,i);n.insertRules(i,P,_)}s.push(P)}}return s.join(" ")},t}(),qR=/^\s*\/\/.*$/gm,WR=[":","[",".","#"];function GR(t){var e,n,r,i,s=ki,o=s.options,a=o===void 0?ki:o,u=s.plugins,c=u===void 0?Lc:u,d=new uR(a),f=[],p=function(x){function P(_){if(_)try{x(_+"}")}catch{}}return function(_,v,C,D,j,$,y,E,A,R){switch(_){case 1:if(A===0&&v.charCodeAt(0)===64)return x(v+";"),"";break;case 2:if(E===0)return v+"/*|*/";break;case 3:switch(E){case 102:case 112:return x(C[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(P)}}}(function(x){f.push(x)}),T=function(x,P,_){return P===0&&WR.indexOf(_[n.length])!==-1||_.match(i)?x:"."+e};function w(x,P,_,v){v===void 0&&(v="&");var C=x.replace(qR,""),D=P&&_?_+" "+P+" { "+C+" }":C;return e=v,n=P,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(_||!P?"":P,D)}return d.use([].concat(c,[function(x,P,_){x===2&&_.length&&_[0].lastIndexOf(n)>0&&(_[0]=_[0].replace(r,T))},p,function(x){if(x===-2){var P=f;return f=[],P}}])),w.hash=c.length?c.reduce(function(x,P){return P.name||jl(15),mo(x,P.name)},5381).toString():"",w}var KE=Ko.createContext();KE.Consumer;var QE=Ko.createContext(),KR=(QE.Consumer,new jc),dp=GR();function YE(){return N.useContext(KE)||KR}function XE(){return N.useContext(QE)||dp}var JE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=dp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return jl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=dp),this.name+e.hash},t}(),QR=/([A-Z])/,YR=/([A-Z])/g,XR=/^ms-/,JR=function(t){return"-"+t.toLowerCase()};function v0(t){return QR.test(t)?t.replace(YR,JR).replace(XR,"-ms-"):t}var _0=function(t){return t==null||t===!1||t===""};function ws(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ws(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_0(t))return"";if(Zm(t))return"."+t.styledComponentId;if(Tl(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var u=t(e);return ws(u,e,n,r)}var c;return t instanceof JE?n?(t.inject(n,r),t.getName(r)):t:up(t)?function d(f,p){var T,w,x=[];for(var P in f)f.hasOwnProperty(P)&&!_0(f[P])&&(Array.isArray(f[P])&&f[P].isCss||Tl(f[P])?x.push(v0(P)+":",f[P],";"):up(f[P])?x.push.apply(x,d(f[P],P)):x.push(v0(P)+": "+(T=P,(w=f[P])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||T in cR?String(w).trim():w+"px")+";"));return p?[p+" {"].concat(x,["}"]):x}(t):t.toString()}var w0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function tg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Tl(t)||up(t)?w0(ws(p0(Lc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:w0(ws(p0(t,n)))}var ZE=function(t,e,n){return n===void 0&&(n=ki),t.theme!==n.theme&&t.theme||e||n.theme},ZR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eP=/(^-|-$)/g;function Gh(t){return t.replace(ZR,"-").replace(eP,"")}var ng=function(t){return cp(WE(t)>>>0)};function Ou(t){return typeof t=="string"&&!0}var hp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},tP=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function nP(t,e,n){var r=t[n];hp(e)&&hp(r)?eT(r,e):t[n]=e}function eT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(hp(o))for(var a in o)tP(a)&&nP(t,o[a],a)}return t}var rg=Ko.createContext();rg.Consumer;var Kh={};function tT(t,e,n){var r=Zm(t),i=!Ou(t),s=e.attrs,o=s===void 0?Lc:s,a=e.componentId,u=a===void 0?function(v,C){var D=typeof v!="string"?"sc":Gh(v);Kh[D]=(Kh[D]||0)+1;var j=D+"-"+ng("5.3.6"+D+Kh[D]);return C?C+"-"+j:j}(e.displayName,e.parentComponentId):a,c=e.displayName,d=c===void 0?function(v){return Ou(v)?"styled."+v:"Styled("+m0(v)+")"}(t):c,f=e.displayName&&e.componentId?Gh(e.displayName)+"-"+e.componentId:e.componentId||u,p=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,T=e.shouldForwardProp;r&&t.shouldForwardProp&&(T=e.shouldForwardProp?function(v,C,D){return t.shouldForwardProp(v,C,D)&&e.shouldForwardProp(v,C,D)}:t.shouldForwardProp);var w,x=new HR(n,f,r?t.componentStyle:void 0),P=x.isStatic&&o.length===0,_=function(v,C){return function(D,j,$,y){var E=D.attrs,A=D.componentStyle,R=D.defaultProps,k=D.foldedComponentIds,b=D.shouldForwardProp,S=D.styledComponentId,te=D.target,Ie=function(Z,L,he){Z===void 0&&(Z=ki);var Y=pr({},L,{theme:Z}),Ve={};return he.forEach(function(Se){var Ae,le,Be,mt=Se;for(Ae in Tl(mt)&&(mt=mt(Y)),mt)Y[Ae]=Ve[Ae]=Ae==="className"?(le=Ve[Ae],Be=mt[Ae],le&&Be?le+" "+Be:le||Be):mt[Ae]}),[Y,Ve]}(ZE(j,N.useContext(rg),R)||ki,j,E),pt=Ie[0],Ne=Ie[1],z=function(Z,L,he,Y){var Ve=YE(),Se=XE(),Ae=L?Z.generateAndInjectStyles(ki,Ve,Se):Z.generateAndInjectStyles(he,Ve,Se);return Ae}(A,y,pt),oe=$,ae=Ne.$as||j.$as||Ne.as||j.as||te,Te=Ou(ae),q=Ne!==j?pr({},j,{},Ne):j,G={};for(var J in q)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?G.as=q[J]:(b?b(J,c0,ae):!Te||c0(J))&&(G[J]=q[J]));return j.style&&Ne.style!==j.style&&(G.style=pr({},j.style,{},Ne.style)),G.className=Array.prototype.concat(k,S,z!==S?z:null,j.className,Ne.className).filter(Boolean).join(" "),G.ref=oe,N.createElement(ae,G)}(w,v,C,P)};return _.displayName=d,(w=Ko.forwardRef(_)).attrs=p,w.componentStyle=x,w.displayName=d,w.shouldForwardProp=T,w.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Lc,w.styledComponentId=f,w.target=r?t.target:t,w.withComponent=function(v){var C=e.componentId,D=function($,y){if($==null)return{};var E,A,R={},k=Object.keys($);for(A=0;A<k.length;A++)E=k[A],y.indexOf(E)>=0||(R[E]=$[E]);return R}(e,["componentId"]),j=C&&C+"-"+(Ou(v)?v:Gh(m0(v)));return tT(v,pr({},D,{attrs:p,componentId:j}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?eT({},t.defaultProps,v):v}}),w.toString=function(){return"."+w.styledComponentId},i&&CR(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var H=function(t){return function e(n,r,i){if(i===void 0&&(i=ki),!UE.isValidElementType(r))return jl(1,String(r));var s=function(){return n(r,i,tg.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,pr({},i,{},o))},s.attrs=function(o){return e(n,r,pr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(tT,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){H[t]=H(t)});var rP=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=GE(n),jc.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ws(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&jc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function iP(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=tg.apply(void 0,[t].concat(n)),s="sc-global-"+ng(JSON.stringify(i)),o=new rP(i,s);function a(c){var d=YE(),f=XE(),p=N.useContext(rg),T=N.useRef(d.allocateGSInstance(s)).current;return d.server&&u(T,c,d,p,f),N.useLayoutEffect(function(){if(!d.server)return u(T,c,d,p,f),function(){return o.removeStyles(T,d)}},[T,c,d,p,f]),null}function u(c,d,f,p,T){if(o.isStatic)o.renderStyles(c,PR,f,T);else{var w=pr({},d,{theme:ZE(d,p,a.defaultProps)});o.renderStyles(c,w,f,T)}}return Ko.memo(a)}function ig(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=tg.apply(void 0,[t].concat(n)).join(""),s=ng(i);return new JE(s,i)}const zd=H(t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",...t,children:g.jsx("path",{fill:"currentColor",d:"M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06"})}))``,sP=ig`
  to {
     backdrop-filter: blur(3px);
  }
`,oP=H.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
  padding-block-start: 16px;
`,nT=H(({className:t,children:e,addToPracticePlan:n})=>g.jsx("li",{className:t,children:g.jsx("button",{onClick:n,children:e})}))`
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
`,aP=(t,e,n)=>{const{top:r,bottom:i,left:s,right:o}=t.current.getBoundingClientRect(),a=e.clientX,u=e.clientY;(a<s||a>o||u<r||u>i)&&n()},lP=H.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
`,fp=H(({children:t,className:e,passedRef:n,title:r,onClose:i,animationDirection:s})=>g.jsxs("dialog",{ref:n,onClick:o=>aP(n,o,i),className:e,style:{animation:s?"slide-in var(--animation-timing) ease-in both":"slide-out 300ms ease-out both"},onAnimationEnd:()=>{s||n.current.close()},children:[g.jsxs(lP,{children:[r,g.jsx(zd,{onClick:i})]}),t]}))`
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
      animation-name: ${sP};
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
`,sg=N.createContext(null),uP=({children:t})=>{const[e,n]=N.useState(),[r,i]=N.useState(""),s=N.useRef(),[o,a]=N.useState(!1),u=()=>{s.current&&a(!1)},c=()=>{var d;(d=s.current)==null||d.show(),a(!0)};return g.jsxs(sg.Provider,{value:{panelContent:e,setPanelContent:n,panelTitle:r,setPanelTitle:i,panelRef:s,showPanel:c,closePanel:u},children:[t,g.jsx(fp,{title:r,passedRef:s,onClose:u,animationDirection:o,children:g.jsx(oP,{children:e})})]})},ft=H(({text:t,onClick:e,className:n,Icon:r,...i})=>g.jsxs("button",{className:n,onClick:e,...i,children:[g.jsx("span",{children:t}),!!r&&g.jsx("div",{children:g.jsx(r,{})})]}))`
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
`,cP=H(({tabs:t,currentTab:e,setCurrentTab:n,className:r})=>g.jsx("ul",{className:r,children:t.map(i=>g.jsx("li",{onClick:()=>n(i),"aria-selected":e===i,children:i},i))}))`
  grid-area: nav;
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
 */function ot(){return ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ot.apply(this,arguments)}var Et;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Et||(Et={}));const E0="popstate";function dP(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:u=""}=Jr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Il("",{pathname:o,search:a,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof s=="string"?s:Ts(s))}function r(i,s){Es(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fP(e,n,r,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Es(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hP(){return Math.random().toString(36).substr(2,8)}function T0(t,e){return{usr:t.state,key:t.key,idx:e}}function Il(t,e,n,r){return n===void 0&&(n=null),ot({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jr(e):e,{state:n,key:e&&e.key||r||hP()})}function Ts(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Et.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ot({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Et.Pop;let P=d(),_=P==null?null:P-c;c=P,u&&u({action:a,location:x.location,delta:_})}function p(P,_){a=Et.Push;let v=Il(x.location,P,_);n&&n(v,P),c=d()+1;let C=T0(v,c),D=x.createHref(v);try{o.pushState(C,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(D)}s&&u&&u({action:a,location:x.location,delta:1})}function T(P,_){a=Et.Replace;let v=Il(x.location,P,_);n&&n(v,P),c=d();let C=T0(v,c),D=x.createHref(v);o.replaceState(C,"",D),s&&u&&u({action:a,location:x.location,delta:0})}function w(P){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof P=="string"?P:Ts(P);return v=v.replace(/ $/,"%20"),Ee(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let x={get action(){return a},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(E0,f),u=P,()=>{i.removeEventListener(E0,f),u=null}},createHref(P){return e(i,P)},createURL:w,encodeLocation(P){let _=w(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:T,go(P){return o.go(P)}};return x}var nt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nt||(nt={}));const pP=new Set(["lazy","caseSensitive","path","id","index","children"]);function mP(t){return t.index===!0}function pp(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),mP(i)){let u=ot({},i,e(i),{id:a});return r[a]=u,u}else{let u=ot({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=pp(i.children,e,o,r)),u}})}function go(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Jr(e):e,i=Gr(r.pathname||"/",n);if(i==null)return null;let s=rT(t);yP(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=RP(i);o=xP(s[a],u)}return o}function gP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function rT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ur([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),rT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:SP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of iT(s.path))i(s,o,u)}),e}function iT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=iT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function yP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vP=/^:[\w-]+$/,_P=3,wP=2,EP=1,TP=10,IP=-2,I0=t=>t==="*";function SP(t,e){let n=t.split("/"),r=n.length;return n.some(I0)&&(r+=IP),e&&(r+=wP),n.filter(i=>!I0(i)).reduce((i,s)=>i+(vP.test(s)?_P:s===""?EP:TP),r)}function AP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=mp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!d)return null;Object.assign(r,d.params);let f=a.route;s.push({params:r,pathname:Ur([i,d.pathname]),pathnameBase:bP(Ur([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Ur([i,d.pathnameBase]))}return s}function mp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:T}=d;if(p==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const w=a[f];return T&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function CP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Es(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Es(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function PP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jr(t):t;return{pathname:n?n.startsWith("/")?n:kP(n,e):e,search:DP(r),hash:NP(i)}}function kP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function og(t,e){let n=sT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ag(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jr(t):(i=ot({},t),Ee(!i.pathname||!i.pathname.includes("?"),Qh("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Qh("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Qh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=PP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ur=t=>t.join("/").replace(/\/\/+/g,"/"),bP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class lg{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ug(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const oT=["post","put","patch","delete"],MP=new Set(oT),OP=["get",...oT],LP=new Set(OP),VP=new Set([301,302,303,307,308]),jP=new Set([307,308]),Yh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},FP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Aa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,UP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),aT="remix-router-transitions";function $P(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let M=t.detectErrorBoundary;i=V=>({hasErrorBoundary:M(V)})}else i=UP;let s={},o=pp(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.unstable_dataStrategy||qP,d=ot({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),f=null,p=new Set,T=null,w=null,x=null,P=t.hydrationData!=null,_=go(o,t.history.location,u),v=null;if(_==null){let M=Nn(404,{pathname:t.history.location.pathname}),{matches:V,route:U}=N0(o);_=V,v={[U.id]:M}}let C,D=_.some(M=>M.route.lazy),j=_.some(M=>M.route.loader);if(D)C=!1;else if(!j)C=!0;else if(d.v7_partialHydration){let M=t.hydrationData?t.hydrationData.loaderData:null,V=t.hydrationData?t.hydrationData.errors:null,U=Q=>Q.route.loader?typeof Q.route.loader=="function"&&Q.route.loader.hydrate===!0?!1:M&&M[Q.route.id]!==void 0||V&&V[Q.route.id]!==void 0:!0;if(V){let Q=_.findIndex(ne=>V[ne.route.id]!==void 0);C=_.slice(0,Q+1).every(U)}else C=_.every(U)}else C=t.hydrationData!=null;let $,y={historyAction:t.history.action,location:t.history.location,matches:_,initialized:C,navigation:Yh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},E=Et.Pop,A=!1,R,k=!1,b=new Map,S=null,te=!1,Ie=!1,pt=[],Ne=[],z=new Map,oe=0,ae=-1,Te=new Map,q=new Set,G=new Map,J=new Map,Z=new Set,L=new Map,he=new Map,Y=!1;function Ve(){if(f=t.history.listen(M=>{let{action:V,location:U,delta:Q}=M;if(Y){Y=!1;return}Es(he.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=qs({currentLocation:y.location,nextLocation:U,historyAction:V});if(ne&&Q!=null){Y=!0,t.history.go(Q*-1),Hs(ne,{state:"blocked",location:U,proceed(){Hs(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),t.history.go(Q)},reset(){let ue=new Map(y.blockers);ue.set(ne,Aa),le({blockers:ue})}});return}return He(V,U)}),n){rk(e,b);let M=()=>ik(e,b);e.addEventListener("pagehide",M),S=()=>e.removeEventListener("pagehide",M)}return y.initialized||He(Et.Pop,y.location,{initialHydration:!0}),$}function Se(){f&&f(),S&&S(),p.clear(),R&&R.abort(),y.fetchers.forEach((M,V)=>Qi(V)),y.blockers.forEach((M,V)=>su(V))}function Ae(M){return p.add(M),()=>p.delete(M)}function le(M,V){V===void 0&&(V={}),y=ot({},y,M);let U=[],Q=[];d.v7_fetcherPersist&&y.fetchers.forEach((ne,ue)=>{ne.state==="idle"&&(Z.has(ue)?Q.push(ue):U.push(ue))}),[...p].forEach(ne=>ne(y,{deletedFetchers:Q,unstable_viewTransitionOpts:V.viewTransitionOpts,unstable_flushSync:V.flushSync===!0})),d.v7_fetcherPersist&&(U.forEach(ne=>y.fetchers.delete(ne)),Q.forEach(ne=>Qi(ne)))}function Be(M,V,U){var Q,ne;let{flushSync:ue}=U===void 0?{}:U,ce=y.actionData!=null&&y.navigation.formMethod!=null&&Yn(y.navigation.formMethod)&&y.navigation.state==="loading"&&((Q=M.state)==null?void 0:Q._isRedirect)!==!0,ee;V.actionData?Object.keys(V.actionData).length>0?ee=V.actionData:ee=null:ce?ee=y.actionData:ee=null;let ge=V.loaderData?b0(y.loaderData,V.loaderData,V.matches||[],V.errors):y.loaderData,ye=y.blockers;ye.size>0&&(ye=new Map(ye),ye.forEach((pe,We)=>ye.set(We,Aa)));let At=A===!0||y.navigation.formMethod!=null&&Yn(y.navigation.formMethod)&&((ne=M.state)==null?void 0:ne._isRedirect)!==!0;a&&(o=a,a=void 0),te||E===Et.Pop||(E===Et.Push?t.history.push(M,M.state):E===Et.Replace&&t.history.replace(M,M.state));let tt;if(E===Et.Pop){let pe=b.get(y.location.pathname);pe&&pe.has(M.pathname)?tt={currentLocation:y.location,nextLocation:M}:b.has(M.pathname)&&(tt={currentLocation:M,nextLocation:y.location})}else if(k){let pe=b.get(y.location.pathname);pe?pe.add(M.pathname):(pe=new Set([M.pathname]),b.set(y.location.pathname,pe)),tt={currentLocation:y.location,nextLocation:M}}le(ot({},V,{actionData:ee,loaderData:ge,historyAction:E,location:M,initialized:!0,navigation:Yh,revalidation:"idle",restoreScrollPosition:Gs(M,V.matches||y.matches),preventScrollReset:At,blockers:ye}),{viewTransitionOpts:tt,flushSync:ue===!0}),E=Et.Pop,A=!1,k=!1,te=!1,Ie=!1,pt=[],Ne=[]}async function mt(M,V){if(typeof M=="number"){t.history.go(M);return}let U=gp(y.location,y.matches,u,d.v7_prependBasename,M,d.v7_relativeSplatPath,V==null?void 0:V.fromRouteId,V==null?void 0:V.relative),{path:Q,submission:ne,error:ue}=S0(d.v7_normalizeFormMethod,!1,U,V),ce=y.location,ee=Il(y.location,Q,V&&V.state);ee=ot({},ee,t.history.encodeLocation(ee));let ge=V&&V.replace!=null?V.replace:void 0,ye=Et.Push;ge===!0?ye=Et.Replace:ge===!1||ne!=null&&Yn(ne.formMethod)&&ne.formAction===y.location.pathname+y.location.search&&(ye=Et.Replace);let At=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,tt=(V&&V.unstable_flushSync)===!0,pe=qs({currentLocation:ce,nextLocation:ee,historyAction:ye});if(pe){Hs(pe,{state:"blocked",location:ee,proceed(){Hs(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),mt(M,V)},reset(){let We=new Map(y.blockers);We.set(pe,Aa),le({blockers:We})}});return}return await He(ye,ee,{submission:ne,pendingError:ue,preventScrollReset:At,replace:V&&V.replace,enableViewTransition:V&&V.unstable_viewTransition,flushSync:tt})}function xe(){if(ze(),le({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){He(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}He(E||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function He(M,V,U){R&&R.abort(),R=null,E=M,te=(U&&U.startUninterruptedRevalidation)===!0,la(y.location,y.matches),A=(U&&U.preventScrollReset)===!0,k=(U&&U.enableViewTransition)===!0;let Q=a||o,ne=U&&U.overrideNavigation,ue=go(Q,V,u),ce=(U&&U.flushSync)===!0;if(!ue){let pe=Nn(404,{pathname:V.pathname}),{matches:We,route:st}=N0(Q);Ws(),Be(V,{matches:We,loaderData:{},errors:{[st.id]:pe}},{flushSync:ce});return}if(y.initialized&&!Ie&&XP(y.location,V)&&!(U&&U.submission&&Yn(U.submission.formMethod))){Be(V,{matches:ue},{flushSync:ce});return}R=new AbortController;let ee=Js(t.history,V,R.signal,U&&U.submission),ge;if(U&&U.pendingError)ge=[Xa(ue).route.id,{type:nt.error,error:U.pendingError}];else if(U&&U.submission&&Yn(U.submission.formMethod)){let pe=await be(ee,V,U.submission,ue,{replace:U.replace,flushSync:ce});if(pe.shortCircuited)return;ge=pe.pendingActionResult,ne=Xh(V,U.submission),ce=!1,ee=Js(t.history,ee.url,ee.signal)}let{shortCircuited:ye,loaderData:At,errors:tt}=await gt(ee,V,ue,ne,U&&U.submission,U&&U.fetcherSubmission,U&&U.replace,U&&U.initialHydration===!0,ce,ge);ye||(R=null,Be(V,ot({matches:ue},D0(ge),{loaderData:At,errors:tt})))}async function be(M,V,U,Q,ne){ne===void 0&&(ne={}),ze();let ue=tk(V,U);le({navigation:ue},{flushSync:ne.flushSync===!0});let ce,ee=vp(Q,V);if(!ee.route.action&&!ee.route.lazy)ce={type:nt.error,error:Nn(405,{method:M.method,pathname:V.pathname,routeId:ee.route.id})};else if(ce=(await yt("action",M,[ee],Q))[0],M.signal.aborted)return{shortCircuited:!0};if(ls(ce)){let ge;return ne&&ne.replace!=null?ge=ne.replace:ge=R0(ce.response.headers.get("Location"),new URL(M.url),u)===y.location.pathname+y.location.search,await wn(M,ce,{submission:U,replace:ge}),{shortCircuited:!0}}if(as(ce))throw Nn(400,{type:"defer-action"});if(Ln(ce)){let ge=Xa(Q,ee.route.id);return(ne&&ne.replace)!==!0&&(E=Et.Push),{pendingActionResult:[ge.route.id,ce]}}return{pendingActionResult:[ee.route.id,ce]}}async function gt(M,V,U,Q,ne,ue,ce,ee,ge,ye){let At=Q||Xh(V,ne),tt=ne||ue||L0(At),pe=a||o,[We,st]=A0(t.history,y,U,tt,V,d.v7_partialHydration&&ee===!0,d.unstable_skipActionErrorRevalidation,Ie,pt,Ne,Z,G,q,pe,u,ye);if(Ws(Ce=>!(U&&U.some(Mt=>Mt.route.id===Ce))||We&&We.some(Mt=>Mt.route.id===Ce)),ae=++oe,We.length===0&&st.length===0){let Ce=sa();return Be(V,ot({matches:U,loaderData:{},errors:ye&&Ln(ye[1])?{[ye[0]]:ye[1].error}:null},D0(ye),Ce?{fetchers:new Map(y.fetchers)}:{}),{flushSync:ge}),{shortCircuited:!0}}if(!te&&(!d.v7_partialHydration||!ee)){st.forEach(Mt=>{let Ot=y.fetchers.get(Mt.key),_t=xa(void 0,Ot?Ot.data:void 0);y.fetchers.set(Mt.key,_t)});let Ce;ye&&!Ln(ye[1])?Ce={[ye[0]]:ye[1].data}:y.actionData&&(Object.keys(y.actionData).length===0?Ce=null:Ce=y.actionData),le(ot({navigation:At},Ce!==void 0?{actionData:Ce}:{},st.length>0?{fetchers:new Map(y.fetchers)}:{}),{flushSync:ge})}st.forEach(Ce=>{z.has(Ce.key)&&ar(Ce.key),Ce.controller&&z.set(Ce.key,Ce.controller)});let ni=()=>st.forEach(Ce=>ar(Ce.key));R&&R.signal.addEventListener("abort",ni);let{loaderResults:Dn,fetcherResults:qn}=await fe(y.matches,U,We,st,M);if(M.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",ni),st.forEach(Ce=>z.delete(Ce.key));let nn=M0([...Dn,...qn]);if(nn){if(nn.idx>=We.length){let Ce=st[nn.idx-We.length].key;q.add(Ce)}return await wn(M,nn.result,{replace:ce}),{shortCircuited:!0}}let{loaderData:Cr,errors:En}=k0(y,U,We,Dn,ye,st,qn,L);L.forEach((Ce,Mt)=>{Ce.subscribe(Ot=>{(Ot||Ce.done)&&L.delete(Mt)})}),d.v7_partialHydration&&ee&&y.errors&&Object.entries(y.errors).filter(Ce=>{let[Mt]=Ce;return!We.some(Ot=>Ot.route.id===Mt)}).forEach(Ce=>{let[Mt,Ot]=Ce;En=Object.assign(En||{},{[Mt]:Ot})});let ri=sa(),ii=oa(ae),Yi=ri||ii||st.length>0;return ot({loaderData:Cr,errors:En},Yi?{fetchers:new Map(y.fetchers)}:{})}function or(M,V,U,Q){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");z.has(M)&&ar(M);let ne=(Q&&Q.unstable_flushSync)===!0,ue=a||o,ce=gp(y.location,y.matches,u,d.v7_prependBasename,U,d.v7_relativeSplatPath,V,Q==null?void 0:Q.relative),ee=go(ue,ce,u);if(!ee){Ye(M,V,Nn(404,{pathname:ce}),{flushSync:ne});return}let{path:ge,submission:ye,error:At}=S0(d.v7_normalizeFormMethod,!0,ce,Q);if(At){Ye(M,V,At,{flushSync:ne});return}let tt=vp(ee,ge);if(A=(Q&&Q.preventScrollReset)===!0,ye&&Yn(ye.formMethod)){it(M,V,ge,tt,ee,ne,ye);return}G.set(M,{routeId:V,path:ge}),Ar(M,V,ge,tt,ee,ne,ye)}async function it(M,V,U,Q,ne,ue,ce){if(ze(),G.delete(M),!Q.route.action&&!Q.route.lazy){let _t=Nn(405,{method:ce.formMethod,pathname:U,routeId:V});Ye(M,V,_t,{flushSync:ue});return}let ee=y.fetchers.get(M);je(M,nk(ce,ee),{flushSync:ue});let ge=new AbortController,ye=Js(t.history,U,ge.signal,ce);z.set(M,ge);let At=oe,pe=(await yt("action",ye,[Q],ne))[0];if(ye.signal.aborted){z.get(M)===ge&&z.delete(M);return}if(d.v7_fetcherPersist&&Z.has(M)){if(ls(pe)||Ln(pe)){je(M,ci(void 0));return}}else{if(ls(pe))if(z.delete(M),ae>At){je(M,ci(void 0));return}else return q.add(M),je(M,xa(ce)),wn(ye,pe,{fetcherSubmission:ce});if(Ln(pe)){Ye(M,V,pe.error);return}}if(as(pe))throw Nn(400,{type:"defer-action"});let We=y.navigation.location||y.location,st=Js(t.history,We,ge.signal),ni=a||o,Dn=y.navigation.state!=="idle"?go(ni,y.navigation.location,u):y.matches;Ee(Dn,"Didn't find any matches after fetcher action");let qn=++oe;Te.set(M,qn);let nn=xa(ce,pe.data);y.fetchers.set(M,nn);let[Cr,En]=A0(t.history,y,Dn,ce,We,!1,d.unstable_skipActionErrorRevalidation,Ie,pt,Ne,Z,G,q,ni,u,[Q.route.id,pe]);En.filter(_t=>_t.key!==M).forEach(_t=>{let Rr=_t.key,si=y.fetchers.get(Rr),Pr=xa(void 0,si?si.data:void 0);y.fetchers.set(Rr,Pr),z.has(Rr)&&ar(Rr),_t.controller&&z.set(Rr,_t.controller)}),le({fetchers:new Map(y.fetchers)});let ri=()=>En.forEach(_t=>ar(_t.key));ge.signal.addEventListener("abort",ri);let{loaderResults:ii,fetcherResults:Yi}=await fe(y.matches,Dn,Cr,En,st);if(ge.signal.aborted)return;ge.signal.removeEventListener("abort",ri),Te.delete(M),z.delete(M),En.forEach(_t=>z.delete(_t.key));let Ce=M0([...ii,...Yi]);if(Ce){if(Ce.idx>=Cr.length){let _t=En[Ce.idx-Cr.length].key;q.add(_t)}return wn(st,Ce.result)}let{loaderData:Mt,errors:Ot}=k0(y,y.matches,Cr,ii,void 0,En,Yi,L);if(y.fetchers.has(M)){let _t=ci(pe.data);y.fetchers.set(M,_t)}oa(qn),y.navigation.state==="loading"&&qn>ae?(Ee(E,"Expected pending action"),R&&R.abort(),Be(y.navigation.location,{matches:Dn,loaderData:Mt,errors:Ot,fetchers:new Map(y.fetchers)})):(le({errors:Ot,loaderData:b0(y.loaderData,Mt,Dn,Ot),fetchers:new Map(y.fetchers)}),Ie=!1)}async function Ar(M,V,U,Q,ne,ue,ce){let ee=y.fetchers.get(M);je(M,xa(ce,ee?ee.data:void 0),{flushSync:ue});let ge=new AbortController,ye=Js(t.history,U,ge.signal);z.set(M,ge);let At=oe,pe=(await yt("loader",ye,[Q],ne))[0];if(as(pe)&&(pe=await dT(pe,ye.signal,!0)||pe),z.get(M)===ge&&z.delete(M),!ye.signal.aborted){if(Z.has(M)){je(M,ci(void 0));return}if(ls(pe))if(ae>At){je(M,ci(void 0));return}else{q.add(M),await wn(ye,pe);return}if(Ln(pe)){Ye(M,V,pe.error);return}Ee(!as(pe),"Unhandled fetcher deferred data"),je(M,ci(pe.data))}}async function wn(M,V,U){let{submission:Q,fetcherSubmission:ne,replace:ue}=U===void 0?{}:U;V.response.headers.has("X-Remix-Revalidate")&&(Ie=!0);let ce=V.response.headers.get("Location");Ee(ce,"Expected a Location header on the redirect Response"),ce=R0(ce,new URL(M.url),u);let ee=Il(y.location,ce,{_isRedirect:!0});if(n){let We=!1;if(V.response.headers.has("X-Remix-Reload-Document"))We=!0;else if(cg.test(ce)){const st=t.history.createURL(ce);We=st.origin!==e.location.origin||Gr(st.pathname,u)==null}if(We){ue?e.location.replace(ce):e.location.assign(ce);return}}R=null;let ge=ue===!0?Et.Replace:Et.Push,{formMethod:ye,formAction:At,formEncType:tt}=y.navigation;!Q&&!ne&&ye&&At&&tt&&(Q=L0(y.navigation));let pe=Q||ne;if(jP.has(V.response.status)&&pe&&Yn(pe.formMethod))await He(ge,ee,{submission:ot({},pe,{formAction:ce}),preventScrollReset:A});else{let We=Xh(ee,Q);await He(ge,ee,{overrideNavigation:We,fetcherSubmission:ne,preventScrollReset:A})}}async function yt(M,V,U,Q){try{let ne=await WP(c,M,V,U,Q,s,i);return await Promise.all(ne.map((ue,ce)=>{if(JP(ue)){let ee=ue.result;return{type:nt.redirect,response:QP(ee,V,U[ce].route.id,Q,u,d.v7_relativeSplatPath)}}return KP(ue)}))}catch(ne){return U.map(()=>({type:nt.error,error:ne}))}}async function fe(M,V,U,Q,ne){let[ue,...ce]=await Promise.all([U.length?yt("loader",ne,U,V):[],...Q.map(ee=>{if(ee.matches&&ee.match&&ee.controller){let ge=Js(t.history,ee.path,ee.controller.signal);return yt("loader",ge,[ee.match],ee.matches).then(ye=>ye[0])}else return Promise.resolve({type:nt.error,error:Nn(404,{pathname:ee.path})})})]);return await Promise.all([O0(M,U,ue,ue.map(()=>ne.signal),!1,y.loaderData),O0(M,Q.map(ee=>ee.match),ce,Q.map(ee=>ee.controller?ee.controller.signal:null),!0)]),{loaderResults:ue,fetcherResults:ce}}function ze(){Ie=!0,pt.push(...Ws()),G.forEach((M,V)=>{z.has(V)&&(Ne.push(V),ar(V))})}function je(M,V,U){U===void 0&&(U={}),y.fetchers.set(M,V),le({fetchers:new Map(y.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function Ye(M,V,U,Q){Q===void 0&&(Q={});let ne=Xa(y.matches,V);Qi(M),le({errors:{[ne.route.id]:U},fetchers:new Map(y.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function Ht(M){return d.v7_fetcherPersist&&(J.set(M,(J.get(M)||0)+1),Z.has(M)&&Z.delete(M)),y.fetchers.get(M)||FP}function Qi(M){let V=y.fetchers.get(M);z.has(M)&&!(V&&V.state==="loading"&&Te.has(M))&&ar(M),G.delete(M),Te.delete(M),q.delete(M),Z.delete(M),y.fetchers.delete(M)}function iu(M){if(d.v7_fetcherPersist){let V=(J.get(M)||0)-1;V<=0?(J.delete(M),Z.add(M)):J.set(M,V)}else Qi(M);le({fetchers:new Map(y.fetchers)})}function ar(M){let V=z.get(M);Ee(V,"Expected fetch controller: "+M),V.abort(),z.delete(M)}function ei(M){for(let V of M){let U=Ht(V),Q=ci(U.data);y.fetchers.set(V,Q)}}function sa(){let M=[],V=!1;for(let U of q){let Q=y.fetchers.get(U);Ee(Q,"Expected fetcher: "+U),Q.state==="loading"&&(q.delete(U),M.push(U),V=!0)}return ei(M),V}function oa(M){let V=[];for(let[U,Q]of Te)if(Q<M){let ne=y.fetchers.get(U);Ee(ne,"Expected fetcher: "+U),ne.state==="loading"&&(ar(U),Te.delete(U),V.push(U))}return ei(V),V.length>0}function aa(M,V){let U=y.blockers.get(M)||Aa;return he.get(M)!==V&&he.set(M,V),U}function su(M){y.blockers.delete(M),he.delete(M)}function Hs(M,V){let U=y.blockers.get(M)||Aa;Ee(U.state==="unblocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="blocked"||U.state==="blocked"&&V.state==="proceeding"||U.state==="blocked"&&V.state==="unblocked"||U.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+U.state+" -> "+V.state);let Q=new Map(y.blockers);Q.set(M,V),le({blockers:Q})}function qs(M){let{currentLocation:V,nextLocation:U,historyAction:Q}=M;if(he.size===0)return;he.size>1&&Es(!1,"A router only supports one blocker at a time");let ne=Array.from(he.entries()),[ue,ce]=ne[ne.length-1],ee=y.blockers.get(ue);if(!(ee&&ee.state==="proceeding")&&ce({currentLocation:V,nextLocation:U,historyAction:Q}))return ue}function Ws(M){let V=[];return L.forEach((U,Q)=>{(!M||M(Q))&&(U.cancel(),V.push(Q),L.delete(Q))}),V}function ou(M,V,U){if(T=M,x=V,w=U||null,!P&&y.navigation===Yh){P=!0;let Q=Gs(y.location,y.matches);Q!=null&&le({restoreScrollPosition:Q})}return()=>{T=null,x=null,w=null}}function ti(M,V){return w&&w(M,V.map(Q=>gP(Q,y.loaderData)))||M.key}function la(M,V){if(T&&x){let U=ti(M,V);T[U]=x()}}function Gs(M,V){if(T){let U=ti(M,V),Q=T[U];if(typeof Q=="number")return Q}return null}function xr(M){s={},a=pp(M,i,void 0,s)}return $={get basename(){return u},get future(){return d},get state(){return y},get routes(){return o},get window(){return e},initialize:Ve,subscribe:Ae,enableScrollRestoration:ou,navigate:mt,fetch:or,revalidate:xe,createHref:M=>t.history.createHref(M),encodeLocation:M=>t.history.encodeLocation(M),getFetcher:Ht,deleteFetcher:iu,dispose:Se,getBlocker:aa,deleteBlocker:su,_internalFetchControllers:z,_internalActiveDeferreds:L,_internalSetRoutes:xr},$}function zP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function gp(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=ag(i||".",og(u,s),Gr(t.pathname,n)||t.pathname,a==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!dg(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ur([n,d.pathname])),Ts(d)}function S0(t,e,n,r){if(!r||!zP(r))return{path:n};if(r.formMethod&&!ek(r.formMethod))return{path:n,error:Nn(405,{method:r.formMethod})};let i=()=>({path:n,error:Nn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=uT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Yn(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,w)=>{let[x,P]=w;return""+T+x+"="+P+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Yn(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}Ee(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=yp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=yp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=P0(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=P0(u)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Yn(d.formMethod))return{path:n,submission:d};let f=Jr(n);return e&&f.search&&dg(f.search)&&u.append("index",""),f.search="?"+u,{path:Ts(f),submission:d}}function BP(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function A0(t,e,n,r,i,s,o,a,u,c,d,f,p,T,w,x){let P=x?Ln(x[1])?x[1].error:x[1].data:void 0,_=t.createURL(e.location),v=t.createURL(i),C=x&&Ln(x[1])?x[0]:void 0,D=C?BP(n,C):n,j=x?x[1].statusCode:void 0,$=o&&j&&j>=400,y=D.filter((A,R)=>{let{route:k}=A;if(k.lazy)return!0;if(k.loader==null)return!1;if(s)return typeof k.loader!="function"||k.loader.hydrate?!0:e.loaderData[k.id]===void 0&&(!e.errors||e.errors[k.id]===void 0);if(HP(e.loaderData,e.matches[R],A)||u.some(te=>te===A.route.id))return!0;let b=e.matches[R],S=A;return x0(A,ot({currentUrl:_,currentParams:b.params,nextUrl:v,nextParams:S.params},r,{actionResult:P,unstable_actionStatus:j,defaultShouldRevalidate:$?!1:a||_.pathname+_.search===v.pathname+v.search||_.search!==v.search||lT(b,S)}))}),E=[];return f.forEach((A,R)=>{if(s||!n.some(Ie=>Ie.route.id===A.routeId)||d.has(R))return;let k=go(T,A.path,w);if(!k){E.push({key:R,routeId:A.routeId,path:A.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(R),S=vp(k,A.path),te=!1;p.has(R)?te=!1:c.includes(R)?te=!0:b&&b.state!=="idle"&&b.data===void 0?te=a:te=x0(S,ot({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:P,unstable_actionStatus:j,defaultShouldRevalidate:$?!1:a})),te&&E.push({key:R,routeId:A.routeId,path:A.path,matches:k,match:S,controller:new AbortController})}),[y,E]}function HP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function lT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function x0(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function C0(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Ee(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Es(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!pP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ot({},e(i),{lazy:void 0}))}function qP(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function WP(t,e,n,r,i,s,o,a){let u=r.reduce((f,p)=>f.add(p.route.id),new Set),c=new Set,d=await t({matches:i.map(f=>{let p=u.has(f.route.id);return ot({},f,{shouldLoad:p,resolve:w=>(c.add(f.route.id),p?GP(e,n,f,s,o,w,a):Promise.resolve({type:nt.data,result:void 0}))})}),request:n,params:i[0].params,context:a});return i.forEach(f=>Ee(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,p)=>u.has(i[p].route.id))}async function GP(t,e,n,r,i,s,o){let a,u,c=d=>{let f,p=new Promise((x,P)=>f=P);u=()=>f(),e.signal.addEventListener("abort",u);let T=x=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):d({request:e,params:n.params,context:o},...x!==void 0?[x]:[]),w;return s?w=s(x=>T(x)):w=(async()=>{try{return{type:"data",result:await T()}}catch(x){return{type:"error",result:x}}})(),Promise.race([w,p])};try{let d=n.route[t];if(n.route.lazy)if(d){let f,[p]=await Promise.all([c(d).catch(T=>{f=T}),C0(n.route,i,r)]);if(f!==void 0)throw f;a=p}else if(await C0(n.route,i,r),d=n.route[t],d)a=await c(d);else if(t==="action"){let f=new URL(e.url),p=f.pathname+f.search;throw Nn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:nt.data,result:void 0};else if(d)a=await c(d);else{let f=new URL(e.url),p=f.pathname+f.search;throw Nn(404,{pathname:p})}Ee(a.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:nt.error,result:d}}finally{u&&e.signal.removeEventListener("abort",u)}return a}async function KP(t){let{result:e,type:n,status:r}=t;if(cT(e)){let o;try{let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(a){return{type:nt.error,error:a}}return n===nt.error?{type:nt.error,error:new lg(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:nt.data,data:o,statusCode:e.status,headers:e.headers}}if(n===nt.error)return{type:nt.error,error:e,statusCode:ug(e)?e.status:r};if(ZP(e)){var i,s;return{type:nt.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:nt.data,data:e,statusCode:r}}function QP(t,e,n,r,i,s){let o=t.headers.get("Location");if(Ee(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!cg.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=gp(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function R0(t,e,n){if(cg.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Gr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Js(t,e,n,r){let i=t.createURL(uT(e)).toString(),s={signal:n};if(r&&Yn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=yp(r.formData):s.body=r.formData}return new Request(i,s)}function yp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function P0(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function YP(t,e,n,r,i,s){let o={},a=null,u,c=!1,d={},f=r&&Ln(r[1])?r[1].error:void 0;return n.forEach((p,T)=>{let w=e[T].route.id;if(Ee(!ls(p),"Cannot handle redirect results in processLoaderData"),Ln(p)){let x=p.error;f!==void 0&&(x=f,f=void 0),a=a||{};{let P=Xa(t,w);a[P.route.id]==null&&(a[P.route.id]=x)}o[w]=void 0,c||(c=!0,u=ug(p.error)?p.error.status:500),p.headers&&(d[w]=p.headers)}else as(p)?(i.set(w,p.deferredData),o[w]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[w]=p.headers)):(o[w]=p.data,p.statusCode&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(d[w]=p.headers))}),f!==void 0&&r&&(a={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:a,statusCode:u||200,loaderHeaders:d}}function k0(t,e,n,r,i,s,o,a){let{loaderData:u,errors:c}=YP(e,n,r,i,a);for(let d=0;d<s.length;d++){let{key:f,match:p,controller:T}=s[d];Ee(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let w=o[d];if(!(T&&T.signal.aborted))if(Ln(w)){let x=Xa(t.matches,p==null?void 0:p.route.id);c&&c[x.route.id]||(c=ot({},c,{[x.route.id]:w.error})),t.fetchers.delete(f)}else if(ls(w))Ee(!1,"Unhandled fetcher revalidation redirect");else if(as(w))Ee(!1,"Unhandled fetcher deferred data");else{let x=ci(w.data);t.fetchers.set(f,x)}}return{loaderData:u,errors:c}}function b0(t,e,n,r){let i=ot({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function D0(t){return t?Ln(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Xa(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function N0(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Nn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new lg(t||500,o,new Error(a),!0)}function M0(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(ls(n))return{result:n,idx:e}}}function uT(t){let e=typeof t=="string"?Jr(t):t;return Ts(ot({},e,{hash:""}))}function XP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function JP(t){return cT(t.result)&&VP.has(t.result.status)}function as(t){return t.type===nt.deferred}function Ln(t){return t.type===nt.error}function ls(t){return(t&&t.type)===nt.redirect}function ZP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function cT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ek(t){return LP.has(t.toLowerCase())}function Yn(t){return MP.has(t.toLowerCase())}async function O0(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o];if(!u)continue;let c=t.find(f=>f.route.id===u.route.id),d=c!=null&&!lT(c,u)&&(s&&s[u.route.id])!==void 0;if(as(a)&&(i||d)){let f=r[o];Ee(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await dT(a,f,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function dT(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:nt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:nt.error,error:i}}return{type:nt.data,data:t.deferredData.data}}}function dg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function vp(t,e){let n=typeof e=="string"?Jr(e).search:e.search;if(t[t.length-1].route.index&&dg(n||""))return t[t.length-1];let r=sT(t);return r[r.length-1]}function L0(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Xh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function tk(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function xa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function nk(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ci(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function rk(t,e){try{let n=t.sessionStorage.getItem(aT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function ik(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(aT,JSON.stringify(n))}catch(r){Es(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fc.apply(this,arguments)}const Fl=N.createContext(null),hg=N.createContext(null),Hi=N.createContext(null),fg=N.createContext(null),Zr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),hT=N.createContext(null);function sk(t,e){let{relative:n}=e===void 0?{}:e;Ul()||Ee(!1);let{basename:r,navigator:i}=N.useContext(Hi),{hash:s,pathname:o,search:a}=Bd(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ur([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ul(){return N.useContext(fg)!=null}function Ms(){return Ul()||Ee(!1),N.useContext(fg).location}function fT(t){N.useContext(Hi).static||N.useLayoutEffect(t)}function qi(){let{isDataRoute:t}=N.useContext(Zr);return t?_k():ok()}function ok(){Ul()||Ee(!1);let t=N.useContext(Fl),{basename:e,future:n,navigator:r}=N.useContext(Hi),{matches:i}=N.useContext(Zr),{pathname:s}=Ms(),o=JSON.stringify(og(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return fT(()=>{a.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=ag(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ur([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const ak=N.createContext(null);function lk(t){let e=N.useContext(Zr).outlet;return e&&N.createElement(ak.Provider,{value:t},e)}function pg(){let{matches:t}=N.useContext(Zr),e=t[t.length-1];return e?e.params:{}}function Bd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Hi),{matches:i}=N.useContext(Zr),{pathname:s}=Ms(),o=JSON.stringify(og(i,r.v7_relativeSplatPath));return N.useMemo(()=>ag(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function uk(t,e,n,r){Ul()||Ee(!1);let{navigator:i}=N.useContext(Hi),{matches:s}=N.useContext(Zr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ms(),d;d=c;let f=d.pathname||"/",p=f;if(u!=="/"){let x=u.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=go(t,{pathname:p});return pk(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Ur([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Ur([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r)}function ck(){let t=vk(),e=ug(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const dk=N.createElement(ck,null);class hk extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Zr.Provider,{value:this.props.routeContext},N.createElement(hT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fk(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Fl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Zr.Provider,{value:e},r)}function pk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:T}=n,w=f.route.loader&&p[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||w){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let T,w=!1,x=null,P=null;n&&(T=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||dk,u&&(c<0&&p===0?(w=!0,P=null):c===p&&(w=!0,P=f.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,p+1)),v=()=>{let C;return T?C=x:w?C=P:f.route.Component?C=N.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=d,N.createElement(fk,{match:f,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?N.createElement(hk,{location:n.location,revalidation:n.revalidation,component:x,error:T,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var pT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pT||{}),Uc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uc||{});function mk(t){let e=N.useContext(Fl);return e||Ee(!1),e}function gk(t){let e=N.useContext(hg);return e||Ee(!1),e}function yk(t){let e=N.useContext(Zr);return e||Ee(!1),e}function mT(t){let e=yk(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function vk(){var t;let e=N.useContext(hT),n=gk(Uc.UseRouteError),r=mT(Uc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _k(){let{router:t}=mk(pT.UseNavigateStable),e=mT(Uc.UseNavigateStable),n=N.useRef(!1);return fT(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fc({fromRouteId:e},s)))},[t,e])}function wk(t){return lk(t.context)}function cr(t){Ee(!1)}function Ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:s,static:o=!1,future:a}=t;Ul()&&Ee(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:Fc({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Jr(r));let{pathname:d="/",search:f="",hash:p="",state:T=null,key:w="default"}=r,x=N.useMemo(()=>{let P=Gr(d,u);return P==null?null:{location:{pathname:P,search:f,hash:p,state:T,key:w},navigationType:i}},[u,d,f,p,T,w,i]);return x==null?null:N.createElement(Hi.Provider,{value:c},N.createElement(fg.Provider,{children:n,value:x}))}new Promise(()=>{});function _p(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,_p(r.props.children,s));return}r.type!==cr&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_p(r.props.children,s)),n.push(o)}),n}function Tk(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:N.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:N.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:N.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vo.apply(this,arguments)}function gT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ik(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sk(t,e){return t.button===0&&(!e||e==="_self")&&!Ik(t)}const Ak=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ck="6";try{window.__reactRouterVersion=Ck}catch{}function Rk(t,e){return $P({basename:void 0,future:Vo({},void 0,{v7_prependBasename:!0}),history:dP({window:void 0}),hydrationData:Pk(),routes:t,mapRouteProperties:Tk,unstable_dataStrategy:void 0,window:void 0}).initialize()}function Pk(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Vo({},e,{errors:kk(e.errors)})),e}function kk(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new lg(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const yT=N.createContext({isTransitioning:!1}),bk=N.createContext(new Map),Dk="startTransition",V0=KA[Dk],Nk="flushSync",j0=oR[Nk];function Mk(t){V0?V0(t):t()}function Ca(t){j0?j0(t):t()}let Ok=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function Lk(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=N.useState(n.state),[o,a]=N.useState(),[u,c]=N.useState({isTransitioning:!1}),[d,f]=N.useState(),[p,T]=N.useState(),[w,x]=N.useState(),P=N.useRef(new Map),{v7_startTransition:_}=r||{},v=N.useCallback(y=>{_?Mk(y):y()},[_]),C=N.useCallback((y,E)=>{let{deletedFetchers:A,unstable_flushSync:R,unstable_viewTransitionOpts:k}=E;A.forEach(S=>P.current.delete(S)),y.fetchers.forEach((S,te)=>{S.data!==void 0&&P.current.set(te,S.data)});let b=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!k||b){R?Ca(()=>s(y)):v(()=>s(y));return}if(R){Ca(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:k.currentLocation,nextLocation:k.nextLocation})});let S=n.window.document.startViewTransition(()=>{Ca(()=>s(y))});S.finished.finally(()=>{Ca(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})})}),Ca(()=>T(S));return}p?(d&&d.resolve(),p.skipTransition(),x({state:y,currentLocation:k.currentLocation,nextLocation:k.nextLocation})):(a(y),c({isTransitioning:!0,flushSync:!1,currentLocation:k.currentLocation,nextLocation:k.nextLocation}))},[n.window,p,d,P,v]);N.useLayoutEffect(()=>n.subscribe(C),[n,C]),N.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new Ok)},[u]),N.useEffect(()=>{if(d&&o&&n.window){let y=o,E=d.promise,A=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await E});A.finished.finally(()=>{f(void 0),T(void 0),a(void 0),c({isTransitioning:!1})}),T(A)}},[v,o,d,n.window]),N.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,p,i.location,o]),N.useEffect(()=>{!u.isTransitioning&&w&&(a(w.state),c({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),x(void 0))},[u.isTransitioning,w]),N.useEffect(()=>{},[]);let D=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,E,A)=>n.navigate(y,{state:E,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(y,E,A)=>n.navigate(y,{replace:!0,state:E,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),j=n.basename||"/",$=N.useMemo(()=>({router:n,navigator:D,static:!1,basename:j}),[n,D,j]);return N.createElement(N.Fragment,null,N.createElement(Fl.Provider,{value:$},N.createElement(hg.Provider,{value:i},N.createElement(bk.Provider,{value:P.current},N.createElement(yT.Provider,{value:u},N.createElement(Ek,{basename:j,location:i.location,navigationType:i.historyAction,navigator:D,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?N.createElement(Vk,{routes:n.routes,future:n.future,state:i}):e))))),null)}function Vk(t){let{routes:e,future:n,state:r}=t;return uk(e,void 0,r,n)}const jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xo=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,unstable_viewTransition:f}=e,p=gT(e,Ak),{basename:T}=N.useContext(Hi),w,x=!1;if(typeof c=="string"&&Fk.test(c)&&(w=c,jk))try{let C=new URL(window.location.href),D=c.startsWith("//")?new URL(C.protocol+c):new URL(c),j=Gr(D.pathname,T);D.origin===C.origin&&j!=null?c=j+D.search+D.hash:x=!0}catch{}let P=sk(c,{relative:i}),_=$k(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:f});function v(C){r&&r(C),C.defaultPrevented||_(C)}return N.createElement("a",Vo({},p,{href:w||P,onClick:x||s?r:v,ref:n,target:u}))}),Jh=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,unstable_viewTransition:c,children:d}=e,f=gT(e,xk),p=Bd(u,{relative:f.relative}),T=Ms(),w=N.useContext(hg),{navigator:x,basename:P}=N.useContext(Hi),_=w!=null&&zk(p)&&c===!0,v=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,C=T.pathname,D=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(C=C.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&P&&(D=Gr(D,P)||D);const j=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let $=C===v||!o&&C.startsWith(v)&&C.charAt(j)==="/",y=D!=null&&(D===v||!o&&D.startsWith(v)&&D.charAt(v.length)==="/"),E={isActive:$,isPending:y,isTransitioning:_},A=$?r:void 0,R;typeof s=="function"?R=s(E):R=[s,$?"active":null,y?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(E):a;return N.createElement(Xo,Vo({},f,{"aria-current":A,className:R,ref:n,style:k,to:u,unstable_viewTransition:c}),typeof d=="function"?d(E):d)});var wp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wp||(wp={}));var F0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F0||(F0={}));function Uk(t){let e=N.useContext(Fl);return e||Ee(!1),e}function $k(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=qi(),c=Ms(),d=Bd(t,{relative:o});return N.useCallback(f=>{if(Sk(f,n)){f.preventDefault();let p=r!==void 0?r:Ts(c)===Ts(d);u(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,d,r,i,n,t,s,o,a])}function zk(t,e){e===void 0&&(e={});let n=N.useContext(yT);n==null&&Ee(!1);let{basename:r}=Uk(wp.useViewTransitionState),i=Bd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Gr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Gr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mp(i.pathname,o)!=null||mp(i.pathname,s)!=null}var U0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,T=c&63;u||(T=64,o||(p=64)),r.push(n[d],n[f],n[p],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Hk;const p=s<<2|a>>4;if(r.push(p),c!==64){const T=a<<4&240|c>>2;if(r.push(T),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qk=function(t){const e=vT(t);return _T.encodeByteArray(e,!0)},$c=function(t){return qk(t).replace(/\./g,"")},wT=function(t){try{return _T.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gk=()=>Wk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof U0>"u")return;const t=U0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wT(t[1]);return e&&JSON.parse(e)},Hd=()=>{try{return Gk()||Kk()||Qk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ET=t=>{var e,n;return(n=(e=Hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yk=t=>{const e=ET(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TT=()=>{var t;return(t=Hd())===null||t===void 0?void 0:t.config},IT=t=>{var e;return(e=Hd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Jk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function eb(){var t;const e=(t=Hd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rb(){return!eb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gg(){try{return typeof indexedDB=="object"}catch{return!1}}function yg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ST(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ib,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function sb(t,e){return t.replace(ob,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ob=/\{\$([^}]+)}/g;function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($0(s)&&$0(o)){if(!Is(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ma(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lb(t,e){const n=new ub(t,e);return n.subscribe.bind(n)}class ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zh),i.error===void 0&&(i.error=Zh),i.complete===void 0&&(i.complete=Zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=1e3,hb=2,fb=4*60*60*1e3,pb=.5;function z0(t,e=db,n=hb){const r=e*Math.pow(n,t),i=Math.round(pb*r*(Math.random()-.5)*2);return Math.min(fb,r+i)}/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yb(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gb(t){return t===ns?void 0:t}function yb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const _b={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},wb=ke.INFO,Eb={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},Tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Eb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=wb,this._logHandler=Tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Ib=(t,e)=>e.some(n=>t instanceof n);let B0,H0;function Sb(){return B0||(B0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ab(){return H0||(H0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AT=new WeakMap,Ep=new WeakMap,xT=new WeakMap,ef=new WeakMap,vg=new WeakMap;function xb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&AT.set(n,t)}).catch(()=>{}),vg.set(e,t),e}function Cb(t){if(Ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ep.set(t,e)}let Tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rb(t){Tp=t(Tp)}function Pb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return xT.set(r,e.sort?e.sort():[e]),bi(r)}:Ab().includes(t)?function(...e){return t.apply(tf(this),e),bi(AT.get(this))}:function(...e){return bi(t.apply(tf(this),e))}}function kb(t){return typeof t=="function"?Pb(t):(t instanceof IDBTransaction&&Cb(t),Ib(t,Sb())?new Proxy(t,Tp):t)}function bi(t){if(t instanceof IDBRequest)return xb(t);if(ef.has(t))return ef.get(t);const e=kb(t);return e!==t&&(ef.set(t,e),vg.set(e,t)),e}const tf=t=>vg.get(t);function CT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=bi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(bi(o.result),u.oldVersion,u.newVersion,bi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bb=["get","getKey","getAll","getAllKeys","count"],Db=["put","add","delete","clear"],nf=new Map;function q0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Db.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return nf.set(e,s),s}Rb(t=>({...t,get:(e,n,r)=>q0(e,n)||t.get(e,n,r),has:(e,n)=>!!q0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ip="@firebase/app",W0="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new qd("@firebase/app"),Ob="@firebase/app-compat",Lb="@firebase/analytics-compat",Vb="@firebase/analytics",jb="@firebase/app-check-compat",Fb="@firebase/app-check",Ub="@firebase/auth",$b="@firebase/auth-compat",zb="@firebase/database",Bb="@firebase/database-compat",Hb="@firebase/functions",qb="@firebase/functions-compat",Wb="@firebase/installations",Gb="@firebase/installations-compat",Kb="@firebase/messaging",Qb="@firebase/messaging-compat",Yb="@firebase/performance",Xb="@firebase/performance-compat",Jb="@firebase/remote-config",Zb="@firebase/remote-config-compat",eD="@firebase/storage",tD="@firebase/storage-compat",nD="@firebase/firestore",rD="@firebase/vertexai-preview",iD="@firebase/firestore-compat",sD="firebase",oD="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="[DEFAULT]",aD={[Ip]:"fire-core",[Ob]:"fire-core-compat",[Vb]:"fire-analytics",[Lb]:"fire-analytics-compat",[Fb]:"fire-app-check",[jb]:"fire-app-check-compat",[Ub]:"fire-auth",[$b]:"fire-auth-compat",[zb]:"fire-rtdb",[Bb]:"fire-rtdb-compat",[Hb]:"fire-fn",[qb]:"fire-fn-compat",[Wb]:"fire-iid",[Gb]:"fire-iid-compat",[Kb]:"fire-fcm",[Qb]:"fire-fcm-compat",[Yb]:"fire-perf",[Xb]:"fire-perf-compat",[Jb]:"fire-rc",[Zb]:"fire-rc-compat",[eD]:"fire-gcs",[tD]:"fire-gcs-compat",[nD]:"fire-fst",[iD]:"fire-fst-compat",[rD]:"fire-vertex","fire-js":"fire-js",[sD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,lD=new Map,Ap=new Map;function G0(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Ap.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Ap.set(e,t);for(const n of zc.values())G0(n,t);for(const n of lD.values())G0(n,t);return!0}function Ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Di=new Os("app","Firebase",uD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=oD;function RT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Di.create("bad-app-name",{appName:String(i)});if(n||(n=TT()),!n)throw Di.create("no-options");const s=zc.get(i);if(s){if(Is(n,s.options)&&Is(r,s.config))return s;throw Di.create("duplicate-app",{appName:i})}const o=new vb(i);for(const u of Ap.values())o.addComponent(u);const a=new cD(n,r,o);return zc.set(i,a),a}function _g(t=Sp){const e=zc.get(t);if(!e&&t===Sp&&TT())return RT();if(!e)throw Di.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let i=(r=aD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}Tr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dD="firebase-heartbeat-database",hD=1,Sl="firebase-heartbeat-store";let rf=null;function PT(){return rf||(rf=CT(dD,hD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Di.create("idb-open",{originalErrorMessage:t.message})})),rf}async function fD(t){try{const n=(await PT()).transaction(Sl),r=await n.objectStore(Sl).get(kT(t));return await n.done,r}catch(e){if(e instanceof sr)Ss.warn(e.message);else{const n=Di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function K0(t,e){try{const r=(await PT()).transaction(Sl,"readwrite");await r.objectStore(Sl).put(e,kT(t)),await r.done}catch(n){if(n instanceof sr)Ss.warn(n.message);else{const r=Di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(r.message)}}}function kT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pD=1024,mD=30*24*60*60*1e3;class gD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Q0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Q0(),{heartbeatsToSend:r,unsentEntries:i}=yD(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Q0(){return new Date().toISOString().substring(0,10)}function yD(t,e=pD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Y0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Y0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gg()?yg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return K0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return K0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Y0(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){Tr(new tr("platform-logger",e=>new Nb(e),"PRIVATE")),Tr(new tr("heartbeat",e=>new gD(e),"PRIVATE")),Fn(Ip,W0,t),Fn(Ip,W0,"esm2017"),Fn("fire-js","")}_D("");function wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wD=bT,DT=new Os("auth","Firebase",bT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new qd("@firebase/auth");function ED(t,...e){Bc.logLevel<=ke.WARN&&Bc.warn(`Auth (${Jo}): ${t}`,...e)}function tc(t,...e){Bc.logLevel<=ke.ERROR&&Bc.error(`Auth (${Jo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,...e){throw Eg(t,...e)}function vr(t,...e){return Eg(t,...e)}function NT(t,e,n){const r=Object.assign(Object.assign({},wD()),{[e]:n});return new Os("auth","Firebase",r).create(e,{appName:t.name})}function $r(t){return NT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DT.create(t,...e)}function me(t,e,...n){if(!t)throw Eg(e,...n)}function Lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tc(e),new Error(e)}function Kr(t,e){t||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TD(){return X0()==="http:"||X0()==="https:"}function X0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TD()||mg()||"connection"in navigator)?navigator.onLine:!0}function SD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kr(n>e,"Short delay should be less than long delay!"),this.isMobile=Zk()||tb()}get(){return ID()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){Kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new zl(3e4,6e4);function Wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,r,i={}){return OT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$l(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),MT.fetch()(LT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function OT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AD),e);try{const i=new RD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Lu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw NT(t,d,c);nr(t,d)}}catch(i){if(i instanceof sr)throw i;nr(t,"network-request-failed",{message:String(i)})}}async function Bl(t,e,n,r,i={}){const s=await Gi(t,e,n,r,i);return"mfaPendingCredential"in s&&nr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function LT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tg(t.config,i):`${t.config.apiScheme}://${i}`}function CD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vr(this.auth,"network-request-failed")),xD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vr(t,e,r);return i.customData._tokenResponse=n,i}function J0(t){return t!==void 0&&t.enterprise!==void 0}class PD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function kD(t,e){return Gi(t,"GET","/v2/recaptchaConfig",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function VT(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DD(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),i=Ig(r);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ja(sf(i.auth_time)),issuedAtTime:Ja(sf(i.iat)),expirationTime:Ja(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function Ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=wT(n);return i?JSON.parse(i):(tc("Failed to decode base64 JWT payload"),null)}catch(i){return tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Z0(t){const e=Ig(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&ND(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ND({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Al(t,VT(n,{idToken:r}));me(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jT(s.providerUserInfo):[],a=LD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function OD(t){const e=Dt(t);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jT(t){return t.map(e=>{var{providerId:n}=e,r=wg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(t,e){const n=await OT(t,{},async()=>{const r=$l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=LT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",MT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jD(t,e){return Gi(t,"POST","/v2/accounts:revokeToken",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Z0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ao;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(me(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Al(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DD(this,e)}reload(){return OD(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject($r(this.auth));const e=await this.getIdToken();return await Al(this,bD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:D,isAnonymous:j,providerData:$,stsTokenManager:y}=n;me(C&&y,e,"internal-error");const E=Ao.fromJSON(this.name,y);me(typeof C=="string",e,"internal-error"),ui(f,e.name),ui(p,e.name),me(typeof D=="boolean",e,"internal-error"),me(typeof j=="boolean",e,"internal-error"),ui(T,e.name),ui(w,e.name),ui(x,e.name),ui(P,e.name),ui(_,e.name),ui(v,e.name);const A=new Vr({uid:C,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:j,photoURL:w,phoneNumber:T,tenantId:x,stsTokenManager:E,createdAt:_,lastLoginAt:v});return $&&Array.isArray($)&&(A.providerData=$.map(R=>Object.assign({},R))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ao;i.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];me(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ao;a.updateFromIdToken(r);const u=new Vr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function jr(t){Kr(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(Kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FT.type="NONE";const t_=FT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,s),this.fullPersistenceKey=nc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(jr(t_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jr(t_);const o=nc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Vr._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xo(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HT(e))return"Blackberry";if(qT(e))return"Webos";if(Sg(e))return"Safari";if((e.includes("chrome/")||$T(e))&&!e.includes("edge/"))return"Chrome";if(BT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UT(t=Bt()){return/firefox\//i.test(t)}function Sg(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $T(t=Bt()){return/crios\//i.test(t)}function zT(t=Bt()){return/iemobile/i.test(t)}function BT(t=Bt()){return/android/i.test(t)}function HT(t=Bt()){return/blackberry/i.test(t)}function qT(t=Bt()){return/webos/i.test(t)}function Wd(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function FD(t=Bt()){var e;return Wd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UD(){return nb()&&document.documentMode===10}function WT(t=Bt()){return Wd(t)||BT(t)||qT(t)||HT(t)||/windows phone/i.test(t)||zT(t)}function $D(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e=[]){let n;switch(t){case"Browser":n=n_(Bt());break;case"Worker":n=`${n_(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jo}/${r}`}/**
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
 */class zD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BD(t,e={}){return Gi(t,"GET","/v2/passwordPolicy",Wi(t,e))}/**
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
 */const HD=6;class qD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r_(this),this.idTokenSubscription=new r_(this),this.beforeStateQueue=new zD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await VT(this,{idToken:e}),r=await Vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject($r(this));const n=e?Dt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject($r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject($r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BD(this),n=new qD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jr(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ED(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return Dt(t)}class r_{constructor(e){this.auth=e,this.observer=null,this.addObserver=lb(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GD(t){Gd=t}function KT(t){return Gd.loadJS(t)}function KD(){return Gd.recaptchaEnterpriseScript}function QD(){return Gd.gapiScript}function YD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const XD="recaptcha-enterprise",JD="NO_RECAPTCHA";class ZD{constructor(e){this.type=XD,this.auth=Vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{kD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new PD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;J0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(JD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&J0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=KD();u.length!==0&&(u+=a),KT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function i_(t,e,n,r=!1){const i=new ZD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await i_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t,e){const n=Ls(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Is(s,e??{}))return i;nr(i,"already-initialized")}return n.initialize({options:e})}function t2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n2(t,e,n){const r=Vs(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=QT(e),{host:o,port:a}=r2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i2()}function QT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r2(t){const e=QT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s_(o)}}}function s_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,n){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function s2(t,e){return Gi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t,e){return Bl(t,"POST","/v1/accounts:signInWithPassword",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Wi(t,e))}async function l2(t,e){return Bl(t,"POST","/v1/accounts:signInWithEmailLink",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rp(e,n,"signInWithPassword",o2);case"emailLink":return a2(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rp(e,r,"signUpPassword",s2);case"emailLink":return l2(e,{idToken:n,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e){return Bl(t,"POST","/v1/accounts:signInWithIdp",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="http://localhost";class As extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new As(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Co(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Co(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Co(e,n)}buildRequest(){const e={requestUri:u2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$l(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d2(t){const e=Ma(Oa(t)).link,n=e?Ma(Oa(e)).deep_link_id:null,r=Ma(Oa(t)).deep_link_id;return(r?Ma(Oa(r)).link:null)||r||n||e||t}class xg{constructor(e){var n,r,i,s,o,a;const u=Ma(Oa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=c2((i=u.mode)!==null&&i!==void 0?i:null);me(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=d2(e);try{return new xg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,n){return xl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xg.parseLink(n);return me(r,"argument-error"),xl._fromEmailAndCode(e,r.code,r.tenantId)}}Zo.PROVIDER_ID="password";Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends YT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Hl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return As._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gi.credential(n,r)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Hl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Hl{constructor(){super("twitter.com")}static credential(e,n){return As._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vi.credential(n,r)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(t,e){return Bl(t,"POST","/v1/accounts:signUp",Wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vr._fromIdTokenResponse(e,r,i),o=o_(r);return new xs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o_(r);return new xs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function XT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function f2(t,e,n=!1){const r=await Al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e,n=!1){const{auth:r}=t;if(mr(r.app))return Promise.reject($r(r));const i="reauthenticate";try{const s=await Al(t,XT(r,i,e,t),n);me(s.idToken,r,"internal-error");const o=Ig(s.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),xs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e,n=!1){if(mr(t.app))return Promise.reject($r(t));const r="signIn",i=await XT(t,r,e),s=await xs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function m2(t,e){return JT(Vs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t){const e=Vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g2(t,e,n){if(mr(t.app))return Promise.reject($r(t));const r=Vs(t),o=await Rp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ZT(t),u}),a=await xs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function y2(t,e,n){return mr(t.app)?Promise.reject($r(t)):m2(Dt(t),Zo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZT(t),r})}function v2(t,e,n,r){return Dt(t).onIdTokenChanged(e,n,r)}function _2(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}const Wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(){const t=Bt();return Sg(t)||Wd(t)}const E2=1e3,T2=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=w2()&&$D(),this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,T2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const I2=tI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nI.type="SESSION";const rI=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await S2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Cg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return window}function x2(t){_r().location.href=t}/**
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
 */function iI(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function C2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function P2(){return iI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="firebaseLocalStorageDb",k2=1,Gc="firebaseLocalStorage",oI="fbase_key";class ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qd(t,e){return t.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function b2(){const t=indexedDB.deleteDatabase(sI);return new ql(t).toPromise()}function Pp(){const t=indexedDB.open(sI,k2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gc,{keyPath:oI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gc)?e(r):(r.close(),await b2(),e(await Pp()))})})}async function a_(t,e,n){const r=Qd(t,!0).put({[oI]:e,value:n});return new ql(r).toPromise()}async function D2(t,e){const n=Qd(t,!1).get(e),r=await new ql(n).toPromise();return r===void 0?null:r.value}function l_(t,e){const n=Qd(t,!0).delete(e);return new ql(n).toPromise()}const N2=800,M2=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kd._getInstance(P2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C2(),!this.activeServiceWorker)return;this.sender=new A2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pp();return await a_(e,Wc,"1"),await l_(e,Wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>D2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qd(i,!1).getAll();return new ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const O2=aI;new zl(3e4,6e4);/**
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
 */function L2(t,e){return e?jr(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function V2(t){return JT(t.auth,new Rg(t),t.bypassAuthState)}function j2(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),p2(n,new Rg(t),t.bypassAuthState)}async function F2(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),f2(n,new Rg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V2;case"linkViaPopup":case"linkViaRedirect":return F2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:nr(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new zl(2e3,1e4);class yo extends lI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U2.get())};e()}}yo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="pendingRedirect",rc=new Map;class z2 extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await B2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B2(t,e){const n=W2(e),r=q2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function H2(t,e){rc.set(t._key(),e)}function q2(t){return jr(t._redirectPersistence)}function W2(t){return nc($2,t.config.apiKey,t.name)}async function G2(t,e,n=!1){if(mr(t.app))return Promise.reject($r(t));const r=Vs(t),i=L2(r,e),o=await new z2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=10*60*1e3;class Q2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K2&&this.cachedEventUids.clear(),this.cachedEventUids.has(u_(e))}saveEventToCache(e){this.cachedEventUids.add(u_(e)),this.lastProcessedEventTime=Date.now()}}function u_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z2=/^https?/;async function eN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X2(t);for(const n of e)try{if(tN(n))return}catch{}nr(t,"unauthorized-domain")}function tN(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Z2.test(n))return!1;if(J2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const nN=new zl(3e4,6e4);function c_(){const t=_r().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rN(t){return new Promise((e,n)=>{var r,i,s;function o(){c_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c_(),n(vr(t,"network-request-failed"))},timeout:nN.get()})}if(!((i=(r=_r().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_r().gapi)===null||s===void 0)&&s.load)o();else{const a=YD("iframefcb");return _r()[a]=()=>{gapi.load?o():n(vr(t,"network-request-failed"))},KT(`${QD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ic=null,e})}let ic=null;function iN(t){return ic=ic||rN(t),ic}/**
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
 */const sN=new zl(5e3,15e3),oN="__/auth/iframe",aN="emulator/auth/iframe",lN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cN(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tg(e,aN):`https://${t.config.authDomain}/${oN}`,r={apiKey:e.apiKey,appName:t.name,v:Jo},i=uN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$l(r).slice(1)}`}async function dN(t){const e=await iN(t),n=_r().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:cN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vr(t,"network-request-failed"),a=_r().setTimeout(()=>{s(o)},sN.get());function u(){_r().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const hN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fN=500,pN=600,mN="_blank",gN="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yN(t,e,n,r=fN,i=pN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},hN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Bt().toLowerCase();n&&(a=$T(c)?mN:n),UT(c)&&(e=e||gN,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[T,w])=>`${p}${T}=${w},`,"");if(FD(c)&&a!=="_self")return vN(e||"",a),new d_(null);const f=window.open(e||"",a,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new d_(f)}function vN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _N="__/auth/handler",wN="emulator/auth/handler",EN=encodeURIComponent("fac");async function h_(t,e,n,r,i,s){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jo,eventId:i};if(e instanceof YT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ab(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Hl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${EN}=${encodeURIComponent(u)}`:"";return`${TN(t)}?${$l(a).slice(1)}${c}`}function TN({config:t}){return t.emulator?Tg(t,wN):`https://${t.authDomain}/${_N}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="webStorageSupport";class IN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=G2,this._overrideRedirectResult=H2}async _openPopup(e,n,r,i){var s;Kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await h_(e,n,r,xp(),i);return yN(e,o,Cg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await h_(e,n,r,xp(),i);return x2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dN(e),r=new Q2(e);return n.register("authEvent",i=>(me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[of];o!==void 0&&n(!!o),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||Sg()||Wd()}}const SN=IN;var f_="@firebase/auth",p_="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CN(t){Tr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GT(t)},c=new WD(r,i,s,u);return t2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new tr("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(r=>new AN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(f_,p_,xN(t)),Fn(f_,p_,"esm2017")}/**
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
 */const RN=5*60,PN=IT("authIdTokenMaxAge")||RN;let m_=null;const kN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PN)return;const i=n==null?void 0:n.token;m_!==i&&(m_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wl(t=_g()){const e=Ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e2(t,{popupRedirectResolver:SN,persistence:[O2,I2,rI]}),r=IT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=kN(s.toString());_2(n,o,()=>o(n.currentUser)),v2(n,a=>o(a))}}const i=ET("auth");return i&&n2(n,`http://${i}`),n}function bN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CN("Browser");const g_=H(({className:t,children:e,to:n})=>{const i=Ms().pathname===n;return g.jsx(Xo,{to:n,className:t,style:{"--link-background-color":i?"var(--blue900)":"white","--link-color":i?"white":"var(--blue900)"},children:e})})`
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
`,cI=H(({className:t})=>g.jsxs("div",{className:t,children:[g.jsx(g_,{to:"/sign_in",children:"Sign In"}),g.jsx(g_,{to:"/sign_up",children:"Sign Up"})]}))`
  display: flex;
`,y_=H(({Icon:t,className:e,...n})=>g.jsxs("div",{className:e,children:[g.jsx("input",{...n}),g.jsx(t,{})]}))`
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
`,DN=H(({className:t})=>{const e=qi(),n=r=>{r.preventDefault();const i=new FormData(r.currentTarget),s=Wl();y2(s,i.get("email"),i.get("password")),e("/")};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:n,children:[g.jsx(cI,{}),g.jsx(y_,{Icon:g4,id:"email",type:"email",name:"email"}),g.jsx(y_,{Icon:y4,id:"password",type:"password",name:"password"}),g.jsx(ft,{type:"submit",text:"Sign In"})]})})})`
  --form-padding: 16px;
  height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
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
*/var fs,dI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,E){function A(){}A.prototype=E.prototype,y.D=E.prototype,y.prototype=new A,y.prototype.constructor=y,y.C=function(R,k,b){for(var S=Array(arguments.length-2),te=2;te<arguments.length;te++)S[te-2]=arguments[te];return E.prototype[k].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,E,A){A||(A=0);var R=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)R[k]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(k=0;16>k;++k)R[k]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=y.g[0],A=y.g[1],k=y.g[2];var b=y.g[3],S=E+(b^A&(k^b))+R[0]+3614090360&4294967295;E=A+(S<<7&4294967295|S>>>25),S=b+(k^E&(A^k))+R[1]+3905402710&4294967295,b=E+(S<<12&4294967295|S>>>20),S=k+(A^b&(E^A))+R[2]+606105819&4294967295,k=b+(S<<17&4294967295|S>>>15),S=A+(E^k&(b^E))+R[3]+3250441966&4294967295,A=k+(S<<22&4294967295|S>>>10),S=E+(b^A&(k^b))+R[4]+4118548399&4294967295,E=A+(S<<7&4294967295|S>>>25),S=b+(k^E&(A^k))+R[5]+1200080426&4294967295,b=E+(S<<12&4294967295|S>>>20),S=k+(A^b&(E^A))+R[6]+2821735955&4294967295,k=b+(S<<17&4294967295|S>>>15),S=A+(E^k&(b^E))+R[7]+4249261313&4294967295,A=k+(S<<22&4294967295|S>>>10),S=E+(b^A&(k^b))+R[8]+1770035416&4294967295,E=A+(S<<7&4294967295|S>>>25),S=b+(k^E&(A^k))+R[9]+2336552879&4294967295,b=E+(S<<12&4294967295|S>>>20),S=k+(A^b&(E^A))+R[10]+4294925233&4294967295,k=b+(S<<17&4294967295|S>>>15),S=A+(E^k&(b^E))+R[11]+2304563134&4294967295,A=k+(S<<22&4294967295|S>>>10),S=E+(b^A&(k^b))+R[12]+1804603682&4294967295,E=A+(S<<7&4294967295|S>>>25),S=b+(k^E&(A^k))+R[13]+4254626195&4294967295,b=E+(S<<12&4294967295|S>>>20),S=k+(A^b&(E^A))+R[14]+2792965006&4294967295,k=b+(S<<17&4294967295|S>>>15),S=A+(E^k&(b^E))+R[15]+1236535329&4294967295,A=k+(S<<22&4294967295|S>>>10),S=E+(k^b&(A^k))+R[1]+4129170786&4294967295,E=A+(S<<5&4294967295|S>>>27),S=b+(A^k&(E^A))+R[6]+3225465664&4294967295,b=E+(S<<9&4294967295|S>>>23),S=k+(E^A&(b^E))+R[11]+643717713&4294967295,k=b+(S<<14&4294967295|S>>>18),S=A+(b^E&(k^b))+R[0]+3921069994&4294967295,A=k+(S<<20&4294967295|S>>>12),S=E+(k^b&(A^k))+R[5]+3593408605&4294967295,E=A+(S<<5&4294967295|S>>>27),S=b+(A^k&(E^A))+R[10]+38016083&4294967295,b=E+(S<<9&4294967295|S>>>23),S=k+(E^A&(b^E))+R[15]+3634488961&4294967295,k=b+(S<<14&4294967295|S>>>18),S=A+(b^E&(k^b))+R[4]+3889429448&4294967295,A=k+(S<<20&4294967295|S>>>12),S=E+(k^b&(A^k))+R[9]+568446438&4294967295,E=A+(S<<5&4294967295|S>>>27),S=b+(A^k&(E^A))+R[14]+3275163606&4294967295,b=E+(S<<9&4294967295|S>>>23),S=k+(E^A&(b^E))+R[3]+4107603335&4294967295,k=b+(S<<14&4294967295|S>>>18),S=A+(b^E&(k^b))+R[8]+1163531501&4294967295,A=k+(S<<20&4294967295|S>>>12),S=E+(k^b&(A^k))+R[13]+2850285829&4294967295,E=A+(S<<5&4294967295|S>>>27),S=b+(A^k&(E^A))+R[2]+4243563512&4294967295,b=E+(S<<9&4294967295|S>>>23),S=k+(E^A&(b^E))+R[7]+1735328473&4294967295,k=b+(S<<14&4294967295|S>>>18),S=A+(b^E&(k^b))+R[12]+2368359562&4294967295,A=k+(S<<20&4294967295|S>>>12),S=E+(A^k^b)+R[5]+4294588738&4294967295,E=A+(S<<4&4294967295|S>>>28),S=b+(E^A^k)+R[8]+2272392833&4294967295,b=E+(S<<11&4294967295|S>>>21),S=k+(b^E^A)+R[11]+1839030562&4294967295,k=b+(S<<16&4294967295|S>>>16),S=A+(k^b^E)+R[14]+4259657740&4294967295,A=k+(S<<23&4294967295|S>>>9),S=E+(A^k^b)+R[1]+2763975236&4294967295,E=A+(S<<4&4294967295|S>>>28),S=b+(E^A^k)+R[4]+1272893353&4294967295,b=E+(S<<11&4294967295|S>>>21),S=k+(b^E^A)+R[7]+4139469664&4294967295,k=b+(S<<16&4294967295|S>>>16),S=A+(k^b^E)+R[10]+3200236656&4294967295,A=k+(S<<23&4294967295|S>>>9),S=E+(A^k^b)+R[13]+681279174&4294967295,E=A+(S<<4&4294967295|S>>>28),S=b+(E^A^k)+R[0]+3936430074&4294967295,b=E+(S<<11&4294967295|S>>>21),S=k+(b^E^A)+R[3]+3572445317&4294967295,k=b+(S<<16&4294967295|S>>>16),S=A+(k^b^E)+R[6]+76029189&4294967295,A=k+(S<<23&4294967295|S>>>9),S=E+(A^k^b)+R[9]+3654602809&4294967295,E=A+(S<<4&4294967295|S>>>28),S=b+(E^A^k)+R[12]+3873151461&4294967295,b=E+(S<<11&4294967295|S>>>21),S=k+(b^E^A)+R[15]+530742520&4294967295,k=b+(S<<16&4294967295|S>>>16),S=A+(k^b^E)+R[2]+3299628645&4294967295,A=k+(S<<23&4294967295|S>>>9),S=E+(k^(A|~b))+R[0]+4096336452&4294967295,E=A+(S<<6&4294967295|S>>>26),S=b+(A^(E|~k))+R[7]+1126891415&4294967295,b=E+(S<<10&4294967295|S>>>22),S=k+(E^(b|~A))+R[14]+2878612391&4294967295,k=b+(S<<15&4294967295|S>>>17),S=A+(b^(k|~E))+R[5]+4237533241&4294967295,A=k+(S<<21&4294967295|S>>>11),S=E+(k^(A|~b))+R[12]+1700485571&4294967295,E=A+(S<<6&4294967295|S>>>26),S=b+(A^(E|~k))+R[3]+2399980690&4294967295,b=E+(S<<10&4294967295|S>>>22),S=k+(E^(b|~A))+R[10]+4293915773&4294967295,k=b+(S<<15&4294967295|S>>>17),S=A+(b^(k|~E))+R[1]+2240044497&4294967295,A=k+(S<<21&4294967295|S>>>11),S=E+(k^(A|~b))+R[8]+1873313359&4294967295,E=A+(S<<6&4294967295|S>>>26),S=b+(A^(E|~k))+R[15]+4264355552&4294967295,b=E+(S<<10&4294967295|S>>>22),S=k+(E^(b|~A))+R[6]+2734768916&4294967295,k=b+(S<<15&4294967295|S>>>17),S=A+(b^(k|~E))+R[13]+1309151649&4294967295,A=k+(S<<21&4294967295|S>>>11),S=E+(k^(A|~b))+R[4]+4149444226&4294967295,E=A+(S<<6&4294967295|S>>>26),S=b+(A^(E|~k))+R[11]+3174756917&4294967295,b=E+(S<<10&4294967295|S>>>22),S=k+(E^(b|~A))+R[2]+718787259&4294967295,k=b+(S<<15&4294967295|S>>>17),S=A+(b^(k|~E))+R[9]+3951481745&4294967295,y.g[0]=y.g[0]+E&4294967295,y.g[1]=y.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+b&4294967295}r.prototype.u=function(y,E){E===void 0&&(E=y.length);for(var A=E-this.blockSize,R=this.B,k=this.h,b=0;b<E;){if(k==0)for(;b<=A;)i(this,y,b),b+=this.blockSize;if(typeof y=="string"){for(;b<E;)if(R[k++]=y.charCodeAt(b++),k==this.blockSize){i(this,R),k=0;break}}else for(;b<E;)if(R[k++]=y[b++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var E=1;E<y.length-8;++E)y[E]=0;var A=8*this.o;for(E=y.length-8;E<y.length;++E)y[E]=A&255,A/=256;for(this.u(y),y=Array(16),E=A=0;4>E;++E)for(var R=0;32>R;R+=8)y[A++]=this.g[E]>>>R&255;return y};function s(y,E){var A=a;return Object.prototype.hasOwnProperty.call(A,y)?A[y]:A[y]=E(y)}function o(y,E){this.h=E;for(var A=[],R=!0,k=y.length-1;0<=k;k--){var b=y[k]|0;R&&b==E||(A[k]=b,R=!1)}this.g=A}var a={};function u(y){return-128<=y&&128>y?s(y,function(E){return new o([E|0],0>E?-1:0)}):new o([y|0],0>y?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return f;if(0>y)return P(c(-y));for(var E=[],A=1,R=0;y>=A;R++)E[R]=y/A|0,A*=4294967296;return new o(E,0)}function d(y,E){if(y.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(y.charAt(0)=="-")return P(d(y.substring(1),E));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(E,8)),R=f,k=0;k<y.length;k+=8){var b=Math.min(8,y.length-k),S=parseInt(y.substring(k,k+b),E);8>b?(b=c(Math.pow(E,b)),R=R.j(b).add(c(S))):(R=R.j(A),R=R.add(c(S)))}return R}var f=u(0),p=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();for(var y=0,E=1,A=0;A<this.g.length;A++){var R=this.i(A);y+=(0<=R?R:4294967296+R)*E,E*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w(this))return"0";if(x(this))return"-"+P(this).toString(y);for(var E=c(Math.pow(y,6)),A=this,R="";;){var k=D(A,E).g;A=_(A,k.j(E));var b=((0<A.g.length?A.g[0]:A.h)>>>0).toString(y);if(A=k,w(A))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function w(y){if(y.h!=0)return!1;for(var E=0;E<y.g.length;E++)if(y.g[E]!=0)return!1;return!0}function x(y){return y.h==-1}t.l=function(y){return y=_(this,y),x(y)?-1:w(y)?0:1};function P(y){for(var E=y.g.length,A=[],R=0;R<E;R++)A[R]=~y.g[R];return new o(A,~y.h).add(p)}t.abs=function(){return x(this)?P(this):this},t.add=function(y){for(var E=Math.max(this.g.length,y.g.length),A=[],R=0,k=0;k<=E;k++){var b=R+(this.i(k)&65535)+(y.i(k)&65535),S=(b>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);R=S>>>16,b&=65535,S&=65535,A[k]=S<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function _(y,E){return y.add(P(E))}t.j=function(y){if(w(this)||w(y))return f;if(x(this))return x(y)?P(this).j(P(y)):P(P(this).j(y));if(x(y))return P(this.j(P(y)));if(0>this.l(T)&&0>y.l(T))return c(this.m()*y.m());for(var E=this.g.length+y.g.length,A=[],R=0;R<2*E;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<y.g.length;k++){var b=this.i(R)>>>16,S=this.i(R)&65535,te=y.i(k)>>>16,Ie=y.i(k)&65535;A[2*R+2*k]+=S*Ie,v(A,2*R+2*k),A[2*R+2*k+1]+=b*Ie,v(A,2*R+2*k+1),A[2*R+2*k+1]+=S*te,v(A,2*R+2*k+1),A[2*R+2*k+2]+=b*te,v(A,2*R+2*k+2)}for(R=0;R<E;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=E;R<2*E;R++)A[R]=0;return new o(A,0)};function v(y,E){for(;(y[E]&65535)!=y[E];)y[E+1]+=y[E]>>>16,y[E]&=65535,E++}function C(y,E){this.g=y,this.h=E}function D(y,E){if(w(E))throw Error("division by zero");if(w(y))return new C(f,f);if(x(y))return E=D(P(y),E),new C(P(E.g),P(E.h));if(x(E))return E=D(y,P(E)),new C(P(E.g),E.h);if(30<y.g.length){if(x(y)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var A=p,R=E;0>=R.l(y);)A=j(A),R=j(R);var k=$(A,1),b=$(R,1);for(R=$(R,2),A=$(A,2);!w(R);){var S=b.add(R);0>=S.l(y)&&(k=k.add(A),b=S),R=$(R,1),A=$(A,1)}return E=_(y,k.j(E)),new C(k,E)}for(k=f;0<=y.l(E);){for(A=Math.max(1,Math.floor(y.m()/E.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=c(A),S=b.j(E);x(S)||0<S.l(y);)A-=R,b=c(A),S=b.j(E);w(b)&&(b=p),k=k.add(b),y=_(y,S)}return new C(k,y)}t.A=function(y){return D(this,y).h},t.and=function(y){for(var E=Math.max(this.g.length,y.g.length),A=[],R=0;R<E;R++)A[R]=this.i(R)&y.i(R);return new o(A,this.h&y.h)},t.or=function(y){for(var E=Math.max(this.g.length,y.g.length),A=[],R=0;R<E;R++)A[R]=this.i(R)|y.i(R);return new o(A,this.h|y.h)},t.xor=function(y){for(var E=Math.max(this.g.length,y.g.length),A=[],R=0;R<E;R++)A[R]=this.i(R)^y.i(R);return new o(A,this.h^y.h)};function j(y){for(var E=y.g.length+1,A=[],R=0;R<E;R++)A[R]=y.i(R)<<1|y.i(R-1)>>>31;return new o(A,y.h)}function $(y,E){var A=E>>5;E%=32;for(var R=y.g.length-A,k=[],b=0;b<R;b++)k[b]=0<E?y.i(b+A)>>>E|y.i(b+A+1)<<32-E:y.i(b+A);return new o(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,fs=o}).apply(typeof v_<"u"?v_:typeof self<"u"?self:typeof window<"u"?window:{});var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hI,fI,La,pI,sc,kp,mI,gI,yI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vu=="object"&&Vu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var I=0;I<l.length-1;I++){var O=l[I];if(!(O in m))break e;m=m[O]}l=l[l.length-1],I=m[l],h=h(I),h!=I&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,I=!1,O={next:function(){if(!I&&m<l.length){var F=m++;return{value:h(F,l[F]),done:!1}}return I=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,I),l.apply(h,O)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function T(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var I=m.slice();return I.push.apply(I,arguments),l.apply(this,I)}}function w(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(I,O,F){for(var X=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)X[qe-2]=arguments[qe];return h.prototype[O].apply(I,X)}}function x(l){const h=l.length;if(0<h){const m=Array(h);for(let I=0;I<h;I++)m[I]=l[I];return m}return[]}function P(l,h){for(let m=1;m<arguments.length;m++){const I=arguments[m];if(u(I)){const O=l.length||0,F=I.length||0;l.length=O+F;for(let X=0;X<F;X++)l[O+X]=I[X]}else l.push(I)}}class _{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function $(l,h,m){for(const I in l)h.call(m,l[I],I,l)}function y(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function E(l){const h={};for(const m in l)h[m]=l[m];return h}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let m,I;for(let O=1;O<arguments.length;O++){I=arguments[O];for(m in I)l[m]=I[m];for(let F=0;F<A.length;F++)m=A[F],Object.prototype.hasOwnProperty.call(I,m)&&(l[m]=I[m])}}function k(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function b(l){a.setTimeout(()=>{throw l},0)}function S(){var l=oe;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class te{constructor(){this.h=this.g=null}add(h,m){const I=Ie.get();I.set(h,m),this.h?this.h.next=I:this.g=I,this.h=I}}var Ie=new _(()=>new pt,l=>l.reset());class pt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,z=!1,oe=new te,ae=()=>{const l=a.Promise.resolve(void 0);Ne=()=>{l.then(Te)}};var Te=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(m){b(m)}var h=Ie;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}z=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Z(l,h){if(G.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,I=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{D(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:L[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Z.aa.h.call(this)}}w(Z,G);var L={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),Y=0;function Ve(l,h,m,I,O){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!I,this.ha=O,this.key=++Y,this.da=this.fa=!1}function Se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ae(l){this.src=l,this.g={},this.h=0}Ae.prototype.add=function(l,h,m,I,O){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var X=Be(l,h,I,O);return-1<X?(h=l[X],m||(h.fa=!1)):(h=new Ve(h,this.src,F,!!I,O),h.fa=m,l.push(h)),h};function le(l,h){var m=h.type;if(m in l.g){var I=l.g[m],O=Array.prototype.indexOf.call(I,h,void 0),F;(F=0<=O)&&Array.prototype.splice.call(I,O,1),F&&(Se(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Be(l,h,m,I){for(var O=0;O<l.length;++O){var F=l[O];if(!F.da&&F.listener==h&&F.capture==!!m&&F.ha==I)return O}return-1}var mt="closure_lm_"+(1e6*Math.random()|0),xe={};function He(l,h,m,I,O){if(Array.isArray(h)){for(var F=0;F<h.length;F++)He(l,h[F],m,I,O);return null}return m=ze(m),l&&l[he]?l.K(h,m,c(I)?!!I.capture:!!I,O):be(l,h,m,!1,I,O)}function be(l,h,m,I,O,F){if(!h)throw Error("Invalid event type");var X=c(O)?!!O.capture:!!O,qe=yt(l);if(qe||(l[mt]=qe=new Ae(l)),m=qe.add(h,m,I,X,F),m.proxy)return m;if(I=gt(),m.proxy=I,I.src=l,I.listener=m,l.addEventListener)J||(O=X),O===void 0&&(O=!1),l.addEventListener(h.toString(),I,O);else if(l.attachEvent)l.attachEvent(Ar(h.toString()),I);else if(l.addListener&&l.removeListener)l.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return m}function gt(){function l(m){return h.call(l.src,l.listener,m)}const h=wn;return l}function or(l,h,m,I,O){if(Array.isArray(h))for(var F=0;F<h.length;F++)or(l,h[F],m,I,O);else I=c(I)?!!I.capture:!!I,m=ze(m),l&&l[he]?(l=l.i,h=String(h).toString(),h in l.g&&(F=l.g[h],m=Be(F,m,I,O),-1<m&&(Se(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[h],l.h--)))):l&&(l=yt(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Be(h,m,I,O)),(m=-1<l?h[l]:null)&&it(m))}function it(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[he])le(h.i,l);else{var m=l.type,I=l.proxy;h.removeEventListener?h.removeEventListener(m,I,l.capture):h.detachEvent?h.detachEvent(Ar(m),I):h.addListener&&h.removeListener&&h.removeListener(I),(m=yt(h))?(le(m,l),m.h==0&&(m.src=null,h[mt]=null)):Se(l)}}}function Ar(l){return l in xe?xe[l]:xe[l]="on"+l}function wn(l,h){if(l.da)l=!0;else{h=new Z(h,this);var m=l.listener,I=l.ha||l.src;l.fa&&it(l),l=m.call(I,h)}return l}function yt(l){return l=l[mt],l instanceof Ae?l:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ze(l){return typeof l=="function"?l:(l[fe]||(l[fe]=function(h){return l.handleEvent(h)}),l[fe])}function je(){q.call(this),this.i=new Ae(this),this.M=this,this.F=null}w(je,q),je.prototype[he]=!0,je.prototype.removeEventListener=function(l,h,m,I){or(this,l,h,m,I)};function Ye(l,h){var m,I=l.F;if(I)for(m=[];I;I=I.F)m.push(I);if(l=l.M,I=h.type||h,typeof h=="string")h=new G(h,l);else if(h instanceof G)h.target=h.target||l;else{var O=h;h=new G(I,l),R(h,O)}if(O=!0,m)for(var F=m.length-1;0<=F;F--){var X=h.g=m[F];O=Ht(X,I,!0,h)&&O}if(X=h.g=l,O=Ht(X,I,!0,h)&&O,O=Ht(X,I,!1,h)&&O,m)for(F=0;F<m.length;F++)X=h.g=m[F],O=Ht(X,I,!1,h)&&O}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],I=0;I<m.length;I++)Se(m[I]);delete l.g[h],l.h--}}this.F=null},je.prototype.K=function(l,h,m,I){return this.i.add(String(l),h,!1,m,I)},je.prototype.L=function(l,h,m,I){return this.i.add(String(l),h,!0,m,I)};function Ht(l,h,m,I){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,F=0;F<h.length;++F){var X=h[F];if(X&&!X.da&&X.capture==m){var qe=X.listener,Lt=X.ha||X.src;X.fa&&le(l.i,X),O=qe.call(Lt,I)!==!1&&O}}return O&&!I.defaultPrevented}function Qi(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function iu(l){l.g=Qi(()=>{l.g=null,l.i&&(l.i=!1,iu(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class ar extends q{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ei(l){q.call(this),this.h=l,this.g={}}w(ei,q);var sa=[];function oa(l){$(l.g,function(h,m){this.g.hasOwnProperty(m)&&it(h)},l),l.g={}}ei.prototype.N=function(){ei.aa.N.call(this),oa(this)},ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=a.JSON.stringify,su=a.JSON.parse,Hs=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function qs(){}qs.prototype.h=null;function Ws(l){return l.h||(l.h=l.i())}function ou(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function la(){G.call(this,"d")}w(la,G);function Gs(){G.call(this,"c")}w(Gs,G);var xr={},M=null;function V(){return M=M||new je}xr.La="serverreachability";function U(l){G.call(this,xr.La,l)}w(U,G);function Q(l){const h=V();Ye(h,new U(h))}xr.STAT_EVENT="statevent";function ne(l,h){G.call(this,xr.STAT_EVENT,l),this.stat=h}w(ne,G);function ue(l){const h=V();Ye(h,new ne(h,l))}xr.Ma="timingevent";function ce(l,h){G.call(this,xr.Ma,l),this.size=h}w(ce,G);function ee(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function ge(){this.g=!0}ge.prototype.xa=function(){this.g=!1};function ye(l,h,m,I,O,F){l.info(function(){if(l.g)if(F)for(var X="",qe=F.split("&"),Lt=0;Lt<qe.length;Lt++){var Oe=qe[Lt].split("=");if(1<Oe.length){var qt=Oe[0];Oe=Oe[1];var Wt=qt.split("_");X=2<=Wt.length&&Wt[1]=="type"?X+(qt+"="+Oe+"&"):X+(qt+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+I+") [attempt "+O+"]: "+h+`
`+m+`
`+X})}function At(l,h,m,I,O,F,X){l.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+O+"]: "+h+`
`+m+`
`+F+" "+X})}function tt(l,h,m,I){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+We(l,m)+(I?" "+I:"")})}function pe(l,h){l.info(function(){return"TIMEOUT: "+h})}ge.prototype.info=function(){};function We(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var I=m[l];if(!(2>I.length)){var O=I[1];if(Array.isArray(O)&&!(1>O.length)){var F=O[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<O.length;X++)O[X]=""}}}}return aa(m)}catch{return h}}var st={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function qn(){}w(qn,qs),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},Dn=new qn;function nn(l,h,m,I){this.j=l,this.i=h,this.l=m,this.R=I||1,this.U=new ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cr}function Cr(){this.i=null,this.g="",this.h=!1}var En={},ri={};function ii(l,h,m){l.L=1,l.v=uu(kr(h)),l.m=m,l.P=!0,Yi(l,null)}function Yi(l,h){l.F=Date.now(),Ot(l),l.A=kr(l.v);var m=l.A,I=l.R;Array.isArray(I)||(I=[String(I)]),Dy(m.i,"t",I),l.C=0,m=l.j.J,l.h=new Cr,l.g=Yy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new ar(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,I=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(sa[0]=O.toString()),O=sa);for(var F=0;F<O.length;F++){var X=He(m,O[F],I||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Q(),ye(l.i,l.u,l.A,l.l,l.R,l.m)}nn.prototype.ca=function(l){l=l.target;const h=this.M;h&&br(l)==3?h.j():this.Y(l)},nn.prototype.Y=function(l){try{if(l==this.g)e:{const Wt=br(this.g);var h=this.g.Ba();const Ys=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Fy(this.g)))){this.J||Wt!=4||h==7||(h==8||0>=Ys?Q(3):Q(2)),Rr(this);var m=this.g.Z();this.X=m;t:if(Ce(this)){var I=Fy(this.g);l="";var O=I.length,F=br(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),si(this);var X="";break t}this.h.i=new a.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,l+=this.h.i.decode(I[h],{stream:!(F&&h==O-1)});I.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,At(this.i,this.u,this.A,this.l,this.R,Wt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Lt=this.g;if((qe=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(qe)){var Oe=qe;break t}}Oe=null}if(m=Oe)tt(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,m);else{this.o=!1,this.s=3,ue(12),Pr(this),si(this);break e}}if(this.P){m=!0;let Wn;for(;!this.J&&this.C<X.length;)if(Wn=Mt(this,X),Wn==ri){Wt==4&&(this.s=4,ue(14),m=!1),tt(this.i,this.l,null,"[Incomplete Response]");break}else if(Wn==En){this.s=4,ue(15),tt(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else tt(this.i,this.l,Wn,null),fh(this,Wn);if(Ce(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||X.length!=0||this.h.h||(this.s=1,ue(16),m=!1),this.o=this.o&&m,!m)tt(this.i,this.l,X,"[Invalid Chunked Response]"),Pr(this),si(this);else if(0<X.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),_h(qt),qt.M=!0,ue(11))}}else tt(this.i,this.l,X,null),fh(this,X);Wt==4&&Pr(this),this.o&&!this.J&&(Wt==4?Wy(this.j,this):(this.o=!1,Ot(this)))}else RA(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,ue(12)):(this.s=0,ue(13)),Pr(this),si(this)}}}catch{}finally{}};function Ce(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Mt(l,h){var m=l.C,I=h.indexOf(`
`,m);return I==-1?ri:(m=Number(h.substring(m,I)),isNaN(m)?En:(I+=1,I+m>h.length?ri:(h=h.slice(I,I+m),l.C=I+m,h)))}nn.prototype.cancel=function(){this.J=!0,Pr(this)};function Ot(l){l.S=Date.now()+l.I,_t(l,l.I)}function _t(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ee(p(l.ba,l),h)}function Rr(l){l.B&&(a.clearTimeout(l.B),l.B=null)}nn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(pe(this.i,this.A),this.L!=2&&(Q(),ue(17)),Pr(this),this.s=2,si(this)):_t(this,this.S-l)};function si(l){l.j.G==0||l.J||Wy(l.j,l)}function Pr(l){Rr(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,oa(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||ph(m.h,l))){if(!l.K&&ph(m.h,l)&&m.G==3){try{var I=m.Da.g.parse(h)}catch{I=null}if(Array.isArray(I)&&I.length==3){var O=I;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)pu(m),hu(m);else break e;vh(m),ue(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=ee(p(m.Za,m),6e3));if(1>=Iy(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Ji(m,11)}else if((l.K||m.g==l)&&pu(m),!v(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let Oe=O[h];if(m.T=Oe[0],Oe=Oe[1],m.G==2)if(Oe[0]=="c"){m.K=Oe[1],m.ia=Oe[2];const qt=Oe[3];qt!=null&&(m.la=qt,m.j.info("VER="+m.la));const Wt=Oe[4];Wt!=null&&(m.Aa=Wt,m.j.info("SVER="+m.Aa));const Ys=Oe[5];Ys!=null&&typeof Ys=="number"&&0<Ys&&(I=1.5*Ys,m.L=I,m.j.info("backChannelRequestTimeoutMs_="+I)),I=m;const Wn=l.g;if(Wn){const gu=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gu){var F=I.h;F.g||gu.indexOf("spdy")==-1&&gu.indexOf("quic")==-1&&gu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(mh(F,F.h),F.h=null))}if(I.D){const wh=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;wh&&(I.ya=wh,Xe(I.I,I.D,wh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),I=m;var X=l;if(I.qa=Qy(I,I.J?I.ia:null,I.W),X.K){Sy(I.h,X);var qe=X,Lt=I.L;Lt&&(qe.I=Lt),qe.B&&(Rr(qe),Ot(qe)),I.g=X}else Hy(I);0<m.i.length&&fu(m)}else Oe[0]!="stop"&&Oe[0]!="close"||Ji(m,7);else m.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ji(m,7):yh(m):Oe[0]!="noop"&&m.l&&m.l.ta(Oe),m.v=0)}}Q(4)}catch{}}var hA=class{constructor(l,h){this.g=l,this.map=h}};function Ey(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ty(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Iy(l){return l.h?1:l.g?l.g.size:0}function ph(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function mh(l,h){l.g?l.g.add(h):l.h=h}function Sy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Ey.prototype.cancel=function(){if(this.i=Ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ay(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return x(l.i)}function fA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,I=0;I<m;I++)h.push(l[I]);return h}h=[],m=0;for(I in l)h[m++]=l[I];return h}function pA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const I in l)h[m++]=I;return h}}}function xy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=pA(l),I=fA(l),O=I.length,F=0;F<O;F++)h.call(void 0,I[F],m&&m[F],l)}var Cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mA(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var I=l[m].indexOf("="),O=null;if(0<=I){var F=l[m].substring(0,I);O=l[m].substring(I+1)}else F=l[m];h(F,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Xi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Xi){this.h=l.h,au(this,l.j),this.o=l.o,this.g=l.g,lu(this,l.s),this.l=l.l;var h=l.i,m=new da;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Ry(this,m),this.m=l.m}else l&&(h=String(l).match(Cy))?(this.h=!1,au(this,h[1]||"",!0),this.o=ua(h[2]||""),this.g=ua(h[3]||"",!0),lu(this,h[4]),this.l=ua(h[5]||"",!0),Ry(this,h[6]||"",!0),this.m=ua(h[7]||"")):(this.h=!1,this.i=new da(null,this.h))}Xi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ca(h,Py,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ca(h,Py,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(ca(m,m.charAt(0)=="/"?vA:yA,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",ca(m,wA)),l.join("")};function kr(l){return new Xi(l)}function au(l,h,m){l.j=m?ua(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function lu(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Ry(l,h,m){h instanceof da?(l.i=h,EA(l.i,l.h)):(m||(h=ca(h,_A)),l.i=new da(h,l.h))}function Xe(l,h,m){l.i.set(h,m)}function uu(l){return Xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ua(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ca(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,gA),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function gA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Py=/[#\/\?@]/g,yA=/[#\?:]/g,vA=/[#\?]/g,_A=/[#\?@]/g,wA=/#/g;function da(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function oi(l){l.g||(l.g=new Map,l.h=0,l.i&&mA(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=da.prototype,t.add=function(l,h){oi(this),this.i=null,l=Ks(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function ky(l,h){oi(l),h=Ks(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function by(l,h){return oi(l),h=Ks(l,h),l.g.has(h)}t.forEach=function(l,h){oi(this),this.g.forEach(function(m,I){m.forEach(function(O){l.call(h,O,I,this)},this)},this)},t.na=function(){oi(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let I=0;I<h.length;I++){const O=l[I];for(let F=0;F<O.length;F++)m.push(h[I])}return m},t.V=function(l){oi(this);let h=[];if(typeof l=="string")by(this,l)&&(h=h.concat(this.g.get(Ks(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return oi(this),this.i=null,l=Ks(this,l),by(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Dy(l,h,m){ky(l,h),0<m.length&&(l.i=null,l.g.set(Ks(l,h),x(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var I=h[m];const F=encodeURIComponent(String(I)),X=this.V(I);for(I=0;I<X.length;I++){var O=F;X[I]!==""&&(O+="="+encodeURIComponent(String(X[I]))),l.push(O)}}return this.i=l.join("&")};function Ks(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function EA(l,h){h&&!l.j&&(oi(l),l.i=null,l.g.forEach(function(m,I){var O=I.toLowerCase();I!=O&&(ky(this,I),Dy(this,O,m))},l)),l.j=h}function TA(l,h){const m=new ge;if(a.Image){const I=new Image;I.onload=T(ai,m,"TestLoadImage: loaded",!0,h,I),I.onerror=T(ai,m,"TestLoadImage: error",!1,h,I),I.onabort=T(ai,m,"TestLoadImage: abort",!1,h,I),I.ontimeout=T(ai,m,"TestLoadImage: timeout",!1,h,I),a.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=l}else h(!1)}function IA(l,h){const m=new ge,I=new AbortController,O=setTimeout(()=>{I.abort(),ai(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:I.signal}).then(F=>{clearTimeout(O),F.ok?ai(m,"TestPingServer: ok",!0,h):ai(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),ai(m,"TestPingServer: error",!1,h)})}function ai(l,h,m,I,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),I(m)}catch{}}function SA(){this.g=new Hs}function AA(l,h,m){const I=m||"";try{xy(l,function(O,F){let X=O;c(O)&&(X=aa(O)),h.push(I+F+"="+encodeURIComponent(X))})}catch(O){throw h.push(I+"type="+encodeURIComponent("_badmap")),O}}function ha(l){this.l=l.Ub||null,this.j=l.eb||!1}w(ha,qs),ha.prototype.g=function(){return new cu(this.l,this.j)},ha.prototype.i=function(l){return function(){return l}}({});function cu(l,h){je.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(cu,je),t=cu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,pa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,pa(this)),this.g&&(this.readyState=3,pa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ny(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ny(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?fa(this):pa(this),this.readyState==3&&Ny(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,fa(this))},t.Qa=function(l){this.g&&(this.response=l,fa(this))},t.ga=function(){this.g&&fa(this)};function fa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,pa(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function pa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function My(l){let h="";return $(l,function(m,I){h+=I,h+=":",h+=m,h+=`\r
`}),h}function gh(l,h,m){e:{for(I in m){var I=!1;break e}I=!0}I||(m=My(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Xe(l,h,m))}function dt(l){je.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(dt,je);var xA=/^https?$/i,CA=["POST","PUT"];t=dt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?Ws(this.o):Ws(Dn),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(F){Oy(this,F);return}if(l=m||"",m=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var O in I)m.set(O,I[O]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const F of I.keys())m.set(F,I.get(F));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(CA,h,void 0))||I||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of m)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jy(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Oy(this,F)}};function Oy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Ly(l),du(l)}function Ly(l){l.A||(l.A=!0,Ye(l,"complete"),Ye(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ye(this,"complete"),Ye(this,"abort"),du(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),du(this,!0)),dt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vy(this):this.bb())},t.bb=function(){Vy(this)};function Vy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||br(l)!=4||l.Z()!=2)){if(l.u&&br(l)==4)Qi(l.Ea,0,l);else if(Ye(l,"readystatechange"),br(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var I;if(I=X===0){var O=String(l.D).match(Cy)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),I=!xA.test(O?O.toLowerCase():"")}m=I}if(m)Ye(l,"complete"),Ye(l,"success");else{l.m=6;try{var F=2<br(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Ly(l)}}finally{du(l)}}}}function du(l,h){if(l.g){jy(l);const m=l.g,I=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Ye(l,"ready");try{m.onreadystatechange=I}catch{}}}function jy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function br(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<br(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),su(h)}};function Fy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function RA(l){const h={};l=(l.g&&2<=br(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<l.length;I++){if(v(l[I]))continue;var m=k(l[I]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=h[O]||[];h[O]=F,F.push(m)}y(h,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ma(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Uy(l){this.Aa=0,this.i=[],this.j=new ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ma("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ma("baseRetryDelayMs",5e3,l),this.cb=ma("retryDelaySeedMs",1e4,l),this.Wa=ma("forwardChannelMaxRetries",2,l),this.wa=ma("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ey(l&&l.concurrentRequestLimit),this.Da=new SA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uy.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,I){ue(0),this.W=l,this.H=h||{},m&&I!==void 0&&(this.H.OSID=m,this.H.OAID=I),this.F=this.X,this.I=Qy(this,null,this.W),fu(this)};function yh(l){if($y(l),l.G==3){var h=l.U++,m=kr(l.I);if(Xe(m,"SID",l.K),Xe(m,"RID",h),Xe(m,"TYPE","terminate"),ga(l,m),h=new nn(l,l.j,h),h.L=2,h.v=uu(kr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Yy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ot(h)}Ky(l)}function hu(l){l.g&&(_h(l),l.g.cancel(),l.g=null)}function $y(l){hu(l),l.u&&(a.clearTimeout(l.u),l.u=null),pu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function fu(l){if(!Ty(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ne||ae(),z||(Ne(),z=!0),oe.add(h,l),l.B=0}}function PA(l,h){return Iy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ee(p(l.Ga,l,h),Gy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new nn(this,this.j,l);let F=this.o;if(this.S&&(F?(F=E(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(O.H=F,F=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var I=this.i[m];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(h+=I,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=By(this,O,h),m=kr(this.I),Xe(m,"RID",l),Xe(m,"CVER",22),this.D&&Xe(m,"X-HTTP-Session-Id",this.D),ga(this,m),F&&(this.O?h="headers="+encodeURIComponent(String(My(F)))+"&"+h:this.m&&gh(m,this.m,F)),mh(this.h,O),this.Ua&&Xe(m,"TYPE","init"),this.P?(Xe(m,"$req",h),Xe(m,"SID","null"),O.T=!0,ii(O,m,null)):ii(O,m,h),this.G=2}}else this.G==3&&(l?zy(this,l):this.i.length==0||Ty(this.h)||zy(this))};function zy(l,h){var m;h?m=h.l:m=l.U++;const I=kr(l.I);Xe(I,"SID",l.K),Xe(I,"RID",m),Xe(I,"AID",l.T),ga(l,I),l.m&&l.o&&gh(I,l.m,l.o),m=new nn(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=By(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mh(l.h,m),ii(m,I,h)}function ga(l,h){l.H&&$(l.H,function(m,I){Xe(h,I,m)}),l.l&&xy({},function(m,I){Xe(h,I,m)})}function By(l,h,m){m=Math.min(l.i.length,m);var I=l.l?p(l.l.Na,l.l,l):null;e:{var O=l.i;let F=-1;for(;;){const X=["count="+m];F==-1?0<m?(F=O[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let qe=!0;for(let Lt=0;Lt<m;Lt++){let Oe=O[Lt].g;const qt=O[Lt].map;if(Oe-=F,0>Oe)F=Math.max(0,O[Lt].g-100),qe=!1;else try{AA(qt,X,"req"+Oe+"_")}catch{I&&I(qt)}}if(qe){I=X.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,I}function Hy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ne||ae(),z||(Ne(),z=!0),oe.add(h,l),l.v=0}}function vh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ee(p(l.Fa,l),Gy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,qy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ee(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ue(10),hu(this),qy(this))};function _h(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function qy(l){l.g=new nn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=kr(l.qa);Xe(h,"RID","rpc"),Xe(h,"SID",l.K),Xe(h,"AID",l.T),Xe(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Xe(h,"TO",l.ja),Xe(h,"TYPE","xmlhttp"),ga(l,h),l.m&&l.o&&gh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=uu(kr(h)),m.m=null,m.P=!0,Yi(m,l)}t.Za=function(){this.C!=null&&(this.C=null,hu(this),vh(this),ue(19))};function pu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Wy(l,h){var m=null;if(l.g==h){pu(l),_h(l),l.g=null;var I=2}else if(ph(l.h,h))m=h.D,Sy(l.h,h),I=1;else return;if(l.G!=0){if(h.o)if(I==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=l.B;I=V(),Ye(I,new ce(I,m)),fu(l)}else Hy(l);else if(O=h.s,O==3||O==0&&0<h.X||!(I==1&&PA(l,h)||I==2&&vh(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),O){case 1:Ji(l,5);break;case 4:Ji(l,10);break;case 3:Ji(l,6);break;default:Ji(l,2)}}}function Gy(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function Ji(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),I=l.Xa;const O=!I;I=new Xi(I||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||au(I,"https"),uu(I),O?TA(I.toString(),m):IA(I.toString(),m)}else ue(2);l.G=0,l.l&&l.l.sa(h),Ky(l),$y(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ue(2)):(this.j.info("Failed to ping google.com"),ue(1))};function Ky(l){if(l.G=0,l.ka=[],l.l){const h=Ay(l.h);(h.length!=0||l.i.length!=0)&&(P(l.ka,h),P(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function Qy(l,h,m){var I=m instanceof Xi?kr(m):new Xi(m);if(I.g!="")h&&(I.g=h+"."+I.g),lu(I,I.s);else{var O=a.location;I=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var F=new Xi(null);I&&au(F,I),h&&(F.g=h),O&&lu(F,O),m&&(F.l=m),I=F}return m=l.D,h=l.ya,m&&h&&Xe(I,m,h),Xe(I,"VER",l.la),ga(l,I),I}function Yy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new dt(new ha({eb:m})):new dt(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xy(){}t=Xy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mu(){}mu.prototype.g=function(l,h){return new Tn(l,h)};function Tn(l,h){je.call(this),this.g=new Uy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Qs(this)}w(Tn,je),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){yh(this.g)},Tn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=aa(l),l=m);h.i.push(new hA(h.Ya++,l)),h.G==3&&fu(h)},Tn.prototype.N=function(){this.g.l=null,delete this.j,yh(this.g),delete this.g,Tn.aa.N.call(this)};function Jy(l){la.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}w(Jy,la);function Zy(){Gs.call(this),this.status=1}w(Zy,Gs);function Qs(l){this.g=l}w(Qs,Xy),Qs.prototype.ua=function(){Ye(this.g,"a")},Qs.prototype.ta=function(l){Ye(this.g,new Jy(l))},Qs.prototype.sa=function(l){Ye(this.g,new Zy)},Qs.prototype.ra=function(){Ye(this.g,"b")},mu.prototype.createWebChannel=mu.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,yI=function(){return new mu},gI=function(){return V()},mI=xr,kp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},st.NO_ERROR=0,st.TIMEOUT=8,st.HTTP_ERROR=6,sc=st,ni.COMPLETE="complete",pI=ni,ou.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",je.prototype.listen=je.prototype.K,La=ou,fI=ha,dt.prototype.listenOnce=dt.prototype.L,dt.prototype.getLastError=dt.prototype.Ka,dt.prototype.getLastErrorCode=dt.prototype.Ba,dt.prototype.getStatus=dt.prototype.Z,dt.prototype.getResponseJson=dt.prototype.Oa,dt.prototype.getResponseText=dt.prototype.oa,dt.prototype.send=dt.prototype.ea,dt.prototype.setWithCredentials=dt.prototype.Ha,hI=dt}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});const __="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new qd("@firebase/firestore");function Ra(){return Cs.logLevel}function se(t,...e){if(Cs.logLevel<=ke.DEBUG){const n=e.map(Pg);Cs.debug(`Firestore (${ea}): ${t}`,...n)}}function Qr(t,...e){if(Cs.logLevel<=ke.ERROR){const n=e.map(Pg);Cs.error(`Firestore (${ea}): ${t}`,...n)}}function jo(t,...e){if(Cs.logLevel<=ke.WARN){const n=e.map(Pg);Cs.warn(`Firestore (${ea}): ${t}`,...n)}}function Pg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ve(t="Unexpected state"){const e=`FIRESTORE (${ea}) INTERNAL ASSERTION FAILED: `+t;throw Qr(e),new Error(e)}function Qe(t,e){t||ve()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class MN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ON{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string"),new vI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string"),new Xt(e)}}class LN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new LN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string"),this.R=n.token,new jN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=UN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function Fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ve(),r===void 0?r=e.length-n:r>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ze extends Cl{construct(e,n,r){return new Ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const $N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Cl{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return $N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ze.fromString(e))}static fromName(e){return new de(Ze.fromString(e).popFirst(5))}static empty(){return new de(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ze(e.slice()))}}function zN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(r===1e9?new Rt(n+1,0):new Rt(n,r));return new Vi(i,de.empty(),e)}function BN(t){return new Vi(t.readTime,t.key,-1)}class Vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vi(_e.min(),de.empty(),-1)}static max(){return new Vi(_e.max(),de.empty(),-1)}}function HN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==qN)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(i=>i?W.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new W((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new W((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function GN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Kl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kg.oe=-1;function Yd(t){return t==null}function Kc(t){return t===0&&1/t==-1/0}function KN(t){return typeof t=="number"&&Number.isInteger(t)&&!Kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||jt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??jt.RED,this.left=i??jt.EMPTY,this.right=s??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new jt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return jt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,r,i,s){return this}insert(e,n,r){return new jt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new E_(this.data.getIterator())}getIteratorFrom(e){return new E_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class E_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new An([])}unionWith(e){let n=new $t(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class EI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new EI("Invalid base64 string: "+s):s}}(e);return new tn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const QN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(t){if(Qe(!!t),typeof t=="string"){let e=0;const n=QN.exec(t);if(Qe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Tt(t.seconds),nanos:Tt(t.nanos)}}function Tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?tn.fromBase64String(t):tn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dg(t){const e=t.mapValue.fields.__previous_value__;return bg(e)?Dg(e):e}function Rl(t){const e=ji(t.mapValue.fields.__local_write_time__.timestampValue);return new Rt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Pl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bg(t)?4:XN(t)?9007199254740991:10:ve()}function Ir(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rl(t).isEqual(Rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ji(i.timestampValue),a=ji(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Rs(i.bytesValue).isEqual(Rs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Tt(i.geoPointValue.latitude)===Tt(s.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Tt(i.integerValue)===Tt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Tt(i.doubleValue),a=Tt(s.doubleValue);return o===a?Kc(o)===Kc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fo(t.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(w_(o)!==w_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Ir(o[u],a[u])))return!1;return!0}(t,e);default:return ve()}}function kl(t,e){return(t.values||[]).find(n=>Ir(n,e))!==void 0}function Uo(t,e){if(t===e)return 0;const n=Ps(t),r=Ps(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Tt(s.integerValue||s.doubleValue),u=Tt(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return T_(t.timestampValue,e.timestampValue);case 4:return T_(Rl(t),Rl(e));case 5:return Le(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Rs(s),u=Rs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=Le(a[c],u[c]);if(d!==0)return d}return Le(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Le(Tt(s.latitude),Tt(o.latitude));return a!==0?a:Le(Tt(s.longitude),Tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Uo(a[c],u[c]);if(d)return d}return Le(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fu.mapValue&&o===Fu.mapValue)return 0;if(s===Fu.mapValue)return 1;if(o===Fu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Le(u[f],d[f]);if(p!==0)return p;const T=Uo(a[u[f]],c[d[f]]);if(T!==0)return T}return Le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ve()}}function T_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=ji(t),r=ji(e),i=Le(n.seconds,r.seconds);return i!==0?i:Le(n.nanos,r.nanos)}function $o(t){return bp(t)}function bp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ji(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=bp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${bp(n.fields[o])}`;return i+"}"}(t.mapValue):ve()}function I_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dp(t){return!!t&&"integerValue"in t}function Ng(t){return!!t&&"arrayValue"in t}function S_(t){return!!t&&"nullValue"in t}function A_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oc(t){return!!t&&"mapValue"in t}function Za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(n)}setAll(e){let n=Ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Za(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pn(Za(this.value))}}function TI(t){const e=[];return js(t.fields,(n,r)=>{const i=new Ft([n]);if(oc(r)){const s=TI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Zt(e,0,_e.min(),_e.min(),_e.min(),pn.empty(),0)}static newFoundDocument(e,n,r,i){return new Zt(e,1,n,_e.min(),r,i,0)}static newNoDocument(e,n){return new Zt(e,2,n,_e.min(),_e.min(),pn.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,_e.min(),_e.min(),pn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function x_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=Uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function C_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function JN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class II{}class St extends II{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eM(e,n,r):n==="array-contains"?new rM(e,r):n==="in"?new iM(e,r):n==="not-in"?new sM(e,r):n==="array-contains-any"?new oM(e,r):new St(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tM(e,r):new nM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Uo(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends II{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rr(e,n)}matches(e){return SI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function SI(t){return t.op==="and"}function AI(t){return ZN(t)&&SI(t)}function ZN(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function Np(t){if(t instanceof St)return t.field.canonicalString()+t.op.toString()+$o(t.value);if(AI(t))return t.filters.map(e=>Np(e)).join(",");{const e=t.filters.map(n=>Np(n)).join(",");return`${t.op}(${e})`}}function xI(t,e){return t instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.field.isEqual(i.field)&&Ir(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&xI(o,i.filters[a]),!0):!1}(t,e):void ve()}function CI(t){return t instanceof St?function(n){return`${n.field.canonicalString()} ${n.op} ${$o(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(CI).join(" ,")+"}"}(t):"Filter"}class eM extends St{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class tM extends St{constructor(e,n){super(e,"in",n),this.keys=RI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nM extends St{constructor(e,n){super(e,"not-in",n),this.keys=RI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class rM extends St{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ng(n)&&kl(n.arrayValue,this.value)}}class iM extends St{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kl(this.value.arrayValue,n)}}class sM extends St{constructor(e,n){super(e,"not-in",n)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kl(this.value.arrayValue,n)}}class oM extends St{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ng(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>kl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function R_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aM(t,e,n,r,i,s,o)}function Mg(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Np(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$o(r)).join(",")),e.ue=n}return e.ue}function Og(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!C_(t.startAt,e.startAt)&&C_(t.endAt,e.endAt)}function Mp(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lM(t,e,n,r,i,s,o,a){return new Ql(t,e,n,r,i,s,o,a)}function Lg(t){return new Ql(t)}function P_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PI(t){return t.collectionGroup!==null}function el(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $t(Ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yc(s,r))}),n.has(Ft.keyField().canonicalString())||e.ce.push(new Yc(Ft.keyField(),r))}return e.ce}function wr(t){const e=we(t);return e.le||(e.le=uM(e,el(t))),e.le}function uM(t,e){if(t.limitType==="F")return R_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yc(i.field,s)});const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;return R_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Op(t,e){const n=t.filters.concat([e]);return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lp(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xd(t,e){return Og(wr(t),wr(e))&&t.limitType===e.limitType}function kI(t){return`${Mg(wr(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CI(i)).join(", ")}]`),Yd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$o(i)).join(",")),`Target(${r})`}(wr(t))}; limitType=${t.limitType})`}function Jd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):de.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of el(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=x_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,el(r),i)||r.endAt&&!function(o,a,u){const c=x_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,el(r),i))}(t,e)}function cM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bI(t){return(e,n)=>{let r=!1;for(const i of el(t)){const s=dM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dM(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Uo(u,c):ve()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=new ct(de.comparator);function Yr(){return hM}const DI=new ct(de.comparator);function Va(...t){let e=DI;for(const n of t)e=e.insert(n.key,n);return e}function NI(t){let e=DI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return tl()}function MI(){return tl()}function tl(){return new ta(t=>t.toString(),(t,e)=>t.isEqual(e))}const fM=new ct(de.comparator),pM=new $t(de.comparator);function Pe(...t){let e=pM;for(const n of t)e=e.add(n);return e}const mM=new $t(Le);function gM(){return mM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(e)?"-0":e}}function LI(t){return{integerValue:""+t}}function yM(t,e){return KN(e)?LI(e):OI(t,e)}/**
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
 */class Zd{constructor(){this._=void 0}}function vM(t,e,n){return t instanceof Xc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bg(s)&&(s=Dg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof zo?jI(t,e):t instanceof Bo?FI(t,e):function(i,s){const o=VI(i,s),a=k_(o)+k_(i.Pe);return Dp(o)&&Dp(i.Pe)?LI(a):OI(i.serializer,a)}(t,e)}function _M(t,e,n){return t instanceof zo?jI(t,e):t instanceof Bo?FI(t,e):n}function VI(t,e){return t instanceof Jc?function(r){return Dp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xc extends Zd{}class zo extends Zd{constructor(e){super(),this.elements=e}}function jI(t,e){const n=UI(e);for(const r of t.elements)n.some(i=>Ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends Zd{constructor(e){super(),this.elements=e}}function FI(t,e){let n=UI(e);for(const r of t.elements)n=n.filter(i=>!Ir(i,r));return{arrayValue:{values:n}}}class Jc extends Zd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function k_(t){return Tt(t.integerValue||t.doubleValue)}function UI(t){return Ng(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.field=e,this.transform=n}}function wM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zo&&i instanceof zo||r instanceof Bo&&i instanceof Bo?Fo(r.elements,i.elements,Ir):r instanceof Jc&&i instanceof Jc?Ir(r.Pe,i.Pe):r instanceof Xc&&i instanceof Xc}(t.transform,e.transform)}class EM{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eh{}function zI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vg(t.key,Un.none()):new Yl(t.key,t.data,Un.none());{const n=t.data,r=pn.empty();let i=new $t(Ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ki(t.key,r,new An(i.toArray()),Un.none())}}function TM(t,e,n){t instanceof Yl?function(i,s,o){const a=i.value.clone(),u=D_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ki?function(i,s,o){if(!ac(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=D_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(BI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n,r){return t instanceof Yl?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=s.value.clone(),d=N_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ki?function(s,o,a,u){if(!ac(s.precondition,o))return a;const c=N_(s.fieldTransforms,u,o),d=o.data;return d.setAll(BI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ac(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function IM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VI(r.transform,i||null);s!=null&&(n===null&&(n=pn.empty()),n.set(r.field,s))}return n||null}function b_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fo(r,i,(s,o)=>wM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yl extends eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ki extends eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function BI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function D_(t,e,n){const r=new Map;Qe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,_M(o,a,n[i]))}return r}function N_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vM(s,o,e))}return r}class Vg extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SM extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=MI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=zI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,(n,r)=>b_(n,r))&&Fo(this.baseMutations,e.baseMutations,(n,r)=>b_(n,r))}}class jg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Qe(e.mutations.length===r.length);let i=function(){return fM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new jg(e,n,r,i)}}/**
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
 */class xM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,De;function RM(t){switch(t){default:return ve();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function HI(t){if(t===void 0)return Qr("GRPC error has no .code"),B.UNKNOWN;switch(t){case wt.OK:return B.OK;case wt.CANCELLED:return B.CANCELLED;case wt.UNKNOWN:return B.UNKNOWN;case wt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case wt.INTERNAL:return B.INTERNAL;case wt.UNAVAILABLE:return B.UNAVAILABLE;case wt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case wt.NOT_FOUND:return B.NOT_FOUND;case wt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case wt.ABORTED:return B.ABORTED;case wt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case wt.DATA_LOSS:return B.DATA_LOSS;default:return ve()}}(De=wt||(wt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PM(){return new TextEncoder}/**
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
 */const kM=new fs([4294967295,4294967295],0);function M_(t){const e=PM().encode(t),n=new dI;return n.update(e),new Uint8Array(n.digest())}function O_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fs([n,r],0),new fs([i,s],0)]}class Fg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ja(`Invalid padding: ${n}`);if(r<0)throw new ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(fs.fromNumber(r)));return i.compare(kM)===1&&(i=new fs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=M_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=M_(e),[r,i]=O_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new th(_e.min(),i,new ct(Le),Yr(),Pe())}}class Xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xl(r,n,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qI{constructor(e,n){this.targetId=e,this.me=n}}class WI{constructor(e,n,r=tn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L_{constructor(){this.fe=0,this.ge=j_(),this.pe=tn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Pe(),n=Pe(),r=Pe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ve()}}),new Xl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=j_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yr(),this.qe=V_(),this.Qe=new ct(Le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Mp(s))if(r===0){const o=new de(s.path);this.Ue(n,o,Zt.newNoDocument(o,_e.min()))}else Qe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Rs(r).toUint8Array()}catch(u){if(u instanceof EI)return jo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Fg(o,i,s)}catch(u){return jo(u instanceof ja?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Mp(a.target)){const u=new de(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Zt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Pe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new th(e,n,this.Qe,this.ke,r);return this.ke=Yr(),this.qe=V_(),this.Qe=new ct(Le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new L_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $t(Le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new L_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function V_(){return new ct(de.comparator)}function j_(){return new ct(de.comparator)}const DM={asc:"ASCENDING",desc:"DESCENDING"},NM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MM={and:"AND",or:"OR"};class OM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vp(t,e){return t.useProto3Json||Yd(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LM(t,e){return Zc(t,e.toTimestamp())}function Er(t){return Qe(!!t),_e.fromTimestamp(function(n){const r=ji(n);return new Rt(r.seconds,r.nanos)}(t))}function Ug(t,e){return jp(t,e).canonicalString()}function jp(t,e){const n=function(i){return new Ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KI(t){const e=Ze.fromString(t);return Qe(ZI(e)),e}function Fp(t,e){return Ug(t.databaseId,e.path)}function af(t,e){const n=KI(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(YI(n))}function QI(t,e){return Ug(t.databaseId,e)}function VM(t){const e=KI(t);return e.length===4?Ze.emptyPath():YI(e)}function Up(t){return new Ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YI(t){return Qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function F_(t,e,n){return{name:Fp(t,e),fields:n.value.mapValue.fields}}function jM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Qe(d===void 0||typeof d=="string"),tn.fromBase64String(d||"")):(Qe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),tn.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?B.UNKNOWN:HI(c.code);return new ie(d,c.message||"")}(o);n=new WI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=Er(r.document.updateTime),o=r.document.createTime?Er(r.document.createTime):_e.min(),a=new pn({mapValue:{fields:r.document.fields}}),u=Zt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new lc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?Er(r.readTime):_e.min(),o=Zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new lc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new lc([],s,i,null)}else{if(!("filter"in e))return ve();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CM(i,s),a=r.targetId;n=new qI(a,o)}}return n}function FM(t,e){let n;if(e instanceof Yl)n={update:F_(t,e.key,e.value)};else if(e instanceof Vg)n={delete:Fp(t,e.key)};else if(e instanceof Ki)n={update:F_(t,e.key,e.data),updateMask:KM(e.fieldMask)};else{if(!(e instanceof SM))return ve();n={verify:Fp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ve()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:LM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ve()}(t,e.precondition)),n}function UM(t,e){return t&&t.length>0?(Qe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Er(i.updateTime):Er(s);return o.isEqual(_e.min())&&(o=Er(s)),new EM(o,i.transformResults||[])}(n,e))):[]}function $M(t,e){return{documents:[QI(t,e.path)]}}function zM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QI(t,i);const s=function(c){if(c.length!==0)return JI(rr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:eo(p.field),direction:qM(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Vp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function BM(t){let e=VM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=XI(f);return p instanceof rr&&AI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(w){return new Yc(to(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Yd(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,T=f.values||[];return new Qc(T,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,T=f.values||[];return new Qc(T,p)}(n.endAt)),lM(e,i,o,s,a,"F",u,c)}function HM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=to(n.unaryFilter.field);return St.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=to(n.unaryFilter.field);return St.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=to(n.unaryFilter.field);return St.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=to(n.unaryFilter.field);return St.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(t):t.fieldFilter!==void 0?function(n){return St.create(to(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>XI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(t):ve()}function qM(t){return DM[t]}function WM(t){return NM[t]}function GM(t){return MM[t]}function eo(t){return{fieldPath:t.canonicalString()}}function to(t){return Ft.fromServerFormat(t.fieldPath)}function JI(t){return t instanceof St?function(n){if(n.op==="=="){if(A_(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(S_(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A_(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(S_(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:WM(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>JI(i));return r.length===1?r[0]:{compositeFilter:{op:GM(n.op),filters:r}}}(t):ve()}function KM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,i,s=_e.min(),o=_e.min(),a=tn.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.ct=e}}function YM(t){const e=BM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this._n=new JM}addToCollectionParentIndex(e,n){return this._n.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Vi.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class JM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $t(Ze.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $t(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ho(0)}static Ln(){return new Ho(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.changes=new ta(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nl(r.mutation,i,An.empty(),Rt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Pe()){const i=us();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Va();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yr();const o=tl(),a=function(){return tl()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ki)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),nl(d.mutation,c,d.mutation.getFieldMask(),Rt.now())):o.set(c.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new eO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=tl();let i=new ct((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||An.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||Pe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=MI();d.forEach(p=>{if(!s.has(p)){const T=zI(n.get(p),r.get(p));T!==null&&f.set(p,T),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):W.resolve(us());let a=-1,u=s;return o.next(c=>W.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?W.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Pe())).next(d=>({batchId:a,changes:NI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let i=Va();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Va();return this.indexManager.getCollectionParents(e,s).next(a=>W.forEach(a,u=>{const c=function(f,p){return new Ql(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Zt.newInvalidDocument(d)))});let a=Va();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&nl(d.mutation,c,An.empty(),Rt.now()),Jd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return W.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Er(i.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:YM(i.bundledQuery),readTime:Er(i.readTime)}}(n)),W.resolve()}}/**
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
 */class rO{constructor(){this.overlays=new ct(de.comparator),this.hr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return W.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const i=us(),s=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return W.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=us(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=us(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return W.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xM(n,r));let s=this.hr.get(n);s===void 0&&(s=Pe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Pr=new $t(Pt.Ir),this.Tr=new $t(Pt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Pt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Pt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new de(new Ze([])),r=new Pt(n,e),i=new Pt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new de(new Ze([])),r=new Pt(n,e),i=new Pt(n,e+1);let s=Pe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return de.comparator(e.key,n.key)||Le(e.pr,n.pr)}static Er(e,n){return Le(e.pr,n.pr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new $t(Pt.Ir)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return W.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pt(n,0),i=new Pt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),W.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $t(Le);return n.forEach(i=>{const s=new Pt(i,0),o=new Pt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),W.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;de.isDocumentKey(s)||(s=s.child(""));const o=new Pt(new de(s),0);let a=new $t(Le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),W.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return W.forEach(n.mutations,i=>{const s=new Pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Pt(n,0),i=this.wr.firstAfterOrEqual(r);return W.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.vr=e,this.docs=function(){return new ct(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let r=Yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Zt.newInvalidDocument(i))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yr();const o=n.path,a=new de(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||HN(BN(d),r)<=0||(i.has(d.key)||Jd(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return W.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ve()}Fr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oO(this)}getSize(e){return W.resolve(this.size)}}class oO extends ZM{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.persistence=e,this.Mr=new ta(n=>Mg(n),Og),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Or=0,this.Nr=new $g,this.targetCount=0,this.Lr=Ho.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),W.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ho(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.qn(n),W.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),W.waitFor(s).next(()=>i)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),W.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n){this.Br={},this.overlays={},this.kr=new kg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new aO(this),this.indexManager=new XM,this.remoteDocumentCache=function(i){return new sO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new QM(n),this.$r=new nO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new iO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const i=new uO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return W.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class uO extends WN{constructor(e){super(),this.currentSequenceNumber=e}}class zg{constructor(e){this.persistence=e,this.zr=new $g,this.jr=null}static Hr(e){return new zg(e)}get Jr(){if(this.jr)return this.jr;throw ve()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),W.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Jr,r=>{const i=de.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,_e.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return W.or([()=>W.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bg(e,n.fromCache,r,i)}}/**
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
 */class cO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return rb()?8:GN(Bt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Ra()<=ke.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Zs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),W.resolve()):(Ra()<=ke.DEBUG&&se("QueryEngine","Query:",Zs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ra()<=ke.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Zs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(n))):W.resolve())}ji(e,n){if(P_(n))return W.resolve(null);let r=wr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lp(n,null,"F"),r=wr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Pe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,Lp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return P_(n)||i.isEqual(_e.min())?W.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?W.resolve(null):(Ra()<=ke.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(n)),this.es(e,o,n,zN(i,-1)).next(a=>a))})}Zi(e,n){let r=new $t(bI(e));return n.forEach((i,s)=>{Jd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Ra()<=ke.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Zs(n)),this.zi.getDocumentsMatchingQuery(e,n,Vi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ct(Le),this.rs=new ta(s=>Mg(s),Og),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function fO(t,e,n,r){return new hO(t,e,n,r)}async function eS(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function pO(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let T=W.resolve();return p.forEach(w=>{T=T.next(()=>d.getEntry(u,w)).next(x=>{const P=c.docVersions.get(w);Qe(P!==null),x.version.compareTo(P)<0&&(f.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),T.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tS(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function mO(t,e){const n=we(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let T=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(tn.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(f,T),function(x,P,_){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,T,d)&&a.push(n.Qr.updateTargetData(s,T))});let u=Yr(),c=Pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(gO(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(_e.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return W.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function gO(t,e,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(_e.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):se("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function yO(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vO(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,W.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function $p(t,e,n){const r=we(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kl(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function U_(t,e,n){const r=we(t);let i=_e.min(),s=Pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=we(u),p=f.rs.get(d);return p!==void 0?W.resolve(f.ns.get(p)):f.Qr.getTargetData(c,d)}(r,o,wr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:_e.min(),n?s:Pe())).next(a=>(_O(r,cM(e),a),{documents:a,hs:s})))}function _O(t,e,n){let r=t.ss.get(e)||_e.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class $_{constructor(){this.activeTargetIds=gM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wO{constructor(){this.no=new $_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new $_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Uu=null;function lf(){return Uu===null?Uu=function(){return 268435456+Math.round(2147483648*Math.random())}():Uu++,"0x"+Uu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class SO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=lf(),u=this.vo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(se("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw jo("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ea}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=TO[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=lf();return new Promise((o,a)=>{const u=new hI;u.setWithCredentials(!0),u.listenOnce(pI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sc.NO_ERROR:const d=u.getResponseJson();se(Qt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case sc.TIMEOUT:se(Qt,`RPC '${e}' ${s} timed out`),a(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const f=u.getStatus();if(se(Qt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const T=p==null?void 0:p.error;if(T&&T.status&&T.message){const w=function(P){const _=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(_)>=0?_:B.UNKNOWN}(T.status);a(new ie(w,T.message))}else a(new ie(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new ie(B.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{se(Qt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);se(Qt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=lf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yI(),a=gI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new fI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");se(Qt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,T=!1;const w=new IO({lo:P=>{T?se(Qt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(se(Qt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),se(Qt,`RPC '${e}' stream ${i} sending:`,P),f.send(P))},ho:()=>f.close()}),x=(P,_,v)=>{P.listen(_,C=>{try{v(C)}catch(D){setTimeout(()=>{throw D},0)}})};return x(f,La.EventType.OPEN,()=>{T||(se(Qt,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),x(f,La.EventType.CLOSE,()=>{T||(T=!0,se(Qt,`RPC '${e}' stream ${i} transport closed`),w.po())}),x(f,La.EventType.ERROR,P=>{T||(T=!0,jo(Qt,`RPC '${e}' stream ${i} transport errored:`,P),w.po(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),x(f,La.EventType.MESSAGE,P=>{var _;if(!T){const v=P.data[0];Qe(!!v);const C=v,D=C.error||((_=C[0])===null||_===void 0?void 0:_.error);if(D){se(Qt,`RPC '${e}' stream ${i} received error:`,D);const j=D.status;let $=function(A){const R=wt[A];if(R!==void 0)return HI(R)}(j),y=D.message;$===void 0&&($=B.INTERNAL,y="Unknown error status: "+j+" with message "+D.message),T=!0,w.po(new ie($,y)),f.close()}else se(Qt,`RPC '${e}' stream ${i} received:`,v),w.yo(v)}}),x(a,mI.STAT_EVENT,P=>{P.stat===kp.PROXY?se(Qt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===kp.NOPROXY&&se(Qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){return new OM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&se("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new nS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Qr(n.toString()),Qr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ie(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AO extends rS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=jM(this.serializer,e),r=function(s){if(!("targetChange"in s))return _e.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Er(o.readTime):_e.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Up(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Mp(u)?{documents:$M(s,u)}:{query:zM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GI(s,o.resumeToken);const c=Vp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=Zc(s,o.snapshotVersion.toTimestamp());const c=Vp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=HM(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Up(this.serializer),n.removeTarget=e,this.i_(n)}}class xO extends rS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=UM(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.A_(r,n)}return Qe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Up(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FM(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,jp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(B.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,jp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(B.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Qr(n),this.y_=!1):se("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Fs(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=we(u);c.M_.add(4),await Jl(c),c.N_.set("Unknown"),c.M_.delete(4),await rh(c)}(this))})}),this.N_=new RO(r,i)}}async function rh(t){if(Fs(t))for(const e of t.x_)await e(!0)}async function Jl(t){for(const e of t.x_)await e(!1)}function iS(t,e){const n=we(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Gg(n)?Wg(n):na(n).Xo()&&qg(n,e))}function Hg(t,e){const n=we(t),r=na(n);n.F_.delete(e),r.Xo()&&sS(n,e),n.F_.size===0&&(r.Xo()?r.n_():Fs(n)&&n.N_.set("Unknown"))}function qg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}na(t).P_(e)}function sS(t,e){t.L_.xe(e),na(t).I_(e)}function Wg(t){t.L_=new bM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),na(t).start(),t.N_.w_()}function Gg(t){return Fs(t)&&!na(t).Zo()&&t.F_.size>0}function Fs(t){return we(t).M_.size===0}function oS(t){t.L_=void 0}async function kO(t){t.N_.set("Online")}async function bO(t){t.F_.forEach((e,n)=>{qg(t,e)})}async function DO(t,e){oS(t),Gg(t)?(t.N_.D_(e),Wg(t)):t.N_.set("Unknown")}async function NO(t,e,n){if(t.N_.set("Online"),e instanceof WI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ed(t,r)}else if(e instanceof lc?t.L_.Ke(e):e instanceof qI?t.L_.He(e):t.L_.We(e),!n.isEqual(_e.min()))try{const r=await tS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(tn.EMPTY_BYTE_STRING,d.snapshotVersion)),sS(s,u);const f=new Ei(d.target,u,c,d.sequenceNumber);qg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await ed(t,r)}}async function ed(t,e,n){if(!Kl(e))throw e;t.M_.add(1),await Jl(t),t.N_.set("Offline"),n||(n=()=>tS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await rh(t)})}function aS(t,e){return e().catch(n=>ed(t,n,e))}async function ih(t){const e=we(t),n=Fi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;MO(e);)try{const i=await yO(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,OO(e,i)}catch(i){await ed(e,i)}lS(e)&&uS(e)}function MO(t){return Fs(t)&&t.v_.length<10}function OO(t,e){t.v_.push(e);const n=Fi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function lS(t){return Fs(t)&&!Fi(t).Zo()&&t.v_.length>0}function uS(t){Fi(t).start()}async function LO(t){Fi(t).V_()}async function VO(t){const e=Fi(t);for(const n of t.v_)e.d_(n.mutations)}async function jO(t,e,n){const r=t.v_.shift(),i=jg.from(r,e,n);await aS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ih(t)}async function FO(t,e){e&&Fi(t).E_&&await async function(r,i){if(function(o){return RM(o)&&o!==B.ABORTED}(i.code)){const s=r.v_.shift();Fi(r).t_(),await aS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ih(r)}}(t,e),lS(t)&&uS(t)}async function B_(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=Fs(n);n.M_.add(3),await Jl(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await rh(n)}async function UO(t,e){const n=we(t);e?(n.M_.delete(2),await rh(n)):e||(n.M_.add(2),await Jl(n),n.N_.set("Unknown"))}function na(t){return t.B_||(t.B_=function(n,r,i){const s=we(n);return s.f_(),new AO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:kO.bind(null,t),To:bO.bind(null,t),Ao:DO.bind(null,t),h_:NO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Gg(t)?Wg(t):t.N_.set("Unknown")):(await t.B_.stop(),oS(t))})),t.B_}function Fi(t){return t.k_||(t.k_=function(n,r,i){const s=we(n);return s.f_(),new xO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:LO.bind(null,t),Ao:FO.bind(null,t),R_:VO.bind(null,t),A_:jO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ih(t)):(await t.k_.stop(),t.v_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Kg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qg(t,e){if(Qr("AsyncQueue",`${e}: ${t}`),Kl(t))return new ie(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Va(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.q_=new ct(de.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ve():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qo(e,n,Ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class zO{constructor(){this.queries=new ta(e=>kI(e),Xd),this.onlineState="Unknown",this.z_=new Set}}async function cS(t,e){const n=we(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new $O,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qg(o,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Yg(n)}async function dS(t,e){const n=we(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BO(t,e){const n=we(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Yg(n)}function HO(t,e,n){const r=we(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Yg(t){t.z_.forEach(e=>{e.next()})}var zp,q_;(q_=zp||(zp={})).J_="default",q_.Cache="cache";class hS{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==zp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.key=e}}class pS{constructor(e){this.key=e}}class qO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Pe(),this.mutatedKeys=Pe(),this.Ia=bI(e),this.Ta=new Ro(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new H_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),T=Jd(this.query,f)?f:null,w=!!p&&this.mutatedKeys.has(p.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;p&&T?p.data.isEqual(T.data)?w!==x&&(r.track({type:3,doc:T}),P=!0):this.Ra(p,T)||(r.track({type:2,doc:T}),P=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(a=!0)):!p&&T?(r.track({type:0,doc:T}),P=!0):p&&!T&&(r.track({type:1,doc:p}),P=!0,(u||c)&&(a=!0)),P&&(T?(o=o.add(T),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(T,w){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return x(T)-x(w)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new qo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new H_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Pe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new pS(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new fS(r))}),n}pa(e){this.la=e.hs,this.Pa=Pe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return qo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class WO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GO{constructor(e){this.key=e,this.wa=!1}}class KO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ta(a=>kI(a),Xd),this.Da=new Map,this.Ca=new Set,this.va=new ct(de.comparator),this.Fa=new Map,this.Ma=new $g,this.xa={},this.Oa=new Map,this.Na=Ho.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function QO(t,e,n=!0){const r=wS(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await mS(r,e,n,!0),i}async function YO(t,e){const n=wS(t);await mS(n,e,!0,!1)}async function mS(t,e,n,r){const i=await vO(t.localStore,wr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await XO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iS(t.remoteStore,i),a}async function XO(t,e,n,r,i){t.Ba=(f,p,T)=>async function(x,P,_,v){let C=P.view.da(_);C.Xi&&(C=await U_(x.localStore,P.query,!1).then(({documents:y})=>P.view.da(y,C)));const D=v&&v.targetChanges.get(P.targetId),j=v&&v.targetMismatches.get(P.targetId)!=null,$=P.view.applyChanges(C,x.isPrimaryClient,D,j);return G_(x,P.targetId,$.fa),$.snapshot}(t,f,p,T);const s=await U_(t.localStore,e,!0),o=new qO(e,s.hs),a=o.da(s.documents),u=Xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);G_(t,n,c.fa);const d=new WO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function JO(t,e,n){const r=we(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Xd(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $p(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Hg(r.remoteStore,i.targetId),Bp(r,i.targetId)}).catch(Gl)):(Bp(r,i.targetId),await $p(r.localStore,i.targetId,!0))}async function ZO(t,e){const n=we(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hg(n.remoteStore,r.targetId))}async function eL(t,e,n){const r=aL(t);try{const i=await function(o,a){const u=we(o),c=Rt.now(),d=a.reduce((T,w)=>T.add(w.key),Pe());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let w=Yr(),x=Pe();return u.os.getEntries(T,d).next(P=>{w=P,w.forEach((_,v)=>{v.isValidDocument()||(x=x.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,w)).next(P=>{f=P;const _=[];for(const v of a){const C=IM(v,f.get(v.key).overlayedDocument);C!=null&&_.push(new Ki(v.key,C,TI(C.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,_,a)}).next(P=>{p=P;const _=P.applyToLocalDocumentSet(f,x);return u.documentOverlayCache.saveOverlays(T,P.batchId,_)})}).then(()=>({batchId:p.batchId,changes:NI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ct(Le)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Zl(r,i.changes),await ih(r.remoteStore)}catch(i){const s=Qg(i,"Failed to persist write");n.reject(s)}}async function gS(t,e){const n=we(t);try{const r=await mO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Qe(o.wa):i.removedDocuments.size>0&&(Qe(o.wa),o.wa=!1))}),await Zl(n,r,e)}catch(r){await Gl(r)}}function W_(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=we(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.U_)p.j_(a)&&(c=!0)}),c&&Yg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tL(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ct(de.comparator);o=o.insert(s,Zt.newNoDocument(s,_e.min()));const a=Pe().add(s),u=new th(_e.min(),new Map,new ct(Le),o,a);await gS(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Xg(r)}else await $p(r.localStore,e,!1).then(()=>Bp(r,e,n)).catch(Gl)}async function nL(t,e){const n=we(t),r=e.batch.batchId;try{const i=await pO(n.localStore,e);vS(n,r,null),yS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zl(n,i)}catch(i){await Gl(i)}}async function rL(t,e,n){const r=we(t);try{const i=await function(o,a){const u=we(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Qe(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);vS(r,e,n),yS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zl(r,i)}catch(i){await Gl(i)}}function yS(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function vS(t,e,n){const r=we(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||_S(t,r)})}function _S(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Hg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Xg(t))}function G_(t,e,n){for(const r of n)r instanceof fS?(t.Ma.addReference(r.key,e),iL(t,r)):r instanceof pS?(se("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||_S(t,r.key)):ve()}function iL(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(se("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Xg(t))}function Xg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new de(Ze.fromString(e)),r=t.Na.next();t.Fa.set(r,new GO(n)),t.va=t.va.insert(n,r),iS(t.remoteStore,new Ei(wr(Lg(n.path)),r,"TargetPurposeLimboResolution",kg.oe))}}async function Zl(t,e,n){const r=we(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Bg.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=we(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>W.forEach(c,p=>W.forEach(p.qi,T=>d.persistence.referenceDelegate.addReference(f,p.targetId,T)).next(()=>W.forEach(p.Qi,T=>d.persistence.referenceDelegate.removeReference(f,p.targetId,T)))))}catch(f){if(!Kl(f))throw f;se("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const T=d.ns.get(p),w=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(w);d.ns=d.ns.insert(p,x)}}}(r.localStore,s))}async function sL(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await eS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new ie(B.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zl(n,r.us)}}function oL(t,e){const n=we(t),r=n.Fa.get(e);if(r&&r.wa)return Pe().add(r.key);{let i=Pe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function wS(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tL.bind(null,e),e.Sa.h_=BO.bind(null,e.eventManager),e.Sa.ka=HO.bind(null,e.eventManager),e}function aL(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rL.bind(null,e),e}class K_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fO(this.persistence,new dO,e.initialUser,this.serializer)}createPersistence(e){return new lO(zg.Hr,this.serializer)}createSharedClientState(e){return new wO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>W_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sL.bind(null,this.syncEngine),await UO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zO}()}createDatastore(e){const n=nh(e.databaseInfo.databaseId),r=function(s){return new SO(s)}(e.databaseInfo);return function(s,o,a,u){return new CO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new PO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>W_(this.syncEngine,n,0),function(){return z_.D()?new z_:new EO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new KO(i,s,o,a,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=we(r);se("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Jl(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ES{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Qr("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=_I.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{se("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(se("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dL(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>B_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>B_(e.remoteStore,i)),t._onlineComponents=e}function cL(t){return t.name==="FirebaseError"?t.code===B.FAILED_PRECONDITION||t.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cL(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new K_)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new K_);return t._offlineComponents}async function TS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Q_(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Q_(t,new lL))),t._onlineComponents}function hL(t){return TS(t).then(e=>e.syncEngine)}async function IS(t){const e=await TS(t),n=e.eventManager;return n.onListen=QO.bind(null,e.syncEngine),n.onUnlisten=JO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZO.bind(null,e.syncEngine),n}function fL(t,e,n={}){const r=new zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new ES({next:p=>{o.enqueueAndForget(()=>dS(s,f));const T=p.docs.has(a);!T&&p.fromCache?c.reject(new ie(B.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&p.fromCache&&u&&u.source==="server"?c.reject(new ie(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new hS(Lg(a.path),d,{includeMetadataChanges:!0,ra:!0});return cS(s,f)}(await IS(t),t.asyncQueue,e,n,r)),r.promise}function pL(t,e,n={}){const r=new zr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new ES({next:p=>{o.enqueueAndForget(()=>dS(s,f)),p.fromCache&&u.source==="server"?c.reject(new ie(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new hS(a,d,{includeMetadataChanges:!0,ra:!0});return cS(s,f)}(await IS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function SS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function AS(t,e,n){if(!n)throw new ie(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mL(t,e,n,r){if(e===!0&&r===!0)throw new ie(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function X_(t){if(!de.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function J_(t){if(de.isDocumentKey(t))throw new ie(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve()}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sh(t);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NN;switch(r.type){case"firstParty":return new VN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Y_.get(n);r&&(se("ComponentProvider","Removing Datastore"),Y_.delete(n),r.terminate())}(this),Promise.resolve()}}function gL(t,e,n,r={}){var i;const s=(t=ir(t,oh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Xt.MOCK_USER;else{a=Jk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xt(c)}t._authCredentials=new MN(new vI(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ra(this.firestore,e,this._query)}}class ln{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ln(this.firestore,e,this._key)}}class Ni extends ra{constructor(e,n,r){super(e,n,Lg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ln(this.firestore,null,new de(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function Bn(t,e,...n){if(t=Dt(t),AS("collection","path",e),t instanceof oh){const r=Ze.fromString(e,...n);return J_(r),new Ni(t,null,r)}{if(!(t instanceof ln||t instanceof Ni))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return J_(r),new Ni(t.firestore,null,r)}}function on(t,e,...n){if(t=Dt(t),arguments.length===1&&(e=_I.newId()),AS("doc","path",e),t instanceof oh){const r=Ze.fromString(e,...n);return X_(r),new ln(t,null,new de(r))}{if(!(t instanceof ln||t instanceof Ni))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ze.fromString(e,...n));return X_(r),new ln(t.firestore,t instanceof Ni?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new nS(this,"async_queue_retry"),this.hu=()=>{const n=uf();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=uf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new zr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Kl(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Kg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ve()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Us extends oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new yL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xS(this),this._firestoreClient.terminate()}}function vL(t,e){const n=typeof t=="object"?t:_g(),r=typeof t=="string"?t:"(default)",i=Ls(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Yk("firestore");s&&gL(i,...s)}return i}function Jg(t){return t._firestoreClient||xS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new YN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,SS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new uL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wo(tn.fromBase64String(e))}catch(n){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wo(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function _L(){return new eu("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL=/^__.*__$/;class EL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ki(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yl(e,this.data,n,this.fieldTransforms)}}class CS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ki(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function RS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class ah{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return td(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(RS(this.fu)&&wL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class TL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nh(e)}Fu(e,n,r,i=!1){return new ah({fu:e,methodName:n,vu:r,path:Ft.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lh(t){const e=t._freezeSettings(),n=nh(t._databaseId);return new TL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PS(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);ny("Data must be an object, but it was:",o,r);const a=bS(r,o);let u,c;if(s.merge)u=new An(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=Hp(e,f,n);if(!o.contains(p))throw new ie(B.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);NS(d,p)||d.push(p)}u=new An(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new EL(new pn(a),u,c)}class uh extends tu{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}function kS(t,e,n){return new ah({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ey extends tu{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=kS(this,e,!0),r=this.Mu.map(s=>$s(s,n)),i=new zo(r);return new $I(e.path,i)}isEqual(e){return e instanceof ey&&Is(this.Mu,e.Mu)}}class ty extends tu{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=kS(this,e,!0),r=this.Mu.map(s=>$s(s,n)),i=new Bo(r);return new $I(e.path,i)}isEqual(e){return e instanceof ty&&Is(this.Mu,e.Mu)}}function IL(t,e,n,r){const i=t.Fu(1,e,n);ny("Data must be an object, but it was:",i,r);const s=[],o=pn.empty();js(r,(u,c)=>{const d=ry(e,u,n);c=Dt(c);const f=i.Su(d);if(c instanceof uh)s.push(d);else{const p=$s(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new An(s);return new CS(o,a,i.fieldTransforms)}function SL(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Hp(e,r,n)],u=[i];if(s.length%2!=0)throw new ie(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Hp(e,s[p])),u.push(s[p+1]);const c=[],d=pn.empty();for(let p=a.length-1;p>=0;--p)if(!NS(c,a[p])){const T=a[p];let w=u[p];w=Dt(w);const x=o.Su(T);if(w instanceof uh)c.push(T);else{const P=$s(w,x);P!=null&&(c.push(T),d.set(T,P))}}const f=new An(c);return new CS(d,f,o.fieldTransforms)}function AL(t,e,n,r=!1){return $s(n,t.Fu(r?4:3,e))}function $s(t,e){if(DS(t=Dt(t)))return ny("Unsupported field value:",e,t),bS(t,e);if(t instanceof tu)return function(r,i){if(!RS(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=$s(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Rt.fromDate(r);return{timestampValue:Zc(i.serializer,s)}}if(r instanceof Rt){const s=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(i.serializer,s)}}if(r instanceof Zg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wo)return{bytesValue:GI(i.serializer,r._byteString)};if(r instanceof ln){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ug(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${sh(r)}`)}(t,e)}function bS(t,e){const n={};return wI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(r,i)=>{const s=$s(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function DS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof Zg||t instanceof Wo||t instanceof ln||t instanceof tu)}function ny(t,e,n){if(!DS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Hp(t,e,n){if((e=Dt(e))instanceof eu)return e._internalPath;if(typeof e=="string")return ry(t,e);throw td("Field path arguments must be of type string or ",t,!1,void 0,n)}const xL=new RegExp("[~\\*/\\[\\]]");function ry(t,e,n){if(e.search(xL)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eu(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function td(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ie(B.INVALID_ARGUMENT,a+t+u)}function NS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CL extends MS{data(){return super.data()}}function iy(t,e){return typeof e=="string"?ry(t,e):e instanceof eu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sy{}class PL extends sy{}function zs(t,e,...n){let r=[];e instanceof sy&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ru).length,a=s.filter(u=>u instanceof nu).length;if(o>1||o>0&&a>0)throw new ie(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class nu extends PL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nu(e,n,r)}_apply(e){const n=this._parse(e);return OS(e._query,n),new ra(e.firestore,e.converter,Op(e._query,n))}_parse(e){const n=lh(e.firestore);return function(s,o,a,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ie(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tw(f,d);const T=[];for(const w of f)T.push(ew(u,s,w));p={arrayValue:{values:T}}}else p=ew(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tw(f,d),p=AL(a,o,f,d==="in"||d==="not-in");return St.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ui(t,e,n){const r=e,i=iy("where",t);return nu._create(i,r,n)}class ru extends sy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ru(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)OS(o,u),o=Op(o,u)}(e._query,n),new ra(e.firestore,e.converter,Op(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kL(...t){return t.forEach(e=>bL("and",e)),ru._create("and",t)}function ew(t,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new ie(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!PI(e)&&n.indexOf("/")!==-1)throw new ie(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ze.fromString(n));if(!de.isDocumentKey(r))throw new ie(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I_(t,new de(r))}if(n instanceof ln)return I_(t,n._key);throw new ie(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sh(n)}.`)}function tw(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function bL(t,e){if(!(e instanceof nu||e instanceof ru))throw new ie(B.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class DL{convertValue(e,n="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zg(Tt(e.latitude),Tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Rl(e));default:return null}}convertTimestamp(e){const n=ji(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ze.fromString(e);Qe(ZI(r));const i=new Pl(r.get(1),r.get(3)),s=new de(r.popFirst(5));return i.isEqual(n)||Qr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VS extends MS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uc extends VS{data(e={}){return super.data(e)}}class NL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new Fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:ML(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ML(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){t=ir(t,ln);const e=ir(t.firestore,Us);return fL(Jg(e),t._key).then(n=>LL(e,t,n))}class jS extends DL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ln(this.firestore,null,n)}}function Sr(t){t=ir(t,ra);const e=ir(t.firestore,Us),n=Jg(e),r=new jS(e);return RL(t._query),pL(n,t._query).then(i=>new NL(e,r,t,i))}function OL(t,e,n){t=ir(t,ln);const r=ir(t.firestore,Us),i=LS(t.converter,e);return ch(r,[PS(lh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Un.none())])}function Mi(t,e,n,...r){t=ir(t,ln);const i=ir(t.firestore,Us),s=lh(i);let o;return o=typeof(e=Dt(e))=="string"||e instanceof eu?SL(s,"updateDoc",t._key,e,n,r):IL(s,"updateDoc",t._key,e),ch(i,[o.toMutation(t._key,Un.exists(!0))])}function FS(t){return ch(ir(t.firestore,Us),[new Vg(t._key,Un.none())])}function ay(t,e){const n=ir(t.firestore,Us),r=on(t),i=LS(t.converter,e);return ch(n,[PS(lh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function ch(t,e){return function(r,i){const s=new zr;return r.asyncQueue.enqueueAndForget(async()=>eL(await hL(r),i,s)),s.promise}(Jg(t),e)}function LL(t,e,n){const r=n.docs.get(e._key),i=new jS(t);return new VS(t,i,e._key,r,new Fa(n.hasPendingWrites,n.fromCache),e.converter)}function bl(...t){return new ey("arrayUnion",t)}function rl(...t){return new ty("arrayRemove",t)}(function(e,n=!0){(function(i){ea=i})(Jo),Tr(new tr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Us(new ON(r.getProvider("auth-internal")),new FN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(__,"4.6.3",e),Fn(__,"4.6.3","esm2017")})();var VL="firebase",jL="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(VL,jL,"app");const US="@firebase/installations",ly="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=1e4,zS=`w:${ly}`,BS="FIS_v2",FL="https://firebaseinstallations.googleapis.com/v1",UL=60*60*1e3,$L="installations",zL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new Os($L,zL,BL);function HS(t){return t instanceof sr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS({projectId:t}){return`${FL}/projects/${t}/installations`}function WS(t){return{token:t.token,requestStatus:2,expiresIn:qL(t.expiresIn),creationTime:Date.now()}}async function GS(t,e){const r=(await e.json()).error;return ks.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function KS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function HL(t,{refreshToken:e}){const n=KS(t);return n.append("Authorization",WL(e)),n}async function QS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qL(t){return Number(t.replace("s","000"))}function WL(t){return`${BS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qS(t),i=KS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:BS,appId:t.appId,sdkVersion:zS},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await QS(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:WS(c.authToken)}}else throw await GS("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL=/^[cdef][\w-]{21}$/,qp="";function YL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XL(t);return QL.test(n)?n:qp}catch{return qp}}function XL(t){return KL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=new Map;function JS(t,e){const n=dh(t);ZS(n,e),JL(n,e)}function ZS(t,e){const n=XS.get(t);if(n)for(const r of n)r(e)}function JL(t,e){const n=ZL();n&&n.postMessage({key:t,fid:e}),eV()}let cs=null;function ZL(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=t=>{ZS(t.data.key,t.data.fid)}),cs}function eV(){XS.size===0&&cs&&(cs.close(),cs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV="firebase-installations-database",nV=1,bs="firebase-installations-store";let df=null;function uy(){return df||(df=CT(tV,nV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bs)}}})),df}async function nd(t,e){const n=dh(t),i=(await uy()).transaction(bs,"readwrite"),s=i.objectStore(bs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&JS(t,e.fid),e}async function eA(t){const e=dh(t),r=(await uy()).transaction(bs,"readwrite");await r.objectStore(bs).delete(e),await r.done}async function hh(t,e){const n=dh(t),i=(await uy()).transaction(bs,"readwrite"),s=i.objectStore(bs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&JS(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t){let e;const n=await hh(t.appConfig,r=>{const i=rV(r),s=iV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===qp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rV(t){const e=t||{fid:YL(),registrationStatus:0};return tA(e)}function iV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oV(t)}:{installationEntry:e}}async function sV(t,e){try{const n=await GL(t,e);return nd(t.appConfig,n)}catch(n){throw HS(n)&&n.customData.serverCode===409?await eA(t.appConfig):await nd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oV(t){let e=await nw(t.appConfig);for(;e.registrationStatus===1;)await YS(100),e=await nw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cy(t);return r||n}return e}function nw(t){return hh(t,e=>{if(!e)throw ks.create("installation-not-found");return tA(e)})}function tA(t){return aV(t)?{fid:t.fid,registrationStatus:0}:t}function aV(t){return t.registrationStatus===1&&t.registrationTime+$S<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lV({appConfig:t,heartbeatServiceProvider:e},n){const r=uV(t,n),i=HL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:zS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await QS(()=>fetch(r,a));if(u.ok){const c=await u.json();return WS(c)}else throw await GS("Generate Auth Token",u)}function uV(t,{fid:e}){return`${qS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e=!1){let n;const r=await hh(t.appConfig,s=>{if(!nA(s))throw ks.create("not-registered");const o=s.authToken;if(!e&&hV(o))return s;if(o.requestStatus===1)return n=cV(t,e),s;{if(!navigator.onLine)throw ks.create("app-offline");const a=pV(s);return n=dV(t,a),a}});return n?await n:r.authToken}async function cV(t,e){let n=await rw(t.appConfig);for(;n.authToken.requestStatus===1;)await YS(100),n=await rw(t.appConfig);const r=n.authToken;return r.requestStatus===0?dy(t,e):r}function rw(t){return hh(t,e=>{if(!nA(e))throw ks.create("not-registered");const n=e.authToken;return mV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dV(t,e){try{const n=await lV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nd(t.appConfig,r),n}catch(n){if(HS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nd(t.appConfig,r)}throw n}}function nA(t){return t!==void 0&&t.registrationStatus===2}function hV(t){return t.requestStatus===2&&!fV(t)}function fV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UL}function pV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mV(t){return t.requestStatus===1&&t.requestTime+$S<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gV(t){const e=t,{installationEntry:n,registrationPromise:r}=await cy(e);return r?r.catch(console.error):dy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yV(t,e=!1){const n=t;return await vV(n),(await dy(n,e)).token}async function vV(t){const{registrationPromise:e}=await cy(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t){if(!t||!t.options)throw hf("App Configuration");if(!t.name)throw hf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hf(t){return ks.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="installations",wV="installations-internal",EV=t=>{const e=t.getProvider("app").getImmediate(),n=_V(e),r=Ls(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TV=t=>{const e=t.getProvider("app").getImmediate(),n=Ls(e,rA).getImmediate();return{getId:()=>gV(n),getToken:i=>yV(n,i)}};function IV(){Tr(new tr(rA,EV,"PUBLIC")),Tr(new tr(wV,TV,"PRIVATE"))}IV();Fn(US,ly);Fn(US,ly,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="analytics",SV="firebase_id",AV="origin",xV=60*1e3,CV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new qd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Cn=new Os("analytics","Analytics",RV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(t){if(!t.startsWith(hy)){const e=Cn.create("invalid-gtag-resource",{gtagURL:t});return _n.warn(e.message),""}return t}function iA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function bV(t,e){const n=kV("firebase-js-sdk-policy",{createScriptURL:PV}),r=document.createElement("script"),i=`${hy}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function DV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function NV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await iA(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){_n.error(a)}t("config",i,s)}async function MV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await iA(n);for(const u of o){const c=a.find(f=>f.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_n.error(s)}}function OV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await MV(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await NV(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){_n.error(a)}}return i}function LV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=OV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function VV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hy)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=30,FV=1e3;class UV{constructor(e={},n=FV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sA=new UV;function $V(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function zV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:$V(r)},s=CV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Cn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function BV(t,e=sA,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Cn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Cn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new WV;return setTimeout(async()=>{a.abort()},xV),oA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function oA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=sA){var s;const{appId:o,measurementId:a}=t;try{await HV(r,e)}catch(u){if(a)return _n.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await zV(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!qV(c)){if(i.deleteThrottleMetadata(o),a)return _n.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?z0(n,i.intervalMillis,jV):z0(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),_n.debug(`Calling attemptFetch again in ${d} millis`),oA(t,f,r,i)}}function HV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qV(t){if(!(t instanceof sr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class WV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function GV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KV(){if(gg())try{await yg()}catch(t){return _n.warn(Cn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _n.warn(Cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QV(t,e,n,r,i,s,o){var a;const u=BV(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&_n.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>_n.error(T)),e.push(u);const c=KV().then(T=>{if(T)return r.getId()}),[d,f]=await Promise.all([u,c]);VV(s)||bV(s,d.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[AV]="firebase",p.update=!0,f!=null&&(p[SV]=f),i("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e){this.app=e}_delete(){return delete il[this.app.options.appId],Promise.resolve()}}let il={},iw=[];const sw={};let ff="dataLayer",XV="gtag",ow,aA,aw=!1;function JV(){const t=[];if(mg()&&t.push("This is a browser extension environment."),ST()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Cn.create("invalid-analytics-context",{errorInfo:e});_n.warn(n.message)}}function ZV(t,e,n){JV();const r=t.options.appId;if(!r)throw Cn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_n.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Cn.create("no-api-key");if(il[r]!=null)throw Cn.create("already-exists",{id:r});if(!aw){DV(ff);const{wrappedGtag:s,gtagCore:o}=LV(il,iw,sw,ff,XV);aA=s,ow=o,aw=!0}return il[r]=QV(t,iw,sw,e,ow,ff,n),new YV(t)}function e4(t=_g()){t=Dt(t);const e=Ls(t,rd);return e.isInitialized()?e.getImmediate():t4(t)}function t4(t,e={}){const n=Ls(t,rd);if(n.isInitialized()){const i=n.getImmediate();if(Is(e,n.getOptions()))return i;throw Cn.create("already-initialized")}return n.initialize({options:e})}async function n4(){if(mg()||!ST()||!gg())return!1;try{return await yg()}catch{return!1}}function r4(t,e,n,r){t=Dt(t),GV(aA,il[t.app.options.appId],e,n,r).catch(i=>_n.error(i))}const lw="@firebase/analytics",uw="0.10.4";function i4(){Tr(new tr(rd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ZV(r,i,n)},"PUBLIC")),Tr(new tr("analytics-internal",t,"PRIVATE")),Fn(lw,uw),Fn(lw,uw,"esm2017");function t(e){try{const n=e.getProvider(rd).getImmediate();return{logEvent:(r,i,s)=>r4(n,r,i,s)}}catch(n){throw Cn.create("interop-component-reg-failed",{reason:n})}}}i4();const s4={apiKey:"AIzaSyC_W4Ix3rRM3EZqNSRR4Da2tSDDf7txUQo",authDomain:"technique-map.firebaseapp.com",projectId:"technique-map",storageBucket:"technique-map.appspot.com",messagingSenderId:"357714563975",appId:"1:357714563975:web:1674edff97e77706077922",measurementId:"G-YC5QN1TVNC"},fy=RT(s4),Ke=vL(fy);n4().then(t=>{t&&e4(fy)});Wl(fy);const o4=H(({className:t})=>{const{addToast:e,removeToast:n}=N.useContext(ia),r=qi(),i=Wl(),s=o=>{o.preventDefault();const a=new FormData(o.currentTarget);if(a.get("password")!==a.get("passwordConfirmation")){e({variant:"success",message:"Password and Password confirmation do not match",onClose:()=>n("Password and Password confirmation do not match")});return}g2(i,a.get("email"),a.get("password")).then(u=>{OL(on(Ke,"users",u.user.uid),{email:a.get("email")})}).then(()=>{r("/")})};return g.jsx("div",{className:t,children:g.jsxs("form",{onSubmit:s,children:[g.jsx(cI,{}),g.jsxs("label",{htmlFor:"email",children:["Email:",g.jsx("input",{id:"email",type:"email",name:"email"})]}),g.jsxs("label",{htmlFor:"password",children:["Password:",g.jsx("input",{id:"password",type:"password",name:"password"})]}),g.jsxs("label",{htmlFor:"passwordConfirmation",children:["Password Confirmation:",g.jsx("input",{id:"passwordConfirmation",type:"password",name:"passwordConfirmation"})]}),g.jsx(ft,{type:"submit",text:"Sign Up"})]})})})`
  height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
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
`,Bs=N.createContext(null),a4=({children:t})=>{const[e,n]=N.useState();return Wl().onAuthStateChanged(r=>{!r&&window.location.pathname!=="/technique-map/#/sign_in"&&(window.location.href="/technique-map/#/sign_in"),n(r)}),g.jsx(Bs.Provider,{value:e,children:t})},l4=H(ft)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,u4=H.li`
  text-overflow: ellipsis;
  overflow: hidden;
  flex-basis: 0px;
  min-width: 75px;
  flex-grow: 1;
  text-align: end;
`,c4=H(({className:t})=>{const e=N.useContext(Bs);return g.jsxs(g.Fragment,{children:[g.jsx("nav",{className:t,children:g.jsx("ul",{children:e?g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(Jh,{to:"/teams",children:"Teams"})}),g.jsx(u4,{children:e.email}),g.jsx("li",{children:g.jsx(l4,{text:"Sign out",onClick:()=>Wl().signOut()})})]}):g.jsxs(g.Fragment,{children:[g.jsx("li",{children:g.jsx(Jh,{to:"/sign_in",children:"Sign In"})}),g.jsx("li",{children:g.jsx(Jh,{to:"/sign_up",children:"Sign Up"})})]})})}),g.jsx(wk,{})]})})`
  border-bottom: 1px groove var(--blue500);
  background-color: var(--blue500);
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
`,Wp=H(({className:t,children:e,title:n,...r})=>g.jsxs("details",{className:t,...r,children:[g.jsx("summary",{children:n}),e]}))`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`,d4=H(({className:t})=>g.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",className:t,children:[g.jsx("path",{fill:"currentColor",d:"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"}),g.jsx("path",{fill:"currentColor",d:"M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25z"})]}))``,h4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1 3.5c0-.626.292-1.165.7-1.59c.406-.422.956-.767 1.579-1.041C4.525.32 6.195 0 8 0c1.805 0 3.475.32 4.722.869c.622.274 1.172.62 1.578 1.04c.408.426.7.965.7 1.591v9c0 .626-.292 1.165-.7 1.59c-.406.422-.956.767-1.579 1.041C11.476 15.68 9.806 16 8 16c-1.805 0-3.475-.32-4.721-.869c-.623-.274-1.173-.62-1.579-1.04c-.408-.426-.7-.965-.7-1.591Zm1.5 0c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 5.205 6.353 5.5 8 5.5c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55c0-.133-.058-.318-.282-.551c-.227-.237-.591-.483-1.101-.707C11.102 1.795 9.647 1.5 8 1.5c-1.646 0-3.101.295-4.118.742c-.508.224-.873.471-1.1.708c-.224.232-.282.417-.282.55m0 4.5c0 .133.058.318.282.551c.227.237.591.483 1.101.707C4.898 9.705 6.353 10 8 10c1.646 0 3.101-.295 4.118-.742c.508-.224.873-.471 1.1-.708c.224-.232.282-.417.282-.55V5.724c-.241.15-.503.286-.778.407C11.475 6.68 9.805 7 8 7c-1.805 0-3.475-.32-4.721-.869a6.15 6.15 0 0 1-.779-.407Zm0 2.225V12.5c0 .133.058.318.282.55c.227.237.592.484 1.1.708c1.016.447 2.471.742 4.118.742c1.647 0 3.102-.295 4.117-.742c.51-.224.874-.47 1.101-.707c.224-.233.282-.418.282-.551v-2.275c-.241.15-.503.285-.778.406c-1.247.549-2.917.869-4.722.869c-1.805 0-3.475-.32-4.721-.869a6.327 6.327 0 0 1-.779-.406"})}))``,f4=H(({className:t=""})=>g.jsx("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:g.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6",className:t})}))``,p4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z",fill:"currentColor"})}))``,m4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1l-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1l1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z",fill:"currentColor"})}))``,g4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2M1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"})}))``,y4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,children:g.jsx("path",{fill:"currentColor",d:"M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0m-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5M11 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"})}))``,py=H(({className:t,children:e})=>g.jsx("div",{className:t,children:e}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    border-top: 2px solid white;
  }
`,v4=ig`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`,my=H(({className:t})=>g.jsx("div",{className:t,"aria-label":"loading"}))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${v4} 500ms infinite;
`,_4=iP`
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
`,w4=H(({className:t})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16",className:t,children:g.jsx("path",{fillRule:"evenodd",d:"M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z",fill:"currentColor"})}))``,E4=H.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`,T4=(t,e)=>{const n=[];for(let r=t-e;r<=t+e;r++)n.push(r);return n},I4=(t,e)=>new Date(t,e,0).getDate(),S4=(t,e)=>new Date(t,e,1),A4=(t,e)=>{const r=((i,s)=>o=>{var a;if(!((a=i.current)!=null&&a.contains(o.target)))return typeof s=="function"?s(o):null})(t,e);N.useEffect(()=>(document.addEventListener("click",i=>r(i)),()=>document.removeEventListener("click",i=>r(i))),[])},x4=["January","February","March","April","May","June","July","August","September","October","November","December"],C4=["M","Tu","W","Th","F","Sa","Su"],R4=H.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`,P4=H.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`,k4=H.div`
  text-align: center;
`,b4=H.button`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({$selected:t})=>t&&"background-color: var(--primary); color: white; border-radius:50%"}
`,D4=(t,e)=>{const[n,r]=N.useState([]),i=I4(e,t+1);let s=S4(e,t).getDay()-1;return s===-1&&(s=6),N.useEffect(()=>{const o=[...new Array(s).fill(null),...[...Array(i)].map((a,u)=>u+1)];r(o)},[t,e]),n},N4=H(({className:t,passedRef:e,setSelectedDate:n,toggleCalendar:r,value:i})=>{console.log(i);const s=new Date(i).getFullYear(),o=new Date(i).getMonth(),[a,u]=N.useState(o),[c,d]=N.useState(s),f=D4(a,c),p=T4(new Date(i).getFullYear(),5),T=P=>{r(),n(`${String(a+1).padStart(2,"0")}-${String(P).padStart(2,"0")}-${c}`)},w=()=>{u(P=>Number(P)===0?(d(_=>_-1),11):P-1)},x=()=>u(P=>Number(P)===11?(d(_=>_+1),11):P+1);return g.jsxs("div",{ref:e,className:t,popover:"true",children:[g.jsxs(P4,{children:[g.jsx("select",{value:`${a}/${c}`,onChange:P=>{const[_,v]=P.target.value.split("/");u(Number(_)),d(Number(v))},children:p.map(P=>x4.map((_,v)=>g.jsx("option",{value:`${v}/${P}`,children:`${_} , ${P}`},`${v}/${P}`)))}),g.jsx("button",{"aria-label":"left",onClick:w,children:"←"}),g.jsx("button",{"aria-label":"right",onClick:x,children:"→"})]}),g.jsxs(R4,{children:[C4.map(P=>g.jsx(k4,{children:P},`${P}-header`)),f.map((P,_)=>typeof P=="number"?g.jsx(b4,{onClick:()=>T(P),$selected:new Date(i).getDate()===P&&a===o&&c===s,children:P},`${P}-${a}-${c}`):g.jsx("span",{},`blank-day-${_}`))]})]})})`
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
`;H(({className:t,value:e,setValue:n})=>{const r=N.useRef(null),i=N.useRef(null),s=()=>{var o;(o=i.current)==null||o.togglePopover()};return A4(i,o=>{var a,u;(a=r.current)!=null&&a.contains(o.target)||(u=i.current)==null||u.hidePopover()}),g.jsxs("div",{className:t,children:[g.jsx(E4,{value:e,readOnly:!0}),g.jsx("button",{onClick:s,ref:r,children:g.jsx(w4,{})}),g.jsx(N4,{passedRef:i,toggleCalendar:s,setSelectedDate:n,value:e})]})})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;const M4=t=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",...t,children:g.jsx("path",{fill:"currentColor",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"})}),cw=H(({className:t,...e})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",className:t,...e,children:g.jsx("path",{fill:"currentColor",d:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"})}))``,O4={success:M4,warning:cw,error:cw},dw={success:"var(--affirmative)",warning:"var(--orange500)",error:"red"},hw=H.button`
  padding: 8px 8px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: none;
  filter: drop-shadow(0px 0px 2px var(--primary));
`,L4=ig`
  from {
    transform: translateX(calc(100% + var(--toast-position)));
    opacity: 0.25;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
`,V4=H(({className:t,variant:e,children:n,onClose:r})=>{const i=N.useRef(),s=O4[e];return N.useEffect(()=>{i.current&&i.current.showPopover();const o=setTimeout(()=>{r()},4e3);return()=>clearTimeout(o)},[r]),g.jsxs("div",{className:t,popover:"auto",children:[g.jsx(s,{style:{color:dw[e]}}),g.jsx("div",{children:n}),g.jsx(hw,{onClick:r,children:g.jsx(zd,{})})]})})`
  border-radius: 4px;
  filter: drop-shadow(0px 2px 4px var(--primary));
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
  position: relative;
  overflow: visible;
  border: none;
  border-left: 5px solid ${t=>dw[t.variant]};
  align-items: center;
  background-color: var(--blue400);
  color: var(--gray100);

  animation: ${L4} 300ms ease-in both;

  & > ${hw} {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`,Gp=H(({toasts:t,className:e})=>{N.useId();const r=(()=>{let i=0;return()=>(i++,i)})();return g.jsx("ul",{className:e,children:t.map(({variant:i,onClose:s,message:o})=>g.jsx("li",{children:g.jsx(V4,{variant:i,onClose:s,children:o})},r()))})})`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: center;

  @media screen and (width > 850px) {
    justify-items: end;
  }
`,ia=N.createContext(null),j4=({children:t})=>{const[e,n]=N.useState([]),r=s=>{n(o=>[...o,s])},i=s=>{n(o=>o.filter(a=>a.message!==s))};return g.jsxs(ia.Provider,{value:{removeToast:i,addToast:r},children:[t,g.jsx(Gp,{toasts:e})]})},ps=H(({passedRef:t,className:e,children:n,onClose:r})=>g.jsxs("dialog",{ref:t,className:e,children:[g.jsx("button",{onClick:r,formNoValidate:!0,children:g.jsx(zd,{})}),n]}))`
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
`,Kp=Math.PI,Qp=2*Kp,rs=1e-6,F4=Qp-rs;function lA(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function U4(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return lA;const n=10**e;return function(r){this._+=r[0];for(let i=1,s=r.length;i<s;++i)this._+=Math.round(arguments[i]*n)/n+r[i]}}class $4{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?lA:U4(e)}moveTo(e,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,n){this._append`L${this._x1=+e},${this._y1=+n}`}quadraticCurveTo(e,n,r,i){this._append`Q${+e},${+n},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(e,n,r,i,s,o){this._append`C${+e},${+n},${+r},${+i},${this._x1=+s},${this._y1=+o}`}arcTo(e,n,r,i,s){if(e=+e,n=+n,r=+r,i=+i,s=+s,s<0)throw new Error(`negative radius: ${s}`);let o=this._x1,a=this._y1,u=r-e,c=i-n,d=o-e,f=a-n,p=d*d+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=n}`;else if(p>rs)if(!(Math.abs(f*u-c*d)>rs)||!s)this._append`L${this._x1=e},${this._y1=n}`;else{let T=r-o,w=i-a,x=u*u+c*c,P=T*T+w*w,_=Math.sqrt(x),v=Math.sqrt(p),C=s*Math.tan((Kp-Math.acos((x+p-P)/(2*_*v)))/2),D=C/v,j=C/_;Math.abs(D-1)>rs&&this._append`L${e+D*d},${n+D*f}`,this._append`A${s},${s},0,0,${+(f*T>d*w)},${this._x1=e+j*u},${this._y1=n+j*c}`}}arc(e,n,r,i,s,o){if(e=+e,n=+n,r=+r,o=!!o,r<0)throw new Error(`negative radius: ${r}`);let a=r*Math.cos(i),u=r*Math.sin(i),c=e+a,d=n+u,f=1^o,p=o?i-s:s-i;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>rs||Math.abs(this._y1-d)>rs)&&this._append`L${c},${d}`,r&&(p<0&&(p=p%Qp+Qp),p>F4?this._append`A${r},${r},0,1,${f},${e-a},${n-u}A${r},${r},0,1,${f},${this._x1=c},${this._y1=d}`:p>rs&&this._append`A${r},${r},0,${+(p>=Kp)},${f},${this._x1=e+r*Math.cos(s)},${this._y1=n+r*Math.sin(s)}`)}rect(e,n,r,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+n}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}}function sn(t){return function(){return t}}const fw=Math.abs,Yt=Math.atan2,Zi=Math.cos,z4=Math.max,pf=Math.min,ur=Math.sin,vo=Math.sqrt,dn=1e-12,Dl=Math.PI,id=Dl/2,cc=2*Dl;function B4(t){return t>1?0:t<-1?Dl:Math.acos(t)}function pw(t){return t>=1?id:t<=-1?-id:Math.asin(t)}function H4(t){let e=3;return t.digits=function(n){if(!arguments.length)return e;if(n==null)e=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);e=r}return t},()=>new $4(e)}function q4(t){return t.innerRadius}function W4(t){return t.outerRadius}function G4(t){return t.startAngle}function K4(t){return t.endAngle}function Q4(t){return t&&t.padAngle}function Y4(t,e,n,r,i,s,o,a){var u=n-t,c=r-e,d=o-i,f=a-s,p=f*u-d*c;if(!(p*p<dn))return p=(d*(e-s)-f*(t-i))/p,[t+p*u,e+p*c]}function $u(t,e,n,r,i,s,o){var a=t-n,u=e-r,c=(o?s:-s)/vo(a*a+u*u),d=c*u,f=-c*a,p=t+d,T=e+f,w=n+d,x=r+f,P=(p+w)/2,_=(T+x)/2,v=w-p,C=x-T,D=v*v+C*C,j=i-s,$=p*x-w*T,y=(C<0?-1:1)*vo(z4(0,j*j*D-$*$)),E=($*C-v*y)/D,A=(-$*v-C*y)/D,R=($*C+v*y)/D,k=(-$*v+C*y)/D,b=E-P,S=A-_,te=R-P,Ie=k-_;return b*b+S*S>te*te+Ie*Ie&&(E=R,A=k),{cx:E,cy:A,x01:-d,y01:-f,x11:E*(i/j-1),y11:A*(i/j-1)}}function X4(){var t=q4,e=W4,n=sn(0),r=null,i=G4,s=K4,o=Q4,a=null,u=H4(c);function c(){var d,f,p=+t.apply(this,arguments),T=+e.apply(this,arguments),w=i.apply(this,arguments)-id,x=s.apply(this,arguments)-id,P=fw(x-w),_=x>w;if(a||(a=d=u()),T<p&&(f=T,T=p,p=f),!(T>dn))a.moveTo(0,0);else if(P>cc-dn)a.moveTo(T*Zi(w),T*ur(w)),a.arc(0,0,T,w,x,!_),p>dn&&(a.moveTo(p*Zi(x),p*ur(x)),a.arc(0,0,p,x,w,_));else{var v=w,C=x,D=w,j=x,$=P,y=P,E=o.apply(this,arguments)/2,A=E>dn&&(r?+r.apply(this,arguments):vo(p*p+T*T)),R=pf(fw(T-p)/2,+n.apply(this,arguments)),k=R,b=R,S,te;if(A>dn){var Ie=pw(A/p*ur(E)),pt=pw(A/T*ur(E));($-=Ie*2)>dn?(Ie*=_?1:-1,D+=Ie,j-=Ie):($=0,D=j=(w+x)/2),(y-=pt*2)>dn?(pt*=_?1:-1,v+=pt,C-=pt):(y=0,v=C=(w+x)/2)}var Ne=T*Zi(v),z=T*ur(v),oe=p*Zi(j),ae=p*ur(j);if(R>dn){var Te=T*Zi(C),q=T*ur(C),G=p*Zi(D),J=p*ur(D),Z;if(P<Dl)if(Z=Y4(Ne,z,G,J,Te,q,oe,ae)){var L=Ne-Z[0],he=z-Z[1],Y=Te-Z[0],Ve=q-Z[1],Se=1/ur(B4((L*Y+he*Ve)/(vo(L*L+he*he)*vo(Y*Y+Ve*Ve)))/2),Ae=vo(Z[0]*Z[0]+Z[1]*Z[1]);k=pf(R,(p-Ae)/(Se-1)),b=pf(R,(T-Ae)/(Se+1))}else k=b=0}y>dn?b>dn?(S=$u(G,J,Ne,z,T,b,_),te=$u(Te,q,oe,ae,T,b,_),a.moveTo(S.cx+S.x01,S.cy+S.y01),b<R?a.arc(S.cx,S.cy,b,Yt(S.y01,S.x01),Yt(te.y01,te.x01),!_):(a.arc(S.cx,S.cy,b,Yt(S.y01,S.x01),Yt(S.y11,S.x11),!_),a.arc(0,0,T,Yt(S.cy+S.y11,S.cx+S.x11),Yt(te.cy+te.y11,te.cx+te.x11),!_),a.arc(te.cx,te.cy,b,Yt(te.y11,te.x11),Yt(te.y01,te.x01),!_))):(a.moveTo(Ne,z),a.arc(0,0,T,v,C,!_)):a.moveTo(Ne,z),!(p>dn)||!($>dn)?a.lineTo(oe,ae):k>dn?(S=$u(oe,ae,Te,q,p,-k,_),te=$u(Ne,z,G,J,p,-k,_),a.lineTo(S.cx+S.x01,S.cy+S.y01),k<R?a.arc(S.cx,S.cy,k,Yt(S.y01,S.x01),Yt(te.y01,te.x01),!_):(a.arc(S.cx,S.cy,k,Yt(S.y01,S.x01),Yt(S.y11,S.x11),!_),a.arc(0,0,p,Yt(S.cy+S.y11,S.cx+S.x11),Yt(te.cy+te.y11,te.cx+te.x11),_),a.arc(te.cx,te.cy,k,Yt(te.y11,te.x11),Yt(te.y01,te.x01),!_))):a.arc(0,0,p,j,D,_)}if(a.closePath(),d)return a=null,d+""||null}return c.centroid=function(){var d=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,f=(+i.apply(this,arguments)+ +s.apply(this,arguments))/2-Dl/2;return[Zi(f)*d,ur(f)*d]},c.innerRadius=function(d){return arguments.length?(t=typeof d=="function"?d:sn(+d),c):t},c.outerRadius=function(d){return arguments.length?(e=typeof d=="function"?d:sn(+d),c):e},c.cornerRadius=function(d){return arguments.length?(n=typeof d=="function"?d:sn(+d),c):n},c.padRadius=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:sn(+d),c):r},c.startAngle=function(d){return arguments.length?(i=typeof d=="function"?d:sn(+d),c):i},c.endAngle=function(d){return arguments.length?(s=typeof d=="function"?d:sn(+d),c):s},c.padAngle=function(d){return arguments.length?(o=typeof d=="function"?d:sn(+d),c):o},c.context=function(d){return arguments.length?(a=d??null,c):a},c}function J4(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Z4(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function ej(t){return t}function tj(){var t=ej,e=Z4,n=null,r=sn(0),i=sn(cc),s=sn(0);function o(a){var u,c=(a=J4(a)).length,d,f,p=0,T=new Array(c),w=new Array(c),x=+r.apply(this,arguments),P=Math.min(cc,Math.max(-cc,i.apply(this,arguments)-x)),_,v=Math.min(Math.abs(P)/c,s.apply(this,arguments)),C=v*(P<0?-1:1),D;for(u=0;u<c;++u)(D=w[T[u]=u]=+t(a[u],u,a))>0&&(p+=D);for(e!=null?T.sort(function(j,$){return e(w[j],w[$])}):n!=null&&T.sort(function(j,$){return n(a[j],a[$])}),u=0,f=p?(P-c*C)/p:0;u<c;++u,x=_)d=T[u],D=w[d],_=x+(D>0?D*f:0)+C,w[d]={data:a[d],index:u,value:D,startAngle:x,endAngle:_,padAngle:v};return w}return o.value=function(a){return arguments.length?(t=typeof a=="function"?a:sn(+a),o):t},o.sortValues=function(a){return arguments.length?(e=a,n=null,o):e},o.sort=function(a){return arguments.length?(n=a,e=null,o):n},o.startAngle=function(a){return arguments.length?(r=typeof a=="function"?a:sn(+a),o):r},o.endAngle=function(a){return arguments.length?(i=typeof a=="function"?a:sn(+a),o):i},o.padAngle=function(a){return arguments.length?(s=typeof a=="function"?a:sn(+a),o):s},o}function Ua(t,e,n){this.k=t,this.x=e,this.y=n}Ua.prototype={constructor:Ua,scale:function(t){return t===1?this:new Ua(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Ua(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Ua.prototype;const nj=H.svg`
  max-width: 100%;
  height: auto;
`,rj=({label:t,count:e})=>g.jsxs(g.Fragment,{children:[g.jsx("circle",{r:70,fill:"white"}),g.jsx("text",{x:-25,y:0,stroke:"black",transform:"translateX(-50%)",children:t}),g.jsx("text",{x:-25,y:20,stroke:"black",transform:"translateX(-50%)",children:e})]}),ij=H.g`
  &:hover > path {
    stroke: white;
    transform: scale(1.2);
  }
`,sj=tj().value(t=>t.value),oj=(t,e)=>{const n=X4();return sj(t).map(r=>({path:n({innerRadius:70,outerRadius:e,startAngle:r.startAngle,endAngle:r.endAngle}),...r}))},aj=t=>{const e=t+1;return`var(--${t>=10?"blue":t>=20?"purple":"gray"}${e%10===0?"950":`${e%10}00`})`},mf=({width:t,height:e,data:n})=>{const i=Math.min(t,e)/2-100,s={label:"",count:NaN,x:0,y:0},[o,a]=N.useState(s),u=c=>d=>{a({label:c.data.name,count:c.data.value,x:d.clientX,y:d.clientY})};return g.jsx(nj,{width:t,height:e,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"xMidYMid meet",children:g.jsxs("g",{transform:`translate(${t/2}, ${e/2})`,children:[oj(n,i).map((c,d)=>g.jsxs(ij,{d:c.path,onMouseEnter:u(c),onMouseLeave:()=>a(s),children:[" ",g.jsx("path",{d:c.path,fill:aj(d)})," "]},d)),o.label&&g.jsx(rj,{label:o.label,count:o.count})]})})},lj=N.createContext(null),gf={didCatch:!1,error:null};class uj extends N.Component{constructor(e){super(e),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=gf}static getDerivedStateFromError(e){return{didCatch:!0,error:e}}resetErrorBoundary(){const{error:e}=this.state;if(e!==null){for(var n,r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:s,reason:"imperative-api"}),this.setState(gf)}}componentDidCatch(e,n){var r,i;(r=(i=this.props).onError)===null||r===void 0||r.call(i,e,n)}componentDidUpdate(e,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;if(r&&n.error!==null&&cj(e.resetKeys,i)){var s,o;(s=(o=this.props).onReset)===null||s===void 0||s.call(o,{next:i,prev:e.resetKeys,reason:"keys"}),this.setState(gf)}}render(){const{children:e,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let a=e;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")a=n(u);else if(r)a=N.createElement(r,u);else if(i===null||N.isValidElement(i))a=i;else throw o}return N.createElement(lj.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},a)}}function cj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==e.length||t.some((n,r)=>!Object.is(n,e[r]))}const dj=H.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`,hj=H.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`,mw=H(({children:t,passedRef:e,className:n})=>g.jsx("dialog",{ref:e,className:n,children:g.jsx("div",{children:t})}))`
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
`,fj=H(({id:t,unixTime:e,deletePracticePlan:n,className:r})=>{const i=N.useRef(null),s=o=>new Date(Number(o)*1e3).toLocaleDateString();return g.jsxs("li",{className:r,children:[g.jsx(Xo,{to:`/practice_plans/${t}`,children:s(e)}),g.jsx(hj,{onClick:()=>{var o;return(o=i.current)==null?void 0:o.showModal()},children:"Delete Practice Plan"}),g.jsxs(mw,{passedRef:i,children:["Are you sure you want to delete Practice Plan from"," ",s(e),"? ",g.jsx("br",{})," This action cannot be undone"," ",g.jsxs("div",{children:[g.jsx("button",{onClick:()=>{var o;return(o=i.current)==null?void 0:o.close()},children:"Cancel"}),g.jsx("button",{onClick:()=>n(t),children:"Delete"})]})]})]})})`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${mw} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`,pj=H(({className:t,practicePlans:e,deletePracticePlan:n})=>{const r=qi(),i=s=>{s("/create")};return g.jsxs("main",{className:t,children:[g.jsxs(dj,{children:[g.jsx("h1",{children:"Practice plans"}),g.jsx(ft,{onClick:()=>i(r),text:"Add Practice Plan"})]}),g.jsx("ul",{children:e.map(s=>g.jsx(fj,{id:s.id,unixTime:s.date.seconds,deletePracticePlan:n},s.id))})]})})`
  background: linear-gradient(var(--blue500), var(--blue900));
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
`;H(({className:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!1),{addToast:s,removeToast:o}=N.useContext(ia),a=async c=>{await FS(on(Ke,"practice_plan",c)),n(d=>d.filter(f=>f.id!==c)),s({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>o("Practice Plan Successfully Deleted")})},u=()=>(i(!0),Sr(Bn(Ke,"practice_plan")).then(c=>{const d=c.docs.map(f=>({...f.data(),id:f.id})).sort((f,p)=>Number(p.date.seconds)-Number(f.date.seconds));n(d)}).catch(c=>{throw new Error(c)}).finally(()=>{i(!1)}));return N.useEffect(()=>{u()},[]),g.jsx(uj,{fallback:g.jsx("p",{children:"⚠️ Something went wrong"}),children:g.jsx("div",{className:t,children:r?g.jsx(py,{children:g.jsx(my,{})}):g.jsx(pj,{practicePlans:e,deletePracticePlan:a})})})})`
  background: linear-gradient(var(--blue500), var(--blue900));
  height: calc(100% - 51px);
`;const mj=H(({className:t,text:e,x:n,y:r,r:i,onClick:s})=>g.jsxs("g",{onClick:s,className:t,children:[g.jsx("circle",{r:i+5,cy:r,cx:n}),g.jsx("circle",{className:t,r:i,cy:r,cx:n}),g.jsx("text",{x:n,y:r,dominantBaseline:"middle",textAnchor:"middle",children:e})]}))`
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
`,gw=H.div`
  background-color: ${({$reviewUrgency:t})=>t<2?"var(--affirmative)":t<7?"var(--caution)":"red"};
  color: white;
  padding: 4px 8px;
  border-radius: 20em;
`,gj=H(({area:t,position:e,move:n,addToPracticePlan:r,practicePlans:i,className:s})=>{const a=(c=>{const d=i.find(f=>f.moves.includes(c));return d?new Date(Number(d.date.seconds)*1e3).toLocaleDateString():"Not Reviewed"})(n.id),u=c=>c==="Not Reviewed"?1/0:Math.floor((Date.parse(new Date().toLocaleDateString())-Date.parse(c))/864e5);return g.jsxs(nT,{className:s,addToPracticePlan:()=>r(n.id),children:[g.jsx("span",{children:n.name}),g.jsxs("span",{children:["Last Review: ",a]}),g.jsx(gw,{$reviewUrgency:u(a),children:u(a)})]},`${t}-${e}-${n.name}`)})`
  & > button {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  position: relative;

  & > button > ${gw} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`,yj=H(({className:t,content:e,addToPracticePlan:n,area:r,moves:i})=>{const{showPanel:s,setPanelContent:o,setPanelTitle:a}=N.useContext(sg),[u,c]=N.useState([]),{id:d=""}=pg(),f=P=>Sr(zs(Bn(Ke,"practice_plan"),Ui("teamId","==",P))).then(_=>{const v=_.docs.map(C=>({...C.data(),id:C.id})).sort((C,D)=>Number(D.date.seconds)-Number(C.date.seconds));c(v)}).catch(_=>{throw new Error(_)});N.useEffect(()=>{f(d)},[]);const p=50,T=70,w=P=>{const _="50%",v="25%",C="75%";return P%3===1||P===0?_:P%6===2||P%6===3?v:C},x=P=>{o(P),s()};return g.jsx("svg",{height:Math.max(110*(e.length+2),window.innerHeight-52),width:"100%",className:t,children:e.map((P,_)=>g.jsxs("g",{children:[g.jsx("line",{x1:w(_),y1:T+_*110,x2:w(_+1),y2:T+(_+1)*110}),g.jsx(mj,{r:p,y:T+_*110,x:w(_),onClick:()=>{a(P),x(()=>g.jsx(g.Fragment,{children:i.filter(v=>v.area===r&&v.position===P).map(v=>g.jsx(gj,{position:P,area:r,move:v,addToPracticePlan:n,practicePlans:u},v.id))}))},text:P})]},P))})})`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));

  & > g > line {
    stroke: var(--orange);
  }

  ${nT} > span {
  }
`,uA=t=>!isNaN(t),gy=(t,e)=>e.map(n=>t.find(r=>r.id===n)),yy=t=>t.reduce((e,n)=>{var r;return{...e,[n==null?void 0:n.area]:[...(e[n==null?void 0:n.area]??[]).filter(i=>i.name!==(n==null?void 0:n.position)),{name:n==null?void 0:n.position,moves:[...((r=(e[n==null?void 0:n.area]??[]).find(i=>i.name===(n==null?void 0:n.position)))==null?void 0:r.moves)??[],{name:n==null?void 0:n.name,id:n==null?void 0:n.id}]}]}},{neutral:[],top:[],bottom:[]}),yw=t=>t.reduce((e,n)=>{const r=e.findIndex(i=>i.name===n.area);return e[r].positions.add(n.position),e},[{name:"neutral",positions:new Set},{name:"top",positions:new Set},{name:"bottom",positions:new Set}]),vj=(t,e)=>window.navigator.clipboard.writeText(JSON.stringify(yy(gy(t,e)))),_j=async(t,e)=>{if(!uA(t.date)){alert("please submit a valid date");return}await ay(Bn(Ke,"practice_plan"),t).then(n=>{e(`/teams/${t.teamId}/practice_plans/${n.id}`)})},wj=async(t,e,n)=>{const r=on(Ke,"practice_plan",t);if(!uA(e.date)){alert("please submit a valid date");return}await Mi(r,e),n(`/teams/${e.teamId}/practice_plans/${t}`)},Ej=H.div`
  height: 100%;
  overflow: scroll;
`,Tj=H.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`,Ij=H.input``,vw=H(({className:t,moves:e,practicePlanMoves:n,practicePlanDate:r,removeFromPracticePlan:i,clearPracticePlan:s,currentPracticePlanId:o,updatePracticePlanDate:a,teamId:u})=>{const c=qi(),[d,f]=N.useState(window.innerWidth>850),{closePanel:p}=N.useContext(sg);N.useEffect(()=>()=>p(),[]);const T=()=>{window.innerWidth>850&&f(!0)};N.useLayoutEffect(()=>(window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[]);const w=()=>{f(P=>!P)},x=P=>{const[_,v,C]=P.split("-");return new Date(`${v}/${C}/${_}`)};return g.jsxs("aside",{className:t,style:{"--transform":d?"translateX(0%)":"translateX(-100%)"},children:[g.jsx("button",{"aria-label":"show practice plan",onClick:w,children:g.jsx(m4,{})}),g.jsxs(Ej,{children:["Date:",g.jsx(Ij,{type:"date",value:r,onChange:P=>a(P.target.value)}),g.jsx("h1",{children:"Practice Plan"}),Object.entries(yy(gy(e,n))).map(([P,_])=>g.jsxs(N.Fragment,{children:[g.jsx("h2",{children:P}),_.map(v=>g.jsx(Wp,{title:v.name,children:v.moves.map(({name:C,id:D})=>g.jsxs(Aj,{children:[C,g.jsx(xj,{onClick:()=>i(D),children:g.jsx(zd,{})})]},`${v.name}=${C}`))},v.name))]},P)),g.jsxs(Tj,{children:[!o&&g.jsx(ft,{onClick:s,text:"Clear Practice Plan",Icon:Sj,$level:"caution"}),g.jsx(ft,{onClick:()=>vj(e,n),text:"Copy Practice Plan",Icon:d4}),g.jsx(ft,{onClick:()=>{o?wj(o,{moves:n,date:x(r),teamId:u},c):_j({moves:n,date:x(r),teamId:u},c)},text:o?"Update Practice Plan":"Save Practice Plan",Icon:h4})]})]})]})})`
  background: linear-gradient(var(--blue500), var(--blue900));
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
`,Sj=H(f4)`
  stroke: white;
`,Aj=H.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`,xj=H.button`
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
`,_w=t=>{const[e,n,r]=new Date(t).toLocaleDateString("en-US").split("/");return`${r}-${e.padStart(2,"0")}-${n.padStart(2,"0")}`},Cj=t=>{const[e,n]=N.useState([]),[r,i]=N.useState(_w(new Date));return N.useEffect(()=>{t&&oy(on(Ke,"practice_plan",t)).then(o=>{const a={...o.data(),id:o.id};i(_w(new Date(Number(a.date.seconds)*1e3))),n(a.moves)})},[t]),[e,n,r,i]},Rj=t=>Sr(zs(Bn(Ke,"moves"),Ui("teamId","==",t))).then(e=>e.docs.map(n=>({...n.data(),id:n.id}))),ww=H(({className:t})=>{const[e,n]=N.useState("neutral"),[r,i]=N.useState([]),{addToast:s,removeToast:o}=N.useContext(ia),{practice_plan_id:a,id:u=""}=pg(),[c,d,f,p]=Cj(a);N.useEffect(()=>{Rj(u).then(_=>i(_))},[u]);const T=()=>{p(new Date),d([]),s({variant:"success",message:"practice plan cleared",onClose:()=>o("practice plan cleared")})},w=_=>{d(v=>v.includes(_)?(s({variant:"error",message:"move already exists",onClose:()=>o("move already exists")}),v):(s({variant:"success",message:"move was successfully added",onClose:()=>o("move was successfully added")}),[...v,_]))},x=_=>{d(v=>[...v].filter(C=>C!==_)),s({variant:"success",message:"move was successfully removed",onClose:()=>o("move was successfully removed")})},P=_=>{p(_),s({variant:"success",message:"practice plan date updated",onClose:()=>o("practice plan date updated")})};return g.jsxs("main",{className:t,children:[g.jsx(cP,{tabs:yw(r).map(_=>_.name),currentTab:e,setCurrentTab:n}),g.jsx(vw,{moves:r,practicePlanMoves:c,practicePlanDate:f,clearPracticePlan:T,removeFromPracticePlan:x,currentPracticePlanId:a,updatePracticePlanDate:P,teamId:u}),g.jsx(yj,{addToPracticePlan:w,content:[...yw(r).find(_=>_.name===e).positions],area:e,moves:r})]})})`
  display: grid;
  grid-template-areas: 'nav' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;

  @media screen and (width >= 850px) {
    grid-template-areas: 'nav nav' 'plan content';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${vw} {
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
`,Pj=H.ul`
  list-style: none;
  display: grid;
  gap: 2px;
  align-content: start;
  margin: 0;
  padding: 0;
`,kj=H(({className:t})=>{const[e,n]=N.useState({date:new Date,moves:[],id:""}),[r,i]=N.useState([]),s=Ms(),o=qi(),a=s.pathname.split("/").at(-1)??"",u=zs(Bn(Ke,"practice_plan"),Ui(_L(),"==",a)),c=()=>Sr(Bn(Ke,"moves")).then(p=>{const T=p.docs.map(w=>({...w.data(),id:w.id}));i(T)}),d=()=>Sr(u).then(p=>{const T=p.docs.map(x=>({...x.data(),id:x.id})),[w]=T;n(w)});N.useEffect(()=>{c(),d()},[]);const f=p=>{o("edit")};return g.jsxs("main",{className:t,children:[Object.entries(yy(gy(r,e.moves))).map(([p,T])=>g.jsxs(Pj,{children:[g.jsx("h2",{children:p}),T.map(w=>g.jsx("li",{children:g.jsx(Wp,{title:w.name,open:!0,children:g.jsx("ul",{children:w==null?void 0:w.moves.map(x=>g.jsx("li",{children:x.name},`${w.name}-${x.name}`))})})},w.name))]},p)),g.jsx(ft,{onClick:()=>f(),text:"Edit Practice Plan",Icon:p4,$level:"caution"})]})})`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
  padding: 32px;
  color: white;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;

  & > ${ft} {
    align-self: start;
  }

  & ${Wp} {
    background-color: var(--secondary);
  }
`,sd=H.div`
  color: ${({$color:t})=>t};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`,bj=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],cA=Bn(Ke,"teams"),Dj=()=>Sr(cA).then(t=>t.docs.map(n=>({...n.data(),id:n.id}))),Nj=H.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  display: grid;
  max-width: 100%;
`,Mj=H.li`
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
`,Ew=H.div`
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
`,Tw=H.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  width: min-content;

  & > span {
    white-space: nowrap;
  }
`,Oj=H.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  padding: 16px;
`,Lj=H(({className:t,teams:e,setTeams:n})=>{const r=N.useContext(Bs),{addToast:i,removeToast:s}=N.useContext(ia),o=N.useRef(),a=N.useRef(),u=()=>{o.current&&o.current.showModal()},c=()=>{o.current&&o.current.close()},d=()=>{a.current&&a.current.showModal()},f=()=>{a.current&&a.current.close()},p=w=>{w.preventDefault();const x=new FormData(w.currentTarget),P={name:x.get("teamName"),state:x.get("stateLocation"),joinRequests:[],goals:[],userIds:[r.uid],users:[{role:"admin",uid:r.uid}]};ay(cA,P).then(_=>{n(v=>[...v,{...P,id:_.id}]),c()})},T=w=>{w.preventDefault();const x=new FormData(w.currentTarget),P=e.find(_=>_.id===x.get("teamToJoin"));if(P&&P.joinRequests.find(v=>v.uid===r.uid)){i({variant:"success",message:"You have an existing request to join this team",onClose:()=>s("You have an existing request to join this team")});return}Mi(on(Ke,"teams",x.get("teamToJoin")),{joinRequests:bl({userEmail:r.email,uid:r.uid,role:x.get("requestedRole")})}).then(()=>{f(),i({variant:"success",message:"Request Successfully Submitted",onClose:()=>s("Request Successfully Submitted")})})};return g.jsxs("main",{className:t,children:[g.jsx("h1",{children:"My Teams"}),g.jsx(Nj,{children:e.filter(w=>w.userIds.includes(r.uid)).map(w=>g.jsx(Xo,{to:`${w.id}`,children:g.jsxs(Mj,{children:[g.jsxs("span",{children:[w.name," (",w.state,")"]}),g.jsxs(Tw,{children:["Users ",g.jsx(Ew,{children:w.users.length})]}),g.jsxs(Tw,{children:[g.jsx("span",{children:"Join Requests"})," ",g.jsx(Ew,{children:w.joinRequests.length})]}),w.users.find(x=>x.uid===r.uid&&x.role==="admin")?g.jsx(sd,{$color:"white",children:"Admin"}):g.jsx("span",{})]})},w.id))}),g.jsxs(Oj,{children:[g.jsx(ft,{text:"Request to Join a Team",onClick:d}),g.jsx(ft,{text:"Create a Team",onClick:u})]}),g.jsx(ps,{passedRef:o,onClose:c,children:g.jsxs("form",{onSubmit:p,children:[g.jsxs("label",{htmlFor:"teamName",children:[g.jsx("span",{children:"Team Name:"}),g.jsx("input",{name:"teamName",type:"text",id:"teamName"})]}),g.jsxs("label",{htmlFor:"stateLocation",children:[g.jsx("span",{children:"State:"}),g.jsx("select",{name:"stateLocation",id:"stateLocation",children:bj.map(w=>g.jsx("option",{value:w,children:w},w))})]}),g.jsx(ft,{text:"Create",type:"submit"})]})}),g.jsx(ps,{passedRef:a,onClose:f,children:g.jsxs("form",{onSubmit:T,children:[g.jsxs("label",{htmlFor:"teamToJoin",children:[g.jsx("span",{children:"Team:"}),g.jsx("select",{name:"teamToJoin",id:"teamToJoin",children:e.filter(w=>!w.userIds.includes(r.uid)).map(w=>g.jsxs("option",{value:w.id,children:[w.name," (",w.state,")"]},w.id))})]}),g.jsxs("label",{htmlFor:"requestedRole",children:[g.jsx("span",{children:"Requested Role:"}),g.jsx("select",{name:"requestedRole",id:"requestedRole",children:["admin","base+","base"].map(w=>g.jsx("option",{value:w,children:w},w))})]}),g.jsx(ft,{text:"Send Request to Join",type:"submit"})]})})]})})`
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

  & > ${ps} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,Vj=H(({className:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!1);return N.useEffect(()=>{i(!0),Dj().then(s=>n(s)).then(()=>i(!1))},[]),g.jsx("div",{className:t,children:r?g.jsx(py,{children:g.jsx(my,{})}):g.jsx(Lj,{teams:e,setTeams:n})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
`,jj=H(ft)`
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
`,vy=({roles:t,team:e,children:n})=>{const r=N.useContext(Bs),i=e.users.find(s=>s.uid===(r==null?void 0:r.uid));return i&&t.includes(i.role)?n:null},Fj=H(({uid:t,role:e,team:n,setTeam:r,className:i})=>{const[s,o]=N.useState(""),a=N.useContext(Bs),u=N.useRef(),c=async w=>await oy(on(Ke,"users",w)).then(x=>({...x.data(),id:x.id}).email);N.useEffect(()=>{c(t).then(o)},[t]);const d=()=>{Mi(on(Ke,"teams",n.id),{users:rl({uid:t,role:e}),userIds:rl(t)}),r(w=>({...w,users:w.users.filter(x=>x.uid!==t),userIds:w.userIds.filter(x=>x!==t)}))},f=()=>{u.current&&u.current.showModal()},p=()=>{u.current&&u.current.close()},T=w=>{w.preventDefault();const x=new FormData(w.currentTarget);Mi(on(Ke,"teams",n.id),{users:rl({uid:t,role:e})}),Mi(on(Ke,"teams",n.id),{users:bl({uid:t,role:x.get("newRole")})}),r(P=>{const _=P.users.find(v=>v.uid===t);if(!_){alert("could not find user!");return}return _.role=x.get("newRole"),{...P,users:[...P.users.filter(v=>v.uid!==t),_].filter(v=>v)}}),u.current&&p()};return g.jsxs("li",{className:i,children:[g.jsx("span",{children:s}),g.jsx(sd,{children:e}),g.jsxs(vy,{roles:["admin"],team:n,children:[g.jsx(jj,{onClick:f,text:"Update Role"}),t!==a.uid&&g.jsx(_y,{$level:"caution",onClick:d,text:"Remove User"}),g.jsx(ps,{passedRef:u,onClose:p,children:g.jsxs("form",{onSubmit:T,children:[g.jsxs("label",{htmlFor:"newRole",children:[g.jsx("span",{children:"New Role:"}),g.jsx("select",{name:"newRole",id:"newRole",children:["admin","base+","base"].map(w=>g.jsx("option",{value:w,children:w},w))})]}),g.jsx(ft,{text:"Update Role",type:"submit"})]})})]})]})})`
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
`,Uj=t=>oy(on(Ke,"teams",t)).then(e=>({...e.data(),id:e.id})),$j=t=>Sr(zs(Bn(Ke,"moves"),Ui("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),zj=t=>Sr(zs(Bn(Ke,"practice_plan"),Ui("teamId","==",t))).then(e=>e.docs.map(r=>({...r.data(),id:r.id}))),Bj=["jv","varsity","state qualifier","state placer"],Hj=["neutral","top","bottom"],qj=H(({className:t,moves:e,setMoves:n,teamId:r,team:i})=>{const s=N.useRef(),o=()=>{s.current&&s.current.showModal()},a=()=>{s.current&&s.current.close()},u=c=>{c.preventDefault();const d=new FormData(c.currentTarget),f={area:d.get("area"),level:d.get("level"),name:d.get("name"),position:d.get("position"),teamId:r};ay(Bn(Ke,"moves"),f).then(p=>{n(T=>[...T,{...f,id:p.id}])}),a()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Moves"}),g.jsx(Wj,{children:e.map(c=>g.jsx(Qj,{move:c}))}),g.jsxs(vy,{roles:["admin","base+"],team:i,children:[g.jsx(ft,{onClick:o,text:"Add Move"}),g.jsx(ps,{passedRef:s,onClose:a,children:g.jsxs("form",{onSubmit:u,children:[g.jsxs("label",{htmlFor:"name",children:[g.jsx("span",{children:"Move name:"}),g.jsx("input",{type:"text",name:"name",id:"name"})]}),g.jsxs("label",{htmlFor:"area",children:[g.jsx("span",{children:"Move Area:"}),g.jsx("select",{name:"area",id:"area",children:Hj.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"level",children:[g.jsx("span",{children:"Move Level:"}),g.jsx("select",{name:"level",id:"level",children:Bj.map(c=>g.jsx("option",{value:c,children:c},c))})]}),g.jsxs("label",{htmlFor:"position",children:[g.jsx("span",{children:"Move Position:"}),g.jsx("input",{type:"text",name:"position",id:"position"})]}),g.jsx(ft,{text:"Add Move",type:"submit"})]})})]})]})})`
  display: grid;
  gap: 16px;
`,Wj=H.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
  display: grid;
  gap: 8px;
`,Gj=t=>t==="jv"?"hsl(30, 61%, 50%)":t==="varsity"?"silver":t==="state qualifier"?"gold":t==="state placer"?"hsl(40, 5%, 89%)":"white",Kj=t=>t==="jv"?"JV":t==="varsity"?"V":t==="state qualifier"?"SQ":t==="state placer"?"SP":"",Qj=H(({className:t,move:e})=>g.jsx("li",{className:t,children:g.jsxs("div",{children:[g.jsx("h3",{children:e.name}),g.jsxs("span",{children:[e.area," - ",e.position]}),g.jsx(sd,{$color:Gj(e.level),children:Kj(e.level)})]})}))`
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
`,Yj=H.span`
  font-size: 1.5em;
`,Xj=H.span`
  font-size: 2em;
`,dc=H(({className:t,title:e,subtext:n,value:r})=>g.jsxs("output",{className:t,children:[g.jsx(Yj,{children:e}),g.jsx("p",{children:n}),g.jsx(Xj,{children:r})]}))`
  background-color: var(--blue900);
  display: grid;
  justify-items: center;
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 8px hsl(0deg 0% 1.55% / 50%);
`,Jj=H.div`
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
`,Zj=H.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`,e5=H.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0 16px;
  gap: 32px;

  @media screen and (width >= 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,Iw=H.section`
  display: grid;
  gap: 8px;
`,t5=H.ul`
  list-style: none;
`,n5=H.li`
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
`,r5=H(({className:t,team:e,setTeam:n,teamId:r})=>{const i=o=>{Mi(on(Ke,"teams",r),{joinRequests:rl(o),users:bl({uid:o.uid,role:o.role}),userIds:bl(o.uid)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid),users:[...a.users,{uid:o.uid,role:o.role}],userIds:[...a.userIds,o.uid]}))},s=o=>{Mi(on(Ke,"teams",r),{joinRequests:rl(o)}),n(a=>({...a,joinRequests:a.joinRequests.filter(u=>u.uid!==o.uid)}))};return e?g.jsxs("div",{className:t,children:[g.jsx("h2",{children:"Admin"}),g.jsx(e5,{children:g.jsxs(vy,{roles:["admin","base+"],team:e,children:[g.jsxs(Iw,{children:[g.jsx("h3",{children:"Team Users"}),g.jsx(Zj,{children:e.users.map(o=>g.jsx(Fj,{team:e,setTeam:n,uid:o.uid,role:o.role}))})]}),g.jsxs(Iw,{children:[g.jsx("h3",{children:"Open Join Requests:"}),g.jsx(t5,{children:e.joinRequests.map(o=>g.jsxs(n5,{children:[g.jsx("span",{children:o.userEmail}),g.jsx("span",{children:o.role}),g.jsx(ft,{onClick:()=>i(o),text:"Accept"}),g.jsx(_y,{$level:"caution",onClick:()=>s(o),text:"Decline"})]}))})]})]})})]}):null})`
  display: grid;
  gap: 16px;
`,i5=H.div`
  background-color: var(--blue900);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 0 0 8px;
  padding: 8px;
  z-index: 1;
`,s5=H.div`
  &:not(:last-of-type) {
    border-bottom: 2px solid var(--blue900);
  }
  position: relative;
`,o5=H.li`
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
`,_y=H(ft)`
  background: transparent;
  color: var(--caution);
  border: 2px solid var(--caution);
  padding: 8px;
  white-space: nowrap;

  &:hover {
    background-color: var(--blue900);
  }
`,a5=H(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=["January","February","March","April","May","June","July","August","September","October","November","December"],{addToast:i,removeToast:s}=N.useContext(ia),o=c=>new Date(Number(c)*1e3).toLocaleDateString(),a=c=>c.map(d=>({time:o(d.date.seconds),id:d.id})).reduce((d,f)=>{const[p,T,w]=f.time.split("/"),x=`${r[Number(p)-1]}, ${w}`;return{...d,[x]:[...String(x)in d?d[String(x)]:[],f]}},{}),u=async c=>{await FS(on(Ke,"practice_plan",c)),n(d=>d.filter(f=>f.id!==c)),i({variant:"success",message:"Practice Plan Successfully Deleted",onClose:()=>s("Practice Plan Successfully Deleted")})};return g.jsx("ul",{className:t,children:Object.entries(a(e)).map(([c,d])=>g.jsxs(s5,{children:[g.jsx(i5,{children:c}),d.map(f=>g.jsxs(o5,{children:[g.jsx(Xo,{to:`practice_plans/${f.id}`,children:f.time},f.id),g.jsx(_y,{$level:"caution",text:"Delete Practice Plan",onClick:()=>u(f.id)})]}))]},c))})})`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  border: 1px solid var(--blue900);
`,l5=H(({className:t,practicePlans:e,setPracticePlans:n})=>{const r=qi();return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Practice Plans"}),g.jsx(a5,{practicePlans:e,setPracticePlans:n}),g.jsx(ft,{text:"Add Practice Plan",onClick:()=>r("practice_plans/create")})]})})`
  display: grid;
  gap: 16px;
`,dA=H.table`
  border-collapse: collapse;
  border-radius: 8px;
  overflow: clip;
`,wy=H.tr``,hn=H.td`
  padding: 4px 16px;
  text-align: center;
`,u5=H(({className:t,goal:e,teamId:n,moves:r,practicePlans:i})=>{const[s,o]=N.useState();N.useEffect(()=>{a(e.moveId,n).then(c=>o(c))},[e.moveId,n]);const a=async(c,d)=>await Sr(zs(Bn(Ke,"practice_plan"),kL(Ui("teamId","==",d),Ui("moves","array-contains",c)))).then(f=>f.docs.length),u=r.find(c=>c.id===e.moveId)||{name:"",area:"",position:""};return g.jsxs(wy,{className:t,children:[g.jsx(hn,{children:u.name}),g.jsx(hn,{children:u.area}),g.jsx(hn,{children:u.position}),g.jsx(hn,{children:String(e.startDate)}),g.jsx(hn,{children:String(e.endDate)}),g.jsxs(hn,{children:[Math.round(e.practicePlanPercentage*100),"%"]}),g.jsxs(hn,{children:[Math.round(Number(s)/i.length*100),"%"]})]})})`
  &:nth-of-type(odd) {
    background-color: hsla(255, 10%, 50%, 0.5);
    backdrop-filter: blur(3px);
  }
`,c5=H.div`
  min-width: 0;
  overflow: auto;

  & > ${dA} {
    min-width: 100%;
  }
`,d5=H.thead`
  & > ${wy} {
    background-color: var(--blue900);
  }
`,h5=H(({className:t,team:e,setTeam:n,moves:r,practicePlans:i})=>{const[s,o]=N.useState(.5),a=N.useRef(),u=()=>{a.current&&a.current.showModal()},c=()=>{a.current&&a.current.close()},d=f=>{f.preventDefault();const p=new FormData(f.currentTarget);if(!p.get("endDate")&&p.get("startDate")&&!p.get("move")){alert("Please enter all fields");return}if(Number(new Date(p.get("endDate")))-Number(new Date(p.get("startDate")))<0){alert("Start date cannot be after end date");return}const T={moveId:p.get("move"),startDate:p.get("startDate"),endDate:p.get("endDate"),practicePlanPercentage:s};Mi(on(Ke,"teams",e.id),{goals:bl(T)}),n(w=>({...w,goals:[...w.goals,T]})),c()};return g.jsxs("section",{className:t,children:[g.jsx("h2",{children:"Goals"}),g.jsx(c5,{children:g.jsxs(dA,{children:[g.jsx(d5,{children:g.jsxs(wy,{children:[g.jsx(hn,{children:"Name"}),g.jsx(hn,{children:"Area"}),g.jsx(hn,{children:"Position"}),g.jsx(hn,{children:"Start"}),g.jsx(hn,{children:"End"}),g.jsx(hn,{children:"Goal Percentage"}),g.jsx(hn,{children:"Current Percentage"})]})}),g.jsx("tbody",{children:e.goals.map(f=>g.jsx(u5,{goal:f,teamId:e.id,moves:r,practicePlans:i}))})]})}),g.jsx(ft,{text:"Add Goal",onClick:u}),g.jsx(ps,{passedRef:a,onClose:c,children:g.jsxs("form",{onSubmit:d,children:[g.jsx("h2",{children:"Add a Goal"}),g.jsxs("label",{htmlFor:"move",children:[g.jsx("span",{children:"Move:"}),g.jsx("select",{name:"move",id:"move",children:r.map(({id:f,name:p,area:T,position:w})=>g.jsxs("option",{value:f,children:[p," - ",T," - ",w]},f))})]}),g.jsxs("label",{htmlFor:"startDate",children:[g.jsx("span",{children:"Start Date:"}),g.jsx("input",{type:"date",name:"startDate",id:"startDate"})]}),g.jsxs("label",{htmlFor:"endDate",children:[g.jsx("span",{children:"End Date:"}),g.jsx("input",{type:"date",name:"endDate",id:"endDate"})]}),g.jsxs("label",{htmlFor:"practicePlanPercentage",children:[g.jsx("span",{children:"Percentage of Practices"}),g.jsx("output",{children:Math.round(s*100)}),g.jsx("input",{type:"range",max:"1",min:"0",step:".01",value:s,onChange:f=>o(Number(f.target.value))})]}),g.jsx(ft,{text:"Add Goal",type:"submit"})]})})]})})`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  gap: 16px;
`,f5=H(({className:t,practicePlans:e,moves:n})=>{const r=Object.entries(e.flatMap(o=>o.moves).reduce((o,a)=>({...o,[a]:o[a]?o[a]+1:1}),{})).map(([o,a])=>({...n.find(u=>u.id===o)??{},value:a})),i=Object.entries(r.reduce((o,a)=>({...o,[a.position]:o[a.position]?o[a.position]+a.value:a.value}),{})).map(([o,a])=>({name:o,value:a})),s=Object.entries(r.reduce((o,a)=>({...o,[a.area]:o[a.area]?o[a.area]+a.value:a.value}),{})).map(([o,a])=>({name:o,value:a}));return g.jsxs("section",{className:t,children:[g.jsx(mf,{data:r,width:500,height:500}),g.jsx(mf,{data:i,width:500,height:500}),g.jsx(mf,{data:s,width:500,height:500})]})})`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

  @media screen and (width >= 850px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    justify-content: unset;
  }
`,p5=H.main`
  display: grid;
  gap: 64px;
  max-width: 90%;

  @media screen and (width > 550px) {
    max-width: 80%;
  }
`,m5=H.div`
  padding-top: 64px;
  display: grid;
  gap: 16px;
`,Pa=H.hr`
  color: white;
`,g5=H(({className:t})=>{var d;const[e,n]=N.useState(),[r,i]=N.useState([]),[s,o]=N.useState([]),a=N.useContext(Bs),{id:u=""}=pg(),c=qi();return N.useEffect(()=>{u&&(Uj(u).then(n),$j(u).then(i),zj(u).then(o))},[u]),N.useEffect(()=>{a&&e&&!e.userIds.includes(a.uid)&&c("/")},[c,e,a]),g.jsx("div",{className:t,children:e?g.jsxs(p5,{children:[g.jsxs(m5,{children:[g.jsxs("h1",{children:[e.name," (",e.state,")"]}),g.jsxs(Jj,{children:[g.jsx(dc,{title:"Goals",value:((d=e.goals)==null?void 0:d.length)??0}),g.jsx(dc,{title:"Practice Plans",subtext:"practice plans in the current season",value:s.length}),g.jsx(dc,{title:"Moves",value:r.length})]})]}),g.jsx(Pa,{}),g.jsx(f5,{practicePlans:s,moves:r}),g.jsx(Pa,{}),g.jsx(h5,{team:e,setTeam:n,moves:r,practicePlans:s}),g.jsx(Pa,{}),g.jsx(l5,{practicePlans:s,setPracticePlans:o}),g.jsx(Pa,{}),g.jsx(qj,{team:e,teamId:u,setMoves:i,moves:r}),g.jsx(Pa,{}),g.jsx(r5,{setTeam:n,team:e,teamId:u})]}):g.jsx(py,{children:g.jsx(my,{})})})})`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
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

  & ${ps} > form {
    padding: 16px;
    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;
    }
  }
`,y5=H.main`
  min-height: 100%;
  background: linear-gradient(var(--blue500), var(--blue900));
  color: white;

  & a {
    color: currentColor;
  }
`,v5=t=>Sr(zs(Bn(Ke,"teams"),Ui("teamIds","array-contains",t))).then(e=>{e.docs.map(n=>({...n.data(),id:n.id}))});function _5(t){const e=N.useContext(Bs);return N.useEffect(()=>{e!=null&&e.uid&&v5(e.uid)},[e]),g.jsxs(y5,{children:[g.jsx("h1",{children:"Welcome to Home!"}),g.jsx(Xo,{to:"/teams",children:"Go To Teams"})]})}const w5=Rk(_p(g.jsxs(cr,{path:"/",element:g.jsx(c4,{}),children:[g.jsx(cr,{path:"/",element:g.jsx(_5,{})}),g.jsx(cr,{path:"teams/:id/practice_plans/create",element:g.jsx(ww,{})}),g.jsx(cr,{path:"teams/:id/practice_plans/:practice_plan_id",element:g.jsx(kj,{})}),g.jsx(cr,{path:"/teams",element:g.jsx(Vj,{})}),g.jsx(cr,{path:"/teams/:id",element:g.jsx(g5,{})}),g.jsx(cr,{path:"teams/:id/practice_plans/:practice_plan_id/edit",element:g.jsx(ww,{})}),g.jsx(cr,{path:"/sign_in",element:g.jsx(DN,{})}),g.jsx(cr,{path:"/sign_up",element:g.jsx(o4,{})})]}))),E5=H(({className:t})=>g.jsx("div",{className:t,children:g.jsx(a4,{children:g.jsx(j4,{children:g.jsxs(uP,{children:[g.jsx(Lk,{router:w5}),g.jsx(_4,{})]})})})}))`
  height: 100%;

  & > ${fp} {
    background: linear-gradient(var(--blue500), var(--blue900));
  }

  & > ${Gp} {
    --toast-position: 0%;
    position: fixed;
    bottom: 16px;
    right: var(--toast-position);
    width: 100%;
  }

  & > ${fp} {
    background: linear-gradient(var(--blue500), var(--blue900));
  }

  @media screen and (width > 850px) {
    & > ${Gp} {
      --toast-position: 32px;
      right: var(--toast-position);
    }
  }
`,T5=VE(document.getElementById("root"));async function I5(){if(!["development","test"].includes("production"))return;const{worker:t}=await DA(()=>import("./browser-BxBLihda.js"),[]);return t.start({serviceWorker:{url:"/technique-map/mockServiceWorker.js"}})}I5().then(()=>{T5.render(g.jsx(N.StrictMode,{children:g.jsx(E5,{})}))});
