var Mp=Object.defineProperty;var Ap=(e,t,n)=>t in e?Mp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var eu=(e,t,n)=>Ap(e,typeof t!="symbol"?t+"":t,n);import{g as Lp,m as _c,c as _p,a as Np,b as Bp,e as Fp,f as Up,h as Wp,i as Hp,I as Vp,P as Gp,d as $p,A as Qp,G as qp,R as Kp,T as Yp}from"./mermaid-BX4UPBNI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Nc={exports:{}},co={},Bc={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),Jp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),em=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),om=Symbol.for("react.memo"),lm=Symbol.for("react.lazy"),tu=Symbol.iterator;function am(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uc=Object.assign,Wc={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Fc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=Un.prototype;function Da(e,t,n){this.props=e,this.context=t,this.refs=Wc,this.updater=n||Fc}var Ia=Da.prototype=new Hc;Ia.constructor=Da;Uc(Ia,Un.prototype);Ia.isPureReactComponent=!0;var nu=Array.isArray,Vc=Object.prototype.hasOwnProperty,Ta={current:null},Gc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Vc.call(t,r)&&!Gc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Br,type:e,key:o,ref:a,props:i,_owner:Ta.current}}function sm(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?um(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Br:case Xp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Go(a,0):r,nu(i)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),bi(i,t,n,"",function(f){return f})):i!=null&&(Oa(i)&&(i=sm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ru,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",nu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Go(o,s);a+=bi(o,t,n,u,i)}else if(u=am(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Go(o,s++),a+=bi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ji={transition:null},dm={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ji,ReactCurrentOwner:Ta};function Qc(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Un;H.Fragment=Jp;H.Profiler=em;H.PureComponent=Da;H.StrictMode=Zp;H.Suspense=im;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;H.act=Qc;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Uc({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ta.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Vc.call(t,u)&&!Gc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:nm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tm,_context:e},e.Consumer=e};H.createElement=$c;H.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:rm,render:e}};H.isValidElement=Oa;H.lazy=function(e){return{$$typeof:lm,_payload:{_status:-1,_result:e},_init:cm}};H.memo=function(e,t){return{$$typeof:om,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};H.unstable_act=Qc;H.useCallback=function(e,t){return Pe.current.useCallback(e,t)};H.useContext=function(e){return Pe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};H.useEffect=function(e,t){return Pe.current.useEffect(e,t)};H.useId=function(){return Pe.current.useId()};H.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Pe.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};H.useRef=function(e){return Pe.current.useRef(e)};H.useState=function(e){return Pe.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Pe.current.useTransition()};H.version="18.3.1";Bc.exports=H;var h=Bc.exports;const Rn=Lp(h);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=h,pm=Symbol.for("react.element"),mm=Symbol.for("react.fragment"),hm=Object.prototype.hasOwnProperty,gm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ym={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hm.call(t,r)&&!ym.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pm,type:e,key:o,ref:a,props:i,_owner:gm.current}}co.Fragment=mm;co.jsx=qc;co.jsxs=qc;Nc.exports=co;var l=Nc.exports,Kc={exports:{}},Ve={},Yc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var U=P.length;P.push(B);e:for(;0<U;){var M=U-1>>>1,A=P[M];if(0<i(A,B))P[M]=B,P[U]=A,U=M;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],U=P.pop();if(U!==B){P[0]=U;e:for(var M=0,A=P.length,le=A>>>1;M<le;){var fe=2*(M+1)-1,Oe=P[fe],Ze=fe+1,he=P[Ze];if(0>i(Oe,U))Ze<A&&0>i(he,Oe)?(P[M]=he,P[Ze]=U,M=Ze):(P[M]=Oe,P[fe]=U,M=fe);else if(Ze<A&&0>i(he,U))P[M]=he,P[Ze]=U,M=Ze;else break e}}return B}function i(P,B){var U=P.sortIndex-B.sortIndex;return U!==0?U:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],f=[],v=1,y=null,g=3,w=!1,b=!1,C=!1,W=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(f);B!==null;){if(B.callback===null)r(f);else if(B.startTime<=P)r(f),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(f)}}function S(P){if(C=!1,m(P),!b)if(n(u)!==null)b=!0,q(E);else{var B=n(f);B!==null&&Te(S,B.startTime-P)}}function E(P,B){b=!1,C&&(C=!1,p(z),z=-1),w=!0;var U=g;try{for(m(B),y=n(u);y!==null&&(!(y.expirationTime>B)||P&&!K());){var M=y.callback;if(typeof M=="function"){y.callback=null,g=y.priorityLevel;var A=M(y.expirationTime<=B);B=e.unstable_now(),typeof A=="function"?y.callback=A:y===n(u)&&r(u),m(B)}else r(u);y=n(u)}if(y!==null)var le=!0;else{var fe=n(f);fe!==null&&Te(S,fe.startTime-B),le=!1}return le}finally{y=null,g=U,w=!1}}var D=!1,j=null,z=-1,L=5,T=-1;function K(){return!(e.unstable_now()-T<L)}function Ie(){if(j!==null){var P=e.unstable_now();T=P;var B=!0;try{B=j(!0,P)}finally{B?ee():(D=!1,j=null)}}else D=!1}var ee;if(typeof c=="function")ee=function(){c(Ie)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,F=Ee.port2;Ee.port1.onmessage=Ie,ee=function(){F.postMessage(null)}}else ee=function(){W(Ie,0)};function q(P){j=P,D||(D=!0,ee())}function Te(P,B){z=W(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,q(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var U=g;g=B;try{return P()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=g;g=P;try{return B()}finally{g=U}},e.unstable_scheduleCallback=function(P,B,U){var M=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?M+U:M):U=M,P){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=U+A,P={id:v++,callback:B,priorityLevel:P,startTime:U,expirationTime:A,sortIndex:-1},U>M?(P.sortIndex=U,t(f,P),n(u)===null&&P===n(f)&&(C?(p(z),z=-1):C=!0,Te(S,U-M))):(P.sortIndex=A,t(u,P),b||w||(b=!0,q(E))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var B=g;return function(){var U=g;g=B;try{return P.apply(this,arguments)}finally{g=U}}}})(Xc);Yc.exports=Xc;var vm=Yc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=h,He=vm;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jc=new Set,wr={};function an(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(wr[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,Sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},ou={};function wm(e){return Al.call(ou,e)?!0:Al.call(iu,e)?!1:Sm.test(e)?ou[e]=!0:(iu[e]=!0,!1)}function km(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,t,n,r){if(t===null||typeof t>"u"||km(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function Ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,Ma);ve[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,Ma);ve[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,Ma);ve[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cm(t,n,i,r)&&(n=null),r||i===null?wm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),mn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),_a=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),lu=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,$o;function lr(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Qo=!1;function qo(e,t){if(!e||Qo)return"";Qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function Em(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=qo(e.type,!1),e;case 11:return e=qo(e.type.render,!1),e;case 1:return e=qo(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case mn:return"Portal";case Ll:return"Profiler";case La:return"StrictMode";case _l:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case _a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Na:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function bm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=jm(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function id(e,t){t=t.checked,t!=null&&Aa(e,"checked",t,!1)}function Ul(e,t){id(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ar(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function od(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ld(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ld(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function sd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pm=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,Dn=null,In=null;function du(e){if(e=Wr(e)){if(typeof ql!="function")throw Error(k(280));var t=e.stateNode;t&&(t=go(t),ql(e.stateNode,e.type,t))}}function cd(e){Dn?In?In.push(e):In=[e]:Dn=e}function dd(){if(Dn){var e=Dn,t=In;if(In=Dn=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function fd(e,t){return e(t)}function pd(){}var Ko=!1;function md(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return fd(e,t,n)}finally{Ko=!1,(Dn!==null||In!==null)&&(pd(),dd())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Kl=!1;if(xt)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Kl=!1}function Dm(e,t,n,r,i,o,a,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var fr=!1,Fi=null,Ui=!1,Yl=null,Im={onError:function(e){fr=!0,Fi=e}};function Tm(e,t,n,r,i,o,a,s,u){fr=!1,Fi=null,Dm.apply(Im,arguments)}function Om(e,t,n,r,i,o,a,s,u){if(Tm.apply(this,arguments),fr){if(fr){var f=Fi;fr=!1,Fi=null}else throw Error(k(198));Ui||(Ui=!0,Yl=f)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(sn(e)!==e)throw Error(k(188))}function zm(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fu(i),e;if(o===r)return fu(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function gd(e){return e=zm(e),e!==null?yd(e):null}function yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yd(e);if(t!==null)return t;e=e.sibling}return null}var vd=He.unstable_scheduleCallback,pu=He.unstable_cancelCallback,Mm=He.unstable_shouldYield,Am=He.unstable_requestPaint,ae=He.unstable_now,Lm=He.unstable_getCurrentPriorityLevel,Fa=He.unstable_ImmediatePriority,xd=He.unstable_UserBlockingPriority,Wi=He.unstable_NormalPriority,_m=He.unstable_LowPriority,Sd=He.unstable_IdlePriority,fo=null,dt=null;function Nm(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Um,Bm=Math.log,Fm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Bm(e)/Fm|0)|0}var si=64,ui=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=sr(s):(o&=a,o!==0&&(r=sr(o)))}else a=n&~i,a!==0?r=sr(a):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function Wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-it(o),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=Wm(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Xl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wd(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Vm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ua(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cd,Wa,Ed,bd,jd,Jl=!1,ci=[],Ot=null,zt=null,Mt=null,Er=new Map,br=new Map,Pt=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wr(t),t!==null&&Wa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $m(e,t,n,r,i){switch(t){case"focusin":return Ot=Xn(Ot,e,t,n,r,i),!0;case"dragenter":return zt=Xn(zt,e,t,n,r,i),!0;case"mouseover":return Mt=Xn(Mt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Er.set(o,Xn(Er.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,br.set(o,Xn(br.get(o)||null,e,t,n,r,i)),!0}return!1}function Rd(e){var t=Yt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=hd(n),t!==null){e.blockedOn=t,jd(e.priority,function(){Ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Wr(n),t!==null&&Wa(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Ri(e)&&n.delete(t)}function Qm(){Jl=!1,Ot!==null&&Ri(Ot)&&(Ot=null),zt!==null&&Ri(zt)&&(zt=null),Mt!==null&&Ri(Mt)&&(Mt=null),Er.forEach(hu),br.forEach(hu)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Qm)))}function jr(e){function t(i){return Jn(i,e)}if(0<ci.length){Jn(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&Jn(Ot,e),zt!==null&&Jn(zt,e),Mt!==null&&Jn(Mt,e),Er.forEach(t),br.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Rd(n),n.blockedOn===null&&Pt.shift()}var Tn=Ct.ReactCurrentBatchConfig,Vi=!0;function qm(e,t,n,r){var i=Y,o=Tn.transition;Tn.transition=null;try{Y=1,Ha(e,t,n,r)}finally{Y=i,Tn.transition=o}}function Km(e,t,n,r){var i=Y,o=Tn.transition;Tn.transition=null;try{Y=4,Ha(e,t,n,r)}finally{Y=i,Tn.transition=o}}function Ha(e,t,n,r){if(Vi){var i=Zl(e,t,n,r);if(i===null)ll(e,t,r,Gi,n),mu(e,r);else if($m(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<Gm.indexOf(e)){for(;i!==null;){var o=Wr(i);if(o!==null&&Cd(o),o=Zl(e,t,n,r),o===null&&ll(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var Gi=null;function Zl(e,t,n,r){if(Gi=null,e=Ba(r),e=Yt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case Fa:return 1;case xd:return 4;case Wi:case _m:return 16;case Sd:return 536870912;default:return 16}default:return 16}}var It=null,Va=null,Pi=null;function Dd(){if(Pi)return Pi;var e,t=Va,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function gu(){return!1}function Ge(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:gu,this.isPropagationStopped=gu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Ge(Wn),Ur=ie({},Wn,{view:0,detail:0}),Ym=Ge(Ur),Xo,Jo,Zn,po=ie({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(Xo=e.screenX-Zn.screenX,Jo=e.screenY-Zn.screenY):Jo=Xo=0,Zn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),yu=Ge(po),Xm=ie({},po,{dataTransfer:0}),Jm=Ge(Xm),Zm=ie({},Ur,{relatedTarget:0}),Zo=Ge(Zm),eh=ie({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),th=Ge(eh),nh=ie({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=Ge(nh),ih=ie({},Wn,{data:0}),vu=Ge(ih),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ah[e])?!!t[e]:!1}function $a(){return sh}var uh=ie({},Ur,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ch=Ge(uh),dh=ie({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Ge(dh),fh=ie({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),ph=Ge(fh),mh=ie({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hh=Ge(mh),gh=ie({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=Ge(gh),vh=[9,13,27,32],Qa=xt&&"CompositionEvent"in window,pr=null;xt&&"documentMode"in document&&(pr=document.documentMode);var xh=xt&&"TextEvent"in window&&!pr,Id=xt&&(!Qa||pr&&8<pr&&11>=pr),Su=" ",wu=!1;function Td(e,t){switch(e){case"keyup":return vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Sh(e,t){switch(e){case"compositionend":return Od(t);case"keypress":return t.which!==32?null:(wu=!0,Su);case"textInput":return e=t.data,e===Su&&wu?null:e;default:return null}}function wh(e,t){if(gn)return e==="compositionend"||!Qa&&Td(e,t)?(e=Dd(),Pi=Va=It=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Id&&t.locale!=="ko"?null:t.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kh[e.type]:t==="textarea"}function zd(e,t,n,r){cd(r),t=$i(t,"onChange"),0<t.length&&(n=new Ga("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Rr=null;function Ch(e){Vd(e,0)}function mo(e){var t=xn(e);if(rd(t))return e}function Eh(e,t){if(e==="change")return t}var Md=!1;if(xt){var el;if(xt){var tl="oninput"in document;if(!tl){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),tl=typeof Cu.oninput=="function"}el=tl}else el=!1;Md=el&&(!document.documentMode||9<document.documentMode)}function Eu(){mr&&(mr.detachEvent("onpropertychange",Ad),Rr=mr=null)}function Ad(e){if(e.propertyName==="value"&&mo(Rr)){var t=[];zd(t,Rr,e,Ba(e)),md(Ch,t)}}function bh(e,t,n){e==="focusin"?(Eu(),mr=t,Rr=n,mr.attachEvent("onpropertychange",Ad)):e==="focusout"&&Eu()}function jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(Rr)}function Rh(e,t){if(e==="click")return mo(t)}function Ph(e,t){if(e==="input"||e==="change")return mo(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Dh;function Pr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Al.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ih(e){var t=_d(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ld(n.ownerDocument.documentElement,n)){if(r!==null&&qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ju(n,o);var a=ju(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Th=xt&&"documentMode"in document&&11>=document.documentMode,yn=null,ea=null,hr=null,ta=!1;function Ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ta||yn==null||yn!==Bi(r)||(r=yn,"selectionStart"in r&&qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Pr(hr,r)||(hr=r,r=$i(ea,"onSelect"),0<r.length&&(t=new Ga("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},nl={},Nd={};xt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function ho(e){if(nl[e])return nl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nd)return nl[e]=t[n];return e}var Bd=ho("animationend"),Fd=ho("animationiteration"),Ud=ho("animationstart"),Wd=ho("transitionend"),Hd=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Hd.set(e,t),an(t,[e])}for(var rl=0;rl<Pu.length;rl++){var il=Pu[rl],Oh=il.toLowerCase(),zh=il[0].toUpperCase()+il.slice(1);Ht(Oh,"on"+zh)}Ht(Bd,"onAnimationEnd");Ht(Fd,"onAnimationIteration");Ht(Ud,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Wd,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Om(r,t,void 0,e),e.currentTarget=null}function Vd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Du(i,s,f),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,f=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Du(i,s,f),o=u}}}if(Ui)throw e=Yl,Ui=!1,Yl=null,e}function J(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function ol(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[pi]){e[pi]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(Mh.has(n)||ol(n,!1,e),ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,ol("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(Pd(t)){case 1:var i=qm;break;case 4:i=Km;break;default:i=Ha}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Yt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}md(function(){var f=o,v=Ba(n),y=[];e:{var g=Hd.get(e);if(g!==void 0){var w=Ga,b=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":w=ch;break;case"focusin":b="focus",w=Zo;break;case"focusout":b="blur",w=Zo;break;case"beforeblur":case"afterblur":w=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ph;break;case Bd:case Fd:case Ud:w=th;break;case Wd:w=hh;break;case"scroll":w=Ym;break;case"wheel":w=yh;break;case"copy":case"cut":case"paste":w=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xu}var C=(t&4)!==0,W=!C&&e==="scroll",p=C?g!==null?g+"Capture":null:g;C=[];for(var c=f,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=Cr(c,p),S!=null&&C.push(Ir(c,S,m)))),W)break;c=c.return}0<C.length&&(g=new w(g,b,null,n,v),y.push({event:g,listeners:C}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==Ql&&(b=n.relatedTarget||n.fromElement)&&(Yt(b)||b[St]))break e;if((w||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=f,b=b?Yt(b):null,b!==null&&(W=sn(b),b!==W||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=f),w!==b)){if(C=yu,S="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=xu,S="onPointerLeave",p="onPointerEnter",c="pointer"),W=w==null?g:xn(w),m=b==null?g:xn(b),g=new C(S,c+"leave",w,n,v),g.target=W,g.relatedTarget=m,S=null,Yt(v)===f&&(C=new C(p,c+"enter",b,n,v),C.target=m,C.relatedTarget=W,S=C),W=S,w&&b)t:{for(C=w,p=b,c=0,m=C;m;m=dn(m))c++;for(m=0,S=p;S;S=dn(S))m++;for(;0<c-m;)C=dn(C),c--;for(;0<m-c;)p=dn(p),m--;for(;c--;){if(C===p||p!==null&&C===p.alternate)break t;C=dn(C),p=dn(p)}C=null}else C=null;w!==null&&Iu(y,g,w,C,!1),b!==null&&W!==null&&Iu(y,W,b,C,!0)}}e:{if(g=f?xn(f):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=Eh;else if(ku(g))if(Md)E=Ph;else{E=jh;var D=bh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Rh);if(E&&(E=E(e,f))){zd(y,E,n,v);break e}D&&D(e,g,f),e==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&Wl(g,"number",g.value)}switch(D=f?xn(f):window,e){case"focusin":(ku(D)||D.contentEditable==="true")&&(yn=D,ea=f,hr=null);break;case"focusout":hr=ea=yn=null;break;case"mousedown":ta=!0;break;case"contextmenu":case"mouseup":case"dragend":ta=!1,Ru(y,n,v);break;case"selectionchange":if(Th)break;case"keydown":case"keyup":Ru(y,n,v)}var j;if(Qa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else gn?Td(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Id&&n.locale!=="ko"&&(gn||z!=="onCompositionStart"?z==="onCompositionEnd"&&gn&&(j=Dd()):(It=v,Va="value"in It?It.value:It.textContent,gn=!0)),D=$i(f,z),0<D.length&&(z=new vu(z,e,null,n,v),y.push({event:z,listeners:D}),j?z.data=j:(j=Od(n),j!==null&&(z.data=j)))),(j=xh?Sh(e,n):wh(e,n))&&(f=$i(f,"onBeforeInput"),0<f.length&&(v=new vu("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=j))}Vd(y,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Ir(e,o,i)),o=Cr(e,t),o!=null&&r.push(Ir(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iu(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=Cr(n,o),u!=null&&a.unshift(Ir(n,u,s))):i||(u=Cr(n,o),u!=null&&a.push(Ir(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ah=/\r\n?/g,Lh=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(Ah,`
`).replace(Lh,"")}function mi(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(k(425))}function Qi(){}var na=null,ra=null;function ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,_h=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Nh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Bh)}:oa;function Bh(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Hn,Tr="__reactProps$"+Hn,St="__reactContainer$"+Hn,la="__reactEvents$"+Hn,Fh="__reactListeners$"+Hn,Uh="__reactHandles$"+Hn;function Yt(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zu(e);e!==null;){if(n=e[ct])return n;e=zu(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[ct]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function go(e){return e[Tr]||null}var aa=[],Sn=-1;function Vt(e){return{current:e}}function Z(e){0>Sn||(e.current=aa[Sn],aa[Sn]=null,Sn--)}function X(e,t){Sn++,aa[Sn]=e.current,e.current=t}var Wt={},Ce=Vt(Wt),Le=Vt(!1),tn=Wt;function An(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function qi(){Z(Le),Z(Ce)}function Mu(e,t,n){if(Ce.current!==Wt)throw Error(k(168));X(Ce,t),X(Le,n)}function $d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,bm(e)||"Unknown",i));return ie({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,tn=Ce.current,X(Ce,e),X(Le,Le.current),!0}function Au(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=$d(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(Ce),X(Ce,e)):Z(Le),X(Le,n)}var ht=null,yo=!1,sl=!1;function Qd(e){ht===null?ht=[e]:ht.push(e)}function Wh(e){yo=!0,Qd(e)}function Gt(){if(!sl&&ht!==null){sl=!0;var e=0,t=Y;try{var n=ht;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,yo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),vd(Fa,Gt),i}finally{Y=t,sl=!1}}return null}var wn=[],kn=0,Yi=null,Xi=0,Qe=[],qe=0,nn=null,gt=1,yt="";function qt(e,t){wn[kn++]=Xi,wn[kn++]=Yi,Yi=e,Xi=t}function qd(e,t,n){Qe[qe++]=gt,Qe[qe++]=yt,Qe[qe++]=nn,nn=e;var r=gt;e=yt;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gt=1<<32-it(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Ka(e){e.return!==null&&(qt(e,1),qd(e,1,0))}function Ya(e){for(;e===Yi;)Yi=wn[--kn],wn[kn]=null,Xi=wn[--kn],wn[kn]=null;for(;e===nn;)nn=Qe[--qe],Qe[qe]=null,yt=Qe[--qe],Qe[qe]=null,gt=Qe[--qe],Qe[qe]=null}var We=null,Ue=null,te=!1,rt=null;function Kd(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ue=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ue=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(te){var t=Ue;if(t){var n=t;if(!Lu(e,t)){if(sa(e))throw Error(k(418));t=At(n.nextSibling);var r=We;t&&Lu(e,t)?Kd(r,n):(e.flags=e.flags&-4097|2,te=!1,We=e)}}else{if(sa(e))throw Error(k(418));e.flags=e.flags&-4097|2,te=!1,We=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function hi(e){if(e!==We)return!1;if(!te)return _u(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ia(e.type,e.memoizedProps)),t&&(t=Ue)){if(sa(e))throw Yd(),Error(k(418));for(;t;)Kd(e,t),t=At(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=We?At(e.stateNode.nextSibling):null;return!0}function Yd(){for(var e=Ue;e;)e=At(e.nextSibling)}function Ln(){Ue=We=null,te=!1}function Xa(e){rt===null?rt=[e]:rt.push(e)}var Hh=Ct.ReactCurrentBatchConfig;function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nu(e){var t=e._init;return t(e._payload)}function Xd(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Bt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,S){return c===null||c.tag!==6?(c=hl(m,p.mode,S),c.return=p,c):(c=i(c,m),c.return=p,c)}function u(p,c,m,S){var E=m.type;return E===hn?v(p,c,m.props.children,S,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Nu(E)===c.type)?(S=i(c,m.props),S.ref=er(p,c,m),S.return=p,S):(S=Li(m.type,m.key,m.props,null,p.mode,S),S.ref=er(p,c,m),S.return=p,S)}function f(p,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=gl(m,p.mode,S),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function v(p,c,m,S,E){return c===null||c.tag!==7?(c=en(m,p.mode,S,E),c.return=p,c):(c=i(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=hl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oi:return m=Li(c.type,c.key,c.props,null,p.mode,m),m.ref=er(p,null,c),m.return=p,m;case mn:return c=gl(c,p.mode,m),c.return=p,c;case jt:var S=c._init;return y(p,S(c._payload),m)}if(ar(c)||Kn(c))return c=en(c,p.mode,m,null),c.return=p,c;gi(p,c)}return null}function g(p,c,m,S){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===E?u(p,c,m,S):null;case mn:return m.key===E?f(p,c,m,S):null;case jt:return E=m._init,g(p,c,E(m._payload),S)}if(ar(m)||Kn(m))return E!==null?null:v(p,c,m,S,null);gi(p,m)}return null}function w(p,c,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,s(c,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oi:return p=p.get(S.key===null?m:S.key)||null,u(c,p,S,E);case mn:return p=p.get(S.key===null?m:S.key)||null,f(c,p,S,E);case jt:var D=S._init;return w(p,c,m,D(S._payload),E)}if(ar(S)||Kn(S))return p=p.get(m)||null,v(c,p,S,E,null);gi(c,S)}return null}function b(p,c,m,S){for(var E=null,D=null,j=c,z=c=0,L=null;j!==null&&z<m.length;z++){j.index>z?(L=j,j=null):L=j.sibling;var T=g(p,j,m[z],S);if(T===null){j===null&&(j=L);break}e&&j&&T.alternate===null&&t(p,j),c=o(T,c,z),D===null?E=T:D.sibling=T,D=T,j=L}if(z===m.length)return n(p,j),te&&qt(p,z),E;if(j===null){for(;z<m.length;z++)j=y(p,m[z],S),j!==null&&(c=o(j,c,z),D===null?E=j:D.sibling=j,D=j);return te&&qt(p,z),E}for(j=r(p,j);z<m.length;z++)L=w(j,p,z,m[z],S),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?z:L.key),c=o(L,c,z),D===null?E=L:D.sibling=L,D=L);return e&&j.forEach(function(K){return t(p,K)}),te&&qt(p,z),E}function C(p,c,m,S){var E=Kn(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var D=E=null,j=c,z=c=0,L=null,T=m.next();j!==null&&!T.done;z++,T=m.next()){j.index>z?(L=j,j=null):L=j.sibling;var K=g(p,j,T.value,S);if(K===null){j===null&&(j=L);break}e&&j&&K.alternate===null&&t(p,j),c=o(K,c,z),D===null?E=K:D.sibling=K,D=K,j=L}if(T.done)return n(p,j),te&&qt(p,z),E;if(j===null){for(;!T.done;z++,T=m.next())T=y(p,T.value,S),T!==null&&(c=o(T,c,z),D===null?E=T:D.sibling=T,D=T);return te&&qt(p,z),E}for(j=r(p,j);!T.done;z++,T=m.next())T=w(j,p,z,T.value,S),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?z:T.key),c=o(T,c,z),D===null?E=T:D.sibling=T,D=T);return e&&j.forEach(function(Ie){return t(p,Ie)}),te&&qt(p,z),E}function W(p,c,m,S){if(typeof m=="object"&&m!==null&&m.type===hn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var E=m.key,D=c;D!==null;){if(D.key===E){if(E=m.type,E===hn){if(D.tag===7){n(p,D.sibling),c=i(D,m.props.children),c.return=p,p=c;break e}}else if(D.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Nu(E)===D.type){n(p,D.sibling),c=i(D,m.props),c.ref=er(p,D,m),c.return=p,p=c;break e}n(p,D);break}else t(p,D);D=D.sibling}m.type===hn?(c=en(m.props.children,p.mode,S,m.key),c.return=p,p=c):(S=Li(m.type,m.key,m.props,null,p.mode,S),S.ref=er(p,c,m),S.return=p,p=S)}return a(p);case mn:e:{for(D=m.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=gl(m,p.mode,S),c.return=p,p=c}return a(p);case jt:return D=m._init,W(p,c,D(m._payload),S)}if(ar(m))return b(p,c,m,S);if(Kn(m))return C(p,c,m,S);gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=hl(m,p.mode,S),c.return=p,p=c),a(p)):n(p,c)}return W}var _n=Xd(!0),Jd=Xd(!1),Ji=Vt(null),Zi=null,Cn=null,Ja=null;function Za(){Ja=Cn=Zi=null}function es(e){var t=Ji.current;Z(Ji),e._currentValue=t}function ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Zi=e,Ja=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Zi===null)throw Error(k(308));Cn=e,Zi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Xt=null;function ts(e){Xt===null?Xt=[e]:Xt.push(e)}function Zd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ts(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,ts(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,a===null?o=f:a.next=f,a=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==a&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=u))}if(o!==null){var y=i.baseState;a=0,v=f=u=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,C=s;switch(g=t,w=n,C.tag){case 1:if(b=C.payload,typeof b=="function"){y=b.call(w,y,g);break e}y=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=C.payload,g=typeof b=="function"?b.call(w,y,g):b,g==null)break e;y=ie({},y,g);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=w,u=y):v=v.next=w,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(v===null&&(u=y),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=a,e.lanes=a,e.memoizedState=y}}function Fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Hr={},ft=Vt(Hr),Or=Vt(Hr),zr=Vt(Hr);function Jt(e){if(e===Hr)throw Error(k(174));return e}function rs(e,t){switch(X(zr,t),X(Or,e),X(ft,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}Z(ft),X(ft,t)}function Nn(){Z(ft),Z(Or),Z(zr)}function tf(e){Jt(zr.current);var t=Jt(ft.current),n=Vl(t,e.type);t!==n&&(X(Or,e),X(ft,n))}function is(e){Or.current===e&&(Z(ft),Z(Or))}var ne=Vt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function os(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Ti=Ct.ReactCurrentDispatcher,cl=Ct.ReactCurrentBatchConfig,rn=0,re=null,ce=null,pe=null,no=!1,gr=!1,Mr=0,Vh=0;function Se(){throw Error(k(321))}function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function as(e,t,n,r,i,o){if(rn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ti.current=e===null||e.memoizedState===null?qh:Kh,e=n(r,i),gr){o=0;do{if(gr=!1,Mr=0,25<=o)throw Error(k(301));o+=1,pe=ce=null,t.updateQueue=null,Ti.current=Yh,e=n(r,i)}while(gr)}if(Ti.current=ro,t=ce!==null&&ce.next!==null,rn=0,pe=ce=re=null,no=!1,t)throw Error(k(300));return e}function ss(){var e=Mr!==0;return Mr=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?re.memoizedState=pe=e:pe=pe.next=e,pe}function Je(){if(ce===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=pe===null?re.memoizedState:pe.next;if(t!==null)pe=t,ce=e;else{if(e===null)throw Error(k(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?re.memoizedState=pe=e:pe=pe.next=e}return pe}function Ar(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ce,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,u=null,f=o;do{var v=f.lane;if((rn&v)===v)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=y,a=r):u=u.next=y,re.lanes|=v,on|=v}f=f.next}while(f!==null&&f!==o);u===null?a=r:u.next=s,lt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fl(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);lt(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nf(){}function rf(e,t){var n=re,r=Je(),i=t(),o=!lt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,us(af.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Lr(9,lf.bind(null,n,r,i,t),void 0,null),me===null)throw Error(k(349));rn&30||of(n,t,i)}return i}function of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lf(e,t,n,r){t.value=n,t.getSnapshot=r,sf(t)&&uf(e)}function af(e,t,n){return n(function(){sf(t)&&uf(e)})}function sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function uf(e){var t=wt(e,1);t!==null&&ot(t,e,1,-1)}function Uu(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Qh.bind(null,re,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cf(){return Je().memoizedState}function Oi(e,t,n,r){var i=ut();re.flags|=e,i.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(ce!==null){var a=ce.memoizedState;if(o=a.destroy,r!==null&&ls(r,a.deps)){i.memoizedState=Lr(t,n,o,r);return}}re.flags|=e,i.memoizedState=Lr(1|t,n,o,r)}function Wu(e,t){return Oi(8390656,8,e,t)}function us(e,t){return vo(2048,8,e,t)}function df(e,t){return vo(4,2,e,t)}function ff(e,t){return vo(4,4,e,t)}function pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,pf.bind(null,t,e),n)}function cs(){}function hf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yf(e,t,n){return rn&21?(lt(n,t)||(n=wd(),re.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Gh(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{Y=n,cl.transition=r}}function vf(){return Je().memoizedState}function $h(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xf(e))Sf(t,n);else if(n=Zd(e,t,n,r),n!==null){var i=Re();ot(n,e,r,i),wf(n,t,r)}}function Qh(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xf(e))Sf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,lt(s,a)){var u=t.interleaved;u===null?(i.next=i,ts(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Zd(e,t,i,r),n!==null&&(i=Re(),ot(n,e,r,i),wf(n,t,r))}}function xf(e){var t=e.alternate;return e===re||t!==null&&t===re}function Sf(e,t){gr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ua(e,n)}}var ro={readContext:Xe,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},qh={readContext:Xe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$h.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:cs,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Gh.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=ut();if(te){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),me===null)throw Error(k(349));rn&30||of(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wu(af.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,lf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ut(),t=me.identifierPrefix;if(te){var n=yt,r=gt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kh={readContext:Xe,useCallback:hf,useContext:Xe,useEffect:us,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:dl,useRef:cf,useState:function(){return dl(Ar)},useDebugValue:cs,useDeferredValue:function(e){var t=Je();return yf(t,ce.memoizedState,e)},useTransition:function(){var e=dl(Ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:vf,unstable_isNewReconciler:!1},Yh={readContext:Xe,useCallback:hf,useContext:Xe,useEffect:us,useImperativeHandle:mf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:fl,useRef:cf,useState:function(){return fl(Ar)},useDebugValue:cs,useDeferredValue:function(e){var t=Je();return ce===null?t.memoizedState=e:yf(t,ce.memoizedState,e)},useTransition:function(){var e=fl(Ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:vf,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Nt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(ot(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Nt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Lt(e,o,i),t!==null&&(ot(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Nt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Lt(e,i,r),t!==null&&(ot(t,e,r,n),Ii(t,e,r))}};function Hu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function kf(e,t,n){var r=!1,i=Wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(i=_e(t)?tn:Ce.current,r=t.contextTypes,o=(r=r!=null)?An(e,i):Wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function fa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ns(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xe(o):(o=_e(t)?tn:Ce.current,i.context=An(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(da(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=Em(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xh=typeof WeakMap=="function"?WeakMap:Map;function Cf(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ca=r),pa(e,t)},n}function Ef(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pa(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dg.bind(null,e,t,n),t.then(e,e))}function $u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var Jh=Ct.ReactCurrentOwner,Ae=!1;function je(e,t,n,r){t.child=e===null?Jd(t,null,n,r):_n(t,e.child,n,r)}function qu(e,t,n,r,i){n=n.render;var o=t.ref;return On(t,i),r=as(e,t,n,r,o,i),n=ss(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(te&&n&&Ka(t),t.flags|=1,je(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bf(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(a,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pr(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,kt(e,t,i)}return ma(e,t,n,r,i)}function jf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(bn,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(bn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(bn,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(bn,Be),Be|=r;return je(e,t,i,n),t.child}function Rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,i){var o=_e(n)?tn:Ce.current;return o=An(t,o),On(t,i),n=as(e,t,n,r,o,i),r=ss(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(te&&r&&Ka(t),t.flags|=1,je(e,t,n,i),t.child)}function Yu(e,t,n,r,i){if(_e(n)){var o=!0;Ki(t)}else o=!1;if(On(t,i),t.stateNode===null)zi(e,t),kf(t,n,r),fa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=Xe(f):(f=_e(n)?tn:Ce.current,f=An(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==f)&&Vu(t,a,r,f),Rt=!1;var g=t.memoizedState;a.state=g,eo(t,r,a,i),u=t.memoizedState,s!==r||g!==u||Le.current||Rt?(typeof v=="function"&&(da(t,n,v,r),u=t.memoizedState),(s=Rt||Hu(t,n,s,r,g,u,f))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=f,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ef(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:tt(t.type,s),a.props=f,y=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=_e(n)?tn:Ce.current,u=An(t,u));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==y||g!==u)&&Vu(t,a,r,u),Rt=!1,g=t.memoizedState,a.state=g,eo(t,r,a,i);var b=t.memoizedState;s!==y||g!==b||Le.current||Rt?(typeof w=="function"&&(da(t,n,w,r),b=t.memoizedState),(f=Rt||Hu(t,n,f,r,g,b,u)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=u,r=f):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){Rf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Au(t,n,!1),kt(e,t,o);r=t.stateNode,Jh.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=_n(t,e.child,null,o),t.child=_n(t,null,s,o)):je(e,t,s,o),t.memoizedState=r.state,i&&Au(t,n,!0),t.child}function Pf(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),rs(e,t.containerInfo)}function Xu(e,t,n,r,i){return Ln(),Xa(i),t.flags|=256,je(e,t,n,r),t.child}var ga={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function Df(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ne,i&1),e===null)return ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ko(a,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=ga,e):ds(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zh(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Bt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Bt(s,o):(o=en(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ya(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ga,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&Xa(r),_n(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zh(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(k(422))),yi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),o=en(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_n(t,e.child,null,a),t.child.memoizedState=ya(a),t.memoizedState=ga,o);if(!(t.mode&1))return yi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=pl(o,r,void 0),yi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ae||s){if(r=me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),ot(r,e,i,-1))}return ys(),r=pl(Error(k(421))),yi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=At(i.nextSibling),We=t,te=!0,rt=null,e!==null&&(Qe[qe++]=gt,Qe[qe++]=yt,Qe[qe++]=nn,gt=e.id,yt=e.overflow,nn=t),t=ds(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ca(e.return,t,n)}function ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function If(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,o);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eg(e,t,n){switch(t.tag){case 3:Pf(t),Ln();break;case 5:tf(t);break;case 1:_e(t.type)&&Ki(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Df(e,t,n):(X(ne,ne.current&1),e=kt(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return If(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,jf(e,t,n)}return kt(e,t,n)}var Tf,va,Of,zf;Tf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};va=function(){};Of=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jt(ft.current);var o=null;switch(n){case"input":i=Fl(e,i),r=Fl(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}Gl(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(wr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(wr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&J("scroll",e),o||s===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};zf=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tg(e,t,n){var r=t.pendingProps;switch(Ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return _e(t.type)&&qi(),we(t),null;case 3:return r=t.stateNode,Nn(),Z(Le),Z(Ce),os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(ja(rt),rt=null))),va(e,t),we(t),null;case 5:is(t);var i=Jt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Of(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return we(t),null}if(e=Jt(ft.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ct]=t,r[Tr]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)J(ur[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":au(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":uu(r,o),J("invalid",r)}Gl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",""+s]):wr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&J("scroll",r)}switch(n){case"input":li(r),su(r,o,!0);break;case"textarea":li(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ld(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ct]=t,e[Tr]=r,Tf(e,t,!1,!1),t.stateNode=e;e:{switch(a=$l(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)J(ur[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":au(e,r),i=Fl(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":uu(e,r),i=Hl(e,r),J("invalid",e);break;default:i=r}Gl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?ud(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ad(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&kr(e,u):typeof u=="number"&&kr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&J("scroll",e):u!=null&&Aa(e,o,u,a))}switch(n){case"input":li(e),su(e,r,!1);break;case"textarea":li(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)zf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Jt(zr.current),Jt(ft.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return we(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))Yd(),Ln(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ct]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else rt!==null&&(ja(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?de===0&&(de=3):ys())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Nn(),va(e,t),e===null&&Dr(t.stateNode.containerInfo),we(t),null;case 10:return es(t.type._context),we(t),null;case 17:return _e(t.type)&&qi(),we(t),null;case 19:if(Z(ne),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)tr(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=to(e),a!==null){for(t.flags|=128,tr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Fn&&(t.flags|=128,r=!0,tr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!te)return we(t),null}else 2*ae()-o.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,tr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function ng(e,t){switch(Ya(t),t.tag){case 1:return _e(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),Z(Le),Z(Ce),os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return Nn(),null;case 10:return es(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var vi=!1,ke=!1,rg=typeof WeakSet=="function"?WeakSet:Set,O=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function xa(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Zu=!1;function ig(e,t){if(na=Vi,e=_d(),qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var w;y!==n||i!==0&&y.nodeType!==3||(s=a+i),y!==o||r!==0&&y.nodeType!==3||(u=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(w=y.firstChild)!==null;)g=y,y=w;for(;;){if(y===e)break t;if(g===n&&++f===i&&(s=a),g===o&&++v===r&&(u=a),(w=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ra={focusedElem:e,selectionRange:n},Vi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var C=b.memoizedProps,W=b.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:tt(t.type,C),W);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return b=Zu,Zu=!1,b}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xa(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Tr],delete t[la],delete t[Fh],delete t[Uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Af(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Af(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var ge=null,nt=!1;function bt(e,t,n){for(n=n.child;n!==null;)Lf(e,t,n),n=n.sibling}function Lf(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:ke||En(n,t);case 6:var r=ge,i=nt;ge=null,bt(e,t,n),ge=r,nt=i,ge!==null&&(nt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(nt?(e=ge,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),jr(e)):al(ge,n.stateNode));break;case 4:r=ge,i=nt,ge=n.stateNode.containerInfo,nt=!0,bt(e,t,n),ge=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xa(n,t,a),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!ke&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,bt(e,t,n),ke=r):bt(e,t,n);break;default:bt(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rg),t.forEach(function(r){var i=pg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,nt=!1;break e;case 3:ge=s.stateNode.containerInfo,nt=!0;break e;case 4:ge=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(ge===null)throw Error(k(160));Lf(o,a,i),ge=null,nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){oe(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),st(e),r&4){try{yr(3,e,e.return),So(3,e)}catch(C){oe(e,e.return,C)}try{yr(5,e,e.return)}catch(C){oe(e,e.return,C)}}break;case 1:et(t,e),st(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(et(t,e),st(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(C){oe(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&id(i,o),$l(s,a);var f=$l(s,o);for(a=0;a<u.length;a+=2){var v=u[a],y=u[a+1];v==="style"?ud(i,y):v==="dangerouslySetInnerHTML"?ad(i,y):v==="children"?kr(i,y):Aa(i,v,y,f)}switch(s){case"input":Ul(i,o);break;case"textarea":od(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Pn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Pn(i,!!o.multiple,o.defaultValue,!0):Pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tr]=o}catch(C){oe(e,e.return,C)}}break;case 6:if(et(t,e),st(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){oe(e,e.return,C)}}break;case 3:if(et(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(C){oe(e,e.return,C)}break;case 4:et(t,e),st(e);break;case 13:et(t,e),st(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ms=ae())),r&4&&tc(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(f=ke)||v,et(t,e),ke=f):et(t,e),st(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(O=e,v=e.child;v!==null;){for(y=O=v;O!==null;){switch(g=O,w=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:En(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(C){oe(r,n,C)}}break;case 5:En(g,g.return);break;case 22:if(g.memoizedState!==null){rc(y);continue}}w!==null?(w.return=g,O=w):rc(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,u=y.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=sd("display",a))}catch(C){oe(e,e.return,C)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(C){oe(e,e.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:et(t,e),st(e),r&4&&tc(e);break;case 21:break;default:et(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Af(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var o=ec(e);ka(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ec(e);wa(e,s,a);break;default:throw Error(k(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function og(e,t,n){O=e,Nf(e)}function Nf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vi;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ke;s=vi;var f=ke;if(vi=a,(ke=u)&&!f)for(O=i;O!==null;)a=O,u=a.child,a.tag===22&&a.memoizedState!==null?ic(i):u!==null?(u.return=a,O=u):ic(i);for(;o!==null;)O=o,Nf(o),o=o.sibling;O=i,vi=s,ke=f}nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):nc(e)}}function nc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&jr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ke||t.flags&512&&Sa(t)}catch(g){oe(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function rc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function ic(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){oe(t,i,u)}}var o=t.return;try{Sa(t)}catch(u){oe(t,o,u)}break;case 5:var a=t.return;try{Sa(t)}catch(u){oe(t,a,u)}}}catch(u){oe(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var lg=Math.ceil,io=Ct.ReactCurrentDispatcher,fs=Ct.ReactCurrentOwner,Ye=Ct.ReactCurrentBatchConfig,Q=0,me=null,se=null,ye=0,Be=0,bn=Vt(0),de=0,_r=null,on=0,wo=0,ps=0,vr=null,Me=null,ms=0,Fn=1/0,mt=null,oo=!1,Ca=null,_t=null,xi=!1,Tt=null,lo=0,xr=0,Ea=null,Mi=-1,Ai=0;function Re(){return Q&6?ae():Mi!==-1?Mi:Mi=ae()}function Nt(e){return e.mode&1?Q&2&&ye!==0?ye&-ye:Hh.transition!==null?(Ai===0&&(Ai=wd()),Ai):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Pd(e.type)),e):1}function ot(e,t,n,r){if(50<xr)throw xr=0,Ea=null,Error(k(185));Fr(e,n,r),(!(Q&2)||e!==me)&&(e===me&&(!(Q&2)&&(wo|=n),de===4&&Dt(e,ye)),Ne(e,r),n===1&&Q===0&&!(t.mode&1)&&(Fn=ae()+500,yo&&Gt()))}function Ne(e,t){var n=e.callbackNode;Hm(e,t);var r=Hi(e,e===me?ye:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?Wh(oc.bind(null,e)):Qd(oc.bind(null,e)),Nh(function(){!(Q&6)&&Gt()}),n=null;else{switch(kd(r)){case 1:n=Fa;break;case 4:n=xd;break;case 16:n=Wi;break;case 536870912:n=Sd;break;default:n=Wi}n=$f(n,Bf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bf(e,t){if(Mi=-1,Ai=0,Q&6)throw Error(k(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Hi(e,e===me?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=Q;Q|=2;var o=Uf();(me!==e||ye!==t)&&(mt=null,Fn=ae()+500,Zt(e,t));do try{ug();break}catch(s){Ff(e,s)}while(!0);Za(),io.current=o,Q=i,se!==null?t=0:(me=null,ye=0,t=de)}if(t!==0){if(t===2&&(i=Xl(e),i!==0&&(r=i,t=ba(e,i))),t===1)throw n=_r,Zt(e,0),Dt(e,r),Ne(e,ae()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ag(i)&&(t=ao(e,r),t===2&&(o=Xl(e),o!==0&&(r=o,t=ba(e,o))),t===1))throw n=_r,Zt(e,0),Dt(e,r),Ne(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Kt(e,Me,mt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=ms+500-ae(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=oa(Kt.bind(null,e,Me,mt),t);break}Kt(e,Me,mt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-it(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lg(r/1960))-r,10<r){e.timeoutHandle=oa(Kt.bind(null,e,Me,mt),r);break}Kt(e,Me,mt);break;case 5:Kt(e,Me,mt);break;default:throw Error(k(329))}}}return Ne(e,ae()),e.callbackNode===n?Bf.bind(null,e):null}function ba(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Me,Me=n,t!==null&&ja(t)),e}function ja(e){Me===null?Me=e:Me.push.apply(Me,e)}function ag(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~ps,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(Q&6)throw Error(k(327));zn();var t=Hi(e,0);if(!(t&1))return Ne(e,ae()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Xl(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=_r,Zt(e,0),Dt(e,t),Ne(e,ae()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Me,mt),Ne(e,ae()),null}function hs(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Fn=ae()+500,yo&&Gt())}}function ln(e){Tt!==null&&Tt.tag===0&&!(Q&6)&&zn();var t=Q;Q|=1;var n=Ye.transition,r=Y;try{if(Ye.transition=null,Y=1,e)return e()}finally{Y=r,Ye.transition=n,Q=t,!(Q&6)&&Gt()}}function gs(){Be=bn.current,Z(bn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_h(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:Nn(),Z(Le),Z(Ce),os();break;case 5:is(r);break;case 4:Nn();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:es(r.type._context);break;case 22:case 23:gs()}n=n.return}if(me=e,se=e=Bt(e.current,null),ye=Be=t,de=0,_r=null,ps=wo=on=0,Me=vr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Xt=null}return e}function Ff(e,t){do{var n=se;try{if(Za(),Ti.current=ro,no){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(rn=0,pe=ce=re=null,gr=!1,Mr=0,fs.current=null,n===null||n.return===null){de=1,_r=t,se=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=ye,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=$u(a);if(w!==null){w.flags&=-257,Qu(w,a,s,o,t),w.mode&1&&Gu(o,f,t),t=w,u=f;var b=t.updateQueue;if(b===null){var C=new Set;C.add(u),t.updateQueue=C}else b.add(u);break e}else{if(!(t&1)){Gu(o,f,t),ys();break e}u=Error(k(426))}}else if(te&&s.mode&1){var W=$u(a);if(W!==null){!(W.flags&65536)&&(W.flags|=256),Qu(W,a,s,o,t),Xa(Bn(u,s));break e}}o=u=Bn(u,s),de!==4&&(de=2),vr===null?vr=[o]:vr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Cf(o,u,t);Bu(o,p);break e;case 1:s=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_t===null||!_t.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Ef(o,s,t);Bu(o,S);break e}}o=o.return}while(o!==null)}Hf(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Uf(){var e=io.current;return io.current=ro,e===null?ro:e}function ys(){(de===0||de===3||de===2)&&(de=4),me===null||!(on&268435455)&&!(wo&268435455)||Dt(me,ye)}function ao(e,t){var n=Q;Q|=2;var r=Uf();(me!==e||ye!==t)&&(mt=null,Zt(e,t));do try{sg();break}catch(i){Ff(e,i)}while(!0);if(Za(),Q=n,io.current=r,se!==null)throw Error(k(261));return me=null,ye=0,de}function sg(){for(;se!==null;)Wf(se)}function ug(){for(;se!==null&&!Mm();)Wf(se)}function Wf(e){var t=Gf(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Hf(e):se=t,fs.current=null}function Hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ng(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=tg(n,t,Be),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function Kt(e,t,n){var r=Y,i=Ye.transition;try{Ye.transition=null,Y=1,cg(e,t,n,r)}finally{Ye.transition=i,Y=r}return null}function cg(e,t,n,r){do zn();while(Tt!==null);if(Q&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vm(e,o),e===me&&(se=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,$f(Wi,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var a=Y;Y=1;var s=Q;Q|=4,fs.current=null,ig(e,n),_f(n,e),Ih(ra),Vi=!!na,ra=na=null,e.current=n,og(n),Am(),Q=s,Y=a,Ye.transition=o}else e.current=n;if(xi&&(xi=!1,Tt=e,lo=i),o=e.pendingLanes,o===0&&(_t=null),Nm(n.stateNode),Ne(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ca,Ca=null,e;return lo&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Ea?xr++:(xr=0,Ea=e):xr=0,Gt(),null}function zn(){if(Tt!==null){var e=kd(lo),t=Ye.transition,n=Y;try{if(Ye.transition=null,Y=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,lo=0,Q&6)throw Error(k(331));var i=Q;for(Q|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(O=f;O!==null;){var v=O;switch(v.tag){case 0:case 11:case 15:yr(8,v,o)}var y=v.child;if(y!==null)y.return=v,O=y;else for(;O!==null;){v=O;var g=v.sibling,w=v.return;if(Mf(v),v===f){O=null;break}if(g!==null){g.return=w,O=g;break}O=w}}}var b=o.alternate;if(b!==null){var C=b.child;if(C!==null){b.child=null;do{var W=C.sibling;C.sibling=null,C=W}while(C!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){a=O;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,O=m;else e:for(a=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:So(9,s)}}catch(E){oe(s,s.return,E)}if(s===a){O=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,O=S;break e}O=s.return}}if(Q=i,Gt(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{Y=n,Ye.transition=t}}return!1}function lc(e,t,n){t=Bn(n,t),t=Cf(e,t,1),e=Lt(e,t,1),t=Re(),e!==null&&(Fr(e,1,t),Ne(e,t))}function oe(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Bn(n,e),e=Ef(t,e,1),t=Lt(t,e,1),e=Re(),t!==null&&(Fr(t,1,e),Ne(t,e));break}}t=t.return}}function dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>ae()-ms?Zt(e,0):ps|=n),Ne(e,t)}function Vf(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=Re();e=wt(e,t),e!==null&&(Fr(e,t,n),Ne(e,n))}function fg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vf(e,n)}function pg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Vf(e,n)}var Gf;Gf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,eg(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&qd(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=An(t,Ce.current);On(t,n),i=as(null,t,r,e,i,n);var o=ss();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ns(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,fa(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Ka(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hg(r),e=tt(r,e),i){case 0:t=ma(null,t,r,e,n);break e;case 1:t=Yu(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,tt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),ma(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Yu(e,t,r,i,n);case 3:e:{if(Pf(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ef(e,t),eo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bn(Error(k(423)),t),t=Xu(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(k(424)),t),t=Xu(e,t,r,n,i);break e}else for(Ue=At(t.stateNode.containerInfo.firstChild),We=t,te=!0,rt=null,n=Jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=kt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return tf(t),e===null&&ua(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ia(r,i)?a=null:o!==null&&ia(r,o)&&(t.flags|=32),Rf(e,t),je(e,t,a,n),t.child;case 6:return e===null&&ua(t),null;case 13:return Df(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),qu(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(Ji,r._currentValue),r._currentValue=a,o!==null)if(lt(o.value,a)){if(o.children===i.children&&!Le.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=vt(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?u.next=u:(u.next=v.next,v.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ca(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(k(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ca(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=Xe(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),Ku(e,t,r,i,n);case 15:return bf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),zi(e,t),t.tag=1,_e(r)?(e=!0,Ki(t)):e=!1,On(t,n),kf(t,r,i),fa(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return If(e,t,n);case 22:return jf(e,t,n)}throw Error(k(156,t.tag))};function $f(e,t){return vd(e,t)}function mg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new mg(e,t,n,r)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hg(e){if(typeof e=="function")return vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_a)return 11;if(e===Na)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")vs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hn:return en(n.children,i,o,t);case La:a=8,i|=8;break;case Ll:return e=Ke(12,n,t,i|2),e.elementType=Ll,e.lanes=o,e;case _l:return e=Ke(13,n,t,i),e.elementType=_l,e.lanes=o,e;case Nl:return e=Ke(19,n,t,i),e.elementType=Nl,e.lanes=o,e;case td:return ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:a=10;break e;case ed:a=9;break e;case _a:a=11;break e;case Na:a=14;break e;case jt:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ke(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=td,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,i,o,a,s,u){return e=new gg(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(o),e}function yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qf(e){if(!e)return Wt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(_e(n))return $d(e,n,t)}return t}function qf(e,t,n,r,i,o,a,s,u){return e=xs(n,r,!0,e,i,o,a,s,u),e.context=Qf(null),n=e.current,r=Re(),i=Nt(n),o=vt(r,i),o.callback=t??null,Lt(n,o,i),e.current.lanes=i,Fr(e,i,r),Ne(e,r),e}function Co(e,t,n,r){var i=t.current,o=Re(),a=Nt(i);return n=Qf(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(i,t,a),e!==null&&(ot(e,i,a,o),Ii(e,i,a)),a}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function vg(){return null}var Kf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Eo.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Co(e,t,null,null)};Eo.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Co(null,e,null,null)}),t[St]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=bd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Rd(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function xg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=so(a);o.call(f)}}var a=qf(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=a,e[St]=a.current,Dr(e.nodeType===8?e.parentNode:e),ln(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=so(u);s.call(f)}}var u=xs(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=u,e[St]=u.current,Dr(e.nodeType===8?e.parentNode:e),ln(function(){Co(t,u,n,r)}),u}function jo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=so(a);s.call(u)}}Co(t,a,e,i)}else a=xg(n,t,e,i,r);return so(a)}Cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Ua(t,n|1),Ne(t,ae()),!(Q&6)&&(Fn=ae()+500,Gt()))}break;case 13:ln(function(){var r=wt(e,1);if(r!==null){var i=Re();ot(r,e,1,i)}}),Ss(e,1)}};Wa=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Re();ot(t,e,134217728,n)}Ss(e,134217728)}};Ed=function(e){if(e.tag===13){var t=Nt(e),n=wt(e,t);if(n!==null){var r=Re();ot(n,e,t,r)}Ss(e,t)}};bd=function(){return Y};jd=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ql=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error(k(90));rd(r),Ul(r,i)}}}break;case"textarea":od(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};fd=hs;pd=ln;var Sg={usingClientEntryPoint:!1,Events:[Wr,xn,go,cd,dd,hs]},nr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{fo=Si.inject(wg),dt=Si}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(k(200));return yg(e,t,null,n)};Ve.createRoot=function(e,t){if(!ks(e))throw Error(k(299));var n=!1,r="",i=Kf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,Dr(e.nodeType===8?e.parentNode:e),new ws(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return ln(e)};Ve.hydrate=function(e,t,n){if(!bo(t))throw Error(k(200));return jo(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Kf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=qf(t,null,e,1,n??null,i,!1,o,a),e[St]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};Ve.render=function(e,t,n){if(!bo(t))throw Error(k(200));return jo(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!bo(e))throw Error(k(40));return e._reactRootContainer?(ln(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ve.unstable_batchedUpdates=hs;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return jo(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function Yf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yf)}catch(e){console.error(e)}}Yf(),Kc.exports=Ve;var pn=Kc.exports,Xf,uc=pn;Xf=uc.createRoot,uc.hydrateRoot;function cc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function kg(e){if(Array.isArray(e))return e}function Cg(e,t,n){return(t=Ig(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eg(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(v){f=!0,i=v}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(f)throw i}}return s}}function bg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dc(Object(n),!0).forEach(function(r){Cg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jg(e,t){if(e==null)return{};var n,r,i=Rg(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Rg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Pg(e,t){return kg(e)||Eg(e,t)||Tg(e,t)||bg()}function Dg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ig(e){var t=Dg(e,"string");return typeof t=="symbol"?t:t+""}function Tg(e,t){if(e){if(typeof e=="string")return cc(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?cc(e,t):void 0}}function Og(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pc(Object(n),!0).forEach(function(r){Og(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function cr(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function uo(e){return{}.toString.call(e).includes("Object")}function Mg(e){return!Object.keys(e).length}function Nr(e){return typeof e=="function"}function Ag(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Lg(e,t){return uo(t)||Ft("changeType"),Object.keys(t).some(function(n){return!Ag(e,n)})&&Ft("changeField"),t}function _g(e){Nr(e)||Ft("selectorType")}function Ng(e){Nr(e)||uo(e)||Ft("handlerType"),uo(e)&&Object.values(e).some(function(t){return!Nr(t)})&&Ft("handlersType")}function Bg(e){e||Ft("initialIsRequired"),uo(e)||Ft("initialType"),Mg(e)&&Ft("initialContent")}function Fg(e,t){throw new Error(e[t]||e.default)}var Ug={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ft=cr(Fg)(Ug),wi={changes:Lg,selector:_g,handler:Ng,initial:Bg};function Wg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};wi.initial(e),wi.handler(t);var n={current:e},r=cr(Gg)(n,t),i=cr(Vg)(n),o=cr(wi.changes)(e),a=cr(Hg)(n);function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(v){return v};return wi.selector(f),f(n.current)}function u(f){zg(r,i,o,a)(f)}return[s,u]}function Hg(e,t){return Nr(t)?t(e.current):t}function Vg(e,t){return e.current=mc(mc({},e.current),t),t}function Gg(e,t,n){return Nr(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var $g={create:Wg},Qg={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function qg(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function Kg(e){return{}.toString.call(e).includes("Object")}function Yg(e){return e||hc("configIsRequired"),Kg(e)||hc("configType"),e.urls?(Xg(),{paths:{vs:e.urls.monacoBase}}):e}function Xg(){console.warn(Jf.deprecation)}function Jg(e,t){throw new Error(e[t]||e.default)}var Jf={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},hc=qg(Jg)(Jf),Zg={config:Yg},ey=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function Zf(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Zf(e[n],t[n]))}),fc(fc({},e),t)}var ty={type:"cancelation",msg:"operation is manually canceled"};function yl(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(ty):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var ny=["monaco"],ry=$g.create({config:Qg,isInitialized:!1,resolve:null,reject:null,monaco:null}),ep=Pg(ry,2),Vr=ep[0],Ro=ep[1];function iy(e){var t=Zg.config(e),n=t.monaco,r=jg(t,ny);Ro(function(i){return{config:Zf(i.config,r),monaco:n}})}function oy(){var e=Vr(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Ro({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),yl(vl);if(window.monaco&&window.monaco.editor)return tp(window.monaco),e.resolve(window.monaco),yl(vl);ey(ly,sy)(uy)}return yl(vl)}function ly(e){return document.body.appendChild(e)}function ay(e){var t=document.createElement("script");return e&&(t.src=e),t}function sy(e){var t=Vr(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=ay("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function uy(){var e=Vr(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;tp(r),e.resolve(r)},function(n){e.reject(n)})}function tp(e){Vr().monaco||Ro({monaco:e})}function cy(){return Vr(function(e){var t=e.monaco;return t})}var vl=new Promise(function(e,t){return Ro({resolve:e,reject:t})}),np={config:iy,init:oy,__getMonacoInstance:cy},dy={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xl=dy,fy={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},py=fy;function my({children:e}){return Rn.createElement("div",{style:py.container},e)}var hy=my,gy=hy;function yy({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Rn.createElement("section",{style:{...xl.wrapper,width:e,height:t},...a},!n&&Rn.createElement(gy,null,r),Rn.createElement("div",{ref:i,style:{...xl.fullWidth,...!n&&xl.hide},className:o}))}var vy=yy,rp=h.memo(vy);function xy(e){h.useEffect(e,[])}var ip=xy;function Sy(e,t,n=!0){let r=h.useRef(!0);h.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Fe=Sy;function Sr(){}function jn(e,t,n,r){return wy(e,r)||ky(e,t,n,r)}function wy(e,t){return e.editor.getModel(op(e,t))}function ky(e,t,n,r){return e.editor.createModel(t,n,r?op(e,r):void 0)}function op(e,t){return e.Uri.parse(t)}function Cy({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:u=!1,theme:f="light",loading:v="Loading...",options:y={},height:g="100%",width:w="100%",className:b,wrapperProps:C={},beforeMount:W=Sr,onMount:p=Sr}){let[c,m]=h.useState(!1),[S,E]=h.useState(!0),D=h.useRef(null),j=h.useRef(null),z=h.useRef(null),L=h.useRef(p),T=h.useRef(W),K=h.useRef(!1);ip(()=>{let F=np.init();return F.then(q=>(j.current=q)&&E(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>D.current?Ee():F.cancel()}),Fe(()=>{if(D.current&&j.current){let F=D.current.getOriginalEditor(),q=jn(j.current,e||"",r||n||"text",o||"");q!==F.getModel()&&F.setModel(q)}},[o],c),Fe(()=>{if(D.current&&j.current){let F=D.current.getModifiedEditor(),q=jn(j.current,t||"",i||n||"text",a||"");q!==F.getModel()&&F.setModel(q)}},[a],c),Fe(()=>{let F=D.current.getModifiedEditor();F.getOption(j.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],c),Fe(()=>{var F,q;(q=(F=D.current)==null?void 0:F.getModel())==null||q.original.setValue(e||"")},[e],c),Fe(()=>{let{original:F,modified:q}=D.current.getModel();j.current.editor.setModelLanguage(F,r||n||"text"),j.current.editor.setModelLanguage(q,i||n||"text")},[n,r,i],c),Fe(()=>{var F;(F=j.current)==null||F.editor.setTheme(f)},[f],c),Fe(()=>{var F;(F=D.current)==null||F.updateOptions(y)},[y],c);let Ie=h.useCallback(()=>{var Te;if(!j.current)return;T.current(j.current);let F=jn(j.current,e||"",r||n||"text",o||""),q=jn(j.current,t||"",i||n||"text",a||"");(Te=D.current)==null||Te.setModel({original:F,modified:q})},[n,t,i,e,r,o,a]),ee=h.useCallback(()=>{var F;!K.current&&z.current&&(D.current=j.current.editor.createDiffEditor(z.current,{automaticLayout:!0,...y}),Ie(),(F=j.current)==null||F.editor.setTheme(f),m(!0),K.current=!0)},[y,f,Ie]);h.useEffect(()=>{c&&L.current(D.current,j.current)},[c]),h.useEffect(()=>{!S&&!c&&ee()},[S,c,ee]);function Ee(){var q,Te,P,B;let F=(q=D.current)==null?void 0:q.getModel();s||((Te=F==null?void 0:F.original)==null||Te.dispose()),u||((P=F==null?void 0:F.modified)==null||P.dispose()),(B=D.current)==null||B.dispose()}return Rn.createElement(rp,{width:w,height:g,isEditorReady:c,loading:v,_ref:z,className:b,wrapperProps:C})}var Ey=Cy;h.memo(Ey);function by(e){let t=h.useRef();return h.useEffect(()=>{t.current=e},[e]),t.current}var jy=by,ki=new Map;function Ry({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:s,loading:u="Loading...",options:f={},overrideServices:v={},saveViewState:y=!0,keepCurrentModel:g=!1,width:w="100%",height:b="100%",className:C,wrapperProps:W={},beforeMount:p=Sr,onMount:c=Sr,onChange:m,onValidate:S=Sr}){let[E,D]=h.useState(!1),[j,z]=h.useState(!0),L=h.useRef(null),T=h.useRef(null),K=h.useRef(null),Ie=h.useRef(c),ee=h.useRef(p),Ee=h.useRef(),F=h.useRef(r),q=jy(o),Te=h.useRef(!1),P=h.useRef(!1);ip(()=>{let M=np.init();return M.then(A=>(L.current=A)&&z(!1)).catch(A=>(A==null?void 0:A.type)!=="cancelation"&&console.error("Monaco initialization: error:",A)),()=>T.current?U():M.cancel()}),Fe(()=>{var A,le,fe,Oe;let M=jn(L.current,e||r||"",t||i||"",o||n||"");M!==((A=T.current)==null?void 0:A.getModel())&&(y&&ki.set(q,(le=T.current)==null?void 0:le.saveViewState()),(fe=T.current)==null||fe.setModel(M),y&&((Oe=T.current)==null||Oe.restoreViewState(ki.get(o))))},[o],E),Fe(()=>{var M;(M=T.current)==null||M.updateOptions(f)},[f],E),Fe(()=>{!T.current||r===void 0||(T.current.getOption(L.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(P.current=!0,T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop(),P.current=!1))},[r],E),Fe(()=>{var A,le;let M=(A=T.current)==null?void 0:A.getModel();M&&i&&((le=L.current)==null||le.editor.setModelLanguage(M,i))},[i],E),Fe(()=>{var M;s!==void 0&&((M=T.current)==null||M.revealLine(s))},[s],E),Fe(()=>{var M;(M=L.current)==null||M.editor.setTheme(a)},[a],E);let B=h.useCallback(()=>{var M;if(!(!K.current||!L.current)&&!Te.current){ee.current(L.current);let A=o||n,le=jn(L.current,r||e||"",t||i||"",A||"");T.current=(M=L.current)==null?void 0:M.editor.create(K.current,{model:le,automaticLayout:!0,...f},v),y&&T.current.restoreViewState(ki.get(A)),L.current.editor.setTheme(a),s!==void 0&&T.current.revealLine(s),D(!0),Te.current=!0}},[e,t,n,r,i,o,f,v,y,a,s]);h.useEffect(()=>{E&&Ie.current(T.current,L.current)},[E]),h.useEffect(()=>{!j&&!E&&B()},[j,E,B]),F.current=r,h.useEffect(()=>{var M,A;E&&m&&((M=Ee.current)==null||M.dispose(),Ee.current=(A=T.current)==null?void 0:A.onDidChangeModelContent(le=>{P.current||m(T.current.getValue(),le)}))},[E,m]),h.useEffect(()=>{if(E){let M=L.current.editor.onDidChangeMarkers(A=>{var fe;let le=(fe=T.current.getModel())==null?void 0:fe.uri;if(le&&A.find(Oe=>Oe.path===le.path)){let Oe=L.current.editor.getModelMarkers({resource:le});S==null||S(Oe)}});return()=>{M==null||M.dispose()}}return()=>{}},[E,S]);function U(){var M,A;(M=Ee.current)==null||M.dispose(),g?y&&ki.set(o,T.current.saveViewState()):(A=T.current.getModel())==null||A.dispose(),T.current.dispose()}return Rn.createElement(rp,{width:w,height:b,isEditorReady:E,loading:u,_ref:K,className:C,wrapperProps:W})}var Py=Ry,Dy=h.memo(Py),Iy=Dy;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lp=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Oy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...s},u)=>h.createElement("svg",{ref:u,...Oy,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:lp("lucide",i),...s},[...a.map(([f,v])=>h.createElement(f,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(e,t)=>{const n=h.forwardRef(({className:r,...i},o)=>h.createElement(zy,{ref:o,iconNode:t,className:lp(`lucide-${Ty(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=G("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=G("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=G("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=G("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=G("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=G("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=G("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=G("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=G("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=G("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=G("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=G("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=G("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=G("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=G("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=G("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=G("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=G("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=G("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=G("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=G("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=G("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Fy=200;function Uy(e){_c.initialize({startOnLoad:!1,securityLevel:"loose",suppressErrorRendering:!0,theme:"base",themeVariables:{darkMode:!0,background:(e==null?void 0:e.background)??"#141414",primaryColor:(e==null?void 0:e.primaryColor)??"#2d3748",primaryTextColor:(e==null?void 0:e.primaryTextColor)??"#e2e8f0",lineColor:(e==null?void 0:e.lineColor)??"#4a5568"}})}function Wy(e){let t,n,r=e;const i=r.match(/\bB\[#([0-9A-Fa-f]{6})\]/);i&&(t="#"+i[1],r=r.replace(/\bB\[#([0-9A-Fa-f]{6})\]\s*/g,""));const o=r.match(/\bF\[#([0-9A-Fa-f]{6})\]/);return o&&(n="#"+o[1],r=r.replace(/\bF\[#([0-9A-Fa-f]{6})\]\s*/g,"")),{code:r.trim(),background:t,foreground:n}}function Hy(e,t,n=Fy,r=!1){const[i,o]=h.useState(null),[a,s]=h.useState(null),[u,f]=h.useState(null),[v,y]=h.useState(!1),g=h.useRef(0);return h.useEffect(()=>{if(r)return;if(!e.trim()){o(null),s(null),f(null),y(!1);return}y(!0),f(null);const w=async()=>{const{code:b,background:C,foreground:W}=Wy(e),p={...t,...C!=null&&{background:C},...W!=null&&{primaryTextColor:W}};try{Uy(p);const c=`mermaid-${Date.now()}-${Math.random().toString(36).slice(2)}`,{svg:m}=await _c.render(c,b);o(m),s(m),f(null)}catch(c){const m=c instanceof Error?c.message:String(c);f(m),o(null)}y(!1)};return g.current=setTimeout(w,n),()=>clearTimeout(g.current)},[e,t,n,r]),{svg:i,lastValidSvg:a,error:u,loading:v}}const ap="diagramium-code",sp=h.createContext(null),Oc=`flowchart LR
  A --> B`;function Vy({children:e,initialCode:t=Oc}){const n=t??Oc,[[r,i],o]=h.useState(()=>[[n],0]),a=r[i]??n;h.useEffect(()=>{try{localStorage.setItem(ap,a)}catch{}},[a]);const s=h.useCallback(g=>{o(([w,b])=>{const C=w[b]??"";if(g===C)return[w,b];const W=[...w.slice(0,b+1),g].slice(-50);return[W,W.length-1]})},[]),u=h.useCallback(()=>{o(([g,w])=>w>0?[g,w-1]:[g,w])},[]),f=h.useCallback(()=>{o(([g,w])=>w<g.length-1?[g,w+1]:[g,w])},[]),v=i>0,y=i<r.length-1;return l.jsx(sp.Provider,{value:{code:a,setCode:s,undo:u,redo:f,canUndo:v,canRedo:y},children:e})}function Gy(){const e=h.useContext(sp);if(!e)throw new Error("useDiagram must be used within DiagramProvider");return e}function Po(){if(typeof navigator>"u")return!1;const e=navigator.userAgent||"";return/iPhone|iPad|iPod|Android/i.test(e)}function $y(e,t="diagram.svg"){const n=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=t,Po()?window.open(r,"_blank"):i.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function up(e,t=2){return new Promise((n,r)=>{const i=new Image,o=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(o);i.onload=()=>{const s=i.width*t,u=i.height*t,f=document.createElement("canvas");f.width=s,f.height=u;const v=f.getContext("2d");if(!v){URL.revokeObjectURL(a),r(new Error("Canvas context not available"));return}v.fillStyle="#ffffff",v.fillRect(0,0,s,u),v.drawImage(i,0,0,s,u),f.toBlob(y=>{URL.revokeObjectURL(a),y?n(y):r(new Error("toBlob failed"))},"image/png",1)},i.onerror=()=>{URL.revokeObjectURL(a),r(new Error("Image load failed"))},i.src=a})}async function Qy(e,t="diagram.png",n=2){const r=await up(e,n),i=URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=t,Po()?window.open(i,"_blank"):o.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function qy(e,t="diagram.md"){const n="```mermaid\n"+e+"\n```",r=new Blob([n],{type:"text/markdown;charset=utf-8"}),i=URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=t,Po()?window.open(i,"_blank"):o.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Ky(e,t="diagram.mmd"){const n=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=t,Po()?window.open(r,"_blank"):i.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function Yy(e){var t;if(!((t=navigator.clipboard)!=null&&t.write))return!1;try{const n=await up(e);return await navigator.clipboard.write([new ClipboardItem({"image/png":n})]),!0}catch{return!1}}const zc=["Flowchart","Processes","Sequence","Class","State","ER","Gantt","Pie","Chart","Journey","Block","Quadrant","Mindmap","Timeline","Git","Starter","Others"];function Mc(e){const t=e.id;return t.startsWith("flow-")?"Flowchart":t.startsWith("process-")?"Processes":t.startsWith("sequence-")?"Sequence":t.startsWith("class-")?"Class":t.startsWith("state-")?"State":t.startsWith("er-")?"ER":t.startsWith("gantt-")?"Gantt":t.startsWith("pie-")?"Pie":t.startsWith("journey-")?"Journey":t.startsWith("block-")?"Block":t==="quadrant"||t.startsWith("quadrant-")?"Quadrant":t.startsWith("chart-")||t.startsWith("xy-")?"Chart":t.startsWith("mindmap")?"Mindmap":t.startsWith("timeline")?"Timeline":t.startsWith("git")?"Git":t==="blank"?"Starter":"Others"}const Xy=[{id:"flow-lr",name:"Flowchart LR",code:`flowchart LR
  S[Open Diagramium] --> T[Choose template]
  T --> E[Edit Mermaid code]
  E --> P[Preview diagram]
  P --> X{Happy?}
  X -->|No| E
  X -->|Yes| D[Download / share]
`},{id:"flow-tb",name:"Flowchart TB",code:`flowchart TB
  Idea --> Draft --> Review --> Publish
  Publish --> Learn[Collect feedback]
  Learn --> Idea
`},{id:"flow-shapes",name:"Flowchart shapes",code:`flowchart LR
  T1[Task] --> N1(Rounded note)
  N1 --> S1([Sub-process])
  S1 --> DB[(Config store)]
  DB --> E1((Event))
`},{id:"flow-subgraph",name:"Flowchart subgraphs",code:`flowchart TB
  subgraph Cloud
    API
    Workers
  end
  subgraph On-Prem
    DB[(Database)]
  end
  API --> Workers
  Workers --> DB
`},{id:"flow-process-area",name:"Process areas",code:`flowchart TB
  subgraph "Area 1: Input"
    A[Receive] --> B[Validate]
  end
  subgraph "Area 2: Process"
    B --> C[Transform]
    C --> D[Enrich]
  end
  subgraph "Area 3: Output"
    D --> E[Send]
    E --> F[Confirm]
  end
`},{id:"flow-approval",name:"Approval process",code:`flowchart TB
  A[Submit] --> B{Valid?}
  B -->|No| C[Reject]
  B -->|Yes| D[Review]
  D --> E{Approved?}
  E -->|No| F[Return to author]
  E -->|Yes| G[Approve]
  G --> H[Notify]
  F --> A
`},{id:"flow-bpmn",name:"BPMN-style process",code:`flowchart LR
  subgraph "Pool: Customer"
    A((Start)) --> B[Place order]
    B --> C{Wait}
  end
  subgraph "Pool: System"
    C --> D[Process payment]
    D --> E[Reserve stock]
    E --> F[Ship]
  end
  F --> C
  C --> G((End))
`},{id:"flow-crossfunctional",name:"Cross-functional",code:`flowchart TB
  subgraph Sales
    S1[Lead] --> S2[Quote]
  end
  subgraph Operations
    S2 --> O1[Order]
    O1 --> O2[Fulfill]
  end
  subgraph Finance
    O2 --> F1[Invoice]
    F1 --> F2[Payment]
  end
  F2 --> S1
`},{id:"flow-operations",name:"Operations process",code:`flowchart TB
  subgraph "Request"
    R1[Receive] --> R2[Log]
    R2 --> R3[Assign]
  end
  subgraph "Execute"
    R3 --> E1[Work]
    E1 --> E2{OK?}
    E2 -->|Yes| E3[Close]
    E2 -->|No| E1
  end
  subgraph "Complete"
    E3 --> C1[Notify]
    C1 --> C2[Archive]
  end
`},{id:"flow-minimal",name:"Flowchart minimal",code:`flowchart LR
  A --> B
`},{id:"sequence-basic",name:"Sequence basic",code:`sequenceDiagram
  participant V as Visitor
  participant W as WebApp
  participant S as AuthService
  V->>W: open /signup
  W->>S: create user
  S-->>W: ok / error
  W-->>V: show result
`},{id:"sequence-opt",name:"Sequence with opt",code:`sequenceDiagram
  participant User
  participant System
  User->>+System: login
  alt success
    System-->>User: token
  else failure
    System-->>User: error
  end
`},{id:"sequence-loop",name:"Sequence with loop",code:`sequenceDiagram
  participant C as Client
  participant S as Server
  loop Polling
    C->>S: get status
    S-->>C: status
  end
`},{id:"class-basic",name:"Class diagram",code:`classDiagram
  class ApiClient {
    +get(path)
    +post(path, body)
  }
  class AuthClient {
    +login()
    +logout()
  }
  ApiClient <|-- AuthClient
`},{id:"class-relations",name:"Class relations",code:`classDiagram
  class Service {
    +name: string
    +start()
    +stop()
  }
  class HttpService {
    +port: int
  }
  class WorkerService {
    +queue: string
  }
  class EventBus {
    +publish()
    +subscribe()
  }
  Service <|-- HttpService
  Service <|-- WorkerService
  HttpService --> EventBus : emits
  WorkerService --> EventBus : consumes
`},{id:"state-basic",name:"State diagram",code:`stateDiagram-v2
  [*] --> Draft
  Draft --> InReview: submit
  InReview --> Draft: changes requested
  InReview --> Published: approve
  Published --> Archived: archive
`},{id:"state-choice",name:"State with choice",code:`stateDiagram-v2
  [*] --> Evaluate
  Evaluate --> Small: score < 5
  Evaluate --> Large: score >= 5
  Small --> [*]
  Large --> [*]
`},{id:"er-basic",name:"ER diagram",code:`erDiagram
  TEAM ||--o{ PROJECT : owns
  PROJECT ||--o{ TASK : contains
  USER ||--o{ TASK : assigned
  TEAM {
    string id
    string name
  }
  USER {
    string id
    string email
  }
  PROJECT {
    string id
    string key
  }
  TASK {
    string id
    string status
  }
`},{id:"er-simple",name:"ER simple",code:`erDiagram
  SPACE ||--o{ EVENT : hosts
  SPACE {
    string id
    string name
  }
  EVENT {
    string id
    string title
  }
`},{id:"gantt-basic",name:"Gantt chart",code:`gantt
  title Release 1.0
  dateFormat YYYY-MM-DD
  section Planning
  Scope :a1, 2025-03-01, 5d
  section Implementation
  Features :a2, after a1, 10d
  section WrapUp
  Hardening :a3, after a2, 4d
`},{id:"gantt-milestone",name:"Gantt with milestone",code:`gantt
  title Sprint plan
  dateFormat X
  axisFormat %s
  section Dev
  Task A :a, 0, 5
  Task B :b, 5, 5
  section Release
  Milestone :milestone, 10, 0
`},{id:"pie-basic",name:"Pie chart",code:`pie title Breakdown by channel
  "Email" : 35
  "Search" : 30
  "Social" : 20
  "Other" : 15
`},{id:"pie-simple",name:"Pie simple",code:`pie showData
  title Revenue
  "Product A" : 40
  "Product B" : 60
`},{id:"chart-xy-line",name:"XY line chart",code:`xychart-beta
  title "Monthly trend"
  x-axis [Jan, Feb, Mar, Apr, May, Jun]
  y-axis "Value" 0 --> 100
  line [30, 45, 55, 60, 70, 85]
`},{id:"chart-xy-bar",name:"XY bar chart",code:`xychart-beta
  title "Sales by region"
  x-axis [North, South, East, West]
  y-axis "Sales" 0 --> 50
  bar [35, 42, 28, 45]
`},{id:"xy-multi-line",name:"XY multi-line",code:`xychart-beta
  title "Comparison"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis 0 --> 80
  line [20, 35, 50, 65]
  line [15, 30, 45, 55]
`},{id:"chart-xy-bars-horizontal",name:"Chart bars horizontal",code:`xychart-beta horizontal
  title "Scores by team"
  x-axis [Team A, Team B, Team C, Team D]
  y-axis 0 --> 100
  bar [72, 85, 68, 90]
`},{id:"chart-xy-line-smooth",name:"Chart line trend",code:`xychart-beta
  title "Weekly metric"
  x-axis [W1, W2, W3, W4, W5, W6]
  y-axis 0 --> 50
  line [12, 18, 22, 28, 35, 42]
`},{id:"chart-xy-stacked",name:"Chart two series",code:`xychart-beta
  title "A vs B"
  x-axis [Jan, Feb, Mar, Apr]
  y-axis 0 --> 60
  bar [25, 30, 28, 35]
  line [20, 32, 30, 40]
`},{id:"chart-xy-negative",name:"Chart with negatives",code:`xychart-beta
  title "P&L"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis -20 --> 30
  bar [10, -5, 15, 25]
`},{id:"chart-xy-many-bars",name:"Chart many bars",code:`xychart-beta
  title "Monthly"
  x-axis [J, F, M, A, M, J, J, A, S, O, N, D]
  y-axis 0 --> 100
  bar [40, 55, 60, 72, 68, 80, 85, 78, 88, 82, 75, 90]
`},{id:"chart-xy-double-line",name:"Chart two lines",code:`xychart-beta
  title "Series A & B"
  x-axis [1, 2, 3, 4, 5, 6]
  y-axis 0 --> 100
  line [10, 25, 40, 55, 70, 85]
  line [20, 30, 35, 50, 60, 75]
`},{id:"journey-basic",name:"User journey",code:`journey
  title New user onboarding
  section Sign up
    Visit site: 4: User
    Create account: 5: User
  section First session
    Explore UI: 3: User
    Run first diagram: 5: User
`},{id:"journey-simple",name:"Journey simple",code:`journey
  title Shopping
  section Buy
    Go to shop: 5: User
    Choose items: 4: User
  section Pay
    Pay: 3: User
`},{id:"block-basic",name:"Block (quadrant)",code:`block-beta
  columns 2
  block:col1:1
    backlog
    in-progress
  block:col2:1
    review
    done
`},{id:"quadrant",name:"Quadrant chart",code:`quadrantChart
  title Product strategy
  x-axis Low cost --> High cost
  y-axis Low quality --> High quality
  quadrant-1 Revisit
  quadrant-2 Invest
  quadrant-3 Avoid
  quadrant-4 Consider
  "Legacy": [0.2, 0.8]
  "New": [0.8, 0.6]
`},{id:"quadrant-foda",name:"FODA / SWOT matrix",code:`quadrantChart
  title FODA (SWOT) Analysis
  x-axis Internal --> External
  y-axis Negative --> Positive
  quadrant-1 Fortalezas
  quadrant-2 Oportunidades
  quadrant-3 Debilidades
  quadrant-4 Amenazas
  "F1": [0.2, 0.8]
  "F2": [0.3, 0.75]
  "O1": [0.8, 0.8]
  "D1": [0.2, 0.2]
  "A1": [0.8, 0.2]
`},{id:"quadrant-matrix",name:"2x2 Priority matrix",code:`quadrantChart
  title Priority matrix
  x-axis Low impact --> High impact
  y-axis Low effort --> High effort
  quadrant-1 Do first
  quadrant-2 Schedule
  quadrant-3 Delegate
  quadrant-4 Eliminate
  "P1": [0.85, 0.85]
  "P2": [0.8, 0.3]
  "P3": [0.25, 0.8]
  "P4": [0.2, 0.2]
`},{id:"quadrant-risks",name:"Risk matrix",code:`quadrantChart
  title Risk matrix
  x-axis Low probability --> High probability
  y-axis Low impact --> High impact
  quadrant-1 Critical
  quadrant-2 High
  quadrant-3 Medium
  quadrant-4 Low
  "R1": [0.9, 0.9]
  "R2": [0.3, 0.85]
  "R3": [0.85, 0.25]
`},{id:"mindmap",name:"Mindmap",code:`mindmap
  root((Ideas))
    Tech
      Frontend
      Backend
    Product
      MVP
      Roadmap
`},{id:"timeline",name:"Timeline",code:`timeline
  title History
  2020 : Event A
  2021 : Event B
  2022 : Event C
  2023 : Event D
`},{id:"git",name:"Git graph",code:`gitGraph
  commit
  branch feature
  checkout feature
  commit
  checkout main
  merge feature
  commit
`},{id:"flow-links",name:"Flowchart with link",code:`flowchart LR
  A --> B
  B --> C
  click B "https://example.com" "Link"
`},{id:"flow-parallel",name:"Flowchart parallel",code:`flowchart TB
  A --> B & C
  B & C --> D
`},{id:"flow-multi-subgraph",name:"Flowchart multi subgraph",code:`flowchart TB
  subgraph one
    a1 --> a2
  end
  subgraph two
    b1 --> b2
  end
  a2 --> b1
`},{id:"flow-diamond",name:"Flowchart diamonds",code:`flowchart LR
  A{Start} --> B{Check}
  B -->|Yes| C[OK]
  B -->|No| D[Retry]
  D --> B
`},{id:"flow-cylinder",name:"Flowchart cylinder",code:`flowchart LR
  A[(DB)] --> B[App]
  B --> C[(Cache)]
`},{id:"flow-rect",name:"Flowchart rectangles",code:`flowchart TB
  A[Input] --> B[Process]
  B --> C[Output]
  C --> D[Review]
`},{id:"flow-cycle",name:"Flowchart cycle",code:`flowchart LR
  A --> B --> C --> D --> A
`},{id:"flow-branch",name:"Flowchart branch",code:`flowchart TB
  Start --> A
  Start --> B
  Start --> C
  A --> End
  B --> End
  C --> End
`},{id:"sequence-par",name:"Sequence par",code:`sequenceDiagram
  participant A
  participant B
  participant C
  par A to B
    A->>B: msg1
  and A to C
    A->>C: msg2
  end
`},{id:"sequence-note",name:"Sequence with note",code:`sequenceDiagram
  participant User
  participant API
  Note over User,API: Request flow
  User->>+API: GET /data
  API-->>-User: 200 OK
`},{id:"sequence-critical",name:"Sequence critical",code:`sequenceDiagram
  participant Client
  participant Server
  critical Payment
    Client->>Server: pay
    Server-->>Client: ok
  end
`},{id:"sequence-activation",name:"Sequence activation",code:`sequenceDiagram
  Alice->>+Bob: request
  Bob->>+Carol: forward
  Carol-->>-Bob: reply
  Bob-->>-Alice: reply
`},{id:"sequence-multiple",name:"Sequence multiple",code:`sequenceDiagram
  A->>B: 1
  A->>B: 2
  B-->>A: 3
`},{id:"class-interface",name:"Class interface",code:`classDiagram
  class IRepository {
    <<interface>>
    +save()
    +find()
  }
  class UserRepo {
    +save()
    +find()
  }
  IRepository <|.. UserRepo
`},{id:"class-composition",name:"Class composition",code:`classDiagram
  class Car {
    +Engine engine
    +drive()
  }
  class Engine {
    +start()
  }
  Car *-- Engine
`},{id:"class-aggregation",name:"Class aggregation",code:`classDiagram
  class Team {
    +members
  }
  class Person {
    +name
  }
  Team o-- Person
`},{id:"class-deps",name:"Class dependencies",code:`classDiagram
  class Service {
    +handle()
  }
  class Logger {
    +log()
  }
  Service ..> Logger : uses
`},{id:"state-fork",name:"State fork",code:`stateDiagram-v2
  [*] --> Fork
  state Fork {
    [*] --> State1
    [*] --> State2
  }
  Fork --> Join
  state Join {
    State3 --> [*]
    State4 --> [*]
  }
  Join --> [*]
`},{id:"state-composite",name:"State composite",code:`stateDiagram-v2
  [*] --> Running
  state Running {
    [*] --> Active
    Active --> Paused
    Paused --> Active
  }
  Running --> [*]
`},{id:"state-concurrent",name:"State concurrent",code:`stateDiagram-v2
  [*] --> Init
  state Init {
    [*] --> A
    [*] --> B
  }
  Init --> Done
`},{id:"er-many",name:"ER many entities",code:`erDiagram
  USER ||--o{ POST : writes
  USER {
    string id
    string name
  }
  POST ||--o{ COMMENT : has
  POST {
    string id
    string title
  }
  COMMENT {
    string id
    string body
  }
`},{id:"er-cards",name:"ER cardinality",code:`erDiagram
  A ||--o{ B : one-to-many
  A {
    int id
  }
  B {
    int id
    int a_id
  }
`},{id:"gantt-crit",name:"Gantt critical",code:`gantt
  title With critical
  dateFormat X
  section S1
  Task 1 :crit, a, 0, 5
  Task 2 :b, 5, 5
  section S2
  Task 3 :c, after a, 4
`},{id:"gantt-done",name:"Gantt done",code:`gantt
  dateFormat X
  section Done
  Completed :done, 0, 3
  Next :active, 3, 5
`},{id:"gantt-sections",name:"Gantt many sections",code:`gantt
  title Multi section
  dateFormat YYYY-MM-DD
  section Design
  D1 : 2024-01-01, 7d
  section Dev
  Dev1 : after D1, 14d
  section Test
  T1 : after Dev1, 5d
`},{id:"pie-three",name:"Pie three slices",code:`pie title Budget
  "Dev" : 50
  "Design" : 30
  "Ops" : 20
`},{id:"pie-five",name:"Pie five slices",code:`pie title Traffic
  "Direct" : 35
  "Search" : 25
  "Social" : 20
  "Email" : 12
  "Other" : 8
`},{id:"journey-task",name:"Journey with task",code:`journey
  title Sign up
  section Visit
    Open site: 5: User
    Click sign up: 4: User
  section Register
    Fill form: 3: User
    Submit: 5: User
`},{id:"journey-multi",name:"Journey multi actor",code:`journey
  title Support flow
  section Customer
    Open ticket: 5: Customer
  section Agent
    Pick ticket: 4: Agent
    Reply: 5: Agent
  section Customer
    Close: 5: Customer
`},{id:"git-branches",name:"Git multiple branches",code:`gitGraph
  commit
  branch dev
  checkout dev
  commit
  commit
  checkout main
  branch hotfix
  checkout hotfix
  commit
  checkout main
  merge hotfix
  merge dev
`},{id:"git-tag",name:"Git with tag",code:`gitGraph
  commit id: "v1"
  commit
  commit id: "v2"
`},{id:"mindmap-deep",name:"Mindmap deep",code:`mindmap
  root((Product))
    Frontend
      React
      Vue
    Backend
      API
      DB
    DevOps
      CI
      Deploy
`},{id:"mindmap-simple",name:"Mindmap simple",code:`mindmap
  root((Topic))
    A
    B
    C
`},{id:"timeline-detail",name:"Timeline detailed",code:`timeline
  title 2024
  Q1 : Launch
  Q2 : Growth
  Q3 : Scale
  Q4 : Optimize
`},{id:"flow-multi-end",name:"Flowchart multi end",code:`flowchart TB
  A --> B
  A --> C
  B --> D
  C --> D
`},{id:"flow-nodes",name:"Flowchart node shapes",code:`flowchart LR
  A[Rect] --> B(Round)
  B --> C([Stadium])
  C --> D[[Subroutine]]
  D --> E[(DB)]
  E --> F((Circle))
  F --> G>Async]
`},{id:"flow-decision",name:"Flowchart decision",code:`flowchart LR
  Start --> Input
  Input --> Decision{OK?}
  Decision -->|Yes| Process
  Decision -->|No| End
  Process --> End
`},{id:"sequence-group",name:"Sequence group",code:`sequenceDiagram
  participant A
  participant B
  Note over A,B: Group
  A->>B: msg
  B-->>A: ack
`},{id:"class-multi",name:"Class multiple",code:`classDiagram
  class A { +foo() }
  class B { +bar() }
  class C { +baz() }
  A --> B : uses
  B --> C : uses
`},{id:"state-simple",name:"State simple",code:`stateDiagram-v2
  [*] --> A
  A --> B
  B --> [*]
`},{id:"pie-four",name:"Pie four",code:`pie title Split
  "A" : 25
  "B" : 25
  "C" : 25
  "D" : 25
`},{id:"gantt-short",name:"Gantt short",code:`gantt
  dateFormat X
  section One
  Task :a, 0, 3
  section Two
  Task2 :b, 3, 2
`},{id:"journey-four",name:"Journey four steps",code:`journey
  title Quick
  section S1
    A: 5: X
  section S2
    B: 4: X
`},{id:"er-three",name:"ER three",code:`erDiagram
  A ||--o{ B : has
  B ||--o{ C : has
  A { string id }
  B { string id }
  C { string id }
`},{id:"timeline-short",name:"Timeline short",code:`timeline
  title Years
  2022 : A
  2023 : B
  2024 : C
`},{id:"mindmap-four",name:"Mindmap four",code:`mindmap
  root((R))
    A
    B
    C
    D
`},{id:"git-simple",name:"Git simple",code:`gitGraph
  commit
  commit
  branch b
  checkout b
  commit
  checkout main
  merge b
`},{id:"flow-styles",name:"Flowchart link style",code:`flowchart LR
  A --- B
  B === C
  C -.-> D
  D ==> E
`},{id:"flow-long",name:"Flowchart pipeline",code:`flowchart LR
  A --> B --> C --> D --> E --> F
`},{id:"sequence-error",name:"Sequence error path",code:`sequenceDiagram
  participant U as User
  participant S as Server
  U->>S: request
  alt success
    S-->>U: 200
  else error
    S-->>U: 500
  end
`},{id:"sequence-fragment",name:"Sequence opt",code:`sequenceDiagram
  participant A
  participant B
  opt optional
    A->>B: msg
  end
`},{id:"class-abstract",name:"Class abstract",code:`classDiagram
  class Shape {
    <<abstract>>
    +area()
    +perimeter()
  }
  class Circle {
    +radius
    +area()
    +perimeter()
  }
  Shape <|-- Circle
`},{id:"state-nested",name:"State nested",code:`stateDiagram-v2
  [*] --> Active
  state Active {
    [*] --> Idle
    Idle --> Running: start
    Running --> Idle: stop
  }
`},{id:"er-four",name:"ER four entities",code:`erDiagram
  USER ||--o{ ORDER : places
  ORDER ||--|{ ITEM : contains
  PRODUCT ||--o{ ITEM : "product"
  USER { string name }
  ORDER { int total }
  PRODUCT { string sku }
  ITEM { int qty }
`},{id:"gantt-deps",name:"Gantt dependencies",code:`gantt
  dateFormat X
  section A
  A1 :a1, 0, 2
  A2 :a2, after a1, 2
  section B
  B1 :b1, after a1, 3
`},{id:"pie-six",name:"Pie six",code:`pie title Regions
  "North" : 20
  "South" : 25
  "East" : 15
  "West" : 18
  "Central" : 12
  "Other" : 10
`},{id:"journey-long",name:"Journey long",code:`journey
  title Checkout
  section Cart
    View cart: 5: User
    Add item: 4: User
  section Checkout
    Login: 3: User
    Pay: 5: User
  section Done
    Confirm: 5: User
`},{id:"timeline-events",name:"Timeline events",code:`timeline
  title Roadmap
  Q1 2024 : Planning
  Q2 2024 : Build
  Q3 2024 : Launch
  Q4 2024 : Scale
`},{id:"mindmap-five",name:"Mindmap five",code:`mindmap
  root((Center))
    One
    Two
    Three
    Four
    Five
`},{id:"flow-advanced-cicd",name:"Flowchart CI/CD pipeline",code:`flowchart TB
  subgraph Sources
    G[Git] --> W[Webhook]
  end
  subgraph Build
    W --> C[Clone]
    C --> I[Install]
    I --> T[Test]
    T --> B[Build]
  end
  subgraph Deploy
    B --> R[Registry]
    R --> K[Kubernetes]
    K --> M[Monitor]
  end
  M -.->|alert| W
`},{id:"flow-advanced-multi",name:"Flowchart multi-path",code:`flowchart TB
  A[Start] --> B{Type?}
  B -->|A| C[Path A]
  B -->|B| D[Path B]
  B -->|C| E[Path C]
  C --> F[Process A]
  D --> G[Process B]
  E --> H[Process C]
  F --> I[Join]
  G --> I
  H --> I
  I --> J[End]
`},{id:"sequence-advanced-auth",name:"Sequence OAuth flow",code:`sequenceDiagram
  participant U as User
  participant C as Client
  participant A as Auth Server
  participant R as Resource
  U->>C: Login
  C->>A: Auth request
  A-->>U: Login page
  U->>A: Credentials
  A-->>C: Code
  C->>A: Code + secret
  A-->>C: Token
  C->>R: API + Token
  R-->>C: Data
  C-->>U: Display
`},{id:"sequence-advanced-retry",name:"Sequence retry loop",code:`sequenceDiagram
  participant C as Client
  participant S as Service
  loop Retry up to 3x
    C->>S: request
    alt success
      S-->>C: 200 OK
    else failure
      S-->>C: 5xx
      Note over C: backoff then retry
    end
  end
`},{id:"class-advanced-service",name:"Class service layer",code:`classDiagram
  class Service {
    <<interface>>
    +execute()
  }
  class UserService {
    -repo: UserRepo
    +execute()
    +findById()
    +save()
  }
  class OrderService {
    -repo: OrderRepo
    -payment: Payment
    +execute()
    +create()
  }
  class UserRepo {
    <<interface>>
    +find()
    +save()
  }
  Service <|.. UserService
  Service <|.. OrderService
  UserService --> UserRepo : uses
  OrderService --> UserRepo : uses
`},{id:"state-advanced-machine",name:"State vending machine",code:`stateDiagram-v2
  [*] --> Idle
  Idle --> Collecting: insert_coin
  Collecting --> Collecting: insert_coin
  Collecting --> Selecting: enough
  Selecting --> Dispensing: select_item
  Dispensing --> Idle: dispense_done
  Selecting --> Idle: cancel
  Collecting --> Idle: cancel
`},{id:"state-advanced-parallel",name:"State parallel regions",code:`stateDiagram-v2
  [*] --> Composite
  state Composite {
    [*] --> Region1
    state Region1 {
      [*] --> R1_S1
      R1_S1 --> R1_S2
    }
    [*] --> Region2
    state Region2 {
      [*] --> R2_S1
      R2_S1 --> R2_S2
    }
  }
`},{id:"er-advanced-ecommerce",name:"ER e-commerce",code:`erDiagram
  USER ||--o{ ORDER : places
  USER {
    uuid id
    string email
    string name
  }
  ORDER ||--|{ ORDER_ITEM : contains
  ORDER {
    uuid id
    timestamp created
    string status
  }
  PRODUCT ||--o{ ORDER_ITEM : "ordered as"
  PRODUCT {
    uuid id
    string sku
    decimal price
  }
  ORDER_ITEM {
    int quantity
    decimal unit_price
  }
  CATEGORY ||--o{ PRODUCT : has
  CATEGORY {
    uuid id
    string name
  }
`},{id:"gantt-advanced-project",name:"Gantt project phases",code:`gantt
  title Project roadmap
  dateFormat YYYY-MM-DD
  section Discovery
  Research    :a1, 2024-01-01, 14d
  Requirements :a2, after a1, 7d
  section Design
  UX design   :b1, after a2, 14d
  UI design   :b2, after b1, 10d
  section Build
  Backend     :c1, after a2, 30d
  Frontend    :c2, after b1, 25d
  section Launch
  QA          :d1, after c1, 14d
  Deploy      :milestone, after d1, 0d
`},{id:"pie-advanced-breakdown",name:"Pie budget breakdown",code:`pie title Annual budget
  "Engineering" : 45
  "Product" : 20
  "Design" : 12
  "Marketing" : 10
  "Operations" : 8
  "Other" : 5
`},{id:"journey-advanced-onboarding",name:"Journey onboarding",code:`journey
  title New user onboarding
  section Sign up
    Visit landing: 5: User
    Create account: 4: User
    Verify email: 3: User
  section Setup
    Complete profile: 5: User
    Select plan: 4: User
    Add payment: 3: User
  section First use
    Tutorial: 5: User
    First action: 5: User
  section Retention
    Day 1 email: 4: User
    Day 7 check-in: 5: User
`},{id:"timeline-advanced-roadmap",name:"Timeline product roadmap",code:`timeline
  title Product roadmap
  section 2024
    Q1 : Discovery & MVP
    Q2 : Beta launch
    Q3 : GA release
    Q4 : Enterprise features
  section 2025
    Q1 : Scale & optimize
    Q2 : Integrations
    Q3 : AI features
    Q4 : Global rollout
`},{id:"mindmap-advanced-arch",name:"Mindmap architecture",code:`mindmap
  root((System))
    Frontend
      Web
      Mobile
      Desktop
    Backend
      API
      Workers
      Jobs
    Data
      DB
      Cache
      Search
    Infra
      K8s
      CI/CD
      Monitor
`},{id:"git-advanced-flow",name:"Git flow",code:`gitGraph
  commit id: "init"
  branch develop
  checkout develop
  commit
  branch feature/auth
  checkout feature/auth
  commit
  commit
  checkout develop
  merge feature/auth
  branch release/v1
  checkout release/v1
  commit
  checkout main
  merge release/v1 tag: "v1.0"
  checkout develop
  merge release/v1
`},{id:"flow-advanced-swimlane",name:"Flowchart swimlane",code:`flowchart TB
  subgraph Client
    A[Request] --> B[Validate]
  end
  subgraph API
    B --> C[Process]
    C --> D[Response]
  end
  subgraph DB
    C --> E[(Query)]
    E --> F[(Result)]
    F --> D
  end
`},{id:"flow-advanced-rma",name:"Process RMA / returns",code:`flowchart TB
  subgraph "Receive"
    A[Return received] --> B[Inspect]
    B --> C{Accept?}
  end
  subgraph "Process"
    C -->|Yes| D[Refund/Replace]
    C -->|No| E[Reject]
    D --> F[Update inventory]
    F --> G[Notify customer]
  end
  subgraph "Close"
    E --> H[Document]
    G --> H
    H --> I((End))
  end
`},{id:"flow-advanced-hr",name:"Process HR hiring",code:`flowchart TB
  subgraph "Recruit"
    R1[Post job] --> R2[Screen]
    R2 --> R3[Interview]
    R3 --> R4{Offer?}
  end
  subgraph "Onboard"
    R4 -->|Yes| O1[Accept]
    R4 -->|No| R1
    O1 --> O2[Background check]
    O2 --> O3[Contract]
    O3 --> O4[Start]
  end
`},{id:"quadrant-advanced-bcg",name:"Matrix BCG (portfolio)",code:`quadrantChart
  title BCG matrix
  x-axis Low share --> High share
  y-axis Low growth --> High growth
  quadrant-1 Stars
  quadrant-2 Question marks
  quadrant-3 Cash cows
  quadrant-4 Dogs
  "Product A": [0.8, 0.85]
  "Product B": [0.25, 0.8]
  "Product C": [0.8, 0.2]
  "Product D": [0.2, 0.25]
`},{id:"quadrant-advanced-ie",name:"Matrix IE (internal-external)",code:`quadrantChart
  title IE matrix
  x-axis Weak --> Strong
  y-axis Conservative --> Aggressive
  quadrant-1 Grow
  quadrant-2 Build
  quadrant-3 Hold
  quadrant-4 Harvest
  "Unit 1": [0.75, 0.8]
  "Unit 2": [0.3, 0.7]
  "Unit 3": [0.7, 0.3]
`},{id:"chart-xy-quarterly",name:"Chart quarterly bars",code:`xychart-beta
  title "Revenue by quarter"
  x-axis [Q1, Q2, Q3, Q4]
  y-axis "K EUR" 0 --> 120
  bar [80, 95, 88, 110]
`},{id:"chart-xy-trend",name:"Chart trend line",code:`xychart-beta
  title "Growth trend"
  x-axis [2021, 2022, 2023, 2024]
  y-axis 0 --> 150
  line [60, 85, 105, 130]
`},{id:"sequence-advanced-saga",name:"Sequence saga",code:`sequenceDiagram
  participant O as Order
  participant P as Payment
  participant S as Stock
  O->>P: reserve
  P-->>O: ok
  O->>S: reserve
  alt stock ok
    S-->>O: ok
    O->>P: confirm
    O->>S: confirm
  else stock fail
    S-->>O: fail
    O->>P: compensate
  end
`},{id:"flow-real-api-gateway",name:"API Gateway & microservices",code:`flowchart TB
  subgraph Clients
    W[Web]
    M[Mobile]
  end
  subgraph "API Gateway"
    GW[Gateway]
    AUTH[Auth]
    RATE[Rate limit]
    GW --> AUTH --> RATE
  end
  subgraph "Microservices"
    USR[User service]
    ORD[Order service]
    INV[Inventory service]
    PAY[Payment service]
  end
  subgraph Data
    DB1[(Users DB)]
    DB2[(Orders DB)]
    CACHE[(Redis)]
  end
  W --> GW
  M --> GW
  RATE --> USR
  RATE --> ORD
  USR --> DB1
  ORD --> DB2
  ORD --> INV
  ORD --> PAY
  INV --> CACHE
`},{id:"flow-real-incident-response",name:"Incident response workflow",code:`flowchart TB
  A[Alert triggered] --> B{Severity?}
  B -->|P1/P2| C[Page on-call]
  B -->|P3/P4| D[Create ticket]
  C --> E[Acknowledge]
  E --> F[Triage]
  F --> G{Root cause known?}
  G -->|No| H[Debug / Gather logs]
  H --> F
  G -->|Yes| I[Implement fix]
  I --> J[Deploy]
  J --> K[Verify]
  K --> L[Post-mortem]
  L --> M[Close]
  D --> N[Queue for next sprint]
`},{id:"flow-real-data-pipeline",name:"ETL data pipeline",code:`flowchart LR
  subgraph Sources
    S1[(Postgres)]
    S2[(API)]
    S3[Files S3]
  end
  subgraph Ingest
    K[Kafka]
    S1 --> K
    S2 --> K
    S3 --> K
  end
  subgraph Process
    SPARK[Spark jobs]
    K --> SPARK
    SPARK --> VALID[Validate]
    VALID --> TRANSFORM[Transform]
    TRANSFORM --> ENRICH[Enrich]
  end
  subgraph Sink
    DW[(Data warehouse)]
    LAKE[(Data lake)]
    ENRICH --> DW
    ENRICH --> LAKE
  end
`},{id:"sequence-real-checkout",name:"E-commerce checkout flow",code:`sequenceDiagram
  participant U as User
  participant C as Cart
  participant O as Order
  participant P as Payment
  participant I as Inventory
  participant N as Notification
  U->>C: View cart
  C-->>U: Cart contents
  U->>O: Create order
  O->>I: Reserve items
  alt Items available
    I-->>O: Reserved
    O->>P: Charge
    P-->>O: Paid
    O->>I: Confirm
    O->>N: Send confirmation
    N->>U: Email + SMS
  else Out of stock
    I-->>O: Failed
    O-->>U: Error: try again
  end
`},{id:"sequence-real-oauth",name:"OAuth 2.0 authorization code",code:`sequenceDiagram
  participant U as User
  participant C as Client app
  participant A as Auth server
  participant R as Resource API
  U->>C: Login
  C->>C: Redirect to /authorize
  C->>U: Redirect to Auth
  U->>A: Enter credentials
  A->>A: Validate
  A->>U: Consent screen
  U->>A: Approve
  A->>C: Redirect with code
  C->>A: Exchange code + client_secret
  A-->>C: Access token + refresh token
  C->>R: Request resource (Bearer token)
  R-->>C: Data
  Note over C,R: Later: use refresh_token to get new access_token
`},{id:"class-real-domain",name:"Domain model: e-commerce",code:`classDiagram
  class Customer {
    +id: UUID
    +email: string
    +addresses: Address[]
    +placeOrder(cart)
    +addAddress(addr)
  }
  class Order {
    +id: UUID
    +status: OrderStatus
    +lineItems: LineItem[]
    +total: Money
    +submit()
    +cancel()
  }
  class LineItem {
    +productId: UUID
    +quantity: int
    +unitPrice: Money
  }
  class Product {
    +id: UUID
    +name: string
    +price: Money
    +stock: int
  }
  class Payment {
    +orderId: UUID
    +amount: Money
    +process()
  }
  Customer "1" --> "*" Order : places
  Order "1" --> "*" LineItem : contains
  LineItem "*" --> "1" Product : references
  Order "1" --> "0..1" Payment : has
`},{id:"state-real-order",name:"Order state machine",code:`stateDiagram-v2
  [*] --> Draft
  Draft --> PendingPayment: submit
  PendingPayment --> Paid: payment received
  PendingPayment --> Cancelled: timeout / cancel
  Paid --> Fulfilling: start fulfillment
  Fulfilling --> Shipped: ship
  Fulfilling --> PartiallyShipped: partial ship
  PartiallyShipped --> Shipped: remaining shipped
  Shipped --> Delivered: deliver
  Shipped --> Returned: customer return
  Delivered --> [*]
  Returned --> Refunded: refund
  Refunded --> [*]
  Cancelled --> [*]
`},{id:"er-real-saas",name:"ER: SaaS multi-tenant",code:`erDiagram
  TENANT ||--o{ USER : has
  TENANT ||--o{ PROJECT : has
  PROJECT ||--o{ TASK : contains
  PROJECT ||--o{ MILESTONE : has
  USER ||--o{ TASK : assigned
  USER ||--o{ COMMENT : writes
  TASK ||--o{ COMMENT : has
  TENANT {
    uuid id PK
    string name
    string slug
  }
  USER {
    uuid id PK
    uuid tenant_id FK
    string email
  }
  PROJECT {
    uuid id PK
    uuid tenant_id FK
    string title
  }
  TASK {
    uuid id PK
    uuid project_id FK
    uuid assignee_id FK
    string title
    string status
  }
`},{id:"mindmap-real-product",name:"Mindmap: product strategy",code:`mindmap
  root((Product 2025))
    Vision
      Global reach
      Sustainability
    Discovery
      User research
      Competitors
      Metrics
    Build
      Backlog
      Design
      Engineering
      QA
    Launch
      Beta
      GA
      Marketing
    Growth
      Retention
      Monetization
      Partnerships
`},{id:"timeline-real-release",name:"Timeline: product release",code:`timeline
  title Product release 2025
  Q1 2025 : Discovery : Research & specs
  Q1 2025 : Design : UX & UI
  Q2 2025 : Alpha : Internal only
  Q2 2025 : Beta : Selected customers
  Q3 2025 : GA : Public launch
  Q3 2025 : Marketing : Campaigns
  Q4 2025 : Iterate : Feedback & v2
`},{id:"flow-dev-cicd-full",name:"CI/CD pipeline (full)",code:`flowchart TB
  subgraph "Developer"
    COMMIT[git push]
    PR[Open PR]
    COMMIT --> PR
  end
  subgraph "CI"
    LINT[Lint]
    TEST[Unit tests]
    BUILD[Build]
    E2E[E2E tests]
    PR --> LINT --> TEST --> BUILD --> E2E
  end
  subgraph "Review"
    REVIEW[Code review]
    E2E --> REVIEW
    REVIEW --> MERGE[Merge to main]
  end
  subgraph "CD"
    MERGE --> BUILD_IMG[Build image]
    BUILD_IMG --> PUSH_REG[Push to registry]
    PUSH_REG --> DEPLOY[Deploy staging]
    DEPLOY --> SMOKE[Smoke tests]
    SMOKE --> PROD[Deploy production]
  end
`},{id:"flow-dev-feature-branch",name:"Git feature branch workflow",code:`flowchart LR
  subgraph "Main"
    M[main]
  end
  subgraph "Feature"
    F[feature/xyz]
    M --> F
    F --> PR[PR]
    PR --> M
  end
  subgraph "Release"
    R[release/v1.2]
    M --> R
    R --> M
  end
  subgraph "Hotfix"
    H[hotfix/critical]
    M --> H
    H --> M
  end
`},{id:"flow-dev-code-review",name:"Code review process",code:`flowchart TB
  A[Author opens PR] --> B[CI runs]
  B --> C{CI green?}
  C -->|No| D[Author fixes]
  D --> B
  C -->|Yes| E[Reviewer assigned]
  E --> F[Review]
  F --> G{Approved?}
  G -->|Request changes| H[Author updates]
  H --> B
  G -->|Yes| I[Merge]
  I --> J[Delete branch]
  J --> K[Deploy]
`},{id:"flow-dev-app-lifecycle",name:"App development lifecycle",code:`flowchart TB
  subgraph "Plan"
    SPEC[Spec / tickets]
    DESIGN[Design]
    SPEC --> DESIGN
  end
  subgraph "Build"
    DEV[Develop]
    REVIEW[Code review]
    DESIGN --> DEV --> REVIEW
  end
  subgraph "Test"
    QA[QA / manual]
    AUTOMATION[Automated tests]
    REVIEW --> QA
    REVIEW --> AUTOMATION
  end
  subgraph "Ship"
    STAGING[Staging]
    PROD[Production]
    QA --> STAGING
    AUTOMATION --> STAGING
    STAGING --> PROD
  end
  PROD --> MONITOR[Monitor]
  MONITOR -.->|bugs| SPEC
`},{id:"flow-dev-deployment",name:"Blue-green deployment",code:`flowchart TB
  subgraph "Traffic"
    LB[Load balancer]
  end
  subgraph "Blue"
    B1[App v1]
    B2[App v1]
  end
  subgraph "Green"
    G1[App v2]
    G2[App v2]
  end
  LB --> B1
  LB --> B2
  DEPLOY[Deploy v2 to Green] --> TEST[Smoke test Green]
  TEST --> SWITCH[Switch LB to Green]
  SWITCH --> LB
  LB -.->|after switch| G1
  LB -.->|after switch| G2
`},{id:"sequence-dev-request-response",name:"API request-response flow",code:`sequenceDiagram
  participant C as Client
  participant GW as API Gateway
  participant A as Auth
  participant S as Service
  participant DB as Database
  C->>GW: GET /api/resource
  GW->>A: Validate token
  A-->>GW: OK
  GW->>S: Forward request
  S->>DB: Query
  DB-->>S: Rows
  S->>S: Serialize
  S-->>GW: JSON
  GW-->>C: 200 + body
  Note over C,DB: Error path: 4xx/5xx returned
`},{id:"sequence-dev-websocket",name:"WebSocket handshake & message",code:`sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: HTTP GET /ws (Upgrade)
  S-->>C: 101 Switching Protocols
  Note over C,S: Connection upgraded
  loop Messages
    C->>S: Frame (e.g. JSON)
    S->>S: Process
    S->>C: Frame (response / broadcast)
  end
  C->>S: Close frame
  S-->>C: Close ack
`},{id:"sequence-dev-saga-compensate",name:"Saga: order with compensation",code:`sequenceDiagram
  participant O as Order
  participant P as Payment
  participant S as Stock
  participant N as Notify
  O->>P: Reserve
  P-->>O: OK
  O->>S: Reserve
  alt Stock OK
    S-->>O: OK
    O->>P: Confirm
    O->>S: Confirm
    O->>N: Send receipt
  else Stock fail
    S-->>O: Fail
    O->>P: Compensate refund
    O->>N: Send failure
  end
`},{id:"class-dev-microservice",name:"Class: microservice boundaries",code:`classDiagram
  class OrderService {
    +createOrder()
    +getOrder()
    +cancelOrder()
    -orderRepo
    -eventBus
  }
  class PaymentService {
    +charge()
    +refund()
    -paymentGateway
  }
  class InventoryService {
    +reserve()
    +release()
    +confirm()
    -stockRepo
  }
  class EventBus {
    +publish()
    +subscribe()
  }
  OrderService --> PaymentService : charge
  OrderService --> InventoryService : reserve
  OrderService --> EventBus : publish
  InventoryService --> EventBus : subscribe
`},{id:"state-dev-release",name:"State: release pipeline stage",code:`stateDiagram-v2
  [*] --> Building
  Building --> Testing: build success
  Building --> Failed: build fail
  Failed --> Building: retry
  Testing --> Staging: tests pass
  Testing --> Failed: tests fail
  Staging --> Production: approve
  Staging --> Failed: rollback
  Production --> [*]
  Production --> Failed: incident
  Failed --> Building: fix & re-run
`},{id:"flow-dev-testing-pyramid",name:"Testing pyramid",code:`flowchart TB
  subgraph "E2E (few)"
    E2E[E2E tests]
  end
  subgraph "Integration (some)"
    INT[API tests]
    INT2[DB integration]
  end
  subgraph "Unit (many)"
    U1[Unit tests]
    U2[Unit tests]
    U3[Unit tests]
  end
  E2E --> INT
  E2E --> INT2
  INT --> U1
  INT2 --> U2
  U1 --> U3
`},{id:"flow-dev-monitoring",name:"Observability stack",code:`flowchart LR
  subgraph App
    APP[Application]
  end
  subgraph "Collect"
    LOGS[Logs]
    METRICS[Metrics]
    TRACES[Traces]
    APP --> LOGS
    APP --> METRICS
    APP --> TRACES
  end
  subgraph "Store & query"
    LOGS --> LOKI[Loki / ELK]
    METRICS --> PROM[Prometheus]
    TRACES --> JAEGER[Jaeger]
  end
  subgraph "Visualize & alert"
    LOKI --> DASH[Dashboards]
    PROM --> DASH
    JAEGER --> DASH
    PROM --> ALERT[Alerts]
  end
`},{id:"process-powerpoint-art-word",name:"Presentation workflow (Word, Art, PowerPoint)",code:`flowchart LR
  subgraph Draft
    W[Word draft]
    O[Outline]
    W --> O
  end
  subgraph Design
    A[Art / graphics]
    L[Layout]
    O --> A
    A --> L
  end
  subgraph Deliver
    P[PowerPoint deck]
    L --> P
    P --> R[Review]
    R --> P
  end
`},{id:"process-content-pipeline",name:"Content creation pipeline",code:`flowchart TB
  I[Idea / brief] --> R[Research]
  R --> D[Draft]
  D --> E[Edit]
  E --> V{Approved?}
  V -->|No| D
  V -->|Yes| A[Art / media]
  A --> L[Layout]
  L --> P[Publish]
  P --> M[Monitor]
`},{id:"process-document-lifecycle",name:"Document lifecycle",code:`flowchart LR
  A[Create] --> B[Review]
  B --> C{OK?}
  C -->|No| A
  C -->|Yes| D[Approve]
  D --> E[Distribute]
  E --> F[Archive]
`},{id:"process-creative-workflow",name:"Creative workflow",code:`flowchart TB
  subgraph Input
    B[Brief]
    REF[References]
  end
  subgraph Create
    S[Sketch]
    D[Design]
    REV[Review]
    B --> S
    S --> D
    D --> REV
  end
  subgraph Output
    REV --> EX[Export]
    EX --> W[Web]
    EX --> P[Print]
  end
`},{id:"process-slide-deck",name:"Slide deck workflow",code:`flowchart LR
  C[Content] --> O[Outline]
  O --> S[Slides]
  S --> I[Images]
  I --> R[Review]
  R --> F[Final deck]
  F --> PRES[Present]
`},{id:"process-publish",name:"Publish workflow",code:`flowchart TB
  W[Write] --> E[Edit]
  E --> D[Design]
  D --> R{Ready?}
  R -->|No| W
  R -->|Yes| PUB[Publish]
  PUB --> SHARE[Share]
  SHARE --> FEED[Feedback]
  FEED -.-> W
`},{id:"process-api-docs",name:"API documentation lifecycle",code:`flowchart TB
  subgraph Design
    D1[Define endpoints]
    D2[Agree on contracts]
    D1 --> D2
  end
  subgraph Spec
    S1[Write OpenAPI]
    S2[Example requests]
    D2 --> S1
    S1 --> S2
  end
  subgraph Docs
    G1[Generate docs site]
    H1[Host on docs URL]
    S2 --> G1
    G1 --> H1
  end
  H1 --> DEV[Developers use docs]
`},{id:"process-cloud-db-api",name:"Cloud app with API, DB, cache",code:`flowchart LR
  U[User] --> B[Browser]
  B --> GW[API gateway]
  GW --> SVC[App service]
  SVC --> DB[(Database)]
  SVC --> CACHE[(Cache)]
  SVC --> Q[(Queue)]
  Q --> WORKER[Worker]
  WORKER --> STORAGE[(Blob storage)]
  STORAGE --> CDN[CDN]
  CDN --> U
`},{id:"process-oncall-debug",name:"On-call incident debug flow",code:`flowchart TB
  U[User report] --> I[Issue created]
  I --> L[Check logs]
  L --> R[Reproduce]
  R --> DBQ[Inspect DB]
  DBQ --> CAUSE[Find cause]
  CAUSE --> FIX[Patch]
  FIX --> DEPLOY[Deploy]
  DEPLOY --> VERIFY[Verify]
  VERIFY --> CLOSE[Close issue]
`},{id:"process-docs-maintenance",name:"Software docs maintenance",code:`flowchart TB
  CODE[Code change] --> NOTE[Changelog note]
  NOTE --> DOCS[Update docs]
  DOCS --> REVIEW[Review]
  REVIEW --> OK{OK?}
  OK -->|No| DOCS
  OK -->|Yes| MERGE[Merge docs]
  MERGE --> PUBLISH[Publish site]
  PUBLISH --> ANNOUNCE[Announce]
`},{id:"blank",name:"Blank",code:`flowchart LR
  A --> B
`}];function Jy(e){var o;const t=e.trim();if(!t)return"";const n=((o=t.split(`
`)[0])==null?void 0:o.trim())??"",r=n.toLowerCase(),i=n.match(/^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|quadrantChart|requirementDiagram|mindmap|timeline|gitGraph|block|C4|sankey-beta|packet|sankey)\b/i);if(i){const a=i[1];return a==="graph"||a==="flowchart"?"Flowchart":a.charAt(0).toUpperCase()+a.slice(1).replace(/-([a-z])/g,(s,u)=>" "+u.toUpperCase())}return r.startsWith("flowchart")||r.startsWith("graph ")?"Flowchart":""}function Zy(e){const t=e.match(/(?:line\s+)?(\d+)(?:\s*[:\s]|$)/i)||e.match(/\b(\d+)\s*:/);if(t){const n=parseInt(t[1],10);return n>=1?n:null}return null}function ir(e,t="diagram"){var i;const n=(i=e.split(`
`)[0])==null?void 0:i.trim();return n&&n.replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").slice(0,40).trim()||t}const Ei="Diagramium",Ac="0.1.0",or=48,Il=30,_i=15,Ni=70,Tl="diagramium-saved",Ra="diagramium-ui",Ol="diagramium-hint-seen",Pa="diagramium-recent-examples",Lc=10,ev=10,cp=10,tv=[200,500,1e3],nv=768;function rv(e){const[t,n]=h.useState(()=>typeof window<"u"&&window.matchMedia(e).matches);return h.useEffect(()=>{const r=window.matchMedia(e),i=()=>n(r.matches);return r.addEventListener("change",i),n(r.matches),()=>r.removeEventListener("change",i)},[e]),t}function iv(){try{const e=localStorage.getItem(Ra);if(!e)return{leftPct:Il,darkMode:!0,renderDebounceMs:200};const t=JSON.parse(e);return{leftPct:typeof t.leftPct=="number"?Math.max(_i,Math.min(Ni,t.leftPct)):Il,darkMode:typeof t.darkMode=="boolean"?t.darkMode:!0,renderDebounceMs:[200,500,1e3].includes(Number(t.renderDebounceMs))?Number(t.renderDebounceMs):200}}catch{return{leftPct:Il,darkMode:!0,renderDebounceMs:200}}}function ov(){try{const e=localStorage.getItem(Pa);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,cp):[]}catch{return[]}}const lv={backgroundColor:"transparent",borderEnabled:!1,borderColor:"#404040",borderWidth:1},fn={background:"#141414",primaryColor:"#2d3748",primaryTextColor:"#e2e8f0",lineColor:"#4a5568"},zl=["#141414","#1a1a1a","#262626","#404040","#525252","#737373","#a3a3a3","#d4d4d4","#e5e5e5","#ffffff","#3b82f6","#2563eb","#1d4ed8","#60a5fa","#93c5fd","#1e3a8a","#1e40af","#22c55e","#16a34a","#15803d","#4ade80","#86efac","#14532d","#166534","#e11d48","#b91c1c","#dc2626","#f87171","#fca5a5","#7f1d1d","#991b1b","#a855f7","#7c3aed","#6d28d9","#c084fc","#d8b4fe","#4c1d95","#5b21b6","#f59e0b","#d97706","#b45309","#fbbf24","#fcd34d","#78350f","#92400e","#06b6d4","#0891b2","#0e7490","#22d3ee","#67e8f9","#164e63","#155e75"];function av(){const{code:e,setCode:t,undo:n,redo:r,canUndo:i,canRedo:o}=Gy(),a=rv(`(max-width: ${nv}px)`),[s,u]=h.useState(!1),f=h.useCallback(()=>u(!0),[]),v=h.useCallback(()=>{t(""),u(!1)},[t]),y=iv(),[g,w]=h.useState(y.leftPct),[b,C]=h.useState(!1),[W,p]=h.useState(!1),[c,m]=h.useState({...lv}),[S,E]=h.useState({...fn}),[D,j]=h.useState(!1),[z,L]=h.useState(!1),[T,K]=h.useState(!1),[Ie,ee]=h.useState(!1),[Ee,F]=h.useState(!1),[q,Te]=h.useState(""),[P,B]=h.useState(""),[U,M]=h.useState(!1),[A,le]=h.useState(y.darkMode),[fe,Oe]=h.useState(null),[Ze,he]=h.useState(!1),[Do,ze]=h.useState(!1),[un,dp]=h.useState(!1),[Gr,fp]=h.useState(!1),[$r,Io]=h.useState(()=>{try{const d=localStorage.getItem(Tl);if(!d)return[];const x=JSON.parse(d);return Array.isArray(x)?x.slice(0,Lc):[]}catch{return[]}}),[To,Cs]=h.useState([]),[Qr,pp]=h.useState(y.renderDebounceMs),[Et,mp]=h.useState(ov),Oo=h.useRef(null),Es=h.useRef(null),bs=h.useRef(()=>{}),zo=h.useRef(null),js=h.useRef(null),Mo=h.useRef(null),Rs=h.useRef(null),Ps=h.useRef(null),{svg:pt,lastValidSvg:Ds,error:$e,loading:Is}=Hy(e,S,Qr,un),$=$e?Ds:pt,Ts=h.useMemo(()=>Jy(e),[e]),Ao=h.useRef(null),[qr,$t]=h.useState(1),[Lo,Vn]=h.useState(0),[_o,Gn]=h.useState(0),$n=h.useRef(null),Qn=h.useRef(null),No=h.useRef(qr);No.current=qr;const Os=h.useRef(Lo);Os.current=Lo;const zs=h.useRef(_o);zs.current=_o;const Kr=40,Ms=.25,hp=.0012,Yr=.25,Xr=4,[Bo,As]=h.useState(!1),Jr=h.useRef({x:0,y:0}),[Zr,Ls]=h.useState({}),_s=h.useRef(Zr);_s.current=Zr;const[ei,Ns]=h.useState(null),Bs=h.useRef({x:0,y:0,offsetX:0,offsetY:0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",A?"dark":"light")},[A]),h.useEffect(()=>{try{localStorage.setItem(Tl,JSON.stringify($r))}catch{}},[$r]),h.useEffect(()=>{try{localStorage.setItem(Ra,JSON.stringify({leftPct:g,darkMode:A,renderDebounceMs:Qr}))}catch{}},[g,A,Qr]),h.useEffect(()=>{try{localStorage.setItem(Pa,JSON.stringify(Et))}catch{}},[Et]),h.useEffect(()=>{const d=x=>{var _,N,ue;const R=(_=Mo.current)==null?void 0:_.contains(x.target),I=((N=Rs.current)==null?void 0:N.contains(x.target))||((ue=Ps.current)==null?void 0:ue.contains(x.target));R||C(!1),I||j(!1)};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[]),h.useEffect(()=>{const d=x=>{if(x.key==="Escape"){u(!1),C(!1),j(!1),L(!1),ee(!1),K(!1),ze(!1);return}(x.ctrlKey||x.metaKey)&&(x.key==="z"?(x.preventDefault(),x.shiftKey?r():n()):x.key==="y"?(x.preventDefault(),r()):x.key==="s"&&(x.preventDefault(),bs.current()))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n,r]);const Fo=h.useCallback(d=>d==="panelBg"?c.backgroundColor==="transparent"?"#141414":c.backgroundColor:d==="borderColor"?c.borderColor:d==="svgBg"?S.background??fn.background:d==="nodeFill"?S.primaryColor??fn.primaryColor:d==="nodeText"?S.primaryTextColor??fn.primaryTextColor:d==="lineColor"?S.lineColor??fn.lineColor:"#141414",[c,S]),cn=h.useCallback((d,x)=>{const R=/^#[0-9A-Fa-f]{6}$/.test(x)?x:"#141414";d==="panelBg"&&m(I=>({...I,backgroundColor:x==="transparent"?"transparent":R})),d==="borderColor"&&m(I=>({...I,borderColor:R})),d==="svgBg"&&E(I=>({...I,background:R})),d==="nodeFill"&&E(I=>({...I,primaryColor:R})),d==="nodeText"&&E(I=>({...I,primaryTextColor:R})),d==="lineColor"&&E(I=>({...I,lineColor:R}))},[]),V=h.useCallback(d=>{Oe(d)},[]),gp=h.useCallback(()=>{try{localStorage.removeItem("diagramium-code"),localStorage.removeItem(Tl),localStorage.removeItem(Ra),localStorage.removeItem(Ol),localStorage.removeItem(Pa)}catch{}Io([]),Cs([]),t(""),L(!1),V("All data cleared")},[t,V]);h.useEffect(()=>{if(!fe)return;const d=setTimeout(()=>Oe(null),2500);return()=>clearTimeout(d)},[fe]),h.useEffect(()=>{if(typeof localStorage>"u"||localStorage.getItem(Ol))return;const d=setTimeout(()=>{Oe("Use Examples to insert a template"),setTimeout(()=>{try{localStorage.setItem(Ol,"1")}catch{}},2500)},1500);return()=>clearTimeout(d)},[]),h.useEffect(()=>{if(!s||!zo.current)return;const d=zo.current,x=d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),R=x[0],I=x[x.length-1];R==null||R.focus();const _=N=>{N.key==="Tab"&&(N.shiftKey?document.activeElement===R&&(N.preventDefault(),I==null||I.focus()):document.activeElement===I&&(N.preventDefault(),R==null||R.focus()))};return d.addEventListener("keydown",_),()=>{d.removeEventListener("keydown",_);const N=Oo.current;requestAnimationFrame(()=>N==null?void 0:N.focus())}},[s]);const Fs=h.useCallback(()=>{$&&$y($,ir(e,"diagram")+".svg"),C(!1),$&&V("Downloaded SVG")},[$,e,V]),ti=h.useCallback(async(d=2)=>{$&&await Qy($,ir(e,"diagram")+".png",d),C(!1),$&&V("Downloaded PNG")},[$,e,V]),Us=h.useCallback(()=>{qy(e,ir(e,"diagram")+".md"),C(!1),V("Downloaded .md")},[e,V]),Ws=h.useCallback(()=>{Ky(e,ir(e,"diagram")+".mmd"),C(!1),V("Downloaded .mmd")},[e,V]),yp=h.useCallback(async()=>{if($e)try{await navigator.clipboard.writeText($e),V("Error copied")}catch{V("Copy failed")}},[$e,V]),vp=h.useCallback(()=>{if(!$e)return;const d=Zy($e),x=Es.current;x&&d!=null&&(x.revealLine(d),x.setPosition({lineNumber:d,column:1}),x.focus())},[$e]),Hs=h.useCallback(()=>{const d=ir(e,"diagram")||"diagram",x=`saved-${Date.now()}-${Math.random().toString(36).slice(2)}`;Io(R=>[{id:x,name:d,code:e,ts:Date.now()},...R].slice(0,Lc)),ze(!0),V("Saved")},[e,V]);bs.current=Hs;const xp=h.useCallback(d=>{t(d.code),ze(!1),V("Opened")},[t,V]),Sp=h.useCallback(d=>{Io(x=>x.filter(R=>R.id!==d))},[]),wp=h.useCallback(()=>{Cs(d=>[e,...d].slice(0,ev)),V("Snapshot saved")},[e,V]),kp=h.useCallback(d=>{t(d),V("Restored")},[t,V]),Vs=h.useCallback(async()=>{if(!$)return;const d=await Yy($);V(d?"Copied image":"Copy failed"),d&&C(!1)},[$,V]),Gs=h.useCallback(async()=>{const d="```mermaid\n"+e+"\n```";try{await navigator.clipboard.writeText(d),V("Copied as Markdown"),C(!1)}catch{V("Copy failed")}},[e,V]),$s=h.useCallback(async()=>{try{await navigator.clipboard.writeText(e),V("Copied code"),C(!1)}catch{V("Copy failed")}},[e,V]),Qs=h.useCallback(async()=>{try{const d=btoa(unescape(encodeURIComponent(e))),x=window.location.origin+window.location.pathname+"#d/"+d;await navigator.clipboard.writeText(x),V("Link copied"),C(!1)}catch{V("Copy failed")}},[e,V]),qs=h.useCallback(()=>{if(!$)return;const d=window.open("","_blank");if(!d){V("Popup blocked");return}d.document.write(`
      <!DOCTYPE html><html><head><title>Diagram</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff;} svg{max-width:100%;height:auto;}</style></head>
      <body>${$}</body></html>
    `),d.document.close(),d.focus(),setTimeout(()=>{d.print(),d.close()},300),C(!1),V("Print dialog opened")},[$,V]),Ks=h.useCallback(()=>{var d;(d=js.current)==null||d.click()},[]),Cp=h.useCallback(d=>{var I;const x=(I=d.target.files)==null?void 0:I[0];if(!x)return;const R=new FileReader;R.onload=()=>{const _=typeof R.result=="string"?R.result:"",N=_.replace(/^[\s\S]*?```mermaid\n?/,"").replace(/\n?```[\s\S]*$/,"").trim()||_.trim();t(N),C(!1)},R.readAsText(x),d.target.value=""},[t]),Ep=h.useCallback(()=>{const d=e.split(`
`).map(I=>I.trimEnd()),x=[];let R=!1;for(const I of d){const _=I==="";_&&R||(R=_,x.push(I))}t(x.join(`
`).trim())},[e,t]),bp=h.useCallback(()=>$t(d=>Math.min(Xr,d+Ms)),[]),jp=h.useCallback(()=>$t(d=>Math.max(Yr,d-Ms)),[]),Rp=h.useCallback(()=>{Vn(0),Gn(0);const d=$n.current,x=Qn.current;if(d&&x){const R=x.querySelector("svg");if(R){const I=d.getBoundingClientRect(),_=R.getBoundingClientRect(),N=No.current,ue=Math.max(1,_.width/N),xe=I.width*.95/ue;$t(Math.max(Yr,Math.min(Xr,xe)));return}}$t(1)},[]),ni=h.useCallback((d,x)=>{Vn(R=>R+d),Gn(R=>R+x)},[]),Pp=h.useCallback(d=>{var x,R;d.button===0&&((R=(x=d.target)==null?void 0:x.closest)!=null&&R.call(x,"g[data-id]")||(As(!0),Jr.current={x:d.clientX,y:d.clientY}))},[]);h.useEffect(()=>{if(!Bo)return;const d=R=>{const I=R.clientX-Jr.current.x,_=R.clientY-Jr.current.y;Jr.current={x:R.clientX,y:R.clientY},Vn(N=>N+I),Gn(N=>N+_)},x=()=>As(!1);return window.addEventListener("mousemove",d),window.addEventListener("mouseup",x),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",x)}},[Bo]);const Uo=h.useCallback(d=>{d.preventDefault();const x=$n.current,R=-d.deltaY*hp,I=No.current,_=Math.max(Yr,Math.min(Xr,I+R));if(x&&_!==I){const N=x.getBoundingClientRect(),ue=24,xe=d.clientX-N.left-ue,at=d.clientY-N.top-ue,ri=Os.current,Qt=zs.current,Ho=(xe-ri)/I,Vo=(at-Qt)/I;Vn(ri+Ho*(I-_)),Gn(Qt+Vo*(I-_))}$t(_)},[]);h.useEffect(()=>{if(!$)return;const d=$n.current;if(d)return d.addEventListener("wheel",Uo,{passive:!1}),()=>d.removeEventListener("wheel",Uo)},[Uo,$]),h.useEffect(()=>{pt&&Ls({})},[pt]),h.useEffect(()=>{const d=Qn.current;if(!d||!pt)return;const x=d.querySelector("svg");if(!x)return;x.querySelectorAll("g[data-id]").forEach(I=>{const _=I.getAttribute("data-id");if(!_)return;const N=Zr[_];I.style.transform=N?`translate(${N.x}px, ${N.y}px)`:"",I.style.cursor="grab",I.style.transformOrigin="0 0"})},[pt,Zr]),h.useEffect(()=>{const d=Qn.current;if(!d||!pt)return;const x=d.querySelector("svg");if(!x)return;const R=x.querySelectorAll("g[data-id]"),I=[];return R.forEach(_=>{const N=_.getAttribute("data-id");if(!N)return;const ue=xe=>{if(xe.button!==0)return;xe.stopPropagation(),xe.preventDefault(),Ns(N);const at=_s.current[N];Bs.current={x:xe.clientX,y:xe.clientY,offsetX:(at==null?void 0:at.x)??0,offsetY:(at==null?void 0:at.y)??0}};_.addEventListener("mousedown",ue),I.push(()=>_.removeEventListener("mousedown",ue))}),()=>I.forEach(_=>_())},[pt]),h.useEffect(()=>{if(ei===null)return;const d=R=>{const{x:I,y:_,offsetX:N,offsetY:ue}=Bs.current;Ls(xe=>({...xe,[ei]:{x:N+(R.clientX-I),y:ue+(R.clientY-_)}}))},x=()=>Ns(null);return window.addEventListener("mousemove",d),window.addEventListener("mouseup",x),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",x)}},[ei]),h.useEffect(()=>{if(!pt)return;Vn(0),Gn(0);const d=()=>{var Zs;const I=$n.current,_=Qn.current;if(!I||!_)return;const N=_.querySelector("svg");if(!N)return;const ue=I.getBoundingClientRect(),xe=48,at=Math.max(1,ue.width-xe),ri=Math.max(1,ue.height-xe),Qt=(Zs=N.getBBox)==null?void 0:Zs.call(N),Ho=Qt?Math.max(1,Qt.width):N.getBoundingClientRect().width||1,Vo=Qt?Math.max(1,Qt.height):N.getBoundingClientRect().height||1,Ip=at/Ho,Tp=ri/Vo,Op=Math.min(Ip,Tp)*.95,zp=Math.max(Yr,Math.min(Xr,Op));$t(zp)},x=setTimeout(d,0),R=setTimeout(d,150);return()=>{clearTimeout(x),clearTimeout(R)}},[pt]);const Ys=h.useCallback(d=>{const x=I=>{const _=Ao.current;if(!_)return;const N=_.getBoundingClientRect(),ue=d?Math.min(Ni,Math.max(_i,(I.clientY-N.top)/N.height*100)):Math.min(Ni,Math.max(_i,(I.clientX-N.left)/N.width*100));w(ue)},R=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",R),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",x),document.addEventListener("mouseup",R),document.body.style.cursor=d?"row-resize":"col-resize",document.body.style.userSelect="none"},[]),Xs=h.useCallback(()=>{Ys(a)},[a,Ys]),Dp=h.useCallback(d=>{t(d.code),mp(x=>[d.id,...x.filter(R=>R!==d.id)].slice(0,cp)),Ee||ee(!1)},[t,Ee]),Wo=h.useMemo(()=>{const d=q.trim().toLowerCase(),x=P;return Xy.filter(R=>{var N;const I=!x||(x==="Recent"?Et.includes(R.id):Mc(R)===x),_=!d||R.name.toLowerCase().includes(d)||(((N=R.code.split(`
`)[0])==null?void 0:N.trim())??"").toLowerCase().includes(d)||R.id.toLowerCase().includes(d);return I&&_})},[q,P,Et]),Js=h.useMemo(()=>(P?[P]:[...Et.length>0?["Recent"]:[],...zc]).map(x=>({category:x,items:x==="Recent"?Wo.filter(R=>Et.includes(R.id)):Wo.filter(R=>Mc(R)===x)})).filter(x=>x.items.length>0),[Wo,P,Et]),be={minWidth:40,minHeight:40,padding:0,display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:8,background:"transparent",color:"var(--text)",cursor:"pointer",transition:"background 0.15s"},qn={position:"fixed",...a?{left:0,right:0,top:0,bottom:0,width:"100%",maxWidth:"100%"}:{left:56,top:or,bottom:0,width:z||Ze||Do?320:Ie?300:320},zIndex:50,background:"var(--surface)",borderLeft:a?"none":"1px solid var(--border)",boxShadow:a?"0 0 24px rgba(0,0,0,0.4)":"4px 0 24px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden"};return l.jsxs(l.Fragment,{children:[fe&&pn.createPortal(l.jsx("div",{role:"status","aria-live":"polite",style:{position:"fixed",bottom:24,right:24,zIndex:300,padding:"10px 16px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.3)",fontSize:12,color:"var(--text)"},children:fe}),document.body),s&&pn.createPortal(l.jsx("div",{ref:zo,role:"dialog","aria-modal":"true","aria-labelledby":"reset-confirm-title",style:{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.5)",padding:24},onClick:()=>u(!1),children:l.jsxs("div",{style:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",padding:20,maxWidth:360,width:"100%"},onClick:d=>d.stopPropagation(),children:[l.jsx("h2",{id:"reset-confirm-title",style:{margin:"0 0 10px",fontSize:14,fontWeight:600,color:"var(--text)"},children:"Clear editor?"}),l.jsx("p",{style:{margin:"0 0 20px",fontSize:12,color:"var(--muted)",lineHeight:1.5},children:"This will clear the editor and diagram. This cannot be undone."}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[l.jsx("button",{type:"button",onClick:()=>u(!1),style:{padding:"8px 14px",fontSize:12,border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer"},children:"Cancel"}),l.jsx("button",{type:"button",onClick:v,style:{padding:"8px 14px",fontSize:12,border:"none",borderRadius:6,background:"var(--accent)",color:"#fff",cursor:"pointer"},children:"Clear"})]})]})}),document.body),a&&pn.createPortal(l.jsx("div",{style:{position:"fixed",bottom:"max(12px, env(safe-area-inset-bottom, 0px))",left:"50%",transform:"translateX(-50%)",zIndex:45,display:"flex",alignItems:"center",gap:6,padding:"8px 10px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:28,boxShadow:"0 4px 20px rgba(0,0,0,0.35)"},children:U?l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>{M(!1),L(!0),ee(!1),ze(!1),he(!1),K(!1)},title:"About","aria-label":"About",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"transparent",color:"var(--text)",cursor:"pointer"},children:l.jsx(bl,{size:22})}),l.jsx("button",{type:"button",onClick:()=>{M(!1),ee(!0),L(!1),ze(!1),he(!1),K(!1)},title:"Examples","aria-label":"Examples",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"transparent",color:"var(--text)",cursor:"pointer"},children:l.jsx(Sl,{size:22})}),l.jsx("button",{type:"button",onClick:()=>{M(!1),ze(!0),L(!1),ee(!1),he(!1),K(!1)},title:"Saved & history","aria-label":"Saved and history",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"transparent",color:"var(--text)",cursor:"pointer"},children:l.jsx(Ci,{size:22})}),l.jsx("button",{type:"button",onClick:()=>{M(!1),he(!0),L(!1),ee(!1),ze(!1),K(!1)},title:"Syntax","aria-label":"Syntax",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"transparent",color:"var(--text)",cursor:"pointer"},children:l.jsx(El,{size:22})}),l.jsx("button",{type:"button",onClick:()=>{M(!1),K(!0),L(!1),ee(!1),ze(!1),he(!1)},title:"How to use","aria-label":"How to use",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"transparent",color:"var(--text)",cursor:"pointer"},children:l.jsx(kl,{size:22})}),l.jsx("span",{style:{width:1,height:24,background:"var(--border)",margin:"0 2px"},"aria-hidden":"true"}),l.jsx("button",{type:"button",onClick:()=>M(!1),title:"Collapse","aria-label":"Collapse bar",style:{display:"flex",alignItems:"center",justifyContent:"center",width:44,height:44,padding:0,border:"none",borderRadius:"50%",background:"var(--bg)",color:"var(--muted)",cursor:"pointer"},children:l.jsx(wl,{size:20})})]}):l.jsx("button",{type:"button",onClick:()=>M(!0),title:"Panels","aria-label":"Open panels",style:{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,padding:0,border:"none",borderRadius:8,background:"transparent",color:"var(--muted)",cursor:"pointer"},children:l.jsx(Ly,{size:20})})}),document.body),l.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minHeight:0,height:"100vh"},children:[l.jsx("div",{style:{flexShrink:0,height:a?"calc(env(safe-area-inset-top, 0px) + "+or+"px)":or},"aria-hidden":"true"}),l.jsxs("div",{ref:Ao,className:`split-pane ${a?"split-pane-mobile":""}`,style:{flex:1,minHeight:0,width:"100%",position:"relative",zIndex:0,isolation:"isolate",display:"flex",...a?{flexDirection:"column"}:{}},children:[l.jsxs("div",{className:"pane pane-left",style:{display:"flex",flexDirection:"row",overflow:"hidden",position:"relative",zIndex:0,borderRight:a?"none":"1px solid var(--border)",borderBottom:a&&!W?"1px solid var(--border)":"none",...W?a?{flex:"0 0 auto",width:"100%",height:0,minHeight:0}:{flex:"0 0 auto",width:56,minWidth:56,maxWidth:56,minHeight:0}:a?{flex:"0 0 auto",width:"100%",height:`${g}%`,minHeight:80,maxHeight:"85%"}:{flex:"0 0 auto",width:`${g}%`,minWidth:120,maxWidth:"85%",minHeight:0}},children:[!a&&l.jsxs("div",{className:"frame-toolbar",style:{width:56,flexShrink:0,borderRight:"1px solid var(--border)",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0",gap:2},children:[l.jsx("button",{type:"button",style:be,onClick:()=>{ee(!1),K(!1),he(!1),ze(!1),L(d=>!d)},title:"About","aria-label":"About",children:l.jsx(bl,{size:20})}),l.jsx("button",{type:"button",style:be,onClick:()=>{L(!1),K(!1),he(!1),ze(!1),ee(d=>!d)},title:"Examples","aria-label":"Examples",children:l.jsx(Sl,{size:20})}),l.jsx("button",{type:"button",style:be,onClick:()=>{L(!1),ee(!1),K(!1),he(!1),ze(d=>!d)},title:"Saved & history","aria-label":"Saved and history",children:l.jsx(Ci,{size:20})}),l.jsx("span",{style:{width:"100%",height:1,background:"var(--border)",margin:"4px 8px 0",flexShrink:0},"aria-hidden":"true"}),l.jsx("button",{type:"button",style:be,onClick:()=>{L(!1),ee(!1),ze(!1),K(!1),he(d=>!d)},title:"Syntax cheat sheet","aria-label":"Syntax",children:l.jsx(El,{size:20})}),l.jsx("button",{type:"button",style:be,onClick:()=>{L(!1),ee(!1),he(!1),ze(!1),K(d=>!d)},title:"How to use","aria-label":"How to use",children:l.jsx(kl,{size:20})})]}),!W&&l.jsxs("div",{className:"editor-column",style:{flex:1,minWidth:0,minHeight:0,display:"flex",flexDirection:"column",background:"var(--surface)",position:"relative",zIndex:0,overflow:"hidden"},children:[l.jsxs("div",{style:{flexShrink:0,padding:"2px 10px",borderBottom:"1px solid var(--border)",background:"var(--surface)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:11,color:"var(--text)",fontWeight:500},children:"Editor — enter Mermaid code"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"var(--muted)"},children:["Render:",l.jsx("select",{value:Qr,onChange:d=>pp(Number(d.target.value)),style:{padding:"2px 6px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:10,cursor:"pointer"},children:tv.map(d=>l.jsxs("option",{value:d,children:[d,"ms"]},d))})]}),l.jsxs("button",{type:"button",onClick:()=>dp(d=>!d),title:un?"Resume preview":"Pause preview",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:un?"var(--accent)":"var(--bg)",color:un?"#fff":"var(--text)",cursor:"pointer",fontSize:11},children:[un?l.jsx(Ny,{size:12}):l.jsx(_y,{size:12})," ",un?"Resume":"Pause"]}),l.jsxs("button",{type:"button",onClick:wp,title:"Save snapshot to history",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[l.jsx(Ay,{size:12})," Snapshot"]}),l.jsxs("button",{type:"button",onClick:Ep,title:"Format code",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[l.jsx(My,{size:12})," Format"]})]})]}),l.jsx("div",{style:{flex:1,minHeight:0,background:"var(--surface)"},children:l.jsx(Iy,{height:"100%",defaultLanguage:"markdown",language:"markdown",value:e??"",onChange:d=>t(d??""),onMount:d=>{Es.current=d},theme:A?"vs-dark":"vs-light",options:{minimap:{enabled:!0},lineNumbers:"on",wordWrap:"on",padding:{top:8},fontSize:13,fontFamily:"var(--font-mono)",scrollBeyondLastLine:!1,automaticLayout:!0},loading:l.jsx("span",{style:{color:"var(--muted)"},children:"Loading…"})})}),$e&&l.jsxs("div",{style:{flexShrink:0,padding:"8px 10px",borderTop:"1px solid var(--border)",background:"rgba(239,68,68,0.1)",fontSize:11,color:"var(--error)",display:"flex",alignItems:"flex-start",gap:8,cursor:"pointer"},role:"alert",onClick:vp,title:"Jump to line in editor",children:[l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",maxHeight:80,overflow:"auto",flex:1},children:$e}),l.jsxs("button",{type:"button",onClick:d=>{d.stopPropagation(),yp()},title:"Copy error",style:{flexShrink:0,padding:"4px 8px",border:"1px solid var(--error)",borderRadius:4,background:"transparent",color:"var(--error)",cursor:"pointer",fontSize:10},children:[l.jsx(rr,{size:12})," Copy"]})]})]})]}),!W&&l.jsx("div",{role:"button",tabIndex:0,className:`resize-handle ${a?"resize-handle-mobile":""}`,style:a?{width:"100%",height:10,minHeight:10,cursor:"row-resize",touchAction:"none"}:void 0,onMouseDown:Xs,onTouchStart:d=>{if(!a||!d.touches.length)return;d.preventDefault();const x=I=>{const _=Ao.current;if(!_||!I.touches.length)return;const N=_.getBoundingClientRect(),ue=I.touches[0].clientY-N.top,xe=Math.min(Ni,Math.max(_i,ue/N.height*100));w(xe)},R=()=>{document.removeEventListener("touchmove",x,{capture:!0}),document.removeEventListener("touchend",R)};document.addEventListener("touchmove",x,{passive:!1,capture:!0}),document.addEventListener("touchend",R)},onKeyDown:d=>d.key==="Enter"&&Xs(),"aria-label":"Resize panels"}),l.jsxs("div",{className:"pane pane-right",style:{flex:"1 1 0",minWidth:a?0:200,minHeight:a?200:0,display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative",overflow:"hidden",zIndex:10},children:[l.jsxs("div",{className:"diagram-content",style:{flex:1,minHeight:0,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--surface)",position:"relative"},children:[$&&l.jsxs("div",{className:`toolbar diagram-toolbar ${a?"diagram-toolbar-mobile":""}`,style:{position:"absolute",bottom:12,left:12,zIndex:20,padding:"8px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.15)",...a?{paddingBottom:"max(8px, env(safe-area-inset-bottom, 0px))"}:{}},children:[l.jsx("div",{ref:Rs,style:{display:"flex"},children:l.jsx("button",{type:"button",style:{...be,minHeight:36,minWidth:36},onClick:()=>j(d=>!d),title:"Diagram colors","aria-label":"Diagram colors",children:l.jsx(Rc,{size:18})})}),l.jsx("button",{type:"button",onClick:()=>fp(d=>!d),title:Gr?"Hide grid":"Show grid",style:{...be,minHeight:36,minWidth:36,background:Gr?"var(--accent)":void 0,color:Gr?"#fff":void 0},"aria-label":"Toggle grid",children:l.jsx(kc,{size:18})}),l.jsx("button",{type:"button",onClick:Rp,title:"Fit to view","aria-label":"Fit",style:{...be,minHeight:36,minWidth:36},children:l.jsx(xc,{size:18})}),l.jsx("button",{type:"button",onClick:()=>$t(1),title:"100%",style:{...be,minHeight:28,minWidth:36,fontSize:10},children:"100%"}),l.jsx("button",{type:"button",onClick:bp,title:"Zoom in","aria-label":"Zoom in",style:{...be,minHeight:36,minWidth:36},children:l.jsx(Pc,{size:18})}),l.jsxs("span",{style:{minWidth:36,textAlign:"center",fontSize:10,color:"var(--muted)"},title:"Zoom",children:[Math.round(qr*100),"%"]}),l.jsx("button",{type:"button",onClick:jp,title:"Zoom out","aria-label":"Zoom out",style:{...be,minHeight:36,minWidth:36},children:l.jsx(bc,{size:18})}),l.jsx("span",{style:{width:20,height:1,background:"var(--border)"}}),l.jsx("button",{type:"button",onClick:()=>ni(0,-Kr),title:"Pan up","aria-label":"Pan up",style:{...be,minHeight:36,minWidth:36},children:l.jsx(vc,{size:18})}),l.jsx("button",{type:"button",onClick:()=>ni(Kr,0),title:"Pan right","aria-label":"Pan right",style:{...be,minHeight:36,minWidth:36},children:l.jsx(yc,{size:18})}),l.jsx("button",{type:"button",onClick:()=>ni(-Kr,0),title:"Pan left","aria-label":"Pan left",style:{...be,minHeight:36,minWidth:36},children:l.jsx(gc,{size:18})}),l.jsx("button",{type:"button",onClick:()=>ni(0,Kr),title:"Pan down","aria-label":"Pan down",style:{...be,minHeight:36,minWidth:36},children:l.jsx(wl,{size:18})})]}),Is&&l.jsx("span",{style:{position:"absolute",top:8,right:8,fontSize:11,color:"var(--muted)",zIndex:5},children:"Updating…"}),Ts&&$&&l.jsx("button",{type:"button",onClick:()=>he(!0),title:"Open syntax",style:{position:"absolute",top:8,left:12,zIndex:5,fontSize:10,fontWeight:600,color:"var(--muted)",background:"var(--surface)",padding:"4px 8px",borderRadius:4,border:"1px solid var(--border)",cursor:"pointer"},children:Ts}),$e&&!Ds&&l.jsx("pre",{className:"preview-error",style:{margin:16},children:$e}),!$&&l.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--muted)"},children:Is?"Loading…":"Diagram"}),$&&l.jsxs(l.Fragment,{children:[$e&&l.jsx("div",{style:{position:"absolute",top:8,right:8,left:12,zIndex:15,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:l.jsx("span",{style:{fontSize:11,color:"var(--error)",background:"rgba(239,68,68,0.15)",padding:"6px 12px",borderRadius:6,border:"1px solid var(--error)"},children:"Diagram has errors — see editor"})}),l.jsx("div",{ref:$n,onMouseDown:Pp,style:{flex:1,minHeight:0,minWidth:0,overflow:"auto",padding:24,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:Bo||ei?"grabbing":"grab",...Gr&&{backgroundImage:"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",backgroundSize:"16px 16px"}},children:l.jsx("div",{ref:Qn,style:{transform:`translate(${Lo}px, ${_o}px) scale(${qr})`,transformOrigin:"0 0",display:"inline-block",padding:12,background:c.backgroundColor,border:c.borderEnabled?`${c.borderWidth}px solid ${c.borderColor}`:"none",borderRadius:4},dangerouslySetInnerHTML:{__html:$}})})]})]}),D&&l.jsxs("div",{ref:Ps,role:"dialog","aria-label":"Diagram colors",style:{width:280,flexShrink:0,borderLeft:"1px solid var(--border)",background:"var(--surface)",display:"flex",flexDirection:"column",minHeight:0,overflow:"hidden"},children:[l.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Diagram colors"}),l.jsx("button",{type:"button",onClick:()=>j(!1),title:"Close",style:{padding:4,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:16},"aria-label":"Close",children:"×"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:10,display:"flex",flexDirection:"column",gap:10},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Panel background"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:zl.map(d=>l.jsx("button",{type:"button",onClick:()=>cn("panelBg",d),style:{width:22,height:22,padding:0,border:Fo("panelBg").toLowerCase()===d?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:d,boxSizing:"border-box"},title:d},d))}),l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:"text",value:Fo("panelBg"),onChange:d=>{const x=d.target.value;(x===""||/^#[0-9A-Fa-f]{0,6}$/.test(x)||/^[0-9A-Fa-f]{0,6}$/.test(x))&&cn("panelBg",x.startsWith("#")?x:x?"#"+x:"#141414")},style:{flex:1,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"}),l.jsx("button",{type:"button",onClick:()=>m(d=>({...d,backgroundColor:"transparent"})),style:{fontSize:11,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"None"})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Border"}),l.jsx("input",{type:"checkbox",checked:c.borderEnabled,onChange:d=>m(x=>({...x,borderEnabled:d.target.checked})),style:{width:16,height:16,cursor:"pointer"}})]}),c.borderEnabled&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Border color"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:zl.map(d=>l.jsx("button",{type:"button",onClick:()=>cn("borderColor",d),style:{width:22,height:22,padding:0,border:c.borderColor.toLowerCase()===d?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:d,boxSizing:"border-box"},title:d},d))}),l.jsx("input",{type:"text",value:c.borderColor,onChange:d=>{const x=d.target.value;(x===""||/^#[0-9A-Fa-f]{0,6}$/.test(x)||/^[0-9A-Fa-f]{0,6}$/.test(x))&&cn("borderColor",x.startsWith("#")?x:x?"#"+x:"#141414")},style:{padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{style:{fontSize:11,color:"var(--muted)"},children:"Border width"}),l.jsx("input",{type:"number",min:1,max:8,value:c.borderWidth,onChange:d=>m(x=>({...x,borderWidth:Math.max(1,Math.min(8,parseInt(d.target.value,10)||1))})),style:{width:48,padding:"4px 6px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12}})]})]}),l.jsx("div",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Diagram colors"}),["svgBg","nodeFill","nodeText","lineColor"].map(d=>{const x={svgBg:"SVG background",nodeFill:"Node fill",nodeText:"Node text",lineColor:"Lines / arrows"}[d],R=Fo(d);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[l.jsx("label",{style:{fontSize:11,color:"var(--muted)"},children:x}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:zl.map(I=>l.jsx("button",{type:"button",onClick:()=>cn(d,I),style:{width:22,height:22,padding:0,border:R.toLowerCase()===I?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:I,boxSizing:"border-box"},title:I},I))}),l.jsx("input",{type:"text",value:R,onChange:I=>{const _=I.target.value;(_===""||/^#[0-9A-Fa-f]{0,6}$/.test(_)||/^[0-9A-Fa-f]{0,6}$/.test(_))&&cn(d,_.startsWith("#")?_:_?"#"+_:"#141414")},style:{padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"})]},d)}),l.jsx("button",{type:"button",onClick:()=>E({...fn}),style:{fontSize:11,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--muted)",cursor:"pointer",alignSelf:"flex-start"},children:"Reset diagram colors"})]})]})]})]}),l.jsx("footer",{style:{flexShrink:0,padding:"4px 12px",borderTop:"1px solid var(--border)",background:"var(--surface)",fontSize:10,color:"var(--muted)",textAlign:"center"},children:"@diagramium · by montesito · Ctrl+Z undo · Ctrl+Y redo · Esc close panels"})]}),(z||Ie||T||Ze||Do)&&pn.createPortal(Do&&l.jsxs("div",{style:qn,children:[l.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Saved & history"}),l.jsx("button",{type:"button",onClick:()=>ze(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:12,color:"var(--text)",display:"flex",flexDirection:"column",gap:16},children:[l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Saved diagrams"}),l.jsxs("button",{type:"button",onClick:Hs,style:{marginBottom:8,padding:"6px 12px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[l.jsx(Ci,{size:14,style:{verticalAlign:"middle",marginRight:4}})," Save current"]}),$r.length===0?l.jsx("p",{style:{margin:0,fontSize:11,color:"var(--muted)"},children:"No saved diagrams."}):l.jsx("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",display:"flex",flexDirection:"column",gap:4},children:$r.map(d=>l.jsxs("li",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)"},children:[l.jsx("span",{style:{flex:1,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.name}),l.jsx("button",{type:"button",onClick:()=>xp(d),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"Open"}),l.jsx("button",{type:"button",onClick:()=>Sp(d.id),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--error)",cursor:"pointer"},children:"Remove"})]},d.id))})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Version history"}),l.jsxs("p",{style:{margin:"0 0 8px",fontSize:11,color:"var(--muted)"},children:["Use ",l.jsx("strong",{children:"Snapshot"})," in the editor toolbar to save a version. Restore from the list below."]}),To.length===0?l.jsx("p",{style:{margin:0,fontSize:11,color:"var(--muted)"},children:"No snapshots yet."}):l.jsx("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",display:"flex",flexDirection:"column",gap:4},children:To.map((d,x)=>l.jsxs("li",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)"},children:[l.jsxs("span",{style:{flex:1,fontSize:10,color:"var(--muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Snapshot ",To.length-x]}),l.jsx("button",{type:"button",onClick:()=>kp(d),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"Restore"})]},x))})]})]})]})||Ze&&l.jsxs("div",{style:qn,children:[l.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Syntax"}),l.jsx("button",{type:"button",onClick:()=>he(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:11,color:"var(--text)",display:"flex",flexDirection:"column",gap:12},children:[l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Flowchart"}),l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`flowchart LR
  A --> B --> C
  B --> D`})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Sequence"}),l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`sequenceDiagram
  A->>B: message
  B-->>A: reply`})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Class"}),l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`classDiagram
  class Animal {
    +name
    +move()
  }`})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Links & directions"}),l.jsxs("p",{style:{margin:0,lineHeight:1.5,color:"var(--muted)"},children:[l.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"-->"})," arrow · ",l.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"---"})," line · ",l.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"LR"})," / ",l.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"TB"})," direction"]})]}),l.jsx("p",{style:{margin:0,fontSize:10,color:"var(--muted)"},children:l.jsx("a",{href:"https://mermaid.js.org/intro/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"Full docs → mermaid.js.org"})})]})]})||z&&l.jsxs("div",{style:qn,children:[l.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"About"}),l.jsx("button",{type:"button",onClick:()=>L(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:14,fontSize:12,color:"var(--text)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),l.jsx("p",{style:{margin:0,lineHeight:1.5},children:"Diagramium is a browser-based Mermaid diagram editor. Edit Mermaid code in the left panel and see the diagram update live on the right. All data stays in your browser; no backend required."}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Motivation"}),l.jsxs("p",{style:{margin:0,lineHeight:1.5,color:"var(--muted)"},children:["Built for quick diagrams and learning Mermaid. Ready to integrate AI: use ",l.jsx("code",{style:{fontSize:10,background:"var(--bg)",padding:"1px 4px",borderRadius:4},children:"useSetDiagramFromAI()"})," to inject generated Mermaid code. Thanks to ",l.jsx("a",{href:"https://mermaid.js.org",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"Mermaid"}),"."]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Data"}),l.jsx("p",{style:{margin:"0 0 8px",fontSize:11,color:"var(--muted)",lineHeight:1.5},children:"All data is stored locally: current diagram, saved diagrams (up to 10), snapshots, and UI preferences. Clear everything below."}),l.jsx("button",{type:"button",onClick:gp,style:{padding:"6px 12px",fontSize:11,border:"1px solid var(--error)",borderRadius:6,background:"transparent",color:"var(--error)",cursor:"pointer"},children:"Clear all data"})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Left strip"}),l.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(bl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"About"})," — This panel"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Sl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Examples"})," — Insert templates (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others)"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Ci,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Saved & history"})," — Saved diagrams and snapshot history (restore previous versions)"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(El,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Syntax"})," — Mermaid cheat sheet"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(kl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"How to use"})," — Usage steps and keyboard shortcuts"]})]})]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Top bar"}),l.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(jl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Fullscreen"})," — Diagram-only view"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Dl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Undo"})," / ",l.jsx("strong",{children:"Redo"})]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Pl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Reset"})," — Clear editor and diagram"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Cl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Export"})," — SVG, PNG (1x/2x), .md, .mmd, Print/PDF, copy code, copy PNG, copy shareable link, import from file"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Rl,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Theme"})," — Dark / light"]})]})]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Diagram toolbox"}),l.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(Rc,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Palette"})," — Diagram background, border, and Mermaid theme (node fill, line color)"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(xc,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Center"})," — Fit diagram in view"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsxs("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:1,background:"var(--bg)",borderRadius:4},children:[l.jsx(Pc,{size:12,color:"var(--muted)"}),l.jsx(bc,{size:12,color:"var(--muted)"})]}),l.jsxs("span",{children:[l.jsx("strong",{children:"Zoom"})," — Buttons or scroll wheel"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsxs("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:[l.jsx(vc,{size:10,color:"var(--muted)"}),l.jsx(yc,{size:10,color:"var(--muted)"}),l.jsx(gc,{size:10,color:"var(--muted)"}),l.jsx(wl,{size:10,color:"var(--muted)"})]}),l.jsxs("span",{children:[l.jsx("strong",{children:"Pan"})," — Buttons or drag on diagram"]})]}),l.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[l.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:l.jsx(kc,{size:14,color:"var(--muted)"})}),l.jsxs("span",{children:[l.jsx("strong",{children:"Grid"})," — Toggle background grid; optional node dragging"]})]})]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Glossary"}),l.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.6},children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Editor"})," — Left panel (Monaco) for Mermaid code; supports Format, snapshots, and error strip with jump-to-line."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Diagram pane"})," — Right area: live diagram plus toolbox (palette, center, zoom, pan, grid)."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Mermaid"})," — Text-based diagram library; see ",l.jsx("a",{href:"https://mermaid.js.org/intro/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"mermaid.js.org"}),"."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Render debounce"})," — Delay (200 / 500 / 1000 ms) after typing before the diagram updates; optional Pause to freeze updates."]})]})]})]})]})||Ie&&l.jsxs("div",{style:qn,children:[l.jsxs("div",{style:{flexShrink:0,padding:8,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Examples"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx("button",{type:"button",onClick:()=>F(d=>!d),title:Ee?"Unpin":"Pin",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:Ee?"var(--accent)":"transparent",color:Ee?"#fff":"var(--text)",cursor:"pointer",fontSize:10},children:Ee?"Pinned":"Pin"}),l.jsx("button",{type:"button",onClick:()=>ee(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]})]}),l.jsxs("div",{style:{flexShrink:0,padding:12,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10},children:[l.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),l.jsxs("div",{style:{flexShrink:0,padding:8,display:"flex",flexDirection:"column",gap:8,borderBottom:"1px solid var(--border)"},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsx(By,{size:14,style:{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",color:"var(--muted)",pointerEvents:"none"}}),l.jsx("input",{type:"text",placeholder:"Search examples...",value:q,onChange:d=>Te(d.target.value),style:{width:"100%",padding:"6px 8px 6px 28px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",fontSize:12},"aria-label":"Search examples"})]}),l.jsxs("select",{value:P,onChange:d=>B(d.target.value),style:{width:"100%",padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",fontSize:12,cursor:"pointer"},"aria-label":"Filter by category",children:[l.jsx("option",{value:"",children:"All categories"}),Et.length>0&&l.jsx("option",{value:"Recent",children:"Recent"}),zc.map(d=>l.jsx("option",{value:d,children:d},d))]})]}),l.jsx("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:8,display:"flex",flexDirection:"column",gap:8},children:Js.length===0?l.jsx("p",{style:{fontSize:12,color:"var(--muted)"},children:"No examples match."}):Js.map(({category:d,items:x})=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[l.jsx("div",{style:{fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em",paddingBottom:2,borderBottom:"1px solid var(--border)"},children:d}),x.map(R=>{var I;return l.jsxs("button",{type:"button",onClick:()=>Dp(R),style:{display:"block",width:"100%",padding:"8px 10px",textAlign:"left",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:12,fontWeight:500},children:[l.jsx("div",{children:R.name}),l.jsx("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((I=R.code.split(`
`)[0])==null?void 0:I.trim())??""})]},R.id)})]},d))})]})||T&&l.jsxs("div",{style:qn,children:[l.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[l.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"How to use"}),l.jsx("button",{type:"button",onClick:()=>K(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:12,color:"var(--text)",display:"flex",flexDirection:"column",gap:14},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),l.jsxs("div",{children:[l.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Quick start"}),l.jsxs("ol",{style:{margin:0,paddingLeft:18,lineHeight:1.7},children:[l.jsx("li",{style:{marginBottom:8},children:"Type or paste Mermaid code in the left editor; the diagram updates live on the right (debounce and Pause in the editor toolbar)."}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Examples"})," (book icon) — Search and filter by category (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others); click a template to insert. Recent used appear under Recent."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Saved & history"})," — Save current diagram (up to 10), open a saved one, or restore from snapshot history."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Syntax"})," — Mermaid cheat sheet; the diagram-type badge next to the editor also opens it."]})]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Top bar"}),l.jsxs("p",{style:{margin:0,marginBottom:6,lineHeight:1.5},children:[l.jsx("strong",{children:"Fullscreen"})," — Diagram-only view. ",l.jsx("strong",{children:"Undo"})," / ",l.jsx("strong",{children:"Redo"}),". ",l.jsx("strong",{children:"Reset"})," (bin) — clear editor and diagram. ",l.jsx("strong",{children:"Export"})," — download SVG, PNG (1x/2x), .md, .mmd; copy code, copy PNG, copy as Markdown block; copy shareable link; Print/PDF; import from file. ",l.jsx("strong",{children:"Theme"})," — dark / light."]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Diagram area"}),l.jsxs("p",{style:{margin:0,marginBottom:6,lineHeight:1.5},children:[l.jsx("strong",{children:"Palette"})," — Set diagram background, border, and Mermaid theme (node fill, text, line). ",l.jsx("strong",{children:"Center"})," — fit diagram in view. ",l.jsx("strong",{children:"Zoom"})," — buttons or scroll wheel. ",l.jsx("strong",{children:"Pan"})," — buttons or drag on the diagram. ",l.jsx("strong",{children:"Grid"})," — toggle background grid; enable node dragging for movable nodes (when supported)."]})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Editor"}),l.jsx("p",{style:{margin:0,lineHeight:1.5},children:"Format, Reset, snapshots (save/restore versions). Error strip shows parse/render errors with jump-to-line and copy. Split size and debounce are stored in preferences."})]}),l.jsxs("section",{children:[l.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Keyboard shortcuts"}),l.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.6},children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Ctrl+Z"})," — Undo"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Ctrl+Y"})," / ",l.jsx("strong",{children:"Ctrl+Shift+Z"})," — Redo"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Ctrl+S"})," — Save current diagram to Saved list"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Esc"})," — Close panels / modals"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Ctrl+F"})," — Find in editor (Monaco)"]})]})]})]})]}),document.body),pn.createPortal(l.jsxs("div",{className:"diagramium-top-bar",style:{position:"fixed",top:0,left:0,right:0,height:a?"calc(env(safe-area-inset-top, 0px) + "+or+"px)":or,zIndex:2147483647,isolation:"isolate",transform:"translateZ(0)",background:"var(--surface)",borderBottom:"1px solid var(--border)",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:a?"env(safe-area-inset-top, 0px)":0,paddingLeft:16,paddingRight:16,pointerEvents:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[l.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:32,height:32,style:{display:"block",flexShrink:0},"aria-hidden":"true"}),l.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--text)"},children:Ei})]}),a?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"diagramium-top-bar-icons",style:{flex:1,minWidth:0,overflowX:"auto",overflowY:"hidden",marginLeft:8},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"nowrap",width:"max-content"},children:[W?l.jsx("button",{type:"button",onClick:()=>p(!1),title:"Exit fullscreen preview","aria-label":"Exit fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(Ec,{size:14})}):l.jsx("button",{type:"button",onClick:()=>p(!0),title:"Fullscreen preview","aria-label":"Fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(jl,{size:14})}),l.jsx("button",{type:"button",onClick:n,disabled:!i,title:"Undo (Ctrl+Z)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:i?"pointer":"default",borderRadius:4,opacity:i?1:.5},"aria-label":"Undo",children:l.jsx(Dl,{size:14})}),l.jsx("button",{type:"button",onClick:r,disabled:!o,title:"Redo (Ctrl+Y)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:o?"pointer":"default",borderRadius:4,opacity:o?1:.5},"aria-label":"Redo",children:l.jsx(Ic,{size:14})}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("button",{ref:Oo,type:"button",onClick:f,title:"Reset editor and diagram","aria-label":"Reset editor and diagram",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(Pl,{size:14})}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsxs("div",{ref:Mo,style:{position:"relative"},children:[l.jsx("button",{type:"button",onClick:()=>C(d=>!d),disabled:!$,title:"Export","aria-label":"Export",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:$?"pointer":"not-allowed",borderRadius:4,opacity:$?1:.5},children:l.jsx(Cl,{size:14})}),b&&l.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:100,padding:4,display:"flex",flexDirection:"column",gap:2,minWidth:180},children:[l.jsxs("button",{type:"button",onClick:Fs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download SVG",children:[l.jsx(Sc,{size:16})," SVG"]}),l.jsxs("button",{type:"button",onClick:()=>ti(2),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (2x)",children:[l.jsx(wc,{size:16})," PNG (2x)"]}),l.jsx("button",{type:"button",onClick:()=>ti(1),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (1x)",children:"PNG (1x)"}),l.jsx("button",{type:"button",onClick:Us,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Markdown file",children:"Save as .md"}),l.jsx("button",{type:"button",onClick:Ws,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Mermaid file",children:"Save as .mmd"}),l.jsxs("button",{type:"button",onClick:qs,disabled:!$,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:$?"pointer":"not-allowed",fontSize:12,opacity:$?1:.6},title:"Print or Save as PDF",children:[l.jsx(Dc,{size:16})," Print / PDF"]}),l.jsxs("button",{type:"button",onClick:Vs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as image",children:[l.jsx(rr,{size:16})," Copy image"]}),l.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),l.jsxs("button",{type:"button",onClick:$s,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy Mermaid code",children:[l.jsx(rr,{size:16})," Copy code"]}),l.jsx("button",{type:"button",onClick:Gs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as Markdown block",children:"Copy as Markdown"}),l.jsxs("button",{type:"button",onClick:Qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy shareable link",children:[l.jsx(Cc,{size:16})," Copy link"]}),l.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),l.jsxs("button",{type:"button",onClick:Ks,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Import from file",children:[l.jsx(Tc,{size:16})," Import file"]})]})]}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("button",{type:"button",onClick:()=>le(d=>!d),title:A?"Light mode":"Dark mode",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},"aria-label":A?"Light mode":"Dark mode",children:A?l.jsx(Rl,{size:14}):l.jsx(jc,{size:14})})]})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0,marginLeft:8},children:[l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("span",{style:{fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"}),l.jsxs("span",{style:{fontSize:12,color:"var(--muted)"},children:["v",Ac]})]})]}):l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[W?l.jsx("button",{type:"button",onClick:()=>p(!1),title:"Exit fullscreen preview","aria-label":"Exit fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(Ec,{size:14})}):l.jsx("button",{type:"button",onClick:()=>p(!0),title:"Fullscreen preview","aria-label":"Fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(jl,{size:14})}),l.jsx("button",{type:"button",onClick:n,disabled:!i,title:"Undo (Ctrl+Z)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:i?"pointer":"default",borderRadius:4,opacity:i?1:.5},"aria-label":"Undo",children:l.jsx(Dl,{size:14})}),l.jsx("button",{type:"button",onClick:r,disabled:!o,title:"Redo (Ctrl+Y)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:o?"pointer":"default",borderRadius:4,opacity:o?1:.5},"aria-label":"Redo",children:l.jsx(Ic,{size:14})}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("button",{ref:Oo,type:"button",onClick:f,title:"Reset editor and diagram","aria-label":"Reset editor and diagram",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:l.jsx(Pl,{size:14})}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsxs("div",{ref:Mo,style:{position:"relative"},children:[l.jsx("button",{type:"button",onClick:()=>C(d=>!d),disabled:!$,title:"Export","aria-label":"Export",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:$?"pointer":"not-allowed",borderRadius:4,opacity:$?1:.5},children:l.jsx(Cl,{size:14})}),b&&l.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:100,padding:4,display:"flex",flexDirection:"column",gap:2,minWidth:180},children:[l.jsxs("button",{type:"button",onClick:Fs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download SVG",children:[l.jsx(Sc,{size:16})," SVG"]}),l.jsxs("button",{type:"button",onClick:()=>ti(2),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (2x)",children:[l.jsx(wc,{size:16})," PNG (2x)"]}),l.jsx("button",{type:"button",onClick:()=>ti(1),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (1x)",children:"PNG (1x)"}),l.jsx("button",{type:"button",onClick:Us,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Markdown file",children:"Save as .md"}),l.jsx("button",{type:"button",onClick:Ws,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Mermaid file",children:"Save as .mmd"}),l.jsxs("button",{type:"button",onClick:qs,disabled:!$,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:$?"pointer":"not-allowed",fontSize:12,opacity:$?1:.6},title:"Print or Save as PDF",children:[l.jsx(Dc,{size:16})," Print / PDF"]}),l.jsxs("button",{type:"button",onClick:Vs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as image",children:[l.jsx(rr,{size:16})," Copy image"]}),l.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),l.jsxs("button",{type:"button",onClick:$s,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy Mermaid code",children:[l.jsx(rr,{size:16})," Copy code"]}),l.jsx("button",{type:"button",onClick:Gs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as Markdown block",children:"Copy as Markdown"}),l.jsxs("button",{type:"button",onClick:Qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy shareable link",children:[l.jsx(Cc,{size:16})," Copy link"]}),l.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),l.jsxs("button",{type:"button",onClick:Ks,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Import from file",children:[l.jsx(Tc,{size:16})," Import file"]})]})]}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("button",{type:"button",onClick:()=>le(d=>!d),title:A?"Light mode":"Dark mode",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},"aria-label":A?"Light mode":"Dark mode",children:A?l.jsx(Rl,{size:14}):l.jsx(jc,{size:14})}),l.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),l.jsx("span",{style:{fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"}),l.jsxs("span",{style:{fontSize:12,color:"var(--muted)"},children:["v",Ac]})]})]}),document.body),l.jsx("input",{ref:js,type:"file",accept:".md,.mmd,.txt,text/*",style:{display:"none"},onChange:Cp,"aria-hidden":!0})]})}function sv(){try{const e=window.location.hash.slice(1);if(e.startsWith("d/")){const t=decodeURIComponent(atob(e.slice(2)));if(t)return t}}catch{}try{const e=localStorage.getItem(ap);if(e!=null&&e!=="")return e}catch{}return""}class uv extends h.Component{constructor(){super(...arguments);eu(this,"state",{err:null})}static getDerivedStateFromError(n){return{err:n}}render(){return this.state.err?l.jsxs("div",{style:{padding:24,fontFamily:"monospace",color:"#ef4444",whiteSpace:"pre-wrap"},children:[l.jsx("strong",{children:"Error"}),": ",this.state.err.message,l.jsx("pre",{style:{marginTop:12,fontSize:12},children:this.state.err.stack})]}):this.props.children}}const Ml=document.getElementById("root");if(Ml)try{Xf(Ml).render(l.jsx(h.StrictMode,{children:l.jsx(uv,{children:l.jsx(Vy,{initialCode:sv(),children:l.jsx(av,{})})})}))}catch(e){Ml.innerHTML=`<div style="padding:24px;color:#ef4444;font-family:monospace;white-space:pre-wrap;">Failed to start: ${e instanceof Error?e.message:String(e)}</div>`}const fv=Object.freeze(Object.defineProperty({__proto__:null,InfoModule:Vp,createInfoServices:_p},Symbol.toStringTag,{value:"Module"})),pv=Object.freeze(Object.defineProperty({__proto__:null,PacketModule:Gp,createPacketServices:Np},Symbol.toStringTag,{value:"Module"})),mv=Object.freeze(Object.defineProperty({__proto__:null,PieModule:$p,createPieServices:Bp},Symbol.toStringTag,{value:"Module"})),hv=Object.freeze(Object.defineProperty({__proto__:null,ArchitectureModule:Qp,createArchitectureServices:Fp},Symbol.toStringTag,{value:"Module"})),gv=Object.freeze(Object.defineProperty({__proto__:null,GitGraphModule:qp,createGitGraphServices:Up},Symbol.toStringTag,{value:"Module"})),yv=Object.freeze(Object.defineProperty({__proto__:null,RadarModule:Kp,createRadarServices:Wp},Symbol.toStringTag,{value:"Module"})),vv=Object.freeze(Object.defineProperty({__proto__:null,TreemapModule:Yp,createTreemapServices:Hp},Symbol.toStringTag,{value:"Module"}));export{mv as a,hv as b,gv as g,fv as i,pv as p,yv as r,vv as t};
