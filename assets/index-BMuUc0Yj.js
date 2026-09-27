(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var kd={exports:{}},Sl={};var cx;function hb(){if(cx)return Sl;cx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Sl.Fragment=t,Sl.jsx=i,Sl.jsxs=i,Sl}var fx;function db(){return fx||(fx=1,kd.exports=hb()),kd.exports}var Ft=db(),Xd={exports:{}},he={};var hx;function pb(){if(hx)return he;hx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),x=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function L(I,mt,Et){this.props=I,this.context=mt,this.refs=b,this.updater=Et||A}L.prototype.isReactComponent={},L.prototype.setState=function(I,mt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,mt,"setState")},L.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function z(){}z.prototype=L.prototype;function C(I,mt,Et){this.props=I,this.context=mt,this.refs=b,this.updater=Et||A}var U=C.prototype=new z;U.constructor=C,M(U,L.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function N(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function F(I,mt,Et){var q=Et.ref;return{$$typeof:o,type:I,key:mt,ref:q!==void 0?q:null,props:Et}}function G(I,mt){return F(I.type,mt,I.props)}function W(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function it(I){var mt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Et){return mt[Et]})}var H=/\/+/g;function $(I,mt){return typeof I=="object"&&I!==null&&I.key!=null?it(""+I.key):mt.toString(36)}function K(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(mt){I.status==="pending"&&(I.status="fulfilled",I.value=mt)},function(mt){I.status==="pending"&&(I.status="rejected",I.reason=mt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Y(I,mt,Et,q,nt){var At=typeof I;(At==="undefined"||At==="boolean")&&(I=null);var Ut=!1;if(I===null)Ut=!0;else switch(At){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(I.$$typeof){case o:case t:Ut=!0;break;case v:return Ut=I._init,Y(Ut(I._payload),mt,Et,q,nt)}}if(Ut)return nt=nt(I),Ut=q===""?"."+$(I,0):q,D(nt)?(Et="",Ut!=null&&(Et=Ut.replace(H,"$&/")+"/"),Y(nt,mt,Et,"",function(Ct){return Ct})):nt!=null&&(W(nt)&&(nt=G(nt,Et+(nt.key==null||I&&I.key===nt.key?"":(""+nt.key).replace(H,"$&/")+"/")+Ut)),mt.push(nt)),1;Ut=0;var st=q===""?".":q+":";if(D(I))for(var ut=0;ut<I.length;ut++)q=I[ut],At=st+$(q,ut),Ut+=Y(q,mt,Et,At,nt);else if(ut=y(I),typeof ut=="function")for(I=ut.call(I),ut=0;!(q=I.next()).done;)q=q.value,At=st+$(q,ut++),Ut+=Y(q,mt,Et,At,nt);else if(At==="object"){if(typeof I.then=="function")return Y(K(I),mt,Et,q,nt);throw mt=String(I),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function dt(I,mt,Et){if(I==null)return I;var q=[],nt=0;return Y(I,q,"","",function(At){return mt.call(Et,At,nt++)}),q}function rt(I){if(I._status===-1){var mt=I._result,Et=mt();Et.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q,Et.status===void 0&&(Et.status="fulfilled",Et.value=q))},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q,Et.status===void 0&&(Et.status="rejected",Et.reason=q))}),I._status===-1&&(I._status=0,I._result=Et)}if(I._status===1)return I._result.default;throw I._result}var lt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function xt(I){var mt=T.T,Et={};Et.types=mt!==null?mt.types:null,T.T=Et;try{var q=I(),nt=T.S;nt!==null&&nt(Et,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(N,lt)}catch(At){lt(At)}finally{mt!==null&&Et.types!==null&&(mt.types=Et.types),T.T=mt}}function qt(I){var mt=T.T;if(mt!==null){var Et=mt.types;Et===null?mt.types=[I]:Et.indexOf(I)===-1&&Et.push(I)}else xt(qt.bind(null,I))}var Tt={map:dt,forEach:function(I,mt,Et){dt(I,function(){mt.apply(this,arguments)},Et)},count:function(I){var mt=0;return dt(I,function(){mt++}),mt},toArray:function(I){return dt(I,function(mt){return mt})||[]},only:function(I){if(!W(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return he.Activity=_,he.Children=Tt,he.Component=L,he.Fragment=i,he.Profiler=l,he.PureComponent=C,he.StrictMode=r,he.Suspense=p,he.ViewTransition=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,he.__COMPILER_RUNTIME={__proto__:null,c:function(I){return T.H.useMemoCache(I)}},he.addTransitionType=qt,he.cache=function(I){return function(){return I.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(I,mt,Et){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var q=M({},I.props),nt=I.key;if(mt!=null)for(At in mt.key!==void 0&&(nt=""+mt.key),mt)!O.call(mt,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&mt.ref===void 0||(q[At]=mt[At]);var At=arguments.length-2;if(At===1)q.children=Et;else if(1<At){for(var Ut=Array(At),st=0;st<At;st++)Ut[st]=arguments[st+2];q.children=Ut}return F(I.type,nt,q)},he.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},he.createElement=function(I,mt,Et){var q,nt={},At=null;if(mt!=null)for(q in mt.key!==void 0&&(At=""+mt.key),mt)O.call(mt,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(nt[q]=mt[q]);var Ut=arguments.length-2;if(Ut===1)nt.children=Et;else if(1<Ut){for(var st=Array(Ut),ut=0;ut<Ut;ut++)st[ut]=arguments[ut+2];nt.children=st}if(I&&I.defaultProps)for(q in Ut=I.defaultProps,Ut)nt[q]===void 0&&(nt[q]=Ut[q]);return F(I,At,nt)},he.createRef=function(){return{current:null}},he.forwardRef=function(I){return{$$typeof:d,render:I}},he.isValidElement=W,he.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:rt}},he.memo=function(I,mt){return{$$typeof:m,type:I,compare:mt===void 0?null:mt}},he.startTransition=xt,he.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},he.use=function(I){return T.H.use(I)},he.useActionState=function(I,mt,Et){return T.H.useActionState(I,mt,Et)},he.useCallback=function(I,mt){return T.H.useCallback(I,mt)},he.useContext=function(I){return T.H.useContext(I)},he.useDebugValue=function(){},he.useDeferredValue=function(I,mt){return T.H.useDeferredValue(I,mt)},he.useEffect=function(I,mt){return T.H.useEffect(I,mt)},he.useEffectEvent=function(I){return T.H.useEffectEvent(I)},he.useId=function(){return T.H.useId()},he.useImperativeHandle=function(I,mt,Et){return T.H.useImperativeHandle(I,mt,Et)},he.useInsertionEffect=function(I,mt){return T.H.useInsertionEffect(I,mt)},he.useLayoutEffect=function(I,mt){return T.H.useLayoutEffect(I,mt)},he.useMemo=function(I,mt){return T.H.useMemo(I,mt)},he.useOptimistic=function(I,mt){return T.H.useOptimistic(I,mt)},he.useReducer=function(I,mt,Et){return T.H.useReducer(I,mt,Et)},he.useRef=function(I){return T.H.useRef(I)},he.useState=function(I){return T.H.useState(I)},he.useSyncExternalStore=function(I,mt,Et){return T.H.useSyncExternalStore(I,mt,Et)},he.useTransition=function(){return T.H.useTransition()},he.version="19.3.0",he}var dx;function Im(){return dx||(dx=1,Xd.exports=pb()),Xd.exports}var Fe=Im(),qd={exports:{}},yl={},Wd={exports:{}},Yd={};var px;function mb(){return px||(px=1,(function(o){function t(K,Y){var dt=K.length;K.push(Y);t:for(;0<dt;){var rt=dt-1>>>1,lt=K[rt];if(0<l(lt,Y))K[rt]=Y,K[dt]=lt,dt=rt;else break t}}function i(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Y=K[0],dt=K.pop();if(dt!==Y){K[0]=dt;t:for(var rt=0,lt=K.length,xt=lt>>>1;rt<xt;){var qt=2*(rt+1)-1,Tt=K[qt],I=qt+1,mt=K[I];if(0>l(Tt,dt))I<lt&&0>l(mt,Tt)?(K[rt]=mt,K[I]=dt,rt=I):(K[rt]=Tt,K[qt]=dt,rt=qt);else if(I<lt&&0>l(mt,dt))K[rt]=mt,K[I]=dt,rt=I;else break t}}return Y}function l(K,Y){var dt=K.sortIndex-Y.sortIndex;return dt!==0?dt:K.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,_=null,g=3,x=!1,y=!1,A=!1,M=!1,b=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function C(K){for(var Y=i(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=K)r(m),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=i(m)}}function U(K){if(A=!1,C(K),!y)if(i(p)!==null)y=!0,D||(D=!0,W());else{var Y=i(m);Y!==null&&$(U,Y.startTime-K)}}var D=!1,N=-1,T=5,O=-1;function F(){return M?!0:!(o.unstable_now()-O<T)}function G(){if(M=!1,D){var K=o.unstable_now();O=K;var Y=!0;try{t:{y=!1,A&&(A=!1,L(N),N=-1),x=!0;var dt=g;try{e:{for(C(K),_=i(p);_!==null&&!(_.expirationTime>K&&F());){var rt=_.callback;if(typeof rt=="function"){_.callback=null,g=_.priorityLevel;var lt=rt(_.expirationTime<=K);if(K=o.unstable_now(),typeof lt=="function"){_.callback=lt,C(K),Y=!0;break e}_===i(p)&&r(p),C(K)}else r(p);_=i(p)}if(_!==null)Y=!0;else{var xt=i(m);xt!==null&&$(U,xt.startTime-K),Y=!1}}break t}finally{_=null,g=dt,x=!1}Y=void 0}}finally{Y?W():D=!1}}}var W;if(typeof z=="function")W=function(){z(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,H=it.port2;it.port1.onmessage=G,W=function(){H.postMessage(null)}}else W=function(){b(G,0)};function $(K,Y){N=b(function(){K(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(K){K.callback=null},o.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(K){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var dt=g;g=Y;try{return K()}finally{g=dt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(K,Y){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var dt=g;g=K;try{return Y()}finally{g=dt}},o.unstable_scheduleCallback=function(K,Y,dt){var rt=o.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?rt+dt:rt):dt=rt,K){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=dt+lt,K={id:v++,callback:Y,priorityLevel:K,startTime:dt,expirationTime:lt,sortIndex:-1},dt>rt?(K.sortIndex=dt,t(m,K),i(p)===null&&K===i(m)&&(A?(L(N),N=-1):A=!0,$(U,dt-rt))):(K.sortIndex=lt,t(p,K),y||x||(y=!0,D||(D=!0,W()))),K},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(K){var Y=g;return function(){var dt=g;g=Y;try{return K.apply(this,arguments)}finally{g=dt}}}})(Yd)),Yd}var mx;function gb(){return mx||(mx=1,Wd.exports=mb()),Wd.exports}var Kd={exports:{}},zn={};var gx;function vb(){if(gx)return zn;gx=1;var o=Im();function t(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)_+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,_,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:v,containerInfo:_,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.browser=function(v){return{$$typeof:u,_reason:v}},zn.createPortal=function(v,_){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return d(v,_,null,g)},zn.flushSync=function(v){var _=p.T,g=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=_,r.p=g,r.d.f()}},zn.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},zn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},zn.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin),y=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;g==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:A}):g==="script"&&r.d.X(v,{crossOrigin:x,integrity:y,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},zn.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var g=m(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(v)},zn.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var g=_.as,x=m(g,_.crossOrigin);r.d.L(v,g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},zn.preloadModule=function(v,_){if(typeof v=="string")if(_){var g=m(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:g,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(v)},zn.requestFormReset=function(v){r.d.r(v)},zn.unstable_batchedUpdates=function(v,_){return v(_)},zn.useFormState=function(v,_,g){return p.H.useFormState(v,_,g)},zn.useFormStatus=function(){return p.H.useHostTransitionStatus()},zn.version="19.3.0",zn}var vx;function _b(){if(vx)return Kd.exports;vx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Kd.exports=vb(),Kd.exports}var _x;function xb(){if(_x)return yl;_x=1;var o=gb(),t=Im(),i=_b();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,R=c.child;R;){if(R===a){S=!0,a=c,s=f;break}if(R===s){S=!0,s=c,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,s=c;break}if(R===s){S=!0,s=f,a=c;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,c,f))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function y(e){var n=[null,null],a=g(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var b=null,L=null;function z(e,n,a){return e===a?!0:e===n?(b=e,!0):!1}function C(e,n,a){return e===a?(L=e,!1):e===n?(L!==null&&(b=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var N=Object.assign,T=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),$=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),dt=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),qt=Symbol.for("react.legacy_hidden"),Tt=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),Et=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case it:return"Profiler";case W:return"StrictMode";case Y:return"Suspense";case dt:return"SuspenseList";case xt:return"Activity";case I:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case $:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rt:return n=e.displayName||null,n!==null?n:At(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return At(e(n))}catch{}}return null}var Ut=Array.isArray,st=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct={pending:!1,data:null,method:null,action:null},Rt=[],re=-1;function le(e){return{current:e}}function Wt(e){0>re||(e.current=Rt[re],Rt[re]=null,re--)}function jt(e,n){re++,Rt[re]=e.current,e.current=n}var ve=le(null),qe=le(null),Se=le(null),Be=le(null);function Z(e,n){switch(jt(Se,n),jt(qe,e),jt(ve,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?x_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=x_(n),e=S_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Wt(ve),jt(ve,e)}function We(){Wt(ve),Wt(qe),Wt(Se)}function ye(e){var n=e.memoizedState;n!==null&&($s._currentValue=n.memoizedState,jt(Be,e)),n=ve.current;var a=S_(n,e.type);n!==a&&(jt(qe,e),jt(ve,a))}function P(e){qe.current===e&&(Wt(ve),Wt(qe)),Be.current===e&&(Wt(Be),$s._currentValue=Ct)}var E,Q;function at(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",Q=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+Q}var vt=!1;function Dt(e,n){if(!e||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(It){var j=It}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(It){j=It}Mt=!1;try{var ht=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Mt=!0,new e}finally{Mt&&(ht!==void 0?Object.defineProperty(e.prototype,"props",ht):delete e.prototype.props)}}}else{try{throw Error()}catch(It){j=It}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(It){if(It&&j&&typeof It.stack=="string")return[It.stack,j.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var B=S.split(`
`),et=R.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===et.length)for(s=B.length-1,c=et.length-1;1<=s&&0<=c&&B[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==et[c]){var pt=`
`+B[s].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=s&&0<=c);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function Nt(e,n){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return e.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return Dt(e.type,!1);case 11:return Dt(e.type.render,!1);case 1:return Dt(e.type,!0);case 31:return at("Activity");case 30:return at("ViewTransition");default:return""}}function _t(e){try{var n="",a=null;do n+=Nt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var St=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,ie=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,Bt=o.unstable_requestPaint,Kt=o.unstable_now,oe=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,Ot=o.unstable_NormalPriority,bt=o.unstable_LowPriority,Pt=o.unstable_IdlePriority,Yt=o.log,wt=o.unstable_setDisableYieldValue,ne=null,Xt=null;function Oe(e){if(typeof Yt=="function"&&wt(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(ne,e)}catch{}}var me=Math.clz32?Math.clz32:_f,ui=Math.log,Mi=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(ui(e)/Mi|0)|0}var ms=256,Or=262144,Wa=4194304;function Sa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pr(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=Sa(s):(S&=R,S!==0?c=Sa(S):a||(a=R&~e,a!==0&&(c=Sa(a))))):(R=s&~f,R!==0?c=Sa(R):S!==0?c=Sa(S):a||(a=s&~e,a!==0&&(c=Sa(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ya(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ji(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-me(a),c=1<<s;n|=e[s],a&=~c}return n}function Ao(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var e=Wa;return Wa<<=1,(Wa&62914560)===0&&(Wa=4194304),e}function gs(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ji(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zl(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-me(a),Mt=1<<pt;R[pt]=0,B[pt]=-1;var j=et[pt];if(j!==null)for(et[pt]=null,pt=0;pt<j.length;pt++){var ht=j[pt];ht!==null&&(ht.lane&=-536870913)}a&=~Mt}s!==0&&zr(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function zr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-me(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-me(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Co(e,n){var a=n&-n;return a=(a&42)!==0?1:Do(a),(a&(e.suspendedLanes|n))!==0?0:a}function Do(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function No(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ql(){var e=ut.p;return e!==0?e:(e=window.event,e===void 0?32:ix(e.type))}function Jl(e,n){var a=ut.p;try{return ut.p=e,n()}finally{ut.p=a}}var bi=Math.random().toString(36).slice(2),w="__reactFiber$"+bi,V="__reactProps$"+bi,gt="__reactContainer$"+bi,ct="__reactEvents$"+bi,ft="__reactListeners$"+bi,Gt="__reactHandles$"+bi,Zt="__reactResources$"+bi,zt="__reactMarker$"+bi,$t="__reactLoad$"+bi;function te(e){delete e[w],delete e[V],delete e[ft],delete e[Gt]}function fe(e){var n;if(n=e[w])return n;for(var a=e.parentNode;a;){if(n=a[gt]||a[w]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=I_(e);e!==null;){if(a=e[w])return a;e=I_(e)}return n}e=a,a=e.parentNode}return null}function ge(e){if(e=e[w]||e[gt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ae(e){var n=e[Zt];return n||(n=e[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(e){e[zt]=!0}function Je(e){e[$t]=void 0}var ke=new Set,yn={};function Vt(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(yn[e]=n,e=0;e<n.length;e++)ke.add(n[e])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wn={},ci={};function $i(e){return St.call(ci,e)?!0:St.call(Wn,e)?!1:Pe.test(e)?ci[e]=!0:(Wn[e]=!0,!1)}var Ee=!1;function Ge(){var e=Ee;return Ee=!1,e}function en(e,n,a){if($i(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function fi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function De(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ya(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jl(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xf(e){if(!e._valueTracker){var n=ya(e)?"checked":"value";e._valueTracker=jl(e,n,""+e[n])}}function o0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ya(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var Ly=/[\n"\\]/g;function Ei(e){return e.replace(Ly,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sf(e,n,a,s,c,f,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?yf(e,fn(e.value)):yf(e,fn(n)):a!=null?yf(e,fn(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+fn(R):e.removeAttribute("name")}function l0(e,n,a,s,c,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xf(e);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),xf(e)}function yf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function vs(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function u0(e,n,a){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fn(a):""}function c0(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),xf(e)}function _s(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function f0(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Oy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function h0(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",Ee=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(f0(e,c,s),Ee=!0)}else for(var f in n)n.hasOwnProperty(f)&&f0(e,f,n[f])}function Mf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var bf=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xs=null,Ss=null;function d0(e){var n=ge(e);if(n&&(e=n.stateNode)){var a=e[V]||null;t:switch(e=n.stateNode,n.type){case"input":if(Sf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ei(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[V]||null;if(!c)throw Error(r(90));Sf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&o0(s)}break t;case"textarea":u0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vs(e,!!a.multiple,n,!1)}}}var Tf=!1;function p0(e,n,a){if(Tf)return e(n,a);Tf=!0;try{var s=e(n);return s}finally{if(Tf=!1,(xs!==null||Ss!==null)&&($u(),xs&&(n=xs,e=Ss,Ss=xs=null,d0(n),e)))for(n=0;n<e.length;n++)d0(e[n])}}function Uo(e,n){var a=e.stateNode;if(a===null)return null;var s=a[V]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=!1;if(Ma)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Af=!1}var Ka=null,wf=null,tu=null;function m0(){if(tu)return tu;var e,n=wf,a=n.length,s,c="value"in Ka?Ka.value:Ka.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return tu=c.slice(e,1<s?1-s:void 0)}function eu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function g0(){return!1}function Yn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nu:g0,this.isPropagationStopped=g0,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Yn(Za),Oo=N({},Za,{view:0,detail:0}),Iy=Yn(Oo),Rf,Cf,Po,au=N({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Rf=e.screenX-Po.screenX,Cf=e.screenY-Po.screenY):Cf=Rf=0,Po=e),Rf)},movementY:function(e){return"movementY"in e?e.movementY:Cf}}),v0=Yn(au),By=N({},au,{dataTransfer:0}),Fy=Yn(By),Hy=N({},Oo,{relatedTarget:0}),Df=Yn(Hy),Gy=N({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=Yn(Gy),ky=N({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=Yn(ky),qy=N({},Za,{data:0}),_0=Yn(qy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ky[e])?!!n[e]:!1}function Nf(){return Zy}var Qy=N({},Oo,{key:function(e){if(e.key){var n=Wy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jy=Yn(Qy),jy=N({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=Yn(jy),$y=N({},Za,{submitter:0}),tM=Yn($y),eM=N({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),nM=Yn(eM),iM=N({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=Yn(iM),rM=N({},au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=Yn(rM),oM=N({},Za,{newState:0,oldState:0,source:0}),lM=Yn(oM),uM=[9,13,27,32],Uf=Ma&&"CompositionEvent"in window,zo=null;Ma&&"documentMode"in document&&(zo=document.documentMode);var cM=Ma&&"TextEvent"in window&&!zo,S0=Ma&&(!Uf||zo&&8<zo&&11>=zo),y0=" ",M0=!1;function b0(e,n){switch(e){case"keyup":return uM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ys=!1;function fM(e,n){switch(e){case"compositionend":return E0(n);case"keypress":return n.which!==32?null:(M0=!0,y0);case"textInput":return e=n.data,e===y0&&M0?null:e;default:return null}}function hM(e,n){if(ys)return e==="compositionend"||!Uf&&b0(e,n)?(e=m0(),tu=wf=Ka=null,ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return S0&&n.locale!=="ko"?null:n.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dM[e.type]:n==="textarea"}function A0(e,n,a,s){xs?Ss?Ss.push(s):Ss=[s]:xs=s,n=rc(n,"onChange"),0<n.length&&(a=new iu("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Io=null,Bo=null;function pM(e){d_(e,0)}function ru(e){var n=Qt(e);if(o0(n))return e}function w0(e,n){if(e==="change")return n}var R0=!1;if(Ma){var Lf;if(Ma){var Of="oninput"in document;if(!Of){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),Of=typeof C0.oninput=="function"}Lf=Of}else Lf=!1;R0=Lf&&(!document.documentMode||9<document.documentMode)}function D0(){Io&&(Io.detachEvent("onpropertychange",N0),Bo=Io=null)}function N0(e){if(e.propertyName==="value"&&ru(Bo)){var n=[];A0(n,Bo,e,Ef(e)),p0(pM,n)}}function mM(e,n,a){e==="focusin"?(D0(),Io=n,Bo=a,Io.attachEvent("onpropertychange",N0)):e==="focusout"&&D0()}function gM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(Bo)}function vM(e,n){if(e==="click")return ru(n)}function _M(e,n){if(e==="input"||e==="change")return ru(n)}function xM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:xM;function Fo(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!St.call(n,c)||!hi(e[c],n[c]))return!1}return!0}function Pf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function U0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,n){var a=U0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=U0(a)}}function O0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?O0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function P0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Pf(e.document)}return n}function zf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var SM=Ma&&"documentMode"in document&&11>=document.documentMode,Ms=null,If=null,Ho=null,Bf=!1;function z0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bf||Ms==null||Ms!==Pf(s)||(s=Ms,"selectionStart"in s&&zf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ho&&Fo(Ho,s)||(Ho=s,s=rc(If,"onSelect"),0<s.length&&(n=new iu("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ms)))}function Ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var bs={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},Ff={},I0={};Ma&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Br(e){if(Ff[e])return Ff[e];if(!bs[e])return e;var n=bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in I0)return Ff[e]=n[a];return e}var B0=Br("animationend"),F0=Br("animationiteration"),H0=Br("animationstart"),yM=Br("transitionrun"),MM=Br("transitionstart"),bM=Br("transitioncancel"),G0=Br("transitionend"),V0=new Map,Hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hf.push("scrollEnd");function Ii(e,n){V0.set(e,n),Vt(n,[e])}var EM=0;function ba(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Gi.identifierPrefix;var a=EM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function k0(e){if(e==null||typeof e=="string")return e;var n=null,a=ks;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function Ea(e,n){return e=k0(e),n=k0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var su=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],Es=0,Gf=0;function ou(){for(var e=Es,n=Gf=Es=0;n<e;){var a=Ti[n];Ti[n++]=null;var s=Ti[n];Ti[n++]=null;var c=Ti[n];Ti[n++]=null;var f=Ti[n];if(Ti[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&X0(a,c,f)}}function lu(e,n,a,s){Ti[Es++]=e,Ti[Es++]=n,Ti[Es++]=a,Ti[Es++]=s,Gf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Vf(e,n,a,s){return lu(e,n,a,s),uu(e)}function Fr(e,n){return lu(e,null,null,n),uu(e)}function X0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-me(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function uu(e){if(50<ll)throw ll=0,ju=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ts={};function TM(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,s){return new TM(e,n,a,s)}function kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ta(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function q0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cu(e,n,a,s,c,f){var S=0;if(s=e,typeof s=="function")kf(s)&&(S=1);else if(typeof s=="string")S=$1(e,a,ve.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(s){case xt:return e=$n(31,a,n,c),e.elementType=xt,e.lanes=f,e;case G:return Hr(a.children,c,f,n);case W:S=8,c|=24;break;case it:return e=$n(12,a,n,c|2),e.elementType=it,e.lanes=f,e;case Y:return e=$n(13,a,n,c),e.elementType=Y,e.lanes=f,e;case dt:return e=$n(19,a,n,c),e.elementType=dt,e.lanes=f,e;case qt:case I:return e=c|32,e=$n(30,a,n,e),e.elementType=I,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case $:S=10;break t;case H:S=9;break t;case K:S=11;break t;case rt:S=14;break t;case lt:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=$n(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Hr(e,n,a,s){return e=$n(7,e,s,n),e.lanes=a,e}function Xf(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function W0(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function qf(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Y0=new WeakMap;function Ai(e,n){if(typeof e=="object"&&e!==null){var a=Y0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:_t(n)},Y0.set(e,n),n)}return{value:e,source:n,stack:_t(n)}}var As=[],ws=0,fu=null,Go=0,wi=[],Ri=0,Qa=null,ea=1,na="";function Aa(e,n){As[ws++]=Go,As[ws++]=fu,fu=e,Go=n}function K0(e,n,a){wi[Ri++]=ea,wi[Ri++]=na,wi[Ri++]=Qa,Qa=e;var s=ea;e=na;var c=32-me(s)-1;s&=~(1<<c),a+=1;var f=32-me(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,ea=1<<32-me(n)+c|a<<c|s,na=f+e}else ea=1<<f|a<<c|s,na=e}function hu(e){e.return!==null&&(Aa(e,1),K0(e,1,0))}function Wf(e){for(;e===fu;)fu=As[--ws],As[ws]=null,Go=As[--ws],As[ws]=null;for(;e===Qa;)Qa=wi[--Ri],wi[Ri]=null,na=wi[--Ri],wi[Ri]=null,ea=wi[--Ri],wi[Ri]=null}function Z0(e,n){wi[Ri++]=ea,wi[Ri++]=na,wi[Ri++]=Qa,ea=n.id,na=n.overflow,Qa=e}var An=null,nn=null,Te=!1,Ja=null,Ci=!1,Yf=Error(r(519));function ja(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Ai(n,e)),Yf}function Q0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[w]=e,n[V]=s,a){case"dialog":Re("cancel",n),Re("close",n);break;case"iframe":case"object":case"embed":Re("load",n);break;case"video":case"audio":for(a=0;a<cl.length;a++)Re(cl[a],n);break;case"source":Re("error",n);break;case"img":case"image":case"link":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"input":Re("invalid",n),l0(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Re("invalid",n);break;case"textarea":Re("invalid",n),c0(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||v_(n.textContent,a)?(s.popover!=null&&(Re("beforetoggle",n),Re("toggle",n)),s.onScroll!=null&&Re("scroll",n),s.onScrollEnd!=null&&Re("scrollend",n),s.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||ja(e,!0)}function du(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:An=An.return}}function Rs(e){if(e!==An)return!1;if(!Te)return du(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bd(e.type,e.memoizedProps)),a=!a),a&&nn&&ja(e),du(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=z_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=z_(e)}else n===27?(n=nn,pr(e.type)?(e=Ud,Ud=null,nn=e):nn=n):nn=An?Ni(e.stateNode.nextSibling):null;return!0}function Gr(){nn=An=null,Te=!1}function Kf(){var e=Ja;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ja=null),e}function Vo(e){Ja===null?Ja=[e]:Ja.push(e)}var Zf=le(null),Vr=null,wa=null;function $a(e,n,a){jt(Zf,n._currentValue),n._currentValue=a}function Ra(e){e._currentValue=Zf.current,Wt(Zf)}function pu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Qf(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),pu(f.return,a,e),s||(S=null);break t}f=R.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),pu(S,a,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,S=c.alternate,S!==null&&(S.lanes|=a),pu(c.return,a,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function kr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=c.type;hi(c.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(c===Be.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push($s):e=[$s])}c=c.return}return e!==null&&Qf(n,e,a,s),n.flags|=262144,e!==null}function mu(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xr(e){Vr=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return J0(Vr,e)}function gu(e,n){return Vr===null&&Xr(e),J0(e,n)}function J0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wa===null){if(e===null)throw Error(r(308));wa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else wa=wa.next=n;return a}var AM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wM=o.unstable_scheduleCallback,RM=o.unstable_NormalPriority,mn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jf(){return{controller:new AM,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&wM(RM,function(){e.controller.abort()})}function j0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Xo=null;function CM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var qo=null,jf=0,qr=0,Cs=null;function DM(e,n){if(qo===null){var a=qo=[];jf=0,qr=pd(),Cs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return jf++,n.then($0,$0),n}function $0(){if(--jf===0&&(Xo=null,qo!==null)){Cs!==null&&(Cs.status="fulfilled");var e=qo;qo=null,qr=0,Cs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function NM(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var tg=st.S;st.S=function(e,n){if(Wv=Kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&DM(e,n),Xo!==null)for(var a=Ys;a!==null;)j0(a,Xo),a=a.next;if(a=e.types,a!==null){for(var s=Ys;s!==null;)j0(s,a),s=s.next;if(qr!==0){s=Xo,s===null&&(s=Xo=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}tg!==null&&tg(e,n)};var Wr=le(null);function $f(){var e=Wr.current;return e!==null?e:$e.pooledCache}function vu(e,n){n===null?jt(Wr,Wr.current):jt(Wr,n.pool)}function eg(){var e=$f();return e===null?null:{parent:mn._currentValue,pool:e}}var Ds=Error(r(460)),th=Error(r(474)),_u=Error(r(542)),xu={then:function(){}};function ng(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ig(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rg(e),e}throw Kr=n,Ds}}function Yr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Kr=a,Ds):a}}var Kr=null;function ag(){if(Kr===null)throw Error(r(459));var e=Kr;return Kr=null,e}function rg(e){if(e===Ds||e===_u)throw Error(r(483))}var Ns=null,Wo=0;function Su(e){var n=Wo;return Wo+=1,Ns===null&&(Ns=[]),ig(Ns,e,n)}function tr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yu(e,n){throw n.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sg(e){function n(tt,X){if(e){var ot=tt.deletions;ot===null?(tt.deletions=[X],tt.flags|=16):ot.push(X)}}function a(tt,X){if(!e)return null;for(;X!==null;)n(tt,X),X=X.sibling;return null}function s(tt){for(var X=new Map;tt!==null;)tt.key===null?X.set(tt.index,tt):X.set(tt.key,tt),tt=tt.sibling;return X}function c(tt,X){return tt=Ta(tt,X),tt.index=0,tt.sibling=null,tt}function f(tt,X,ot){return tt.index=ot,e?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<X?(tt.flags|=2,X):ot):(tt.flags|=134217730,X)):(tt.flags|=1048576,X)}function S(tt){return e&&tt.alternate===null&&(tt.flags|=134217730),tt}function R(tt,X,ot,yt){return X===null||X.tag!==6?(X=Xf(ot,tt.mode,yt),X.return=tt,X):(X=c(X,ot),X.return=tt,X)}function B(tt,X,ot,yt){var Jt=ot.type;return Jt===G?(tt=pt(tt,X,ot.props.children,yt,ot.key),tr(tt,ot),tt):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===lt&&Yr(Jt)===X.type)?(X=c(X,ot.props),tr(X,ot),X.return=tt,X):(X=cu(ot.type,ot.key,ot.props,null,tt.mode,yt),tr(X,ot),X.return=tt,X)}function et(tt,X,ot,yt){return X===null||X.tag!==4||X.stateNode.containerInfo!==ot.containerInfo||X.stateNode.implementation!==ot.implementation?(X=qf(ot,tt.mode,yt),X.return=tt,X):(X=c(X,ot.children||[]),X.return=tt,X)}function pt(tt,X,ot,yt,Jt){return X===null||X.tag!==7?(X=Hr(ot,tt.mode,yt,Jt),X.return=tt,X):(X=c(X,ot),X.return=tt,X)}function Mt(tt,X,ot){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Xf(""+X,tt.mode,ot),X.return=tt,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case O:return ot=cu(X.type,X.key,X.props,null,tt.mode,ot),tr(ot,X),ot.return=tt,ot;case F:return X=qf(X,tt.mode,ot),X.return=tt,X;case lt:return X=Yr(X),Mt(tt,X,ot)}if(Ut(X)||q(X))return X=Hr(X,tt.mode,ot,null),X.return=tt,X;if(typeof X.then=="function")return Mt(tt,Su(X),ot);if(X.$$typeof===$)return Mt(tt,gu(tt,X),ot);yu(tt,X)}return null}function j(tt,X,ot,yt){var Jt=X!==null?X.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Jt!==null?null:R(tt,X,""+ot,yt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case O:return ot.key===Jt?B(tt,X,ot,yt):null;case F:return ot.key===Jt?et(tt,X,ot,yt):null;case lt:return ot=Yr(ot),j(tt,X,ot,yt)}if(Ut(ot)||q(ot))return Jt!==null?null:pt(tt,X,ot,yt,null);if(typeof ot.then=="function")return j(tt,X,Su(ot),yt);if(ot.$$typeof===$)return j(tt,X,gu(tt,ot),yt);yu(tt,ot)}return null}function ht(tt,X,ot,yt,Jt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return tt=tt.get(ot)||null,R(X,tt,""+yt,Jt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case O:return tt=tt.get(yt.key===null?ot:yt.key)||null,B(X,tt,yt,Jt);case F:return tt=tt.get(yt.key===null?ot:yt.key)||null,et(X,tt,yt,Jt);case lt:return yt=Yr(yt),ht(tt,X,ot,yt,Jt)}if(Ut(yt)||q(yt))return tt=tt.get(ot)||null,pt(X,tt,yt,Jt,null);if(typeof yt.then=="function")return ht(tt,X,ot,Su(yt),Jt);if(yt.$$typeof===$)return ht(tt,X,ot,gu(X,yt),Jt);yu(X,yt)}return null}function It(tt,X,ot,yt){for(var Jt=null,Ue=null,ae=X,ue=X=0,_n=null;ae!==null&&ue<ot.length;ue++){ae.index>ue?(_n=ae,ae=null):_n=ae.sibling;var Ie=j(tt,ae,ot[ue],yt);if(Ie===null){ae===null&&(ae=_n);break}e&&ae&&Ie.alternate===null&&n(tt,ae),X=f(Ie,X,ue),Ue===null?Jt=Ie:Ue.sibling=Ie,Ue=Ie,ae=_n}if(ue===ot.length)return a(tt,ae),Te&&Aa(tt,ue),Jt;if(ae===null){for(;ue<ot.length;ue++)ae=Mt(tt,ot[ue],yt),ae!==null&&(X=f(ae,X,ue),Ue===null?Jt=ae:Ue.sibling=ae,Ue=ae);return Te&&Aa(tt,ue),Jt}for(ae=s(ae);ue<ot.length;ue++)_n=ht(ae,tt,ue,ot[ue],yt),_n!==null&&(e&&(Ie=_n.alternate,Ie!==null&&ae.delete(Ie.key===null?ue:Ie.key)),X=f(_n,X,ue),Ue===null?Jt=_n:Ue.sibling=_n,Ue=_n);return e&&ae.forEach(function(xr){return n(tt,xr)}),Te&&Aa(tt,ue),Jt}function ee(tt,X,ot,yt){if(ot==null)throw Error(r(151));for(var Jt=null,Ue=null,ae=X,ue=X=0,_n=null,Ie=ot.next();ae!==null&&!Ie.done;ue++,Ie=ot.next()){ae.index>ue?(_n=ae,ae=null):_n=ae.sibling;var xr=j(tt,ae,Ie.value,yt);if(xr===null){ae===null&&(ae=_n);break}e&&ae&&xr.alternate===null&&n(tt,ae),X=f(xr,X,ue),Ue===null?Jt=xr:Ue.sibling=xr,Ue=xr,ae=_n}if(Ie.done)return a(tt,ae),Te&&Aa(tt,ue),Jt;if(ae===null){for(;!Ie.done;ue++,Ie=ot.next())Ie=Mt(tt,Ie.value,yt),Ie!==null&&(X=f(Ie,X,ue),Ue===null?Jt=Ie:Ue.sibling=Ie,Ue=Ie);return Te&&Aa(tt,ue),Jt}for(ae=s(ae);!Ie.done;ue++,Ie=ot.next())Ie=ht(ae,tt,ue,Ie.value,yt),Ie!==null&&(e&&(_n=Ie.alternate,_n!==null&&ae.delete(_n.key===null?ue:_n.key)),X=f(Ie,X,ue),Ue===null?Jt=Ie:Ue.sibling=Ie,Ue=Ie);return e&&ae.forEach(function(fb){return n(tt,fb)}),Te&&Aa(tt,ue),Jt}function xe(tt,X,ot,yt){if(typeof ot=="object"&&ot!==null&&ot.type===G&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case O:t:{for(var Jt=ot.key;X!==null;){if(X.key===Jt){if(Jt=ot.type,Jt===G){if(X.tag===7){a(tt,X.sibling),yt=c(X,ot.props.children),tr(yt,ot),yt.return=tt,tt=yt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===lt&&Yr(Jt)===X.type){a(tt,X.sibling),yt=c(X,ot.props),tr(yt,ot),yt.return=tt,tt=yt;break t}a(tt,X);break}else n(tt,X);X=X.sibling}ot.type===G?(yt=Hr(ot.props.children,tt.mode,yt,ot.key),tr(yt,ot),yt.return=tt,tt=yt):(yt=cu(ot.type,ot.key,ot.props,null,tt.mode,yt),tr(yt,ot),yt.return=tt,tt=yt)}return S(tt);case F:t:{for(Jt=ot.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===ot.containerInfo&&X.stateNode.implementation===ot.implementation){a(tt,X.sibling),yt=c(X,ot.children||[]),yt.return=tt,tt=yt;break t}else{a(tt,X);break}else n(tt,X);X=X.sibling}yt=qf(ot,tt.mode,yt),yt.return=tt,tt=yt}return S(tt);case lt:return ot=Yr(ot),xe(tt,X,ot,yt)}if(Ut(ot))return It(tt,X,ot,yt);if(q(ot)){if(Jt=q(ot),typeof Jt!="function")throw Error(r(150));return ot=Jt.call(ot),ee(tt,X,ot,yt)}if(typeof ot.then=="function")return xe(tt,X,Su(ot),yt);if(ot.$$typeof===$)return xe(tt,X,gu(tt,ot),yt);yu(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,X!==null&&X.tag===6?(a(tt,X.sibling),yt=c(X,ot),yt.return=tt,tt=yt):(a(tt,X),yt=Xf(ot,tt.mode,yt),yt.return=tt,tt=yt),S(tt)):a(tt,X)}return function(tt,X,ot,yt){try{Wo=0;var Jt=xe(tt,X,ot,yt);return Ns=null,Jt}catch(ae){if(ae===Ds||ae===_u)throw ae;var Ue=$n(29,ae,null,tt.mode);return Ue.lanes=yt,Ue.return=tt,Ue}}}var Zr=sg(!0),og=sg(!1),er=!1;function eh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function nr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ir(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ve&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=uu(e),X0(e,null,a),n}return lu(e,s,n,a),uu(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ro(e,a)}}function ih(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ah=!1;function Ko(){if(ah){var e=Cs;if(e!==null)throw e}}function Zo(e,n,a,s){ah=!1;var c=e.updateQueue;er=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,et=B.next;B.next=null,S===null?f=et:S.next=et,S=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==S&&(R===null?pt.firstBaseUpdate=et:R.next=et,pt.lastBaseUpdate=B))}if(f!==null){var Mt=c.baseState;S=0,pt=et=B=null,R=f;do{var j=R.lane&-536870913,ht=j!==R.lane;if(ht?(Ne&j)===j:(s&j)===j){j!==0&&j===qr&&(ah=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var It=e,ee=R;j=n;var xe=a;switch(ee.tag){case 1:if(It=ee.payload,typeof It=="function"){Mt=It.call(xe,Mt,j);break t}Mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=ee.payload,j=typeof It=="function"?It.call(xe,Mt,j):It,j==null)break t;Mt=N({},Mt,j);break t;case 2:er=!0}}j=R.callback,j!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=c.callbacks,ht===null?c.callbacks=[j]:ht.push(j))}else ht={lane:j,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(et=pt=ht,B=Mt):pt=pt.next=ht,S|=j;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,c.lastBaseUpdate=ht,c.shared.pending=null}}while(!0);pt===null&&(B=Mt),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),cr|=S,e.lanes=S,e.memoizedState=Mt}}function lg(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ug(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)lg(a[e],n)}var ar=le(null),Mu=le(0);function cg(e,n){e=La,jt(Mu,e),jt(ar,n),La=e|n.baseLanes}function rh(){jt(Mu,La),jt(ar,ar.current)}function sh(){La=Mu.current,Wt(ar),Wt(Mu)}var Un=le(null),Bn=null;function rr(e){var n=e.alternate;jt(Ln,Ln.current&1),jt(Un,e),Bn===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(Bn=e)}function oh(e){jt(Ln,Ln.current),jt(Un,e),Bn===null&&(Bn=e)}function fg(e){e.tag===22?(jt(Ln,Ln.current),jt(Un,e),Bn===null&&(Bn=e)):sr()}function sr(){jt(Ln,Ln.current),jt(Un,Un.current)}function di(e){Wt(Un),Bn===e&&(Bn=null),Wt(Ln)}var Ln=le(0);function Qo(e,n){jt(Un,Un.current),jt(Ln,n)}function lh(e){Wt(Ln),Wt(Un),Bn===e&&(Bn=null)}function bu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Dd(a)||Nd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ca=0,_e=null,je=null,gn=null,Eu=!1,Us=!1,Qr=!1,Tu=0,Jo=0,Ls=null,UM=0;function hn(){throw Error(r(321))}function uh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function ch(e,n,a,s,c,f){return Ca=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,st.H=e===null||e.memoizedState===null?Kg:Zg,Qr=!1,f=a(s,c),Qr=!1,Us&&(f=dg(n,a,s,c)),hg(e),f}function hg(e){st.H=Uu;var n=je!==null&&je.next!==null;if(Ca=0,gn=je=_e=null,Eu=!1,Jo=0,Ls=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&mu(e)&&(vn=!0))}function dg(e,n,a,s){_e=e;var c=0;do{if(Us&&(Ls=null),Jo=0,Us=!1,25<=c)throw Error(r(301));if(c+=1,gn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}st.H=HM,f=n(a,s)}while(Us);return f}function LM(){var e=st.H,n=e.useState()[0];return n=typeof n.then=="function"?jo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(_e.flags|=1024),n}function fh(){var e=Tu!==0;return Tu=0,e}function hh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function dh(e){if(Eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Eu=!1}Ca=0,gn=je=_e=null,Us=!1,Jo=Tu=0,Ls=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?_e.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(je===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?_e.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?_e.memoizedState=gn=e:gn=gn.next=e}return gn}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var n=Jo;return Jo+=1,Ls===null&&(Ls=[]),e=ig(Ls,e,n),n=_e,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,st.H=n===null||n.memoizedState===null?Kg:Zg),e}function wu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jo(e);if(e.$$typeof===mt)return;if(e.$$typeof===$)return Nn(e)}throw Error(r(438,String(e)))}function ph(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=Tt;return n.index++,a}function Da(e,n){return typeof n=="function"?n(e):n}function Ru(e){var n=pn();return mh(n,je,e)}function mh(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=S=null,B=null,et=n,pt=!1;do{var Mt=et.lane&-536870913;if(Mt!==et.lane?(Ne&Mt)===Mt:(Ca&Mt)===Mt){var j=et.revertLane;if(j===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Mt===qr&&(pt=!0);else if((Ca&j)===j){et=et.next,j===qr&&(pt=!0);continue}else Mt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=Mt,S=f):B=B.next=Mt,_e.lanes|=j,cr|=j;Mt=et.action,Qr&&a(f,Mt),f=et.hasEagerState?et.eagerState:a(f,Mt)}else j={lane:Mt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=j,S=f):B=B.next=j,_e.lanes|=Mt,cr|=Mt;et=et.next}while(et!==null&&et!==n);if(B===null?S=f:B.next=R,!hi(f,e.memoizedState)&&(vn=!0,pt&&(a=Cs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function gh(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);hi(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function pg(e,n,a){var s=_e,c=pn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!hi((je||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,xh(vg.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||S||gn!==null&&(gn.memoizedState.tag&1)!==0,Os(e?9:8,{destroy:void 0},gg.bind(null,s,c,a,n),null),e){if(s.flags|=2048,$e===null)throw Error(r(349));f||(Ca&127)!==0||mg(s,n,a)}return a}function mg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Au(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function gg(e,n,a,s){n.value=a,n.getSnapshot=s,_g(n)&&xg(e)}function vg(e,n,a){return a(function(){_g(n)&&xg(e)})}function _g(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function xg(e){var n=Fr(e,2);n!==null&&ii(n,e,2)}function vh(e){var n=Kn();if(typeof e=="function"){var a=e;if(e=a(),Qr){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},n}function Sg(e,n,a,s){return e.baseState=a,mh(e,je,typeof s=="function"?s:Da)}function OM(e,n,a,s,c){if(Nu(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};st.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,yg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function yg(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=st.T,S={};S.types=f!==null?f.types:null,st.T=S;try{var R=a(c,s),B=st.S;B!==null&&B(S,R),Mg(e,n,R)}catch(et){_h(e,n,et)}finally{f!==null&&S.types!==null&&(f.types=S.types),st.T=f}}else try{f=a(c,s),Mg(e,n,f)}catch(et){_h(e,n,et)}}function Mg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){bg(e,n,s)},function(s){return _h(e,n,s)}):bg(e,n,a)}function bg(e,n,a){n.status="fulfilled",n.value=a,Eg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,yg(e,a)))}function _h(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Eg(n),n=n.next;while(n!==s)}e.action=null}function Eg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Tg(e,n){return n}function Ag(e,n){if(Te){var a=$e.formState;if(a!==null){t:{var s=_e;if(Te){if(nn){e:{for(var c=nn,f=Ci;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ni(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Ni(c.nextSibling),s=c.data==="F!";break t}}ja(s)}s=!1}s&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:n},a.queue=s,a=qg.bind(null,_e,s),s.dispatch=a,s=vh(!1),f=Eh.bind(null,_e,!1,s.queue),s=Kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=OM.bind(null,_e,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function wg(e){var n=pn();return Rg(n,je,e)}function Rg(e,n,a){if(n=mh(e,n,Tg)[0],e=Ru(Da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=jo(n)}catch(S){throw S===Ds?_u:S}else s=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Os(9,{destroy:void 0},PM.bind(null,c,a),null)),[s,f,e]}function PM(e,n){e.action=n}function Cg(e){var n=pn(),a=je;if(a!==null)return Rg(n,a,e);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Os(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Au(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Dg(){return pn().memoizedState}function Cu(e,n,a,s){var c=Kn();_e.flags|=e,c.memoizedState=Os(1|n,{destroy:void 0},a,s===void 0?null:s)}function Du(e,n,a,s){var c=pn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&uh(s,je.memoizedState.deps)?c.memoizedState=Os(n,f,a,s):(_e.flags|=e,c.memoizedState=Os(1|n,f,a,s))}function Ng(e,n){Cu(8390656,8,e,n)}function xh(e,n){Du(2048,8,e,n)}function zM(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Au(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ug(e){var n=pn().memoizedState;return zM({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Lg(e,n){return Du(4,2,e,n)}function Og(e,n){return Du(4,4,e,n)}function Pg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zg(e,n,a){a=a!=null?a.concat([e]):null,Du(4,4,Pg.bind(null,n,e),a)}function Sh(){}function Ig(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&uh(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Bg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&uh(n,s[1]))return s[0];if(s=e(),Qr){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[s,n],s}function yh(e,n,a){return a===void 0||(Ca&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kv(),_e.lanes|=e,cr|=e,a)}function Fg(e,n,a,s){return hi(a,n)?a:ar.current!==null?(e=yh(e,a,s),hi(e,n)||(vn=!0),e):(Ca&106)===0||(Ca&1073741824)!==0&&(Ne&261930)===0?(vn=!0,e.memoizedState=a):(e=Kv(),_e.lanes|=e,cr|=e,n)}function Hg(e,n,a,s,c){var f=ut.p;ut.p=f!==0&&8>f?f:8;var S=st.T,R={};R.types=S!==null?S.types:null,st.T=R,Eh(e,!1,n,a);try{var B=c(),et=st.S;if(et!==null&&et(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=NM(B,s);$o(e,n,pt,vi(e))}else $o(e,n,s,vi(e))}catch(Mt){$o(e,n,{then:function(){},status:"rejected",reason:Mt},vi())}finally{ut.p=f,S!==null&&R.types!==null&&(S.types=R.types),st.T=S}}function IM(){}function Mh(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Gg(e).queue;Hg(e,c,n,Ct,a===null?IM:function(){return Vg(e),a(s)})}function Gg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ct,baseState:Ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:Ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vg(e){var n=Gg(e);n.next===null&&(n=e.alternate.memoizedState),$o(e,n.next.queue,{},vi())}function bh(){return Nn($s)}function kg(){return pn().memoizedState}function Xg(){return pn().memoizedState}function BM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vi();e=nr(a);var s=ir(n,e,a);s!==null&&(ii(s,n,a),Yo(s,n,a)),n={cache:Jf()},e.payload=n;return}n=n.return}}function FM(e,n,a){var s=vi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?Wg(n,a):(a=Vf(e,n,a,s),a!==null&&(ii(a,e,s),Yg(a,n,s)))}function qg(e,n,a){var s=vi();$o(e,n,a,s)}function $o(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Wg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(c.hasEagerState=!0,c.eagerState=R,hi(R,S))return lu(e,n,c,0),$e===null&&ou(),!1}catch{}if(a=Vf(e,n,c,s),a!==null)return ii(a,e,s),Yg(a,n,s),!0}return!1}function Eh(e,n,a,s){if(s={lane:2,revertLane:pd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(n)throw Error(r(479))}else n=Vf(e,a,s,2),n!==null&&ii(n,e,2)}function Nu(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Wg(e,n){Us=Eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Yg(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ro(e,a)}}var Uu={readContext:Nn,use:wu,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Kg={readContext:Nn,use:wu,useCallback:function(e,n){return Kn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:Ng,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cu(4194308,4,Pg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cu(4194308,4,e,n)},useInsertionEffect:function(e,n){Cu(4,2,e,n)},useMemo:function(e,n){var a=Kn();n=n===void 0?null:n;var s=e();if(Qr){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Kn();if(a!==void 0){var c=a(n);if(Qr){Oe(!0);try{a(n)}finally{Oe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=FM.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var n=Kn();return e={current:e},n.memoizedState=e},useState:function(e){e=vh(e);var n=e.queue,a=qg.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sh,useDeferredValue:function(e,n){var a=Kn();return yh(a,e,n)},useTransition:function(){var e=vh(!1);return e=Hg.bind(null,_e,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=_e,c=Kn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$e===null)throw Error(r(349));(Ne&127)!==0||mg(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ng(vg.bind(null,s,f,e),[e]),s.flags|=2048,Os(9,{destroy:void 0},gg.bind(null,s,f,a,n),null),a},useId:function(){var e=Kn(),n=$e.identifierPrefix;if(Te){var a=na,s=ea;a=(s&~(1<<32-me(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=UM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bh,useFormState:Ag,useActionState:Ag,useOptimistic:function(e){var n=Kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Eh.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:ph,useCacheRefresh:function(){return Kn().memoizedState=BM.bind(null,_e)},useEffectEvent:function(e){var n=Kn(),a={impl:e};return n.memoizedState=a,function(){if((Ve&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zg={readContext:Nn,use:wu,useCallback:Ig,useContext:Nn,useEffect:xh,useImperativeHandle:zg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Bg,useReducer:Ru,useRef:Dg,useState:function(){return Ru(Da)},useDebugValue:Sh,useDeferredValue:function(e,n){var a=pn();return Fg(a,je.memoizedState,e,n)},useTransition:function(){var e=Ru(Da)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:pg,useId:kg,useHostTransitionStatus:bh,useFormState:wg,useActionState:wg,useOptimistic:function(e,n){var a=pn();return Sg(a,je,e,n)},useMemoCache:ph,useCacheRefresh:Xg,useEffectEvent:Ug},HM={readContext:Nn,use:wu,useCallback:Ig,useContext:Nn,useEffect:xh,useImperativeHandle:zg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Bg,useReducer:gh,useRef:Dg,useState:function(){return gh(Da)},useDebugValue:Sh,useDeferredValue:function(e,n){var a=pn();return je===null?yh(a,e,n):Fg(a,je.memoizedState,e,n)},useTransition:function(){var e=gh(Da)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:jo(e),n]},useSyncExternalStore:pg,useId:kg,useHostTransitionStatus:bh,useFormState:Cg,useActionState:Cg,useOptimistic:function(e,n){var a=pn();return je!==null?Sg(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ph,useCacheRefresh:Xg,useEffectEvent:Ug};function Th(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ah={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=vi(),c=nr(s);c.payload=n,a!=null&&(c.callback=a),n=ir(e,c,s),n!==null&&(ii(n,e,s),Yo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=vi(),c=nr(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ir(e,c,s),n!==null&&(ii(n,e,s),Yo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vi(),s=nr(a);s.tag=2,n!=null&&(s.callback=n),n=ir(e,s,a),n!==null&&(ii(n,e,a),Yo(n,e,a))}};function Qg(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,s)||!Fo(c,f):!0}function Jg(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ah.enqueueReplaceState(n,n.state,null)}function Jr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=N({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function jg(e){su(e)}function $g(e){console.error(e)}function tv(e){su(e)}function Lu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function ev(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function wh(e,n,a){return a=nr(a),a.tag=3,a.payload={element:null},a.callback=function(){Lu(e,n)},a}function nv(e){return e=nr(e),e.tag=3,e}function iv(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){ev(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){ev(n,a,s),typeof c!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function GM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&kr(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?tc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),fd(e,s,c)),!1;case 22:return a.flags|=65536,s===xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),fd(e,s,c)),!1}throw Error(r(435,a.tag))}return fd(e,s,c),tc(),!1}if(Te)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Yf&&(e=Error(r(422),{cause:s}),Vo(Ai(e,a)))):(s!==Yf&&(n=Error(r(423),{cause:s}),Vo(Ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Ai(s,a),c=wh(e.stateNode,s,c),ih(e,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ai(f,a),ol===null?ol=[f]:ol.push(f),dn!==4&&(dn=2),n===null)return!0;s=Ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=wh(a.stateNode,s,e),ih(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(fr===null||!fr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=nv(c),iv(c,e,a,s),ih(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Rh=Error(r(461)),vn=!1;function Mn(e,n,a,s){n.child=e===null?og(n,null,a,s):Zr(n,e.child,a,s)}function av(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var R in s)R!=="ref"&&(S[R]=s[R])}else S=s;return Xr(n),s=ch(e,n,a,S,f,c),R=fh(),e!==null&&!vn?(hh(e,n,c),Na(e,n,c)):(Te&&R&&hu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function rv(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!kf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,sv(e,n,f,s,c)):(e=cu(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!zh(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(S,s)&&e.ref===n.ref)return Na(e,n,c)}return n.flags|=1,e=Ta(f,s),e.ref=n.ref,e.return=n,n.child=e}function sv(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Fo(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,zh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Na(e,n,c)}return Ch(e,n,a,s,c)}function ov(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return lv(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vu(n,f!==null?f.cachePool:null),f!==null?cg(n,f):rh(),fg(n);else return s=n.lanes=536870912,lv(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(vu(n,f.cachePool),cg(n,f),sr(),n.memoizedState=null):(e!==null&&vu(n,null),rh(),sr());return Mn(e,n,c,a),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lv(e,n,a,s,c){var f=$f();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vu(n,null),rh(),fg(n),e!==null&&kr(e,n,s,!0),n.childLanes=c,null}function Ou(e,n){return n=Pu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function uv(e,n,a){return Zr(n,e.child,null,a),e=Ou(n,n.pendingProps),e.flags|=2,di(n),n.memoizedState=null,e}function VM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(s.mode==="hidden")return e=Ou(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},tl(null,e);if(oh(n),(e=nn)?(e=P_(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=W0(e),a.return=n,n.child=a,An=n,nn=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return Ou(n,s)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(oh(n),c)if(n.flags&256)n.flags&=-257,n=uv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||kr(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(ar.current===null){if(s=$e,s!==null&&(S=Co(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,Fr(e,S),ii(s,e,S),Rh;tc()}n=uv(e,n,a)}else e=f.treeContext,nn=Ni(S.nextSibling),An=n,Te=!0,Ja=null,Ci=!1,e!==null&&Z0(n,e),n=Ou(n,s),n.flags|=134221824;return n}return e=Ta(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ps(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ch(e,n,a,s,c){return Xr(n),a=ch(e,n,a,s,void 0,c),s=fh(),e!==null&&!vn?(hh(e,n,c),Na(e,n,c)):(Te&&s&&hu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function cv(e,n,a,s,c,f){return Xr(n),n.updateQueue=null,a=dg(n,s,a,c),hg(e),s=fh(),e!==null&&!vn?(hh(e,n,f),Na(e,n,f)):(Te&&s&&hu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function fv(e,n,a,s,c){if(Xr(n),n.stateNode===null){var f=Ts,S=a.contextType;typeof S=="object"&&S!==null&&(f=Nn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ah,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},eh(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Nn(S):Ts,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Th(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ah.enqueueReplaceState(f,f.state,null),Zo(n,s,f,c),Ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=Jr(a,R);f.props=B;var et=f.context,pt=a.contextType;S=Ts,typeof pt=="object"&&pt!==null&&(S=Nn(pt));var Mt=a.getDerivedStateFromProps;pt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||et!==S)&&Jg(n,f,s,S),er=!1;var j=n.memoizedState;f.state=j,Zo(n,s,f,c),Ko(),et=n.memoizedState,R||j!==et||er?(typeof Mt=="function"&&(Th(n,a,Mt,s),et=n.memoizedState),(B=er||Qg(n,a,B,s,j,et,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,nh(e,n),S=n.memoizedProps,pt=Jr(a,S),f.props=pt,Mt=n.pendingProps,j=f.context,et=a.contextType,B=Ts,typeof et=="object"&&et!==null&&(B=Nn(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Mt||j!==B)&&Jg(n,f,s,B),er=!1,j=n.memoizedState,f.state=j,Zo(n,s,f,c),Ko();var ht=n.memoizedState;S!==Mt||j!==ht||er||e!==null&&e.dependencies!==null&&mu(e.dependencies)?(typeof R=="function"&&(Th(n,a,R,s),ht=n.memoizedState),(pt=er||Qg(n,a,pt,s,j,ht,B)||e!==null&&e.dependencies!==null&&mu(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ht,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ht,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ht),f.props=s,f.state=ht,f.context=B,s=pt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ps(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Zr(n,e.child,null,c),n.child=Zr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Na(e,n,c),e}function hv(e,n,a,s){return Gr(),n.flags|=256,Mn(e,n,a,s),n.child}var Dh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nh(e){return{baseLanes:e,cachePool:eg()}}function Uh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function dv(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(Ln.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?rr(n):sr(),(e=nn)?(e=P_(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=W0(e),a.return=n,n.child=a,An=n,nn=null)):e=null,e===null)throw ja(n);return Nd(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(sr(),c=n.mode,f=Pu({mode:"hidden",children:f},c),s=Hr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Nh(a),s.childLanes=Uh(e,S,a),n.memoizedState=Dh,tl(null,s)):(rr(n),Lh(n,f))}var R=e.memoizedState;if(R!==null){var B=R.dehydrated;if(B!==null)return kM(e,n,f,S,s,B,R,a)}return c?(sr(),c=s.fallback,f=n.mode,R=e.child,B=R.sibling,s=Ta(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,B!==null?c=Ta(B,c):(c=Hr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,tl(null,s),s=n.child,c=e.child.memoizedState,c===null?c=Nh(a):(f=c.cachePool,f!==null?(R=mn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=eg(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=Uh(e,S,a),n.memoizedState=Dh,tl(e.child,s)):(rr(n),a=e.child,e=a.sibling,a=Ta(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Lh(e,n){return n=Pu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pu(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function zu(e,n,a){return Zr(n,e.child,null,a),e=Lh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function kM(e,n,a,s,c,f,S,R){if(a)return n.flags&256?(rr(n),n.flags&=-257,zu(e,n,R)):n.memoizedState!==null?(sr(),n.child=e.child,n.flags|=128,null):(sr(),f=c.fallback,S=n.mode,c=Pu({mode:"visible",children:c.children},S),f=Hr(f,S,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Zr(n,e.child,null,R),c=n.child,c.memoizedState=Nh(R),c.childLanes=Uh(e,s,R),n.memoizedState=Dh,tl(null,c));if(rr(n),Nd(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Vo({value:c,source:null,stack:null})),zu(e,n,R)}if(vn||kr(e,n,R,!1),s=(R&e.childLanes)!==0,vn||s){if(ar.current!==null)return zu(e,n,R);if(s=$e,s!==null&&(c=Co(s,R),c!==0&&c!==S.retryLane))throw S.retryLane=c,Fr(e,c),ii(s,e,c),Rh;return Dd(f)||tc(),zu(e,n,R)}return Dd(f)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,nn=Ni(f.nextSibling),An=n,Te=!0,Ja=null,Ci=!1,e!==null&&Z0(n,e),n=Lh(n,c.children),n.flags|=134221824,n)}function pv(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),pu(e.return,n,a)}function mv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&bu(a)===null&&(n=e),e=e.sibling}return n}function Iu(e,n,a,s,c,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function Oh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Ph(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var S=Ln.current;if(n.flags&128)return Qo(n,S),null;var R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Qo(n,S),c==="backwards"&&e!==null?(Oh(e),Mn(e,n,s,a),Oh(e)):Mn(e,n,s,a),s=Te?Go:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pv(e,a,n);else if(e.tag===19)pv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=mv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Oh(n)),Iu(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&bu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Iu(n,!0,a,null,f,s);break;case"together":Iu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=mv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Iu(n,!1,c,a,f,s)}return n.child}function gv(e,n,a){var s=n.pendingProps;return $a(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function Na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),cr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function zh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&mu(e)))}function XM(e,n,a){switch(n.tag){case 3:Z(n,n.stateNode.containerInfo),$a(n,mn,e.memoizedState.cache),Gr();break;case 27:case 5:ye(n);break;case 4:Z(n,n.stateNode.containerInfo);break;case 10:$a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,oh(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return rr(n),n.flags|=128,null;s=kr(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?dv(e,n,a):(rr(n),e=Na(e,n,a),e!==null?e.sibling:null)}rr(n);break;case 19:if(n.flags&128)return Ph(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(kr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ph(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Qo(n,Ln.current),s)break;return null;case 22:return n.lanes=0,ov(e,n,a,n.pendingProps);case 24:$a(n,mn,e.memoizedState.cache)}return Na(e,n,a)}function vv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!zh(e,a)&&(n.flags&128)===0)return vn=!1,XM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&K0(n,Go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Yr(n.elementType),n.type=e,typeof e=="function")kf(e)?(s=Jr(e,s),n.tag=1,n=fv(null,n,e,s,a)):(n.tag=0,n=Ch(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===K){n.tag=11,n=av(null,n,e,s,a);break t}else if(c===rt){n.tag=14,n=rv(null,n,e,s,a);break t}else if(c===$){n.tag=10,n.type=e,n=gv(null,n,a);break t}}throw n=At(e)||e,Error(r(306,n,""))}}return n;case 0:return Ch(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Jr(s,n.pendingProps),fv(e,n,s,c,a);case 3:t:{if(Z(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,nh(e,n),Zo(n,s,null,a);var S=n.memoizedState;if(s=S.cache,$a(n,mn,s),s!==f.cache&&Qf(n,[mn],a,!0),Ko(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=hv(e,n,s,a);break t}else if(s!==c){c=Ai(Error(r(424)),n),Vo(c),n=hv(e,n,s,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=Ni(e.firstChild),An=n,Te=!0,Ja=null,Ci=!0,a=og(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Gr(),s===c){n=Na(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ps(e,n),e===null?(a=V_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=y_(n.type,n.pendingProps,Se.current,n)):n.memoizedState=V_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ye(n),e===null&&Te&&(s=n.stateNode=B_(n.type,n.pendingProps,Se.current),An=n,Ci=!0,c=nn,pr(n.type)?(Ud=c,nn=Ni(s.firstChild)):nn=c),Mn(e,n,n.pendingProps.children,a),Ps(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=s=nn)&&(s=B1(s,n.type,n.pendingProps,Ci),s!==null?(n.stateNode=s,An=n,nn=Ni(s.firstChild),Ci=!1,c=!0):c=!1),c||ja(n)),ye(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,bd(c,f)?s=null:S!==null&&bd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ch(e,n,LM,null,null,a),$s._currentValue=c),Ps(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Te&&((e=a=nn)&&(a=F1(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,An=n,nn=null,e=!0):e=!1),e||ja(n)),null;case 13:return dv(e,n,a);case 4:return Z(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Zr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return av(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ps(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return gv(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Xr(n),c=Nn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return rv(e,n,n.type,n.pendingProps,a);case 15:return sv(e,n,n.type,n.pendingProps,a);case 19:return Ph(e,n,a);case 31:return VM(e,n,a);case 22:return ov(e,n,a,n.pendingProps);case 24:return Xr(n),s=Nn(mn),e===null?(c=$f(),c===null&&(c=$e,f=Jf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},eh(n),$a(n,mn,c)):((e.lanes&a)!==0&&(nh(e,n),Zo(n,null,null,a),Ko()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),$a(n,mn,s)):(s=f.cache,$a(n,mn,s),s!==c.cache&&Qf(n,[mn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&hu(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ps(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ua(e){e.flags|=4}function Ih(e,n,a,s,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?W_(n,s):W_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(jv())e.flags|=8192;else throw Kr=xu,th}else e.flags&=-16777217}function _v(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Y_(n))if(jv())e.flags|=8192;else throw Kr=xu,th}function Bu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?wo():536870912,e.lanes|=n,Hs|=n)}function el(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function qM(e,n,a){var s=n.pendingProps;switch(Wf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ra(mn),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rs(n)?Ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ua(n),f!==null?(an(n),_v(n,f)):(an(n),Ih(n,c,null,s,a))):f?f!==e.memoizedState?(Ua(n),an(n),_v(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ua(n),an(n),Ih(n,c,e,s,a)),null;case 27:if(P(n),a=Se.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}e=ve.current,Rs(n)?Q0(n):(e=B_(c,s,a),n.stateNode=e,Ua(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=ve.current,Rs(n))Q0(n);else{var S=hl(Se.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(c,{is:s.is}):S.createElement(c)}}f[w]=n,f[V]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Pn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ua(n)}}return an(n),n.subtreeFlags&=-33554433,Ih(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ua(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Se.current,Rs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=An,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[w]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||ja(n,!0)}else e=hl(e).createTextNode(s),e[w]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Rs(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[w]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Rs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[w]=n}else Gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bu(n,n.updateQueue),an(n),null);case 4:return We(),e===null&&_d(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ra(n.type),an(n),null;case 19:if(lh(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)el(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bu(e),f!==null){for(n.flags|=128,el(s,!1),e=f.updateQueue,n.updateQueue=e,Bu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)q0(a,e),a=a.sibling;return Qo(n,Ln.current&1|2),Te&&Aa(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Kt()>Qu&&(n.flags|=128,c=!0,el(s,!1),n.lanes=4194304)}else{if(!c)if(e=bu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Bu(n,e),el(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Te)return an(n),null}else 2*Kt()-s.renderingStartTime>Qu&&a!==536870912&&(n.flags|=128,c=!0,el(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,f=Ln.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Te?Qo(n,f):(a=f,jt(Un,n),jt(Ln,a),Bn===null&&(Bn=n)),Te&&Aa(n,s.treeForkCount),e}return an(n),null;case 22:case 23:return di(n),sh(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Bu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Wt(Wr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ra(mn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function WM(e,n){switch(Wf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ra(mn),We(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(di(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return lh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return We(),null;case 10:return Ra(n.type),null;case 22:case 23:return di(n),sh(),e!==null&&Wt(Wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ra(mn),null;case 25:return null;default:return null}}function xv(e,n){switch(Wf(n),n.tag){case 3:Ra(mn),We();break;case 26:case 27:case 5:P(n);break;case 4:We();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:lh(n);break;case 10:Ra(n.type);break;case 22:case 23:di(n),sh(),e!==null&&Wt(Wr);break;case 24:Ra(mn)}}function nl(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(R){Ke(n,n.return,R)}}function or(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,c=n;var B=a,et=R;try{et()}catch(pt){Ke(c,B,pt)}}}s=s.next}while(s!==f)}}catch(pt){Ke(n,n.return,pt)}}function Sv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ug(n,a)}catch(s){Ke(e,e.return,s)}}}function yv(e,n,a){a.props=Jr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ke(e,n,s)}}function ia(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,f=ba(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=R_(f)),s=c.ref;break;case 7:if(e.stateNode===null){var S=new _i(e);_(e.child,!1,z1,S,void 0,void 0),e.stateNode=S}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){Ke(e,n,R)}}function On(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ke(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ke(e,n,c)}else a.current=null}function Fu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)O_(e.stateNode,n[a])}function Mv(e){for(var n=e.return;n!==null&&(Fh(n)&&O_(e.stateNode,n.stateNode),!Bh(n));)n=n.return}function il(e){for(var n=e.return;n!==null&&(Fh(n)&&I1(e.stateNode,n.stateNode),!Bh(n));)n=n.return}function Bh(e){return e.tag===5||e.tag===3||e.tag===27}function Fh(e){return e&&e.tag===7&&e.stateNode!==null}function Hh(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ke(e,e.return,c)}}function Gh(e,n,a){try{var s=e.stateNode;_1(s,e.type,a,n),s[V]=n}catch(c){Ke(e,e.return,c)}}function bv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pr(e.type)||e.tag===4}function Vh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kh(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta)),Fu(e,s),Ee=!0;else if(c!==4&&(c===27&&(Fu(e,s),s=null,pr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(kh(e,n,a,s),e=e.sibling;e!==null;)kh(e,n,a,s),e=e.sibling}function Hu(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Fu(e,s),Ee=!0;else if(c!==4&&(c===27&&(Fu(e,s),s=null,pr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Hu(e,n,a,s),e=e.sibling;e!==null;)Hu(e,n,a,s),e=e.sibling}function Ev(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Pn(n,s,a),n[w]=e,n[V]=a}catch(f){Ke(e,e.return,f)}}var Gu=!1,pi=null;function Tv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Gu=!0)}var aa=null;function Av(){var e=aa;return aa=null,e}var ti=0;function zs(e,n,a,s,c){return ti=0,wv(e.child,n,a,s,c)}function wv(e,n,a,s,c){for(var f=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(s!==null){var R=Ad(S);s.push(R),R.view&&(f=!0)}else f||Ad(S).view&&(f=!0);Gu=!0,A_(S,ti===0?n:n+"_"+ti,a),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||wv(e.child,n,a,s,c)&&(f=!0));e=e.sibling}return f}function ra(e,n){for(;e!==null;)e.tag===5?w_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ra(e.child,n)),e=e.sibling}function Vu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Ea(n.default,n.share),n!=="none"&&(zs(e,a,n,null,!1)||ra(e.child,!1))}e=e.sibling}}function Xh(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=ba(s,a),f=Ea(s.default,a.paired?s.share:s.enter);f!=="none"?zs(e,c,f,null,!1)?(Vu(e),a.paired||n||Xs(e,s.onEnter)):ra(e.child,!1):Vu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xh(e,n),e=e.sibling;else Vu(e)}function qh(e){if(pi!==null&&pi.size!==0){var n=pi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=Ea(a.default,a.share);if(f!=="none"&&(zs(e,s,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Xs(e,a.onShare)):ra(e.child,!1)),n.delete(s),n.size===0)break}}}qh(e)}e=e.sibling}}}function Wh(e){if(e.tag===30){var n=e.memoizedProps,a=ba(n,e.stateNode),s=pi!==null?pi.get(a):void 0,c=Ea(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(zs(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,pi.delete(a),Xs(e,n.onShare)):Xs(e,n.onExit):ra(e.child,!1)),pi!==null&&qh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wh(e),e=e.sibling;else pi!==null&&qh(e)}function Rv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ba(n,e.stateNode);n=Ea(n.default,n.update),e.flags&=-5,n!=="none"&&zs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Rv(e);e=e.sibling}}function Yh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ra(e.child,!1))}Yh(e)}e=e.sibling}}function ku(e){if(e.tag===30)e.stateNode.paired=null,ra(e.child,!1),Yh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ku(e),e=e.sibling;else Yh(e)}function Cv(e){for(e=e.child;e!==null;)e.tag===30?ra(e.child,!1):(e.subtreeFlags&33554432)!==0&&Cv(e),e=e.sibling}function Kh(e,n,a,s,c,f,S){for(var R=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&ti<f.length){var et=f[ti],pt=Ad(B);(et.view||pt.view)&&(R=!0);var Mt;if(Mt=(e.flags&4)===0)if(pt.clip)Mt=!0;else{Mt=et.rect;var j=pt.rect;Mt=Mt.y!==j.y||Mt.x!==j.x||Mt.height!==j.height||Mt.width!==j.width}Mt&&(e.flags|=4),pt.abs?pt=!et.abs:(et=et.rect,pt=pt.rect,pt=et.height!==pt.height||et.width!==pt.width),pt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&A_(B,ti===0?a:a+"_"+ti,c),R&&(e.flags&4)!==0||(aa===null&&(aa=[]),aa.push(B,ti===0?s:s+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Kh(e,n.child,a,s,c,f,S)&&(R=!0));n=n.sibling}return R}function Dv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=ba(a,s),f=Ea(a.default,a.update),S;S=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;ti=0,c=Kh(s,R,c,c,f,S,!1),(e.flags&4)!==0&&c&&Xs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Dv(e);e=e.sibling}}var wn=!1,Xe=!1,sa=!1,Zh=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,oa=!1,al=!1,Xu=!1,Qh=!1;function YM(e,n,a){if(e=e.containerInfo,yd=to,e=P0(e),zf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{s.nodeType,S.nodeType}catch{s=null;break t}var R=0,B=-1,et=-1,pt=0,Mt=0,j=e,ht=null;e:for(;;){for(var It;j!==s||f!==0&&j.nodeType!==3||(B=R+f),j!==S||c!==0&&j.nodeType!==3||(et=R+c),j.nodeType===3&&(R+=j.nodeValue.length),(It=j.firstChild)!==null;)ht=j,j=It;for(;;){if(j===e)break e;if(ht===s&&++pt===f&&(B=R),ht===S&&++Mt===c&&(et=R),(It=j.nextSibling)!==null)break;j=ht,ht=j.parentNode}j=It}s=B===-1||et===-1?null:{start:B,end:et}}else s=null}s=s||{start:0,end:0}}else s=null;for(Md={focusedElem:e,selectionRange:s},to=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&Wh(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&Tv(e),qu(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Wh(s),qu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Tv(e),qu(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Rn=s):(a&&Rv(e),qu(a))}}pi=null}function qu(e){for(;Rn!==null;){var n=Rn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var S=Jr(n.type,c);a=f.getSnapshotBeforeUpdate(S,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ke(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Cd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Cd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ba(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=Ea(c.default,c.update),c!=="none"&&zs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function Uv(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),s&4&&nl(5,a);break;case 1:if(la(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ke(a,a.return,S)}else{var c=Jr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ke(a,a.return,S)}}s&64&&Sv(a),s&512&&ia(a,a.return);break;case 3:if(la(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ug(e,n)}catch(S){Ke(a,a.return,S)}}break;case 27:n===null&&s&4&&Ev(a);case 26:case 5:la(e,a),n===null&&s&4&&Hh(a),s&512&&ia(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),s&4&&zv(e,a);break;case 13:la(e,a),s&4&&Iv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=r1.bind(null,a),H1(e,a))));break;case 22:if(s=a.memoizedState!==null||wn,!s){var f=n!==null&&n.memoizedState!==null||Xe;n=wn,c=Xe,wn=s,(Xe=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Hi(e,a,s)):la(e,a),wn=n,Xe=c}break;case 30:la(e,a),s&512&&ia(a,a.return);break;case 7:s&512&&ia(a,a.return);default:la(e,a)}}function Jh(e,n){for(e=e.child;e!==null;)Lv(e,n),e=e.sibling}function Lv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,S=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(B){Ke(e,e.return,B)}jh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ee=!0}catch(B){Ke(e,e.return,B)}break;case 18:try{var R=e.stateNode;n?T_(R,!0):T_(e.stateNode,!1)}catch(B){Ke(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&Jh(e,n);break;default:Jh(e,n)}}function jh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,s=n;switch(a.tag){case 4:Lv(a,s);break t;case 22:a.memoizedState===null&&jh(a,s);break t;default:jh(a,s)}}e=e.sibling}}function Ov(e){var n=e.alternate;n!==null&&(e.alternate=null,Ov(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&te(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,ei=!1;function Bi(e,n,a){for(a=a.child;a!==null;)Pv(e,n,a),a=a.sibling}function Pv(e,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:Xe||On(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Xe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||On(a,n),il(a);var s=ln,c=ei;pr(a.type)&&(ln=a.stateNode,ei=!1),Bi(e,n,a),F_(a.stateNode,a.type,a.memoizedProps),ln=s,ei=c;break;case 5:Xe||On(a,n),il(a);case 6:if(a.tag===6&&il(a),s=ln,c=ei,ln=null,Bi(e,n,a),ln=s,ei=c,ln!==null)if(ei)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode),Ee=!0}catch(f){Ke(a,n,f)}else try{ln.removeChild(a.stateNode),Ee=!0}catch(f){Ke(a,n,f)}break;case 18:ln!==null&&(ei?(e=ln,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),eo(e)):E_(ln,a.stateNode));break;case 4:s=ln,c=ei,ln=a.stateNode.containerInfo,ei=!0,Bi(e,n,a),ln=s,ei=c;break;case 0:case 11:case 14:case 15:or(2,a,n),Xe||or(4,a,n),Bi(e,n,a);break;case 1:Xe||(On(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&yv(a,n,s)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:Xe=(s=Xe)||a.memoizedState!==null,Bi(e,n,a),Xe=s;break;case 30:On(a,n),Bi(e,n,a);break;case 7:Xe||On(a,n),Bi(e,n,a);break;default:Bi(e,n,a)}}function zv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(a){Ke(n,n.return,a)}}}function Iv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(a){Ke(n,n.return,a)}}function KM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Nv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Nv),n;default:throw Error(r(435,e.tag))}}function Wu(e,n){var a=KM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=s1.bind(null,e,s);s.then(c,c)}})}function Zn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],S=e,R=n,B=R;t:for(;B!==null;){switch(B.tag){case 27:if(pr(B.type)){ln=B.stateNode,ei=!1;break t}break;case 5:ln=B.stateNode,ei=!1;break t;case 3:case 4:ln=B.stateNode.containerInfo,ei=!0;break t}B=B.return}if(ln===null)throw Error(r(160));Pv(S,R,f),ln=null,ei=!1,S=f.alternate,S!==null&&(S.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bv(n,e,a),n=n.sibling}var Fi=null;function Bv(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var S=s[f];S.ref.impl=S.nextImpl}Zn(n,e,a),Qn(e),c&4&&(or(3,e,e.return),nl(3,e),or(5,e,e.return));break;case 1:Zn(n,e,a),Qn(e),c&512&&(Xe||s===null||On(s,s.return)),c&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Fi,Zn(n,e,a),Qn(e),c&512&&(Xe||s===null||On(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=y_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[zt]||s[w]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Pn(s,n,a),s[w]=e,be(s),n=s;break t;case"link":if(f=q_("link","href",c).get(n+(a.href||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(S,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;case"meta":if(f=q_("meta","content",c).get(n+(a.content||""))){for(S=0;S<f.length;S++)if(s=f[S],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(S,1);break e}}s=c.createElement(n),Pn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[w]=e,be(s),n=s}e.stateNode=n}else wn||zd(f,e.type,e.stateNode);else e.stateNode=X_(f,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Xe||n.parentNode.removeChild(n)):c.count--,a===null?wn||zd(f,e.type,e.stateNode):X_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Gh(e,e.memoizedProps,s.memoizedProps);break;case 27:Zn(n,e,a),Qn(e),c&512&&(Xe||s===null||On(s,s.return)),s!==null&&c&4&&Gh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=sa,sa=!1,Zn(n,e,a),sa=f,Qn(e),c&512&&(Xe||s===null||On(s,s.return)),e.flags&32){n=e.stateNode;try{_s(n,""),Ee=!0}catch(pt){Ke(e,e.return,pt)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Gh(e,n,s!==null?s.memoizedProps:n)),c&1024&&(Zh=!0);break;case 6:if(Zn(n,e,a),Qn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ee=!0}catch(pt){Ke(e,e.return,pt)}}break;case 3:if(Ee=!1,oc=null,f=Fi,Fi=dl(n.containerInfo),Zn(n,e,a),Fi=f,Qn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(n.containerInfo)}catch(pt){Ke(e,e.return,pt)}Zh&&(Zh=!1,Fv(e)),Ee=!1;break;case 4:c=sa,sa=wn,s=Ge(),f=Fi,Fi=dl(e.stateNode.containerInfo),Zn(n,e,a),Qn(e),Fi=f,Ee&&al&&(Xu=!0),Ee=s,sa=c;break;case 12:Zn(n,e,a),Qn(e);break;case 31:Zn(n,e,a),Qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 13:Zn(n,e,a),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zu=Kt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 22:f=e.memoizedState!==null,S=s!==null&&s.memoizedState!==null;var R=wn,B=Xe,et=sa;wn=R||f,sa=et||f,Xe=B||S,Zn(n,e,a),Xe=B,sa=et,wn=R,Qn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||S||wn||Xe||(n=S||Xe,a=wn,s=Xe,wn=f||wn,Xe=n,lr(e,2),wn=a,Xe=s),!f&&sa||Jh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wu(e,a))));break;case 19:Zn(n,e,a),Qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 30:c&512&&(Xe||s===null||On(s,s.return)),c=Ge(),f=al,S=(a&335544064)===a,R=e.memoizedProps,al=S&&Ea(R.default,R.update)!=="none",Zn(n,e,a),Qn(e),S&&s!==null&&Ee&&(e.flags|=4),al=f,Ee=c;break;case 21:break;case 7:c&512&&(Xe||s===null||On(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Zn(n,e,a),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(bv(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(Fh(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Bh(c))break;c=c.return}var S=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,B=Vh(e);Hu(e,B,R,S);break;case 5:var et=a.stateNode;a.flags&32&&(_s(et,""),a.flags&=-33);var pt=Vh(e);Hu(e,pt,et,S);break;case 3:case 4:var Mt=a.stateNode.containerInfo,j=Vh(e);kh(e,j,Mt,S);break;default:throw Error(r(161))}}catch(ht){Ke(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Fv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Fv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,to=!0,n.reset(),to=!1),e=e.sibling}}function Is(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Hv(n,e),n=n.sibling;else Dv(n)}function Hv(e,n){var a=e.alternate;if(a===null)Xh(e,!1);else switch(e.tag){case 3:if(Qh=oa=!1,Av(),Is(n,e),!oa&&!Xu){if(e=aa,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];w_(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Qh=!0}aa=null;break;case 5:Is(n,e);break;case 4:s=oa,oa=!1,Is(n,e),oa&&(Xu=!0),oa=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Xh(e,!1):Is(n,e));break;case 30:s=oa,c=Av(),oa=!1,Is(n,e),oa&&(e.flags|=4);var f=e.memoizedProps,S=e.stateNode;n=ba(f,S),S=ba(a.memoizedProps,S);var R=Ea(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ti=0,n=Kh(e,a,n,S,R,f,!0),ti!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Xs(e,e.memoizedProps.onUpdate),aa=c):c!==null&&(c.push.apply(c,aa),aa=c),oa=(e.flags&32)!==0?!0:s;break;default:Is(n,e)}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Uv(e,n.alternate,n),n=n.sibling}function lr(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:or(4,a,a.return),lr(a,s);break;case 1:On(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&yv(a,a.return,c),lr(a,s);break;case 27:(s&2)!==0&&F_(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||il(a),lr(a,s);break;case 6:il(a);break;case 26:On(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Xe||c.parentNode.removeChild(c),lr(a,s);break;case 22:a.memoizedState===null&&lr(a,s);break;case 30:On(a,a.return),lr(a,s);break;case 7:On(a,a.return);default:lr(a,s)}e=e.sibling}}function Hi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Hi(c,f,a),nl(4,f);break;case 1:if(Hi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(pt){Ke(s,s.return,pt)}if(s=f,c=s.updateQueue,c!==null){var B=s.stateNode;try{var et=c.shared.hiddenCallbacks;if(et!==null)for(c.shared.hiddenCallbacks=null,c=0;c<et.length;c++)lg(et[c],B)}catch(pt){Ke(s,s.return,pt)}}R&&S&64&&Sv(f),ia(f,f.return);break;case 27:(a&2)!==0&&Ev(f);case 5:f.tag!==5&&f.tag!==27||Mv(f),Hi(c,f,a),R&&s===null&&S&4&&Hh(f),ia(f,f.return);break;case 6:Mv(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||wn||zd(dl(B.ownerDocument),f.type,B),Hi(c,f,a),R&&s===null&&S&4&&Hh(f),ia(f,f.return);break;case 12:Hi(c,f,a);break;case 31:Hi(c,f,a),R&&S&4&&zv(c,f);break;case 13:Hi(c,f,a),R&&S&4&&Iv(c,f);break;case 22:f.memoizedState===null&&Hi(c,f,a),ia(f,f.return);break;case 30:Hi(c,f,a),ia(f,f.return);break;case 7:ia(f,f.return);default:Hi(c,f,a)}n=n.sibling}}function $h(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function td(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ko(e))}function Di(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Gv(e,n,a,s),n=n.sibling;else c&&Cv(n)}function Gv(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&ku(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,s),f&2048&&nl(9,n);break;case 1:Di(e,n,a,s);break;case 3:Di(e,n,a,s),c&&Qh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&ko(f)));break;case 12:if(f&2048){Di(e,n,a,s),f=n.stateNode;try{var S=n.memoizedProps,R=S.id,B=S.onPostCommit;typeof B=="function"&&B(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){Ke(n,n.return,et)}}else Di(e,n,a,s);break;case 31:Di(e,n,a,s);break;case 13:Di(e,n,a,s);break;case 23:break;case 22:S=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&ku(R),S._visibility&2?Di(e,n,a,s):rl(e,n)):(c&&R!==null&&R.memoizedState!==null&&ku(n),S._visibility&2?Di(e,n,a,s):(S._visibility|=2,Bs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&$h(R,n);break;case 24:Di(e,n,a,s),f&2048&&td(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ra(f.child,!0),ra(n.child,!0))),Di(e,n,a,s);break;default:Di(e,n,a,s)}}function Bs(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,R=a,B=s,et=S.flags;switch(S.tag){case 0:case 11:case 15:Bs(f,S,R,B,c),nl(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Bs(f,S,R,B,c):rl(f,S):(pt._visibility|=2,Bs(f,S,R,B,c)),c&&et&2048&&$h(S.alternate,S);break;case 24:Bs(f,S,R,B,c),c&&et&2048&&td(S.alternate,S);break;default:Bs(f,S,R,B,c)}n=n.sibling}}function rl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:rl(a,s),c&2048&&$h(s.alternate,s);break;case 24:rl(a,s),c&2048&&td(s.alternate,s);break;default:rl(a,s)}n=n.sibling}}var jr=8192;function $r(e,n,a){if(e.subtreeFlags&jr)for(e=e.child;e!==null;)Vv(e,n,a),e=e.sibling}function Vv(e,n,a){switch(e.tag){case 26:$r(e,n,a),e.flags&jr&&(e.memoizedState!==null?tb(a,Fi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Z_(a,e)));break;case 5:$r(e,n,a),e.flags&jr&&(e=e.stateNode,(n&335544128)===n&&Z_(a,e));break;case 3:case 4:var s=Fi;Fi=dl(e.stateNode.containerInfo),$r(e,n,a),Fi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=jr,jr=16777216,$r(e,n,a),jr=s):$r(e,n,a));break;case 30:if((e.flags&jr)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,pi===null&&(pi=new Map),pi.set(s,c)}$r(e,n,a);break;default:$r(e,n,a)}}function kv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,qv(s,e)}kv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xv(e),e=e.sibling}function Xv(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&or(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yu(e)):sl(e);break;default:sl(e)}}function Yu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,qv(s,e)}kv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:or(8,n,n.return),Yu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yu(n));break;default:Yu(n)}e=e.sibling}}function qv(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:or(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ko(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=e;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(Ov(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var ZM={getCacheForType:function(e){var n=Nn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(mn).controller.signal}},QM=typeof WeakMap=="function"?WeakMap:Map,Ve=0,$e=null,we=null,Ne=0,Ye=0,mi=null,ur=!1,Fs=!1,ed=!1,La=0,dn=0,cr=0,ts=0,Ku=0,gi=0,Hs=0,ol=null,ni=null,nd=!1,Zu=0,Wv=0,Qu=1/0,Ju=null,fr=null,un=0,Gi=null,es=null,ua=0,id=0,ad=null,Yv=null,Gs=null,Vs=null,ks=null,ll=0,ju=null;function vi(){return(Ve&2)!==0&&Ne!==0?Ne&-Ne:st.T!==null?pd():Ql()}function Kv(){if(gi===0)if((Ne&536870912)===0||Te){var e=Or;Or<<=1,(Or&3932160)===0&&(Or=262144),gi=e}else gi=536870912;return e=Un.current,e!==null&&(e.flags|=32),gi}function Xs(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=R_(ba(e.memoizedProps,a))),Vs===null&&(Vs=[]),Vs.push(n.bind(null,s))}}function ii(e,n,a){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(qs(e,0),hr(e,Ne,gi,!1)),ji(e,a),((Ve&2)===0||e!==$e)&&(e===$e&&((Ve&2)===0&&(ts|=a),dn===4&&hr(e,Ne,gi,!1)),ca(e))}function Zv(e,n,a){if((Ve&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ya(e,n),c=s?$M(e,n):sd(e,n,!0),f=s;do{if(c===0){Fs&&!s&&hr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!JM(a)){c=sd(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;c=ol;var B=R.current.memoizedState.isDehydrated;if(B&&(qs(R,S).flags|=256),S=sd(R,S,!1),S!==2&&S!==6){if(ed&&!B){R.errorRecoveryDisabledLanes|=f,ts|=f,c=4;break t}f=ni,ni=c,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){qs(e,0),hr(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:hr(s,n,gi,!ur);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Zu+300-Kt(),10<c)){if(hr(s,n,gi,!ur),Pr(s,0,!0)!==0)break t;ua=n,s.timeoutHandle=Td(Qv.bind(null,s,a,ni,Ju,nd,n,gi,ts,Hs,ur,f,"Throttled",-0,0),c);break t}Qv(s,a,ni,Ju,nd,n,gi,ts,Hs,ur,f,null,-0,0)}}break}while(!0);ca(e)}function Qv(e,n,a,s,c,f,S,R,B,et,pt,Mt,j,ht){e.timeoutHandle=-1;var It=n.subtreeFlags,ee=(f&335544064)===f;if(Mt=null,(ee||It&8192||(It&16785408)===16785408)&&(Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},pi=null,Vv(n,f,Mt),ee&&(It=Mt,ee=e.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(It.count++,It.waitingForViewTransition=!0,It=gl.bind(It),ee.finished.then(It,It))),It=(f&62914560)===f?Zu-Kt():(f&4194048)===f?Wv-Kt():0,It=eb(Mt,It),It!==null)){ua=f,e.cancelPendingCommit=It(a_.bind(null,e,n,f,a,s,c,S,R,B,et,pt,Mt,null,j,ht)),hr(e,f,S,!et);return}a_(e,n,f,a,s,c,S,R,B,et,pt,Mt)}function JM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!hi(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n,a,s){n=Ji(e,n),n&=~Ku,n&=~ts,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-me(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&zr(e,a,n)}function $u(){return(Ve&6)===0?(ul(0),!1):!0}function rd(){if(we!==null){if(Ye===0)var e=we.return;else e=we,wa=Vr=null,dh(e),Ns=null,Wo=0,e=we;for(;e!==null;)xv(e.alternate,e),e=e.return;we=null}}function qs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,y1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,rd(),$e=e,we=a=Ta(e.current,null),Ne=n,Ye=0,mi=null,ur=!1,Fs=Ya(e,n),ed=!1,Hs=gi=Ku=ts=cr=dn=0,ni=ol=null,nd=!1,La=Ji(e,n),ou(),a}function Jv(e,n){_e=null,st.H=Uu,n===Ds||n===_u?(n=ag(),Ye=3):n===th?(n=ag(),Ye=4):Ye=n===Rh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,we===null&&(dn=1,Lu(e,Ai(n,e.current)))}function jv(){var e=Un.current;return e===null?!0:(Ne&4194048)===Ne?Bn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Bn:!1}function $v(){var e=st.H;return st.H=Uu,e===null?Uu:e}function t_(){var e=st.A;return st.A=ZM,e}function tc(){dn=4,ur||(Ne&4194048)!==Ne&&Un.current!==null||(Fs=!0),(cr&134217727)===0&&(ts&134217727)===0||$e===null||hr($e,Ne,gi,!1)}function sd(e,n,a){var s=Ve;Ve|=2;var c=$v(),f=t_();($e!==e||Ne!==n)&&(Ju=null,qs(e,n)),n=!1;var S=dn;t:do try{if(Ye!==0&&we!==null){var R=we,B=mi;switch(Ye){case 8:rd(),S=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var et=Ye;if(Ye=0,mi=null,Ws(e,R,B,et),a&&Fs){S=0;break t}break;default:et=Ye,Ye=0,mi=null,Ws(e,R,B,et)}}jM(),S=dn;break}catch(pt){Jv(e,pt)}while(!0);return n&&e.shellSuspendCounter++,wa=Vr=null,Ve=s,st.H=c,st.A=f,we===null&&($e=null,Ne=0,ou()),S}function jM(){for(;we!==null;)e_(we)}function $M(e,n){var a=Ve;Ve|=2;var s=$v(),c=t_();$e!==e||Ne!==n?(Ju=null,Qu=Kt()+500,qs(e,n)):Fs=Ya(e,n);t:do try{if(Ye!==0&&we!==null){n=we;var f=mi;e:switch(Ye){case 1:Ye=0,mi=null,Ws(e,n,f,1);break;case 2:case 9:if(ng(f)){Ye=0,mi=null,n_(n);break}n=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),ca(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:ng(f)?(Ye=0,mi=null,n_(n)):(Ye=0,mi=null,Ws(e,n,f,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var R=we;if(S?Y_(S):R.stateNode.complete){Ye=0,mi=null;var B=R.sibling;if(B!==null)we=B;else{var et=R.return;et!==null?(we=et,ec(et)):we=null}break e}}Ye=0,mi=null,Ws(e,n,f,5);break;case 6:Ye=0,mi=null,Ws(e,n,f,6);break;case 8:rd(),dn=6;break t;default:throw Error(r(462))}}t1();break}catch(pt){Jv(e,pt)}while(!0);return wa=Vr=null,st.H=s,st.A=c,Ve=a,we!==null?0:($e=null,Ne=0,ou(),dn)}function t1(){for(;we!==null&&!Ht();)e_(we)}function e_(e){var n=vv(e.alternate,e,La);e.memoizedProps=e.pendingProps,n===null?ec(e):we=n}function n_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cv(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=cv(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:dh(n);var s=n;s===An&&(Te?(du(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(du(s),Te=!0));default:xv(a,n),n=we=q0(n,La),n=vv(a,n,La)}e.memoizedProps=e.pendingProps,n===null?ec(e):we=n}function Ws(e,n,a,s){wa=Vr=null,dh(n),Ns=null,Wo=0;var c=n.return;try{if(GM(e,c,n,a,Ne)){dn=1,Lu(e,Ai(a,e.current)),we=null;return}}catch(f){if(c!==null)throw we=c,f;dn=1,Lu(e,Ai(a,e.current)),we=null;return}n.flags&32768?(Te||s===1?e=!0:Fs||(Ne&536870912)!==0?e=!1:(ur=e=!0,(s===2||s===9||s===3||s===6)&&(s=Un.current,s!==null&&s.tag===13&&(s.flags|=16384))),i_(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){i_(n,ur);return}e=n.return;var a=qM(n.alternate,n,La);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);dn===0&&(dn=5)}function i_(e,n){do{var a=WM(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);dn=6,we=null}function a_(e,n,a,s,c,f,S,R,B,et,pt,Mt){e.cancelPendingCommit=null;do nc();while(un!==0);if((Ve&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===$e&&(we=$e=null,Ne=0),es=n,Gi=e,ua=a,ad=c,Yv=s,e1(e,n,a,S,R,B,Mt)}}function e1(e,n,a,s,c,f,S){var R=n.lanes|n.childLanes;if(id=R,R|=Gf,Zl(e,a,R,s,c,f),Vs=null,(a&335544064)===a?(ks=CM(e),s=10262):(ks=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,o1(Ot,function(){return cd(),null})):(e.callbackNode=null,e.callbackPriority=0),Gu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=st.T,st.T=null,c=ut.p,ut.p=2,f=Ve,Ve|=4;try{YM(e,n,a)}finally{Ve=f,ut.p=c,st.T=s}}un=1,Gu?Gs=w1(S,e.containerInfo,ks,od,ld,i1,ud,cd,n1):(od(),ld(),ud())}function n1(e){if(un!==0){var n=Gi.onRecoverableError;n(e,{componentStack:null})}}function i1(){un===3&&(un=0,Hv(es,Gi),un=4)}function od(){if(un===1){un=0;var e=Gi,n=es,a=ua,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=st.T,st.T=null;var c=ut.p;ut.p=2;var f=Ve;Ve|=4;try{al=Xu=!1,Bv(n,e,a),a=Md;var S=P0(e.containerInfo),R=a.focusedElem,B=a.selectionRange;if(S!==R&&R&&R.ownerDocument&&O0(R.ownerDocument.documentElement,R)){if(B!==null&&zf(R)){var et=B.start,pt=B.end;if(pt===void 0&&(pt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(pt,R.value.length);else{var Mt=R.ownerDocument||document,j=Mt&&Mt.defaultView||window;if(j.getSelection){var ht=j.getSelection(),It=R.textContent.length,ee=Math.min(B.start,It),xe=B.end===void 0?ee:Math.min(B.end,It);!ht.extend&&ee>xe&&(S=xe,xe=ee,ee=S);var tt=L0(R,ee),X=L0(R,xe);if(tt&&X&&(ht.rangeCount!==1||ht.anchorNode!==tt.node||ht.anchorOffset!==tt.offset||ht.focusNode!==X.node||ht.focusOffset!==X.offset)){var ot=Mt.createRange();ot.setStart(tt.node,tt.offset),ht.removeAllRanges(),ee>xe?(ht.addRange(ot),ht.extend(X.node,X.offset)):(ot.setEnd(X.node,X.offset),ht.addRange(ot))}}}}for(Mt=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&Mt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var yt=Mt[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}to=!!yd,Md=yd=null}finally{Ve=f,ut.p=c,st.T=s}}e.current=n,un=2}}function ld(){if(un===2){un=0;var e=Gi,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=st.T,st.T=null;var s=ut.p;ut.p=2;var c=Ve;Ve|=4;try{Uv(e,n.alternate,n)}finally{Ve=c,ut.p=s,st.T=a}}un=3}}function ud(){if(un===4||un===3){un=0;var e=Gs;Gs=null,Bt();var n=Gi,a=es,s=ua,c=Yv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?un=5:(un=0,es=Gi=null,r_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(fr=null),No(s),a=a.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ne,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=st.T,f=ut.p,ut.p=2,st.T=null;try{for(var S=n.onRecoverableError,R=0;R<c.length;R++){var B=c[R];S(B.value,{componentStack:B.stack})}}finally{st.T=a,ut.p=f}}if(c=Vs,S=ks,ks=null,c!==null&&(Vs=null,S===null&&(S=[]),e!==null))for(B=0;B<c.length;B++)a=(0,c[B])(S),a!==void 0&&e.finished.finally(a);(ua&3)!==0&&nc(),ca(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===ju?ll++:(ll=0,ju=n):(ll=0,ju=null),ul(0)}}function r_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ko(n)))}function nc(){return Gs!==null&&(Gs.skipTransition(),Gs=null),od(),ld(),ud(),cd()}function cd(){if(un!==5)return!1;var e=Gi,n=id;id=0;var a=No(ua),s=st.T,c=ut.p;try{ut.p=32>a?32:a,st.T=null,a=ad,ad=null;var f=Gi,S=ua;if(un=0,es=Gi=null,ua=0,(Ve&6)!==0)throw Error(r(331));var R=Ve;if(Ve|=4,Xv(f.current),Gv(f,f.current,S,a),Ve=R,ul(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ne,f)}catch{}return!0}finally{ut.p=c,st.T=s,r_(e,n)}}function s_(e,n,a){n=Ai(a,n),n=wh(e.stateNode,n,2),e=ir(e,n,2),e!==null&&(ji(e,2),ca(e))}function Ke(e,n,a){if(e.tag===3)s_(e,e,a);else for(;n!==null;){if(n.tag===3){s_(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(fr===null||!fr.has(s))){e=Ai(a,e),a=nv(2),s=ir(n,a,2),s!==null&&(iv(a,s,n,e),ji(s,2),ca(s));break}}n=n.return}}function fd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new QM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ed=!0,c.add(a),e=a1.bind(null,e,n,a),n.then(e,e))}function a1(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Ne&a)===a&&((dn===4||dn===3&&(Ne&62914560)===Ne&&300>Kt()-Zu)&&(Ve&2)===0?qs(e,0):Ku|=a,Hs===Ne&&(Hs=0)),ca(e)}function o_(e,n){n===0&&(n=wo()),e=Fr(e,n),e!==null&&(ji(e,n),ca(e))}function r1(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(e,a)}function s1(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o_(e,a)}function o1(e,n){return Lt(e,n)}var Ys=null,Ks=null,hd=!1,ic=!1,dd=!1,dr=0;function ca(e){e!==Ks&&e.next===null&&(Ks===null?Ys=Ks=e:Ks=Ks.next=e),ic=!0,hd||(hd=!0,u1())}function ul(e,n){if(!dd&&ic){dd=!0;do for(var a=!1,s=Ys;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-me(42|e)+1)-1,f&=c&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,f_(s,f))}else f=Ne,f=Pr(s,s===$e?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ya(s,f)||(a=!0,f_(s,f));s=s.next}while(a);dd=!1}}function l1(){l_()}function l_(){ic=hd=!1;var e=0;dr!==0&&S1()&&(e=dr);for(var n=Kt(),a=null,s=Ys;s!==null;){var c=s.next,f=u_(s,n);f===0?(s.next=null,a===null?Ys=c:a.next=c,c===null&&(Ks=a)):(a=s,(e!==0||(f&3)!==0)&&(ic=!0)),s=c}un!==0&&un!==5||ul(e),dr!==0&&(dr=0)}function u_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-me(f),R=1<<S,B=c[S];B===-1?((R&a)===0||(R&s)!==0)&&(c[S]=Ao(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=$e,a=Ne,a=Pr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ie(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ya(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ie(s),No(a)){case 2:case 8:a=J;break;case 32:a=Ot;break;case 268435456:a=Pt;break;default:a=Ot}return s=c_.bind(null,e),a=Lt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ie(s),e.callbackPriority=2,e.callbackNode=null,2}function c_(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var s=Ne;return s=Pr(e,e===$e?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Zv(e,s,n),u_(e,Kt()),e.callbackNode!=null&&e.callbackNode===a?c_.bind(null,e):null)}function f_(e,n){if(nc())return null;Zv(e,n,!0)}function u1(){M1(function(){(Ve&6)!==0?Lt(de,l1):l_()})}function pd(){if(dr===0){var e=qr;e===0&&(e=ms,ms<<=1,(ms&261888)===0&&(ms=256)),dr=e}return dr}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(e)}function c1(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=h_((c[V]||null).action),S=s.submitter;S&&(n=(n=S[V]||null)?h_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new iu("action","action",null,s,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(dr!==0){var B=new FormData(c,S);Mh(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=new FormData(c,S),Mh(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var md=0;md<Hf.length;md++){var gd=Hf[md],f1=gd.toLowerCase(),h1=gd[0].toUpperCase()+gd.slice(1);Ii(f1,"on"+h1)}Ii(B0,"onAnimationEnd"),Ii(F0,"onAnimationIteration"),Ii(H0,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(yM,"onTransitionRun"),Ii(MM,"onTransitionStart"),Ii(bM,"onTransitionCancel"),Ii(G0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function d_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var R=s[S],B=R.instance,et=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=et;try{f(c)}catch(pt){su(pt)}c.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(R=s[S],B=R.instance,et=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=et;try{f(c)}catch(pt){su(pt)}c.currentTarget=null,f=B}}}}function Re(e,n){var a=n[ct];a===void 0&&(a=n[ct]=new Set);var s=e+"__bubble";a.has(s)||(p_(n,e,2,!1),a.add(s))}function vd(e,n,a){var s=0;n&&(s|=4),p_(a,e,s,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[ac]){e[ac]=!0,ke.forEach(function(a){a!=="selectionchange"&&(d1.has(a)||vd(a,!1,e),vd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,vd("selectionchange",!1,n))}}function p_(e,n,a,s){switch(ix(n)){case 2:var c=rb;break;case 8:c=sb;break;default:c=Bd}a=c.bind(null,n,a,e),c=void 0,!Af||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function xd(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var R=s.stateNode.containerInfo;if(R===c)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;R!==null;){if(S=fe(R),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}R=R.parentNode}}s=s.return}p0(function(){var et=f,pt=Ef(a),Mt=[];t:{var j=V0.get(e);if(j!==void 0){var ht=iu,It=e;switch(e){case"keypress":if(eu(a)===0)break t;case"keydown":case"keyup":ht=Jy;break;case"focusin":It="focus",ht=Df;break;case"focusout":It="blur",ht=Df;break;case"beforeblur":case"afterblur":ht=Df;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=nM;break;case B0:case F0:case H0:ht=Vy;break;case G0:ht=aM;break;case"scroll":case"scrollend":ht=Iy;break;case"wheel":ht=sM;break;case"copy":case"cut":case"paste":ht=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=x0;break;case"submit":ht=tM;break;case"toggle":case"beforetoggle":ht=lM}var ee=(n&4)!==0,xe=!ee&&(e==="scroll"||e==="scrollend"),tt=ee?j!==null?j+"Capture":null:j;ee=[];for(var X=et,ot;X!==null;){var yt=X;if(ot=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||ot===null||tt===null||(yt=Uo(X,tt),yt!=null&&ee.push(fl(X,yt,ot))),xe)break;X=X.return}0<ee.length&&(j=new ht(j,It,null,a,pt),Mt.push({event:j,listeners:ee}))}}if((n&7)===0){t:{if(ht=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",ht&&a!==bf&&(It=a.relatedTarget||a.fromElement)&&(fe(It)||It[gt]))break t;(j||ht)&&(It=pt.window===pt?pt:(ht=pt.ownerDocument)?ht.defaultView||ht.parentWindow:window,j?(ht=a.relatedTarget||a.toElement,j=et,ht=ht?fe(ht):null,ht!==null&&(xe=u(ht),ee=ht.tag,ht!==xe||ee!==5&&ee!==27&&ee!==6)&&(ht=null)):(j=null,ht=et),j!==ht&&(ee=v0,yt="onMouseLeave",tt="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=x0,yt="onPointerLeave",tt="onPointerEnter",X="pointer"),xe=j==null?It:Qt(j),ot=ht==null?It:Qt(ht),It=new ee(yt,X+"leave",j,a,pt),It.target=xe,It.relatedTarget=ot,yt=null,fe(pt)===et&&(ee=new ee(tt,X+"enter",ht,a,pt),ee.target=ot,ee.relatedTarget=xe,yt=ee),xe=yt,ee=j&&ht?D(j,ht,p1):null,j!==null&&m_(Mt,It,j,ee,!1),ht!==null&&xe!==null&&m_(Mt,xe,ht,ee,!0)))}t:{if(j=et?Qt(et):window,ht=j.nodeName&&j.nodeName.toLowerCase(),ht==="select"||ht==="input"&&j.type==="file")var Jt=w0;else if(T0(j))if(R0)Jt=_M;else{Jt=gM;var Ue=mM}else ht=j.nodeName,!ht||ht.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?et&&Mf(et.elementType)&&(Jt=w0):Jt=vM;if(Jt&&(Jt=Jt(e,et))){A0(Mt,Jt,a,pt);break t}Ue&&Ue(e,j,et)}switch(Ue=et?Qt(et):window,e){case"focusin":(T0(Ue)||Ue.contentEditable==="true")&&(Ms=Ue,If=et,Ho=null);break;case"focusout":Ho=If=Ms=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,z0(Mt,a,pt);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":z0(Mt,a,pt)}var ae;if(Uf)t:{switch(e){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else ys?b0(e,a)&&(ue="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(S0&&a.locale!=="ko"&&(ys||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ys&&(ae=m0()):(Ka=pt,wf="value"in Ka?Ka.value:Ka.textContent,ys=!0)),Ue=rc(et,ue),0<Ue.length&&(ue=new _0(ue,e,null,a,pt),Mt.push({event:ue,listeners:Ue}),ae?ue.data=ae:(ae=E0(a),ae!==null&&(ue.data=ae)))),(ae=cM?fM(e,a):hM(e,a))&&(ue=rc(et,"onBeforeInput"),0<ue.length&&(Ue=new _0("onBeforeInput","beforeinput",null,a,pt),Mt.push({event:Ue,listeners:ue}),Ue.data=ae)),c1(Mt,e,et,a,pt)}d_(Mt,n)})}function fl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Uo(e,a),c!=null&&s.unshift(fl(e,c,f)),c=Uo(e,n),c!=null&&s.push(fl(e,c,f))),e.tag===3)return s;e=e.return}return[]}function p1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m_(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var R=a,B=R.alternate,et=R.stateNode;if(R=R.tag,B!==null&&B===s)break;R!==5&&R!==26&&R!==27||et===null||(B=et,c?(et=Uo(a,f),et!=null&&S.unshift(fl(a,et,B))):c||(et=Uo(a,f),et!=null&&S.push(fl(a,et,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var m1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(m1,`
`).replace(g1,"")}function v_(e,n){return n=g_(n),g_(e)===n}function Ze(e,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||_s(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&_s(e,""+s);else return;break;case"className":fi(e,"class",s);break;case"tabIndex":fi(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,a,s);break;case"style":h0(e,s,f);return;case"data":if(n!=="object"){fi(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$l(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(e,n,"name",c.name,c,null),Ze(e,n,"formEncType",c.formEncType,c,null),Ze(e,n,"formMethod",c.formMethod,c,null),Ze(e,n,"formTarget",c.formTarget,c,null)):(Ze(e,n,"encType",c.encType,c,null),Ze(e,n,"method",c.method,c,null),Ze(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$l(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ta);return;case"onScroll":s!=null&&Re("scroll",e);return;case"onScrollEnd":s!=null&&Re("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=$l(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Re("beforetoggle",e),Re("toggle",e),en(e,"popover",s);break;case"xlinkActuate":De(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":De(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":De(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":De(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":De(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":De(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":De(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":De(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":De(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Py.get(a)||a,en(e,a,s);else return}Ee=!0}function Sd(e,n,a,s,c,f){switch(a){case"style":h0(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")_s(e,s);else if(typeof s=="number"||typeof s=="bigint")_s(e,""+s);else return;break;case"onScroll":s!=null&&Re("scroll",e);return;case"onScrollEnd":s!=null&&Re("scrollend",e);return;case"onClick":s!=null&&(e.onclick=ta);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[V]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,c);break t}Ee=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):en(e,a,s)}return}Ee=!0}function Pn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,f,S,a,null)}}c&&Ze(e,n,"srcSet",a.srcSet,a,null),s&&Ze(e,n,"src",a.src,a,null);return;case"input":Re("invalid",e);var R=f=S=c=null,B=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":c=pt;break;case"type":S=pt;break;case"checked":B=pt;break;case"defaultChecked":et=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ze(e,n,s,pt,a,null)}}l0(e,f,R,B,et,S,c,!1);return;case"select":Re("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":s=R;default:Ze(e,n,c,R,a,null)}n=f,a=S,e.multiple=!!s,n!=null?vs(e,!!s,n,!1):a!=null&&vs(e,!!s,a,!0);return;case"textarea":Re("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ze(e,n,S,R,a,null)}c0(e,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ze(e,n,B,s,a,null));return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(s=0;s<cl.length;s++)Re(cl[s],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ze(e,n,et,s,a,null)}return;default:if(Mf(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&Sd(e,n,pt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ze(e,n,R,s,a,null))}var v1={};function _1(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,R=null,B=null,et=null,pt=null;for(ht in a){var Mt=a[ht];if(a.hasOwnProperty(ht)&&Mt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":B=Mt;default:s.hasOwnProperty(ht)||Ze(e,n,ht,null,s,Mt)}}for(var j in s){var ht=s[j];if(Mt=a[j],s.hasOwnProperty(j)&&(ht!=null||Mt!=null))switch(j){case"type":ht!==Mt&&(Ee=!0),f=ht;break;case"name":ht!==Mt&&(Ee=!0),c=ht;break;case"checked":ht!==Mt&&(Ee=!0),et=ht;break;case"defaultChecked":ht!==Mt&&(Ee=!0),pt=ht;break;case"value":ht!==Mt&&(Ee=!0),S=ht;break;case"defaultValue":ht!==Mt&&(Ee=!0),R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ht!==Mt&&Ze(e,n,j,ht,s,Mt)}}Sf(e,S,R,B,et,pt,f,c);return;case"select":ht=S=R=j=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ht=B;default:s.hasOwnProperty(f)||Ze(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Ee=!0),j=f;break;case"defaultValue":f!==B&&(Ee=!0),R=f;break;case"multiple":f!==B&&(Ee=!0),S=f;default:f!==B&&Ze(e,n,c,f,s,B)}n=R,a=S,s=ht,j!=null?vs(e,!!a,j,!1):!!s!=!!a&&(n!=null?vs(e,!!a,n,!0):vs(e,!!a,a?[]:"",!1));return;case"textarea":ht=j=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ze(e,n,R,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":c!==f&&(Ee=!0),j=c;break;case"defaultValue":c!==f&&(Ee=!0),ht=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ze(e,n,S,c,s,f)}u0(e,j,ht);return;case"option":for(var It in a)j=a[It],a.hasOwnProperty(It)&&j!=null&&!s.hasOwnProperty(It)&&(It==="selected"?e.selected=!1:Ze(e,n,It,null,s,j));for(B in s)j=s[B],ht=a[B],s.hasOwnProperty(B)&&j!==ht&&(j!=null||ht!=null)&&(B==="selected"?(j!==ht&&(Ee=!0),e.selected=j&&typeof j!="function"&&typeof j!="symbol"):Ze(e,n,B,j,s,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)j=a[ee],a.hasOwnProperty(ee)&&j!=null&&!s.hasOwnProperty(ee)&&Ze(e,n,ee,null,s,j);for(et in s)if(j=s[et],ht=a[et],s.hasOwnProperty(et)&&j!==ht&&(j!=null||ht!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Ze(e,n,et,j,s,ht)}return;default:if(Mf(n)){for(var xe in a)j=a[xe],a.hasOwnProperty(xe)&&j!==void 0&&!s.hasOwnProperty(xe)&&Sd(e,n,xe,void 0,s,j);for(pt in s)j=s[pt],ht=a[pt],!s.hasOwnProperty(pt)||j===ht||j===void 0&&ht===void 0||Sd(e,n,pt,j,s,ht);return}}for(var tt in a)j=a[tt],a.hasOwnProperty(tt)&&j!=null&&!s.hasOwnProperty(tt)&&Ze(e,n,tt,null,s,j);for(Mt in s)j=s[Mt],ht=a[Mt],!s.hasOwnProperty(Mt)||j===ht||j==null&&ht==null||Ze(e,n,Mt,j,s,ht)}function __(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,S=c.initiatorType,R=c.duration;if(f&&R&&__(S)){for(S=0,R=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],et=B.startTime;if(et>R)break;var pt=B.transferSize,Mt=B.initiatorType;pt&&__(Mt)&&(B=B.responseEnd,S+=pt*(B<R?1:(R-et)/(B-et)))}if(--s,n+=8*(f+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yd=null,Md=null;function hl(e){return e.nodeType===9?e:e.ownerDocument}function x_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function y_(e,n,a,s){return a=hl(a).createElement(e),a[w]=s,a[V]=n,Pn(a,e,n),be(a),a}function bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ed=null;function S1(){var e=window.event;return e&&e.type==="popstate"?e===Ed?!1:(Ed=e,!0):(Ed=null,!1)}var Td=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,b_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Td,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(e){return M_.resolve(null).then(e).catch(b1)}:Td;function b1(e){setTimeout(function(){throw e})}function pr(e){return e==="head"}function E_(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),eo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ld(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ld(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[zt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Ld(e.ownerDocument.body);a=c}while(a);eo(n)}function T_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function A_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function w_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function E1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Ad(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return E1(n,a,e)}function T1(e){return e.documentElement.clientHeight}function A1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function w1(e,n,a,s,c,f,S,R,B){var et=n.nodeType===9?n:n.ownerDocument;try{var pt=et.startViewTransition({update:function(){var j=et.defaultView,ht=j.navigation&&j.navigation.transition,It=et.fonts.status;s();var ee=[];if(It==="loaded"&&(T1(et),et.fonts.status==="loading"&&ee.push(et.fonts.ready)),It=ee.length,e!==null)for(var xe=e.suspenseyImages,tt=0,X=0;X<xe.length;X++){var ot=xe[X];if(!ot.complete){var yt=ot.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<j.innerHeight&&yt.left<j.innerWidth){if(tt+=K_(ot),tt>lc){ee.length=It;break}ot=new Promise(A1.bind(ot)),ee.push(ot)}}}if(0<ee.length)return j=Promise.race([Promise.all(ee),new Promise(function(Jt){return setTimeout(Jt,500)})]).then(c,c),(ht?Promise.allSettled([ht.finished,j]):j).then(f,f);if(c(),ht)return ht.finished.then(f,f);f()},types:a});et.__reactViewTransition=pt;var Mt=[];return pt.ready.then(function(){for(var j=et.documentElement.getAnimations({subtree:!0}),ht=0;ht<j.length;ht++){var It=j[ht],ee=It.effect,xe=ee.pseudoElement;if(xe!=null&&xe.startsWith("::view-transition")){Mt.push(It),It=ee.getKeyframes();for(var tt=xe=void 0,X=!0,ot=0;ot<It.length;ot++){var yt=It[ot],Jt=yt.width;if(xe===void 0)xe=Jt;else if(xe!==Jt){X=!1;break}if(Jt=yt.height,tt===void 0)tt=Jt;else if(tt!==Jt){X=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}X&&xe!==void 0&&tt!==void 0&&(ee.setKeyframes(It),X=getComputedStyle(ee.target,ee.pseudoElement),X.width!==xe||X.height!==tt)&&(X=It[0],X.width=xe,X.height=tt,X=It[It.length-1],X.width=xe,X.height=tt,ee.setKeyframes(It))}}S()},function(j){et.__reactViewTransition===pt&&(et.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&B(j)}finally{s(),c(),S()}}),pt.finished.finally(function(){for(var j=0;j<Mt.length;j++)Mt[j].cancel();et.__reactViewTransition===pt&&(et.__reactViewTransition=null),R()}),pt}catch{return s(),c(),S(),null}}function ns(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}ns.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},ns.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[c])}return s},ns.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function R_(e){return{name:e,group:new ns("group",e),imagePair:new ns("image-pair",e),old:new ns("old",e),new:new ns("new",e)}}function _i(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}_i.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(D_(f,e,n,a)===-1){var S=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(B){S.removeEventListener(e,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(c=S.removeEventListener.bind(S,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Zs(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),_(this._fragmentFiber.child,!1,R1,e,R,s)}this._eventListeners=f}};function R1(e,n,a,s){return M(e).addEventListener(n,a,s),!1}_i.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=D_(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Zs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,C1,e,a,c),s.splice(n,1),f!==null&&f()}};function C1(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function Zs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function C_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function D_(e,n,a,s){if(e.length===0)return-1;s=C_(s);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&C_(f.optionsOrUseCapture)===s)return c}return-1}_i.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Zs(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},_i.prototype.focus=function(e){_(this._fragmentFiber.child,!0,N_,e,void 0,void 0)};function N_(e,n){return e.tag===6?!1:(e=M(e),G1(e,n))}_i.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,wd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!N_(n[a],e);a--);};function wd(e,n){return n.push(e),!1}_i.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=M(e),e=hl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,D1,e,void 0,void 0))};function D1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}_i.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,N1,e,void 0,void 0)};function N1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}_i.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,U1,e,void 0,void 0);for(var a=n=0;a<Vi.length;a++){var s=Vi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Vi[n++]=s}Vi.length=n}};function U1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Vi=[],Rd=!1;function L1(e,n,a){Vi.push({fragmentInstance:e,observer:n,instance:a}),Rd||(Rd=!0,V1(function(){Rd=!1;var s=Vi;Vi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}_i.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,O1,e,void 0,void 0),e};function O1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}_i.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},_i.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,wd,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=y(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=x(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),B=S&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&S&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&c===e||B||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||P1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function P1(e,n,a,s,c){var f=fe(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=g(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=D(a,f,U),n===null?n=!1:(_(n,!0,z,f,a),f=b,b=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=D(s,f,U),n===null?n=!1:(_(n,!0,C,f,s),f=b,L=b=null,n=f!==null)),n):!1}function U_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}_i.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,wd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=y(this._fragmentFiber);if(s=a?s[1]||s[0]||g(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),U_(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),U_(c,a)):M(c).scrollIntoView(e),s+=a?-1:1}};function z1(e,n){return e=M(e),L_(e,n),!1}function L_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function O_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var S=0,R=0;R<Vi.length;R++){var B=Vi[R];(B.fragmentInstance!==n||B.observer!==f||B.instance!==e)&&(Vi[S++]=B)}Vi.length=S,f.observe(e)}),L_(e,n))}function I1(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,Zs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?L1(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Cd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cd(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function B1(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[zt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function F1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ni(e.nextSibling),e===null))return null;return e}function P_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function Dd(e){return e.data==="$?"||e.data==="$~"}function Nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function H1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ud=null;function z_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function I_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function G1(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function V1(e){b_(function(){b_(function(n){return e(n)})})}function B_(e,n,a){switch(n=hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function F_(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ze(e,n,s,null,v1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ta&&(e.onclick=null),te(e)}function Ld(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);te(e)}var Ui=new Map,H_=new Set;function dl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Oa=ut.d;ut.d={f:k1,r:X1,D:q1,C:W1,L:Y1,m:K1,X:Q1,S:Z1,M:J1};function k1(){var e=Oa.f(),n=$u();return e||n}function X1(e){var n=ge(e);n!==null&&n.tag===5&&n.type==="form"?Vg(n):Oa.r(e)}var Qs=typeof document>"u"?null:document;function G_(e,n,a){var s=Qs;if(s&&typeof n=="string"&&n){var c=Ei(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),H_.has(c)||(H_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Pn(n,"link",e),be(n),s.head.appendChild(n)))}}function q1(e){Oa.D(e),G_("dns-prefetch",e,null)}function W1(e,n){Oa.C(e,n),G_("preconnect",e,n)}function Y1(e,n,a){Oa.L(e,n,a);var s=Qs;if(s&&e&&n){var c='link[rel="preload"][as="'+Ei(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ei(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ei(a.imageSizes)+'"]')):c+='[href="'+Ei(e)+'"]';var f=c;switch(n){case"style":f=Js(e);break;case"script":f=js(e)}if(!(Ui.has(f)||(e=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ui.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(pl(f))||n==="script"&&s.querySelector(ml(f))))){var S=s.createElement("link");Pn(S,"link",e),n==="style"&&(S[$t]=!0,S.onload=S.onerror=function(){Je(S)}),be(S),s.head.appendChild(S)}}}function K1(e,n){Oa.m(e,n);var a=Qs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ei(s)+'"][href="'+Ei(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=js(e)}if(!Ui.has(f)&&(e=N({rel:"modulepreload",href:e},n),Ui.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(f)))return}s=a.createElement("link"),Pn(s,"link",e),be(s),a.head.appendChild(s)}}}function Z1(e,n,a){Oa.S(e,n,a);var s=Qs;if(s&&e){var c=Ae(s).hoistableStyles,f=Js(e);n=n||"default";var S=c.get(f);if(!S){var R={loading:0,preload:null};if(S=s.querySelector(pl(f)))R.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ui.get(f))&&Od(e,a);var B=S=s.createElement("link");be(B),Pn(B,"link",e),B._p=new Promise(function(et,pt){B.onload=et,B.onerror=pt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:R},c.set(f,S)}}}function Q1(e,n){Oa.X(e,n);var a=Qs;if(a&&e){var s=Ae(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(ml(c)),f||(e=N({src:e,async:!0},n),(n=Ui.get(c))&&Pd(e,n),f=a.createElement("script"),be(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function J1(e,n){Oa.M(e,n);var a=Qs;if(a&&e){var s=Ae(a).hoistableScripts,c=js(e),f=s.get(c);f||(f=a.querySelector(ml(c)),f||(e=N({src:e,async:!0,type:"module"},n),(n=Ui.get(c))&&Pd(e,n),f=a.createElement("script"),be(f),Pn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function V_(e,n,a,s){var c=(c=Se.current)?dl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Js(a.href),n=Ae(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Js(a.href);var f=Ae(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(pl(e)))?f._p||(S.instance=f,S.state.loading=5):(f=Ui.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ui.set(e,f)),j1(c,e,f,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=js(a),n=Ae(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Js(e){return'href="'+Ei(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function k_(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function j1(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[$t]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[$t]=!0,n.onload=n.onerror=Je.bind(null,n),Pn(n,"link",a),be(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function js(e){return'[src="'+Ei(e)+'"]'}function ml(e){return"script[async]"+e}function X_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ei(a.href)+'"]');if(s)return n.instance=s,be(s),s;var c=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),be(s),Pn(s,"style",c),sc(s,a.precedence,e),n.instance=s;case"stylesheet":c=Js(a.href);var f=e.querySelector(pl(c));if(f)return n.state.loading|=4,n.instance=f,be(f),f;s=k_(a),(c=Ui.get(c))&&Od(s,c),f=(e.ownerDocument||e).createElement("link"),be(f);var S=f;return S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),Pn(f,"link",s),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=js(a.src),(c=e.querySelector(ml(f)))?(n.instance=c,be(c),c):(s=a,(c=Ui.get(f))&&(s=N({},a),Pd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),be(c),Pn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,sc(s,a.precedence,e));return n.instance}function sc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var R=s[S];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Od(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var oc=null;function q_(e,n,a){if(oc===null){var s=new Map,c=oc=new Map;c.set(a,s)}else c=oc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[zt]||f[w]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var R=s.get(S);R?R.push(f):s.set(S,[f])}}return s}function zd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function $1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Y_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function K_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Z_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=K_(n),e.suspenseyImages.push(n)),e=nb.bind(e),n.decode().then(e,e))}function tb(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Js(s.href),f=n.querySelector(pl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,s=k_(s),(c=Ui.get(c))&&Od(s,c),f=f.createElement("link"),be(f);var S=f;S._p=new Promise(function(R,B){S.onload=R,S.onerror=B}),Pn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lc=0;function eb(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lc===0&&(lc=62500*x1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Q_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)cc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function gl(){this.count--,Q_(this)}function nb(){this.imgCount--,Q_(this)}var uc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(ib,e),uc=null,gl.call(e))}function ib(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var s=a.get(null);else{a=new Map,uc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var $s={$$typeof:$,Provider:null,Consumer:null,_currentValue:Ct,_currentValue2:Ct,_threadCount:0};function ab(e,n,a,s,c,f,S,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.hiddenUpdates=gs(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function J_(e,n,a,s,c,f,S,R,B,et,pt,Mt){return e=new ab(e,n,a,S,B,et,pt,Mt,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Jf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},eh(f),e}function j_(e){return e?(e=Ts,e):Ts}function $_(e,n,a,s,c,f){c=j_(c),s.context===null?s.context=c:s.pendingContext=c,s=nr(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ir(e,s,n),a!==null&&(ii(a,e,n),Yo(a,e,n))}function tx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Id(e,n){tx(e,n),(e=e.alternate)&&tx(e,n)}function ex(e){if(e.tag===13||e.tag===31){var n=Fr(e,67108864);n!==null&&ii(n,e,67108864),Id(e,67108864)}}function nx(e){if(e.tag===13||e.tag===31){var n=vi();n=Do(n);var a=Fr(e,n);a!==null&&ii(a,e,n),Id(e,n)}}var to=!0;function rb(e,n,a,s){var c=st.T;st.T=null;var f=ut.p;try{ut.p=2,Bd(e,n,a,s)}finally{ut.p=f,st.T=c}}function sb(e,n,a,s){var c=st.T;st.T=null;var f=ut.p;try{ut.p=8,Bd(e,n,a,s)}finally{ut.p=f,st.T=c}}function Bd(e,n,a,s){if(to){var c=Fd(s);if(c===null)xd(e,n,s,fc,a),ax(e,s);else if(lb(c,e,n,a,s))s.stopPropagation();else if(ax(e,s),n&4&&-1<ob.indexOf(e)){for(;c!==null;){var f=ge(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Sa(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var B=1<<31-me(S);R.entanglements[1]|=B,S&=~B}ca(f),(Ve&6)===0&&(Qu=Kt()+500,ul(0))}}break;case 31:case 13:R=Fr(f,2),R!==null&&ii(R,f,2),$u(),Id(f,2)}if(f=Fd(s),f===null&&xd(e,n,s,fc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else xd(e,n,s,null,a)}}function Fd(e){return e=Ef(e),Hd(e)}var fc=null;function Hd(e){if(fc=null,e=fe(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function ix(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case de:return 2;case J:return 8;case Ot:case bt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var Gd=!1,mr=null,gr=null,vr=null,vl=new Map,_l=new Map,_r=[],ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ax(e,n){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function xl(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ge(n),n!==null&&ex(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function lb(e,n,a,s,c){switch(n){case"focusin":return mr=xl(mr,e,n,a,s,c),!0;case"dragenter":return gr=xl(gr,e,n,a,s,c),!0;case"mouseover":return vr=xl(vr,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return vl.set(f,xl(vl.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,_l.set(f,xl(_l.get(f)||null,e,n,a,s,c)),!0}return!1}function rx(e){var n=fe(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Jl(e.priority,function(){nx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Jl(e.priority,function(){nx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Fd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);bf=s,a.target.dispatchEvent(s),bf=null}else return n=ge(a),n!==null&&ex(n),e.blockedOn=a,!1;n.shift()}return!0}function sx(e,n,a){hc(e)&&a.delete(n)}function ub(){Gd=!1,mr!==null&&hc(mr)&&(mr=null),gr!==null&&hc(gr)&&(gr=null),vr!==null&&hc(vr)&&(vr=null),vl.forEach(sx),_l.forEach(sx)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,Gd||(Gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ub)))}var pc=null;function ox(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Hd(s||a)===null)continue;break}var f=ge(a);f!==null&&(e.splice(n,3),n-=3,Mh(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function eo(e){function n(B){return dc(B,e)}mr!==null&&dc(mr,e),gr!==null&&dc(gr,e),vr!==null&&dc(vr,e),vl.forEach(n),_l.forEach(n);for(var a=0;a<_r.length;a++){var s=_r[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)rx(a),a.blockedOn===null&&_r.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[V]||null;if(typeof f=="function")S||ox(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[V]||null)R=S.formAction;else if(Hd(c)!==null)continue}else R=S.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),ox(a)}}}function lx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Vd(e){this._internalRoot=e}mc.prototype.render=Vd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=vi();$_(a,s,e,n,null,null)},mc.prototype.unmount=Vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$_(e.current,2,null,e,null,null),$u(),n[gt]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ql();e={blockedOn:null,target:e,priority:n};for(var a=0;a<_r.length&&n!==0&&n<_r[a].priority;a++);_r.splice(a,0,e),a===0&&rx(e)}};var ux=t.version;if(ux!=="19.3.0")throw Error(r(527,ux,"19.3.0"));ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var cb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:st,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ne=gc.inject(cb),Xt=gc}catch{}}return yl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=jg,f=$g,S=tv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=J_(e,1,!1,null,null,a,s,null,c,f,S,lx),e[gt]=n.current,_d(e),new Vd(n)},yl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=jg,S=$g,R=tv,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=J_(e,1,!0,n,a??null,s,c,B,f,S,R,lx),n.context=j_(null),a=n.current,s=vi(),s=Do(s),c=nr(s),c.callback=null,ir(a,c,s),a=s,n.current.lanes=a,ji(n,a),ca(n),e[gt]=n.current,_d(e),new mc(n)},yl.version="19.3.0",yl}var xx;function Sb(){if(xx)return qd.exports;xx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qd.exports=xb(),qd.exports}var yb=Sb();const FS=1495978707e-1,HS=94607304725808e-1,ai=695700,Sx=FS,ri=HS,Mb=6371,Zd=o=>2.9532*o,Dr=[{id:"ceres",accent:"#bdb8b0",name:"ceres",kind:"rocky",radiusKm:469.7,sphere:!0,color:"#8a8782",color2:"#5f5c58",fact:"the biggest thing in the asteroid belt, with bright salt deposits in occator crater.",source:"ceres"},{id:"makemake",accent:"#e0a07e",name:"makemake",kind:"rocky",radiusKm:715,sphere:!0,color:"#b07a5e",color2:"#7a4d3a",fact:"a reddish dwarf planet past neptune, found around easter 2005.",source:"makemake",note:"surface map is an illustration; no spacecraft has visited."},{id:"pluto",accent:"#e4c6a8",name:"pluto",kind:"rocky",radiusKm:1188.3,sphere:!0,color:"#c9b39b",color2:"#7a4a3a",fact:"the heart-shaped plain is a glacier of nitrogen ice, bigger than texas.",source:"pluto"},{id:"europa",accent:"#e6d6bc",name:"europa",kind:"rocky",radiusKm:1560.8,sphere:!0,color:"#d8cbb4",color2:"#8a6a50",fact:"under the cracked ice, an ocean with maybe twice the water of earth’s.",source:"europa"},{id:"moon",accent:"#cfcdc8",name:"the moon",kind:"rocky",radiusKm:1737.4,sphere:!0,color:"#9c9a96",color2:"#6f6d6a",fact:"the only other world people have walked on. twelve of us, so far.",source:"nasa-fs"},{id:"mercury",accent:"#c9bca8",name:"mercury",kind:"rocky",radiusKm:2439.7,sphere:!0,color:"#8f8577",color2:"#5e574e",fact:"a year there is 88 days. a single day is 176.",source:"nasa-fs"},{id:"titan",accent:"#eeb264",name:"titan",kind:"rocky",radiusKm:2574.7,sphere:!0,color:"#d9a04e",color2:"#a8742e",fact:"a moon bigger than mercury, with rain, rivers and seas of liquid methane.",source:"titan"},{id:"mars",accent:"#e8845a",name:"mars",kind:"rocky",radiusKm:3389.5,sphere:!0,color:"#b5623a",color2:"#7a3a22",fact:"home to olympus mons, a volcano about 2.5× taller than everest.",source:"nasa-fs"},{id:"venus",accent:"#ecd29c",name:"venus",kind:"rocky",radiusKm:6051.8,sphere:!0,color:"#d9bf8c",color2:"#b09366",fact:"hot enough to melt lead, under clouds of sulfuric acid.",source:"nasa-fs"},{id:"earth",accent:"#7fb8e6",name:"earth",kind:"earth",radiusKm:6371,sphere:!0,color:"#2f5f8f",color2:"#4f7a3f",fact:"everyone i know, and everyone i ever will, is on here.",source:"nasa-fs"},{id:"kepler22b",accent:"#82c8dc",name:"kepler-22b",kind:"ice",radiusKm:2.1*Mb,sphere:!0,color:"#5f93ad",color2:"#2f5f7a",fact:"the first planet kepler found in its star’s habitable zone, 640 light-years away.",source:"k22b",note:"radius uncertain (~2.1–2.4 r⊕); what it’s made of is unknown, so this is an illustration."},{id:"neptune",accent:"#7c9df4",name:"neptune",kind:"ice",radiusKm:24622,sphere:!0,color:"#3f63c7",color2:"#2d4799",fact:"winds up to 2,000 km/h. the fastest we know of in the solar system.",source:"nasa-fs"},{id:"uranus",accent:"#a2e2e8",name:"uranus",kind:"ice",radiusKm:25362,sphere:!0,color:"#8fcfd6",color2:"#6fb2bb",fact:"it rolls around the sun on its side, tipped about 98°.",source:"nasa-fs"},{id:"saturn",accent:"#ead49e",name:"saturn",kind:"ringed",radiusKm:58232,sphere:!0,color:"#d8c08a",color2:"#b39866",fact:"its rings are ~280,000 km wide but mostly just tens of meters thick.",source:"nasa-fs"},{id:"jupiter",accent:"#e4c49e",name:"jupiter",kind:"gas",radiusKm:69911,sphere:!0,color:"#c9a27a",color2:"#8c6446",fact:"the great red spot is a storm wider than earth, running for centuries.",source:"nasa-fs"},{id:"sun",accent:"#ffc95c",name:"the sun",kind:"star",radiusKm:ai,sphere:!0,color:"#fff1d6",tempK:5772,fact:"about 99.8% of all the mass in our solar system.",source:"iau"},{id:"sirius",accent:"#bcd6ff",name:"sirius a",kind:"star",radiusKm:1.711*ai,sphere:!0,color:"#cfe0ff",tempK:9940,fact:"the brightest star in the night sky, 8.6 light-years away.",source:"sirius"},{id:"elnath",accent:"#c0d8ff",name:"elnath",kind:"star",radiusKm:4.2*ai,sphere:!0,color:"#d6e2ff",tempK:13824,fact:"the tip of taurus’ northern horn, a blue-white giant.",source:"elnath"},{id:"pollux",accent:"#ffbc74",name:"pollux",kind:"star",radiusKm:9.06*ai,sphere:!0,color:"#ffc58a",tempK:4586,fact:"an orange giant with a planet of its own, thestias.",source:"pollux"},{id:"sgra",accent:"#c6ddff",dim:"horizon radius",name:"sagittarius a*",kind:"blackhole",radiusKm:Zd(415e4),sphere:!0,color:"#cfe0ff",fact:"the black hole at the heart of the milky way. 4 million suns, quietly starving.",source:"sgra",note:"size is the event horizon; the shadow the eht imaged is ~2.6× wider."},{id:"arcturus",accent:"#ffb06a",name:"arcturus",kind:"star",radiusKm:25.4*ai,sphere:!0,color:"#ffb574",tempK:4286,fact:"its light opened the 1933 chicago world’s fair.",source:"arcturus"},{id:"aldebaran",accent:"#ffa060",name:"aldebaran",kind:"star",radiusKm:45.1*ai,sphere:!0,color:"#ffa865",tempK:3900,fact:"the red eye of taurus. pioneer 10 is drifting its way.",source:"aldebaran"},{id:"aludra",accent:"#b8d0ff",name:"aludra",kind:"star",radiusKm:54*ai,sphere:!0,color:"#c8d8ff",tempK:15800,fact:"a blue supergiant in canis major, probably done being a red one.",source:"aludra",note:"estimates range ~54–80 r☉."},{id:"rigel",accent:"#b2ceff",name:"rigel",kind:"star",radiusKm:78.9*ai,sphere:!0,color:"#bcd2ff",tempK:12100,fact:"a blue supergiant, ~120,000 times brighter than the sun.",source:"rigel"},{id:"pistol",accent:"#acc6ff",name:"pistol star",kind:"star",radiusKm:306*ai,sphere:!0,color:"#c4d4ff",tempK:11800,fact:"a blue hypergiant hidden by dust near the galactic center, ~1.6 million suns bright.",source:"pistol",note:"radius uncertain (~300–340 r☉)."},{id:"antares",accent:"#ff8458",name:"antares",kind:"star",radiusKm:680*ai,sphere:!0,color:"#ff9150",tempK:3660,fact:"put it where the sun is and it swallows mars’ orbit.",source:"antares",note:"radius estimates range ~680–880 r☉."},{id:"betelgeuse",accent:"#ff8a56",name:"betelgeuse",kind:"star",radiusKm:764*ai,sphere:!0,color:"#ff8a48",tempK:3600,fact:"it will go supernova someday. someday could be 100,000 years.",source:"betel",note:"radius ~640–1,020 r☉ depending on the study."},{id:"uyscuti",accent:"#ff804e",name:"uy scuti",kind:"star",radiusKm:909*ai,sphere:!0,color:"#ff7f40",tempK:3365,fact:"one of the biggest stars we know, though nobody agrees how big.",source:"uyscuti",note:"uncertain: ~909 r☉ (gaia distance) vs 1,708 r☉ (older distance)."},{id:"vycma",accent:"#ff7c4a",name:"vy canis majoris",kind:"star",radiusKm:1420*ai,sphere:!0,color:"#ff7a3c",tempK:3490,fact:"a dying hypergiant shedding a sun’s worth of gas every few thousand years.",source:"vycma",note:"radius ~1,300–1,540 r☉."},{id:"st218",accent:"#ff7446",name:"stephenson 2-18",kind:"star",radiusKm:2150*ai,sphere:!0,color:"#ff6f38",tempK:3200,fact:"maybe the biggest star known. at the sun’s place, it would reach past saturn.",source:"st218",note:"very uncertain: depends on a model distance and temperature."},{id:"heliosphere",accent:"#aec1e2",name:"the heliosphere",kind:"heliosphere",radiusKm:120*Sx,sphere:!1,color:"#9fb4d9",fact:"the sun’s wind bubble. voyager 1 left it in 2012 and kept going.",source:"helio",note:"really comet-shaped, not round."},{id:"s5",accent:"#ffe0aa",dim:"horizon radius",name:"s5 0014+81",kind:"blackhole",radiusKm:Zd(4e10),sphere:!0,color:"#ffe3b0",fact:"a blazar: its jet points almost straight at us, outshining whole galaxies.",source:"s5",note:"size is the event horizon; the mass (~40 billion m☉) is uncertain."},{id:"ton618",accent:"#ffa044",dim:"horizon radius",name:"ton 618",kind:"blackhole",radiusKm:Zd(66e9),sphere:!0,color:"#ffb060",fact:"one of the heaviest black holes known, powering a quasar 10.4 billion light-years away.",source:"ton618",note:"event horizon for ~66 billion m☉; estimates range ~40–66 billion."},{id:"helix",accent:"#74c4e2",name:"helix nebula",kind:"nebula",radiusKm:1.25*ri,sphere:!1,color:"#5fa6c9",color2:"#d9764a",fact:"a sun-like star’s last breath. our sun will make one of these too.",source:"helix",note:"the faint outer ring reaches ~5.7 ly."},{id:"oort",accent:"#cdd7e8",name:"the oort cloud",kind:"oort",radiusKm:1e5*Sx,sphere:!1,color:"#c9d4e6",fact:"a shell of trillions of icy bodies. nobody has seen it directly.",source:"oort",note:"outer edge estimates range 10,000–100,000 au."},{id:"pillars",accent:"#e6ac64",dim:"tall",name:"pillars of creation",kind:"nebula",radiusKm:2*ri,sphere:!1,color:"#d9a05a",color2:"#3f63c7",fact:"towers of gas and dust in the eagle nebula, with new stars forming in their tips.",source:"pillars",note:"size is the tallest pillar; the whole eagle nebula is ~70 × 55 ly."},{id:"horsehead",accent:"#e8947a",dim:"tall",name:"horsehead nebula",kind:"nebula",radiusKm:2.5*ri,sphere:!1,color:"#b0604a",color2:"#6f8fb0",fact:"a dark dust cloud in orion that happens to look like a knight chess piece.",source:"horsehead",note:"height; ~2.5 ly wide."},{id:"orion",accent:"#ec9ec4",name:"orion nebula",kind:"nebula",radiusKm:12*ri,sphere:!1,color:"#d98ab0",color2:"#6fb3c9",fact:"a star nursery you can see with your eyes, under orion’s belt.",source:"orion"},{id:"omega",accent:"#ffe2b8",name:"omega centauri",kind:"cluster",radiusKm:75*ri,sphere:!1,color:"#ffe2b8",fact:"about 10 million stars packed into one ball of light.",source:"omega"},{id:"segue2",accent:"#f0dcc0",name:"segue 2",kind:"dwarf",radiusKm:110*ri,sphere:!1,color:"#ffe2b8",fact:"a galaxy of barely a thousand stars, one of the faintest ever found.",source:"segue2",note:"half-light size."},{id:"tarantula",accent:"#eab48e",name:"tarantula nebula",kind:"nebula",radiusKm:325*ri,sphere:!1,color:"#d9a080",color2:"#5f7fb0",fact:"the busiest star factory near us. at orion’s distance it would cast shadows.",source:"tarantula",note:"size estimates range 650–1,860 ly."},{id:"m64",accent:"#eaca9c",name:"black eye galaxy",kind:"galaxy",radiusKm:27e3*ri,sphere:!1,color:"#e9d2b0",fact:"a dark band of dust over its bright core. its outer gas spins backwards.",source:"m64"},{id:"milkyway",accent:"#f2deb6",name:"the milky way",kind:"galaxy",radiusKm:5e4*ri,sphere:!1,color:"#e9dcc4",color2:"#9fb4d9",tilt:.62,fact:"home. 100–400 billion stars, and we’re in the suburbs.",source:"mw"},{id:"andromeda",accent:"#bcaaf4",name:"andromeda",kind:"galaxy",radiusKm:76e3*ri,sphere:!1,color:"#f0dcc0",color2:"#b8c4de",tilt:.34,fact:"headed our way. we merge in roughly 4–5 billion years.",source:"m31",note:"disc size; its faint halo is far bigger."},{id:"ic1101",accent:"#f2ce8a",name:"ic 1101",kind:"elliptical",radiusKm:85e4*ri,sphere:!1,color:"#e8c88a",fact:"one of the biggest galaxies known, a golden haze of ~100 trillion old stars.",source:"ic1101",note:"~1.7 million ly by the newest deep imaging; older figures (4 million ly+) include a diffuse halo."},{id:"virgo",accent:"#e2d0ae",name:"virgo supercluster",kind:"supercluster",radiusKm:55e6*ri,sphere:!1,color:"#d4a574",fact:"a hundred-ish galaxy groups and clusters, us somewhere on the edge.",source:"virgo"},{id:"laniakea",accent:"#e8c99c",name:"laniakea",kind:"laniakea",radiusKm:26e7*ri,sphere:!1,color:"#d4a574",fact:"hawaiian for “immeasurable heaven.” 100,000 galaxies flowing one way.",source:"lania"},{id:"universe",accent:"#eeede8",name:"the observable universe",kind:"universe",radiusKm:465e8*ri,sphere:!1,color:"#d4a574",fact:"everything light has had time to reach us from. that’s the edge, for now.",source:"ou",note:"comoving size; the universe itself may be infinite."}],bb=Dr.find(o=>o.id==="earth");function Eb(o){if(o<1e8)return{value:Wc(o),unit:"km"};const t=o/FS;return t<2e4?{value:Wc(t),unit:"au"}:{value:Wc(o/HS),unit:"light-years"}}const Tb=[[1e18,"quintillion"],[1e15,"quadrillion"],[1e12,"trillion"],[1e9,"billion"],[1e6,"million"]];function qc(o){return o>=100?Math.round(o).toLocaleString("en-US"):o>=10?(Math.round(o*10)/10).toString():(Math.round(o*100)/100).toString()}function Wc(o){if(o>=1e21){const t=Math.floor(Math.log10(o));return`${qc(o/10**t)} × 10^${t}`}for(const[t,i]of Tb)if(o>=t)return`${qc(o/t)} ${i}`;return qc(o)}function yx(o){return o<1?`${qc(o)}×`:`${Wc(o)}×`}const Bm="186",Ab=0,Mx=1,wb=2,Yc=1,Rb=2,Nl=3,cs=0,li=1,Oi=2,Zi=0,Ll=1,bx=2,Ex=3,Tx=4,GS=5,ls=100,Cb=101,Db=102,Nb=103,Ub=104,Lb=200,kp=201,Ob=202,Pb=203,VS=204,af=205,zb=206,Ib=207,Bb=208,Fb=209,Hb=210,Gb=211,Vb=212,kb=213,Xb=214,Xp=0,qp=1,Wp=2,Bl=3,Yp=4,Kp=5,Zp=6,Qp=7,kS=0,qb=1,Wb=2,ga=0,XS=1,qS=2,WS=3,Fm=4,YS=5,KS=6,ZS=7,QS=300,fs=301,Mo=302,Qd=303,Jd=304,pf=306,Jp=1e3,Ga=1001,jp=1002,In=1003,Yb=1004,vc=1005,kn=1006,jd=1007,Nr=1008,yi=1009,JS=1010,jS=1011,Fl=1012,Hm=1013,va=1014,pa=1015,_a=1016,Gm=1017,Vm=1018,Hl=1020,$S=35902,ty=35899,ey=1021,ny=1022,Ki=1023,ka=1026,us=1027,iy=1028,km=1029,hs=1030,Xm=1031,qm=1033,Kc=33776,Zc=33777,Qc=33778,Jc=33779,$p=35840,tm=35841,em=35842,nm=35843,im=36196,am=37492,rm=37496,sm=37488,om=37489,rf=37490,lm=37491,um=37808,cm=37809,fm=37810,hm=37811,dm=37812,pm=37813,mm=37814,gm=37815,vm=37816,_m=37817,xm=37818,Sm=37819,ym=37820,Mm=37821,bm=36492,Em=36494,Tm=36495,Am=36283,wm=36284,sf=36285,Rm=36286,Kb=3200,Cm=0,Zb=1,Cr="",jn="srgb",of="srgb-linear",lf="linear",Qe="srgb",$d=7680,Qb=519,Jb=512,jb=513,$b=514,Wm=515,tE=516,eE=517,Ym=518,nE=519,iE=35044,Ax="300 es",ma=2e3,Gl=2001;function aE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function rE(){const o=Vl("canvas");return o.style.display="block",o}const wx={};function Rx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ay(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=ay(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function He(...o){o=ay(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function So(...o){const t=o.join(" ");t in wx||(wx[t]=!0,ce(...o))}function sE(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const oE={[Xp]:qp,[Wp]:Zp,[Yp]:Qp,[Bl]:Kp,[qp]:Xp,[Zp]:Wp,[Qp]:Yp,[Kp]:Bl};class ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=Math.PI/180,Dm=180/Math.PI;function ql(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ce(o,t,i){return Math.max(t,Math.min(i,o))}function lE(o,t){return(o%t+t)%t}function ep(o,t,i){return(1-i)*o+i*t}function Ml(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const n0=class n0{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ce(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};n0.prototype.isVector2=!0;let se=n0;class xa{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],_=r[l+3],g=u[h+0],x=u[h+1],y=u[h+2],A=u[h+3];if(_!==A||p!==g||m!==x||v!==y){let M=p*g+m*x+v*y+_*A;M<0&&(g=-g,x=-x,y=-y,A=-A,M=-M);let b=1-d;if(M<.9995){const L=Math.acos(M),z=Math.sin(L);b=Math.sin(b*L)/z,d=Math.sin(d*L)/z,p=p*b+g*d,m=m*b+x*d,v=v*b+y*d,_=_*b+A*d}else{p=p*b+g*d,m=m*b+x*d,v=v*b+y*d,_=_*b+A*d;const L=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=L,m*=L,v*=L,_*=L}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],_=u[h],g=u[h+1],x=u[h+2],y=u[h+3];return t[i]=d*y+v*_+p*x-m*g,t[i+1]=p*y+v*g+m*_-d*x,t[i+2]=m*y+v*x+d*g-p*_,t[i+3]=v*y-d*_-p*g-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),_=d(u/2),g=p(r/2),x=p(l/2),y=p(u/2);switch(h){case"XYZ":this._x=g*v*_+m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_-g*x*y;break;case"YXZ":this._x=g*v*_+m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_+g*x*y;break;case"ZXY":this._x=g*v*_-m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_-g*x*y;break;case"ZYX":this._x=g*v*_-m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_+g*x*y;break;case"YZX":this._x=g*v*_+m*x*y,this._y=m*x*_+g*v*y,this._z=m*v*y-g*x*_,this._w=m*v*_-g*x*y;break;case"XZY":this._x=g*v*_-m*x*y,this._y=m*x*_-g*v*y,this._z=m*v*y+g*x*_,this._w=m*v*_+g*x*y;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],_=i[10],g=r+d+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-p)*x,this._y=(u-m)*x,this._z=(h-l)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-p)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(u+m)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(u-m)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(h-l)/x,this._x=(u+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-u*p,this._y=l*v+h*p+u*d-r*m,this._z=u*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const i0=class i0{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Cx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Cx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),v=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+p*m+h*_-d*v,this.y=r+p*v+d*m-u*_,this.z=l+p*_+u*v-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ce(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};i0.prototype.isVector3=!0;let k=i0;const np=new k,Cx=new xa,a0=class a0{constructor(t,i,r,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],x=r[5],y=r[8],A=l[0],M=l[3],b=l[6],L=l[1],z=l[4],C=l[7],U=l[2],D=l[5],N=l[8];return u[0]=h*A+d*L+p*U,u[3]=h*M+d*z+p*D,u[6]=h*b+d*C+p*N,u[1]=m*A+v*L+_*U,u[4]=m*M+v*z+_*D,u[7]=m*b+v*C+_*N,u[2]=g*A+x*L+y*U,u[5]=g*M+x*z+y*D,u[8]=g*b+x*C+y*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*h*v-i*d*m-r*u*v+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=v*h-d*m,g=d*p-v*u,x=m*u-h*p,y=i*_+r*g+l*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=_*A,t[1]=(l*m-v*r)*A,t[2]=(d*r-l*h)*A,t[3]=g*A,t[4]=(v*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=x*A,t[7]=(r*p-m*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ip.makeScale(t,i)),this}rotate(t){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ip.makeRotation(-t)),this}translate(t,i){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ip.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};a0.prototype.isMatrix3=!0;let pe=a0;const ip=new pe,Dx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const o={enabled:!0,workingColorSpace:of,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Qe&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Qe&&(l.r=yo(l.r),l.g=yo(l.g),l.b=yo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Cr?lf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[of]:{primaries:t,whitePoint:r,transfer:lf,toXYZ:Dx,fromXYZ:Nx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Dx,fromXYZ:Nx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),o}const ze=uE();function Va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let no;class cE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{no===void 0&&(no=Vl("canvas")),no.width=t.width,no.height=t.height;const l=no.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=no}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Va(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fE=0;class Km{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ql(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ap(l[h].image)):u.push(ap(l[h]))}else u=ap(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ap(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let hE=0;const rp=new k;class Xn extends ds{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ga,l=Ga,u=kn,h=Nr,d=Ki,p=yi,m=Xn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ql(),this.name="",this.source=new Km(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rp).x}get height(){return this.source.getSize(rp).y}get depth(){return this.source.getSize(rp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==QS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jp:t.x=t.x-Math.floor(t.x);break;case Ga:t.x=t.x<0?0:1;break;case jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jp:t.y=t.y-Math.floor(t.y);break;case Ga:t.y=t.y<0?0:1;break;case jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=QS;Xn.DEFAULT_ANISOTROPY=1;const r0=class r0{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],v=p[4],_=p[8],g=p[1],x=p[5],y=p[9],A=p[2],M=p[6],b=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(y-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(y+M)<.1&&Math.abs(m+x+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(m+1)/2,C=(x+1)/2,U=(b+1)/2,D=(v+g)/4,N=(_+A)/4,T=(y+M)/4;return z>C&&z>U?z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(z),l=D/r,u=N/r):C>U?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=D/l,u=T/l):U<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),r=N/u,l=T/u),this.set(r,l,u,i),this}let L=Math.sqrt((M-y)*(M-y)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(M-y)/L,this.y=(_-A)/L,this.z=(g-v)/L,this.w=Math.acos((m+x+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};r0.prototype.isVector4=!0;let tn=r0;class dE extends ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Xn(l),h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Km(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends dE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class ry extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pE extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const df=class df{constructor(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,M)}set(t,i,r,l,u,h,d,p,m,v,_,g,x,y,A,M){const b=this.elements;return b[0]=t,b[4]=i,b[8]=r,b[12]=l,b[1]=u,b[5]=h,b[9]=d,b[13]=p,b[2]=m,b[6]=v,b[10]=_,b[14]=g,b[3]=x,b[7]=y,b[11]=A,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new df().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/io.setFromMatrixColumn(t,0).length(),u=1/io.setFromMatrixColumn(t,1).length(),h=1/io.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const g=h*v,x=h*_,y=d*v,A=d*_;i[0]=p*v,i[4]=-p*_,i[8]=m,i[1]=x+y*m,i[5]=g-A*m,i[9]=-d*p,i[2]=A-g*m,i[6]=y+x*m,i[10]=h*p}else if(t.order==="YXZ"){const g=p*v,x=p*_,y=m*v,A=m*_;i[0]=g+A*d,i[4]=y*d-x,i[8]=h*m,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=x*d-y,i[6]=A+g*d,i[10]=h*p}else if(t.order==="ZXY"){const g=p*v,x=p*_,y=m*v,A=m*_;i[0]=g-A*d,i[4]=-h*_,i[8]=y+x*d,i[1]=x+y*d,i[5]=h*v,i[9]=A-g*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const g=h*v,x=h*_,y=d*v,A=d*_;i[0]=p*v,i[4]=y*m-x,i[8]=g*m+A,i[1]=p*_,i[5]=A*m+g,i[9]=x*m-y,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const g=h*p,x=h*m,y=d*p,A=d*m;i[0]=p*v,i[4]=A-g*_,i[8]=y*_+x,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*_+y,i[10]=g-A*_}else if(t.order==="XZY"){const g=h*p,x=h*m,y=d*p,A=d*m;i[0]=p*v,i[4]=-_,i[8]=m*v,i[1]=g*_+A,i[5]=h*v,i[9]=x*_-y,i[2]=y*_-x,i[6]=d*v,i[10]=A*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mE,t,gE)}lookAt(t,i,r){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Sr.crossVectors(r,xi),Sr.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Sr.crossVectors(r,xi)),Sr.normalize(),_c.crossVectors(xi,Sr),l[0]=Sr.x,l[4]=_c.x,l[8]=xi.x,l[1]=Sr.y,l[5]=_c.y,l[9]=xi.y,l[2]=Sr.z,l[6]=_c.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],x=r[13],y=r[2],A=r[6],M=r[10],b=r[14],L=r[3],z=r[7],C=r[11],U=r[15],D=l[0],N=l[4],T=l[8],O=l[12],F=l[1],G=l[5],W=l[9],it=l[13],H=l[2],$=l[6],K=l[10],Y=l[14],dt=l[3],rt=l[7],lt=l[11],xt=l[15];return u[0]=h*D+d*F+p*H+m*dt,u[4]=h*N+d*G+p*$+m*rt,u[8]=h*T+d*W+p*K+m*lt,u[12]=h*O+d*it+p*Y+m*xt,u[1]=v*D+_*F+g*H+x*dt,u[5]=v*N+_*G+g*$+x*rt,u[9]=v*T+_*W+g*K+x*lt,u[13]=v*O+_*it+g*Y+x*xt,u[2]=y*D+A*F+M*H+b*dt,u[6]=y*N+A*G+M*$+b*rt,u[10]=y*T+A*W+M*K+b*lt,u[14]=y*O+A*it+M*Y+b*xt,u[3]=L*D+z*F+C*H+U*dt,u[7]=L*N+z*G+C*$+U*rt,u[11]=L*T+z*W+C*K+U*lt,u[15]=L*O+z*it+C*Y+U*xt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],v=t[2],_=t[6],g=t[10],x=t[14],y=t[3],A=t[7],M=t[11],b=t[15],L=p*x-m*g,z=d*x-m*_,C=d*g-p*_,U=h*x-m*v,D=h*g-p*v,N=h*_-d*v;return i*(A*L-M*z+b*C)-r*(y*L-M*U+b*D)+l*(y*z-A*U+b*N)-u*(y*C-A*D+M*N)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],v=t[10];return i*(h*v-d*m)-r*(u*v-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],v=t[8],_=t[9],g=t[10],x=t[11],y=t[12],A=t[13],M=t[14],b=t[15],L=i*d-r*h,z=i*p-l*h,C=i*m-u*h,U=r*p-l*d,D=r*m-u*d,N=l*m-u*p,T=v*A-_*y,O=v*M-g*y,F=v*b-x*y,G=_*M-g*A,W=_*b-x*A,it=g*b-x*M,H=L*it-z*W+C*G+U*F-D*O+N*T;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/H;return t[0]=(d*it-p*W+m*G)*$,t[1]=(l*W-r*it-u*G)*$,t[2]=(A*N-M*D+b*U)*$,t[3]=(g*D-_*N-x*U)*$,t[4]=(p*F-h*it-m*O)*$,t[5]=(i*it-l*F+u*O)*$,t[6]=(M*C-y*N-b*z)*$,t[7]=(v*N-g*C+x*z)*$,t[8]=(h*W-d*F+m*T)*$,t[9]=(r*F-i*W-u*T)*$,t[10]=(y*D-A*C+b*L)*$,t[11]=(_*C-v*D-x*L)*$,t[12]=(d*O-h*G-p*T)*$,t[13]=(i*G-r*O+l*T)*$,t[14]=(A*z-y*U-M*L)*$,t[15]=(v*U-_*z+g*L)*$,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,v=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,v=h+h,_=d+d,g=u*m,x=u*v,y=u*_,A=h*v,M=h*_,b=d*_,L=p*m,z=p*v,C=p*_,U=r.x,D=r.y,N=r.z;return l[0]=(1-(A+b))*U,l[1]=(x+C)*U,l[2]=(y-z)*U,l[3]=0,l[4]=(x-C)*D,l[5]=(1-(g+b))*D,l[6]=(M+L)*D,l[7]=0,l[8]=(y+z)*N,l[9]=(M-L)*N,l[10]=(1-(g+A))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let h=io.set(l[0],l[1],l[2]).length();const d=io.set(l[4],l[5],l[6]).length(),p=io.set(l[8],l[9],l[10]).length();u<0&&(h=-h),ki.copy(this);const m=1/h,v=1/d,_=1/p;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=_,ki.elements[9]*=_,ki.elements[10]*=_,i.setFromRotationMatrix(ki),r.x=h,r.y=d,r.z=p,this}makePerspective(t,i,r,l,u,h,d=ma,p=!1){const m=this.elements,v=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),x=(r+l)/(r-l);let y,A;if(p)y=u/(h-u),A=h*u/(h-u);else if(d===ma)y=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Gl)y=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ma,p=!1){const m=this.elements,v=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),x=-(r+l)/(r-l);let y,A;if(p)y=1/(h-u),A=h/(h-u);else if(d===ma)y=-2/(h-u),A=-(h+u)/(h-u);else if(d===Gl)y=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=y,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};df.prototype.isMatrix4=!0;let rn=df;const io=new k,ki=new rn,mE=new k(0,0,0),gE=new k(1,1,1),Sr=new k,_c=new k,xi=new k,Ux=new rn,Lx=new xa;class Lr{constructor(t=0,i=0,r=0,l=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],_=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ux.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ux,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lx.setFromEuler(this),this.setFromQuaternion(Lx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class sy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vE=0;const Ox=new k,ao=new xa,Pa=new rn,xc=new k,bl=new k,_E=new k,xE=new xa,Px=new k(1,0,0),zx=new k(0,1,0),Ix=new k(0,0,1),Bx={type:"added"},SE={type:"removed"},ro={type:"childadded",child:null},sp={type:"childremoved",child:null};class Dn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new k,i=new Lr,r=new xa,l=new k(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new pe}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,i){return ao.setFromAxisAngle(t,i),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Px,t)}rotateY(t){return this.rotateOnAxis(zx,t)}rotateZ(t){return this.rotateOnAxis(Ix,t)}translateOnAxis(t,i){return Ox.copy(t).applyQuaternion(this.quaternion),this.position.add(Ox.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Px,t)}translateY(t){return this.translateOnAxis(zx,t)}translateZ(t){return this.translateOnAxis(Ix,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?xc.copy(t):xc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(bl,xc,this.up):Pa.lookAt(xc,bl,this.up),this.quaternion.setFromRotationMatrix(Pa),l&&(Pa.extractRotation(l.matrixWorld),ao.setFromRotationMatrix(Pa),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bx),ro.child=t,this.dispatchEvent(ro),ro.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(SE),sp.child=t,this.dispatchEvent(sp),sp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bx),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,_E),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,xE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),v=h(t.images),_=h(t.shapes),g=h(t.skeletons),x=h(t.animations),y=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),y.length>0&&(r.nodes=y)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dn.DEFAULT_UP=new k(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bn extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),b=this._getHandJoint(m,A);M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=M.radius),b.visible=M!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,y=.005;m.inputState.pinching&&g>x+y?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=x-y&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new bn;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function lp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Le{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=r,ze.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=ze.workingColorSpace){if(t=lE(t,1),i=Ce(i,0,1),r=Ce(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=lp(h,u,t+1/3),this.g=lp(h,u,t),this.b=lp(h,u,t-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(t,i=jn){function r(u){u!==void 0&&parseFloat(u)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=jn){const r=oy[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return ze.workingToColorSpace(Hn.copy(this),t),Math.round(Ce(Hn.r*255,0,255))*65536+Math.round(Ce(Hn.g*255,0,255))*256+Math.round(Ce(Hn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,u=Hn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=v<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=ze.workingColorSpace){return ze.workingToColorSpace(Hn.copy(this),i),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=jn){ze.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,l=Hn.b;return t!==jn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+i,yr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(yr),t.getHSL(Sc);const r=ep(yr.h,Sc.h,i),l=ep(yr.s,Sc.s,i),u=ep(yr.l,Sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Le;Le.NAMES=oy;let Fx=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lr,this.environmentIntensity=1,this.environmentRotation=new Lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}};const Xi=new k,za=new k,up=new k,Ia=new k,so=new k,oo=new k,Hx=new k,cp=new k,fp=new k,hp=new k,dp=new tn,pp=new tn,mp=new tn;class Yi{constructor(t=new k,i=new k,r=new k){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Xi.subVectors(t,i),l.cross(Xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Xi.subVectors(l,i),za.subVectors(r,i),up.subVectors(t,i);const h=Xi.dot(Xi),d=Xi.dot(za),p=Xi.dot(up),m=za.dot(za),v=za.dot(up),_=h*m-d*d;if(_===0)return u.set(0,0,0),null;const g=1/_,x=(m*p-d*v)*g,y=(h*v-d*p)*g;return u.set(1-x-y,y,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,Ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ia.x),p.addScaledVector(h,Ia.y),p.addScaledVector(d,Ia.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(t,i),pp.fromBufferAttribute(t,r),mp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(dp,u.x),h.addScaledVector(pp,u.y),h.addScaledVector(mp,u.z),h}static isFrontFacing(t,i,r,l){return Xi.subVectors(r,i),za.subVectors(t,i),Xi.cross(za).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),za.subVectors(this.a,this.b),Xi.cross(za).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;so.subVectors(l,r),oo.subVectors(u,r),cp.subVectors(t,r);const p=so.dot(cp),m=oo.dot(cp);if(p<=0&&m<=0)return i.copy(r);fp.subVectors(t,l);const v=so.dot(fp),_=oo.dot(fp);if(v>=0&&_<=v)return i.copy(l);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(so,h);hp.subVectors(t,u);const x=so.dot(hp),y=oo.dot(hp);if(y>=0&&x<=y)return i.copy(u);const A=x*m-p*y;if(A<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(r).addScaledVector(oo,d);const M=v*y-x*_;if(M<=0&&_-v>=0&&x-y>=0)return Hx.subVectors(u,l),d=(_-v)/(_-v+(x-y)),i.copy(l).addScaledVector(Hx,d);const b=1/(M+A+g);return h=A*b,d=g*b,i.copy(r).addScaledVector(so,h).addScaledVector(oo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Wl{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(qi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(qi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=qi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,qi):qi.fromBufferAttribute(u,h),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),Mc.subVectors(this.max,El),lo.subVectors(t.a,El),uo.subVectors(t.b,El),co.subVectors(t.c,El),Mr.subVectors(uo,lo),br.subVectors(co,uo),is.subVectors(lo,co);let i=[0,-Mr.z,Mr.y,0,-br.z,br.y,0,-is.z,is.y,Mr.z,0,-Mr.x,br.z,0,-br.x,is.z,0,-is.x,-Mr.y,Mr.x,0,-br.y,br.x,0,-is.y,is.x,0];return!gp(i,lo,uo,co,Mc)||(i=[1,0,0,0,1,0,0,0,1],!gp(i,lo,uo,co,Mc))?!1:(bc.crossVectors(Mr,br),i=[bc.x,bc.y,bc.z],gp(i,lo,uo,co,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ba=[new k,new k,new k,new k,new k,new k,new k,new k],qi=new k,yc=new Wl,lo=new k,uo=new k,co=new k,Mr=new k,br=new k,is=new k,El=new k,Mc=new k,bc=new k,as=new k;function gp(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){as.fromArray(o,u);const d=l.x*Math.abs(as.x)+l.y*Math.abs(as.y)+l.z*Math.abs(as.z),p=t.dot(as),m=i.dot(as),v=r.dot(as);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const xn=new k,Ec=new se;let ME=0;class oi extends ds{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ME++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=iE,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ml(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=si(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ml(i,this.array)),i}setX(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ml(i,this.array)),i}setY(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ml(i,this.array)),i}setZ(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ml(i,this.array)),i}setW(t,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),l=si(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),l=si(l,this.array),u=si(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ly extends oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class uy extends oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sn extends oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const bE=new Wl,Tl=new k,vp=new k;class Yl{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):bE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tl.subVectors(t,this.center);const i=Tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Tl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tl.copy(t.center).add(vp)),this.expandByPoint(Tl.copy(t.center).sub(vp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let EE=0;const Li=new rn,_p=new Dn,fo=new k,Si=new Wl,Al=new Wl,Cn=new k;class qn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(aE(t)?uy:ly)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,i,r){return Li.makeTranslation(t,i,r),this.applyMatrix4(Li),this}scale(t,i,r){return Li.makeScale(t,i,r),this.applyMatrix4(Li),this}lookAt(t){return _p.lookAt(t),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Si.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const r=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Al.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(Si.min,Al.min),Si.expandByPoint(Cn),Cn.addVectors(Si.max,Al.max),Si.expandByPoint(Cn)):(Si.expandByPoint(Al.min),Si.expandByPoint(Al.max))}Si.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Cn.fromBufferAttribute(d,m),p&&(fo.fromBufferAttribute(t,m),Cn.add(fo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new oi(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let T=0;T<r.count;T++)d[T]=new k,p[T]=new k;const m=new k,v=new k,_=new k,g=new se,x=new se,y=new se,A=new k,M=new k;function b(T,O,F){m.fromBufferAttribute(r,T),v.fromBufferAttribute(r,O),_.fromBufferAttribute(r,F),g.fromBufferAttribute(u,T),x.fromBufferAttribute(u,O),y.fromBufferAttribute(u,F),v.sub(m),_.sub(m),x.sub(g),y.sub(g);const G=1/(x.x*y.y-y.x*x.y);isFinite(G)&&(A.copy(v).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(G),M.copy(_).multiplyScalar(x.x).addScaledVector(v,-y.x).multiplyScalar(G),d[T].add(A),d[O].add(A),d[F].add(A),p[T].add(M),p[O].add(M),p[F].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let T=0,O=L.length;T<O;++T){const F=L[T],G=F.start,W=F.count;for(let it=G,H=G+W;it<H;it+=3)b(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const z=new k,C=new k,U=new k,D=new k;function N(T){U.fromBufferAttribute(l,T),D.copy(U);const O=d[T];z.copy(O),z.sub(U.multiplyScalar(U.dot(O))).normalize(),C.crossVectors(D,O);const G=C.dot(p[T])<0?-1:1;h.setXYZW(T,z.x,z.y,z.z,G)}for(let T=0,O=L.length;T<O;++T){const F=L[T],G=F.start,W=F.count;for(let it=G,H=G+W;it<H;it+=3)N(t.getX(it+0)),N(t.getX(it+1)),N(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const l=new k,u=new k,h=new k,d=new k,p=new k,m=new k,v=new k,_=new k;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),A=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),d.add(v),p.add(v),m.add(v),r.setXYZ(y,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,_=d.normalized,g=new m.constructor(p.length*v);let x=0,y=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*v;for(let b=0;b<v;b++)g[y++]=m[x++]}return new oi(g,v,_)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const g=m[v],x=t(g,r);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const x=m[_];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],_=u[m];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,v=h.length;m<v;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new k,TE=new k,AE=new pe;class Rr{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=xp.subVectors(r,i).cross(TE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(xp),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||AE.getNormalMatrix(t),l=this.coplanarPoint(xp).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let wE=0;class ps extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ql(),this.name="",this.type="Material",this.blending=Ll,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=VS,this.blendDst=af,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$d,this.stencilZFail=$d,this.stencilZPass=$d,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Rr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new se().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Fa=new k,Sp=new k,Tc=new k,Ac=new k;class Zm{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Fa.copy(this.origin).addScaledVector(this.direction,i),Fa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Sp.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Ac.copy(this.origin).sub(Sp);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=Ac.dot(this.direction),p=-Ac.dot(Tc),m=Ac.lengthSq(),v=Math.abs(1-h*h);let _,g,x,y;if(v>0)if(_=h*p-d,g=h*d-p,y=u*v,_>=0)if(g>=-y)if(g<=y){const A=1/v;_*=A,g*=A,x=_*(_+h*g+2*d)+g*(h*_+g+2*p)+m}else g=u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;else g=-u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;else g<=-y?(_=Math.max(0,-(-h*u+d)),g=_>0?-u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m):g<=y?(_=0,g=Math.min(Math.max(-u,-p),u),x=g*(g+2*p)+m):(_=Math.max(0,-(h*u+d)),g=_>0?u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m);else g=h>0?-u:u,_=Math.max(0,-(h*g+d)),x=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Sp).addScaledVector(Tc,g),x}intersectSphere(t,i){if(t.radius<0)return null;Fa.subVectors(t.center,this.origin);const r=Fa.dot(this.direction),l=Fa.dot(Fa)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(t.min.x-g.x)*m,l=(t.max.x-g.x)*m):(r=(t.max.x-g.x)*m,l=(t.min.x-g.x)*m),v>=0?(u=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-g.z)*_,p=(t.max.z-g.z)*_):(d=(t.max.z-g.z)*_,p=(t.min.z-g.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Fa)!==null}intersectTriangle(t,i,r,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,_=t.x-h.x,g=t.y-h.y,x=t.z-h.z,y=i.x-h.x,A=i.y-h.y,M=i.z-h.z,b=r.x-h.x,L=r.y-h.y,z=r.z-h.z,C=Math.abs(p),U=Math.abs(m),D=Math.abs(v);let N,T,O,F,G,W,it,H,$,K,Y,dt;if(C>=U&&C>=D?(O=p,W=_,$=y,dt=b,p>=0?(N=m,T=v,F=g,G=x,it=A,H=M,K=L,Y=z):(N=v,T=m,F=x,G=g,it=M,H=A,K=z,Y=L)):U>=D?(O=m,W=g,$=A,dt=L,m>=0?(N=v,T=p,F=x,G=_,it=M,H=y,K=z,Y=b):(N=p,T=v,F=_,G=x,it=y,H=M,K=b,Y=z)):(O=v,W=x,$=M,dt=z,v>=0?(N=p,T=m,F=_,G=g,it=y,H=A,K=b,Y=L):(N=m,T=p,F=g,G=_,it=A,H=y,K=L,Y=b)),O===0)return null;const rt=N/O,lt=T/O,xt=1/O,qt=F-rt*W,Tt=G-lt*W,I=it-rt*$,mt=H-lt*$,Et=K-rt*dt,q=Y-lt*dt,nt=Et*mt-q*I,At=qt*q-Tt*Et,Ut=I*Tt-mt*qt;if(l){if(nt<0||At<0||Ut<0)return null}else if((nt<0||At<0||Ut<0)&&(nt>0||At>0||Ut>0))return null;const st=nt+At+Ut;if(st===0)return null;const ut=xt*(nt*W+At*$+Ut*dt);return(st>0?ut<0:ut>0)?null:this.at(ut/st,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cy extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.combine=kS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gx=new rn,rs=new Zm,wc=new Yl,Vx=new k,Rc=new k,Cc=new k,Dc=new k,yp=new k,Nc=new k,kx=new k,Uc=new k;class sn extends Dn{constructor(t=new qn,i=new cy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Nc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(yp.fromBufferAttribute(_,t),h?Nc.addScaledVector(yp,v):Nc.addScaledVector(yp.sub(i),v))}i.add(Nc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(u),rs.copy(t.ray).recast(t.near),!(wc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(wc,Vx)===null||rs.origin.distanceToSquared(Vx)>(t.far-t.near)**2))&&(Gx.copy(u).invert(),rs.copy(t.ray).applyMatrix4(Gx),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,rs)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(h))for(let y=0,A=g.length;y<A;y++){const M=g[y],b=h[M.materialIndex],L=Math.max(M.start,x.start),z=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let C=L,U=z;C<U;C+=3){const D=d.getX(C),N=d.getX(C+1),T=d.getX(C+2);l=Lc(this,b,t,r,m,v,_,D,N,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const y=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=y,b=A;M<b;M+=3){const L=d.getX(M),z=d.getX(M+1),C=d.getX(M+2);l=Lc(this,h,t,r,m,v,_,L,z,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let y=0,A=g.length;y<A;y++){const M=g[y],b=h[M.materialIndex],L=Math.max(M.start,x.start),z=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let C=L,U=z;C<U;C+=3){const D=C,N=C+1,T=C+2;l=Lc(this,b,t,r,m,v,_,D,N,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const y=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=y,b=A;M<b;M+=3){const L=M,z=M+1,C=M+2;l=Lc(this,h,t,r,m,v,_,L,z,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function RE(o,t,i,r,l,u,h,d){let p;if(t.side===li?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===cs,d),p===null)return null;Uc.copy(d),Uc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Uc);return m<i.near||m>i.far?null:{distance:m,point:Uc.clone(),object:o}}function Lc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,Rc),o.getVertexPosition(p,Cc),o.getVertexPosition(m,Dc);const v=RE(o,t,i,r,Rc,Cc,Dc,kx);if(v){const _=new k;Yi.getBarycoord(kx,Rc,Cc,Dc,_),l&&(v.uv=Yi.getInterpolatedAttribute(l,d,p,m,_,new se)),u&&(v.uv1=Yi.getInterpolatedAttribute(u,d,p,m,_,new se)),h&&(v.normal=Yi.getInterpolatedAttribute(h,d,p,m,_,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new k,materialIndex:0};Yi.getNormal(Rc,Cc,Dc,g.normal),v.face=g,v.barycoord=_}return v}class CE extends Xn{constructor(t=null,i=1,r=1,l,u,h,d,p,m=In,v=In,_,g){super(null,h,d,p,m,v,l,u,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ss=new Yl,DE=new se(.5,.5),Oc=new k;class Qm{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,h=new Rr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ma,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],v=u[4],_=u[5],g=u[6],x=u[7],y=u[8],A=u[9],M=u[10],b=u[11],L=u[12],z=u[13],C=u[14],U=u[15];if(l[0].setComponents(m-h,x-v,b-y,U-L).normalize(),l[1].setComponents(m+h,x+v,b+y,U+L).normalize(),l[2].setComponents(m+d,x+_,b+A,U+z).normalize(),l[3].setComponents(m-d,x-_,b-A,U-z).normalize(),r)l[4].setComponents(p,g,M,C).normalize(),l[5].setComponents(m-p,x-g,b-M,U-C).normalize();else if(l[4].setComponents(m-p,x-g,b-M,U-C).normalize(),i===ma)l[5].setComponents(m+p,x+g,b+M,U+C).normalize();else if(i===Gl)l[5].setComponents(p,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const i=DE.distanceTo(t.center);return ss.radius=.7071067811865476+i,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fy extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uf=new k,cf=new k,Xx=new rn,wl=new Zm,Pc=new Yl,Mp=new k,qx=new k;class NE extends Dn{constructor(t=new qn,i=new fy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)uf.fromBufferAttribute(i,l-1),cf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=uf.distanceTo(cf);t.setAttribute("lineDistance",new Sn(r,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=u,t.ray.intersectsSphere(Pc)===!1)return;Xx.copy(l).invert(),wl.copy(t.ray).applyMatrix4(Xx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const x=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let A=x,M=y-1;A<M;A+=m){const b=v.getX(A),L=v.getX(A+1),z=zc(this,t,wl,p,b,L,A);z&&i.push(z)}if(this.isLineLoop){const A=v.getX(y-1),M=v.getX(x),b=zc(this,t,wl,p,A,M,y-1);b&&i.push(b)}}else{const x=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let A=x,M=y-1;A<M;A+=m){const b=zc(this,t,wl,p,A,A+1,A);b&&i.push(b)}if(this.isLineLoop){const A=zc(this,t,wl,p,y-1,x,y-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function zc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(uf.fromBufferAttribute(d,l),cf.fromBufferAttribute(d,u),i.distanceSqToSegment(uf,cf,Mp,qx)>r)return;Mp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(Mp);if(!(m<t.near||m>t.far))return{distance:m,point:qx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Wx=new k,Yx=new k;class UE extends NE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Wx.fromBufferAttribute(i,l),Yx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Wx.distanceTo(Yx);t.setAttribute("lineDistance",new Sn(r,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LE extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kx=new rn,Nm=new Zm,Ic=new Yl,Bc=new k;class OE extends Dn{constructor(t=new qn,i=new LE){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=u,t.ray.intersectsSphere(Ic)===!1)return;Kx.copy(l).invert(),Nm.copy(t.ray).applyMatrix4(Kx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const g=Math.max(0,h.start),x=Math.min(m.count,h.start+h.count);for(let y=g,A=x;y<A;y++){const M=m.getX(y);Bc.fromBufferAttribute(_,M),Zx(Bc,M,p,l,t,i,this)}}else{const g=Math.max(0,h.start),x=Math.min(_.count,h.start+h.count);for(let y=g,A=x;y<A;y++)Bc.fromBufferAttribute(_,y),Zx(Bc,y,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Zx(o,t,i,r,l,u,h){const d=Nm.distanceSqToPoint(o);if(d<i){const p=new k;Nm.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class hy extends Xn{constructor(t=[],i=fs,r,l,u,h,d,p,m,v){super(t,i,r,l,u,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends Xn{constructor(t,i,r=va,l,u,h,d=In,p=In,m,v=ka,_=1){if(v!==ka&&v!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,u,h,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Km(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class PE extends kl{constructor(t,i=va,r=fs,l,u,h=In,d=In,p,m=ka){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,r,l,u,h,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dy extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kl extends qn{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],v=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,r,i,t,h,u,0),y("z","y","x",1,-1,r,i,-t,h,u,1),y("x","z","y",1,1,t,r,i,l,h,2),y("x","z","y",1,-1,t,r,-i,l,h,3),y("x","y","z",1,-1,t,i,r,l,u,4),y("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(_,2));function y(A,M,b,L,z,C,U,D,N,T,O){const F=C/N,G=U/T,W=C/2,it=U/2,H=D/2,$=N+1,K=T+1;let Y=0,dt=0;const rt=new k;for(let lt=0;lt<K;lt++){const xt=lt*G-it;for(let qt=0;qt<$;qt++){const Tt=qt*F-W;rt[A]=Tt*L,rt[M]=xt*z,rt[b]=H,m.push(rt.x,rt.y,rt.z),rt[A]=0,rt[M]=0,rt[b]=D>0?1:-1,v.push(rt.x,rt.y,rt.z),_.push(qt/N),_.push(1-lt/T),Y+=1}}for(let lt=0;lt<T;lt++)for(let xt=0;xt<N;xt++){const qt=g+xt+$*lt,Tt=g+xt+$*(lt+1),I=g+(xt+1)+$*(lt+1),mt=g+(xt+1)+$*lt;p.push(qt,Tt,mt),p.push(Tt,I,mt),dt+=6}d.addGroup(x,dt,O),x+=dt,g+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class qa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let h;i?h=i:h=t*r[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(u-1);const v=r[l],g=r[l+1]-v,x=(h-v)/g;return(l+x)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new se:new k);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new k,l=[],u=[],h=[],d=new k,p=new rn;for(let x=0;x<=t;x++){const y=x/t;l[x]=this.getTangentAt(y,new k)}u[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),g<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let x=1;x<=t;x++){if(u[x]=u[x-1].clone(),h[x]=h[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const y=Math.acos(Ce(l[x-1].dot(l[x]),-1,1));u[x].applyMatrix4(p.makeRotationAxis(d,y))}h[x].crossVectors(l[x],u[x])}if(i===!0){let x=Math.acos(Ce(u[0].dot(u[t]),-1,1));x/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(x=-x);for(let y=1;y<=t;y++)u[y].applyMatrix4(p.makeRotationAxis(l[y],x*y)),h[y].crossVectors(l[y],u[y])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class py extends qa{constructor(t=0,i=0,r=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new se){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=p-this.aX,x=m-this.aY;p=g*v-x*_+this.aX,m=g*_+x*v+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zE extends py{constructor(t,i,r,l,u,h){super(t,i,r,r,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Jm(){let o=0,t=0,i=0,r=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,r=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,m){l(h,d,m*(d-u),m*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,m,v,_){let g=(h-u)/m-(d-u)/(m+v)+(d-h)/v,x=(d-h)/v-(p-h)/(v+_)+(p-d)/_;g*=v,x*=v,l(h,d,g,x)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+r*d}}}const Qx=new k,Jx=new k,bp=new Jm,Ep=new Jm,Tp=new Jm;class my extends qa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new k){const r=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Jx.subVectors(l[0],l[1]).add(l[0]),m=Jx);const _=l[d%u],g=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Qx.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Qx),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(m.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(v),x);A<1e-4&&(A=1),y<1e-4&&(y=A),M<1e-4&&(M=A),bp.initNonuniformCatmullRom(m.x,_.x,g.x,v.x,y,A,M),Ep.initNonuniformCatmullRom(m.y,_.y,g.y,v.y,y,A,M),Tp.initNonuniformCatmullRom(m.z,_.z,g.z,v.z,y,A,M)}else this.curveType==="catmullrom"&&(bp.initCatmullRom(m.x,_.x,g.x,v.x,this.tension),Ep.initCatmullRom(m.y,_.y,g.y,v.y,this.tension),Tp.initCatmullRom(m.z,_.z,g.z,v.z,this.tension));return r.set(bp.calc(p),Ep.calc(p),Tp.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jx(o,t,i,r,l){const u=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+u+h)*p+(-3*i+3*r-2*u-h)*d+u*o+i}function IE(o,t){const i=1-o;return i*i*t}function BE(o,t){return 2*(1-o)*o*t}function FE(o,t){return o*o*t}function Ol(o,t,i,r){return IE(o,t)+BE(o,i)+FE(o,r)}function HE(o,t){const i=1-o;return i*i*i*t}function GE(o,t){const i=1-o;return 3*i*i*o*t}function VE(o,t){return 3*(1-o)*o*o*t}function kE(o,t){return o*o*o*t}function Pl(o,t,i,r,l){return HE(o,t)+GE(o,i)+VE(o,r)+kE(o,l)}class XE extends qa{constructor(t=new se,i=new se,r=new se,l=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new se){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qE extends qa{constructor(t=new k,i=new k,r=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new k){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y),Pl(t,l.z,u.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WE extends qa{constructor(t=new se,i=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new se){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new se){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class YE extends qa{constructor(t=new k,i=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new k){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new k){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class KE extends qa{constructor(t=new se,i=new se,r=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new se){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gy extends qa{constructor(t=new k,i=new k,r=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new k){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y),Ol(t,l.z,u.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ZE extends qa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new se){const r=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],m=l[h],v=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return r.set(jx(d,p.x,m.x,v.x,_.x),jx(d,p.y,m.y,v.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new se().fromArray(l))}return this}}var QE=Object.freeze({__proto__:null,ArcCurve:zE,CatmullRomCurve3:my,CubicBezierCurve:XE,CubicBezierCurve3:qE,EllipseCurve:py,LineCurve:WE,LineCurve3:YE,QuadraticBezierCurve:KE,QuadraticBezierCurve3:gy,SplineCurve:ZE});class Eo extends qn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,_=t/d,g=i/p,x=[],y=[],A=[],M=[];for(let b=0;b<v;b++){const L=b*g-h;for(let z=0;z<m;z++){const C=z*_-u;y.push(C,-L,0),A.push(0,0,1),M.push(z/d),M.push(1-b/p)}}for(let b=0;b<p;b++)for(let L=0;L<d;L++){const z=L+m*b,C=L+m*(b+1),U=L+1+m*(b+1),D=L+1+m*b;x.push(z,C,D),x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new Sn(y,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.width,t.height,t.widthSegments,t.heightSegments)}}class jm extends qn{constructor(t=.5,i=1,r=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let _=t;const g=(i-t)/l,x=new k,y=new se;for(let A=0;A<=l;A++){for(let M=0;M<=r;M++){const b=u+M/r*h;x.x=_*Math.cos(b),x.y=_*Math.sin(b),p.push(x.x,x.y,x.z),m.push(0,0,1),y.x=(x.x/i+1)/2,y.y=(x.y/i+1)/2,v.push(y.x,y.y)}_+=g}for(let A=0;A<l;A++){const M=A*(r+1);for(let b=0;b<r;b++){const L=b+M,z=L,C=L+r+1,U=L+r+2,D=L+1;d.push(z,C,D),d.push(C,U,D)}}this.setIndex(d),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(m,3)),this.setAttribute("uv",new Sn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $m extends qn{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const v=[],_=new k,g=new k,x=[],y=[],A=[],M=[];for(let b=0;b<=r;b++){const L=[],z=b/r,C=h+z*d,U=t*Math.cos(C),D=Math.sqrt(t*t-U*U);let N=0;b===0&&h===0?N=.5/i:b===r&&p===Math.PI&&(N=-.5/i);for(let T=0;T<=i;T++){const O=T/i,F=l+O*u;_.x=-D*Math.cos(F),_.y=U,_.z=D*Math.sin(F),y.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),M.push(O+N,1-z),L.push(m++)}v.push(L)}for(let b=0;b<r;b++)for(let L=0;L<i;L++){const z=v[b][L+1],C=v[b][L],U=v[b+1][L],D=v[b+1][L+1];(b!==0||h>0)&&x.push(z,C,D),(b!==r-1||p<Math.PI)&&x.push(C,U,D)}this.setIndex(x),this.setAttribute("position",new Sn(y,3)),this.setAttribute("normal",new Sn(A,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $m(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class t0 extends qn{constructor(t=new gy(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),i=64,r=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new k,p=new k,m=new se;let v=new k;const _=[],g=[],x=[],y=[];A(),this.setIndex(y),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(x,2));function A(){for(let z=0;z<i;z++)M(z);M(u===!1?i:0),L(),b()}function M(z){v=t.getPointAt(z/i,v);const C=h.normals[z],U=h.binormals[z];for(let D=0;D<=l;D++){const N=D/l*Math.PI*2,T=Math.sin(N),O=-Math.cos(N);p.x=O*C.x+T*U.x,p.y=O*C.y+T*U.y,p.z=O*C.z+T*U.z,p.normalize(),g.push(p.x,p.y,p.z),d.x=v.x+r*p.x,d.y=v.y+r*p.y,d.z=v.z+r*p.z,_.push(d.x,d.y,d.z)}}function b(){for(let z=1;z<=i;z++)for(let C=1;C<=l;C++){const U=(l+1)*(z-1)+(C-1),D=(l+1)*z+(C-1),N=(l+1)*z+C,T=(l+1)*(z-1)+C;y.push(U,D,T),y.push(D,N,T)}}function L(){for(let z=0;z<=i;z++)for(let C=0;C<=l;C++)m.x=z/i,m.y=C/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new t0(new QE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function bo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if($x(l))l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if($x(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Jn(o){const t={};for(let i=0;i<o.length;i++){const r=bo(o[i]);for(const l in r)t[l]=r[l]}return t}function $x(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function JE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function vy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const jE={clone:bo,merge:Jn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=JE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Le().setHex(l.value);break;case"v2":this.uniforms[r].value=new se().fromArray(l.value);break;case"v3":this.uniforms[r].value=new k().fromArray(l.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new pe().fromArray(l.value);break;case"m4":this.uniforms[r].value=new rn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class eT extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ap extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cm,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nT extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iT extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(tS(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!tS(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function tS(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class aT{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=m.length;_<g;_+=2){const x=m[_],y=m[_+1];if(x.global&&(x.lastIndex=0),x.test(v))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rT=new aT;class e0{constructor(t){this.manager=t!==void 0?t:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}e0.DEFAULT_MATERIAL_NAME="__DEFAULT";const ho=new WeakMap;class sT extends e0{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=wp.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0);else{let _=ho.get(h);_===void 0&&(_=[],ho.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Vl("img");function p(){v(),i&&i(this);const _=ho.get(this)||[];for(let g=0;g<_.length;g++){const x=_[g];x.onLoad&&x.onLoad(this)}ho.delete(this),u.manager.itemEnd(t)}function m(_){v(),l&&l(_),wp.remove(`image:${t}`);const g=ho.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onError&&y.onError(_)}ho.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function v(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),wp.add(`image:${t}`,d),u.manager.itemStart(t),d.src=t,d}}class oT extends e0{constructor(t){super(t)}load(t,i,r,l){const u=new Xn,h=new sT(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class _y extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Rp=new rn,eS=new k,nS=new k;class lT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qm,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;eS.setFromMatrixPosition(t.matrixWorld),i.position.copy(eS),nS.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(nS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,l){Rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(Rp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Gl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(Rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fc=new k,Hc=new xa,fa=new k;class xy extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fc,Hc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Hc,fa.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Fc,Hc,fa),fa.x===1&&fa.y===1&&fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Hc,fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Er=new k,iS=new se,aS=new se;class Wi extends xy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dm*2*Math.atan(Math.tan(tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-t/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Er.x,Er.y).multiplyScalar(-t/Er.z)}getViewSize(t,i){return this.getViewBounds(t,iS,aS),i.subVectors(aS,iS)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tp*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Xl extends xy{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uT extends lT{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cT extends _y{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new uT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class fT extends _y{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const po=-90,mo=1;class hT extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(po,mo,t,i);l.layers=this.layers,this.add(l);const u=new Wi(po,mo,t,i);u.layers=this.layers,this.add(u);const h=new Wi(po,mo,t,i);h.layers=this.layers,this.add(h);const d=new Wi(po,mo,t,i);d.layers=this.layers,this.add(d);const p=new Wi(po,mo,t,i);p.layers=this.layers,this.add(p);const m=new Wi(po,mo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===ma)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,x),t.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class dT extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const s0=class s0{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};s0.prototype.isMatrix2=!0;let rS=s0;function sS(o,t,i,r){const l=pT(r);switch(i){case ey:return o*t;case iy:return o*t/l.components*l.byteLength;case km:return o*t/l.components*l.byteLength;case hs:return o*t*2/l.components*l.byteLength;case Xm:return o*t*2/l.components*l.byteLength;case ny:return o*t*3/l.components*l.byteLength;case Ki:return o*t*4/l.components*l.byteLength;case qm:return o*t*4/l.components*l.byteLength;case Kc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case tm:case nm:return Math.max(o,16)*Math.max(t,8)/4;case $p:case em:return Math.max(o,8)*Math.max(t,8)/2;case im:case am:case sm:case om:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rm:case rf:case lm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case um:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case fm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case hm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case dm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case pm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case mm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case gm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case _m:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case xm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Sm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ym:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Mm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bm:case Em:case Tm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Am:case wm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sf:case Rm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pT(o){switch(o){case yi:case JS:return{byteLength:1,components:1};case Fl:case jS:case _a:return{byteLength:2,components:1};case Gm:case Vm:return{byteLength:2,components:4};case va:case Hm:case pa:return{byteLength:4,components:1};case $S:case ty:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bm}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bm);function Sy(){let o=null,t=!1,i=null,r=null;function l(u,h){r=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function mT(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,_=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,v);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],A=_[x];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const A=_[x];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
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
#endif`,_T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MT=`#ifdef USE_AOMAP
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
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ET=`#ifdef USE_BATCHING
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
#endif`,TT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CT=`#ifdef USE_IRIDESCENCE
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
#endif`,DT=`#ifdef USE_BUMPMAP
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FT=`#define PI 3.141592653589793
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
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GT=`vec3 transformedNormal = objectNormal;
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
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,$T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iA=`#ifdef USE_GRADIENTMAP
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
}`,aA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lA=`#ifdef USE_ENVMAP
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
#endif`,uA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dA=`PhysicalMaterial material;
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
#endif`,pA=`uniform sampler2D dfgLUT;
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
}`,mA=`
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
#endif`,gA=`#if defined( RE_IndirectDiffuse )
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
#endif`,vA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_A=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AA=`#if defined( USE_POINTS_UV )
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
#endif`,wA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
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
#endif`,LA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FA=`#ifdef USE_NORMALMAP
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
#endif`,HA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e2=`float getShadowMask() {
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
}`,n2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i2=`#ifdef USE_SKINNING
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
#endif`,a2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`#include <common>
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
}`,b2=`#if DEPTH_PACKING == 3200
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
}`,E2=`#define DISTANCE
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
}`,T2=`#define DISTANCE
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
}`,A2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,C2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,N2=`uniform vec3 diffuse;
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
}`,U2=`#define LAMBERT
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
}`,L2=`#define LAMBERT
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
}`,O2=`#define MATCAP
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
}`,P2=`#define MATCAP
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
}`,z2=`#define NORMAL
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
}`,I2=`#define NORMAL
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
}`,B2=`#define PHONG
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
}`,F2=`#define PHONG
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
}`,H2=`#define STANDARD
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
}`,G2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,k2=`#define TOON
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
}`,X2=`uniform float size;
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
}`,q2=`uniform vec3 diffuse;
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
}`,W2=`#include <common>
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
}`,Y2=`uniform vec3 color;
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
}`,K2=`uniform float rotation;
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
}`,Z2=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:gT,alphahash_pars_fragment:vT,alphamap_fragment:_T,alphamap_pars_fragment:xT,alphatest_fragment:ST,alphatest_pars_fragment:yT,aomap_fragment:MT,aomap_pars_fragment:bT,batching_pars_vertex:ET,batching_vertex:TT,begin_vertex:AT,beginnormal_vertex:wT,bsdfs:RT,iridescence_fragment:CT,bumpmap_pars_fragment:DT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:LT,clipping_planes_vertex:OT,color_fragment:PT,color_pars_fragment:zT,color_pars_vertex:IT,color_vertex:BT,common:FT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:GT,displacementmap_pars_vertex:VT,displacementmap_vertex:kT,emissivemap_fragment:XT,emissivemap_pars_fragment:qT,colorspace_fragment:WT,colorspace_pars_fragment:YT,envmap_fragment:KT,envmap_common_pars_fragment:ZT,envmap_pars_fragment:QT,envmap_pars_vertex:JT,envmap_physical_pars_fragment:lA,envmap_vertex:jT,fog_vertex:$T,fog_pars_vertex:tA,fog_fragment:eA,fog_pars_fragment:nA,gradientmap_pars_fragment:iA,lightmap_pars_fragment:aA,lights_lambert_fragment:rA,lights_lambert_pars_fragment:sA,lights_pars_begin:oA,lights_toon_fragment:uA,lights_toon_pars_fragment:cA,lights_phong_fragment:fA,lights_phong_pars_fragment:hA,lights_physical_fragment:dA,lights_physical_pars_fragment:pA,lights_fragment_begin:mA,lights_fragment_maps:gA,lights_fragment_end:vA,lightprobes_pars_fragment:_A,logdepthbuf_fragment:xA,logdepthbuf_pars_fragment:SA,logdepthbuf_pars_vertex:yA,logdepthbuf_vertex:MA,map_fragment:bA,map_pars_fragment:EA,map_particle_fragment:TA,map_particle_pars_fragment:AA,metalnessmap_fragment:wA,metalnessmap_pars_fragment:RA,morphinstance_vertex:CA,morphcolor_vertex:DA,morphnormal_vertex:NA,morphtarget_pars_vertex:UA,morphtarget_vertex:LA,normal_fragment_begin:OA,normal_fragment_maps:PA,normal_pars_fragment:zA,normal_pars_vertex:IA,normal_vertex:BA,normalmap_pars_fragment:FA,clearcoat_normal_fragment_begin:HA,clearcoat_normal_fragment_maps:GA,clearcoat_pars_fragment:VA,iridescence_pars_fragment:kA,opaque_fragment:XA,packing:qA,premultiplied_alpha_fragment:WA,project_vertex:YA,dithering_fragment:KA,dithering_pars_fragment:ZA,roughnessmap_fragment:QA,roughnessmap_pars_fragment:JA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:$A,shadowmap_vertex:t2,shadowmask_pars_fragment:e2,skinbase_vertex:n2,skinning_pars_vertex:i2,skinning_vertex:a2,skinnormal_vertex:r2,specularmap_fragment:s2,specularmap_pars_fragment:o2,tonemapping_fragment:l2,tonemapping_pars_fragment:u2,transmission_fragment:c2,transmission_pars_fragment:f2,uv_pars_fragment:h2,uv_pars_vertex:d2,uv_vertex:p2,worldpos_vertex:m2,background_vert:g2,background_frag:v2,backgroundCube_vert:_2,backgroundCube_frag:x2,cube_vert:S2,cube_frag:y2,depth_vert:M2,depth_frag:b2,distance_vert:E2,distance_frag:T2,equirect_vert:A2,equirect_frag:w2,linedashed_vert:R2,linedashed_frag:C2,meshbasic_vert:D2,meshbasic_frag:N2,meshlambert_vert:U2,meshlambert_frag:L2,meshmatcap_vert:O2,meshmatcap_frag:P2,meshnormal_vert:z2,meshnormal_frag:I2,meshphong_vert:B2,meshphong_frag:F2,meshphysical_vert:H2,meshphysical_frag:G2,meshtoon_vert:V2,meshtoon_frag:k2,points_vert:X2,points_frag:q2,shadow_vert:W2,shadow_frag:Y2,sprite_vert:K2,sprite_frag:Z2},kt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},da={basic:{uniforms:Jn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Jn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Jn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Jn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Jn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Le(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Jn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Jn([kt.points,kt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Jn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Jn([kt.common,kt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Jn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Jn([kt.sprite,kt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Jn([kt.common,kt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Jn([kt.lights,kt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};da.physical={uniforms:Jn([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Gc={r:0,b:0,g:0},Q2=new rn,yy=new pe;yy.set(-1,0,0,0,1,0,0,0,1);function J2(o,t,i,r,l,u){const h=new Le(0);let d=l===!0?0:1,p,m,v=null,_=0,g=null;function x(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){const C=L.backgroundBlurriness>0;z=t.get(z,C)}return z}function y(L){let z=!1;const C=x(L);C===null?M(h,d):C&&C.isColor&&(M(C,1),z=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(L,z){const C=x(z);C&&(C.isCubeTexture||C.mapping===pf)?(m===void 0&&(m=new sn(new Kl(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:bo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(yy),m.material.toneMapped=ze.getTransfer(C.colorSpace)!==Qe,(v!==C||_!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new sn(new Eo(2,2),new on({name:"BackgroundMaterial",uniforms:bo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=ze.getTransfer(C.colorSpace)!==Qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function M(L,z){L.getRGB(Gc,vy(o)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,z,u)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,z=1){h.set(L),d=z,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,M(h,d)},render:y,addToRenderList:A,dispose:b}}function j2(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,h=!1;function d(G,W,it,H,$){let K=!1;const Y=_(G,H,it,W);u!==Y&&(u=Y,m(u.object)),K=x(G,H,it,$),K&&y(G,H,it,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,C(G,W,it,H),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return o.createVertexArray()}function m(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function _(G,W,it,H){const $=H.wireframe===!0;let K=r[W.id];K===void 0&&(K={},r[W.id]=K);const Y=G.isInstancedMesh===!0?G.id:0;let dt=K[Y];dt===void 0&&(dt={},K[Y]=dt);let rt=dt[it.id];rt===void 0&&(rt={},dt[it.id]=rt);let lt=rt[$];return lt===void 0&&(lt=g(p()),rt[$]=lt),lt}function g(G){const W=[],it=[],H=[];for(let $=0;$<i;$++)W[$]=0,it[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:it,attributeDivisors:H,object:G,attributes:{},index:null}}function x(G,W,it,H){const $=u.attributes,K=W.attributes;let Y=0;const dt=it.getAttributes();for(const rt in dt)if(dt[rt].location>=0){const xt=$[rt];let qt=K[rt];if(qt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(qt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(qt=G.instanceColor)),xt===void 0||xt.attribute!==qt||qt&&xt.data!==qt.data)return!0;Y++}return u.attributesNum!==Y||u.index!==H}function y(G,W,it,H){const $={},K=W.attributes;let Y=0;const dt=it.getAttributes();for(const rt in dt)if(dt[rt].location>=0){let xt=K[rt];xt===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(xt=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(xt=G.instanceColor));const qt={};qt.attribute=xt,xt&&xt.data&&(qt.data=xt.data),$[rt]=qt,Y++}u.attributes=$,u.attributesNum=Y,u.index=H}function A(){const G=u.newAttributes;for(let W=0,it=G.length;W<it;W++)G[W]=0}function M(G){b(G,0)}function b(G,W){const it=u.newAttributes,H=u.enabledAttributes,$=u.attributeDivisors;it[G]=1,H[G]===0&&(o.enableVertexAttribArray(G),H[G]=1),$[G]!==W&&(o.vertexAttribDivisor(G,W),$[G]=W)}function L(){const G=u.newAttributes,W=u.enabledAttributes;for(let it=0,H=W.length;it<H;it++)W[it]!==G[it]&&(o.disableVertexAttribArray(it),W[it]=0)}function z(G,W,it,H,$,K,Y){Y===!0?o.vertexAttribIPointer(G,W,it,$,K):o.vertexAttribPointer(G,W,it,H,$,K)}function C(G,W,it,H){A();const $=H.attributes,K=it.getAttributes(),Y=W.defaultAttributeValues;for(const dt in K){const rt=K[dt];if(rt.location>=0){let lt=$[dt];if(lt===void 0&&(dt==="instanceMatrix"&&G.instanceMatrix&&(lt=G.instanceMatrix),dt==="instanceColor"&&G.instanceColor&&(lt=G.instanceColor)),lt!==void 0){const xt=lt.normalized,qt=lt.itemSize,Tt=t.get(lt);if(Tt===void 0)continue;const I=Tt.buffer,mt=Tt.type,Et=Tt.bytesPerElement,q=mt===o.INT||mt===o.UNSIGNED_INT||lt.gpuType===Hm;if(lt.isInterleavedBufferAttribute){const nt=lt.data,At=nt.stride,Ut=lt.offset;if(nt.isInstancedInterleavedBuffer){for(let st=0;st<rt.locationSize;st++)b(rt.location+st,nt.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<rt.locationSize;st++)M(rt.location+st);o.bindBuffer(o.ARRAY_BUFFER,I);for(let st=0;st<rt.locationSize;st++)z(rt.location+st,qt/rt.locationSize,mt,xt,At*Et,(Ut+qt/rt.locationSize*st)*Et,q)}else{if(lt.isInstancedBufferAttribute){for(let nt=0;nt<rt.locationSize;nt++)b(rt.location+nt,lt.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let nt=0;nt<rt.locationSize;nt++)M(rt.location+nt);o.bindBuffer(o.ARRAY_BUFFER,I);for(let nt=0;nt<rt.locationSize;nt++)z(rt.location+nt,qt/rt.locationSize,mt,xt,qt*Et,qt/rt.locationSize*nt*Et,q)}}else if(Y!==void 0){const xt=Y[dt];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(rt.location,xt);break;case 3:o.vertexAttrib3fv(rt.location,xt);break;case 4:o.vertexAttrib4fv(rt.location,xt);break;default:o.vertexAttrib1fv(rt.location,xt)}}}}L()}function U(){O();for(const G in r){const W=r[G];for(const it in W){const H=W[it];for(const $ in H){const K=H[$];for(const Y in K)v(K[Y].object),delete K[Y];delete H[$]}}delete r[G]}}function D(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const it in W){const H=W[it];for(const $ in H){const K=H[$];for(const Y in K)v(K[Y].object),delete K[Y];delete H[$]}}delete r[G.id]}function N(G){for(const W in r){const it=r[W];for(const H in it){const $=it[H];if($[G.id]===void 0)continue;const K=$[G.id];for(const Y in K)v(K[Y].object),delete K[Y];delete $[G.id]}}}function T(G){for(const W in r){const it=r[W],H=G.isInstancedMesh===!0?G.id:0,$=it[H];if($!==void 0){for(const K in $){const Y=$[K];for(const dt in Y)v(Y[dt].object),delete Y[dt];delete $[K]}delete it[H],Object.keys(it).length===0&&delete r[W]}}}function O(){F(),h=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:F,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:M,disableUnusedAttributes:L}}function $2(o,t,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,v){v!==0&&(o.drawArraysInstanced(r,p,m,v),i.update(m,r,v))}function d(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let x=0;x<v;x++)g+=m[x];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function t3(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Ki&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const T=N===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==yi&&N!==pa&&!T&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(ce("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:C,maxSamples:U,samples:D}}function e3(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Rr,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||l;return l=g,r=_.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,b=o.get(_);if(!l||y===null||y.length===0||u&&!M)u?v(null):m();else{const L=u?0:r,z=L*4;let C=b.clippingState||null;p.value=C,C=v(y,g,z,x);for(let U=0;U!==z;++U)C[U]=i[U];b.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,g,x,y){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=p.value,y!==!0||M===null){const b=x+A*4,L=g.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<b)&&(M=new Float32Array(b));for(let z=0,C=x;z!==A;++z,C+=4)h.copy(_[z]).applyMatrix4(L,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const xo=4,n3=6,i3=20,a3=256,Rl=new Xl,oS=new Le;let Cp=null,Dp=0,Np=0,Up=!1;const r3=new k,os=new k;class lS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=r3}=u;Cp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cp,Dp,Np),this._renderer.xr.enabled=Up,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===fs||t.mapping===Mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Np=this._renderer.getActiveMipmapLevel(),Up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:_a,format:Ki,colorSpace:of,depthBuffer:!1},l=uS(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uS(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s3(u)),this._blurMaterial=l3(u,t,i),this._ggxMaterial=o3(u,t,i)}return l}_compileMaterial(t){const i=new sn(new qn,t);this._renderer.compile(i,Rl)}_sceneToCubeUV(t,i,r,l,u){const p=new Wi(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(oS),_.toneMapping=ga,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sn(new Kl,new cy({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let b=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,b=!0):(M.color.copy(oS),b=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[z],u.y,u.z)):C===1?(p.up.set(0,0,m[z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[z],u.z)):(p.up.set(0,m[z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[z]));const U=this._cubeSize;go(l,C*U,z>2?U:0,U,U),_.setRenderTarget(l),b&&_.render(A,p),_.render(t,p)}_.toneMapping=x,_.autoClear=g,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===fs||t.mapping===Mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cS());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;go(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Rl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=m*1.25,x=_*g,{_lodMax:y}=this,A=this._sizeLods[r],M=3*A*(r>y-xo?r-y+xo:0),b=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=y-i,go(u,M,b,3*A,2*A),l.setRenderTarget(u),l.render(d,Rl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=y-r,go(t,M,b,3*A,2*A),l.setRenderTarget(t),l.render(d,Rl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,h),this._blurPass(u,t,r,r,h)}_blurPass(t,i,r,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[l],_=3*v*(l>this._lodMax-xo?l-this._lodMax+xo:0),g=4*(this._cubeSize-v);go(i,_,g,3*v,2*v),h.setRenderTarget(i),h.render(p,Rl)}}function s3(o){const t=[],i=[];let r=o;const l=o-xo+1+n3;for(let u=0;u<l;u++){const h=Math.pow(2,r);t.push(h);const d=1/(h-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,g=6,x=3,y=new Float32Array(x*g*_),A=new Float32Array(x*g*_);for(let b=0;b<_;b++){const L=b%3*2/3-1,z=b>2?0:-1,C=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];y.set(C,x*g*b);for(let U=0;U<g;U++){const D=v[U*2]*2-1,N=v[U*2+1]*2-1;b===0?os.set(1,N,D):b===1?os.set(-D,1,-N):b===2?os.set(-D,N,1):b===3?os.set(-1,N,-D):b===4?os.set(-D,-1,N):os.set(D,N,-1),os.toArray(A,(b*g+U)*x)}}const M=new qn;M.setAttribute("position",new oi(y,x)),M.setAttribute("outputDirection",new oi(A,x)),i.push(new sn(M,null)),r>xo&&r--}return{lodMeshes:i,sizeLods:t}}function uS(o,t,i){const r=new Pi(o,t,i);return r.texture.mapping=pf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function go(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function o3(o,t,i){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function l3(o,t,i){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:i3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function cS(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fS(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function mf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class My extends Pi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new hy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Kl(5,5,5),u=new on({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Zi});u.uniforms.tEquirect.value=i;const h=new sn(l,u),d=i.minFilter;return i.minFilter===Nr&&(i.minFilter=kn),new hT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}function u3(o){let t=new WeakMap,i=new WeakMap,r=null;function l(g,x=!1){return g==null?null:x?h(g):u(g)}function u(g){if(g&&g.isTexture){const x=g.mapping;if(x===Qd||x===Jd)if(t.has(g)){const y=t.get(g).texture;return d(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const A=new My(y.height);return A.fromEquirectangularTexture(o,g),t.set(g,A),g.addEventListener("dispose",m),d(A.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const x=g.mapping,y=x===Qd||x===Jd,A=x===fs||x===Mo;if(y||A){let M=i.get(g);const b=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return r===null&&(r=new lS(o)),M=y?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const L=g.image;return y&&L&&L.height>0||A&&L&&p(L)?(r===null&&(r=new lS(o)),M=y?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function d(g,x){return x===Qd?g.mapping=fs:x===Jd&&(g.mapping=Mo),g}function p(g){let x=0;const y=6;for(let A=0;A<y;A++)g[A]!==void 0&&x++;return x===y}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const y=i.get(x);y!==void 0&&(i.delete(x),y.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function c3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&So("WebGLRenderer: "+r+" extension not supported."),l}}}function f3(o,t,i,r){const l={},u=new WeakMap;function h(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",h),delete l[g.id];const x=u.get(g);x&&(t.remove(x),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(_,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(_){const g=_.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function m(_){const g=[],x=_.index,y=_.attributes.position;let A=0;if(y===void 0)return;if(x!==null){const L=x.array;A=x.version;for(let z=0,C=L.length;z<C;z+=3){const U=L[z+0],D=L[z+1],N=L[z+2];g.push(U,D,D,N,N,U)}}else{const L=y.array;A=y.version;for(let z=0,C=L.length/3-1;z<C;z+=3){const U=z+0,D=z+1,N=z+2;g.push(U,D,D,N,N,U)}}const M=new(y.count>=65535?uy:ly)(g,1);M.version=A;const b=u.get(_);b&&t.remove(b),u.set(_,M)}function v(_){const g=u.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function h3(o,t,i){let r;function l(_){r=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,g){o.drawElements(r,g,u,_*h),i.update(g,r,1)}function m(_,g,x){x!==0&&(o.drawElementsInstanced(r,g,u,_*h,x),i.update(g,r,x))}function v(_,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,_,0,x);let A=0;for(let M=0;M<x;M++)A+=g[M];i.update(A,r,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function d3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:He("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function p3(o,t,i){const r=new WeakMap,l=new tn;function u(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let F=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",F)};var x=F;g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let C=0;y===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let U=d.attributes.position.count*C,D=1;U>t.maxTextureSize&&(D=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*D*4*_),T=new ry(N,U,D,_);T.type=pa,T.needsUpdate=!0;const O=C*4;for(let G=0;G<_;G++){const W=b[G],it=L[G],H=z[G],$=U*D*4*G;for(let K=0;K<W.count;K++){const Y=K*O;y===!0&&(l.fromBufferAttribute(W,K),N[$+Y+0]=l.x,N[$+Y+1]=l.y,N[$+Y+2]=l.z,N[$+Y+3]=0),A===!0&&(l.fromBufferAttribute(it,K),N[$+Y+4]=l.x,N[$+Y+5]=l.y,N[$+Y+6]=l.z,N[$+Y+7]=0),M===!0&&(l.fromBufferAttribute(H,K),N[$+Y+8]=l.x,N[$+Y+9]=l.y,N[$+Y+10]=l.z,N[$+Y+11]=H.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new se(U,D)},r.set(d,g),d.addEventListener("dispose",F)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let M=0;M<m.length;M++)y+=m[M];const A=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function m3(o,t,i,r,l){let u=new WeakMap;function h(m){const v=l.render.frame,_=m.geometry,g=t.get(m,_);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const x=m.skeleton;u.get(x)!==v&&(x.update(),u.set(x,v))}return g}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const g3={[XS]:"LINEAR_TONE_MAPPING",[qS]:"REINHARD_TONE_MAPPING",[WS]:"CINEON_TONE_MAPPING",[Fm]:"ACES_FILMIC_TONE_MAPPING",[KS]:"AGX_TONE_MAPPING",[ZS]:"NEUTRAL_TONE_MAPPING",[YS]:"CUSTOM_TONE_MAPPING"};function v3(o,t,i,r,l,u){const h=new Pi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new qn;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const v=new eT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new sn(m,v),g=new Xl(-1,1,1,-1,0,1);let x=null,y=null,A=!1,M,b=null,L=[],z=!1;this.setSize=function(C,U){h.setSize(C,U),d!==null&&d.setSize(C,U),p!==null&&p.setSize(C,U);for(let D=0;D<L.length;D++){const N=L[D];N.setSize&&N.setSize(C,U)}},this.setEffects=function(C){L=C,z=L.length>0&&L[0].isRenderPass===!0;const U=h.width,D=h.height;L.length>0&&d===null&&(d=new Pi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}),p=new Pi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<L.length;N++){const T=L[N];T.setSize&&T.setSize(U,D)}},this.begin=function(C,U){if(A||C.toneMapping===ga&&L.length===0)return!1;if(b=U,U!==null){const D=U.width,N=U.height;(h.width!==D||h.height!==N)&&this.setSize(D,N)}return z===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=ga,!0},this.hasRenderPass=function(){return z},this.end=function(C,U){C.toneMapping=M,A=!0;let D=h,N=d;for(let T=0;T<L.length;T++){const O=L[T];O.enabled!==!1&&(O.render(C,N,D,U),O.needsSwap!==!1&&(D=N,N=N===d?p:d))}if(x!==C.outputColorSpace||y!==C.toneMapping){x=C.outputColorSpace,y=C.toneMapping,v.defines={},ze.getTransfer(x)===Qe&&(v.defines.SRGB_TRANSFER="");const T=g3[y];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(b),C.render(_,g),b=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const by=new Xn,Um=new kl(1,1),Ey=new ry,Ty=new pE,Ay=new hy,hS=[],dS=[],pS=new Float32Array(16),mS=new Float32Array(9),gS=new Float32Array(4);function To(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=hS[l];if(u===void 0&&(u=new Float32Array(l),hS[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function gf(o,t){let i=dS[t];i===void 0&&(i=new Int32Array(t),dS[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function _3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function x3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function M3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;gS.set(r),o.uniformMatrix2fv(this.addr,!1,gS),Tn(i,r)}}function b3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;mS.set(r),o.uniformMatrix3fv(this.addr,!1,mS),Tn(i,r)}}function E3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;pS.set(r),o.uniformMatrix4fv(this.addr,!1,pS),Tn(i,r)}}function T3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function A3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function w3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function R3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function C3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function D3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function N3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function U3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function L3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Um.compareFunction=i.isReversedDepthBuffer()?Ym:Wm,u=Um):u=by,i.setTexture2D(t||u,l)}function O3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Ty,l)}function P3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Ay,l)}function z3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Ey,l)}function I3(o){switch(o){case 5126:return _3;case 35664:return x3;case 35665:return S3;case 35666:return y3;case 35674:return M3;case 35675:return b3;case 35676:return E3;case 5124:case 35670:return T3;case 35667:case 35671:return A3;case 35668:case 35672:return w3;case 35669:case 35673:return R3;case 5125:return C3;case 36294:return D3;case 36295:return N3;case 36296:return U3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return O3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return z3}}function B3(o,t){o.uniform1fv(this.addr,t)}function F3(o,t){const i=To(t,this.size,2);o.uniform2fv(this.addr,i)}function H3(o,t){const i=To(t,this.size,3);o.uniform3fv(this.addr,i)}function G3(o,t){const i=To(t,this.size,4);o.uniform4fv(this.addr,i)}function V3(o,t){const i=To(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function k3(o,t){const i=To(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function X3(o,t){const i=To(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function q3(o,t){o.uniform1iv(this.addr,t)}function W3(o,t){o.uniform2iv(this.addr,t)}function Y3(o,t){o.uniform3iv(this.addr,t)}function K3(o,t){o.uniform4iv(this.addr,t)}function Z3(o,t){o.uniform1uiv(this.addr,t)}function Q3(o,t){o.uniform2uiv(this.addr,t)}function J3(o,t){o.uniform3uiv(this.addr,t)}function j3(o,t){o.uniform4uiv(this.addr,t)}function $3(o,t,i){const r=this.cache,l=t.length,u=gf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Um:h=by;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function tw(o,t,i){const r=this.cache,l=t.length,u=gf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ty,u[h])}function ew(o,t,i){const r=this.cache,l=t.length,u=gf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Ay,u[h])}function nw(o,t,i){const r=this.cache,l=t.length,u=gf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ey,u[h])}function iw(o){switch(o){case 5126:return B3;case 35664:return F3;case 35665:return H3;case 35666:return G3;case 35674:return V3;case 35675:return k3;case 35676:return X3;case 5124:case 35670:return q3;case 35667:case 35671:return W3;case 35668:case 35672:return Y3;case 35669:case 35673:return K3;case 5125:return Z3;case 36294:return Q3;case 36295:return J3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return $3;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return nw}}class aw{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=I3(i.type)}}class rw{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iw(i.type)}}class sw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Lp=/(\w+)(\])?(\[|\.)?/g;function vS(o,t){o.seq.push(t),o.map[t.id]=t}function ow(o,t,i){const r=o.name,l=r.length;for(Lp.lastIndex=0;;){const u=Lp.exec(r),h=Lp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){vS(i,m===void 0?new aw(d,o,t):new rw(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new sw(d),vS(i,_)),i=_}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);ow(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function _S(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const lw=37297;let uw=0;function cw(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const xS=new pe;function fw(o){ze._getMatrix(xS,ze.workingColorSpace,o);const t=`mat3( ${xS.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case lf:return[t,"LinearTransferOETF"];case Qe:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function SS(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+cw(o.getShaderSource(t),d)}else return u}function hw(o,t){const i=fw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const dw={[XS]:"Linear",[qS]:"Reinhard",[WS]:"Cineon",[Fm]:"ACESFilmic",[KS]:"AgX",[ZS]:"Neutral",[YS]:"Custom"};function pw(o,t){const i=dw[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new k;function mw(){ze.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),t=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ul).join(`
`)}function vw(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function _w(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ul(o){return o!==""}function yS(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function MS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lm(o){return o.replace(xw,yw)}const Sw=new Map;function yw(o,t){let i=Me[t];if(i===void 0){const r=Sw.get(t);if(r!==void 0)i=Me[r],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lm(i)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bS(o){return o.replace(Mw,bw)}function bw(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ES(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const Ew={[Yc]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function Tw(o){return Ew[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Aw={[fs]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[pf]:"ENVMAP_TYPE_CUBE_UV"};function ww(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Aw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rw={[Mo]:"ENVMAP_MODE_REFRACTION"};function Cw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Rw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dw={[kS]:"ENVMAP_BLENDING_MULTIPLY",[qb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function Nw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Dw[o.combine]||"ENVMAP_BLENDING_NONE"}function Uw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Lw(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Tw(i),m=ww(i),v=Cw(i),_=Nw(i),g=Uw(i),x=gw(i),y=vw(u),A=l.createProgram();let M,b,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Ul).join(`
`),M.length>0&&(M+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(Ul).join(`
`),b.length>0&&(b+=`
`)):(M=[ES(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ul).join(`
`),b=[ES(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ga?"#define TONE_MAPPING":"",i.toneMapping!==ga?Me.tonemapping_pars_fragment:"",i.toneMapping!==ga?pw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,hw("linearToOutputTexel",i.outputColorSpace),mw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ul).join(`
`)),h=Lm(h),h=yS(h,i),h=MS(h,i),d=Lm(d),d=yS(d,i),d=MS(d,i),h=bS(h),d=bS(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",i.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const z=L+M+h,C=L+b+d,U=_S(l,l.VERTEX_SHADER,z),D=_S(l,l.FRAGMENT_SHADER,C);l.attachShader(A,U),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function N(G){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(A)||"",it=l.getShaderInfoLog(U)||"",H=l.getShaderInfoLog(D)||"",$=W.trim(),K=it.trim(),Y=H.trim();let dt=!0,rt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(dt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,U,D);else{const lt=SS(l,U,"vertex"),xt=SS(l,D,"fragment");He("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+lt+`
`+xt)}else $!==""?ce("WebGLProgram: Program Info Log:",$):(K===""||Y==="")&&(rt=!1);rt&&(G.diagnostics={runnable:dt,programLog:$,vertexShader:{log:K,prefix:M},fragmentShader:{log:Y,prefix:b}})}l.deleteShader(U),l.deleteShader(D),T=new jc(l,A),O=_w(l,A)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let O;this.getAttributes=function(){return O===void 0&&N(this),O};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(A,lw)),F},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=D,this}let Ow=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new zw(t),i.set(t,r)),r}}class zw{constructor(t){this.id=Ow++,this.code=t,this.usedTimes=0}}function Iw(o){return o===hs||o===rf||o===sf}function Bw(o,t,i,r,l,u){const h=new sy,d=new Pw,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,O,F,G,W,it){const H=G.fog,$=W.geometry,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,dt=t.get(T.envMap||K,Y),rt=dt&&dt.mapping===pf?dt.image.height:null,lt=x[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qt=xt!==void 0?xt.length:0;let Tt=0;$.morphAttributes.position!==void 0&&(Tt=1),$.morphAttributes.normal!==void 0&&(Tt=2),$.morphAttributes.color!==void 0&&(Tt=3);let I,mt,Et,q;if(lt){const Oe=da[lt];I=Oe.vertexShader,mt=Oe.fragmentShader}else{I=T.vertexShader,mt=T.fragmentShader;const Oe=d.getVertexShaderStage(T),me=d.getFragmentShaderStage(T);d.update(T,Oe,me),Et=Oe.id,q=me.id}const nt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Ut=W.isInstancedMesh===!0,st=W.isBatchedMesh===!0,ut=!!T.map,Ct=!!T.matcap,Rt=!!dt,re=!!T.aoMap,le=!!T.lightMap,Wt=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,ve=!!T.displacementMap,qe=!!T.emissiveMap,Se=!!T.metalnessMap,Be=!!T.roughnessMap,Z=T.anisotropy>0,We=T.clearcoat>0,ye=T.dispersion>0,P=T.retroreflectivity>0,E=T.iridescence>0,Q=T.sheen>0,at=T.transmission>0,vt=Z&&!!T.anisotropyMap,Dt=We&&!!T.clearcoatMap,Nt=We&&!!T.clearcoatNormalMap,_t=We&&!!T.clearcoatRoughnessMap,St=E&&!!T.iridescenceMap,Lt=E&&!!T.iridescenceThicknessMap,ie=Q&&!!T.sheenColorMap,Ht=Q&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Kt=!!T.specularColorMap,oe=!!T.specularIntensityMap,de=at&&!!T.transmissionMap,J=at&&!!T.thicknessMap,Ot=!!T.gradientMap,bt=!!T.alphaMap,Pt=T.alphaTest>0,Yt=!!T.alphaHash,wt=!!T.extensions;let ne=ga;T.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Xt={shaderID:lt,shaderType:T.type,shaderName:T.name,vertexShader:I,fragmentShader:mt,defines:T.defines,customVertexShaderID:Et,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:st,batchingColor:st&&W._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&W.instanceColor!==null,instancingMorph:Ut&&W.morphTexture!==null,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:Ct,envMap:Rt,envMapMode:Rt&&dt.mapping,envMapCubeUVHeight:rt,aoMap:re,lightMap:le,bumpMap:Wt,normalMap:jt,displacementMap:ve,emissiveMap:qe,normalMapObjectSpace:jt&&T.normalMapType===Zb,normalMapTangentSpace:jt&&T.normalMapType===Cm,packedNormalMap:jt&&T.normalMapType===Cm&&Iw(T.normalMap.format),metalnessMap:Se,roughnessMap:Be,anisotropy:Z,anisotropyMap:vt,clearcoat:We,clearcoatMap:Dt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:_t,dispersion:ye,retroreflection:P,iridescence:E,iridescenceMap:St,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:ie,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Kt,specularIntensityMap:oe,transmission:at,transmissionMap:de,thicknessMap:J,gradientMap:Ot,opaque:T.transparent===!1&&T.blending===Ll&&T.alphaToCoverage===!1,alphaMap:bt,alphaTest:Pt,alphaHash:Yt,combine:T.combine,mapUv:ut&&y(T.map.channel),aoMapUv:re&&y(T.aoMap.channel),lightMapUv:le&&y(T.lightMap.channel),bumpMapUv:Wt&&y(T.bumpMap.channel),normalMapUv:jt&&y(T.normalMap.channel),displacementMapUv:ve&&y(T.displacementMap.channel),emissiveMapUv:qe&&y(T.emissiveMap.channel),metalnessMapUv:Se&&y(T.metalnessMap.channel),roughnessMapUv:Be&&y(T.roughnessMap.channel),anisotropyMapUv:vt&&y(T.anisotropyMap.channel),clearcoatMapUv:Dt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(T.sheenRoughnessMap.channel),specularMapUv:Bt&&y(T.specularMap.channel),specularColorMapUv:Kt&&y(T.specularColorMap.channel),specularIntensityMapUv:oe&&y(T.specularIntensityMap.channel),transmissionMapUv:de&&y(T.transmissionMap.channel),thicknessMapUv:J&&y(T.thicknessMap.channel),alphaMapUv:bt&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(jt||Z),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(ut||bt),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:At,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Tt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&ze.getTransfer(T.map.colorSpace)===Qe,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&ze.getTransfer(T.emissiveMap.colorSpace)===Qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Oi,flipSided:T.side===li,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&T.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xt.vertexUv1s=p.has(1),Xt.vertexUv2s=p.has(2),Xt.vertexUv3s=p.has(3),p.clear(),Xt}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)O.push(F),O.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(b(O,T),L(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function b(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function L(T,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.retroreflection&&h.enable(24),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),T.push(h.mask)}function z(T){const O=x[T.type];let F;if(O){const G=da[O];F=jE.clone(G.uniforms)}else F=T.uniforms;return F}function C(T,O){let F=v.get(O);return F!==void 0?++F.usedTimes:(F=new Lw(o,O,T,l),m.push(F),v.set(O,F)),F}function U(T){if(--T.usedTimes===0){const O=m.indexOf(T);m[O]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function D(T){d.remove(T)}function N(){d.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:z,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:m,dispose:N}}function Fw(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Hw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function TS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function AS(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,y,A,M,b){let L=o[t];return L===void 0?(L={id:g.id,object:g,geometry:x,material:y,materialVariant:h(g),groupOrder:A,renderOrder:g.renderOrder,z:M,group:b},o[t]=L):(L.id=g.id,L.object=g,L.geometry=x,L.material=y,L.materialVariant=h(g),L.groupOrder=A,L.renderOrder=g.renderOrder,L.z=M,L.group=b),t++,L}function p(g,x,y,A,M,b,L){L.reversedDepth===!0&&(M=-M);const z=d(g,x,y,A,M,b);y.transmission>0?r.push(z):y.transparent===!0?l.push(z):i.push(z)}function m(g,x,y,A,M,b){const L=d(g,x,y,A,M,b);y.transmission>0?r.unshift(L):y.transparent===!0?l.unshift(L):i.unshift(L)}function v(g,x){i.length>1&&i.sort(g||Hw),r.length>1&&r.sort(x||TS),l.length>1&&l.sort(x||TS)}function _(){for(let g=t,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:v}}function Gw(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new AS,o.set(r,[h])):l>=u.length?(h=new AS,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Vw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new k,color:new Le};break;case"SpotLight":i={position:new k,direction:new k,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function kw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Xw=0;function qw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ww(o){const t=new Vw,i=kw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new k);const l=new k,u=new rn,h=new rn;function d(m){let v=0,_=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,y=0,A=0,M=0,b=0,L=0,z=0,C=0,U=0,D=0,N=0,T=0,O=0,F=0;m.sort(qw);for(let W=0,it=m.length;W<it;W++){const H=m[W],$=H.color,K=H.intensity,Y=H.distance;let dt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===hs?dt=H.shadow.map.texture:dt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=$.r*K,_+=$.g*K,g+=$.b*K;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)r.probe[rt].addScaledVector(H.sh.coefficients[rt],K);F++}else if(H.isSunLight){const rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const lt=H.shadow,xt=i.get(H);xt.shadowIntensity=lt.intensity,xt.shadowBias=lt.bias,xt.shadowNormalBias=lt.normalBias,xt.shadowRadius=lt.radius,xt.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),r.sunShadow[y]=xt,r.sunShadowMap[y]=dt;const qt=lt.getViewportCount();for(let Tt=0;Tt<qt;Tt++)r.sunShadowMatrix[A+Tt]=lt.getMatrix(Tt),r.sunShadowCascade[A+Tt]=lt._cascadeData[Tt];A+=qt,y++}r.sun[x]=rt,x++}else if(H.isDirectionalLight){const rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const lt=H.shadow,xt=i.get(H);xt.shadowIntensity=lt.intensity,xt.shadowBias=lt.bias,xt.shadowNormalBias=lt.normalBias,xt.shadowRadius=lt.radius,xt.shadowMapSize=lt.mapSize,r.directionalShadow[M]=xt,r.directionalShadowMap[M]=dt,r.directionalShadowMatrix[M]=H.shadow.matrix,U++}r.directional[M]=rt,M++}else if(H.isSpotLight){const rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy($).multiplyScalar(K),rt.distance=Y,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,r.spot[L]=rt;const lt=H.shadow;if(H.map&&(r.spotLightMap[T]=H.map,T++,lt.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[L]=lt.matrix,H.castShadow){const xt=i.get(H);xt.shadowIntensity=lt.intensity,xt.shadowBias=lt.bias,xt.shadowNormalBias=lt.normalBias,xt.shadowRadius=lt.radius,xt.shadowMapSize=lt.mapSize,r.spotShadow[L]=xt,r.spotShadowMap[L]=dt,N++}L++}else if(H.isRectAreaLight){const rt=t.get(H);rt.color.copy($).multiplyScalar(K),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),r.rectArea[z]=rt,z++}else if(H.isPointLight){const rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){const lt=H.shadow,xt=i.get(H);xt.shadowIntensity=lt.intensity,xt.shadowBias=lt.bias,xt.shadowNormalBias=lt.normalBias,xt.shadowRadius=lt.radius,xt.shadowMapSize=lt.mapSize,xt.shadowCameraNear=lt.camera.near,xt.shadowCameraFar=lt.camera.far,r.pointShadow[b]=xt,r.pointShadowMap[b]=dt,r.pointShadowMatrix[b]=H.shadow.matrix,D++}r.point[b]=rt,b++}else if(H.isHemisphereLight){const rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar(K),rt.groundColor.copy(H.groundColor).multiplyScalar(K),r.hemi[C]=rt,C++}}z>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const G=r.hash;(G.sunLength!==x||G.directionalLength!==M||G.pointLength!==b||G.spotLength!==L||G.rectAreaLength!==z||G.hemiLength!==C||G.numSunShadows!==y||G.numDirectionalShadows!==U||G.numPointShadows!==D||G.numSpotShadows!==N||G.numSpotMaps!==T||G.numLightProbes!==F)&&(r.sun.length=x,r.directional.length=M,r.spot.length=L,r.rectArea.length=z,r.point.length=b,r.hemi.length=C,r.sunShadow.length=y,r.sunShadowMap.length=y,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.spotLightMatrix.length=N+T-O,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,G.sunLength=x,G.directionalLength=M,G.pointLength=b,G.spotLength=L,G.rectAreaLength=z,G.hemiLength=C,G.numSunShadows=y,G.numDirectionalShadows=U,G.numPointShadows=D,G.numSpotShadows=N,G.numSpotMaps=T,G.numLightProbes=F,r.version=Xw++)}function p(m,v){let _=0,g=0,x=0,y=0,A=0,M=0;const b=v.matrixWorldInverse;for(let L=0,z=m.length;L<z;L++){const C=m[L];if(C.isSunLight){const U=r.sun[_];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(b),_++}else if(C.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),g++}else if(C.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),y++}else if(C.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),h.identity(),u.copy(C.matrixWorld),u.premultiply(b),h.extractRotation(u),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(C.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(b),x++}else if(C.isHemisphereLight){const U=r.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(b),M++}}}return{setup:d,setupView:p,state:r}}function wS(o){const t=new Ww(o),i=[],r=[],l=[];function u(g){_.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function d(g){r.push(g)}function p(g){l.push(g)}function m(){t.setup(i)}function v(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:v,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function Yw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new wS(o),t.set(l,[d])):u>=h.length?(d=new wS(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
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
}`,Qw=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Jw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],RS=new rn,Cl=new k,Op=new k;function jw(o,t,i){let r=new Qm;const l=new se,u=new se,h=new tn,d=new nT,p=new iT,m={},v=i.maxTextureSize,_={[cs]:li,[li]:cs,[Oi]:Oi},g=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Kw,fragmentShader:Zw}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new qn;y.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new sn(y,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let b=this.type;this.render=function(D,N,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===Rb&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yc);const O=o.getRenderTarget(),F=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Zi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const it=b!==this.type;it&&N.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach($=>$.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,$=D.length;H<$;H++){const K=D[H],Y=K.shadow;if(Y===void 0){ce("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const dt=Y.getFrameExtents();l.multiply(dt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/dt.x),l.x=u.x*dt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/dt.y),l.y=u.y*dt.y,Y.mapSize.y=u.y));const rt=o.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=rt,Y.map===null||it===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Nl){if(K.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Pi(l.x,l.y,{format:hs,type:_a,minFilter:kn,magFilter:kn,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new kl(l.x,l.y,pa),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=ka,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In}else K.isPointLight?(Y.map=new My(l.x),Y.map.depthTexture=new PE(l.x,va)):(Y.map=new Pi(l.x,l.y),Y.map.depthTexture=new kl(l.x,l.y,va)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=ka,this.type===Yc?(Y.map.depthTexture.compareFunction=rt?Ym:Wm,Y.map.depthTexture.minFilter=kn,Y.map.depthTexture.magFilter=kn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==l.x||Y.map.height!==l.y)&&Y.map.setSize(l.x,l.y);const lt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();K.isPointLight!==!0&&Y.updateMatrices(K,T);for(let xt=0;xt<lt;xt++){const qt=Y.getCamera(xt);if(K.isPointLight){const Tt=Y.camera,I=Y.matrix,mt=K.distance||Tt.far;mt!==Tt.far&&(Tt.far=mt,Tt.updateProjectionMatrix()),Cl.setFromMatrixPosition(K.matrixWorld),Tt.position.copy(Cl),Op.copy(Tt.position),Op.add(Qw[xt]),Tt.up.copy(Jw[xt]),Tt.lookAt(Op),Tt.updateMatrixWorld(),I.makeTranslation(-Cl.x,-Cl.y,-Cl.z),RS.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(RS,Tt.coordinateSystem,Tt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(Y.map),o.clear());const Tt=Y.getViewport(xt);h.set(u.x*Tt.x,u.y*Tt.y,u.x*Tt.z,u.y*Tt.w),W.viewport(h)}r=Y.getFrustum(xt),C(N,T,qt,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Nl&&L(Y,T),Y.needsUpdate=!1}b=this.type,M.needsUpdate=!1,o.setRenderTarget(O,F,G)};function L(D,N){const T=t.update(A);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new Pi(l.x,l.y,{format:hs,type:_a}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(N,null,T,g,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(N,null,T,x,A,null)}function z(D,N,T,O){let F=null;const G=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)F=G;else if(F=T.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const W=F.uuid,it=N.uuid;let H=m[W];H===void 0&&(H={},m[W]=H);let $=H[it];$===void 0&&($=F.clone(),H[it]=$,N.addEventListener("dispose",U)),F=$}if(F.visible=N.visible,F.wireframe=N.wireframe,O===Nl?F.side=N.shadowSide!==null?N.shadowSide:N.side:F.side=N.shadowSide!==null?N.shadowSide:_[N.side],F.alphaMap=N.alphaMap,F.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,F.map=N.map,F.clipShadows=N.clipShadows,F.clippingPlanes=N.clippingPlanes,F.clipIntersection=N.clipIntersection,F.displacementMap=N.displacementMap,F.displacementScale=N.displacementScale,F.displacementBias=N.displacementBias,F.wireframeLinewidth=N.wireframeLinewidth,F.linewidth=N.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const W=o.properties.get(F);W.light=T}return F}function C(D,N,T,O,F){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===Nl)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const it=t.update(D),H=D.material;if(Array.isArray(H)){const $=it.groups;for(let K=0,Y=$.length;K<Y;K++){const dt=$[K],rt=H[dt.materialIndex];if(rt&&rt.visible){const lt=z(D,rt,O,F);D.onBeforeShadow(o,D,N,T,it,lt,dt),o.renderBufferDirect(T,null,it,lt,D,dt),D.onAfterShadow(o,D,N,T,it,lt,dt)}}}else if(H.visible){const $=z(D,H,O,F);D.onBeforeShadow(o,D,N,T,it,$,null),o.renderBufferDirect(T,null,it,$,D,null),D.onAfterShadow(o,D,N,T,it,$,null)}}const W=D.children;for(let it=0,H=W.length;it<H;it++)C(W[it],N,T,O,F)}function U(D){D.target.removeEventListener("dispose",U);for(const T in m){const O=m[T],F=D.target.uuid;F in O&&(O[F].dispose(),delete O[F])}}}function $w(o,t){function i(){let J=!1;const Ot=new tn;let bt=null;const Pt=new tn(0,0,0,0);return{setMask:function(Yt){bt!==Yt&&!J&&(o.colorMask(Yt,Yt,Yt,Yt),bt=Yt)},setLocked:function(Yt){J=Yt},setClear:function(Yt,wt,ne,Xt,Oe){Oe===!0&&(Yt*=Xt,wt*=Xt,ne*=Xt),Ot.set(Yt,wt,ne,Xt),Pt.equals(Ot)===!1&&(o.clearColor(Yt,wt,ne,Xt),Pt.copy(Ot))},reset:function(){J=!1,bt=null,Pt.set(-1,0,0,0)}}}function r(){let J=!1,Ot=!1,bt=null,Pt=null,Yt=null;return{setReversed:function(wt){if(Ot!==wt){const ne=t.get("EXT_clip_control");wt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Ot=wt;const Xt=Yt;Yt=null,this.setClear(Xt)}},getReversed:function(){return Ot},setTest:function(wt){wt?nt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(wt){bt!==wt&&!J&&(o.depthMask(wt),bt=wt)},setFunc:function(wt){if(Ot&&(wt=oE[wt]),Pt!==wt){switch(wt){case Xp:o.depthFunc(o.NEVER);break;case qp:o.depthFunc(o.ALWAYS);break;case Wp:o.depthFunc(o.LESS);break;case Bl:o.depthFunc(o.LEQUAL);break;case Yp:o.depthFunc(o.EQUAL);break;case Kp:o.depthFunc(o.GEQUAL);break;case Zp:o.depthFunc(o.GREATER);break;case Qp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=wt}},setLocked:function(wt){J=wt},setClear:function(wt){Yt!==wt&&(Yt=wt,Ot&&(wt=1-wt),o.clearDepth(wt))},reset:function(){J=!1,bt=null,Pt=null,Yt=null,Ot=!1}}}function l(){let J=!1,Ot=null,bt=null,Pt=null,Yt=null,wt=null,ne=null,Xt=null,Oe=null;return{setTest:function(me){J||(me?nt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(me){Ot!==me&&!J&&(o.stencilMask(me),Ot=me)},setFunc:function(me,ui,Mi){(bt!==me||Pt!==ui||Yt!==Mi)&&(o.stencilFunc(me,ui,Mi),bt=me,Pt=ui,Yt=Mi)},setOp:function(me,ui,Mi){(wt!==me||ne!==ui||Xt!==Mi)&&(o.stencilOp(me,ui,Mi),wt=me,ne=ui,Xt=Mi)},setLocked:function(me){J=me},setClear:function(me){Oe!==me&&(o.clearStencil(me),Oe=me)},reset:function(){J=!1,Ot=null,bt=null,Pt=null,Yt=null,wt=null,ne=null,Xt=null,Oe=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},_={},g={},x=new WeakMap,y=[],A=null,M=!1,b=null,L=null,z=null,C=null,U=null,D=null,N=null,T=new Le(0,0,0),O=0,F=!1,G=null,W=null,it=null,H=null,$=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,dt=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Y=dt>=1):rt.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Y=dt>=2);let lt=null,xt={};const qt=o.getParameter(o.SCISSOR_BOX),Tt=o.getParameter(o.VIEWPORT),I=new tn().fromArray(qt),mt=new tn().fromArray(Tt);function Et(J,Ot,bt,Pt){const Yt=new Uint8Array(4),wt=o.createTexture();o.bindTexture(J,wt),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<bt;ne++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,Yt):o.texImage2D(Ot+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Yt);return wt}const q={};q[o.TEXTURE_2D]=Et(o.TEXTURE_2D,o.TEXTURE_2D,1),q[o.TEXTURE_CUBE_MAP]=Et(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[o.TEXTURE_2D_ARRAY]=Et(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),q[o.TEXTURE_3D]=Et(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),nt(o.DEPTH_TEST),h.setFunc(Bl),Wt(!1),jt(Mx),nt(o.CULL_FACE),re(Zi);function nt(J){v[J]!==!0&&(o.enable(J),v[J]=!0)}function At(J){v[J]!==!1&&(o.disable(J),v[J]=!1)}function Ut(J,Ot){return g[J]!==Ot?(o.bindFramebuffer(J,Ot),g[J]=Ot,J===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ot),J===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function st(J,Ot){let bt=y,Pt=!1;if(J){bt=x.get(Ot),bt===void 0&&(bt=[],x.set(Ot,bt));const Yt=J.textures;if(bt.length!==Yt.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,ne=Yt.length;wt<ne;wt++)bt[wt]=o.COLOR_ATTACHMENT0+wt;bt.length=Yt.length,Pt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(bt)}function ut(J){return A!==J?(o.useProgram(J),A=J,!0):!1}const Ct={[ls]:o.FUNC_ADD,[Cb]:o.FUNC_SUBTRACT,[Db]:o.FUNC_REVERSE_SUBTRACT};Ct[Nb]=o.MIN,Ct[Ub]=o.MAX;const Rt={[Lb]:o.ZERO,[kp]:o.ONE,[Ob]:o.SRC_COLOR,[VS]:o.SRC_ALPHA,[Hb]:o.SRC_ALPHA_SATURATE,[Bb]:o.DST_COLOR,[zb]:o.DST_ALPHA,[Pb]:o.ONE_MINUS_SRC_COLOR,[af]:o.ONE_MINUS_SRC_ALPHA,[Fb]:o.ONE_MINUS_DST_COLOR,[Ib]:o.ONE_MINUS_DST_ALPHA,[Gb]:o.CONSTANT_COLOR,[Vb]:o.ONE_MINUS_CONSTANT_COLOR,[kb]:o.CONSTANT_ALPHA,[Xb]:o.ONE_MINUS_CONSTANT_ALPHA};function re(J,Ot,bt,Pt,Yt,wt,ne,Xt,Oe,me){if(J===Zi){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(nt(o.BLEND),M=!0),J!==GS){if(J!==b||me!==F){if((L!==ls||U!==ls)&&(o.blendEquation(o.FUNC_ADD),L=ls,U=ls),me)switch(J){case Ll:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bx:o.blendFunc(o.ONE,o.ONE);break;case Ex:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:He("WebGLState: Invalid blending: ",J);break}else switch(J){case Ll:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ex:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tx:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",J);break}z=null,C=null,D=null,N=null,T.set(0,0,0),O=0,b=J,F=me}return}Yt=Yt||Ot,wt=wt||bt,ne=ne||Pt,(Ot!==L||Yt!==U)&&(o.blendEquationSeparate(Ct[Ot],Ct[Yt]),L=Ot,U=Yt),(bt!==z||Pt!==C||wt!==D||ne!==N)&&(o.blendFuncSeparate(Rt[bt],Rt[Pt],Rt[wt],Rt[ne]),z=bt,C=Pt,D=wt,N=ne),(Xt.equals(T)===!1||Oe!==O)&&(o.blendColor(Xt.r,Xt.g,Xt.b,Oe),T.copy(Xt),O=Oe),b=J,F=!1}function le(J,Ot){J.side===Oi?At(o.CULL_FACE):nt(o.CULL_FACE);let bt=J.side===li;Ot&&(bt=!bt),Wt(bt),J.blending===Ll&&J.transparent===!1?re(Zi):re(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),h.setFunc(J.depthFunc),h.setTest(J.depthTest),h.setMask(J.depthWrite),u.setMask(J.colorWrite);const Pt=J.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),qe(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(J){G!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),G=J)}function jt(J){J!==Ab?(nt(o.CULL_FACE),J!==W&&(J===Mx?o.cullFace(o.BACK):J===wb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),W=J}function ve(J){J!==it&&(Y&&o.lineWidth(J),it=J)}function qe(J,Ot,bt){J?(nt(o.POLYGON_OFFSET_FILL),(H!==Ot||$!==bt)&&(H=Ot,$=bt,h.getReversed()&&(Ot=-Ot),o.polygonOffset(Ot,bt))):At(o.POLYGON_OFFSET_FILL)}function Se(J){J?nt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Be(J){J===void 0&&(J=o.TEXTURE0+K-1),lt!==J&&(o.activeTexture(J),lt=J)}function Z(J,Ot,bt){bt===void 0&&(lt===null?bt=o.TEXTURE0+K-1:bt=lt);let Pt=xt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[bt]=Pt),(Pt.type!==J||Pt.texture!==Ot)&&(lt!==bt&&(o.activeTexture(bt),lt=bt),o.bindTexture(J,Ot||q[J]),Pt.type=J,Pt.texture=Ot)}function We(){const J=xt[lt];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ye(){try{o.compressedTexImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function E(){try{o.texSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Q(){try{o.texSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function at(){try{o.compressedTexSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function vt(){try{o.compressedTexSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function Dt(){try{o.texStorage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Nt(){try{o.texStorage3D(...arguments)}catch(J){He("WebGLState:",J)}}function _t(){try{o.texImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function St(){try{o.texImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function Lt(J){return _[J]!==void 0?_[J]:o.getParameter(J)}function ie(J,Ot){_[J]!==Ot&&(o.pixelStorei(J,Ot),_[J]=Ot)}function Ht(J){I.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),I.copy(J))}function Bt(J){mt.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),mt.copy(J))}function Kt(J,Ot){let bt=m.get(Ot);bt===void 0&&(bt=new WeakMap,m.set(Ot,bt));let Pt=bt.get(J);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ot,J.name),bt.set(J,Pt))}function oe(J,Ot){const Pt=m.get(Ot).get(J);p.get(Ot)!==Pt&&(o.uniformBlockBinding(Ot,Pt,J.__bindingPointIndex),p.set(Ot,Pt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},_={},lt=null,xt={},g={},x=new WeakMap,y=[],A=null,M=!1,b=null,L=null,z=null,C=null,U=null,D=null,N=null,T=new Le(0,0,0),O=0,F=!1,G=null,W=null,it=null,H=null,$=null,I.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:nt,disable:At,bindFramebuffer:Ut,drawBuffers:st,useProgram:ut,setBlending:re,setMaterial:le,setFlipSided:Wt,setCullFace:jt,setLineWidth:ve,setPolygonOffset:qe,setScissorTest:Se,activeTexture:Be,bindTexture:Z,unbindTexture:We,compressedTexImage2D:ye,compressedTexImage3D:P,texImage2D:_t,texImage3D:St,pixelStorei:ie,getParameter:Lt,updateUBOMapping:Kt,uniformBlockBinding:oe,texStorage2D:Dt,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:at,compressedTexSubImage3D:vt,scissor:Ht,viewport:Bt,reset:de}}function tR(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new se,v=new WeakMap,_=new Set;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,E){return y?new OffscreenCanvas(P,E):Vl("canvas")}function M(P,E,Q){let at=1;const vt=ye(P);if((vt.width>Q||vt.height>Q)&&(at=Q/Math.max(vt.width,vt.height)),at<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Dt=Math.floor(at*vt.width),Nt=Math.floor(at*vt.height);g===void 0&&(g=A(Dt,Nt));const _t=E?A(Dt,Nt):g;return _t.width=Dt,_t.height=Nt,_t.getContext("2d").drawImage(P,0,0,Dt,Nt),ce("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Dt+"x"+Nt+")."),_t}else return"data"in P&&ce("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function b(P){return P.generateMipmaps}function L(P){o.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,E,Q,at,vt,Dt=!1){if(P!==null){if(o[P]!==void 0)return o[P];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;at&&(Nt=t.get("EXT_texture_norm16"),Nt||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=E;if(E===o.RED&&(Q===o.FLOAT&&(_t=o.R32F),Q===o.HALF_FLOAT&&(_t=o.R16F),Q===o.UNSIGNED_BYTE&&(_t=o.R8),Q===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.R16_EXT),Q===o.SHORT&&Nt&&(_t=Nt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.R8UI),Q===o.UNSIGNED_SHORT&&(_t=o.R16UI),Q===o.UNSIGNED_INT&&(_t=o.R32UI),Q===o.BYTE&&(_t=o.R8I),Q===o.SHORT&&(_t=o.R16I),Q===o.INT&&(_t=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(_t=o.RG32F),Q===o.HALF_FLOAT&&(_t=o.RG16F),Q===o.UNSIGNED_BYTE&&(_t=o.RG8),Q===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RG16_EXT),Q===o.SHORT&&Nt&&(_t=Nt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RG8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RG16UI),Q===o.UNSIGNED_INT&&(_t=o.RG32UI),Q===o.BYTE&&(_t=o.RG8I),Q===o.SHORT&&(_t=o.RG16I),Q===o.INT&&(_t=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),Q===o.UNSIGNED_INT&&(_t=o.RGB32UI),Q===o.BYTE&&(_t=o.RGB8I),Q===o.SHORT&&(_t=o.RGB16I),Q===o.INT&&(_t=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),Q===o.UNSIGNED_INT&&(_t=o.RGBA32UI),Q===o.BYTE&&(_t=o.RGBA8I),Q===o.SHORT&&(_t=o.RGBA16I),Q===o.INT&&(_t=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RGB16_EXT),Q===o.SHORT&&Nt&&(_t=Nt.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),E===o.RGBA){const St=Dt?lf:ze.getTransfer(vt);Q===o.FLOAT&&(_t=o.RGBA32F),Q===o.HALF_FLOAT&&(_t=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(_t=St===Qe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&Nt&&(_t=Nt.RGBA16_EXT),Q===o.SHORT&&Nt&&(_t=Nt.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function U(P,E){let Q;return P?E===null||E===va||E===Hl?Q=o.DEPTH24_STENCIL8:E===pa?Q=o.DEPTH32F_STENCIL8:E===Fl&&(Q=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===va||E===Hl?Q=o.DEPTH_COMPONENT24:E===pa?Q=o.DEPTH_COMPONENT32F:E===Fl&&(Q=o.DEPTH_COMPONENT16),Q}function D(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==In&&P.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),O(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),G(E)}function O(P){const E=r.get(P);if(E.__webglInit===void 0)return;const Q=P.source,at=x.get(Q);if(at){const vt=at[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&F(P),Object.keys(at).length===0&&x.delete(Q)}r.remove(P)}function F(P){const E=r.get(P);o.deleteTexture(E.__webglTexture);const Q=P.source,at=x.get(Q);delete at[E.__cacheKey],h.memory.textures--}function G(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(E.__webglFramebuffer[at]))for(let vt=0;vt<E.__webglFramebuffer[at].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[at][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[at]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[at])}else{if(Array.isArray(E.__webglFramebuffer))for(let at=0;at<E.__webglFramebuffer.length;at++)o.deleteFramebuffer(E.__webglFramebuffer[at]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let at=0;at<E.__webglColorRenderbuffer.length;at++)E.__webglColorRenderbuffer[at]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[at]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=P.textures;for(let at=0,vt=Q.length;at<vt;at++){const Dt=r.get(Q[at]);Dt.__webglTexture&&(o.deleteTexture(Dt.__webglTexture),h.memory.textures--),r.remove(Q[at])}r.remove(P)}let W=0;function it(){W=0}function H(){return W}function $(P){W=P}function K(){const P=W;return P>=l.maxTextures&&ce("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),W+=1,P}function Y(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function dt(P,E){const Q=r.get(P);if(P.isVideoTexture&&Z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const at=P.image;if(at===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{At(Q,P,E);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function rt(P,E){const Q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){At(Q,P,E);return}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function lt(P,E){const Q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){At(Q,P,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function xt(P,E){const Q=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Q.__version!==P.version){Ut(Q,P,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const qt={[Jp]:o.REPEAT,[Ga]:o.CLAMP_TO_EDGE,[jp]:o.MIRRORED_REPEAT},Tt={[In]:o.NEAREST,[Yb]:o.NEAREST_MIPMAP_NEAREST,[vc]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[jd]:o.LINEAR_MIPMAP_NEAREST,[Nr]:o.LINEAR_MIPMAP_LINEAR},I={[Jb]:o.NEVER,[nE]:o.ALWAYS,[jb]:o.LESS,[Wm]:o.LEQUAL,[$b]:o.EQUAL,[Ym]:o.GEQUAL,[tE]:o.GREATER,[eE]:o.NOTEQUAL};function mt(P,E){if(E.type===pa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===jd||E.magFilter===vc||E.magFilter===Nr||E.minFilter===kn||E.minFilter===jd||E.minFilter===vc||E.minFilter===Nr)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,qt[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,qt[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,qt[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==vc&&E.minFilter!==Nr||E.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Et(P,E){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const at=E.source;let vt=x.get(at);vt===void 0&&(vt={},x.set(at,vt));const Dt=Y(E);if(Dt!==P.__cacheKey){vt[Dt]===void 0&&(vt[Dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),vt[Dt].usedTimes++;const Nt=vt[P.__cacheKey];Nt!==void 0&&(vt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&F(E)),P.__cacheKey=Dt,P.__webglTexture=vt[Dt].texture}return Q}function q(P,E,Q){return Math.floor(Math.floor(P/Q)/E)}function nt(P,E,Q,at){const Dt=P.updateRanges;if(Dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,at,E.data);else{Dt.sort((ie,Ht)=>ie.start-Ht.start);let Nt=0;for(let ie=1;ie<Dt.length;ie++){const Ht=Dt[Nt],Bt=Dt[ie],Kt=Ht.start+Ht.count,oe=q(Bt.start,E.width,4),de=q(Ht.start,E.width,4);Bt.start<=Kt+1&&oe===de&&q(Bt.start+Bt.count-1,E.width,4)===oe?Ht.count=Math.max(Ht.count,Bt.start+Bt.count-Ht.start):(++Nt,Dt[Nt]=Bt)}Dt.length=Nt+1;const _t=i.getParameter(o.UNPACK_ROW_LENGTH),St=i.getParameter(o.UNPACK_SKIP_PIXELS),Lt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ie=0,Ht=Dt.length;ie<Ht;ie++){const Bt=Dt[ie],Kt=Math.floor(Bt.start/4),oe=Math.ceil(Bt.count/4),de=Kt%E.width,J=Math.floor(Kt/E.width),Ot=oe,bt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,de,J,Ot,bt,Q,at,E.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,_t),i.pixelStorei(o.UNPACK_SKIP_PIXELS,St),i.pixelStorei(o.UNPACK_SKIP_ROWS,Lt)}}function At(P,E,Q){let at=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(at=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(at=o.TEXTURE_3D);const vt=Et(P,E),Dt=E.source;i.bindTexture(at,P.__webglTexture,o.TEXTURE0+Q);const Nt=r.get(Dt);if(Dt.version!==Nt.__version||vt===!0){if(i.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const bt=ze.getPrimaries(ze.workingColorSpace),Pt=E.colorSpace===Cr?null:ze.getPrimaries(E.colorSpace),Yt=E.colorSpace===Cr||bt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let St=M(E.image,!1,l.maxTextureSize);St=We(E,St);const Lt=u.convert(E.format,E.colorSpace),ie=u.convert(E.type);let Ht=C(E.internalFormat,Lt,ie,E.normalized,E.colorSpace,E.isVideoTexture);mt(at,E);let Bt;const Kt=E.mipmaps,oe=E.isVideoTexture!==!0,de=Nt.__version===void 0||vt===!0,J=Dt.dataReady,Ot=D(E,St);if(E.isDepthTexture)Ht=U(E.format===us,E.type),de&&(oe?i.texStorage2D(o.TEXTURE_2D,1,Ht,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Ht,St.width,St.height,0,Lt,ie,null));else if(E.isDataTexture)if(Kt.length>0){oe&&de&&i.texStorage2D(o.TEXTURE_2D,Ot,Ht,Kt[0].width,Kt[0].height);for(let bt=0,Pt=Kt.length;bt<Pt;bt++)Bt=Kt[bt],oe?J&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Lt,ie,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Ht,Bt.width,Bt.height,0,Lt,ie,Bt.data);E.generateMipmaps=!1}else oe?(de&&i.texStorage2D(o.TEXTURE_2D,Ot,Ht,St.width,St.height),J&&nt(E,St,Lt,ie)):i.texImage2D(o.TEXTURE_2D,0,Ht,St.width,St.height,0,Lt,ie,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,Ht,Kt[0].width,Kt[0].height,St.depth);for(let bt=0,Pt=Kt.length;bt<Pt;bt++)if(Bt=Kt[bt],E.format!==Ki)if(Lt!==null)if(oe){if(J)if(E.layerUpdates.size>0){const Yt=sS(Bt.width,Bt.height,E.format,E.type);for(const wt of E.layerUpdates){const ne=Bt.data.subarray(wt*Yt/Bt.data.BYTES_PER_ELEMENT,(wt+1)*Yt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,wt,Bt.width,Bt.height,1,Lt,ne)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,St.depth,Lt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Ht,Bt.width,Bt.height,St.depth,0,Bt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,St.depth,Lt,ie,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Ht,Bt.width,Bt.height,St.depth,0,Lt,ie,Bt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&de&&i.texStorage2D(o.TEXTURE_2D,Ot,Ht,Kt[0].width,Kt[0].height);for(let bt=0,Pt=Kt.length;bt<Pt;bt++)Bt=Kt[bt],E.format!==Ki?Lt!==null?oe?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Lt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Ht,Bt.width,Bt.height,0,Bt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?J&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Lt,ie,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Ht,Bt.width,Bt.height,0,Lt,ie,Bt.data)}else if(E.isDataArrayTexture)if(oe){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ot,Ht,St.width,St.height,St.depth),J)if(E.layerUpdates.size>0){const bt=sS(St.width,St.height,E.format,E.type);for(const Pt of E.layerUpdates){const Yt=St.data.subarray(Pt*bt/St.data.BYTES_PER_ELEMENT,(Pt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Pt,St.width,St.height,1,Lt,ie,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,ie,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ht,St.width,St.height,St.depth,0,Lt,ie,St.data);else if(E.isData3DTexture)oe?(de&&i.texStorage3D(o.TEXTURE_3D,Ot,Ht,St.width,St.height,St.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,ie,St.data)):i.texImage3D(o.TEXTURE_3D,0,Ht,St.width,St.height,St.depth,0,Lt,ie,St.data);else if(E.isFramebufferTexture){if(de)if(oe)i.texStorage2D(o.TEXTURE_2D,Ot,Ht,St.width,St.height);else{let bt=St.width,Pt=St.height;for(let Yt=0;Yt<Ot;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,Ht,bt,Pt,0,Lt,ie,null),bt>>=1,Pt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const bt=o.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),St.parentNode!==bt){bt.appendChild(St),_.add(E),bt.onpaint=Pt=>{const Yt=Pt.changedElements;for(const wt of _)Yt.includes(wt.image)&&(wt.needsUpdate=!0)},bt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,St);else{const Yt=o.RGBA,wt=o.RGBA,ne=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Yt,wt,ne,St)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(oe&&de){const bt=ye(Kt[0]);i.texStorage2D(o.TEXTURE_2D,Ot,Ht,bt.width,bt.height)}for(let bt=0,Pt=Kt.length;bt<Pt;bt++)Bt=Kt[bt],oe?J&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Lt,ie,Bt):i.texImage2D(o.TEXTURE_2D,bt,Ht,Lt,ie,Bt);E.generateMipmaps=!1}else if(oe){if(de){const bt=ye(St);i.texStorage2D(o.TEXTURE_2D,Ot,Ht,bt.width,bt.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ie,St)}else i.texImage2D(o.TEXTURE_2D,0,Ht,Lt,ie,St);b(E)&&L(at),Nt.__version=Dt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ut(P,E,Q){if(E.image.length!==6)return;const at=Et(P,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+Q);const Dt=r.get(vt);if(vt.version!==Dt.__version||at===!0){i.activeTexture(o.TEXTURE0+Q);const Nt=ze.getPrimaries(ze.workingColorSpace),_t=E.colorSpace===Cr?null:ze.getPrimaries(E.colorSpace),St=E.colorSpace===Cr||Nt===_t?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,Ht=[];for(let wt=0;wt<6;wt++)!Lt&&!ie?Ht[wt]=M(E.image[wt],!0,l.maxCubemapSize):Ht[wt]=ie?E.image[wt].image:E.image[wt],Ht[wt]=We(E,Ht[wt]);const Bt=Ht[0],Kt=u.convert(E.format,E.colorSpace),oe=u.convert(E.type),de=C(E.internalFormat,Kt,oe,E.normalized,E.colorSpace),J=E.isVideoTexture!==!0,Ot=Dt.__version===void 0||at===!0,bt=vt.dataReady;let Pt=D(E,Bt);mt(o.TEXTURE_CUBE_MAP,E);let Yt;if(Lt){J&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,de,Bt.width,Bt.height);for(let wt=0;wt<6;wt++){Yt=Ht[wt].mipmaps;for(let ne=0;ne<Yt.length;ne++){const Xt=Yt[ne];E.format!==Ki?Kt!==null?J?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne,0,0,Xt.width,Xt.height,Kt,Xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne,de,Xt.width,Xt.height,0,Xt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne,0,0,Xt.width,Xt.height,Kt,oe,Xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne,de,Xt.width,Xt.height,0,Kt,oe,Xt.data)}}}else{if(Yt=E.mipmaps,J&&Ot){Yt.length>0&&Pt++;const wt=ye(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,de,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(ie){J?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Ht[wt].width,Ht[wt].height,Kt,oe,Ht[wt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,de,Ht[wt].width,Ht[wt].height,0,Kt,oe,Ht[wt].data);for(let ne=0;ne<Yt.length;ne++){const Oe=Yt[ne].image[wt].image;J?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne+1,0,0,Oe.width,Oe.height,Kt,oe,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne+1,de,Oe.width,Oe.height,0,Kt,oe,Oe.data)}}else{J?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Kt,oe,Ht[wt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,de,Kt,oe,Ht[wt]);for(let ne=0;ne<Yt.length;ne++){const Xt=Yt[ne];J?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne+1,0,0,Kt,oe,Xt.image[wt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,ne+1,de,Kt,oe,Xt.image[wt])}}}b(E)&&L(o.TEXTURE_CUBE_MAP),Dt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function st(P,E,Q,at,vt,Dt){const Nt=u.convert(Q.format,Q.colorSpace),_t=u.convert(Q.type),St=C(Q.internalFormat,Nt,_t,Q.normalized,Q.colorSpace),Lt=r.get(E),ie=r.get(Q);if(ie.__renderTarget=E,!Lt.__hasExternalTextures){const Ht=Math.max(1,E.width>>Dt),Bt=Math.max(1,E.height>>Dt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,Dt,St,Ht,Bt,E.depth,0,Nt,_t,null):i.texImage2D(vt,Dt,St,Ht,Bt,0,Nt,_t,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Be(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,at,vt,ie.__webglTexture,0,Se(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,at,vt,ie.__webglTexture,Dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(P,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const at=E.depthTexture,vt=at&&at.isDepthTexture?at.type:null,Dt=U(E.stencilBuffer,vt),Nt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Be(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Se(E),Dt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Se(E),Dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,P)}else{const at=E.textures;for(let vt=0;vt<at.length;vt++){const Dt=at[vt],Nt=u.convert(Dt.format,Dt.colorSpace),_t=u.convert(Dt.type),St=C(Dt.internalFormat,Nt,_t,Dt.normalized,Dt.colorSpace);Be(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Se(E),St,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Se(E),St,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,St,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(P,E,Q){const at=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const vt=r.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),at){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Lt=u.convert(E.depthTexture.format),ie=u.convert(E.depthTexture.type);let Ht;E.depthTexture.format===ka?Ht=o.DEPTH_COMPONENT24:E.depthTexture.format===us&&(Ht=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ht,E.width,E.height,0,Lt,ie,null)}}else dt(E.depthTexture,0);const Dt=vt.__webglTexture,Nt=Se(E),_t=at?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,St=E.depthTexture.format===us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)Be(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,_t,Dt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,St,_t,Dt,0);else if(E.depthTexture.format===us)Be(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,_t,Dt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,St,_t,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(P){const E=r.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const at=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),at){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,at.removeEventListener("dispose",vt)};at.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=at}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let at=0;at<6;at++)Ct(E.__webglFramebuffer[at],P,at);else{const at=P.texture.mipmaps;at&&at.length>0?Ct(E.__webglFramebuffer[0],P,0):Ct(E.__webglFramebuffer,P,0)}else if(Q){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]===void 0)E.__webglDepthbuffer[at]=o.createRenderbuffer(),ut(E.__webglDepthbuffer[at],P,!1);else{const vt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer[at];o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Dt)}}else{const at=P.texture.mipmaps;if(at&&at.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ut(E.__webglDepthbuffer,P,!1);else{const vt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,Dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function re(P,E,Q){const at=r.get(P);E!==void 0&&st(at.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Rt(P)}function le(P){const E=P.texture,Q=r.get(P),at=r.get(E);P.addEventListener("dispose",T);const vt=P.textures,Dt=P.isWebGLCubeRenderTarget===!0,Nt=vt.length>1;if(Nt||(at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture()),at.__version=E.version,h.memory.textures++),Dt){Q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[_t]=[];for(let St=0;St<E.mipmaps.length;St++)Q.__webglFramebuffer[_t][St]=o.createFramebuffer()}else Q.__webglFramebuffer[_t]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)Q.__webglFramebuffer[_t]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let _t=0,St=vt.length;_t<St;_t++){const Lt=r.get(vt[_t]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&Be(P)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let _t=0;_t<vt.length;_t++){const St=vt[_t];Q.__webglColorRenderbuffer[_t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[_t]);const Lt=u.convert(St.format,St.colorSpace),ie=u.convert(St.type),Ht=C(St.internalFormat,Lt,ie,St.normalized,St.colorSpace,P.isXRRenderTarget===!0),Bt=Se(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Ht,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_t,o.RENDERBUFFER,Q.__webglColorRenderbuffer[_t])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(Q.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)st(Q.__webglFramebuffer[_t][St],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else st(Q.__webglFramebuffer[_t],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);b(E)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let _t=0,St=vt.length;_t<St;_t++){const Lt=vt[_t],ie=r.get(Lt);let Ht=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ht=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,ie.__webglTexture),mt(Ht,Lt),st(Q.__webglFramebuffer,P,Lt,o.COLOR_ATTACHMENT0+_t,Ht,0),b(Lt)&&L(Ht)}i.unbindTexture()}else{let _t=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(_t,at.__webglTexture),mt(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)st(Q.__webglFramebuffer[St],P,E,o.COLOR_ATTACHMENT0,_t,St);else st(Q.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,_t,0);b(E)&&L(_t),i.unbindTexture()}P.depthBuffer&&Rt(P)}function Wt(P){const E=P.textures;for(let Q=0,at=E.length;Q<at;Q++){const vt=E[Q];if(b(vt)){const Dt=z(P),Nt=r.get(vt).__webglTexture;i.bindTexture(Dt,Nt),L(Dt),i.unbindTexture()}}}const jt=[],ve=[];function qe(P){if(P.samples>0){if(Be(P)===!1){const E=P.textures,Q=P.width,at=P.height;let vt=o.COLOR_BUFFER_BIT;const Dt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(P),_t=E.length>1;if(_t)for(let Lt=0;Lt<E.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const St=P.texture.mipmaps;St&&St.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),_t){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const ie=r.get(E[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ie,0)}o.blitFramebuffer(0,0,Q,at,0,0,Q,at,vt,o.NEAREST),p===!0&&(jt.length=0,ve.length=0,jt.push(o.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(jt.push(Dt),ve.push(Dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,jt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),_t)for(let Lt=0;Lt<E.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Lt]);const ie=r.get(E[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ie,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&p){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Se(P){return Math.min(l.maxSamples,P.samples)}function Be(P){const E=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(P){const E=h.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function We(P,E){const Q=P.colorSpace,at=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==of&&Q!==Cr&&(ze.getTransfer(Q)===Qe?(at!==Ki||vt!==yi)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Q)),E}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=it,this.getTextureUnits=H,this.setTextureUnits=$,this.setTexture2D=dt,this.setTexture2DArray=rt,this.setTexture3D=lt,this.setTextureCube=xt,this.rebindTextures=re,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function eR(o,t){function i(r,l=Cr){let u;const h=ze.getTransfer(l);if(r===yi)return o.UNSIGNED_BYTE;if(r===Gm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Vm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===$S)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ty)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===JS)return o.BYTE;if(r===jS)return o.SHORT;if(r===Fl)return o.UNSIGNED_SHORT;if(r===Hm)return o.INT;if(r===va)return o.UNSIGNED_INT;if(r===pa)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===ey)return o.ALPHA;if(r===ny)return o.RGB;if(r===Ki)return o.RGBA;if(r===ka)return o.DEPTH_COMPONENT;if(r===us)return o.DEPTH_STENCIL;if(r===iy)return o.RED;if(r===km)return o.RED_INTEGER;if(r===hs)return o.RG;if(r===Xm)return o.RG_INTEGER;if(r===qm)return o.RGBA_INTEGER;if(r===Kc||r===Zc||r===Qc||r===Jc)if(h===Qe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Kc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Kc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$p||r===tm||r===em||r===nm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===$p)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===em)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===im||r===am||r===rm||r===sm||r===om||r===rf||r===lm)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===im||r===am)return h===Qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===rm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===sm)return u.COMPRESSED_R11_EAC;if(r===om)return u.COMPRESSED_SIGNED_R11_EAC;if(r===rf)return u.COMPRESSED_RG11_EAC;if(r===lm)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===um||r===cm||r===fm||r===hm||r===dm||r===pm||r===mm||r===gm||r===vm||r===_m||r===xm||r===Sm||r===ym||r===Mm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===um)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_m)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ym)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mm)return h===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bm||r===Em||r===Tm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===bm)return h===Qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Em)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Am||r===wm||r===sf||r===Rm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Am)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
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

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new dy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new on({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new Eo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends ds{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,v=null,_=null,g=null,x=null,y=null;const A=typeof XRWebGLBinding<"u",M=new aR,b={},L=i.getContextAttributes();let z=null,C=null;const U=[],D=[],N=new se;let T=null,O=null;const F=new Wi;F.viewport=new tn;const G=new Wi;G.viewport=new tn;const W=[F,G],it=new dT;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=U[q];return nt===void 0&&(nt=new op,U[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=U[q];return nt===void 0&&(nt=new op,U[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=U[q];return nt===void 0&&(nt=new op,U[q]=nt),nt.getHandSpace()};function K(q){const nt=D.indexOf(q.inputSource);if(nt===-1)return;const At=U[nt];At!==void 0&&(At.update(q.inputSource,q.frame,m||h),At.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",dt);for(let q=0;q<U.length;q++){const nt=D[q];nt!==null&&(D[q]=null,U[q].disconnect(nt))}H=null,$=null,M.reset();for(const q in b)delete b[q];if(t.setRenderTarget(z),x=null,g=null,_=null,l=null,C=null,Et.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),O!==null){const q=O.camera;q.fov=O.fov,q.zoom=O.zoom,q.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,r.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return y},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(z=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",dt),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ut=null,st=null;L.depth&&(st=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=L.stencil?us:ka,Ut=L.stencil?Hl:va);const ut={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(ut),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Pi(g.textureWidth,g.textureHeight,{format:Ki,type:yi,depthTexture:new kl(g.textureWidth,g.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Pi(x.framebufferWidth,x.framebufferHeight,{format:Ki,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Et.setContext(l),Et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function dt(q){for(let nt=0;nt<q.removed.length;nt++){const At=q.removed[nt],Ut=D.indexOf(At);Ut>=0&&(D[Ut]=null,U[Ut].disconnect(At))}for(let nt=0;nt<q.added.length;nt++){const At=q.added[nt];let Ut=D.indexOf(At);if(Ut===-1){for(let ut=0;ut<U.length;ut++)if(ut>=D.length){D.push(At),Ut=ut;break}else if(D[ut]===null){D[ut]=At,Ut=ut;break}if(Ut===-1)break}const st=U[Ut];st&&st.connect(At)}}const rt=new k,lt=new k;function xt(q,nt,At){rt.setFromMatrixPosition(nt.matrixWorld),lt.setFromMatrixPosition(At.matrixWorld);const Ut=rt.distanceTo(lt),st=nt.projectionMatrix.elements,ut=At.projectionMatrix.elements,Ct=st[14]/(st[10]-1),Rt=st[14]/(st[10]+1),re=(st[9]+1)/st[5],le=(st[9]-1)/st[5],Wt=(st[8]-1)/st[0],jt=(ut[8]+1)/ut[0],ve=Ct*Wt,qe=Ct*jt,Se=Ut/(-Wt+jt),Be=Se*-Wt;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),st[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Z=Ct+Se,We=Rt+Se,ye=ve-Be,P=qe+(Ut-Be),E=re*Rt/We*Z,Q=le*Rt/We*Z;q.projectionMatrix.makePerspective(ye,P,E,Q,Z,We),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function qt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let nt=q.near,At=q.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),it.near=G.near=F.near=nt,it.far=G.far=F.far=At,(H!==it.near||$!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),H=it.near,$=it.far),it.layers.mask=q.layers.mask|6,F.layers.mask=it.layers.mask&-5,G.layers.mask=it.layers.mask&-3;const Ut=q.parent,st=it.cameras;qt(it,Ut);for(let ut=0;ut<st.length;ut++)qt(st[ut],Ut);st.length===2?xt(it,F,G):it.projectionMatrix.copy(F.projectionMatrix),O===null&&q.isPerspectiveCamera&&(O={camera:q,fov:q.fov,zoom:q.zoom}),Tt(q,it,Ut)};function Tt(q,nt,At){At===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(At.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(q){p=q,g!==null&&(g.fixedFoveation=q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(q){return b[q]};let I=null;function mt(q,nt){if(v=nt.getViewerPose(m||h),y=nt,v!==null){const At=v.views;x!==null&&(t.setRenderTargetFramebuffer(C,x.framebuffer),t.setRenderTarget(C));let Ut=!1;At.length!==it.cameras.length&&(it.cameras.length=0,Ut=!0);for(let Rt=0;Rt<At.length;Rt++){const re=At[Rt];let le=null;if(x!==null)le=x.getViewport(re);else{const jt=_.getViewSubImage(g,re);le=jt.viewport,Rt===0&&(t.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(C))}let Wt=W[Rt];Wt===void 0&&(Wt=new Wi,Wt.layers.enable(Rt),Wt.viewport=new tn,W[Rt]=Wt),Wt.matrix.fromArray(re.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(re.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(le.x,le.y,le.width,le.height),Rt===0&&(it.matrix.copy(Wt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Ut===!0&&it.cameras.push(Wt)}const st=l.enabledFeatures;if(st&&st.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const Rt=_.getDepthInformation(At[0]);Rt&&Rt.isValid&&Rt.texture&&M.init(Rt,l.renderState)}if(st&&st.includes("camera-access")&&A){t.state.unbindTexture(),_=r.getBinding();for(let Rt=0;Rt<At.length;Rt++){const re=At[Rt].camera;if(re){let le=b[re];le||(le=new dy,b[re]=le);const Wt=_.getCameraImage(re);le.sourceTexture=Wt}}}}for(let At=0;At<U.length;At++){const Ut=D[At],st=U[At];Ut!==null&&st!==void 0&&st.update(Ut,nt,m||h)}I&&I(q,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),y=null}const Et=new Sy;Et.setAnimationLoop(mt),this.setAnimationLoop=function(q){I=q},this.dispose=function(){}}}const sR=new rn,wy=new pe;wy.set(-1,0,0,0,1,0,0,0,1);function oR(o,t){function i(M,b){M.matrixAutoUpdate===!0&&M.updateMatrix(),b.value.copy(M.matrix)}function r(M,b){b.color.getRGB(M.fogColor.value,vy(o)),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function l(M,b,L,z,C){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?u(M,b):b.isMeshLambertMaterial?(u(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(u(M,b),_(M,b)):b.isMeshPhongMaterial?(u(M,b),v(M,b),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(u(M,b),g(M,b),b.isMeshPhysicalMaterial&&x(M,b,C)):b.isMeshMatcapMaterial?(u(M,b),y(M,b)):b.isMeshDepthMaterial?u(M,b):b.isMeshDistanceMaterial?(u(M,b),A(M,b)):b.isMeshNormalMaterial?u(M,b):b.isLineBasicMaterial?(h(M,b),b.isLineDashedMaterial&&d(M,b)):b.isPointsMaterial?p(M,b,L,z):b.isSpriteMaterial?m(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function u(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.bumpMap&&(M.bumpMap.value=b.bumpMap,i(b.bumpMap,M.bumpMapTransform),M.bumpScale.value=b.bumpScale,b.side===li&&(M.bumpScale.value*=-1)),b.normalMap&&(M.normalMap.value=b.normalMap,i(b.normalMap,M.normalMapTransform),M.normalScale.value.copy(b.normalScale),b.side===li&&M.normalScale.value.negate()),b.displacementMap&&(M.displacementMap.value=b.displacementMap,i(b.displacementMap,M.displacementMapTransform),M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,M.emissiveMapTransform)),b.specularMap&&(M.specularMap.value=b.specularMap,i(b.specularMap,M.specularMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const L=t.get(b),z=L.envMap,C=L.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(wy),M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap&&(M.lightMap.value=b.lightMap,M.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,M.lightMapTransform)),b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,M.aoMapTransform))}function h(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform))}function d(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function p(M,b,L,z){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*L,M.scale.value=z*.5,b.map&&(M.map.value=b.map,i(b.map,M.uvTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function m(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map,i(b.map,M.mapTransform)),b.alphaMap&&(M.alphaMap.value=b.alphaMap,i(b.alphaMap,M.alphaMapTransform)),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest)}function v(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function _(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function g(M,b){M.metalness.value=b.metalness,b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,M.metalnessMapTransform)),M.roughness.value=b.roughness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,M.roughnessMapTransform)),b.envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function x(M,b,L){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,M.sheenColorMapTransform)),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,M.sheenRoughnessMapTransform))),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,M.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(M.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===li&&M.clearcoatNormalScale.value.negate())),b.dispersion>0&&(M.dispersion.value=b.dispersion),b.retroreflectivity>0&&(M.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,M.iridescenceMapTransform)),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,M.transmissionMapTransform)),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(M.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(M.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,M.specularColorMapTransform)),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,b){b.matcap&&(M.matcap.value=b.matcap)}function A(M,b){const L=t.get(b).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lR(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const D=U.program;r.uniformBlockBinding(C,D)}function m(C,U){let D=l[C.id];D===void 0&&(M(C),D=v(C),l[C.id]=D,C.addEventListener("dispose",L));const N=U.program;r.updateUBOMapping(C,N);const T=t.render.frame;u[C.id]!==T&&(g(C),u[C.id]=T)}function v(C){const U=_();C.__bindingPointIndex=U;const D=o.createBuffer(),N=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,N,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],D=C.uniforms,N=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let T=0,O=D.length;T<O;T++){const F=D[T];if(Array.isArray(F))for(let G=0,W=F.length;G<W;G++)x(F[G],T,G,N);else x(F,T,0,N)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(C,U,D,N){if(A(C,U,D,N)===!0){const T=C.__offset,O=C.value;if(Array.isArray(O)){let F=0;for(let G=0;G<O.length;G++){const W=O[G],it=b(W);y(W,C.__data,F),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(F+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(O,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function y(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function A(C,U,D,N){const T=C.value,O=U+"_"+D;if(N[O]===void 0)return typeof T=="number"||typeof T=="boolean"?N[O]=T:ArrayBuffer.isView(T)?N[O]=T.slice():N[O]=T.clone(),!0;{const F=N[O];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return N[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(F.equals(T)===!1)return F.copy(T),!0}}return!1}function M(C){const U=C.uniforms;let D=0;const N=16;for(let O=0,F=U.length;O<F;O++){const G=Array.isArray(U[O])?U[O]:[U[O]];for(let W=0,it=G.length;W<it;W++){const H=G[W],$=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=$.length;K<Y;K++){const dt=$[K],rt=b(dt),lt=D%N,xt=lt%rt.boundary,qt=lt+xt;D+=xt,qt!==0&&N-qt<rt.storage&&(D+=N-qt),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=D,D+=rt.storage}}}const T=D%N;return T>0&&(D+=N-T),C.__size=D,C.__cache={},this}function b(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",C),U}function L(C){const U=C.target;U.removeEventListener("dispose",L);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function z(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:z}}const uR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function cR(){return ha===null&&(ha=new CE(uR,16,16,hs,_a),ha.name="DFG_LUT",ha.minFilter=kn,ha.magFilter=kn,ha.wrapS=Ga,ha.wrapT=Ga,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class fR{constructor(t={}){const{canvas:i=rE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=yi}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=x,M=new Set([qm,Xm,km]),b=new Set([yi,va,Fl,Hl,Gm,Vm]),L=new Uint32Array(4),z=new Int32Array(4),C=new k;let U=null,D=null;const N=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let G=!1,W=null,it=null,H=null,$=null;this._outputColorSpace=jn;let K=0,Y=0,dt=null,rt=-1,lt=null;const xt=new tn,qt=new tn;let Tt=null;const I=new Le(0);let mt=0,Et=i.width,q=i.height,nt=1,At=null,Ut=null;const st=new tn(0,0,Et,q),ut=new tn(0,0,Et,q);let Ct=!1;const Rt=new Qm;let re=!1,le=!1;const Wt=new rn,jt=new k,ve=new tn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Be(){return dt===null?nt:1}let Z=r;function We(w,V){return i.getContext(w,V)}let ye,P,E,Q,at,vt,Dt,Nt,_t,St,Lt,ie,Ht,Bt,Kt,oe,de,J,Ot,bt,Pt,Yt,wt;try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bm}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",ui,!1),Z===null){const V="webgl2";if(Z=We(V,w),Z===null)throw We(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(w){throw i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ui,!1),He("WebGLRenderer: "+w.message),w}function ne(){ye=new c3(Z),ye.init(),Pt=new eR(Z,ye),P=new t3(Z,ye,t,Pt),E=new $w(Z,ye),P.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),it=Z.createFramebuffer(),H=Z.createFramebuffer(),$=Z.createFramebuffer(),Q=new d3(Z),at=new Fw,vt=new tR(Z,ye,E,at,P,Pt,Q),Dt=new u3(F),Nt=new mT(Z),Yt=new j2(Z,Nt),_t=new f3(Z,Nt,Q,Yt),St=new m3(Z,_t,Nt,Yt,Q),J=new p3(Z,P,vt),Kt=new e3(at),Lt=new Bw(F,Dt,ye,P,Yt,Kt),ie=new oR(F,at),Ht=new Gw,Bt=new Yw(ye),de=new J2(F,Dt,E,St,y,p),oe=new jw(F,St,P),wt=new lR(Z,Q,P,E),Ot=new $2(Z,ye,Q),bt=new h3(Z,ye,Q),Q.programs=Lt.programs,F.capabilities=P,F.extensions=ye,F.properties=at,F.renderLists=Ht,F.shadowMap=oe,F.state=E,F.info=Q}A!==yi&&(O=new v3(A,i.width,i.height,d,l,u));const Xt=new rR(F,Z);this.xr=Xt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(w){w!==void 0&&(nt=w,this.setSize(Et,q,!1))},this.getSize=function(w){return w.set(Et,q)},this.setSize=function(w,V,gt=!0){if(Xt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=w,q=V,i.width=Math.floor(w*nt),i.height=Math.floor(V*nt),gt===!0&&(i.style.width=w+"px",i.style.height=V+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Et*nt,q*nt).floor()},this.setDrawingBufferSize=function(w,V,gt){Et=w,q=V,nt=gt,i.width=Math.floor(w*gt),i.height=Math.floor(V*gt),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(A===yi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(xt)},this.getViewport=function(w){return w.copy(st)},this.setViewport=function(w,V,gt,ct){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,V,gt,ct),E.viewport(xt.copy(st).multiplyScalar(nt).round())},this.getScissor=function(w){return w.copy(ut)},this.setScissor=function(w,V,gt,ct){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,V,gt,ct),E.scissor(qt.copy(ut).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){E.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,gt=!0){let ct=0;if(w){let ft=!1;if(dt!==null){const Gt=dt.texture.format;ft=M.has(Gt)}if(ft){const Gt=dt.texture.type,Zt=b.has(Gt),zt=de.getClearColor(),$t=de.getClearAlpha(),te=zt.r,fe=zt.g,ge=zt.b;Zt?(L[0]=te,L[1]=fe,L[2]=ge,L[3]=$t,Z.clearBufferuiv(Z.COLOR,0,L)):(z[0]=te,z[1]=fe,z[2]=ge,z[3]=$t,Z.clearBufferiv(Z.COLOR,0,z))}else ct|=Z.COLOR_BUFFER_BIT}V&&(ct|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ct|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&Z.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),W=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ui,!1),de.dispose(),Ht.dispose(),Bt.dispose(),at.dispose(),Dt.dispose(),St.dispose(),Yt.dispose(),wt.dispose(),Lt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Pr),Xt.removeEventListener("sessionend",Ya),Ji.stop()};function Oe(w){w.preventDefault(),Rx("WebGLRenderer: Context Lost."),G=!0}function me(){Rx("WebGLRenderer: Context Restored."),G=!1;const w=Q.autoReset,V=oe.enabled,gt=oe.autoUpdate,ct=oe.needsUpdate,ft=oe.type;ne(),Q.autoReset=w,oe.enabled=V,oe.autoUpdate=gt,oe.needsUpdate=ct,oe.type=ft}function ui(w){He("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mi(w){const V=w.target;V.removeEventListener("dispose",Mi),_f(V)}function _f(w){ms(w),at.remove(w)}function ms(w){const V=at.get(w).programs;V!==void 0&&(V.forEach(function(gt){Lt.releaseProgram(gt)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,gt,ct,ft,Gt){V===null&&(V=qe);const Zt=ft.isMesh&&ft.matrixWorld.determinantAffine()<0,zt=No(w,V,gt,ct,ft);E.setMaterial(ct,Zt);let $t=gt.index,te=1;if(ct.wireframe===!0){if($t=_t.getWireframeAttribute(gt),$t===void 0)return;te=2}const fe=gt.drawRange,ge=gt.attributes.position;let Qt=fe.start*te,Ae=(fe.start+fe.count)*te;Gt!==null&&(Qt=Math.max(Qt,Gt.start*te),Ae=Math.min(Ae,(Gt.start+Gt.count)*te)),$t!==null?(Qt=Math.max(Qt,0),Ae=Math.min(Ae,$t.count)):ge!=null&&(Qt=Math.max(Qt,0),Ae=Math.min(Ae,ge.count));const be=Ae-Qt;if(be<0||be===1/0)return;Yt.setup(ft,ct,zt,gt,$t);let Je,ke=Ot;if($t!==null&&(Je=Nt.get($t),ke=bt,ke.setIndex(Je)),ft.isMesh)ct.wireframe===!0?(E.setLineWidth(ct.wireframeLinewidth*Be()),ke.setMode(Z.LINES)):ke.setMode(Z.TRIANGLES);else if(ft.isLine){let yn=ct.linewidth;yn===void 0&&(yn=1),E.setLineWidth(yn*Be()),ft.isLineSegments?ke.setMode(Z.LINES):ft.isLineLoop?ke.setMode(Z.LINE_LOOP):ke.setMode(Z.LINE_STRIP)}else ft.isPoints?ke.setMode(Z.POINTS):ft.isSprite&&ke.setMode(Z.TRIANGLES);if(ft.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))ke.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{const yn=ft._multiDrawStarts,Vt=ft._multiDrawCounts,cn=ft._multiDrawCount,Pe=$t?Nt.get($t).bytesPerElement:1,Wn=at.get(ct).currentProgram.getUniforms();for(let ci=0;ci<cn;ci++)Wn.setValue(Z,"_gl_DrawID",ci),ke.render(yn[ci]/Pe,Vt[ci])}else if(ft.isInstancedMesh)ke.renderInstances(Qt,be,ft.count);else if(gt.isInstancedBufferGeometry){const yn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Vt=Math.min(gt.instanceCount,yn);ke.renderInstances(Qt,be,Vt)}else ke.render(Qt,be)};function Or(w,V,gt,ct){W!==null&&w.isNodeMaterial&&W.setObject(ct,w),re===!0&&Kt.setState(w,gt,!1),w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=li,w.needsUpdate=!0,zr(w,V,ct),w.side=cs,w.needsUpdate=!0,zr(w,V,ct),w.side=Oi):zr(w,V,ct)}this.compile=function(w,V,gt=null){gt===null&&(gt=w),W!==null&&W.renderStart(w,V,gt),D=Bt.get(gt),D.init(V),T.push(D),gt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(V.layers)&&(D.pushLight(ft),ft.castShadow&&D.pushShadow(ft))}),w!==gt&&w.traverseVisible(function(ft){ft.isLight&&ft.layers.test(V.layers)&&(D.pushLight(ft),ft.castShadow&&D.pushShadow(ft))}),D.setupLights(),W!==null&&W.updateLights(D.state.lightsArray),le=this.localClippingEnabled,re=Kt.init(this.clippingPlanes,le),re===!0&&Kt.setGlobalState(this.clippingPlanes,V),W!==null&&oe.render(D.state.shadowsArray,gt,V);const ct=new Set;return w.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;const Gt=ft.material;if(Gt)if(Array.isArray(Gt))for(let Zt=0;Zt<Gt.length;Zt++){const zt=Gt[Zt];Or(zt,gt,V,ft),ct.add(zt)}else Or(Gt,gt,V,ft),ct.add(Gt)}),D=T.pop(),W!==null&&W.renderEnd(),ct},this.compileAsync=function(w,V,gt=null){const ct=this.compile(w,V,gt);return new Promise(ft=>{function Gt(){if(ct.forEach(function(Zt){const $t=at.get(Zt).currentProgram;($t===void 0||$t.isReady())&&ct.delete(Zt)}),ct.size===0){ft(w);return}setTimeout(Gt,10)}ye.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Wa=null;function Sa(w){Wa&&Wa(w)}function Pr(){Ji.stop()}function Ya(){Ji.start()}const Ji=new Sy;Ji.setAnimationLoop(Sa),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){Wa=w,Xt.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},Xt.addEventListener("sessionstart",Pr),Xt.addEventListener("sessionend",Ya),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(w,V);const gt=Xt.enabled===!0&&Xt.isPresenting===!0,ct=O!==null&&(dt===null||gt)&&O.begin(F,dt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(V),V=Xt.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,V,dt),D=Bt.get(w,T.length),D.init(V),D.state.textureUnits=vt.getTextureUnits(),T.push(D),Wt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Rt.setFromProjectionMatrix(Wt,ma,V.reversedDepth),le=this.localClippingEnabled,re=Kt.init(this.clippingPlanes,le),U=Ht.get(w,N.length),U.init(),N.push(U),Xt.enabled===!0&&Xt.isPresenting===!0){const Zt=F.xr.getDepthSensingMesh();Zt!==null&&Ao(Zt,V,-1/0,F.sortObjects)}Ao(w,V,0,F.sortObjects),U.finish(),W!==null&&W.updateLights(D.state.lightsArray),F.sortObjects===!0&&U.sort(At,Ut),Se=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Se&&de.addToRenderList(U,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Kt.beginShadows();const ft=D.state.shadowsArray;if(oe.render(ft,w,V),re===!0&&Kt.endShadows(),(ct&&O.hasRenderPass())===!1){const Zt=U.opaque,zt=U.transmissive;if(D.setupLights(),V.isArrayCamera){const $t=V.cameras;if(zt.length>0)for(let te=0,fe=$t.length;te<fe;te++){const ge=$t[te];gs(Zt,zt,w,ge)}Se&&de.render(w);for(let te=0,fe=$t.length;te<fe;te++){const ge=$t[te];wo(U,w,ge,ge.viewport)}}else zt.length>0&&gs(Zt,zt,w,V),Se&&de.render(w),wo(U,w,V)}dt!==null&&Y===0&&(vt.updateMultisampleRenderTarget(dt),vt.updateRenderTargetMipmap(dt)),ct&&O.end(F),w.isScene===!0&&w.onAfterRender(F,w,V),Yt.resetDefaultState(),rt=-1,lt=null,T.pop(),T.length>0?(D=T[T.length-1],vt.setTextureUnits(D.state.textureUnits),re===!0&&Kt.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,N.pop(),N.length>0?U=N[N.length-1]:U=null,W!==null&&W.renderEnd()};function Ao(w,V,gt,ct){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Rt)){ct&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Wt);const Zt=St.update(w),zt=w.material;zt.visible&&U.push(w,Zt,zt,gt,ve.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Rt))){const Zt=St.update(w),zt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),ve.copy(Zt.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(Wt)),Array.isArray(zt)){const $t=Zt.groups;for(let te=0,fe=$t.length;te<fe;te++){const ge=$t[te],Qt=zt[ge.materialIndex];Qt&&Qt.visible&&U.push(w,Zt,Qt,gt,ve.z,ge,V)}}else zt.visible&&U.push(w,Zt,zt,gt,ve.z,null,V)}}const Gt=w.children;for(let Zt=0,zt=Gt.length;Zt<zt;Zt++)Ao(Gt[Zt],V,gt,ct)}function wo(w,V,gt,ct){const{opaque:ft,transmissive:Gt,transparent:Zt}=w;D.setupLightsView(gt),re===!0&&Kt.setGlobalState(F.clippingPlanes,gt),ct&&E.viewport(xt.copy(ct)),ft.length>0&&ji(ft,V,gt),Gt.length>0&&ji(Gt,V,gt),Zt.length>0&&ji(Zt,V,gt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function gs(w,V,gt,ct){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ct.id]===void 0){const Qt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ct.id]=new Pi(1,1,{generateMipmaps:!0,type:Qt?_a:yi,minFilter:Nr,samples:Math.max(4,P.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Gt=D.state.transmissionRenderTarget[ct.id],Zt=ct.viewport||xt;Gt.setSize(Zt.z*F.transmissionResolutionScale,Zt.w*F.transmissionResolutionScale);const zt=F.getRenderTarget(),$t=F.getActiveCubeFace(),te=F.getActiveMipmapLevel();F.setRenderTarget(Gt),F.getClearColor(I),mt=F.getClearAlpha(),mt<1&&F.setClearColor(16777215,.5),F.clear(),Se&&de.render(gt);const fe=F.toneMapping;F.toneMapping=ga;const ge=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),D.setupLightsView(ct),re===!0&&Kt.setGlobalState(F.clippingPlanes,ct),ji(w,gt,ct),vt.updateMultisampleRenderTarget(Gt),vt.updateRenderTargetMipmap(Gt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ae=0,be=V.length;Ae<be;Ae++){const Je=V[Ae],{object:ke,geometry:yn,material:Vt,group:cn}=Je;if(Vt.side===Oi&&ke.layers.test(ct.layers)){const Pe=Vt.side;Vt.side=li,Vt.needsUpdate=!0,Zl(ke,gt,ct,yn,Vt,cn),Vt.side=Pe,Vt.needsUpdate=!0,Qt=!0}}Qt===!0&&(vt.updateMultisampleRenderTarget(Gt),vt.updateRenderTargetMipmap(Gt))}F.setRenderTarget(zt,$t,te),F.setClearColor(I,mt),ge!==void 0&&(ct.viewport=ge),F.toneMapping=fe}function ji(w,V,gt){const ct=V.isScene===!0?V.overrideMaterial:null;for(let ft=0,Gt=w.length;ft<Gt;ft++){const Zt=w[ft],{object:zt,geometry:$t,group:te}=Zt;let fe=Zt.material;fe.allowOverride===!0&&ct!==null&&(fe=ct),zt.layers.test(gt.layers)&&Zl(zt,V,gt,$t,fe,te)}}function Zl(w,V,gt,ct,ft,Gt){W!==null&&ft.isNodeMaterial&&W.setObject(w,ft),w.onBeforeRender(F,V,gt,ct,ft,Gt),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ft.onBeforeRender(F,V,gt,ct,w,Gt),ft.transparent===!0&&ft.side===Oi&&ft.forceSinglePass===!1?(ft.side=li,ft.needsUpdate=!0,F.renderBufferDirect(gt,V,ct,ft,w,Gt),ft.side=cs,ft.needsUpdate=!0,F.renderBufferDirect(gt,V,ct,ft,w,Gt),ft.side=Oi):F.renderBufferDirect(gt,V,ct,ft,w,Gt),w.onAfterRender(F,V,gt,ct,ft,Gt)}function zr(w,V,gt){V.isScene!==!0&&(V=qe);const ct=at.get(w),ft=D.state.lights,Gt=D.state.shadowsArray,Zt=ft.state.version,zt=Lt.getParameters(w,ft.state,Gt,V,gt,D.state.lightProbeGridArray),$t=Lt.getProgramCacheKey(zt);let te=ct.programs;ct.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,ct.fog=V.fog;const fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ct.envMap=Dt.get(w.envMap||ct.environment,fe),ct.envMapRotation=ct.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",Mi),te=new Map,ct.programs=te);let ge=te.get($t);if(ge!==void 0){if(ct.currentProgram===ge&&ct.lightsStateVersion===Zt)return Co(w,zt),ge}else zt.uniforms=Lt.getUniforms(w),W!==null&&w.isNodeMaterial&&W.build(w,gt,zt),w.onBeforeCompile(zt,F),ge=Lt.acquireProgram(zt,$t),te.set($t,ge),ct.uniforms=zt.uniforms;const Qt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qt.clippingPlanes=Kt.uniform),Co(w,zt),ct.needsLights=Jl(w),ct.lightsStateVersion=Zt,ct.needsLights&&(Qt.ambientLightColor.value=ft.state.ambient,Qt.lightProbe.value=ft.state.probe,Qt.sunLights.value=ft.state.sun,Qt.sunLightShadows.value=ft.state.sunShadow,Qt.directionalLights.value=ft.state.directional,Qt.directionalLightShadows.value=ft.state.directionalShadow,Qt.spotLights.value=ft.state.spot,Qt.spotLightShadows.value=ft.state.spotShadow,Qt.rectAreaLights.value=ft.state.rectArea,Qt.ltc_1.value=ft.state.rectAreaLTC1,Qt.ltc_2.value=ft.state.rectAreaLTC2,Qt.pointLights.value=ft.state.point,Qt.pointLightShadows.value=ft.state.pointShadow,Qt.hemisphereLights.value=ft.state.hemi,Qt.sunShadowMatrix.value=ft.state.sunShadowMatrix,Qt.sunShadowCascade.value=ft.state.sunShadowCascade,Qt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Qt.spotLightMatrix.value=ft.state.spotLightMatrix,Qt.spotLightMap.value=ft.state.spotLightMap,Qt.pointShadowMatrix.value=ft.state.pointShadowMatrix),ct.lightProbeGrid=D.state.lightProbeGridArray.length>0,ct.currentProgram=ge,ct.uniformsList=null,ge}function Ro(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=jc.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Co(w,V){const gt=at.get(w);gt.outputColorSpace=V.outputColorSpace,gt.batching=V.batching,gt.batchingColor=V.batchingColor,gt.instancing=V.instancing,gt.instancingColor=V.instancingColor,gt.instancingMorph=V.instancingMorph,gt.skinning=V.skinning,gt.morphTargets=V.morphTargets,gt.morphNormals=V.morphNormals,gt.morphColors=V.morphColors,gt.morphTargetsCount=V.morphTargetsCount,gt.numClippingPlanes=V.numClippingPlanes,gt.numIntersection=V.numClipIntersection,gt.vertexAlphas=V.vertexAlphas,gt.vertexTangents=V.vertexTangents,gt.toneMapping=V.toneMapping}function Do(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(V.matrixWorld);for(let gt=0,ct=w.length;gt<ct;gt++){const ft=w[gt];if(ft.texture!==null&&ft.boundingBox.containsPoint(C))return ft}return null}function No(w,V,gt,ct,ft){V.isScene!==!0&&(V=qe),vt.resetTextureUnits();const Gt=V.fog,Zt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?V.environment:null,zt=dt===null?F.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ze.workingColorSpace,$t=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,te=Dt.get(ct.envMap||Zt,$t),fe=ct.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ge=!!gt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!gt.morphAttributes.position,Ae=!!gt.morphAttributes.normal,be=!!gt.morphAttributes.color;let Je=ga;ct.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Je=F.toneMapping);const ke=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,yn=ke!==void 0?ke.length:0,Vt=at.get(ct),cn=D.state.lights;if(re===!0&&(le===!0||w!==lt)){const De=w===lt&&ct.id===rt;Kt.setState(ct,w,De)}let Pe=!1;ct.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==cn.state.version||Vt.outputColorSpace!==zt||ft.isBatchedMesh&&Vt.batching===!1||!ft.isBatchedMesh&&Vt.batching===!0||ft.isBatchedMesh&&Vt.batchingColor===!0&&ft._colorsTexture===null||ft.isBatchedMesh&&Vt.batchingColor===!1&&ft._colorsTexture!==null||ft.isInstancedMesh&&Vt.instancing===!1||!ft.isInstancedMesh&&Vt.instancing===!0||ft.isSkinnedMesh&&Vt.skinning===!1||!ft.isSkinnedMesh&&Vt.skinning===!0||ft.isInstancedMesh&&Vt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Vt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Vt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Vt.instancingMorph===!1&&ft.morphTexture!==null||Vt.envMap!==te||ct.fog===!0&&Vt.fog!==Gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Kt.numPlanes||Vt.numIntersection!==Kt.numIntersection)||Vt.vertexAlphas!==fe||Vt.vertexTangents!==ge||Vt.morphTargets!==Qt||Vt.morphNormals!==Ae||Vt.morphColors!==be||Vt.toneMapping!==Je||Vt.morphTargetsCount!==yn||!!Vt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Vt.__version=ct.version);let Wn=Vt.currentProgram;Pe===!0&&(Wn=zr(ct,V,ft),W&&ct.isNodeMaterial&&W.onUpdateProgram(ct,Wn,Vt));let ci=!1,$i=!1,Ee=!1;const Ge=Wn.getUniforms(),en=Vt.uniforms;if(E.useProgram(Wn.program)&&(ci=!0,$i=!0,Ee=!0),ct.id!==rt&&(rt=ct.id,$i=!0),Vt.needsLights){const De=Do(D.state.lightProbeGridArray,ft);Vt.lightProbeGrid!==De&&(Vt.lightProbeGrid=De,$i=!0)}if(ci||lt!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ge.setValue(Z,"projectionMatrix",w.projectionMatrix),Ge.setValue(Z,"viewMatrix",w.matrixWorldInverse);const fn=Ge.map.cameraPosition;fn!==void 0&&fn.setValue(Z,jt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Ge.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ge.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),lt!==w&&(lt=w,$i=!0,Ee=!0)}if(Vt.needsLights&&(cn.state.sunShadowMap.length>0&&Ge.setValue(Z,"sunShadowMap",cn.state.sunShadowMap,vt),cn.state.directionalShadowMap.length>0&&Ge.setValue(Z,"directionalShadowMap",cn.state.directionalShadowMap,vt),cn.state.spotShadowMap.length>0&&Ge.setValue(Z,"spotShadowMap",cn.state.spotShadowMap,vt),cn.state.pointShadowMap.length>0&&Ge.setValue(Z,"pointShadowMap",cn.state.pointShadowMap,vt)),ft.isSkinnedMesh){Ge.setOptional(Z,ft,"bindMatrix"),Ge.setOptional(Z,ft,"bindMatrixInverse");const De=ft.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ge.setValue(Z,"boneTexture",De.boneTexture,vt))}ft.isBatchedMesh&&(Ge.setOptional(Z,ft,"batchingTexture"),Ge.setValue(Z,"batchingTexture",ft._matricesTexture,vt),Ge.setOptional(Z,ft,"batchingIdTexture"),Ge.setValue(Z,"batchingIdTexture",ft._indirectTexture,vt),Ge.setOptional(Z,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Ge.setValue(Z,"batchingColorTexture",ft._colorsTexture,vt));const fi=gt.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&J.update(ft,gt,Wn),($i||Vt.receiveShadow!==ft.receiveShadow)&&(Vt.receiveShadow=ft.receiveShadow,Ge.setValue(Z,"receiveShadow",ft.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=cR()),$i){if(Ge.setValue(Z,"toneMappingExposure",F.toneMappingExposure),Vt.needsLights&&Ql(en,Ee),Gt&&ct.fog===!0&&ie.refreshFogUniforms(en,Gt),ie.refreshMaterialUniforms(en,ct,nt,q,D.state.transmissionRenderTarget[w.id]),Vt.needsLights&&Vt.lightProbeGrid){const De=Vt.lightProbeGrid;en.probesSH.value=De.texture,en.probesMin.value.copy(De.boundingBox.min),en.probesMax.value.copy(De.boundingBox.max),en.probesResolution.value.copy(De.resolution)}jc.upload(Z,Ro(Vt),en,vt)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(jc.upload(Z,Ro(Vt),en,vt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ge.setValue(Z,"center",ft.center),Ge.setValue(Z,"modelViewMatrix",ft.modelViewMatrix),Ge.setValue(Z,"normalMatrix",ft.normalMatrix),Ge.setValue(Z,"modelMatrix",ft.matrixWorld),ct.uniformsGroups!==void 0){const De=ct.uniformsGroups;for(let fn=0,ya=De.length;fn<ya;fn++){const jl=De[fn];wt.update(jl,Wn),wt.bind(jl,Wn)}}return Wn}function Ql(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(w,V,gt){const ct=at.get(w);ct.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),at.get(w.texture).__webglTexture=V,at.get(w.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:gt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const gt=at.get(w);gt.__webglFramebuffer=V,gt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,gt=0){dt=w,K=V,Y=gt;let ct=null,ft=!1,Gt=!1;if(w){const zt=at.get(w);if(zt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,zt.__webglFramebuffer),xt.copy(w.viewport),qt.copy(w.scissor),Tt=w.scissorTest,E.viewport(xt),E.scissor(qt),E.setScissorTest(Tt),rt=-1;return}else if(zt.__webglFramebuffer===void 0)vt.setupRenderTarget(w);else if(zt.__hasExternalTextures)vt.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const fe=w.depthTexture;if(zt.__boundDepthTexture!==fe){if(fe!==null&&at.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Gt=!0);const te=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[V])?ct=te[V][gt]:ct=te[V],ft=!0):w.samples>0&&vt.useMultisampledRTT(w)===!1?ct=at.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?ct=te[gt]:ct=te,xt.copy(w.viewport),qt.copy(w.scissor),Tt=w.scissorTest}else xt.copy(st).multiplyScalar(nt).floor(),qt.copy(ut).multiplyScalar(nt).floor(),Tt=Ct;if(gt!==0&&(ct=it),E.bindFramebuffer(Z.FRAMEBUFFER,ct)&&E.drawBuffers(w,ct),E.viewport(xt),E.scissor(qt),E.setScissorTest(Tt),ft){const zt=at.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,gt)}else if(Gt){const zt=V;for(let $t=0;$t<w.textures.length;$t++){const te=at.get(w.textures[$t]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+$t,te.__webglTexture,gt,zt)}}else if(w!==null&&gt!==0){const zt=at.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,zt.__webglTexture,gt)}rt=-1};function bi(w){const V=at.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=P.textureFormatReadable(w.format),V.__typeReadable=P.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,gt,ct,ft,Gt,Zt,zt=0){if(!(w&&w.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&($t=$t[Zt]),$t){E.bindFramebuffer(Z.FRAMEBUFFER,$t);try{const te=w.textures[zt],fe=te.format,ge=te.type;w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt);const Qt=bi(te);if(Qt.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-ct&&gt>=0&&gt<=w.height-ft&&Z.readPixels(V,gt,ct,ft,Pt.convert(fe),Pt.convert(ge),Gt)}finally{const te=dt!==null?at.get(dt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,V,gt,ct,ft,Gt,Zt,zt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&($t=$t[Zt]),$t)if(V>=0&&V<=w.width-ct&&gt>=0&&gt<=w.height-ft){E.bindFramebuffer(Z.FRAMEBUFFER,$t);const te=w.textures[zt],fe=te.format,ge=te.type;w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+zt);const Qt=bi(te);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ae),Z.bufferData(Z.PIXEL_PACK_BUFFER,Gt.byteLength,Z.STREAM_READ),Z.readPixels(V,gt,ct,ft,Pt.convert(fe),Pt.convert(ge),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const be=dt!==null?at.get(dt).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,be);const Je=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await sE(Z,Je,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ae),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Gt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(Ae),Z.deleteSync(Je),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,gt=0){const ct=Math.pow(2,-gt),ft=Math.floor(w.image.width*ct),Gt=Math.floor(w.image.height*ct),Zt=V!==null?V.x:0,zt=V!==null?V.y:0;vt.setTexture2D(w,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,gt,0,0,Zt,zt,ft,Gt),E.unbindTexture()},this.copyTextureToTexture=function(w,V,gt=null,ct=null,ft=0,Gt=0){let Zt,zt,$t,te,fe,ge,Qt,Ae,be;const Je=w.isCompressedTexture?w.mipmaps[Gt]:w.image;if(gt!==null)Zt=gt.max.x-gt.min.x,zt=gt.max.y-gt.min.y,$t=gt.isBox3?gt.max.z-gt.min.z:1,te=gt.min.x,fe=gt.min.y,ge=gt.isBox3?gt.min.z:0;else{const en=Math.pow(2,-ft);Zt=Math.floor(Je.width*en),zt=Math.floor(Je.height*en),w.isDataArrayTexture?$t=Je.depth:w.isData3DTexture?$t=Math.floor(Je.depth*en):$t=1,te=0,fe=0,ge=0}ct!==null?(Qt=ct.x,Ae=ct.y,be=ct.z):(Qt=0,Ae=0,be=0);const ke=Pt.convert(V.format),yn=Pt.convert(V.type);let Vt;V.isData3DTexture?(vt.setTexture3D(V,0),Vt=Z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(vt.setTexture2DArray(V,0),Vt=Z.TEXTURE_2D_ARRAY):(vt.setTexture2D(V,0),Vt=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,V.unpackAlignment);const cn=E.getParameter(Z.UNPACK_ROW_LENGTH),Pe=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(Z.UNPACK_SKIP_PIXELS),ci=E.getParameter(Z.UNPACK_SKIP_ROWS),$i=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,te),E.pixelStorei(Z.UNPACK_SKIP_ROWS,fe),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,ge);const Ee=w.isDataArrayTexture||w.isData3DTexture,Ge=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const en=at.get(w),fi=at.get(V),De=at.get(en.__renderTarget),fn=at.get(fi.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,De.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let ya=0;ya<$t;ya++)Ee&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(w).__webglTexture,ft,ge+ya),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(V).__webglTexture,Gt,be+ya)),Z.blitFramebuffer(te,fe,Zt,zt,Qt,Ae,Zt,zt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ft!==0||w.isRenderTargetTexture||at.has(w)){const en=at.get(w),fi=at.get(V);E.bindFramebuffer(Z.READ_FRAMEBUFFER,H),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,$);for(let De=0;De<$t;De++)Ee?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,en.__webglTexture,ft,ge+De):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,en.__webglTexture,ft),Ge?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,fi.__webglTexture,Gt,be+De):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,fi.__webglTexture,Gt),ft!==0?Z.blitFramebuffer(te,fe,Zt,zt,Qt,Ae,Zt,zt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ge?Z.copyTexSubImage3D(Vt,Gt,Qt,Ae,be+De,te,fe,Zt,zt):Z.copyTexSubImage2D(Vt,Gt,Qt,Ae,te,fe,Zt,zt);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ge?w.isDataTexture||w.isData3DTexture?Z.texSubImage3D(Vt,Gt,Qt,Ae,be,Zt,zt,$t,ke,yn,Je.data):V.isCompressedArrayTexture?Z.compressedTexSubImage3D(Vt,Gt,Qt,Ae,be,Zt,zt,$t,ke,Je.data):Z.texSubImage3D(Vt,Gt,Qt,Ae,be,Zt,zt,$t,ke,yn,Je):w.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Gt,Qt,Ae,Zt,zt,ke,yn,Je.data):w.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Gt,Qt,Ae,Je.width,Je.height,ke,Je.data):Z.texSubImage2D(Z.TEXTURE_2D,Gt,Qt,Ae,Zt,zt,ke,yn,Je);E.pixelStorei(Z.UNPACK_ROW_LENGTH,cn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Pe),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,ci),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,$i),Gt===0&&V.generateMipmaps&&Z.generateMipmap(Vt),E.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?vt.setTextureCube(w,0):w.isData3DTexture?vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?vt.setTexture2DArray(w,0):vt.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){K=0,Y=0,dt=null,E.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=ze._getUnpackColorSpace()}}const hR="/scale-tour/tex/",$c={ceres:{type:"planet",tex:"ceres",hi:!0,spin:.03},makemake:{type:"planet",tex:"makemake",hi:!0,spin:.03},pluto:{type:"planet",tex:"pluto",hi:!0,atmo:[.55,.7,1,.22],lean:.5,spin:.02},europa:{type:"planet",tex:"europa",spin:.02},titan:{type:"planet",tex:"titan",atmo:[1,.66,.3,1.25],atmoScale:1.06,spin:.015},kepler22b:{type:"planet",tex:"kepler22b",atmo:[.45,.75,1,.9],tilt:.3,spin:.03},moon:{type:"planet",tex:"moon",hi:!0,spin:.02},mercury:{type:"planet",tex:"mercury",hi:!0,spin:.02},mars:{type:"planet",tex:"mars",hi:!0,atmo:[.9,.55,.4,.35],tilt:.44,spin:.03},venus:{type:"planet",tex:"venus",hi:!0,atmo:[1,.9,.7,.5],spin:.01},earth:{type:"planet",tex:"earth",hi:!0,clouds:!0,atmo:[.35,.6,1,1],tilt:.41,spin:.03},neptune:{type:"planet",tex:"neptune",atmo:[.4,.55,1,.8],tilt:.49,spin:.03},uranus:{type:"planet",tex:"uranus",atmo:[.6,.9,.95,.8],tilt:1.7,spin:.03},saturn:{type:"planet",tex:"saturn",hi:!0,ring:!0,atmo:[.95,.85,.6,.3],tilt:.47,spin:.04},jupiter:{type:"planet",tex:"jupiter",hi:!0,atmo:[.95,.8,.6,.3],tilt:.05,spin:.04},sun:{type:"star",scale:10,contrast:.3,speck:.5,spots:5,spotSize:.03,active:3,actSize:.07,glow:.9,flame:.6,proms:[[.55,-1.45,.22,.16,1.45],[-.45,1.5,.16,.12,1.85],[.1,1.55,.11,.08,1.85]]},sirius:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4,proms:[[.4,-1.5,.12,.08,1.65]]},pollux:{type:"star",scale:4.5,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.5,-1.45,.3,.22,1.45],[-.5,1.45,.24,.18,1.65]]},arcturus:{type:"star",scale:4.2,contrast:.45,speck:.5,spots:0,spotSize:0,active:3,actSize:.08,glow:.95,flame:.7,proms:[[.6,-1.5,.32,.24,1.75],[-.4,1.5,.27,.2,1.55]]},aldebaran:{type:"star",scale:4,contrast:.5,speck:.5,spots:0,spotSize:0,active:3,actSize:.09,glow:.95,flame:.75,proms:[[.55,-1.45,.38,.28,1.55],[-.5,1.5,.32,.24,1.75]]},rigel:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1.05,flame:.4,proms:[[-.4,1.5,.12,.08,1.85]]},antares:{type:"star",scale:3.4,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.6,-1.45,.51,.38,1.45],[-.55,1.5,.46,.34,1.65],[.05,1.55,.27,.2,1.65]]},betelgeuse:{type:"star",scale:5,contrast:.45,speck:.55,spots:0,spotSize:0,active:4,actSize:.15,glow:1,flame:.9,proms:[[.62,-1.42,.57,.42,1.8],[-.6,1.48,.51,.38,1.75]]},uyscuti:{type:"star",scale:3.3,contrast:.55,speck:.45,spots:0,spotSize:0,active:3,actSize:.1,glow:.95,flame:.85,proms:[[.5,-1.5,.54,.4,1.55],[-.6,1.45,.49,.36,1.65],[-.1,-1.55,.3,.22,1.65]]},elnath:{type:"star",scale:7,contrast:.16,speck:.3,spots:0,spotSize:0,active:2,actSize:.06,glow:1,flame:.4},aludra:{type:"star",scale:6,contrast:.2,speck:.35,spots:0,spotSize:0,active:3,actSize:.07,glow:1.05,flame:.5},pistol:{type:"star",scale:5.5,contrast:.24,speck:.35,spots:0,spotSize:0,active:3,actSize:.08,glow:1.1,flame:.6},vycma:{type:"star",scale:3.2,contrast:.58,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},st218:{type:"star",scale:3,contrast:.6,speck:.45,spots:0,spotSize:0,active:4,actSize:.12,glow:1,flame:.95},sgra:{type:"bh",disk:[2.6,5.2],hot:[.82,.9,1],cool:[.3,.45,.95],ring:[.82,.9,1],gain:.4,quasar:0,tilt:.2,roll:-.12},s5:{type:"bh",disk:[2.6,6],hot:[1,.94,.84],cool:[.95,.6,.32],ring:[1,.92,.8],gain:1,quasar:.5,tilt:.28,roll:.1},ton618:{type:"bh",disk:[2.6,6.2],hot:[1,.72,.34],cool:[1,.3,.02],ring:[1,.8,.5],gain:1.5,quasar:1.1,tilt:.16,roll:-.08},heliosphere:{type:"proc",kind:"heliosphere"},oort:{type:"proc",kind:"oort"},helix:{type:"image",src:"helix.webp",fill:.6,aspect:1,mask:[.48,.48],sat:.95,gain:1},pillars:{type:"image",src:"pillars.webp",fill:1.1,aspect:2560/2053,mask:[.47,.48],sat:.9,gain:.95},horsehead:{type:"image",src:"horsehead.webp",fill:.9,aspect:2560/2449,mask:[.48,.48],sat:.95,gain:1},orion:{type:"image",src:"orion.webp",fill:1,aspect:1,mask:[.5,.5],sat:.85,gain:.95},omega:{type:"image",src:"omega.webp",fill:.62,aspect:1,mask:[.46,.46],sat:.8,gain:1.05},segue2:{type:"proc",kind:"dwarf"},tarantula:{type:"image",src:"tarantula.webp",fill:1,aspect:2048/2560,mask:[.49,.47],sat:.9,gain:1},m64:{type:"image",src:"m64.webp",fill:.82,aspect:2560/2422,mask:[.48,.48],sat:.95,gain:1.05},milkyway:{type:"galaxy",arms:2,pitch:.24,bar:1,bulge:.15,dust:1.15,seed:3.1,floc:.55,clump:1,ring:0,tilt:-.95,pa:.5},andromeda:{type:"galaxy",arms:2,pitch:.12,bar:0,bulge:.2,dust:1.25,seed:7.7,floc:.6,clump:.9,ring:.8,tilt:-1.34,pa:-.62,pal:{gold:[1,.9,.74],grey:[.66,.6,.96],blue:[.72,.62,1],dust:[.5,.2,.12],knot:[1,.42,.78],warm:[1,.8,.62],warmR:.6,knotAmt:1,gain:1.7},sats:[[.2,.3,.035,.03,0,1.6],[-.42,-.55,.11,.065,.9,.9]],field:1},ic1101:{type:"proc",kind:"elliptical"},virgo:{type:"proc",kind:"supercluster"},laniakea:{type:"proc",kind:"laniakea"},universe:{type:"proc",kind:"universe"}},_o={saturn:2.3,sgra:5.6,s5:6.2,ton618:6.4,segue2:1.4,ic1101:1.6},Pp={sgra:4,s5:4.4,ton618:4.6};function Ry(o){let t=o>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e6/1e6)}const Tr=o=>Math.sqrt(-2*Math.log(o()+1e-9))*Math.cos(2*Math.PI*o()),Ur=`
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
`;function zi(o){return o.blending=GS,o.blendEquation=ls,o.blendSrc=kp,o.blendDst=af,o.blendSrcAlpha=kp,o.blendDstAlpha=af,o.premultipliedAlpha=!0,o}const Qi=`vec4 premul(vec3 c, float o){ c *= o; return vec4(c, clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0)); }
`;let dR=null;const tf=()=>dR??=new $m(1,160,96);let pR=null;const Xa=()=>pR??=new Eo(1,1);function ef(o,t){return t.transparent=!0,o.fades.push({material:t,base:t.opacity}),t}const ff=1.1,Om=2,CS=1.25,DS=2,mR=new oT,zl=new Map;let Cy=8;function nf(o,t=!0){let i=zl.get(o);return i||(i=new Promise((r,l)=>{mR.load(hR+o,u=>{t&&(u.colorSpace=jn),u.anisotropy=Cy,u.generateMipmaps=!0,u.minFilter=Nr,r(u)},void 0,l)}),zl.set(o,i)),i}function gR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color},l=new bn;i.add(l),r.rot=l;const u=new bn;u.rotation.z=-(t.tilt??0),u.rotation.x=t.lean??.18,l.add(u);const h=ef(r,new Ap({color:new Le(o.color),roughness:1,metalness:0})),d=new sn(tf(),h);u.add(d);let p=null,m=null;if(t.clouds&&(m=ef(r,new Ap({color:16777215,roughness:1,opacity:0,depthWrite:!1})),p=new sn(tf(),m),p.scale.setScalar(1.006),u.add(p)),t.atmo){const[_,g,x,y]=t.atmo,A=zi(new on({uniforms:{uColor:{value:new k(_,g,x)},uStrength:{value:y},opacity:{value:1},uLight:{value:new k(-.55,.45,.7).normalize()}},vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+`uniform vec3 uColor; uniform float uStrength; uniform float opacity; uniform vec3 uLight; varying vec3 vN;
        void main(){ float mu = dot(normalize(vN), vec3(0.,0.,1.)); float rim = pow(1.0 - clamp(mu,0.,1.), 3.0);
          float lit = 0.14 + 0.86*smoothstep(-0.25, 0.6, dot(normalize(vN), uLight)); // faint rim survives on the night side
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,depthWrite:!1,transparent:!0}));r.fades.push({material:A,base:1});const M=new sn(tf(),A);M.scale.setScalar(t.atmoScale??1.035),i.add(M)}if(t.ring){const x=new jm(1.24,2.27,256,1),y=x.attributes.position,A=x.attributes.uv;for(let L=0;L<y.count;L++){const z=Math.hypot(y.getX(L),y.getY(L));A.setXY(L,(z-1.24)/(2.27-1.24),.5)}const M=ef(r,new Ap({color:16777215,side:Oi,roughness:1,depthWrite:!1,opacity:1,alphaTest:.01}));nf("ring.webp").then(L=>{M.map=L,M.needsUpdate=!0});const b=new sn(x,M);b.rotation.x=-Math.PI/2,u.add(b),u.rotation.x=.42}let v=0;return r.wantTex=_=>{const g=_&&t.hi?2:1;if(v>=g)return;v=g;const x=`${t.tex}_${g===2?"4k":"2k"}.webp`;nf(x).then(y=>{h.map=y,h.color.set(16777215),h.needsUpdate=!0}),m&&nf(`clouds_${g===2?"4k":"2k"}.webp`,!1).then(y=>{m.alphaMap=y,m.opacity=.9,r.fades.find(A=>A.material===m).base=.9,m.needsUpdate=!0})},r.update=(_,g,x,y,A)=>{y||(d.rotation.y+=g*(t.spin??.03)*ff*Om*CS*A,p&&(p.rotation.y+=g*(t.spin??.03)*ff*Om*CS*(.25+1*A)))},r}const zp={sun:[44,.45,.6],sirius:[48,.55,.62],rigel:[46,.55,.62],pollux:[30,.3,.75],arcturus:[30,.3,.75],aldebaran:[28,.3,.78],antares:[17,.2,.88],betelgeuse:[16,.18,.9],uyscuti:[16,.2,.88],elnath:[46,.55,.62],aludra:[40,.5,.66],pistol:[36,.45,.7],vycma:[15,.2,.9],st218:[14,.2,.9]},NS={sun:{deep:[.92,.3,.03],mid:[1,.72,.26],bright:[1,.88,.5],hot:[1,.97,.86],prom:[.95,.3,.08],glow:[1,.36,.08]},sirius:{deep:[.14,.36,1],mid:[.5,.74,1],bright:[.86,.97,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.1,.5,1]},pollux:{deep:[.6,.17,.03],mid:[1,.5,.09],bright:[1,.76,.3],hot:[1,.95,.78],prom:[.8,.18,.04]},arcturus:{deep:[.6,.15,.03],mid:[1,.47,.08],bright:[1,.73,.27],hot:[1,.94,.76],prom:[.78,.16,.04]},aldebaran:{deep:[.55,.1,.02],mid:[1,.38,.06],bright:[1,.64,.2],hot:[1,.92,.7],prom:[.72,.12,.03]},rigel:{deep:[.16,.34,.98],mid:[.5,.7,1],bright:[.84,.94,1],hot:[.97,1,1],prom:[.45,.58,1],glow:[.12,.48,1]},antares:{deep:[.42,.04,.02],mid:[.9,.2,.04],bright:[1,.46,.12],hot:[1,.82,.55],prom:[.6,.06,.02]},betelgeuse:{deep:[.8,.26,.03],mid:[1,.54,.09],bright:[1,.82,.32],hot:[1,.95,.72],prom:[.7,.1,.03]},uyscuti:{deep:[.5,.07,.02],mid:[.96,.3,.04],bright:[1,.58,.14],hot:[1,.88,.62],prom:[.62,.08,.02]},elnath:{deep:[.2,.42,1],mid:[.55,.76,1],bright:[.88,.96,1],hot:[.97,1,1],prom:[.5,.64,1],glow:[.15,.52,1]},aludra:{deep:[.18,.38,1],mid:[.52,.72,1],bright:[.86,.95,1],hot:[.97,1,1],prom:[.45,.6,1],glow:[.12,.5,1]},pistol:{deep:[.12,.3,.95],mid:[.45,.66,1],bright:[.82,.92,1],hot:[.96,.99,1],prom:[.4,.55,1],glow:[.1,.42,1]},vycma:{deep:[.45,.05,.02],mid:[.92,.24,.05],bright:[1,.5,.13],hot:[1,.84,.58],prom:[.62,.07,.02]},st218:{deep:[.4,.03,.02],mid:[.86,.18,.04],bright:[1,.42,.1],hot:[1,.78,.5],prom:[.58,.05,.02]}},vR={sun:[6,.24,.19],sirius:[6,.24,.2],rigel:[6,.26,.21],pollux:[4,.3,.22],arcturus:[4,.32,.24],aldebaran:[4,.36,.27],antares:[5,.55,.42],betelgeuse:[5,.6,.46],uyscuti:[5,.55,.42],elnath:[6,.24,.2],aludra:[6,.26,.21],pistol:[6,.32,.26],vycma:[5,.6,.46],st218:[5,.62,.48]},_R=`
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
}`,xR=`
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
}`,SR=`
uniform float uGrow, uDrift;
varying vec2 vUv; varying vec3 vVN;
void main(){
  vUv = uv;
  vec3 p = position;
  float L = length(p);
  float r = mix(0.93, L, uGrow);           // the loop rises out of (and sinks back into) the surface
  p = p/L*r;
  // eruption: the top lifts away first, the loop swells as it goes
  float top = smoothstep(0.0, 0.25, L - 1.0);
  p.y += uDrift*(0.25 + 0.75*top);
  p.xz *= 1.0 + uDrift*0.9*top;
  vVN = normalize(normalMatrix*normal);
  gl_Position = projectionMatrix*modelViewMatrix*vec4(p, 1.0);
}`,yR=`
uniform vec3 uColor, uHotC;
uniform float opacity, uTime, uSeed, uReveal, uBright, uCore, uWide, uSpeed;
varying vec2 vUv; varying vec3 vVN;
void main(){
  float along = vUv.x;
  float tS = uTime*uSpeed;
  float m = min(along, 1.0 - along)*2.0;          // 0 at the footpoints, 1 at the apex
  float vis = smoothstep(uReveal + 0.02, uReveal - 0.2, m);
  if (vis <= 0.001) discard;
  float face = abs(vVN.z);
  float soft = pow(face, 1.6);                     // soft volumetric edge
  float core = pow(face, 9.0);                     // hot inner thread
  // plasma streams up from both feet and twists around the ribbon
  float a = vUv.y*6.2831 + along*9.0 + tS*0.7 + uSeed;
  float flow = snoise(vec3(m*7.0 - tS*0.45, cos(a)*0.9, sin(a)*0.9 + uSeed))*0.5 + 0.5;
  float fine = snoise(vec3(m*28.0 - tS*0.9, cos(a)*2.5 + uSeed, sin(a)*2.5))*0.5 + 0.5;
  float knots = smoothstep(0.45, 0.95, flow);
  float feet = pow(1.0 - m, 5.0);
  float dens = soft*(0.3 + 0.7*knots)*(0.55 + 0.45*fine)*mix(1.15, 0.7, uWide);
  vec3 c = uColor*(0.7 + 0.9*knots);
  c = mix(c, uHotC, clamp(core*uCore*(0.4 + 0.8*fine) + feet*0.55, 0.0, 1.0));
  c += uHotC*feet*0.35;
  gl_FragColor = premul(c*dens*vis*uBright, opacity*clamp(uBright, 0.0, 1.0));
}`;function MR(o,t){const i=new bn,r={group:i,fades:[],dot:"#fff"},l=o.tempK??5800,u=NS[o.id]??NS.sun;r.dot=`rgb(${u.bright[0]*255|0},${u.bright[1]*255|0},${u.bright[2]*255|0})`;const h=Ry(l*7+3),d=(Tt,I)=>new k(Math.cos(Tt)*Math.sin(I),Math.sin(Tt),Math.cos(Tt)*Math.cos(I)),p=[];let m=0,v=0;for(let Tt=0;Tt<6;Tt++)if(Tt<t.spots){const I=Tt===0||h()<.45;I?(m=(h()<.5?-1:1)*(.14+h()*.32),v=-.8+h()*1.6):(v-=.03+h()*.11,m+=(h()-.5)*.07);const mt=d(m,v);p.push(new tn(mt.x,mt.y,mt.z,t.spotSize*(I?.8+h()*.6:.35+h()*.35)))}else p.push(new tn(0,0,1,0));const _=[];for(let Tt=0;Tt<5;Tt++)if(Tt<t.active){const I=d((h()-.5)*1.1,(h()-.5)*1.8);_.push(new tn(I.x,I.y,I.z,t.actSize*(.7+h()*.6)))}else _.push(new tn(0,0,1,0));const g=Tt=>new k(...Tt),x={uDeep:{value:g(u.deep)},uMid:{value:g(u.mid)},uBright:{value:g(u.bright)},uHot:{value:g(u.hot)},uTime:{value:0},uScale:{value:t.scale},uContrast:{value:t.contrast},uPx:{value:500},uSeed:{value:l%97*.13},uRim:{value:1},uSpeck:{value:t.speck},uCell:{value:(zp[o.id]??[30,.3,.75])[0]},uGran:{value:(zp[o.id]??[30,.3,.75])[1]},uLimbD:{value:(zp[o.id]??[30,.3,.75])[2]},uSpots:{value:p},uNSpots:{value:t.spots},uAct:{value:_},uNAct:{value:t.active},opacity:{value:1}},y=new on({uniforms:x,vertexShader:`varying vec3 vN; varying vec3 vP;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,fragmentShader:Ur+_R,transparent:!0,toneMapped:!1,premultipliedAlpha:!0});r.fades.push({material:y,base:1});const A=new bn;i.add(A),r.rot=A;const M=new bn;M.rotation.z=-.12,A.add(M);const b=new sn(tf(),y);b.renderOrder=0,M.add(b);const[L,z,C]=vR[o.id]??[4,.2,.15],U=l>7e3,D=U?1:o.id==="sun"?.6:0,N=1+1.8*D,T=C>.3,O=[],F=new k(0,1,0),G=g(u.hot.map((Tt,I)=>Tt*.7+u.bright[I]*.3));for(let Tt=0;Tt<L;Tt++){const I=new bn,mt=.7+h()*.6,Et=z*mt,q=C*mt*1.25,nt=new k(-Math.sin(Et/2),Math.cos(Et/2),0),At=new k(Math.sin(Et/2),Math.cos(Et/2),0),Ut=new k(0,0,1),st=[],ut=8;for(let Ct=0;Ct<ut;Ct++){const Rt=Ct<2,re=[],le=q*(Rt?.85:.6+.5*h()),Wt=(h()-.5)*Et*(Rt?.1:.3),jt=(h()-.5)*q*.6,ve=h()*6.28,qe=2+h()*3,Se=(h()-.5)*.5;for(let Q=0;Q<=48;Q++){const at=Q/48,vt=new k().copy(nt).lerp(At,at).normalize(),Dt=Math.sin(Math.PI*at),Nt=1+le*Math.pow(Dt,.75)*(1+.1*Math.sin(at*qe*3.1+ve)),_t=vt.multiplyScalar(Nt);_t.addScaledVector(Ut,(Wt+jt*Dt+.05*q*Math.sin(at*qe*5+ve))*Dt),_t.x+=Se*q*Dt*Dt,re.push(_t)}const Be=new my(re),Z=Rt?q*(.13+.05*h()):q*(.018+.05*h()*h()),We=new t0(Be,96,Z,Rt?10:7,!1),ye={uColor:{value:g(U?u.prom.map((Q,at)=>Q*.55+u.bright[at]*.45):u.prom)},uHotC:{value:G},opacity:{value:1},uTime:{value:0},uSeed:{value:Tt*5.1+Ct*1.7},uGrow:{value:1},uDrift:{value:0},uReveal:{value:1.2},uBright:{value:1},uCore:{value:Rt?.2:1},uWide:{value:Rt?1:0},uSpeed:{value:N}};st.push(ye);const P=zi(new on({uniforms:ye,vertexShader:SR,fragmentShader:Qi+Ur+yR,depthWrite:!1,transparent:!0,toneMapped:!1,side:Oi}));r.fades.push({material:P,base:1});const E=new sn(We,P);E.renderOrder=1,I.add(E)}M.add(I),O.push({g:I,u:st,t0:0,D:10,erupt:!1,hm:1,gap:0})}const W=new xa,it=new xa,H=new k,$=Tt=>{const I=h()<(U?.8:.65),mt=h()*Math.PI*2,Et=I?-.12+h()*.35:.3+h()*.6,q=Math.sqrt(1-Et*Et);H.set(Math.cos(mt)*q,Math.sin(mt)*q,Et),M.getWorldQuaternion(W).invert(),H.applyQuaternion(W).normalize(),Tt.g.quaternion.setFromUnitVectors(F,H).multiply(it.setFromAxisAngle(F,h()*Math.PI*2))},K=(Tt,I,mt)=>{Tt.erupt=h()<.14+.16*D;const Et=(1-.5*D)*(T?1.25:1);Tt.D=(Tt.erupt?10+h()*4:7+h()*4)*Et,Tt.hm=Tt.erupt?1.2:.75+h()*.45,Tt.gap=(1+h()*5)*(1-.5*D)*(T?1.4:1);const q=mt*(Tt.D+Tt.gap);Tt.t0=I-q,$(Tt)};let Y=!1;const dt=(Tt,I,mt)=>{let Et=0,q=0,nt=1;const At=1.2,Ut=st=>st*st*(3-2*st);if(I<.4){const st=I/.4;Et=Ut(Math.max(0,(st-.08)/.92)),nt=1+.6*Math.exp(-Math.pow(st/.12,2))}else if(I<.6){const st=(I-.4)/.2;Et=1+.06*Math.sin(st*Math.PI),nt=1+.45*Math.sin(st*Math.PI)}else{const st=Math.min(1,(I-.6)/.4);Tt.erupt?(Et=1.05,q=1.1*st*st*Tt.hm*C*6,nt=1.1*(1-Ut(st))):(Et=1-Ut(st),nt=1-.25*st)}D>0&&(nt*=(1+.7*D)*(1+D*(.22*Math.sin(mt*7.3+Tt.hm*11)+.14*Math.sin(mt*13.1+Tt.D)+.1*Math.sin(mt*23.7))));for(const st of Tt.u)st.uGrow.value=Et*Tt.hm,st.uReveal.value=At,st.uDrift.value=q,st.uBright.value=nt,st.uTime.value=mt},rt=4.4,lt={uGlow:{value:g(u.glow??u.mid.map((Tt,I)=>Tt*.75+u.bright[I]*.25))},uHotGlow:{value:g(u.bright.map((Tt,I)=>Tt*.6+u.hot[I]*.4))},opacity:{value:1},uG:{value:rt},uTime:{value:0},uStrength:{value:t.glow},uFlame:{value:t.flame}},xt=zi(new on({uniforms:lt,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+xR,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:xt,base:1});const qt=new sn(Xa(),xt);return qt.scale.set(2*rt,2*rt,1),qt.renderOrder=2,i.add(qt),r.update=(Tt,I,mt,Et,q)=>{const nt=Et?0:Tt;x.uTime.value=nt,lt.uTime.value=nt;const At=Tt/DS,Ut=nt/DS;Y||(Y=!0,O.forEach(st=>K(st,At,h()))),O.forEach((st,ut)=>{if(Et){st.g.visible=ut===0,ut===0&&dt(st,.12,0);return}const Ct=(At-st.t0)/st.D;if(Ct>=1){st.g.visible=!1,(Ct-1)*st.D>st.gap&&K(st,At,0);return}dt(st,Math.max(0,Ct),Ut),st.g.visible=Ct>=0&&(st.u[0].uGrow.value>.01||st.u[0].uDrift.value>0)}),x.uPx.value=mt*Vn.dpr,Et||(M.rotation.y+=I*.012*ff*(o.id==="sun"?Om:1)*q)},r}const bR=`
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
}`,Dy=`
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
`,ER=`
uniform float opacity, uPx, uSeed, uKind, uBright, uAsp;
uniform vec3 uTint;
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
    c = uTint*I*uBright;
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
}`,TR=`
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
}`,vf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ";function kc(o,t,i,r,l,u){const h={opacity:{value:1},uC:{value:new k(...l).multiplyScalar(u)}},d=zi(new on({uniforms:h,vertexShader:vf,fragmentShader:Qi+"uniform float opacity; uniform vec3 uC; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*4.0)*(1.0 - smoothstep(0.8, 1.0, r)) + exp(-r*18.0)*1.5; gl_FragColor = premul(uC*g, opacity); }",depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:d,base:1});const p=new sn(Xa(),d);return p.position.set(t,i,0),p.scale.setScalar(r*2),p}function Pm(o,t,i,r,l,u=[1,.93,.84]){const h={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uKind:{value:t},uBright:{value:r},uAsp:{value:l},uTint:{value:new k(...u)}},d=zi(new on({uniforms:h,vertexShader:vf,fragmentShader:Qi+Ur+Dy+ER,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:d,base:1}),{mesh:new sn(Xa(),d),uPx:h.uPx}}function AR(o,t,i){const r={opacity:{value:1},uPx:{value:10},uSeed:{value:i},uSpan:{value:t*2}},l=zi(new on({uniforms:r,vertexShader:vf,fragmentShader:Qi+Ur+Dy+TR,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new sn(Xa(),l);return u.scale.setScalar(t*2),u.renderOrder=-1,{mesh:u,uPx:r.uPx}}const wR={gold:[1,.8,.52],grey:[.78,.8,.84],blue:[.7,.82,1],dust:[.42,.26,.13],knot:[1,.55,.6],warm:[.95,.82,.62],warmR:.22,knotAmt:0};function Ny(o,t){const i=new bn,r={group:i,fades:[],dot:"#e9dcc4"},l=t.pal??wR,u=[];if(t.field){const y=AR(r,2.3,t.seed);i.add(y.mesh),u.push({u:y.uPx,k:1})}const h={uTime:{value:0},uArms:{value:t.arms},uPitch:{value:t.pitch},uBar:{value:t.bar},uBulge:{value:t.bulge},uDust:{value:t.dust},uSeed:{value:t.seed},uPx:{value:500},opacity:{value:1},uSpin:{value:0},uFloc:{value:t.floc},uClump:{value:t.clump},uRing:{value:t.ring},uGold:{value:new k(...l.gold)},uGrey:{value:new k(...l.grey)},uBlue:{value:new k(...l.blue)},uDustC:{value:new k(...l.dust)},uKnot:{value:new k(...l.knot)},uWarm:{value:new k(...l.warm)},uWarmR:{value:l.warmR},uKnotAmt:{value:l.knotAmt},uGain:{value:l.gain??1}},d=zi(new on({uniforms:h,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+bR,depthWrite:!1,transparent:!0,toneMapped:!1,side:Oi}));r.fades.push({material:d,base:1});const p=new bn;i.add(p),r.rot=p;const m=new bn;m.rotation.set(t.tilt,0,t.pa,"ZXY"),p.add(m);const v=new sn(Xa(),d);v.scale.set(2.5,2.5,1),m.add(v);const _={opacity:{value:1}},g=zi(new on({uniforms:_,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+"uniform float opacity; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*18.0)*0.35 + exp(-r*6.0)*0.08; gl_FragColor = premul(vec3(1.0, 0.82, 0.58)*g, opacity); }",depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:g,base:1});const x=new sn(Xa(),g);x.scale.set(t.bulge*3.2,t.bulge*3.2,1),x.renderOrder=3,i.add(x);for(const[y,A,M,b,L,z]of t.sats??[]){const C=Pm(r,0,t.seed+y*13,z,b/M);C.mesh.position.set(y,A,0),C.mesh.scale.setScalar(M*2.4),C.mesh.rotation.z=L,C.mesh.renderOrder=2,i.add(C.mesh),u.push({u:C.uPx,k:M})}return r.update=(y,A,M,b,L)=>{h.uPx.value=M*Vn.dpr;for(const z of u)z.u.value=M*z.k*Vn.dpr;b||(h.uSpin.value+=A*.008*ff*L)},r}const RR=`
uniform float uTime, opacity, uQ, uIn, uOut, uGain, uQuasar, uPx;
uniform vec3 uHot, uCool, uRing;
uniform mat3 uM;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
void main(){
  vec2 p = (vUv - 0.5)*2.0*uQ;
  float b = length(p);
  if (b > uQ) discard;
  vec3 pos = uM*vec3(p, 12.0);
  vec3 vel = uM*vec3(0.0, 0.0, -1.0);
  float h2 = dot(cross(pos, vel), cross(pos, vel));
  vec3 col = vec3(0.0);
  float alpha = 0.0;
  bool captured = false;
  for (int i = 0; i < 90; i++) {
    float r = length(pos);
    if (r < 1.0) { captured = true; break; }
    if (r > 14.0 && dot(pos, vel) > 0.0) break;
    float dt = clamp(0.085*r*r/(1.0 + r), 0.02, 1.0);
    vec3 acc = -1.5*h2*pos/pow(r, 5.0);
    vec3 v2 = vel + acc*dt;
    vec3 np = pos + v2*dt;
    if (pos.y*np.y < 0.0 && alpha < 0.99) {
      float t = pos.y/(pos.y - np.y);
      vec3 hp = mix(pos, np, t);
      float rr = length(hp.xz);
      if (rr > uIn*0.92 && rr < uOut) {
        float ang = atan(hp.z, hp.x);
        float om = pow(rr, -1.5);
        float fl = ang + uTime*om*1.6;
        vec3 q1 = vec3(cos(fl)*2.4, sin(fl)*2.4, rr*2.2);
        float wv = snoise(q1*0.7 + 4.0);
        float n1 = snoise(q1 + wv*0.6);
        float n2 = snoise(vec3(cos(fl)*6.0, sin(fl)*6.0, rr*6.5 + 3.1) + wv*0.4);
        float n3 = snoise(vec3(cos(fl)*15.0, sin(fl)*15.0, rr*15.0 + 7.7));
        float streak = 0.68 + 0.26*n1 + 0.14*n2 + 0.07*n3;
        float x = uIn/rr;
        float T = pow(x, 0.75)*pow(max(1.0 - sqrt(x*0.93), 0.0), 0.25)*2.2;
        float edge = smoothstep(uIn*0.92, uIn*1.08, rr)*smoothstep(uOut, uOut*0.62, rr);
        // doppler: disk orbits counter-clockwise about +y
        vec3 vd = normalize(vec3(-hp.z, 0.0, hp.x));
        float beta = min(0.7, sqrt(0.5/max(rr - 1.0, 0.3)));
        float gam = inversesqrt(1.0 - beta*beta);
        float cosT = dot(vd, -normalize(v2));
        float g = sqrt(max(1.0 - 1.0/rr, 0.0))/(gam*(1.0 - beta*cosT));
        float I = T*T*streak*edge*pow(g, 3.0);
        vec3 c = mix(uCool, uHot, clamp(pow(T, 1.6)*g*0.75, 0.0, 1.0));
        vec3 e = c*I*uGain*1.3;
        float a = clamp(edge*(0.35 + 0.55*streak)*clamp(T*1.4, 0.0, 1.0), 0.0, 0.92);
        col += (1.0 - alpha)*e;
        alpha += (1.0 - alpha)*a;
      }
    }
    vel = v2; pos = np;
  }
  // photon ring just outside the shadow (critical impact parameter 3√3/2 rs)
  float px = max(uPx, 1.0);
  float w = max(0.018, 1.6/px);
  col += (1.0 - alpha*0.6)*uRing*(exp(-pow((b - 2.598)/w, 2.0))*0.9 + exp(-pow((b - 2.64)/(w*5.0), 2.0))*0.18)*uGain;
  if (captured) alpha = 1.0;
  // quasar: hot light scattered around the inner disk
  if (uQuasar > 0.0) {
    float q = exp(-b*0.9)*0.9 + exp(-b*b/26.0)*0.22 + exp(-b*0.35)*0.08;
    col += mix(uHot, uCool, 0.6)*q*uQuasar*(captured ? 0.12 : 1.0);
  }
  col = 1.0 - exp(-col*1.1);
  float fade = smoothstep(uQ, uQ*0.8, b);
  col *= fade;
  alpha = max(alpha*fade, clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0));
  gl_FragColor = vec4(col, alpha)*opacity;
}`;function CR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color},l=new bn;i.add(l),r.rot=l;const u=new bn;u.rotation.set(t.tilt,0,t.roll,"ZXY"),l.add(u);const h=(_o[o.id]??6)+.6,d={uTime:{value:0},opacity:{value:1},uQ:{value:h},uIn:{value:t.disk[0]},uOut:{value:t.disk[1]},uGain:{value:t.gain},uQuasar:{value:t.quasar},uPx:{value:300},uHot:{value:new k(...t.hot)},uCool:{value:new k(...t.cool)},uRing:{value:new k(...t.ring)},uM:{value:new pe}},p=zi(new on({uniforms:d,vertexShader:vf,fragmentShader:Ur+RR,depthWrite:!1,depthTest:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:p,base:1});const m=new sn(Xa(),p);m.scale.set(2*h,2*h,1),i.add(m);const v=new xa,_=new rn;let g=0;return r.update=(x,y,A,M)=>{M||(g+=y),d.uTime.value=g,d.uPx.value=A*Vn.dpr,v.copy(l.quaternion).multiply(u.quaternion).invert(),d.uM.value.setFromMatrix4(_.makeRotationFromQuaternion(v))},r}function DR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color,flat:!0},l={uMap:{value:null},opacity:{value:1},uMask:{value:new se(...t.mask)},uSat:{value:t.sat??1},uGain:{value:0},uAspect:{value:t.aspect}},u=zi(new on({uniforms:l,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+`uniform sampler2D uMap; uniform float opacity, uSat, uGain, uAspect; uniform vec2 uMask; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));r.fades.push({material:u,base:1});const h=new sn(Xa(),u),d=2/t.fill;h.scale.set(d,d*t.aspect,1),i.add(h);let p=!1;return r.wantTex=()=>{p||(p=!0,nf(t.src).then(m=>{l.uMap.value=m,l.uGain.value=t.gain??1}))},r}function NR(o){const t={opacity:{value:1},uDpr:{value:1},uScale:{value:1}},i=zi(new on({uniforms:t,vertexShader:`attribute float aSize; attribute vec3 aColor; attribute float aAlpha; uniform float uDpr, uScale; varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        float s = aSize*uDpr*uScale; gl_PointSize = max(s, 1.0); vA *= min(1.0, s*s); }`,fragmentShader:Qi+`uniform float opacity; varying vec3 vC; varying float vA;
      void main(){ vec2 q = gl_PointCoord-0.5; float d = dot(q,q)*4.0; float a = exp(-d*3.2); if (a < 0.01) discard; gl_FragColor = premul(vC*a*vA, opacity); }`,depthWrite:!1,transparent:!0,toneMapped:!1}));return o.fades.push({material:i,base:1}),{m:i,u:t}}function UR(o,t){const i=t.length,r=new Float32Array(i*3),l=new Float32Array(i),u=new Float32Array(i*3),h=new Float32Array(i);t.forEach((_,g)=>{r[g*3]=_.x,r[g*3+1]=_.y,r[g*3+2]=0,l[g]=_.s,u.set(_.c,g*3),h[g]=_.a});const d=new qn;d.setAttribute("position",new oi(r,3)),d.setAttribute("aSize",new oi(l,1)),d.setAttribute("aColor",new oi(u,3)),d.setAttribute("aAlpha",new oi(h,1));const{m:p,u:m}=NR(o),v=new OE(d,p);return v.frustumCulled=!1,{points:v,u:m}}function Dl(o,t,i,r){const l=new qn;l.setAttribute("position",new oi(new Float32Array(t),3));const u=ef(o,new fy({color:i,opacity:r,depthWrite:!1,toneMapped:!1})),h=new UE(l,u);return h.frustumCulled=!1,h}function vo(o,t,i){const r={opacity:{value:1},uC:{value:new k(...t)},uRim:{value:i.rim},uRimW:{value:i.rimW},uFill:{value:i.fill},uInner:{value:i.inner??0},uDash:{value:i.dash??0},uNoise:{value:i.noise??0},uOff:{value:i.offset??0}},l=zi(new on({uniforms:r,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:Qi+Ur+`uniform float opacity, uRim, uRimW, uFill, uInner, uDash, uNoise, uOff; uniform vec3 uC; varying vec2 vUv;
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
      }`,depthWrite:!1,transparent:!0,toneMapped:!1}));o.fades.push({material:l,base:1});const u=new sn(Xa(),l);return u.scale.set(2.4,2.4,1),u}const Ha=[1,.93,.82],Ar=[.83,.65,.45],LR=[.85,.9,1];function OR(o,t,i=1){const r=[];for(let l=0;l<t;l++){const u=o()*Math.PI*2,h=Math.sqrt(o())*.96;r.push([Math.cos(u)*h,Math.sin(u)*h*i,o()])}return r}function US(o,t,i=3){const r=[];for(let l=0;l<o.length;l++){const u=[];for(let h=0;h<o.length;h++){if(l===h)continue;const d=Math.hypot(o[l][0]-o[h][0],o[l][1]-o[h][1]);d<t&&u.push([d,h])}u.sort((h,d)=>h[0]-d[0]);for(const[,h]of u.slice(0,i))r.some(([d,p])=>d===h&&p===l)||r.push([l,h])}return r}function PR(o,t){const i=new bn,r={group:i,fades:[],dot:o.color,flat:!0},l=Ry(o.id.length*7919+17),u=[],h=v=>{const{points:_,u:g}=UR(r,v);return i.add(_),u.push(g.uScale),g},d=[],p=v=>{const _=h(v);return d.push(_.uDpr),_};let m;switch(t.kind){case"heliosphere":{i.add(vo(r,[.72,.8,.95],{rim:.32,rimW:.035,fill:.07,inner:.78,dash:90,noise:1}));const v=[];for(let _=0;_<260;_++){const g=l()*Math.PI*2,x=.04+l()*.2,y=.35+l()*.5;v.push(Math.cos(g)*x,Math.sin(g)*x,0,Math.cos(g)*y,Math.sin(g)*y,0)}i.add(Dl(r,v,6050886,.35)),p([{x:0,y:0,s:6,c:[1,.95,.85],a:1},{x:0,y:0,s:18,c:[1,.85,.6],a:.35}]);break}case"oort":{const v=[];for(let _=0;_<42e3;_++){const g=l()*2-1,x=l()*Math.PI*2,y=Math.pow(.03+l()*.97,.33),A=Math.sqrt(1-g*g);v.push({x:y*A*Math.cos(x),y:y*g,s:.9+l()*1.1,c:LR,a:.18+l()*.4})}v.push({x:0,y:0,s:5,c:[1,.93,.8],a:1}),p(v),i.add(vo(r,[.8,.85,.95],{rim:.05,rimW:.12,fill:.03}));break}case"group":{i.add(vo(r,Ar,{rim:.12,rimW:.01,fill:.02,noise:1}));const v=[],_=[],g=(D,N,T,O,F)=>{const G=Ny({...o},{...F,field:0,sats:[]});G.group.position.set(N,T,0),G.group.scale.setScalar(O),G.fades.forEach(W=>r.fades.push(W)),i.add(G.group),v.push({o:G,r:O})},x=(D,N,T,O,F,G=1,W=0)=>{const it=Pm(r,O,D*91+N*37,F,G);it.mesh.position.set(D,N,0),it.mesh.scale.setScalar(T*2.4),it.mesh.rotation.z=W,i.add(it.mesh),_.push({u:it.uPx,r:T})},y=[-.2,-.12],A=[.25,.12];g("milkyway",y[0],y[1],.01,$c.milkyway),g("andromeda",A[0],A[1],.0152,$c.andromeda),g("triangulum",A[0]+.1,A[1]-.08,.006,{type:"galaxy",arms:2,pitch:.4,bar:0,bulge:.06,dust:.6,seed:5.3,floc:.9,clump:1.2,ring:0,tilt:-.9,pa:.4,pal:{...$c.andromeda.pal,grey:[.62,.68,.9],knot:[1,.35,.5],gold:[1,.92,.8]}});const M=[[y[0]+.018,y[1]-.028,.0014,1,1.2,.8,.3],[y[0]+.03,y[1]-.027,8e-4,1,1,.7,.8],[y[0]-.05,y[1]+.077,6e-4,0,.55],[y[0]+.04,y[1]+.042,5e-4,0,.45],[y[0]-.045,y[1]-.025,4e-4,0,.4],[y[0]+.02,y[1]+.16,5e-4,0,.45],[y[0]+.003,y[1]+.006,6e-4,0,.35,.4,1.2],[A[0]-.004,A[1]-.007,9e-4,0,.8,.6,.9],[A[0]+.011,A[1]+.04,5e-4,0,.55],[A[0]-.006,A[1]+.05,5e-4,0,.5,.7],[-.35,.13,7e-4,1,.9,.8,.2],[.05,.35,8e-4,1,.7,.9,.5],[-.55,-.55,6e-4,1,.8,.45,1.3]];for(const[D,N,T,O,F,G,W]of M)x(D,N,T,O,F,G??1,W??0);const b=[{x:y[0],y:y[1],s:60,c:Ha,a:.16},{x:A[0],y:A[1],s:76,c:[.9,.86,1],a:.16}];for(const[D,N,,T]of M)b.push({x:D,y:N,s:T?14:9,c:T?[.82,.8,1]:Ha,a:T?.45:.35});for(let D=0;D<60;D++){const N=D<22?y:D<44?A:[0,0],T=D<44?.06:.4;b.push({x:N[0]+Tr(l)*T,y:N[1]+Tr(l)*T,s:1.3+l()*1.4,c:Ha,a:.35+l()*.4})}p(b),r.labels=[{x:y[0],y:y[1],r:.01,name:"milky way",major:!0,left:!0},{x:A[0],y:A[1],r:.0152,name:"andromeda",major:!0},{x:A[0]+.1,y:A[1]-.08,r:.006,name:"triangulum"},{x:y[0]+.024,y:y[1]-.028,r:.008,name:"magellanic clouds"},{x:y[0]+.02,y:y[1]+.16,r:.001,name:"leo i"},{x:-.35,y:.13,r:.001,name:"ngc 6822"},{x:.05,y:.35,r:.001,name:"ic 1613"},{x:-.55,y:-.55,r:.001,name:"wlm"}],i.add(kc(r,y[0],y[1],.09,[.85,.8,.7],.05)),i.add(kc(r,A[0],A[1],.11,[.78,.74,.95],.05));const L=[],z=A[0]-y[0],C=A[1]-y[1],U=Math.hypot(z,C);for(let D=.05;D<.95;D+=.02){const N=D+.01;L.push(y[0]+z*D,y[1]+C*D,0,y[0]+z*N,y[1]+C*N,0)}i.add(Dl(r,L,10123861,.9)),r.labels.push({x:y[0]+z*.62,y:y[1]+C*.62,r:0,name:`${(U*5).toFixed(1)}m light-years`}),m=(D,N,T,O,F)=>{for(const G of v)G.o.update?.(D,N,T*G.r,O,F);for(const G of _)G.u.value=T*G.r*Vn.dpr};break}case"dwarf":{const v=[];for(let _=0;_<650;_++){const g=Math.max(1e-4,l()*.97),x=.62/Math.sqrt(Math.pow(g,-2/3)-1);if(x>1.7)continue;const y=l()*Math.PI*2,A=l()<.04,M=l()<.08;v.push({x:Math.cos(y)*x,y:Math.sin(y)*x*.92,s:M?3.2+l()*1.8:1.5+l()*1.3,c:A?[.75,.84,1]:M?[1,.78,.52]:[1,.9,.76],a:M?1:.6+l()*.4})}p(v),i.add(kc(r,0,0,.8,[1,.88,.72],.1));break}case"elliptical":{const v=[],_=(x,y,A,M,b,L,z)=>{const C=Pm(r,0,x*91+y*37+5,M,b,z);C.mesh.position.set(x,y,0),C.mesh.scale.setScalar(A*2.4),C.mesh.rotation.z=L,i.add(C.mesh),v.push({u:C.uPx,r:A})};i.add(kc(r,0,0,1.25,[1,.8,.5],.09)),_(0,0,1,1.25,.56,.62,[1,.8,.52]);for(let x=0;x<26;x++){const y=l()*Math.PI*2,A=.45+Math.pow(l(),.7)*1.1,M=.012+l()*l()*.07;_(Math.cos(y)*A,Math.sin(y)*A*.8,M,.8+l()*.6,.55+l()*.45,l()*3.14,l()<.2?[.86,.88,1]:[1,.86,.66])}const g=[];for(let x=0;x<260;x++){const y=l()*Math.PI*2,A=Math.sqrt(l())*1.9;g.push({x:Math.cos(y)*A,y:Math.sin(y)*A*.8,s:.9+l()*.9,c:l()<.7?Ha:[.85,.88,1],a:.15+l()*.3})}p(g),m=(x,y,A)=>{for(const M of v)M.u.value=A*M.r*Vn.dpr};break}case"supercluster":{const v=OR(l,90,.72);v.push([.05,0,1]);const _=[],g=[];for(const[x,y]of US(v,.42)){_.push(v[x][0],v[x][1],0,v[y][0],v[y][1],0);const A=Math.hypot(v[x][0]-v[y][0],v[x][1]-v[y][1]);for(let M=0;M<260*A;M++){const b=l();g.push({x:v[x][0]+(v[y][0]-v[x][0])*b+Tr(l)*.01,y:v[x][1]+(v[y][1]-v[x][1])*b+Tr(l)*.01,s:1+l(),c:l()<.7?Ha:Ar,a:.25+l()*.4})}}for(const[x,y,A]of v)for(let M=0;M<30+A*90;M++)g.push({x:x+Tr(l)*.013,y:y+Tr(l)*.013,s:1.1+l()*1.3,c:Ha,a:.4+l()*.5});i.add(Dl(r,_,6967864,.8)),p(g),i.add(vo(r,Ar,{rim:0,rimW:.1,fill:.05,noise:1}));break}case"laniakea":{const g=[];for(let y=0;y<220;y++){const A=l()*Math.PI*2,M=.5+l()*.48;let b=Math.cos(A)*M,L=Math.sin(A)*M*.86;const z=(l()-.5)*1.5;for(let C=0;C<80;C++){const U=.08-b,D=.05-L,N=Math.hypot(U,D);if(N<.03)break;const T=U/N+-D/N*z*N,O=D/N+U/N*z*N,F=b+T*.016,G=L+O*.016;g.push(b,L,0,F,G,0),b=F,L=G}}i.add(Dl(r,g,4866098,.9));const x=[];for(let y=0;y<16e3;y++){const A=l()*Math.PI*2,M=Math.pow(l(),.7)*.98;x.push({x:Math.cos(A)*M,y:Math.sin(A)*M*.86,s:.9+l()*1.1,c:l()<.8?Ha:Ar,a:.15+l()*.4})}x.push({x:.08,y:.05,s:30,c:Ar,a:.3}),p(x),i.add(vo(r,Ar,{rim:.14,rimW:.008,fill:.04}));break}case"universe":{i.add(vo(r,Ar,{rim:.5,rimW:.05,fill:.05,noise:1}));const v=[];for(let x=0;x<700;x++){const y=l()*2-1,A=l()*Math.PI*2,M=Math.cbrt(l())*.985,b=Math.sqrt(1-y*y);v.push([M*b*Math.cos(A),M*y,l()])}const _=[],g=[];for(const[x,y]of US(v,.16)){_.push(v[x][0],v[x][1],0,v[y][0],v[y][1],0);const A=Math.hypot(v[x][0]-v[y][0],v[x][1]-v[y][1]);for(let M=0;M<500*A;M++){const b=l();g.push({x:v[x][0]+(v[y][0]-v[x][0])*b+Tr(l)*.004,y:v[x][1]+(v[y][1]-v[x][1])*b+Tr(l)*.004,s:.8+l()*.8,c:l()<.6?Ha:Ar,a:.1+l()*.18})}}for(const[x,y,A]of v)g.push({x,y,s:3+A*6,c:Ha,a:.12+A*.14});g.push({x:0,y:0,s:3,c:[.96,.95,.92],a:1}),i.add(Dl(r,_,6179379,.5)),p(g);break}}return r.update=(v,_,g,x,y)=>{m?.(v,_,g,x,y);const A=Math.min(1,Math.max(.35,g/260));for(const M of u)M.value=A;for(const M of d)M.value=Vn.dpr},r}class Vn{constructor(t,i){this.bodies=i,this.renderer=new fR({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=jn,this.renderer.toneMapping=Fm,this.renderer.toneMappingExposure=1.15,Cy=this.renderer.capabilities.getMaxAnisotropy();const r=new cT(16775406,3.7);r.position.set(-1,.75,.85),this.scene.add(r),this.scene.add(new fT(8949920,.006))}bodies;static dpr=1;renderer;scene=new Fx;camera=new Xl(-1,1,1,-1,-10,10);objs=new Map;st=new Map;now=0;state(t){let i=this.st.get(t);return i||(i={vx:0,vy:0,last:-1e9,dragging:!1,tx:0,ty:0,gx:0,gy:0},this.st.set(t,i)),i}static qa=new xa;static ax=new k;turn(t,i,r){const l=Vn.qa;i&&(l.setFromAxisAngle(Vn.ax.set(0,1,0),i),t.quaternion.premultiply(l)),r&&(l.setFromAxisAngle(Vn.ax.set(1,0,0),r),t.quaternion.premultiply(l))}grabKind(t){const i=this.objs.get(t);return i?i.rot?"rotate":i.flat?"tilt":null:null}grab(t){const i=this.state(t);i.dragging=!0,i.vx=0,i.vy=0,i.last=this.now}drag(t,i,r,l,u){const h=this.objs.get(t),d=this.state(t);if(h)if(d.last=this.now,h.rot){const p=i/Math.max(l,40),m=r/Math.max(l,40);this.turn(h.rot,p,m);const v=Math.min(1,u*18);d.vx+=(p/Math.max(u,1/240)-d.vx)*v,d.vy+=(m/Math.max(u,1/240)-d.vy)*v}else h.flat&&(d.gx=Math.max(-.35,Math.min(.35,d.gx+i/Math.max(l,80)*.5)),d.gy=Math.max(-.35,Math.min(.35,d.gy+r/Math.max(l,80)*.5)))}release(t,i){const r=this.state(t);r.dragging=!1,r.last=this.now,r.gx=0,r.gy=0,i&&(r.vx=0,r.vy=0);const l=12;r.vx=Math.max(-l,Math.min(l,r.vx)),r.vy=Math.max(-l,Math.min(l,r.vy))}w=1;h=1;resize(t,i,r){this.w=t,this.h=i,Vn.dpr=r,this.renderer.setPixelRatio(r),this.renderer.setSize(t,i,!1)}obj(t){let i=this.objs.get(t);if(!i){const r=this.bodies[t],l=$c[r.id];i=l.type==="planet"?gR(r,l):l.type==="star"?MR(r,l):l.type==="image"?DR(r,l):l.type==="galaxy"?Ny(r,l):l.type==="bh"?CR(r,l):PR(r,l),i.group.visible=!1,this.scene.add(i.group),this.objs.set(t,i)}return i}has(t){return this.objs.has(t)}rtA=null;rtB=null;rtC=null;fsScene=new Fx;fsCam=new Xl(-1,1,1,-1,0,1);fsQuad=null;blurMat=null;compMat=null;setupDof(){const t=Math.max(1,Math.round(this.w*Vn.dpr)),i=Math.max(1,Math.round(this.h*Vn.dpr)),r=(l,u,h)=>{const d=new Pi(l,u,{samples:h,depthBuffer:h>0});return d.texture.colorSpace=jn,d.texture.internalFormat="RGBA8",d};if((!this.rtA||this.rtA.width!==t||this.rtA.height!==i)&&(this.rtA?.dispose(),this.rtB?.dispose(),this.rtC?.dispose(),this.rtA=r(t,i,4),this.rtA.isXRRenderTarget=!0,this.rtB=r(Math.ceil(t/2),Math.ceil(i/2),0),this.rtC=r(Math.ceil(t/2),Math.ceil(i/2),0)),!this.fsQuad){const l="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }";this.blurMat=new on({uniforms:{tMap:{value:null},uDir:{value:new se}},vertexShader:l,fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tMap, vUv)*0.2270;
            c += (texture2D(tMap, vUv + uDir*1.3846) + texture2D(tMap, vUv - uDir*1.3846))*0.3162;
            c += (texture2D(tMap, vUv + uDir*3.2308) + texture2D(tMap, vUv - uDir*3.2308))*0.0703;
            gl_FragColor = c;
          }`,depthTest:!1,depthWrite:!1,blending:Zi,toneMapped:!1}),this.compMat=new on({uniforms:{tSharp:{value:null},tSoft:{value:null},uAmt:{value:0}},vertexShader:l,fragmentShader:`uniform sampler2D tSharp, tSoft; uniform float uAmt; varying vec2 vUv;
          void main(){ gl_FragColor = mix(texture2D(tSharp, vUv), texture2D(tSoft, vUv), uAmt); }`,depthTest:!1,depthWrite:!1,blending:Zi,toneMapped:!1}),this.fsQuad=new sn(new Eo(1,1),this.blurMat),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad)}}renderDof(t,i){this.setupDof();const r=this.renderer,l=this.camera,u=this.rtA,h=this.rtB,d=this.rtC,p=this.fsQuad,m=this.blurMat,v=this.compMat;t.group.visible=!1,r.setRenderTarget(u),r.clear(),r.render(this.scene,l),t.group.visible=!0;const _=2.6*Vn.dpr*i/2;p.material=m,m.uniforms.tMap.value=u.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=d.texture,m.uniforms.uDir.value.set(_/h.width*.5,0),r.setRenderTarget(h),r.render(this.fsScene,this.fsCam),m.uniforms.tMap.value=h.texture,m.uniforms.uDir.value.set(0,_/d.height*.5),r.setRenderTarget(d),r.render(this.fsScene,this.fsCam),r.setRenderTarget(null),r.clear(),p.material=v,v.uniforms.tSharp.value=u.texture,v.uniforms.tSoft.value=d.texture,v.uniforms.uAmt.value=Math.min(1,i*1.4),r.render(this.fsScene,this.fsCam);const g=[];for(const x of this.objs.values())x!==t&&x.group.visible&&(x.group.visible=!1,g.push(x));r.autoClear=!1,r.render(this.scene,l),r.autoClear=!0;for(const x of g)x.group.visible=!0}render(t,i,r,l,u,h,d=0){this.now=i;for(const g of this.objs.values())g.group.visible=!1;let p=10,m=0;for(const g of t){const x=this.obj(g.i);x.wantTex?.(u&&Math.abs(g.i-h)<=1),x.group.visible=!0,x.group.position.set(g.x-this.w/2,this.h/2-g.y,m),x.group.scale.setScalar(g.rs);for(const b of x.fades){const L=b.base*g.alpha;b.material.opacity=L;const z=b.material.uniforms;z&&z.opacity&&(z.opacity.value=L)}const y=this.state(g.i);if(x.rot&&!y.dragging&&(y.vx||y.vy)){this.turn(x.rot,y.vx*r,y.vy*r);const b=Math.exp(-r*2.4);y.vx*=b,y.vy*=b,Math.abs(y.vx)+Math.abs(y.vy)<.002&&(y.vx=0,y.vy=0),(y.vx||y.vy)&&(y.last=i)}if(x.flat){const b=1-Math.exp(-r*(y.dragging?14:5));y.tx+=(y.gx-y.tx)*b,y.ty+=(y.gy-y.ty)*b,x.group.rotation.set(y.ty,y.tx,0)}const A=i-y.last,M=l?0:Math.min(1,Math.max(0,(A-3)/2));x.update?.(i,r,g.rs,l,M),p=Math.max(p,g.rs*3),m+=0}const v=this.camera;v.left=-this.w/2,v.right=this.w/2,v.top=this.h/2,v.bottom=-this.h/2,v.near=-p*1.1,v.far=p*1.1,v.position.set(0,0,0),v.updateProjectionMatrix();const _=this.objs.get(h);d>.01&&_&&_.group.visible&&t.length>1?this.renderDof(_,d):this.renderer.render(this.scene,v)}async warm(t,i){this.prefetch(t,i);for(let u=0;u<4;u++){const h=zl.size;if(await Promise.allSettled([...zl.values()]),zl.size===h)break}const r=[t-1,t,t+1,t+2].filter(u=>u>=0&&u<this.bodies.length).map(u=>this.obj(u)),l=r.map(u=>u.group.visible);r.forEach(u=>{u.group.visible=!0});try{const u=this.renderer;u.compileAsync&&u.extensions.has("KHR_parallel_shader_compile")?await u.compileAsync(this.scene,this.camera):u.compile(this.scene,this.camera)}catch{}r.forEach((u,h)=>{u.group.visible=l[h]})}prefetch(t,i){for(const r of[t,t+1,t-1,t+2])r<0||r>=this.bodies.length||this.obj(r).wantTex?.(i&&Math.abs(r-t)<=1)}}class zR{constructor(t){this.canvas=t,this.ctx=t.getContext("2d",{alpha:!1})}canvas;ctx;field=null;margin=0;w=0;h=0;dpr=1;meteors=[];next=4+Math.random()*5;twinkle=[];reduced=!1;resize(t,i,r){this.w=t,this.h=i,this.dpr=r,this.canvas.width=Math.round(t*r),this.canvas.height=Math.round(i*r),this.build()}build(){const t=this.canvas.height,i=this.dpr;this.margin=Math.round(this.canvas.width*.12);const r=this.canvas.width+this.margin,l=document.createElement("canvas");l.width=r,l.height=t;const u=l.getContext("2d");u.fillStyle="#0a0a0b",u.fillRect(0,0,r,t);let h=918273;const d=()=>(h=h*16807%2147483647)/2147483647,p=()=>Math.sqrt(-2*Math.log(d()+1e-9))*Math.cos(2*Math.PI*d()),m=-.42,v=r*.5,_=t*.55,g=Math.cos(m),x=Math.sin(m),y=(z,C,U,D,N)=>{for(let T=0;T<D;T++){const O=(d()-.5)*Math.hypot(r,t)*1.1,F=z+p()*C,G=v+g*O-x*F,W=_+x*O+g*F,it=C*(.6+d()*1.6),H=u.createRadialGradient(G,W,0,G,W,it);H.addColorStop(0,U.replace("A",String(N*(.5+d())))),H.addColorStop(1,U.replace("A","0")),u.fillStyle=H,u.fillRect(G-it,W-it,it*2,it*2)}},A=Math.min(r,t)*.1;y(0,A,"rgba(200,190,175,A)",90,.0065),y(0,A*.45,"rgba(225,205,180,A)",70,.006);const M=r*t/(i*i),b=Math.round(M/520),L=(z,C,U)=>{const D=d(),N=D<.12?[255,214,170]:D<.25?[200,215,255]:[244,241,234],T=Math.min(1,.12+Math.pow(U,2.2)*.9),O=(.55+U*1.1)*i;if(O<=1.35)u.fillStyle=`rgba(${N[0]},${N[1]},${N[2]},${T*Math.max(.35,O)})`,u.fillRect(Math.round(z),Math.round(C),1,1);else{const F=O,G=u.createRadialGradient(z,C,0,z,C,F);G.addColorStop(0,`rgba(${N[0]},${N[1]},${N[2]},${T})`),G.addColorStop(.35,`rgba(${N[0]},${N[1]},${N[2]},${T*.45})`),G.addColorStop(1,`rgba(${N[0]},${N[1]},${N[2]},0)`),u.fillStyle=G,u.beginPath(),u.arc(z,C,F,0,Math.PI*2),u.fill()}};for(let z=0;z<b;z++)L(d()*r,d()*t,Math.pow(d(),6));for(let z=0;z<b*.9;z++){const C=(d()-.5)*Math.hypot(r,t)*1.1,U=p()*A*.7,D=v+g*C-x*U,N=_+x*C+g*U;D<0||N<0||D>=r||N>=t||L(D,N,Math.pow(d(),9)*.6)}this.twinkle=[];for(let z=0;z<Math.round(M/18e3);z++)this.twinkle.push({x:d()*r,y:d()*t,r:(.8+d()*.8)*i,a:.3+d()*.5,p:d()*6.28});this.field=l}draw(t,i,r){const{ctx:l}=this,u=this.canvas.width;if(!this.field)return;l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="source-over",l.globalAlpha=1;const h=Math.round(Math.max(0,Math.min(1,t))*this.margin);if(l.drawImage(this.field,-h,0),!this.reduced){for(const d of this.twinkle){const p=d.a*(.5+.5*Math.sin(i*1.3+d.p)),m=d.x-h;m<0||m>u||(l.fillStyle=`rgba(244,241,234,${p*.6})`,l.fillRect(Math.round(m),Math.round(d.y),Math.max(1,Math.round(d.r)),Math.max(1,Math.round(d.r))))}this.meteorsStep(r)}}meteorsStep(t){const{ctx:i}=this,r=this.dpr;if(document.visibilityState==="visible"&&(this.next-=t),this.next<=0){this.next=6+Math.random()*9;const l=this.w,u=this.h,h=Math.random()<.5?-1:1,d=.25+Math.random()*.35,p=700+Math.random()*600;this.meteors.push({x:l*(.15+Math.random()*.7),y:u*(.05+Math.random()*.35),vx:Math.cos(d)*p*h,vy:Math.sin(d)*p,len:110+Math.random()*130,life:.55+Math.random()*.5,age:0,tan:Math.random()<.35,w:1+Math.random()*.6})}i.globalCompositeOperation="lighter",this.meteors=this.meteors.filter(l=>{if(l.age+=t,l.age>l.life)return!1;l.x+=l.vx*t,l.y+=l.vy*t;const u=l.age/l.life,h=Math.min(1,u*6)*(1-Math.pow(u,2)),d=Math.hypot(l.vx,l.vy),p=l.vx/d,m=l.vy/d,v=l.len*Math.min(1,u*4),_=l.x*r,g=l.y*r,x=(l.x-p*v)*r,y=(l.y-m*v)*r,A=-m*l.w*r*.5,M=p*l.w*r*.5,b="244,241,234",L=i.createLinearGradient(_,g,x,y);return L.addColorStop(0,`rgba(${b},${.85*h})`),L.addColorStop(.25,`rgba(${b},${.35*h})`),L.addColorStop(1,`rgba(${b},0)`),i.fillStyle=L,i.beginPath(),i.moveTo(_+A,g+M),i.lineTo(x,y),i.lineTo(_-A,g-M),i.closePath(),i.fill(),i.fillStyle=`rgba(255,250,240,${.9*h})`,i.beginPath(),i.arc(_,g,l.w*r*.6,0,Math.PI*2),i.fill(),!0}),i.globalCompositeOperation="source-over"}}const Ip=.5,LS=13*Math.PI/180,Xc=[Math.cos(LS),-Math.sin(LS)],Bp=.06;function OS(o,t){let i=Math.min(window.devicePixelRatio||1,3);const r=3840*2160*1.6;return o*t*i*i>r&&(i=Math.sqrt(r/(o*t))),Math.max(1,i)}function zm(o,t){return Math.max(1,Math.min(o/1600,t/1e3,2.4))}class hf{constructor(t,i,r,l=Dr){this.bgCanvas=t,this.overlay=r,this.bodies=l,this.bg=new zR(t);try{this.gl=new Vn(i,l)}catch(u){console.warn("webgl unavailable, drawing flat discs",u)}this.octx=r.getContext("2d")}bgCanvas;overlay;bodies;gl=null;bg;octx;w=0;h=0;dpr=1;hiRes=!1;lastTime=0;layout={cx:0,cy:0,base:200};fits=[];reduced=!1;ui=1;quality=1;hitInfo=null;dofOn=!0;acc=null;static rgb(t){return[1,3,5].map(i=>parseInt(t.slice(i,i+2),16))}resize(t,i){this.w=t,this.h=i,this.dpr=Math.max(1,OS(t,i)*this.quality),this.ui=zm(t,i),this.overlay.width=Math.round(t*this.dpr),this.overlay.height=Math.round(i*this.dpr),this.bg.resize(t,i,this.dpr),this.gl?.resize(t,i,this.dpr);const r=t<768;r&&(this.dofOn=!1),this.bgCanvas.style.filter=this.dofOn?"blur(0.6px)":"";const l=r?Math.min(t*.34,i*.2):Math.min(i*.3,t*.22);this.layout=r?{cx:t*.5,cy:i*.36,base:l}:{cx:t*.6,cy:i*.5,base:l},this.fits=this.bodies.map((u,h)=>this.fit(h,r)),this.hiRes=l*2*this.dpr>700}fit(t,i){const{w:r,h:l,ui:u,bodies:h}=this,{cx:d,cy:p,base:m}=this.layout;if(t===0)return{f:1,cx:d};const v=U=>_o[h[U].id]??1,_=m/(Pp[h[t].id]??1),g=_*v(t),x=_*(h[t-1].radiusKm/h[t].radiusKm)*v(t-1),y=g+x+Ip*Math.max(g,x),A=U=>Math.max(x*U+7*u,11*u),M=U=>1.1*g*U+8,b=i?14*u:376*u,L=i?l-400*u:l-84*u,z=i?r:r*.68;let C=1;for(;C>.3;C-=.01){const U=b+y*C*Xc[0]+A(C),D=Math.min(z,r-M(C)-(i?14:24)*u);if(!(U>D&&U>d)&&!(p-y*C*Xc[1]+A(C)>L))return{f:C,cx:Math.max(d,U)}}return{f:C,cx:d}}lowerQuality(){return this.dofOn?(this.dofOn=!1,this.bgCanvas.style.filter="",!0):OS(this.w,this.h)*this.quality<=1.01?!1:(this.quality*=.8,this.resize(this.w,this.h),!0)}hit(t,i){const r=this.hitInfo;if(!r||!this.gl)return null;const l=this.gl.grabKind(r.i);if(!l)return null;const u=_o[this.bodies[r.i].id]??1,h=r.rs*(l==="rotate"?Math.max(1.04,u*.8):.9*u);return Math.hypot(t-r.x,i-r.y)>Math.max(h,16)?null:{i:r.i,kind:l,rs:r.rs}}grab(t){this.gl?.grab(t)}drag(t,i,r,l,u){this.gl?.drag(t,i,r,l,u)}release(t){this.gl?.release(t,this.reduced)}prefetch(t){this.gl?.prefetch(t,this.hiRes)}async ready(t){const i=document.fonts?Promise.all(['400 16px "Courier Prime"','700 16px "Courier Prime"','400 16px "Instrument Serif"'].map(r=>document.fonts.load(r).catch(()=>null))).then(()=>document.fonts.ready):Promise.resolve();await Promise.all([i,this.gl?.warm(t,this.hiRes)])}draw(t,i){const r=this.lastTime?Math.min(.05,i-this.lastTime):.016;this.lastTime=i;const{w:l,h:u,bodies:h}=this,d=h.length;t=Math.max(0,Math.min(d-1,t));let p=Math.floor(t),m=t-p;p>=d-1&&(p=d-2,m=1);const v=p+1,_=h[p].radiusKm*(Pp[h[p].id]??1),g=h[v].radiusKm*(Pp[h[v].id]??1),x=Math.exp(Math.log(_)+(Math.log(g)-Math.log(_))*m),{cy:y,base:A}=this.layout,M=this.fits[p]??{f:1,cx:this.layout.cx},b=this.fits[v]??M,L=M.cx+(b.cx-M.cx)*m,z=A*Math.exp(Math.log(M.f)+(Math.log(b.f)-Math.log(M.f))*m)/x,C=hf.rgb(h[Math.round(t)].accent);if(!this.acc||this.reduced)this.acc=C.slice();else{const H=1-Math.exp(-r/.16);this.acc=this.acc.map(($,K)=>$+(C[K]-$)*H)}const U=this.acc.map(Math.round).join(",");this.bg.reduced=this.reduced,this.bg.draw(t/(d-1),i,r);const D=H=>h[H].radiusKm*(_o[h[H].id]??1),N=new Array(d);N[p]=0;for(let H=p+1;H<d;H++)N[H]=N[H-1]+D(H-1)+D(H)+Ip*Math.max(D(H-1),D(H));for(let H=p-1;H>=0;H--)N[H]=N[H+1]-(D(H+1)+D(H)+Ip*Math.max(D(H+1),D(H)));const T=m*N[v]*(x/g),O=Math.round(t),F=Math.max(0,1-Math.abs(t-O)*3),G=Math.hypot(l,u),W=this.octx;W.setTransform(this.dpr,0,0,this.dpr,0,0),W.clearRect(0,0,l,u);const it=[];for(let H=d-1;H>=0;H--){const $=H-t,K=$<=0?1:$<1?Bp+(1-Bp)*(1-$):$<2?Bp*(2-$):0;if(K<=.001)continue;const Y=h[H].radiusKm*z;if(Y<.04)continue;const dt=(N[H]-T)*z,rt=L+Xc[0]*dt,lt=y+Xc[1]*dt;if(!(Y>G*8)){if(Y<1.5){const xt=this.gl?.has(H)?this.gl.obj(H).dot:h[H].color;W.globalAlpha=K*Math.min(1,.35+Y),W.fillStyle=xt,W.beginPath(),W.arc(rt,lt,Math.max(Y,.75),0,Math.PI*2),W.fill(),W.globalAlpha=1}else this.gl?it.push({i:H,x:rt,y:lt,rs:Y,alpha:K}):(W.globalAlpha=K,W.fillStyle=h[H].color,W.beginPath(),W.arc(rt,lt,Y,0,Math.PI*2),W.fill(),W.globalAlpha=1);if(H===O-1&&F>.01&&this.marker(rt,lt,Y*(_o[h[H].id]??1),h[H].accent,F),H===O&&(this.hitInfo=F>.6&&Y>8?{i:H,x:rt,y:lt,rs:Y}:null),H===O&&F>.01&&this.gl?.has(H)){const xt=this.gl.obj(H).labels;xt&&this.labels(rt,lt,Y,xt,F)}if(H===O&&F>.01&&Y>20){const xt=Y*(_o[h[H].id]??1)*1.1+8;W.strokeStyle=`rgba(${U},${.42*F})`,W.lineWidth=1,W.beginPath();const qt=-Math.PI*.62;W.arc(rt,lt,xt,qt,qt+Math.PI*2*(this.reduced?1:1-Math.pow(1-F,3))),W.stroke()}}}this.gl?.render(it,i,r,this.reduced,this.hiRes,O,this.dofOn?F*F:0)}labels(t,i,r,l,u){const h=this.octx,d=this.ui;h.textBaseline="middle",h.textAlign="left";for(const p of l){const m=t+p.x*r,v=i-p.y*r;if(p.r===0){h.font=`${Math.round(10*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=`rgba(161,161,170,${.55*u})`,h.textAlign="center",h.fillText(p.name,m,v-10*d),h.textAlign="left";continue}const _=Math.max(p.r*r,3*d),g=p.left?-1:1,x=m+g*(_*.72+4*d),y=v-_*.72-4*d;h.strokeStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.55*u})`:`rgba(161,161,170,${.35*u})`,h.lineWidth=1,h.beginPath(),h.moveTo(x,y),h.lineTo(x+g*10*d,y-10*d),h.lineTo(x+g*18*d,y-10*d),h.stroke(),h.font=`${Math.round((p.major?11:10)*d)}px "Courier Prime", "Courier New", ui-monospace, SFMono-Regular, Menlo, monospace`,h.fillStyle=p.major?`rgba(${this.acc?.map(Math.round).join(",")??"212,165,116"},${.9*u})`:`rgba(161,161,170,${.75*u})`,h.textAlign=p.left?"right":"left",h.fillText(p.name,x+g*22*d,y-10*d),h.textAlign="left"}}marker(t,i,r,l,u){const h=this.octx,d=Math.max(r+7*this.ui,11*this.ui);h.strokeStyle=`rgba(${hf.rgb(l).join(",")},${.4*u})`,h.lineWidth=1,h.beginPath(),h.arc(t,i,d,0,Math.PI*2),h.stroke()}}function IR(o,t=Math.random){const i=Math.floor(o*.032),r=new Float32Array(i),l=1+(t()-.5)*.12,u=Math.floor(o*(.0045+t()*.002)),h=.22+t()*.12,d=new Float32Array(i),p=o*6e-4;for(let x=0;x<i;x++){let y=(t()*2-1)*Math.exp(-x/p);const A=x-u;A>=0&&(y+=h*(t()*2-1)*Math.exp(-A/p)),d[x]=y}const m=(x,y,A)=>{const M=Math.exp(-1/(y*o)),b=2*Math.PI*x/o,L=2*M*Math.cos(b),z=-M*M;let C=0,U=0;for(let D=0;D<i;D++){const N=d[D]*(1-M)+L*C+z*U;U=C,C=N,r[D]+=N*A}};m(3800*l,.0028,2.4),m(940*l,.0034,.3),m(2100*l,.0012,.8),m(7200,6e-4,.45);let v=0;for(let x=0;x<i;x++){const y=d[x]-v;v=d[x],r[x]+=y*.006}let _=0;for(let x=0;x<i;x++)_=Math.max(_,Math.abs(r[x]));const g=Math.floor(o*.006);for(let x=0;x<i;x++)r[x]=r[x]/(_||1)*(x>i-g?(i-x)/g:1);return r}const wr=Dr.length,Fp=o=>String(o).padStart(2,"0"),Hp=(o,t,i)=>Math.max(t,Math.min(i,o));function BR(o){return o<768?12:Math.round(Math.max(32,Math.min(64,o*.026)))}const Gp=()=>({w:innerWidth,h:innerHeight,m:BR(innerWidth)});let Gn=null,Il=null,PS=0,Uy=-1e9;const FR=.034,HR=.12;function GR(){const o=navigator.userActivation;if(o&&!o.isActive)return!1;try{if(!Gn){Gn=new AudioContext({latencyHint:"interactive"}),Il=Gn.createGain(),Il.gain.value=.16;const t=Gn.createBiquadFilter();t.type="lowpass",t.frequency.value=11e3,t.Q.value=.5,Il.connect(t).connect(Gn.destination)}Gn.state!=="running"&&(Uy=performance.now(),Gn.resume().catch(()=>{}))}catch{return!1}return!0}function VR(){if(!Gn||!Il||Gn.state!=="running"&&performance.now()-Uy>400)return;const o=Gn.currentTime,t=Math.max(o+.002,PS);if(t-o>HR)return;PS=t+FR;const i=IR(Gn.sampleRate),r=Gn.createBuffer(1,i.length,Gn.sampleRate);r.copyToChannel(i,0);const l=Gn.createBufferSource();l.buffer=r;const u=Gn.createGain();u.gain.value=.85+Math.random()*.3,l.connect(u).connect(Il),l.start(t)}let zS=0;function kR(){const o=performance.now();if(o-zS<45||typeof navigator.vibrate!="function")return;const t=navigator.userActivation;if(!(t&&!t.hasBeenActive)){zS=o;try{navigator.vibrate(10)}catch{}}}function IS(){const o=decodeURIComponent(location.hash.slice(1)),t=Dr.findIndex(i=>i.id===o);return t>=0?t:0}function XR(){const o=Fe.useRef(null),t=Fe.useRef(null),i=Fe.useRef(null),r=Fe.useRef(null),l=Fe.useRef(IS()),u=Fe.useRef(l.current),h=Fe.useRef(0),d=Fe.useRef(l.current),p=Fe.useRef(null),m=Fe.useRef(!1),v=Fe.useRef(null),_=Fe.useRef(null),[g,x]=Fe.useState(l.current),[y,A]=Fe.useState(!1),[M,b]=Fe.useState(!1),[L,z]=Fe.useState(!1),[C,U]=Fe.useState(Gp),D=Fe.useRef(matchMedia("(prefers-reduced-motion: reduce)").matches),[N]=Fe.useState(()=>!D.current),[T,O]=Fe.useState(()=>D.current),[F,G]=Fe.useState(()=>{const ut=Gp();return zm(ut.w-ut.m*2,ut.h-ut.m*2)}),W=Fe.useCallback(ut=>{d.current=Hp(Math.round(ut),0,wr-1),m.current&&(u.current=d.current,h.current=0)},[]),it=Fe.useCallback(ut=>W(d.current+ut),[W]);Fe.useEffect(()=>{const ut=i.current,Ct=new hf(o.current,t.current,ut);v.current=Ct;const Rt=matchMedia("(prefers-reduced-motion: reduce)"),re=()=>{m.current=Rt.matches,Ct.reduced=Rt.matches};re(),Rt.addEventListener("change",re);const le=()=>{const Q=Gp();U(Q),Ct.resize(Q.w-Q.m*2,Q.h-Q.m*2),Ct.prefetch(d.current),G(zm(Q.w-Q.m*2,Q.h-Q.m*2))};le(),addEventListener("resize",le);let Wt=!1;const jt=()=>new Promise(Q=>requestAnimationFrame(()=>Q()));Promise.race([Ct.ready(l.current).then(jt).then(jt).then(jt),new Promise(Q=>setTimeout(Q,6e3))]).catch(()=>{}).then(()=>{Wt||z(!0)});let ve=0,qe=performance.now(),Se=-1,Be=-1,Z=0,We=0,ye=0,P=0;const E=Q=>{const at=Math.min(.05,(Q-qe)/1e3);if(qe=Q,!p.current)if(m.current)u.current=d.current,h.current=0;else{const Dt=Math.max(1,Math.ceil(at/.008333333333333333)),Nt=at/Dt;for(let St=0;St<Dt;St++){const Lt=d.current-u.current;h.current+=(150*Lt-16*h.current)*Nt,u.current+=h.current*Nt}const _t=d.current-u.current;Math.abs(_t)<4e-4&&Math.abs(h.current)<.002&&(u.current=d.current,h.current=0)}Ct.draw(u.current,Q/1e3),P++,at>1/45&&ye++,We+=at,We>2&&(ye/P>.5&&Q-Z>3e3&&(Ct.lowerQuality(),Z=Q),We=0,P=0,ye=0),d.current!==Be&&(Be=d.current,Ct.prefetch(d.current));const vt=Hp(Math.round(u.current),0,wr-1);if(vt!==Se){if(Se>=0&&H.current){const Dt=Math.min(Math.abs(vt-Se),4);for(let Nt=0;Nt<Dt;Nt++)VR();kR()}Se=vt,x(vt),history.replaceState(null,"",`#${Dr[vt].id}`)}ve=requestAnimationFrame(E)};return ve=requestAnimationFrame(E),()=>{Wt=!0,cancelAnimationFrame(ve),removeEventListener("resize",le),Rt.removeEventListener("change",re)}},[]),Fe.useEffect(()=>{if(T)return;const ut=setTimeout(()=>O(!0),1150);return()=>clearTimeout(ut)},[T]),Fe.useEffect(()=>{L&&T&&b(!0)},[L,T]);const H=Fe.useRef(!1);Fe.useEffect(()=>{H.current=M},[M]),Fe.useEffect(()=>{try{localStorage.removeItem("scale-tour-sound")}catch{}const ut=["pointerdown","pointerup","keydown","touchstart","touchend","wheel","click"],Ct=()=>{GR(),Gn?.state==="running"&&ut.forEach(Rt=>removeEventListener(Rt,Ct,!0))};return ut.forEach(Rt=>addEventListener(Rt,Ct,{capture:!0,passive:!0})),()=>ut.forEach(Rt=>removeEventListener(Rt,Ct,!0))},[]),Fe.useEffect(()=>{const ut=Ct=>{if(Ct.metaKey||Ct.ctrlKey||Ct.altKey)return;const Rt=Ct.key;Rt==="ArrowRight"||Rt==="ArrowDown"||Rt==="PageDown"||Rt===" "||Rt==="j"?(Ct.preventDefault(),it(1)):Rt==="ArrowLeft"||Rt==="ArrowUp"||Rt==="PageUp"||Rt==="k"?(Ct.preventDefault(),it(-1)):Rt==="Home"?(Ct.preventDefault(),W(0)):Rt==="End"&&(Ct.preventDefault(),W(wr-1))};return addEventListener("keydown",ut),()=>removeEventListener("keydown",ut)},[W,it]),Fe.useEffect(()=>{const ut=()=>W(IS());return addEventListener("hashchange",ut),()=>removeEventListener("hashchange",ut)},[W]),Fe.useEffect(()=>{let ut=0,Ct=0,Rt=!1,re=0;const le=Wt=>{Wt.preventDefault();const jt=performance.now(),ve=(Math.abs(Wt.deltaY)>Math.abs(Wt.deltaX)?Wt.deltaY:Wt.deltaX)*(Wt.deltaMode===1?30:1);jt-Ct>180&&(Rt=!1,ut=0),Rt&&jt-re>900&&(Rt=!1,ut=0),Ct=jt,!Rt&&(ut+=ve,Math.abs(ut)>30&&(it(Math.sign(ut)),ut=0,Rt=!0,re=jt))};return addEventListener("wheel",le,{passive:!1}),()=>removeEventListener("wheel",le)},[it]);const $=ut=>{const Ct=r.current.getBoundingClientRect();return[ut.clientX-Ct.left,ut.clientY-Ct.top]},K=ut=>{r.current&&r.current.style.cursor!==ut&&(r.current.style.cursor=ut)},Y=ut=>{if(ut.button!==0)return;ut.target.setPointerCapture?.(ut.pointerId);const Ct=v.current?.hit(...$(ut));if(Ct&&!_.current){_.current={i:Ct.i,x:ut.clientX,y:ut.clientY,t:performance.now(),rs:Ct.rs,id:ut.pointerId},v.current.grab(Ct.i),K("grabbing");return}K("grabbing"),p.current={x:ut.clientX,y:ut.clientY,start:u.current,axis:0,lastT:performance.now(),lastP:u.current,v:0},h.current=0},dt=ut=>{const Ct=_.current;if(Ct){if(ut.pointerId!==Ct.id)return;const Be=performance.now();v.current?.drag(Ct.i,ut.clientX-Ct.x,ut.clientY-Ct.y,Ct.rs,Math.max(.001,(Be-Ct.t)/1e3)),Ct.x=ut.clientX,Ct.y=ut.clientY,Ct.t=Be;return}const Rt=p.current;if(!Rt){ut.pointerType==="mouse"&&K(v.current?.hit(...$(ut))?"grab":"default");return}const re=ut.clientX-Rt.x,le=ut.clientY-Rt.y;if(Rt.axis===0&&Math.hypot(re,le)>6&&(Rt.axis=Math.abs(re)>=Math.abs(le)?1:-1),Rt.axis===0)return;const Wt=Math.min(innerWidth,900)*.45,jt=Rt.axis===1?-re/Wt:-le/Wt;if(m.current)return;const ve=Hp(Rt.start+jt,-.25,wr-.75),qe=performance.now(),Se=Math.max(1,qe-Rt.lastT);Rt.v=.7*Rt.v+.3*((ve-Rt.lastP)/Se)*1e3,Rt.lastT=qe,Rt.lastP=ve,u.current=ve},rt=ut=>{const Ct=_.current;if(Ct){if(ut.pointerId!==Ct.id)return;_.current=null,performance.now()-Ct.t>90&&v.current?.drag(Ct.i,0,0,Ct.rs,.1),v.current?.release(Ct.i),K(ut.pointerType==="mouse"&&v.current?.hit(...$(ut))?"grab":"default");return}K("default");const Rt=p.current;if(p.current=null,!Rt)return;const re=ut.clientX-Rt.x,le=ut.clientY-Rt.y;if(m.current){const jt=Rt.axis===1?re:le;Math.abs(jt)>40&&it(jt<0?1:-1);return}if(Rt.axis===0)return;let Wt=Math.round(u.current+Rt.v*.12);Math.abs(Rt.v)>.8&&Wt===Math.round(Rt.start)&&(Wt+=Math.sign(Rt.v)),h.current=Rt.v*.5,W(Wt)},lt=Dr[g],xt=g>0?Dr[g-1]:null,qt=Eb(lt.sphere?lt.radiusKm:lt.radiusKm*2),Tt=xt?lt.radiusKm/xt.radiusKm:null,I=lt.radiusKm/bb.radiusKm,mt=g/(wr-1),{w:Et,h:q,m:nt}=C,At=Et-nt*2,Ut=q-nt*2,st=Et<768?12:16;return Ft.jsxs("div",{className:"accent-root fixed inset-0 select-none bg-black text-mist",style:{"--accent":lt.accent},children:[Ft.jsxs("div",{className:"absolute overflow-hidden bg-ink",style:{left:nt,top:nt,width:At,height:Ut,borderRadius:st},children:[Ft.jsxs("div",{ref:r,className:"scene-fade absolute inset-0 touch-none",onPointerDown:Y,onPointerMove:dt,onPointerUp:rt,onPointerCancel:rt,role:"group","aria-roledescription":"carousel","aria-label":"scale tour, from ceres to the observable universe",tabIndex:0,style:{opacity:M?1:0},"data-loaded":M||void 0,children:[Ft.jsx("canvas",{ref:o,className:"absolute inset-0 block h-full w-full"}),Ft.jsx("canvas",{ref:t,className:"absolute inset-0 block h-full w-full"}),Ft.jsx("canvas",{ref:i,className:"absolute inset-0 block h-full w-full"})]}),Ft.jsx("div",{className:"ui-fade ui-legible pointer-events-none absolute left-0 top-0 font-mono text-[11px] tracking-[0.05em]",style:{zoom:F,width:At/F,height:Ut/F,opacity:M?1:0,visibility:M?"visible":"hidden"},children:Ft.jsxs("div",{className:"absolute inset-0 p-5 md:p-7",children:[Ft.jsxs("div",{className:"pointer-events-auto absolute left-5 top-5 md:left-7 md:top-7",children:[Ft.jsxs("a",{href:"https://gmunoz512.github.io/german-plus/",className:"font-serif text-2xl leading-none tracking-normal text-paper",children:["german",Ft.jsx("span",{className:"text-accent",children:"+"})]}),Ft.jsx("p",{className:"mt-1.5 text-fog",children:"scale tour"})]}),Ft.jsxs("p",{"aria-hidden":!0,className:"absolute right-5 top-5 leading-6 md:right-7 md:top-7",children:[Ft.jsx("span",{className:"text-fog",children:"["}),Ft.jsx("span",{className:"text-paper",children:Fp(g+1)}),Ft.jsxs("span",{className:"text-fog",children:["/",Fp(wr),"]"]})]}),Ft.jsxs("section",{className:"absolute inset-x-5 bottom-[92px] md:inset-x-auto md:bottom-auto md:left-7 md:top-1/2 md:w-[320px] md:-translate-y-1/2","aria-live":"polite","aria-atomic":"true",children:[Ft.jsxs("p",{className:"text-accent",children:["[",Fp(g+1),"]"]}),Ft.jsx("h1",{className:"mt-1.5 font-mono text-[34px] leading-[1.05] tracking-[-0.01em] text-paper text-balance md:text-[48px]",children:lt.name}),Ft.jsxs("dl",{className:"mt-4 space-y-1 md:mt-5",children:[Ft.jsx(Vp,{label:lt.dim??(lt.sphere?"radius":"across"),value:`${qt.value} ${qt.unit}`}),Ft.jsx(Vp,{label:"vs previous",value:Tt?yx(Tt):"—",note:Tt?xt.name.replace(/^the /,""):"where i start"}),Ft.jsx(Vp,{label:"vs earth",value:yx(I)})]}),Ft.jsx("p",{className:"mt-4 font-mono text-[15px] leading-[1.5] tracking-[0.01em] text-paper-dim md:mt-5 md:text-[18px] md:leading-[1.45]",children:lt.fact}),lt.note&&Ft.jsx("p",{className:"mt-2 hidden font-mono text-[11px] leading-relaxed tracking-[0.02em] text-fog md:block",children:lt.note})]}),y&&Ft.jsxs("div",{className:"pointer-events-auto absolute bottom-20 left-5 right-5 z-10 max-w-md rounded-[10px] border border-line bg-ink-raised/95 p-5 font-mono text-[11px] leading-relaxed tracking-[0.02em] text-mist md:left-7 md:right-auto",children:[Ft.jsxs("div",{className:"flex items-baseline justify-between",children:[Ft.jsx("p",{className:"font-mono text-[13px] text-paper",children:"credits"}),Ft.jsx("button",{onClick:()=>A(!1),className:"font-mono text-[11px] tracking-[0.05em] text-fog hover:text-paper",children:"[close]"})]}),Ft.jsxs("ul",{className:"mt-3 space-y-1.5",children:[Ft.jsxs("li",{children:["planet maps: ",Ft.jsx("a",{className:"text-paper-dim underline decoration-line underline-offset-2 hover:text-accent",href:"https://www.solarsystemscope.com/textures/",children:"solar system scope"}),", cc by 4.0 (based on nasa data; ceres & makemake are their illustrative maps)"]}),Ft.jsx("li",{children:"pluto: nasa/jhuapl/swri (new horizons), unimaged south filled in · europa: usgs voyager/galileo mosaic · titan: nasa/jpl-caltech/ssi (cassini), toned to its haze — public domain"}),Ft.jsx("li",{children:"helix nebula: eso — cc by 4.0 · horsehead nebula: nasa, esa & the hubble heritage team (aura/stsci) — cc by 4.0"}),Ft.jsx("li",{children:"pillars of creation: nasa, esa, csa, stsci; j. depasquale, a. koekemoer, a. pagan (stsci) — webb, cc by 4.0"}),Ft.jsx("li",{children:"tarantula nebula: nasa, esa, eso, d. lennon & e. sabbi (esa/stsci) et al. — hubble, cc by 4.0 · black eye galaxy (m64): nasa, esa, hubble (2026 wfc3 image) — public domain"}),Ft.jsx("li",{children:"orion nebula: nasa, esa, m. robberto (stsci/esa) & the hubble orion treasury project team — public domain"}),Ft.jsx("li",{children:"omega centauri: eso/inaf-vst/omegacam, a. grado, l. limatola — cc by 4.0"}),Ft.jsx("li",{children:"kepler-22b, the black holes (live lensed ray march), segue 2, ic 1101, the sun & stars, the milky way, andromeda, the heliosphere, oort cloud, superclusters & the observable universe are live procedural renders (illustrations, styled after eso, hubble & amateur astrophotos). sizes & sources in the repo’s src/data.ts."})]}),Ft.jsx("p",{className:"mt-3 text-fog",children:"made by german, for fun. images are toned to fit the page."})]}),Ft.jsxs("footer",{className:"pointer-events-auto absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7",children:[Ft.jsxs("div",{className:"relative h-px w-full bg-line","aria-hidden":!0,children:[Ft.jsx("div",{className:"absolute inset-y-0 left-0 bg-accent",style:{width:`${mt*100}%`}}),Dr.map((ut,Ct)=>Ft.jsx("button",{onClick:()=>W(Ct),tabIndex:-1,title:ut.name,className:"absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer",style:{left:`${Ct/(wr-1)*100}%`},children:Ft.jsx("span",{className:`mx-auto block w-px ${Ct<=g?"bg-accent":"bg-fog/50"} ${Ct===g?"h-2.5":"h-1.5"}`})},ut.id))]}),Ft.jsxs("div",{className:"mt-3.5 flex items-center justify-between",children:[Ft.jsxs("p",{className:"text-fog",children:[Ft.jsxs("span",{className:"hidden md:inline",children:["[scroll · drag · ← →] ",Ft.jsx("span",{className:"text-fog/70",children:"drag a body to spin it"})]}),Ft.jsx("span",{className:"md:hidden",children:"[swipe · touch to spin]"}),Ft.jsx("span",{className:"mx-2 text-line",children:"/"}),Ft.jsx("button",{onClick:()=>A(ut=>!ut),className:"text-fog transition-colors hover:text-paper","aria-expanded":y,children:"credits"})]}),Ft.jsxs("div",{className:"flex items-center gap-1",children:[Ft.jsx(BS,{label:"previous",disabled:g===0,onClick:()=>it(-1),children:"[←]"}),Ft.jsx(BS,{label:"next",disabled:g===wr-1,onClick:()=>it(1),children:"[→]"})]})]})]})]})}),Ft.jsx("div",{className:`loader pointer-events-none absolute inset-0 flex items-center justify-center ${M||!T?"loader-done":""}`,"aria-hidden":M,role:"status",children:Ft.jsxs("div",{className:"flex flex-col items-center",children:[Ft.jsxs("p",{className:"font-serif text-lg leading-none text-paper/70",children:["german",Ft.jsx("span",{className:"text-accent/80",children:"+"})]}),Ft.jsx("div",{className:"mt-3 h-px w-24 overflow-hidden bg-line/60",children:Ft.jsx("div",{className:"loader-bar h-full bg-accent/70"})}),Ft.jsx("span",{className:"sr-only",children:"loading"})]})})]}),Ft.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:Et,height:q,"aria-hidden":!0,children:[Ft.jsx("g",{fill:"none",stroke:"#2a2a2e",strokeWidth:"1",className:N?"frame-draw":"",children:qR(nt+.5,nt+.5,Et-nt-.5,q-nt-.5,st).map((ut,Ct)=>Ft.jsx("path",{d:ut,pathLength:1},Ct))}),Ft.jsxs("g",{stroke:"#4a4a50",strokeWidth:"1",className:`frame-marks ${T?"frame-marks-on":""}`,children:[[[nt+14*F,nt+14*F],[Et-nt-14*F,nt+14*F],[nt+14*F,q-nt-14*F],[Et-nt-14*F,q-nt-14*F]].map(([ut,Ct],Rt)=>Ft.jsx("path",{d:`M${ut-4.5*F} ${Ct+.5}H${ut+.5+5*F}M${ut+.5} ${Ct-4.5*F}V${Ct+.5+5*F}`},Rt)),Et>=768&&[`M${Et/2+.5} ${nt}v${7*F}`,`M${Et/2+.5} ${q-nt}v${-7*F}`,`M${nt} ${q/2+.5}h${7*F}`,`M${Et-nt} ${q/2+.5}h${-7*F}`].map((ut,Ct)=>Ft.jsx("path",{d:ut},`t${Ct}`))]})]})]})}function qR(o,t,i,r,l){const u=(o+i)/2,h=(t+r)/2,d=l*(1-Math.SQRT1_2),p=[];for(const[m,v,_,g]of[[o,t,1,1],[i,t,-1,1],[o,r,1,-1],[i,r,-1,-1]]){const x=m+_*d,y=v+g*d,A=_*g>0?1:0;p.push(`M${x} ${y}A${l} ${l} 0 0 ${A} ${m+_*l} ${v}L${u} ${v}`),p.push(`M${x} ${y}A${l} ${l} 0 0 ${1-A} ${m} ${v+g*l}L${m} ${h}`)}return p}function Vp({label:o,value:t,note:i}){return Ft.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[Ft.jsx("dt",{className:"text-fog",children:o}),Ft.jsxs("dd",{className:"text-right",children:[i&&Ft.jsx("span",{className:"mr-2 text-fog/70",children:i}),Ft.jsx("span",{className:"text-fog",children:"["}),Ft.jsx("span",{className:"text-paper",children:t}),Ft.jsx("span",{className:"text-fog",children:"]"})]})]})}function BS({label:o,disabled:t,onClick:i,children:r}){return Ft.jsx("button",{"aria-label":o,disabled:t,onClick:i,className:"px-1.5 py-1 font-mono text-[12px] text-paper transition-colors hover:text-accent disabled:text-fog/40 disabled:hover:text-fog/40",children:r})}yb.createRoot(document.getElementById("root")).render(Ft.jsx(Fe.StrictMode,{children:Ft.jsx(XR,{})}));
