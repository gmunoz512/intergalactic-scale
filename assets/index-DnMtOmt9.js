(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Id={exports:{}},xl={};var ex;function ib(){if(ex)return xl;ex=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return xl.Fragment=t,xl.jsx=i,xl.jsxs=i,xl}var nx;function ab(){return nx||(nx=1,Id.exports=ib()),Id.exports}var Vt=ab(),Bd={exports:{}},he={};var ix;function rb(){if(ix)return he;ix=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),S=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function L(F,ft,wt){this.props=F,this.context=ft,this.refs=y,this.updater=wt||A}L.prototype.isReactComponent={},L.prototype.setState=function(F,ft){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ft,"setState")},L.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function I(){}I.prototype=L.prototype;function C(F,ft,wt){this.props=F,this.context=ft,this.refs=y,this.updater=wt||A}var U=C.prototype=new I;U.constructor=C,b(U,L.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function N(){}var E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function z(F,ft,wt){var V=wt.ref;return{$$typeof:o,type:F,key:ft,ref:V!==void 0?V:null,props:wt}}function H(F,ft){return z(F.type,ft,F.props)}function tt(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function Z(F){var ft={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(wt){return ft[wt]})}var j=/\/+/g;function J(F,ft){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):ft.toString(36)}function W(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(N,N):(F.status="pending",F.then(function(ft){F.status==="pending"&&(F.status="fulfilled",F.value=ft)},function(ft){F.status==="pending"&&(F.status="rejected",F.reason=ft)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function K(F,ft,wt,V,pt){var Et=typeof F;(Et==="undefined"||Et==="boolean")&&(F=null);var Dt=!1;if(F===null)Dt=!0;else switch(Et){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(F.$$typeof){case o:case t:Dt=!0;break;case v:return Dt=F._init,K(Dt(F._payload),ft,wt,V,pt)}}if(Dt)return pt=pt(F),Dt=V===""?"."+J(F,0):V,D(pt)?(wt="",Dt!=null&&(wt=Dt.replace(j,"$&/")+"/"),K(pt,ft,wt,"",function(Be){return Be})):pt!=null&&(tt(pt)&&(pt=H(pt,wt+(pt.key==null||F&&F.key===pt.key?"":(""+pt.key).replace(j,"$&/")+"/")+Dt)),ft.push(pt)),1;Dt=0;var mt=V===""?".":V+":";if(D(F))for(var Ut=0;Ut<F.length;Ut++)V=F[Ut],Et=mt+J(V,Ut),Dt+=K(V,ft,wt,Et,pt);else if(Ut=M(F),typeof Ut=="function")for(F=Ut.call(F),Ut=0;!(V=F.next()).done;)V=V.value,Et=mt+J(V,Ut++),Dt+=K(V,ft,wt,Et,pt);else if(Et==="object"){if(typeof F.then=="function")return K(W(F),ft,wt,V,pt);throw ft=String(F),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function ct(F,ft,wt){if(F==null)return F;var V=[],pt=0;return K(F,V,"","",function(Et){return ft.call(wt,Et,pt++)}),V}function X(F){if(F._status===-1){var ft=F._result,wt=ft();wt.then(function(V){(F._status===0||F._status===-1)&&(F._status=1,F._result=V,wt.status===void 0&&(wt.status="fulfilled",wt.value=V))},function(V){(F._status===0||F._status===-1)&&(F._status=2,F._result=V,wt.status===void 0&&(wt.status="rejected",wt.reason=V))}),F._status===-1&&(F._status=0,F._result=wt)}if(F._status===1)return F._result.default;throw F._result}var at=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function _t(F){var ft=E.T,wt={};wt.types=ft!==null?ft.types:null,E.T=wt;try{var V=F(),pt=E.S;pt!==null&&pt(wt,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(N,at)}catch(Et){at(Et)}finally{ft!==null&&wt.types!==null&&(ft.types=wt.types),E.T=ft}}function Lt(F){var ft=E.T;if(ft!==null){var wt=ft.types;wt===null?ft.types=[F]:wt.indexOf(F)===-1&&wt.push(F)}else _t(Lt.bind(null,F))}var Nt={map:ct,forEach:function(F,ft,wt){ct(F,function(){ft.apply(this,arguments)},wt)},count:function(F){var ft=0;return ct(F,function(){ft++}),ft},toArray:function(F){return ct(F,function(ft){return ft})||[]},only:function(F){if(!tt(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return he.Activity=_,he.Children=Nt,he.Component=L,he.Fragment=i,he.Profiler=l,he.PureComponent=C,he.StrictMode=r,he.Suspense=p,he.ViewTransition=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,he.__COMPILER_RUNTIME={__proto__:null,c:function(F){return E.H.useMemoCache(F)}},he.addTransitionType=Lt,he.cache=function(F){return function(){return F.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(F,ft,wt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var V=b({},F.props),pt=F.key;if(ft!=null)for(Et in ft.key!==void 0&&(pt=""+ft.key),ft)!O.call(ft,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&ft.ref===void 0||(V[Et]=ft[Et]);var Et=arguments.length-2;if(Et===1)V.children=wt;else if(1<Et){for(var Dt=Array(Et),mt=0;mt<Et;mt++)Dt[mt]=arguments[mt+2];V.children=Dt}return z(F.type,pt,V)},he.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},he.createElement=function(F,ft,wt){var V,pt={},Et=null;if(ft!=null)for(V in ft.key!==void 0&&(Et=""+ft.key),ft)O.call(ft,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(pt[V]=ft[V]);var Dt=arguments.length-2;if(Dt===1)pt.children=wt;else if(1<Dt){for(var mt=Array(Dt),Ut=0;Ut<Dt;Ut++)mt[Ut]=arguments[Ut+2];pt.children=mt}if(F&&F.defaultProps)for(V in Dt=F.defaultProps,Dt)pt[V]===void 0&&(pt[V]=Dt[V]);return z(F,Et,pt)},he.createRef=function(){return{current:null}},he.forwardRef=function(F){return{$$typeof:d,render:F}},he.isValidElement=tt,he.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:X}},he.memo=function(F,ft){return{$$typeof:m,type:F,compare:ft===void 0?null:ft}},he.startTransition=_t,he.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},he.use=function(F){return E.H.use(F)},he.useActionState=function(F,ft,wt){return E.H.useActionState(F,ft,wt)},he.useCallback=function(F,ft){return E.H.useCallback(F,ft)},he.useContext=function(F){return E.H.useContext(F)},he.useDebugValue=function(){},he.useDeferredValue=function(F,ft){return E.H.useDeferredValue(F,ft)},he.useEffect=function(F,ft){return E.H.useEffect(F,ft)},he.useEffectEvent=function(F){return E.H.useEffectEvent(F)},he.useId=function(){return E.H.useId()},he.useImperativeHandle=function(F,ft,wt){return E.H.useImperativeHandle(F,ft,wt)},he.useInsertionEffect=function(F,ft){return E.H.useInsertionEffect(F,ft)},he.useLayoutEffect=function(F,ft){return E.H.useLayoutEffect(F,ft)},he.useMemo=function(F,ft){return E.H.useMemo(F,ft)},he.useOptimistic=function(F,ft){return E.H.useOptimistic(F,ft)},he.useReducer=function(F,ft,wt){return E.H.useReducer(F,ft,wt)},he.useRef=function(F){return E.H.useRef(F)},he.useState=function(F){return E.H.useState(F)},he.useSyncExternalStore=function(F,ft,wt){return E.H.useSyncExternalStore(F,ft,wt)},he.useTransition=function(){return E.H.useTransition()},he.version="19.3.0",he}var ax;function Rm(){return ax||(ax=1,Bd.exports=rb()),Bd.exports}var He=Rm(),Fd={exports:{}},Sl={},Hd={exports:{}},Gd={};var rx;function sb(){return rx||(rx=1,(function(o){function t(W,K){var ct=W.length;W.push(K);t:for(;0<ct;){var X=ct-1>>>1,at=W[X];if(0<l(at,K))W[X]=K,W[ct]=at,ct=X;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var K=W[0],ct=W.pop();if(ct!==K){W[0]=ct;t:for(var X=0,at=W.length,_t=at>>>1;X<_t;){var Lt=2*(X+1)-1,Nt=W[Lt],F=Lt+1,ft=W[F];if(0>l(Nt,ct))F<at&&0>l(ft,Nt)?(W[X]=ft,W[F]=ct,X=F):(W[X]=Nt,W[Lt]=ct,X=Lt);else if(F<at&&0>l(ft,ct))W[X]=ft,W[F]=ct,X=F;else break t}}return K}function l(W,K){var ct=W.sortIndex-K.sortIndex;return ct!==0?ct:W.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,_=null,g=3,S=!1,M=!1,A=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var K=i(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=W)r(m),K.sortIndex=K.expirationTime,t(p,K);else break;K=i(m)}}function U(W){if(A=!1,C(W),!M)if(i(p)!==null)M=!0,D||(D=!0,tt());else{var K=i(m);K!==null&&J(U,K.startTime-W)}}var D=!1,N=-1,E=5,O=-1;function z(){return b?!0:!(o.unstable_now()-O<E)}function H(){if(b=!1,D){var W=o.unstable_now();O=W;var K=!0;try{t:{M=!1,A&&(A=!1,L(N),N=-1),S=!0;var ct=g;try{e:{for(C(W),_=i(p);_!==null&&!(_.expirationTime>W&&z());){var X=_.callback;if(typeof X=="function"){_.callback=null,g=_.priorityLevel;var at=X(_.expirationTime<=W);if(W=o.unstable_now(),typeof at=="function"){_.callback=at,C(W),K=!0;break e}_===i(p)&&r(p),C(W)}else r(p);_=i(p)}if(_!==null)K=!0;else{var _t=i(m);_t!==null&&J(U,_t.startTime-W),K=!1}}break t}finally{_=null,g=ct,S=!1}K=void 0}}finally{K?tt():D=!1}}}var tt;if(typeof I=="function")tt=function(){I(H)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,j=Z.port2;Z.port1.onmessage=H,tt=function(){j.postMessage(null)}}else tt=function(){y(H,0)};function J(W,K){N=y(function(){W(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(W){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var ct=g;g=K;try{return W()}finally{g=ct}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(W,K){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ct=g;g=W;try{return K()}finally{g=ct}},o.unstable_scheduleCallback=function(W,K,ct){var X=o.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?X+ct:X):ct=X,W){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=ct+at,W={id:v++,callback:K,priorityLevel:W,startTime:ct,expirationTime:at,sortIndex:-1},ct>X?(W.sortIndex=ct,t(m,W),i(p)===null&&W===i(m)&&(A?(L(N),N=-1):A=!0,J(U,ct-X))):(W.sortIndex=at,t(p,W),M||S||(M=!0,D||(D=!0,tt()))),W},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(W){var K=g;return function(){var ct=g;g=K;try{return W.apply(this,arguments)}finally{g=ct}}}})(Gd)),Gd}var sx;function ob(){return sx||(sx=1,Hd.exports=sb()),Hd.exports}var Vd={exports:{}},Pn={};var ox;function lb(){if(ox)return Pn;ox=1;var o=Rm();function t(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,_,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:_,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(v){return{$$typeof:u,_reason:v}},Pn.createPortal=function(v,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return d(v,_,null,g)},Pn.flushSync=function(v){var _=p.T,g=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=_,r.p=g,r.d.f()}},Pn.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},Pn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Pn.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var g=_.as,S=m(g,_.crossOrigin),M=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:S,integrity:M,fetchPriority:A}):g==="script"&&r.d.X(v,{crossOrigin:S,integrity:M,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Pn.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=m(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(v)},Pn.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,S=m(g,_.crossOrigin);r.d.L(v,g,{crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Pn.preloadModule=function(v,_){if(typeof v=="string")if(_){var g=m(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(v)},Pn.requestFormReset=function(v){r.d.r(v)},Pn.unstable_batchedUpdates=function(v,_){return v(_)},Pn.useFormState=function(v,_,g){return p.H.useFormState(v,_,g)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var lx;function ub(){if(lx)return Vd.exports;lx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vd.exports=lb(),Vd.exports}var ux;function cb(){if(ux)return Sl;ux=1;var o=ob(),t=Rm(),i=ub();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,w=c.child;w;){if(w===a){x=!0,a=c,s=f;break}if(w===s){x=!0,s=c,a=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===a){x=!0,a=f,s=c;break}if(w===s){x=!0,s=f,a=c;break}w=w.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,c,f))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function M(e){var n=[null,null],a=g(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,s))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,L=null;function I(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function C(e,n,a){return e===a?(L=e,!1):e===n?(L!==null&&(y=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var N=Object.assign,E=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),J=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),_t=Symbol.for("react.activity"),Lt=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),wt=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=wt&&e[wt]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function Et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case Z:return"Profiler";case tt:return"StrictMode";case K:return"Suspense";case ct:return"SuspenseList";case _t:return"Activity";case F:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case J:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return n=e.displayName||null,n!==null?n:Et(e.type)||"Memo";case at:n=e._payload,e=e._init;try{return Et(e(n))}catch{}}return null}var Dt=Array.isArray,mt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Be={pending:!1,data:null,method:null,action:null},fe=[],bt=-1;function Ct(e){return{current:e}}function At(e){0>bt||(e.current=fe[bt],fe[bt]=null,bt--)}function $t(e,n){bt++,fe[bt]=e.current,e.current=n}var pe=Ct(null),Me=Ct(null),le=Ct(null),Ae=Ct(null);function Y(e,n){switch($t(le,n),$t(Me,e),$t(pe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=c_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}At(pe),$t(pe,e)}function Ge(){At(pe),At(Me),At(le)}function me(e){var n=e.memoizedState;n!==null&&($s._currentValue=n.memoizedState,$t(Ae,e)),n=pe.current;var a=f_(n,e.type);n!==a&&($t(Me,e),$t(pe,a))}function P(e){Me.current===e&&(At(pe),At(Me)),Ae.current===e&&(At(Ae),$s._currentValue=Be)}var T,it;function rt(e){if(T===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+e+it}var gt=!1;function Tt(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(Gt){var $=Gt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(Gt){$=Gt}yt=!1;try{var ut=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),yt=!0,new e}finally{yt&&(ut!==void 0?Object.defineProperty(e.prototype,"props",ut):delete e.prototype.props)}}}else{try{throw Error()}catch(Gt){$=Gt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(Gt){if(Gt&&$&&typeof Gt.stack=="string")return[Gt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var B=x.split(`
`),nt=w.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===nt.length)for(s=B.length-1,c=nt.length-1;1<=s&&0<=c&&B[s]!==nt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==nt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==nt[c]){var ht=`
`+B[s].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=s&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rt(a):""}function Ot(e,n){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return e.child!==n&&n!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return Tt(e.type,!1);case 11:return Tt(e.type.render,!1);case 1:return Tt(e.type,!0);case 31:return rt("Activity");case 30:return rt("ViewTransition");default:return""}}function vt(e){try{var n="",a=null;do n+=Ot(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xt=Object.prototype.hasOwnProperty,Pt=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,It=o.unstable_requestPaint,Kt=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,Q=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Ft=o.unstable_IdlePriority,Yt=o.log,Rt=o.unstable_setDisableYieldValue,ie=null,Wt=null;function Pe(e){if(typeof Yt=="function"&&Rt(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(ie,e)}catch{}}var ge=Math.clz32?Math.clz32:hf,si=Math.log,xi=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(si(e)/xi|0)|0}var ms=256,Lr=262144,ka=4194304;function va(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Or(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=s&134217727;return w!==0?(s=w&~f,s!==0?c=va(s):(x&=w,x!==0?c=va(x):a||(a=w&~e,a!==0&&(c=va(a))))):(w=s&~f,w!==0?c=va(w):x!==0?c=va(x):a||(a=s&~e,a!==0&&(c=va(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-ge(a),c=1<<s;n|=e[s],a&=~c}return n}function To(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ao(){var e=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),e}function gs(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Qi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,B=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-ge(a),yt=1<<ht;w[ht]=0,B[ht]=-1;var $=nt[ht];if($!==null)for(nt[ht]=null,ht=0;ht<$.length;ht++){var ut=$[ht];ut!==null&&(ut.lane&=-536870913)}a&=~yt}s!==0&&Pr(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Pr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ge(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ge(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function wo(e,n){var a=n&-n;return a=(a&42)!==0?1:Co(a),(a&(e.suspendedLanes|n))!==0?0:a}function Co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Do(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kl(){var e=Ut.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function Zl(e,n){var a=Ut.p;try{return Ut.p=e,n()}finally{Ut.p=a}}var Si=Math.random().toString(36).slice(2),R="__reactFiber$"+Si,G="__reactProps$"+Si,dt="__reactContainer$"+Si,ot="__reactEvents$"+Si,lt="__reactListeners$"+Si,kt="__reactHandles$"+Si,Zt="__reactResources$"+Si,Ht="__reactMarker$"+Si,jt="__reactLoad$"+Si;function te(e){delete e[R],delete e[G],delete e[lt],delete e[kt]}function ce(e){var n;if(n=e[R])return n;for(var a=e.parentNode;a;){if(n=a[dt]||a[R]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[R])return a;e=w_(e)}return n}e=a,a=e.parentNode}return null}function ve(e){if(e=e[R]||e[dt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Re(e){var n=e[Zt];return n||(n=e[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(e){e[Ht]=!0}function Je(e){e[jt]=void 0}var qe=new Set,yn={};function Xt(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(yn[e]=n,e=0;e<n.length;e++)qe.add(n[e])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},oi={};function Ji(e){return xt.call(oi,e)?!0:xt.call(Xn,e)?!1:ze.test(e)?oi[e]=!0:(Xn[e]=!0,!1)}var Ee=!1;function ke(){var e=Ee;return Ee=!1,e}function en(e,n,a){if(Ji(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function li(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ne(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _a(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ql(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function df(e){if(!e._valueTracker){var n=_a(e)?"checked":"value";e._valueTracker=Ql(e,n,""+e[n])}}function jm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=_a(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var Ey=/[\n"\\]/g;function yi(e){return e.replace(Ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pf(e,n,a,s,c,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?mf(e,fn(e.value)):mf(e,fn(n)):a!=null?mf(e,fn(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+fn(w):e.removeAttribute("name")}function $m(e,n,a,s,c,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){df(e);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=w?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),df(e)}function mf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function vs(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function t0(e,n,a){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fn(a):""}function e0(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),df(e)}function _s(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function n0(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ty.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function i0(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",Ee=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(n0(e,c,s),Ee=!0)}else for(var f in n)n.hasOwnProperty(f)&&n0(e,f,n[f])}function gf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ay=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return Ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var vf=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,Ss=null;function a0(e){var n=ve(e);if(n&&(e=n.stateNode)){var a=e[G]||null;t:switch(e=n.stateNode,n.type){case"input":if(pf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[G]||null;if(!c)throw Error(r(90));pf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&jm(s)}break t;case"textarea":t0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vs(e,!!a.multiple,n,!1)}}}var xf=!1;function r0(e,n,a){if(xf)return e(n,a);xf=!0;try{var s=e(n);return s}finally{if(xf=!1,(xs!==null||Ss!==null)&&(Ju(),xs&&(n=xs,e=Ss,Ss=xs=null,a0(n),e)))for(n=0;n<e.length;n++)a0(e[n])}}function No(e,n){var a=e.stateNode;if(a===null)return null;var s=a[G]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(xa)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Sf=!1}var qa=null,yf=null,jl=null;function s0(){if(jl)return jl;var e,n=yf,a=n.length,s,c="value"in qa?qa.value:qa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return jl=c.slice(e,1<s?1-s:void 0)}function $l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function o0(){return!1}function qn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tu:o0,this.isPropagationStopped=o0,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=qn(Wa),Lo=N({},Wa,{view:0,detail:0}),wy=qn(Lo),Mf,bf,Oo,nu=N({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Mf=e.screenX-Oo.screenX,bf=e.screenY-Oo.screenY):bf=Mf=0,Oo=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:bf}}),l0=qn(nu),Cy=N({},nu,{dataTransfer:0}),Dy=qn(Cy),Ny=N({},Lo,{relatedTarget:0}),Ef=qn(Ny),Uy=N({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=qn(Uy),Oy=N({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Py=qn(Oy),zy=N({},Wa,{data:0}),u0=qn(zy),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fy[e])?!!n[e]:!1}function Tf(){return Hy}var Gy=N({},Lo,{key:function(e){if(e.key){var n=Iy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?By[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vy=qn(Gy),ky=N({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c0=qn(ky),Xy=N({},Wa,{submitter:0}),qy=qn(Xy),Wy=N({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),Yy=qn(Wy),Ky=N({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=qn(Ky),Qy=N({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=qn(Qy),jy=N({},Wa,{newState:0,oldState:0,source:0}),$y=qn(jy),tM=[9,13,27,32],Af=xa&&"CompositionEvent"in window,Po=null;xa&&"documentMode"in document&&(Po=document.documentMode);var eM=xa&&"TextEvent"in window&&!Po,f0=xa&&(!Af||Po&&8<Po&&11>=Po),h0=" ",d0=!1;function p0(e,n){switch(e){case"keyup":return tM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function nM(e,n){switch(e){case"compositionend":return m0(n);case"keypress":return n.which!==32?null:(d0=!0,h0);case"textInput":return e=n.data,e===h0&&d0?null:e;default:return null}}function iM(e,n){if(ys)return e==="compositionend"||!Af&&p0(e,n)?(e=s0(),jl=yf=qa=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return f0&&n.locale!=="ko"?null:n.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aM[e.type]:n==="textarea"}function v0(e,n,a,s){xs?Ss?Ss.push(s):Ss=[s]:xs=s,n=ic(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var zo=null,Io=null;function rM(e){a_(e,0)}function iu(e){var n=Qt(e);if(jm(n))return e}function _0(e,n){if(e==="change")return n}var x0=!1;if(xa){var Rf;if(xa){var wf="oninput"in document;if(!wf){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),wf=typeof S0.oninput=="function"}Rf=wf}else Rf=!1;x0=Rf&&(!document.documentMode||9<document.documentMode)}function y0(){zo&&(zo.detachEvent("onpropertychange",M0),Io=zo=null)}function M0(e){if(e.propertyName==="value"&&iu(Io)){var n=[];v0(n,Io,e,_f(e)),r0(rM,n)}}function sM(e,n,a){e==="focusin"?(y0(),zo=n,Io=a,zo.attachEvent("onpropertychange",M0)):e==="focusout"&&y0()}function oM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return iu(Io)}function lM(e,n){if(e==="click")return iu(n)}function uM(e,n){if(e==="input"||e==="change")return iu(n)}function cM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:cM;function Bo(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!xt.call(n,c)||!ui(e[c],n[c]))return!1}return!0}function Cf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function b0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E0(e,n){var a=b0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=b0(a)}}function T0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?T0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function A0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Cf(e.document)}return n}function Df(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fM=xa&&"documentMode"in document&&11>=document.documentMode,Ms=null,Nf=null,Fo=null,Uf=!1;function R0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uf||Ms==null||Ms!==Cf(s)||(s=Ms,"selectionStart"in s&&Df(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fo&&Bo(Fo,s)||(Fo=s,s=ic(Nf,"onSelect"),0<s.length&&(n=new eu("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ms)))}function zr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bs={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionrun:zr("Transition","TransitionRun"),transitionstart:zr("Transition","TransitionStart"),transitioncancel:zr("Transition","TransitionCancel"),transitionend:zr("Transition","TransitionEnd")},Lf={},w0={};xa&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Ir(e){if(Lf[e])return Lf[e];if(!bs[e])return e;var n=bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in w0)return Lf[e]=n[a];return e}var C0=Ir("animationend"),D0=Ir("animationiteration"),N0=Ir("animationstart"),hM=Ir("transitionrun"),dM=Ir("transitionstart"),pM=Ir("transitioncancel"),U0=Ir("transitionend"),L0=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Li(e,n){L0.set(e,n),Xt(n,[e])}var mM=0;function Sa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=mM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function O0(e){if(e==null||typeof e=="string")return e;var n=null,a=ks;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ya(e,n){return e=O0(e),n=O0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Es=0,Pf=0;function ru(){for(var e=Es,n=Pf=Es=0;n<e;){var a=Mi[n];Mi[n++]=null;var s=Mi[n];Mi[n++]=null;var c=Mi[n];Mi[n++]=null;var f=Mi[n];if(Mi[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&P0(a,c,f)}}function su(e,n,a,s){Mi[Es++]=e,Mi[Es++]=n,Mi[Es++]=a,Mi[Es++]=s,Pf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function zf(e,n,a,s){return su(e,n,a,s),ou(e)}function Br(e,n){return su(e,null,null,n),ou(e)}function P0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ge(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ou(e){if(50<ol)throw ol=0,Qu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ts={};function gM(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,s){return new gM(e,n,a,s)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function z0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lu(e,n,a,s,c,f){var x=0;if(s=e,typeof s=="function")If(s)&&(x=1);else if(typeof s=="string")x=X1(e,a,pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(s){case _t:return e=Jn(31,a,n,c),e.elementType=_t,e.lanes=f,e;case H:return Fr(a.children,c,f,n);case tt:x=8,c|=24;break;case Z:return e=Jn(12,a,n,c|2),e.elementType=Z,e.lanes=f,e;case K:return e=Jn(13,a,n,c),e.elementType=K,e.lanes=f,e;case ct:return e=Jn(19,a,n,c),e.elementType=ct,e.lanes=f,e;case Lt:case F:return e=c|32,e=Jn(30,a,n,e),e.elementType=F,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case J:x=10;break t;case j:x=9;break t;case W:x=11;break t;case X:x=14;break t;case at:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Jn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Fr(e,n,a,s){return e=Jn(7,e,s,n),e.lanes=a,e}function Bf(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function I0(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Ff(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var B0=new WeakMap;function bi(e,n){if(typeof e=="object"&&e!==null){var a=B0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},B0.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var As=[],Rs=0,uu=null,Ho=0,Ei=[],Ti=0,Ya=null,$i=1,ta="";function ba(e,n){As[Rs++]=Ho,As[Rs++]=uu,uu=e,Ho=n}function F0(e,n,a){Ei[Ti++]=$i,Ei[Ti++]=ta,Ei[Ti++]=Ya,Ya=e;var s=$i;e=ta;var c=32-ge(s)-1;s&=~(1<<c),a+=1;var f=32-ge(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,$i=1<<32-ge(n)+c|a<<c|s,ta=f+e}else $i=1<<f|a<<c|s,ta=e}function cu(e){e.return!==null&&(ba(e,1),F0(e,1,0))}function Hf(e){for(;e===uu;)uu=As[--Rs],As[Rs]=null,Ho=As[--Rs],As[Rs]=null;for(;e===Ya;)Ya=Ei[--Ti],Ei[Ti]=null,ta=Ei[--Ti],Ei[Ti]=null,$i=Ei[--Ti],Ei[Ti]=null}function H0(e,n){Ei[Ti++]=$i,Ei[Ti++]=ta,Ei[Ti++]=Ya,$i=n.id,ta=n.overflow,Ya=e}var Tn=null,nn=null,Te=!1,Ka=null,Ai=!1,Gf=Error(r(519));function Za(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(bi(n,e)),Gf}function G0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[R]=e,n[G]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)Ce(ul[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),$m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),e0(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||l_(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Za(e,!0)}function fu(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Tn=Tn.return}}function ws(e){if(e!==Tn)return!1;if(!Te)return fu(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vd(e.type,e.memoizedProps)),a=!a),a&&nn&&Za(e),fu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=R_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=R_(e)}else n===27?(n=nn,fr(e.type)?(e=Ad,Ad=null,nn=e):nn=n):nn=Tn?wi(e.stateNode.nextSibling):null;return!0}function Hr(){nn=Tn=null,Te=!1}function Vf(){var e=Ka;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Ka=null),e}function Go(e){Ka===null?Ka=[e]:Ka.push(e)}var kf=Ct(null),Gr=null,Ea=null;function Qa(e,n,a){$t(kf,n._currentValue),n._currentValue=a}function Ta(e){e._currentValue=kf.current,At(kf)}function hu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Xf(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=c;for(var B=0;B<n.length;B++)if(w.context===n[B]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),hu(f.return,a,e),s||(x=null);break t}f=w.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),hu(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),hu(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Vr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var w=c.type;ui(c.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(c===Ae.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push($s):e=[$s])}c=c.return}return e!==null&&Xf(n,e,a,s),n.flags|=262144,e!==null}function du(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kr(e){Gr=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return V0(Gr,e)}function pu(e,n){return Gr===null&&kr(e),V0(e,n)}function V0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(e===null)throw Error(r(308));Ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ea=Ea.next=n;return a}var vM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},_M=o.unstable_scheduleCallback,xM=o.unstable_NormalPriority,mn={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new vM,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&_M(xM,function(){e.controller.abort()})}function k0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var ko=null;function SM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Xo=null,Wf=0,Xr=0,Cs=null;function yM(e,n){if(Xo===null){var a=Xo=[];Wf=0,Xr=ld(),Cs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Wf++,n.then(X0,X0),n}function X0(){if(--Wf===0&&(ko=null,Xo!==null)){Cs!==null&&(Cs.status="fulfilled");var e=Xo;Xo=null,Xr=0,Cs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function MM(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var q0=mt.S;mt.S=function(e,n){if(Iv=Kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yM(e,n),ko!==null)for(var a=Ys;a!==null;)k0(a,ko),a=a.next;if(a=e.types,a!==null){for(var s=Ys;s!==null;)k0(s,a),s=s.next;if(Xr!==0){s=ko,s===null&&(s=ko=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}q0!==null&&q0(e,n)};var qr=Ct(null);function Yf(){var e=qr.current;return e!==null?e:$e.pooledCache}function mu(e,n){n===null?$t(qr,qr.current):$t(qr,n.pool)}function W0(){var e=Yf();return e===null?null:{parent:mn._currentValue,pool:e}}var Ds=Error(r(460)),Kf=Error(r(474)),gu=Error(r(542)),vu={then:function(){}};function Y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function K0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Q0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Q0(e),e}throw Yr=n,Ds}}function Wr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Yr=a,Ds):a}}var Yr=null;function Z0(){if(Yr===null)throw Error(r(459));var e=Yr;return Yr=null,e}function Q0(e){if(e===Ds||e===gu)throw Error(r(483))}var Ns=null,qo=0;function _u(e){var n=qo;return qo+=1,Ns===null&&(Ns=[]),K0(Ns,e,n)}function Ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xu(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function J0(e){function n(et,k){if(e){var st=et.deletions;st===null?(et.deletions=[k],et.flags|=16):st.push(k)}}function a(et,k){if(!e)return null;for(;k!==null;)n(et,k),k=k.sibling;return null}function s(et){for(var k=new Map;et!==null;)et.key===null?k.set(et.index,et):k.set(et.key,et),et=et.sibling;return k}function c(et,k){return et=Ma(et,k),et.index=0,et.sibling=null,et}function f(et,k,st){return et.index=st,e?(st=et.alternate,st!==null?(st=st.index,st<k?(et.flags|=2,k):st):(et.flags|=134217730,k)):(et.flags|=1048576,k)}function x(et){return e&&et.alternate===null&&(et.flags|=134217730),et}function w(et,k,st,St){return k===null||k.tag!==6?(k=Bf(st,et.mode,St),k.return=et,k):(k=c(k,st),k.return=et,k)}function B(et,k,st,St){var Jt=st.type;return Jt===H?(et=ht(et,k,st.props.children,St,st.key),Ja(et,st),et):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===at&&Wr(Jt)===k.type)?(k=c(k,st.props),Ja(k,st),k.return=et,k):(k=lu(st.type,st.key,st.props,null,et.mode,St),Ja(k,st),k.return=et,k)}function nt(et,k,st,St){return k===null||k.tag!==4||k.stateNode.containerInfo!==st.containerInfo||k.stateNode.implementation!==st.implementation?(k=Ff(st,et.mode,St),k.return=et,k):(k=c(k,st.children||[]),k.return=et,k)}function ht(et,k,st,St,Jt){return k===null||k.tag!==7?(k=Fr(st,et.mode,St,Jt),k.return=et,k):(k=c(k,st),k.return=et,k)}function yt(et,k,st){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Bf(""+k,et.mode,st),k.return=et,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return st=lu(k.type,k.key,k.props,null,et.mode,st),Ja(st,k),st.return=et,st;case z:return k=Ff(k,et.mode,st),k.return=et,k;case at:return k=Wr(k),yt(et,k,st)}if(Dt(k)||V(k))return k=Fr(k,et.mode,st,null),k.return=et,k;if(typeof k.then=="function")return yt(et,_u(k),st);if(k.$$typeof===J)return yt(et,pu(et,k),st);xu(et,k)}return null}function $(et,k,st,St){var Jt=k!==null?k.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Jt!==null?null:w(et,k,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case O:return st.key===Jt?B(et,k,st,St):null;case z:return st.key===Jt?nt(et,k,st,St):null;case at:return st=Wr(st),$(et,k,st,St)}if(Dt(st)||V(st))return Jt!==null?null:ht(et,k,st,St,null);if(typeof st.then=="function")return $(et,k,_u(st),St);if(st.$$typeof===J)return $(et,k,pu(et,st),St);xu(et,st)}return null}function ut(et,k,st,St,Jt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return et=et.get(st)||null,w(k,et,""+St,Jt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case O:return et=et.get(St.key===null?st:St.key)||null,B(k,et,St,Jt);case z:return et=et.get(St.key===null?st:St.key)||null,nt(k,et,St,Jt);case at:return St=Wr(St),ut(et,k,st,St,Jt)}if(Dt(St)||V(St))return et=et.get(st)||null,ht(k,et,St,Jt,null);if(typeof St.then=="function")return ut(et,k,st,_u(St),Jt);if(St.$$typeof===J)return ut(et,k,st,pu(k,St),Jt);xu(k,St)}return null}function Gt(et,k,st,St){for(var Jt=null,Le=null,ae=k,oe=k=0,_n=null;ae!==null&&oe<st.length;oe++){ae.index>oe?(_n=ae,ae=null):_n=ae.sibling;var Fe=$(et,ae,st[oe],St);if(Fe===null){ae===null&&(ae=_n);break}e&&ae&&Fe.alternate===null&&n(et,ae),k=f(Fe,k,oe),Le===null?Jt=Fe:Le.sibling=Fe,Le=Fe,ae=_n}if(oe===st.length)return a(et,ae),Te&&ba(et,oe),Jt;if(ae===null){for(;oe<st.length;oe++)ae=yt(et,st[oe],St),ae!==null&&(k=f(ae,k,oe),Le===null?Jt=ae:Le.sibling=ae,Le=ae);return Te&&ba(et,oe),Jt}for(ae=s(ae);oe<st.length;oe++)_n=ut(ae,et,oe,st[oe],St),_n!==null&&(e&&(Fe=_n.alternate,Fe!==null&&ae.delete(Fe.key===null?oe:Fe.key)),k=f(_n,k,oe),Le===null?Jt=_n:Le.sibling=_n,Le=_n);return e&&ae.forEach(function(gr){return n(et,gr)}),Te&&ba(et,oe),Jt}function ee(et,k,st,St){if(st==null)throw Error(r(151));for(var Jt=null,Le=null,ae=k,oe=k=0,_n=null,Fe=st.next();ae!==null&&!Fe.done;oe++,Fe=st.next()){ae.index>oe?(_n=ae,ae=null):_n=ae.sibling;var gr=$(et,ae,Fe.value,St);if(gr===null){ae===null&&(ae=_n);break}e&&ae&&gr.alternate===null&&n(et,ae),k=f(gr,k,oe),Le===null?Jt=gr:Le.sibling=gr,Le=gr,ae=_n}if(Fe.done)return a(et,ae),Te&&ba(et,oe),Jt;if(ae===null){for(;!Fe.done;oe++,Fe=st.next())Fe=yt(et,Fe.value,St),Fe!==null&&(k=f(Fe,k,oe),Le===null?Jt=Fe:Le.sibling=Fe,Le=Fe);return Te&&ba(et,oe),Jt}for(ae=s(ae);!Fe.done;oe++,Fe=st.next())Fe=ut(ae,et,oe,Fe.value,St),Fe!==null&&(e&&(_n=Fe.alternate,_n!==null&&ae.delete(_n.key===null?oe:_n.key)),k=f(Fe,k,oe),Le===null?Jt=Fe:Le.sibling=Fe,Le=Fe);return e&&ae.forEach(function(nb){return n(et,nb)}),Te&&ba(et,oe),Jt}function Se(et,k,st,St){if(typeof st=="object"&&st!==null&&st.type===H&&st.key===null&&st.props.ref===void 0&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case O:t:{for(var Jt=st.key;k!==null;){if(k.key===Jt){if(Jt=st.type,Jt===H){if(k.tag===7){a(et,k.sibling),St=c(k,st.props.children),Ja(St,st),St.return=et,et=St;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===at&&Wr(Jt)===k.type){a(et,k.sibling),St=c(k,st.props),Ja(St,st),St.return=et,et=St;break t}a(et,k);break}else n(et,k);k=k.sibling}st.type===H?(St=Fr(st.props.children,et.mode,St,st.key),Ja(St,st),St.return=et,et=St):(St=lu(st.type,st.key,st.props,null,et.mode,St),Ja(St,st),St.return=et,et=St)}return x(et);case z:t:{for(Jt=st.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===st.containerInfo&&k.stateNode.implementation===st.implementation){a(et,k.sibling),St=c(k,st.children||[]),St.return=et,et=St;break t}else{a(et,k);break}else n(et,k);k=k.sibling}St=Ff(st,et.mode,St),St.return=et,et=St}return x(et);case at:return st=Wr(st),Se(et,k,st,St)}if(Dt(st))return Gt(et,k,st,St);if(V(st)){if(Jt=V(st),typeof Jt!="function")throw Error(r(150));return st=Jt.call(st),ee(et,k,st,St)}if(typeof st.then=="function")return Se(et,k,_u(st),St);if(st.$$typeof===J)return Se(et,k,pu(et,st),St);xu(et,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,k!==null&&k.tag===6?(a(et,k.sibling),St=c(k,st),St.return=et,et=St):(a(et,k),St=Bf(st,et.mode,St),St.return=et,et=St),x(et)):a(et,k)}return function(et,k,st,St){try{qo=0;var Jt=Se(et,k,st,St);return Ns=null,Jt}catch(ae){if(ae===Ds||ae===gu)throw ae;var Le=Jn(29,ae,null,et.mode);return Le.lanes=St,Le.return=et,Le}}}var Kr=J0(!0),j0=J0(!1),ja=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function tr(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Xe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ou(e),P0(e,null,a),n}return su(e,s,n,a),ou(e)}function Wo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ro(e,a)}}function Jf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var jf=!1;function Yo(){if(jf){var e=Cs;if(e!==null)throw e}}function Ko(e,n,a,s){jf=!1;var c=e.updateQueue;ja=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var B=w,nt=B.next;B.next=null,x===null?f=nt:x.next=nt,x=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,w=ht.lastBaseUpdate,w!==x&&(w===null?ht.firstBaseUpdate=nt:w.next=nt,ht.lastBaseUpdate=B))}if(f!==null){var yt=c.baseState;x=0,ht=nt=B=null,w=f;do{var $=w.lane&-536870913,ut=$!==w.lane;if(ut?(Ue&$)===$:(s&$)===$){$!==0&&$===Xr&&(jf=!0),ht!==null&&(ht=ht.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Gt=e,ee=w;$=n;var Se=a;switch(ee.tag){case 1:if(Gt=ee.payload,typeof Gt=="function"){yt=Gt.call(Se,yt,$);break t}yt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ee.payload,$=typeof Gt=="function"?Gt.call(Se,yt,$):Gt,$==null)break t;yt=N({},yt,$);break t;case 2:ja=!0}}$=w.callback,$!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[$]:ut.push($))}else ut={lane:$,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ht===null?(nt=ht=ut,B=yt):ht=ht.next=ut,x|=$;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;ut=w,w=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);ht===null&&(B=yt),c.baseState=B,c.firstBaseUpdate=nt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),or|=x,e.lanes=x,e.memoizedState=yt}}function $0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function tg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$0(a[e],n)}var er=Ct(null),Su=Ct(0);function eg(e,n){e=Da,$t(Su,e),$t(er,n),Da=e|n.baseLanes}function $f(){$t(Su,Da),$t(er,er.current)}function th(){Da=Su.current,At(er),At(Su)}var Nn=Ct(null),In=null;function nr(e){var n=e.alternate;$t(Un,Un.current&1),$t(Nn,e),In===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(In=e)}function eh(e){$t(Un,Un.current),$t(Nn,e),In===null&&(In=e)}function ng(e){e.tag===22?($t(Un,Un.current),$t(Nn,e),In===null&&(In=e)):ir()}function ir(){$t(Un,Un.current),$t(Nn,Nn.current)}function ci(e){At(Nn),In===e&&(In=null),At(Un)}var Un=Ct(0);function Zo(e,n){$t(Nn,Nn.current),$t(Un,n)}function nh(e){At(Un),At(Nn),In===e&&(In=null)}function yu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Aa=0,xe=null,je=null,gn=null,Mu=!1,Us=!1,Zr=!1,bu=0,Qo=0,Ls=null,bM=0;function hn(){throw Error(r(321))}function ih(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function ah(e,n,a,s,c,f){return Aa=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mt.H=e===null||e.memoizedState===null?Fg:Hg,Zr=!1,f=a(s,c),Zr=!1,Us&&(f=ag(n,a,s,c)),ig(e),f}function ig(e){mt.H=Du;var n=je!==null&&je.next!==null;if(Aa=0,gn=je=xe=null,Mu=!1,Qo=0,Ls=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&du(e)&&(vn=!0))}function ag(e,n,a,s){xe=e;var c=0;do{if(Us&&(Ls=null),Qo=0,Us=!1,25<=c)throw Error(r(301));if(c+=1,gn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}mt.H=NM,f=n(a,s)}while(Us);return f}function EM(){var e=mt.H,n=e.useState()[0];return n=typeof n.then=="function"?Jo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(xe.flags|=1024),n}function rh(){var e=bu!==0;return bu=0,e}function sh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function oh(e){if(Mu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mu=!1}Aa=0,gn=je=xe=null,Us=!1,Qo=bu=0,Ls=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xe.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?xe.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw xe.alternate===null?Error(r(467)):Error(r(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?xe.memoizedState=gn=e:gn=gn.next=e}return gn}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var n=Qo;return Qo+=1,Ls===null&&(Ls=[]),e=K0(Ls,e,n),n=xe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,mt.H=n===null||n.memoizedState===null?Fg:Hg),e}function Tu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===ft)return;if(e.$$typeof===J)return Dn(e)}throw Error(r(438,String(e)))}function lh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=Nt;return n.index++,a}function Ra(e,n){return typeof n=="function"?n(e):n}function Au(e){var n=pn();return uh(n,je,e)}function uh(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var w=x=null,B=null,nt=n,ht=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Ue&yt)===yt:(Aa&yt)===yt){var $=nt.revertLane;if($===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===Xr&&(ht=!0);else if((Aa&$)===$){nt=nt.next,$===Xr&&(ht=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(w=B=yt,x=f):B=B.next=yt,xe.lanes|=$,or|=$;yt=nt.action,Zr&&a(f,yt),f=nt.hasEagerState?nt.eagerState:a(f,yt)}else $={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(w=B=$,x=f):B=B.next=$,xe.lanes|=yt,or|=yt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?x=f:B.next=w,!ui(f,e.memoizedState)&&(vn=!0,ht&&(a=Cs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ch(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ui(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function rg(e,n,a){var s=xe,c=pn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!ui((je||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,dh(lg.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,Os(e?9:8,{destroy:void 0},og.bind(null,s,c,a,n),null),e){if(s.flags|=2048,$e===null)throw Error(r(349));f||(Aa&127)!==0||sg(s,n,a)}return a}function sg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Eu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function og(e,n,a,s){n.value=a,n.getSnapshot=s,ug(n)&&cg(e)}function lg(e,n,a){return a(function(){ug(n)&&cg(e)})}function ug(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function cg(e){var n=Br(e,2);n!==null&&ei(n,e,2)}function fh(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Zr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:e},n}function fg(e,n,a,s){return e.baseState=a,uh(e,je,typeof s=="function"?s:Ra)}function TM(e,n,a,s,c){if(Cu(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};mt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,hg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hg(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=mt.T,x={};x.types=f!==null?f.types:null,mt.T=x;try{var w=a(c,s),B=mt.S;B!==null&&B(x,w),dg(e,n,w)}catch(nt){hh(e,n,nt)}finally{f!==null&&x.types!==null&&(f.types=x.types),mt.T=f}}else try{f=a(c,s),dg(e,n,f)}catch(nt){hh(e,n,nt)}}function dg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pg(e,n,s)},function(s){return hh(e,n,s)}):pg(e,n,a)}function pg(e,n,a){n.status="fulfilled",n.value=a,mg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,hg(e,a)))}function hh(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mg(n),n=n.next;while(n!==s)}e.action=null}function mg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function gg(e,n){return n}function vg(e,n){if(Te){var a=$e.formState;if(a!==null){t:{var s=xe;if(Te){if(nn){e:{for(var c=nn,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=wi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=wi(c.nextSibling),s=c.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gg,lastRenderedState:n},a.queue=s,a=zg.bind(null,xe,s),s.dispatch=a,s=fh(!1),f=_h.bind(null,xe,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=TM.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function _g(e){var n=pn();return xg(n,je,e)}function xg(e,n,a){if(n=uh(e,n,gg)[0],e=Au(Ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Jo(n)}catch(x){throw x===Ds?gu:x}else s=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Os(9,{destroy:void 0},AM.bind(null,c,a),null)),[s,f,e]}function AM(e,n){e.action=n}function Sg(e){var n=pn(),a=je;if(a!==null)return xg(n,a,e);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Os(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Eu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function yg(){return pn().memoizedState}function Ru(e,n,a,s){var c=Wn();xe.flags|=e,c.memoizedState=Os(1|n,{destroy:void 0},a,s===void 0?null:s)}function wu(e,n,a,s){var c=pn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&ih(s,je.memoizedState.deps)?c.memoizedState=Os(n,f,a,s):(xe.flags|=e,c.memoizedState=Os(1|n,f,a,s))}function Mg(e,n){Ru(8390656,8,e,n)}function dh(e,n){wu(2048,8,e,n)}function RM(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Eu(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function bg(e){var n=pn().memoizedState;return RM({ref:n,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Eg(e,n){return wu(4,2,e,n)}function Tg(e,n){return wu(4,4,e,n)}function Ag(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rg(e,n,a){a=a!=null?a.concat([e]):null,wu(4,4,Ag.bind(null,n,e),a)}function ph(){}function wg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ih(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Cg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ih(n,s[1]))return s[0];if(s=e(),Zr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s}function mh(e,n,a){return a===void 0||(Aa&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Fv(),xe.lanes|=e,or|=e,a)}function Dg(e,n,a,s){return ui(a,n)?a:er.current!==null?(e=mh(e,a,s),ui(e,n)||(vn=!0),e):(Aa&106)===0||(Aa&1073741824)!==0&&(Ue&261930)===0?(vn=!0,e.memoizedState=a):(e=Fv(),xe.lanes|=e,or|=e,n)}function Ng(e,n,a,s,c){var f=Ut.p;Ut.p=f!==0&&8>f?f:8;var x=mt.T,w={};w.types=x!==null?x.types:null,mt.T=w,_h(e,!1,n,a);try{var B=c(),nt=mt.S;if(nt!==null&&nt(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=MM(B,s);jo(e,n,ht,pi(e))}else jo(e,n,s,pi(e))}catch(yt){jo(e,n,{then:function(){},status:"rejected",reason:yt},pi())}finally{Ut.p=f,x!==null&&w.types!==null&&(x.types=w.types),mt.T=x}}function wM(){}function gh(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Ug(e).queue;Ng(e,c,n,Be,a===null?wM:function(){return Lg(e),a(s)})}function Ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Be,baseState:Be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:Be},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lg(e){var n=Ug(e);n.next===null&&(n=e.alternate.memoizedState),jo(e,n.next.queue,{},pi())}function vh(){return Dn($s)}function Og(){return pn().memoizedState}function Pg(){return pn().memoizedState}function CM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=$a(a);var s=tr(n,e,a);s!==null&&(ei(s,n,a),Wo(s,n,a)),n={cache:qf()},e.payload=n;return}n=n.return}}function DM(e,n,a){var s=pi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?Ig(n,a):(a=zf(e,n,a,s),a!==null&&(ei(a,e,s),Bg(a,n,s)))}function zg(e,n,a){var s=pi();jo(e,n,a,s)}function jo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Ig(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,w=f(x,a);if(c.hasEagerState=!0,c.eagerState=w,ui(w,x))return su(e,n,c,0),$e===null&&ru(),!1}catch{}if(a=zf(e,n,c,s),a!==null)return ei(a,e,s),Bg(a,n,s),!0}return!1}function _h(e,n,a,s){if(s={lane:2,revertLane:ld(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(n)throw Error(r(479))}else n=zf(e,a,s,2),n!==null&&ei(n,e,2)}function Cu(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Ig(e,n){Us=Mu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bg(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ro(e,a)}}var Du={readContext:Dn,use:Tu,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Fg={readContext:Dn,use:Tu,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Mg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ru(4194308,4,Ag.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ru(4194308,4,e,n)},useInsertionEffect:function(e,n){Ru(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var s=e();if(Zr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(Zr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=DM.bind(null,xe,e),[s.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=fh(e);var n=e.queue,a=zg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ph,useDeferredValue:function(e,n){var a=Wn();return mh(a,e,n)},useTransition:function(){var e=fh(!1);return e=Ng.bind(null,xe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=xe,c=Wn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$e===null)throw Error(r(349));(Ue&127)!==0||sg(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Mg(lg.bind(null,s,f,e),[e]),s.flags|=2048,Os(9,{destroy:void 0},og.bind(null,s,f,a,n),null),a},useId:function(){var e=Wn(),n=$e.identifierPrefix;if(Te){var a=ta,s=$i;a=(s&~(1<<32-ge(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=bM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:vh,useFormState:vg,useActionState:vg,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_h.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:lh,useCacheRefresh:function(){return Wn().memoizedState=CM.bind(null,xe)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Hg={readContext:Dn,use:Tu,useCallback:wg,useContext:Dn,useEffect:dh,useImperativeHandle:Rg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Cg,useReducer:Au,useRef:yg,useState:function(){return Au(Ra)},useDebugValue:ph,useDeferredValue:function(e,n){var a=pn();return Dg(a,je.memoizedState,e,n)},useTransition:function(){var e=Au(Ra)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:vh,useFormState:_g,useActionState:_g,useOptimistic:function(e,n){var a=pn();return fg(a,je,e,n)},useMemoCache:lh,useCacheRefresh:Pg,useEffectEvent:bg},NM={readContext:Dn,use:Tu,useCallback:wg,useContext:Dn,useEffect:dh,useImperativeHandle:Rg,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Cg,useReducer:ch,useRef:yg,useState:function(){return ch(Ra)},useDebugValue:ph,useDeferredValue:function(e,n){var a=pn();return je===null?mh(a,e,n):Dg(a,je.memoizedState,e,n)},useTransition:function(){var e=ch(Ra)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:vh,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,n){var a=pn();return je!==null?fg(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lh,useCacheRefresh:Pg,useEffectEvent:bg};function xh(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sh={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=pi(),c=$a(s);c.payload=n,a!=null&&(c.callback=a),n=tr(e,c,s),n!==null&&(ei(n,e,s),Wo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=pi(),c=$a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=tr(e,c,s),n!==null&&(ei(n,e,s),Wo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),s=$a(a);s.tag=2,n!=null&&(s.callback=n),n=tr(e,s,a),n!==null&&(ei(n,e,a),Wo(n,e,a))}};function Gg(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,s)||!Bo(c,f):!0}function Vg(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Sh.enqueueReplaceState(n,n.state,null)}function Qr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=N({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function kg(e){au(e)}function Xg(e){console.error(e)}function qg(e){au(e)}function Nu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Wg(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yh(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){Nu(e,n)},a}function Yg(e){return e=$a(e),e.tag=3,e}function Kg(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Wg(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Wg(n,a,s),typeof c!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})})}function UM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Vr(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?ju():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),rd(e,s,c)),!1;case 22:return a.flags|=65536,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),rd(e,s,c)),!1}throw Error(r(435,a.tag))}return rd(e,s,c),ju(),!1}if(Te)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Gf&&(e=Error(r(422),{cause:s}),Go(bi(e,a)))):(s!==Gf&&(n=Error(r(423),{cause:s}),Go(bi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=bi(s,a),c=yh(e.stateNode,s,c),Jf(e,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=bi(f,a),sl===null?sl=[f]:sl.push(f),dn!==4&&(dn=2),n===null)return!0;s=bi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=yh(a.stateNode,s,e),Jf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(lr===null||!lr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Yg(c),Kg(c,e,a,s),Jf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Mh=Error(r(461)),vn=!1;function Mn(e,n,a,s){n.child=e===null?j0(n,null,a,s):Kr(n,e.child,a,s)}function Zg(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var w in s)w!=="ref"&&(x[w]=s[w])}else x=s;return kr(n),s=ah(e,n,a,x,f,c),w=rh(),e!==null&&!vn?(sh(e,n,c),wa(e,n,c)):(Te&&w&&cu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Qg(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!If(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jg(e,n,f,s,c)):(e=lu(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Dh(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(x,s)&&e.ref===n.ref)return wa(e,n,c)}return n.flags|=1,e=Ma(f,s),e.ref=n.ref,e.return=n,n.child=e}function Jg(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Bo(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Dh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,wa(e,n,c)}return bh(e,n,a,s,c)}function jg(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return $g(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&mu(n,f!==null?f.cachePool:null),f!==null?eg(n,f):$f(),ng(n);else return s=n.lanes=536870912,$g(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(mu(n,f.cachePool),eg(n,f),ir(),n.memoizedState=null):(e!==null&&mu(n,null),$f(),ir());return Mn(e,n,c,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $g(e,n,a,s,c){var f=Yf();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&mu(n,null),$f(),ng(n),e!==null&&Vr(e,n,s,!0),n.childLanes=c,null}function Uu(e,n){return n=Lu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function tv(e,n,a){return Kr(n,e.child,null,a),e=Uu(n,n.pendingProps),e.flags|=2,ci(n),n.memoizedState=null,e}function LM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(s.mode==="hidden")return e=Uu(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(eh(n),(e=nn)?(e=A_(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=I0(e),a.return=n,n.child=a,Tn=n,nn=null)):e=null,e===null)throw Za(n);return n.lanes=536870912,null}return Uu(n,s)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(eh(n),c)if(n.flags&256)n.flags&=-257,n=tv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Vr(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(er.current===null){if(s=$e,s!==null&&(x=wo(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Br(e,x),ei(s,e,x),Mh;ju()}n=tv(e,n,a)}else e=f.treeContext,nn=wi(x.nextSibling),Tn=n,Te=!0,Ka=null,Ai=!1,e!==null&&H0(n,e),n=Uu(n,s),n.flags|=134221824;return n}return e=Ma(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ps(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bh(e,n,a,s,c){return kr(n),a=ah(e,n,a,s,void 0,c),s=rh(),e!==null&&!vn?(sh(e,n,c),wa(e,n,c)):(Te&&s&&cu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function ev(e,n,a,s,c,f){return kr(n),n.updateQueue=null,a=ag(n,s,a,c),ig(e),s=rh(),e!==null&&!vn?(sh(e,n,f),wa(e,n,f)):(Te&&s&&cu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function nv(e,n,a,s,c){if(kr(n),n.stateNode===null){var f=Ts,x=a.contextType;typeof x=="object"&&x!==null&&(f=Dn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Zf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Dn(x):Ts,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xh(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Sh.enqueueReplaceState(f,f.state,null),Ko(n,s,f,c),Yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,B=Qr(a,w);f.props=B;var nt=f.context,ht=a.contextType;x=Ts,typeof ht=="object"&&ht!==null&&(x=Dn(ht));var yt=a.getDerivedStateFromProps;ht=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||nt!==x)&&Vg(n,f,s,x),ja=!1;var $=n.memoizedState;f.state=$,Ko(n,s,f,c),Yo(),nt=n.memoizedState,w||$!==nt||ja?(typeof yt=="function"&&(xh(n,a,yt,s),nt=n.memoizedState),(B=ja||Gg(n,a,B,s,$,nt,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=x,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Qf(e,n),x=n.memoizedProps,ht=Qr(a,x),f.props=ht,yt=n.pendingProps,$=f.context,nt=a.contextType,B=Ts,typeof nt=="object"&&nt!==null&&(B=Dn(nt)),w=a.getDerivedStateFromProps,(nt=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==yt||$!==B)&&Vg(n,f,s,B),ja=!1,$=n.memoizedState,f.state=$,Ko(n,s,f,c),Yo();var ut=n.memoizedState;x!==yt||$!==ut||ja||e!==null&&e.dependencies!==null&&du(e.dependencies)?(typeof w=="function"&&(xh(n,a,w,s),ut=n.memoizedState),(ht=ja||Gg(n,a,ht,s,$,ut,B)||e!==null&&e.dependencies!==null&&du(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=B,s=ht):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ps(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Kr(n,e.child,null,c),n.child=Kr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=wa(e,n,c),e}function iv(e,n,a,s){return Hr(),n.flags|=256,Mn(e,n,a,s),n.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:W0()}}function Ah(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function av(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?nr(n):ir(),(e=nn)?(e=A_(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=I0(e),a.return=n,n.child=a,Tn=n,nn=null)):e=null,e===null)throw Za(n);return Td(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(ir(),c=n.mode,f=Lu({mode:"hidden",children:f},c),s=Fr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Th(a),s.childLanes=Ah(e,x,a),n.memoizedState=Eh,$o(null,s)):(nr(n),Rh(n,f))}var w=e.memoizedState;if(w!==null){var B=w.dehydrated;if(B!==null)return OM(e,n,f,x,s,B,w,a)}return c?(ir(),c=s.fallback,f=n.mode,w=e.child,B=w.sibling,s=Ma(w,{mode:"hidden",children:s.children}),s.subtreeFlags=w.subtreeFlags&1206910976,B!==null?c=Ma(B,c):(c=Fr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,$o(null,s),s=n.child,c=e.child.memoizedState,c===null?c=Th(a):(f=c.cachePool,f!==null?(w=mn._currentValue,f=f.parent!==w?{parent:w,pool:w}:f):f=W0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=Ah(e,x,a),n.memoizedState=Eh,$o(e.child,s)):(nr(n),a=e.child,e=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Rh(e,n){return n=Lu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Lu(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Ou(e,n,a){return Kr(n,e.child,null,a),e=Rh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function OM(e,n,a,s,c,f,x,w){if(a)return n.flags&256?(nr(n),n.flags&=-257,Ou(e,n,w)):n.memoizedState!==null?(ir(),n.child=e.child,n.flags|=128,null):(ir(),f=c.fallback,x=n.mode,c=Lu({mode:"visible",children:c.children},x),f=Fr(f,x,w,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Kr(n,e.child,null,w),c=n.child,c.memoizedState=Th(w),c.childLanes=Ah(e,s,w),n.memoizedState=Eh,$o(null,c));if(nr(n),Td(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Go({value:c,source:null,stack:null})),Ou(e,n,w)}if(vn||Vr(e,n,w,!1),s=(w&e.childLanes)!==0,vn||s){if(er.current!==null)return Ou(e,n,w);if(s=$e,s!==null&&(c=wo(s,w),c!==0&&c!==x.retryLane))throw x.retryLane=c,Br(e,c),ei(s,e,c),Mh;return Ed(f)||ju(),Ou(e,n,w)}return Ed(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,nn=wi(f.nextSibling),Tn=n,Te=!0,Ka=null,Ai=!1,e!==null&&H0(n,e),n=Rh(n,c.children),n.flags|=134221824,n)}function rv(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),hu(e.return,n,a)}function sv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&yu(a)===null&&(n=e),e=e.sibling}return n}function Pu(e,n,a,s,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function wh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Ch(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Un.current;if(n.flags&128)return Zo(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,Zo(n,x),c==="backwards"&&e!==null?(wh(e),Mn(e,n,s,a),wh(e)):Mn(e,n,s,a),s=Te?Ho:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rv(e,a,n);else if(e.tag===19)rv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=sv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,wh(n)),Pu(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&yu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Pu(n,!0,a,null,f,s);break;case"together":Pu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=sv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Pu(n,!1,c,a,f,s)}return n.child}function ov(e,n,a){var s=n.pendingProps;return Qa(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function wa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),or|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Dh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&du(e)))}function PM(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Qa(n,mn,e.memoizedState.cache),Hr();break;case 27:case 5:me(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eh(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return nr(n),n.flags|=128,null;s=Vr(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?av(e,n,a):(nr(n),e=wa(e,n,a),e!==null?e.sibling:null)}nr(n);break;case 19:if(n.flags&128)return Ch(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Vr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ch(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Zo(n,Un.current),s)break;return null;case 22:return n.lanes=0,jg(e,n,a,n.pendingProps);case 24:Qa(n,mn,e.memoizedState.cache)}return wa(e,n,a)}function lv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Dh(e,a)&&(n.flags&128)===0)return vn=!1,PM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&F0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Wr(n.elementType),n.type=e,typeof e=="function")If(e)?(s=Qr(e,s),n.tag=1,n=nv(null,n,e,s,a)):(n.tag=0,n=bh(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=Zg(null,n,e,s,a);break t}else if(c===X){n.tag=14,n=Qg(null,n,e,s,a);break t}else if(c===J){n.tag=10,n.type=e,n=ov(null,n,a);break t}}throw n=Et(e)||e,Error(r(306,n,""))}}return n;case 0:return bh(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Qr(s,n.pendingProps),nv(e,n,s,c,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Qf(e,n),Ko(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Qa(n,mn,s),s!==f.cache&&Xf(n,[mn],a,!0),Yo(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=iv(e,n,s,a);break t}else if(s!==c){c=bi(Error(r(424)),n),Go(c),n=iv(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=wi(e.firstChild),Tn=n,Te=!0,Ka=null,Ai=!0,a=j0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Hr(),s===c){n=wa(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ps(e,n),e===null?(a=L_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=h_(n.type,n.pendingProps,le.current,n)):n.memoizedState=L_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return me(n),e===null&&Te&&(s=n.stateNode=C_(n.type,n.pendingProps,le.current),Tn=n,Ai=!0,c=nn,fr(n.type)?(Ad=c,nn=wi(s.firstChild)):nn=c),Mn(e,n,n.pendingProps.children,a),Ps(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=s=nn)&&(s=C1(s,n.type,n.pendingProps,Ai),s!==null?(n.stateNode=s,Tn=n,nn=wi(s.firstChild),Ai=!1,c=!0):c=!1),c||Za(n)),me(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,vd(c,f)?s=null:x!==null&&vd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ah(e,n,EM,null,null,a),$s._currentValue=c),Ps(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Te&&((e=a=nn)&&(a=D1(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Tn=n,nn=null,e=!0):e=!1),e||Za(n)),null;case 13:return av(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Kr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Zg(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ps(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return ov(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,kr(n),c=Dn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Qg(e,n,n.type,n.pendingProps,a);case 15:return Jg(e,n,n.type,n.pendingProps,a);case 19:return Ch(e,n,a);case 31:return LM(e,n,a);case 22:return jg(e,n,a,n.pendingProps);case 24:return kr(n),s=Dn(mn),e===null?(c=Yf(),c===null&&(c=$e,f=qf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Zf(n),Qa(n,mn,c)):((e.lanes&a)!==0&&(Qf(e,n),Ko(n,null,null,a),Yo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Qa(n,mn,s)):(s=f.cache,Qa(n,mn,s),s!==c.cache&&Xf(n,[mn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&cu(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ps(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(e){e.flags|=4}function Nh(e,n,a,s,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?I_(n,s):I_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(kv())e.flags|=8192;else throw Yr=vu,Kf}else e.flags&=-16777217}function uv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B_(n))if(kv())e.flags|=8192;else throw Yr=vu,Kf}function zu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ao():536870912,e.lanes|=n,Hs|=n)}function tl(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function zM(e,n,a){var s=n.pendingProps;switch(Hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ta(mn),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ws(n)?Ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ca(n),f!==null?(an(n),uv(n,f)):(an(n),Nh(n,c,null,s,a))):f?f!==e.memoizedState?(Ca(n),an(n),uv(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ca(n),an(n),Nh(n,c,e,s,a)),null;case 27:if(P(n),a=le.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}e=pe.current,ws(n)?G0(n):(e=C_(c,s,a),n.stateNode=e,Ca(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=pe.current,ws(n))G0(n);else{var x=fl(le.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[R]=n,f[G]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(On(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ca(n)}}return an(n),n.subtreeFlags&=-33554433,Nh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=le.current,ws(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[R]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||l_(e.nodeValue,a)),e||Za(n,!0)}else e=fl(e).createTextNode(s),e[R]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=ws(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[R]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ws(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[R]=n}else Hr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),an(n),null);case 4:return Ge(),e===null&&hd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ta(n.type),an(n),null;case 19:if(nh(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)tl(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yu(e),f!==null){for(n.flags|=128,tl(s,!1),e=f.updateQueue,n.updateQueue=e,zu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)z0(a,e),a=a.sibling;return Zo(n,Un.current&1|2),Te&&ba(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Kt()>Ku&&(n.flags|=128,c=!0,tl(s,!1),n.lanes=4194304)}else{if(!c)if(e=yu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,zu(n,e),tl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Te)return an(n),null}else 2*Kt()-s.renderingStartTime>Ku&&a!==536870912&&(n.flags|=128,c=!0,tl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,f=Un.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Te?Zo(n,f):(a=f,$t(Nn,n),$t(Un,a),In===null&&(In=n)),Te&&ba(n,s.treeForkCount),e}return an(n),null;case 22:case 23:return ci(n),th(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&At(qr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(mn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function IM(e,n){switch(Hf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ta(mn),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(r(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ci(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Ge(),null;case 10:return Ta(n.type),null;case 22:case 23:return ci(n),th(),e!==null&&At(qr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ta(mn),null;case 25:return null;default:return null}}function cv(e,n){switch(Hf(n),n.tag){case 3:Ta(mn),Ge();break;case 26:case 27:case 5:P(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:nh(n);break;case 10:Ta(n.type);break;case 22:case 23:ci(n),th(),e!==null&&At(qr);break;case 24:Ta(mn)}}function el(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(w){Ke(n,n.return,w)}}function ar(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,c=n;var B=a,nt=w;try{nt()}catch(ht){Ke(c,B,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ke(n,n.return,ht)}}function fv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{tg(n,a)}catch(s){Ke(e,e.return,s)}}}function hv(e,n,a){a.props=Qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ke(e,n,s)}}function ea(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,f=Sa(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=x_(f)),s=c.ref;break;case 7:if(e.stateNode===null){var x=new mi(e);_(e.child,!1,R1,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(w){Ke(e,n,w)}}function Ln(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ke(e,n,c)}else a.current=null}function Iu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)T_(e.stateNode,n[a])}function dv(e){for(var n=e.return;n!==null&&(Lh(n)&&T_(e.stateNode,n.stateNode),!Uh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Lh(n)&&w1(e.stateNode,n.stateNode),!Uh(n));)n=n.return}function Uh(e){return e.tag===5||e.tag===3||e.tag===27}function Lh(e){return e&&e.tag===7&&e.stateNode!==null}function Oh(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ke(e,e.return,c)}}function Ph(e,n,a){try{var s=e.stateNode;u1(s,e.type,a,n),s[G]=n}catch(c){Ke(e,e.return,c)}}function pv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fr(e.type)||e.tag===4}function zh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ih(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),Iu(e,s),Ee=!0;else if(c!==4&&(c===27&&(Iu(e,s),s=null,fr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Ih(e,n,a,s),e=e.sibling;e!==null;)Ih(e,n,a,s),e=e.sibling}function Bu(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Iu(e,s),Ee=!0;else if(c!==4&&(c===27&&(Iu(e,s),s=null,fr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Bu(e,n,a,s),e=e.sibling;e!==null;)Bu(e,n,a,s),e=e.sibling}function mv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,s,a),n[R]=e,n[G]=a}catch(f){Ke(e,e.return,f)}}var Fu=!1,fi=null;function gv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Fu=!0)}var na=null;function vv(){var e=na;return na=null,e}var jn=0;function zs(e,n,a,s,c){return jn=0,_v(e.child,n,a,s,c)}function _v(e,n,a,s,c){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var w=Sd(x);s.push(w),w.view&&(f=!0)}else f||Sd(x).view&&(f=!0);Fu=!0,v_(x,jn===0?n:n+"_"+jn,a),jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||_v(e.child,n,a,s,c)&&(f=!0));e=e.sibling}return f}function ia(e,n){for(;e!==null;)e.tag===5?__(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ia(e.child,n)),e=e.sibling}function Hu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ya(n.default,n.share),n!=="none"&&(zs(e,a,n,null,!1)||ia(e.child,!1))}e=e.sibling}}function Bh(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=Sa(s,a),f=ya(s.default,a.paired?s.share:s.enter);f!=="none"?zs(e,c,f,null,!1)?(Hu(e),a.paired||n||Xs(e,s.onEnter)):ia(e.child,!1):Hu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bh(e,n),e=e.sibling;else Hu(e)}function Fh(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=ya(a.default,a.share);if(f!=="none"&&(zs(e,s,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Xs(e,a.onShare)):ia(e.child,!1)),n.delete(s),n.size===0)break}}}Fh(e)}e=e.sibling}}}function Hh(e){if(e.tag===30){var n=e.memoizedProps,a=Sa(n,e.stateNode),s=fi!==null?fi.get(a):void 0,c=ya(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(zs(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,fi.delete(a),Xs(e,n.onShare)):Xs(e,n.onExit):ia(e.child,!1)),fi!==null&&Fh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hh(e),e=e.sibling;else fi!==null&&Fh(e)}function xv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Sa(n,e.stateNode);n=ya(n.default,n.update),e.flags&=-5,n!=="none"&&zs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&xv(e);e=e.sibling}}function Gh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ia(e.child,!1))}Gh(e)}e=e.sibling}}function Gu(e){if(e.tag===30)e.stateNode.paired=null,ia(e.child,!1),Gh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Gu(e),e=e.sibling;else Gh(e)}function Sv(e){for(e=e.child;e!==null;)e.tag===30?ia(e.child,!1):(e.subtreeFlags&33554432)!==0&&Sv(e),e=e.sibling}function Vh(e,n,a,s,c,f,x){for(var w=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&jn<f.length){var nt=f[jn],ht=Sd(B);(nt.view||ht.view)&&(w=!0);var yt;if(yt=(e.flags&4)===0)if(ht.clip)yt=!0;else{yt=nt.rect;var $=ht.rect;yt=yt.y!==$.y||yt.x!==$.x||yt.height!==$.height||yt.width!==$.width}yt&&(e.flags|=4),ht.abs?ht=!nt.abs:(nt=nt.rect,ht=ht.rect,ht=nt.height!==ht.height||nt.width!==ht.width),ht&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&v_(B,jn===0?a:a+"_"+jn,c),w&&(e.flags&4)!==0||(na===null&&(na=[]),na.push(B,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Vh(e,n.child,a,s,c,f,x)&&(w=!0));n=n.sibling}return w}function yv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=Sa(a,s),f=ya(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var w=e.child;jn=0,c=Vh(s,w,c,c,f,x,!1),(e.flags&4)!==0&&c&&Xs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&yv(e);e=e.sibling}}var An=!1,We=!1,aa=!1,kh=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ra=!1,il=!1,Vu=!1,Xh=!1;function BM(e,n,a){if(e=e.containerInfo,md=to,e=A0(e),Df(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break t}var w=0,B=-1,nt=-1,ht=0,yt=0,$=e,ut=null;e:for(;;){for(var Gt;$!==s||f!==0&&$.nodeType!==3||(B=w+f),$!==x||c!==0&&$.nodeType!==3||(nt=w+c),$.nodeType===3&&(w+=$.nodeValue.length),(Gt=$.firstChild)!==null;)ut=$,$=Gt;for(;;){if($===e)break e;if(ut===s&&++ht===f&&(B=w),ut===x&&++yt===c&&(nt=w),(Gt=$.nextSibling)!==null)break;$=ut,ut=$.parentNode}$=Gt}s=B===-1||nt===-1?null:{start:B,end:nt}}else s=null}s=s||{start:0,end:0}}else s=null;for(gd={focusedElem:e,selectionRange:s},to=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&Hh(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&gv(e),ku(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Hh(s),ku(a);continue}else if(s!==null&&s.memoizedState!==null){a&&gv(e),ku(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Rn=s):(a&&xv(e),ku(a))}}fi=null}function ku(e){for(;Rn!==null;){var n=Rn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var x=Qr(n.type,c);a=f.getSnapshotBeforeUpdate(x,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(w){Ke(n,n.return,w)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)bd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":bd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Sa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=ya(c.default,c.update),c!=="none"&&zs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function bv(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),s&4&&el(5,a);break;case 1:if(sa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ke(a,a.return,x)}else{var c=Qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ke(a,a.return,x)}}s&64&&fv(a),s&512&&ea(a,a.return);break;case 3:if(sa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tg(e,n)}catch(x){Ke(a,a.return,x)}}break;case 27:n===null&&s&4&&mv(a);case 26:case 5:sa(e,a),n===null&&s&4&&Oh(a),s&512&&ea(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),s&4&&Rv(e,a);break;case 13:sa(e,a),s&4&&wv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=QM.bind(null,a),N1(e,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||We;n=An,c=We,An=s,(We=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),zi(e,a,s)):sa(e,a),An=n,We=c}break;case 30:sa(e,a),s&512&&ea(a,a.return);break;case 7:s&512&&ea(a,a.return);default:sa(e,a)}}function qh(e,n){for(e=e.child;e!==null;)Ev(e,n),e=e.sibling}function Ev(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(B){Ke(e,e.return,B)}Wh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ee=!0}catch(B){Ke(e,e.return,B)}break;case 18:try{var w=e.stateNode;n?g_(w,!0):g_(e.stateNode,!1)}catch(B){Ke(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&qh(e,n);break;default:qh(e,n)}}function Wh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,s=n;switch(a.tag){case 4:Ev(a,s);break t;case 22:a.memoizedState===null&&Wh(a,s);break t;default:Wh(a,s)}}e=e.sibling}}function Tv(e){var n=e.alternate;n!==null&&(e.alternate=null,Tv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&te(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,$n=!1;function Oi(e,n,a){for(a=a.child;a!==null;)Av(e,n,a),a=a.sibling}function Av(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 26:We||Ln(a,n),Oi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Ln(a,n),nl(a);var s=sn,c=$n;fr(a.type)&&(sn=a.stateNode,$n=!1),Oi(e,n,a),D_(a.stateNode,a.type,a.memoizedProps),sn=s,$n=c;break;case 5:We||Ln(a,n),nl(a);case 6:if(a.tag===6&&nl(a),s=sn,c=$n,sn=null,Oi(e,n,a),sn=s,$n=c,sn!==null)if($n)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),Ee=!0}catch(f){Ke(a,n,f)}else try{sn.removeChild(a.stateNode),Ee=!0}catch(f){Ke(a,n,f)}break;case 18:sn!==null&&($n?(e=sn,m_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):m_(sn,a.stateNode));break;case 4:s=sn,c=$n,sn=a.stateNode.containerInfo,$n=!0,Oi(e,n,a),sn=s,$n=c;break;case 0:case 11:case 14:case 15:ar(2,a,n),We||ar(4,a,n),Oi(e,n,a);break;case 1:We||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&hv(a,n,s)),Oi(e,n,a);break;case 21:Oi(e,n,a);break;case 22:We=(s=We)||a.memoizedState!==null,Oi(e,n,a),We=s;break;case 30:Ln(a,n),Oi(e,n,a);break;case 7:We||Ln(a,n),Oi(e,n,a);break;default:Oi(e,n,a)}}function Rv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){Ke(n,n.return,a)}}}function wv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){Ke(n,n.return,a)}}function FM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mv),n;default:throw Error(r(435,e.tag))}}function Xu(e,n){var a=FM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=JM.bind(null,e,s);s.then(c,c)}})}function Yn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],x=e,w=n,B=w;t:for(;B!==null;){switch(B.tag){case 27:if(fr(B.type)){sn=B.stateNode,$n=!1;break t}break;case 5:sn=B.stateNode,$n=!1;break t;case 3:case 4:sn=B.stateNode.containerInfo,$n=!0;break t}B=B.return}if(sn===null)throw Error(r(160));Av(x,w,f),sn=null,$n=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cv(n,e,a),n=n.sibling}var Pi=null;function Cv(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var x=s[f];x.ref.impl=x.nextImpl}Yn(n,e,a),Kn(e),c&4&&(ar(3,e,e.return),el(3,e),ar(5,e,e.return));break;case 1:Yn(n,e,a),Kn(e),c&512&&(We||s===null||Ln(s,s.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Pi,Yn(n,e,a),Kn(e),c&512&&(We||s===null||Ln(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=h_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ht]||s[R]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),On(s,n,a),s[R]=e,be(s),n=s;break t;case"link":if(f=z_("link","href",c).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;case"meta":if(f=z_("meta","content",c).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[R]=e,be(s),n=s}e.stateNode=n}else An||Dd(f,e.type,e.stateNode);else e.stateNode=P_(f,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||We||n.parentNode.removeChild(n)):c.count--,a===null?An||Dd(f,e.type,e.stateNode):P_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ph(e,e.memoizedProps,s.memoizedProps);break;case 27:Yn(n,e,a),Kn(e),c&512&&(We||s===null||Ln(s,s.return)),s!==null&&c&4&&Ph(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=aa,aa=!1,Yn(n,e,a),aa=f,Kn(e),c&512&&(We||s===null||Ln(s,s.return)),e.flags&32){n=e.stateNode;try{_s(n,""),Ee=!0}catch(ht){Ke(e,e.return,ht)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Ph(e,n,s!==null?s.memoizedProps:n)),c&1024&&(kh=!0);break;case 6:if(Yn(n,e,a),Kn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ee=!0}catch(ht){Ke(e,e.return,ht)}}break;case 3:if(Ee=!1,rc=null,f=Pi,Pi=hl(n.containerInfo),Yn(n,e,a),Pi=f,Kn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(ht){Ke(e,e.return,ht)}kh&&(kh=!1,Dv(e)),Ee=!1;break;case 4:c=aa,aa=An,s=ke(),f=Pi,Pi=hl(e.stateNode.containerInfo),Yn(n,e,a),Kn(e),Pi=f,Ee&&il&&(Vu=!0),Ee=s,aa=c;break;case 12:Yn(n,e,a),Kn(e);break;case 31:Yn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 13:Yn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Yu=Kt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 22:f=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var w=An,B=We,nt=aa;An=w||f,aa=nt||f,We=B||x,Yn(n,e,a),We=B,aa=nt,An=w,Kn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||x||An||We||(n=x||We,a=An,s=We,An=f||An,We=n,rr(e,2),An=a,We=s),!f&&aa||qh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xu(e,a))));break;case 19:Yn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 30:c&512&&(We||s===null||Ln(s,s.return)),c=ke(),f=il,x=(a&335544064)===a,w=e.memoizedProps,il=x&&ya(w.default,w.update)!=="none",Yn(n,e,a),Kn(e),x&&s!==null&&Ee&&(e.flags|=4),il=f,Ee=c;break;case 21:break;case 7:c&512&&(We||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Yn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(pv(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(Lh(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Uh(c))break;c=c.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var w=a.stateNode,B=zh(e);Bu(e,B,w,x);break;case 5:var nt=a.stateNode;a.flags&32&&(_s(nt,""),a.flags&=-33);var ht=zh(e);Bu(e,ht,nt,x);break;case 3:case 4:var yt=a.stateNode.containerInfo,$=zh(e);Ih(e,$,yt,x);break;default:throw Error(r(161))}}catch(ut){Ke(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,to=!0,n.reset(),to=!1),e=e.sibling}}function Is(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Nv(n,e),n=n.sibling;else yv(n)}function Nv(e,n){var a=e.alternate;if(a===null)Bh(e,!1);else switch(e.tag){case 3:if(Xh=ra=!1,vv(),Is(n,e),!ra&&!Vu){if(e=na,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];__(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Xh=!0}na=null;break;case 5:Is(n,e);break;case 4:s=ra,ra=!1,Is(n,e),ra&&(Vu=!0),ra=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Bh(e,!1):Is(n,e));break;case 30:s=ra,c=vv(),ra=!1,Is(n,e),ra&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=Sa(f,x),x=Sa(a.memoizedProps,x);var w=ya(f.default,f.update);w==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,jn=0,n=Vh(e,a,n,x,w,f,!0),jn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Xs(e,e.memoizedProps.onUpdate),na=c):c!==null&&(c.push.apply(c,na),na=c),ra=(e.flags&32)!==0?!0:s;break;default:Is(n,e)}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bv(e,n.alternate,n),n=n.sibling}function rr(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ar(4,a,a.return),rr(a,s);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&hv(a,a.return,c),rr(a,s);break;case 27:(s&2)!==0&&D_(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||nl(a),rr(a,s);break;case 6:nl(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||We||c.parentNode.removeChild(c),rr(a,s);break;case 22:a.memoizedState===null&&rr(a,s);break;case 30:Ln(a,a.return),rr(a,s);break;case 7:Ln(a,a.return);default:rr(a,s)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags,w=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:zi(c,f,a),el(4,f);break;case 1:if(zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ht){Ke(s,s.return,ht)}if(s=f,c=s.updateQueue,c!==null){var B=s.stateNode;try{var nt=c.shared.hiddenCallbacks;if(nt!==null)for(c.shared.hiddenCallbacks=null,c=0;c<nt.length;c++)$0(nt[c],B)}catch(ht){Ke(s,s.return,ht)}}w&&x&64&&fv(f),ea(f,f.return);break;case 27:(a&2)!==0&&mv(f);case 5:f.tag!==5&&f.tag!==27||dv(f),zi(c,f,a),w&&s===null&&x&4&&Oh(f),ea(f,f.return);break;case 6:dv(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||An||Dd(hl(B.ownerDocument),f.type,B),zi(c,f,a),w&&s===null&&x&4&&Oh(f),ea(f,f.return);break;case 12:zi(c,f,a);break;case 31:zi(c,f,a),w&&x&4&&Rv(c,f);break;case 13:zi(c,f,a),w&&x&4&&wv(c,f);break;case 22:f.memoizedState===null&&zi(c,f,a),ea(f,f.return);break;case 30:zi(c,f,a),ea(f,f.return);break;case 7:ea(f,f.return);default:zi(c,f,a)}n=n.sibling}}function Yh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function Kh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vo(e))}function Ri(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Uv(e,n,a,s),n=n.sibling;else c&&Sv(n)}function Uv(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Gu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,s),f&2048&&el(9,n);break;case 1:Ri(e,n,a,s);break;case 3:Ri(e,n,a,s),c&&Xh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Vo(f)));break;case 12:if(f&2048){Ri(e,n,a,s),f=n.stateNode;try{var x=n.memoizedProps,w=x.id,B=x.onPostCommit;typeof B=="function"&&B(w,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(nt){Ke(n,n.return,nt)}}else Ri(e,n,a,s);break;case 31:Ri(e,n,a,s);break;case 13:Ri(e,n,a,s);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(c&&w!==null&&w.memoizedState===null&&Gu(w),x._visibility&2?Ri(e,n,a,s):al(e,n)):(c&&w!==null&&w.memoizedState!==null&&Gu(n),x._visibility&2?Ri(e,n,a,s):(x._visibility|=2,Bs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Yh(w,n);break;case 24:Ri(e,n,a,s),f&2048&&Kh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ia(f.child,!0),ia(n.child,!0))),Ri(e,n,a,s);break;default:Ri(e,n,a,s)}}function Bs(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,w=a,B=s,nt=x.flags;switch(x.tag){case 0:case 11:case 15:Bs(f,x,w,B,c),el(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Bs(f,x,w,B,c):al(f,x):(ht._visibility|=2,Bs(f,x,w,B,c)),c&&nt&2048&&Yh(x.alternate,x);break;case 24:Bs(f,x,w,B,c),c&&nt&2048&&Kh(x.alternate,x);break;default:Bs(f,x,w,B,c)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:al(a,s),c&2048&&Yh(s.alternate,s);break;case 24:al(a,s),c&2048&&Kh(s.alternate,s);break;default:al(a,s)}n=n.sibling}}var Jr=8192;function jr(e,n,a){if(e.subtreeFlags&Jr)for(e=e.child;e!==null;)Lv(e,n,a),e=e.sibling}function Lv(e,n,a){switch(e.tag){case 26:jr(e,n,a),e.flags&Jr&&(e.memoizedState!==null?q1(a,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&H_(a,e)));break;case 5:jr(e,n,a),e.flags&Jr&&(e=e.stateNode,(n&335544128)===n&&H_(a,e));break;case 3:case 4:var s=Pi;Pi=hl(e.stateNode.containerInfo),jr(e,n,a),Pi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Jr,Jr=16777216,jr(e,n,a),Jr=s):jr(e,n,a));break;case 30:if((e.flags&Jr)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(s,c)}jr(e,n,a);break;default:jr(e,n,a)}}function Ov(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,zv(s,e)}Ov(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pv(e),e=e.sibling}function Pv(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&ar(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,qu(e)):rl(e);break;default:rl(e)}}function qu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,zv(s,e)}Ov(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ar(8,n,n.return),qu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qu(n));break;default:qu(n)}e=e.sibling}}function zv(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ar(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=e;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(Tv(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var HM={getCacheForType:function(e){var n=Dn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(mn).controller.signal}},GM=typeof WeakMap=="function"?WeakMap:Map,Xe=0,$e=null,we=null,Ue=0,Ye=0,hi=null,sr=!1,Fs=!1,Zh=!1,Da=0,dn=0,or=0,$r=0,Wu=0,di=0,Hs=0,sl=null,ti=null,Qh=!1,Yu=0,Iv=0,Ku=1/0,Zu=null,lr=null,un=0,Ii=null,ts=null,oa=0,Jh=0,jh=null,Bv=null,Gs=null,Vs=null,ks=null,ol=0,Qu=null;function pi(){return(Xe&2)!==0&&Ue!==0?Ue&-Ue:mt.T!==null?ld():Kl()}function Fv(){if(di===0)if((Ue&536870912)===0||Te){var e=Lr;Lr<<=1,(Lr&3932160)===0&&(Lr=262144),di=e}else di=536870912;return e=Nn.current,e!==null&&(e.flags|=32),di}function Xs(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=x_(Sa(e.memoizedProps,a))),Vs===null&&(Vs=[]),Vs.push(n.bind(null,s))}}function ei(e,n,a){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(qs(e,0),ur(e,Ue,di,!1)),Qi(e,a),((Xe&2)===0||e!==$e)&&(e===$e&&((Xe&2)===0&&($r|=a),dn===4&&ur(e,Ue,di,!1)),la(e))}function Hv(e,n,a){if((Xe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xa(e,n),c=s?XM(e,n):td(e,n,!0),f=s;do{if(c===0){Fs&&!s&&ur(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!VM(a)){c=td(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=e;c=sl;var B=w.current.memoizedState.isDehydrated;if(B&&(qs(w,x).flags|=256),x=td(w,x,!1),x!==2&&x!==6){if(Zh&&!B){w.errorRecoveryDisabledLanes|=f,$r|=f,c=4;break t}f=ti,ti=c,f!==null&&(ti===null?ti=f:ti.push.apply(ti,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){qs(e,0),ur(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ur(s,n,di,!sr);break t;case 2:ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Yu+300-Kt(),10<c)){if(ur(s,n,di,!sr),Or(s,0,!0)!==0)break t;oa=n,s.timeoutHandle=xd(Gv.bind(null,s,a,ti,Zu,Qh,n,di,$r,Hs,sr,f,"Throttled",-0,0),c);break t}Gv(s,a,ti,Zu,Qh,n,di,$r,Hs,sr,f,null,-0,0)}}break}while(!0);la(e)}function Gv(e,n,a,s,c,f,x,w,B,nt,ht,yt,$,ut){e.timeoutHandle=-1;var Gt=n.subtreeFlags,ee=(f&335544064)===f;if(yt=null,(ee||Gt&8192||(Gt&16785408)===16785408)&&(yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},fi=null,Lv(n,f,yt),ee&&(Gt=yt,ee=e.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(Gt.count++,Gt.waitingForViewTransition=!0,Gt=ml.bind(Gt),ee.finished.then(Gt,Gt))),Gt=(f&62914560)===f?Yu-Kt():(f&4194048)===f?Iv-Kt():0,Gt=W1(yt,Gt),Gt!==null)){oa=f,e.cancelPendingCommit=Gt(Zv.bind(null,e,n,f,a,s,c,x,w,B,nt,ht,yt,null,$,ut)),ur(e,f,x,!nt);return}Zv(e,n,f,a,s,c,x,w,B,nt,ht,yt)}function VM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!ui(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(e,n,a,s){n=Zi(e,n),n&=~Wu,n&=~$r,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ge(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Pr(e,a,n)}function Ju(){return(Xe&6)===0?(ll(0),!1):!0}function $h(){if(we!==null){if(Ye===0)var e=we.return;else e=we,Ea=Gr=null,oh(e),Ns=null,qo=0,e=we;for(;e!==null;)cv(e.alternate,e),e=e.return;we=null}}function qs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,h1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,$h(),$e=e,we=a=Ma(e.current,null),Ue=n,Ye=0,hi=null,sr=!1,Fs=Xa(e,n),Zh=!1,Hs=di=Wu=$r=or=dn=0,ti=sl=null,Qh=!1,Da=Zi(e,n),ru(),a}function Vv(e,n){xe=null,mt.H=Du,n===Ds||n===gu?(n=Z0(),Ye=3):n===Kf?(n=Z0(),Ye=4):Ye=n===Mh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,we===null&&(dn=1,Nu(e,bi(n,e.current)))}function kv(){var e=Nn.current;return e===null?!0:(Ue&4194048)===Ue?In===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===In:!1}function Xv(){var e=mt.H;return mt.H=Du,e===null?Du:e}function qv(){var e=mt.A;return mt.A=HM,e}function ju(){dn=4,sr||(Ue&4194048)!==Ue&&Nn.current!==null||(Fs=!0),(or&134217727)===0&&($r&134217727)===0||$e===null||ur($e,Ue,di,!1)}function td(e,n,a){var s=Xe;Xe|=2;var c=Xv(),f=qv();($e!==e||Ue!==n)&&(Zu=null,qs(e,n)),n=!1;var x=dn;t:do try{if(Ye!==0&&we!==null){var w=we,B=hi;switch(Ye){case 8:$h(),x=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var nt=Ye;if(Ye=0,hi=null,Ws(e,w,B,nt),a&&Fs){x=0;break t}break;default:nt=Ye,Ye=0,hi=null,Ws(e,w,B,nt)}}kM(),x=dn;break}catch(ht){Vv(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Ea=Gr=null,Xe=s,mt.H=c,mt.A=f,we===null&&($e=null,Ue=0,ru()),x}function kM(){for(;we!==null;)Wv(we)}function XM(e,n){var a=Xe;Xe|=2;var s=Xv(),c=qv();$e!==e||Ue!==n?(Zu=null,Ku=Kt()+500,qs(e,n)):Fs=Xa(e,n);t:do try{if(Ye!==0&&we!==null){n=we;var f=hi;e:switch(Ye){case 1:Ye=0,hi=null,Ws(e,n,f,1);break;case 2:case 9:if(Y0(f)){Ye=0,hi=null,Yv(n);break}n=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),la(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:Y0(f)?(Ye=0,hi=null,Yv(n)):(Ye=0,hi=null,Ws(e,n,f,7));break;case 5:var x=null;switch(we.tag){case 26:x=we.memoizedState;case 5:case 27:var w=we;if(x?B_(x):w.stateNode.complete){Ye=0,hi=null;var B=w.sibling;if(B!==null)we=B;else{var nt=w.return;nt!==null?(we=nt,$u(nt)):we=null}break e}}Ye=0,hi=null,Ws(e,n,f,5);break;case 6:Ye=0,hi=null,Ws(e,n,f,6);break;case 8:$h(),dn=6;break t;default:throw Error(r(462))}}qM();break}catch(ht){Vv(e,ht)}while(!0);return Ea=Gr=null,mt.H=s,mt.A=c,Xe=a,we!==null?0:($e=null,Ue=0,ru(),dn)}function qM(){for(;we!==null&&!Bt();)Wv(we)}function Wv(e){var n=lv(e.alternate,e,Da);e.memoizedProps=e.pendingProps,n===null?$u(e):we=n}function Yv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ev(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=ev(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:oh(n);var s=n;s===Tn&&(Te?(fu(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(fu(s),Te=!0));default:cv(a,n),n=we=z0(n,Da),n=lv(a,n,Da)}e.memoizedProps=e.pendingProps,n===null?$u(e):we=n}function Ws(e,n,a,s){Ea=Gr=null,oh(n),Ns=null,qo=0;var c=n.return;try{if(UM(e,c,n,a,Ue)){dn=1,Nu(e,bi(a,e.current)),we=null;return}}catch(f){if(c!==null)throw we=c,f;dn=1,Nu(e,bi(a,e.current)),we=null;return}n.flags&32768?(Te||s===1?e=!0:Fs||(Ue&536870912)!==0?e=!1:(sr=e=!0,(s===2||s===9||s===3||s===6)&&(s=Nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Kv(n,e)):$u(n)}function $u(e){var n=e;do{if((n.flags&32768)!==0){Kv(n,sr);return}e=n.return;var a=zM(n.alternate,n,Da);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);dn===0&&(dn=5)}function Kv(e,n){do{var a=IM(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);dn=6,we=null}function Zv(e,n,a,s,c,f,x,w,B,nt,ht,yt){e.cancelPendingCommit=null;do tc();while(un!==0);if((Xe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===$e&&(we=$e=null,Ue=0),ts=n,Ii=e,oa=a,jh=c,Bv=s,WM(e,n,a,x,w,B,yt)}}function WM(e,n,a,s,c,f,x){var w=n.lanes|n.childLanes;if(Jh=w,w|=Pf,Yl(e,a,w,s,c,f),Vs=null,(a&335544064)===a?(ks=SM(e),s=10262):(ks=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,jM(zt,function(){return ad(),null})):(e.callbackNode=null,e.callbackPriority=0),Fu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=mt.T,mt.T=null,c=Ut.p,Ut.p=2,f=Xe,Xe|=4;try{BM(e,n,a)}finally{Xe=f,Ut.p=c,mt.T=s}}un=1,Fu?Gs=_1(x,e.containerInfo,ks,ed,nd,KM,id,ad,YM):(ed(),nd(),id())}function YM(e){if(un!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function KM(){un===3&&(un=0,Nv(ts,Ii),un=4)}function ed(){if(un===1){un=0;var e=Ii,n=ts,a=oa,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=mt.T,mt.T=null;var c=Ut.p;Ut.p=2;var f=Xe;Xe|=4;try{il=Vu=!1,Cv(n,e,a),a=gd;var x=A0(e.containerInfo),w=a.focusedElem,B=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&T0(w.ownerDocument.documentElement,w)){if(B!==null&&Df(w)){var nt=B.start,ht=B.end;if(ht===void 0&&(ht=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(ht,w.value.length);else{var yt=w.ownerDocument||document,$=yt&&yt.defaultView||window;if($.getSelection){var ut=$.getSelection(),Gt=w.textContent.length,ee=Math.min(B.start,Gt),Se=B.end===void 0?ee:Math.min(B.end,Gt);!ut.extend&&ee>Se&&(x=Se,Se=ee,ee=x);var et=E0(w,ee),k=E0(w,Se);if(et&&k&&(ut.rangeCount!==1||ut.anchorNode!==et.node||ut.anchorOffset!==et.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var st=yt.createRange();st.setStart(et.node,et.offset),ut.removeAllRanges(),ee>Se?(ut.addRange(st),ut.extend(k.node,k.offset)):(st.setEnd(k.node,k.offset),ut.addRange(st))}}}}for(yt=[],ut=w;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var St=yt[w];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}to=!!md,gd=md=null}finally{Xe=f,Ut.p=c,mt.T=s}}e.current=n,un=2}}function nd(){if(un===2){un=0;var e=Ii,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=mt.T,mt.T=null;var s=Ut.p;Ut.p=2;var c=Xe;Xe|=4;try{bv(e,n.alternate,n)}finally{Xe=c,Ut.p=s,mt.T=a}}un=3}}function id(){if(un===4||un===3){un=0;var e=Gs;Gs=null,It();var n=Ii,a=ts,s=oa,c=Bv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?un=5:(un=0,ts=Ii=null,Qv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(lr=null),Do(s),a=a.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ie,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=mt.T,f=Ut.p,Ut.p=2,mt.T=null;try{for(var x=n.onRecoverableError,w=0;w<c.length;w++){var B=c[w];x(B.value,{componentStack:B.stack})}}finally{mt.T=a,Ut.p=f}}if(c=Vs,x=ks,ks=null,c!==null&&(Vs=null,x===null&&(x=[]),e!==null))for(B=0;B<c.length;B++)a=(0,c[B])(x),a!==void 0&&e.finished.finally(a);(oa&3)!==0&&tc(),la(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Qu?ol++:(ol=0,Qu=n):(ol=0,Qu=null),ll(0)}}function Qv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vo(n)))}function tc(){return Gs!==null&&(Gs.skipTransition(),Gs=null),ed(),nd(),id(),ad()}function ad(){if(un!==5)return!1;var e=Ii,n=Jh;Jh=0;var a=Do(oa),s=mt.T,c=Ut.p;try{Ut.p=32>a?32:a,mt.T=null,a=jh,jh=null;var f=Ii,x=oa;if(un=0,ts=Ii=null,oa=0,(Xe&6)!==0)throw Error(r(331));var w=Xe;if(Xe|=4,Pv(f.current),Uv(f,f.current,x,a),Xe=w,ll(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ie,f)}catch{}return!0}finally{Ut.p=c,mt.T=s,Qv(e,n)}}function Jv(e,n,a){n=bi(a,n),n=yh(e.stateNode,n,2),e=tr(e,n,2),e!==null&&(Qi(e,2),la(e))}function Ke(e,n,a){if(e.tag===3)Jv(e,e,a);else for(;n!==null;){if(n.tag===3){Jv(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(lr===null||!lr.has(s))){e=bi(a,e),a=Yg(2),s=tr(n,a,2),s!==null&&(Kg(a,s,n,e),Qi(s,2),la(s));break}}n=n.return}}function rd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new GM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zh=!0,c.add(a),e=ZM.bind(null,e,n,a),n.then(e,e))}function ZM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Ue&a)===a&&((dn===4||dn===3&&(Ue&62914560)===Ue&&300>Kt()-Yu)&&(Xe&2)===0?qs(e,0):Wu|=a,Hs===Ue&&(Hs=0)),la(e)}function jv(e,n){n===0&&(n=Ao()),e=Br(e,n),e!==null&&(Qi(e,n),la(e))}function QM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),jv(e,a)}function JM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),jv(e,a)}function jM(e,n){return Pt(e,n)}var Ys=null,Ks=null,sd=!1,ec=!1,od=!1,cr=0;function la(e){e!==Ks&&e.next===null&&(Ks===null?Ys=Ks=e:Ks=Ks.next=e),ec=!0,sd||(sd=!0,t1())}function ll(e,n){if(!od&&ec){od=!0;do for(var a=!1,s=Ys;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,w=s.pingedLanes;f=(1<<31-ge(42|e)+1)-1,f&=c&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,n_(s,f))}else f=Ue,f=Or(s,s===$e?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Xa(s,f)||(a=!0,n_(s,f));s=s.next}while(a);od=!1}}function $M(){$v()}function $v(){ec=sd=!1;var e=0;cr!==0&&f1()&&(e=cr);for(var n=Kt(),a=null,s=Ys;s!==null;){var c=s.next,f=t_(s,n);f===0?(s.next=null,a===null?Ys=c:a.next=c,c===null&&(Ks=a)):(a=s,(e!==0||(f&3)!==0)&&(ec=!0)),s=c}un!==0&&un!==5||ll(e),cr!==0&&(cr=0)}function t_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-ge(f),w=1<<x,B=c[x];B===-1?((w&a)===0||(w&s)!==0)&&(c[x]=To(w,n)):B<=n&&(e.expiredLanes|=w),f&=~w}if(n=$e,a=Ue,a=Or(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ne(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ne(s),Do(a)){case 2:case 8:a=Q;break;case 32:a=zt;break;case 268435456:a=Ft;break;default:a=zt}return s=e_.bind(null,e),a=Pt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ne(s),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var s=Ue;return s=Or(e,e===$e?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Hv(e,s,n),t_(e,Kt()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,n){if(tc())return null;Hv(e,n,!0)}function t1(){d1(function(){(Xe&6)!==0?Pt(de,$M):$v()})}function ld(){if(cr===0){var e=Xr;e===0&&(e=ms,ms<<=1,(ms&261888)===0&&(ms=256)),cr=e}return cr}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(e)}function e1(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=i_((c[G]||null).action),x=s.submitter;x&&(n=(n=x[G]||null)?i_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var w=new eu("action","action",null,s,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cr!==0){var B=new FormData(c,x);gh(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(w.preventDefault(),B=new FormData(c,x),gh(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var ud=0;ud<Of.length;ud++){var cd=Of[ud],n1=cd.toLowerCase(),i1=cd[0].toUpperCase()+cd.slice(1);Li(n1,"on"+i1)}Li(C0,"onAnimationEnd"),Li(D0,"onAnimationIteration"),Li(N0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(hM,"onTransitionRun"),Li(dM,"onTransitionStart"),Li(pM,"onTransitionCancel"),Li(U0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function a_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var w=s[x],B=w.instance,nt=w.currentTarget;if(w=w.listener,B!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=nt;try{f(c)}catch(ht){au(ht)}c.currentTarget=null,f=B}else for(x=0;x<s.length;x++){if(w=s[x],B=w.instance,nt=w.currentTarget,w=w.listener,B!==f&&c.isPropagationStopped())break t;f=w,c.currentTarget=nt;try{f(c)}catch(ht){au(ht)}c.currentTarget=null,f=B}}}}function Ce(e,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var s=e+"__bubble";a.has(s)||(r_(n,e,2,!1),a.add(s))}function fd(e,n,a){var s=0;n&&(s|=4),r_(a,e,s,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[nc]){e[nc]=!0,qe.forEach(function(a){a!=="selectionchange"&&(a1.has(a)||fd(a,!1,e),fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[nc]||(n[nc]=!0,fd("selectionchange",!1,n))}}function r_(e,n,a,s){switch(K_(n)){case 2:var c=Q1;break;case 8:c=J1;break;default:c=Ud}a=c.bind(null,n,a,e),c=void 0,!Sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function dd(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var w=s.stateNode.containerInfo;if(w===c)break;if(x===4)for(x=s.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;w!==null;){if(x=ce(w),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){s=f=x;continue t}w=w.parentNode}}s=s.return}r0(function(){var nt=f,ht=_f(a),yt=[];t:{var $=L0.get(e);if($!==void 0){var ut=eu,Gt=e;switch(e){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":ut=Vy;break;case"focusin":Gt="focus",ut=Ef;break;case"focusout":Gt="blur",ut=Ef;break;case"beforeblur":case"afterblur":ut=Ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=l0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Yy;break;case C0:case D0:case N0:ut=Ly;break;case U0:ut=Zy;break;case"scroll":case"scrollend":ut=wy;break;case"wheel":ut=Jy;break;case"copy":case"cut":case"paste":ut=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=c0;break;case"submit":ut=qy;break;case"toggle":case"beforetoggle":ut=$y}var ee=(n&4)!==0,Se=!ee&&(e==="scroll"||e==="scrollend"),et=ee?$!==null?$+"Capture":null:$;ee=[];for(var k=nt,st;k!==null;){var St=k;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||et===null||(St=No(k,et),St!=null&&ee.push(cl(k,St,st))),Se)break;k=k.return}0<ee.length&&($=new ut($,Gt,null,a,ht),yt.push({event:$,listeners:ee}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",ut&&a!==vf&&(Gt=a.relatedTarget||a.fromElement)&&(ce(Gt)||Gt[dt]))break t;($||ut)&&(Gt=ht.window===ht?ht:(ut=ht.ownerDocument)?ut.defaultView||ut.parentWindow:window,$?(ut=a.relatedTarget||a.toElement,$=nt,ut=ut?ce(ut):null,ut!==null&&(Se=u(ut),ee=ut.tag,ut!==Se||ee!==5&&ee!==27&&ee!==6)&&(ut=null)):($=null,ut=nt),$!==ut&&(ee=l0,St="onMouseLeave",et="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=c0,St="onPointerLeave",et="onPointerEnter",k="pointer"),Se=$==null?Gt:Qt($),st=ut==null?Gt:Qt(ut),Gt=new ee(St,k+"leave",$,a,ht),Gt.target=Se,Gt.relatedTarget=st,St=null,ce(ht)===nt&&(ee=new ee(et,k+"enter",ut,a,ht),ee.target=st,ee.relatedTarget=Se,St=ee),Se=St,ee=$&&ut?D($,ut,r1):null,$!==null&&s_(yt,Gt,$,ee,!1),ut!==null&&Se!==null&&s_(yt,Se,ut,ee,!0)))}t:{if($=nt?Qt(nt):window,ut=$.nodeName&&$.nodeName.toLowerCase(),ut==="select"||ut==="input"&&$.type==="file")var Jt=_0;else if(g0($))if(x0)Jt=uM;else{Jt=oM;var Le=sM}else ut=$.nodeName,!ut||ut.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?nt&&gf(nt.elementType)&&(Jt=_0):Jt=lM;if(Jt&&(Jt=Jt(e,nt))){v0(yt,Jt,a,ht);break t}Le&&Le(e,$,nt)}switch(Le=nt?Qt(nt):window,e){case"focusin":(g0(Le)||Le.contentEditable==="true")&&(Ms=Le,Nf=nt,Fo=null);break;case"focusout":Fo=Nf=Ms=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,R0(yt,a,ht);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":R0(yt,a,ht)}var ae;if(Af)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ys?p0(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(f0&&a.locale!=="ko"&&(ys||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ys&&(ae=s0()):(qa=ht,yf="value"in qa?qa.value:qa.textContent,ys=!0)),Le=ic(nt,oe),0<Le.length&&(oe=new u0(oe,e,null,a,ht),yt.push({event:oe,listeners:Le}),ae?oe.data=ae:(ae=m0(a),ae!==null&&(oe.data=ae)))),(ae=eM?nM(e,a):iM(e,a))&&(oe=ic(nt,"onBeforeInput"),0<oe.length&&(Le=new u0("onBeforeInput","beforeinput",null,a,ht),yt.push({event:Le,listeners:oe}),Le.data=ae)),e1(yt,e,nt,a,ht)}a_(yt,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ic(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=No(e,a),c!=null&&s.unshift(cl(e,c,f)),c=No(e,n),c!=null&&s.push(cl(e,c,f))),e.tag===3)return s;e=e.return}return[]}function r1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var w=a,B=w.alternate,nt=w.stateNode;if(w=w.tag,B!==null&&B===s)break;w!==5&&w!==26&&w!==27||nt===null||(B=nt,c?(nt=No(a,f),nt!=null&&x.unshift(cl(a,nt,B))):c||(nt=No(a,f),nt!=null&&x.push(cl(a,nt,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var s1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function o_(e){return(typeof e=="string"?e:""+e).replace(s1,`
`).replace(o1,"")}function l_(e,n){return n=o_(n),o_(e)===n}function Ze(e,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||_s(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&_s(e,""+s);else return;break;case"className":li(e,"class",s);break;case"tabIndex":li(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,a,s);break;case"style":i0(e,s,f);return;case"data":if(n!=="object"){li(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(e,n,"name",c.name,c,null),Ze(e,n,"formEncType",c.formEncType,c,null),Ze(e,n,"formMethod",c.formMethod,c,null),Ze(e,n,"formTarget",c.formTarget,c,null)):(Ze(e,n,"encType",c.encType,c,null),Ze(e,n,"method",c.method,c,null),Ze(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ji);return;case"onScroll":s!=null&&Ce("scroll",e);return;case"onScrollEnd":s!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),en(e,"popover",s);break;case"xlinkActuate":Ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ne(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ne(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ne(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ne(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ay.get(a)||a,en(e,a,s);else return}Ee=!0}function pd(e,n,a,s,c,f){switch(a){case"style":i0(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")_s(e,s);else if(typeof s=="number"||typeof s=="bigint")_s(e,""+s);else return;break;case"onScroll":s!=null&&Ce("scroll",e);return;case"onScrollEnd":s!=null&&Ce("scrollend",e);return;case"onClick":s!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[G]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,c);break t}Ee=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):en(e,a,s)}return}Ee=!0}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,f,x,a,null)}}c&&Ze(e,n,"srcSet",a.srcSet,a,null),s&&Ze(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var w=f=x=c=null,B=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":x=ht;break;case"checked":B=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ze(e,n,s,ht,a,null)}}$m(e,f,w,B,nt,x,c,!1);return;case"select":Ce("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":s=w;default:Ze(e,n,c,w,a,null)}n=f,a=x,e.multiple=!!s,n!=null?vs(e,!!s,n,!1):a!=null&&vs(e,!!s,a,!0);return;case"textarea":Ce("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":s=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ze(e,n,x,w,a,null)}e0(e,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ze(e,n,B,s,a,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(s=0;s<ul.length;s++)Ce(ul[s],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,nt,s,a,null)}return;default:if(gf(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&pd(e,n,ht,s,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(s=a[w],s!=null&&Ze(e,n,w,s,a,null))}var l1={};function u1(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,w=null,B=null,nt=null,ht=null;for(ut in a){var yt=a[ut];if(a.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=yt;default:s.hasOwnProperty(ut)||Ze(e,n,ut,null,s,yt)}}for(var $ in s){var ut=s[$];if(yt=a[$],s.hasOwnProperty($)&&(ut!=null||yt!=null))switch($){case"type":ut!==yt&&(Ee=!0),f=ut;break;case"name":ut!==yt&&(Ee=!0),c=ut;break;case"checked":ut!==yt&&(Ee=!0),nt=ut;break;case"defaultChecked":ut!==yt&&(Ee=!0),ht=ut;break;case"value":ut!==yt&&(Ee=!0),x=ut;break;case"defaultValue":ut!==yt&&(Ee=!0),w=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==yt&&Ze(e,n,$,ut,s,yt)}}pf(e,x,w,B,nt,ht,f,c);return;case"select":ut=x=w=$=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:s.hasOwnProperty(f)||Ze(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Ee=!0),$=f;break;case"defaultValue":f!==B&&(Ee=!0),w=f;break;case"multiple":f!==B&&(Ee=!0),x=f;default:f!==B&&Ze(e,n,c,f,s,B)}n=w,a=x,s=ut,$!=null?vs(e,!!a,$,!1):!!s!=!!a&&(n!=null?vs(e,!!a,n,!0):vs(e,!!a,a?[]:"",!1));return;case"textarea":ut=$=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!s.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ze(e,n,w,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":c!==f&&(Ee=!0),$=c;break;case"defaultValue":c!==f&&(Ee=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ze(e,n,x,c,s,f)}t0(e,$,ut);return;case"option":for(var Gt in a)$=a[Gt],a.hasOwnProperty(Gt)&&$!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ze(e,n,Gt,null,s,$));for(B in s)$=s[B],ut=a[B],s.hasOwnProperty(B)&&$!==ut&&($!=null||ut!=null)&&(B==="selected"?($!==ut&&(Ee=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol"):Ze(e,n,B,$,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)$=a[ee],a.hasOwnProperty(ee)&&$!=null&&!s.hasOwnProperty(ee)&&Ze(e,n,ee,null,s,$);for(nt in s)if($=s[nt],ut=a[nt],s.hasOwnProperty(nt)&&$!==ut&&($!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ze(e,n,nt,$,s,ut)}return;default:if(gf(n)){for(var Se in a)$=a[Se],a.hasOwnProperty(Se)&&$!==void 0&&!s.hasOwnProperty(Se)&&pd(e,n,Se,void 0,s,$);for(ht in s)$=s[ht],ut=a[ht],!s.hasOwnProperty(ht)||$===ut||$===void 0&&ut===void 0||pd(e,n,ht,$,s,ut);return}}for(var et in a)$=a[et],a.hasOwnProperty(et)&&$!=null&&!s.hasOwnProperty(et)&&Ze(e,n,et,null,s,$);for(yt in s)$=s[yt],ut=a[yt],!s.hasOwnProperty(yt)||$===ut||$==null&&ut==null||Ze(e,n,yt,$,s,ut)}function u_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function c1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,w=c.duration;if(f&&w&&u_(x)){for(x=0,w=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],nt=B.startTime;if(nt>w)break;var ht=B.transferSize,yt=B.initiatorType;ht&&u_(yt)&&(B=B.responseEnd,x+=ht*(B<w?1:(w-nt)/(B-nt)))}if(--s,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var md=null,gd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function h_(e,n,a,s){return a=fl(a).createElement(e),a[R]=s,a[G]=n,On(a,e,n),be(a),a}function vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _d=null;function f1(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,p_=typeof requestAnimationFrame=="function"?requestAnimationFrame:xd,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(p1)}:xd;function p1(e){setTimeout(function(){throw e})}function fr(e){return e==="head"}function m_(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),eo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Ht]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Rd(e.ownerDocument.body);a=c}while(a);eo(n)}function g_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function v_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function __(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function m1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Sd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return m1(n,a,e)}function g1(e){return e.documentElement.clientHeight}function v1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function _1(e,n,a,s,c,f,x,w,B){var nt=n.nodeType===9?n:n.ownerDocument;try{var ht=nt.startViewTransition({update:function(){var $=nt.defaultView,ut=$.navigation&&$.navigation.transition,Gt=nt.fonts.status;s();var ee=[];if(Gt==="loaded"&&(g1(nt),nt.fonts.status==="loading"&&ee.push(nt.fonts.ready)),Gt=ee.length,e!==null)for(var Se=e.suspenseyImages,et=0,k=0;k<Se.length;k++){var st=Se[k];if(!st.complete){var St=st.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<$.innerHeight&&St.left<$.innerWidth){if(et+=F_(st),et>sc){ee.length=Gt;break}st=new Promise(v1.bind(st)),ee.push(st)}}}if(0<ee.length)return $=Promise.race([Promise.all(ee),new Promise(function(Jt){return setTimeout(Jt,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,$]):$).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});nt.__reactViewTransition=ht;var yt=[];return ht.ready.then(function(){for(var $=nt.documentElement.getAnimations({subtree:!0}),ut=0;ut<$.length;ut++){var Gt=$[ut],ee=Gt.effect,Se=ee.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){yt.push(Gt),Gt=ee.getKeyframes();for(var et=Se=void 0,k=!0,st=0;st<Gt.length;st++){var St=Gt[st],Jt=St.width;if(Se===void 0)Se=Jt;else if(Se!==Jt){k=!1;break}if(Jt=St.height,et===void 0)et=Jt;else if(et!==Jt){k=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}k&&Se!==void 0&&et!==void 0&&(ee.setKeyframes(Gt),k=getComputedStyle(ee.target,ee.pseudoElement),k.width!==Se||k.height!==et)&&(k=Gt[0],k.width=Se,k.height=et,k=Gt[Gt.length-1],k.width=Se,k.height=et,ee.setKeyframes(Gt))}}x()},function($){nt.__reactViewTransition===ht&&(nt.__reactViewTransition=null);try{typeof $=="object"&&$!==null&&$.name==="InvalidStateError"&&($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null),$!==null&&B($)}finally{s(),c(),x()}}),ht.finished.finally(function(){for(var $=0;$<yt.length;$++)yt[$].cancel();nt.__reactViewTransition===ht&&(nt.__reactViewTransition=null),w()}),ht}catch{return s(),c(),x(),null}}function es(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}es.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},es.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[c])}return s},es.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function x_(e){return{name:e,group:new es("group",e),imagePair:new es("image-pair",e),old:new es("old",e),new:new es("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(y_(f,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(B){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(c=x.removeEventListener.bind(x,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Zs(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:c}),_(this._fragmentFiber.child,!1,x1,e,w,s)}this._eventListeners=f}};function x1(e,n,a,s){return b(e).addEventListener(n,a,s),!1}mi.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=y_(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Zs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,S1,e,a,c),s.splice(n,1),f!==null&&f()}};function S1(e,n,a,s){return b(e).removeEventListener(n,a,s),!1}function Zs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function S_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function y_(e,n,a,s){if(e.length===0)return-1;s=S_(s);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&S_(f.optionsOrUseCapture)===s)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){_(this._fragmentFiber.child,!0,M_,e,void 0,void 0)};function M_(e,n){return e.tag===6?!1:(e=b(e),U1(e,n))}mi.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,yd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!M_(n[a],e);a--);};function yd(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,y1,e,void 0,void 0))};function y1(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,M1,e,void 0,void 0)};function M1(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,b1,e,void 0,void 0);for(var a=n=0;a<Bi.length;a++){var s=Bi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Bi[n++]=s}Bi.length=n}};function b1(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Bi=[],Md=!1;function E1(e,n,a){Bi.push({fragmentInstance:e,observer:n,instance:a}),Md||(Md=!0,L1(function(){Md=!1;var s=Bi;Bi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,T1,e,void 0,void 0),e};function T1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,yd,a,void 0,void 0);var s=b(n);if(a.length===0){if(a=s,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=M(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),c=b(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=c.compareDocumentPosition(e),B=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=s&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&c===e||B||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||A1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function A1(e,n,a,s,c){var f=ce(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=g(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=D(a,f,U),n===null?n=!1:(_(n,!0,I,f,a),f=y,y=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=D(s,f,U),n===null?n=!1:(_(n,!0,C,f,s),f=y,L=y=null,n=f!==null)),n):!1}function b_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,yd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=M(this._fragmentFiber);if(s=a?s[1]||s[0]||g(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=b(s),b_(e,a);return}if(s=b(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=b(c),b_(c,a)):b(c).scrollIntoView(e),s+=a?-1:1}};function R1(e,n){return e=b(e),E_(e,n),!1}function E_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function T_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,w=0;w<Bi.length;w++){var B=Bi[w];(B.fragmentInstance!==n||B.observer!==f||B.instance!==e)&&(Bi[x++]=B)}Bi.length=x,f.observe(e)}),E_(e,n))}function w1(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?E1(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function bd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bd(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function C1(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=wi(e.nextSibling),e===null)break}return null}function D1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wi(e.nextSibling),e===null))return null;return e}function A_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wi(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$?"||e.data==="$~"}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function N1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function wi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ad=null;function R_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return wi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function w_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function U1(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function L1(e){p_(function(){p_(function(n){return e(n)})})}function C_(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function D_(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ze(e,n,s,null,l1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),te(e)}function Rd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);te(e)}var Ci=new Map,N_=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Na=Ut.d;Ut.d={f:O1,r:P1,D:z1,C:I1,L:B1,m:F1,X:G1,S:H1,M:V1};function O1(){var e=Na.f(),n=Ju();return e||n}function P1(e){var n=ve(e);n!==null&&n.tag===5&&n.type==="form"?Lg(n):Na.r(e)}var Qs=typeof document>"u"?null:document;function U_(e,n,a){var s=Qs;if(s&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),N_.has(c)||(N_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),On(n,"link",e),be(n),s.head.appendChild(n)))}}function z1(e){Na.D(e),U_("dns-prefetch",e,null)}function I1(e,n){Na.C(e,n),U_("preconnect",e,n)}function B1(e,n,a){Na.L(e,n,a);var s=Qs;if(s&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=Js(e);break;case"script":f=js(e)}if(!(Ci.has(f)||(e=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(dl(f))||n==="script"&&s.querySelector(pl(f))))){var x=s.createElement("link");On(x,"link",e),n==="style"&&(x[jt]=!0,x.onload=x.onerror=function(){Je(x)}),be(x),s.head.appendChild(x)}}}function F1(e,n){Na.m(e,n);var a=Qs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(s)+'"][href="'+yi(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=js(e)}if(!Ci.has(f)&&(e=N({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}s=a.createElement("link"),On(s,"link",e),be(s),a.head.appendChild(s)}}}function H1(e,n,a){Na.S(e,n,a);var s=Qs;if(s&&e){var c=Re(s).hoistableStyles,f=Js(e);n=n||"default";var x=c.get(f);if(!x){var w={loading:0,preload:null};if(x=s.querySelector(dl(f)))w.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&wd(e,a);var B=x=s.createElement("link");be(B),On(B,"link",e),B._p=new Promise(function(nt,ht){B.onload=nt,B.onerror=ht}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ac(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:w},c.set(f,x)}}}function G1(e,n){Na.X(e,n);var a=Qs;if(a&&e){var s=Re(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(pl(c)),f||(e=N({src:e,async:!0},n),(n=Ci.get(c))&&Cd(e,n),f=a.createElement("script"),be(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function V1(e,n){Na.M(e,n);var a=Qs;if(a&&e){var s=Re(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(pl(c)),f||(e=N({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&Cd(e,n),f=a.createElement("script"),be(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function L_(e,n,a,s){var c=(c=le.current)?hl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Js(a.href),n=Re(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Js(a.href);var f=Re(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(dl(e)))?f._p||(x.instance=f,x.state.loading=5):(f=Ci.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,f)),k1(c,e,f,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=js(a),n=Re(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Js(e){return'href="'+yi(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function O_(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function k1(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[jt]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[jt]=!0,n.onload=n.onerror=Je.bind(null,n),On(n,"link",a),be(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function js(e){return'[src="'+yi(e)+'"]'}function pl(e){return"script[async]"+e}function P_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(s)return n.instance=s,be(s),s;var c=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),be(s),On(s,"style",c),ac(s,a.precedence,e),n.instance=s;case"stylesheet":c=Js(a.href);var f=e.querySelector(dl(c));if(f)return n.state.loading|=4,n.instance=f,be(f),f;s=O_(a),(c=Ci.get(c))&&wd(s,c),f=(e.ownerDocument||e).createElement("link"),be(f);var x=f;return x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),On(f,"link",s),n.state.loading|=4,ac(f,a.precedence,e),n.instance=f;case"script":return f=js(a.src),(c=e.querySelector(pl(f)))?(n.instance=c,be(c),c):(s=a,(c=Ci.get(f))&&(s=N({},a),Cd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),be(c),On(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ac(s,a.precedence,e));return n.instance}function ac(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var w=s[x];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function z_(e,n,a){if(rc===null){var s=new Map,c=rc=new Map;c.set(a,s)}else c=rc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ht]||f[R]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var w=s.get(x);w?w.push(f):s.set(x,[f])}}return s}function Dd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function X1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function I_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function B_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function F_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function H_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=F_(n),e.suspenseyImages.push(n)),e=Y1.bind(e),n.decode().then(e,e))}function q1(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Js(s.href),f=n.querySelector(dl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,s=O_(s),(c=Ci.get(c))&&wd(s,c),f=f.createElement("link"),be(f);var x=f;x._p=new Promise(function(w,B){x.onload=w,x.onerror=B}),On(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sc=0;function W1(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sc===0&&(sc=62500*c1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function G_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)lc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,G_(this)}function Y1(){this.imgCount--,G_(this)}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(K1,e),oc=null,ml.call(e))}function K1(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var s=a.get(null);else{a=new Map,oc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=ml.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var $s={$$typeof:J,Provider:null,Consumer:null,_currentValue:Be,_currentValue2:Be,_threadCount:0};function Z1(e,n,a,s,c,f,x,w,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.hiddenUpdates=gs(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function V_(e,n,a,s,c,f,x,w,B,nt,ht,yt){return e=new Z1(e,n,a,x,B,nt,ht,yt,w),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=qf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Zf(f),e}function k_(e){return e?(e=Ts,e):Ts}function X_(e,n,a,s,c,f){c=k_(c),s.context===null?s.context=c:s.pendingContext=c,s=$a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=tr(e,s,n),a!==null&&(ei(a,e,n),Wo(a,e,n))}function q_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Nd(e,n){q_(e,n),(e=e.alternate)&&q_(e,n)}function W_(e){if(e.tag===13||e.tag===31){var n=Br(e,67108864);n!==null&&ei(n,e,67108864),Nd(e,67108864)}}function Y_(e){if(e.tag===13||e.tag===31){var n=pi();n=Co(n);var a=Br(e,n);a!==null&&ei(a,e,n),Nd(e,n)}}var to=!0;function Q1(e,n,a,s){var c=mt.T;mt.T=null;var f=Ut.p;try{Ut.p=2,Ud(e,n,a,s)}finally{Ut.p=f,mt.T=c}}function J1(e,n,a,s){var c=mt.T;mt.T=null;var f=Ut.p;try{Ut.p=8,Ud(e,n,a,s)}finally{Ut.p=f,mt.T=c}}function Ud(e,n,a,s){if(to){var c=Ld(s);if(c===null)dd(e,n,s,uc,a),Z_(e,s);else if($1(c,e,n,a,s))s.stopPropagation();else if(Z_(e,s),n&4&&-1<j1.indexOf(e)){for(;c!==null;){var f=ve(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=va(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var B=1<<31-ge(x);w.entanglements[1]|=B,x&=~B}la(f),(Xe&6)===0&&(Ku=Kt()+500,ll(0))}}break;case 31:case 13:w=Br(f,2),w!==null&&ei(w,f,2),Ju(),Nd(f,2)}if(f=Ld(s),f===null&&dd(e,n,s,uc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else dd(e,n,s,null,a)}}function Ld(e){return e=_f(e),Od(e)}var uc=null;function Od(e){if(uc=null,e=ce(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case de:return 2;case Q:return 8;case zt:case Mt:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Pd=!1,hr=null,dr=null,pr=null,gl=new Map,vl=new Map,mr=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z_(e,n){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function _l(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ve(n),n!==null&&W_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function $1(e,n,a,s,c){switch(n){case"focusin":return hr=_l(hr,e,n,a,s,c),!0;case"dragenter":return dr=_l(dr,e,n,a,s,c),!0;case"mouseover":return pr=_l(pr,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return gl.set(f,_l(gl.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,vl.set(f,_l(vl.get(f)||null,e,n,a,s,c)),!0}return!1}function Q_(e){var n=ce(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Y_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);vf=s,a.target.dispatchEvent(s),vf=null}else return n=ve(a),n!==null&&W_(n),e.blockedOn=a,!1;n.shift()}return!0}function J_(e,n,a){cc(e)&&a.delete(n)}function tb(){Pd=!1,hr!==null&&cc(hr)&&(hr=null),dr!==null&&cc(dr)&&(dr=null),pr!==null&&cc(pr)&&(pr=null),gl.forEach(J_),vl.forEach(J_)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,Pd||(Pd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tb)))}var hc=null;function j_(e){hc!==e&&(hc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Od(s||a)===null)continue;break}var f=ve(a);f!==null&&(e.splice(n,3),n-=3,gh(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function eo(e){function n(B){return fc(B,e)}hr!==null&&fc(hr,e),dr!==null&&fc(dr,e),pr!==null&&fc(pr,e),gl.forEach(n),vl.forEach(n);for(var a=0;a<mr.length;a++){var s=mr[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<mr.length&&(a=mr[0],a.blockedOn===null);)Q_(a),a.blockedOn===null&&mr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[G]||null;if(typeof f=="function")x||j_(a);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[G]||null)w=x.formAction;else if(Od(c)!==null)continue}else w=x.action;typeof w=="function"?a[s+1]=w:(a.splice(s,3),s-=3),j_(a)}}}function $_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function zd(e){this._internalRoot=e}dc.prototype.render=zd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=pi();X_(a,s,e,n,null,null)},dc.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;X_(e.current,2,null,e,null,null),Ju(),n[dt]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<mr.length&&n!==0&&n<mr[a].priority;a++);mr.splice(a,0,e),a===0&&Q_(e)}};var tx=t.version;if(tx!=="19.3.0")throw Error(r(527,tx,"19.3.0"));Ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ie=pc.inject(eb),Wt=pc}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=kg,f=Xg,x=qg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=V_(e,1,!1,null,null,a,s,null,c,f,x,$_),e[dt]=n.current,hd(e),new zd(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=kg,x=Xg,w=qg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=V_(e,1,!0,n,a??null,s,c,B,f,x,w,$_),n.context=k_(null),a=n.current,s=pi(),s=Co(s),c=$a(s),c.callback=null,tr(a,c,s),a=s,n.current.lanes=a,Qi(n,a),la(n),e[dt]=n.current,hd(e),new dc(n)},Sl.version="19.3.0",Sl}var cx;function fb(){if(cx)return Fd.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Fd.exports=cb(),Fd.exports}var hb=fb();const DS=1495978707e-1,NS=94607304725808e-1,Ua=695700,fx=DS,vr=NS,Cr=[{id:"moon",name:"the moon",kind:"rocky",radiusKm:1737.4,sphere:!0,color:"#9c9a96",color2:"#6f6d6a",fact:"the only other world people have walked on. twelve of us, so far.",source:"nasa-fs"},{id:"mercury",name:"mercury",kind:"rocky",radiusKm:2439.7,sphere:!0,color:"#8f8577",color2:"#5e574e",fact:"a year there is 88 days. a single day is 176.",source:"nasa-fs"},{id:"mars",name:"mars",kind:"rocky",radiusKm:3389.5,sphere:!0,color:"#b5623a",color2:"#7a3a22",fact:"home to olympus mons, a volcano about 2.5× taller than everest.",source:"nasa-fs"},{id:"venus",name:"venus",kind:"rocky",radiusKm:6051.8,sphere:!0,color:"#d9bf8c",color2:"#b09366",fact:"hot enough to melt lead, under clouds of sulfuric acid.",source:"nasa-fs"},{id:"earth",name:"earth",kind:"earth",radiusKm:6371,sphere:!0,color:"#2f5f8f",color2:"#4f7a3f",fact:"everyone i know, and everyone i ever will, is on here.",source:"nasa-fs"},{id:"neptune",name:"neptune",kind:"ice",radiusKm:24622,sphere:!0,color:"#3f63c7",color2:"#2d4799",fact:"winds up to 2,000 km/h. the fastest we know of in the solar system.",source:"nasa-fs"},{id:"uranus",name:"uranus",kind:"ice",radiusKm:25362,sphere:!0,color:"#8fcfd6",color2:"#6fb2bb",fact:"it rolls around the sun on its side, tipped about 98°.",source:"nasa-fs"},{id:"saturn",name:"saturn",kind:"ringed",radiusKm:58232,sphere:!0,color:"#d8c08a",color2:"#b39866",fact:"its rings are ~280,000 km wide but mostly just tens of meters thick.",source:"nasa-fs"},{id:"jupiter",name:"jupiter",kind:"gas",radiusKm:69911,sphere:!0,color:"#c9a27a",color2:"#8c6446",fact:"the great red spot is a storm wider than earth, running for centuries.",source:"nasa-fs"},{id:"sun",name:"the sun",kind:"star",radiusKm:Ua,sphere:!0,color:"#fff1d6",tempK:5772,fact:"about 99.8% of all the mass in our solar system.",source:"iau"},{id:"sirius",name:"sirius a",kind:"star",radiusKm:1.711*Ua,sphere:!0,color:"#cfe0ff",tempK:9940,fact:"the brightest star in the night sky, 8.6 light-years away.",source:"sirius"},{id:"pollux",name:"pollux",kind:"star",radiusKm:9.06*Ua,sphere:!0,color:"#ffc58a",tempK:4586,fact:"an orange giant with a planet of its own, thestias.",source:"pollux"},{id:"arcturus",name:"arcturus",kind:"star",radiusKm:25.4*Ua,sphere:!0,color:"#ffb574",tempK:4286,fact:"its light opened the 1933 chicago world’s fair.",source:"arcturus"},{id:"aldebaran",name:"aldebaran",kind:"star",radiusKm:45.1*Ua,sphere:!0,color:"#ffa865",tempK:3900,fact:"the red eye of taurus. pioneer 10 is drifting its way.",source:"aldebaran"},{id:"rigel",name:"rigel",kind:"star",radiusKm:78.9*Ua,sphere:!0,color:"#bcd2ff",tempK:12100,fact:"a blue supergiant, ~120,000 times brighter than the sun.",source:"rigel"},{id:"antares",name:"antares",kind:"star",radiusKm:680*Ua,sphere:!0,color:"#ff9150",tempK:3660,fact:"put it where the sun is and it swallows mars’ orbit.",source:"antares",note:"radius estimates range ~680–880 r☉."},{id:"betelgeuse",name:"betelgeuse",kind:"star",radiusKm:764*Ua,sphere:!0,color:"#ff8a48",tempK:3600,fact:"it will go supernova someday. someday could be 100,000 years.",source:"betel",note:"radius ~640–1,020 r☉ depending on the study."},{id:"uyscuti",name:"uy scuti",kind:"star",radiusKm:909*Ua,sphere:!0,color:"#ff7f40",tempK:3365,fact:"one of the biggest stars we know, though nobody agrees how big.",source:"uyscuti",note:"uncertain: ~909 r☉ (gaia distance) vs 1,708 r☉ (older). vy canis majoris ~1,420 r☉ may be larger."},{id:"heliosphere",name:"the heliosphere",kind:"heliosphere",radiusKm:120*fx,sphere:!1,color:"#9fb4d9",fact:"the sun’s wind bubble. voyager 1 left it in 2012 and kept going.",source:"helio",note:"really comet-shaped, not round."},{id:"oort",name:"the oort cloud",kind:"oort",radiusKm:1e5*fx,sphere:!1,color:"#c9d4e6",fact:"a shell of trillions of icy bodies. nobody has seen it directly.",source:"oort",note:"outer edge estimates range 10,000–100,000 au."},{id:"orion",name:"orion nebula",kind:"nebula",radiusKm:12*vr,sphere:!1,color:"#d98ab0",color2:"#6fb3c9",fact:"a star nursery you can see with your eyes, under orion’s belt.",source:"orion"},{id:"omega",name:"omega centauri",kind:"cluster",radiusKm:75*vr,sphere:!1,color:"#ffe2b8",fact:"about 10 million stars packed into one ball of light.",source:"omega"},{id:"milkyway",name:"the milky way",kind:"galaxy",radiusKm:5e4*vr,sphere:!1,color:"#e9dcc4",color2:"#9fb4d9",tilt:.62,fact:"home. 100–400 billion stars, and we’re in the suburbs.",source:"mw"},{id:"andromeda",name:"andromeda",kind:"galaxy",radiusKm:76e3*vr,sphere:!1,color:"#f0dcc0",color2:"#b8c4de",tilt:.34,fact:"headed our way. we merge in roughly 4–5 billion years.",source:"m31",note:"disc size; its faint halo is far bigger."},{id:"localgroup",name:"the local group",kind:"group",radiusKm:5e6*vr,sphere:!1,color:"#d4a574",fact:"our neighborhood: two big spirals and 80-something small ones.",source:"lg"},{id:"virgo",name:"virgo supercluster",kind:"supercluster",radiusKm:55e6*vr,sphere:!1,color:"#d4a574",fact:"a hundred-ish galaxy groups and clusters, us somewhere on the edge.",source:"virgo"},{id:"laniakea",name:"laniakea",kind:"laniakea",radiusKm:26e7*vr,sphere:!1,color:"#d4a574",fact:"hawaiian for “immeasurable heaven.” 100,000 galaxies flowing one way.",source:"lania"},{id:"universe",name:"the observable universe",kind:"universe",radiusKm:465e8*vr,sphere:!1,color:"#d4a574",fact:"everything light has had time to reach us from. that’s the edge, for now.",source:"ou",note:"comoving size; the universe itself may be infinite."}],db=Cr.find(o=>o.id==="earth");function pb(o){if(o<1e8)return{value:Vc(o),unit:"km"};const t=o/DS;return t<2e4?{value:Vc(t),unit:"au"}:{value:Vc(o/NS),unit:"light-years"}}const mb=[[1e18,"quintillion"],[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"]];function Gc(o){return o>=100?Math.round(o).toLocaleString("en-US"):o>=10?(Math.round(o*10)/10).toString():(Math.round(o*100)/100).toString()}function Vc(o){if(o>=1e21){const t=Math.floor(Math.log10(o));return`${Gc(o/10**t)} × 10^${t}`}for(const[t,i]of mb)if(o>=t)return`${Gc(o/t)} ${i}`;return Gc(o)}function hx(o){return o<1?`${Gc(o)}×`:`${Vc(o)}×`}const wm="186",gb=0,dx=1,vb=2,kc=1,_b=2,Dl=3,cs=0,ri=1,Ni=2,Wi=0,Ul=1,px=2,mx=3,gx=4,US=5,os=100,xb=101,Sb=102,yb=103,Mb=104,bb=200,Pp=201,Eb=202,Tb=203,LS=204,$c=205,Ab=206,Rb=207,wb=208,Cb=209,Db=210,Nb=211,Ub=212,Lb=213,Ob=214,zp=0,Ip=1,Bp=2,zl=3,Fp=4,Hp=5,Gp=6,Vp=7,OS=0,Pb=1,zb=2,pa=0,PS=1,zS=2,IS=3,Cm=4,BS=5,FS=6,HS=7,GS=300,fs=301,yo=302,kd=303,Xd=304,uf=306,kp=1e3,Ba=1001,Xp=1002,zn=1003,Ib=1004,mc=1005,Hn=1006,qd=1007,Dr=1008,_i=1009,VS=1010,kS=1011,Il=1012,Dm=1013,ma=1014,ha=1015,ga=1016,Nm=1017,Um=1018,Bl=1020,XS=35902,qS=35899,WS=1021,YS=1022,qi=1023,Ha=1026,ls=1027,KS=1028,Lm=1029,hs=1030,Om=1031,Pm=1033,Xc=33776,qc=33777,Wc=33778,Yc=33779,qp=35840,Wp=35841,Yp=35842,Kp=35843,Zp=36196,Qp=37492,Jp=37496,jp=37488,$p=37489,tf=37490,tm=37491,em=37808,nm=37809,im=37810,am=37811,rm=37812,sm=37813,om=37814,lm=37815,um=37816,cm=37817,fm=37818,hm=37819,dm=37820,pm=37821,mm=36492,gm=36494,vm=36495,_m=36283,xm=36284,ef=36285,Sm=36286,Bb=3200,ym=0,Fb=1,wr="",Qn="srgb",nf="srgb-linear",af="linear",Qe="srgb",Wd=7680,Hb=519,Gb=512,Vb=513,kb=514,zm=515,Xb=516,qb=517,Im=518,Wb=519,Yb=35044,vx="300 es",da=2e3,Fl=2001;function Kb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zb(){const o=Hl("canvas");return o.style.display="block",o}const _x={};function xx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ZS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ue(...o){o=ZS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ve(...o){o=ZS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function xo(...o){const t=o.join(" ");t in _x||(_x[t]=!0,ue(...o))}function Qb(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Jb={[zp]:Ip,[Bp]:Gp,[Fp]:Vp,[zl]:Hp,[Ip]:zp,[Gp]:Bp,[Vp]:Fp,[Hp]:zl};class ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,Mm=180/Math.PI;function kl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function jb(o,t){return(o%t+t)%t}function Kd(o,t,i){return(1-i)*o+i*t}function yl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ym=class Ym{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ym.prototype.isVector2=!0;let re=Ym;class Ga{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3],g=u[h+0],S=u[h+1],M=u[h+2],A=u[h+3];if(_!==A||p!==g||m!==S||v!==M){let b=p*g+m*S+v*M+_*A;b<0&&(g=-g,S=-S,M=-M,A=-A,b=-b);let y=1-d;if(b<.9995){const L=Math.acos(b),I=Math.sin(L);y=Math.sin(y*L)/I,d=Math.sin(d*L)/I,p=p*y+g*d,m=m*y+S*d,v=v*y+M*d,_=_*y+A*d}else{p=p*y+g*d,m=m*y+S*d,v=v*y+M*d,_=_*y+A*d;const L=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=L,m*=L,v*=L,_*=L}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=u[h],g=u[h+1],S=u[h+2],M=u[h+3];return t[i]=d*M+v*_+p*S-m*g,t[i+1]=p*M+v*g+m*_-d*S,t[i+2]=m*M+v*S+d*g-p*_,t[i+3]=v*M-d*_-p*g-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),_=d(u/2),g=p(r/2),S=p(l/2),M=p(u/2);switch(h){case"XYZ":this._x=g*v*_+m*S*M,this._y=m*S*_-g*v*M,this._z=m*v*M+g*S*_,this._w=m*v*_-g*S*M;break;case"YXZ":this._x=g*v*_+m*S*M,this._y=m*S*_-g*v*M,this._z=m*v*M-g*S*_,this._w=m*v*_+g*S*M;break;case"ZXY":this._x=g*v*_-m*S*M,this._y=m*S*_+g*v*M,this._z=m*v*M+g*S*_,this._w=m*v*_-g*S*M;break;case"ZYX":this._x=g*v*_-m*S*M,this._y=m*S*_+g*v*M,this._z=m*v*M-g*S*_,this._w=m*v*_+g*S*M;break;case"YZX":this._x=g*v*_+m*S*M,this._y=m*S*_+g*v*M,this._z=m*v*M-g*S*_,this._w=m*v*_-g*S*M;break;case"XZY":this._x=g*v*_-m*S*M,this._y=m*S*_-g*v*M,this._z=m*v*M+g*S*_,this._w=m*v*_+g*S*M;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],_=i[10],g=r+d+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(h-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(u-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(h-l)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-u*p,this._y=l*v+h*p+u*d-r*m,this._z=u*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Km=class Km{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Sx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Sx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),v=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+p*m+h*_-d*v,this.y=r+p*v+d*m-u*_,this.z=l+p*_+u*v-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Zd.copy(this).projectOnVector(t),this.sub(Zd)}reflect(t){return this.sub(Zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Km.prototype.isVector3=!0;let q=Km;const Zd=new q,Sx=new Ga,Zm=class Zm{constructor(t,i,r,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],S=r[5],M=r[8],A=l[0],b=l[3],y=l[6],L=l[1],I=l[4],C=l[7],U=l[2],D=l[5],N=l[8];return u[0]=h*A+d*L+p*U,u[3]=h*b+d*I+p*D,u[6]=h*y+d*C+p*N,u[1]=m*A+v*L+_*U,u[4]=m*b+v*I+_*D,u[7]=m*y+v*C+_*N,u[2]=g*A+S*L+M*U,u[5]=g*b+S*I+M*D,u[8]=g*y+S*C+M*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*h*v-i*d*m-r*u*v+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=v*h-d*m,g=d*p-v*u,S=m*u-h*p,M=i*_+r*g+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return t[0]=_*A,t[1]=(l*m-v*r)*A,t[2]=(d*r-l*h)*A,t[3]=g*A,t[4]=(v*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=S*A,t[7]=(r*p-m*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qd.makeScale(t,i)),this}rotate(t){return xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qd.makeRotation(-t)),this}translate(t,i){return xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zm.prototype.isMatrix3=!0;let _e=Zm;const Qd=new _e,yx=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const o={enabled:!0,workingColorSpace:nf,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Qe&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Qe&&(l.r=So(l.r),l.g=So(l.g),l.b=So(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===wr?af:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[nf]:{primaries:t,whitePoint:r,transfer:af,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),o}const Ie=$b();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class tE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{no===void 0&&(no=Hl("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=no}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Fa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Fa(i[r]/255)*255):i[r]=Fa(i[r]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eE=0;class Bm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=kl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Jd(l[h].image)):u.push(Jd(l[h]))}else u=Jd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Jd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let nE=0;const jd=new q;class Vn extends ds{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Ba,l=Ba,u=Hn,h=Dr,d=qi,p=_i,m=Vn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=kl(),this.name="",this.source=new Bm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==GS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kp:t.x=t.x-Math.floor(t.x);break;case Ba:t.x=t.x<0?0:1;break;case Xp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kp:t.y=t.y-Math.floor(t.y);break;case Ba:t.y=t.y<0?0:1;break;case Xp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=GS;Vn.DEFAULT_ANISOTROPY=1;const Qm=class Qm{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],v=p[4],_=p[8],g=p[1],S=p[5],M=p[9],A=p[2],b=p[6],y=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(M-b)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(M+b)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,C=(S+1)/2,U=(y+1)/2,D=(v+g)/4,N=(_+A)/4,E=(M+b)/4;return I>C&&I>U?I<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(I),l=D/r,u=N/r):C>U?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=D/l,u=E/l):U<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),r=N/u,l=E/u),this.set(r,l,u,i),this}let L=Math.sqrt((b-M)*(b-M)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(b-M)/L,this.y=(_-A)/L,this.z=(g-v)/L,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qm.prototype.isVector4=!0;let tn=Qm;class iE extends ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Vn(l),h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends iE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class QS extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const lf=class lf{constructor(t,i,r,l,u,h,d,p,m,v,_,g,S,M,A,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,v,_,g,S,M,A,b)}set(t,i,r,l,u,h,d,p,m,v,_,g,S,M,A,b){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=_,y[14]=g,y[3]=S,y[7]=M,y[11]=A,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lf().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/io.setFromMatrixColumn(t,0).length(),u=1/io.setFromMatrixColumn(t,1).length(),h=1/io.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const g=h*v,S=h*_,M=d*v,A=d*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=S+M*m,i[5]=g-A*m,i[9]=-d*p,i[2]=A-g*m,i[6]=M+S*m,i[10]=h*p}else if(t.order==="YXZ"){const g=p*v,S=p*_,M=m*v,A=m*_;i[0]=g+A*d,i[4]=M*d-S,i[8]=h*m,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=S*d-M,i[6]=A+g*d,i[10]=h*p}else if(t.order==="ZXY"){const g=p*v,S=p*_,M=m*v,A=m*_;i[0]=g-A*d,i[4]=-h*_,i[8]=M+S*d,i[1]=S+M*d,i[5]=h*v,i[9]=A-g*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const g=h*v,S=h*_,M=d*v,A=d*_;i[0]=p*v,i[4]=M*m-S,i[8]=g*m+A,i[1]=p*_,i[5]=A*m+g,i[9]=S*m-M,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const g=h*p,S=h*m,M=d*p,A=d*m;i[0]=p*v,i[4]=A-g*_,i[8]=M*_+S,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*_+M,i[10]=g-A*_}else if(t.order==="XZY"){const g=h*p,S=h*m,M=d*p,A=d*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=g*_+A,i[5]=h*v,i[9]=S*_-M,i[2]=M*_-S,i[6]=d*v,i[10]=A*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rE,t,sE)}lookAt(t,i,r){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),_r.crossVectors(r,gi),_r.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),_r.crossVectors(r,gi)),_r.normalize(),gc.crossVectors(gi,_r),l[0]=_r.x,l[4]=gc.x,l[8]=gi.x,l[1]=_r.y,l[5]=gc.y,l[9]=gi.y,l[2]=_r.z,l[6]=gc.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],S=r[13],M=r[2],A=r[6],b=r[10],y=r[14],L=r[3],I=r[7],C=r[11],U=r[15],D=l[0],N=l[4],E=l[8],O=l[12],z=l[1],H=l[5],tt=l[9],Z=l[13],j=l[2],J=l[6],W=l[10],K=l[14],ct=l[3],X=l[7],at=l[11],_t=l[15];return u[0]=h*D+d*z+p*j+m*ct,u[4]=h*N+d*H+p*J+m*X,u[8]=h*E+d*tt+p*W+m*at,u[12]=h*O+d*Z+p*K+m*_t,u[1]=v*D+_*z+g*j+S*ct,u[5]=v*N+_*H+g*J+S*X,u[9]=v*E+_*tt+g*W+S*at,u[13]=v*O+_*Z+g*K+S*_t,u[2]=M*D+A*z+b*j+y*ct,u[6]=M*N+A*H+b*J+y*X,u[10]=M*E+A*tt+b*W+y*at,u[14]=M*O+A*Z+b*K+y*_t,u[3]=L*D+I*z+C*j+U*ct,u[7]=L*N+I*H+C*J+U*X,u[11]=L*E+I*tt+C*W+U*at,u[15]=L*O+I*Z+C*K+U*_t,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],v=t[2],_=t[6],g=t[10],S=t[14],M=t[3],A=t[7],b=t[11],y=t[15],L=p*S-m*g,I=d*S-m*_,C=d*g-p*_,U=h*S-m*v,D=h*g-p*v,N=h*_-d*v;return i*(A*L-b*I+y*C)-r*(M*L-b*U+y*D)+l*(M*I-A*U+y*N)-u*(M*C-A*D+b*N)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],v=t[10];return i*(h*v-d*m)-r*(u*v-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=t[9],g=t[10],S=t[11],M=t[12],A=t[13],b=t[14],y=t[15],L=i*d-r*h,I=i*p-l*h,C=i*m-u*h,U=r*p-l*d,D=r*m-u*d,N=l*m-u*p,E=v*A-_*M,O=v*b-g*M,z=v*y-S*M,H=_*b-g*A,tt=_*y-S*A,Z=g*y-S*b,j=L*Z-I*tt+C*H+U*z-D*O+N*E;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/j;return t[0]=(d*Z-p*tt+m*H)*J,t[1]=(l*tt-r*Z-u*H)*J,t[2]=(A*N-b*D+y*U)*J,t[3]=(g*D-_*N-S*U)*J,t[4]=(p*z-h*Z-m*O)*J,t[5]=(i*Z-l*z+u*O)*J,t[6]=(b*C-M*N-y*I)*J,t[7]=(v*N-g*C+S*I)*J,t[8]=(h*tt-d*z+m*E)*J,t[9]=(r*z-i*tt-u*E)*J,t[10]=(M*D-A*C+y*L)*J,t[11]=(_*C-v*D-S*L)*J,t[12]=(d*O-h*H-p*E)*J,t[13]=(i*H-r*O+l*E)*J,t[14]=(A*I-M*U-b*L)*J,t[15]=(v*U-_*I+g*L)*J,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,v=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,v=h+h,_=d+d,g=u*m,S=u*v,M=u*_,A=h*v,b=h*_,y=d*_,L=p*m,I=p*v,C=p*_,U=r.x,D=r.y,N=r.z;return l[0]=(1-(A+y))*U,l[1]=(S+C)*U,l[2]=(M-I)*U,l[3]=0,l[4]=(S-C)*D,l[5]=(1-(g+y))*D,l[6]=(b+L)*D,l[7]=0,l[8]=(M+I)*N,l[9]=(b-L)*N,l[10]=(1-(g+A))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let h=io.set(l[0],l[1],l[2]).length();const d=io.set(l[4],l[5],l[6]).length(),p=io.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Fi.copy(this);const m=1/h,v=1/d,_=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),r.x=h,r.y=d,r.z=p,this}makePerspective(t,i,r,l,u,h,d=da,p=!1){const m=this.elements,v=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),S=(r+l)/(r-l);let M,A;if(p)M=u/(h-u),A=h*u/(h-u);else if(d===da)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Fl)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=da,p=!1){const m=this.elements,v=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),S=-(r+l)/(r-l);let M,A;if(p)M=1/(h-u),A=h/(h-u);else if(d===da)M=-2/(h-u),A=-(h+u)/(h-u);else if(d===Fl)M=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};lf.prototype.isMatrix4=!0;let rn=lf;const io=new q,Fi=new rn,rE=new q(0,0,0),sE=new q(1,1,1),_r=new q,gc=new q,gi=new q,bx=new rn,Ex=new Ga;class Nr{constructor(t=0,i=0,r=0,l=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],_=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class JS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const Tx=new q,ao=new Ga,La=new rn,vc=new q,Ml=new q,lE=new q,uE=new Ga,Ax=new q(1,0,0),Rx=new q(0,1,0),wx=new q(0,0,1),Cx={type:"added"},cE={type:"removed"},ro={type:"childadded",child:null},$d={type:"childremoved",child:null};class Cn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new q,i=new Nr,r=new Ga,l=new q(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new _e}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new JS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Ax,t)}rotateY(t){return this.rotateOnAxis(Rx,t)}rotateZ(t){return this.rotateOnAxis(wx,t)}translateOnAxis(t,i){return Tx.copy(t).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ax,t)}translateY(t){return this.translateOnAxis(Rx,t)}translateZ(t){return this.translateOnAxis(wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?vc.copy(t):vc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(Ml,vc,this.up):La.lookAt(vc,Ml,this.up),this.quaternion.setFromRotationMatrix(La),l&&(La.extractRotation(l.matrixWorld),ao.setFromRotationMatrix(La),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cx),ro.child=t,this.dispatchEvent(ro),ro.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(cE),$d.child=t,this.dispatchEvent($d),$d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cx),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,lE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,uE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),v=h(t.images),_=h(t.shapes),g=h(t.skeletons),S=h(t.animations),M=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.DEFAULT_UP=new q(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gn extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const A of t.hand.values()){const b=i.getJointPose(A,r),y=this._getHandJoint(m,A);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,M=.005;m.inputState.pinching&&g>S+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=S-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Gn;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const jS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function ep(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Oe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ie.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ie.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ie.workingColorSpace){if(t=jb(t,1),i=De(i,0,1),r=De(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ep(h,u,t+1/3),this.g=ep(h,u,t),this.b=ep(h,u,t-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(t,i=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Qn){const r=jS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Ie.workingToColorSpace(Fn.copy(this),t),Math.round(De(Fn.r*255,0,255))*65536+Math.round(De(Fn.g*255,0,255))*256+Math.round(De(Fn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ie.workingColorSpace){Ie.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,u=Fn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=v<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Qn){Ie.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,r=Fn.g,l=Fn.b;return t!==Qn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+i,xr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(xr),t.getHSL(_c);const r=Kd(xr.h,_c.h,i),l=Kd(xr.s,_c.s,i),u=Kd(xr.l,_c.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Oe;Oe.NAMES=jS;let Dx=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}};const Hi=new q,Oa=new q,np=new q,Pa=new q,so=new q,oo=new q,Nx=new q,ip=new q,ap=new q,rp=new q,sp=new tn,op=new tn,lp=new tn;class Xi{constructor(t=new q,i=new q,r=new q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Hi.subVectors(t,i),l.cross(Hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Hi.subVectors(l,i),Oa.subVectors(r,i),np.subVectors(t,i);const h=Hi.dot(Hi),d=Hi.dot(Oa),p=Hi.dot(np),m=Oa.dot(Oa),v=Oa.dot(np),_=h*m-d*d;if(_===0)return u.set(0,0,0),null;const g=1/_,S=(m*p-d*v)*g,M=(h*v-d*p)*g;return u.set(1-S-M,M,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pa.x),p.addScaledVector(h,Pa.y),p.addScaledVector(d,Pa.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return sp.setScalar(0),op.setScalar(0),lp.setScalar(0),sp.fromBufferAttribute(t,i),op.fromBufferAttribute(t,r),lp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(sp,u.x),h.addScaledVector(op,u.y),h.addScaledVector(lp,u.z),h}static isFrontFacing(t,i,r,l){return Hi.subVectors(r,i),Oa.subVectors(t,i),Hi.cross(Oa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Hi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;so.subVectors(l,r),oo.subVectors(u,r),ip.subVectors(t,r);const p=so.dot(ip),m=oo.dot(ip);if(p<=0&&m<=0)return i.copy(r);ap.subVectors(t,l);const v=so.dot(ap),_=oo.dot(ap);if(v>=0&&_<=v)return i.copy(l);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(so,h);rp.subVectors(t,u);const S=so.dot(rp),M=oo.dot(rp);if(M>=0&&S<=M)return i.copy(u);const A=S*m-p*M;if(A<=0&&m>=0&&M<=0)return d=m/(m-M),i.copy(r).addScaledVector(oo,d);const b=v*M-S*_;if(b<=0&&_-v>=0&&S-M>=0)return Nx.subVectors(u,l),d=(_-v)/(_-v+(S-M)),i.copy(l).addScaledVector(Nx,d);const y=1/(b+A+g);return h=A*y,d=g*y,i.copy(r).addScaledVector(so,h).addScaledVector(oo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xl{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Gi):Gi.fromBufferAttribute(u,h),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),Sc.subVectors(this.max,bl),lo.subVectors(t.a,bl),uo.subVectors(t.b,bl),co.subVectors(t.c,bl),Sr.subVectors(uo,lo),yr.subVectors(co,uo),ns.subVectors(lo,co);let i=[0,-Sr.z,Sr.y,0,-yr.z,yr.y,0,-ns.z,ns.y,Sr.z,0,-Sr.x,yr.z,0,-yr.x,ns.z,0,-ns.x,-Sr.y,Sr.x,0,-yr.y,yr.x,0,-ns.y,ns.x,0];return!up(i,lo,uo,co,Sc)||(i=[1,0,0,0,1,0,0,0,1],!up(i,lo,uo,co,Sc))?!1:(yc.crossVectors(Sr,yr),i=[yc.x,yc.y,yc.z],up(i,lo,uo,co,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new q,new q,new q,new q,new q,new q,new q,new q],Gi=new q,xc=new Xl,lo=new q,uo=new q,co=new q,Sr=new q,yr=new q,ns=new q,bl=new q,Sc=new q,yc=new q,is=new q;function up(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){is.fromArray(o,u);const d=l.x*Math.abs(is.x)+l.y*Math.abs(is.y)+l.z*Math.abs(is.z),p=t.dot(is),m=i.dot(is),v=r.dot(is);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const xn=new q,Mc=new re;let hE=0;class ai extends ds{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Yb,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=ni(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yl(i,this.array)),i}setX(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yl(i,this.array)),i}setY(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yl(i,this.array)),i}setW(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),r=ni(r,this.array),l=ni(l,this.array),u=ni(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class $S extends ai{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class ty extends ai{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sn extends ai{constructor(t,i,r){super(new Float32Array(t),i,r)}}const dE=new Xl,El=new q,cp=new q;class ql{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):dE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(El,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(cp)),this.expandByPoint(El.copy(t.center).sub(cp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let pE=0;const Di=new rn,fp=new Cn,fo=new q,vi=new Xl,Tl=new Xl,wn=new q;class kn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kb(t)?ty:$S)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new _e().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,r){return Di.makeTranslation(t,i,r),this.applyMatrix4(Di),this}scale(t,i,r){return Di.makeScale(t,i,r),this.applyMatrix4(Di),this}lookAt(t){return fp.lookAt(t),fp.updateMatrix(),this.applyMatrix4(fp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];vi.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(vi.min,Tl.min),vi.expandByPoint(wn),wn.addVectors(vi.max,Tl.max),vi.expandByPoint(wn)):(vi.expandByPoint(Tl.min),vi.expandByPoint(Tl.max))}vi.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)wn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(wn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)wn.fromBufferAttribute(d,m),p&&(fo.fromBufferAttribute(t,m),wn.add(fo)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new ai(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let E=0;E<r.count;E++)d[E]=new q,p[E]=new q;const m=new q,v=new q,_=new q,g=new re,S=new re,M=new re,A=new q,b=new q;function y(E,O,z){m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,O),_.fromBufferAttribute(r,z),g.fromBufferAttribute(u,E),S.fromBufferAttribute(u,O),M.fromBufferAttribute(u,z),v.sub(m),_.sub(m),S.sub(g),M.sub(g);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(H),b.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(H),d[E].add(A),d[O].add(A),d[z].add(A),p[E].add(b),p[O].add(b),p[z].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let E=0,O=L.length;E<O;++E){const z=L[E],H=z.start,tt=z.count;for(let Z=H,j=H+tt;Z<j;Z+=3)y(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const I=new q,C=new q,U=new q,D=new q;function N(E){U.fromBufferAttribute(l,E),D.copy(U);const O=d[E];I.copy(O),I.sub(U.multiplyScalar(U.dot(O))).normalize(),C.crossVectors(D,O);const H=C.dot(p[E])<0?-1:1;h.setXYZW(E,I.x,I.y,I.z,H)}for(let E=0,O=L.length;E<O;++E){const z=L[E],H=z.start,tt=z.count;for(let Z=H,j=H+tt;Z<j;Z+=3)N(t.getX(Z+0)),N(t.getX(Z+1)),N(t.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new q,u=new q,h=new q,d=new q,p=new q,m=new q,v=new q,_=new q;if(t)for(let g=0,S=t.count;g<S;g+=3){const M=t.getX(g+0),A=t.getX(g+1),b=t.getX(g+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,b),d.add(v),p.add(v),m.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(b,m.x,m.y,m.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,_=d.normalized,g=new m.constructor(p.length*v);let S=0,M=0;for(let A=0,b=p.length;A<b;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let y=0;y<v;y++)g[M++]=m[S++]}return new ai(g,v,_)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const g=m[v],S=t(g,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const S=m[_];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],_=u[m];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,v=h.length;m<v;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hp=new q,mE=new q,gE=new _e;class Rr{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=hp.subVectors(r,i).cross(mE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(hp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||gE.getNormalMatrix(t),l=this.coplanarPoint(hp).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let vE=0;class ps extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=Ul,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=LS,this.blendDst=$c,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wd,this.stencilZFail=Wd,this.stencilZPass=Wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Rr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new re().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ia=new q,dp=new q,bc=new q,Ec=new q;class Fm{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ia.copy(this.origin).addScaledVector(this.direction,i),Ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){dp.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Ec.copy(this.origin).sub(dp);const u=t.distanceTo(i)*.5,h=-this.direction.dot(bc),d=Ec.dot(this.direction),p=-Ec.dot(bc),m=Ec.lengthSq(),v=Math.abs(1-h*h);let _,g,S,M;if(v>0)if(_=h*p-d,g=h*d-p,M=u*v,_>=0)if(g>=-M)if(g<=M){const A=1/v;_*=A,g*=A,S=_*(_+h*g+2*d)+g*(h*_+g+2*p)+m}else g=u,_=Math.max(0,-(h*g+d)),S=-_*_+g*(g+2*p)+m;else g=-u,_=Math.max(0,-(h*g+d)),S=-_*_+g*(g+2*p)+m;else g<=-M?(_=Math.max(0,-(-h*u+d)),g=_>0?-u:Math.min(Math.max(-u,-p),u),S=-_*_+g*(g+2*p)+m):g<=M?(_=0,g=Math.min(Math.max(-u,-p),u),S=g*(g+2*p)+m):(_=Math.max(0,-(h*u+d)),g=_>0?u:Math.min(Math.max(-u,-p),u),S=-_*_+g*(g+2*p)+m);else g=h>0?-u:u,_=Math.max(0,-(h*g+d)),S=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(dp).addScaledVector(bc,g),S}intersectSphere(t,i){if(t.radius<0)return null;Ia.subVectors(t.center,this.origin);const r=Ia.dot(this.direction),l=Ia.dot(Ia)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(r=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),v>=0?(u=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-g.z)*_,p=(t.max.z-g.z)*_):(d=(t.max.z-g.z)*_,p=(t.min.z-g.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ia)!==null}intersectTriangle(t,i,r,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,_=t.x-h.x,g=t.y-h.y,S=t.z-h.z,M=i.x-h.x,A=i.y-h.y,b=i.z-h.z,y=r.x-h.x,L=r.y-h.y,I=r.z-h.z,C=Math.abs(p),U=Math.abs(m),D=Math.abs(v);let N,E,O,z,H,tt,Z,j,J,W,K,ct;if(C>=U&&C>=D?(O=p,tt=_,J=M,ct=y,p>=0?(N=m,E=v,z=g,H=S,Z=A,j=b,W=L,K=I):(N=v,E=m,z=S,H=g,Z=b,j=A,W=I,K=L)):U>=D?(O=m,tt=g,J=A,ct=L,m>=0?(N=v,E=p,z=S,H=_,Z=b,j=M,W=I,K=y):(N=p,E=v,z=_,H=S,Z=M,j=b,W=y,K=I)):(O=v,tt=S,J=b,ct=I,v>=0?(N=p,E=m,z=_,H=g,Z=M,j=A,W=y,K=L):(N=m,E=p,z=g,H=_,Z=A,j=M,W=L,K=y)),O===0)return null;const X=N/O,at=E/O,_t=1/O,Lt=z-X*tt,Nt=H-at*tt,F=Z-X*J,ft=j-at*J,wt=W-X*ct,V=K-at*ct,pt=wt*ft-V*F,Et=Lt*V-Nt*wt,Dt=F*Nt-ft*Lt;if(l){if(pt<0||Et<0||Dt<0)return null}else if((pt<0||Et<0||Dt<0)&&(pt>0||Et>0||Dt>0))return null;const mt=pt+Et+Dt;if(mt===0)return null;const Ut=_t*(pt*tt+Et*J+Dt*ct);return(mt>0?Ut<0:Ut>0)?null:this.at(Ut/mt,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ey extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=OS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ux=new rn,as=new Fm,Tc=new ql,Lx=new q,Ac=new q,Rc=new q,wc=new q,pp=new q,Cc=new q,Ox=new q,Dc=new q;class on extends Cn{constructor(t=new kn,i=new ey){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Cc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(pp.fromBufferAttribute(_,t),h?Cc.addScaledVector(pp,v):Cc.addScaledVector(pp.sub(i),v))}i.add(Cc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(u),as.copy(t.ray).recast(t.near),!(Tc.containsPoint(as.origin)===!1&&(as.intersectSphere(Tc,Lx)===null||as.origin.distanceToSquared(Lx)>(t.far-t.near)**2))&&(Ux.copy(u).invert(),as.copy(t.ray).applyMatrix4(Ux),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,as)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,A=g.length;M<A;M++){const b=g[M],y=h[b.materialIndex],L=Math.max(b.start,S.start),I=Math.min(d.count,Math.min(b.start+b.count,S.start+S.count));for(let C=L,U=I;C<U;C+=3){const D=d.getX(C),N=d.getX(C+1),E=d.getX(C+2);l=Nc(this,y,t,r,m,v,_,D,N,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let b=M,y=A;b<y;b+=3){const L=d.getX(b),I=d.getX(b+1),C=d.getX(b+2);l=Nc(this,h,t,r,m,v,_,L,I,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let M=0,A=g.length;M<A;M++){const b=g[M],y=h[b.materialIndex],L=Math.max(b.start,S.start),I=Math.min(p.count,Math.min(b.start+b.count,S.start+S.count));for(let C=L,U=I;C<U;C+=3){const D=C,N=C+1,E=C+2;l=Nc(this,y,t,r,m,v,_,D,N,E),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let b=M,y=A;b<y;b+=3){const L=b,I=b+1,C=b+2;l=Nc(this,h,t,r,m,v,_,L,I,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function _E(o,t,i,r,l,u,h,d){let p;if(t.side===ri?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===cs,d),p===null)return null;Dc.copy(d),Dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Dc);return m<i.near||m>i.far?null:{distance:m,point:Dc.clone(),object:o}}function Nc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,Ac),o.getVertexPosition(p,Rc),o.getVertexPosition(m,wc);const v=_E(o,t,i,r,Ac,Rc,wc,Ox);if(v){const _=new q;Xi.getBarycoord(Ox,Ac,Rc,wc,_),l&&(v.uv=Xi.getInterpolatedAttribute(l,d,p,m,_,new re)),u&&(v.uv1=Xi.getInterpolatedAttribute(u,d,p,m,_,new re)),h&&(v.normal=Xi.getInterpolatedAttribute(h,d,p,m,_,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new q,materialIndex:0};Xi.getNormal(Ac,Rc,wc,g.normal),v.face=g,v.barycoord=_}return v}class xE extends Vn{constructor(t=null,i=1,r=1,l,u,h,d,p,m=zn,v=zn,_,g){super(null,h,d,p,m,v,l,u,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new ql,SE=new re(.5,.5),Uc=new q;class Hm{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,h=new Rr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=da,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],v=u[4],_=u[5],g=u[6],S=u[7],M=u[8],A=u[9],b=u[10],y=u[11],L=u[12],I=u[13],C=u[14],U=u[15];if(l[0].setComponents(m-h,S-v,y-M,U-L).normalize(),l[1].setComponents(m+h,S+v,y+M,U+L).normalize(),l[2].setComponents(m+d,S+_,y+A,U+I).normalize(),l[3].setComponents(m-d,S-_,y-A,U-I).normalize(),r)l[4].setComponents(p,g,b,C).normalize(),l[5].setComponents(m-p,S-g,y-b,U-C).normalize();else if(l[4].setComponents(m-p,S-g,y-b,U-C).normalize(),i===da)l[5].setComponents(m+p,S+g,y+b,U+C).normalize();else if(i===Fl)l[5].setComponents(p,g,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const i=SE.distanceTo(t.center);return rs.radius=.7071067811865476+i,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rf=new q,sf=new q,Px=new rn,Al=new Fm,Lc=new ql,mp=new q,zx=new q;class yE extends Cn{constructor(t=new kn,i=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)rf.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=rf.distanceTo(sf);t.setAttribute("lineDistance",new Sn(r,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=u,t.ray.intersectsSphere(Lc)===!1)return;Px.copy(l).invert(),Al.copy(t.ray).applyMatrix4(Px);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let A=S,b=M-1;A<b;A+=m){const y=v.getX(A),L=v.getX(A+1),I=Oc(this,t,Al,p,y,L,A);I&&i.push(I)}if(this.isLineLoop){const A=v.getX(M-1),b=v.getX(S),y=Oc(this,t,Al,p,A,b,M-1);y&&i.push(y)}}else{const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let A=S,b=M-1;A<b;A+=m){const y=Oc(this,t,Al,p,A,A+1,A);y&&i.push(y)}if(this.isLineLoop){const A=Oc(this,t,Al,p,M-1,S,M-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Oc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(rf.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,u),i.distanceSqToSegment(rf,sf,mp,zx)>r)return;mp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(mp);if(!(m<t.near||m>t.far))return{distance:m,point:zx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Ix=new q,Bx=new q;class ME extends yE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Ix.fromBufferAttribute(i,l),Bx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Ix.distanceTo(Bx);t.setAttribute("lineDistance",new Sn(r,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bE extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fx=new rn,bm=new Fm,Pc=new ql,zc=new q;class EE extends Cn{constructor(t=new kn,i=new bE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=u,t.ray.intersectsSphere(Pc)===!1)return;Fx.copy(l).invert(),bm.copy(t.ray).applyMatrix4(Fx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const g=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let M=g,A=S;M<A;M++){const b=m.getX(M);zc.fromBufferAttribute(_,b),Hx(zc,b,p,l,t,i,this)}}else{const g=Math.max(0,h.start),S=Math.min(_.count,h.start+h.count);for(let M=g,A=S;M<A;M++)zc.fromBufferAttribute(_,M),Hx(zc,M,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Hx(o,t,i,r,l,u,h){const d=bm.distanceSqToPoint(o);if(d<i){const p=new q;bm.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class iy extends Vn{constructor(t=[],i=fs,r,l,u,h,d,p,m,v){super(t,i,r,l,u,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gl extends Vn{constructor(t,i,r=ma,l,u,h,d=zn,p=zn,m,v=Ha,_=1){if(v!==Ha&&v!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,u,h,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class TE extends Gl{constructor(t,i=ma,r=fs,l,u,h=zn,d=zn,p,m=Ha){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,r,l,u,h,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ay extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wl extends kn{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],v=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,r,i,t,h,u,0),M("z","y","x",1,-1,r,i,-t,h,u,1),M("x","z","y",1,1,t,r,i,l,h,2),M("x","z","y",1,-1,t,r,-i,l,h,3),M("x","y","z",1,-1,t,i,r,l,u,4),M("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function M(A,b,y,L,I,C,U,D,N,E,O){const z=C/N,H=U/E,tt=C/2,Z=U/2,j=D/2,J=N+1,W=E+1;let K=0,ct=0;const X=new q;for(let at=0;at<W;at++){const _t=at*H-Z;for(let Lt=0;Lt<J;Lt++){const Nt=Lt*z-tt;X[A]=Nt*L,X[b]=_t*I,X[y]=j,m.push(X.x,X.y,X.z),X[A]=0,X[b]=0,X[y]=D>0?1:-1,v.push(X.x,X.y,X.z),_.push(Lt/N),_.push(1-at/E),K+=1}}for(let at=0;at<E;at++)for(let _t=0;_t<N;_t++){const Lt=g+_t+J*at,Nt=g+_t+J*(at+1),F=g+(_t+1)+J*(at+1),ft=g+(_t+1)+J*at;p.push(Lt,Nt,ft),p.push(Nt,F,ft),ct+=6}d.addGroup(S,ct,O),S+=ct,g+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Va{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ue("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let h;i?h=i:h=t*r[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(u-1);const v=r[l],g=r[l+1]-v,S=(h-v)/g;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new re:new q);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new q,l=[],u=[],h=[],d=new q,p=new rn;for(let S=0;S<=t;S++){const M=S/t;l[S]=this.getTangentAt(M,new q)}u[0]=new q,h[0]=new q;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(De(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,M))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(De(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let M=1;M<=t;M++)u[M].applyMatrix4(p.makeRotationAxis(l[M],S*M)),h[M].crossVectors(l[M],u[M])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ry extends Va{constructor(t=0,i=0,r=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new re){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=p-this.aX,S=m-this.aY;p=g*v-S*_+this.aX,m=g*_+S*v+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class AE extends ry{constructor(t,i,r,l,u,h){super(t,i,r,r,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Gm(){let o=0,t=0,i=0,r=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,r=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,m){l(h,d,m*(d-u),m*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,m,v,_){let g=(h-u)/m-(d-u)/(m+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+_)+(p-d)/_;g*=v,S*=v,l(h,d,g,S)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+r*d}}}const Gx=new q,Vx=new q,gp=new Gm,vp=new Gm,_p=new Gm;class sy extends Va{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new q){const r=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Vx.subVectors(l[0],l[1]).add(l[0]),m=Vx);const _=l[d%u],g=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Gx.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Gx),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(m.distanceToSquared(_),S),A=Math.pow(_.distanceToSquared(g),S),b=Math.pow(g.distanceToSquared(v),S);A<1e-4&&(A=1),M<1e-4&&(M=A),b<1e-4&&(b=A),gp.initNonuniformCatmullRom(m.x,_.x,g.x,v.x,M,A,b),vp.initNonuniformCatmullRom(m.y,_.y,g.y,v.y,M,A,b),_p.initNonuniformCatmullRom(m.z,_.z,g.z,v.z,M,A,b)}else this.curveType==="catmullrom"&&(gp.initCatmullRom(m.x,_.x,g.x,v.x,this.tension),vp.initCatmullRom(m.y,_.y,g.y,v.y,this.tension),_p.initCatmullRom(m.z,_.z,g.z,v.z,this.tension));return r.set(gp.calc(p),vp.calc(p),_p.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kx(o,t,i,r,l){const u=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+u+h)*p+(-3*i+3*r-2*u-h)*d+u*o+i}function RE(o,t){const i=1-o;return i*i*t}function wE(o,t){return 2*(1-o)*o*t}function CE(o,t){return o*o*t}function Ll(o,t,i,r){return RE(o,t)+wE(o,i)+CE(o,r)}function DE(o,t){const i=1-o;return i*i*i*t}function NE(o,t){const i=1-o;return 3*i*i*o*t}function UE(o,t){return 3*(1-o)*o*o*t}function LE(o,t){return o*o*o*t}function Ol(o,t,i,r,l){return DE(o,t)+NE(o,i)+UE(o,r)+LE(o,l)}class OE extends Va{constructor(t=new re,i=new re,r=new re,l=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new re){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Ol(t,l.x,u.x,h.x,d.x),Ol(t,l.y,u.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class PE extends Va{constructor(t=new q,i=new q,r=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new q){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Ol(t,l.x,u.x,h.x,d.x),Ol(t,l.y,u.y,h.y,d.y),Ol(t,l.z,u.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zE extends Va{constructor(t=new re,i=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new re){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new re){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class IE extends Va{constructor(t=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new q){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class BE extends Va{constructor(t=new re,i=new re,r=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new re){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ll(t,l.x,u.x,h.x),Ll(t,l.y,u.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oy extends Va{constructor(t=new q,i=new q,r=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new q){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ll(t,l.x,u.x,h.x),Ll(t,l.y,u.y,h.y),Ll(t,l.z,u.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class FE extends Va{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new re){const r=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return r.set(kx(d,p.x,m.x,v.x,_.x),kx(d,p.y,m.y,v.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new re().fromArray(l))}return this}}var HE=Object.freeze({__proto__:null,ArcCurve:AE,CatmullRomCurve3:sy,CubicBezierCurve:OE,CubicBezierCurve3:PE,EllipseCurve:ry,LineCurve:zE,LineCurve3:IE,QuadraticBezierCurve:BE,QuadraticBezierCurve3:oy,SplineCurve:FE});class bo extends kn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,_=t/d,g=i/p,S=[],M=[],A=[],b=[];for(let y=0;y<v;y++){const L=y*g-h;for(let I=0;I<m;I++){const C=I*_-u;M.push(C,-L,0),A.push(0,0,1),b.push(I/d),b.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<d;L++){const I=L+m*y,C=L+m*(y+1),U=L+1+m*(y+1),D=L+1+m*y;S.push(I,C,D),S.push(C,U,D)}this.setIndex(S),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vm extends kn{constructor(t=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let _=t;const g=(i-t)/l,S=new q,M=new re;for(let A=0;A<=l;A++){for(let b=0;b<=r;b++){const y=u+b/r*h;S.x=_*Math.cos(y),S.y=_*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),M.x=(S.x/i+1)/2,M.y=(S.y/i+1)/2,v.push(M.x,M.y)}_+=g}for(let A=0;A<l;A++){const b=A*(r+1);for(let y=0;y<r;y++){const L=y+b,I=L,C=L+r+1,U=L+r+2,D=L+1;d.push(I,C,D),d.push(C,U,D)}}this.setIndex(d),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class km extends kn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const v=[],_=new q,g=new q,S=[],M=[],A=[],b=[];for(let y=0;y<=r;y++){const L=[],I=y/r,C=h+I*d,U=t*Math.cos(C),D=Math.sqrt(t*t-U*U);let N=0;y===0&&h===0?N=.5/i:y===r&&p===Math.PI&&(N=-.5/i);for(let E=0;E<=i;E++){const O=E/i,z=l+O*u;_.x=-D*Math.cos(z),_.y=U,_.z=D*Math.sin(z),M.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),b.push(O+N,1-I),L.push(m++)}v.push(L)}for(let y=0;y<r;y++)for(let L=0;L<i;L++){const I=v[y][L+1],C=v[y][L],U=v[y+1][L],D=v[y+1][L+1];(y!==0||h>0)&&S.push(I,C,D),(y!==r-1||p<Math.PI)&&S.push(C,U,D)}this.setIndex(S),this.setAttribute("position",new Sn(M,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new km(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xm extends kn{constructor(t=new oy(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,r=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new q,p=new q,m=new re;let v=new q;const _=[],g=[],S=[],M=[];A(),this.setIndex(M),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(S,2));function A(){for(let I=0;I<i;I++)b(I);b(u===!1?i:0),L(),y()}function b(I){v=t.getPointAt(I/i,v);const C=h.normals[I],U=h.binormals[I];for(let D=0;D<=l;D++){const N=D/l*Math.PI*2,E=Math.sin(N),O=-Math.cos(N);p.x=O*C.x+E*U.x,p.y=O*C.y+E*U.y,p.z=O*C.z+E*U.z,p.normalize(),g.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,_.push(d.x,d.y,d.z)}}function y(){for(let I=1;I<=i;I++)for(let C=1;C<=l;C++){const U=(l+1)*(I-1)+(C-1),D=(l+1)*I+(C-1),N=(l+1)*I+C,E=(l+1)*(I-1)+C;M.push(U,D,E),M.push(D,N,E)}}function L(){for(let I=0;I<=i;I++)for(let C=0;C<=l;C++)m.x=I/i,m.y=C/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xm(new HE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Mo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(Xx(l))l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(Xx(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Zn(o){const t={};for(let i=0;i<o.length;i++){const r=Mo(o[i]);for(const l in r)t[l]=r[l]}return t}function Xx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function GE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ly(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const VE={clone:Mo,merge:Zn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=GE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Oe().setHex(l.value);break;case"v2":this.uniforms[r].value=new re().fromArray(l.value);break;case"v3":this.uniforms[r].value=new q().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new _e().fromArray(l.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class qE extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xp extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ym,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WE extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YE extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(qx(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!qx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function qx(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class KE{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=m.length;_<g;_+=2){const S=m[_],M=m[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZE=new KE;class qm{constructor(t){this.manager=t!==void 0?t:ZE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}qm.DEFAULT_MATERIAL_NAME="__DEFAULT";const ho=new WeakMap;class QE extends qm{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=Sp.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let _=ho.get(h);_===void 0&&(_=[],ho.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Hl("img");function p(){v(),i&&i(this);const _=ho.get(this)||[];for(let g=0;g<_.length;g++){const S=_[g];S.onLoad&&S.onLoad(this)}ho.delete(this),u.manager.itemEnd(t)}function m(_){v(),l&&l(_),Sp.remove(`image:${t}`);const g=ho.get(this)||[];for(let S=0;S<g.length;S++){const M=g[S];M.onError&&M.onError(_)}ho.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Sp.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class JE extends qm{constructor(t){super(t)}load(t,i,r,l){const u=new Vn,h=new QE(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class uy extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const yp=new rn,Wx=new q,Yx=new q;class jE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hm,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Wx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wx),Yx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Yx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,l){yp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(yp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Fl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(yp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ic=new q,Bc=new Ga,ua=new q;class cy extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ic,Bc,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Bc,ua.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Ic,Bc,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Bc,ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new q,Kx=new re,Zx=new re;class ki extends cy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mm*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,i){return this.getViewBounds(t,Kx,Zx),i.subVectors(Zx,Kx)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Vl extends cy{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $E extends jE{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tT extends uy{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new $E}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class eT extends uy{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const po=-90,mo=1;class nT extends Cn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ki(po,mo,t,i);l.layers=this.layers,this.add(l);const u=new ki(po,mo,t,i);u.layers=this.layers,this.add(u);const h=new ki(po,mo,t,i);h.layers=this.layers,this.add(h);const d=new ki(po,mo,t,i);d.layers=this.layers,this.add(d);const p=new ki(po,mo,t,i);p.layers=this.layers,this.add(p);const m=new ki(po,mo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,3,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,S),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class iT extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Jm=class Jm{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};Jm.prototype.isMatrix2=!0;let Qx=Jm;function Jx(o,t,i,r){const l=aT(r);switch(i){case WS:return o*t;case KS:return o*t/l.components*l.byteLength;case Lm:return o*t/l.components*l.byteLength;case hs:return o*t*2/l.components*l.byteLength;case Om:return o*t*2/l.components*l.byteLength;case YS:return o*t*3/l.components*l.byteLength;case qi:return o*t*4/l.components*l.byteLength;case Pm:return o*t*4/l.components*l.byteLength;case Xc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wc:case Yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wp:case Kp:return Math.max(o,16)*Math.max(t,8)/4;case qp:case Yp:return Math.max(o,8)*Math.max(t,8)/2;case Zp:case Qp:case jp:case $p:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jp:case tf:case tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case im:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case am:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case rm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case sm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case om:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case lm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case um:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case cm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case fm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case hm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case dm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case pm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case mm:case gm:case vm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case _m:case xm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ef:case Sm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aT(o){switch(o){case _i:case VS:return{byteLength:1,components:1};case Il:case kS:case ga:return{byteLength:2,components:1};case Nm:case Um:return{byteLength:2,components:4};case ma:case Dm:case ha:return{byteLength:4,components:1};case XS:case qS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);function fy(){let o=null,t=!1,i=null,r=null;function l(u,h){r=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function rT(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,_=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,v);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],A=_[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,_[g]=A)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const A=_[S];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
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
#endif`,lT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xT=`#ifdef USE_IRIDESCENCE
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
#endif`,ST=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,CT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,DT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NT=`vec3 transformedNormal = objectNormal;
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
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zT="gl_FragColor = linearToOutputTexel( gl_FragColor );",IT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YT=`#ifdef USE_GRADIENTMAP
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
}`,KT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,jT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,aA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rA=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gA=`#if defined( USE_POINTS_UV )
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
#endif`,vA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
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
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
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
#endif`,DA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,XA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,qA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,WA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,KA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZA=`#ifdef USE_SKINNING
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
#endif`,QA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
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
}`,d2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p2=`#define DISTANCE
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
}`,m2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`uniform float scale;
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
}`,x2=`uniform vec3 diffuse;
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
}`,S2=`#include <common>
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
}`,y2=`uniform vec3 diffuse;
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
}`,M2=`#define LAMBERT
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
}`,b2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,E2=`#define MATCAP
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
}`,T2=`#define MATCAP
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
}`,A2=`#define NORMAL
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
}`,R2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w2=`#define PHONG
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
}`,C2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,D2=`#define STANDARD
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
}`,N2=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,U2=`#define TOON
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
}`,L2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,O2=`uniform float size;
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
}`,P2=`uniform vec3 diffuse;
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
}`,z2=`#include <common>
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
}`,I2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,B2=`uniform float rotation;
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
}`,F2=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:lT,alphamap_pars_fragment:uT,alphatest_fragment:cT,alphatest_pars_fragment:fT,aomap_fragment:hT,aomap_pars_fragment:dT,batching_pars_vertex:pT,batching_vertex:mT,begin_vertex:gT,beginnormal_vertex:vT,bsdfs:_T,iridescence_fragment:xT,bumpmap_pars_fragment:ST,clipping_planes_fragment:yT,clipping_planes_pars_fragment:MT,clipping_planes_pars_vertex:bT,clipping_planes_vertex:ET,color_fragment:TT,color_pars_fragment:AT,color_pars_vertex:RT,color_vertex:wT,common:CT,cube_uv_reflection_fragment:DT,defaultnormal_vertex:NT,displacementmap_pars_vertex:UT,displacementmap_vertex:LT,emissivemap_fragment:OT,emissivemap_pars_fragment:PT,colorspace_fragment:zT,colorspace_pars_fragment:IT,envmap_fragment:BT,envmap_common_pars_fragment:FT,envmap_pars_fragment:HT,envmap_pars_vertex:GT,envmap_physical_pars_fragment:jT,envmap_vertex:VT,fog_vertex:kT,fog_pars_vertex:XT,fog_fragment:qT,fog_pars_fragment:WT,gradientmap_pars_fragment:YT,lightmap_pars_fragment:KT,lights_lambert_fragment:ZT,lights_lambert_pars_fragment:QT,lights_pars_begin:JT,lights_toon_fragment:$T,lights_toon_pars_fragment:tA,lights_phong_fragment:eA,lights_phong_pars_fragment:nA,lights_physical_fragment:iA,lights_physical_pars_fragment:aA,lights_fragment_begin:rA,lights_fragment_maps:sA,lights_fragment_end:oA,lightprobes_pars_fragment:lA,logdepthbuf_fragment:uA,logdepthbuf_pars_fragment:cA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:hA,map_fragment:dA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:vA,metalnessmap_pars_fragment:_A,morphinstance_vertex:xA,morphcolor_vertex:SA,morphnormal_vertex:yA,morphtarget_pars_vertex:MA,morphtarget_vertex:bA,normal_fragment_begin:EA,normal_fragment_maps:TA,normal_pars_fragment:AA,normal_pars_vertex:RA,normal_vertex:wA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:DA,clearcoat_normal_fragment_maps:NA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:LA,opaque_fragment:OA,packing:PA,premultiplied_alpha_fragment:zA,project_vertex:IA,dithering_fragment:BA,dithering_pars_fragment:FA,roughnessmap_fragment:HA,roughnessmap_pars_fragment:GA,shadowmap_pars_fragment:VA,shadowmap_pars_vertex:kA,shadowmap_vertex:XA,shadowmask_pars_fragment:qA,skinbase_vertex:WA,skinning_pars_vertex:YA,skinning_vertex:KA,skinnormal_vertex:ZA,specularmap_fragment:QA,specularmap_pars_fragment:JA,tonemapping_fragment:jA,tonemapping_pars_fragment:$A,transmission_fragment:t2,transmission_pars_fragment:e2,uv_pars_fragment:n2,uv_pars_vertex:i2,uv_vertex:a2,worldpos_vertex:r2,background_vert:s2,background_frag:o2,backgroundCube_vert:l2,backgroundCube_frag:u2,cube_vert:c2,cube_frag:f2,depth_vert:h2,depth_frag:d2,distance_vert:p2,distance_frag:m2,equirect_vert:g2,equirect_frag:v2,linedashed_vert:_2,linedashed_frag:x2,meshbasic_vert:S2,meshbasic_frag:y2,meshlambert_vert:M2,meshlambert_frag:b2,meshmatcap_vert:E2,meshmatcap_frag:T2,meshnormal_vert:A2,meshnormal_frag:R2,meshphong_vert:w2,meshphong_frag:C2,meshphysical_vert:D2,meshphysical_frag:N2,meshtoon_vert:U2,meshtoon_frag:L2,points_vert:O2,points_frag:P2,shadow_vert:z2,shadow_frag:I2,sprite_vert:B2,sprite_frag:F2},qt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},fa={basic:{uniforms:Zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Zn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Zn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Zn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Zn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Zn([qt.points,qt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Zn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Zn([qt.common,qt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Zn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Zn([qt.sprite,qt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Zn([qt.common,qt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Zn([qt.lights,qt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};fa.physical={uniforms:Zn([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Fc={r:0,b:0,g:0},H2=new rn,hy=new _e;hy.set(-1,0,0,0,1,0,0,0,1);function G2(o,t,i,r,l,u){const h=new Oe(0);let d=l===!0?0:1,p,m,v=null,_=0,g=null;function S(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const C=L.backgroundBlurriness>0;I=t.get(I,C)}return I}function M(L){let I=!1;const C=S(L);C===null?b(h,d):C&&C.isColor&&(b(C,1),I=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(L,I){const C=S(I);C&&(C.isCubeTexture||C.mapping===uf)?(m===void 0&&(m=new on(new Wl(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Mo(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(H2.makeRotationFromEuler(I.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(hy),m.material.toneMapped=Ie.getTransfer(C.colorSpace)!==Qe,(v!==C||_!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new on(new bo(2,2),new ln({name:"BackgroundMaterial",uniforms:Mo(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(C.colorSpace)!==Qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function b(L,I){L.getRGB(Fc,ly(o)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,I,u)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,I=1){h.set(L),d=I,b(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,b(h,d)},render:M,addToRenderList:A,dispose:y}}function V2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,h=!1;function d(H,tt,Z,j,J){let W=!1;const K=_(H,j,Z,tt);u!==K&&(u=K,m(u.object)),W=S(H,j,Z,J),W&&M(H,j,Z,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(H,tt,Z,j),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function p(){return o.createVertexArray()}function m(H){return o.bindVertexArray(H)}function v(H){return o.deleteVertexArray(H)}function _(H,tt,Z,j){const J=j.wireframe===!0;let W=r[tt.id];W===void 0&&(W={},r[tt.id]=W);const K=H.isInstancedMesh===!0?H.id:0;let ct=W[K];ct===void 0&&(ct={},W[K]=ct);let X=ct[Z.id];X===void 0&&(X={},ct[Z.id]=X);let at=X[J];return at===void 0&&(at=g(p()),X[J]=at),at}function g(H){const tt=[],Z=[],j=[];for(let J=0;J<i;J++)tt[J]=0,Z[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:Z,attributeDivisors:j,object:H,attributes:{},index:null}}function S(H,tt,Z,j){const J=u.attributes,W=tt.attributes;let K=0;const ct=Z.getAttributes();for(const X in ct)if(ct[X].location>=0){const _t=J[X];let Lt=W[X];if(Lt===void 0&&(X==="instanceMatrix"&&H.instanceMatrix&&(Lt=H.instanceMatrix),X==="instanceColor"&&H.instanceColor&&(Lt=H.instanceColor)),_t===void 0||_t.attribute!==Lt||Lt&&_t.data!==Lt.data)return!0;K++}return u.attributesNum!==K||u.index!==j}function M(H,tt,Z,j){const J={},W=tt.attributes;let K=0;const ct=Z.getAttributes();for(const X in ct)if(ct[X].location>=0){let _t=W[X];_t===void 0&&(X==="instanceMatrix"&&H.instanceMatrix&&(_t=H.instanceMatrix),X==="instanceColor"&&H.instanceColor&&(_t=H.instanceColor));const Lt={};Lt.attribute=_t,_t&&_t.data&&(Lt.data=_t.data),J[X]=Lt,K++}u.attributes=J,u.attributesNum=K,u.index=j}function A(){const H=u.newAttributes;for(let tt=0,Z=H.length;tt<Z;tt++)H[tt]=0}function b(H){y(H,0)}function y(H,tt){const Z=u.newAttributes,j=u.enabledAttributes,J=u.attributeDivisors;Z[H]=1,j[H]===0&&(o.enableVertexAttribArray(H),j[H]=1),J[H]!==tt&&(o.vertexAttribDivisor(H,tt),J[H]=tt)}function L(){const H=u.newAttributes,tt=u.enabledAttributes;for(let Z=0,j=tt.length;Z<j;Z++)tt[Z]!==H[Z]&&(o.disableVertexAttribArray(Z),tt[Z]=0)}function I(H,tt,Z,j,J,W,K){K===!0?o.vertexAttribIPointer(H,tt,Z,J,W):o.vertexAttribPointer(H,tt,Z,j,J,W)}function C(H,tt,Z,j){A();const J=j.attributes,W=Z.getAttributes(),K=tt.defaultAttributeValues;for(const ct in W){const X=W[ct];if(X.location>=0){let at=J[ct];if(at===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(at=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(at=H.instanceColor)),at!==void 0){const _t=at.normalized,Lt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;const F=Nt.buffer,ft=Nt.type,wt=Nt.bytesPerElement,V=ft===o.INT||ft===o.UNSIGNED_INT||at.gpuType===Dm;if(at.isInterleavedBufferAttribute){const pt=at.data,Et=pt.stride,Dt=at.offset;if(pt.isInstancedInterleavedBuffer){for(let mt=0;mt<X.locationSize;mt++)y(X.location+mt,pt.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let mt=0;mt<X.locationSize;mt++)b(X.location+mt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let mt=0;mt<X.locationSize;mt++)I(X.location+mt,Lt/X.locationSize,ft,_t,Et*wt,(Dt+Lt/X.locationSize*mt)*wt,V)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<X.locationSize;pt++)y(X.location+pt,at.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<X.locationSize;pt++)b(X.location+pt);o.bindBuffer(o.ARRAY_BUFFER,F);for(let pt=0;pt<X.locationSize;pt++)I(X.location+pt,Lt/X.locationSize,ft,_t,Lt*wt,Lt/X.locationSize*pt*wt,V)}}else if(K!==void 0){const _t=K[ct];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(X.location,_t);break;case 3:o.vertexAttrib3fv(X.location,_t);break;case 4:o.vertexAttrib4fv(X.location,_t);break;default:o.vertexAttrib1fv(X.location,_t)}}}}L()}function U(){O();for(const H in r){const tt=r[H];for(const Z in tt){const j=tt[Z];for(const J in j){const W=j[J];for(const K in W)v(W[K].object),delete W[K];delete j[J]}}delete r[H]}}function D(H){if(r[H.id]===void 0)return;const tt=r[H.id];for(const Z in tt){const j=tt[Z];for(const J in j){const W=j[J];for(const K in W)v(W[K].object),delete W[K];delete j[J]}}delete r[H.id]}function N(H){for(const tt in r){const Z=r[tt];for(const j in Z){const J=Z[j];if(J[H.id]===void 0)continue;const W=J[H.id];for(const K in W)v(W[K].object),delete W[K];delete J[H.id]}}}function E(H){for(const tt in r){const Z=r[tt],j=H.isInstancedMesh===!0?H.id:0,J=Z[j];if(J!==void 0){for(const W in J){const K=J[W];for(const ct in K)v(K[ct].object),delete K[ct];delete J[W]}delete Z[j],Object.keys(Z).length===0&&delete r[tt]}}}function O(){z(),h=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:b,disableUnusedAttributes:L}}function k2(o,t,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,v){v!==0&&(o.drawArraysInstanced(r,p,m,v),i.update(m,r,v))}function d(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let S=0;S<v;S++)g+=m[S];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function X2(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==qi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const E=N===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==_i&&N!==ha&&!E&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(ue("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:C,maxSamples:U,samples:D}}function q2(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Rr,d=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||l;return l=g,r=_.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,A=_.clipIntersection,b=_.clipShadows,y=o.get(_);if(!l||M===null||M.length===0||u&&!b)u?v(null):m();else{const L=u?0:r,I=L*4;let C=y.clippingState||null;p.value=C,C=v(M,g,I,S);for(let U=0;U!==I;++U)C[U]=i[U];y.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,g,S,M){const A=_!==null?_.length:0;let b=null;if(A!==0){if(b=p.value,M!==!0||b===null){const y=S+A*4,L=g.matrixWorldInverse;d.getNormalMatrix(L),(b===null||b.length<y)&&(b=new Float32Array(y));for(let I=0,C=S;I!==A;++I,C+=4)h.copy(_[I]).applyMatrix4(L,d),h.normal.toArray(b,C),b[C+3]=h.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,b}}const _o=4,W2=6,Y2=20,K2=256,Rl=new Vl,jx=new Oe;let Mp=null,bp=0,Ep=0,Tp=!1;const Z2=new q,ss=new q;class $x{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=Z2}=u;Mp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Mp,bp,Ep),this._renderer.xr.enabled=Tp,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===fs||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mp=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ga,format:qi,colorSpace:nf,depthBuffer:!1},l=tS(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tS(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Q2(u)),this._blurMaterial=j2(u,t,i),this._ggxMaterial=J2(u,t,i)}return l}_compileMaterial(t){const i=new on(new kn,t);this._renderer.compile(i,Rl)}_sceneToCubeUV(t,i,r,l,u){const p=new ki(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(jx),_.toneMapping=pa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new Wl,new ey({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,b=A.material;let y=!1;const L=t.background;L?L.isColor&&(b.color.copy(L),t.background=null,y=!0):(b.color.copy(jx),y=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[I],u.y,u.z)):C===1?(p.up.set(0,0,m[I]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[I],u.z)):(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[I]));const U=this._cubeSize;go(l,C*U,I>2?U:0,U,U),_.setRenderTarget(l),y&&_.render(A,p),_.render(t,p)}_.toneMapping=S,_.autoClear=g,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===fs||t.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eS());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;go(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Rl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=m*1.25,S=_*g,{_lodMax:M}=this,A=this._sizeLods[r],b=3*A*(r>M-_o?r-M+_o:0),y=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=M-i,go(u,b,y,3*A,2*A),l.setRenderTarget(u),l.render(d,Rl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=M-r,go(t,b,y,3*A,2*A),l.setRenderTarget(t),l.render(d,Rl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,h),this._blurPass(u,t,r,r,h)}_blurPass(t,i,r,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[l],_=3*v*(l>this._lodMax-_o?l-this._lodMax+_o:0),g=4*(this._cubeSize-v);go(i,_,g,3*v,2*v),h.setRenderTarget(i),h.render(p,Rl)}}function Q2(o){const t=[],i=[];let r=o;const l=o-_o+1+W2;for(let u=0;u<l;u++){const h=Math.pow(2,r);t.push(h);const d=1/(h-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,g=6,S=3,M=new Float32Array(S*g*_),A=new Float32Array(S*g*_);for(let y=0;y<_;y++){const L=y%3*2/3-1,I=y>2?0:-1,C=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];M.set(C,S*g*y);for(let U=0;U<g;U++){const D=v[U*2]*2-1,N=v[U*2+1]*2-1;y===0?ss.set(1,N,D):y===1?ss.set(-D,1,-N):y===2?ss.set(-D,N,1):y===3?ss.set(-1,N,-D):y===4?ss.set(-D,-1,N):ss.set(D,N,-1),ss.toArray(A,(y*g+U)*S)}}const b=new kn;b.setAttribute("position",new ai(M,S)),b.setAttribute("outputDirection",new ai(A,S)),i.push(new on(b,null)),r>_o&&r--}return{lodMeshes:i,sizeLods:t}}function tS(o,t,i){const r=new Ui(o,t,i);return r.texture.mapping=uf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function go(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function J2(o,t,i){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function j2(o,t,i){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Y2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function eS(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function nS(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class dy extends Ui{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new iy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wl(5,5,5),u=new ln({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:Wi});u.uniforms.tEquirect.value=i;const h=new on(l,u),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=Hn),new nT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}function $2(o){let t=new WeakMap,i=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?h(g):u(g)}function u(g){if(g&&g.isTexture){const S=g.mapping;if(S===kd||S===Xd)if(t.has(g)){const M=t.get(g).texture;return d(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new dy(M.height);return A.fromEquirectangularTexture(o,g),t.set(g,A),g.addEventListener("dispose",m),d(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const S=g.mapping,M=S===kd||S===Xd,A=S===fs||S===yo;if(M||A){let b=i.get(g);const y=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new $x(o)),b=M?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const L=g.image;return M&&L&&L.height>0||A&&L&&p(L)?(r===null&&(r=new $x(o)),b=M?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",v),b.texture):null}}}return g}function d(g,S){return S===kd?g.mapping=fs:S===Xd&&(g.mapping=yo),g}function p(g){let S=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&S++;return S===M}function m(g){const S=g.target;S.removeEventListener("dispose",m);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=i.get(S);M!==void 0&&(i.delete(S),M.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function t3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xo("WebGLRenderer: "+r+" extension not supported."),l}}}function e3(o,t,i,r){const l={},u=new WeakMap;function h(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",h),delete l[g.id];const S=u.get(g);S&&(t.remove(S),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(_,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(_){const g=_.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function m(_){const g=[],S=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const L=S.array;A=S.version;for(let I=0,C=L.length;I<C;I+=3){const U=L[I+0],D=L[I+1],N=L[I+2];g.push(U,D,D,N,N,U)}}else{const L=M.array;A=M.version;for(let I=0,C=L.length/3-1;I<C;I+=3){const U=I+0,D=I+1,N=I+2;g.push(U,D,D,N,N,U)}}const b=new(M.count>=65535?ty:$S)(g,1);b.version=A;const y=u.get(_);y&&t.remove(y),u.set(_,b)}function v(_){const g=u.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function n3(o,t,i){let r;function l(_){r=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,g){o.drawElements(r,g,u,_*h),i.update(g,r,1)}function m(_,g,S){S!==0&&(o.drawElementsInstanced(r,g,u,_*h,S),i.update(g,r,S))}function v(_,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,_,0,S);let A=0;for(let b=0;b<S;b++)A+=g[b];i.update(A,r,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function i3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ve("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function a3(o,t,i){const r=new WeakMap,l=new tn;function u(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let z=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var S=z;g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),b===!0&&(C=3);let U=d.attributes.position.count*C,D=1;U>t.maxTextureSize&&(D=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*D*4*_),E=new QS(N,U,D,_);E.type=ha,E.needsUpdate=!0;const O=C*4;for(let H=0;H<_;H++){const tt=y[H],Z=L[H],j=I[H],J=U*D*4*H;for(let W=0;W<tt.count;W++){const K=W*O;M===!0&&(l.fromBufferAttribute(tt,W),N[J+K+0]=l.x,N[J+K+1]=l.y,N[J+K+2]=l.z,N[J+K+3]=0),A===!0&&(l.fromBufferAttribute(Z,W),N[J+K+4]=l.x,N[J+K+5]=l.y,N[J+K+6]=l.z,N[J+K+7]=0),b===!0&&(l.fromBufferAttribute(j,W),N[J+K+8]=l.x,N[J+K+9]=l.y,N[J+K+10]=l.z,N[J+K+11]=j.itemSize===4?l.w:1)}}g={count:_,texture:E,size:new re(U,D)},r.set(d,g),d.addEventListener("dispose",z)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let M=0;for(let b=0;b<m.length;b++)M+=m[b];const A=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function r3(o,t,i,r,l){let u=new WeakMap;function h(m){const v=l.render.frame,_=m.geometry,g=t.get(m,_);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const S=m.skeleton;u.get(S)!==v&&(S.update(),u.set(S,v))}return g}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const s3={[PS]:"LINEAR_TONE_MAPPING",[zS]:"REINHARD_TONE_MAPPING",[IS]:"CINEON_TONE_MAPPING",[Cm]:"ACES_FILMIC_TONE_MAPPING",[FS]:"AGX_TONE_MAPPING",[HS]:"NEUTRAL_TONE_MAPPING",[BS]:"CUSTOM_TONE_MAPPING"};function o3(o,t,i,r,l,u){const h=new Ui(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new kn;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const v=new qE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new on(m,v),g=new Vl(-1,1,1,-1,0,1);let S=null,M=null,A=!1,b,y=null,L=[],I=!1;this.setSize=function(C,U){h.setSize(C,U),d!==null&&d.setSize(C,U),p!==null&&p.setSize(C,U);for(let D=0;D<L.length;D++){const N=L[D];N.setSize&&N.setSize(C,U)}},this.setEffects=function(C){L=C,I=L.length>0&&L[0].isRenderPass===!0;const U=h.width,D=h.height;L.length>0&&d===null&&(d=new Ui(U,D,{type:ga,depthBuffer:!1,stencilBuffer:!1}),p=new Ui(U,D,{type:ga,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<L.length;N++){const E=L[N];E.setSize&&E.setSize(U,D)}},this.begin=function(C,U){if(A||C.toneMapping===pa&&L.length===0)return!1;if(y=U,U!==null){const D=U.width,N=U.height;(h.width!==D||h.height!==N)&&this.setSize(D,N)}return I===!1&&C.setRenderTarget(h),b=C.toneMapping,C.toneMapping=pa,!0},this.hasRenderPass=function(){return I},this.end=function(C,U){C.toneMapping=b,A=!0;let D=h,N=d;for(let E=0;E<L.length;E++){const O=L[E];O.enabled!==!1&&(O.render(C,N,D,U),O.needsSwap!==!1&&(D=N,N=N===d?p:d))}if(S!==C.outputColorSpace||M!==C.toneMapping){S=C.outputColorSpace,M=C.toneMapping,v.defines={},Ie.getTransfer(S)===Qe&&(v.defines.SRGB_TRANSFER="");const E=s3[M];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(y),C.render(_,g),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const py=new Vn,Em=new Gl(1,1),my=new QS,gy=new aE,vy=new iy,iS=[],aS=[],rS=new Float32Array(16),sS=new Float32Array(9),oS=new Float32Array(4);function Eo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=iS[l];if(u===void 0&&(u=new Float32Array(l),iS[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function En(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function ff(o,t){let i=aS[t];i===void 0&&(i=new Int32Array(t),aS[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function l3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function u3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),En(i,t)}}function c3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),En(i,t)}}function f3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),En(i,t)}}function h3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;oS.set(r),o.uniformMatrix2fv(this.addr,!1,oS),En(i,r)}}function d3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;sS.set(r),o.uniformMatrix3fv(this.addr,!1,sS),En(i,r)}}function p3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;rS.set(r),o.uniformMatrix4fv(this.addr,!1,rS),En(i,r)}}function m3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function g3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),En(i,t)}}function v3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),En(i,t)}}function _3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),En(i,t)}}function x3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),En(i,t)}}function y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),En(i,t)}}function M3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),En(i,t)}}function b3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Em.compareFunction=i.isReversedDepthBuffer()?Im:zm,u=Em):u=py,i.setTexture2D(t||u,l)}function E3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||gy,l)}function T3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||vy,l)}function A3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||my,l)}function R3(o){switch(o){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return h3;case 35675:return d3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return g3;case 35668:case 35672:return v3;case 35669:case 35673:return _3;case 5125:return x3;case 36294:return S3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return b3;case 35679:case 36299:case 36307:return E3;case 35680:case 36300:case 36308:case 36293:return T3;case 36289:case 36303:case 36311:case 36292:return A3}}function w3(o,t){o.uniform1fv(this.addr,t)}function C3(o,t){const i=Eo(t,this.size,2);o.uniform2fv(this.addr,i)}function D3(o,t){const i=Eo(t,this.size,3);o.uniform3fv(this.addr,i)}function N3(o,t){const i=Eo(t,this.size,4);o.uniform4fv(this.addr,i)}function U3(o,t){const i=Eo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function L3(o,t){const i=Eo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function O3(o,t){const i=Eo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function P3(o,t){o.uniform1iv(this.addr,t)}function z3(o,t){o.uniform2iv(this.addr,t)}function I3(o,t){o.uniform3iv(this.addr,t)}function B3(o,t){o.uniform4iv(this.addr,t)}function F3(o,t){o.uniform1uiv(this.addr,t)}function H3(o,t){o.uniform2uiv(this.addr,t)}function G3(o,t){o.uniform3uiv(this.addr,t)}function V3(o,t){o.uniform4uiv(this.addr,t)}function k3(o,t,i){const r=this.cache,l=t.length,u=ff(i,l);bn(r,u)||(o.uniform1iv(this.addr,u),En(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Em:h=py;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function X3(o,t,i){const r=this.cache,l=t.length,u=ff(i,l);bn(r,u)||(o.uniform1iv(this.addr,u),En(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||gy,u[h])}function q3(o,t,i){const r=this.cache,l=t.length,u=ff(i,l);bn(r,u)||(o.uniform1iv(this.addr,u),En(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||vy,u[h])}function W3(o,t,i){const r=this.cache,l=t.length,u=ff(i,l);bn(r,u)||(o.uniform1iv(this.addr,u),En(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||my,u[h])}function Y3(o){switch(o){case 5126:return w3;case 35664:return C3;case 35665:return D3;case 35666:return N3;case 35674:return U3;case 35675:return L3;case 35676:return O3;case 5124:case 35670:return P3;case 35667:case 35671:return z3;case 35668:case 35672:return I3;case 35669:case 35673:return B3;case 5125:return F3;case 36294:return H3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return k3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return q3;case 36289:case 36303:case 36311:case 36292:return W3}}class K3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=R3(i.type)}}class Z3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Y3(i.type)}}class Q3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Ap=/(\w+)(\])?(\[|\.)?/g;function lS(o,t){o.seq.push(t),o.map[t.id]=t}function J3(o,t,i){const r=o.name,l=r.length;for(Ap.lastIndex=0;;){const u=Ap.exec(r),h=Ap.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){lS(i,m===void 0?new K3(d,o,t):new Z3(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new Q3(d),lS(i,_)),i=_}}}class Kc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);J3(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function uS(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const j3=37297;let $3=0;function tR(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const cS=new _e;function eR(o){Ie._getMatrix(cS,Ie.workingColorSpace,o);const t=`mat3( ${cS.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case af:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function fS(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+tR(o.getShaderSource(t),d)}else return u}function nR(o,t){const i=eR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const iR={[PS]:"Linear",[zS]:"Reinhard",[IS]:"Cineon",[Cm]:"ACESFilmic",[FS]:"AgX",[HS]:"Neutral",[BS]:"Custom"};function aR(o,t){const i=iR[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new q;function rR(){Ie.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function oR(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lR(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Nl(o){return o!==""}function hS(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tm(o){return o.replace(uR,fR)}const cR=new Map;function fR(o,t){let i=ye[t];if(i===void 0){const r=cR.get(t);if(r!==void 0)i=ye[r],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tm(i)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pS(o){return o.replace(hR,dR)}function dR(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function mS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const pR={[kc]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function mR(o){return pR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gR={[fs]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[uf]:"ENVMAP_TYPE_CUBE_UV"};function vR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":gR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _R={[yo]:"ENVMAP_MODE_REFRACTION"};function xR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_R[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SR={[OS]:"ENVMAP_BLENDING_MULTIPLY",[Pb]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function yR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":SR[o.combine]||"ENVMAP_BLENDING_NONE"}function MR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function bR(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=mR(i),m=vR(i),v=xR(i),_=yR(i),g=MR(i),S=sR(i),M=oR(u),A=l.createProgram();let b,y,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Nl).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Nl).join(`
`),y.length>0&&(y+=`
`)):(b=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),y=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pa?"#define TONE_MAPPING":"",i.toneMapping!==pa?ye.tonemapping_pars_fragment:"",i.toneMapping!==pa?aR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,nR("linearToOutputTexel",i.outputColorSpace),rR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),h=Tm(h),h=hS(h,i),h=dS(h,i),d=Tm(d),d=hS(d,i),d=dS(d,i),h=pS(h),d=pS(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=L+b+h,C=L+y+d,U=uS(l,l.VERTEX_SHADER,I),D=uS(l,l.FRAGMENT_SHADER,C);l.attachShader(A,U),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function N(H){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",Z=l.getShaderInfoLog(U)||"",j=l.getShaderInfoLog(D)||"",J=tt.trim(),W=Z.trim(),K=j.trim();let ct=!0,X=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,U,D);else{const at=fS(l,U,"vertex"),_t=fS(l,D,"fragment");Ve("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+at+`
`+_t)}else J!==""?ue("WebGLProgram: Program Info Log:",J):(W===""||K==="")&&(X=!1);X&&(H.diagnostics={runnable:ct,programLog:J,vertexShader:{log:W,prefix:b},fragmentShader:{log:K,prefix:y}})}l.deleteShader(U),l.deleteShader(D),E=new Kc(l,A),O=lR(l,A)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let O;this.getAttributes=function(){return O===void 0&&N(this),O};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(A,j3)),z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$3++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=D,this}let ER=0;class TR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new AR(t),i.set(t,r)),r}}class AR{constructor(t){this.id=ER++,this.code=t,this.usedTimes=0}}function RR(o){return o===hs||o===tf||o===ef}function wR(o,t,i,r,l,u){const h=new JS,d=new TR,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return p.add(E),E===0?"uv":`uv${E}`}function A(E,O,z,H,tt,Z){const j=H.fog,J=tt.geometry,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ct=t.get(E.envMap||W,K),X=ct&&ct.mapping===uf?ct.image.height:null,at=S[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ue("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=_t!==void 0?_t.length:0;let Nt=0;J.morphAttributes.position!==void 0&&(Nt=1),J.morphAttributes.normal!==void 0&&(Nt=2),J.morphAttributes.color!==void 0&&(Nt=3);let F,ft,wt,V;if(at){const Pe=fa[at];F=Pe.vertexShader,ft=Pe.fragmentShader}else{F=E.vertexShader,ft=E.fragmentShader;const Pe=d.getVertexShaderStage(E),ge=d.getFragmentShaderStage(E);d.update(E,Pe,ge),wt=Pe.id,V=ge.id}const pt=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Dt=tt.isInstancedMesh===!0,mt=tt.isBatchedMesh===!0,Ut=!!E.map,Be=!!E.matcap,fe=!!ct,bt=!!E.aoMap,Ct=!!E.lightMap,At=!!E.bumpMap&&E.wireframe===!1,$t=!!E.normalMap,pe=!!E.displacementMap,Me=!!E.emissiveMap,le=!!E.metalnessMap,Ae=!!E.roughnessMap,Y=E.anisotropy>0,Ge=E.clearcoat>0,me=E.dispersion>0,P=E.retroreflectivity>0,T=E.iridescence>0,it=E.sheen>0,rt=E.transmission>0,gt=Y&&!!E.anisotropyMap,Tt=Ge&&!!E.clearcoatMap,Ot=Ge&&!!E.clearcoatNormalMap,vt=Ge&&!!E.clearcoatRoughnessMap,xt=T&&!!E.iridescenceMap,Pt=T&&!!E.iridescenceThicknessMap,ne=it&&!!E.sheenColorMap,Bt=it&&!!E.sheenRoughnessMap,It=!!E.specularMap,Kt=!!E.specularColorMap,se=!!E.specularIntensityMap,de=rt&&!!E.transmissionMap,Q=rt&&!!E.thicknessMap,zt=!!E.gradientMap,Mt=!!E.alphaMap,Ft=E.alphaTest>0,Yt=!!E.alphaHash,Rt=!!E.extensions;let ie=pa;E.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Wt={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:ft,defines:E.defines,customVertexShaderID:wt,customFragmentShaderID:V,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:mt,batchingColor:mt&&tt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&tt.instanceColor!==null,instancingMorph:Dt&&tt.morphTexture!==null,outputColorSpace:pt===null?o.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ut,matcap:Be,envMap:fe,envMapMode:fe&&ct.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:Ct,bumpMap:At,normalMap:$t,displacementMap:pe,emissiveMap:Me,normalMapObjectSpace:$t&&E.normalMapType===Fb,normalMapTangentSpace:$t&&E.normalMapType===ym,packedNormalMap:$t&&E.normalMapType===ym&&RR(E.normalMap.format),metalnessMap:le,roughnessMap:Ae,anisotropy:Y,anisotropyMap:gt,clearcoat:Ge,clearcoatMap:Tt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:vt,dispersion:me,retroreflection:P,iridescence:T,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:it,sheenColorMap:ne,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:Kt,specularIntensityMap:se,transmission:rt,transmissionMap:de,thicknessMap:Q,gradientMap:zt,opaque:E.transparent===!1&&E.blending===Ul&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Ft,alphaHash:Yt,combine:E.combine,mapUv:Ut&&M(E.map.channel),aoMapUv:bt&&M(E.aoMap.channel),lightMapUv:Ct&&M(E.lightMap.channel),bumpMapUv:At&&M(E.bumpMap.channel),normalMapUv:$t&&M(E.normalMap.channel),displacementMapUv:pe&&M(E.displacementMap.channel),emissiveMapUv:Me&&M(E.emissiveMap.channel),metalnessMapUv:le&&M(E.metalnessMap.channel),roughnessMapUv:Ae&&M(E.roughnessMap.channel),anisotropyMapUv:gt&&M(E.anisotropyMap.channel),clearcoatMapUv:Tt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&M(E.sheenRoughnessMap.channel),specularMapUv:It&&M(E.specularMap.channel),specularColorMapUv:Kt&&M(E.specularColorMap.channel),specularIntensityMapUv:se&&M(E.specularIntensityMap.channel),transmissionMapUv:de&&M(E.transmissionMap.channel),thicknessMapUv:Q&&M(E.thicknessMap.channel),alphaMapUv:Mt&&M(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&($t||Y),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!J.attributes.uv&&(Ut||Mt),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&$t===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Et,skinning:tt.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Nt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:Ut&&E.map.isVideoTexture===!0&&Ie.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ni,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Rt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&E.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Wt.vertexUv1s=p.has(1),Wt.vertexUv2s=p.has(2),Wt.vertexUv3s=p.has(3),p.clear(),Wt}function b(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)O.push(z),O.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(y(O,E),L(O,E),O.push(o.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function y(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function L(E,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.retroreflection&&h.enable(24),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function I(E){const O=S[E.type];let z;if(O){const H=fa[O];z=VE.clone(H.uniforms)}else z=E.uniforms;return z}function C(E,O){let z=v.get(O);return z!==void 0?++z.usedTimes:(z=new bR(o,O,E,l),m.push(z),v.set(O,z)),z}function U(E){if(--E.usedTimes===0){const O=m.indexOf(E);m[O]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function D(E){d.remove(E)}function N(){d.dispose()}return{getParameters:A,getProgramCacheKey:b,getUniforms:I,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:N}}function CR(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function DR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function gS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function vS(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,M,A,b,y){let L=o[t];return L===void 0?(L={id:g.id,object:g,geometry:S,material:M,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:b,group:y},o[t]=L):(L.id=g.id,L.object=g,L.geometry=S,L.material=M,L.materialVariant=h(g),L.groupOrder=A,L.renderOrder=g.renderOrder,L.z=b,L.group=y),t++,L}function p(g,S,M,A,b,y,L){L.reversedDepth===!0&&(b=-b);const I=d(g,S,M,A,b,y);M.transmission>0?r.push(I):M.transparent===!0?l.push(I):i.push(I)}function m(g,S,M,A,b,y){const L=d(g,S,M,A,b,y);M.transmission>0?r.unshift(L):M.transparent===!0?l.unshift(L):i.unshift(L)}function v(g,S){i.length>1&&i.sort(g||DR),r.length>1&&r.sort(S||gS),l.length>1&&l.sort(S||gS)}function _(){for(let g=t,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:v}}function NR(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new vS,o.set(r,[h])):l>=u.length?(h=new vS,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function UR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new q,color:new Oe};break;case"SpotLight":i={position:new q,direction:new q,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new q,halfWidth:new q,halfHeight:new q};break}return o[t.id]=i,i}}}function LR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let OR=0;function PR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zR(o){const t=new UR,i=LR(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const l=new q,u=new rn,h=new rn;function d(m){let v=0,_=0,g=0;for(let tt=0;tt<9;tt++)r.probe[tt].set(0,0,0);let S=0,M=0,A=0,b=0,y=0,L=0,I=0,C=0,U=0,D=0,N=0,E=0,O=0,z=0;m.sort(PR);for(let tt=0,Z=m.length;tt<Z;tt++){const j=m[tt],J=j.color,W=j.intensity,K=j.distance;let ct=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===hs?ct=j.shadow.map.texture:ct=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=J.r*W,_+=J.g*W,g+=J.b*W;else if(j.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(j.sh.coefficients[X],W);z++}else if(j.isSunLight){const X=t.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const at=j.shadow,_t=i.get(j);_t.shadowIntensity=at.intensity,_t.shadowBias=at.bias,_t.shadowNormalBias=at.normalBias,_t.shadowRadius=at.radius,_t.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),r.sunShadow[M]=_t,r.sunShadowMap[M]=ct;const Lt=at.getViewportCount();for(let Nt=0;Nt<Lt;Nt++)r.sunShadowMatrix[A+Nt]=at.getMatrix(Nt),r.sunShadowCascade[A+Nt]=at._cascadeData[Nt];A+=Lt,M++}r.sun[S]=X,S++}else if(j.isDirectionalLight){const X=t.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const at=j.shadow,_t=i.get(j);_t.shadowIntensity=at.intensity,_t.shadowBias=at.bias,_t.shadowNormalBias=at.normalBias,_t.shadowRadius=at.radius,_t.shadowMapSize=at.mapSize,r.directionalShadow[b]=_t,r.directionalShadowMap[b]=ct,r.directionalShadowMatrix[b]=j.shadow.matrix,U++}r.directional[b]=X,b++}else if(j.isSpotLight){const X=t.get(j);X.position.setFromMatrixPosition(j.matrixWorld),X.color.copy(J).multiplyScalar(W),X.distance=K,X.coneCos=Math.cos(j.angle),X.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),X.decay=j.decay,r.spot[L]=X;const at=j.shadow;if(j.map&&(r.spotLightMap[E]=j.map,E++,at.updateMatrices(j),j.castShadow&&O++),r.spotLightMatrix[L]=at.matrix,j.castShadow){const _t=i.get(j);_t.shadowIntensity=at.intensity,_t.shadowBias=at.bias,_t.shadowNormalBias=at.normalBias,_t.shadowRadius=at.radius,_t.shadowMapSize=at.mapSize,r.spotShadow[L]=_t,r.spotShadowMap[L]=ct,N++}L++}else if(j.isRectAreaLight){const X=t.get(j);X.color.copy(J).multiplyScalar(W),X.halfWidth.set(j.width*.5,0,0),X.halfHeight.set(0,j.height*.5,0),r.rectArea[I]=X,I++}else if(j.isPointLight){const X=t.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),X.distance=j.distance,X.decay=j.decay,j.castShadow){const at=j.shadow,_t=i.get(j);_t.shadowIntensity=at.intensity,_t.shadowBias=at.bias,_t.shadowNormalBias=at.normalBias,_t.shadowRadius=at.radius,_t.shadowMapSize=at.mapSize,_t.shadowCameraNear=at.camera.near,_t.shadowCameraFar=at.camera.far,r.pointShadow[y]=_t,r.pointShadowMap[y]=ct,r.pointShadowMatrix[y]=j.shadow.matrix,D++}r.point[y]=X,y++}else if(j.isHemisphereLight){const X=t.get(j);X.skyColor.copy(j.color).multiplyScalar(W),X.groundColor.copy(j.groundColor).multiplyScalar(W),r.hemi[C]=X,C++}}I>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qt.LTC_FLOAT_1,r.rectAreaLTC2=qt.LTC_FLOAT_2):(r.rectAreaLTC1=qt.LTC_HALF_1,r.rectAreaLTC2=qt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const H=r.hash;(H.sunLength!==S||H.directionalLength!==b||H.pointLength!==y||H.spotLength!==L||H.rectAreaLength!==I||H.hemiLength!==C||H.numSunShadows!==M||H.numDirectionalShadows!==U||H.numPointShadows!==D||H.numSpotShadows!==N||H.numSpotMaps!==E||H.numLightProbes!==z)&&(r.sun.length=S,r.directional.length=b,r.spot.length=L,r.rectArea.length=I,r.point.length=y,r.hemi.length=C,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.spotLightMatrix.length=N+E-O,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,H.sunLength=S,H.directionalLength=b,H.pointLength=y,H.spotLength=L,H.rectAreaLength=I,H.hemiLength=C,H.numSunShadows=M,H.numDirectionalShadows=U,H.numPointShadows=D,H.numSpotShadows=N,H.numSpotMaps=E,H.numLightProbes=z,r.version=OR++)}function p(m,v){let _=0,g=0,S=0,M=0,A=0,b=0;const y=v.matrixWorldInverse;for(let L=0,I=m.length;L<I;L++){const C=m[L];if(C.isSunLight){const U=r.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),_++}else if(C.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(C.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(C.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(C.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(C.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),S++}else if(C.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:d,setupView:p,state:r}}function _S(o){const t=new zR(o),i=[],r=[],l=[];function u(g){_.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function d(g){r.push(g)}function p(g){l.push(g)}function m(){t.setup(i)}function v(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function IR(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new _S(o),t.set(l,[d])):u>=h.length?(d=new _S(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const BR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HR=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],GR=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],xS=new rn,wl=new q,Rp=new q;function VR(o,t,i){let r=new Hm;const l=new re,u=new re,h=new tn,d=new WE,p=new YE,m={},v=i.maxTextureSize,_={[cs]:ri,[ri]:cs,[Ni]:Ni},g=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:BR,fragmentShader:FR}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new on(M,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let y=this.type;this.render=function(D,N,E){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===_b&&(ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kc);const O=o.getRenderTarget(),z=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Wi),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const Z=y!==this.type;Z&&N.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(J=>J.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,J=D.length;j<J;j++){const W=D[j],K=W.shadow;if(K===void 0){ue("WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const ct=K.getFrameExtents();l.multiply(ct),u.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ct.x),l.x=u.x*ct.x,K.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ct.y),l.y=u.y*ct.y,K.mapSize.y=u.y));const X=o.state.buffers.depth.getReversed();if(K.camera._reversedDepth=X,K.map===null||Z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Dl){if(W.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ui(l.x,l.y,{format:hs,type:ga,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),K.map.texture.name=W.name+".shadowMap",K.map.depthTexture=new Gl(l.x,l.y,ha),K.map.depthTexture.name=W.name+".shadowMapDepth",K.map.depthTexture.format=Ha,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=zn,K.map.depthTexture.magFilter=zn}else W.isPointLight?(K.map=new dy(l.x),K.map.depthTexture=new TE(l.x,ma)):(K.map=new Ui(l.x,l.y),K.map.depthTexture=new Gl(l.x,l.y,ma)),K.map.depthTexture.name=W.name+".shadowMap",K.map.depthTexture.format=Ha,this.type===kc?(K.map.depthTexture.compareFunction=X?Im:zm,K.map.depthTexture.minFilter=Hn,K.map.depthTexture.magFilter=Hn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=zn,K.map.depthTexture.magFilter=zn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==l.x||K.map.height!==l.y)&&K.map.setSize(l.x,l.y);const at=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();W.isPointLight!==!0&&K.updateMatrices(W,E);for(let _t=0;_t<at;_t++){const Lt=K.getCamera(_t);if(W.isPointLight){const Nt=K.camera,F=K.matrix,ft=W.distance||Nt.far;ft!==Nt.far&&(Nt.far=ft,Nt.updateProjectionMatrix()),wl.setFromMatrixPosition(W.matrixWorld),Nt.position.copy(wl),Rp.copy(Nt.position),Rp.add(HR[_t]),Nt.up.copy(GR[_t]),Nt.lookAt(Rp),Nt.updateMatrixWorld(),F.makeTranslation(-wl.x,-wl.y,-wl.z),xS.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(xS,Nt.coordinateSystem,Nt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)o.setRenderTarget(K.map,_t),o.clear();else{_t===0&&(o.setRenderTarget(K.map),o.clear());const Nt=K.getViewport(_t);h.set(u.x*Nt.x,u.y*Nt.y,u.x*Nt.z,u.y*Nt.w),tt.viewport(h)}r=K.getFrustum(_t),C(N,E,Lt,W,this.type)}K.isPointLightShadow!==!0&&this.type===Dl&&L(K,E),K.needsUpdate=!1}y=this.type,b.needsUpdate=!1,o.setRenderTarget(O,z,H)};function L(D,N){const E=t.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ui(l.x,l.y,{format:hs,type:ga}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(N,null,E,g,A,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value.set(D.map.width,D.map.height),S.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(N,null,E,S,A,null)}function I(D,N,E,O){let z=null;const H=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)z=H;else if(z=E.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const tt=z.uuid,Z=N.uuid;let j=m[tt];j===void 0&&(j={},m[tt]=j);let J=j[Z];J===void 0&&(J=z.clone(),j[Z]=J,N.addEventListener("dispose",U)),z=J}if(z.visible=N.visible,z.wireframe=N.wireframe,O===Dl?z.side=N.shadowSide!==null?N.shadowSide:N.side:z.side=N.shadowSide!==null?N.shadowSide:_[N.side],z.alphaMap=N.alphaMap,z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,z.map=N.map,z.clipShadows=N.clipShadows,z.clippingPlanes=N.clippingPlanes,z.clipIntersection=N.clipIntersection,z.displacementMap=N.displacementMap,z.displacementScale=N.displacementScale,z.displacementBias=N.displacementBias,z.wireframeLinewidth=N.wireframeLinewidth,z.linewidth=N.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const tt=o.properties.get(z);tt.light=E}return z}function C(D,N,E,O,z){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&z===Dl)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const Z=t.update(D),j=D.material;if(Array.isArray(j)){const J=Z.groups;for(let W=0,K=J.length;W<K;W++){const ct=J[W],X=j[ct.materialIndex];if(X&&X.visible){const at=I(D,X,O,z);D.onBeforeShadow(o,D,N,E,Z,at,ct),o.renderBufferDirect(E,null,Z,at,D,ct),D.onAfterShadow(o,D,N,E,Z,at,ct)}}}else if(j.visible){const J=I(D,j,O,z);D.onBeforeShadow(o,D,N,E,Z,J,null),o.renderBufferDirect(E,null,Z,J,D,null),D.onAfterShadow(o,D,N,E,Z,J,null)}}const tt=D.children;for(let Z=0,j=tt.length;Z<j;Z++)C(tt[Z],N,E,O,z)}function U(D){D.target.removeEventListener("dispose",U);for(const E in m){const O=m[E],z=D.target.uuid;z in O&&(O[z].dispose(),delete O[z])}}}function kR(o,t){function i(){let Q=!1;const zt=new tn;let Mt=null;const Ft=new tn(0,0,0,0);return{setMask:function(Yt){Mt!==Yt&&!Q&&(o.colorMask(Yt,Yt,Yt,Yt),Mt=Yt)},setLocked:function(Yt){Q=Yt},setClear:function(Yt,Rt,ie,Wt,Pe){Pe===!0&&(Yt*=Wt,Rt*=Wt,ie*=Wt),zt.set(Yt,Rt,ie,Wt),Ft.equals(zt)===!1&&(o.clearColor(Yt,Rt,ie,Wt),Ft.copy(zt))},reset:function(){Q=!1,Mt=null,Ft.set(-1,0,0,0)}}}function r(){let Q=!1,zt=!1,Mt=null,Ft=null,Yt=null;return{setReversed:function(Rt){if(zt!==Rt){const ie=t.get("EXT_clip_control");Rt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),zt=Rt;const Wt=Yt;Yt=null,this.setClear(Wt)}},getReversed:function(){return zt},setTest:function(Rt){Rt?pt(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(Rt){Mt!==Rt&&!Q&&(o.depthMask(Rt),Mt=Rt)},setFunc:function(Rt){if(zt&&(Rt=Jb[Rt]),Ft!==Rt){switch(Rt){case zp:o.depthFunc(o.NEVER);break;case Ip:o.depthFunc(o.ALWAYS);break;case Bp:o.depthFunc(o.LESS);break;case zl:o.depthFunc(o.LEQUAL);break;case Fp:o.depthFunc(o.EQUAL);break;case Hp:o.depthFunc(o.GEQUAL);break;case Gp:o.depthFunc(o.GREATER);break;case Vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=Rt}},setLocked:function(Rt){Q=Rt},setClear:function(Rt){Yt!==Rt&&(Yt=Rt,zt&&(Rt=1-Rt),o.clearDepth(Rt))},reset:function(){Q=!1,Mt=null,Ft=null,Yt=null,zt=!1}}}function l(){let Q=!1,zt=null,Mt=null,Ft=null,Yt=null,Rt=null,ie=null,Wt=null,Pe=null;return{setTest:function(ge){Q||(ge?pt(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(ge){zt!==ge&&!Q&&(o.stencilMask(ge),zt=ge)},setFunc:function(ge,si,xi){(Mt!==ge||Ft!==si||Yt!==xi)&&(o.stencilFunc(ge,si,xi),Mt=ge,Ft=si,Yt=xi)},setOp:function(ge,si,xi){(Rt!==ge||ie!==si||Wt!==xi)&&(o.stencilOp(ge,si,xi),Rt=ge,ie=si,Wt=xi)},setLocked:function(ge){Q=ge},setClear:function(ge){Pe!==ge&&(o.clearStencil(ge),Pe=ge)},reset:function(){Q=!1,zt=null,Mt=null,Ft=null,Yt=null,Rt=null,ie=null,Wt=null,Pe=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},_={},g={},S=new WeakMap,M=[],A=null,b=!1,y=null,L=null,I=null,C=null,U=null,D=null,N=null,E=new Oe(0,0,0),O=0,z=!1,H=null,tt=null,Z=null,j=null,J=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ct=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=ct>=1):X.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=ct>=2);let at=null,_t={};const Lt=o.getParameter(o.SCISSOR_BOX),Nt=o.getParameter(o.VIEWPORT),F=new tn().fromArray(Lt),ft=new tn().fromArray(Nt);function wt(Q,zt,Mt,Ft){const Yt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(Q,Rt),o.texParameteri(Q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<Mt;ie++)Q===o.TEXTURE_3D||Q===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Yt):o.texImage2D(zt+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Yt);return Rt}const V={};V[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),V[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),V[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),pt(o.DEPTH_TEST),h.setFunc(zl),At(!1),$t(dx),pt(o.CULL_FACE),bt(Wi);function pt(Q){v[Q]!==!0&&(o.enable(Q),v[Q]=!0)}function Et(Q){v[Q]!==!1&&(o.disable(Q),v[Q]=!1)}function Dt(Q,zt){return g[Q]!==zt?(o.bindFramebuffer(Q,zt),g[Q]=zt,Q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=zt),Q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function mt(Q,zt){let Mt=M,Ft=!1;if(Q){Mt=S.get(zt),Mt===void 0&&(Mt=[],S.set(zt,Mt));const Yt=Q.textures;if(Mt.length!==Yt.length||Mt[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,ie=Yt.length;Rt<ie;Rt++)Mt[Rt]=o.COLOR_ATTACHMENT0+Rt;Mt.length=Yt.length,Ft=!0}}else Mt[0]!==o.BACK&&(Mt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Mt)}function Ut(Q){return A!==Q?(o.useProgram(Q),A=Q,!0):!1}const Be={[os]:o.FUNC_ADD,[xb]:o.FUNC_SUBTRACT,[Sb]:o.FUNC_REVERSE_SUBTRACT};Be[yb]=o.MIN,Be[Mb]=o.MAX;const fe={[bb]:o.ZERO,[Pp]:o.ONE,[Eb]:o.SRC_COLOR,[LS]:o.SRC_ALPHA,[Db]:o.SRC_ALPHA_SATURATE,[wb]:o.DST_COLOR,[Ab]:o.DST_ALPHA,[Tb]:o.ONE_MINUS_SRC_COLOR,[$c]:o.ONE_MINUS_SRC_ALPHA,[Cb]:o.ONE_MINUS_DST_COLOR,[Rb]:o.ONE_MINUS_DST_ALPHA,[Nb]:o.CONSTANT_COLOR,[Ub]:o.ONE_MINUS_CONSTANT_COLOR,[Lb]:o.CONSTANT_ALPHA,[Ob]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(Q,zt,Mt,Ft,Yt,Rt,ie,Wt,Pe,ge){if(Q===Wi){b===!0&&(Et(o.BLEND),b=!1);return}if(b===!1&&(pt(o.BLEND),b=!0),Q!==US){if(Q!==y||ge!==z){if((L!==os||U!==os)&&(o.blendEquation(o.FUNC_ADD),L=os,U=os),ge)switch(Q){case Ul:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case px:o.blendFunc(o.ONE,o.ONE);break;case mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ve("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ul:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case px:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mx:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gx:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",Q);break}I=null,C=null,D=null,N=null,E.set(0,0,0),O=0,y=Q,z=ge}return}Yt=Yt||zt,Rt=Rt||Mt,ie=ie||Ft,(zt!==L||Yt!==U)&&(o.blendEquationSeparate(Be[zt],Be[Yt]),L=zt,U=Yt),(Mt!==I||Ft!==C||Rt!==D||ie!==N)&&(o.blendFuncSeparate(fe[Mt],fe[Ft],fe[Rt],fe[ie]),I=Mt,C=Ft,D=Rt,N=ie),(Wt.equals(E)===!1||Pe!==O)&&(o.blendColor(Wt.r,Wt.g,Wt.b,Pe),E.copy(Wt),O=Pe),y=Q,z=!1}function Ct(Q,zt){Q.side===Ni?Et(o.CULL_FACE):pt(o.CULL_FACE);let Mt=Q.side===ri;zt&&(Mt=!Mt),At(Mt),Q.blending===Ul&&Q.transparent===!1?bt(Wi):bt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),h.setFunc(Q.depthFunc),h.setTest(Q.depthTest),h.setMask(Q.depthWrite),u.setMask(Q.colorWrite);const Ft=Q.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Me(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?pt(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function At(Q){H!==Q&&(Q?o.frontFace(o.CW):o.frontFace(o.CCW),H=Q)}function $t(Q){Q!==gb?(pt(o.CULL_FACE),Q!==tt&&(Q===dx?o.cullFace(o.BACK):Q===vb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),tt=Q}function pe(Q){Q!==Z&&(K&&o.lineWidth(Q),Z=Q)}function Me(Q,zt,Mt){Q?(pt(o.POLYGON_OFFSET_FILL),(j!==zt||J!==Mt)&&(j=zt,J=Mt,h.getReversed()&&(zt=-zt),o.polygonOffset(zt,Mt))):Et(o.POLYGON_OFFSET_FILL)}function le(Q){Q?pt(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function Ae(Q){Q===void 0&&(Q=o.TEXTURE0+W-1),at!==Q&&(o.activeTexture(Q),at=Q)}function Y(Q,zt,Mt){Mt===void 0&&(at===null?Mt=o.TEXTURE0+W-1:Mt=at);let Ft=_t[Mt];Ft===void 0&&(Ft={type:void 0,texture:void 0},_t[Mt]=Ft),(Ft.type!==Q||Ft.texture!==zt)&&(at!==Mt&&(o.activeTexture(Mt),at=Mt),o.bindTexture(Q,zt||V[Q]),Ft.type=Q,Ft.texture=zt)}function Ge(){const Q=_t[at];Q!==void 0&&Q.type!==void 0&&(o.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function me(){try{o.compressedTexImage2D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function T(){try{o.texSubImage2D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function it(){try{o.texSubImage3D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function Tt(){try{o.texStorage2D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function Ot(){try{o.texStorage3D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function vt(){try{o.texImage2D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function xt(){try{o.texImage3D(...arguments)}catch(Q){Ve("WebGLState:",Q)}}function Pt(Q){return _[Q]!==void 0?_[Q]:o.getParameter(Q)}function ne(Q,zt){_[Q]!==zt&&(o.pixelStorei(Q,zt),_[Q]=zt)}function Bt(Q){F.equals(Q)===!1&&(o.scissor(Q.x,Q.y,Q.z,Q.w),F.copy(Q))}function It(Q){ft.equals(Q)===!1&&(o.viewport(Q.x,Q.y,Q.z,Q.w),ft.copy(Q))}function Kt(Q,zt){let Mt=m.get(zt);Mt===void 0&&(Mt=new WeakMap,m.set(zt,Mt));let Ft=Mt.get(Q);Ft===void 0&&(Ft=o.getUniformBlockIndex(zt,Q.name),Mt.set(Q,Ft))}function se(Q,zt){const Ft=m.get(zt).get(Q);p.get(zt)!==Ft&&(o.uniformBlockBinding(zt,Ft,Q.__bindingPointIndex),p.set(zt,Ft))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},_={},at=null,_t={},g={},S=new WeakMap,M=[],A=null,b=!1,y=null,L=null,I=null,C=null,U=null,D=null,N=null,E=new Oe(0,0,0),O=0,z=!1,H=null,tt=null,Z=null,j=null,J=null,F.set(0,0,o.canvas.width,o.canvas.height),ft.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:pt,disable:Et,bindFramebuffer:Dt,drawBuffers:mt,useProgram:Ut,setBlending:bt,setMaterial:Ct,setFlipSided:At,setCullFace:$t,setLineWidth:pe,setPolygonOffset:Me,setScissorTest:le,activeTexture:Ae,bindTexture:Y,unbindTexture:Ge,compressedTexImage2D:me,compressedTexImage3D:P,texImage2D:vt,texImage3D:xt,pixelStorei:ne,getParameter:Pt,updateUBOMapping:Kt,uniformBlockBinding:se,texStorage2D:Tt,texStorage3D:Ot,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:rt,compressedTexSubImage3D:gt,scissor:Bt,viewport:It,reset:de}}function XR(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,v=new WeakMap,_=new Set;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,T){return M?new OffscreenCanvas(P,T):Hl("canvas")}function b(P,T,it){let rt=1;const gt=me(P);if((gt.width>it||gt.height>it)&&(rt=it/Math.max(gt.width,gt.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Tt=Math.floor(rt*gt.width),Ot=Math.floor(rt*gt.height);g===void 0&&(g=A(Tt,Ot));const vt=T?A(Tt,Ot):g;return vt.width=Tt,vt.height=Ot,vt.getContext("2d").drawImage(P,0,0,Tt,Ot),ue("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Tt+"x"+Ot+")."),vt}else return"data"in P&&ue("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),P;return P}function y(P){return P.generateMipmaps}function L(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,T,it,rt,gt,Tt=!1){if(P!==null){if(o[P]!==void 0)return o[P];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ot;rt&&(Ot=t.get("EXT_texture_norm16"),Ot||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=T;if(T===o.RED&&(it===o.FLOAT&&(vt=o.R32F),it===o.HALF_FLOAT&&(vt=o.R16F),it===o.UNSIGNED_BYTE&&(vt=o.R8),it===o.UNSIGNED_SHORT&&Ot&&(vt=Ot.R16_EXT),it===o.SHORT&&Ot&&(vt=Ot.R16_SNORM_EXT)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.R8UI),it===o.UNSIGNED_SHORT&&(vt=o.R16UI),it===o.UNSIGNED_INT&&(vt=o.R32UI),it===o.BYTE&&(vt=o.R8I),it===o.SHORT&&(vt=o.R16I),it===o.INT&&(vt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(vt=o.RG32F),it===o.HALF_FLOAT&&(vt=o.RG16F),it===o.UNSIGNED_BYTE&&(vt=o.RG8),it===o.UNSIGNED_SHORT&&Ot&&(vt=Ot.RG16_EXT),it===o.SHORT&&Ot&&(vt=Ot.RG16_SNORM_EXT)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RG8UI),it===o.UNSIGNED_SHORT&&(vt=o.RG16UI),it===o.UNSIGNED_INT&&(vt=o.RG32UI),it===o.BYTE&&(vt=o.RG8I),it===o.SHORT&&(vt=o.RG16I),it===o.INT&&(vt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),it===o.UNSIGNED_INT&&(vt=o.RGB32UI),it===o.BYTE&&(vt=o.RGB8I),it===o.SHORT&&(vt=o.RGB16I),it===o.INT&&(vt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),it===o.UNSIGNED_INT&&(vt=o.RGBA32UI),it===o.BYTE&&(vt=o.RGBA8I),it===o.SHORT&&(vt=o.RGBA16I),it===o.INT&&(vt=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_SHORT&&Ot&&(vt=Ot.RGB16_EXT),it===o.SHORT&&Ot&&(vt=Ot.RGB16_SNORM_EXT),it===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),T===o.RGBA){const xt=Tt?af:Ie.getTransfer(gt);it===o.FLOAT&&(vt=o.RGBA32F),it===o.HALF_FLOAT&&(vt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(vt=xt===Qe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT&&Ot&&(vt=Ot.RGBA16_EXT),it===o.SHORT&&Ot&&(vt=Ot.RGBA16_SNORM_EXT),it===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function U(P,T){let it;return P?T===null||T===ma||T===Bl?it=o.DEPTH24_STENCIL8:T===ha?it=o.DEPTH32F_STENCIL8:T===Il&&(it=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ma||T===Bl?it=o.DEPTH_COMPONENT24:T===ha?it=o.DEPTH_COMPONENT32F:T===Il&&(it=o.DEPTH_COMPONENT16),it}function D(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==zn&&P.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function N(P){const T=P.target;T.removeEventListener("dispose",N),O(T),T.isVideoTexture&&v.delete(T),T.isHTMLTexture&&_.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),H(T)}function O(P){const T=r.get(P);if(T.__webglInit===void 0)return;const it=P.source,rt=S.get(it);if(rt){const gt=rt[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&z(P),Object.keys(rt).length===0&&S.delete(it)}r.remove(P)}function z(P){const T=r.get(P);o.deleteTexture(T.__webglTexture);const it=P.source,rt=S.get(it);delete rt[T.__cacheKey],h.memory.textures--}function H(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let gt=0;gt<T.__webglFramebuffer[rt].length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[rt][gt]);else o.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)o.deleteFramebuffer(T.__webglFramebuffer[rt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=P.textures;for(let rt=0,gt=it.length;rt<gt;rt++){const Tt=r.get(it[rt]);Tt.__webglTexture&&(o.deleteTexture(Tt.__webglTexture),h.memory.textures--),r.remove(it[rt])}r.remove(P)}let tt=0;function Z(){tt=0}function j(){return tt}function J(P){tt=P}function W(){const P=tt;return P>=l.maxTextures&&ue("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),tt+=1,P}function K(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ct(P,T){const it=r.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&it.__version!==P.version){const rt=P.image;if(rt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(it,P,T);return}}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function X(P,T){const it=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){Et(it,P,T);return}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function at(P,T){const it=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){Et(it,P,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function _t(P,T){const it=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&it.__version!==P.version){Dt(it,P,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const Lt={[kp]:o.REPEAT,[Ba]:o.CLAMP_TO_EDGE,[Xp]:o.MIRRORED_REPEAT},Nt={[zn]:o.NEAREST,[Ib]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[qd]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},F={[Gb]:o.NEVER,[Wb]:o.ALWAYS,[Vb]:o.LESS,[zm]:o.LEQUAL,[kb]:o.EQUAL,[Im]:o.GEQUAL,[Xb]:o.GREATER,[qb]:o.NOTEQUAL};function ft(P,T){if(T.type===ha&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===qd||T.magFilter===mc||T.magFilter===Dr||T.minFilter===Hn||T.minFilter===qd||T.minFilter===mc||T.minFilter===Dr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Lt[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Lt[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Lt[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Nt[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Nt[T.minFilter]),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zn||T.minFilter!==mc&&T.minFilter!==Dr||T.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function wt(P,T){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",N));const rt=T.source;let gt=S.get(rt);gt===void 0&&(gt={},S.set(rt,gt));const Tt=K(T);if(Tt!==P.__cacheKey){gt[Tt]===void 0&&(gt[Tt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),gt[Tt].usedTimes++;const Ot=gt[P.__cacheKey];Ot!==void 0&&(gt[P.__cacheKey].usedTimes--,Ot.usedTimes===0&&z(T)),P.__cacheKey=Tt,P.__webglTexture=gt[Tt].texture}return it}function V(P,T,it){return Math.floor(Math.floor(P/it)/T)}function pt(P,T,it,rt){const Tt=P.updateRanges;if(Tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,rt,T.data);else{Tt.sort((ne,Bt)=>ne.start-Bt.start);let Ot=0;for(let ne=1;ne<Tt.length;ne++){const Bt=Tt[Ot],It=Tt[ne],Kt=Bt.start+Bt.count,se=V(It.start,T.width,4),de=V(Bt.start,T.width,4);It.start<=Kt+1&&se===de&&V(It.start+It.count-1,T.width,4)===se?Bt.count=Math.max(Bt.count,It.start+It.count-Bt.start):(++Ot,Tt[Ot]=It)}Tt.length=Ot+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),xt=i.getParameter(o.UNPACK_SKIP_PIXELS),Pt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ne=0,Bt=Tt.length;ne<Bt;ne++){const It=Tt[ne],Kt=Math.floor(It.start/4),se=Math.ceil(It.count/4),de=Kt%T.width,Q=Math.floor(Kt/T.width),zt=se,Mt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(o.TEXTURE_2D,0,de,Q,zt,Mt,it,rt,T.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function Et(P,T,it){let rt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=o.TEXTURE_3D);const gt=wt(P,T),Tt=T.source;i.bindTexture(rt,P.__webglTexture,o.TEXTURE0+it);const Ot=r.get(Tt);if(Tt.version!==Ot.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Mt=Ie.getPrimaries(Ie.workingColorSpace),Ft=T.colorSpace===wr?null:Ie.getPrimaries(T.colorSpace),Yt=T.colorSpace===wr||Mt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment);let xt=b(T.image,!1,l.maxTextureSize);xt=Ge(T,xt);const Pt=u.convert(T.format,T.colorSpace),ne=u.convert(T.type);let Bt=C(T.internalFormat,Pt,ne,T.normalized,T.colorSpace,T.isVideoTexture);ft(rt,T);let It;const Kt=T.mipmaps,se=T.isVideoTexture!==!0,de=Ot.__version===void 0||gt===!0,Q=Tt.dataReady,zt=D(T,xt);if(T.isDepthTexture)Bt=U(T.format===ls,T.type),de&&(se?i.texStorage2D(o.TEXTURE_2D,1,Bt,xt.width,xt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Pt,ne,null));else if(T.isDataTexture)if(Kt.length>0){se&&de&&i.texStorage2D(o.TEXTURE_2D,zt,Bt,Kt[0].width,Kt[0].height);for(let Mt=0,Ft=Kt.length;Mt<Ft;Mt++)It=Kt[Mt],se?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Pt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,It.width,It.height,0,Pt,ne,It.data);T.generateMipmaps=!1}else se?(de&&i.texStorage2D(o.TEXTURE_2D,zt,Bt,xt.width,xt.height),Q&&pt(T,xt,Pt,ne)):i.texImage2D(o.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Pt,ne,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Bt,Kt[0].width,Kt[0].height,xt.depth);for(let Mt=0,Ft=Kt.length;Mt<Ft;Mt++)if(It=Kt[Mt],T.format!==qi)if(Pt!==null)if(se){if(Q)if(T.layerUpdates.size>0){const Yt=Jx(It.width,It.height,T.format,T.type);for(const Rt of T.layerUpdates){const ie=It.data.subarray(Rt*Yt/It.data.BYTES_PER_ELEMENT,(Rt+1)*Yt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,Rt,It.width,It.height,1,Pt,ie)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,xt.depth,Pt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,It.width,It.height,xt.depth,0,It.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,xt.depth,Pt,ne,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Bt,It.width,It.height,xt.depth,0,Pt,ne,It.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{se&&de&&i.texStorage2D(o.TEXTURE_2D,zt,Bt,Kt[0].width,Kt[0].height);for(let Mt=0,Ft=Kt.length;Mt<Ft;Mt++)It=Kt[Mt],T.format!==qi?Pt!==null?se?Q&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Pt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Bt,It.width,It.height,0,It.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Pt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Mt,Bt,It.width,It.height,0,Pt,ne,It.data)}else if(T.isDataArrayTexture)if(se){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Bt,xt.width,xt.height,xt.depth),Q)if(T.layerUpdates.size>0){const Mt=Jx(xt.width,xt.height,T.format,T.type);for(const Ft of T.layerUpdates){const Yt=xt.data.subarray(Ft*Mt/xt.data.BYTES_PER_ELEMENT,(Ft+1)*Mt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ft,xt.width,xt.height,1,Pt,ne,Yt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,ne,xt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,Pt,ne,xt.data);else if(T.isData3DTexture)se?(de&&i.texStorage3D(o.TEXTURE_3D,zt,Bt,xt.width,xt.height,xt.depth),Q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,ne,xt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,Pt,ne,xt.data);else if(T.isFramebufferTexture){if(de)if(se)i.texStorage2D(o.TEXTURE_2D,zt,Bt,xt.width,xt.height);else{let Mt=xt.width,Ft=xt.height;for(let Yt=0;Yt<zt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,Bt,Mt,Ft,0,Pt,ne,null),Mt>>=1,Ft>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in o){const Mt=o.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),xt.parentNode!==Mt){Mt.appendChild(xt),_.add(T),Mt.onpaint=Ft=>{const Yt=Ft.changedElements;for(const Rt of _)Yt.includes(Rt.image)&&(Rt.needsUpdate=!0)},Mt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,xt);else{const Yt=o.RGBA,Rt=o.RGBA,ie=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Yt,Rt,ie,xt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(se&&de){const Mt=me(Kt[0]);i.texStorage2D(o.TEXTURE_2D,zt,Bt,Mt.width,Mt.height)}for(let Mt=0,Ft=Kt.length;Mt<Ft;Mt++)It=Kt[Mt],se?Q&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Pt,ne,It):i.texImage2D(o.TEXTURE_2D,Mt,Bt,Pt,ne,It);T.generateMipmaps=!1}else if(se){if(de){const Mt=me(xt);i.texStorage2D(o.TEXTURE_2D,zt,Bt,Mt.width,Mt.height)}Q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,ne,xt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Pt,ne,xt);y(T)&&L(rt),Ot.__version=Tt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Dt(P,T,it){if(T.image.length!==6)return;const rt=wt(P,T),gt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+it);const Tt=r.get(gt);if(gt.version!==Tt.__version||rt===!0){i.activeTexture(o.TEXTURE0+it);const Ot=Ie.getPrimaries(Ie.workingColorSpace),vt=T.colorSpace===wr?null:Ie.getPrimaries(T.colorSpace),xt=T.colorSpace===wr||Ot===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let Rt=0;Rt<6;Rt++)!Pt&&!ne?Bt[Rt]=b(T.image[Rt],!0,l.maxCubemapSize):Bt[Rt]=ne?T.image[Rt].image:T.image[Rt],Bt[Rt]=Ge(T,Bt[Rt]);const It=Bt[0],Kt=u.convert(T.format,T.colorSpace),se=u.convert(T.type),de=C(T.internalFormat,Kt,se,T.normalized,T.colorSpace),Q=T.isVideoTexture!==!0,zt=Tt.__version===void 0||rt===!0,Mt=gt.dataReady;let Ft=D(T,It);ft(o.TEXTURE_CUBE_MAP,T);let Yt;if(Pt){Q&&zt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,de,It.width,It.height);for(let Rt=0;Rt<6;Rt++){Yt=Bt[Rt].mipmaps;for(let ie=0;ie<Yt.length;ie++){const Wt=Yt[ie];T.format!==qi?Kt!==null?Q?Mt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie,0,0,Wt.width,Wt.height,Kt,Wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie,de,Wt.width,Wt.height,0,Wt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie,0,0,Wt.width,Wt.height,Kt,se,Wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie,de,Wt.width,Wt.height,0,Kt,se,Wt.data)}}}else{if(Yt=T.mipmaps,Q&&zt){Yt.length>0&&Ft++;const Rt=me(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,de,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(ne){Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Bt[Rt].width,Bt[Rt].height,Kt,se,Bt[Rt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,de,Bt[Rt].width,Bt[Rt].height,0,Kt,se,Bt[Rt].data);for(let ie=0;ie<Yt.length;ie++){const Pe=Yt[ie].image[Rt].image;Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie+1,0,0,Pe.width,Pe.height,Kt,se,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie+1,de,Pe.width,Pe.height,0,Kt,se,Pe.data)}}else{Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Kt,se,Bt[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,de,Kt,se,Bt[Rt]);for(let ie=0;ie<Yt.length;ie++){const Wt=Yt[ie];Q?Mt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie+1,0,0,Kt,se,Wt.image[Rt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie+1,de,Kt,se,Wt.image[Rt])}}}y(T)&&L(o.TEXTURE_CUBE_MAP),Tt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function mt(P,T,it,rt,gt,Tt){const Ot=u.convert(it.format,it.colorSpace),vt=u.convert(it.type),xt=C(it.internalFormat,Ot,vt,it.normalized,it.colorSpace),Pt=r.get(T),ne=r.get(it);if(ne.__renderTarget=T,!Pt.__hasExternalTextures){const Bt=Math.max(1,T.width>>Tt),It=Math.max(1,T.height>>Tt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,Tt,xt,Bt,It,T.depth,0,Ot,vt,null):i.texImage2D(gt,Tt,xt,Bt,It,0,Ot,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ae(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,gt,ne.__webglTexture,0,le(T)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,rt,gt,ne.__webglTexture,Tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(P,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer){const rt=T.depthTexture,gt=rt&&rt.isDepthTexture?rt.type:null,Tt=U(T.stencilBuffer,gt),Ot=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ae(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,le(T),Tt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,le(T),Tt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,P)}else{const rt=T.textures;for(let gt=0;gt<rt.length;gt++){const Tt=rt[gt],Ot=u.convert(Tt.format,Tt.colorSpace),vt=u.convert(Tt.type),xt=C(Tt.internalFormat,Ot,vt,Tt.normalized,Tt.colorSpace);Ae(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,le(T),xt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,le(T),xt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Be(P,T,it){const rt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=r.get(T.depthTexture);if(gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),ft(o.TEXTURE_CUBE_MAP,T.depthTexture);const Pt=u.convert(T.depthTexture.format),ne=u.convert(T.depthTexture.type);let Bt;T.depthTexture.format===Ha?Bt=o.DEPTH_COMPONENT24:T.depthTexture.format===ls&&(Bt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Bt,T.width,T.height,0,Pt,ne,null)}}else ct(T.depthTexture,0);const Tt=gt.__webglTexture,Ot=le(T),vt=rt?o.TEXTURE_CUBE_MAP_POSITIVE_X+it:o.TEXTURE_2D,xt=T.depthTexture.format===ls?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ha)Ae(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,vt,Tt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,xt,vt,Tt,0);else if(T.depthTexture.format===ls)Ae(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,vt,Tt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,xt,vt,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(P){const T=r.get(P),it=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const rt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",gt)};rt.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=rt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let rt=0;rt<6;rt++)Be(T.__webglFramebuffer[rt],P,rt);else{const rt=P.texture.mipmaps;rt&&rt.length>0?Be(T.__webglFramebuffer[0],P,0):Be(T.__webglFramebuffer,P,0)}else if(it){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=o.createRenderbuffer(),Ut(T.__webglDepthbuffer[rt],P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=T.__webglDepthbuffer[rt];o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Tt)}}else{const rt=P.texture.mipmaps;if(rt&&rt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ut(T.__webglDepthbuffer,P,!1);else{const gt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Tt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function bt(P,T,it){const rt=r.get(P);T!==void 0&&mt(rt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&fe(P)}function Ct(P){const T=P.texture,it=r.get(P),rt=r.get(T);P.addEventListener("dispose",E);const gt=P.textures,Tt=P.isWebGLCubeRenderTarget===!0,Ot=gt.length>1;if(Ot||(rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture()),rt.__version=T.version,h.memory.textures++),Tt){it.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[vt]=[];for(let xt=0;xt<T.mipmaps.length;xt++)it.__webglFramebuffer[vt][xt]=o.createFramebuffer()}else it.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let vt=0;vt<T.mipmaps.length;vt++)it.__webglFramebuffer[vt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let vt=0,xt=gt.length;vt<xt;vt++){const Pt=r.get(gt[vt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Ae(P)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let vt=0;vt<gt.length;vt++){const xt=gt[vt];it.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[vt]);const Pt=u.convert(xt.format,xt.colorSpace),ne=u.convert(xt.type),Bt=C(xt.internalFormat,Pt,ne,xt.normalized,xt.colorSpace,P.isXRRenderTarget===!0),It=le(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Bt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,it.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture),ft(o.TEXTURE_CUBE_MAP,T);for(let vt=0;vt<6;vt++)if(T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)mt(it.__webglFramebuffer[vt][xt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,xt);else mt(it.__webglFramebuffer[vt],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(T)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let vt=0,xt=gt.length;vt<xt;vt++){const Pt=gt[vt],ne=r.get(Pt);let Bt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Bt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ne.__webglTexture),ft(Bt,Pt),mt(it.__webglFramebuffer,P,Pt,o.COLOR_ATTACHMENT0+vt,Bt,0),y(Pt)&&L(Bt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,rt.__webglTexture),ft(vt,T),T.mipmaps&&T.mipmaps.length>0)for(let xt=0;xt<T.mipmaps.length;xt++)mt(it.__webglFramebuffer[xt],P,T,o.COLOR_ATTACHMENT0,vt,xt);else mt(it.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,vt,0);y(T)&&L(vt),i.unbindTexture()}P.depthBuffer&&fe(P)}function At(P){const T=P.textures;for(let it=0,rt=T.length;it<rt;it++){const gt=T[it];if(y(gt)){const Tt=I(P),Ot=r.get(gt).__webglTexture;i.bindTexture(Tt,Ot),L(Tt),i.unbindTexture()}}}const $t=[],pe=[];function Me(P){if(P.samples>0){if(Ae(P)===!1){const T=P.textures,it=P.width,rt=P.height;let gt=o.COLOR_BUFFER_BIT;const Tt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(P),vt=T.length>1;if(vt)for(let Pt=0;Pt<T.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const xt=P.texture.mipmaps;xt&&xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const ne=r.get(T[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,it,rt,0,0,it,rt,gt,o.NEAREST),p===!0&&($t.length=0,pe.length=0,$t.push(o.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&($t.push(Tt),pe.push(Tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Pt=0;Pt<T.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const ne=r.get(T[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&p){const T=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function le(P){return Math.min(l.maxSamples,P.samples)}function Ae(P){const T=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(P){const T=h.render.frame;v.get(P)!==T&&(v.set(P,T),P.update())}function Ge(P,T){const it=P.colorSpace,rt=P.format,gt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==nf&&it!==wr&&(Ie.getTransfer(it)===Qe?(rt!==qi||gt!==_i)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",it)),T}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=J,this.setTexture2D=ct,this.setTexture2DArray=X,this.setTexture3D=at,this.setTextureCube=_t,this.rebindTextures=bt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qR(o,t){function i(r,l=wr){let u;const h=Ie.getTransfer(l);if(r===_i)return o.UNSIGNED_BYTE;if(r===Nm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Um)return o.UNSIGNED_SHORT_5_5_5_1;if(r===XS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===qS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===VS)return o.BYTE;if(r===kS)return o.SHORT;if(r===Il)return o.UNSIGNED_SHORT;if(r===Dm)return o.INT;if(r===ma)return o.UNSIGNED_INT;if(r===ha)return o.FLOAT;if(r===ga)return o.HALF_FLOAT;if(r===WS)return o.ALPHA;if(r===YS)return o.RGB;if(r===qi)return o.RGBA;if(r===Ha)return o.DEPTH_COMPONENT;if(r===ls)return o.DEPTH_STENCIL;if(r===KS)return o.RED;if(r===Lm)return o.RED_INTEGER;if(r===hs)return o.RG;if(r===Om)return o.RG_INTEGER;if(r===Pm)return o.RGBA_INTEGER;if(r===Xc||r===qc||r===Wc||r===Yc)if(h===Qe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qp||r===Wp||r===Yp||r===Kp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zp||r===Qp||r===Jp||r===jp||r===$p||r===tf||r===tm)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zp||r===Qp)return h===Qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Jp)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===jp)return u.COMPRESSED_R11_EAC;if(r===$p)return u.COMPRESSED_SIGNED_R11_EAC;if(r===tf)return u.COMPRESSED_RG11_EAC;if(r===tm)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===em||r===nm||r===im||r===am||r===rm||r===sm||r===om||r===lm||r===um||r===cm||r===fm||r===hm||r===dm||r===pm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===em)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===im)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===am)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===om)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===um)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mm||r===gm||r===vm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===mm)return h===Qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_m||r===xm||r===ef||r===Sm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===_m)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ef)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YR=`
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

}`;class KR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new ay(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ln({vertexShader:WR,fragmentShader:YR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new on(new bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZR extends ds{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,v=null,_=null,g=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",b=new KR,y={},L=i.getContextAttributes();let I=null,C=null;const U=[],D=[],N=new re;let E=null,O=null;const z=new ki;z.viewport=new tn;const H=new ki;H.viewport=new tn;const tt=[z,H],Z=new iT;let j=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let pt=U[V];return pt===void 0&&(pt=new tp,U[V]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(V){let pt=U[V];return pt===void 0&&(pt=new tp,U[V]=pt),pt.getGripSpace()},this.getHand=function(V){let pt=U[V];return pt===void 0&&(pt=new tp,U[V]=pt),pt.getHandSpace()};function W(V){const pt=D.indexOf(V.inputSource);if(pt===-1)return;const Et=U[pt];Et!==void 0&&(Et.update(V.inputSource,V.frame,m||h),Et.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",ct);for(let V=0;V<U.length;V++){const pt=D[V];pt!==null&&(D[V]=null,U[V].disconnect(pt))}j=null,J=null,b.reset();for(const V in y)delete y[V];if(t.setRenderTarget(I),S=null,g=null,_=null,l=null,C=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(E),t.setSize(N.width,N.height,!1),O!==null){const V=O.camera;V.fov=O.fov,V.zoom=O.zoom,V.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,r.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,r.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",K),l.addEventListener("inputsourceschange",ct),L.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Dt=null,mt=null;L.depth&&(mt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=L.stencil?ls:Ha,Dt=L.stencil?Bl:ma);const Ut={colorFormat:i.RGBA8,depthFormat:mt,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(Ut),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Ui(g.textureWidth,g.textureHeight,{format:qi,type:_i,depthTexture:new Gl(g.textureWidth,g.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Ui(S.framebufferWidth,S.framebufferHeight,{format:qi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ct(V){for(let pt=0;pt<V.removed.length;pt++){const Et=V.removed[pt],Dt=D.indexOf(Et);Dt>=0&&(D[Dt]=null,U[Dt].disconnect(Et))}for(let pt=0;pt<V.added.length;pt++){const Et=V.added[pt];let Dt=D.indexOf(Et);if(Dt===-1){for(let Ut=0;Ut<U.length;Ut++)if(Ut>=D.length){D.push(Et),Dt=Ut;break}else if(D[Ut]===null){D[Ut]=Et,Dt=Ut;break}if(Dt===-1)break}const mt=U[Dt];mt&&mt.connect(Et)}}const X=new q,at=new q;function _t(V,pt,Et){X.setFromMatrixPosition(pt.matrixWorld),at.setFromMatrixPosition(Et.matrixWorld);const Dt=X.distanceTo(at),mt=pt.projectionMatrix.elements,Ut=Et.projectionMatrix.elements,Be=mt[14]/(mt[10]-1),fe=mt[14]/(mt[10]+1),bt=(mt[9]+1)/mt[5],Ct=(mt[9]-1)/mt[5],At=(mt[8]-1)/mt[0],$t=(Ut[8]+1)/Ut[0],pe=Be*At,Me=Be*$t,le=Dt/(-At+$t),Ae=le*-At;if(pt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ae),V.translateZ(le),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),mt[10]===-1)V.projectionMatrix.copy(pt.projectionMatrix),V.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Y=Be+le,Ge=fe+le,me=pe-Ae,P=Me+(Dt-Ae),T=bt*fe/Ge*Y,it=Ct*fe/Ge*Y;V.projectionMatrix.makePerspective(me,P,T,it,Y,Ge),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Lt(V,pt){pt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(pt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;let pt=V.near,Et=V.far;b.texture!==null&&(b.depthNear>0&&(pt=b.depthNear),b.depthFar>0&&(Et=b.depthFar)),Z.near=H.near=z.near=pt,Z.far=H.far=z.far=Et,(j!==Z.near||J!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),j=Z.near,J=Z.far),Z.layers.mask=V.layers.mask|6,z.layers.mask=Z.layers.mask&-5,H.layers.mask=Z.layers.mask&-3;const Dt=V.parent,mt=Z.cameras;Lt(Z,Dt);for(let Ut=0;Ut<mt.length;Ut++)Lt(mt[Ut],Dt);mt.length===2?_t(Z,z,H):Z.projectionMatrix.copy(z.projectionMatrix),O===null&&V.isPerspectiveCamera&&(O={camera:V,fov:V.fov,zoom:V.zoom}),Nt(V,Z,Dt)};function Nt(V,pt,Et){Et===null?V.matrix.copy(pt.matrixWorld):(V.matrix.copy(Et.matrixWorld),V.matrix.invert(),V.matrix.multiply(pt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(pt.projectionMatrix),V.projectionMatrixInverse.copy(pt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Mm*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(V){p=V,g!==null&&(g.fixedFoveation=V),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=V)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Z)},this.getCameraTexture=function(V){return y[V]};let F=null;function ft(V,pt){if(v=pt.getViewerPose(m||h),M=pt,v!==null){const Et=v.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Dt=!1;Et.length!==Z.cameras.length&&(Z.cameras.length=0,Dt=!0);for(let fe=0;fe<Et.length;fe++){const bt=Et[fe];let Ct=null;if(S!==null)Ct=S.getViewport(bt);else{const $t=_.getViewSubImage(g,bt);Ct=$t.viewport,fe===0&&(t.setRenderTargetTextures(C,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(C))}let At=tt[fe];At===void 0&&(At=new ki,At.layers.enable(fe),At.viewport=new tn,tt[fe]=At),At.matrix.fromArray(bt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(bt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),fe===0&&(Z.matrix.copy(At.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Dt===!0&&Z.cameras.push(At)}const mt=l.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const fe=_.getDepthInformation(Et[0]);fe&&fe.isValid&&fe.texture&&b.init(fe,l.renderState)}if(mt&&mt.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let fe=0;fe<Et.length;fe++){const bt=Et[fe].camera;if(bt){let Ct=y[bt];Ct||(Ct=new ay,y[bt]=Ct);const At=_.getCameraImage(bt);Ct.sourceTexture=At}}}}for(let Et=0;Et<U.length;Et++){const Dt=D[Et],mt=U[Et];Dt!==null&&mt!==void 0&&mt.update(Dt,pt,m||h)}F&&F(V,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),M=null}const wt=new fy;wt.setAnimationLoop(ft),this.setAnimationLoop=function(V){F=V},this.dispose=function(){}}}const QR=new rn,_y=new _e;_y.set(-1,0,0,0,1,0,0,0,1);function JR(o,t){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function r(b,y){y.color.getRGB(b.fogColor.value,ly(o)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,L,I,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(b,y):y.isMeshLambertMaterial?(u(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(b,y),_(b,y)):y.isMeshPhongMaterial?(u(b,y),v(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(b,y),g(b,y),y.isMeshPhysicalMaterial&&S(b,y,C)):y.isMeshMatcapMaterial?(u(b,y),M(b,y)):y.isMeshDepthMaterial?u(b,y):y.isMeshDistanceMaterial?(u(b,y),A(b,y)):y.isMeshNormalMaterial?u(b,y):y.isLineBasicMaterial?(h(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?p(b,y,L,I):y.isSpriteMaterial?m(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===ri&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===ri&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const L=t.get(y),I=L.envMap,C=L.envMapRotation;I&&(b.envMap.value=I,b.envMapRotation.value.setFromMatrix4(QR.makeRotationFromEuler(C)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(_y),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function h(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function p(b,y,L,I){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*L,b.scale.value=I*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function m(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function v(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function _(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function S(b,y,L){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.retroreflectivity>0&&(b.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,y){y.matcap&&(b.matcap.value=y.matcap)}function A(b,y){const L=t.get(y).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function jR(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const D=U.program;r.uniformBlockBinding(C,D)}function m(C,U){let D=l[C.id];D===void 0&&(b(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",L));const N=U.program;r.updateUBOMapping(C,N);const E=t.render.frame;u[C.id]!==E&&(g(C),u[C.id]=E)}function v(C){const U=_();C.__bindingPointIndex=U;const D=o.createBuffer(),N=C.__size,E=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,N,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],D=C.uniforms,N=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let E=0,O=D.length;E<O;E++){const z=D[E];if(Array.isArray(z))for(let H=0,tt=z.length;H<tt;H++)S(z[H],E,H,N);else S(z,E,0,N)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(C,U,D,N){if(A(C,U,D,N)===!0){const E=C.__offset,O=C.value;if(Array.isArray(O)){let z=0;for(let H=0;H<O.length;H++){const tt=O[H],Z=y(tt);M(tt,C.__data,z),typeof tt!="number"&&typeof tt!="boolean"&&!tt.isMatrix3&&!ArrayBuffer.isView(tt)&&(z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(O,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,E,C.__data)}}function M(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function A(C,U,D,N){const E=C.value,O=U+"_"+D;if(N[O]===void 0)return typeof E=="number"||typeof E=="boolean"?N[O]=E:ArrayBuffer.isView(E)?N[O]=E.slice():N[O]=E.clone(),!0;{const z=N[O];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return N[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function b(C){const U=C.uniforms;let D=0;const N=16;for(let O=0,z=U.length;O<z;O++){const H=Array.isArray(U[O])?U[O]:[U[O]];for(let tt=0,Z=H.length;tt<Z;tt++){const j=H[tt],J=Array.isArray(j.value)?j.value:[j.value];for(let W=0,K=J.length;W<K;W++){const ct=J[W],X=y(ct),at=D%N,_t=at%X.boundary,Lt=at+_t;D+=_t,Lt!==0&&N-Lt<X.storage&&(D+=N-Lt),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=D,D+=X.storage}}}const E=D%N;return E>0&&(D+=N-E),C.__size=D,C.__cache={},this}function y(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",C),U}function L(C){const U=C.target;U.removeEventListener("dispose",L);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function I(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:I}}const $R=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function tw(){return ca===null&&(ca=new xE($R,16,16,hs,ga),ca.name="DFG_LUT",ca.minFilter=Hn,ca.magFilter=Hn,ca.wrapS=Ba,ca.wrapT=Ba,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class ew{constructor(t={}){const{canvas:i=Zb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=_i}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=S,b=new Set([Pm,Om,Lm]),y=new Set([_i,ma,Il,Bl,Nm,Um]),L=new Uint32Array(4),I=new Int32Array(4),C=new q;let U=null,D=null;const N=[],E=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let H=!1,tt=null,Z=null,j=null,J=null;this._outputColorSpace=Qn;let W=0,K=0,ct=null,X=-1,at=null;const _t=new tn,Lt=new tn;let Nt=null;const F=new Oe(0);let ft=0,wt=i.width,V=i.height,pt=1,Et=null,Dt=null;const mt=new tn(0,0,wt,V),Ut=new tn(0,0,wt,V);let Be=!1;const fe=new Hm;let bt=!1,Ct=!1;const At=new rn,$t=new q,pe=new tn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ae(){return ct===null?pt:1}let Y=r;function Ge(R,G){return i.getContext(R,G)}let me,P,T,it,rt,gt,Tt,Ot,vt,xt,Pt,ne,Bt,It,Kt,se,de,Q,zt,Mt,Ft,Yt,Rt;try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wm}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",si,!1),Y===null){const G="webgl2";if(Y=Ge(G,R),Y===null)throw Ge(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(R){throw i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",si,!1),Ve("WebGLRenderer: "+R.message),R}function ie(){me=new t3(Y),me.init(),Ft=new qR(Y,me),P=new X2(Y,me,t,Ft),T=new kR(Y,me),P.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),Z=Y.createFramebuffer(),j=Y.createFramebuffer(),J=Y.createFramebuffer(),it=new i3(Y),rt=new CR,gt=new XR(Y,me,T,rt,P,Ft,it),Tt=new $2(z),Ot=new rT(Y),Yt=new V2(Y,Ot),vt=new e3(Y,Ot,it,Yt),xt=new r3(Y,vt,Ot,Yt,it),Q=new a3(Y,P,gt),Kt=new q2(rt),Pt=new wR(z,Tt,me,P,Yt,Kt),ne=new JR(z,rt),Bt=new NR,It=new IR(me),de=new G2(z,Tt,T,xt,M,p),se=new VR(z,xt,P),Rt=new jR(Y,it,P,T),zt=new k2(Y,me,it),Mt=new n3(Y,me,it),it.programs=Pt.programs,z.capabilities=P,z.extensions=me,z.properties=rt,z.renderLists=Bt,z.shadowMap=se,z.state=T,z.info=it}A!==_i&&(O=new o3(A,i.width,i.height,d,l,u));const Wt=new ZR(z,Y);this.xr=Wt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(R){R!==void 0&&(pt=R,this.setSize(wt,V,!1))},this.getSize=function(R){return R.set(wt,V)},this.setSize=function(R,G,dt=!0){if(Wt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=R,V=G,i.width=Math.floor(R*pt),i.height=Math.floor(G*pt),dt===!0&&(i.style.width=R+"px",i.style.height=G+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(wt*pt,V*pt).floor()},this.setDrawingBufferSize=function(R,G,dt){wt=R,V=G,pt=dt,i.width=Math.floor(R*dt),i.height=Math.floor(G*dt),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(A===_i){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(_t)},this.getViewport=function(R){return R.copy(mt)},this.setViewport=function(R,G,dt,ot){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,G,dt,ot),T.viewport(_t.copy(mt).multiplyScalar(pt).round())},this.getScissor=function(R){return R.copy(Ut)},this.setScissor=function(R,G,dt,ot){R.isVector4?Ut.set(R.x,R.y,R.z,R.w):Ut.set(R,G,dt,ot),T.scissor(Lt.copy(Ut).multiplyScalar(pt).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){T.setScissorTest(Be=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){Dt=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,dt=!0){let ot=0;if(R){let lt=!1;if(ct!==null){const kt=ct.texture.format;lt=b.has(kt)}if(lt){const kt=ct.texture.type,Zt=y.has(kt),Ht=de.getClearColor(),jt=de.getClearAlpha(),te=Ht.r,ce=Ht.g,ve=Ht.b;Zt?(L[0]=te,L[1]=ce,L[2]=ve,L[3]=jt,Y.clearBufferuiv(Y.COLOR,0,L)):(I[0]=te,I[1]=ce,I[2]=ve,I[3]=jt,Y.clearBufferiv(Y.COLOR,0,I))}else ot|=Y.COLOR_BUFFER_BIT}G&&(ot|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(ot|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Y.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),tt=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",si,!1),de.dispose(),Bt.dispose(),It.dispose(),rt.dispose(),Tt.dispose(),xt.dispose(),Yt.dispose(),Rt.dispose(),Pt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Or),Wt.removeEventListener("sessionend",Xa),Zi.stop()};function Pe(R){R.preventDefault(),xx("WebGLRenderer: Context Lost."),H=!0}function ge(){xx("WebGLRenderer: Context Restored."),H=!1;const R=it.autoReset,G=se.enabled,dt=se.autoUpdate,ot=se.needsUpdate,lt=se.type;ie(),it.autoReset=R,se.enabled=G,se.autoUpdate=dt,se.needsUpdate=ot,se.type=lt}function si(R){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xi(R){const G=R.target;G.removeEventListener("dispose",xi),hf(G)}function hf(R){ms(R),rt.remove(R)}function ms(R){const G=rt.get(R).programs;G!==void 0&&(G.forEach(function(dt){Pt.releaseProgram(dt)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,dt,ot,lt,kt){G===null&&(G=Me);const Zt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ht=Do(R,G,dt,ot,lt);T.setMaterial(ot,Zt);let jt=dt.index,te=1;if(ot.wireframe===!0){if(jt=vt.getWireframeAttribute(dt),jt===void 0)return;te=2}const ce=dt.drawRange,ve=dt.attributes.position;let Qt=ce.start*te,Re=(ce.start+ce.count)*te;kt!==null&&(Qt=Math.max(Qt,kt.start*te),Re=Math.min(Re,(kt.start+kt.count)*te)),jt!==null?(Qt=Math.max(Qt,0),Re=Math.min(Re,jt.count)):ve!=null&&(Qt=Math.max(Qt,0),Re=Math.min(Re,ve.count));const be=Re-Qt;if(be<0||be===1/0)return;Yt.setup(lt,ot,Ht,dt,jt);let Je,qe=zt;if(jt!==null&&(Je=Ot.get(jt),qe=Mt,qe.setIndex(Je)),lt.isMesh)ot.wireframe===!0?(T.setLineWidth(ot.wireframeLinewidth*Ae()),qe.setMode(Y.LINES)):qe.setMode(Y.TRIANGLES);else if(lt.isLine){let yn=ot.linewidth;yn===void 0&&(yn=1),T.setLineWidth(yn*Ae()),lt.isLineSegments?qe.setMode(Y.LINES):lt.isLineLoop?qe.setMode(Y.LINE_LOOP):qe.setMode(Y.LINE_STRIP)}else lt.isPoints?qe.setMode(Y.POINTS):lt.isSprite&&qe.setMode(Y.TRIANGLES);if(lt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))qe.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const yn=lt._multiDrawStarts,Xt=lt._multiDrawCounts,cn=lt._multiDrawCount,ze=jt?Ot.get(jt).bytesPerElement:1,Xn=rt.get(ot).currentProgram.getUniforms();for(let oi=0;oi<cn;oi++)Xn.setValue(Y,"_gl_DrawID",oi),qe.render(yn[oi]/ze,Xt[oi])}else if(lt.isInstancedMesh)qe.renderInstances(Qt,be,lt.count);else if(dt.isInstancedBufferGeometry){const yn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Xt=Math.min(dt.instanceCount,yn);qe.renderInstances(Qt,be,Xt)}else qe.render(Qt,be)};function Lr(R,G,dt,ot){tt!==null&&R.isNodeMaterial&&tt.setObject(ot,R),bt===!0&&Kt.setState(R,dt,!1),R.transparent===!0&&R.side===Ni&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,Pr(R,G,ot),R.side=cs,R.needsUpdate=!0,Pr(R,G,ot),R.side=Ni):Pr(R,G,ot)}this.compile=function(R,G,dt=null){dt===null&&(dt=R),tt!==null&&tt.renderStart(R,G,dt),D=It.get(dt),D.init(G),E.push(D),dt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(D.pushLight(lt),lt.castShadow&&D.pushShadow(lt))}),R!==dt&&R.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(D.pushLight(lt),lt.castShadow&&D.pushShadow(lt))}),D.setupLights(),tt!==null&&tt.updateLights(D.state.lightsArray),Ct=this.localClippingEnabled,bt=Kt.init(this.clippingPlanes,Ct),bt===!0&&Kt.setGlobalState(this.clippingPlanes,G),tt!==null&&se.render(D.state.shadowsArray,dt,G);const ot=new Set;return R.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const kt=lt.material;if(kt)if(Array.isArray(kt))for(let Zt=0;Zt<kt.length;Zt++){const Ht=kt[Zt];Lr(Ht,dt,G,lt),ot.add(Ht)}else Lr(kt,dt,G,lt),ot.add(kt)}),D=E.pop(),tt!==null&&tt.renderEnd(),ot},this.compileAsync=function(R,G,dt=null){const ot=this.compile(R,G,dt);return new Promise(lt=>{function kt(){if(ot.forEach(function(Zt){const jt=rt.get(Zt).currentProgram;(jt===void 0||jt.isReady())&&ot.delete(Zt)}),ot.size===0){lt(R);return}setTimeout(kt,10)}me.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let ka=null;function va(R){ka&&ka(R)}function Or(){Zi.stop()}function Xa(){Zi.start()}const Zi=new fy;Zi.setAnimationLoop(va),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){ka=R,Wt.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},Wt.addEventListener("sessionstart",Or),Wt.addEventListener("sessionend",Xa),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;tt!==null&&tt.renderStart(R,G);const dt=Wt.enabled===!0&&Wt.isPresenting===!0,ot=O!==null&&(ct===null||dt)&&O.begin(z,ct);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(G),G=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(z,R,G,ct),D=It.get(R,E.length),D.init(G),D.state.textureUnits=gt.getTextureUnits(),E.push(D),At.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(At,da,G.reversedDepth),Ct=this.localClippingEnabled,bt=Kt.init(this.clippingPlanes,Ct),U=Bt.get(R,N.length),U.init(),N.push(U),Wt.enabled===!0&&Wt.isPresenting===!0){const Zt=z.xr.getDepthSensingMesh();Zt!==null&&To(Zt,G,-1/0,z.sortObjects)}To(R,G,0,z.sortObjects),U.finish(),tt!==null&&tt.updateLights(D.state.lightsArray),z.sortObjects===!0&&U.sort(Et,Dt),le=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,le&&de.addToRenderList(U,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&Kt.beginShadows();const lt=D.state.shadowsArray;if(se.render(lt,R,G),bt===!0&&Kt.endShadows(),(ot&&O.hasRenderPass())===!1){const Zt=U.opaque,Ht=U.transmissive;if(D.setupLights(),G.isArrayCamera){const jt=G.cameras;if(Ht.length>0)for(let te=0,ce=jt.length;te<ce;te++){const ve=jt[te];gs(Zt,Ht,R,ve)}le&&de.render(R);for(let te=0,ce=jt.length;te<ce;te++){const ve=jt[te];Ao(U,R,ve,ve.viewport)}}else Ht.length>0&&gs(Zt,Ht,R,G),le&&de.render(R),Ao(U,R,G)}ct!==null&&K===0&&(gt.updateMultisampleRenderTarget(ct),gt.updateRenderTargetMipmap(ct)),ot&&O.end(z),R.isScene===!0&&R.onAfterRender(z,R,G),Yt.resetDefaultState(),X=-1,at=null,E.pop(),E.length>0?(D=E[E.length-1],gt.setTextureUnits(D.state.textureUnits),bt===!0&&Kt.setGlobalState(z.clippingPlanes,D.state.camera)):D=null,N.pop(),N.length>0?U=N[N.length-1]:U=null,tt!==null&&tt.renderEnd()};function To(R,G,dt,ot){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)dt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(fe)){ot&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(At);const Zt=xt.update(R),Ht=R.material;Ht.visible&&U.push(R,Zt,Ht,dt,pe.z,null,G)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(fe))){const Zt=xt.update(R),Ht=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),pe.copy(Zt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(At)),Array.isArray(Ht)){const jt=Zt.groups;for(let te=0,ce=jt.length;te<ce;te++){const ve=jt[te],Qt=Ht[ve.materialIndex];Qt&&Qt.visible&&U.push(R,Zt,Qt,dt,pe.z,ve,G)}}else Ht.visible&&U.push(R,Zt,Ht,dt,pe.z,null,G)}}const kt=R.children;for(let Zt=0,Ht=kt.length;Zt<Ht;Zt++)To(kt[Zt],G,dt,ot)}function Ao(R,G,dt,ot){const{opaque:lt,transmissive:kt,transparent:Zt}=R;D.setupLightsView(dt),bt===!0&&Kt.setGlobalState(z.clippingPlanes,dt),ot&&T.viewport(_t.copy(ot)),lt.length>0&&Qi(lt,G,dt),kt.length>0&&Qi(kt,G,dt),Zt.length>0&&Qi(Zt,G,dt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function gs(R,G,dt,ot){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ot.id]===void 0){const Qt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ot.id]=new Ui(1,1,{generateMipmaps:!0,type:Qt?ga:_i,minFilter:Dr,samples:Math.max(4,P.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const kt=D.state.transmissionRenderTarget[ot.id],Zt=ot.viewport||_t;kt.setSize(Zt.z*z.transmissionResolutionScale,Zt.w*z.transmissionResolutionScale);const Ht=z.getRenderTarget(),jt=z.getActiveCubeFace(),te=z.getActiveMipmapLevel();z.setRenderTarget(kt),z.getClearColor(F),ft=z.getClearAlpha(),ft<1&&z.setClearColor(16777215,.5),z.clear(),le&&de.render(dt);const ce=z.toneMapping;z.toneMapping=pa;const ve=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),D.setupLightsView(ot),bt===!0&&Kt.setGlobalState(z.clippingPlanes,ot),Qi(R,dt,ot),gt.updateMultisampleRenderTarget(kt),gt.updateRenderTargetMipmap(kt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Re=0,be=G.length;Re<be;Re++){const Je=G[Re],{object:qe,geometry:yn,material:Xt,group:cn}=Je;if(Xt.side===Ni&&qe.layers.test(ot.layers)){const ze=Xt.side;Xt.side=ri,Xt.needsUpdate=!0,Yl(qe,dt,ot,yn,Xt,cn),Xt.side=ze,Xt.needsUpdate=!0,Qt=!0}}Qt===!0&&(gt.updateMultisampleRenderTarget(kt),gt.updateRenderTargetMipmap(kt))}z.setRenderTarget(Ht,jt,te),z.setClearColor(F,ft),ve!==void 0&&(ot.viewport=ve),z.toneMapping=ce}function Qi(R,G,dt){const ot=G.isScene===!0?G.overrideMaterial:null;for(let lt=0,kt=R.length;lt<kt;lt++){const Zt=R[lt],{object:Ht,geometry:jt,group:te}=Zt;let ce=Zt.material;ce.allowOverride===!0&&ot!==null&&(ce=ot),Ht.layers.test(dt.layers)&&Yl(Ht,G,dt,jt,ce,te)}}function Yl(R,G,dt,ot,lt,kt){tt!==null&&lt.isNodeMaterial&&tt.setObject(R,lt),R.onBeforeRender(z,G,dt,ot,lt,kt),R.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),lt.onBeforeRender(z,G,dt,ot,R,kt),lt.transparent===!0&&lt.side===Ni&&lt.forceSinglePass===!1?(lt.side=ri,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,R,kt),lt.side=cs,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,R,kt),lt.side=Ni):z.renderBufferDirect(dt,G,ot,lt,R,kt),R.onAfterRender(z,G,dt,ot,lt,kt)}function Pr(R,G,dt){G.isScene!==!0&&(G=Me);const ot=rt.get(R),lt=D.state.lights,kt=D.state.shadowsArray,Zt=lt.state.version,Ht=Pt.getParameters(R,lt.state,kt,G,dt,D.state.lightProbeGridArray),jt=Pt.getProgramCacheKey(Ht);let te=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,ot.fog=G.fog;const ce=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=Tt.get(R.envMap||ot.environment,ce),ot.envMapRotation=ot.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",xi),te=new Map,ot.programs=te);let ve=te.get(jt);if(ve!==void 0){if(ot.currentProgram===ve&&ot.lightsStateVersion===Zt)return wo(R,Ht),ve}else Ht.uniforms=Pt.getUniforms(R),tt!==null&&R.isNodeMaterial&&tt.build(R,dt,Ht),R.onBeforeCompile(Ht,z),ve=Pt.acquireProgram(Ht,jt),te.set(jt,ve),ot.uniforms=Ht.uniforms;const Qt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Kt.uniform),wo(R,Ht),ot.needsLights=Zl(R),ot.lightsStateVersion=Zt,ot.needsLights&&(Qt.ambientLightColor.value=lt.state.ambient,Qt.lightProbe.value=lt.state.probe,Qt.sunLights.value=lt.state.sun,Qt.sunLightShadows.value=lt.state.sunShadow,Qt.directionalLights.value=lt.state.directional,Qt.directionalLightShadows.value=lt.state.directionalShadow,Qt.spotLights.value=lt.state.spot,Qt.spotLightShadows.value=lt.state.spotShadow,Qt.rectAreaLights.value=lt.state.rectArea,Qt.ltc_1.value=lt.state.rectAreaLTC1,Qt.ltc_2.value=lt.state.rectAreaLTC2,Qt.pointLights.value=lt.state.point,Qt.pointLightShadows.value=lt.state.pointShadow,Qt.hemisphereLights.value=lt.state.hemi,Qt.sunShadowMatrix.value=lt.state.sunShadowMatrix,Qt.sunShadowCascade.value=lt.state.sunShadowCascade,Qt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=lt.state.spotLightMatrix,Qt.spotLightMap.value=lt.state.spotLightMap,Qt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ot.lightProbeGrid=D.state.lightProbeGridArray.length>0,ot.currentProgram=ve,ot.uniformsList=null,ve}function Ro(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Kc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function wo(R,G){const dt=rt.get(R);dt.outputColorSpace=G.outputColorSpace,dt.batching=G.batching,dt.batchingColor=G.batchingColor,dt.instancing=G.instancing,dt.instancingColor=G.instancingColor,dt.instancingMorph=G.instancingMorph,dt.skinning=G.skinning,dt.morphTargets=G.morphTargets,dt.morphNormals=G.morphNormals,dt.morphColors=G.morphColors,dt.morphTargetsCount=G.morphTargetsCount,dt.numClippingPlanes=G.numClippingPlanes,dt.numIntersection=G.numClipIntersection,dt.vertexAlphas=G.vertexAlphas,dt.vertexTangents=G.vertexTangents,dt.toneMapping=G.toneMapping}function Co(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let dt=0,ot=R.length;dt<ot;dt++){const lt=R[dt];if(lt.texture!==null&&lt.boundingBox.containsPoint(C))return lt}return null}function Do(R,G,dt,ot,lt){G.isScene!==!0&&(G=Me),gt.resetTextureUnits();const kt=G.fog,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?G.environment:null,Ht=ct===null?z.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ie.workingColorSpace,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,te=Tt.get(ot.envMap||Zt,jt),ce=ot.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ve=!!dt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!dt.morphAttributes.position,Re=!!dt.morphAttributes.normal,be=!!dt.morphAttributes.color;let Je=pa;ot.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Je=z.toneMapping);const qe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,yn=qe!==void 0?qe.length:0,Xt=rt.get(ot),cn=D.state.lights;if(bt===!0&&(Ct===!0||R!==at)){const Ne=R===at&&ot.id===X;Kt.setState(ot,R,Ne)}let ze=!1;ot.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==cn.state.version||Xt.outputColorSpace!==Ht||lt.isBatchedMesh&&Xt.batching===!1||!lt.isBatchedMesh&&Xt.batching===!0||lt.isBatchedMesh&&Xt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Xt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Xt.instancing===!1||!lt.isInstancedMesh&&Xt.instancing===!0||lt.isSkinnedMesh&&Xt.skinning===!1||!lt.isSkinnedMesh&&Xt.skinning===!0||lt.isInstancedMesh&&Xt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Xt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Xt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Xt.instancingMorph===!1&&lt.morphTexture!==null||Xt.envMap!==te||ot.fog===!0&&Xt.fog!==kt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Kt.numPlanes||Xt.numIntersection!==Kt.numIntersection)||Xt.vertexAlphas!==ce||Xt.vertexTangents!==ve||Xt.morphTargets!==Qt||Xt.morphNormals!==Re||Xt.morphColors!==be||Xt.toneMapping!==Je||Xt.morphTargetsCount!==yn||!!Xt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,Xt.__version=ot.version);let Xn=Xt.currentProgram;ze===!0&&(Xn=Pr(ot,G,lt),tt&&ot.isNodeMaterial&&tt.onUpdateProgram(ot,Xn,Xt));let oi=!1,Ji=!1,Ee=!1;const ke=Xn.getUniforms(),en=Xt.uniforms;if(T.useProgram(Xn.program)&&(oi=!0,Ji=!0,Ee=!0),ot.id!==X&&(X=ot.id,Ji=!0),Xt.needsLights){const Ne=Co(D.state.lightProbeGridArray,lt);Xt.lightProbeGrid!==Ne&&(Xt.lightProbeGrid=Ne,Ji=!0)}if(oi||at!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(Y,"projectionMatrix",R.projectionMatrix),ke.setValue(Y,"viewMatrix",R.matrixWorldInverse);const fn=ke.map.cameraPosition;fn!==void 0&&fn.setValue(Y,$t.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&ke.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ke.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),at!==R&&(at=R,Ji=!0,Ee=!0)}if(Xt.needsLights&&(cn.state.sunShadowMap.length>0&&ke.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,gt),cn.state.directionalShadowMap.length>0&&ke.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,gt),cn.state.spotShadowMap.length>0&&ke.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,gt),cn.state.pointShadowMap.length>0&&ke.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,gt)),lt.isSkinnedMesh){ke.setOptional(Y,lt,"bindMatrix"),ke.setOptional(Y,lt,"bindMatrixInverse");const Ne=lt.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),ke.setValue(Y,"boneTexture",Ne.boneTexture,gt))}lt.isBatchedMesh&&(ke.setOptional(Y,lt,"batchingTexture"),ke.setValue(Y,"batchingTexture",lt._matricesTexture,gt),ke.setOptional(Y,lt,"batchingIdTexture"),ke.setValue(Y,"batchingIdTexture",lt._indirectTexture,gt),ke.setOptional(Y,lt,"batchingColorTexture"),lt._colorsTexture!==null&&ke.setValue(Y,"batchingColorTexture",lt._colorsTexture,gt));const li=dt.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&Q.update(lt,dt,Xn),(Ji||Xt.receiveShadow!==lt.receiveShadow)&&(Xt.receiveShadow=lt.receiveShadow,ke.setValue(Y,"receiveShadow",lt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=tw()),Ji){if(ke.setValue(Y,"toneMappingExposure",z.toneMappingExposure),Xt.needsLights&&Kl(en,Ee),kt&&ot.fog===!0&&ne.refreshFogUniforms(en,kt),ne.refreshMaterialUniforms(en,ot,pt,V,D.state.transmissionRenderTarget[R.id]),Xt.needsLights&&Xt.lightProbeGrid){const Ne=Xt.lightProbeGrid;en.probesSH.value=Ne.texture,en.probesMin.value.copy(Ne.boundingBox.min),en.probesMax.value.copy(Ne.boundingBox.max),en.probesResolution.value.copy(Ne.resolution)}Kc.upload(Y,Ro(Xt),en,gt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Kc.upload(Y,Ro(Xt),en,gt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ke.setValue(Y,"center",lt.center),ke.setValue(Y,"modelViewMatrix",lt.modelViewMatrix),ke.setValue(Y,"normalMatrix",lt.normalMatrix),ke.setValue(Y,"modelMatrix",lt.matrixWorld),ot.uniformsGroups!==void 0){const Ne=ot.uniformsGroups;for(let fn=0,_a=Ne.length;fn<_a;fn++){const Ql=Ne[fn];Rt.update(Ql,Xn),Rt.bind(Ql,Xn)}}return Xn}function Kl(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Zl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(R,G,dt){const ot=rt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=G,rt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:dt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const dt=rt.get(R);dt.__webglFramebuffer=G,dt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,dt=0){ct=R,W=G,K=dt;let ot=null,lt=!1,kt=!1;if(R){const Ht=rt.get(R);if(Ht.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Y.FRAMEBUFFER,Ht.__webglFramebuffer),_t.copy(R.viewport),Lt.copy(R.scissor),Nt=R.scissorTest,T.viewport(_t),T.scissor(Lt),T.setScissorTest(Nt),X=-1;return}else if(Ht.__webglFramebuffer===void 0)gt.setupRenderTarget(R);else if(Ht.__hasExternalTextures)gt.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ce=R.depthTexture;if(Ht.__boundDepthTexture!==ce){if(ce!==null&&rt.has(ce)&&(R.width!==ce.image.width||R.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(kt=!0);const te=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(te[G])?ot=te[G][dt]:ot=te[G],lt=!0):R.samples>0&&gt.useMultisampledRTT(R)===!1?ot=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(te)?ot=te[dt]:ot=te,_t.copy(R.viewport),Lt.copy(R.scissor),Nt=R.scissorTest}else _t.copy(mt).multiplyScalar(pt).floor(),Lt.copy(Ut).multiplyScalar(pt).floor(),Nt=Be;if(dt!==0&&(ot=Z),T.bindFramebuffer(Y.FRAMEBUFFER,ot)&&T.drawBuffers(R,ot),T.viewport(_t),T.scissor(Lt),T.setScissorTest(Nt),lt){const Ht=rt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ht.__webglTexture,dt)}else if(kt){const Ht=G;for(let jt=0;jt<R.textures.length;jt++){const te=rt.get(R.textures[jt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+jt,te.__webglTexture,dt,Ht)}}else if(R!==null&&dt!==0){const Ht=rt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ht.__webglTexture,dt)}X=-1};function Si(R){const G=rt.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=P.textureFormatReadable(R.format),G.__typeReadable=P.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,dt,ot,lt,kt,Zt,Ht=0){if(!(R&&R.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&(jt=jt[Zt]),jt){T.bindFramebuffer(Y.FRAMEBUFFER,jt);try{const te=R.textures[Ht],ce=te.format,ve=te.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht);const Qt=Si(te);if(Qt.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ot&&dt>=0&&dt<=R.height-lt&&Y.readPixels(G,dt,ot,lt,Ft.convert(ce),Ft.convert(ve),kt)}finally{const te=ct!==null?rt.get(ct).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,G,dt,ot,lt,kt,Zt,Ht=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Zt!==void 0&&(jt=jt[Zt]),jt)if(G>=0&&G<=R.width-ot&&dt>=0&&dt<=R.height-lt){T.bindFramebuffer(Y.FRAMEBUFFER,jt);const te=R.textures[Ht],ce=te.format,ve=te.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht);const Qt=Si(te);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Re),Y.bufferData(Y.PIXEL_PACK_BUFFER,kt.byteLength,Y.STREAM_READ),Y.readPixels(G,dt,ot,lt,Ft.convert(ce),Ft.convert(ve),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const be=ct!==null?rt.get(ct).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,be);const Je=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Qb(Y,Je,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Re),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,kt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Re),Y.deleteSync(Je),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,dt=0){const ot=Math.pow(2,-dt),lt=Math.floor(R.image.width*ot),kt=Math.floor(R.image.height*ot),Zt=G!==null?G.x:0,Ht=G!==null?G.y:0;gt.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,dt,0,0,Zt,Ht,lt,kt),T.unbindTexture()},this.copyTextureToTexture=function(R,G,dt=null,ot=null,lt=0,kt=0){let Zt,Ht,jt,te,ce,ve,Qt,Re,be;const Je=R.isCompressedTexture?R.mipmaps[kt]:R.image;if(dt!==null)Zt=dt.max.x-dt.min.x,Ht=dt.max.y-dt.min.y,jt=dt.isBox3?dt.max.z-dt.min.z:1,te=dt.min.x,ce=dt.min.y,ve=dt.isBox3?dt.min.z:0;else{const en=Math.pow(2,-lt);Zt=Math.floor(Je.width*en),Ht=Math.floor(Je.height*en),R.isDataArrayTexture?jt=Je.depth:R.isData3DTexture?jt=Math.floor(Je.depth*en):jt=1,te=0,ce=0,ve=0}ot!==null?(Qt=ot.x,Re=ot.y,be=ot.z):(Qt=0,Re=0,be=0);const qe=Ft.convert(G.format),yn=Ft.convert(G.type);let Xt;G.isData3DTexture?(gt.setTexture3D(G,0),Xt=Y.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(gt.setTexture2DArray(G,0),Xt=Y.TEXTURE_2D_ARRAY):(gt.setTexture2D(G,0),Xt=Y.TEXTURE_2D),T.activeTexture(Y.TEXTURE0),T.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(Y.UNPACK_ALIGNMENT,G.unpackAlignment);const cn=T.getParameter(Y.UNPACK_ROW_LENGTH),ze=T.getParameter(Y.UNPACK_IMAGE_HEIGHT),Xn=T.getParameter(Y.UNPACK_SKIP_PIXELS),oi=T.getParameter(Y.UNPACK_SKIP_ROWS),Ji=T.getParameter(Y.UNPACK_SKIP_IMAGES);T.pixelStorei(Y.UNPACK_ROW_LENGTH,Je.width),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Je.height),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,te),T.pixelStorei(Y.UNPACK_SKIP_ROWS,ce),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,ve);const Ee=R.isDataArrayTexture||R.isData3DTexture,ke=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const en=rt.get(R),li=rt.get(G),Ne=rt.get(en.__renderTarget),fn=rt.get(li.__renderTarget);T.bindFramebuffer(Y.READ_FRAMEBUFFER,Ne.__webglFramebuffer),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let _a=0;_a<jt;_a++)Ee&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,lt,ve+_a),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rt.get(G).__webglTexture,kt,be+_a)),Y.blitFramebuffer(te,ce,Zt,Ht,Qt,Re,Zt,Ht,Y.DEPTH_BUFFER_BIT,Y.NEAREST);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(lt!==0||R.isRenderTargetTexture||rt.has(R)){const en=rt.get(R),li=rt.get(G);T.bindFramebuffer(Y.READ_FRAMEBUFFER,j),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,J);for(let Ne=0;Ne<jt;Ne++)Ee?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,en.__webglTexture,lt,ve+Ne):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,en.__webglTexture,lt),ke?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,li.__webglTexture,kt,be+Ne):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,li.__webglTexture,kt),lt!==0?Y.blitFramebuffer(te,ce,Zt,Ht,Qt,Re,Zt,Ht,Y.COLOR_BUFFER_BIT,Y.NEAREST):ke?Y.copyTexSubImage3D(Xt,kt,Qt,Re,be+Ne,te,ce,Zt,Ht):Y.copyTexSubImage2D(Xt,kt,Qt,Re,te,ce,Zt,Ht);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else ke?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Xt,kt,Qt,Re,be,Zt,Ht,jt,qe,yn,Je.data):G.isCompressedArrayTexture?Y.compressedTexSubImage3D(Xt,kt,Qt,Re,be,Zt,Ht,jt,qe,Je.data):Y.texSubImage3D(Xt,kt,Qt,Re,be,Zt,Ht,jt,qe,yn,Je):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,kt,Qt,Re,Zt,Ht,qe,yn,Je.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,kt,Qt,Re,Je.width,Je.height,qe,Je.data):Y.texSubImage2D(Y.TEXTURE_2D,kt,Qt,Re,Zt,Ht,qe,yn,Je);T.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ze),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,Xn),T.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ji),kt===0&&G.generateMipmaps&&Y.generateMipmap(Xt),T.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?gt.setTextureCube(R,0):R.isData3DTexture?gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?gt.setTexture2DArray(R,0):gt.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){W=0,K=0,ct=null,T.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const nw="/scale-tour/tex/",Zc={moon:{type:"planet",tex:"moon",hi:!0,spin:.02},mercury:{type:"planet",tex:"mercury",hi:!0,spin:.02},mars:{type:"planet",tex:"mars",hi:!0,atmo:[.9,.55,.4,.35],tilt:.44,spin:.03},venus:{type:"planet",tex:"venus",hi:!0,atmo:[1,.9,.7,.5],spin:.01},earth:{type:"planet",tex:"earth",hi:!0,clouds:!0,atmo:[.35,.6,1,1],tilt:.41,spin:.03},neptune:{type:"planet",tex:"neptune",atmo:[.4,.55,1,.8],tilt:.49,spin:.03},uranus:{type:"planet",tex:"uranus",atmo:[.6,.9,.95,.8],tilt:1.7,spin:.03},saturn:{type:"planet",tex:"saturn",hi:!0,ring:!0,atmo:[.95,.85,.6,.3],tilt:.47,spin:.04},jupiter:{type:"planet",tex:"jupiter",hi:!0,atmo:[.95,.8,.6,.3],tilt:.05,spin:.04},sun:{type:"star",scale:10,contrast:.3,speck:.5,spots:5,spotSize:.03,active:3,actSize:.07,glow:.9,flame:.6,proms:[[.55,-1.45,.22,.16,1.45],[-.45,1.5,.16,.12,1.85],[.1,1.55,.11,.08,1.85]]},sirius:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4,proms:[[.4,-1.5,.12,.08,1.65]]},pollux:{type:"star",scale:4.5,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.5,-1.45,.3,.22,1.45],[-.5,1.45,.24,.18,1.65]]},arcturus:{type:"star",scale:4.2,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.6,-1.5,.32,.24,1.75],[-.4,1.5,.27,.2,1.55]]},aldebaran:{type:"star",scale:4,contrast:.5,speck:.5,spots:0,spotSize:0,active:3,actSize:.09,glow:.95,flame:.75,proms:[[.55,-1.45,.38,.28,1.55],[-.5,1.5,.32,.24,1.75]]},rigel:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1.05,flame:.4,proms:[[-.4,1.5,.12,.08,1.85]]},antares:{type:"star",scale:3.4,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.6,-1.45,.51,.38,1.45],[-.55,1.5,.46,.34,1.65],[.05,1.55,.27,.2,1.65]]},betelgeuse:{type:"star",scale:5,contrast:.45,speck:.55,spots:0,spotSize:0,active:4,actSize:.15,glow:1,flame:.9,proms:[[.62,-1.42,.57,.42,1.8],[-.6,1.48,.51,.38,1.75]]},uyscuti:{type:"star",scale:3.3,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.5,-1.5,.54,.4,1.55],[-.6,1.45,.49,.36,1.65],[-.1,-1.55,.3,.22,1.65]]},heliosphere:{type:"proc",kind:"heliosphere"},oort:{type:"proc",kind:"oort"},orion:{type:"image",src:"orion.webp",fill:1,aspect:1,mask:[.5,.5],sat:.85,gain:.95},omega:{type:"image",src:"omega.webp",fill:.62,aspect:1,mask:[.46,.46],sat:.8,gain:1.05},milkyway:{type:"galaxy",arms:2,pitch:.24,bar:1,bulge:.15,dust:1.15,seed:3.1,floc:.55,clump:1,ring:0,tilt:-.95,pa:.5},andromeda:{type:"galaxy",arms:2,pitch:.12,bar:0,bulge:.2,dust:1.25,seed:7.7,floc:.6,clump:.9,ring:.8,tilt:-1.34,pa:-.62,pal:{gold:[1,.9,.74],grey:[.66,.6,.96],blue:[.72,.62,1],dust:[.5,.2,.12],knot:[1,.42,.78],warm:[1,.8,.62],warmR:.6,knotAmt:1,gain:1.7},sats:[[.2,.3,.035,.03,0,1.6],[-.42,-.55,.11,.065,.9,.9]],field:1},localgroup:{type:"proc",kind:"group"},virgo:{type:"proc",kind:"supercluster"},laniakea:{type:"proc",kind:"laniakea"},universe:{type:"proc",kind:"universe"}},wp={saturn:2.3};function xy(o){let t=o>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e6/1e6)}const br=o=>Math.sqrt(-2*Math.log(o()+1e-9))*Math.cos(2*Math.PI*o()),us=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*snoise(p); p*=2.03; a*=0.5; } return s; }
`;function Yi(o){return o.blending=US,o.blendEquation=os,o.blendSrc=Pp,o.blendDst=$c,o.blendSrcAlpha=Pp,o.blendDstAlpha=$c,o.premultipliedAlpha=!0,o}const Ki=`vec4 premul(vec3 c, float o){ c *= o; return vec4(c, clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0)); }
`;let iw=null;const Qc=()=>iw??=new km(1,160,96);let aw=null;const Ur=()=>aw??=new bo(1,1);function Jc(o,t){return t.transparent=!0,o.fades.push({material:t,base:t.opacity}),t}const of=1.1,rw=new JE,Pl=new Map;let Sy=8;function jc(o,t=!0){let i=Pl.get(o);return i||(i=new Promise((r,l)=>{rw.load(nw+o,u=>{t&&(u.colorSpace=Qn),u.anisotropy=Sy,u.generateMipmaps=!0,u.minFilter=Dr,r(u)},void 0,l)}),Pl.set(o,i)),i}function sw(o,t){const i=new Gn,r={group:i,fades:[],dot:o.color},l=new Gn;i.add(l),r.rot=l;const u=new Gn;u.rotation.z=-(t.tilt??0),u.rotation.x=.18,l.add(u);const h=Jc(r,new xp({color:new Oe(o.color),roughness:1,metalness:0})),d=new on(Qc(),h);u.add(d);let p=null,m=null;if(t.clouds&&(m=Jc(r,new xp({color:16777215,roughness:1,opacity:0,depthWrite:!1})),p=new on(Qc(),m),p.scale.setScalar(1.006),u.add(p)),t.atmo){const[_,g,S,M]=t.atmo,A=Yi(new ln({uniforms:{uColor:{value:new q(_,g,S)},uStrength:{value:M},opacity:{value:1},uLight:{value:new q(-.55,.45,.7).normalize()}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+`uniform vec3 uColor; uniform float uStrength; uniform float opacity; uniform vec3 uLight; varying vec3 vN;
        void main(){ float mu = dot(normalize(vN), vec3(0.,0.,1.)); float rim = pow(1.0 - clamp(mu,0.,1.), 3.0);
          float lit = 0.14 + 0.86*smoothstep(-0.25, 0.6, dot(normalize(vN), uLight)); // faint rim survives on the night side
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,depthWrite:!1,transparent:!0}));r.fades.push({material:A,base:1});const b=new on(Qc(),A);b.scale.setScalar(1.035),i.add(b)}if(t.ring){const S=new Vm(1.24,2.27,256,1),M=S.attributes.position,A=S.attributes.uv;for(let L=0;L<M.count;L++){const I=Math.hypot(M.getX(L),M.getY(L));A.setXY(L,(I-1.24)/(2.27-1.24),.5)}const b=Jc(r,new xp({color:16777215,side:Ni,roughness:1,depthWrite:!1,opacity:1,alphaTest:.01}));jc("ring.webp").then(L=>{b.map=L,b.needsUpdate=!0});const y=new on(S,b);y.rotation.x=-Math.PI/2,u.add(y),u.rotation.x=.42}let v=0;return r.wantTex=_=>{const g=_&&t.hi?2:1;if(v>=g)return;v=g;const S=`${t.tex}_${g===2?"4k":"2k"}.webp`;jc(S).then(M=>{h.map=M,h.color.set(16777215),h.needsUpdate=!0}),m&&jc(`clouds_${g===2?"4k":"2k"}.webp`,!1).then(M=>{m.alphaMap=M,m.opacity=.9,r.fades.find(A=>A.material===m).base=.9,m.needsUpdate=!0})},r.update=(_,g,S,M,A)=>{M||(d.rotation.y+=g*(t.spin??.03)*of*A,p&&(p.rotation.y+=g*(t.spin??.03)*of*(.25+1*A)))},r}const Cp={sun:[44,.45,.6],sirius:[48,.55,.62],rigel:[46,.55,.62],pollux:[30,.3,.75],arcturus:[30,.3,.75],aldebaran:[28,.3,.78],antares:[17,.2,.88],betelgeuse:[16,.18,.9],uyscuti:[16,.2,.88]},SS={sun:{deep:[.92,.3,.03],mid:[1,.72,.26],bright:[1,.88,.5],hot:[1,.97,.86],prom:[.95,.3,.08],glow:[1,.36,.08]},sirius:{deep:[.14,.36,1],mid:[.5,.74,1],bright:[.86,.97,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.1,.5,1]},pollux:{deep:[.6,.17,.03],mid:[1,.5,.09],bright:[1,.76,.3],hot:[1,.95,.78],prom:[.8,.18,.04]},arcturus:{deep:[.6,.15,.03],mid:[1,.47,.08],bright:[1,.73,.27],hot:[1,.94,.76],prom:[.78,.16,.04]},aldebaran:{deep:[.55,.1,.02],mid:[1,.38,.06],bright:[1,.64,.2],hot:[1,.92,.7],prom:[.72,.12,.03]},rigel:{deep:[.16,.34,.98],mid:[.5,.7,1],bright:[.84,.94,1],hot:[.97,1,1],prom:[.45,.58,1],glow:[.12,.48,1]},antares:{deep:[.42,.04,.02],mid:[.9,.2,.04],bright:[1,.46,.12],hot:[1,.82,.55],prom:[.6,.06,.02]},betelgeuse:{deep:[.8,.26,.03],mid:[1,.54,.09],bright:[1,.82,.32],hot:[1,.95,.72],prom:[.7,.1,.03]},uyscuti:{deep:[.5,.07,.02],mid:[.96,.3,.04],bright:[1,.58,.14],hot:[1,.88,.62],prom:[.62,.08,.02]}},ow={sun:[5,.22,.17],sirius:[3,.1,.07],rigel:[3,.11,.08],pollux:[4,.3,.22],arcturus:[4,.32,.24],aldebaran:[4,.36,.27],antares:[5,.55,.42],betelgeuse:[5,.6,.46],uyscuti:[5,.55,.42]},lw=`
uniform vec3 uDeep, uMid, uBright, uHot;
uniform float uTime, uScale, uContrast, uPx, uSeed, opacity, uRim, uSpeck, uCell, uGran, uLimbD;
uniform vec4 uSpots[6];
uniform int uNSpots;
uniform vec4 uAct[5];
uniform int uNAct;
varying vec3 vN; varying vec3 vP;

float fbm7(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<7;i++){ s+=a*snoise(p); p=p*2.02+vec3(1.7,9.2,3.1); a*=0.52; } return s; }
// crisp cellular granulation: bright cell centres, dark lanes; feature points wander so the cells boil
vec3 hash33(vec3 p){ p = fract(p*vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx)*p.zyx); }
vec2 worley(vec3 p, float t){
  vec3 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++){
    vec3 g = vec3(float(x), float(y), float(z));
    vec3 h = hash33(i + g);
    vec3 o = 0.5 + 0.38*sin(t*(0.25 + 0.2*h) + 6.2831*h);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(d1, d2);
}
float ridged(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ float n=1.0-abs(snoise(p)); s+=a*n*n; p*=2.1; a*=0.5; } return s; }

// a small bundle of magnetic loops around an active region, drawn in its tangent plane
float loops(vec3 n, vec3 c, float size, float seed){
  vec3 u = normalize(cross(c, abs(c.y) < 0.9 ? vec3(0.,1.,0.) : vec3(1.,0.,0.)));
  vec3 v = cross(c, u);
  vec2 p = vec2(dot(n, u), dot(n, v)) / size;
  if (dot(n, c) < 0.0 || dot(p, p) > 9.0) return 0.0;
  float acc = 0.0;
  for (int k = 0; k < 12; k++){
    float fk = float(k);
    float ang = seed*6.2831 + (fk < 6.0 ? (fk-2.5)*0.24 : 3.1416 + (fk-8.5)*0.24);
    vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * p;
    float L = 0.35 + 0.45*fract(sin(fk*12.9 + seed*78.2)*43758.5);
    q.x -= L*0.9;   // loops leave the bright core and land outside it
    float h = L*(0.55 + 0.25*fract(sin(fk*4.1 + seed*9.7)*1e4));
    if (abs(q.x) < L) {
      float y = h*sqrt(1.0 - (q.x*q.x)/(L*L));
      float d1 = abs(q.y - y);
      float w = 0.016 + 0.01*fk/10.0;
      float br = 0.45 + 0.55*(snoise(vec3(q.x*6.0, fk*3.1, seed))*0.5 + 0.5);
      acc += (exp(-pow(d1/w, 2.0))*0.8 + exp(-pow(d1/(w*3.5), 2.0))*0.25) * (0.3 + 0.7*(1.0 - abs(q.x)/L)) * br;
    }
  }
  float smudge = exp(-dot(p*vec2(1.0, 1.5), p*vec2(1.0, 1.5))*1.8)*(0.55 + 0.45*snoise(vec3(p*3.0, seed)));
  float core = exp(-dot(p, p)*30.0);
  float plage = exp(-dot(p, p)*0.5)*(0.5 + 0.5*snoise(vec3(p*5.0, seed + 2.0)));
  return acc*0.6 + smudge*0.8 + core*0.9 + plage*0.18;
}

void main(){
  vec3 n = normalize(vP);
  float mu = clamp(dot(normalize(vN), vec3(0.,0.,1.)), 0., 1.);
  float t = uTime;
  // fade the finest detail when it would alias on a small disc
  float detail = smoothstep(40.0, 260.0, uPx);

  vec3 p = n*uScale + vec3(uSeed*7.0);
  // domain warp for turbulent, flowing structure
  vec3 w1 = vec3(snoise(p*0.6 + vec3(0.0, t*0.03, 0.0)), snoise(p*0.6 + vec3(5.2, 1.3, t*0.025)), snoise(p*0.6 + vec3(t*0.02, 8.1, 2.7)));
  vec3 pw = p + w1*0.38;
  // three scales of boiling turbulence, each drifting at its own pace
  float T = fbm7(pw + vec3(0.0, 0.0, t*0.04));
  vec3 w2 = vec3(snoise(pw*2.1 + vec3(t*0.05, 0.0, 3.3)), snoise(pw*2.1 + vec3(7.1, t*0.045, 0.0)), snoise(pw*2.1 + vec3(0.0, 2.2, t*0.05)));
  float mid = fbm(pw*2.6 + w2*0.18 + vec3(0.0, -t*0.06, 0.0));
  float fine = fbm(p*7.5 + w2*0.15 + vec3(t*0.09, 0.0, -t*0.07));
  float veins = ridged(pw*2.4 + w2*0.25 + vec3(t*0.03, 0.0, 0.0));
  float h = 0.5 + 0.32*T + 0.26*mid + 0.16*fine*detail;
  h += (veins - 0.3)*0.16*uContrast;
  h += 0.12;
  h = 0.5 + (h - 0.5)*(0.75 + uContrast);

  // granulation (fades out before it would alias)
  float gpx = uPx/uCell;
  float gv = 0.0;
  if (gpx > 2.5) {
    vec2 wl = worley(n*uCell + w1*0.6, t*1.0);
    float edge = wl.y - wl.x;
    float cell = smoothstep(0.02, 0.32, edge)*(1.0 - 0.45*smoothstep(0.1, 0.7, wl.x));
    gv = (cell - 0.55)*smoothstep(2.5, 7.0, gpx);
  }
  h += gv*uGran;

  // active regions: white-hot cores with loop filaments
  float act = 0.0;
  for (int k = 0; k < 5; k++){
    if (k >= uNAct) break;
    act += loops(n, normalize(uAct[k].xyz), uAct[k].w, float(k)*0.37 + uSeed);
  }
  // tiny hot speckles
  float sp = smoothstep(0.7, 0.95, snoise(n*uScale*7.0 + vec3(t*0.08)))*uSpeck*detail*0.5;

  // sunspots (the sun only)
  float spot = 1.0;
  for (int k=0; k<6; k++){
    if (k >= uNSpots) break;
    vec3 dir = normalize(uSpots[k].xyz);
    float r = uSpots[k].w;
    float ang = acos(clamp(dot(n, dir), -1.0, 1.0));
    if (ang > r*1.2) continue;
    float pen = smoothstep(r, r*0.78, ang);
    float umb = smoothstep(r*0.46, r*0.34, ang);
    spot *= mix(1.0, 0.55, pen);
    spot *= mix(1.0, 0.25, umb);
  }

  // color ramp
  vec3 c = mix(uDeep, uMid, smoothstep(0.08, 0.45, h));
  c = mix(c, uBright, smoothstep(0.52, 0.85, h));
  c = mix(c, uHot, smoothstep(0.86, 1.1, h)*0.8);
  c *= spot;
  c = mix(c, uDeep*0.5, (1.0 - spot)*0.6);
  // bright, glowing limb (this look has limb brightening, not darkening)
  float x = 1.0 - mu;
  float rim = pow(x, 2.2);
  c *= mix(1.0, uLimbD, smoothstep(0.15, 0.93, x));
  c = mix(c, uBright, smoothstep(0.86, 1.0, x)*0.65*uRim);
  c = mix(c, uHot, pow(x, 12.0)*0.7*uRim);
  // depth: darker intergranular lanes, never flat
  c *= mix(0.84, 1.0, smoothstep(0.1, 0.45, h));
  c += uHot*act*1.25 + uBright*sp*0.6;
  c = min(c, vec3(1.0));
  gl_FragColor = vec4(c*opacity, opacity);
}`,uw=`
uniform vec3 uGlow, uHotGlow;
uniform float opacity, uG, uTime, uStrength, uFlame;
varying vec2 vUv;
void main(){
  vec2 q = (vUv - 0.5)*2.0*uG;
  float d = length(q);
  if (d < 0.993) discard;
  float a = atan(q.y, q.x);
  float x = d - 1.0;
  // fiery fringe: flame tongues licking off the limb
  float fl = snoise(vec3(cos(a)*9.0, sin(a)*9.0, uTime*0.2 - x*8.0))*0.5 + 0.5;
  float fl2 = snoise(vec3(cos(a)*26.0, sin(a)*26.0, uTime*0.3 - x*22.0))*0.5 + 0.5;
  float flame = exp(-x/(0.012 + 0.05*fl*fl))*(0.6*fl + 0.4*fl2)*uFlame*1.2;
  float str = 0.75 + 0.25*snoise(vec3(cos(a)*3.0, sin(a)*3.0, uTime*0.01 + x*0.3));
  float glow = 0.9*exp(-x*13.0) + 0.22*exp(-x*6.0) + 0.26*exp(-x*4.5)*str + 0.06*exp(-x*1.4) + 0.02*exp(-x*0.5);
  glow *= smoothstep(uG, uG*0.5, d) * uStrength;
  vec3 c = mix(uGlow, uHotGlow, exp(-x*16.0)) * glow + mix(uGlow, uHotGlow, 0.5)*flame*0.5*uStrength;
  gl_FragColor = premul(c, opacity);
}`,cw=`
uniform float uGrow, uDrift;
varying vec2 vUv; varying vec3 vVN;
void main(){
  vUv = uv;
  vec3 p = position;
  float L = length(p);
  float r = mix(0.985, L, uGrow);          // the loop rises out of the surface
  p = p/L*r;
  // eruption: the top lifts away first, the loop swells as it goes
  float top = smoothstep(0.0, 0.25, L - 1.0);
  p.y += uDrift*(0.25 + 0.75*top);
  p.xz *= 1.0 + uDrift*0.9*top;
  vVN = normalize(normalMatrix*normal);
  gl_Position = projectionMatrix*modelViewMatrix*vec4(p, 1.0);
}`,fw=`
uniform vec3 uColor, uHotC;
uniform float opacity, uTime, uSeed, uReveal, uBright, uCore, uWide;
varying vec2 vUv; varying vec3 vVN;
void main(){
  float along = vUv.x;
  float m = min(along, 1.0 - along)*2.0;          // 0 at the footpoints, 1 at the apex
  float vis = smoothstep(uReveal + 0.02, uReveal - 0.2, m);
  if (vis <= 0.001) discard;
  float face = abs(vVN.z);
  float soft = pow(face, 1.6);                     // soft volumetric edge
  float core = pow(face, 9.0);                     // hot inner thread
  // plasma streams up from both feet and twists around the ribbon
  float a = vUv.y*6.2831 + along*9.0 + uTime*0.7 + uSeed;
  float flow = snoise(vec3(m*7.0 - uTime*0.45, cos(a)*0.9, sin(a)*0.9 + uSeed))*0.5 + 0.5;
  float fine = snoise(vec3(m*28.0 - uTime*0.9, cos(a)*2.5 + uSeed, sin(a)*2.5))*0.5 + 0.5;
  float knots = smoothstep(0.45, 0.95, flow);
  float feet = pow(1.0 - m, 5.0);
  float dens = soft*(0.3 + 0.7*knots)*(0.55 + 0.45*fine)*mix(1.15, 0.7, uWide);
  vec3 c = uColor*(0.7 + 0.9*knots);
  c = mix(c, uHotC, clamp(core*uCore*(0.4 + 0.8*fine) + feet*0.55, 0.0, 1.0));
  c += uHotC*feet*0.35;
  gl_FragColor = premul(c*dens*vis*uBright, opacity*clamp(uBright, 0.0, 1.0));
}`;function hw(o,t){const i=new Gn,r={group:i,fades:[],dot:"#fff"},l=o.tempK??5800,u=SS[o.id]??SS.sun;r.dot=`rgb(${u.bright[0]*255|0},${u.bright[1]*255|0},${u.bright[2]*255|0})`;const h=xy(l*7+3),d=(X,at)=>new q(Math.cos(X)*Math.sin(at),Math.sin(X),Math.cos(X)*Math.cos(at)),p=[];let m=0,v=0;for(let X=0;X<6;X++)if(X<t.spots){const at=X===0||h()<.45;at?(m=(h()<.5?-1:1)*(.14+h()*.32),v=-.8+h()*1.6):(v-=.03+h()*.11,m+=(h()-.5)*.07);const _t=d(m,v);p.push(new tn(_t.x,_t.y,_t.z,t.spotSize*(at?.8+h()*.6:.35+h()*.35)))}else p.push(new tn(0,0,1,0));const _=[];for(let X=0;X<5;X++)if(X<t.active){const at=d((h()-.5)*1.1,(h()-.5)*1.8);_.push(new tn(at.x,at.y,at.z,t.actSize*(.7+h()*.6)))}else _.push(new tn(0,0,1,0));const g=X=>new q(...X),S={uDeep:{value:g(u.deep)},uMid:{value:g(u.mid)},uBright:{value:g(u.bright)},uHot:{value:g(u.hot)},uTime:{value:0},uScale:{value:t.scale},uContrast:{value:t.contrast},uPx:{value:500},uSeed:{value:l%97*.13},uRim:{value:1},uSpeck:{value:t.speck},uCell:{value:(Cp[o.id]??[30,.3,.75])[0]},uGran:{value:(Cp[o.id]??[30,.3,.75])[1]},uLimbD:{value:(Cp[o.id]??[30,.3,.75])[2]},uSpots:{value:p},uNSpots:{value:t.spots},uAct:{value:_},uNAct:{value:t.active},opacity:{value:1}},M=new ln({uniforms:S,vertexShader:`varying vec3 vN; varying vec3 vP;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,fragmentShader:us+lw,transparent:!0,toneMapped:!1,premultipliedAlpha:!0});r.fades.push({material:M,base:1});const A=new Gn;i.add(A),r.rot=A;const b=new Gn;b.rotation.z=-.12,A.add(b);const y=new on(Qc(),M);y.renderOrder=0,b.add(y);const[L,I,C]=ow[o.id]??[4,.2,.15],U=[],D=new q(0,1,0),N=g(u.hot.map((X,at)=>X*.7+u.bright[at]*.3));for(let X=0;X<L;X++){const at=new Gn,_t=.7+h()*.6,Lt=I*_t,Nt=C*_t*1.25,F=new q(-Math.sin(Lt/2),Math.cos(Lt/2),0),ft=new q(Math.sin(Lt/2),Math.cos(Lt/2),0),wt=new q(0,0,1),V=[],pt=8;for(let Et=0;Et<pt;Et++){const Dt=Et<2,mt=[],Ut=Nt*(Dt?.85:.6+.5*h()),Be=(h()-.5)*Lt*(Dt?.1:.3),fe=(h()-.5)*Nt*.6,bt=h()*6.28,Ct=2+h()*3,At=(h()-.5)*.5;for(let Ge=0;Ge<=48;Ge++){const me=Ge/48,P=new q().copy(F).lerp(ft,me).normalize(),T=Math.sin(Math.PI*me),it=1+Ut*Math.pow(T,.75)*(1+.1*Math.sin(me*Ct*3.1+bt)),rt=P.multiplyScalar(it);rt.addScaledVector(wt,(Be+fe*T+.05*Nt*Math.sin(me*Ct*5+bt))*T),rt.x+=At*Nt*T*T,mt.push(rt)}const $t=new sy(mt),pe=Dt?Nt*(.13+.05*h()):Nt*(.018+.05*h()*h()),Me=new Xm($t,96,pe,Dt?10:7,!1),le={uColor:{value:g(u.prom)},uHotC:{value:N},opacity:{value:1},uTime:{value:0},uSeed:{value:X*5.1+Et*1.7},uGrow:{value:1},uDrift:{value:0},uReveal:{value:1.2},uBright:{value:1},uCore:{value:Dt?.2:1},uWide:{value:Dt?1:0}};V.push(le);const Ae=Yi(new ln({uniforms:le,vertexShader:cw,fragmentShader:Ki+us+fw,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ni}));r.fades.push({material:Ae,base:1});const Y=new on(Me,Ae);Y.renderOrder=1,at.add(Y)}b.add(at),U.push({g:at,u:V,t0:0,D:10,erupt:!1,hm:1,gap:0})}const E=new Ga,O=new Ga,z=new q,H=X=>{const at=h()<.65,_t=h()*Math.PI*2,Lt=at?-.12+h()*.35:.3+h()*.6,Nt=Math.sqrt(1-Lt*Lt);z.set(Math.cos(_t)*Nt,Math.sin(_t)*Nt,Lt),b.getWorldQuaternion(E).invert(),z.applyQuaternion(E).normalize(),X.g.quaternion.setFromUnitVectors(D,z).multiply(O.setFromAxisAngle(D,h()*Math.PI*2))},tt=(X,at,_t)=>{X.erupt=h()<.16,X.D=X.erupt?18+h()*8:9+h()*7,X.hm=X.erupt?1.2:.8+h()*.4,X.t0=at-_t*X.D,X.gap=.6+h()*3.5,H(X)};let Z=!1;const j=(X,at,_t)=>{let Lt=1,Nt=1.2,F=0,ft=1;const wt=V=>V*V*(3-2*V);if(at<.3){const V=wt(at/.3);Nt=V*1.2,Lt=.3+.5*V,ft=.35+.65*V}else if(at<.7){const V=(at-.3)/.4;Lt=.8+.3*wt(V),ft=1+.55*Math.exp(-Math.pow((V-.45)/.22,2))}else{const V=Math.min(1,(at-.7)/.3);X.erupt?(Lt=1.1,F=.9*V*V*X.hm*C*6,ft=1.1*(1-V)):(Lt=1.1-.35*V,Nt=1.2*(1-wt(V)),ft=1-.5*V)}for(const V of X.u)V.uGrow.value=Lt*X.hm,V.uReveal.value=Nt,V.uDrift.value=F,V.uBright.value=ft,V.uTime.value=_t},J=4.4,W={uGlow:{value:g(u.glow??u.mid.map((X,at)=>X*.75+u.bright[at]*.25))},uHotGlow:{value:g(u.bright.map((X,at)=>X*.6+u.hot[at]*.4))},opacity:{value:1},uG:{value:J},uTime:{value:0},uStrength:{value:t.glow},uFlame:{value:t.flame}},K=Yi(new ln({uniforms:W,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+us+uw,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:K,base:1});const ct=new on(Ur(),K);return ct.scale.set(2*J,2*J,1),ct.renderOrder=2,i.add(ct),r.update=(X,at,_t,Lt,Nt)=>{const F=Lt?0:X;S.uTime.value=F,W.uTime.value=F,Z||(Z=!0,U.forEach((ft,wt)=>tt(ft,X,Lt?.45:(wt+h()*.7)/U.length)));for(const ft of U){if(Lt){ft.g.visible=!0,j(ft,.5,0);continue}const wt=(X-ft.t0)/ft.D;if(wt>=1){ft.g.visible=!1,(wt-1)*ft.D>ft.gap&&tt(ft,X,0);continue}ft.g.visible=wt>=0,j(ft,Math.max(0,wt),F)}S.uPx.value=_t*ii.dpr,Lt||(b.rotation.y+=at*.012*of*Nt)},r}const dw=`
uniform float uTime, uArms, uPitch, uBar, uBulge, uDust, uSeed, uPx, opacity, uSpin, uFloc, uClump, uRing, uWarmR, uKnotAmt;
uniform vec3 uGold, uGrey, uBlue, uDustC, uKnot, uWarm;
uniform float uGain;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p + n*17.1)); }
mat2 R(float a){ return mat2(cos(a), -sin(a), sin(a), cos(a)); }
float fbm4(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.5; } return s; }
float fbm6(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<6;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.52; } return s; }
float ridge(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ float n=1.0-abs(snoise(p)); s+=a*n*n*n; p=p*2.1+2.7; a*=0.55; } return s; }

// crisp point stars on a grid sized to the screen
float stars(vec2 p, float N, float density, float seed){
  vec2 g = p*N; vec2 id = floor(g); vec2 f = fract(g);
  float h = h21(id + seed);
  if (h > density) return 0.0;
  vec2 o = 0.2 + 0.6*h22(id + seed*3.1);
  float cellPx = uPx*1.25/N;               // pixels per cell (quad spans 2.5 radii)
  float d = length(f - o)*cellPx;
  float b = pow(h/density, 3.0);
  return exp(-d*d/(0.35 + 0.9*b))*(0.35 + 0.65*b);
}

void main(){
  vec2 p = (vUv - 0.5)*2.5;                 // galaxy radius = 1
  p = R(uSpin)*p;
  float r = length(p);
  if (r > 1.25) discard;
  float lr = log(max(r, 0.015));
  float wind = lr/tan(uPitch);
  float th = atan(p.y, p.x);
  // unwound frame: spiral arms become straight, isotropic noise here shears into arm fragments
  vec2 q = R(-lr*1.2)*p;

  // bar + bulge
  float bar = exp(-pow(p.x/0.3, 2.0) - pow(p.y/0.085, 2.0))*uBar;
  float bulge = exp(-pow(r/uBulge, 0.75)*3.2);
  float core = exp(-r/0.018);

  // spiral arms (start at the bar ends for barred spirals)
  float phase = th - wind;
  float arms = 0.5 + 0.5*cos(uArms*phase);
  arms = pow(arms, 2.2);
  float armZone = smoothstep(0.1 + uBar*0.14, 0.3 + uBar*0.1, r)*smoothstep(1.05, 0.55, r);
  float floc = fbm6(vec3(q*6.0, uSeed));
  float frag = smoothstep(-0.3, 0.5, floc);
  float armL = (arms*(0.45 + 0.9*frag)*(1.0 - uFloc*0.4) + frag*frag*0.55*uFloc)*armZone;
  // rings (andromeda-like)
  float ring = uRing*(exp(-pow((r - 0.55)/0.07, 2.0)) + 0.6*exp(-pow((r - 0.8)/0.06, 2.0)))*(0.6 + 0.4*frag);
  armL = max(armL, ring);

  float disk = exp(-r/0.3)*smoothstep(1.1, 0.6, r);
  float haze = exp(-r/0.45)*smoothstep(1.2, 0.7, r);
  float lum = disk*(0.4 + 1.7*armL) + haze*0.22 + bulge*0.9 + bar*0.55 + core*0.8;

  // star-forming clumps: blue-white knots riding the arms
  float kn = snoise(vec3(q*38.0, uSeed + 2.0))*0.5 + 0.5;
  float kn2 = snoise(vec3(q*90.0, uSeed + 5.0))*0.5 + 0.5;
  float clumps = smoothstep(0.7, 0.95, kn*0.7 + kn2*0.45)*armL*uClump*smoothstep(0.18, 0.35, r)*smoothstep(1.0, 0.5, r);

  // dust: fine brown filaments, strongest on the inner edge of arms
  float armIn = pow(0.5 + 0.5*cos(uArms*(phase + 0.5/uArms)), 3.0);
  float broad = smoothstep(0.35, 0.8, ridge(vec3(q*6.5, uSeed + 9.0)));
  float fine = smoothstep(0.45, 0.8, ridge(vec3(q*17.0, uSeed + 11.0)));
  float patchy = smoothstep(-0.2, 0.4, fbm4(vec3(q*5.0, uSeed + 4.0)));
  float dustN = (broad*0.75 + fine*0.45)*(0.45 + 0.55*patchy) + armIn*patchy*0.35;
  float dust = dustN*mix(0.55, 1.0, max(armIn, ring*0.8))*smoothstep(0.07, 0.22, r)*smoothstep(1.1, 0.55, r)*uDust;
  dust += uRing*patchy*(exp(-pow((r - 0.47)/0.035, 2.0)) + 0.8*exp(-pow((r - 0.68)/0.04, 2.0)) + 0.5*exp(-pow((r - 0.34)/0.03, 2.0)))*uDust;
  dust = clamp(dust, 0.0, 0.92);

  vec3 gold = uGold;
  vec3 grey = uGrey;
  vec3 blue = uBlue;
  float bf = clamp((bulge*0.9 + bar*0.5 + core)/(lum + 1e-4), 0.0, 1.0);
  vec3 col = mix(grey, gold, bf);
  col = mix(col, uWarm, exp(-r/uWarmR)*0.45*(1.0 - bf));
  col = mix(col, mix(col, blue, 0.35), armL*(1.0 - bf));
  vec3 c = col*lum;
  c += blue*clumps*0.95 + uKnot*clumps*(step(0.93, kn)*0.4 + uKnotAmt*0.6*smoothstep(0.55, 0.8, kn2));
  // dust absorbs and reddens
  c *= mix(vec3(1.0), uDustC, dust);

  // resolved stars in the disc (sharp at any size), density follows the light
  float N = exp2(floor(log2(max(uPx/2.2, 64.0))));
  float dens = clamp(lum*0.5, 0.0, 0.5)*(1.0 - 0.75*bf);
  float st = stars(p, N, dens*0.35, uSeed) + stars(p, N*0.5, dens*0.2, uSeed + 7.0)*1.4;
  c += mix(vec3(1.0, 0.95, 0.88), blue, 0.5)*st*(1.0 - dust*0.7)*0.9;

  // gentle tone curve so the core glows golden without clipping
  c = 1.0 - exp(-c*1.9*uGain);
  float fade = smoothstep(1.25, 1.0, r);
  gl_FragColor = premul(c*fade, opacity);
}`,yy=`
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p + n*17.1)); }
float fbm4(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.5; } return s; }
// crisp stars on a grid; p in radii, uPx = px per radius
float starsP(vec2 p, float N, float density, float seed, float px){
  vec2 g = p*N; vec2 id = floor(g); vec2 f = fract(g);
  float h = h21(id + seed);
  if (h > density) return 0.0;
  vec2 o = 0.2 + 0.6*h22(id + seed*3.1);
  float d = length(f - o)*px/N;
  float b = pow(h/max(density, 1e-4), 3.0);
  return exp(-d*d/(0.3 + 1.1*b))*(0.3 + 0.7*b);
}
vec3 starCol(float h){ return h < 0.3 ? vec3(1.0, 0.72, 0.45) : h < 0.55 ? vec3(1.0, 0.95, 0.86) : h < 0.8 ? vec3(0.78, 0.86, 1.0) : vec3(1.0, 0.6, 0.72); }
`,pw=`
uniform float opacity, uPx, uSeed, uKind, uBright, uAsp;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5)*2.4;                 // quad spans 1.2 radii
  vec2 e = vec2(p.x, p.y/uAsp);
  float r = length(e);
  if (r > 1.2) discard;
  float px = max(uPx, 1.0);
  vec3 c;
  // on-screen glow so a member a few pixels across still reads
  float halo = exp(-r*r*2.5)*0.05*uBright;
  if (uKind < 0.5) {
    float I = exp(-pow(r, 0.55)*4.2)*2.2 + exp(-r*r*6.0)*0.25;
    c = vec3(1.0, 0.93, 0.84)*I*uBright;
    float N = exp2(floor(log2(clamp(px/2.0, 8.0, 2048.0))));
    float st = starsP(p, N, clamp(I*0.6, 0.0, 0.45), uSeed, px);
    c += vec3(1.0, 0.9, 0.8)*st*0.6;
  } else {
    float n = fbm4(vec3(p*2.2, uSeed));
    float haze = exp(-pow(r, 1.3)*2.4)*(0.75 + 0.45*n);
    vec2 bq = vec2(p.x*0.94 + p.y*0.34, -p.x*0.34 + p.y*0.94);
    float bar = exp(-pow(bq.x/0.55, 2.0) - pow(bq.y/0.15, 2.0))*(0.8 + 0.4*n);
    c = vec3(0.6, 0.66, 0.8)*haze*0.55 + vec3(0.92, 0.6, 0.68)*bar*0.55;
    // h-alpha knots and cyan clusters
    float kn = snoise(vec3(p*7.0, uSeed + 3.0))*0.5 + 0.5;
    float k2 = snoise(vec3(p*19.0, uSeed + 8.0))*0.5 + 0.5;
    float knots = smoothstep(0.72, 0.92, kn*0.65 + k2*0.5)*haze;
    c += vec3(1.0, 0.28, 0.38)*knots*0.9;
    // tarantula-like complex
    vec2 tq = p - vec2(-0.42, 0.34);
    float tar = exp(-dot(tq, tq)*60.0);
    c += vec3(1.0, 0.35, 0.45)*tar*0.9*(0.6 + 0.6*k2) + vec3(0.6, 0.95, 1.0)*exp(-dot(tq, tq)*500.0)*1.2;
    float I = haze + bar;
    float N = exp2(floor(log2(clamp(px/1.6, 8.0, 2048.0))));
    float h = h21(floor(p*N) + uSeed*1.7);
    float st = starsP(p, N, clamp(0.08 + I*0.5, 0.0, 0.6), uSeed, px) + starsP(p, N*0.5, clamp(I*0.2, 0.0, 0.3), uSeed + 5.0, px)*1.3;
    c += starCol(h)*st*0.85;
    // fine grain, like a long exposure
    c *= 0.85 + 0.3*h21(floor(p*px) + uSeed);
    c *= uBright;
  }
  c += vec3(0.85, 0.88, 1.0)*halo;
  c = 1.0 - exp(-c*1.6);
  gl_FragColor = premul(c*smoothstep(1.2, 0.9, r), opacity);
}`,mw=`
uniform float opacity, uPx, uSeed, uSpan;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5)*uSpan;
  float r = length(p);
  float edge = smoothstep(uSpan*0.5, uSpan*0.28, r);
  if (edge <= 0.0) discard;
  float px = max(uPx, 1.0);
  float N = exp2(floor(log2(clamp(px/5.0, 8.0, 2048.0))));
  float dens = 0.1 + 0.2*exp(-r*1.5);
  float h = h21(floor(p*N) + uSeed);
  float h2 = h21(floor(p*N*0.25) + uSeed + 3.0);
  float s1 = starsP(p, N, dens, uSeed, px);
  float s2 = starsP(p, N*0.25, dens*0.5, uSeed + 3.0, px);
  vec3 c = starCol(h)*s1*0.7 + starCol(h2)*s2*1.2;
  c += vec3(0.5, 0.42, 0.9)*exp(-r*r*1.6)*0.035;   // faint violet halo
  gl_FragColor = premul(c*edge, opacity);
}`,Wm="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ";function yS(o,t,i,r,l,u){const h={opacity:{value:1},uC:{value:new q(...l).multiplyScalar(u)}},d=Yi(new ln({uniforms:h,vertexShader:Wm,fragmentShader:Ki+"uniform float opacity; uniform vec3 uC; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*4.0)*(1.0 - smoothstep(0.8, 1.0, r)) + exp(-r*18.0)*1.5; gl_FragColor = premul(uC*g, opacity); }",depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:d,base:1});const p=new on(Ur(),d);return p.position.set(t,i,0),p.scale.setScalar(r*2),p}function My(o,t,i,r,l){const u={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uKind:{value:t},uBright:{value:r},uAsp:{value:l}},h=Yi(new ln({uniforms:u,vertexShader:Wm,fragmentShader:Ki+us+yy+pw,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:h,base:1}),{mesh:new on(Ur(),h),uPx:u.uPx}}function gw(o,t,i){const r={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uSpan:{value:t*2}},l=Yi(new ln({uniforms:r,vertexShader:Wm,fragmentShader:Ki+us+yy+mw,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new on(Ur(),l);return u.scale.setScalar(t*2),u.renderOrder=-1,{mesh:u,uPx:r.uPx}}const vw={gold:[1,.8,.52],grey:[.78,.8,.84],blue:[.7,.82,1],dust:[.42,.26,.13],knot:[1,.55,.6],warm:[.95,.82,.62],warmR:.22,knotAmt:0};function by(o,t){const i=new Gn,r={group:i,fades:[],dot:"#e9dcc4"},l=t.pal??vw,u=[];if(t.field){const M=gw(r,2.3,t.seed);i.add(M.mesh),u.push({u:M.uPx,k:1})}const h={uTime:{value:0},uArms:{value:t.arms},uPitch:{value:t.pitch},uBar:{value:t.bar},uBulge:{value:t.bulge},uDust:{value:t.dust},uSeed:{value:t.seed},uPx:{value:500},opacity:{value:1},uSpin:{value:0},uFloc:{value:t.floc},uClump:{value:t.clump},uRing:{value:t.ring},uGold:{value:new q(...l.gold)},uGrey:{value:new q(...l.grey)},uBlue:{value:new q(...l.blue)},uDustC:{value:new q(...l.dust)},uKnot:{value:new q(...l.knot)},uWarm:{value:new q(...l.warm)},uWarmR:{value:l.warmR},uKnotAmt:{value:l.knotAmt},uGain:{value:l.gain??1}},d=Yi(new ln({uniforms:h,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+us+dw,depthWrite:!1,transparent:!0,toneMapped:!1,side:Ni}));r.fades.push({material:d,base:1});const p=new Gn;i.add(p),r.rot=p;const m=new Gn;m.rotation.set(t.tilt,0,t.pa,"ZXY"),p.add(m);const v=new on(Ur(),d);v.scale.set(2.5,2.5,1),m.add(v);const _={opacity:{value:1}},g=Yi(new ln({uniforms:_,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+"uniform float opacity; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*18.0)*0.35 + exp(-r*6.0)*0.08; gl_FragColor = premul(vec3(1.0, 0.82, 0.58)*g, opacity); }",depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:g,base:1});const S=new on(Ur(),g);S.scale.set(t.bulge*3.2,t.bulge*3.2,1),S.renderOrder=3,i.add(S);for(const[M,A,b,y,L,I]of t.sats??[]){const C=My(r,0,t.seed+M*13,I,y/b);C.mesh.position.set(M,A,0),C.mesh.scale.setScalar(b*2.4),C.mesh.rotation.z=L,C.mesh.renderOrder=2,i.add(C.mesh),u.push({u:C.uPx,k:b})}return r.update=(M,A,b,y,L)=>{h.uPx.value=b*ii.dpr;for(const I of u)I.u.value=b*I.k*ii.dpr;y||(h.uSpin.value+=A*.008*of*L)},r}function _w(o,t){const i=new Gn,r={group:i,fades:[],dot:o.color,flat:!0},l={uMap:{value:null},opacity:{value:1},uMask:{value:new re(...t.mask)},uSat:{value:t.sat??1},uGain:{value:0},uAspect:{value:t.aspect}},u=Yi(new ln({uniforms:l,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+`uniform sampler2D uMap; uniform float opacity, uSat, uGain, uAspect; uniform vec2 uMask; varying vec2 vUv;
      void main(){
        if (uGain <= 0.0) discard;
        vec3 c = texture2D(uMap, vUv).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c *= vec3(1.03, 1.0, 0.95); // a touch warmer, toward the site's paper/tan
        vec2 q = (vUv - 0.5) / uMask;
        float d = length(q);
        float mask = smoothstep(1.0, 0.62, d);
        // crush the faint sky background so edges melt into ink
        c = max(c - 0.018, 0.0) * 1.02;
        gl_FragColor = premul(c * mask * uGain, opacity);
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:u,base:1});const h=new on(Ur(),u),d=2/t.fill;h.scale.set(d,d*t.aspect,1),i.add(h);let p=!1;return r.wantTex=()=>{p||(p=!0,jc(t.src).then(m=>{l.uMap.value=m,l.uGain.value=t.gain??1}))},r}function xw(o){const t={opacity:{value:1},uDpr:{value:1},uScale:{value:1}},i=Yi(new ln({uniforms:t,vertexShader:`attribute float aSize; attribute vec3 aColor; attribute float aAlpha; uniform float uDpr, uScale; varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        float s = aSize*uDpr*uScale; gl_PointSize = max(s, 1.0); vA *= min(1.0, s*s); }`,fragmentShader:Ki+`uniform float opacity; varying vec3 vC; varying float vA;
      void main(){ vec2 q = gl_PointCoord-0.5; float d = dot(q,q)*4.0; float a = exp(-d*3.2); if (a < 0.01) discard; gl_FragColor = premul(vC*a*vA, opacity); }`,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:i,base:1}),{m:i,u:t}}function Sw(o,t){const i=t.length,r=new Float32Array(i*3),l=new Float32Array(i),u=new Float32Array(i*3),h=new Float32Array(i);t.forEach((_,g)=>{r[g*3]=_.x,r[g*3+1]=_.y,r[g*3+2]=0,l[g]=_.s,u.set(_.c,g*3),h[g]=_.a});const d=new kn;d.setAttribute("position",new ai(r,3)),d.setAttribute("aSize",new ai(l,1)),d.setAttribute("aColor",new ai(u,3)),d.setAttribute("aAlpha",new ai(h,1));const{m:p,u:m}=xw(o),v=new EE(d,p);return v.frustumCulled=!1,{points:v,u:m}}function Cl(o,t,i,r){const l=new kn;l.setAttribute("position",new ai(new Float32Array(t),3));const u=Jc(o,new ny({color:i,opacity:r,depthWrite:!1,toneMapped:!1})),h=new ME(l,u);return h.frustumCulled=!1,h}function vo(o,t,i){const r={opacity:{value:1},uC:{value:new q(...t)},uRim:{value:i.rim},uRimW:{value:i.rimW},uFill:{value:i.fill},uInner:{value:i.inner??0},uDash:{value:i.dash??0},uNoise:{value:i.noise??0},uOff:{value:i.offset??0}},l=Yi(new ln({uniforms:r,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Ki+us+`uniform float opacity, uRim, uRimW, uFill, uInner, uDash, uNoise, uOff; uniform vec3 uC; varying vec2 vUv;
      void main(){
        vec2 q = (vUv-0.5)*2.4; // quad spans 1.2 radii
        vec2 qo = q - vec2(uOff, 0.0);
        float d = length(qo) * (1.0 + uOff*0.6*sign(qo.x)*0.0);
        float rim = uRim*exp(-pow((d-1.0)/uRimW, 2.0));
        float fill = uFill*smoothstep(1.02, 0.2, d)*pow(d, 1.5);
        float nz = uNoise > 0.0 ? (0.75 + 0.5*fbm(vec3(q*3.0, 1.7))) : 1.0;
        float inner = 0.0;
        if (uInner > 0.0) { float a = atan(q.y, q.x); float dash = uDash > 0.0 ? step(0.0, sin(a*uDash)) : 1.0; inner = 0.12*exp(-pow((length(q)-uInner)/0.006, 2.0))*dash; }
        float v = (rim + fill)*nz + inner;
        gl_FragColor = premul(uC*v, opacity);
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new on(Ur(),l);return u.scale.set(2.4,2.4,1),u}const Er=[1,.93,.82],Tr=[.83,.65,.45],yw=[.85,.9,1];function Mw(o,t,i=1){const r=[];for(let l=0;l<t;l++){const u=o()*Math.PI*2,h=Math.sqrt(o())*.96;r.push([Math.cos(u)*h,Math.sin(u)*h*i,o()])}return r}function MS(o,t,i=3){const r=[];for(let l=0;l<o.length;l++){const u=[];for(let h=0;h<o.length;h++){if(l===h)continue;const d=Math.hypot(o[l][0]-o[h][0],o[l][1]-o[h][1]);d<t&&u.push([d,h])}u.sort((h,d)=>h[0]-d[0]);for(const[,h]of u.slice(0,i))r.some(([d,p])=>d===h&&p===l)||r.push([l,h])}return r}function bw(o,t){const i=new Gn,r={group:i,fades:[],dot:o.color,flat:!0},l=xy(o.id.length*7919+17),u=[],h=v=>{const{points:_,u:g}=Sw(r,v);return i.add(_),u.push(g.uScale),g},d=[],p=v=>{const _=h(v);return d.push(_.uDpr),_};let m;switch(t.kind){case"heliosphere":{i.add(vo(r,[.72,.8,.95],{rim:.32,rimW:.035,fill:.07,inner:.78,dash:90,noise:1}));const v=[];for(let _=0;_<260;_++){const g=l()*Math.PI*2,S=.04+l()*.2,M=.35+l()*.5;v.push(Math.cos(g)*S,Math.sin(g)*S,0,Math.cos(g)*M,Math.sin(g)*M,0)}i.add(Cl(r,v,6050886,.35)),p([{x:0,y:0,s:6,c:[1,.95,.85],a:1},{x:0,y:0,s:18,c:[1,.85,.6],a:.35}]);break}case"oort":{const v=[];for(let _=0;_<42e3;_++){const g=l()*2-1,S=l()*Math.PI*2,M=Math.pow(.03+l()*.97,.33),A=Math.sqrt(1-g*g);v.push({x:M*A*Math.cos(S),y:M*g,s:.9+l()*1.1,c:yw,a:.18+l()*.4})}v.push({x:0,y:0,s:5,c:[1,.93,.8],a:1}),p(v),i.add(vo(r,[.8,.85,.95],{rim:.05,rimW:.12,fill:.03}));break}case"group":{i.add(vo(r,Tr,{rim:.12,rimW:.01,fill:.02,noise:1}));const v=[],_=[],g=(D,N,E,O,z)=>{const H=by({...o},{...z,field:0,sats:[]});H.group.position.set(N,E,0),H.group.scale.setScalar(O),H.fades.forEach(tt=>r.fades.push(tt)),i.add(H.group),v.push({o:H,r:O})},S=(D,N,E,O,z,H=1,tt=0)=>{const Z=My(r,O,D*91+N*37,z,H);Z.mesh.position.set(D,N,0),Z.mesh.scale.setScalar(E*2.4),Z.mesh.rotation.z=tt,i.add(Z.mesh),_.push({u:Z.uPx,r:E})},M=[-.2,-.12],A=[.25,.12];g("milkyway",M[0],M[1],.01,Zc.milkyway),g("andromeda",A[0],A[1],.0152,Zc.andromeda),g("triangulum",A[0]+.1,A[1]-.08,.006,{type:"galaxy",arms:2,pitch:.4,bar:0,bulge:.06,dust:.6,seed:5.3,floc:.9,clump:1.2,ring:0,tilt:-.9,pa:.4,pal:{...Zc.andromeda.pal,grey:[.62,.68,.9],knot:[1,.35,.5],gold:[1,.92,.8]}});const b=[[M[0]+.018,M[1]-.028,.0014,1,1.2,.8,.3],[M[0]+.03,M[1]-.027,8e-4,1,1,.7,.8],[M[0]-.05,M[1]+.077,6e-4,0,.55],[M[0]+.04,M[1]+.042,5e-4,0,.45],[M[0]-.045,M[1]-.025,4e-4,0,.4],[M[0]+.02,M[1]+.16,5e-4,0,.45],[M[0]+.003,M[1]+.006,6e-4,0,.35,.4,1.2],[A[0]-.004,A[1]-.007,9e-4,0,.8,.6,.9],[A[0]+.011,A[1]+.04,5e-4,0,.55],[A[0]-.006,A[1]+.05,5e-4,0,.5,.7],[-.35,.13,7e-4,1,.9,.8,.2],[.05,.35,8e-4,1,.7,.9,.5],[-.55,-.55,6e-4,1,.8,.45,1.3]];for(const[D,N,E,O,z,H,tt]of b)S(D,N,E,O,z,H??1,tt??0);const y=[{x:M[0],y:M[1],s:60,c:Er,a:.16},{x:A[0],y:A[1],s:76,c:[.9,.86,1],a:.16}];for(const[D,N,,E]of b)y.push({x:D,y:N,s:E?14:9,c:E?[.82,.8,1]:Er,a:E?.45:.35});for(let D=0;D<60;D++){const N=D<22?M:D<44?A:[0,0],E=D<44?.06:.4;y.push({x:N[0]+br(l)*E,y:N[1]+br(l)*E,s:1.3+l()*1.4,c:Er,a:.35+l()*.4})}p(y),r.labels=[{x:M[0],y:M[1],r:.01,name:"milky way",major:!0,left:!0},{x:A[0],y:A[1],r:.0152,name:"andromeda",major:!0},{x:A[0]+.1,y:A[1]-.08,r:.006,name:"triangulum"},{x:M[0]+.024,y:M[1]-.028,r:.008,name:"magellanic clouds"},{x:M[0]+.02,y:M[1]+.16,r:.001,name:"leo i"},{x:-.35,y:.13,r:.001,name:"ngc 6822"},{x:.05,y:.35,r:.001,name:"ic 1613"},{x:-.55,y:-.55,r:.001,name:"wlm"}],i.add(yS(r,M[0],M[1],.09,[.85,.8,.7],.05)),i.add(yS(r,A[0],A[1],.11,[.78,.74,.95],.05));const L=[],I=A[0]-M[0],C=A[1]-M[1],U=Math.hypot(I,C);for(let D=.05;D<.95;D+=.02){const N=D+.01;L.push(M[0]+I*D,M[1]+C*D,0,M[0]+I*N,M[1]+C*N,0)}i.add(Cl(r,L,10123861,.9)),r.labels.push({x:M[0]+I*.62,y:M[1]+C*.62,r:0,name:`${(U*5).toFixed(1)}m light-years`}),m=(D,N,E,O,z)=>{for(const H of v)H.o.update?.(D,N,E*H.r,O,z);for(const H of _)H.u.value=E*H.r*ii.dpr};break}case"supercluster":{const v=Mw(l,90,.72);v.push([.05,0,1]);const _=[],g=[];for(const[S,M]of MS(v,.42)){_.push(v[S][0],v[S][1],0,v[M][0],v[M][1],0);const A=Math.hypot(v[S][0]-v[M][0],v[S][1]-v[M][1]);for(let b=0;b<260*A;b++){const y=l();g.push({x:v[S][0]+(v[M][0]-v[S][0])*y+br(l)*.01,y:v[S][1]+(v[M][1]-v[S][1])*y+br(l)*.01,s:1+l(),c:l()<.7?Er:Tr,a:.25+l()*.4})}}for(const[S,M,A]of v)for(let b=0;b<30+A*90;b++)g.push({x:S+br(l)*.013,y:M+br(l)*.013,s:1.1+l()*1.3,c:Er,a:.4+l()*.5});i.add(Cl(r,_,6967864,.8)),p(g),i.add(vo(r,Tr,{rim:0,rimW:.1,fill:.05,noise:1}));break}case"laniakea":{const g=[];for(let M=0;M<220;M++){const A=l()*Math.PI*2,b=.5+l()*.48;let y=Math.cos(A)*b,L=Math.sin(A)*b*.86;const I=(l()-.5)*1.5;for(let C=0;C<80;C++){const U=.08-y,D=.05-L,N=Math.hypot(U,D);if(N<.03)break;const E=U/N+-D/N*I*N,O=D/N+U/N*I*N,z=y+E*.016,H=L+O*.016;g.push(y,L,0,z,H,0),y=z,L=H}}i.add(Cl(r,g,4866098,.9));const S=[];for(let M=0;M<16e3;M++){const A=l()*Math.PI*2,b=Math.pow(l(),.7)*.98;S.push({x:Math.cos(A)*b,y:Math.sin(A)*b*.86,s:.9+l()*1.1,c:l()<.8?Er:Tr,a:.15+l()*.4})}S.push({x:.08,y:.05,s:30,c:Tr,a:.3}),p(S),i.add(vo(r,Tr,{rim:.14,rimW:.008,fill:.04}));break}case"universe":{i.add(vo(r,Tr,{rim:.5,rimW:.05,fill:.05,noise:1}));const v=[];for(let S=0;S<700;S++){const M=l()*2-1,A=l()*Math.PI*2,b=Math.cbrt(l())*.985,y=Math.sqrt(1-M*M);v.push([b*y*Math.cos(A),b*M,l()])}const _=[],g=[];for(const[S,M]of MS(v,.16)){_.push(v[S][0],v[S][1],0,v[M][0],v[M][1],0);const A=Math.hypot(v[S][0]-v[M][0],v[S][1]-v[M][1]);for(let b=0;b<500*A;b++){const y=l();g.push({x:v[S][0]+(v[M][0]-v[S][0])*y+br(l)*.004,y:v[S][1]+(v[M][1]-v[S][1])*y+br(l)*.004,s:.8+l()*.8,c:l()<.6?Er:Tr,a:.1+l()*.18})}}for(const[S,M,A]of v)g.push({x:S,y:M,s:3+A*6,c:Er,a:.12+A*.14});g.push({x:0,y:0,s:3,c:[.96,.95,.92],a:1}),i.add(Cl(r,_,6179379,.5)),p(g);break}}return r.update=(v,_,g,S,M)=>{m?.(v,_,g,S,M);const A=Math.min(1,Math.max(.35,g/260));for(const b of u)b.value=A;for(const b of d)b.value=ii.dpr},r}class ii{constructor(t,i){this.bodies=i,this.renderer=new ew({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Qn,this.renderer.toneMapping=Cm,this.renderer.toneMappingExposure=1.15,Sy=this.renderer.capabilities.getMaxAnisotropy();const r=new tT(16775406,3.7);r.position.set(-1,.75,.85),this.scene.add(r),this.scene.add(new eT(8949920,.006))}bodies;static dpr=1;renderer;scene=new Dx;camera=new Vl(-1,1,1,-1,-10,10);objs=new Map;st=new Map;now=0;state(t){let i=this.st.get(t);return i||(i={vx:0,vy:0,last:-1e9,dragging:!1,tx:0,ty:0,gx:0,gy:0},this.st.set(t,i)),i}static qa=new Ga;static ax=new q;turn(t,i,r){const l=ii.qa;i&&(l.setFromAxisAngle(ii.ax.set(0,1,0),i),t.quaternion.premultiply(l)),r&&(l.setFromAxisAngle(ii.ax.set(1,0,0),r),t.quaternion.premultiply(l))}grabKind(t){const i=this.objs.get(t);return i?i.rot?"rotate":i.flat?"tilt":null:null}grab(t){const i=this.state(t);i.dragging=!0,i.vx=0,i.vy=0,i.last=this.now}drag(t,i,r,l,u){const h=this.objs.get(t),d=this.state(t);if(h)if(d.last=this.now,h.rot){const p=i/Math.max(l,40),m=r/Math.max(l,40);this.turn(h.rot,p,m);const v=Math.min(1,u*18);d.vx+=(p/Math.max(u,1/240)-d.vx)*v,d.vy+=(m/Math.max(u,1/240)-d.vy)*v}else h.flat&&(d.gx=Math.max(-.35,Math.min(.35,d.gx+i/Math.max(l,80)*.5)),d.gy=Math.max(-.35,Math.min(.35,d.gy+r/Math.max(l,80)*.5)))}release(t,i){const r=this.state(t);r.dragging=!1,r.last=this.now,r.gx=0,r.gy=0,i&&(r.vx=0,r.vy=0);const l=12;r.vx=Math.max(-l,Math.min(l,r.vx)),r.vy=Math.max(-l,Math.min(l,r.vy))}w=1;h=1;resize(t,i,r){this.w=t,this.h=i,ii.dpr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,i,!1)}obj(t){let i=this.objs.get(t);if(!i){const r=this.bodies[t],l=Zc[r.id];i=l.type==="planet"?sw(r,l):l.type==="star"?hw(r,l):l.type==="image"?_w(r,l):l.type==="galaxy"?by(r,l):bw(r,l),i.group.visible=!1,this.scene.add(i.group),this.objs.set(t,i)}return i}has(t){return this.objs.has(t)}rtA=null;rtB=null;rtC=null;fsScene=new Dx;fsCam=new Vl(-1,1,1,-1,0,1);fsQuad=null;blurMat=null;compMat=null;setupDof(){const t=Math.max(1,Math.round(this.w*ii.dpr)),i=Math.max(1,Math.round(this.h*ii.dpr)),r=(l,u,h)=>{const d=new Ui(l,u,{samples:h,depthBuffer:h>0});return d.texture.colorSpace=Qn,d.texture.internalFormat="RGBA8",d};if((!this.rtA||this.rtA.width!==t||this.rtA.height!==i)&&(this.rtA?.dispose(),this.rtB?.dispose(),this.rtC?.dispose(),this.rtA=r(t,i,4),this.rtA.isXRRenderTarget=!0,this.rtB=r(Math.ceil(t/2),Math.ceil(i/2),0),this.rtC=r(Math.ceil(t/2),Math.ceil(i/2),0)),!this.fsQuad){const l="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }";this.blurMat=new ln({uniforms:{tMap:{value:null},uDir:{value:new re}},vertexShader:l,fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tMap, vUv)*0.2270;
            c += (texture2D(tMap, vUv + uDir*1.3846) + texture2D(tMap, vUv - uDir*1.3846))*0.3162;
            c += (texture2D(tMap, vUv + uDir*3.2308) + texture2D(tMap, vUv - uDir*3.2308))*0.0703;
            gl_FragColor = c;
          }`,depthTest:!1,depthWrite:!1,blending:Wi,toneMapped:!1}),this.compMat=new ln({uniforms:{tSharp:{value:null},tSoft:{value:null},uAmt:{value:0}},vertexShader:l,fragmentShader:`uniform sampler2D tSharp, tSoft; uniform float uAmt; varying vec2 vUv;
          void main(){ gl_FragColor = mix(texture2D(tSharp, vUv), texture2D(tSoft, vUv), uAmt); }`,depthTest:!1,depthWrite:!1,blending:Wi,toneMapped:!1}),this.fsQuad=new on(new bo(1,1),this.blurMat),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad)}}renderDof(t,i){this.setupDof();const r=this.renderer,l=this.camera,u=this.rtA,h=this.rtB,d=this.rtC,p=this.fsQuad,m=this.blurMat,v=this.compMat;t.group.visible=!1,r.setRenderTarget(u),r.clear(),r.render(this.scene,l),t.group.visible=!0;const _=2.6*ii.dpr*i/2;p.material=m,m.uniforms.tMap.value=u.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=d.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),r.setRenderTarget(null),r.clear(),p.material=v,v.uniforms.tSharp.value=u.texture,v.uniforms.tSoft.value=d.texture,v.uniforms.uAmt.value=Math.min(1,i*1.4),r.render(this.fsScene,this.fsCam);const g=[];for(const S of this.objs.values())S!==t&&S.group.visible&&(S.group.visible=!1,g.push(S));r.autoClear=!1,r.render(this.scene,l),r.autoClear=!0;for(const S of g)S.group.visible=!0}render(t,i,r,l,u,h,d=0){this.now=i;for(const g of this.objs.values())g.group.visible=!1;let p=10,m=0;for(const g of t){const S=this.obj(g.i);S.wantTex?.(u&&Math.abs(g.i-h)<=1),S.group.visible=!0,S.group.position.set(g.x-this.w/2,this.h/2-g.y,m),S.group.scale.setScalar(g.rs);for(const y of S.fades){const L=y.base*g.alpha;y.material.opacity=L;const I=y.material.uniforms;I&&I.opacity&&(I.opacity.value=L)}const M=this.state(g.i);if(S.rot&&!M.dragging&&(M.vx||M.vy)){this.turn(S.rot,M.vx*r,M.vy*r);const y=Math.exp(-r*2.4);M.vx*=y,M.vy*=y,Math.abs(M.vx)+Math.abs(M.vy)<.002&&(M.vx=0,M.vy=0),(M.vx||M.vy)&&(M.last=i)}if(S.flat){const y=1-Math.exp(-r*(M.dragging?14:5));M.tx+=(M.gx-M.tx)*y,M.ty+=(M.gy-M.ty)*y,S.group.rotation.set(M.ty,M.tx,0)}const A=i-M.last,b=l?0:Math.min(1,Math.max(0,(A-3)/2));S.update?.(i,r,g.rs,l,b),p=Math.max(p,g.rs*3),m+=0}const v=this.camera;v.left=-this.w/2,v.right=this.w/2,v.top=this.h/2,v.bottom=-this.h/2,v.near=-p*1.1,v.far=p*1.1,v.position.set(0,0,0),v.updateProjectionMatrix();const _=this.objs.get(h);d>.01&&_&&_.group.visible&&t.length>1?this.renderDof(_,d):this.renderer.render(this.scene,v)}async warm(t,i){this.prefetch(t,i);for(let u=0;u<4;u++){const h=Pl.size;if(await Promise.allSettled([...Pl.values()]),Pl.size===h)break}const r=[t-1,t,t+1,t+2].filter(u=>u>=0&&u<this.bodies.length).map(u=>this.obj(u)),l=r.map(u=>u.group.visible);r.forEach(u=>{u.group.visible=!0});try{const u=this.renderer;u.compileAsync&&u.extensions.has("KHR_parallel_shader_compile")?await u.compileAsync(this.scene,this.camera):u.compile(this.scene,this.camera)}catch{}r.forEach((u,h)=>{u.group.visible=l[h]})}prefetch(t,i){for(const r of[t,t+1,t-1,t+2])r<0||r>=this.bodies.length||this.obj(r).wantTex?.(i&&Math.abs(r-t)<=1)}}class Ew{constructor(t){this.canvas=t,this.ctx=t.getContext("2d",{alpha:!1})}canvas;ctx;field=null;margin=0;w=0;h=0;dpr=1;meteors=[];next=4+Math.random()*5;twinkle=[];reduced=!1;resize(t,i,r){this.w=t,this.h=i,this.dpr=r,this.canvas.width=Math.round(t*r),this.canvas.height=Math.round(i*r),this.build()}build(){const t=this.canvas.height,i=this.dpr;this.margin=Math.round(this.canvas.width*.12);const r=this.canvas.width+this.margin,l=document.createElement("canvas");l.width=r,l.height=t;const u=l.getContext("2d");u.fillStyle="#0a0a0b",u.fillRect(0,0,r,t);let h=918273;const d=()=>(h=h*16807%2147483647)/2147483647,p=()=>Math.sqrt(-2*Math.log(d()+1e-9))*Math.cos(2*Math.PI*d()),m=-.42,v=r*.5,_=t*.55,g=Math.cos(m),S=Math.sin(m),M=(I,C,U,D,N)=>{for(let E=0;E<D;E++){const O=(d()-.5)*Math.hypot(r,t)*1.1,z=I+p()*C,H=v+g*O-S*z,tt=_+S*O+g*z,Z=C*(.6+d()*1.6),j=u.createRadialGradient(H,tt,0,H,tt,Z);j.addColorStop(0,U.replace("A",String(N*(.5+d())))),j.addColorStop(1,U.replace("A","0")),u.fillStyle=j,u.fillRect(H-Z,tt-Z,Z*2,Z*2)}},A=Math.min(r,t)*.1;M(0,A,"rgba(200,190,175,A)",90,.0065),M(0,A*.45,"rgba(225,205,180,A)",70,.006);const b=r*t/(i*i),y=Math.round(b/520),L=(I,C,U)=>{const D=d(),N=D<.12?[255,214,170]:D<.25?[200,215,255]:[244,241,234],E=Math.min(1,.12+Math.pow(U,2.2)*.9),O=(.55+U*1.1)*i;if(O<=1.35)u.fillStyle=`rgba(${N[0]},${N[1]},${N[2]},${E*Math.max(.35,O)})`,u.fillRect(Math.round(I),Math.round(C),1,1);else{const z=O,H=u.createRadialGradient(I,C,0,I,C,z);H.addColorStop(0,`rgba(${N[0]},${N[1]},${N[2]},${E})`),H.addColorStop(.35,`rgba(${N[0]},${N[1]},${N[2]},${E*.45})`),H.addColorStop(1,`rgba(${N[0]},${N[1]},${N[2]},0)`),u.fillStyle=H,u.beginPath(),u.arc(I,C,z,0,Math.PI*2),u.fill()}};for(let I=0;I<y;I++)L(d()*r,d()*t,Math.pow(d(),6));for(let I=0;I<y*.9;I++){const C=(d()-.5)*Math.hypot(r,t)*1.1,U=p()*A*.7,D=v+g*C-S*U,N=_+S*C+g*U;D<0||N<0||D>=r||N>=t||L(D,N,Math.pow(d(),9)*.6)}this.twinkle=[];for(let I=0;I<Math.round(b/18e3);I++)this.twinkle.push({x:d()*r,y:d()*t,r:(.8+d()*.8)*i,a:.3+d()*.5,p:d()*6.28});this.field=l}draw(t,i,r){const{ctx:l}=this,u=this.canvas.width;if(!this.field)return;l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1;const h=Math.round(Math.max(0,Math.min(1,t))*this.margin);if(l.drawImage(this.field,-h,0),!this.reduced){for(const d of this.twinkle){const p=d.a*(.5+.5*Math.sin(i*1.3+d.p)),m=d.x-h;m<0||m>u||(l.fillStyle=`rgba(244,241,234,${p*.6})`,l.fillRect(Math.round(m),Math.round(d.y),Math.max(1,Math.round(d.r)),Math.max(1,Math.round(d.r))))}this.meteorsStep(r)}}meteorsStep(t){const{ctx:i}=this,r=this.dpr;if(document.visibilityState==="visible"&&(this.next-=t),this.next<=0){this.next=6+Math.random()*9;const l=this.w,u=this.h,h=Math.random()<.5?-1:1,d=.25+Math.random()*.35,p=700+Math.random()*600;this.meteors.push({x:l*(.15+Math.random()*.7),y:u*(.05+Math.random()*.35),vx:Math.cos(d)*p*h,vy:Math.sin(d)*p,len:110+Math.random()*130,life:.55+Math.random()*.5,age:0,tan:Math.random()<.35,w:1+Math.random()*.6})}i.globalCompositeOperation="lighter",this.meteors=this.meteors.filter(l=>{if(l.age+=t,l.age>l.life)return!1;l.x+=l.vx*t,l.y+=l.vy*t;const u=l.age/l.life,h=Math.min(1,u*6)*(1-Math.pow(u,2)),d=Math.hypot(l.vx,l.vy),p=l.vx/d,m=l.vy/d,v=l.len*Math.min(1,u*4),_=l.x*r,g=l.y*r,S=(l.x-p*v)*r,M=(l.y-m*v)*r,A=-m*l.w*r*.5,b=p*l.w*r*.5,y=l.tan?"212,165,116":"244,241,234",L=i.createLinearGradient(_,g,S,M);return L.addColorStop(0,`rgba(${y},${.85*h})`),L.addColorStop(.25,`rgba(${y},${.35*h})`),L.addColorStop(1,`rgba(${y},0)`),i.fillStyle=L,i.beginPath(),i.moveTo(_+A,g+b),i.lineTo(S,M),i.lineTo(_-A,g-b),i.closePath(),i.fill(),i.fillStyle=`rgba(255,250,240,${.9*h})`,i.beginPath(),i.arc(_,g,l.w*r*.6,0,Math.PI*2),i.fill(),!0}),i.globalCompositeOperation="source-over"}}const bS=.2,ES=13*Math.PI/180,TS=[Math.cos(ES),-Math.sin(ES)],Dp=.06;function AS(o,t){let i=Math.min(window.devicePixelRatio||1,3);const r=3840*2160*1.6;return o*t*i*i>r&&(i=Math.sqrt(r/(o*t))),Math.max(1,i)}function Am(o,t){return Math.max(1,Math.min(o/1600,t/1e3,2.4))}class Tw{constructor(t,i,r,l=Cr){this.bgCanvas=t,this.overlay=r,this.bodies=l,this.bg=new Ew(t);try{this.gl=new ii(i,l)}catch(u){console.warn("webgl unavailable, drawing flat discs",u)}this.octx=r.getContext("2d")}bgCanvas;overlay;bodies;gl=null;bg;octx;w=0;h=0;dpr=1;hiRes=!1;lastTime=0;layout={cx:0,cy:0,base:200};reduced=!1;ui=1;quality=1;hitInfo=null;dofOn=!0;resize(t,i){this.w=t,this.h=i,this.dpr=Math.max(1,AS(t,i)*this.quality),this.ui=Am(t,i),this.overlay.width=Math.round(t*this.dpr),this.overlay.height=Math.round(i*this.dpr),this.bg.resize(t,i,this.dpr),this.gl?.resize(t,i,this.dpr);const r=t<768;r&&(this.dofOn=!1),this.bgCanvas.style.filter=this.dofOn?"blur(0.6px)":"";const l=r?Math.min(t*.34,i*.2):Math.min(i*.3,t*.22);this.layout=r?{cx:t*.5,cy:i*.36,base:l}:{cx:t*.6,cy:i*.5,base:l},this.hiRes=l*2*this.dpr>700}lowerQuality(){return this.dofOn?(this.dofOn=!1,this.bgCanvas.style.filter="",!0):AS(this.w,this.h)*this.quality<=1.01?!1:(this.quality*=.8,this.resize(this.w,this.h),!0)}hit(t,i){const r=this.hitInfo;if(!r||!this.gl)return null;const l=this.gl.grabKind(r.i);if(!l)return null;const u=r.rs*(l==="rotate"?1.04:.9);return Math.hypot(t-r.x,i-r.y)>Math.max(u,16)?null:{i:r.i,kind:l,rs:r.rs}}grab(t){this.gl?.grab(t)}drag(t,i,r,l,u){this.gl?.drag(t,i,r,l,u)}release(t){this.gl?.release(t,this.reduced)}prefetch(t){this.gl?.prefetch(t,this.hiRes)}async ready(t){await Promise.all([document.fonts?.ready??Promise.resolve(),this.gl?.warm(t,this.hiRes)])}draw(t,i){const r=this.lastTime?Math.min(.05,i-this.lastTime):.016;this.lastTime=i;const{w:l,h:u,bodies:h}=this,d=h.length;t=Math.max(0,Math.min(d-1,t));let p=Math.floor(t),m=t-p;p>=d-1&&(p=d-2,m=1);const v=p+1,_=h[p].radiusKm,g=h[v].radiusKm,S=Math.exp(Math.log(_)+(Math.log(g)-Math.log(_))*m),{cx:M,cy:A,base:b}=this.layout,y=b/S;this.bg.reduced=this.reduced,this.bg.draw(t/(d-1),i,r);const L=z=>h[z].radiusKm*(wp[h[z].id]??1),I=new Array(d);I[p]=0;for(let z=p+1;z<d;z++)I[z]=I[z-1]+L(z-1)+L(z)+bS*h[z].radiusKm;for(let z=p-1;z>=0;z--)I[z]=I[z+1]-(L(z+1)+L(z)+bS*h[z+1].radiusKm);const C=m*I[v]*(S/g),U=Math.round(t),D=Math.max(0,1-Math.abs(t-U)*3),N=Math.hypot(l,u),E=this.octx;E.setTransform(this.dpr,0,0,this.dpr,0,0),E.clearRect(0,0,l,u);const O=[];for(let z=d-1;z>=0;z--){const H=z-t,tt=H<=0?1:H<1?Dp+(1-Dp)*(1-H):H<2?Dp*(2-H):0;if(tt<=.001)continue;const Z=h[z].radiusKm*y;if(Z<.04)continue;const j=(I[z]-C)*y,J=M+TS[0]*j,W=A+TS[1]*j;if(!(Z>N*8)){if(Z<1.5){const K=this.gl?.has(z)?this.gl.obj(z).dot:h[z].color;E.globalAlpha=tt*Math.min(1,.35+Z),E.fillStyle=K,E.beginPath(),E.arc(J,W,Math.max(Z,.75),0,Math.PI*2),E.fill(),E.globalAlpha=1}else this.gl?O.push({i:z,x:J,y:W,rs:Z,alpha:tt}):(E.globalAlpha=tt,E.fillStyle=h[z].color,E.beginPath(),E.arc(J,W,Z,0,Math.PI*2),E.fill(),E.globalAlpha=1);if(z===U-1&&D>.01&&this.marker(J,W,Z*(wp[h[z].id]??1),h[z].name,D),z===U&&(this.hitInfo=D>.6&&Z>8?{i:z,x:J,y:W,rs:Z}:null),z===U&&D>.01&&this.gl?.has(z)){const K=this.gl.obj(z).labels;K&&this.labels(J,W,Z,K,D)}if(z===U&&D>.01&&Z>20){const K=Z*(wp[h[z].id]??1)*1.1+8;E.strokeStyle=`rgba(212,165,116,${.32*D})`,E.lineWidth=1,E.beginPath();const ct=-Math.PI*.62;E.arc(J,W,K,ct,ct+Math.PI*2*(this.reduced?1:1-Math.pow(1-D,3))),E.stroke()}}}this.gl?.render(O,i,r,this.reduced,this.hiRes,U,this.dofOn?D*D:0)}labels(t,i,r,l,u){const h=this.octx,d=this.ui;h.textBaseline="middle",h.textAlign="left";for(const p of l){const m=t+p.x*r,v=i-p.y*r;if(p.r===0){h.font=`${Math.round(10*d)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=`rgba(161,161,170,${.55*u})`,h.textAlign="center",h.fillText(p.name,m,v-10*d),h.textAlign="left";continue}const _=Math.max(p.r*r,3*d),g=p.left?-1:1,S=m+g*(_*.72+4*d),M=v-_*.72-4*d;h.strokeStyle=p.major?`rgba(212,165,116,${.55*u})`:`rgba(161,161,170,${.35*u})`,h.lineWidth=1,h.beginPath(),h.moveTo(S,M),h.lineTo(S+g*10*d,M-10*d),h.lineTo(S+g*18*d,M-10*d),h.stroke(),h.font=`${Math.round((p.major?11:10)*d)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=p.major?`rgba(212,165,116,${.9*u})`:`rgba(161,161,170,${.75*u})`,h.textAlign=p.left?"right":"left",h.fillText(p.name,S+g*22*d,M-10*d),h.textAlign="left"}}marker(t,i,r,l,u){const h=this.octx,d=this.ui,p=Math.max(r+7*d,11*d);h.strokeStyle=`rgba(212,165,116,${.7*u})`,h.lineWidth=1,h.beginPath(),h.arc(t,i,p,0,Math.PI*2),h.stroke(),h.font=`${Math.round(11*this.ui)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;const m=t-p-40*d-h.measureText(l).width<12,v=m?1:-1,_=this.w<768?-1:1,g=t+v*p*.7071,S=i+_*p*.7071,M=g+v*26*d,A=S+_*26*d;h.beginPath(),h.moveTo(g,S),h.lineTo(M,A),h.lineTo(M+v*14*d,A),h.stroke(),h.fillStyle=`rgba(161,161,170,${u})`,h.textAlign=m?"left":"right",h.textBaseline="middle",h.fillText(l,M+v*20*d,A)}}const Ar=Cr.length,Np=o=>String(o).padStart(2,"0"),Up=(o,t,i)=>Math.max(t,Math.min(i,o));function Aw(o){return o<768?12:Math.round(Math.max(32,Math.min(64,o*.026)))}const Lp=()=>({w:innerWidth,h:innerHeight,m:Aw(innerWidth)});let Vi=null;function RS(){if(!Vi)return;const o=Vi.currentTime,t=Math.floor(Vi.sampleRate*.03),i=Vi.createBuffer(1,t,Vi.sampleRate),r=i.getChannelData(0);for(let d=0;d<t;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(t*.09));const l=Vi.createBufferSource();l.buffer=i;const u=Vi.createBiquadFilter();u.type="bandpass",u.frequency.value=3200,u.Q.value=1.4;const h=Vi.createGain();h.gain.setValueAtTime(.09,o),h.gain.exponentialRampToValueAtTime(1e-4,o+.03),l.connect(u).connect(h).connect(Vi.destination),l.start(o),l.stop(o+.04)}function wS(){const o=decodeURIComponent(location.hash.slice(1)),t=Cr.findIndex(i=>i.id===o);return t>=0?t:0}function Rw(){const o=He.useRef(null),t=He.useRef(null),i=He.useRef(null),r=He.useRef(null),l=He.useRef(wS()),u=He.useRef(l.current),h=He.useRef(0),d=He.useRef(l.current),p=He.useRef(null),m=He.useRef(!1),v=He.useRef(null),_=He.useRef(null),[g,S]=He.useState(l.current),[M,A]=He.useState(!1),[b,y]=He.useState(!1),[L,I]=He.useState(!1),[C,U]=He.useState(Lp),D=He.useRef(matchMedia("(prefers-reduced-motion: reduce)").matches),[N]=He.useState(()=>!D.current),[E,O]=He.useState(()=>D.current),[z,H]=He.useState(()=>{try{return localStorage.getItem("scale-tour-sound")==="on"}catch{return!1}}),tt=He.useCallback(()=>{H(bt=>{const Ct=!bt;try{localStorage.setItem("scale-tour-sound",Ct?"on":"off")}catch{}return Ct&&(Vi??=new AudioContext,Vi.resume(),RS()),Ct})},[]),[Z,j]=He.useState(()=>{const bt=Lp();return Am(bt.w-bt.m*2,bt.h-bt.m*2)}),J=He.useCallback(bt=>{d.current=Up(Math.round(bt),0,Ar-1),m.current&&(u.current=d.current,h.current=0)},[]),W=He.useCallback(bt=>J(d.current+bt),[J]);He.useEffect(()=>{const bt=i.current,Ct=new Tw(o.current,t.current,bt);v.current=Ct;const At=matchMedia("(prefers-reduced-motion: reduce)"),$t=()=>{m.current=At.matches,Ct.reduced=At.matches};$t(),At.addEventListener("change",$t);const pe=()=>{const Tt=Lp();U(Tt),Ct.resize(Tt.w-Tt.m*2,Tt.h-Tt.m*2),Ct.prefetch(d.current),j(Am(Tt.w-Tt.m*2,Tt.h-Tt.m*2))};pe(),addEventListener("resize",pe);let Me=!1;const le=()=>new Promise(Tt=>requestAnimationFrame(()=>Tt()));Promise.race([Ct.ready(l.current).then(le).then(le).then(le),new Promise(Tt=>setTimeout(Tt,6e3))]).catch(()=>{}).then(()=>{Me||I(!0)});let Ae=0,Y=performance.now(),Ge=-1,me=-1,P=0,T=0,it=0,rt=0;const gt=Tt=>{const Ot=Math.min(.05,(Tt-Y)/1e3);if(Y=Tt,!p.current)if(m.current)u.current=d.current,h.current=0;else{const xt=Math.max(1,Math.ceil(Ot/.008333333333333333)),Pt=Ot/xt;for(let Bt=0;Bt<xt;Bt++){const It=d.current-u.current;h.current+=(150*It-16*h.current)*Pt,u.current+=h.current*Pt}const ne=d.current-u.current;Math.abs(ne)<4e-4&&Math.abs(h.current)<.002&&(u.current=d.current,h.current=0)}Ct.draw(u.current,Tt/1e3),rt++,Ot>1/45&&it++,T+=Ot,T>2&&(it/rt>.5&&Tt-P>3e3&&(Ct.lowerQuality(),P=Tt),T=0,rt=0,it=0),d.current!==me&&(me=d.current,Ct.prefetch(d.current));const vt=Up(Math.round(u.current),0,Ar-1);vt!==Ge&&(Ge=vt,S(vt),history.replaceState(null,"",`#${Cr[vt].id}`)),Ae=requestAnimationFrame(gt)};return Ae=requestAnimationFrame(gt),()=>{Me=!0,cancelAnimationFrame(Ae),removeEventListener("resize",pe),At.removeEventListener("change",$t)}},[]),He.useEffect(()=>{if(E)return;const bt=setTimeout(()=>O(!0),1150);return()=>clearTimeout(bt)},[E]),He.useEffect(()=>{L&&E&&y(!0)},[L,E]);const K=He.useRef(g);He.useEffect(()=>{g!==K.current&&(K.current=g,z&&b&&RS())},[g,z,b]),He.useEffect(()=>{const bt=Ct=>{if(Ct.metaKey||Ct.ctrlKey||Ct.altKey)return;const At=Ct.key;At==="ArrowRight"||At==="ArrowDown"||At==="PageDown"||At===" "||At==="j"?(Ct.preventDefault(),W(1)):At==="ArrowLeft"||At==="ArrowUp"||At==="PageUp"||At==="k"?(Ct.preventDefault(),W(-1)):At==="Home"?(Ct.preventDefault(),J(0)):At==="End"&&(Ct.preventDefault(),J(Ar-1))};return addEventListener("keydown",bt),()=>removeEventListener("keydown",bt)},[J,W]),He.useEffect(()=>{const bt=()=>J(wS());return addEventListener("hashchange",bt),()=>removeEventListener("hashchange",bt)},[J]),He.useEffect(()=>{let bt=0,Ct=0,At=!1,$t=0;const pe=Me=>{Me.preventDefault();const le=performance.now(),Ae=(Math.abs(Me.deltaY)>Math.abs(Me.deltaX)?Me.deltaY:Me.deltaX)*(Me.deltaMode===1?30:1);le-Ct>180&&(At=!1,bt=0),At&&le-$t>900&&(At=!1,bt=0),Ct=le,!At&&(bt+=Ae,Math.abs(bt)>30&&(W(Math.sign(bt)),bt=0,At=!0,$t=le))};return addEventListener("wheel",pe,{passive:!1}),()=>removeEventListener("wheel",pe)},[W]);const ct=bt=>{const Ct=r.current.getBoundingClientRect();return[bt.clientX-Ct.left,bt.clientY-Ct.top]},X=bt=>{r.current&&r.current.style.cursor!==bt&&(r.current.style.cursor=bt)},at=bt=>{if(bt.button!==0)return;bt.target.setPointerCapture?.(bt.pointerId);const Ct=v.current?.hit(...ct(bt));if(Ct&&!_.current){_.current={i:Ct.i,x:bt.clientX,y:bt.clientY,t:performance.now(),rs:Ct.rs,id:bt.pointerId},v.current.grab(Ct.i),X("grabbing");return}X("grabbing"),p.current={x:bt.clientX,y:bt.clientY,start:u.current,axis:0,lastT:performance.now(),lastP:u.current,v:0},h.current=0},_t=bt=>{const Ct=_.current;if(Ct){if(bt.pointerId!==Ct.id)return;const me=performance.now();v.current?.drag(Ct.i,bt.clientX-Ct.x,bt.clientY-Ct.y,Ct.rs,Math.max(.001,(me-Ct.t)/1e3)),Ct.x=bt.clientX,Ct.y=bt.clientY,Ct.t=me;return}const At=p.current;if(!At){bt.pointerType==="mouse"&&X(v.current?.hit(...ct(bt))?"grab":"default");return}const $t=bt.clientX-At.x,pe=bt.clientY-At.y;if(At.axis===0&&Math.hypot($t,pe)>6&&(At.axis=Math.abs($t)>=Math.abs(pe)?1:-1),At.axis===0)return;const Me=Math.min(innerWidth,900)*.45,le=At.axis===1?-$t/Me:-pe/Me;if(m.current)return;const Ae=Up(At.start+le,-.25,Ar-.75),Y=performance.now(),Ge=Math.max(1,Y-At.lastT);At.v=.7*At.v+.3*((Ae-At.lastP)/Ge)*1e3,At.lastT=Y,At.lastP=Ae,u.current=Ae},Lt=bt=>{const Ct=_.current;if(Ct){if(bt.pointerId!==Ct.id)return;_.current=null,performance.now()-Ct.t>90&&v.current?.drag(Ct.i,0,0,Ct.rs,.1),v.current?.release(Ct.i),X(bt.pointerType==="mouse"&&v.current?.hit(...ct(bt))?"grab":"default");return}X("default");const At=p.current;if(p.current=null,!At)return;const $t=bt.clientX-At.x,pe=bt.clientY-At.y;if(m.current){const le=At.axis===1?$t:pe;Math.abs(le)>40&&W(le<0?1:-1);return}if(At.axis===0)return;let Me=Math.round(u.current+At.v*.12);Math.abs(At.v)>.8&&Me===Math.round(At.start)&&(Me+=Math.sign(At.v)),h.current=At.v*.5,J(Me)},Nt=Cr[g],F=g>0?Cr[g-1]:null,ft=pb(Nt.sphere?Nt.radiusKm:Nt.radiusKm*2),wt=F?Nt.radiusKm/F.radiusKm:null,V=Nt.radiusKm/db.radiusKm,pt=g/(Ar-1),{w:Et,h:Dt,m:mt}=C,Ut=Et-mt*2,Be=Dt-mt*2,fe=Et<768?12:16;return Vt.jsxs("div",{className:"fixed inset-0 select-none bg-black text-mist",children:[Vt.jsxs("div",{className:"absolute overflow-hidden bg-ink",style:{left:mt,top:mt,width:Ut,height:Be,borderRadius:fe},children:[Vt.jsxs("div",{ref:r,className:"scene-fade absolute inset-0 touch-none",onPointerDown:at,onPointerMove:_t,onPointerUp:Lt,onPointerCancel:Lt,role:"group","aria-roledescription":"carousel","aria-label":"scale tour, from the moon to the observable universe",tabIndex:0,style:{opacity:b?1:0},"data-loaded":b||void 0,children:[Vt.jsx("canvas",{ref:o,className:"absolute inset-0 block h-full w-full"}),Vt.jsx("canvas",{ref:t,className:"absolute inset-0 block h-full w-full"}),Vt.jsx("canvas",{ref:i,className:"absolute inset-0 block h-full w-full"})]}),Vt.jsx("div",{className:"ui-fade ui-legible pointer-events-none absolute left-0 top-0 font-mono text-[11px] tracking-[0.05em]",style:{zoom:Z,width:Ut/Z,height:Be/Z,opacity:b?1:0,visibility:b?"visible":"hidden"},children:Vt.jsxs("div",{className:"absolute inset-0 p-5 md:p-7",children:[Vt.jsxs("div",{className:"pointer-events-auto absolute left-5 top-5 md:left-7 md:top-7",children:[Vt.jsxs("a",{href:"https://gmunoz512.github.io/german-plus/",className:"font-serif text-2xl leading-none tracking-normal text-paper",children:["german",Vt.jsx("span",{className:"text-accent",children:"+"})]}),Vt.jsx("p",{className:"mt-1.5 text-fog",children:"scale tour"})]}),Vt.jsxs("div",{className:"absolute right-5 top-5 flex flex-col items-end gap-1.5 md:right-7 md:top-7",children:[Vt.jsxs("p",{"aria-hidden":!0,children:[Vt.jsx("span",{className:"text-fog",children:"["}),Vt.jsx("span",{className:"text-paper",children:Np(g+1)}),Vt.jsxs("span",{className:"text-fog",children:["/",Np(Ar),"]"]})]}),Vt.jsxs("button",{onClick:tt,className:"pointer-events-auto text-fog transition-colors hover:text-paper","aria-pressed":z,children:["sound ",Vt.jsxs("span",{className:z?"text-paper":"",children:["[",z?"on":"off","]"]})]})]}),Vt.jsxs("section",{className:"absolute inset-x-5 bottom-[92px] md:inset-x-auto md:bottom-auto md:left-7 md:top-1/2 md:w-[320px] md:-translate-y-1/2","aria-live":"polite","aria-atomic":"true",children:[Vt.jsxs("p",{className:"text-accent",children:["[",Np(g+1),"]"]}),Vt.jsx("h1",{className:"mt-1.5 font-serif text-[42px] leading-[1.02] tracking-normal text-paper text-balance md:text-[60px]",children:Nt.name}),Vt.jsxs("dl",{className:"mt-4 space-y-1 md:mt-5",children:[Vt.jsx(Op,{label:Nt.sphere?"radius":"across",value:`${ft.value} ${ft.unit}`}),Vt.jsx(Op,{label:"vs previous",value:wt?hx(wt):"—",note:wt?F.name.replace(/^the /,""):"where i start"}),Vt.jsx(Op,{label:"vs earth",value:hx(V)})]}),Vt.jsx("p",{className:"mt-4 font-serif text-lg italic leading-snug tracking-normal text-paper-dim md:mt-5 md:text-xl",children:Nt.fact}),Nt.note&&Vt.jsx("p",{className:"mt-2 hidden font-sans text-xs leading-relaxed tracking-normal text-fog md:block",children:Nt.note})]}),M&&Vt.jsxs("div",{className:"pointer-events-auto absolute bottom-20 left-5 right-5 z-10 max-w-md rounded-[10px] border border-line bg-ink-raised/95 p-5 font-sans text-xs leading-relaxed tracking-normal text-mist md:left-7 md:right-auto",children:[Vt.jsxs("div",{className:"flex items-baseline justify-between",children:[Vt.jsx("p",{className:"font-serif text-xl text-paper",children:"credits"}),Vt.jsx("button",{onClick:()=>A(!1),className:"font-mono text-[11px] tracking-[0.05em] text-fog hover:text-paper",children:"[close]"})]}),Vt.jsxs("ul",{className:"mt-3 space-y-1.5",children:[Vt.jsxs("li",{children:["planet maps: ",Vt.jsx("a",{className:"text-paper-dim underline decoration-line underline-offset-2 hover:text-accent",href:"https://www.solarsystemscope.com/textures/",children:"solar system scope"}),", cc by 4.0 (based on nasa data)"]}),Vt.jsx("li",{children:"orion nebula: nasa, esa, m. robberto (stsci/esa) & the hubble orion treasury project team — public domain"}),Vt.jsx("li",{children:"omega centauri: eso/inaf-vst/omegacam, a. grado, l. limatola — cc by 4.0"}),Vt.jsx("li",{children:"the sun & stars, the milky way, andromeda, the local group’s galaxies, the heliosphere, oort cloud, superclusters & the observable universe are live procedural renders (illustrations, styled after eso, hubble & amateur astrophotos). sizes & sources in the repo’s src/data.ts."})]}),Vt.jsx("p",{className:"mt-3 text-fog",children:"made by german, for fun. images are toned to fit the page."})]}),Vt.jsxs("footer",{className:"pointer-events-auto absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7",children:[Vt.jsxs("div",{className:"relative h-px w-full bg-line","aria-hidden":!0,children:[Vt.jsx("div",{className:"absolute inset-y-0 left-0 bg-accent",style:{width:`${pt*100}%`}}),Cr.map((bt,Ct)=>Vt.jsx("button",{onClick:()=>J(Ct),tabIndex:-1,title:bt.name,className:"absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer",style:{left:`${Ct/(Ar-1)*100}%`},children:Vt.jsx("span",{className:`mx-auto block w-px ${Ct<=g?"bg-accent":"bg-fog/50"} ${Ct===g?"h-2.5":"h-1.5"}`})},bt.id))]}),Vt.jsxs("div",{className:"mt-3.5 flex items-center justify-between",children:[Vt.jsxs("p",{className:"text-fog",children:[Vt.jsxs("span",{className:"hidden md:inline",children:["[scroll · drag · ← →] ",Vt.jsx("span",{className:"text-fog/70",children:"drag a body to spin it"})]}),Vt.jsx("span",{className:"md:hidden",children:"[swipe · touch to spin]"}),Vt.jsx("span",{className:"mx-2 text-line",children:"/"}),Vt.jsx("button",{onClick:()=>A(bt=>!bt),className:"text-fog transition-colors hover:text-paper","aria-expanded":M,children:"credits"})]}),Vt.jsxs("div",{className:"flex items-center gap-1",children:[Vt.jsx(CS,{label:"previous",disabled:g===0,onClick:()=>W(-1),children:"[←]"}),Vt.jsx(CS,{label:"next",disabled:g===Ar-1,onClick:()=>W(1),children:"[→]"})]})]})]})]})}),Vt.jsx("div",{className:`loader pointer-events-none absolute inset-0 flex items-center justify-center ${b||!E?"loader-done":""}`,"aria-hidden":b,role:"status",children:Vt.jsxs("div",{className:"flex flex-col items-center",children:[Vt.jsxs("p",{className:"font-serif text-lg leading-none text-paper/70",children:["german",Vt.jsx("span",{className:"text-accent/80",children:"+"})]}),Vt.jsx("div",{className:"mt-3 h-px w-24 overflow-hidden bg-line/60",children:Vt.jsx("div",{className:"loader-bar h-full bg-accent/70"})}),Vt.jsx("span",{className:"sr-only",children:"loading"})]})})]}),Vt.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:Et,height:Dt,"aria-hidden":!0,children:[Vt.jsx("g",{fill:"none",stroke:"#2a2a2e",strokeWidth:"1",className:N?"frame-draw":"",children:ww(mt+.5,mt+.5,Et-mt-.5,Dt-mt-.5,fe).map((bt,Ct)=>Vt.jsx("path",{d:bt,pathLength:1},Ct))}),Vt.jsxs("g",{stroke:"#4a4a50",strokeWidth:"1",className:`frame-marks ${E?"frame-marks-on":""}`,children:[[[mt+14*Z,mt+14*Z],[Et-mt-14*Z,mt+14*Z],[mt+14*Z,Dt-mt-14*Z],[Et-mt-14*Z,Dt-mt-14*Z]].map(([bt,Ct],At)=>Vt.jsx("path",{d:`M${bt-4.5*Z} ${Ct+.5}H${bt+.5+5*Z}M${bt+.5} ${Ct-4.5*Z}V${Ct+.5+5*Z}`},At)),Et>=768&&[`M${Et/2+.5} ${mt}v${7*Z}`,`M${Et/2+.5} ${Dt-mt}v${-7*Z}`,`M${mt} ${Dt/2+.5}h${7*Z}`,`M${Et-mt} ${Dt/2+.5}h${-7*Z}`].map((bt,Ct)=>Vt.jsx("path",{d:bt},`t${Ct}`))]})]})]})}function ww(o,t,i,r,l){const u=(o+i)/2,h=(t+r)/2,d=l*(1-Math.SQRT1_2),p=[];for(const[m,v,_,g]of[[o,t,1,1],[i,t,-1,1],[o,r,1,-1],[i,r,-1,-1]]){const S=m+_*d,M=v+g*d,A=_*g>0?1:0;p.push(`M${S} ${M}A${l} ${l} 0 0 ${A} ${m+_*l} ${v}L${u} ${v}`),p.push(`M${S} ${M}A${l} ${l} 0 0 ${1-A} ${m} ${v+g*l}L${m} ${h}`)}return p}function Op({label:o,value:t,note:i}){return Vt.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[Vt.jsx("dt",{className:"text-fog",children:o}),Vt.jsxs("dd",{className:"text-right",children:[i&&Vt.jsx("span",{className:"mr-2 text-fog/70",children:i}),Vt.jsx("span",{className:"text-fog",children:"["}),Vt.jsx("span",{className:"text-paper",children:t}),Vt.jsx("span",{className:"text-fog",children:"]"})]})]})}function CS({label:o,disabled:t,onClick:i,children:r}){return Vt.jsx("button",{"aria-label":o,disabled:t,onClick:i,className:"px-1.5 py-1 font-mono text-[12px] text-paper transition-colors hover:text-accent disabled:text-fog/40 disabled:hover:text-fog/40",children:r})}hb.createRoot(document.getElementById("root")).render(Vt.jsx(He.StrictMode,{children:Vt.jsx(Rw,{})}));
