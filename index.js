"use strict";(()=>{var mp=Object.create;var W4=Object.defineProperty;var zp=Object.getOwnPropertyDescriptor;var kp=Object.getOwnPropertyNames;var _p=Object.getPrototypeOf,Mp=Object.prototype.hasOwnProperty;var Cp=(o,t)=>()=>(o&&(t=o(o=0)),t);var b1=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),Nn=(o,t)=>{for(var r in t)W4(o,r,{get:t[r],enumerable:!0})},Rn=(o,t,r,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of kp(t))!Mp.call(o,a)&&a!==r&&W4(o,a,{get:()=>t[a],enumerable:!(e=zp(t,a))||e.enumerable});return o};var K=(o,t,r)=>(r=o!=null?mp(_p(o)):{},Rn(t||!o||!o.__esModule?W4(r,"default",{value:o,enumerable:!0}):r,o)),$4=o=>Rn(W4({},"__esModule",{value:!0}),o);var Kn=b1(q0=>{"use strict";var va=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),Lp=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Fp=Symbol.for("react.suspense"),Pp=Symbol.for("react.memo"),Op=Symbol.for("react.lazy"),Tn=Symbol.iterator;function Np(o){return o===null||typeof o!="object"?null:(o=Tn&&o[Tn]||o["@@iterator"],typeof o=="function"?o:null)}var Zn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jn=Object.assign,Un={};function te(o,t,r){this.props=o,this.context=t,this.refs=Un,this.updater=r||Zn}te.prototype.isReactComponent={};te.prototype.setState=function(o,t){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,t,"setState")};te.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Yn(){}Yn.prototype=te.prototype;function i5(o,t,r){this.props=o,this.context=t,this.refs=Un,this.updater=r||Zn}var n5=i5.prototype=new Yn;n5.constructor=i5;jn(n5,te.prototype);n5.isPureReactComponent=!0;var In=Array.isArray,qn=Object.prototype.hasOwnProperty,l5={current:null},Xn={key:!0,ref:!0,__self:!0,__source:!0};function Wn(o,t,r){var e,a={},c=null,i=null;if(t!=null)for(e in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(c=""+t.key),t)qn.call(t,e)&&!Xn.hasOwnProperty(e)&&(a[e]=t[e]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var w=Array(l),b=0;b<l;b++)w[b]=arguments[b+2];a.children=w}if(o&&o.defaultProps)for(e in l=o.defaultProps,l)a[e]===void 0&&(a[e]=l[e]);return{$$typeof:va,type:o,key:c,ref:i,props:a,_owner:l5.current}}function Rp(o,t){return{$$typeof:va,type:o.type,key:t,ref:o.ref,props:o.props,_owner:o._owner}}function d5(o){return typeof o=="object"&&o!==null&&o.$$typeof===va}function Tp(o){var t={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(r){return t[r]})}var Dn=/\/+/g;function c5(o,t){return typeof o=="object"&&o!==null&&o.key!=null?Tp(""+o.key):t.toString(36)}function G4(o,t,r,e,a){var c=typeof o;(c==="undefined"||c==="boolean")&&(o=null);var i=!1;if(o===null)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(o.$$typeof){case va:case Sp:i=!0}}if(i)return i=o,a=a(i),o=e===""?"."+c5(i,0):e,In(a)?(r="",o!=null&&(r=o.replace(Dn,"$&/")+"/"),G4(a,t,r,"",function(b){return b})):a!=null&&(d5(a)&&(a=Rp(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Dn,"$&/")+"/")+o)),t.push(a)),1;if(i=0,e=e===""?".":e+":",In(o))for(var l=0;l<o.length;l++){c=o[l];var w=e+c5(c,l);i+=G4(c,t,r,w,a)}else if(w=Np(o),typeof w=="function")for(o=w.call(o),l=0;!(c=o.next()).done;)c=c.value,w=e+c5(c,l++),i+=G4(c,t,r,w,a);else if(c==="object")throw t=String(o),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function K4(o,t,r){if(o==null)return o;var e=[],a=0;return G4(o,e,"","",function(c){return t.call(r,c,a++)}),e}function Ip(o){if(o._status===-1){var t=o._result;t=t(),t.then(function(r){(o._status===0||o._status===-1)&&(o._status=1,o._result=r)},function(r){(o._status===0||o._status===-1)&&(o._status=2,o._result=r)}),o._status===-1&&(o._status=0,o._result=t)}if(o._status===1)return o._result.default;throw o._result}var Oo={current:null},Q4={transition:null},Dp={ReactCurrentDispatcher:Oo,ReactCurrentBatchConfig:Q4,ReactCurrentOwner:l5};function $n(){throw Error("act(...) is not supported in production builds of React.")}q0.Children={map:K4,forEach:function(o,t,r){K4(o,function(){t.apply(this,arguments)},r)},count:function(o){var t=0;return K4(o,function(){t++}),t},toArray:function(o){return K4(o,function(t){return t})||[]},only:function(o){if(!d5(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};q0.Component=te;q0.Fragment=Lp;q0.Profiler=Hp;q0.PureComponent=i5;q0.StrictMode=Vp;q0.Suspense=Fp;q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;q0.act=$n;q0.cloneElement=function(o,t,r){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var e=jn({},o.props),a=o.key,c=o.ref,i=o._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,i=l5.current),t.key!==void 0&&(a=""+t.key),o.type&&o.type.defaultProps)var l=o.type.defaultProps;for(w in t)qn.call(t,w)&&!Xn.hasOwnProperty(w)&&(e[w]=t[w]===void 0&&l!==void 0?l[w]:t[w])}var w=arguments.length-2;if(w===1)e.children=r;else if(1<w){l=Array(w);for(var b=0;b<w;b++)l[b]=arguments[b+2];e.children=l}return{$$typeof:va,type:o.type,key:a,ref:c,props:e,_owner:i}};q0.createContext=function(o){return o={$$typeof:Bp,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:Ep,_context:o},o.Consumer=o};q0.createElement=Wn;q0.createFactory=function(o){var t=Wn.bind(null,o);return t.type=o,t};q0.createRef=function(){return{current:null}};q0.forwardRef=function(o){return{$$typeof:Ap,render:o}};q0.isValidElement=d5;q0.lazy=function(o){return{$$typeof:Op,_payload:{_status:-1,_result:o},_init:Ip}};q0.memo=function(o,t){return{$$typeof:Pp,type:o,compare:t===void 0?null:t}};q0.startTransition=function(o){var t=Q4.transition;Q4.transition={};try{o()}finally{Q4.transition=t}};q0.unstable_act=$n;q0.useCallback=function(o,t){return Oo.current.useCallback(o,t)};q0.useContext=function(o){return Oo.current.useContext(o)};q0.useDebugValue=function(){};q0.useDeferredValue=function(o){return Oo.current.useDeferredValue(o)};q0.useEffect=function(o,t){return Oo.current.useEffect(o,t)};q0.useId=function(){return Oo.current.useId()};q0.useImperativeHandle=function(o,t,r){return Oo.current.useImperativeHandle(o,t,r)};q0.useInsertionEffect=function(o,t){return Oo.current.useInsertionEffect(o,t)};q0.useLayoutEffect=function(o,t){return Oo.current.useLayoutEffect(o,t)};q0.useMemo=function(o,t){return Oo.current.useMemo(o,t)};q0.useReducer=function(o,t,r){return Oo.current.useReducer(o,t,r)};q0.useRef=function(o){return Oo.current.useRef(o)};q0.useState=function(o){return Oo.current.useState(o)};q0.useSyncExternalStore=function(o,t,r){return Oo.current.useSyncExternalStore(o,t,r)};q0.useTransition=function(){return Oo.current.useTransition()};q0.version="18.3.1"});var n0=b1((W_,Gn)=>{"use strict";Gn.exports=Kn()});var n9=b1(C1=>{"use strict";function b5(o,t){var r=o.length;o.push(t);o:for(;0<r;){var e=r-1>>>1,a=o[e];if(0<J4(a,t))o[e]=t,o[r]=a,r=e;else break o}}function Ht(o){return o.length===0?null:o[0]}function t3(o){if(o.length===0)return null;var t=o[0],r=o.pop();if(r!==t){o[0]=r;o:for(var e=0,a=o.length,c=a>>>1;e<c;){var i=2*(e+1)-1,l=o[i],w=i+1,b=o[w];if(0>J4(l,r))w<a&&0>J4(b,l)?(o[e]=b,o[w]=r,e=w):(o[e]=l,o[i]=r,e=i);else if(w<a&&0>J4(b,r))o[e]=b,o[w]=r,e=w;else break o}}return t}function J4(o,t){var r=o.sortIndex-t.sortIndex;return r!==0?r:o.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Qn=performance,C1.unstable_now=function(){return Qn.now()}):(s5=Date,Jn=s5.now(),C1.unstable_now=function(){return s5.now()-Jn});var Qn,s5,Jn,Yt=[],Er=[],Zp=1,gt=null,_o=3,r3=!1,z2=!1,ga=!1,r9=typeof setTimeout=="function"?setTimeout:null,e9=typeof clearTimeout=="function"?clearTimeout:null,o9=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g5(o){for(var t=Ht(Er);t!==null;){if(t.callback===null)t3(Er);else if(t.startTime<=o)t3(Er),t.sortIndex=t.expirationTime,b5(Yt,t);else break;t=Ht(Er)}}function u5(o){if(ga=!1,g5(o),!z2)if(Ht(Yt)!==null)z2=!0,h5(p5);else{var t=Ht(Er);t!==null&&f5(u5,t.startTime-o)}}function p5(o,t){z2=!1,ga&&(ga=!1,e9(ua),ua=-1),r3=!0;var r=_o;try{for(g5(t),gt=Ht(Yt);gt!==null&&(!(gt.expirationTime>t)||o&&!i9());){var e=gt.callback;if(typeof e=="function"){gt.callback=null,_o=gt.priorityLevel;var a=e(gt.expirationTime<=t);t=C1.unstable_now(),typeof a=="function"?gt.callback=a:gt===Ht(Yt)&&t3(Yt),g5(t)}else t3(Yt);gt=Ht(Yt)}if(gt!==null)var c=!0;else{var i=Ht(Er);i!==null&&f5(u5,i.startTime-t),c=!1}return c}finally{gt=null,_o=r,r3=!1}}var e3=!1,o3=null,ua=-1,a9=5,c9=-1;function i9(){return!(C1.unstable_now()-c9<a9)}function w5(){if(o3!==null){var o=C1.unstable_now();c9=o;var t=!0;try{t=o3(!0,o)}finally{t?ba():(e3=!1,o3=null)}}else e3=!1}var ba;typeof o9=="function"?ba=function(){o9(w5)}:typeof MessageChannel<"u"?(v5=new MessageChannel,t9=v5.port2,v5.port1.onmessage=w5,ba=function(){t9.postMessage(null)}):ba=function(){r9(w5,0)};var v5,t9;function h5(o){o3=o,e3||(e3=!0,ba())}function f5(o,t){ua=r9(function(){o(C1.unstable_now())},t)}C1.unstable_IdlePriority=5;C1.unstable_ImmediatePriority=1;C1.unstable_LowPriority=4;C1.unstable_NormalPriority=3;C1.unstable_Profiling=null;C1.unstable_UserBlockingPriority=2;C1.unstable_cancelCallback=function(o){o.callback=null};C1.unstable_continueExecution=function(){z2||r3||(z2=!0,h5(p5))};C1.unstable_forceFrameRate=function(o){0>o||125<o?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):a9=0<o?Math.floor(1e3/o):5};C1.unstable_getCurrentPriorityLevel=function(){return _o};C1.unstable_getFirstCallbackNode=function(){return Ht(Yt)};C1.unstable_next=function(o){switch(_o){case 1:case 2:case 3:var t=3;break;default:t=_o}var r=_o;_o=t;try{return o()}finally{_o=r}};C1.unstable_pauseExecution=function(){};C1.unstable_requestPaint=function(){};C1.unstable_runWithPriority=function(o,t){switch(o){case 1:case 2:case 3:case 4:case 5:break;default:o=3}var r=_o;_o=o;try{return t()}finally{_o=r}};C1.unstable_scheduleCallback=function(o,t,r){var e=C1.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,o){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=r+a,o={id:Zp++,callback:t,priorityLevel:o,startTime:r,expirationTime:a,sortIndex:-1},r>e?(o.sortIndex=r,b5(Er,o),Ht(Yt)===null&&o===Ht(Er)&&(ga?(e9(ua),ua=-1):ga=!0,f5(u5,r-e))):(o.sortIndex=a,b5(Yt,o),z2||r3||(z2=!0,h5(p5))),o};C1.unstable_shouldYield=i9;C1.unstable_wrapCallback=function(o){var t=_o;return function(){var r=_o;_o=t;try{return o.apply(this,arguments)}finally{_o=r}}}});var d9=b1((K_,l9)=>{"use strict";l9.exports=n9()});var bs=b1(nt=>{"use strict";var jp=n0(),ct=d9();function i0(o){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+o,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+o+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pl=new Set,Na={};function P2(o,t){ze(o,t),ze(o+"Capture",t)}function ze(o,t){for(Na[o]=t,o=0;o<t.length;o++)pl.add(t[o])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),D5=Object.prototype.hasOwnProperty,Up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,s9={},w9={};function Yp(o){return D5.call(w9,o)?!0:D5.call(s9,o)?!1:Up.test(o)?w9[o]=!0:(s9[o]=!0,!1)}function qp(o,t,r,e){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return e?!1:r!==null?!r.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function Xp(o,t,r,e){if(t===null||typeof t>"u"||qp(o,t,r,e))return!0;if(e)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function To(o,t,r,e,a,c,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=e,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=o,this.type=t,this.sanitizeURL=c,this.removeEmptyString=i}var yo={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){yo[o]=new To(o,0,!1,o,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var t=o[0];yo[t]=new To(t,1,!1,o[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(o){yo[o]=new To(o,2,!1,o.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){yo[o]=new To(o,2,!1,o,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){yo[o]=new To(o,3,!1,o.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(o){yo[o]=new To(o,3,!0,o,null,!1,!1)});["capture","download"].forEach(function(o){yo[o]=new To(o,4,!1,o,null,!1,!1)});["cols","rows","size","span"].forEach(function(o){yo[o]=new To(o,6,!1,o,null,!1,!1)});["rowSpan","start"].forEach(function(o){yo[o]=new To(o,5,!1,o.toLowerCase(),null,!1,!1)});var A8=/[\-:]([a-z])/g;function F8(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var t=o.replace(A8,F8);yo[t]=new To(t,1,!1,o,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var t=o.replace(A8,F8);yo[t]=new To(t,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(o){var t=o.replace(A8,F8);yo[t]=new To(t,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(o){yo[o]=new To(o,1,!1,o.toLowerCase(),null,!1,!1)});yo.xlinkHref=new To("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(o){yo[o]=new To(o,1,!1,o.toLowerCase(),null,!0,!0)});function P8(o,t,r,e){var a=yo.hasOwnProperty(t)?yo[t]:null;(a!==null?a.type!==0:e||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xp(t,r,a,e)&&(r=null),e||a===null?Yp(t)&&(r===null?o.removeAttribute(t):o.setAttribute(t,""+r)):a.mustUseProperty?o[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,e=a.attributeNamespace,r===null?o.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,e?o.setAttributeNS(e,t,r):o.setAttribute(t,r))))}var pr=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,a3=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),O8=Symbol.for("react.strict_mode"),Z5=Symbol.for("react.profiler"),hl=Symbol.for("react.provider"),fl=Symbol.for("react.context"),N8=Symbol.for("react.forward_ref"),j5=Symbol.for("react.suspense"),U5=Symbol.for("react.suspense_list"),R8=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var yl=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var v9=Symbol.iterator;function pa(o){return o===null||typeof o!="object"?null:(o=v9&&o[v9]||o["@@iterator"],typeof o=="function"?o:null)}var T1=Object.assign,y5;function _a(o){if(y5===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);y5=t&&t[1]||""}return`
`+y5+o}var x5=!1;function m5(o,t){if(!o||x5)return"";x5=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(b){var e=b}Reflect.construct(o,[],t)}else{try{t.call()}catch(b){e=b}o.call(t.prototype)}else{try{throw Error()}catch(b){e=b}o()}}catch(b){if(b&&e&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),c=e.stack.split(`
`),i=a.length-1,l=c.length-1;1<=i&&0<=l&&a[i]!==c[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==c[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==c[l]){var w=`
`+a[i].replace(" at new "," at ");return o.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",o.displayName)),w}while(1<=i&&0<=l);break}}}finally{x5=!1,Error.prepareStackTrace=r}return(o=o?o.displayName||o.name:"")?_a(o):""}function Wp(o){switch(o.tag){case 5:return _a(o.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return o=m5(o.type,!1),o;case 11:return o=m5(o.type.render,!1),o;case 1:return o=m5(o.type,!0),o;default:return""}}function Y5(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case ce:return"Fragment";case ae:return"Portal";case Z5:return"Profiler";case O8:return"StrictMode";case j5:return"Suspense";case U5:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case fl:return(o.displayName||"Context")+".Consumer";case hl:return(o._context.displayName||"Context")+".Provider";case N8:var t=o.render;return o=o.displayName,o||(o=t.displayName||t.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case R8:return t=o.displayName||null,t!==null?t:Y5(o.type)||"Memo";case Ar:t=o._payload,o=o._init;try{return Y5(o(t))}catch{}}return null}function $p(o){var t=o.type;switch(o.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=t.render,o=o.displayName||o.name||"",t.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y5(t);case 8:return t===O8?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xr(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function xl(o){var t=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(o){var t=xl(o)?"checked":"value",r=Object.getOwnPropertyDescriptor(o.constructor.prototype,t),e=""+o[t];if(!o.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(o,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,c.call(this,i)}}),Object.defineProperty(o,t,{enumerable:r.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){o._valueTracker=null,delete o[t]}}}}function c3(o){o._valueTracker||(o._valueTracker=Kp(o))}function ml(o){if(!o)return!1;var t=o._valueTracker;if(!t)return!0;var r=t.getValue(),e="";return o&&(e=xl(o)?o.checked?"true":"false":o.value),o=e,o!==r?(t.setValue(o),!0):!1}function A3(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function q5(o,t){var r=t.checked;return T1({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??o._wrapperState.initialChecked})}function b9(o,t){var r=t.defaultValue==null?"":t.defaultValue,e=t.checked!=null?t.checked:t.defaultChecked;r=Xr(t.value!=null?t.value:r),o._wrapperState={initialChecked:e,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zl(o,t){t=t.checked,t!=null&&P8(o,"checked",t,!1)}function X5(o,t){zl(o,t);var r=Xr(t.value),e=t.type;if(r!=null)e==="number"?(r===0&&o.value===""||o.value!=r)&&(o.value=""+r):o.value!==""+r&&(o.value=""+r);else if(e==="submit"||e==="reset"){o.removeAttribute("value");return}t.hasOwnProperty("value")?W5(o,t.type,r):t.hasOwnProperty("defaultValue")&&W5(o,t.type,Xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(o.defaultChecked=!!t.defaultChecked)}function g9(o,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var e=t.type;if(!(e!=="submit"&&e!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+o._wrapperState.initialValue,r||t===o.value||(o.value=t),o.defaultValue=t}r=o.name,r!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,r!==""&&(o.name=r)}function W5(o,t,r){(t!=="number"||A3(o.ownerDocument)!==o)&&(r==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+r&&(o.defaultValue=""+r))}var Ma=Array.isArray;function pe(o,t,r,e){if(o=o.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<o.length;r++)a=t.hasOwnProperty("$"+o[r].value),o[r].selected!==a&&(o[r].selected=a),a&&e&&(o[r].defaultSelected=!0)}else{for(r=""+Xr(r),t=null,a=0;a<o.length;a++){if(o[a].value===r){o[a].selected=!0,e&&(o[a].defaultSelected=!0);return}t!==null||o[a].disabled||(t=o[a])}t!==null&&(t.selected=!0)}}function $5(o,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i0(91));return T1({},t,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function u9(o,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i0(92));if(Ma(r)){if(1<r.length)throw Error(i0(93));r=r[0]}t=r}t==null&&(t=""),r=t}o._wrapperState={initialValue:Xr(r)}}function kl(o,t){var r=Xr(t.value),e=Xr(t.defaultValue);r!=null&&(r=""+r,r!==o.value&&(o.value=r),t.defaultValue==null&&o.defaultValue!==r&&(o.defaultValue=r)),e!=null&&(o.defaultValue=""+e)}function p9(o){var t=o.textContent;t===o._wrapperState.initialValue&&t!==""&&t!==null&&(o.value=t)}function _l(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function K5(o,t){return o==null||o==="http://www.w3.org/1999/xhtml"?_l(t):o==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var i3,Ml=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,e,a){MSApp.execUnsafeLocalFunction(function(){return o(t,r,e,a)})}:o}(function(o,t){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=t;else{for(i3=i3||document.createElement("div"),i3.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=i3.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;t.firstChild;)o.appendChild(t.firstChild)}});function Ra(o,t){if(t){var r=o.firstChild;if(r&&r===o.lastChild&&r.nodeType===3){r.nodeValue=t;return}}o.textContent=t}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gp=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(o){Gp.forEach(function(t){t=t+o.charAt(0).toUpperCase()+o.substring(1),La[t]=La[o]})});function Cl(o,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||La.hasOwnProperty(o)&&La[o]?(""+t).trim():t+"px"}function Sl(o,t){o=o.style;for(var r in t)if(t.hasOwnProperty(r)){var e=r.indexOf("--")===0,a=Cl(r,t[r],e);r==="float"&&(r="cssFloat"),e?o.setProperty(r,a):o[r]=a}}var Qp=T1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function G5(o,t){if(t){if(Qp[o]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i0(137,o));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i0(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i0(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i0(62))}}function Q5(o,t){if(o.indexOf("-")===-1)return typeof t.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J5=null;function T8(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var o8=null,he=null,fe=null;function h9(o){if(o=r4(o)){if(typeof o8!="function")throw Error(i0(280));var t=o.stateNode;t&&(t=nc(t),o8(o.stateNode,o.type,t))}}function Ll(o){he?fe?fe.push(o):fe=[o]:he=o}function Vl(){if(he){var o=he,t=fe;if(fe=he=null,h9(o),t)for(o=0;o<t.length;o++)h9(t[o])}}function Hl(o,t){return o(t)}function El(){}var z5=!1;function Bl(o,t,r){if(z5)return o(t,r);z5=!0;try{return Hl(o,t,r)}finally{z5=!1,(he!==null||fe!==null)&&(El(),Vl())}}function Ta(o,t){var r=o.stateNode;if(r===null)return null;var e=nc(r);if(e===null)return null;r=e[t];o:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(o=o.type,e=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!e;break o;default:o=!1}if(o)return null;if(r&&typeof r!="function")throw Error(i0(231,t,typeof r));return r}var t8=!1;if(vr)try{re={},Object.defineProperty(re,"passive",{get:function(){t8=!0}}),window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch{t8=!1}var re;function Jp(o,t,r,e,a,c,i,l,w){var b=Array.prototype.slice.call(arguments,3);try{t.apply(r,b)}catch(y){this.onError(y)}}var Va=!1,F3=null,P3=!1,r8=null,oh={onError:function(o){Va=!0,F3=o}};function th(o,t,r,e,a,c,i,l,w){Va=!1,F3=null,Jp.apply(oh,arguments)}function rh(o,t,r,e,a,c,i,l,w){if(th.apply(this,arguments),Va){if(Va){var b=F3;Va=!1,F3=null}else throw Error(i0(198));P3||(P3=!0,r8=b)}}function O2(o){var t=o,r=o;if(o.alternate)for(;t.return;)t=t.return;else{o=t;do t=o,t.flags&4098&&(r=t.return),o=t.return;while(o)}return t.tag===3?r:null}function Al(o){if(o.tag===13){var t=o.memoizedState;if(t===null&&(o=o.alternate,o!==null&&(t=o.memoizedState)),t!==null)return t.dehydrated}return null}function f9(o){if(O2(o)!==o)throw Error(i0(188))}function eh(o){var t=o.alternate;if(!t){if(t=O2(o),t===null)throw Error(i0(188));return t!==o?null:o}for(var r=o,e=t;;){var a=r.return;if(a===null)break;var c=a.alternate;if(c===null){if(e=a.return,e!==null){r=e;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===r)return f9(a),o;if(c===e)return f9(a),t;c=c.sibling}throw Error(i0(188))}if(r.return!==e.return)r=a,e=c;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,e=c;break}if(l===e){i=!0,e=a,r=c;break}l=l.sibling}if(!i){for(l=c.child;l;){if(l===r){i=!0,r=c,e=a;break}if(l===e){i=!0,e=c,r=a;break}l=l.sibling}if(!i)throw Error(i0(189))}}if(r.alternate!==e)throw Error(i0(190))}if(r.tag!==3)throw Error(i0(188));return r.stateNode.current===r?o:t}function Fl(o){return o=eh(o),o!==null?Pl(o):null}function Pl(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var t=Pl(o);if(t!==null)return t;o=o.sibling}return null}var Ol=ct.unstable_scheduleCallback,y9=ct.unstable_cancelCallback,ah=ct.unstable_shouldYield,ch=ct.unstable_requestPaint,X1=ct.unstable_now,ih=ct.unstable_getCurrentPriorityLevel,I8=ct.unstable_ImmediatePriority,Nl=ct.unstable_UserBlockingPriority,O3=ct.unstable_NormalPriority,nh=ct.unstable_LowPriority,Rl=ct.unstable_IdlePriority,ec=null,$t=null;function lh(o){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ec,o,void 0,(o.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:wh,dh=Math.log,sh=Math.LN2;function wh(o){return o>>>=0,o===0?32:31-(dh(o)/sh|0)|0}var n3=64,l3=4194304;function Ca(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function N3(o,t){var r=o.pendingLanes;if(r===0)return 0;var e=0,a=o.suspendedLanes,c=o.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?e=Ca(l):(c&=i,c!==0&&(e=Ca(c)))}else i=r&~a,i!==0?e=Ca(i):c!==0&&(e=Ca(c));if(e===0)return 0;if(t!==0&&t!==e&&!(t&a)&&(a=e&-e,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if(e&4&&(e|=r&16),t=o.entangledLanes,t!==0)for(o=o.entanglements,t&=e;0<t;)r=31-Pt(t),a=1<<r,e|=o[r],t&=~a;return e}function vh(o,t){switch(o){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bh(o,t){for(var r=o.suspendedLanes,e=o.pingedLanes,a=o.expirationTimes,c=o.pendingLanes;0<c;){var i=31-Pt(c),l=1<<i,w=a[i];w===-1?(!(l&r)||l&e)&&(a[i]=vh(l,t)):w<=t&&(o.expiredLanes|=l),c&=~l}}function e8(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function Tl(){var o=n3;return n3<<=1,!(n3&4194240)&&(n3=64),o}function k5(o){for(var t=[],r=0;31>r;r++)t.push(o);return t}function o4(o,t,r){o.pendingLanes|=t,t!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,t=31-Pt(t),o[t]=r}function gh(o,t){var r=o.pendingLanes&~t;o.pendingLanes=t,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=t,o.mutableReadLanes&=t,o.entangledLanes&=t,t=o.entanglements;var e=o.eventTimes;for(o=o.expirationTimes;0<r;){var a=31-Pt(r),c=1<<a;t[a]=0,e[a]=-1,o[a]=-1,r&=~c}}function D8(o,t){var r=o.entangledLanes|=t;for(o=o.entanglements;r;){var e=31-Pt(r),a=1<<e;a&t|o[e]&t&&(o[e]|=t),r&=~a}}var h1=0;function Il(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Dl,Z8,Zl,jl,Ul,a8=!1,d3=[],Tr=null,Ir=null,Dr=null,Ia=new Map,Da=new Map,Pr=[],uh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function x9(o,t){switch(o){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function ha(o,t,r,e,a,c){return o===null||o.nativeEvent!==c?(o={blockedOn:t,domEventName:r,eventSystemFlags:e,nativeEvent:c,targetContainers:[a]},t!==null&&(t=r4(t),t!==null&&Z8(t)),o):(o.eventSystemFlags|=e,t=o.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),o)}function ph(o,t,r,e,a){switch(t){case"focusin":return Tr=ha(Tr,o,t,r,e,a),!0;case"dragenter":return Ir=ha(Ir,o,t,r,e,a),!0;case"mouseover":return Dr=ha(Dr,o,t,r,e,a),!0;case"pointerover":var c=a.pointerId;return Ia.set(c,ha(Ia.get(c)||null,o,t,r,e,a)),!0;case"gotpointercapture":return c=a.pointerId,Da.set(c,ha(Da.get(c)||null,o,t,r,e,a)),!0}return!1}function Yl(o){var t=M2(o.target);if(t!==null){var r=O2(t);if(r!==null){if(t=r.tag,t===13){if(t=Al(r),t!==null){o.blockedOn=t,Ul(o.priority,function(){Zl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){o.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}o.blockedOn=null}function k3(o){if(o.blockedOn!==null)return!1;for(var t=o.targetContainers;0<t.length;){var r=c8(o.domEventName,o.eventSystemFlags,t[0],o.nativeEvent);if(r===null){r=o.nativeEvent;var e=new r.constructor(r.type,r);J5=e,r.target.dispatchEvent(e),J5=null}else return t=r4(r),t!==null&&Z8(t),o.blockedOn=r,!1;t.shift()}return!0}function m9(o,t,r){k3(o)&&r.delete(t)}function hh(){a8=!1,Tr!==null&&k3(Tr)&&(Tr=null),Ir!==null&&k3(Ir)&&(Ir=null),Dr!==null&&k3(Dr)&&(Dr=null),Ia.forEach(m9),Da.forEach(m9)}function fa(o,t){o.blockedOn===t&&(o.blockedOn=null,a8||(a8=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,hh)))}function Za(o){function t(a){return fa(a,o)}if(0<d3.length){fa(d3[0],o);for(var r=1;r<d3.length;r++){var e=d3[r];e.blockedOn===o&&(e.blockedOn=null)}}for(Tr!==null&&fa(Tr,o),Ir!==null&&fa(Ir,o),Dr!==null&&fa(Dr,o),Ia.forEach(t),Da.forEach(t),r=0;r<Pr.length;r++)e=Pr[r],e.blockedOn===o&&(e.blockedOn=null);for(;0<Pr.length&&(r=Pr[0],r.blockedOn===null);)Yl(r),r.blockedOn===null&&Pr.shift()}var ye=pr.ReactCurrentBatchConfig,R3=!0;function fh(o,t,r,e){var a=h1,c=ye.transition;ye.transition=null;try{h1=1,j8(o,t,r,e)}finally{h1=a,ye.transition=c}}function yh(o,t,r,e){var a=h1,c=ye.transition;ye.transition=null;try{h1=4,j8(o,t,r,e)}finally{h1=a,ye.transition=c}}function j8(o,t,r,e){if(R3){var a=c8(o,t,r,e);if(a===null)H5(o,t,e,T3,r),x9(o,e);else if(ph(a,o,t,r,e))e.stopPropagation();else if(x9(o,e),t&4&&-1<uh.indexOf(o)){for(;a!==null;){var c=r4(a);if(c!==null&&Dl(c),c=c8(o,t,r,e),c===null&&H5(o,t,e,T3,r),c===a)break;a=c}a!==null&&e.stopPropagation()}else H5(o,t,e,null,r)}}var T3=null;function c8(o,t,r,e){if(T3=null,o=T8(e),o=M2(o),o!==null)if(t=O2(o),t===null)o=null;else if(r=t.tag,r===13){if(o=Al(t),o!==null)return o;o=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;o=null}else t!==o&&(o=null);return T3=o,null}function ql(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ih()){case I8:return 1;case Nl:return 4;case O3:case nh:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var Nr=null,U8=null,_3=null;function Xl(){if(_3)return _3;var o,t=U8,r=t.length,e,a="value"in Nr?Nr.value:Nr.textContent,c=a.length;for(o=0;o<r&&t[o]===a[o];o++);var i=r-o;for(e=1;e<=i&&t[r-e]===a[c-e];e++);return _3=a.slice(o,1<e?1-e:void 0)}function M3(o){var t=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&t===13&&(o=13)):o=t,o===10&&(o=13),32<=o||o===13?o:0}function s3(){return!0}function z9(){return!1}function it(o){function t(r,e,a,c,i){this._reactName=r,this._targetInst=a,this.type=e,this.nativeEvent=c,this.target=i,this.currentTarget=null;for(var l in o)o.hasOwnProperty(l)&&(r=o[l],this[l]=r?r(c):c[l]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?s3:z9,this.isPropagationStopped=z9,this}return T1(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=s3)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=s3)},persist:function(){},isPersistent:s3}),t}var Ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Y8=it(Ve),t4=T1({},Ve,{view:0,detail:0}),xh=it(t4),_5,M5,ya,ac=T1({},t4,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:q8,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==ya&&(ya&&o.type==="mousemove"?(_5=o.screenX-ya.screenX,M5=o.screenY-ya.screenY):M5=_5=0,ya=o),_5)},movementY:function(o){return"movementY"in o?o.movementY:M5}}),k9=it(ac),mh=T1({},ac,{dataTransfer:0}),zh=it(mh),kh=T1({},t4,{relatedTarget:0}),C5=it(kh),_h=T1({},Ve,{animationName:0,elapsedTime:0,pseudoElement:0}),Mh=it(_h),Ch=T1({},Ve,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),Sh=it(Ch),Lh=T1({},Ve,{data:0}),_9=it(Lh),Vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bh(o){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(o):(o=Eh[o])?!!t[o]:!1}function q8(){return Bh}var Ah=T1({},t4,{key:function(o){if(o.key){var t=Vh[o.key]||o.key;if(t!=="Unidentified")return t}return o.type==="keypress"?(o=M3(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?Hh[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:q8,charCode:function(o){return o.type==="keypress"?M3(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?M3(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),Fh=it(Ah),Ph=T1({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M9=it(Ph),Oh=T1({},t4,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:q8}),Nh=it(Oh),Rh=T1({},Ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=it(Rh),Ih=T1({},ac,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),Dh=it(Ih),Zh=[9,13,27,32],X8=vr&&"CompositionEvent"in window,Ha=null;vr&&"documentMode"in document&&(Ha=document.documentMode);var jh=vr&&"TextEvent"in window&&!Ha,Wl=vr&&(!X8||Ha&&8<Ha&&11>=Ha),C9=" ",S9=!1;function $l(o,t){switch(o){case"keyup":return Zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kl(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var ie=!1;function Uh(o,t){switch(o){case"compositionend":return Kl(t);case"keypress":return t.which!==32?null:(S9=!0,C9);case"textInput":return o=t.data,o===C9&&S9?null:o;default:return null}}function Yh(o,t){if(ie)return o==="compositionend"||!X8&&$l(o,t)?(o=Xl(),_3=U8=Nr=null,ie=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wl&&t.locale!=="ko"?null:t.data;default:return null}}var qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L9(o){var t=o&&o.nodeName&&o.nodeName.toLowerCase();return t==="input"?!!qh[o.type]:t==="textarea"}function Gl(o,t,r,e){Ll(e),t=I3(t,"onChange"),0<t.length&&(r=new Y8("onChange","change",null,r,e),o.push({event:r,listeners:t}))}var Ea=null,ja=null;function Xh(o){ld(o,0)}function cc(o){var t=de(o);if(ml(t))return o}function Wh(o,t){if(o==="change")return t}var Ql=!1;vr&&(vr?(v3="oninput"in document,v3||(S5=document.createElement("div"),S5.setAttribute("oninput","return;"),v3=typeof S5.oninput=="function"),w3=v3):w3=!1,Ql=w3&&(!document.documentMode||9<document.documentMode));var w3,v3,S5;function V9(){Ea&&(Ea.detachEvent("onpropertychange",Jl),ja=Ea=null)}function Jl(o){if(o.propertyName==="value"&&cc(ja)){var t=[];Gl(t,ja,o,T8(o)),Bl(Xh,t)}}function $h(o,t,r){o==="focusin"?(V9(),Ea=t,ja=r,Ea.attachEvent("onpropertychange",Jl)):o==="focusout"&&V9()}function Kh(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return cc(ja)}function Gh(o,t){if(o==="click")return cc(t)}function Qh(o,t){if(o==="input"||o==="change")return cc(t)}function Jh(o,t){return o===t&&(o!==0||1/o===1/t)||o!==o&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Jh;function Ua(o,t){if(Nt(o,t))return!0;if(typeof o!="object"||o===null||typeof t!="object"||t===null)return!1;var r=Object.keys(o),e=Object.keys(t);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var a=r[e];if(!D5.call(t,a)||!Nt(o[a],t[a]))return!1}return!0}function H9(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function E9(o,t){var r=H9(o);o=0;for(var e;r;){if(r.nodeType===3){if(e=o+r.textContent.length,o<=t&&e>=t)return{node:r,offset:t-o};o=e}o:{for(;r;){if(r.nextSibling){r=r.nextSibling;break o}r=r.parentNode}r=void 0}r=H9(r)}}function od(o,t){return o&&t?o===t?!0:o&&o.nodeType===3?!1:t&&t.nodeType===3?od(o,t.parentNode):"contains"in o?o.contains(t):o.compareDocumentPosition?!!(o.compareDocumentPosition(t)&16):!1:!1}function td(){for(var o=window,t=A3();t instanceof o.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)o=t.contentWindow;else break;t=A3(o.document)}return t}function W8(o){var t=o&&o.nodeName&&o.nodeName.toLowerCase();return t&&(t==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||t==="textarea"||o.contentEditable==="true")}function of(o){var t=td(),r=o.focusedElem,e=o.selectionRange;if(t!==r&&r&&r.ownerDocument&&od(r.ownerDocument.documentElement,r)){if(e!==null&&W8(r)){if(t=e.start,o=e.end,o===void 0&&(o=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(o,r.value.length);else if(o=(t=r.ownerDocument||document)&&t.defaultView||window,o.getSelection){o=o.getSelection();var a=r.textContent.length,c=Math.min(e.start,a);e=e.end===void 0?c:Math.min(e.end,a),!o.extend&&c>e&&(a=e,e=c,c=a),a=E9(r,c);var i=E9(r,e);a&&i&&(o.rangeCount!==1||o.anchorNode!==a.node||o.anchorOffset!==a.offset||o.focusNode!==i.node||o.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),o.removeAllRanges(),c>e?(o.addRange(t),o.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),o.addRange(t)))}}for(t=[],o=r;o=o.parentNode;)o.nodeType===1&&t.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)o=t[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var tf=vr&&"documentMode"in document&&11>=document.documentMode,ne=null,i8=null,Ba=null,n8=!1;function B9(o,t,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;n8||ne==null||ne!==A3(e)||(e=ne,"selectionStart"in e&&W8(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ba&&Ua(Ba,e)||(Ba=e,e=I3(i8,"onSelect"),0<e.length&&(t=new Y8("onSelect","select",null,t,r),o.push({event:t,listeners:e}),t.target=ne)))}function b3(o,t){var r={};return r[o.toLowerCase()]=t.toLowerCase(),r["Webkit"+o]="webkit"+t,r["Moz"+o]="moz"+t,r}var le={animationend:b3("Animation","AnimationEnd"),animationiteration:b3("Animation","AnimationIteration"),animationstart:b3("Animation","AnimationStart"),transitionend:b3("Transition","TransitionEnd")},L5={},rd={};vr&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete le.animationend.animation,delete le.animationiteration.animation,delete le.animationstart.animation),"TransitionEvent"in window||delete le.transitionend.transition);function ic(o){if(L5[o])return L5[o];if(!le[o])return o;var t=le[o],r;for(r in t)if(t.hasOwnProperty(r)&&r in rd)return L5[o]=t[r];return o}var ed=ic("animationend"),ad=ic("animationiteration"),cd=ic("animationstart"),id=ic("transitionend"),nd=new Map,A9="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(o,t){nd.set(o,t),P2(t,[o])}for(g3=0;g3<A9.length;g3++)u3=A9[g3],F9=u3.toLowerCase(),P9=u3[0].toUpperCase()+u3.slice(1),$r(F9,"on"+P9);var u3,F9,P9,g3;$r(ed,"onAnimationEnd");$r(ad,"onAnimationIteration");$r(cd,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(id,"onTransitionEnd");ze("onMouseEnter",["mouseout","mouseover"]);ze("onMouseLeave",["mouseout","mouseover"]);ze("onPointerEnter",["pointerout","pointerover"]);ze("onPointerLeave",["pointerout","pointerover"]);P2("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));P2("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));P2("onBeforeInput",["compositionend","keypress","textInput","paste"]);P2("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));P2("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));P2("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function O9(o,t,r){var e=o.type||"unknown-event";o.currentTarget=r,rh(e,t,void 0,o),o.currentTarget=null}function ld(o,t){t=(t&4)!==0;for(var r=0;r<o.length;r++){var e=o[r],a=e.event;e=e.listeners;o:{var c=void 0;if(t)for(var i=e.length-1;0<=i;i--){var l=e[i],w=l.instance,b=l.currentTarget;if(l=l.listener,w!==c&&a.isPropagationStopped())break o;O9(a,l,b),c=w}else for(i=0;i<e.length;i++){if(l=e[i],w=l.instance,b=l.currentTarget,l=l.listener,w!==c&&a.isPropagationStopped())break o;O9(a,l,b),c=w}}}if(P3)throw o=r8,P3=!1,r8=null,o}function H1(o,t){var r=t[v8];r===void 0&&(r=t[v8]=new Set);var e=o+"__bubble";r.has(e)||(dd(t,o,2,!1),r.add(e))}function V5(o,t,r){var e=0;t&&(e|=4),dd(r,o,e,t)}var p3="_reactListening"+Math.random().toString(36).slice(2);function Ya(o){if(!o[p3]){o[p3]=!0,pl.forEach(function(r){r!=="selectionchange"&&(rf.has(r)||V5(r,!1,o),V5(r,!0,o))});var t=o.nodeType===9?o:o.ownerDocument;t===null||t[p3]||(t[p3]=!0,V5("selectionchange",!1,t))}}function dd(o,t,r,e){switch(ql(t)){case 1:var a=fh;break;case 4:a=yh;break;default:a=j8}r=a.bind(null,t,r,o),a=void 0,!t8||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),e?a!==void 0?o.addEventListener(t,r,{capture:!0,passive:a}):o.addEventListener(t,r,!0):a!==void 0?o.addEventListener(t,r,{passive:a}):o.addEventListener(t,r,!1)}function H5(o,t,r,e,a){var c=e;if(!(t&1)&&!(t&2)&&e!==null)o:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var l=e.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=e.return;i!==null;){var w=i.tag;if((w===3||w===4)&&(w=i.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;i=i.return}for(;l!==null;){if(i=M2(l),i===null)return;if(w=i.tag,w===5||w===6){e=c=i;continue o}l=l.parentNode}}e=e.return}Bl(function(){var b=c,y=T8(r),f=[];o:{var m=nd.get(o);if(m!==void 0){var x=Y8,s=o;switch(o){case"keypress":if(M3(r)===0)break o;case"keydown":case"keyup":x=Fh;break;case"focusin":s="focus",x=C5;break;case"focusout":s="blur",x=C5;break;case"beforeblur":case"afterblur":x=C5;break;case"click":if(r.button===2)break o;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=k9;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Nh;break;case ed:case ad:case cd:x=Mh;break;case id:x=Th;break;case"scroll":x=xh;break;case"wheel":x=Dh;break;case"copy":case"cut":case"paste":x=Sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=M9}var d=(t&4)!==0,n=!d&&o==="scroll",u=d?m!==null?m+"Capture":null:m;d=[];for(var v=b,p;v!==null;){p=v;var M=p.stateNode;if(p.tag===5&&M!==null&&(p=M,u!==null&&(M=Ta(v,u),M!=null&&d.push(qa(v,M,p)))),n)break;v=v.return}0<d.length&&(m=new x(m,s,null,r,y),f.push({event:m,listeners:d}))}}if(!(t&7)){o:{if(m=o==="mouseover"||o==="pointerover",x=o==="mouseout"||o==="pointerout",m&&r!==J5&&(s=r.relatedTarget||r.fromElement)&&(M2(s)||s[br]))break o;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(s=r.relatedTarget||r.toElement,x=b,s=s?M2(s):null,s!==null&&(n=O2(s),s!==n||s.tag!==5&&s.tag!==6)&&(s=null)):(x=null,s=b),x!==s)){if(d=k9,M="onMouseLeave",u="onMouseEnter",v="mouse",(o==="pointerout"||o==="pointerover")&&(d=M9,M="onPointerLeave",u="onPointerEnter",v="pointer"),n=x==null?m:de(x),p=s==null?m:de(s),m=new d(M,v+"leave",x,r,y),m.target=n,m.relatedTarget=p,M=null,M2(y)===b&&(d=new d(u,v+"enter",s,r,y),d.target=p,d.relatedTarget=n,M=d),n=M,x&&s)t:{for(d=x,u=s,v=0,p=d;p;p=ee(p))v++;for(p=0,M=u;M;M=ee(M))p++;for(;0<v-p;)d=ee(d),v--;for(;0<p-v;)u=ee(u),p--;for(;v--;){if(d===u||u!==null&&d===u.alternate)break t;d=ee(d),u=ee(u)}d=null}else d=null;x!==null&&N9(f,m,x,d,!1),s!==null&&n!==null&&N9(f,n,s,d,!0)}}o:{if(m=b?de(b):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var H=Wh;else if(L9(m))if(Ql)H=Qh;else{H=Kh;var L=$h}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(H=Gh);if(H&&(H=H(o,b))){Gl(f,H,r,y);break o}L&&L(o,m,b),o==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&W5(m,"number",m.value)}switch(L=b?de(b):window,o){case"focusin":(L9(L)||L.contentEditable==="true")&&(ne=L,i8=b,Ba=null);break;case"focusout":Ba=i8=ne=null;break;case"mousedown":n8=!0;break;case"contextmenu":case"mouseup":case"dragend":n8=!1,B9(f,r,y);break;case"selectionchange":if(tf)break;case"keydown":case"keyup":B9(f,r,y)}var k;if(X8)o:{switch(o){case"compositionstart":var C="onCompositionStart";break o;case"compositionend":C="onCompositionEnd";break o;case"compositionupdate":C="onCompositionUpdate";break o}C=void 0}else ie?$l(o,r)&&(C="onCompositionEnd"):o==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(Wl&&r.locale!=="ko"&&(ie||C!=="onCompositionStart"?C==="onCompositionEnd"&&ie&&(k=Xl()):(Nr=y,U8="value"in Nr?Nr.value:Nr.textContent,ie=!0)),L=I3(b,C),0<L.length&&(C=new _9(C,o,null,r,y),f.push({event:C,listeners:L}),k?C.data=k:(k=Kl(r),k!==null&&(C.data=k)))),(k=jh?Uh(o,r):Yh(o,r))&&(b=I3(b,"onBeforeInput"),0<b.length&&(y=new _9("onBeforeInput","beforeinput",null,r,y),f.push({event:y,listeners:b}),y.data=k))}ld(f,t)})}function qa(o,t,r){return{instance:o,listener:t,currentTarget:r}}function I3(o,t){for(var r=t+"Capture",e=[];o!==null;){var a=o,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Ta(o,r),c!=null&&e.unshift(qa(o,c,a)),c=Ta(o,t),c!=null&&e.push(qa(o,c,a))),o=o.return}return e}function ee(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function N9(o,t,r,e,a){for(var c=t._reactName,i=[];r!==null&&r!==e;){var l=r,w=l.alternate,b=l.stateNode;if(w!==null&&w===e)break;l.tag===5&&b!==null&&(l=b,a?(w=Ta(r,c),w!=null&&i.unshift(qa(r,w,l))):a||(w=Ta(r,c),w!=null&&i.push(qa(r,w,l)))),r=r.return}i.length!==0&&o.push({event:t,listeners:i})}var ef=/\r\n?/g,af=/\u0000|\uFFFD/g;function R9(o){return(typeof o=="string"?o:""+o).replace(ef,`
`).replace(af,"")}function h3(o,t,r){if(t=R9(t),R9(o)!==t&&r)throw Error(i0(425))}function D3(){}var l8=null,d8=null;function s8(o,t){return o==="textarea"||o==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var w8=typeof setTimeout=="function"?setTimeout:void 0,cf=typeof clearTimeout=="function"?clearTimeout:void 0,T9=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof T9<"u"?function(o){return T9.resolve(null).then(o).catch(lf)}:w8;function lf(o){setTimeout(function(){throw o})}function E5(o,t){var r=t,e=0;do{var a=r.nextSibling;if(o.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(e===0){o.removeChild(a),Za(t);return}e--}else r!=="$"&&r!=="$?"&&r!=="$!"||e++;r=a}while(r);Za(t)}function Zr(o){for(;o!=null;o=o.nextSibling){var t=o.nodeType;if(t===1||t===3)break;if(t===8){if(t=o.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return o}function I9(o){o=o.previousSibling;for(var t=0;o;){if(o.nodeType===8){var r=o.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return o;t--}else r==="/$"&&t++}o=o.previousSibling}return null}var He=Math.random().toString(36).slice(2),Wt="__reactFiber$"+He,Xa="__reactProps$"+He,br="__reactContainer$"+He,v8="__reactEvents$"+He,df="__reactListeners$"+He,sf="__reactHandles$"+He;function M2(o){var t=o[Wt];if(t)return t;for(var r=o.parentNode;r;){if(t=r[br]||r[Wt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(o=I9(o);o!==null;){if(r=o[Wt])return r;o=I9(o)}return t}o=r,r=o.parentNode}return null}function r4(o){return o=o[Wt]||o[br],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function de(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(i0(33))}function nc(o){return o[Xa]||null}var b8=[],se=-1;function Kr(o){return{current:o}}function E1(o){0>se||(o.current=b8[se],b8[se]=null,se--)}function S1(o,t){se++,b8[se]=o.current,o.current=t}var Wr={},Lo=Kr(Wr),Wo=Kr(!1),H2=Wr;function ke(o,t){var r=o.type.contextTypes;if(!r)return Wr;var e=o.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===t)return e.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in r)a[c]=t[c];return e&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=t,o.__reactInternalMemoizedMaskedChildContext=a),a}function $o(o){return o=o.childContextTypes,o!=null}function Z3(){E1(Wo),E1(Lo)}function D9(o,t,r){if(Lo.current!==Wr)throw Error(i0(168));S1(Lo,t),S1(Wo,r)}function sd(o,t,r){var e=o.stateNode;if(t=t.childContextTypes,typeof e.getChildContext!="function")return r;e=e.getChildContext();for(var a in e)if(!(a in t))throw Error(i0(108,$p(o)||"Unknown",a));return T1({},r,e)}function j3(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Wr,H2=Lo.current,S1(Lo,o),S1(Wo,Wo.current),!0}function Z9(o,t,r){var e=o.stateNode;if(!e)throw Error(i0(169));r?(o=sd(o,t,H2),e.__reactInternalMemoizedMergedChildContext=o,E1(Wo),E1(Lo),S1(Lo,o)):E1(Wo),S1(Wo,r)}var lr=null,lc=!1,B5=!1;function wd(o){lr===null?lr=[o]:lr.push(o)}function wf(o){lc=!0,wd(o)}function Gr(){if(!B5&&lr!==null){B5=!0;var o=0,t=h1;try{var r=lr;for(h1=1;o<r.length;o++){var e=r[o];do e=e(!0);while(e!==null)}lr=null,lc=!1}catch(a){throw lr!==null&&(lr=lr.slice(o+1)),Ol(I8,Gr),a}finally{h1=t,B5=!1}}return null}var we=[],ve=0,U3=null,Y3=0,ut=[],pt=0,E2=null,dr=1,sr="";function k2(o,t){we[ve++]=Y3,we[ve++]=U3,U3=o,Y3=t}function vd(o,t,r){ut[pt++]=dr,ut[pt++]=sr,ut[pt++]=E2,E2=o;var e=dr;o=sr;var a=32-Pt(e)-1;e&=~(1<<a),r+=1;var c=32-Pt(t)+a;if(30<c){var i=a-a%5;c=(e&(1<<i)-1).toString(32),e>>=i,a-=i,dr=1<<32-Pt(t)+a|r<<a|e,sr=c+o}else dr=1<<c|r<<a|e,sr=o}function $8(o){o.return!==null&&(k2(o,1),vd(o,1,0))}function K8(o){for(;o===U3;)U3=we[--ve],we[ve]=null,Y3=we[--ve],we[ve]=null;for(;o===E2;)E2=ut[--pt],ut[pt]=null,sr=ut[--pt],ut[pt]=null,dr=ut[--pt],ut[pt]=null}var at=null,et=null,P1=!1,Ft=null;function bd(o,t){var r=ht(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=o,t=o.deletions,t===null?(o.deletions=[r],o.flags|=16):t.push(r)}function j9(o,t){switch(o.tag){case 5:var r=o.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(o.stateNode=t,at=o,et=Zr(t.firstChild),!0):!1;case 6:return t=o.pendingProps===""||t.nodeType!==3?null:t,t!==null?(o.stateNode=t,at=o,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=E2!==null?{id:dr,overflow:sr}:null,o.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ht(18,null,null,0),r.stateNode=t,r.return=o,o.child=r,at=o,et=null,!0):!1;default:return!1}}function g8(o){return(o.mode&1)!==0&&(o.flags&128)===0}function u8(o){if(P1){var t=et;if(t){var r=t;if(!j9(o,t)){if(g8(o))throw Error(i0(418));t=Zr(r.nextSibling);var e=at;t&&j9(o,t)?bd(e,r):(o.flags=o.flags&-4097|2,P1=!1,at=o)}}else{if(g8(o))throw Error(i0(418));o.flags=o.flags&-4097|2,P1=!1,at=o}}}function U9(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;at=o}function f3(o){if(o!==at)return!1;if(!P1)return U9(o),P1=!0,!1;var t;if((t=o.tag!==3)&&!(t=o.tag!==5)&&(t=o.type,t=t!=="head"&&t!=="body"&&!s8(o.type,o.memoizedProps)),t&&(t=et)){if(g8(o))throw gd(),Error(i0(418));for(;t;)bd(o,t),t=Zr(t.nextSibling)}if(U9(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(i0(317));o:{for(o=o.nextSibling,t=0;o;){if(o.nodeType===8){var r=o.data;if(r==="/$"){if(t===0){et=Zr(o.nextSibling);break o}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}o=o.nextSibling}et=null}}else et=at?Zr(o.stateNode.nextSibling):null;return!0}function gd(){for(var o=et;o;)o=Zr(o.nextSibling)}function _e(){et=at=null,P1=!1}function G8(o){Ft===null?Ft=[o]:Ft.push(o)}var vf=pr.ReactCurrentBatchConfig;function xa(o,t,r){if(o=r.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i0(309));var e=r.stateNode}if(!e)throw Error(i0(147,o));var a=e,c=""+o;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(i){var l=a.refs;i===null?delete l[c]:l[c]=i},t._stringRef=c,t)}if(typeof o!="string")throw Error(i0(284));if(!r._owner)throw Error(i0(290,o))}return o}function y3(o,t){throw o=Object.prototype.toString.call(t),Error(i0(31,o==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":o))}function Y9(o){var t=o._init;return t(o._payload)}function ud(o){function t(u,v){if(o){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function r(u,v){if(!o)return null;for(;v!==null;)t(u,v),v=v.sibling;return null}function e(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function a(u,v){return u=qr(u,v),u.index=0,u.sibling=null,u}function c(u,v,p){return u.index=p,o?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function i(u){return o&&u.alternate===null&&(u.flags|=2),u}function l(u,v,p,M){return v===null||v.tag!==6?(v=T5(p,u.mode,M),v.return=u,v):(v=a(v,p),v.return=u,v)}function w(u,v,p,M){var H=p.type;return H===ce?y(u,v,p.props.children,M,p.key):v!==null&&(v.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ar&&Y9(H)===v.type)?(M=a(v,p.props),M.ref=xa(u,v,p),M.return=u,M):(M=B3(p.type,p.key,p.props,null,u.mode,M),M.ref=xa(u,v,p),M.return=u,M)}function b(u,v,p,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=I5(p,u.mode,M),v.return=u,v):(v=a(v,p.children||[]),v.return=u,v)}function y(u,v,p,M,H){return v===null||v.tag!==7?(v=V2(p,u.mode,M,H),v.return=u,v):(v=a(v,p),v.return=u,v)}function f(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=T5(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case a3:return p=B3(v.type,v.key,v.props,null,u.mode,p),p.ref=xa(u,null,v),p.return=u,p;case ae:return v=I5(v,u.mode,p),v.return=u,v;case Ar:var M=v._init;return f(u,M(v._payload),p)}if(Ma(v)||pa(v))return v=V2(v,u.mode,p,null),v.return=u,v;y3(u,v)}return null}function m(u,v,p,M){var H=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return H!==null?null:l(u,v,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case a3:return p.key===H?w(u,v,p,M):null;case ae:return p.key===H?b(u,v,p,M):null;case Ar:return H=p._init,m(u,v,H(p._payload),M)}if(Ma(p)||pa(p))return H!==null?null:y(u,v,p,M,null);y3(u,p)}return null}function x(u,v,p,M,H){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(p)||null,l(v,u,""+M,H);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case a3:return u=u.get(M.key===null?p:M.key)||null,w(v,u,M,H);case ae:return u=u.get(M.key===null?p:M.key)||null,b(v,u,M,H);case Ar:var L=M._init;return x(u,v,p,L(M._payload),H)}if(Ma(M)||pa(M))return u=u.get(p)||null,y(v,u,M,H,null);y3(v,M)}return null}function s(u,v,p,M){for(var H=null,L=null,k=v,C=v=0,B=null;k!==null&&C<p.length;C++){k.index>C?(B=k,k=null):B=k.sibling;var O=m(u,k,p[C],M);if(O===null){k===null&&(k=B);break}o&&k&&O.alternate===null&&t(u,k),v=c(O,v,C),L===null?H=O:L.sibling=O,L=O,k=B}if(C===p.length)return r(u,k),P1&&k2(u,C),H;if(k===null){for(;C<p.length;C++)k=f(u,p[C],M),k!==null&&(v=c(k,v,C),L===null?H=k:L.sibling=k,L=k);return P1&&k2(u,C),H}for(k=e(u,k);C<p.length;C++)B=x(k,u,C,p[C],M),B!==null&&(o&&B.alternate!==null&&k.delete(B.key===null?C:B.key),v=c(B,v,C),L===null?H=B:L.sibling=B,L=B);return o&&k.forEach(function(A){return t(u,A)}),P1&&k2(u,C),H}function d(u,v,p,M){var H=pa(p);if(typeof H!="function")throw Error(i0(150));if(p=H.call(p),p==null)throw Error(i0(151));for(var L=H=null,k=v,C=v=0,B=null,O=p.next();k!==null&&!O.done;C++,O=p.next()){k.index>C?(B=k,k=null):B=k.sibling;var A=m(u,k,O.value,M);if(A===null){k===null&&(k=B);break}o&&k&&A.alternate===null&&t(u,k),v=c(A,v,C),L===null?H=A:L.sibling=A,L=A,k=B}if(O.done)return r(u,k),P1&&k2(u,C),H;if(k===null){for(;!O.done;C++,O=p.next())O=f(u,O.value,M),O!==null&&(v=c(O,v,C),L===null?H=O:L.sibling=O,L=O);return P1&&k2(u,C),H}for(k=e(u,k);!O.done;C++,O=p.next())O=x(k,u,C,O.value,M),O!==null&&(o&&O.alternate!==null&&k.delete(O.key===null?C:O.key),v=c(O,v,C),L===null?H=O:L.sibling=O,L=O);return o&&k.forEach(function(Y){return t(u,Y)}),P1&&k2(u,C),H}function n(u,v,p,M){if(typeof p=="object"&&p!==null&&p.type===ce&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case a3:o:{for(var H=p.key,L=v;L!==null;){if(L.key===H){if(H=p.type,H===ce){if(L.tag===7){r(u,L.sibling),v=a(L,p.props.children),v.return=u,u=v;break o}}else if(L.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ar&&Y9(H)===L.type){r(u,L.sibling),v=a(L,p.props),v.ref=xa(u,L,p),v.return=u,u=v;break o}r(u,L);break}else t(u,L);L=L.sibling}p.type===ce?(v=V2(p.props.children,u.mode,M,p.key),v.return=u,u=v):(M=B3(p.type,p.key,p.props,null,u.mode,M),M.ref=xa(u,v,p),M.return=u,u=M)}return i(u);case ae:o:{for(L=p.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){r(u,v.sibling),v=a(v,p.children||[]),v.return=u,u=v;break o}else{r(u,v);break}else t(u,v);v=v.sibling}v=I5(p,u.mode,M),v.return=u,u=v}return i(u);case Ar:return L=p._init,n(u,v,L(p._payload),M)}if(Ma(p))return s(u,v,p,M);if(pa(p))return d(u,v,p,M);y3(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(r(u,v.sibling),v=a(v,p),v.return=u,u=v):(r(u,v),v=T5(p,u.mode,M),v.return=u,u=v),i(u)):r(u,v)}return n}var Me=ud(!0),pd=ud(!1),q3=Kr(null),X3=null,be=null,Q8=null;function J8(){Q8=be=X3=null}function o7(o){var t=q3.current;E1(q3),o._currentValue=t}function p8(o,t,r){for(;o!==null;){var e=o.alternate;if((o.childLanes&t)!==t?(o.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),o===r)break;o=o.return}}function xe(o,t){X3=o,Q8=be=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&t&&(Xo=!0),o.firstContext=null)}function yt(o){var t=o._currentValue;if(Q8!==o)if(o={context:o,memoizedValue:t,next:null},be===null){if(X3===null)throw Error(i0(308));be=o,X3.dependencies={lanes:0,firstContext:o}}else be=be.next=o;return t}var C2=null;function t7(o){C2===null?C2=[o]:C2.push(o)}function hd(o,t,r,e){var a=t.interleaved;return a===null?(r.next=r,t7(t)):(r.next=a.next,a.next=r),t.interleaved=r,gr(o,e)}function gr(o,t){o.lanes|=t;var r=o.alternate;for(r!==null&&(r.lanes|=t),r=o,o=o.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),r=o,o=o.return;return r.tag===3?r.stateNode:null}var Fr=!1;function r7(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(o,t){o=o.updateQueue,t.updateQueue===o&&(t.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function wr(o,t){return{eventTime:o,lane:t,tag:0,payload:null,callback:null,next:null}}function jr(o,t,r){var e=o.updateQueue;if(e===null)return null;if(e=e.shared,i1&2){var a=e.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t,gr(o,r)}return a=e.interleaved,a===null?(t.next=t,t7(e)):(t.next=a.next,a.next=t),e.interleaved=t,gr(o,r)}function C3(o,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var e=t.lanes;e&=o.pendingLanes,r|=e,t.lanes=r,D8(o,r)}}function q9(o,t){var r=o.updateQueue,e=o.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var a=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?a=c=i:c=c.next=i,r=r.next}while(r!==null);c===null?a=c=t:c=c.next=t}else a=c=t;r={baseState:e.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:e.shared,effects:e.effects},o.updateQueue=r;return}o=r.lastBaseUpdate,o===null?r.firstBaseUpdate=t:o.next=t,r.lastBaseUpdate=t}function W3(o,t,r,e){var a=o.updateQueue;Fr=!1;var c=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var w=l,b=w.next;w.next=null,i===null?c=b:i.next=b,i=w;var y=o.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==i&&(l===null?y.firstBaseUpdate=b:l.next=b,y.lastBaseUpdate=w))}if(c!==null){var f=a.baseState;i=0,y=b=w=null,l=c;do{var m=l.lane,x=l.eventTime;if((e&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});o:{var s=o,d=l;switch(m=t,x=r,d.tag){case 1:if(s=d.payload,typeof s=="function"){f=s.call(x,f,m);break o}f=s;break o;case 3:s.flags=s.flags&-65537|128;case 0:if(s=d.payload,m=typeof s=="function"?s.call(x,f,m):s,m==null)break o;f=T1({},f,m);break o;case 2:Fr=!0}}l.callback!==null&&l.lane!==0&&(o.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(b=y=x,w=f):y=y.next=x,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(y===null&&(w=f),a.baseState=w,a.firstBaseUpdate=b,a.lastBaseUpdate=y,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);A2|=i,o.lanes=i,o.memoizedState=f}}function X9(o,t,r){if(o=t.effects,t.effects=null,o!==null)for(t=0;t<o.length;t++){var e=o[t],a=e.callback;if(a!==null){if(e.callback=null,e=r,typeof a!="function")throw Error(i0(191,a));a.call(e)}}}var e4={},Kt=Kr(e4),Wa=Kr(e4),$a=Kr(e4);function S2(o){if(o===e4)throw Error(i0(174));return o}function e7(o,t){switch(S1($a,t),S1(Wa,o),S1(Kt,e4),o=t.nodeType,o){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:K5(null,"");break;default:o=o===8?t.parentNode:t,t=o.namespaceURI||null,o=o.tagName,t=K5(t,o)}E1(Kt),S1(Kt,t)}function Ce(){E1(Kt),E1(Wa),E1($a)}function yd(o){S2($a.current);var t=S2(Kt.current),r=K5(t,o.type);t!==r&&(S1(Wa,o),S1(Kt,r))}function a7(o){Wa.current===o&&(E1(Kt),E1(Wa))}var N1=Kr(0);function $3(o){for(var t=o;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===o)break;for(;t.sibling===null;){if(t.return===null||t.return===o)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var A5=[];function c7(){for(var o=0;o<A5.length;o++)A5[o]._workInProgressVersionPrimary=null;A5.length=0}var S3=pr.ReactCurrentDispatcher,F5=pr.ReactCurrentBatchConfig,B2=0,R1=null,oo=null,lo=null,K3=!1,Aa=!1,Ka=0,bf=0;function Mo(){throw Error(i0(321))}function i7(o,t){if(t===null)return!1;for(var r=0;r<t.length&&r<o.length;r++)if(!Nt(o[r],t[r]))return!1;return!0}function n7(o,t,r,e,a,c){if(B2=c,R1=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S3.current=o===null||o.memoizedState===null?hf:ff,o=r(e,a),Aa){c=0;do{if(Aa=!1,Ka=0,25<=c)throw Error(i0(301));c+=1,lo=oo=null,t.updateQueue=null,S3.current=yf,o=r(e,a)}while(Aa)}if(S3.current=G3,t=oo!==null&&oo.next!==null,B2=0,lo=oo=R1=null,K3=!1,t)throw Error(i0(300));return o}function l7(){var o=Ka!==0;return Ka=0,o}function Xt(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lo===null?R1.memoizedState=lo=o:lo=lo.next=o,lo}function xt(){if(oo===null){var o=R1.alternate;o=o!==null?o.memoizedState:null}else o=oo.next;var t=lo===null?R1.memoizedState:lo.next;if(t!==null)lo=t,oo=o;else{if(o===null)throw Error(i0(310));oo=o,o={memoizedState:oo.memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},lo===null?R1.memoizedState=lo=o:lo=lo.next=o}return lo}function Ga(o,t){return typeof t=="function"?t(o):t}function P5(o){var t=xt(),r=t.queue;if(r===null)throw Error(i0(311));r.lastRenderedReducer=o;var e=oo,a=e.baseQueue,c=r.pending;if(c!==null){if(a!==null){var i=a.next;a.next=c.next,c.next=i}e.baseQueue=a=c,r.pending=null}if(a!==null){c=a.next,e=e.baseState;var l=i=null,w=null,b=c;do{var y=b.lane;if((B2&y)===y)w!==null&&(w=w.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),e=b.hasEagerState?b.eagerState:o(e,b.action);else{var f={lane:y,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};w===null?(l=w=f,i=e):w=w.next=f,R1.lanes|=y,A2|=y}b=b.next}while(b!==null&&b!==c);w===null?i=e:w.next=l,Nt(e,t.memoizedState)||(Xo=!0),t.memoizedState=e,t.baseState=i,t.baseQueue=w,r.lastRenderedState=e}if(o=r.interleaved,o!==null){a=o;do c=a.lane,R1.lanes|=c,A2|=c,a=a.next;while(a!==o)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function O5(o){var t=xt(),r=t.queue;if(r===null)throw Error(i0(311));r.lastRenderedReducer=o;var e=r.dispatch,a=r.pending,c=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do c=o(c,i.action),i=i.next;while(i!==a);Nt(c,t.memoizedState)||(Xo=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,e]}function xd(){}function md(o,t){var r=R1,e=xt(),a=t(),c=!Nt(e.memoizedState,a);if(c&&(e.memoizedState=a,Xo=!0),e=e.queue,d7(_d.bind(null,r,e,o),[o]),e.getSnapshot!==t||c||lo!==null&&lo.memoizedState.tag&1){if(r.flags|=2048,Qa(9,kd.bind(null,r,e,a,t),void 0,null),so===null)throw Error(i0(349));B2&30||zd(r,t,a)}return a}function zd(o,t,r){o.flags|=16384,o={getSnapshot:t,value:r},t=R1.updateQueue,t===null?(t={lastEffect:null,stores:null},R1.updateQueue=t,t.stores=[o]):(r=t.stores,r===null?t.stores=[o]:r.push(o))}function kd(o,t,r,e){t.value=r,t.getSnapshot=e,Md(t)&&Cd(o)}function _d(o,t,r){return r(function(){Md(t)&&Cd(o)})}function Md(o){var t=o.getSnapshot;o=o.value;try{var r=t();return!Nt(o,r)}catch{return!0}}function Cd(o){var t=gr(o,1);t!==null&&Ot(t,o,1,-1)}function W9(o){var t=Xt();return typeof o=="function"&&(o=o()),t.memoizedState=t.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:o},t.queue=o,o=o.dispatch=pf.bind(null,R1,o),[t.memoizedState,o]}function Qa(o,t,r,e){return o={tag:o,create:t,destroy:r,deps:e,next:null},t=R1.updateQueue,t===null?(t={lastEffect:null,stores:null},R1.updateQueue=t,t.lastEffect=o.next=o):(r=t.lastEffect,r===null?t.lastEffect=o.next=o:(e=r.next,r.next=o,o.next=e,t.lastEffect=o)),o}function Sd(){return xt().memoizedState}function L3(o,t,r,e){var a=Xt();R1.flags|=o,a.memoizedState=Qa(1|t,r,void 0,e===void 0?null:e)}function dc(o,t,r,e){var a=xt();e=e===void 0?null:e;var c=void 0;if(oo!==null){var i=oo.memoizedState;if(c=i.destroy,e!==null&&i7(e,i.deps)){a.memoizedState=Qa(t,r,c,e);return}}R1.flags|=o,a.memoizedState=Qa(1|t,r,c,e)}function $9(o,t){return L3(8390656,8,o,t)}function d7(o,t){return dc(2048,8,o,t)}function Ld(o,t){return dc(4,2,o,t)}function Vd(o,t){return dc(4,4,o,t)}function Hd(o,t){if(typeof t=="function")return o=o(),t(o),function(){t(null)};if(t!=null)return o=o(),t.current=o,function(){t.current=null}}function Ed(o,t,r){return r=r!=null?r.concat([o]):null,dc(4,4,Hd.bind(null,t,o),r)}function s7(){}function Bd(o,t){var r=xt();t=t===void 0?null:t;var e=r.memoizedState;return e!==null&&t!==null&&i7(t,e[1])?e[0]:(r.memoizedState=[o,t],o)}function Ad(o,t){var r=xt();t=t===void 0?null:t;var e=r.memoizedState;return e!==null&&t!==null&&i7(t,e[1])?e[0]:(o=o(),r.memoizedState=[o,t],o)}function Fd(o,t,r){return B2&21?(Nt(r,t)||(r=Tl(),R1.lanes|=r,A2|=r,o.baseState=!0),t):(o.baseState&&(o.baseState=!1,Xo=!0),o.memoizedState=r)}function gf(o,t){var r=h1;h1=r!==0&&4>r?r:4,o(!0);var e=F5.transition;F5.transition={};try{o(!1),t()}finally{h1=r,F5.transition=e}}function Pd(){return xt().memoizedState}function uf(o,t,r){var e=Yr(o);if(r={lane:e,action:r,hasEagerState:!1,eagerState:null,next:null},Od(o))Nd(t,r);else if(r=hd(o,t,r,e),r!==null){var a=Ro();Ot(r,o,e,a),Rd(r,t,e)}}function pf(o,t,r){var e=Yr(o),a={lane:e,action:r,hasEagerState:!1,eagerState:null,next:null};if(Od(o))Nd(t,a);else{var c=o.alternate;if(o.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var i=t.lastRenderedState,l=c(i,r);if(a.hasEagerState=!0,a.eagerState=l,Nt(l,i)){var w=t.interleaved;w===null?(a.next=a,t7(t)):(a.next=w.next,w.next=a),t.interleaved=a;return}}catch{}finally{}r=hd(o,t,a,e),r!==null&&(a=Ro(),Ot(r,o,e,a),Rd(r,t,e))}}function Od(o){var t=o.alternate;return o===R1||t!==null&&t===R1}function Nd(o,t){Aa=K3=!0;var r=o.pending;r===null?t.next=t:(t.next=r.next,r.next=t),o.pending=t}function Rd(o,t,r){if(r&4194240){var e=t.lanes;e&=o.pendingLanes,r|=e,t.lanes=r,D8(o,r)}}var G3={readContext:yt,useCallback:Mo,useContext:Mo,useEffect:Mo,useImperativeHandle:Mo,useInsertionEffect:Mo,useLayoutEffect:Mo,useMemo:Mo,useReducer:Mo,useRef:Mo,useState:Mo,useDebugValue:Mo,useDeferredValue:Mo,useTransition:Mo,useMutableSource:Mo,useSyncExternalStore:Mo,useId:Mo,unstable_isNewReconciler:!1},hf={readContext:yt,useCallback:function(o,t){return Xt().memoizedState=[o,t===void 0?null:t],o},useContext:yt,useEffect:$9,useImperativeHandle:function(o,t,r){return r=r!=null?r.concat([o]):null,L3(4194308,4,Hd.bind(null,t,o),r)},useLayoutEffect:function(o,t){return L3(4194308,4,o,t)},useInsertionEffect:function(o,t){return L3(4,2,o,t)},useMemo:function(o,t){var r=Xt();return t=t===void 0?null:t,o=o(),r.memoizedState=[o,t],o},useReducer:function(o,t,r){var e=Xt();return t=r!==void 0?r(t):t,e.memoizedState=e.baseState=t,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:t},e.queue=o,o=o.dispatch=uf.bind(null,R1,o),[e.memoizedState,o]},useRef:function(o){var t=Xt();return o={current:o},t.memoizedState=o},useState:W9,useDebugValue:s7,useDeferredValue:function(o){return Xt().memoizedState=o},useTransition:function(){var o=W9(!1),t=o[0];return o=gf.bind(null,o[1]),Xt().memoizedState=o,[t,o]},useMutableSource:function(){},useSyncExternalStore:function(o,t,r){var e=R1,a=Xt();if(P1){if(r===void 0)throw Error(i0(407));r=r()}else{if(r=t(),so===null)throw Error(i0(349));B2&30||zd(e,t,r)}a.memoizedState=r;var c={value:r,getSnapshot:t};return a.queue=c,$9(_d.bind(null,e,c,o),[o]),e.flags|=2048,Qa(9,kd.bind(null,e,c,r,t),void 0,null),r},useId:function(){var o=Xt(),t=so.identifierPrefix;if(P1){var r=sr,e=dr;r=(e&~(1<<32-Pt(e)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ka++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bf++,t=":"+t+"r"+r.toString(32)+":";return o.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:yt,useCallback:Bd,useContext:yt,useEffect:d7,useImperativeHandle:Ed,useInsertionEffect:Ld,useLayoutEffect:Vd,useMemo:Ad,useReducer:P5,useRef:Sd,useState:function(){return P5(Ga)},useDebugValue:s7,useDeferredValue:function(o){var t=xt();return Fd(t,oo.memoizedState,o)},useTransition:function(){var o=P5(Ga)[0],t=xt().memoizedState;return[o,t]},useMutableSource:xd,useSyncExternalStore:md,useId:Pd,unstable_isNewReconciler:!1},yf={readContext:yt,useCallback:Bd,useContext:yt,useEffect:d7,useImperativeHandle:Ed,useInsertionEffect:Ld,useLayoutEffect:Vd,useMemo:Ad,useReducer:O5,useRef:Sd,useState:function(){return O5(Ga)},useDebugValue:s7,useDeferredValue:function(o){var t=xt();return oo===null?t.memoizedState=o:Fd(t,oo.memoizedState,o)},useTransition:function(){var o=O5(Ga)[0],t=xt().memoizedState;return[o,t]},useMutableSource:xd,useSyncExternalStore:md,useId:Pd,unstable_isNewReconciler:!1};function Bt(o,t){if(o&&o.defaultProps){t=T1({},t),o=o.defaultProps;for(var r in o)t[r]===void 0&&(t[r]=o[r]);return t}return t}function h8(o,t,r,e){t=o.memoizedState,r=r(e,t),r=r==null?t:T1({},t,r),o.memoizedState=r,o.lanes===0&&(o.updateQueue.baseState=r)}var sc={isMounted:function(o){return(o=o._reactInternals)?O2(o)===o:!1},enqueueSetState:function(o,t,r){o=o._reactInternals;var e=Ro(),a=Yr(o),c=wr(e,a);c.payload=t,r!=null&&(c.callback=r),t=jr(o,c,a),t!==null&&(Ot(t,o,a,e),C3(t,o,a))},enqueueReplaceState:function(o,t,r){o=o._reactInternals;var e=Ro(),a=Yr(o),c=wr(e,a);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=jr(o,c,a),t!==null&&(Ot(t,o,a,e),C3(t,o,a))},enqueueForceUpdate:function(o,t){o=o._reactInternals;var r=Ro(),e=Yr(o),a=wr(r,e);a.tag=2,t!=null&&(a.callback=t),t=jr(o,a,e),t!==null&&(Ot(t,o,e,r),C3(t,o,e))}};function K9(o,t,r,e,a,c,i){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(e,c,i):t.prototype&&t.prototype.isPureReactComponent?!Ua(r,e)||!Ua(a,c):!0}function Td(o,t,r){var e=!1,a=Wr,c=t.contextType;return typeof c=="object"&&c!==null?c=yt(c):(a=$o(t)?H2:Lo.current,e=t.contextTypes,c=(e=e!=null)?ke(o,a):Wr),t=new t(r,c),o.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sc,o.stateNode=t,t._reactInternals=o,e&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=c),t}function G9(o,t,r,e){o=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,e),t.state!==o&&sc.enqueueReplaceState(t,t.state,null)}function f8(o,t,r,e){var a=o.stateNode;a.props=r,a.state=o.memoizedState,a.refs={},r7(o);var c=t.contextType;typeof c=="object"&&c!==null?a.context=yt(c):(c=$o(t)?H2:Lo.current,a.context=ke(o,c)),a.state=o.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(h8(o,t,c,r),a.state=o.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&sc.enqueueReplaceState(a,a.state,null),W3(o,r,a,e),a.state=o.memoizedState),typeof a.componentDidMount=="function"&&(o.flags|=4194308)}function Se(o,t){try{var r="",e=t;do r+=Wp(e),e=e.return;while(e);var a=r}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:o,source:t,stack:a,digest:null}}function N5(o,t,r){return{value:o,source:null,stack:r??null,digest:t??null}}function y8(o,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Id(o,t,r){r=wr(-1,r),r.tag=3,r.payload={element:null};var e=t.value;return r.callback=function(){J3||(J3=!0,V8=e),y8(o,t)},r}function Dd(o,t,r){r=wr(-1,r),r.tag=3;var e=o.type.getDerivedStateFromError;if(typeof e=="function"){var a=t.value;r.payload=function(){return e(a)},r.callback=function(){y8(o,t)}}var c=o.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){y8(o,t),typeof e!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Q9(o,t,r){var e=o.pingCache;if(e===null){e=o.pingCache=new xf;var a=new Set;e.set(t,a)}else a=e.get(t),a===void 0&&(a=new Set,e.set(t,a));a.has(r)||(a.add(r),o=Ff.bind(null,o,t,r),t.then(o,o))}function J9(o){do{var t;if((t=o.tag===13)&&(t=o.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return o;o=o.return}while(o!==null);return null}function ol(o,t,r,e,a){return o.mode&1?(o.flags|=65536,o.lanes=a,o):(o===t?o.flags|=65536:(o.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=wr(-1,1),t.tag=2,jr(r,t,1))),r.lanes|=1),o)}var mf=pr.ReactCurrentOwner,Xo=!1;function No(o,t,r,e){t.child=o===null?pd(t,null,r,e):Me(t,o.child,r,e)}function tl(o,t,r,e,a){r=r.render;var c=t.ref;return xe(t,a),e=n7(o,t,r,e,c,a),r=l7(),o!==null&&!Xo?(t.updateQueue=o.updateQueue,t.flags&=-2053,o.lanes&=~a,ur(o,t,a)):(P1&&r&&$8(t),t.flags|=1,No(o,t,e,a),t.child)}function rl(o,t,r,e,a){if(o===null){var c=r.type;return typeof c=="function"&&!f7(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Zd(o,t,c,e,a)):(o=B3(r.type,null,e,t,t.mode,a),o.ref=t.ref,o.return=t,t.child=o)}if(c=o.child,!(o.lanes&a)){var i=c.memoizedProps;if(r=r.compare,r=r!==null?r:Ua,r(i,e)&&o.ref===t.ref)return ur(o,t,a)}return t.flags|=1,o=qr(c,e),o.ref=t.ref,o.return=t,t.child=o}function Zd(o,t,r,e,a){if(o!==null){var c=o.memoizedProps;if(Ua(c,e)&&o.ref===t.ref)if(Xo=!1,t.pendingProps=e=c,(o.lanes&a)!==0)o.flags&131072&&(Xo=!0);else return t.lanes=o.lanes,ur(o,t,a)}return x8(o,t,r,e,a)}function jd(o,t,r){var e=t.pendingProps,a=e.children,c=o!==null?o.memoizedState:null;if(e.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},S1(ue,rt),rt|=r;else{if(!(r&1073741824))return o=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:o,cachePool:null,transitions:null},t.updateQueue=null,S1(ue,rt),rt|=o,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=c!==null?c.baseLanes:r,S1(ue,rt),rt|=e}else c!==null?(e=c.baseLanes|r,t.memoizedState=null):e=r,S1(ue,rt),rt|=e;return No(o,t,a,r),t.child}function Ud(o,t){var r=t.ref;(o===null&&r!==null||o!==null&&o.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function x8(o,t,r,e,a){var c=$o(r)?H2:Lo.current;return c=ke(t,c),xe(t,a),r=n7(o,t,r,e,c,a),e=l7(),o!==null&&!Xo?(t.updateQueue=o.updateQueue,t.flags&=-2053,o.lanes&=~a,ur(o,t,a)):(P1&&e&&$8(t),t.flags|=1,No(o,t,r,a),t.child)}function el(o,t,r,e,a){if($o(r)){var c=!0;j3(t)}else c=!1;if(xe(t,a),t.stateNode===null)V3(o,t),Td(t,r,e),f8(t,r,e,a),e=!0;else if(o===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var w=i.context,b=r.contextType;typeof b=="object"&&b!==null?b=yt(b):(b=$o(r)?H2:Lo.current,b=ke(t,b));var y=r.getDerivedStateFromProps,f=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==e||w!==b)&&G9(t,i,e,b),Fr=!1;var m=t.memoizedState;i.state=m,W3(t,e,i,a),w=t.memoizedState,l!==e||m!==w||Wo.current||Fr?(typeof y=="function"&&(h8(t,r,y,e),w=t.memoizedState),(l=Fr||K9(t,r,l,e,m,w,b))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=w),i.props=e,i.state=w,i.context=b,e=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,fd(o,t),l=t.memoizedProps,b=t.type===t.elementType?l:Bt(t.type,l),i.props=b,f=t.pendingProps,m=i.context,w=r.contextType,typeof w=="object"&&w!==null?w=yt(w):(w=$o(r)?H2:Lo.current,w=ke(t,w));var x=r.getDerivedStateFromProps;(y=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||m!==w)&&G9(t,i,e,w),Fr=!1,m=t.memoizedState,i.state=m,W3(t,e,i,a);var s=t.memoizedState;l!==f||m!==s||Wo.current||Fr?(typeof x=="function"&&(h8(t,r,x,e),s=t.memoizedState),(b=Fr||K9(t,r,b,e,m,s,w)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,s,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,s,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===o.memoizedProps&&m===o.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===o.memoizedProps&&m===o.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=s),i.props=e,i.state=s,i.context=w,e=b):(typeof i.componentDidUpdate!="function"||l===o.memoizedProps&&m===o.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===o.memoizedProps&&m===o.memoizedState||(t.flags|=1024),e=!1)}return m8(o,t,r,e,c,a)}function m8(o,t,r,e,a,c){Ud(o,t);var i=(t.flags&128)!==0;if(!e&&!i)return a&&Z9(t,r,!1),ur(o,t,c);e=t.stateNode,mf.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:e.render();return t.flags|=1,o!==null&&i?(t.child=Me(t,o.child,null,c),t.child=Me(t,null,l,c)):No(o,t,l,c),t.memoizedState=e.state,a&&Z9(t,r,!0),t.child}function Yd(o){var t=o.stateNode;t.pendingContext?D9(o,t.pendingContext,t.pendingContext!==t.context):t.context&&D9(o,t.context,!1),e7(o,t.containerInfo)}function al(o,t,r,e,a){return _e(),G8(a),t.flags|=256,No(o,t,r,e),t.child}var z8={dehydrated:null,treeContext:null,retryLane:0};function k8(o){return{baseLanes:o,cachePool:null,transitions:null}}function qd(o,t,r){var e=t.pendingProps,a=N1.current,c=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=o!==null&&o.memoizedState===null?!1:(a&2)!==0),l?(c=!0,t.flags&=-129):(o===null||o.memoizedState!==null)&&(a|=1),S1(N1,a&1),o===null)return u8(t),o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(t.mode&1?o.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=e.children,o=e.fallback,c?(e=t.mode,c=t.child,i={mode:"hidden",children:i},!(e&1)&&c!==null?(c.childLanes=0,c.pendingProps=i):c=bc(i,e,0,null),o=V2(o,e,r,null),c.return=t,o.return=t,c.sibling=o,t.child=c,t.child.memoizedState=k8(r),t.memoizedState=z8,o):w7(t,i));if(a=o.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return zf(o,t,i,e,l,a,r);if(c){c=e.fallback,i=t.mode,a=o.child,l=a.sibling;var w={mode:"hidden",children:e.children};return!(i&1)&&t.child!==a?(e=t.child,e.childLanes=0,e.pendingProps=w,t.deletions=null):(e=qr(a,w),e.subtreeFlags=a.subtreeFlags&14680064),l!==null?c=qr(l,c):(c=V2(c,i,r,null),c.flags|=2),c.return=t,e.return=t,e.sibling=c,t.child=e,e=c,c=t.child,i=o.child.memoizedState,i=i===null?k8(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},c.memoizedState=i,c.childLanes=o.childLanes&~r,t.memoizedState=z8,e}return c=o.child,o=c.sibling,e=qr(c,{mode:"visible",children:e.children}),!(t.mode&1)&&(e.lanes=r),e.return=t,e.sibling=null,o!==null&&(r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)),t.child=e,t.memoizedState=null,e}function w7(o,t){return t=bc({mode:"visible",children:t},o.mode,0,null),t.return=o,o.child=t}function x3(o,t,r,e){return e!==null&&G8(e),Me(t,o.child,null,r),o=w7(t,t.pendingProps.children),o.flags|=2,t.memoizedState=null,o}function zf(o,t,r,e,a,c,i){if(r)return t.flags&256?(t.flags&=-257,e=N5(Error(i0(422))),x3(o,t,i,e)):t.memoizedState!==null?(t.child=o.child,t.flags|=128,null):(c=e.fallback,a=t.mode,e=bc({mode:"visible",children:e.children},a,0,null),c=V2(c,a,i,null),c.flags|=2,e.return=t,c.return=t,e.sibling=c,t.child=e,t.mode&1&&Me(t,o.child,null,i),t.child.memoizedState=k8(i),t.memoizedState=z8,c);if(!(t.mode&1))return x3(o,t,i,null);if(a.data==="$!"){if(e=a.nextSibling&&a.nextSibling.dataset,e)var l=e.dgst;return e=l,c=Error(i0(419)),e=N5(c,e,void 0),x3(o,t,i,e)}if(l=(i&o.childLanes)!==0,Xo||l){if(e=so,e!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(e.suspendedLanes|i)?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,gr(o,a),Ot(e,o,a,-1))}return h7(),e=N5(Error(i0(421))),x3(o,t,i,e)}return a.data==="$?"?(t.flags|=128,t.child=o.child,t=Pf.bind(null,o),a._reactRetry=t,null):(o=c.treeContext,et=Zr(a.nextSibling),at=t,P1=!0,Ft=null,o!==null&&(ut[pt++]=dr,ut[pt++]=sr,ut[pt++]=E2,dr=o.id,sr=o.overflow,E2=t),t=w7(t,e.children),t.flags|=4096,t)}function cl(o,t,r){o.lanes|=t;var e=o.alternate;e!==null&&(e.lanes|=t),p8(o.return,t,r)}function R5(o,t,r,e,a){var c=o.memoizedState;c===null?o.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=e,c.tail=r,c.tailMode=a)}function Xd(o,t,r){var e=t.pendingProps,a=e.revealOrder,c=e.tail;if(No(o,t,e.children,r),e=N1.current,e&2)e=e&1|2,t.flags|=128;else{if(o!==null&&o.flags&128)o:for(o=t.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&cl(o,r,t);else if(o.tag===19)cl(o,r,t);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break o;for(;o.sibling===null;){if(o.return===null||o.return===t)break o;o=o.return}o.sibling.return=o.return,o=o.sibling}e&=1}if(S1(N1,e),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)o=r.alternate,o!==null&&$3(o)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),R5(t,!1,a,r,c);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(o=a.alternate,o!==null&&$3(o)===null){t.child=a;break}o=a.sibling,a.sibling=r,r=a,a=o}R5(t,!0,r,null,c);break;case"together":R5(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function V3(o,t){!(t.mode&1)&&o!==null&&(o.alternate=null,t.alternate=null,t.flags|=2)}function ur(o,t,r){if(o!==null&&(t.dependencies=o.dependencies),A2|=t.lanes,!(r&t.childLanes))return null;if(o!==null&&t.child!==o.child)throw Error(i0(153));if(t.child!==null){for(o=t.child,r=qr(o,o.pendingProps),t.child=r,r.return=t;o.sibling!==null;)o=o.sibling,r=r.sibling=qr(o,o.pendingProps),r.return=t;r.sibling=null}return t.child}function kf(o,t,r){switch(t.tag){case 3:Yd(t),_e();break;case 5:yd(t);break;case 1:$o(t.type)&&j3(t);break;case 4:e7(t,t.stateNode.containerInfo);break;case 10:var e=t.type._context,a=t.memoizedProps.value;S1(q3,e._currentValue),e._currentValue=a;break;case 13:if(e=t.memoizedState,e!==null)return e.dehydrated!==null?(S1(N1,N1.current&1),t.flags|=128,null):r&t.child.childLanes?qd(o,t,r):(S1(N1,N1.current&1),o=ur(o,t,r),o!==null?o.sibling:null);S1(N1,N1.current&1);break;case 19:if(e=(r&t.childLanes)!==0,o.flags&128){if(e)return Xd(o,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),S1(N1,N1.current),e)break;return null;case 22:case 23:return t.lanes=0,jd(o,t,r)}return ur(o,t,r)}var Wd,_8,$d,Kd;Wd=function(o,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)o.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};_8=function(){};$d=function(o,t,r,e){var a=o.memoizedProps;if(a!==e){o=t.stateNode,S2(Kt.current);var c=null;switch(r){case"input":a=q5(o,a),e=q5(o,e),c=[];break;case"select":a=T1({},a,{value:void 0}),e=T1({},e,{value:void 0}),c=[];break;case"textarea":a=$5(o,a),e=$5(o,e),c=[];break;default:typeof a.onClick!="function"&&typeof e.onClick=="function"&&(o.onclick=D3)}G5(r,e);var i;r=null;for(b in a)if(!e.hasOwnProperty(b)&&a.hasOwnProperty(b)&&a[b]!=null)if(b==="style"){var l=a[b];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(Na.hasOwnProperty(b)?c||(c=[]):(c=c||[]).push(b,null));for(b in e){var w=e[b];if(l=a?.[b],e.hasOwnProperty(b)&&w!==l&&(w!=null||l!=null))if(b==="style")if(l){for(i in l)!l.hasOwnProperty(i)||w&&w.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in w)w.hasOwnProperty(i)&&l[i]!==w[i]&&(r||(r={}),r[i]=w[i])}else r||(c||(c=[]),c.push(b,r)),r=w;else b==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,l=l?l.__html:void 0,w!=null&&l!==w&&(c=c||[]).push(b,w)):b==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(b,""+w):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(Na.hasOwnProperty(b)?(w!=null&&b==="onScroll"&&H1("scroll",o),c||l===w||(c=[])):(c=c||[]).push(b,w))}r&&(c=c||[]).push("style",r);var b=c;(t.updateQueue=b)&&(t.flags|=4)}};Kd=function(o,t,r,e){r!==e&&(t.flags|=4)};function ma(o,t){if(!P1)switch(o.tailMode){case"hidden":t=o.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?o.tail=null:r.sibling=null;break;case"collapsed":r=o.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?t||o.tail===null?o.tail=null:o.tail.sibling=null:e.sibling=null}}function Co(o){var t=o.alternate!==null&&o.alternate.child===o.child,r=0,e=0;if(t)for(var a=o.child;a!==null;)r|=a.lanes|a.childLanes,e|=a.subtreeFlags&14680064,e|=a.flags&14680064,a.return=o,a=a.sibling;else for(a=o.child;a!==null;)r|=a.lanes|a.childLanes,e|=a.subtreeFlags,e|=a.flags,a.return=o,a=a.sibling;return o.subtreeFlags|=e,o.childLanes=r,t}function _f(o,t,r){var e=t.pendingProps;switch(K8(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Co(t),null;case 1:return $o(t.type)&&Z3(),Co(t),null;case 3:return e=t.stateNode,Ce(),E1(Wo),E1(Lo),c7(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(o===null||o.child===null)&&(f3(t)?t.flags|=4:o===null||o.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(B8(Ft),Ft=null))),_8(o,t),Co(t),null;case 5:a7(t);var a=S2($a.current);if(r=t.type,o!==null&&t.stateNode!=null)$d(o,t,r,e,a),o.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!e){if(t.stateNode===null)throw Error(i0(166));return Co(t),null}if(o=S2(Kt.current),f3(t)){e=t.stateNode,r=t.type;var c=t.memoizedProps;switch(e[Wt]=t,e[Xa]=c,o=(t.mode&1)!==0,r){case"dialog":H1("cancel",e),H1("close",e);break;case"iframe":case"object":case"embed":H1("load",e);break;case"video":case"audio":for(a=0;a<Sa.length;a++)H1(Sa[a],e);break;case"source":H1("error",e);break;case"img":case"image":case"link":H1("error",e),H1("load",e);break;case"details":H1("toggle",e);break;case"input":b9(e,c),H1("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!c.multiple},H1("invalid",e);break;case"textarea":u9(e,c),H1("invalid",e)}G5(r,c),a=null;for(var i in c)if(c.hasOwnProperty(i)){var l=c[i];i==="children"?typeof l=="string"?e.textContent!==l&&(c.suppressHydrationWarning!==!0&&h3(e.textContent,l,o),a=["children",l]):typeof l=="number"&&e.textContent!==""+l&&(c.suppressHydrationWarning!==!0&&h3(e.textContent,l,o),a=["children",""+l]):Na.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&H1("scroll",e)}switch(r){case"input":c3(e),g9(e,c,!0);break;case"textarea":c3(e),p9(e);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(e.onclick=D3)}e=a,t.updateQueue=e,e!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=_l(r)),o==="http://www.w3.org/1999/xhtml"?r==="script"?(o=i.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof e.is=="string"?o=i.createElement(r,{is:e.is}):(o=i.createElement(r),r==="select"&&(i=o,e.multiple?i.multiple=!0:e.size&&(i.size=e.size))):o=i.createElementNS(o,r),o[Wt]=t,o[Xa]=e,Wd(o,t,!1,!1),t.stateNode=o;o:{switch(i=Q5(r,e),r){case"dialog":H1("cancel",o),H1("close",o),a=e;break;case"iframe":case"object":case"embed":H1("load",o),a=e;break;case"video":case"audio":for(a=0;a<Sa.length;a++)H1(Sa[a],o);a=e;break;case"source":H1("error",o),a=e;break;case"img":case"image":case"link":H1("error",o),H1("load",o),a=e;break;case"details":H1("toggle",o),a=e;break;case"input":b9(o,e),a=q5(o,e),H1("invalid",o);break;case"option":a=e;break;case"select":o._wrapperState={wasMultiple:!!e.multiple},a=T1({},e,{value:void 0}),H1("invalid",o);break;case"textarea":u9(o,e),a=$5(o,e),H1("invalid",o);break;default:a=e}G5(r,a),l=a;for(c in l)if(l.hasOwnProperty(c)){var w=l[c];c==="style"?Sl(o,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Ml(o,w)):c==="children"?typeof w=="string"?(r!=="textarea"||w!=="")&&Ra(o,w):typeof w=="number"&&Ra(o,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Na.hasOwnProperty(c)?w!=null&&c==="onScroll"&&H1("scroll",o):w!=null&&P8(o,c,w,i))}switch(r){case"input":c3(o),g9(o,e,!1);break;case"textarea":c3(o),p9(o);break;case"option":e.value!=null&&o.setAttribute("value",""+Xr(e.value));break;case"select":o.multiple=!!e.multiple,c=e.value,c!=null?pe(o,!!e.multiple,c,!1):e.defaultValue!=null&&pe(o,!!e.multiple,e.defaultValue,!0);break;default:typeof a.onClick=="function"&&(o.onclick=D3)}switch(r){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break o;case"img":e=!0;break o;default:e=!1}}e&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Co(t),null;case 6:if(o&&t.stateNode!=null)Kd(o,t,o.memoizedProps,e);else{if(typeof e!="string"&&t.stateNode===null)throw Error(i0(166));if(r=S2($a.current),S2(Kt.current),f3(t)){if(e=t.stateNode,r=t.memoizedProps,e[Wt]=t,(c=e.nodeValue!==r)&&(o=at,o!==null))switch(o.tag){case 3:h3(e.nodeValue,r,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&h3(e.nodeValue,r,(o.mode&1)!==0)}c&&(t.flags|=4)}else e=(r.nodeType===9?r:r.ownerDocument).createTextNode(e),e[Wt]=t,t.stateNode=e}return Co(t),null;case 13:if(E1(N1),e=t.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(P1&&et!==null&&t.mode&1&&!(t.flags&128))gd(),_e(),t.flags|=98560,c=!1;else if(c=f3(t),e!==null&&e.dehydrated!==null){if(o===null){if(!c)throw Error(i0(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i0(317));c[Wt]=t}else _e(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Co(t),c=!1}else Ft!==null&&(B8(Ft),Ft=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(e=e!==null,e!==(o!==null&&o.memoizedState!==null)&&e&&(t.child.flags|=8192,t.mode&1&&(o===null||N1.current&1?to===0&&(to=3):h7())),t.updateQueue!==null&&(t.flags|=4),Co(t),null);case 4:return Ce(),_8(o,t),o===null&&Ya(t.stateNode.containerInfo),Co(t),null;case 10:return o7(t.type._context),Co(t),null;case 17:return $o(t.type)&&Z3(),Co(t),null;case 19:if(E1(N1),c=t.memoizedState,c===null)return Co(t),null;if(e=(t.flags&128)!==0,i=c.rendering,i===null)if(e)ma(c,!1);else{if(to!==0||o!==null&&o.flags&128)for(o=t.child;o!==null;){if(i=$3(o),i!==null){for(t.flags|=128,ma(c,!1),e=i.updateQueue,e!==null&&(t.updateQueue=e,t.flags|=4),t.subtreeFlags=0,e=r,r=t.child;r!==null;)c=r,o=e,c.flags&=14680066,i=c.alternate,i===null?(c.childLanes=0,c.lanes=o,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,c.type=i.type,o=i.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),r=r.sibling;return S1(N1,N1.current&1|2),t.child}o=o.sibling}c.tail!==null&&X1()>Le&&(t.flags|=128,e=!0,ma(c,!1),t.lanes=4194304)}else{if(!e)if(o=$3(i),o!==null){if(t.flags|=128,e=!0,r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ma(c,!0),c.tail===null&&c.tailMode==="hidden"&&!i.alternate&&!P1)return Co(t),null}else 2*X1()-c.renderingStartTime>Le&&r!==1073741824&&(t.flags|=128,e=!0,ma(c,!1),t.lanes=4194304);c.isBackwards?(i.sibling=t.child,t.child=i):(r=c.last,r!==null?r.sibling=i:t.child=i,c.last=i)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=X1(),t.sibling=null,r=N1.current,S1(N1,e?r&1|2:r&1),t):(Co(t),null);case 22:case 23:return p7(),e=t.memoizedState!==null,o!==null&&o.memoizedState!==null!==e&&(t.flags|=8192),e&&t.mode&1?rt&1073741824&&(Co(t),t.subtreeFlags&6&&(t.flags|=8192)):Co(t),null;case 24:return null;case 25:return null}throw Error(i0(156,t.tag))}function Mf(o,t){switch(K8(t),t.tag){case 1:return $o(t.type)&&Z3(),o=t.flags,o&65536?(t.flags=o&-65537|128,t):null;case 3:return Ce(),E1(Wo),E1(Lo),c7(),o=t.flags,o&65536&&!(o&128)?(t.flags=o&-65537|128,t):null;case 5:return a7(t),null;case 13:if(E1(N1),o=t.memoizedState,o!==null&&o.dehydrated!==null){if(t.alternate===null)throw Error(i0(340));_e()}return o=t.flags,o&65536?(t.flags=o&-65537|128,t):null;case 19:return E1(N1),null;case 4:return Ce(),null;case 10:return o7(t.type._context),null;case 22:case 23:return p7(),null;case 24:return null;default:return null}}var m3=!1,So=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,h0=null;function ge(o,t){var r=o.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(e){U1(o,t,e)}else r.current=null}function M8(o,t,r){try{r()}catch(e){U1(o,t,e)}}var il=!1;function Sf(o,t){if(l8=R3,o=td(),W8(o)){if("selectionStart"in o)var r={start:o.selectionStart,end:o.selectionEnd};else o:{r=(r=o.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var a=e.anchorOffset,c=e.focusNode;e=e.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break o}var i=0,l=-1,w=-1,b=0,y=0,f=o,m=null;t:for(;;){for(var x;f!==r||a!==0&&f.nodeType!==3||(l=i+a),f!==c||e!==0&&f.nodeType!==3||(w=i+e),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===o)break t;if(m===r&&++b===a&&(l=i),m===c&&++y===e&&(w=i),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}r=l===-1||w===-1?null:{start:l,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(d8={focusedElem:o,selectionRange:r},R3=!1,h0=t;h0!==null;)if(t=h0,o=t.child,(t.subtreeFlags&1028)!==0&&o!==null)o.return=t,h0=o;else for(;h0!==null;){t=h0;try{var s=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(s!==null){var d=s.memoizedProps,n=s.memoizedState,u=t.stateNode,v=u.getSnapshotBeforeUpdate(t.elementType===t.type?d:Bt(t.type,d),n);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i0(163))}}catch(M){U1(t,t.return,M)}if(o=t.sibling,o!==null){o.return=t.return,h0=o;break}h0=t.return}return s=il,il=!1,s}function Fa(o,t,r){var e=t.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var a=e=e.next;do{if((a.tag&o)===o){var c=a.destroy;a.destroy=void 0,c!==void 0&&M8(t,r,c)}a=a.next}while(a!==e)}}function wc(o,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&o)===o){var e=r.create;r.destroy=e()}r=r.next}while(r!==t)}}function C8(o){var t=o.ref;if(t!==null){var r=o.stateNode;switch(o.tag){case 5:o=r;break;default:o=r}typeof t=="function"?t(o):t.current=o}}function Gd(o){var t=o.alternate;t!==null&&(o.alternate=null,Gd(t)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(t=o.stateNode,t!==null&&(delete t[Wt],delete t[Xa],delete t[v8],delete t[df],delete t[sf])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function Qd(o){return o.tag===5||o.tag===3||o.tag===4}function nl(o){o:for(;;){for(;o.sibling===null;){if(o.return===null||Qd(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue o;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function S8(o,t,r){var e=o.tag;if(e===5||e===6)o=o.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(o,t):r.insertBefore(o,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(o,r)):(t=r,t.appendChild(o)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=D3));else if(e!==4&&(o=o.child,o!==null))for(S8(o,t,r),o=o.sibling;o!==null;)S8(o,t,r),o=o.sibling}function L8(o,t,r){var e=o.tag;if(e===5||e===6)o=o.stateNode,t?r.insertBefore(o,t):r.appendChild(o);else if(e!==4&&(o=o.child,o!==null))for(L8(o,t,r),o=o.sibling;o!==null;)L8(o,t,r),o=o.sibling}var ho=null,At=!1;function Br(o,t,r){for(r=r.child;r!==null;)Jd(o,t,r),r=r.sibling}function Jd(o,t,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ec,r)}catch{}switch(r.tag){case 5:So||ge(r,t);case 6:var e=ho,a=At;ho=null,Br(o,t,r),ho=e,At=a,ho!==null&&(At?(o=ho,r=r.stateNode,o.nodeType===8?o.parentNode.removeChild(r):o.removeChild(r)):ho.removeChild(r.stateNode));break;case 18:ho!==null&&(At?(o=ho,r=r.stateNode,o.nodeType===8?E5(o.parentNode,r):o.nodeType===1&&E5(o,r),Za(o)):E5(ho,r.stateNode));break;case 4:e=ho,a=At,ho=r.stateNode.containerInfo,At=!0,Br(o,t,r),ho=e,At=a;break;case 0:case 11:case 14:case 15:if(!So&&(e=r.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){a=e=e.next;do{var c=a,i=c.destroy;c=c.tag,i!==void 0&&(c&2||c&4)&&M8(r,t,i),a=a.next}while(a!==e)}Br(o,t,r);break;case 1:if(!So&&(ge(r,t),e=r.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=r.memoizedProps,e.state=r.memoizedState,e.componentWillUnmount()}catch(l){U1(r,t,l)}Br(o,t,r);break;case 21:Br(o,t,r);break;case 22:r.mode&1?(So=(e=So)||r.memoizedState!==null,Br(o,t,r),So=e):Br(o,t,r);break;default:Br(o,t,r)}}function ll(o){var t=o.updateQueue;if(t!==null){o.updateQueue=null;var r=o.stateNode;r===null&&(r=o.stateNode=new Cf),t.forEach(function(e){var a=Of.bind(null,o,e);r.has(e)||(r.add(e),e.then(a,a))})}}function Et(o,t){var r=t.deletions;if(r!==null)for(var e=0;e<r.length;e++){var a=r[e];try{var c=o,i=t,l=i;o:for(;l!==null;){switch(l.tag){case 5:ho=l.stateNode,At=!1;break o;case 3:ho=l.stateNode.containerInfo,At=!0;break o;case 4:ho=l.stateNode.containerInfo,At=!0;break o}l=l.return}if(ho===null)throw Error(i0(160));Jd(c,i,a),ho=null,At=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(b){U1(a,t,b)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)os(t,o),t=t.sibling}function os(o,t){var r=o.alternate,e=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(Et(t,o),qt(o),e&4){try{Fa(3,o,o.return),wc(3,o)}catch(d){U1(o,o.return,d)}try{Fa(5,o,o.return)}catch(d){U1(o,o.return,d)}}break;case 1:Et(t,o),qt(o),e&512&&r!==null&&ge(r,r.return);break;case 5:if(Et(t,o),qt(o),e&512&&r!==null&&ge(r,r.return),o.flags&32){var a=o.stateNode;try{Ra(a,"")}catch(d){U1(o,o.return,d)}}if(e&4&&(a=o.stateNode,a!=null)){var c=o.memoizedProps,i=r!==null?r.memoizedProps:c,l=o.type,w=o.updateQueue;if(o.updateQueue=null,w!==null)try{l==="input"&&c.type==="radio"&&c.name!=null&&zl(a,c),Q5(l,i);var b=Q5(l,c);for(i=0;i<w.length;i+=2){var y=w[i],f=w[i+1];y==="style"?Sl(a,f):y==="dangerouslySetInnerHTML"?Ml(a,f):y==="children"?Ra(a,f):P8(a,y,f,b)}switch(l){case"input":X5(a,c);break;case"textarea":kl(a,c);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var x=c.value;x!=null?pe(a,!!c.multiple,x,!1):m!==!!c.multiple&&(c.defaultValue!=null?pe(a,!!c.multiple,c.defaultValue,!0):pe(a,!!c.multiple,c.multiple?[]:"",!1))}a[Xa]=c}catch(d){U1(o,o.return,d)}}break;case 6:if(Et(t,o),qt(o),e&4){if(o.stateNode===null)throw Error(i0(162));a=o.stateNode,c=o.memoizedProps;try{a.nodeValue=c}catch(d){U1(o,o.return,d)}}break;case 3:if(Et(t,o),qt(o),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Za(t.containerInfo)}catch(d){U1(o,o.return,d)}break;case 4:Et(t,o),qt(o);break;case 13:Et(t,o),qt(o),a=o.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(g7=X1())),e&4&&ll(o);break;case 22:if(y=r!==null&&r.memoizedState!==null,o.mode&1?(So=(b=So)||y,Et(t,o),So=b):Et(t,o),qt(o),e&8192){if(b=o.memoizedState!==null,(o.stateNode.isHidden=b)&&!y&&o.mode&1)for(h0=o,y=o.child;y!==null;){for(f=h0=y;h0!==null;){switch(m=h0,x=m.child,m.tag){case 0:case 11:case 14:case 15:Fa(4,m,m.return);break;case 1:ge(m,m.return);var s=m.stateNode;if(typeof s.componentWillUnmount=="function"){e=m,r=m.return;try{t=e,s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(d){U1(e,r,d)}}break;case 5:ge(m,m.return);break;case 22:if(m.memoizedState!==null){sl(f);continue}}x!==null?(x.return=m,h0=x):sl(f)}y=y.sibling}o:for(y=null,f=o;;){if(f.tag===5){if(y===null){y=f;try{a=f.stateNode,b?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(l=f.stateNode,w=f.memoizedProps.style,i=w!=null&&w.hasOwnProperty("display")?w.display:null,l.style.display=Cl("display",i))}catch(d){U1(o,o.return,d)}}}else if(f.tag===6){if(y===null)try{f.stateNode.nodeValue=b?"":f.memoizedProps}catch(d){U1(o,o.return,d)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===o)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===o)break o;for(;f.sibling===null;){if(f.return===null||f.return===o)break o;y===f&&(y=null),f=f.return}y===f&&(y=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(t,o),qt(o),e&4&&ll(o);break;case 21:break;default:Et(t,o),qt(o)}}function qt(o){var t=o.flags;if(t&2){try{o:{for(var r=o.return;r!==null;){if(Qd(r)){var e=r;break o}r=r.return}throw Error(i0(160))}switch(e.tag){case 5:var a=e.stateNode;e.flags&32&&(Ra(a,""),e.flags&=-33);var c=nl(o);L8(o,c,a);break;case 3:case 4:var i=e.stateNode.containerInfo,l=nl(o);S8(o,l,i);break;default:throw Error(i0(161))}}catch(w){U1(o,o.return,w)}o.flags&=-3}t&4096&&(o.flags&=-4097)}function Lf(o,t,r){h0=o,ts(o,t,r)}function ts(o,t,r){for(var e=(o.mode&1)!==0;h0!==null;){var a=h0,c=a.child;if(a.tag===22&&e){var i=a.memoizedState!==null||m3;if(!i){var l=a.alternate,w=l!==null&&l.memoizedState!==null||So;l=m3;var b=So;if(m3=i,(So=w)&&!b)for(h0=a;h0!==null;)i=h0,w=i.child,i.tag===22&&i.memoizedState!==null?wl(a):w!==null?(w.return=i,h0=w):wl(a);for(;c!==null;)h0=c,ts(c,t,r),c=c.sibling;h0=a,m3=l,So=b}dl(o,t,r)}else a.subtreeFlags&8772&&c!==null?(c.return=a,h0=c):dl(o,t,r)}}function dl(o){for(;h0!==null;){var t=h0;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:So||wc(5,t);break;case 1:var e=t.stateNode;if(t.flags&4&&!So)if(r===null)e.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Bt(t.type,r.memoizedProps);e.componentDidUpdate(a,r.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&X9(t,c,e);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}X9(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&r.focus();break;case"img":w.src&&(r.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var b=t.alternate;if(b!==null){var y=b.memoizedState;if(y!==null){var f=y.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i0(163))}So||t.flags&512&&C8(t)}catch(m){U1(t,t.return,m)}}if(t===o){h0=null;break}if(r=t.sibling,r!==null){r.return=t.return,h0=r;break}h0=t.return}}function sl(o){for(;h0!==null;){var t=h0;if(t===o){h0=null;break}var r=t.sibling;if(r!==null){r.return=t.return,h0=r;break}h0=t.return}}function wl(o){for(;h0!==null;){var t=h0;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wc(4,t)}catch(w){U1(t,r,w)}break;case 1:var e=t.stateNode;if(typeof e.componentDidMount=="function"){var a=t.return;try{e.componentDidMount()}catch(w){U1(t,a,w)}}var c=t.return;try{C8(t)}catch(w){U1(t,c,w)}break;case 5:var i=t.return;try{C8(t)}catch(w){U1(t,i,w)}}}catch(w){U1(t,t.return,w)}if(t===o){h0=null;break}var l=t.sibling;if(l!==null){l.return=t.return,h0=l;break}h0=t.return}}var Vf=Math.ceil,Q3=pr.ReactCurrentDispatcher,v7=pr.ReactCurrentOwner,ft=pr.ReactCurrentBatchConfig,i1=0,so=null,G1=null,fo=0,rt=0,ue=Kr(0),to=0,Ja=null,A2=0,vc=0,b7=0,Pa=null,qo=null,g7=0,Le=1/0,nr=null,J3=!1,V8=null,Ur=null,z3=!1,Rr=null,oc=0,Oa=0,H8=null,H3=-1,E3=0;function Ro(){return i1&6?X1():H3!==-1?H3:H3=X1()}function Yr(o){return o.mode&1?i1&2&&fo!==0?fo&-fo:vf.transition!==null?(E3===0&&(E3=Tl()),E3):(o=h1,o!==0||(o=window.event,o=o===void 0?16:ql(o.type)),o):1}function Ot(o,t,r,e){if(50<Oa)throw Oa=0,H8=null,Error(i0(185));o4(o,r,e),(!(i1&2)||o!==so)&&(o===so&&(!(i1&2)&&(vc|=r),to===4&&Or(o,fo)),Ko(o,e),r===1&&i1===0&&!(t.mode&1)&&(Le=X1()+500,lc&&Gr()))}function Ko(o,t){var r=o.callbackNode;bh(o,t);var e=N3(o,o===so?fo:0);if(e===0)r!==null&&y9(r),o.callbackNode=null,o.callbackPriority=0;else if(t=e&-e,o.callbackPriority!==t){if(r!=null&&y9(r),t===1)o.tag===0?wf(vl.bind(null,o)):wd(vl.bind(null,o)),nf(function(){!(i1&6)&&Gr()}),r=null;else{switch(Il(e)){case 1:r=I8;break;case 4:r=Nl;break;case 16:r=O3;break;case 536870912:r=Rl;break;default:r=O3}r=ds(r,rs.bind(null,o))}o.callbackPriority=t,o.callbackNode=r}}function rs(o,t){if(H3=-1,E3=0,i1&6)throw Error(i0(327));var r=o.callbackNode;if(me()&&o.callbackNode!==r)return null;var e=N3(o,o===so?fo:0);if(e===0)return null;if(e&30||e&o.expiredLanes||t)t=tc(o,e);else{t=e;var a=i1;i1|=2;var c=as();(so!==o||fo!==t)&&(nr=null,Le=X1()+500,L2(o,t));do try{Bf();break}catch(l){es(o,l)}while(!0);J8(),Q3.current=c,i1=a,G1!==null?t=0:(so=null,fo=0,t=to)}if(t!==0){if(t===2&&(a=e8(o),a!==0&&(e=a,t=E8(o,a))),t===1)throw r=Ja,L2(o,0),Or(o,e),Ko(o,X1()),r;if(t===6)Or(o,e);else{if(a=o.current.alternate,!(e&30)&&!Hf(a)&&(t=tc(o,e),t===2&&(c=e8(o),c!==0&&(e=c,t=E8(o,c))),t===1))throw r=Ja,L2(o,0),Or(o,e),Ko(o,X1()),r;switch(o.finishedWork=a,o.finishedLanes=e,t){case 0:case 1:throw Error(i0(345));case 2:_2(o,qo,nr);break;case 3:if(Or(o,e),(e&130023424)===e&&(t=g7+500-X1(),10<t)){if(N3(o,0)!==0)break;if(a=o.suspendedLanes,(a&e)!==e){Ro(),o.pingedLanes|=o.suspendedLanes&a;break}o.timeoutHandle=w8(_2.bind(null,o,qo,nr),t);break}_2(o,qo,nr);break;case 4:if(Or(o,e),(e&4194240)===e)break;for(t=o.eventTimes,a=-1;0<e;){var i=31-Pt(e);c=1<<i,i=t[i],i>a&&(a=i),e&=~c}if(e=a,e=X1()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*Vf(e/1960))-e,10<e){o.timeoutHandle=w8(_2.bind(null,o,qo,nr),e);break}_2(o,qo,nr);break;case 5:_2(o,qo,nr);break;default:throw Error(i0(329))}}}return Ko(o,X1()),o.callbackNode===r?rs.bind(null,o):null}function E8(o,t){var r=Pa;return o.current.memoizedState.isDehydrated&&(L2(o,t).flags|=256),o=tc(o,t),o!==2&&(t=qo,qo=r,t!==null&&B8(t)),o}function B8(o){qo===null?qo=o:qo.push.apply(qo,o)}function Hf(o){for(var t=o;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var e=0;e<r.length;e++){var a=r[e],c=a.getSnapshot;a=a.value;try{if(!Nt(c(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===o)break;for(;t.sibling===null;){if(t.return===null||t.return===o)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Or(o,t){for(t&=~b7,t&=~vc,o.suspendedLanes|=t,o.pingedLanes&=~t,o=o.expirationTimes;0<t;){var r=31-Pt(t),e=1<<r;o[r]=-1,t&=~e}}function vl(o){if(i1&6)throw Error(i0(327));me();var t=N3(o,0);if(!(t&1))return Ko(o,X1()),null;var r=tc(o,t);if(o.tag!==0&&r===2){var e=e8(o);e!==0&&(t=e,r=E8(o,e))}if(r===1)throw r=Ja,L2(o,0),Or(o,t),Ko(o,X1()),r;if(r===6)throw Error(i0(345));return o.finishedWork=o.current.alternate,o.finishedLanes=t,_2(o,qo,nr),Ko(o,X1()),null}function u7(o,t){var r=i1;i1|=1;try{return o(t)}finally{i1=r,i1===0&&(Le=X1()+500,lc&&Gr())}}function F2(o){Rr!==null&&Rr.tag===0&&!(i1&6)&&me();var t=i1;i1|=1;var r=ft.transition,e=h1;try{if(ft.transition=null,h1=1,o)return o()}finally{h1=e,ft.transition=r,i1=t,!(i1&6)&&Gr()}}function p7(){rt=ue.current,E1(ue)}function L2(o,t){o.finishedWork=null,o.finishedLanes=0;var r=o.timeoutHandle;if(r!==-1&&(o.timeoutHandle=-1,cf(r)),G1!==null)for(r=G1.return;r!==null;){var e=r;switch(K8(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&Z3();break;case 3:Ce(),E1(Wo),E1(Lo),c7();break;case 5:a7(e);break;case 4:Ce();break;case 13:E1(N1);break;case 19:E1(N1);break;case 10:o7(e.type._context);break;case 22:case 23:p7()}r=r.return}if(so=o,G1=o=qr(o.current,null),fo=rt=t,to=0,Ja=null,b7=vc=A2=0,qo=Pa=null,C2!==null){for(t=0;t<C2.length;t++)if(r=C2[t],e=r.interleaved,e!==null){r.interleaved=null;var a=e.next,c=r.pending;if(c!==null){var i=c.next;c.next=a,e.next=i}r.pending=e}C2=null}return o}function es(o,t){do{var r=G1;try{if(J8(),S3.current=G3,K3){for(var e=R1.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}K3=!1}if(B2=0,lo=oo=R1=null,Aa=!1,Ka=0,v7.current=null,r===null||r.return===null){to=1,Ja=t,G1=null;break}o:{var c=o,i=r.return,l=r,w=t;if(t=fo,l.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var b=w,y=l,f=y.tag;if(!(y.mode&1)&&(f===0||f===11||f===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=J9(i);if(x!==null){x.flags&=-257,ol(x,i,l,c,t),x.mode&1&&Q9(c,b,t),t=x,w=b;var s=t.updateQueue;if(s===null){var d=new Set;d.add(w),t.updateQueue=d}else s.add(w);break o}else{if(!(t&1)){Q9(c,b,t),h7();break o}w=Error(i0(426))}}else if(P1&&l.mode&1){var n=J9(i);if(n!==null){!(n.flags&65536)&&(n.flags|=256),ol(n,i,l,c,t),G8(Se(w,l));break o}}c=w=Se(w,l),to!==4&&(to=2),Pa===null?Pa=[c]:Pa.push(c),c=i;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var u=Id(c,w,t);q9(c,u);break o;case 1:l=w;var v=c.type,p=c.stateNode;if(!(c.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ur===null||!Ur.has(p)))){c.flags|=65536,t&=-t,c.lanes|=t;var M=Dd(c,l,t);q9(c,M);break o}}c=c.return}while(c!==null)}is(r)}catch(H){t=H,G1===r&&r!==null&&(G1=r=r.return);continue}break}while(!0)}function as(){var o=Q3.current;return Q3.current=G3,o===null?G3:o}function h7(){(to===0||to===3||to===2)&&(to=4),so===null||!(A2&268435455)&&!(vc&268435455)||Or(so,fo)}function tc(o,t){var r=i1;i1|=2;var e=as();(so!==o||fo!==t)&&(nr=null,L2(o,t));do try{Ef();break}catch(a){es(o,a)}while(!0);if(J8(),i1=r,Q3.current=e,G1!==null)throw Error(i0(261));return so=null,fo=0,to}function Ef(){for(;G1!==null;)cs(G1)}function Bf(){for(;G1!==null&&!ah();)cs(G1)}function cs(o){var t=ls(o.alternate,o,rt);o.memoizedProps=o.pendingProps,t===null?is(o):G1=t,v7.current=null}function is(o){var t=o;do{var r=t.alternate;if(o=t.return,t.flags&32768){if(r=Mf(r,t),r!==null){r.flags&=32767,G1=r;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{to=6,G1=null;return}}else if(r=_f(r,t,rt),r!==null){G1=r;return}if(t=t.sibling,t!==null){G1=t;return}G1=t=o}while(t!==null);to===0&&(to=5)}function _2(o,t,r){var e=h1,a=ft.transition;try{ft.transition=null,h1=1,Af(o,t,r,e)}finally{ft.transition=a,h1=e}return null}function Af(o,t,r,e){do me();while(Rr!==null);if(i1&6)throw Error(i0(327));r=o.finishedWork;var a=o.finishedLanes;if(r===null)return null;if(o.finishedWork=null,o.finishedLanes=0,r===o.current)throw Error(i0(177));o.callbackNode=null,o.callbackPriority=0;var c=r.lanes|r.childLanes;if(gh(o,c),o===so&&(G1=so=null,fo=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||z3||(z3=!0,ds(O3,function(){return me(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=ft.transition,ft.transition=null;var i=h1;h1=1;var l=i1;i1|=4,v7.current=null,Sf(o,r),os(r,o),of(d8),R3=!!l8,d8=l8=null,o.current=r,Lf(r,o,a),ch(),i1=l,h1=i,ft.transition=c}else o.current=r;if(z3&&(z3=!1,Rr=o,oc=a),c=o.pendingLanes,c===0&&(Ur=null),lh(r.stateNode,e),Ko(o,X1()),t!==null)for(e=o.onRecoverableError,r=0;r<t.length;r++)a=t[r],e(a.value,{componentStack:a.stack,digest:a.digest});if(J3)throw J3=!1,o=V8,V8=null,o;return oc&1&&o.tag!==0&&me(),c=o.pendingLanes,c&1?o===H8?Oa++:(Oa=0,H8=o):Oa=0,Gr(),null}function me(){if(Rr!==null){var o=Il(oc),t=ft.transition,r=h1;try{if(ft.transition=null,h1=16>o?16:o,Rr===null)var e=!1;else{if(o=Rr,Rr=null,oc=0,i1&6)throw Error(i0(331));var a=i1;for(i1|=4,h0=o.current;h0!==null;){var c=h0,i=c.child;if(h0.flags&16){var l=c.deletions;if(l!==null){for(var w=0;w<l.length;w++){var b=l[w];for(h0=b;h0!==null;){var y=h0;switch(y.tag){case 0:case 11:case 15:Fa(8,y,c)}var f=y.child;if(f!==null)f.return=y,h0=f;else for(;h0!==null;){y=h0;var m=y.sibling,x=y.return;if(Gd(y),y===b){h0=null;break}if(m!==null){m.return=x,h0=m;break}h0=x}}}var s=c.alternate;if(s!==null){var d=s.child;if(d!==null){s.child=null;do{var n=d.sibling;d.sibling=null,d=n}while(d!==null)}}h0=c}}if(c.subtreeFlags&2064&&i!==null)i.return=c,h0=i;else o:for(;h0!==null;){if(c=h0,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Fa(9,c,c.return)}var u=c.sibling;if(u!==null){u.return=c.return,h0=u;break o}h0=c.return}}var v=o.current;for(h0=v;h0!==null;){i=h0;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,h0=p;else o:for(i=v;h0!==null;){if(l=h0,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wc(9,l)}}catch(H){U1(l,l.return,H)}if(l===i){h0=null;break o}var M=l.sibling;if(M!==null){M.return=l.return,h0=M;break o}h0=l.return}}if(i1=a,Gr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ec,o)}catch{}e=!0}return e}finally{h1=r,ft.transition=t}}return!1}function bl(o,t,r){t=Se(r,t),t=Id(o,t,1),o=jr(o,t,1),t=Ro(),o!==null&&(o4(o,1,t),Ko(o,t))}function U1(o,t,r){if(o.tag===3)bl(o,o,r);else for(;t!==null;){if(t.tag===3){bl(t,o,r);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Ur===null||!Ur.has(e))){o=Se(r,o),o=Dd(t,o,1),t=jr(t,o,1),o=Ro(),t!==null&&(o4(t,1,o),Ko(t,o));break}}t=t.return}}function Ff(o,t,r){var e=o.pingCache;e!==null&&e.delete(t),t=Ro(),o.pingedLanes|=o.suspendedLanes&r,so===o&&(fo&r)===r&&(to===4||to===3&&(fo&130023424)===fo&&500>X1()-g7?L2(o,0):b7|=r),Ko(o,t)}function ns(o,t){t===0&&(o.mode&1?(t=l3,l3<<=1,!(l3&130023424)&&(l3=4194304)):t=1);var r=Ro();o=gr(o,t),o!==null&&(o4(o,t,r),Ko(o,r))}function Pf(o){var t=o.memoizedState,r=0;t!==null&&(r=t.retryLane),ns(o,r)}function Of(o,t){var r=0;switch(o.tag){case 13:var e=o.stateNode,a=o.memoizedState;a!==null&&(r=a.retryLane);break;case 19:e=o.stateNode;break;default:throw Error(i0(314))}e!==null&&e.delete(t),ns(o,r)}var ls;ls=function(o,t,r){if(o!==null)if(o.memoizedProps!==t.pendingProps||Wo.current)Xo=!0;else{if(!(o.lanes&r)&&!(t.flags&128))return Xo=!1,kf(o,t,r);Xo=!!(o.flags&131072)}else Xo=!1,P1&&t.flags&1048576&&vd(t,Y3,t.index);switch(t.lanes=0,t.tag){case 2:var e=t.type;V3(o,t),o=t.pendingProps;var a=ke(t,Lo.current);xe(t,r),a=n7(null,t,e,o,a,r);var c=l7();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$o(e)?(c=!0,j3(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,r7(t),a.updater=sc,t.stateNode=a,a._reactInternals=t,f8(t,e,o,r),t=m8(null,t,e,!0,c,r)):(t.tag=0,P1&&c&&$8(t),No(null,t,a,r),t=t.child),t;case 16:e=t.elementType;o:{switch(V3(o,t),o=t.pendingProps,a=e._init,e=a(e._payload),t.type=e,a=t.tag=Rf(e),o=Bt(e,o),a){case 0:t=x8(null,t,e,o,r);break o;case 1:t=el(null,t,e,o,r);break o;case 11:t=tl(null,t,e,o,r);break o;case 14:t=rl(null,t,e,Bt(e.type,o),r);break o}throw Error(i0(306,e,""))}return t;case 0:return e=t.type,a=t.pendingProps,a=t.elementType===e?a:Bt(e,a),x8(o,t,e,a,r);case 1:return e=t.type,a=t.pendingProps,a=t.elementType===e?a:Bt(e,a),el(o,t,e,a,r);case 3:o:{if(Yd(t),o===null)throw Error(i0(387));e=t.pendingProps,c=t.memoizedState,a=c.element,fd(o,t),W3(t,e,null,r);var i=t.memoizedState;if(e=i.element,c.isDehydrated)if(c={element:e,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=Se(Error(i0(423)),t),t=al(o,t,e,r,a);break o}else if(e!==a){a=Se(Error(i0(424)),t),t=al(o,t,e,r,a);break o}else for(et=Zr(t.stateNode.containerInfo.firstChild),at=t,P1=!0,Ft=null,r=pd(t,null,e,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_e(),e===a){t=ur(o,t,r);break o}No(o,t,e,r)}t=t.child}return t;case 5:return yd(t),o===null&&u8(t),e=t.type,a=t.pendingProps,c=o!==null?o.memoizedProps:null,i=a.children,s8(e,a)?i=null:c!==null&&s8(e,c)&&(t.flags|=32),Ud(o,t),No(o,t,i,r),t.child;case 6:return o===null&&u8(t),null;case 13:return qd(o,t,r);case 4:return e7(t,t.stateNode.containerInfo),e=t.pendingProps,o===null?t.child=Me(t,null,e,r):No(o,t,e,r),t.child;case 11:return e=t.type,a=t.pendingProps,a=t.elementType===e?a:Bt(e,a),tl(o,t,e,a,r);case 7:return No(o,t,t.pendingProps,r),t.child;case 8:return No(o,t,t.pendingProps.children,r),t.child;case 12:return No(o,t,t.pendingProps.children,r),t.child;case 10:o:{if(e=t.type._context,a=t.pendingProps,c=t.memoizedProps,i=a.value,S1(q3,e._currentValue),e._currentValue=i,c!==null)if(Nt(c.value,i)){if(c.children===a.children&&!Wo.current){t=ur(o,t,r);break o}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var l=c.dependencies;if(l!==null){i=c.child;for(var w=l.firstContext;w!==null;){if(w.context===e){if(c.tag===1){w=wr(-1,r&-r),w.tag=2;var b=c.updateQueue;if(b!==null){b=b.shared;var y=b.pending;y===null?w.next=w:(w.next=y.next,y.next=w),b.pending=w}}c.lanes|=r,w=c.alternate,w!==null&&(w.lanes|=r),p8(c.return,r,t),l.lanes|=r;break}w=w.next}}else if(c.tag===10)i=c.type===t.type?null:c.child;else if(c.tag===18){if(i=c.return,i===null)throw Error(i0(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),p8(i,r,t),i=c.sibling}else i=c.child;if(i!==null)i.return=c;else for(i=c;i!==null;){if(i===t){i=null;break}if(c=i.sibling,c!==null){c.return=i.return,i=c;break}i=i.return}c=i}No(o,t,a.children,r),t=t.child}return t;case 9:return a=t.type,e=t.pendingProps.children,xe(t,r),a=yt(a),e=e(a),t.flags|=1,No(o,t,e,r),t.child;case 14:return e=t.type,a=Bt(e,t.pendingProps),a=Bt(e.type,a),rl(o,t,e,a,r);case 15:return Zd(o,t,t.type,t.pendingProps,r);case 17:return e=t.type,a=t.pendingProps,a=t.elementType===e?a:Bt(e,a),V3(o,t),t.tag=1,$o(e)?(o=!0,j3(t)):o=!1,xe(t,r),Td(t,e,a),f8(t,e,a,r),m8(null,t,e,!0,o,r);case 19:return Xd(o,t,r);case 22:return jd(o,t,r)}throw Error(i0(156,t.tag))};function ds(o,t){return Ol(o,t)}function Nf(o,t,r,e){this.tag=o,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(o,t,r,e){return new Nf(o,t,r,e)}function f7(o){return o=o.prototype,!(!o||!o.isReactComponent)}function Rf(o){if(typeof o=="function")return f7(o)?1:0;if(o!=null){if(o=o.$$typeof,o===N8)return 11;if(o===R8)return 14}return 2}function qr(o,t){var r=o.alternate;return r===null?(r=ht(o.tag,t,o.key,o.mode),r.elementType=o.elementType,r.type=o.type,r.stateNode=o.stateNode,r.alternate=o,o.alternate=r):(r.pendingProps=t,r.type=o.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=o.flags&14680064,r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,t=o.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=o.sibling,r.index=o.index,r.ref=o.ref,r}function B3(o,t,r,e,a,c){var i=2;if(e=o,typeof o=="function")f7(o)&&(i=1);else if(typeof o=="string")i=5;else o:switch(o){case ce:return V2(r.children,a,c,t);case O8:i=8,a|=8;break;case Z5:return o=ht(12,r,t,a|2),o.elementType=Z5,o.lanes=c,o;case j5:return o=ht(13,r,t,a),o.elementType=j5,o.lanes=c,o;case U5:return o=ht(19,r,t,a),o.elementType=U5,o.lanes=c,o;case yl:return bc(r,a,c,t);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case hl:i=10;break o;case fl:i=9;break o;case N8:i=11;break o;case R8:i=14;break o;case Ar:i=16,e=null;break o}throw Error(i0(130,o==null?o:typeof o,""))}return t=ht(i,r,t,a),t.elementType=o,t.type=e,t.lanes=c,t}function V2(o,t,r,e){return o=ht(7,o,e,t),o.lanes=r,o}function bc(o,t,r,e){return o=ht(22,o,e,t),o.elementType=yl,o.lanes=r,o.stateNode={isHidden:!1},o}function T5(o,t,r){return o=ht(6,o,null,t),o.lanes=r,o}function I5(o,t,r){return t=ht(4,o.children!==null?o.children:[],o.key,t),t.lanes=r,t.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},t}function Tf(o,t,r,e,a){this.tag=t,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=k5(0),this.expirationTimes=k5(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=k5(0),this.identifierPrefix=e,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function y7(o,t,r,e,a,c,i,l,w){return o=new Tf(o,t,r,l,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=ht(3,null,null,t),o.current=c,c.stateNode=o,c.memoizedState={element:e,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},r7(c),o}function If(o,t,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:e==null?null:""+e,children:o,containerInfo:t,implementation:r}}function ss(o){if(!o)return Wr;o=o._reactInternals;o:{if(O2(o)!==o||o.tag!==1)throw Error(i0(170));var t=o;do{switch(t.tag){case 3:t=t.stateNode.context;break o;case 1:if($o(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break o}}t=t.return}while(t!==null);throw Error(i0(171))}if(o.tag===1){var r=o.type;if($o(r))return sd(o,r,t)}return t}function ws(o,t,r,e,a,c,i,l,w){return o=y7(r,e,!0,o,a,c,i,l,w),o.context=ss(null),r=o.current,e=Ro(),a=Yr(r),c=wr(e,a),c.callback=t??null,jr(r,c,a),o.current.lanes=a,o4(o,a,e),Ko(o,e),o}function gc(o,t,r,e){var a=t.current,c=Ro(),i=Yr(a);return r=ss(r),t.context===null?t.context=r:t.pendingContext=r,t=wr(c,i),t.payload={element:o},e=e===void 0?null:e,e!==null&&(t.callback=e),o=jr(a,t,i),o!==null&&(Ot(o,a,i,c),C3(o,a,i)),i}function rc(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function gl(o,t){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var r=o.retryLane;o.retryLane=r!==0&&r<t?r:t}}function x7(o,t){gl(o,t),(o=o.alternate)&&gl(o,t)}function Df(){return null}var vs=typeof reportError=="function"?reportError:function(o){console.error(o)};function m7(o){this._internalRoot=o}uc.prototype.render=m7.prototype.render=function(o){var t=this._internalRoot;if(t===null)throw Error(i0(409));gc(o,t,null,null)};uc.prototype.unmount=m7.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var t=o.containerInfo;F2(function(){gc(null,o,null,null)}),t[br]=null}};function uc(o){this._internalRoot=o}uc.prototype.unstable_scheduleHydration=function(o){if(o){var t=jl();o={blockedOn:null,target:o,priority:t};for(var r=0;r<Pr.length&&t!==0&&t<Pr[r].priority;r++);Pr.splice(r,0,o),r===0&&Yl(o)}};function z7(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function pc(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function ul(){}function Zf(o,t,r,e,a){if(a){if(typeof e=="function"){var c=e;e=function(){var b=rc(i);c.call(b)}}var i=ws(t,e,o,0,null,!1,!1,"",ul);return o._reactRootContainer=i,o[br]=i.current,Ya(o.nodeType===8?o.parentNode:o),F2(),i}for(;a=o.lastChild;)o.removeChild(a);if(typeof e=="function"){var l=e;e=function(){var b=rc(w);l.call(b)}}var w=y7(o,0,!1,null,null,!1,!1,"",ul);return o._reactRootContainer=w,o[br]=w.current,Ya(o.nodeType===8?o.parentNode:o),F2(function(){gc(t,w,r,e)}),w}function hc(o,t,r,e,a){var c=r._reactRootContainer;if(c){var i=c;if(typeof a=="function"){var l=a;a=function(){var w=rc(i);l.call(w)}}gc(t,i,o,a)}else i=Zf(r,t,o,a,e);return rc(i)}Dl=function(o){switch(o.tag){case 3:var t=o.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ca(t.pendingLanes);r!==0&&(D8(t,r|1),Ko(t,X1()),!(i1&6)&&(Le=X1()+500,Gr()))}break;case 13:F2(function(){var e=gr(o,1);if(e!==null){var a=Ro();Ot(e,o,1,a)}}),x7(o,1)}};Z8=function(o){if(o.tag===13){var t=gr(o,134217728);if(t!==null){var r=Ro();Ot(t,o,134217728,r)}x7(o,134217728)}};Zl=function(o){if(o.tag===13){var t=Yr(o),r=gr(o,t);if(r!==null){var e=Ro();Ot(r,o,t,e)}x7(o,t)}};jl=function(){return h1};Ul=function(o,t){var r=h1;try{return h1=o,t()}finally{h1=r}};o8=function(o,t,r){switch(t){case"input":if(X5(o,r),t=r.name,r.type==="radio"&&t!=null){for(r=o;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var e=r[t];if(e!==o&&e.form===o.form){var a=nc(e);if(!a)throw Error(i0(90));ml(e),X5(e,a)}}}break;case"textarea":kl(o,r);break;case"select":t=r.value,t!=null&&pe(o,!!r.multiple,t,!1)}};Hl=u7;El=F2;var jf={usingClientEntryPoint:!1,Events:[r4,de,nc,Ll,Vl,u7]},za={findFiberByHostInstance:M2,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Fl(o),o===null?null:o.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ka=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ka.isDisabled&&ka.supportsFiber))try{ec=ka.inject(Uf),$t=ka}catch{}var ka;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;nt.createPortal=function(o,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z7(t))throw Error(i0(200));return If(o,t,null,r)};nt.createRoot=function(o,t){if(!z7(o))throw Error(i0(299));var r=!1,e="",a=vs;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=y7(o,1,!1,null,null,r,!1,e,a),o[br]=t.current,Ya(o.nodeType===8?o.parentNode:o),new m7(t)};nt.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var t=o._reactInternals;if(t===void 0)throw typeof o.render=="function"?Error(i0(188)):(o=Object.keys(o).join(","),Error(i0(268,o)));return o=Fl(t),o=o===null?null:o.stateNode,o};nt.flushSync=function(o){return F2(o)};nt.hydrate=function(o,t,r){if(!pc(t))throw Error(i0(200));return hc(null,o,t,!0,r)};nt.hydrateRoot=function(o,t,r){if(!z7(o))throw Error(i0(405));var e=r!=null&&r.hydratedSources||null,a=!1,c="",i=vs;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=ws(t,null,o,1,r??null,a,!1,c,i),o[br]=t.current,Ya(o),e)for(o=0;o<e.length;o++)r=e[o],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new uc(t)};nt.render=function(o,t,r){if(!pc(t))throw Error(i0(200));return hc(null,o,t,!1,r)};nt.unmountComponentAtNode=function(o){if(!pc(o))throw Error(i0(40));return o._reactRootContainer?(F2(function(){hc(null,null,o,!1,function(){o._reactRootContainer=null,o[br]=null})}),!0):!1};nt.unstable_batchedUpdates=u7;nt.unstable_renderSubtreeIntoContainer=function(o,t,r,e){if(!pc(r))throw Error(i0(200));if(o==null||o._reactInternals===void 0)throw Error(i0(38));return hc(o,t,r,!1,e)};nt.version="18.3.1-next-f1338f8080-20240426"});var a4=b1((Q_,us)=>{"use strict";function gs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gs)}catch(o){console.error(o)}}gs(),us.exports=bs()});var hs=b1(k7=>{"use strict";var ps=a4();k7.createRoot=ps.createRoot,k7.hydrateRoot=ps.hydrateRoot;var J_});var W1=b1((tM,fc)=>{(function(){"use strict";var o={}.hasOwnProperty;function t(){for(var a="",c=0;c<arguments.length;c++){var i=arguments[c];i&&(a=e(a,r(i)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var c="";for(var i in a)o.call(a,i)&&a[i]&&(c=e(c,i));return c}function e(a,c){return c?a?a+" "+c:a+c:a}typeof fc<"u"&&fc.exports?(t.default=t,fc.exports=t):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return t}):window.classNames=t})()});var iw=b1((w4,O7)=>{(function(o,t){typeof w4=="object"&&typeof O7=="object"?O7.exports=t(n0()):typeof define=="function"&&define.amd?define(["react"],t):typeof w4=="object"?w4.reactJsonView=t(n0()):o.reactJsonView=t(o.React)})(w4,function(o){return function(t){var r={};function e(a){if(r[a])return r[a].exports;var c=r[a]={i:a,l:!1,exports:{}};return t[a].call(c.exports,c,c.exports,e),c.l=!0,c.exports}return e.m=t,e.c=r,e.d=function(a,c,i){e.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:i})},e.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,c){if(1&c&&(a=e(a)),8&c||4&c&&typeof a=="object"&&a&&a.__esModule)return a;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&c&&typeof a!="string")for(var l in a)e.d(i,l,(function(w){return a[w]}).bind(null,l));return i},e.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(c,"a",c),c},e.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},e.p="",e(e.s=48)}([function(t,r){t.exports=o},function(t,r){var e=t.exports={version:"2.6.12"};typeof __e=="number"&&(__e=e)},function(t,r,e){var a=e(26)("wks"),c=e(17),i=e(3).Symbol,l=typeof i=="function";(t.exports=function(w){return a[w]||(a[w]=l&&i[w]||(l?i:c)("Symbol."+w))}).store=a},function(t,r){var e=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)},function(t,r,e){t.exports=!e(8)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(t,r){var e={}.hasOwnProperty;t.exports=function(a,c){return e.call(a,c)}},function(t,r,e){var a=e(7),c=e(16);t.exports=e(4)?function(i,l,w){return a.f(i,l,c(1,w))}:function(i,l,w){return i[l]=w,i}},function(t,r,e){var a=e(10),c=e(35),i=e(23),l=Object.defineProperty;r.f=e(4)?Object.defineProperty:function(w,b,y){if(a(w),b=i(b,!0),a(y),c)try{return l(w,b,y)}catch{}if("get"in y||"set"in y)throw TypeError("Accessors not supported!");return"value"in y&&(w[b]=y.value),w}},function(t,r){t.exports=function(e){try{return!!e()}catch{return!0}}},function(t,r,e){var a=e(40),c=e(22);t.exports=function(i){return a(c(i))}},function(t,r,e){var a=e(11);t.exports=function(c){if(!a(c))throw TypeError(c+" is not an object!");return c}},function(t,r){t.exports=function(e){return typeof e=="object"?e!==null:typeof e=="function"}},function(t,r){t.exports={}},function(t,r,e){var a=e(39),c=e(27);t.exports=Object.keys||function(i){return a(i,c)}},function(t,r){t.exports=!0},function(t,r,e){var a=e(3),c=e(1),i=e(53),l=e(6),w=e(5),b=function(y,f,m){var x,s,d,n=y&b.F,u=y&b.G,v=y&b.S,p=y&b.P,M=y&b.B,H=y&b.W,L=u?c:c[f]||(c[f]={}),k=L.prototype,C=u?a:v?a[f]:(a[f]||{}).prototype;for(x in u&&(m=f),m)(s=!n&&C&&C[x]!==void 0)&&w(L,x)||(d=s?C[x]:m[x],L[x]=u&&typeof C[x]!="function"?m[x]:M&&s?i(d,a):H&&C[x]==d?function(B){var O=function(A,Y,q){if(this instanceof B){switch(arguments.length){case 0:return new B;case 1:return new B(A);case 2:return new B(A,Y)}return new B(A,Y,q)}return B.apply(this,arguments)};return O.prototype=B.prototype,O}(d):p&&typeof d=="function"?i(Function.call,d):d,p&&((L.virtual||(L.virtual={}))[x]=d,y&b.R&&k&&!k[x]&&l(k,x,d)))};b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,t.exports=b},function(t,r){t.exports=function(e,a){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:a}}},function(t,r){var e=0,a=Math.random();t.exports=function(c){return"Symbol(".concat(c===void 0?"":c,")_",(++e+a).toString(36))}},function(t,r,e){var a=e(22);t.exports=function(c){return Object(a(c))}},function(t,r){r.f={}.propertyIsEnumerable},function(t,r,e){"use strict";var a=e(52)(!0);e(34)(String,"String",function(c){this._t=String(c),this._i=0},function(){var c,i=this._t,l=this._i;return l>=i.length?{value:void 0,done:!0}:(c=a(i,l),this._i+=c.length,{value:c,done:!1})})},function(t,r){var e=Math.ceil,a=Math.floor;t.exports=function(c){return isNaN(c=+c)?0:(c>0?a:e)(c)}},function(t,r){t.exports=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e}},function(t,r,e){var a=e(11);t.exports=function(c,i){if(!a(c))return c;var l,w;if(i&&typeof(l=c.toString)=="function"&&!a(w=l.call(c))||typeof(l=c.valueOf)=="function"&&!a(w=l.call(c))||!i&&typeof(l=c.toString)=="function"&&!a(w=l.call(c)))return w;throw TypeError("Can't convert object to primitive value")}},function(t,r){var e={}.toString;t.exports=function(a){return e.call(a).slice(8,-1)}},function(t,r,e){var a=e(26)("keys"),c=e(17);t.exports=function(i){return a[i]||(a[i]=c(i))}},function(t,r,e){var a=e(1),c=e(3),i=c["__core-js_shared__"]||(c["__core-js_shared__"]={});(t.exports=function(l,w){return i[l]||(i[l]=w!==void 0?w:{})})("versions",[]).push({version:a.version,mode:e(14)?"pure":"global",copyright:"\xA9 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,r,e){var a=e(7).f,c=e(5),i=e(2)("toStringTag");t.exports=function(l,w,b){l&&!c(l=b?l:l.prototype,i)&&a(l,i,{configurable:!0,value:w})}},function(t,r,e){e(62);for(var a=e(3),c=e(6),i=e(12),l=e(2)("toStringTag"),w="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),b=0;b<w.length;b++){var y=w[b],f=a[y],m=f&&f.prototype;m&&!m[l]&&c(m,l,y),i[y]=i.Array}},function(t,r,e){r.f=e(2)},function(t,r,e){var a=e(3),c=e(1),i=e(14),l=e(30),w=e(7).f;t.exports=function(b){var y=c.Symbol||(c.Symbol=i?{}:a.Symbol||{});b.charAt(0)=="_"||b in y||w(y,b,{value:l.f(b)})}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r){t.exports=function(e,a,c){return Math.min(Math.max(e,a),c)}},function(t,r,e){"use strict";var a=e(14),c=e(15),i=e(37),l=e(6),w=e(12),b=e(55),y=e(28),f=e(61),m=e(2)("iterator"),x=!([].keys&&"next"in[].keys()),s=function(){return this};t.exports=function(d,n,u,v,p,M,H){b(u,n,v);var L,k,C,B=function(t0){if(!x&&t0 in q)return q[t0];switch(t0){case"keys":case"values":return function(){return new u(this,t0)}}return function(){return new u(this,t0)}},O=n+" Iterator",A=p=="values",Y=!1,q=d.prototype,P=q[m]||q["@@iterator"]||p&&q[p],U=P||B(p),Q=p?A?B("entries"):U:void 0,w0=n=="Array"&&q.entries||P;if(w0&&(C=f(w0.call(new d)))!==Object.prototype&&C.next&&(y(C,O,!0),a||typeof C[m]=="function"||l(C,m,s)),A&&P&&P.name!=="values"&&(Y=!0,U=function(){return P.call(this)}),a&&!H||!x&&!Y&&q[m]||l(q,m,U),w[n]=U,w[O]=s,p)if(L={values:A?U:B("values"),keys:M?U:B("keys"),entries:Q},H)for(k in L)k in q||i(q,k,L[k]);else c(c.P+c.F*(x||Y),n,L);return L}},function(t,r,e){t.exports=!e(4)&&!e(8)(function(){return Object.defineProperty(e(36)("div"),"a",{get:function(){return 7}}).a!=7})},function(t,r,e){var a=e(11),c=e(3).document,i=a(c)&&a(c.createElement);t.exports=function(l){return i?c.createElement(l):{}}},function(t,r,e){t.exports=e(6)},function(t,r,e){var a=e(10),c=e(56),i=e(27),l=e(25)("IE_PROTO"),w=function(){},b=function(){var y,f=e(36)("iframe"),m=i.length;for(f.style.display="none",e(60).appendChild(f),f.src="javascript:",(y=f.contentWindow.document).open(),y.write("<script>document.F=Object<\/script>"),y.close(),b=y.F;m--;)delete b.prototype[i[m]];return b()};t.exports=Object.create||function(y,f){var m;return y!==null?(w.prototype=a(y),m=new w,w.prototype=null,m[l]=y):m=b(),f===void 0?m:c(m,f)}},function(t,r,e){var a=e(5),c=e(9),i=e(57)(!1),l=e(25)("IE_PROTO");t.exports=function(w,b){var y,f=c(w),m=0,x=[];for(y in f)y!=l&&a(f,y)&&x.push(y);for(;b.length>m;)a(f,y=b[m++])&&(~i(x,y)||x.push(y));return x}},function(t,r,e){var a=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(c){return a(c)=="String"?c.split(""):Object(c)}},function(t,r,e){var a=e(39),c=e(27).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(i){return a(i,c)}},function(t,r,e){var a=e(24),c=e(2)("toStringTag"),i=a(function(){return arguments}())=="Arguments";t.exports=function(l){var w,b,y;return l===void 0?"Undefined":l===null?"Null":typeof(b=function(f,m){try{return f[m]}catch{}}(w=Object(l),c))=="string"?b:i?a(w):(y=a(w))=="Object"&&typeof w.callee=="function"?"Arguments":y}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch{typeof window=="object"&&(e=window)}t.exports=e},function(t,r){var e=/-?\d+(\.\d+)?%?/g;t.exports=function(a){return a.match(e)}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getBase16Theme=r.createStyling=r.invertTheme=void 0;var a=s(e(49)),c=s(e(76)),i=s(e(81)),l=s(e(89)),w=s(e(93)),b=function(k){if(k&&k.__esModule)return k;var C={};if(k!=null)for(var B in k)Object.prototype.hasOwnProperty.call(k,B)&&(C[B]=k[B]);return C.default=k,C}(e(94)),y=s(e(132)),f=s(e(133)),m=s(e(138)),x=e(139);function s(k){return k&&k.__esModule?k:{default:k}}var d=b.default,n=(0,l.default)(d),u=(0,m.default)(f.default,x.rgb2yuv,function(k){var C,B=(0,i.default)(k,3),O=B[0],A=B[1],Y=B[2];return[(C=O,C<.25?1:C<.5?.9-C:1.1-C),A,Y]},x.yuv2rgb,y.default),v=function(k){return function(C){return{className:[C.className,k.className].filter(Boolean).join(" "),style:(0,c.default)({},C.style||{},k.style||{})}}},p=function(k,C){var B=(0,l.default)(C);for(var O in k)B.indexOf(O)===-1&&B.push(O);return B.reduce(function(A,Y){return A[Y]=function(q,P){if(q===void 0)return P;if(P===void 0)return q;var U=q===void 0?"undefined":(0,a.default)(q),Q=P===void 0?"undefined":(0,a.default)(P);switch(U){case"string":switch(Q){case"string":return[P,q].filter(Boolean).join(" ");case"object":return v({className:q,style:P});case"function":return function(w0){for(var t0=arguments.length,b0=Array(t0>1?t0-1:0),e0=1;e0<t0;e0++)b0[e0-1]=arguments[e0];return v({className:q})(P.apply(void 0,[w0].concat(b0)))}}case"object":switch(Q){case"string":return v({className:P,style:q});case"object":return(0,c.default)({},P,q);case"function":return function(w0){for(var t0=arguments.length,b0=Array(t0>1?t0-1:0),e0=1;e0<t0;e0++)b0[e0-1]=arguments[e0];return v({style:q})(P.apply(void 0,[w0].concat(b0)))}}case"function":switch(Q){case"string":return function(w0){for(var t0=arguments.length,b0=Array(t0>1?t0-1:0),e0=1;e0<t0;e0++)b0[e0-1]=arguments[e0];return q.apply(void 0,[v(w0)({className:P})].concat(b0))};case"object":return function(w0){for(var t0=arguments.length,b0=Array(t0>1?t0-1:0),e0=1;e0<t0;e0++)b0[e0-1]=arguments[e0];return q.apply(void 0,[v(w0)({style:P})].concat(b0))};case"function":return function(w0){for(var t0=arguments.length,b0=Array(t0>1?t0-1:0),e0=1;e0<t0;e0++)b0[e0-1]=arguments[e0];return q.apply(void 0,[P.apply(void 0,[w0].concat(b0))].concat(b0))}}}}(k[Y],C[Y]),A},{})},M=function(k,C){for(var B=arguments.length,O=Array(B>2?B-2:0),A=2;A<B;A++)O[A-2]=arguments[A];if(C===null)return k;Array.isArray(C)||(C=[C]);var Y=C.map(function(P){return k[P]}).filter(Boolean),q=Y.reduce(function(P,U){return typeof U=="string"?P.className=[P.className,U].filter(Boolean).join(" "):(U===void 0?"undefined":(0,a.default)(U))==="object"?P.style=(0,c.default)({},P.style,U):typeof U=="function"&&(P=(0,c.default)({},P,U.apply(void 0,[P].concat(O)))),P},{className:"",style:{}});return q.className||delete q.className,(0,l.default)(q.style).length===0&&delete q.style,q},H=r.invertTheme=function(k){return(0,l.default)(k).reduce(function(C,B){return C[B]=/^base/.test(B)?u(k[B]):B==="scheme"?k[B]+":inverted":k[B],C},{})},L=(r.createStyling=(0,w.default)(function(k){for(var C=arguments.length,B=Array(C>3?C-3:0),O=3;O<C;O++)B[O-3]=arguments[O];var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},Y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},q=A.defaultBase16,P=q===void 0?d:q,U=A.base16Themes,Q=U===void 0?null:U,w0=L(Y,Q);w0&&(Y=(0,c.default)({},w0,Y));var t0=n.reduce(function(l0,D){return l0[D]=Y[D]||P[D],l0},{}),b0=(0,l.default)(Y).reduce(function(l0,D){return n.indexOf(D)===-1&&(l0[D]=Y[D]),l0},{}),e0=k(t0),d0=p(b0,e0);return(0,w.default)(M,2).apply(void 0,[d0].concat(B))},3),r.getBase16Theme=function(k,C){if(k&&k.extend&&(k=k.extend),typeof k=="string"){var B=k.split(":"),O=(0,i.default)(B,2),A=O[0],Y=O[1];k=(C||{})[A]||b[A],Y==="inverted"&&(k=H(k))}return k&&k.hasOwnProperty("base00")?k:void 0})},function(t,r,e){"use strict";var a,c=typeof Reflect=="object"?Reflect:null,i=c&&typeof c.apply=="function"?c.apply:function(v,p,M){return Function.prototype.apply.call(v,p,M)};a=c&&typeof c.ownKeys=="function"?c.ownKeys:Object.getOwnPropertySymbols?function(v){return Object.getOwnPropertyNames(v).concat(Object.getOwnPropertySymbols(v))}:function(v){return Object.getOwnPropertyNames(v)};var l=Number.isNaN||function(v){return v!=v};function w(){w.init.call(this)}t.exports=w,t.exports.once=function(v,p){return new Promise(function(M,H){function L(){k!==void 0&&v.removeListener("error",k),M([].slice.call(arguments))}var k;p!=="error"&&(k=function(C){v.removeListener(p,L),H(C)},v.once("error",k)),v.once(p,L)})},w.EventEmitter=w,w.prototype._events=void 0,w.prototype._eventsCount=0,w.prototype._maxListeners=void 0;var b=10;function y(v){if(typeof v!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof v)}function f(v){return v._maxListeners===void 0?w.defaultMaxListeners:v._maxListeners}function m(v,p,M,H){var L,k,C,B;if(y(M),(k=v._events)===void 0?(k=v._events=Object.create(null),v._eventsCount=0):(k.newListener!==void 0&&(v.emit("newListener",p,M.listener?M.listener:M),k=v._events),C=k[p]),C===void 0)C=k[p]=M,++v._eventsCount;else if(typeof C=="function"?C=k[p]=H?[M,C]:[C,M]:H?C.unshift(M):C.push(M),(L=f(v))>0&&C.length>L&&!C.warned){C.warned=!0;var O=new Error("Possible EventEmitter memory leak detected. "+C.length+" "+String(p)+" listeners added. Use emitter.setMaxListeners() to increase limit");O.name="MaxListenersExceededWarning",O.emitter=v,O.type=p,O.count=C.length,B=O,console&&console.warn&&console.warn(B)}return v}function x(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function s(v,p,M){var H={fired:!1,wrapFn:void 0,target:v,type:p,listener:M},L=x.bind(H);return L.listener=M,H.wrapFn=L,L}function d(v,p,M){var H=v._events;if(H===void 0)return[];var L=H[p];return L===void 0?[]:typeof L=="function"?M?[L.listener||L]:[L]:M?function(k){for(var C=new Array(k.length),B=0;B<C.length;++B)C[B]=k[B].listener||k[B];return C}(L):u(L,L.length)}function n(v){var p=this._events;if(p!==void 0){var M=p[v];if(typeof M=="function")return 1;if(M!==void 0)return M.length}return 0}function u(v,p){for(var M=new Array(p),H=0;H<p;++H)M[H]=v[H];return M}Object.defineProperty(w,"defaultMaxListeners",{enumerable:!0,get:function(){return b},set:function(v){if(typeof v!="number"||v<0||l(v))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+v+".");b=v}}),w.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},w.prototype.setMaxListeners=function(v){if(typeof v!="number"||v<0||l(v))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+v+".");return this._maxListeners=v,this},w.prototype.getMaxListeners=function(){return f(this)},w.prototype.emit=function(v){for(var p=[],M=1;M<arguments.length;M++)p.push(arguments[M]);var H=v==="error",L=this._events;if(L!==void 0)H=H&&L.error===void 0;else if(!H)return!1;if(H){var k;if(p.length>0&&(k=p[0]),k instanceof Error)throw k;var C=new Error("Unhandled error."+(k?" ("+k.message+")":""));throw C.context=k,C}var B=L[v];if(B===void 0)return!1;if(typeof B=="function")i(B,this,p);else{var O=B.length,A=u(B,O);for(M=0;M<O;++M)i(A[M],this,p)}return!0},w.prototype.addListener=function(v,p){return m(this,v,p,!1)},w.prototype.on=w.prototype.addListener,w.prototype.prependListener=function(v,p){return m(this,v,p,!0)},w.prototype.once=function(v,p){return y(p),this.on(v,s(this,v,p)),this},w.prototype.prependOnceListener=function(v,p){return y(p),this.prependListener(v,s(this,v,p)),this},w.prototype.removeListener=function(v,p){var M,H,L,k,C;if(y(p),(H=this._events)===void 0)return this;if((M=H[v])===void 0)return this;if(M===p||M.listener===p)--this._eventsCount==0?this._events=Object.create(null):(delete H[v],H.removeListener&&this.emit("removeListener",v,M.listener||p));else if(typeof M!="function"){for(L=-1,k=M.length-1;k>=0;k--)if(M[k]===p||M[k].listener===p){C=M[k].listener,L=k;break}if(L<0)return this;L===0?M.shift():function(B,O){for(;O+1<B.length;O++)B[O]=B[O+1];B.pop()}(M,L),M.length===1&&(H[v]=M[0]),H.removeListener!==void 0&&this.emit("removeListener",v,C||p)}return this},w.prototype.off=w.prototype.removeListener,w.prototype.removeAllListeners=function(v){var p,M,H;if((M=this._events)===void 0)return this;if(M.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):M[v]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete M[v]),this;if(arguments.length===0){var L,k=Object.keys(M);for(H=0;H<k.length;++H)(L=k[H])!=="removeListener"&&this.removeAllListeners(L);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(p=M[v])=="function")this.removeListener(v,p);else if(p!==void 0)for(H=p.length-1;H>=0;H--)this.removeListener(v,p[H]);return this},w.prototype.listeners=function(v){return d(this,v,!0)},w.prototype.rawListeners=function(v){return d(this,v,!1)},w.listenerCount=function(v,p){return typeof v.listenerCount=="function"?v.listenerCount(p):n.call(v,p)},w.prototype.listenerCount=n,w.prototype.eventNames=function(){return this._eventsCount>0?a(this._events):[]}},function(t,r,e){t.exports.Dispatcher=e(140)},function(t,r,e){t.exports=e(142)},function(t,r,e){"use strict";r.__esModule=!0;var a=l(e(50)),c=l(e(65)),i=typeof c.default=="function"&&typeof a.default=="symbol"?function(w){return typeof w}:function(w){return w&&typeof c.default=="function"&&w.constructor===c.default&&w!==c.default.prototype?"symbol":typeof w};function l(w){return w&&w.__esModule?w:{default:w}}r.default=typeof c.default=="function"&&i(a.default)==="symbol"?function(w){return w===void 0?"undefined":i(w)}:function(w){return w&&typeof c.default=="function"&&w.constructor===c.default&&w!==c.default.prototype?"symbol":w===void 0?"undefined":i(w)}},function(t,r,e){t.exports={default:e(51),__esModule:!0}},function(t,r,e){e(20),e(29),t.exports=e(30).f("iterator")},function(t,r,e){var a=e(21),c=e(22);t.exports=function(i){return function(l,w){var b,y,f=String(c(l)),m=a(w),x=f.length;return m<0||m>=x?i?"":void 0:(b=f.charCodeAt(m))<55296||b>56319||m+1===x||(y=f.charCodeAt(m+1))<56320||y>57343?i?f.charAt(m):b:i?f.slice(m,m+2):y-56320+(b-55296<<10)+65536}}},function(t,r,e){var a=e(54);t.exports=function(c,i,l){if(a(c),i===void 0)return c;switch(l){case 1:return function(w){return c.call(i,w)};case 2:return function(w,b){return c.call(i,w,b)};case 3:return function(w,b,y){return c.call(i,w,b,y)}}return function(){return c.apply(i,arguments)}}},function(t,r){t.exports=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e}},function(t,r,e){"use strict";var a=e(38),c=e(16),i=e(28),l={};e(6)(l,e(2)("iterator"),function(){return this}),t.exports=function(w,b,y){w.prototype=a(l,{next:c(1,y)}),i(w,b+" Iterator")}},function(t,r,e){var a=e(7),c=e(10),i=e(13);t.exports=e(4)?Object.defineProperties:function(l,w){c(l);for(var b,y=i(w),f=y.length,m=0;f>m;)a.f(l,b=y[m++],w[b]);return l}},function(t,r,e){var a=e(9),c=e(58),i=e(59);t.exports=function(l){return function(w,b,y){var f,m=a(w),x=c(m.length),s=i(y,x);if(l&&b!=b){for(;x>s;)if((f=m[s++])!=f)return!0}else for(;x>s;s++)if((l||s in m)&&m[s]===b)return l||s||0;return!l&&-1}}},function(t,r,e){var a=e(21),c=Math.min;t.exports=function(i){return i>0?c(a(i),9007199254740991):0}},function(t,r,e){var a=e(21),c=Math.max,i=Math.min;t.exports=function(l,w){return(l=a(l))<0?c(l+w,0):i(l,w)}},function(t,r,e){var a=e(3).document;t.exports=a&&a.documentElement},function(t,r,e){var a=e(5),c=e(18),i=e(25)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(w){return w=c(w),a(w,i)?w[i]:typeof w.constructor=="function"&&w instanceof w.constructor?w.constructor.prototype:w instanceof Object?l:null}},function(t,r,e){"use strict";var a=e(63),c=e(64),i=e(12),l=e(9);t.exports=e(34)(Array,"Array",function(w,b){this._t=l(w),this._i=0,this._k=b},function(){var w=this._t,b=this._k,y=this._i++;return!w||y>=w.length?(this._t=void 0,c(1)):c(0,b=="keys"?y:b=="values"?w[y]:[y,w[y]])},"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},function(t,r){t.exports=function(){}},function(t,r){t.exports=function(e,a){return{value:a,done:!!e}}},function(t,r,e){t.exports={default:e(66),__esModule:!0}},function(t,r,e){e(67),e(73),e(74),e(75),t.exports=e(1).Symbol},function(t,r,e){"use strict";var a=e(3),c=e(5),i=e(4),l=e(15),w=e(37),b=e(68).KEY,y=e(8),f=e(26),m=e(28),x=e(17),s=e(2),d=e(30),n=e(31),u=e(69),v=e(70),p=e(10),M=e(11),H=e(18),L=e(9),k=e(23),C=e(16),B=e(38),O=e(71),A=e(72),Y=e(32),q=e(7),P=e(13),U=A.f,Q=q.f,w0=O.f,t0=a.Symbol,b0=a.JSON,e0=b0&&b0.stringify,d0=s("_hidden"),l0=s("toPrimitive"),D={}.propertyIsEnumerable,X=f("symbol-registry"),o0=f("symbols"),J=f("op-symbols"),c0=Object.prototype,v0=typeof t0=="function"&&!!Y.f,u0=a.QObject,f0=!u0||!u0.prototype||!u0.prototype.findChild,k0=i&&y(function(){return B(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a!=7})?function(I,W,a0){var s0=U(c0,W);s0&&delete c0[W],Q(I,W,a0),s0&&I!==c0&&Q(c0,W,s0)}:Q,A0=function(I){var W=o0[I]=B(t0.prototype);return W._k=I,W},C0=v0&&typeof t0.iterator=="symbol"?function(I){return typeof I=="symbol"}:function(I){return I instanceof t0},N0=function(I,W,a0){return I===c0&&N0(J,W,a0),p(I),W=k(W,!0),p(a0),c(o0,W)?(a0.enumerable?(c(I,d0)&&I[d0][W]&&(I[d0][W]=!1),a0=B(a0,{enumerable:C(0,!1)})):(c(I,d0)||Q(I,d0,C(1,{})),I[d0][W]=!0),k0(I,W,a0)):Q(I,W,a0)},X0=function(I,W){p(I);for(var a0,s0=u(W=L(W)),H0=0,x0=s0.length;x0>H0;)N0(I,a0=s0[H0++],W[a0]);return I},e1=function(I){var W=D.call(this,I=k(I,!0));return!(this===c0&&c(o0,I)&&!c(J,I))&&(!(W||!c(this,I)||!c(o0,I)||c(this,d0)&&this[d0][I])||W)},I0=function(I,W){if(I=L(I),W=k(W,!0),I!==c0||!c(o0,W)||c(J,W)){var a0=U(I,W);return!a0||!c(o0,W)||c(I,d0)&&I[d0][W]||(a0.enumerable=!0),a0}},B0=function(I){for(var W,a0=w0(L(I)),s0=[],H0=0;a0.length>H0;)c(o0,W=a0[H0++])||W==d0||W==b||s0.push(W);return s0},$0=function(I){for(var W,a0=I===c0,s0=w0(a0?J:L(I)),H0=[],x0=0;s0.length>x0;)!c(o0,W=s0[x0++])||a0&&!c(c0,W)||H0.push(o0[W]);return H0};v0||(w((t0=function(){if(this instanceof t0)throw TypeError("Symbol is not a constructor!");var I=x(arguments.length>0?arguments[0]:void 0),W=function(a0){this===c0&&W.call(J,a0),c(this,d0)&&c(this[d0],I)&&(this[d0][I]=!1),k0(this,I,C(1,a0))};return i&&f0&&k0(c0,I,{configurable:!0,set:W}),A0(I)}).prototype,"toString",function(){return this._k}),A.f=I0,q.f=N0,e(41).f=O.f=B0,e(19).f=e1,Y.f=$0,i&&!e(14)&&w(c0,"propertyIsEnumerable",e1,!0),d.f=function(I){return A0(s(I))}),l(l.G+l.W+l.F*!v0,{Symbol:t0});for(var R0="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),y0=0;R0.length>y0;)s(R0[y0++]);for(var a1=P(s.store),Z=0;a1.length>Z;)n(a1[Z++]);l(l.S+l.F*!v0,"Symbol",{for:function(I){return c(X,I+="")?X[I]:X[I]=t0(I)},keyFor:function(I){if(!C0(I))throw TypeError(I+" is not a symbol!");for(var W in X)if(X[W]===I)return W},useSetter:function(){f0=!0},useSimple:function(){f0=!1}}),l(l.S+l.F*!v0,"Object",{create:function(I,W){return W===void 0?B(I):X0(B(I),W)},defineProperty:N0,defineProperties:X0,getOwnPropertyDescriptor:I0,getOwnPropertyNames:B0,getOwnPropertySymbols:$0});var R=y(function(){Y.f(1)});l(l.S+l.F*R,"Object",{getOwnPropertySymbols:function(I){return Y.f(H(I))}}),b0&&l(l.S+l.F*(!v0||y(function(){var I=t0();return e0([I])!="[null]"||e0({a:I})!="{}"||e0(Object(I))!="{}"})),"JSON",{stringify:function(I){for(var W,a0,s0=[I],H0=1;arguments.length>H0;)s0.push(arguments[H0++]);if(a0=W=s0[1],(M(W)||I!==void 0)&&!C0(I))return v(W)||(W=function(x0,K0){if(typeof a0=="function"&&(K0=a0.call(this,x0,K0)),!C0(K0))return K0}),s0[1]=W,e0.apply(b0,s0)}}),t0.prototype[l0]||e(6)(t0.prototype,l0,t0.prototype.valueOf),m(t0,"Symbol"),m(Math,"Math",!0),m(a.JSON,"JSON",!0)},function(t,r,e){var a=e(17)("meta"),c=e(11),i=e(5),l=e(7).f,w=0,b=Object.isExtensible||function(){return!0},y=!e(8)(function(){return b(Object.preventExtensions({}))}),f=function(x){l(x,a,{value:{i:"O"+ ++w,w:{}}})},m=t.exports={KEY:a,NEED:!1,fastKey:function(x,s){if(!c(x))return typeof x=="symbol"?x:(typeof x=="string"?"S":"P")+x;if(!i(x,a)){if(!b(x))return"F";if(!s)return"E";f(x)}return x[a].i},getWeak:function(x,s){if(!i(x,a)){if(!b(x))return!0;if(!s)return!1;f(x)}return x[a].w},onFreeze:function(x){return y&&m.NEED&&b(x)&&!i(x,a)&&f(x),x}}},function(t,r,e){var a=e(13),c=e(32),i=e(19);t.exports=function(l){var w=a(l),b=c.f;if(b)for(var y,f=b(l),m=i.f,x=0;f.length>x;)m.call(l,y=f[x++])&&w.push(y);return w}},function(t,r,e){var a=e(24);t.exports=Array.isArray||function(c){return a(c)=="Array"}},function(t,r,e){var a=e(9),c=e(41).f,i={}.toString,l=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(w){return l&&i.call(w)=="[object Window]"?function(b){try{return c(b)}catch{return l.slice()}}(w):c(a(w))}},function(t,r,e){var a=e(19),c=e(16),i=e(9),l=e(23),w=e(5),b=e(35),y=Object.getOwnPropertyDescriptor;r.f=e(4)?y:function(f,m){if(f=i(f),m=l(m,!0),b)try{return y(f,m)}catch{}if(w(f,m))return c(!a.f.call(f,m),f[m])}},function(t,r){},function(t,r,e){e(31)("asyncIterator")},function(t,r,e){e(31)("observable")},function(t,r,e){"use strict";r.__esModule=!0;var a,c=e(77),i=(a=c)&&a.__esModule?a:{default:a};r.default=i.default||function(l){for(var w=1;w<arguments.length;w++){var b=arguments[w];for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(l[y]=b[y])}return l}},function(t,r,e){t.exports={default:e(78),__esModule:!0}},function(t,r,e){e(79),t.exports=e(1).Object.assign},function(t,r,e){var a=e(15);a(a.S+a.F,"Object",{assign:e(80)})},function(t,r,e){"use strict";var a=e(4),c=e(13),i=e(32),l=e(19),w=e(18),b=e(40),y=Object.assign;t.exports=!y||e(8)(function(){var f={},m={},x=Symbol(),s="abcdefghijklmnopqrst";return f[x]=7,s.split("").forEach(function(d){m[d]=d}),y({},f)[x]!=7||Object.keys(y({},m)).join("")!=s})?function(f,m){for(var x=w(f),s=arguments.length,d=1,n=i.f,u=l.f;s>d;)for(var v,p=b(arguments[d++]),M=n?c(p).concat(n(p)):c(p),H=M.length,L=0;H>L;)v=M[L++],a&&!u.call(p,v)||(x[v]=p[v]);return x}:y},function(t,r,e){"use strict";r.__esModule=!0;var a=i(e(82)),c=i(e(85));function i(l){return l&&l.__esModule?l:{default:l}}r.default=function(l,w){if(Array.isArray(l))return l;if((0,a.default)(Object(l)))return function(b,y){var f=[],m=!0,x=!1,s=void 0;try{for(var d,n=(0,c.default)(b);!(m=(d=n.next()).done)&&(f.push(d.value),!y||f.length!==y);m=!0);}catch(u){x=!0,s=u}finally{try{!m&&n.return&&n.return()}finally{if(x)throw s}}return f}(l,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,r,e){t.exports={default:e(83),__esModule:!0}},function(t,r,e){e(29),e(20),t.exports=e(84)},function(t,r,e){var a=e(42),c=e(2)("iterator"),i=e(12);t.exports=e(1).isIterable=function(l){var w=Object(l);return w[c]!==void 0||"@@iterator"in w||i.hasOwnProperty(a(w))}},function(t,r,e){t.exports={default:e(86),__esModule:!0}},function(t,r,e){e(29),e(20),t.exports=e(87)},function(t,r,e){var a=e(10),c=e(88);t.exports=e(1).getIterator=function(i){var l=c(i);if(typeof l!="function")throw TypeError(i+" is not iterable!");return a(l.call(i))}},function(t,r,e){var a=e(42),c=e(2)("iterator"),i=e(12);t.exports=e(1).getIteratorMethod=function(l){if(l!=null)return l[c]||l["@@iterator"]||i[a(l)]}},function(t,r,e){t.exports={default:e(90),__esModule:!0}},function(t,r,e){e(91),t.exports=e(1).Object.keys},function(t,r,e){var a=e(18),c=e(13);e(92)("keys",function(){return function(i){return c(a(i))}})},function(t,r,e){var a=e(15),c=e(1),i=e(8);t.exports=function(l,w){var b=(c.Object||{})[l]||Object[l],y={};y[l]=w(b),a(a.S+a.F*i(function(){b(1)}),"Object",y)}},function(t,r,e){(function(a){var c=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],i=/^\s+|\s+$/g,l=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,w=/\{\n\/\* \[wrapped with (.+)\] \*/,b=/,? & /,y=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^\[object .+?Constructor\]$/,x=/^0o[0-7]+$/i,s=/^(?:0|[1-9]\d*)$/,d=parseInt,n=typeof a=="object"&&a&&a.Object===Object&&a,u=typeof self=="object"&&self&&self.Object===Object&&self,v=n||u||Function("return this")();function p(Z,R,I){switch(I.length){case 0:return Z.call(R);case 1:return Z.call(R,I[0]);case 2:return Z.call(R,I[0],I[1]);case 3:return Z.call(R,I[0],I[1],I[2])}return Z.apply(R,I)}function M(Z,R){return!!(Z&&Z.length)&&function(I,W,a0){if(W!=W)return function(x0,K0,G0,M0){for(var n1=x0.length,u1=G0+(M0?1:-1);M0?u1--:++u1<n1;)if(K0(x0[u1],u1,x0))return u1;return-1}(I,H,a0);for(var s0=a0-1,H0=I.length;++s0<H0;)if(I[s0]===W)return s0;return-1}(Z,R,0)>-1}function H(Z){return Z!=Z}function L(Z,R){for(var I=Z.length,W=0;I--;)Z[I]===R&&W++;return W}function k(Z,R){for(var I=-1,W=Z.length,a0=0,s0=[];++I<W;){var H0=Z[I];H0!==R&&H0!=="__lodash_placeholder__"||(Z[I]="__lodash_placeholder__",s0[a0++]=I)}return s0}var C,B,O,A=Function.prototype,Y=Object.prototype,q=v["__core-js_shared__"],P=(C=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",U=A.toString,Q=Y.hasOwnProperty,w0=Y.toString,t0=RegExp("^"+U.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),b0=Object.create,e0=Math.max,d0=Math.min,l0=(B=A0(Object,"defineProperty"),(O=A0.name)&&O.length>2?B:void 0);function D(Z){return R0(Z)?b0(Z):{}}function X(Z){return!(!R0(Z)||function(R){return!!P&&P in R}(Z))&&(function(R){var I=R0(R)?w0.call(R):"";return I=="[object Function]"||I=="[object GeneratorFunction]"}(Z)||function(R){var I=!1;if(R!=null&&typeof R.toString!="function")try{I=!!(R+"")}catch{}return I}(Z)?t0:m).test(function(R){if(R!=null){try{return U.call(R)}catch{}try{return R+""}catch{}}return""}(Z))}function o0(Z,R,I,W){for(var a0=-1,s0=Z.length,H0=I.length,x0=-1,K0=R.length,G0=e0(s0-H0,0),M0=Array(K0+G0),n1=!W;++x0<K0;)M0[x0]=R[x0];for(;++a0<H0;)(n1||a0<s0)&&(M0[I[a0]]=Z[a0]);for(;G0--;)M0[x0++]=Z[a0++];return M0}function J(Z,R,I,W){for(var a0=-1,s0=Z.length,H0=-1,x0=I.length,K0=-1,G0=R.length,M0=e0(s0-x0,0),n1=Array(M0+G0),u1=!W;++a0<M0;)n1[a0]=Z[a0];for(var A1=a0;++K0<G0;)n1[A1+K0]=R[K0];for(;++H0<x0;)(u1||a0<s0)&&(n1[A1+I[H0]]=Z[a0++]);return n1}function c0(Z){return function(){var R=arguments;switch(R.length){case 0:return new Z;case 1:return new Z(R[0]);case 2:return new Z(R[0],R[1]);case 3:return new Z(R[0],R[1],R[2]);case 4:return new Z(R[0],R[1],R[2],R[3]);case 5:return new Z(R[0],R[1],R[2],R[3],R[4]);case 6:return new Z(R[0],R[1],R[2],R[3],R[4],R[5]);case 7:return new Z(R[0],R[1],R[2],R[3],R[4],R[5],R[6])}var I=D(Z.prototype),W=Z.apply(I,R);return R0(W)?W:I}}function v0(Z,R,I,W,a0,s0,H0,x0,K0,G0){var M0=128&R,n1=1&R,u1=2&R,A1=24&R,y1=512&R,q1=u1?void 0:c0(Z);return function k1(){for(var Q0=arguments.length,S0=Array(Q0),p1=Q0;p1--;)S0[p1]=arguments[p1];if(A1)var g1=k0(k1),x1=L(S0,g1);if(W&&(S0=o0(S0,W,a0,A1)),s0&&(S0=J(S0,s0,H0,A1)),Q0-=x1,A1&&Q0<G0){var J1=k(S0,g1);return u0(Z,R,v0,k1.placeholder,I,S0,J1,x0,K0,G0-Q0)}var l1=n1?I:this,I1=u1?l1[Z]:Z;return Q0=S0.length,x0?S0=e1(S0,x0):y1&&Q0>1&&S0.reverse(),M0&&K0<Q0&&(S0.length=K0),this&&this!==v&&this instanceof k1&&(I1=q1||c0(I1)),I1.apply(l1,S0)}}function u0(Z,R,I,W,a0,s0,H0,x0,K0,G0){var M0=8&R;R|=M0?32:64,4&(R&=~(M0?64:32))||(R&=-4);var n1=I(Z,R,a0,M0?s0:void 0,M0?H0:void 0,M0?void 0:s0,M0?void 0:H0,x0,K0,G0);return n1.placeholder=W,I0(n1,Z,R)}function f0(Z,R,I,W,a0,s0,H0,x0){var K0=2&R;if(!K0&&typeof Z!="function")throw new TypeError("Expected a function");var G0=W?W.length:0;if(G0||(R&=-97,W=a0=void 0),H0=H0===void 0?H0:e0(a1(H0),0),x0=x0===void 0?x0:a1(x0),G0-=a0?a0.length:0,64&R){var M0=W,n1=a0;W=a0=void 0}var u1=[Z,R,I,W,a0,M0,n1,s0,H0,x0];if(Z=u1[0],R=u1[1],I=u1[2],W=u1[3],a0=u1[4],!(x0=u1[9]=u1[9]==null?K0?0:Z.length:e0(u1[9]-G0,0))&&24&R&&(R&=-25),R&&R!=1)A1=R==8||R==16?function(y1,q1,k1){var Q0=c0(y1);return function S0(){for(var p1=arguments.length,g1=Array(p1),x1=p1,J1=k0(S0);x1--;)g1[x1]=arguments[x1];var l1=p1<3&&g1[0]!==J1&&g1[p1-1]!==J1?[]:k(g1,J1);if((p1-=l1.length)<k1)return u0(y1,q1,v0,S0.placeholder,void 0,g1,l1,void 0,void 0,k1-p1);var I1=this&&this!==v&&this instanceof S0?Q0:y1;return p(I1,this,g1)}}(Z,R,x0):R!=32&&R!=33||a0.length?v0.apply(void 0,u1):function(y1,q1,k1,Q0){var S0=1&q1,p1=c0(y1);return function g1(){for(var x1=-1,J1=arguments.length,l1=-1,I1=Q0.length,J0=Array(I1+J1),c1=this&&this!==v&&this instanceof g1?p1:y1;++l1<I1;)J0[l1]=Q0[l1];for(;J1--;)J0[l1++]=arguments[++x1];return p(c1,S0?k1:this,J0)}}(Z,R,I,W);else var A1=function(y1,q1,k1){var Q0=1&q1,S0=c0(y1);return function p1(){var g1=this&&this!==v&&this instanceof p1?S0:y1;return g1.apply(Q0?k1:this,arguments)}}(Z,R,I);return I0(A1,Z,R)}function k0(Z){return Z.placeholder}function A0(Z,R){var I=function(W,a0){return W?.[a0]}(Z,R);return X(I)?I:void 0}function C0(Z){var R=Z.match(w);return R?R[1].split(b):[]}function N0(Z,R){var I=R.length,W=I-1;return R[W]=(I>1?"& ":"")+R[W],R=R.join(I>2?", ":" "),Z.replace(l,`{
/* [wrapped with `+R+`] */
`)}function X0(Z,R){return!!(R=R??9007199254740991)&&(typeof Z=="number"||s.test(Z))&&Z>-1&&Z%1==0&&Z<R}function e1(Z,R){for(var I=Z.length,W=d0(R.length,I),a0=function(H0,x0){var K0=-1,G0=H0.length;for(x0||(x0=Array(G0));++K0<G0;)x0[K0]=H0[K0];return x0}(Z);W--;){var s0=R[W];Z[W]=X0(s0,I)?a0[s0]:void 0}return Z}var I0=l0?function(Z,R,I){var W,a0=R+"";return l0(Z,"toString",{configurable:!0,enumerable:!1,value:(W=N0(a0,B0(C0(a0),I)),function(){return W})})}:function(Z){return Z};function B0(Z,R){return function(I,W){for(var a0=-1,s0=I?I.length:0;++a0<s0&&W(I[a0],a0,I)!==!1;);}(c,function(I){var W="_."+I[0];R&I[1]&&!M(Z,W)&&Z.push(W)}),Z.sort()}function $0(Z,R,I){var W=f0(Z,8,void 0,void 0,void 0,void 0,void 0,R=I?void 0:R);return W.placeholder=$0.placeholder,W}function R0(Z){var R=typeof Z;return!!Z&&(R=="object"||R=="function")}function y0(Z){return Z?(Z=function(R){if(typeof R=="number")return R;if(function(a0){return typeof a0=="symbol"||function(s0){return!!s0&&typeof s0=="object"}(a0)&&w0.call(a0)=="[object Symbol]"}(R))return NaN;if(R0(R)){var I=typeof R.valueOf=="function"?R.valueOf():R;R=R0(I)?I+"":I}if(typeof R!="string")return R===0?R:+R;R=R.replace(i,"");var W=f.test(R);return W||x.test(R)?d(R.slice(2),W?2:8):y.test(R)?NaN:+R}(Z))===1/0||Z===-1/0?17976931348623157e292*(Z<0?-1:1):Z==Z?Z:0:Z===0?Z:0}function a1(Z){var R=y0(Z),I=R%1;return R==R?I?R-I:R:0}$0.placeholder={},t.exports=$0}).call(this,e(43))},function(t,r,e){"use strict";function a(J){return J&&J.__esModule?J.default:J}r.__esModule=!0;var c=e(95);r.threezerotwofour=a(c);var i=e(96);r.apathy=a(i);var l=e(97);r.ashes=a(l);var w=e(98);r.atelierDune=a(w);var b=e(99);r.atelierForest=a(b);var y=e(100);r.atelierHeath=a(y);var f=e(101);r.atelierLakeside=a(f);var m=e(102);r.atelierSeaside=a(m);var x=e(103);r.bespin=a(x);var s=e(104);r.brewer=a(s);var d=e(105);r.bright=a(d);var n=e(106);r.chalk=a(n);var u=e(107);r.codeschool=a(u);var v=e(108);r.colors=a(v);var p=e(109);r.default=a(p);var M=e(110);r.eighties=a(M);var H=e(111);r.embers=a(H);var L=e(112);r.flat=a(L);var k=e(113);r.google=a(k);var C=e(114);r.grayscale=a(C);var B=e(115);r.greenscreen=a(B);var O=e(116);r.harmonic=a(O);var A=e(117);r.hopscotch=a(A);var Y=e(118);r.isotope=a(Y);var q=e(119);r.marrakesh=a(q);var P=e(120);r.mocha=a(P);var U=e(121);r.monokai=a(U);var Q=e(122);r.ocean=a(Q);var w0=e(123);r.paraiso=a(w0);var t0=e(124);r.pop=a(t0);var b0=e(125);r.railscasts=a(b0);var e0=e(126);r.shapeshifter=a(e0);var d0=e(127);r.solarized=a(d0);var l0=e(128);r.summerfruit=a(l0);var D=e(129);r.tomorrow=a(D);var X=e(130);r.tube=a(X);var o0=e(131);r.twilight=a(o0)},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"threezerotwofour",author:"jan t. sott (http://github.com/idleberg)",base00:"#090300",base01:"#3a3432",base02:"#4a4543",base03:"#5c5855",base04:"#807d7c",base05:"#a5a2a2",base06:"#d6d5d4",base07:"#f7f7f7",base08:"#db2d20",base09:"#e8bbd0",base0A:"#fded02",base0B:"#01a252",base0C:"#b5e4f4",base0D:"#01a0e4",base0E:"#a16a94",base0F:"#cdab53"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"apathy",author:"jannik siebert (https://github.com/janniks)",base00:"#031A16",base01:"#0B342D",base02:"#184E45",base03:"#2B685E",base04:"#5F9C92",base05:"#81B5AC",base06:"#A7CEC8",base07:"#D2E7E4",base08:"#3E9688",base09:"#3E7996",base0A:"#3E4C96",base0B:"#883E96",base0C:"#963E4C",base0D:"#96883E",base0E:"#4C963E",base0F:"#3E965B"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"ashes",author:"jannik siebert (https://github.com/janniks)",base00:"#1C2023",base01:"#393F45",base02:"#565E65",base03:"#747C84",base04:"#ADB3BA",base05:"#C7CCD1",base06:"#DFE2E5",base07:"#F3F4F5",base08:"#C7AE95",base09:"#C7C795",base0A:"#AEC795",base0B:"#95C7AE",base0C:"#95AEC7",base0D:"#AE95C7",base0E:"#C795AE",base0F:"#C79595"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"atelier dune",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)",base00:"#20201d",base01:"#292824",base02:"#6e6b5e",base03:"#7d7a68",base04:"#999580",base05:"#a6a28c",base06:"#e8e4cf",base07:"#fefbec",base08:"#d73737",base09:"#b65611",base0A:"#cfb017",base0B:"#60ac39",base0C:"#1fad83",base0D:"#6684e1",base0E:"#b854d4",base0F:"#d43552"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"atelier forest",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)",base00:"#1b1918",base01:"#2c2421",base02:"#68615e",base03:"#766e6b",base04:"#9c9491",base05:"#a8a19f",base06:"#e6e2e0",base07:"#f1efee",base08:"#f22c40",base09:"#df5320",base0A:"#d5911a",base0B:"#5ab738",base0C:"#00ad9c",base0D:"#407ee7",base0E:"#6666ea",base0F:"#c33ff3"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"atelier heath",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)",base00:"#1b181b",base01:"#292329",base02:"#695d69",base03:"#776977",base04:"#9e8f9e",base05:"#ab9bab",base06:"#d8cad8",base07:"#f7f3f7",base08:"#ca402b",base09:"#a65926",base0A:"#bb8a35",base0B:"#379a37",base0C:"#159393",base0D:"#516aec",base0E:"#7b59c0",base0F:"#cc33cc"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"atelier lakeside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)",base00:"#161b1d",base01:"#1f292e",base02:"#516d7b",base03:"#5a7b8c",base04:"#7195a8",base05:"#7ea2b4",base06:"#c1e4f6",base07:"#ebf8ff",base08:"#d22d72",base09:"#935c25",base0A:"#8a8a0f",base0B:"#568c3b",base0C:"#2d8f6f",base0D:"#257fad",base0E:"#5d5db1",base0F:"#b72dd2"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"atelier seaside",author:"bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)",base00:"#131513",base01:"#242924",base02:"#5e6e5e",base03:"#687d68",base04:"#809980",base05:"#8ca68c",base06:"#cfe8cf",base07:"#f0fff0",base08:"#e6193c",base09:"#87711d",base0A:"#c3c322",base0B:"#29a329",base0C:"#1999b3",base0D:"#3d62f5",base0E:"#ad2bee",base0F:"#e619c3"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"bespin",author:"jan t. sott",base00:"#28211c",base01:"#36312e",base02:"#5e5d5c",base03:"#666666",base04:"#797977",base05:"#8a8986",base06:"#9d9b97",base07:"#baae9e",base08:"#cf6a4c",base09:"#cf7d34",base0A:"#f9ee98",base0B:"#54be0d",base0C:"#afc4db",base0D:"#5ea6ea",base0E:"#9b859d",base0F:"#937121"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"brewer",author:"timoth\xE9e poisot (http://github.com/tpoisot)",base00:"#0c0d0e",base01:"#2e2f30",base02:"#515253",base03:"#737475",base04:"#959697",base05:"#b7b8b9",base06:"#dadbdc",base07:"#fcfdfe",base08:"#e31a1c",base09:"#e6550d",base0A:"#dca060",base0B:"#31a354",base0C:"#80b1d3",base0D:"#3182bd",base0E:"#756bb1",base0F:"#b15928"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"bright",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#303030",base02:"#505050",base03:"#b0b0b0",base04:"#d0d0d0",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ffffff",base08:"#fb0120",base09:"#fc6d24",base0A:"#fda331",base0B:"#a1c659",base0C:"#76c7b7",base0D:"#6fb3d2",base0E:"#d381c3",base0F:"#be643c"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"chalk",author:"chris kempson (http://chriskempson.com)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#f5f5f5",base08:"#fb9fb1",base09:"#eda987",base0A:"#ddb26f",base0B:"#acc267",base0C:"#12cfc0",base0D:"#6fc2ef",base0E:"#e1a3ee",base0F:"#deaf8f"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"codeschool",author:"brettof86",base00:"#232c31",base01:"#1c3657",base02:"#2a343a",base03:"#3f4944",base04:"#84898c",base05:"#9ea7a6",base06:"#a7cfa3",base07:"#b5d8f6",base08:"#2a5491",base09:"#43820d",base0A:"#a03b1e",base0B:"#237986",base0C:"#b02f30",base0D:"#484d79",base0E:"#c59820",base0F:"#c98344"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"colors",author:"mrmrs (http://clrs.cc)",base00:"#111111",base01:"#333333",base02:"#555555",base03:"#777777",base04:"#999999",base05:"#bbbbbb",base06:"#dddddd",base07:"#ffffff",base08:"#ff4136",base09:"#ff851b",base0A:"#ffdc00",base0B:"#2ecc40",base0C:"#7fdbff",base0D:"#0074d9",base0E:"#b10dc9",base0F:"#85144b"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"default",author:"chris kempson (http://chriskempson.com)",base00:"#181818",base01:"#282828",base02:"#383838",base03:"#585858",base04:"#b8b8b8",base05:"#d8d8d8",base06:"#e8e8e8",base07:"#f8f8f8",base08:"#ab4642",base09:"#dc9656",base0A:"#f7ca88",base0B:"#a1b56c",base0C:"#86c1b9",base0D:"#7cafc2",base0E:"#ba8baf",base0F:"#a16946"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"eighties",author:"chris kempson (http://chriskempson.com)",base00:"#2d2d2d",base01:"#393939",base02:"#515151",base03:"#747369",base04:"#a09f93",base05:"#d3d0c8",base06:"#e8e6df",base07:"#f2f0ec",base08:"#f2777a",base09:"#f99157",base0A:"#ffcc66",base0B:"#99cc99",base0C:"#66cccc",base0D:"#6699cc",base0E:"#cc99cc",base0F:"#d27b53"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"embers",author:"jannik siebert (https://github.com/janniks)",base00:"#16130F",base01:"#2C2620",base02:"#433B32",base03:"#5A5047",base04:"#8A8075",base05:"#A39A90",base06:"#BEB6AE",base07:"#DBD6D1",base08:"#826D57",base09:"#828257",base0A:"#6D8257",base0B:"#57826D",base0C:"#576D82",base0D:"#6D5782",base0E:"#82576D",base0F:"#825757"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"flat",author:"chris kempson (http://chriskempson.com)",base00:"#2C3E50",base01:"#34495E",base02:"#7F8C8D",base03:"#95A5A6",base04:"#BDC3C7",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ECF0F1",base08:"#E74C3C",base09:"#E67E22",base0A:"#F1C40F",base0B:"#2ECC71",base0C:"#1ABC9C",base0D:"#3498DB",base0E:"#9B59B6",base0F:"#be643c"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"google",author:"seth wright (http://sethawright.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#CC342B",base09:"#F96A38",base0A:"#FBA922",base0B:"#198844",base0C:"#3971ED",base0D:"#3971ED",base0E:"#A36AC7",base0F:"#3971ED"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"grayscale",author:"alexandre gavioli (https://github.com/alexx2/)",base00:"#101010",base01:"#252525",base02:"#464646",base03:"#525252",base04:"#ababab",base05:"#b9b9b9",base06:"#e3e3e3",base07:"#f7f7f7",base08:"#7c7c7c",base09:"#999999",base0A:"#a0a0a0",base0B:"#8e8e8e",base0C:"#868686",base0D:"#686868",base0E:"#747474",base0F:"#5e5e5e"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"green screen",author:"chris kempson (http://chriskempson.com)",base00:"#001100",base01:"#003300",base02:"#005500",base03:"#007700",base04:"#009900",base05:"#00bb00",base06:"#00dd00",base07:"#00ff00",base08:"#007700",base09:"#009900",base0A:"#007700",base0B:"#00bb00",base0C:"#005500",base0D:"#009900",base0E:"#00bb00",base0F:"#005500"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"harmonic16",author:"jannik siebert (https://github.com/janniks)",base00:"#0b1c2c",base01:"#223b54",base02:"#405c79",base03:"#627e99",base04:"#aabcce",base05:"#cbd6e2",base06:"#e5ebf1",base07:"#f7f9fb",base08:"#bf8b56",base09:"#bfbf56",base0A:"#8bbf56",base0B:"#56bf8b",base0C:"#568bbf",base0D:"#8b56bf",base0E:"#bf568b",base0F:"#bf5656"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"hopscotch",author:"jan t. sott",base00:"#322931",base01:"#433b42",base02:"#5c545b",base03:"#797379",base04:"#989498",base05:"#b9b5b8",base06:"#d5d3d5",base07:"#ffffff",base08:"#dd464c",base09:"#fd8b19",base0A:"#fdcc59",base0B:"#8fc13e",base0C:"#149b93",base0D:"#1290bf",base0E:"#c85e7c",base0F:"#b33508"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"isotope",author:"jan t. sott",base00:"#000000",base01:"#404040",base02:"#606060",base03:"#808080",base04:"#c0c0c0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#ff0000",base09:"#ff9900",base0A:"#ff0099",base0B:"#33ff00",base0C:"#00ffff",base0D:"#0066ff",base0E:"#cc00ff",base0F:"#3300ff"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"marrakesh",author:"alexandre gavioli (http://github.com/alexx2/)",base00:"#201602",base01:"#302e00",base02:"#5f5b17",base03:"#6c6823",base04:"#86813b",base05:"#948e48",base06:"#ccc37a",base07:"#faf0a5",base08:"#c35359",base09:"#b36144",base0A:"#a88339",base0B:"#18974e",base0C:"#75a738",base0D:"#477ca1",base0E:"#8868b3",base0F:"#b3588e"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"mocha",author:"chris kempson (http://chriskempson.com)",base00:"#3B3228",base01:"#534636",base02:"#645240",base03:"#7e705a",base04:"#b8afad",base05:"#d0c8c6",base06:"#e9e1dd",base07:"#f5eeeb",base08:"#cb6077",base09:"#d28b71",base0A:"#f4bc87",base0B:"#beb55b",base0C:"#7bbda4",base0D:"#8ab3b5",base0E:"#a89bb9",base0F:"#bb9584"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"ocean",author:"chris kempson (http://chriskempson.com)",base00:"#2b303b",base01:"#343d46",base02:"#4f5b66",base03:"#65737e",base04:"#a7adba",base05:"#c0c5ce",base06:"#dfe1e8",base07:"#eff1f5",base08:"#bf616a",base09:"#d08770",base0A:"#ebcb8b",base0B:"#a3be8c",base0C:"#96b5b4",base0D:"#8fa1b3",base0E:"#b48ead",base0F:"#ab7967"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"paraiso",author:"jan t. sott",base00:"#2f1e2e",base01:"#41323f",base02:"#4f424c",base03:"#776e71",base04:"#8d8687",base05:"#a39e9b",base06:"#b9b6b0",base07:"#e7e9db",base08:"#ef6155",base09:"#f99b15",base0A:"#fec418",base0B:"#48b685",base0C:"#5bc4bf",base0D:"#06b6ef",base0E:"#815ba4",base0F:"#e96ba8"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"pop",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#b0b0b0",base05:"#d0d0d0",base06:"#e0e0e0",base07:"#ffffff",base08:"#eb008a",base09:"#f29333",base0A:"#f8ca12",base0B:"#37b349",base0C:"#00aabb",base0D:"#0e5a94",base0E:"#b31e8d",base0F:"#7a2d00"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"railscasts",author:"ryan bates (http://railscasts.com)",base00:"#2b2b2b",base01:"#272935",base02:"#3a4055",base03:"#5a647e",base04:"#d4cfc9",base05:"#e6e1dc",base06:"#f4f1ed",base07:"#f9f7f3",base08:"#da4939",base09:"#cc7833",base0A:"#ffc66d",base0B:"#a5c261",base0C:"#519f50",base0D:"#6d9cbe",base0E:"#b6b3eb",base0F:"#bc9458"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"shapeshifter",author:"tyler benziger (http://tybenz.com)",base00:"#000000",base01:"#040404",base02:"#102015",base03:"#343434",base04:"#555555",base05:"#ababab",base06:"#e0e0e0",base07:"#f9f9f9",base08:"#e92f2f",base09:"#e09448",base0A:"#dddd13",base0B:"#0ed839",base0C:"#23edda",base0D:"#3b48e3",base0E:"#f996e2",base0F:"#69542d"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"solarized",author:"ethan schoonover (http://ethanschoonover.com/solarized)",base00:"#002b36",base01:"#073642",base02:"#586e75",base03:"#657b83",base04:"#839496",base05:"#93a1a1",base06:"#eee8d5",base07:"#fdf6e3",base08:"#dc322f",base09:"#cb4b16",base0A:"#b58900",base0B:"#859900",base0C:"#2aa198",base0D:"#268bd2",base0E:"#6c71c4",base0F:"#d33682"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"summerfruit",author:"christopher corley (http://cscorley.github.io/)",base00:"#151515",base01:"#202020",base02:"#303030",base03:"#505050",base04:"#B0B0B0",base05:"#D0D0D0",base06:"#E0E0E0",base07:"#FFFFFF",base08:"#FF0086",base09:"#FD8900",base0A:"#ABA800",base0B:"#00C918",base0C:"#1faaaa",base0D:"#3777E6",base0E:"#AD00A1",base0F:"#cc6633"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"tomorrow",author:"chris kempson (http://chriskempson.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#cc6666",base09:"#de935f",base0A:"#f0c674",base0B:"#b5bd68",base0C:"#8abeb7",base0D:"#81a2be",base0E:"#b294bb",base0F:"#a3685a"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"london tube",author:"jan t. sott",base00:"#231f20",base01:"#1c3f95",base02:"#5a5758",base03:"#737171",base04:"#959ca1",base05:"#d9d8d8",base06:"#e7e7e8",base07:"#ffffff",base08:"#ee2e24",base09:"#f386a1",base0A:"#ffd204",base0B:"#00853e",base0C:"#85cebc",base0D:"#009ddc",base0E:"#98005d",base0F:"#b06110"},t.exports=r.default},function(t,r,e){"use strict";r.__esModule=!0,r.default={scheme:"twilight",author:"david hart (http://hart-dev.com)",base00:"#1e1e1e",base01:"#323537",base02:"#464b50",base03:"#5f5a60",base04:"#838184",base05:"#a7a7a7",base06:"#c3c3c3",base07:"#ffffff",base08:"#cf6a4c",base09:"#cda869",base0A:"#f9ee98",base0B:"#8f9d6a",base0C:"#afc4db",base0D:"#7587a6",base0E:"#9b859d",base0F:"#9b703f"},t.exports=r.default},function(t,r,e){var a=e(33);function c(i){var l=Math.round(a(i,0,255)).toString(16);return l.length==1?"0"+l:l}t.exports=function(i){var l=i.length===4?c(255*i[3]):"";return"#"+c(i[0])+c(i[1])+c(i[2])+l}},function(t,r,e){var a=e(134),c=e(135),i=e(136),l=e(137),w={"#":c,hsl:function(y){var f=a(y),m=l(f);return f.length===4&&m.push(f[3]),m},rgb:i};function b(y){for(var f in w)if(y.indexOf(f)===0)return w[f](y)}b.rgb=i,b.hsl=a,b.hex=c,t.exports=b},function(t,r,e){var a=e(44),c=e(33);function i(l,w){switch(l=parseFloat(l),w){case 0:return c(l,0,360);case 1:case 2:return c(l,0,100);case 3:return c(l,0,1)}}t.exports=function(l){return a(l).map(i)}},function(t,r){t.exports=function(e){e.length!==4&&e.length!==5||(e=function(i){for(var l="#",w=1;w<i.length;w++){var b=i.charAt(w);l+=b+b}return l}(e));var a=[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16)];if(e.length===9){var c=parseFloat((parseInt(e.substring(7,9),16)/255).toFixed(2));a.push(c)}return a}},function(t,r,e){var a=e(44),c=e(33);function i(l,w){return w<3?l.indexOf("%")!=-1?Math.round(255*c(parseInt(l,10),0,100)/100):c(parseInt(l,10),0,255):c(parseFloat(l),0,1)}t.exports=function(l){return a(l).map(i)}},function(t,r){t.exports=function(e){var a,c,i,l,w,b=e[0]/360,y=e[1]/100,f=e[2]/100;if(y==0)return[w=255*f,w,w];a=2*f-(c=f<.5?f*(1+y):f+y-f*y),l=[0,0,0];for(var m=0;m<3;m++)(i=b+1/3*-(m-1))<0&&i++,i>1&&i--,w=6*i<1?a+6*(c-a)*i:2*i<1?c:3*i<2?a+(c-a)*(2/3-i)*6:a,l[m]=255*w;return l}},function(t,r,e){(function(a){var c=typeof a=="object"&&a&&a.Object===Object&&a,i=typeof self=="object"&&self&&self.Object===Object&&self,l=c||i||Function("return this")();function w(k,C,B){switch(B.length){case 0:return k.call(C);case 1:return k.call(C,B[0]);case 2:return k.call(C,B[0],B[1]);case 3:return k.call(C,B[0],B[1],B[2])}return k.apply(C,B)}function b(k,C){for(var B=-1,O=C.length,A=k.length;++B<O;)k[A+B]=C[B];return k}var y=Object.prototype,f=y.hasOwnProperty,m=y.toString,x=l.Symbol,s=y.propertyIsEnumerable,d=x?x.isConcatSpreadable:void 0,n=Math.max;function u(k){return v(k)||function(C){return function(B){return function(O){return!!O&&typeof O=="object"}(B)&&function(O){return O!=null&&function(A){return typeof A=="number"&&A>-1&&A%1==0&&A<=9007199254740991}(O.length)&&!function(A){var Y=function(q){var P=typeof q;return!!q&&(P=="object"||P=="function")}(A)?m.call(A):"";return Y=="[object Function]"||Y=="[object GeneratorFunction]"}(O)}(B)}(C)&&f.call(C,"callee")&&(!s.call(C,"callee")||m.call(C)=="[object Arguments]")}(k)||!!(d&&k&&k[d])}var v=Array.isArray,p,M,H,L=(M=function(k){var C=(k=function O(A,Y,q,P,U){var Q=-1,w0=A.length;for(q||(q=u),U||(U=[]);++Q<w0;){var t0=A[Q];Y>0&&q(t0)?Y>1?O(t0,Y-1,q,P,U):b(U,t0):P||(U[U.length]=t0)}return U}(k,1)).length,B=C;for(p&&k.reverse();B--;)if(typeof k[B]!="function")throw new TypeError("Expected a function");return function(){for(var O=0,A=C?k[O].apply(this,arguments):arguments[0];++O<C;)A=k[O].call(this,A);return A}},H=n(H===void 0?M.length-1:H,0),function(){for(var k=arguments,C=-1,B=n(k.length-H,0),O=Array(B);++C<B;)O[C]=k[H+C];C=-1;for(var A=Array(H+1);++C<H;)A[C]=k[C];return A[H]=O,w(M,this,A)});t.exports=L}).call(this,e(43))},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.yuv2rgb=function(a){var c,i,l,w=a[0],b=a[1],y=a[2];return c=1*w+0*b+1.13983*y,i=1*w+-.39465*b+-.5806*y,l=1*w+2.02311*b+0*y,c=Math.min(Math.max(0,c),1),i=Math.min(Math.max(0,i),1),l=Math.min(Math.max(0,l),1),[255*c,255*i,255*l]},r.rgb2yuv=function(a){var c=a[0]/255,i=a[1]/255,l=a[2]/255;return[.299*c+.587*i+.114*l,-.14713*c+-.28886*i+.436*l,.615*c+-.51499*i+-.10001*l]}},function(t,r,e){"use strict";function a(l,w,b){return w in l?Object.defineProperty(l,w,{value:b,enumerable:!0,configurable:!0,writable:!0}):l[w]=b,l}var c=e(141),i=function(){function l(){a(this,"_callbacks",void 0),a(this,"_isDispatching",void 0),a(this,"_isHandled",void 0),a(this,"_isPending",void 0),a(this,"_lastID",void 0),a(this,"_pendingPayload",void 0),this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}var w=l.prototype;return w.register=function(b){var y="ID_"+this._lastID++;return this._callbacks[y]=b,y},w.unregister=function(b){this._callbacks[b]||c(!1),delete this._callbacks[b]},w.waitFor=function(b){this._isDispatching||c(!1);for(var y=0;y<b.length;y++){var f=b[y];this._isPending[f]?this._isHandled[f]||c(!1):(this._callbacks[f]||c(!1),this._invokeCallback(f))}},w.dispatch=function(b){this._isDispatching&&c(!1),this._startDispatching(b);try{for(var y in this._callbacks)this._isPending[y]||this._invokeCallback(y)}finally{this._stopDispatching()}},w.isDispatching=function(){return this._isDispatching},w._invokeCallback=function(b){this._isPending[b]=!0,this._callbacks[b](this._pendingPayload),this._isHandled[b]=!0},w._startDispatching=function(b){for(var y in this._callbacks)this._isPending[y]=!1,this._isHandled[y]=!1;this._pendingPayload=b,this._isDispatching=!0},w._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},l}();t.exports=i},function(t,r,e){"use strict";var a=function(c){};t.exports=function(c,i){for(var l=arguments.length,w=new Array(l>2?l-2:0),b=2;b<l;b++)w[b-2]=arguments[b];if(a(i),!c){var y;if(i===void 0)y=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=0;(y=new Error(i.replace(/%s/g,function(){return String(w[f++])}))).name="Invariant Violation"}throw y.framesToPop=1,y}}},function(t,r,e){"use strict";function a(V,E,z){return E in V?Object.defineProperty(V,E,{value:z,enumerable:!0,configurable:!0,writable:!0}):V[E]=z,V}function c(V,E){var z=Object.keys(V);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(V);E&&(_=_.filter(function(S){return Object.getOwnPropertyDescriptor(V,S).enumerable})),z.push.apply(z,_)}return z}function i(V){for(var E=1;E<arguments.length;E++){var z=arguments[E]!=null?arguments[E]:{};E%2?c(Object(z),!0).forEach(function(_){a(V,_,z[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(z)):c(Object(z)).forEach(function(_){Object.defineProperty(V,_,Object.getOwnPropertyDescriptor(z,_))})}return V}function l(V,E){if(!(V instanceof E))throw new TypeError("Cannot call a class as a function")}function w(V,E){for(var z=0;z<E.length;z++){var _=E[z];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(V,_.key,_)}}function b(V,E,z){return E&&w(V.prototype,E),z&&w(V,z),V}function y(V,E){return(y=Object.setPrototypeOf||function(z,_){return z.__proto__=_,z})(V,E)}function f(V,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");V.prototype=Object.create(E&&E.prototype,{constructor:{value:V,writable:!0,configurable:!0}}),E&&y(V,E)}function m(V){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(E){return E.__proto__||Object.getPrototypeOf(E)})(V)}function x(V){return(x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E})(V)}function s(V){if(V===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return V}function d(V,E){return!E||x(E)!=="object"&&typeof E!="function"?s(V):E}function n(V){var E=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var z,_=m(V);if(E){var S=m(this).constructor;z=Reflect.construct(_,arguments,S)}else z=_.apply(this,arguments);return d(this,z)}}e.r(r);var u=e(0),v=e.n(u);function p(){var V=this.constructor.getDerivedStateFromProps(this.props,this.state);V!=null&&this.setState(V)}function M(V){this.setState((function(E){var z=this.constructor.getDerivedStateFromProps(V,E);return z??null}).bind(this))}function H(V,E){try{var z=this.props,_=this.state;this.props=V,this.state=E,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(z,_)}finally{this.props=z,this.state=_}}function L(V){var E=V.prototype;if(!E||!E.isReactComponent)throw new Error("Can only polyfill class components");if(typeof V.getDerivedStateFromProps!="function"&&typeof E.getSnapshotBeforeUpdate!="function")return V;var z=null,_=null,S=null;if(typeof E.componentWillMount=="function"?z="componentWillMount":typeof E.UNSAFE_componentWillMount=="function"&&(z="UNSAFE_componentWillMount"),typeof E.componentWillReceiveProps=="function"?_="componentWillReceiveProps":typeof E.UNSAFE_componentWillReceiveProps=="function"&&(_="UNSAFE_componentWillReceiveProps"),typeof E.componentWillUpdate=="function"?S="componentWillUpdate":typeof E.UNSAFE_componentWillUpdate=="function"&&(S="UNSAFE_componentWillUpdate"),z!==null||_!==null||S!==null){var T=V.displayName||V.name,$=typeof V.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+T+" uses "+$+" but also contains the following legacy lifecycles:"+(z!==null?`
  `+z:"")+(_!==null?`
  `+_:"")+(S!==null?`
  `+S:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof V.getDerivedStateFromProps=="function"&&(E.componentWillMount=p,E.componentWillReceiveProps=M),typeof E.getSnapshotBeforeUpdate=="function"){if(typeof E.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");E.componentWillUpdate=H;var j=E.componentDidUpdate;E.componentDidUpdate=function(N,G,p0){var z0=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p0;j.call(this,N,G,z0)}}return V}function k(V,E){if(V==null)return{};var z,_,S=function($,j){if($==null)return{};var N,G,p0={},z0=Object.keys($);for(G=0;G<z0.length;G++)N=z0[G],j.indexOf(N)>=0||(p0[N]=$[N]);return p0}(V,E);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(V);for(_=0;_<T.length;_++)z=T[_],E.indexOf(z)>=0||Object.prototype.propertyIsEnumerable.call(V,z)&&(S[z]=V[z])}return S}function C(V){var E=function(z){return{}.toString.call(z).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}(V);return E==="number"&&(E=isNaN(V)?"nan":(0|V)!=V?"float":"integer"),E}p.__suppressDeprecationWarning=!0,M.__suppressDeprecationWarning=!0,H.__suppressDeprecationWarning=!0;var B={scheme:"rjv-default",author:"mac gainor",base00:"rgba(0, 0, 0, 0)",base01:"rgb(245, 245, 245)",base02:"rgb(235, 235, 235)",base03:"#93a1a1",base04:"rgba(0, 0, 0, 0.3)",base05:"#586e75",base06:"#073642",base07:"#002b36",base08:"#d33682",base09:"#cb4b16",base0A:"#dc322f",base0B:"#859900",base0C:"#6c71c4",base0D:"#586e75",base0E:"#2aa198",base0F:"#268bd2"},O={scheme:"rjv-grey",author:"mac gainor",base00:"rgba(1, 1, 1, 0)",base01:"rgba(1, 1, 1, 0.1)",base02:"rgba(0, 0, 0, 0.2)",base03:"rgba(1, 1, 1, 0.3)",base04:"rgba(0, 0, 0, 0.4)",base05:"rgba(1, 1, 1, 0.5)",base06:"rgba(1, 1, 1, 0.6)",base07:"rgba(1, 1, 1, 0.7)",base08:"rgba(1, 1, 1, 0.8)",base09:"rgba(1, 1, 1, 0.8)",base0A:"rgba(1, 1, 1, 0.8)",base0B:"rgba(1, 1, 1, 0.8)",base0C:"rgba(1, 1, 1, 0.8)",base0D:"rgba(1, 1, 1, 0.8)",base0E:"rgba(1, 1, 1, 0.8)",base0F:"rgba(1, 1, 1, 0.8)"},A={white:"#fff",black:"#000",transparent:"rgba(1, 1, 1, 0)",globalFontFamily:"monospace",globalCursor:"default",indentBlockWidth:"5px",braceFontWeight:"bold",braceCursor:"pointer",ellipsisFontSize:"18px",ellipsisLineHeight:"10px",ellipsisCursor:"pointer",keyMargin:"0px 5px",keyLetterSpacing:"0.5px",keyFontStyle:"none",keyBorderRadius:"3px",keyColonWeight:"bold",keyVerticalAlign:"top",keyOpacity:"0.85",keyOpacityHover:"1",keyValPaddingTop:"3px",keyValPaddingBottom:"3px",keyValPaddingRight:"5px",keyValBorderLeft:"1px solid",keyValBorderHover:"2px solid",keyValPaddingHover:"3px 5px 3px 4px",pushedContentMarginLeft:"6px",variableValuePaddingRight:"6px",nullFontSize:"11px",nullFontWeight:"bold",nullPadding:"1px 2px",nullBorderRadius:"3px",nanFontSize:"11px",nanFontWeight:"bold",nanPadding:"1px 2px",nanBorderRadius:"3px",undefinedFontSize:"11px",undefinedFontWeight:"bold",undefinedPadding:"1px 2px",undefinedBorderRadius:"3px",dataTypeFontSize:"11px",dataTypeMarginRight:"4px",datatypeOpacity:"0.8",objectSizeBorderRadius:"3px",objectSizeFontStyle:"italic",objectSizeMargin:"0px 6px 0px 0px",clipboardCursor:"pointer",clipboardCheckMarginLeft:"-12px",metaDataPadding:"0px 0px 0px 10px",arrayGroupMetaPadding:"0px 0px 0px 4px",iconContainerWidth:"17px",tooltipPadding:"4px",editInputMinWidth:"130px",editInputBorderRadius:"2px",editInputPadding:"5px",editInputMarginRight:"4px",editInputFontFamily:"monospace",iconCursor:"pointer",iconFontSize:"15px",iconPaddingRight:"1px",dateValueMarginLeft:"2px",iconMarginRight:"3px",detectedRowPaddingTop:"3px",addKeyCoverBackground:"rgba(255, 255, 255, 0.3)",addKeyCoverPosition:"absolute",addKeyCoverPositionPx:"0px",addKeyModalWidth:"200px",addKeyModalMargin:"auto",addKeyModalPadding:"10px",addKeyModalRadius:"3px"},Y=e(45),q=function(V){var E=function(z){return{backgroundColor:z.base00,ellipsisColor:z.base09,braceColor:z.base07,expandedIcon:z.base0D,collapsedIcon:z.base0E,keyColor:z.base07,arrayKeyColor:z.base0C,objectSize:z.base04,copyToClipboard:z.base0F,copyToClipboardCheck:z.base0D,objectBorder:z.base02,dataTypes:{boolean:z.base0E,date:z.base0D,float:z.base0B,function:z.base0D,integer:z.base0F,string:z.base09,nan:z.base08,null:z.base0A,undefined:z.base05,regexp:z.base0A,background:z.base02},editVariable:{editIcon:z.base0E,cancelIcon:z.base09,removeIcon:z.base09,addIcon:z.base0E,checkIcon:z.base0E,background:z.base01,color:z.base0A,border:z.base07},addKeyModal:{background:z.base05,border:z.base04,color:z.base0A,labelColor:z.base01},validationFailure:{background:z.base09,iconColor:z.base01,fontColor:z.base01}}}(V);return{"app-container":{fontFamily:A.globalFontFamily,cursor:A.globalCursor,backgroundColor:E.backgroundColor,position:"relative"},ellipsis:{display:"inline-block",color:E.ellipsisColor,fontSize:A.ellipsisFontSize,lineHeight:A.ellipsisLineHeight,cursor:A.ellipsisCursor},"brace-row":{display:"inline-block",cursor:"pointer"},brace:{display:"inline-block",cursor:A.braceCursor,fontWeight:A.braceFontWeight,color:E.braceColor},"expanded-icon":{color:E.expandedIcon},"collapsed-icon":{color:E.collapsedIcon},colon:{display:"inline-block",margin:A.keyMargin,color:E.keyColor,verticalAlign:"top"},objectKeyVal:function(z,_){return{style:i({paddingTop:A.keyValPaddingTop,paddingRight:A.keyValPaddingRight,paddingBottom:A.keyValPaddingBottom,borderLeft:A.keyValBorderLeft+" "+E.objectBorder,":hover":{paddingLeft:_.paddingLeft-1+"px",borderLeft:A.keyValBorderHover+" "+E.objectBorder}},_)}},"object-key-val-no-border":{padding:A.keyValPadding},"pushed-content":{marginLeft:A.pushedContentMarginLeft},variableValue:function(z,_){return{style:i({display:"inline-block",paddingRight:A.variableValuePaddingRight,position:"relative"},_)}},"object-name":{display:"inline-block",color:E.keyColor,letterSpacing:A.keyLetterSpacing,fontStyle:A.keyFontStyle,verticalAlign:A.keyVerticalAlign,opacity:A.keyOpacity,":hover":{opacity:A.keyOpacityHover}},"array-key":{display:"inline-block",color:E.arrayKeyColor,letterSpacing:A.keyLetterSpacing,fontStyle:A.keyFontStyle,verticalAlign:A.keyVerticalAlign,opacity:A.keyOpacity,":hover":{opacity:A.keyOpacityHover}},"object-size":{color:E.objectSize,borderRadius:A.objectSizeBorderRadius,fontStyle:A.objectSizeFontStyle,margin:A.objectSizeMargin,cursor:"default"},"data-type-label":{fontSize:A.dataTypeFontSize,marginRight:A.dataTypeMarginRight,opacity:A.datatypeOpacity},boolean:{display:"inline-block",color:E.dataTypes.boolean},date:{display:"inline-block",color:E.dataTypes.date},"date-value":{marginLeft:A.dateValueMarginLeft},float:{display:"inline-block",color:E.dataTypes.float},function:{display:"inline-block",color:E.dataTypes.function,cursor:"pointer",whiteSpace:"pre-line"},"function-value":{fontStyle:"italic"},integer:{display:"inline-block",color:E.dataTypes.integer},string:{display:"inline-block",color:E.dataTypes.string},nan:{display:"inline-block",color:E.dataTypes.nan,fontSize:A.nanFontSize,fontWeight:A.nanFontWeight,backgroundColor:E.dataTypes.background,padding:A.nanPadding,borderRadius:A.nanBorderRadius},null:{display:"inline-block",color:E.dataTypes.null,fontSize:A.nullFontSize,fontWeight:A.nullFontWeight,backgroundColor:E.dataTypes.background,padding:A.nullPadding,borderRadius:A.nullBorderRadius},undefined:{display:"inline-block",color:E.dataTypes.undefined,fontSize:A.undefinedFontSize,padding:A.undefinedPadding,borderRadius:A.undefinedBorderRadius,backgroundColor:E.dataTypes.background},regexp:{display:"inline-block",color:E.dataTypes.regexp},"copy-to-clipboard":{cursor:A.clipboardCursor},"copy-icon":{color:E.copyToClipboard,fontSize:A.iconFontSize,marginRight:A.iconMarginRight,verticalAlign:"top"},"copy-icon-copied":{color:E.copyToClipboardCheck,marginLeft:A.clipboardCheckMarginLeft},"array-group-meta-data":{display:"inline-block",padding:A.arrayGroupMetaPadding},"object-meta-data":{display:"inline-block",padding:A.metaDataPadding},"icon-container":{display:"inline-block",width:A.iconContainerWidth},tooltip:{padding:A.tooltipPadding},removeVarIcon:{verticalAlign:"top",display:"inline-block",color:E.editVariable.removeIcon,cursor:A.iconCursor,fontSize:A.iconFontSize,marginRight:A.iconMarginRight},addVarIcon:{verticalAlign:"top",display:"inline-block",color:E.editVariable.addIcon,cursor:A.iconCursor,fontSize:A.iconFontSize,marginRight:A.iconMarginRight},editVarIcon:{verticalAlign:"top",display:"inline-block",color:E.editVariable.editIcon,cursor:A.iconCursor,fontSize:A.iconFontSize,marginRight:A.iconMarginRight},"edit-icon-container":{display:"inline-block",verticalAlign:"top"},"check-icon":{display:"inline-block",cursor:A.iconCursor,color:E.editVariable.checkIcon,fontSize:A.iconFontSize,paddingRight:A.iconPaddingRight},"cancel-icon":{display:"inline-block",cursor:A.iconCursor,color:E.editVariable.cancelIcon,fontSize:A.iconFontSize,paddingRight:A.iconPaddingRight},"edit-input":{display:"inline-block",minWidth:A.editInputMinWidth,borderRadius:A.editInputBorderRadius,backgroundColor:E.editVariable.background,color:E.editVariable.color,padding:A.editInputPadding,marginRight:A.editInputMarginRight,fontFamily:A.editInputFontFamily},"detected-row":{paddingTop:A.detectedRowPaddingTop},"key-modal-request":{position:A.addKeyCoverPosition,top:A.addKeyCoverPositionPx,left:A.addKeyCoverPositionPx,right:A.addKeyCoverPositionPx,bottom:A.addKeyCoverPositionPx,backgroundColor:A.addKeyCoverBackground},"key-modal":{width:A.addKeyModalWidth,backgroundColor:E.addKeyModal.background,marginLeft:A.addKeyModalMargin,marginRight:A.addKeyModalMargin,padding:A.addKeyModalPadding,borderRadius:A.addKeyModalRadius,marginTop:"15px",position:"relative"},"key-modal-label":{color:E.addKeyModal.labelColor,marginLeft:"2px",marginBottom:"5px",fontSize:"11px"},"key-modal-input-container":{overflow:"hidden"},"key-modal-input":{width:"100%",padding:"3px 6px",fontFamily:"monospace",color:E.addKeyModal.color,border:"none",boxSizing:"border-box",borderRadius:"2px"},"key-modal-cancel":{backgroundColor:E.editVariable.removeIcon,position:"absolute",top:"0px",right:"0px",borderRadius:"0px 3px 0px 3px",cursor:"pointer"},"key-modal-cancel-icon":{color:E.addKeyModal.labelColor,fontSize:A.iconFontSize,transform:"rotate(45deg)"},"key-modal-submit":{color:E.editVariable.addIcon,fontSize:A.iconFontSize,position:"absolute",right:"2px",top:"3px",cursor:"pointer"},"function-ellipsis":{display:"inline-block",color:E.ellipsisColor,fontSize:A.ellipsisFontSize,lineHeight:A.ellipsisLineHeight,cursor:A.ellipsisCursor},"validation-failure":{float:"right",padding:"3px 6px",borderRadius:"2px",cursor:"pointer",color:E.validationFailure.fontColor,backgroundColor:E.validationFailure.background},"validation-failure-label":{marginRight:"6px"},"validation-failure-clear":{position:"relative",verticalAlign:"top",cursor:"pointer",color:E.validationFailure.iconColor,fontSize:A.iconFontSize,transform:"rotate(45deg)"}}};function P(V,E,z){return V||console.error("theme has not been set"),function(_){var S=B;return _!==!1&&_!=="none"||(S=O),Object(Y.createStyling)(q,{defaultBase16:S})(_)}(V)(E,z)}var U=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=(_.rjvId,_.type_name),T=_.displayDataTypes,$=_.theme;return T?v.a.createElement("span",Object.assign({className:"data-type-label"},P($,"data-type-label")),S):null}}]),z}(v.a.PureComponent),Q=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props;return v.a.createElement("div",P(_.theme,"boolean"),v.a.createElement(U,Object.assign({type_name:"bool"},_)),_.value?"true":"false")}}]),z}(v.a.PureComponent),w0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props;return v.a.createElement("div",P(_.theme,"date"),v.a.createElement(U,Object.assign({type_name:"date"},_)),v.a.createElement("span",Object.assign({className:"date-value"},P(_.theme,"date-value")),_.value.toLocaleTimeString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})))}}]),z}(v.a.PureComponent),t0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props;return v.a.createElement("div",P(_.theme,"float"),v.a.createElement(U,Object.assign({type_name:"float"},_)),this.props.value)}}]),z}(v.a.PureComponent);function b0(V,E){(E==null||E>V.length)&&(E=V.length);for(var z=0,_=new Array(E);z<E;z++)_[z]=V[z];return _}function e0(V,E){if(V){if(typeof V=="string")return b0(V,E);var z=Object.prototype.toString.call(V).slice(8,-1);return z==="Object"&&V.constructor&&(z=V.constructor.name),z==="Map"||z==="Set"?Array.from(V):z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z)?b0(V,E):void 0}}function d0(V,E){var z;if(typeof Symbol>"u"||V[Symbol.iterator]==null){if(Array.isArray(V)||(z=e0(V))||E&&V&&typeof V.length=="number"){z&&(V=z);var _=0,S=function(){};return{s:S,n:function(){return _>=V.length?{done:!0}:{done:!1,value:V[_++]}},e:function(N){throw N},f:S}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T,$=!0,j=!1;return{s:function(){z=V[Symbol.iterator]()},n:function(){var N=z.next();return $=N.done,N},e:function(N){j=!0,T=N},f:function(){try{$||z.return==null||z.return()}finally{if(j)throw T}}}}function l0(V){return function(E){if(Array.isArray(E))return b0(E)}(V)||function(E){if(typeof Symbol<"u"&&Symbol.iterator in Object(E))return Array.from(E)}(V)||e0(V)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}var D=e(46),X=new(e(47)).Dispatcher,o0=new(function(V){f(z,V);var E=n(z);function z(){var _;l(this,z);for(var S=arguments.length,T=new Array(S),$=0;$<S;$++)T[$]=arguments[$];return(_=E.call.apply(E,[this].concat(T))).objects={},_.set=function(j,N,G,p0){_.objects[j]===void 0&&(_.objects[j]={}),_.objects[j][N]===void 0&&(_.objects[j][N]={}),_.objects[j][N][G]=p0},_.get=function(j,N,G,p0){return _.objects[j]===void 0||_.objects[j][N]===void 0||_.objects[j][N][G]==null?p0:_.objects[j][N][G]},_.handleAction=function(j){var N=j.rjvId,G=j.data;switch(j.name){case"RESET":_.emit("reset-"+N);break;case"VARIABLE_UPDATED":j.data.updated_src=_.updateSrc(N,G),_.set(N,"action","variable-update",i(i({},G),{},{type:"variable-edited"})),_.emit("variable-update-"+N);break;case"VARIABLE_REMOVED":j.data.updated_src=_.updateSrc(N,G),_.set(N,"action","variable-update",i(i({},G),{},{type:"variable-removed"})),_.emit("variable-update-"+N);break;case"VARIABLE_ADDED":j.data.updated_src=_.updateSrc(N,G),_.set(N,"action","variable-update",i(i({},G),{},{type:"variable-added"})),_.emit("variable-update-"+N);break;case"ADD_VARIABLE_KEY_REQUEST":_.set(N,"action","new-key-request",G),_.emit("add-key-request-"+N)}},_.updateSrc=function(j,N){var G=N.name,p0=N.namespace,z0=N.new_value,D0=(N.existing_value,N.variable_removed);p0.shift();var o1,E0=_.get(j,"global","src"),W0=_.deepCopy(E0,l0(p0)),m1=W0,L0=d0(p0);try{for(L0.s();!(o1=L0.n()).done;)m1=m1[o1.value]}catch(M1){L0.e(M1)}finally{L0.f()}return D0?C(m1)=="array"?m1.splice(G,1):delete m1[G]:G!==null?m1[G]=z0:W0=z0,_.set(j,"global","src",W0),W0},_.deepCopy=function(j,N){var G,p0=C(j),z0=N.shift();return p0=="array"?G=l0(j):p0=="object"&&(G=i({},j)),z0!==void 0&&(G[z0]=_.deepCopy(j[z0],N)),G},_}return z}(D.EventEmitter));X.register(o0.handleAction.bind(o0));var J=o0,c0=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).toggleCollapsed=function(){S.setState({collapsed:!S.state.collapsed},function(){J.set(S.props.rjvId,S.props.namespace,"collapsed",S.state.collapsed)})},S.getFunctionDisplay=function(T){var $=s(S).props;return T?v.a.createElement("span",null,S.props.value.toString().slice(9,-1).replace(/\{[\s\S]+/,""),v.a.createElement("span",{className:"function-collapsed",style:{fontWeight:"bold"}},v.a.createElement("span",null,"{"),v.a.createElement("span",P($.theme,"ellipsis"),"..."),v.a.createElement("span",null,"}"))):S.props.value.toString().slice(9,-1)},S.state={collapsed:J.get(_.rjvId,_.namespace,"collapsed",!0)},S}return b(z,[{key:"render",value:function(){var _=this.props,S=this.state.collapsed;return v.a.createElement("div",P(_.theme,"function"),v.a.createElement(U,Object.assign({type_name:"function"},_)),v.a.createElement("span",Object.assign({},P(_.theme,"function-value"),{className:"rjv-function-container",onClick:this.toggleCollapsed}),this.getFunctionDisplay(S)))}}]),z}(v.a.PureComponent),v0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){return v.a.createElement("div",P(this.props.theme,"nan"),"NaN")}}]),z}(v.a.PureComponent),u0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){return v.a.createElement("div",P(this.props.theme,"null"),"NULL")}}]),z}(v.a.PureComponent),f0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props;return v.a.createElement("div",P(_.theme,"integer"),v.a.createElement(U,Object.assign({type_name:"int"},_)),this.props.value)}}]),z}(v.a.PureComponent),k0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props;return v.a.createElement("div",P(_.theme,"regexp"),v.a.createElement(U,Object.assign({type_name:"regexp"},_)),this.props.value.toString())}}]),z}(v.a.PureComponent),A0=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).toggleCollapsed=function(){S.setState({collapsed:!S.state.collapsed},function(){J.set(S.props.rjvId,S.props.namespace,"collapsed",S.state.collapsed)})},S.state={collapsed:J.get(_.rjvId,_.namespace,"collapsed",!0)},S}return b(z,[{key:"render",value:function(){this.state.collapsed;var _=this.props,S=_.collapseStringsAfterLength,T=_.theme,$=_.value,j={style:{cursor:"default"}};return C(S)==="integer"&&$.length>S&&(j.style.cursor="pointer",this.state.collapsed&&($=v.a.createElement("span",null,$.substring(0,S),v.a.createElement("span",P(T,"ellipsis")," ...")))),v.a.createElement("div",P(T,"string"),v.a.createElement(U,Object.assign({type_name:"string"},_)),v.a.createElement("span",Object.assign({className:"string-value"},j,{onClick:this.toggleCollapsed}),'"',$,'"'))}}]),z}(v.a.PureComponent),C0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){return v.a.createElement("div",P(this.props.theme,"undefined"),"undefined")}}]),z}(v.a.PureComponent);function N0(){return(N0=Object.assign||function(V){for(var E=1;E<arguments.length;E++){var z=arguments[E];for(var _ in z)Object.prototype.hasOwnProperty.call(z,_)&&(V[_]=z[_])}return V}).apply(this,arguments)}var X0=u.useLayoutEffect,e1=function(V){var E=Object(u.useRef)(V);return X0(function(){E.current=V}),E},I0=function(V,E){typeof V!="function"?V.current=E:V(E)},B0=function(V,E){var z=Object(u.useRef)();return Object(u.useCallback)(function(_){V.current=_,z.current&&I0(z.current,null),z.current=E,E&&I0(E,_)},[E])},$0={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},R0=function(V){Object.keys($0).forEach(function(E){V.style.setProperty(E,$0[E],"important")})},y0=null,a1=function(){},Z=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width"],R=!!document.documentElement.currentStyle,I=function(V,E){var z=V.cacheMeasurements,_=V.maxRows,S=V.minRows,T=V.onChange,$=T===void 0?a1:T,j=V.onHeightChange,N=j===void 0?a1:j,G=function(L0,M1){if(L0==null)return{};var F1,uo,Zo={},D1=Object.keys(L0);for(uo=0;uo<D1.length;uo++)F1=D1[uo],M1.indexOf(F1)>=0||(Zo[F1]=L0[F1]);return Zo}(V,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),p0,z0=G.value!==void 0,D0=Object(u.useRef)(null),o1=B0(D0,E),E0=Object(u.useRef)(0),W0=Object(u.useRef)(),m1=function(){var L0=D0.current,M1=z&&W0.current?W0.current:function(D1){var bt=window.getComputedStyle(D1);if(bt===null)return null;var jo,w1=(jo=bt,Z.reduce(function(po,Ao){return po[Ao]=jo[Ao],po},{})),Z1=w1.boxSizing;return Z1===""?null:(R&&Z1==="border-box"&&(w1.width=parseFloat(w1.width)+parseFloat(w1.borderRightWidth)+parseFloat(w1.borderLeftWidth)+parseFloat(w1.paddingRight)+parseFloat(w1.paddingLeft)+"px"),{sizingStyle:w1,paddingSize:parseFloat(w1.paddingBottom)+parseFloat(w1.paddingTop),borderSize:parseFloat(w1.borderBottomWidth)+parseFloat(w1.borderTopWidth)})}(L0);if(M1){W0.current=M1;var F1=function(D1,bt,jo,w1){jo===void 0&&(jo=1),w1===void 0&&(w1=1/0),y0||((y0=document.createElement("textarea")).setAttribute("tab-index","-1"),y0.setAttribute("aria-hidden","true"),R0(y0)),y0.parentNode===null&&document.body.appendChild(y0);var Z1=D1.paddingSize,po=D1.borderSize,Ao=D1.sizingStyle,Fo=Ao.boxSizing;Object.keys(Ao).forEach(function(no){var K1=no;y0.style[K1]=Ao[K1]}),R0(y0),y0.value=bt;var tt=function(no,K1){var Mr=no.scrollHeight;return K1.sizingStyle.boxSizing==="border-box"?Mr+K1.borderSize:Mr-K1.paddingSize}(y0,D1);y0.value="x";var jt=y0.scrollHeight-Z1,Vt=jt*jo;Fo==="border-box"&&(Vt=Vt+Z1+po),tt=Math.max(Vt,tt);var io=jt*w1;return Fo==="border-box"&&(io=io+Z1+po),[tt=Math.min(io,tt),jt]}(M1,L0.value||L0.placeholder||"x",S,_),uo=F1[0],Zo=F1[1];E0.current!==uo&&(E0.current=uo,L0.style.setProperty("height",uo+"px","important"),N(uo,{rowHeight:Zo}))}};return Object(u.useLayoutEffect)(m1),p0=e1(m1),Object(u.useLayoutEffect)(function(){var L0=function(M1){p0.current(M1)};return window.addEventListener("resize",L0),function(){window.removeEventListener("resize",L0)}},[]),Object(u.createElement)("textarea",N0({},G,{onChange:function(L0){z0||m1(),$(L0)},ref:o1}))},W=Object(u.forwardRef)(I);function a0(V){V=V.trim();try{if((V=JSON.stringify(JSON.parse(V)))[0]==="[")return s0("array",JSON.parse(V));if(V[0]==="{")return s0("object",JSON.parse(V));if(V.match(/\-?\d+\.\d+/)&&V.match(/\-?\d+\.\d+/)[0]===V)return s0("float",parseFloat(V));if(V.match(/\-?\d+e-\d+/)&&V.match(/\-?\d+e-\d+/)[0]===V)return s0("float",Number(V));if(V.match(/\-?\d+/)&&V.match(/\-?\d+/)[0]===V)return s0("integer",parseInt(V));if(V.match(/\-?\d+e\+\d+/)&&V.match(/\-?\d+e\+\d+/)[0]===V)return s0("integer",Number(V))}catch{}switch(V=V.toLowerCase()){case"undefined":return s0("undefined",void 0);case"nan":return s0("nan",NaN);case"null":return s0("null",null);case"true":return s0("boolean",!0);case"false":return s0("boolean",!1);default:if(V=Date.parse(V))return s0("date",new Date(V))}return s0(!1,null)}function s0(V,E){return{type:V,value:E}}var H0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"})))}}]),z}(v.a.PureComponent),x0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 24 24",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("path",{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"})))}}]),z}(v.a.PureComponent),K0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]),$=S0(S).style;return v.a.createElement("span",T,v.a.createElement("svg",{fill:$.color,width:$.height,height:$.width,style:$,viewBox:"0 0 1792 1792"},v.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),z}(v.a.PureComponent),G0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]),$=S0(S).style;return v.a.createElement("span",T,v.a.createElement("svg",{fill:$.color,width:$.height,height:$.width,style:$,viewBox:"0 0 1792 1792"},v.a.createElement("path",{d:"M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})))}}]),z}(v.a.PureComponent),M0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",{style:i(i({},S0(S).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},v.a.createElement("path",{d:"M0 14l6-6-6-6z"})))}}]),z}(v.a.PureComponent),n1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",{style:i(i({},S0(S).style),{},{paddingLeft:"2px",verticalAlign:"top"}),viewBox:"0 0 15 15",fill:"currentColor"},v.a.createElement("path",{d:"M0 5l6 6 6-6z"})))}}]),z}(v.a.PureComponent),u1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z"}))))}}]),z}(v.a.PureComponent),A1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),z}(v.a.PureComponent),y1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),z}(v.a.PureComponent),q1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z"}))))}}]),z}(v.a.PureComponent),k1=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z"}))))}}]),z}(v.a.PureComponent),Q0=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.style,T=k(_,["style"]);return v.a.createElement("span",T,v.a.createElement("svg",Object.assign({},S0(S),{viewBox:"0 0 40 40",fill:"currentColor",preserveAspectRatio:"xMidYMid meet"}),v.a.createElement("g",null,v.a.createElement("path",{d:"m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"}))))}}]),z}(v.a.PureComponent);function S0(V){return V||(V={}),{style:i(i({verticalAlign:"middle"},V),{},{color:V.color?V.color:"#000000",height:"1em",width:"1em"})}}var p1=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).copiedTimer=null,S.handleCopy=function(){var T=document.createElement("textarea"),$=S.props,j=$.clickCallback,N=$.src,G=$.namespace;T.innerHTML=JSON.stringify(S.clipboardValue(N),null,"  "),document.body.appendChild(T),T.select(),document.execCommand("copy"),document.body.removeChild(T),S.copiedTimer=setTimeout(function(){S.setState({copied:!1})},5500),S.setState({copied:!0},function(){typeof j=="function"&&j({src:N,namespace:G,name:G[G.length-1]})})},S.getClippyIcon=function(){var T=S.props.theme;return S.state.copied?v.a.createElement("span",null,v.a.createElement(u1,Object.assign({className:"copy-icon"},P(T,"copy-icon"))),v.a.createElement("span",P(T,"copy-icon-copied"),"\u2714")):v.a.createElement(u1,Object.assign({className:"copy-icon"},P(T,"copy-icon")))},S.clipboardValue=function(T){switch(C(T)){case"function":case"regexp":return T.toString();default:return T}},S.state={copied:!1},S}return b(z,[{key:"componentWillUnmount",value:function(){this.copiedTimer&&(clearTimeout(this.copiedTimer),this.copiedTimer=null)}},{key:"render",value:function(){var _=this.props,S=(_.src,_.theme),T=_.hidden,$=_.rowHovered,j=P(S,"copy-to-clipboard").style,N="inline";return T&&(N="none"),v.a.createElement("span",{className:"copy-to-clipboard-container",title:"Copy to clipboard",style:{verticalAlign:"top",display:$?"inline-block":"none"}},v.a.createElement("span",{style:i(i({},j),{},{display:N}),onClick:this.handleCopy},this.getClippyIcon()))}}]),z}(v.a.PureComponent),g1=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).getEditIcon=function(){var T=S.props,$=T.variable,j=T.theme;return v.a.createElement("div",{className:"click-to-edit",style:{verticalAlign:"top",display:S.state.hovered?"inline-block":"none"}},v.a.createElement(k1,Object.assign({className:"click-to-edit-icon"},P(j,"editVarIcon"),{onClick:function(){S.prepopInput($)}})))},S.prepopInput=function(T){if(S.props.onEdit!==!1){var $=function(N){var G;switch(C(N)){case"undefined":G="undefined";break;case"nan":G="NaN";break;case"string":G=N;break;case"date":case"function":case"regexp":G=N.toString();break;default:try{G=JSON.stringify(N,null,"  ")}catch{G=""}}return G}(T.value),j=a0($);S.setState({editMode:!0,editValue:$,parsedInput:{type:j.type,value:j.value}})}},S.getRemoveIcon=function(){var T=S.props,$=T.variable,j=T.namespace,N=T.theme,G=T.rjvId;return v.a.createElement("div",{className:"click-to-remove",style:{verticalAlign:"top",display:S.state.hovered?"inline-block":"none"}},v.a.createElement(A1,Object.assign({className:"click-to-remove-icon"},P(N,"removeVarIcon"),{onClick:function(){X.dispatch({name:"VARIABLE_REMOVED",rjvId:G,data:{name:$.name,namespace:j,existing_value:$.value,variable_removed:!0}})}})))},S.getValue=function(T,$){var j=!$&&T.type,N=s(S).props;switch(j){case!1:return S.getEditInput();case"string":return v.a.createElement(A0,Object.assign({value:T.value},N));case"integer":return v.a.createElement(f0,Object.assign({value:T.value},N));case"float":return v.a.createElement(t0,Object.assign({value:T.value},N));case"boolean":return v.a.createElement(Q,Object.assign({value:T.value},N));case"function":return v.a.createElement(c0,Object.assign({value:T.value},N));case"null":return v.a.createElement(u0,N);case"nan":return v.a.createElement(v0,N);case"undefined":return v.a.createElement(C0,N);case"date":return v.a.createElement(w0,Object.assign({value:T.value},N));case"regexp":return v.a.createElement(k0,Object.assign({value:T.value},N));default:return v.a.createElement("div",{className:"object-value"},JSON.stringify(T.value))}},S.getEditInput=function(){var T=S.props.theme,$=S.state.editValue;return v.a.createElement("div",null,v.a.createElement(W,Object.assign({type:"text",inputRef:function(j){return j&&j.focus()},value:$,className:"variable-editor",onChange:function(j){var N=j.target.value,G=a0(N);S.setState({editValue:N,parsedInput:{type:G.type,value:G.value}})},onKeyDown:function(j){switch(j.key){case"Escape":S.setState({editMode:!1,editValue:""});break;case"Enter":(j.ctrlKey||j.metaKey)&&S.submitEdit(!0)}j.stopPropagation()},placeholder:"update this value",minRows:2},P(T,"edit-input"))),v.a.createElement("div",P(T,"edit-icon-container"),v.a.createElement(A1,Object.assign({className:"edit-cancel"},P(T,"cancel-icon"),{onClick:function(){S.setState({editMode:!1,editValue:""})}})),v.a.createElement(Q0,Object.assign({className:"edit-check string-value"},P(T,"check-icon"),{onClick:function(){S.submitEdit()}})),v.a.createElement("div",null,S.showDetected())))},S.submitEdit=function(T){var $=S.props,j=$.variable,N=$.namespace,G=$.rjvId,p0=S.state,z0=p0.editValue,D0=p0.parsedInput,o1=z0;T&&D0.type&&(o1=D0.value),S.setState({editMode:!1}),X.dispatch({name:"VARIABLE_UPDATED",rjvId:G,data:{name:j.name,namespace:N,existing_value:j.value,new_value:o1,variable_removed:!1}})},S.showDetected=function(){var T=S.props,$=T.theme,j=(T.variable,T.namespace,T.rjvId,S.state.parsedInput),N=(j.type,j.value,S.getDetectedInput());if(N)return v.a.createElement("div",null,v.a.createElement("div",P($,"detected-row"),N,v.a.createElement(Q0,{className:"edit-check detected",style:i({verticalAlign:"top",paddingLeft:"3px"},P($,"check-icon").style),onClick:function(){S.submitEdit(!0)}})))},S.getDetectedInput=function(){var T=S.state.parsedInput,$=T.type,j=T.value,N=s(S).props,G=N.theme;if($!==!1)switch($.toLowerCase()){case"object":return v.a.createElement("span",null,v.a.createElement("span",{style:i(i({},P(G,"brace").style),{},{cursor:"default"})},"{"),v.a.createElement("span",{style:i(i({},P(G,"ellipsis").style),{},{cursor:"default"})},"..."),v.a.createElement("span",{style:i(i({},P(G,"brace").style),{},{cursor:"default"})},"}"));case"array":return v.a.createElement("span",null,v.a.createElement("span",{style:i(i({},P(G,"brace").style),{},{cursor:"default"})},"["),v.a.createElement("span",{style:i(i({},P(G,"ellipsis").style),{},{cursor:"default"})},"..."),v.a.createElement("span",{style:i(i({},P(G,"brace").style),{},{cursor:"default"})},"]"));case"string":return v.a.createElement(A0,Object.assign({value:j},N));case"integer":return v.a.createElement(f0,Object.assign({value:j},N));case"float":return v.a.createElement(t0,Object.assign({value:j},N));case"boolean":return v.a.createElement(Q,Object.assign({value:j},N));case"function":return v.a.createElement(c0,Object.assign({value:j},N));case"null":return v.a.createElement(u0,N);case"nan":return v.a.createElement(v0,N);case"undefined":return v.a.createElement(C0,N);case"date":return v.a.createElement(w0,Object.assign({value:new Date(j)},N))}},S.state={editMode:!1,editValue:"",hovered:!1,renameKey:!1,parsedInput:{type:!1,value:null}},S}return b(z,[{key:"render",value:function(){var _=this,S=this.props,T=S.variable,$=S.singleIndent,j=S.type,N=S.theme,G=S.namespace,p0=S.indentWidth,z0=S.enableClipboard,D0=S.onEdit,o1=S.onDelete,E0=S.onSelect,W0=S.displayArrayKey,m1=S.quotesOnKeys,L0=this.state.editMode;return v.a.createElement("div",Object.assign({},P(N,"objectKeyVal",{paddingLeft:p0*$}),{onMouseEnter:function(){return _.setState(i(i({},_.state),{},{hovered:!0}))},onMouseLeave:function(){return _.setState(i(i({},_.state),{},{hovered:!1}))},className:"variable-row",key:T.name}),j=="array"?W0?v.a.createElement("span",Object.assign({},P(N,"array-key"),{key:T.name+"_"+G}),T.name,v.a.createElement("div",P(N,"colon"),":")):null:v.a.createElement("span",null,v.a.createElement("span",Object.assign({},P(N,"object-name"),{className:"object-key",key:T.name+"_"+G}),!!m1&&v.a.createElement("span",{style:{verticalAlign:"top"}},'"'),v.a.createElement("span",{style:{display:"inline-block"}},T.name),!!m1&&v.a.createElement("span",{style:{verticalAlign:"top"}},'"')),v.a.createElement("span",P(N,"colon"),":")),v.a.createElement("div",Object.assign({className:"variable-value",onClick:E0===!1&&D0===!1?null:function(M1){var F1=l0(G);(M1.ctrlKey||M1.metaKey)&&D0!==!1?_.prepopInput(T):E0!==!1&&(F1.shift(),E0(i(i({},T),{},{namespace:F1})))}},P(N,"variableValue",{cursor:E0===!1?"default":"pointer"})),this.getValue(T,L0)),z0?v.a.createElement(p1,{rowHovered:this.state.hovered,hidden:L0,src:T.value,clickCallback:z0,theme:N,namespace:[].concat(l0(G),[T.name])}):null,D0!==!1&&L0==0?this.getEditIcon():null,o1!==!1&&L0==0?this.getRemoveIcon():null)}}]),z}(v.a.PureComponent),x1=function(V){f(z,V);var E=n(z);function z(){var _;l(this,z);for(var S=arguments.length,T=new Array(S),$=0;$<S;$++)T[$]=arguments[$];return(_=E.call.apply(E,[this].concat(T))).getObjectSize=function(){var j=_.props,N=j.size,G=j.theme;if(j.displayObjectSize)return v.a.createElement("span",Object.assign({className:"object-size"},P(G,"object-size")),N," item",N===1?"":"s")},_.getAddAttribute=function(j){var N=_.props,G=N.theme,p0=N.namespace,z0=N.name,D0=N.src,o1=N.rjvId,E0=N.depth;return v.a.createElement("span",{className:"click-to-add",style:{verticalAlign:"top",display:j?"inline-block":"none"}},v.a.createElement(y1,Object.assign({className:"click-to-add-icon"},P(G,"addVarIcon"),{onClick:function(){var W0={name:E0>0?z0:null,namespace:p0.splice(0,p0.length-1),existing_value:D0,variable_removed:!1,key_name:null};C(D0)==="object"?X.dispatch({name:"ADD_VARIABLE_KEY_REQUEST",rjvId:o1,data:W0}):X.dispatch({name:"VARIABLE_ADDED",rjvId:o1,data:i(i({},W0),{},{new_value:[].concat(l0(D0),[null])})})}})))},_.getRemoveObject=function(j){var N=_.props,G=N.theme,p0=(N.hover,N.namespace),z0=N.name,D0=N.src,o1=N.rjvId;if(p0.length!==1)return v.a.createElement("span",{className:"click-to-remove",style:{display:j?"inline-block":"none"}},v.a.createElement(A1,Object.assign({className:"click-to-remove-icon"},P(G,"removeVarIcon"),{onClick:function(){X.dispatch({name:"VARIABLE_REMOVED",rjvId:o1,data:{name:z0,namespace:p0.splice(0,p0.length-1),existing_value:D0,variable_removed:!0}})}})))},_.render=function(){var j=_.props,N=j.theme,G=j.onDelete,p0=j.onAdd,z0=j.enableClipboard,D0=j.src,o1=j.namespace,E0=j.rowHovered;return v.a.createElement("div",Object.assign({},P(N,"object-meta-data"),{className:"object-meta-data",onClick:function(W0){W0.stopPropagation()}}),_.getObjectSize(),z0?v.a.createElement(p1,{rowHovered:E0,clickCallback:z0,src:D0,theme:N,namespace:o1}):null,p0!==!1?_.getAddAttribute(E0):null,G!==!1?_.getRemoveObject(E0):null)},_}return z}(v.a.PureComponent);function J1(V){var E=V.parent_type,z=V.namespace,_=V.quotesOnKeys,S=V.theme,T=V.jsvRoot,$=V.name,j=V.displayArrayKey,N=V.name?V.name:"";return!T||$!==!1&&$!==null?E=="array"?j?v.a.createElement("span",Object.assign({},P(S,"array-key"),{key:z}),v.a.createElement("span",{className:"array-key"},N),v.a.createElement("span",P(S,"colon"),":")):v.a.createElement("span",null):v.a.createElement("span",Object.assign({},P(S,"object-name"),{key:z}),v.a.createElement("span",{className:"object-key"},_&&v.a.createElement("span",{style:{verticalAlign:"top"}},'"'),v.a.createElement("span",null,N),_&&v.a.createElement("span",{style:{verticalAlign:"top"}},'"')),v.a.createElement("span",P(S,"colon"),":")):v.a.createElement("span",null)}function l1(V){var E=V.theme;switch(V.iconStyle){case"triangle":return v.a.createElement(n1,Object.assign({},P(E,"expanded-icon"),{className:"expanded-icon"}));case"square":return v.a.createElement(K0,Object.assign({},P(E,"expanded-icon"),{className:"expanded-icon"}));default:return v.a.createElement(H0,Object.assign({},P(E,"expanded-icon"),{className:"expanded-icon"}))}}function I1(V){var E=V.theme;switch(V.iconStyle){case"triangle":return v.a.createElement(M0,Object.assign({},P(E,"collapsed-icon"),{className:"collapsed-icon"}));case"square":return v.a.createElement(G0,Object.assign({},P(E,"collapsed-icon"),{className:"collapsed-icon"}));default:return v.a.createElement(x0,Object.assign({},P(E,"collapsed-icon"),{className:"collapsed-icon"}))}}var J0=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).toggleCollapsed=function(T){var $=[];for(var j in S.state.expanded)$.push(S.state.expanded[j]);$[T]=!$[T],S.setState({expanded:$})},S.state={expanded:[]},S}return b(z,[{key:"getExpandedIcon",value:function(_){var S=this.props,T=S.theme,$=S.iconStyle;return this.state.expanded[_]?v.a.createElement(l1,{theme:T,iconStyle:$}):v.a.createElement(I1,{theme:T,iconStyle:$})}},{key:"render",value:function(){var _=this,S=this.props,T=S.src,$=S.groupArraysAfterLength,j=(S.depth,S.name),N=S.theme,G=S.jsvRoot,p0=S.namespace,z0=(S.parent_type,k(S,["src","groupArraysAfterLength","depth","name","theme","jsvRoot","namespace","parent_type"])),D0=0,o1=5*this.props.indentWidth;G||(D0=5*this.props.indentWidth);var E0=$,W0=Math.ceil(T.length/E0);return v.a.createElement("div",Object.assign({className:"object-key-val"},P(N,G?"jsv-root":"objectKeyVal",{paddingLeft:D0})),v.a.createElement(J1,this.props),v.a.createElement("span",null,v.a.createElement(x1,Object.assign({size:T.length},this.props))),l0(Array(W0)).map(function(m1,L0){return v.a.createElement("div",Object.assign({key:L0,className:"object-key-val array-group"},P(N,"objectKeyVal",{marginLeft:6,paddingLeft:o1})),v.a.createElement("span",P(N,"brace-row"),v.a.createElement("div",Object.assign({className:"icon-container"},P(N,"icon-container"),{onClick:function(M1){_.toggleCollapsed(L0)}}),_.getExpandedIcon(L0)),_.state.expanded[L0]?v.a.createElement(ko,Object.assign({key:j+L0,depth:0,name:!1,collapsed:!1,groupArraysAfterLength:E0,index_offset:L0*E0,src:T.slice(L0*E0,L0*E0+E0),namespace:p0,type:"array",parent_type:"array_group",theme:N},z0)):v.a.createElement("span",Object.assign({},P(N,"brace"),{onClick:function(M1){_.toggleCollapsed(L0)},className:"array-group-brace"}),"[",v.a.createElement("div",Object.assign({},P(N,"array-group-meta-data"),{className:"array-group-meta-data"}),v.a.createElement("span",Object.assign({className:"object-size"},P(N,"object-size")),L0*E0," - ",L0*E0+E0>T.length?T.length:L0*E0+E0)),"]")))}))}}]),z}(v.a.PureComponent),c1=function(V){f(z,V);var E=n(z);function z(_){var S;l(this,z),(S=E.call(this,_)).toggleCollapsed=function(){S.setState({expanded:!S.state.expanded},function(){J.set(S.props.rjvId,S.props.namespace,"expanded",S.state.expanded)})},S.getObjectContent=function($,j,N){return v.a.createElement("div",{className:"pushed-content object-container"},v.a.createElement("div",Object.assign({className:"object-content"},P(S.props.theme,"pushed-content")),S.renderObjectContents(j,N)))},S.getEllipsis=function(){return S.state.size===0?null:v.a.createElement("div",Object.assign({},P(S.props.theme,"ellipsis"),{className:"node-ellipsis",onClick:S.toggleCollapsed}),"...")},S.getObjectMetaData=function($){var j=S.props,N=(j.rjvId,j.theme,S.state),G=N.size,p0=N.hovered;return v.a.createElement(x1,Object.assign({rowHovered:p0,size:G},S.props))},S.renderObjectContents=function($,j){var N,G=S.props,p0=G.depth,z0=G.parent_type,D0=G.index_offset,o1=G.groupArraysAfterLength,E0=G.namespace,W0=S.state.object_type,m1=[],L0=Object.keys($||{});return S.props.sortKeys&&W0!=="array"&&(L0=L0.sort()),L0.forEach(function(M1){if(N=new bo(M1,$[M1]),z0==="array_group"&&D0&&(N.name=parseInt(N.name)+D0),$.hasOwnProperty(M1))if(N.type==="object")m1.push(v.a.createElement(ko,Object.assign({key:N.name,depth:p0+1,name:N.name,src:N.value,namespace:E0.concat(N.name),parent_type:W0},j)));else if(N.type==="array"){var F1=ko;o1&&N.value.length>o1&&(F1=J0),m1.push(v.a.createElement(F1,Object.assign({key:N.name,depth:p0+1,name:N.name,src:N.value,namespace:E0.concat(N.name),type:"array",parent_type:W0},j)))}else m1.push(v.a.createElement(g1,Object.assign({key:N.name+"_"+E0,variable:N,singleIndent:5,namespace:E0,type:S.props.type},j)))}),m1};var T=z.getState(_);return S.state=i(i({},T),{},{prevProps:{}}),S}return b(z,[{key:"getBraceStart",value:function(_,S){var T=this,$=this.props,j=$.src,N=$.theme,G=$.iconStyle;if($.parent_type==="array_group")return v.a.createElement("span",null,v.a.createElement("span",P(N,"brace"),_==="array"?"[":"{"),S?this.getObjectMetaData(j):null);var p0=S?l1:I1;return v.a.createElement("span",null,v.a.createElement("span",Object.assign({onClick:function(z0){T.toggleCollapsed()}},P(N,"brace-row")),v.a.createElement("div",Object.assign({className:"icon-container"},P(N,"icon-container")),v.a.createElement(p0,{theme:N,iconStyle:G})),v.a.createElement(J1,this.props),v.a.createElement("span",P(N,"brace"),_==="array"?"[":"{")),S?this.getObjectMetaData(j):null)}},{key:"render",value:function(){var _=this,S=this.props,T=S.depth,$=S.src,j=(S.namespace,S.name,S.type,S.parent_type),N=S.theme,G=S.jsvRoot,p0=S.iconStyle,z0=k(S,["depth","src","namespace","name","type","parent_type","theme","jsvRoot","iconStyle"]),D0=this.state,o1=D0.object_type,E0=D0.expanded,W0={};return G||j==="array_group"?j==="array_group"&&(W0.borderLeft=0,W0.display="inline"):W0.paddingLeft=5*this.props.indentWidth,v.a.createElement("div",Object.assign({className:"object-key-val",onMouseEnter:function(){return _.setState(i(i({},_.state),{},{hovered:!0}))},onMouseLeave:function(){return _.setState(i(i({},_.state),{},{hovered:!1}))}},P(N,G?"jsv-root":"objectKeyVal",W0)),this.getBraceStart(o1,E0),E0?this.getObjectContent(T,$,i({theme:N,iconStyle:p0},z0)):this.getEllipsis(),v.a.createElement("span",{className:"brace-row"},v.a.createElement("span",{style:i(i({},P(N,"brace").style),{},{paddingLeft:E0?"3px":"0px"})},o1==="array"?"]":"}"),E0?null:this.getObjectMetaData($)))}}],[{key:"getDerivedStateFromProps",value:function(_,S){var T=S.prevProps;return _.src!==T.src||_.collapsed!==T.collapsed||_.name!==T.name||_.namespace!==T.namespace||_.rjvId!==T.rjvId?i(i({},z.getState(_)),{},{prevProps:_}):null}}]),z}(v.a.PureComponent);c1.getState=function(V){var E=Object.keys(V.src).length,z=(V.collapsed===!1||V.collapsed!==!0&&V.collapsed>V.depth)&&(!V.shouldCollapse||V.shouldCollapse({name:V.name,src:V.src,type:C(V.src),namespace:V.namespace})===!1)&&E!==0;return{expanded:J.get(V.rjvId,V.namespace,"expanded",z),object_type:V.type==="array"?"array":"object",parent_type:V.type==="array"?"array":"object",size:E,hovered:!1}};var bo=function V(E,z){l(this,V),this.name=E,this.value=z,this.type=C(z)};L(c1);var ko=c1,er=function(V){f(z,V);var E=n(z);function z(){var _;l(this,z);for(var S=arguments.length,T=new Array(S),$=0;$<S;$++)T[$]=arguments[$];return(_=E.call.apply(E,[this].concat(T))).render=function(){var j=s(_).props,N=[j.name],G=ko;return Array.isArray(j.src)&&j.groupArraysAfterLength&&j.src.length>j.groupArraysAfterLength&&(G=J0),v.a.createElement("div",{className:"pretty-json-container object-container"},v.a.createElement("div",{className:"object-content"},v.a.createElement(G,Object.assign({namespace:N,depth:0,jsvRoot:!0},j))))},_}return z}(v.a.PureComponent),co=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).closeModal=function(){X.dispatch({rjvId:S.props.rjvId,name:"RESET"})},S.submit=function(){S.props.submit(S.state.input)},S.state={input:_.input?_.input:""},S}return b(z,[{key:"render",value:function(){var _=this,S=this.props,T=S.theme,$=S.rjvId,j=S.isValid,N=this.state.input,G=j(N);return v.a.createElement("div",Object.assign({className:"key-modal-request"},P(T,"key-modal-request"),{onClick:this.closeModal}),v.a.createElement("div",Object.assign({},P(T,"key-modal"),{onClick:function(p0){p0.stopPropagation()}}),v.a.createElement("div",P(T,"key-modal-label"),"Key Name:"),v.a.createElement("div",{style:{position:"relative"}},v.a.createElement("input",Object.assign({},P(T,"key-modal-input"),{className:"key-modal-input",ref:function(p0){return p0&&p0.focus()},spellCheck:!1,value:N,placeholder:"...",onChange:function(p0){_.setState({input:p0.target.value})},onKeyPress:function(p0){G&&p0.key==="Enter"?_.submit():p0.key==="Escape"&&_.closeModal()}})),G?v.a.createElement(Q0,Object.assign({},P(T,"key-modal-submit"),{className:"key-modal-submit",onClick:function(p0){return _.submit()}})):null),v.a.createElement("span",P(T,"key-modal-cancel"),v.a.createElement(q1,Object.assign({},P(T,"key-modal-cancel-icon"),{className:"key-modal-cancel",onClick:function(){X.dispatch({rjvId:$,name:"RESET"})}})))))}}]),z}(v.a.PureComponent),Zt=function(V){f(z,V);var E=n(z);function z(){var _;l(this,z);for(var S=arguments.length,T=new Array(S),$=0;$<S;$++)T[$]=arguments[$];return(_=E.call.apply(E,[this].concat(T))).isValid=function(j){var N=_.props.rjvId,G=J.get(N,"action","new-key-request");return j!=""&&Object.keys(G.existing_value).indexOf(j)===-1},_.submit=function(j){var N=_.props.rjvId,G=J.get(N,"action","new-key-request");G.new_value=i({},G.existing_value),G.new_value[j]=_.props.defaultValue,X.dispatch({name:"VARIABLE_ADDED",rjvId:N,data:G})},_}return b(z,[{key:"render",value:function(){var _=this.props,S=_.active,T=_.theme,$=_.rjvId;return S?v.a.createElement(co,{rjvId:$,theme:T,isValid:this.isValid,submit:this.submit}):null}}]),z}(v.a.PureComponent),Lt=function(V){f(z,V);var E=n(z);function z(){return l(this,z),E.apply(this,arguments)}return b(z,[{key:"render",value:function(){var _=this.props,S=_.message,T=_.active,$=_.theme,j=_.rjvId;return T?v.a.createElement("div",Object.assign({className:"validation-failure"},P($,"validation-failure"),{onClick:function(){X.dispatch({rjvId:j,name:"RESET"})}}),v.a.createElement("span",P($,"validation-failure-label"),S),v.a.createElement(q1,P($,"validation-failure-clear"))):null}}]),z}(v.a.PureComponent),go=function(V){f(z,V);var E=n(z);function z(_){var S;return l(this,z),(S=E.call(this,_)).rjvId=Date.now().toString(),S.getListeners=function(){return{reset:S.resetState,"variable-update":S.updateSrc,"add-key-request":S.addKeyRequest}},S.updateSrc=function(){var T,$=J.get(S.rjvId,"action","variable-update"),j=$.name,N=$.namespace,G=$.new_value,p0=$.existing_value,z0=($.variable_removed,$.updated_src),D0=$.type,o1=S.props,E0=o1.onEdit,W0=o1.onDelete,m1=o1.onAdd,L0={existing_src:S.state.src,new_value:G,updated_src:z0,name:j,namespace:N,existing_value:p0};switch(D0){case"variable-added":T=m1(L0);break;case"variable-edited":T=E0(L0);break;case"variable-removed":T=W0(L0)}T!==!1?(J.set(S.rjvId,"global","src",z0),S.setState({src:z0})):S.setState({validationFailure:!0})},S.addKeyRequest=function(){S.setState({addKeyRequest:!0})},S.resetState=function(){S.setState({validationFailure:!1,addKeyRequest:!1})},S.state={addKeyRequest:!1,editKeyRequest:!1,validationFailure:!1,src:z.defaultProps.src,name:z.defaultProps.name,theme:z.defaultProps.theme,validationMessage:z.defaultProps.validationMessage,prevSrc:z.defaultProps.src,prevName:z.defaultProps.name,prevTheme:z.defaultProps.theme},S}return b(z,[{key:"componentDidMount",value:function(){J.set(this.rjvId,"global","src",this.state.src);var _=this.getListeners();for(var S in _)J.on(S+"-"+this.rjvId,_[S]);this.setState({addKeyRequest:!1,editKeyRequest:!1})}},{key:"componentDidUpdate",value:function(_,S){S.addKeyRequest!==!1&&this.setState({addKeyRequest:!1}),S.editKeyRequest!==!1&&this.setState({editKeyRequest:!1}),_.src!==this.state.src&&J.set(this.rjvId,"global","src",this.state.src)}},{key:"componentWillUnmount",value:function(){var _=this.getListeners();for(var S in _)J.removeListener(S+"-"+this.rjvId,_[S])}},{key:"render",value:function(){var _=this.state,S=_.validationFailure,T=_.validationMessage,$=_.addKeyRequest,j=_.theme,N=_.src,G=_.name,p0=this.props,z0=p0.style,D0=p0.defaultValue;return v.a.createElement("div",{className:"react-json-view",style:i(i({},P(j,"app-container").style),z0)},v.a.createElement(Lt,{message:T,active:S,theme:j,rjvId:this.rjvId}),v.a.createElement(er,Object.assign({},this.props,{src:N,name:G,theme:j,type:C(N),rjvId:this.rjvId})),v.a.createElement(Zt,{active:$,theme:j,rjvId:this.rjvId,defaultValue:D0}))}}],[{key:"getDerivedStateFromProps",value:function(_,S){if(_.src!==S.prevSrc||_.name!==S.prevName||_.theme!==S.prevTheme){var T={src:_.src,name:_.name,theme:_.theme,validationMessage:_.validationMessage,prevSrc:_.src,prevName:_.name,prevTheme:_.theme};return z.validateState(T)}return null}}]),z}(v.a.PureComponent);go.defaultProps={src:{},name:"root",theme:"rjv-default",collapsed:!1,collapseStringsAfterLength:!1,shouldCollapse:!1,sortKeys:!1,quotesOnKeys:!0,groupArraysAfterLength:100,indentWidth:4,enableClipboard:!0,displayObjectSize:!0,displayDataTypes:!0,onEdit:!1,onDelete:!1,onAdd:!1,onSelect:!1,iconStyle:"triangle",style:{},validationMessage:"Validation Error",defaultValue:null,displayArrayKey:!0},go.validateState=function(V){var E={};return C(V.theme)!=="object"||function(z){var _=["base00","base01","base02","base03","base04","base05","base06","base07","base08","base09","base0A","base0B","base0C","base0D","base0E","base0F"];if(C(z)==="object"){for(var S=0;S<_.length;S++)if(!(_[S]in z))return!1;return!0}return!1}(V.theme)||(console.error("react-json-view error:","theme prop must be a theme name or valid base-16 theme object.",'defaulting to "rjv-default" theme'),E.theme="rjv-default"),C(V.src)!=="object"&&C(V.src)!=="array"&&(console.error("react-json-view error:","src property must be a valid json object"),E.name="ERROR",E.src={message:"src property must be a valid json object"}),i(i({},V),E)},L(go),r.default=go}])})});var _w=b1(f1=>{"use strict";var U7=Symbol.for("react.element"),Y7=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Qy=Symbol.for("react.server_context"),Ic=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),Uc=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),kw;kw=Symbol.for("react.module.reference");function mt(o){if(typeof o=="object"&&o!==null){var t=o.$$typeof;switch(t){case U7:switch(o=o.type,o){case Pc:case Nc:case Oc:case Dc:case Zc:return o;default:switch(o=o&&o.$$typeof,o){case Qy:case Tc:case Ic:case Uc:case jc:case Rc:return o;default:return t}}case Y7:return t}}}f1.ContextConsumer=Tc;f1.ContextProvider=Rc;f1.Element=U7;f1.ForwardRef=Ic;f1.Fragment=Pc;f1.Lazy=Uc;f1.Memo=jc;f1.Portal=Y7;f1.Profiler=Nc;f1.StrictMode=Oc;f1.Suspense=Dc;f1.SuspenseList=Zc;f1.isAsyncMode=function(){return!1};f1.isConcurrentMode=function(){return!1};f1.isContextConsumer=function(o){return mt(o)===Tc};f1.isContextProvider=function(o){return mt(o)===Rc};f1.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===U7};f1.isForwardRef=function(o){return mt(o)===Ic};f1.isFragment=function(o){return mt(o)===Pc};f1.isLazy=function(o){return mt(o)===Uc};f1.isMemo=function(o){return mt(o)===jc};f1.isPortal=function(o){return mt(o)===Y7};f1.isProfiler=function(o){return mt(o)===Nc};f1.isStrictMode=function(o){return mt(o)===Oc};f1.isSuspense=function(o){return mt(o)===Dc};f1.isSuspenseList=function(o){return mt(o)===Zc};f1.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===Pc||o===Nc||o===Oc||o===Dc||o===Zc||o===Jy||typeof o=="object"&&o!==null&&(o.$$typeof===Uc||o.$$typeof===jc||o.$$typeof===Rc||o.$$typeof===Tc||o.$$typeof===Ic||o.$$typeof===kw||o.getModuleId!==void 0)};f1.typeOf=mt});var Cw=b1((CC,Mw)=>{"use strict";Mw.exports=_w()});var lb=b1(k6=>{"use strict";var bm=n0(),gm=Symbol.for("react.element"),um=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,hm=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fm={key:!0,ref:!0,__self:!0,__source:!0};function nb(o,t,r){var e,a={},c=null,i=null;r!==void 0&&(c=""+r),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(e in t)pm.call(t,e)&&!fm.hasOwnProperty(e)&&(a[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)a[e]===void 0&&(a[e]=t[e]);return{$$typeof:gm,type:o,key:c,ref:i,props:a,_owner:hm.current}}k6.Fragment=um;k6.jsx=nb;k6.jsxs=nb});var sb=b1((UE,db)=>{"use strict";db.exports=lb()});var Ti=b1((YB,Ri)=>{function Jb(o,t=100,r={}){if(typeof o!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof o}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");let{immediate:e}=typeof r=="boolean"?{immediate:r}:r,a,c,i,l,w;function b(){let m=a,x=c;return a=void 0,c=void 0,w=o.apply(m,x),w}function y(){let m=Date.now()-l;m<t&&m>=0?i=setTimeout(y,t-m):(i=void 0,e||(w=b()))}let f=function(...m){if(a&&this!==a&&Object.getPrototypeOf(this)===Object.getPrototypeOf(a))throw new Error("Debounced method called with different contexts of the same prototype.");a=this,c=m,l=Date.now();let x=e&&!i;return i||(i=setTimeout(y,t)),x&&(w=b()),w};return Object.defineProperty(f,"isPending",{get(){return i!==void 0}}),f.clear=()=>{i&&(clearTimeout(i),i=void 0)},f.flush=()=>{i&&f.trigger()},f.trigger=()=>{w=b(),f.clear()},f}Ri.exports.debounce=Jb;Ri.exports=Jb});var Og=b1((MF,Pg)=>{"use strict";var xk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";Pg.exports=xk});var Ig=b1((CF,Tg)=>{"use strict";var mk=Og();function Ng(){}function Rg(){}Rg.resetWarningCache=Ng;Tg.exports=function(){function o(e,a,c,i,l,w){if(w!==mk){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}o.isRequired=o;function t(){return o}var r={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:t,element:o,elementType:o,instanceOf:t,node:o,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rg,resetWarningCache:Ng};return r.PropTypes=r,r}});var Zg=b1((VF,Dg)=>{Dg.exports=Ig()();var SF,LF});var Z4={};Nn(Z4,{__addDisposableResource:()=>Qu,__assign:()=>$6,__asyncDelegator:()=>Uu,__asyncGenerator:()=>ju,__asyncValues:()=>Yu,__await:()=>la,__awaiter:()=>Nu,__classPrivateFieldGet:()=>$u,__classPrivateFieldIn:()=>Gu,__classPrivateFieldSet:()=>Ku,__createBinding:()=>G6,__decorate:()=>Hu,__disposeResources:()=>Ju,__esDecorate:()=>Bu,__exportStar:()=>Tu,__extends:()=>Lu,__generator:()=>Ru,__importDefault:()=>Wu,__importStar:()=>Xu,__makeTemplateObject:()=>qu,__metadata:()=>Ou,__param:()=>Eu,__propKey:()=>Fu,__read:()=>Ln,__rest:()=>Vu,__rewriteRelativeImportExtension:()=>op,__runInitializers:()=>Au,__setFunctionName:()=>Pu,__spread:()=>Iu,__spreadArray:()=>Zu,__spreadArrays:()=>Du,__values:()=>K6,default:()=>Kk});function Lu(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Cn(o,t);function r(){this.constructor=o}o.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function Vu(o,t){var r={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(r[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(r[e[a]]=o[e[a]]);return r}function Hu(o,t,r,e){var a=arguments.length,c=a<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,r):e,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,t,r,e);else for(var l=o.length-1;l>=0;l--)(i=o[l])&&(c=(a<3?i(c):a>3?i(t,r,c):i(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}function Eu(o,t){return function(r,e){t(r,e,o)}}function Bu(o,t,r,e,a,c){function i(u){if(u!==void 0&&typeof u!="function")throw new TypeError("Function expected");return u}for(var l=e.kind,w=l==="getter"?"get":l==="setter"?"set":"value",b=!t&&o?e.static?o:o.prototype:null,y=t||(b?Object.getOwnPropertyDescriptor(b,e.name):{}),f,m=!1,x=r.length-1;x>=0;x--){var s={};for(var d in e)s[d]=d==="access"?{}:e[d];for(var d in e.access)s.access[d]=e.access[d];s.addInitializer=function(u){if(m)throw new TypeError("Cannot add initializers after decoration has completed");c.push(i(u||null))};var n=(0,r[x])(l==="accessor"?{get:y.get,set:y.set}:y[w],s);if(l==="accessor"){if(n===void 0)continue;if(n===null||typeof n!="object")throw new TypeError("Object expected");(f=i(n.get))&&(y.get=f),(f=i(n.set))&&(y.set=f),(f=i(n.init))&&a.unshift(f)}else(f=i(n))&&(l==="field"?a.unshift(f):y[w]=f)}b&&Object.defineProperty(b,e.name,y),m=!0}function Au(o,t,r){for(var e=arguments.length>2,a=0;a<t.length;a++)r=e?t[a].call(o,r):t[a].call(o);return e?r:void 0}function Fu(o){return typeof o=="symbol"?o:"".concat(o)}function Pu(o,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(o,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function Ou(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)}function Nu(o,t,r,e){function a(c){return c instanceof r?c:new r(function(i){i(c)})}return new(r||(r=Promise))(function(c,i){function l(y){try{b(e.next(y))}catch(f){i(f)}}function w(y){try{b(e.throw(y))}catch(f){i(f)}}function b(y){y.done?c(y.value):a(y.value).then(l,w)}b((e=e.apply(o,t||[])).next())})}function Ru(o,t){var r={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},e,a,c,i=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return i.next=l(0),i.throw=l(1),i.return=l(2),typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(b){return function(y){return w([b,y])}}function w(b){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,b[0]&&(r=0)),r;)try{if(e=1,a&&(c=b[0]&2?a.return:b[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,b[1])).done)return c;switch(a=0,c&&(b=[b[0]&2,c.value]),b[0]){case 0:case 1:c=b;break;case 4:return r.label++,{value:b[1],done:!1};case 5:r.label++,a=b[1],b=[0];continue;case 7:b=r.ops.pop(),r.trys.pop();continue;default:if(c=r.trys,!(c=c.length>0&&c[c.length-1])&&(b[0]===6||b[0]===2)){r=0;continue}if(b[0]===3&&(!c||b[1]>c[0]&&b[1]<c[3])){r.label=b[1];break}if(b[0]===6&&r.label<c[1]){r.label=c[1],c=b;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(b);break}c[2]&&r.ops.pop(),r.trys.pop();continue}b=t.call(o,r)}catch(y){b=[6,y],a=0}finally{e=c=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}}function Tu(o,t){for(var r in o)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&G6(t,o,r)}function K6(o){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&o[t],e=0;if(r)return r.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&e>=o.length&&(o=void 0),{value:o&&o[e++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ln(o,t){var r=typeof Symbol=="function"&&o[Symbol.iterator];if(!r)return o;var e=r.call(o),a,c=[],i;try{for(;(t===void 0||t-- >0)&&!(a=e.next()).done;)c.push(a.value)}catch(l){i={error:l}}finally{try{a&&!a.done&&(r=e.return)&&r.call(e)}finally{if(i)throw i.error}}return c}function Iu(){for(var o=[],t=0;t<arguments.length;t++)o=o.concat(Ln(arguments[t]));return o}function Du(){for(var o=0,t=0,r=arguments.length;t<r;t++)o+=arguments[t].length;for(var e=Array(o),a=0,t=0;t<r;t++)for(var c=arguments[t],i=0,l=c.length;i<l;i++,a++)e[a]=c[i];return e}function Zu(o,t,r){if(r||arguments.length===2)for(var e=0,a=t.length,c;e<a;e++)(c||!(e in t))&&(c||(c=Array.prototype.slice.call(t,0,e)),c[e]=t[e]);return o.concat(c||Array.prototype.slice.call(t))}function la(o){return this instanceof la?(this.v=o,this):new la(o)}function ju(o,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=r.apply(o,t||[]),a,c=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),l("next"),l("throw"),l("return",i),a[Symbol.asyncIterator]=function(){return this},a;function i(x){return function(s){return Promise.resolve(s).then(x,f)}}function l(x,s){e[x]&&(a[x]=function(d){return new Promise(function(n,u){c.push([x,d,n,u])>1||w(x,d)})},s&&(a[x]=s(a[x])))}function w(x,s){try{b(e[x](s))}catch(d){m(c[0][3],d)}}function b(x){x.value instanceof la?Promise.resolve(x.value.v).then(y,f):m(c[0][2],x)}function y(x){w("next",x)}function f(x){w("throw",x)}function m(x,s){x(s),c.shift(),c.length&&w(c[0][0],c[0][1])}}function Uu(o){var t,r;return t={},e("next"),e("throw",function(a){throw a}),e("return"),t[Symbol.iterator]=function(){return this},t;function e(a,c){t[a]=o[a]?function(i){return(r=!r)?{value:la(o[a](i)),done:!1}:c?c(i):i}:c}}function Yu(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],r;return t?t.call(o):(o=typeof K6=="function"?K6(o):o[Symbol.iterator](),r={},e("next"),e("throw"),e("return"),r[Symbol.asyncIterator]=function(){return this},r);function e(c){r[c]=o[c]&&function(i){return new Promise(function(l,w){i=o[c](i),a(l,w,i.done,i.value)})}}function a(c,i,l,w){Promise.resolve(w).then(function(b){c({value:b,done:l})},i)}}function qu(o,t){return Object.defineProperty?Object.defineProperty(o,"raw",{value:t}):o.raw=t,o}function Xu(o){if(o&&o.__esModule)return o;var t={};if(o!=null)for(var r=Sn(o),e=0;e<r.length;e++)r[e]!=="default"&&G6(t,o,r[e]);return Wk(t,o),t}function Wu(o){return o&&o.__esModule?o:{default:o}}function $u(o,t,r,e){if(r==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?o!==t||!e:!t.has(o))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?e:r==="a"?e.call(o):e?e.value:t.get(o)}function Ku(o,t,r,e,a){if(e==="m")throw new TypeError("Private method is not writable");if(e==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?o!==t||!a:!t.has(o))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e==="a"?a.call(o,r):a?a.value=r:t.set(o,r),r}function Gu(o,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof o=="function"?t===o:o.has(t)}function Qu(o,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var e,a;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");e=t[Symbol.asyncDispose]}if(e===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");e=t[Symbol.dispose],r&&(a=e)}if(typeof e!="function")throw new TypeError("Object not disposable.");a&&(e=function(){try{a.call(this)}catch(c){return Promise.reject(c)}}),o.stack.push({value:t,dispose:e,async:r})}else r&&o.stack.push({async:!0});return t}function Ju(o){function t(c){o.error=o.hasError?new $k(c,o.error,"An error was suppressed during disposal."):c,o.hasError=!0}var r,e=0;function a(){for(;r=o.stack.pop();)try{if(!r.async&&e===1)return e=0,o.stack.push(r),Promise.resolve().then(a);if(r.dispose){var c=r.dispose.call(r.value);if(r.async)return e|=2,Promise.resolve(c).then(a,function(i){return t(i),a()})}else e|=1}catch(i){t(i)}if(e===1)return o.hasError?Promise.reject(o.error):Promise.resolve();if(o.hasError)throw o.error}return a()}function op(o,t){return typeof o=="string"&&/^\.\.?\//.test(o)?o.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(r,e,a,c,i){return e?t?".jsx":".js":a&&(!c||!i)?r:a+c+"."+i.toLowerCase()+"js"}):o}var Cn,$6,G6,Wk,Sn,$k,Kk,j4=Cp(()=>{Cn=function(o,t){return Cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])},Cn(o,t)};$6=function(){return $6=Object.assign||function(t){for(var r,e=1,a=arguments.length;e<a;e++){r=arguments[e];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c])}return t},$6.apply(this,arguments)};G6=Object.create?function(o,t,r,e){e===void 0&&(e=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(o,e,a)}:function(o,t,r,e){e===void 0&&(e=r),o[e]=t[r]};Wk=Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t},Sn=function(o){return Sn=Object.getOwnPropertyNames||function(t){var r=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[r.length]=e);return r},Sn(o)};$k=typeof SuppressedError=="function"?SuppressedError:function(o,t,r){var e=new Error(r);return e.name="SuppressedError",e.error=o,e.suppressed=t,e};Kk={__extends:Lu,__assign:$6,__rest:Vu,__decorate:Hu,__param:Eu,__esDecorate:Bu,__runInitializers:Au,__propKey:Fu,__setFunctionName:Pu,__metadata:Ou,__awaiter:Nu,__generator:Ru,__createBinding:G6,__exportStar:Tu,__values:K6,__read:Ln,__spread:Iu,__spreadArrays:Du,__spreadArray:Zu,__await:la,__asyncGenerator:ju,__asyncDelegator:Uu,__asyncValues:Yu,__makeTemplateObject:qu,__importStar:Xu,__importDefault:Wu,__classPrivateFieldGet:$u,__classPrivateFieldSet:Ku,__classPrivateFieldIn:Gu,__addDisposableResource:Qu,__disposeResources:Ju,__rewriteRelativeImportExtension:op}});var U4=b1(g2=>{"use strict";Object.defineProperty(g2,"__esModule",{value:!0});g2.E_CANCELED=g2.E_ALREADY_LOCKED=g2.E_TIMEOUT=void 0;g2.E_TIMEOUT=new Error("timeout while waiting for mutex to become available");g2.E_ALREADY_LOCKED=new Error("mutex already locked");g2.E_CANCELED=new Error("request for lock canceled")});var Hn=b1(Vn=>{"use strict";Object.defineProperty(Vn,"__esModule",{value:!0});var Q6=(j4(),$4(Z4)),Gk=U4(),Qk=function(){function o(t,r){if(r===void 0&&(r=Gk.E_CANCELED),this._maxConcurrency=t,this._cancelError=r,this._queue=[],this._waiters=[],t<=0)throw new Error("semaphore must be initialized to a positive value");this._value=t}return o.prototype.acquire=function(){var t=this,r=this.isLocked(),e=new Promise(function(a,c){return t._queue.push({resolve:a,reject:c})});return r||this._dispatch(),e},o.prototype.runExclusive=function(t){return(0,Q6.__awaiter)(this,void 0,void 0,function(){var r,e,a;return(0,Q6.__generator)(this,function(c){switch(c.label){case 0:return[4,this.acquire()];case 1:r=c.sent(),e=r[0],a=r[1],c.label=2;case 2:return c.trys.push([2,,4,5]),[4,t(e)];case 3:return[2,c.sent()];case 4:return a(),[7];case 5:return[2]}})})},o.prototype.waitForUnlock=function(){return(0,Q6.__awaiter)(this,void 0,void 0,function(){var t,r=this;return(0,Q6.__generator)(this,function(e){return this.isLocked()?(t=new Promise(function(a){return r._waiters.push({resolve:a})}),[2,t]):[2,Promise.resolve()]})})},o.prototype.isLocked=function(){return this._value<=0},o.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var t=this._currentReleaser;this._currentReleaser=void 0,t()}},o.prototype.cancel=function(){var t=this;this._queue.forEach(function(r){return r.reject(t._cancelError)}),this._queue=[]},o.prototype._dispatch=function(){var t=this,r=this._queue.shift();if(r){var e=!1;this._currentReleaser=function(){e||(e=!0,t._value++,t._resolveWaiters(),t._dispatch())},r.resolve([this._value--,this._currentReleaser])}},o.prototype._resolveWaiters=function(){this._waiters.forEach(function(t){return t.resolve()}),this._waiters=[]},o}();Vn.default=Qk});var rp=b1(En=>{"use strict";Object.defineProperty(En,"__esModule",{value:!0});var tp=(j4(),$4(Z4)),Jk=Hn(),o_=function(){function o(t){this._semaphore=new Jk.default(1,t)}return o.prototype.acquire=function(){return(0,tp.__awaiter)(this,void 0,void 0,function(){var t,r;return(0,tp.__generator)(this,function(e){switch(e.label){case 0:return[4,this._semaphore.acquire()];case 1:return t=e.sent(),r=t[1],[2,r]}})})},o.prototype.runExclusive=function(t){return this._semaphore.runExclusive(function(){return t()})},o.prototype.isLocked=function(){return this._semaphore.isLocked()},o.prototype.waitForUnlock=function(){return this._semaphore.waitForUnlock()},o.prototype.release=function(){this._semaphore.release()},o.prototype.cancel=function(){return this._semaphore.cancel()},o}();En.default=o_});var Bn=b1(o5=>{"use strict";Object.defineProperty(o5,"__esModule",{value:!0});o5.withTimeout=void 0;var J6=(j4(),$4(Z4)),t_=U4();function r_(o,t,r){var e=this;return r===void 0&&(r=t_.E_TIMEOUT),{acquire:function(){return new Promise(function(a,c){return(0,J6.__awaiter)(e,void 0,void 0,function(){var i,l,w,b,y;return(0,J6.__generator)(this,function(f){switch(f.label){case 0:i=!1,l=setTimeout(function(){i=!0,c(r)},t),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,o.acquire()];case 2:return w=f.sent(),i?(b=Array.isArray(w)?w[1]:w,b()):(clearTimeout(l),a(w)),[3,4];case 3:return y=f.sent(),i||(clearTimeout(l),c(y)),[3,4];case 4:return[2]}})})})},runExclusive:function(a){return(0,J6.__awaiter)(this,void 0,void 0,function(){var c,i;return(0,J6.__generator)(this,function(l){switch(l.label){case 0:c=function(){},l.label=1;case 1:return l.trys.push([1,,7,8]),[4,this.acquire()];case 2:return i=l.sent(),Array.isArray(i)?(c=i[1],[4,a(i[0])]):[3,4];case 3:return[2,l.sent()];case 4:return c=i,[4,a()];case 5:return[2,l.sent()];case 6:return[3,8];case 7:return c(),[7];case 8:return[2]}})})},release:function(){o.release()},cancel:function(){return o.cancel()},waitForUnlock:function(){return o.waitForUnlock()},isLocked:function(){return o.isLocked()}}}o5.withTimeout=r_});var ep=b1(t5=>{"use strict";Object.defineProperty(t5,"__esModule",{value:!0});t5.tryAcquire=void 0;var e_=U4(),a_=Bn();function c_(o,t){return t===void 0&&(t=e_.E_ALREADY_LOCKED),(0,a_.withTimeout)(o,0,t)}t5.tryAcquire=c_});var ap=b1(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.tryAcquire=Dt.withTimeout=Dt.Semaphore=Dt.Mutex=void 0;var i_=(j4(),$4(Z4)),n_=rp();Object.defineProperty(Dt,"Mutex",{enumerable:!0,get:function(){return n_.default}});var l_=Hn();Object.defineProperty(Dt,"Semaphore",{enumerable:!0,get:function(){return l_.default}});var d_=Bn();Object.defineProperty(Dt,"withTimeout",{enumerable:!0,get:function(){return d_.withTimeout}});var s_=ep();Object.defineProperty(Dt,"tryAcquire",{enumerable:!0,get:function(){return s_.tryAcquire}});(0,i_.__exportStar)(U4(),Dt)});var An=b1(s1=>{"use strict";Object.defineProperty(s1,"__esModule",{value:!0});s1.Z3_goal_prec=s1.Z3_error_code=s1.Z3_ast_print_mode=s1.Z3_param_kind=s1.Z3_decl_kind=s1.Z3_ast_kind=s1.Z3_sort_kind=s1.Z3_parameter_kind=s1.Z3_symbol_kind=s1.Z3_lbool=void 0;var w_;(function(o){o[o.Z3_L_FALSE=-1]="Z3_L_FALSE",o[o.Z3_L_UNDEF=0]="Z3_L_UNDEF",o[o.Z3_L_TRUE=1]="Z3_L_TRUE"})(w_=s1.Z3_lbool||(s1.Z3_lbool={}));var v_;(function(o){o[o.Z3_INT_SYMBOL=0]="Z3_INT_SYMBOL",o[o.Z3_STRING_SYMBOL=1]="Z3_STRING_SYMBOL"})(v_=s1.Z3_symbol_kind||(s1.Z3_symbol_kind={}));var b_;(function(o){o[o.Z3_PARAMETER_INT=0]="Z3_PARAMETER_INT",o[o.Z3_PARAMETER_DOUBLE=1]="Z3_PARAMETER_DOUBLE",o[o.Z3_PARAMETER_RATIONAL=2]="Z3_PARAMETER_RATIONAL",o[o.Z3_PARAMETER_SYMBOL=3]="Z3_PARAMETER_SYMBOL",o[o.Z3_PARAMETER_SORT=4]="Z3_PARAMETER_SORT",o[o.Z3_PARAMETER_AST=5]="Z3_PARAMETER_AST",o[o.Z3_PARAMETER_FUNC_DECL=6]="Z3_PARAMETER_FUNC_DECL"})(b_=s1.Z3_parameter_kind||(s1.Z3_parameter_kind={}));var g_;(function(o){o[o.Z3_UNINTERPRETED_SORT=0]="Z3_UNINTERPRETED_SORT",o[o.Z3_BOOL_SORT=1]="Z3_BOOL_SORT",o[o.Z3_INT_SORT=2]="Z3_INT_SORT",o[o.Z3_REAL_SORT=3]="Z3_REAL_SORT",o[o.Z3_BV_SORT=4]="Z3_BV_SORT",o[o.Z3_ARRAY_SORT=5]="Z3_ARRAY_SORT",o[o.Z3_DATATYPE_SORT=6]="Z3_DATATYPE_SORT",o[o.Z3_RELATION_SORT=7]="Z3_RELATION_SORT",o[o.Z3_FINITE_DOMAIN_SORT=8]="Z3_FINITE_DOMAIN_SORT",o[o.Z3_FLOATING_POINT_SORT=9]="Z3_FLOATING_POINT_SORT",o[o.Z3_ROUNDING_MODE_SORT=10]="Z3_ROUNDING_MODE_SORT",o[o.Z3_SEQ_SORT=11]="Z3_SEQ_SORT",o[o.Z3_RE_SORT=12]="Z3_RE_SORT",o[o.Z3_CHAR_SORT=13]="Z3_CHAR_SORT",o[o.Z3_TYPE_VAR=14]="Z3_TYPE_VAR",o[o.Z3_UNKNOWN_SORT=1e3]="Z3_UNKNOWN_SORT"})(g_=s1.Z3_sort_kind||(s1.Z3_sort_kind={}));var u_;(function(o){o[o.Z3_NUMERAL_AST=0]="Z3_NUMERAL_AST",o[o.Z3_APP_AST=1]="Z3_APP_AST",o[o.Z3_VAR_AST=2]="Z3_VAR_AST",o[o.Z3_QUANTIFIER_AST=3]="Z3_QUANTIFIER_AST",o[o.Z3_SORT_AST=4]="Z3_SORT_AST",o[o.Z3_FUNC_DECL_AST=5]="Z3_FUNC_DECL_AST",o[o.Z3_UNKNOWN_AST=1e3]="Z3_UNKNOWN_AST"})(u_=s1.Z3_ast_kind||(s1.Z3_ast_kind={}));var p_;(function(o){o[o.Z3_OP_TRUE=256]="Z3_OP_TRUE",o[o.Z3_OP_FALSE=257]="Z3_OP_FALSE",o[o.Z3_OP_EQ=258]="Z3_OP_EQ",o[o.Z3_OP_DISTINCT=259]="Z3_OP_DISTINCT",o[o.Z3_OP_ITE=260]="Z3_OP_ITE",o[o.Z3_OP_AND=261]="Z3_OP_AND",o[o.Z3_OP_OR=262]="Z3_OP_OR",o[o.Z3_OP_IFF=263]="Z3_OP_IFF",o[o.Z3_OP_XOR=264]="Z3_OP_XOR",o[o.Z3_OP_NOT=265]="Z3_OP_NOT",o[o.Z3_OP_IMPLIES=266]="Z3_OP_IMPLIES",o[o.Z3_OP_OEQ=267]="Z3_OP_OEQ",o[o.Z3_OP_ANUM=512]="Z3_OP_ANUM",o[o.Z3_OP_AGNUM=513]="Z3_OP_AGNUM",o[o.Z3_OP_LE=514]="Z3_OP_LE",o[o.Z3_OP_GE=515]="Z3_OP_GE",o[o.Z3_OP_LT=516]="Z3_OP_LT",o[o.Z3_OP_GT=517]="Z3_OP_GT",o[o.Z3_OP_ADD=518]="Z3_OP_ADD",o[o.Z3_OP_SUB=519]="Z3_OP_SUB",o[o.Z3_OP_UMINUS=520]="Z3_OP_UMINUS",o[o.Z3_OP_MUL=521]="Z3_OP_MUL",o[o.Z3_OP_DIV=522]="Z3_OP_DIV",o[o.Z3_OP_IDIV=523]="Z3_OP_IDIV",o[o.Z3_OP_REM=524]="Z3_OP_REM",o[o.Z3_OP_MOD=525]="Z3_OP_MOD",o[o.Z3_OP_TO_REAL=526]="Z3_OP_TO_REAL",o[o.Z3_OP_TO_INT=527]="Z3_OP_TO_INT",o[o.Z3_OP_IS_INT=528]="Z3_OP_IS_INT",o[o.Z3_OP_POWER=529]="Z3_OP_POWER",o[o.Z3_OP_ABS=530]="Z3_OP_ABS",o[o.Z3_OP_STORE=768]="Z3_OP_STORE",o[o.Z3_OP_SELECT=769]="Z3_OP_SELECT",o[o.Z3_OP_CONST_ARRAY=770]="Z3_OP_CONST_ARRAY",o[o.Z3_OP_ARRAY_MAP=771]="Z3_OP_ARRAY_MAP",o[o.Z3_OP_ARRAY_DEFAULT=772]="Z3_OP_ARRAY_DEFAULT",o[o.Z3_OP_SET_UNION=773]="Z3_OP_SET_UNION",o[o.Z3_OP_SET_INTERSECT=774]="Z3_OP_SET_INTERSECT",o[o.Z3_OP_SET_DIFFERENCE=775]="Z3_OP_SET_DIFFERENCE",o[o.Z3_OP_SET_COMPLEMENT=776]="Z3_OP_SET_COMPLEMENT",o[o.Z3_OP_SET_SUBSET=777]="Z3_OP_SET_SUBSET",o[o.Z3_OP_AS_ARRAY=778]="Z3_OP_AS_ARRAY",o[o.Z3_OP_ARRAY_EXT=779]="Z3_OP_ARRAY_EXT",o[o.Z3_OP_SET_HAS_SIZE=780]="Z3_OP_SET_HAS_SIZE",o[o.Z3_OP_SET_CARD=781]="Z3_OP_SET_CARD",o[o.Z3_OP_BNUM=1024]="Z3_OP_BNUM",o[o.Z3_OP_BIT1=1025]="Z3_OP_BIT1",o[o.Z3_OP_BIT0=1026]="Z3_OP_BIT0",o[o.Z3_OP_BNEG=1027]="Z3_OP_BNEG",o[o.Z3_OP_BADD=1028]="Z3_OP_BADD",o[o.Z3_OP_BSUB=1029]="Z3_OP_BSUB",o[o.Z3_OP_BMUL=1030]="Z3_OP_BMUL",o[o.Z3_OP_BSDIV=1031]="Z3_OP_BSDIV",o[o.Z3_OP_BUDIV=1032]="Z3_OP_BUDIV",o[o.Z3_OP_BSREM=1033]="Z3_OP_BSREM",o[o.Z3_OP_BUREM=1034]="Z3_OP_BUREM",o[o.Z3_OP_BSMOD=1035]="Z3_OP_BSMOD",o[o.Z3_OP_BSDIV0=1036]="Z3_OP_BSDIV0",o[o.Z3_OP_BUDIV0=1037]="Z3_OP_BUDIV0",o[o.Z3_OP_BSREM0=1038]="Z3_OP_BSREM0",o[o.Z3_OP_BUREM0=1039]="Z3_OP_BUREM0",o[o.Z3_OP_BSMOD0=1040]="Z3_OP_BSMOD0",o[o.Z3_OP_ULEQ=1041]="Z3_OP_ULEQ",o[o.Z3_OP_SLEQ=1042]="Z3_OP_SLEQ",o[o.Z3_OP_UGEQ=1043]="Z3_OP_UGEQ",o[o.Z3_OP_SGEQ=1044]="Z3_OP_SGEQ",o[o.Z3_OP_ULT=1045]="Z3_OP_ULT",o[o.Z3_OP_SLT=1046]="Z3_OP_SLT",o[o.Z3_OP_UGT=1047]="Z3_OP_UGT",o[o.Z3_OP_SGT=1048]="Z3_OP_SGT",o[o.Z3_OP_BAND=1049]="Z3_OP_BAND",o[o.Z3_OP_BOR=1050]="Z3_OP_BOR",o[o.Z3_OP_BNOT=1051]="Z3_OP_BNOT",o[o.Z3_OP_BXOR=1052]="Z3_OP_BXOR",o[o.Z3_OP_BNAND=1053]="Z3_OP_BNAND",o[o.Z3_OP_BNOR=1054]="Z3_OP_BNOR",o[o.Z3_OP_BXNOR=1055]="Z3_OP_BXNOR",o[o.Z3_OP_CONCAT=1056]="Z3_OP_CONCAT",o[o.Z3_OP_SIGN_EXT=1057]="Z3_OP_SIGN_EXT",o[o.Z3_OP_ZERO_EXT=1058]="Z3_OP_ZERO_EXT",o[o.Z3_OP_EXTRACT=1059]="Z3_OP_EXTRACT",o[o.Z3_OP_REPEAT=1060]="Z3_OP_REPEAT",o[o.Z3_OP_BREDOR=1061]="Z3_OP_BREDOR",o[o.Z3_OP_BREDAND=1062]="Z3_OP_BREDAND",o[o.Z3_OP_BCOMP=1063]="Z3_OP_BCOMP",o[o.Z3_OP_BSHL=1064]="Z3_OP_BSHL",o[o.Z3_OP_BLSHR=1065]="Z3_OP_BLSHR",o[o.Z3_OP_BASHR=1066]="Z3_OP_BASHR",o[o.Z3_OP_ROTATE_LEFT=1067]="Z3_OP_ROTATE_LEFT",o[o.Z3_OP_ROTATE_RIGHT=1068]="Z3_OP_ROTATE_RIGHT",o[o.Z3_OP_EXT_ROTATE_LEFT=1069]="Z3_OP_EXT_ROTATE_LEFT",o[o.Z3_OP_EXT_ROTATE_RIGHT=1070]="Z3_OP_EXT_ROTATE_RIGHT",o[o.Z3_OP_BIT2BOOL=1071]="Z3_OP_BIT2BOOL",o[o.Z3_OP_INT2BV=1072]="Z3_OP_INT2BV",o[o.Z3_OP_BV2INT=1073]="Z3_OP_BV2INT",o[o.Z3_OP_CARRY=1074]="Z3_OP_CARRY",o[o.Z3_OP_XOR3=1075]="Z3_OP_XOR3",o[o.Z3_OP_BSMUL_NO_OVFL=1076]="Z3_OP_BSMUL_NO_OVFL",o[o.Z3_OP_BUMUL_NO_OVFL=1077]="Z3_OP_BUMUL_NO_OVFL",o[o.Z3_OP_BSMUL_NO_UDFL=1078]="Z3_OP_BSMUL_NO_UDFL",o[o.Z3_OP_BSDIV_I=1079]="Z3_OP_BSDIV_I",o[o.Z3_OP_BUDIV_I=1080]="Z3_OP_BUDIV_I",o[o.Z3_OP_BSREM_I=1081]="Z3_OP_BSREM_I",o[o.Z3_OP_BUREM_I=1082]="Z3_OP_BUREM_I",o[o.Z3_OP_BSMOD_I=1083]="Z3_OP_BSMOD_I",o[o.Z3_OP_PR_UNDEF=1280]="Z3_OP_PR_UNDEF",o[o.Z3_OP_PR_TRUE=1281]="Z3_OP_PR_TRUE",o[o.Z3_OP_PR_ASSERTED=1282]="Z3_OP_PR_ASSERTED",o[o.Z3_OP_PR_GOAL=1283]="Z3_OP_PR_GOAL",o[o.Z3_OP_PR_MODUS_PONENS=1284]="Z3_OP_PR_MODUS_PONENS",o[o.Z3_OP_PR_REFLEXIVITY=1285]="Z3_OP_PR_REFLEXIVITY",o[o.Z3_OP_PR_SYMMETRY=1286]="Z3_OP_PR_SYMMETRY",o[o.Z3_OP_PR_TRANSITIVITY=1287]="Z3_OP_PR_TRANSITIVITY",o[o.Z3_OP_PR_TRANSITIVITY_STAR=1288]="Z3_OP_PR_TRANSITIVITY_STAR",o[o.Z3_OP_PR_MONOTONICITY=1289]="Z3_OP_PR_MONOTONICITY",o[o.Z3_OP_PR_QUANT_INTRO=1290]="Z3_OP_PR_QUANT_INTRO",o[o.Z3_OP_PR_BIND=1291]="Z3_OP_PR_BIND",o[o.Z3_OP_PR_DISTRIBUTIVITY=1292]="Z3_OP_PR_DISTRIBUTIVITY",o[o.Z3_OP_PR_AND_ELIM=1293]="Z3_OP_PR_AND_ELIM",o[o.Z3_OP_PR_NOT_OR_ELIM=1294]="Z3_OP_PR_NOT_OR_ELIM",o[o.Z3_OP_PR_REWRITE=1295]="Z3_OP_PR_REWRITE",o[o.Z3_OP_PR_REWRITE_STAR=1296]="Z3_OP_PR_REWRITE_STAR",o[o.Z3_OP_PR_PULL_QUANT=1297]="Z3_OP_PR_PULL_QUANT",o[o.Z3_OP_PR_PUSH_QUANT=1298]="Z3_OP_PR_PUSH_QUANT",o[o.Z3_OP_PR_ELIM_UNUSED_VARS=1299]="Z3_OP_PR_ELIM_UNUSED_VARS",o[o.Z3_OP_PR_DER=1300]="Z3_OP_PR_DER",o[o.Z3_OP_PR_QUANT_INST=1301]="Z3_OP_PR_QUANT_INST",o[o.Z3_OP_PR_HYPOTHESIS=1302]="Z3_OP_PR_HYPOTHESIS",o[o.Z3_OP_PR_LEMMA=1303]="Z3_OP_PR_LEMMA",o[o.Z3_OP_PR_UNIT_RESOLUTION=1304]="Z3_OP_PR_UNIT_RESOLUTION",o[o.Z3_OP_PR_IFF_TRUE=1305]="Z3_OP_PR_IFF_TRUE",o[o.Z3_OP_PR_IFF_FALSE=1306]="Z3_OP_PR_IFF_FALSE",o[o.Z3_OP_PR_COMMUTATIVITY=1307]="Z3_OP_PR_COMMUTATIVITY",o[o.Z3_OP_PR_DEF_AXIOM=1308]="Z3_OP_PR_DEF_AXIOM",o[o.Z3_OP_PR_ASSUMPTION_ADD=1309]="Z3_OP_PR_ASSUMPTION_ADD",o[o.Z3_OP_PR_LEMMA_ADD=1310]="Z3_OP_PR_LEMMA_ADD",o[o.Z3_OP_PR_REDUNDANT_DEL=1311]="Z3_OP_PR_REDUNDANT_DEL",o[o.Z3_OP_PR_CLAUSE_TRAIL=1312]="Z3_OP_PR_CLAUSE_TRAIL",o[o.Z3_OP_PR_DEF_INTRO=1313]="Z3_OP_PR_DEF_INTRO",o[o.Z3_OP_PR_APPLY_DEF=1314]="Z3_OP_PR_APPLY_DEF",o[o.Z3_OP_PR_IFF_OEQ=1315]="Z3_OP_PR_IFF_OEQ",o[o.Z3_OP_PR_NNF_POS=1316]="Z3_OP_PR_NNF_POS",o[o.Z3_OP_PR_NNF_NEG=1317]="Z3_OP_PR_NNF_NEG",o[o.Z3_OP_PR_SKOLEMIZE=1318]="Z3_OP_PR_SKOLEMIZE",o[o.Z3_OP_PR_MODUS_PONENS_OEQ=1319]="Z3_OP_PR_MODUS_PONENS_OEQ",o[o.Z3_OP_PR_TH_LEMMA=1320]="Z3_OP_PR_TH_LEMMA",o[o.Z3_OP_PR_HYPER_RESOLVE=1321]="Z3_OP_PR_HYPER_RESOLVE",o[o.Z3_OP_RA_STORE=1536]="Z3_OP_RA_STORE",o[o.Z3_OP_RA_EMPTY=1537]="Z3_OP_RA_EMPTY",o[o.Z3_OP_RA_IS_EMPTY=1538]="Z3_OP_RA_IS_EMPTY",o[o.Z3_OP_RA_JOIN=1539]="Z3_OP_RA_JOIN",o[o.Z3_OP_RA_UNION=1540]="Z3_OP_RA_UNION",o[o.Z3_OP_RA_WIDEN=1541]="Z3_OP_RA_WIDEN",o[o.Z3_OP_RA_PROJECT=1542]="Z3_OP_RA_PROJECT",o[o.Z3_OP_RA_FILTER=1543]="Z3_OP_RA_FILTER",o[o.Z3_OP_RA_NEGATION_FILTER=1544]="Z3_OP_RA_NEGATION_FILTER",o[o.Z3_OP_RA_RENAME=1545]="Z3_OP_RA_RENAME",o[o.Z3_OP_RA_COMPLEMENT=1546]="Z3_OP_RA_COMPLEMENT",o[o.Z3_OP_RA_SELECT=1547]="Z3_OP_RA_SELECT",o[o.Z3_OP_RA_CLONE=1548]="Z3_OP_RA_CLONE",o[o.Z3_OP_FD_CONSTANT=1549]="Z3_OP_FD_CONSTANT",o[o.Z3_OP_FD_LT=1550]="Z3_OP_FD_LT",o[o.Z3_OP_SEQ_UNIT=1551]="Z3_OP_SEQ_UNIT",o[o.Z3_OP_SEQ_EMPTY=1552]="Z3_OP_SEQ_EMPTY",o[o.Z3_OP_SEQ_CONCAT=1553]="Z3_OP_SEQ_CONCAT",o[o.Z3_OP_SEQ_PREFIX=1554]="Z3_OP_SEQ_PREFIX",o[o.Z3_OP_SEQ_SUFFIX=1555]="Z3_OP_SEQ_SUFFIX",o[o.Z3_OP_SEQ_CONTAINS=1556]="Z3_OP_SEQ_CONTAINS",o[o.Z3_OP_SEQ_EXTRACT=1557]="Z3_OP_SEQ_EXTRACT",o[o.Z3_OP_SEQ_REPLACE=1558]="Z3_OP_SEQ_REPLACE",o[o.Z3_OP_SEQ_REPLACE_RE=1559]="Z3_OP_SEQ_REPLACE_RE",o[o.Z3_OP_SEQ_REPLACE_RE_ALL=1560]="Z3_OP_SEQ_REPLACE_RE_ALL",o[o.Z3_OP_SEQ_REPLACE_ALL=1561]="Z3_OP_SEQ_REPLACE_ALL",o[o.Z3_OP_SEQ_AT=1562]="Z3_OP_SEQ_AT",o[o.Z3_OP_SEQ_NTH=1563]="Z3_OP_SEQ_NTH",o[o.Z3_OP_SEQ_LENGTH=1564]="Z3_OP_SEQ_LENGTH",o[o.Z3_OP_SEQ_INDEX=1565]="Z3_OP_SEQ_INDEX",o[o.Z3_OP_SEQ_LAST_INDEX=1566]="Z3_OP_SEQ_LAST_INDEX",o[o.Z3_OP_SEQ_TO_RE=1567]="Z3_OP_SEQ_TO_RE",o[o.Z3_OP_SEQ_IN_RE=1568]="Z3_OP_SEQ_IN_RE",o[o.Z3_OP_SEQ_MAP=1569]="Z3_OP_SEQ_MAP",o[o.Z3_OP_SEQ_MAPI=1570]="Z3_OP_SEQ_MAPI",o[o.Z3_OP_SEQ_FOLDL=1571]="Z3_OP_SEQ_FOLDL",o[o.Z3_OP_SEQ_FOLDLI=1572]="Z3_OP_SEQ_FOLDLI",o[o.Z3_OP_STR_TO_INT=1573]="Z3_OP_STR_TO_INT",o[o.Z3_OP_INT_TO_STR=1574]="Z3_OP_INT_TO_STR",o[o.Z3_OP_UBV_TO_STR=1575]="Z3_OP_UBV_TO_STR",o[o.Z3_OP_SBV_TO_STR=1576]="Z3_OP_SBV_TO_STR",o[o.Z3_OP_STR_TO_CODE=1577]="Z3_OP_STR_TO_CODE",o[o.Z3_OP_STR_FROM_CODE=1578]="Z3_OP_STR_FROM_CODE",o[o.Z3_OP_STRING_LT=1579]="Z3_OP_STRING_LT",o[o.Z3_OP_STRING_LE=1580]="Z3_OP_STRING_LE",o[o.Z3_OP_RE_PLUS=1581]="Z3_OP_RE_PLUS",o[o.Z3_OP_RE_STAR=1582]="Z3_OP_RE_STAR",o[o.Z3_OP_RE_OPTION=1583]="Z3_OP_RE_OPTION",o[o.Z3_OP_RE_CONCAT=1584]="Z3_OP_RE_CONCAT",o[o.Z3_OP_RE_UNION=1585]="Z3_OP_RE_UNION",o[o.Z3_OP_RE_RANGE=1586]="Z3_OP_RE_RANGE",o[o.Z3_OP_RE_DIFF=1587]="Z3_OP_RE_DIFF",o[o.Z3_OP_RE_INTERSECT=1588]="Z3_OP_RE_INTERSECT",o[o.Z3_OP_RE_LOOP=1589]="Z3_OP_RE_LOOP",o[o.Z3_OP_RE_POWER=1590]="Z3_OP_RE_POWER",o[o.Z3_OP_RE_COMPLEMENT=1591]="Z3_OP_RE_COMPLEMENT",o[o.Z3_OP_RE_EMPTY_SET=1592]="Z3_OP_RE_EMPTY_SET",o[o.Z3_OP_RE_FULL_SET=1593]="Z3_OP_RE_FULL_SET",o[o.Z3_OP_RE_FULL_CHAR_SET=1594]="Z3_OP_RE_FULL_CHAR_SET",o[o.Z3_OP_RE_OF_PRED=1595]="Z3_OP_RE_OF_PRED",o[o.Z3_OP_RE_REVERSE=1596]="Z3_OP_RE_REVERSE",o[o.Z3_OP_RE_DERIVATIVE=1597]="Z3_OP_RE_DERIVATIVE",o[o.Z3_OP_CHAR_CONST=1598]="Z3_OP_CHAR_CONST",o[o.Z3_OP_CHAR_LE=1599]="Z3_OP_CHAR_LE",o[o.Z3_OP_CHAR_TO_INT=1600]="Z3_OP_CHAR_TO_INT",o[o.Z3_OP_CHAR_TO_BV=1601]="Z3_OP_CHAR_TO_BV",o[o.Z3_OP_CHAR_FROM_BV=1602]="Z3_OP_CHAR_FROM_BV",o[o.Z3_OP_CHAR_IS_DIGIT=1603]="Z3_OP_CHAR_IS_DIGIT",o[o.Z3_OP_LABEL=1792]="Z3_OP_LABEL",o[o.Z3_OP_LABEL_LIT=1793]="Z3_OP_LABEL_LIT",o[o.Z3_OP_DT_CONSTRUCTOR=2048]="Z3_OP_DT_CONSTRUCTOR",o[o.Z3_OP_DT_RECOGNISER=2049]="Z3_OP_DT_RECOGNISER",o[o.Z3_OP_DT_IS=2050]="Z3_OP_DT_IS",o[o.Z3_OP_DT_ACCESSOR=2051]="Z3_OP_DT_ACCESSOR",o[o.Z3_OP_DT_UPDATE_FIELD=2052]="Z3_OP_DT_UPDATE_FIELD",o[o.Z3_OP_PB_AT_MOST=2304]="Z3_OP_PB_AT_MOST",o[o.Z3_OP_PB_AT_LEAST=2305]="Z3_OP_PB_AT_LEAST",o[o.Z3_OP_PB_LE=2306]="Z3_OP_PB_LE",o[o.Z3_OP_PB_GE=2307]="Z3_OP_PB_GE",o[o.Z3_OP_PB_EQ=2308]="Z3_OP_PB_EQ",o[o.Z3_OP_SPECIAL_RELATION_LO=40960]="Z3_OP_SPECIAL_RELATION_LO",o[o.Z3_OP_SPECIAL_RELATION_PO=40961]="Z3_OP_SPECIAL_RELATION_PO",o[o.Z3_OP_SPECIAL_RELATION_PLO=40962]="Z3_OP_SPECIAL_RELATION_PLO",o[o.Z3_OP_SPECIAL_RELATION_TO=40963]="Z3_OP_SPECIAL_RELATION_TO",o[o.Z3_OP_SPECIAL_RELATION_TC=40964]="Z3_OP_SPECIAL_RELATION_TC",o[o.Z3_OP_SPECIAL_RELATION_TRC=40965]="Z3_OP_SPECIAL_RELATION_TRC",o[o.Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN=45056]="Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN",o[o.Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY=45057]="Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY",o[o.Z3_OP_FPA_RM_TOWARD_POSITIVE=45058]="Z3_OP_FPA_RM_TOWARD_POSITIVE",o[o.Z3_OP_FPA_RM_TOWARD_NEGATIVE=45059]="Z3_OP_FPA_RM_TOWARD_NEGATIVE",o[o.Z3_OP_FPA_RM_TOWARD_ZERO=45060]="Z3_OP_FPA_RM_TOWARD_ZERO",o[o.Z3_OP_FPA_NUM=45061]="Z3_OP_FPA_NUM",o[o.Z3_OP_FPA_PLUS_INF=45062]="Z3_OP_FPA_PLUS_INF",o[o.Z3_OP_FPA_MINUS_INF=45063]="Z3_OP_FPA_MINUS_INF",o[o.Z3_OP_FPA_NAN=45064]="Z3_OP_FPA_NAN",o[o.Z3_OP_FPA_PLUS_ZERO=45065]="Z3_OP_FPA_PLUS_ZERO",o[o.Z3_OP_FPA_MINUS_ZERO=45066]="Z3_OP_FPA_MINUS_ZERO",o[o.Z3_OP_FPA_ADD=45067]="Z3_OP_FPA_ADD",o[o.Z3_OP_FPA_SUB=45068]="Z3_OP_FPA_SUB",o[o.Z3_OP_FPA_NEG=45069]="Z3_OP_FPA_NEG",o[o.Z3_OP_FPA_MUL=45070]="Z3_OP_FPA_MUL",o[o.Z3_OP_FPA_DIV=45071]="Z3_OP_FPA_DIV",o[o.Z3_OP_FPA_REM=45072]="Z3_OP_FPA_REM",o[o.Z3_OP_FPA_ABS=45073]="Z3_OP_FPA_ABS",o[o.Z3_OP_FPA_MIN=45074]="Z3_OP_FPA_MIN",o[o.Z3_OP_FPA_MAX=45075]="Z3_OP_FPA_MAX",o[o.Z3_OP_FPA_FMA=45076]="Z3_OP_FPA_FMA",o[o.Z3_OP_FPA_SQRT=45077]="Z3_OP_FPA_SQRT",o[o.Z3_OP_FPA_ROUND_TO_INTEGRAL=45078]="Z3_OP_FPA_ROUND_TO_INTEGRAL",o[o.Z3_OP_FPA_EQ=45079]="Z3_OP_FPA_EQ",o[o.Z3_OP_FPA_LT=45080]="Z3_OP_FPA_LT",o[o.Z3_OP_FPA_GT=45081]="Z3_OP_FPA_GT",o[o.Z3_OP_FPA_LE=45082]="Z3_OP_FPA_LE",o[o.Z3_OP_FPA_GE=45083]="Z3_OP_FPA_GE",o[o.Z3_OP_FPA_IS_NAN=45084]="Z3_OP_FPA_IS_NAN",o[o.Z3_OP_FPA_IS_INF=45085]="Z3_OP_FPA_IS_INF",o[o.Z3_OP_FPA_IS_ZERO=45086]="Z3_OP_FPA_IS_ZERO",o[o.Z3_OP_FPA_IS_NORMAL=45087]="Z3_OP_FPA_IS_NORMAL",o[o.Z3_OP_FPA_IS_SUBNORMAL=45088]="Z3_OP_FPA_IS_SUBNORMAL",o[o.Z3_OP_FPA_IS_NEGATIVE=45089]="Z3_OP_FPA_IS_NEGATIVE",o[o.Z3_OP_FPA_IS_POSITIVE=45090]="Z3_OP_FPA_IS_POSITIVE",o[o.Z3_OP_FPA_FP=45091]="Z3_OP_FPA_FP",o[o.Z3_OP_FPA_TO_FP=45092]="Z3_OP_FPA_TO_FP",o[o.Z3_OP_FPA_TO_FP_UNSIGNED=45093]="Z3_OP_FPA_TO_FP_UNSIGNED",o[o.Z3_OP_FPA_TO_UBV=45094]="Z3_OP_FPA_TO_UBV",o[o.Z3_OP_FPA_TO_SBV=45095]="Z3_OP_FPA_TO_SBV",o[o.Z3_OP_FPA_TO_REAL=45096]="Z3_OP_FPA_TO_REAL",o[o.Z3_OP_FPA_TO_IEEE_BV=45097]="Z3_OP_FPA_TO_IEEE_BV",o[o.Z3_OP_FPA_BVWRAP=45098]="Z3_OP_FPA_BVWRAP",o[o.Z3_OP_FPA_BV2RM=45099]="Z3_OP_FPA_BV2RM",o[o.Z3_OP_INTERNAL=45100]="Z3_OP_INTERNAL",o[o.Z3_OP_RECURSIVE=45101]="Z3_OP_RECURSIVE",o[o.Z3_OP_UNINTERPRETED=45102]="Z3_OP_UNINTERPRETED"})(p_=s1.Z3_decl_kind||(s1.Z3_decl_kind={}));var h_;(function(o){o[o.Z3_PK_UINT=0]="Z3_PK_UINT",o[o.Z3_PK_BOOL=1]="Z3_PK_BOOL",o[o.Z3_PK_DOUBLE=2]="Z3_PK_DOUBLE",o[o.Z3_PK_SYMBOL=3]="Z3_PK_SYMBOL",o[o.Z3_PK_STRING=4]="Z3_PK_STRING",o[o.Z3_PK_OTHER=5]="Z3_PK_OTHER",o[o.Z3_PK_INVALID=6]="Z3_PK_INVALID"})(h_=s1.Z3_param_kind||(s1.Z3_param_kind={}));var f_;(function(o){o[o.Z3_PRINT_SMTLIB_FULL=0]="Z3_PRINT_SMTLIB_FULL",o[o.Z3_PRINT_LOW_LEVEL=1]="Z3_PRINT_LOW_LEVEL",o[o.Z3_PRINT_SMTLIB2_COMPLIANT=2]="Z3_PRINT_SMTLIB2_COMPLIANT"})(f_=s1.Z3_ast_print_mode||(s1.Z3_ast_print_mode={}));var y_;(function(o){o[o.Z3_OK=0]="Z3_OK",o[o.Z3_SORT_ERROR=1]="Z3_SORT_ERROR",o[o.Z3_IOB=2]="Z3_IOB",o[o.Z3_INVALID_ARG=3]="Z3_INVALID_ARG",o[o.Z3_PARSER_ERROR=4]="Z3_PARSER_ERROR",o[o.Z3_NO_PARSER=5]="Z3_NO_PARSER",o[o.Z3_INVALID_PATTERN=6]="Z3_INVALID_PATTERN",o[o.Z3_MEMOUT_FAIL=7]="Z3_MEMOUT_FAIL",o[o.Z3_FILE_ACCESS_ERROR=8]="Z3_FILE_ACCESS_ERROR",o[o.Z3_INTERNAL_FATAL=9]="Z3_INTERNAL_FATAL",o[o.Z3_INVALID_USAGE=10]="Z3_INVALID_USAGE",o[o.Z3_DEC_REF_ERROR=11]="Z3_DEC_REF_ERROR",o[o.Z3_EXCEPTION=12]="Z3_EXCEPTION"})(y_=s1.Z3_error_code||(s1.Z3_error_code={}));var x_;(function(o){o[o.Z3_GOAL_PRECISE=0]="Z3_GOAL_PRECISE",o[o.Z3_GOAL_UNDER=1]="Z3_GOAL_UNDER",o[o.Z3_GOAL_OVER=2]="Z3_GOAL_OVER",o[o.Z3_GOAL_UNDER_OVER=3]="Z3_GOAL_UNDER_OVER"})(x_=s1.Z3_goal_prec||(s1.Z3_goal_prec={}))});var cp=b1(r5=>{"use strict";Object.defineProperty(r5,"__esModule",{value:!0});r5.init=void 0;async function m_(o){let t=await o();function r(s){return new Uint8Array(new Uint32Array(s).buffer)}function e(s){return s.map(d=>d?1:0)}function a(s,d){return Array.from(new Uint32Array(t.HEAPU32.buffer,s,d))}let c=t._malloc(24),i=new Uint32Array(t.HEAPU32.buffer,c,4),l=s=>i[s],w=new Int32Array(t.HEAPU32.buffer,c,4),b=s=>w[s],y=new BigUint64Array(t.HEAPU32.buffer,c,2),f=s=>y[s],m=new BigInt64Array(t.HEAPU32.buffer,c,2),x=s=>m[s];return{em:t,Z3:{mk_context:function(s){let d=t._Z3_mk_context(s);return t._set_noop_error_handler(d),d},mk_context_rc:function(s){let d=t._Z3_mk_context_rc(s);return t._set_noop_error_handler(d),d},global_param_set:function(s,d){return t.ccall("Z3_global_param_set","void",["string","string"],[s,d])},global_param_reset_all:t._Z3_global_param_reset_all,global_param_get:function(s){return t.ccall("Z3_global_param_get","boolean",["string","number"],[s,c])?t.UTF8ToString(l(0)):null},mk_config:t._Z3_mk_config,del_config:t._Z3_del_config,set_param_value:function(s,d,n){return t.ccall("Z3_set_param_value","void",["number","string","string"],[s,d,n])},del_context:t._Z3_del_context,inc_ref:t._Z3_inc_ref,dec_ref:t._Z3_dec_ref,update_param_value:function(s,d,n){return t.ccall("Z3_update_param_value","void",["number","string","string"],[s,d,n])},get_global_param_descrs:t._Z3_get_global_param_descrs,interrupt:t._Z3_interrupt,enable_concurrent_dec_ref:t._Z3_enable_concurrent_dec_ref,mk_params:t._Z3_mk_params,params_inc_ref:t._Z3_params_inc_ref,params_dec_ref:t._Z3_params_dec_ref,params_set_bool:t._Z3_params_set_bool,params_set_uint:t._Z3_params_set_uint,params_set_double:t._Z3_params_set_double,params_set_symbol:t._Z3_params_set_symbol,params_to_string:function(s,d){return t.ccall("Z3_params_to_string","string",["number","number"],[s,d])},params_validate:t._Z3_params_validate,param_descrs_inc_ref:t._Z3_param_descrs_inc_ref,param_descrs_dec_ref:t._Z3_param_descrs_dec_ref,param_descrs_get_kind:t._Z3_param_descrs_get_kind,param_descrs_size:function(s,d){let n=t.ccall("Z3_param_descrs_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},param_descrs_get_name:t._Z3_param_descrs_get_name,param_descrs_get_documentation:function(s,d,n){return t.ccall("Z3_param_descrs_get_documentation","string",["number","number","number"],[s,d,n])},param_descrs_to_string:function(s,d){return t.ccall("Z3_param_descrs_to_string","string",["number","number"],[s,d])},mk_int_symbol:t._Z3_mk_int_symbol,mk_string_symbol:function(s,d){return t.ccall("Z3_mk_string_symbol","number",["number","string"],[s,d])},mk_uninterpreted_sort:t._Z3_mk_uninterpreted_sort,mk_type_variable:t._Z3_mk_type_variable,mk_bool_sort:t._Z3_mk_bool_sort,mk_int_sort:t._Z3_mk_int_sort,mk_real_sort:t._Z3_mk_real_sort,mk_bv_sort:t._Z3_mk_bv_sort,mk_finite_domain_sort:t._Z3_mk_finite_domain_sort,mk_array_sort:t._Z3_mk_array_sort,mk_array_sort_n:function(s,d,n){return t.ccall("Z3_mk_array_sort_n","number",["number","number","array","number"],[s,d.length,r(d),n])},mk_tuple_sort:function(s,d,n,u){if(n.length!==u.length)throw new TypeError(`field_names and field_sorts must be the same length (got ${n.length} and {field_sorts.length})`);let v=t._malloc(4*n.length);try{return{rv:t.ccall("Z3_mk_tuple_sort","number",["number","number","number","array","array","number","number"],[s,d,n.length,r(n),r(u),c,v]),mk_tuple_decl:l(0),proj_decl:a(v,n.length)}}finally{t._free(v)}},mk_enumeration_sort:function(s,d,n){let u=t._malloc(4*n.length);try{let v=t._malloc(4*n.length);try{return{rv:t.ccall("Z3_mk_enumeration_sort","number",["number","number","number","array","number","number"],[s,d,n.length,r(n),u,v]),enum_consts:a(u,n.length),enum_testers:a(v,n.length)}}finally{t._free(v)}}finally{t._free(u)}},mk_list_sort:function(s,d,n){return{rv:t.ccall("Z3_mk_list_sort","number",["number","number","number","number","number","number","number","number","number"],[s,d,n,c,c+4,c+8,c+12,c+16,c+20]),nil_decl:l(0),is_nil_decl:l(1),cons_decl:l(2),is_cons_decl:l(3),head_decl:l(4),tail_decl:l(5)}},mk_constructor:function(s,d,n,u,v,p){if(u.length!==v.length)throw new TypeError(`field_names and sorts must be the same length (got ${u.length} and {sorts.length})`);if(u.length!==p.length)throw new TypeError(`field_names and sort_refs must be the same length (got ${u.length} and {sort_refs.length})`);return t.ccall("Z3_mk_constructor","number",["number","number","number","number","array","array","array"],[s,d,n,u.length,r(u),r(v),r(p)])},constructor_num_fields:function(s,d){let n=t.ccall("Z3_constructor_num_fields","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},del_constructor:t._Z3_del_constructor,mk_datatype:function(s,d,n){return t.ccall("Z3_mk_datatype","number",["number","number","number","array"],[s,d,n.length,r(n)])},mk_datatype_sort:t._Z3_mk_datatype_sort,mk_constructor_list:function(s,d){return t.ccall("Z3_mk_constructor_list","number",["number","number","array"],[s,d.length,r(d)])},del_constructor_list:t._Z3_del_constructor_list,mk_datatypes:function(s,d,n){if(d.length!==n.length)throw new TypeError(`sort_names and constructor_lists must be the same length (got ${d.length} and {constructor_lists.length})`);let u=t._malloc(4*d.length);try{let v=t.ccall("Z3_mk_datatypes","void",["number","number","array","number","array"],[s,d.length,r(d),u,r(n)]);return a(u,d.length)}finally{t._free(u)}},query_constructor:function(s,d,n){let u=t._malloc(4*n);try{let v=t.ccall("Z3_query_constructor","void",["number","number","number","number","number","number"],[s,d,n,c,c+4,u]);return{constructor:l(0),tester:l(1),accessors:a(u,n)}}finally{t._free(u)}},mk_func_decl:function(s,d,n,u){return t.ccall("Z3_mk_func_decl","number",["number","number","number","array","number"],[s,d,n.length,r(n),u])},mk_app:function(s,d,n){return t.ccall("Z3_mk_app","number",["number","number","number","array"],[s,d,n.length,r(n)])},mk_const:t._Z3_mk_const,mk_fresh_func_decl:function(s,d,n,u){return t.ccall("Z3_mk_fresh_func_decl","number",["number","string","number","array","number"],[s,d,n.length,r(n),u])},mk_fresh_const:function(s,d,n){return t.ccall("Z3_mk_fresh_const","number",["number","string","number"],[s,d,n])},mk_rec_func_decl:function(s,d,n,u){return t.ccall("Z3_mk_rec_func_decl","number",["number","number","number","array","number"],[s,d,n.length,r(n),u])},add_rec_def:function(s,d,n,u){return t.ccall("Z3_add_rec_def","void",["number","number","number","array","number"],[s,d,n.length,r(n),u])},mk_true:t._Z3_mk_true,mk_false:t._Z3_mk_false,mk_eq:t._Z3_mk_eq,mk_distinct:function(s,d){return t.ccall("Z3_mk_distinct","number",["number","number","array"],[s,d.length,r(d)])},mk_not:t._Z3_mk_not,mk_ite:t._Z3_mk_ite,mk_iff:t._Z3_mk_iff,mk_implies:t._Z3_mk_implies,mk_xor:t._Z3_mk_xor,mk_and:function(s,d){return t.ccall("Z3_mk_and","number",["number","number","array"],[s,d.length,r(d)])},mk_or:function(s,d){return t.ccall("Z3_mk_or","number",["number","number","array"],[s,d.length,r(d)])},mk_add:function(s,d){return t.ccall("Z3_mk_add","number",["number","number","array"],[s,d.length,r(d)])},mk_mul:function(s,d){return t.ccall("Z3_mk_mul","number",["number","number","array"],[s,d.length,r(d)])},mk_sub:function(s,d){return t.ccall("Z3_mk_sub","number",["number","number","array"],[s,d.length,r(d)])},mk_unary_minus:t._Z3_mk_unary_minus,mk_div:t._Z3_mk_div,mk_mod:t._Z3_mk_mod,mk_rem:t._Z3_mk_rem,mk_power:t._Z3_mk_power,mk_abs:t._Z3_mk_abs,mk_lt:t._Z3_mk_lt,mk_le:t._Z3_mk_le,mk_gt:t._Z3_mk_gt,mk_ge:t._Z3_mk_ge,mk_divides:t._Z3_mk_divides,mk_int2real:t._Z3_mk_int2real,mk_real2int:t._Z3_mk_real2int,mk_is_int:t._Z3_mk_is_int,mk_bvnot:t._Z3_mk_bvnot,mk_bvredand:t._Z3_mk_bvredand,mk_bvredor:t._Z3_mk_bvredor,mk_bvand:t._Z3_mk_bvand,mk_bvor:t._Z3_mk_bvor,mk_bvxor:t._Z3_mk_bvxor,mk_bvnand:t._Z3_mk_bvnand,mk_bvnor:t._Z3_mk_bvnor,mk_bvxnor:t._Z3_mk_bvxnor,mk_bvneg:t._Z3_mk_bvneg,mk_bvadd:t._Z3_mk_bvadd,mk_bvsub:t._Z3_mk_bvsub,mk_bvmul:t._Z3_mk_bvmul,mk_bvudiv:t._Z3_mk_bvudiv,mk_bvsdiv:t._Z3_mk_bvsdiv,mk_bvurem:t._Z3_mk_bvurem,mk_bvsrem:t._Z3_mk_bvsrem,mk_bvsmod:t._Z3_mk_bvsmod,mk_bvult:t._Z3_mk_bvult,mk_bvslt:t._Z3_mk_bvslt,mk_bvule:t._Z3_mk_bvule,mk_bvsle:t._Z3_mk_bvsle,mk_bvuge:t._Z3_mk_bvuge,mk_bvsge:t._Z3_mk_bvsge,mk_bvugt:t._Z3_mk_bvugt,mk_bvsgt:t._Z3_mk_bvsgt,mk_concat:t._Z3_mk_concat,mk_extract:t._Z3_mk_extract,mk_sign_ext:t._Z3_mk_sign_ext,mk_zero_ext:t._Z3_mk_zero_ext,mk_repeat:t._Z3_mk_repeat,mk_bit2bool:t._Z3_mk_bit2bool,mk_bvshl:t._Z3_mk_bvshl,mk_bvlshr:t._Z3_mk_bvlshr,mk_bvashr:t._Z3_mk_bvashr,mk_rotate_left:t._Z3_mk_rotate_left,mk_rotate_right:t._Z3_mk_rotate_right,mk_ext_rotate_left:t._Z3_mk_ext_rotate_left,mk_ext_rotate_right:t._Z3_mk_ext_rotate_right,mk_int2bv:t._Z3_mk_int2bv,mk_bv2int:t._Z3_mk_bv2int,mk_bvadd_no_overflow:t._Z3_mk_bvadd_no_overflow,mk_bvadd_no_underflow:t._Z3_mk_bvadd_no_underflow,mk_bvsub_no_overflow:t._Z3_mk_bvsub_no_overflow,mk_bvsub_no_underflow:t._Z3_mk_bvsub_no_underflow,mk_bvsdiv_no_overflow:t._Z3_mk_bvsdiv_no_overflow,mk_bvneg_no_overflow:t._Z3_mk_bvneg_no_overflow,mk_bvmul_no_overflow:t._Z3_mk_bvmul_no_overflow,mk_bvmul_no_underflow:t._Z3_mk_bvmul_no_underflow,mk_select:t._Z3_mk_select,mk_select_n:function(s,d,n){return t.ccall("Z3_mk_select_n","number",["number","number","number","array"],[s,d,n.length,r(n)])},mk_store:t._Z3_mk_store,mk_store_n:function(s,d,n,u){return t.ccall("Z3_mk_store_n","number",["number","number","number","array","number"],[s,d,n.length,r(n),u])},mk_const_array:t._Z3_mk_const_array,mk_map:function(s,d,n){return t.ccall("Z3_mk_map","number",["number","number","number","array"],[s,d,n.length,r(n)])},mk_array_default:t._Z3_mk_array_default,mk_as_array:t._Z3_mk_as_array,mk_set_has_size:t._Z3_mk_set_has_size,mk_set_sort:t._Z3_mk_set_sort,mk_empty_set:t._Z3_mk_empty_set,mk_full_set:t._Z3_mk_full_set,mk_set_add:t._Z3_mk_set_add,mk_set_del:t._Z3_mk_set_del,mk_set_union:function(s,d){return t.ccall("Z3_mk_set_union","number",["number","number","array"],[s,d.length,r(d)])},mk_set_intersect:function(s,d){return t.ccall("Z3_mk_set_intersect","number",["number","number","array"],[s,d.length,r(d)])},mk_set_difference:t._Z3_mk_set_difference,mk_set_complement:t._Z3_mk_set_complement,mk_set_member:t._Z3_mk_set_member,mk_set_subset:t._Z3_mk_set_subset,mk_array_ext:t._Z3_mk_array_ext,mk_numeral:function(s,d,n){return t.ccall("Z3_mk_numeral","number",["number","string","number"],[s,d,n])},mk_real:t._Z3_mk_real,mk_real_int64:t._Z3_mk_real_int64,mk_int:t._Z3_mk_int,mk_unsigned_int:t._Z3_mk_unsigned_int,mk_int64:t._Z3_mk_int64,mk_unsigned_int64:t._Z3_mk_unsigned_int64,mk_bv_numeral:function(s,d){return t.ccall("Z3_mk_bv_numeral","number",["number","number","array"],[s,d.length,e(d)])},mk_seq_sort:t._Z3_mk_seq_sort,is_seq_sort:function(s,d){return t.ccall("Z3_is_seq_sort","boolean",["number","number"],[s,d])},get_seq_sort_basis:t._Z3_get_seq_sort_basis,mk_re_sort:t._Z3_mk_re_sort,is_re_sort:function(s,d){return t.ccall("Z3_is_re_sort","boolean",["number","number"],[s,d])},get_re_sort_basis:t._Z3_get_re_sort_basis,mk_string_sort:t._Z3_mk_string_sort,mk_char_sort:t._Z3_mk_char_sort,is_string_sort:function(s,d){return t.ccall("Z3_is_string_sort","boolean",["number","number"],[s,d])},is_char_sort:function(s,d){return t.ccall("Z3_is_char_sort","boolean",["number","number"],[s,d])},mk_string:function(s,d){return t.ccall("Z3_mk_string","number",["number","string"],[s,d])},mk_lstring:function(s,d,n){return t.ccall("Z3_mk_lstring","number",["number","number","string"],[s,d,n])},mk_u32string:function(s,d){return t.ccall("Z3_mk_u32string","number",["number","number","array"],[s,d.length,r(d)])},is_string:function(s,d){return t.ccall("Z3_is_string","boolean",["number","number"],[s,d])},get_string:function(s,d){return t.ccall("Z3_get_string","string",["number","number"],[s,d])},get_string_length:function(s,d){let n=t.ccall("Z3_get_string_length","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_string_contents:function(s,d,n){let u=t._malloc(4*n);try{let v=t.ccall("Z3_get_string_contents","void",["number","number","number","number"],[s,d,n,u]);return a(u,n)}finally{t._free(u)}},mk_seq_empty:t._Z3_mk_seq_empty,mk_seq_unit:t._Z3_mk_seq_unit,mk_seq_concat:function(s,d){return t.ccall("Z3_mk_seq_concat","number",["number","number","array"],[s,d.length,r(d)])},mk_seq_prefix:t._Z3_mk_seq_prefix,mk_seq_suffix:t._Z3_mk_seq_suffix,mk_seq_contains:t._Z3_mk_seq_contains,mk_str_lt:t._Z3_mk_str_lt,mk_str_le:t._Z3_mk_str_le,mk_seq_extract:t._Z3_mk_seq_extract,mk_seq_replace:t._Z3_mk_seq_replace,mk_seq_at:t._Z3_mk_seq_at,mk_seq_nth:t._Z3_mk_seq_nth,mk_seq_length:t._Z3_mk_seq_length,mk_seq_index:t._Z3_mk_seq_index,mk_seq_last_index:t._Z3_mk_seq_last_index,mk_seq_map:t._Z3_mk_seq_map,mk_seq_mapi:t._Z3_mk_seq_mapi,mk_seq_foldl:t._Z3_mk_seq_foldl,mk_seq_foldli:t._Z3_mk_seq_foldli,mk_str_to_int:t._Z3_mk_str_to_int,mk_int_to_str:t._Z3_mk_int_to_str,mk_string_to_code:t._Z3_mk_string_to_code,mk_string_from_code:t._Z3_mk_string_from_code,mk_ubv_to_str:t._Z3_mk_ubv_to_str,mk_sbv_to_str:t._Z3_mk_sbv_to_str,mk_seq_to_re:t._Z3_mk_seq_to_re,mk_seq_in_re:t._Z3_mk_seq_in_re,mk_re_plus:t._Z3_mk_re_plus,mk_re_star:t._Z3_mk_re_star,mk_re_option:t._Z3_mk_re_option,mk_re_union:function(s,d){return t.ccall("Z3_mk_re_union","number",["number","number","array"],[s,d.length,r(d)])},mk_re_concat:function(s,d){return t.ccall("Z3_mk_re_concat","number",["number","number","array"],[s,d.length,r(d)])},mk_re_range:t._Z3_mk_re_range,mk_re_allchar:t._Z3_mk_re_allchar,mk_re_loop:t._Z3_mk_re_loop,mk_re_power:t._Z3_mk_re_power,mk_re_intersect:function(s,d){return t.ccall("Z3_mk_re_intersect","number",["number","number","array"],[s,d.length,r(d)])},mk_re_complement:t._Z3_mk_re_complement,mk_re_diff:t._Z3_mk_re_diff,mk_re_empty:t._Z3_mk_re_empty,mk_re_full:t._Z3_mk_re_full,mk_char:t._Z3_mk_char,mk_char_le:t._Z3_mk_char_le,mk_char_to_int:t._Z3_mk_char_to_int,mk_char_to_bv:t._Z3_mk_char_to_bv,mk_char_from_bv:t._Z3_mk_char_from_bv,mk_char_is_digit:t._Z3_mk_char_is_digit,mk_linear_order:t._Z3_mk_linear_order,mk_partial_order:t._Z3_mk_partial_order,mk_piecewise_linear_order:t._Z3_mk_piecewise_linear_order,mk_tree_order:t._Z3_mk_tree_order,mk_transitive_closure:t._Z3_mk_transitive_closure,mk_pattern:function(s,d){return t.ccall("Z3_mk_pattern","number",["number","number","array"],[s,d.length,r(d)])},mk_bound:t._Z3_mk_bound,mk_forall:function(s,d,n,u,v,p){if(u.length!==v.length)throw new TypeError(`sorts and decl_names must be the same length (got ${u.length} and {decl_names.length})`);return t.ccall("Z3_mk_forall","number",["number","number","number","array","number","array","array","number"],[s,d,n.length,r(n),u.length,r(u),r(v),p])},mk_exists:function(s,d,n,u,v,p){if(u.length!==v.length)throw new TypeError(`sorts and decl_names must be the same length (got ${u.length} and {decl_names.length})`);return t.ccall("Z3_mk_exists","number",["number","number","number","array","number","array","array","number"],[s,d,n.length,r(n),u.length,r(u),r(v),p])},mk_quantifier:function(s,d,n,u,v,p,M){if(v.length!==p.length)throw new TypeError(`sorts and decl_names must be the same length (got ${v.length} and {decl_names.length})`);return t.ccall("Z3_mk_quantifier","number",["number","boolean","number","number","array","number","array","array","number"],[s,d,n,u.length,r(u),v.length,r(v),r(p),M])},mk_quantifier_ex:function(s,d,n,u,v,p,M,H,L,k){if(H.length!==L.length)throw new TypeError(`sorts and decl_names must be the same length (got ${H.length} and {decl_names.length})`);return t.ccall("Z3_mk_quantifier_ex","number",["number","boolean","number","number","number","number","array","number","array","number","array","array","number"],[s,d,n,u,v,p.length,r(p),M.length,r(M),H.length,r(H),r(L),k])},mk_forall_const:function(s,d,n,u,v){return t.ccall("Z3_mk_forall_const","number",["number","number","number","array","number","array","number"],[s,d,n.length,r(n),u.length,r(u),v])},mk_exists_const:function(s,d,n,u,v){return t.ccall("Z3_mk_exists_const","number",["number","number","number","array","number","array","number"],[s,d,n.length,r(n),u.length,r(u),v])},mk_quantifier_const:function(s,d,n,u,v,p){return t.ccall("Z3_mk_quantifier_const","number",["number","boolean","number","number","array","number","array","number"],[s,d,n,u.length,r(u),v.length,r(v),p])},mk_quantifier_const_ex:function(s,d,n,u,v,p,M,H,L){return t.ccall("Z3_mk_quantifier_const_ex","number",["number","boolean","number","number","number","number","array","number","array","number","array","number"],[s,d,n,u,v,p.length,r(p),M.length,r(M),H.length,r(H),L])},mk_lambda:function(s,d,n,u){if(d.length!==n.length)throw new TypeError(`sorts and decl_names must be the same length (got ${d.length} and {decl_names.length})`);return t.ccall("Z3_mk_lambda","number",["number","number","array","array","number"],[s,d.length,r(d),r(n),u])},mk_lambda_const:function(s,d,n){return t.ccall("Z3_mk_lambda_const","number",["number","number","array","number"],[s,d.length,r(d),n])},get_symbol_kind:t._Z3_get_symbol_kind,get_symbol_int:t._Z3_get_symbol_int,get_symbol_string:function(s,d){return t.ccall("Z3_get_symbol_string","string",["number","number"],[s,d])},get_sort_name:t._Z3_get_sort_name,get_sort_id:function(s,d){let n=t.ccall("Z3_get_sort_id","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},sort_to_ast:t._Z3_sort_to_ast,is_eq_sort:function(s,d,n){return t.ccall("Z3_is_eq_sort","boolean",["number","number","number"],[s,d,n])},get_sort_kind:t._Z3_get_sort_kind,get_bv_sort_size:function(s,d){let n=t.ccall("Z3_get_bv_sort_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_finite_domain_sort_size:function(s,d){return t.ccall("Z3_get_finite_domain_sort_size","boolean",["number","number","number"],[s,d,c])?f(0):null},get_array_sort_domain:t._Z3_get_array_sort_domain,get_array_sort_domain_n:t._Z3_get_array_sort_domain_n,get_array_sort_range:t._Z3_get_array_sort_range,get_tuple_sort_mk_decl:t._Z3_get_tuple_sort_mk_decl,get_tuple_sort_num_fields:function(s,d){let n=t.ccall("Z3_get_tuple_sort_num_fields","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_tuple_sort_field_decl:t._Z3_get_tuple_sort_field_decl,get_datatype_sort_num_constructors:function(s,d){let n=t.ccall("Z3_get_datatype_sort_num_constructors","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_datatype_sort_constructor:t._Z3_get_datatype_sort_constructor,get_datatype_sort_recognizer:t._Z3_get_datatype_sort_recognizer,get_datatype_sort_constructor_accessor:t._Z3_get_datatype_sort_constructor_accessor,datatype_update_field:t._Z3_datatype_update_field,get_relation_arity:function(s,d){let n=t.ccall("Z3_get_relation_arity","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_relation_column:t._Z3_get_relation_column,mk_atmost:function(s,d,n){return t.ccall("Z3_mk_atmost","number",["number","number","array","number"],[s,d.length,r(d),n])},mk_atleast:function(s,d,n){return t.ccall("Z3_mk_atleast","number",["number","number","array","number"],[s,d.length,r(d),n])},mk_pble:function(s,d,n,u){if(d.length!==n.length)throw new TypeError(`args and coeffs must be the same length (got ${d.length} and {coeffs.length})`);return t.ccall("Z3_mk_pble","number",["number","number","array","array","number"],[s,d.length,r(d),r(n),u])},mk_pbge:function(s,d,n,u){if(d.length!==n.length)throw new TypeError(`args and coeffs must be the same length (got ${d.length} and {coeffs.length})`);return t.ccall("Z3_mk_pbge","number",["number","number","array","array","number"],[s,d.length,r(d),r(n),u])},mk_pbeq:function(s,d,n,u){if(d.length!==n.length)throw new TypeError(`args and coeffs must be the same length (got ${d.length} and {coeffs.length})`);return t.ccall("Z3_mk_pbeq","number",["number","number","array","array","number"],[s,d.length,r(d),r(n),u])},func_decl_to_ast:t._Z3_func_decl_to_ast,is_eq_func_decl:function(s,d,n){return t.ccall("Z3_is_eq_func_decl","boolean",["number","number","number"],[s,d,n])},get_func_decl_id:function(s,d){let n=t.ccall("Z3_get_func_decl_id","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_decl_name:t._Z3_get_decl_name,get_decl_kind:t._Z3_get_decl_kind,get_domain_size:function(s,d){let n=t.ccall("Z3_get_domain_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_arity:function(s,d){let n=t.ccall("Z3_get_arity","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_domain:t._Z3_get_domain,get_range:t._Z3_get_range,get_decl_num_parameters:function(s,d){let n=t.ccall("Z3_get_decl_num_parameters","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_decl_parameter_kind:t._Z3_get_decl_parameter_kind,get_decl_int_parameter:t._Z3_get_decl_int_parameter,get_decl_double_parameter:t._Z3_get_decl_double_parameter,get_decl_symbol_parameter:t._Z3_get_decl_symbol_parameter,get_decl_sort_parameter:t._Z3_get_decl_sort_parameter,get_decl_ast_parameter:t._Z3_get_decl_ast_parameter,get_decl_func_decl_parameter:t._Z3_get_decl_func_decl_parameter,get_decl_rational_parameter:function(s,d,n){return t.ccall("Z3_get_decl_rational_parameter","string",["number","number","number"],[s,d,n])},app_to_ast:t._Z3_app_to_ast,get_app_decl:t._Z3_get_app_decl,get_app_num_args:function(s,d){let n=t.ccall("Z3_get_app_num_args","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_app_arg:t._Z3_get_app_arg,is_eq_ast:function(s,d,n){return t.ccall("Z3_is_eq_ast","boolean",["number","number","number"],[s,d,n])},get_ast_id:function(s,d){let n=t.ccall("Z3_get_ast_id","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_ast_hash:function(s,d){let n=t.ccall("Z3_get_ast_hash","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_sort:t._Z3_get_sort,is_well_sorted:function(s,d){return t.ccall("Z3_is_well_sorted","boolean",["number","number"],[s,d])},get_bool_value:t._Z3_get_bool_value,get_ast_kind:t._Z3_get_ast_kind,is_app:function(s,d){return t.ccall("Z3_is_app","boolean",["number","number"],[s,d])},is_numeral_ast:function(s,d){return t.ccall("Z3_is_numeral_ast","boolean",["number","number"],[s,d])},is_algebraic_number:function(s,d){return t.ccall("Z3_is_algebraic_number","boolean",["number","number"],[s,d])},to_app:t._Z3_to_app,to_func_decl:t._Z3_to_func_decl,get_numeral_string:function(s,d){return t.ccall("Z3_get_numeral_string","string",["number","number"],[s,d])},get_numeral_binary_string:function(s,d){return t.ccall("Z3_get_numeral_binary_string","string",["number","number"],[s,d])},get_numeral_decimal_string:function(s,d,n){return t.ccall("Z3_get_numeral_decimal_string","string",["number","number","number"],[s,d,n])},get_numeral_double:t._Z3_get_numeral_double,get_numerator:t._Z3_get_numerator,get_denominator:t._Z3_get_denominator,get_numeral_small:function(s,d){return t.ccall("Z3_get_numeral_small","boolean",["number","number","number","number"],[s,d,c,c+8])?{num:x(0),den:x(1)}:null},get_numeral_int:function(s,d){return t.ccall("Z3_get_numeral_int","boolean",["number","number","number"],[s,d,c])?b(0):null},get_numeral_uint:function(s,d){return t.ccall("Z3_get_numeral_uint","boolean",["number","number","number"],[s,d,c])?l(0):null},get_numeral_uint64:function(s,d){return t.ccall("Z3_get_numeral_uint64","boolean",["number","number","number"],[s,d,c])?f(0):null},get_numeral_int64:function(s,d){return t.ccall("Z3_get_numeral_int64","boolean",["number","number","number"],[s,d,c])?x(0):null},get_numeral_rational_int64:function(s,d){return t.ccall("Z3_get_numeral_rational_int64","boolean",["number","number","number","number"],[s,d,c,c+8])?{num:x(0),den:x(1)}:null},get_algebraic_number_lower:t._Z3_get_algebraic_number_lower,get_algebraic_number_upper:t._Z3_get_algebraic_number_upper,pattern_to_ast:t._Z3_pattern_to_ast,get_pattern_num_terms:function(s,d){let n=t.ccall("Z3_get_pattern_num_terms","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_pattern:t._Z3_get_pattern,get_index_value:function(s,d){let n=t.ccall("Z3_get_index_value","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},is_quantifier_forall:function(s,d){return t.ccall("Z3_is_quantifier_forall","boolean",["number","number"],[s,d])},is_quantifier_exists:function(s,d){return t.ccall("Z3_is_quantifier_exists","boolean",["number","number"],[s,d])},is_lambda:function(s,d){return t.ccall("Z3_is_lambda","boolean",["number","number"],[s,d])},get_quantifier_weight:function(s,d){let n=t.ccall("Z3_get_quantifier_weight","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_quantifier_skolem_id:t._Z3_get_quantifier_skolem_id,get_quantifier_id:t._Z3_get_quantifier_id,get_quantifier_num_patterns:function(s,d){let n=t.ccall("Z3_get_quantifier_num_patterns","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_quantifier_pattern_ast:t._Z3_get_quantifier_pattern_ast,get_quantifier_num_no_patterns:function(s,d){let n=t.ccall("Z3_get_quantifier_num_no_patterns","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_quantifier_no_pattern_ast:t._Z3_get_quantifier_no_pattern_ast,get_quantifier_num_bound:function(s,d){let n=t.ccall("Z3_get_quantifier_num_bound","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},get_quantifier_bound_name:t._Z3_get_quantifier_bound_name,get_quantifier_bound_sort:t._Z3_get_quantifier_bound_sort,get_quantifier_body:t._Z3_get_quantifier_body,simplify:function(s,d){return t.async_call(t._async_Z3_simplify,s,d)},simplify_ex:function(s,d,n){return t.async_call(t._async_Z3_simplify_ex,s,d,n)},simplify_get_help:function(s){return t.ccall("Z3_simplify_get_help","string",["number"],[s])},simplify_get_param_descrs:t._Z3_simplify_get_param_descrs,update_term:function(s,d,n){return t.ccall("Z3_update_term","number",["number","number","number","array"],[s,d,n.length,r(n)])},substitute:function(s,d,n,u){if(n.length!==u.length)throw new TypeError(`from and to must be the same length (got ${n.length} and {to.length})`);return t.ccall("Z3_substitute","number",["number","number","number","array","array"],[s,d,n.length,r(n),r(u)])},substitute_vars:function(s,d,n){return t.ccall("Z3_substitute_vars","number",["number","number","number","array"],[s,d,n.length,r(n)])},substitute_funs:function(s,d,n,u){if(n.length!==u.length)throw new TypeError(`from and to must be the same length (got ${n.length} and {to.length})`);return t.ccall("Z3_substitute_funs","number",["number","number","number","array","array"],[s,d,n.length,r(n),r(u)])},translate:t._Z3_translate,mk_model:t._Z3_mk_model,model_inc_ref:t._Z3_model_inc_ref,model_dec_ref:t._Z3_model_dec_ref,model_eval:function(s,d,n,u){return t.ccall("Z3_model_eval","boolean",["number","number","number","boolean","number"],[s,d,n,u,c])?l(0):null},model_get_const_interp:function(s,d,n){let u=t.ccall("Z3_model_get_const_interp","number",["number","number","number"],[s,d,n]);return u===0?null:u},model_has_interp:function(s,d,n){return t.ccall("Z3_model_has_interp","boolean",["number","number","number"],[s,d,n])},model_get_func_interp:function(s,d,n){let u=t.ccall("Z3_model_get_func_interp","number",["number","number","number"],[s,d,n]);return u===0?null:u},model_get_num_consts:function(s,d){let n=t.ccall("Z3_model_get_num_consts","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},model_get_const_decl:t._Z3_model_get_const_decl,model_get_num_funcs:function(s,d){let n=t.ccall("Z3_model_get_num_funcs","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},model_get_func_decl:t._Z3_model_get_func_decl,model_get_num_sorts:function(s,d){let n=t.ccall("Z3_model_get_num_sorts","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},model_get_sort:t._Z3_model_get_sort,model_get_sort_universe:t._Z3_model_get_sort_universe,model_translate:t._Z3_model_translate,is_as_array:function(s,d){return t.ccall("Z3_is_as_array","boolean",["number","number"],[s,d])},get_as_array_func_decl:t._Z3_get_as_array_func_decl,add_func_interp:t._Z3_add_func_interp,add_const_interp:t._Z3_add_const_interp,func_interp_inc_ref:t._Z3_func_interp_inc_ref,func_interp_dec_ref:t._Z3_func_interp_dec_ref,func_interp_get_num_entries:function(s,d){let n=t.ccall("Z3_func_interp_get_num_entries","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},func_interp_get_entry:t._Z3_func_interp_get_entry,func_interp_get_else:t._Z3_func_interp_get_else,func_interp_set_else:t._Z3_func_interp_set_else,func_interp_get_arity:function(s,d){let n=t.ccall("Z3_func_interp_get_arity","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},func_interp_add_entry:t._Z3_func_interp_add_entry,func_entry_inc_ref:t._Z3_func_entry_inc_ref,func_entry_dec_ref:t._Z3_func_entry_dec_ref,func_entry_get_value:t._Z3_func_entry_get_value,func_entry_get_num_args:function(s,d){let n=t.ccall("Z3_func_entry_get_num_args","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},func_entry_get_arg:t._Z3_func_entry_get_arg,open_log:function(s){return t.ccall("Z3_open_log","boolean",["string"],[s])},append_log:function(s){return t.ccall("Z3_append_log","void",["string"],[s])},close_log:t._Z3_close_log,toggle_warning_messages:t._Z3_toggle_warning_messages,set_ast_print_mode:t._Z3_set_ast_print_mode,ast_to_string:function(s,d){return t.ccall("Z3_ast_to_string","string",["number","number"],[s,d])},pattern_to_string:function(s,d){return t.ccall("Z3_pattern_to_string","string",["number","number"],[s,d])},sort_to_string:function(s,d){return t.ccall("Z3_sort_to_string","string",["number","number"],[s,d])},func_decl_to_string:function(s,d){return t.ccall("Z3_func_decl_to_string","string",["number","number"],[s,d])},model_to_string:function(s,d){return t.ccall("Z3_model_to_string","string",["number","number"],[s,d])},benchmark_to_smtlib_string:function(s,d,n,u,v,p,M){return t.ccall("Z3_benchmark_to_smtlib_string","string",["number","string","string","string","string","number","array","number"],[s,d,n,u,v,p.length,r(p),M])},parse_smtlib2_string:function(s,d,n,u,v,p){if(n.length!==u.length)throw new TypeError(`sort_names and sorts must be the same length (got ${n.length} and {sorts.length})`);if(v.length!==p.length)throw new TypeError(`decl_names and decls must be the same length (got ${v.length} and {decls.length})`);return t.ccall("Z3_parse_smtlib2_string","number",["number","string","number","array","array","number","array","array"],[s,d,n.length,r(n),r(u),v.length,r(v),r(p)])},parse_smtlib2_file:function(s,d,n,u,v,p){if(n.length!==u.length)throw new TypeError(`sort_names and sorts must be the same length (got ${n.length} and {sorts.length})`);if(v.length!==p.length)throw new TypeError(`decl_names and decls must be the same length (got ${v.length} and {decls.length})`);return t.ccall("Z3_parse_smtlib2_file","number",["number","string","number","array","array","number","array","array"],[s,d,n.length,r(n),r(u),v.length,r(v),r(p)])},eval_smtlib2_string:async function(s,d){return await t.async_call(()=>t.ccall("async_Z3_eval_smtlib2_string","string",["number","string"],[s,d]))},mk_parser_context:t._Z3_mk_parser_context,parser_context_inc_ref:t._Z3_parser_context_inc_ref,parser_context_dec_ref:t._Z3_parser_context_dec_ref,parser_context_add_sort:t._Z3_parser_context_add_sort,parser_context_add_decl:t._Z3_parser_context_add_decl,parser_context_from_string:function(s,d,n){return t.ccall("Z3_parser_context_from_string","number",["number","number","string"],[s,d,n])},get_error_code:t._Z3_get_error_code,set_error:t._Z3_set_error,get_error_msg:function(s,d){return t.ccall("Z3_get_error_msg","string",["number","number"],[s,d])},get_version:function(){let s=t.ccall("Z3_get_version","void",["number","number","number","number"],[c,c+4,c+8,c+12]);return{major:l(0),minor:l(1),build_number:l(2),revision_number:l(3)}},get_full_version:function(){return t.ccall("Z3_get_full_version","string",[],[])},enable_trace:function(s){return t.ccall("Z3_enable_trace","void",["string"],[s])},disable_trace:function(s){return t.ccall("Z3_disable_trace","void",["string"],[s])},reset_memory:t._Z3_reset_memory,finalize_memory:t._Z3_finalize_memory,mk_goal:t._Z3_mk_goal,goal_inc_ref:t._Z3_goal_inc_ref,goal_dec_ref:t._Z3_goal_dec_ref,goal_precision:t._Z3_goal_precision,goal_assert:t._Z3_goal_assert,goal_inconsistent:function(s,d){return t.ccall("Z3_goal_inconsistent","boolean",["number","number"],[s,d])},goal_depth:function(s,d){let n=t.ccall("Z3_goal_depth","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},goal_reset:t._Z3_goal_reset,goal_size:function(s,d){let n=t.ccall("Z3_goal_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},goal_formula:t._Z3_goal_formula,goal_num_exprs:function(s,d){let n=t.ccall("Z3_goal_num_exprs","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},goal_is_decided_sat:function(s,d){return t.ccall("Z3_goal_is_decided_sat","boolean",["number","number"],[s,d])},goal_is_decided_unsat:function(s,d){return t.ccall("Z3_goal_is_decided_unsat","boolean",["number","number"],[s,d])},goal_translate:t._Z3_goal_translate,goal_convert_model:t._Z3_goal_convert_model,goal_to_string:function(s,d){return t.ccall("Z3_goal_to_string","string",["number","number"],[s,d])},goal_to_dimacs_string:function(s,d,n){return t.ccall("Z3_goal_to_dimacs_string","string",["number","number","boolean"],[s,d,n])},mk_tactic:function(s,d){return t.ccall("Z3_mk_tactic","number",["number","string"],[s,d])},tactic_inc_ref:t._Z3_tactic_inc_ref,tactic_dec_ref:t._Z3_tactic_dec_ref,mk_probe:function(s,d){return t.ccall("Z3_mk_probe","number",["number","string"],[s,d])},probe_inc_ref:t._Z3_probe_inc_ref,probe_dec_ref:t._Z3_probe_dec_ref,tactic_and_then:t._Z3_tactic_and_then,tactic_or_else:t._Z3_tactic_or_else,tactic_par_or:function(s,d){return t.ccall("Z3_tactic_par_or","number",["number","number","array"],[s,d.length,r(d)])},tactic_par_and_then:t._Z3_tactic_par_and_then,tactic_try_for:t._Z3_tactic_try_for,tactic_when:t._Z3_tactic_when,tactic_cond:t._Z3_tactic_cond,tactic_repeat:t._Z3_tactic_repeat,tactic_skip:t._Z3_tactic_skip,tactic_fail:t._Z3_tactic_fail,tactic_fail_if:t._Z3_tactic_fail_if,tactic_fail_if_not_decided:t._Z3_tactic_fail_if_not_decided,tactic_using_params:t._Z3_tactic_using_params,mk_simplifier:function(s,d){return t.ccall("Z3_mk_simplifier","number",["number","string"],[s,d])},simplifier_inc_ref:t._Z3_simplifier_inc_ref,simplifier_dec_ref:t._Z3_simplifier_dec_ref,solver_add_simplifier:t._Z3_solver_add_simplifier,simplifier_and_then:t._Z3_simplifier_and_then,simplifier_using_params:t._Z3_simplifier_using_params,get_num_simplifiers:function(s){let d=t.ccall("Z3_get_num_simplifiers","number",["number"],[s]);return d=new Uint32Array([d])[0],d},get_simplifier_name:function(s,d){return t.ccall("Z3_get_simplifier_name","string",["number","number"],[s,d])},simplifier_get_help:function(s,d){return t.ccall("Z3_simplifier_get_help","string",["number","number"],[s,d])},simplifier_get_param_descrs:t._Z3_simplifier_get_param_descrs,simplifier_get_descr:function(s,d){return t.ccall("Z3_simplifier_get_descr","string",["number","string"],[s,d])},probe_const:t._Z3_probe_const,probe_lt:t._Z3_probe_lt,probe_gt:t._Z3_probe_gt,probe_le:t._Z3_probe_le,probe_ge:t._Z3_probe_ge,probe_eq:t._Z3_probe_eq,probe_and:t._Z3_probe_and,probe_or:t._Z3_probe_or,probe_not:t._Z3_probe_not,get_num_tactics:function(s){let d=t.ccall("Z3_get_num_tactics","number",["number"],[s]);return d=new Uint32Array([d])[0],d},get_tactic_name:function(s,d){return t.ccall("Z3_get_tactic_name","string",["number","number"],[s,d])},get_num_probes:function(s){let d=t.ccall("Z3_get_num_probes","number",["number"],[s]);return d=new Uint32Array([d])[0],d},get_probe_name:function(s,d){return t.ccall("Z3_get_probe_name","string",["number","number"],[s,d])},tactic_get_help:function(s,d){return t.ccall("Z3_tactic_get_help","string",["number","number"],[s,d])},tactic_get_param_descrs:t._Z3_tactic_get_param_descrs,tactic_get_descr:function(s,d){return t.ccall("Z3_tactic_get_descr","string",["number","string"],[s,d])},probe_get_descr:function(s,d){return t.ccall("Z3_probe_get_descr","string",["number","string"],[s,d])},probe_apply:t._Z3_probe_apply,tactic_apply:function(s,d,n){return t.async_call(t._async_Z3_tactic_apply,s,d,n)},tactic_apply_ex:function(s,d,n,u){return t.async_call(t._async_Z3_tactic_apply_ex,s,d,n,u)},apply_result_inc_ref:t._Z3_apply_result_inc_ref,apply_result_dec_ref:t._Z3_apply_result_dec_ref,apply_result_to_string:function(s,d){return t.ccall("Z3_apply_result_to_string","string",["number","number"],[s,d])},apply_result_get_num_subgoals:function(s,d){let n=t.ccall("Z3_apply_result_get_num_subgoals","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},apply_result_get_subgoal:t._Z3_apply_result_get_subgoal,mk_solver:t._Z3_mk_solver,mk_simple_solver:t._Z3_mk_simple_solver,mk_solver_for_logic:t._Z3_mk_solver_for_logic,mk_solver_from_tactic:t._Z3_mk_solver_from_tactic,solver_translate:t._Z3_solver_translate,solver_import_model_converter:t._Z3_solver_import_model_converter,solver_get_help:function(s,d){return t.ccall("Z3_solver_get_help","string",["number","number"],[s,d])},solver_get_param_descrs:t._Z3_solver_get_param_descrs,solver_set_params:t._Z3_solver_set_params,solver_inc_ref:t._Z3_solver_inc_ref,solver_dec_ref:t._Z3_solver_dec_ref,solver_interrupt:t._Z3_solver_interrupt,solver_push:t._Z3_solver_push,solver_pop:t._Z3_solver_pop,solver_reset:t._Z3_solver_reset,solver_get_num_scopes:function(s,d){let n=t.ccall("Z3_solver_get_num_scopes","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},solver_assert:t._Z3_solver_assert,solver_assert_and_track:t._Z3_solver_assert_and_track,solver_from_file:function(s,d,n){return t.ccall("Z3_solver_from_file","void",["number","number","string"],[s,d,n])},solver_from_string:function(s,d,n){return t.ccall("Z3_solver_from_string","void",["number","number","string"],[s,d,n])},solver_get_assertions:t._Z3_solver_get_assertions,solver_get_units:t._Z3_solver_get_units,solver_get_trail:t._Z3_solver_get_trail,solver_get_non_units:t._Z3_solver_get_non_units,solver_get_levels:function(s,d,n,u){return t.ccall("Z3_solver_get_levels","void",["number","number","number","number","array"],[s,d,n,u.length,r(u)])},solver_congruence_root:t._Z3_solver_congruence_root,solver_congruence_next:t._Z3_solver_congruence_next,solver_next_split:function(s,d,n,u,v){return t.ccall("Z3_solver_next_split","boolean",["number","number","number","number","number"],[s,d,n,u,v])},solver_propagate_declare:function(s,d,n,u){return t.ccall("Z3_solver_propagate_declare","number",["number","number","number","array","number"],[s,d,n.length,r(n),u])},solver_propagate_register:t._Z3_solver_propagate_register,solver_propagate_register_cb:t._Z3_solver_propagate_register_cb,solver_propagate_consequence:function(s,d,n,u,v,p){if(u.length!==v.length)throw new TypeError(`eq_lhs and eq_rhs must be the same length (got ${u.length} and {eq_rhs.length})`);return t.ccall("Z3_solver_propagate_consequence","boolean",["number","number","number","array","number","array","array","number"],[s,d,n.length,r(n),u.length,r(u),r(v),p])},solver_set_initial_value:t._Z3_solver_set_initial_value,solver_check:function(s,d){return t.async_call(t._async_Z3_solver_check,s,d)},solver_check_assumptions:async function(s,d,n){return await t.async_call(()=>t.ccall("async_Z3_solver_check_assumptions","number",["number","number","number","array"],[s,d,n.length,r(n)]))},get_implied_equalities:function(s,d,n){let u=t._malloc(4*n.length);try{return{rv:t.ccall("Z3_get_implied_equalities","number",["number","number","number","array","number"],[s,d,n.length,r(n),u]),class_ids:a(u,n.length)}}finally{t._free(u)}},solver_get_consequences:function(s,d,n,u,v){return t.async_call(t._async_Z3_solver_get_consequences,s,d,n,u,v)},solver_cube:function(s,d,n,u){return t.async_call(t._async_Z3_solver_cube,s,d,n,u)},solver_get_model:t._Z3_solver_get_model,solver_get_proof:t._Z3_solver_get_proof,solver_get_unsat_core:t._Z3_solver_get_unsat_core,solver_get_reason_unknown:function(s,d){return t.ccall("Z3_solver_get_reason_unknown","string",["number","number"],[s,d])},solver_get_statistics:t._Z3_solver_get_statistics,solver_to_string:function(s,d){return t.ccall("Z3_solver_to_string","string",["number","number"],[s,d])},solver_to_dimacs_string:function(s,d,n){return t.ccall("Z3_solver_to_dimacs_string","string",["number","number","boolean"],[s,d,n])},stats_to_string:function(s,d){return t.ccall("Z3_stats_to_string","string",["number","number"],[s,d])},stats_inc_ref:t._Z3_stats_inc_ref,stats_dec_ref:t._Z3_stats_dec_ref,stats_size:function(s,d){let n=t.ccall("Z3_stats_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},stats_get_key:function(s,d,n){return t.ccall("Z3_stats_get_key","string",["number","number","number"],[s,d,n])},stats_is_uint:function(s,d,n){return t.ccall("Z3_stats_is_uint","boolean",["number","number","number"],[s,d,n])},stats_is_double:function(s,d,n){return t.ccall("Z3_stats_is_double","boolean",["number","number","number"],[s,d,n])},stats_get_uint_value:function(s,d,n){let u=t.ccall("Z3_stats_get_uint_value","number",["number","number","number"],[s,d,n]);return u=new Uint32Array([u])[0],u},stats_get_double_value:t._Z3_stats_get_double_value,get_estimated_alloc_size:t._Z3_get_estimated_alloc_size,algebraic_is_value:function(s,d){return t.ccall("Z3_algebraic_is_value","boolean",["number","number"],[s,d])},algebraic_is_pos:function(s,d){return t.ccall("Z3_algebraic_is_pos","boolean",["number","number"],[s,d])},algebraic_is_neg:function(s,d){return t.ccall("Z3_algebraic_is_neg","boolean",["number","number"],[s,d])},algebraic_is_zero:function(s,d){return t.ccall("Z3_algebraic_is_zero","boolean",["number","number"],[s,d])},algebraic_sign:t._Z3_algebraic_sign,algebraic_add:t._Z3_algebraic_add,algebraic_sub:t._Z3_algebraic_sub,algebraic_mul:t._Z3_algebraic_mul,algebraic_div:t._Z3_algebraic_div,algebraic_root:t._Z3_algebraic_root,algebraic_power:t._Z3_algebraic_power,algebraic_lt:function(s,d,n){return t.ccall("Z3_algebraic_lt","boolean",["number","number","number"],[s,d,n])},algebraic_gt:function(s,d,n){return t.ccall("Z3_algebraic_gt","boolean",["number","number","number"],[s,d,n])},algebraic_le:function(s,d,n){return t.ccall("Z3_algebraic_le","boolean",["number","number","number"],[s,d,n])},algebraic_ge:function(s,d,n){return t.ccall("Z3_algebraic_ge","boolean",["number","number","number"],[s,d,n])},algebraic_eq:function(s,d,n){return t.ccall("Z3_algebraic_eq","boolean",["number","number","number"],[s,d,n])},algebraic_neq:function(s,d,n){return t.ccall("Z3_algebraic_neq","boolean",["number","number","number"],[s,d,n])},algebraic_roots:async function(s,d,n){return await t.async_call(()=>t.ccall("async_Z3_algebraic_roots","number",["number","number","number","array"],[s,d,n.length,r(n)]))},algebraic_eval:async function(s,d,n){return await t.async_call(()=>t.ccall("async_Z3_algebraic_eval","number",["number","number","number","array"],[s,d,n.length,r(n)]))},algebraic_get_poly:t._Z3_algebraic_get_poly,algebraic_get_i:function(s,d){let n=t.ccall("Z3_algebraic_get_i","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},mk_ast_vector:t._Z3_mk_ast_vector,ast_vector_inc_ref:t._Z3_ast_vector_inc_ref,ast_vector_dec_ref:t._Z3_ast_vector_dec_ref,ast_vector_size:function(s,d){let n=t.ccall("Z3_ast_vector_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},ast_vector_get:t._Z3_ast_vector_get,ast_vector_set:t._Z3_ast_vector_set,ast_vector_resize:t._Z3_ast_vector_resize,ast_vector_push:t._Z3_ast_vector_push,ast_vector_translate:t._Z3_ast_vector_translate,ast_vector_to_string:function(s,d){return t.ccall("Z3_ast_vector_to_string","string",["number","number"],[s,d])},mk_ast_map:t._Z3_mk_ast_map,ast_map_inc_ref:t._Z3_ast_map_inc_ref,ast_map_dec_ref:t._Z3_ast_map_dec_ref,ast_map_contains:function(s,d,n){return t.ccall("Z3_ast_map_contains","boolean",["number","number","number"],[s,d,n])},ast_map_find:t._Z3_ast_map_find,ast_map_insert:t._Z3_ast_map_insert,ast_map_erase:t._Z3_ast_map_erase,ast_map_reset:t._Z3_ast_map_reset,ast_map_size:function(s,d){let n=t.ccall("Z3_ast_map_size","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},ast_map_keys:t._Z3_ast_map_keys,ast_map_to_string:function(s,d){return t.ccall("Z3_ast_map_to_string","string",["number","number"],[s,d])},mk_fixedpoint:t._Z3_mk_fixedpoint,fixedpoint_inc_ref:t._Z3_fixedpoint_inc_ref,fixedpoint_dec_ref:t._Z3_fixedpoint_dec_ref,fixedpoint_add_rule:t._Z3_fixedpoint_add_rule,fixedpoint_add_fact:function(s,d,n,u){return t.ccall("Z3_fixedpoint_add_fact","void",["number","number","number","number","array"],[s,d,n,u.length,r(u)])},fixedpoint_assert:t._Z3_fixedpoint_assert,fixedpoint_query:function(s,d,n){return t.async_call(t._async_Z3_fixedpoint_query,s,d,n)},fixedpoint_query_relations:async function(s,d,n){return await t.async_call(()=>t.ccall("async_Z3_fixedpoint_query_relations","number",["number","number","number","array"],[s,d,n.length,r(n)]))},fixedpoint_get_answer:t._Z3_fixedpoint_get_answer,fixedpoint_get_reason_unknown:function(s,d){return t.ccall("Z3_fixedpoint_get_reason_unknown","string",["number","number"],[s,d])},fixedpoint_update_rule:t._Z3_fixedpoint_update_rule,fixedpoint_get_num_levels:function(s,d,n){let u=t.ccall("Z3_fixedpoint_get_num_levels","number",["number","number","number"],[s,d,n]);return u=new Uint32Array([u])[0],u},fixedpoint_get_cover_delta:t._Z3_fixedpoint_get_cover_delta,fixedpoint_add_cover:t._Z3_fixedpoint_add_cover,fixedpoint_get_statistics:t._Z3_fixedpoint_get_statistics,fixedpoint_register_relation:t._Z3_fixedpoint_register_relation,fixedpoint_set_predicate_representation:function(s,d,n,u){return t.ccall("Z3_fixedpoint_set_predicate_representation","void",["number","number","number","number","array"],[s,d,n,u.length,r(u)])},fixedpoint_get_rules:t._Z3_fixedpoint_get_rules,fixedpoint_get_assertions:t._Z3_fixedpoint_get_assertions,fixedpoint_set_params:t._Z3_fixedpoint_set_params,fixedpoint_get_help:function(s,d){return t.ccall("Z3_fixedpoint_get_help","string",["number","number"],[s,d])},fixedpoint_get_param_descrs:t._Z3_fixedpoint_get_param_descrs,fixedpoint_to_string:function(s,d,n){return t.ccall("Z3_fixedpoint_to_string","string",["number","number","number","array"],[s,d,n.length,r(n)])},fixedpoint_from_string:function(s,d,n){return t.ccall("Z3_fixedpoint_from_string","number",["number","number","string"],[s,d,n])},fixedpoint_from_file:function(s,d,n){return t.ccall("Z3_fixedpoint_from_file","number",["number","number","string"],[s,d,n])},mk_fpa_rounding_mode_sort:t._Z3_mk_fpa_rounding_mode_sort,mk_fpa_round_nearest_ties_to_even:t._Z3_mk_fpa_round_nearest_ties_to_even,mk_fpa_rne:t._Z3_mk_fpa_rne,mk_fpa_round_nearest_ties_to_away:t._Z3_mk_fpa_round_nearest_ties_to_away,mk_fpa_rna:t._Z3_mk_fpa_rna,mk_fpa_round_toward_positive:t._Z3_mk_fpa_round_toward_positive,mk_fpa_rtp:t._Z3_mk_fpa_rtp,mk_fpa_round_toward_negative:t._Z3_mk_fpa_round_toward_negative,mk_fpa_rtn:t._Z3_mk_fpa_rtn,mk_fpa_round_toward_zero:t._Z3_mk_fpa_round_toward_zero,mk_fpa_rtz:t._Z3_mk_fpa_rtz,mk_fpa_sort:t._Z3_mk_fpa_sort,mk_fpa_sort_half:t._Z3_mk_fpa_sort_half,mk_fpa_sort_16:t._Z3_mk_fpa_sort_16,mk_fpa_sort_single:t._Z3_mk_fpa_sort_single,mk_fpa_sort_32:t._Z3_mk_fpa_sort_32,mk_fpa_sort_double:t._Z3_mk_fpa_sort_double,mk_fpa_sort_64:t._Z3_mk_fpa_sort_64,mk_fpa_sort_quadruple:t._Z3_mk_fpa_sort_quadruple,mk_fpa_sort_128:t._Z3_mk_fpa_sort_128,mk_fpa_nan:t._Z3_mk_fpa_nan,mk_fpa_inf:t._Z3_mk_fpa_inf,mk_fpa_zero:t._Z3_mk_fpa_zero,mk_fpa_fp:t._Z3_mk_fpa_fp,mk_fpa_numeral_float:t._Z3_mk_fpa_numeral_float,mk_fpa_numeral_double:t._Z3_mk_fpa_numeral_double,mk_fpa_numeral_int:t._Z3_mk_fpa_numeral_int,mk_fpa_numeral_int_uint:t._Z3_mk_fpa_numeral_int_uint,mk_fpa_numeral_int64_uint64:t._Z3_mk_fpa_numeral_int64_uint64,mk_fpa_abs:t._Z3_mk_fpa_abs,mk_fpa_neg:t._Z3_mk_fpa_neg,mk_fpa_add:t._Z3_mk_fpa_add,mk_fpa_sub:t._Z3_mk_fpa_sub,mk_fpa_mul:t._Z3_mk_fpa_mul,mk_fpa_div:t._Z3_mk_fpa_div,mk_fpa_fma:t._Z3_mk_fpa_fma,mk_fpa_sqrt:t._Z3_mk_fpa_sqrt,mk_fpa_rem:t._Z3_mk_fpa_rem,mk_fpa_round_to_integral:t._Z3_mk_fpa_round_to_integral,mk_fpa_min:t._Z3_mk_fpa_min,mk_fpa_max:t._Z3_mk_fpa_max,mk_fpa_leq:t._Z3_mk_fpa_leq,mk_fpa_lt:t._Z3_mk_fpa_lt,mk_fpa_geq:t._Z3_mk_fpa_geq,mk_fpa_gt:t._Z3_mk_fpa_gt,mk_fpa_eq:t._Z3_mk_fpa_eq,mk_fpa_is_normal:t._Z3_mk_fpa_is_normal,mk_fpa_is_subnormal:t._Z3_mk_fpa_is_subnormal,mk_fpa_is_zero:t._Z3_mk_fpa_is_zero,mk_fpa_is_infinite:t._Z3_mk_fpa_is_infinite,mk_fpa_is_nan:t._Z3_mk_fpa_is_nan,mk_fpa_is_negative:t._Z3_mk_fpa_is_negative,mk_fpa_is_positive:t._Z3_mk_fpa_is_positive,mk_fpa_to_fp_bv:t._Z3_mk_fpa_to_fp_bv,mk_fpa_to_fp_float:t._Z3_mk_fpa_to_fp_float,mk_fpa_to_fp_real:t._Z3_mk_fpa_to_fp_real,mk_fpa_to_fp_signed:t._Z3_mk_fpa_to_fp_signed,mk_fpa_to_fp_unsigned:t._Z3_mk_fpa_to_fp_unsigned,mk_fpa_to_ubv:t._Z3_mk_fpa_to_ubv,mk_fpa_to_sbv:t._Z3_mk_fpa_to_sbv,mk_fpa_to_real:t._Z3_mk_fpa_to_real,fpa_get_ebits:function(s,d){let n=t.ccall("Z3_fpa_get_ebits","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},fpa_get_sbits:function(s,d){let n=t.ccall("Z3_fpa_get_sbits","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},fpa_is_numeral_nan:function(s,d){return t.ccall("Z3_fpa_is_numeral_nan","boolean",["number","number"],[s,d])},fpa_is_numeral_inf:function(s,d){return t.ccall("Z3_fpa_is_numeral_inf","boolean",["number","number"],[s,d])},fpa_is_numeral_zero:function(s,d){return t.ccall("Z3_fpa_is_numeral_zero","boolean",["number","number"],[s,d])},fpa_is_numeral_normal:function(s,d){return t.ccall("Z3_fpa_is_numeral_normal","boolean",["number","number"],[s,d])},fpa_is_numeral_subnormal:function(s,d){return t.ccall("Z3_fpa_is_numeral_subnormal","boolean",["number","number"],[s,d])},fpa_is_numeral_positive:function(s,d){return t.ccall("Z3_fpa_is_numeral_positive","boolean",["number","number"],[s,d])},fpa_is_numeral_negative:function(s,d){return t.ccall("Z3_fpa_is_numeral_negative","boolean",["number","number"],[s,d])},fpa_get_numeral_sign_bv:t._Z3_fpa_get_numeral_sign_bv,fpa_get_numeral_significand_bv:t._Z3_fpa_get_numeral_significand_bv,fpa_get_numeral_sign:function(s,d){return t.ccall("Z3_fpa_get_numeral_sign","boolean",["number","number","number"],[s,d,c])?b(0):null},fpa_get_numeral_significand_string:function(s,d){return t.ccall("Z3_fpa_get_numeral_significand_string","string",["number","number"],[s,d])},fpa_get_numeral_significand_uint64:function(s,d){return t.ccall("Z3_fpa_get_numeral_significand_uint64","boolean",["number","number","number"],[s,d,c])?f(0):null},fpa_get_numeral_exponent_string:function(s,d,n){return t.ccall("Z3_fpa_get_numeral_exponent_string","string",["number","number","boolean"],[s,d,n])},fpa_get_numeral_exponent_int64:function(s,d,n){return t.ccall("Z3_fpa_get_numeral_exponent_int64","boolean",["number","number","number","boolean"],[s,d,c,n])?x(0):null},fpa_get_numeral_exponent_bv:t._Z3_fpa_get_numeral_exponent_bv,mk_fpa_to_ieee_bv:t._Z3_mk_fpa_to_ieee_bv,mk_fpa_to_fp_int_real:t._Z3_mk_fpa_to_fp_int_real,mk_optimize:t._Z3_mk_optimize,optimize_inc_ref:t._Z3_optimize_inc_ref,optimize_dec_ref:t._Z3_optimize_dec_ref,optimize_assert:t._Z3_optimize_assert,optimize_assert_and_track:t._Z3_optimize_assert_and_track,optimize_assert_soft:function(s,d,n,u,v){let p=t.ccall("Z3_optimize_assert_soft","number",["number","number","number","string","number"],[s,d,n,u,v]);return p=new Uint32Array([p])[0],p},optimize_maximize:function(s,d,n){let u=t.ccall("Z3_optimize_maximize","number",["number","number","number"],[s,d,n]);return u=new Uint32Array([u])[0],u},optimize_minimize:function(s,d,n){let u=t.ccall("Z3_optimize_minimize","number",["number","number","number"],[s,d,n]);return u=new Uint32Array([u])[0],u},optimize_push:t._Z3_optimize_push,optimize_pop:t._Z3_optimize_pop,optimize_set_initial_value:t._Z3_optimize_set_initial_value,optimize_check:async function(s,d,n){return await t.async_call(()=>t.ccall("async_Z3_optimize_check","number",["number","number","number","array"],[s,d,n.length,r(n)]))},optimize_get_reason_unknown:function(s,d){return t.ccall("Z3_optimize_get_reason_unknown","string",["number","number"],[s,d])},optimize_get_model:t._Z3_optimize_get_model,optimize_get_unsat_core:t._Z3_optimize_get_unsat_core,optimize_set_params:t._Z3_optimize_set_params,optimize_get_param_descrs:t._Z3_optimize_get_param_descrs,optimize_get_lower:t._Z3_optimize_get_lower,optimize_get_upper:t._Z3_optimize_get_upper,optimize_get_lower_as_vector:t._Z3_optimize_get_lower_as_vector,optimize_get_upper_as_vector:t._Z3_optimize_get_upper_as_vector,optimize_to_string:function(s,d){return t.ccall("Z3_optimize_to_string","string",["number","number"],[s,d])},optimize_from_string:function(s,d,n){return t.ccall("Z3_optimize_from_string","void",["number","number","string"],[s,d,n])},optimize_from_file:function(s,d,n){return t.ccall("Z3_optimize_from_file","void",["number","number","string"],[s,d,n])},optimize_get_help:function(s,d){return t.ccall("Z3_optimize_get_help","string",["number","number"],[s,d])},optimize_get_statistics:t._Z3_optimize_get_statistics,optimize_get_assertions:t._Z3_optimize_get_assertions,optimize_get_objectives:t._Z3_optimize_get_objectives,polynomial_subresultants:function(s,d,n,u){return t.async_call(t._async_Z3_polynomial_subresultants,s,d,n,u)},rcf_del:t._Z3_rcf_del,rcf_mk_rational:function(s,d){return t.ccall("Z3_rcf_mk_rational","number",["number","string"],[s,d])},rcf_mk_small_int:t._Z3_rcf_mk_small_int,rcf_mk_pi:t._Z3_rcf_mk_pi,rcf_mk_e:t._Z3_rcf_mk_e,rcf_mk_infinitesimal:t._Z3_rcf_mk_infinitesimal,rcf_mk_roots:function(s,d){let n=t._malloc(4*d.length);try{let u=t.ccall("Z3_rcf_mk_roots","number",["number","number","array","number"],[s,d.length,r(d),n]);return u=new Uint32Array([u])[0],{rv:u,roots:a(n,d.length)}}finally{t._free(n)}},rcf_add:t._Z3_rcf_add,rcf_sub:t._Z3_rcf_sub,rcf_mul:t._Z3_rcf_mul,rcf_div:t._Z3_rcf_div,rcf_neg:t._Z3_rcf_neg,rcf_inv:t._Z3_rcf_inv,rcf_power:t._Z3_rcf_power,rcf_lt:function(s,d,n){return t.ccall("Z3_rcf_lt","boolean",["number","number","number"],[s,d,n])},rcf_gt:function(s,d,n){return t.ccall("Z3_rcf_gt","boolean",["number","number","number"],[s,d,n])},rcf_le:function(s,d,n){return t.ccall("Z3_rcf_le","boolean",["number","number","number"],[s,d,n])},rcf_ge:function(s,d,n){return t.ccall("Z3_rcf_ge","boolean",["number","number","number"],[s,d,n])},rcf_eq:function(s,d,n){return t.ccall("Z3_rcf_eq","boolean",["number","number","number"],[s,d,n])},rcf_neq:function(s,d,n){return t.ccall("Z3_rcf_neq","boolean",["number","number","number"],[s,d,n])},rcf_num_to_string:function(s,d,n,u){return t.ccall("Z3_rcf_num_to_string","string",["number","number","boolean","boolean"],[s,d,n,u])},rcf_num_to_decimal_string:function(s,d,n){return t.ccall("Z3_rcf_num_to_decimal_string","string",["number","number","number"],[s,d,n])},rcf_get_numerator_denominator:function(s,d){let n=t.ccall("Z3_rcf_get_numerator_denominator","void",["number","number","number","number"],[s,d,c,c+4]);return{n:l(0),d:l(1)}},rcf_is_rational:function(s,d){return t.ccall("Z3_rcf_is_rational","boolean",["number","number"],[s,d])},rcf_is_algebraic:function(s,d){return t.ccall("Z3_rcf_is_algebraic","boolean",["number","number"],[s,d])},rcf_is_infinitesimal:function(s,d){return t.ccall("Z3_rcf_is_infinitesimal","boolean",["number","number"],[s,d])},rcf_is_transcendental:function(s,d){return t.ccall("Z3_rcf_is_transcendental","boolean",["number","number"],[s,d])},rcf_extension_index:function(s,d){let n=t.ccall("Z3_rcf_extension_index","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},rcf_transcendental_name:t._Z3_rcf_transcendental_name,rcf_infinitesimal_name:t._Z3_rcf_infinitesimal_name,rcf_num_coefficients:function(s,d){let n=t.ccall("Z3_rcf_num_coefficients","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},rcf_coefficient:t._Z3_rcf_coefficient,rcf_num_sign_conditions:function(s,d){let n=t.ccall("Z3_rcf_num_sign_conditions","number",["number","number"],[s,d]);return n=new Uint32Array([n])[0],n},rcf_sign_condition_sign:t._Z3_rcf_sign_condition_sign,rcf_num_sign_condition_coefficients:function(s,d,n){let u=t.ccall("Z3_rcf_num_sign_condition_coefficients","number",["number","number","number"],[s,d,n]);return u=new Uint32Array([u])[0],u},rcf_sign_condition_coefficient:t._Z3_rcf_sign_condition_coefficient,fixedpoint_query_from_lvl:function(s,d,n,u){return t.async_call(t._async_Z3_fixedpoint_query_from_lvl,s,d,n,u)},fixedpoint_get_ground_sat_answer:t._Z3_fixedpoint_get_ground_sat_answer,fixedpoint_get_rules_along_trace:t._Z3_fixedpoint_get_rules_along_trace,fixedpoint_get_rule_names_along_trace:t._Z3_fixedpoint_get_rule_names_along_trace,fixedpoint_add_invariant:t._Z3_fixedpoint_add_invariant,fixedpoint_get_reachable:t._Z3_fixedpoint_get_reachable,qe_model_project:function(s,d,n,u){return t.ccall("Z3_qe_model_project","number",["number","number","number","array","number"],[s,d,n.length,r(n),u])},qe_model_project_skolem:function(s,d,n,u,v){return t.ccall("Z3_qe_model_project_skolem","number",["number","number","number","array","number","number"],[s,d,n.length,r(n),u,v])},model_extrapolate:t._Z3_model_extrapolate,qe_lite:t._Z3_qe_lite}}}r5.init=m_});var Fn=b1(u2=>{"use strict";var z_=u2&&u2.__createBinding||(Object.create?function(o,t,r,e){e===void 0&&(e=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(o,e,a)}:function(o,t,r,e){e===void 0&&(e=r),o[e]=t[r]}),ip=u2&&u2.__exportStar||function(o,t){for(var r in o)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&z_(t,o,r)};Object.defineProperty(u2,"__esModule",{value:!0});ip(An(),u2);ip(cp(),u2)});var Y4=b1(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.Z3AssertionError=da.Z3Error=void 0;var e5=class extends Error{};da.Z3Error=e5;var Pn=class extends e5{};da.Z3AssertionError=Pn});var np=b1(p2=>{"use strict";Object.defineProperty(p2,"__esModule",{value:!0});p2.allSatisfy=p2.assert=p2.assertExhaustive=void 0;var k_=Y4();function __(o){throw new Error("Unexpected code execution detected, should be caught at compile time")}p2.assertExhaustive=__;function M_(o,t){if(!o)throw new k_.Z3AssertionError(t??"Assertion failed")}p2.assert=M_;function C_(o,t){let r=!1;for(let e of o)if(r=!0,!t(e))return!1;return r===!0?!0:null}p2.allSatisfy=C_});var dp=b1(a5=>{"use strict";Object.defineProperty(a5,"__esModule",{value:!0});a5.createApi=void 0;var S_=ap(),F0=Fn(),On=Y4(),_0=np(),L_=17,lp=new S_.Mutex;function q4(o){let t=o!==null&&(typeof o=="object"||typeof o=="function")&&o.numerator!==null&&(typeof o.numerator=="number"||typeof o.numerator=="bigint")&&o.denominator!==null&&(typeof o.denominator=="number"||typeof o.denominator=="bigint");return t&&(0,_0.assert)((typeof o.numerator!="number"||Number.isSafeInteger(o.numerator))&&(typeof o.denominator!="number"||Number.isSafeInteger(o.denominator)),"Fraction numerator and denominator must be integers"),t}function V_(o){let t=new FinalizationRegistry(x=>x());function r(x){o.enable_trace(x)}function e(x){o.disable_trace(x)}function a(){return o.get_version()}function c(){let{major:x,minor:s,build_number:d}=o.get_version();return`${x}.${s}.${d}`}function i(){return o.get_full_version()}function l(x){return o.open_log(x)}function w(x){o.append_log(x)}function b(x,s){typeof x=="string"?o.global_param_set(x,s.toString()):((0,_0.assert)(s===void 0,"Can't provide a Record and second parameter to set_param at the same time"),Object.entries(x).forEach(([d,n])=>b(d,n)))}function y(){o.global_param_reset_all()}function f(x){return o.global_param_get(x)}function m(x,s){let d=o.mk_config();s!=null&&Object.entries(s).forEach(([h,g])=>p(o.set_param_value(d,h,g.toString())));let n=o.mk_context_rc(d);o.set_ast_print_mode(n,F0.Z3_ast_print_mode.Z3_PRINT_SMTLIB2_COMPLIANT),o.del_config(d);function u(...h){h.forEach(g=>(0,_0.assert)("ctx"in g?V1===g.ctx:V1===g,"Context mismatch"))}function v(){if(o.get_error_code(n)!==F0.Z3_error_code.Z3_OK)throw new Error(o.get_error_msg(V1.ptr,o.get_error_code(V1.ptr)))}function p(h){return v(),h}function M(h){return p(typeof h=="number"?o.mk_int_symbol(n,h):o.mk_string_symbol(n,h))}function H(h){let g=p(o.get_symbol_kind(n,h));switch(g){case F0.Z3_symbol_kind.Z3_INT_SYMBOL:return o.get_symbol_int(n,h);case F0.Z3_symbol_kind.Z3_STRING_SYMBOL:return o.get_symbol_string(n,h);default:(0,_0.assertExhaustive)(g)}}function L(h,g){let F=o.mk_params(n);return o.params_inc_ref(n,F),typeof g=="boolean"?o.params_set_bool(n,F,M(h),g):typeof g=="number"?Number.isInteger(g)?p(o.params_set_uint(n,F,M(h),g)):p(o.params_set_double(n,F,M(h),g)):typeof g=="string"&&p(o.params_set_symbol(n,F,M(h),M(g))),F}function k(h){switch(p(o.get_ast_kind(n,h))){case F0.Z3_ast_kind.Z3_SORT_AST:return C(h);case F0.Z3_ast_kind.Z3_FUNC_DECL_AST:return new no(h);default:return B(h)}}function C(h){switch(p(o.get_sort_kind(n,h))){case F0.Z3_sort_kind.Z3_BOOL_SORT:return new f2(h);case F0.Z3_sort_kind.Z3_INT_SORT:case F0.Z3_sort_kind.Z3_REAL_SORT:return new ar(h);case F0.Z3_sort_kind.Z3_BV_SORT:return new Vr(h);case F0.Z3_sort_kind.Z3_ARRAY_SORT:return new Hr(h);default:return new io(h)}}function B(h){let g=p(o.get_ast_kind(n,h));if(g===F0.Z3_ast_kind.Z3_QUANTIFIER_AST)return o.is_lambda(n,h)?new j1(h):new z1(h);switch(p(o.get_sort_kind(n,o.get_sort(n,h)))){case F0.Z3_sort_kind.Z3_BOOL_SORT:return new U0(h);case F0.Z3_sort_kind.Z3_INT_SORT:return g===F0.Z3_ast_kind.Z3_NUMERAL_AST?new Yo(h):new t1(h);case F0.Z3_sort_kind.Z3_REAL_SORT:return g===F0.Z3_ast_kind.Z3_NUMERAL_AST?new ir(h):new t1(h);case F0.Z3_sort_kind.Z3_BV_SORT:return g===F0.Z3_ast_kind.Z3_NUMERAL_AST?new m2(h):new T0(h);case F0.Z3_sort_kind.Z3_ARRAY_SORT:return new g0(h);default:return new K1(h)}}function O(h){let g=[];for(let F of h)x0(F)?g.push(...F.values()):g.push(F);return g}function A(h){return s0(h)?h:new Cr(h)}function Y(h,g){(0,_0.assert)(g.length>0,"At least one argument expected");let F=A(g[0]);for(let r0=1;r0<g.length;r0++)F=new Cr(p(h(n,F.ptr,A(g[r0]).ptr)));return F}function q(){p(o.interrupt(n))}function P(h){let g=h instanceof tt;return g&&u(h),g}function U(h){let g=h instanceof po;return g&&u(h),g}function Q(h){let g=h instanceof io;return g&&u(h),g}function w0(h){let g=h instanceof no;return g&&u(h),g}function t0(h){let g=h instanceof Vt;return g&&u(h),g}function b0(h){if(!d0(h))return!1;let g=p(o.get_ast_kind(n,h.ast));return g===F0.Z3_ast_kind.Z3_NUMERAL_AST||g===F0.Z3_ast_kind.Z3_APP_AST}function e0(h){return d0(h)&&b0(h)&&h.numArgs()===0}function d0(h){let g=h instanceof K1;return g&&u(h),g}function l0(h){return d0(h)&&p(o.get_ast_kind(n,h.ast))===F0.Z3_ast_kind.Z3_VAR_AST}function D(h,g){return d0(h)&&b0(h)&&h.decl().kind()===g}function X(h){let g=h instanceof K1&&h.sort.kind()===F0.Z3_sort_kind.Z3_BOOL_SORT;return g&&u(h),g}function o0(h){return D(h,F0.Z3_decl_kind.Z3_OP_TRUE)}function J(h){return D(h,F0.Z3_decl_kind.Z3_OP_FALSE)}function c0(h){return D(h,F0.Z3_decl_kind.Z3_OP_AND)}function v0(h){return D(h,F0.Z3_decl_kind.Z3_OP_OR)}function u0(h){return D(h,F0.Z3_decl_kind.Z3_OP_IMPLIES)}function f0(h){return D(h,F0.Z3_decl_kind.Z3_OP_NOT)}function k0(h){return D(h,F0.Z3_decl_kind.Z3_OP_EQ)}function A0(h){return D(h,F0.Z3_decl_kind.Z3_OP_DISTINCT)}function C0(h){let g=h instanceof V0;return g&&u(h),g}function N0(h){let g=h instanceof t1;return g&&u(h),g}function X0(h){let g=h instanceof ar;return g&&u(h),g}function e1(h){return N0(h)&&B0(h.sort)}function I0(h){let g=h instanceof Yo;return g&&u(h),g}function B0(h){return Q(h)&&h.kind()===F0.Z3_sort_kind.Z3_INT_SORT}function $0(h){return N0(h)&&y0(h.sort)}function R0(h){let g=h instanceof ir;return g&&u(h),g}function y0(h){return Q(h)&&h.kind()===F0.Z3_sort_kind.Z3_REAL_SORT}function a1(h){let g=h instanceof Vr;return g&&u(h),g}function Z(h){let g=h instanceof T0;return g&&u(h),g}function R(h){let g=h instanceof m2;return g&&u(h),g}function I(h){let g=h instanceof Hr;return g&&u(h),g}function W(h){let g=h instanceof g0;return g&&u(h),g}function a0(h){return D(h,F0.Z3_decl_kind.Z3_OP_CONST_ARRAY)}function s0(h){let g=h instanceof Cr;return g&&u(h),g}function H0(h){let g=h instanceof Sr;return g&&u(h),g}function x0(h){let g=h instanceof v1;return g&&u(h),g}function K0(h,g){return h.eqIdentity(g)}function G0(h){return(0,_0.assert)(l0(h),"Z3 bound variable expected"),o.get_index_value(n,h.ast)}function M0(h){if(typeof h=="boolean")return k1.val(h);if(typeof h=="number"){if(!Number.isFinite(h))throw new Error(`cannot represent infinity/NaN (got ${h})`);return Math.floor(h)===h?Q0.val(h):S0.val(h)}else{if(q4(h))return S0.val(h);if(typeof h=="bigint")return Q0.val(h);if(d0(h))return h}(0,_0.assert)(!1)}async function n1(...h){let g=new V1.Solver;g.add(...h);let F=await g.check();return F==="sat"?g.model():F}async function u1(h){let g=await o.simplify(n,h.ast);return B(p(g))}let A1={declare:h=>new io(o.mk_uninterpreted_sort(n,M(h)))},y1={declare:(h,...g)=>{let F=g.length-1,r0=g[F];u(r0);let P0=[];for(let Y0=0;Y0<F;Y0++)u(g[Y0]),P0.push(g[Y0].ptr);return new no(o.mk_func_decl(n,M(h),P0,r0.ptr))},fresh:(...h)=>{let g=h.length-1,F=h[g];u(F);let r0=[];for(let P0=0;P0<g;P0++)u(h[P0]),r0.push(h[P0].ptr);return new no(o.mk_fresh_func_decl(n,"f",r0,F.ptr))}},q1={declare:(h,...g)=>{let F=g.length-1,r0=g[F];u(r0);let P0=[];for(let Y0=0;Y0<F;Y0++)u(g[Y0]),P0.push(g[Y0].ptr);return new no(o.mk_rec_func_decl(n,M(h),P0,r0.ptr))},addDefinition:(h,g,F)=>{u(h,...g,F),p(o.add_rec_def(n,h.ptr,g.map(r0=>r0.ast),F.ast))}},k1={sort:()=>new f2(o.mk_bool_sort(n)),const:h=>new U0(o.mk_const(n,M(h),k1.sort().ptr)),consts:h=>(typeof h=="string"&&(h=h.split(" ")),h.map(g=>k1.const(g))),vector:(h,g)=>{let F=[];for(let r0=0;r0<g;r0++)F.push(k1.const(`${h}__${r0}`));return F},fresh:(h="b")=>new U0(o.mk_fresh_const(n,h,k1.sort().ptr)),val:h=>h?new U0(o.mk_true(n)):new U0(o.mk_false(n))},Q0={sort:()=>new ar(o.mk_int_sort(n)),const:h=>new t1(o.mk_const(n,M(h),Q0.sort().ptr)),consts:h=>(typeof h=="string"&&(h=h.split(" ")),h.map(g=>Q0.const(g))),vector:(h,g)=>{let F=[];for(let r0=0;r0<g;r0++)F.push(Q0.const(`${h}__${r0}`));return F},fresh:(h="x")=>new t1(o.mk_fresh_const(n,h,Q0.sort().ptr)),val:h=>((0,_0.assert)(typeof h=="bigint"||typeof h=="string"||Number.isSafeInteger(h)),new Yo(p(o.mk_numeral(n,h.toString(),Q0.sort().ptr))))},S0={sort:()=>new ar(o.mk_real_sort(n)),const:h=>new t1(p(o.mk_const(n,M(h),S0.sort().ptr))),consts:h=>(typeof h=="string"&&(h=h.split(" ")),h.map(g=>S0.const(g))),vector:(h,g)=>{let F=[];for(let r0=0;r0<g;r0++)F.push(S0.const(`${h}__${r0}`));return F},fresh:(h="b")=>new t1(o.mk_fresh_const(n,h,S0.sort().ptr)),val:h=>(q4(h)&&(h=`${h.numerator}/${h.denominator}`),new ir(o.mk_numeral(n,h.toString(),S0.sort().ptr)))},p1={sort(h){return(0,_0.assert)(Number.isSafeInteger(h),"number of bits must be an integer"),new Vr(o.mk_bv_sort(n,h))},const(h,g){return new T0(p(o.mk_const(n,M(h),a1(g)?g.ptr:p1.sort(g).ptr)))},consts(h,g){return typeof h=="string"&&(h=h.split(" ")),h.map(F=>p1.const(F,g))},val(h,g){return h===!0?p1.val(1,g):h===!1?p1.val(0,g):new m2(p(o.mk_numeral(n,h.toString(),a1(g)?g.ptr:p1.sort(g).ptr)))}},g1={sort(...h){let g=h.length-1,F=h[g],r0=h[0];if(g===1)return new Hr(o.mk_array_sort(n,r0.ptr,F.ptr));let P0=h.slice(0,g);return new Hr(o.mk_array_sort_n(n,P0.map(Y0=>Y0.ptr),F.ptr))},const(h,...g){return new g0(p(o.mk_const(n,M(h),g1.sort(...g).ptr)))},consts(h,...g){return typeof h=="string"&&(h=h.split(" ")),h.map(F=>g1.const(F,...g))},K(h,g){return new g0(p(o.mk_const_array(n,h.ptr,g.ptr)))}};function x1(h,g,F){return s0(h)&&H0(g)&&H0(F)?z0(h,g,F):((0,_0.assert)(!s0(h)&&!H0(g)&&!H0(F),"Mixed expressions and goals"),typeof h=="boolean"&&(h=k1.val(h)),g=M0(g),F=M0(F),B(p(o.mk_ite(n,h.ptr,g.ast,F.ast))))}function J1(...h){return(0,_0.assert)(h.length>0,"Can't make Distinct ouf of nothing"),new U0(p(o.mk_distinct(n,h.map(g=>(g=M0(g),u(g),g.ast)))))}function l1(h,g){return u(g),B(p(o.mk_const(n,M(h),g.ptr)))}function I1(h,g){return u(g),typeof h=="string"&&(h=h.split(" ")),h.map(F=>l1(F,g))}function J0(h,g="c"){return u(h),B(o.mk_fresh_const(h.ctx.ptr,g,h.ptr))}function c1(h,g){return u(g),B(o.mk_bound(g.ctx.ptr,h,g.ptr))}function bo(h,g){return h=M0(h),g=M0(g),u(h,g),new U0(p(o.mk_implies(n,h.ptr,g.ptr)))}function ko(h,g){return h=M0(h),g=M0(g),u(h,g),new U0(p(o.mk_iff(n,h.ptr,g.ptr)))}function er(h,g){return h=M0(h),g=M0(g),u(h,g),h.eq(g)}function co(h,g){return h=M0(h),g=M0(g),u(h,g),new U0(p(o.mk_xor(n,h.ptr,g.ptr)))}function Zt(h){return typeof h=="boolean"&&(h=M0(h)),u(h),s0(h)?new Cr(p(o.probe_not(n,h.ptr))):new U0(p(o.mk_not(n,h.ptr)))}function Lt(...h){if(h.length==1&&h[0]instanceof V1.AstVector&&(h=[...h[0].values()],(0,_0.assert)((0,_0.allSatisfy)(h,X)??!0,"AstVector containing not bools")),(0,_0.allSatisfy)(h,s0)??!1)return Y(o.probe_and,h);{let F=h.map(M0);return u(...F),new U0(p(o.mk_and(n,F.map(r0=>r0.ptr))))}}function go(...h){if(h.length==1&&h[0]instanceof V1.AstVector&&(h=[...h[0].values()],(0,_0.assert)((0,_0.allSatisfy)(h,X)??!0,"AstVector containing not bools")),(0,_0.allSatisfy)(h,s0)??!1)return Y(o.probe_or,h);{let F=h.map(M0);return u(...F),new U0(p(o.mk_or(n,F.map(r0=>r0.ptr))))}}function V(h,g,F=1){if(!(0,_0.allSatisfy)(h,e0))throw new Error("Quantifier variables must be constants");return new z1(p(o.mk_quantifier_const_ex(n,!0,F,M(""),M(""),h.map(r0=>r0.ptr),[],[],g.ptr)))}function E(h,g,F=1){if(!(0,_0.allSatisfy)(h,e0))throw new Error("Quantifier variables must be constants");return new z1(p(o.mk_quantifier_const_ex(n,!1,F,M(""),M(""),h.map(r0=>r0.ptr),[],[],g.ptr)))}function z(h,g){if(!(0,_0.allSatisfy)(h,e0))throw new Error("Quantifier variables must be constants");return new j1(p(o.mk_lambda_const(n,h.map(F=>F.ptr),g.ptr)))}function _(h){return h=M0(h),u(h),(0,_0.assert)(e1(h),"Int expression expected"),new t1(p(o.mk_int2real(n,h.ast)))}function S(h){return d0(h)||(h=S0.val(h)),u(h),(0,_0.assert)($0(h),"Real expression expected"),new t1(p(o.mk_real2int(n,h.ast)))}function T(h){return d0(h)||(h=S0.val(h)),u(h),(0,_0.assert)($0(h),"Real expression expected"),new U0(p(o.mk_is_int(n,h.ast)))}function $(h){return d0(h)||(h=S0.val(h)),h.pow("1/2")}function j(h){return d0(h)||(h=S0.val(h)),h.pow("1/3")}function N(h,g){return u(h),new t1(p(o.mk_bv2int(n,h.ast,g)))}function G(h,g){return N0(h)?(0,_0.assert)(e1(h),"parameter must be an integer"):((0,_0.assert)(typeof h!="number"||Number.isSafeInteger(h),"parameter must not have decimal places"),h=Q0.val(h)),new T0(p(o.mk_int2bv(n,g,h.ast)))}function p0(...h){return u(...h),h.reduce((g,F)=>new T0(p(o.mk_concat(n,g.ast,F.ast))))}function z0(h,g,F){return u(h,g,F),new Sr(p(o.tactic_cond(n,h.ptr,g.ptr,F.ptr)))}function D0(h,g){return new U0(p(o.mk_lt(n,h.ast,h.sort.cast(g).ast)))}function o1(h,g){return new U0(p(o.mk_gt(n,h.ast,h.sort.cast(g).ast)))}function E0(h,g){return new U0(p(o.mk_le(n,h.ast,h.sort.cast(g).ast)))}function W0(h,g){return new U0(p(o.mk_ge(n,h.ast,h.sort.cast(g).ast)))}function m1(h,g){return new U0(p(o.mk_bvult(n,h.ast,h.sort.cast(g).ast)))}function L0(h,g){return new U0(p(o.mk_bvugt(n,h.ast,h.sort.cast(g).ast)))}function M1(h,g){return new U0(p(o.mk_bvule(n,h.ast,h.sort.cast(g).ast)))}function F1(h,g){return new U0(p(o.mk_bvuge(n,h.ast,h.sort.cast(g).ast)))}function uo(h,g){return new U0(p(o.mk_bvslt(n,h.ast,h.sort.cast(g).ast)))}function Zo(h,g){return new U0(p(o.mk_bvsgt(n,h.ast,h.sort.cast(g).ast)))}function D1(h,g){return new U0(p(o.mk_bvsle(n,h.ast,h.sort.cast(g).ast)))}function bt(h,g){return new U0(p(o.mk_bvsge(n,h.ast,h.sort.cast(g).ast)))}function jo(h,g,F){return new T0(p(o.mk_extract(n,h,g,F.ast)))}function w1(h,...g){let F=g.map((P0,Y0)=>h.domain_n(Y0).cast(P0));if(F.length===1)return B(p(o.mk_select(n,h.ast,F[0].ast)));let r0=F.map(P0=>P0.ast);return B(p(o.mk_select_n(n,h.ast,r0)))}function Z1(h,...g){let F=g.map((P0,Y0)=>Y0===g.length-1?h.range().cast(P0):h.domain_n(Y0).cast(P0));if(F.length<=1)throw new Error("Array store requires both index and value arguments");if(F.length===2)return B(p(o.mk_store(n,h.ast,F[0].ast,F[1].ast)));let r0=F.slice(0,F.length-1).map(P0=>P0.ast);return B(p(o.mk_store_n(n,h.ast,r0,F[F.length-1].ast)))}class po{constructor(g){this.ptr=g,this.ctx=V1;let F=this.ast;o.inc_ref(n,F),t.register(this,()=>o.dec_ref(n,F))}get ast(){return this.ptr}id(){return o.get_ast_id(n,this.ast)}eqIdentity(g){return u(g),p(o.is_eq_ast(n,this.ast,g.ast))}neqIdentity(g){return u(g),!this.eqIdentity(g)}sexpr(){return o.ast_to_string(n,this.ast)}hash(){return o.get_ast_hash(n,this.ast)}toString(){return this.sexpr()}}class Ao{constructor(g=o.mk_solver(n)){this.ctx=V1;let F;typeof g=="string"?F=p(o.mk_solver_for_logic(n,M(g))):F=g,this.ptr=F,o.solver_inc_ref(n,F),t.register(this,()=>o.solver_dec_ref(n,F))}set(g,F){o.solver_set_params(n,this.ptr,L(g,F))}push(){o.solver_push(n,this.ptr)}pop(g=1){o.solver_pop(n,this.ptr,g)}numScopes(){return o.solver_get_num_scopes(n,this.ptr)}reset(){o.solver_reset(n,this.ptr)}add(...g){O(g).forEach(F=>{u(F),p(o.solver_assert(n,this.ptr,F.ast))})}addAndTrack(g,F){typeof F=="string"&&(F=k1.const(F)),(0,_0.assert)(e0(F),"Provided expression that is not a constant to addAndTrack"),p(o.solver_assert_and_track(n,this.ptr,g.ast,F.ast))}assertions(){return new v1(p(o.solver_get_assertions(n,this.ptr)))}async check(...g){let F=O(g).map(P0=>(u(P0),P0.ast)),r0=await lp.runExclusive(()=>p(o.solver_check_assumptions(n,this.ptr,F)));switch(r0){case F0.Z3_lbool.Z3_L_FALSE:return"unsat";case F0.Z3_lbool.Z3_L_TRUE:return"sat";case F0.Z3_lbool.Z3_L_UNDEF:return"unknown";default:(0,_0.assertExhaustive)(r0)}}model(){return new tt(p(o.solver_get_model(n,this.ptr)))}toString(){return p(o.solver_to_string(n,this.ptr))}fromString(g){o.solver_from_string(n,this.ptr,g),v()}}class Fo{constructor(g=o.mk_optimize(n)){this.ctx=V1;let F;F=g,this.ptr=F,o.optimize_inc_ref(n,F),t.register(this,()=>o.optimize_dec_ref(n,F))}set(g,F){o.optimize_set_params(n,this.ptr,L(g,F))}push(){o.optimize_push(n,this.ptr)}pop(){o.optimize_pop(n,this.ptr)}add(...g){O(g).forEach(F=>{u(F),p(o.optimize_assert(n,this.ptr,F.ast))})}addSoft(g,F,r0=""){q4(F)&&(F=`${F.numerator}/${F.denominator}`),p(o.optimize_assert_soft(n,this.ptr,g.ast,F.toString(),M(r0)))}addAndTrack(g,F){typeof F=="string"&&(F=k1.const(F)),(0,_0.assert)(e0(F),"Provided expression that is not a constant to addAndTrack"),p(o.optimize_assert_and_track(n,this.ptr,g.ast,F.ast))}assertions(){return new v1(p(o.optimize_get_assertions(n,this.ptr)))}maximize(g){p(o.optimize_maximize(n,this.ptr,g.ast))}minimize(g){p(o.optimize_minimize(n,this.ptr,g.ast))}async check(...g){let F=O(g).map(P0=>(u(P0),P0.ast)),r0=await lp.runExclusive(()=>p(o.optimize_check(n,this.ptr,F)));switch(r0){case F0.Z3_lbool.Z3_L_FALSE:return"unsat";case F0.Z3_lbool.Z3_L_TRUE:return"sat";case F0.Z3_lbool.Z3_L_UNDEF:return"unknown";default:(0,_0.assertExhaustive)(r0)}}model(){return new tt(p(o.optimize_get_model(n,this.ptr)))}toString(){return p(o.optimize_to_string(n,this.ptr))}fromString(g){o.optimize_from_string(n,this.ptr,g),v()}}class tt{constructor(g=o.mk_model(n)){this.ptr=g,this.ctx=V1,o.model_inc_ref(n,g),t.register(this,()=>o.model_dec_ref(n,g))}length(){return o.model_get_num_consts(n,this.ptr)+o.model_get_num_funcs(n,this.ptr)}[Symbol.iterator](){return this.values()}*entries(){let g=this.length();for(let F=0;F<g;F++)yield[F,this.get(F)]}*keys(){for(let[g]of this.entries())yield g}*values(){for(let[,g]of this.entries())yield g}decls(){return[...this.values()]}sexpr(){return p(o.model_to_string(n,this.ptr))}toString(){return this.sexpr()}eval(g,F=!1){u(g);let r0=p(o.model_eval(n,this.ptr,g.ast,F));if(r0===null)throw new On.Z3Error("Failed to evaluate expression in the model");return B(r0)}get(g,F){if((0,_0.assert)(F===void 0||typeof g=="number"),typeof g=="number"){let r0=this.length();if(g>=r0)throw new RangeError(`expected index ${g} to be less than length ${r0}`);if(F===void 0){let Y0=p(o.model_get_num_consts(n,this.ptr));return g<Y0?new no(p(o.model_get_const_decl(n,this.ptr,g))):new no(p(o.model_get_func_decl(n,this.ptr,g-Y0)))}if(F<0&&(F+=r0),F>=r0)throw new RangeError(`expected index ${F} to be less than length ${r0}`);let P0=[];for(let Y0=g;Y0<F;Y0++)P0.push(this.get(Y0));return P0}else if(w0(g)||d0(g)&&e0(g)){let r0=this.getInterp(g);return(0,_0.assert)(r0!==null),r0}else if(Q(g))return this.getUniverse(g);(0,_0.assert)(!1,"Number, declaration or constant expected")}updateValue(g,F){if(u(g),u(F),d0(g)&&(g=g.decl()),w0(g)&&g.arity()!==0&&t0(F)){let r0=this.addFuncInterp(g,F.elseValue());for(let P0=0;P0<F.numEntries();P0++){let Y0=F.entry(P0),fp=Y0.numArgs(),yp=window.Array(fp).map((Z_,xp)=>Y0.argValue(xp));r0.addEntry(yp,Y0.value())}return}if(!w0(g)||g.arity()!==0)throw new On.Z3Error("Expecting 0-ary function or constant expression");if(!U(F))throw new On.Z3Error("Only func declarations can be assigned to func interpretations");p(o.add_const_interp(n,this.ptr,g.ptr,F.ast))}addFuncInterp(g,F){let r0=p(o.add_func_interp(n,this.ptr,g.ptr,g.range().cast(F).ptr));return new Vt(r0)}getInterp(g){if((0,_0.assert)(w0(g)||e0(g),"Declaration expected"),e0(g)&&((0,_0.assert)(d0(g)),g=g.decl()),(0,_0.assert)(w0(g)),g.arity()===0){let F=p(o.model_get_const_interp(n,this.ptr,g.ptr));return F===null?null:B(F)}else{let F=p(o.model_get_func_interp(n,this.ptr,g.ptr));return F===null?null:new Vt(F)}}getUniverse(g){return u(g),new v1(p(o.model_get_sort_universe(n,this.ptr,g.ptr)))}}class jt{constructor(g){this.ptr=g,this.ctx=V1,o.func_entry_inc_ref(n,g),t.register(this,()=>o.func_entry_dec_ref(n,g))}numArgs(){return p(o.func_entry_get_num_args(n,this.ptr))}argValue(g){return B(p(o.func_entry_get_arg(n,this.ptr,g)))}value(){return B(p(o.func_entry_get_value(n,this.ptr)))}}class Vt{constructor(g){this.ptr=g,this.ctx=V1,o.func_interp_inc_ref(n,g),t.register(this,()=>o.func_interp_dec_ref(n,g))}elseValue(){return B(p(o.func_interp_get_else(n,this.ptr)))}numEntries(){return p(o.func_interp_get_num_entries(n,this.ptr))}arity(){return p(o.func_interp_get_arity(n,this.ptr))}entry(g){return new jt(p(o.func_interp_get_entry(n,this.ptr,g)))}addEntry(g,F){let r0=new v1;for(let P0 of g)r0.push(P0);u(r0),u(F),(0,_0.assert)(this.arity()===r0.length(),"Number of arguments in entry doesn't match function arity"),p(o.func_interp_add_entry(n,this.ptr,r0.ptr,F.ptr))}}class io extends po{get ast(){return o.sort_to_ast(n,this.ptr)}kind(){return o.get_sort_kind(n,this.ptr)}subsort(g){return u(g),!1}cast(g){return u(g),(0,_0.assert)(g.sort.eqIdentity(g.sort),"Sort mismatch"),g}name(){return H(o.get_sort_name(n,this.ptr))}eqIdentity(g){return u(g),p(o.is_eq_sort(n,this.ptr,g.ptr))}neqIdentity(g){return!this.eqIdentity(g)}}class no extends po{get ast(){return o.func_decl_to_ast(n,this.ptr)}name(){return H(o.get_decl_name(n,this.ptr))}arity(){return o.get_arity(n,this.ptr)}domain(g){return(0,_0.assert)(g<this.arity(),"Index out of bounds"),C(o.get_domain(n,this.ptr,g))}range(){return C(o.get_range(n,this.ptr))}kind(){return o.get_decl_kind(n,this.ptr)}params(){let g=o.get_decl_num_parameters(n,this.ptr),F=[];for(let r0=0;r0<g;r0++){let P0=p(o.get_decl_parameter_kind(n,this.ptr,r0));switch(P0){case F0.Z3_parameter_kind.Z3_PARAMETER_INT:F.push(p(o.get_decl_int_parameter(n,this.ptr,r0)));break;case F0.Z3_parameter_kind.Z3_PARAMETER_DOUBLE:F.push(p(o.get_decl_double_parameter(n,this.ptr,r0)));break;case F0.Z3_parameter_kind.Z3_PARAMETER_RATIONAL:F.push(p(o.get_decl_rational_parameter(n,this.ptr,r0)));break;case F0.Z3_parameter_kind.Z3_PARAMETER_SYMBOL:F.push(H(p(o.get_decl_symbol_parameter(n,this.ptr,r0))));break;case F0.Z3_parameter_kind.Z3_PARAMETER_SORT:F.push(new io(p(o.get_decl_sort_parameter(n,this.ptr,r0))));break;case F0.Z3_parameter_kind.Z3_PARAMETER_AST:F.push(new K1(p(o.get_decl_ast_parameter(n,this.ptr,r0))));break;case F0.Z3_parameter_kind.Z3_PARAMETER_FUNC_DECL:F.push(new no(p(o.get_decl_func_decl_parameter(n,this.ptr,r0))));break;default:(0,_0.assertExhaustive)(P0)}}return F}call(...g){return(0,_0.assert)(g.length===this.arity(),`Incorrect number of arguments to ${this}`),B(p(o.mk_app(n,this.ptr,g.map((F,r0)=>this.domain(r0).cast(F).ast))))}}class K1 extends po{get sort(){return C(o.get_sort(n,this.ast))}eq(g){return new U0(p(o.mk_eq(n,this.ast,M0(g).ast)))}neq(g){return new U0(p(o.mk_distinct(n,[this,g].map(F=>M0(F).ast))))}name(){return this.decl().name()}params(){return this.decl().params()}decl(){return(0,_0.assert)(b0(this),"Z3 application expected"),new no(p(o.get_app_decl(n,p(o.to_app(n,this.ast)))))}numArgs(){return(0,_0.assert)(b0(this),"Z3 applicaiton expected"),p(o.get_app_num_args(n,p(o.to_app(n,this.ast))))}arg(g){return(0,_0.assert)(b0(this),"Z3 applicaiton expected"),(0,_0.assert)(g<this.numArgs(),`Invalid argument index - expected ${g} to be less than ${this.numArgs()}`),B(p(o.get_app_arg(n,p(o.to_app(n,this.ast)),g)))}children(){let g=this.numArgs();if(b0(this)){let F=[];for(let r0=0;r0<g;r0++)F.push(this.arg(r0));return F}return[]}}class Mr{constructor(g){this.ptr=g,this.ctx=V1}}class f2 extends io{cast(g){return typeof g=="boolean"&&(g=k1.val(g)),(0,_0.assert)(d0(g),"true, false or Z3 Boolean expression expected."),(0,_0.assert)(this.eqIdentity(g.sort),"Value cannot be converted into a Z3 Boolean value"),g}subsort(g){return u(g.ctx),g instanceof ar}}class U0 extends K1{not(){return Zt(this)}and(g){return Lt(this,g)}or(g){return go(this,g)}xor(g){return co(this,g)}implies(g){return bo(this,g)}iff(g){return ko(this,g)}}class Cr{constructor(g){this.ptr=g,this.ctx=V1}}class Sr{constructor(g){this.ctx=V1;let F;typeof g=="string"?F=p(o.mk_tactic(n,g)):F=g,this.ptr=F,o.tactic_inc_ref(n,F),t.register(this,()=>o.tactic_dec_ref(n,F))}}class ar extends io{cast(g){let F=B0(this)?"IntSort":"RealSort";if(d0(g)){let r0=g.sort;if(N0(g)){if(this.eqIdentity(r0))return g;if(B0(r0)&&y0(this))return _(g);(0,_0.assert)(!1,"Can't cast Real to IntSort without loss")}else if(X(g))return B0(this)?x1(g,1,0):_(x1(g,1,0));(0,_0.assert)(!1,`Can't cast expression to ${F}`)}else{if(typeof g!="boolean")return B0(this)?((0,_0.assert)(!q4(g),"Can't cast fraction to IntSort"),Q0.val(g)):S0.val(g);(0,_0.assert)(!1,`Can't cast primitive to ${F}`)}}}function y2(h,...g){if(h instanceof T0){if(g.length!==1)throw new Error("BitVec add only supports 2 arguments");return new T0(p(o.mk_bvadd(n,h.ast,h.sort.cast(g[0]).ast)))}else return(0,_0.assert)(h instanceof t1),new t1(p(o.mk_add(n,[h.ast].concat(g.map(F=>h.sort.cast(F).ast)))))}function cr(h,...g){if(h instanceof T0){if(g.length!==1)throw new Error("BitVec sub only supports 2 arguments");return new T0(p(o.mk_bvsub(n,h.ast,h.sort.cast(g[0]).ast)))}else return(0,_0.assert)(h instanceof t1),new t1(p(o.mk_sub(n,[h.ast].concat(g.map(F=>h.sort.cast(F).ast)))))}function Uo(h,...g){if(h instanceof T0){if(g.length!==1)throw new Error("BitVec mul only supports 2 arguments");return new T0(p(o.mk_bvmul(n,h.ast,h.sort.cast(g[0]).ast)))}else return(0,_0.assert)(h instanceof t1),new t1(p(o.mk_mul(n,[h.ast].concat(g.map(F=>h.sort.cast(F).ast)))))}function x2(h,g){return h instanceof T0?new T0(p(o.mk_bvsdiv(n,h.ast,h.sort.cast(g).ast))):((0,_0.assert)(h instanceof t1),new t1(p(o.mk_div(n,h.ast,h.sort.cast(g).ast))))}function Po(h,g){return new T0(p(o.mk_bvudiv(n,h.ast,h.sort.cast(g).ast)))}function Lr(h){return h instanceof T0?new T0(p(o.mk_bvneg(n,h.ast))):((0,_0.assert)(h instanceof t1),new t1(p(o.mk_unary_minus(n,h.ast))))}function Ut(h,g){return h instanceof T0?new T0(p(o.mk_bvsrem(n,h.ast,h.sort.cast(g).ast))):((0,_0.assert)(h instanceof t1),new t1(p(o.mk_mod(n,h.ast,h.sort.cast(g).ast))))}class t1 extends K1{add(g){return y2(this,g)}mul(g){return Uo(this,g)}sub(g){return cr(this,g)}pow(g){return new t1(p(o.mk_power(n,this.ast,this.sort.cast(g).ast)))}div(g){return x2(this,g)}mod(g){return Ut(this,g)}neg(){return Lr(this)}le(g){return E0(this,g)}lt(g){return D0(this,g)}gt(g){return o1(this,g)}ge(g){return W0(this,g)}}class Yo extends t1{value(){return BigInt(this.asString())}asString(){return o.get_numeral_string(n,this.ast)}asBinary(){return o.get_numeral_binary_string(n,this.ast)}}class ir extends t1{value(){return{numerator:this.numerator().value(),denominator:this.denominator().value()}}numerator(){return new Yo(o.get_numerator(n,this.ast))}denominator(){return new Yo(o.get_denominator(n,this.ast))}asNumber(){let{numerator:g,denominator:F}=this.value(),r0=g/F;return Number(r0)+Number(g-r0*F)/Number(F)}asDecimal(g=Number.parseInt(f("precision")??L_.toString())){return o.get_numeral_decimal_string(n,this.ast,g)}asString(){return o.get_numeral_string(n,this.ast)}}class Vr extends io{size(){return o.get_bv_sort_size(n,this.ptr)}subsort(g){return a1(g)&&this.size()<g.size()}cast(g){return d0(g)?(u(g),g):((0,_0.assert)(!q4(g),"Can't convert rational to BitVec"),p1.val(g,this.size()))}}class T0 extends K1{size(){return this.sort.size()}add(g){return y2(this,g)}mul(g){return Uo(this,g)}sub(g){return cr(this,g)}sdiv(g){return x2(this,g)}udiv(g){return Po(this,g)}smod(g){return Ut(this,g)}urem(g){return new T0(p(o.mk_bvurem(n,this.ast,this.sort.cast(g).ast)))}srem(g){return new T0(p(o.mk_bvsrem(n,this.ast,this.sort.cast(g).ast)))}neg(){return Lr(this)}or(g){return new T0(p(o.mk_bvor(n,this.ast,this.sort.cast(g).ast)))}and(g){return new T0(p(o.mk_bvand(n,this.ast,this.sort.cast(g).ast)))}nand(g){return new T0(p(o.mk_bvnand(n,this.ast,this.sort.cast(g).ast)))}xor(g){return new T0(p(o.mk_bvxor(n,this.ast,this.sort.cast(g).ast)))}xnor(g){return new T0(p(o.mk_bvxnor(n,this.ast,this.sort.cast(g).ast)))}shr(g){return new T0(p(o.mk_bvashr(n,this.ast,this.sort.cast(g).ast)))}lshr(g){return new T0(p(o.mk_bvlshr(n,this.ast,this.sort.cast(g).ast)))}shl(g){return new T0(p(o.mk_bvshl(n,this.ast,this.sort.cast(g).ast)))}rotateRight(g){return new T0(p(o.mk_ext_rotate_right(n,this.ast,this.sort.cast(g).ast)))}rotateLeft(g){return new T0(p(o.mk_ext_rotate_left(n,this.ast,this.sort.cast(g).ast)))}not(){return new T0(p(o.mk_bvnot(n,this.ast)))}extract(g,F){return jo(g,F,this)}signExt(g){return new T0(p(o.mk_sign_ext(n,g,this.ast)))}zeroExt(g){return new T0(p(o.mk_zero_ext(n,g,this.ast)))}repeat(g){return new T0(p(o.mk_repeat(n,g,this.ast)))}sle(g){return D1(this,g)}ule(g){return M1(this,g)}slt(g){return uo(this,g)}ult(g){return m1(this,g)}sge(g){return bt(this,g)}uge(g){return F1(this,g)}sgt(g){return Zo(this,g)}ugt(g){return L0(this,g)}redAnd(){return new T0(p(o.mk_bvredand(n,this.ast)))}redOr(){return new T0(p(o.mk_bvredor(n,this.ast)))}addNoOverflow(g,F){return new U0(p(o.mk_bvadd_no_overflow(n,this.ast,this.sort.cast(g).ast,F)))}addNoUnderflow(g){return new U0(p(o.mk_bvadd_no_underflow(n,this.ast,this.sort.cast(g).ast)))}subNoOverflow(g){return new U0(p(o.mk_bvsub_no_overflow(n,this.ast,this.sort.cast(g).ast)))}subNoUndeflow(g,F){return new U0(p(o.mk_bvsub_no_underflow(n,this.ast,this.sort.cast(g).ast,F)))}sdivNoOverflow(g){return new U0(p(o.mk_bvsdiv_no_overflow(n,this.ast,this.sort.cast(g).ast)))}mulNoOverflow(g,F){return new U0(p(o.mk_bvmul_no_overflow(n,this.ast,this.sort.cast(g).ast,F)))}mulNoUndeflow(g){return new U0(p(o.mk_bvmul_no_underflow(n,this.ast,this.sort.cast(g).ast)))}negNoOverflow(){return new U0(p(o.mk_bvneg_no_overflow(n,this.ast)))}}class m2 extends T0{value(){return BigInt(this.asString())}asSignedValue(){let g=this.value(),F=BigInt(this.size());return g>=2n**(F-1n)&&(g=g-2n**F),g<(-2n)**(F-1n)&&(g=g+2n**F),g}asString(){return o.get_numeral_string(n,this.ast)}asBinaryString(){return o.get_numeral_binary_string(n,this.ast)}}class Hr extends io{domain(){return C(p(o.get_array_sort_domain(n,this.ptr)))}domain_n(g){return C(p(o.get_array_sort_domain_n(n,this.ptr,g)))}range(){return C(p(o.get_array_sort_range(n,this.ptr)))}}class g0 extends K1{domain(){return this.sort.domain()}domain_n(g){return this.sort.domain_n(g)}range(){return this.sort.range()}select(...g){return w1(this,...g)}store(...g){return Z1(this,...g)}}class V0 extends K1{is_forall(){return o.is_quantifier_forall(n,this.ast)}is_exists(){return o.is_quantifier_exists(n,this.ast)}is_lambda(){return o.is_lambda(n,this.ast)}weight(){return o.get_quantifier_weight(n,this.ast)}num_patterns(){return o.get_quantifier_num_patterns(n,this.ast)}pattern(g){return new Mr(p(o.get_quantifier_pattern_ast(n,this.ast,g)))}num_no_patterns(){return o.get_quantifier_num_no_patterns(n,this.ast)}no_pattern(g){return B(p(o.get_quantifier_no_pattern_ast(n,this.ast,g)))}body(){return B(p(o.get_quantifier_body(n,this.ast)))}num_vars(){return o.get_quantifier_num_bound(n,this.ast)}var_name(g){return H(o.get_quantifier_bound_name(n,this.ast,g))}var_sort(g){return C(p(o.get_quantifier_bound_sort(n,this.ast,g)))}children(){return[this.body()]}}class z1 extends V0{not(){return Zt(this)}and(g){return Lt(this,g)}or(g){return go(this,g)}xor(g){return co(this,g)}implies(g){return bo(this,g)}iff(g){return ko(this,g)}}class j1 extends V0{domain(){return this.sort.domain()}domain_n(g){return this.sort.domain_n(g)}range(){return this.sort.range()}select(...g){return w1(this,...g)}store(...g){return Z1(this,...g)}}class v1{constructor(g=o.mk_ast_vector(n)){this.ptr=g,this.ctx=V1,o.ast_vector_inc_ref(n,g),t.register(this,()=>o.ast_vector_dec_ref(n,g))}length(){return o.ast_vector_size(n,this.ptr)}[Symbol.iterator](){return this.values()}*entries(){let g=this.length();for(let F=0;F<g;F++)yield[F,this.get(F)]}*keys(){for(let[g]of this.entries())yield g}*values(){for(let[,g]of this.entries())yield g}get(g,F){let r0=this.length();if(g<0&&(g+=r0),g>=r0)throw new RangeError(`expected from index ${g} to be less than length ${r0}`);if(F===void 0)return k(p(o.ast_vector_get(n,this.ptr,g)));if(F<0&&(F+=r0),F>=r0)throw new RangeError(`expected to index ${F} to be less than length ${r0}`);let P0=[];for(let Y0=g;Y0<F;Y0++)P0.push(k(p(o.ast_vector_get(n,this.ptr,Y0))));return P0}set(g,F){if(u(F),g>=this.length())throw new RangeError(`expected index ${g} to be less than length ${this.length()}`);p(o.ast_vector_set(n,this.ptr,g,F.ast))}push(g){u(g),p(o.ast_vector_push(n,this.ptr,g.ast))}resize(g){p(o.ast_vector_resize(n,this.ptr,g))}has(g){u(g);for(let F of this.values())if(F.eqIdentity(g))return!0;return!1}sexpr(){return p(o.ast_vector_to_string(n,this.ptr))}}class oe{constructor(g=o.mk_ast_map(n)){this.ptr=g,this.ctx=V1,o.ast_map_inc_ref(n,g),t.register(this,()=>o.ast_map_dec_ref(n,g))}[Symbol.iterator](){return this.entries()}get size(){return o.ast_map_size(n,this.ptr)}*entries(){for(let g of this.keys())yield[g,this.get(g)]}keys(){return new v1(o.ast_map_keys(n,this.ptr))}*values(){for(let[g,F]of this.entries())yield F}get(g){return k(p(o.ast_map_find(n,this.ptr,g.ast)))}set(g,F){p(o.ast_map_insert(n,this.ptr,g.ast,F.ast))}delete(g){p(o.ast_map_erase(n,this.ptr,g.ast))}clear(){p(o.ast_map_reset(n,this.ptr))}has(g){return p(o.ast_map_contains(n,this.ptr,g.ast))}sexpr(){return p(o.ast_map_to_string(n,this.ptr))}}function wa(h,...g){u(h);let F=[],r0=[];for(let[P0,Y0]of g)u(P0),u(Y0),F.push(P0.ast),r0.push(Y0.ast);return B(p(o.substitute(n,h.ast,F,r0)))}function X4(h){let g=[],F=[],r0=[],P0=[],Y0=new v1(p(o.parse_smtlib2_string(n,h,g,F,r0,P0)));if(Y0.length()!==1)throw new Error("Expected exactly one AST. Instead got "+Y0.length()+": "+Y0.sexpr());return Y0.get(0)}let V1={ptr:n,name:x,Solver:Ao,Optimize:Fo,Model:tt,Tactic:Sr,AstVector:v1,AstMap:oe,interrupt:q,isModel:P,isAst:U,isSort:Q,isFuncDecl:w0,isFuncInterp:t0,isApp:b0,isConst:e0,isExpr:d0,isVar:l0,isAppOf:D,isBool:X,isTrue:o0,isFalse:J,isAnd:c0,isOr:v0,isImplies:u0,isNot:f0,isEq:k0,isDistinct:A0,isQuantifier:C0,isArith:N0,isArithSort:X0,isInt:e1,isIntVal:I0,isIntSort:B0,isReal:$0,isRealVal:R0,isRealSort:y0,isBitVecSort:a1,isBitVec:Z,isBitVecVal:R,isArraySort:I,isArray:W,isConstArray:a0,isProbe:s0,isTactic:H0,isAstVector:x0,eqIdentity:K0,getVarIndex:G0,from:M0,solve:n1,Sort:A1,Function:y1,RecFunc:q1,Bool:k1,Int:Q0,Real:S0,BitVec:p1,Array:g1,If:x1,Distinct:J1,Const:l1,Consts:I1,FreshConst:J0,Var:c1,Implies:bo,Iff:ko,Eq:er,Xor:co,Not:Zt,And:Lt,Or:go,ForAll:V,Exists:E,Lambda:z,ToReal:_,ToInt:S,IsInt:T,Sqrt:$,Cbrt:j,BV2Int:N,Int2BV:G,Concat:p0,Cond:z0,LT:D0,GT:o1,LE:E0,GE:W0,ULT:m1,UGT:L0,ULE:M1,UGE:F1,SLT:uo,SGT:Zo,SLE:D1,SGE:bt,Sum:y2,Sub:cr,Product:Uo,Div:x2,BUDiv:Po,Neg:Lr,Mod:Ut,Select:w1,Store:Z1,Extract:jo,substitute:wa,simplify:u1,ast_from_string:X4};return t.register(V1,()=>o.del_context(n)),V1}return{enableTrace:r,disableTrace:e,getVersion:a,getVersionString:c,getFullVersion:i,openLog:l,appendLog:w,getParam:f,setParam:b,resetParams:y,Context:m}}a5.createApi=V_});var wp=b1(h2=>{"use strict";var H_=h2&&h2.__createBinding||(Object.create?function(o,t,r,e){e===void 0&&(e=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(o,e,a)}:function(o,t,r,e){e===void 0&&(e=r),o[e]=t[r]}),sp=h2&&h2.__exportStar||function(o,t){for(var r in o)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&H_(t,o,r)};Object.defineProperty(h2,"__esModule",{value:!0});sp(dp(),h2);sp(Y4(),h2)});var bp=b1(rr=>{"use strict";var E_=rr&&rr.__createBinding||(Object.create?function(o,t,r,e){e===void 0&&(e=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(o,e,a)}:function(o,t,r,e){e===void 0&&(e=r),o[e]=t[r]}),vp=rr&&rr.__exportStar||function(o,t){for(var r in o)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&E_(t,o,r)};Object.defineProperty(rr,"__esModule",{value:!0});rr.init=void 0;var B_=wp(),A_=Fn();vp(Y4(),rr);vp(An(),rr);async function F_(){let o=window.initZ3;if(o===void 0)throw new Error("initZ3 was not imported correctly. Please consult documentation on how to load Z3 in browser");let t=await(0,A_.init)(o),r=(0,B_.createApi)(t.Z3);return{...t,...r}}rr.init=F_});var sa=K(n0()),hp=K(hs());var ao=K(n0()),Mn=K(W1());var Ss=K(n0()),{createElement:Ne,createContext:Yf,createRef:rM,forwardRef:Ls,useCallback:Go,useContext:Vs,useEffect:R2,useImperativeHandle:Hs,useLayoutEffect:qf,useMemo:Xf,useRef:Qo,useState:Pe}=Ss,fs=Ss[`useId${Math.random()}`.slice(0,5)],Wf=qf,zc=Yf(null);zc.displayName="PanelGroupContext";var T2=Wf,$f=typeof fs=="function"?fs:()=>null,Kf=0;function S7(o=null){let t=$f(),r=Qo(o||t||null);return r.current===null&&(r.current=""+Kf++),o??r.current}function Es({children:o,className:t="",collapsedSize:r,collapsible:e,defaultSize:a,forwardedRef:c,id:i,maxSize:l,minSize:w,onCollapse:b,onExpand:y,onResize:f,order:m,style:x,tagName:s="div",...d}){let n=Vs(zc);if(n===null)throw Error("Panel components must be rendered within a PanelGroup container");let{collapsePanel:u,expandPanel:v,getPanelSize:p,getPanelStyle:M,groupId:H,isPanelCollapsed:L,reevaluatePanelConstraints:k,registerPanel:C,resizePanel:B,unregisterPanel:O}=n,A=S7(i),Y=Qo({callbacks:{onCollapse:b,onExpand:y,onResize:f},constraints:{collapsedSize:r,collapsible:e,defaultSize:a,maxSize:l,minSize:w},id:A,idIsFromProps:i!==void 0,order:m});Qo({didLogMissingDefaultSizeWarning:!1}),T2(()=>{let{callbacks:P,constraints:U}=Y.current,Q={...U};Y.current.id=A,Y.current.idIsFromProps=i!==void 0,Y.current.order=m,P.onCollapse=b,P.onExpand=y,P.onResize=f,U.collapsedSize=r,U.collapsible=e,U.defaultSize=a,U.maxSize=l,U.minSize=w,(Q.collapsedSize!==U.collapsedSize||Q.collapsible!==U.collapsible||Q.maxSize!==U.maxSize||Q.minSize!==U.minSize)&&k(Y.current,Q)}),T2(()=>{let P=Y.current;return C(P),()=>{O(P)}},[m,A,C,O]),Hs(c,()=>({collapse:()=>{u(Y.current)},expand:P=>{v(Y.current,P)},getId(){return A},getSize(){return p(Y.current)},isCollapsed(){return L(Y.current)},isExpanded(){return!L(Y.current)},resize:P=>{B(Y.current,P)}}),[u,v,p,L,A,B]);let q=M(Y.current,a);return Ne(s,{...d,children:o,className:t,id:i,style:{...q,...x},"data-panel":"","data-panel-collapsible":e||void 0,"data-panel-group-id":H,"data-panel-id":A,"data-panel-size":parseFloat(""+q.flexGrow).toFixed(1)})}var D2=Ls((o,t)=>Ne(Es,{...o,forwardedRef:t}));Es.displayName="Panel";D2.displayName="forwardRef(Panel)";var Gf;function Qf(){return Gf}var C7=null,Jf=!0,Qr=null;function oy(o,t){if(t){let r=(t&Os)!==0,e=(t&Ns)!==0,a=(t&Rs)!==0,c=(t&Ts)!==0;if(r)return a?"se-resize":c?"ne-resize":"e-resize";if(e)return a?"sw-resize":c?"nw-resize":"w-resize";if(a)return"s-resize";if(c)return"n-resize"}switch(o){case"horizontal":return"ew-resize";case"intersection":return"move";case"vertical":return"ns-resize"}}function ty(){Qr!==null&&(document.head.removeChild(Qr),C7=null,Qr=null)}function _7(o,t){if(!Jf)return;let r=oy(o,t);if(C7!==r){if(C7=r,Qr===null){Qr=document.createElement("style");let e=Qf();e&&Qr.setAttribute("nonce",e),document.head.appendChild(Qr)}Qr.innerHTML=`*{cursor: ${r}!important;}`}}function Bs(o){return o.type==="keydown"}function As(o){return o.type.startsWith("pointer")}function Fs(o){return o.type.startsWith("mouse")}function kc(o){if(As(o)){if(o.isPrimary)return{x:o.clientX,y:o.clientY}}else if(Fs(o))return{x:o.clientX,y:o.clientY};return{x:1/0,y:1/0}}function ry(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}function ey(o,t,r){return r?o.x<t.x+t.width&&o.x+o.width>t.x&&o.y<t.y+t.height&&o.y+o.height>t.y:o.x<=t.x+t.width&&o.x+o.width>=t.x&&o.y<=t.y+t.height&&o.y+o.height>=t.y}function ay(o,t){if(o===t)throw new Error("Cannot compare node with itself");let r={a:ms(o),b:ms(t)},e;for(;r.a.at(-1)===r.b.at(-1);)o=r.a.pop(),t=r.b.pop(),e=o;Z0(e,"Stacking order can only be calculated for elements with a common ancestor");let a={a:xs(ys(r.a)),b:xs(ys(r.b))};if(a.a===a.b){let c=e.childNodes,i={a:r.a.at(-1),b:r.b.at(-1)},l=c.length;for(;l--;){let w=c[l];if(w===i.a)return 1;if(w===i.b)return-1}}return Math.sign(a.a-a.b)}var cy=/\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;function iy(o){var t;let r=getComputedStyle((t=Ps(o))!==null&&t!==void 0?t:o).display;return r==="flex"||r==="inline-flex"}function ny(o){let t=getComputedStyle(o);return!!(t.position==="fixed"||t.zIndex!=="auto"&&(t.position!=="static"||iy(o))||+t.opacity<1||"transform"in t&&t.transform!=="none"||"webkitTransform"in t&&t.webkitTransform!=="none"||"mixBlendMode"in t&&t.mixBlendMode!=="normal"||"filter"in t&&t.filter!=="none"||"webkitFilter"in t&&t.webkitFilter!=="none"||"isolation"in t&&t.isolation==="isolate"||cy.test(t.willChange)||t.webkitOverflowScrolling==="touch")}function ys(o){let t=o.length;for(;t--;){let r=o[t];if(Z0(r,"Missing node"),ny(r))return r}return null}function xs(o){return o&&Number(getComputedStyle(o).zIndex)||0}function ms(o){let t=[];for(;o;)t.push(o),o=Ps(o);return t}function Ps(o){let{parentNode:t}=o;return t&&t instanceof ShadowRoot?t.host:t}var Os=1,Ns=2,Rs=4,Ts=8,ly=ry()==="coarse",Rt=[],Oe=!1,Jr=new Map,_c=new Map,l4=new Set;function dy(o,t,r,e,a){var c;let{ownerDocument:i}=t,l={direction:r,element:t,hitAreaMargins:e,setResizeHandlerState:a},w=(c=Jr.get(i))!==null&&c!==void 0?c:0;return Jr.set(i,w+1),l4.add(l),xc(),function(){var y;_c.delete(o),l4.delete(l);let f=(y=Jr.get(i))!==null&&y!==void 0?y:1;if(Jr.set(i,f-1),xc(),f===1&&Jr.delete(i),Rt.includes(l)){let m=Rt.indexOf(l);m>=0&&Rt.splice(m,1),V7(),a("up",!0,null)}}}function zs(o){let{target:t}=o,{x:r,y:e}=kc(o);Oe=!0,L7({target:t,x:r,y:e}),xc(),Rt.length>0&&(mc("down",o),o.preventDefault(),o.stopPropagation())}function c4(o){let{x:t,y:r}=kc(o);if(Oe&&o.buttons===0&&(Oe=!1,mc("up",o)),!Oe){let{target:e}=o;L7({target:e,x:t,y:r})}mc("move",o),V7(),Rt.length>0&&o.preventDefault()}function Ee(o){let{target:t}=o,{x:r,y:e}=kc(o);_c.clear(),Oe=!1,Rt.length>0&&o.preventDefault(),mc("up",o),L7({target:t,x:r,y:e}),V7(),xc()}function L7({target:o,x:t,y:r}){Rt.splice(0);let e=null;(o instanceof HTMLElement||o instanceof SVGElement)&&(e=o),l4.forEach(a=>{let{element:c,hitAreaMargins:i}=a,l=c.getBoundingClientRect(),{bottom:w,left:b,right:y,top:f}=l,m=ly?i.coarse:i.fine;if(t>=b-m&&t<=y+m&&r>=f-m&&r<=w+m){if(e!==null&&document.contains(e)&&c!==e&&!c.contains(e)&&!e.contains(c)&&ay(e,c)>0){let s=e,d=!1;for(;s&&!s.contains(c);){if(ey(s.getBoundingClientRect(),l,!0)){d=!0;break}s=s.parentElement}if(d)return}Rt.push(a)}})}function M7(o,t){_c.set(o,t)}function V7(){let o=!1,t=!1;Rt.forEach(e=>{let{direction:a}=e;a==="horizontal"?o=!0:t=!0});let r=0;_c.forEach(e=>{r|=e}),o&&t?_7("intersection",r):o?_7("horizontal",r):t?_7("vertical",r):ty()}function xc(){Jr.forEach((o,t)=>{let{body:r}=t;r.removeEventListener("contextmenu",Ee),r.removeEventListener("pointerdown",zs),r.removeEventListener("pointerleave",c4),r.removeEventListener("pointermove",c4)}),window.removeEventListener("pointerup",Ee),window.removeEventListener("pointercancel",Ee),l4.size>0&&(Oe?(Rt.length>0&&Jr.forEach((o,t)=>{let{body:r}=t;o>0&&(r.addEventListener("contextmenu",Ee),r.addEventListener("pointerleave",c4),r.addEventListener("pointermove",c4))}),window.addEventListener("pointerup",Ee),window.addEventListener("pointercancel",Ee)):Jr.forEach((o,t)=>{let{body:r}=t;o>0&&(r.addEventListener("pointerdown",zs,{capture:!0}),r.addEventListener("pointermove",c4))}))}function mc(o,t){l4.forEach(r=>{let{setResizeHandlerState:e}=r,a=Rt.includes(r);e(o,a,t)})}function sy(){let[o,t]=Pe(0);return Go(()=>t(r=>r+1),[])}function Z0(o,t){if(!o)throw console.error(t),Error(t)}var H7=10;function I2(o,t,r=H7){return o.toFixed(r)===t.toFixed(r)?0:o>t?1:-1}function hr(o,t,r=H7){return I2(o,t,r)===0}function lt(o,t,r){return I2(o,t,r)===0}function wy(o,t,r){if(o.length!==t.length)return!1;for(let e=0;e<o.length;e++){let a=o[e],c=t[e];if(!lt(a,c,r))return!1}return!0}function Fe({panelConstraints:o,panelIndex:t,size:r}){let e=o[t];Z0(e!=null,`Panel constraints not found for index ${t}`);let{collapsedSize:a=0,collapsible:c,maxSize:i=100,minSize:l=0}=e;if(I2(r,l)<0)if(c){let w=(a+l)/2;I2(r,w)<0?r=a:r=l}else r=l;return r=Math.min(i,r),r=parseFloat(r.toFixed(H7)),r}function i4({delta:o,initialLayout:t,panelConstraints:r,pivotIndices:e,prevLayout:a,trigger:c}){if(lt(o,0))return t;let i=[...t],[l,w]=e;Z0(l!=null,"Invalid first pivot index"),Z0(w!=null,"Invalid second pivot index");let b=0;if(c==="keyboard"){{let f=o<0?w:l,m=r[f];Z0(m,`Panel constraints not found for index ${f}`);let{collapsedSize:x=0,collapsible:s,minSize:d=0}=m;if(s){let n=t[f];if(Z0(n!=null,`Previous layout not found for panel index ${f}`),lt(n,x)){let u=d-n;I2(u,Math.abs(o))>0&&(o=o<0?0-u:u)}}}{let f=o<0?l:w,m=r[f];Z0(m,`No panel constraints found for index ${f}`);let{collapsedSize:x=0,collapsible:s,minSize:d=0}=m;if(s){let n=t[f];if(Z0(n!=null,`Previous layout not found for panel index ${f}`),lt(n,d)){let u=n-x;I2(u,Math.abs(o))>0&&(o=o<0?0-u:u)}}}}{let f=o<0?1:-1,m=o<0?w:l,x=0;for(;;){let d=t[m];Z0(d!=null,`Previous layout not found for panel index ${m}`);let u=Fe({panelConstraints:r,panelIndex:m,size:100})-d;if(x+=u,m+=f,m<0||m>=r.length)break}let s=Math.min(Math.abs(o),Math.abs(x));o=o<0?0-s:s}{let m=o<0?l:w;for(;m>=0&&m<r.length;){let x=Math.abs(o)-Math.abs(b),s=t[m];Z0(s!=null,`Previous layout not found for panel index ${m}`);let d=s-x,n=Fe({panelConstraints:r,panelIndex:m,size:d});if(!lt(s,n)&&(b+=s-n,i[m]=n,b.toPrecision(3).localeCompare(Math.abs(o).toPrecision(3),void 0,{numeric:!0})>=0))break;o<0?m--:m++}}if(wy(a,i))return a;{let f=o<0?w:l,m=t[f];Z0(m!=null,`Previous layout not found for panel index ${f}`);let x=m+b,s=Fe({panelConstraints:r,panelIndex:f,size:x});if(i[f]=s,!lt(s,x)){let d=x-s,u=o<0?w:l;for(;u>=0&&u<r.length;){let v=i[u];Z0(v!=null,`Previous layout not found for panel index ${u}`);let p=v+d,M=Fe({panelConstraints:r,panelIndex:u,size:p});if(lt(v,M)||(d-=M-v,i[u]=M),lt(d,0))break;o>0?u--:u++}}}let y=i.reduce((f,m)=>m+f,0);return lt(y,100)?i:a}function vy({layout:o,panelsArray:t,pivotIndices:r}){let e=0,a=100,c=0,i=0,l=r[0];Z0(l!=null,"No pivot index found"),t.forEach((f,m)=>{let{constraints:x}=f,{maxSize:s=100,minSize:d=0}=x;m===l?(e=d,a=s):(c+=d,i+=s)});let w=Math.min(a,100-c),b=Math.max(e,100-i),y=o[l];return{valueMax:w,valueMin:b,valueNow:y}}function d4(o,t=document){return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${o}"]`))}function Is(o,t,r=document){let a=d4(o,r).findIndex(c=>c.getAttribute("data-panel-resize-handle-id")===t);return a??null}function Ds(o,t,r){let e=Is(o,t,r);return e!=null?[e,e+1]:[-1,-1]}function Zs(o,t=document){var r;if(t instanceof HTMLElement&&(t==null||(r=t.dataset)===null||r===void 0?void 0:r.panelGroupId)==o)return t;let e=t.querySelector(`[data-panel-group][data-panel-group-id="${o}"]`);return e||null}function Mc(o,t=document){let r=t.querySelector(`[data-panel-resize-handle-id="${o}"]`);return r||null}function by(o,t,r,e=document){var a,c,i,l;let w=Mc(t,e),b=d4(o,e),y=w?b.indexOf(w):-1,f=(a=(c=r[y])===null||c===void 0?void 0:c.id)!==null&&a!==void 0?a:null,m=(i=(l=r[y+1])===null||l===void 0?void 0:l.id)!==null&&i!==void 0?i:null;return[f,m]}function gy({committedValuesRef:o,eagerValuesRef:t,groupId:r,layout:e,panelDataArray:a,panelGroupElement:c,setLayout:i}){Qo({didWarnAboutMissingResizeHandle:!1}),T2(()=>{if(!c)return;let l=d4(r,c);for(let w=0;w<a.length-1;w++){let{valueMax:b,valueMin:y,valueNow:f}=vy({layout:e,panelsArray:a,pivotIndices:[w,w+1]}),m=l[w];if(m!=null){let x=a[w];Z0(x,`No panel data found for index "${w}"`),m.setAttribute("aria-controls",x.id),m.setAttribute("aria-valuemax",""+Math.round(b)),m.setAttribute("aria-valuemin",""+Math.round(y)),m.setAttribute("aria-valuenow",f!=null?""+Math.round(f):"")}}return()=>{l.forEach((w,b)=>{w.removeAttribute("aria-controls"),w.removeAttribute("aria-valuemax"),w.removeAttribute("aria-valuemin"),w.removeAttribute("aria-valuenow")})}},[r,e,a,c]),R2(()=>{if(!c)return;let l=t.current;Z0(l,"Eager values not found");let{panelDataArray:w}=l,b=Zs(r,c);Z0(b!=null,`No group found for id "${r}"`);let y=d4(r,c);Z0(y,`No resize handles found for group id "${r}"`);let f=y.map(m=>{let x=m.getAttribute("data-panel-resize-handle-id");Z0(x,"Resize handle element has no handle id attribute");let[s,d]=by(r,x,w,c);if(s==null||d==null)return()=>{};let n=u=>{if(!u.defaultPrevented)switch(u.key){case"Enter":{u.preventDefault();let v=w.findIndex(p=>p.id===s);if(v>=0){let p=w[v];Z0(p,`No panel data found for index ${v}`);let M=e[v],{collapsedSize:H=0,collapsible:L,minSize:k=0}=p.constraints;if(M!=null&&L){let C=i4({delta:lt(M,H)?k-H:H-M,initialLayout:e,panelConstraints:w.map(B=>B.constraints),pivotIndices:Ds(r,x,c),prevLayout:e,trigger:"keyboard"});e!==C&&i(C)}}break}}};return m.addEventListener("keydown",n),()=>{m.removeEventListener("keydown",n)}});return()=>{f.forEach(m=>m())}},[c,o,t,r,e,a,i])}function ks(o,t){if(o.length!==t.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!==t[r])return!1;return!0}function js(o,t){let r=o==="horizontal",{x:e,y:a}=kc(t);return r?e:a}function uy(o,t,r,e,a){let c=r==="horizontal",i=Mc(t,a);Z0(i,`No resize handle element found for id "${t}"`);let l=i.getAttribute("data-panel-group-id");Z0(l,"Resize handle element has no group id attribute");let{initialCursorPosition:w}=e,b=js(r,o),y=Zs(l,a);Z0(y,`No group element found for id "${l}"`);let f=y.getBoundingClientRect(),m=c?f.width:f.height;return(b-w)/m*100}function py(o,t,r,e,a,c){if(Bs(o)){let i=r==="horizontal",l=0;o.shiftKey?l=100:a!=null?l=a:l=10;let w=0;switch(o.key){case"ArrowDown":w=i?0:l;break;case"ArrowLeft":w=i?-l:0;break;case"ArrowRight":w=i?l:0;break;case"ArrowUp":w=i?0:-l;break;case"End":w=100;break;case"Home":w=-100;break}return w}else return e==null?0:uy(o,t,r,e,c)}function hy({panelDataArray:o}){let t=Array(o.length),r=o.map(c=>c.constraints),e=0,a=100;for(let c=0;c<o.length;c++){let i=r[c];Z0(i,`Panel constraints not found for index ${c}`);let{defaultSize:l}=i;l!=null&&(e++,t[c]=l,a-=l)}for(let c=0;c<o.length;c++){let i=r[c];Z0(i,`Panel constraints not found for index ${c}`);let{defaultSize:l}=i;if(l!=null)continue;let w=o.length-e,b=a/w;e++,t[c]=b,a-=b}return t}function Be(o,t,r){t.forEach((e,a)=>{let c=o[a];Z0(c,`Panel data not found for index ${a}`);let{callbacks:i,constraints:l,id:w}=c,{collapsedSize:b=0,collapsible:y}=l,f=r[w];if(f==null||e!==f){r[w]=e;let{onCollapse:m,onExpand:x,onResize:s}=i;s&&s(e,f),y&&(m||x)&&(x&&(f==null||hr(f,b))&&!hr(e,b)&&x(),m&&(f==null||!hr(f,b))&&hr(e,b)&&m())}})}function yc(o,t){if(o.length!==t.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!=t[r])return!1;return!0}function fy({defaultSize:o,dragState:t,layout:r,panelData:e,panelIndex:a,precision:c=3}){let i=r[a],l;return i==null?l=o!=null?o.toPrecision(c):"1":e.length===1?l="1":l=i.toPrecision(c),{flexBasis:0,flexGrow:l,flexShrink:1,overflow:"hidden",pointerEvents:t!==null?"none":void 0}}function yy(o,t=10){let r=null;return(...a)=>{r!==null&&clearTimeout(r),r=setTimeout(()=>{o(...a)},t)}}function _s(o){try{if(typeof localStorage<"u")o.getItem=t=>localStorage.getItem(t),o.setItem=(t,r)=>{localStorage.setItem(t,r)};else throw new Error("localStorage not supported in this environment")}catch(t){console.error(t),o.getItem=()=>null,o.setItem=()=>{}}}function Us(o){return`react-resizable-panels:${o}`}function Ys(o){return o.map(t=>{let{constraints:r,id:e,idIsFromProps:a,order:c}=t;return a?e:c?`${c}:${JSON.stringify(r)}`:JSON.stringify(r)}).sort((t,r)=>t.localeCompare(r)).join(",")}function qs(o,t){try{let r=Us(o),e=t.getItem(r);if(e){let a=JSON.parse(e);if(typeof a=="object"&&a!=null)return a}}catch{}return null}function xy(o,t,r){var e,a;let c=(e=qs(o,r))!==null&&e!==void 0?e:{},i=Ys(t);return(a=c[i])!==null&&a!==void 0?a:null}function my(o,t,r,e,a){var c;let i=Us(o),l=Ys(t),w=(c=qs(o,a))!==null&&c!==void 0?c:{};w[l]={expandToSizes:Object.fromEntries(r.entries()),layout:e};try{a.setItem(i,JSON.stringify(w))}catch(b){console.error(b)}}function Ms({layout:o,panelConstraints:t}){let r=[...o],e=r.reduce((c,i)=>c+i,0);if(r.length!==t.length)throw Error(`Invalid ${t.length} panel layout: ${r.map(c=>`${c}%`).join(", ")}`);if(!lt(e,100)&&r.length>0)for(let c=0;c<t.length;c++){let i=r[c];Z0(i!=null,`No layout data found for index ${c}`);let l=100/e*i;r[c]=l}let a=0;for(let c=0;c<t.length;c++){let i=r[c];Z0(i!=null,`No layout data found for index ${c}`);let l=Fe({panelConstraints:t,panelIndex:c,size:i});i!=l&&(a+=i-l,r[c]=l)}if(!lt(a,0))for(let c=0;c<t.length;c++){let i=r[c];Z0(i!=null,`No layout data found for index ${c}`);let l=i+a,w=Fe({panelConstraints:t,panelIndex:c,size:l});if(i!==w&&(a-=w-i,r[c]=w,lt(a,0)))break}return r}var zy=100,n4={getItem:o=>(_s(n4),n4.getItem(o)),setItem:(o,t)=>{_s(n4),n4.setItem(o,t)}},Cs={};function Xs({autoSaveId:o=null,children:t,className:r="",direction:e,forwardedRef:a,id:c=null,onLayout:i=null,keyboardResizeBy:l=null,storage:w=n4,style:b,tagName:y="div",...f}){let m=S7(c),x=Qo(null),[s,d]=Pe(null),[n,u]=Pe([]),v=sy(),p=Qo({}),M=Qo(new Map),H=Qo(0),L=Qo({autoSaveId:o,direction:e,dragState:s,id:m,keyboardResizeBy:l,onLayout:i,storage:w}),k=Qo({layout:n,panelDataArray:[],panelDataArrayChanged:!1});Qo({didLogIdAndOrderWarning:!1,didLogPanelConstraintsWarning:!1,prevPanelIds:[]}),Hs(a,()=>({getId:()=>L.current.id,getLayout:()=>{let{layout:D}=k.current;return D},setLayout:D=>{let{onLayout:X}=L.current,{layout:o0,panelDataArray:J}=k.current,c0=Ms({layout:D,panelConstraints:J.map(v0=>v0.constraints)});ks(o0,c0)||(u(c0),k.current.layout=c0,X&&X(c0),Be(J,c0,p.current))}}),[]),T2(()=>{L.current.autoSaveId=o,L.current.direction=e,L.current.dragState=s,L.current.id=m,L.current.onLayout=i,L.current.storage=w}),gy({committedValuesRef:L,eagerValuesRef:k,groupId:m,layout:n,panelDataArray:k.current.panelDataArray,setLayout:u,panelGroupElement:x.current}),R2(()=>{let{panelDataArray:D}=k.current;if(o){if(n.length===0||n.length!==D.length)return;let X=Cs[o];X==null&&(X=yy(my,zy),Cs[o]=X);let o0=[...D],J=new Map(M.current);X(o,o0,J,n,w)}},[o,n,w]),R2(()=>{});let C=Go(D=>{let{onLayout:X}=L.current,{layout:o0,panelDataArray:J}=k.current;if(D.constraints.collapsible){let c0=J.map(k0=>k0.constraints),{collapsedSize:v0=0,panelSize:u0,pivotIndices:f0}=N2(J,D,o0);if(Z0(u0!=null,`Panel size not found for panel "${D.id}"`),!hr(u0,v0)){M.current.set(D.id,u0);let A0=Ae(J,D)===J.length-1?u0-v0:v0-u0,C0=i4({delta:A0,initialLayout:o0,panelConstraints:c0,pivotIndices:f0,prevLayout:o0,trigger:"imperative-api"});yc(o0,C0)||(u(C0),k.current.layout=C0,X&&X(C0),Be(J,C0,p.current))}}},[]),B=Go((D,X)=>{let{onLayout:o0}=L.current,{layout:J,panelDataArray:c0}=k.current;if(D.constraints.collapsible){let v0=c0.map(N0=>N0.constraints),{collapsedSize:u0=0,panelSize:f0=0,minSize:k0=0,pivotIndices:A0}=N2(c0,D,J),C0=X??k0;if(hr(f0,u0)){let N0=M.current.get(D.id),X0=N0!=null&&N0>=C0?N0:C0,I0=Ae(c0,D)===c0.length-1?f0-X0:X0-f0,B0=i4({delta:I0,initialLayout:J,panelConstraints:v0,pivotIndices:A0,prevLayout:J,trigger:"imperative-api"});yc(J,B0)||(u(B0),k.current.layout=B0,o0&&o0(B0),Be(c0,B0,p.current))}}},[]),O=Go(D=>{let{layout:X,panelDataArray:o0}=k.current,{panelSize:J}=N2(o0,D,X);return Z0(J!=null,`Panel size not found for panel "${D.id}"`),J},[]),A=Go((D,X)=>{let{panelDataArray:o0}=k.current,J=Ae(o0,D);return fy({defaultSize:X,dragState:s,layout:n,panelData:o0,panelIndex:J})},[s,n]),Y=Go(D=>{let{layout:X,panelDataArray:o0}=k.current,{collapsedSize:J=0,collapsible:c0,panelSize:v0}=N2(o0,D,X);return Z0(v0!=null,`Panel size not found for panel "${D.id}"`),c0===!0&&hr(v0,J)},[]),q=Go(D=>{let{layout:X,panelDataArray:o0}=k.current,{collapsedSize:J=0,collapsible:c0,panelSize:v0}=N2(o0,D,X);return Z0(v0!=null,`Panel size not found for panel "${D.id}"`),!c0||I2(v0,J)>0},[]),P=Go(D=>{let{panelDataArray:X}=k.current;X.push(D),X.sort((o0,J)=>{let c0=o0.order,v0=J.order;return c0==null&&v0==null?0:c0==null?-1:v0==null?1:c0-v0}),k.current.panelDataArrayChanged=!0,v()},[v]);T2(()=>{if(k.current.panelDataArrayChanged){k.current.panelDataArrayChanged=!1;let{autoSaveId:D,onLayout:X,storage:o0}=L.current,{layout:J,panelDataArray:c0}=k.current,v0=null;if(D){let f0=xy(D,c0,o0);f0&&(M.current=new Map(Object.entries(f0.expandToSizes)),v0=f0.layout)}v0==null&&(v0=hy({panelDataArray:c0}));let u0=Ms({layout:v0,panelConstraints:c0.map(f0=>f0.constraints)});ks(J,u0)||(u(u0),k.current.layout=u0,X&&X(u0),Be(c0,u0,p.current))}}),T2(()=>{let D=k.current;return()=>{D.layout=[]}},[]);let U=Go(D=>{let X=!1,o0=x.current;return o0&&window.getComputedStyle(o0,null).getPropertyValue("direction")==="rtl"&&(X=!0),function(c0){c0.preventDefault();let v0=x.current;if(!v0)return()=>null;let{direction:u0,dragState:f0,id:k0,keyboardResizeBy:A0,onLayout:C0}=L.current,{layout:N0,panelDataArray:X0}=k.current,{initialLayout:e1}=f0??{},I0=Ds(k0,D,v0),B0=py(c0,D,u0,f0,A0,v0),$0=u0==="horizontal";$0&&X&&(B0=-B0);let R0=X0.map(Z=>Z.constraints),y0=i4({delta:B0,initialLayout:e1??N0,panelConstraints:R0,pivotIndices:I0,prevLayout:N0,trigger:Bs(c0)?"keyboard":"mouse-or-touch"}),a1=!yc(N0,y0);(As(c0)||Fs(c0))&&H.current!=B0&&(H.current=B0,!a1&&B0!==0?$0?M7(D,B0<0?Os:Ns):M7(D,B0<0?Rs:Ts):M7(D,0)),a1&&(u(y0),k.current.layout=y0,C0&&C0(y0),Be(X0,y0,p.current))}},[]),Q=Go((D,X)=>{let{onLayout:o0}=L.current,{layout:J,panelDataArray:c0}=k.current,v0=c0.map(N0=>N0.constraints),{panelSize:u0,pivotIndices:f0}=N2(c0,D,J);Z0(u0!=null,`Panel size not found for panel "${D.id}"`);let A0=Ae(c0,D)===c0.length-1?u0-X:X-u0,C0=i4({delta:A0,initialLayout:J,panelConstraints:v0,pivotIndices:f0,prevLayout:J,trigger:"imperative-api"});yc(J,C0)||(u(C0),k.current.layout=C0,o0&&o0(C0),Be(c0,C0,p.current))},[]),w0=Go((D,X)=>{let{layout:o0,panelDataArray:J}=k.current,{collapsedSize:c0=0,collapsible:v0}=X,{collapsedSize:u0=0,collapsible:f0,maxSize:k0=100,minSize:A0=0}=D.constraints,{panelSize:C0}=N2(J,D,o0);C0!=null&&(v0&&f0&&hr(C0,c0)?hr(c0,u0)||Q(D,u0):C0<A0?Q(D,A0):C0>k0&&Q(D,k0))},[Q]),t0=Go((D,X)=>{let{direction:o0}=L.current,{layout:J}=k.current;if(!x.current)return;let c0=Mc(D,x.current);Z0(c0,`Drag handle element not found for id "${D}"`);let v0=js(o0,X);d({dragHandleId:D,dragHandleRect:c0.getBoundingClientRect(),initialCursorPosition:v0,initialLayout:J})},[]),b0=Go(()=>{d(null)},[]),e0=Go(D=>{let{panelDataArray:X}=k.current,o0=Ae(X,D);o0>=0&&(X.splice(o0,1),delete p.current[D.id],k.current.panelDataArrayChanged=!0,v())},[v]),d0=Xf(()=>({collapsePanel:C,direction:e,dragState:s,expandPanel:B,getPanelSize:O,getPanelStyle:A,groupId:m,isPanelCollapsed:Y,isPanelExpanded:q,reevaluatePanelConstraints:w0,registerPanel:P,registerResizeHandle:U,resizePanel:Q,startDragging:t0,stopDragging:b0,unregisterPanel:e0,panelGroupElement:x.current}),[C,s,e,B,O,A,m,Y,q,w0,P,U,Q,t0,b0,e0]),l0={display:"flex",flexDirection:e==="horizontal"?"row":"column",height:"100%",overflow:"hidden",width:"100%"};return Ne(zc.Provider,{value:d0},Ne(y,{...f,children:t,className:r,id:c,ref:x,style:{...l0,...b},"data-panel-group":"","data-panel-group-direction":e,"data-panel-group-id":m}))}var Cc=Ls((o,t)=>Ne(Xs,{...o,forwardedRef:t}));Xs.displayName="PanelGroup";Cc.displayName="forwardRef(PanelGroup)";function Ae(o,t){return o.findIndex(r=>r===t||r.id===t.id)}function N2(o,t,r){let e=Ae(o,t),c=e===o.length-1?[e-1,e]:[e,e+1],i=r[e];return{...t.constraints,panelSize:i,pivotIndices:c}}function ky({disabled:o,handleId:t,resizeHandler:r,panelGroupElement:e}){R2(()=>{if(o||r==null||e==null)return;let a=Mc(t,e);if(a==null)return;let c=i=>{if(!i.defaultPrevented)switch(i.key){case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"End":case"Home":{i.preventDefault(),r(i);break}case"F6":{i.preventDefault();let l=a.getAttribute("data-panel-group-id");Z0(l,`No group element found for id "${l}"`);let w=d4(l,e),b=Is(l,t,e);Z0(b!==null,`No resize element found for id "${t}"`);let y=i.shiftKey?b>0?b-1:w.length-1:b+1<w.length?b+1:0;w[y].focus();break}}};return a.addEventListener("keydown",c),()=>{a.removeEventListener("keydown",c)}},[e,o,t,r])}function E7({children:o=null,className:t="",disabled:r=!1,hitAreaMargins:e,id:a,onBlur:c,onDragging:i,onFocus:l,style:w={},tabIndex:b=0,tagName:y="div",...f}){var m,x;let s=Qo(null),d=Qo({onDragging:i});R2(()=>{d.current.onDragging=i});let n=Vs(zc);if(n===null)throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");let{direction:u,groupId:v,registerResizeHandle:p,startDragging:M,stopDragging:H,panelGroupElement:L}=n,k=S7(a),[C,B]=Pe("inactive"),[O,A]=Pe(!1),[Y,q]=Pe(null),P=Qo({state:C});T2(()=>{P.current.state=C}),R2(()=>{if(r)q(null);else{let t0=p(k);q(()=>t0)}},[r,k,p]);let U=(m=e?.coarse)!==null&&m!==void 0?m:15,Q=(x=e?.fine)!==null&&x!==void 0?x:5;return R2(()=>{if(r||Y==null)return;let t0=s.current;return Z0(t0,"Element ref not attached"),dy(k,t0,u,{coarse:U,fine:Q},(e0,d0,l0)=>{if(d0)switch(e0){case"down":{B("drag"),Z0(l0,'Expected event to be defined for "down" action'),M(k,l0);let{onDragging:D}=d.current;D&&D(!0);break}case"move":{let{state:D}=P.current;D!=="drag"&&B("hover"),Z0(l0,'Expected event to be defined for "move" action'),Y(l0);break}case"up":{B("hover"),H();let{onDragging:D}=d.current;D&&D(!1);break}}else B("inactive")})},[U,u,r,Q,p,k,Y,M,H]),ky({disabled:r,handleId:k,resizeHandler:Y,panelGroupElement:L}),Ne(y,{...f,children:o,className:t,id:a,onBlur:()=>{A(!1),c?.()},onFocus:()=>{A(!0),l?.()},ref:s,role:"separator",style:{...{touchAction:"none",userSelect:"none"},...w},tabIndex:b,"data-panel-group-direction":u,"data-panel-group-id":v,"data-resize-handle":"","data-resize-handle-active":C==="drag"?"pointer":O?"keyboard":void 0,"data-resize-handle-state":C,"data-panel-resize-handle-enabled":!r,"data-panel-resize-handle-id":k})}E7.displayName="PanelResizeHandle";var Ie=K(n0());var Ws=o=>{let t,r=new Set,e=(b,y)=>{let f=typeof b=="function"?b(t):b;if(!Object.is(f,t)){let m=t;t=y??(typeof f!="object"||f===null)?f:Object.assign({},t,f),r.forEach(x=>x(t,m))}},a=()=>t,l={setState:e,getState:a,getInitialState:()=>w,subscribe:b=>(r.add(b),()=>r.delete(b))},w=t=o(e,a,l);return l},$s=o=>o?Ws(o):Ws;var B7=K(n0(),1);var _y=o=>o;function My(o,t=_y){let r=B7.default.useSyncExternalStore(o.subscribe,()=>t(o.getState()),()=>t(o.getInitialState()));return B7.default.useDebugValue(r),r}var Ks=o=>{let t=$s(o),r=e=>My(t,e);return Object.assign(r,t),r},Re=o=>o?Ks(o):Ks;var Te=(o,t)=>(...r)=>Object.assign({},o,t(...r));function Cy(o,t){let r;try{r=o()}catch{return}return{getItem:a=>{var c;let i=w=>w===null?null:JSON.parse(w,t?.reviver),l=(c=r.getItem(a))!=null?c:null;return l instanceof Promise?l.then(i):i(l)},setItem:(a,c)=>r.setItem(a,JSON.stringify(c,t?.replacer)),removeItem:a=>r.removeItem(a)}}var A7=o=>t=>{try{let r=o(t);return r instanceof Promise?r:{then(e){return A7(e)(r)},catch(e){return this}}}catch(r){return{then(e){return this},catch(e){return A7(e)(r)}}}},Sy=(o,t)=>(r,e,a)=>{let c={storage:Cy(()=>localStorage),partialize:d=>d,version:0,merge:(d,n)=>({...n,...d}),...t},i=!1,l=new Set,w=new Set,b=c.storage;if(!b)return o((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),r(...d)},e,a);let y=()=>{let d=c.partialize({...e()});return b.setItem(c.name,{state:d,version:c.version})},f=a.setState;a.setState=(d,n)=>{f(d,n),y()};let m=o((...d)=>{r(...d),y()},e,a);a.getInitialState=()=>m;let x,s=()=>{var d,n;if(!b)return;i=!1,l.forEach(v=>{var p;return v((p=e())!=null?p:m)});let u=((n=c.onRehydrateStorage)==null?void 0:n.call(c,(d=e())!=null?d:m))||void 0;return A7(b.getItem.bind(b))(c.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==c.version){if(c.migrate){let p=c.migrate(v.state,v.version);return p instanceof Promise?p.then(M=>[!0,M]):[!0,p]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var p;let[M,H]=v;if(x=c.merge(H,(p=e())!=null?p:m),r(x,!0),M)return y()}).then(()=>{u?.(x,void 0),x=e(),i=!0,w.forEach(v=>v(x))}).catch(v=>{u?.(void 0,v)})};return a.persist={setOptions:d=>{c={...c,...d},d.storage&&(b=d.storage)},clearStorage:()=>{b?.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>s(),hasHydrated:()=>i,onHydrate:d=>(l.add(d),()=>{l.delete(d)}),onFinishHydration:d=>(w.add(d),()=>{w.delete(d)})},c.skipHydration||s(),x||m},Gs=Sy;var Ly={status:"idle"},Tt=Re(Te(Ly,o=>({setExecState:t=>o(()=>t)})));var Qs=(o,t)=>{let r=o.globallyAccessibleContextKeys.join(","),e="f",a=`const ${e} = async (ctx, log) => {
      let { ${r} } = ctx;
      ${t}
    };
    ${e}`,c=window.eval(a),i=new o.ContextCtor("main"),l=c(i);return{ctx:i,resultAsync:l}};function o2(o){return Object.keys(o)}var Js=(o,t)=>o.slice(Math.max(0,o.length-t)),Sc=(o,t)=>o.startsWith(t)?o:t+o,s4=(o,t)=>o.startsWith(t)?o.slice(t.length):o,Vy=/^\s/,ow=o=>Vy.test(o),Lc=o=>o*1e3;function tw(o,t){let r=[];return JSON.stringify(o,function(e,a){if(a!=null&&typeof a=="object"){if(r.indexOf(a)>=0)return"<cyclic>";r.push(a)}return a},t)}var Vc=o=>{let t=[],r=e=>{t.forEach(a=>{try{a(e)}catch(c){console.error(c)}})};return{add:e=>t.push(e),remove:e=>{t=t.filter(a=>a!==e)},emit:e=>{o==="delayed"?setTimeout(()=>r(e),0):r(e)}}};var Gt={...Vc("delayed"),enabled:!1},rw={log:console.log,info:console.info,warn:console.warn,error:console.error};console.log("Installing console intercept..");o2(rw).forEach(o=>{console[o]=(...t)=>{rw[o](...t),Gt.enabled&&Gt.emit({level:o,args:t})}});var Hy=200,Ey=1,t2=Re(Te({entries:[]},o=>({addLogEntry:t=>o(r=>{let e=By(t),a=[...r.entries||[],e];return{entries:Js(a,Hy)}}),clearLogs:()=>o({entries:[]})})));Gt.add(o=>{t2.getState().addLogEntry(o)});t2.getState().addLogEntry({level:"meta",args:["Everything printed in this window is also accessible in browser dev-tools"]});function By({level:o,args:t}){return{id:Ey++,level:o,argsOriginal:t,parts:Ay(t)}}function Ay(o){let t=0,r=["sky","pink","lime","violet"].map(e=>`text-${e}-500`);return o.map(e=>{if(Array.isArray(e)){let a=r[t%r.length];return{name:`$Array_${t++}`,className:a,value:ew(e)}}if(typeof e=="object"&&e!=null){if(e instanceof Error)return{name:`$Error_${t++}`,className:"text-red-500",value:e.message};let a=r[t%r.length];return{name:`$Object_${t++}`,className:a,value:ew(e)}}if(typeof e=="function"){let a=r[t%r.length];return{name:`$Function_${t++}`,className:a,value:String(e)}}return""+e})}var ew=o=>JSON.parse(tw(o));function aw(o){let t=Tt(i=>i.setExecState),r=t2(i=>i.addLogEntry),e=(0,Ie.useRef)(void 0),a=(0,Ie.useCallback)(()=>{try{Gt.enabled=!1,e.current?.(),e.current=void 0,Gt.enabled=!0}catch{}},[]);return{runCode:(0,Ie.useCallback)(async i=>{try{a(),Fy(r,i.filename),t({status:"running",lastFilename:i.filename});let{ctx:l,resultAsync:w}=Qs(o,i.code);e.current=()=>{l.interrupt()},await w}catch(l){console.error(l)}finally{t({status:"idle"}),a()}},[a,r,t,o]),abortRun:(0,Ie.useCallback)(()=>{t({status:"idle"}),a()},[a,t])}}var Fy=(o,t)=>{let r=new Date;o({level:"meta",args:["-".repeat(28)]}),o({level:"meta",args:["---",r.toJSON().replaceAll("T"," ")]}),o({level:"meta",args:["--- Running:",`'${t}'`]}),o({level:"meta",args:["--- (Refresh the page if the interpreter gets stuck)"]})},Py=[{check:Oy,msg:"Are you trying to write TypeScript? Please use JavaScript only."},{check:Ny,msg:"Did you forgot await?"}];Gt.add(({args:o})=>{if(!Array.isArray(o)||!(o[0]instanceof SyntaxError))return;let t=o[0].message,r=Py.filter(e=>e.check(t));r.length!==0&&setTimeout(()=>{r.forEach(e=>console.warn(e.msg))},0)});function Oy(o){return["missing ) in parenthetical","missing ) after formal parameters","Unexpected token ':'"].some(r=>o.includes(r))}function Ny(o){return o.includes("can't execute multiple async functions")}var Hc="main-grp-id",F7="z3-editor",fr={fileSystem:`${F7}-fileSystem`,layout:`${F7}-layout`,lastFile:`${F7}-lastFile`},cw="typescript";var Ry=o=>o==="single-column"?"two-columns":"single-column",Ty={layout:"single-column",showFilesPanel:!0},Iy=Te(Ty,o=>({toggleColumnLayout:()=>o(t=>({...t,layout:Ry(t.layout)})),toggleShowFilesPanel:()=>o(t=>({...t,showFilesPanel:!t.showFilesPanel}))})),xo=Re(Gs(Iy,{name:fr.layout}));var De=K(n0()),Ec=K(W1());var Bc=(0,De.forwardRef)(({className:o,children:t,...r},e)=>{let a=xo(c=>c.layout);return De.default.createElement(D2,{...r,ref:e,className:(0,Ec.default)("flex flex-col",a==="two-columns"?"min-h-svh max-h-svh overflow-hidden":"",o)},t)}),P7=({vertical:o})=>De.default.createElement(E7,{className:(0,Ec.default)("flex items-center justify-center",o?"px-[1px]":"py-[1px]")},De.default.createElement("div",{className:(0,Ec.default)("bg-sky-500",o?"w-1 h-[10%]":"h-1 w-[5%]")}));var _b=K(W1());var Q1=K(n0()),N7=K(n0()),sw=K(W1());var nw=K(n0()),lw=K(iw());var Dy={backgroundColor:"transparent"};function dw({value:o}){return nw.default.createElement(lw.default,{src:o,collapseStringsAfterLength:15,displayDataTypes:!1,displayObjectSize:!1,enableClipboard:!0,iconStyle:"square",theme:"monokai",style:Dy,collapsed:!0})}var ww=K(W1());function vw({isAutoScroll:o}){let t=t2(e=>e.entries),r=(0,Q1.useRef)(null);return(0,N7.useEffect)(()=>{},[]),(0,N7.useEffect)(()=>{let e=r.current;e&&o&&e.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},[t,o]),Q1.default.createElement("ol",{className:"h-0 px-2 pb-4 overflow-y-auto grow"},t.map(e=>Q1.default.createElement(Zy,{key:e.id,...e})),Q1.default.createElement("li",{ref:r,className:"h-[0px] w-full"}))}var Zy=(0,Q1.memo)(jy);function jy(o){let{level:t,parts:r}=o,e=r.filter(a=>typeof a!="string");return Q1.default.createElement("li",{className:(0,sw.default)("px-1",t!=="meta"&&"mt-[1px]",t==="error"&&"bg-red-900/30",t==="warn"&&"bg-yellow-900/80",t==="meta"&&"bg-accent-900")},Q1.default.createElement("p",{className:"text-sm break-words"},r.map((a,c)=>Q1.default.createElement(Q1.Fragment,{key:c},c>0?" ":null,typeof a=="string"?a:Q1.default.createElement("span",{className:a.className},a.name)))),e.length>0?Q1.default.createElement(Uy,{values:e}):null)}function Uy({values:o}){return Q1.default.createElement("ol",{className:"pl-4"},o.map(({name:t,value:r,className:e})=>Q1.default.createElement("li",{key:t,className:"flex gap-2"},Q1.default.createElement("p",{className:(0,ww.default)("",e)},t,":"),Q1.default.createElement("div",{className:"mt-[4px]"},typeof r=="string"?r:Q1.default.createElement(dw,{value:r})))))}var v4=K(n0());var uw=K(n0());var bw=K(n0()),gw=bw.useLayoutEffect;var pw=function(t){var r=uw.default.useRef(t);return gw(function(){r.current=t}),r};var Yy={handleId:"[data-panel-resize-handle-id]"};function hw(o,t){let[r,e]=(0,v4.useState)(t.minPx),[a,c]=(0,v4.useState)(t.maxPx),i=pw(t);return(0,v4.useEffect)(()=>{let l=document.getElementById(t.groupId),w=l.querySelectorAll(Yy.handleId),b=f=>o==="width"?f.offsetWidth:f.offsetHeight,y=new ResizeObserver(()=>{let f=b(l);w.forEach(s=>{f-=b(s)});let{minPx:m,maxPx:x}=i.current;e(m/f*100),c(x/f*100)});return y.observe(l),w.forEach(f=>{y.observe(f)}),()=>{y.disconnect()}},[o,t.groupId,i]),{minSize:r,maxSize:a}}var zo=K(n0());var Mt=K(n0()),M6=K(W1());var R7=K(W1()),T7=K(n0());function Ac(o){var t=o.children,r=o.prefixCls,e=o.id,a=o.overlayInnerStyle,c=o.innerClassName,i=o.className,l=o.style;return T7.createElement("div",{className:(0,R7.default)("".concat(r,"-content"),i),style:l},T7.createElement("div",{className:(0,R7.default)("".concat(r,"-inner"),c),id:e,role:"tooltip",style:a},typeof t=="function"?t():t))}function Io(){return Io=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)({}).hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},Io.apply(null,arguments)}function O1(o){"@babel/helpers - typeof";return O1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O1(o)}function fw(o,t){if(O1(o)!="object"||!o)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var e=r.call(o,t||"default");if(O1(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function Fc(o){var t=fw(o,"string");return O1(t)=="symbol"?t:t+""}function ro(o,t,r){return(t=Fc(t))in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function yw(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),r.push.apply(r,e)}return r}function m0(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yw(Object(r),!0).forEach(function(e){ro(o,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):yw(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}function xw(o,t){if(o==null)return{};var r={};for(var e in o)if({}.hasOwnProperty.call(o,e)){if(t.includes(e))continue;r[e]=o[e]}return r}function r2(o,t){if(o==null)return{};var r,e,a=xw(o,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(e=0;e<c.length;e++)r=c[e],t.includes(r)||{}.propertyIsEnumerable.call(o,r)&&(a[r]=o[r])}return a}function I7(o){if(Array.isArray(o))return o}function mw(o,t){var r=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var e,a,c,i,l=[],w=!0,b=!1;try{if(c=(r=r.call(o)).next,t===0){if(Object(r)!==r)return;w=!1}else for(;!(w=(e=c.call(r)).done)&&(l.push(e.value),l.length!==t);w=!0);}catch(y){b=!0,a=y}finally{try{if(!w&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(b)throw a}}return l}}function b4(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,e=Array(t);r<t;r++)e[r]=o[r];return e}function g4(o,t){if(o){if(typeof o=="string")return b4(o,t);var r={}.toString.call(o).slice(8,-1);return r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set"?Array.from(o):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b4(o,t):void 0}}function D7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O0(o,t){return I7(o)||mw(o,t)||g4(o,t)||D7()}var zt=K(n0()),qw=K(a4());function Vo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Z7={},qy=[],Xy=function(t){qy.push(t)};function Wy(o,t){if(0)var r}function $y(o,t){if(0)var r}function Ky(){Z7={}}function zw(o,t,r){!t&&!Z7[r]&&(o(!1,r),Z7[r]=!0)}function j7(o,t){zw(Wy,o,t)}function Gy(o,t){zw($y,o,t)}j7.preMessage=Xy;j7.resetWarned=Ky;j7.noteOnce=Gy;var Lw=K(n0()),p4=K(Cw());var Sw=K(n0());function q7(o,t,r){var e=Sw.useRef({});return(!("value"in e.current)||r(e.current.condition,t))&&(e.current.value=o(),e.current.condition=t),e.current.value}var ox=Symbol.for("react.element"),tx=Symbol.for("react.transitional.element"),rx=Symbol.for("react.fragment");function u4(o){return o&&O1(o)==="object"&&(o.$$typeof===ox||o.$$typeof===tx)&&o.type===rx}var h4=function(t,r){typeof t=="function"?t(r):O1(t)==="object"&&t&&"current"in t&&(t.current=r)},X7=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var a=r.filter(Boolean);return a.length<=1?a[0]:function(c){r.forEach(function(i){h4(i,c)})}},Z2=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return q7(function(){return X7.apply(void 0,r)},r,function(a,c){return a.length!==c.length||a.every(function(i,l){return i!==c[l]})})},yr=function(t){var r,e;if(!t)return!1;if(Vw(t)&&t.props.propertyIsEnumerable("ref"))return!0;var a=(0,p4.isMemo)(t)?t.type.type:t.type;return!(typeof a=="function"&&!((r=a.prototype)!==null&&r!==void 0&&r.render)&&a.$$typeof!==p4.ForwardRef||typeof t=="function"&&!((e=t.prototype)!==null&&e!==void 0&&e.render)&&t.$$typeof!==p4.ForwardRef)};function Vw(o){return(0,Lw.isValidElement)(o)&&!u4(o)}var Ze=function(t){if(t&&Vw(t)){var r=t;return r.props.propertyIsEnumerable("ref")?r.props.ref:r.ref}return null};var Hw=K(n0()),ex=Hw.createContext(null),Yc=ex;function Ew(o){if(Array.isArray(o))return b4(o)}function W7(o){if(typeof Symbol<"u"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Bw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(o){return Ew(o)||W7(o)||g4(o)||Bw()}var j2=K(n0());var Ue=K(n0());var Aw=Vo()?Ue.useLayoutEffect:Ue.useEffect,ax=function(t,r){var e=Ue.useRef(!0);Aw(function(){return t(e.current)},r),Aw(function(){return e.current=!1,function(){e.current=!0}},[])};var eo=ax;var Fw=[];function $7(o,t){var r=j2.useState(function(){if(!Vo())return null;var s=document.createElement("div");return s}),e=O0(r,1),a=e[0],c=j2.useRef(!1),i=j2.useContext(Yc),l=j2.useState(Fw),w=O0(l,2),b=w[0],y=w[1],f=i||(c.current?void 0:function(s){y(function(d){var n=[s].concat(je(d));return n})});function m(){a.parentElement||document.body.appendChild(a),c.current=!0}function x(){var s;(s=a.parentElement)===null||s===void 0||s.removeChild(a),c.current=!1}return eo(function(){return o?i?i(m):m():x(),x},[o]),eo(function(){b.length&&(b.forEach(function(s){return s()}),y(Fw))},[b]),[a,f]}var jw=K(n0());function K7(o,t){if(!o)return!1;if(o.contains)return o.contains(t);for(var r=t;r;){if(r===o)return!0;r=r.parentNode}return!1}var Pw="data-rc-order",Ow="data-rc-priority",cx="rc-util-key",G7=new Map;function Nw(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=o.mark;return t?t.startsWith("data-")?t:"data-".concat(t):cx}function qc(o){if(o.attachTo)return o.attachTo;var t=document.querySelector("head");return t||document.body}function ix(o){return o==="queue"?"prependQueue":o?"prepend":"append"}function Q7(o){return Array.from((G7.get(o)||o).children).filter(function(t){return t.tagName==="STYLE"})}function Rw(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Vo())return null;var r=t.csp,e=t.prepend,a=t.priority,c=a===void 0?0:a,i=ix(e),l=i==="prependQueue",w=document.createElement("style");w.setAttribute(Pw,i),l&&c&&w.setAttribute(Ow,"".concat(c)),r!=null&&r.nonce&&(w.nonce=r?.nonce),w.innerHTML=o;var b=qc(t),y=b.firstChild;if(e){if(l){var f=(t.styles||Q7(b)).filter(function(m){if(!["prepend","prependQueue"].includes(m.getAttribute(Pw)))return!1;var x=Number(m.getAttribute(Ow)||0);return c>=x});if(f.length)return b.insertBefore(w,f[f.length-1].nextSibling),w}b.insertBefore(w,y)}else b.appendChild(w);return w}function Tw(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=qc(t);return(t.styles||Q7(r)).find(function(e){return e.getAttribute(Nw(t))===o})}function f4(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Tw(o,t);if(r){var e=qc(t);e.removeChild(r)}}function nx(o,t){var r=G7.get(o);if(!r||!K7(document,r)){var e=Rw("",t),a=e.parentNode;G7.set(o,a),o.removeChild(e)}}function Xc(o,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=qc(r),a=Q7(e),c=m0(m0({},r),{},{styles:a});nx(e,c);var i=Tw(t,c);if(i){var l,w;if((l=c.csp)!==null&&l!==void 0&&l.nonce&&i.nonce!==((w=c.csp)===null||w===void 0?void 0:w.nonce)){var b;i.nonce=(b=c.csp)===null||b===void 0?void 0:b.nonce}return i.innerHTML!==o&&(i.innerHTML=o),i}var y=Rw(o,c);return y.setAttribute(Nw(c),t),y}function lx(o){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=t;var e=r.style;e.position="absolute",e.left="0",e.top="0",e.width="100px",e.height="100px",e.overflow="scroll";var a,c;if(o){var i=getComputedStyle(o);e.scrollbarColor=i.scrollbarColor,e.scrollbarWidth=i.scrollbarWidth;var l=getComputedStyle(o,"::-webkit-scrollbar"),w=parseInt(l.width,10),b=parseInt(l.height,10);try{var y=w?"width: ".concat(l.width,";"):"",f=b?"height: ".concat(l.height,";"):"";Xc(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(y,`
`).concat(f,`
}`),t)}catch(s){console.error(s),a=w,c=b}}document.body.appendChild(r);var m=o&&a&&!isNaN(a)?a:r.offsetWidth-r.clientWidth,x=o&&c&&!isNaN(c)?c:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),f4(t),{width:m,height:x}}function Iw(o){return typeof document>"u"||!o||!(o instanceof Element)?{width:0,height:0}:lx(o)}function Dw(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var dx="rc-util-locker-".concat(Date.now()),Zw=0;function J7(o){var t=!!o,r=jw.useState(function(){return Zw+=1,"".concat(dx,"_").concat(Zw)}),e=O0(r,1),a=e[0];eo(function(){if(t){var c=Iw(document.body).width,i=Dw();Xc(`
html body {
  overflow-y: hidden;
  `.concat(i?"width: calc(100% - ".concat(c,"px);"):"",`
}`),a)}else f4(a);return function(){f4(a)}},[t,a])}var Uw=!1;function oi(o){return typeof o=="boolean"&&(Uw=o),Uw}var Yw=function(t){return t===!1?!1:!Vo()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},sx=zt.forwardRef(function(o,t){var r=o.open,e=o.autoLock,a=o.getContainer,c=o.debug,i=o.autoDestroy,l=i===void 0?!0:i,w=o.children,b=zt.useState(r),y=O0(b,2),f=y[0],m=y[1],x=f||r;zt.useEffect(function(){(l||r)&&m(r)},[r,l]);var s=zt.useState(function(){return Yw(a)}),d=O0(s,2),n=d[0],u=d[1];zt.useEffect(function(){var Y=Yw(a);u(Y??null)});var v=$7(x&&!n,c),p=O0(v,2),M=p[0],H=p[1],L=n??M;J7(e&&r&&Vo()&&(L===M||L===document.body));var k=null;if(w&&yr(w)&&t){var C=w;k=C.ref}var B=Z2(k,t);if(!x||!Vo()||n===void 0)return null;var O=L===!1||oi(),A=w;return t&&(A=zt.cloneElement(w,{ref:B})),zt.createElement(Yc.Provider,{value:H},O?A:(0,qw.createPortal)(A,L))}),Xw=sx;var ti=Xw;var x6=K(W1());var Jc=K(n0());var Ww=K(n0());function y4(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return Ww.default.Children.forEach(o,function(e){e==null&&!t.keepEmpty||(Array.isArray(e)?r=r.concat(y4(e)):u4(e)&&e.props?r=r.concat(y4(e.props.children,t)):r.push(e))}),r}var $w=K(n0()),ri=K(a4());function U2(o){return o instanceof HTMLElement||o instanceof SVGElement}function wx(o){return o&&O1(o)==="object"&&U2(o.nativeElement)?o.nativeElement:U2(o)?o:null}function Y2(o){var t=wx(o);if(t)return t;if(o instanceof $w.default.Component){var r;return(r=ri.default.findDOMNode)===null||r===void 0?void 0:r.call(ri.default,o)}return null}var $1=K(n0());var It=K(n0()),Wc=It.createContext(null);function Kw(o){var t=o.children,r=o.onBatchResize,e=It.useRef(0),a=It.useRef([]),c=It.useContext(Wc),i=It.useCallback(function(l,w,b){e.current+=1;var y=e.current;a.current.push({size:l,element:w,data:b}),Promise.resolve().then(function(){y===e.current&&(r?.(a.current),a.current=[])}),c?.(l,w,b)},[r,c]);return It.createElement(Wc.Provider,{value:i},t)}var Qw=function(){if(typeof Map<"u")return Map;function o(t,r){var e=-1;return t.some(function(a,c){return a[0]===r?(e=c,!0):!1}),e}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var e=o(this.__entries__,r),a=this.__entries__[e];return a&&a[1]},t.prototype.set=function(r,e){var a=o(this.__entries__,r);~a?this.__entries__[a][1]=e:this.__entries__.push([r,e])},t.prototype.delete=function(r){var e=this.__entries__,a=o(e,r);~a&&e.splice(a,1)},t.prototype.has=function(r){return!!~o(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,e){e===void 0&&(e=null);for(var a=0,c=this.__entries__;a<c.length;a++){var i=c[a];r.call(e,i[1],i[0])}},t}()}(),ei=typeof window<"u"&&typeof document<"u"&&window.document===document,$c=function(){return typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),vx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind($c):function(o){return setTimeout(function(){return o(Date.now())},1e3/60)}}(),bx=2;function gx(o,t){var r=!1,e=!1,a=0;function c(){r&&(r=!1,o()),e&&l()}function i(){vx(c)}function l(){var w=Date.now();if(r){if(w-a<bx)return;e=!0}else r=!0,e=!1,setTimeout(i,t);a=w}return l}var ux=20,px=["top","right","bottom","left","width","height","size","weight"],hx=typeof MutationObserver<"u",fx=function(){function o(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=gx(this.refresh.bind(this),ux)}return o.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},o.prototype.removeObserver=function(t){var r=this.observers_,e=r.indexOf(t);~e&&r.splice(e,1),!r.length&&this.connected_&&this.disconnect_()},o.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},o.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},o.prototype.connect_=function(){!ei||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),hx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},o.prototype.disconnect_=function(){!ei||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},o.prototype.onTransitionEnd_=function(t){var r=t.propertyName,e=r===void 0?"":r,a=px.some(function(c){return!!~e.indexOf(c)});a&&this.refresh()},o.getInstance=function(){return this.instance_||(this.instance_=new o),this.instance_},o.instance_=null,o}(),Jw=function(o,t){for(var r=0,e=Object.keys(t);r<e.length;r++){var a=e[r];Object.defineProperty(o,a,{value:t[a],enumerable:!1,writable:!1,configurable:!0})}return o},Ye=function(o){var t=o&&o.ownerDocument&&o.ownerDocument.defaultView;return t||$c},ov=Gc(0,0,0,0);function Kc(o){return parseFloat(o)||0}function Gw(o){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(e,a){var c=o["border-"+a+"-width"];return e+Kc(c)},0)}function yx(o){for(var t=["top","right","bottom","left"],r={},e=0,a=t;e<a.length;e++){var c=a[e],i=o["padding-"+c];r[c]=Kc(i)}return r}function xx(o){var t=o.getBBox();return Gc(0,0,t.width,t.height)}function mx(o){var t=o.clientWidth,r=o.clientHeight;if(!t&&!r)return ov;var e=Ye(o).getComputedStyle(o),a=yx(e),c=a.left+a.right,i=a.top+a.bottom,l=Kc(e.width),w=Kc(e.height);if(e.boxSizing==="border-box"&&(Math.round(l+c)!==t&&(l-=Gw(e,"left","right")+c),Math.round(w+i)!==r&&(w-=Gw(e,"top","bottom")+i)),!kx(o)){var b=Math.round(l+c)-t,y=Math.round(w+i)-r;Math.abs(b)!==1&&(l-=b),Math.abs(y)!==1&&(w-=y)}return Gc(a.left,a.top,l,w)}var zx=function(){return typeof SVGGraphicsElement<"u"?function(o){return o instanceof Ye(o).SVGGraphicsElement}:function(o){return o instanceof Ye(o).SVGElement&&typeof o.getBBox=="function"}}();function kx(o){return o===Ye(o).document.documentElement}function _x(o){return ei?zx(o)?xx(o):mx(o):ov}function Mx(o){var t=o.x,r=o.y,e=o.width,a=o.height,c=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,i=Object.create(c.prototype);return Jw(i,{x:t,y:r,width:e,height:a,top:r,right:t+e,bottom:a+r,left:t}),i}function Gc(o,t,r,e){return{x:o,y:t,width:r,height:e}}var Cx=function(){function o(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Gc(0,0,0,0),this.target=t}return o.prototype.isActive=function(){var t=_x(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},o.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},o}(),Sx=function(){function o(t,r){var e=Mx(r);Jw(this,{target:t,contentRect:e})}return o}(),Lx=function(){function o(t,r,e){if(this.activeObservations_=[],this.observations_=new Qw,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=e}return o.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ye(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new Cx(t)),this.controller_.addObserver(this),this.controller_.refresh())}},o.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ye(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)&&(r.delete(t),r.size||this.controller_.removeObserver(this))}},o.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},o.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},o.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(e){return new Sx(e.target,e.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},o.prototype.clearActive=function(){this.activeObservations_.splice(0)},o.prototype.hasActive=function(){return this.activeObservations_.length>0},o}(),tv=typeof WeakMap<"u"?new WeakMap:new Qw,rv=function(){function o(t){if(!(this instanceof o))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=fx.getInstance(),e=new Lx(t,r,this);tv.set(this,e)}return o}();["observe","unobserve","disconnect"].forEach(function(o){rv.prototype[o]=function(){var t;return(t=tv.get(this))[o].apply(t,arguments)}});var Vx=function(){return typeof $c.ResizeObserver<"u"?$c.ResizeObserver:rv}(),ev=Vx;var e2=new Map;function Hx(o){o.forEach(function(t){var r,e=t.target;(r=e2.get(e))===null||r===void 0||r.forEach(function(a){return a(e)})})}var av=new ev(Hx);function cv(o,t){e2.has(o)||(e2.set(o,new Set),av.observe(o)),e2.get(o).add(t)}function iv(o,t){e2.has(o)&&(e2.get(o).delete(t),e2.get(o).size||(av.unobserve(o),e2.delete(o)))}function qe(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function nv(o,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,Fc(e.key),e)}}function Xe(o,t,r){return t&&nv(o.prototype,t),r&&nv(o,r),Object.defineProperty(o,"prototype",{writable:!1}),o}function Qc(o,t){return Qc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r},Qc(o,t)}function We(o,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),t&&Qc(o,t)}function x4(o){return x4=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x4(o)}function ai(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ai=function(){return!!o})()}function m4(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function lv(o,t){if(t&&(O1(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return m4(o)}function $e(o){var t=ai();return function(){var r,e=x4(o);if(t){var a=x4(this).constructor;r=Reflect.construct(e,arguments,a)}else r=e.apply(this,arguments);return lv(this,r)}}var dv=K(n0()),sv=function(o){We(r,o);var t=$e(r);function r(){return qe(this,r),t.apply(this,arguments)}return Xe(r,[{key:"render",value:function(){return this.props.children}}]),r}(dv.Component);function Ex(o,t){var r=o.children,e=o.disabled,a=$1.useRef(null),c=$1.useRef(null),i=$1.useContext(Wc),l=typeof r=="function",w=l?r(a):r,b=$1.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!l&&$1.isValidElement(w)&&yr(w),f=y?Ze(w):null,m=Z2(f,a),x=function(){var u;return Y2(a.current)||(a.current&&O1(a.current)==="object"?Y2((u=a.current)===null||u===void 0?void 0:u.nativeElement):null)||Y2(c.current)};$1.useImperativeHandle(t,function(){return x()});var s=$1.useRef(o);s.current=o;var d=$1.useCallback(function(n){var u=s.current,v=u.onResize,p=u.data,M=n.getBoundingClientRect(),H=M.width,L=M.height,k=n.offsetWidth,C=n.offsetHeight,B=Math.floor(H),O=Math.floor(L);if(b.current.width!==B||b.current.height!==O||b.current.offsetWidth!==k||b.current.offsetHeight!==C){var A={width:B,height:O,offsetWidth:k,offsetHeight:C};b.current=A;var Y=k===Math.round(H)?H:k,q=C===Math.round(L)?L:C,P=m0(m0({},A),{},{offsetWidth:Y,offsetHeight:q});i?.(P,n,p),v&&Promise.resolve().then(function(){v(P,n)})}},[]);return $1.useEffect(function(){var n=x();return n&&!e&&cv(n,d),function(){return iv(n,d)}},[a.current,e]),$1.createElement(sv,{ref:c},y?$1.cloneElement(w,{ref:m}):w)}var Bx=$1.forwardRef(Ex),wv=Bx;var Ax="rc-observer-key";function Fx(o,t){var r=o.children,e=typeof r=="function"?[r]:y4(r);return e.map(function(a,c){var i=a?.key||"".concat(Ax,"-").concat(c);return Jc.createElement(wv,Io({},o,{key:i,ref:c===0?t:void 0}),a)})}var vv=Jc.forwardRef(Fx);vv.Collection=Kw;var o6=vv;function bv(o){var t;return o==null||(t=o.getRootNode)===null||t===void 0?void 0:t.call(o)}function Px(o){return bv(o)instanceof ShadowRoot}function z4(o){return Px(o)?bv(o):null}var t6=K(n0());function mo(o){var t=t6.useRef();t.current=o;var r=t6.useCallback(function(){for(var e,a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.current)===null||e===void 0?void 0:e.call.apply(e,[t].concat(c))},[]);return r}var k4=K(n0());function Ox(){var o=m0({},k4);return o.useId}var gv=0;var uv=Ox(),pv=uv?function(t){var r=uv();return t||r}:function(t){var r=k4.useState("ssr-id"),e=O0(r,2),a=e[0],c=e[1];return k4.useEffect(function(){var i=gv;gv+=1,c("rc_unique_".concat(i))},[]),t||a};var hv=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var o=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(o?.substr(0,4))};var j0=K(n0());var Yv=K(W1());var Tv=K(W1());var ot=K(n0()),ui=K(n0());var ci=K(n0());var fv=ci.createContext({});var yv=K(n0()),Nx=function(o){We(r,o);var t=$e(r);function r(){return qe(this,r),t.apply(this,arguments)}return Xe(r,[{key:"render",value:function(){return this.props.children}}]),r}(yv.Component),xv=Nx;var Ke=K(n0());function q2(o){var t=Ke.useRef(!1),r=Ke.useState(o),e=O0(r,2),a=e[0],c=e[1];Ke.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function i(l,w){w&&t.current||c(l)}return[a,i]}var r6=K(n0());function ii(o){var t=r6.useReducer(function(l){return l+1},0),r=O0(t,2),e=r[1],a=r6.useRef(o),c=mo(function(){return a.current}),i=mo(function(l){a.current=typeof l=="function"?l(a.current):l,e()});return[c,i]}var w6=K(n0()),c2=K(n0());var Qt="none",_4="appear",M4="enter",C4="leave",ni="none",Jo="prepare",xr="start",a2="active",e6="end",a6="prepared";var Sv=K(n0()),Lv=K(n0());function mv(o,t){var r={};return r[o.toLowerCase()]=t.toLowerCase(),r["Webkit".concat(o)]="webkit".concat(t),r["Moz".concat(o)]="moz".concat(t),r["ms".concat(o)]="MS".concat(t),r["O".concat(o)]="o".concat(t.toLowerCase()),r}function Tx(o,t){var r={animationend:mv("Animation","AnimationEnd"),transitionend:mv("Transition","TransitionEnd")};return o&&("AnimationEvent"in t||delete r.animationend.animation,"TransitionEvent"in t||delete r.transitionend.transition),r}var Ix=Tx(Vo(),typeof window<"u"?window:{}),kv={};Vo()&&(zv=document.createElement("div"),kv=zv.style);var zv,c6={};function _v(o){if(c6[o])return c6[o];var t=Ix[o];if(t)for(var r=Object.keys(t),e=r.length,a=0;a<e;a+=1){var c=r[a];if(Object.prototype.hasOwnProperty.call(t,c)&&c in kv)return c6[o]=t[c],c6[o]}return""}var Mv=_v("animationend"),Cv=_v("transitionend"),i6=!!(Mv&&Cv),li=Mv||"animationend",di=Cv||"transitionend";function si(o,t){if(!o)return null;if(O1(o)==="object"){var r=t.replace(/-\w/g,function(e){return e[1].toUpperCase()});return o[r]}return"".concat(o,"-").concat(t)}var Vv=function(o){var t=(0,Lv.useRef)();function r(a){a&&(a.removeEventListener(di,o),a.removeEventListener(li,o))}function e(a){t.current&&t.current!==a&&r(t.current),a&&a!==t.current&&(a.addEventListener(di,o),a.addEventListener(li,o),t.current=a)}return Sv.useEffect(function(){return function(){r(t.current)}},[]),[e,r]};var n6=K(n0()),Dx=Vo()?n6.useLayoutEffect:n6.useEffect,l6=Dx;var Ov=K(n0());var Ev=function(t){return+setTimeout(t,16)},Bv=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Ev=function(t){return window.requestAnimationFrame(t)},Bv=function(t){return window.cancelAnimationFrame(t)});var Hv=0,wi=new Map;function Av(o){wi.delete(o)}var Fv=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Hv+=1;var e=Hv;function a(c){if(c===0)Av(e),t();else{var i=Ev(function(){a(c-1)});wi.set(e,i)}}return a(r),e};Fv.cancel=function(o){var t=wi.get(o);return Av(o),Bv(t)};var vi=Fv;var d6=K(n0()),Pv=function(){var o=d6.useRef(null);function t(){vi.cancel(o.current)}function r(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var c=vi(function(){a<=1?e({isCanceled:function(){return c!==o.current}}):r(e,a-1)});o.current=c}return d6.useEffect(function(){return function(){t()}},[]),[r,t]};var Zx=[Jo,xr,a2,e6],jx=[Jo,a6],bi=!1,Nv=!0;function s6(o){return o===a2||o===e6}var Rv=function(o,t,r){var e=q2(ni),a=O0(e,2),c=a[0],i=a[1],l=Pv(),w=O0(l,2),b=w[0],y=w[1];function f(){i(Jo,!0)}var m=t?jx:Zx;return l6(function(){if(c!==ni&&c!==e6){var x=m.indexOf(c),s=m[x+1],d=r(c);d===bi?i(s,!0):s&&b(function(n){function u(){n.isCanceled()||i(s,!0)}d===!0?u():Promise.resolve(d).then(u)})}},[o,c]),Ov.useEffect(function(){return function(){y()}},[]),[f,c]};function gi(o,t,r,e){var a=e.motionEnter,c=a===void 0?!0:a,i=e.motionAppear,l=i===void 0?!0:i,w=e.motionLeave,b=w===void 0?!0:w,y=e.motionDeadline,f=e.motionLeaveImmediately,m=e.onAppearPrepare,x=e.onEnterPrepare,s=e.onLeavePrepare,d=e.onAppearStart,n=e.onEnterStart,u=e.onLeaveStart,v=e.onAppearActive,p=e.onEnterActive,M=e.onLeaveActive,H=e.onAppearEnd,L=e.onEnterEnd,k=e.onLeaveEnd,C=e.onVisibleChanged,B=q2(),O=O0(B,2),A=O[0],Y=O[1],q=ii(Qt),P=O0(q,2),U=P[0],Q=P[1],w0=q2(null),t0=O0(w0,2),b0=t0[0],e0=t0[1],d0=U(),l0=(0,c2.useRef)(!1),D=(0,c2.useRef)(null);function X(){return r()}var o0=(0,c2.useRef)(!1);function J(){Q(Qt),e0(null,!0)}var c0=mo(function(R0){var y0=U();if(y0!==Qt){var a1=X();if(!(R0&&!R0.deadline&&R0.target!==a1)){var Z=o0.current,R;y0===_4&&Z?R=H?.(a1,R0):y0===M4&&Z?R=L?.(a1,R0):y0===C4&&Z&&(R=k?.(a1,R0)),Z&&R!==!1&&J()}}}),v0=Vv(c0),u0=O0(v0,1),f0=u0[0],k0=function(y0){switch(y0){case _4:return ro(ro(ro({},Jo,m),xr,d),a2,v);case M4:return ro(ro(ro({},Jo,x),xr,n),a2,p);case C4:return ro(ro(ro({},Jo,s),xr,u),a2,M);default:return{}}},A0=w6.useMemo(function(){return k0(d0)},[d0]),C0=Rv(d0,!o,function(R0){if(R0===Jo){var y0=A0[Jo];return y0?y0(X()):bi}if(e1 in A0){var a1;e0(((a1=A0[e1])===null||a1===void 0?void 0:a1.call(A0,X(),null))||null)}return e1===a2&&d0!==Qt&&(f0(X()),y>0&&(clearTimeout(D.current),D.current=setTimeout(function(){c0({deadline:!0})},y))),e1===a6&&J(),Nv}),N0=O0(C0,2),X0=N0[0],e1=N0[1],I0=s6(e1);o0.current=I0,l6(function(){Y(t);var R0=l0.current;l0.current=!0;var y0;!R0&&t&&l&&(y0=_4),R0&&t&&c&&(y0=M4),(R0&&!t&&b||!R0&&f&&!t&&b)&&(y0=C4);var a1=k0(y0);y0&&(o||a1[Jo])?(Q(y0),X0()):Q(Qt)},[t]),(0,c2.useEffect)(function(){(d0===_4&&!l||d0===M4&&!c||d0===C4&&!b)&&Q(Qt)},[l,c,b]),(0,c2.useEffect)(function(){return function(){l0.current=!1,clearTimeout(D.current)}},[]);var B0=w6.useRef(!1);(0,c2.useEffect)(function(){A&&(B0.current=!0),A!==void 0&&d0===Qt&&((B0.current||A)&&C?.(A),B0.current=!0)},[A,d0]);var $0=b0;return A0[Jo]&&e1===xr&&($0=m0({transition:"none"},$0)),[d0,e1,$0,A??t]}function Ux(o){var t=o;O1(o)==="object"&&(t=o.transitionSupport);function r(a,c){return!!(a.motionName&&t&&c!==!1)}var e=ot.forwardRef(function(a,c){var i=a.visible,l=i===void 0?!0:i,w=a.removeOnLeave,b=w===void 0?!0:w,y=a.forceRender,f=a.children,m=a.motionName,x=a.leavedClassName,s=a.eventProps,d=ot.useContext(fv),n=d.motion,u=r(a,n),v=(0,ui.useRef)(),p=(0,ui.useRef)();function M(){try{return v.current instanceof HTMLElement?v.current:Y2(p.current)}catch{return null}}var H=gi(u,l,M,a),L=O0(H,4),k=L[0],C=L[1],B=L[2],O=L[3],A=ot.useRef(O);O&&(A.current=!0);var Y=ot.useCallback(function(t0){v.current=t0,h4(c,t0)},[c]),q,P=m0(m0({},s),{},{visible:l});if(!f)q=null;else if(k===Qt)O?q=f(m0({},P),Y):!b&&A.current&&x?q=f(m0(m0({},P),{},{className:x}),Y):y||!b&&!x?q=f(m0(m0({},P),{},{style:{display:"none"}}),Y):q=null;else{var U;C===Jo?U="prepare":s6(C)?U="active":C===xr&&(U="start");var Q=si(m,"".concat(k,"-").concat(U));q=f(m0(m0({},P),{},{className:(0,Tv.default)(si(m,k),ro(ro({},Q,Q&&U),m,typeof m=="string")),style:B}),Y)}if(ot.isValidElement(q)&&yr(q)){var w0=Ze(q);w0||(q=ot.cloneElement(q,{ref:Y}))}return ot.createElement(xv,{ref:p},q)});return e.displayName="CSSMotion",e}var v6=Ux(i6);var X2=K(n0());var b6="add",g6="keep",u6="remove",h6="removed";function Yx(o){var t;return o&&O1(o)==="object"&&"key"in o?t=o:t={key:o},m0(m0({},t),{},{key:String(t.key)})}function p6(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return o.map(Yx)}function Iv(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=[],e=0,a=t.length,c=p6(o),i=p6(t);c.forEach(function(b){for(var y=!1,f=e;f<a;f+=1){var m=i[f];if(m.key===b.key){e<f&&(r=r.concat(i.slice(e,f).map(function(x){return m0(m0({},x),{},{status:b6})})),e=f),r.push(m0(m0({},m),{},{status:g6})),e+=1,y=!0;break}}y||r.push(m0(m0({},b),{},{status:u6}))}),e<a&&(r=r.concat(i.slice(e).map(function(b){return m0(m0({},b),{},{status:b6})})));var l={};r.forEach(function(b){var y=b.key;l[y]=(l[y]||0)+1});var w=Object.keys(l).filter(function(b){return l[b]>1});return w.forEach(function(b){r=r.filter(function(y){var f=y.key,m=y.status;return f!==b||m!==u6}),r.forEach(function(y){y.key===b&&(y.status=g6)})}),r}var qx=["component","children","onVisibleChanged","onAllRemoved"],Xx=["status"],Wx=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function $x(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v6,r=function(e){We(c,e);var a=$e(c);function c(){var i;qe(this,c);for(var l=arguments.length,w=new Array(l),b=0;b<l;b++)w[b]=arguments[b];return i=a.call.apply(a,[this].concat(w)),ro(m4(i),"state",{keyEntities:[]}),ro(m4(i),"removeKey",function(y){i.setState(function(f){var m=f.keyEntities.map(function(x){return x.key!==y?x:m0(m0({},x),{},{status:h6})});return{keyEntities:m}},function(){var f=i.state.keyEntities,m=f.filter(function(x){var s=x.status;return s!==h6}).length;m===0&&i.props.onAllRemoved&&i.props.onAllRemoved()})}),i}return Xe(c,[{key:"render",value:function(){var l=this,w=this.state.keyEntities,b=this.props,y=b.component,f=b.children,m=b.onVisibleChanged,x=b.onAllRemoved,s=r2(b,qx),d=y||X2.Fragment,n={};return Wx.forEach(function(u){n[u]=s[u],delete s[u]}),delete s.keys,X2.createElement(d,s,w.map(function(u,v){var p=u.status,M=r2(u,Xx),H=p===b6||p===g6;return X2.createElement(t,Io({},n,{key:M.key,visible:H,eventProps:M,onVisibleChanged:function(k){m?.(k,{key:M.key}),k||l.removeKey(M.key)}}),function(L,k){return f(m0(m0({},L),{},{index:v}),k)})}))}}],[{key:"getDerivedStateFromProps",value:function(l,w){var b=l.keys,y=w.keyEntities,f=p6(b),m=Iv(y,f);return{keyEntities:m.filter(function(x){var s=y.find(function(d){var n=d.key;return x.key===n});return!(s&&s.status===h6&&x.status===u6)})}}}]),c}(X2.Component);return ro(r,"defaultProps",{component:"div"}),r}var Kx=$x(i6);var f6=v6;var kt=K(n0());var Dv=K(W1()),y6=K(n0());function pi(o){var t=o.prefixCls,r=o.align,e=o.arrow,a=o.arrowPos,c=e||{},i=c.className,l=c.content,w=a.x,b=w===void 0?0:w,y=a.y,f=y===void 0?0:y,m=y6.useRef();if(!r||!r.points)return null;var x={position:"absolute"};if(r.autoArrow!==!1){var s=r.points[0],d=r.points[1],n=s[0],u=s[1],v=d[0],p=d[1];n===v||!["t","b"].includes(n)?x.top=f:n==="t"?x.top=0:x.bottom=0,u===p||!["l","r"].includes(u)?x.left=b:u==="l"?x.left=0:x.right=0}return y6.createElement("div",{ref:m,className:(0,Dv.default)("".concat(t,"-arrow"),i),style:x},l)}var Zv=K(W1());var hi=K(n0());function fi(o){var t=o.prefixCls,r=o.open,e=o.zIndex,a=o.mask,c=o.motion;return a?hi.createElement(f6,Io({},c,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(i){var l=i.className;return hi.createElement("div",{style:{zIndex:e},className:(0,Zv.default)("".concat(t,"-mask"),l)})}):null}var jv=K(n0()),Gx=jv.memo(function(o){var t=o.children;return t},function(o,t){return t.cache}),Uv=Gx;var Qx=kt.forwardRef(function(o,t){var r=o.popup,e=o.className,a=o.prefixCls,c=o.style,i=o.target,l=o.onVisibleChanged,w=o.open,b=o.keepDom,y=o.fresh,f=o.onClick,m=o.mask,x=o.arrow,s=o.arrowPos,d=o.align,n=o.motion,u=o.maskMotion,v=o.forceRender,p=o.getPopupContainer,M=o.autoDestroy,H=o.portal,L=o.zIndex,k=o.onMouseEnter,C=o.onMouseLeave,B=o.onPointerEnter,O=o.onPointerDownCapture,A=o.ready,Y=o.offsetX,q=o.offsetY,P=o.offsetR,U=o.offsetB,Q=o.onAlign,w0=o.onPrepare,t0=o.stretch,b0=o.targetWidth,e0=o.targetHeight,d0=typeof r=="function"?r():r,l0=w||b,D=p?.length>0,X=kt.useState(!p||!D),o0=O0(X,2),J=o0[0],c0=o0[1];if(eo(function(){!J&&D&&i&&c0(!0)},[J,D,i]),!J)return null;var v0="auto",u0={left:"-1000vw",top:"-1000vh",right:v0,bottom:v0};if(A||!w){var f0,k0=d.points,A0=d.dynamicInset||((f0=d._experimental)===null||f0===void 0?void 0:f0.dynamicInset),C0=A0&&k0[0][1]==="r",N0=A0&&k0[0][0]==="b";C0?(u0.right=P,u0.left=v0):(u0.left=Y,u0.right=v0),N0?(u0.bottom=U,u0.top=v0):(u0.top=q,u0.bottom=v0)}var X0={};return t0&&(t0.includes("height")&&e0?X0.height=e0:t0.includes("minHeight")&&e0&&(X0.minHeight=e0),t0.includes("width")&&b0?X0.width=b0:t0.includes("minWidth")&&b0&&(X0.minWidth=b0)),w||(X0.pointerEvents="none"),kt.createElement(H,{open:v||l0,getContainer:p&&function(){return p(i)},autoDestroy:M},kt.createElement(fi,{prefixCls:a,open:w,zIndex:L,mask:m,motion:u}),kt.createElement(o6,{onResize:Q,disabled:!w},function(e1){return kt.createElement(f6,Io({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:v,leavedClassName:"".concat(a,"-hidden")},n,{onAppearPrepare:w0,onEnterPrepare:w0,visible:w,onVisibleChanged:function(B0){var $0;n==null||($0=n.onVisibleChanged)===null||$0===void 0||$0.call(n,B0),l(B0)}}),function(I0,B0){var $0=I0.className,R0=I0.style,y0=(0,Yv.default)(a,$0,e);return kt.createElement("div",{ref:X7(e1,t,B0),className:y0,style:m0(m0(m0(m0({"--arrow-x":"".concat(s.x||0,"px"),"--arrow-y":"".concat(s.y||0,"px")},u0),X0),R0),{},{boxSizing:"border-box",zIndex:L},c),onMouseEnter:k,onMouseLeave:C,onPointerEnter:B,onClick:f,onPointerDownCapture:O},x&&kt.createElement(pi,{prefixCls:a,arrow:x,arrowPos:s,align:d}),kt.createElement(Uv,{cache:!w&&!y},d0))})}))}),qv=Qx;var Ge=K(n0()),Jx=Ge.forwardRef(function(o,t){var r=o.children,e=o.getTriggerDOMNode,a=yr(r),c=Ge.useCallback(function(l){h4(t,e?e(l):l)},[e]),i=Z2(c,Ze(r));return a?Ge.cloneElement(r,{ref:i}):r}),Xv=Jx;var Wv=K(n0()),om=Wv.createContext(null),yi=om;var Kv=K(n0());function $v(o){return o?Array.isArray(o)?o:[o]:[]}function xi(o,t,r,e){return Kv.useMemo(function(){var a=$v(r??t),c=$v(e??t),i=new Set(a),l=new Set(c);return o&&(i.has("hover")&&(i.delete("hover"),i.add("click")),l.has("hover")&&(l.delete("hover"),l.add("click"))),[i,l]},[o,t,r,e])}var Gv=function(o){if(!o)return!1;if(o instanceof Element){if(o.offsetParent)return!0;if(o.getBBox){var t=o.getBBox(),r=t.width,e=t.height;if(r||e)return!0}if(o.getBoundingClientRect){var a=o.getBoundingClientRect(),c=a.width,i=a.height;if(c||i)return!0}}return!1};var W2=K(n0());function tm(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?o[0]===t[0]:o[0]===t[0]&&o[1]===t[1]}function Qv(o,t,r,e){for(var a=r.points,c=Object.keys(o),i=0;i<c.length;i+=1){var l,w=c[i];if(tm((l=o[w])===null||l===void 0?void 0:l.points,a,e))return"".concat(t,"-placement-").concat(w)}return""}function mi(o,t,r,e){return t||(r?{motionName:"".concat(o,"-").concat(r)}:e?{motionName:e}:null)}function i2(o){return o.ownerDocument.defaultView}function L4(o){for(var t=[],r=o?.parentElement,e=["hidden","scroll","clip","auto"];r;){var a=i2(r).getComputedStyle(r),c=a.overflowX,i=a.overflowY,l=a.overflow;[c,i,l].some(function(w){return e.includes(w)})&&t.push(r),r=r.parentElement}return t}function Qe(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(o)?t:o}function S4(o){return Qe(parseFloat(o),0)}function zi(o,t){var r=m0({},o);return(t||[]).forEach(function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var a=i2(e).getComputedStyle(e),c=a.overflow,i=a.overflowClipMargin,l=a.borderTopWidth,w=a.borderBottomWidth,b=a.borderLeftWidth,y=a.borderRightWidth,f=e.getBoundingClientRect(),m=e.offsetHeight,x=e.clientHeight,s=e.offsetWidth,d=e.clientWidth,n=S4(l),u=S4(w),v=S4(b),p=S4(y),M=Qe(Math.round(f.width/s*1e3)/1e3),H=Qe(Math.round(f.height/m*1e3)/1e3),L=(s-d-v-p)*M,k=(m-x-n-u)*H,C=n*H,B=u*H,O=v*M,A=p*M,Y=0,q=0;if(c==="clip"){var P=S4(i);Y=P*M,q=P*H}var U=f.x+O-Y,Q=f.y+C-q,w0=U+f.width+2*Y-O-A-L,t0=Q+f.height+2*q-C-B-k;r.left=Math.max(r.left,U),r.top=Math.max(r.top,Q),r.right=Math.min(r.right,w0),r.bottom=Math.min(r.bottom,t0)}}),r}function Jv(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(t),e=r.match(/^(.*)\%$/);return e?o*(parseFloat(e[1])/100):parseFloat(r)}function ob(o,t){var r=t||[],e=O0(r,2),a=e[0],c=e[1];return[Jv(o.width,a),Jv(o.height,c)]}function tb(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[o[0],o[1]]}function Je(o,t){var r=t[0],e=t[1],a,c;return r==="t"?c=o.y:r==="b"?c=o.y+o.height:c=o.y+o.height/2,e==="l"?a=o.x:e==="r"?a=o.x+o.width:a=o.x+o.width/2,{x:a,y:c}}function n2(o,t){var r={t:"b",b:"t",l:"r",r:"l"};return o.map(function(e,a){return a===t?r[e]||"c":e}).join("")}function ki(o,t,r,e,a,c,i){var l=W2.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[e]||{}}),w=O0(l,2),b=w[0],y=w[1],f=W2.useRef(0),m=W2.useMemo(function(){return t?L4(t):[]},[t]),x=W2.useRef({}),s=function(){x.current={}};o||s();var d=mo(function(){if(t&&r&&o){let Po=function(Ut,t1){var Yo=arguments.length>2&&arguments[2]!==void 0?arguments[2]:R,ir=X.x+Ut,Vr=X.y+t1,T0=ir+C0,m2=Vr+A0,Hr=Math.max(ir,Yo.left),g0=Math.max(Vr,Yo.top),V0=Math.min(T0,Yo.right),z1=Math.min(m2,Yo.bottom);return Math.max(0,(V0-Hr)*(z1-g0))},Lr=function(){T=X.y+c1,$=T+A0,j=X.x+J0,N=j+C0};var v,p,M,H,L=t,k=L.ownerDocument,C=i2(L),B=C.getComputedStyle(L),O=B.width,A=B.height,Y=B.position,q=L.style.left,P=L.style.top,U=L.style.right,Q=L.style.bottom,w0=L.style.overflow,t0=m0(m0({},a[e]),c),b0=k.createElement("div");(v=L.parentElement)===null||v===void 0||v.appendChild(b0),b0.style.left="".concat(L.offsetLeft,"px"),b0.style.top="".concat(L.offsetTop,"px"),b0.style.position=Y,b0.style.height="".concat(L.offsetHeight,"px"),b0.style.width="".concat(L.offsetWidth,"px"),L.style.left="0",L.style.top="0",L.style.right="auto",L.style.bottom="auto",L.style.overflow="hidden";var e0;if(Array.isArray(r))e0={x:r[0],y:r[1],width:0,height:0};else{var d0,l0,D=r.getBoundingClientRect();D.x=(d0=D.x)!==null&&d0!==void 0?d0:D.left,D.y=(l0=D.y)!==null&&l0!==void 0?l0:D.top,e0={x:D.x,y:D.y,width:D.width,height:D.height}}var X=L.getBoundingClientRect();X.x=(p=X.x)!==null&&p!==void 0?p:X.left,X.y=(M=X.y)!==null&&M!==void 0?M:X.top;var o0=k.documentElement,J=o0.clientWidth,c0=o0.clientHeight,v0=o0.scrollWidth,u0=o0.scrollHeight,f0=o0.scrollTop,k0=o0.scrollLeft,A0=X.height,C0=X.width,N0=e0.height,X0=e0.width,e1={left:0,top:0,right:J,bottom:c0},I0={left:-k0,top:-f0,right:v0-k0,bottom:u0-f0},B0=t0.htmlRegion,$0="visible",R0="visibleFirst";B0!=="scroll"&&B0!==R0&&(B0=$0);var y0=B0===R0,a1=zi(I0,m),Z=zi(e1,m),R=B0===$0?Z:a1,I=y0?Z:R;L.style.left="auto",L.style.top="auto",L.style.right="0",L.style.bottom="0";var W=L.getBoundingClientRect();L.style.left=q,L.style.top=P,L.style.right=U,L.style.bottom=Q,L.style.overflow=w0,(H=L.parentElement)===null||H===void 0||H.removeChild(b0);var a0=Qe(Math.round(C0/parseFloat(O)*1e3)/1e3),s0=Qe(Math.round(A0/parseFloat(A)*1e3)/1e3);if(a0===0||s0===0||U2(r)&&!Gv(r))return;var H0=t0.offset,x0=t0.targetOffset,K0=ob(X,H0),G0=O0(K0,2),M0=G0[0],n1=G0[1],u1=ob(e0,x0),A1=O0(u1,2),y1=A1[0],q1=A1[1];e0.x-=y1,e0.y-=q1;var k1=t0.points||[],Q0=O0(k1,2),S0=Q0[0],p1=Q0[1],g1=tb(p1),x1=tb(S0),J1=Je(e0,g1),l1=Je(X,x1),I1=m0({},t0),J0=J1.x-l1.x+M0,c1=J1.y-l1.y+n1,bo=Po(J0,c1),ko=Po(J0,c1,Z),er=Je(e0,["t","l"]),co=Je(X,["t","l"]),Zt=Je(e0,["b","r"]),Lt=Je(X,["b","r"]),go=t0.overflow||{},V=go.adjustX,E=go.adjustY,z=go.shiftX,_=go.shiftY,S=function(t1){return typeof t1=="boolean"?t1:t1>=0},T,$,j,N;Lr();var G=S(E),p0=x1[0]===g1[0];if(G&&x1[0]==="t"&&($>I.bottom||x.current.bt)){var z0=c1;p0?z0-=A0-N0:z0=er.y-Lt.y-n1;var D0=Po(J0,z0),o1=Po(J0,z0,Z);D0>bo||D0===bo&&(!y0||o1>=ko)?(x.current.bt=!0,c1=z0,n1=-n1,I1.points=[n2(x1,0),n2(g1,0)]):x.current.bt=!1}if(G&&x1[0]==="b"&&(T<I.top||x.current.tb)){var E0=c1;p0?E0+=A0-N0:E0=Zt.y-co.y-n1;var W0=Po(J0,E0),m1=Po(J0,E0,Z);W0>bo||W0===bo&&(!y0||m1>=ko)?(x.current.tb=!0,c1=E0,n1=-n1,I1.points=[n2(x1,0),n2(g1,0)]):x.current.tb=!1}var L0=S(V),M1=x1[1]===g1[1];if(L0&&x1[1]==="l"&&(N>I.right||x.current.rl)){var F1=J0;M1?F1-=C0-X0:F1=er.x-Lt.x-M0;var uo=Po(F1,c1),Zo=Po(F1,c1,Z);uo>bo||uo===bo&&(!y0||Zo>=ko)?(x.current.rl=!0,J0=F1,M0=-M0,I1.points=[n2(x1,1),n2(g1,1)]):x.current.rl=!1}if(L0&&x1[1]==="r"&&(j<I.left||x.current.lr)){var D1=J0;M1?D1+=C0-X0:D1=Zt.x-co.x-M0;var bt=Po(D1,c1),jo=Po(D1,c1,Z);bt>bo||bt===bo&&(!y0||jo>=ko)?(x.current.lr=!0,J0=D1,M0=-M0,I1.points=[n2(x1,1),n2(g1,1)]):x.current.lr=!1}Lr();var w1=z===!0?0:z;typeof w1=="number"&&(j<Z.left&&(J0-=j-Z.left-M0,e0.x+X0<Z.left+w1&&(J0+=e0.x-Z.left+X0-w1)),N>Z.right&&(J0-=N-Z.right-M0,e0.x>Z.right-w1&&(J0+=e0.x-Z.right+w1)));var Z1=_===!0?0:_;typeof Z1=="number"&&(T<Z.top&&(c1-=T-Z.top-n1,e0.y+N0<Z.top+Z1&&(c1+=e0.y-Z.top+N0-Z1)),$>Z.bottom&&(c1-=$-Z.bottom-n1,e0.y>Z.bottom-Z1&&(c1+=e0.y-Z.bottom+Z1)));var po=X.x+J0,Ao=po+C0,Fo=X.y+c1,tt=Fo+A0,jt=e0.x,Vt=jt+X0,io=e0.y,no=io+N0,K1=Math.max(po,jt),Mr=Math.min(Ao,Vt),f2=(K1+Mr)/2,U0=f2-po,Cr=Math.max(Fo,io),Sr=Math.min(tt,no),ar=(Cr+Sr)/2,y2=ar-Fo;i?.(t,I1);var cr=W.right-X.x-(J0+X.width),Uo=W.bottom-X.y-(c1+X.height);a0===1&&(J0=Math.round(J0),cr=Math.round(cr)),s0===1&&(c1=Math.round(c1),Uo=Math.round(Uo));var x2={ready:!0,offsetX:J0/a0,offsetY:c1/s0,offsetR:cr/a0,offsetB:Uo/s0,arrowX:U0/a0,arrowY:y2/s0,scaleX:a0,scaleY:s0,align:I1};y(x2)}}),n=function(){f.current+=1;var p=f.current;Promise.resolve().then(function(){f.current===p&&d()})},u=function(){y(function(p){return m0(m0({},p),{},{ready:!1})})};return eo(u,[e]),eo(function(){o||u()},[o]),[b.ready,b.offsetX,b.offsetY,b.offsetR,b.offsetB,b.arrowX,b.arrowY,b.scaleX,b.scaleY,b.align,n]}function _i(o,t,r,e,a){eo(function(){if(o&&t&&r){let f=function(){e(),a()};var c=t,i=r,l=L4(c),w=L4(i),b=i2(i),y=new Set([b].concat(je(l),je(w)));return y.forEach(function(m){m.addEventListener("scroll",f,{passive:!0})}),b.addEventListener("resize",f,{passive:!0}),e(),function(){y.forEach(function(m){m.removeEventListener("scroll",f),b.removeEventListener("resize",f)})}}},[o,t,r])}var V4=K(n0());function Mi(o,t,r,e,a,c,i,l){var w=V4.useRef(o);w.current=o;var b=V4.useRef(!1);V4.useEffect(function(){if(t&&e&&(!a||c)){var f=function(){b.current=!1},m=function(M){var H;w.current&&!i(((H=M.composedPath)===null||H===void 0||(H=H.call(M))===null||H===void 0?void 0:H[0])||M.target)&&!b.current&&l(!1)},x=i2(e);x.addEventListener("pointerdown",f,!0),x.addEventListener("mousedown",m,!0),x.addEventListener("contextmenu",m,!0);var s=z4(r);if(s&&(s.addEventListener("mousedown",m,!0),s.addEventListener("contextmenu",m,!0)),0)var d,n,u,v;return function(){x.removeEventListener("pointerdown",f,!0),x.removeEventListener("mousedown",m,!0),x.removeEventListener("contextmenu",m,!0),s&&(s.removeEventListener("mousedown",m,!0),s.removeEventListener("contextmenu",m,!0))}}},[t,r,e,a,c]);function y(){b.current=!0}return y}var rm=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function em(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ti,t=j0.forwardRef(function(r,e){var a=r.prefixCls,c=a===void 0?"rc-trigger-popup":a,i=r.children,l=r.action,w=l===void 0?"hover":l,b=r.showAction,y=r.hideAction,f=r.popupVisible,m=r.defaultPopupVisible,x=r.onPopupVisibleChange,s=r.afterPopupVisibleChange,d=r.mouseEnterDelay,n=r.mouseLeaveDelay,u=n===void 0?.1:n,v=r.focusDelay,p=r.blurDelay,M=r.mask,H=r.maskClosable,L=H===void 0?!0:H,k=r.getPopupContainer,C=r.forceRender,B=r.autoDestroy,O=r.destroyPopupOnHide,A=r.popup,Y=r.popupClassName,q=r.popupStyle,P=r.popupPlacement,U=r.builtinPlacements,Q=U===void 0?{}:U,w0=r.popupAlign,t0=r.zIndex,b0=r.stretch,e0=r.getPopupClassNameFromAlign,d0=r.fresh,l0=r.alignPoint,D=r.onPopupClick,X=r.onPopupAlign,o0=r.arrow,J=r.popupMotion,c0=r.maskMotion,v0=r.popupTransitionName,u0=r.popupAnimation,f0=r.maskTransitionName,k0=r.maskAnimation,A0=r.className,C0=r.getTriggerDOMNode,N0=r2(r,rm),X0=B||O||!1,e1=j0.useState(!1),I0=O0(e1,2),B0=I0[0],$0=I0[1];eo(function(){$0(hv())},[]);var R0=j0.useRef({}),y0=j0.useContext(yi),a1=j0.useMemo(function(){return{registerSubPopup:function(V0,z1){R0.current[V0]=z1,y0?.registerSubPopup(V0,z1)}}},[y0]),Z=pv(),R=j0.useState(null),I=O0(R,2),W=I[0],a0=I[1],s0=j0.useRef(null),H0=mo(function(g0){s0.current=g0,U2(g0)&&W!==g0&&a0(g0),y0?.registerSubPopup(Z,g0)}),x0=j0.useState(null),K0=O0(x0,2),G0=K0[0],M0=K0[1],n1=j0.useRef(null),u1=mo(function(g0){U2(g0)&&G0!==g0&&(M0(g0),n1.current=g0)}),A1=j0.Children.only(i),y1=A1?.props||{},q1={},k1=mo(function(g0){var V0,z1,j1=G0;return j1?.contains(g0)||((V0=z4(j1))===null||V0===void 0?void 0:V0.host)===g0||g0===j1||W?.contains(g0)||((z1=z4(W))===null||z1===void 0?void 0:z1.host)===g0||g0===W||Object.values(R0.current).some(function(v1){return v1?.contains(g0)||g0===v1})}),Q0=mi(c,J,u0,v0),S0=mi(c,c0,k0,f0),p1=j0.useState(m||!1),g1=O0(p1,2),x1=g1[0],J1=g1[1],l1=f??x1,I1=mo(function(g0){f===void 0&&J1(g0)});eo(function(){J1(f||!1)},[f]);var J0=j0.useRef(l1);J0.current=l1;var c1=j0.useRef([]);c1.current=[];var bo=mo(function(g0){var V0;I1(g0),((V0=c1.current[c1.current.length-1])!==null&&V0!==void 0?V0:l1)!==g0&&(c1.current.push(g0),x?.(g0))}),ko=j0.useRef(),er=function(){clearTimeout(ko.current)},co=function(V0){var z1=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;er(),z1===0?bo(V0):ko.current=setTimeout(function(){bo(V0)},z1*1e3)};j0.useEffect(function(){return er},[]);var Zt=j0.useState(!1),Lt=O0(Zt,2),go=Lt[0],V=Lt[1];eo(function(g0){(!g0||l1)&&V(!0)},[l1]);var E=j0.useState(null),z=O0(E,2),_=z[0],S=z[1],T=j0.useState(null),$=O0(T,2),j=$[0],N=$[1],G=function(V0){N([V0.clientX,V0.clientY])},p0=ki(l1,W,l0&&j!==null?j:G0,P,Q,w0,X),z0=O0(p0,11),D0=z0[0],o1=z0[1],E0=z0[2],W0=z0[3],m1=z0[4],L0=z0[5],M1=z0[6],F1=z0[7],uo=z0[8],Zo=z0[9],D1=z0[10],bt=xi(B0,w,b,y),jo=O0(bt,2),w1=jo[0],Z1=jo[1],po=w1.has("click"),Ao=Z1.has("click")||Z1.has("contextMenu"),Fo=mo(function(){go||D1()}),tt=function(){J0.current&&l0&&Ao&&co(!1)};_i(l1,G0,W,Fo,tt),eo(function(){Fo()},[j,P]),eo(function(){l1&&!(Q!=null&&Q[P])&&Fo()},[JSON.stringify(w0)]);var jt=j0.useMemo(function(){var g0=Qv(Q,c,Zo,l0);return(0,x6.default)(g0,e0?.(Zo))},[Zo,e0,Q,c,l0]);j0.useImperativeHandle(e,function(){return{nativeElement:n1.current,popupElement:s0.current,forceAlign:Fo}});var Vt=j0.useState(0),io=O0(Vt,2),no=io[0],K1=io[1],Mr=j0.useState(0),f2=O0(Mr,2),U0=f2[0],Cr=f2[1],Sr=function(){if(b0&&G0){var V0=G0.getBoundingClientRect();K1(V0.width),Cr(V0.height)}},ar=function(){Sr(),Fo()},y2=function(V0){V(!1),D1(),s?.(V0)},cr=function(){return new Promise(function(V0){Sr(),S(function(){return V0})})};eo(function(){_&&(D1(),_(),S(null))},[_]);function Uo(g0,V0,z1,j1){q1[g0]=function(v1){var oe;j1?.(v1),co(V0,z1);for(var wa=arguments.length,X4=new Array(wa>1?wa-1:0),V1=1;V1<wa;V1++)X4[V1-1]=arguments[V1];(oe=y1[g0])===null||oe===void 0||oe.call.apply(oe,[y1,v1].concat(X4))}}(po||Ao)&&(q1.onClick=function(g0){var V0;J0.current&&Ao?co(!1):!J0.current&&po&&(G(g0),co(!0));for(var z1=arguments.length,j1=new Array(z1>1?z1-1:0),v1=1;v1<z1;v1++)j1[v1-1]=arguments[v1];(V0=y1.onClick)===null||V0===void 0||V0.call.apply(V0,[y1,g0].concat(j1))});var x2=Mi(l1,Ao,G0,W,M,L,k1,co),Po=w1.has("hover"),Lr=Z1.has("hover"),Ut,t1;Po&&(Uo("onMouseEnter",!0,d,function(g0){G(g0)}),Uo("onPointerEnter",!0,d,function(g0){G(g0)}),Ut=function(V0){(l1||go)&&W!==null&&W!==void 0&&W.contains(V0.target)&&co(!0,d)},l0&&(q1.onMouseMove=function(g0){var V0;(V0=y1.onMouseMove)===null||V0===void 0||V0.call(y1,g0)})),Lr&&(Uo("onMouseLeave",!1,u),Uo("onPointerLeave",!1,u),t1=function(){co(!1,u)}),w1.has("focus")&&Uo("onFocus",!0,v),Z1.has("focus")&&Uo("onBlur",!1,p),w1.has("contextMenu")&&(q1.onContextMenu=function(g0){var V0;J0.current&&Z1.has("contextMenu")?co(!1):(G(g0),co(!0)),g0.preventDefault();for(var z1=arguments.length,j1=new Array(z1>1?z1-1:0),v1=1;v1<z1;v1++)j1[v1-1]=arguments[v1];(V0=y1.onContextMenu)===null||V0===void 0||V0.call.apply(V0,[y1,g0].concat(j1))}),A0&&(q1.className=(0,x6.default)(y1.className,A0));var Yo=m0(m0({},y1),q1),ir={},Vr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];Vr.forEach(function(g0){N0[g0]&&(ir[g0]=function(){for(var V0,z1=arguments.length,j1=new Array(z1),v1=0;v1<z1;v1++)j1[v1]=arguments[v1];(V0=Yo[g0])===null||V0===void 0||V0.call.apply(V0,[Yo].concat(j1)),N0[g0].apply(N0,j1)})});var T0=j0.cloneElement(A1,m0(m0({},Yo),ir)),m2={x:L0,y:M1},Hr=o0?m0({},o0!==!0?o0:{}):null;return j0.createElement(j0.Fragment,null,j0.createElement(o6,{disabled:!l1,ref:u1,onResize:ar},j0.createElement(Xv,{getTriggerDOMNode:C0},T0)),j0.createElement(yi.Provider,{value:a1},j0.createElement(qv,{portal:o,ref:H0,prefixCls:c,popup:A,className:(0,x6.default)(Y,jt),style:q,target:G0,onMouseEnter:Ut,onMouseLeave:t1,onPointerEnter:Ut,zIndex:t0,open:l1,keepDom:go,fresh:d0,onClick:D,onPointerDownCapture:x2,mask:M,motion:Q0,maskMotion:S0,onVisibleChanged:y2,onPrepare:cr,forceRender:C,autoDestroy:X0,getPopupContainer:k,align:Zo,arrow:Hr,arrowPos:m2,ready:D0,offsetX:o1,offsetY:E0,offsetR:W0,offsetB:m1,onAlign:Fo,stretch:b0,targetWidth:no/F1,targetHeight:U0/uo})))});return t}var rb=em(ti);var Ci=K(n0()),ra=K(n0());var oa={shiftX:64,adjustY:1},ta={adjustX:1,shiftY:!0},_t=[0,0],eb={left:{points:["cr","cl"],overflow:ta,offset:[-4,0],targetOffset:_t},right:{points:["cl","cr"],overflow:ta,offset:[4,0],targetOffset:_t},top:{points:["bc","tc"],overflow:oa,offset:[0,-4],targetOffset:_t},bottom:{points:["tc","bc"],overflow:oa,offset:[0,4],targetOffset:_t},topLeft:{points:["bl","tl"],overflow:oa,offset:[0,-4],targetOffset:_t},leftTop:{points:["tr","tl"],overflow:ta,offset:[-4,0],targetOffset:_t},topRight:{points:["br","tr"],overflow:oa,offset:[0,-4],targetOffset:_t},rightTop:{points:["tl","tr"],overflow:ta,offset:[4,0],targetOffset:_t},bottomRight:{points:["tr","br"],overflow:oa,offset:[0,4],targetOffset:_t},rightBottom:{points:["bl","br"],overflow:ta,offset:[4,0],targetOffset:_t},bottomLeft:{points:["tl","bl"],overflow:oa,offset:[0,4],targetOffset:_t},leftBottom:{points:["br","bl"],overflow:ta,offset:[-4,0],targetOffset:_t}};var ab=K(W1()),am=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],cm=function(t,r){var e=t.overlayClassName,a=t.trigger,c=a===void 0?["hover"]:a,i=t.mouseEnterDelay,l=i===void 0?0:i,w=t.mouseLeaveDelay,b=w===void 0?.1:w,y=t.overlayStyle,f=t.prefixCls,m=f===void 0?"rc-tooltip":f,x=t.children,s=t.onVisibleChange,d=t.afterVisibleChange,n=t.transitionName,u=t.animation,v=t.motion,p=t.placement,M=p===void 0?"right":p,H=t.align,L=H===void 0?{}:H,k=t.destroyTooltipOnHide,C=k===void 0?!1:k,B=t.defaultVisible,O=t.getTooltipContainer,A=t.overlayInnerStyle,Y=t.arrowContent,q=t.overlay,P=t.id,U=t.showArrow,Q=U===void 0?!0:U,w0=t.classNames,t0=t.styles,b0=r2(t,am),e0=(0,ra.useRef)(null);(0,ra.useImperativeHandle)(r,function(){return e0.current});var d0=m0({},b0);"visible"in t&&(d0.popupVisible=t.visible);var l0=function(){return Ci.createElement(Ac,{key:"content",prefixCls:m,id:P,innerClassName:w0?.inner,overlayInnerStyle:m0(m0({},A),t0?.inner)},q)};return Ci.createElement(rb,Io({popupClassName:(0,ab.default)(e,w0?.root),prefixCls:m,popup:l0,action:c,builtinPlacements:eb,popupPlacement:M,ref:e0,popupAlign:L,getPopupContainer:O,onPopupVisibleChange:s,afterPopupVisibleChange:d,popupTransitionName:n,popupAnimation:u,popupMotion:v,defaultPopupVisible:B,autoDestroy:C,mouseLeaveDelay:b,popupStyle:m0(m0({},y),t0?.root),mouseEnterDelay:l,arrow:Q},d0),x)},cb=(0,ra.forwardRef)(cm);var ib=cb;var Si=K(n0()),m6=({children:o,text:t,...r})=>Si.default.createElement(ib,{...r,overlay:Si.default.createElement("span",null,t),showArrow:!1},o);var z6={};Nn(z6,{CancelIcon:()=>Vi,ChevronDownIcon:()=>im,LayoutToggleIcon:()=>nm,ListClear:()=>sm,ListPin:()=>wm,ListScrollDown:()=>vm,PlayIcon:()=>Li,SidebarIcon:()=>lm,SquareIcon:()=>dm});var r1=K(n0());function im({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{id:"SVGRepo_iconCarrier"},r1.default.createElement("path",{d:"M4 8L12 16L20 8",stroke:"currentcolor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))}function nm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor"},r1.default.createElement("path",{d:"M18.1136 22H5.88638C4.18423 22 3.33316 22 3.05402 21.4576C2.77488 20.9152 3.26956 20.2226 4.25891 18.8375L5.38837 17.2563C5.82827 16.6404 6.04822 16.3325 6.37127 16.1662C6.69432 16 7.07274 16 7.82957 16H16.1704C16.9273 16 17.3057 16 17.6287 16.1662C17.9518 16.3325 18.1717 16.6404 18.6116 17.2563L19.7411 18.8375C20.7304 20.2226 21.2251 20.9152 20.946 21.4576C20.6668 22 19.8158 22 18.1136 22Z"}),r1.default.createElement("path",{d:"M18.1136 2L5.88638 2C4.18423 2 3.33316 2 3.05402 2.54242C2.77488 3.08484 3.26956 3.77738 4.25891 5.16247L5.38837 6.74372C5.82827 7.35957 6.04822 7.6675 6.37127 7.83375C6.69432 8 7.07274 8 7.82957 8L16.1704 8C16.9273 8 17.3057 8 17.6287 7.83375C17.9518 7.6675 18.1717 7.35957 18.6116 6.74372L19.7411 5.16248C20.7304 3.77738 21.2251 3.08484 20.946 2.54242C20.6668 2 19.8158 2 18.1136 2Z"}),r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM17.25 12C17.25 11.5858 17.5858 11.25 18 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H18C17.5858 12.75 17.25 12.4142 17.25 12Z"})))}function Li({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{stroke:"currentcolor",fill:"currentcolor",strokeLinecap:"round",strokeLinejoin:"round"},r1.default.createElement("path",{d:"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"})))}function Vi({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 1024 1024",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor"},r1.default.createElement("path",{d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"})))}function lm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor",fillRule:"evenodd",clipRule:"evenodd"},r1.default.createElement("path",{d:"M3.17157 4.17157C2 5.34315 2 7.22876 2 11V13C2 16.7712 2 18.6569 3.17157 19.8284C4.34315 21 6.22876 21 10 21H14C14.0843 21 14.1676 21 14.25 21L14.25 3C14.1676 2.99999 14.0843 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157ZM15.75 3.00559L15.75 20.9944C18.3859 20.9668 19.8541 20.8028 20.8284 19.8284C22 18.6569 22 16.7712 22 13V11C22 7.22876 22 5.34315 20.8284 4.17157C19.8541 3.19724 18.3859 3.03321 15.75 3.00559Z"})))}function dm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor",fillRule:"evenodd",clipRule:"evenodd"},r1.default.createElement("path",{d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"})))}function sm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor",fillRule:"evenodd",clipRule:"evenodd"},r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697L17.5 12.4393L19.4697 10.4697C19.7626 10.1768 20.2374 10.1768 20.5303 10.4697C20.8232 10.7626 20.8232 11.2374 20.5303 11.5303L18.5607 13.5L20.5303 15.4697C20.8232 15.7626 20.8232 16.2374 20.5303 16.5303C20.2374 16.8232 19.7626 16.8232 19.4697 16.5303L17.5 14.5607L15.5303 16.5303C15.2374 16.8232 14.7626 16.8232 14.4697 16.5303C14.1768 16.2374 14.1768 15.7626 14.4697 15.4697L16.4393 13.5L14.4697 11.5303C14.1768 11.2374 14.1768 10.7626 14.4697 10.4697ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"})))}function wm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"1 2 23 22",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor",fillRule:"evenodd",clipRule:"evenodd"},r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 8.37688C22 8.78086 21.6668 9.10836 21.2557 9.10836H16.2937C15.8826 9.10836 15.5494 8.78086 15.5494 8.37688C15.5494 7.97289 15.8826 7.64539 16.2937 7.64539H21.2557C21.6668 7.64539 22 7.97289 22 8.37688Z"}),r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12.7658C22 13.1698 21.6668 13.4973 21.2557 13.4973H17.2861C16.875 13.4973 16.5418 13.1698 16.5418 12.7658C16.5418 12.3618 16.875 12.0343 17.2861 12.0343H21.2557C21.6668 12.0343 22 12.3618 22 12.7658Z"}),r1.default.createElement("path",{d:"M12.5872 8.23781L12.9508 8.59515C14.4693 10.0875 15.2285 10.8336 15.2278 11.6425C15.2276 11.9068 15.1728 12.1682 15.0666 12.411C14.7417 13.1542 13.7441 13.5444 11.7489 14.3248L11.6045 14.3813C11.0389 14.6025 10.7561 14.7132 10.5279 14.8908C10.3548 15.0256 10.2058 15.1878 10.0871 15.3708C9.93056 15.6119 9.84745 15.8997 9.68123 16.4753C9.42348 17.3678 9.2946 17.8141 9.01976 18.0121C8.81551 18.1593 8.56173 18.2242 8.3104 18.1934C7.97221 18.1521 7.63845 17.8241 6.97092 17.168L5.94386 16.1586L3.2706 18.7858C2.97993 19.0714 2.50867 19.0714 2.218 18.7858C1.92733 18.5001 1.92733 18.0369 2.218 17.7513L4.88125 15.1143L3.86422 14.1148C3.1967 13.4588 2.86293 13.1307 2.82084 12.7984C2.78956 12.5514 2.85556 12.302 3.00532 12.1012C3.20683 11.8311 3.66091 11.7045 4.56907 11.4511C5.15473 11.2878 5.44756 11.2061 5.69297 11.0523C5.87915 10.9356 6.0442 10.7891 6.18133 10.619C6.36209 10.3948 6.47465 10.1168 6.69977 9.56094L6.75724 9.41903C7.55132 7.45818 7.94835 6.47775 8.70458 6.15843C8.95161 6.05411 9.21763 6.00021 9.4865 6C10.3096 5.99934 11.0688 6.7455 12.5872 8.23781Z"}),r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 17.1547C22 17.5587 21.6668 17.8862 21.2557 17.8862H12.3241C11.9131 17.8862 11.5798 17.5587 11.5798 17.1547C11.5798 16.7507 11.9131 16.4232 12.3241 16.4232H21.2557C21.6668 16.4232 22 16.7507 22 17.1547Z"})))}function vm({size:o,className:t}){return r1.default.createElement("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:t},r1.default.createElement("g",{fill:"currentcolor",fillRule:"evenodd",clipRule:"evenodd"},r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11C12.75 11.4142 12.4142 11.75 12 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"})," ",r1.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303L20.5303 15.0303C20.8232 14.7374 20.8232 14.2626 20.5303 13.9697C20.2374 13.6768 19.7626 13.6768 19.4697 13.9697L18.25 15.1893V9C18.25 8.58579 17.9142 8.25 17.5 8.25C17.0858 8.25 16.75 8.58579 16.75 9V15.1893L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L16.9697 17.5303Z"})))}var wo=K(n0()),ym=K(sb());function Bi(){return Bi=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)({}).hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},Bi.apply(null,arguments)}var vb=["shift","alt","meta","mod","ctrl"],xm={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function l2(o){return(o&&xm[o]||o||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function mm(o){return vb.includes(o)}function Hi(o,t){return t===void 0&&(t=","),o.split(t)}function Ei(o,t,r){t===void 0&&(t="+");var e=o.toLocaleLowerCase().split(t).map(function(i){return l2(i)}),a={alt:e.includes("alt"),ctrl:e.includes("ctrl")||e.includes("control"),shift:e.includes("shift"),meta:e.includes("meta"),mod:e.includes("mod")},c=e.filter(function(i){return!vb.includes(i)});return Bi({},a,{keys:c,description:r,hotkey:o})}(function(){typeof document<"u"&&(document.addEventListener("keydown",function(o){o.key!==void 0&&bb([l2(o.key),l2(o.code)])}),document.addEventListener("keyup",function(o){o.key!==void 0&&gb([l2(o.key),l2(o.code)])})),typeof window<"u"&&window.addEventListener("blur",function(){d2.clear()})})();var d2=new Set;function Ai(o){return Array.isArray(o)}function zm(o,t){t===void 0&&(t=",");var r=Ai(o)?o:o.split(t);return r.every(function(e){return d2.has(e.trim().toLowerCase())})}function bb(o){var t=Array.isArray(o)?o:[o];d2.has("meta")&&d2.forEach(function(r){return!mm(r)&&d2.delete(r.toLowerCase())}),t.forEach(function(r){return d2.add(r.toLowerCase())})}function gb(o){var t=Array.isArray(o)?o:[o];o==="meta"?d2.clear():t.forEach(function(r){return d2.delete(r.toLowerCase())})}function km(o,t,r){(typeof r=="function"&&r(o,t)||r===!0)&&o.preventDefault()}function _m(o,t,r){return typeof r=="function"?r(o,t):r===!0||r===void 0}function Mm(o){return ub(o,["input","textarea","select"])}function ub(o,t){t===void 0&&(t=!1);var r=o.target,e=o.composed,a=null;return Cm(r)&&e?a=o.composedPath()[0]&&o.composedPath()[0].tagName:a=r&&r.tagName,Ai(t)?!!(a&&t&&t.some(function(c){var i;return c.toLowerCase()===((i=a)==null?void 0:i.toLowerCase())})):!!(a&&t&&t)}function Cm(o){return!!o.tagName&&!o.tagName.startsWith("-")&&o.tagName.includes("-")}function Sm(o,t){return o.length===0&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):t?o.some(function(r){return t.includes(r)})||o.includes("*"):!0}var Lm=function(t,r,e){e===void 0&&(e=!1);var a=r.alt,c=r.meta,i=r.mod,l=r.shift,w=r.ctrl,b=r.keys,y=t.key,f=t.code,m=t.ctrlKey,x=t.metaKey,s=t.shiftKey,d=t.altKey,n=l2(f),u=y.toLowerCase();if(!(b!=null&&b.includes(n))&&!(b!=null&&b.includes(u))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(n))return!1;if(!e){if(a===!d&&u!=="alt"||l===!s&&u!=="shift")return!1;if(i){if(!x&&!m)return!1}else if(c===!x&&u!=="meta"&&u!=="os"||w===!m&&u!=="ctrl"&&u!=="control")return!1}return b&&b.length===1&&(b.includes(u)||b.includes(n))?!0:b?zm(b):!b},Vm=(0,wo.createContext)(void 0),Hm=function(){return(0,wo.useContext)(Vm)};function pb(o,t){return o&&t&&typeof o=="object"&&typeof t=="object"?Object.keys(o).length===Object.keys(t).length&&Object.keys(o).reduce(function(r,e){return r&&pb(o[e],t[e])},!0):o===t}var Em=(0,wo.createContext)({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),Bm=function(){return(0,wo.useContext)(Em)};function Am(o){var t=(0,wo.useRef)(void 0);return pb(t.current,o)||(t.current=o),t.current}var wb=function(t){t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation()},Fm=typeof window<"u"?wo.useLayoutEffect:wo.useEffect;function Fi(o,t,r,e){var a=(0,wo.useState)(null),c=a[0],i=a[1],l=(0,wo.useRef)(!1),w=r instanceof Array?e instanceof Array?void 0:e:r,b=Ai(o)?o.join(w?.splitKey):o,y=r instanceof Array?r:e instanceof Array?e:void 0,f=(0,wo.useCallback)(t,y??[]),m=(0,wo.useRef)(f);y?m.current=f:m.current=t;var x=Am(w),s=Bm(),d=s.enabledScopes,n=Hm();return Fm(function(){if(!(x?.enabled===!1||!Sm(d,x?.scopes))){var u=function(L,k){var C;if(k===void 0&&(k=!1),!(Mm(L)&&!ub(L,x?.enableOnFormTags))){if(c!==null){var B=c.getRootNode();if((B instanceof Document||B instanceof ShadowRoot)&&B.activeElement!==c&&!c.contains(B.activeElement)){wb(L);return}}(C=L.target)!=null&&C.isContentEditable&&!(x!=null&&x.enableOnContentEditable)||Hi(b,x?.splitKey).forEach(function(O){var A,Y=Ei(O,x?.combinationKey);if(Lm(L,Y,x?.ignoreModifiers)||(A=Y.keys)!=null&&A.includes("*")){if(x!=null&&x.ignoreEventWhen!=null&&x.ignoreEventWhen(L)||k&&l.current)return;if(km(L,Y,x?.preventDefault),!_m(L,Y,x?.enabled)){wb(L);return}m.current(L,Y),k||(l.current=!0)}})}},v=function(L){L.key!==void 0&&(bb(l2(L.code)),(x?.keydown===void 0&&x?.keyup!==!0||x!=null&&x.keydown)&&u(L))},p=function(L){L.key!==void 0&&(gb(l2(L.code)),l.current=!1,x!=null&&x.keyup&&u(L,!0))},M=c||w?.document||document;return M.addEventListener("keyup",p),M.addEventListener("keydown",v),n&&Hi(b,x?.splitKey).forEach(function(H){return n.addHotkey(Ei(H,x?.combinationKey,x?.description))}),function(){M.removeEventListener("keyup",p),M.removeEventListener("keydown",v),n&&Hi(b,x?.splitKey).forEach(function(H){return n.removeHotkey(Ei(H,x?.combinationKey,x?.description))})}}},[c,b,x,d]),i}var H4=K(n0()),hb=/Mac OS/.test(navigator.userAgent)?"Cmd":"Ctrl",_6={runCode:`[${hb} + b]`,toggleFilesSidebar:`[${hb} + e]`};function fb(o){let t=xo(i=>i.toggleShowFilesPanel),r=Tt(i=>i.status),e=(0,H4.useCallback)(()=>{r==="idle"&&o()},[o,r]);Fi(["ctrl+b","cmd+b"],e,{preventDefault:!0},[e]),Fi(["ctrl+e","cmd+e","ctrl+\\","cmd+\\"],t,{preventDefault:!0},[]);let a=(0,H4.useRef)({execCode:e,toggleShowFilesPanel:t});return a.current.execCode=e,a.current.toggleShowFilesPanel=t,(0,H4.useCallback)((i,l)=>{let w=a.current;i.addCommand(l.KeyMod.CtrlCmd|l.KeyCode.KeyB,()=>w.execCode()),i.addCommand(l.KeyMod.CtrlCmd|l.KeyCode.KeyE,()=>w.toggleShowFilesPanel()),i.addCommand(l.KeyMod.CtrlCmd|l.KeyCode.Backslash,()=>w.toggleShowFilesPanel())},[])}var aB=o2(z6);function ea(o){let t=o.isH1?"h2":"h1";return Mt.default.createElement("div",{className:(0,M6.default)(o.className,"flex items-center justify-between gap-2 px-2 py-1 bg-toolbar")},o.leftSection||Mt.default.createElement("div",null),Mt.default.createElement(t,{className:"truncate"},o.title),o.rightSection||Mt.default.createElement("div",null))}var E4=o=>Mt.default.createElement("div",{className:"flex gap-2"},o.children);function aa(o){let t="30px",r=z6[o.icon];return Mt.default.createElement(m6,{placement:o.tooltipPlacement||"bottomRight",text:o.tooltip||o.label},Mt.default.createElement("button",{type:"button","aria-label":o.label,onClick:o.onClick,className:"transition-colors hover:text-accent-400"},Mt.default.createElement(r,{size:t,className:o.iconClassName})))}function yb(){let o=xo(r=>r.layout),t=xo(r=>r.toggleColumnLayout);return Mt.default.createElement(aa,{label:o==="single-column"?"Switch to two column layout":"Switch to single column layout",icon:"LayoutToggleIcon",iconClassName:(0,M6.default)("transition-transform",o==="single-column"?"rotate-90":""),onClick:t,tooltipPlacement:"bottomLeft"})}function xb(){let o=xo(e=>e.showFilesPanel),t=xo(e=>e.toggleShowFilesPanel),r=o?"Hide files panel":"Show files panel";return Mt.default.createElement(aa,{label:r,tooltip:`${r} ${_6.toggleFilesSidebar}`,icon:"SidebarIcon",onClick:t,tooltipPlacement:"bottomLeft",iconClassName:"rotate-180"})}function mb(o){return Mt.default.createElement(aa,{label:o.isCollapsed?"Expand output panel":"Collapse output panel",icon:"ChevronDownIcon",onClick:o.onClick,tooltipPlacement:"bottomRight",iconClassName:(0,M6.default)("transition-transform",o.isCollapsed?"rotate-180":"")})}var zb=32,kb={big:60},Mb=()=>{let[o,t]=(0,zo.useState)(!1),r=xo(f=>f.layout),e=(0,zo.useRef)(null),a=hw("height",{groupId:Hc,minPx:zb,maxPx:zb*2}),c=Pm(),[i,l]=(0,zo.useState)(!0),w=t2(f=>f.clearLogs),b=(0,zo.useCallback)(()=>{let f=e.current;f&&(f.isCollapsed()?f.expand(kb.big):f.collapse())},[]),y=Tt(f=>f.status);return(0,zo.useEffect)(()=>{let f=e.current;f&&y==="running"&&o&&f.expand(kb.big)},[y,o]),zo.default.createElement(Bc,{ref:e,className:(0,_b.default)("bg-vscodebg/40 pb-2",r==="two-columns"?"rounded-l-sm":"rounded-t-sm"),defaultSize:r==="single-column"?.01:void 0,collapsible:r==="single-column",collapsedSize:a.minSize,minSize:r==="single-column"?a.maxSize:5,onCollapse:()=>t(!0),onExpand:()=>t(!1)},zo.default.createElement(ea,{title:c,className:"h-[32px]",rightSection:zo.default.createElement(E4,null,r==="single-column"?zo.default.createElement(mb,{isCollapsed:o,onClick:b}):null,zo.default.createElement(aa,{label:i?"Turn off autoscroll":"Enable autoscroll",icon:i?"ListPin":"ListScrollDown",tooltipPlacement:r==="single-column"?"topRight":"bottomRight",onClick:()=>l(f=>!f)}),zo.default.createElement(aa,{label:"Clear logs",icon:"ListClear",tooltipPlacement:r==="single-column"?"topRight":"bottomRight",onClick:w}))}),o?null:zo.default.createElement(vw,{isAutoScroll:i}))},Pm=()=>{let o=Tt(),t="Output";if(o.lastFilename){let r=o.status==="running"?" (running)":"";t=`${t}: ${o.lastFilename} ${r}`}return t};var R6=K(n0());var rg=K(n0());function Om(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function Cb(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),r.push.apply(r,e)}return r}function Pi(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Cb(Object(r),!0).forEach(function(e){Om(o,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):Cb(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}function Nm(o,t){if(o==null)return{};var r={},e=Object.keys(o),a,c;for(c=0;c<e.length;c++)a=e[c],!(t.indexOf(a)>=0)&&(r[a]=o[a]);return r}function Lb(o,t){if(o==null)return{};var r=Nm(o,t),e,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(a=0;a<c.length;a++)e=c[a],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(o,e)&&(r[e]=o[e])}return r}function Vb(o,t){return Rm(o)||Tm(o,t)||Im(o,t)||Dm()}function Rm(o){if(Array.isArray(o))return o}function Tm(o,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(o)))){var r=[],e=!0,a=!1,c=void 0;try{for(var i=o[Symbol.iterator](),l;!(e=(l=i.next()).done)&&(r.push(l.value),!(t&&r.length===t));e=!0);}catch(w){a=!0,c=w}finally{try{!e&&i.return!=null&&i.return()}finally{if(a)throw c}}return r}}function Im(o,t){if(o){if(typeof o=="string")return Sb(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Sb(o,t)}}function Sb(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=o[r];return e}function Dm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zm(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function Hb(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),r.push.apply(r,e)}return r}function Eb(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Hb(Object(r),!0).forEach(function(e){Zm(o,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):Hb(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}function jm(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(a,c){return c(a)},e)}}function B4(o){return function t(){for(var r=this,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return a.length>=o.length?o.apply(this,a):function(){for(var i=arguments.length,l=new Array(i),w=0;w<i;w++)l[w]=arguments[w];return t.apply(r,[].concat(a,l))}}}function S6(o){return{}.toString.call(o).includes("Object")}function Um(o){return!Object.keys(o).length}function A4(o){return typeof o=="function"}function Ym(o,t){return Object.prototype.hasOwnProperty.call(o,t)}function qm(o,t){return S6(t)||s2("changeType"),Object.keys(t).some(function(r){return!Ym(o,r)})&&s2("changeField"),t}function Xm(o){A4(o)||s2("selectorType")}function Wm(o){A4(o)||S6(o)||s2("handlerType"),S6(o)&&Object.values(o).some(function(t){return!A4(t)})&&s2("handlersType")}function $m(o){o||s2("initialIsRequired"),S6(o)||s2("initialType"),Um(o)&&s2("initialContent")}function Km(o,t){throw new Error(o[t]||o.default)}var Gm={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},s2=B4(Km)(Gm),C6={changes:qm,selector:Xm,handler:Wm,initial:$m};function Qm(o){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};C6.initial(o),C6.handler(t);var r={current:o},e=B4(tz)(r,t),a=B4(oz)(r),c=B4(C6.changes)(o),i=B4(Jm)(r);function l(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(y){return y};return C6.selector(b),b(r.current)}function w(b){jm(e,a,c,i)(b)}return[l,w]}function Jm(o,t){return A4(t)?t(o.current):t}function oz(o,t){return o.current=Eb(Eb({},o.current),t),t}function tz(o,t,r){return A4(t)?t(o.current):Object.keys(r).forEach(function(e){var a;return(a=t[e])===null||a===void 0?void 0:a.call(t,o.current[e])}),r}var rz={create:Qm},Bb=rz;var ez={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}},Ab=ez;function az(o){return function t(){for(var r=this,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return a.length>=o.length?o.apply(this,a):function(){for(var i=arguments.length,l=new Array(i),w=0;w<i;w++)l[w]=arguments[w];return t.apply(r,[].concat(a,l))}}}var Fb=az;function cz(o){return{}.toString.call(o).includes("Object")}var Pb=cz;function iz(o){return o||Ob("configIsRequired"),Pb(o)||Ob("configType"),o.urls?(nz(),{paths:{vs:o.urls.monacoBase}}):o}function nz(){console.warn(Nb.deprecation)}function lz(o,t){throw new Error(o[t]||o.default)}var Nb={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Ob=Fb(lz)(Nb),dz={config:iz},Rb=dz;var sz=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(a){return r.reduceRight(function(c,i){return i(c)},a)}},Tb=sz;function Ib(o,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&o[r]&&Object.assign(t[r],Ib(o[r],t[r]))}),Pi(Pi({},o),t)}var Db=Ib;var wz={type:"cancelation",msg:"operation is manually canceled"};function vz(o){var t=!1,r=new Promise(function(e,a){o.then(function(c){return t?a(wz):e(c)}),o.catch(a)});return r.cancel=function(){return t=!0},r}var L6=vz;var bz=Bb.create({config:Ab,isInitialized:!1,resolve:null,reject:null,monaco:null}),Zb=Vb(bz,2),F4=Zb[0],V6=Zb[1];function gz(o){var t=Rb.config(o),r=t.monaco,e=Lb(t,["monaco"]);V6(function(a){return{config:Db(a.config,e),monaco:r}})}function uz(){var o=F4(function(t){var r=t.monaco,e=t.isInitialized,a=t.resolve;return{monaco:r,isInitialized:e,resolve:a}});if(!o.isInitialized){if(V6({isInitialized:!0}),o.monaco)return o.resolve(o.monaco),L6(Oi);if(window.monaco&&window.monaco.editor)return jb(window.monaco),o.resolve(window.monaco),L6(Oi);Tb(pz,fz)(yz)}return L6(Oi)}function pz(o){return document.body.appendChild(o)}function hz(o){var t=document.createElement("script");return o&&(t.src=o),t}function fz(o){var t=F4(function(e){var a=e.config,c=e.reject;return{config:a,reject:c}}),r=hz("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return o()},r.onerror=t.reject,r}function yz(){var o=F4(function(r){var e=r.config,a=r.resolve,c=r.reject;return{config:e,resolve:a,reject:c}}),t=window.require;t.config(o.config),t(["vs/editor/editor.main"],function(r){jb(r),o.resolve(r)},function(r){o.reject(r)})}function jb(o){F4().monaco||V6({monaco:o})}function xz(){return F4(function(o){var t=o.monaco;return t})}var Oi=new Promise(function(o,t){return V6({resolve:o,reject:t})}),mz={config:gz,init:uz,__getMonacoInstance:xz},$2=mz;var Ub=K(n0(),1),vo=K(n0(),1);var Yb=K(n0(),1),E6=K(n0(),1),qb=K(n0(),1),Wb=K(n0(),1),B6=K(n0(),1),Oz=K(n0(),1);var Gb=K(n0(),1),Y1=K(n0(),1);var A6=K(n0(),1),zz={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ni=zz,kz={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},_z=kz;function Mz({children:o}){return qb.default.createElement("div",{style:_z.container},o)}var Cz=Mz,Sz=Cz;function Lz({width:o,height:t,isEditorReady:r,loading:e,_ref:a,className:c,wrapperProps:i}){return E6.default.createElement("section",{style:{...Ni.wrapper,width:o,height:t},...i},!r&&E6.default.createElement(Sz,null,e),E6.default.createElement("div",{ref:a,style:{...Ni.fullWidth,...!r&&Ni.hide},className:c}))}var Vz=Lz,Xb=(0,Yb.memo)(Vz);function Hz(o){(0,Wb.useEffect)(o,[])}var $b=Hz;function Ez(o,t,r=!0){let e=(0,B6.useRef)(!0);(0,B6.useEffect)(e.current||!r?()=>{e.current=!1}:o,t)}var dt=Ez;function P4(){}function ca(o,t,r,e){return Bz(o,e)||Az(o,t,r,e)}function Bz(o,t){return o.editor.getModel(Kb(o,t))}function Az(o,t,r,e){return o.editor.createModel(t,r,e?Kb(o,e):void 0)}function Kb(o,t){return o.Uri.parse(t)}function Fz({original:o,modified:t,language:r,originalLanguage:e,modifiedLanguage:a,originalModelPath:c,modifiedModelPath:i,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:w=!1,theme:b="light",loading:y="Loading...",options:f={},height:m="100%",width:x="100%",className:s,wrapperProps:d={},beforeMount:n=P4,onMount:u=P4}){let[v,p]=(0,vo.useState)(!1),[M,H]=(0,vo.useState)(!0),L=(0,vo.useRef)(null),k=(0,vo.useRef)(null),C=(0,vo.useRef)(null),B=(0,vo.useRef)(u),O=(0,vo.useRef)(n),A=(0,vo.useRef)(!1);$b(()=>{let U=$2.init();return U.then(Q=>(k.current=Q)&&H(!1)).catch(Q=>Q?.type!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>L.current?P():U.cancel()}),dt(()=>{if(L.current&&k.current){let U=L.current.getOriginalEditor(),Q=ca(k.current,o||"",e||r||"text",c||"");Q!==U.getModel()&&U.setModel(Q)}},[c],v),dt(()=>{if(L.current&&k.current){let U=L.current.getModifiedEditor(),Q=ca(k.current,t||"",a||r||"text",i||"");Q!==U.getModel()&&U.setModel(Q)}},[i],v),dt(()=>{let U=L.current.getModifiedEditor();U.getOption(k.current.editor.EditorOption.readOnly)?U.setValue(t||""):t!==U.getValue()&&(U.executeEdits("",[{range:U.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),U.pushUndoStop())},[t],v),dt(()=>{L.current?.getModel()?.original.setValue(o||"")},[o],v),dt(()=>{let{original:U,modified:Q}=L.current.getModel();k.current.editor.setModelLanguage(U,e||r||"text"),k.current.editor.setModelLanguage(Q,a||r||"text")},[r,e,a],v),dt(()=>{k.current?.editor.setTheme(b)},[b],v),dt(()=>{L.current?.updateOptions(f)},[f],v);let Y=(0,vo.useCallback)(()=>{if(!k.current)return;O.current(k.current);let U=ca(k.current,o||"",e||r||"text",c||""),Q=ca(k.current,t||"",a||r||"text",i||"");L.current?.setModel({original:U,modified:Q})},[r,t,a,o,e,c,i]),q=(0,vo.useCallback)(()=>{!A.current&&C.current&&(L.current=k.current.editor.createDiffEditor(C.current,{automaticLayout:!0,...f}),Y(),k.current?.editor.setTheme(b),p(!0),A.current=!0)},[f,b,Y]);(0,vo.useEffect)(()=>{v&&B.current(L.current,k.current)},[v]),(0,vo.useEffect)(()=>{!M&&!v&&q()},[M,v,q]);function P(){let U=L.current?.getModel();l||U?.original?.dispose(),w||U?.modified?.dispose(),L.current?.dispose()}return vo.default.createElement(Xb,{width:x,height:m,isEditorReady:v,loading:y,_ref:C,className:s,wrapperProps:d})}var Pz=Fz,DB=(0,Ub.memo)(Pz);function Nz(o){let t=(0,A6.useRef)();return(0,A6.useEffect)(()=>{t.current=o},[o]),t.current}var Rz=Nz,H6=new Map;function Tz({defaultValue:o,defaultLanguage:t,defaultPath:r,value:e,language:a,path:c,theme:i="light",line:l,loading:w="Loading...",options:b={},overrideServices:y={},saveViewState:f=!0,keepCurrentModel:m=!1,width:x="100%",height:s="100%",className:d,wrapperProps:n={},beforeMount:u=P4,onMount:v=P4,onChange:p,onValidate:M=P4}){let[H,L]=(0,Y1.useState)(!1),[k,C]=(0,Y1.useState)(!0),B=(0,Y1.useRef)(null),O=(0,Y1.useRef)(null),A=(0,Y1.useRef)(null),Y=(0,Y1.useRef)(v),q=(0,Y1.useRef)(u),P=(0,Y1.useRef)(),U=(0,Y1.useRef)(e),Q=Rz(c),w0=(0,Y1.useRef)(!1),t0=(0,Y1.useRef)(!1);$b(()=>{let d0=$2.init();return d0.then(l0=>(B.current=l0)&&C(!1)).catch(l0=>l0?.type!=="cancelation"&&console.error("Monaco initialization: error:",l0)),()=>O.current?e0():d0.cancel()}),dt(()=>{let d0=ca(B.current,o||e||"",t||a||"",c||r||"");d0!==O.current?.getModel()&&(f&&H6.set(Q,O.current?.saveViewState()),O.current?.setModel(d0),f&&O.current?.restoreViewState(H6.get(c)))},[c],H),dt(()=>{O.current?.updateOptions(b)},[b],H),dt(()=>{!O.current||e===void 0||(O.current.getOption(B.current.editor.EditorOption.readOnly)?O.current.setValue(e):e!==O.current.getValue()&&(t0.current=!0,O.current.executeEdits("",[{range:O.current.getModel().getFullModelRange(),text:e,forceMoveMarkers:!0}]),O.current.pushUndoStop(),t0.current=!1))},[e],H),dt(()=>{let d0=O.current?.getModel();d0&&a&&B.current?.editor.setModelLanguage(d0,a)},[a],H),dt(()=>{l!==void 0&&O.current?.revealLine(l)},[l],H),dt(()=>{B.current?.editor.setTheme(i)},[i],H);let b0=(0,Y1.useCallback)(()=>{if(!(!A.current||!B.current)&&!w0.current){q.current(B.current);let d0=c||r,l0=ca(B.current,e||o||"",t||a||"",d0||"");O.current=B.current?.editor.create(A.current,{model:l0,automaticLayout:!0,...b},y),f&&O.current.restoreViewState(H6.get(d0)),B.current.editor.setTheme(i),l!==void 0&&O.current.revealLine(l),L(!0),w0.current=!0}},[o,t,r,e,a,c,b,y,f,i,l]);(0,Y1.useEffect)(()=>{H&&Y.current(O.current,B.current)},[H]),(0,Y1.useEffect)(()=>{!k&&!H&&b0()},[k,H,b0]),U.current=e,(0,Y1.useEffect)(()=>{H&&p&&(P.current?.dispose(),P.current=O.current?.onDidChangeModelContent(d0=>{t0.current||p(O.current.getValue(),d0)}))},[H,p]),(0,Y1.useEffect)(()=>{if(H){let d0=B.current.editor.onDidChangeMarkers(l0=>{let D=O.current.getModel()?.uri;if(D&&l0.find(X=>X.path===D.path)){let X=B.current.editor.getModelMarkers({resource:D});M?.(X)}});return()=>{d0?.dispose()}}return()=>{}},[H,M]);function e0(){P.current?.dispose(),m?f&&H6.set(c,O.current.saveViewState()):O.current.getModel()?.dispose(),O.current.dispose()}return Y1.default.createElement(Xb,{width:x,height:s,isEditorReady:H,loading:w,_ref:A,className:d,wrapperProps:n})}var Iz=Tz,Dz=(0,Gb.memo)(Iz),Qb=Dz;var Ct=K(n0()),og=K(Ti());var O4=(0,Ct.createContext)(void 0),K2=()=>(0,Ct.useContext)(O4).userFileSystem,tg=()=>(0,Ct.useContext)(O4).originalFileSystem,Zz=`ERROR!

Error reading file from the virtual filesystem. This should not happen`,F6=o=>{let r=K2().readFile(o);return r.status==="ok"?r:{content:Zz,language:"typescript",mode:"readonly"}},jz=(o,t,r)=>{let e=t.readFile(r),a=o.readFile(r);return e.status!=="ok"||a.status!=="ok"?!1:e.mode==="system"&&e.content!==a.content};function P6(o){let[t,r]=(0,Ct.useState)(!1),{originalFileSystem:e,userFileSystem:a}=(0,Ct.useContext)(O4),c=(0,Ct.useCallback)(()=>{r(jz(e,a,o))},[o,e,a]);return(0,Ct.useEffect)(()=>(c(),a.addSingleFileListener(o,(0,og.default)(c,Lc(1)))),[o,c,a]),t}var Uz={minimap:{enabled:!1},dragAndDrop:!1,readOnly:!1,wordWrap:"on",scrollbar:{useShadows:!1},tabSize:2,autoIndent:"full",detectIndentation:!1,formatOnType:!0,formatOnPaste:!0,insertSpaces:!0,fixedOverflowWidgets:!0,readOnlyMessage:{value:"This file is read-only",isTrusted:!0}};function eg({editorRef:o,activeFile:t,className:r,onMount:e,onEditorChange:a}){let c=F6(t);return rg.default.createElement(Qb,{height:"100%",className:"",wrapperProps:{className:r},theme:"vs-dark",path:t,defaultLanguage:c.language,defaultValue:c.content,options:{...Uz,readOnly:c.mode==="readonly"},onChange:a,onMount:(i,l)=>{o.current=i,i.getModel()?.updateOptions({tabSize:2}),e?.(i,l)}})}var Ag=K(W1());var wt=K(n0());var ag=K(W1()),mr=K(n0());function cg({onCodeExec:o}){let t=Tt(i=>i),r="15px",e=t.status==="running",a=e?"Stop running program":"Execute the code",c=`${a}${e?"":` ${_6.runCode}`}`;return mr.default.createElement(m6,{text:c,placement:"bottomRight"},mr.default.createElement("button",{className:(0,ag.default)("px-2 text-toolbar transition-colors rounded-md flex gap-1 items-center",e?"bg-red-500 hover:bg-red-600 animate-pulse":"bg-green-500 hover:bg-green-600"),"aria-label":a,onClick:o},e?mr.default.createElement(mr.default.Fragment,null,"Stop",mr.default.createElement(Vi,{size:r})):mr.default.createElement(mr.default.Fragment,null,"Run",mr.default.createElement(Li,{size:r}))))}var O6=K(n0()),ig=o=>O6.default.createElement("a",{href:"https://github.com/Scthe/z3-online-editor",className:"hover:text-accent-400 transition-colors relative top-[2px]",title:"See the repo on GitHub","aria-label":"See the repo on GitHub",target:"_blank",rel:"noopener noreferrer"},O6.default.createElement("svg",{style:{fill:"currentcolor"},width:o.size,height:o.size,viewBox:"0 0 24 24","aria-hidden":!0},O6.default.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})));var Ho=K(n0());var st=K(n0()),Cg=K(a4());var Jt=K(n0()),ng=K(W1()),lg=K(W1()),dg=({className:o,children:t,disabled:r,danger:e,small:a,...c})=>Jt.default.createElement("button",{type:"button",disabled:r,className:(0,ng.default)("font-medium rounded-md transition-colors",a?"px-2 py-1":"px-4 py-2",!r&&!e&&"text-accent-500 hover:bg-accent-500/10",!r&&e&&"text-red-500 hover:bg-red-500/10",r&&"cursor-not-allowed text-neutral-500",o),...c},t);function sg(o){return Jt.default.createElement("div",{className:"flex justify-end mt-4"},o.children)}function Ii(o){return Jt.default.createElement("p",{className:"mb-4 last-of-type:mb-0"},o.children)}var wg=({children:o,sectionTitle:t})=>Jt.default.createElement("span",{className:(0,lg.default)("text-accent-500 font-bold",t&&"inline-block mr-2 uppercase")},o);function vg(o){let t="20px";return Jt.default.createElement("div",{className:"absolute top-2 right-2"},Jt.default.createElement("button",{className:"p-2 transition-colors hover:text-accent-500",onClick:o.onClick,"aria-label":"Close the modal"},Jt.default.createElement("span",{className:"not-sr-only","aria-hidden":!0},Jt.default.createElement("svg",{fill:"currentcolor",height:t,width:t,viewBox:"0 0 512 512"},Jt.default.createElement("polygon",{points:`512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256`})))))}var ia;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(ia||(ia={}));var bg=function(o){return o};var gg="beforeunload",Yz="hashchange",qz="popstate";function fg(o){o===void 0&&(o={});var t=o,r=t.window,e=r===void 0?document.defaultView:r,a=e.history;function c(){var C=hg(e.location.hash.substr(1)),B=C.pathname,O=B===void 0?"/":B,A=C.search,Y=A===void 0?"":A,q=C.hash,P=q===void 0?"":q,U=a.state||{};return[U.idx,bg({pathname:O,search:Y,hash:P,state:U.usr||null,key:U.key||"default"})]}var i=null;function l(){if(i)x.call(i),i=null;else{var C=ia.Pop,B=c(),O=B[0],A=B[1];if(x.length){if(O!=null){var Y=y-O;Y&&(i={action:C,location:A,retry:function(){L(Y*-1)}},L(Y))}}else p(C)}}e.addEventListener(qz,l),e.addEventListener(Yz,function(){var C=c(),B=C[1];Di(B)!==Di(f)&&l()});var w=ia.Pop,b=c(),y=b[0],f=b[1],m=pg(),x=pg();y==null&&(y=0,a.replaceState(Io({},a.state,{idx:y}),""));function s(){var C=document.querySelector("base"),B="";if(C&&C.getAttribute("href")){var O=e.location.href,A=O.indexOf("#");B=A===-1?O:O.slice(0,A)}return B}function d(C){return s()+"#"+(typeof C=="string"?C:Di(C))}function n(C,B){return B===void 0&&(B=null),bg(Io({pathname:f.pathname,hash:"",search:""},typeof C=="string"?hg(C):C,{state:B,key:Xz()}))}function u(C,B){return[{usr:C.state,key:C.key,idx:B},d(C)]}function v(C,B,O){return!x.length||(x.call({action:C,location:B,retry:O}),!1)}function p(C){w=C;var B=c();y=B[0],f=B[1],m.call({action:w,location:f})}function M(C,B){var O=ia.Push,A=n(C,B);function Y(){M(C,B)}if(v(O,A,Y)){var q=u(A,y+1),P=q[0],U=q[1];try{a.pushState(P,"",U)}catch{e.location.assign(U)}p(O)}}function H(C,B){var O=ia.Replace,A=n(C,B);function Y(){H(C,B)}if(v(O,A,Y)){var q=u(A,y),P=q[0],U=q[1];a.replaceState(P,"",U),p(O)}}function L(C){a.go(C)}var k={get action(){return w},get location(){return f},createHref:d,push:M,replace:H,go:L,back:function(){L(-1)},forward:function(){L(1)},listen:function(B){return m.push(B)},block:function(B){var O=x.push(B);return x.length===1&&e.addEventListener(gg,ug),function(){O(),x.length||e.removeEventListener(gg,ug)}}};return k}function ug(o){o.preventDefault(),o.returnValue=""}function pg(){var o=[];return{get length(){return o.length},push:function(r){return o.push(r),function(){o=o.filter(function(e){return e!==r})}},call:function(r){o.forEach(function(e){return e&&e(r)})}}}function Xz(){return Math.random().toString(36).substr(2,8)}function Di(o){var t=o.pathname,r=t===void 0?"/":t,e=o.search,a=e===void 0?"":e,c=o.hash,i=c===void 0?"":c;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function hg(o){var t={};if(o){var r=o.indexOf("#");r>=0&&(t.hash=o.substr(r),o=o.substr(0,r));var e=o.indexOf("?");e>=0&&(t.search=o.substr(e),o=o.substr(0,e)),o&&(t.pathname=o)}return t}var Zi=`/*
Z3 Theorem Prover is a satisfiability modulo theories (first-order formulas that also include e.g. integer or bit-vector arithmetic, arrays, etc.) solver developed by Microsoft. It is targeted at solving problems that arise in software verification and program analysis. Its main applications are extended static checking, test case generation, and predicate abstraction.

See './readme.mjs' for a complete overview.

Below you can find a simple practical example: Sudoku solver (from "examples/sudoku.mjs").
*/
`;var ji=`# Z3 Theorem Prover

Z3 Theorem Prover is a satisfiability modulo theories (first-order formulas that also include e.g. integer or bit-vector arithmetic, arrays, etc.) solver developed by Microsoft. It is targeted at solving problems arising in software verification and program analysis. Its main applications are extended static checking, test case generation, and predicate abstraction.

## Official Z3 Links

- <https://www.microsoft.com/en-us/research/project/z3-3/> - official page
- <https://github.com/Z3Prover/z3> - GitHub
- <https://github.com/Z3Prover/z3/blob/master/src/api/js/src/high-level/types.ts> - TypeScript typings
- <https://github.com/Z3Prover/z3/wiki#background> - wiki
- <https://z3prover.github.io/papers/programmingz3.html> - official tutorial
- <https://z3prover.github.io/papers/z3internals.html> - Z3 internals
- <https://microsoft.github.io/z3guide/docs/logic/intro/> - official tutorial
- <https://github.com/Z3Prover/z3/wiki/Publications> - publications

## Community Z3 links

- <https://z3prover.github.io/api/html/namespacez3py> - PY API docs
- <https://ericpony.github.io/z3py-tutorial/guide-examples.htm>
- <https://ericpony.github.io/z3py-tutorial/advanced-examples.htm>
- <https://ece.uwaterloo.ca/~agurfink/ece653/assets/pdf/W04-UsingZ3.pdf>
- <https://book.jorianwoltjer.com/cryptography/custom-ciphers/z3-solver#bitwise-operations>
- "Programming with Triggers" by Micha\u0142 Moskal for a cool description of the Hyper-V kernel verification story.
- <https://github.com/Z3Prover/z3/wiki/Slides> - link aggregation
- <https://github.com/0vercl0k/z3-playground> - more example apps


## Where should I start?

I recommend starting with \`docs/numeric.mjs\`. It showcases basic operations for integers and real numbers. Afterward, check out \`examples/\`.


## Files in this project

- \`docs\`. Examples of each of the major Z3 features.
    - \`arrays.mjs\`. Z3 arrays. They are not that popular in practice.
    - \`bitVec.mjs\`. Bit vectors for single-bit manipulations or unsigned/signed two-complements arithmetic.
    - \`booleans.mjs\`. Logic operators, De Morgan's Law, uninterpreted functions.
    - \`context.mjs\`. Z3 context is the basis of the API. This file contains an example for each of the accessible functions.
    - \`numeric.mjs\`. Showcases operations on integers and real numbers. That is a good starting point.
    - \`quantifiers.mjs\`. Explains \`ForAll\` and \`Exists\` quantifiers.
    - \`solver.mjs\`. Examples of Solver class (e.g. to get multiple solutions), \`solve()\`, and \`simplify()\` functions.
- \`examples\`. Apps using Z3.
- \`types\`. Shortcut for TypeScript typings. The editor already handles JSDoc and "go to definition".
    - JSDoc examples might be in Python, as this is the main language used with Z3. It should be similar enough.

`;var Ui=`/*
Docs:
- https://microsoft.github.io/z3guide/docs/theories/Arithmetic

At the end of this file you will find following utils: _assertEvaluatesTrue(), _printModelValues(), _assertIsOK(), _executeSolver().
*/

// Example: Integers
// find *some* x0, y0 that satisfy:
// x0 >= 5 && y0 <= 2 && (x0 + y0 == 6)
const x0 = ctx.Int.const('x0');
const y0 = Int.const('y0'); // we can skip "ctx."
const solver0 = new ctx.Solver();
solver0.add(x0.ge(5)); // x0 >= 5
// there is an implicit And() between 2 different calls to 'solver0.add(...)'
solver0.add(And(y0.le(2), x0.add(y0).eq(6))); // y0 <= 2 && (x0 + y0 == 6)
await _executeSolver('[Integers]', solver0);

// Example: Quadratic Equation with Real (decimal points)
// find *one* of roots of:
// x^2 - 7x + 10 == 0
// see "docs/solver.mjs" for example how to find more
const xQE = Real.const('xQE'); // has decimal points
const solverQE = new ctx.Solver();
solverQE.add(xQE.pow(2).sub(xQE.mul(7)).add(9).eq(0));
await _executeSolver('[Quadratic Equation]', solverQE);

// Example: Mix Int, Real types
const [aR, bR] = Real.consts('aR bR');
const [sI, tI] = Int.consts('sI rI');
console.log('[Mix Int, Real]', (await simplify(aR.add(sI).add(1))).toString());
console.log('[Mix Int, Real]', (await simplify(ToReal(tI).add(bR))).toString());

// Example: System of equations
// Solve system of equations:
// x^2 + y^2 == 3
// x^3 == 2
const xSoE = Real.const('xSoE');
const ySoE = Real.const('ySoE');
await _printModelValues(
  '[System of equations]',
  await solve(xSoE.pow(2).add(ySoE.pow(2)).eq(3), xSoE.pow(3).eq(2))
);

// Example: Real Arithmetic
// Check for precision errors
const n1 = Real.val('1/2');
const n2 = Real.val('0.5');
const n3 = Real.val(0.5);
await _assertEvaluatesTrue(
  '[Real Arithmetic, halfs equality]',
  And(n1.eq(n2), n1.eq(n3))
);
// test preserve limited precision
const n4 = Real.val('-1/3');
const n5 = Real.val('-0.3333333333333333333333333333333333');
await _assertEvaluatesTrue(
  '[Real Arithmetic, -1/3 precision]',
  n4.neq(n5) // should be treated as different
);

// Example: Non-linear arithmetic
// https://microsoft.github.io/z3guide/docs/theories/Arithmetic#non-linear-arithmetic
// https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L354
const xNLA = Real.const('xNLA');
const yNLA = Real.const('yNLA');
const zNLA = Real.const('zNLA');

const solver = new Solver();
solver.add(xNLA.mul(xNLA).add(yNLA.mul(yNLA)).eq(1)); // x^2 + y^2 == 1
solver.add(xNLA.mul(xNLA).mul(xNLA).add(zNLA.mul(zNLA).mul(zNLA)).lt('1/2')); // x^3 + z^3 < 1/2
const modelNLA = await _executeSolver('[Non-linear arithmetic]', solver);
_assertIsOK(isRealVal(modelNLA.get(xNLA)), 'xNLA');
// solution of y is a polynomial
// https://stackoverflow.com/a/69740906
_assertIsOK(isReal(modelNLA.get(yNLA)), 'yNLA');
_assertIsOK(isRealVal(modelNLA.get(zNLA)), 'zNLA');

// Example: Sum
// Find 3 numbers greater than 0 that sum up to 9. Two numbers are even.
const xSum = Int.consts('xSum ySum zSum');
await _printModelValues(
  '[Sum]',
  await solve(
    ...xSum.map((e) => e.gt(0)), // numbers greater than 0
    Sum(...xSum).eq(9), // that sum up to 9.
    // Swap each number for 1 if it is even or 0 if odd.
    // Then sum these numbers as they have to match 2
    Sum(...xSum.map((e) => If(e.mod(2).eq(0), 1, 0))).eq(2)
  )
);

// ----- UTILS:
/** Run solver and print all model values */
async function _executeSolver(prefix, solver) {
  const result = await solver.check();
  if (result !== 'sat') {
    console.log(prefix, 'is unsatisfiable');
    return;
  }

  const model = solver.model();
  _printModelValues(prefix, model);
  return model;
}

/** Iterate over all model declarations and print the values */
function _printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}

/** assert that set of constraints evaluates to True */
async function _assertEvaluatesTrue(prefix, expr) {
  const result = await solve(expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(\`\${prefix} returned '\${result}'\`);
  } else {
    console.log(\`\${prefix} OK\`);
  }
}

/** assert that value is OK */
function _assertIsOK(val, msg) {
  if (!val) {
    console.error(\`Assertion error: '\${msg}'\`);
  }
}
`;var Yi=`/*
Z3 supports Boolean operators:
- And,
- Or,
- Not,
- Implies (implication),
- If (if-then-else).

Bi-implications are represented using equality .eq().
Comment notation uses "^" and "v" for AND, OR operators.

At the end of this file you will find following utils: _assertEvaluatesTrue(), _printModelValues(), _evalExpr().
*/

// Example: generic 2 OP operatiors
const testBool = async (prefix, op, opStr) => {
  const tt = await _evalExpr(op(true, true));
  const tf = await _evalExpr(op(true, false));
  const ft = await _evalExpr(op(false, true));
  const ff = await _evalExpr(op(false, false));
  console.log(
    prefix,
    \`(T \${opStr} T) <=> \${tt.toUpperCase()}, \`,
    \`(T \${opStr} F) <=> \${tf.toUpperCase()}, \`,
    \`(F \${opStr} T) <=> \${ft.toUpperCase()}, \`,
    \`(F \${opStr} F) <=> \${ff.toUpperCase()}\`
  );
};
await testBool('[Implies]', Implies, '->');
await testBool('[Iff]', Iff, '<=>');
await testBool('[Eq]', Eq, '=');
await testBool('[Xor]', Xor, '^');
await testBool('[And]', And, 'AND');
await testBool('[Or]', Or, 'OR');
console.log('[Not(true)]', await _evalExpr(Not(true)));
console.log('[Not(false)]', await _evalExpr(Not(false)));

// Example: Implies
const [a0, b0] = Bool.consts('p q r');
await _assertEvaluatesTrue(
  '[Implies]',
  Implies(a0, b0), // a0 -> b0
  // if both a0 and b0 are FALSE, the implication is satisfied
  a0.not(),
  b0.not()
);

// Example: Logic
const [p0, q0, r0] = Bool.consts('p q r');
await _assertEvaluatesTrue(
  '[Logic]',
  Implies(p0, q0), // p0 -> q0
  r0.eq(q0), // r0 <==> q0, therefore p0 -> r0
  Or(Not(p0), r0) // ~p0 v r0
);

// Example: Simplification
// (p ^ q ^ TRUE) simplifies to (p ^ q)
const simplifyResult0 = await simplify(And(p0, q0, true));
console.log('[Simplify (p ^ q ^ TRUE)]', simplifyResult0.toString());
// (p ^ FALSE) can only evaluate to FALSE
const simplifyResult1 = await simplify(And(p0, false));
console.log('[Simplify (p ^ FALSE)]', simplifyResult1.toString());

// Example: Usage with numbers
const p2 = Bool.const('p2');
const x2 = Real.const('x2');
await _printModelValues(
  '[Usage with numbers]',
  await solve(
    Or(x2.lt(5), x2.gt(10)), // (x2 < 5 || x2 > 10) &&
    Or(p2, x2.pow(2).eq(2)), // (p2 || (x2)^2 == 2) &&
    Not(p2) // p2 is FALSE
  )
);

// Example: De Morgan's Law
const [x3, y3] = Bool.consts('x3 y3');
await _assertEvaluatesTrue(
  "[De Morgan's Law]",
  Eq(
    Not(And(x3, y3)), // ~(x3 ^ y3) ==
    Or(Not(x3), Not(y3)) // ~x3 v ~y3
  )
);

// Example: Functions
// https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L130
const sort_Int = Int.sort();
const [x4, y4] = Int.consts('x4 y4');
const f4 = ctx.Function.declare('g', sort_Int, sort_Int);
// confirms x = y implies g(x) = g(y)
await _assertEvaluatesTrue(
  '[Functions: x=y -> g(x) = g(y)]',
  Implies(
    x4.eq(y4), //
    f4.call(x4).eq(f4.call(y4))
  ) //
);
// disproves x = y implies g(g(x)) = g(y)
const conjecture = Implies(
  x4.eq(y4), //
  f4.call(f4.call(x4)).eq(f4.call(y4)) //
);
await _assertEvaluatesTrue(
  '[Functions: x=y -> g(g(x)) != g(y)]',
  Not(conjecture)
);

// ----- UTILS:
/** assert that set of constraints evaluates to True */
async function _assertEvaluatesTrue(prefix, ...expr) {
  const result = await solve(...expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(\`\${prefix} returned '\${result}'\`);
  } else {
    console.log(\`\${prefix} OK\`);
  }
}

/** Iterate over all model declarations and print the values */
function _printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}
`;var qi=`/*
At the end of this file you will find following utils: _printModelValues().

When to use:
- Solver class - when you have many complicated/dynamically added constraints. Particularly when looking for multiple solutions.
- \`solve()\` function - when you have a few simple constraints. Much easier and shorter to use than \`Solver\`.
- \`simplify()\` - this function has a different purpose. It does not search for the solutions. It takes an expression and simplifies it instead. For example, in two-valued logic, \`AND(p,  FALSE)\` simplifies to FALSE.

*/

// Example: basic solver usage
// Solver.check() returns a promise that resolves
// to 'sat' or 'unsat', depending on if the constraints
// are satisfiable.
// We also have .push() and .pop() to temporarly
// add a new constraint.
const [x0, y0] = Int.consts('x0 y0');
const solver0 = new Solver();
solver0.add(x0.gt(10), y0.eq(x0.add(2))); // x0 > 10 && (y0 == x0 + 2)
console.log('[Basic usage] Solving constraints in the solver s ...');
console.log('[Basic usage] Result:', await solver0.check());
// start of the scope
console.log('[Basic usage] Create a new scope...');
solver0.push();
solver0.add(y0.lt(11)); // add 3rd constraint: y0 < 11
console.log('[Basic usage] Solving updated set of constraints...');
console.log('[Basic usage] Result:', await solver0.check());
console.log('[Basic usage] Restoring state...');
solver0.pop();
// end of the scope
console.log('[Basic usage] Solving restored set of constraints...');
console.log('[Basic usage] Result:', await solver0.check());

// Example: print many solutions
// x1 >= 5 && y1 <= 2 && (x1 + y1 == 6)
// expecting e.g. (x1 = 5, y1 = 1), (x1 = 6, y1 = 0), (x1 = 7, y1 = -1), etc.
const [x1, y1] = Int.consts('x1 y1');
const solver1 = new ctx.Solver();
solver1.add(x1.ge(5), y1.le(2), x1.add(y1).eq(6));
let printedSolutions = 0;
while (printedSolutions < 5) {
  const prefix = \`[Many solutions \${printedSolutions}]\`;
  // await solveExample(prefix, solver1);
  await solver1.check();
  const model = solver1.model();
  const x1_val = model.eval(x1).value(); // .value() is only available on IntVal, while we "technically" have Arith here
  const y1_val = model.eval(y1).value();
  console.log(prefix, \`x1 = \${x1_val}, y1 = \${y1_val}\`);

  // https://brandonrozek.com/blog/obtaining-multiple-solutions-z3/
  // add constraint: AND NOT(x1 == x1_val AND y1 == y1_val)
  // using De Morgan's Law: AND (x1 != x1_val OR y1 != y1_val)
  solver1.add(Or(x1.neq(x1_val), y1.neq(y1_val)));

  printedSolutions += 1;
}

// Example: Eval s-expr
// https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L120
const solverSExpr = new Solver();
solverSExpr.fromString(
  // xSExpr < 2 && xSExpr > 0
  '(declare-const xSExpr Int) (assert (and (< xSExpr 2) (> xSExpr 0)))'
);
let sExprOk = true;
// execute first time
let resultSExpr = await solverSExpr.check();
if (resultSExpr !== 'sat') {
  console.error(\`[Eval s-expr] Did not load correctly\`);
  sExprOk = false;
}
// add additional constraint on same variable
const xSExpr = Int.const('xSExpr');
solverSExpr.add(xSExpr.neq(1)); // add constraint x != 1
resultSExpr = await solverSExpr.check();
if (resultSExpr === 'sat') {
  console.error(\`[Eval s-expr] Did not add extra constraint correctly\`);
  sExprOk = false;
}
if (sExprOk) {
  console.log(\`[Eval s-expr] OK\`);
}

// Example: using solve()
// Sometimes there is no need to create full Solver object
const [xSolve, ySolve] = Real.consts('xSolve ySolve');
await _printModelValues(
  '[solve()]',
  await solve(xSolve.pow(2).add(ySolve.pow(2)).eq(3), xSolve.pow(3).eq(2))
);

// Example: Simplification
const [p0, q0, r0] = Bool.consts('p q r');
// (p ^ q ^ TRUE) simplifies to (p ^ q)
const simplifyResult0 = await simplify(And(p0, q0, true));
console.log('[Simplify (p ^ q ^ TRUE)]', simplifyResult0.toString());
// (p ^ FALSE) can only evaluate to FALSE
const simplifyResult1 = await simplify(And(p0, false));
console.log('[Simplify (p ^ FALSE)]', simplifyResult1.toString());

// Example: Simplification, numbers
// Rewrite as simpler s-expr
// x + y + 2*x + 3
const xSimpl = Int.const('x');
const ySimpl = Int.const('y');
const simplifyResult = await simplify(
  xSimpl.add(ySimpl).add(xSimpl.mul(2)).add(3)
);
console.log('[Simplify, numbers]', simplifyResult.toString());

// Example: Substitution
const testSubstitution = (prefix, expr, expectedExpr) => {
  if (expr.eqIdentity(expectedExpr)) {
    console.log(\`\${prefix} OK\`);
  } else {
    console.error(\`\${prefix} Failed\`);
  }
};
const [xSubst, ySubst, zSubst] = Int.consts('xSubst ySubst zSubst');
const exprSubst = xSubst.add(ySubst); // x + y
// swap x for z to produce: z + y
const exprAfterSubst = substitute(exprSubst, [xSubst, zSubst]);
testSubstitution('[Substitution]', exprAfterSubst, zSubst.add(ySubst));

// Example: Substitution term
// (x + y) * (1 - (x + y))
const exprSubst2 = xSubst.add(ySubst).mul(Int.val(1).sub(xSubst.add(ySubst)));
// swap (x + y) for z to produce: z * (1 - z)
const exprAfterSubst2 = substitute(exprSubst2, [xSubst.add(ySubst), zSubst]);
testSubstitution(
  '[Substitution term]',
  exprAfterSubst2,
  zSubst.mul(Int.val(1).sub(zSubst))
);

// ----- UTILS:
/** Iterate over all model declarations and print the values */
function _printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}
`;var Xi=`/*
Docs
 - https://microsoft.github.io/z3guide/docs/theories/Bitvectors
 - https://book.jorianwoltjer.com/cryptography/custom-ciphers/z3-solver#bitwise-operations

At the end of this file you will find following utils: _evalBitVec(), _evalBool(), _evalExpr(), _parseBitVec2Number().
*/

const b0 = BitVec.val(0, 8); // 0 in 8bit
const b1 = BitVec.val(1, 8); // 0b01 in 8bit
const b2 = BitVec.val(2, 8); // 0b10 in 8bit
const b4 = BitVec.val(4, 8); // 0b100 in 8bit
const b255 = BitVec.val(255, 8); // 0b11111111 in 8bit
const b256 = BitVec.val(256, 8); // 0b0 in 8bit (overflow)
const b257 = BitVec.val(257, 8); // 0b1 in 8bit (overflow)
console.log(
  \`b0=\${b0.value()},\`,
  \`b1=\${b1.value()},\`,
  \`b2=\${b2.value()},\`,
  \`b4=\${b4.value()},\`,
  \`b255=\${b255.value()},\`,
  \`b256=\${b256.value()},\`,
  \`b257=\${b257.value()}\`
);
// test basic operations with 0b100 == dec(4)
console.log('--- basic operations');
console.log(\`(!0b100) is \`, await _evalBitVec(b4.neg()));
console.log(\`(0b100 << 1) is \`, await _evalBitVec(b4.shl(1)));
console.log(\`(0b100 >> 1) is \`, await _evalBitVec(b4.shr(1)));
console.log(
  \`(0b100 << 1) - (logical) shift is \`,
  await _evalBitVec(b4.lshr(1))
);
console.log(\`(0b100 + 1) is \`, await _evalBitVec(b4.add(1)));
console.log(\`(0b100 - 1) is \`, await _evalBitVec(b4.sub(1)));
console.log(\`repeat(0b100, 2) is \`, await _evalBitVec(b4.repeat(2))); // repeat "0000 0100"
console.log(
  \`BV2Int(0b11111111, signed) is \`,
  await _evalExpr(BV2Int(b255, true))
);
console.log(
  \`BV2Int(0b11111111, unsigned) is \`,
  await _evalExpr(BV2Int(b255, false))
);
console.log(\`Int2BV(255, base=8) is \`, await _evalBitVec(Int2BV(255, 8)));
// bitwise
console.log(\`(0b100 & 1) is \`, await _evalBitVec(b4.and(1)));
console.log(\`(0b100 | 1) is \`, await _evalBitVec(b4.or(1)));
console.log(\`(not 0b100) is \`, await _evalBitVec(b4.not()));

// test basic operations with 0
console.log('--- operations on 0');
console.log(\`(0 + 1) is \`, await _evalBitVec(b0.add(1)));
console.log(\`(0 - 1) is \`, await _evalBitVec(b0.sub(1)));
console.log(
  \`(0 - 1, signed) underflows:\`,
  !(await _evalBool(b0.subNoUndeflow(1, true)))
);
// unsigned is 0..255, so it undeflows at -1
console.log(
  \`(0 - 1, unsigned) underflows:\`,
  !(await _evalBool(b0.subNoUndeflow(1, false)))
);

// test basic operations with 255
console.log('--- operations on 255');
console.log(\`(255 + 1) is \`, await _evalBitVec(b255.add(1)));
console.log(\`(255 - 1) is \`, await _evalBitVec(b255.sub(1)));
console.log(
  \`(255 + 1, signed) overflows:\`,
  !(await _evalBool(b255.addNoOverflow(1, true)))
);
// unsigned is 0..255, so it overflows at +1
console.log(
  \`(255 + 1, unsigned) overflows:\`,
  !(await _evalBool(b255.addNoOverflow(1, false)))
);

console.log('--- Operations examples');

// Example: shift base
// ZeroExt extends with leading 0s
console.log(
  \`[shift base (0b0001).zeroExt(4)]\`,
  await _evalBitVec(BitVec.val(1, 4).zeroExt(4))
);
console.log(
  \`[shift base (0b0100).zeroExt(4)]\`,
  await _evalBitVec(BitVec.val(4, 4).zeroExt(4))
);
console.log(
  \`[shift base (0b1000).zeroExt(4)]\`,
  await _evalBitVec(BitVec.val(8, 4).zeroExt(4))
);
// SignExt extends based on sign bit
console.log(
  \`[shift base (0b0001).signExt(4)]\`, // sign bit is 0
  await _evalBitVec(BitVec.val(1, 4).signExt(4))
);
console.log(
  \`[shift base (0b0100).signExt(4)]\`, // sign bit is 0
  await _evalBitVec(BitVec.val(4, 4).signExt(4))
);
console.log(
  \`[shift base (0b1000).signExt(4)]\`, // sign bit is 1, add 4 leading 1s
  await _evalBitVec(BitVec.val(8, 4).signExt(4))
);

// Example: extract
console.log(
  \`[0b000001.extract(0, 0)]\`,
  await _evalBitVec(BitVec.val(0b000001, 8).extract(0, 0))
);
console.log(
  \`[0b000010.extract(1, 1)]\`,
  await _evalBitVec(BitVec.val(0b000010, 8).extract(1, 1))
);
console.log(
  \`[0b000110.extract(2, 1)]\`,
  await _evalBitVec(BitVec.val(0b000110, 8).extract(2, 1))
);
console.log(
  \`[0b011110.extract(4, 1)]\`,
  await _evalBitVec(BitVec.val(0b011110, 8).extract(4, 1))
);
console.log(
  \`[0b011110.extract(2, 3)]\`,
  await _evalBitVec(BitVec.val(0b001100, 8).extract(3, 2))
);

// Example: concat binary representations
// result = 0b(00000001 00000000 00000001 00000000)
console.log(
  \`[concat b1, b0, b1, b0]\`,
  await _evalBitVec(Concat(b1, b0, b1, b0))
);
// result = 0b1010
console.log(
  \`[concat last bits of b1, b0, b1, b0]\`,
  await _evalBitVec(
    Concat(
      b1.extract(0, 0),
      b0.extract(0, 0),
      b1.extract(0, 0),
      b0.extract(0, 0)
    )
  )
);

// Example: bitwise deMorgan's law
// (!x AND !y) == !(x OR y)
const [xDeM, yDeM] = BitVec.consts('xDeM yDeM', 64);
console.log(
  "[Bitwise deMorgan's law]",
  await _evalExpr(
    xDeM
      .not()
      .and(yDeM.not()) //
      .eq(xDeM.or(yDeM).not())
  )
);

// Example: bitwise arithmetic
// Number x is a power of 2 iff (x & (x-1)) == 0
// e.g. 1, 2, 4, 8, 16, 32, 64, ..
const b_64 = (x) => BitVec.val(x, 64);
const isPowerOfTwo = (x) => _evalBool(x.and(x.sub(b_64(1))).eq(b_64(0)));
console.log('[isPowerOfTwo 0]', await isPowerOfTwo(b_64(0)));
console.log('[isPowerOfTwo 1]', await isPowerOfTwo(b_64(1)));
console.log('[isPowerOfTwo 2]', await isPowerOfTwo(b_64(2)));
console.log('[isPowerOfTwo 5]', await isPowerOfTwo(b_64(5)));
console.log('[isPowerOfTwo 8]', await isPowerOfTwo(b_64(8)));

// Example: signed vs unsigned
// https://microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#bit-vectors
const xSvU = BitVec.val(10, 8);
const ySvU = BitVec.val(240, 8);
console.log('[10 < 240, unsigned]', await _evalBool(xSvU.ult(ySvU)));
console.log('[10 <= 240, unsigned]', await _evalBool(xSvU.ule(ySvU)));
console.log('[10 > 240, unsigned]', await _evalBool(xSvU.ugt(ySvU)));
console.log('[10 >= 240, unsigned]', await _evalBool(xSvU.uge(ySvU)));
console.log('[10 < 240, signed]', await _evalBool(xSvU.slt(ySvU)));
console.log('[10 <= 240, signed]', await _evalBool(xSvU.sle(ySvU)));
console.log('[10 > 240, signed]', await _evalBool(xSvU.sgt(ySvU)));
console.log('[10 >= 240, signed]', await _evalBool(xSvU.sge(ySvU)));

// Example: popcount
// Count number of raised bits
// E.g. 0b0110 is 2, 0b1111 is 4 etc.
const popcount = async (x) =>
  _parseBitVec2Number(
    await _evalExpr(
      // extract bit 0, turn into 32-bit int so we can add normally
      x
        .extract(0, 0)
        .zeroExt(32)
        .add(x.extract(1, 1).zeroExt(32)) // add bit 1
        .add(x.extract(2, 2).zeroExt(32)) // add bit 2
        .add(x.extract(3, 3).zeroExt(32)) // add bit 3
    )
  );
console.log('[popcount      0]', await popcount(b_64(0)));
console.log('[popcount    0b1]', await popcount(b_64(1)));
console.log('[popcount   0b10]', await popcount(b_64(2)));
console.log('[popcount  0b011]', await popcount(b_64(3)));
console.log('[popcount  0b100]', await popcount(b_64(4)));
console.log('[popcount  0b101]', await popcount(b_64(5)));
console.log('[popcount  0b110]', await popcount(b_64(6)));
console.log('[popcount  0b111]', await popcount(b_64(7)));
console.log('[popcount 0b1000]', await popcount(b_64(8)));
console.log('[popcount 0b1001]', await popcount(b_64(9)));
console.log('[popcount 0b1010]', await popcount(b_64(10)));
console.log('[popcount 0b1011]', await popcount(b_64(11)));
console.log('[popcount 0b1100]', await popcount(b_64(12)));
console.log('[popcount 0b1101]', await popcount(b_64(13)));
console.log('[popcount 0b1110]', await popcount(b_64(14)));
console.log('[popcount 0b1111]', await popcount(b_64(15)));

// ----- UTILS:
/** Evaluate BitVec expression and pretty-print it */
async function _evalBitVec(expr) {
  const result = await _evalExpr(expr);
  const num = _parseBitVec2Number(result);
  if (isNaN(num)) return 'NaN';
  return \`0b\${num.toString(2)} (dec \${num}), \${expr.size()}bit\`;
}

/** Evaluate bool expression */
async function _evalBool(expr) {
  const result = await _evalExpr(expr);
  return result === 'true';
}

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}

/** Parse BitVec string to a number */
function _parseBitVec2Number(x) {
  return x.startsWith('#b')
    ? parseInt(x.replace('#b', ''), 2)
    : parseInt(x.replace('#x', '0x'), 16);
}
`;var Wi=`/*
- https://microsoft.github.io/z3guide/docs/theories/Arrays/

It's rare to need z3's Array. You probably want e.g.
 > const [x, y] = Int.consts('x y');
Or a JavaScript array:
 > [0, 0, 0].map((_, idx) => Int.const(\`x_\${idx}\`));

 
From https://ericpony.github.io/z3py-tutorial/advanced-examples.htm:
"Arrays in Z3 are used to model unbounded or very large arrays. Arrays should not be used to model small finite collections of values. It is usually much more efficient to create different variables using list comprehensions."
*/

// "Array" is a reserved keyword in JS,
// we have to access it through ctx.Array().
// a0 is an array from integer to integer.
const a0 = ctx.Array.const('a1', Int.sort(), Int.sort());
// NOTE: (Set T) can be implemented as (Array T Bool)

// Example: Write and read Int
const a1 = Store(a0, 1, 10); // a0[1] = 10; (makes a copy)
console.log('[Write and read Int]', (await simplify(Select(a1, 1))).toString());

// Example: Write and read Arith
const x0 = Int.const('x0');
const a2 = Store(a0, 2, x0.add(1)); // a0[2] = x0 + 1; (makes a copy)
console.log(
  '[Write and read Arith]',
  (await simplify(Select(a2, 2))).toString()
);

// Example: Use with solver
const solver = new Solver();
solver.add(x0.eq(9));
await solver.check();
const model = solver.model();
console.log(
  '[Write and read Arith with Solver]',
  'x0 =',
  model.eval(x0).toString(), // 9
  ', array[2] =',
  // we can use a2.select(...) instead of Select(a2, ...)
  model.eval(a2.select(2)).toString() // 9 + 1
);
`;var $i=`/*
Docs:
- https://microsoft.github.io/z3guide/docs/logic/Quantifiers/
- https://github.com/Z3Prover/z3/blob/983763213b0207201d9b6b9ede9eb3dd7c4f05ec/src/api/js/src/high-level/high-level.test.ts#L649

At the end of this file you will find following utils: __assertEvaluatesTrue().
*/

// Example: ForAll
const [xFA, yFA] = Int.consts('xFA yFA');
await _assertEvaluatesTrue(
  '[ForAll]',
  ForAll(
    [xFA, yFA],
    // x and y being different implies one is greater then other
    // x != y -> (x < y) v (x > y)
    xFA.neq(yFA).implies(xFA.lt(yFA).or(xFA.gt(yFA)))
  )
);

// Example: Exists
const [xE, yE, zE] = Int.consts('xE yE zE');
// impossible quantifier
// (x > y) ^ (Exists z: (x <= z <= y))
const quantifier = Exists([zE], xE.gt(yE).and(xE.le(zE).and(zE.le(yE))));
await _assertEvaluatesTrue('[Exists]', Not(quantifier));

// Example: Exists (scope test)
const [xE2, yE2, zE2] = Int.consts('xE2 yE2 zE2');
// (x <= z <= y)
const quantifier2 = Exists([zE2], xE2.le(zE2).and(zE2.le(yE2)));
await _assertEvaluatesTrue(
  '[Exists (scope test)]',
  // Trying to prove:
  // (x > y) ^ (Exists z: (x <= z <= y))
  Not(xE2.gt(yE2).and(quantifier2))
);

// Example: Lambda
const [xL, yL] = Int.consts('xL yL');
const L = Lambda([xL, yL], xL.add(yL));
await _assertEvaluatesTrue(
  '[Lambda]',
  // use Array operations to "invoke" the lambda
  L.select(Int.val(2), Int.val(5)) //
    .eq(Int.val(7))
);

// ----- UTILS:
/** assert that set of constraints evaluates to True */
async function _assertEvaluatesTrue(prefix, ...expr) {
  const result = await solve(...expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(\`\${prefix} returned '\${result}'\`);
  } else {
    console.log(\`\${prefix} OK\`);
  }
}
`;var Ki=`/*
At the end of this file you will find following utils: _printModelValues(), _evalExpr().
*/

// Example: eqIdentity
// Compares 2 ASTs
const [x, y, z] = Consts('x y z', Int.sort());
console.log(
  '[eqIdentity]',
  ctx.eqIdentity(
    x.add(z), // (x + z)
    substitute(x.add(y), [y, z]) // in (x + y) replace y with z
  )
);

// Example: Create from simple types
console.log('[from Int]', await _evalExpr(ctx.from(3)));
// Personally, I recommend to use Real.val(3.2) instead
console.log('[from Real]', await _evalExpr(ctx.from(3.2)));
console.log('[from Bool]', await _evalExpr(ctx.from(true)));

// Example: If
console.log(
  '[If true ? 1 : 0]',
  await _evalExpr(If(ctx.from(true), ctx.from(1), ctx.from(0)))
);
console.log(
  '[If false ? 1 : 0]',
  await _evalExpr(
    If(false, 1, 0) // you can write this way too
  )
);

// Example: Bools
const testBool = async (prefix, op, opStr) => {
  const tt = await _evalExpr(op(true, true));
  const tf = await _evalExpr(op(true, false));
  const ft = await _evalExpr(op(false, true));
  const ff = await _evalExpr(op(false, false));
  console.log(
    prefix,
    \`(T \${opStr} T) <=> \${tt.toUpperCase()}, \`,
    \`(T \${opStr} F) <=> \${tf.toUpperCase()}, \`,
    \`(F \${opStr} T) <=> \${ft.toUpperCase()}, \`,
    \`(F \${opStr} F) <=> \${ff.toUpperCase()}\`
  );
};
await testBool('[Implies]', Implies, '->');
await testBool('[Iff]', Iff, '<=>');
await testBool('[Eq]', Eq, '=');
await testBool('[Xor]', Xor, '^');
await testBool('[And]', And, 'AND');
console.log('[And(TRUE, TRUE, TRUE)]', await _evalExpr(And(true, true, true)));
console.log(
  '[And(TRUE, FALSE, TRUE)]',
  await _evalExpr(And(true, false, true))
);
console.log(
  '[And(FALSE, FALSE, FALSE)]',
  await _evalExpr(And(false, false, false))
);
await testBool('[Or]', Or, 'OR');
console.log('[Or(TRUE, TRUE, TRUE)]', await _evalExpr(Or(true, true, true)));
console.log('[Or(TRUE, FALSE, TRUE)]', await _evalExpr(Or(true, false, true)));
console.log(
  '[Or(FALSE, FALSE, FALSE)]',
  await _evalExpr(Or(false, false, false))
);
console.log('[Not(true)]', await _evalExpr(Not(true)));
console.log('[Not(false)]', await _evalExpr(Not(false)));

// Example: Arith
// 4 + 2 + 1 = 7. No exposed context fn. Provided for completion
console.log('[4.add(2).add(1)]', await _evalExpr(ctx.from(4).add(2).add(1)));
// 4 - 2 - 1 = 1
console.log('[Sub(4, 2, 1)]', await _evalExpr(Sub(ctx.from(4), 2, 1)));
// 2 * 3 * 4 = 24
console.log('[Product(2, 3, 4)]', await _evalExpr(Product(ctx.from(2), 3, 4)));
console.log('[Div(4, 2)]', await _evalExpr(Div(ctx.from(4), 2)));
console.log('[Div(2, 4)]', await _evalExpr(Div(ctx.from(2), 4)));
console.log('[Div(1, 3)]', await _evalExpr(Div(ctx.from(1), 3)));
console.log('[Div(Real(4), 2)]', await _evalExpr(Div(Real.val(4.0), 2.0)));
console.log('[Div(Real(2), 4)]', await _evalExpr(Div(Real.val(2.0), 4.0)));
console.log('[Div(Real(1), 3)]', await _evalExpr(Div(Real.val(1.0), 3.0)));
console.log('[Mod(4, 2)]', await _evalExpr(Mod(ctx.from(4), 2)));
console.log('[Mod(4, 3)]', await _evalExpr(Mod(ctx.from(4), 3)));
console.log('[Mod(-4, 3)]', await _evalExpr(Mod(ctx.from(-4), 3)));
console.log('[Sqrt(4)]', await _evalExpr(Sqrt(4)));
console.log('[Sqrt(2)]', await _evalExpr(Sqrt(2)));
console.log('[Cbrt(8)]', await _evalExpr(Cbrt(8)));
console.log('[Cbrt(2)]', await _evalExpr(Cbrt(2)));
console.log('[Neg(2)]', await _evalExpr(Neg(ctx.from(2))));
console.log('[Neg(-2)]', await _evalExpr(Neg(ctx.from(-2))));
console.log('[Neg(0)]', await _evalExpr(Neg(ctx.from(0))));

// Example: Distinct
// This function is used VERY often
await _printModelValues(
  '[Distinct]',
  await solve(
    x.ge(0),
    x.lt(3), // x in range [0, 1, 2]
    y.ge(0),
    y.lt(3), // y in range [0, 1, 2]
    z.ge(0),
    z.lt(3), // z in range [0, 1, 2]
    // x, y, z only have same 3 possible values,
    // and all of them need to have different values (unique)
    Distinct(x, y, z)
  )
);

// Example: Sum
// This function is used VERY often
await _printModelValues(
  '[Sum]',
  await solve(
    x.ge(0),
    x.lt(3), // x in range [0, 1, 2]
    y.ge(0),
    y.lt(3), // y in range [0, 1, 2]
    z.ge(0),
    z.lt(3), // z in range [0, 1, 2]
    // x, y, z only have same 3 possible values,
    // and they have to sum to 6
    Sum(x, y, z).eq(6)
  )
);

// ----- UTILS:
/** Iterate over all model declarations and print the values */
function _printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}
`;var N6=`/*
https://en.wikipedia.org/wiki/Sudoku
*/

const PUZZLE = \`
....94.3.
...51...7
.89....4.
......2.8
.6.2.1.5.
1.2......
.7....52.
9...65...
.4.97....
\`;
console.log('Solving sudoku:');
PUZZLE.split('\\n').forEach((e) => console.log(e));

const cells = [];
// 9x9 matrix of integer variables
for (let i = 0; i < 9; i++) {
  const row = [];
  for (let j = 0; j < 9; j++) {
    row.push(Int.const(\`x_\${i}_\${j}\`));
  }
  cells.push(row);
}

// 'ctx' is the main Z3 Context object. Use it to access all library functions.
// You can also skip 'ctx' as all it's properties were added to the scope.
// E.g. 'const solver = new Solver();' would also work.
const solver = new ctx.Solver();

// each cell contains a value 1<=x<=9
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    solver.add(cells[i][j].ge(1), cells[i][j].le(9));
  }
}

// each row contains a digit only once
for (let i = 0; i < 9; i++) {
  solver.add(Distinct(...cells[i]));
}

// each column contains a digit only once
for (let j = 0; j < 9; j++) {
  const column = [];
  for (let i = 0; i < 9; i++) {
    column.push(cells[i][j]);
  }
  solver.add(Distinct(...column));
}

// each 3x3 contains a digit at most once
for (let iSquare = 0; iSquare < 3; iSquare++) {
  for (let jSquare = 0; jSquare < 3; jSquare++) {
    const square = [];

    for (let i = iSquare * 3; i < iSquare * 3 + 3; i++) {
      for (let j = jSquare * 3; j < jSquare * 3 + 3; j++) {
        square.push(cells[i][j]);
      }
    }

    solver.add(Distinct(...square));
  }
}

// set the known numbers
const PUZZLE_LINES = PUZZLE.trim().split('\\n');
for (let i = 0; i < 9; i++) {
  const line = PUZZLE_LINES[i].trim();
  for (let j = 0; j < 9; j++) {
    const char = line[j];
    if (char !== '.') {
      solver.add(cells[i][j].eq(Number.parseInt(char)));
    }
  }
}

console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  console.log('Found solution:');
  const model = solver.model();

  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      const cell = model.eval(cells[i][j]);
      const value = cell.value();
      row.push(Number(value));
    }
    console.log(JSON.stringify(row));
  }
} else {
  console.log('Could not find the solution');
}
`;var Gi=`/*
Guess code consisting of 3 digits. You know that:

- 291 has one number that is correct and on correct spot
- 245 has one number that is correct but on incorrect spot
- 463 has two numbers that are correct but on incorrect spots
- 578 all numbers are invalid and do not exist in the final code
- 569 has one number that is correct but on incorrect spot

*/

// code numbers
const [x0, x1, x2] = Int.consts('x0 x1 x2');
const solver = new ctx.Solver();

// digits
solver.add(x0.ge(0), x0.le(9), x1.ge(0), x1.le(9), x2.ge(0), x2.le(9));

// 291 has one number that is correct and on correct spot
solver.add(
  Or(
    And(x0.eq(2), x1.neq(9), x2.neq(1)),
    And(x0.neq(2), x1.eq(9), x2.neq(1)),
    And(x0.neq(2), x1.neq(9), x2.eq(1))
  )
);

// 245 has one number that is correct but on incorrect spot
solver.add(goodValueBadSpot([2, 4, 5], 1));

// 463 has two numbers that are correct but on incorrect spots
solver.add(goodValueBadSpot([4, 6, 3], 2));

// 578 all numbers are invalid and do not exist in the final code
solver.add(
  x0.neq(5),
  x0.neq(7),
  x0.neq(8),
  x1.neq(5),
  x1.neq(7),
  x1.neq(8),
  x2.neq(5),
  x2.neq(7),
  x2.neq(8)
);

// - 569 has one number that is correct but on incorrect spot
solver.add(goodValueBadSpot([5, 6, 9], 1));

// solve
console.log('Running the solver');
const status = await solver.check();

if (status === 'sat') {
  const model = solver.model();
  console.log(
    'Found solution:',
    Number(model.eval(x0).value()),
    Number(model.eval(x1).value()),
    Number(model.eval(x2).value())
  );
} else {
  console.log('Could not find the solution');
}

function goodValueBadSpot(nums, count) {
  // console.log(\`goodValueBadSpot([\${nums.join(",")}], count=\${count})\`)
  const code = [x0, x1, x2];
  const exps = [];

  for (let i = 0; i < 3; i++) {
    let strDebug = [];

    for (let j = 0; j < 3; j++) {
      if (i == j) {
        // negate, as it would mean correct number on correct place
        // strDebug.push(\`code[\${i}] != \${nums[i]}\`);
        solver.add(code[j].neq(nums[i]));
      } else {
        // strDebug.push(\`code[\${j}] ?= \${nums[i]}\`);
        exps.push(If(code[j].eq(nums[i]), 1, 0));
      }
    }
  }

  return Sum(...exps).eq(count);
}
`;var Qi=`/*
Chess problem:

Place eight chess queens on an 8x8 chessboard so that
no two queens attack each other.
*/

// In chess, each queen's position has row and column.
// So each column has 1 queen. Each Int contains a row number
// for this particular column.
const QUEENS = Int.consts('q0 q1 q2 q3 q4 q5 q6 q7');

const solver = new ctx.Solver();

// valid position
QUEENS.forEach((v) => {
  solver.add(v.ge(0), v.le(7));
});

// each row is different
solver.add(Distinct(...QUEENS));

// they cannot share diagonal
for (let col = 0; col < 8; col++) {
  for (let col2 = col + 1; col2 < 8; col2++) {
    if (col2 == col) continue;

    solver.add(
      QUEENS[col].sub(QUEENS[col2]).neq(col2 - col),
      QUEENS[col].sub(QUEENS[col2]).neq(col - col2)
    );
  }
}

// solve
console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  const model = solver.model();
  QUEENS.forEach((v) => {
    const pos = Number(model.eval(v).value()); // range: [0..7]
    const str = '.'.repeat(8);
    console.log(setChar(str, pos, 'Q').split('').join(' '));
  });
} else {
  console.log('Could not find the solution');
}

function setChar(str, index, char) {
  var a = str.split('');
  a[index] = char;
  return a.join('');
}
`;var Ji=`/*
https://en.wikipedia.org/wiki/Zebra_Puzzle


1. There are five houses.
2. The Englishman lives in the red house.
3. The Spaniard owns the dog.
4. Coffee is drunk in the green house.
5. The Ukrainian drinks tea.
6. The green house is immediately to the right of the ivory house.
7. The Old Gold smoker owns snails.
8. Kools are smoked in the yellow house.
9. Milk is drunk in the middle house.
10. The Norwegian lives in the first house.
11. The man who smokes Chesterfields lives in the house next to the man with the fox.
12. Kools are smoked in the house next to the house where the horse is kept.
13. The Lucky Strike smoker drinks orange juice.
14. The Japanese smokes Parliaments.
15. The Norwegian lives next to the blue house.

Now, who drinks water? Who owns the zebra? 

*/

const HOUSE_COLOR = {
  Blue: 0,
  Green: 1,
  Ivory: 2,
  Red: 3,
  Yellow: 4,
};
const NATIONALITY = {
  Japanese: 0,
  Ukrainian: 1,
  Spaniard: 2,
  Norwegian: 3,
  Englishman: 4,
};
const DRINK = {
  Milk: 0,
  Tea: 1,
  Coffee: 2,
  OrangeJuice: 3,
  Water: 4,
};
const SMOKE = {
  Chesterfield: 0,
  OldGold: 1,
  LuckyStrike: 2,
  Parliament: 3,
  Kools: 4,
};
const PET = {
  Zebra: 0,
  Snails: 1,
  Horse: 2,
  Dog: 3,
  Fox: 4,
};

const createPerson = (idx) => ({
  nationality: Int.const(\`nationality_\${idx}\`),
  houseColor: Int.const(\`houseColor_\${idx}\`),
  pet: Int.const(\`pet_\${idx}\`),
  drink: Int.const(\`drink_\${idx}\`),
  smoke: Int.const(\`smoke_\${idx}\`),
});

const DATA = [
  createPerson(0),
  createPerson(1),
  createPerson(2),
  createPerson(3),
  createPerson(4),
];

const solver = new ctx.Solver();

// each value is valid
DATA.forEach((p) => {
  solver.add(p.nationality.ge(0), p.nationality.le(4));
  solver.add(p.houseColor.ge(0), p.houseColor.le(4));
  solver.add(p.pet.ge(0), p.pet.le(4));
  solver.add(p.drink.ge(0), p.drink.le(4));
  solver.add(p.smoke.ge(0), p.smoke.le(4));
});

// no repeating values
solver.add(Distinct(...DATA.map((e) => e.nationality)));
solver.add(Distinct(...DATA.map((e) => e.houseColor)));
solver.add(Distinct(...DATA.map((e) => e.pet)));
solver.add(Distinct(...DATA.map((e) => e.drink)));
solver.add(Distinct(...DATA.map((e) => e.smoke)));

// 2. The Englishman lives in the red house.
solver.add(
  ...DATA.map((e) =>
    Implies(
      e.nationality.eq(NATIONALITY.Englishman),
      e.houseColor.eq(HOUSE_COLOR.Red)
    )
  )
);

// 3. The Spaniard owns the dog.
solver.add(
  ...DATA.map((e) =>
    Implies(e.nationality.eq(NATIONALITY.Spaniard), e.pet.eq(PET.Dog))
  )
);

// 4. Coffee is drunk in the green house.
solver.add(
  ...DATA.map((e) =>
    Implies(e.houseColor.eq(HOUSE_COLOR.Green), e.drink.eq(DRINK.Coffee))
  )
);

// 5. The Ukrainian drinks tea.
solver.add(
  ...DATA.map((e) =>
    Implies(e.nationality.eq(NATIONALITY.Ukrainian), e.drink.eq(DRINK.Tea))
  )
);

// 6. The green house is immediately to the right of the ivory house.
for (let i = 0; i < 4; i++) {
  solver.add(
    Implies(
      DATA[i].houseColor.eq(HOUSE_COLOR.Ivory),
      DATA[i + 1].houseColor.eq(HOUSE_COLOR.Green)
    )
  );
}

// 7. The Old Gold smoker owns snails.
solver.add(
  ...DATA.map((e) => Implies(e.smoke.eq(SMOKE.OldGold), e.pet.eq(PET.Snails)))
);

// 8. Kools are smoked in the yellow house.
solver.add(
  ...DATA.map((e) =>
    Implies(e.smoke.eq(SMOKE.Kools), e.houseColor.eq(HOUSE_COLOR.Yellow))
  )
);

// 9. Milk is drunk in the middle house.
solver.add(DATA[2].drink.eq(DRINK.Milk));

// 10. The Norwegian lives in the first house.
solver.add(DATA[0].nationality.eq(NATIONALITY.Norwegian));

// 11. The man who smokes Chesterfields lives in the house next to the man with the fox.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].smoke.eq(SMOKE.Chesterfield);
  const right = i === 4 ? false : DATA[i + 1].smoke.eq(SMOKE.Chesterfield);

  solver.add(Implies(e.pet.eq(PET.Fox), Or(left, right)));
});

// 12. Kools are smoked in the house next to the house where the horse is kept.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].smoke.eq(SMOKE.Kools);
  const right = i === 4 ? false : DATA[i + 1].smoke.eq(SMOKE.Kools);

  solver.add(Implies(e.pet.eq(PET.Horse), Or(left, right)));
});

// 13. The Lucky Strike smoker drinks orange juice.
solver.add(
  ...DATA.map((e) =>
    Implies(e.smoke.eq(SMOKE.LuckyStrike), e.drink.eq(DRINK.OrangeJuice))
  )
);

// 14. The Japanese smokes Parliaments.
solver.add(
  ...DATA.map((e) =>
    Implies(
      e.nationality.eq(NATIONALITY.Japanese),
      e.smoke.eq(SMOKE.Parliament)
    )
  )
);

// 15. The Norwegian lives next to the blue house.
DATA.forEach((e, i) => {
  const left = i === 0 ? false : DATA[i - 1].houseColor.eq(HOUSE_COLOR.Blue);
  const right = i === 4 ? false : DATA[i + 1].houseColor.eq(HOUSE_COLOR.Blue);

  solver.add(Implies(e.nationality.eq(NATIONALITY.Norwegian), Or(left, right)));
});

/////////////////////////
// Run the solver

const result = await solver.check();

if (result === 'sat') {
  const model = solver.model();
  const getFromEnum = (Enum, value) => {
    value = Number(model.eval(value).toString());
    return (
      Object.entries(Enum).find(([_name, val]) => val === value)?.[0] || '?'
    );
  };

  const getPerson = (idx) => {
    const p = DATA[idx];
    const nationality = getFromEnum(NATIONALITY, p.nationality);
    const houseColor = getFromEnum(HOUSE_COLOR, p.houseColor);
    const pet = getFromEnum(PET, p.pet);
    const drink = getFromEnum(DRINK, p.drink);
    const smoke = getFromEnum(SMOKE, p.smoke);
    const s = [\`\${houseColor} house\`, nationality, pet, drink, smoke].join(
      ', '
    );
    return \`\${idx + 1}: \${s}\`;
  };

  for (let i = 0; i < 5; i++) {
    console.log(getPerson(i));
  }
} else {
  console.log('No valid solution');
}
`;var on=`function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}

// Example: Kinematic equations 1
// Calculate the distance "d" and time "t" during
// the car breaking to full stop.
// You are given initial speed and deceleration rate.
// Source: https://ericpony.github.io/z3py-tutorial/guide-examples.htm
let [d, a, t, vStart, vFinal] = Real.consts('d a t vStart vFinal');
printModelValues(
  '[Kinematic equations 1]',
  await solve(
    // Kinematic equations
    // d = v*t + a*(t^2)/2
    d.eq(vStart.mul(t).add(a.mul(t).mul(t).div(2))),
    // v = v0 + at
    vFinal.eq(vStart.add(a.mul(t))),
    // constants
    vStart.eq(30),
    vFinal.eq(0), // stops completely
    a.eq(-8)
  )
);

// Example: Kinematic equations 2
// Calculate the distance "d" and final speed
// after acceleration from a full stop.
// You are given time and acceleration rate.
// Source: https://ericpony.github.io/z3py-tutorial/guide-examples.htm
[d, a, t, vStart, vFinal] = Real.consts('d a t vStart vFinal');
printModelValues(
  '[Kinematic equations 2]',
  await solve(
    // Kinematic equations
    // d = v*t + a*(t^2)/2
    d.eq(vStart.mul(t).add(a.mul(t).mul(t).div(2))),
    // v = v0 + at
    vFinal.eq(vStart.add(a.mul(t))),
    // constants
    vStart.eq(0),
    t.eq(4.1),
    a.eq(6)
  )
);
`;var tn=`/*

In mathematics, a square array of distinct integers is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

*/

const SQUARE = [Int.consts('a b c'), Int.consts('d e f'), Int.consts('g h i')];
const ALL_CELLS = SQUARE.flat();
const sum = Int.const('sum');

const solver = new ctx.Solver();

// each cell contains a value 1<=x<=9
ALL_CELLS.forEach((cell) => {
  solver.add(cell.ge(1), cell.le(9));
});

// Each int is unique
solver.add(Distinct(...ALL_CELLS));

// each row sums up to $sum
SQUARE.forEach((row) => {
  solver.add(Sum(...row).eq(sum));
});

// each column sums up to $sum
solver.add(Sum(SQUARE[0][0], SQUARE[1][0], SQUARE[2][0]).eq(sum));
solver.add(Sum(SQUARE[0][1], SQUARE[1][1], SQUARE[2][1]).eq(sum));
solver.add(Sum(SQUARE[0][2], SQUARE[1][2], SQUARE[2][2]).eq(sum));

// each diagonal sums up to $sum
solver.add(Sum(SQUARE[0][0], SQUARE[1][1], SQUARE[2][2]).eq(sum));
solver.add(Sum(SQUARE[2][0], SQUARE[1][1], SQUARE[0][2]).eq(sum));

console.log('Running the solver..');
const status = await solver.check();

if (status === 'sat') {
  console.log('Found solution:');
  const model = solver.model();
  const getVal = (x) => Number(model.eval(x).value());

  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(getVal(SQUARE[i][j]));
    }
    console.log(JSON.stringify(row));
  }
  console.log(\`sum = \${getVal(sum)}\`);
} else {
  console.log('Could not find the solution');
}
`;var rn=`/*
Dog, Cat, Mouse

Spend exactly 100 dollars and buy exactly 100 animals.
\u2022 Dogs cost 15 dollars,
\u2022 cats cost 1 dollar,
\u2022 and mice cost 25 cents each.
You have to buy at least one of each.
How many of each should you buy?

Source:
- https://ece.uwaterloo.ca/~agurfink/ece653/assets/pdf/W04-UsingZ3.pdf#page=28
*/

const [dogs, cats, mice] = Int.consts('dogs cats mice');

await printModelValues(
  await solve(
    // at least one of each
    dogs.ge(1),
    cats.ge(1),
    mice.ge(1),
    // buy exactly 100 animals
    dogs.add(cats).add(mice).eq(100),
    // price sums up to 100
    ToReal(dogs.mul(15).add(cats)) // add dogs and cats
      .add(ToReal(mice).mul(0.25)) // add mice
      .eq(Real.val(100.0))
  )
);

function printModelValues(model) {
  if (!model || typeof model !== 'object') {
    console.error(\`Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(\`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}
`;var en=`/*
https://www.janestreet.com/puzzles/twenty-four-seven-index/


The grid is incomplete. Place numbers in some of the empty cells above so that in total the grid contains one 1, two 2\u2019s, etc., up to seven 7\u2019s. Furthermore, each row and column must contain exactly 4 numbers which sum to 20. Finally, the numbered cells must form a connected region, but every 2-by-2 subsquare in the completed grid must contain at least one empty cell.

The answer to this puzzle is the product of the areas of the connected groups of orthogonally adjacent empty squares in the completed grid.
*/

const _ = 0;
const GRID = [
  [_, 4, _, _, _, _, _],
  [_, _, 6, 3, _, _, 6],
  [_, _, _, _, _, 5, 5],
  [_, _, _, 4, _, _, _],
  [4, 7, _, _, _, _, _],
  [2, _, _, 7, 4, _, _],
  [_, _, _, _, _, 1, _],
];

const solver = new ctx.Solver();

const MODEL = GRID.map((row, rowIdx) => {
  return row.map((cellValue, colIdx) => {
    const v = Int.const(\`cell_\${rowIdx}_\${colIdx}\`);
    if (cellValue === _) {
      solver.add(v.ge(0), v.le(7)); // 0 means unfilled
    } else {
      solver.add(v.eq(cellValue));
    }
    return v;
  });
});
const MODEL_ALL_CELLS = MODEL.flat();
const SIZE = 7;

// the grid contains one 1, two 2\u2019s, etc., up to seven 7\u2019s
for (let n = 1; n < 8; n++) {
  solver.add(Sum(...MODEL_ALL_CELLS.map((e) => If(e.eq(n), 1, 0))).eq(n));
}

// each row must contain exactly 4 numbers which sum to 20
MODEL.forEach((row) => {
  solver.add(Sum(...row).eq(20));
  solver.add(Sum(...row.map((e) => If(e.gt(0), 1, 0))).eq(4));
});

// each column must contain exactly 4 numbers which sum to 20
MODEL.forEach((_, colIdx) => {
  const col = MODEL.map((row) => row[colIdx]);
  solver.add(Sum(...col).eq(20));
  solver.add(Sum(...col.map((e) => If(e.gt(0), 1, 0))).eq(4));
});

// Every 2-by-2 subsquare in the completed grid must contain at least one empty cell.
for (let i = 0; i < SIZE - 1; i++) {
  for (let j = 0; j < SIZE - 1; j++) {
    solver.add(
      Or(
        MODEL[i][j].eq(0),
        MODEL[i][j + 1].eq(0),
        MODEL[i + 1][j].eq(0),
        MODEL[i + 1][j + 1].eq(0)
      )
    );
  }
}

// The numbered cells must form a connected region
// NOTE: following code is not sufficient.
// E.g. not connected islands satisfy it but are not a valid solution
const getNeighbours = (i, j) => {
  const neighbours = [];
  if (i > 0) neighbours.push([i - 1, j]); // left
  if (i < 6) neighbours.push([i + 1, j]); // right
  if (j > 0) neighbours.push([i, j - 1]); // top
  if (j < 6) neighbours.push([i, j + 1]); // bottom
  return neighbours;
};

for (let i = 0; i < SIZE - 1; i++) {
  for (let j = 0; j < SIZE - 1; j++) {
    const neighbours = getNeighbours(i, j);

    solver.add(
      Implies(
        MODEL[i][j].neq(0),
        Or(...neighbours.map(([x, y]) => MODEL[x][y].gt(0)))
      )
    );
  }
}

// Process solution candidate using exhaustive check
function checkConnectivityExhaustive(grid) {
  const alreadyProcessed = new Set();
  const toProcess = [];

  const firstCell = [0, grid[0].findIndex((v) => v > 0)];
  toProcess.push(firstCell);

  while (toProcess.length > 0) {
    const [i, j] = toProcess.shift();
    const hash = i + '_' + j;
    if (alreadyProcessed.has(hash)) continue;
    alreadyProcessed.add(hash);

    const neighbours = getNeighbours(i, j);
    neighbours.forEach(([ii, jj]) => {
      const val = grid[ii][jj];
      if (val === 0) return; // empty
      toProcess.push([ii, jj]);
    });
  }

  return alreadyProcessed.size === 7 + 6 + 5 + 4 + 3 + 2 + 1;
}

// SOLVE

console.log('Running the solver..');
let status = await solver.check();
let solutionFound = false;

while (status === 'sat') {
  const model = solver.model();
  const getVal = (x) => Number(model.eval(x).value());

  const finalGrid = [];
  for (let i = 0; i < SIZE; i++) {
    let row = [];
    for (let j = 0; j < SIZE; j++) {
      const v = getVal(MODEL[i][j]);
      row.push(v);
    }
    finalGrid.push(row);
  }

  if (!checkConnectivityExhaustive(finalGrid)) {
    // not a proper solution
    // https://brandonrozek.com/blog/obtaining-multiple-solutions-z3/
    // add constraint: AND NOT(x1 == x1_val AND y1 == y1_val)
    // using De Morgan's Law: AND (x1 != x1_val OR y1 != y1_val)
    const finalGrid_cells = finalGrid.flat();
    solver.add(
      Or(
        // x1.neq(x1_val), y1.neq(y1_val)
        ...MODEL_ALL_CELLS.map((v, i) => v.neq(finalGrid_cells[i]))
      )
    );

    // run solver again to generate next solution
    status = await solver.check();
  } else {
    // DONE!
    console.log('Found solution:');
    printSolution(finalGrid);
    solutionFound = true;
    break;
  }
}

if (!solutionFound) {
  console.log('Could not find the solution');
}

function printSolution(grid) {
  const getStats = (row) => {
    const sum = row.reduce((acc, x) => acc + x, 0);
    const cnt = row.reduce((acc, x) => acc + (x > 0 ? 1 : 0), 0);
    return \`sum=\${sum}, cnt=\${cnt}\`;
  };

  grid.forEach((row) =>
    console.log(
      row.map((v) => (v > 0 ? v : '-')).join(' '),
      \` | \${getStats(row)}\`
    )
  );

  // check columns
  for (let i = 0; i < SIZE; i++) {
    const col = grid.map((row) => row[i]);
    console.log(\`col[\${i}]: \${getStats(col)}\`);
  }

  // check occurences
  const finalGrid_cells = grid.flat();
  let occurences = [0, 0, 0, 0, 0, 0, 0, 0];
  occurences = occurences.map((_, n) =>
    finalGrid_cells.reduce((acc, v) => acc + (v === n ? 1 : 0), 0)
  );
  console.log(\`Occurences:\`, JSON.stringify(occurences.slice(1)));
}
`;var yg=`import { Z3_ast, Z3_ast_map, Z3_ast_vector, Z3_context, Z3_decl_kind, Z3_func_decl, Z3_func_entry, Z3_func_interp, Z3_model, Z3_probe, Z3_solver, Z3_optimize, Z3_sort, Z3_sort_kind, Z3_tactic } from '../low-level';
/** @hidden */
export declare type AnySort<Name extends string = 'main'> = Sort<Name> | BoolSort<Name> | ArithSort<Name> | BitVecSort<number, Name> | SMTArraySort<Name>;
/** @hidden */
export declare type AnyExpr<Name extends string = 'main'> = Expr<Name> | Bool<Name> | Arith<Name> | IntNum<Name> | RatNum<Name> | BitVec<number, Name> | BitVecNum<number, Name> | SMTArray<Name>;
/** @hidden */
export declare type AnyAst<Name extends string = 'main'> = AnyExpr<Name> | AnySort<Name> | FuncDecl<Name>;
/** @hidden */
export declare type SortToExprMap<S extends AnySort<Name>, Name extends string = 'main'> = S extends BoolSort ? Bool<Name> : S extends ArithSort<Name> ? Arith<Name> : S extends BitVecSort<infer Size, Name> ? BitVec<Size, Name> : S extends SMTArraySort<Name, infer DomainSort, infer RangeSort> ? SMTArray<Name, DomainSort, RangeSort> : S extends Sort<Name> ? Expr<Name, S, Z3_ast> : never;
/** @hidden */
export declare type CoercibleFromMap<S extends CoercibleToExpr<Name>, Name extends string = 'main'> = S extends bigint ? Arith<Name> : S extends number | CoercibleRational ? RatNum<Name> : S extends boolean ? Bool<Name> : S extends Expr<Name> ? S : never;
/** @hidden */
export declare type CoercibleToBitVec<Bits extends number = number, Name extends string = 'main'> = bigint | number | BitVec<Bits, Name>;
export declare type CoercibleRational = {
    numerator: bigint | number;
    denominator: bigint | number;
};
/** @hidden */
export declare type CoercibleToExpr<Name extends string = 'main'> = number | bigint | boolean | CoercibleRational | Expr<Name>;
/** @hidden */
export declare type CoercibleToArith<Name extends string = 'main'> = number | string | bigint | CoercibleRational | Arith<Name>;
/** @hidden */
export declare type CoercibleToMap<T extends AnyExpr<Name>, Name extends string = 'main'> = T extends Bool<Name> ? boolean | Bool<Name> : T extends IntNum<Name> ? bigint | number | IntNum<Name> : T extends RatNum<Name> ? bigint | number | CoercibleRational | RatNum<Name> : T extends Arith<Name> ? CoercibleToArith<Name> : T extends BitVec<infer Size, Name> ? CoercibleToBitVec<Size, Name> : T extends SMTArray<Name, infer DomainSort, infer RangeSort> ? SMTArray<Name, DomainSort, RangeSort> : T extends Expr<Name> ? Expr<Name> : never;
/**
 * Used to create a Real constant
 *
 * \`\`\`js
 * const x = from({ numerator: 1, denominator: 3 })
 *
 * x
 * // 1/3
 * isReal(x)
 * // true
 * isRealVal(x)
 * // true
 * x.asNumber()
 * // 0.3333333333333333
 * \`\`\`
 * @see {@link Context.from}
 * @category Global
 */
export declare class Z3Error extends Error {
}
export declare class Z3AssertionError extends Z3Error {
}
/** @category Global */
export declare type CheckSatResult = 'sat' | 'unsat' | 'unknown';
/** @hidden */
export interface ContextCtor {
    <Name extends string>(name: Name, options?: Record<string, any>): Context<Name>;
}
export interface Context<Name extends string = 'main'> {
    /** @hidden */
    readonly ptr: Z3_context;
    /**
     * Name of the current Context
     *
     * \`\`\`js
     * const c = new Context('main')
     *
     * c.name
     * // 'main'
     * \`\`\`
     */
    readonly name: Name;
    /** @category Functions */
    interrupt(): void;
    /** @category Functions */
    isModel(obj: unknown): obj is Model<Name>;
    /** @category Functions */
    isAst(obj: unknown): obj is Ast<Name>;
    /** @category Functions */
    isSort(obj: unknown): obj is Sort<Name>;
    /** @category Functions */
    isFuncDecl(obj: unknown): obj is FuncDecl<Name>;
    /** @category Functions */
    isFuncInterp(obj: unknown): obj is FuncInterp<Name>;
    /** @category Functions */
    isApp(obj: unknown): boolean;
    /** @category Functions */
    isConst(obj: unknown): boolean;
    /** @category Functions */
    isExpr(obj: unknown): obj is Expr<Name>;
    /** @category Functions */
    isVar(obj: unknown): boolean;
    /** @category Functions */
    isAppOf(obj: unknown, kind: Z3_decl_kind): boolean;
    /** @category Functions */
    isBool(obj: unknown): obj is Bool<Name>;
    /** @category Functions */
    isTrue(obj: unknown): boolean;
    /** @category Functions */
    isFalse(obj: unknown): boolean;
    /** @category Functions */
    isAnd(obj: unknown): boolean;
    /** @category Functions */
    isOr(obj: unknown): boolean;
    /** @category Functions */
    isImplies(obj: unknown): boolean;
    /** @category Functions */
    isNot(obj: unknown): boolean;
    /** @category Functions */
    isEq(obj: unknown): boolean;
    /** @category Functions */
    isDistinct(obj: unknown): boolean;
    /** @category Functions */
    isQuantifier(obj: unknown): obj is Quantifier<Name>;
    /** @category Functions */
    isArith(obj: unknown): obj is Arith<Name>;
    /** @category Functions */
    isArithSort(obj: unknown): obj is ArithSort<Name>;
    /** @category Functions */
    isInt(obj: unknown): boolean;
    /** @category Functions */
    isIntVal(obj: unknown): obj is IntNum<Name>;
    /** @category Functions */
    isIntSort(obj: unknown): boolean;
    /** @category Functions */
    isReal(obj: unknown): boolean;
    /** @category Functions */
    isRealVal(obj: unknown): obj is RatNum<Name>;
    /** @category Functions */
    isRealSort(obj: unknown): boolean;
    /** @category Functions */
    isBitVecSort(obj: unknown): obj is BitVecSort<number, Name>;
    /** @category Functions */
    isBitVec(obj: unknown): obj is BitVec<number, Name>;
    /** @category Functions */
    isBitVecVal(obj: unknown): obj is BitVecNum<number, Name>;
    /** @category Functions */
    isArraySort(obj: unknown): obj is SMTArraySort<Name>;
    /** @category Functions */
    isArray(obj: unknown): obj is SMTArray<Name>;
    /** @category Functions */
    isConstArray(obj: unknown): boolean;
    /** @category Functions */
    isProbe(obj: unknown): obj is Probe<Name>;
    /** @category Functions */
    isTactic(obj: unknown): obj is Tactic<Name>;
    /** @category Functions */
    isAstVector(obj: unknown): obj is AstVector<Name, AnyAst<Name>>;
    /**
     * Returns whether two Asts are the same thing
     * @category Functions */
    eqIdentity(a: Ast<Name>, b: Ast<Name>): boolean;
    /** @category Functions */
    getVarIndex(obj: Expr<Name>): number;
    /**
     * Coerce a boolean into a Bool expression
     * @category Functions */
    from(primitive: boolean): Bool<Name>;
    /**
     * Coerce a number to an Int or Real expression (integral numbers become Ints)
     * @category Functions */
    from(primitive: number): IntNum<Name> | RatNum<Name>;
    /**
     * Coerce a rational into a Real expression
     * @category Functions */
    from(primitive: CoercibleRational): RatNum<Name>;
    /**
     * Coerce a big number into a Integer expression
     * @category Functions */
    from(primitive: bigint): IntNum<Name>;
    /**
     * Returns whatever expression was given
     * @category Functions */
    from<E extends Expr<Name>>(expr: E): E;
    /** @hidden */
    from(value: CoercibleToExpr<Name>): AnyExpr<Name>;
    /**
     * Sugar function for getting a model for given assertions
     *
     * \`\`\`js
     * const x = Int.const('x');
     * const y = Int.const('y');
     * const result = await solve(x.le(y));
     * if (isModel(result)) {
     *   console.log('Z3 found a solution');
     *   console.log(\`x=\${result.get(x)}, y=\${result.get(y)}\`);
     * } else {
     *   console.error('No solution found');
     * }
     * \`\`\`
     *
     * @see {@link Solver}
     * @category Functions */
    solve(...assertions: Bool<Name>[]): Promise<Model<Name> | 'unsat' | 'unknown'>;
    /**
     * Creates a Solver
     * @param logic - Optional logic which the solver will use. Creates a general Solver otherwise
     * @category Classes
     */
    readonly Solver: new (logic?: string) => Solver<Name>;
    readonly Optimize: new () => Optimize<Name>;
    /**
     * Creates an empty Model
     * @see {@link Solver.model} for common usage of Model
     * @category Classes
     */
    readonly Model: new () => Model<Name>;
    /** @category Classes */
    readonly AstVector: new <Item extends Ast<Name> = AnyAst<Name>>() => AstVector<Name, Item>;
    /** @category Classes */
    readonly AstMap: new <Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>>() => AstMap<Name, Key, Value>;
    /** @category Classes */
    readonly Tactic: new (name: string) => Tactic<Name>;
    /** @category Expressions */
    readonly Sort: SortCreation<Name>;
    /** @category Expressions */
    readonly Function: FuncDeclCreation<Name>;
    /** @category Expressions */
    readonly RecFunc: RecFuncCreation<Name>;
    /** @category Expressions 
     * 
     * Create Bool types
    */
    readonly Bool: BoolCreation<Name>;
    /** @category Expressions 
     * 
     * Create Int types
    */
    readonly Int: IntCreation<Name>;
    /** @category Expressions 
     * 
     * Create Real types
    */
    readonly Real: RealCreation<Name>;
    /** @category Expressions 
     * 
     * Create BitVec types
    */
    readonly BitVec: BitVecCreation<Name>;
    /** @category Expressions 
     * 
     * Create Array types
    */
    readonly Array: SMTArrayCreation<Name>;
    /** @category Operations */
    Const<S extends Sort<Name>>(name: string, sort: S): SortToExprMap<S, Name>;
    /** @category Operations */
    Consts<S extends Sort<Name>>(name: string | string[], sort: S): SortToExprMap<S, Name>[];
    /** @category Operations */
    FreshConst<S extends Sort<Name>>(sort: S, prefix?: string): SortToExprMap<S, Name>;
    /** @category Operations */
    Var<S extends Sort<Name>>(idx: number, sort: S): SortToExprMap<S, Name>;
    /** 
     * @category Operations
     * 
     * Create a Z3 if-then-else expression.
     */
    If(condition: Probe<Name>, onTrue: Tactic<Name>, onFalse: Tactic<Name>): Tactic<Name>;
    If<OnTrueRef extends CoercibleToExpr<Name>, OnFalseRef extends CoercibleToExpr<Name>>(condition: Bool<Name> | boolean, onTrue: OnTrueRef, onFalse: OnFalseRef): CoercibleFromMap<OnTrueRef | OnFalseRef, Name>;
    /** 
     * @category Operations
     * 
     * Create a Z3 distinct expression. Has value \`True\` if all provided args evaluate to different values.
     */
    Distinct(...args: CoercibleToExpr<Name>[]): Bool<Name>;
    /** 
     * @category Operations 
     * 
     * Create a Z3 implies logic expression \`a -> b\`.
     */
    Implies(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations 
     * 
     * If and only if.
     * 
     * https://en.wikipedia.org/wiki/If_and_only_if
    */
    Iff(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    Eq(a: CoercibleToExpr<Name>, b: CoercibleToExpr<Name>): Bool<Name>;
    /** @category Operations */
    Xor(a: Bool<Name> | boolean, b: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    Not(a: Probe<Name>): Probe<Name>;
    /** @category Operations */
    Not(a: Bool<Name> | boolean): Bool<Name>;
    /** @category Operations */
    And(): Bool<Name>;
    /** @category Operations */
    And(vector: AstVector<Name, Bool<Name>>): Bool<Name>;
    /** @category Operations */
    And(...args: (Bool<Name> | boolean)[]): Bool<Name>;
    /** @category Operations */
    And(...args: Probe<Name>[]): Probe<Name>;
    /** @category Operations */
    Or(): Bool<Name>;
    /** @category Operations */
    Or(vector: AstVector<Name, Bool<Name>>): Bool<Name>;
    /** @category Operations */
    Or(...args: (Bool<Name> | boolean)[]): Bool<Name>;
    /** @category Operations */
    Or(...args: Probe<Name>[]): Probe<Name>;
    /** @category Operations 
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#-ForAll
    */
    ForAll<QVarSorts extends NonEmptySortArray<Name>>(quantifiers: ArrayIndexType<Name, QVarSorts>, body: Bool<Name>, weight?: number): Quantifier<Name, QVarSorts, BoolSort<Name>> & Bool<Name>;
    /** @category Operations 
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#-Exists
    */
    Exists<QVarSorts extends NonEmptySortArray<Name>>(quantifiers: ArrayIndexType<Name, QVarSorts>, body: Bool<Name>, weight?: number): Quantifier<Name, QVarSorts, BoolSort<Name>> & Bool<Name>;
    /** @category Operations */
    Lambda<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(quantifiers: ArrayIndexType<Name, DomainSort>, expr: SortToExprMap<RangeSort, Name>): Quantifier<Name, DomainSort, SMTArraySort<Name, DomainSort, RangeSort>> & SMTArray<Name, DomainSort, RangeSort>;
    /** @category Operations */
    ToReal(expr: Arith<Name> | bigint): Arith<Name>;
    /** @category Operations */
    ToInt(expr: Arith<Name> | number | CoercibleRational | string): Arith<Name>;
    /**
     * Create an IsInt Z3 predicate
     *
     * \`\`\`js
     * const x = Real.const('x');
     * await solve(IsInt(x.add("1/2")), x.gt(0), x.lt(1))
     * // x = 1/2
     * await solve(IsInt(x.add("1/2")), x.gt(0), x.lt(1), x.neq("1/2"))
     * // unsat
     * \`\`\`
     * @category Operations */
    IsInt(expr: Arith<Name> | number | CoercibleRational | string): Bool<Name>;
    /**
     * Returns a Z3 expression representing square root of a
     *
     * \`\`\`typescript
     * const a = Real.const('a');
     *
     * Sqrt(a);
     * // a**(1/2)
     * \`\`\`
     * @category Operations */
    Sqrt(a: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a Z3 expression representing cubic root of a
     *
     * \`\`\`typescript
     * const a = Real.const('a');
     *
     * Cbrt(a);
     * // a**(1/3)
     * \`\`\`
     * @category Operations */
    Cbrt(a: CoercibleToArith<Name>): Arith<Name>;
    /** @category Operations 
     * 
     * Convert BitVec to Int 
    */
    BV2Int(a: BitVec<number, Name>, isSigned: boolean): Arith<Name>;
    /** @category Operations 
     * 
     * Convert Int to BitVec
     */
    Int2BV<Bits extends number>(a: Arith<Name> | bigint | number, bits: Bits): BitVec<Bits, Name>;
    /** 
     * @category Operations 
     * 
     * Create a Z3 bit-vector concatenation expression.
     * 
     * E.g. \`Concat(BitVec.val(1, 8), BitVec.val(0, 8), BitVec.val(1, 8))\` results in:
     * - Bitvec: 00000001 00000000 00000001
     */
    Concat(...bitvecs: BitVec<number, Name>[]): BitVec<number, Name>;
    /** 
     * @category Operations 
     * 
     * Return a tactic that applies tactic \`t1\` to a goal if probe \`p\` evaluates to true, and \`t2\` otherwise.
     */
    Cond(probe: Probe<Name>, onTrue: Tactic<Name>, onFalse: Tactic<Name>): Tactic<Name>;
    /** @category Operations 
     * 
     * less than
    */
    LT(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * greater than
    */
    GT(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * less or equal
    */
    LE(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * greater or equal
    */
    GE(a: Arith<Name>, b: CoercibleToArith<Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned less than
    */
    ULT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned greater than
    */
    UGT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned less or equal
    */
    ULE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * unsigned greater or equal
    */
    UGE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed less than
    */
    SLT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed greater than
    */
    SGT<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed greater or equal
    */
    SGE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * signed less or equal
    */
    SLE<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** @category Operations 
     * 
     * Create the sum of the Z3 expressions.
     * 
     * \`\`\`js
     * >>> a, b, c = Ints('a b c')
     * >>> Sum(a, b, c)
     * a + b + c
     * \`\`\`
     */
    Sum(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Sum<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    Sub(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Sub<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    /** 
     * @category Operations 
     * 
     * Create the product of the Z3 expressions.
     * \`\`\`js
     * >>> a, b, c = Ints('a b c')
     * >>> Product(a, b, c)
     * a*b*c
     * \`\`\`
     */
    Product(arg0: Arith<Name>, ...args: CoercibleToArith<Name>[]): Arith<Name>;
    Product<Bits extends number>(arg0: BitVec<Bits, Name>, ...args: CoercibleToBitVec<Bits, Name>[]): BitVec<Bits, Name>;
    Div(arg0: Arith<Name>, arg1: CoercibleToArith<Name>): Arith<Name>;
    Div<Bits extends number>(arg0: BitVec<Bits, Name>, arg1: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    BUDiv<Bits extends number>(arg0: BitVec<Bits, Name>, arg1: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    Neg(a: Arith<Name>): Arith<Name>;
    Neg<Bits extends number>(a: BitVec<Bits, Name>): BitVec<Bits, Name>;
    Mod(a: Arith<Name>, b: CoercibleToArith<Name>): Arith<Name>;
    Mod<Bits extends number>(a: BitVec<Bits, Name>, b: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**  
     * Array read. 
     * 
     * @returns Z3 select array expression
     * @category Operations 
     */
    Select<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name> = Sort<Name>>(array: SMTArray<Name, DomainSort, RangeSort>, ...indices: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
    /** 
     * 
     * Copy the array and write to it.
     * Value should be coercible to RangeSort.
     * 
     * @param indicesAndValue (idx0, idx1, ..., idxN, value)
     * @returns Z3 store array expression
     * @category Operations
     */
    Store<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name> = Sort<Name>>(array: SMTArray<Name, DomainSort, RangeSort>, ...indicesAndValue: [
        ...CoercibleToArrayIndexType<Name, DomainSort>,
        CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>
    ]): SMTArray<Name, DomainSort, RangeSort>;
    /** @category Operations 
     * 
     * @see Z3.Array.extract
    */
    Extract<Bits extends number>(hi: number, lo: number, val: BitVec<Bits, Name>): BitVec<number, Name>;
    /** @category Operations */
    ast_from_string(s: string): Ast<Name>;
    /** @category Operations */
    substitute(t: Expr<Name>, ...substitutions: [Expr<Name>, Expr<Name>][]): Expr<Name>;
    /**
     * Simplify the expression \`a\` using the given options.
     * 
     * This function has many options. Use \`help_simplify\` to obtain the complete list.
     * 
     * ---
     * 
     * \`\`\`js
     * >>> x = Int('x')
     * >>> y = Int('y')
     * >>> simplify(x + 1 + y + x + 1)
     * 2 + 2*x + y
     * >>> simplify((x + 1)*(y + 1), som=True)
     * 1 + x + y + x*y
     * >>> simplify(Distinct(x, y, 1), blast_distinct=True)
     * And(Not(x == y), Not(x == 1), Not(y == 1))
     * >>> simplify(And(x == 0, y == 1), elim_and=True)
     * Not(Or(Not(x == 0), Not(y == 1)))
     * \`\`\`
     */
    simplify(expr: Expr<Name>): Promise<Expr<Name>>;
}
export interface Ast<Name extends string = 'main', Ptr = unknown> {
    /** @hidden */
    readonly __typename: 'Ast' | Sort['__typename'] | FuncDecl['__typename'] | Expr['__typename'];
    readonly ctx: Context<Name>;
    /** @hidden */
    readonly ptr: Ptr;
    /** @virtual */
    get ast(): Z3_ast;
    /** @virtual */
    id(): number;
    eqIdentity(other: Ast<Name>): boolean;
    neqIdentity(other: Ast<Name>): boolean;
    sexpr(): string;
    hash(): number;
}
/** @hidden */
export interface SolverCtor<Name extends string> {
    new (): Solver<Name>;
}
/** 
 * Solver API provides methods for implementing the main SMT 2.0 commands:
 * push, pop, check, get-model, etc.
 * 
 * https://z3prover.github.io/api/html/z3.z3.html#Solver 
 */
export interface Solver<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Solver';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_solver;
    set(key: string, value: any): void;
    /**
     * Create a backtracking point.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-push
     * ---
     *  
     * \`\`\`js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0)
     * >>> s
     * [x > 0]
     * >>> s.push()
     * >>> s.add(x < 1)
     * >>> s
     * [x > 0, x < 1]
     * >>> s.check()
     * unsat
     * >>> s.pop()
     * >>> s.check()
     * sat
     * >>> s
     * [x > 0]
     * \`\`\`
     */
    push(): void;
    /**
     * Backtrack \`num\` backtracking points.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-pop
     * ---
     * 
     *\`\`\`js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0)
     * >>> s
     * [x > 0]
     * >>> s.push()
     * >>> s.add(x < 1)
     * >>> s
     * [x > 0, x < 1]
     * >>> s.check()
     * unsat
     * >>> s.pop()
     * >>> s.check()
     * sat
     * >>> s
     * [x > 0]
     * \`\`\`
     */
    pop(num?: number): void;
    numScopes(): number;
    /** Remove all asserted constraints and backtracking points created using \`push()\`. */
    reset(): void;
    /**
     * Assert constraints into the solver.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-add
     * 
     * \`\`\`js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2)
     * >>> s
     * [x > 0, x < 2]
     * \`\`\`
     */
    add(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): void;
    /**
     * Assert constraint \`a\` and track it in the unsat core using the Boolean constant \`p\`.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-assert_and_track
     * ---
     * 
     * \`\`\`js
     * If \`p\` is a string, it will be automatically converted into a Boolean constant.
     * 
     * >>> x = Int('x')
     * >>> p3 = Bool('p3')
     * >>> s = Solver()
     * >>> s.set(unsat_core=True)
     * >>> s.assert_and_track(x > 0,  'p1')
     * >>> s.assert_and_track(x != 1, 'p2')
     * >>> s.assert_and_track(x < 0,  p3)
     * >>> print(s.check())
     * unsat
     * >>> c = s.unsat_core()
     * >>> len(c)
     * 2
     * >>> Bool('p1') in c
     * True
     * >>> Bool('p2') in c
     * False
     * >>> p3 in c
     * True
     * \`\`\`
     */
    addAndTrack(expr: Bool<Name>, constant: Bool<Name> | string): void;
    /**
     * Return an AST vector containing all added constraints.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-assertions
     *  
     * \`\`\`js
     * >>> s = Solver()
     * >>> s.assertions()
     * []
     * >>> a = Int('a')
     * >>> s.add(a > 0)
     * >>> s.add(a < 10)
     * >>> s.assertions()
     * [a > 0, a < 10]
     * \`\`\`
     */
    assertions(): AstVector<Name, Bool<Name>>;
    /*** Parse assertions from a string */
    fromString(s: string): void;
    /**
     * Check whether the assertions in the given solver plus the optional assumptions are consistent or not.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-check
     * ---
     * 
     * \`\`\`js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.check()
     * sat
     * >>> s.add(x > 0, x < 2)
     * >>> s.check()
     * sat
     * >>> s.model().eval(x)
     * 1
     * >>> s.add(x < 1)
     * >>> s.check()
     * unsat
     * >>> s.reset()
     * >>> s.add(2**x == 4)
     * >>> s.check()
     * unknown
     * \`\`\`
     */
    check(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): Promise<CheckSatResult>;
    /**
     * Return a model for the last \`check()\`.
     * 
     * - https://z3prover.github.io/api/html/z3.z3.html#Solver-model
     * ---
     * 
     * \`\`\`js
     * This function raises an exception if
     * a model is not available (e.g., last \`check()\` returned unsat).
     * 
     * >>> s = Solver()
     * >>> a = Int('a')
     * >>> s.add(a + 2 == 0)
     * >>> s.check()
     * sat
     * >>> s.model()
     * [a = -2]
     * \`\`\`
     */
    model(): Model<Name>;
}

/**
 * Optimize API provides methods for solving using objective functions and weighted soft constraints
 * 
 * https://z3prover.github.io/api/html/z3.z3.html#Optimize
 */
export interface Optimize<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Optimize';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_optimize;
    set(key: string, value: any): void;
    /** See Solver.push() */
    push(): void;
    /** See Solver.pop() */
    pop(num?: number): void;
    add(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): void;
    addSoft(expr: Bool<Name>, weight: number | bigint | string | CoercibleRational, id?: number | string): void;
    addAndTrack(expr: Bool<Name>, constant: Bool<Name> | string): void;
    /** See Solver.assertions() */
    assertions(): AstVector<Name, Bool<Name>>;
    fromString(s: string): void;
    maximize(expr: Arith<Name>): void;
    minimize(expr: Arith<Name>): void;
    /** See Solver.check() */
    check(...exprs: (Bool<Name> | AstVector<Name, Bool<Name>>)[]): Promise<CheckSatResult>;
    /** See Solver.model() */
    model(): Model<Name>;
}
/** @hidden */
export interface ModelCtor<Name extends string> {
    new (): Model<Name>;
}

/**
 * Model/Solution of a satisfiability problem (aka system of constraints).
 * 
 * - https://z3prover.github.io/api/html/z3.z3.html#ModelRef
 */
export interface Model<Name extends string = 'main'> extends Iterable<FuncDecl<Name>> {
    /** @hidden */
    readonly __typename: 'Model';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_model;
    /**
     * Return the number of constant and function declarations in the model \`self\`.
     * 
     * \`\`\`js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, f(x) != x)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> len(m)
     * 2
     * \`\`\`
     */
    length(): number;
    entries(): IterableIterator<[number, FuncDecl<Name>]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<FuncDecl<Name>>;
    /**
     * Return a list with all symbols that have an interpretation in the model \`self\`.
     * 
     * \`\`\`js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2, f(x) == 0)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> m.decls()
     * [x, f]
     * \`\`\`
     */
    decls(): FuncDecl<Name>[];
    /** Return a textual representation of the s-expression representing the model. */
    sexpr(): string;
    /**
     * Evaluate the expression \`t\` in the model \`self\`.
     * 
     * If \`model_completion\` is enabled, then a default interpretation is automatically added
     * for symbols that do not have an interpretation in the model \`self\`.
     * 
     * \`\`\`js
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> m.eval(x + 1)
     * 2
     * >>> m.eval(x == 1)
     * True
     * >>> y = Int('y')
     * >>> m.eval(y + x)
     * 1 + y
     * >>> m.eval(y)
     * y
     * >>> m.eval(y, model_completion=True)
     * 0
     * >>> # Now, m contains an interpretation for y
     * >>> m.eval(y + x)
     * 1
     * \`\`\`
     */
    eval(expr: Bool<Name>, modelCompletion?: boolean): Bool<Name>;
    eval(expr: Arith<Name>, modelCompletion?: boolean): Arith<Name>;
    eval<Bits extends number = number>(expr: BitVec<Bits, Name>, modelCompletion?: boolean): BitVecNum<Bits, Name>;
    eval(expr: Expr<Name>, modelCompletion?: boolean): Expr<Name>;
    /**
     * If \`idx\` is an integer, then the declaration at position \`idx\` in the model \`self\` is returned.
     * 
     * If \`idx\` is a declaration, then the actual interpretation is returned.
     * 
     * The elements can be retrieved using position or the actual declaration.
     * ---
     * 
     * \`\`\`js
     * >>> f = Function('f', IntSort(), IntSort())
     * >>> x = Int('x')
     * >>> s = Solver()
     * >>> s.add(x > 0, x < 2, f(x) == 0)
     * >>> s.check()
     * sat
     * >>> m = s.model()
     * >>> len(m)
     * 2
     * >>> m[0]
     * x
     * >>> m[1]
     * f
     * >>> m[x]
     * 1
     * >>> m[f]
     * [else -> 0]
     * >>> for d in m: print("%s -> %s" % (d, m[d]))
     * x -> 1
     * f -> [else -> 0]
     * \`\`\`
    */
    get(i: number): FuncDecl<Name>;
    get(from: number, to: number): FuncDecl<Name>[];
    get(declaration: FuncDecl<Name>): FuncInterp<Name> | Expr<Name>;
    get(constant: Expr<Name>): Expr<Name>;
    get(sort: Sort<Name>): AstVector<Name, AnyExpr<Name>>;
    /** Update the interpretation of a constant */
    updateValue(decl: FuncDecl<Name> | Expr<Name>, a: Ast<Name> | FuncInterp<Name>): void;
    addFuncInterp<DomainSort extends Sort<Name>[] = Sort<Name>[], RangeSort extends Sort<Name> = Sort<Name>>(decl: FuncDecl<Name, DomainSort, RangeSort>, defaultValue: CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>): FuncInterp<Name>;
}
/**
 * Part of {@link Context}. Used to declare uninterpreted sorts
 *
 * \`\`\`typescript
 * const A = context.Sort.declare('A');
 * const a = context.Const('a', A);
 * const b = context.const('b', A);
 *
 * a.sort.eqIdentity(A)
 * // true
 * b.sort.eqIdentity(A)
 * // true
 * a.eq(b)
 * // a == b
 * \`\`\`
 */
export interface SortCreation<Name extends string> {
    declare(name: string): Sort<Name>;
}
export interface Sort<Name extends string = 'main'> extends Ast<Name, Z3_sort> {
    /** @hidden */
    readonly __typename: 'Sort' | BoolSort['__typename'] | ArithSort['__typename'] | BitVecSort['__typename'] | SMTArraySort['__typename'];
    kind(): Z3_sort_kind;
    /** @virtual */
    subsort(other: Sort<Name>): boolean;
    /** @virtual */
    cast(expr: CoercibleToExpr<Name>): Expr<Name>;
    name(): string | number;
}
/**
 * @category Functions
 */
export interface FuncEntry<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'FuncEntry';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_func_entry;
    numArgs(): number;
    argValue(i: number): Expr<Name>;
    value(): Expr<Name>;
}
/**
 * @category Functions
 */
export interface FuncInterp<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'FuncInterp';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_func_interp;
    elseValue(): Expr<Name>;
    numEntries(): number;
    arity(): number;
    entry(i: number): FuncEntry<Name>;
    addEntry(args: Expr<Name>[], value: Expr<Name>): void;
}
/** @hidden */
export declare type FuncDeclSignature<Name extends string> = [Sort<Name>, Sort<Name>, ...Sort<Name>[]];
/**
 * Part of {@link Context}. Used to declare functions
 * @category Functions
 */
export interface FuncDeclCreation<Name extends string> {
    /**
     * Declare a new function
     * 
     * @param name Name of the function
     * @param signature The domains, and last parameter - the range of the function
     *
     * \`\`\`typescript
     * const f = ctx.Function.declare('f', ctx.Bool.sort(), ctx.Real.sort(), ctx.Int.sort())
     *
     * f.call(true, "1/3").eq(5)
     * // f(true, 1/3) == 5
     * \`\`\`
     */
    declare<DomainSort extends Sort<Name>[], RangeSort extends Sort<Name>>(name: string, ...signature: [...DomainSort, RangeSort]): FuncDecl<Name, DomainSort, RangeSort>;
    fresh<DomainSort extends Sort<Name>[], RangeSort extends Sort<Name>>(...signature: [...DomainSort, RangeSort]): FuncDecl<Name, DomainSort, RangeSort>;
}
/**
 * @category Functions
 */
export interface RecFuncCreation<Name extends string> {
    declare(name: string, ...signature: FuncDeclSignature<Name>): FuncDecl<Name>;
    addDefinition(f: FuncDecl<Name>, args: Expr<Name>[], body: Expr<Name>): void;
}
/**
 * @category Functions
 */
export interface FuncDecl<Name extends string = 'main', DomainSort extends Sort<Name>[] = Sort<Name>[], RangeSort extends Sort<Name> = Sort<Name>> extends Ast<Name, Z3_func_decl> {
    /** @hidden */
    readonly __typename: 'FuncDecl';
    name(): string | number;
    arity(): number;
    domain<T extends number>(i: T): DomainSort[T];
    range(): RangeSort;
    kind(): Z3_decl_kind;
    params(): (number | string | Sort<Name> | Expr<Name> | FuncDecl<Name>)[];
    call(...args: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
}
export interface Expr<Name extends string = 'main', S extends Sort<Name> = AnySort<Name>, Ptr = unknown> extends Ast<Name, Ptr> {
    /** @hidden */
    readonly __typename: 'Expr' | Bool['__typename'] | Arith['__typename'] | BitVec['__typename'] | SMTArray['__typename'];
    get sort(): S;
    eq(other: CoercibleToExpr<Name>): Bool<Name>;
    neq(other: CoercibleToExpr<Name>): Bool<Name>;
    params(): ReturnType<FuncDecl<Name>['params']>;
    name(): ReturnType<FuncDecl<Name>['name']>;
    decl(): FuncDecl<Name>;
    numArgs(): number;
    arg(i: number): AnyExpr<Name>;
    children(): AnyExpr<Name>[];
}
/** @category Booleans */
export interface BoolSort<Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'BoolSort';
    cast(expr: Bool<Name> | boolean): Bool<Name>;
    cast(expr: CoercibleToExpr<Name>): never;
}
/** @category Booleans */
export interface BoolCreation<Name extends string = 'main'> {
    sort(): BoolSort<Name>;
    const(name: string): Bool<Name>;
    consts(names: string | string[]): Bool<Name>[];
    vector(prefix: string, count: number): Bool<Name>[];
    fresh(prefix?: string): Bool<Name>;
    val(value: boolean): Bool<Name>;
}
/** @category Booleans */
export interface Bool<Name extends string = 'main'> extends Expr<Name, BoolSort<Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Bool' | 'NonLambdaQuantifier';
    not(): Bool<Name>;
    and(other: Bool<Name> | boolean): Bool<Name>;
    or(other: Bool<Name> | boolean): Bool<Name>;
    xor(other: Bool<Name> | boolean): Bool<Name>;
    implies(other: Bool<Name> | boolean): Bool<Name>;
}
/** @category Quantifiers */
export interface Pattern<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Pattern';
}
/**
 * A Sort that represents Integers or Real numbers
 * @category Arithmetic
 */
export interface ArithSort<Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'ArithSort';
    cast(other: bigint | number | string): IntNum<Name> | RatNum<Name>;
    cast(other: CoercibleRational | RatNum<Name>): RatNum<Name>;
    cast(other: IntNum<Name>): IntNum<Name>;
    cast(other: bigint | number | string | Bool<Name> | Arith<Name> | CoercibleRational): Arith<Name>;
    cast(other: CoercibleToExpr<Name> | string): never;
}
/** @category Arithmetic */
export interface IntCreation<Name extends string> {
    sort(): ArithSort<Name>;
    const(name: string): Arith<Name>;
    consts(names: string | string[]): Arith<Name>[];
    vector(prefix: string, count: number): Arith<Name>[];
    fresh(prefix?: string): Arith<Name>;
    val(value: bigint | number | string): IntNum<Name>;
}
/** @category Arithmetic */
export interface RealCreation<Name extends string> {
    sort(): ArithSort<Name>;
    const(name: string): Arith<Name>;
    consts(names: string | string[]): Arith<Name>[];
    vector(prefix: string, count: number): Arith<Name>[];
    fresh(prefix?: string): Arith<Name>;
    val(value: number | string | bigint | CoercibleRational): RatNum<Name>;
}
/**
 * Represents Integer or Real number expression
 * @category Arithmetic
 */
export interface Arith<Name extends string = 'main'> extends Expr<Name, ArithSort<Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Arith' | IntNum['__typename'] | RatNum['__typename'];
    /**
     * Adds two numbers together
     */
    add(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Multiplies two numbers together
     */
    mul(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Subtract second number from the first one
     */
    sub(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Applies power to the number
     *
     * \`\`\`typescript
     * const x = Int.const('x');
     *
     * await solve(x.pow(2).eq(4), x.lt(0)); // x**2 == 4, x < 0
     * // x=-2
     * \`\`\`
     */
    pow(exponent: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Divides the number by the second one
     */
    div(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a number modulo second one
     *
     * \`\`\`typescript
     * const x = Int.const('x');
     *
     * await solve(x.mod(7).eq(1), x.gt(7)) // x % 7 == 1, x > 7
     * // x=8
     * \`\`\`
     */
    mod(other: CoercibleToArith<Name>): Arith<Name>;
    /**
     * Returns a negation of the number
     */
    neg(): Arith<Name>;
    /**
     * Return whether the number is less or equal than the second one (\`<=\`)
     */
    le(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is less than the second one (\`<\`)
     */
    lt(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is greater than the second one (\`>\`)
     */
    gt(other: CoercibleToArith<Name>): Bool<Name>;
    /**
     * Returns whether the number is greater or equal than the second one (\`>=\`)
     */
    ge(other: CoercibleToArith<Name>): Bool<Name>;
}
/**
 * A constant Integer value expression
 * @category Arithmetic
 */
export interface IntNum<Name extends string = 'main'> extends Arith<Name> {
    /** @hidden */
    readonly __typename: 'IntNum';
    value(): bigint;
    asString(): string;
    asBinary(): string;
}
/**
 * A constant Rational value expression
 *
 * \`\`\`typescript
 * const num = Real.val('1/3');
 *
 * num.asString()
 * // '1/3'
 * num.value
 * // { numerator: 1n, denominator: 3n }
 * num.asNumber()
 * // 0.3333333333333333
 * \`\`\`
 * @category Arithmetic
 */
export interface RatNum<Name extends string = 'main'> extends Arith<Name> {
    /** @hidden */
    readonly __typename: 'RatNum';
    value(): {
        numerator: bigint;
        denominator: bigint;
    };
    numerator(): IntNum<Name>;
    denominator(): IntNum<Name>;
    asNumber(): number;
    asDecimal(prec?: number): string;
    asString(): string;
}
/**
 * A Sort representing Bit Vector numbers of specified {@link BitVecSort.size size}
 *
 * @typeParam Bits - A number representing amount of bits for this sort
 * @category Bit Vectors
 */
export interface BitVecSort<Bits extends number = number, Name extends string = 'main'> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'BitVecSort';
    /**
     * The amount of bits inside the sort
     *
     * \`\`\`typescript
     * const x = BitVec.const('x', 32);
     *
     * console.log(x.sort.size)
     * // 32
     * \`\`\`
     */
    size(): Bits;
    cast(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    cast(other: CoercibleToExpr<Name>): Expr<Name>;
}
/** @category Bit Vectors */
export interface BitVecCreation<Name extends string> {
    sort<Bits extends number = number>(bits: Bits): BitVecSort<Bits, Name>;
    const<Bits extends number = number>(name: string, bits: Bits | BitVecSort<Bits, Name>): BitVec<Bits, Name>;
    consts<Bits extends number = number>(names: string | string[], bits: Bits | BitVecSort<Bits, Name>): BitVec<Bits, Name>[];
    val<Bits extends number = number>(value: bigint | number | boolean, bits: Bits | BitVecSort<Bits, Name>): BitVecNum<Bits, Name>;
}
/**
 * Represents Bit Vector expression
 * @category Bit Vectors
 */
export interface BitVec<Bits extends number = number, Name extends string = 'main'> extends Expr<Name, BitVecSort<Bits, Name>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'BitVec' | BitVecNum['__typename'];
    /**
     * The amount of bits of this BitVectors sort
     *
     * \`\`\`typescript
     * const x = BitVec.const('x', 32);
     *
     * x.size
     * // 32
     *
     * const Y = BitVec.sort(8);
     * const y = BitVec.const('y', Y);
     *
     * y.size
     * // 8
     * \`\`\`
     */
    size(): Bits;
    /** @category Arithmetic */
    add(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    mul(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    sub(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** 
     * @category Arithmetic 
     * 
     * Create the Z3 expression (signed) division \`self / other\`.
     */
    sdiv(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** 
     * @category Arithmetic 
     * 
     * Create the Z3 expression (unsigned) division \`self / other\`.
     */
    udiv(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (signed) modulo (Euclidean division) \`self MOD other\`.
     * 
     * - https://stackoverflow.com/questions/42138499/understanding-z3-bvsmod-behavior-with-ssa
     * - https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
    */
    smod(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (unsigned) remainder \`self % other\`.
     * 
     * https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
     */
    urem(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic 
     * 
     * Create the Z3 expression (signed) remainder \`self % other\`.
     * 
     * https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder
     */
    srem(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /** @category Arithmetic */
    neg(): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-or between two bitvectors
     * @category4 Bitwise
     */
    or(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-and between two bitvectors
     * @category Bitwise
     */
    and(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-not-and between two bitvectors
     * @category Bitwise
     */
    nand(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-exclusive-or between two bitvectors
     * @category Bitwise
     */
    xor(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise-exclusive-not-or between two bitvectors
     * @category Bitwise
     */
    xnor(other: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates an arithmetic shift right operation
     * @category Bitwise
     */
    shr(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a logical shift right operation
     * @category Bitwise
     */
    lshr(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a shift left operation
     * @category Bitwise
     */
    shl(count: CoercibleToBitVec<Bits, Name>): BitVec<Bits, Name>;
    /**
     * Creates a rotate right operation
     * @category Bitwise
     */
    rotateRight(count: CoercibleToBitVec<number, Name>): BitVec<Bits, Name>;
    /**
     * Creates a rotate left operation
     * @category Bitwise
     */
    rotateLeft(count: CoercibleToBitVec<number, Name>): BitVec<Bits, Name>;
    /**
     * Creates a bitwise not operation
     * @category Bitwise
     */
    not(): BitVec<Bits, Name>;
    /**
     * Creates an extraction operation.
     * Bits are indexed starting from 0 for the most right one (least significant) increasing to left (most significant)
     *
     * \`\`\`typescript
     * const x = BitVec.const('x', 8);
     *
     * x.extract(6, 2)
     * // Extract(6, 2, x)
     * x.extract(6, 2).sort
     * // BitVec(5)
     * \`\`\`
     * @param high The most significant bit to be extracted
     * @param low  The least significant bit to be extracted
     */
    extract(high: number, low: number): BitVec<number, Name>;
    /**
     * Extend the size by \`count\`.
     * Return a bit-vector expression with \`n\` extra leading sign-bits.
     * 
     * - **E.g.** from 8-bit to 32-bit using \`.signExt(24)\`. 
     * - **E.g2.** 4bit number \`0b1000\` has sign bit \`1\`, so \`.signExt(2)\` returns \`0b111000\`.
     * 
     * \`\`\`
     * >>> x = BitVec('x', 16)
     * >>> n = SignExt(8, x)
     * >>> n.size()
     * 24
     * >>> n
     * SignExt(8, x)
     * >>> n.sort()
     * BitVec(24)
     * >>> v0 = BitVecVal(2, 2)
     * >>> v0
     * 2
     * >>> v0.size()
     * 2
     * >>> v  = simplify(SignExt(6, v0))
     * >>> v
     * 254
     * >>> v.size()
     * 8
     * \`\`\`
     */
    signExt(count: number): BitVec<number, Name>;
    /**
     * Extend the size by \`count\`. 
     * Return a bit-vector expression with \`n\` extra leading zero-bits.
     * 
     * - **E.g.** from 8-bit to 32-bit using \`.zeroExt(24)\`.
     * - **E.g2.** 4bit number \`0b1000\` after .\`zeroExt(2)\` returns \`0b001000\`.
     *       It's same as original 4-bit number, but this time in 6-bit.
     * 
     * \`\`\`
     * >>> x = BitVec('x', 16)
     * >>> n = ZeroExt(8, x)
     * >>> n.size()
     * 24
     * >>> n
     * ZeroExt(8, x)
     * >>> n.sort()
     * BitVec(24)
     * >>> v0 = BitVecVal(2, 2)
     * >>> v0
     * 2
     * >>> v0.size()
     * 2
     * >>> v  = simplify(ZeroExt(6, v0))
     * >>> v
     * 2
     * >>> v.size()
     * 8
     * \`\`\`
     */
    zeroExt(count: number): BitVec<number, Name>;
    /** Return an expression representing \`count\` copies. */
    repeat(count: number): BitVec<number, Name>;
    /**
     * Creates a signed less-or-equal operation (\`<=\`)
     * @category Comparison
     */
    sle(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned less-or-equal operation (\`<=\`)
     * @category Comparison
     */
    ule(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed less-than operation (\`<\`)
     * @category Comparison
     */
    slt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned less-than operation (\`<\`)
     * @category Comparison
     */
    ult(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed greater-or-equal operation (\`>=\`)
     * @category Comparison
     */
    sge(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned greater-or-equal operation (\`>=\`)
     * @category Comparison
     */
    uge(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a signed greater-than operation (\`>\`)
     * @category Comparison
     */
    sgt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates an unsigned greater-than operation (\`>\`)
     * @category Comparison
     */
    ugt(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /**
     * Creates a reduction-and operation
     */
    redAnd(): BitVec<number, Name>;
    /**
     * Creates a reduction-or operation
     */
    redOr(): BitVec<number, Name>;
    /** 
     * @category Boolean
     * A predicate the determines that bit-vector addition does not overflow
     */
    addNoOverflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that signed bit-vector addition does not underflow
    */
    addNoUnderflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector subtraction does not overflow
     */
    subNoOverflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector subtraction does not underflow
     * 
     * This fn has a typo.
     */
    subNoUndeflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector signed division does not overflow
     */
    sdivNoOverflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector multiplication does not overflow
     */
    mulNoOverflow(other: CoercibleToBitVec<Bits, Name>, isSigned: boolean): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector signed multiplication does not underflow.
     * 
     * This fn has a typo.
     */
    mulNoUndeflow(other: CoercibleToBitVec<Bits, Name>): Bool<Name>;
    /** 
     * @category Boolean 
     * A predicate the determines that bit-vector unary negation does not overflow
     */
    negNoOverflow(): Bool<Name>;
}
/**
 * Represents Bit Vector constant value
 * @category Bit Vectors
 */
export interface BitVecNum<Bits extends number = number, Name extends string = 'main'> extends BitVec<Bits, Name> {
    /** @hidden */
    readonly __typename: 'BitVecNum';
    value(): bigint;
    asSignedValue(): bigint;
    asString(): string;
    asBinaryString(): string;
}
/**
 * A Sort representing a SMT Array with range of sort {@link SMTArraySort.range range}
 * and a domain of sort {@link SMTArraySort.domain domain}
 *
 * @typeParam DomainSort The sort of the domain of the array (provided as an array of sorts)
 * @typeParam RangeSort The sort of the array range
 * @category Arrays
 */
export interface SMTArraySort<Name extends string = 'main', DomainSort extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], RangeSort extends AnySort<Name> = AnySort<Name>> extends Sort<Name> {
    /** @hidden */
    readonly __typename: 'ArraySort';
    /**
     * The sort of the first dimension of the domain
     */
    domain(): DomainSort[0];
    /**
     * The sort of the i-th (0-indexed) dimension of the domain
     *
     * @param i index of the dimension of the domain being requested
     */
    domain_n<T extends number>(i: T): DomainSort[T];
    /**
     * The sort of the range
     */
    range(): RangeSort;
}
/** @category Arrays */
export interface SMTArrayCreation<Name extends string> {
    sort<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(...sig: [...DomainSort, RangeSort]): SMTArraySort<Name, DomainSort, RangeSort>;
    const<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(name: string, ...sig: [...DomainSort, RangeSort]): SMTArray<Name, DomainSort, RangeSort>;
    consts<DomainSort extends NonEmptySortArray<Name>, RangeSort extends Sort<Name>>(names: string | string[], ...sig: [...DomainSort, RangeSort]): SMTArray<Name, DomainSort, RangeSort>[];
    K<DomainSort extends AnySort<Name>, RangeSort extends AnySort<Name>>(domain: DomainSort, value: SortToExprMap<RangeSort, Name>): SMTArray<Name, [DomainSort], RangeSort>;
}
export declare type NonEmptySortArray<Name extends string = 'main'> = [
  Sort<Name>, ...Array<Sort<Name>>
];
export declare type ArrayIndexType<Name extends string, DomainSort extends Sort<Name>[]> = [
    ...{
        [Key in keyof DomainSort]: DomainSort[Key] extends AnySort<Name> ? SortToExprMap<DomainSort[Key], Name> : DomainSort[Key];
    }
];
export declare type CoercibleToArrayIndexType<Name extends string, DomainSort extends Sort<Name>[]> = [
    ...{
        [Key in keyof DomainSort]: DomainSort[Key] extends AnySort<Name> ? CoercibleToMap<SortToExprMap<DomainSort[Key], Name>, Name> : DomainSort[Key];
    }
];
/**
 * Represents Array expression
 *
 * @typeParam DomainSort The sort of the domain of the array (provided as an array of sorts)
 * @typeParam RangeSort The sort of the array range
 * @category Arrays
 */
export interface SMTArray<Name extends string = 'main', DomainSort extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], RangeSort extends Sort<Name> = Sort<Name>> extends Expr<Name, SMTArraySort<Name, DomainSort, RangeSort>, Z3_ast> {
    /** @hidden */
    readonly __typename: 'Array' | 'Lambda';
    domain(): DomainSort[0];
    domain_n<T extends number>(i: T): DomainSort[T];
    range(): RangeSort;
    /** 
     * Array read. 
     * 
     * @returns Z3 select array expression
     */
    select(...indices: CoercibleToArrayIndexType<Name, DomainSort>): SortToExprMap<RangeSort, Name>;
    /**
     * 
     * Copy the array and write to it.
     * Value should be coercible to RangeSort
     * 
     * @param indicesAndValue (idx0, idx1, ..., idxN, value)
     * @returns Z3 store array expression
     */
    store(...indicesAndValue: [
        ...CoercibleToArrayIndexType<Name, DomainSort>,
        CoercibleToMap<SortToExprMap<RangeSort, Name>, Name>
    ]): SMTArray<Name, DomainSort, RangeSort>;
}
/**
 * Defines the expression type of the body of a quantifier expression
 *
 * @category Quantifiers
 */
export declare type BodyT<Name extends string = 'main', QVarSorts extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], QSort extends BoolSort<Name> | SMTArraySort<Name, QVarSorts> = BoolSort<Name> | SMTArraySort<Name, QVarSorts>> = QSort extends BoolSort<Name> ? Bool<Name> : QSort extends SMTArray<Name, QVarSorts, infer RangeSort> ? SortToExprMap<RangeSort, Name> : never;
/** @category Quantifiers */
export interface Quantifier<Name extends string = 'main', QVarSorts extends NonEmptySortArray<Name> = [Sort<Name>, ...Sort<Name>[]], QSort extends BoolSort<Name> | SMTArraySort<Name, QVarSorts> = BoolSort<Name> | SMTArraySort<Name, QVarSorts>> extends Expr<Name, QSort> {
    readonly __typename: 'NonLambdaQuantifier' | 'Lambda';
    is_forall(): boolean;
    is_exists(): boolean;
    is_lambda(): boolean;
    weight(): number;
    num_patterns(): number;
    pattern(i: number): Pattern<Name>;
    num_no_patterns(): number;
    no_pattern(i: number): Expr<Name>;
    body(): BodyT<Name, QVarSorts, QSort>;
    num_vars(): number;
    var_name(i: number): string | number;
    var_sort<T extends number>(i: T): QVarSorts[T];
    children(): [BodyT<Name, QVarSorts, QSort>];
}
export interface Probe<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Probe';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_probe;
}
/** @hidden */
export interface TacticCtor<Name extends string> {
    new (name: string): Tactic<Name>;
}
export interface Tactic<Name extends string = 'main'> {
    /** @hidden */
    readonly __typename: 'Tactic';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_tactic;
}
/** @hidden */
export interface AstVectorCtor<Name extends string> {
    new <Item extends Ast<Name> = AnyAst<Name>>(): AstVector<Name, Item>;
}
/**
 * Stores multiple {@link Ast} objects
 *
 * \`\`\`typescript
 * const vector = new AstVector<Bool>();
 * vector.push(Bool.val(5));
 * vector.push(Bool.const('x'))
 *
 * vector.length
 * // 2
 * vector.get(1)
 * // x
 * [...vector.values()]
 * // [2, x]
 * \`\`\`
 */
export interface AstVector<Name extends string = 'main', Item extends Ast<Name> = AnyAst<Name>> extends Iterable<Item> {
    /** @hidden */
    readonly __typename: 'AstVector';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_ast_vector;
    length(): number;
    entries(): IterableIterator<[number, Item]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<Item>;
    get(i: number): Item;
    get(from: number, to: number): Item[];
    set(i: number, v: Item): void;
    push(v: Item): void;
    resize(size: number): void;
    has(v: Item): boolean;
    sexpr(): string;
}
/** @hidden */
export interface AstMapCtor<Name extends string> {
    new <Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>>(): AstMap<Name, Key, Value>;
}
/**
 * Stores a mapping between different {@link Ast} objects
 *
 * \`\`\`typescript
 * const map = new Map<Arith, Bool>();
 * const x = Int.const('x')
 * const y = Int.const('y')
 * map.set(x, Bool.val(true))
 * map.Set(y, Bool.val(false))
 *
 * map.size
 * // 2
 * map.has(x)
 * // true
 * [...map.entries()]
 * // [[x, true], [y, false]]
 * map.clear()
 * map.size
 * // 0
 * \`\`\`
 */
export interface AstMap<Name extends string = 'main', Key extends Ast<Name> = AnyAst<Name>, Value extends Ast<Name> = AnyAst<Name>> extends Iterable<[Key, Value]> {
    /** @hidden */
    readonly __typename: 'AstMap';
    readonly ctx: Context<Name>;
    readonly ptr: Z3_ast_map;
    get size(): number;
    entries(): IterableIterator<[Key, Value]>;
    keys(): AstVector<Name, Key>;
    values(): IterableIterator<Value>;
    get(key: Key): Value | undefined;
    set(key: Key, value: Value): void;
    delete(key: Key): void;
    clear(): void;
    has(key: Key): boolean;
    sexpr(): string;
}
/**
 * @category Global
 */
export interface Z3HighLevel {
    enableTrace(tag: string): void;
    disableTrace(tag: string): void;
    getVersion(): {
        major: number;
        minor: number;
        build_number: number;
        revision_number: number;
    };
    getVersionString(): string;
    getFullVersion(): string;
    openLog(filename: string): boolean;
    appendLog(s: string): void;
    /**
     * Set a Z3 parameter
     *
     * \`\`\`typescript
     * setParam('pp.decimal', true);
     * \`\`\`
     */
    setParam(key: string, value: any): void;
    /**
     * Set multiple Z3 parameters at once
     *
     * \`\`\`typescript
     * setParam({
     *   'pp.decimal': true,
     *   'pp.decimal_precision': 20
     * });
     * \`\`\`
     */
    setParam(key: Record<string, any>): void;
    /**
     * Resets all Z3 parameters
     */
    resetParams(): void;
    /**
     * Returns a global Z3 parameter
     */
    getParam(name: string): string | null;
    /**
     * Use this to create new contexts
     * @see {@link Context}
     */
    readonly Context: ContextCtor;
}
`;var an=(o,t)=>{throw new Error(`Invalid parseCode() definition: '${o}'. ${t}`)},mg=(o,t)=>{let r=o.split(`
`),e=gk(r),a={};return o2(t).forEach(c=>{let i=t[c],l=bk(e,c,i),w=e[l],b=e[l-1],y=e[l+1];y?.type!=="scope-end"&&an(c,`Expected scope end, got '${y.type}' ('${r[y.lineNum]}')`);let f=b?.type==="jsdoc"?xg(r,b.lineNum,w.lineNum-1)+`
`:"",m=xg(r,w.lineNum,y?.lineNum);a[c]=`${f}${m}`}),a};function xg(o,t,r){let e=r===void 0?o.length:r;return o.slice(t,e+1).join(`
`)}function bk(o,t,r){let e=o.filter(a=>a.text.startsWith(r));return e.length===0&&an(t,`No definition for '${r}'`),e.length>1&&an(t,`Multiple definitions for '${r}'`),o.findIndex(a=>a.text.startsWith(r))}function gk(o){let t=[];return o.forEach((r,e)=>{let a={type:"other",lineNum:e,text:r};r.startsWith("/**")?t.push({...a,type:"jsdoc"}):r.startsWith("}")||r.startsWith("]")?t.push({...a,type:"scope-end"}):r.length>0&&!ow(r)&&t.push({...a,type:"other"})}),t}var N4=yg,uk={Arith:"export interface Arith<",IntNum:"export interface IntNum<",RatNum:"export interface RatNum<",NonEmptySortArray:"export declare type NonEmptySortArray<",SMTArray:"export interface SMTArray<",BitVec:"export interface BitVec<",Bool:"export interface Bool<",Context:"export interface Context<",Quantifier:"export interface Quantifier<",Solver:"export interface Solver<",Optimize:"export interface Optimize<",Model:"export interface Model<"},zg=mg(N4,uk);var kg=`/*
This file contains a few useful utilities that are used in my examples.
*/

/** Evaluate expression using simplify() */
async function _evalExpr(expr) {
  const result = await simplify(expr);
  return result.toString();
}

/** Parse BitVec string to a number */
function _parseBitVec2Number(x) {
  return x.startsWith('#b')
    ? parseInt(x.replace('#b', ''), 2)
    : parseInt(x.replace('#x', '0x'), 16);
}

/** Evaluate BitVec expression and pretty-print it */
async function _evalBitVec(expr) {
  const result = await _evalExpr(expr);
  const num = _parseBitVec2Number(result);
  if (isNaN(num)) return 'NaN';
  return \`0b\${num.toString(2)} (dec \${num}), \${expr.size()}bit\`;
}

/** Evaluate bool expression */
async function _evalBool(expr) {
  const result = await _evalExpr(expr);
  return result === 'true';
}

/** assert that set of constraints evaluates to True */
async function _assertEvaluatesTrue(prefix, ...expr) {
  const result = await solve(...expr);
  if (result === 'unsat' || result === 'unknown') {
    console.error(\`\${prefix} returned '\${result}'\`);
  } else {
    console.log(\`\${prefix} OK\`);
  }
}

/** Iterate over all model declarations and print the values */
function printModelValues(prefix, model) {
  if (!model || typeof model !== 'object') {
    console.error(\`\${prefix} Could not print model values. Model:\`, model);
    return;
  }
  for (const k of model.values()) {
    console.log(prefix, \`\${k.name()}:\`, model.eval(k.call()).toString());
  }
}

/** Run solver and print all model values */
async function _executeSolver(prefix, solver) {
  const result = await solver.check();
  if (result !== 'sat') {
    console.log(prefix, 'is unsatisfiable');
    return;
  }

  const model = solver.model();
  _printModelValues(prefix, model);
  return model;
}
`;var _g=kg;var cn="main.mjs";function nn(o){t("main",Zi+`

`+N6,{mode:"user"}),t("readme",ji,{mode:"readonly",language:"markdown"}),t("utils",_g,{mode:"readonly"}),t("docs/numeric",Ui),t("docs/booleans",Yi),t("docs/solver",qi),t("docs/bitVec",Xi),t("docs/arrays",Wi),t("docs/quantifiers",$i),t("docs/context",Ki),t("examples/sudoku",N6),t("examples/padlock",Gi),t("examples/eightQueens",Qi),t("examples/einsteinPuzzle",Ji),t("examples/physics",on),t("examples/magicSquare",tn),t("examples/dogCatMouse",rn),t("examples/janeStreetJune2018",en),t("types/_allTypes",N4,{mode:"readonly"}),r("types/Arith",["Arith","IntNum","RatNum"]),r("types/Array",["NonEmptySortArray","SMTArray"]),r("types/BitVec",["BitVec"]),r("types/Bool",["Bool"]),r("types/Context",["Context"]),r("types/Quantifier",["Quantifier"]),r("types/Solver",["Model","Solver","Optimize"]);function t(e,a,c){let i=c?.mode||"system",l=c?.language||cw;e=`${e}.${l==="markdown"?"md":"mjs"}`,o.createFile(e,a,{mode:i,language:l})}function r(e,a){let i=a.map(l=>zg[l]).join(`

`);return t(e,i,{mode:"readonly"})}}var w2=fg({});w2.listen(o=>{let{pathname:t}=o.location;localStorage.setItem(fr.lastFile,t)});function Mg(o){let t=r=>o.exists(r);try{let{pathname:r}=w2.location;if(t(r))return r;let e=hk();if(e&&t(e))return e;if(t(cn))return cn;let a=o.listFiles();for(let c of a)if(t(c.path))return c.path}catch{}return"invalid-file.mjs"}function hk(){let o=localStorage.getItem(fr.lastFile);return typeof o=="string"&&o.length>0?o:void 0}var Sg=(o,t)=>{let r=(0,st.useRef)(null);(0,st.useEffect)(()=>{let a=r.current;a&&(o?a.showModal():a.close())},[o]);let e=(0,st.useCallback)(()=>{r.current?.close(),t()},[t]);return(0,st.useEffect)(()=>w2.listen(e),[e]),{isOpen:o,setClosed:t,onForceCloseDialog:e,dialogElRef:r}},Lg=({id:o,dialogLabel:t,children:r,dialogElRef:e,isOpen:a,setClosed:c,onForceCloseDialog:i})=>st.default.createElement(fk,{isOpen:a},st.default.createElement("dialog",{id:`${o}-dialog`,className:"bg-transparent",ref:e,onClose:c},st.default.createElement("section",{className:"max-w-full w-[600px] px-6 pt-4 pb-2 overflow-hidden rounded-lg"},st.default.createElement(vg,{onClick:i}),st.default.createElement("h2",{className:"mt-0 mb-3 text-xl text-center md:text-4xl"},t),r)));function fk({children:o,isOpen:t}){if(!t)return null;let r=document.getElementById("dialog-container");return(0,Cg.createPortal)(o,r)}var Vg=({onFileDiscard:o})=>{let{discardedFilePath:t,setDiscardedFilePath:r}=ln(),e=t!==void 0,a=(0,Ho.useCallback)(()=>r(void 0),[r]),c=Sg(e,a),i=t||"";return Ho.default.createElement(Lg,{...c,dialogLabel:"Discard file",id:"discard-file-dialog"},Ho.default.createElement(Ii,null,"The file ",Ho.default.createElement(wg,null,'"',i,'"')," is part of the documentation. You are free to edit it and test things out."),Ho.default.createElement(Ii,null,"Discarding the changes will restore the original file content."),Ho.default.createElement(sg,null,Ho.default.createElement(dg,{danger:!0,onClick:()=>{o(i),c.onForceCloseDialog()}},"Yes, discard the changes")))},Hg=(0,Ho.createContext)(void 0),Eg={Provider:o=>{let[t,r]=(0,Ho.useState)();return Ho.default.createElement(Hg.Provider,{value:{discardedFilePath:t,setDiscardedFilePath:r}},o.children)}},ln=()=>(0,Ho.useContext)(Hg);function Bg(o){let t=yk(o.filename);return wt.default.createElement(ea,{title:t,className:"h-[32px]",leftSection:wt.default.createElement(E4,null,wt.default.createElement(xb,null),wt.default.createElement(yb,null)),rightSection:wt.default.createElement(E4,null,wt.default.createElement(ig,{size:20}),wt.default.createElement(cg,{onCodeExec:o.onCodeExec}))})}function yk(o){let t=F6(o),r=P6(o),{setDiscardedFilePath:e}=ln(),a=(0,wt.useCallback)(()=>{e(o)},[o,e]);return t.mode==="readonly"?`${o} (read-only)`:!r||t.mode==="user"?o:wt.default.createElement("div",{className:"inline"},wt.default.createElement("h2",{className:"inline truncate"},o)," ",wt.default.createElement("button",{className:"hover:underline",onClick:a},"(changed)"))}var Fg=({editorRef:o,activeFile:t,onCodeExec:r,onEditorMount:e,onEditorChange:a})=>{let c=xo(i=>i.layout);return R6.default.createElement(Bc,{minSize:10,className:(0,Ag.default)("bg-vscodebg",c==="two-columns"?"rounded-r-sm":"rounded-b-sm")},R6.default.createElement(Bg,{filename:t,onCodeExec:r}),R6.default.createElement(eg,{activeFile:t,editorRef:o,onMount:e,onEditorChange:a}))};var tr=K(n0()),yu=K(W1());var L1=K(n0());var T4=K(W1()),B1=K(Zg()),d1=K(n0());function gn(o){return(gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(o)}function dn(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function qg(o,t){return function(r){if(Array.isArray(r))return r}(o)||function(r,e){var a=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var c,i,l=[],w=!0,b=!1;try{for(a=a.call(r);!(w=(c=a.next()).done)&&(l.push(c.value),!e||l.length!==e);w=!0);}catch(y){b=!0,i=y}finally{try{w||a.return==null||a.return()}finally{if(b)throw i}}return l}}(o,t)||un(o,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function St(o){return function(t){if(Array.isArray(t))return wn(t)}(o)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(o)||un(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function un(o,t){if(o){if(typeof o=="string")return wn(o,t);var r=Object.prototype.toString.call(o).slice(8,-1);return r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set"?Array.from(o):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?wn(o,t):void 0}}function wn(o,t){(t==null||t>o.length)&&(t=o.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=o[r];return e}function Eo(o,t){var r=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!r){if(Array.isArray(o)||(r=un(o))||t&&o&&typeof o.length=="number"){r&&(o=r);var e=0,a=function(){};return{s:a,n:function(){return e>=o.length?{done:!0}:{done:!1,value:o[e++]}},e:function(w){throw w},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c,i=!0,l=!1;return{s:function(){r=r.call(o)},n:function(){var w=r.next();return i=w.done,w},e:function(w){l=!0,c=w},f:function(){try{i||r.return==null||r.return()}finally{if(l)throw c}}}}function pn(o,t){var r={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(r[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(r[e[a]]=o[e[a]])}return r}var jg={root:"tree",node:"tree-node",branch:"tree-node__branch",branchWrapper:"tree-branch-wrapper",leafListItem:"tree-leaf-list-item",leaf:"tree-node__leaf",nodeGroup:"tree-node-group"},or={select:"SELECT",focus:"FOCUS",exclusiveSelect:"EXCLUSIVE_SELECT"},zk=Object.freeze(Object.values(or)),kk=Object.freeze(Object.values({check:"check",select:"select"})),hn="COLLAPSE",j6="COLLAPSE_MANY",I6="EXPAND",D6="EXPAND_MANY",fn="HALF_SELECT",I4="SELECT",Xg="DESELECT",U6="TOGGLE",Z6="TOGGLE_SELECT",zr="SELECT_MANY",Wg="EXCLUSIVE_CHANGE_SELECT_MANY",Do="FOCUS",$g="CLEAR_FOCUS",Kg="BLUR",_k="DISABLE",Mk="ENABLE",Gg="CLEAR_MANUALLY_TOGGLED",Qg="CONTROLLED_SELECT_MANY",Jg="UPDATE_TREE_STATE_WHEN_DATA_CHANGED",G2=function(){},sn=function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return function(e){for(var a=0,c=t;a<c.length;a++){var i=c[a];if(i&&i(e),e.defaultPrevented)break}}},v2=function(o,t){var r,e=new Set,a=Eo(o);try{for(a.s();!(r=a.n()).done;){var c=r.value;t.has(c)||e.add(c)}}catch(i){a.e(i)}finally{a.f()}return e},T6=function(o,t){return new Set([].concat(St(v2(o,t)),St(v2(t,o))))},Ug=function(o){var t=(0,d1.useRef)();return(0,d1.useEffect)(function(){t.current=o},[o]),t.current},Bo=function(o,t){var r;return!!(!((r=_1(o,t).children)===null||r===void 0)&&r.length)},kr=function(o,t){return _1(o,t).parent},Ck=function(o,t,r){for(var e=t,a=[];;){var c=kr(o,e);if(c===0||c==null||c!=null&&r.has(c))break;a.push(c),e=c}return a},Q2=function(o,t,r){var e=[];return function a(c,i){var l=_1(c,i);if(l.children!=null){var w,b=Eo(l.children.filter(function(f){return!r.has(f)}));try{for(b.s();!(w=b.n()).done;){var y=w.value;e.push(y),a(c,y)}}catch(f){b.e(f)}finally{b.f()}}}(o,t),e},ou=function(o,t){var r=_1(o,t);return r.children==null?[]:r.children},tu=function(o,t,r){var e=kr(o,t);if(e!=null){var a=_1(o,e),c=a.children.indexOf(t)+r;if(a.children[c])return a.children[c]}return null},vn=function(o,t,r){var e=_1(o,t);for(vt(o).id===t&&(e=_1(o,_1(o,t).children[_1(o,t).children.length-1]));r.has(e.id)&&Bo(o,e.id);)e=_1(o,e.children[e.children.length-1]);return e.id},bn=function(o,t,r){if(t===vt(o).children[0])return null;var e=tu(o,t,-1);return e==null?kr(o,t):vn(o,e,r)},R4=function(o,t,r){var e=_1(o,t).id;if(Bo(o,e)&&r.has(e))return _1(o,e).children[0];for(;;){var a=tu(o,e,1);if(a!=null)return a;if((e=kr(o,e))==null)return null}},ru=function(o){var t=o.data,r=o.expandedIds,e=o.from,a=o.to,c=[],i=t.length,l=0,w=e;if(c.push(e),e<a)for(;l<i&&((w=R4(t,w,r))!=null&&c.push(w),w!=null&&w!==a);)l+=1;else if(e>a)for(;l<i&&((w=bn(t,w,r))!=null&&c.push(w),w!=null&&w!==a);)l+=1;return c},eu=function(o){var t=0,r=[];return function e(a,c){var i,l=Object.assign(Object.assign({id:a.id||t,name:a.name,children:[]},a.isBranch&&{isBranch:a.isBranch}),{parent:c,metadata:a.metadata?Object.assign({},a.metadata):void 0});if(r.find(function(x){return x.id===l.id}))throw Error("Multiple TreeView nodes have the same ID (".concat(l.id,"). IDs must be unique."));if(r.push(l),t+=1,(i=a.children)===null||i===void 0?void 0:i.length){var w,b=Eo(a.children);try{for(b.s();!(w=b.n()).done;)e(w.value,l.id)}catch(x){b.e(x)}finally{b.f()}var y,f=Eo(r.values());try{for(f.s();!(y=f.n()).done;){var m=y.value;m.parent===l.id&&l.children.push(m.id)}}catch(x){f.e(x)}finally{f.f()}}}(o,null),r},Sk=function(o){var t=o.isSelected,r=o.isDisabled,e=o.multiSelect;return r||e?t:!!t||void 0},Lk=function(o){var t=o.isSelected,r=o.isDisabled,e=o.isHalfSelected,a=o.multiSelect;return r?t:e?"mixed":a?t:!!t||void 0},b2=function(o,t,r){return t.concat.apply(t,St(t.filter(function(e){return Bo(o,e)}).map(function(e){return Q2(o,e,r)})))},Vk=function(o,t,r){t!=null?window.navigator.userAgent.match(/Trident/)?setTimeout(function(){return!t.contains(document.activeElement)&&r()},0):!t.contains(o.nativeEvent.relatedTarget)&&r():console.warn("ref not set on <ul>")},Hk=function(o,t,r){var e=ou(o,t);return Bo(o,t)&&!r.has(t)&&e.length===1&&e.every(function(a){return r.has(a)})},au=function(o,t,r,e){var a=function(i,l,w){return Bo(i,l)&&w.has(l)&&Q2(i,l,new Set).some(function(b){return w.has(b)})}(o,t,r),c=function(i,l,w){var b=ou(i,l);return Bo(i,l)&&w.has(l)&&b.length===1&&b.every(function(y){return w.has(y)})}(o,t,r);return function(i,l,w,b){var y=Q2(i,l,new Set);return Bo(i,l)&&w.has(l)&&y.every(function(f){return w.has(f)})&&y.every(function(f){return!b.has(f)})}(o,t,r,e)?Z6:a&&!c?fn:Z6},vt=function(o){var t=o.find(function(r){return r.parent===null});if(!t)throw Error("TreeView data must contain parent node.");return t},_1=function(o,t){var r=o.find(function(e){return e.id===t});if(r==null)throw Error("Node with id=".concat(t," doesn't exist in the tree."));return r},Yg=function(o){var t=Array.from(new Set(o));return o.length!==t.length},Ek=function(o,t){switch(t.type){case hn:var r=new Set(o.expandedIds);return r.delete(t.id),Object.assign(Object.assign({},o),{expandedIds:r,tabbableId:t.id,isFocused:!0,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case j6:var e,a=new Set(o.expandedIds),c=Eo(t.ids);try{for(c.s();!(e=c.n()).done;){var i=e.value;a.delete(i)}}catch(w0){c.e(w0)}finally{c.f()}return Object.assign(Object.assign({},o),{expandedIds:a,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case I6:var l=new Set(o.expandedIds);return l.add(t.id),Object.assign(Object.assign({},o),{expandedIds:l,tabbableId:t.id,isFocused:!0,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case D6:var w=new Set([].concat(St(o.expandedIds),St(t.ids)));return Object.assign(Object.assign({},o),{expandedIds:w,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case U6:var b=new Set(o.expandedIds);return o.expandedIds.has(t.id)?b.delete(t.id):b.add(t.id),Object.assign(Object.assign({},o),{expandedIds:b,tabbableId:t.id,isFocused:!0,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case fn:if(o.disabledIds.has(t.id))return o;var y=new Set(o.halfSelectedIds),f=new Set(o.selectedIds);return y.add(t.id),f.delete(t.id),Object.assign(Object.assign({},o),{selectedIds:f,halfSelectedIds:y,tabbableId:t.keepFocus?o.tabbableId:t.id,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled,lastUserSelect:t.NotUserAction?o.lastUserSelect:t.id});case I4:if(!t.NotUserAction&&o.disabledIds.has(t.id))return o;var m;t.multiSelect?(m=new Set(o.selectedIds)).add(t.id):(m=new Set).add(t.id);var x=new Set(o.halfSelectedIds);return x.delete(t.id),Object.assign(Object.assign({},o),{selectedIds:m,halfSelectedIds:x,tabbableId:t.keepFocus?o.tabbableId:t.id,isFocused:t.NotUserAction!==!0,lastUserSelect:t.NotUserAction?o.lastUserSelect:t.id,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled});case Xg:if(!t.NotUserAction&&o.disabledIds.has(t.id))return o;var s,d=new Set(o.selectedIds);return d.delete(t.id),t.multiSelect?(s=new Set(o.halfSelectedIds)).delete(t.id):s=new Set,Object.assign(Object.assign({},o),{selectedIds:d,halfSelectedIds:s,tabbableId:t.keepFocus?o.tabbableId:t.id,isFocused:!0,lastUserSelect:t.NotUserAction?o.lastUserSelect:t.id,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled});case Z6:if(o.disabledIds.has(t.id))return o;var n,u=o.selectedIds.has(t.id);t.multiSelect?(n=new Set(o.selectedIds),u?n.delete(t.id):n.add(t.id)):(n=new Set,u||n.add(t.id));var v=new Set(o.halfSelectedIds);return v.delete(t.id),Object.assign(Object.assign({},o),{selectedIds:n,halfSelectedIds:v,tabbableId:t.id,isFocused:!0,lastUserSelect:t.NotUserAction?o.lastUserSelect:t.id,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled});case zr:var p,M=t.ids.filter(function(w0){return!o.disabledIds.has(w0)});if(t.multiSelect){p=t.select?new Set([].concat(St(o.selectedIds),St(M))):v2(o.selectedIds,new Set(M));var H=v2(o.halfSelectedIds,p);return Object.assign(Object.assign({},o),{selectedIds:p,halfSelectedIds:H,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled})}return o;case Wg:var L,k=t.ids.filter(function(w0){return!o.disabledIds.has(w0)});if(t.multiSelect){L=t.select?new Set(k):v2(o.selectedIds,new Set(k));var C=v2(o.halfSelectedIds,L);return Object.assign(Object.assign({},o),{selectedIds:L,halfSelectedIds:C,lastAction:t.type,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled})}return o;case Qg:var B,O=o.lastInteractedWith,A=o.tabbableId;if(t.multiSelect)B=new Set(t.ids),t.ids.length&&(O=t.ids[t.ids.length-1],A=t.ids[t.ids.length-1]);else{B=new Set,t.ids.length>1&&console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");var Y=t.ids[0];Y&&B.add(Y),O=Y??O,A=Y??O}var q=new Set(o.halfSelectedIds);t.ids.every(function(w0){return q.delete(w0)});var P=new Set(t.ids);return Object.assign(Object.assign({},o),{selectedIds:B,halfSelectedIds:q,controlledIds:P,isFocused:!0,lastAction:t.type,tabbableId:A,lastInteractedWith:O});case Do:return Object.assign(Object.assign({},o),{tabbableId:t.id,isFocused:!0,lastAction:t.type,lastInteractedWith:t.lastInteractedWith});case Kg:return Object.assign(Object.assign({},o),{isFocused:!1});case $g:return Object.assign(Object.assign({},o),{isFocused:!1,lastInteractedWith:null,tabbableId:t.id});case _k:var U=new Set(o.disabledIds);return U.add(t.id),Object.assign(Object.assign({},o),{disabledIds:U});case Mk:var Q=new Set(o.disabledIds);return Q.delete(t.id),Object.assign(Object.assign({},o),{disabledIds:Q});case Gg:return Object.assign(Object.assign({},o),{lastManuallyToggled:null});case Jg:return Object.assign(Object.assign({},o),{tabbableId:t.tabbableId,lastInteractedWith:t.lastInteractedWith,lastManuallyToggled:t.lastManuallyToggled,lastUserSelect:t.lastUserSelect});default:throw new Error("Invalid action passed to the reducer")}},cu=function(o){var t=o.element,r=o.dispatch,e=o.data,a=o.selectedIds,c=o.tabbableId,i=o.isFocused,l=o.expandedIds,w=o.disabledIds,b=o.halfSelectedIds,y=o.lastUserSelect,f=o.nodeRefs,m=o.leafRefs,x=o.baseClassNames,s=o.nodeRenderer,d=o.nodeAction,n=o.setsize,u=o.posinset,v=o.level,p=o.propagateCollapse,M=o.propagateSelect,H=o.multiSelect,L=o.togglableSelect,k=o.clickAction,C=o.state,B=function(P){if(!(P.ctrlKey||P.altKey||P.shiftKey))if(l.has(t.id)&&p){var U=[t.id].concat(St(Q2(e,t.id,new Set)));r({type:j6,ids:U,lastInteractedWith:t.id})}else r({type:U6,id:t.id,lastInteractedWith:t.id})},O=function(){return r({type:Do,id:t.id,lastInteractedWith:t.id})},A=function(P){if(P.shiftKey){var U=ru({data:e,expandedIds:l,from:y,to:t.id}).filter(function(Q){return!w.has(Q)});U=M?b2(e,U,w):U,r({type:Wg,select:!0,multiSelect:H,ids:U,lastInteractedWith:t.id,lastManuallyToggled:t.id})}else P.ctrlKey||k===or.select?(r({type:L?au(e,t.id,a,w):I4,id:t.id,multiSelect:H,lastInteractedWith:t.id,lastManuallyToggled:t.id}),M&&!w.has(t.id)&&r({type:zr,ids:b2(e,[t.id],w),select:!L||!a.has(t.id),multiSelect:H,lastInteractedWith:t.id,lastManuallyToggled:t.id})):k===or.exclusiveSelect?r({type:L?Z6:I4,id:t.id,multiSelect:!1,lastInteractedWith:t.id,lastManuallyToggled:t.id}):k===or.focus&&r({type:Do,id:t.id,lastInteractedWith:t.id})},Y=function(P){var U;return(0,T4.default)(P,(dn(U={},"".concat(P,"--expanded"),l.has(t.id)),dn(U,"".concat(P,"--selected"),a.has(t.id)),dn(U,"".concat(P,"--focused"),c===t.id&&i),U))},q=d==="select"?{"aria-selected":Sk({isSelected:a.has(t.id),isDisabled:w.has(t.id),multiSelect:H})}:{"aria-checked":Lk({isSelected:a.has(t.id),isDisabled:w.has(t.id),isHalfSelected:b.has(t.id),multiSelect:H})};return Bo(e,t.id)||t.isBranch?d1.default.createElement("li",Object.assign({role:"treeitem","aria-expanded":l.has(t.id),"aria-setsize":n,"aria-posinset":u,"aria-level":v,"aria-disabled":w.has(t.id),tabIndex:c===t.id?0:-1,ref:function(P){f?.current!=null&&P!=null&&(f.current[t.id]=P)},className:x.branchWrapper},q),d1.default.createElement(d1.default.Fragment,null,s({element:t,isBranch:!0,isSelected:a.has(t.id),isHalfSelected:b.has(t.id),isExpanded:l.has(t.id),isDisabled:w.has(t.id),dispatch:r,getNodeProps:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=P.onClick;return{onClick:U==null?sn(A,B,O):sn(U,O),className:(0,T4.default)(Y(x.node),x.branch),ref:function(Q){m?.current!=null&&(m.current[t.id]=Q)}}},setsize:n,posinset:u,level:v,handleSelect:A,handleExpand:B,treeState:C}),d1.default.createElement(Bk,Object.assign({getClasses:Y},function(P){return P.setsize,P.posinset,pn(P,["setsize","posinset"])}(o))))):d1.default.createElement("li",{role:"none",className:Y(x.leafListItem)},s({element:t,isBranch:!1,isSelected:a.has(t.id),isHalfSelected:!1,isExpanded:!1,isDisabled:w.has(t.id),dispatch:r,getNodeProps:function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},U=P.onClick;return Object.assign({role:"treeitem",tabIndex:c===t.id?0:-1,onClick:sn(U??A,O),ref:function(Q){f?.current!=null&&m?.current!=null&&(f.current[t.id]=Q,m.current[t.id]=Q)},className:(0,T4.default)(Y(x.node),x.leaf),"aria-setsize":n,"aria-posinset":u,"aria-level":v,disabled:w.has(t.id),"aria-disabled":w.has(t.id)},q)},setsize:n,posinset:u,level:v,handleSelect:A,handleExpand:G2,treeState:C}))},Bk=function(o){var t=o.data,r=o.element,e=o.expandedIds,a=o.getClasses,c=o.baseClassNames,i=o.level,l=pn(o,["data","element","expandedIds","getClasses","baseClassNames","level"]);return d1.default.createElement("ul",{role:"group",className:a(c.nodeGroup)},e.has(r.id)&&r.children.length>0&&r.children.map(function(w,b){return d1.default.createElement(cu,Object.assign({data:t,expandedIds:e,baseClassNames:c,key:"".concat(w,"-").concat(gn(w)),element:_1(t,w),setsize:r.children.length,posinset:b+1,level:i+1},l))}))},Ak=function(o){var t=o.data,r=o.controlledSelectedIds,e=o.controlledExpandedIds,a=o.defaultExpandedIds,c=o.defaultSelectedIds,i=o.defaultDisabledIds,l=o.nodeRefs,w=o.leafRefs,b=o.onSelect,y=o.onNodeSelect,f=o.onExpand,m=o.onLoadData,x=o.togglableSelect,s=o.multiSelect,d=o.propagateSelect,n=o.propagateSelectUpwards,u=o.treeRef,v=o.focusedId,p=vt(t),M=qg((0,d1.useReducer)(Ek,{selectedIds:new Set(r||c),controlledIds:new Set(r),tabbableId:p.children[0],isFocused:!1,expandedIds:new Set(e||a),halfSelectedIds:new Set,lastUserSelect:p.children[0],lastInteractedWith:null,lastManuallyToggled:null,disabledIds:new Set(i)}),2),H=M[0],L=M[1],k=H.selectedIds,C=H.expandedIds,B=H.disabledIds,O=H.tabbableId,A=H.halfSelectedIds,Y=H.lastAction,q=H.lastInteractedWith,P=H.lastManuallyToggled,U=Ug(k)||new Set,Q=T6(k,U);(0,d1.useEffect)(function(){var l0;if(b!=null&&b!==G2){var D,X=Eo(Q);try{for(X.s();!(D=X.n()).done;){var o0=D.value,J=Bo(t,o0)||!!(!((l0=_1(t,O))===null||l0===void 0)&&l0.isBranch);b({element:_1(t,o0),isBranch:J,isExpanded:!!J&&C.has(o0),isSelected:k.has(o0),isDisabled:B.has(o0),isHalfSelected:!!J&&A.has(o0),treeState:H})}}catch(c0){X.e(c0)}finally{X.f()}}},[t,k,C,B,A,Q,b,H]),(0,d1.useEffect)(function(){y!=null&&y!==G2&&P!=null&&Q.size&&(y({element:_1(t,P),isSelected:k.has(P),isBranch:Bo(t,P),treeState:H}),L({type:Gg}))},[P,k,Q]);var w0=Ug(C)||new Set;(0,d1.useEffect)(function(){var l0=T6(C,w0);if(f!=null&&f!==G2){var D,X=Eo(l0);try{for(X.s();!(D=X.n()).done;){var o0=D.value;f({element:_1(t,o0),isExpanded:C.has(o0),isSelected:k.has(o0),isDisabled:B.has(o0),isHalfSelected:A.has(o0),treeState:H})}}catch(J){X.e(J)}finally{X.f()}}},[t,k,C,B,A,w0,f,H]);var t0,b0,e0=(t0=t,b0=(0,d1.useRef)(),(0,d1.useEffect)(function(){b0.current=t0}),b0.current||new Map);(0,d1.useEffect)(function(){var l0=T6(C,w0);if(m){var D,X=Eo(l0);try{for(X.s();!(D=X.n()).done;){var o0=D.value;m({element:_1(t,o0),isExpanded:C.has(o0),isSelected:k.has(o0),isDisabled:B.has(o0),isHalfSelected:A.has(o0),treeState:H})}}catch(u0){X.e(u0)}finally{X.f()}if(e0!==t&&x&&d){var J,c0=Eo(C);try{for(c0.s();!(J=c0.n()).done;){var v0=J.value;k.has(v0)&&L({type:zr,ids:b2(t,[v0],B),select:!0,multiSelect:s,lastInteractedWith:v0})}}catch(u0){c0.e(u0)}finally{c0.f()}}}},[t,k,C,B,A,w0,m,H]),(0,d1.useEffect)(function(){if(e0!==t){var l0=vt(t);l0.children.length&&L({type:Jg,tabbableId:t.find(function(D){return D.id===H.tabbableId})?H.tabbableId:l0.children[0],lastInteractedWith:t.find(function(D){return D.id===H.lastInteractedWith})?H.lastInteractedWith:null,lastManuallyToggled:t.find(function(D){return D.id===H.lastManuallyToggled})?H.lastManuallyToggled:null,lastUserSelect:t.find(function(D){return D.id===H.lastUserSelect})?H.lastUserSelect:l0.children[0]})}},[t]);var d0=T6(new Set(r),k);return(0,d1.useEffect)(function(){if(r){d0.size&&L({type:Qg,ids:r,multiSelect:s});var l0,D=Eo(r);try{for(D.s();!(l0=D.n()).done;){var X=l0.value;d&&!B.has(X)&&L({type:zr,ids:b2(t,[X],B),select:!0,multiSelect:s,lastInteractedWith:X})}}catch(o0){D.e(o0)}finally{D.f()}}},[r]),(0,d1.useEffect)(function(){var l0=new Set(e),D=v2(l0,w0),X=v2(w0,l0);if(X.size){var o0,J=Eo(X);try{for(J.s();!(o0=J.n()).done;){var c0=o0.value;if(Bo(t,c0)||_1(t,c0).isBranch){var v0=[c0].concat(St(Q2(t,c0,new Set)));L({type:j6,ids:v0,lastInteractedWith:c0})}}}catch(C0){J.e(C0)}finally{J.f()}}if(D.size){var u0,f0=Eo(D);try{for(f0.s();!(u0=f0.n()).done;){var k0=u0.value;if(Bo(t,k0)||_1(t,k0).isBranch){var A0=kr(t,k0);L(A0?{type:D6,ids:[k0,A0],lastInteractedWith:k0}:{type:I6,id:k0,lastInteractedWith:k0})}}}catch(C0){f0.e(C0)}finally{f0.f()}}},[e]),(0,d1.useEffect)(function(){if(n){var l0=new Set(St(Q));q&&Y!==Do&&Y!==hn&&Y!==I6&&Y!==U6&&l0.add(q);var D=[];l0.forEach(function(I0){t.find(function(B0){return B0.id===I0})||D.push(I0)}),D.forEach(function(I0){return l0.delete(I0)});var X,o0=function(I0,B0,$0,R0,y0,a1){var Z,R={every:new Set,some:new Set,none:new Set},I=Eo(B0);try{for(I.s();!(Z=I.n()).done;)for(var W=Z.value;;){var a0=kr(I0,W);if(a0===0||a0==null||a0!=null&&R0.has(a0))break;var s0=_1(I0,a0).children.filter(function(x0){return!R0.has(x0)});if(s0.length===0)break;if(s0.some(function(x0){return $0.has(x0)||R.some.has(x0)&&!R.none.has(x0)||y0.has(x0)&&!R.none.has(x0)}))s0.every(function(x0){return $0.has(x0)})?R.every.add(a0):R.some.add(a0);else{var H0=Ck(I0,W,R0).find(function(x0){return $0.has(x0)});if(!a1&&H0){Q2(I0,H0,R0).forEach(function(x0){y0.has(x0)&&R.none.add(x0)});break}R.none.add(a0)}W=a0}}catch(x0){I.e(x0)}finally{I.f()}return R}(t,l0,k,B,A,s),J=o0.every,c0=o0.some,v0=o0.none,u0=Eo(J);try{for(u0.s();!(X=u0.n()).done;){var f0=X.value;k.has(f0)||L({type:I4,id:f0,multiSelect:s||Hk(t,f0,k),keepFocus:!0,NotUserAction:!0,lastInteractedWith:q})}}catch(I0){u0.e(I0)}finally{u0.f()}var k0,A0=Eo(c0);try{for(A0.s();!(k0=A0.n()).done;){var C0=k0.value;A.has(C0)||L({type:fn,id:C0,lastInteractedWith:q,keepFocus:!0,NotUserAction:!0})}}catch(I0){A0.e(I0)}finally{A0.f()}var N0,X0=Eo(v0);try{for(X0.s();!(N0=X0.n()).done;){var e1=N0.value;(k.has(e1)||A.has(e1))&&L({type:Xg,id:e1,multiSelect:s,keepFocus:!0,NotUserAction:!0,lastInteractedWith:q,lastManuallyToggled:P})}}catch(I0){X0.e(I0)}finally{X0.f()}}},[t,s,n,k,C,B,A,Y,U,Q,q,d0]),(0,d1.useEffect)(function(){if(q!=null&&O!=null&&l?.current!=null&&w?.current!=null&&(u?.current==null||document.activeElement&&u.current.contains(document.activeElement)||v)){var l0=l.current[O];(function(D){D!=null&&D.scrollIntoView&&D.scrollIntoView({block:"nearest"})})(w.current[q]),function(D){D!=null&&D.focus&&D.focus({preventScroll:!0})}(l0)}},[O,l,w,q]),(0,d1.useEffect)(function(){if(v||L({type:$g,id:p.children[0]}),v&&t.find(function(D){return D.id===v})){var l0=function D(X,o0){var J=kr(X,o0),c0=J&&(Bo(X,J)||_1(X,J).isBranch);return J&&c0?[J].concat(St(D(X,J))):[]}(t,v);l0.length&&L({type:D6,ids:l0,lastInteractedWith:v}),L({type:Do,id:v,lastInteractedWith:v})}},[v]),[H,L]},iu=d1.default.forwardRef(function(o,t){var r=o.data,e=o.selectedIds,a=o.nodeRenderer,c=o.onSelect,i=c===void 0?G2:c,l=o.onNodeSelect,w=l===void 0?G2:l,b=o.onExpand,y=b===void 0?G2:b,f=o.onLoadData,m=o.className,x=m===void 0?"":m,s=o.multiSelect,d=s!==void 0&&s,n=o.propagateSelect,u=n!==void 0&&n,v=o.propagateSelectUpwards,p=v!==void 0&&v,M=o.propagateCollapse,H=M!==void 0&&M,L=o.expandOnKeyboardSelect,k=L!==void 0&&L,C=o.togglableSelect,B=C!==void 0&&C,O=o.defaultExpandedIds,A=O===void 0?[]:O,Y=o.defaultSelectedIds,q=Y===void 0?[]:Y,P=o.defaultDisabledIds,U=P===void 0?[]:P,Q=o.clickAction,w0=Q===void 0?or.select:Q,t0=o.nodeAction,b0=t0===void 0?"select":t0,e0=o.expandedIds,d0=o.focusedId,l0=o.onBlur,D=pn(o,["data","selectedIds","nodeRenderer","onSelect","onNodeSelect","onExpand","onLoadData","className","multiSelect","propagateSelect","propagateSelectUpwards","propagateCollapse","expandOnKeyboardSelect","togglableSelect","defaultExpandedIds","defaultSelectedIds","defaultDisabledIds","clickAction","nodeAction","expandedIds","focusedId","onBlur"]);(function(f0){if(Yg(f0.map(function(k0){return k0.id})))throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");if(f0.forEach(function(k0){if(k0.id===k0.parent)throw Error("Node with id=".concat(k0.id," has parent reference to itself."));if(Yg(k0.children))throw Error("Node with id=".concat(k0.id," contains duplicate ids in its children."))}),f0.filter(function(k0){return k0.parent===null}).length===0)throw Error("TreeView must have one root node.");if(f0.filter(function(k0){return k0.parent===null}).length>1)throw Error("TreeView can have only one root node.");vt(f0).children.length||console.warn("TreeView have no nodes to display.")})(r);var X=(0,d1.useRef)({}),o0=(0,d1.useRef)({}),J=(0,d1.useRef)(null);t!=null&&(J=t);var c0=qg(Ak({data:r,controlledSelectedIds:e,controlledExpandedIds:e0,defaultExpandedIds:A,defaultSelectedIds:q,defaultDisabledIds:U,nodeRefs:X,leafRefs:o0,onSelect:i,onNodeSelect:w,onExpand:y,onLoadData:f,togglableSelect:B,multiSelect:d,propagateSelect:u,propagateSelectUpwards:p,treeRef:J,focusedId:d0}),2),v0=c0[0],u0=c0[1];return u=u&&d,d1.default.createElement("ul",Object.assign({className:(0,T4.default)(jg.root,x),role:"tree","aria-multiselectable":b0==="select"?d:void 0,ref:J,onBlur:function(f0){Vk(f0,J.current,function(){l0&&l0({treeState:v0,dispatch:u0}),u0({type:Kg})})},onKeyDown:Fk({data:r,tabbableId:v0.tabbableId,expandedIds:v0.expandedIds,selectedIds:v0.selectedIds,disabledIds:v0.disabledIds,halfSelectedIds:v0.halfSelectedIds,clickAction:w0,dispatch:u0,propagateCollapse:H,propagateSelect:u,multiSelect:d,expandOnKeyboardSelect:k,togglableSelect:B})},D),vt(r).children.map(function(f0,k0){return d1.default.createElement(cu,Object.assign({key:"".concat(f0,"-").concat(gn(f0)),data:r,element:_1(r,f0),setsize:vt(r).children.length,posinset:k0+1,level:1},v0,{state:v0,dispatch:u0,nodeRefs:X,leafRefs:o0,baseClassNames:jg,nodeRenderer:a,propagateCollapse:H,propagateSelect:u,propagateSelectUpwards:p,multiSelect:d,togglableSelect:B,clickAction:w0,nodeAction:b0}))}))}),Fk=function(o){var t=o.data,r=o.expandedIds,e=o.selectedIds,a=o.disabledIds,c=o.tabbableId,i=o.dispatch,l=o.propagateCollapse,w=o.propagateSelect,b=o.multiSelect,y=o.expandOnKeyboardSelect,f=o.togglableSelect,m=o.clickAction;return function(x){var s=_1(t,c),d=s.id;if(x.ctrlKey){if(x.key==="a"&&m!==or.focus){x.preventDefault();var n=t.filter(function(q){return q.parent!==null}).map(function(q){return q.id}).filter(function(q){return!a.has(q)});i({type:zr,multiSelect:b,select:Array.from(e).filter(function(q){return!a.has(q)}).length!==n.length,ids:n,lastInteractedWith:s.id})}else if(x.shiftKey&&(x.key==="Home"||x.key==="End")&&m!==or.focus){var u=x.key==="Home"?vt(t).children[0]:vn(t,d,r),v=ru({data:t,expandedIds:r,from:d,to:u}).filter(function(q){return!a.has(q)});i({type:zr,multiSelect:b,select:!0,ids:w?b2(t,v,a):v}),i({type:Do,id:u,lastInteractedWith:u})}}else{if(x.shiftKey)switch(x.key){case"ArrowUp":x.preventDefault();var p=bn(t,d,r);return void(p==null||a.has(p)||(m!==or.focus&&i({type:zr,ids:w?b2(t,[p],a):[p],select:!0,multiSelect:b,lastInteractedWith:p,lastManuallyToggled:p}),i({type:Do,id:p,lastInteractedWith:p})));case"ArrowDown":x.preventDefault();var M=R4(t,d,r);return void(M==null||a.has(M)||(m!==or.focus&&i({type:zr,ids:w?b2(t,[M],a):[M],multiSelect:b,select:!0,lastInteractedWith:M,lastManuallyToggled:M}),i({type:Do,id:M,lastInteractedWith:M})))}switch(x.key){case"ArrowDown":x.preventDefault();var H=R4(t,d,r);return void(H!=null&&i({type:Do,id:H,lastInteractedWith:H}));case"ArrowUp":x.preventDefault();var L=bn(t,d,r);return void(L!=null&&i({type:Do,id:L,lastInteractedWith:L}));case"ArrowLeft":if(x.preventDefault(),(Bo(t,d)||s.isBranch)&&r.has(c))if(l){var k=[d].concat(St(Q2(t,d,new Set)));i({type:j6,ids:k,lastInteractedWith:s.id})}else i({type:hn,id:d,lastInteractedWith:d});else if(!vt(t).children.includes(d)){var C=kr(t,d);if(C==null)throw new Error("parentId of root element is null");i({type:Do,id:C,lastInteractedWith:C})}return;case"ArrowRight":return x.preventDefault(),void((Bo(t,d)||s.isBranch)&&(r.has(c)?i({type:Do,id:s.children[0],lastInteractedWith:s.children[0]}):i({type:I6,id:d,lastInteractedWith:d})));case"Home":x.preventDefault(),i({type:Do,id:vt(t).children[0],lastInteractedWith:vt(t).children[0]});break;case"End":x.preventDefault();var B=vn(t,vt(t).id,r);return void i({type:Do,id:B,lastInteractedWith:B});case"*":x.preventDefault();var O=kr(t,d);if(O==null)throw new Error("parentId of element is null");var A=_1(t,O).children.filter(function(q){return Bo(t,q)||_1(t,q).isBranch});return void i({type:D6,ids:A,lastInteractedWith:d});case"Enter":case" ":case"Spacebar":return x.preventDefault(),m===or.focus?void 0:(i({type:f?au(t,d,e,a):I4,id:d,multiSelect:b,lastInteractedWith:d,lastManuallyToggled:d}),w&&!a.has(s.id)&&i({type:zr,ids:b2(t,[d],a),select:!f||!e.has(d),multiSelect:b,lastInteractedWith:d,lastManuallyToggled:d}),void(y&&i({type:U6,id:d,lastInteractedWith:d})));default:if(x.key.length===1)for(var Y=R4(t,d,r);Y!==d;)if(Y!=null){if(_1(t,Y).name[0].toLowerCase()===x.key.toLowerCase())return void i({type:Do,id:Y,lastInteractedWith:d});Y=R4(t,Y,r)}else Y=vt(t).children[0];return}}}};iu.propTypes={data:B1.default.array.isRequired,onSelect:B1.default.func,onNodeSelect:B1.default.func,onExpand:B1.default.func,className:B1.default.string,nodeRenderer:B1.default.func.isRequired,defaultExpandedIds:B1.default.array,defaultSelectedIds:B1.default.array,expandedIds:B1.default.array,selectedIds:B1.default.array,defaultDisabledIds:B1.default.array,propagateCollapse:B1.default.bool,propagateSelect:B1.default.bool,propagateSelectUpwards:B1.default.bool,multiSelect:B1.default.bool,expandOnKeyboardSelect:B1.default.bool,togglableSelect:B1.default.bool,nodeAction:B1.default.oneOf(kk),clickAction:B1.default.oneOf(zk),onBlur:B1.default.func,onLoadData:B1.default.func,focusedId:B1.default.oneOfType([B1.default.string,B1.default.number])};var nu=iu;var na=K(n0(),1);var yn=K(n0(),1),xn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mn=yn.default.createContext&&yn.default.createContext(xn);var Pk=["attr","size","title"];function Ok(o,t){if(o==null)return{};var r=Nk(o,t),e,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(a=0;a<c.length;a++)e=c[a],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(o,e)&&(r[e]=o[e])}return r}function Nk(o,t){if(o==null)return{};var r={};for(var e in o)if(Object.prototype.hasOwnProperty.call(o,e)){if(t.indexOf(e)>=0)continue;r[e]=o[e]}return r}function Y6(){return Y6=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(o[e]=r[e])}return o},Y6.apply(this,arguments)}function lu(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),r.push.apply(r,e)}return r}function q6(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lu(Object(r),!0).forEach(function(e){Rk(o,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):lu(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}function Rk(o,t,r){return t=Tk(t),t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function Tk(o){var t=Ik(o,"string");return typeof t=="symbol"?t:t+""}function Ik(o,t){if(typeof o!="object"||!o)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var e=r.call(o,t||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function du(o){return o&&o.map((t,r)=>na.default.createElement(t.tag,q6({key:r},t.attr),du(t.child)))}function _r(o){return t=>na.default.createElement(Dk,Y6({attr:q6({},o.attr)},t),du(o.child))}function Dk(o){var t=r=>{var{attr:e,size:a,title:c}=o,i=Ok(o,Pk),l=a||r.size||"1em",w;return r.className&&(w=r.className),o.className&&(w=(w?w+" ":"")+o.className),na.default.createElement("svg",Y6({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,i,{className:w,style:q6(q6({color:o.color||r.color},r.style),o.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&na.default.createElement("title",null,c),o.children)};return mn!==void 0?na.default.createElement(mn.Consumer,null,r=>t(r)):t(xn)}function su(o){return _r({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"},child:[]}]})(o)}function wu(o){return _r({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M4.698 3.419l2.057 23.073 9.231 2.563 9.256-2.566 2.059-23.069h-22.604zM13.226 9.394l-0.409 4.441 9.671 0.001-0.069 0.76-0.665 7.45-0.042 0.478-5.804 1.609-5.796-1.609-0.396-4.443h2.84l0.202 2.257 3.154 0.85 3.156-0.852 0.328-3.67-9.671-0.001 0.069-0.76 0.665-7.45 0.209-2.086h11.287l0.131 1.598 0.403 4.453h-2.841l-0.262-2.922-2.889-0.174h-0.515v-0.004l-2.755 0.074z"},child:[]}]})(o)}function zn(o){return _r({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M0.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zM9.055 15.406v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039v3.488zM17.779 15.412l-0.019 3.488-3.425-0.012v1.766h-3.582v-8.736h7.039l-0.012 3.494zM29.983 15.406v3.488h-1.76v-5.216h-1.76v5.248l-1.76-0.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zM14.335 15.406v1.728h1.634v-3.457h-1.634v1.728z"},child:[]}]})(o)}function kn(o){return _r({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(o)}function vu(o){return _r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(o)}function bu(o){return _r({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"},child:[]}]})(o)}function gu(o){return _r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"},child:[]}]})(o)}var X6=K(W1());var _n=o=>o.metadata?.absPath||"",uu=o=>{o=s4(o,"/");let t=o.split("/"),r=[],e="";return t.forEach(a=>{e+=`/${a}`,r.push(e)}),r};function pu(o){let t={id:"root",name:"",metadata:{absPath:""},children:[],isBranch:!0};return o.listFiles().forEach(({path:r})=>{r=s4(r,"/");let e=r.split("/"),a=e.pop(),c=t,i="";e.forEach(l=>{i+=`/${l}`;let w=c.children?.find(b=>b.name===l);w==null&&(w={id:i,name:l,metadata:{absPath:i},children:[],isBranch:!0},c.children=c.children||[],c.children.push(w)),c=w}),i+=`/${a}`,c.children=c.children||[],c.children.push({name:a,metadata:{absPath:i},isBranch:!1})}),hu(t),eu(t)}function hu(o){let t=(r,e)=>r.isBranch===e.isBranch?r.name.localeCompare(e.name):r.isBranch?-1:1;o.children&&(o.children.sort(t),o.children.forEach(hu))}function fu({selectedFile:o,onFileSelected:t}){let[r,e]=(0,L1.useState)([]),a=K2();(0,L1.useEffect)(()=>{let l=pu(a);e(l)},[a]);let c=(0,L1.useCallback)(l=>{if(l.isBranch)return;let w=_n(l.element);console.log(`Selected file: '${w}'`),t?.(w)},[t]);return r.length===0||r.every(l=>l.children.length===0)?L1.default.createElement("div",{className:"px-4 text-center text-md opacity-60"},"(empty)"):L1.default.createElement("div",{className:"px-4 directory text-md"},L1.default.createElement(nu,{data:r,"aria-label":"directory tree",defaultExpandedIds:uu(o),onNodeSelect:c,nodeRenderer:l=>L1.default.createElement(Zk,{key:l.element.id,...l,selectedFile:o})}))}var Zk=({element:o,level:t,getNodeProps:r,isBranch:e,isExpanded:a,selectedFile:c})=>{let i=r(),l=_n(o),w=l===c,b=P6(l);return L1.default.createElement("div",{...i,style:{paddingLeft:20*(t-1)},className:(0,X6.default)(i.className,w&&"tree-node--selected_my",b&&"text-yellow-400")},L1.default.createElement("div",{className:(0,X6.default)("pl-2 flex")},L1.default.createElement("div",{className:(0,X6.default)("inline-block relative top-[5px]")},e?L1.default.createElement(jk,{isOpen:a}):L1.default.createElement(Uk,{filename:o.name})),L1.default.createElement("span",{className:"truncate"},s4(o.name,"/"))))},jk=o=>o.isOpen?L1.default.createElement(bu,{color:"e8a87c",className:"icon","aria-hidden":!0}):L1.default.createElement(gu,{color:"e8a87c",className:"icon","aria-hidden":!0}),Uk=({filename:o})=>{if(o.toLowerCase()==="package.json")return L1.default.createElement(zn,{color:"red",className:"icon","aria-hidden":!0});switch(o.slice(o.lastIndexOf(".")+1)){case"js":case"mjs":return L1.default.createElement(wu,{color:"yellow",className:"icon","aria-hidden":!0});case"css":return L1.default.createElement(su,{color:"turquoise",className:"icon","aria-hidden":!0});case"json":return L1.default.createElement(vu,{color:"yellow",className:"icon","aria-hidden":!0});case"npmignore":return L1.default.createElement(zn,{color:"red",className:"icon","aria-hidden":!0});case"html":return L1.default.createElement(kn,{color:"red",className:"icon","aria-hidden":!0});case"txt":case"md":return L1.default.createElement(kn,{color:"grey",className:"icon","aria-hidden":!0});default:return null}};var xu=({activeFile:o})=>{let t=(0,tr.useRef)(null),r=(0,tr.useRef)(!0),e=xo(c=>c.showFilesPanel),a=.001;return(0,tr.useEffect)(()=>{let c=t.current,i=r.current;setTimeout(()=>{r.current=!1},500),!(!c||i)&&(c.isCollapsed()?c.expand():c.collapse())},[e]),tr.default.createElement(D2,{ref:t,defaultSize:e?15:a,collapsible:!0,collapsedSize:a,minSize:e?5:a,maxSize:20,className:(0,yu.default)("bg-vscodebg rounded-r-sm min-h-full flex flex-col")},tr.default.createElement(ea,{isH1:!0,title:"Z3 Online Editor",className:"text-center"}),tr.default.createElement("div",{className:"h-0 pb-6 overflow-y-auto grow"},tr.default.createElement(fu,{onFileSelected:c=>w2.push(Sc(c,"/")),selectedFile:o})))};var W6=K(n0());function mu(o){let t=K2(),[r,e]=(0,W6.useState)(o);return(0,W6.useEffect)(()=>w2.listen(c=>{let{pathname:i}=c.location;t.exists(i)&&e(i)}),[t]),r}var zu=(o,t)=>{let r=t.languages.typescript.typescriptDefaults,e=t.languages.typescript.javascriptDefaults;o.extraTypingExternalFiles.forEach(i=>{let l=`declare module '${i.moduleName}' { ${i.content} }`;r.addExtraLib(l,i.moduleName),e.addExtraLib(l,i.moduleName)});let a=`import('z3').Context<"z3_ctx">`,c=o.globallyAccessibleContextKeys.map(i=>`declare const ${i}: ${a}['${i}'];`);r.addExtraLib(`
    declare const ctx: ${a};
    ${c.join(`
`)}
    `),r.setCompilerOptions({...r.getCompilerOptions(),module:99,target:99})};var Yk=o=>({status:"ok",...o}),qk=o=>({status:"error",error:o}),D4=class D4{constructor(){this.listeners=Vc("immediate");this.files={};this.createFile=(t,r,e)=>{t=D4.normalizePath(t),this.files[t]={mode:e.mode,content:r,language:e.language},this.listeners.emit(t)};this.updateFile=(t,r)=>{let e=this.getNode(t);return e?e.mode==="readonly"?"e-read-only":(e.content=r,this.listeners.emit(t),"ok"):"e-no-entry"};this.readFile=t=>{let r=this.getNode(t);return r===void 0?qk("e-no-entry"):Yk(r)};this.getNode=t=>(t=D4.normalizePath(t),this.files[t]);this.exists=t=>this.readFile(t).status==="ok";this.listFiles=()=>Object.entries(this.files).map(([t,r])=>({path:t,...r}));this.addListener=t=>(this.listeners.add(t),()=>this.listeners.remove(t));this.addSingleFileListener=(t,r)=>this.addListener(e=>{e===t&&r(e)})}};D4.normalizePath=t=>Sc(t,"/");var J2=D4;var ku=K(Ti());var _u=o=>`${fr.fileSystem}${J2.normalizePath(o)}`;function Xk(o,t){let r=_u(o);localStorage.setItem(r,t)}var Mu=(0,ku.default)(Xk,Lc(2));function Cu(o){o.listFiles().forEach(({path:t})=>{let r=_u(t),e=localStorage.getItem(r);!e||typeof e!="string"||o.updateFile(t,e)})}var Su=({z3:o,initialFile:t})=>{let r=K2(),e=mu(t),a=xo(s=>s.layout),c=(0,ao.useRef)(void 0),i=Tt(s=>s.status),{abortRun:l,runCode:w}=aw(o),b=(0,ao.useCallback)(async()=>{if(i==="running"){l();return}let s=c.current?.getValue()||"";w({filename:e,code:s})},[l,w,i,e]),y=fb(b),f=(0,ao.useCallback)(s=>{s=s||"",r.updateFile(e,s)==="ok"&&Mu(e,s)},[e,r]),m=tg(),x=(0,ao.useCallback)(s=>{let d=c.current;if(!d)return;let n=m.readFile(s);n.status==="ok"&&d.setValue(n.content)},[m]);return(0,ao.useEffect)(()=>{Gt.enabled=!0},[]),ao.default.createElement("main",{className:(0,Mn.default)("w-full min-h-svh relative bg-panelSpacing")},ao.default.createElement(Cc,{direction:"horizontal",className:"min-h-svh max-h-svh"},ao.default.createElement(xu,{activeFile:e}),ao.default.createElement(P7,{vertical:!0}),ao.default.createElement(D2,null,ao.default.createElement(Cc,{id:Hc,direction:a==="two-columns"?"horizontal":"vertical",className:(0,Mn.default)(a==="two-columns"?"":"min-h-svh")},ao.default.createElement(Fg,{activeFile:e,editorRef:c,onCodeExec:b,onEditorChange:f,onEditorMount:(s,d)=>{zu(o,d),y(s,d)}}),ao.default.createElement(P7,{vertical:a==="two-columns"}),ao.default.createElement(Mb,{key:`output-panel-${a}`})))),ao.default.createElement(Vg,{onFileDiscard:x}))};globalThis.discardLocalVirtualFileSystem=()=>{window.localStorage.removeItem(fr.fileSystem),window.location.reload()};var up=K(bp());var P_=["solve","simplify","substitute"],O_=["Array","Function"],gp=o=>o2(o).filter(t=>R_(o,t)),N_=o=>o===o.toUpperCase();function R_(o,t){let r=t.at(0)||"",e=N_(r)||t.startsWith("is")||P_.includes(t),a=O_.includes(t);return e&&!a}async function pp(){try{crossOriginIsolated||console.error('Missing headers used to enable SharedArrayBuffer. Your document response should contain: "Cross-Origin-Opener-Policy: same-origin", and "Cross-Origin-Embedder-Policy: require-corp".');let o=await(0,up.init)();o.setParam("pp.decimal","true");let t=o.Context,r=await T_(t);return{status:"ok",z3:{z3:o,ContextCtor:t,globallyAccessibleContextKeys:gp(r),extraTypingExternalFiles:[{moduleName:"z3",content:N4}]}}}catch(o){return console.error(o),{status:"error",error:o}}}async function T_(o){let t=new o("z3-init-test"),{Solver:r,Int:e,And:a}=t,c=e.const("x"),i=new r;i.add(a(c.ge(0),c.le(9)));let l=await i.check();return t}async function I_(){let o=await pp();if(o.status==="error"){let c=o.error,i=c instanceof Error?c.message:"Unknown error";D_(`Z3 init error: ${i}`);return}let t=new J2,r=new J2;nn(t),nn(r);try{Cu(r)}catch(c){console.error("Could not restore local file system changes",c)}let e=Mg(r);console.log(`Inital file '${e}'`),hp.default.createRoot(document.getElementById("root")).render(sa.default.createElement(sa.default.StrictMode,null,sa.default.createElement(O4.Provider,{value:{originalFileSystem:t,userFileSystem:r}},sa.default.createElement(Eg.Provider,null,sa.default.createElement(Su,{z3:o.z3,initialFile:e})))))}I_();function D_(o){let t=document.getElementById("error-wrapper"),r=document.getElementById("error-msg");t.style.display="flex",r.textContent=o}})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
