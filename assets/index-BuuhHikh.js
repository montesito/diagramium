var Ap=Object.defineProperty;var Lp=(e,t,n)=>t in e?Ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tu=(e,t,n)=>Lp(e,typeof t!="symbol"?t+"":t,n);import{g as _p,m as Nc,c as Np,a as Bp,b as Fp,e as Up,f as Wp,h as Hp,i as Vp,I as Gp,P as $p,d as Qp,A as qp,G as Kp,R as Yp,T as Xp}from"./mermaid-Cc-JB4pp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Bc={exports:{}},co={},Fc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Jp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),om=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),nu=Symbol.iterator;function sm(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wc=Object.assign,Hc={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Uc}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=Wn.prototype;function Ia(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||Uc}var Ta=Ia.prototype=new Vc;Ta.constructor=Ia;Wc(Ta,Wn.prototype);Ta.isPureReactComponent=!0;var ru=Array.isArray,Gc=Object.prototype.hasOwnProperty,Oa={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gc.call(t,r)&&!$c.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Br,type:e,key:o,ref:l,props:i,_owner:Oa.current}}function um(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function za(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function cm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cm(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case Jp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+$o(l,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),bi(i,t,n,"",function(f){return f})):i!=null&&(za(i)&&(i=um(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ru(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+$o(o,s);l+=bi(o,t,n,u,i)}else if(u=sm(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+$o(o,s++),l+=bi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ji={transition:null},fm={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ji,ReactCurrentOwner:Oa};function qc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Wn;V.Fragment=Zp;V.Profiler=tm;V.PureComponent=Ia;V.StrictMode=em;V.Suspense=om;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;V.act=qc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Oa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gc.call(t,u)&&!$c.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Br,type:e.type,key:i,ref:o,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nm,_context:e},e.Consumer=e};V.createElement=Qc;V.createFactory=function(e){var t=Qc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:im,render:e}};V.isValidElement=za;V.lazy=function(e){return{$$typeof:am,_payload:{_status:-1,_result:e},_init:dm}};V.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};V.unstable_act=qc;V.useCallback=function(e,t){return Pe.current.useCallback(e,t)};V.useContext=function(e){return Pe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Pe.current.useEffect(e,t)};V.useId=function(){return Pe.current.useId()};V.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Pe.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};V.useRef=function(e){return Pe.current.useRef(e)};V.useState=function(e){return Pe.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Pe.current.useTransition()};V.version="18.3.1";Fc.exports=V;var h=Fc.exports;const Pn=_p(h);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm=h,mm=Symbol.for("react.element"),hm=Symbol.for("react.fragment"),gm=Object.prototype.hasOwnProperty,ym=pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function Kc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)gm.call(t,r)&&!vm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mm,type:e,key:o,ref:l,props:i,_owner:ym.current}}co.Fragment=hm;co.jsx=Kc;co.jsxs=Kc;Bc.exports=co;var a=Bc.exports,Yc={exports:{}},Ve={},Xc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var U=P.length;P.push(B);e:for(;0<U;){var M=U-1>>>1,A=P[M];if(0<i(A,B))P[M]=B,P[U]=A,U=M;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],U=P.pop();if(U!==B){P[0]=U;e:for(var M=0,A=P.length,le=A>>>1;M<le;){var pe=2*(M+1)-1,Oe=P[pe],Ze=pe+1,ge=P[Ze];if(0>i(Oe,U))Ze<A&&0>i(ge,Oe)?(P[M]=ge,P[Ze]=U,M=Ze):(P[M]=Oe,P[pe]=U,M=pe);else if(Ze<A&&0>i(ge,U))P[M]=ge,P[Ze]=U,M=Ze;else break e}}return B}function i(P,B){var U=P.sortIndex-B.sortIndex;return U!==0?U:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],f=[],v=1,y=null,g=3,w=!1,b=!1,k=!1,W=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(f);B!==null;){if(B.callback===null)r(f);else if(B.startTime<=P)r(f),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(f)}}function S(P){if(k=!1,m(P),!b)if(n(u)!==null)b=!0,q(E);else{var B=n(f);B!==null&&Te(S,B.startTime-P)}}function E(P,B){b=!1,k&&(k=!1,p(z),z=-1),w=!0;var U=g;try{for(m(B),y=n(u);y!==null&&(!(y.expirationTime>B)||P&&!K());){var M=y.callback;if(typeof M=="function"){y.callback=null,g=y.priorityLevel;var A=M(y.expirationTime<=B);B=e.unstable_now(),typeof A=="function"?y.callback=A:y===n(u)&&r(u),m(B)}else r(u);y=n(u)}if(y!==null)var le=!0;else{var pe=n(f);pe!==null&&Te(S,pe.startTime-B),le=!1}return le}finally{y=null,g=U,w=!1}}var D=!1,j=null,z=-1,N=5,T=-1;function K(){return!(e.unstable_now()-T<N)}function Ie(){if(j!==null){var P=e.unstable_now();T=P;var B=!0;try{B=j(!0,P)}finally{B?ee():(D=!1,j=null)}}else D=!1}var ee;if(typeof c=="function")ee=function(){c(Ie)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,F=Ee.port2;Ee.port1.onmessage=Ie,ee=function(){F.postMessage(null)}}else ee=function(){W(Ie,0)};function q(P){j=P,D||(D=!0,ee())}function Te(P,B){z=W(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,q(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var U=g;g=B;try{return P()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=g;g=P;try{return B()}finally{g=U}},e.unstable_scheduleCallback=function(P,B,U){var M=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?M+U:M):U=M,P){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=U+A,P={id:v++,callback:B,priorityLevel:P,startTime:U,expirationTime:A,sortIndex:-1},U>M?(P.sortIndex=U,t(f,P),n(u)===null&&P===n(f)&&(k?(p(z),z=-1):k=!0,Te(S,U-M))):(P.sortIndex=A,t(u,P),b||w||(b=!0,q(E))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var B=g;return function(){var U=g;g=B;try{return P.apply(this,arguments)}finally{g=U}}}})(Jc);Xc.exports=Jc;var xm=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=h,He=xm;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zc=new Set,wr={};function un(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(wr[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},lu={};function km(e){return Ll.call(lu,e)?!0:Ll.call(ou,e)?!1:wm.test(e)?lu[e]=!0:(ou[e]=!0,!1)}function Cm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Em(e,t,n,r){if(t===null||typeof t>"u"||Cm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ma=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ma,Aa);xe[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ma,Aa);xe[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ma,Aa);xe[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Em(t,n,i,r)&&(n=null),r||i===null?km(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),hn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),Ba=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),nd=Symbol.for("react.offscreen"),au=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Qo;function lr(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var qo=!1;function Ko(e,t){if(!e||qo)return"";qo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{qo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function bm(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case hn:return"Portal";case _l:return"Profiler";case _a:return"StrictMode";case Nl:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case Na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ba:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function jm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=rd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=Rm(e))}function id(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function od(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function Wl(e,t){od(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ar(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function ld(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ad(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ad(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ai,sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ai.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pm=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,In=null,Tn=null;function fu(e){if(e=Wr(e)){if(typeof Kl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=go(t),Kl(e.stateNode,e.type,t))}}function dd(e){In?Tn?Tn.push(e):Tn=[e]:In=e}function fd(){if(In){var e=In,t=Tn;if(Tn=In=null,fu(e),t)for(e=0;e<t.length;e++)fu(t[e])}}function pd(e,t){return e(t)}function md(){}var Yo=!1;function hd(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return pd(e,t,n)}finally{Yo=!1,(In!==null||Tn!==null)&&(md(),fd())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Yl=!1;if(xt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Yl=!1}function Im(e,t,n,r,i,o,l,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var fr=!1,Fi=null,Ui=!1,Xl=null,Tm={onError:function(e){fr=!0,Fi=e}};function Om(e,t,n,r,i,o,l,s,u){fr=!1,Fi=null,Im.apply(Tm,arguments)}function zm(e,t,n,r,i,o,l,s,u){if(Om.apply(this,arguments),fr){if(fr){var f=Fi;fr=!1,Fi=null}else throw Error(C(198));Ui||(Ui=!0,Xl=f)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pu(e){if(cn(e)!==e)throw Error(C(188))}function Mm(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pu(i),e;if(o===r)return pu(i),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function yd(e){return e=Mm(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var xd=He.unstable_scheduleCallback,mu=He.unstable_cancelCallback,Am=He.unstable_shouldYield,Lm=He.unstable_requestPaint,ue=He.unstable_now,_m=He.unstable_getCurrentPriorityLevel,Ua=He.unstable_ImmediatePriority,Sd=He.unstable_UserBlockingPriority,Wi=He.unstable_NormalPriority,Nm=He.unstable_LowPriority,wd=He.unstable_IdlePriority,fo=null,dt=null;function Bm(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Wm,Fm=Math.log,Um=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Fm(e)/Um|0)|0}var si=64,ui=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=sr(s):(o&=l,o!==0&&(r=sr(o)))}else l=n&~i,l!==0?r=sr(l):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-it(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Hm(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kd(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Gm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function Cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,Ha,bd,jd,Rd,Zl=!1,ci=[],zt=null,Mt=null,At=null,Er=new Map,br=new Map,Dt=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Jn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wr(t),t!==null&&Ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qm(e,t,n,r,i){switch(t){case"focusin":return zt=Jn(zt,e,t,n,r,i),!0;case"dragenter":return Mt=Jn(Mt,e,t,n,r,i),!0;case"mouseover":return At=Jn(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Er.set(o,Jn(Er.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,br.set(o,Jn(br.get(o)||null,e,t,n,r,i)),!0}return!1}function Pd(e){var t=Jt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,Rd(e.priority,function(){bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ql=r,n.target.dispatchEvent(r),ql=null}else return t=Wr(n),t!==null&&Ha(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Ri(e)&&n.delete(t)}function qm(){Zl=!1,zt!==null&&Ri(zt)&&(zt=null),Mt!==null&&Ri(Mt)&&(Mt=null),At!==null&&Ri(At)&&(At=null),Er.forEach(gu),br.forEach(gu)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,qm)))}function jr(e){function t(i){return Zn(i,e)}if(0<ci.length){Zn(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Zn(zt,e),Mt!==null&&Zn(Mt,e),At!==null&&Zn(At,e),Er.forEach(t),br.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Pd(n),n.blockedOn===null&&Dt.shift()}var On=Ct.ReactCurrentBatchConfig,Vi=!0;function Km(e,t,n,r){var i=Y,o=On.transition;On.transition=null;try{Y=1,Va(e,t,n,r)}finally{Y=i,On.transition=o}}function Ym(e,t,n,r){var i=Y,o=On.transition;On.transition=null;try{Y=4,Va(e,t,n,r)}finally{Y=i,On.transition=o}}function Va(e,t,n,r){if(Vi){var i=ea(e,t,n,r);if(i===null)al(e,t,r,Gi,n),hu(e,r);else if(Qm(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var o=Wr(i);if(o!==null&&Ed(o),o=ea(e,t,n,r),o===null&&al(e,t,r,Gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else al(e,t,r,null,n)}}var Gi=null;function ea(e,t,n,r){if(Gi=null,e=Fa(r),e=Jt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Ua:return 1;case Sd:return 4;case Wi:case Nm:return 16;case wd:return 536870912;default:return 16}default:return 16}}var Tt=null,Ga=null,Pi=null;function Id(){if(Pi)return Pi;var e,t=Ga,n=t.length,r,i="value"in Tt?Tt.value:Tt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Pi=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function yu(){return!1}function Ge(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:yu,this.isPropagationStopped=yu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=Ge(Hn),Ur=ie({},Hn,{view:0,detail:0}),Xm=Ge(Ur),Jo,Zo,er,po=ie({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Jo=e.screenX-er.screenX,Zo=e.screenY-er.screenY):Zo=Jo=0,er=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),vu=Ge(po),Jm=ie({},po,{dataTransfer:0}),Zm=Ge(Jm),eh=ie({},Ur,{relatedTarget:0}),el=Ge(eh),th=ie({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Ge(th),rh=ie({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=Ge(rh),oh=ie({},Hn,{data:0}),xu=Ge(oh),lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sh[e])?!!t[e]:!1}function Qa(){return uh}var ch=ie({},Ur,{key:function(e){if(e.key){var t=lh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dh=Ge(ch),fh=ie({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Ge(fh),ph=ie({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),mh=Ge(ph),hh=ie({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=Ge(hh),yh=ie({},po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=Ge(yh),xh=[9,13,27,32],qa=xt&&"CompositionEvent"in window,pr=null;xt&&"documentMode"in document&&(pr=document.documentMode);var Sh=xt&&"TextEvent"in window&&!pr,Td=xt&&(!qa||pr&&8<pr&&11>=pr),wu=" ",ku=!1;function Od(e,t){switch(e){case"keyup":return xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function wh(e,t){switch(e){case"compositionend":return zd(t);case"keypress":return t.which!==32?null:(ku=!0,wu);case"textInput":return e=t.data,e===wu&&ku?null:e;default:return null}}function kh(e,t){if(yn)return e==="compositionend"||!qa&&Od(e,t)?(e=Id(),Pi=Ga=Tt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var Ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ch[e.type]:t==="textarea"}function Md(e,t,n,r){dd(r),t=$i(t,"onChange"),0<t.length&&(n=new $a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Rr=null;function Eh(e){Gd(e,0)}function mo(e){var t=Sn(e);if(id(t))return e}function bh(e,t){if(e==="change")return t}var Ad=!1;if(xt){var tl;if(xt){var nl="oninput"in document;if(!nl){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),nl=typeof Eu.oninput=="function"}tl=nl}else tl=!1;Ad=tl&&(!document.documentMode||9<document.documentMode)}function bu(){mr&&(mr.detachEvent("onpropertychange",Ld),Rr=mr=null)}function Ld(e){if(e.propertyName==="value"&&mo(Rr)){var t=[];Md(t,Rr,e,Fa(e)),hd(Eh,t)}}function jh(e,t,n){e==="focusin"?(bu(),mr=t,Rr=n,mr.attachEvent("onpropertychange",Ld)):e==="focusout"&&bu()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(Rr)}function Ph(e,t){if(e==="click")return mo(t)}function Dh(e,t){if(e==="input"||e==="change")return mo(t)}function Ih(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Ih;function Pr(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ll.call(t,i)||!lt(e[i],t[i]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,t){var n=ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ju(n)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Th(e){var t=Nd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_d(n.ownerDocument.documentElement,n)){if(r!==null&&Ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ru(n,o);var l=Ru(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oh=xt&&"documentMode"in document&&11>=document.documentMode,vn=null,ta=null,hr=null,na=!1;function Pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||vn==null||vn!==Bi(r)||(r=vn,"selectionStart"in r&&Ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Pr(hr,r)||(hr=r,r=$i(ta,"onSelect"),0<r.length&&(t=new $a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},rl={},Bd={};xt&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function ho(e){if(rl[e])return rl[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return rl[e]=t[n];return e}var Fd=ho("animationend"),Ud=ho("animationiteration"),Wd=ho("animationstart"),Hd=ho("transitionend"),Vd=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Vd.set(e,t),un(t,[e])}for(var il=0;il<Du.length;il++){var ol=Du[il],zh=ol.toLowerCase(),Mh=ol[0].toUpperCase()+ol.slice(1);Vt(zh,"on"+Mh)}Vt(Fd,"onAnimationEnd");Vt(Ud,"onAnimationIteration");Vt(Wd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Hd,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Iu(i,s,f),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,f=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Iu(i,s,f),o=u}}}if(Ui)throw e=Xl,Ui=!1,Xl=null,e}function J(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||($d(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),$d(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[pi]){e[pi]=!0,Zc.forEach(function(n){n!=="selectionchange"&&(Ah.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,ll("selectionchange",!1,t))}}function $d(e,t,n,r){switch(Dd(t)){case 1:var i=Km;break;case 4:i=Ym;break;default:i=Va}n=i.bind(null,t,n,e),i=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Jt(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}hd(function(){var f=o,v=Fa(n),y=[];e:{var g=Vd.get(e);if(g!==void 0){var w=$a,b=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":w=dh;break;case"focusin":b="focus",w=el;break;case"focusout":b="blur",w=el;break;case"beforeblur":case"afterblur":w=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=mh;break;case Fd:case Ud:case Wd:w=nh;break;case Hd:w=gh;break;case"scroll":w=Xm;break;case"wheel":w=vh;break;case"copy":case"cut":case"paste":w=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Su}var k=(t&4)!==0,W=!k&&e==="scroll",p=k?g!==null?g+"Capture":null:g;k=[];for(var c=f,m;c!==null;){m=c;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=Cr(c,p),S!=null&&k.push(Ir(c,S,m)))),W)break;c=c.return}0<k.length&&(g=new w(g,b,null,n,v),y.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==ql&&(b=n.relatedTarget||n.fromElement)&&(Jt(b)||b[St]))break e;if((w||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=f,b=b?Jt(b):null,b!==null&&(W=cn(b),b!==W||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=f),w!==b)){if(k=vu,S="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Su,S="onPointerLeave",p="onPointerEnter",c="pointer"),W=w==null?g:Sn(w),m=b==null?g:Sn(b),g=new k(S,c+"leave",w,n,v),g.target=W,g.relatedTarget=m,S=null,Jt(v)===f&&(k=new k(p,c+"enter",b,n,v),k.target=m,k.relatedTarget=W,S=k),W=S,w&&b)t:{for(k=w,p=b,c=0,m=k;m;m=pn(m))c++;for(m=0,S=p;S;S=pn(S))m++;for(;0<c-m;)k=pn(k),c--;for(;0<m-c;)p=pn(p),m--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=pn(k),p=pn(p)}k=null}else k=null;w!==null&&Tu(y,g,w,k,!1),b!==null&&W!==null&&Tu(y,W,b,k,!0)}}e:{if(g=f?Sn(f):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=bh;else if(Cu(g))if(Ad)E=Dh;else{E=Rh;var D=jh}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Ph);if(E&&(E=E(e,f))){Md(y,E,n,v);break e}D&&D(e,g,f),e==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&Hl(g,"number",g.value)}switch(D=f?Sn(f):window,e){case"focusin":(Cu(D)||D.contentEditable==="true")&&(vn=D,ta=f,hr=null);break;case"focusout":hr=ta=vn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Pu(y,n,v);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":Pu(y,n,v)}var j;if(qa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else yn?Od(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Td&&n.locale!=="ko"&&(yn||z!=="onCompositionStart"?z==="onCompositionEnd"&&yn&&(j=Id()):(Tt=v,Ga="value"in Tt?Tt.value:Tt.textContent,yn=!0)),D=$i(f,z),0<D.length&&(z=new xu(z,e,null,n,v),y.push({event:z,listeners:D}),j?z.data=j:(j=zd(n),j!==null&&(z.data=j)))),(j=Sh?wh(e,n):kh(e,n))&&(f=$i(f,"onBeforeInput"),0<f.length&&(v=new xu("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=j))}Gd(y,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Ir(e,o,i)),o=Cr(e,t),o!=null&&r.push(Ir(e,o,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=Cr(n,o),u!=null&&l.unshift(Ir(n,u,s))):i||(u=Cr(n,o),u!=null&&l.push(Ir(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lh=/\r\n?/g,_h=/\u0000|\uFFFD/g;function Ou(e){return(typeof e=="string"?e:""+e).replace(Lh,`
`).replace(_h,"")}function mi(e,t,n){if(t=Ou(t),Ou(e)!==t&&n)throw Error(C(425))}function Qi(){}var ra=null,ia=null;function oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,Nh=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(Fh)}:la;function Fh(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Vn,Tr="__reactProps$"+Vn,St="__reactContainer$"+Vn,aa="__reactEvents$"+Vn,Uh="__reactListeners$"+Vn,Wh="__reactHandles$"+Vn;function Jt(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Mu(e);e!==null;){if(n=e[ct])return n;e=Mu(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[ct]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function go(e){return e[Tr]||null}var sa=[],wn=-1;function Gt(e){return{current:e}}function Z(e){0>wn||(e.current=sa[wn],sa[wn]=null,wn--)}function X(e,t){wn++,sa[wn]=e.current,e.current=t}var Ht={},Ce=Gt(Ht),Le=Gt(!1),rn=Ht;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function qi(){Z(Le),Z(Ce)}function Au(e,t,n){if(Ce.current!==Ht)throw Error(C(168));X(Ce,t),X(Le,n)}function Qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,jm(e)||"Unknown",i));return ie({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,rn=Ce.current,X(Ce,e),X(Le,Le.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Qd(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(Ce),X(Ce,e)):Z(Le),X(Le,n)}var ht=null,yo=!1,ul=!1;function qd(e){ht===null?ht=[e]:ht.push(e)}function Hh(e){yo=!0,qd(e)}function $t(){if(!ul&&ht!==null){ul=!0;var e=0,t=Y;try{var n=ht;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,yo=!1}catch(i){throw ht!==null&&(ht=ht.slice(e+1)),xd(Ua,$t),i}finally{Y=t,ul=!1}}return null}var kn=[],Cn=0,Yi=null,Xi=0,Qe=[],qe=0,on=null,gt=1,yt="";function Kt(e,t){kn[Cn++]=Xi,kn[Cn++]=Yi,Yi=e,Xi=t}function Kd(e,t,n){Qe[qe++]=gt,Qe[qe++]=yt,Qe[qe++]=on,on=e;var r=gt;e=yt;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,gt=1<<32-it(t)+i|n<<i|r,yt=o+e}else gt=1<<o|n<<i|r,yt=e}function Ya(e){e.return!==null&&(Kt(e,1),Kd(e,1,0))}function Xa(e){for(;e===Yi;)Yi=kn[--Cn],kn[Cn]=null,Xi=kn[--Cn],kn[Cn]=null;for(;e===on;)on=Qe[--qe],Qe[qe]=null,yt=Qe[--qe],Qe[qe]=null,gt=Qe[--qe],Qe[qe]=null}var We=null,Ue=null,te=!1,rt=null;function Yd(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ue=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:gt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ue=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(te){var t=Ue;if(t){var n=t;if(!_u(e,t)){if(ua(e))throw Error(C(418));t=Lt(n.nextSibling);var r=We;t&&_u(e,t)?Yd(r,n):(e.flags=e.flags&-4097|2,te=!1,We=e)}}else{if(ua(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,We=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function hi(e){if(e!==We)return!1;if(!te)return Nu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oa(e.type,e.memoizedProps)),t&&(t=Ue)){if(ua(e))throw Xd(),Error(C(418));for(;t;)Yd(e,t),t=Lt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=We?Lt(e.stateNode.nextSibling):null;return!0}function Xd(){for(var e=Ue;e;)e=Lt(e.nextSibling)}function _n(){Ue=We=null,te=!1}function Ja(e){rt===null?rt=[e]:rt.push(e)}var Vh=Ct.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bu(e){var t=e._init;return t(e._payload)}function Jd(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=Ft(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,S){return c===null||c.tag!==6?(c=gl(m,p.mode,S),c.return=p,c):(c=i(c,m),c.return=p,c)}function u(p,c,m,S){var E=m.type;return E===gn?v(p,c,m.props.children,S,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Bu(E)===c.type)?(S=i(c,m.props),S.ref=tr(p,c,m),S.return=p,S):(S=Li(m.type,m.key,m.props,null,p.mode,S),S.ref=tr(p,c,m),S.return=p,S)}function f(p,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=yl(m,p.mode,S),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function v(p,c,m,S,E){return c===null||c.tag!==7?(c=nn(m,p.mode,S,E),c.return=p,c):(c=i(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=gl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oi:return m=Li(c.type,c.key,c.props,null,p.mode,m),m.ref=tr(p,null,c),m.return=p,m;case hn:return c=yl(c,p.mode,m),c.return=p,c;case Rt:var S=c._init;return y(p,S(c._payload),m)}if(ar(c)||Yn(c))return c=nn(c,p.mode,m,null),c.return=p,c;gi(p,c)}return null}function g(p,c,m,S){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===E?u(p,c,m,S):null;case hn:return m.key===E?f(p,c,m,S):null;case Rt:return E=m._init,g(p,c,E(m._payload),S)}if(ar(m)||Yn(m))return E!==null?null:v(p,c,m,S,null);gi(p,m)}return null}function w(p,c,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,s(c,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oi:return p=p.get(S.key===null?m:S.key)||null,u(c,p,S,E);case hn:return p=p.get(S.key===null?m:S.key)||null,f(c,p,S,E);case Rt:var D=S._init;return w(p,c,m,D(S._payload),E)}if(ar(S)||Yn(S))return p=p.get(m)||null,v(c,p,S,E,null);gi(c,S)}return null}function b(p,c,m,S){for(var E=null,D=null,j=c,z=c=0,N=null;j!==null&&z<m.length;z++){j.index>z?(N=j,j=null):N=j.sibling;var T=g(p,j,m[z],S);if(T===null){j===null&&(j=N);break}e&&j&&T.alternate===null&&t(p,j),c=o(T,c,z),D===null?E=T:D.sibling=T,D=T,j=N}if(z===m.length)return n(p,j),te&&Kt(p,z),E;if(j===null){for(;z<m.length;z++)j=y(p,m[z],S),j!==null&&(c=o(j,c,z),D===null?E=j:D.sibling=j,D=j);return te&&Kt(p,z),E}for(j=r(p,j);z<m.length;z++)N=w(j,p,z,m[z],S),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?z:N.key),c=o(N,c,z),D===null?E=N:D.sibling=N,D=N);return e&&j.forEach(function(K){return t(p,K)}),te&&Kt(p,z),E}function k(p,c,m,S){var E=Yn(m);if(typeof E!="function")throw Error(C(150));if(m=E.call(m),m==null)throw Error(C(151));for(var D=E=null,j=c,z=c=0,N=null,T=m.next();j!==null&&!T.done;z++,T=m.next()){j.index>z?(N=j,j=null):N=j.sibling;var K=g(p,j,T.value,S);if(K===null){j===null&&(j=N);break}e&&j&&K.alternate===null&&t(p,j),c=o(K,c,z),D===null?E=K:D.sibling=K,D=K,j=N}if(T.done)return n(p,j),te&&Kt(p,z),E;if(j===null){for(;!T.done;z++,T=m.next())T=y(p,T.value,S),T!==null&&(c=o(T,c,z),D===null?E=T:D.sibling=T,D=T);return te&&Kt(p,z),E}for(j=r(p,j);!T.done;z++,T=m.next())T=w(j,p,z,T.value,S),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?z:T.key),c=o(T,c,z),D===null?E=T:D.sibling=T,D=T);return e&&j.forEach(function(Ie){return t(p,Ie)}),te&&Kt(p,z),E}function W(p,c,m,S){if(typeof m=="object"&&m!==null&&m.type===gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var E=m.key,D=c;D!==null;){if(D.key===E){if(E=m.type,E===gn){if(D.tag===7){n(p,D.sibling),c=i(D,m.props.children),c.return=p,p=c;break e}}else if(D.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Bu(E)===D.type){n(p,D.sibling),c=i(D,m.props),c.ref=tr(p,D,m),c.return=p,p=c;break e}n(p,D);break}else t(p,D);D=D.sibling}m.type===gn?(c=nn(m.props.children,p.mode,S,m.key),c.return=p,p=c):(S=Li(m.type,m.key,m.props,null,p.mode,S),S.ref=tr(p,c,m),S.return=p,p=S)}return l(p);case hn:e:{for(D=m.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=yl(m,p.mode,S),c.return=p,p=c}return l(p);case Rt:return D=m._init,W(p,c,D(m._payload),S)}if(ar(m))return b(p,c,m,S);if(Yn(m))return k(p,c,m,S);gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=gl(m,p.mode,S),c.return=p,p=c),l(p)):n(p,c)}return W}var Nn=Jd(!0),Zd=Jd(!1),Ji=Gt(null),Zi=null,En=null,Za=null;function es(){Za=En=Zi=null}function ts(e){var t=Ji.current;Z(Ji),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Zi=e,Za=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Zi===null)throw Error(C(308));En=e,Zi.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Zt=null;function ns(e){Zt===null?Zt=[e]:Zt.push(e)}function ef(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ns(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,ns(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}function Fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,l===null?o=f:l.next=f,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==l&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=u))}if(o!==null){var y=i.baseState;l=0,v=f=u=null,s=o;do{var g=s.lane,w=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,k=s;switch(g=t,w=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){y=b.call(w,y,g);break e}y=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,g=typeof b=="function"?b.call(w,y,g):b,g==null)break e;y=ie({},y,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=w,u=y):v=v.next=w,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(v===null&&(u=y),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);an|=l,e.lanes=l,e.memoizedState=y}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Hr={},ft=Gt(Hr),Or=Gt(Hr),zr=Gt(Hr);function en(e){if(e===Hr)throw Error(C(174));return e}function is(e,t){switch(X(zr,t),X(Or,e),X(ft,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Z(ft),X(ft,t)}function Bn(){Z(ft),Z(Or),Z(zr)}function nf(e){en(zr.current);var t=en(ft.current),n=Gl(t,e.type);t!==n&&(X(Or,e),X(ft,n))}function os(e){Or.current===e&&(Z(ft),Z(Or))}var ne=Gt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function ls(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Ti=Ct.ReactCurrentDispatcher,dl=Ct.ReactCurrentBatchConfig,ln=0,re=null,de=null,me=null,no=!1,gr=!1,Mr=0,Gh=0;function Se(){throw Error(C(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function ss(e,t,n,r,i,o){if(ln=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ti.current=e===null||e.memoizedState===null?Kh:Yh,e=n(r,i),gr){o=0;do{if(gr=!1,Mr=0,25<=o)throw Error(C(301));o+=1,me=de=null,t.updateQueue=null,Ti.current=Xh,e=n(r,i)}while(gr)}if(Ti.current=ro,t=de!==null&&de.next!==null,ln=0,me=de=re=null,no=!1,t)throw Error(C(300));return e}function us(){var e=Mr!==0;return Mr=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?re.memoizedState=me=e:me=me.next=e,me}function Je(){if(de===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=me===null?re.memoizedState:me.next;if(t!==null)me=t,de=e;else{if(e===null)throw Error(C(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},me===null?re.memoizedState=me=e:me=me.next=e}return me}function Ar(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=Je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,f=o;do{var v=f.lane;if((ln&v)===v)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=y,l=r):u=u.next=y,re.lanes|=v,an|=v}f=f.next}while(f!==null&&f!==o);u===null?l=r:u.next=s,lt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,an|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=Je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);lt(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rf(){}function of(e,t){var n=re,r=Je(),i=t(),o=!lt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,cs(sf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Lr(9,af.bind(null,n,r,i,t),void 0,null),he===null)throw Error(C(349));ln&30||lf(n,t,i)}return i}function lf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function af(e,t,n,r){t.value=n,t.getSnapshot=r,uf(t)&&cf(e)}function sf(e,t,n){return n(function(){uf(t)&&cf(e)})}function uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function cf(e){var t=wt(e,1);t!==null&&ot(t,e,1,-1)}function Wu(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=qh.bind(null,re,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function df(){return Je().memoizedState}function Oi(e,t,n,r){var i=ut();re.flags|=e,i.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(de!==null){var l=de.memoizedState;if(o=l.destroy,r!==null&&as(r,l.deps)){i.memoizedState=Lr(t,n,o,r);return}}re.flags|=e,i.memoizedState=Lr(1|t,n,o,r)}function Hu(e,t){return Oi(8390656,8,e,t)}function cs(e,t){return vo(2048,8,e,t)}function ff(e,t){return vo(4,2,e,t)}function pf(e,t){return vo(4,4,e,t)}function mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hf(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,mf.bind(null,t,e),n)}function ds(){}function gf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return ln&21?(lt(n,t)||(n=kd(),re.lanes|=n,an|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function $h(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{Y=n,dl.transition=r}}function xf(){return Je().memoizedState}function Qh(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sf(e))wf(t,n);else if(n=ef(e,t,n,r),n!==null){var i=Re();ot(n,e,r,i),kf(n,t,r)}}function qh(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sf(e))wf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,lt(s,l)){var u=t.interleaved;u===null?(i.next=i,ns(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ef(e,t,i,r),n!==null&&(i=Re(),ot(n,e,r,i),kf(n,t,r))}}function Sf(e){var t=e.alternate;return e===re||t!==null&&t===re}function wf(e,t){gr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}var ro={readContext:Xe,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Kh={readContext:Xe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,mf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qh.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Wu,useDebugValue:ds,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Wu(!1),t=e[0];return e=$h.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=ut();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),he===null)throw Error(C(349));ln&30||lf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hu(sf.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,af.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ut(),t=he.identifierPrefix;if(te){var n=yt,r=gt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yh={readContext:Xe,useCallback:gf,useContext:Xe,useEffect:cs,useImperativeHandle:hf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:yf,useReducer:fl,useRef:df,useState:function(){return fl(Ar)},useDebugValue:ds,useDeferredValue:function(e){var t=Je();return vf(t,de.memoizedState,e)},useTransition:function(){var e=fl(Ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:rf,useSyncExternalStore:of,useId:xf,unstable_isNewReconciler:!1},Xh={readContext:Xe,useCallback:gf,useContext:Xe,useEffect:cs,useImperativeHandle:hf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:yf,useReducer:pl,useRef:df,useState:function(){return pl(Ar)},useDebugValue:ds,useDeferredValue:function(e){var t=Je();return de===null?t.memoizedState=e:vf(t,de.memoizedState,e)},useTransition:function(){var e=pl(Ar)[0],t=Je().memoizedState;return[e,t]},useMutableSource:rf,useSyncExternalStore:of,useId:xf,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Bt(e),o=vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(ot(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Bt(e),o=vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=_t(e,o,i),t!==null&&(ot(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Bt(e),i=vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=_t(e,i,r),t!==null&&(ot(t,e,r,n),Ii(t,e,r))}};function Vu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function Cf(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(i=_e(t)?rn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Ln(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},rs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xe(o):(o=_e(t)?rn:Ce.current,i.context=Ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=bm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jh=typeof WeakMap=="function"?WeakMap:Map;function Ef(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ea=r),ma(e,t)},n}function bf(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fg.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var Zh=Ct.ReactCurrentOwner,Ae=!1;function je(e,t,n,r){t.child=e===null?Zd(t,null,n,r):Nn(t,e.child,n,r)}function Ku(e,t,n,r,i){n=n.render;var o=t.ref;return zn(t,i),r=ss(e,t,n,r,o,i),n=us(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(te&&n&&Ya(t),t.flags|=1,je(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jf(e,t,o,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function jf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pr(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,kt(e,t,i)}return ha(e,t,n,r,i)}function Rf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(jn,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(jn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(jn,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(jn,Be),Be|=r;return je(e,t,i,n),t.child}function Pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ha(e,t,n,r,i){var o=_e(n)?rn:Ce.current;return o=Ln(t,o),zn(t,i),n=ss(e,t,n,r,o,i),r=us(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(te&&r&&Ya(t),t.flags|=1,je(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(_e(n)){var o=!0;Ki(t)}else o=!1;if(zn(t,i),t.stateNode===null)zi(e,t),Cf(t,n,r),pa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=Xe(f):(f=_e(n)?rn:Ce.current,f=Ln(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==f)&&Gu(t,l,r,f),Pt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),u=t.memoizedState,s!==r||g!==u||Le.current||Pt?(typeof v=="function"&&(fa(t,n,v,r),u=t.memoizedState),(s=Pt||Vu(t,n,s,r,g,u,f))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=f,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tf(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:tt(t.type,s),l.props=f,y=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=_e(n)?rn:Ce.current,u=Ln(t,u));var w=n.getDerivedStateFromProps;(v=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==y||g!==u)&&Gu(t,l,r,u),Pt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var b=t.memoizedState;s!==y||g!==b||Le.current||Pt?(typeof w=="function"&&(fa(t,n,w,r),b=t.memoizedState),(f=Pt||Vu(t,n,f,r,g,b,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=u,r=f):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,o,i)}function ga(e,t,n,r,i,o){Pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Lu(t,n,!1),kt(e,t,o);r=t.stateNode,Zh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nn(t,e.child,null,o),t.child=Nn(t,null,s,o)):je(e,t,s,o),t.memoizedState=r.state,i&&Lu(t,n,!0),t.child}function Df(e){var t=e.stateNode;t.pendingContext?Au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Au(e,t.context,!1),is(e,t.containerInfo)}function Ju(e,t,n,r,i){return _n(),Ja(i),t.flags|=256,je(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function If(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ne,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ko(l,r,0,null),e=nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=va(n),t.memoizedState=ya,e):fs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return eg(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ft(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ft(s,o):(o=nn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?va(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=Ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fs(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,n,r){return r!==null&&Ja(r),Nn(t,e.child,null,n),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ml(Error(C(422))),yi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ko({mode:"visible",children:r.children},i,0,null),o=nn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nn(t,e.child,null,l),t.child.memoizedState=va(l),t.memoizedState=ya,o);if(!(t.mode&1))return yi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=ml(o,r,void 0),yi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ae||s){if(r=he,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),ot(r,e,i,-1))}return vs(),r=ml(Error(C(421))),yi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=Lt(i.nextSibling),We=t,te=!0,rt=null,e!==null&&(Qe[qe++]=gt,Qe[qe++]=yt,Qe[qe++]=on,gt=e.id,yt=e.overflow,on=t),t=fs(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function hl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hl(t,!0,n,null,o);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tg(e,t,n){switch(t.tag){case 3:Df(t),_n();break;case 5:nf(t);break;case 1:_e(t.type)&&Ki(t);break;case 4:is(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?If(e,t,n):(X(ne,ne.current&1),e=kt(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Rf(e,t,n)}return kt(e,t,n)}var Of,xa,zf,Mf;Of=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};zf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(ft.current);var o=null;switch(n){case"input":i=Ul(e,i),r=Ul(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=Vl(e,i),r=Vl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}$l(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(wr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var u=r[f];if(s=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(wr.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&J("scroll",e),o||s===u||(o=[])):(o=o||[]).push(f,u))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};Mf=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ng(e,t,n){var r=t.pendingProps;switch(Xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return _e(t.type)&&qi(),we(t),null;case 3:return r=t.stateNode,Bn(),Z(Le),Z(Ce),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Ra(rt),rt=null))),xa(e,t),we(t),null;case 5:os(t);var i=en(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)zf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return we(t),null}if(e=en(ft.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ct]=t,r[Tr]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)J(ur[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":su(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":cu(r,o),J("invalid",r)}$l(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,s,e),i=["children",""+s]):wr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",r)}switch(n){case"input":li(r),uu(r,o,!0);break;case"textarea":li(r),du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ad(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ct]=t,e[Tr]=r,Of(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ql(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)J(ur[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":su(e,r),i=Ul(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":cu(e,r),i=Vl(e,r),J("invalid",e);break;default:i=r}$l(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?cd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sd(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&kr(e,u):typeof u=="number"&&kr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&J("scroll",e):u!=null&&La(e,o,u,l))}switch(n){case"input":li(e),uu(e,r,!1);break;case"textarea":li(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Mf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=en(zr.current),en(ft.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(o=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return we(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))Xd(),_n(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[ct]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else rt!==null&&(Ra(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?fe===0&&(fe=3):vs())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Bn(),xa(e,t),e===null&&Dr(t.stateNode.containerInfo),we(t),null;case 10:return ts(t.type._context),we(t),null;case 17:return _e(t.type)&&qi(),we(t),null;case 19:if(Z(ne),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)nr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,nr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Un&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return we(t),null}else 2*ue()-o.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function rg(e,t){switch(Xa(t),t.tag){case 1:return _e(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Z(Le),Z(Ce),ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return os(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return Bn(),null;case 10:return ts(t.type._context),null;case 22:case 23:return ys(),null;case 24:return null;default:return null}}var vi=!1,ke=!1,ig=typeof WeakSet=="function"?WeakSet:Set,O=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ec=!1;function og(e,t){if(ra=Vi,e=Nd(),Ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var w;y!==n||i!==0&&y.nodeType!==3||(s=l+i),y!==o||r!==0&&y.nodeType!==3||(u=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(w=y.firstChild)!==null;)g=y,y=w;for(;;){if(y===e)break t;if(g===n&&++f===i&&(s=l),g===o&&++v===r&&(u=l),(w=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},Vi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,W=b.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:tt(t.type,k),W);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){oe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return b=ec,ec=!1,b}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Tr],delete t[aa],delete t[Uh],delete t[Wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lf(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var ye=null,nt=!1;function bt(e,t,n){for(n=n.child;n!==null;)_f(e,t,n),n=n.sibling}function _f(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(fo,n)}catch{}switch(n.tag){case 5:ke||bn(n,t);case 6:var r=ye,i=nt;ye=null,bt(e,t,n),ye=r,nt=i,ye!==null&&(nt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(nt?(e=ye,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),jr(e)):sl(ye,n.stateNode));break;case 4:r=ye,i=nt,ye=n.stateNode.containerInfo,nt=!0,bt(e,t,n),ye=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Sa(n,t,l),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!ke&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,bt(e,t,n),ke=r):bt(e,t,n);break;default:bt(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ig),t.forEach(function(r){var i=mg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,nt=!1;break e;case 3:ye=s.stateNode.containerInfo,nt=!0;break e;case 4:ye=s.stateNode.containerInfo,nt=!0;break e}s=s.return}if(ye===null)throw Error(C(160));_f(o,l,i),ye=null,nt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){oe(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}function Nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),st(e),r&4){try{yr(3,e,e.return),So(3,e)}catch(k){oe(e,e.return,k)}try{yr(5,e,e.return)}catch(k){oe(e,e.return,k)}}break;case 1:et(t,e),st(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(et(t,e),st(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(k){oe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&od(i,o),Ql(s,l);var f=Ql(s,o);for(l=0;l<u.length;l+=2){var v=u[l],y=u[l+1];v==="style"?cd(i,y):v==="dangerouslySetInnerHTML"?sd(i,y):v==="children"?kr(i,y):La(i,v,y,f)}switch(s){case"input":Wl(i,o);break;case"textarea":ld(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Dn(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tr]=o}catch(k){oe(e,e.return,k)}}break;case 6:if(et(t,e),st(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){oe(e,e.return,k)}}break;case 3:if(et(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(k){oe(e,e.return,k)}break;case 4:et(t,e),st(e);break;case 13:et(t,e),st(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hs=ue())),r&4&&nc(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(f=ke)||v,et(t,e),ke=f):et(t,e),st(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(O=e,v=e.child;v!==null;){for(y=O=v;O!==null;){switch(g=O,w=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:bn(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){oe(r,n,k)}}break;case 5:bn(g,g.return);break;case 22:if(g.memoizedState!==null){ic(y);continue}}w!==null?(w.return=g,O=w):ic(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ud("display",l))}catch(k){oe(e,e.return,k)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(k){oe(e,e.return,k)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:et(t,e),st(e),r&4&&nc(e);break;case 21:break;default:et(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var o=tc(e);Ca(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=tc(e);ka(e,s,l);break;default:throw Error(C(161))}}catch(u){oe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lg(e,t,n){O=e,Bf(e)}function Bf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||vi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ke;s=vi;var f=ke;if(vi=l,(ke=u)&&!f)for(O=i;O!==null;)l=O,u=l.child,l.tag===22&&l.memoizedState!==null?oc(i):u!==null?(u.return=l,O=u):oc(i);for(;o!==null;)O=o,Bf(o),o=o.sibling;O=i,vi=s,ke=f}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):rc(e)}}function rc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&jr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ke||t.flags&512&&wa(t)}catch(g){oe(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function ic(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function oc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(u){oe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){oe(t,i,u)}}var o=t.return;try{wa(t)}catch(u){oe(t,o,u)}break;case 5:var l=t.return;try{wa(t)}catch(u){oe(t,l,u)}}}catch(u){oe(t,t.return,u)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var ag=Math.ceil,io=Ct.ReactCurrentDispatcher,ps=Ct.ReactCurrentOwner,Ye=Ct.ReactCurrentBatchConfig,Q=0,he=null,ce=null,ve=0,Be=0,jn=Gt(0),fe=0,_r=null,an=0,wo=0,ms=0,vr=null,Me=null,hs=0,Un=1/0,mt=null,oo=!1,Ea=null,Nt=null,xi=!1,Ot=null,lo=0,xr=0,ba=null,Mi=-1,Ai=0;function Re(){return Q&6?ue():Mi!==-1?Mi:Mi=ue()}function Bt(e){return e.mode&1?Q&2&&ve!==0?ve&-ve:Vh.transition!==null?(Ai===0&&(Ai=kd()),Ai):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Dd(e.type)),e):1}function ot(e,t,n,r){if(50<xr)throw xr=0,ba=null,Error(C(185));Fr(e,n,r),(!(Q&2)||e!==he)&&(e===he&&(!(Q&2)&&(wo|=n),fe===4&&It(e,ve)),Ne(e,r),n===1&&Q===0&&!(t.mode&1)&&(Un=ue()+500,yo&&$t()))}function Ne(e,t){var n=e.callbackNode;Vm(e,t);var r=Hi(e,e===he?ve:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?Hh(lc.bind(null,e)):qd(lc.bind(null,e)),Bh(function(){!(Q&6)&&$t()}),n=null;else{switch(Cd(r)){case 1:n=Ua;break;case 4:n=Sd;break;case 16:n=Wi;break;case 536870912:n=wd;break;default:n=Wi}n=Qf(n,Ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ff(e,t){if(Mi=-1,Ai=0,Q&6)throw Error(C(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Hi(e,e===he?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=Q;Q|=2;var o=Wf();(he!==e||ve!==t)&&(mt=null,Un=ue()+500,tn(e,t));do try{cg();break}catch(s){Uf(e,s)}while(!0);es(),io.current=o,Q=i,ce!==null?t=0:(he=null,ve=0,t=fe)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=ja(e,i))),t===1)throw n=_r,tn(e,0),It(e,r),Ne(e,ue()),n;if(t===6)It(e,r);else{if(i=e.current.alternate,!(r&30)&&!sg(i)&&(t=ao(e,r),t===2&&(o=Jl(e),o!==0&&(r=o,t=ja(e,o))),t===1))throw n=_r,tn(e,0),It(e,r),Ne(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Yt(e,Me,mt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=hs+500-ue(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=la(Yt.bind(null,e,Me,mt),t);break}Yt(e,Me,mt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-it(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ag(r/1960))-r,10<r){e.timeoutHandle=la(Yt.bind(null,e,Me,mt),r);break}Yt(e,Me,mt);break;case 5:Yt(e,Me,mt);break;default:throw Error(C(329))}}}return Ne(e,ue()),e.callbackNode===n?Ff.bind(null,e):null}function ja(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ra(t)),e}function Ra(e){Me===null?Me=e:Me.push.apply(Me,e)}function sg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~ms,t&=~wo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(Q&6)throw Error(C(327));Mn();var t=Hi(e,0);if(!(t&1))return Ne(e,ue()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=ja(e,r))}if(n===1)throw n=_r,tn(e,0),It(e,t),Ne(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Me,mt),Ne(e,ue()),null}function gs(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Un=ue()+500,yo&&$t())}}function sn(e){Ot!==null&&Ot.tag===0&&!(Q&6)&&Mn();var t=Q;Q|=1;var n=Ye.transition,r=Y;try{if(Ye.transition=null,Y=1,e)return e()}finally{Y=r,Ye.transition=n,Q=t,!(Q&6)&&$t()}}function ys(){Be=jn.current,Z(jn)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nh(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:Bn(),Z(Le),Z(Ce),ls();break;case 5:os(r);break;case 4:Bn();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:ts(r.type._context);break;case 22:case 23:ys()}n=n.return}if(he=e,ce=e=Ft(e.current,null),ve=Be=t,fe=0,_r=null,ms=wo=an=0,Me=vr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Zt=null}return e}function Uf(e,t){do{var n=ce;try{if(es(),Ti.current=ro,no){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(ln=0,me=de=re=null,gr=!1,Mr=0,ps.current=null,n===null||n.return===null){fe=1,_r=t,ce=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ve,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var w=Qu(l);if(w!==null){w.flags&=-257,qu(w,l,s,o,t),w.mode&1&&$u(o,f,t),t=w,u=f;var b=t.updateQueue;if(b===null){var k=new Set;k.add(u),t.updateQueue=k}else b.add(u);break e}else{if(!(t&1)){$u(o,f,t),vs();break e}u=Error(C(426))}}else if(te&&s.mode&1){var W=Qu(l);if(W!==null){!(W.flags&65536)&&(W.flags|=256),qu(W,l,s,o,t),Ja(Fn(u,s));break e}}o=u=Fn(u,s),fe!==4&&(fe=2),vr===null?vr=[o]:vr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Ef(o,u,t);Fu(o,p);break e;case 1:s=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nt===null||!Nt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=bf(o,s,t);Fu(o,S);break e}}o=o.return}while(o!==null)}Vf(n)}catch(E){t=E,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Wf(){var e=io.current;return io.current=ro,e===null?ro:e}function vs(){(fe===0||fe===3||fe===2)&&(fe=4),he===null||!(an&268435455)&&!(wo&268435455)||It(he,ve)}function ao(e,t){var n=Q;Q|=2;var r=Wf();(he!==e||ve!==t)&&(mt=null,tn(e,t));do try{ug();break}catch(i){Uf(e,i)}while(!0);if(es(),Q=n,io.current=r,ce!==null)throw Error(C(261));return he=null,ve=0,fe}function ug(){for(;ce!==null;)Hf(ce)}function cg(){for(;ce!==null&&!Am();)Hf(ce)}function Hf(e){var t=$f(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Vf(e):ce=t,ps.current=null}function Vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rg(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=ng(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function Yt(e,t,n){var r=Y,i=Ye.transition;try{Ye.transition=null,Y=1,dg(e,t,n,r)}finally{Ye.transition=i,Y=r}return null}function dg(e,t,n,r){do Mn();while(Ot!==null);if(Q&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gm(e,o),e===he&&(ce=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,Qf(Wi,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var l=Y;Y=1;var s=Q;Q|=4,ps.current=null,og(e,n),Nf(n,e),Th(ia),Vi=!!ra,ia=ra=null,e.current=n,lg(n),Lm(),Q=s,Y=l,Ye.transition=o}else e.current=n;if(xi&&(xi=!1,Ot=e,lo=i),o=e.pendingLanes,o===0&&(Nt=null),Bm(n.stateNode),Ne(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ea,Ea=null,e;return lo&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===ba?xr++:(xr=0,ba=e):xr=0,$t(),null}function Mn(){if(Ot!==null){var e=Cd(lo),t=Ye.transition,n=Y;try{if(Ye.transition=null,Y=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,lo=0,Q&6)throw Error(C(331));var i=Q;for(Q|=4,O=e.current;O!==null;){var o=O,l=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(O=f;O!==null;){var v=O;switch(v.tag){case 0:case 11:case 15:yr(8,v,o)}var y=v.child;if(y!==null)y.return=v,O=y;else for(;O!==null;){v=O;var g=v.sibling,w=v.return;if(Af(v),v===f){O=null;break}if(g!==null){g.return=w,O=g;break}O=w}}}var b=o.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var W=k.sibling;k.sibling=null,k=W}while(k!==null)}}O=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,O=l;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){l=O;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,O=m;else e:for(l=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:So(9,s)}}catch(E){oe(s,s.return,E)}if(s===l){O=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,O=S;break e}O=s.return}}if(Q=i,$t(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(fo,e)}catch{}r=!0}return r}finally{Y=n,Ye.transition=t}}return!1}function ac(e,t,n){t=Fn(n,t),t=Ef(e,t,1),e=_t(e,t,1),t=Re(),e!==null&&(Fr(e,1,t),Ne(e,t))}function oe(e,t,n){if(e.tag===3)ac(e,e,n);else for(;t!==null;){if(t.tag===3){ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=Fn(n,e),e=bf(t,e,1),t=_t(t,e,1),e=Re(),t!==null&&(Fr(t,1,e),Ne(t,e));break}}t=t.return}}function fg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ve&n)===n&&(fe===4||fe===3&&(ve&130023424)===ve&&500>ue()-hs?tn(e,0):ms|=n),Ne(e,t)}function Gf(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=Re();e=wt(e,t),e!==null&&(Fr(e,t,n),Ne(e,n))}function pg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gf(e,n)}function mg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Gf(e,n)}var $f;$f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,tg(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&Kd(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Ln(t,Ce.current);zn(t,n),i=ss(null,t,r,e,i,n);var o=us();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rs(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,pa(t,r,e,n),t=ga(null,t,r,!0,o,n)):(t.tag=0,te&&o&&Ya(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gg(r),e=tt(r,e),i){case 0:t=ha(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Ku(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,tt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Xu(e,t,r,i,n);case 3:e:{if(Df(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,i=o.element,tf(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fn(Error(C(423)),t),t=Ju(e,t,r,n,i);break e}else if(r!==i){i=Fn(Error(C(424)),t),t=Ju(e,t,r,n,i);break e}else for(Ue=Lt(t.stateNode.containerInfo.firstChild),We=t,te=!0,rt=null,n=Zd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===i){t=kt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return nf(t),e===null&&ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,oa(r,i)?l=null:o!==null&&oa(r,o)&&(t.flags|=32),Pf(e,t),je(e,t,l,n),t.child;case 6:return e===null&&ca(t),null;case 13:return If(e,t,n);case 4:return is(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Ku(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,X(Ji,r._currentValue),r._currentValue=l,o!==null)if(lt(o.value,l)){if(o.children===i.children&&!Le.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=vt(-1,n&-n),u.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?u.next=u:(u.next=v.next,v.next=u),f.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),da(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),da(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zn(t,n),i=Xe(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),Yu(e,t,r,i,n);case 15:return jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),zi(e,t),t.tag=1,_e(r)?(e=!0,Ki(t)):e=!1,zn(t,n),Cf(t,r,i),pa(t,r,i,n),ga(null,t,r,!0,e,n);case 19:return Tf(e,t,n);case 22:return Rf(e,t,n)}throw Error(C(156,t.tag))};function Qf(e,t){return xd(e,t)}function hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new hg(e,t,n,r)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gg(e){if(typeof e=="function")return xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Na)return 11;if(e===Ba)return 14}return 2}function Ft(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")xs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return nn(n.children,i,o,t);case _a:l=8,i|=8;break;case _l:return e=Ke(12,n,t,i|2),e.elementType=_l,e.lanes=o,e;case Nl:return e=Ke(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Bl:return e=Ke(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case nd:return ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:l=10;break e;case td:l=9;break e;case Na:l=11;break e;case Ba:l=14;break e;case Rt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ke(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=nd,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ss(e,t,n,r,i,o,l,s,u){return e=new yg(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ke(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rs(o),e}function vg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qf(e){if(!e)return Ht;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(_e(n))return Qd(e,n,t)}return t}function Kf(e,t,n,r,i,o,l,s,u){return e=Ss(n,r,!0,e,i,o,l,s,u),e.context=qf(null),n=e.current,r=Re(),i=Bt(n),o=vt(r,i),o.callback=t??null,_t(n,o,i),e.current.lanes=i,Fr(e,i,r),Ne(e,r),e}function Co(e,t,n,r){var i=t.current,o=Re(),l=Bt(i);return n=qf(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(i,t,l),e!==null&&(ot(e,i,l,o),Ii(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function xg(){return null}var Yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ks(e){this._internalRoot=e}Eo.prototype.render=ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Co(e,t,null,null)};Eo.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){Co(null,e,null,null)}),t[St]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Pd(e)}};function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Sg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=so(l);o.call(f)}}var l=Kf(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=l,e[St]=l.current,Dr(e.nodeType===8?e.parentNode:e),sn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=so(u);s.call(f)}}var u=Ss(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=u,e[St]=u.current,Dr(e.nodeType===8?e.parentNode:e),sn(function(){Co(t,u,n,r)}),u}function jo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=so(l);s.call(u)}}Co(t,l,e,i)}else l=Sg(n,t,e,i,r);return so(l)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Wa(t,n|1),Ne(t,ue()),!(Q&6)&&(Un=ue()+500,$t()))}break;case 13:sn(function(){var r=wt(e,1);if(r!==null){var i=Re();ot(r,e,1,i)}}),ws(e,1)}};Ha=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Re();ot(t,e,134217728,n)}ws(e,134217728)}};bd=function(e){if(e.tag===13){var t=Bt(e),n=wt(e,t);if(n!==null){var r=Re();ot(n,e,t,r)}ws(e,t)}};jd=function(){return Y};Rd=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Kl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=go(r);if(!i)throw Error(C(90));id(r),Wl(r,i)}}}break;case"textarea":ld(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};pd=gs;md=sn;var wg={usingClientEntryPoint:!1,Events:[Wr,Sn,go,dd,fd,gs]},rr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kg={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yd(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||xg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{fo=Si.inject(kg),dt=Si}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cs(t))throw Error(C(200));return vg(e,t,null,n)};Ve.createRoot=function(e,t){if(!Cs(e))throw Error(C(299));var n=!1,r="",i=Yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ss(e,1,!1,null,null,n,!1,r,i),e[St]=t.current,Dr(e.nodeType===8?e.parentNode:e),new ks(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=yd(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return sn(e)};Ve.hydrate=function(e,t,n){if(!bo(t))throw Error(C(200));return jo(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Cs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Yf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Kf(t,null,e,1,n??null,i,!1,o,l),e[St]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};Ve.render=function(e,t,n){if(!bo(t))throw Error(C(200));return jo(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!bo(e))throw Error(C(40));return e._reactRootContainer?(sn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ve.unstable_batchedUpdates=gs;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return jo(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function Xf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xf)}catch(e){console.error(e)}}Xf(),Yc.exports=Ve;var Xt=Yc.exports,Jf,cc=Xt;Jf=cc.createRoot,cc.hydrateRoot;function dc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Cg(e){if(Array.isArray(e))return e}function Eg(e,t,n){return(t=Tg(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bg(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,l,s=[],u=!0,f=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(v){f=!0,i=v}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return s}}function jg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fc(Object(n),!0).forEach(function(r){Eg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rg(e,t){if(e==null)return{};var n,r,i=Pg(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Pg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Dg(e,t){return Cg(e)||bg(e,t)||Og(e,t)||jg()}function Ig(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Tg(e){var t=Ig(e,"string");return typeof t=="symbol"?t:t+""}function Og(e,t){if(e){if(typeof e=="string")return dc(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dc(e,t):void 0}}function zg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mc(Object(n),!0).forEach(function(r){zg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function cr(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function uo(e){return{}.toString.call(e).includes("Object")}function Ag(e){return!Object.keys(e).length}function Nr(e){return typeof e=="function"}function Lg(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _g(e,t){return uo(t)||Ut("changeType"),Object.keys(t).some(function(n){return!Lg(e,n)})&&Ut("changeField"),t}function Ng(e){Nr(e)||Ut("selectorType")}function Bg(e){Nr(e)||uo(e)||Ut("handlerType"),uo(e)&&Object.values(e).some(function(t){return!Nr(t)})&&Ut("handlersType")}function Fg(e){e||Ut("initialIsRequired"),uo(e)||Ut("initialType"),Ag(e)&&Ut("initialContent")}function Ug(e,t){throw new Error(e[t]||e.default)}var Wg={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ut=cr(Ug)(Wg),wi={changes:_g,selector:Ng,handler:Bg,initial:Fg};function Hg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};wi.initial(e),wi.handler(t);var n={current:e},r=cr($g)(n,t),i=cr(Gg)(n),o=cr(wi.changes)(e),l=cr(Vg)(n);function s(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(v){return v};return wi.selector(f),f(n.current)}function u(f){Mg(r,i,o,l)(f)}return[s,u]}function Vg(e,t){return Nr(t)?t(e.current):t}function Gg(e,t){return e.current=hc(hc({},e.current),t),t}function $g(e,t,n){return Nr(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Qg={create:Hg},qg={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Kg(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function Yg(e){return{}.toString.call(e).includes("Object")}function Xg(e){return e||gc("configIsRequired"),Yg(e)||gc("configType"),e.urls?(Jg(),{paths:{vs:e.urls.monacoBase}}):e}function Jg(){console.warn(Zf.deprecation)}function Zg(e,t){throw new Error(e[t]||e.default)}var Zf={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},gc=Kg(Zg)(Zf),ey={config:Xg},ty=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,l){return l(o)},i)}};function ep(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ep(e[n],t[n]))}),pc(pc({},e),t)}var ny={type:"cancelation",msg:"operation is manually canceled"};function vl(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(ny):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var ry=["monaco"],iy=Qg.create({config:qg,isInitialized:!1,resolve:null,reject:null,monaco:null}),tp=Dg(iy,2),Vr=tp[0],Ro=tp[1];function oy(e){var t=ey.config(e),n=t.monaco,r=Rg(t,ry);Ro(function(i){return{config:ep(i.config,r),monaco:n}})}function ly(){var e=Vr(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Ro({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),vl(xl);if(window.monaco&&window.monaco.editor)return np(window.monaco),e.resolve(window.monaco),vl(xl);ty(ay,uy)(cy)}return vl(xl)}function ay(e){return document.body.appendChild(e)}function sy(e){var t=document.createElement("script");return e&&(t.src=e),t}function uy(e){var t=Vr(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=sy("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function cy(){var e=Vr(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;np(r),e.resolve(r)},function(n){e.reject(n)})}function np(e){Vr().monaco||Ro({monaco:e})}function dy(){return Vr(function(e){var t=e.monaco;return t})}var xl=new Promise(function(e,t){return Ro({resolve:e,reject:t})}),rp={config:oy,init:ly,__getMonacoInstance:dy},fy={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Sl=fy,py={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},my=py;function hy({children:e}){return Pn.createElement("div",{style:my.container},e)}var gy=hy,yy=gy;function vy({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:l}){return Pn.createElement("section",{style:{...Sl.wrapper,width:e,height:t},...l},!n&&Pn.createElement(yy,null,r),Pn.createElement("div",{ref:i,style:{...Sl.fullWidth,...!n&&Sl.hide},className:o}))}var xy=vy,ip=h.memo(xy);function Sy(e){h.useEffect(e,[])}var op=Sy;function wy(e,t,n=!0){let r=h.useRef(!0);h.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Fe=wy;function Sr(){}function Rn(e,t,n,r){return ky(e,r)||Cy(e,t,n,r)}function ky(e,t){return e.editor.getModel(lp(e,t))}function Cy(e,t,n,r){return e.editor.createModel(t,n,r?lp(e,r):void 0)}function lp(e,t){return e.Uri.parse(t)}function Ey({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:l,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:u=!1,theme:f="light",loading:v="Loading...",options:y={},height:g="100%",width:w="100%",className:b,wrapperProps:k={},beforeMount:W=Sr,onMount:p=Sr}){let[c,m]=h.useState(!1),[S,E]=h.useState(!0),D=h.useRef(null),j=h.useRef(null),z=h.useRef(null),N=h.useRef(p),T=h.useRef(W),K=h.useRef(!1);op(()=>{let F=rp.init();return F.then(q=>(j.current=q)&&E(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>D.current?Ee():F.cancel()}),Fe(()=>{if(D.current&&j.current){let F=D.current.getOriginalEditor(),q=Rn(j.current,e||"",r||n||"text",o||"");q!==F.getModel()&&F.setModel(q)}},[o],c),Fe(()=>{if(D.current&&j.current){let F=D.current.getModifiedEditor(),q=Rn(j.current,t||"",i||n||"text",l||"");q!==F.getModel()&&F.setModel(q)}},[l],c),Fe(()=>{let F=D.current.getModifiedEditor();F.getOption(j.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],c),Fe(()=>{var F,q;(q=(F=D.current)==null?void 0:F.getModel())==null||q.original.setValue(e||"")},[e],c),Fe(()=>{let{original:F,modified:q}=D.current.getModel();j.current.editor.setModelLanguage(F,r||n||"text"),j.current.editor.setModelLanguage(q,i||n||"text")},[n,r,i],c),Fe(()=>{var F;(F=j.current)==null||F.editor.setTheme(f)},[f],c),Fe(()=>{var F;(F=D.current)==null||F.updateOptions(y)},[y],c);let Ie=h.useCallback(()=>{var Te;if(!j.current)return;T.current(j.current);let F=Rn(j.current,e||"",r||n||"text",o||""),q=Rn(j.current,t||"",i||n||"text",l||"");(Te=D.current)==null||Te.setModel({original:F,modified:q})},[n,t,i,e,r,o,l]),ee=h.useCallback(()=>{var F;!K.current&&z.current&&(D.current=j.current.editor.createDiffEditor(z.current,{automaticLayout:!0,...y}),Ie(),(F=j.current)==null||F.editor.setTheme(f),m(!0),K.current=!0)},[y,f,Ie]);h.useEffect(()=>{c&&N.current(D.current,j.current)},[c]),h.useEffect(()=>{!S&&!c&&ee()},[S,c,ee]);function Ee(){var q,Te,P,B;let F=(q=D.current)==null?void 0:q.getModel();s||((Te=F==null?void 0:F.original)==null||Te.dispose()),u||((P=F==null?void 0:F.modified)==null||P.dispose()),(B=D.current)==null||B.dispose()}return Pn.createElement(ip,{width:w,height:g,isEditorReady:c,loading:v,_ref:z,className:b,wrapperProps:k})}var by=Ey;h.memo(by);function jy(e){let t=h.useRef();return h.useEffect(()=>{t.current=e},[e]),t.current}var Ry=jy,ki=new Map;function Py({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:l="light",line:s,loading:u="Loading...",options:f={},overrideServices:v={},saveViewState:y=!0,keepCurrentModel:g=!1,width:w="100%",height:b="100%",className:k,wrapperProps:W={},beforeMount:p=Sr,onMount:c=Sr,onChange:m,onValidate:S=Sr}){let[E,D]=h.useState(!1),[j,z]=h.useState(!0),N=h.useRef(null),T=h.useRef(null),K=h.useRef(null),Ie=h.useRef(c),ee=h.useRef(p),Ee=h.useRef(),F=h.useRef(r),q=Ry(o),Te=h.useRef(!1),P=h.useRef(!1);op(()=>{let M=rp.init();return M.then(A=>(N.current=A)&&z(!1)).catch(A=>(A==null?void 0:A.type)!=="cancelation"&&console.error("Monaco initialization: error:",A)),()=>T.current?U():M.cancel()}),Fe(()=>{var A,le,pe,Oe;let M=Rn(N.current,e||r||"",t||i||"",o||n||"");M!==((A=T.current)==null?void 0:A.getModel())&&(y&&ki.set(q,(le=T.current)==null?void 0:le.saveViewState()),(pe=T.current)==null||pe.setModel(M),y&&((Oe=T.current)==null||Oe.restoreViewState(ki.get(o))))},[o],E),Fe(()=>{var M;(M=T.current)==null||M.updateOptions(f)},[f],E),Fe(()=>{!T.current||r===void 0||(T.current.getOption(N.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(P.current=!0,T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop(),P.current=!1))},[r],E),Fe(()=>{var A,le;let M=(A=T.current)==null?void 0:A.getModel();M&&i&&((le=N.current)==null||le.editor.setModelLanguage(M,i))},[i],E),Fe(()=>{var M;s!==void 0&&((M=T.current)==null||M.revealLine(s))},[s],E),Fe(()=>{var M;(M=N.current)==null||M.editor.setTheme(l)},[l],E);let B=h.useCallback(()=>{var M;if(!(!K.current||!N.current)&&!Te.current){ee.current(N.current);let A=o||n,le=Rn(N.current,r||e||"",t||i||"",A||"");T.current=(M=N.current)==null?void 0:M.editor.create(K.current,{model:le,automaticLayout:!0,...f},v),y&&T.current.restoreViewState(ki.get(A)),N.current.editor.setTheme(l),s!==void 0&&T.current.revealLine(s),D(!0),Te.current=!0}},[e,t,n,r,i,o,f,v,y,l,s]);h.useEffect(()=>{E&&Ie.current(T.current,N.current)},[E]),h.useEffect(()=>{!j&&!E&&B()},[j,E,B]),F.current=r,h.useEffect(()=>{var M,A;E&&m&&((M=Ee.current)==null||M.dispose(),Ee.current=(A=T.current)==null?void 0:A.onDidChangeModelContent(le=>{P.current||m(T.current.getValue(),le)}))},[E,m]),h.useEffect(()=>{if(E){let M=N.current.editor.onDidChangeMarkers(A=>{var pe;let le=(pe=T.current.getModel())==null?void 0:pe.uri;if(le&&A.find(Oe=>Oe.path===le.path)){let Oe=N.current.editor.getModelMarkers({resource:le});S==null||S(Oe)}});return()=>{M==null||M.dispose()}}return()=>{}},[E,S]);function U(){var M,A;(M=Ee.current)==null||M.dispose(),g?y&&ki.set(o,T.current.saveViewState()):(A=T.current.getModel())==null||A.dispose(),T.current.dispose()}return Pn.createElement(ip,{width:w,height:b,isEditorReady:E,loading:u,_ref:K,className:k,wrapperProps:W})}var Dy=Py,Iy=h.memo(Dy),Ty=Iy;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...s},u)=>h.createElement("svg",{ref:u,...zy,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ap("lucide",i),...s},[...l.map(([f,v])=>h.createElement(f,v)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(e,t)=>{const n=h.forwardRef(({className:r,...i},o)=>h.createElement(My,{ref:o,iconNode:t,className:ap(`lucide-${Oy(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=G("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=G("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=G("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=G("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=G("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=G("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=G("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=G("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=G("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=G("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=G("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=G("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=G("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=G("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=G("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=G("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=G("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=G("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=G("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=G("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=G("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=G("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=G("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=G("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=G("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Uy=200;function Wy(e){Nc.initialize({startOnLoad:!1,securityLevel:"loose",suppressErrorRendering:!0,theme:"base",themeVariables:{darkMode:!0,background:(e==null?void 0:e.background)??"#141414",primaryColor:(e==null?void 0:e.primaryColor)??"#2d3748",primaryTextColor:(e==null?void 0:e.primaryTextColor)??"#e2e8f0",lineColor:(e==null?void 0:e.lineColor)??"#4a5568"}})}function Hy(e){let t,n,r=e;const i=r.match(/\bB\[#([0-9A-Fa-f]{6})\]/);i&&(t="#"+i[1],r=r.replace(/\bB\[#([0-9A-Fa-f]{6})\]\s*/g,""));const o=r.match(/\bF\[#([0-9A-Fa-f]{6})\]/);return o&&(n="#"+o[1],r=r.replace(/\bF\[#([0-9A-Fa-f]{6})\]\s*/g,"")),{code:r.trim(),background:t,foreground:n}}function Vy(e,t,n=Uy,r=!1){const[i,o]=h.useState(null),[l,s]=h.useState(null),[u,f]=h.useState(null),[v,y]=h.useState(!1),g=h.useRef(0);return h.useEffect(()=>{if(r)return;if(!e.trim()){o(null),s(null),f(null),y(!1);return}y(!0),f(null);const w=async()=>{const{code:b,background:k,foreground:W}=Hy(e),p={...t,...k!=null&&{background:k},...W!=null&&{primaryTextColor:W}};try{Wy(p);const c=`mermaid-${Date.now()}-${Math.random().toString(36).slice(2)}`,{svg:m}=await Nc.render(c,b);o(m),s(m),f(null)}catch(c){const m=c instanceof Error?c.message:String(c);f(m),o(null)}y(!1)};return g.current=setTimeout(w,n),()=>clearTimeout(g.current)},[e,t,n,r]),{svg:i,lastValidSvg:l,error:u,loading:v}}const sp="diagramium-code",up=h.createContext(null),zc=`flowchart LR
  A --> B`;function Gy({children:e,initialCode:t=zc}){const n=t??zc,[[r,i],o]=h.useState(()=>[[n],0]),l=r[i]??n;h.useEffect(()=>{try{localStorage.setItem(sp,l)}catch{}},[l]);const s=h.useCallback(g=>{o(([w,b])=>{const k=w[b]??"";if(g===k)return[w,b];const W=[...w.slice(0,b+1),g].slice(-50);return[W,W.length-1]})},[]),u=h.useCallback(()=>{o(([g,w])=>w>0?[g,w-1]:[g,w])},[]),f=h.useCallback(()=>{o(([g,w])=>w<g.length-1?[g,w+1]:[g,w])},[]),v=i>0,y=i<r.length-1;return a.jsx(up.Provider,{value:{code:l,setCode:s,undo:u,redo:f,canUndo:v,canRedo:y},children:e})}function $y(){const e=h.useContext(up);if(!e)throw new Error("useDiagram must be used within DiagramProvider");return e}function Po(){if(typeof navigator>"u")return!1;const e=navigator.userAgent||"";return/iPhone|iPad|iPod|Android/i.test(e)}function Qy(e){let t=e;t=t.replace(/<rect[^>]+class="mermaid-svg-background"[^>]*>\s*<\/rect>/gi,""),t=t.replace(/<rect[^>]+width="100%"[^>]+height="100%"[^>]*>\s*<\/rect>/gi,"");const n=t.match(/<svg[^>]*>/i);if(n){const r=n[0];let i=r.replace(/^<svg/i,"").replace(/>$/,""),o=null,l=null;const s=i.match(/viewBox="([^"]+)"/i);if(s){const f=s[1].trim().split(/\s+/);f.length===4&&(o=f[2],l=f[3])}if(!o||!l){const f=i.match(/width="([^"]+)"/i),v=i.match(/height="([^"]+)"/i);f&&v&&(o=f[1],l=v[1])}o&&l&&(/width="[^"]*"/i.test(i)?i=i.replace(/width="[^"]*"/i,`width="${o}"`):i+=` width="${o}"`,/height="[^"]*"/i.test(i)?i=i.replace(/height="[^"]*"/i,`height="${l}"`):i+=` height="${l}"`),/preserveAspectRatio=/i.test(i)||(i+=' preserveAspectRatio="xMidYMid meet"'),/style="/i.test(i)?i=i.replace(/style="([^"]*)"/i,(f,v)=>`style="${v.replace(/background[^;"]*;?/gi,"").replace(/fill:[^;"]*;?/gi,"")} background-color: transparent;"`):i+=' style="background-color: transparent;"',i=i.replace(/\sfill="[^"]*"/gi,"");const u=`<svg${i}>`;t=t.replace(r,u)}return t}function Do(e,t,n=!0){const r=document.createElement("a");r.href=e,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),n&&setTimeout(()=>URL.revokeObjectURL(e),1e3)}function qy(e,t="diagram.svg"){const n=Qy(e),r=new Blob([n],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(r);Po()?(window.open(i,"_blank"),setTimeout(()=>URL.revokeObjectURL(i),1e3)):Do(i,t)}function cp(e,t=2){return new Promise((n,r)=>{const i=new Image,o=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),l=URL.createObjectURL(o);i.onload=()=>{const s=i.width*t,u=i.height*t,f=document.createElement("canvas");f.width=s,f.height=u;const v=f.getContext("2d");if(!v){URL.revokeObjectURL(l),r(new Error("Canvas context not available"));return}v.drawImage(i,0,0,s,u),f.toBlob(y=>{URL.revokeObjectURL(l),y?n(y):r(new Error("toBlob failed"))},"image/png",1)},i.onerror=()=>{URL.revokeObjectURL(l),r(new Error("Image load failed"))},i.src=l})}async function Ky(e,t="diagram.png",n=2){const r=await cp(e,n);if(Po()){const i=await new Promise((o,l)=>{const s=new FileReader;s.onload=()=>o(s.result),s.onerror=l,s.readAsDataURL(r)});window.open(i,"_blank")}else{const i=URL.createObjectURL(r);Do(i,t),setTimeout(()=>URL.revokeObjectURL(i),1e3)}}function Yy(e,t="diagram.md"){const n="```mermaid\n"+e+"\n```",r=new Blob([n],{type:"text/markdown;charset=utf-8"}),i=URL.createObjectURL(r);Po()?(window.open(i,"_blank"),setTimeout(()=>URL.revokeObjectURL(i),1e3)):Do(i,t)}function Xy(e,t="diagram.mmd"){const n=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(n);Po()?(window.open(r,"_blank"),setTimeout(()=>URL.revokeObjectURL(r),1e3)):Do(r,t)}const Mc=["Flowchart","Processes","Sequence","Class","State","ER","Gantt","Pie","Chart","Journey","Block","Quadrant","Mindmap","Timeline","Git","Starter","Others"];function Ac(e){const t=e.id;return t.startsWith("flow-")?"Flowchart":t.startsWith("process-")?"Processes":t.startsWith("sequence-")?"Sequence":t.startsWith("class-")?"Class":t.startsWith("state-")?"State":t.startsWith("er-")?"ER":t.startsWith("gantt-")?"Gantt":t.startsWith("pie-")?"Pie":t.startsWith("journey-")?"Journey":t.startsWith("block-")?"Block":t==="quadrant"||t.startsWith("quadrant-")?"Quadrant":t.startsWith("chart-")||t.startsWith("xy-")?"Chart":t.startsWith("mindmap")?"Mindmap":t.startsWith("timeline")?"Timeline":t.startsWith("git")?"Git":t==="blank"?"Starter":"Others"}const Jy=[{id:"flow-lr",name:"Flowchart LR",code:`flowchart LR
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
`}];function Zy(e){var o;const t=e.trim();if(!t)return"";const n=((o=t.split(`
`)[0])==null?void 0:o.trim())??"",r=n.toLowerCase(),i=n.match(/^(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|quadrantChart|requirementDiagram|mindmap|timeline|gitGraph|block|C4|sankey-beta|packet|sankey)\b/i);if(i){const l=i[1];return l==="graph"||l==="flowchart"?"Flowchart":l.charAt(0).toUpperCase()+l.slice(1).replace(/-([a-z])/g,(s,u)=>" "+u.toUpperCase())}return r.startsWith("flowchart")||r.startsWith("graph ")?"Flowchart":""}function ev(e){const t=e.match(/(?:line\s+)?(\d+)(?:\s*[:\s]|$)/i)||e.match(/\b(\d+)\s*:/);if(t){const n=parseInt(t[1],10);return n>=1?n:null}return null}function or(e,t="diagram"){var i;const n=(i=e.split(`
`)[0])==null?void 0:i.trim();return n&&n.replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").slice(0,40).trim()||t}const Ei="Diagramium",Lc="0.1.0",jt=48,Tl=30,_i=15,Ni=70,Ol="diagramium-saved",Pa="diagramium-ui",zl="diagramium-hint-seen",Da="diagramium-recent-examples",_c=10,tv=10,dp=10,nv=[200,500,1e3],rv=768;function iv(e){const[t,n]=h.useState(()=>typeof window<"u"&&window.matchMedia(e).matches);return h.useEffect(()=>{const r=window.matchMedia(e),i=()=>n(r.matches);return r.addEventListener("change",i),n(r.matches),()=>r.removeEventListener("change",i)},[e]),t}function ov(){try{const e=localStorage.getItem(Pa);if(!e)return{leftPct:Tl,darkMode:!0,renderDebounceMs:200};const t=JSON.parse(e);return{leftPct:typeof t.leftPct=="number"?Math.max(_i,Math.min(Ni,t.leftPct)):Tl,darkMode:typeof t.darkMode=="boolean"?t.darkMode:!0,renderDebounceMs:[200,500,1e3].includes(Number(t.renderDebounceMs))?Number(t.renderDebounceMs):200}}catch{return{leftPct:Tl,darkMode:!0,renderDebounceMs:200}}}function lv(){try{const e=localStorage.getItem(Da);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t.slice(0,dp):[]}catch{return[]}}const av={backgroundColor:"transparent",borderEnabled:!1,borderColor:"#404040",borderWidth:1},mn={background:"#141414",primaryColor:"#2d3748",primaryTextColor:"#e2e8f0",lineColor:"#4a5568"},Ml=["#141414","#1a1a1a","#262626","#404040","#525252","#737373","#a3a3a3","#d4d4d4","#e5e5e5","#ffffff","#3b82f6","#2563eb","#1d4ed8","#60a5fa","#93c5fd","#1e3a8a","#1e40af","#22c55e","#16a34a","#15803d","#4ade80","#86efac","#14532d","#166534","#e11d48","#b91c1c","#dc2626","#f87171","#fca5a5","#7f1d1d","#991b1b","#a855f7","#7c3aed","#6d28d9","#c084fc","#d8b4fe","#4c1d95","#5b21b6","#f59e0b","#d97706","#b45309","#fbbf24","#fcd34d","#78350f","#92400e","#06b6d4","#0891b2","#0e7490","#22d3ee","#67e8f9","#164e63","#155e75"];function sv(){const{code:e,setCode:t,undo:n,redo:r,canUndo:i,canRedo:o}=$y(),l=iv(`(max-width: ${rv}px)`),[s,u]=h.useState(!1),f=h.useCallback(()=>u(!0),[]),v=h.useCallback(()=>{t(""),u(!1)},[t]),y=ov(),[g,w]=h.useState(y.leftPct),[b,k]=h.useState(!1),[W,p]=h.useState(!1),[c,m]=h.useState({...av}),[S,E]=h.useState({...mn}),[D,j]=h.useState(!1),[z,N]=h.useState(!1),[T,K]=h.useState(!1),[Ie,ee]=h.useState(!1),[Ee,F]=h.useState(!1),[q,Te]=h.useState(""),[P,B]=h.useState(""),[U,M]=h.useState(!1),[A,le]=h.useState(y.darkMode),[pe,Oe]=h.useState(null),[Ze,ge]=h.useState(!1),[Io,ze]=h.useState(!1),[dn,fp]=h.useState(!1),[Gr,pp]=h.useState(!1),[$r,To]=h.useState(()=>{try{const d=localStorage.getItem(Ol);if(!d)return[];const x=JSON.parse(d);return Array.isArray(x)?x.slice(0,_c):[]}catch{return[]}}),[Oo,Es]=h.useState([]),[Qr,mp]=h.useState(y.renderDebounceMs),[Et,hp]=h.useState(lv),zo=h.useRef(null),bs=h.useRef(null),js=h.useRef(()=>{}),Mo=h.useRef(null),Rs=h.useRef(null),Ao=h.useRef(null),Ps=h.useRef(null),Ds=h.useRef(null),{svg:pt,lastValidSvg:Is,error:$e,loading:Ts}=Vy(e,S,Qr,dn),$=$e?Is:pt,Os=h.useMemo(()=>Zy(e),[e]),Lo=h.useRef(null),[qr,Qt]=h.useState(1),[_o,Gn]=h.useState(0),[No,$n]=h.useState(0),Qn=h.useRef(null),qn=h.useRef(null),Bo=h.useRef(qr);Bo.current=qr;const zs=h.useRef(_o);zs.current=_o;const Ms=h.useRef(No);Ms.current=No;const Kr=40,As=.25,gp=.0012,Yr=.25,Xr=4,[Fo,Ls]=h.useState(!1),Jr=h.useRef({x:0,y:0}),[Zr,_s]=h.useState({}),Ns=h.useRef(Zr);Ns.current=Zr;const[ei,Bs]=h.useState(null),Fs=h.useRef({x:0,y:0,offsetX:0,offsetY:0});h.useEffect(()=>{document.documentElement.setAttribute("data-theme",A?"dark":"light")},[A]),h.useEffect(()=>{try{localStorage.setItem(Ol,JSON.stringify($r))}catch{}},[$r]),h.useEffect(()=>{try{localStorage.setItem(Pa,JSON.stringify({leftPct:g,darkMode:A,renderDebounceMs:Qr}))}catch{}},[g,A,Qr]),h.useEffect(()=>{try{localStorage.setItem(Da,JSON.stringify(Et))}catch{}},[Et]),h.useEffect(()=>{const d=x=>{var _,L,ae;const R=(_=Ao.current)==null?void 0:_.contains(x.target),I=((L=Ps.current)==null?void 0:L.contains(x.target))||((ae=Ds.current)==null?void 0:ae.contains(x.target));R||k(!1),I||j(!1)};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[]),h.useEffect(()=>{const d=x=>{if(x.key==="Escape"){u(!1),k(!1),j(!1),N(!1),ee(!1),K(!1),ze(!1);return}(x.ctrlKey||x.metaKey)&&(x.key==="z"?(x.preventDefault(),x.shiftKey?r():n()):x.key==="y"?(x.preventDefault(),r()):x.key==="s"&&(x.preventDefault(),js.current()))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[n,r]);const Uo=h.useCallback(d=>d==="panelBg"?c.backgroundColor==="transparent"?"#141414":c.backgroundColor:d==="borderColor"?c.borderColor:d==="svgBg"?S.background??mn.background:d==="nodeFill"?S.primaryColor??mn.primaryColor:d==="nodeText"?S.primaryTextColor??mn.primaryTextColor:d==="lineColor"?S.lineColor??mn.lineColor:"#141414",[c,S]),fn=h.useCallback((d,x)=>{const R=/^#[0-9A-Fa-f]{6}$/.test(x)?x:"#141414";d==="panelBg"&&m(I=>({...I,backgroundColor:x==="transparent"?"transparent":R})),d==="borderColor"&&m(I=>({...I,borderColor:R})),d==="svgBg"&&E(I=>({...I,background:R})),d==="nodeFill"&&E(I=>({...I,primaryColor:R})),d==="nodeText"&&E(I=>({...I,primaryTextColor:R})),d==="lineColor"&&E(I=>({...I,lineColor:R}))},[]),H=h.useCallback(d=>{Oe(d)},[]),yp=h.useCallback(()=>{try{localStorage.removeItem("diagramium-code"),localStorage.removeItem(Ol),localStorage.removeItem(Pa),localStorage.removeItem(zl),localStorage.removeItem(Da)}catch{}To([]),Es([]),t(""),N(!1),H("All data cleared")},[t,H]);h.useEffect(()=>{if(!pe)return;const d=setTimeout(()=>Oe(null),2500);return()=>clearTimeout(d)},[pe]),h.useEffect(()=>{if(typeof localStorage>"u"||localStorage.getItem(zl))return;const d=setTimeout(()=>{Oe("Use Examples to insert a template"),setTimeout(()=>{try{localStorage.setItem(zl,"1")}catch{}},2500)},1500);return()=>clearTimeout(d)},[]),h.useEffect(()=>{if(!s||!Mo.current)return;const d=Mo.current,x=d.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),R=x[0],I=x[x.length-1];R==null||R.focus();const _=L=>{L.key==="Tab"&&(L.shiftKey?document.activeElement===R&&(L.preventDefault(),I==null||I.focus()):document.activeElement===I&&(L.preventDefault(),R==null||R.focus()))};return d.addEventListener("keydown",_),()=>{d.removeEventListener("keydown",_);const L=zo.current;requestAnimationFrame(()=>L==null?void 0:L.focus())}},[s]);const Us=h.useCallback(()=>{$&&qy($,or(e,"diagram")+".svg"),k(!1),$&&H("Downloaded SVG")},[$,e,H]),ti=h.useCallback(async(d=2)=>{const x=d===2?3:1.5;$&&await Ky($,or(e,"diagram")+".png",x),k(!1),$&&H("Downloaded PNG")},[$,e,H]),Ws=h.useCallback(()=>{Yy(e,or(e,"diagram")+".md"),k(!1),H("Downloaded .md")},[e,H]),Hs=h.useCallback(()=>{Xy(e,or(e,"diagram")+".mmd"),k(!1),H("Downloaded .mmd")},[e,H]),vp=h.useCallback(async()=>{if($e)try{await navigator.clipboard.writeText($e),H("Error copied")}catch{H("Copy failed")}},[$e,H]),xp=h.useCallback(()=>{if(!$e)return;const d=ev($e),x=bs.current;x&&d!=null&&(x.revealLine(d),x.setPosition({lineNumber:d,column:1}),x.focus())},[$e]),Vs=h.useCallback(()=>{const d=or(e,"diagram")||"diagram",x=`saved-${Date.now()}-${Math.random().toString(36).slice(2)}`;To(R=>[{id:x,name:d,code:e,ts:Date.now()},...R].slice(0,_c)),ze(!0),H("Saved")},[e,H]);js.current=Vs;const Sp=h.useCallback(d=>{t(d.code),ze(!1),H("Opened")},[t,H]),wp=h.useCallback(d=>{To(x=>x.filter(R=>R.id!==d))},[]),kp=h.useCallback(()=>{Es(d=>[e,...d].slice(0,tv)),H("Snapshot saved")},[e,H]),Cp=h.useCallback(d=>{t(d),H("Restored")},[t,H]),Gs=h.useCallback(async()=>{var I,_;if(!$)return;let d;try{d=await cp($,2)}catch{H("Copy failed");return}if((I=navigator.clipboard)!=null&&I.write)try{await navigator.clipboard.write([new ClipboardItem({"image/png":d})]),H("Copied image"),k(!1);return}catch{}const x=new File([d],"diagram.png",{type:"image/png"});if(typeof navigator<"u"&&navigator.share&&((_=navigator.canShare)!=null&&_.call(navigator,{files:[x]})))try{await navigator.share({files:[x],title:"Diagram"}),H("Shared"),k(!1);return}catch(L){if(L.name==="AbortError")return}const R=await new Promise((L,ae)=>{const se=new FileReader;se.onload=()=>L(se.result),se.onerror=ae,se.readAsDataURL(d)});window.open(R,"_blank"),H("Opened — long-press image to copy or save"),k(!1)},[$,H]),$s=h.useCallback(async()=>{const d="```mermaid\n"+e+"\n```";try{await navigator.clipboard.writeText(d),H("Copied as Markdown"),k(!1)}catch{H("Copy failed")}},[e,H]),Qs=h.useCallback(async()=>{try{await navigator.clipboard.writeText(e),H("Copied code"),k(!1)}catch{H("Copy failed")}},[e,H]),qs=h.useCallback(async()=>{try{const d=btoa(unescape(encodeURIComponent(e))),x=window.location.origin+window.location.pathname+"#d/"+d;await navigator.clipboard.writeText(x),H("Link copied"),k(!1)}catch{H("Copy failed")}},[e,H]),Ks=h.useCallback(()=>{if(!$)return;const d=window.open("","_blank");if(!d){H("Popup blocked");return}d.document.write(`
      <!DOCTYPE html><html><head><title>Diagram</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff;} svg{max-width:100%;height:auto;}</style></head>
      <body>${$}</body></html>
    `),d.document.close(),d.focus(),setTimeout(()=>{d.print(),d.close()},300),k(!1),H("Print dialog opened")},[$,H]),Ys=h.useCallback(()=>{var d;(d=Rs.current)==null||d.click()},[]),Ep=h.useCallback(d=>{var I;const x=(I=d.target.files)==null?void 0:I[0];if(!x)return;const R=new FileReader;R.onload=()=>{const _=typeof R.result=="string"?R.result:"",L=_.replace(/^[\s\S]*?```mermaid\n?/,"").replace(/\n?```[\s\S]*$/,"").trim()||_.trim();t(L),k(!1)},R.readAsText(x),d.target.value=""},[t]),bp=h.useCallback(()=>{const d=e.split(`
`).map(I=>I.trimEnd()),x=[];let R=!1;for(const I of d){const _=I==="";_&&R||(R=_,x.push(I))}t(x.join(`
`).trim())},[e,t]),jp=h.useCallback(()=>Qt(d=>Math.min(Xr,d+As)),[]),Rp=h.useCallback(()=>Qt(d=>Math.max(Yr,d-As)),[]),Pp=h.useCallback(()=>{Gn(0),$n(0);const d=Qn.current,x=qn.current;if(d&&x){const R=x.querySelector("svg");if(R){const I=d.getBoundingClientRect(),_=R.getBoundingClientRect(),L=Bo.current,ae=Math.max(1,_.width/L),se=I.width*.95/ae;Qt(Math.max(Yr,Math.min(Xr,se)));return}}Qt(1)},[]),ni=h.useCallback((d,x)=>{Gn(R=>R+d),$n(R=>R+x)},[]),Dp=h.useCallback(d=>{var x,R;d.button===0&&((R=(x=d.target)==null?void 0:x.closest)!=null&&R.call(x,"g[data-id]")||(Ls(!0),Jr.current={x:d.clientX,y:d.clientY}))},[]);h.useEffect(()=>{if(!Fo)return;const d=R=>{const I=R.clientX-Jr.current.x,_=R.clientY-Jr.current.y;Jr.current={x:R.clientX,y:R.clientY},Gn(L=>L+I),$n(L=>L+_)},x=()=>Ls(!1);return window.addEventListener("mousemove",d),window.addEventListener("mouseup",x),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",x)}},[Fo]);const Wo=h.useCallback(d=>{d.preventDefault();const x=Qn.current,R=-d.deltaY*gp,I=Bo.current,_=Math.max(Yr,Math.min(Xr,I+R));if(x&&_!==I){const L=x.getBoundingClientRect(),ae=24,se=d.clientX-L.left-ae,at=d.clientY-L.top-ae,ri=zs.current,qt=Ms.current,Vo=(se-ri)/I,Go=(at-qt)/I;Gn(ri+Vo*(I-_)),$n(qt+Go*(I-_))}Qt(_)},[]);h.useEffect(()=>{if(!$)return;const d=Qn.current;if(d)return d.addEventListener("wheel",Wo,{passive:!1}),()=>d.removeEventListener("wheel",Wo)},[Wo,$]),h.useEffect(()=>{pt&&_s({})},[pt]),h.useEffect(()=>{const d=qn.current;if(!d||!pt)return;const x=d.querySelector("svg");if(!x)return;x.querySelectorAll("g[data-id]").forEach(I=>{const _=I.getAttribute("data-id");if(!_)return;const L=Zr[_];I.style.transform=L?`translate(${L.x}px, ${L.y}px)`:"",I.style.cursor="grab",I.style.transformOrigin="0 0"})},[pt,Zr]),h.useEffect(()=>{const d=qn.current;if(!d||!pt)return;const x=d.querySelector("svg");if(!x)return;const R=x.querySelectorAll("g[data-id]"),I=[];return R.forEach(_=>{const L=_.getAttribute("data-id");if(!L)return;const ae=se=>{if(se.button!==0)return;se.stopPropagation(),se.preventDefault(),Bs(L);const at=Ns.current[L];Fs.current={x:se.clientX,y:se.clientY,offsetX:(at==null?void 0:at.x)??0,offsetY:(at==null?void 0:at.y)??0}};_.addEventListener("mousedown",ae),I.push(()=>_.removeEventListener("mousedown",ae))}),()=>I.forEach(_=>_())},[pt]),h.useEffect(()=>{if(ei===null)return;const d=R=>{const{x:I,y:_,offsetX:L,offsetY:ae}=Fs.current;_s(se=>({...se,[ei]:{x:L+(R.clientX-I),y:ae+(R.clientY-_)}}))},x=()=>Bs(null);return window.addEventListener("mousemove",d),window.addEventListener("mouseup",x),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",x)}},[ei]),h.useEffect(()=>{if(!pt)return;Gn(0),$n(0);const d=()=>{var eu;const I=Qn.current,_=qn.current;if(!I||!_)return;const L=_.querySelector("svg");if(!L)return;const ae=I.getBoundingClientRect(),se=48,at=Math.max(1,ae.width-se),ri=Math.max(1,ae.height-se),qt=(eu=L.getBBox)==null?void 0:eu.call(L),Vo=qt?Math.max(1,qt.width):L.getBoundingClientRect().width||1,Go=qt?Math.max(1,qt.height):L.getBoundingClientRect().height||1,Tp=at/Vo,Op=ri/Go,zp=Math.min(Tp,Op)*.95,Mp=Math.max(Yr,Math.min(Xr,zp));Qt(Mp)},x=setTimeout(d,0),R=setTimeout(d,150);return()=>{clearTimeout(x),clearTimeout(R)}},[pt]);const Xs=h.useCallback(d=>{const x=I=>{const _=Lo.current;if(!_)return;const L=_.getBoundingClientRect(),ae=d?Math.min(Ni,Math.max(_i,(I.clientY-L.top)/L.height*100)):Math.min(Ni,Math.max(_i,(I.clientX-L.left)/L.width*100));w(ae)},R=()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",R),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",x),document.addEventListener("mouseup",R),document.body.style.cursor=d?"row-resize":"col-resize",document.body.style.userSelect="none"},[]),Js=h.useCallback(()=>{Xs(l)},[l,Xs]),Ip=h.useCallback(d=>{t(d.code),hp(x=>[d.id,...x.filter(R=>R!==d.id)].slice(0,dp)),Ee||ee(!1)},[t,Ee]),Ho=h.useMemo(()=>{const d=q.trim().toLowerCase(),x=P;return Jy.filter(R=>{var L;const I=!x||(x==="Recent"?Et.includes(R.id):Ac(R)===x),_=!d||R.name.toLowerCase().includes(d)||(((L=R.code.split(`
`)[0])==null?void 0:L.trim())??"").toLowerCase().includes(d)||R.id.toLowerCase().includes(d);return I&&_})},[q,P,Et]),Zs=h.useMemo(()=>(P?[P]:[...Et.length>0?["Recent"]:[],...Mc]).map(x=>({category:x,items:x==="Recent"?Ho.filter(R=>Et.includes(R.id)):Ho.filter(R=>Ac(R)===x)})).filter(x=>x.items.length>0),[Ho,P,Et]),be={minWidth:40,minHeight:40,padding:0,display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:8,background:"transparent",color:"var(--text)",cursor:"pointer",transition:"background 0.15s"},Kn={position:"fixed",...l?{top:"calc(env(safe-area-inset-top, 0px) + "+(jt+52)+"px)",left:"10vw",right:"10vw",maxWidth:420,bottom:"max(env(safe-area-inset-bottom, 0px) + 8px, 8px)"}:{left:56,top:jt,bottom:0,width:z||Ze||Io?320:Ie?300:320},zIndex:50,background:"var(--surface)",borderLeft:l?"none":"1px solid var(--border)",boxShadow:l?"0 0 24px rgba(0,0,0,0.4)":"4px 0 24px rgba(0,0,0,0.3)",display:"flex",flexDirection:"column",overflow:"hidden"};return a.jsxs(a.Fragment,{children:[pe&&Xt.createPortal(a.jsx("div",{role:"status","aria-live":"polite",style:{position:"fixed",bottom:24,right:24,zIndex:300,padding:"10px 16px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.3)",fontSize:12,color:"var(--text)"},children:pe}),document.body),s&&Xt.createPortal(a.jsx("div",{ref:Mo,role:"dialog","aria-modal":"true","aria-labelledby":"reset-confirm-title",style:{position:"fixed",inset:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.5)",padding:24},onClick:()=>u(!1),children:a.jsxs("div",{style:{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 16px 48px rgba(0,0,0,0.4)",padding:20,maxWidth:360,width:"100%"},onClick:d=>d.stopPropagation(),children:[a.jsx("h2",{id:"reset-confirm-title",style:{margin:"0 0 10px",fontSize:14,fontWeight:600,color:"var(--text)"},children:"Clear editor?"}),a.jsx("p",{style:{margin:"0 0 20px",fontSize:12,color:"var(--muted)",lineHeight:1.5},children:"This will clear the editor and diagram. This cannot be undone."}),a.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[a.jsx("button",{type:"button",onClick:()=>u(!1),style:{padding:"8px 14px",fontSize:12,border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer"},children:"Cancel"}),a.jsx("button",{type:"button",onClick:v,style:{padding:"8px 14px",fontSize:12,border:"none",borderRadius:6,background:"var(--accent)",color:"#fff",cursor:"pointer"},children:"Clear"})]})]})}),document.body),l&&U&&Xt.createPortal(a.jsx("div",{style:{position:"fixed",top:"calc(env(safe-area-inset-top, 0px) + "+(jt+40)+"px)",right:10,zIndex:45,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,padding:6,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,boxShadow:"0 4px 20px rgba(0,0,0,0.35)"},children:U?a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",onClick:()=>{M(!1),N(!0),ee(!1),ze(!1),ge(!1),K(!1)},title:"About","aria-label":"About",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:[a.jsx("span",{children:"About"}),a.jsx(jl,{size:16})]}),a.jsxs("button",{type:"button",onClick:()=>{M(!1),ee(!0),N(!1),ze(!1),ge(!1),K(!1)},title:"Examples","aria-label":"Examples",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:[a.jsx("span",{children:"Examples"}),a.jsx(wl,{size:16})]}),a.jsxs("button",{type:"button",onClick:()=>{M(!1),ze(!0),N(!1),ee(!1),ge(!1),K(!1)},title:"Saved & history","aria-label":"Saved and history",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:[a.jsx("span",{children:"Saved"}),a.jsx(Ci,{size:16})]}),a.jsxs("button",{type:"button",onClick:()=>{M(!1),ge(!0),N(!1),ee(!1),ze(!1),K(!1)},title:"Syntax","aria-label":"Syntax",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:[a.jsx("span",{children:"Syntax"}),a.jsx(bl,{size:16})]}),a.jsxs("button",{type:"button",onClick:()=>{M(!1),K(!0),N(!1),ee(!1),ze(!1),ge(!1)},title:"How to use","aria-label":"How to use",style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:[a.jsx("span",{children:"How to"}),a.jsx(Cl,{size:16})]}),a.jsx("span",{style:{width:"100%",height:1,background:"var(--border)",margin:"4px 0"},"aria-hidden":"true"}),a.jsx("button",{type:"button",onClick:()=>M(!1),title:"Collapse","aria-label":"Collapse bar",style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"4px 6px",border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:11},children:a.jsx(kl,{size:14})})]}):null}),document.body),a.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minHeight:0,height:"100vh"},children:[a.jsx("div",{style:{flexShrink:0,height:l?"calc(env(safe-area-inset-top, 0px) + "+jt+"px)":jt},"aria-hidden":"true"}),a.jsxs("div",{ref:Lo,className:`split-pane ${l?"split-pane-mobile":""}`,style:{flex:1,minHeight:0,width:"100%",position:"relative",zIndex:0,isolation:"isolate",display:"flex",...l?{flexDirection:"column"}:{}},children:[a.jsxs("div",{className:"pane pane-left",style:{display:"flex",flexDirection:"row",overflow:"hidden",position:"relative",zIndex:0,borderRight:l?"none":"1px solid var(--border)",borderBottom:l&&!W?"1px solid var(--border)":"none",...W?l?{flex:"0 0 auto",width:"100%",height:0,minHeight:0}:{flex:"0 0 auto",width:56,minWidth:56,maxWidth:56,minHeight:0}:l?{flex:"0 0 auto",width:"100%",height:`${g}%`,minHeight:80,maxHeight:"85%"}:{flex:"0 0 auto",width:`${g}%`,minWidth:120,maxWidth:"85%",minHeight:0}},children:[!l&&a.jsxs("div",{className:"frame-toolbar",style:{width:56,flexShrink:0,borderRight:"1px solid var(--border)",background:"var(--surface)",display:"flex",flexDirection:"column",alignItems:"center",padding:"8px 0",gap:2},children:[a.jsx("button",{type:"button",style:be,onClick:()=>{ee(!1),K(!1),ge(!1),ze(!1),N(d=>!d)},title:"About","aria-label":"About",children:a.jsx(jl,{size:20})}),a.jsx("button",{type:"button",style:be,onClick:()=>{N(!1),K(!1),ge(!1),ze(!1),ee(d=>!d)},title:"Examples","aria-label":"Examples",children:a.jsx(wl,{size:20})}),a.jsx("button",{type:"button",style:be,onClick:()=>{N(!1),ee(!1),K(!1),ge(!1),ze(d=>!d)},title:"Saved & history","aria-label":"Saved and history",children:a.jsx(Ci,{size:20})}),a.jsx("span",{style:{width:"100%",height:1,background:"var(--border)",margin:"4px 8px 0",flexShrink:0},"aria-hidden":"true"}),a.jsx("button",{type:"button",style:be,onClick:()=>{N(!1),ee(!1),ze(!1),K(!1),ge(d=>!d)},title:"Syntax cheat sheet","aria-label":"Syntax",children:a.jsx(bl,{size:20})}),a.jsx("button",{type:"button",style:be,onClick:()=>{N(!1),ee(!1),ge(!1),ze(!1),K(d=>!d)},title:"How to use","aria-label":"How to use",children:a.jsx(Cl,{size:20})})]}),!W&&a.jsxs("div",{className:"editor-column",style:{flex:1,minWidth:0,minHeight:0,display:"flex",flexDirection:"column",background:"var(--surface)",position:"relative",zIndex:0,overflow:"hidden"},children:[a.jsxs("div",{style:{flexShrink:0,padding:"2px 10px",borderBottom:"1px solid var(--border)",background:"var(--surface)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:11,color:"var(--text)",fontWeight:500},children:"Editor — enter Mermaid code"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:4,fontSize:10,color:"var(--muted)"},children:["Render:",a.jsx("select",{value:Qr,onChange:d=>mp(Number(d.target.value)),style:{padding:"2px 6px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:10,cursor:"pointer"},children:nv.map(d=>a.jsxs("option",{value:d,children:[d,"ms"]},d))})]}),a.jsxs("button",{type:"button",onClick:()=>fp(d=>!d),title:dn?"Resume preview":"Pause preview",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:dn?"var(--accent)":"var(--bg)",color:dn?"#fff":"var(--text)",cursor:"pointer",fontSize:11},children:[dn?a.jsx(By,{size:12}):a.jsx(Ny,{size:12})," ",dn?"Resume":"Pause"]}),a.jsxs("button",{type:"button",onClick:kp,title:"Save snapshot to history",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[a.jsx(Ly,{size:12})," Snapshot"]}),a.jsxs("button",{type:"button",onClick:bp,title:"Format code",style:{display:"flex",alignItems:"center",gap:4,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[a.jsx(Ay,{size:12})," Format"]})]})]}),a.jsx("div",{style:{flex:1,minHeight:0,background:"var(--surface)"},children:a.jsx(Ty,{height:"100%",defaultLanguage:"markdown",language:"markdown",value:e??"",onChange:d=>t(d??""),onMount:d=>{bs.current=d},theme:A?"vs-dark":"vs-light",options:{minimap:{enabled:!0},lineNumbers:"on",wordWrap:"on",padding:{top:8},fontSize:13,fontFamily:"var(--font-mono)",scrollBeyondLastLine:!1,automaticLayout:!0},loading:a.jsx("span",{style:{color:"var(--muted)"},children:"Loading…"})})}),$e&&a.jsxs("div",{style:{flexShrink:0,padding:"8px 10px",borderTop:"1px solid var(--border)",background:"rgba(239,68,68,0.1)",fontSize:11,color:"var(--error)",display:"flex",alignItems:"flex-start",gap:8,cursor:"pointer"},role:"alert",onClick:xp,title:"Jump to line in editor",children:[a.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",maxHeight:80,overflow:"auto",flex:1},children:$e}),a.jsxs("button",{type:"button",onClick:d=>{d.stopPropagation(),vp()},title:"Copy error",style:{flexShrink:0,padding:"4px 8px",border:"1px solid var(--error)",borderRadius:4,background:"transparent",color:"var(--error)",cursor:"pointer",fontSize:10},children:[a.jsx(ir,{size:12})," Copy"]})]})]})]}),!W&&a.jsx("div",{role:"button",tabIndex:0,className:`resize-handle ${l?"resize-handle-mobile":""}`,style:l?{width:"100%",height:10,minHeight:10,cursor:"row-resize",touchAction:"none"}:void 0,onMouseDown:Js,onTouchStart:d=>{if(!l||!d.touches.length)return;d.preventDefault();const x=I=>{const _=Lo.current;if(!_||!I.touches.length)return;const L=_.getBoundingClientRect(),ae=I.touches[0].clientY-L.top,se=Math.min(Ni,Math.max(_i,ae/L.height*100));w(se)},R=()=>{document.removeEventListener("touchmove",x,{capture:!0}),document.removeEventListener("touchend",R)};document.addEventListener("touchmove",x,{passive:!1,capture:!0}),document.addEventListener("touchend",R)},onKeyDown:d=>d.key==="Enter"&&Js(),"aria-label":"Resize panels"}),a.jsxs("div",{className:"pane pane-right",style:{flex:"1 1 0",minWidth:l?0:200,minHeight:l?200:0,display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative",overflow:"hidden",zIndex:10},children:[a.jsxs("div",{className:"diagram-content",style:{flex:1,minHeight:0,minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--surface)",position:"relative"},children:[$&&a.jsxs("div",{className:`toolbar diagram-toolbar ${l?"diagram-toolbar-mobile":""}`,style:{position:"absolute",bottom:12,left:12,zIndex:40,padding:"6px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 2px 8px rgba(0,0,0,0.18)",...l?{paddingBottom:"max(6px, env(safe-area-inset-bottom, 0px))"}:{}},children:[a.jsx("div",{ref:Ps,style:{display:"flex"},children:a.jsx("button",{type:"button",style:{...be,minHeight:32,minWidth:32},onClick:()=>j(d=>!d),title:"Diagram colors","aria-label":"Diagram colors",children:a.jsx(Pc,{size:16})})}),a.jsx("button",{type:"button",onClick:()=>pp(d=>!d),title:Gr?"Hide grid":"Show grid",style:{...be,minHeight:32,minWidth:32,background:Gr?"var(--accent)":void 0,color:Gr?"#fff":void 0},"aria-label":"Toggle grid",children:a.jsx(Cc,{size:16})}),a.jsx("button",{type:"button",onClick:Pp,title:"Fit to view","aria-label":"Fit",style:{...be,minHeight:32,minWidth:32},children:a.jsx(Sc,{size:16})}),a.jsx("button",{type:"button",onClick:()=>Qt(1),title:"100%",style:{...be,minHeight:26,minWidth:34,fontSize:10},children:"100%"}),a.jsx("button",{type:"button",onClick:jp,title:"Zoom in","aria-label":"Zoom in",style:{...be,minHeight:32,minWidth:32},children:a.jsx(Dc,{size:16})}),a.jsxs("span",{style:{minWidth:34,textAlign:"center",fontSize:10,color:"var(--muted)"},title:"Zoom",children:[Math.round(qr*100),"%"]}),a.jsx("button",{type:"button",onClick:Rp,title:"Zoom out","aria-label":"Zoom out",style:{...be,minHeight:32,minWidth:32},children:a.jsx(jc,{size:16})}),a.jsx("span",{style:{width:18,height:1,background:"var(--border)"}}),a.jsx("button",{type:"button",onClick:()=>ni(0,-Kr),title:"Pan up","aria-label":"Pan up",style:{...be,minHeight:32,minWidth:32},children:a.jsx(kl,{size:16})}),a.jsx("button",{type:"button",onClick:()=>ni(Kr,0),title:"Pan right","aria-label":"Pan right",style:{...be,minHeight:32,minWidth:32},children:a.jsx(xc,{size:16})}),a.jsx("button",{type:"button",onClick:()=>ni(-Kr,0),title:"Pan left","aria-label":"Pan left",style:{...be,minHeight:32,minWidth:32},children:a.jsx(vc,{size:16})}),a.jsx("button",{type:"button",onClick:()=>ni(0,Kr),title:"Pan down","aria-label":"Pan down",style:{...be,minHeight:32,minWidth:32},children:a.jsx(yc,{size:16})})]}),Ts&&a.jsx("span",{style:{position:"absolute",top:8,right:8,fontSize:11,color:"var(--muted)",zIndex:5},children:"Updating…"}),Os&&$&&a.jsx("button",{type:"button",onClick:()=>ge(!0),title:"Open syntax",style:{position:"absolute",top:8,left:12,zIndex:5,fontSize:10,fontWeight:600,color:"var(--muted)",background:"var(--surface)",padding:"4px 8px",borderRadius:4,border:"1px solid var(--border)",cursor:"pointer"},children:Os}),$e&&!Is&&a.jsx("pre",{className:"preview-error",style:{margin:16},children:$e}),!$&&a.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--muted)"},children:Ts?"Loading…":"Diagram"}),$&&a.jsxs(a.Fragment,{children:[$e&&a.jsx("div",{style:{position:"absolute",top:8,right:8,left:12,zIndex:15,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:a.jsx("span",{style:{fontSize:11,color:"var(--error)",background:"rgba(239,68,68,0.15)",padding:"6px 12px",borderRadius:6,border:"1px solid var(--error)"},children:"Diagram has errors — see editor"})}),a.jsx("div",{ref:Qn,onMouseDown:Dp,style:{flex:1,minHeight:0,minWidth:0,overflow:"auto",padding:24,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:Fo||ei?"grabbing":"grab",...Gr&&{backgroundImage:"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",backgroundSize:"16px 16px"}},children:a.jsx("div",{ref:qn,style:{transform:`translate(${_o}px, ${No}px) scale(${qr})`,transformOrigin:"0 0",display:"inline-block",padding:12,background:c.backgroundColor,border:c.borderEnabled?`${c.borderWidth}px solid ${c.borderColor}`:"none",borderRadius:4},dangerouslySetInnerHTML:{__html:$}})})]})]}),D&&a.jsxs("div",{ref:Ds,role:"dialog","aria-label":"Diagram colors",style:{width:280,flexShrink:0,borderLeft:"1px solid var(--border)",background:"var(--surface)",display:"flex",flexDirection:"column",minHeight:0,overflow:"hidden"},children:[a.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Diagram colors"}),a.jsx("button",{type:"button",onClick:()=>j(!1),title:"Close",style:{padding:4,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",fontSize:16},"aria-label":"Close",children:"×"})]}),a.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:10,display:"flex",flexDirection:"column",gap:10},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Panel background"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:Ml.map(d=>a.jsx("button",{type:"button",onClick:()=>fn("panelBg",d),style:{width:22,height:22,padding:0,border:Uo("panelBg").toLowerCase()===d?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:d,boxSizing:"border-box"},title:d},d))}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("input",{type:"text",value:Uo("panelBg"),onChange:d=>{const x=d.target.value;(x===""||/^#[0-9A-Fa-f]{0,6}$/.test(x)||/^[0-9A-Fa-f]{0,6}$/.test(x))&&fn("panelBg",x.startsWith("#")?x:x?"#"+x:"#141414")},style:{flex:1,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"}),a.jsx("button",{type:"button",onClick:()=>m(d=>({...d,backgroundColor:"transparent"})),style:{fontSize:11,padding:"4px 8px",border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"None"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Border"}),a.jsx("input",{type:"checkbox",checked:c.borderEnabled,onChange:d=>m(x=>({...x,borderEnabled:d.target.checked})),style:{width:16,height:16,cursor:"pointer"}})]}),c.borderEnabled&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Border color"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:Ml.map(d=>a.jsx("button",{type:"button",onClick:()=>fn("borderColor",d),style:{width:22,height:22,padding:0,border:c.borderColor.toLowerCase()===d?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:d,boxSizing:"border-box"},title:d},d))}),a.jsx("input",{type:"text",value:c.borderColor,onChange:d=>{const x=d.target.value;(x===""||/^#[0-9A-Fa-f]{0,6}$/.test(x)||/^[0-9A-Fa-f]{0,6}$/.test(x))&&fn("borderColor",x.startsWith("#")?x:x?"#"+x:"#141414")},style:{padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("label",{style:{fontSize:11,color:"var(--muted)"},children:"Border width"}),a.jsx("input",{type:"number",min:1,max:8,value:c.borderWidth,onChange:d=>m(x=>({...x,borderWidth:Math.max(1,Math.min(8,parseInt(d.target.value,10)||1))})),style:{width:48,padding:"4px 6px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12}})]})]}),a.jsx("div",{style:{fontSize:11,color:"var(--muted)",fontWeight:600},children:"Diagram colors"}),["svgBg","nodeFill","nodeText","lineColor"].map(d=>{const x={svgBg:"SVG background",nodeFill:"Node fill",nodeText:"Node text",lineColor:"Lines / arrows"}[d],R=Uo(d);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{fontSize:11,color:"var(--muted)"},children:x}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 1fr)",gap:4},children:Ml.map(I=>a.jsx("button",{type:"button",onClick:()=>fn(d,I),style:{width:22,height:22,padding:0,border:R.toLowerCase()===I?"2px solid var(--accent)":"1px solid var(--border)",borderRadius:4,cursor:"pointer",background:I,boxSizing:"border-box"},title:I},I))}),a.jsx("input",{type:"text",value:R,onChange:I=>{const _=I.target.value;(_===""||/^#[0-9A-Fa-f]{0,6}$/.test(_)||/^[0-9A-Fa-f]{0,6}$/.test(_))&&fn(d,_.startsWith("#")?_:_?"#"+_:"#141414")},style:{padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"var(--bg)",color:"var(--text)",fontSize:12},placeholder:"#000000"})]},d)}),a.jsx("button",{type:"button",onClick:()=>E({...mn}),style:{fontSize:11,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--muted)",cursor:"pointer",alignSelf:"flex-start"},children:"Reset diagram colors"})]})]})]})]}),a.jsx("footer",{style:{flexShrink:0,padding:"4px 12px",borderTop:"1px solid var(--border)",background:"var(--surface)",fontSize:10,color:"var(--muted)",textAlign:"center"},children:"@diagramium · by montesito · Ctrl+Z undo · Ctrl+Y redo · Esc close panels"})]}),(z||Ie||T||Ze||Io)&&Xt.createPortal(Io&&a.jsxs("div",{style:Kn,children:[a.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Saved & history"}),a.jsx("button",{type:"button",onClick:()=>ze(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),a.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:12,color:"var(--text)",display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Saved diagrams"}),a.jsxs("button",{type:"button",onClick:Vs,style:{marginBottom:8,padding:"6px 12px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:11},children:[a.jsx(Ci,{size:14,style:{verticalAlign:"middle",marginRight:4}})," Save current"]}),$r.length===0?a.jsx("p",{style:{margin:0,fontSize:11,color:"var(--muted)"},children:"No saved diagrams."}):a.jsx("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",display:"flex",flexDirection:"column",gap:4},children:$r.map(d=>a.jsxs("li",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)"},children:[a.jsx("span",{style:{flex:1,fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.name}),a.jsx("button",{type:"button",onClick:()=>Sp(d),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"Open"}),a.jsx("button",{type:"button",onClick:()=>wp(d.id),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--error)",cursor:"pointer"},children:"Remove"})]},d.id))})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Version history"}),a.jsxs("p",{style:{margin:"0 0 8px",fontSize:11,color:"var(--muted)"},children:["Use ",a.jsx("strong",{children:"Snapshot"})," in the editor toolbar to save a version. Restore from the list below."]}),Oo.length===0?a.jsx("p",{style:{margin:0,fontSize:11,color:"var(--muted)"},children:"No snapshots yet."}):a.jsx("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",display:"flex",flexDirection:"column",gap:4},children:Oo.map((d,x)=>a.jsxs("li",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)"},children:[a.jsxs("span",{style:{flex:1,fontSize:10,color:"var(--muted)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["Snapshot ",Oo.length-x]}),a.jsx("button",{type:"button",onClick:()=>Cp(d),style:{padding:"2px 6px",fontSize:10,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer"},children:"Restore"})]},x))})]})]})]})||Ze&&a.jsxs("div",{style:Kn,children:[a.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Syntax"}),a.jsx("button",{type:"button",onClick:()=>ge(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),a.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:11,color:"var(--text)",display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Flowchart"}),a.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`flowchart LR
  A --> B --> C
  B --> D`})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Sequence"}),a.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`sequenceDiagram
  A->>B: message
  B-->>A: reply`})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Class"}),a.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontFamily:"var(--font-mono)",background:"var(--bg)",padding:8,borderRadius:4},children:`classDiagram
  class Animal {
    +name
    +move()
  }`})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase"},children:"Links & directions"}),a.jsxs("p",{style:{margin:0,lineHeight:1.5,color:"var(--muted)"},children:[a.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"-->"})," arrow · ",a.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"---"})," line · ",a.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"LR"})," / ",a.jsx("code",{style:{background:"var(--bg)",padding:"0 4px",borderRadius:2},children:"TB"})," direction"]})]}),a.jsx("p",{style:{margin:0,fontSize:10,color:"var(--muted)"},children:a.jsx("a",{href:"https://mermaid.js.org/intro/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"Full docs → mermaid.js.org"})})]})]})||z&&a.jsxs("div",{style:Kn,children:[a.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"About"}),a.jsx("button",{type:"button",onClick:()=>N(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),a.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,display:"flex",flexDirection:"column",gap:14,fontSize:12,color:"var(--text)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),a.jsx("p",{style:{margin:0,lineHeight:1.5},children:"Diagramium is a browser-based Mermaid diagram editor. Edit Mermaid code in the left panel and see the diagram update live on the right. All data stays in your browser; no backend required."}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Motivation"}),a.jsxs("p",{style:{margin:0,lineHeight:1.5,color:"var(--muted)"},children:["Built for quick diagrams and learning Mermaid. Ready to integrate AI: use ",a.jsx("code",{style:{fontSize:10,background:"var(--bg)",padding:"1px 4px",borderRadius:4},children:"useSetDiagramFromAI()"})," to inject generated Mermaid code. Thanks to ",a.jsx("a",{href:"https://mermaid.js.org",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"Mermaid"}),"."]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Data"}),a.jsx("p",{style:{margin:"0 0 8px",fontSize:11,color:"var(--muted)",lineHeight:1.5},children:"All data is stored locally: current diagram, saved diagrams (up to 10), snapshots, and UI preferences. Clear everything below."}),a.jsx("button",{type:"button",onClick:yp,style:{padding:"6px 12px",fontSize:11,border:"1px solid var(--error)",borderRadius:6,background:"transparent",color:"var(--error)",cursor:"pointer"},children:"Clear all data"})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Left strip"}),a.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(jl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"About"})," — This panel"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(wl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Examples"})," — Insert templates (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others)"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Ci,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Saved & history"})," — Saved diagrams and snapshot history (restore previous versions)"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(bl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Syntax"})," — Mermaid cheat sheet"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Cl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"How to use"})," — Usage steps and keyboard shortcuts"]})]})]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Top bar"}),a.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Rl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Fullscreen"})," — Diagram-only view"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Il,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Undo"})," / ",a.jsx("strong",{children:"Redo"})]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Dl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Reset"})," — Clear editor and diagram"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(El,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Export"})," — SVG, PNG (1x/2x), .md, .mmd, Print/PDF, copy code, copy PNG, copy shareable link, import from file"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Pl,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Theme"})," — Dark / light"]})]})]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Diagram toolbox"}),a.jsxs("ul",{style:{margin:0,paddingLeft:0,listStyle:"none",lineHeight:1.7},children:[a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Pc,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Palette"})," — Diagram background, border, and Mermaid theme (node fill, line color)"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Sc,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Center"})," — Fit diagram in view"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsxs("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:1,background:"var(--bg)",borderRadius:4},children:[a.jsx(Dc,{size:12,color:"var(--muted)"}),a.jsx(jc,{size:12,color:"var(--muted)"})]}),a.jsxs("span",{children:[a.jsx("strong",{children:"Zoom"})," — Buttons or scroll wheel"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsxs("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:[a.jsx(kl,{size:10,color:"var(--muted)"}),a.jsx(xc,{size:10,color:"var(--muted)"}),a.jsx(vc,{size:10,color:"var(--muted)"}),a.jsx(yc,{size:10,color:"var(--muted)"})]}),a.jsxs("span",{children:[a.jsx("strong",{children:"Pan"})," — Buttons or drag on diagram"]})]}),a.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:6},children:[a.jsx("span",{style:{width:20,height:20,flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",borderRadius:4},children:a.jsx(Cc,{size:14,color:"var(--muted)"})}),a.jsxs("span",{children:[a.jsx("strong",{children:"Grid"})," — Toggle background grid; optional node dragging"]})]})]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Glossary"}),a.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.6},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Editor"})," — Left panel (Monaco) for Mermaid code; supports Format, snapshots, and error strip with jump-to-line."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Diagram pane"})," — Right area: live diagram plus toolbox (palette, center, zoom, pan, grid)."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Mermaid"})," — Text-based diagram library; see ",a.jsx("a",{href:"https://mermaid.js.org/intro/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--accent)"},children:"mermaid.js.org"}),"."]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Render debounce"})," — Delay (200 / 500 / 1000 ms) after typing before the diagram updates; optional Pause to freeze updates."]})]})]})]})]})||Ie&&a.jsxs("div",{style:Kn,children:[a.jsxs("div",{style:{flexShrink:0,padding:8,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"Examples"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx("button",{type:"button",onClick:()=>F(d=>!d),title:Ee?"Unpin":"Pin",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:Ee?"var(--accent)":"transparent",color:Ee?"#fff":"var(--text)",cursor:"pointer",fontSize:10},children:Ee?"Pinned":"Pin"}),a.jsx("button",{type:"button",onClick:()=>ee(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]})]}),a.jsxs("div",{style:{flexShrink:0,padding:12,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10},children:[a.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),a.jsxs("div",{style:{flexShrink:0,padding:8,display:"flex",flexDirection:"column",gap:8,borderBottom:"1px solid var(--border)"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx(Fy,{size:14,style:{position:"absolute",left:8,top:"50%",transform:"translateY(-50%)",color:"var(--muted)",pointerEvents:"none"}}),a.jsx("input",{type:"text",placeholder:"Search examples...",value:q,onChange:d=>Te(d.target.value),style:{width:"100%",padding:"6px 8px 6px 28px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",fontSize:12},"aria-label":"Search examples"})]}),a.jsxs("select",{value:P,onChange:d=>B(d.target.value),style:{width:"100%",padding:"6px 8px",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",fontSize:12,cursor:"pointer"},"aria-label":"Filter by category",children:[a.jsx("option",{value:"",children:"All categories"}),Et.length>0&&a.jsx("option",{value:"Recent",children:"Recent"}),Mc.map(d=>a.jsx("option",{value:d,children:d},d))]})]}),a.jsx("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:8,display:"flex",flexDirection:"column",gap:8},children:Zs.length===0?a.jsx("p",{style:{fontSize:12,color:"var(--muted)"},children:"No examples match."}):Zs.map(({category:d,items:x})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx("div",{style:{fontSize:10,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em",paddingBottom:2,borderBottom:"1px solid var(--border)"},children:d}),x.map(R=>{var I;return a.jsxs("button",{type:"button",onClick:()=>Ip(R),style:{display:"block",width:"100%",padding:"8px 10px",textAlign:"left",border:"1px solid var(--border)",borderRadius:6,background:"var(--bg)",color:"var(--text)",cursor:"pointer",fontSize:12,fontWeight:500},children:[a.jsx("div",{children:R.name}),a.jsx("div",{style:{fontSize:10,color:"var(--muted)",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((I=R.code.split(`
`)[0])==null?void 0:I.trim())??""})]},R.id)})]},d))})]})||T&&a.jsxs("div",{style:Kn,children:[a.jsxs("div",{style:{flexShrink:0,padding:10,borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:"How to use"}),a.jsx("button",{type:"button",onClick:()=>K(!1),title:"Close",style:{padding:4,border:"1px solid var(--border)",borderRadius:4,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:11},"aria-label":"Close",children:"×"})]}),a.jsxs("div",{style:{flex:1,minHeight:0,overflowY:"auto",padding:12,fontSize:12,color:"var(--text)",display:"flex",flexDirection:"column",gap:14},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:40,height:40,style:{flexShrink:0},"aria-hidden":"true"}),a.jsxs("div",{children:[a.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:Ei}),a.jsx("p",{style:{margin:"2px 0 0",fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"})]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Quick start"}),a.jsxs("ol",{style:{margin:0,paddingLeft:18,lineHeight:1.7},children:[a.jsx("li",{style:{marginBottom:8},children:"Type or paste Mermaid code in the left editor; the diagram updates live on the right (debounce and Pause in the editor toolbar)."}),a.jsxs("li",{style:{marginBottom:8},children:[a.jsx("strong",{children:"Examples"})," (book icon) — Search and filter by category (Flowchart, Sequence, Class, State, ER, Gantt, Pie, Chart, Journey, Block, Quadrant, Mindmap, Timeline, Git, Starter, Others); click a template to insert. Recent used appear under Recent."]}),a.jsxs("li",{style:{marginBottom:8},children:[a.jsx("strong",{children:"Saved & history"})," — Save current diagram (up to 10), open a saved one, or restore from snapshot history."]}),a.jsxs("li",{style:{marginBottom:8},children:[a.jsx("strong",{children:"Syntax"})," — Mermaid cheat sheet; the diagram-type badge next to the editor also opens it."]})]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Top bar"}),a.jsxs("p",{style:{margin:0,marginBottom:6,lineHeight:1.5},children:[a.jsx("strong",{children:"Fullscreen"})," — Diagram-only view. ",a.jsx("strong",{children:"Undo"})," / ",a.jsx("strong",{children:"Redo"}),". ",a.jsx("strong",{children:"Reset"})," (bin) — clear editor and diagram. ",a.jsx("strong",{children:"Export"})," — download SVG, PNG (1x/2x), .md, .mmd; copy code, copy PNG, copy as Markdown block; copy shareable link; Print/PDF; import from file. ",a.jsx("strong",{children:"Theme"})," — dark / light."]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Diagram area"}),a.jsxs("p",{style:{margin:0,marginBottom:6,lineHeight:1.5},children:[a.jsx("strong",{children:"Palette"})," — Set diagram background, border, and Mermaid theme (node fill, text, line). ",a.jsx("strong",{children:"Center"})," — fit diagram in view. ",a.jsx("strong",{children:"Zoom"})," — buttons or scroll wheel. ",a.jsx("strong",{children:"Pan"})," — buttons or drag on the diagram. ",a.jsx("strong",{children:"Grid"})," — toggle background grid; enable node dragging for movable nodes (when supported)."]})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Editor"}),a.jsx("p",{style:{margin:0,lineHeight:1.5},children:"Format, Reset, snapshots (save/restore versions). Error strip shows parse/render errors with jump-to-line and copy. Split size and debounce are stored in preferences."})]}),a.jsxs("section",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontSize:11,fontWeight:700,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Keyboard shortcuts"}),a.jsxs("ul",{style:{margin:0,paddingLeft:18,lineHeight:1.6},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"Ctrl+Z"})," — Undo"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Ctrl+Y"})," / ",a.jsx("strong",{children:"Ctrl+Shift+Z"})," — Redo"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Ctrl+S"})," — Save current diagram to Saved list"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Esc"})," — Close panels / modals"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Ctrl+F"})," — Find in editor (Monaco)"]})]})]})]})]}),document.body),l&&Xt.createPortal(a.jsx("div",{style:{position:"fixed",top:"calc(env(safe-area-inset-top, 0px) + "+jt+"px)",left:0,right:0,zIndex:2147483600,background:"var(--surface)",borderBottom:"1px solid var(--border)",boxShadow:"0 2px 12px rgba(0,0,0,0.35)"},children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:8,padding:"6px 8px"},children:[W?a.jsx("button",{type:"button",onClick:()=>p(!1),title:"Exit fullscreen preview","aria-label":"Exit fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(bc,{size:16})}):a.jsx("button",{type:"button",onClick:()=>p(!0),title:"Fullscreen preview","aria-label":"Fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(Rl,{size:16})}),a.jsx("button",{type:"button",onClick:n,disabled:!i,title:"Undo (Ctrl+Z)","aria-label":"Undo",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:i?"pointer":"default",borderRadius:4,opacity:i?1:.5},children:a.jsx(Il,{size:16})}),a.jsx("button",{type:"button",onClick:r,disabled:!o,title:"Redo (Ctrl+Y)","aria-label":"Redo",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:o?"pointer":"default",borderRadius:4,opacity:o?1:.5},children:a.jsx(Tc,{size:16})}),a.jsx("button",{ref:zo,type:"button",onClick:f,title:"Reset editor and diagram","aria-label":"Reset editor and diagram",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(Dl,{size:16})}),a.jsxs("div",{ref:Ao,style:{position:"relative"},children:[a.jsx("button",{type:"button",onClick:()=>k(d=>!d),disabled:!$,title:"Export","aria-label":"Export",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:$?"pointer":"not-allowed",borderRadius:4,opacity:$?1:.5},children:a.jsx(El,{size:16})}),b&&a.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:100,padding:4,display:"flex",flexDirection:"column",gap:2,minWidth:180},children:[a.jsxs("button",{type:"button",onClick:Us,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download SVG",children:[a.jsx(wc,{size:16})," SVG"]}),a.jsxs("button",{type:"button",onClick:()=>ti(2),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (2x)",children:[a.jsx(kc,{size:16})," PNG (2x)"]}),a.jsx("button",{type:"button",onClick:()=>ti(1),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (1x)",children:"PNG (1x)"}),a.jsx("button",{type:"button",onClick:Ws,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Markdown file",children:"Save as .md"}),a.jsx("button",{type:"button",onClick:Hs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Mermaid file",children:"Save as .mmd"}),a.jsxs("button",{type:"button",onClick:Ks,disabled:!$,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:$?"pointer":"not-allowed",fontSize:12,opacity:$?1:.6},title:"Print or Save as PDF",children:[a.jsx(Ic,{size:16})," Print / PDF"]}),a.jsxs("button",{type:"button",onClick:Gs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as image",children:[a.jsx(ir,{size:16})," Copy image"]}),a.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),a.jsxs("button",{type:"button",onClick:Qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy Mermaid code",children:[a.jsx(ir,{size:16})," Copy code"]}),a.jsx("button",{type:"button",onClick:$s,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as Markdown block",children:"Copy as Markdown"}),a.jsxs("button",{type:"button",onClick:qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy shareable link",children:[a.jsx(Ec,{size:16})," Copy link"]}),a.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),a.jsxs("button",{type:"button",onClick:Ys,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Import from file",children:[a.jsx(Oc,{size:16})," Import file"]})]})]}),a.jsx("button",{type:"button",onClick:()=>le(d=>!d),title:A?"Light mode":"Dark mode","aria-label":A?"Light mode":"Dark mode",style:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:A?a.jsx(Pl,{size:16}):a.jsx(Rc,{size:16})}),a.jsxs("button",{type:"button",onClick:()=>M(d=>!d),title:"Panels","aria-label":"Panels",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"0 14px",height:30,border:"1px solid var(--border)",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:999,marginLeft:"auto",fontSize:11,fontWeight:500},children:[a.jsx(_y,{size:15}),a.jsx("span",{children:"Panels"})]})]})}),document.body),Xt.createPortal(a.jsxs("div",{className:"diagramium-top-bar",style:{position:"fixed",top:0,left:0,right:0,height:l?"calc(env(safe-area-inset-top, 0px) + "+jt+"px)":jt,zIndex:2147483647,isolation:"isolate",transform:"translateZ(0)",background:"var(--surface)",borderBottom:"1px solid var(--border)",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:l?"env(safe-area-inset-top, 0px)":0,paddingLeft:16,paddingRight:16,pointerEvents:"auto"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[a.jsx("img",{src:"/diagramium/logo/diagramium-logo.svg",alt:"",width:32,height:32,style:{display:"block",flexShrink:0},"aria-hidden":"true"}),a.jsx("span",{style:{fontSize:15,fontWeight:600,color:"var(--text)"},children:Ei})]}),l?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexShrink:0,marginLeft:8},children:[a.jsx("span",{style:{fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"}),a.jsxs("span",{style:{fontSize:12,color:"var(--muted)"},children:["v",Lc]})]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[W?a.jsx("button",{type:"button",onClick:()=>p(!1),title:"Exit fullscreen preview","aria-label":"Exit fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(bc,{size:14})}):a.jsx("button",{type:"button",onClick:()=>p(!0),title:"Fullscreen preview","aria-label":"Fullscreen preview",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(Rl,{size:14})}),a.jsx("button",{type:"button",onClick:n,disabled:!i,title:"Undo (Ctrl+Z)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:i?"pointer":"default",borderRadius:4,opacity:i?1:.5},"aria-label":"Undo",children:a.jsx(Il,{size:14})}),a.jsx("button",{type:"button",onClick:r,disabled:!o,title:"Redo (Ctrl+Y)",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:o?"pointer":"default",borderRadius:4,opacity:o?1:.5},"aria-label":"Redo",children:a.jsx(Tc,{size:14})}),a.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),a.jsx("button",{ref:zo,type:"button",onClick:f,title:"Reset editor and diagram","aria-label":"Reset editor and diagram",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},children:a.jsx(Dl,{size:14})}),a.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),a.jsxs("div",{ref:Ao,style:{position:"relative"},children:[a.jsx("button",{type:"button",onClick:()=>k(d=>!d),disabled:!$,title:"Export","aria-label":"Export",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:$?"pointer":"not-allowed",borderRadius:4,opacity:$?1:.5},children:a.jsx(El,{size:14})}),b&&a.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:4,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:100,padding:4,display:"flex",flexDirection:"column",gap:2,minWidth:180},children:[a.jsxs("button",{type:"button",onClick:Us,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download SVG",children:[a.jsx(wc,{size:16})," SVG"]}),a.jsxs("button",{type:"button",onClick:()=>ti(2),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (2x)",children:[a.jsx(kc,{size:16})," PNG (2x)"]}),a.jsx("button",{type:"button",onClick:()=>ti(1),style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Download PNG (1x)",children:"PNG (1x)"}),a.jsx("button",{type:"button",onClick:Ws,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Markdown file",children:"Save as .md"}),a.jsx("button",{type:"button",onClick:Hs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Save as Mermaid file",children:"Save as .mmd"}),a.jsxs("button",{type:"button",onClick:Ks,disabled:!$,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:$?"pointer":"not-allowed",fontSize:12,opacity:$?1:.6},title:"Print or Save as PDF",children:[a.jsx(Ic,{size:16})," Print / PDF"]}),a.jsxs("button",{type:"button",onClick:Gs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as image",children:[a.jsx(ir,{size:16})," Copy image"]}),a.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),a.jsxs("button",{type:"button",onClick:Qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy Mermaid code",children:[a.jsx(ir,{size:16})," Copy code"]}),a.jsx("button",{type:"button",onClick:$s,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy as Markdown block",children:"Copy as Markdown"}),a.jsxs("button",{type:"button",onClick:qs,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Copy shareable link",children:[a.jsx(Ec,{size:16})," Copy link"]}),a.jsx("span",{style:{height:1,background:"var(--border)",margin:"2px 0"}}),a.jsxs("button",{type:"button",onClick:Ys,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"none",borderRadius:6,background:"transparent",color:"var(--text)",cursor:"pointer",fontSize:12},title:"Import from file",children:[a.jsx(Oc,{size:16})," Import file"]})]})]}),a.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),a.jsx("button",{type:"button",onClick:()=>le(d=>!d),title:A?"Light mode":"Dark mode",style:{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:0,border:"none",background:"transparent",color:"var(--muted)",cursor:"pointer",borderRadius:4},"aria-label":A?"Light mode":"Dark mode",children:A?a.jsx(Pl,{size:14}):a.jsx(Rc,{size:14})}),a.jsx("span",{style:{width:1,height:16,background:"var(--border)",flexShrink:0},"aria-hidden":"true"}),a.jsx("span",{style:{fontSize:11,color:"var(--muted)"},children:"Powered by Mermaid"}),a.jsxs("span",{style:{fontSize:12,color:"var(--muted)"},children:["v",Lc]})]})]}),document.body),a.jsx("input",{ref:Rs,type:"file",accept:".md,.mmd,.txt,text/*",style:{display:"none"},onChange:Ep,"aria-hidden":!0})]})}function uv(){try{const e=window.location.hash.slice(1);if(e.startsWith("d/")){const t=decodeURIComponent(atob(e.slice(2)));if(t)return t}}catch{}try{const e=localStorage.getItem(sp);if(e!=null&&e!=="")return e}catch{}return""}class cv extends h.Component{constructor(){super(...arguments);tu(this,"state",{err:null})}static getDerivedStateFromError(n){return{err:n}}render(){return this.state.err?a.jsxs("div",{style:{padding:24,fontFamily:"monospace",color:"#ef4444",whiteSpace:"pre-wrap"},children:[a.jsx("strong",{children:"Error"}),": ",this.state.err.message,a.jsx("pre",{style:{marginTop:12,fontSize:12},children:this.state.err.stack})]}):this.props.children}}const Al=document.getElementById("root");if(Al)try{Jf(Al).render(a.jsx(h.StrictMode,{children:a.jsx(cv,{children:a.jsx(Gy,{initialCode:uv(),children:a.jsx(sv,{})})})}))}catch(e){Al.innerHTML=`<div style="padding:24px;color:#ef4444;font-family:monospace;white-space:pre-wrap;">Failed to start: ${e instanceof Error?e.message:String(e)}</div>`}const pv=Object.freeze(Object.defineProperty({__proto__:null,InfoModule:Gp,createInfoServices:Np},Symbol.toStringTag,{value:"Module"})),mv=Object.freeze(Object.defineProperty({__proto__:null,PacketModule:$p,createPacketServices:Bp},Symbol.toStringTag,{value:"Module"})),hv=Object.freeze(Object.defineProperty({__proto__:null,PieModule:Qp,createPieServices:Fp},Symbol.toStringTag,{value:"Module"})),gv=Object.freeze(Object.defineProperty({__proto__:null,ArchitectureModule:qp,createArchitectureServices:Up},Symbol.toStringTag,{value:"Module"})),yv=Object.freeze(Object.defineProperty({__proto__:null,GitGraphModule:Kp,createGitGraphServices:Wp},Symbol.toStringTag,{value:"Module"})),vv=Object.freeze(Object.defineProperty({__proto__:null,RadarModule:Yp,createRadarServices:Hp},Symbol.toStringTag,{value:"Module"})),xv=Object.freeze(Object.defineProperty({__proto__:null,TreemapModule:Xp,createTreemapServices:Vp},Symbol.toStringTag,{value:"Module"}));export{hv as a,gv as b,yv as g,pv as i,mv as p,vv as r,xv as t};
