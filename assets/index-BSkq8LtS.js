(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function p0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var If={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function eS(){if(Kg)return So;Kg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return So.Fragment=t,So.jsx=i,So.jsxs=i,So}var Qg;function nS(){return Qg||(Qg=1,If.exports=eS()),If.exports}var At=nS(),Ff={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function iS(){if(Jg)return re;Jg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(U,W,ct){this.props=U,this.context=W,this.refs=C,this.updater=ct||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(U,W,ct){this.props=U,this.context=W,this.refs=C,this.updater=ct||M}var O=P.prototype=new _;O.constructor=P,A(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function B(U,W,ct,gt,Q,pt){return ct=pt.ref,{$$typeof:s,type:U,key:W,ref:ct!==void 0?ct:null,props:pt}}function Y(U,W){return B(U.type,W,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function T(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ct){return W[ct]})}var G=/\/+/g;function rt(U,W){return typeof U=="object"&&U!==null&&U.key!=null?T(""+U.key):W.toString(36)}function et(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(et,et):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function $(U,W,ct,gt,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case s:case t:yt=!0;break;case g:return yt=U._init,$(yt(U._payload),W,ct,gt,Q)}}if(yt)return Q=Q(U),yt=gt===""?"."+rt(U,0):gt,D(Q)?(ct="",yt!=null&&(ct=yt.replace(G,"$&/")+"/"),$(Q,W,ct,"",function(oe){return oe})):Q!=null&&(w(Q)&&(Q=Y(Q,ct+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+yt)),W.push(Q)),1;yt=0;var Tt=gt===""?".":gt+":";if(D(U))for(var Ut=0;Ut<U.length;Ut++)gt=U[Ut],pt=Tt+rt(gt,Ut),yt+=$(gt,W,ct,pt,Q);else if(Ut=x(U),typeof Ut=="function")for(U=Ut.call(U),Ut=0;!(gt=U.next()).done;)gt=gt.value,pt=Tt+rt(gt,Ut++),yt+=$(gt,W,ct,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return $(ft(U),W,ct,gt,Q);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return yt}function N(U,W,ct){if(U==null)return U;var gt=[],Q=0;return $(U,gt,"","",function(pt){return W.call(ct,pt,Q++)}),gt}function X(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(ct){(U._status===0||U._status===-1)&&(U._status=1,U._result=ct)},function(ct){(U._status===0||U._status===-1)&&(U._status=2,U._result=ct)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var k=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return re.Children={map:N,forEach:function(U,W,ct){N(U,function(){W.apply(this,arguments)},ct)},count:function(U){var W=0;return N(U,function(){W++}),W},toArray:function(U){return N(U,function(W){return W})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,W,ct){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var gt=A({},U.props),Q=U.key,pt=void 0;if(W!=null)for(yt in W.ref!==void 0&&(pt=void 0),W.key!==void 0&&(Q=""+W.key),W)!F.call(W,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&W.ref===void 0||(gt[yt]=W[yt]);var yt=arguments.length-2;if(yt===1)gt.children=ct;else if(1<yt){for(var Tt=Array(yt),Ut=0;Ut<yt;Ut++)Tt[Ut]=arguments[Ut+2];gt.children=Tt}return B(U.type,Q,void 0,void 0,pt,gt)},re.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,W,ct){var gt,Q={},pt=null;if(W!=null)for(gt in W.key!==void 0&&(pt=""+W.key),W)F.call(W,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(Q[gt]=W[gt]);var yt=arguments.length-2;if(yt===1)Q.children=ct;else if(1<yt){for(var Tt=Array(yt),Ut=0;Ut<yt;Ut++)Tt[Ut]=arguments[Ut+2];Q.children=Tt}if(U&&U.defaultProps)for(gt in yt=U.defaultProps,yt)Q[gt]===void 0&&(Q[gt]=yt[gt]);return B(U,pt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:h,render:U}},re.isValidElement=w,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:X}},re.memo=function(U,W){return{$$typeof:p,type:U,compare:W===void 0?null:W}},re.startTransition=function(U){var W=I.T,ct={};I.T=ct;try{var gt=U(),Q=I.S;Q!==null&&Q(ct,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(St,k)}catch(pt){k(pt)}finally{I.T=W}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(U){return I.H.use(U)},re.useActionState=function(U,W,ct){return I.H.useActionState(U,W,ct)},re.useCallback=function(U,W){return I.H.useCallback(U,W)},re.useContext=function(U){return I.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,W){return I.H.useDeferredValue(U,W)},re.useEffect=function(U,W,ct){var gt=I.H;if(typeof ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return gt.useEffect(U,W)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(U,W,ct){return I.H.useImperativeHandle(U,W,ct)},re.useInsertionEffect=function(U,W){return I.H.useInsertionEffect(U,W)},re.useLayoutEffect=function(U,W){return I.H.useLayoutEffect(U,W)},re.useMemo=function(U,W){return I.H.useMemo(U,W)},re.useOptimistic=function(U,W){return I.H.useOptimistic(U,W)},re.useReducer=function(U,W,ct){return I.H.useReducer(U,W,ct)},re.useRef=function(U){return I.H.useRef(U)},re.useState=function(U){return I.H.useState(U)},re.useSyncExternalStore=function(U,W,ct){return I.H.useSyncExternalStore(U,W,ct)},re.useTransition=function(){return I.H.useTransition()},re.version="19.1.0",re}var $g;function fh(){return $g||($g=1,Ff.exports=iS()),Ff.exports}var Wt=fh();const gs=p0(Wt);var Hf={exports:{}},yo={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function aS(){return t_||(t_=1,function(s){function t(N,X){var k=N.length;N.push(X);t:for(;0<k;){var St=k-1>>>1,U=N[St];if(0<l(U,X))N[St]=X,N[k]=U,k=St;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var X=N[0],k=N.pop();if(k!==X){N[0]=k;t:for(var St=0,U=N.length,W=U>>>1;St<W;){var ct=2*(St+1)-1,gt=N[ct],Q=ct+1,pt=N[Q];if(0>l(gt,k))Q<U&&0>l(pt,gt)?(N[St]=pt,N[Q]=k,St=Q):(N[St]=gt,N[ct]=k,St=ct);else if(Q<U&&0>l(pt,k))N[St]=pt,N[Q]=k,St=Q;else break t}}return X}function l(N,X){var k=N.sortIndex-X.sortIndex;return k!==0?k:N.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,x=3,M=!1,A=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=N)r(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function I(N){if(C=!1,D(N),!A)if(i(m)!==null)A=!0,F||(F=!0,rt());else{var X=i(p);X!==null&&$(I,X.startTime-N)}}var F=!1,B=-1,Y=5,w=-1;function T(){return y?!0:!(s.unstable_now()-w<Y)}function G(){if(y=!1,F){var N=s.unstable_now();w=N;var X=!0;try{t:{A=!1,C&&(C=!1,P(B),B=-1),M=!0;var k=x;try{e:{for(D(N),v=i(m);v!==null&&!(v.expirationTime>N&&T());){var St=v.callback;if(typeof St=="function"){v.callback=null,x=v.priorityLevel;var U=St(v.expirationTime<=N);if(N=s.unstable_now(),typeof U=="function"){v.callback=U,D(N),X=!0;break e}v===i(m)&&r(m),D(N)}else r(m);v=i(m)}if(v!==null)X=!0;else{var W=i(p);W!==null&&$(I,W.startTime-N),X=!1}}break t}finally{v=null,x=k,M=!1}X=void 0}}finally{X?rt():F=!1}}}var rt;if(typeof O=="function")rt=function(){O(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=G,rt=function(){ft.postMessage(null)}}else rt=function(){_(G,0)};function $(N,X){B=_(function(){N(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(N){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var k=x;x=X;try{return N()}finally{x=k}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=x;x=N;try{return X()}finally{x=k}},s.unstable_scheduleCallback=function(N,X,k){var St=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?St+k:St):k=St,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=k+U,N={id:g++,callback:X,priorityLevel:N,startTime:k,expirationTime:U,sortIndex:-1},k>St?(N.sortIndex=k,t(p,N),i(m)===null&&N===i(p)&&(C?(P(B),B=-1):C=!0,$(I,k-St))):(N.sortIndex=U,t(m,N),A||M||(A=!0,F||(F=!0,rt()))),N},s.unstable_shouldYield=T,s.unstable_wrapCallback=function(N){var X=x;return function(){var k=x;x=X;try{return N.apply(this,arguments)}finally{x=k}}}}(Vf)),Vf}var e_;function rS(){return e_||(e_=1,Gf.exports=aS()),Gf.exports}var kf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function sS(){if(n_)return An;n_=1;var s=fh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},An.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.1.0",An}var i_;function oS(){if(i_)return kf.exports;i_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),kf.exports=sS(),kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function lS(){if(a_)return yo;a_=1;var s=rS(),t=fh(),i=oS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),e;if(f===o)return h(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,E=u.child;E;){if(E===a){S=!0,a=u,o=f;break}if(E===o){S=!0,o=u,a=f;break}E=E.sibling}if(!S){for(E=f.child;E;){if(E===a){S=!0,a=f,o=u;break}if(E===o){S=!0,o=f,a=u;break}E=E.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case O:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var $=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},St=[],U=-1;function W(e){return{current:e}}function ct(e){0>U||(e.current=St[U],St[U]=null,U--)}function gt(e,n){U++,St[U]=e.current,e.current=n}var Q=W(null),pt=W(null),yt=W(null),Tt=W(null);function Ut(e,n){switch(gt(yt,n),gt(pt,e),gt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bg(n),e=Tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ct(Q),gt(Q,e)}function oe(){ct(Q),ct(pt),ct(yt)}function Kt(e){e.memoizedState!==null&&gt(Tt,e);var n=Q.current,a=Tg(n,e.type);n!==a&&(gt(pt,e),gt(Q,a))}function He(e){pt.current===e&&(ct(Q),ct(pt)),Tt.current===e&&(ct(Tt),mo._currentValue=k)}var Be=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,Ln=s.unstable_shouldYield,ge=s.unstable_requestPaint,ie=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,Ue=s.unstable_ImmediatePriority,Gt=s.unstable_UserBlockingPriority,L=s.unstable_NormalPriority,b=s.unstable_LowPriority,nt=s.unstable_IdlePriority,_t=s.log,Mt=s.unstable_setDisableYieldValue,ht=null,Ot=null;function Rt(e){if(typeof _t=="function"&&Mt(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ht,e)}catch{}}var Ht=Math.clz32?Math.clz32:It,$t=Math.log,bt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-($t(e)/bt|0)|0}var jt=256,Qt=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~f,o!==0?u=Pt(o):(S&=E,S!==0?u=Pt(S):a||(a=E&~e,a!==0&&(u=Pt(a))))):(E=o&~f,E!==0?u=Pt(E):S!==0?u=Pt(S):a||(a=o&~e,a!==0&&(u=Pt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Lt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ut(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zt(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,z=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Ht(a),xt=1<<dt;E[dt]=0,z[dt]=-1;var it=tt[dt];if(it!==null)for(tt[dt]=null,dt=0;dt<it.length;dt++){var at=it[dt];at!==null&&(at.lane&=-536870913)}a&=~xt}o!==0&&Nt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Xg(e.type))}function Gn(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var dn=Math.random().toString(36).slice(2),sn="__reactFiber$"+dn,vn="__reactProps$"+dn,Nn="__reactContainer$"+dn,Xa="__reactEvents$"+dn,Go="__reactListeners$"+dn,Vo="__reactHandles$"+dn,Wa="__reactResources$"+dn,sa="__reactMarker$"+dn;function oa(e){delete e[sn],delete e[vn],delete e[Xa],delete e[Go],delete e[Vo]}function Ui(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=wg(e);e!==null;){if(a=e[sn])return a;e=wg(e)}return n}e=a,a=e.parentNode}return null}function Li(e){if(e=e[sn]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function la(e){var n=e[Wa];return n||(n=e[Wa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[sa]=!0}var ko=new Set,Xo={};function Ni(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Xo[e]=n,e=0;e<n.length;e++)ko.add(n[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function K(e){return Be.call(ot,e)?!0:Be.call(st,e)?!1:Z.test(e)?ot[e]=!0:(st[e]=!0,!1)}function Et(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,te;function qt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var kt=!1;function he(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(at){var it=at}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(at){it=at}e.call(xt.prototype)}}else{try{throw Error()}catch(at){it=at}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],E=f[1];if(S&&E){var z=S.split(`
`),tt=E.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===tt.length)for(o=z.length-1,u=tt.length-1;1<=o&&0<=u&&z[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==tt[u]){var dt=`
`+z[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return qt("Activity");default:return""}}function We(e){try{var n="";do n+=Ee(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e){var n=ve(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=Yt(e))}function ye(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ua=/[\n"\\]/g;function Ve(e){return e.replace(ua,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,o,u,f,S,E){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,_e(n)):a!=null?bn(e,S,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+_e(E):e.removeAttribute("name")}function Ie(e,n,a,o,u,f,S,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function hn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function xn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if($(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bh(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Th(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bh(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&bh(e,f,n[f])}function zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return tv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bu=null;function Iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,br=null;function Ah(e){var n=Li(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(r(90));Oi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ye(o)}break t;case"textarea":hn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Fu=!1;function Rh(e,n,a){if(Fu)return e(n,a);Fu=!0;try{var o=e(n);return o}finally{if(Fu=!1,(Er!==null||br!==null)&&(Dl(),Er&&(n=Er,e=br,br=Er=null,Ah(n),e)))for(n=0;n<e.length;n++)Ah(e[n])}}function Rs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hu=!1;if(zi)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Hu=!1}var ca=null,Gu=null,qo=null;function Ch(){if(qo)return qo;var e,n=Gu,a=n.length,o,u="value"in ca?ca.value:ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return qo=u.slice(e,1<o?1-o:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function wh(){return!1}function On(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=On(Ya),ws=g({},Ya,{view:0,detail:0}),ev=On(ws),Vu,ku,Ds,Ko=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ds&&(Ds&&e.type==="mousemove"?(Vu=e.screenX-Ds.screenX,ku=e.screenY-Ds.screenY):ku=Vu=0,Ds=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Dh=On(Ko),nv=g({},Ko,{dataTransfer:0}),iv=On(nv),av=g({},ws,{relatedTarget:0}),Xu=On(av),rv=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=On(rv),ov=g({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lv=On(ov),uv=g({},Ya,{data:0}),Uh=On(uv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dv[e])?!!n[e]:!1}function Wu(){return hv}var pv=g({},ws,{key:function(e){if(e.key){var n=cv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mv=On(pv),gv=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=On(gv),_v=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),vv=On(_v),xv=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=On(xv),yv=g({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=On(yv),Ev=g({},Ya,{newState:0,oldState:0}),bv=On(Ev),Tv=[9,13,27,32],qu=zi&&"CompositionEvent"in window,Us=null;zi&&"documentMode"in document&&(Us=document.documentMode);var Av=zi&&"TextEvent"in window&&!Us,Nh=zi&&(!qu||Us&&8<Us&&11>=Us),Oh=" ",Ph=!1;function zh(e,n){switch(e){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Rv(e,n){switch(e){case"compositionend":return Bh(n);case"keypress":return n.which!==32?null:(Ph=!0,Oh);case"textInput":return e=n.data,e===Oh&&Ph?null:e;default:return null}}function Cv(e,n){if(Tr)return e==="compositionend"||!qu&&zh(e,n)?(e=Ch(),qo=Gu=ca=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wv[e.type]:n==="textarea"}function Fh(e,n,a,o){Er?br?br.push(o):br=[o]:Er=o,n=zl(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ls=null,Ns=null;function Dv(e){xg(e,0)}function Qo(e){var n=qa(e);if(ye(n))return e}function Hh(e,n){if(e==="change")return n}var Gh=!1;if(zi){var Yu;if(zi){var ju="oninput"in document;if(!ju){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),ju=typeof Vh.oninput=="function"}Yu=ju}else Yu=!1;Gh=Yu&&(!document.documentMode||9<document.documentMode)}function kh(){Ls&&(Ls.detachEvent("onpropertychange",Xh),Ns=Ls=null)}function Xh(e){if(e.propertyName==="value"&&Qo(Ns)){var n=[];Fh(n,Ns,e,Iu(e)),Rh(Dv,n)}}function Uv(e,n,a){e==="focusin"?(kh(),Ls=n,Ns=a,Ls.attachEvent("onpropertychange",Xh)):e==="focusout"&&kh()}function Lv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Ns)}function Nv(e,n){if(e==="click")return Qo(n)}function Ov(e,n){if(e==="input"||e==="change")return Qo(n)}function Pv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Pv;function Os(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Be.call(n,u)||!Vn(e[u],n[u]))return!1}return!0}function Wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qh(e,n){var a=Wh(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wh(a)}}function Yh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=En(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=En(e.document)}return n}function Zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zv=zi&&"documentMode"in document&&11>=document.documentMode,Ar=null,Ku=null,Ps=null,Qu=!1;function Zh(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qu||Ar==null||Ar!==En(o)||(o=Ar,"selectionStart"in o&&Zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ps&&Os(Ps,o)||(Ps=o,o=zl(Ku,"onSelect"),0<o.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ar)))}function ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Ju={},Kh={};zi&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Za(e){if(Ju[e])return Ju[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return Ju[e]=n[a];return e}var Qh=Za("animationend"),Jh=Za("animationiteration"),$h=Za("animationstart"),Bv=Za("transitionrun"),Iv=Za("transitionstart"),Fv=Za("transitioncancel"),tp=Za("transitionend"),ep=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function ui(e,n){ep.set(e,n),Ni(n,[e])}var np=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},np.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var $n=[],Cr=0,tc=0;function Jo(){for(var e=Cr,n=tc=Cr=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&ip(a,u,f)}}function $o(e,n,a,o){$n[Cr++]=e,$n[Cr++]=n,$n[Cr++]=a,$n[Cr++]=o,tc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ec(e,n,a,o){return $o(e,n,a,o),tl(e)}function wr(e,n){return $o(e,null,null,n),tl(e)}function ip(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<so)throw so=0,lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function Hv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,o){return new Hv(e,n,a,o)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ap(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function el(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")nc(e)&&(S=1);else if(typeof e=="string")S=Vx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return Ka(a.children,u,f,n);case C:S=8,u|=24;break;case y:return e=kn(12,a,n,u|2),e.elementType=y,e.lanes=f,e;case I:return e=kn(13,a,n,u),e.elementType=I,e.lanes=f,e;case F:return e=kn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case P:S=9;break t;case D:S=11;break t;case B:S=14;break t;case Y:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=kn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ka(e,n,a,o){return e=kn(7,e,o,n),e.lanes=a,e}function ic(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function ac(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Lr=0,nl=null,il=0,ti=[],ei=0,Qa=null,Ii=1,Fi="";function Ja(e,n){Ur[Lr++]=il,Ur[Lr++]=nl,nl=e,il=n}function rp(e,n,a){ti[ei++]=Ii,ti[ei++]=Fi,ti[ei++]=Qa,Qa=e;var o=Ii;e=Fi;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var f=32-Ht(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Ht(n)+u|a<<u|o,Fi=f+e}else Ii=1<<f|a<<u|o,Fi=e}function rc(e){e.return!==null&&(Ja(e,1),rp(e,1,0))}function sc(e){for(;e===nl;)nl=Ur[--Lr],Ur[Lr]=null,il=Ur[--Lr],Ur[Lr]=null;for(;e===Qa;)Qa=ti[--ei],ti[ei]=null,Fi=ti[--ei],ti[ei]=null,Ii=ti[--ei],ti[ei]=null}var Dn=null,je=null,Ae=!1,$a=null,Si=!1,oc=Error(r(519));function tr(e){var n=Error(r(418,""));throw Is(Jn(n,e)),oc}function sp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[vn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)me(lo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Ie(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),xn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Eg(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=Bl),n=!0):n=!1,n||tr(e)}function op(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function zs(e){if(e!==Dn)return!1;if(!Ae)return op(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bf(e.type,e.memoizedProps)),a=!a),a&&je&&tr(e),op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=fi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,Aa(e.type)?(e=Cf,Cf=null,je=e):je=n):je=Dn?fi(e.stateNode.nextSibling):null;return!0}function Bs(){je=Dn=null,Ae=!1}function lp(){var e=$a;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),$a=null),e}function Is(e){$a===null?$a=[e]:$a.push(e)}var lc=W(null),er=null,Hi=null;function fa(e,n,a){gt(lc,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=lc.current,ct(lc)}function uc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function cc(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uc(f.return,a,e),o||(S=null);break t}f=E.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),uc(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Fs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=u.type;Vn(u.pendingProps.value,S.value)||(e!==null?e.push(E):e=[E])}}else if(u===Tt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}u=u.return}e!==null&&cc(n,e,a,o),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return up(er,e)}function rl(e,n){return er===null&&nr(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var Gv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Vv=s.unstable_scheduleCallback,kv=s.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new Gv,data:new Map,refCount:0}}function Hs(e){e.refCount--,e.refCount===0&&Vv(kv,function(){e.controller.abort()})}var Gs=null,dc=0,Nr=0,Or=null;function Xv(e,n){if(Gs===null){var a=Gs=[];dc=0,Nr=mf(),Or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return dc++,n.then(cp,cp),n}function cp(){if(--dc===0&&Gs!==null){Or!==null&&(Or.status="fulfilled");var e=Gs;Gs=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Wv(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fp=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(e,n),fp!==null&&fp(e,n)};var ir=W(null);function hc(){var e=ir.current;return e!==null?e:ke.pooledCache}function sl(e,n){n===null?gt(ir,ir.current):gt(ir,n.pool)}function dp(){var e=hc();return e===null?null:{parent:ln._currentValue,pool:e}}var Vs=Error(r(460)),hp=Error(r(474)),ol=Error(r(542)),pc={then:function(){}};function pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ll(){}function mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ll,ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e;default:if(typeof n.status=="string")n.then(ll,ll);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_p(e),e}throw ks=n,Vs}}var ks=null;function gp(){if(ks===null)throw Error(r(459));var e=ks;return ks=null,e}function _p(e){if(e===Vs||e===ol)throw Error(r(483))}var da=!1;function mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=tl(e),ip(e,null,a),n}return $o(e,o,n,a),tl(e)}function Xs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}function _c(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vc=!1;function Ws(){if(vc){var e=Or;if(e!==null)throw e}}function qs(e,n,a,o){vc=!1;var u=e.updateQueue;da=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,tt=z.next;z.next=null,S===null?f=tt:S.next=tt,S=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==S&&(E===null?dt.firstBaseUpdate=tt:E.next=tt,dt.lastBaseUpdate=z))}if(f!==null){var xt=u.baseState;S=0,dt=tt=z=null,E=f;do{var it=E.lane&-536870913,at=it!==E.lane;if(at?(Se&it)===it:(o&it)===it){it!==0&&it===Nr&&(vc=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ee=e,Zt=E;it=n;var Pe=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){xt=ee.call(Pe,xt,it);break t}xt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,it=typeof ee=="function"?ee.call(Pe,xt,it):ee,it==null)break t;xt=g({},xt,it);break t;case 2:da=!0}}it=E.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[it]:at.push(it))}else at={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?(tt=dt=at,z=xt):dt=dt.next=at,S|=it;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;at=E,E=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);dt===null&&(z=xt),u.baseState=z,u.firstBaseUpdate=tt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=xt}}function vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vp(a[e],n)}var Pr=W(null),ul=W(0);function Sp(e,n){e=ji,gt(ul,e),gt(Pr,n),ji=e|n.baseLanes}function xc(){gt(ul,ji),gt(Pr,Pr.current)}function Sc(){ji=ul.current,ct(Pr),ct(ul)}var ma=0,ce=null,Ne=null,nn=null,cl=!1,zr=!1,ar=!1,fl=0,Ys=0,Br=null,qv=0;function Je(){throw Error(r(321))}function yc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function Mc(e,n,a,o,u,f){return ma=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?im:am,ar=!1,f=a(o,u),ar=!1,zr&&(f=Mp(n,a,o,u)),yp(e),f}function yp(e){N.H=_l;var n=Ne!==null&&Ne.next!==null;if(ma=0,nn=Ne=ce=null,cl=!1,Ys=0,Br=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&al(e)&&(pn=!0))}function Mp(e,n,a,o){ce=e;var u=0;do{if(zr&&(Br=null),Ys=0,zr=!1,25<=u)throw Error(r(301));if(u+=1,nn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=$v,f=n(a,o)}while(zr);return f}function Yv(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?js(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ce.flags|=1024),n}function Ec(){var e=fl!==0;return fl=0,e}function bc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Tc(e){if(cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cl=!1}ma=0,nn=Ne=ce=null,zr=!1,Ys=fl=0,Br=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ce.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ne===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=nn===null?ce.memoizedState:nn.next;if(n!==null)nn=n,Ne=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?ce.memoizedState=nn=e:nn=nn.next=e}return nn}function Ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function js(e){var n=Ys;return Ys+=1,Br===null&&(Br=[]),e=mp(Br,e,n),n=ce,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?im:am),e}function dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return js(e);if(e.$$typeof===O)return Tn(e)}throw Error(r(438,String(e)))}function Rc(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ac(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=T;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function hl(e){var n=an();return Cc(n,Ne,e)}function Cc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var E=S=null,z=null,tt=n,dt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(Se&xt)===xt:(ma&xt)===xt){var it=tt.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Nr&&(dt=!0);else if((ma&it)===it){tt=tt.next,it===Nr&&(dt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(E=z=xt,S=f):z=z.next=xt,ce.lanes|=it,Ma|=it;xt=tt.action,ar&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else it={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(E=z=it,S=f):z=z.next=it,ce.lanes|=xt,Ma|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(z===null?S=f:z.next=E,!Vn(f,e.memoizedState)&&(pn=!0,dt&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Vn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Ep(e,n,a){var o=ce,u=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Vn((Ne||u).memoizedState,a);S&&(u.memoizedState=a,pn=!0),u=u.queue;var E=Ap.bind(null,o,u,e);if(Zs(2048,8,E,[e]),u.getSnapshot!==n||S||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Ir(9,pl(),Tp.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));f||(ma&124)!==0||bp(o,n,a)}return a}function bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ac(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tp(e,n,a,o){n.value=a,n.getSnapshot=o,Rp(n)&&Cp(e)}function Ap(e,n,a){return a(function(){Rp(n)&&Cp(e)})}function Rp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Cp(e){var n=wr(e,2);n!==null&&jn(n,e,2)}function Dc(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ar){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function wp(e,n,a,o){return e.baseState=a,Cc(e,Ne,typeof o=="function"?o:Vi)}function jv(e,n,a,o,u){if(gl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var E=a(u,o),z=N.S;z!==null&&z(S,E),Up(e,n,E)}catch(tt){Uc(e,n,tt)}finally{N.T=f}}else try{f=a(u,o),Up(e,n,f)}catch(tt){Uc(e,n,tt)}}function Up(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lp(e,n,o)},function(o){return Uc(e,n,o)}):Lp(e,n,a)}function Lp(e,n,a){n.status="fulfilled",n.value=a,Np(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dp(e,a)))}function Uc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Np(n),n=n.next;while(n!==o)}e.action=null}function Np(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Op(e,n){return n}function Pp(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var o=ce;if(Ae){if(je){e:{for(var u=je,f=Si;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=fi(u.nextSibling),o=u.data==="F!";break t}}tr(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Op,lastRenderedState:n},a.queue=o,a=tm.bind(null,ce,o),o.dispatch=a,o=Dc(!1),f=zc.bind(null,ce,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=jv.bind(null,ce,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function zp(e){var n=an();return Bp(n,Ne,e)}function Bp(e,n,a){if(n=Cc(e,n,Op)[0],e=hl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=js(n)}catch(S){throw S===Vs?ol:S}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Ir(9,pl(),Zv.bind(null,u,a),null)),[o,f,e]}function Zv(e,n){e.action=n}function Ip(e){var n=an(),a=Ne;if(a!==null)return Bp(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ir(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ac(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function pl(){return{destroy:void 0,resource:void 0}}function Fp(){return an().memoizedState}function ml(e,n,a,o){var u=Pn();o=o===void 0?null:o,ce.flags|=e,u.memoizedState=Ir(1|n,pl(),a,o)}function Zs(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;Ne!==null&&o!==null&&yc(o,Ne.memoizedState.deps)?u.memoizedState=Ir(n,f,a,o):(ce.flags|=e,u.memoizedState=Ir(1|n,f,a,o))}function Hp(e,n){ml(8390656,8,e,n)}function Gp(e,n){Zs(2048,8,e,n)}function Vp(e,n){return Zs(4,2,e,n)}function kp(e,n){return Zs(4,4,e,n)}function Xp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,a){a=a!=null?a.concat([e]):null,Zs(4,4,Xp.bind(null,n,e),a)}function Lc(){}function qp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&yc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Yp(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&yc(n,o[1]))return o[0];if(o=e(),ar){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function Nc(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Km(),ce.lanes|=e,Ma|=e,a)}function jp(e,n,a,o){return Vn(a,n)?a:Pr.current!==null?(e=Nc(e,a,o),Vn(e,n)||(pn=!0),e):(ma&42)===0?(pn=!0,e.memoizedState=a):(e=Km(),ce.lanes|=e,Ma|=e,n)}function Zp(e,n,a,o,u){var f=X.p;X.p=f!==0&&8>f?f:8;var S=N.T,E={};N.T=E,zc(e,!1,n,a);try{var z=u(),tt=N.S;if(tt!==null&&tt(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=Wv(z,o);Ks(e,n,dt,Yn(e))}else Ks(e,n,o,Yn(e))}catch(xt){Ks(e,n,{then:function(){},status:"rejected",reason:xt},Yn())}finally{X.p=f,N.T=S}}function Kv(){}function Oc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Kp(e).queue;Zp(e,u,n,k,a===null?Kv:function(){return Qp(e),a(o)})}function Kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qp(e){var n=Kp(e).next.queue;Ks(e,n,{},Yn())}function Pc(){return Tn(mo)}function Jp(){return an().memoizedState}function $p(){return an().memoizedState}function Qv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();e=ha(a);var o=pa(n,e,a);o!==null&&(jn(o,n,a),Xs(o,n,a)),n={cache:fc()},e.payload=n;return}n=n.return}}function Jv(e,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?em(n,a):(a=ec(e,n,a,o),a!==null&&(jn(a,e,o),nm(a,n,o)))}function tm(e,n,a){var o=Yn();Ks(e,n,a,o)}function Ks(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))em(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,E=f(S,a);if(u.hasEagerState=!0,u.eagerState=E,Vn(E,S))return $o(e,n,u,0),ke===null&&Jo(),!1}catch{}finally{}if(a=ec(e,n,u,o),a!==null)return jn(a,e,o),nm(a,n,o),!0}return!1}function zc(e,n,a,o){if(o={lane:2,revertLane:mf(),action:o,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(r(479))}else n=ec(e,a,o,2),n!==null&&jn(n,e,2)}function gl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function em(e,n){zr=cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function nm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}var _l={readContext:Tn,use:dl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},im={readContext:Tn,use:dl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ml(4194308,4,Xp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){ml(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(ar){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(ar){Rt(!0);try{a(n)}finally{Rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Jv.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Dc(e);var n=e.queue,a=tm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lc,useDeferredValue:function(e,n){var a=Pn();return Nc(a,e,n)},useTransition:function(){var e=Dc(!1);return e=Zp.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Pn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||bp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hp(Ap.bind(null,o,f,e),[e]),o.flags|=2048,Ir(9,pl(),Tp.bind(null,o,f,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(Ae){var a=Fi,o=Ii;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=qv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Pc,useFormState:Pp,useActionState:Pp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zc.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Rc,useCacheRefresh:function(){return Pn().memoizedState=Qv.bind(null,ce)}},am={readContext:Tn,use:dl,useCallback:qp,useContext:Tn,useEffect:Gp,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:hl,useRef:Fp,useState:function(){return hl(Vi)},useDebugValue:Lc,useDeferredValue:function(e,n){var a=an();return jp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=hl(Vi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:js(e),n]},useSyncExternalStore:Ep,useId:Jp,useHostTransitionStatus:Pc,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=an();return wp(a,Ne,e,n)},useMemoCache:Rc,useCacheRefresh:$p},$v={readContext:Tn,use:dl,useCallback:qp,useContext:Tn,useEffect:Gp,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:Yp,useReducer:wc,useRef:Fp,useState:function(){return wc(Vi)},useDebugValue:Lc,useDeferredValue:function(e,n){var a=an();return Ne===null?Nc(a,e,n):jp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=wc(Vi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:js(e),n]},useSyncExternalStore:Ep,useId:Jp,useHostTransitionStatus:Pc,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var a=an();return Ne!==null?wp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:$p},Fr=null,Qs=0;function vl(e){var n=Qs;return Qs+=1,Fr===null&&(Fr=[]),mp(Fr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){var n=e._init;return n(e._payload)}function sm(e){function n(j,V){if(e){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Bi(j,V),j.index=0,j.sibling=null,j}function f(j,V,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function E(j,V,J,mt){return V===null||V.tag!==6?(V=ic(J,j.mode,mt),V.return=j,V):(V=u(V,J),V.return=j,V)}function z(j,V,J,mt){var Ft=J.type;return Ft===A?dt(j,V,J.props.children,mt,J.key):V!==null&&(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Y&&rm(Ft)===V.type)?(V=u(V,J.props),Js(V,J),V.return=j,V):(V=el(J.type,J.key,J.props,null,j.mode,mt),Js(V,J),V.return=j,V)}function tt(j,V,J,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=ac(J,j.mode,mt),V.return=j,V):(V=u(V,J.children||[]),V.return=j,V)}function dt(j,V,J,mt,Ft){return V===null||V.tag!==7?(V=Ka(J,j.mode,mt,Ft),V.return=j,V):(V=u(V,J),V.return=j,V)}function xt(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ic(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return J=el(V.type,V.key,V.props,null,j.mode,J),Js(J,V),J.return=j,J;case M:return V=ac(V,j.mode,J),V.return=j,V;case Y:var mt=V._init;return V=mt(V._payload),xt(j,V,J)}if($(V)||rt(V))return V=Ka(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return xt(j,vl(V),J);if(V.$$typeof===O)return xt(j,rl(j,V),J);xl(j,V)}return null}function it(j,V,J,mt){var Ft=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(j,V,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===Ft?z(j,V,J,mt):null;case M:return J.key===Ft?tt(j,V,J,mt):null;case Y:return Ft=J._init,J=Ft(J._payload),it(j,V,J,mt)}if($(J)||rt(J))return Ft!==null?null:dt(j,V,J,mt,null);if(typeof J.then=="function")return it(j,V,vl(J),mt);if(J.$$typeof===O)return it(j,V,rl(j,J),mt);xl(j,J)}return null}function at(j,V,J,mt,Ft){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(J)||null,E(V,j,""+mt,Ft);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return j=j.get(mt.key===null?J:mt.key)||null,z(V,j,mt,Ft);case M:return j=j.get(mt.key===null?J:mt.key)||null,tt(V,j,mt,Ft);case Y:var de=mt._init;return mt=de(mt._payload),at(j,V,J,mt,Ft)}if($(mt)||rt(mt))return j=j.get(J)||null,dt(V,j,mt,Ft,null);if(typeof mt.then=="function")return at(j,V,J,vl(mt),Ft);if(mt.$$typeof===O)return at(j,V,J,rl(V,mt),Ft);xl(V,mt)}return null}function ee(j,V,J,mt){for(var Ft=null,de=null,Vt=V,Jt=V=0,gn=null;Vt!==null&&Jt<J.length;Jt++){Vt.index>Jt?(gn=Vt,Vt=null):gn=Vt.sibling;var be=it(j,Vt,J[Jt],mt);if(be===null){Vt===null&&(Vt=gn);break}e&&Vt&&be.alternate===null&&n(j,Vt),V=f(be,V,Jt),de===null?Ft=be:de.sibling=be,de=be,Vt=gn}if(Jt===J.length)return a(j,Vt),Ae&&Ja(j,Jt),Ft;if(Vt===null){for(;Jt<J.length;Jt++)Vt=xt(j,J[Jt],mt),Vt!==null&&(V=f(Vt,V,Jt),de===null?Ft=Vt:de.sibling=Vt,de=Vt);return Ae&&Ja(j,Jt),Ft}for(Vt=o(Vt);Jt<J.length;Jt++)gn=at(Vt,j,Jt,J[Jt],mt),gn!==null&&(e&&gn.alternate!==null&&Vt.delete(gn.key===null?Jt:gn.key),V=f(gn,V,Jt),de===null?Ft=gn:de.sibling=gn,de=gn);return e&&Vt.forEach(function(Ua){return n(j,Ua)}),Ae&&Ja(j,Jt),Ft}function Zt(j,V,J,mt){if(J==null)throw Error(r(151));for(var Ft=null,de=null,Vt=V,Jt=V=0,gn=null,be=J.next();Vt!==null&&!be.done;Jt++,be=J.next()){Vt.index>Jt?(gn=Vt,Vt=null):gn=Vt.sibling;var Ua=it(j,Vt,be.value,mt);if(Ua===null){Vt===null&&(Vt=gn);break}e&&Vt&&Ua.alternate===null&&n(j,Vt),V=f(Ua,V,Jt),de===null?Ft=Ua:de.sibling=Ua,de=Ua,Vt=gn}if(be.done)return a(j,Vt),Ae&&Ja(j,Jt),Ft;if(Vt===null){for(;!be.done;Jt++,be=J.next())be=xt(j,be.value,mt),be!==null&&(V=f(be,V,Jt),de===null?Ft=be:de.sibling=be,de=be);return Ae&&Ja(j,Jt),Ft}for(Vt=o(Vt);!be.done;Jt++,be=J.next())be=at(Vt,j,Jt,be.value,mt),be!==null&&(e&&be.alternate!==null&&Vt.delete(be.key===null?Jt:be.key),V=f(be,V,Jt),de===null?Ft=be:de.sibling=be,de=be);return e&&Vt.forEach(function(tS){return n(j,tS)}),Ae&&Ja(j,Jt),Ft}function Pe(j,V,J,mt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var Ft=J.key;V!==null;){if(V.key===Ft){if(Ft=J.type,Ft===A){if(V.tag===7){a(j,V.sibling),mt=u(V,J.props.children),mt.return=j,j=mt;break t}}else if(V.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Y&&rm(Ft)===V.type){a(j,V.sibling),mt=u(V,J.props),Js(mt,J),mt.return=j,j=mt;break t}a(j,V);break}else n(j,V);V=V.sibling}J.type===A?(mt=Ka(J.props.children,j.mode,mt,J.key),mt.return=j,j=mt):(mt=el(J.type,J.key,J.props,null,j.mode,mt),Js(mt,J),mt.return=j,j=mt)}return S(j);case M:t:{for(Ft=J.key;V!==null;){if(V.key===Ft)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(j,V.sibling),mt=u(V,J.children||[]),mt.return=j,j=mt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}mt=ac(J,j.mode,mt),mt.return=j,j=mt}return S(j);case Y:return Ft=J._init,J=Ft(J._payload),Pe(j,V,J,mt)}if($(J))return ee(j,V,J,mt);if(rt(J)){if(Ft=rt(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),Zt(j,V,J,mt)}if(typeof J.then=="function")return Pe(j,V,vl(J),mt);if(J.$$typeof===O)return Pe(j,V,rl(j,J),mt);xl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(j,V.sibling),mt=u(V,J),mt.return=j,j=mt):(a(j,V),mt=ic(J,j.mode,mt),mt.return=j,j=mt),S(j)):a(j,V)}return function(j,V,J,mt){try{Qs=0;var Ft=Pe(j,V,J,mt);return Fr=null,Ft}catch(Vt){if(Vt===Vs||Vt===ol)throw Vt;var de=kn(29,Vt,null,j.mode);return de.lanes=mt,de.return=j,de}finally{}}}var Hr=sm(!0),om=sm(!1),ni=W(null),yi=null;function ga(e){var n=e.alternate;gt(un,un.current&1),gt(ni,e),yi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(yi=e)}function lm(e){if(e.tag===22){if(gt(un,un.current),gt(ni,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else _a()}function _a(){gt(un,un.current),gt(ni,ni.current)}function ki(e){ct(ni),yi===e&&(yi=null),ct(un)}var un=W(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Rf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Bc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ic={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Yn(),u=ha(o);u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,o),n!==null&&(jn(n,e,o),Xs(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Yn(),u=ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=pa(e,u,o),n!==null&&(jn(n,e,o),Xs(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Yn(),o=ha(a);o.tag=2,n!=null&&(o.callback=n),n=pa(e,o,a),n!==null&&(jn(n,e,a),Xs(n,e,a))}};function um(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Os(a,o)||!Os(u,f):!0}function cm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ic.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fm(e){yl(e)}function dm(e){console.error(e)}function hm(e){yl(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fc(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function mm(e){return e=ha(e),e.tag=3,e}function gm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){pm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){pm(n,a,o),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function tx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Fs(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?cf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===pc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),df(e,o,u)),!1;case 22:return a.flags|=65536,o===pc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),df(e,o,u)),!1}throw Error(r(435,a.tag))}return df(e,o,u),cf(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==oc&&(e=Error(r(422),{cause:o}),Is(Jn(e,a)))):(o!==oc&&(n=Error(r(423),{cause:o}),Is(Jn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Jn(o,a),u=Fc(e.stateNode,o,u),_c(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),ro===null?ro=[f]:ro.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Fc(a.stateNode,o,e),_c(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mm(u),gm(u,e,a,o),_c(a,u),!1}a=a.return}while(a!==null);return!1}var _m=Error(r(461)),pn=!1;function Sn(e,n,a,o){n.child=e===null?om(n,null,a,o):Hr(n,e.child,a,o)}function vm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var E in o)E!=="ref"&&(S[E]=o[E])}else S=o;return nr(n),o=Mc(e,n,a,S,f,u),E=Ec(),e!==null&&!pn?(bc(e,n,u),Xi(e,n,u)):(Ae&&E&&rc(n),n.flags|=1,Sn(e,n,o,u),n.child)}function xm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!nc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(e,n,f,o,u)):(e=el(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yc(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Os,a(S,o)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Bi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Sm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Os(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,Yc(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return Hc(e,n,a,o,u)}function ym(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Mm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):xc(),lm(n);else return n.lanes=n.childLanes=536870912,Mm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(sl(n,f.cachePool),Sp(n,f),_a(),n.memoizedState=null):(e!==null&&sl(n,null),xc(),_a());return Sn(e,n,u,a),n.child}function Mm(e,n,a,o){var u=hc();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&sl(n,null),xc(),lm(n),e!==null&&Fs(e,n,o,!0),null}function El(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hc(e,n,a,o,u){return nr(n),a=Mc(e,n,a,o,void 0,u),o=Ec(),e!==null&&!pn?(bc(e,n,u),Xi(e,n,u)):(Ae&&o&&rc(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Em(e,n,a,o,u,f){return nr(n),n.updateQueue=null,a=Mp(n,o,a,u),yp(e),o=Ec(),e!==null&&!pn?(bc(e,n,f),Xi(e,n,f)):(Ae&&o&&rc(n),n.flags|=1,Sn(e,n,a,f),n.child)}function bm(e,n,a,o,u){if(nr(n),n.stateNode===null){var f=Dr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Tn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ic,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},mc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Tn(S):Dr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Bc(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ic.enqueueReplaceState(f,f.state,null),qs(n,o,f,u),Ws(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,z=rr(a,E);f.props=z;var tt=f.context,dt=a.contextType;S=Dr,typeof dt=="object"&&dt!==null&&(S=Tn(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||tt!==S)&&cm(n,f,o,S),da=!1;var it=n.memoizedState;f.state=it,qs(n,o,f,u),Ws(),tt=n.memoizedState,E||it!==tt||da?(typeof xt=="function"&&(Bc(n,a,xt,o),tt=n.memoizedState),(z=da||um(n,a,z,o,it,tt,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,gc(e,n),S=n.memoizedProps,dt=rr(a,S),f.props=dt,xt=n.pendingProps,it=f.context,tt=a.contextType,z=Dr,typeof tt=="object"&&tt!==null&&(z=Tn(tt)),E=a.getDerivedStateFromProps,(tt=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||it!==z)&&cm(n,f,o,z),da=!1,it=n.memoizedState,f.state=it,qs(n,o,f,u),Ws();var at=n.memoizedState;S!==xt||it!==at||da||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof E=="function"&&(Bc(n,a,E,o),at=n.memoizedState),(dt=da||um(n,a,dt,o,it,at,z)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=z,o=dt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,El(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Hr(n,e.child,null,u),n.child=Hr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Xi(e,n,u),e}function Tm(e,n,a,o){return Bs(),n.flags|=256,Sn(e,n,a,o),n.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vc(e){return{baseLanes:e,cachePool:dp()}}function kc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Am(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?ga(n):_a(),Ae){var E=je,z;if(z=E){t:{for(z=E,E=Si;z.nodeType!==8;){if(!E){E=null;break t}if(z=fi(z.nextSibling),z===null){E=null;break t}}E=z}E!==null?(n.memoizedState={dehydrated:E,treeContext:Qa!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},z=kn(18,null,null,0),z.stateNode=E,z.return=n,n.child=z,Dn=n,je=null,z=!0):z=!1}z||tr(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Rf(E)?n.lanes=32:n.lanes=536870912,null;ki(n)}return E=o.children,o=o.fallback,u?(_a(),u=n.mode,E=bl({mode:"hidden",children:E},u),o=Ka(o,u,a,null),E.return=n,o.return=n,E.sibling=o,n.child=E,u=n.child,u.memoizedState=Vc(a),u.childLanes=kc(e,S,a),n.memoizedState=Gc,o):(ga(n),Xc(n,E))}if(z=e.memoizedState,z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=Wc(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),u=o.fallback,E=n.mode,o=bl({mode:"visible",children:o.children},E),u=Ka(u,E,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Hr(n,e.child,null,a),o=n.child,o.memoizedState=Vc(a),o.childLanes=kc(e,S,a),n.memoizedState=Gc,n=u);else if(ga(n),Rf(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,Is({value:o,source:null,stack:null}),n=Wc(e,n,a)}else if(pn||Fs(e,n,a,!1),S=(a&e.childLanes)!==0,pn||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:Ge(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,wr(e,o),jn(S,e,o),_m;E.data==="$?"||cf(),n=Wc(e,n,a)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,je=fi(E.nextSibling),Dn=n,Ae=!0,$a=null,Si=!1,e!==null&&(ti[ei++]=Ii,ti[ei++]=Fi,ti[ei++]=Qa,Ii=e.id,Fi=e.overflow,Qa=n),n=Xc(n,o.children),n.flags|=4096);return n}return u?(_a(),u=o.fallback,E=n.mode,z=e.child,tt=z.sibling,o=Bi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,tt!==null?u=Bi(tt,u):(u=Ka(u,E,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,E=e.child.memoizedState,E===null?E=Vc(a):(z=E.cachePool,z!==null?(tt=ln._currentValue,z=z.parent!==tt?{parent:tt,pool:tt}:z):z=dp(),E={baseLanes:E.baseLanes|a,cachePool:z}),u.memoizedState=E,u.childLanes=kc(e,S,a),n.memoizedState=Gc,o):(ga(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Xc(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=kn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wc(e,n,a){return Hr(n,e.child,null,a),e=Xc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),uc(e.return,n,a)}function qc(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Cm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Sn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,a,n);else if(e.tag===19)Rm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(gt(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),qc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Sl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}qc(n,!0,a,null,f);break;case"together":qc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function ex(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),fa(n,ln,e.memoizedState.cache),Bs();break;case 27:case 5:Kt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(e,n,a):(ga(n),e=Xi(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Fs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Cm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,ym(e,n,a);case 24:fa(n,ln,e.memoizedState.cache)}return Xi(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Yc(e,a)&&(n.flags&128)===0)return pn=!1,ex(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&rp(n,il,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")nc(o)?(e=rr(o,e),n.tag=1,n=bm(null,n,o,e,a)):(n.tag=0,n=Hc(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=vm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=xm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(r(306,n,""))}}return n;case 0:return Hc(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=rr(o,n.pendingProps),bm(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,gc(e,n),qs(n,o,null,a);var S=n.memoizedState;if(o=S.cache,fa(n,ln,o),o!==f.cache&&cc(n,[ln],a,!0),Ws(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Tm(e,n,o,a);break t}else if(o!==u){u=Jn(Error(r(424)),n),Is(u),n=Tm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=fi(e.firstChild),Dn=n,Ae=!0,$a=null,Si=!0,a=om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Bs(),o===u){n=Xi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return El(e,n),e===null?(a=Ng(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Il(yt.current).createElement(a),o[sn]=n,o[vn]=e,Mn(o,a,e),en(o),n.stateNode=o):n.memoizedState=Ng(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ae&&(o=n.stateNode=Dg(n.type,n.pendingProps,yt.current),Dn=n,Si=!0,u=je,Aa(n.type)?(Cf=u,je=fi(o.firstChild)):je=u),Sn(e,n,n.pendingProps.children,a),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=je)&&(o=wx(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,je=fi(o.firstChild),Si=!1,u=!0):u=!1),u||tr(n)),Kt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,bf(u,f)?o=null:S!==null&&bf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Mc(e,n,Yv,null,null,a),mo._currentValue=u),El(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=je)&&(a=Dx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,je=null,e=!0):e=!1),e||tr(n)),null;case 13:return Am(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Hr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return vm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,fa(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,nr(n),u=Tn(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return xm(e,n,n.type,n.pendingProps,a);case 15:return Sm(e,n,n.type,n.pendingProps,a);case 19:return Cm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return ym(e,n,a);case 24:return nr(n),o=Tn(ln),e===null?(u=hc(),u===null&&(u=ke,f=fc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},mc(n),fa(n,ln,u)):((e.lanes&a)!==0&&(gc(e,n),qs(n,null,null,a),Ws()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),fa(n,ln,o)):(o=f.cache,fa(n,ln,o),o!==u.cache&&cc(n,[ln],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function Dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ig(n)){if(n=ni.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw ks=pc,hp;e.flags|=8192}}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Xr|=n)}function $s(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function nx(e,n,a){var o=n.pendingProps;switch(sc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(ln),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zs(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Wi(n),a!==null?(qe(n),Dm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Wi(n),qe(n),Dm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Wi(n),qe(n),n.flags&=-16777217),null;case 27:He(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,zs(n)?sp(n):(e=Dg(u,o,a),n.stateNode=e,Wi(n))}return qe(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,zs(n))sp(n);else{switch(u=Il(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[sn]=n,e[vn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=yt.current,zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Eg(e.nodeValue,a)),e||tr(n)}else e=Il(e).createTextNode(o),e[sn]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else Bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ki(n),n):(ki(n),null)}if(ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&xf(n.stateNode.containerInfo),qe(n),null;case 10:return Gi(n.type),qe(n),null;case 19:if(ct(un),u=n.memoizedState,u===null)return qe(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)$s(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,$s(u,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ap(a,e),a=a.sibling;return gt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&ie()>Cl&&(n.flags|=128,o=!0,$s(u,!1),n.lanes=4194304)}else{if(!o)if(e=Sl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),$s(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ae)return qe(n),null}else 2*ie()-u.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,o=!0,$s(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ie(),n.sibling=null,e=un.current,gt(un,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return ki(n),Sc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ct(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ix(e,n){switch(sc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(ln),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ct(un),null;case 4:return oe(),null;case 10:return Gi(n.type),null;case 22:case 23:return ki(n),Sc(),e!==null&&ct(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(ln),null;case 25:return null;default:return null}}function Um(e,n){switch(sc(n),n.tag){case 3:Gi(ln),oe();break;case 26:case 27:case 5:He(n);break;case 4:oe();break;case 13:ki(n);break;case 19:ct(un);break;case 10:Gi(n.type);break;case 22:case 23:ki(n),Sc(),e!==null&&ct(ir);break;case 24:Gi(ln)}}function to(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(E){Fe(n,n.return,E)}}function va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,u=n;var z=a,tt=E;try{tt()}catch(dt){Fe(u,z,dt)}}}o=o.next}while(o!==f)}}catch(dt){Fe(n,n.return,dt)}}function Lm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xp(n,a)}catch(o){Fe(e,e.return,o)}}}function Nm(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function eo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Om(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function jc(e,n,a){try{var o=e.stateNode;bx(o,e.type,a,n),o[vn]=n}catch(u){Fe(e,e.return,u)}}function Pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Zc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bl));else if(o!==4&&(o===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Kc(e,n,a),e=e.sibling;e!==null;)Kc(e,n,a),e=e.sibling}function Al(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,o,a),n[sn]=e,n[vn]=a}catch(f){Fe(e,e.return,f)}}var qi=!1,$e=!1,Qc=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ax(e,n){if(e=e.containerInfo,Mf=Xl,e=jh(e),Zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,E=-1,z=-1,tt=0,dt=0,xt=e,it=null;e:for(;;){for(var at;xt!==a||u!==0&&xt.nodeType!==3||(E=S+u),xt!==f||o!==0&&xt.nodeType!==3||(z=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(at=xt.firstChild)!==null;)it=xt,xt=at;for(;;){if(xt===e)break e;if(it===a&&++tt===u&&(E=S),it===f&&++dt===o&&(z=S),(at=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=at}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:e,selectionRange:a},Xl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=rr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Fe(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Af(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Af(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Im(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),o&4&&to(5,a);break;case 1:if(xa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&Lm(a),o&512&&eo(a,a.return);break;case 3:if(xa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xp(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&zm(a);case 26:case 5:xa(e,a),n===null&&o&4&&Om(a),o&512&&eo(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),o&4&&Gm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=hx.bind(null,a),Ux(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||$e,u=qi;var f=$e;qi=o,($e=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),qi=u,$e=f}break;case 30:break;default:xa(e,a)}}function Fm(e){var n=e.alternate;n!==null&&(e.alternate=null,Fm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&oa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,zn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Hm(e,n,a),a=a.sibling}function Hm(e,n,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:$e||Mi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Mi(a,n);var o=Xe,u=zn;Aa(a.type)&&(Xe=a.stateNode,zn=!1),Yi(e,n,a),co(a.stateNode),Xe=o,zn=u;break;case 5:$e||Mi(a,n);case 6:if(o=Xe,u=zn,Xe=null,Yi(e,n,a),Xe=o,zn=u,Xe!==null)if(zn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Xe!==null&&(zn?(e=Xe,Cg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xo(e)):Cg(Xe,a.stateNode));break;case 4:o=Xe,u=zn,Xe=a.stateNode.containerInfo,zn=!0,Yi(e,n,a),Xe=o,zn=u;break;case 0:case 11:case 14:case 15:$e||va(2,a,n),$e||va(4,a,n),Yi(e,n,a);break;case 1:$e||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Nm(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,Yi(e,n,a),$e=o;break;default:Yi(e,n,a)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(a){Fe(n,n.return,a)}}function rx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(r(435,e.tag))}}function Jc(e,n){var a=rx(e);n.forEach(function(o){var u=px.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,E=S;t:for(;E!==null;){switch(E.tag){case 27:if(Aa(E.type)){Xe=E.stateNode,zn=!1;break t}break;case 5:Xe=E.stateNode,zn=!1;break t;case 3:case 4:Xe=E.stateNode.containerInfo,zn=!0;break t}E=E.return}if(Xe===null)throw Error(r(160));Hm(f,S,u),Xe=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var ci=null;function Vm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(va(3,e,e.return),to(3,e),va(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&($e||a===null||Mi(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ci;if(Xn(n,e),Wn(e),o&512&&($e||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[sa]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,o,a),f[sn]=e,en(f),o=f;break t;case"link":var S=zg("link","href",u).get(o+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(f=S[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=zg("meta","content",u).get(o+(a.content||""))){for(E=0;E<S.length;E++)if(f=S[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break e}}f=u.createElement(o),Mn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,en(f),o=f}e.stateNode=o}else Bg(u,e.type,e.stateNode);else e.stateNode=Pg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Bg(u,e.type,e.stateNode):Pg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&jc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&($e||a===null||Mi(a,a.return)),a!==null&&o&4&&jc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&($e||a===null||Mi(a,a.return)),e.flags&32){u=e.stateNode;try{xi(u,"")}catch(at){Fe(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,jc(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qc=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Fe(e,e.return,at)}}break;case 3:if(Gl=null,u=ci,ci=Fl(n.containerInfo),Xn(n,e),ci=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(at){Fe(e,e.return,at)}Qc&&(Qc=!1,km(e));break;case 4:o=ci,ci=Fl(e.stateNode.containerInfo),Xn(n,e),Wn(e),ci=o;break;case 12:Xn(n,e),Wn(e);break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rf=ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jc(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,tt=qi,dt=$e;if(qi=tt||u,$e=dt||z,Xn(n,e),$e=dt,qi=tt,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||qi||$e||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=z.stateNode;var xt=z.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Fe(z,z.return,at)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(at){Fe(z,z.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jc(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jc(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Pm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Zc(e);Al(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(xi(S,""),a.flags&=-33);var E=Zc(e);Al(e,E,S);break;case 3:case 4:var z=a.stateNode.containerInfo,tt=Zc(e);Kc(e,tt,z);break;default:throw Error(r(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function xa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),sr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),sr(n);break;case 27:co(n.stateNode);case 26:case 5:Mi(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),to(4,f);break;case 1:if(Sa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var E=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)vp(z[u],E)}catch(tt){Fe(o,o.return,tt)}}a&&S&64&&Lm(f),eo(f,f.return);break;case 27:zm(f);case 26:case 5:Sa(u,f,a),a&&o===null&&S&4&&Om(f),eo(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&S&4&&Gm(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),eo(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function $c(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Hs(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Xm(e,n,a,o),n=n.sibling}function Xm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),u&2048&&to(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Hs(e)));break;case 12:if(u&2048){Ei(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,E=f.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,o):no(e,n):f._visibility&2?Ei(e,n,a,o):(f._visibility|=2,Gr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&$c(S,n);break;case 24:Ei(e,n,a,o),u&2048&&tf(n.alternate,n);break;default:Ei(e,n,a,o)}}function Gr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,E=a,z=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Gr(f,S,E,z,u),to(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Gr(f,S,E,z,u):no(f,S):(dt._visibility|=2,Gr(f,S,E,z,u)),u&&tt&2048&&$c(S.alternate,S);break;case 24:Gr(f,S,E,z,u),u&&tt&2048&&tf(S.alternate,S);break;default:Gr(f,S,E,z,u)}n=n.sibling}}function no(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:no(a,o),u&2048&&$c(o.alternate,o);break;case 24:no(a,o),u&2048&&tf(o.alternate,o);break;default:no(a,o)}n=n.sibling}}var io=8192;function Vr(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 26:Vr(e),e.flags&io&&e.memoizedState!==null&&Xx(ci,e.memoizedState,e.memoizedProps);break;case 5:Vr(e);break;case 3:case 4:var n=ci;ci=Fl(e.stateNode.containerInfo),Vr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=io,io=16777216,Vr(e),io=n):Vr(e));break;default:Vr(e)}}function qm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ao(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,jm(o,e)}qm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ym(e),e=e.sibling}function Ym(e){switch(e.tag){case 0:case 11:case 15:ao(e),e.flags&2048&&va(9,e,e.return);break;case 3:ao(e);break;case 12:ao(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):ao(e);break;default:ao(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,jm(o,e)}qm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function jm(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,f=o.return;if(Fm(o),o===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var sx={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ox=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,pe=null,Se=0,we=0,qn=null,ya=!1,kr=!1,ef=!1,ji=0,Ze=0,Ma=0,or=0,nf=0,ii=0,Xr=0,ro=null,Bn=null,af=!1,rf=0,Cl=1/0,wl=null,Ea=null,yn=0,ba=null,Wr=null,qr=0,sf=0,of=null,Zm=null,so=0,lf=null;function Yn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(N.T!==null){var e=Nr;return e!==0?e:mf()}return Me()}function Km(){ii===0&&(ii=(Se&536870912)===0||Ae?q():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function jn(e,n,a){(e===ke&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),Ta(e,Se,ii,!1)),vt(e,a),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(or|=a),Ze===4&&Ta(e,Se,ii,!1)),bi(e))}function Qm(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?cx(e,n):ff(e,n,!0),f=o;do{if(u===0){kr&&!o&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!lx(a)){u=ff(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var E=e;u=ro;var z=E.current.memoizedState.isDehydrated;if(z&&(Yr(E,S).flags|=256),S=ff(E,S,!1),S!==2){if(ef&&!z){E.errorRecoveryDisabledLanes|=f,or|=f,u=4;break t}f=Bn,Bn=u,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Yr(e,0),Ta(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(o,n,ii,!ya);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=rf+300-ie(),10<u)){if(Ta(o,n,ii,!ya),ue(o,0,!0)!==0)break t;o.timeoutHandle=Ag(Jm.bind(null,o,a,Bn,wl,af,n,ii,or,Xr,ya,f,2,-0,0),u);break t}Jm(o,a,Bn,wl,af,n,ii,or,Xr,ya,f,0,-0,0)}}break}while(!0);bi(e)}function Jm(e,n,a,o,u,f,S,E,z,tt,dt,xt,it,at){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:kx},Wm(n),xt=Wx(),xt!==null)){e.cancelPendingCommit=xt(rg.bind(null,e,n,f,a,o,u,S,E,z,dt,1,it,at)),Ta(e,f,S,!tt);return}rg(e,n,f,a,o,u,S,E,z)}function lx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Vn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,o){n&=~nf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ht(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&Nt(e,a,n)}function Dl(){return(Ce&6)===0?(oo(0),!1):!0}function uf(){if(pe!==null){if(we===0)var e=pe.return;else e=pe,Hi=er=null,Tc(e),Fr=null,Qs=0,e=pe;for(;e!==null;)Um(e.alternate,e),e=e.return;pe=null}}function Yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),uf(),ke=e,pe=a=Bi(e.current,null),Se=n,we=0,qn=null,ya=!1,kr=ne(e,n),ef=!1,Xr=ii=nf=or=Ma=Ze=0,Bn=ro=null,af=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),f=1<<u;n|=e[u],o&=~f}return ji=n,Jo(),a}function $m(e,n){ce=null,N.H=_l,n===Vs||n===ol?(n=gp(),we=3):n===hp?(n=gp(),we=4):we=n===_m?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pe===null&&(Ze=1,Ml(e,Jn(n,e.current)))}function tg(){var e=N.H;return N.H=_l,e===null?_l:e}function eg(){var e=N.A;return N.A=sx,e}function cf(){Ze=4,ya||(Se&4194048)!==Se&&ni.current!==null||(kr=!0),(Ma&134217727)===0&&(or&134217727)===0||ke===null||Ta(ke,Se,ii,!1)}function ff(e,n,a){var o=Ce;Ce|=2;var u=tg(),f=eg();(ke!==e||Se!==n)&&(wl=null,Yr(e,n)),n=!1;var S=Ze;t:do try{if(we!==0&&pe!==null){var E=pe,z=qn;switch(we){case 8:uf(),S=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var tt=we;if(we=0,qn=null,jr(e,E,z,tt),a&&kr){S=0;break t}break;default:tt=we,we=0,qn=null,jr(e,E,z,tt)}}ux(),S=Ze;break}catch(dt){$m(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Hi=er=null,Ce=o,N.H=u,N.A=f,pe===null&&(ke=null,Se=0,Jo()),S}function ux(){for(;pe!==null;)ng(pe)}function cx(e,n){var a=Ce;Ce|=2;var o=tg(),u=eg();ke!==e||Se!==n?(wl=null,Cl=ie()+500,Yr(e,n)):kr=ne(e,n);t:do try{if(we!==0&&pe!==null){n=pe;var f=qn;e:switch(we){case 1:we=0,qn=null,jr(e,n,f,1);break;case 2:case 9:if(pp(f)){we=0,qn=null,ig(n);break}n=function(){we!==2&&we!==9||ke!==e||(we=7),bi(e)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:pp(f)?(we=0,qn=null,ig(n)):(we=0,qn=null,jr(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var E=pe;if(!S||Ig(S)){we=0,qn=null;var z=E.sibling;if(z!==null)pe=z;else{var tt=E.return;tt!==null?(pe=tt,Ul(tt)):pe=null}break e}}we=0,qn=null,jr(e,n,f,5);break;case 6:we=0,qn=null,jr(e,n,f,6);break;case 8:uf(),Ze=6;break t;default:throw Error(r(462))}}fx();break}catch(dt){$m(e,dt)}while(!0);return Hi=er=null,N.H=o,N.A=u,Ce=a,pe!==null?0:(ke=null,Se=0,Jo(),Ze)}function fx(){for(;pe!==null&&!Ln();)ng(pe)}function ng(e){var n=wm(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?Ul(e):pe=n}function ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Tc(n);default:Um(a,n),n=pe=ap(n,ji),n=wm(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?Ul(e):pe=n}function jr(e,n,a,o){Hi=er=null,Tc(n),Fr=null,Qs=0;var u=n.return;try{if(tx(e,u,n,a,Se)){Ze=1,Ml(e,Jn(a,e.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;Ze=1,Ml(e,Jn(a,e.current)),pe=null;return}n.flags&32768?(Ae||o===1?e=!0:kr||(Se&536870912)!==0?e=!1:(ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),ag(n,e)):Ul(n)}function Ul(e){var n=e;do{if((n.flags&32768)!==0){ag(n,ya);return}e=n.return;var a=nx(n.alternate,n,ji);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ze===0&&(Ze=5)}function ag(e,n){do{var a=ix(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ze=6,pe=null}function rg(e,n,a,o,u,f,S,E,z){e.cancelPendingCommit=null;do Ll();while(yn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tc,zt(e,a,f,S,E,z),e===ke&&(pe=ke=null,Se=0),Wr=n,ba=e,qr=a,sf=f,of=u,Zm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,mx(L,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=X.p,X.p=2,S=Ce,Ce|=4;try{ax(e,n,a)}finally{Ce=S,X.p=u,N.T=o}}yn=1,sg(),og(),lg()}}function sg(){if(yn===1){yn=0;var e=ba,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=X.p;X.p=2;var u=Ce;Ce|=4;try{Vm(n,e);var f=Ef,S=jh(e.containerInfo),E=f.focusedElem,z=f.selectionRange;if(S!==E&&E&&E.ownerDocument&&Yh(E.ownerDocument.documentElement,E)){if(z!==null&&Zu(E)){var tt=z.start,dt=z.end;if(dt===void 0&&(dt=tt),"selectionStart"in E)E.selectionStart=tt,E.selectionEnd=Math.min(dt,E.value.length);else{var xt=E.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ee=E.textContent.length,Zt=Math.min(z.start,ee),Pe=z.end===void 0?Zt:Math.min(z.end,ee);!at.extend&&Zt>Pe&&(S=Pe,Pe=Zt,Zt=S);var j=qh(E,Zt),V=qh(E,Pe);if(j&&V&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var J=xt.createRange();J.setStart(j.node,j.offset),at.removeAllRanges(),Zt>Pe?(at.addRange(J),at.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),at.addRange(J))}}}}for(xt=[],at=E;at=at.parentNode;)at.nodeType===1&&xt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var mt=xt[E];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Xl=!!Mf,Ef=Mf=null}finally{Ce=u,X.p=o,N.T=a}}e.current=n,yn=2}}function og(){if(yn===2){yn=0;var e=ba,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=X.p;X.p=2;var u=Ce;Ce|=4;try{Im(e,n.alternate,n)}finally{Ce=u,X.p=o,N.T=a}}yn=3}}function lg(){if(yn===4||yn===3){yn=0,ge();var e=ba,n=Wr,a=qr,o=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,Wr=ba=null,ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),tn(a),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=X.p,X.p=2,N.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var E=o[S];f(E.value,{componentStack:E.stack})}}finally{N.T=n,X.p=u}}(qr&3)!==0&&Ll(),bi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===lf?so++:(so=0,lf=e):so=0,oo(0)}}function ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Hs(n)))}function Ll(e){return sg(),og(),lg(),cg()}function cg(){if(yn!==5)return!1;var e=ba,n=sf;sf=0;var a=tn(qr),o=N.T,u=X.p;try{X.p=32>a?32:a,N.T=null,a=of,of=null;var f=ba,S=qr;if(yn=0,Wr=ba=null,qr=0,(Ce&6)!==0)throw Error(r(331));var E=Ce;if(Ce|=4,Ym(f.current),Xm(f,f.current,S,a),Ce=E,oo(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{X.p=u,N.T=o,ug(e,n)}}function fg(e,n,a){n=Jn(a,n),n=Fc(e.stateNode,n,2),e=pa(e,n,2),e!==null&&(vt(e,2),bi(e))}function Fe(e,n,a){if(e.tag===3)fg(e,e,a);else for(;n!==null;){if(n.tag===3){fg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){e=Jn(a,e),a=mm(2),o=pa(n,a,2),o!==null&&(gm(a,o,n,e),vt(o,2),bi(o));break}}n=n.return}}function df(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ox;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ef=!0,u.add(a),e=dx.bind(null,e,n,a),n.then(e,e))}function dx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(Ze===4||Ze===3&&(Se&62914560)===Se&&300>ie()-rf?(Ce&2)===0&&Yr(e,0):nf|=a,Xr===Se&&(Xr=0)),bi(e)}function dg(e,n){n===0&&(n=Lt()),e=wr(e,n),e!==null&&(vt(e,n),bi(e))}function hx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),dg(e,a)}function px(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),dg(e,a)}function mx(e,n){return fe(e,n)}var Nl=null,Zr=null,hf=!1,Ol=!1,pf=!1,lr=0;function bi(e){e!==Zr&&e.next===null&&(Zr===null?Nl=Zr=e:Zr=Zr.next=e),Ol=!0,hf||(hf=!0,_x())}function oo(e,n){if(!pf&&Ol){pf=!0;do for(var a=!1,o=Nl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Ht(42|e)+1)-1,f&=u&~(S&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gg(o,f))}else f=Se,f=ue(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ne(o,f)||(a=!0,gg(o,f));o=o.next}while(a);pf=!1}}function gx(){hg()}function hg(){Ol=hf=!1;var e=0;lr!==0&&(Tx()&&(e=lr),lr=0);for(var n=ie(),a=null,o=Nl;o!==null;){var u=o.next,f=pg(o,n);f===0?(o.next=null,a===null?Nl=u:a.next=u,u===null&&(Zr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ol=!0)),o=u}oo(e)}function pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ht(f),E=1<<S,z=u[S];z===-1?((E&a)===0||(E&o)!==0)&&(u[S]=Le(E,n)):z<=n&&(e.expiredLanes|=E),f&=~E}if(n=ke,a=Se,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),tn(a)){case 2:case 8:a=Gt;break;case 32:a=L;break;case 268435456:a=nt;break;default:a=L}return o=mg.bind(null,e),a=fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function mg(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ll()&&e.callbackNode!==a)return null;var o=Se;return o=ue(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qm(e,o,n),pg(e,ie()),e.callbackNode!=null&&e.callbackNode===a?mg.bind(null,e):null)}function gg(e,n){if(Ll())return null;Qm(e,n,!0)}function _x(){Rx(function(){(Ce&6)!==0?fe(Ue,gx):hg()})}function mf(){return lr===0&&(lr=q()),lr}function _g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function vx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=_g((u[vn]||null).action),S=o.submitter;S&&(n=(n=S[vn]||null)?_g(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var E=new Zo("action","action",null,o,u);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var z=S?vg(u,S):new FormData(u);Oc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=S?vg(u,S):new FormData(u),Oc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var gf=0;gf<$u.length;gf++){var _f=$u[gf],xx=_f.toLowerCase(),Sx=_f[0].toUpperCase()+_f.slice(1);ui(xx,"on"+Sx)}ui(Qh,"onAnimationEnd"),ui(Jh,"onAnimationIteration"),ui($h,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Bv,"onTransitionRun"),ui(Iv,"onTransitionStart"),ui(Fv,"onTransitionCancel"),ui(tp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var E=o[S],z=E.instance,tt=E.currentTarget;if(E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=tt;try{f(u)}catch(dt){yl(dt)}u.currentTarget=null,f=z}else for(S=0;S<o.length;S++){if(E=o[S],z=E.instance,tt=E.currentTarget,E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=tt;try{f(u)}catch(dt){yl(dt)}u.currentTarget=null,f=z}}}}function me(e,n){var a=n[Xa];a===void 0&&(a=n[Xa]=new Set);var o=e+"__bubble";a.has(o)||(Sg(n,e,2,!1),a.add(o))}function vf(e,n,a){var o=0;n&&(o|=4),Sg(a,e,o,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function xf(e){if(!e[Pl]){e[Pl]=!0,ko.forEach(function(a){a!=="selectionchange"&&(yx.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,vf("selectionchange",!1,n))}}function Sg(e,n,a,o){switch(Xg(n)){case 2:var u=jx;break;case 8:u=Zx;break;default:u=Nf}a=u.bind(null,n,a,e),u=void 0,!Hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Sf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var E=o.stateNode.containerInfo;if(E===u)break;if(S===4)for(S=o.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;E!==null;){if(S=Ui(E),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){o=f=S;continue t}E=E.parentNode}}o=o.return}Rh(function(){var tt=f,dt=Iu(a),xt=[];t:{var it=ep.get(e);if(it!==void 0){var at=Zo,ee=e;switch(e){case"keypress":if(Yo(a)===0)break t;case"keydown":case"keyup":at=mv;break;case"focusin":ee="focus",at=Xu;break;case"focusout":ee="blur",at=Xu;break;case"beforeblur":case"afterblur":at=Xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=vv;break;case Qh:case Jh:case $h:at=sv;break;case tp:at=Sv;break;case"scroll":case"scrollend":at=ev;break;case"wheel":at=Mv;break;case"copy":case"cut":case"paste":at=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Lh;break;case"toggle":case"beforetoggle":at=bv}var Zt=(n&4)!==0,Pe=!Zt&&(e==="scroll"||e==="scrollend"),j=Zt?it!==null?it+"Capture":null:it;Zt=[];for(var V=tt,J;V!==null;){var mt=V;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||j===null||(mt=Rs(V,j),mt!=null&&Zt.push(uo(V,mt,J))),Pe)break;V=V.return}0<Zt.length&&(it=new at(it,ee,null,a,dt),xt.push({event:it,listeners:Zt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Bu&&(ee=a.relatedTarget||a.fromElement)&&(Ui(ee)||ee[Nn]))break t;if((at||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ee=a.relatedTarget||a.toElement,at=tt,ee=ee?Ui(ee):null,ee!==null&&(Pe=c(ee),Zt=ee.tag,ee!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(at=null,ee=tt),at!==ee)){if(Zt=Dh,mt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Lh,mt="onPointerLeave",j="onPointerEnter",V="pointer"),Pe=at==null?it:qa(at),J=ee==null?it:qa(ee),it=new Zt(mt,V+"leave",at,a,dt),it.target=Pe,it.relatedTarget=J,mt=null,Ui(dt)===tt&&(Zt=new Zt(j,V+"enter",ee,a,dt),Zt.target=J,Zt.relatedTarget=Pe,mt=Zt),Pe=mt,at&&ee)e:{for(Zt=at,j=ee,V=0,J=Zt;J;J=Kr(J))V++;for(J=0,mt=j;mt;mt=Kr(mt))J++;for(;0<V-J;)Zt=Kr(Zt),V--;for(;0<J-V;)j=Kr(j),J--;for(;V--;){if(Zt===j||j!==null&&Zt===j.alternate)break e;Zt=Kr(Zt),j=Kr(j)}Zt=null}else Zt=null;at!==null&&yg(xt,it,at,Zt,!1),ee!==null&&Pe!==null&&yg(xt,Pe,ee,Zt,!0)}}t:{if(it=tt?qa(tt):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ft=Hh;else if(Ih(it))if(Gh)Ft=Ov;else{Ft=Lv;var de=Uv}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&zu(tt.elementType)&&(Ft=Hh):Ft=Nv;if(Ft&&(Ft=Ft(e,tt))){Fh(xt,Ft,a,dt);break t}de&&de(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(de=tt?qa(tt):window,e){case"focusin":(Ih(de)||de.contentEditable==="true")&&(Ar=de,Ku=tt,Ps=null);break;case"focusout":Ps=Ku=Ar=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Zh(xt,a,dt);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Zh(xt,a,dt)}var Vt;if(qu)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Tr?zh(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Nh&&a.locale!=="ko"&&(Tr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Tr&&(Vt=Ch()):(ca=dt,Gu="value"in ca?ca.value:ca.textContent,Tr=!0)),de=zl(tt,Jt),0<de.length&&(Jt=new Uh(Jt,e,null,a,dt),xt.push({event:Jt,listeners:de}),Vt?Jt.data=Vt:(Vt=Bh(a),Vt!==null&&(Jt.data=Vt)))),(Vt=Av?Rv(e,a):Cv(e,a))&&(Jt=zl(tt,"onBeforeInput"),0<Jt.length&&(de=new Uh("onBeforeInput","beforeinput",null,a,dt),xt.push({event:de,listeners:Jt}),de.data=Vt)),vx(xt,e,tt,a,dt)}xg(xt,n)})}function uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function zl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Rs(e,a),u!=null&&o.unshift(uo(e,u,f)),u=Rs(e,n),u!=null&&o.push(uo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var E=a,z=E.alternate,tt=E.stateNode;if(E=E.tag,z!==null&&z===o)break;E!==5&&E!==26&&E!==27||tt===null||(z=tt,u?(tt=Rs(a,f),tt!=null&&S.unshift(uo(a,tt,z))):u||(tt=Rs(a,f),tt!=null&&S.push(uo(a,tt,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Mg(e){return(typeof e=="string"?e:""+e).replace(Mx,`
`).replace(Ex,"")}function Eg(e,n){return n=Mg(n),Mg(e)===n}function Bl(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Th(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Wo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Bl);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Et(e,"popover",o);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$0.get(a)||a,Et(e,a,o))}}function yf(e,n,a,o,u,f){switch(a){case"style":Th(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xi(e,o):(typeof o=="number"||typeof o=="bigint")&&xi(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Et(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var E=f=S=u=null,z=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":z=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Oe(e,n,o,dt,a,null)}}Ie(e,f,E,z,tt,S,u,!1),Ye(e);return;case"select":me("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":S=E;break;case"multiple":o=E;default:Oe(e,n,u,E,a,null)}n=f,a=S,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":me("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":o=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Oe(e,n,S,E,a,null)}xn(e,o,u,f),Ye(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,z,o,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<lo.length;o++)me(lo[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,tt,o,a,null)}return;default:if(zu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&yf(e,n,dt,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Oe(e,n,E,o,a,null))}function bx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,E=null,z=null,tt=null,dt=null;for(at in a){var xt=a[at];if(a.hasOwnProperty(at)&&xt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":z=xt;default:o.hasOwnProperty(at)||Oe(e,n,at,null,o,xt)}}for(var it in o){var at=o[it];if(xt=a[it],o.hasOwnProperty(it)&&(at!=null||xt!=null))switch(it){case"type":f=at;break;case"name":u=at;break;case"checked":tt=at;break;case"defaultChecked":dt=at;break;case"value":S=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==xt&&Oe(e,n,it,at,o,xt)}}Oi(e,S,E,z,tt,dt,f,u);return;case"select":at=S=E=it=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":at=z;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":S=f;default:f!==z&&Oe(e,n,u,f,o,z)}n=E,a=S,o=at,it!=null?on(e,!!a,it,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(e,n,E,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":it=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,S,u,o,f)}hn(e,it,at);return;case"option":for(var ee in a)if(it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,n,ee,null,o,it)}for(z in o)if(it=o[z],at=a[z],o.hasOwnProperty(z)&&it!==at&&(it!=null||at!=null))switch(z){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,z,it,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)it=a[Zt],a.hasOwnProperty(Zt)&&it!=null&&!o.hasOwnProperty(Zt)&&Oe(e,n,Zt,null,o,it);for(tt in o)if(it=o[tt],at=a[tt],o.hasOwnProperty(tt)&&it!==at&&(it!=null||at!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,tt,it,o,at)}return;default:if(zu(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!o.hasOwnProperty(Pe)&&yf(e,n,Pe,void 0,o,it);for(dt in o)it=o[dt],at=a[dt],!o.hasOwnProperty(dt)||it===at||it===void 0&&at===void 0||yf(e,n,dt,it,o,at);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Oe(e,n,j,null,o,it);for(xt in o)it=o[xt],at=a[xt],!o.hasOwnProperty(xt)||it===at||it==null&&at==null||Oe(e,n,xt,it,o,at)}var Mf=null,Ef=null;function Il(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function Tx(){var e=window.event;return e&&e.type==="popstate"?e===Tf?!1:(Tf=e,!0):(Tf=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(Cx)}:Ag;function Cx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Cg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&co(S.documentElement),a&2&&co(S.body),a&4)for(a=S.head,co(a),S=a.firstChild;S;){var E=S.nextSibling,z=S.nodeName;S[sa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(u===0){e.removeChild(f),xo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);xo(n)}function Af(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[sa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ux(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Cf=null;function wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Dg(e,n,a){switch(n=Il(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function co(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);oa(e)}var ai=new Map,Ug=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=X.d;X.d={f:Lx,r:Nx,D:Ox,C:Px,L:zx,m:Bx,X:Fx,S:Ix,M:Hx};function Lx(){var e=Zi.f(),n=Dl();return e||n}function Nx(e){var n=Li(e);n!==null&&n.tag===5&&n.type==="form"?Qp(n):Zi.r(e)}var Qr=typeof document>"u"?null:document;function Lg(e,n,a){var o=Qr;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ug.has(u)||(Ug.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),en(n),o.head.appendChild(n)))}}function Ox(e){Zi.D(e),Lg("dns-prefetch",e,null)}function Px(e,n){Zi.C(e,n),Lg("preconnect",e,n)}function zx(e,n,a){Zi.L(e,n,a);var o=Qr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var f=u;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}ai.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(fo(f))||n==="script"&&o.querySelector(ho(f))||(n=o.createElement("link"),Mn(n,"link",e),en(n),o.head.appendChild(n)))}}function Bx(e,n){Zi.m(e,n);var a=Qr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!ai.has(f)&&(e=g({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}o=a.createElement("link"),Mn(o,"link",e),en(o),a.head.appendChild(o)}}}function Ix(e,n,a){Zi.S(e,n,a);var o=Qr;if(o&&e){var u=la(o).hoistableStyles,f=Jr(e);n=n||"default";var S=u.get(f);if(!S){var E={loading:0,preload:null};if(S=o.querySelector(fo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&wf(e,a);var z=S=o.createElement("link");en(z),Mn(z,"link",e),z._p=new Promise(function(tt,dt){z.onload=tt,z.onerror=dt}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:E},u.set(f,S)}}}function Fx(e,n){Zi.X(e,n);var a=Qr;if(a&&e){var o=la(a).hoistableScripts,u=$r(e),f=o.get(u);f||(f=a.querySelector(ho(u)),f||(e=g({src:e,async:!0},n),(n=ai.get(u))&&Df(e,n),f=a.createElement("script"),en(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hx(e,n){Zi.M(e,n);var a=Qr;if(a&&e){var o=la(a).hoistableScripts,u=$r(e),f=o.get(u);f||(f=a.querySelector(ho(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(u))&&Df(e,n),f=a.createElement("script"),en(f),Mn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ng(e,n,a,o){var u=(u=yt.current)?Fl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=la(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=la(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(fo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Gx(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=la(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+Ve(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function Og(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Gx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),en(n),e.head.appendChild(n))}function $r(e){return'[src="'+Ve(e)+'"]'}function ho(e){return"script[async]"+e}function Pg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,en(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),Mn(o,"style",u),Hl(o,a.precedence,e),n.instance=o;case"stylesheet":u=Jr(a.href);var f=e.querySelector(fo(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=Og(a),(u=ai.get(u))&&wf(o,u),f=(e.ownerDocument||e).createElement("link"),en(f);var S=f;return S._p=new Promise(function(E,z){S.onload=E,S.onerror=z}),Mn(f,"link",o),n.state.loading|=4,Hl(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(u=e.querySelector(ho(f)))?(n.instance=u,en(u),u):(o=a,(u=ai.get(f))&&(o=g({},a),Df(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hl(o,a.precedence,e));return n.instance}function Hl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var E=o[S];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gl=null;function zg(e,n,a){if(Gl===null){var o=new Map,u=Gl=new Map;u.set(a,o)}else u=Gl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[sa]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var E=o.get(S);E?E.push(f):o.set(S,[f])}}return o}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ig(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var po=null;function kx(){}function Xx(e,n,a){if(po===null)throw Error(r(475));var o=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Jr(a.href),f=e.querySelector(fo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Vl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Og(a),(u=ai.get(u))&&wf(a,u),f=f.createElement("link"),en(f);var S=f;S._p=new Promise(function(E,z){S.onload=E,S.onerror=z}),Mn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Vl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Wx(){if(po===null)throw Error(r(475));var e=po;return e.stylesheets&&e.count===0&&Uf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Uf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Vl(){if(this.count--,this.count===0){if(this.stylesheets)Uf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Uf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,n.forEach(qx,e),kl=null,Vl.call(e))}function qx(e,n){if(!(n.state.loading&4)){var a=kl.get(e);if(a)var o=a.get(null);else{a=new Map,kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Vl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var mo={$$typeof:O,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Yx(e,n,a,o,u,f,S,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ut(0),this.hiddenUpdates=ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Fg(e,n,a,o,u,f,S,E,z,tt,dt,xt){return e=new Yx(e,n,a,S,E,z,tt,xt),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),e.current=f,f.stateNode=e,n=fc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},mc(f),e}function Hg(e){return e?(e=Dr,e):Dr}function Gg(e,n,a,o,u,f){u=Hg(u),o.context===null?o.context=u:o.pendingContext=u,o=ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=pa(e,o,n),a!==null&&(jn(a,e,n),Xs(a,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lf(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function kg(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&jn(n,e,67108864),Lf(e,67108864)}}var Xl=!0;function jx(e,n,a,o){var u=N.T;N.T=null;var f=X.p;try{X.p=2,Nf(e,n,a,o)}finally{X.p=f,N.T=u}}function Zx(e,n,a,o){var u=N.T;N.T=null;var f=X.p;try{X.p=8,Nf(e,n,a,o)}finally{X.p=f,N.T=u}}function Nf(e,n,a,o){if(Xl){var u=Of(o);if(u===null)Sf(e,n,o,Wl,a),Wg(e,o);else if(Qx(u,e,n,a,o))o.stopPropagation();else if(Wg(e,o),n&4&&-1<Kx.indexOf(e)){for(;u!==null;){var f=Li(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Pt(f.pendingLanes);if(S!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var z=1<<31-Ht(S);E.entanglements[1]|=z,S&=~z}bi(f),(Ce&6)===0&&(Cl=ie()+500,oo(0))}}break;case 13:E=wr(f,2),E!==null&&jn(E,f,2),Dl(),Lf(f,2)}if(f=Of(o),f===null&&Sf(e,n,o,Wl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Sf(e,n,o,null,a)}}function Of(e){return e=Iu(e),Pf(e)}var Wl=null;function Pf(e){if(Wl=null,e=Ui(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wl=e,null}function Xg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Ue:return 2;case Gt:return 8;case L:case b:return 32;case nt:return 268435456;default:return 32}default:return 32}}var zf=!1,Ra=null,Ca=null,wa=null,go=new Map,_o=new Map,Da=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Li(n),n!==null&&kg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Qx(e,n,a,o,u){switch(n){case"focusin":return Ra=vo(Ra,e,n,a,o,u),!0;case"dragenter":return Ca=vo(Ca,e,n,a,o,u),!0;case"mouseover":return wa=vo(wa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return go.set(f,vo(go.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,_o.set(f,vo(_o.get(f)||null,e,n,a,o,u)),!0}return!1}function qg(e){var n=Ui(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gn(e.priority,function(){if(a.tag===13){var o=Yn();o=Ge(o);var u=wr(a,o);u!==null&&jn(u,a,o),Lf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Of(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Bu=o,a.target.dispatchEvent(o),Bu=null}else return n=Li(a),n!==null&&kg(n),e.blockedOn=a,!1;n.shift()}return!0}function Yg(e,n,a){ql(e)&&a.delete(n)}function Jx(){zf=!1,Ra!==null&&ql(Ra)&&(Ra=null),Ca!==null&&ql(Ca)&&(Ca=null),wa!==null&&ql(wa)&&(wa=null),go.forEach(Yg),_o.forEach(Yg)}function Yl(e,n){e.blockedOn===n&&(e.blockedOn=null,zf||(zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Jx)))}var jl=null;function jg(e){jl!==e&&(jl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Pf(o||a)===null)continue;break}var f=Li(a);f!==null&&(e.splice(n,3),n-=3,Oc(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xo(e){function n(z){return Yl(z,e)}Ra!==null&&Yl(Ra,e),Ca!==null&&Yl(Ca,e),wa!==null&&Yl(wa,e),go.forEach(n),_o.forEach(n);for(var a=0;a<Da.length;a++){var o=Da[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)qg(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[vn]||null;if(typeof f=="function")S||jg(a);else if(S){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[vn]||null)E=S.formAction;else if(Pf(u)!==null)continue}else E=S.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),jg(a)}}}function Bf(e){this._internalRoot=e}Zl.prototype.render=Bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();Gg(a,o,e,n,null,null)},Zl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gg(e.current,2,null,e,null,null),Dl(),n[Nn]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&qg(e)}};var Zg=t.version;if(Zg!=="19.1.0")throw Error(r(527,Zg,"19.1.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var $x={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{ht=Kl.inject($x),Ot=Kl}catch{}}return yo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=fm,f=dm,S=hm,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Fg(e,1,!1,null,null,a,o,u,f,S,E,null),e[Nn]=n.current,xf(e),new Bf(n)},yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=fm,S=dm,E=hm,z=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Fg(e,1,!0,n,a??null,o,u,f,S,E,z,tt),n.context=Hg(null),a=n.current,o=Yn(),o=Ge(o),u=ha(o),u.callback=null,pa(a,u,o),a=o,n.current.lanes=a,vt(n,a),bi(n),e[Nn]=n.current,xf(e),new Zl(n)},yo.version="19.1.0",yo}var r_;function uS(){if(r_)return Hf.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Hf.exports=lS(),Hf.exports}var cS=uS();const fS=p0(cS);async function dS(s,t="plane"){var d,h;let i="";t==="plane"?i=`
Assume UV coordinates vary linearly across a flat plane from (0,0) to (1,1).
You can directly use uv.x and uv.y for procedural effects.
`:t==="sphere"?i=`
Assume the shader will be applied to a 3D sphere with built-in UV coordinates.
Use the varying vec2 vUv passed from the vertex shader to compute effects.
Do NOT use gl_FragCoord.
Use circular or symmetrical effects to avoid distortion at the poles.
`:t==="cube"&&(i=`
The shader will be applied to a rotating cube, where each face has independent UVs ranging from (0.0, 0.0) to (1.0, 1.0).

Use the following inputs:

- \`varying vec2 vUv;\` represents the UV coordinates of the current face.
- \`varying float vFaceIndex;\` is a unique integer (0–5) passed from the vertex shader that identifies which face of the cube is being rendered:
    - 0 = right
    - 1 = left
    - 2 = top
    - 3 = bottom
    - 4 = front
    - 5 = back

Instructions:
- Use \`int faceIndex = int(vFaceIndex);\` in the fragment shader to branch per face.
- Render different visual effects or patterns on each face depending on the face index.
- For example, you may show a different number of circular dots (like dice faces) depending on the index.
- You may use \`distance(uv, center)\` to draw circles at fixed positions in UV space.
- Do not attempt to use \`vNormal\`, \`gl_FragCoord\`, or dot products for face detection — use \`vFaceIndex\` only.
- Return only the final fragment shader code. Do not include comments or explanation.
`);const r=`${i}

${s}`,c=await(await fetch("https://nlp-to-shader-backend.onrender.com/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r,geometryType:t})})).json();return((h=(d=c==null?void 0:c.content)==null?void 0:d[0])==null?void 0:h.text)||""}const s_="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20256%20257'%20style='enable-background:new%200%200%20256%20257;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23D97757;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M50.2,170.3l50.4-28.3l0.8-2.5l-0.8-1.4h-2.5l-8.4-0.5l-28.8-0.8l-25-1l-24.2-1.3l-6.1-1.3L0,125.8l0.6-3.8%20l5.1-3.4l7.3,0.6l16.2,1.1l24.3,1.7l17.6,1l26.1,2.7h4.1l0.6-1.7l-1.4-1l-1.1-1l-25.1-17L47.1,87L32.9,76.6l-7.7-5.2l-3.9-4.9%20l-1.7-10.8l7-7.7l9.4,0.6l2.4,0.6l9.5,7.3l20.4,15.7l26.6,19.6l3.9,3.2l1.6-1.1l0.2-0.8l-1.7-2.9L84.3,64.2L68.8,37.7l-6.9-11%20L60.1,20c-0.6-2.7-1.1-5-1.1-7.8l8-10.8L71.4,0L82,1.4l4.5,3.9l6.6,15.1l10.7,23.8l16.6,32.3l4.9,9.6l2.6,8.9l1,2.7h1.7v-1.6%20l1.4-18.2l2.5-22.4l2.5-28.8l0.8-8.1l4-9.7l8-5.2l6.2,3l5.1,7.3l-0.7,4.7l-3,19.8l-6,31l-3.9,20.7h2.3l2.6-2.6l10.5-13.9l17.6-22%20l7.8-8.7l9.1-9.7l5.8-4.6h11l8.1,12.1l-3.6,12.4l-11.3,14.4l-9.4,12.2l-13.5,18.1l-8.4,14.5l0.8,1.2l2-0.2l30.5-6.5l16.5-3%20l19.6-3.4l8.9,4.1l1,4.2l-3.5,8.6l-21,5.2l-24.6,4.9l-36.7,8.7l-0.5,0.3l0.5,0.6l16.5,1.6l7.1,0.4h17.3l32.2,2.4l8.4,5.6l5.1,6.8%20l-0.8,5.2l-13,6.6l-17.5-4.1l-40.8-9.7l-14-3.5h-1.9v1.2l11.7,11.4l21.4,19.3l26.8,24.9l1.4,6.2l-3.4,4.9l-3.6-0.5l-23.5-17.7%20l-9.1-8l-20.5-17.3h-1.4v1.8l4.7,6.9l25,37.6l1.3,11.5l-1.8,3.8l-6.5,2.3l-7.1-1.3l-14.6-20.5l-15.1-23.1L141.2,171l-1.5,0.8%20l-7.2,77.4l-3.4,4l-7.8,3l-6.5-4.9l-3.4-8l3.4-15.7l4.1-20.5l3.4-16.3l3-20.3l1.8-6.7l-0.1-0.5l-1.5,0.2l-15.3,21l-23.3,31.4%20l-18.4,19.7l-4.4,1.7l-7.6-4l0.7-7.1l4.3-6.3l25.5-32.4l15.4-20.1l9.9-11.6l-0.1-1.7h-0.6l-67.7,43.9L32,199.7l-5.2-4.9l0.6-8%20l2.5-2.6L50.2,170.3L50.2,170.3z'/%3e%3c/g%3e%3c/svg%3e",hS="/nlp-to-glsl/assets/GPT-4o-tL9r_TDD.svg";function o_({options:s,value:t,onChange:i,icon:r=null,disabled:l=!1}){const[c,d]=Wt.useState(!1),h=Wt.useRef(null);Wt.useEffect(()=>{const p=g=>{h.current&&!h.current.contains(g.target)&&d(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);const m=s.find(p=>p.value===t);return At.jsxs("div",{ref:h,className:"custom-dropdown",style:{position:"relative",minWidth:"280px"},children:[At.jsxs("div",{className:"dropdown-header",onClick:()=>!l&&d(!c),style:{backgroundColor:"#343541",border:"1px solid #565869",borderRadius:"6px",padding:"0.75rem 1rem",display:"flex",alignItems:"center",cursor:l?"not-allowed":"pointer",opacity:l?.7:1,transition:"all 0.2s ease"},children:[r&&At.jsx("img",{src:r,alt:"Icon",style:{width:"20px",height:"20px",marginRight:"0.75rem"}}),!r&&m&&["plane","cube","sphere"].includes(m.value)&&At.jsxs("span",{style:{marginRight:"0.75rem",display:"flex",alignItems:"center"},children:[m.value==="plane"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:20,height:20},children:At.jsx("path",{d:"M22 2H2v20h20V2zm-2 2v16H4V4h16z"})}),m.value==="cube"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:20,height:20},children:At.jsx("path",{d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"})}),m.value==="sphere"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:20,height:20},children:At.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})})]}),At.jsx("span",{style:{flex:1,fontSize:"0.875rem",color:"#ffffff"},children:(m==null?void 0:m.label)||"Select..."}),At.jsx("div",{className:`select-arrow ${c?"rotated":""}`,style:{display:"flex",alignItems:"center",transition:"transform 0.2s ease"},children:At.jsx("svg",{viewBox:"0 0 24 24",style:{width:"16px",height:"16px",fill:"currentColor",opacity:.7},children:At.jsx("path",{d:"M7 10l5 5 5-5z"})})})]}),At.jsx("div",{className:`dropdown-menu ${c?"open":""}`,style:{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,backgroundColor:"#2D2D2D",border:"1px solid #565869",borderRadius:"6px",zIndex:1e3,maxHeight:"250px",overflowY:"auto",opacity:0,visibility:"hidden",transform:"translateY(-10px)",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"},children:s.map(p=>At.jsxs("div",{className:`dropdown-item ${p.disabled?"disabled":""} ${p.value===t?"selected":""}`,onClick:()=>{p.disabled||(i(p.value),d(!1))},style:{padding:"0.75rem 1rem",cursor:p.disabled?"not-allowed":"pointer",color:p.disabled?"#666666":"#ffffff",backgroundColor:p.value===t?"#444654":"transparent",fontStyle:p.disabled?"italic":"normal",display:"flex",alignItems:"center",gap:"0.75rem",transition:"background-color 0.15s ease"},children:[p.icon&&At.jsx("img",{src:p.icon,alt:"",style:{width:"20px",height:"20px",opacity:p.disabled?.5:1}}),!p.icon&&At.jsxs("div",{style:{width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",opacity:p.disabled?.5:.8},children:[p.value==="plane"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:At.jsx("path",{d:"M22 2H2v20h20V2zm-2 2v16H4V4h16z"})}),p.value==="cube"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:At.jsx("path",{d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"})}),p.value==="sphere"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:At.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})}),p.value==="gpt-4o"&&At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:At.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm2-1.61V14h-2v-3.61c0-.52.42-.94.94-.94h.12c.52 0 .94.42.94.94zM12 6c1.66 0 3 1.34 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.66 1.34-3 3-3z"})})]}),p.label]},p.value))})]})}function pS({prompt:s,setPrompt:t,onSubmit:i,isGenerating:r,currentCode:l}){const[c,d]=Wt.useState("claude-3-sonnet"),[h,m]=Wt.useState("plane"),p=[{value:"claude-3-sonnet",label:"Claude 3.7 Sonnet",icon:s_},{value:"gpt-4o",label:"GPT-4o (Coming soon...)",icon:hS,disabled:!0}],g=[{value:"plane",label:"Plane"},{value:"cube",label:"Cube"},{value:"sphere",label:"Sphere"}],v=C=>{C.preventDefault(),r||i(h)},x=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),s.trim()&&!r&&i(h))},M=()=>{if(!l)return;const C=new Blob([l],{type:"text/plain"}),y=URL.createObjectURL(C),_=document.createElement("a");_.href=y,_.download="shader.glsl",document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(y)},A={backgroundColor:"#343541",color:"white",border:"1px solid #565869",borderRadius:"6px",padding:"0.75rem 1rem",cursor:"pointer",fontSize:"0.875rem",fontWeight:"500",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"0.5rem",justifyContent:"center",width:"100%"};return At.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[At.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[At.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[At.jsxs("label",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"0.875rem",fontWeight:"500",display:"flex",alignItems:"center",gap:"0.5rem"},children:[At.jsx("svg",{viewBox:"0 0 24 24",style:{width:"16px",height:"16px",fill:"currentColor"},children:At.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"})}),"Select Geometry Type"]}),At.jsx(o_,{options:g,value:h,onChange:m})]}),At.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[At.jsxs("label",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"0.875rem",fontWeight:"500",display:"flex",alignItems:"center",gap:"0.5rem"},children:[At.jsx("svg",{viewBox:"0 0 24 24",style:{width:"16px",height:"16px",fill:"currentColor"},children:At.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})}),"AI Model"]}),At.jsx(o_,{options:p,value:c,onChange:d,icon:s_})]})]}),At.jsx("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",position:"relative"},children:At.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-start",position:"relative",backgroundColor:"#1a1a1a",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",padding:"0.75rem",transition:"all 0.2s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)","&:focus-within":{borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.15)"}},children:[At.jsx("textarea",{value:s,onChange:C=>t(C.target.value),placeholder:`Describe your shader for a ${h}...`,rows:3,onKeyDown:x,disabled:r,style:{flex:1,backgroundColor:"transparent",border:"none",color:"#ffffff",fontSize:"0.875rem",resize:"none",outline:"none",fontFamily:"inherit",minHeight:"72px",padding:0,margin:0,lineHeight:"1.5",opacity:r?.6:1,"&::placeholder":{color:"rgba(255, 255, 255, 0.4)"}}}),At.jsx("button",{type:"submit",style:{backgroundColor:"transparent",border:"none",padding:"0.5rem",cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",opacity:s&&!r?1:.5,transition:"all 0.2s ease",borderRadius:"6px","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}},children:r?At.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[At.jsx("span",{className:"spinner",style:{width:16,height:16,border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid #fff",borderRadius:"50%",display:"inline-block",animation:"spin 1s linear infinite"}}),At.jsx("span",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"0.75rem",fontWeight:"500",whiteSpace:"nowrap"},children:"Generating..."})]}):At.jsx("svg",{viewBox:"0 0 24 24",style:{width:"20px",height:"20px",fill:"currentColor"},children:At.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})})]})}),At.jsxs("button",{onClick:M,style:A,disabled:!l,children:[At.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:18,height:18},children:At.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})}),"Export Shader"]}),At.jsx("style",{children:`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .dropdown-header:hover {
          background-color: #2a2a2a !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .dropdown-item:hover {
          background-color: #2a2a2a !important;
          transform: translateX(4px);
        }

        .dropdown-item.selected {
          background-color: #2a2a2a !important;
        }

        .dropdown-item.disabled:hover {
          background-color: transparent !important;
          transform: none;
        }

        .select-arrow.rotated {
          transform: rotate(180deg);
        }

        .dropdown-menu.open {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .dropdown-menu::-webkit-scrollbar {
          width: 8px;
        }

        .dropdown-menu::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .dropdown-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .dropdown-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `})]})}function mS(s,t,i){return t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function l_(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function u_(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?l_(Object(i),!0).forEach(function(r){mS(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):l_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function gS(s,t){if(s==null)return{};var i={},r=Object.keys(s),l,c;for(c=0;c<r.length;c++)l=r[c],!(t.indexOf(l)>=0)&&(i[l]=s[l]);return i}function _S(s,t){if(s==null)return{};var i=gS(s,t),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function vS(s,t){return xS(s)||SS(s,t)||yS(s,t)||MS()}function xS(s){if(Array.isArray(s))return s}function SS(s,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(s)))){var i=[],r=!0,l=!1,c=void 0;try{for(var d=s[Symbol.iterator](),h;!(r=(h=d.next()).done)&&(i.push(h.value),!(t&&i.length===t));r=!0);}catch(m){l=!0,c=m}finally{try{!r&&d.return!=null&&d.return()}finally{if(l)throw c}}return i}}function yS(s,t){if(s){if(typeof s=="string")return c_(s,t);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c_(s,t)}}function c_(s,t){(t==null||t>s.length)&&(t=s.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=s[i];return r}function MS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ES(s,t,i){return t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function f_(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function d_(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?f_(Object(i),!0).forEach(function(r){ES(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):f_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function bS(){for(var s=arguments.length,t=new Array(s),i=0;i<s;i++)t[i]=arguments[i];return function(r){return t.reduceRight(function(l,c){return c(l)},r)}}function Ro(s){return function t(){for(var i=this,r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return l.length>=s.length?s.apply(this,l):function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];return t.apply(i,[].concat(l,h))}}}function Cu(s){return{}.toString.call(s).includes("Object")}function TS(s){return!Object.keys(s).length}function Do(s){return typeof s=="function"}function AS(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function RS(s,t){return Cu(t)||Fa("changeType"),Object.keys(t).some(function(i){return!AS(s,i)})&&Fa("changeField"),t}function CS(s){Do(s)||Fa("selectorType")}function wS(s){Do(s)||Cu(s)||Fa("handlerType"),Cu(s)&&Object.values(s).some(function(t){return!Do(t)})&&Fa("handlersType")}function DS(s){s||Fa("initialIsRequired"),Cu(s)||Fa("initialType"),TS(s)&&Fa("initialContent")}function US(s,t){throw new Error(s[t]||s.default)}var LS={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Fa=Ro(US)(LS),Ql={changes:RS,selector:CS,handler:wS,initial:DS};function NS(s){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ql.initial(s),Ql.handler(t);var i={current:s},r=Ro(zS)(i,t),l=Ro(PS)(i),c=Ro(Ql.changes)(s),d=Ro(OS)(i);function h(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Ql.selector(p),p(i.current)}function m(p){bS(r,l,c,d)(p)}return[h,m]}function OS(s,t){return Do(t)?t(s.current):t}function PS(s,t){return s.current=d_(d_({},s.current),t),t}function zS(s,t,i){return Do(t)?t(s.current):Object.keys(i).forEach(function(r){var l;return(l=t[r])===null||l===void 0?void 0:l.call(t,s.current[r])}),i}var BS={create:NS},IS={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function FS(s){return function t(){for(var i=this,r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return l.length>=s.length?s.apply(this,l):function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];return t.apply(i,[].concat(l,h))}}}function HS(s){return{}.toString.call(s).includes("Object")}function GS(s){return s||h_("configIsRequired"),HS(s)||h_("configType"),s.urls?(VS(),{paths:{vs:s.urls.monacoBase}}):s}function VS(){console.warn(m0.deprecation)}function kS(s,t){throw new Error(s[t]||s.default)}var m0={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},h_=FS(kS)(m0),XS={config:GS},WS=function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return function(l){return i.reduceRight(function(c,d){return d(c)},l)}};function g0(s,t){return Object.keys(t).forEach(function(i){t[i]instanceof Object&&s[i]&&Object.assign(t[i],g0(s[i],t[i]))}),u_(u_({},s),t)}var qS={type:"cancelation",msg:"operation is manually canceled"};function Xf(s){var t=!1,i=new Promise(function(r,l){s.then(function(c){return t?l(qS):r(c)}),s.catch(l)});return i.cancel=function(){return t=!0},i}var YS=BS.create({config:IS,isInitialized:!1,resolve:null,reject:null,monaco:null}),_0=vS(YS,2),Po=_0[0],Lu=_0[1];function jS(s){var t=XS.config(s),i=t.monaco,r=_S(t,["monaco"]);Lu(function(l){return{config:g0(l.config,r),monaco:i}})}function ZS(){var s=Po(function(t){var i=t.monaco,r=t.isInitialized,l=t.resolve;return{monaco:i,isInitialized:r,resolve:l}});if(!s.isInitialized){if(Lu({isInitialized:!0}),s.monaco)return s.resolve(s.monaco),Xf(Wf);if(window.monaco&&window.monaco.editor)return v0(window.monaco),s.resolve(window.monaco),Xf(Wf);WS(KS,JS)($S)}return Xf(Wf)}function KS(s){return document.body.appendChild(s)}function QS(s){var t=document.createElement("script");return s&&(t.src=s),t}function JS(s){var t=Po(function(r){var l=r.config,c=r.reject;return{config:l,reject:c}}),i=QS("".concat(t.config.paths.vs,"/loader.js"));return i.onload=function(){return s()},i.onerror=t.reject,i}function $S(){var s=Po(function(i){var r=i.config,l=i.resolve,c=i.reject;return{config:r,resolve:l,reject:c}}),t=window.require;t.config(s.config),t(["vs/editor/editor.main"],function(i){v0(i),s.resolve(i)},function(i){s.reject(i)})}function v0(s){Po().monaco||Lu({monaco:s})}function ty(){return Po(function(s){var t=s.monaco;return t})}var Wf=new Promise(function(s,t){return Lu({resolve:s,reject:t})}),x0={config:jS,init:ZS,__getMonacoInstance:ty},ey={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},qf=ey,ny={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},iy=ny;function ay({children:s}){return gs.createElement("div",{style:iy.container},s)}var ry=ay,sy=ry;function oy({width:s,height:t,isEditorReady:i,loading:r,_ref:l,className:c,wrapperProps:d}){return gs.createElement("section",{style:{...qf.wrapper,width:s,height:t},...d},!i&&gs.createElement(sy,null,r),gs.createElement("div",{ref:l,style:{...qf.fullWidth,...!i&&qf.hide},className:c}))}var ly=oy,S0=Wt.memo(ly);function uy(s){Wt.useEffect(s,[])}var y0=uy;function cy(s,t,i=!0){let r=Wt.useRef(!0);Wt.useEffect(r.current||!i?()=>{r.current=!1}:s,t)}var Qn=cy;function wo(){}function ps(s,t,i,r){return fy(s,r)||dy(s,t,i,r)}function fy(s,t){return s.editor.getModel(M0(s,t))}function dy(s,t,i,r){return s.editor.createModel(t,i,r?M0(s,r):void 0)}function M0(s,t){return s.Uri.parse(t)}function hy({original:s,modified:t,language:i,originalLanguage:r,modifiedLanguage:l,originalModelPath:c,modifiedModelPath:d,keepCurrentOriginalModel:h=!1,keepCurrentModifiedModel:m=!1,theme:p="light",loading:g="Loading...",options:v={},height:x="100%",width:M="100%",className:A,wrapperProps:C={},beforeMount:y=wo,onMount:_=wo}){let[P,O]=Wt.useState(!1),[D,I]=Wt.useState(!0),F=Wt.useRef(null),B=Wt.useRef(null),Y=Wt.useRef(null),w=Wt.useRef(_),T=Wt.useRef(y),G=Wt.useRef(!1);y0(()=>{let $=x0.init();return $.then(N=>(B.current=N)&&I(!1)).catch(N=>(N==null?void 0:N.type)!=="cancelation"&&console.error("Monaco initialization: error:",N)),()=>F.current?ft():$.cancel()}),Qn(()=>{if(F.current&&B.current){let $=F.current.getOriginalEditor(),N=ps(B.current,s||"",r||i||"text",c||"");N!==$.getModel()&&$.setModel(N)}},[c],P),Qn(()=>{if(F.current&&B.current){let $=F.current.getModifiedEditor(),N=ps(B.current,t||"",l||i||"text",d||"");N!==$.getModel()&&$.setModel(N)}},[d],P),Qn(()=>{let $=F.current.getModifiedEditor();$.getOption(B.current.editor.EditorOption.readOnly)?$.setValue(t||""):t!==$.getValue()&&($.executeEdits("",[{range:$.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),$.pushUndoStop())},[t],P),Qn(()=>{var $,N;(N=($=F.current)==null?void 0:$.getModel())==null||N.original.setValue(s||"")},[s],P),Qn(()=>{let{original:$,modified:N}=F.current.getModel();B.current.editor.setModelLanguage($,r||i||"text"),B.current.editor.setModelLanguage(N,l||i||"text")},[i,r,l],P),Qn(()=>{var $;($=B.current)==null||$.editor.setTheme(p)},[p],P),Qn(()=>{var $;($=F.current)==null||$.updateOptions(v)},[v],P);let rt=Wt.useCallback(()=>{var X;if(!B.current)return;T.current(B.current);let $=ps(B.current,s||"",r||i||"text",c||""),N=ps(B.current,t||"",l||i||"text",d||"");(X=F.current)==null||X.setModel({original:$,modified:N})},[i,t,l,s,r,c,d]),et=Wt.useCallback(()=>{var $;!G.current&&Y.current&&(F.current=B.current.editor.createDiffEditor(Y.current,{automaticLayout:!0,...v}),rt(),($=B.current)==null||$.editor.setTheme(p),O(!0),G.current=!0)},[v,p,rt]);Wt.useEffect(()=>{P&&w.current(F.current,B.current)},[P]),Wt.useEffect(()=>{!D&&!P&&et()},[D,P,et]);function ft(){var N,X,k,St;let $=(N=F.current)==null?void 0:N.getModel();h||((X=$==null?void 0:$.original)==null||X.dispose()),m||((k=$==null?void 0:$.modified)==null||k.dispose()),(St=F.current)==null||St.dispose()}return gs.createElement(S0,{width:M,height:x,isEditorReady:P,loading:g,_ref:Y,className:A,wrapperProps:C})}var py=hy;Wt.memo(py);function my(s){let t=Wt.useRef();return Wt.useEffect(()=>{t.current=s},[s]),t.current}var gy=my,Jl=new Map;function _y({defaultValue:s,defaultLanguage:t,defaultPath:i,value:r,language:l,path:c,theme:d="light",line:h,loading:m="Loading...",options:p={},overrideServices:g={},saveViewState:v=!0,keepCurrentModel:x=!1,width:M="100%",height:A="100%",className:C,wrapperProps:y={},beforeMount:_=wo,onMount:P=wo,onChange:O,onValidate:D=wo}){let[I,F]=Wt.useState(!1),[B,Y]=Wt.useState(!0),w=Wt.useRef(null),T=Wt.useRef(null),G=Wt.useRef(null),rt=Wt.useRef(P),et=Wt.useRef(_),ft=Wt.useRef(),$=Wt.useRef(r),N=gy(c),X=Wt.useRef(!1),k=Wt.useRef(!1);y0(()=>{let W=x0.init();return W.then(ct=>(w.current=ct)&&Y(!1)).catch(ct=>(ct==null?void 0:ct.type)!=="cancelation"&&console.error("Monaco initialization: error:",ct)),()=>T.current?U():W.cancel()}),Qn(()=>{var ct,gt,Q,pt;let W=ps(w.current,s||r||"",t||l||"",c||i||"");W!==((ct=T.current)==null?void 0:ct.getModel())&&(v&&Jl.set(N,(gt=T.current)==null?void 0:gt.saveViewState()),(Q=T.current)==null||Q.setModel(W),v&&((pt=T.current)==null||pt.restoreViewState(Jl.get(c))))},[c],I),Qn(()=>{var W;(W=T.current)==null||W.updateOptions(p)},[p],I),Qn(()=>{!T.current||r===void 0||(T.current.getOption(w.current.editor.EditorOption.readOnly)?T.current.setValue(r):r!==T.current.getValue()&&(k.current=!0,T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),T.current.pushUndoStop(),k.current=!1))},[r],I),Qn(()=>{var ct,gt;let W=(ct=T.current)==null?void 0:ct.getModel();W&&l&&((gt=w.current)==null||gt.editor.setModelLanguage(W,l))},[l],I),Qn(()=>{var W;h!==void 0&&((W=T.current)==null||W.revealLine(h))},[h],I),Qn(()=>{var W;(W=w.current)==null||W.editor.setTheme(d)},[d],I);let St=Wt.useCallback(()=>{var W;if(!(!G.current||!w.current)&&!X.current){et.current(w.current);let ct=c||i,gt=ps(w.current,r||s||"",t||l||"",ct||"");T.current=(W=w.current)==null?void 0:W.editor.create(G.current,{model:gt,automaticLayout:!0,...p},g),v&&T.current.restoreViewState(Jl.get(ct)),w.current.editor.setTheme(d),h!==void 0&&T.current.revealLine(h),F(!0),X.current=!0}},[s,t,i,r,l,c,p,g,v,d,h]);Wt.useEffect(()=>{I&&rt.current(T.current,w.current)},[I]),Wt.useEffect(()=>{!B&&!I&&St()},[B,I,St]),$.current=r,Wt.useEffect(()=>{var W,ct;I&&O&&((W=ft.current)==null||W.dispose(),ft.current=(ct=T.current)==null?void 0:ct.onDidChangeModelContent(gt=>{k.current||O(T.current.getValue(),gt)}))},[I,O]),Wt.useEffect(()=>{if(I){let W=w.current.editor.onDidChangeMarkers(ct=>{var Q;let gt=(Q=T.current.getModel())==null?void 0:Q.uri;if(gt&&ct.find(pt=>pt.path===gt.path)){let pt=w.current.editor.getModelMarkers({resource:gt});D==null||D(pt)}});return()=>{W==null||W.dispose()}}return()=>{}},[I,D]);function U(){var W,ct;(W=ft.current)==null||W.dispose(),x?v&&Jl.set(c,T.current.saveViewState()):(ct=T.current.getModel())==null||ct.dispose(),T.current.dispose()}return gs.createElement(S0,{width:M,height:A,isEditorReady:I,loading:m,_ref:G,className:C,wrapperProps:y})}var vy=_y,xy=Wt.memo(vy),Sy=xy;function yy({code:s,setCode:t}){return At.jsx("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:At.jsx(Sy,{height:"100%",language:"cpp",value:s,onChange:i=>t(i),theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,lineNumbers:"on",roundedSelection:!1,scrollbar:{vertical:"visible",horizontal:"visible",useShadows:!1,verticalScrollbarSize:10,horizontalScrollbarSize:10},renderLineHighlight:"all",readOnly:!1,automaticLayout:!0,fontFamily:"Menlo, Monaco, 'Courier New', monospace"}})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="176",My=0,p_=1,Ey=2,E0=1,by=2,ea=3,Va=0,Fn=1,mi=2,Ha=0,_s=1,m_=2,g_=3,__=4,Ty=5,_r=100,Ay=101,Ry=102,Cy=103,wy=104,Dy=200,Uy=201,Ly=202,Ny=203,bd=204,Td=205,Oy=206,Py=207,zy=208,By=209,Iy=210,Fy=211,Hy=212,Gy=213,Vy=214,Ad=0,Rd=1,Cd=2,xs=3,wd=4,Dd=5,Ud=6,Ld=7,b0=0,ky=1,Xy=2,Ga=0,Wy=1,qy=2,Yy=3,jy=4,Zy=5,Ky=6,Qy=7,T0=300,Ss=301,ys=302,Nd=303,Od=304,Nu=306,Pd=1e3,xr=1001,zd=1002,vi=1003,Jy=1004,$l=1005,Ai=1006,Yf=1007,Sr=1008,wi=1009,A0=1010,R0=1011,Uo=1012,hh=1013,yr=1014,na=1015,zo=1016,ph=1017,mh=1018,Lo=1020,C0=35902,w0=1021,D0=1022,_i=1023,No=1026,Oo=1027,U0=1028,gh=1029,L0=1030,_h=1031,vh=1033,yu=33776,Mu=33777,Eu=33778,bu=33779,Bd=35840,Id=35841,Fd=35842,Hd=35843,Gd=36196,Vd=37492,kd=37496,Xd=37808,Wd=37809,qd=37810,Yd=37811,jd=37812,Zd=37813,Kd=37814,Qd=37815,Jd=37816,$d=37817,th=37818,eh=37819,nh=37820,ih=37821,Tu=36492,ah=36494,rh=36495,N0=36283,sh=36284,oh=36285,lh=36286,$y=3200,tM=3201,eM=0,nM=1,Ia="",si="srgb",Ms="srgb-linear",wu="linear",ze="srgb",ts=7680,v_=519,iM=512,aM=513,rM=514,O0=515,sM=516,oM=517,lM=518,uM=519,x_=35044,S_="300 es",ia=2e3,Du=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,uh=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function cM(s,t){return(s%t+t)%t}function Zf(s,t,i){return(1-i)*s+i*t}function Mo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,c,d,h,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],M=r[5],A=r[8],C=l[0],y=l[3],_=l[6],P=l[1],O=l[4],D=l[7],I=l[2],F=l[5],B=l[8];return c[0]=d*C+h*P+m*I,c[3]=d*y+h*O+m*F,c[6]=d*_+h*D+m*B,c[1]=p*C+g*P+v*I,c[4]=p*y+g*O+v*F,c[7]=p*_+g*D+v*B,c[2]=x*C+M*P+A*I,c[5]=x*y+M*O+A*F,c[8]=x*_+M*D+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=g*d-h*p,x=h*m-g*c,M=p*c-d*m,A=i*v+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*p-g*r)*C,t[2]=(h*r-l*d)*C,t[3]=x*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-h*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new se;function P0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Uu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fM(){const s=Uu("canvas");return s.style.display="block",s}const y_={};function Au(s){s in y_||(y_[s]=!0,console.warn(s))}function dM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function hM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const M_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===ze&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ze&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?wu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ms]:{primaries:t,whitePoint:r,transfer:wu,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Te=mM();function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class gM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{es===void 0&&(es=Uu("canvas")),es.width=t.width,es.height=t.height;const l=es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=aa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Qf(l[d].image)):c.push(Qf(l[d]))}else c=Qf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Qf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class Hn extends bs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=xr,l=xr,c=Ai,d=Sr,h=_i,m=wi,p=Hn.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Bo(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==T0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=T0;Hn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],A=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,I=(_+1)/2,F=(g+x)/4,B=(v+C)/4,Y=(A+y)/4;return O>D&&O>I?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=F/r,c=B/r):D>I?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=Y/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=B/c,l=Y/c),this.set(r,l,c,i),this}let P=Math.sqrt((y-A)*(y-A)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-A)/P,this.y=(v-C)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends bs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new Hn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new xh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends xM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class z0 extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=c[d+0],M=c[d+1],A=c[d+2],C=c[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=x,t[i+1]=M,t[i+2]=A,t[i+3]=C;return}if(v!==C||m!==x||p!==M||g!==A){let y=1-h;const _=m*x+p*M+g*A+v*C,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const I=Math.sqrt(O),F=Math.atan2(I,_*P);y=Math.sin(y*F)/I,h=Math.sin(h*F)/I}const D=h*P;if(m=m*y+x*D,p=p*y+M*D,g=g*y+A*D,v=v*y+C*D,y===1-h){const I=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=I,p*=I,g*=I,v*=I}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[d],x=c[d+1],M=c[d+2],A=c[d+3];return t[i]=h*A+g*v+m*M-p*x,t[i+1]=m*A+g*x+p*v-h*M,t[i+2]=p*A+g*M+h*x-m*v,t[i+3]=g*A-h*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),x=m(r/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"YXZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"ZXY":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"ZYX":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"YZX":this._x=x*g*v+p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v-x*M*A;break;case"XZY":this._x=x*g*v-p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=r+h+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,i=0,r=0){lt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),g=2*(h*i-c*l),v=2*(c*r-d*i);return this.x=i+m*p+d*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new lt,b_=new Io;class Fo{constructor(t=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,di):di.fromBufferAttribute(c,d),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(t.matrixWorld),this.union(tu)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),eu.subVectors(this.max,Eo),ns.subVectors(t.a,Eo),is.subVectors(t.b,Eo),as.subVectors(t.c,Eo),La.subVectors(is,ns),Na.subVectors(as,is),ur.subVectors(ns,as);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-ur.z,ur.y,La.z,0,-La.x,Na.z,0,-Na.x,ur.z,0,-ur.x,-La.y,La.x,0,-Na.y,Na.x,0,-ur.y,ur.x,0];return!$f(i,ns,is,as,eu)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ns,is,as,eu))?!1:(nu.crossVectors(La,Na),i=[nu.x,nu.y,nu.z],$f(i,ns,is,as,eu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],di=new lt,tu=new Fo,ns=new lt,is=new lt,as=new lt,La=new lt,Na=new lt,ur=new lt,Eo=new lt,eu=new lt,nu=new lt,cr=new lt;function $f(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){cr.fromArray(s,c);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const yM=new Fo,bo=new lt,td=new lt;class Sh{constructor(t=new lt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):yM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(td)),this.expandByPoint(bo.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new lt,ed=new lt,iu=new lt,Oa=new lt,nd=new lt,au=new lt,id=new lt;class MM{constructor(t=new lt,i=new lt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Qi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ed.copy(t).add(i).multiplyScalar(.5),iu.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(ed);const c=t.distanceTo(i)*.5,d=-this.direction.dot(iu),h=Oa.dot(this.direction),m=-Oa.dot(iu),p=Oa.lengthSq(),g=Math.abs(1-d*d);let v,x,M,A;if(g>0)if(v=d*m-h,x=d*h-m,A=c*g,v>=0)if(x>=-A)if(x<=A){const C=1/g;v*=C,x*=C,M=v*(v+d*x+2*h)+x*(d*v+x+2*m)+p}else x=c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-d*c+h)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(d*c+h)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=d>0?-c:c,v=Math.max(0,-(d*x+h)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ed).addScaledVector(iu,x),M}intersectSphere(t,i){Qi.subVectors(t.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(h=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,i,r,l,c){nd.subVectors(i,t),au.subVectors(r,t),id.crossVectors(nd,au);let d=this.direction.dot(id),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(au.crossVectors(Oa,au));if(m<0)return null;const p=h*this.direction.dot(nd.cross(Oa));if(p<0||m+p>d)return null;const g=-h*Oa.dot(id);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,d,h,m,p,g,v,x,M,A,C,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,g,v,x,M,A,C,y)}set(t,i,r,l,c,d,h,m,p,g,v,x,M,A,C,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=A,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),c=1/rs.setFromMatrixColumn(t,1).length(),d=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,M=d*v,A=h*g,C=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=x-C*p,i[9]=-h*m,i[2]=C-x*p,i[6]=A+M*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,A=p*g,C=p*v;i[0]=x+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=M*h-A,i[6]=C+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,A=p*g,C=p*v;i[0]=x-C*h,i[4]=-d*v,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,M=d*v,A=h*g,C=h*v;i[0]=m*g,i[4]=A*p-M,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*g,i[4]=C-x*v,i[8]=A*v+M,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+A,i[10]=x-C*v}else if(t.order==="XZY"){const x=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+C,i[5]=d*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=h*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,bM)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Pa.crossVectors(r,Zn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Pa.crossVectors(r,Zn)),Pa.normalize(),ru.crossVectors(Zn,Pa),l[0]=Pa.x,l[4]=ru.x,l[8]=Zn.x,l[1]=Pa.y,l[5]=ru.y,l[9]=Zn.y,l[2]=Pa.z,l[6]=ru.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],M=r[13],A=r[2],C=r[6],y=r[10],_=r[14],P=r[3],O=r[7],D=r[11],I=r[15],F=l[0],B=l[4],Y=l[8],w=l[12],T=l[1],G=l[5],rt=l[9],et=l[13],ft=l[2],$=l[6],N=l[10],X=l[14],k=l[3],St=l[7],U=l[11],W=l[15];return c[0]=d*F+h*T+m*ft+p*k,c[4]=d*B+h*G+m*$+p*St,c[8]=d*Y+h*rt+m*N+p*U,c[12]=d*w+h*et+m*X+p*W,c[1]=g*F+v*T+x*ft+M*k,c[5]=g*B+v*G+x*$+M*St,c[9]=g*Y+v*rt+x*N+M*U,c[13]=g*w+v*et+x*X+M*W,c[2]=A*F+C*T+y*ft+_*k,c[6]=A*B+C*G+y*$+_*St,c[10]=A*Y+C*rt+y*N+_*U,c[14]=A*w+C*et+y*X+_*W,c[3]=P*F+O*T+D*ft+I*k,c[7]=P*B+O*G+D*$+I*St,c[11]=P*Y+O*rt+D*N+I*U,c[15]=P*w+O*et+D*X+I*W,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],A=t[3],C=t[7],y=t[11],_=t[15];return A*(+c*m*v-l*p*v-c*h*x+r*p*x+l*h*M-r*m*M)+C*(+i*m*M-i*p*x+c*d*x-l*d*M+l*p*g-c*m*g)+y*(+i*p*v-i*h*M-c*d*v+r*d*M+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*x+l*d*v-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],A=t[12],C=t[13],y=t[14],_=t[15],P=v*y*p-C*x*p+C*m*M-h*y*M-v*m*_+h*x*_,O=A*x*p-g*y*p-A*m*M+d*y*M+g*m*_-d*x*_,D=g*C*p-A*v*p+A*h*M-d*C*M-g*h*_+d*v*_,I=A*v*m-g*C*m-A*h*x+d*C*x+g*h*y-d*v*y,F=i*P+r*O+l*D+c*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return t[0]=P*B,t[1]=(C*x*c-v*y*c-C*l*M+r*y*M+v*l*_-r*x*_)*B,t[2]=(h*y*c-C*m*c+C*l*p-r*y*p-h*l*_+r*m*_)*B,t[3]=(v*m*c-h*x*c-v*l*p+r*x*p+h*l*M-r*m*M)*B,t[4]=O*B,t[5]=(g*y*c-A*x*c+A*l*M-i*y*M-g*l*_+i*x*_)*B,t[6]=(A*m*c-d*y*c-A*l*p+i*y*p+d*l*_-i*m*_)*B,t[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*M+i*m*M)*B,t[8]=D*B,t[9]=(A*v*c-g*C*c-A*r*M+i*C*M+g*r*_-i*v*_)*B,t[10]=(d*C*c-A*h*c+A*r*p-i*C*p-d*r*_+i*h*_)*B,t[11]=(g*h*c-d*v*c-g*r*p+i*v*p+d*r*M-i*h*M)*B,t[12]=I*B,t[13]=(g*C*l-A*v*l+A*r*x-i*C*x-g*r*y+i*v*y)*B,t[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*B,t[15]=(d*v*l-g*h*l+g*r*m-i*v*m-d*r*x+i*h*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,v=h+h,x=c*p,M=c*g,A=c*v,C=d*g,y=d*v,_=h*v,P=m*p,O=m*g,D=m*v,I=r.x,F=r.y,B=r.z;return l[0]=(1-(C+_))*I,l[1]=(M+D)*I,l[2]=(A-O)*I,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(x+_))*F,l[6]=(y+P)*F,l[7]=0,l[8]=(A+O)*B,l[9]=(y-P)*B,l[10]=(1-(x+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=rs.set(l[0],l[1],l[2]).length();const d=rs.set(l[4],l[5],l[6]).length(),h=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const p=1/c,g=1/d,v=1/h;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=ia){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let M,A;if(h===ia)M=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Du)M=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=ia){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(d-c),x=(i+t)*p,M=(r+l)*g;let A,C;if(h===ia)A=(d+c)*v,C=-2*v;else if(h===Du)A=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new lt,hi=new Qe,EM=new lt(0,0,0),bM=new lt(1,1,1),Pa=new lt,ru=new lt,Zn=new lt,T_=new Qe,A_=new Io;class ra{constructor(t=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TM=0;const R_=new lt,ss=new Io,Ji=new Qe,su=new lt,To=new lt,AM=new lt,RM=new Io,C_=new lt(1,0,0),w_=new lt(0,1,0),D_=new lt(0,0,1),U_={type:"added"},CM={type:"removed"},os={type:"childadded",child:null},ad={type:"childremoved",child:null};class wn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new lt,i=new ra,r=new Io,l=new lt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new se}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(C_,t)}rotateY(t){return this.rotateOnAxis(w_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(C_,t)}translateY(t){return this.translateOnAxis(w_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?su.copy(t):su.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(To,su,this.up):Ji.lookAt(su,To,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Ji),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(CM),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,RM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new lt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new lt,$i=new lt,rd=new lt,ta=new lt,ls=new lt,us=new lt,L_=new lt,sd=new lt,od=new lt,ld=new lt,ud=new Ke,cd=new Ke,fd=new Ke;class gi{constructor(t=new lt,i=new lt,r=new lt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),pi.subVectors(t,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){pi.subVectors(l,i),$i.subVectors(r,i),rd.subVectors(t,i);const d=pi.dot(pi),h=pi.dot($i),m=pi.dot(rd),p=$i.dot($i),g=$i.dot(rd),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-h*g)*x,A=(d*g-h*m)*x;return c.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ta.x),m.addScaledVector(d,ta.y),m.addScaledVector(h,ta.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return ud.setScalar(0),cd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(t,i),cd.fromBufferAttribute(t,r),fd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(ud,c.x),d.addScaledVector(cd,c.y),d.addScaledVector(fd,c.z),d}static isFrontFacing(t,i,r,l){return pi.subVectors(r,i),$i.subVectors(t,i),pi.cross($i).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),pi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;ls.subVectors(l,r),us.subVectors(c,r),sd.subVectors(t,r);const m=ls.dot(sd),p=us.dot(sd);if(m<=0&&p<=0)return i.copy(r);od.subVectors(t,l);const g=ls.dot(od),v=us.dot(od);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(ls,d);ld.subVectors(t,c);const M=ls.dot(ld),A=us.dot(ld);if(A>=0&&M<=A)return i.copy(c);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(us,h);const y=g*A-M*v;if(y<=0&&v-g>=0&&M-A>=0)return L_.subVectors(c,l),h=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(L_,h);const _=1/(y+C+x);return d=C*_,h=x*_,i.copy(r).addScaledVector(ls,d).addScaledVector(us,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},ou={h:0,s:0,l:0};function dd(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=cM(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=dd(d,c,t+1/3),this.g=dd(d,c,t),this.b=dd(d,c,t-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(t,i=si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=I0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Te.fromWorkingColorSpace(Cn.copy(this),t),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=si){Te.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(ou);const r=Zf(za.h,ou.h,i),l=Zf(za.s,ou.s,i),c=Zf(za.l,ou.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new De;De.NAMES=I0;let wM=0;class Ou extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=_s,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Td,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class F0 extends Ou{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new lt,lu=new Re;let DM=0;class li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=x_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(t),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==x_&&(t.usage=this.usage),t}}class H0 extends li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class G0 extends li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ci extends li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let UM=0;const ri=new Qe,hd=new wn,cs=new lt,Kn=new Fo,Ao=new Fo,_n=new lt;class ka extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P0(t)?G0:H0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ao.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Kn.min,Ao.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,Ao.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(Ao.min),Kn.expandByPoint(Ao.max))}Kn.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),m&&(cs.fromBufferAttribute(t,p),_n.add(cs)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<r.count;Y++)h[Y]=new lt,m[Y]=new lt;const p=new lt,g=new lt,v=new lt,x=new Re,M=new Re,A=new Re,C=new lt,y=new lt;function _(Y,w,T){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,T),x.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,w),A.fromBufferAttribute(c,T),g.sub(p),v.sub(p),M.sub(x),A.sub(x);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(G),h[Y].add(C),h[w].add(C),h[T].add(C),m[Y].add(y),m[w].add(y),m[T].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Y=0,w=P.length;Y<w;++Y){const T=P[Y],G=T.start,rt=T.count;for(let et=G,ft=G+rt;et<ft;et+=3)_(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const O=new lt,D=new lt,I=new lt,F=new lt;function B(Y){I.fromBufferAttribute(l,Y),F.copy(I);const w=h[Y];O.copy(w),O.sub(I.multiplyScalar(I.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[Y])<0?-1:1;d.setXYZW(Y,O.x,O.y,O.z,G)}for(let Y=0,w=P.length;Y<w;++Y){const T=P[Y],G=T.start,rt=T.count;for(let et=G,ft=G+rt;et<ft;et+=3)B(t.getX(et+0)),B(t.getX(et+1)),B(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new lt,c=new lt,d=new lt,h=new lt,m=new lt,p=new lt,g=new lt,v=new lt;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),C=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let M=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*g;for(let _=0;_<g;_++)x[A++]=p[M++]}return new li(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ka,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Qe,fr=new MM,uu=new Sh,O_=new lt,cu=new lt,fu=new lt,du=new lt,pd=new lt,hu=new lt,P_=new lt,pu=new lt;class Ri extends wn{constructor(t=new ka,i=new F0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){hu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&(pd.fromBufferAttribute(v,t),d?hu.addScaledVector(pd,g):hu.addScaledVector(pd.sub(i),g))}i.add(hu)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uu.copy(r.boundingSphere),uu.applyMatrix4(c),fr.copy(t.ray).recast(t.near),!(uu.containsPoint(fr.origin)===!1&&(fr.intersectSphere(uu,O_)===null||fr.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(N_.copy(c).invert(),fr.copy(t.ray).applyMatrix4(N_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=d[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const F=h.getX(D),B=h.getX(D+1),Y=h.getX(D+2);l=mu(this,_,t,r,p,g,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const P=h.getX(y),O=h.getX(y+1),D=h.getX(y+2);l=mu(this,d,t,r,p,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const y=x[A],_=d[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=O;D<I;D+=3){const F=D,B=D+1,Y=D+2;l=mu(this,_,t,r,p,g,v,F,B,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=A,_=C;y<_;y+=3){const P=y,O=y+1,D=y+2;l=mu(this,d,t,r,p,g,v,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function LM(s,t,i,r,l,c,d,h){let m;if(t.side===Fn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===Va,h),m===null)return null;pu.copy(h),pu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(pu);return p<i.near||p>i.far?null:{distance:p,point:pu.clone(),object:s}}function mu(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,cu),s.getVertexPosition(m,fu),s.getVertexPosition(p,du);const g=LM(s,t,i,r,cu,fu,du,P_);if(g){const v=new lt;gi.getBarycoord(P_,cu,fu,du,v),l&&(g.uv=gi.getInterpolatedAttribute(l,h,m,p,v,new Re)),c&&(g.uv1=gi.getInterpolatedAttribute(c,h,m,p,v,new Re)),d&&(g.normal=gi.getInterpolatedAttribute(d,h,m,p,v,new lt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new lt,materialIndex:0};gi.getNormal(cu,fu,du,x.normal),g.face=x,g.barycoord=v}return g}class Ts extends ka{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,t,d,c,0),A("z","y","x",1,-1,r,i,-t,d,c,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ci(p,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(v,2));function A(C,y,_,P,O,D,I,F,B,Y,w){const T=D/B,G=I/Y,rt=D/2,et=I/2,ft=F/2,$=B+1,N=Y+1;let X=0,k=0;const St=new lt;for(let U=0;U<N;U++){const W=U*G-et;for(let ct=0;ct<$;ct++){const gt=ct*T-rt;St[C]=gt*P,St[y]=W*O,St[_]=ft,p.push(St.x,St.y,St.z),St[C]=0,St[y]=0,St[_]=F>0?1:-1,g.push(St.x,St.y,St.z),v.push(ct/B),v.push(1-U/Y),X+=1}}for(let U=0;U<Y;U++)for(let W=0;W<B;W++){const ct=x+W+$*U,gt=x+W+$*(U+1),Q=x+(W+1)+$*(U+1),pt=x+(W+1)+$*U;m.push(ct,gt,pt),m.push(gt,Q,pt),k+=6}h.addGroup(M,k,w),M+=k,x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(s){const t={};for(let i=0;i<s.length;i++){const r=Es(s[i]);for(const l in r)t[l]=r[l]}return t}function NM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function V0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const OM={clone:Es,merge:Un};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ou{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=NM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class k0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new lt,z_=new Re,B_=new Re;class oi extends k0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,z_,B_),i.subVectors(B_,z_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,ds=1;class BM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(fs,ds,t,i);l.layers=this.layers,this.add(l);const c=new oi(fs,ds,t,i);c.layers=this.layers,this.add(c);const d=new oi(fs,ds,t,i);d.layers=this.layers,this.add(d);const h=new oi(fs,ds,t,i);h.layers=this.layers,this.add(h);const m=new oi(fs,ds,t,i);m.layers=this.layers,this.add(m);const p=new oi(fs,ds,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class X0 extends Hn{constructor(t=[],i=Ss,r,l,c,d,h,m,p,g){super(t,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IM extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new X0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ts(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ha});c.uniforms.tEquirect.value=i;const d=new Ri(l,c),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Ai),new BM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class gu extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class HM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const gd=new lt,GM=new lt,VM=new se;class mr{constructor(t=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=gd.subVectors(r,i).cross(GM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||VM.getNormalMatrix(t),l=this.coplanarPoint(gd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Sh,_u=new lt;class yh{constructor(t=new mr,i=new mr,r=new mr,l=new mr,c=new mr,d=new mr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ia){const r=this.planes,l=t.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],x=l[7],M=l[8],A=l[9],C=l[10],y=l[11],_=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(m-c,x-p,y-M,D-_).normalize(),r[1].setComponents(m+c,x+p,y+M,D+_).normalize(),r[2].setComponents(m+d,x+g,y+A,D+P).normalize(),r[3].setComponents(m-d,x-g,y-A,D-P).normalize(),r[4].setComponents(m-h,x-v,y-C,D-O).normalize(),i===ia)r[5].setComponents(m+h,x+v,y+C,D+O).normalize();else if(i===Du)r[5].setComponents(h,v,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(_u.x=l.normal.x>0?t.max.x:t.min.x,_u.y=l.normal.y>0?t.max.y:t.min.y,_u.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_u)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class W0 extends Hn{constructor(t,i,r=yr,l,c,d,h=vi,m=vi,p,g=No){if(g!==No&&g!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ho extends ka{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=t/h,x=i/m,M=[],A=[],C=[],y=[];for(let _=0;_<g;_++){const P=_*x-d;for(let O=0;O<p;O++){const D=O*v-c;A.push(D,-P,0),C.push(0,0,1),y.push(O/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const O=P+p*_,D=P+p*(_+1),I=P+1+p*(_+1),F=P+1+p*_;M.push(O,D,F),M.push(D,I,F)}this.setIndex(M),this.setAttribute("position",new Ci(A,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mh extends ka{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],v=new lt,x=new lt,M=[],A=[],C=[],y=[];for(let _=0;_<=r;_++){const P=[],O=_/r;let D=0;_===0&&d===0?D=.5/i:_===r&&m===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const F=I/i;v.x=-t*Math.cos(l+F*c)*Math.sin(d+O*h),v.y=t*Math.cos(d+O*h),v.z=t*Math.sin(l+F*c)*Math.sin(d+O*h),A.push(v.x,v.y,v.z),x.copy(v).normalize(),C.push(x.x,x.y,x.z),y.push(F+D,1-O),P.push(p++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const O=g[_][P+1],D=g[_][P],I=g[_+1][P],F=g[_+1][P+1];(_!==0||d>0)&&M.push(O,D,F),(_!==r-1||m<Math.PI)&&M.push(D,I,F)}this.setIndex(M),this.setAttribute("position",new Ci(A,3)),this.setAttribute("normal",new Ci(C,3)),this.setAttribute("uv",new Ci(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kM extends Ou{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Ou{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class q0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const _d=new Qe,I_=new lt,F_=new lt;class WM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;I_.setFromMatrixPosition(t.matrixWorld),i.position.copy(I_),F_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(F_),i.updateMatrixWorld(),_d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(_d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Y0 extends k0{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends WM{constructor(){super(new Y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends q0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class YM extends q0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class jM extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function G_(s,t,i,r){const l=ZM(r);switch(i){case w0:return s*t;case U0:return s*t/l.components*l.byteLength;case gh:return s*t/l.components*l.byteLength;case L0:return s*t*2/l.components*l.byteLength;case _h:return s*t*2/l.components*l.byteLength;case D0:return s*t*3/l.components*l.byteLength;case _i:return s*t*4/l.components*l.byteLength;case vh:return s*t*4/l.components*l.byteLength;case yu:case Mu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Eu:case bu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Id:case Hd:return Math.max(s,16)*Math.max(t,8)/4;case Bd:case Fd:return Math.max(s,8)*Math.max(t,8)/2;case Gd:case Vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Tu:case ah:case rh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case N0:case sh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oh:case lh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZM(s){switch(s){case wi:case A0:return{byteLength:1,components:1};case Uo:case R0:case zo:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case yr:case hh:case na:return{byteLength:4,components:1};case C0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j0(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function KM(s){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<v.length;M++){const A=v[x],C=v[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,A=v.length;M<A;M++){const C=v[M];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ME=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,C1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:QM,alphahash_pars_fragment:JM,alphamap_fragment:$M,alphamap_pars_fragment:tE,alphatest_fragment:eE,alphatest_pars_fragment:nE,aomap_fragment:iE,aomap_pars_fragment:aE,batching_pars_vertex:rE,batching_vertex:sE,begin_vertex:oE,beginnormal_vertex:lE,bsdfs:uE,iridescence_fragment:cE,bumpmap_pars_fragment:fE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:pE,clipping_planes_vertex:mE,color_fragment:gE,color_pars_fragment:_E,color_pars_vertex:vE,color_vertex:xE,common:SE,cube_uv_reflection_fragment:yE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:bE,emissivemap_fragment:TE,emissivemap_pars_fragment:AE,colorspace_fragment:RE,colorspace_pars_fragment:CE,envmap_fragment:wE,envmap_common_pars_fragment:DE,envmap_pars_fragment:UE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:kE,envmap_vertex:NE,fog_vertex:OE,fog_pars_vertex:PE,fog_fragment:zE,fog_pars_fragment:BE,gradientmap_pars_fragment:IE,lightmap_pars_fragment:FE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:VE,lights_toon_fragment:XE,lights_toon_pars_fragment:WE,lights_phong_fragment:qE,lights_phong_pars_fragment:YE,lights_physical_fragment:jE,lights_physical_pars_fragment:ZE,lights_fragment_begin:KE,lights_fragment_maps:QE,lights_fragment_end:JE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:rb,map_particle_pars_fragment:sb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:ub,morphcolor_vertex:cb,morphnormal_vertex:fb,morphtarget_pars_vertex:db,morphtarget_vertex:hb,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Eb,opaque_fragment:bb,packing:Tb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:zb,skinning_pars_vertex:Bb,skinning_vertex:Ib,skinnormal_vertex:Fb,specularmap_fragment:Hb,specularmap_pars_fragment:Gb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Wb,uv_pars_fragment:qb,uv_pars_vertex:Yb,uv_vertex:jb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:a1,distanceRGBA_frag:r1,equirect_vert:s1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:u1,meshbasic_vert:c1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:x1,meshphysical_vert:S1,meshphysical_frag:y1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:b1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:w1},Dt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new De(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new De(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Dt.common,Dt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Dt.lights,Dt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const vu={r:0,b:0,g:0},hr=new ra,D1=new Qe;function U1(s,t,i,r,l,c,d){const h=new De(0);let m=c===!0?0:1,p,g,v=null,x=0,M=null;function A(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function C(O){let D=!1;const I=A(O);I===null?_(h,m):I&&I.isColor&&(_(I,1),D=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(O,D){const I=A(D);I&&(I.isCubeTexture||I.mapping===Nu)?(g===void 0&&(g=new Ri(new Ts(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Es(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(D.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(hr)),g.material.toneMapped=Te.getTransfer(I.colorSpace)!==ze,(v!==I||x!==I.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ri(new Ho(2,2),new Di({name:"BackgroundMaterial",uniforms:Es(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Te.getTransfer(I.colorSpace)!==ze,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=I,x=I.version,M=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(vu,V0(s)),r.buffers.color.setClear(vu.r,vu.g,vu.b,D,d)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,D=1){h.set(O),m=D,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:C,addToRenderList:y,dispose:P}}function L1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(T,G,rt,et,ft){let $=!1;const N=v(et,rt,G);c!==N&&(c=N,p(c.object)),$=M(T,et,rt,ft),$&&A(T,et,rt,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,D(T,G,rt,et),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(T){return s.bindVertexArray(T)}function g(T){return s.deleteVertexArray(T)}function v(T,G,rt){const et=rt.wireframe===!0;let ft=r[T.id];ft===void 0&&(ft={},r[T.id]=ft);let $=ft[G.id];$===void 0&&($={},ft[G.id]=$);let N=$[et];return N===void 0&&(N=x(m()),$[et]=N),N}function x(T){const G=[],rt=[],et=[];for(let ft=0;ft<i;ft++)G[ft]=0,rt[ft]=0,et[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:rt,attributeDivisors:et,object:T,attributes:{},index:null}}function M(T,G,rt,et){const ft=c.attributes,$=G.attributes;let N=0;const X=rt.getAttributes();for(const k in X)if(X[k].location>=0){const U=ft[k];let W=$[k];if(W===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(W=T.instanceColor)),U===void 0||U.attribute!==W||W&&U.data!==W.data)return!0;N++}return c.attributesNum!==N||c.index!==et}function A(T,G,rt,et){const ft={},$=G.attributes;let N=0;const X=rt.getAttributes();for(const k in X)if(X[k].location>=0){let U=$[k];U===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const W={};W.attribute=U,U&&U.data&&(W.data=U.data),ft[k]=W,N++}c.attributes=ft,c.attributesNum=N,c.index=et}function C(){const T=c.newAttributes;for(let G=0,rt=T.length;G<rt;G++)T[G]=0}function y(T){_(T,0)}function _(T,G){const rt=c.newAttributes,et=c.enabledAttributes,ft=c.attributeDivisors;rt[T]=1,et[T]===0&&(s.enableVertexAttribArray(T),et[T]=1),ft[T]!==G&&(s.vertexAttribDivisor(T,G),ft[T]=G)}function P(){const T=c.newAttributes,G=c.enabledAttributes;for(let rt=0,et=G.length;rt<et;rt++)G[rt]!==T[rt]&&(s.disableVertexAttribArray(rt),G[rt]=0)}function O(T,G,rt,et,ft,$,N){N===!0?s.vertexAttribIPointer(T,G,rt,ft,$):s.vertexAttribPointer(T,G,rt,et,ft,$)}function D(T,G,rt,et){C();const ft=et.attributes,$=rt.getAttributes(),N=G.defaultAttributeValues;for(const X in $){const k=$[X];if(k.location>=0){let St=ft[X];if(St===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(St=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(St=T.instanceColor)),St!==void 0){const U=St.normalized,W=St.itemSize,ct=t.get(St);if(ct===void 0)continue;const gt=ct.buffer,Q=ct.type,pt=ct.bytesPerElement,yt=Q===s.INT||Q===s.UNSIGNED_INT||St.gpuType===hh;if(St.isInterleavedBufferAttribute){const Tt=St.data,Ut=Tt.stride,oe=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<k.locationSize;Kt++)_(k.location+Kt,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Kt=0;Kt<k.locationSize;Kt++)y(k.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Kt=0;Kt<k.locationSize;Kt++)O(k.location+Kt,W/k.locationSize,Q,U,Ut*pt,(oe+W/k.locationSize*Kt)*pt,yt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<k.locationSize;Tt++)_(k.location+Tt,St.meshPerAttribute);T.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)y(k.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Tt=0;Tt<k.locationSize;Tt++)O(k.location+Tt,W/k.locationSize,Q,U,W*pt,W/k.locationSize*Tt*pt,yt)}}else if(N!==void 0){const U=N[X];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(k.location,U);break;case 3:s.vertexAttrib3fv(k.location,U);break;case 4:s.vertexAttrib4fv(k.location,U);break;default:s.vertexAttrib1fv(k.location,U)}}}}P()}function I(){Y();for(const T in r){const G=r[T];for(const rt in G){const et=G[rt];for(const ft in et)g(et[ft].object),delete et[ft];delete G[rt]}delete r[T]}}function F(T){if(r[T.id]===void 0)return;const G=r[T.id];for(const rt in G){const et=G[rt];for(const ft in et)g(et[ft].object),delete et[ft];delete G[rt]}delete r[T.id]}function B(T){for(const G in r){const rt=r[G];if(rt[T.id]===void 0)continue;const et=rt[T.id];for(const ft in et)g(et[ft].object),delete et[ft];delete rt[T.id]}}function Y(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function N1(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,r,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],g[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function O1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==_i&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const Y=B===zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==wi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==na&&!Y)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:I,maxSamples:F}}function P1(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new mr,h=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||A===null||A.length===0||c&&!y)c?g(null):p();else{const P=c?0:r,O=P*4;let D=_.clippingState||null;m.value=D,D=g(A,x,O,M);for(let I=0;I!==O;++I)D[I]=i[I];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,M,A){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const _=M+C*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==C;++O,D+=4)d.copy(v[O]).applyMatrix4(P,h),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function z1(s){let t=new WeakMap;function i(d,h){return h===Nd?d.mapping=Ss:h===Od&&(d.mapping=ys),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Od)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new IM(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ms=4,V_=[.125,.215,.35,.446,.526,.582],vr=20,vd=new Y0,k_=new De;let xd=null,Sd=0,yd=0,Md=!1;const gr=(1+Math.sqrt(5))/2,hs=1/gr,X_=[new lt(-gr,hs,0),new lt(gr,hs,0),new lt(-hs,0,gr),new lt(hs,0,gr),new lt(0,gr,-hs),new lt(0,gr,hs),new lt(-1,1,-1),new lt(1,1,-1),new lt(-1,1,1),new lt(1,1,1)],B1=new lt;class W_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=B1}=c;xd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xd,Sd,yd),this._renderer.xr.enabled=Md,t.scissorTest=!1,xu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ss||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:zo,format:_i,colorSpace:Ms,depthBuffer:!1},l=q_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I1(c)),this._blurMaterial=F1(c,t,i)}return l}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,vd)}_sceneToCubeUV(t,i,r,l,c){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(k_),v.toneMapping=Ga,v.autoClear=!1;const A=new F0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),C=new Ri(new Ts,A);let y=!1;const _=t.background;_?_.isColor&&(A.color.copy(_),t.background=null,y=!0):(A.color.copy(k_),y=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):O===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const D=this._cubeSize;xu(l,O*D,P>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(C,m),v.render(t,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ss||t.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Ri(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;xu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,vd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=X_[(l-c-1)%X_.length];this._blur(t,c-1,c,d,h)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*vr-1),C=c/A,y=isFinite(c)?1+Math.floor(g*C):vr;y>vr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const _=[];let P=0;for(let B=0;B<vr;++B){const Y=B/C,w=Math.exp(-Y*Y/2);_.push(w),B===0?P+=w:B<y&&(P+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:O}=this;x.dTheta.value=A,x.mipInt.value=O-r;const D=this._sizeLods[l],I=3*D*(l>O-ms?l-O+ms:0),F=4*(this._cubeSize-D);xu(i,I,F,3*D,2*D),m.setRenderTarget(i),m.render(v,vd)}}function I1(s){const t=[],i=[],r=[];let l=s;const c=s-ms+1+V_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-ms?m=V_[d-s+ms-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,C=3,y=2,_=1,P=new Float32Array(C*A*M),O=new Float32Array(y*A*M),D=new Float32Array(_*A*M);for(let F=0;F<M;F++){const B=F%3*2/3-1,Y=F>2?0:-1,w=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];P.set(w,C*A*F),O.set(x,y*A*F);const T=[F,F,F,F,F,F];D.set(T,_*A*F)}const I=new ka;I.setAttribute("position",new li(P,C)),I.setAttribute("uv",new li(O,y)),I.setAttribute("faceIndex",new li(D,_)),t.push(I),l>ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function q_(s,t,i){const r=new Mr(s,t,i);return r.texture.mapping=Nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function F1(s,t,i){const r=new Float32Array(vr),l=new lt(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Y_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function j_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Nd||m===Od,g=m===Ss||m===ys;if(p||g){let v=t.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new W_(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new W_(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function G1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Au("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function V1(s,t,i,r){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,A=v.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let O=0,D=P.length;O<D;O+=3){const I=P[O+0],F=P[O+1],B=P[O+2];x.push(I,F,F,B,B,I)}}else if(A!==void 0){const P=A.array;C=A.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const I=O+0,F=O+1,B=O+2;x.push(I,F,F,B,B,I)}}else return;const y=new(P0(x)?G0:H0)(x,1);y.version=C;const _=c.get(v);_&&t.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function k1(s,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,M){s.drawElements(r,M,c,x*d),i.update(M,r,1)}function p(x,M,A){A!==0&&(s.drawElementsInstanced(r,M,c,x*d,A),i.update(M,r,A))}function g(x,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function v(x,M,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/d,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,A);let _=0;for(let P=0;P<A;P++)_+=M[P]*C[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function X1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function W1(s,t,i){const r=new WeakMap,l=new Ke;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let T=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",T)};var M=T;x!==void 0&&x.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;A===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let I=h.attributes.position.count*D,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*F*4*v),Y=new z0(B,I,F,v);Y.type=na,Y.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const rt=_[G],et=P[G],ft=O[G],$=I*F*4*G;for(let N=0;N<rt.count;N++){const X=N*w;A===!0&&(l.fromBufferAttribute(rt,N),B[$+X+0]=l.x,B[$+X+1]=l.y,B[$+X+2]=l.z,B[$+X+3]=0),C===!0&&(l.fromBufferAttribute(et,N),B[$+X+4]=l.x,B[$+X+5]=l.y,B[$+X+6]=l.z,B[$+X+7]=0),y===!0&&(l.fromBufferAttribute(ft,N),B[$+X+8]=l.x,B[$+X+9]=l.y,B[$+X+10]=l.z,B[$+X+11]=ft.itemSize===4?l.w:1)}}x={count:v,texture:Y,size:new Re(I,F)},r.set(h,x),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function q1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Z0=new Hn,Z_=new W0(1,1),K0=new z0,Q0=new SM,J0=new X0,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),t0=new Float32Array(4);function As(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=K_[l];if(c===void 0&&(c=new Float32Array(l),K_[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function cn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function fn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Pu(s,t){let i=Q_[t];i===void 0&&(i=new Int32Array(t),Q_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Y1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function j1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2fv(this.addr,t),fn(i,t)}}function Z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;s.uniform3fv(this.addr,t),fn(i,t)}}function K1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4fv(this.addr,t),fn(i,t)}}function Q1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;t0.set(r),s.uniformMatrix2fv(this.addr,!1,t0),fn(i,r)}}function J1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;$_.set(r),s.uniformMatrix3fv(this.addr,!1,$_),fn(i,r)}}function $1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;J_.set(r),s.uniformMatrix4fv(this.addr,!1,J_),fn(i,r)}}function tT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function eT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2iv(this.addr,t),fn(i,t)}}function nT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3iv(this.addr,t),fn(i,t)}}function iT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4iv(this.addr,t),fn(i,t)}}function aT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function rT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2uiv(this.addr,t),fn(i,t)}}function sT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3uiv(this.addr,t),fn(i,t)}}function oT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4uiv(this.addr,t),fn(i,t)}}function lT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Z_.compareFunction=O0,c=Z_):c=Z0,i.setTexture2D(t||c,l)}function uT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Q0,l)}function cT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||J0,l)}function fT(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||K0,l)}function dT(s){switch(s){case 5126:return Y1;case 35664:return j1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return fT}}function hT(s,t){s.uniform1fv(this.addr,t)}function pT(s,t){const i=As(t,this.size,2);s.uniform2fv(this.addr,i)}function mT(s,t){const i=As(t,this.size,3);s.uniform3fv(this.addr,i)}function gT(s,t){const i=As(t,this.size,4);s.uniform4fv(this.addr,i)}function _T(s,t){const i=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function vT(s,t){const i=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function xT(s,t){const i=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function ST(s,t){s.uniform1iv(this.addr,t)}function yT(s,t){s.uniform2iv(this.addr,t)}function MT(s,t){s.uniform3iv(this.addr,t)}function ET(s,t){s.uniform4iv(this.addr,t)}function bT(s,t){s.uniform1uiv(this.addr,t)}function TT(s,t){s.uniform2uiv(this.addr,t)}function AT(s,t){s.uniform3uiv(this.addr,t)}function RT(s,t){s.uniform4uiv(this.addr,t)}function CT(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Z0,c[d])}function wT(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Q0,c[d])}function DT(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||J0,c[d])}function UT(s,t,i){const r=this.cache,l=t.length,c=Pu(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),fn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||K0,c[d])}function LT(s){switch(s){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class NT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dT(i.type)}}class OT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LT(i.type)}}class PT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function e0(s,t){s.seq.push(t),s.map[t.id]=t}function zT(s,t,i){const r=s.name,l=r.length;for(Ed.lastIndex=0;;){const c=Ed.exec(r),d=Ed.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){e0(i,p===void 0?new NT(h,s,t):new OT(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new PT(h),e0(i,v)),i=v}}}class Ru{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);zT(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function n0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const BT=37297;let IT=0;function FT(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const i0=new se;function HT(s){Te._getMatrix(i0,Te.workingColorSpace,s);const t=`mat3( ${i0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case wu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function a0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+FT(s.getShaderSource(t),d)}else return l}function GT(s,t){const i=HT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VT(s,t){let i;switch(t){case Wy:i="Linear";break;case qy:i="Reinhard";break;case Yy:i="Cineon";break;case jy:i="ACESFilmic";break;case Ky:i="AgX";break;case Qy:i="Neutral";break;case Zy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new lt;function kT(){Te.getLuminanceCoefficients(Su);const s=Su.x.toFixed(4),t=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function WT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function qT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Co(s){return s!==""}function r0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(s){return s.replace(YT,ZT)}const jT=new Map;function ZT(s,t){let i=le[t];if(i===void 0){const r=jT.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ch(i)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(s){return s.replace(KT,QT)}function QT(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function l0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===E0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===by?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function $T(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case ys:t="ENVMAP_TYPE_CUBE";break;case Nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function eA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case b0:t="ENVMAP_BLENDING_MULTIPLY";break;case ky:t="ENVMAP_BLENDING_MIX";break;case Xy:t="ENVMAP_BLENDING_ADD";break}return t}function nA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function iA(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=JT(i),p=$T(i),g=tA(i),v=eA(i),x=nA(i),M=XT(i),A=WT(c),C=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Co).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Co).join(`
`),_.length>0&&(_+=`
`)):(y=[l0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),_=[l0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?le.tonemapping_pars_fragment:"",i.toneMapping!==Ga?VT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,GT("linearToOutputTexel",i.outputColorSpace),kT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Co).join(`
`)),d=ch(d),d=r0(d,i),d=s0(d,i),h=ch(h),h=r0(h,i),h=s0(h,i),d=o0(d),h=o0(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===S_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+y+d,D=P+_+h,I=n0(l,l.VERTEX_SHADER,O),F=n0(l,l.FRAGMENT_SHADER,D);l.attachShader(C,I),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(G){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),et=l.getShaderInfoLog(I).trim(),ft=l.getShaderInfoLog(F).trim();let $=!0,N=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,I,F);else{const X=a0(l,I,"vertex"),k=a0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+rt+`
`+X+`
`+k)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(et===""||ft==="")&&(N=!1);N&&(G.diagnostics={runnable:$,programLog:rt,vertexShader:{log:et,prefix:y},fragmentShader:{log:ft,prefix:_}})}l.deleteShader(I),l.deleteShader(F),Y=new Ru(l,C),w=qT(l,C)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(C,BT)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=F,this}let aA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new sA(t),i.set(t,r)),r}}class sA{constructor(t){this.id=aA++,this.code=t,this.usedTimes=0}}function oA(s,t,i,r,l,c,d){const h=new B0,m=new rA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,T,G,rt,et){const ft=rt.fog,$=et.geometry,N=w.isMeshStandardMaterial?rt.environment:null,X=(w.isMeshStandardMaterial?i:t).get(w.envMap||N),k=X&&X.mapping===Nu?X.image.height:null,St=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const U=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,W=U!==void 0?U.length:0;let ct=0;$.morphAttributes.position!==void 0&&(ct=1),$.morphAttributes.normal!==void 0&&(ct=2),$.morphAttributes.color!==void 0&&(ct=3);let gt,Q,pt,yt;if(St){const Me=Ti[St];gt=Me.vertexShader,Q=Me.fragmentShader}else gt=w.vertexShader,Q=w.fragmentShader,m.update(w),pt=m.getVertexShaderID(w),yt=m.getFragmentShaderID(w);const Tt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),oe=et.isInstancedMesh===!0,Kt=et.isBatchedMesh===!0,He=!!w.map,Be=!!w.matcap,fe=!!X,H=!!w.aoMap,Ln=!!w.lightMap,ge=!!w.bumpMap,ie=!!w.normalMap,Xt=!!w.displacementMap,Ue=!!w.emissiveMap,Gt=!!w.metalnessMap,L=!!w.roughnessMap,b=w.anisotropy>0,nt=w.clearcoat>0,_t=w.dispersion>0,Mt=w.iridescence>0,ht=w.sheen>0,Ot=w.transmission>0,Rt=b&&!!w.anisotropyMap,Ht=nt&&!!w.clearcoatMap,$t=nt&&!!w.clearcoatNormalMap,bt=nt&&!!w.clearcoatRoughnessMap,It=Mt&&!!w.iridescenceMap,jt=Mt&&!!w.iridescenceThicknessMap,Qt=ht&&!!w.sheenColorMap,Pt=ht&&!!w.sheenRoughnessMap,ue=!!w.specularMap,ne=!!w.specularColorMap,Le=!!w.specularIntensityMap,q=Ot&&!!w.transmissionMap,Lt=Ot&&!!w.thicknessMap,ut=!!w.gradientMap,vt=!!w.alphaMap,zt=w.alphaTest>0,Nt=!!w.alphaHash,ae=!!w.extensions;let Ge=Ga;w.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const tn={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:gt,fragmentShader:Q,defines:w.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&et._colorsTexture!==null,instancing:oe,instancingColor:oe&&et.instanceColor!==null,instancingMorph:oe&&et.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ms,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:Be,envMap:fe,envMapMode:fe&&X.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:Ln,bumpMap:ge,normalMap:ie,displacementMap:x&&Xt,emissiveMap:Ue,normalMapObjectSpace:ie&&w.normalMapType===nM,normalMapTangentSpace:ie&&w.normalMapType===eM,metalnessMap:Gt,roughnessMap:L,anisotropy:b,anisotropyMap:Rt,clearcoat:nt,clearcoatMap:Ht,clearcoatNormalMap:$t,clearcoatRoughnessMap:bt,dispersion:_t,iridescence:Mt,iridescenceMap:It,iridescenceThicknessMap:jt,sheen:ht,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ne,specularIntensityMap:Le,transmission:Ot,transmissionMap:q,thicknessMap:Lt,gradientMap:ut,opaque:w.transparent===!1&&w.blending===_s&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:zt,alphaHash:Nt,combine:w.combine,mapUv:He&&C(w.map.channel),aoMapUv:H&&C(w.aoMap.channel),lightMapUv:Ln&&C(w.lightMap.channel),bumpMapUv:ge&&C(w.bumpMap.channel),normalMapUv:ie&&C(w.normalMap.channel),displacementMapUv:Xt&&C(w.displacementMap.channel),emissiveMapUv:Ue&&C(w.emissiveMap.channel),metalnessMapUv:Gt&&C(w.metalnessMap.channel),roughnessMapUv:L&&C(w.roughnessMap.channel),anisotropyMapUv:Rt&&C(w.anisotropyMap.channel),clearcoatMapUv:Ht&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:$t&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&C(w.sheenRoughnessMap.channel),specularMapUv:ue&&C(w.specularMap.channel),specularColorMapUv:ne&&C(w.specularColorMap.channel),specularIntensityMapUv:Le&&C(w.specularIntensityMap.channel),transmissionMapUv:q&&C(w.transmissionMap.channel),thicknessMapUv:Lt&&C(w.thicknessMap.channel),alphaMapUv:vt&&C(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ie||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!$.attributes.uv&&(He||vt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:et.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ct,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ae&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&w.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)T.push(G),T.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(P(T,w),O(T,w),T.push(s.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function P(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function O(w,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),w.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reverseDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const T=A[w.type];let G;if(T){const rt=Ti[T];G=OM.clone(rt.uniforms)}else G=w.uniforms;return G}function I(w,T){let G;for(let rt=0,et=g.length;rt<et;rt++){const ft=g[rt];if(ft.cacheKey===T){G=ft,++G.usedTimes;break}}return G===void 0&&(G=new iA(s,T,w,c),g.push(G)),G}function F(w){if(--w.usedTimes===0){const T=g.indexOf(w);g[T]=g[g.length-1],g.pop(),w.destroy()}}function B(w){m.remove(w)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:I,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:Y}}function lA(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function uA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function u0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function c0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,M,A,C,y){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:C,group:y},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=y),t++,_}function h(v,x,M,A,C,y){const _=d(v,x,M,A,C,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,A,C,y){const _=d(v,x,M,A,C,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||uA),r.length>1&&r.sort(x||u0),l.length>1&&l.sort(x||u0)}function g(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function cA(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new c0,s.set(r,[d])):l>=c.length?(d=new c0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function fA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new lt,color:new De};break;case"SpotLight":i={position:new lt,direction:new lt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return s[t.id]=i,i}}}function dA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let hA=0;function pA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mA(s){const t=new fA,i=dA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new lt);const l=new lt,c=new Qe,d=new Qe;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,C=0,y=0,_=0,P=0,O=0,D=0,I=0,F=0,B=0;p.sort(pA);for(let w=0,T=p.length;w<T;w++){const G=p[w],rt=G.color,et=G.intensity,ft=G.distance,$=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=rt.r*et,v+=rt.g*et,x+=rt.b*et;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],et);B++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,k=i.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,r.directionalShadow[M]=k,r.directionalShadowMap[M]=$,r.directionalShadowMatrix[M]=G.shadow.matrix,P++}r.directional[M]=N,M++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(rt).multiplyScalar(et),N.distance=ft,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[C]=N;const X=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,X.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[C]=X.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=$,D++}C++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(rt).multiplyScalar(et),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=N,y++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const X=G.shadow,k=i.get(G);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,r.pointShadow[A]=k,r.pointShadowMap[A]=$,r.pointShadowMatrix[A]=G.shadow.matrix,O++}r.point[A]=N,A++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(et),N.groundColor.copy(G.groundColor).multiplyScalar(et),r.hemi[_]=N,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==A||Y.spotLength!==C||Y.rectAreaLength!==y||Y.hemiLength!==_||Y.numDirectionalShadows!==P||Y.numPointShadows!==O||Y.numSpotShadows!==D||Y.numSpotMaps!==I||Y.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,Y.directionalLength=M,Y.pointLength=A,Y.spotLength=C,Y.rectAreaLength=y,Y.hemiLength=_,Y.numDirectionalShadows=P,Y.numPointShadows=O,Y.numSpotShadows=D,Y.numSpotMaps=I,Y.numLightProbes=B,r.version=hA++)}function m(p,g){let v=0,x=0,M=0,A=0,C=0;const y=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),d.identity(),c.copy(O.matrixWorld),c.premultiply(y),d.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function f0(s){const t=new mA(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function gA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new f0(s),t.set(l,[h])):c>=d.length?(h=new f0(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xA(s,t,i){let r=new yh;const l=new Re,c=new Re,d=new Ke,h=new kM({depthPacking:tM}),m=new XM,p={},g=i.maxTextureSize,v={[Va]:Fn,[Fn]:Va,[mi]:mi},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:_A,fragmentShader:vA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new ka;A.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E0;let _=this.type;this.render=function(F,B,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=s.getRenderTarget(),T=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(Ha),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const et=_!==ea&&this.type===ea,ft=_===ea&&this.type!==ea;for(let $=0,N=F.length;$<N;$++){const X=F[$],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const St=k.getFrameExtents();if(l.multiply(St),c.copy(k.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,k.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,k.mapSize.y=c.y)),k.map===null||et===!0||ft===!0){const W=this.type!==ea?{minFilter:vi,magFilter:vi}:{};k.map!==null&&k.map.dispose(),k.map=new Mr(l.x,l.y,W),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const U=k.getViewportCount();for(let W=0;W<U;W++){const ct=k.getViewport(W);d.set(c.x*ct.x,c.y*ct.y,c.x*ct.z,c.y*ct.w),rt.viewport(d),k.updateMatrices(X,W),r=k.getFrustum(),D(B,Y,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===ea&&P(k,Y),k.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(w,T,G)};function P(F,B){const Y=t.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,Y,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,Y,M,C,null)}function O(F,B,Y,w){let T=null;const G=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)T=G;else if(T=Y.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const rt=T.uuid,et=B.uuid;let ft=p[rt];ft===void 0&&(ft={},p[rt]=ft);let $=ft[et];$===void 0&&($=T.clone(),ft[et]=$,B.addEventListener("dispose",I)),T=$}if(T.visible=B.visible,T.wireframe=B.wireframe,w===ea?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:v[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,Y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const rt=s.properties.get(T);rt.light=Y}return T}function D(F,B,Y,w,T){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===ea)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const et=t.update(F),ft=F.material;if(Array.isArray(ft)){const $=et.groups;for(let N=0,X=$.length;N<X;N++){const k=$[N],St=ft[k.materialIndex];if(St&&St.visible){const U=O(F,St,w,T);F.onBeforeShadow(s,F,B,Y,et,U,k),s.renderBufferDirect(Y,null,et,U,F,k),F.onAfterShadow(s,F,B,Y,et,U,k)}}}else if(ft.visible){const $=O(F,ft,w,T);F.onBeforeShadow(s,F,B,Y,et,$,null),s.renderBufferDirect(Y,null,et,$,F,null),F.onAfterShadow(s,F,B,Y,et,$,null)}}const rt=F.children;for(let et=0,ft=rt.length;et<ft;et++)D(rt[et],B,Y,w,T)}function I(F){F.target.removeEventListener("dispose",I);for(const Y in p){const w=p[Y],T=F.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const SA={[Ad]:Rd,[Cd]:Ud,[wd]:Ld,[xs]:Dd,[Rd]:Ad,[Ud]:Cd,[Ld]:wd,[Dd]:xs};function yA(s,t){function i(){let q=!1;const Lt=new Ke;let ut=null;const vt=new Ke(0,0,0,0);return{setMask:function(zt){ut!==zt&&!q&&(s.colorMask(zt,zt,zt,zt),ut=zt)},setLocked:function(zt){q=zt},setClear:function(zt,Nt,ae,Ge,tn){tn===!0&&(zt*=Ge,Nt*=Ge,ae*=Ge),Lt.set(zt,Nt,ae,Ge),vt.equals(Lt)===!1&&(s.clearColor(zt,Nt,ae,Ge),vt.copy(Lt))},reset:function(){q=!1,ut=null,vt.set(-1,0,0,0)}}}function r(){let q=!1,Lt=!1,ut=null,vt=null,zt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ae=t.get("EXT_clip_control");Nt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const Ge=zt;zt=null,this.setClear(Ge)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?Tt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!q&&(s.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(Lt&&(Nt=SA[Nt]),vt!==Nt){switch(Nt){case Ad:s.depthFunc(s.NEVER);break;case Rd:s.depthFunc(s.ALWAYS);break;case Cd:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=Nt}},setLocked:function(Nt){q=Nt},setClear:function(Nt){zt!==Nt&&(Lt&&(Nt=1-Nt),s.clearDepth(Nt),zt=Nt)},reset:function(){q=!1,ut=null,vt=null,zt=null,Lt=!1}}}function l(){let q=!1,Lt=null,ut=null,vt=null,zt=null,Nt=null,ae=null,Ge=null,tn=null;return{setTest:function(Me){q||(Me?Tt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!q&&(s.stencilMask(Me),Lt=Me)},setFunc:function(Me,Gn,dn){(ut!==Me||vt!==Gn||zt!==dn)&&(s.stencilFunc(Me,Gn,dn),ut=Me,vt=Gn,zt=dn)},setOp:function(Me,Gn,dn){(Nt!==Me||ae!==Gn||Ge!==dn)&&(s.stencilOp(Me,Gn,dn),Nt=Me,ae=Gn,Ge=dn)},setLocked:function(Me){q=Me},setClear:function(Me){tn!==Me&&(s.clearStencil(Me),tn=Me)},reset:function(){q=!1,Lt=null,ut=null,vt=null,zt=null,Nt=null,ae=null,Ge=null,tn=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,P=null,O=null,D=null,I=null,F=null,B=new De(0,0,0),Y=0,w=!1,T=null,G=null,rt=null,et=null,ft=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=X>=2);let St=null,U={};const W=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),gt=new Ke().fromArray(W),Q=new Ke().fromArray(ct);function pt(q,Lt,ut,vt){const zt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(q,Nt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ut;ae++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,zt):s.texImage2D(Lt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,zt);return Nt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Tt(s.DEPTH_TEST),d.setFunc(xs),ge(!1),ie(p_),Tt(s.CULL_FACE),H(Ha);function Tt(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function Ut(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function oe(q,Lt){return v[q]!==Lt?(s.bindFramebuffer(q,Lt),v[q]=Lt,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Lt),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Kt(q,Lt){let ut=M,vt=!1;if(q){ut=x.get(Lt),ut===void 0&&(ut=[],x.set(Lt,ut));const zt=q.textures;if(ut.length!==zt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,ae=zt.length;Nt<ae;Nt++)ut[Nt]=s.COLOR_ATTACHMENT0+Nt;ut.length=zt.length,vt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,vt=!0);vt&&s.drawBuffers(ut)}function He(q){return A!==q?(s.useProgram(q),A=q,!0):!1}const Be={[_r]:s.FUNC_ADD,[Ay]:s.FUNC_SUBTRACT,[Ry]:s.FUNC_REVERSE_SUBTRACT};Be[Cy]=s.MIN,Be[wy]=s.MAX;const fe={[Dy]:s.ZERO,[Uy]:s.ONE,[Ly]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[Iy]:s.SRC_ALPHA_SATURATE,[zy]:s.DST_COLOR,[Oy]:s.DST_ALPHA,[Ny]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[By]:s.ONE_MINUS_DST_COLOR,[Py]:s.ONE_MINUS_DST_ALPHA,[Fy]:s.CONSTANT_COLOR,[Hy]:s.ONE_MINUS_CONSTANT_COLOR,[Gy]:s.CONSTANT_ALPHA,[Vy]:s.ONE_MINUS_CONSTANT_ALPHA};function H(q,Lt,ut,vt,zt,Nt,ae,Ge,tn,Me){if(q===Ha){C===!0&&(Ut(s.BLEND),C=!1);return}if(C===!1&&(Tt(s.BLEND),C=!0),q!==Ty){if(q!==y||Me!==w){if((_!==_r||D!==_r)&&(s.blendEquation(s.FUNC_ADD),_=_r,D=_r),Me)switch(q){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m_:s.blendFunc(s.ONE,s.ONE);break;case g_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case __:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case m_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case g_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case __:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}P=null,O=null,I=null,F=null,B.set(0,0,0),Y=0,y=q,w=Me}return}zt=zt||Lt,Nt=Nt||ut,ae=ae||vt,(Lt!==_||zt!==D)&&(s.blendEquationSeparate(Be[Lt],Be[zt]),_=Lt,D=zt),(ut!==P||vt!==O||Nt!==I||ae!==F)&&(s.blendFuncSeparate(fe[ut],fe[vt],fe[Nt],fe[ae]),P=ut,O=vt,I=Nt,F=ae),(Ge.equals(B)===!1||tn!==Y)&&(s.blendColor(Ge.r,Ge.g,Ge.b,tn),B.copy(Ge),Y=tn),y=q,w=!1}function Ln(q,Lt){q.side===mi?Ut(s.CULL_FACE):Tt(s.CULL_FACE);let ut=q.side===Fn;Lt&&(ut=!ut),ge(ut),q.blending===_s&&q.transparent===!1?H(Ha):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const vt=q.stencilWrite;h.setTest(vt),vt&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ue(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(q){T!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),T=q)}function ie(q){q!==My?(Tt(s.CULL_FACE),q!==G&&(q===p_?s.cullFace(s.BACK):q===Ey?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),G=q}function Xt(q){q!==rt&&(N&&s.lineWidth(q),rt=q)}function Ue(q,Lt,ut){q?(Tt(s.POLYGON_OFFSET_FILL),(et!==Lt||ft!==ut)&&(s.polygonOffset(Lt,ut),et=Lt,ft=ut)):Ut(s.POLYGON_OFFSET_FILL)}function Gt(q){q?Tt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function L(q){q===void 0&&(q=s.TEXTURE0+$-1),St!==q&&(s.activeTexture(q),St=q)}function b(q,Lt,ut){ut===void 0&&(St===null?ut=s.TEXTURE0+$-1:ut=St);let vt=U[ut];vt===void 0&&(vt={type:void 0,texture:void 0},U[ut]=vt),(vt.type!==q||vt.texture!==Lt)&&(St!==ut&&(s.activeTexture(ut),St=ut),s.bindTexture(q,Lt||yt[q]),vt.type=q,vt.texture=Lt)}function nt(){const q=U[St];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _t(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $t(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(q){gt.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),gt.copy(q))}function Pt(q){Q.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function ue(q,Lt){let ut=p.get(Lt);ut===void 0&&(ut=new WeakMap,p.set(Lt,ut));let vt=ut.get(q);vt===void 0&&(vt=s.getUniformBlockIndex(Lt,q.name),ut.set(q,vt))}function ne(q,Lt){const vt=p.get(Lt).get(q);m.get(Lt)!==vt&&(s.uniformBlockBinding(Lt,vt,q.__bindingPointIndex),m.set(Lt,vt))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},St=null,U={},v={},x=new WeakMap,M=[],A=null,C=!1,y=null,_=null,P=null,O=null,D=null,I=null,F=null,B=new De(0,0,0),Y=0,w=!1,T=null,G=null,rt=null,et=null,ft=null,gt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Tt,disable:Ut,bindFramebuffer:oe,drawBuffers:Kt,useProgram:He,setBlending:H,setMaterial:Ln,setFlipSided:ge,setCullFace:ie,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Gt,activeTexture:L,bindTexture:b,unbindTexture:nt,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:It,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ne,texStorage2D:$t,texStorage3D:bt,texSubImage2D:ht,texSubImage3D:Ot,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ht,scissor:Qt,viewport:Pt,reset:Le}}function MA(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,b){return M?new OffscreenCanvas(L,b):Uu("canvas")}function C(L,b,nt){let _t=1;const Mt=Gt(L);if((Mt.width>nt||Mt.height>nt)&&(_t=nt/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(_t*Mt.width),Ot=Math.floor(_t*Mt.height);v===void 0&&(v=A(ht,Ot));const Rt=b?A(ht,Ot):v;return Rt.width=ht,Rt.height=Ot,Rt.getContext("2d").drawImage(L,0,0,ht,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Ot+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(L,b,nt,_t,Mt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=b;if(b===s.RED&&(nt===s.FLOAT&&(ht=s.R32F),nt===s.HALF_FLOAT&&(ht=s.R16F),nt===s.UNSIGNED_BYTE&&(ht=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.R8UI),nt===s.UNSIGNED_SHORT&&(ht=s.R16UI),nt===s.UNSIGNED_INT&&(ht=s.R32UI),nt===s.BYTE&&(ht=s.R8I),nt===s.SHORT&&(ht=s.R16I),nt===s.INT&&(ht=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ht=s.RG32F),nt===s.HALF_FLOAT&&(ht=s.RG16F),nt===s.UNSIGNED_BYTE&&(ht=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),nt===s.UNSIGNED_INT&&(ht=s.RG32UI),nt===s.BYTE&&(ht=s.RG8I),nt===s.SHORT&&(ht=s.RG16I),nt===s.INT&&(ht=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),nt===s.UNSIGNED_INT&&(ht=s.RGB32UI),nt===s.BYTE&&(ht=s.RGB8I),nt===s.SHORT&&(ht=s.RGB16I),nt===s.INT&&(ht=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),nt===s.BYTE&&(ht=s.RGBA8I),nt===s.SHORT&&(ht=s.RGBA16I),nt===s.INT&&(ht=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),b===s.RGBA){const Ot=Mt?wu:Te.getTransfer(_t);nt===s.FLOAT&&(ht=s.RGBA32F),nt===s.HALF_FLOAT&&(ht=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ht=Ot===ze?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(L,b){let nt;return L?b===null||b===yr||b===Lo?nt=s.DEPTH24_STENCIL8:b===na?nt=s.DEPTH32F_STENCIL8:b===Uo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yr||b===Lo?nt=s.DEPTH_COMPONENT24:b===na?nt=s.DEPTH_COMPONENT32F:b===Uo&&(nt=s.DEPTH_COMPONENT16),nt}function I(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function F(L){const b=L.target;b.removeEventListener("dispose",F),Y(b),b.isVideoTexture&&g.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),T(b)}function Y(L){const b=r.get(L);if(b.__webglInit===void 0)return;const nt=L.source,_t=x.get(nt);if(_t){const Mt=_t[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(L),Object.keys(_t).length===0&&x.delete(nt)}r.remove(L)}function w(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const nt=L.source,_t=x.get(nt);delete _t[b.__cacheKey],d.memory.textures--}function T(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Mt=0;Mt<b.__webglFramebuffer[_t].length;Mt++)s.deleteFramebuffer(b.__webglFramebuffer[_t][Mt]);else s.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)s.deleteFramebuffer(b.__webglFramebuffer[_t]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let _t=0,Mt=nt.length;_t<Mt;_t++){const ht=r.get(nt[_t]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove(nt[_t])}r.remove(L)}let G=0;function rt(){G=0}function et(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ft(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function $(L,b){const nt=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const _t=L.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,L,b);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function N(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Q(nt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function X(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){Q(nt,L,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function k(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){pt(nt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const St={[Pd]:s.REPEAT,[xr]:s.CLAMP_TO_EDGE,[zd]:s.MIRRORED_REPEAT},U={[vi]:s.NEAREST,[Jy]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[Yf]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},W={[iM]:s.NEVER,[uM]:s.ALWAYS,[aM]:s.LESS,[O0]:s.LEQUAL,[rM]:s.EQUAL,[lM]:s.GEQUAL,[sM]:s.GREATER,[oM]:s.NOTEQUAL};function ct(L,b){if(b.type===na&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===Yf||b.magFilter===$l||b.magFilter===Sr||b.minFilter===Ai||b.minFilter===Yf||b.minFilter===$l||b.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,St[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,St[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,St[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vi||b.minFilter!==$l&&b.minFilter!==Sr||b.type===na&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function gt(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",F));const _t=b.source;let Mt=x.get(_t);Mt===void 0&&(Mt={},x.set(_t,Mt));const ht=ft(b);if(ht!==L.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),Mt[ht].usedTimes++;const Ot=Mt[L.__cacheKey];Ot!==void 0&&(Mt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(b)),L.__cacheKey=ht,L.__webglTexture=Mt[ht].texture}return nt}function Q(L,b,nt){let _t=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=s.TEXTURE_3D);const Mt=gt(L,b),ht=b.source;i.bindTexture(_t,L.__webglTexture,s.TEXTURE0+nt);const Ot=r.get(ht);if(ht.version!==Ot.__version||Mt===!0){i.activeTexture(s.TEXTURE0+nt);const Rt=Te.getPrimaries(Te.workingColorSpace),Ht=b.colorSpace===Ia?null:Te.getPrimaries(b.colorSpace),$t=b.colorSpace===Ia||Rt===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let bt=C(b.image,!1,l.maxTextureSize);bt=Ue(b,bt);const It=c.convert(b.format,b.colorSpace),jt=c.convert(b.type);let Qt=O(b.internalFormat,It,jt,b.colorSpace,b.isVideoTexture);ct(_t,b);let Pt;const ue=b.mipmaps,ne=b.isVideoTexture!==!0,Le=Ot.__version===void 0||Mt===!0,q=ht.dataReady,Lt=I(b,bt);if(b.isDepthTexture)Qt=D(b.format===Oo,b.type),Le&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,It,jt,null));else if(b.isDataTexture)if(ue.length>0){ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ut=0,vt=ue.length;ut<vt;ut++)Pt=ue[ut],ne?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,It,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,Qt,Pt.width,Pt.height,0,It,jt,Pt.data);b.generateMipmaps=!1}else ne?(Le&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height),q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,It,jt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,It,jt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,ue[0].width,ue[0].height,bt.depth);for(let ut=0,vt=ue.length;ut<vt;ut++)if(Pt=ue[ut],b.format!==_i)if(It!==null)if(ne){if(q)if(b.layerUpdates.size>0){const zt=G_(Pt.width,Pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const ae=Pt.data.subarray(Nt*zt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Nt,Pt.width,Pt.height,1,It,ae)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,bt.depth,It,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Qt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,bt.depth,It,jt,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Qt,Pt.width,Pt.height,bt.depth,0,It,jt,Pt.data)}else{ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ut=0,vt=ue.length;ut<vt;ut++)Pt=ue[ut],b.format!==_i?It!==null?ne?q&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,It,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,It,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,Qt,Pt.width,Pt.height,0,It,jt,Pt.data)}else if(b.isDataArrayTexture)if(ne){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,bt.width,bt.height,bt.depth),q)if(b.layerUpdates.size>0){const ut=G_(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const zt=bt.data.subarray(vt*ut/bt.data.BYTES_PER_ELEMENT,(vt+1)*ut/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,It,jt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,It,jt,bt.data);else if(b.isData3DTexture)ne?(Le&&i.texStorage3D(s.TEXTURE_3D,Lt,Qt,bt.width,bt.height,bt.depth),q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,It,jt,bt.data);else if(b.isFramebufferTexture){if(Le)if(ne)i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height);else{let ut=bt.width,vt=bt.height;for(let zt=0;zt<Lt;zt++)i.texImage2D(s.TEXTURE_2D,zt,Qt,ut,vt,0,It,jt,null),ut>>=1,vt>>=1}}else if(ue.length>0){if(ne&&Le){const ut=Gt(ue[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ut.width,ut.height)}for(let ut=0,vt=ue.length;ut<vt;ut++)Pt=ue[ut],ne?q&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,It,jt,Pt):i.texImage2D(s.TEXTURE_2D,ut,Qt,It,jt,Pt);b.generateMipmaps=!1}else if(ne){if(Le){const ut=Gt(bt);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ut.width,ut.height)}q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Qt,It,jt,bt);y(b)&&_(_t),Ot.__version=ht.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,nt){if(b.image.length!==6)return;const _t=gt(L,b),Mt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+nt);const ht=r.get(Mt);if(Mt.version!==ht.__version||_t===!0){i.activeTexture(s.TEXTURE0+nt);const Ot=Te.getPrimaries(Te.workingColorSpace),Rt=b.colorSpace===Ia?null:Te.getPrimaries(b.colorSpace),Ht=b.colorSpace===Ia||Ot===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!$t&&!bt?It[vt]=C(b.image[vt],!0,l.maxCubemapSize):It[vt]=bt?b.image[vt].image:b.image[vt],It[vt]=Ue(b,It[vt]);const jt=It[0],Qt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),ue=O(b.internalFormat,Qt,Pt,b.colorSpace),ne=b.isVideoTexture!==!0,Le=ht.__version===void 0||_t===!0,q=Mt.dataReady;let Lt=I(b,jt);ct(s.TEXTURE_CUBE_MAP,b);let ut;if($t){ne&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,jt.width,jt.height);for(let vt=0;vt<6;vt++){ut=It[vt].mipmaps;for(let zt=0;zt<ut.length;zt++){const Nt=ut[zt];b.format!==_i?Qt!==null?ne?q&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,ue,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,0,0,Nt.width,Nt.height,Qt,Pt,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt,ue,Nt.width,Nt.height,0,Qt,Pt,Nt.data)}}}else{if(ut=b.mipmaps,ne&&Le){ut.length>0&&Lt++;const vt=Gt(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){ne?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,Qt,Pt,It[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,It[vt].width,It[vt].height,0,Qt,Pt,It[vt].data);for(let zt=0;zt<ut.length;zt++){const ae=ut[zt].image[vt].image;ne?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,0,0,ae.width,ae.height,Qt,Pt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,ue,ae.width,ae.height,0,Qt,Pt,ae.data)}}else{ne?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Qt,Pt,It[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Qt,Pt,It[vt]);for(let zt=0;zt<ut.length;zt++){const Nt=ut[zt];ne?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,0,0,Qt,Pt,Nt.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,zt+1,ue,Qt,Pt,Nt.image[vt])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),ht.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function yt(L,b,nt,_t,Mt,ht){const Ot=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),Ht=O(nt.internalFormat,Ot,Rt,nt.colorSpace),$t=r.get(b),bt=r.get(nt);if(bt.__renderTarget=b,!$t.__hasExternalTextures){const It=Math.max(1,b.width>>ht),jt=Math.max(1,b.height>>ht);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,Ht,It,jt,b.depth,0,Ot,Rt,null):i.texImage2D(Mt,ht,Ht,It,jt,0,Ot,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ie(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Mt,bt.__webglTexture,0,ge(b)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Mt,bt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(L,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const _t=b.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ht=D(b.stencilBuffer,Mt),Ot=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=ge(b);ie(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ht,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,L)}else{const _t=b.textures;for(let Mt=0;Mt<_t.length;Mt++){const ht=_t[Mt],Ot=c.convert(ht.format,ht.colorSpace),Rt=c.convert(ht.type),Ht=O(ht.internalFormat,Ot,Rt,ht.colorSpace),$t=ge(b);nt&&ie(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Ht,b.width,b.height):ie(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ht,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const Mt=_t.__webglTexture,ht=ge(b);if(b.depthTexture.format===No)ie(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===Oo)ie(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function oe(L){const b=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=_t}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const _t=L.texture.mipmaps;_t&&_t.length>0?Ut(b.__webglFramebuffer[0],L):Ut(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=s.createRenderbuffer(),Tt(b.__webglDepthbuffer[_t],L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ht)}}else{const _t=L.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Tt(b.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(L,b,nt){const _t=r.get(L);b!==void 0&&yt(_t.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&oe(L)}function He(L){const b=L.texture,nt=r.get(L),_t=r.get(b);L.addEventListener("dispose",B);const Mt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Ot=Mt.length>1;if(Ot||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=b.version,d.memory.textures++),ht){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Ht=0;Ht<b.mipmaps.length;Ht++)nt.__webglFramebuffer[Rt][Ht]=s.createFramebuffer()}else nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){const $t=r.get(Mt[Rt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),d.memory.textures++)}if(L.samples>0&&ie(L)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const Ht=Mt[Rt];nt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const $t=c.convert(Ht.format,Ht.colorSpace),bt=c.convert(Ht.type),It=O(Ht.internalFormat,$t,bt,Ht.colorSpace,L.isXRRenderTarget===!0),jt=ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,It,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)yt(nt.__webglFramebuffer[Rt][Ht],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ht);else yt(nt.__webglFramebuffer[Rt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){const $t=Mt[Rt],bt=r.get($t);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),ct(s.TEXTURE_2D,$t),yt(nt.__webglFramebuffer,L,$t,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),y($t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,_t.__webglTexture),ct(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)yt(nt.__webglFramebuffer[Ht],L,b,s.COLOR_ATTACHMENT0,Rt,Ht);else yt(nt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Rt,0);y(b)&&_(Rt),i.unbindTexture()}L.depthBuffer&&oe(L)}function Be(L){const b=L.textures;for(let nt=0,_t=b.length;nt<_t;nt++){const Mt=b[nt];if(y(Mt)){const ht=P(L),Ot=r.get(Mt).__webglTexture;i.bindTexture(ht,Ot),_(ht),i.unbindTexture()}}}const fe=[],H=[];function Ln(L){if(L.samples>0){if(ie(L)===!1){const b=L.textures,nt=L.width,_t=L.height;let Mt=s.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=r.get(L),Rt=b.length>1;if(Rt)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,nt,_t,0,0,nt,_t,Mt,s.NEAREST),m===!0&&(fe.length=0,H.length=0,fe.push(s.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(fe.push(ht),H.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ge(L){return Math.min(l.maxSamples,L.samples)}function ie(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(L){const b=d.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Ue(L,b){const nt=L.colorSpace,_t=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==Ms&&nt!==Ia&&(Te.getTransfer(nt)===ze?(_t!==_i||Mt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=rt,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Kt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ie}function EA(s,t){function i(r,l=Ia){let c;const d=Te.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===ph)return s.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===C0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===A0)return s.BYTE;if(r===R0)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===hh)return s.INT;if(r===yr)return s.UNSIGNED_INT;if(r===na)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===D0)return s.RGB;if(r===_i)return s.RGBA;if(r===No)return s.DEPTH_COMPONENT;if(r===Oo)return s.DEPTH_STENCIL;if(r===U0)return s.RED;if(r===gh)return s.RED_INTEGER;if(r===L0)return s.RG;if(r===_h)return s.RG_INTEGER;if(r===vh)return s.RGBA_INTEGER;if(r===yu||r===Mu||r===Eu||r===bu)if(d===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===Id||r===Fd||r===Hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Vd||r===kd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Gd||r===Vd)return d===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===kd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Xd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return d===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tu||r===ah||r===rh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Tu)return d===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===N0||r===sh||r===oh||r===lh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===sh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Hn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Di({vertexShader:bA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Ho(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends bs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,A=null;const C=new AA,y=i.getContextAttributes();let _=null,P=null;const O=[],D=[],I=new Re;let F=null;const B=new oi;B.viewport=new Ke;const Y=new oi;Y.viewport=new Ke;const w=[B,Y],T=new jM;let G=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=O[Q];return pt===void 0&&(pt=new md,O[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=O[Q];return pt===void 0&&(pt=new md,O[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=O[Q];return pt===void 0&&(pt=new md,O[Q]=pt),pt.getHandSpace()};function et(Q){const pt=D.indexOf(Q.inputSource);if(pt===-1)return;const yt=O[pt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,p||d),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ft(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",$);for(let Q=0;Q<O.length;Q++){const pt=D[Q];pt!==null&&(D[Q]=null,O[Q].disconnect(pt))}G=null,rt=null,C.reset(),t.setRenderTarget(_),M=null,x=null,v=null,l=null,P=null,gt.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Tt=null,Ut=null;y.depth&&(Ut=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=y.stencil?Oo:No,Tt=y.stencil?Lo:yr);const oe={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Mr(x.textureWidth,x.textureHeight,{format:_i,type:wi,depthTexture:new W0(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Mr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),gt.setContext(l),gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function $(Q){for(let pt=0;pt<Q.removed.length;pt++){const yt=Q.removed[pt],Tt=D.indexOf(yt);Tt>=0&&(D[Tt]=null,O[Tt].disconnect(yt))}for(let pt=0;pt<Q.added.length;pt++){const yt=Q.added[pt];let Tt=D.indexOf(yt);if(Tt===-1){for(let oe=0;oe<O.length;oe++)if(oe>=D.length){D.push(yt),Tt=oe;break}else if(D[oe]===null){D[oe]=yt,Tt=oe;break}if(Tt===-1)break}const Ut=O[Tt];Ut&&Ut.connect(yt)}}const N=new lt,X=new lt;function k(Q,pt,yt){N.setFromMatrixPosition(pt.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);const Tt=N.distanceTo(X),Ut=pt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Kt=Ut[14]/(Ut[10]-1),He=Ut[14]/(Ut[10]+1),Be=(Ut[9]+1)/Ut[5],fe=(Ut[9]-1)/Ut[5],H=(Ut[8]-1)/Ut[0],Ln=(oe[8]+1)/oe[0],ge=Kt*H,ie=Kt*Ln,Xt=Tt/(-H+Ln),Ue=Xt*-H;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(Xt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Gt=Kt+Xt,L=He+Xt,b=ge-Ue,nt=ie+(Tt-Ue),_t=Be*He/L*Gt,Mt=fe*He/L*Gt;Q.projectionMatrix.makePerspective(b,nt,_t,Mt,Gt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,yt=Q.far;C.texture!==null&&(C.depthNear>0&&(pt=C.depthNear),C.depthFar>0&&(yt=C.depthFar)),T.near=Y.near=B.near=pt,T.far=Y.far=B.far=yt,(G!==T.near||rt!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),G=T.near,rt=T.far),B.layers.mask=Q.layers.mask|2,Y.layers.mask=Q.layers.mask|4,T.layers.mask=B.layers.mask|Y.layers.mask;const Tt=Q.parent,Ut=T.cameras;St(T,Tt);for(let oe=0;oe<Ut.length;oe++)St(Ut[oe],Tt);Ut.length===2?k(T,B,Y):T.projectionMatrix.copy(B.projectionMatrix),U(Q,T,Tt)};function U(Q,pt,yt){yt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=uh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(T)};let W=null;function ct(Q,pt){if(g=pt.getViewerPose(p||d),A=pt,g!==null){const yt=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Tt=!1;yt.length!==T.cameras.length&&(T.cameras.length=0,Tt=!0);for(let Kt=0;Kt<yt.length;Kt++){const He=yt[Kt];let Be=null;if(M!==null)Be=M.getViewport(He);else{const H=v.getViewSubImage(x,He);Be=H.viewport,Kt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let fe=w[Kt];fe===void 0&&(fe=new oi,fe.layers.enable(Kt),fe.viewport=new Ke,w[Kt]=fe),fe.matrix.fromArray(He.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(He.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(T.matrix.copy(fe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Tt===!0&&T.cameras.push(fe)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(yt[0]);Kt&&Kt.isValid&&Kt.texture&&C.init(t,Kt,l.renderState)}}for(let yt=0;yt<O.length;yt++){const Tt=D[yt],Ut=O[yt];Tt!==null&&Ut!==void 0&&Ut.update(Tt,pt,p||d)}W&&W(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),A=null}const gt=new j0;gt.setAnimationLoop(ct),this.setAnimationLoop=function(Q){W=Q},this.dispose=function(){}}}const pr=new ra,CA=new Qe;function wA(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,V0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(c(y,_),A(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),C(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,P,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,pr.copy(D),pr.x*=-1,pr.y*=-1,pr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),y.envMapRotation.value.setFromMatrix4(CA.makeRotationFromEuler(pr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function DA(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(A(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",y));const I=O.program;r.updateUBOMapping(P,I);const F=t.render.frame;c[P.id]!==F&&(x(P),c[P.id]=F)}function g(P){const O=v();P.__bindingPointIndex=O;const D=s.createBuffer(),I=P.__size,F=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function v(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,I=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let F=0,B=D.length;F<B;F++){const Y=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,T=Y.length;w<T;w++){const G=Y[w];if(M(G,F,w,I)===!0){const rt=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let $=0;$<et.length;$++){const N=et[$],X=C(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,rt+ft,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,ft),ft+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,O,D,I){const F=P.value,B=O+"_"+D;if(I[B]===void 0)return typeof F=="number"||typeof F=="boolean"?I[B]=F:I[B]=F.clone(),!0;{const Y=I[B];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return I[B]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function A(P){const O=P.uniforms;let D=0;const I=16;for(let B=0,Y=O.length;B<Y;B++){const w=Array.isArray(O[B])?O[B]:[O[B]];for(let T=0,G=w.length;T<G;T++){const rt=w[T],et=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,$=et.length;ft<$;ft++){const N=et[ft],X=C(N),k=D%I,St=k%X.boundary,U=k+St;D+=St,U!==0&&I-U<X.storage&&(D+=I-U),rt.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=X.storage}}}const F=D%I;return F>0&&(D+=I-F),P.__size=D,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class UA{constructor(t={}){const{canvas:i=fM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=si;let F=0,B=0,Y=null,w=-1,T=null;const G=new Ke,rt=new Ke;let et=null;const ft=new De(0);let $=0,N=i.width,X=i.height,k=1,St=null,U=null;const W=new Ke(0,0,N,X),ct=new Ke(0,0,N,X);let gt=!1;const Q=new yh;let pt=!1,yt=!1;const Tt=new Qe,Ut=new Qe,oe=new lt,Kt=new Ke,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function fe(){return Y===null?k:1}let H=r;function Ln(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dh}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),H===null){const Z="webgl2";if(H=Ln(Z,R),H===null)throw Ln(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ge,ie,Xt,Ue,Gt,L,b,nt,_t,Mt,ht,Ot,Rt,Ht,$t,bt,It,jt,Qt,Pt,ue,ne,Le,q;function Lt(){ge=new G1(H),ge.init(),ne=new EA(H,ge),ie=new O1(H,ge,t,ne),Xt=new yA(H,ge),ie.reverseDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),Ue=new X1(H),Gt=new lA,L=new MA(H,ge,Xt,Gt,ie,ne,Ue),b=new z1(D),nt=new H1(D),_t=new KM(H),Le=new L1(H,_t),Mt=new V1(H,_t,Ue,Le),ht=new q1(H,Mt,_t,Ue),Qt=new W1(H,ie,L),bt=new P1(Gt),Ot=new oA(D,b,nt,ge,ie,Le,bt),Rt=new wA(D,Gt),Ht=new cA,$t=new gA(ge),jt=new U1(D,b,nt,Xt,ht,M,m),It=new xA(D,ht,ie),q=new DA(H,Ue,ie,Xt),Pt=new N1(H,ge,Ue),ue=new k1(H,ge,Ue),Ue.programs=Ot.programs,D.capabilities=ie,D.extensions=ge,D.properties=Gt,D.renderLists=Ht,D.shadowMap=It,D.state=Xt,D.info=Ue}Lt();const ut=new RA(D,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(N,X,!1))},this.getSize=function(R){return R.set(N,X)},this.setSize=function(R,Z,st=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,X=Z,i.width=Math.floor(R*k),i.height=Math.floor(Z*k),st===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(N*k,X*k).floor()},this.setDrawingBufferSize=function(R,Z,st){N=R,X=Z,k=st,i.width=Math.floor(R*st),i.height=Math.floor(Z*st),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,Z,st,ot){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,Z,st,ot),Xt.viewport(G.copy(W).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,Z,st,ot){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,Z,st,ot),Xt.scissor(rt.copy(ct).multiplyScalar(k).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(R){Xt.setScissorTest(gt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,st=!0){let ot=0;if(R){let K=!1;if(Y!==null){const Et=Y.texture.format;K=Et===vh||Et===_h||Et===gh}if(K){const Et=Y.texture.type,Ct=Et===wi||Et===yr||Et===Uo||Et===Lo||Et===ph||Et===mh,wt=jt.getClearColor(),Bt=jt.getClearAlpha(),te=wt.r,qt=wt.g,kt=wt.b;Ct?(A[0]=te,A[1]=qt,A[2]=kt,A[3]=Bt,H.clearBufferuiv(H.COLOR,0,A)):(C[0]=te,C[1]=qt,C[2]=kt,C[3]=Bt,H.clearBufferiv(H.COLOR,0,C))}else ot|=H.COLOR_BUFFER_BIT}Z&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),Ht.dispose(),$t.dispose(),Gt.dispose(),b.dispose(),nt.dispose(),ht.dispose(),Le.dispose(),q.dispose(),Ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",sn),ut.removeEventListener("sessionend",vn),Nn.stop()};function vt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Ue.autoReset,Z=It.enabled,st=It.autoUpdate,ot=It.needsUpdate,K=It.type;Lt(),Ue.autoReset=R,It.enabled=Z,It.autoUpdate=st,It.needsUpdate=ot,It.type=K}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const Z=R.target;Z.removeEventListener("dispose",ae),Ge(Z)}function Ge(R){tn(R),Gt.remove(R)}function tn(R){const Z=Gt.get(R).programs;Z!==void 0&&(Z.forEach(function(st){Ot.releaseProgram(st)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,st,ot,K,Et){Z===null&&(Z=He);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,wt=qa(R,Z,st,ot,K);Xt.setMaterial(ot,Ct);let Bt=st.index,te=1;if(ot.wireframe===!0){if(Bt=Mt.getWireframeAttribute(st),Bt===void 0)return;te=2}const qt=st.drawRange,kt=st.attributes.position;let he=qt.start*te,Ee=(qt.start+qt.count)*te;Et!==null&&(he=Math.max(he,Et.start*te),Ee=Math.min(Ee,(Et.start+Et.count)*te)),Bt!==null?(he=Math.max(he,0),Ee=Math.min(Ee,Bt.count)):kt!=null&&(he=Math.max(he,0),Ee=Math.min(Ee,kt.count));const We=Ee-he;if(We<0||We===1/0)return;Le.setup(K,ot,wt,st,Bt);let _e,ve=Pt;if(Bt!==null&&(_e=_t.get(Bt),ve=ue,ve.setIndex(_e)),K.isMesh)ot.wireframe===!0?(Xt.setLineWidth(ot.wireframeLinewidth*fe()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(K.isLine){let Yt=ot.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*fe()),K.isLineSegments?ve.setMode(H.LINES):K.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else K.isPoints?ve.setMode(H.POINTS):K.isSprite&&ve.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ve.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,Ye=K._multiDrawCounts,ye=K._multiDrawCount,En=Bt?_t.get(Bt).bytesPerElement:1,ua=Gt.get(ot).currentProgram.getUniforms();for(let Ve=0;Ve<ye;Ve++)ua.setValue(H,"_gl_DrawID",Ve),ve.render(Yt[Ve]/En,Ye[Ve])}else if(K.isInstancedMesh)ve.renderInstances(he,We,K.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,Yt);ve.renderInstances(he,We,Ye)}else ve.render(he,We)};function Me(R,Z,st){R.transparent===!0&&R.side===mi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,oa(R,Z,st),R.side=Va,R.needsUpdate=!0,oa(R,Z,st),R.side=mi):oa(R,Z,st)}this.compile=function(R,Z,st=null){st===null&&(st=R),_=$t.get(st),_.init(Z),O.push(_),st.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const wt=Et[Ct];Me(wt,st,K),ot.add(wt)}else Me(Et,st,K),ot.add(Et)}),_=O.pop(),ot},this.compileAsync=function(R,Z,st=null){const ot=this.compile(R,Z,st);return new Promise(K=>{function Et(){if(ot.forEach(function(Ct){Gt.get(Ct).currentProgram.isReady()&&ot.delete(Ct)}),ot.size===0){K(R);return}setTimeout(Et,10)}ge.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Gn=null;function dn(R){Gn&&Gn(R)}function sn(){Nn.stop()}function vn(){Nn.start()}const Nn=new j0;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){Gn=R,ut.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},ut.addEventListener("sessionstart",sn),ut.addEventListener("sessionend",vn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,Y),_=$t.get(R,O.length),_.init(Z),O.push(_),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q.setFromProjectionMatrix(Ut),yt=this.localClippingEnabled,pt=bt.init(this.clippingPlanes,yt),y=Ht.get(R,P.length),y.init(),P.push(y),ut.enabled===!0&&ut.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Xa(Et,Z,-1/0,D.sortObjects)}Xa(R,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,U),Be=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Be&&jt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&bt.beginShadows();const st=_.state.shadowsArray;It.render(st,R,Z),pt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,K=y.transmissive;if(_.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(K.length>0)for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];Vo(ot,K,R,Bt)}Be&&jt.render(R);for(let Ct=0,wt=Et.length;Ct<wt;Ct++){const Bt=Et[Ct];Go(y,R,Bt,Bt.viewport)}}else K.length>0&&Vo(ot,K,R,Z),Be&&jt.render(R),Go(y,R,Z);Y!==null&&B===0&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,Z),Le.resetDefaultState(),w=-1,T=null,O.pop(),O.length>0?(_=O[O.length-1],pt===!0&&bt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Xa(R,Z,st,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ot&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ct=ht.update(R),wt=R.material;wt.visible&&y.push(R,Ct,wt,st,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=ht.update(R),wt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){const Bt=Ct.groups;for(let te=0,qt=Bt.length;te<qt;te++){const kt=Bt[te],he=wt[kt.materialIndex];he&&he.visible&&y.push(R,Ct,he,st,Kt.z,kt)}}else wt.visible&&y.push(R,Ct,wt,st,Kt.z,null)}}const Et=R.children;for(let Ct=0,wt=Et.length;Ct<wt;Ct++)Xa(Et[Ct],Z,st,ot)}function Go(R,Z,st,ot){const K=R.opaque,Et=R.transmissive,Ct=R.transparent;_.setupLightsView(st),pt===!0&&bt.setGlobalState(D.clippingPlanes,st),ot&&Xt.viewport(G.copy(ot)),K.length>0&&Wa(K,Z,st),Et.length>0&&Wa(Et,Z,st),Ct.length>0&&Wa(Ct,Z,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Vo(R,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new Mr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?zo:wi,minFilter:Sr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Et=_.state.transmissionRenderTarget[ot.id],Ct=ot.viewport||G;Et.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);const wt=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(ft),$=D.getClearAlpha(),$<1&&D.setClearColor(16777215,.5),D.clear(),Be&&jt.render(st);const Bt=D.toneMapping;D.toneMapping=Ga;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),pt===!0&&bt.setGlobalState(D.clippingPlanes,ot),Wa(R,st,ot),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),ge.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let kt=0,he=Z.length;kt<he;kt++){const Ee=Z[kt],We=Ee.object,_e=Ee.geometry,ve=Ee.material,Yt=Ee.group;if(ve.side===mi&&We.layers.test(ot.layers)){const Ye=ve.side;ve.side=Fn,ve.needsUpdate=!0,sa(We,st,ot,_e,ve,Yt),ve.side=Ye,ve.needsUpdate=!0,qt=!0}}qt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}D.setRenderTarget(wt),D.setClearColor(ft,$),te!==void 0&&(ot.viewport=te),D.toneMapping=Bt}function Wa(R,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Et=R.length;K<Et;K++){const Ct=R[K],wt=Ct.object,Bt=Ct.geometry,te=Ct.group;let qt=Ct.material;qt.allowOverride===!0&&ot!==null&&(qt=ot),wt.layers.test(st.layers)&&sa(wt,Z,st,Bt,qt,te)}}function sa(R,Z,st,ot,K,Et){R.onBeforeRender(D,Z,st,ot,K,Et),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,Z,st,ot,R,Et),K.transparent===!0&&K.side===mi&&K.forceSinglePass===!1?(K.side=Fn,K.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,K,R,Et),K.side=Va,K.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,K,R,Et),K.side=mi):D.renderBufferDirect(st,Z,ot,K,R,Et),R.onAfterRender(D,Z,st,ot,K,Et)}function oa(R,Z,st){Z.isScene!==!0&&(Z=He);const ot=Gt.get(R),K=_.state.lights,Et=_.state.shadowsArray,Ct=K.state.version,wt=Ot.getParameters(R,K.state,Et,Z,st),Bt=Ot.getProgramCacheKey(wt);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?nt:b).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,ot.programs=te);let qt=te.get(Bt);if(qt!==void 0){if(ot.currentProgram===qt&&ot.lightsStateVersion===Ct)return Li(R,wt),qt}else wt.uniforms=Ot.getUniforms(R),R.onBeforeCompile(wt,D),qt=Ot.acquireProgram(wt,Bt),te.set(Bt,qt),ot.uniforms=wt.uniforms;const kt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=bt.uniform),Li(R,wt),ot.needsLights=en(R),ot.lightsStateVersion=Ct,ot.needsLights&&(kt.ambientLightColor.value=K.state.ambient,kt.lightProbe.value=K.state.probe,kt.directionalLights.value=K.state.directional,kt.directionalLightShadows.value=K.state.directionalShadow,kt.spotLights.value=K.state.spot,kt.spotLightShadows.value=K.state.spotShadow,kt.rectAreaLights.value=K.state.rectArea,kt.ltc_1.value=K.state.rectAreaLTC1,kt.ltc_2.value=K.state.rectAreaLTC2,kt.pointLights.value=K.state.point,kt.pointLightShadows.value=K.state.pointShadow,kt.hemisphereLights.value=K.state.hemi,kt.directionalShadowMap.value=K.state.directionalShadowMap,kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,kt.spotShadowMap.value=K.state.spotShadowMap,kt.spotLightMatrix.value=K.state.spotLightMatrix,kt.spotLightMap.value=K.state.spotLightMap,kt.pointShadowMap.value=K.state.pointShadowMap,kt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=qt,ot.uniformsList=null,qt}function Ui(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ru.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Li(R,Z){const st=Gt.get(R);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function qa(R,Z,st,ot,K){Z.isScene!==!0&&(Z=He),L.resetTextureUnits();const Et=Z.fog,Ct=ot.isMeshStandardMaterial?Z.environment:null,wt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ms,Bt=(ot.isMeshStandardMaterial?nt:b).get(ot.envMap||Ct),te=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,qt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),kt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Ee=!!st.morphAttributes.color;let We=Ga;ot.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(We=D.toneMapping);const _e=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ve=_e!==void 0?_e.length:0,Yt=Gt.get(ot),Ye=_.state.lights;if(pt===!0&&(yt===!0||R!==T)){const hn=R===T&&ot.id===w;bt.setState(ot,R,hn)}let ye=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ye.state.version||Yt.outputColorSpace!==wt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==Bt||ot.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==qt||Yt.morphTargets!==kt||Yt.morphNormals!==he||Yt.morphColors!==Ee||Yt.toneMapping!==We||Yt.morphTargetsCount!==ve)&&(ye=!0):(ye=!0,Yt.__version=ot.version);let En=Yt.currentProgram;ye===!0&&(En=oa(ot,Z,K));let ua=!1,Ve=!1,Oi=!1;const Ie=En.getUniforms(),bn=Yt.uniforms;if(Xt.useProgram(En.program)&&(ua=!0,Ve=!0,Oi=!0),ot.id!==w&&(w=ot.id,Ve=!0),ua||T!==R){Xt.buffers.depth.getReversed()?(Tt.copy(R.projectionMatrix),hM(Tt),pM(Tt),Ie.setValue(H,"projectionMatrix",Tt)):Ie.setValue(H,"projectionMatrix",R.projectionMatrix),Ie.setValue(H,"viewMatrix",R.matrixWorldInverse);const xn=Ie.map.cameraPosition;xn!==void 0&&xn.setValue(H,oe.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Ve=!0,Oi=!0)}if(K.isSkinnedMesh){Ie.setOptional(H,K,"bindMatrix"),Ie.setOptional(H,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ie.setValue(H,"boneTexture",hn.boneTexture,L))}K.isBatchedMesh&&(Ie.setOptional(H,K,"batchingTexture"),Ie.setValue(H,"batchingTexture",K._matricesTexture,L),Ie.setOptional(H,K,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",K._indirectTexture,L),Ie.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",K._colorsTexture,L));const on=st.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Qt.update(K,st,En),(Ve||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Ie.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(bn.envMap.value=Bt,bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(bn.envMapIntensity.value=Z.environmentIntensity),Ve&&(Ie.setValue(H,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&la(bn,Oi),Et&&ot.fog===!0&&Rt.refreshFogUniforms(bn,Et),Rt.refreshMaterialUniforms(bn,ot,k,X,_.state.transmissionRenderTarget[R.id]),Ru.upload(H,Ui(Yt),bn,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ru.upload(H,Ui(Yt),bn,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ie.setValue(H,"center",K.center),Ie.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(H,"normalMatrix",K.normalMatrix),Ie.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const hn=ot.uniformsGroups;for(let xn=0,xi=hn.length;xn<xi;xn++){const Pi=hn[xn];q.update(Pi,En),q.bind(Pi,En)}}return En}function la(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function en(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,Z,st){const ot=Gt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=Z,Gt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const st=Gt.get(R);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const ko=H.createFramebuffer();this.setRenderTarget=function(R,Z=0,st=0){Y=R,F=Z,B=st;let ot=!0,K=null,Et=!1,Ct=!1;if(R){const Bt=Gt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Bt.__hasExternalTextures)L.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Gt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const qt=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?K=qt[Z][st]:K=qt[Z],Et=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?K=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?K=qt[st]:K=qt,G.copy(R.viewport),rt.copy(R.scissor),et=R.scissorTest}else G.copy(W).multiplyScalar(k).floor(),rt.copy(ct).multiplyScalar(k).floor(),et=gt;if(st!==0&&(K=ko),Xt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Xt.drawBuffers(R,K),Xt.viewport(G),Xt.scissor(rt),Xt.setScissorTest(et),Et){const Bt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Bt.__webglTexture,st)}else if(Ct){const Bt=Gt.get(R.texture),te=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,st,te)}else if(R!==null&&st!==0){const Bt=Gt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,st)}w=-1},this.readRenderTargetPixels=function(R,Z,st,ot,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Xt.bindFramebuffer(H.FRAMEBUFFER,wt);try{const Bt=R.texture,te=Bt.format,qt=Bt.type;if(!ie.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&st>=0&&st<=R.height-K&&H.readPixels(Z,st,ot,K,ne.convert(te),ne.convert(qt),Et)}finally{const Bt=Y!==null?Gt.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,st,ot,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(Z>=0&&Z<=R.width-ot&&st>=0&&st<=R.height-K){Xt.bindFramebuffer(H.FRAMEBUFFER,wt);const Bt=R.texture,te=Bt.format,qt=Bt.type;if(!ie.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(Z,st,ot,K,ne.convert(te),ne.convert(qt),0);const he=Y!==null?Gt.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,he);const Ee=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await dM(H,Ee,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,kt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(kt),H.deleteSync(Ee),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(R.image.width*ot),Et=Math.floor(R.image.height*ot),Ct=Z!==null?Z.x:0,wt=Z!==null?Z.y:0;L.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Ct,wt,K,Et),Xt.unbindTexture()};const Xo=H.createFramebuffer(),Ni=H.createFramebuffer();this.copyTextureToTexture=function(R,Z,st=null,ot=null,K=0,Et=null){Et===null&&(K!==0?(Au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Ct,wt,Bt,te,qt,kt,he,Ee,We;const _e=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(st!==null)Ct=st.max.x-st.min.x,wt=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,qt=st.min.y,kt=st.isBox3?st.min.z:0;else{const on=Math.pow(2,-K);Ct=Math.floor(_e.width*on),wt=Math.floor(_e.height*on),R.isDataArrayTexture?Bt=_e.depth:R.isData3DTexture?Bt=Math.floor(_e.depth*on):Bt=1,te=0,qt=0,kt=0}ot!==null?(he=ot.x,Ee=ot.y,We=ot.z):(he=0,Ee=0,We=0);const ve=ne.convert(Z.format),Yt=ne.convert(Z.type);let Ye;Z.isData3DTexture?(L.setTexture3D(Z,0),Ye=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(L.setTexture2DArray(Z,0),Ye=H.TEXTURE_2D_ARRAY):(L.setTexture2D(Z,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const ye=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ua=H.getParameter(H.UNPACK_SKIP_PIXELS),Ve=H.getParameter(H.UNPACK_SKIP_ROWS),Oi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kt);const Ie=R.isDataArrayTexture||R.isData3DTexture,bn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const on=Gt.get(R),hn=Gt.get(Z),xn=Gt.get(on.__renderTarget),xi=Gt.get(hn.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<Bt;Pi++)Ie&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,K,kt+Pi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.get(Z).__webglTexture,Et,We+Pi)),H.blitFramebuffer(te,qt,Ct,wt,he,Ee,Ct,wt,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Gt.has(R)){const on=Gt.get(R),hn=Gt.get(Z);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,Xo),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ni);for(let xn=0;xn<Bt;xn++)Ie?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,K,kt+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,K),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,Et,We+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,Et),K!==0?H.blitFramebuffer(te,qt,Ct,wt,he,Ee,Ct,wt,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(Ye,Et,he,Ee,We+xn,te,qt,Ct,wt):H.copyTexSubImage2D(Ye,Et,he,Ee,te,qt,Ct,wt);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ye,Et,he,Ee,We,Ct,wt,Bt,ve,Yt,_e.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Et,he,Ee,We,Ct,wt,Bt,ve,_e.data):H.texSubImage3D(Ye,Et,he,Ee,We,Ct,wt,Bt,ve,Yt,_e):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,he,Ee,Ct,wt,ve,Yt,_e.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,he,Ee,_e.width,_e.height,ve,_e.data):H.texSubImage2D(H.TEXTURE_2D,Et,he,Ee,Ct,wt,ve,Yt,_e);H.pixelStorei(H.UNPACK_ROW_LENGTH,ye),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ua),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ve),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Oi),Et===0&&Z.generateMipmaps&&H.generateMipmap(Ye),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,st=null,ot=null,K=0){return Au('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Z,st,ot,K)},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){F=0,B=0,Y=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const d0=`#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float color = 0.0;
    color += sin(uv.x * cos(u_time / 15.0) * 80.0) + cos(uv.y * cos(u_time / 15.0) * 10.0);
    color += sin(uv.y * sin(u_time / 10.0) * 40.0) + cos(uv.x * sin(u_time / 25.0) * 40.0);
    color += sin(uv.x * sin(u_time / 5.0) * 10.0) + sin(uv.y * sin(u_time / 35.0) * 80.0);
    color *= sin(u_time / 10.0) * 0.5;
    gl_FragColor = vec4(
        vec3(
            sin(color + u_time / 2.0) * 0.5 + 0.5,
            sin(color + u_time / 3.0) * 0.5 + 0.5,
            sin(color + u_time / 4.0) * 0.5 + 0.5
        ),
        1.0
    );
}
`,h0=`
attribute float faceIndex;
varying vec2 vUv;
varying vec3 vNormal;
varying float vFaceIndex;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vFaceIndex = faceIndex;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function LA({fragmentShader:s,vertexShader:t,geometryType:i="cube",shouldRotate:r=!0}){const l=Wt.useRef();Wt.useRef();const c=Wt.useRef(),d=Wt.useRef(),[h,m]=Wt.useState(null),p=.01;return Wt.useEffect(()=>{const g=new HM;c.current=g;const v=new oi(75,1,.1,1e3);v.position.z=5;const x=new UA({antialias:!0});x.setSize(l.current.clientWidth,l.current.clientHeight),l.current.appendChild(x.domElement);const M=new H_(16777215,1);M.position.set(1,1,2).normalize(),g.add(M);const A=new H_(16777215,.5);A.position.set(-1,-1,-2).normalize(),g.add(A);const C=new YM(4210752,.5);g.add(C);let y;switch(i){case"plane":y=new Ho(4,4),_(y,[0]);break;case"sphere":y=new Mh(1.2,32,32);const rt=y.attributes.position.count,et=new Float32Array(rt);for(let ft=0;ft<rt;ft++){const $=y.attributes.position.array[ft*3],N=y.attributes.position.array[ft*3+1],X=y.attributes.position.array[ft*3+2],k=Math.abs($),St=Math.abs(N),U=Math.abs(X);k>St&&k>U?et[ft]=$>0?0:1:St>k&&St>U?et[ft]=N>0?2:3:et[ft]=X>0?4:5}y.setAttribute("faceIndex",new li(et,1));break;case"cube":default:y=new Ts(2,2,2),y=y.toNonIndexed(),_(y,[0,1,2,3,4,5]);break}function _(rt,et){const ft=rt.attributes.position.count,$=1,N=new Float32Array(ft);if(rt.type==="BoxGeometry")for(let X=0;X<6;X++)for(let k=0;k<6;k++)N[X*6+k]=et[X];else for(let X=0;X<ft;X++){const k=Math.floor(X/(ft/et.length));N[X]=et[Math.min(k,et.length-1)]}rt.setAttribute("faceIndex",new li(N,$))}const P=l.current.clientWidth,O=l.current.clientHeight,D={u_time:{value:0},u_resolution:{value:new Re(P,O)},time:{value:0},resolution:{value:new Re(P,O)}};let I;try{I=new Di({vertexShader:t||h0,fragmentShader:s||d0,uniforms:D,side:mi}),m(null)}catch(rt){m(rt.message),I=new Di({vertexShader:h0,fragmentShader:d0,uniforms:D,side:mi})}const F=new Ri(y,I);d.current=F,g.add(F);let B=Date.now(),Y;function w(){Y=requestAnimationFrame(w),D.u_time.value=(Date.now()-B)/1e3,r&&d.current&&i!=="plane"&&(d.current.rotation.x+=p,d.current.rotation.y+=p),x.render(g,v)}w();const T=()=>{const rt=l.current.clientWidth,et=l.current.clientHeight;v.aspect=rt/et,v.updateProjectionMatrix(),x.setSize(rt,et),D.u_resolution.value.set(rt,et),D.time.value=(Date.now()-B)/1e3,D.resolution.value.set(rt,et)};T();const G=new ResizeObserver(T);return G.observe(l.current),()=>{G.disconnect(),cancelAnimationFrame(Y),x.dispose(),l.current&&(l.current.innerHTML="")}},[s,t,i,r]),At.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[At.jsx("div",{ref:l,style:{width:"100%",height:"100%"}}),h&&At.jsxs("div",{style:{position:"absolute",bottom:"1rem",left:"1rem",right:"1rem",backgroundColor:"rgba(239, 68, 68, 0.9)",color:"white",padding:"1rem",borderRadius:"4px",fontSize:"0.875rem",fontFamily:"monospace",whiteSpace:"pre-wrap",maxHeight:"200px",overflowY:"auto"},children:[At.jsx("div",{style:{marginBottom:"0.5rem",fontWeight:"bold"},children:"Shader Compilation Error:"}),h]})]})}const NA=`#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float color = 0.0;
    color += sin(uv.x * cos(u_time / 15.0) * 80.0) + cos(uv.y * cos(u_time / 15.0) * 10.0);
    color += sin(uv.y * sin(u_time / 10.0) * 40.0) + cos(uv.x * sin(u_time / 25.0) * 40.0);
    color += sin(uv.x * sin(u_time / 5.0) * 10.0) + sin(uv.y * sin(u_time / 35.0) * 80.0);
    color *= sin(u_time / 10.0) * 0.5;
    gl_FragColor = vec4(
        vec3(
            sin(color + u_time / 2.0) * 0.5 + 0.5,
            sin(color + u_time / 3.0) * 0.5 + 0.5
            sin(color + u_time / 4.0) * 0.5 + 0.5
        ),
        1.0
    );
}
`;function OA(){const[s,t]=Wt.useState(""),[i,r]=Wt.useState(NA),[l,c]=Wt.useState(""),[d,h]=Wt.useState("plane"),[m,p]=Wt.useState(!0),[g,v]=Wt.useState(!1),x=async y=>{r("");let _=0;const P=3;for(v(!0);_<y.length;)r(O=>O+y.slice(_,_+P)),await new Promise(O=>setTimeout(O,30)),_+=P;v(!1)},M=async y=>{v(!0),h(y);const _=await dS(s,y);await x(_)},A={padding:"0.5rem 1rem",backgroundColor:"#343541",color:"white",border:"1px solid #565869",borderRadius:"4px",cursor:"pointer",marginRight:"0.5rem",fontSize:"0.875rem",transition:"background-color 0.2s"},C={...A,backgroundColor:"#40414f",borderColor:"#565869"};return At.jsxs("div",{style:{height:"100vh",display:"flex",backgroundColor:"#1a1a1a",color:"#ffffff",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",position:"relative"},children:[At.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",borderRight:"1px solid rgba(255, 255, 255, 0.1)",background:"linear-gradient(to bottom, #1a1a1a, #2a2a2a)"},children:[At.jsxs("div",{style:{padding:"1.5rem",borderBottom:"1px solid rgba(255, 255, 255, 0.1)"},children:[At.jsxs("h1",{style:{margin:0,fontSize:"1.5rem",fontWeight:"600",background:"linear-gradient(90deg, #fff, #aaa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-flex",alignItems:"center",fontFamily:'Menlo, Monaco, "Fira Mono", "Liberation Mono", "Consolas", monospace'},children:["nlp to glsl.",At.jsx("span",{className:"blinking-cursor",style:{display:"inline-block",width:"1ch",fontWeight:400,fontSize:"1.5rem",lineHeight:1,background:"linear-gradient(90deg, #fff, #aaa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:'Menlo, Monaco, "Fira Mono", "Liberation Mono", "Consolas", monospace'},children:"|"})]}),At.jsx("style",{children:`
            .blinking-cursor {
              animation: blink-cursor 1s steps(1) infinite;
            }
            @keyframes blink-cursor {
              0%, 49% { opacity: 1; }
              50%, 100% { opacity: 0; }
            }
          `})]}),At.jsx("div",{style:{flex:1,padding:"1.5rem",overflowY:"auto"},children:At.jsx(pS,{prompt:s,setPrompt:t,onSubmit:M,isGenerating:g,currentCode:i})})]}),At.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:At.jsxs("div",{style:{display:"flex",flex:1,gap:"1.5rem",padding:"1.5rem",minHeight:0},children:[At.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",backgroundColor:"#2a2a2a",borderRadius:"12px",padding:"1.5rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",minHeight:0},children:At.jsxs("div",{style:{flex:1,minHeight:0,display:"flex",flexDirection:"column"},children:[At.jsxs("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[At.jsx("h2",{style:{fontSize:"1rem",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)"},children:"Shader Code"}),At.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[At.jsx("button",{onClick:()=>p(!m),style:{...m?C:A,padding:"0.5rem 1rem",borderRadius:"6px",fontSize:"0.875rem",fontWeight:"500",transition:"all 0.2s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},children:m?"Stop Rotation":"Start Rotation"}),At.jsx("button",{onClick:()=>c(i),style:{...A,padding:"0.5rem 1rem",borderRadius:"6px",fontSize:"0.875rem",fontWeight:"500",transition:"all 0.2s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"},disabled:g,children:"Apply Shader"})]})]}),At.jsx("div",{style:{flex:1,minHeight:0},children:At.jsx(yy,{code:i,setCode:r})})]})}),At.jsxs("div",{style:{flex:1,minHeight:0,backgroundColor:"#2a2a2a",borderRadius:"12px",padding:"1.5rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column"},children:[At.jsxs("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[At.jsx("h2",{style:{fontSize:"1rem",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)"},children:"Shader Preview"}),At.jsx("div",{style:{fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.6)",textTransform:"capitalize"},children:d})]}),At.jsx("div",{style:{flex:1,minHeight:0,position:"relative",overflow:"hidden"},children:At.jsx(LA,{fragmentShader:l,geometryType:d,shouldRotate:m})})]})]})}),At.jsx("div",{style:{position:"absolute",bottom:"10px",left:"10px",fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.5)",fontFamily:"Menlo, Monaco, 'Courier New', monospace",zIndex:10,padding:"4px 8px",borderRadius:"4px",background:"rgba(0, 0, 0, 0.2)"},children:"made by kyuhong."})]})}fS.createRoot(document.getElementById("root")).render(At.jsx(OA,{}));
